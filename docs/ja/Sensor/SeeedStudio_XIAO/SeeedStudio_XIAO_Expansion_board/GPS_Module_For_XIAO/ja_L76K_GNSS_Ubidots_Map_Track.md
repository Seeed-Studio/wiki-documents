---
title: L76K Ubidots経路追跡
description: L76K GNSSモジュールとSeeedStudio XIAOをUbidotsに接続してマップ上で位置経路追跡を行う
keywords: 
  - XIAO
  - Expansion Boards for XIAO
  - GPS Module for XIAO
  - L76K Path Tracking on Ubidots
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/L76K_Path_Tracking_on_Ubidots
last_update: 
  date: 03/07/2024
  author: Harrison Xu
---


# L76K GNSSモジュールとSeeedStudio XIAOをUbidotsに接続してマップ上で位置経路追跡を行う

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

## はじめに
[SeeedStudio XIAO用L76K GNSSモジュールの使用開始](https://wiki.seeedstudio.com/ja/get_start_l76k_gnss/)の後、L76K GNSSモジュールを使用してオブジェクトの位置を特定し、マップ上で軌跡を表示したいと思うかもしれません。この目的のために、SeeedStudio XIAO開発ボードとUbidots IoTデータプラットフォームを組み合わせることで実現できます。

[Ubidots](https://ubidots.com/)は、完全な本格的なIoTアプリケーションを自分で構築する時間やエネルギーがないエンジニアや開発者向けのローコードIoT開発プラットフォームです。デバイスフレンドリーなAPIからエンドユーザー向けのクリーンなUIまで、Ubidotsは、カスタマイズされたソリューションを開発・維持するための高価なエンジニアチームを雇うことなく、より早く市場に投入するための必須の構成要素を提供します。

### 機能
- Wi-Fi接続時にリアルタイム位置データ（緯度と経度）をアップロード
- マップ上で位置点によって接続された経路を表示

## 使用開始
### ステップ1：Ubidotsトークンの取得
まず、ブラウザでhttps://ubidots.com を開き、アカウントにサインアップします。メールを確認し、Ubidotsコンソールにログインします。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic02_SignUp.png" alt="pir" width={600} height="auto"/>
</p>

角にあるアバターをクリック - "My Profile"、下にスクロールして緯度と経度の精度のために"Decimal places"を2から6に変更します。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic04_Setting.png" alt="pir" width={600} height="auto"/>
</p>

次に左側の"API Credentials"に移動し、後で使用するためにトークン（**API Keyではありません**）をコピーします。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic05_Token.png" alt="pir" width={600} height="auto"/>
</p>

### ステップ2：XIAOにコードをアップロード
SeeedStudio XIAO開発ボード（ここでは例としてSeeedStudio XIAO ESP32S3を使用）、L76K GNSSモジュール、GNSSアンテナ、Wi-Fiアンテナをすべて接続し、コンピューターにリンクします。

:::danger **警告**
モジュールの取り付け方向に特に注意してください。逆に差し込まないでください。そうしないとモジュールやXIAOを焼損する可能性があります。
:::

次に、Arduino IDEを起動しましょう。ライブラリマネージャーで`EspSoftwareSerial`と`TinyGPSPlus`ライブラリを追加することを忘れずに、[Ubidots ESP32 Library](https://github.com/ubidots/ubidots-esp32)をダウンロードして追加してください。

対応するボードとポートを選択し、以下のコードを貼り付けます： 

```cpp
#include <SoftwareSerial.h>
#include <TinyGPSPlus.h>
#include <WiFi.h>
#include <Ubidots.h>

static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;
const char WIFI_SSID[]     = "INPUT YOUR WIFI NAME HERE";
const char WIFI_PASS[]     = "INPUT YOUR WIFI PASSWORD HERE";
const char UBIDOTS_TOKEN[] = "INPUT YOUR UBIDOTS TOKEN HERE";

SoftwareSerial MySerial(RXPin, TXPin);
TinyGPSPlus gps;
Ubidots ubidots(UBIDOTS_TOKEN, UBI_UDP);
double lat;
double lng;

void setup() {
  Serial.begin(115200);
  MySerial.begin(GPSBaud);
  ubidots.setDebug(true);    // For observing Ubidots uploading log. You can also change it to "false" for a more simplified serial monitor.
  Serial.println("\nTinyGPSPlus library version: " + String(TinyGPSPlus::libraryVersion()));

  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  while (WiFi.status() != 3) {
    WiFi.begin(WIFI_SSID, WIFI_PASS);
    Serial.println(WiFi.status());
    delay(5000);
  }

  /*
    WL_NO_SHIELD        = 255,    // For compatibility with WiFi Shield library
    WL_IDLE_STATUS      = 0,
    WL_NO_SSID_AVAIL    = 1,
    WL_SCAN_COMPLETED   = 2,
    WL_CONNECTED        = 3,
    WL_CONNECT_FAILED   = 4,
    WL_CONNECTION_LOST  = 5,
    WL_DISCONNECTED     = 6
  */

  Serial.println("WiFi is connected!");
}

void loop() {
  while (MySerial.available() > 0) {
    if (gps.encode(MySerial.read())) {
      getLocation();
      sendToUbidots();
      delay(10 * 1000);  // Change the parameter here to modify the interval of getting and uploading location.
    }
  }

  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println("No GPS detected, please check wiring.");
  }
}

void getLocation() {
  if (gps.location.isValid()) {
    lat = gps.location.lat();
    lng = gps.location.lng();

    Serial.print("Location: ");
    Serial.print(gps.location.lat(), 6);
    Serial.print(", ");
    Serial.print(gps.location.lng(), 6);
    Serial.println();
  } else {
    Serial.println("Unable to get location currently");
  }
}

void sendToUbidots() {
  if (lat != 0 && lng != 0) {
    char charLat[20];
    char charLng[20];
    sprintf(charLat, "%.6lf", lat);
    sprintf(charLng, "%.6lf", lng);

    ubidots.addContext("lat", charLat);
    ubidots.addContext("lng", charLng);
    char* context = (char*)malloc(sizeof(char) * 60);
    ubidots.getContext(context);
    ubidots.add("position", 1, context);

    if (ubidots.send()) {
      Serial.println("Values sent");
    } else {
      Serial.println("Values not sent");
    }
    free(context);
  }
}
```

ボードにアップロードすると、すぐにシリアルモニターで次のような出力が表示されます：

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic06_SerialMonitor.png" alt="pir" width={600} height="auto"/>
</p>

<!--硬件连接正常工作与屏幕截图放一起-->

上の画像に示すように、Wi-Fiネットワークに接続し、衛星から位置情報を取得するまでに時間がかかるのは正常です。これらのエラー出力が数分間続く場合は、USB-Cポートの横にある小さな「R」ボタンでXIAOボードを再起動してみてください。

:::tip
L76K GNSSモジュールは屋外で使用するため、障害物のない開けた場所に設置してください。そうでないと位置情報が取得できない場合があります。
:::

### ステップ3：マップにデータを表示する
これでL76K GNSSモジュールとSeeedStudio XIAOがGNSSから位置を取得し、緯度と経度の情報をUbidotsに送信しています。Ubidotsに戻って確認してみましょう。https://industrial.ubidots.com/app/devices にアクセスすると、トークンを通じて新しいデータを送信したため、Ubidotsによって自動的に作成された新しい「デバイス」があります。デバイス名をクリックすると、このデバイスの位置がアップロードしたデータとして自動的に設定されていることがわかります。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic08_DeviceInfo.png" alt="pir" width={600} height="auto"/>
</p>

次に、トラックを表示するマップを作成しましょう。上部の「Data」-「Dashboards」に移動し、「Demo Dashboard」の横にあるハンバーガーメニューボタンを押して、新しいダッシュボードを「CREATE」します。このような設定に変更するか、独自のニーズに合わせてカスタマイズできます。新しいダッシュボードを「SAVE」することを忘れないでください。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic10_NewDashboard.png" alt="pir" width={600} height="auto"/>
</p>

新しいダッシュボードで「Add new widget」を押し、下にスクロールして「Map」を見つけます。「ADD MARKER GROUP」で、先ほど確認したデバイスを設定すると、マップが表示されます。カーソルをマップの右下角に移動して、より大きくリサイズします。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic11_NewWidget.png" alt="pir" width={600} height="auto"/>
</p>

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic12_MapSetting.png" alt="pir" width={600} height="auto"/>
</p>

やりました！位置ポイントで結ばれたパスが目の前に表示されています！

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

:::tip
L76K GNSSモジュールが移動せずに固定位置にとどまっている場合、マップにはパスではなく点のみが表示されます。
:::

## 参考リンク
- [GPS Location | Ubidots API Reference](https://docs.ubidots.com/reference/gps-location)

- [Create Map Widgets in Ubidots | Ubidots Help Center](https://help.ubidots.com/en/articles/1712418-create-map-widgets-in-ubidots)

- [How to create a real-time map? | Ubidots Help Center](https://help.ubidots.com/en/articles/693652-how-to-create-a-real-time-map)

- [Ubidots ESP32 Library on GitHub](https://github.com/ubidots/ubidots-esp32)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
