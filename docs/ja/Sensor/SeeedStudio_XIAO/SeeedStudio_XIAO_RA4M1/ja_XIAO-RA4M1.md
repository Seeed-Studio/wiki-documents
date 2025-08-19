---
title: Seeed Studio XIAO RA4M1 の使い方
description: |
  XIAO RA4M1 - 32ビット Renesas RA4M1 を搭載した最小の開発ボード。Arduino IDE 対応、19 GPIO、RGB LED、CAN BUS、USB 2.0
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
slug: /ja/getting_started_xiao_ra4m1
keywords:
  - XIAO
  - RA4M1
last_update:
  date: 05/15/2025
  author: Carla
sidebar_position: 0
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- 製品説明 -->

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" 
    style={{ width: 480, height: 'auto', "border-radius": '12.8px' }} 
  />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
  </a>
</div><br></br>

## はじめに

XIAO RA4M1 は、Renesas の RA4M1 チップ（32ビット ARM® Cortex®-M4 MCU、最大 48 MHz）をクラシックな XIAO フォームファクターに統合しています。この開発ボードは、256KB フラッシュ、32KB SRAM、8KB EEPROM、USB 2.0 コネクタ、リセットおよびブートボタン、3つの LED、14ビット A/D コンバータ、12ビット D/A コンバータ、CAN BUS インターフェースを備えています。オンボード充電回路と低消費電力モード（最小 45μA）を備えており、バッテリー駆動のアプリケーションに最適です。Arduino Uno R4 と同じ 32ビット R7FA4M1AB3CFM マイクロコントローラを搭載しており、Arduino IDE とネイティブに互換性があり、豊富な XIAO アクセサリと組み合わせて、電子プロジェクトの出発点として最適です。

### 特徴

<!-- 主な特徴の箇条書き -->

- **人気のマイクロコントローラ搭載:** Renesas RA4M1 によって駆動される 32ビット ARM® Cortex®-M4 R7FA4M1AB3CFM MCU、最大 48 MHz、256 KB フラッシュメモリ、32 KB SRAM。
- **注目のオンボードリソース:** 14ビット ADC、12ビット DAC、CAN BUS、USB 2.0、オンボード RGB LED を装備。
- **新たに追加された 8つの IO:** 従来の XIAO ボードと比較して背面に 8つの新しい IO ピンを追加（合計 19 GPIO）、より複雑なアプリケーションを可能に。
- **強力なセキュリティ機能:** ハードウェア暗号化、セキュアブート、キー保存などの機能を内蔵し、アプリケーションのセキュリティを確保。
- **ソフトウェア互換性:** Arduino IDE と完全互換で、シームレスなプロジェクト開発とプロトタイピングを実現。
- **効率的な電力設計:** 4つの動作モードを提供し、ディープスリープ時の消費電力は最小 45μA、リチウムバッテリー充電管理をサポート。
- **コンパクトな親指サイズのデザイン:** 21 x 17.8mm のサイズで、Seeed Studio のクラシックな XIAO フォームファクターを採用し、スペースを意識したアプリケーションに最適。
- **量産に適した設計:** 表面実装デバイス（SMD）設計で、すべてのコンポーネントが前面に配置され、両側にスタンプホールを備え、効率的な量産を実現。

### 仕様

<!-- 技術仕様 | 表形式または箇条書き -->

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
            <th>フラッシュ</th>
            <td>256 KB</td>
        </tr>
        <tr>
            <th>LED</th>
            <td>1 ユーザー LED、1 電源 LED、1 RGB LED</td>
        </tr>
        <tr>
            <th>インターフェース</th>
            <td>19 ピン: 14x アナログ, 19x デジタル, 2x IIC, 2x UART, 2x SPI</td>
        </tr>
        <tr>
            <th>ボタン</th>
            <td>1 リセットボタン、1 ブートボタン</td>
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

<!-- ハードウェア関連 -->

<!-- ピンなどの定義 -->
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

## はじめに

### ハードウェアの準備

以下のものを準備してください：

- 1 x [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

<br></br>

:::tip
一部のUSBケーブルは電力供給のみ可能で、データ転送ができない場合があります。USBケーブルをお持ちでない場合や、使用中のUSBケーブルがデータ転送可能かどうかわからない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)をご確認ください。
:::

### ソフトウェアの準備

XIAO RA4M1の推奨プログラミングツールはArduino IDEです。そのため、ソフトウェア準備の一環としてArduinoのインストールを完了する必要があります。

