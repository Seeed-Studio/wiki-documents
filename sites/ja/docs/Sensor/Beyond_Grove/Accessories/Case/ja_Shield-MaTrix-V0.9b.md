---
title: Shield MaTrix V0.9
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Shield-MaTrix-V0.9b/
slug: /ja/Shield-MaTrix-V0.9b
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/Shield_matrix.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/Shield-Matrix-p-1773.html)

Shield MaTrixはArduino用のスタッカブルシールドで、最も簡単なセンサーを使用してプログラミングを学ぶことが可能です。

## バージョントラッカー

|リビジョン|説明|リリース|
|------|------|--------|
| 0.9 | プロトタイプ |2013年4月11日|
|0.9b|公開バージョン|2013年10月27日|

## 特徴

* Arduino Mega互換（推奨：Freaduino Mega V1.4 (ATMega 2560)）

* Arduinoシールドのサポート

* nRF24L01+、xBeeをベースとしたワイヤレスデバイスのサポート

* マトリックスLED 60mm 8X8（明るい赤、明るい緑、黄色）のサポート

* 赤外線制御（リモコン）

* RGB LED（さまざまなパラメータを示すため）

* クロックボタン（さまざまな設定のオン/オフ）

* ブザー（アラームまたはリモコンボタンの押下）

* 光センサー（マトリックスの自動照明）

* RTC（リアルタイムクロック）

* I2Cインターフェース（オプションのI/O）

* 電圧9-24VまたはUSBコントローラー（推奨：12V 2A）

## アプリケーションアイデア

* デジタル時計（NTP同期）とアラーム
* 天気ステーション（温度：室内、屋外、地下室、気圧、湿度）
* 電光掲示板（メール、ソーシャルネットワークなどの読み取り）
* データ転送（類似デバイスへの）

## データ表示の原理

LEDマトリックスディスプレイに情報を表示するために動的表示を使用します。
同時に情報は1行のみ表示されます（対応するLEDが点灯（赤および（または）緑））、他のすべての行は消灯します。次のステップでは、前の行が消灯し、次の行が点灯します（その行の現在のLED）。行の切り替えは非常に速く、目にはこの切り替えが単一の画像として認識されます。

使用ピン数を最小限に抑えるために、2種類の異なるチップを使用します：シフトレジスタ（列の制御に使用）とデマルチプレクサ（行の制御）。

シフトレジスタはチェーンで接続され、SPIを介して接続されています（使用ピンは以下に記載）。

デマルチプレクサには3つのアドレス入力（DA0、DA1、DA2）があり、入力に「0」と「1」の組み合わせを設定すると、8つの出力のうち1つがアクティブレベルになります。さらに、デマルチプレクサには制御入力（E1、E2、E3）があり、最初の2つ（E1とE2、これらは回路で接続されています）でマトリックスの完全な消灯が行われ、E3入力で明るさ調整（PWM使用）が行われます。

## インターフェース

* 4つのバイカラーLEDマトリックス用インターフェース

    * LED列を制御するためのシフトレジスタセット（74HC595 - 8個）

    * LED行とその明るさを制御するためのデマルチプレクサ74HC138（PWM使用）

* 内蔵時計（RTC） - バッテリーバックアップ付きDS1307（CR1220またはCR1226）

* RFモジュールnRF24L01+用インターフェース

* クロックボタン（例えばアラーム音をオフにするため）

* 38kHzの赤外線受信機（リモコン用）

* 共通カソードまたはアノードを持つRGB LED接続用配線（ジャンパーで選択）

* 光センサー（例えば明るさを自動調整するため）

* 圧電トランスデューサ「ビーパー」

* I2Cインターフェース

* xBeeインターフェース

* Arduinoシールド用インターフェース

* Arduino Megaで使用されるボード上のピン

    * D5 - 赤外線受信機

    * D24 - クロックボタン

* xBee

    * D16 - DIN

    * D17 - DOUT

* I2C (DS1307)

    * D20 - SDA

    * D21 - SCL

* RGB LED（確認）

    * D34 - 赤

    * D35 - 緑

    * D36 - 青

* nRF24L01+

    * D19 - RF_IRQ

    * D37 - RF_SCK

    * D38 - RF_MISO

    * D39 - RF_MOSI

    * D40 - RF_NSS

    * D41 - RF_CE

    * D45 - ビーパー

    * A7 - 光センサー

* シフトレジスタ

    * D42 - SS

    * D51 - MOSI

    * D52 - SCK

* デマルチプレクサ

    * D49 - DA0

    * D48 - DA1

    * D47 - DA2

    * D44 - E3（明るさ）

    * D43 - E1、E2（消灯）

## 必要なライブラリ

Shield MaTrix のさまざまなコンポーネントを使用するには、以下のライブラリが必要です：

