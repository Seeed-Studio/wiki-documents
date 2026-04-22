---
description: XIAO 用 Seeed Studio Round Display で LVGL と TFT を使用する
title: すべての XIAO シリーズで LVGL と TFT を使用する
keywords:
  - XIAO
  - Round Dislay
  - lvgl
  - draw dials
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /using_lvgl_and_tft_on_round_display
sidebar_position: 3
sku: 104030087
last_update:
  date: 09/12/2024
  author: Citric
createdAt: '2023-03-17'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/using_lvgl_and_tft_on_round_display/
---

# すべての XIAO シリーズ向け Seeed Studio Round Display で LVGL と TFT を使用する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/000.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

<br></br>


Seeed Studio Round Display 製品をご購入いただきありがとうございます。本チュートリアルのこのセクションでは、`Seeed_GFX` ライブラリと `LVGL` ライブラリを使用して Round Display 上にさまざまな豊かでおもしろいダイヤルパターンを描画する方法に焦点を当て、これら 2 つの有用だが複雑なライブラリの一般的な関数の使い方を、簡単なものから段階的に紹介していきます。本チュートリアルの内容を通して、この製品を使って理想的なダイヤルパターンを描けるようになることを願っています。どうぞ学習をお楽しみください。

## はじめに

学習に入る前に、次の準備をしておくことをおすすめします。

### ハードウェアの準備

デモンストレーションのため、このチュートリアルではマスターコントローラとして **XIAO ESP32S3** を使用します。

<table align="center">
 <tr>
     <th>Seeed Studio Round Display for XIAO</th>
     <th>Seeed Studio XIAO ESP32S3</th>
 </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:210, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
 <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

他の XIAO 製品を使用したい場合でも、本記事のチュートリアルと方法は同様に適用できます。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAO を Round Display に取り付ける際は、XIAO の Type-C コネクタが Round Display の外側を向くようにし、そのうえで 7 ピンヘッダ 2 列に各ピンを合わせて接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

### ソフトウェアの準備

