---
title: Seeed Studio XIAO RA4M1 入門ガイド
description: |
  XIAO RA4M1 - 32-bit Renesas RA4M1 搭載の最小開発ボード、Arduino IDE 対応、19 GPIO、RGB LED、CAN BUS、USB 2.0
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
slug: /getting_started_xiao_ra4m1
sku: 102010551,102010638
keywords:
  - XIAO
  - RA4M1
last_update:
  date: 08/15/2024
  author: Carla
sidebar_position: 0
createdAt: '2025-05-27'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/ja/getting_started_xiao_ra4m1/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Product Description -->

<div style={{ textAlign: 'center' }}>
  <img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{ width: 480, height: 'auto', "border-radius": '12.8px' }} />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
  </a>
</div><br></br>

## はじめに

XIAO RA4M1 は、Renesas の RA4M1 チップ（最大 48 MHz 動作の 32-bit ARM® Cortex®-M4 MCU）をクラシックな XIAO フォームファクタに統合したものです。この開発ボードは、256KB Flash、32KB SRAM、8KB EEPROM、USB 2.0 コネクタ、リセットおよびブートボタン、3 つの LED、14-bit A/D コンバータ、12-bit D/A コンバータ、CAN BUS インターフェースを備えています。オンボード充電回路と低消費電力モード（最小 45μA）により、バッテリー駆動アプリケーションに最適です。Arduino Uno R4 と同じ 32-bit R7FA4M1AB3CNE マイクロコントローラを共有しており、Arduino IDE と豊富な XIAO アクセサリにネイティブ対応しているため、電子工作プロジェクトの出発点として理想的です。

### 特長

<!-- Key Features with bullet -->

- **人気のマイクロコントローラを搭載：** Renesas RA4M1 を採用し、最大 48 MHz で動作する 32-bit ARM® Cortex®-M4 R7FA4M1AB3CNE MCU、256 KB の Flash メモリ、32 KB の SRAM を備えています。
- **充実したオンボードリソース：** 14-bit ADC、12-bit DAC、CAN BUS、USB 2.0、オンボード RGB LED を搭載しています。
- **新たに 8 本の IO を拡張：** 既存の XIAO ボードと比較して背面に 8 本の新しい IO ピンを追加（合計 19 GPIO）し、より複雑なアプリケーションを実現できます。
- **強力なセキュリティ機能：** ハードウェア暗号化、セキュアブート、鍵ストレージなどを内蔵し、アプリケーションのセキュリティを確保します。
- **ソフトウェア互換性：** Arduino IDE と完全互換で、シームレスなプロジェクト開発とプロトタイピングが可能です。
- **高効率な電源設計：** 4 つの動作モードを備え、ディープスリープ時の消費電流は最小 45μA、リチウムバッテリーの充電管理もサポートします。
- **親指サイズのコンパクト設計：** 21 x 17.8mm のサイズで、Seeed Studio のクラシックな XIAO フォームファクタを採用しており、省スペースな用途に最適です。
- **量産に適した設計：** すべての部品を表面側に配置した表面実装デバイス（SMD）設計で、両側にスタンプロールホールを備え、大量生産を容易にします。

### 仕様

