---
description: Ubidotsを使用した開発
title: Ubidotsの使用方法
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Getting_started_with_Ubidots
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Ubidotsを使用した開発

**Ubidots**は、システムインテグレーター、IoT起業家、OEMが、Ubidotsのデータ収集、分析、可視化ツールを使用して、IoT（モノのインターネット）アプリケーションや接続サービスを簡単に構築できるプラットフォームです。このキットの計画において、LoRaWAN®を使用しない代替手段としてUbidotsプラットフォームを選択しました。Wio Terminalに搭載されているWiFi機能を使用して、必要なセンサーデータをMQTTプロトコルを介してUbidotsダッシュボードに表示することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/1.png" /></div>

この章では、Arduinoプログラミングを使用してセンサーからUbidotsにデータを送信する方法を説明します。

## 事前準備

### 接続

SeseCAP - K1100キット内のセンサーはすべて、Groveケーブルを介してWio TerminalのGroveコネクタに接続できます。以下の表は、各センサーが接続されるGroveコネクタの位置を示しています。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_ubidots/2.png" /></div>

<table align="center">
  <tbody><tr>
      <th align="center">センサータイプ</th>
      <th align="center">通信プロトコル</th>
      <th align="center">接続されるGroveインターフェース</th>
    </tr>
    <tr>
      <td align="center">Grove Temp&amp;Humi Sensor (SHT40)</td>
      <td align="center">I2C</td>
      <td align="center">Wio Terminal <strong>左側</strong>のGroveインターフェース</td>
    </tr>
    <tr>
      <td align="center">Grove VOC and eCO2 Gas Sensor (SGP30)</td>
      <td align="center">I2C</td>
      <td align="center">Wio Terminal <strong>左側</strong>のGroveインターフェース</td>
    </tr>
    <tr>
      <td align="center">Grove Vision AI Module</td>
      <td align="center">I2C</td>
      <td align="center">Wio Terminal <strong>左側</strong>のGroveインターフェース</td>
    </tr>
    <tr>
      <td align="center">Grove Soil Moisture Sensor</td>
      <td align="center">ADC</td>
      <td align="center">Wio Terminal <strong>右側</strong>のGroveインターフェース</td>
    </tr>
  </tbody></table>

### ソフトウェア準備

**ステップ1.** Arduinoソフトウェアをインストールします。

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**ステップ2.** Arduinoアプリケーションを起動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**ステップ3.** Arduino IDEにWio Terminalを追加します。

Arduino IDEを開き、`File > Preferences`をクリックし、以下のURLを「Additional Boards Manager URLs」にコピーします：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

`Tools > Board > Board Manager`をクリックし、Boards Managerで**Wio Terminal**を検索します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**ステップ4.** ボードとポートを選択します。

`Tools > Board`メニューで、使用するArduinoに対応するエントリを選択します。**Wio Terminal**を選択してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

`Tools -> Port`メニューからWio Terminalボードのシリアルデバイスを選択します。通常、COM3以上（COM1およびCOM2は通常ハードウェアシリアルポート用に予約されています）になります。確認するには、Wio Terminalボードを切断してメニューを再度開き、消えるエントリがArduinoボードであるはずです。ボードを再接続してそのシリアルポートを選択します。

:::tip
Macユーザーの場合、`/dev/cu.usbmodem141401`のような名前になります。
:::
スケッチをアップロードできない場合、主にArduino IDEがWio Terminalをブートローダーモードにできなかったことが原因です（MCUが停止しているか、プログラムがUSBを処理している場合）。回避策として、Wio Terminalを手動でブートローダーモードにする必要があります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**ステップ5.** 使用するセンサーに必要なライブラリをインストールします。

<table align="center">
  <tbody><tr>
      <th align="center">センサータイプ</th>
      <th align="center">リンク1</th>
      <th align="center">リンク2</th>
    </tr>
    <tr>
      <td align="center">Wio Terminal IMUセンサー</td>
      <td align="center"><a href="https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master" target="_blank">ダウンロード</a></td>
      <td align="center">-</td>
    </tr>
    <tr>
      <td align="center">Grove Temp&amp;Humi Sensor (SHT40)</td>
      <td align="center"><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank">ダウンロード</a></td>
      <td align="center"><a href="https://github.com/Sensirion/arduino-core" target="_blank">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">Grove VOC and eCO2 Gas Sensor (SGP30)</td>
      <td align="center"><a href="https://github.com/Seeed-Studio/SGP30_Gas_Sensor" target="_blank">ダウンロード</a></td>
      <td align="center">-</td>
    </tr>
    <tr>
      <td align="center">Grove Vision AI Module</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle" target="_blank">ダウンロード</a></td>
      <td align="center">-</td>
    </tr>
  </tbody></table>

