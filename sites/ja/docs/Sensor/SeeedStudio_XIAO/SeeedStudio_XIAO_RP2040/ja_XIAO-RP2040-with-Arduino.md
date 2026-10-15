---
description: Arduino での Seeed Studio XIAO RP2040
title: Arduino
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /XIAO-RP2040-with-Arduino
last_update:
  date: 1/24/2023
  author: Spencer
createdAt: '2023-01-16'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/
---

# Seeed Studio XIAO RP2040 と Arduino

このページでは、Seeed Studio XIAO RP2040 をコンピュータに接続し、Arduino でプログラムを行います。ピンのマルチプレクシングに関するいくつかのプロジェクトも紹介します。

## はじめに

まず、Seeed Studio XIAO RP2040 をコンピュータに接続し、Arduino から簡単なコードを書き込んで、ボードが正常に動作しているか確認します。

### ハードウェアのセットアップ

**必要なもの：**

- Seeed Studio XIAO RP2040 x1
- PC x1
- USB Type-C ケーブル x1

:::tip
一部の USB ケーブルは電源供給のみで、データ転送ができません。USB ケーブルを持っていない場合や、お使いの USB ケーブルがデータ転送に対応しているか分からない場合は、[seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html) を確認してください。
:::
**ハードウェア接続：**

- Step 1. BOOT ボタンを押し続けたまま、Seeed Studio XIAO RP2040 を PC に接続します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" /></div>

- Step 2. PC 上に **RPI-RP2** ディスクが表示され、Seeed Studio XIAO RP2040 上の電源 LED が点灯していれば、接続は完了です。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

### ソフトウェアのセットアップ

- **Step 1.** お使いのオペレーティングシステムに応じて、最新バージョンの Arduino IDE をダウンロードしてインストールします。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **Step 2.** Arduino アプリケーションを起動します。

- **Step 3.**  Arduino IDE に Seeed Studio XIAO RP2040 のボードパッケージを追加します。

**File** > **Preferences** に移動し、**Additional Boards Manager URLs** に以下の URL を入力します：

```URL
https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
```

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/5.png"/></div>

**Tools-> Board-> Boards Manager...** に移動し、検索欄にキーワード **arduino-pico** を入力します。**Raspberry Pi Pico/RP2040/RP2350** の最新バージョンを選択してインストールします。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/arduino_2.png"/></div>