マトリックス上の情報を表示する - MaTrix - [MaTrix](https://github.com/stepanovalex/MaTrix/archive/master.zip)（簡単なディスプレイテストと2つのリアルタイムディスプレイスケッチを含む）

*   リアルタイムクロック (RTC) - RTClib - [RTClib](https://github.com/adafruit/RTClib/archive/master.zip)

*   IR受信機 - IRremote [IRremote](https://github.com/shirriff/Arduino-IRremote/archive/master.zip)（このライブラリを使用して、IRリモコンでディスプレイを制御できます）

*   nRF24L01 + - iBoardRF24 - [iBoardRF24](https://github.com/andykarpov/iBoardRF24/archive/master.zip)（[DevDuino Sensor Node 2.4G nRF24L01+](https://www.seeedstudio.com/depot/DevDuino-Sensor-Node-V13-ATmega-328-RC2032-battery-holder-p-1774.html?cPath=19_22) リモートコントロールライブラリ）

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/Shield-matrix_nRF24L01Plus.jpg)

さらに、ライブラリの動作中に使用される追加のライブラリ：

*   Wire

*   SPI

*   [digitalWriteFast](https://code.google.com/p/digitalwritefast/downloads/detail?name=digitalWriteFast.zip&amp;can=2&amp;q=)

## ライブラリを使用した機能

使用に関して少しコメントが必要なライブラリは2つだけです：

### IR受信機

IR受信機がデジタルピン5に接続されているため、ファイル /IRremote/IRremoteInt.h を以下のように修正する必要があります：

```

// Arduino Mega
#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__)
  //#define IR_USE_TIMER1   // tx = pin 11
  //#define IR_USE_TIMER2     // tx = pin 9
  #define IR_USE_TIMER3   // tx = pin 5
  //#define IR_USE_TIMER4   // tx = pin 6
  //#define IR_USE_TIMER5   // tx = pin 46

```

### nRF24L01+

モジュールを以下のように初期化します：

```


//iBoardRF24 radio(CE,CSN,MOSI,MISO,SCK,IRQ);
iBoardRF24 radio(41,40,39,38,37,19);



```

## MaTrix ライブラリの関数

スケッチで MaTrix ライブラリを使用するには、`void setup()` 関数内で以下のコード行を入力する必要があります：

`
`

``` 
#include <SPI.h>
#include <MaTrix.h>	// MaTrix ライブラリの接続

MaTrix mymatrix;       // mymatrix オブジェクトの作成
```

## 変数

**byte array[8][8]** - メイン配列。
この配列のデータによって、現在LEDマトリックスに表示されている内容が決まります。

`
`

```
 byte array[8][8] = { // 64バイトの配列
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 7
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 6
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 5
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 4
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 3
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 2
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 1
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}   // 行 0
   // red3      green3      red2      green2      red1      green1       red0      green0
 };
```

各ビットはマトリックス内の対応するLEDに対応します。0 - LED「消灯」、1 - LED「点灯」

**byte shadow[8][8]** - 追加の（「シャドウ」）配列。
ライブラリ関数は、さまざまなエフェクトやスクロールテキストを整理するために使用されます（特定のエフェクトのためにシャドウ配列からメイン配列にデータが書き換えられます）。

`
`

```
 byte shadow[8][8] = { // 64バイトの配列
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 7
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 6
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 5
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 4
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 3
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 2
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 1
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}   // 行 0
   // red3      green3      red2      green2      red1      green1       red0      green0
 };
```

## 定義

`
`

```
 // 色
 #define RED    0
 #define GREEN  1
 #define YELLOW 2
```


```
 // "描画"効果の遅延時間 (ms)
 #define VSLOW  500
 #define SLOW   150
 #define MID    100
 #define FAST   50
 #define VFAST  25
```


```
 // 効果
 #define FADE   4
 #define LEFT   3
 #define UP     1
 #define DOWN   2
 #define NONE   0
```


```
 // ハードウェアデータ
 #define BRIGHT 44    // 明るさ (ピン 44 - PWM)
 #define LightSENS A7 // 光センサー
```



## メイン関数

<u> **mymatrix.init();**</u>

<dl><dd>_説明_: 初期化モジュール。</dd></dl>

<u> **mymatrix.clearLed();**</u>

<dl><dd>_説明_: ディスプレイのクリア。</dd></dl>

<u> **mymatrix.brightness(byte brightLevel);**</u>

<dl><dd>_説明_: ディスプレイの明るさを設定します。</dd><dd>_brightLevel_: 明るさレベル (byte)、255 の値で最大明るさに設定されます。</dd></dl>

使用例:

`
`

```
 mymatrix.brightness(177);
```



<u> **mymatrix.getBrightness();**</u>

<dl><dd>_説明_: 現在のディスプレイの明るさを返します。</dd></dl>

使用例:

`
`

```
 Serial.println(mymatrix.getBrightness());
```



<u> **printString(String s, byte pos, byte color, unsigned char *Font, char effect, int speed);**</u>

<dl><dd>_説明_: 指定された文字列を表示します。</dd><dd>_pos_: 最初の文字の開始位置 (byte)。マトリックスの右端から数え、0 から始まります。</dd><dd>_color_: 色 (byte)。3つの事前定義された値 - RED, GREEN, YELLOW</dd><dd>_*Font_: フォントへのポインタ (unsigned char)。ライブラリで利用可能なフォント: キャラクター - font5x8 (ラテン)、font6x8 (ラテンとキリル); デジタル - digit6x8bold, digit6x8future。フォントの詳細は、ライブラリアーカイブ MaTrix の fonts.c ファイルを参照してください。</dd><dd>_effect_: 文字列の効果 (char)。利用可能な事前定義された値: LEFT, UP, DOWN (対応する方向へのシフト)、FADE (表示)、NONE (効果なし - 即座に表示)。デフォルト値 - NONE。</dd><dd>_speed_: 効果の再生速度 (int)。利用可能な事前定義された値: VSLOW, SLOW, MID, FAST, VFAST ("非常に遅い"から"非常に速い"まで)、デフォルト値 - MID。</dd></dl>

使用例:

`
`

```
 mymatrix.printString("123", 3, GREEN, font6x8, UP, SLOW);
```



<u> **printRunningString(String s, byte color, unsigned char *Font, int speed);**</u>

<dl><dd>_説明_: 定義された"走る"文字列を表示します。</dd><dd>_color_: 色 (byte)。3つの事前定義された値 - RED, GREEN, YELLOW</dd><dd>_*Font_: フォントへのポインタ (unsigned char)。ライブラリで利用可能なフォント: キャラクター - font5x8 (ラテン)、font6x8 (ラテンとキリル); デジタル - digit6x8bold, digit6x8future。フォントの詳細は、ライブラリアーカイブ MaTrix の fonts.c ファイルを参照してください。</dd><dd>_speed_: 効果の再生速度 (int)。利用可能な事前定義された値: VSLOW, SLOW, MID, FAST, VFAST ("非常に遅い"から"非常に速い"まで)、デフォルト値 - MID。</dd></dl>

使用例:

`
`

```
 mymatrix.printRunningString("MaTrix test!", RED, font6x8, FAST);
```



## 補助関数

<u> **printArray();**</u>

<dl><dd>_説明_: 現在のメイン配列 (array) の状態をシリアルポートに表示します。</dd></dl>

<u> **printShadow();**</u>

<dl><dd>_説明_: 現在の"シャドウ"配列 (shadow) の状態をシリアルポートに表示します。</dd></dl>

<u> **printChar(unsigned char sym, byte pos, byte color);**</u>

<dl><dd>_説明_: 配列 (array) を変更し、マトリックスに表示する際に指定された位置に指定された色で指定されたシンボルを出力します。</dd><dd>_pos_: 最初の文字の開始位置 (byte)。マトリックスの右端から数え、0 から始まります。</dd><dd>_color_: 色 (byte)。3つの事前定義された値 - RED, GREEN, YELLOW</dd></dl>

注意！関数を呼び出す際に使用されるフォントは setFont を使用して定義する必要があります。

<u> **printCharShadow(unsigned char sym, byte pos, byte color);**</u>

<dl><dd>_説明_: printChar と類似した関数ですが、"シャドウ"配列 (shadow) を変更します。</dd></dl>

<u> **printStr(unsigned char *s, byte pos, byte color);**</u>

<dl><dd>_説明_: 配列 (array) を変更し、マトリックスに表示する際に指定された位置に指定された色で指定された文字列を表示します。</dd><dd>_*s_: 文字列配列へのポインタ (unsigned char)。</dd><dd>_pos_: 最初の文字の開始位置 (byte)。マトリックスの右端から数え、0 から始まります。</dd><dd>_color_: 色 (byte)。3つの事前定義された値 - RED, GREEN, YELLOW</dd></dl>

注意！関数を呼び出す際に使用されるフォントは setFont を使用して定義する必要があります。

<u> **printStrShadow(unsigned char *s, byte pos, byte color);**</u>

<dl><dd>_説明_: printChar と類似した関数ですが、"シャドウ"配列 (shadow) を変更します。</dd></dl>

## 参考文献

[ **ZIP** ] ライブラリ [MaTrix](https://github.com/stepanovalex/MaTrix/archive/master.zip) の現在のバージョン。

## 回路図

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MFull.JPG)

基板の右側（マトリックスから見た場合）は以下の通りです：

* クロックボタン

* nRF24l01 + インターフェース

* RGB-LEDの取り付け場所

* LEDの種類を選択するジャンパー（共通アノードまたは共通カソード）

* IR受信機

* I2C - インターフェース

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MRight.JPG)

基板の左側には以下があります：

* 光センサー

* 圧電ブザー（ビーター）

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MLeft.JPG)

[デバイスの回路図](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/res/SM09b_scheme.jpg)

## 技術サポートと製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>