:::note
 上記の表に記載されていないセンサーは、別途ライブラリをダウンロードする必要がないことを示しています。
:::
**ステップ6.** Wi-Fiに必要なライブラリを準備します。

Wi-Fi を Wio Terminal で使用するために、以下のライブラリが必要です。Arduino Library Manager の検索ボックスにライブラリ名を入力して検索してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/20.png" /></div>

- [**Seeed_Arduino_rpcWiFi**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFi) - `seeed rpcwifi` を検索

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/21.png" /></div>

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - `seeed rpcunified` を検索

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/23.png" /></div>

- [**Seeed_Arduino_mbedtls**](https://github.com/Seeed-Studio/Seeed_Arduino_mbedtls) - `seeed mbedtls` を検索

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/24.png" /></div>

- [**Seeed_Arduino_FS**](https://github.com/Seeed-Studio/Seeed_Arduino_FS) - `seeed fs` を検索

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/25.png" /></div>

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) - `seeed sfud` を検索

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/26.png" /></div>

- [**PubSubClinet**](https://github.com/knolleary/pubsubclient) - `PubSubClient` を検索

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/22.png" /></div>

## 操作手順

**ステップ 1.** Ubidots に登録してログイン

初めて Ubidots を使用する場合は、[Ubidots のウェブサイト](https://ubidots.com/) にアクセスして、自分のアカウントを登録してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/3.png" /></div>

登録が完了したら、登録したアカウントで Ubidots にログインしてください。

**ステップ 2.** あなたのユニークな **Ubidots TOKEN** を取得

Ubidots へのすべてのリクエストには TOKEN が必要です。TOKEN を取得する最も簡単な方法は、ユーザーのドロップダウンから「API Credentials」をクリックすることです。

ユーザーのドロップダウンに移動し、API Credentials をクリックしてください：

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/k1100_ubidots/4.png" /></div>

**Tokens**: API リクエストで使用する一時的かつ取り消し可能なキーです。この TOKEN を保存してください。後で使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/5.png" /></div>

:::note
すべての API 呼び出しは **TOKEN** のみを受け付けます。API Key を使用しようとしても機能しません！また、ユーザーのドロップダウン内の My Profile 設定の Ubidots API Keys セクションにアクセスして、特定の Ubidots アカウントに関連する API TOKENS のリストを確認することもできます。**My Profile** → **API Credentials** を選択してください。
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/6.png" /></div>

**ステップ 3.** 必要な情報を準備する

MQTT 接続を確立するために、以下の情報を事前に準備する必要があります。

- **WiFi SSID**
  - Wio Terminal が接続できる WiFi SSID を入力してください。Wio Terminal は周囲の WiFi を検索し、それに接続しようとします。
- **WiFi SSID のパスワード**
  - Wio Terminal が接続できる WiFi SSID のパスワードを入力してください。
- **Ubidots TOKEN**
  - **ステップ 2** で生成された TOKEN です。
- **Variable label**
  - これは、ユーザーが Ubidots に提供するセンサー値の名前です。Ubidots は、ユーザーが提供するこの名前に基づいて異なるデータを一致させます。Variable label が最初のデータ送信前に存在しない場合、Ubidots は自動的に作成します。
- **Device label**
  - これはデバイスの名前であり、ユーザーが提供するデバイス名は Ubidots によってデバイスを識別するために使用されます。Device label が最初のデータ送信前に存在しない場合、Ubidots は自動的に作成します。
- **MQTT クライアント名**
  - これは特別なもので、ブローカーによってデバイスが識別される ID であるため、**必ずユニークである必要があります**。他のデバイスによってすでに使用されている ID で接続しようとすると、接続は拒否されます。すべて英数字で構成された 8～12 文字以上の MQTT クライアント名を作成し、コードに適切に入力してください。
ユニークな MQTT クライアント名の作成に関するヘルプが必要な場合は、この [ランダム ASCII ビルダー](https://www.random.org/strings/) をチェックするか、デバイスの MAC アドレスを使用してください。すべての MAC アドレスはグローバルにユニークです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/7.png" /></div>

以下のプログラムの冒頭で、これらの要件をコードの上部で定義します。適切に自分の情報を入力してください。

```cpp
//例
#define WIFISSID "<YOUR-WIFISSD>" // ここにあなたの WiFiSSID を入力してください
#define PASSWORD "<YOUR-WIFI-PASSWORD" // ここにあなたの WiFi パスワードを入力してください
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // ここにあなたの Ubidots TOKEN を入力してください
#define VARIABLE_LABEL "light" // Variable label を割り当てます
#define DEVICE_LABEL "wio-terminal" // Device label を割り当てます
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT クライアント名
```

### 内蔵センサーのデータを Ubidots に送信する

Wio Terminal の内蔵センサーから検出データを Ubidots に送信したい場合は、以下の完全なコードを Arduino に貼り付けて Wio Terminal にアップロードしてください。

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include"LIS3DHTR.h"

LIS3DHTR<TwoWire> lis;

//必要な情報
#define WIFISSID "<YOUR-WIFISSD>" // ここにあなたの WiFiSSID を入力してください
#define PASSWORD "<YOUR-WIFI-PASSWORD" // ここにあなたの WiFi パスワードを入力してください
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // ここにあなたの Ubidots TOKEN を入力してください
#define VARIABLE_LABEL1 "light" // Variable label を割り当てます
#define VARIABLE_LABEL2 "IMUx"
#define VARIABLE_LABEL3 "IMUy"
#define VARIABLE_LABEL4 "IMUz"
#define VARIABLE_LABEL5 "sound"
#define DEVICE_LABEL "wio-terminal" // Device label を割り当てます
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT クライアント名

const long interval = 100;
unsigned long previousMillis = 0;

TFT_eSPI tft;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

//センサー値
static int lightValue = 0;
static float imuxValue = 0;
static float imuyValue = 0;
static float imuzValue = 0;
static int soundValue = 0;

//送信する値を格納するスペース
static char str_light[6];
static char str_imux[6];
static char str_imuy[6];
static char str_imuz[6];
static char str_sound[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("メッセージが到着しました [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // 再接続するまでループ
  while (!client.connected()) {
    Serial.println("MQTT 接続を試みています...");

  // 接続を試みる
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("接続成功");
  }
  else {
    Serial.print("失敗しました, rc=");
    Serial.print(client.state());
    Serial.println(" 2秒後に再試行します");
    // 再試行する前に2秒待機
    delay(2000);
    }
  }
}

//内蔵センサー値の読み取り
void read_builtin()
{
  lightValue = analogRead(WIO_LIGHT);
  Serial.print("光 = ");
  Serial.println(lightValue);
  
  imuxValue = lis.getAccelerationX();
  Serial.print("IMU_x = ");
  Serial.println(imuxValue);
  imuyValue = lis.getAccelerationY();
  Serial.print("IMU_y = ");
  Serial.println(imuyValue);
  imuzValue = lis.getAccelerationZ();
  Serial.print("IMU_z = ");
  Serial.println(imuzValue);
  
  soundValue = analogRead(WIO_MIC);
  Serial.print("音 = ");
  Serial.println(soundValue);
}

//データを Ubidots に送信
void send_data()
{
  dtostrf(lightValue, 4, 0, str_light);
  dtostrf(imuxValue, 4, 3, str_imux);
  dtostrf(imuyValue, 4, 3, str_imuy);
  dtostrf(imuzValue, 4, 3, str_imuz);
  dtostrf(soundValue, 4, 0, str_sound);

  if (!client.connected()) {
    reconnect();
  }
  
  // トピックを構築
  sprintf(topic, "%s", ""); // トピック内容をクリア
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  //ペイロードを構築
  sprintf(payload, "%s", ""); // ペイロードをクリア
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // Variable label を追加
  sprintf(payload, "%s%s", payload, str_light); // 値を追加
  sprintf(payload, "%s}", payload); // 辞書括弧を閉じる
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // ペイロードをクリア
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // Variable label を追加
  sprintf(payload, "%s%s", payload, str_imux); // 値を追加
  sprintf(payload, "%s}", payload); // 辞書括弧を閉じる
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // ペイロードをクリア
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL3); // Variable label を追加
  sprintf(payload, "%s%s", payload, str_imuy); // 値を追加
  sprintf(payload, "%s}", payload); // 辞書括弧を閉じる
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // ペイロードをクリア
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL4); // Variable label を追加
  sprintf(payload, "%s%s", payload, str_imuz); // 値を追加
  sprintf(payload, "%s}", payload); // 辞書括弧を閉じる
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // ペイロードをクリア
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL5); // Variable label を追加
  sprintf(payload, "%s%s", payload, str_sound); // 値を追加
  sprintf(payload, "%s}", payload); // 辞書括弧を閉じる
  client.publish(topic, payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);
  pinMode(WIO_MIC, INPUT);
  pinMode(WIO_LIGHT, INPUT);

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);

  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //データ出力レート
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G);
  
