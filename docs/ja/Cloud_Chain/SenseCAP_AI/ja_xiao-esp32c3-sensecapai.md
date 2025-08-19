---
description: XIAO ESP32C3 を使用して SenseCAP AI に接続し、植栽アドバイスを取得する方法
title: XIAO ESP32C3 を使用して SenseCAP AI に接続し、植栽アドバイスを取得する方法
keywords:
- xiao
- sensecap ai
- AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32c3_sensecapai
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32C3 を使用して SenseCAP AI に接続し、植栽アドバイスを取得する方法

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/1.png" style={{width:1000, height:'auto'}}/></div>

このたび、Seeed Studio の SenseCAP プラットフォームは新しい AI 機能を開発し、リリースしました。現在、SenseCAP AI の主な機能は、栽培者に建設的な植栽アドバイスを提供することに焦点を当てており、近い将来にはさらに豊富な AI 機能が追加される予定です！

このチュートリアルでは、XIAO ESP32 シリーズを SenseCAP プラットフォームと接続し、XIAO と Grove シリーズセンサーを使用してデータを SenseCAP にアップロードし、これらのセンサー値に基づいて AI から建設的な提案を得る方法を詳しく説明します。

## はじめに

### ハードウェアの準備

このチュートリアルで使用する 3 つのハードウェアは、XIAO ESP32C3、Grove Base for XIAO、および Grove SHT40 温湿度センサーです。配線の利便性のために、XIAO 拡張ボードを使用します。実際のニーズに応じて購入してください。

<table align="center">
  <tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Grove Base for XIAO</th>
    <th>Grove - 温湿度センサー (SHT40)</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:230, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/SHT40.jpg" style={{width:200, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

### ソフトウェアの準備

もしこれが初めて XIAO ESP32C3 を使用する場合は、Arduino で適切な開発環境を構築する方法を学ぶために、まずこの Wiki を読む必要があります。

