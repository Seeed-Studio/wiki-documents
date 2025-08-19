---
description: Wio-SX1262とXIAO ESP32S3モジュールを使用したLoRaWANセンサーノード
title: LoRaWAN センサーノード
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67_1.webp
slug: /ja/wio_sx1262_xiao_esp32s3_for_lora_sensor_node
sidebar_position: 4
last_update:
  date: 05/15/2025
  author: Evelyn Chen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32S3 & Wio-SX1262キットをLoRaWANセンサーノードとして設定する

## はじめに

このWikiでは、XIAO ESP32S3 & Wio-SX1262キットをLoRaWANセンサーノードとして設定する手順を説明します。DHT20温湿度センサーを接続し、M2 LoRaWANゲートウェイを追加して、The Things Network LNSプラットフォームにデータを送信する方法を紹介します。また、フォーマットデコーダーの設定についても説明します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67.png" style={{width:900, height:'auto'}}/></div>

## 必要条件

* XIAO ESP32S3 & Wio-SX1262キット
* DHT20温湿度センサー
* XIAO拡張ボード
* M2 LoRaWAN室内ゲートウェイ
* The Things Networkアカウントへのアクセス

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 & Wio-SX1262キット</th>
      <th>XIAO拡張ボード</th>
      <th>DHT20温湿度センサー</th>
      <th>M2 LoRaWAN室内ゲートウェイ</th>
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
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## ハードウェアセットアップ

1. Wio-SX1262モジュールをXIAO ESP32S3に接続します。
2. DHT20センサー（I2Cグローブコネクタ）とXIAO ESP32S3およびWio-SX1262キットをXIAO拡張ボードに接続します。
3. キットをPCに接続します。
4. M2ゲートウェイを電源とイーサネットポートに接続します。

## ビデオ説明

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/7NptcHkVcpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## TTNでの登録とセットアップ

https://www.thethingsnetwork.org/get-started にアクセスして登録します。他のウェブサイトと同様に登録できます。この手順はTTS Sandbox用です。