//  while(!Serial);

  // WiFi をステーションモードに設定し、以前接続されていた AP から切断
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  tft.drawString("WiFi に接続中...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }
  
  tft.fillScreen(TFT_BLACK);
  tft.drawString("WiFi に接続しました",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);

}

void loop() {
  read_builtin();   //内蔵センサー値の読み取り
  send_data();   //データを Ubidots に送信
  delay(5000);
}
```

### Grove 土壌湿度センサーのデータを Ubidots に送信する

Grove 土壌湿度センサーのデータを Ubidots に送信したい場合は、以下の完全なコードを Arduino に貼り付けて、Wio Terminal にアップロードしてください。

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>

// 必要な情報
#define WIFISSID "<YOUR-WIFISSD>" // ここにWiFiのSSIDを入力してください
#define PASSWORD "<YOUR-WIFI-PASSWORD>" // ここにWiFiのパスワードを入力してください
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // ここにUbidotsのトークンを入力してください
#define VARIABLE_LABEL "light" // 変数ラベルを指定
#define DEVICE_LABEL "wio-terminal" // デバイスラベルを指定
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTTクライアント名

const long interval = 100;
unsigned long previousMillis = 0;

TFT_eSPI tft;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

// 土壌湿度センサーのピンと値
int sensorPin = A0;
static int soilValue = 0;

// 送信する値を格納するスペース
char str_soil[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("メッセージが届きました [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // 再接続するまでループ
  while (!client.connected()) {
    Serial.println("MQTT接続を試みています...");

    // 接続を試みる
    if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
      Serial.println("接続成功");
    }
    else {
      Serial.print("接続失敗, rc=");
      Serial.print(client.state());
      Serial.println(" 2秒後に再試行します");
      // 再試行まで2秒待機
      delay(2000);
    }
  }
}

// 土壌湿度センサーの値を読み取る
void read_soil()
{
  soilValue = analogRead(sensorPin);
  Serial.print("湿度 = ");
  Serial.println(soilValue);
}

// Ubidots にデータを送信する
void send_data()
{
  dtostrf(soilValue, 4, 0, str_soil);

  if (!client.connected()) {
    reconnect();
  }
  
  // トピックを構築
  sprintf(topic, "%s", ""); // トピック内容をクリア
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  // ペイロードを構築
  sprintf(payload, "%s", ""); // ペイロードをクリア
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL); // 変数ラベルを追加
  sprintf(payload, "%s%s", payload, str_soil); // 値を追加
  sprintf(payload, "%s}", payload); // 辞書の括弧を閉じる

  client.publish(topic, payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);

  // WiFiをステーションモードに設定し、以前接続されていたAPから切断
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  tft.drawString("WiFiに接続中...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }
  
  tft.fillScreen(TFT_BLACK);
  tft.drawString("WiFiに接続しました",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_soil();   // 土壌湿度センサーの値を読み取る
  send_data();   // Ubidots にデータを送信する
  delay(5000);
}
```

