---
title: Blynkへの接続
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-Blynk/
slug: /ja/Wio-Terminal-Blynk
last_update:
  date: 05/15/2025
  author: gunengyu
---


# Wio Terminal をBlynkに接続する

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/banner.gif" /></div>

このWikiでは、Wio Terminalを[**Blynk**](https://blynk.io/)ソフトウェアと連携させてWi-FiまたはBluetoothを使用する方法を紹介します。これにより、Wio TerminalをIoTデバイスのコアとして使用し、スマートフォンからハードウェアを非常に簡単に制御できるようになります！

- **Blynkとは**

[**Blynk**](https://blynk.io/)は、iOSおよびAndroidデバイスからハードウェアプロジェクトを制御および監視するためのインターフェースを迅速に構築できる新しいプラットフォームです。Blynkアプリをダウンロードした後、プロジェクトダッシュボードを作成し、ボタン、スライダー、グラフ、その他のウィジェットを画面上に配置できます。

## 必要なハードウェア

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- スマートフォン
  - App StoreからBlynkアプリをダウンロード

## はじめに

### blynk-libraryのインストール

1. [**blynk-library**](https://github.com/blynkkk/blynk-library)のリポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、このライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加`をクリックし、先ほどダウンロードした`blynk-library`ファイルを選択します。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Wi-Fiの依存関係

現在、Wi-FiとBluetoothは**別々のファームウェア**であり、**同時に使用することはできません**。

>注意: Wi-FiとBluetoothが同時に動作する新しいファームウェアは開発中で、近日中にリリースされる予定です。

- **[Wi-Fi Overview Wiki](https://wiki.seeedstudio.com/ja/Wio-Terminal-Network-Overview/)**に従って、Wi-FiファームウェアをWio Terminalにアップロードしてください。

- また、**すべての依存Wi-Fiライブラリをダウンロードしてインストール**してください。

### Bluetoothの依存関係

- [**Bluetooth Overview Wiki**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Bluetooth-Overview/)に従って、BluetoothファームウェアをWio Terminalにアップロードしてください。

- また、**すべての依存Bluetoothライブラリをダウンロードしてインストール**してください。

## Blynkモバイルアプリのセットアップ

Blynkアプリをダウンロードしたら：

- アプリを開きます。

- **新しいプロジェクト**をクリックします：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/1.jpg" /></div>

- **プロジェクト名**を入力し、デバイスとして**Arduino UNO**を選択し、接続タイプとして**WiFi**または**Bluetooth**を選択します。その後、プロジェクトを作成をクリックします：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/1.1.png" /></div>

- 次に、**Blynkに登録したメールアドレスにトークンが送信されます**。これは後でArduinoスケッチで必要になります。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/3.png" /></div>

## Wi-Fiの例

これらの例では、Wio TerminalとBlynkアプリ間でWi-Fiを使用して通信します。

### シンプルなWi-Fi接続

この例では、特定のWi-Fiに接続し、その後Blynkサーバーに接続します。

- **トークン**をメールで受け取ったものに置き換えて、`auth`に設定してください。

- ネットワークの`SSID`と`Password`を置き換えてください。

- スケッチをWio Terminalにアップロードしてください。

```cpp
#define BLYNK_PRINT Serial

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>

// BlynkアプリでAuth Tokenを取得してください。
// プロジェクト設定（ナットアイコン）に移動します。
char auth[] = "YourToken";

// WiFiの認証情報。
// オープンネットワークの場合はパスワードを""に設定します。
char ssid[] = "SSID";
char pass[] = "Password";

void setup()
{
  // デバッグコンソール
  Serial.begin(9600);

  Blynk.begin(auth, ssid, pass);
}

void loop()
{
  Blynk.run();
}
```

アップロード後、スマートフォンでBlynkアプリを開き、右上の`再生`ボタンをクリックしてライブにします。接続されていることが確認できるはずです！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/wifi.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/4.png" /></div>

## 温度をBlynkに送信する

この例では、Wio TerminalからBlynkサーバーにデータを送信し、そのデータをモバイルアプリで表示する方法を示します。

- WiFiの認証情報とトークンを置き換えてください。

- 温度データは**仮想ピン0**（`V0`）に送信されます。

- Wio Terminalにアップロードしてください。

:::note
    この例では、温度値はランダムに生成されます。
:::

```cpp
#define BLYNK_PRINT Serial

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>

// WiFiの認証情報。
const char* ssid = "SSID";
const char* pass = "Password";

// BlynkアプリでAuth Tokenを取得してください。
// プロジェクト設定（ナットアイコン）に移動します。
char auth[] = "YourToken";

BlynkTimer timer;

void sendTemperature() {
  // ランダムな温度値を生成（例：10.0〜30.0）
  float t = float(random(100, 300)) / 10;
  // フォーマット：小数点1桁、℃を追加
  String str = String(t, 1) + "℃";
  // サーバーに送信
  Blynk.virtualWrite(V0, str);
}

void setup() {
  // デバッグコンソール
  Serial.begin(9600);

  Blynk.begin(auth, ssid, pass);
  timer.setInterval(1000L, sendTemperature);
}

void loop() {
  Blynk.run();
  timer.run();
}
```

再びスマートフォンでBlynkアプリを開きます。

- 左にスワイプしてウィジェットボックスを表示し、**Value Display**を選択します：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-1.png" /></div>

- ボタンをクリックし、**仮想ピン0**に割り当てるように設定します：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-3.png" /></div>

- 設定を保存し、右上の再生ボタンをクリックしてライブにします！スマートフォンで温度値が表示されるのが確認できます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-4.png" /></div>

## Bluetoothの例

これらの例では、Wio TerminalとBlynkアプリ間でBluetoothを使用して通信します。

### シンプルなBluetooth接続

この例では、Wio TerminalのBluetoothを使用してモバイルフォンのBluetoothに接続します。

- トークンを`auth`に置き換えてください。

- Wio Terminalにアップロードしてください。

```cpp
#define BLYNK_PRINT Serial
#define BLYNK_USE_DIRECT_CONNECT

#include <BlynkSimpleWioTerminal_BLE.h>
#include <BLEDevice.h>
#include <BLEServer.h>

// BlynkアプリでAuth Tokenを取得してください。
// プロジェクト設定（ナットアイコン）に移動します。
char auth[] = "YourToken";

void setup()
{
  // デバッグコンソール
  Serial.begin(9600);
  Serial.println("接続を待っています...");
  Blynk.setDeviceName("Blynk");
  Blynk.begin(auth);
}

void loop()
{
  Blynk.run();
}
```

次に、Blynkアプリを開き、以下のように設定します：

- 左にスワイプしてウィジェットボックスを表示し、**BLE**ウィジェットを見つけます：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-1.jpg" /></div>

- **BLEウィジェット**をクリックし、`Blynk`という名前のBLEデバイスに接続します：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-3.jpg" /></div>

- BLEが接続されたら、再生ボタンをクリックしてライブにします！

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-4.jpg" /></div>

これで、Wio TerminalがBluetoothを使用してBlynkに接続されました！

### Blynkを使用したRGBストリップの制御

この例では、RGBストリップをWio Terminalに接続し、Blynkを使用して表示する色を制御します！

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/RGB.mp4" type="video/mp4" />
  </video></div>

#### Adafruit_NeoPixelライブラリのインストール

1. [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)リポジトリを訪問し、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、Arduino IDEにライブラリをインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加`をクリックし、先ほどダウンロードした`Adafruit_NeoPixel`ファイルを選択します。

---

- 環境に応じて`PIN`と`NUMPIXELS`を設定してください。
- RGB値はBlynkアプリから読み取り、**仮想ピン2（V2）**に割り当てられます。
- Wio Terminalにアップロードしてください。

```cpp
#define BLYNK_PRINT Serial
#define BLYNK_USE_DIRECT_CONNECT

#include <BlynkSimpleWioTerminal_BLE.h>
#include <BLEDevice.h>
#include <BLEServer.h>
#include <Adafruit_NeoPixel.h>

#include <TFT_eSPI.h> // ハードウェア固有のライブラリ
TFT_eSPI tft = TFT_eSPI();       // カスタムライブラリを呼び出し

#define PIN 0
#define NUMPIXELS 20
#define BLYNK_PRINT Serial
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

// BlynkアプリでAuth Tokenを取得してください。
// プロジェクト設定（ナットアイコン）に移動します。
char auth[] = "YourToken";

BLYNK_WRITE(V2)
{
  int R = param[0].asInt();
  int G = param[1].asInt();
  int B = param[2].asInt();
  tft.fillScreen(tft.color565(R, G, B));
  for (int i = 0; i < NUMPIXELS; i++) {
    pixels.setPixelColor(i, pixels.Color(R, G, B));
    pixels.show();
  }
}

void setup() {
  // デバッグコンソール
  Serial.begin(9600);
  Serial.println("接続を待っています...");
  Blynk.setDeviceName("Blynk");

  Blynk.begin(auth);
  
  tft.begin();
  tft.fillScreen(TFT_BLACK);
  pixels.begin();
}

void loop() {
  Blynk.run();
}
```

Blynkアプリを開き、以下のように設定してください：

- 左にスワイプしてウィジェットボックスを表示し、下にスクロールして**zeRGBa**ウィジェットを見つけます：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-1.png" /></div>

- zeRGBaウィジェットをクリックし、以下のように設定します。出力を**Merge**に設定し、**Virtual Pin 2 (V2)**に割り当て、値の範囲を**0から255**に設定します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-2.png" /></div>

- 最初にBLEウィジェットが接続されていることを確認し、再生ボタンをクリックしてライブモードにします！Blynk上で色をドラッグするだけで、LEDストリップのRGBカラーを簡単に変更できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-result.png" /></div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なるニーズやご希望に応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>