:::tip
Arduinoを初めて使用する場合は、[Arduinoの始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** お使いのオペレーティングシステムに応じて、安定版のArduino IDEをダウンロードしてインストールします。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
</div>

- **ステップ 2.** Arduinoアプリケーションを起動します。

- **ステップ 3.** Arduino IDEにRA4M1ボードパッケージを追加します。

    **ファイル > 設定**に移動し、**"追加のボードマネージャーURL"**に以下のURLを入力します：
    *https://files.seeedstudio.com/arduino/package_renesas_1.2.0_index.json*
    
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/arduino_preference.png" style={{width:800, height:'auto'}}/></div>

    **ツール > ボード > ボードマネージャー...**に移動し、検索ボックスに**RA4M1**と入力します。**Seeed Renesas Board**の最新バージョンを選択してインストールします。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/board_manager.png" style={{width:600, height:'auto'}}/></div>
- **ステップ 4.** ボードとポートを選択します。

    Arduino IDEの上部で、左側の開発ボードから**xiao**を検索し、XIAO_RA4M1を選択してポートを直接選択します。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/select_port.png" style={{width:800, height:'auto'}}/></div>


## ブートローダーモード

誤ったプログラムを使用すると、XIAOがポートを認識しなくなったり、正常に動作しなくなる場合があります。よくある問題としては以下のようなものがあります：

- XIAOがコンピュータに接続されているが、ポート番号が見つからない。
- XIAOが接続されてポート番号が表示されるが、プログラムのアップロードに失敗する。

上記のような状況に遭遇した場合、XIAOをブートローダーモードにすることで、認識されないデバイスやアップロード失敗の問題のほとんどを解決できます。具体的な方法は以下の通りです：

- **方法 1.** XIAO RA4M1の`BOOT`ボタンを押し続けます。
- **方法 2.** `BOOT`ボタンを押したまま、データケーブルを使用してコンピュータに接続します。コンピュータに接続した後、`BOOT`ボタンを離します。

## リセット

プログラムが異常に動作した場合、電源投入時に `Reset` を一度押すことで、XIAO がアップロードされたプログラムを再実行します。  
また、電源投入時に `BOOT` キーを押し続けながら `Reset` キーを一度押すと、BootLoader モードに入ることができます。

## 最初の Blink プログラムを実行する

ここまでで、XIAO RA4M1 の機能やハードウェアについて十分に理解できたと思います。次に、最も簡単な Blink プログラムを例に取り、XIAO RA4M1 で最初の点滅を実行してみましょう！

- **ステップ 1.** Arduino アプリケーションを起動します。
- **ステップ 2.** **File > Examples > 01.Basics > Blink** に移動し、プログラムを開きます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink_code.png" style={{width:700, height:'auto'}}/></div>

- **ステップ 3.** ボードモデルを **XIAO RA4M1** に選択し、正しいポート番号を選択してプログラムをアップロードします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/choose_board.png" style={{width:700, height:'auto'}}/></div>

プログラムが正常にアップロードされると、以下の出力メッセージが表示され、XIAO RA4M1 の右側にあるオレンジ色の LED が点滅しているのを確認できます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink.gif" style={{width:700, height:'auto'}}/></div>

おめでとうございます！これで、XIAO RA4M1 用のプログラムの書き方とアップロード方法を学びました！
:::note
LED は、XIAO RA4M1 のユーザー LED ピンが高レベルに設定されている場合のみ消灯し、ピンが低レベルに設定されている場合のみ点灯します。
:::

## RGB LED を操作する

XIAO RA4M1 には、内蔵の RGB LED が搭載されており、これを制御することができます。以下は、赤、緑、青の間で LED の色をスムーズに変化させる例です。

- **ステップ 1.** `Adafruit_NeoPixel` ライブラリをダウンロードします。

**Sketch > Include Library > Manage Libraries...** に移動し、**Adafruit_NeoPixel** を検索して、最新バージョンをインストールします。

- **ステップ 2.** 以下のコードを新しいスケッチにコピーします：

```cpp
#include <Adafruit_NeoPixel.h>

#define LED_PIN RGB_BUILTIN  // 内蔵 RGB LED のピンを定義
#define NUM_PIXELS 1         // WS2812 LED の数

Adafruit_NeoPixel pixels(NUM_PIXELS, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pinMode(PIN_RGB_EN, OUTPUT); // 電源ピンを設定
  digitalWrite(PIN_RGB_EN, HIGH); // LED に電源を供給
  pixels.begin();  // NeoPixel ライブラリを初期化
}

void loop() {
    // 赤から緑への遷移
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(255 - i, i, 0));  // 赤が減少し、緑が増加
    pixels.show();
    delay(10);  // スムーズさを調整するための遅延
  }

  // 緑から青への遷移
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(0, 255 - i, i));  // 緑が減少し、青が増加
    pixels.show();
    delay(10);  // スムーズさを調整するための遅延
  }

  // 青から赤への遷移
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(i, 0, 255 - i));  // 青が減少し、赤が増加
    pixels.show();
    delay(10);  // スムーズさを調整するための遅延
  }
}
```

- **ステップ 3.** ボードモデルを **XIAO RA4M1** に選択し、正しいポート番号を選択してプログラムをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/rgb_led.gif" style={{width:600, height:'auto'}}/></div>

## バッテリーと電源管理

追加のコンポーネントなしでバッテリー電圧を読み取ることは可能ですか？はい、XIAO RA4M1を使用すればこれまで以上に簡単です。以前のXIAOファミリーのメンバー、例えば[XIAO ESP32C3](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage)では、バッテリー電圧を読み取るために抵抗を使用して手動でA0に接続する必要がありました。

しかし、XIAO RA4M1ではこのプロセスが簡略化されています。`BAT_DET_PIN/P105`ピンを直接使用してバッテリー電圧レベルを読み取ることができ、設計と開発が効率化されます。ただし、バッテリー電圧の読み取りを有効にするために`BAT_READ_EN/P400`ピンをハイに設定する必要があることを忘れないでください。

- **ステップ 1.** ハードウェアの準備

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio XIAO用拡張ベース（Grove OLED付き）</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

XIAO拡張ボードのOLEDディスプレイはI2Cプロトコルを使用しており、ボード上のI2C回路を介してXIAOのI2Cインターフェースに接続されています。そのため、XIAOを拡張ボードに直接差し込み、プログラムを作成して画面にコンテンツを表示することができます。

- **ステップ 2.** u8g2ライブラリをインストールします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

- **ステップ 3.** コードをコピーしてArduino IDEに貼り付けます。

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ WIRE_SCL_PIN, /* data=*/ WIRE_SDA_PIN, /* reset=*/ U8X8_PIN_NONE);   // リセットなしのOLEDディスプレイ

