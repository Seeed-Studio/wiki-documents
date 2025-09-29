---
title: Seeed Studio XIAO RA4M1 入門ガイド
description: |
  XIAO RA4M1 - 32ビットRenesas RA4M1ベースの最小開発ボード、Arduino IDE対応、19 GPIO、RGB LED、CAN BUS、USB 2.0
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
slug: /ja/getting_started_xiao_ra4m1
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
  <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
  </a>
</div><br></br>

## はじめに

XIAO RA4M1は、RenesasのRA4M1チップ（最大48MHzの32ビットARM® Cortex®-M4 MCU）を従来のXIAOフォームファクターに統合しています。この開発ボードは、256KB Flash、32KB SRAM、8KB EEPROM、USB 2.0コネクタ、リセットおよびブートボタン、3つのLED、14ビットA/Dコンバータ、12ビットD/Aコンバータ、CAN BUSインターフェースを提供します。オンボード充電回路と低消費電力モード（最低45μA）を備えており、バッテリー駆動アプリケーションに最適です。Arduino Uno R4と同じ32ビットR7FA4M1AB3CNEマイクロコントローラを共有しており、Arduino IDEと豊富なXIAOアクセサリとネイティブに互換性があるため、エレクトロニクスプロジェクトの完璧な出発点となります。

### 特徴

<!-- Key Features with bullet -->

- **人気のマイクロコントローラを搭載：** Renesas RA4M1を搭載、最大48MHzで動作する32ビットARM® Cortex®-M4 R7FA4M1AB3CNE MCU、256KBのFlashメモリ、32KBのSRAMを搭載。
- **注目のオンボードリソース：** 14ビットADC、12ビットDAC、CAN BUS、USB 2.0、オンボードRGB LEDを装備。
- **8つの新しいIOを拡張：** 従来のXIAOボードと比較して背面に8つの新しいIOピンを追加（合計19 GPIO）、より複雑なアプリケーションを可能にします。
- **強力なセキュリティ機能：** ハードウェア暗号化、セキュアブート、キーストレージ、その他の機能を内蔵してアプリケーションのセキュリティを確保。
- **ソフトウェア互換性：** Arduino IDEと完全互換でシームレスなプロジェクト開発とプロトタイピングが可能。
- **効率的な電源設計：** ディープスリープ時最低45μAの消費電力で4つの動作モードを提供し、リチウムバッテリー充電管理をサポート。
- **コンパクトな親指サイズ設計：** 21 x 17.8mmのサイズで、Seeed Studioの従来のXIAOフォームファクターを採用、スペースを重視するアプリケーションに最適。
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
            <td>48MHz Arm® Cortex®-M4コア</td>
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
            <td>1 ユーザーLED、1 電源LED、1 RGB LED</td>
        </tr>
        <tr>
            <th>インターフェース</th>
            <td>19ピン：14xアナログ、19xデジタル、2x IIC、2x UART、2x SPI</td>
        </tr>
        <tr>
            <th>ボタン</th>
            <td>1 RESETボタン、1 BOOTボタン</td>
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

すべてを始める前に、製品の基本的なパラメータを把握することが非常に重要です。以下の表は、Seeed Studio XIAO RA4M1の特性に関する情報を提供します。

<!-- 硬件相关 -->

<!-- 引脚等的定义 -->
<table>
 <tr>
     <th>XIAO RA4M1 フロント表示図</th>
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

## はじめに

### ハードウェアの準備

以下を準備する必要があります：

- 1 x [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1)
- 1 x コンピュータ
- 1 x USB Type-Cケーブル

<br></br>

:::tip
一部のUSBケーブルは電源供給のみ可能で、データ転送はできません。USBケーブルをお持ちでない場合、またはお使いのUSBケーブルがデータ転送可能かどうか不明な場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)をご確認ください。
:::

### ソフトウェアの準備

XIAO RA4M1の推奨プログラミングツールはArduino IDEです。そのため、ソフトウェア準備の一環として、Arduinoのインストールを完了する必要があります。

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** お使いのオペレーティングシステムに応じて、Arduino IDEの安定版をダウンロードしてインストールします。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

- **ステップ 2.** Arduinoアプリケーションを起動します。

- **ステップ 3.** Arduino IDEにRA4M1ボードパッケージを追加します。

    **File > Preferences**に移動し、**"Additional Boards Manager URLs"**に以下のURLを入力します：
    *https://files.seeedstudio.com/arduino/package_renesas_1.2.0_index.json*

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/arduino_preference.png" style={{width:800, height:'auto'}}/></div>

    **Tools > Board > Boards Manager...**に移動し、検索ボックスにキーワード**RA4M1**を入力し、**Seeed Renesas Board**の最新版を選択してインストールします。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/board_manager.png" style={{width:600, height:'auto'}}/></div>
- **ステップ 4.** ボードとポートを選択します。

    Arduino IDEの上部で、左側の開発ボードで**xiao**を検索し、XIAO_RA4M1を選択し、ポートを直接選択します。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/select_port.png" style={{width:800, height:'auto'}}/></div>

## BootLoaderモード