### Grove VOC および eCO2 ガスセンサーのデータを Ubidots に送信する

Grove VOC および eCO2 ガスセンサーのデータを Ubidots に送信したい場合は、以下の完全なコードを Arduino に貼り付けて、Wio Terminal にアップロードしてください。

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include "sensirion_common.h"
#include "sgp30.h"

#define WIFISSID "<YOUR-WIFISSD>" // ここにWiFiのSSIDを入力してください
#define PASSWORD "<YOUR-WIFI-PASSWORD>" // ここにWiFiのパスワードを入力してください
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // ここにUbidotsのトークンを入力してください
#define VARIABLE_LABEL1 "voc" // 変数ラベルを指定
#define VARIABLE_LABEL2 "co2"
#define DEVICE_LABEL "wio-terminal" // デバイスラベルを指定
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTTクライアント名

const long interval = 100;
unsigned long previousMillis = 0;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

TFT_eSPI tft = TFT_eSPI();

static unsigned short int VOC = 0;
static unsigned short int CO2 = 0;

// 送信する値を格納するスペース
char str_voc[6];
char str_co2[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("メッセージが届きました [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // 再接続するまでループ
  while (!client.connected()) {
    Serial.println("MQTT接続を試みています...");

    // 接続を試みる
    if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
      Serial.println("接続成功");
    }
    else {
      Serial.print("接続失敗, rc=");
      Serial.print(client.state());
      Serial.println(" 2秒後に再試行します");
      // 再試行まで2秒待機
      delay(2000);
    }
  }
}