- [Seeed Studio XIAO ESP32C3 の使い方](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#software-setup)

また、このチュートリアルは [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) とも互換性があります。このチュートリアルの内容を XIAO ESP32S3 を使用しても完了できます。

- [Seeed Studio XIAO ESP32S3 の使い方](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/#software-preparation)

SHT40 センサーを使用するため、Arduino で以下の 2 つのライブラリを追加して、プログラムがスムーズに動作するようにする必要があります。

- [arduino-i2c-sht4x](https://github.com/Sensirion/arduino-i2c-sht4x)

- [Sensirion Arduino Core Library](https://github.com/Sensirion/arduino-core)

## XIAO ESP32C3 温湿度データの取得

以下の図に示すように、Grove SHT40 温湿度センサーを XIAO の IIC インターフェースに接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/2.jpg" style={{width:700, height:'auto'}}/></div>

次に、以下のプログラムを XIAO ESP32C3 にアップロードして、SHT40 センサーを動作させ、空気中の温度と湿度の値を取得します。

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

Arduino IDE のシリアルモニターを開き、ボーレートを 115200 に設定して結果を観察してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/166.png" style={{width:700, height:'auto'}}/></div>

## SenseCAP HTTPS API の紹介 -- センサーデータのアップロード

SHT40 センサーからデータを取得する方法を理解したので、次に SenseCAP プラットフォームの API 呼び出しルールを学びましょう。以下のボタンをクリックして SenseCAP ドキュメントセンターに直接移動し、SenseCAP API の使用方法を確認できます。

- [SenseCAP ドキュメントセンター](https://sensecap-docs.seeed.cc/httpapi_quickstart.html)

SenseCAP がセンサーデータを受信する基本原則は、EUI と Key を認証情報として使用し、POST によってデバイスデータを報告することです。

HTTPS サーバーアドレス:

```
https://sensecap.seeed.cc/deviceapi
```

### ヘッダーについて

POST の際、ヘッダーに認証情報を追加する必要があります。これは、デバイスの **EUI** と **Key** を base64 で暗号化したデータで、以下の基本形式になります。

```
authorization = Device base64(EUI:Key)
```

### インターフェースについて

デバイスがセンサーデータを報告するために使用するサーバーパスは `/kit/message_uplink` で、モードは **POST** です。以下のリクエストパラメータが利用可能で許可されています。

<table align="center">
	<tr>
	    <th>名前</th>
        <th>型</th>
        <th>説明</th>
	</tr>
	<tr>
	    <td align="center">- requestId</td>
	    <td align="center">string</td>
	    <td align="center">データが報告されるたびにデバイス側で生成される uuidv4。各メッセージで異なる値であることを保証します。</td>
	</tr>
	<tr>
	    <td align="center">- timestamp</td>
	    <td align="center">string</td>
	    <td align="center">メッセージが送信された時点のミリ秒単位のタイムスタンプ。</td>
	</tr>
	<tr>
	    <td align="center">- intent</td>
	    <td align="center">string</td>
	    <td align="center">現在は "event" に固定されています。</td>
	</tr>
	<tr>
	    <td align="center">- deviceEui</td>
	    <td align="center">string</td>
	    <td align="center">デバイス EUI。</td>
	</tr>
	<tr>
	    <td align="center">- deviceKey</td>
	    <td align="center">string</td>
	    <td align="center">デバイス Key。</td>
	</tr>
    <tr>
	    <td align="center">- events</td>
	    <td align="center">[object]</td>
	    <td align="center">データ収集およびデバイスステータスが報告されるイベントの配列。</td>
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
	    <td align="center">データ収集時点のミリ秒単位のタイムスタンプ。</td>
	</tr>
</table>

以下はセンサーアップロードデータを送信する例です。

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

## 温湿度データを SenseCAP にアップロードする

上記のルールを理解したら、SHT40 の温湿度データを SenseCAP にアップロードするための HTTPS プログラムの作成を開始できます。

### ステップ 1. SenseCAP に登録してログインする

以下のリンクをクリックすると、SenseCAP の国際サイトに直接アクセスできます。初めて SenseCAP のサービスを利用する場合は、アカウント登録が必要です。

- [SenseCAP ウェブサイト](https://sensecap.seeed.cc)

SenseCAP にログインすると、コンソール画面に移動します。ここで、自分のキットを追加する必要があります。左側のメニューバーから **DevelopKit** をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/3.png" style={{width:1000, height:'auto'}}/></div>

次に、左上の **Create DevelopKit** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/4.png" style={{width:1000, height:'auto'}}/></div>

その後、**MIG Develop Kit** を選択し、**Confirm** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/5.png" style={{width:500, height:'auto'}}/></div>

次に、ダッシュボードで作成したデバイスが表示されます。通常は最初のデバイスです。そのデバイスの「Connect」ボタンをクリックすると、そのデバイスの **EUI** と **KEY** 情報が表示されます。これらを保存してください。次のステップで使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/6.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. 認証情報の取得

SenseCAP の認証情報インターフェースでは、Base64 ベースの **EUI:KEY** 暗号化が必要です。

例えば、EUI が `2CF7F11003900000`、Key が `06C42483D7155E7006C42483D7155E70` の場合、以下のコマンドをターミナルで実行して Base64 暗号化された認証情報を取得できます。

```
echo -n 2CF7F11003900000:06C42483D7155E7006C42483D7155E70 |base64

>>> MkNGN0YxMTAwMzkwMDAwMDowNkM0MjQ4M0Q3MTU1RTcwMDZDNDI0ODNENzE1NUU3MA==
```

認証情報を保存してください。この情報は後でプログラム内で **apiKey** として使用します。

### ステップ 3. センサータイプの番号を取得する

アップロードには、報告するセンサータイプとセンサー名の番号が含まれます。これにより、SenseCAP はどのセンサーからデータをアップロードしているのか、データの単位が何であるのかを認識できます。

このセクションでは、SenseCAP ドキュメントセンターで提供されているセンサーと値の番号付きクロスリファレンステーブルを参照してください。

- [測定 ID のリスト](https://sensecap-docs.seeed.cc/measurement_list.html)

- [センサータイプのリスト](https://sensecap-docs.seeed.cc/sensor_types_list.html)

これらのドキュメントの使用方法については、この記事で使用する SHT40 センサーを例に説明します。SHT40 センサーは温度と湿度のデータを測定できるセンサーです。そのため、センサータイプのコードと（温度、湿度）値の 2 つのコードがあります。

センサータイプのコードは [センサータイプのリスト](https://sensecap-docs.seeed.cc/sensor_types_list.html) で確認できます。温湿度センサーのコード **1001** を見つけました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/7.png" style={{width:700, height:'auto'}}/></div>

センサー値のコードは、実際には図中の測定 ID で、**4097** と **4098** です。[測定 ID のリスト](https://sensecap-docs.seeed.cc/measurement_list.html) でも確認でき、これらの値の単位がセンサーと一致しているか確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/8.png" style={{width:700, height:'auto'}}/></div>

:::note
表に自分に適したセンサータイプが見つからない場合は、センサー番号が **4165** から **4174** のカスタムタイプを使用する必要があるかもしれません。この場合、センサー値には単位がない可能性があります。
:::

### ステップ 4. 必要なライブラリをインストールする

最初に **NTPClient** ライブラリをインストールします。このライブラリは、XIAO のネットワークを使用して現在のタイムスタンプを取得できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/9.png" style={{width:1000, height:'auto'}}/></div>

次に **ArduinoJson** ライブラリをインストールします。このライブラリは、SenseCAP から返されるデータを解析するのに役立ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/10.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 5. プログラムを通じてセンサーデータをアップロードする

以下は SHT40 データをアップロードするためのプログラムです。以下のマクロ定義は、状況に応じて変更して使用してください。

```cpp
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* apiKey = "YOUR-DEVICE-EUI&KEY-BASE64";
const char* deviceEUI = "YOUR-DEVICE-EUI";
const char* deviceKey = "YOUR-DEVICE-KEY";
const char* dataNum_1 = "4097";  // 空気温度
const char* dataNum_2 = "4098";  // 空気湿度
const char* sensorType = "1001"; // 空気温湿度センサー
```

ここで、ssid と password はネットワーク名とパスワードを指します。apiKey は **ステップ 2** で取得した認証情報を指します。deviceEUI と deviceKey はデバイスの EUI と Key で、これも **ステップ 2** で取得しました。

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>
#include "WiFi.h"
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <WiFiUdp.h>
#include <NTPClient.h>

// デバイス情報を置き換えてください
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* apiKey = "YOUR-DEVICE-EUI&KEY-BASE64";
const char* deviceEUI = "YOUR-DEVICE-EUI";
const char* deviceKey = "YOUR-DEVICE-KEY";
const char* dataNum_1 = "4097";  // 空気温度
const char* dataNum_2 = "4098";  // 空気湿度
const char* sensorType = "1001"; // 空気温湿度センサー

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

    timeClient.begin();  // NTP クライアントを初期化
    timeClient.update(); // タイムスタンプを更新
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
      timeClient.update(); // タイムスタンプを更新
      uint64_t timestamp = timeClient.getEpochTime() * 1000ULL; // タイムスタンプを取得
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
      int httpCode = https.POST(payload);   // 接続を開始し、HTTP ヘッダーを送信
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

シリアルモニターをオンにすると、プログラムが実行を開始します。図のような応答を受信した場合、SenseCAPがデータアップロードの1つを正常に受信したことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/11.png" style={{width:1000, height:'auto'}}/></div>

:::tip
SenseCAPがデータアップロードを受信する最小時間間隔は5分です。
:::

## SenseCAP HTTPS API の紹介 -- AIアドバイスの取得

次に、以下のSenseCAP AI APIの使用方法を学びます。センサーのデータを時間の経過とともに参照し、AIからの提案を取得します。

SenseCAP AIのインターフェース呼び出しプロセスは以下の通りです。
- インターフェースIを通じて、AIGCで使用可能なアカウントのデバイスおよび測定値IDを取得します。
- インターフェースIで得られた結果をパラメータの1つとして使用し、インターフェースIIを呼び出してAIGCの結果を取得します。
  - AIGCの生成時間が長い場合があるため、インターフェースIを初めて呼び出すときに**resource_id**が返されます。その後、フロントエンドは**resource_id**を使用して応答の結果をポーリングします。応答のコードが**11338**の場合、AIGCが推論中であることを意味し、最終結果が返されるまで**resource_id**を使用してインターフェースIIを再度呼び出す必要があります。
  - インターフェースIIには、同じアカウントで5分以内に最大10回のリクエスト制限があります。

HTTPSサーバーアドレス：
```
https://sensecap.seeed.cc/openapi
```

### インターフェースIについて

デバイスがセンサーデータを報告するために使用するサーバーパスは：`/ai/view_suggestion_by_measurements`、モードは**POST**であり、以下のリクエストパラメータが利用可能で許可されています。

<table align="center">
	<tr>
	    <th>名前</th>
        <th>説明</th>
        <th>備考</th>
	</tr>
	<tr>
	    <td align="center">- lang</td>
	    <td align="center">言語を選択</td>
	    <td align="center">1:中国語、2:英語。デフォルトは中国語。</td>
	</tr>
	<tr>
	    <td align="center">- location</td>
	    <td align="center">場所</td>
	    <td align="center">例: "Shenzhen"。</td>
	</tr>
	<tr>
	    <td align="center">- crop</td>
	    <td align="center">作物または動物</td>
	    <td align="center">例: "apple"。</td>
	</tr>
	<tr>
	    <td align="center">- time_range</td>
	    <td align="center">デバイスデータの問い合わせ期間</td>
	    <td align="center">1: 30日 2: 180日 3: 360日。デフォルトは30日。</td>
	</tr>
	<tr>
	    <td align="center">- measurements</td>
	    <td align="center">デバイス測定タイプ</td>
	    <td align="center">最大6つまで。</td>
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

以下はインターフェースIを呼び出す例です。

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

### インターフェースIIについて

インターフェースIの構造とフレームワークはインターフェースIIとほぼ同じですが、最後に**resource_id**が追加される点が異なります。以下のリクエストパラメータが利用可能で許可されています。

<table align="center">
	<tr>
	    <th>名前</th>
        <th>説明</th>
        <th>備考</th>
	</tr>
	<tr>
	    <td align="center">- lang</td>
	    <td align="center">言語を選択</td>
	    <td align="center">1:中国語、2:英語。デフォルトは中国語。</td>
	</tr>
	<tr>
	    <td align="center">- location</td>
	    <td align="center">場所</td>
	    <td align="center">例: "Shenzhen"。</td>
	</tr>
	<tr>
	    <td align="center">- crop</td>
	    <td align="center">作物または動物</td>
	    <td align="center">例: "apple"。</td>
	</tr>
	<tr>
	    <td align="center">- time_range</td>
	    <td align="center">デバイスデータの問い合わせ期間</td>
	    <td align="center">1: 30日 2: 180日 3: 360日。デフォルトは30日。</td>
	</tr>
	<tr>
	    <td align="center">- measurements</td>
	    <td align="center">デバイス測定タイプ</td>
	    <td align="center">最大6つまで。</td>
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
  <tr>
	    <td align="center">- resource_id</td>
	    <td align="center">キャッシュされた資格情報</td>
	    <td align="center">質問が行われ、返された結果が取得された場合、このパラメータを持ってバックエンドをポーリングし、AIの結果が返されるまで待ちます。</td>
	</tr>
</table>

以下はAIアドバイスを取得する例です。

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

## XIAO ESP32C3でのSenseCAP AI回答取得

### ステップ6. APIアクセスの作成

SenseCAPのAIGCインターフェースを呼び出したい場合は、SenseCAPでAPI IDとAPIアクセスキーを準備する必要があります。ダッシュボードの左メニューバーから**Access API keys**を選択します。その後、上部の**Create Access Key**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/12.png" style={{width:1000, height:'auto'}}/></div>

作成された**Access Key ID**と**Access API Key**をコピーしてください。これらを安全に保管し、次のステップで使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/13.png" style={{width:1000, height:'auto'}}/></div>

### ステップ7. プログラムの作成とアップロード

上記のインターフェースガイドラインに従い、SHT40からの温度と湿度データを使用して、SenseCAPが植栽の推奨を返すプログラムを作成します。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include "WiFi.h"
#include <HTTPClient.h>
#include <base64.h>
#include <ArduinoJson.h>

//#define DEBUG 1

// デバイス情報を置き換えてください
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* username = "YOUR-API-ID";
const char* accesskey = "YOUR-ACCESS-API-KEY";
const char* deviceEUI = "YOUR-DEVICE-EUI";

const char* crop = "apple";
const char* location = "Shenzhen";
const char* timerange = "1";
const char* dataNum_1 = "4097";  // 空気温度
const char* dataNum_2 = "4098";  // 空気湿度

char sensecapAIServer[] = "https://sensecap.seeed.cc/openapi/ai/view_suggestion_by_measurements";

void wifiConnect(){
  WiFi.begin(ssid, password);
  Serial.print("接続中: ");
  Serial.println(ssid);
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("WiFi接続完了!");
  Serial.println(WiFi.localIP());
}

void setup() {
  // 初期設定コード
  Serial.begin(115200);
  while (!Serial) {
      delay(100);
  }
  wifiConnect();
}

String splicePayload(int mode, String resource_id = ""){
  String payload = String("{\"lang\": \"2\", \"crop\": \"");  // 1:中国語 2:英語
  payload += crop;
  payload += String("\", \"location\": \"");
  payload += location;
  payload += String("\", \"time_range\": \"");                    // 1:30日, 2:180日, 3:360日
  payload += timerange;
  payload += String("\", \"measurements\": [{\"dev_eui\": \"");
  payload += deviceEUI;
  payload += String("\", \"channel_measurement\": [{\"channel_index\": \"1\", \"measurement_ids\": [\"");
  payload += dataNum_1;
  payload += String("\", \"");
  payload += dataNum_2;
  payload += String("\"]}]}");
  
  // 他のセンサーの値が必要な場合
//    payload += String(", {\"dev_eui\": \"");
//    payload += deviceEUI_2;
//    payload += String("\", \"channel_measurement\": [{\"channel_index\": \"1\", \"measurement_ids\": [\"");
//    payload += dataNum_3;
//    payload += String("\"]}]}");

  if(mode == 1){
    payload += String("]}");
  }
  else if(mode == 2){
    // クエリーコードを取得済みの場合。mode = 2
    payload += String("], \"resource_id\": \"");
    payload += resource_id;
    payload += String("\"}");
  }
  
  Serial.println(payload);
  return payload;
}

void loop() {
  // 繰り返し実行されるメインコード
  HTTPClient https;
  if (https.begin(sensecapAIServer)) {  // HTTPS
    https.addHeader("Content-Type", "application/json");
    String base64Credentials = base64::encode("YOUR-API-ID:YOUR-ACCESS-API-KEY");
    https.addHeader("Authorization", "Basic " + base64Credentials);
    
    String payload = splicePayload(1);

    int httpCode = https.POST(payload);   // 接続開始とHTTPヘッダー送信
    if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
      String response = https.getString();
#ifdef DEBUG
      Serial.println(response);
#endif
      
      // resource_idを取得
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
        
        int httpCode = https.POST(payload);   // 接続開始とHTTPヘッダー送信
        if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
          String response = https.getString();
#ifdef DEBUG
          Serial.println(response);
#endif
          
          // JSONレスポンスの解析
          DynamicJsonDocument doc(1024);
          deserializeJson(doc, response);
          String code = doc["code"].as<String>();
          Serial.println("ステータス: " + code);
          if(code == "0"){
            DynamicJsonDocument doc(1024);
            deserializeJson(doc, response);
            String suggest = doc["data"].as<String>();
            Serial.println("SenseCAP AIから以下の植栽アドバイスが提供されました: ");
            Serial.println(suggest);
            break;
          }
          else if(code == "11396"){
            Serial.println("タイムアウトです。5分間お待ちください。");
            break;
          }
          else Serial.println("返信を待っています...");
        }
      }while(1);
    }
    else{
      Serial.print("[HTTP] エラー: ");
      Serial.println(httpCode);
    }
  }
  else{
    Serial.println("[HTTPS] 接続できません");
    delay(1000);
  }
  Serial.println("次のクエリは5分後に行われます。アカウント制限を避けるため、頻繁なクエリは控えてください!");
  delay(300000);
}
```

ここで、いくつかのパラメータに注意してください。コードの冒頭で、マクロ定義`DEBUG`がコメントアウトされています。この行をコメント解除すると、SenseCAPが返すメッセージを毎回出力するようにプログラムを実行できます。

以下の`DEBUG`は、アカウントやデバイスに応じて変更する必要がある情報です。例えば、リンゴを栽培しておらず、場所が深圳でない場合は、状況に合わせて変更してください。

```cpp
// デバイスの内容を置き換えてください
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* deviceEUI = "YOUR-DEVICE-EUI";

const char* crop = "apple";
const char* location = "Shenzhen";
const char* timerange = "1";
const char* dataNum_1 = "4097";  // 気温
const char* dataNum_2 = "4098";  // 湿度
```

これに加えて、コード内にはAccess APIを解析する2行があります。

```cpp
String base64Credentials = base64::encode("YOUR-API-ID:YOUR-ACCESS-API-KEY");
```

例えば、**ステップ6**で取得したAPI IDとAPI Keyが`N0AV094KBPH1J9PX`と`5DFA8167D23C499C86F61BDEFB901D4995B896A267054D7DAD590BF67FB9A219`の場合、このコード行を以下のように変更する必要があります。

```cpp
String base64Credentials = base64::encode("N0AV094KBPH1J9PX:5DFA8167D23C499C86F61BDEFB901D4995B896A267054D7DAD590BF67FB9A219");
```

このプログラムをアップロードすると、メッセージがアップロードされ、AIから返される回答の結果をループし続け、結果が返されるまで確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/14.png" style={{width:700, height:'auto'}}/></div>

この時点で、XIAOを使用してSenseCAPにアクセスするためのすべての知識と内容を習得したことになります。XIAOとSenseCAPを使用して、さらに多くの創造性を発揮することを心より歓迎します！

## トラブルシューティング

### Q1: AIの回答を取得した後に結果がnullになるのはなぜですか？

これはインターフェースのタイムアウトが原因である可能性があります。次のクエリが送信されるまで待ってから結果を確認してください。この結果は一度しか取得できず、その後すぐに消去され、再度クエリを行うことはできません。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>