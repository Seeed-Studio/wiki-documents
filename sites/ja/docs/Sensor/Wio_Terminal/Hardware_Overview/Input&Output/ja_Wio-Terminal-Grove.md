---
description: Groveポート
title: Groveポート
keywords:
- Wio_terminal Hardware_Overview
- Input&Output
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Grove
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Groveポート

このリポジトリでは、Wio Terminalを[**Groveエコシステム**](https://www.seeedstudio.com/grove.html)と組み合わせて使用する方法を紹介します。

Groveを活用することで、より簡単な接続でプロトタイプを迅速に作成することができます！

## Wio TerminalとGrove - TDSセンサー

このセクションでは、[Grove - TDSセンサー](https://wiki.seeedstudio.com/ja/Grove-TDS-Sensor/)をWio Terminalと組み合わせて使用し、リアルタイムのTDS値を折れ線グラフで表示する方法を紹介します。

### ライブラリのインストール

1. [LCD](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/)ライブラリをインストールします。

2. [Linechart](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Linecharts/)ライブラリをインストールします。

### 完全なコード

Grove TDSセンサーをWio TerminalのGrove D/Aピンに接続し、コードをアップロードして結果を確認してください！

```cpp
#include"seeed_line_chart.h" //ライブラリをインクルード
TFT_eSPI tft;

#define max_size 50 //データの最大サイズ
doubles data; //データを格納するためのdoubles型を初期化
TFT_eSprite spr = TFT_eSprite(&tft);  // スプライト

#define sensorPin A0 //アナログピン

int sensorValue = 0;
float tdsValue = 0;
float Voltage = 0;

void setup() {
    pinMode(sensorPin, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_WHITE);

    sensorValue = analogRead(sensorPin);
    Voltage = sensorValue*5/1024.0; //アナログ読み取り値を電圧に変換
    tdsValue=(133.42*Voltage*Voltage*Voltage - 255.86*Voltage*Voltage + 857.39*Voltage)*0.5; //電圧値をTDS値に変換

    if (data.size() == max_size) {
        data.pop(); //最初の読み取り変数を削除
    }
    data.push(tdsValue); //読み取り変数をデータに格納

    //折れ線グラフのタイトル設定
    auto header =  text(0, 0)
                .value("TDS Reading")
                .align(center)
                .valign(vcenter)
                .width(tft.width())
                .thickness(3);

    header.height(header.font_height() * 2);
    header.draw(); //ヘッダーの高さはフォントの高さの2倍

  //折れ線グラフの設定
    auto content = line_chart(20, header.height()); //(x,y) 折れ線グラフの開始位置
         content
                .height(tft.height() - header.height() * 1.5) //折れ線グラフの実際の高さ
                .width(tft.width() - content.x() * 2) //折れ線グラフの実際の幅
                .based_on(0.0) //y軸の開始点（float型で指定）
                .show_circle(true) //各点に円を描画（デフォルトはオン）
                .value(data) //折れ線グラフにデータを渡す
                .color(TFT_RED) //線の色を設定
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
}
```

## Wio TerminalとGrove - OLEDディスプレイ

Wio Terminalに追加の画面が必要な場合、**Grove - OLEDディスプレイ 0.96"**は最適な選択肢です。グラフィックやデータを表示するために使用でき、Wio Terminalにより多くのインタラクティブな機能を追加できます。

### ライブラリのインストール

1. Arduino IDEの**ライブラリマネージャ**から**U8g2**ライブラリをインストールします。**スケッチ** -> **ライブラリを含める** -> **ライブラリを管理...**を選択し、ライブラリマネージャで`U8g2`を検索してインストールします。

### U8g2の初期化

u8g2のソフトウェアI2Cを使用してOLEDディスプレイを初期化し、SCLをクロック、SDAをデータとして使用します：

```cpp
U8G2_SSD1306_128X64_NONAME_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);
```

#### 使用方法

1. `u8g2.firstPage()`を呼び出します。

2. do-whileループを開始します。

3. ループ内で通常の描画コマンドを使用して何かを描画します。

4. `u8g2.nextPage()`がtrueを返す限りループを続けます。

詳細については、[u8g2](https://github.com/olikraus/u8g2/wiki)をご覧ください。

### 完全なコード

Grove OLEDディスプレイ 0.96"をGrove I2Cピンに接続し、結果を確認してください！

```cpp
#include <U8g2lib.h>

U8G2_SSD1306_128X64_NONAME_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

const unsigned char WAVE[] PROGMEM = {
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0xF0,0x00,0xFF,0x00,0x0F,0xF0,0x00,
  0xFC,0x03,0xFF,0xC0,0x3F,0xFC,0x00,
  0xFE,0x07,0xFF,0xE0,0x7F,0xFE,0x00,
  0x1F,0xFF,0x81,0xFF,0xF8,0x1F,0xC0,
  0x0F,0xFF,0x00,0xFF,0xF0,0x0F,0xC0,
  0x03,0xFC,0x00,0x3F,0xC0,0x03,0xC0,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0xE0,0x00,0x7E,0x00,0x07,0xE0,0x00,
  0xF8,0x01,0xFF,0x80,0x1F,0xF8,0x00,
  0xFC,0x03,0xFF,0xC0,0x3F,0xFC,0x00,
  0xFF,0x0F,0xFF,0xF0,0xFF,0xFF,0x00,
  0x1F,0xFF,0x81,0xFF,0xF8,0x1F,0xC0,
  0x07,0xFE,0x00,0x7F,0xE0,0x07,0xC0,
  0x01,0xF8,0x00,0x1F,0x80,0x01,0xC0,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0xF0,0x00,0xFF,0x00,0x0F,0xF0,0x00,
  0xF8,0x01,0xFF,0x80,0x1F,0xF8,0x00,
  0xFE,0x07,0xFF,0xE0,0x7F,0xFE,0x00,
  0x3F,0xFF,0xC3,0xFF,0xFC,0x3F,0xC0,
  0x0F,0xFF,0x00,0xFF,0xF0,0x0F,0xC0,
  0x07,0xFE,0x00,0x7F,0xE0,0x07,0xC0,
  0x00,0xF0,0x00,0x0F,0x00,0x00,0xC0,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x80,0x00,0x18,0x00,0x01,0x80,0x00,
  0xF0,0x00,0xFF,0x00,0x0F,0xF0,0x00,
  0xFC,0x03,0xFF,0xC0,0x3F,0xFC,0x00,
  0xFF,0x0F,0xFF,0xF0,0xFF,0xFF,0x00,
  0x1F,0xFF,0x81,0xFF,0xF8,0x1F,0xC0,
  0x0F,0xFF,0x00,0xFF,0xF0,0x0F,0xC0,
  0x03,0xFC,0x00,0x3F,0xC0,0x03,0xC0,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00
};

void setup() {
  u8g2.begin();
}

void loop() {
  u8g2.firstPage();
    do {
      u8g2.setFont(u8g2_font_t0_16b_mr);
      u8g2.drawXBMP(40, 0, 50, 50, WAVE);
      u8g2.setCursor(20, 60);
      u8g2.print("Wio Terminal");
    } while (u8g2.nextPage());
}
```

## Wio Terminal と Grove - 温度センサー

このセクションでは、Wio Terminal を使用して [Grove - Temperature Sensor](https://wiki.seeedstudio.com/ja/Grove-Temperature_Sensor_V1.2/) を接続し、周囲の温度をリアルタイムで表示する方法を紹介します。

### ライブラリのインストール

1. [LCD](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/) ライブラリをインストールします。

2. [Linechart](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Histogram/) ライブラリをインストールします。

### 完全なコード

Grove Temperature Sensor を Wio Terminal の Grove D/A ピンに接続し、コードをアップロードして結果を確認してください！

```cpp
#include"seeed_line_chart.h" // ライブラリをインクルード
#include <math.h>

TFT_eSPI tft;

#define max_size 50 // データの最大サイズ
doubles data; // データを格納するための doubles 型を初期化
TFT_eSprite spr = TFT_eSprite(&tft);  // スプライト 

const int B = 4275;               // サーミスタの B 値
const int R0 = 100000;            // R0 = 100k
const int pinTempSensor = A0;     // Grove - Temperature Sensor を A0 に接続

void setup() {
    pinMode(pinTempSensor, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_DARKCYAN);

    int a = analogRead(pinTempSensor);
    float R = 1023.0/a-1.0;
    R = R0*R;

    float temperature = 1.0/(log(R/R0)/B+1/298.15)-273.15; // データシートに基づいて温度に変換

    if (data.size() == max_size) {
        data.pop(); // 最初の読み取り変数を削除
    }
    data.push(temperature); // 読み取った変数をデータに格納

    // 折れ線グラフのタイトル設定
    auto header =  text(0, 0)
                .value("Temperature Reading")
                .align(center)
                .color(TFT_WHITE)
                .valign(vcenter)
                .width(tft.width())
                .thickness(2);

    header.height(header.font_height() * 2);
    header.draw(); // ヘッダーの高さはフォントの高さの2倍

  // 折れ線グラフの設定
    auto content = line_chart(20, header.height()); // 折れ線グラフの開始位置 (x, y)
         content
                .height(tft.height() - header.height() * 1.5) // 折れ線グラフの実際の高さ
                .width(tft.width() - content.x() * 2) // 折れ線グラフの実際の幅
                .based_on(0.0) // y軸の開始点 (float型で指定)
                .show_circle(true) // 各点に円を描画 (デフォルトはオン)
                .y_role_color(TFT_WHITE)
                .x_role_color(TFT_WHITE)
                .value(data) // データを折れ線グラフに渡す
                .color(TFT_RED) // 折れ線の色を設定
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
}
```

## Wio Terminal と Grove - GPSセンサー

このセクションでは、Wio Terminal を使用して Grove - GPS Sensor を接続し、リアルタイムのGPS情報を取得する方法を紹介します。センサー自体はNMEA GPSデータを出力し、TinyGPSPlusライブラリを使用してデータを読み取り可能な情報に解析します。

### ライブラリのインストール

1. [TinyGPSPlus ライブラリ](https://github.com/mikalhart/TinyGPSPlus) をインストールします。

### 完全なコード

Grove GPS Sensor を Wio Terminal の Grove I2C ピン (左側) に接続し、コードをアップロードしてシリアルモニター (ボーレート: 9600) で結果を確認してください！

```cpp
#include <TinyGPS++.h>
#include <wiring_private.h>

static const uint32_t GPSBaud = 9600;

// TinyGPS++ オブジェクト
TinyGPSPlus gps;

// GPSデバイスへのシリアル接続 - 左側のGroveコネクタ。
// 左側のGroveコネクタは40ピンコネクタのI2C1とピンを共有します。
static Uart Serial3(&sercom3, PIN_WIRE_SCL, PIN_WIRE_SDA, SERCOM_RX_PAD_1, UART_TX_PAD_0);

void setup()
{
  Serial.begin(115200);

  Serial3.begin(GPSBaud);
  pinPeripheral(PIN_WIRE_SCL, PIO_SERCOM_ALT);
  pinPeripheral(PIN_WIRE_SCL, PIO_SERCOM_ALT);
}
 
void loop()
{
  // 新しい文が正しくエンコードされるたびに情報を表示します。
  while (Serial3.available() > 0)
    if (gps.encode(Serial3.read()))
      displayInfo();
 
  if (millis() > 5000 && gps.charsProcessed() < 10)
  {
    Serial.println(F("No GPS detected: check wiring."));
    while(true);
  }
}

void displayInfo()
{
  Serial.print(F("Location: ")); 
  if (gps.location.isValid())
  {
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.print(F("  Date/Time: "));
  if (gps.date.isValid())
  {
    Serial.print(gps.date.month());
    Serial.print(F("/"));
    Serial.print(gps.date.day());
    Serial.print(F("/"));
    Serial.print(gps.date.year());
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.print(F(" "));
  if (gps.time.isValid())
  {
    if (gps.time.hour() < 10) Serial.print(F("0"));
    Serial.print(gps.time.hour());
    Serial.print(F(":"));
    if (gps.time.minute() < 10) Serial.print(F("0"));
    Serial.print(gps.time.minute());
    Serial.print(F(":"));
    if (gps.time.second() < 10) Serial.print(F("0"));
    Serial.print(gps.time.second());
    Serial.print(F("."));
    if (gps.time.centisecond() < 10) Serial.print(F("0"));
    Serial.print(gps.time.centisecond());
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.println();
}

void SERCOM3_0_Handler()
{
  Serial3.IrqHandler();
}
void SERCOM3_1_Handler()
{
  Serial3.IrqHandler();
}
void SERCOM3_2_Handler()
{
  Serial3.IrqHandler();
}
void SERCOM3_3_Handler()
{
  Serial3.IrqHandler();
}
```