---
description: Seeed Studio ラウンドディスプレイで LVGL と TFT を使用する方法
title: 全ての XIAO シリーズ向け LVGL と TFT の使用
keywords:
- XIAO
- ラウンドディスプレイ
- lvgl
- ダイヤル描画
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/using_lvgl_and_tft_on_round_display
last_update:
  date: 05/15/2025
  author: Spencer
---

# 全ての XIAO シリーズ向け Seeed Studio ラウンドディスプレイでの LVGL と TFT の使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/000.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br></br>

Seeed Studio ラウンドディスプレイ製品をご購入いただきありがとうございます。このチュートリアルでは、`TFT_eSPI` ライブラリと `LVGL` ライブラリを使用してラウンドディスプレイ上にさまざまな豊かで興味深いダイヤルパターンを描画する方法に焦点を当てます。また、これらの便利で複雑なライブラリのいくつかの一般的な関数の使用方法を、簡単なものから深いものまで紹介します。このチュートリアルの内容を通じて、この製品を使用して理想的なダイヤルパターンを描画できるようになることを願っています。学習を楽しんでください！

## はじめに

学習を始める前に、以下の準備を整えてください。

### ハードウェアの準備

このチュートリアルでは、デモンストレーションのために **XIAO ESP32S3** をマスターコントロールとして使用します。

<table align="center">
 <tr>
     <th>Seeed Studio XIAO 用ラウンドディスプレイ</th>
     <th>Seeed Studio XIAO ESP32S3</th>
 </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:210, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
 <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

他の XIAO 製品を使用したい場合、このチュートリアルの記事や方法も適用可能です。

<table align="center">
 <tr>
  <th>Seeed Studio XIAO SAMD21</th>
  <th>Seeed Studio XIAO RP2040</th>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

ラウンドディスプレイに XIAO を取り付ける際は、XIAO の Type-C コネクタがラウンドディスプレイの外側を向くようにし、各ピンをデュアル 7 ピンヘッダに合わせて接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

### ソフトウェアの準備

