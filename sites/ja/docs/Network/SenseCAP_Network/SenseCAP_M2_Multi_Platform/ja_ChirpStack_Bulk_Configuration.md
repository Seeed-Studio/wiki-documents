---
description: この Wiki では、Python スクリプトを使用して、M2 Gateway のローカル LNS 上でデバイスインスタンスを一括作成および設定する方法を説明します。
title: M2 Gateway 上の ChirpStack の一括設定
keywords:
  - M2 gateway
  - LoRaWAN
  - Configuration
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/m2-white.webp
slug: /bulk_configuration_chirpstack
sku: 114992982, 114993135, 114992983, 114993088, 114992981, 114993080, 114993079
sidebar_position: 6
last_update:
  date: 6/12/2026
  author: David Du
createdAt: '2026-06-12'
updatedAt: '2026-06-12'
url: https://wiki.seeedstudio.com/ja/bulk_configuration_chirpstack/
---

このチュートリアルでは、ゲートウェイ内蔵の ChirpStack プラットフォーム上で、gRPC インターフェース経由により ABP（Activation By Personalization）モードの LoRaWAN デバイスを一括追加・有効化する Python スクリプトの使い方を説明します。この方法は、一度に多数のデバイス（センサーノードなど）を展開する必要があるシナリオに最適で、設定効率を大幅に向上させます。

## 1. 準備

開始する前に、次の要件を満たしていることを確認してください。

- ChirpStack を実行しており、IP アドレスが分かっている **M2 屋内ゲートウェイ** が 1 台あること。

- 少なくとも 1 つの **Application** を作成し、その **Application ID** を取得していること。

- **Device Profile**（ABP タイプ）を作成し、その **Device Profile ID** を取得していること。

- 設定対象となるデバイスのバッチを用意し、各デバイスについて次の情報を記録していること。

    `dev_eui`（デバイス固有識別子）

    `name`（デバイス名、省略可）

    `description`（デバイスの説明、省略可）

    `dev_addr`（デバイスアドレス）

    `nwk_s_key`（ネットワークセッションキー）

    `app_s_key`（アプリケーションセッションキー）

:::note
ABP デバイスにキーを割り当てる責任はユーザーにあります。各デバイスの `dev_addr` がネットワーク内で一意であること、またキーが LoRaWAN 仕様（32 文字の 16 進数文字列、すなわち 16 バイト）に準拠していることを確認してください。
:::

## 2. 環境構築

1. **スクリプトファイルの入手**
次の 2 つのファイルをダウンロードまたは作成し、同じディレクトリに配置します。

    `chirpstack-v3-bulk-deploy.py` – メインの Python スクリプト

    `device_list.xlsx` – デバイス一覧を含む Excel ファイル（後で記入）

スクリプトは [HERE](https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/chirpstack-v3-bulk-deploy.py) からダウンロードすることもできます。

2. **Python 依存パッケージのインストール**
このスクリプトには Python 3.7 以降が必要で、`grpcio`、`openpyxl`、`chirpstack-api` に依存します。システムの Python 環境を汚染しないよう、仮想環境の使用を推奨します。

**macOS/Linux ユーザー向け：**

```bash 
# create project directory
mkdir chirpstack-bulk-deploy && cd chirpstack-bulk-deploy

# create virtual environment
python3 -m venv .venv

# activate the virtual environment
source .venv/bin/activate

# install dependencies
pip install chirpstack-api openpyxl
```

**Windows ユーザー向け：**

```bash 
# create project directory
mkdir chirpstack-bulk-deploy
cd chirpstack-bulk-deploy

# create virtual environment
python -m venv .venv

# activate the virtual environment
.venv\Scripts\activate

# install dependencies
pip install chirpstack-api openpyxl
```

## 3. 機器チェックリスト（Excel ファイル）の準備

