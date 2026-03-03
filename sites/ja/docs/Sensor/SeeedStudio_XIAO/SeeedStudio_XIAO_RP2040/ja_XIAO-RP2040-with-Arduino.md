---
description: Seeed Studio XIAO RP2040 with Arduino
title: Arduino
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /ja/XIAO-RP2040-with-Arduino
last_update:
  date: 1/24/2023
  author: Spencer
---

# **Seeed Studio XIAO RP2040 と Arduino**

このページでは、Seeed Studio XIAO RP2040を接続し、Arduinoでプログラミングする方法について説明します。ピンマルチプレクシングに関するいくつかのプロジェクトも含まれています。

## **はじめに**

まず、Seeed Studio XIAO RP2040をコンピュータに接続し、Arduinoから簡単なコードをアップロードして、ボードが正常に動作しているかを確認します。

### **ハードウェアセットアップ**

**必要な材料：**

- Seeed Studio XIAO RP2040 x1
- PC x1
- USB Type-Cケーブル x1

:::tip
一部のUSBケーブルは電源供給のみで、データ転送ができません。USBケーブルをお持ちでない場合や、お使いのUSBケーブルがデータ転送可能かわからない場合は、[seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)をご確認ください。
:::
**ハードウェア接続：**

- ステップ1. BOOTボタンを押し続けながら、Seeed Studio XIAO RP2040をPCに接続します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" /></div>

- ステップ2. PCに「RPI-RP2」ディスクが表示され、Seeed Studio XIAO RP2040の電源LEDが点灯すれば、接続完了です。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

### **ソフトウェアセットアップ**

- **ステップ1.** お使いのオペレーティングシステムに応じて、最新版のArduino IDEをダウンロードしてインストールします

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

- **ステップ2.** Arduinoアプリケーションを起動します。

- **ステップ3.**  Arduino IDEにSeeed Studio XIAO RP2040ボードパッケージを追加します

**File** > **Preferences**に移動し、**Additional Boards Manager URLs**に以下のURLを入力します：

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/5.png"/></div>

**Tools-> Board-> Boards Manager...**に移動し、検索欄にキーワード「**RP2040**」を入力します。「Raspberry Pi Pico/RP2040」の最新版を選択してインストールします。

:::note 注意

**Seeed XIAO RP2040という名前のオンボードパッケージは利用できなくなりました**。ダウンロードして使用しないでください！

「Seeed XIAO RP2040」ボードを含む「Raspberry Pi Pico/RP2040」パッケージをインストールしてください。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/3.png"/></div>
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/2.png"/></div>

- **ステップ4.** ボードとポートを選択します。

- **ステップ5.** **「File --> Examples --->01.Basics --> Blink」**に移動してBlinkサンプルを開きます

<div align="center"><img width ="550" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/select_blink.png"/></div>

**ボード**

ボードパッケージをインストール後、**Tools-> Board**に移動し、「**Seeed Studio XIAO RP2040**」を見つけて選択します。これでArduino IDE用のSeeed Studio XIAO RP2040のセットアップが完了しました。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/4.png"/></div>

**ポート**

Tools > Portに移動し、接続されたSeeed Studio XIAO RP2040のシリアルポート名を選択します。これは通常COM3以上になります（**COM1**と**COM2**は通常ハードウェアシリアルポート用に予約されています）。接続されたSeeed Studio XIAO RP2040のシリアルポートには通常、「Seeed Studio XIAO RP2040」と書かれた括弧が含まれています。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"/></div>

- **ステップ6.** **Upload**ボタンをクリックして、Blinkサンプルコードをボードにアップロードします。

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl5.png"/></div>

アップロードが完了すると、ボード上のピン25の緑色（USER）LEDが1秒に1回点滅するのが確認できるはずです。点滅していれば、おめでとうございます！これは接続が成功したことを意味し、Seeed Studio XIAO RP2040でより多くのプロジェクトを探索できるようになりました！

:::note
Arduinoプログラムのアップロードに失敗した場合は、「BOOT」ボタンを押し続けてから「RUN」ボタンをクリックしてみてください。この時点で、Seeed Studio XIAO RP2040はブートモードに入り（コンピュータにリムーバブルディスクが読み込まれます）、再度Arduinoプログラムをアップロードできるようになります。
:::

## **Seeed Studio XIAO RP2040のピンマルチプレクシング**

Seeed Studio XIAO RP2040は11個のデジタルピン、4個のアナログピン、11個のPWMピン、1個のI2Cインターフェース、1個のUARTインターフェース、1個のSPIインターフェース、1個のSWDボンディングパッドインターフェースを搭載しています。これらのインターフェースについてのチュートリアルを提供し、あなたのプロジェクトに役立てていただけるようにします。

### **デジタル**

プッシュボタンをピンD0に、LEDをピン25に接続します。その後、以下のコードをアップロードして、プッシュボタンを使用してLEDのON/OFFを制御します。

:::warning
Seeed Studio XIAO RP2040の動作電圧は3.3Vであることにご注意ください。センサーを誤って5Vに接続すると、マザーボードが正常に動作しない可能性があります。
:::

```cpp
const int buttonPin = D0;     // the number of the pushbutton pin
const int ledPin =  25;      // the number of the LED pin
 
int buttonState = 0;         // variable for reading the pushbutton status
 
void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}
 
void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);
 
  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED off:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED on:
    digitalWrite(ledPin, LOW);
  }
}
```

### **アナログ**