この部分は [基本 Wiki](https://wiki.seeedstudio.com/ja/get_start_round_display#software-preparation) に詳細に記載されているため、直接そちらを参照してください。

## TFT_eSPIライブラリを使用したシンプルなダイヤルの描画

TFT_eSPIは、32ビットプロセッサ向けの機能豊富なArduino IDE互換のグラフィックスおよびフォントライブラリです。XIAO Round Displayで提供されるTFTライブラリは、XIAOおよびXIAO Round Displayとの互換性を持つライブラリに基づいており、XIAOシリーズ全体での使用をサポートしています。

### TFTライブラリの共通インターフェース

#### 1. TFTオブジェクトの作成

```c
TFT_eSPI tft = TFT_eSPI()
TFT_eSPI tft = TFT_eSPI(240,240)        // オブジェクト作成時に画面サイズを設定
```

#### 2. 初期化

```c
void init(uint8_t tc = TAB_COLOUR)
void begin(uint8_t tc = TAB_COLOUR)
```

`tft.begin()`と`tft.init()`は、同じ機能を持つ2つの関数です。

#### 3. 画面のクリア

```c
void fillScreen(uint32_t color) // 画面を特定の色で塗りつぶす
```

#### 4. 画面の向きの設定

```c
void setRotation(uint8_t r);      // 表示画像の回転方向を設定、rのオプションは0, 1, 2, 3
uint8_t getRotation(void)         // 現在の回転角度を読み取る
```

0, 1, 2, 3はそれぞれ0°、90°、180°、270°を表し、4は鏡像を意味します。

#### 5. 色変換

```c
uint16_t color565(uint8_t red, uint8_t green, uint8_t blue)    // 8ビットの赤、緑、青を16ビットに変換
uint16_t color8to16(uint8_t color332)                          // 8ビットカラーを16ビットに変換
uint8_t  color16to8(uint16_t color565)                         // 16ビットカラーを8ビットに変換
uint32_t color16to24(uint16_t color565)                        // 16ビットカラーを24ビットに変換
uint32_t color24to16(uint32_t color888)                        // 24ビットカラーを16ビットに変換
```

#### 6. 色の反転

```c
void invertDisplay(bool i)      // i = trueで全表示色を反転、i = falseで通常表示
```

#### 7. テキスト関連の設定

```c
/* カーソル */
void setCursor(int16_t x, int16_t y)                     // tft.print()用のカーソルを設定
void setCursor(int16_t x, int16_t y, uint8_t font)       // tft.print()用のカーソルとフォントサイズを設定
int16_t getCursorX(void)                                 // 現在のカーソルx位置を読み取る（tft.print()で移動）
int16_t getCursorY(void)                                 // 現在のカーソルy位置を取得

/* フォントカラー */
void setTextColor(uint16_t color)                        // 文字の色のみを設定
void setTextColor(uint16_t fgcolor, uint16_t bgcolor, bool bgfill = false)   // 文字の前景色と背景色を設定

/* フォントサイズ */
void setTextSize(uint8_t size)                           // 文字サイズの倍率を設定（ピクセルサイズが増加）
void setTextWrap(bool wrapX, bool wrapY = false)         // TFTの幅および/または高さでのテキスト改行をオン/オフ

/* テキスト基準位置 */
void setTextDatum(uint8_t datum)                         // テキスト基準位置を設定（デフォルトは左上）
uint8_t getTextDatum(void)                               // テキスト基準位置を取得

/* 背景塗りつぶしを設定し、指定領域の表示をクリア可能 */
void setTextPadding(uint16_t x_width)                    // テキスト塗りつぶし（背景マージン/書き換え）幅をピクセル単位で設定
uint16_t getTextPadding(void)                            // テキスト塗りつぶしを取得
```

上記の関数からわかるように、表示するテキストを印刷するには、単純に`tft.print()`関数を使用できます。

#### 8. シンプルな形状の描画

以下の関数を使用して、ピクセルポイント、直線セグメント、長方形、円などのシンプルな形状を描画できます。

```c
drawPixel(int32_t x, int32_t y, uint32_t color)    // 個々のピクセルポイントをプロット

drawLine(int32_t xs, int32_t ys, int32_t xe, int32_t ye, uint32_t color)  // 線を描画

drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color)   // 長方形を描画
fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color)  // 塗りつぶし色付きの長方形を描画

drawCircle(int32_t x, int32_t y, int32_t r, uint32_t color)  // 円を描画
fillCircle(int32_t x, int32_t y, int32_t r, uint32_t color)  // 塗りつぶし色付きの円を描画

drawEllipse(int16_t x, int16_t y, int32_t rx, int32_t ry, uint16_t color)  // 楕円を描画
fillEllipse(int16_t x, int16_t y, int32_t rx, int32_t ry, uint16_t color)  // 塗りつぶし色付きの楕円を描画

drawTriangle(int32_t x1,int32_t y1, int32_t x2,int32_t y2, int32_t x3,int32_t y3, uint32_t color)  // 三角形を描画
fillTriangle(int32_t x1,int32_t y1, int32_t x2,int32_t y2, int32_t x3,int32_t y3, uint32_t color)  // 塗りつぶし色付きの三角形を描画
```

#### 9. 複雑な形状の描画

TFTライブラリは、丸みを帯びた長方形、円弧、滑らかな形状など、複雑な形状を描画するためのメソッドも提供しています。

```c
/** 
    背景ピクセル色（bg_color）を指定してピクセルを描画し、ブレンドされた色を返す 
    bg_colorが指定されていない場合、背景ピクセル色はTFTまたはスプライトから読み取られる
**/
drawPixel(int32_t x, int32_t y, uint32_t color, uint8_t alpha, uint32_t bg_color)

/** 
    ax, ayの位置に半径rの小さなアンチエイリアス塗りつぶし円を描画（drawWideLineを使用）
    bg_colorが含まれていない場合、背景ピクセル色はTFTまたはスプライトから読み取られる
**/
drawSpot(float ax, float ay, float r, uint32_t fg_color, uint32_t bg_color)


drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color)  // 垂直直線を描画
drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color)  // 水平線を描画
drawWideLine(float ax, float ay, float bx, float by, float wd, uint32_t fg_color, uint32_t bg_color)  // 太い実線を描画
drawWedgeLine(float ax, float ay, float bx, float by, float aw, float bw, uint32_t fg_color, uint32_t bg_color);  // テーパー付き線を描画。awとbwはそれぞれテーパー線の開始幅と終了幅を表す。


/**
    "drawSmoothArc"と同様だが、円弧の端がアンチエイリアスされない。これにより、円弧セグメントの動的な長さ変更が可能になり、セグメントの接合部がクリーンに保たれる。
    デフォルトで円弧の側面はアンチエイリアスされる。smoothArcがfalseの場合、側面はアンチエイリアスされない。
**/
drawArc(int32_t x, int32_t y, int32_t r, int32_t ir, uint32_t startAngle, uint32_t endAngle, uint32_t fg_color, uint32_t bg_color, bool smoothArc);

/**
    開始角度と終了角度の間にアンチエイリアス（滑らか）な円弧を描画。円弧の端はアンチエイリアスされる。
    デフォルトでは、円弧は角ばった端で描画されるが、"roundEnds"パラメータをtrueに設定すると丸い端になる。
    角度=0は6時の位置、90は9時の位置など。角度は0-360の範囲内でなければならず、それ以外はこれらの制限にクリップされる。
    開始角度が終了角度より大きい場合がある。円弧は常に開始角度から時計回りに描画される。
**/
drawSmoothArc(int32_t x, int32_t y, int32_t r, int32_t ir, uint32_t startAngle, uint32_t endAngle, uint32_t fg_color, uint32_t bg_color, bool roundEnds);

/**
    x, yの位置に半径rのアンチエイリアス塗りつぶし円を描画
    注意: 線の厚さは3ピクセルで、アンチエイリアスの狭い線の「編み込み」効果を軽減するため、内側のアンチエイリアスゾーンは常にr-1、外側のゾーンはr+1になる。
**/
drawSmoothCircle(int32_t x, int32_t y, int32_t r, uint32_t fg_color, uint32_t bg_color)

/**
    x, yの位置に半径rのアンチエイリアス塗りつぶし円を描画
    bg_colorが含まれていない場合、背景ピクセル色はTFTまたはスプライトから読み取られる
**/
fillSmoothCircle(int32_t x, int32_t y, int32_t r, uint32_t color, uint32_t bg_color)


/**
    x, yおよびw, hで定義された境界ボックスを持つ、線の厚さがr-ir+1の丸みを帯びた長方形を描画
    外側の角の半径はr、内側の角の半径はir
    境界の内側と外側はアンチエイリアスされる
**/
drawSmoothRoundRect(int32_t x, int32_t y, int32_t r, int32_t ir, int32_t w, int32_t h, uint32_t fg_color, uint32_t bg_color, uint8_t quadrants)

/**
    x, yおよびw, hで定義された境界ボックスを持つ、角の半径rの塗りつぶし丸みを帯びた長方形を描画
**/
fillSmoothRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t radius, uint32_t color, uint32_t bg_color)
```

#### 10. 変数とテキスト

特定の文字列を単に表示するだけでなく、時には画面に変数を表示する必要があります。例えば、時間やセンサー値などです。その場合、変数の種類に応じて以下の異なる関数を使用することができます。

```c
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
drawNumber(long intNumber, int32_t x, int32_t y, uint8_t font) // 指定されたフォント番号を使用して整数を描画します。フォントが設定されていない場合（最後のパラメータ、デフォルトフォント）
drawFloat(float floatNumber, uint8_t decimal, int32_t x, int32_t y, uint8_t font), // 指定されたフォント番号を使用して浮動小数点数を描画します。フォントが設定されていない場合（最後のパラメータ、デフォルトフォント）
drawString(const char *string, int32_t x, int32_t y, uint8_t font),  // 指定されたフォント番号を使用して文字列を描画します。フォントが設定されていない場合（最後のパラメータ、デフォルトフォント）
```

#### 11. 画像処理

TFTライブラリを使用して画面に画像を表示するために `pushImage()` 関数を使用する手順は以下の通りです：

- 画像ファイルをArduinoが認識できるC/C++配列形式に変換します。**Image2CPP**などのオンラインツールを使用してビットマップ画像を配列形式に変換できます。

- 生成された画像配列ファイルをArduinoプログラムに含めます。

- TFTライブラリと画面を初期化し、画面の解像度とカラーモードを設定します。

- `tft.pushImage(x, y, width, height, data)` 関数を使用して画像データを画面に送信します。ここで、xとyは画像の左上隅の座標、widthとheightは画像の幅と高さ、dataは画像配列です。

```c
// 画像データ配列
const unsigned char image_data[] PROGMEM = {
  // ここに変換された画像のC/C++配列データを挿入してください
};

tft.pushImage(x, y, image_width, image_height, image_data);
```

#### 12. TFT_eSprite クラス

`TFT_eSprite` と `TFT_eSPI` はどちらもArduino用のTFT LCDディスプレイライブラリですが、それぞれ異なる機能と設計目的を持っています。

TFT_eSPIは多くの高度な機能と設定オプションを備えた強力なライブラリで、さまざまな表示効果を実現できます。複数のディスプレイドライバチップとコントローラをサポートし、複数のArduinoハードウェアプラットフォームで使用可能です。SPIインターフェースと高度に最適化されたコードを使用して、高速なリフレッシュレートと小さなコードフットプリントを実現します。TFT_eSPIライブラリは、ゲーム、グラフィックス、GUIなどのさまざまなアプリケーションに使用できます。

TFT_eSpriteはTFT_eSPIライブラリの補完的なライブラリで、主にゲームキャラクター、アイコン、テキストなどの小さなスプライトをディスプレイに描画するために使用されます。TFT_eSpriteは画像をメモリにキャッシュし、部分的な更新を行うことで高速な描画速度を実現します。これにより、小さなスプライトを更新する際のリフレッシュレートが向上し、プロセッサ時間とメモリスペースを節約できます。

したがって、TFT_eSPIは多用途の強力なライブラリであり、複数のアプリケーションに適しています。一方、TFT_eSpriteは小さなスプライトの描画に特化したライブラリで、高い描画効率を提供します。

TFT_eSPIライブラリを使用する一般的な形式は以下の通りです。

```c
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
  tft.init();
  tft.setRotation(1);
}

void loop() {
    // グラフを描画するコードを記述
}
```

TFT_eSpriteライブラリを使用する一般的な形式は以下の通りです。

```c
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite spr = TFT_eSprite(&tft);

void setup() {
  tft.init();
  tft.setRotation(1);
}

void loop() {
    spr.createSprite(128, 128);  // 128*128サイズのスプライトを作成

    // グラフを描画するコードを記述

    spr.pushSprite(0, 0);  // 描画したスプライトの配置
    spr.deleteSprite();
}
```

:::note
上記の例コードでは、プログラムが `loop()` 関数を終了するときに `spr.deleteSprite();` が呼び出され、TFT_eSpriteオブジェクトが削除され、メモリスペースが解放されます。この方法により、次のループでTFT_eSpriteオブジェクトを作成する際に、以前に解放されたメモリスペースを使用してメモリリソースの浪費を防ぐことができます。
:::

TFTライブラリの関数とその使用方法についてさらに詳しく知りたい場合は、ライブラリ内の **TFT_eSPI.h** および **TFT_eSPI.cpp** ファイルを読むことをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/1.png" style={{width:400, height:'auto'}}/></div>

### TFTライブラリのカスタマイズオプションについて

時には、カスタムフォントライブラリやスペースを節約するために有効化されていない機能を使用する必要があります。この場合、**Setup66_Seeed_XIAO_RoundDisplay.h** ファイルの内容を変更する必要があります。

- **Windows** システムでこのファイルのデフォルトパスは以下の通りです：

`C:\Users\{UserName}\Documents\Arduino\libraries\TFT_eSPI\User_Setups\Setup66_Seeed_XIAO_RoundDisplay.h`

- **MacOS** システムでこのファイルのデフォルトパスは以下の通りです：

`\Users\{UserName}\Documents\Arduino\libraries\TFT_eSPI\User_Setups\Setup66_Seeed_XIAO_RoundDisplay.h`

実際の使用状況に応じて不要な機能をオンまたはオフにしてください。
例えば、カスタムフォントを使用したい場合は、`#define SMOOTH_FONT` をコメント解除する必要があります。そうしないと、実行時にエラーが発生する可能性があります。

もちろん、カスタムフォントのヘッダファイルはinoファイルと同じディレクトリに保存する必要があります。これはエラーを回避するために必要な手順です。

### TFTベースのダイヤルサンプルプログラム

Round Display用にダイヤルプログラムを作成しました。このプログラムは直接使用できます。一部のXIAOモデルのメモリスペース制限のため、このプログラムは基本的な針の動き機能のみを実行し、他の機能は設計されていません。ユーザーはこのプログラムを使用してTFTライブラリの使用方法やポインタ移動機能を学び、実際の状況に応じてより複雑なダイヤルの開発を完了することができます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## LVGLライブラリを使用したシンプルなダイヤルの描画

LVGLライブラリは汎用的な組み込みグラフィックスライブラリであり、ボタン、ラベル、リストなどの豊富なGUIコントロールを提供します。これらを使用してさまざまなユーザーインターフェースを構築することができます。TFTライブラリとは異なり、LVGLライブラリは抽象化されたオブジェクト指向のグラフィックスインターフェースを提供し、使いやすく保守が容易ですが、性能や信頼性に関していくつかのトレードオフがある場合があります。

LVGLライブラリは、複雑なユーザーインターフェースを構築する際に非常に役立つツールであり、コードの記述と保守の負担を軽減します。一方、TFTライブラリはリアルタイム画像処理やビデオレンダリングなど、高性能グラフィックスを必要とする一部のアプリケーションにより適しています。

### LVGLライブラリの一般的なインターフェース

LVGLライブラリのAPIは非常に豊富で複雑です。LVGLを使用するすべての方が公式のLVGL紹介ドキュメントを読むことをお勧めします。

- [Get Started](https://docs.lvgl.io/latest/en/html/get-started/index.html)
- [Display interface](https://docs.lvgl.io/latest/en/html/porting/display.html)
- [Input device interface](https://docs.lvgl.io/latest/en/html/porting/indev.html)
- [Tick interface](https://docs.lvgl.io/latest/en/html/porting/tick.html)
- [Operating system and interrupts](https://docs.lvgl.io/latest/en/html/porting/os.html)

### SquareLine Studioを使用した複雑なUIインターフェースの描画

LVGL公式ドキュメントを読むことや独自のLVGLグラフィックスプログラムを書くことに加えて、公式のLVGL SquareLine Studioツールを使用して開発効率を向上させることもできます。

次に、ラウンドスクリーンでのソフトウェアの使用方法、設定方法について簡単に紹介し、ソフトウェアを使用してインターフェースを設計する方法を迅速に習得できるようにします。

:::caution
**v1.5.1**バージョンのSquareLine Studioを使用することをお勧めします。これはこのWiki執筆時点での最新バージョンです。

このチュートリアルの準備に使用した環境：

1. **[SeeedStudio_TFT_eSPIライブラリ](https://github.com/Seeed-Projects/SeeedStudio_TFT_eSPI)** Bodmerによる、Seeed Studioによって修正されたバージョン: **2.5.43**

2. **[LVGLライブラリ](https://github.com/lvgl/lvgl/releases/tag/v8.3.11)** kisvegabor、embeddedt、pete-pjbによるバージョン: **8.3.11**

**LVGL**ライブラリは、ライブラリバージョンマネージャーを通じて直接検索してバージョン8.3.11をダウンロードできます。**SeeedStudio_TFT_eSPI**ライブラリはGithubからダウンロードし、Arduino IDE環境に追加する必要があります。

:::

#### Step1. SquareLine Studioをダウンロードする

SquareLine Studioの公式ウェブサイトにアクセスするには[こちら](https://squareline.io/)をクリックしてください。その後、**TRY IT FOR FREE**をクリックしてソフトウェアをコンピュータにダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/3.png" style={{width:1000, height:'auto'}}/></div>

初めてこのソフトウェアを使用する場合、30日間の無料試用版を取得できます。そうでない場合でも、無料版では最大5ページを描画し、50個のウィジェットを使用することができます。

:::caution
初めてのユーザーの場合、残高のないアカウントでログイン登録しないでください。30日間の試用期間が無効になる可能性があります！
:::

#### Step2. 画面インターフェース情報を設定する

次に、ソフトウェアを開いて空白のディスプレイページを作成します。

Arduinoプログラミングを使用しているため、作成するものもArduinoファイルである必要があります。

円形スクリーンの解像度は**240*240**で、**16bit**のカラーデプスのみをサポートしています。それ以外に、プロジェクトの名前とテーマを定義する必要があります。ここではダークスタイルをテーマとして使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/4.png" style={{width:1000, height:'auto'}}/></div>

もし私のように速すぎて、ダイヤルの形状を設定するのを忘れてプロジェクトを作成してしまった場合でも問題ありません。メインインターフェースの左上隅にあるプロジェクト設定タブで、先ほど行った設定を変更することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/5.png" style={{width:1000, height:'auto'}}/></div>

:::caution
プロジェクトを正式に描画し始める前に、プロジェクト設定を完了し、スクリーン仕様に一致していることを確認してください。そうでない場合、描画したものがスクリーンに正しく表示されない可能性があります。

プロジェクト作成後にすべてが変更可能というわけではありません。例えば、プロジェクト名は変更できません。プロジェクト名には英語以外の言語や特殊文字を使用しないでください。また、**"-"**記号を使用せず、代わりに**"_"**記号を使用してください。そうしないと、エクスポートされたプログラムがコンパイル中にエラーを引き起こす可能性があります！
:::

#### Step3. ソフトウェアの機能レイアウトを理解する

私の使用習慣に基づいて、ソフトウェアのメインインターフェースを以下のように大まかに分けました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/6.png" style={{width:1000, height:'auto'}}/></div>

- **階層とアニメーションペイン**: このエリアでは、異なるダイヤルページ、表示レイヤー、アニメーションを設定できます。

- **ウィジェット**: ここでは、ディスプレイページに追加するコンポーネントを選択できます。これらのコンポーネントはソフトウェアに統合されており、直接使用できます。ここにないコンポーネントは、後で独自のプログラミングソフトウェアで追加する必要があります。

- **作業エリア**: ワークスペースでは、ドラッグ＆ドロップで特定のコンポーネントの位置を変更できます。さらに便利なのは、最終的な表示がワークスペースに表示されているものと一致することです。つまり、見たままが得られる結果です。

- **アセット＆コンソール**: アセットは追加した画像クリップを表示します。これらの画像クリップは、画像挿入をサポートするコンポーネントで使用できます。コンソールは設定中に発生したエラーメッセージ（ある場合）を表示します。

- **セットアップエリア**: ここでの主な目的は、コンポーネントのプロパティを設定することです。

まず、ソフトウェアインターフェースの一般的な知識を得た後、各部分の使用方法について実践的な理解を深めていきます。

#### ステップ4. ソフトウェアを使用してアイデアを実現する

今、音楽インターフェースを描きたいと仮定します。もちろん、私は音楽を聴くのが大好きなので、例として音楽表示インターフェースを描きたいと思います。

この音楽表示画面には以下のコンポーネントを含めたいです。

- お気に入りの音楽のアルバムカバーアートを背景として使用する。
- 再生進行バーを設置する。
- 音量調整バーを設置する。
- 再生および一時停止ボタンを設置する。

要件を整理した後、建物を建てるように、下から上へと表示コンポーネントを設計する必要があります。

最初のステップは、音楽の背景画像を作成することです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/7.png" style={{width:1000, height:'auto'}}/></div>

ウィジェットの**Panel**を選択します。クリックすると自動的にダイヤルの中央に配置されますが、ダイヤルの任意の位置にドラッグして配置することもできます。

表示する画像をダイヤル背景に直接置くのではなく、Panelに配置します。これは、ダイヤル全体をこの画像にしたくないためであり、Panelは自由にサイズ変更が可能だからです。

この時点で、セットアップエリアにすでに一連のプロパティが表示されていることがわかります。各コンポーネントの設定は一般的に似ていますが、1つまたは2つのオプションが少し異なる場合があります。

> **名前**: ウィジェットに名前を付ける必要があります。名前の先頭に数字、アンダースコア、または特殊文字を使用することはできません。コードをエクスポートすると、その名前でウィジェットを見つけることができます。

> **レイアウト**: レイアウトを使用してウィジェットの子要素を自動的に配置できます。レイアウトが有効になっている場合、子要素のXおよびY値は手動で調整できません。ただし、子要素に`IGNORE_LAYOUT`または`FLOATING`フラグが有効になっている場合は例外です。

> **主なフラグ**
>
> - **Hidden** - オブジェクトを非表示にします。（まるで存在しないかのように）
> - **Clickable** - 入力デバイスでオブジェクトをクリック可能にします。
> - **Click focusable** - クリック時にオブジェクトにフォーカス状態を追加します。
> - **Checkable** - オブジェクトがクリックされるとチェック状態を切り替えます。
> - **Snappable** - 親でスクロールスナップが有効な場合、このオブジェクトにスナップできます。
> - **Press lock** - オブジェクトが押されたままになるようにします。
> - **Event bubble** - イベントを親にも伝播します。
> - **Gesture bubble** - ジェスチャーイベントを親にも伝播します。
> - **Adv hittest** - より正確なヒット（クリック）テストを実行できるようにします。例：丸みを帯びた角を考慮する。
> - **Ignore layout** - レイアウトによってオブジェクトを位置付け可能にします。
> - **Floating** - 親がスクロールしてもオブジェクトをスクロールせず、レイアウトを無視します。

> **スクロールフラグ**
>
> - **Scrollable** - オブジェクトをスクロール可能にします。
> - **Scroll elastic** - 内部でスクロールを許可しますが、速度を遅くします。
> - **Scroll momentum** - 「投げられた」場合にオブジェクトをさらにスクロールします。
> - **Scroll one** - スナップ可能な子要素を1つだけスクロール可能にします。
> - **Scroll chain** - スクロールを親に伝播可能にします。
> - **Scroll on focus** - フォーカス時にオブジェクトを自動的にスクロールして表示可能にします。

>**スクロール設定**
>
> - **Scroll direction** - スクロールバーは設定された方向に表示されます。
> - **Scrollbar mode** - スクロールバーは設定されたモードに従って表示されます。以下のモードがあります：
>   - **Off** - スクロールバーを表示しない。
>   - **On** - 常にスクロールバーを表示する。
>   - **Active** - オブジェクトがスクロールされている間にスクロールバーを表示する。
>   - **Auto** - コンテンツがスクロール可能なほど大きい場合にスクロールバーを表示する。

> **状態**: オブジェクトは以下の状態の組み合わせになることができます：
>
> - **Clickable** - トグルまたはチェック状態。
> - **Disable** - 無効状態。
> - **Focusable** - キーパッドやエンコーダーでフォーカスされたり、タッチパッド/マウスでクリックされたりする。
> - **Pressed** - 押されている状態。

> **スタイル設定**: スタイルを使用してウィジェットやその部分にエフェクトを追加できます。カスタム背景色、境界線、影などを追加できます。スタイル設定では、これらのパラメータの値を追加または変更できます。
>
> **状態**: 各状態にカスタムスタイルを作成できます。
>
> **スタイルプロパティ**: スタイルプロパティはスタイルのために設定するパラメータです。
>
> - **Arc**: Arcコンポーネントを持つウィジェットでArcスタイルを使用できます。
>   - **Line color** - 線の色。
>   - **Arc width** - Arcの幅。
>   - **Arc rounded** - Arc線の端を丸くする。
>   - **Arc image** - Arc線の背景画像。
> - **Background**: Backgroundスタイルはウィジェットの背景です。グラデーションを作成したり、背景の角を丸くすることができます。
>   - **Color and alpha** - オブジェクトの背景色とアルファを設定します。
>   - **Gradient color** - 背景のグラデーション色を設定します。
>   - **Bg main stop** - グラデーションの背景色が開始するポイントを設定します。
>   - **Bg gradinet stop** - 背景のグラデーション色が開始するポイントを設定します。
>   - **Bg radius** - 背景の角を丸くするために使用する半径。
>   - **Gradient direction** - グラデーションの方向。水平または垂直に設定できます。
>   - **Clip corner** - 丸い角でオーバーフローしたコンテンツをクリップする。
> - **Background Image**: 背景画像として画像を設定できます。
>   - **Bg image** - 背景画像として使用する画像。
>   - **Bg image opa** - 背景画像の不透明度。
>   - **Recolor** - Recolor機能を使用して背景画像に色を適用できます。アルファパラメータを変更して色の深さを設定します。
>   - **Bg image tiled** - 有効にすると背景画像がタイル状になります。
> - **Blend**: Blendスタイルを使用して、現在のウィジェット部分のピクセル色を次に続くオブジェクトの色と混合できます。
>   - **Blend mode** - 4つのオプションから選択します。
>     - **Normal** - デフォルト状態。
>     - **Additive** - ピクセルを加算。
>     - **Subtractive** - ピクセルを減算。
>     - **Multiply** - ピクセルを乗算。
>   - **Blend opacity** - ウィジェット部分の不透明度を設定します。
> - **Border**: Borderを使用して、選択したオブジェクトの内側の線に境界線を描画します。
>   - **Border color** - 境界線の色。
>   - **Border width** - 境界線の幅。
>   - **Border side** - 境界線の方向。
> - **Line**: LineスタイルはLineコンポーネントを持つウィジェットで使用できます。
>   - **Color** - 線の色。
>   - **Width** - 線の幅。
>   - **Line rounded** - 線の端を丸くします。
> - **Outline**: OutlineスタイルはBorderスタイルに似ていますが、ここでは選択したウィジェット部分の周囲に境界線を描画します。
>   - **Outline color** - アウトラインの色。
>   - **Outline width** - アウトラインの幅。
>   - **Outline pad** - ウィジェットの側面からの距離（ピクセル単位）。
> - **Paddings**: Paddingsスタイルはウィジェット部分にパディングを追加します。階層内でその下にある部分は、パディングで定義された距離だけシフトします（ピクセル値）。
>   - **Pad** - パディングの範囲。
> - **Shadow**: Shadowスタイルを使用して、選択したウィジェット部分に影や輝きを描画できます。
>   - **Shadow color** - 影の色。
>   - **Shadow width** - 影の幅。
>   - **Shadow spread** - 影の深さ。
>   - **Shadow OX** - X軸上で影をシフト。
>   - **Shadow OY** - Y軸上で影をシフト。
> - **Text**: Textスタイルはウィジェット上のテキストのパラメータを定義します。
>   - **Text color** - テキストの色。
>   - **Letter spacing** - 文字間のスペース。
>   - **Line spacing** - 行間のスペース。
>   - **Text align** - テキストの配置方向。
>   - **Text decor** - テキストをオーバーラインまたはアンダーラインにする。
>     - **None** - 通常のテキスト。
>     - **Underline** - アンダーライン付きテキスト。
>     - **Strikethrough** - オーバーライン付きテキスト。
>     - **Text font** - テキストのフォント。

> **イベントプロパティ**: イベントを追加することで、ウィジェットに異なるインタラクションを作成できます。例えば、ボタンを押すことで画面を変更したり、アニメーションを再生したりできます。
>
> - **イベントを追加**: Inspector Panelの下部にあるADD EVENTボタンを見つけます。まずイベントに名前を付け、次に開始するトリガーを選択します。
>   - **イベント名** - イベントの名前。
>   - **イベントトリガー** - イベント開始のインタラクション。
>     - **Pressed** - オブジェクトが押された。
>     - **Clicked** - オブジェクトが短時間押され、その後リリースされた。スクロールされた場合は呼び出されない。
>     - **Long pressed** - オブジェクトが長時間押された。
>     - **Long pressed repeat** - `long_press_time`後に、`long_press_repeat_time`ミリ秒ごとに呼び出される。スクロールされた場合は呼び出されない。
>     - **Focused** - オブジェクトがフォーカスされた。
>     - **Defocused** - オブジェクトがフォーカスを失った。
>     - **Value changed** - オブジェクトの値が変更された。
>     - **Ready** - プロセスが完了した。
>     - **Cancel** - プロセスがキャンセルされた。
>     - **Screen loaded** - 画面がロードされた。すべてのアニメーションが終了したときに呼び出される。
>     - **Screen unloaded** - 画面がアンロードされた。すべてのアニメーションが終了したときに呼び出される。
>     - **Screen load start** - 画面ロードが開始された。画面変更の遅延が終了したときに発生。
>     - **Screen unload start** - 画面アンロードが開始された。lv_scr_load/lv_scr_load_animが呼び出されたときに即座に発生。
>       - **Checked** - ウィジェットがチェックされた。
>       - **Unchecked** - ウィジェットがチェック解除された。
>       - **Gesture** - 指タッチのスライド方向。
> - **イベントを追加**
>   - **アクション**: アクションは、トリガーが発生したときに開始するイベントの要素です。
>     - **Call function**: Call functionアクションを使用して、イベントが参照できる関数名を追加できます。この関数はコードエクスポート時にui__events.cまたはui_events.pyファイルに作成されます。
>     - **Change Screen**: このアクションを使用して画面間を切り替えることができます。
>       - **Screen to** - 切り替えたい画面。
>       - **Fade mode** - 画面切り替え時のアニメーション。
>       - **Speed** - 画面切り替えの速度。
>       - **Delay** - 画面切り替えの遅延。
>     - **Increment Arc**: Arc Widgetの値を変更できます。
>     - **Increment Bar**: Bar Widgetの値を変更できます。
>     - **Increment Slider**: Slider Widgetの値を変更できます。
>     - **Modify Flag**: ウィジェットのフラグ状態を変更できます。
>     - **Play Animation**: Animation Panelで作成されたアニメーションを再生できます。
>       - **Animation** - 選択されたアニメーション。
>       - **Target** - アニメーションを使用したいターゲットウィジェット。
>       - **Delay** - アニメーションの遅延時間。
>     - **Set Opacity**: 選択されたウィジェットの不透明度。
>     - **Set Flag**: ウィジェットのフラグ状態の値を設定します。
>     - **Set Property**: ウィジェットのプロパティ値を変更します。
>     - **Set text value from arc**: Arc Widgetの値をLabel Widgetに表示するためにこのアクションを使用します。
>     - **Set text value from slider**: Slider Widgetの値をLabel Widgetに表示するためにこのアクションを使用します。
>     - **Set text value when checked**: ターゲットオブジェクトのチェック状態または未チェック状態に応じてLabel Widgetのテキストを変更します。

##### パネルの使用方法

要約すると、ダイヤルの上半分にアルバム画像を表示する必要がある場合、パネルの座標とサイズを調整し、背景画像を設定する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/8.png" style={{width:1000, height:'auto'}}/></div>

:::note
マザーボード上のメモリ使用量をできるだけ少なくするために、画像をダイヤルの解像度に合わせて圧縮し、大きな画像をそのまま使用しないでください！
:::

次に、**Bg Image opa**で画像の透明度を設定できます。完全に不透明にはしたくありません。完全に不透明な画像は、その後のテキスト表示に影響を与えるからです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/9.png" style={{width:1000, height:'auto'}}/></div>

ここで注意すべき点は、すべてのコンポーネントにはデフォルトで枠線があることです。そのため、美観を損なわないように枠線を削除する必要があります。これを行う方法は、枠線の色の透明度を0に設定することです。

つまり、**任意の色や線分を削除したい場合は、透明度を0に設定することで実現できます**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/12.png" style={{width:600, height:'auto'}}/></div>

##### ラベルの使用方法

次に、中央にテキストを追加します（**Label**ウィジェットを使用）。これにはアーティスト名と曲名を表示します。スタイルでは、フォントサイズ、色、その他の内容を変更できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/10.png" style={{width:1000, height:'auto'}}/></div>

##### Imgbutton の使用方法

テキストの下に再生コンポーネントを追加します（**Imgbutton**ウィジェットを使用）。例えば、再生/一時停止ボタンや前後のトラック切り替えボタンです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/11.png" style={{width:1000, height:'auto'}}/></div>

Imgbutton は特別な種類のボタンで、通常のボタンとの最大の違いは、押す前、押している間、押した後の3つの状態のスタイルをそれぞれ設定できることです。このプロセスは、再生状態を切り替えるシナリオに非常に似ています。もし前後のボタンにこれほど複雑な機能が必要ない場合は、通常のボタンを直接使用することもできます。

次に、押下時とリリース時のボタン画像を再生スタイルに設定し、無効状態（Disable）の場合のみ一時停止スタイルにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/13.png" style={{width:400, height:'auto'}}/></div>

次にイベントを追加します。このイベントの機能は、ユーザーがボタンを押したときに状態が無効（Disable）に切り替わり、画像の切り替え効果を実現することです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/14.png" style={{width:500, height:'auto'}}/></div>

効果を確認したい場合は、ワークスペースの右上にある再生ボタンをクリックし、再生ボタンをクリックして切り替え効果を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/15.png" style={{width:600, height:'auto'}}/></div>

##### Arc の使用方法

次に最後のコンポーネントを追加します。それは音量バーと再生進行バーです。これを Arc を使用して実現します。

Arc では、主にリングの色とサイズを調整する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/16.png" style={{width:1000, height:'auto'}}/></div>

- MAIN: これは Arc 全体の背後にある長方形の背景のスタイルデザインを指します。MAIN スタイルで設定された **Arc** は、アークエリアのスタイルを示すものではありません。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/17.png" style={{width:1000, height:'auto'}}/></div>

- INDICATOR: 開始指示エリアのアークのスタイル設定を指します。通常、INDICATOR の下で設定された **Arc** が使用されます。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/18.png" style={{width:1000, height:'auto'}}/></div>

- KNOB: 画像上のこの円の設定を指します。この円が不要な場合は、透明度を0に設定できます。この円のサイズは、INDICATOR 内の Arc で設定する必要があります。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/19.png" style={{width:1000, height:'auto'}}/></div>

これが私が達成したい効果です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/20.png" style={{width:1000, height:'auto'}}/></div>

クリック可能であることを確認した場合、Run ボタンをクリックして Arc をドラッグすると、音量バーを変更する効果を実現できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/21.png" style={{width:1000, height:'auto'}}/></div>

##### 画面切り替え

音楽インターフェースのデザインがほぼ完成したので、新しいメインインターフェースを追加してみましょう。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/22.png" style={{width:400, height:'auto'}}/></div>

次に、メイン画面を音楽画面に切り替えるイベントをデザインします。例えば、ここではメインインターフェースで指を右にスワイプすることで音楽再生インターフェースに切り替えるようにデザインします。

メインインターフェースが主役であるため、このイベントは Screen の下にあるメインインターフェースに追加する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/23.png" style={{width:500, height:'auto'}}/></div>

スライド後にゆっくり切り替わるアニメーション効果を持たせたい場合は、Speedを500に設定してください。すぐに切り替えたい場合は、Speedを0に設定する必要があります。

##### ポインターアニメーション

メインインターフェースのデザインに戻り、ダイヤル針の回転アニメーション効果を追加したいと思います。

まず最初に、秒針、分針、時針を自分で描画する必要があります。その後、これらを**Image**スタイルでメインダイヤルに追加します。

ポインターの位置調整には忍耐が必要です。ポインターが画像上の固定点を中心に回転することを確認する必要があります。

画像配置にはTransformを設定します。Imageタブの下にあるPivotは回転点の座標を設定します。一般的な設定方法としては、まずTransformを調整してポインターの固定点がダイヤルの中心にあることを確認し、その後Pivotの座標を少し調整します。すべての角度でポインターの固定点が動かない場合、これらのパラメータが最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/24.png" style={{width:1000, height:'auto'}}/></div>

すべてのポインター位置が決定したら、新しいアニメーション効果を追加することができます。異なるポインターのアニメーション効果設定は以下の図に示されています。

<table align="center">
 <tr>
     <th>秒針</th>
     <th>分針</th>
        <th>時針</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/25.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/26.png" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/27.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>

最後に、メイン画面がロードされる際にポインターの動きのアニメーションを再生するように設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/28.png" style={{width:400, height:'auto'}}/></div>

:::tip
上記のチュートリアルはソフトウェア使用シナリオの80%を基本的にカバーしています。他の多くのコンポーネントも非常に似ています。最後に、ソフトウェア使用時のいくつかのヒントを以下に示します。

1. タッチ機能を持つすべてのコンポーネントを最上部に配置する必要があります。そうしないと、コンポーネントのタッチ機能の実装に干渉します。

    デフォルトでは、ソフトウェアによって最後に配置されたコンポーネントが最上部にあります。つまり、Hierarchyタブで隣接して配置されたコンポーネントが最上部にある傾向があります。先ほど設計した音楽インターフェースでは、最上層は音量を調整するArcであり、問題が発生します。Arcはダイヤル全体を占める矩形であり、再生ボタンのタッチに影響を与えます。そのため、通常は再生ボタンのレイヤーをArcレイヤーの上部に調整する必要があります。これによりタッチに影響を与えません。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/29.png" style={{width:400, height:'auto'}}/></div>

2. 不要な機能をできるだけオフにして、より多くのメモリを節約してください。

    すべてのコンポーネントにはデフォルトでいくつかのFlagsがチェックされていますが、それらすべてが必要なわけではありません。デフォルトの設定では問題ありませんが、不要なFlagsをオフにすることでダイヤルUIがよりスムーズに動作します。

    例えば、音楽インターフェースの背景アルバムにはクリックやアニメーションが必要ありません。そのためFlagsのオプションをオフにするのが良いです。ただし、オフにする際には実際の状況を考慮する必要があります。例えば、スライドでダイヤルページを切り替えるシーンでは、いくつかのFlagsをオフにするとスライドが無効になる場合があります。そのため、効果を確認しながら慎重にオフにする必要があります。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/30.png" style={{width:1000, height:'auto'}}/></div>

3. すべてのコンポーネント、アニメーション、イベントなどにユニークな名前を付けることを忘れないでください。

    ソフトウェアは一部のパターンやアニメーションを描画する時間を節約できますが、より複雑な効果を実現するには後でプログラムを作成する必要がある場合があります。その際、コード内でコンポーネントの場所を迅速に見つけることが重要です。コンポーネント、イベント、アニメーションに名前を付けることが鍵です！

:::

#### Step5. プログラムのエクスポートと適用

ダイヤルUIを描画したら、UIをプログラムにエクスポートしてArduino経由でXIAOにアップロードすることを検討できます。ソフトウェアの左上をクリックし、**Export** -> **Create Template Project**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/31.png" style={{width:400, height:'auto'}}/></div>

その後、保存するパスを選択するとコードが自動的にエクスポートされます。エクスポートされたプロジェクトテンプレートには以下のファイルが含まれています。

- **libraries**: このフォルダディレクトリにはプロジェクトで使用する必要があるすべてのライブラリが含まれています。このチュートリアルでは、このディレクトリ内の*lvgl*および*TFT_eSPI*ライブラリは**不要**ですが、*ui*および*lv_conf.h*は**必要**です。
- **ui**: Arduino用のプロジェクトプログラムが含まれている.inoファイル。
- README.md

次に行うべきことは、必要なライブラリと設定ファイルをArduinoのライブラリフォルダに最初に配置することです。その後、.inoファイルを修正して機能が動作することを確認します。

SquareLine Studioによってエクスポートされたlibrariesフォルダディレクトリから**ui**フォルダと**lv_conf.h**ファイルをArduinoライブラリのルートディレクトリにコピーしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/101.png" style={{width:1000, height:'auto'}}/></div>

次に、uiフォルダ内の.inoファイルを直接開きます。その後、プログラムがスムーズにコンパイルされるように、以下のファイルを変更する必要があります。

- **ui.ino**:

<table align="center">
 <tr>
  <th>説明</th>
     <th>スクリーンショット</th>
     <th>コードセグメント</th>
 </tr>
 <tr>
  <th>TFTライブラリの定義とラウンドスクリーンライブラリのインポート</th>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/102.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L1" target="_blank"><b>コード例を見る</b></a></td>
 </tr>
    <tr>
  <th>tftクラスの重複定義をコメントアウト</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/103.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L20" target="_blank"><b>コード例を見る</b></a></td>
 </tr>
 <tr>
  <th>タッチ機能の書き換え</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/104.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L46" target="_blank"><b>コード例を見る</b></a></td>
 </tr>
 <tr>
  <th>画面初期化関数とタッチ初期化関数の追加</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/105.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L86" target="_blank"><b>コード例を見る</b></a></td>
 </tr>
 <tr>
  <th>画面の回転</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/106.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L94" target="_blank"><b>コード例を見る</b></a></td>
 </tr>
</table>

次に、使用するXIAOを選択してコンパイルおよびアップロードを行います。

### LVGLライブラリのカスタマイズオプションについて

コンパイル後に一部のコンポーネントが定義されていないというエラーメッセージが表示された場合、Arduinoライブラリのルートディレクトリにある**lv_conf.h**ファイルをSquareLine Studioからエクスポートされた**lv_conf.h**ファイルに置き換えていない可能性が高いです。

マザーボードのメモリを節約するために、lv_conf.hファイルではデフォルトで一部のlvgl機能が無効化されています。しかし、ダイヤル描画でこれらの機能を使用する場合は手動で有効化する必要があります。

- **Windows**システムでの`lv_conf.h`のデフォルトパスは以下の通りです：

`C:\Users\{UserName}\Documents\Arduino\libraries`

- **MacOS**システムでの`lv_conf.h`のデフォルトパスは以下の通りです：

`\Users\{UserName}\Documents\Arduino\libraries`

簡単な例として、上記の例では`MONTSERRAT 8`フォントを使用していますが、デフォルトではこのフォントが無効化されているため、コンパイルプロセス中にエラーが発生する可能性があります。

その場合、lv_conf.hファイル内でこのフォントの後にある0を1に変更するだけで、フォントが有効化されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/38.png" style={{width:600, height:'auto'}}/></div>

同様のエラーが発生した場合は、カスタマイズ機能が有効化されているかどうかを再確認してください。

### LVGLベースのダイヤルプログラム

円形スクリーン用に2つのダイヤルスタイルを作成し、ユーザーの参考に提供しています。複雑なUIロジックのため、これにはXIAOマザーボードの一定の性能とメモリが必要です。以下のダイヤルプログラムをコンパイルする際にメモリ不足エラーが発生した場合、XIAOのアップグレードを検討するか、ダイヤルの機能を削減する必要があります。

- ダイヤルスタイル I:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/ui" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<!-- - Dial Style II:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div> -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