[TTS Sandboxの手順](https://www.thethingsnetwork.org/get-started)に従って登録してください。
メールアドレスを確認した後、[コンソール](https://console.cloud.thethings.network/)にログインできます。疑問がある場合は、[The Things Networkフォーラム](https://www.thethingsnetwork.org/forum/)で質問できます。同じログイン情報を使用します。

### TTNでゲートウェイを登録する
最初にゲートウェイを登録する方が簡単です。ここでは、[SenseCAP M2 LoRaWAN Indoor Gateway(SX1302)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html)を例として使用します。

個人用のLoRaWANゲートウェイについては、[こちら](https://www.thethingsindustries.com/docs/gateways/)で主要な概念やトラブルシューティングを確認できます。

### TTNで新しいアプリケーションを作成する

アプリケーションは、いくつかのデバイスをまとめて管理するための箱のようなものです。通常、同じことを行うデバイスをまとめます。大規模な展開では、数千台の類似デバイスを含む場合がありますが、最初は数台だけなので、どのように使用を分けるかについて心配する必要はありません。

コンソールにログインしたら、「Applications」に移動して最初のアプリケーションを作成できます。IDはすべて小文字または数字で、スペースは使用できません。ダッシュは使用可能で、TTNコミュニティ全体で一意である必要があります。例えば、「first-app」は拒否されますが、「your-username-first-app」のようにすれば一意になる可能性があります。名前と説明は任意で、自分用に使用します。

### TTNでエンドデバイスを登録する

**ステップ1**. 前のステップで作成したアプリケーションに移動します。

**ステップ2**. 新しいエンドデバイスを作成する

アプリケーションの概要の右側にある青いボタン「**+ Register end device**」をクリックします。これにより、最初のデバイスの設定を作成します。

**ステップ3**. エンドデバイスの詳細を入力する

サードパーティのLoRaWANスタックを使用して独自のデバイスを作成しているため、デバイスリポジトリにエントリはありません。「**Enter end device specifics manually**」を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/61.png" style={{width:400, height:'auto'}}/></div>

**ステップ4**. デバイスの詳細を入力する

地域に適した**周波数プラン**を選択します。ほとんどの国では使用する周波数に関する法律があるため、創造的にならないように注意してください。ヨーロッパの場合は推奨オプションを使用してください。他の地域では「TTNで使用される」と記載されたエントリを使用してください。この場合、**868 MHz**を選択します。

**LoRaWAN 1.1.0**を選択します（リストの最後にある最新の仕様）。**RadioLibはRP001 Regional Parameters 1.1 revision Aを使用します**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/62.png" style={{width:400, height:'auto'}}/></div>

この時点で**JoinEUI**を求められます。これはDIYデバイスであり、RadioLibを使用しているため、The LoRa Alliance TR007 Technical Recommendationsドキュメントで推奨されているように**すべてゼロ**を使用できます。すべてゼロを入力して確認をクリックすると、**DevEUI**、**AppKey**、**NwkKey**を求められます。コンソールに**生成**させることで、適切にフォーマットされたものを使用することをお勧めします。

エンドデバイスIDは、デバイスをより識別しやすくするために変更できます。ハードウェアに関連する名前（例：**test-device**）を使用すると便利です。その後、青い「**Register device**」をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/63.png" style={{width:400, height:'auto'}}/></div>

**ステップ5**. デバイスの詳細をArduinoの設定ファイルにコピーする

次に、RadioLib用の**設定ファイル**にデバイスの詳細をコピーする必要があります。クリップボードにコピーするためのボタンがあるので、手入力する必要はありません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/64.png" style={{width:400, height:'auto'}}/></div>

## XIAO ESP32S3 と Wio-SX1262 キットを LoRaWAN センサーノードとして設定する

このコードは Arduino で記述されており、Wio-SX1262 モジュールと XIAO ESP32S3 ボードを設定して LoRaWAN センサーノードとして機能させることを目的としています。DHT20 センサーを接続して温度と湿度のデータを読み取り、このデータを LoRaWAN を介して The Things Network に送信します。

### XIAO ESP32S3 と DHT20 センサー用の必要なライブラリをインストールする

* XIAO ESP32S3 用の Arduino 環境をインストールする

https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/#software-preparation を参照してください。

* `DHT20` センサーライブラリをインストールする
パッケージ：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/DHT.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> ダウンロード ⬇️</font></span></strong>
    </a>
</div>

* `RadioLib` ライブラリをインストールする  
注意：**バージョン 6.6.0** をインストールしてください。それ以外ではコードがコンパイルされません。

### セットアップ

**ステップ 1**. LoRaWAN デバイス認証とネットワークアクセスパラメータを入力する

`RADIOLIB_LORAWAN_JOIN_EUI` と `RADIOLIB_LORAWAN_DEV_EUI` は、デバイスが LoRaWAN ネットワークに参加する際にデバイスを識別するために使用されます。これは、大規模なオンラインコミュニティにおける「身分証明書」のようなもので、ネットワークがどのデバイスが参加を要求しているかを認識するためのものです。

`RADIOLIB_LORAWAN_APP_KEY` と `RADIOLIB_LORAWAN_NWK_KEY` は、セキュリティ認証とネットワークアクセス制御に使用されます。これらは、ネットワークコミュニティに入るための「パスワード」のようなもので、正しいキーを持つデバイスのみがネットワークと安全に通信できるようにします。また、アプリケーション（APP_KEY によって区別）およびネットワーク（NWK_KEY によって区別）の権限に応じてデバイスの操作を制限することができます。

TTN からパラメータを **コピー** して設定ファイルに貼り付けてください。

1. ここでは、`RADIOLIB_LORAWAN_JOIN_EUI` という名前のマクロが定義されています。このマクロが他の場所で定義されていない場合、16 進数の `all-zero` 値に設定されます。

```cpp
#ifndef RADIOLIB_LORAWAN_JOIN_EUI
#define RADIOLIB_LORAWAN_JOIN_EUI  0x0000000000000000
#endif
```

2. 同様に、`RADIOLIB_LORAWAN_DEV_EUI` マクロが定義されており、これはデバイスが LoRaWAN ネットワークに参加する際に使用される `DevEUI`（デバイス固有識別子）を表します。ここでは特定の 16 進数値が設定されています。

```cpp
#ifndef RADIOLIB_LORAWAN_DEV_EUI
#define RADIOLIB_LORAWAN_DEV_EUI   0x****************
#endif
```

3. `RADIOLIB_LORAWAN_APP_KEY` と `RADIOLIB_LORAWAN_NWK_KEY` マクロが定義されており、それぞれ AppKey と NwkKey を表します。これらはセキュリティ認証とネットワークアクセス制御に使用されます。

```cpp
#ifndef RADIOLIB_LORAWAN_APP_KEY
#define RADIOLIB_LORAWAN_APP_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif

#ifndef RADIOLIB_LORAWAN_NWK_KEY   // Nwk Key をここに入力してください
#define RADIOLIB_LORAWAN_NWK_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif
```

4. 以下のマクロは、`LoRaWAN アップリンクパラメータ` を表します。これらのパラメータは、LoRaWAN ネットワークに送信されるアップリンクペイロードを設定するために使用されます。

```cpp
#define LORAWAN_UPLINK_USER_PORT  2
#define LORAWAN_UPLINK_DATA_RATE  3

#define LORAWAN_UPLINK_PERIOD     10000 // ミリ秒

#define LORAWAN_UPLINK_DATA_MAX   115 // バイト
```

**ステップ 2**. LoRaWAN の地域パラメータを選択する

LoRaWAN 通信には、`EU868`（ヨーロッパ 868 MHz 帯）、`US915`（アメリカ 915 MHz 帯）、`AU915`（オーストラリア 915 MHz 帯）、`AS923`（アジア 923 MHz 帯）、`IN865`（インド 865 MHz 帯）、`KR920`（韓国 920 MHz 帯）、`CN780`（中国 780 MHz 帯）、`CN500` など、いくつかの地域選択肢があります。

以下の行では、`const LoRaWANBand_t Region = EU868;` によって LoRaWAN 通信の地域が EU868 に設定されています。これにより、デバイスはヨーロッパの 868 MHz 周波数帯で動作するように構成されます。

US915 および AU915 の場合、サブバンド変数が定義されます。この場合、0 に設定されています。コメントによると、このサブバンド変数は US915 および AU915 地域専用であり、このコードスニペットでは EU868 地域には使用されていません。

```cpp
const LoRaWANBand_t Region = EU868;
const uint8_t subBand = 0; // US915 および AU915 用
```

### センサーデータを読み取り、LoRa アップリンクペイロードを送信する

センサーデータを読み取り、LoRa 通信を介して送信します。小数点精度でバイトに変換することで、アップリンクペイロード内の温度と湿度の値をより正確に表現できます。

```cpp
  float temp_hum_val[2] = {0};
  if (!dht.readTempAndHumidity(temp_hum_val)) {
    uplinkPayloadLen = 0;
    memset(uplinkPayload, sizeof(uplinkPayload), 0);

    // 温度と湿度を小数点精度でバイトに変換
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

## ファームウェアの書き込み

以下のリンクから完成したファームウェアパッケージをダウンロードしてください：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> ダウンロード ⬇️</font></span></strong>
    </a>
</div>

ダウンロードしたファームウェアを XIAO ESP32S3 に書き込んでください。XIAO ESP32S3 を初めて使用する場合は、[書き込みチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/#software-preparation)を参照してください。

## ペイロードフォーマッタの設定

ペイロードフォーマッタは、センサーから受信した生データを人間が読みやすい形式に変換するために使用されます。この場合、ペイロードフォーマッタは DHT20 センサーから受信した生データを JSON 形式に変換します。

フォーマッタタイプ: `カスタム Javascript フォーマッタ`

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

## LoRaWAN データのモニタリング

特定のデバイスのアクティビティを確認するには、中央のリストからデバイスをクリックしてください。デバイスのメインメニューには、デバイス概要やライブデータなどのオプションがあります。**ライブデータ**をクリックするか、アクティビティボックスの上部にあるリンクをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/65.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/66.png" style={{width:800, height:'auto'}}/></div>

## リソース

* [コードパッケージ](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>