void read_sgp30()
{
  s16 err = 0;
  sgp_measure_iaq_blocking_read(&VOC, &CO2);
  if (err == STATUS_OK) {
      Serial.print("tVOC 濃度:");
      Serial.print(VOC);
      Serial.println("ppb");

      Serial.print("CO2eq 濃度:");
      Serial.print(CO2);
      Serial.println("ppm");
  } else {
      Serial.println("IAQ値の読み取りエラー\n");
  }
}

void send_data()
{
  dtostrf(VOC, 4, 0, str_voc);
  dtostrf(CO2, 4, 0, str_co2);
  
  if (!client.connected()) {
    reconnect();
  }
  
  // トピックを構築
  sprintf(topic, "%s", ""); // トピック内容をクリア
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  // ペイロードを構築
  sprintf(payload, "%s", ""); // ペイロードをクリア
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // 変数ラベルを追加
  sprintf(payload, "%s%s", payload, str_voc); // 値を追加
  sprintf(payload, "%s}", payload); // 辞書の括弧を閉じる
  client.publish(topic, payload);
  Serial.println(payload);
  delay(500);

  sprintf(payload, "%s", ""); // ペイロードをクリア
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // 変数ラベルを追加
  sprintf(payload, "%s%s", payload, str_co2); // 値を追加
  sprintf(payload, "%s}", payload); // 辞書の括弧を閉じる
  client.publish(topic, payload);
  Serial.println(payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  while (sgp_probe() != STATUS_OK) {
      Serial.println("SGPの初期化に失敗しました");
  }
  sgp_set_absolute_humidity(13000);
  sgp_iaq_init();

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);
  
//  while(!Serial);

  // WiFiをステーションモードに設定し、以前接続されていたAPから切断
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  tft.drawString("WiFiに接続中...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }
  
  tft.fillScreen(TFT_BLACK);
  tft.drawString("WiFiに接続しました",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_sgp30();    // sgp30センサーの値を読み取る
  send_data();     // Ubidots にデータを送信する
  delay(5000);
}
```

### Grove Temp&Humi センサーのデータを Ubidots に送信する

Grove Temp&Humi センサーのデータを Ubidots に送信したい場合は、以下のコードを Arduino に貼り付けて Wio Terminal にアップロードしてください。

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

#define WIFISSID "<YOUR-WIFISSD>" // ここにWiFiのSSIDを入力してください
#define PASSWORD "<YOUR-WIFI-PASSWORD" // ここにWiFiのパスワードを入力してください
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // ここにUbidotsのトークンを入力してください
#define VARIABLE_LABEL1 "temperature" // 変数ラベルを設定
#define VARIABLE_LABEL2 "humidity"
#define DEVICE_LABEL "wio-terminal" // デバイスラベルを設定
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTTクライアント名

const long interval = 100;
unsigned long previousMillis = 0;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

TFT_eSPI tft = TFT_eSPI();
SensirionI2CSht4x sht4x;

static float temp = 0;
static float humi = 0;

// 送信する値を格納するスペース
char str_temp[6];
char str_humi[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("メッセージが届きました [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // 再接続するまでループ
  while (!client.connected()) {
    Serial.println("MQTT接続を試行中...");

  // 接続を試行
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("接続成功");
  }
  else {
    Serial.print("接続失敗, rc=");
    Serial.print(client.state());
    Serial.println(" 2秒後に再試行します");
    // 再試行まで2秒待機
    delay(2000);
    }
  }
}

void read_sht40()
{
  uint16_t error;
  char errorMessage[256];
  error = sht4x.measureHighPrecision(temp, humi);
  if (error) {
      Serial.print("measureHighPrecision() 実行中にエラーが発生しました: ");
      errorToString(error, errorMessage, 256);
      Serial.println(errorMessage);
  } else {
      Serial.print("温度:");
      Serial.print(temp);
      Serial.print("\t");
      Serial.print("湿度:");
      Serial.println(humi);
  }
}

void send_data()
{
  dtostrf(temp, 4, 2, str_temp);
  dtostrf(humi, 4, 2, str_humi);
  
  if (!client.connected()) {
    reconnect();
  }
  
  // トピックを構築
  sprintf(topic, "%s", ""); // トピック内容をクリア
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  // ペイロードを構築
  sprintf(payload, "%s", ""); // ペイロードをクリア
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // 変数ラベルを追加
  sprintf(payload, "%s%s", payload, str_temp); // 値を追加
  sprintf(payload, "%s}", payload); // 辞書の括弧を閉じる
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // ペイロードをクリア
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // 変数ラベルを追加
  sprintf(payload, "%s%s", payload, str_humi); // 値を追加
  sprintf(payload, "%s}", payload); // 辞書の括弧を閉じる
  client.publish(topic, payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  Wire.begin();
  sht4x.begin(Wire);

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);
  
//  while(!Serial);

  // WiFiをステーションモードに設定し、以前接続されていたAPから切断
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  tft.drawString("WiFiに接続中...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }
  
  tft.fillScreen(TFT_BLACK);
  tft.drawString("WiFiに接続しました",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_sht40();    // sht40センサー値を読み取る
  send_data();     // データをUbidotsに送信
  delay(5000);
}
```

### Grove Vision Ai モジュールのデータを Ubidots に送信する

Grove Vision Ai モジュールのデータを Ubidots に送信したい場合は、以下のコードを Arduino に貼り付けて Wio Terminal にアップロードしてください。

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include"LIS3DHTR.h"
#include "Seeed_Arduino_GroveAI.h"

// 必要な情報
#define WIFISSID "<YOUR-WIFISSD>" // ここにWiFiのSSIDを入力してください
#define PASSWORD "<YOUR-WIFI-PASSWORD" // ここにWiFiのパスワードを入力してください
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // ここにUbidotsのトークンを入力してください
#define VARIABLE_LABEL1 "num" // 変数ラベルを設定
#define VARIABLE_LABEL2 "confidence"
#define DEVICE_LABEL "wio-terminal" // デバイスラベルを設定
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTTクライアント名

const long interval = 100;
unsigned long previousMillis = 0;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

GroveAI ai(Wire);
uint8_t state = 0;
TFT_eSPI tft = TFT_eSPI();

static int num = 0;
static int conf = 0;

// 送信する値を格納するスペース
char str_num[6];
char str_conf[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("メッセージが届きました [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // 再接続するまでループ
  while (!client.connected()) {
    Serial.println("MQTT接続を試行中...");

  // 接続を試行
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("接続成功");
  }
  else {
    Serial.print("接続失敗, rc=");
    Serial.print(client.state());
    Serial.println(" 2秒後に再試行します");
    // 再試行まで2秒待機
    delay(2000);
    }
  }
}

// Vision AI 初期化
void VisionAI_Init()
{
  Serial.println("開始");
  if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1)) // オブジェクト検出と事前学習モデル1
  {
    state = 1;
  }
  else
  {
    Serial.println("アルゴリズムの開始に失敗しました。");
  }
}

