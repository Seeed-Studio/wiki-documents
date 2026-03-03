---
sidebar_position: 2
description: XIAO ESP32C3を使用してSenseCraft Data Platform AI Advisorに接続し、栽培アドバイスを取得する
title: 栽培アドバイス
keywords:
- sensecraft data platform
- xiao
- AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/sensecraft-data-platform/applications/planting-advice
aliases:
  - /ja/xiao_esp32c3_sensecapai
last_update:
  date: 06/06/2025
  author: Jancee
---

:::tip note
SenseCAPプラットフォームは正式に`SenseCraft Data Platform`に名称変更されました！
:::

# XIAO ESP32C3を使用してSenseCraft Data Platformに接続し、栽培アドバイスを取得する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/1.png" style={{width:1000, height:'auto'}}/></div>

この期間中、Seeed StudioのSenseCraft DataプラットフォームはAI機能を新たに開発・リリースしました。現在、SenseCraft Data PlatformのAI Advisorの主な機能は栽培者に建設的な栽培アドバイスを提供することに焦点を当てており、近い将来、より豊富なAI機能でアップデートされる予定です！

このチュートリアルでは、XIAO ESP32シリーズと`SenseCraft Data platform`を橋渡しし、XIAOとGroveシリーズセンサーを使用してプラットフォームにデータをアップロードし、これらのセンサー値に基づいてAIから建設的な提案を得る方法を詳しく説明します。

## はじめに

### ハードウェアの準備

このチュートリアルで使用する3つのハードウェアは、XIAO ESP32C3、Grove Base for XIAO、およびGrove SHT40温湿度センサーです。配線の便宜上、XIAO拡張ボードを使用しますが、実際のニーズに応じて購入してください。

<table align="center">
  <tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Grove Base for XIAO</th>
          <th>Grove - Temperature & Humidity Sensor(SHT40)</th>
  </tr>
      <tr>
          <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:230, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/SHT40.jpg" style={{width:200, height:'auto'}}/></div></td>
      </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
    </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

### ソフトウェア準備

XIAO ESP32C3を初めて使用する場合は、まずこのWikiを読んでArduinoで良好な開発環境を設定する方法を学ぶ必要があります。