- **Step 4.** ボードとポートを選択します。シリアルポートが表示されない場合は、まず BOOT モードに入ってください。[Hardware Setup](#ハードウェアのセットアップ) を参照してください。

- **Step 5.** **"File --> Examples --->01.Basics --> Blink"** に移動して Blink のサンプルを開きます。

<div align="center"><img width ="550" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/select_blink.png"/></div>

**ボード**

ボードパッケージをインストールしたら、**Tools-> Board** に移動し、「**Seeed Studio XIAO RP2040**」を探して選択します。これで Arduino IDE 用の Seeed Studio XIAO RP2040 の設定は完了です。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/4.png"/></div>

**ポート**

Tools > Port に移動し、接続されている Seeed Studio XIAO RP2040 のシリアルポート名を選択します。通常は COM3 以降になります（**COM1** と **COM2** は通常、ハードウェアシリアルポート用に予約されています）。接続されている Seeed Studio XIAO RP2040 のシリアルポートには、かっこ内に「Seeed Studio XIAO RP2040」と記載されていることが多いです。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"/></div>

- **Step 6.** **Upload** ボタンをクリックして、Blink のサンプルコードをボードに書き込みます。

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl5.png"/></div>

書き込みが完了すると、ボード上のピン 25 の緑色（USER）LED が 1 秒ごとに点滅するはずです。もしそうなっていれば、おめでとうございます！接続は成功しており、これで Seeed Studio XIAO RP2040 を使ってさらに多くのプロジェクトに取り組むことができます。

:::note
Arduino プログラムの書き込みに失敗する場合は、「BOOT」ボタンを押し続けたまま「RUN」ボタンをクリックしてみてください。この時点で Seeed Studio XIAO RP2040 はブートモードに入り（コンピュータにリムーバブルディスクとしてマウントされます）、再度 Arduino プログラムを書き込むことができるようになります。
:::

## Seeed Studio XIAO RP2040 のピンマルチプレクシング

Seeed Studio XIAO RP2040 には、11 本のデジタルピン、4 本のアナログピン、11 本の PWM ピン、1 つの I2C インターフェース、1 つの UART インターフェース、1 つの SPI インターフェース、1 つの SWD ボンディングパッドインターフェースが搭載されています。これらのインターフェースに関するチュートリアルを提供し、プロジェクトに役立てられるようにします。

### デジタル

プッシュボタンをピン D0 に、LED をピン 25 に接続します。その後、以下のコードを書き込んで、プッシュボタンを使って LED の ON/OFF を制御します。

:::warning
Seeed Studio XIAO RP2040 の動作電圧は 3.3V であることに注意してください。誤ってセンサを 5V に接続すると、マザーボードが正常に動作しない可能性があります。
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

### アナログ

可変抵抗器をピン A0 に、LED をピン 25 に接続します。その後、以下のコードを書き込んで、可変抵抗器のつまみを回すことで LED の点滅間隔を制御します。

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

### シリアル

ピン D6 を UART の TX ピン、ピン D7 を UART の RX ピンとして使用し、「Hello World!」メッセージを送信します。

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

### 3 色インジケータ LED

XIAO RP2040 では、電源インジケータの横に 3 つの単色 LED が離れて配置されています。GPIO17 は赤色 LED、GPIO16 は緑色 LED、GPIO25 は青色 LED を制御します。マクロ定義は以下のとおりです。

```c
#define PIN_LED_R      (17u)
#define PIN_LED_G      (16u)
#define PIN_LED_B      (25u)
```

リファレンスコード

```cpp
/*
 * RP2040 RGB LED tutorial
 *
 * LED_R: GPIO17
 * LED_G: GPIO16
 * LED_B: GPIO25
 *
 * This example assumes each LED turns on when its GPIO is HIGH.
 * If your hardware is active-low, swap HIGH and LOW in setLed().
 */


// Turn on one LED at a time and turn the other two LEDs off.
void setLed(uint8_t pin)
{
  digitalWrite(PIN_LED_R, LOW);
  digitalWrite(PIN_LED_G, LOW);
  digitalWrite(PIN_LED_B, LOW);

  digitalWrite(pin, HIGH);
}

void setup()
{
  // Configure the three LED GPIO pins as outputs.
  pinMode(PIN_LED_R, OUTPUT);
  pinMode(PIN_LED_G, OUTPUT);
  pinMode(PIN_LED_B, OUTPUT);

  // Start with all LEDs turned off.
  digitalWrite(PIN_LED_R, LOW);
  digitalWrite(PIN_LED_G, LOW);
  digitalWrite(PIN_LED_B, LOW);
}

void loop()
{
  // Show red, green, and blue in sequence.
  setLed(PIN_LED_R);
  delay(500);

  setLed(PIN_LED_G);
  delay(500);

  setLed(PIN_LED_B);
  delay(500);
}
```

- LED が順番に点灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/third_led.gif" style={{width:400, height:'auto'}}/></div><br />

### RGB LED

:::caution

RGB LED を過度な明るさで動作させると、眼精疲労や目の損傷を引き起こす可能性があります。適切な目の保護具の使用を推奨します。

:::

XIAO RP2040 シリーズでは、GPIO11（NEOPIXEL_POWER）がイネーブルピンとして機能し、GPIO12（PIN_NEOPIXEL）が RGB カラー出力を制御します。使用するには、以下の手順に従ってください。

:::tip

XIAO RP2040 には SMD ラウンドレンズ RGB LED が搭載されており、XIAO RP2040 Plus には SMD フラットトップ RGB LED が搭載されています。

:::

まず、サードパーティライブラリを追加する必要があります。

- **Step 1.** Arduino IDE を開き、`Sketch > Include Library > Manage Libraries...` に移動してライブラリを検索します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Arduino Library Manager で **Adafruit_NeoPixel** ライブラリというキーワードを入力し、最新バージョンをインストールします。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" /></div>

- **Step 2.** コードを Arduino にコピーし、**Upload** ボタンをクリックして書き込みます。

```cpp
#include <Adafruit_NeoPixel.h>

#define NUMPIXELS 1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN_NEOPIXEL, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();

  pinMode(NEOPIXEL_POWER, OUTPUT);
  digitalWrite(NEOPIXEL_POWER, HIGH);

// Set overall brightness (0~255)
// Recommended eye-friendly range: 10~50
  pixels.setBrightness(50);
}


void loop() {

  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(15, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(103, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 242, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 23, 23));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(12, 66, 101));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.show();
  delay(500);
}
```

RGB LED はレインボーカラーを表示します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rgb_led.gif" /></div>

### I2C

ここでは Seeed Studio XIAO RP2040 を [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) と IIC で接続し、「Hello world」を表示します。

**接続**:

PIN 5 を SCL ピン、PIN 4 を SDA ピンとして使用します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **Step 1.** Arduino IDE を開き、`Sketch > Include Library > Manage Libraries...` に移動してライブラリを検索します。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Arduino Library Manager でキーワード "U8G2" を入力し、最新バージョンをインストールします。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl7.png" /></div>

- **Step 2.** コードを Arduino にコピーし、**Upload** ボタンをクリックして書き込みます。

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

結果は次のように表示されます：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png" alt="pir" width={600} height="auto" /></p>

### SPI

ここでは [Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html) を SPI で接続し、「Hello World」を表示します。OLED ディスプレイは IIC と SPI の両方の通信をサポートしていますが、デフォルトの通信モードは IIC です。開始する前に、必ず[IIC 機能を SPI 機能に変更](https://wiki.seeedstudio.com/ja/Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0/)してください。

**接続**:

PIN 8 を SCK ピン、PIN 9 を MISO ピン、PIN10 を MOSI ピンとして使用します。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl9.png" /></div>

- **Step 1.** Arduino IDE を開き、`Sketch > Include Library > Manage Libraries...` に移動してライブラリを検索します。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Arduino Library Manager でキーワード "Adafruit_GFX" を入力し、最新バージョンをインストールします。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/board10.png" /></div>

Arduino Library Manager でキーワード "Adafruit_SSD1306" を入力し、最新バージョンをインストールします。

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl11.png" /></div>

- **Step 2.** コードを Arduino にコピーし、**Upload** ボタンをクリックして書き込みます。

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

結果は次のように表示されます：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png" alt="pir" width={600} height="auto" /></p>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
