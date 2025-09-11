---
description: Wio Tracker デュアルスタックバージョン
title: Amazon Sidewalk と LoRaWAN ネットワークによるシームレスな資産追跡
keywords:
- トラッカー
- AWS
- Sidewalk
- LoRaWAN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/wio_tracker_dual_stack
sidebar_position: 8
sidebar_class_name: hidden
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

このデュアルデバイスデモで、シームレスなネットワーク統合を体験してください。このセットアップでは、多用途な Seeed Studio Wio Tracker Dev Board と堅牢な Seeed Studio SenseCAP T1000-S トラッカーデバイスを使用し、LoRaWAN と Sidewalk ネットワーク間のシームレスな切り替えを実現して最適なカバレッジを提供します。

* **デュアルネットワークサポート**: ボタンを一回押すだけで、LoRaWAN と Sidewalk を切り替え、持続的な接続を維持します。
* **クラウド接続**: データがリアルタイムで AWS IoT Core に転送され、AWS ウェブアプリを通じてノートパソコンのディスプレイ/モニター上で視覚化されます。
* **バッテリー駆動の効率性**: デバイスは一貫した動作を保証し、ワイヤレスで真のモバイル体験を提供します。

プロセスは以下の主要なステップに分かれています：

* [SDK のインストールとセットアップ](https://wiki.seeedstudio.com/ja/wio_tracker_dual_stack#setup-toolchain)
* [ファームウェアのフラッシング](https://wiki.seeedstudio.com/ja/wio_tracker_dual_stack#build-and-flash-the-demo)
* AWS IoT Core の設定
* Amazon Location の設定
* [ウェブアプリの設定](https://wiki.seeedstudio.com/ja/wio_tracker_dual_stack#building-web-app)



## 前提条件


### nRF Connect SDK のインストール

nRF Connect SDK をインストールする方法はいくつかあり、好みの開発環境や [ツールチェーン管理ツール](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#toolchain-management-tools) によって異なります：

* Visual Studio Code と nRF Connect for VS Code 拡張機能を使用する方法（推奨）
* コマンドラインと nRF Util を使用する方法

**ステップ 1: オペレーティングシステムの更新**

ツールチェーンのセットアップを開始する前に、オペレーティングシステムの利用可能な更新をインストールしてください。[要件](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements) を参照して、サポートされているオペレーティングシステムに関する情報を確認してください。

**ステップ 2: 必要なものをインストール**

<!-- コード -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="VSc" label="Visual Studio Code">

  
* 最新バージョンの <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements-clt">nRF Command Line Tools</a> パッケージ。<a href="https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Command-Line-Tools">nRF Command Line Tools</a> ページからダウンロードしてください。<br/>

* オペレーティングシステム用の最新バージョンの Visual Studio Code を <a href="https://code.visualstudio.com/download">Visual Studio Code ダウンロードページ</a> からダウンロードしてください。<br/>

* Visual Studio Code 内で、最新バージョンの <a href="https://marketplace.visualstudio.com/items?itemName=nordic-semiconductor.nrf-connect-extension-pack">nRF Connect for VS Code Extension Pack</a> をインストールしてください。

</TabItem>
<TabItem value="CLine" label="コマンドライン">

  
* 最新バージョンの <a href="https://www.nordicsemi.com/Products/Development-tools/nrf-util">nRF Util 開発ツール</a>。Nordic 製品用の統一コマンドラインユーティリティです。<br/>



<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
  <p style={{marginBottom: '0.5em'}}>
    <strong>注意:</strong>
  </p>
  <p style={{marginTop: '0'}}>
      nRF Util 実行ファイルをダウンロードした後、システムの <code>PATH</code> にあるディレクトリに移動してください。macOS および Linux では、ダウンロードしたファイルに実行権限を付与する必要があります。<code>chmod +x nrfutil</code> を入力するか、ファイルプロパティでチェックボックスをオンにしてください。
  </p>
</div>

* 最新バージョンの <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements-clt">nRF Command Line Tools</a> パッケージ。<a href="https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Command-Line-Tools">nRF Command Line Tools</a> ページからダウンロードしてください。



<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
    <p style={{marginBottom: '0.5em'}}>
      <strong>注意:</strong>
    </p>
    <p style={{marginTop: '0'}}>
      ツールをダウンロードしてインストールした後、環境変数で nrfjprog をシステムの <code>PATH</code> に追加してください。
    </p>
  </div>

</TabItem>
</Tabs>




**ステップ 3: nRF Connect SDK ツールチェーンのインストール**

<Tabs>
<TabItem value="VScode" label="Visual Studio Code 用 nRF Connect">
  

* Visual Studio Code の <code>Activity Bar</code> でアイコンをクリックして、nRF Connect 拡張機能を開きます。<br/><br/>
* 拡張機能の <code>Welcome View</code> で、<code>Install Toolchain</code> をクリックします。<br/><br/>
* インストールするツールチェーンのバージョンを選択します。ツールチェーンのバージョンは、使用する nRF Connect SDK のバージョンと一致する必要があります。ここでは <code>V2.5.0</code> を使用します（推奨）。<br/><br/>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/bar2.png"/></div>
ツールチェーンをインストールした後、<code>Manage toolchains</code> をクリックして <code>Install Toolchain</code> オプションにアクセスできます。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/manage-toolchain.png"/></div>

</TabItem>
<TabItem value="CL" label="コマンドライン">

* ターミナルウィンドウを開きます。

* 次のコマンドを実行して nRF Util ツールチェーンマネージャーコマンドをインストールします：
 ```cpp
 nrfutil install toolchain-manager
 ```

* 次のコマンドを実行して利用可能なインストールを一覧表示します：
 ```cpp
 nrfutil toolchain-manager search
 ```

このリストのバージョンは nRF Connect SDK のバージョンに対応しており、次のステップで使用するバージョンとなります。

* 次のコマンドを実行して、選択した SDK バージョンのツールチェーンバージョンをインストールします：
 ```cpp
 nrfutil toolchain-manager install --ncs-version version
 ```

例えば：
```cpp
nrfutil toolchain-manager install --ncs-version v2.5.0
```
この例のコマンドは、nRF Connect SDK v2.5.0（推奨）のために必要なツールチェーンをインストールします。

:::tip
ツールチェーンはデフォルトで以下の場所にインストールされます：
- Windows: C:/ncs/toolchains
- Linux: ~/ncs/toolchains
- macOS: /opt/nordic/ncs/toolchains
:::

現在の設定を確認するには、以下のコマンドを使用します：
<code>nrfutil toolchain-manager config --show</code>  
これらのコマンドについてさらに詳しく知りたい場合は、<code>nrfutil toolchain-manager --help</code> コマンドを使用してください。
</TabItem>
</Tabs>

---

**ステップ 4: nRF Connect SDK コードを取得する**

<Tabs>
<TabItem value="VScode4" label="nRF Connect for Visual Studio Code">

nRF Connect SDK コードをクローンするには、以下の手順を完了してください：

* Visual Studio Code の <code>Activity Bar</code> にあるアイコンをクリックして、nRF Connect 拡張機能を開きます。

* 拡張機能の <code>Welcome View</code> で <code>Manage SDKs</code> をクリックします。Visual Studio Code のクイックピックにアクションのリストが表示されます。

* <code>Install SDK</code> をクリックします。利用可能な SDK バージョンのリストが Visual Studio Code のクイックピックに表示されます。

* インストールする SDK バージョンを選択します。ここでは `V2.5.0` を使用します。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/manage-sdk2.png"/></div>

SDK のインストールが開始され、数分かかる場合があります。

</TabItem>
<TabItem value="CLine4" label="コマンドライン">

リポジトリをクローンするには、以下の手順を完了してください：

* コマンドラインで `ncs` ディレクトリを開きます。デフォルトでは、ツールチェーンをインストールした場所の1階層上にあります。このディレクトリにはすべての nRF Connect SDK リポジトリが格納されます。

* 以下のコマンドを使用して、オペレーティングシステムに適したツールチェーン環境を開始します：

  Windows:
  ```cpp
  nrfutil toolchain-manager launch --terminal
  ```
  Linux/macOS:
  ```cpp
  nrfutil toolchain-manager launch --shell
  ```

* 使用したい nRF Connect SDK のリビジョン識別子を確認します。詳細は上記の表を参照してください。nRF Connect SDK を初めてインストールする場合は、最新のリリースバージョンの SDK とツールチェーンをインストールすることを推奨します。

* 使用したい nRF Connect SDK のリビジョンを指定して west を初期化します。`nRFConnectSDK_revision` を識別子に置き換えてください：

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr nRFConnectSDK_revision
  ```
例えば：

  **特定のリリース**: v2.5.0 リリースをチェックアウトするには、以下のコマンドを入力します：
  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr v2.5.0
  ```
  **開発タグ**: v1.9.2-dev1 タグをチェックアウトするには、以下のコマンドを入力します：
  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr v1.9.2-dev1
  ```

  **ブランチ**: 最新の開発状態を含む main ブランチをチェックアウトするには、以下のコマンドを入力します：
  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr main
  ```
これにより、マニフェストリポジトリ sdk-nrf が nrf にクローンされます。

west を特定のマニフェストファイルのリビジョンで初期化しても、リポジトリがそのバージョンに固定されるわけではありません。sdk-nrf リポジトリ内で異なるブランチやタグをチェックアウトし、west update を実行すると、使用する nRF Connect SDK のバージョンが変更されます。

<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
    <p style={{marginBottom: '0.5em'}}>
      <strong>注意:</strong>
    </p>
    <p style={{marginTop: '0'}}>
      west 実行時にエラーメッセージが表示された場合は、west を最新バージョンに更新してください。詳細は Zephyr ドキュメントの <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/zephyr/develop/west/troubleshooting.html#west-troubleshooting">Troubleshooting West</a> を参照してください。
    </p>
  </div>

* 以下のコマンドを入力してプロジェクトリポジトリをクローンします：
  ```cpp
  west update
  ```

接続状況によっては、時間がかかる場合があります。

* Zephyr CMake パッケージをエクスポートします。これにより、CMake が nRF Connect SDK アプリケーションをビルドするために必要なボイラープレートコードを自動的にロードできるようになります：
  ```cpp
  west zephyr-export
  ```

詳細は [Installing the nRF Connect SDK](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/install_ncs.html#id9) を参照してください。

</TabItem>
</Tabs>

---

### Sidewalk 環境のセットアップ

以下の手順に従って、nRF Connect SDK 用の Sidewalk アプリケーションをダウンロードしてください：

* ターミナルウィンドウを開きます。ディレクトリ構造は以下のようになります：

```cpp
.
|___ .west
|___ bootloader
|___ modules
|___ nrf
|___ nrfxlib
|___ zephyr
|___ ...
```

* マニフェストパスが nrf ディレクトリ内の west.yml を指していることを確認してください：

```cpp
west manifest --path
/path-to-ncs-folder/nrf/west.yml
```
マニフェストパスが異なるファイルを指している場合は、以下のコマンドを使用してください：

```cpp
west config manifest.path nrf
```

* west に Sidewalk グループフィルターを有効化します：

```cpp
west config manifest.group-filter "+sidewalk"
```

west 内で Sidewalk の存在を確認します：

```cpp
west list sidewalk
sidewalk     sidewalk                     <sidewalk_revision> https://github.com/nrfconnect/sdk-sidewalk
```

* すべてのリポジトリを更新します：
```cpp
west update
```

接続状況によっては、更新に時間がかかる場合があります。

* Sidewalk 用の Python 要件をインストールします：
```cpp
pip install -r sidewalk/requirements.txt
```

---

### LR11xx を nRF Connect SDK Sidewalk 拡張機能に追加する

このリポジトリには、[LR11xx ファミリー](https://www.semtech.com/products/wireless-rf/lora-edge) のシリコンが [Nordic nRF52840 MCU](https://www.nordicsemi.com/Products/Development-hardware/nrf52840-dk) と nRF Connect SDK と組み合わせて Sidewalk プロトコルをサポートするためのソフトウェアドライバーが含まれています。このドライバーは静的ライブラリとして提供され、LoRa または FSK 接続をサポートするために必要な "Platform Abstraction Layer" インターフェースを実装しています。この静的ライブラリには、LR11xx シリコンの他の機能（例えば WIFI や GNSS スキャンおよび測距）にアクセスするために使用できる Semtech の SWDR001 (LR11xx Driver) の完全な実装が含まれています。

* [SWDM016](https://drive.google.com/drive/folders/1vHJVEFgyx4arHHPlSjdMkffVStnTpHqg?usp=sharing) をダウンロードします。

* 作業ディレクトリをクローンした nordic リポジトリのトップレベルディレクトリ、すなわち ``~/ncs/<version>/sidewalk`` に設定します。

 ```cpp
 patch -p1 < ../nRF52840_LR11xx_driver_v010000.diff
 ```
親ディレクトリパス `..` は、差分ファイルをそこに配置したことを想定しています。それ以外の場合は、ファイルの場所へのフルパスを指定してください。

* ラジオドライバライブラリ ``lib*.a`` を sidewalk プロジェクトの ``~/ncs/<version>/sidewalk/lib/lora_fsk/`` にコピーします。  
2つのライブラリが提供されており、1つは ``LOG_RUNTIME_FILTERING`` が有効化されており、もう1つは無効化されています。

* ``~/template_lbm_wio_tracker/boards/arm/wio_tracker_1110`` フォルダを ``~/ncs/v2.5.0/zephyr/boards/arm`` にコピーします。

```cpp
·
├─── .west/
├─── modules/
├─── nrf/
├─── ...
└─── zephyr/
     └─── Boards/
          └─── arm/
               └─── wio_tracker_1110/
```

### リソースの作成

**ステップ 1: Cloud9 環境のデプロイ**

このセクションでは、作業を開始する前に必要なすべてのリソースを作成します。最初のステップとして、Cloud9 ワークスペースを作成し、それを使用して他のリソースを構築およびデプロイします。その後、Asset Tracker アプリのバックエンドリソースを含む CDK スタックをデプロイします。最後に、すべてのフロントエンド依存関係をインストールし、アプリを構成します。

* [AWS Cloud9 コンソール](https://us-east-1.console.aws.amazon.com/cloud9/home?region=us-east-1) を開き、`Create Environment` をクリックします。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/cloud-9-environment.png"/></div>

* **Instance type** を `m5.large` に設定し、それ以外の設定はデフォルトのままにします。

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/001/002/c9.3.png"/></div>

**ステップ 2: 前提条件の構成**

* Cloud9 IDE を開きます。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/open-cloud9.png"/></div>

* 次のコマンドを入力して、Cloud9 環境のターミナルで GitHub リポジトリをクローンします。

 ```cpp
 git clone --recurse-submodules https://github.com/aws-samples/aws-iot-asset-tracker-demo.git /home/ec2-user/environment/asset-tracking-workshop
 ``` 
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/open-could9.png"/></div>

* サンプルアプリのディレクトリに移動します。

 ```cpp
 cd ~/environment/asset-tracking-workshop
 ```

* 基盤となる EC2 インスタンスの EBS ボリュームをリサイズします。

 ```cpp
 npm run utils:resizeC9EBS
 ```

* プロジェクトの依存関係をインストールします。
 ```cpp
 npm ci
 ```

* バックエンドインフラストラクチャをデプロイします。
 ```cpp
 # AWS アカウントを CDK 用に準備
 npm run infra:bootstrap
 # バックエンドリソースをデプロイ
 npm run infra:deploy
 ```

* 設定ファイルを作成します。

 ```cpp
 npm run utils:createConfig
 ```

## LoRaWAN の構成

### AWS に LoRaWAN ゲートウェイを追加

[こちらの手順](https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/#add-gateway) を参照して、[SenseCAP M2 Multi-Platform gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html) を AWS IoT Core に追加します。

### AWS に LoRaWAN デバイスを追加

**ステップ 1: キーを定義**

`DevEUI/JoinEUI/APPkey` と `REGION` を `src/lorawan_v4/example_options.h` に定義します。

:::tip
JoinEUI は AppEUI とも呼ばれます。
:::

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/3-params.png"/></div>

**ステップ 2: プロファイルを作成**

[AWS IoT コンソール](https://console.aws.amazon.com/iot/home) にログインし、`Devices` に移動して `Profiles` をクリックします。

* デバイスプロファイル

デバイスプロファイルは、デバイスの機能とブートパラメータを定義し、ネットワークサーバーが LoRaWAN 無線アクセスサービスを設定するために使用します。これには、LoRa 周波数帯域、LoRa 地域パラメータバージョン、デバイスの MAC バージョンなどのパラメータの選択が含まれます。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/device-profiles.png"/></div>

異なる周波数帯域について学ぶには、[ゲートウェイとデバイス接続のための LoRa 周波数帯域の選択を検討する](https://docs.aws.amazon.com/iot-wireless/latest/developerguide/lorawan-rfregion-permissions.html#lorawan-frequency-bands) を参照してください。

* サービスプロファイル

`AddGWMetaData` 設定を有効のままにすることをお勧めします。これにより、各ペイロードに対して RSSI や SNR などの追加のゲートウェイメタデータを受け取ることができます。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/service-profiles.png"/></div>

**ステップ 3: デバイスを追加**

`LPWAN devices` > `Devices` に移動し、`Add wireless device` をクリックします。

`Wireless device specification`: OTAAv1.0x

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

前のステップで作成したデバイスプロファイルと宛先を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/device-eui2.png" alt="pir" width={800} height="auto" /></p>

デバイスページに移動し、先ほど追加したデバイスを選択します。

## Sidewalk設定

### Sidewalkゲートウェイの設定（オプション）

Sidewalkゲートウェイを設定し、構成し、Amazonアカウントにゲートウェイを関連付けることができます。Sidewalkエンドポイントは、Amazon Sidewalkに登録された後、Sidewalkゲートウェイに接続して通信します。

詳細については、[Sidewalkゲートウェイの設定](https://docs.sidewalk.amazon/getting-started/sidewalk-onboard-prereq-gateway.html)をご覧ください。

### Sidewalkデバイスの設定

#### Sidewalkデバイスを追加する

**ステップ1: デバイスプロファイルとSidewalkエンドデバイスを追加する**

ワイヤレスデバイスを作成する前に、まずデバイスプロファイルを作成します。

[Devices hubのSidewalkタブ](https://console.aws.amazon.com/iot/home#/wireless/devices?tab=sidewalk)に移動し、`Provision device`を選択して、以下の手順を実行します。

**ステップ2: デバイスJSONファイルを取得する**

SidewalkデバイスをプロビジョニングするためのJSONファイルを取得するには：

* [Sidewalk devices hub](https://console.aws.amazon.com/iot/home#/wireless/devices?tab=sidewalk)に移動します。

* AWS IoT Core for Amazon Sidewalkに追加したデバイスを選択して、その詳細を表示します。

* 追加したデバイスの詳細ページで`Download device JSON file`を選択してJSONファイルを取得します。

`certificate.json`ファイルがダウンロードされ、このファイルにはエンドデバイスをプロビジョニングするために必要な情報が含まれています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/dual/download-json.png" alt="pir" width={800} height="auto" /></p>

**ステップ3: Sidewalkエンドポイントをプロビジョニングする**

**バイナリイメージを生成する**

* 必要なファイルをインストールする

Sidewalk SDKフォルダ`$[Amazon Sidewalk repository]/tools/scripts/public/provision/`に移動し、以下のコマンドを実行して`requirements`ファイルをインストールします。

```cpp
pip3 install -r requirements.txt
```

* 製造用バイナリイメージを生成する

`provision.py`スクリプトを実行して、Sidewalkエンドポイントとして使用する開発ボードをプロビジョニングするための製造用バイナリイメージファイルを生成します。

* AWS IoTコンソールから取得した統合デバイスJSONファイルを使用する場合、`certificate_json`パラメータを使用して、このファイルをプロビジョニングスクリプトの入力として指定します。

```cpp
python3 provision.py aws --output_bin mfg.bin --certificate_json certificate.json \ 
   --config config/[device_vendor]/[device]_dk/config.yaml
```

* GetDeviceProfileおよびGetWirelessDevice API操作からの応答として取得した個別のデバイスJSONファイルを使用する場合、`wireless_device_json`および`device_profile_json`パラメータを使用して、これらのファイルをプロビジョニングスクリプトの入力として指定します。

```cpp
python3 provision.py aws --output_bin mfg.bin \  
   --wireless_device_json wireless_device.json \
   --device_profile_json device_profile.json \ 
   --config config/[device_vendor]/[device]_dk/config.yaml
```

以下のような出力が表示されます：

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/gen-files.png"/></div>

* mfg.hexファイルをフラッシュする

プロビジョニングファイルは通常、`EdgeDeviceProvisioning`ディレクトリに保存されます。

バイナリイメージをフラッシュするには、Nordic Semiconductor HDK上でバイナリイメージをロードするためのアドレス`0xFD000`を使用します。バイナリイメージのフラッシュに関する情報は、Nordic Semiconductorのドキュメントを参照してください。

**ステップ4: デモをビルドしてフラッシュする**

* ターミナルウィンドウを開きます。

* `template_lbm_wio_tracker`ディレクトリに移動します。

例：

```cpp
cd /opt/nordic/ncs/v2.5.0/sidewalk/samples/template_lbm_wio_tracker
```

* 以下のwestコマンドを使用してアプリケーションをビルドします：

```cpp
west build --board wio_tracker_1110 -- -DRADIO=LR1110_SRC
```

または、事前コンパイル済みのラジオドライバライブラリを使用する場合：

```cpp
west build --board wio_tracker_1110 -- -DRADIO=LR1110
```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/comparing.png"/></div>

* 以下のwestコマンドを使用してアプリケーションをフラッシュします：

```cpp
west flash
```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/flash-suc.png"/></div>

### Sidewalk登録

Sidewalkエンドポイントをプロビジョニングした後、エンドポイントを登録してSidewalkネットワーク上で通信できるようにする必要があります。

Sidewalkエンドポイントを登録するには、Sidewalk Frustration Free Networking（FFN）を使用した自動タッチレス登録を利用するか、登録スクリプトを実行するMacまたはネイティブUbuntuマシンを使用して手動でデバイスを登録します。

|基準|自動登録（Sidewalk FFNを使用）|手動登録|
|--|--|--|
|ユーザーとエンドポイントの関連付け|この登録方法では、Sidewalkエンドポイントとユーザー間の関連付けは必要ありません。エンドポイントは、ユーザーに関連付けられることなくSidewalkネットワークに参加できます。|この登録方法では、SidewalkエンドポイントとユーザーのAmazonアカウント間の関連付けが必要です。|
|LWA（Login with Amazon）|LWAは不要です。|LWAが必要で、ユーザーのAmazonアカウントとSidewalkエンドポイント開発者が使用するAWSアカウントをリンクします。|

**Sidewalk FFNを使用して登録を行うには：**

* Sidewalkゲートウェイとエンドポイントの電源をオンにします。
* ゲートウェイがSidewalkにオプトインしており、エンドポイントの近くにある必要があります。デバイスを10メートル以内に配置することをお勧めします。

`手動Sidewalk登録`およびその他の詳細については、[こちら](https://docs.sidewalk.amazon/provisioning/iot-sidewalk-register-endpoint.html)をご覧ください。

### ネットワーク切り替え

デフォルトはLoRaWANネットワークです。`User Button`をクリックしてネットワークを切り替えます。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/click-button.png"/></div>

### メッセージの表示

#### 宛先を追加する

[IoT Coreコンソール](https://us-east-1.console.aws.amazon.com/iot/home?region=us-east-1#/home)で、左メニューから`LPWAN devices`を選択し、次に`Destinations`を選択します。

`編集`を選択し、`AWS IoT Core メッセージブローカーに公開`を選択します。トピックのテキストボックスに、MQTT トピックとして `assets` を入力します。

`Permissions` の下で、`Create a new service role` を選択し、`Role name` を空白のままにします。

- **ExpressionType**: `MqttTopic`
- **Expression**: `EmbeddedWorldTrackerDemo`

#### デコーダールールを追加

`Message routing` タブ → `Rules` に移動し、`Create Rule` ボタンをクリックします。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png"/></div>

ルールに名前を付けて送信します。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png"/></div>

IoT Core ルールから、`Lambda` 関数を選択します。その後、`Create a Lambda function` をクリックします。

**スクラッチから作成**<br/>
`Function name`: 関数に名前を付けます。<br/>
`Runtime`: Node.js 14.x<br/>
`Architexture`: x86_64<br/>

`Create function` ボタンをクリックして新しい関数を作成します。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png"/></div>

次の関数設定ページで、すべてのコードを削除し、以下のスクリプトに置き換えてから、`Deploy` ボタンをクリックします。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png"/></div>

<details>
<summary>Lambda コード</summary>

```javascript
const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");
const {IoTWirelessClient, GetWirelessDeviceCommand} = require("@aws-sdk/client-iot-wireless");
const client = new IoTDataPlaneClient({
    "region": "us-east-1"
});
const wireless_client = new IoTWirelessClient({
    "region": "us-east-1"
});

function decodeUplink(input) {
    const originMessage = input.toLocaleUpperCase()
    const decoded = {
        valid: true,
        err: 0,
        payload: input,
        messages: []
    }
    let measurement = messageAnalyzed(originMessage)
    if (measurement.length === 0) {
        decoded.valid = false
        return {data: decoded}
    }

    for (let message of measurement) {
        if (message.length === 0) {
            continue
        }
        let elements = []
        for (let element of message) {
            if (element.errorCode) {
                decoded.err = element.errorCode
                decoded.errMessage = element.error
            } else {
                elements.push(element)
            }
        }
        if (elements.length > 0) {
            decoded.messages.push(elements)
        }
    }
    return {data: decoded}
}

function messageAnalyzed(messageValue) {
    try {
        let frames = unpack(messageValue)
        let measurementResultArray = []
        for (let i = 0; i < frames.length; i++) {
            let item = frames[i]
            let dataId = item.dataId
            let dataValue = item.dataValue
            let measurementArray = deserialize(dataId, dataValue)
            measurementResultArray.push(measurementArray)
        }
        return measurementResultArray
    } catch (e) {
        return e.toString()
    }
}

function unpack(messageValue) {
    return [{dataId: 0, dataValue: messageValue}]
}

function deserialize(dataId, dataValue) {
    let measurementArray = null
    measurementArray = [
        {
            measurementId: '4198',
            type: 'Latitude',
            measurementValue: parseFloat(getSensorValue(dataValue.substring(0, 8), 1000000))
        },
        {
            measurementId: '4197',
            type: 'Longitude',
            measurementValue: parseFloat(getSensorValue(dataValue.substring(8, 16), 1000000))
        },
        {
            measurementId: '4097',
            type: 'Air Temperature',
            measurementValue: getSensorValue(dataValue.substring(16, 20), 10)
        },
        {
            measurementId: '4098',
            type: 'Air Humidity',
            measurementValue: getSensorValue(dataValue.substring(20, 22))
        }
    ]
    return measurementArray
}

function getSensorValue(str, dig) {
    if (str === '8000') {
        return null
    } else {
        return loraWANV2DataFormat(str, dig)
    }
}

function bytes2HexString(arrBytes) {
    var str = ''
    for (var i = 0; i < arrBytes.length; i++) {
        var tmp
        var num = arrBytes[i]
        if (num < 0) {
            tmp = (255 + num + 1).toString(16)
        } else {
            tmp = num.toString(16)
        }
        if (tmp.length === 1) {
            tmp = '0' + tmp
        }
        str += tmp
    }
    return str
}

function loraWANV2DataFormat(str, divisor = 1) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    if (str2.substring(0, 1) === '1') {
        let arr = str2.split('')
        let reverseArr = arr.map((item) => {
            if (parseInt(item) === 1) {
                return 0
            } else {
                return 1
            }
        })
        str2 = parseInt(reverseArr.join(''), 2) + 1
        return '-' + str2 / divisor
    }
    return parseInt(str2, 2) / divisor
}

function bigEndianTransform(data) {
    let dataArray = []
    for (let i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2))
    }
    return dataArray
}

function toBinary(arr) {
    let binaryData = arr.map((item) => {
        let data = parseInt(item, 16)
            .toString(2)
        let dataLength = data.length
        if (data.length !== 8) {
            for (let i = 0; i < 8 - dataLength; i++) {
                data = `0` + data
            }
        }
        return data
    })
    return binaryData.toString().replace(/,/g, '')
}

exports.handler = async (event) => {
    try {
        let device_id = event['WirelessDeviceId'];
        let lorawan_info = null;
        let sidewalk_info = null;
        let payload = null
        let timestamp = null

        let queryDeviceRequest = {
            Identifier: device_id,
            IdentifierType: "WirelessDeviceId"
        }
        let deviceInfo = await wireless_client.send(new GetWirelessDeviceCommand(queryDeviceRequest))
        console.log("device_info：" + JSON.stringify(deviceInfo))
        if (!deviceInfo || deviceInfo.name) {
            return {
                statusCode: 500,
                body: 'can not find this wirelessDeviceId: ' + device_id
            };
        }
        let device_name = deviceInfo.Name

        if (event["WirelessMetadata"]["LoRaWAN"]) {
            lorawan_info = event["WirelessMetadata"]["LoRaWAN"]
            timestamp = lorawan_info["Timestamp"]
            let bytes = Buffer.from(event["PayloadData"], 'base64');
            payload = bytes2HexString(bytes)
        } else if (event["WirelessMetadata"]["Sidewalk"]) {
            timestamp = new Date().getTime()
            let origin = new Buffer(event["PayloadData"], 'base64')
            payload = origin.toString('utf8')
        }

        console.log(`event.PayloadData: ${payload}`)
        const resolved_data = decodeUplink(payload);
        
        // publish all measurement data
        const input = { // PublishRequest
            topic: `tracker/EmbeddedWorldTrackerDemo/sensor/${device_id}`,
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                DeviceName: "assettracker",
                timestamp: timestamp,
                data: resolved_data.data,
                WirelessDeviceId: device_id,
                PayloadData: event['PayloadData'],
                WirelessMetadata: event["WirelessMetadata"]
            })
        };

        const command = new PublishCommand(input);
        const response = await client.send(command);
        console.log("response: " + JSON.stringify(response));
        return {
            statusCode: 200,
            body: 'Message published successfully' + JSON.stringify(event)
        };
    } catch (error) {
        console.error('Error publishing message:', error);

        return {
            statusCode: 500,
            body: 'Error publishing message'
        };
    }
};
```
</details>

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/004/001/lambda.1.png"/></div>

次に、`Device Destination`に戻り、ルール名を入力するセクションを選択し、先ほど作成した名前を入力してください。

`AWS IoT Core Console`に移動し、`MQTT Test Client`を選択してトピックを購読します。

#### トラッカールールを追加

上記の手順を繰り返して新しいルールを作成し、以下のLambdaコードをコピーしてください。

<details>
<summary>Lambdaコード</summary>

```javascript
const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");

const {LocationClient, BatchUpdateDevicePositionCommand} = require("@aws-sdk/client-location")

const {IoTWirelessClient, UpdateResourcePositionCommand } = require("@aws-sdk/client-iot-wireless");
const client = new IoTDataPlaneClient({
    "region": "us-east-1"
});
const wireless_client = new IoTWirelessClient({
    "region": "us-east-1"
});

exports.handler = async (event) => {
    console.log(`受信したメッセージ: ${JSON.stringify(event)}`)
    let device_id = event['WirelessDeviceId']
    let device_name = event['DeviceName']
    let measurements = event['data']['messages']
    let resolver_time = event['timestamp']
    let network = 1; // 1: lorawan 2: sidewalk
    if (event["WirelessMetadata"] && event["WirelessMetadata"]["Sidewalk"]) {
        network = 2
    }

    let longitude;
    let latitude;
    let gps_data = null
    let sensor_map = {}
    if (measurements && measurements.length > 0) {
        for (let i = 0; i < measurements.length; i++) {
            for (let j = 0; j < measurements[i].length; j++) {
                if (measurements[i][j].measurementId === "4097") {
                    sensor_map["Temperature"] = measurements[i][j].measurementValue;
                }
                if (measurements[i][j].measurementId === "4098") {
                    sensor_map["Humidity"] = measurements[i][j].measurementValue;
                }
                if (measurements[i][j].measurementId === "4197") {
                    longitude = measurements[i][j]["measurementValue"];
                }
                if (measurements[i][j].measurementId === "4198") {
                    latitude = measurements[i][j]["measurementValue"];
                }

                if (latitude && longitude) {
                    try {
                        gps_data = {
                            "type": "Point",
                            "coordinates": [longitude, latitude]
                            // "coordinates": [33.3318, -22.2155, 13.123]
                        }
                    } catch (e) {
                        console.log(`===>エラー`, e)
                    }
                }
            }
        }
    }

    if (gps_data) {
        console.log(`デバイスの位置を更新: ${JSON.stringify(gps_data)}`)
        await updateDevicePosition(gps_data, device_id);
        const input = { // PublishRequest
            topic: `tracker/EmbeddedWorldTrackerDemo/location/${device_id}`,
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                timestamp: resolver_time,
                deviceId: device_id,
                deviceName: device_name,
                latitude: gps_data.coordinates[1],
                longitude: gps_data.coordinates[0],
                positionProperties: {'batteryLevel': 90, "sensor:": 60}
            })
        };
        const command = new PublishCommand(input);
        const response = await client.send(command);
        console.log("MQTTプッシュレスポンス: " + JSON.stringify(response));

        let locationClient = new LocationClient()
        let location_info = {
            TrackerName: 'AssetTracker',
            Updates: [
                {
                    DeviceId: 'assettracker',
                    SampleTime: new Date(resolver_time),
                    Position: [
                        gps_data.coordinates[0], gps_data.coordinates[1]
                    ],
                    Accuracy: {
                        Horizontal: 1,
                    },
                    PositionProperties: {
                        "context": JSON.stringify({net: network}),
                        "sensor": JSON.stringify(sensor_map)
                    }
                }
            ]
        }
        let loc_response = await locationClient.send(new BatchUpdateDevicePositionCommand(location_info))
        console.log("位置更新レスポンス: " + JSON.stringify(loc_response));

    }
}

async function updateDevicePosition(gps_data, device_id) {
    const input = { // UpdateResourcePositionRequest
        ResourceIdentifier: device_id, // 必須
        ResourceType: "WirelessDevice", // 必須
        GeoJsonPayload: JSON.stringify(gps_data),
    };
    const command = new UpdateResourcePositionCommand(input);
    const wireless_response = await wireless_client.send(command);
    console.log(wireless_response)
}
```
</details>

## Webアプリの構築

デバイスを地図上に表示するために必要な Amazon Location Service リソースをデプロイします。

### 地図の作成

最初のステップとして、新しい Amazon Location Service の地図リソースを作成する必要があります。これは AWS コンソールを使用して行います。

* [Amazon Location Service コンソール](https://console.aws.amazon.com/location/home)を開きます。

* 次に、画面左側のナビゲーションバーを展開し、「Maps」を選択します。

* この画面で新しい地図を作成します：

* 地図の名前を入力し、`HERE Explore` マップスタイルを選択してから、`Create map` をクリックします。

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/003/create-map.2.png"/></div>

### ルーター計算機の作成

* [Amazon Location Service コンソール](https://console.aws.amazon.com/location/home)を開きます。

* 次に、画面左側のナビゲーションバーを展開し、`Route calculators` を選択します。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/router-cal.png"/></div>

`HERE` をデータプロバイダーとして選択し、`Create route calculator` ボタンをクリックして続行します。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/create-router.png"/></div>

### トラッカーの作成

`Trackers` -> `Create tracker` に移動します：

トラッカーの名前を入力し、位置フィルタリングで `Time-based filtering` を選択します。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/time-based.png"/></div>

次に下にスクロールして、EventBridge 設定の `Enable EventBridge events` 設定をマークし、`Create tracker` をクリックします。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/enable-bridge.png"/></div>

### ジオフェンスコレクションの作成

`Geofence collections` に移動し、`create geofence collection` をクリックします。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/geolocate.png"/></div>

## Webアプリの表示

### アプリを CloudFront にデプロイ

* Cloud9 ターミナルで、`/home/ec2-user/environment/asset-tracking-workshop` に移動します：

 ```cpp
 cd /home/ec2-user/environment/asset-tracking-workshop
 ```

* 次のコマンドを実行します：

 ```cpp
 npm run frontend:publish
 ```

* 完了すると、ウェブサイトの URL が表示されます。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/web-url.png"/></div>

* この URL をブラウザで開き、トラッキングアプリケーションを表示します。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/s3-map.png"/></div>

## リソース

[SWDM016](https://drive.google.com/drive/folders/1vHJVEFgyx4arHHPlSjdMkffVStnTpHqg?usp=sharing)

[template_lbm_wio_tracker](https://drive.google.com/drive/folders/1UVte1UbfFor1remgAcpfmCHSKXvOGyYn)