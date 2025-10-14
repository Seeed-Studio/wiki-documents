---
description: Wio-SX1262とXIAO esp32s3モジュールをベースとしたLorawanセンサーノード
title: LoRaWANセンサーノード
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67_1.webp
slug: /ja/wio_sx1262_xiao_esp32s3_for_lora_sensor_node
sidebar_position: 4
last_update:
  date: 10/23/2024
  author: Evelyn Chen
---

# XIAO ESP32S3 & Wio-SX1262キットをLoRaWANセンサーノードとして設定する

## はじめに

このwikiでは、XIAO ESP32S3 & Wio-SX1262キットをLoRaWANセンサーノードとして動作させ、DHT20温湿度センサーを接続し、M2 LoRaWANゲートウェイを追加して、The Things Network LNSプラットフォームにデータを送信するための段階的なガイドを提供します。また、フォーマットデコーダーの設定についても説明します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67.png" style={{width:900, height:'auto'}}/></div>

## 前提条件

- XIAO ESP32S3 & Wio-SX1262キット
- DHT20温湿度センサー
- XIAO拡張ボード
- M2 LoRaWAN屋内ゲートウェイ
- The Things Networkアカウントへのアクセス

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 & Wio-SX1262キット</th>
      <th>XIAO拡張ボード</th>
      <th>DHT20温湿度センサー</th>
      <th>M2 LoRaWAN屋内ゲートウェイ</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-10.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## ハードウェアセットアップ

1. Wio-SX1262モジュールをXIAO ESP32S3に接続します。
2. DHT20センサー（I2C groveコネクタ）とXIAO ESP32S3 & Wio-SX1262キットをXIAO拡張ボードに接続します。
3. キットをPCに接続します。
4. M2ゲートウェイを電源とEthernetポートに接続します。

## ビデオ説明

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/7NptcHkVcpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## TTNでの登録とセットアップ

https://www.thethingsnetwork.org/get-started にアクセスして登録してください - 他のウェブサイトと同様です。これらの手順はTTS Sandboxに関するものです。