Excel、WPS、または LibreOffice を使用して `device_list.xlsx` という名前のファイルを作成します。1 行目には必ず列ヘッダーを含めてください。スクリプトはこれらのヘッダーを使用して列を識別します。列名（**大文字・小文字を区別**）は次のとおりです。

|dev_eui|    name|    description|    dev_addr|    nwk_s_key|    app_s_key|
|---|---|---|---|---|---|
|0016c001f0abcde1|abp-device-1|test device|02010101|2B7E151628AED2A6ABF7158809CF4F31|2B7E151628AED2A6ABF7158809CF4F41|
|...|abp-device-2|test device|...|...|...|

<br />

:::note
`dev_eui` は 16 桁の 16 進数文字列である必要があります（例：0101010101010101）。

`nwk_s_key` と `app_s_key` は 32 桁の 16 進数文字列（すなわち 16 バイト）である必要があります。

デバイスの dev_eui が空の場合、その行はスクリプトによって自動的にスキップされます。

name または description が空の場合、スクリプトは空文字列で補完します。
:::

## 4. スクリプト設定の変更
`chirpstack-v3-bulk-deploy.py` を開き、ファイル先頭の設定パラメータを実際の環境に合わせて変更します。

```python
# ===== Configuration =====
GRPC_SERVER = "192.168.x.x:8080"   # replace with the real IP of the gateway + ChirpStack gRPC port（default 8080）
API_TOKEN = "YOUR API TOKEN"
APPLICATION_ID = "YOUR APPLICATION ID"
DEVICE_PROFILE_ID = "YOUR DEVICE PROFILE ID"
EXCEL_FILE = "device_list.xlsx"
# =================
```

**パラメータの説明：**

- **GRPC_SERVER**: ゲートウェイの IP アドレスと ChirpStack gRPC ポートです。デフォルトの ChirpStack gRPC ポートは 8080 です。PC がゲートウェイと同一サブネット上にあるか、ルーティング可能なアクセスがあることを確認してください。

- **API_TOKEN**: ChirpStack の API キーです。取得方法：ChirpStack の Web インターフェースにログイン → 右上のユーザーメニュー → “API Keys” → 新しい API キーを作成し、少なくとも次の権限を付与します：Device: create、Device: activate、Device keys: create。

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/get-api.png" style={{width:900, height:'auto'}}/></div></td>

<br />

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/api-token.png" style={{width:900, height:'auto'}}/></div></td>

<br />

- **APPLICATION_ID**: 対象アプリケーションの UUID です。ChirpStack Web インターフェース → Applications → 対象のアプリケーションを選択します。

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/application-id.png" style={{width:900, height:'auto'}}/></div></td>

<br />

- **DEVICE_PROFILE_ID**: デバイスプロファイルの UUID です。パス：Device profiles → ABP プロファイルを選択 → URL から取得します。

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/device-profile-id.png" style={{width:900, height:'auto'}}/></div></td>

<br />

- **EXCEL_FILE**: Excel ファイル名です。デフォルトではスクリプトと同じディレクトリに配置されます。

:::caution
API トークンは高い権限を持つため、第三者に開示したり、公開リポジトリにアップロードしたりしないでください。
:::

## 5. スクリプトを実行して一括デプロイ

仮想環境が有効になっており、`chirpstack-v3-bulk-deploy.py` と `device_list.xlsx` が同じディレクトリにあることを確認してから、次を実行します。

```bash
python3 chirpstack-v3-bulk-deploy.py
```

実行中はログがリアルタイムで出力されます。以下は正常に実行された場合の例です。

```bash
Starting batch configuration of ABP devices...
✓ Successfully read 2 devices from device_list.xlsx
✓ Device 0101010101010101 created 
✓ Device 0101010101010101 keys configured 
✓ Device 0101010101010101 ABP activated 
----------------------------------------
✓ Device 0202020202020202 created 
✓ Device 0202020202020202 keys configured 
✓ Device 0202020202020202 ABP activated 
----------------------------------------
...
Batch configuration completed.
```

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>