この部分については、[Basic Wiki](https://wiki.seeedstudio.com/ja/get_start_round_display#software-preparation) で詳しく説明しているので、そちらを直接お読みください。

## Seeed_GFX ライブラリを使ってシンプルなダイヤルを描画する

[Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX)（TFT_eSPI ライブラリを改変し、Seeed のディスプレイ製品を深くサポートしたもの）は、32 ビットプロセッサ向けの高機能な Arduino IDE 互換グラフィックスおよびフォントライブラリです。XIAO Round Display によって提供される TFT ライブラリは、XIAO と XIAO Round Display の互換性を取った後のこのライブラリをベースとしており、XIAO シリーズ全体での使用をサポートします。

### TFT ライブラリの一般的なインターフェース

#### 1. TFT オブジェクトの作成

```c
TFT_eSPI tft = TFT_eSPI()
TFT_eSPI tft = TFT_eSPI(240,240)        // Set the screen size at the time of object creation
```

#### 2. 初期化

```c
void init(uint8_t tc = TAB_COLOUR)
void begin(uint8_t tc = TAB_COLOUR)
```

`tft.begin()` と `tft.init()` は、同じ機能を持つ 2 つの関数です。

#### 3. 画面のクリア

```c
void fillScreen(uint32_t color) // Fill the screen with a certain color
```

#### 4. 画面の向きの設定

```c
void setRotation(uint8_t r);      // Set the display image rotation direction, r optional parameters for 0, 1, 2, 3
uint8_t getRotation(void)         // Read the current rotation angle
```

0、1、2、3 はそれぞれ 0°、90°、180°、270° を表し、4 は鏡像です。

#### 5. 色変換

```c
uint16_t color565(uint8_t red, uint8_t green, uint8_t blue)    // Convert 8-bit red, green and blue to 16-bit
uint16_t color8to16(uint8_t color332)                          // Convert 8-bit color to 16-bit
uint8_t  color16to8(uint16_t color565)                         // Convert 16-bit color to 8-bit
uint32_t color16to24(uint16_t color565)                        // Convert 16-bit color to 24-bit
uint32_t color24to16(uint32_t color888)                        // Convert 24-bit color to 16-bit
```

#### 6. 色の反転

```c
void invertDisplay(bool i)      //i = true to invert all display colors, i = false to display normally
```

#### 7. テキスト関連の設定

```c
/* cursor */
void setCursor(int16_t x, int16_t y)                     // Set the cursor for tft.print()
void setCursor(int16_t x, int16_t y, uint8_t font)       // Set the cursor and font size of tft.print()
int16_t getCursorX(void)                                 // Read the current cursor x position (moves with tft.print())
int16_t getCursorY(void)                                 // Retrieve the current cursor y position

/* font color */
void setTextColor(uint16_t color)                        // Set the color of characters only
void setTextColor(uint16_t fgcolor, uint16_t bgcolor, bool bgfill = false)   // Set the character foreground and background colors

/* font size */
void setTextSize(uint8_t size)                           // Set the character size multiplier (this increases the pixel size)
void setTextWrap(bool wrapX, bool wrapY = false)         // Turn on/off line feeds for text in TFT width and/or height

/* Text reference position */
void setTextDatum(uint8_t datum)                         // Set text reference position (default is top left corner)
uint8_t getTextDatum(void)                               // Get the text reference position

/* Set the background fill, which can be used to clear the display of the specified area */
void setTextPadding(uint16_t x_width)                    // Set the text fill (background margin/rewrite) width in pixels
uint16_t getTextPadding(void)                            // Get text fill
```

上記の関数から分かるように、表示するテキストを出力したい場合は、単純に `tft.print()` 関数を使用すればかまいません。

#### 8. 単純な図形の描画

次の関数を使用することで、ピクセル点、直線、矩形、円などの簡単な図形を描画できます。

```c
drawPixel(int32_t x, int32_t y, uint32_t color)    // Plotting individual pixel points

drawLine(int32_t xs, int32_t ys, int32_t xe, int32_t ye, uint32_t color)  // Draw a line

drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color)   // Draw a rectangle
fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color)  // Draw a rectangle with a fill color

drawCircle(int32_t x, int32_t y, int32_t r, uint32_t color)  // Draw a circle
fillCircle(int32_t x, int32_t y, int32_t r, uint32_t color)  // Draw a circle with a fill color

drawEllipse(int16_t x, int16_t y, int32_t rx, int32_t ry, uint16_t color)  // Draw a ellipse
fillEllipse(int16_t x, int16_t y, int32_t rx, int32_t ry, uint16_t color)  // Draw a ellipse with a fill color

drawTriangle(int32_t x1,int32_t y1, int32_t x2,int32_t y2, int32_t x3,int32_t y3, uint32_t color)  // Draw a triangle
fillTriangle(int32_t x1,int32_t y1, int32_t x2,int32_t y2, int32_t x3,int32_t y3, uint32_t color)  // Draw a triange with a fill color
```

#### 9. 複雑な図形の描画

TFT ライブラリには、角丸長方形、円弧、非常になめらかな形状など、複雑な図形を描画するためのメソッドも用意されています。

```c
/** 
    Draw a pixel blended with the background pixel colour (bg_color) specified,  return blended colour 
    If the bg_color is not specified, the background pixel colour will be read from TFT or sprite 
**/
drawPixel(int32_t x, int32_t y, uint32_t color, uint8_t alpha, uint32_t bg_color)

/** 
    Draw a small anti-aliased filled circle at ax,ay with radius r (uses drawWideLine)
    If bg_color is not included the background pixel colour will be read from TFT or sprite
**/
drawSpot(float ax, float ay, float r, uint32_t fg_color, uint32_t bg_color)


drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color)  // Draw vertical straight lines
drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color)  // Draw horizontal lines
drawWideLine(float ax, float ay, float bx, float by, float wd, uint32_t fg_color, uint32_t bg_color)  // Draw a thick solid line
drawWedgeLine(float ax, float ay, float bx, float by, float aw, float bw, uint32_t fg_color, uint32_t bg_color);  //Draws a tapered line. aw and bw represent the start and end width of the tapered line, respectively.


/**
    As per "drawSmoothArc" except the ends of the arc are NOT anti-aliased, this facilitates dynamic arc length changes with arc segments and ensures clean segment joints. 
    The sides of the arc are anti-aliased by default. If smoothArc is false sides will NOT be anti-aliased
**/
drawArc(int32_t x, int32_t y, int32_t r, int32_t ir, uint32_t startAngle, uint32_t endAngle, uint32_t fg_color, uint32_t bg_color, bool smoothArc);

/**
    Draw an anti-aliased (smooth) arc between start and end angles. Arc ends are anti-aliased.
    By default the arc is drawn with square ends unless the "roundEnds" parameter is included and set true
    Angle = 0 is at 6 o'clock position, 90 at 9 o'clock etc. The angles must be in range 0-360 or they will be clipped to these limits
    The start angle may be larger than the end angle. Arcs are always drawn clockwise from the start angle.
**/
drawSmoothArc(int32_t x, int32_t y, int32_t r, int32_t ir, uint32_t startAngle, uint32_t endAngle, uint32_t fg_color, uint32_t bg_color, bool roundEnds);

/**
    Draw an anti-aliased filled circle at x, y with radius r
    Note: The thickness of line is 3 pixels to reduce the visible "braiding" effect of anti-aliasing narrow lines this means the inner anti-alias zone is always at r-1 and the outer zone at r+1
**/
drawSmoothCircle(int32_t x, int32_t y, int32_t r, uint32_t fg_color, uint32_t bg_color)

/**
    Draw an anti-aliased filled circle at x, y with radius r
    If bg_color is not included the background pixel colour will be read from TFT or sprite
**/
fillSmoothCircle(int32_t x, int32_t y, int32_t r, uint32_t color, uint32_t bg_color)


/**
    Draw a rounded rectangle that has a line thickness of r-ir+1 and bounding box defined by x,y and w,h
    The outer corner radius is r, inner corner radius is ir
    The inside and outside of the border are anti-aliased
**/
drawSmoothRoundRect(int32_t x, int32_t y, int32_t r, int32_t ir, int32_t w, int32_t h, uint32_t fg_color, uint32_t bg_color, uint8_t quadrants)

/**
    Draw a filled rounded rectangle , corner radius r and bounding box defined by x,y and w,h
**/
fillSmoothRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t radius, uint32_t color, uint32_t bg_color)
```

#### 10. 変数とテキスト

特定の文字列を単純に表示するだけでなく、時間やセンサー値などの変数を画面に表示したい場合もあります。そのときは、変数の型に応じて、次のような異なる関数を使い分けることができます。

```c
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
drawNumber(long intNumber, int32_t x, int32_t y, uint8_t font) // Draw integer using specified font number. If no font is set (the last parameter, the default font)
drawFloat(float floatNumber, uint8_t decimal, int32_t x, int32_t y, uint8_t font), // Draw float using specified font number. If no font is set (the last parameter, the default font)
drawString(const char *string, int32_t x, int32_t y, uint8_t font),  // Draw string using specified font number. If no font is set (the last parameter, the default font)
```

#### 11. 画像処理

TFT ライブラリで `pushImage()` 関数を使って画像を画面に表示するには、次の手順に従います。

- 画像ファイルを、Arduino が認識できる C/C++ 配列形式に変換します。**Image2CPP** などのオンラインツールを使用して、ビットマップ画像を配列形式に変換できます。

- 生成された画像配列ファイルを Arduino プログラムにインクルードします。

- TFT ライブラリと画面を初期化し、画面の解像度とカラーモードを設定します。

- `tft.pushImage(x, y, width, height, data)` 関数を使用して画像データを画面に送ります。ここで、x と y は画像左上隅の座標、width と height は画像の幅と高さ、data は画像配列です。

```c
// Image data array
const unsigned char image_data[] PROGMEM = {
  // Insert the converted C/C++ array data of the image here
};

tft.pushImage(x, y, image_width, image_height, image_data);
```

#### 12. TFT_eSprite クラス

`TFT_eSprite` と `TFT_eSPI` はどちらも TFT LCD ディスプレイ用の Arduino ライブラリですが、機能や設計目的が異なります。

TFT_eSPI は、多くの高度な機能と設定オプションを備えた強力なライブラリで、さまざまな表示効果を実現できます。複数のディスプレイドライバチップやコントローラをサポートし、複数の Arduino ハードウェアプラットフォームで使用できます。SPI インターフェースと高度に最適化されたコードを使用して、高速なリフレッシュレートと小さなコードサイズを実現しています。TFT_eSPI ライブラリは、ゲーム、グラフィックス、GUI など、さまざまなアプリケーションに使用できます。

TFT_eSprite は TFT_eSPI ライブラリを補完するもので、主にゲームキャラクター、アイコン、テキストなどの小さなスプライトをディスプレイ上に描画するために使用されます。TFT_eSprite は、画像をメモリにキャッシュして部分的なリフレッシュを行うため、より高速な描画速度を実現できます。これにより、小さなスプライトを更新する際のリフレッシュレートを向上させることができ、プロセッサ時間とメモリ領域を節約できます。

したがって、TFT_eSPI は複数のアプリケーションに適した強力な汎用ライブラリであり、TFT_eSprite は小さなスプライトの描画に特化したライブラリで、より高い描画効率を提供できます。

TFT_eSPI ライブラリを使用する際の一般的な書式は次のとおりです。

```c
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
  tft.init();
  tft.setRotation(1);
}

void loop() {
    // Write the code to draw the graph
}
```

TFT_eSprite ライブラリを使用する際の一般的な書式は次のとおりです。

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite spr = TFT_eSprite(&tft);

void setup() {
  tft.init();
  tft.setRotation(1);
}

void loop() {
    spr.createSprite(128, 128);  // Create a sprite of 128*128 size

    // Write the code to draw the graph

    spr.pushSprite(0, 0);  // Placement of the drawn sprite
    spr.deleteSprite();
}
```

:::note
上記のサンプルコードでは、プログラムが `loop()` 関数を抜けるときに `spr.deleteSprite();` が呼び出され、TFT_eSprite オブジェクトが削除されてメモリ領域が解放されます。こうすることで、次のループで TFT_eSprite オブジェクトを作成する際に、以前に解放されたメモリ領域を再利用でき、メモリリソースの無駄を防ぐことができます。
:::

TFT ライブラリの関数やその使い方についての詳細は、ライブラリ内の **TFT_eSPI.h** および **TFT_eSPI.cpp** ファイルを読むことをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/1.png" style={{width:300, height:'auto'}}/></div>

### TFT ライブラリのカスタマイズオプションについて

カスタムフォントライブラリや、容量節約のために有効化されていない機能を使用したい場合があります。その場合は、**Setup66_Seeed_XIAO_Round.h** ファイルの内容を変更する必要があります。

- **Windows** システムでのこのファイルのデフォルトパスは次のとおりです：

`C:\Users\{UserName}\Documents\Arduino\libraries\Seeed_GFX\User_Setups\Setup66_Seeed_XIAO_Round.h`

- **MacOS** システムでのこのファイルのデフォルトパスは次のとおりです：

`\Users\{UserName}\Documents\Arduino\libraries\Seeed_GFX\User_Setups\Setup66_Seeed_XIAO_Round.h`

実際の使用状況に応じて、不要な機能をオンまたはオフにしてください。
例えば、カスタムフォントを使用したい場合は、`#define SMOOTH_FONT` のコメントを外す必要があります。そうしないと、実行時にエラーが発生する可能性があります。

もちろん、カスタムフォントのヘッダファイルは ino ファイルと同じディレクトリに保存しておく必要があります。これはエラーを回避するための必須手順です。

### TFT ベースのダイヤルサンプルプログラム

Round Display 用に、直接使用できるダイヤルプログラムを用意しました。一部の XIAO モデルのメモリ容量に制限があるため、このプログラムは基本的な針の動きの機能のみを実装しており、その他の機能は設計していません。ユーザーはこのプログラムを利用して TFT ライブラリの使い方やポインタ移動の機能を学び、実際の状況に応じて、より複雑なダイヤルの開発を完了させることができます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## LVGL ライブラリを使用してシンプルなダイヤルを描画する

LVGL ライブラリは汎用の組み込みグラフィックスライブラリで、ボタン、ラベル、リストなど、さまざまなユーザーインターフェースを構築するために使用できる豊富な GUI コントロールセットを提供します。TFT ライブラリとは異なり、LVGL ライブラリは抽象化されたオブジェクト指向のグラフィックスインターフェースを提供し、使いやすく保守しやすい一方で、パフォーマンスや信頼性の面でいくつかのトレードオフが生じる可能性があります。

LVGL ライブラリは、複雑なユーザーインターフェースを構築する際に、コードの記述と保守の作業負荷を軽減できる非常に有用なツールです。一方、TFT ライブラリは、リアルタイム画像処理や動画レンダリングなど、高性能なグラフィックスを必要とするアプリケーションにより適しています。

### LVGL ライブラリの一般的なインターフェース

LVGL ライブラリの API は非常に豊富で複雑なので、LVGL を使用するすべての方に、公式の LVGL 入門ドキュメントに目を通すことをおすすめします。

- [Get Started](https://docs.lvgl.io/latest/en/html/get-started/index.html)
- [Display interface](https://docs.lvgl.io/latest/en/html/porting/display.html)
- [Input device interface](https://docs.lvgl.io/latest/en/html/porting/indev.html)
- [Tick interface](https://docs.lvgl.io/latest/en/html/porting/tick.html)
- [Operating system and interrupts](https://docs.lvgl.io/latest/en/html/porting/os.html)

### SquareLine Studio で複雑な UI インターフェースを描画する

豊富な LVGL 公式ドキュメントを読むことや、自分で LVGL グラフィックスプログラムを書くことに加えて、公式の LVGL ツールである SquareLine Studio を使用して開発効率を向上させることもできます。

次に、円形スクリーン上でのソフトウェアの使い方や設定方法について簡単に紹介し、このソフトウェアを使ってインターフェース設計を素早く始められるようにします。

:::caution
SquareLine Studio の **v1.5.1** バージョンの使用をおすすめします。これは本 Wiki 執筆時点での最新バージョンでもあります。

本チュートリアルの作成に使用した環境：

1. Bodmer による **[Seeed_GFX library](https://github.com/Seeed-Studio/Seeed_GFX)** を Seeed Studio が改変したもの。

2. kisvegabor, embeddedt, pete-pjb による **[SeeedStudio_lvgl library](https://github.com/Seeed-Projects/SeeedStudio_lvgl)** を Seeed Studio が改変したもの。
:::

#### Step1. SuqareLine Studio をダウンロードする

[here](https://squareline.io/) をクリックして SquareLine Studio の公式サイトにアクセスし、**TRY IT FOR FREE** をクリックしてソフトウェアをコンピュータにダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/3.png" style={{width:1000, height:'auto'}}/></div>

このソフトウェアをコンピュータで初めて使用する場合は、30 日間の無料トライアルが利用できます。そうでない場合でも、無料版で最大 5 ページ、50 個のウィジェットまで描画することができます。

:::caution
初めてのユーザーの場合、残高のないアカウントでログインするために登録しないでください。30 日間の無料トライアルをすべて消費してしまう可能性があります！
:::

#### Step2. 画面インターフェース情報を設定する

次に、ソフトウェアを開き、まず空白のディスプレイページを作成します。

Arduino でプログラミングしているため、ここで作成するものも Arduino 用のファイルである必要があります。

今回使用する円形スクリーンの解像度は **240*240** で、**16bit** カラーデプスのみをサポートします。それ以外に、プロジェクトの名前とテーマは自分で定義する必要があります。ここではテーマとしてダークスタイルを使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/4.png" style={{width:1000, height:'auto'}}/></div>

もし私のように操作が速すぎて、ダイヤルの形状を設定する前にプロジェクトを作成してしまった場合はどうすればよいでしょうか？問題ありません。メインインターフェースの左上にある Project Settings タブから、先ほど行った設定を変更することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/5.png" style={{width:1000, height:'auto'}}/></div>

:::caution
正式に描画を開始する前に、プロジェクト設定を完了し、画面仕様と一致していることを必ず確認してください。そうしないと、描画したものが画面に正しく表示されない可能性があります。

プロジェクト作成後にすべてを変更できるわけではありません（例：プロジェクト名）。プロジェクト名には英語以外の言語や特殊文字を使用しないでください。また、**"-"** 記号は使用せず、必ず **"_"** に置き換えてください。そうしないと、エクスポートしたプログラムがコンパイル時にエラーになる可能性があります！
:::

#### Step3. ソフトウェアの機能レイアウトを理解する

自分の使用習慣に基づき、ソフトウェアのメインインターフェースを大まかに次の部分に分けました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/6.png" style={{width:1000, height:'auto'}}/></div>

- **Hierarchy and Animation ペイン**：このエリアでは、異なるダイヤルページ、表示レイヤー、アニメーションを設定できます。

- **Widgets**：ここでは、ディスプレイページに追加するコンポーネントを選択できます。これらのコンポーネントはソフトウェアに統合されており、そのまま使用できます。ここにないコンポーネントは、後で自分のプログラミングソフトウェアで追加する必要があります。

- **Working Area**：ワークスペースでは、ドラッグ＆ドロップで特定のコンポーネントの位置を変更できます。さらに便利なことに、最終的な表示はワークスペースに表示されている内容と一致するため、WYSIWYG（見たままが得られる）となります。

- **Assets & Console**：Assets には追加した画像クリップが表示され、これらの画像クリップは画像挿入をサポートするコンポーネントで使用できます。Console には、設定中に発生したエラーメッセージ（ある場合）が表示されます。

- **Setup Area**：ここでは主にコンポーネントのプロパティを設定します。

まずソフトウェアインターフェース全体について大まかに把握し、その後、各部分の使い方を実践を通して理解していきます。

#### Step4. ソフトウェアを使ってアイデアを形にする

今、音楽インターフェースを描きたいとします。もちろん私は音楽を聴くのが大好きなので、例として音楽表示インターフェースを描いてみたいと思います。

この音楽表示画面には、次のコンポーネントを持たせたいと考えています。

- 好きな音楽のアルバムカバーアートを背景にする。
- 再生進行状況バーを持たせる
- 音量調整バーを持たせる
- 再生と一時停止ボタンを持たせる

要件を整理したら、次に建物を建てるように、下から上へと表示コンポーネントを設計していく必要があります。

最初のステップは、音楽の背景画像を作成することです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/7.png" style={{width:1000, height:'auto'}}/></div>

ウィジェットから **Panel** を選択します。クリックすると自動的にダイヤルの中央に配置されますが、ドラッグしてダイヤル上の任意の位置に配置することもできます。

ダイヤルの背景に直接画像を置くのではなく Panel に表示画像を入れるのは、ダイヤル全体をこの画像にしたくないことと、Panel のサイズを自由に変更できるためです。

この時点で、Setup Area にすでに一連のプロパティが表示されており、設定できるようになっていることがわかります。各コンポーネントの設定は一般的に似ており、1～2 個のオプションだけが少し異なる場合があります。

> **Name**: ウィジェットに名前を付ける必要があります。名前の先頭に数字、アンダースコア、特殊文字を使用することはできません。コードをエクスポートした後、その名前でウィジェットを見つけることができます。

> **Layout**: レイアウトを使用して、ウィジェットの子要素を自動的に配置できます。レイアウトが有効な場合、子要素の X および Y の値は、子要素に `IGNORE_LAYOUT` または `FLOATING` フラグが有効になっていない限り、手動で調整することはできません。

> **Main Flags**
>
> - **Hidden** - オブジェクトを非表示にします。（まったく存在しないかのように）
> - **Clickable** - オブジェクトを入力デバイスでクリック可能にします
> - **Click focusable** - クリックされたときにオブジェクトにフォーカス状態を追加します
> - **Checkable** - オブジェクトがクリックされたときにチェック状態を切り替えます
> - **Snappable** - 親でスクロールスナップが有効な場合、このオブジェクトにスナップできるようにします
> - **Press lock** - 押下がオブジェクトから外れても押下状態を維持します
> - **Event bubble** - イベントを親にも伝播させます
> - **Gesture bubble** - イベントを親にも伝播させます
> - **Adv hittest** - より正確なヒット（クリック）テストを実行できるようにします。例：角丸を考慮する
> - **Ignore layout** - レイアウトによってオブジェクトの位置決めを可能にします
> - **Floating** - 親がスクロールしてもオブジェクトをスクロールさせず、レイアウトを無視します

> **Scroll Flags**
>
> - **Scrollable** - オブジェクトをスクロール可能にします
> - **Scroll elastic** - 内部をスクロール可能にしますが、速度を遅くします
> - **Scroll momentum** - 「投げる」ようにスクロールしたときにオブジェクトをさらにスクロールさせます
> - **Scroll one** - スナップ可能な子要素を 1 つだけスクロールできるようにします
> - **Scroll chain** - スクロールを親に伝播できるようにします
> - **Scroll on focus** - フォーカスされたときにオブジェクトが見えるよう、自動的にスクロールします

>**Scroll Settings**
>
> - **Scroll direction** - スクロールバーは設定された内容に応じて表示されます
> - **Scrollbar mode** - スクロールバーは設定されたモードに応じて表示されます。次のモードが存在します：
>   - **Off** - スクロールバーを表示しない
>   - **On** - 常にスクロールバーを表示する
>   - **Active** - オブジェクトがスクロールされている間、スクロールバーを表示する
>   - **Auto** - コンテンツがスクロール可能なほど大きい場合にスクロールバーを表示する

> **States**: オブジェクトは次の状態を組み合わせて持つことができます：
>
> - **Clickable** - トグルまたはチェック状態
> - **Disable** - 無効状態
> - **Focusable** - キーパッドやエンコーダでフォーカスされた、またはタッチパッド／マウスでクリックされた状態
> - **Pressed** - 押されている状態

> **スタイル設定**: スタイルはウィジェットやその一部に効果を追加するために使用できます。カスタムの背景色、ボーダー、シャドウなどを追加できます。スタイル設定では、これらのパラメータの値を追加または変更できます。
>
> **状態**: 各状態ごとにカスタムスタイルを作成できます。
>
> **スタイルプロパティ**: スタイルプロパティは、スタイルに対して設定されるパラメータです。
>
> - **Arc**: Arc スタイルは Arc コンポーネントを持つウィジェットで使用できます。
>   - **Line color** - 線の色
>   - **Arc width** - Arc の幅
>   - **Arc rounded** - Arc 線の端を丸くします
>   - **Arc image** - Arc 線の背景画像
> - **Background**: Background スタイルはウィジェットの背景です。グラデーションを作成したり、背景の角を丸くしたりできます。
>   - **Color and alpha** - オブジェクトの背景色とアルファ値を設定します。
>   - **Gradient color** - 背景のグラデーションカラーを設定します。
>   - **Bg main stop** - グラデーションにおいて背景色が開始する位置を設定します。
>   - **Bg gradinet stop** - 背景のグラデーションカラーが開始する位置を設定します
>   - **Bg radius** - 背景の角を丸くするために使用する半径
>   - **Gradient direction** - グラデーションの方向。水平方向または垂直方向にできます。
>   - **Clip corner** - 有効にすると、丸めた角からはみ出したコンテンツをクリップします。
> - **Background Image**: 画像を背景画像として設定できます。
>   - **Bg image** - 背景画像として使用する画像
>   - **Bg image opa** - 背景画像の不透明度
>   - **Recolor** - Recolor 機能を使うと、背景画像に色を適用できます。アルファパラメータを変更して色の濃さを設定します。
>   - **Bg image tiled** - 有効にすると、背景画像がタイル状に並べられます
> - **Blend**: Blend スタイルを使用すると、現在のウィジェットパーツのピクセルカラーを、後に続くオブジェクトの色と混合できます。
>   - **Blend mode** - 4 つのオプションから選択します。
>     - **Normal** - デフォルト状態
>     - **Additive** - ピクセルを加算
>     - **Subtractive** - ピクセルを減算
>     - **Multiply** - ピクセルを乗算
>   - **Blend opacity** - ここでウィジェットパーツの不透明度を設定できます
> - **Border**: Border を使用すると、選択したオブジェクトの内側の線に沿ってボーダーを描画できます。
>   - **Border color** - ボーダーの色
>   - **Border width** - ボーダーの幅
>   - **Border side** - ボーダーの向き
> - **Line**: Line スタイルは Line コンポーネントを持つウィジェットで使用できます。
>   - **Color** -  線の色
>   - **Width** - 線の幅
>   - **Line rounded** - 線の端を丸くします
> - **Outline**: Outline スタイルは Border スタイルに似ていますが、ここでは選択したウィジェットパーツの周囲にボーダーを描画します。
>   - **Outline color** - アウトラインの色
>   - **Outline width** - アウトラインの幅
>   - **Outline pad** - ウィジェットの端からの距離（ピクセル）
> - **Paddings**: Paddings スタイルはウィジェットパーツにパディングを付与します。これは、階層内でその下にあるパーツが、パディングで定義されたピクセル値の距離だけシフトすることを意味します。
>   - **Pad** - パディングの大きさ
> - **Shadow**: Shadow スタイルを使用すると、選択したウィジェットパーツにシャドウまたはグローを描画できます。
>   - **Shadow color** - シャドウの色
>   - **Shadow width** - シャドウの幅
>   - **Shadow spread** - シャドウの広がり
>   - **Shadow OX** - X 軸方向にシャドウをシフト
>   - **Shadow OY** - Y 軸方向にシャドウをシフト
> - **Text**: Text スタイルは、ウィジェット上にあるテキストのパラメータを定義します。
>   - **Text color** - テキストの色
>   - **Letter spacing** - 文字間のスペース
Line spacing - 行間のスペース
>   - **Text align** - テキストの配置方向
>   - **Text decor** - テキストに上線または下線を付けることができます
>     - **None** - 通常のテキスト
>     - **Understand** - 下線付きテキスト
>     - **Strikethrough** - 上線付きテキスト
>     - **Text font** - テキストのフォント
>
> **イベントプロパティ**: イベントを追加することで、ボタンを押したときに画面を切り替えたり、アニメーションを再生したりといった、さまざまなインタラクションをウィジェットに作成できます。
>
> - **Add Event**: Inspector パネルの下部に ADD EVENT ボタンがあります。まずイベントに名前を付け、その後、開始させるトリガーを選択します。
>   - **Event name** - イベントの名前
>   - **Event Trigger** - イベント開始のインタラクション
>     - **Pressed** - オブジェクトが押された
>     - **Clicked** - オブジェクトが短時間押されてから離された場合。スクロールされた場合は呼び出されません
>     - **Long pressed** - オブジェクトが長時間押された
>     - **Long pressed repeat** - `long_press_time` 後、`long_press_repeat_time` ms ごとに呼び出されます。スクロールされた場合は呼び出されません
>     - **Focused** - オブジェクトにフォーカスが当たった
>     - **Defocused** - オブジェクトのフォーカスが外れた
>     - **Value changed** - オブジェクトの値が変更された
>     - **Ready** - プロセスが完了した
>     - **Cancel** - プロセスがキャンセルされた
>     - **Screen loaded** - 画面が読み込まれ、すべてのアニメーションが終了したときに呼び出されます
>     - **Screen unloaded** - 画面がアンロードされ、すべてのアニメーションが終了したときに呼び出されます
>     - **Screen load start** - 画面の読み込みが開始され、画面切り替えの遅延が終了したときに発火します
>     - **Screen unload start** - 画面のアンロードが開始され、lv_scr_load/lv_scr_load_anim が呼び出された直後に発火します
>       - **Checked** - ウィジェットがチェックされた
>       - **Unchecked** - ウィジェットが未チェックになった
>       - **Gesture** - 指でスライドした方向
> - **Add Event**
>   - **Actions**: Actions は、トリガーが発生したときに開始されるイベントの要素です。
>     - **Call function**: Call function アクションを使用すると、イベントが参照できる関数名を追加できます。この関数はエクスポート処理の際に ui__events.c または ui_events.py ファイル内に作成されます。
>     - **Change Screen**: このアクションで画面を切り替えることができます。
>       - **Screen to** - 切り替えたい画面
>       - **Fade mode** - 画面切り替え時のアニメーション
>       - **Speed** - 画面切り替えの速度
>       - **Delay** - 画面切り替えの遅延時間
>     - **Increment Arc**: Arc ウィジェットの値を変更できます。
>     - **Increment Bar**: Bar ウィジェットの値を変更できます。
>     - **Increment Slider**: Slider ウィジェットの値を変更できます。
>     - **Modify Flag**: ウィジェットのフラグ状態を変更できます。
>     - **Play Animation**: Animation パネルで作成したアニメーションを再生できます。
>       - **Animation** - 選択されたアニメーション
>       - **Target** - アニメーションを適用したいターゲットウィジェット
>       - **Delay** - アニメーションの遅延時間
>     - **Set Opacity**: 選択したウィジェットの不透明度を設定します。
>     - **Set Flag**: ウィジェットのフラグ状態の値を設定します。
>     - **Set Property**: ウィジェットのプロパティ値を変更します。
>     - **Set text value from arc**: このアクションを使用して、Arc ウィジェットの値を Label ウィジェットに表示します。
>     - **Set text value from slider**: このアクションを使用して、Slider ウィジェットの値を Label ウィジェットに表示します。
>     - **Set text value when checked**: ターゲットオブジェクトのチェック状態または未チェック状態に応じて、Label ウィジェットのテキストを変更します。

##### Panel の使用方法

まとめると、ダイヤルの上半分にアルバム画像を表示する必要がある場合は、Panel の座標とサイズを調整し、背景画像を設定する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/8.png" style={{width:1000, height:'auto'}}/></div>

:::note
マザーボード上でできるだけ少ないメモリを使用するために、画像はできるだけダイヤルの解像度に合わせて圧縮して挿入し、大きな画像のままにしないでください！
:::

次に、**Bg Image opa** で画像の透明度を設定できます。完全に不透明にしたくないのは、完全に不透明な画像だと、その後のテキスト表示に影響してしまうからです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/9.png" style={{width:1000, height:'auto'}}/></div>

ここで注意すべき点は、すべてのコンポーネントにはデフォルトで枠線があることです。そのため、見た目に影響を与えないように、枠線を削除する必要があります。その方法は、Border color の透明度を 0 に設定することです。

したがって、**任意の色や任意の線分を消したい場合は、透明度を 0 に設定することで実現できます**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/12.png" style={{width:600, height:'auto'}}/></div>

##### Label の使用方法

次に、中央にテキスト（**Label** ウィジェットを使用）を追加し、アーティストと曲名を表示します。スタイルでは、フォントサイズ、色などの内容を変更できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/10.png" style={{width:1000, height:'auto'}}/></div>

##### Imgbutton の使用方法

テキストの下に、再生コンポーネント（**Imgbutton** ウィジェットを使用）をいくつか追加します。例えば、再生/一時停止ボタンや、前後のトラックに切り替えるボタンなどです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/11.png" style={{width:1000, height:'auto'}}/></div>

Imgbutton は特別な種類のボタンで、通常の Button との最大の違いは、ボタンを押す前、押しているとき、ボタンを離した後の 3 つの状態のスタイルをそれぞれ設定できることです。このプロセスは、再生状態を切り替える場面と非常によく似ています。もし前後ボタンにそれほど複雑な機能が不要であれば、Button を直接使用することもできます。

そこで今回は、Press と Release のボタン画像を再生スタイルに設定し、Disable 状態のときだけ一時停止スタイルにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/13.png" style={{width:400, height:'auto'}}/></div>

次にイベントを追加します。このイベントの機能は、ユーザーがボタンを押したときに状態をDisableに切り替え、画像の切り替え効果を実現することです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/14.png" style={{width:500, height:'auto'}}/></div>

効果を確認したい場合は、ワークスペース右上の再生ボタンをクリックし、その後再生ボタンをクリックしてスイッチの効果を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/15.png" style={{width:600, height:'auto'}}/></div>

##### Arc の使い方

次に最後のコンポーネントとして、音量バーと再生進行バーを追加します。これは Arc を使って実現します。

Arc では、主に調整する必要があるのはリングの色とサイズです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/16.png" style={{width:1000, height:'auto'}}/></div>

- MAIN: これは、Arc 全体の背後にある長方形の背景のスタイル設計を指します。MAIN スタイルで設定された **Arc** は、アーク領域自体のスタイルを示すものではありません。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/17.png" style={{width:1000, height:'auto'}}/></div>

- INDICATOR: 開始位置を示すアーク部分のスタイル設定を指します。通常は INDICATOR 配下の **Arc** 設定を使用します。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/18.png" style={{width:1000, height:'auto'}}/></div>

- KNOB: これは画像上のこの円の設定を指します。この円が不要な場合は、透明度を 0 に設定できます。この円のサイズは、INDICATOR 内の Arc で設定する必要があります。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/19.png" style={{width:1000, height:'auto'}}/></div>

これが、私が実現したい効果です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/20.png" style={{width:1000, height:'auto'}}/></div>

クリック可能であることを確認したら、Run ボタンをクリックして Arc をドラッグすると、音量バーを変更する効果を実現できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/21.png" style={{width:1000, height:'auto'}}/></div>

##### 画面切り替え

音楽インターフェースのデザインがほぼ完了したので、次に新しいメインインターフェースを追加してみましょう。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/22.png" style={{width:400, height:'auto'}}/></div>

そして、メイン画面を音楽画面に切り替えるイベントを設計します。例えばここでは、メインインターフェースの下部で指を右にスワイプすると音楽再生インターフェースに切り替わるように設計します。

メインインターフェースが主役なので、このイベントは Screen 配下のメインインターフェースに追加する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/23.png" style={{width:500, height:'auto'}}/></div>

スライド後にゆっくり切り替わるアニメーション効果を付けたい場合は、Speed を 500 のままにします。すぐに切り替えたい場合は、Speed を 0 に設定します。

##### 針のアニメーション

メインインターフェースのデザインに戻り、文字盤の針が回転するアニメーション効果を追加したいと思います。

まず最初に行うべきことは、自分で秒針、分針、時針を描くことです。その後、それらを **Image** スタイルとしてメインの文字盤に追加します。

針の位置調整には根気が必要です。画像上で針が常に固定された一点を中心に回転するようにする必要があるからです。

Transform は画像の配置を設定するためのものです。下の Image タブにある Pivot で回転中心の座標を設定します。一般的な設定方法としては、まず Transform を調整して針の固定点が文字盤の中心に来るようにし、その後 Pivot の座標を少しずつ調整します。すべての角度で針の固定点が動かなくなったとき、そのパラメータが最適な値です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/24.png" style={{width:1000, height:'auto'}}/></div>

すべての針の位置が決まったら、新しいアニメーション効果の追加を開始できます。各針に対するアニメーション効果の設定は、次の図のようになります。

<table align="center">
 <tr>
     <th>Second</th>
     <th>Minute </th>
        <th>Hour</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/25.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/26.png" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/27.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>

最後に、メイン画面の読み込み時に針の動きのアニメーションが再生されるように設定するだけです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/28.png" style={{width:400, height:'auto'}}/></div>

:::tip
上記のチュートリアルで、ソフトウェアの使用シーンの 80% は基本的にカバーされています。他の多くのコンポーネントも非常によく似ています。最後に、ソフトウェアを使用する際のいくつかのコツやヒントを紹介します。

1. タッチ機能を持つすべてのコンポーネントは、必ず最前面に配置する必要があります。そうしないと、そのコンポーネントのタッチ機能の実装に干渉してしまいます。

    デフォルトでは、ソフトウェアで最後に配置したコンポーネントが最前面になります。つまり、Hierarchy タブでは、後ろに並んでいるコンポーネントほど前面にある傾向があります。先ほどデザインした音楽インターフェースでは、最前面のレイヤーは音量を調整する Arc になっています。Arc は文字盤全体を覆う長方形であるため、再生ボタンのタッチに影響を与えるという問題が発生します。そのため通常は、再生ボタンのレイヤーを Arc レイヤーよりも上に調整して、タッチに影響が出ないようにする必要があります。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/29.png" style={{width:400, height:'auto'}}/></div>

2. 不要な機能はできるだけオフにして、より多くのメモリを節約しましょう。

    すべてのコンポーネントには、デフォルトでいくつかの Flags がチェックされていますが、そのすべてが必要というわけではありません。デフォルトのままでも問題はありませんが、不要な Flags をオフにすることで、文字盤 UI をよりスムーズに動作させることができます。

    音楽インターフェースの背景アルバムのように、クリックもアニメーションも不要な場合は、Flags のオプションをオフにして構いません。ただし、オフにする際も実際の状況を考慮する必要があります。例えば、スワイプで文字盤ページを切り替えるシーンでは、一部の Flags の機能をオフにするとスワイプが無効になることがあります。そのため、実際の動作を確認しながら慎重にオフにしてください。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/30.png" style={{width:1000, height:'auto'}}/></div>

3. すべてのコンポーネントやアニメーション、イベントなどには、必ず一意の名前を付けてください。

    このソフトウェアは、パターンやアニメーションを描く時間を短縮してくれますが、より複雑な効果を実現するには、後でプログラミングが必要になる場合があります。その際、コード内でコンポーネントがどこにあるかを素早く見つけられることが重要です。コンポーネント、イベント、アニメーションに名前を付けることが鍵になります！

:::

#### Step5. プログラムの書き出しと適用

文字盤 UI の作成が完了したら、その UI をプログラムとして書き出し、Arduino 経由で XIAO にアップロードすることを検討できます。ソフトウェア左上をクリックし、**Export** -> **Create Template Project** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/31.png" style={{width:400, height:'auto'}}/></div>

次に保存先のパスを選択すると、コードが自動的に書き出されます。書き出されたプロジェクトテンプレートには、次のファイルが含まれます。

- **libraries**: このフォルダには、プロジェクトで使用する必要があるすべてのライブラリが含まれています。本チュートリアルでは、このディレクトリ内の *lvgl* と *TFT_eSPI* ライブラリは**不要**ですが、*ui* と *lv_conf.h* は私たちにとって**有用**です。
- **ui**: Arduino 用のプロジェクトプログラム（.ino ファイル）が入っています。
- REANME.md

次に行うことは、まず必要なライブラリと設定ファイルを Arduino の libraries フォルダに配置することです。その後、.ino ファイルを修正して、機能が正しく動作するようにします。

SquareLine Studio から書き出された libraries フォルダディレクトリ内の **ui** フォルダと **lv_conf.h** ファイルを、Arduino ライブラリのルートディレクトリにコピーしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/101.png" style={{width:1000, height:'auto'}}/></div>

その後、ui フォルダ内の .ino ファイルを直接開くことができます。次に、プログラムがスムーズにコンパイルされるよう、以下のファイルに変更を加える必要があります。

- **ui.ino**:

<table align="center">
 <tr>
  <th>Descriptions</th>
     <th>Screenshot</th>
     <th>Code Segment</th>
 </tr>
 <tr>
  <th>使用する TFT ライブラリの定義とラウンドスクリーンライブラリのインポート</th>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/102.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L1" target="_blank"><b>サンプルコードを表示</b></a></td>
 </tr>
    <tr>
  <th>tft クラスの重複定義をコメントアウトする</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/103.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L20" target="_blank"><b>サンプルコードを表示</b></a></td>
 </tr>
 <tr>
  <th>タッチ関数の書き換え</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/104.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L46" target="_blank"><b>サンプルコードを表示</b></a></td>
 </tr>
 <tr>
  <th>画面初期化関数とタッチ初期化関数の追加</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/105.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L86" target="_blank"><b>サンプルコードを表示</b></a></td>
 </tr>
 <tr>
  <th>画面の回転</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/106.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L94" target="_blank"><b>サンプルコードを表示</b></a></td>
 </tr>
</table>

その後、使用する XIAO を選択してコンパイルおよびアップロードできます。

### LVGL ライブラリのカスタマイズオプションについて

コンパイル後に一部のコンポーネントが定義されていないというエラーメッセージが表示される場合、Arduino ライブラリのルートディレクトリにある **lv_conf.h** ファイルを、SquareLine Studio からエクスポートされた **lv_conf.h** ファイルに置き換えていない可能性が高いです。

マザーボード上のメモリを節約するために、lv_conf.h ファイルのデフォルト設定では一部の lvgl 機能が無効になっています。しかし、ダイヤルの描画でこれらの機能を使用する場合は、手動で有効にする必要があります。

- **Windows** システムにおける `lv_conf.h` のデフォルトパスは次のとおりです：

`C:\Users\{UserName}\Documents\Arduino\libraries`

- **MacOS** システムにおける `lv_conf.h` のデフォルトパスは次のとおりです：

`\Users\{UserName}\Documents\Arduino\libraries`

簡単な例として、上記の例では `MONTSERRAT 8` フォントを使用していますが、デフォルトではこのフォントは無効になっているため、コンパイル中にエラーが発生する可能性があります。

その場合は、lv_conf.h ファイル内のこのフォントの後ろにある 0 を 1 に変更するだけでよく、これによりフォントが有効化されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/38.png" style={{width:600, height:'auto'}}/></div>

同様のエラーが発生した場合は、カスタマイズ機能が有効になっているかを再度確認してください。

### LVGL ベースのダイヤルプログラム

円形スクリーン向けに 2 種類のダイヤルスタイルを作成しており、ユーザーの参考用として提供しています。UI ロジックが複雑なため、XIAO マザーボードには一定の性能とメモリが必要になります。以下のダイヤルプログラムをコンパイルする際にメモリ不足エラーが発生する場合は、XIAO をアップグレードするか、ダイヤルの機能を削減する必要があるかもしれません。

- ダイヤルスタイル I：

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

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