[TTS Sandboxの手順](https://www.thethingsnetwork.org/get-started)にアクセスして登録してください。
メールアドレスを確認したら、[コンソール](https://console.cloud.thethings.network/)にログインできます。疑問がある場合は、[the things network forum](https://www.thethingsnetwork.org/forum/)で質問できます。まったく同じ詳細情報でログインします。

### TTNでのゲートウェイ登録

最初にゲートウェイを登録する方が簡単です。例として[SenseCAP M2 LoRaWAN Indoor Gateway(SX1302)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html)を使用しました。

個人のLoRaWANゲートウェイについては、主要概念とトラブルシューティングを[こちら](https://www.thethingsindustries.com/docs/gateways/)で読むことができます。

### TTNで新しいアプリケーションを作成

アプリケーションは、通常同じことを行ういくつかのデバイスを保管するボックスのようなものです - 大規模な展開では、これは1,000台の類似デバイスになる場合があります。開始時はおそらくわずか数台なので、使用方法をどのように分割するかについてまだ心配する必要はありません。

コンソールにログインしたら、アプリケーションに移動して最初のアプリケーションを作成できます。IDはすべて小文字または数字である必要があり、スペースは使用できません。ダッシュは使用可能で、TTNコミュニティ全体で一意である必要があります - そのためfirst-appは拒否されます - your-username-first-appのようにすると一意になる可能性があります。名前と説明は自分用で、オプションです。

### TTNでエンドデバイスを登録

**ステップ1**. 前のステップで作成したアプリケーションに移動します。

**ステップ2**. 新しいエンドデバイスの作成をクリック

アプリケーションの概要の右側、約半分下に大きな青いボタン**+ Register end device**があります。これをクリックして最初のデバイスの設定を作成します。

**ステップ3**. エンドデバイスの詳細を入力

サードパーティのLoRaWANスタックを使用して独自のデバイスを作成しているため、デバイスリポジトリにエントリはありませんので、'**Enter end device specifics manually**'を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/61.png" style={{width:400, height:'auto'}}/></div>

**ステップ4**. デバイスの詳細を入力

お住まいの地域に適した**周波数プラン**を選択してください。ほぼすべての国で使用する周波数に関する法律があることを考慮し、創造的になりすぎないでください。ヨーロッパでは推奨オプションを使用してください。他の地域では'used by TTN'とマークされたエントリを使用してください。この場合、**868 MHz**を選択します。

**LoRaWAN 1.1.0** - リストの最後のもの - 最新の仕様を選択してください。**RadioLibはRP001 Regional Parameters 1.1 revision Aを使用します**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/62.png" style={{width:400, height:'auto'}}/></div>

この時点で**JoinEUI**の入力を求められます。これはDIYデバイスでRadioLibを使用しているため、LoRa Alliance TR007技術推奨文書で推奨されているように**すべてゼロ**を使用できます。すべてゼロを入力して確認をクリックすると、**DevEUI**、**AppKey**、**NwkKey**の入力を求められます。適切にフォーマットされるように、コンソールで**生成**することが望ましいです。

エンドデバイスIDは、デバイスをより識別しやすくするために変更できます。ハードウェアに関連するもの - **test-device**のようなものが役立ちます。その後、青い'**Register device**'をクリックできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/63.png" style={{width:400, height:'auto'}}/></div>

**ステップ5**. デバイスの詳細をArduinoの設定ファイルにコピー

その後、デバイスの詳細をRadioLibの**設定ファイル**にコピーする必要があります。手動で入力する必要がないように、アイテムをクリップボードにコピーするボタンがあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/64.png" style={{width:400, height:'auto'}}/></div>

## XIAO ESP32S3 と Wio-SX1262 キットをLoRaWANセンサーノードとして設定する

このコードはArduinoで書かれており、Wio-SX1262モジュールとXIAO ESP32S3ボードを組み合わせてLoRaWANセンサーノードとして動作するように設計されています。DHT20センサーを接続して温度と湿度データを読み取り、このデータをLoRaWAN経由でThe Things Networkに送信します。

### XIAO ESP32S3とDHT20センサーに必要なライブラリをインストールする

- XIAO ESP32S3用のArduino環境をインストールする

https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation を参照してください。

- `DHT20`センサーライブラリをインストールする
パッケージ：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/DHT.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download ⬇️</font></span></strong>
    </a>
</div>

- `RadioLib`ライブラリをインストールする
注意：**バージョン6.6.0**をインストールしてください。そうでないとコードがコンパイルされません。

### セットアップ

**ステップ1**. LoRaWANデバイス認証とネットワークアクセスパラメータを入力する

`RADIOLIB_LORAWAN_JOIN_EUI`と`RADIOLIB_LORAWAN_DEV_EUI`は、デバイスがLoRaWANネットワークに参加する際のデバイス識別に使用されます。大きなオンラインコミュニティと同様に、これら2つのパラメータはデバイスの「身分証明書」であり、どのデバイスが参加を要求しているかをネットワークに知らせます。

`RADIOLIB_LORAWAN_APP_KEY`と`RADIOLIB_LORAWAN_NWK_KEY`は、セキュリティ認証とネットワークアクセス制御に使用されます。これらはネットワークコミュニティに入るための「パスワード」に似ており、正しいキーを持つデバイスのみがネットワークと安全に通信できることを保証します。さらに、アプリケーション（APP_KEYで区別）とネットワーク（NWK_KEYで区別）の権限に応じてデバイスの動作を制限することができます。

TTNからパラメータを設定ファイルに**コピー**するだけです。

1. ここで、`RADIOLIB_LORAWAN_JOIN_EUI`という名前のマクロが定義されています。このマクロが他の場所で定義されていない場合、16進数の`全ゼロ`値に設定されます。
  
```cpp
#ifndef RADIOLIB_LORAWAN_JOIN_EUI
#define RADIOLIB_LORAWAN_JOIN_EUI  0x0000000000000000
#endif
```

2. 同様に、`RADIOLIB_LORAWAN_DEV_EUI` マクロが定義されており、`DevEUI`（デバイス固有識別子）を表し、ここで特定の16進数値が設定されています。これは、デバイスがLoRaWANネットワークに参加する際のデバイス識別に使用されます。

```cpp
#ifndef RADIOLIB_LORAWAN_DEV_EUI
#define RADIOLIB_LORAWAN_DEV_EUI   0x****************
#endif
```

1. `RADIOLIB_LORAWAN_APP_KEY` と `RADIOLIB_LORAWAN_NWK_KEY` マクロが定義されており、それぞれ AppKey と NwkKey を表し、セキュリティ認証とネットワークアクセス制御に使用されます。

```cpp
#ifndef RADIOLIB_LORAWAN_APP_KEY
#define RADIOLIB_LORAWAN_APP_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif

#ifndef RADIOLIB_LORAWAN_NWK_KEY   // Put your Nwk Key here
#define RADIOLIB_LORAWAN_NWK_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif
```

4. 以下のマクロが定義されており、`LoRaWANアップリンクパラメータ`を表しています。これらのパラメータは、LoRaWANネットワークに送信されるアップリンクペイロードを設定するために使用されます。

```cpp
#define LORAWAN_UPLINK_USER_PORT  2
#define LORAWAN_UPLINK_DATA_RATE  3

#define LORAWAN_UPLINK_PERIOD     10000 // ms

#define LORAWAN_UPLINK_DATA_MAX   115 // byte
```

**ステップ 2**. LoRaWAN地域パラメータの選択

LoRaWAN通信には、`EU868`（ヨーロッパ868 MHz帯）、`US915`（アメリカ915 MHz帯）、`AU915`（オーストラリア915 MHz帯）、`AS923`（アジア923 MHz帯）、`IN865`（インド865 MHz帯）、`KR920`（韓国920 MHz帯）、`CN780`（中国780 MHz帯）、および`CN500`を含む、いくつかの地域選択肢が利用可能です。

`LoRaWANBand_t Region = EU868;`の行は、LoRaWAN通信の地域をEU868に設定します。これは、デバイスがヨーロッパの868 MHz周波数帯で動作するように設定されることを意味します。

US915とAU915では、サブバンド変数を定義します。この場合、0に設定されています。コメントでは、このサブバンド変数がUS915とAU915地域専用であることを示していますが、このコードスニペットではEU868地域では使用されていません。

```cpp
const LoRaWANBand_t Region = EU868;
const uint8_t subBand = 0; // For US915 and AU915
```

### センサーデータを読み取り、LoRaアップリンクペイロードを送信

LoRa通信を介してセンサーデータを読み取り、送信します。小数点精度でのバイト変換により、アップリンクペイロードにおける温度と湿度の値をより正確に表現できます。

```cpp
  float temp_hum_val[2] = {0};
  if (!dht.readTempAndHumidity(temp_hum_val)) {
    uplinkPayloadLen = 0;
    memset(uplinkPayload, sizeof(uplinkPayload), 0);

    // Convert temperature and humidity to bytes with decimal precision
    uint16_t tempDecimal = (temp_hum_val[1] * 100);
    uint16_t humDecimal = (temp_hum_val[0] * 100);
    uplinkPayload[uplinkPayloadLen++] = (tempDecimal >> 8);
    uplinkPayload[uplinkPayloadLen++] = tempDecimal & 0xFF;
    uplinkPayload[uplinkPayloadLen++] = (humDecimal >> 8);
    uplinkPayload[uplinkPayloadLen++] = humDecimal & 0xFF;

    for (int i = 0; i < uplinkPayloadLen; i++) {
      Serial.print(uplinkPayload[i], HEX);
      Serial.print(" ");
    }
```

## ファームウェアのフラッシュ

完成したファームウェアパッケージはこちら：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download ⬇️</font></span></strong>
    </a>
</div>

ダウンロードしてXIAO ESP32S3にフラッシュしてください。XIAO ESP32S3を初めて使用する場合は、[こちらのフラッシュチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/#software-preparation)を参照してください。

## ペイロードフォーマッターの設定

ペイロードフォーマッターは、センサーから受信した生データを人間が読める形式に変換するために使用されます。この場合、ペイロードフォーマッターはDHT20センサーから受信した生データをJSON形式に変換するために使用されます。

フォーマッタータイプ：`Custom Javascript formatter`

```js
function decodeUplink(input) {
  var bytes = input.bytes;
  var temperatureDecimal = (bytes[0] << 8) | bytes[1];
  var humidityDecimal = (bytes[2] << 8) | bytes[3];

  var temperature = temperatureDecimal / 100;
  var humidity = humidityDecimal / 100;

  return {
    data: {
      temperature: temperature,
      humidity: humidity
    }
  };
}
```

## LoRaWANデータの監視

特定のデバイスのアクティビティについては、中央のリストでデバイスをクリックしてください。デバイスのメインメニューには、Device Overview、Live Dataなどのオプションがあります。**Live Data**またはアクティビティボックス上のリンクをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/65.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/66.png" style={{width:800, height:'auto'}}/></div>

## リソース

- [コードパッケージ](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
