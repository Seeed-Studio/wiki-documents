---
description: SenseCAP Indicator の LoRaWAN 機能をプレビューする
title: LoRaWAN エンドノード - SenseCAP Indicator
keywords:
- インジケーター
- タッチ
- スクリーン
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/lorawan_landing_page.png
slug: /ja/SenseCAP_Indicator_Application_LoRaWAN
toc_max_heading_level: 4
sidebar_position: 4
last_update:
  date: 05/15/2025
  author: Spencer
tags:
  - デバイス
categories:
  - SenseCAP
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/lorawan_landing_page.png"/>
</div>

## ハンズオンデモ

このセクションでは、SenseCAP Indicator の基本的な LoRaWAN（*Class C* および *OTAA*）機能を実際のデモを通じて詳しく説明します。このプロセスは以下の3つの主要なステップに分かれています：

1. [ファームウェアの取得](#flash_firmware)：必要に応じてファームウェアをカスタマイズしてインストールします。
2. [デバイスの登録](#HEAD_register_device)：デバイスを LoRaWAN ネットワークサーバーに追加します。
3. [LoRaWAN 認証情報の設定](#configure_credentials)：SenseCAP Indicator に必要なネットワーク情報を入力します。

始める前に、LoRaWAN について簡単に背景を確認しましょう。

## LoRaWAN

LoRaWAN は、低消費電力広域（LPWA）ネットワークプロトコルとして定義されており、バッテリー駆動のデバイスを広範囲の地域やネットワークを通じてインターネットにワイヤレスで接続します。これは LoRa ワイヤレスシステムの一部であり、ライセンス不要のスペクトラムで動作し、限られた帯域幅で長距離通信をサポートします。その特徴として、長距離通信（最大10マイル）、長いバッテリー寿命（最大10年）、低コスト、低消費電力、そしてデータに応じて51～241バイトのペイロードサイズが挙げられます[^1]。

[^1]: [LoRaWAN ゲートウェイとノードの簡単な紹介](https://www.seeedstudio.com/blog/2021/04/27/a-gentle-introduction-to-lorawan-gateways-nodes/)

<div style={{ textAlign: 'center' }}>

<img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/3.png" alt="LoRaWAN フレームワーク" />
<div style={{ marginTop: '-8px' }}><em>LoRaWAN ネットワークフレームワーク</em></div>

</div>  

## 高度な知覚システム

Seeed Studio の「高度な知覚システム」は、さまざまな業界で環境認識を向上させるために設計された、包括的なセンサー、ネットワーク、エッジコンピューティングツール、クラウドを提供する [IoT ソリューション](/ja/SenseCAP_introduction) です。このシステムは、多様なモジュールやデバイス[^2]を備え、デジタルの「目と耳」として機能し、現実世界の理解を変革します。

<div style={{ textAlign: 'center' }}>

<img class='border-radius: 10px;' width={680} src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/03/Seeed-Studio-Advanced-Perception-System-2048x1150.png" alt="高度な知覚システム" />
<div style={{ marginTop: '-8px' }}><em>高度な知覚システムのレイヤー</em></div>
<br/>
</div>

SenseCAP チームは主にセンサーとネットワークコンポーネントに注力し、最高品質のカスタマイズされた業界ソリューションを提供することに尽力しています。その成果として、革新的な [スマートビレッジソリューション](https://www.seeedstudio.com/smart-village) などの高評価を得た製品が生まれました。このソリューションは、その実用性と先進的なデザインで称賛されています。

Helium ネットワークの分野では、チームの貢献は特に注目に値します。SenseCAP M1、M2、M4 などのデバイスは、高性能な Helium ホットスポットであるだけでなく、ユーザーが HNT 暗号通貨を稼ぎながら、分散型ワイヤレス LoRaWAN® ネットワークインフラを構築するのを可能にします。特に SenseCAP M4 Square は、複数の Web 3.0 アプリを操作できる能力で際立っており、複雑なマルチアプリケーションシステムの展開を簡素化します[^3]。

この深い専門知識と多様な顧客基盤との継続的な関わりを活かし、SenseCAP チームは戦略的に SenseCAP Indicator に LoRa 機能を統合することを決定しました。

[^2]: [SenseCAP 製品 - Bazaar](https://www.seeedstudio.com/SenseCAP-c-1825.html)
[^3]: [SenseCAP MX](https://www.sensecapmx.com/)

それでは、[SenseCAP Indicator](https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html) の LoRaWAN 機能を詳しく見ていきましょう。

## 概要

| 機能                              | 詳細                                                        |
|:---:|:---:|
| 無線トランシーバー                | SX1262                                                       |
| 対応クラス                        | クラス A/B/C                                                 |
| 対応周波数帯                      | AS923, AU915, CN779, EU433, EU868, KR920, IN865, US915, RU864, US915 |
| LoRaWAN マックバージョン         | 1.0.4/1.1.0                                                  |
| エンドデバイス LoRaWAN スタック採用 | [LoRaMac-node](https://github.com/Lora-net/LoRaMac-node/releases/tag/v4.7.0)     |
| ドキュメント                      | [LoRaMac Documentation](http://stackforce.github.io/LoRaMac-doc/) |

<!-- |地域パラメータ|RP002-1.0.3| -->

## ステップ 1. ファームウェアを取得する {#flash_firmware}

### 1.1 ファームウェアをダウンロードする:

まず、GitHubのリリースページからSenseCAP Indicator用のLoRaWANファームウェア `indicator_lorawan.bin` をダウンロードしてください。

<div class="github_container" style={{textAlign: 'center'}}>

<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> ファームウェアをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>

</div>
<br />

:::info カスタムファームウェアに興味がありますか？
[ESP-IDF プログラミングガイド](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/index.html#ide)(v5.1)では、独自のファームウェアを構築する方法についての情報を提供しています。特定のニーズに合わせて[ソースコード](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32)をアクセスして変更することができます。
:::



### 1.2 ファームウェアをフラッシュする:

SenseCAP Indicatorにファームウェアをフラッシュするには、まずファームウェアをダウンロードし、次にesptool（またはESP-IDF環境を使用している場合は`esptool.py`）を使用してフラッシュします（詳細なガイドについては[こちらの手順](/ja/SenseCAP_Indicator_Application_LoRaWAN)を参照してください）。

**Windowsでesptoolを使用してファームウェアをフラッシュする方法:**

以下のコマンドをWindowsのコマンドプロンプトで使用してファームウェアをフラッシュします:

```jsx
<tool_path>/esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 <firmware_path>/indicator_lorawan.bin 
```

例えば、`flash_bin`フォルダがドライブ`D:`にあり、以下の構造を持つ場合:

```sh
flash_bin/
├── esptool.exe
└── indicator_lorawan.bin
```

コマンドは以下のようになります:

```sh
./esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_nonport_flash.png.png"/>
</div>

複数のポートがあり、特定のポートを指定する必要がある場合は、`-p`または`--port`引数を使用してください:

```sh
./esptool.exe --chip esp32s3 -p COM20 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_port_flash.png"/>
</div>

:::note
Macユーザーは`./esptool.exe`を`./esptool`に置き換えてください。

フラッシュ中に問題が発生した場合は、**ボーレート速度**を下げることを検討するか、[こちらのトラブルシューティング手順](https://askubuntu.com/questions/1411463/dev-ttyusb0-file-disappears-from-dev-directory-while-using-device)を参照してください。
:::

ファームウェアが正常にフラッシュされたら、次のステップでLoRaWANネットワークサーバーからデバイスEUIやAPPkeyなどの重要なパラメータを取得してください。

## ステップ 2. デバイスをLoRaWANネットワークサーバーに登録する {#HEAD_register_device}

> 開始する前に、デバイスがLoRaWANネットワークのカバレッジエリア内にあることを確認してください。

このセクションでは、ローカルのLoRaWANネットワークサーバーに接続する手順を説明します。例として[ChirpStack](https://www.chirpstack.io/)プラットフォームと、[SenseCAP M2 マルチプラットフォーム LoRaWAN 屋内ゲートウェイ (EU868)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)を使用します。*異なるネットワークサーバーを使用している場合でも手順は類似しています*。以下のアクティベーションに必要な情報を収集してください：

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
### 2.1 SenseCAP LoRaWAN ゲートウェイの設定

SenseCAPゲートウェイを設定するには、ウェブインターフェースにアクセスし、ChirpStackネットワークサーバーの設定を開始します。以下は設定ページのビジュアルガイドです：

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/gateway_config.png"/>
</div>

設定を調整した後、`Save & Apply`をクリックして変更を保存します。その後、提供されたURL (例：http://192.168.1.102:8080) を使用してChirpStackインターフェースにアクセスできます。

以下のデフォルトの資格情報を使用してログインしてください：

- **ユーザー名:** `admin`
- **パスワード:** `admin`

詳細および高度な設定オプションについては、[SenseCAP M2 Gateway LNS Configuration Guide](https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/)をご覧ください。


### 2.2 ローカルネットワークサーバー（ChirpStack）の設定
ChirpStackの詳細な機能とLoRaWANバージョンサポートについては、[ChirpStack Network Server Documentation](https://www.chirpstack.io/network-server/features/lorawan-versions/)を参照してください。

以下は、ChirpStackを使用してローカルネットワークサーバーを設定する手順です：

1. **[デバイスプロファイルを作成する](#create_dev_profile):** これは、デバイスの設定と機能を標準化するためのものです。ネットワーク内でデバイスが効果的に通信するために重要です。
2. **[アプリケーションを追加する](#add_appication):** これは、デバイスを整理して管理するのに役立ちます。同じ目的や特性を共有するデバイスをグループ化するために使用され、管理が簡単になります。
3. **[アプリケーションにデバイスを登録する](#register_device):** このステップでは、デバイスを特定の設定やデータ処理ルールにリンクします。ネットワーク内でデバイスが正しく動作するために重要なステップです。

#### 2.2.1 デバイスプロファイルを作成する {#create_dev_profile}

`Device profiles`で新しいデバイスプロファイルを作成するには、サイドバーの「Tenant」に移動し、「Device profiles」を選択します。

<div align="center">
  <img class='border-radius: 10px;' width={220} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/sidebar_device_profile.png"/>
</div>

デバイスプロファイルを作成することは、デバイスがLoRaWANネットワーク上で効果的に通信するために重要なステップです。これには、デバイスの性能と互換性に影響を与える技術的なパラメータの選択が含まれます。以下の手順で設定を行います：

- **MACバージョン:** これは、デバイスが使用するMedia Access Control (MAC)プロトコルのバージョンを指します。MACプロトコルは、デバイスがネットワークにアクセスする方法を管理するために重要です。バージョンv1.0.4とv1.1.0の間で選択できます。
- **地域パラメータリビジョン:** これは、デバイスの地理的位置に基づいて設定する必要がある特定のパラメータです。これにより、デバイスが地域の規制やネットワーク仕様に準拠することが保証されます。

**MACバージョンの選択**

選択するMACバージョンは、デバイスが必要とする資格情報のセットを決定するため、非常に重要です：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value='MAC Version 1.0.4'>

  以下の資格情報が必要です：

  - **DevEUI:** デバイスに割り当てられた一意の識別子で、グローバルに一意であることを保証します。
  - **AppKey:** デバイスの通信を暗号化し、保護するために使用される秘密鍵。

</TabItem>

<TabItem value='MAC Version 1.1.0'>

  デバイスには以下の資格情報が必要です：

  - **DevEUI:** デバイスのグローバルに一意の識別子。
  - **AppEUI/JoinEUI:** デバイスが接続するアプリケーションの一意の識別子。
  - **AppKey:** 通信を保護するために使用される暗号化キー。

</TabItem>
</Tabs>


**地域パラメータリビジョンの選択**

LoRaWANネットワークのデバイスプロファイルを設定する際、選択する地域パラメータ（RP）バージョンは、デバイスが特定の地域標準および仕様に準拠して動作することを保証するために重要です。



**現在の設定**

現在、MACバージョン`1.0.4`および地域パラメータリビジョン`RP002-1.0.2`でデバイスプロファイルを設定しています。

:::info 地域パラメータリビジョン
LoRaWANネットワークでデバイスプロファイルを設定する場合、`RP002-1.0.2`は現在のニーズに適した選択です。`RP002-1.0.3`は、`v4.7.0` LoRaMac-node仕様に基づく[コード](https://github.com/Lora-net/LoRaMac-node/blob/v4.7.0/src/mac/region/Region.h)で推奨されています。
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_device_profile_check.png"/>
</div>

必要な要素を正しく理解し設定することは、デバイスがLoRaWANネットワーク上で効果的かつ安全に通信するための鍵となります。

**Class C** デバイスタイプを使用するには、デバイスプロファイル内でこの機能を明示的に有効にすることが重要です。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_104_classC_enable.png"/>
</div>

**デコーダー関数**

実際に、デバイスが送信するペイロードデータを意味のある解釈可能なものにするためには、デバイスプロファイル内でデコーダーを実装することが重要です。このデコーダーは、生のバイナリデータを読み取り可能な形式に変換し、デバイスが送信する情報を効果的に理解し活用できるようにします。

<details>

<summary>Decoder.js をコピーするにはクリック</summary>

このデコーダーは [GitHub リポジトリ](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/docs/ChirpStackV4_Decoder.js) から取得されています。

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
                type = 'Temp'; // 温度
                num  = 2;
                break;
            case 1:
                type = 'Humidity'; // 湿度
                num  = 2;
                break;
            case 2:
                type = 'CO2'; // 二酸化炭素
                num  = 0;
                break;
            case 3:
                type = 'TVOC'; // 総揮発性有機化合物
                num  = 0;
                break;
            case 4:
                type = 'Light'; // 光
                num  = 0;
                break;
            default:
                type = 'unknown'; // 不明
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

#### 2.2.2 アプリケーションを追加する {#add_appication}

デバイスを管理するために、LoRaWAN ネットワークサーバー内でアプリケーションを作成して設定します。

新しいアプリケーションを作成するには、サイドバーの「Tenant」に移動し、「Application」を選択します。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_create.png"/>
</div>

名前を設定し、必要に応じて説明を追加して送信します。

#### 2.2.3 アプリケーションにデバイスを登録する {#register_device}

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_add_device.png"/>
</div>

アプリケーション内で `Add device` ボタンを押します。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_device_add.png"/>
</div>

デバイスを追加するには、`Name` を指定し、`Device EUI` と以前に作成した `Device Profile` を提供する必要があります。

Device EUI を自動生成するか、デバイスから既存のものを使用することができます。

このプロセスでは、自動生成された Device EUI を使用します。これらの詳細を送信すると、デバイスがアプリケーションに追加され、自動的に OTAA キーセクションにリダイレクトされます。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_otaa.png"/>
</div>

ランダムな **Application Key (AppKey)** を生成するボタンをクリックするか、既存のものを使用することを選択します。必要なすべての認証情報とパラメータを確保してください。*MAC Version 1.0.4* の場合、必要な認証情報は以下の通りです：

- **DevEUI (例):** `5d61e4648dc926e2`
- **AppKey (例):** `ec2b966c2c4bbe94a6ef79d0479db0e5`

これらの詳細を使用して、以下のコマンドを実行します：

```sh
lorawan --eui 5d61e4648dc926e2 --app_key ec2b966c2c4bbe94a6ef79d0479db0e5
```

追加のコマンドやサポートについては、[console command](#commands) セクションを参照してください。

## Step 3. SenseCAP Indicator をネットワークに参加させる設定{#configure_credentials}

SenseCAP Indicator と接続を確立するには、任意の **シリアルツール**（[Minicom](https://wiki.emacinc.com/wiki/Getting_Started_With_Minicom)、[Putty](https://www.putty.org/) など）を使用するか、`idf monitor` を使用してください（詳細な手順は [ESP-IDF ドキュメント](https://docs.espressif.com/projects/esp-idf/en/v5.1.2/esp32/api-guides/tools/idf-monitor.html) を参照してください）。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esp_idf_monitor.png"/>
</div>

:::caution
このステップの前にデバイスが LoRaWAN 接続を開始していないことを確認してください。
もし開始している場合は、停止する必要があります。
:::

コンソールに資格情報を含むコマンドを入力してください。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_otaa_config.png"/>
</div>

これで、SenseCAP Indicator 上でキーを確認できるはずです。必要に応じて設定を更新してください。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_press_join.png"/>
</div>

*Join* ボタンを押すと、*コンソール*を通じて接続プロセスを直接観察でき、接続が成功したことを確認できます。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_console.png"/>
</div>

## Step 4 **メッセージの送受信** {#uplink_and_downlink}

このセクションでは、デバイスと LoRaWAN ネットワーク間のアップリンクおよびダウンリンク通信を監視するプロセスを説明します。[^4]

[^4]: [詳細: LoRaWAN® を使用したメッセージの送受信](https://lora-developers.semtech.com/documentation/tech-papers-and-guides/sending-and-receiving-messages-with-lorawan/sending-and-receiving-messages/)

### アップリンクメッセージ

アップリンクメッセージは LoRaWAN ネットワークにおいて基本的な通信であり、SenseCAP Indicator のようなデバイスがネットワークサーバーにデータを送信することを可能にします。このメッセージは、*センサーデータ*、デバイスの状態、その他のテレメトリ情報を報告するために重要です。

<details>

<summary>アップリンクメッセージの概念</summary>

**LoRaWAN におけるアップリンク:**

LoRaWAN ネットワークでは、アップリンクメッセージはエンドデバイス（SenseCAP Indicator など）が開始し、ゲートウェイを通じてネットワークサーバーに送信される通信です。これらのメッセージは通常、センサーの読み取り値やデバイスの状態を送信するために使用されます。

1. **データ収集**: SenseCAP Indicator はセンサーや内部プロセスからデータを収集します。これには環境の読み取り値、デバイスの状態、その他の関連する指標が含まれる場合があります。

2. **データのパッケージ化**: 収集されたデータは、送信に適した*事前定義された形式*にパッケージ化されます。これには、ペイロードサイズを最適化し、効率的な送信を確保するためのデータのエンコードが含まれる場合があります。

3. **メッセージの送信**: デバイスは LoRaWAN ネットワークを通じてアップリンクメッセージを送信します。この送信は通常、特定の間隔（例: 5分ごと）に基づいてスケジュールされるか、特定のイベント（例: 閾値の超過）によってトリガーされます。

**ネットワークサーバーでの受信と処理:**

SenseCAP Indicator がアップリンクメッセージを送信すると、それはゲートウェイを介して LoRaWAN ネットワークサーバーに受信されます。その後、ネットワークサーバーは以下のようにメッセージを処理します：

1. **メッセージの受信**: ネットワークサーバーはゲートウェイからアップリンクメッセージを受信し、デコードします。

2. **データの処理と分析**: デコード後、サーバーはデータを処理します。これには、ログ記録、アラートのトリガー、さらなる分析が含まれる場合があります。データは、デバイスの機能に応じて、温度読み取り値、湿度レベル、その他のセンサーデータなど、さまざまな情報を含むことができます。

3. **応答アクション**: 受信したデータに基づいて、ネットワークサーバーはデバイスに指示や更新を含むダウンリンクメッセージを送信するなどのアクションを実行する場合があります。この応答は、事前定義されたルールに基づいて自動化されるか、システムを監視しているユーザーによって手動でトリガーされることがあります。

</details>

#### アップリンクメッセージ: センサーデータのアップロード

SenseCAP Indicator を使用した LoRaWAN デモの文脈では、アップリンクメッセージは温度や湿度の読み取り値などの単純なセンサーデータで構成される場合があります。

*参加プロセス*が成功すると、`LoRaWAN フレーム`セクションでログを確認し、データ送信を監視し、デバイスとネットワーク間の通信の詳細な記録を取得できます。

:::tip
作成したアプリケーション内のデバイスの *LoRaWAN フレーム* セクションに移動し、特定のデバイスを見つけてください。ここで、デバイスによって送信および受信されるデータパケットを監視および管理し、LoRaWAN ネットワーク内での円滑な通信と運用を確保できます。
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_frame.png"/>
</div>

デコーダー機能が有効になっている場合、イベントセクションで解析されたデータを確認できるはずです（`+up` ボタンを押すことで表示できます）。これにより、デバイスからの受信データをより効果的に理解し、分析することができます。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_event_view.png"/>
</div>

### ダウンリンクメッセージ

LoRaWANネットワークにおけるダウンリンクプロセスは、双方向通信において重要であり、ネットワークサーバーからSenseCAP Indicatorデバイスへのデータやコマンドの送信を可能にします。この機能は、さまざまな操作コマンド、設定変更、またはファームウェアの更新に特に有用です。

<details>

<summary>ダウンリンクメッセージの概念</summary>

**LoRaWANにおけるダウンリンク:**

LoRaWANのデモ環境では、ダウンリンクメッセージを使用してSenseCAP Indicator上のアニメーション電球を制御し、オンまたはオフに切り替えることができます。ただし、この機能は必要に応じて特定のコマンドや設定を実行するように拡張することが可能です。

**ダウンリンクメッセージの送信**

1. **ダウンリンクメッセージの開始**: ダウンリンクメッセージを送信するには、通常、ネットワークサーバーのインターフェースを使用します。デバイスに対してダウンリンクメッセージをスケジュールできるセクションに移動します。

2. **メッセージ形式**: メッセージがSenseCAP Indicatorの仕様に従ってフォーマットされていることを確認してください。これは、ダウンリンクメッセージの目的に応じて、特定のペイロード形式やエンコーディング方法を含む場合があります。

3. **メッセージのスケジュール**: メッセージを作成した後、適切なタイミングで送信するようにスケジュールします。このタイミングは、デバイスのデータ送信スケジュールや予想される活動時間など、さまざまな要因に依存する場合があります。

**デバイスでのダウンリンクメッセージの受信と処理**

LoRaWANネットワークサーバーによってダウンリンクメッセージが送信されると、SenseCAP Indicatorは次の受信ウィンドウ中にそれを受信します。デバイスは以下のようにメッセージを処理します：

1. **メッセージの受信**: SenseCAP Indicatorは、事前に定義された受信ウィンドウ中にダウンリンクメッセージを受信します。これらの期間中にデバイスが受信状態にあることが重要です。

2. **メッセージの処理**: ダウンリンクメッセージを受信すると、デバイスはその内容を処理します。これには、設定の変更、パラメータの更新、リレーの切り替えやセンサーのしきい値の調整などのアクションのトリガーが含まれる場合があります[^5]。

[^5]: [TxData Function - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/11bf6165f0e815a1dc6b83be253972ac320ecdd5/examples/indicator_lorawan/main/lorawan/indicator_lorawan.c#L445)

3. **フィードバックと確認**: ダウンリンクメッセージが確認を必要とする場合（確認済みダウンリンクの場合）、デバイスは次のアップリンクメッセージで確認応答を送信します。

</details>

#### デモメッセージ: 電球の制御

このデモでは、LoRaWANネットワークを介してIndicator上のシミュレートされた電球を制御するためにダウンリンクメッセージを使用する方法を説明します。この例は、リモートデバイス管理のためのダウンリンク通信の実用的な応用を示しています。

**1. シナリオ概要:**

- このデモでは、SenseCAP Indicatorが仮想電球で構成されており、これは単純で制御可能なデバイスを表します。
- 電球には「オン」と「オフ」の2つの状態があり、LoRaWANネットワークサーバーから送信されるダウンリンクメッセージによって制御されます。

**2. ダウンリンクメッセージの準備:**

- 電球を制御するために、ダウンリンクメッセージの特定のペイロード構造が定義されています。簡単のため、以下のように仮定します：
  - ペイロード`0001`を送信すると電球がオンになります。
  - ペイロード`0000`を送信すると電球がオフになります。

 - これらのペイロードは、SenseCAP Indicatorが理解し、実行するようにプログラムされた形式でエンコードされています[^6]。

[^6]: [lorawan_rx_data_handle function - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/11bf6165f0e815a1dc6b83be253972ac320ecdd5/examples/indicator_lorawan/main/lorawan/indicator_lorawan.c#L591C33-L591C33)

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bulb_payload.png"/>
</div>

**3. ダウンリンクメッセージの送信:**

 - ネットワークサーバーのインターフェースを通じて、対応するペイロードでダウンリンクメッセージをスケジュールできます。
 - メッセージはキューに入れられ、次の利用可能な受信ウィンドウ中にSenseCAP Indicatorに送信されます（そのため遅延があります）。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/queue_packet.png"/>
</div>

**4. ダウンリンクメッセージの受信:**

電球をオンにするには、ペイロード`0001`でダウンリンクをスケジュールします。オフにするには、ペイロード`0000`を使用します。ペイロード`0001`のダウンリンクメッセージをキューに入れた後、電球をオフにするためにペイロード`0000`のダウンリンクメッセージを送信します。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/console_bulb.png"/>
</div>

そして、電球が**オフになった**ことが確認できます。

## 探索が待たれる機能 {#function}

SenseCAP Indicator には、探索が待たれる多くの機能があります。このデモでは、センサーデータのアップロードと、ダウンリンクメッセージを使用して SenseCAP Indicator の仮想電球を制御する方法を示します。

**探索すべき主な機能:**

**1. コマンドの受信と実行:**

 - SenseCAP Indicator はダウンリンクメッセージを効率的に受信します。
 - これらのメッセージを処理し、仮想電球のオン/オフのようなコマンドを解釈します。
 - 電球の状態はそれに応じて変化し、デバイス制御のリアルなシミュレーションを提供します。

**2. 確認と検証:**

 - コマンド実行後、SenseCAP Indicator は確認としてアップリンクメッセージを送信します。
 - この確認メッセージはネットワークサーバーのインターフェースを通じて追跡でき、コマンドが効果的に受信され実行されたことを保証します。

**3. 実用的な応用:**

 - このシンプルなデモは、IoTデバイスを操作するための LoRaWAN ダウンリンクメッセージの有用性を強調しています。
 - IoTエコシステムの重要な側面である、デバイスをリモートで指示・管理する能力を示し、その実用的な価値を証明します。

このデモはほんの始まりに過ぎません。SenseCAP Indicator は、環境モニタリングからスマートオートメーションまで、さまざまなIoTアプリケーションに対応する多用途なプラットフォームを提供します。その機能をさらに深く掘り下げることで、この強力なツールの可能性を最大限に引き出し、革新的なソリューションやIoTプロジェクトにおける制御の向上を実現できます。ぜひ実験を重ね、SenseCAP Indicator があなたのIoTプロジェクトをどのように強化できるかを発見してください。

## コンソールマニュアルページ {#commands}

<!-- [indicator_lorawan - README](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/README.md) を確認してください: -->

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_cmd_all.png"/>
</div>

以下は、LoRaWAN ネットワーク情報を設定するためのターミナルコマンドの紹介です。マニュアルエントリのような形式で記載しています。

### **lorawan**
このコマンドは、デバイスの LoRaWAN ネットワーク情報を設定します。OTAA（Over-the-Air Activation）および ABP（Activation By Personalization）方式の両方に必要なさまざまなパラメータを設定できます。

##### 使用方法:
```sh
lorawan [--eui=] [--join_eui=] [--app_key=] [--dev_addr=] [--apps_key=] [--nwks_key=]
```

##### オプション:
- `--eui=`: デバイスの EUI（Extended Unique Identifier）を設定します。8桁の16進数が必要で、MSB（Most Significant Bit）から始まります。
  
- `--join_eui=`: OTAAで使用される JOIN EUI（以前は APP EUI と呼ばれていました）を設定します。8桁の16進数が必要で、MSBから始まります。

- `--app_key=`: OTAAの参加プロセスで使用される暗号化キーである APP KEY を設定します。16桁の16進数が必要で、MSBから始まります。

- `--dev_addr=`: ABP用のデバイスアドレスを設定します。4桁の16進数識別子で、MSBから始まります。

- `--apps_key=`: ABP用の APPS KEY を設定します。アプリケーションペイロードを暗号化するために使用されます。16桁の16進数が必要で、MSBから始まります。

- `--nwks_key=`: ABP用の NWKS KEY を設定します。ネットワークペイロードの暗号化およびデバイス認証に使用されます。16桁の16進数が必要で、MSBから始まります。

## よくある質問 (FAQs)

<details>
<summary>SenseCAP Indicator を LoRaWAN ゲートウェイとして使用できますか？</summary>

いいえ、SenseCAP Indicator は SX1262 LoRa トランシーバーに基づいて設計されており、LoRaWAN ゲートウェイとして機能するようには設計されていません。これは主に LoRaWAN ネットワークアーキテクチャにおけるエンドデバイスです。LoRaWAN ゲートウェイは通常、異なるハードウェアおよびソフトウェア機能を備えており、SenseCAP Indicator のような複数のエンドデバイスをネットワークサーバーに接続するために設計されています。LoRaWAN ゲートウェイをお探しの場合は、この目的のために特別に設計されたデバイスを検討してください。
</details>

<details>
<summary>True Network Server が joinAccept を送信しないのはなぜですか？</summary>

**注意:** デバイスがネットワークサーバーから `joinAccept` を受信できない場合、いくつかのシナリオが考えられます：

- **周波数の変更:** 周波数設定を変更したが、ネットワークサーバー上で同じデバイス資格情報を保持している場合、デバイスが正しく同期しない可能性があります。

- **デバイスのフラッシュメモリがクリアされた:** デバイスのフラッシュメモリをクリアしたが、同じ資格情報を使用し続けている場合、これも同期の問題を引き起こす可能性があります。

これらのケースでは、OTAA (Over-the-Air Activation) デバイスのノンス (一度だけ使用される数値) が同期していることを確認することが重要です。この問題を解決するには、ネットワークサーバー上で `Flush OTAA device nonces` 機能を使用してください。この操作によりノンスがリセットされ、適切な接続が再確立されます。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_flush_nonces.png"/>
</div>
</details>

<details>
<summary>ダウンリンクメッセージを送信する FPort はどれですか？</summary>

現在の LoRaWAN デモのセットアップでは、ダウンリンクメッセージを送信するための事前定義されたポートはありません。このデモコードは柔軟に設計されており、特定のニーズに合わせて適応可能です。

特定のポートでメッセージを特定の方法で処理する必要がある場合は、コードを変更することで対応できます。このカスタマイズにより、異なるポートに基づいてダウンリンクメッセージを処理する方法を調整でき、デバイスがこれらの通信を解釈し応答する方法をより細かく制御できます。
</details>

<details>
<summary>MAC バージョン 1.1.0 を使用するにはどうすればよいですか？</summary>

LoRaWAN MAC バージョン 1.1.0 の機能を利用するには、暗号設定を適切に構成する必要があります。これを行うには、`idf.py menuconfig` コマンドを使用して `USE LRWAN_1_1_X_CRYPTO` オプションを有効にします。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/menuconfig_110.png"/>
</div>

LoRaWAN バージョン `1.1.0` の実装には、セキュリティを強化するための特定の暗号アルゴリズムが必要です。このオプションを設定することで、デバイスがこのバージョンで導入されたセキュリティ機能およびプロトコルに対応できるようになります。
</details>


## ODM サービス

Seeed Studio は、多様なニーズに対応するための迅速なカスタマイズとスケーリング要件を満たす包括的なワンストップ ODM サービスを提供しています。プロジェクトを特別な機能でカスタマイズしたい場合や、効率的に運用を拡大するための支援が必要な場合は、ぜひお問い合わせください。お問い合わせや詳細情報については、iot@seeed.cc までご連絡ください。私たちは、あなたのユニークなアイデアを実現するお手伝いをいたします。

## 技術サポート

**SenseCAP Indicator に関するサポートが必要ですか？私たちがサポートします！**

このチュートリアルを進める中で問題が発生したり、質問がある場合は、ぜひお気軽に技術サポートにお問い合わせください。私たちはいつでもお手伝いする準備ができています！

[Seeed Official Discord Channel](https://discord.gg/kpY74apCWj) を訪れて質問を投稿するか、[GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) で自由に共有してください！