// VisionAIの値を読み取る: 認識されたキャラクター数、各人物の信頼度
void read_VisionAI()  
{
  if (state == 1)
  {
    uint32_t tick = millis();
    if (ai.invoke()) // 呼び出し開始
    {
      while (1) // 呼び出し完了を待機
      {
        CMD_STATE_T ret = ai.state(); 
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }
      uint8_t len = ai.get_result_len(); // 検出された人数を取得
      if(len)
      {
         Serial.print("人数: ");

         num = len;
         Serial.println(num);

         object_detection_t data;       // データを取得
         for (int i = 0; i < len; i++)
         {
            ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); // 結果を取得
            Serial.print("信頼度:");
            
            conf = data.confidence;
            Serial.println(conf);
          }
      }
     else
     {
       Serial.println("識別なし");
       num = 0;
       conf = 0;
     }
   }
    else
    {
      Serial.println("呼び出し失敗。");
      num = 0;
      conf = 0;
      delay(1000);
    }
  }
}

void send_data()
{
  dtostrf(num, 4, 0, str_num);
  dtostrf(conf, 4, 0, str_conf);
  
  if (!client.connected()) {
    reconnect();
  }
  
  // トピックを構築
  sprintf(topic, "%s", ""); // トピック内容をクリア
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  // ペイロードを構築
  sprintf(payload, "%s", ""); // ペイロードをクリア
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // 変数ラベルを追加
  sprintf(payload, "%s%s", payload, str_num); // 値を追加
  sprintf(payload, "%s}", payload); // 辞書の括弧を閉じる
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // ペイロードをクリア
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // 変数ラベルを追加
  sprintf(payload, "%s%s", payload, str_conf); // 値を追加
  sprintf(payload, "%s}", payload); // 辞書の括弧を閉じる
  client.publish(topic, payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  Wire.begin();

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);
  VisionAI_Init();

  // WiFiをステーションモードに設定し、以前接続されていたAPから切断
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  tft.drawString("WiFiに接続中...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }
  
  tft.fillScreen(TFT_BLACK);
  tft.drawString("WiFiに接続しました",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_VisionAI(); // VisionAIセンサー値を読み取る
  send_data();     // データをUbidotsに送信
  delay(5000);
}
```

### Ubidots パネル

コードをアップロードしたら、データがどのようにアップロードされたかを確認するためのダッシュボードを設定する準備をします。

Ubidots は非常にシンプルなインターフェースを持っており、デバイスに関する情報を確認したい場合は、ダッシュボードの上部にある **Devices** を選択できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/16.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/11.png" /></div>

ここでデバイス名をクリックすると、すべての履歴タブを確認できます。これはコード内の **VARIABLE_LABEL** によって決定されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/19.png" /></div>

:::note
Ubidots の無料版では、**1つのトークン**と**10個のラベル**のみ作成可能です。10個を超えるラベルを作成すると、アップロードしたラベルやデータは破棄されます。
:::

デバイスのデータ情報を確認したい場合は、**Data** を選択できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/17.png" /></div>

また、メインページの左上隅で異なるダッシュボード画面を選択することもできます。初期設定では、Ubidots は自動的に **Demo Dashboard** という名前のダッシュボードを作成します。Wio Terminal がネットワークに接続されてデータを送信すると、**wio terminal dashboard** という名前のダッシュボードが表示されます。これはコード内の **DEVICE_LABEL** によって定義されています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/18.png" /></div>

現在のダッシュボードの下に異なるパネルを追加することができます。そのためには、右上隅の **+** 記号をクリックする必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/13.png" /></div>

以下は、Ubidots がサポートするパネルの一覧です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/15.png" /></div>

IMU センサー値の折れ線グラフを作成する例を見てみましょう。IMU センサー値の折れ線グラフを描画したい場合、3つのラベルを作成し、**ラベル名がコード内の VARIABLE_LABEL と一致する必要があります**。その後はすべて Ubidots に任せるだけで、自動的に生成されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/14.png" /></div>

Ubidots には非常に強力なカスタマイズ機能もあり、値を表示するかどうか、Y軸の名前、表示するデータ量などを自由に設定できます。

## リソース

このチュートリアルで使用されたすべてのコードについては、以下のアイコンをクリックしてアクセスしてください。

<div>
  <p style={{}}><a href="https://github.com/limengdu/K1100_Ubidots" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/K1100_Ubidots" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なるニーズや好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 声明

- LoRa® マークは Semtech Corporation またはその子会社の商標です。
- LoRaWAN® は LoRa Alliance® からのライセンスの下で使用されるマークです。