- [Seeed Studio XIAO ESP32C3入門](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#software-setup)

また、このチュートリアルは[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)とも互換性があり、XIAO ESP32S3を使用してこのチュートリアルの内容を完了することもできます。

- [Seeed Studio XIAO ESP32S3入門](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/#software-preparation)

SHT40センサーを使用するため、プログラムがスムーズに実行されるように、Arduinoに以下の2つのライブラリを追加する必要があります。

- [arduino-i2c-sht4x](https://github.com/Sensirion/arduino-i2c-sht4x)

- [Sensirion Arduino Core Library](https://github.com/Sensirion/arduino-core)

## XIAO ESP32C3で温度と湿度データを取得する

下図に示すように、Grove SHT40温度湿度センサーをXIAOのIICインターフェースに接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/2.jpg" style={{width:700, height:'auto'}}/></div>

次に、XIAO ESP32C3用の以下のプログラムをアップロードして、SHT40センサーを駆動して動作させ、空気中の温度と湿度の値を取得し始めます。

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

SensirionI2CSht4x sht4x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Temperature:");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.println(humidity);
    }
}
```

Arduino IDEのシリアルモニターを開き、ボーレートを115200に設定して結果を確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/166.png" style={{width:700, height:'auto'}}/></div>

## SenseCraft Data Platform HTTPS API入門 -- センサーデータのアップロード

SHT40センサーからデータを取得する方法がわかったので、次に`SenseCraft Data Platform`の以下のAPI呼び出しルールを学習しましょう。下のボタンをクリックしてSenseCraftドキュメントセンターに直接ジャンプすることで、`SenseCraft Data Platform`のAPIの使用方法について読むことができます。

- [SenseCraftドキュメントセンター](https://sensecap-docs.seeed.cc/httpapi_quickstart.html)

SenseCraft Data Platformがセンサーデータを受信する基本原理は、EUI、Keyを認証情報として使用し、POSTによってデバイスデータを報告することです。

HTTPSサーバーアドレス：

```
https://sensecap.seeed.cc/deviceapi
```

### ヘッダーについて

POSTでは、ヘッダーに認証情報を追加する必要があります。これは、デバイスの**EUI**と**Key**をbase64で暗号化したデータで、以下の基本形式になります。

```
authorization = Device base64(EUI:Key)
```

### インターフェースについて

デバイスがセンサーデータを報告するために使用するサーバーパスは：`/kit/message_uplink`、モードは**POST**で、以下のリクエストパラメータが利用可能で許可されています。

<table align="center">
 <tr>
     <th>名前</th>
        <th>タイプ</th>
        <th>説明</th>
 </tr>
 <tr>
     <td align="center">- requestId</td>
     <td align="center">string</td>
     <td align="center">データが報告されるたびにデバイス側で生成されるuuidv4で、各メッセージで値が異なることを保証します。</td>
 </tr>
 <tr>
     <td align="center">- timestamp</td>
     <td align="center">string</td>
     <td align="center">メッセージが送信された時のミリ秒タイムスタンプ。</td>
 </tr>
 <tr>
     <td align="center">- intent</td>
     <td align="center">string</td>
     <td align="center">現在は「event」に固定されています。</td>
 </tr>
 <tr>
     <td align="center">- deviceEui</td>
     <td align="center">string</td>
     <td align="center">デバイスEUI。</td>
 </tr>
 <tr>
     <td align="center">- deviceKey</td>
     <td align="center">string</td>
     <td align="center">デバイスキー。</td>
 </tr>
    <tr>
     <td align="center">- events</td>
     <td align="center">[object]</td>
     <td align="center">データ収集とデバイス状態が報告されるイベントの配列。</td>
 </tr>
    <tr>
     <td align="center">-- name</td>
     <td align="center">string</td>
     <td align="center">イベント名。</td>
 </tr>
    <tr>
     <td align="center">-- value</td>
     <td align="center">[object]</td>
     <td align="center">イベント値。</td>
 </tr>
    <tr>
     <td align="center">-- timestamp</td>
     <td align="center">string</td>
     <td align="center">データ収集時のミリ秒タイムスタンプ。</td>
 </tr>
</table>

以下は、センサーアップロードデータの送信例です。

```json
{
    "requestId": "aaaa-aaaa-aaaa-aaaa",
    "timestamp": "1691026791405",
    "intent": "event",
    "deviceEui": "2CF7xxxxxxx00002",
    "deviceKey": "38xxxxxxxxxxxxxxxxxxxxC0EE76C3CD",
    "events": [
        {
            "name": "measure-sensor",
            "value": [
                {
                    "channel": "1",
                    "measurements": {
                        "4097": "31.38",
                        "4098": "59.60"
                    },
                    "measureTime": "1691026791405"
                }
            ]
        },
        {
            "name": "update-channel-info",
            "value": [
                {
                    "channel": "1",
                    "sensorType": "1001",
                    "status": "normal"
                }
            ],
            "timestamp": "1691026791405"
        }
    ]
}
```

## SenseCraft Data Platform に温湿度データをアップロードする

上記のルールを理解したら、SHT40の温湿度データをSenseCraft Data PlatformにアップロードするためのHTTPSプログラムの作成を開始できます。

### ステップ1. SenseCraft Data Platformに登録してログインする

以下のリンクをクリックして、SenseCraft Data Platform国際サイトに直接アクセスできます。SenseCraftのサービスを初めて使用する場合は、アカウントを登録する必要があります。

- [SenseCraft Data Platform Website](https://sensecap.seeed.cc)

SenseCraft Data Platformにログインすると、コンソール画面が表示されます。独自のキットを追加する必要があるので、左側のメニューバーの**DevelopKit**をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/3.png" style={{width:1000, height:'auto'}}/></div>

次に、左上の**Create DevelopKit**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/4.png" style={{width:1000, height:'auto'}}/></div>

**MIG Develop Kit**を選択し、**Confirm**ボタンをクリックするだけです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/5.png" style={{width:500, height:'auto'}}/></div>

次に、ダッシュボードで作成したデバイスを確認できます。通常は最初のものです。そのデバイスの「Connect」ボタンをクリックすると、そのデバイスの**EUI**と**KEY**情報が表示されます。これらを保存してください。次のステップで使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/6.png" style={{width:1000, height:'auto'}}/></div>

### ステップ2. 認証情報の取得

SenseCraftの認証情報用インターフェースには、Base64ベースの**EUI:KEY**暗号化が必要です。

例えば、あなたのEUIが`2CF7F11003900000`でKeyが`06C42483D7155E7006C42483D7155E70`の場合、ターミナルで以下のコマンドによってBase64暗号化された認証情報を取得できます。

```
echo -n 2CF7F11003900000:06C42483D7155E7006C42483D7155E70 |base64

>>> MkNGN0YxMTAwMzkwMDAwMDowNkM0MjQ4M0Q3MTU1RTcwMDZDNDI0ODNENzE1NUU3MA==
```

認証情報を保持してください。後でプログラムで**apiKey**として使用します。

### ステップ3. センサータイプの番号を取得する

アップロードには、報告するセンサータイプの番号とセンサー名が含まれています。これにより、SenseCraftはどのセンサーからデータをアップロードしているか、データがどの単位であるかを知ることができます。

このセクションについては、SenseCraft Documentation Centerで提供されているセンサーと値の番号付きクロスリファレンステーブルを参照してください。

- [測定IDリスト](https://sensecap-docs.seeed.cc/measurement_list.html)

- [センサータイプリスト](https://sensecap-docs.seeed.cc/sensor_types_list.html)

これら2つの文書の使用方法について、この記事で使用されているSHT40センサーを例として、説明を行います。SHT40センサーは温度と湿度の両方のデータを測定できるセンサーです。そのため、センサータイプのコードと（温度、湿度）値の2つのコードがあります。

センサータイプのコードは[センサータイプリスト](https://sensecap-docs.seeed.cc/sensor_types_list.html)で調べる必要があります。コード**1001**の温度・湿度センサーを見つけました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/7.png" style={{width:700, height:'auto'}}/></div>

私たちが話しているセンサー値のコードは、実際には図の測定ID、**4097**と**4098**です。これらは[測定IDリスト](https://sensecap-docs.seeed.cc/measurement_list.html)でも見つけることができ、これらの値の単位がお使いのセンサーと一致するかどうかを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/8.png" style={{width:700, height:'auto'}}/></div>

:::note
テーブルで適切なセンサータイプが見つからない場合は、センサー番号**4165**から**4174**のカスタムタイプを使用する必要があるかもしれません。センサー値は単位なしの場合があります。
:::

### ステップ4. 必要なライブラリをインストールする

まず**NTPClient**ライブラリです。これはXIAOネットワーキングを使用して現在のタイムスタンプを取得できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/9.png" style={{width:1000, height:'auto'}}/></div>

次に**ArduinoJson**ライブラリです。これはSenseCraftから返されるデータの解析を簡単にしてくれます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/10.png" style={{width:1000, height:'auto'}}/></div>

### ステップ5. プログラムを通じてセンサーデータをアップロードする

以下はSHT40データをアップロードするプロシージャです。以下のマクロ定義は、お客様の状況に合わせて修正した場合にのみ使用してください。

```cpp
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* apiKey = "YOUR-DEVICE-EUI&KEY-BASE64";
const char* deviceEUI = "YOUR-DEVICE-EUI";
const char* deviceKey = "YOUR-DEVICE-KEY";
const char* dataNum_1 = "4097";  // Air temperature
const char* dataNum_2 = "4098";  // Air humidity
const char* sensorType = "1001"; // Air temperature and humidity sensors
```

ssidとpasswordはあなたのネットワーク名とパスワードを指します。apiKeyは**ステップ2**で取得したフォレンジック情報を指します。deviceEUIとdeviceKeyはあなたのデバイスEUIとキーで、これらも**ステップ2**で取得したものです。

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>
#include "WiFi.h"
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <WiFiUdp.h>
#include <NTPClient.h>

// Replace with your devive content
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* apiKey = "YOUR-DEVICE-EUI&KEY-BASE64";
const char* deviceEUI = "YOUR-DEVICE-EUI";
const char* deviceKey = "YOUR-DEVICE-KEY";
const char* dataNum_1 = "4097";  // Air temperature
const char* dataNum_2 = "4098";  // Air humidity
const char* sensorType = "1001"; // Air temperature and humidity sensors

const char* ntpServer = "pool.ntp.org";

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, ntpServer);

char sensecapServer[] = "https://sensecap.seeed.cc/deviceapi/kit/message_uplink";

SensirionI2CSht4x sht4x;

void wifiConnect(){
  WiFi.begin(ssid, password);
  Serial.print("Connecting to ");
  Serial.println(ssid);
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("WiFi connected!");
  Serial.println(WiFi.localIP());
}

void setup() {
    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }

    wifiConnect();

    timeClient.begin();  // Initialize the NTP client
    timeClient.update(); // update timestamp
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Temperature:");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.println(humidity);
    }

    HTTPClient https;
    if (https.begin(sensecapServer)) {  // HTTPS
      https.addHeader("Content-Type", "application/json"); 
      String author = String("Device ") + apiKey;
      https.addHeader("authorization", author);
      String payload = String("{\"requestId\": \"aaaa-aaaa-aaaa-aaaa\", \"timestamp\": \"");
      timeClient.update(); // update timestamp
      uint64_t timestamp = timeClient.getEpochTime() * 1000ULL; // GET timestamp
      payload += String(timestamp);
      payload += String("\", \"intent\": \"event\", \"deviceEui\": \"");
      payload += deviceEUI;
      payload += String("\", \"deviceKey\": \"");
      payload += deviceKey;
      payload += String("\", \"events\": [{\"name\": \"measure-sensor\", \"value\": [{\"channel\": \"1\", \"measurements\": {\"");
      payload += dataNum_1;
      payload += String("\": \"");
      payload += String(temperature);
      payload += String("\", \"");
      payload += dataNum_2;
      payload += String("\": \"");
      payload += String(humidity);
      payload += String("\"}, \"measureTime\": \"");
      payload += String(timestamp);
      payload += String("\"}]}, {\"name\": \"update-channel-info\", \"value\": [{\"channel\": \"1\", \"sensorType\": \"");
      payload += sensorType;
      payload += String("\", \"status\": \"normal\"}], \"timestamp\": \"");
      payload += String(timestamp);
      payload += String("\"}]}");
      Serial.println(payload);
      int httpCode = https.POST(payload);   // start connection and send HTTP header
      if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
        String payload = https.getString();
        Serial.println(payload);
      }
      else{
        Serial.print("[HTTP] ERROR: ");
        Serial.println(httpCode);
      }
    }
    else{
      Serial.println("[HTTPS] Unable to connect");
      delay(1000);
    }
    delay(300000);
}
```

シリアルモニターをオンにすると、プログラムの実行が開始されます。図に示されているような応答を受信した場合、SenseCraftがあなたのデータアップロードの1つを正常に受信したことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/11.png" style={{width:1000, height:'auto'}}/></div>

:::tip
SenseCraftがデータアップロードを受信する最小時間間隔は5分です。
:::

## `SenseCraft Data Platform`のHTTP API紹介 -- AIアドバイスの取得

次に、以下で`SenseCraft Data Platform`のAPIの使用方法を学びましょう。時間の経過に伴うセンサーデータを参考として使用し、AIから提案を取得します。

SenseCraft AIのインターフェース呼び出しプロセスは大まかに以下の通りです。

- インターフェースIを介して、AIGCでの使用がサポートされているアカウント下のデバイスと測定値IDを取得します。
- インターフェースIで取得した結果をパラメータの1つとして使用し、インターフェースIIを呼び出してAIGC結果を取得します。
  - AIGC生成時間が長い場合があるため、インターフェースIは初回呼び出し時に**resource_id**を返し、その後フロントエンドは**resource_id**を使用して応答結果をポーリングします。応答のコードが**11338**の場合、AIGCがまだ推論処理中であることを意味し、最終結果が返されるまで**resource_id**を使用してインターフェースIIを再度呼び出す必要があります。
  - インターフェースIIには、同一アカウントに対して5分以内に最大10回のリクエストというフロー制限があります。

HTTPSサーバーアドレス：

```
https://sensecap.seeed.cc/openapi
```

### Interface I について

デバイスがセンサーデータを報告するために使用するサーバーパスは：`/ai/view_suggestion_by_measurements`、モードは**POST**で、以下のリクエストパラメータが利用可能で許可されています。

<table align="center">
 <tr>
     <th>名前</th>
        <th>説明</th>
        <th>備考</th>
 </tr>
 <tr>
     <td align="center">- lang</td>
     <td align="center">言語選択</td>
     <td align="center">1:中国語、2:英語。デフォルトは中国語。</td>
 </tr>
 <tr>
     <td align="center">- location</td>
     <td align="center">場所</td>
     <td align="center">場所、例："深圳"。</td>
 </tr>
 <tr>
     <td align="center">- crop</td>
     <td align="center">作物または動物</td>
     <td align="center">相談する作物または動物、例："りんご"。</td>
 </tr>
 <tr>
     <td align="center">- time_range</td>
     <td align="center">デバイスデータ照会時間</td>
     <td align="center">1: 30日 2: 180日 3: 360日。デフォルトは30日</td>
 </tr>
 <tr>
     <td align="center">- measurements</td>
     <td align="center">デバイス測定タイプ</td>
     <td align="center">最大6つ</td>
 </tr>
    <tr>
     <td align="center">-- dev_eui</td>
     <td align="center">デバイスEUI</td>
     <td align="center"></td>
 </tr>
    <tr>
     <td align="center">-- channel_measurement</td>
     <td align="center"></td>
     <td align="center"></td>
 </tr>
    <tr>
     <td align="center">--- channel_index</td>
     <td align="center">チャンネル番号</td>
     <td align="center">この値は現在1に固定されています。</td>
 </tr>
    <tr>
     <td align="center">--- measurement_ids</td>
     <td align="center">測定値番号</td>
     <td align="center"></td>
 </tr>
</table>

以下はInterface Iを呼び出す例です。

```json
{
  "lang": "2",
  "crop": "apple",
  "location": "Shenzhen",
  "time_range": "1",
  "measurements": [
  {
      "dev_eui": "2CF7F18215100010",
      "channel_measurement": [
        {
          "channel_index": "1",
          "measurement_ids": [
            "4097",
            "4098"
          ]
        }
      ]
    },
    {
      "dev_eui": "2CF7F1C043400103",
      "channel_measurement": [
        {
          "channel_index": "1",
          "measurement_ids": [
            "4097"
          ]
        }
      ]
    }
  ]
}
```

### Interface II について

Interface I の構造とフレームワークは Interface II とほぼ同じですが、唯一の違いは末尾に追加の **resource_id** があることです。以下のリクエストパラメータが利用可能で許可されています。

<table align="center">
 <tr>
     <th>Name</th>
        <th>Description</th>
        <th>Note</th>
 </tr>
 <tr>
     <td align="center">- lang</td>
     <td align="center">言語選択</td>
     <td align="center">1:中国語、2:英語。デフォルトは中国語。</td>
 </tr>
 <tr>
     <td align="center">- location</td>
     <td align="center">場所</td>
     <td align="center">場所、例："深圳"。</td>
 </tr>
 <tr>
     <td align="center">- crop</td>
     <td align="center">作物または動物</td>
     <td align="center">相談する作物または動物、例："りんご"。</td>
 </tr>
 <tr>
     <td align="center">- time_range</td>
     <td align="center">デバイスデータ照会時間</td>
     <td align="center">1: 30日 2: 180日 3: 360日。デフォルトは30日</td>
 </tr>
 <tr>
     <td align="center">- measurements</td>
     <td align="center">デバイス測定タイプ</td>
     <td align="center">最大6つまで</td>
 </tr>
  <tr>
     <td align="center">-- dev_eui</td>
     <td align="center">デバイス EUI</td>
     <td align="center"></td>
 </tr>
  <tr>
     <td align="center">-- channel_measurement</td>
     <td align="center"></td>
     <td align="center"></td>
 </tr>
  <tr>
     <td align="center">--- channel_index</td>
     <td align="center">チャンネル番号</td>
     <td align="center">この値は現在1に固定されています。</td>
 </tr>
  <tr>
     <td align="center">--- measurement_ids</td>
     <td align="center">測定値番号</td>
     <td align="center"></td>
 </tr>
  <tr>
     <td align="center">- resource_id</td>
     <td align="center">キャッシュされた認証情報</td>
     <td align="center">質問が行われ、返された結果が取得された場合、このパラメータを持参してバックエンドをポーリングし、AIの結果が返されるまで待機します。</td>
 </tr>
</table>

以下は AI アドバイスを取得する例です。

```json
{
  "lang": "2",
  "crop": "apple",
  "location": "Shenzhen",
  "time_range": "1",
  "measurements": [
  {
      "dev_eui": "2CF7F18215100010",
      "channel_measurement": [
        {
          "channel_index": "1",
          "measurement_ids": [
            "4097",
            "4098"
          ]
        }
      ]
    },
    {
      "dev_eui": "2CF7F1C043400103",
      "channel_measurement": [
        {
          "channel_index": "1",
          "measurement_ids": [
            "4097"
          ]
        }
      ]
    }
  ],
  "resource_id": "openAi:ask:424326279298784:1691053698953"
}
```

## XIAO ESP32C3 SenseCraft AI アドバイザーを取得する

### ステップ 6. API アクセスの作成

SenseCraft の AIGC インターフェースを呼び出したい場合は、SenseCraft で API ID と API Access Key を準備する必要があります。ダッシュボードの左側メニューバーで **Access API keys** を選択します。次に、上部の **Create Access Key** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/12.png" style={{width:1000, height:'auto'}}/></div>

作成された **Access Key ID** と **Access API Key** をコピーします。これらを安全に保管してください。以下のステップで使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/13.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 7. プログラムの作成とアップロード

上記のインターフェースガイドラインに従って、SenseCraft が SHT40 からの温度と湿度データを使用して栽培の推奨事項を返すプログラムを作成できます。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include "WiFi.h"
#include <HTTPClient.h>
#include <base64.h>
#include <ArduinoJson.h>

//#define DEBUG 1

// Replace with your devive content
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* username = "YOUR-API-ID";
const char* accesskey = "YOUR-ACCESS-API-KEY";
const char* deviceEUI = "YOUR-DEVICE-EUI";

const char* crop = "apple";
const char* location = "Shenzhen";
const char* timerange = "1";
const char* dataNum_1 = "4097";  //Air temperature
const char* dataNum_2 = "4098";  //Air humidity

char sensecapAIServer[] = "https://sensecap.seeed.cc/openapi/ai/view_suggestion_by_measurements";

void wifiConnect(){
  WiFi.begin(ssid, password);
  Serial.print("Connecting to ");
  Serial.println(ssid);
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("WiFi connected!");
  Serial.println(WiFi.localIP());
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  while (!Serial) {
      delay(100);
  }
  wifiConnect();
}

String splicePayload(int mode, String resource_id = ""){
  String payload = String("{\"lang\": \"2\", \"crop\": \"");  // 1:Chinese 2:English
  payload += crop;
  payload += String("\", \"location\": \"");
  payload += location;
  payload += String("\", \"time_range\": \"");                    // 1:30 days, 2:180 days, 3:360 days
  payload += timerange;
  payload += String("\", \"measurements\": [{\"dev_eui\": \"");
  payload += deviceEUI;
  payload += String("\", \"channel_measurement\": [{\"channel_index\": \"1\", \"measurement_ids\": [\"");
  payload += dataNum_1;
  payload += String("\", \"");
  payload += dataNum_2;
  payload += String("\"]}]}");
  
  //If you need values for other sensors
//    payload += String(", {\"dev_eui\": \"");
//    payload += deviceEUI_2;
//    payload += String("\", \"channel_measurement\": [{\"channel_index\": \"1\", \"measurement_ids\": [\"");
//    payload += dataNum_3;
//    payload += String("\"]}]}");

  if(mode == 1){
    payload += String("]}");
  }
  else if(mode == 2){
    // If a query code has been obtained. mode = 2
    payload += String("], \"resource_id\": \"");
    payload += resource_id;
    payload += String("\"}");
  }
  
  Serial.println(payload);
  return payload;
}

void loop() {
  // put your main code here, to run repeatedly:
  HTTPClient https;
  if (https.begin(sensecapAIServer)) {  // HTTPS
    https.addHeader("Content-Type", "application/json");
    String base64Credentials = base64::encode("YOUR-API-ID:YOUR-ACCESS-API-KEY");
    https.addHeader("Authorization", "Basic " + base64Credentials);
    
    String payload = splicePayload(1);

    int httpCode = https.POST(payload);   // start connection and send HTTP header
    if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
      String response = https.getString();
#ifdef DEBUG
      Serial.println(response);
#endif
      
      // get resource_id
      DynamicJsonDocument doc(1024);
      deserializeJson(doc, response);
      String resource_id = doc["data"]["resource_id"].as<String>();
      Serial.println("resource_id: " + resource_id);

      String payload = splicePayload(2, resource_id);

      do{
        delay(2000);
        https.addHeader("Content-Type", "application/json");
        String base64Credentials = base64::encode("YOUR-API-ID:YOUR-ACCESS-API-KEY");
        https.addHeader("Authorization", "Basic " + base64Credentials);
        
        int httpCode = https.POST(payload);   // start connection and send HTTP header
        if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
          String response = https.getString();
#ifdef DEBUG
          Serial.println(response);
#endif
          
          // Parsing JSON Responses
          DynamicJsonDocument doc(1024);
          deserializeJson(doc, response);
          String code = doc["code"].as<String>();
          Serial.println("status: " + code);
          if(code == "0"){
            DynamicJsonDocument doc(1024);
            deserializeJson(doc, response);
            String suggest = doc["data"].as<String>();
            Serial.println("SenseCraft AI gives the following planting advice: ");
            Serial.println(suggest);
            break;
          }
          else if(code == "11396"){
            Serial.println("Timeout. Please wait five minutes.");
            break;
          }
          else Serial.println("Waiting for a reply...");
        }
      }while(1);
    }
    else{
      Serial.print("[HTTP] ERROR: ");
      Serial.println(httpCode);
    }
  }
  else{
    Serial.println("[HTTPS] Unable to connect");
    delay(1000);
  }
  Serial.println("The next query will be in five minutes, so please do not query too often to avoid having your account restricted from use!");
  delay(300000);
}
```

ここで、注意すべきいくつかのパラメータがあります。コードの冒頭で、マクロ定義 `DEBUG` がコメントアウトされています。この行のコメントを外すと、プログラムを実行してSenseCraftが毎回返すメッセージを印刷することができます。

`DEBUG` の下には、あなたのアカウントとデバイスに応じて変更する必要がある情報があります。例えば、リンゴを栽培しておらず、場所が深圳でない場合は、あなたの状況に合わせて変更する必要があります。

```cpp
// Replace with your devive content
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* deviceEUI = "YOUR-DEVICE-EUI";