<!-- Technical Specifications | Table | or bullet -->
| 製品 | XIAO RA4M1 |
|---------|-----------|
| **プロセッサ** | [RA4M1 - 32-bit Microcontrollers with 48MHz Arm Cortex-M4 and LCD Controller and Cap Touch for HMI - Renesas](https://www.renesas.com/us/en/products/microcontrollers-microprocessors/ra-cortex-m-mcus/ra4m1-32-bit-microcontrollers-48mhz-arm-cortex-m4-and-lcd-controller-and-cap-touch-hmi) <br/>48-MHz Arm® Cortex®-M4 コア（FPU 搭載） <br/>|
| **RAM** | 32 KB SRAM |
| **Flash** | 256 KB |
| **LED** | 1x ユーザー LED<br/>1x 電源 LED<br/>1x RGB LED |
| **インターフェース** | 19 IOs:<br/>6x アナログ<br/>19x デジタル<br/>2x IIC<br/>2x UART<br/>2x SPI |
| **ボタン** | 1x RESET ボタン<br/>1x BOOT ボタン |
| **セキュリティ** | AES128/256 |
| **低消費電力（Typ.）** | `42.6μA@3.7V` |
| **ソフトウェア互換性** | Arduino IDE |
| **動作温度** | -20°C~70°C |
| **寸法** | 21×17.8 mm |

### ハードウェア概要

作業を始める前に、製品の基本的なパラメータを把握しておくことが非常に重要です。次の表は、Seeed Studio XIAO RA4M1 の特性に関する情報を示しています。

<!-- 硬件相关 -->

<!-- 引脚等的定义 -->
<table>
 <tr>
     <th>XIAO RA4M1 前面表示図</th>
 </tr>
    <tr>
        <br />
        <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO-RA4M1-components.png" style={{width:380, height:'auto'}}/></div>
        <br />
    </tr>
    <tr>
        <th>XIAO RA4M1 ピン一覧</th>
    </tr>
    <tr>
        <br />
        <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO-RA4M1-pinout.png" style={{width:880, height:'auto'}}/></div>
        <br />
    </tr>
</table>

## **ピンマップ**
| XIAO ピン        | 機能         | チップピン  | 代替機能                  | 説明                          | Arduino 名 |
| :-------------: | :-------------: | :-------: | :---------------------------------: | :---------------------------------: | :----------: |
| 5V              | VBUS             |           |                                     | 電源入力/出力                   |             |
| GND             |                  |           |                                     |                                      |              |
| 3V3             | 3V3_OUT          |           |                                     | 電源出力                         |              |
| D0              | Analog          | P014      | AN009                               | GPIO, ADC                            |       0   |
| D1              | Analog          | P000      | AN000                               | GPIO, ADC                            |          1     |
| D2              | Analog          | P001      | AN001                               | GPIO, ADC                            |        2       |
| D3              | Analog          | P002      | AN002                              | GPIO, ADC                            |        3   |
| D4              | SDA1      | P206      |                                            | GPIO, I2C データ             |               4   |
| D5              | Analog,SCL1      | P100      |                                     | GPIO, I2C クロック, ADC                 |     5    |
| D6              | TXD2             | P302      | SDA2                                | GPIO, UART 送信,I2C              |    6     |
| D7              | RXD2             | P301      | SCL2                                | GPIO, UART 受信,I2C               |       7  |
| D8              | SPI1_SCK         | P111      |                                     | GPIO, SPI クロック                      |   8      |
| D9              | SPI1_MISO        | P110      | CRX0                                | GPIO, SPI データ,UART                  |   9      |
| D10             | SPI1_MOSI        | P109      | CTX0                                | GPIO, SPI データ,UART                  |    10    |
| D11             | RX9              | P408      |                                     | GPIO, UART                           |        |
| D12             | TX9              | P409      |                                     | GPIO,UART                            |        |
| D13             | GPIO             | P013      |                                     | GPIO                                 |        |
| D14             | GPIO             | P012      |                                     | GPIO                                 |        |
| D15             | TXD0             | P101      | SDA0,AN021,SPI0_MOSI                | GPIO, UART 送信, ADC,SPI,I2C     |       |
| D16             | RXD0             | P104      | SCL0,SPI0_MISO                      | GPIO,UART, SPI,I2C                   |       |
| D17             | CRX0             | P102      | AN020,SPI0_SCK                      | GPIO, UART , ADC,SPI                 |       |
| D18             | CTX0             | P103      | AN019                               | GPIO, SPI ,ADC,UART                  |       |
| ADC_BAT         |                  | P400      |                                     | BAT 電圧値を読み取る           |       |
| Reset           |                  | RES       |                                     | リセット                                |       |
| Boot            |                  | P201      |                                     | ブートモードに入る                      |       |
| RGB LED         |                  | P112      |                                     | RGB LED                              |    20   |
| RGB LED         |                  | P500      |                                     | RGB LED   EN                            |    21   |
| CHARGE_LED      |                  | VBUS      |                                     | CHG-LED_Red                          |       |
| USER_LED        |                  | P011      |                                     | ユーザーライト（Y）                      |    19    |
## はじめに

### ハードウェアの準備

次のものを準備してください：

- 1 x [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

<br></br>

:::tip
一部の USB ケーブルは電源供給のみで、データ転送ができません。USB ケーブルをお持ちでない場合や、お使いの USB ケーブルがデータ転送に対応しているか分からない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html) を確認してください。
:::

### ソフトウェアの準備

XIAO RA4M1 に推奨されるプログラミングツールは Arduino IDE です。そのため、ソフトウェアの準備として Arduino のインストールを完了する必要があります。

:::tip
初めて Arduino を使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

- **ステップ 1.** お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールします。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

- **ステップ 2.** Arduino アプリケーションを起動します。

- **ステップ 3.** Arduino IDE に RA4M1 ボードパッケージを追加します。

    **File > Preferences** に移動し、**"Additional Boards Manager URLs"** に以下の URL を入力します：
    *https://files.seeedstudio.com/arduino/package_renesas_1.2.0_index.json*

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/arduino_preference.png" style={{width:800, height:'auto'}}/></div>

    **Tools > Board > Boards Manager...** に移動し、検索ボックスにキーワード **RA4M1** を入力して、**Seeed Renesas Board** の最新バージョンを選択し、インストールします。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/board_manager.png" style={{width:600, height:'auto'}}/></div>
- **ステップ 4.** ボードとポートを選択します。

    Arduino IDE の上部で、左側の開発ボード欄に **xiao** と入力して検索し、XIAO_RA4M1 を選択して、ポートを選択します。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/select_port.png" style={{width:800, height:'auto'}}/></div>

## ブートローダーモード

誤ったプログラムを使用すると、XIAO のポートが認識されなくなったり、正しく動作しなくなることがあります。よくある問題としては次のようなものがあります：

- XIAO をコンピュータに接続しても、ポート番号が見つからない。
- XIAO は接続されてポート番号も表示されるが、プログラムの書き込みに失敗する。

上記 2 つの状況に遭遇した場合、XIAO をブートローダーモードにすることで、認識されないデバイスや書き込み失敗の問題のほとんどを解決できます。具体的な方法は次のとおりです：

- **方法 1.** XIAO RA4M1 上の `BOOT` ボタンを押したまま離さないでください。
- **方法 2.** `BOOT` ボタンを押したまま、データケーブルでコンピュータに接続します。コンピュータに接続した後で BOOT ボタンを離します。

## リセット

プログラムが異常に動作した場合、電源投入中に `Reset` を 1 回押すことで、XIAO にアップロード済みのプログラムを再実行させることができます。
電源投入時に `BOOT` キーを押し続け、その後 `Reset` キーを 1 回押すことで、ブートローダーモードに入ることもできます。

## 最初の Blink プログラムを実行する

ここまでで、XIAO RA4M1 の機能とハードウェアについて十分理解できたと思います。次に、最も簡単な Blink プログラムを例にして、XIAO RA4M1 で最初の点滅を行ってみましょう！

- **ステップ 1.** Arduino アプリケーションを起動します。
- **ステップ 2.** **File > Examples > 01.Basics > Blink** に移動し、プログラムを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink_code.png" style={{width:700, height:'auto'}}/></div>

- **ステップ 3.** ボードモデルを **XIAO RA4M1** に設定し、正しいポート番号を選択してプログラムを書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/choose_board.png" style={{width:700, height:'auto'}}/></div>

プログラムが正常に書き込まれると、次のような出力メッセージが表示され、XIAO RA4M1 の右側にあるオレンジ色の LED が点滅しているのが確認できます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink.gif" style={{width:700, height:'auto'}}/></div>

おめでとうございます。これで XIAO RA4M1 向けのプログラムの作成と書き込み方法を習得しました！
:::note
XIAO RA4M1 上のユーザー LED ピンが High レベルに設定されているときのみ LED は消灯し、ピンが Low レベルに設定されているときのみ点灯します。
:::

## RGB LED で遊ぶ

XIAO RA4M1 には制御可能な内蔵 RGB LED が搭載されています。以下は、LED の色を赤・緑・青の間で滑らかに変化させる例です。

- **ステップ 1.** `Adafruit_NeoPixel` ライブラリをダウンロードします

**Sketch > Include Liarbry > Manage Libraries...** に移動し、**Adafruit_NeoPixel** を検索して、最新バージョンをインストールします。

- **ステップ 2.** 以下のコードを新しいスケッチにコピーします：

```cpp
#include <Adafruit_NeoPixel.h>

#define LED_PIN RGB_BUILTIN  // Define the pin for the built-in RGB LED
#define NUM_PIXELS 1         // Number of WS2812 LEDs

Adafruit_NeoPixel pixels(NUM_PIXELS, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pinMode(PIN_RGB_EN, OUTPUT); // Set up the power pin
  digitalWrite(PIN_RGB_EN, HIGH); //Turn on power to the LED
  pixels.begin();  // Initialize the NeoPixel library
}

void loop() {
    // Transition from Red to Green
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(255 - i, i, 0));  // Red decreases, Green increases
    pixels.show();
    delay(10);  // Adjust delay for smoothness
  }

  // Transition from Green to Blue
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(0, 255 - i, i));  // Green decreases, Blue increases
    pixels.show();
    delay(10);  // Adjust delay for smoothness
  }

  // Transition from Blue to Red
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(i, 0, 255 - i));  // Blue decreases, Red increases
    pixels.show();
    delay(10);  // Adjust delay for smoothness
  }
}

```

- **ステップ 3.** ボードモデルを **XIAO RA4M1** に設定し、正しいポート番号を選択してプログラムを書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/rgb_led.gif" style={{width:600, height:'auto'}}/></div>

## バッテリーと電源管理

追加のコンポーネントなしでバッテリー電圧を読み取ることは可能でしょうか？はい、XIAO RA4M1 ならこれまでになく簡単です。以前の XIAO ファミリー、例えば [XIAO ESP32C3](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage) では、バッテリー電圧を読み取るには抵抗を使って手動で A0 に接続する必要がありました。

しかし XIAO RA4M1 では、このプロセスが簡略化されています。`BAT_DET_PIN/P105` ピンを直接使用してバッテリー電圧レベルを読み取ることができ、設計と開発を効率化できます。バッテリーレベルの読み取りを有効にするには、`BAT_READ_EN/P400` ピンを High に設定する必要があることを忘れないでください。

- **ステップ 1.** ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAO エクスパンションボード上の OLED ディスプレイは I2C プロトコルを使用しており、ボード上の I2C 回路を介して XIAO の I2C インターフェースに接続されています。そのため、XIAO をエクスパンションボードに直接挿し込み、画面に表示させるプログラムを書くことができます。

- **ステップ 2.** u8g2 ライブラリをインストールします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

- **ステップ 3.** コードをコピーして Ardiono IDE に貼り付けます。

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ WIRE_SCL_PIN, /* data=*/ WIRE_SDA_PIN, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

#define enablePin  BAT_READ_EN  // Pin for enabling battery voltage reading
#define adcPin BAT_DET_PIN     // Analog input pin (GPIO29 in your case)
const float referenceVoltage = 3.3;  // Reference voltage for the ADC
const float voltageDivider = 2.0;    // Voltage divider factor

void setup() {
  Serial.begin(9600);          // Initialize serial communication at 9600 baud
  pinMode(enablePin, OUTPUT);  // Set the enable pin as an output
  digitalWrite(enablePin, HIGH); // Set the pin high to enable battery voltage reading
  u8x8.begin();
  u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180
  u8x8.setFont(u8x8_font_chroma48medium8_r);
}

void loop() {
  int rawValue = analogRead(adcPin);    // Read the analog input value
  float voltage = rawValue * (referenceVoltage / 1023.0) * voltageDivider; // Calculate the voltage
  // Print the raw value and the calculated voltage
  u8x8.setCursor(0, 0);
  u8x8.print("Raw value:0x");
  u8x8.print(rawValue, HEX);
  u8x8.setCursor(0, 2);
  u8x8.print("Voltage:");
  u8x8.print(voltage, 2);
  u8x8.print("V");

  delay(500); // Delay for 500 milliseconds
}

```

- **ステップ 4.** ボードモデルを **XIAO RA4M1** に選択し、正しいポート番号を選択してプログラムをアップロードします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/voltage.png" style={{width:600, height:'auto'}}/></div>

## リソース

**ハードウェア設計**
- **📄[データシート]** [Renesas RA4M1 Datasheet](https://www.renesas.com/us/en/document/dst/ra4m1-group-datasheet )
- **📄[回路図]** [XIAO RA4M1 Schematic](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO%20RA4M1%20V1.01_SCH_PDF_260114%20.pdf.pdf )
- **🗃️[PCB 設計ファイル]** [XIAO RA4M1 KiCad Project](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/202003977_XIAO%20RA4M1%20v1.01_SCH&PCB_260114.zip )
- **🗃️[PCB ライブラリ]** 
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
## トラブルシューティング

### Q1: ピンをはんだ付けする際に注意すべき点は何ですか

XIAO RA4M1 は非常に小型であるため、ヘッダをはんだ付けする際は注意してください。異なるピン同士をくっつけないようにし、シールドや他の部品にはんだが付着しないようにしてください。そうしないと、XIAO が短絡したり正常に動作しなくなる可能性があり、その結果生じた損害はユーザーの責任となります。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
