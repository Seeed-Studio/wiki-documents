---
title: Seeed Studio XIAO RA4M1 入門ガイド
description: |
  XIAO RA4M1 - 32ビット Renesas RA4M1 ベースの最小開発ボード、Arduino IDE 対応、19 GPIO、RGB LED、CAN BUS、USB 2.0
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
slug: /ja/getting_started_xiao_ra4m1
sku: 102010551,102010638
keywords:
  - XIAO
  - RA4M1
last_update:
  date: 08/15/2024
  author: Carla
sidebar_position: 0
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

XIAO RA4M1 は、Renesas の RA4M1 チップ（最大 48 MHz の 32 ビット ARM® Cortex®-M4 MCU）を従来の XIAO フォームファクターに統合しています。この開発ボードは、256KB Flash、32KB SRAM、8KB EEPROM、USB 2.0 コネクタ、リセットおよびブートボタン、3 つの LED、14 ビット A/D コンバータ、12 ビット D/A コンバータ、CAN BUS インターフェースを提供します。オンボード充電回路と低消費電力モード（最低 45μA）により、バッテリー駆動アプリケーションに最適です。Arduino Uno R4 と同じ 32 ビット R7FA4M1AB3CNE マイクロコントローラを共有し、Arduino IDE と豊富な XIAO アクセサリとネイティブに互換性があり、電子プロジェクトの完璧な出発点となります。

### 特徴

<!-- Key Features with bullet -->

- **人気のマイクロコントローラを搭載：** Renesas RA4M1、最大 48 MHz で動作する 32 ビット ARM® Cortex®-M4 R7FA4M1AB3CNE MCU、256 KB の Flash メモリ、32 KB の SRAM を搭載。
- **注目のオンボードリソース：** 14 ビット ADC、12 ビット DAC、CAN BUS、USB 2.0、オンボード RGB LED を装備。
- **8 つの新しい IO を拡張：** 従来の XIAO ボードと比較して背面に 8 つの新しい IO ピンを追加（合計 19 GPIO）、より複雑なアプリケーションを可能にします。
- **強力なセキュリティ機能：** 内蔵ハードウェア暗号化、セキュアブート、キーストレージ、その他の機能によりアプリケーションのセキュリティを確保。
- **ソフトウェア互換性：** Arduino IDE と完全互換で、シームレスなプロジェクト開発とプロトタイピングが可能。
- **効率的な電力設計：** ディープスリープ時の消費電力が最低 45μA の 4 つの動作モードを提供し、リチウムバッテリー充電管理をサポート。
- **コンパクトな親指サイズ設計：** 21 x 17.8mm のサイズで、Seeed Studio の従来の XIAO フォームファクターを採用し、スペースを重視するアプリケーションに最適。
- **量産対応：** 表面実装デバイス（SMD）設計で、すべてのコンポーネントが前面にあり、両側にスタンプホールがあり、効率的な大量生産を促進。

### 仕様

<!-- Technical Specifications | Table | or bullet -->

<table>
    <thead>
        <tr>
            <th>製品</th>
            <th>XIAO RA4M1</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="2">プロセッサ</th>
            <td><a href="https://www.renesas.com/us/en/products/microcontrollers-microprocessors/ra-cortex-m-mcus/ra4m1-32-bit-microcontrollers-48mhz-arm-cortex-m4-and-lcd-controller-and-cap-touch-hmi">Renesas RA4M1</a></td>
        </tr>
        <tr>
            <td>48-MHz Arm® Cortex®-M4 コア</td>
        </tr>
        <tr>
            <th>RAM</th>
            <td>32 KB SRAM</td>
        </tr>
        <tr>
            <th>Flash</th>
            <td>256 KB</td>
        </tr>
        <tr>
            <th>LED</th>
            <td>1 ユーザー LED、1 電源 LED、1 RGB LED</td>
        </tr>
        <tr>
            <th>インターフェース</th>
            <td>19 ピン：14x アナログ、19x デジタル、2x IIC、2x UART、2x SPI</td>
        </tr>
        <tr>
            <th>ボタン</th>
            <td>1 RESET ボタン、1 BOOT ボタン</td>
        </tr>
        <tr>
            <th>セキュリティ</th>
            <td>AES128/256</td>
        </tr>
        <tr>
            <th>低消費電力</th>
            <td>45μA</td>
        </tr>
        <tr>
            <th>ソフトウェア互換性</th>
            <td>Arduino IDE</td>
        </tr>
        <tr>
            <th>動作温度</th>
            <td>-20°C-70°C</td>
        </tr>
        <tr>
            <th>寸法</th>
            <td>21x17.8 mm</td>
        </tr>
        <tr>
            <th>電源</th>
            <td>Type-C: 5V<br />BAT: 3.8V</td>
        </tr>
    </tbody>
</table>

### ハードウェア概要

すべてを始める前に、製品の基本的なパラメータを把握することが非常に重要です。以下の表は、Seeed Studio XIAO RA4M1 の特性に関する情報を提供します。

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
        <th>XIAO RA4M1 ピンリスト</th>
    </tr>
    <tr>
        <br />
        <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO-RA4M1-pinout.png" style={{width:880, height:'auto'}}/></div>
        <br />
    </tr>