ポテンショメータをピンA0に、LEDをピン25に接続します。次に以下のコードをアップロードして、ポテンショメータのノブを回すことでLEDの点滅間隔を制御します。

```cpp
const int sensorPin = A0;
const int ledPin =  25; 
void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(sensorPin, INPUT);
  pinMode(ledPin, OUTPUT);
}
 
void loop() {
  // read the value from the sensor:
int sensorValue = analogRead(sensorPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(sensorValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(sensorValue);
}
```

### **シリアル**

UARTのTXピンとしてピンD6を、UARTのRXピンとしてピンD7を使用して「Hello World!」メッセージを送信します

```cpp
void setup() {
    Serial.begin(115200);
    while (!Serial);
}

void loop() {
    Serial.println("Hello,World");
    delay(1000);
}
```

### **RGB LED**

Pin 11はRGB LEDのイネーブルピンです。Pin 11をHighに設定することでRGB LEDを点灯させることができます。ここではフラッシュさせてみます。まず、サードパーティライブラリを追加する必要があります。

- **ステップ 1.** Arduino IDEを開き、`Sketch > Include Library > Manage Libraries...`に移動してライブラリを検索します。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Arduino Library Managerで「Adafruit_NeoPixel」ライブラリをキーワードで検索し、最新バージョンをインストールします。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" /></div>

- **ステップ 2.** コードをArduinoにコピーし、**Upload**ボタンをクリックしてアップロードします。

```cpp
#include <Adafruit_NeoPixel.h>

int Power = 11;
int PIN  = 12;
#define NUMPIXELS 1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();
  pinMode(Power,OUTPUT);
  digitalWrite(Power, HIGH);

}

void loop() { 
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(15, 25, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(103, 25, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 242, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 23, 23));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(12, 66, 101));
  delay(400);
  pixels.show();
  delay(500);

}
```

RGB LEDはレインボーカラーを表示します。

### **I2C**

ここでは、Seeed Studio XIAO RP2040を[Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)とI2Cで接続し、「Hello world」を表示します。

**接続**：

PIN 5をSCLピンとして、PIN 4をSDAピンとして使用します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **ステップ 1.** Arduino IDEを開き、`Sketch > Include Library > Manage Libraries...`に移動してライブラリを検索します。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Arduinoライブラリマネージャーでキーワード「U8G2」ライブラリを入力し、最新バージョンをインストールします。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl7.png" /></div>

- **ステップ 2.** コードをArduinoにコピーし、**Upload**ボタンをクリックしてアップロードします。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
 
#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.clearBuffer();                   // clear the internal memory
  u8g2.setFont(u8g2_font_ncenB08_tr);   // choose a suitable font
  u8g2.drawStr(0,10,"Hello Wrold!");    // write something to the internal memory
  u8g2.drawStr(0,30,"Hello Werold!"); 
  u8g2.drawStr(0,50,"Hello Wrrrold!"); 
  u8g2.sendBuffer();                    // transfer internal memory to the display
  delay(1000);  
}
```

結果は以下のように表示されます：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png" alt="pir" width={600} height="auto" /></p>

### **SPI**

ここでは[Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html)をSPI経由で接続し、「Hello World」を表示します。このOLEDディスプレイはIICとSPIの両方の通信をサポートしていますが、デフォルトの通信モードはIICです。開始前に[IIC機能をSPI機能に変更する](https://wiki.seeedstudio.com/ja/Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0/)ことが必要です。

**接続**：

PIN 8をSCKピンとして、PIN 9をMISOピンとして、PIN10をMOSIピンとして使用します。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl9.png" /></div>

- **ステップ 1.** Arduino IDEを開き、`Sketch > Include Library > Manage Libraries...`に移動してライブラリを検索します。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Arduinoライブラリマネージャーでキーワード「Adafruit_GFX」ライブラリを入力し、最新バージョンをインストールします。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/board10.png" /></div>

Arduinoライブラリマネージャーでキーワード「Adafruit_SSD1306」ライブラリを入力し、最新バージョンをインストールします。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl11.png" /></div>

- **ステップ 2.** コードをArduinoにコピーし、**Upload**ボタンをクリックしてアップロードします。

```cpp
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels

// Declaration for SSD1306 display connected using software SPI (default case):
#define OLED_MOSI  MOSI   //Connect SSD1315 D1
#define OLED_CLK  SCK     //Connect SSD1315 D0
#define OLED_DC  D4      //Connect SSD1315 D/C
#define OLED_CS  SS      //Connect SSD1315 CS
#define OLED_RESET  D5   //Connect SSD1315 RES
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT,
  OLED_MOSI, OLED_CLK, OLED_DC, OLED_RESET, OLED_CS);

void setup() {
  Serial.begin(9600);
  if(!display.begin(SSD1306_SWITCHCAPVCC)) {
    Serial.println(F("SSD1306 allocation failed"));
    for(;;); // Don't proceed, loop forever
  }
}

void loop() {
  display.clearDisplay();
  display.setTextSize(1);             // Normal 1:1 pixel scale
  display.setTextColor(SSD1306_WHITE);        // Draw white text
  display.setCursor(0,3);             // Start at top-left corner
  display.println(F("Hello"));
  display.setTextSize(2); 
  display.setCursor(0,16);  
  display.println(F("Hello"));
  display.setTextSize(3); 
  display.setCursor(0,38);  
  display.println(F("Hello"));
  display.display();
  delay(2000);
}
```

結果は以下の通りです：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png" alt="pir" width={600} height="auto" /></p>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