時々、間違ったプログラムを使用することで、XIAOがポートを失ったり、正常に機能しなくなったりすることがあります。よくある問題には以下があります：

- XIAOがコンピュータに接続されているが、ポート番号が見つからない。
- XIAOが接続され、ポート番号が表示されるが、プログラムのアップロードに失敗する。

上記の2つの状況に遭遇した場合、XIAOをBootLoaderモードにすることで、デバイスが認識されない問題やアップロード失敗の問題の大部分を解決できます。具体的な方法は：

- **方法 1.** XIAO RA4M1の`BOOT`ボタンを離さずに押し続けます。
- **方法 2.** `BOOT`ボタンを押し続けた状態で、データケーブルでコンピュータに接続します。コンピュータに接続後、BOOTボタンを離します。

## Reset

プログラムが異常に動作した場合、電源投入時に`Reset`を一度押すことで、XIAOにアップロードされたプログラムを再実行させることができます。
電源投入時に`BOOT`キーを押し続けながら`Reset`キーを一度押すことで、BootLoaderモードに入ることもできます。

## 最初のBlinkプログラムを実行する

ここまでで、XIAO RA4M1の機能とハードウェアについて十分理解していただけたと思います。次に、最もシンプルなBlinkプログラムを例に、XIAO RA4M1の最初の点滅を実行してみましょう！

- **ステップ 1.** Arduinoアプリケーションを起動します。
- **ステップ 2.** **File > Examples > 01.Basics > Blink**に移動し、プログラムを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink_code.png" style={{width:700, height:'auto'}}/></div>

- **ステップ 3.** ボードモデルを**XIAO RA4M1**に選択し、正しいポート番号を選択してプログラムをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/choose_board.png" style={{width:700, height:'auto'}}/></div>

プログラムが正常にアップロードされると、以下の出力メッセージが表示され、XIAO RA4M1の右側にあるオレンジ色のLEDが点滅していることが確認できます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink.gif" style={{width:700, height:'auto'}}/></div>

おめでとうございます！XIAO RA4M1のプログラムの書き方とアップロード方法を学習できました！
:::note
XIAO RA4M1のユーザーLEDピンがハイレベルに設定されたときのみLEDは消灯し、ピンがローレベルに設定されたときのみ点灯します。
:::

## RGB LEDで遊ぶ

XIAO RA4M1には制御可能な内蔵RGB LEDが搭載されています。以下は、LEDの色を赤、緑、青の間でスムーズに変化させる例です。

- **ステップ 1.** `Adafruit_NeoPixel`ライブラリをダウンロードします

**Sketch > Include Liarbry > Manage Libraries...**に移動し、**Adafruit_NeoPixel**を検索して、最新バージョンをインストールします。

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

## バッテリー＆電源管理

追加のコンポーネントなしでバッテリー電圧を読み取ることは可能でしょうか？はい、XIAO RA4M1 を使用すれば、これまで以上に簡単です。[XIAO ESP32C3](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage) などの以前の XIAO ファミリーメンバーでは、バッテリー電圧を読み取るには抵抗を使用して A0 に手動で接続する必要がありました。

しかし、XIAO RA4M1 では、このプロセスが簡素化されています。`BAT_DET_PIN/P105` ピンを直接使用してバッテリー電圧レベルを読み取ることができるようになり、設計と開発が合理化されます。バッテリーレベルの読み取りを有効にするために必要なので、`BAT_READ_EN/P400` ピンを high に設定することを忘れないでください。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAO拡張ボード上のOLEDディスプレイはI2Cプロトコルを使用し、ボード上のI2C回路を通じてXIAOのI2Cインターフェースに接続されています。そのため、XIAOを拡張ボードに直接差し込んで、画面にコンテンツを表示するようにプログラムできます。

- **ステップ 2.** u8g2ライブラリをインストールします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

- **ステップ 3.** コードをコピーしてArduino IDEに貼り付けます。

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
<!-- - 🗃️ **[ZIP]** [Seeed Studio XIAO RA4M1 KiCAD file](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip) -->
<!-- - 🗃️ **[ZIP]** [Seeed Studio XIAO RA4M1 Eagle file](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/XIAO_RP2040_v1.22_SCH&PCB.zip) -->
<!-- - 📄 **[DXF]** [Seeed Studio XIAO RA4M1 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/XIAO-RP2040-DXF.zip) -->
<!-- - 📄 **[LBR]** [Seeed Studio XIAO RA4M1 Eagle footprint](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr) -->
<!-- - 📄 **[XLSX]** [Seeed Studio XIAO RA4M1 pinout sheet](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/XIAO-RP2040-pinout_sheet.xlsx) -->
- 🔗 **[Kicad]** [Seeed Studio XIAO RA4M1 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## トラブルシューティング

### Q1: ピンをはんだ付けする際に注意すべき点は何ですか

XIAO RA4M1 の小型サイズのため、ヘッダーをはんだ付けする際は注意してください。異なるピン同士をくっつけたり、はんだをシールドや他の部品に付着させたりしないでください。そうしないと、XIAO がショートしたり正常に動作しなくなる可能性があり、これによって生じる結果はユーザーの責任となります。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