</table>

## **ピンマップ**
| XIAO ピン        | 機能         | チップピン  | 代替機能                  | 説明                          |
| :-------------: | :-------------: | :-------: | :---------------------------------: | :---------------------------------: |
| 5V              | VBUS             |           |                                     | 電源入力/出力                   |
| GND             |                  |           |                                     |                                      |
| 3V3             | 3V3_OUT          |           |                                     | 電源出力                         |
| D0              | アナログ          | P014      | ADC09                               | GPIO、ADC                            |
| D1              | アナログ          | P000      | ADC00                               | GPIO、ADC                            |
| D2              | アナログ          | P001      | ADC01                               | GPIO、ADC                            |
| D3              | アナログ          | P002      | ADC02                               | GPIO、ADC                            |
| D4              | アナログ、SDA1      | P206      |                                     | GPIO、I2C データ、ADC                  |
| D5              | アナログ、SCL1      | P100      |                                     | GPIO、I2C クロック、ADC                 |
| D6              | TXD2             | P302      | SDA2                                | GPIO、UART 送信、I2C              |
| D7              | RXD2             | P301      | SCL2                                | GPIO、UART 受信、I2C               |
| D8              | SPI1_SCK         | P111      |                                     | GPIO、SPI クロック                      |
| D9              | SPI1_MISO        | P110      | CRX0                                | GPIO、SPI データ、UART                  |
| D10             | SPI1_MOSI        | P109      | CTX0                                | GPIO、SPI データ、UART                  |
| D11             | RX9              | P408      |                                     | GPIO、UART                           |
| D12             | TX9              | P409      |                                     | GPIO、UART                            |
| D13             | GPIO             | P013      |                                     | GPIO                                 |
| D14             | GPIO             | P012      |                                     | GPIO                                 |
| D15             | TXD0             | P101      | SDA0,ADC21,SPI0_MOSI                | GPIO、UART 送信、ADC、SPI、I2C     |
| D16             | RXD0             | P104      | SCL0,SPI0_MISO                      | GPIO、UART、SPI、I2C                   |
| D17             | CRX0             | P102      | ADC20,SPI0_SCK                      | GPIO、UART、ADC、SPI                 |
| D18             | CTX0             | P103      | ADC19                               | GPIO、SPI、ADC、UART                  |
| ADC_BAT         |                  | P400      |                                     | BAT 電圧値を読み取り           |
| Reset           |                  | RES       |                                     | RESET                                |
| Boot            |                  | P201      |                                     | ブートモードに入る                      |
| RGB LED         |                  | P112      |                                     | RGB LED                              |
| CHARGE_LED      |                  | VBUS      |                                     | CHG-LED_赤                          |
| USER_LED        |                  | P011      |                                     | ユーザーライト（黄）|
## 入門ガイド

### ハードウェアの準備

以下を準備する必要があります：

- 1 x [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

<br></br>

:::tip
一部の USB ケーブルは電源供給のみでデータ転送ができません。USB ケーブルをお持ちでない場合、またはお使いの USB ケーブルがデータ転送可能かわからない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html) をご確認ください。
:::

### ソフトウェアの準備

XIAO RA4M1 の推奨プログラミングツールは Arduino IDE です。そのため、ソフトウェア準備の一環として、Arduino のインストールを完了する必要があります。

:::tip
Arduino を初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

- **ステップ 1.** お使いのオペレーティングシステムに応じて、Arduino IDE の安定版をダウンロードしてインストールします。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
</div>

- **ステップ 2.** Arduino アプリケーションを起動します。

- **ステップ 3.** Arduino IDE に RA4M1 ボードパッケージを追加します。

    **File > Preferences** に移動し、**"Additional Boards Manager URLs"** に以下の URL を入力します：
    *https://files.seeedstudio.com/arduino/package_renesas_1.2.0_index.json*

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/arduino_preference.png" style={{width:800, height:'auto'}}/></div>

    **Tools > Board > Boards Manager...** に移動し、検索ボックスに **RA4M1** というキーワードを入力し、**Seeed Renesas Board** の最新バージョンを選択してインストールします。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/board_manager.png" style={{width:600, height:'auto'}}/></div>
- **ステップ 4.** ボードとポートを選択します。

    Arduino IDE の上部で、左側の開発ボードで **xiao** を検索し、XIAO_RA4M1 を選択し、ポートを直接選択します。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/select_port.png" style={{width:800, height:'auto'}}/></div>

## BootLoader モード

時々、間違ったプログラムを使用すると、XIAO がポートを失ったり、正しく機能しなくなったりすることがあります。よくある問題には以下があります：

- XIAO がコンピュータに接続されているが、ポート番号が見つからない。
- XIAO が接続され、ポート番号が表示されるが、プログラムのアップロードが失敗する。

上記の 2 つの状況に遭遇した場合、XIAO を BootLoader モードにすることで、認識されないデバイスやアップロード失敗の問題のほとんどを解決できます。具体的な方法は：