#define enablePin  BAT_READ_EN  // バッテリー電圧読み取りを有効にするピン
#define adcPin BAT_DET_PIN     // アナログ入力ピン（GPIO29の場合）
const float referenceVoltage = 3.3;  // ADCの基準電圧
const float voltageDivider = 2.0;    // 電圧分割係数

void setup() {
  Serial.begin(9600);          // シリアル通信を9600ボーで初期化
  pinMode(enablePin, OUTPUT);  // 有効化ピンを出力として設定
  digitalWrite(enablePin, HIGH); // ピンをハイに設定してバッテリー電圧読み取りを有効化
  u8x8.begin();
  u8x8.setFlipMode(1);   // 数値を1から3に設定すると画面の文字が180度回転
  u8x8.setFont(u8x8_font_chroma48medium8_r);
}

void loop() {
  int rawValue = analogRead(adcPin);    // アナログ入力値を読み取る
  float voltage = rawValue * (referenceVoltage / 1023.0) * voltageDivider; // 電圧を計算
  // 生の値と計算された電圧を表示
  u8x8.setCursor(0, 0);
  u8x8.print("Raw value:0x");
  u8x8.print(rawValue, HEX);
  u8x8.setCursor(0, 2);
  u8x8.print("Voltage:");
  u8x8.print(voltage, 2);
  u8x8.print("V");

  delay(500); // 500ミリ秒の遅延
}

```
- **ステップ 4.** ボードモデルを**XIAO RA4M1**に選択し、正しいポート番号を選択してプログラムをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/voltage.png" style={{width:600, height:'auto'}}/></div>

## リソース

- 📄 **[PDF]** [RA4M1 データシート](https://www.renesas.com/us/en/document/dst/ra4m1-group-datasheet)
- 📄 **[PDF]** [Seeed Studio XIAO RA4M1 回路図](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO-RA4M1_SCH_PDF_v1.0_240719.pdf)
- 📄 **[ZIP]** [KiCAD ライブラリ](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO-RA4M1_SCH%26PCB_v1.0_240719.zip)
<!-- - 🗃️ **[ZIP]** [Seeed Studio XIAO RA4M1 KiCAD ファイル](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip) -->
<!-- - 🗃️ **[ZIP]** [Seeed Studio XIAO RA4M1 Eagle ファイル](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/XIAO_RP2040_v1.22_SCH&PCB.zip) -->
<!-- - 📄 **[DXF]** [Seeed Studio XIAO RA4M1 DXF 寸法図](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/XIAO-RP2040-DXF.zip) -->
<!-- - 📄 **[LBR]** [Seeed Studio XIAO RA4M1 Eagle フットプリント](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr) -->
<!-- - 📄 **[XLSX]** [Seeed Studio XIAO RA4M1 ピンアウトシート](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/XIAO-RP2040-pinout_sheet.xlsx) -->
- 🔗 **[Kicad]** [Seeed Studio XIAO RA4M1 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)


## トラブルシューティング


### Q1: ピンをはんだ付けする際に注意すべき点は何ですか？

XIAO RA4M1 は非常に小型のため、ヘッダーをはんだ付けする際には注意が必要です。異なるピンを接触させたり、はんだがシールドや他の部品に付着しないようにしてください。これを怠ると、XIAO がショートしたり、正常に動作しなくなる可能性があります。このような結果による責任はユーザーに帰属します。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>