---
description: SenseCAP IndicatorのLoRaWAN機能をプレビューする
title: LoRaWANエンドノード - SenseCAP Indicator
keywords:
- indicator
- Touch
- Screen
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/lorawan_landing_page.png
slug: /ja/SenseCAP_Indicator_Application_LoRaWAN
toc_max_heading_level: 4
sidebar_position: 4
last_update:
  date: 2024-01-15T17:29:20.793Z
  author: Spencer
tags:
  - device
categories:
  - SenseCAP
---

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/lorawan_landing_page.png"/>
</div>

## ハンズオンデモ

このセクションでは、実践的なデモンストレーションを通じてSenseCAP Indicatorの基本的なLoRaWAN（*Class C* & *OTAA*）機能について詳しく説明します。プロセスは3つの主要なステップに分かれています：

1. [ファームウェアの取得](#flash_firmware)：必要に応じてファームウェアをカスタマイズしてインストールします。
2. [デバイスの登録](#HEAD_register_device)：LoRaWANネットワークサーバーにデバイスを追加します。
3. [LoRaWAN認証情報の設定](#configure_credentials)：SenseCAP Indicatorに必要なネットワーク詳細を入力します。

始める前に、LoRaWANの背景について説明しましょう。

## LoRaWAN

LoRaWANは、バッテリー駆動デバイスを大きな地域やネットワーク全体でインターネットにワイヤレス接続する低電力広域（LPWA）ネットワーキングプロトコルとして説明されています。これはLoRaワイヤレスシステムの一部であり、ライセンス不要のスペクトラムで動作し、限られた帯域幅での長距離通信をサポートします。長距離通信（最大10マイル）、長いバッテリー寿命（最大10年）、低コスト、低消費電力を特徴とし、データに応じて51から241バイトのペイロードサイズを持ちます[^1]。

[^1]: [A Gentle Introduction to LoRaWAN Gateways & Nodes
](https://www.seeedstudio.com/blog/2021/04/27/a-gentle-introduction-to-lorawan-gateways-nodes/)

<div style={{ textAlign: 'center' }}>

<img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/3.png" alt="LoRaWAN Framework " />
<div style={{ marginTop: '-8px' }}><em>LoRaWANネットワークフレームワーク</em></div>

</div>  

## 高度知覚システム

Seeed Studioの「高度知覚システム」は、さまざまな業界における環境認識を向上させるために設計された、センシング、ネットワーキング、エッジコンピューティングツール、クラウドの包括的な配列を提供する[IoTソリューション](/ja/SenseCAP_introduction)です。多様なモジュールとデバイス[^2]を備えたこのシステムは、デジタルな「目と耳」として機能し、現実世界の変革的な理解を促進します。

<div style={{ textAlign: 'center' }}>

<img class='border-radius: 10px;' width={680} src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/03/Seeed-Studio-Advanced-Perception-System-2048x1150.png" alt="Advanced Perception System" />
<div style={{ marginTop: '-8px' }}><em>高度知覚システムレイヤー</em></div>
<br/>
</div>

SenseCAPチームは主にセンサーとネットワークコンポーネントに焦点を当て、最高品質とオーダーメイドの業界ソリューションの提供に取り組んでいます。彼らの取り組みにより、実用性と先進的な設計で称賛を集めている革新的な[スマートビレッジソリューション](https://www.seeedstudio.com/smart-village)などの評価の高い製品が生まれました。

Heliumネットワークの分野では、チームの貢献は特に注目に値します。SenseCAP M1、M2、M4などのデバイスは、単なる高性能Heliumホットスポットではありません。これらは、ユーザーがHNT暗号通貨を獲得しながら、同時に分散型ワイヤレスLoRaWAN®ネットワークインフラストラクチャを構築することを可能にする重要な役割を果たしています。SenseCAP M4 Squareは、複数のWeb 3.0アプリを動作させる能力で際立っており、複雑なマルチアプリケーションシステムの展開を合理化します。[^3]

この深い専門知識と多様な顧客ベースとの継続的な関わりを活用して、SenseCAPチームは戦略的にSenseCAP IndicatorにLoRa機能を統合することを決定しました。

[^2]: [SenseCAP Products - Bazaar](https://www.seeedstudio.com/SenseCAP-c-1825.html)
[^3]: [SenseCAP MX](https://www.sensecapmx.com/)

[SenseCAP Indicator](https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html)のLoRaWAN機能について詳しく見てみましょう。

## 概要

| 機能                          | 詳細                                                      |
|:---:|:---:|
| 無線トランシーバー               | SX1262                                                       |
| サポートクラス                | Class A/B/C                                                  |
| サポート周波数帯域        | AS923, AU915, CN779, EU433, EU868, KR920, IN865, US915, RU864, US915 |
| LoRaWAN Mac バージョン              | 1.0.4/1.1.0                                                  |
| エンドデバイス LoRaWAN スタック採用 | [LoRaMac-node](https://github.com/Lora-net/LoRaMac-node/releases/tag/v4.7.0)     |
| ドキュメント                    | [LoRaMac Documentation](http://stackforce.github.io/LoRaMac-doc/) |

## ステップ 1. ファームウェアの取得 {#flash_firmware}

### 1.1 ファームウェアのダウンロード

まず、GitHub Release ページから SenseCAP Indicator 用の LoRaWAN ファームウェア `indicator_lorawan.bin` をダウンロードします。

<div class="github_container" style={{textAlign: 'center'}}>

<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> ファームウェアをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>

</div>
<br />

:::info カスタムファームウェアに興味がありますか？
[ESP-IDF プログラミングガイド](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/index.html#ide)(v5.1) では、独自のファームウェアを構築する方法について説明しています。[ソースコード](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32) にアクセスして、特定のニーズに合わせて変更することができます。
:::

### 1.2 ファームウェアの書き込み

SenseCAP Indicator にファームウェアを書き込むには、まずファームウェアをダウンロードし、次に esptool（または ESP-IDF 環境がある場合は `esptool.py`）を使用して書き込みます（包括的なガイダンスについては、[手順](/ja/SenseCAP_Indicator_Application_LoRaWAN) を参照してください）。

**Windows で esptool を使用してファームウェアを書き込む：**

Windows コマンドプロンプトで以下のコマンドを使用してファームウェアを書き込みます：

```jsx
<tool_path>/esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 <firmware_path>/indicator_lorawan.bin 
```

例えば、`flash_bin` フォルダがドライブ `D:` にあり、以下の構造を含んでいる場合：

```sh
flash_bin/
├── esptool.exe
└── indicator_lorawan.bin
```

あなたのコマンドは次のようになります：

```sh
./esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_nonport_flash.png.png"/>
</div>

複数のポートがあり、特定のポートを指定する必要がある場合は、`-p` または `--port` 引数を使用してください：

```sh
./esptool.exe --chip esp32s3 -p COM20 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_port_flash.png"/>
</div>

:::note
Macユーザーは `./esptool.exe` を `./esptool` に置き換えてください。

フラッシュ中に問題が発生した場合は、**ボーレート**を下げるか、[これらのトラブルシューティング手順](https://askubuntu.com/questions/1411463/dev-ttyusb0-file-disappears-from-dev-directory-while-using-device)を参照してください。
:::

ファームウェアが正常にフラッシュされたら、後続の手順でLoRaWANネットワークサーバーからDevice EUIやAPPkeyなどの重要なパラメータを取得します。

## ステップ2. LoRaWANネットワークサーバーにデバイスを登録する {#HEAD_register_device}

> 開始する前に、デバイスがLoRaWANネットワークのカバレッジエリア内にあることを確認してください。

このセクションでは、ローカルLoRaWANネットワークサーバーへの接続方法をガイドします。[ChirpStack](https://www.chirpstack.io/)プラットフォームを例として、[SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway (EU868)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)と併用します。*異なるネットワークサーバーを使用している場合、手順は類似しています*；アクティベーションに必要な重要な情報を収集する必要があります：

- OTAA (Over The Air Activation):
  - DevEUI
  - AppKey
  - JoinEUI/AppEUI (Mac Version 1.1.0が必要)
- ABP (Activation By Personalization):
  - DevEUI
  - DevAddr
  - AppSKey
  - NwkSKey

<!-- lorawan --eui c53364863bca6cad --app_key 220a52c272e2b1151ef5b626c0dab025 -->
<!-- lorawan --eui 97752c0092d12add --apps_key 22222222222222222222222222222222 --nwks_key 11111111111111111111111111111111 --dev_addr 33333333 -->
### 2.1 SenseCAP LoRaWANゲートウェイの設定

SenseCAP ゲートウェイを設定するには、そのWebインターフェースにアクセスし、ChirpStackネットワークサーバーのセットアップを開始します。以下は設定ページを表示するビジュアルガイドです：

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/gateway_config.png"/>
</div>

設定を調整した後、`Save & Apply`をクリックして変更をコミットします。その後、提供されたURL（例：`http://192.168.1.102:8080`）を使用してChirpStackインターフェースにアクセスできます。

以下のデフォルト認証情報を使用してログインします：

- **ユーザー名:** `admin`
- **パスワード:** `admin`

詳細と高度な設定オプションについては、[SenseCAP M2 Gateway LNS設定ガイド](https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/)をご覧ください。

### 2.2 ローカルネットワークサーバー（ChirpStack）の設定

詳細な機能とLoRaWANバージョンサポートについては、ChirpStackドキュメントを参照してください：[ChirpStack Network Server Documentation](https://www.chirpstack.io/network-server/features/lorawan-versions/)。

ChirpStackを使用してローカルネットワークサーバーを設定する手順は以下の通りです：

1. **[デバイスプロファイルの作成](#create_dev_profile):** これによりデバイスの設定と機能が標準化されます。デバイスがネットワーク内で効果的に通信することを確保するために重要です。
2. **[アプリケーションの追加](#add_appication):** これによりデバイスの整理と管理が支援されます。アプリケーションは同じ目的や特性を共有するデバイスをグループ化するために使用され、管理をより簡単にします。
3. **[アプリケーション下でのデバイス登録](#register_device):** この手順により、デバイスをアプリケーションで確立した特定の設定とデータ処理ルールにリンクします。デバイスがネットワーク内で正しく動作することを確保するための重要な手順です。

#### 2.2.1 デバイスプロファイルの作成 {#create_dev_profile}

`Device profiles`で新しいデバイスプロファイルを作成するには、サイドバーの'Tenant'に移動し、'Device profiles'を選択します。

<div align="center">
  <img class='border-radius: 10px;' width={220} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/sidebar_device_profile.png"/>
</div>

デバイスプロファイルの作成は、デバイスがLoRaWANネットワーク上で効果的に通信することを確保するための重要な手順です。これには、デバイスのパフォーマンスと互換性に影響する技術的パラメータの選択が含まれます。設定方法は以下の通りです：

- **MAC Version:** これは、デバイスが使用するMedia Access Control（MAC）プロトコルのバージョンを指します。MACプロトコルは、デバイスがネットワークにアクセスする方法を管理するために不可欠です。v1.0.4とv1.1.0の間で選択できます。
- **Regional Parameters Revision:** これらは、デバイスの地理的位置に基づいて設定する必要がある特定のパラメータです。デバイスが地域の規制とネットワーク仕様に準拠することを確保します。

**MACバージョンの選択**

選択するMACバージョンは、デバイスが必要とする認証情報のセットを決定するため重要です：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value='MAC Version 1.0.4'>

  以下の認証情報が必要です：

- **DevEUI:** これはデバイスに割り当てられた一意の識別子で、グローバルな一意性を確保します。
- **AppKey:** デバイスの通信を暗号化し、セキュリティを確保するために使用される秘密鍵です。

</TabItem>

<TabItem value='MAC Version 1.1.0'>

  デバイスには以下の認証情報が必要です：

- **DevEUI:** デバイスのグローバルに一意な識別子。
- **AppEUI/JoinEUI:** デバイスが接続するアプリケーションの一意な識別子。
- **AppKey:** 通信のセキュリティ確保に使用される暗号化キー。

</TabItem>
</Tabs>

**Regional Parameters Revisionの選択**

LoRaWANネットワークのデバイスプロファイル設定において、選択するRegional Parameters（RP）バージョンは、デバイスが特定の地域標準と仕様に準拠して動作することを確保するために重要です。

**現在の設定**

現在、MACバージョン`1.0.4`とRegional Parameters Revision `RP002-1.0.2`でデバイスプロファイルを設定しています。

:::info Regional Parameters Revision
LoRaWANネットワークでデバイスプロファイルを設定する場合、`RP002-1.0.2`は現在のニーズに適した選択です。`RP002-1.0.3`は、`v4.7.0` LoRaMac-node仕様に従って[コード](https://github.com/Lora-net/LoRaMac-node/blob/v4.7.0/src/mac/region/Region.h)で推奨されています。
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_device_profile_check.png"/>
</div>

必要な要素を正しく理解し設定することは、デバイスがLoRaWANネットワーク上で効果的かつ安全に通信することを確実にするための鍵となります。

**Class C**デバイスタイプを使用するには、デバイスプロファイルでこの機能を具体的に有効にすることが重要です。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_104_classC_enable.png"/>
</div>

**デコーダー関数**

実際に、デバイスが送信するペイロードデータを意味のある解釈可能なものにするには、デバイスプロファイル内にデコーダーを実装することが不可欠です。このデコーダーは生のバイナリデータを読み取り可能な形式に変換し、デバイスが送信する情報を理解し効果的に活用できるようにします。

<details>

<summary>Decoder.jsをコピーするにはクリック</summary>

このデコーダーは[GitHubリポジトリ](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/docs/ChirpStackV4_Decoder.js)から取得されています

```js
function decodeUplink(input) {
    var decoded = {
        data:[]
    };
    var type;
    var floatNumber;

    if ( (input.bytes.length  % 5) !== 0) {
        decoded.data.push({
            type: "error",
            Value: -1
        });

        return { data: decoded }
    }

    const arrayBuffer = new ArrayBuffer(4);
    const dataView = new DataView(arrayBuffer);
    
    for(let j =0 ; j < input.bytes.length; j+=5) {
        var num =0;
        switch ( input.bytes[j]) {
            case 0:
                type = 'Temp';
                num  = 2;
                break;
            case 1:
                type = 'Humidity';
                num  = 2;
                break;
            case 2:
                type = 'CO2';
                num  = 0;
                break;
            case 3:
                type = 'TVOC';
                num  = 0;
                break;
            case 4:
                type = 'Light';
                num  = 0;
                break;
            default:
                type = 'unknown';
                break;
        }
        for (let i = 0; i < 4; i++) {
            dataView.setUint8(i, input.bytes[j+i+1]);
        }
        floatNumber = dataView.getFloat32(0, true); 
        decoded.data.push({
            type:  type,
            Value: floatNumber.toFixed(num)
        });
    }
    return { data: decoded }
}

function encodeDownlink(input) {
  return {
    bytes: [225, 230, 255, 0]
  };
}
```

</details>

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_add_decoder.png"/>
</div>

デバイスプロファイルが作成されたら、次のステップはアプリケーションを追加することです。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_104_profile.png"/>
</div>

#### 2.2.2 アプリケーションの追加 {#add_appication}

LoRaWAN ネットワークサーバー内でアプリケーションを作成・設定し、デバイスを管理します。

新しいアプリケーションを作成するには、サイドバーの「Tenant」に移動し、「Application」を選択します。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_create.png"/>
</div>

送信するには、名前を設定し、オプションで説明を提供します。

#### 2.2.3 アプリケーション下でのデバイス登録 {#register_device}

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_add_device.png"/>
</div>

アプリケーション内の `Add device` ボタンを押します。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_device_add.png"/>
</div>

デバイスを追加するには、`Name` を指定し、`Device EUI` と以前に作成した `Device Profile` を提供する必要があります。

Device EUI を自動生成するか、デバイスから既存のものを使用するかを選択できます。

このプロセスでは、自動生成された Device EUI を使用します。これらの詳細を送信すると、デバイスがアプリケーションに追加され、OTAA Keys セクションに自動的にリダイレクトされます。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_otaa.png"/>
</div>

ボタンをクリックしてランダムな **Application Key (AppKey)** を生成するか、既存のものを使用することを選択します。必要なすべての認証情報とパラメータを確保してください。*MAC Version 1.0.4* の場合、必要な認証情報は以下の通りです：

- **DevEUI (例):** `5d61e4648dc926e2`
- **AppKey (例):** `ec2b966c2c4bbe94a6ef79d0479db0e5`

これらの詳細により、次のコマンドが得られます：

```sh
lorawan --eui 5d61e4648dc926e2 --app_key ec2b966c2c4bbe94a6ef79d0479db0e5
```

追加のコマンドとサポートについては、[コンソールコマンド](#commands)セクションを参照してください。

## ステップ3. SenseCAP Indicatorをネットワークに参加するよう設定{#configure_credentials}

SenseCAP Indicatorとの接続を確立するには、任意の**シリアルツール**（[Minicom](https://wiki.emacinc.com/wiki/Getting_Started_With_Minicom)、[Putty](https://www.putty.org/)など）を使用するか、`idf monitor`を使用できます（[ESP-IDFドキュメントで提供されている詳細な手順](https://docs.espressif.com/projects/esp-idf/en/v5.1.2/esp32/api-guides/tools/idf-monitor.html)に従ってください）：

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esp_idf_monitor.png"/>
</div>

:::caution
このステップの前に、デバイスがLoRaWAN接続を開始していないことを確認してください。
開始している場合は、停止する必要があります。
:::

コンソールで認証情報を含むコマンドを入力します。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_otaa_config.png"/>
</div>

これで、SenseCAP Indicatorでキーを表示できるはずです。必要に応じて、設定に必要な更新を行ってください。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_press_join.png"/>
</div>

*Join*ボタンを押すと、*コンソール*を通じて接続プロセスを直接観察でき、接続の正常な確立を監視および確認できます。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_console.png"/>
</div>

## ステップ4 **メッセージの送受信** {#uplink_and_downlink}

このセクションでは、デバイスとLoRaWANネットワーク間のアップリンクとダウンリンクの両方の通信を監視するプロセスについて説明します。[^4]

[^4]: [詳細：LoRaWAN®でのメッセージの送受信](https://lora-developers.semtech.com/documentation/tech-papers-and-guides/sending-and-receiving-messages-with-lorawan/sending-and-receiving-messages/)

### アップリンクメッセージ

アップリンクメッセージはLoRaWANネットワークの基本であり、SenseCAP Indicatorなどのデバイスがネットワークサーバーにデータを送信することを可能にします。これらのメッセージは*センサーデータ*、デバイスステータス、その他のテレメトリ情報を報告するために重要です。

<details>

<summary>アップリンクメッセージの概念</summary>

**LoRaWANにおけるアップリンク：**

LoRaWANネットワークにおいて、アップリンクメッセージは、エンドデバイス（SenseCAP Indicatorなど）によって開始され、ゲートウェイを通じてネットワークサーバーに送信される任意の通信です。これらのメッセージは通常、センサー読み取り値やデバイスステータスの送信に使用されます。

1. **データ収集**：SenseCAP Indicatorは、センサーまたは内部プロセスからデータを収集します。これには、環境読み取り値、デバイスステータス、またはその他の関連メトリクスが含まれる場合があります。

2. **データパッケージング**：収集されたデータは、送信に適した*事前定義された形式*にパッケージされます。これには、ペイロードサイズを最適化し、効率的な送信を確保するためのデータエンコーディングが含まれる場合があります。

3. **メッセージの送信**：デバイスはLoRaWANネットワークを通じてアップリンクメッセージを送信します。この送信は通常、特定の間隔（例：5分ごと）に基づいてスケジュールされるか、特定のイベント（例：閾値違反）によってトリガーされます。

**ネットワークサーバーでの受信と処理：**

SenseCAP Indicatorによってアップリンクメッセージが送信されると、ゲートウェイを介してLoRaWANネットワークサーバーによって受信されます。その後、ネットワークサーバーは次のようにメッセージを処理します：

1. **メッセージ受信**：ネットワークサーバーはゲートウェイからアップリンクメッセージを受信し、デコードします。

2. **データ処理と分析**：デコード後、サーバーはデータを処理します。これには、ログ記録、アラートのトリガー、またはさらなる分析の実行が含まれる場合があります。データには、デバイスの機能に応じて、温度読み取り値、湿度レベル、またはその他のセンサーデータなど、さまざまなタイプの情報が含まれる場合があります。

3. **応答アクション**：受信したデータに基づいて、ネットワークサーバーは、指示や更新を含むダウンリンクメッセージをデバイスに送信するなどのアクションを実行する場合があります。この応答は、事前定義されたルールに基づいて自動化されるか、システムを監視するユーザーによって手動でトリガーされる場合があります。

</details>

#### アップリンクメッセージ：センサーデータのアップロード

SenseCAP Indicatorを使用したLoRaWANデモのコンテキストでは、アップリンクメッセージは温度や湿度の読み取り値などの単純なセンサーデータで構成される場合があります。

*参加プロセス*が成功すると、`LoRaWANフレーム`セクションでログを表示して、データ送信を監視し、デバイスのネットワークとの通信の詳細な記録を受信できます。

:::tip
作成したアプリケーション内のデバイスの*LoRaWANフレーム*セクションに移動し、特定のデバイスを見つけます。ここで、デバイスによって送受信されるデータパケットを監視および管理し、LoRaWANネットワーク内でのスムーズな通信と動作を確保できます。
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_frame.png"/>
</div>

デコーダー機能が有効になっている状態で、イベントセクションの下で解析されたデータを確認できるはずです（`+up`ボタンを押すことで表示できます）。これにより、デバイスからの受信データをより効果的に理解し、分析できるようになります。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_event_view.png"/>
</div>

### ダウンリンクメッセージ

LoRaWANネットワークにおけるダウンリンクプロセスは、双方向通信において重要であり、ネットワークサーバーからSenseCAP Indicatorデバイスへのデータとコマンドの送信を可能にします。この機能は、様々な運用コマンド、設定変更、またはファームウェア更新において特に有用です。

<details>

<summary>ダウンリンクメッセージの概念</summary>

**LoRaWANにおけるダウンリンク：**

LoRaWANデモ環境では、ダウンリンクメッセージはSenseCAP Indicator上のアニメーション電球を制御するために使用され、ユーザーがそれをオンまたはオフに切り替えることができます。ただし、この機能は必要に応じて特定のコマンドや設定を実行するように拡張することができます。

**ダウンリンクメッセージの送信**

1. **ダウンリンクメッセージの開始**: ダウンリンクメッセージを送信するには、通常ネットワークサーバーのインターフェースを使用します。デバイス用のダウンリンクメッセージをスケジュールできるセクションに移動します。

2. **メッセージフォーマット**: メッセージがSenseCAP Indicatorで要求される仕様に従ってフォーマットされていることを確認してください。これには、ダウンリンクメッセージが何を意図しているかに応じて、特定のペイロードフォーマットやエンコーディング方法が含まれる場合があります。

3. **メッセージのスケジューリング**: メッセージを作成した後、適切な時間に送信されるようにスケジュールします。タイミングは、デバイスのデータ送信スケジュールや予想される活動時間など、様々な要因に依存する場合があります。

**デバイスでのダウンリンクメッセージの受信と処理**

ダウンリンクメッセージがLoRaWANネットワークサーバーによって送信されると、SenseCAP Indicatorは次の受信ウィンドウ中にそれを受信します。デバイスは以下のようにメッセージを処理します：

1. **メッセージ受信**: SenseCAP Indicatorは、事前定義された受信ウィンドウ中にダウンリンクメッセージを待機します。これらの期間中にデバイスが受信可能な状態にあることが重要です。

2. **メッセージの処理**: ダウンリンクメッセージを受信すると、デバイスは内容を処理します。これには、設定の変更、パラメータの更新、またはリレーの切り替えやセンサー閾値の調整などのアクションのトリガーが含まれる場合があります[^5]。

[^5]: [TxData Function - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/11bf6165f0e815a1dc6b83be253972ac320ecdd5/examples/indicator_lorawan/main/lorawan/indicator_lorawan.c#L445)

3. **フィードバックと確認**: ダウンリンクメッセージが確認を必要とする場合（確認付きダウンリンクの場合）、デバイスは次のアップリンクメッセージで確認応答を送信します。

</details>

#### デモメッセージ：電球の制御

このデモンストレーションでは、LoRaWANネットワークを介してIndicator内のシミュレートされた電球を制御するためにダウンリンクメッセージがどのように使用できるかを説明します。この例は、リモートデバイス管理のためのダウンリンク通信の実用的な応用を示しています。

**1. シナリオ概要：**

- このデモでは、SenseCAP Indicatorは仮想電球で設定されており、これは単純で制御可能なデバイスを表しています。
- 電球には「オン」と「オフ」の2つの状態があり、これらはLoRaWANネットワークサーバーから送信されるダウンリンクメッセージによって制御されます。

**2. ダウンリンクメッセージの準備：**

- 電球を制御するために、ダウンリンクメッセージ用の特定のペイロード構造が定義されています。簡単にするために、以下のように仮定しましょう：
  - ペイロード`0001`を送信すると電球がオンになります。
  - ペイロード`0000`を送信すると電球がオフになります。

- これらのペイロードは、SenseCAP Indicatorが理解し、動作するようにプログラムされた形式でエンコードされています。[^6]

[^6]: [lorawan_rx_data_handle関数 - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/11bf6165f0e815a1dc6b83be253972ac320ecdd5/examples/indicator_lorawan/main/lorawan/indicator_lorawan.c#L591C33-L591C33)

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bulb_payload.png"/>
</div>

**3. ダウンリンクメッセージの送信：**

- ネットワークサーバーのインターフェースを通じて、対応するペイロードでダウンリンクメッセージをスケジュールできます。
- メッセージはキューに入れられ、次に利用可能な受信ウィンドウ中にSenseCAP Indicatorに送信されます（そのため遅延があります）。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/queue_packet.png"/>
</div>

**4. ダウンリンクメッセージの受信：**

電球をオンにするには、ペイロード`0001`でダウンリンクをスケジュールします。オフにするには、ペイロード`0000`を使用します。ダウンリンクメッセージ`0001`をキューに入れていたので、今度は電球をオフにするためにダウンリンクメッセージ`0000`を送信したいと思います。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/console_bulb.png"/>
</div>

そして、電球が**オフになった**ことがわかります。

## 探索待ちの機能 {#function}

SenseCAP Indicatorには探索を待つ幅広い機能があります。このデモでは、センサーデータのアップロードと、ダウンリンクメッセージを使用してSenseCAP Indicatorの仮想電球を制御することを説明します。

**探索すべき主要機能：**

**1. コマンドの受信と実行：**

- SenseCAP Indicatorはダウンリンクメッセージを効率的に受信します。
- これらのメッセージを処理し、仮想電球のオン・オフなどのコマンドを解釈します。
- 電球の状態はそれに応じて変化し、デバイス制御のリアルなシミュレーションを提供します。

**2. 確認と検証：**

- コマンド実行後、SenseCAP Indicatorは確認としてアップリンクメッセージを送り返します。
- この確認応答は

ネットワークサーバーのインターフェースを通じて追跡でき、コマンドが効果的に受信され、実行されたことを保証します。

**3. 実用的なアプリケーション：**

- このシンプルなデモは、IoTデバイスを操作するLoRaWANダウンリンクメッセージの有用性を強調しています。
- IoTエコシステムの重要な側面である、デバイスをリモートで指示・管理する能力を実証し、その実用的価値を示しています。

このデモンストレーションは始まりに過ぎません。SenseCAP Indicatorは、環境監視からスマート自動化まで、様々なIoTアプリケーション向けの多用途プラットフォームを提供します。その機能をより深く掘り下げることで、この強力なツールの全ポテンシャルを解き放ち、革新的なソリューションとIoTプロジェクトでの制御強化への道を開くことができます。実験を行い、SenseCAP IndicatorがIoTの取り組みを向上させる多くの方法を発見することをお勧めします。

## コンソールマニュアルページ {#commands}

<!-- check the [indicator_lorawan - README](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/README.md)): -->

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_cmd_all.png"/>
</div>

LoRaWANネットワーク情報を設定するためのターミナルコマンドの紹介です。マニュアルエントリのようにスタイル化されています：

### **lorawan**

このコマンドは、デバイスのLoRaWANネットワーク情報を設定します。OTAA（Over-the-Air Activation）とABP（Activation By Personalization）の両方の方法に必要な様々なパラメータを設定できます。

##### 使用方法

```sh
lorawan [--eui=] [--join_eui=] [--app_key=] [--dev_addr=] [--apps_key=] [--nwks_key=]
```

##### オプション

- `--eui=`: デバイスのEUI（Extended Unique Identifier）を設定します。MSB（Most Significant Bit）を先頭とする8桁の16進数が必要です。
  
- `--join_eui=`: JOIN EUI（旧APP EUI）を設定します。これはOTAAにおけるアプリケーション識別子です。MSBを先頭とする8桁の16進数が必要です。

- `--app_key=`: APP KEYを設定します。これはOTAA接続プロセスで使用される暗号化キーです。MSBを先頭とする16桁の16進数が必要です。

- `--dev_addr=`: ABP用のデバイスアドレスを設定します。MSBを先頭とする4桁の16進数識別子です。

- `--apps_key=`: ABP用のAPPS KEYを設定します。これはアプリケーションペイロードの暗号化に使用されます。MSBを先頭とする16桁の16進数が必要です。

- `--nwks_key=`: ABP用のNWKS KEYを設定します。これはネットワークペイロードの暗号化とデバイス認証に使用されます。MSBを先頭とする16桁の16進数が必要です。

## FAQ

<details>
<summary>SenseCAP IndicatorをLoRaWANゲートウェイとして使用できますか？</summary>

いいえ、SenseCAP IndicatorはSX1262 loraトランシーバーに基づいてLoRaWANゲートウェイとして機能するように設計されていません。これは主にLoRaWANネットワークアーキテクチャにおけるエンドデバイスです。LoRaWANゲートウェイは通常、異なるハードウェアとソフトウェア機能を持ち、SenseCAP Indicatorのような複数のエンドデバイスをネットワークサーバーに接続するように設計されています。LoRaWANゲートウェイをお探しの場合は、この目的のために特別に設計されたデバイスを検討してください。
</details>

<details>
<summary>なぜTrue Network ServerがjoinAcceptを送信しないのですか？</summary>

**注意:** デバイスがネットワークサーバーから`joinAccept`を受信できない場合のシナリオがいくつかあります：

- **周波数変更:** 周波数設定を変更したが、ネットワークサーバー上で同じデバイス認証情報を保持している場合、デバイスが適切に同期しない可能性があります。

- **デバイスフラッシュクリア:** デバイスのフラッシュメモリをクリアしたが、同じ認証情報を使用し続けている場合、同期の問題が発生する可能性があります。

どちらの場合も、OTAA（Over-the-Air Activation）デバイスナンス（一度だけ使用される番号）が同期していることを確認することが重要です。これに対処するには、ネットワークサーバーの`Flush OTAA device nonces`機能を使用してください。この操作によりナンスがリセットされ、適切な接続の再確立に役立ちます。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_flush_nonces.png"/>
</div>
</details>

<details>
<summary>ダウンリンクメッセージを送信するにはどのFPortを使用しますか？</summary>

現在のLoRaWANデモの設定では、ダウンリンクメッセージの送信用に事前定義されたポートはありません。デモコードは柔軟性を持って設計されており、特定のニーズに合わせて適応できます。

特定のポートでメッセージを特定の方法で処理する必要がある場合は、それに応じてコードを変更するオプションがあります。このカスタマイズにより、異なるポートに基づいてダウンリンクメッセージの個別処理が可能になり、デバイスがこれらの通信をどのように解釈し応答するかをより詳細に制御できます。
</details>

<details>
<summary>MACバージョン1.1.0を使用するには？</summary>

LoRaWAN MACバージョン1.1.0の機能を利用するには、暗号化設定を適切に構成する必要があります。これは`idf.py menuconfig`コマンドを使用して`USE LRWAN_1_1_X_CRYPTO`オプションを有効にすることで実行できます。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/menuconfig_110.png"/>
</div>

LoRaWANのバージョン`1.1.0`の実装には、セキュリティ強化のための特定の暗号化アルゴリズムが必要です。このオプションを設定することで、このバージョンで導入された強化されたセキュリティ機能とプロトコルとデバイスが互換性を持つことを保証します。
</details>

## ODMサービス

Seeed Studioは、多様なニーズに対応する迅速なカスタマイゼーションとスケーリング要件に対応するため、包括的なワンストップODMサービスを提供しています。専門的な機能でプロジェクトをカスタマイズしたい場合や、効率的に運用を拡大するためのサポートが必要な場合は、お気軽にお問い合わせください。お問い合わせやより詳細な情報については、iot@seeed.ccまでご連絡ください。お客様のユニークなアイデアを現実に変えるお手伝いをいたします。

## 技術サポート

**SenseCAP Indicatorでお困りですか？私たちがサポートいたします！**

このチュートリアルに従っている際に問題が発生したり、ご質問がある場合は、お気軽に技術サポートまでお問い合わせください。私たちは常にサポートいたします！

[Seeed公式Discordチャンネル](https://discord.gg/kpY74apCWj)でご質問いただくか、[GitHubディスカッション](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions)で何でもお気軽にシェアしてください！