- **方法 1.** XIAO RA4M1 の `BOOT` ボタンを離さずに押し続けます。
- **方法 2.** `BOOT` ボタンを押し続けたまま、データケーブルでコンピュータに接続します。コンピュータに接続した後、BOOT ボタンを離します。

## リセット

プログラムが異常に動作している場合、電源投入時に `Reset` を一度押すことで、XIAO にアップロードされたプログラムを再実行させることができます。
電源投入時に `BOOT` キーを押し続けてから `Reset` キーを一度押すことで、BootLoader モードに入ることもできます。

## 最初の Blink プログラムを実行する

ここまでで、XIAO RA4M1 の機能とハードウェアについて十分理解できたと思います。次に、最もシンプルな Blink プログラムを例に、XIAO RA4M1 の最初の点滅を実行してみましょう！

- **ステップ 1.** Arduino アプリケーションを起動します。
- **ステップ 2.** **File > Examples > 01.Basics > Blink** に移動し、プログラムを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink_code.png" style={{width:700, height:'auto'}}/></div>

- **ステップ 3.** ボードモデルを **XIAO RA4M1** に選択し、正しいポート番号を選択してプログラムをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/choose_board.png" style={{width:700, height:'auto'}}/></div>

プログラムが正常にアップロードされると、以下の出力メッセージが表示され、XIAO RA4M1 の右側にあるオレンジ色の LED が点滅しているのを観察できます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink.gif" style={{width:700, height:'auto'}}/></div>

おめでとうございます！XIAO RA4M1 のプログラムの書き方とアップロード方法を学びました！
:::note
LED は、XIAO RA4M1 のユーザー LED ピンがハイレベルに設定されたときのみオフになり、ピンがローレベルに設定されたときのみオンになります。
:::

## RGB LED で遊ぶ

XIAO RA4M1 には制御可能な内蔵 RGB LED が搭載されています。以下は、LED の色を赤、緑、青の間でスムーズに変化させる例です。

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

- **ステップ 3.** ボードモデルを **XIAO RA4M1** に選択し、正しいポート番号を選択してプログラムをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/rgb_led.gif" style={{width:600, height:'auto'}}/></div>

## バッテリーと電源管理

追加のコンポーネントなしでバッテリー電圧を読み取ることは可能でしょうか？はい、XIAO RA4M1 では、これまで以上に簡単になりました。以前の XIAO ファミリーメンバー、例えば [XIAO ESP32C3](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage) では、バッテリー電圧を読み取るために抵抗を使って A0 に手動で接続する必要がありました。

しかし、XIAO RA4M1 では、このプロセスが簡素化されています。`BAT_DET_PIN/P105` ピンを直接使用してバッテリー電圧レベルを読み取ることができ、設計と開発を合理化できます。バッテリーレベルの読み取りを有効にするために `BAT_READ_EN/P400` ピンをハイに設定することが必要であることを忘れないでください。

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

XIAO 拡張ボード上の OLED ディスプレイは I2C プロトコルを使用し、ボード上の I2C 回路を通じて XIAO の I2C インターフェースに接続されています。したがって、XIAO を拡張ボードに直接差し込んで、画面にコンテンツを表示するようにプログラムできます。

- **ステップ 2.** u8g2 ライブラリをインストールします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

- **ステップ 3.** コードをコピーして Arduino IDE に貼り付けます。

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

- 📄 **[PDF]** [RA4M1 データシート](https://www.renesas.com/us/en/document/dst/ra4m1-group-datasheet)
- 📄 **[PDF]** [Seeed Studio XIAO RA4M1 回路図](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO-RA4M1_SCH_PDF_v1.0_240719.pdf)
- 📄 **[ZIP]** [KiCAD ライブラリ](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO-RA4M1_SCH%26PCB_v1.0_240719.zip)
<!-- - 🗃️ **[ZIP]** [Seeed Studio XIAO RA4M1 KiCAD file](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip) -->
<!-- - 🗃️ **[ZIP]** [Seeed Studio XIAO RA4M1 Eagle file](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO_RP2040_v1.22_SCH&PCB.zip) -->
<!-- - 📄 **[DXF]** [Seeed Studio XIAO RA4M1 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO-RP2040-DXF.zip) -->
<!-- - 📄 **[LBR]** [Seeed Studio XIAO RA4M1 Eagle footprint](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr) -->
<!-- - 📄 **[XLSX]** [Seeed Studio XIAO RA4M1 pinout sheet](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO-RP2040-pinout_sheet.xlsx) -->
- 🔗 **[Kicad]** [Seeed Studio XIAO RA4M1 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## トラブルシューティング

### Q1: ピンをはんだ付けする際に注意すべき点は何ですか

XIAO RA4M1 の小型サイズのため、ヘッダーをはんだ付けする際は注意してください。異なるピン同士をくっつけたり、シールドや他の部品にはんだを付着させたりしないでください。そうしないと、XIAO がショートしたり正常に動作しなくなる可能性があり、これによって生じる結果はユーザーの責任となります。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