const char* crop = "apple";
const char* location = "Shenzhen";
const char* timerange = "1";
const char* dataNum_1 = "4097";  //Air temperature
const char* dataNum_2 = "4098";  //Air humidity
```

これに加えて、Access APIを解析するコードが2行あります。

```cpp
String base64Credentials = base64::encode("YOUR-API-ID:YOUR-ACCESS-API-KEY");
```

例えば、**ステップ6**で取得したAPI IDとAPI Keyがそれぞれ`N0AV094KBPH1J9PX`と`5DFA8167D23C499C86F61BDEFB901D4995B896A267054D7DAD590BF67FB9A219`である場合、このコード行を次のように変更する必要があります：

```cpp
String base64Credentials = base64::encode("N0AV094KBPH1J9PX:5DFA8167D23C499C86F61BDEFB901D4995B896A267054D7DAD590BF67FB9A219");
```

このプログラムをアップロードすると、アップロードメッセージが表示され、AIから返される回答の結果を結果が返されるまでループし続けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/14.png" style={{width:700, height:'auto'}}/></div>

この時点で、おめでとうございます！XIAOをSenseCraftに接続するすべての知識と内容をマスターしました。私たちのXIAOとSenseCraftを使用して、より多くの創造性を発揮していただくことを心から歓迎いたします！

## トラブルシューティング

### Q1: AI回答を取得した後、なぜnullの結果が返されるのですか？

これはインターフェースのタイムアウトが原因である可能性があります。次のクエリが送信されるまで待ってから結果を確認してください。この結果は一度だけ取得でき、その後結果は即座に消去され、再度クエリすることはできませんのでご注意ください。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
