---
description: XIAO用Seeed Studio Round DisplayでのLVGLとTFTの使用
title: 全XIAOシリーズ向けLVGLとTFTの使用
keywords:
- XIAO
- Round Dislay
- lvgl
- draw dials
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/using_lvgl_and_tft_on_round_display
last_update:
  date: 09/12/2024
  author: Citric
---

# 全XIAOシリーズ向けSeeed Studio Round DisplayでのLVGLとTFTの使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/000.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

<br></br>


Seeed Studio Round Display製品をご購入いただき、ありがとうございます。このチュートリアルのセクションでは、`Seeed_GFX`ライブラリと`LVGL`ライブラリを使用してRound Display上に様々な豊かで興味深いダイヤルパターンを描画する方法に焦点を当て、これら2つの有用だが複雑なライブラリの一般的な機能の使用方法を簡単なものから深いものまで紹介します。このチュートリアルの内容を通じて、この製品を使用して理想的なダイヤルパターンを描画できるようになることを願っています。素晴らしい学習体験をお楽しみください！

## 入門

学習を始める前に、以下の準備をしていただきたいと思います。

### ハードウェアの準備

デモンストレーション目的で、このチュートリアルでは**XIAO ESP32S3**をメインコントローラーとして使用します。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

他のXIAO製品を使用したい場合でも、この記事のチュートリアルと方法は同様に適用できます。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAOをRound Displayに取り付ける際は、XIAOのType-CコネクタがRound Displayの外側を向くようにし、デュアル7ピンヘッダーに対して各ピンを接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

### ソフトウェアの準備

この部分は[基本Wiki](https://wiki.seeedstudio.com/ja/get_start_round_display#software-preparation)で詳しく説明されているので、直接そちらを読んでください。

## Seeed_GFXライブラリを使用したシンプルなダイヤルの描画

[Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX)（TFT_eSPIライブラリの修正版をベースに、Seedのディスプレイ製品を深くサポート）は、32ビットプロセッサ向けの機能豊富なArduino IDE互換グラフィックスおよびフォントライブラリです。XIAO Round Displayが提供するTFTライブラリは、XIAOとXIAO Round Displayの互換性を考慮したライブラリをベースにしており、XIAO全シリーズの使用をサポートしています。

### TFTライブラリの共通インターフェース

#### 1. TFTオブジェクトの作成

```c
TFT_eSPI tft = TFT_eSPI()
TFT_eSPI tft = TFT_eSPI(240,240)        // Set the screen size at the time of object creation
```

#### 2. 初期化

```c
void init(uint8_t tc = TAB_COLOUR)
void begin(uint8_t tc = TAB_COLOUR)
```

`tft.begin()`と`tft.init()`は同じ機能を持つ2つの関数です。

#### 3. 画面クリア

```c
void fillScreen(uint32_t color) // Fill the screen with a certain color
```

#### 4. 画面の向きの設定

```c
void setRotation(uint8_t r);      // Set the display image rotation direction, r optional parameters for 0, 1, 2, 3
uint8_t getRotation(void)         // Read the current rotation angle
```

0、1、2、3はそれぞれ0°、90°、180°、270°を表し、4はミラー画像です。

#### 5. 色変換

```c
uint16_t color565(uint8_t red, uint8_t green, uint8_t blue)    // Convert 8-bit red, green and blue to 16-bit
uint16_t color8to16(uint8_t color332)                          // Convert 8-bit color to 16-bit
uint8_t  color16to8(uint16_t color565)                         // Convert 16-bit color to 8-bit
uint32_t color16to24(uint16_t color565)                        // Convert 16-bit color to 24-bit
uint32_t color24to16(uint32_t color888)                        // Convert 24-bit color to 16-bit
```

#### 6. 色反転

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

上記の関数からわかるように、表示するテキストを印刷したい場合は、単純に`tft.print()`関数を使用できます。

#### 8. 単純な図形の描画

以下の関数を使用して、ピクセル点、直線セグメント、矩形、円などの単純な図形を描画できます。

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
fillTriangle(int32_t x1,int32_t y1, int32_t x2,int32_t y2, int32_t x3,int32_t y3, uint32_t color)  // Draw a triange with a fill color```

#### 9. 複雑な図形の描画

TFTライブラリは、角丸矩形、角丸弧、滑らかな図形など、複雑な図形を描画するためのメソッドも提供しています。

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

特定の文字列を単純に表示するだけでなく、時間やセンサー値など、画面に変数を表示する必要がある場合があります。その場合、変数の型に応じて、以下の異なる関数を選択して使用できます。

```c
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
drawNumber(long intNumber, int32_t x, int32_t y, uint8_t font) // Draw integer using specified font number. If no font is set (the last parameter, the default font)
drawFloat(float floatNumber, uint8_t decimal, int32_t x, int32_t y, uint8_t font), // Draw float using specified font number. If no font is set (the last parameter, the default font)
drawString(const char *string, int32_t x, int32_t y, uint8_t font),  // Draw string using specified font number. If no font is set (the last parameter, the default font)
```

#### 11. 画像処理

TFTライブラリで`pushImage()`関数を使用して画面に画像を表示するには、以下の手順に従います：

- 画像ファイルをArduinoが認識できるC/C++配列形式に変換します。**Image2CPP**などのオンラインツールを使用して、ビットマップ画像を配列形式に変換できます。

- 生成された画像配列ファイルをArduinoプログラムに含めます。

- TFTライブラリと画面を初期化し、画面解像度とカラーモードを設定します。

- `tft.pushImage(x, y, width, height, data)`関数を使用して画像データを画面にプッシュします。ここで、xとyは画像の左上角の座標、widthとheightは画像の幅と高さ、dataは画像配列です。

```c
// Image data array
const unsigned char image_data[] PROGMEM = {
  // Insert the converted C/C++ array data of the image here
};

tft.pushImage(x, y, image_width, image_height, image_data);
```

#### 12. TFT_eSpriteクラス

`TFT_eSprite`と`TFT_eSPI`は、どちらもTFT LCDディスプレイ用のArduinoライブラリですが、異なる機能と設計目的を持っています。

TFT_eSPIは、多くの高度な機能と設定オプションを持つ強力なライブラリで、様々な表示効果を実現できます。複数のディスプレイドライバーチップとコントローラーをサポートし、複数のArduinoハードウェアプラットフォームで使用できます。SPIインターフェースと高度に最適化されたコードを使用して、高速なリフレッシュレートと小さなコードフットプリントを実現します。TFT_eSPIライブラリは、ゲーム、グラフィックス、GUIなど、様々なアプリケーションに使用できます。

TFT_eSpriteは、TFT_eSPIライブラリの補完であり、主にディスプレイ上でゲームキャラクター、アイコン、テキストなどの小さなスプライトを描画するために使用されます。TFT_eSpriteは、画像をメモリにキャッシュし、部分的なリフレッシュを実行するため、より高速な描画速度を実現できます。これにより、小さなスプライトを更新する際により高速なリフレッシュレートを実現し、プロセッサ時間とメモリ空間を節約できます。

したがって、TFT_eSPIは複数のアプリケーションに適した強力な汎用ライブラリであり、TFT_eSpriteは小さなスプライトの描画に焦点を当てたライブラリで、より高い描画効率を提供できます。

TFT_eSPIライブラリを使用する一般的な形式は以下の通りです。

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

TFT_eSpriteライブラリを使用する一般的な形式は以下の通りです。

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
上記のサンプルコードでは、プログラムが`loop()`関数を終了する際に、`spr.deleteSprite();`が呼び出されてTFT_eSpriteオブジェクトを削除し、メモリ空間を解放します。これにより、次のループでTFT_eSpriteオブジェクトを作成する際に、以前に解放されたメモリ空間を使用してメモリリソースの無駄を避けることができます。
:::

TFTライブラリ関数とその使用に関する詳細情報については、ライブラリ内の**TFT_eSPI.h**と**TFT_eSPI.cpp**ファイルを読むことをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/1.png" style={{width:300, height:'auto'}}/></div>

### TFTライブラリのカスタマイズオプションについて

時々、カスタムフォントライブラリや、スペースを節約するために有効になっていない一部の機能を使用する必要があります。この場合、**Setup66_Seeed_XIAO_Round.h**ファイルの内容を変更する必要があります。

- **Windows**システムでのこのファイルのデフォルトパスは：

`C:\Users\{UserName}\Documents\Arduino\libraries\Seeed_GFX\User_Setups\Setup66_Seeed_XIAO_Round.h`

- **MacOS**システムでのこのファイルのデフォルトパスは：

`\Users\{UserName}\Documents\Arduino\libraries\Seeed_GFX\User_Setups\Setup66_Seeed_XIAO_Round.h`

実際の使用状況に応じて、不要な機能をオンまたはオフにしてください。
例えば、カスタムフォントを使用したい場合は、`#define SMOOTH_FONT`のコメントアウトを解除する必要があります。そうしないと、実行時にエラーが発生する可能性があります。

もちろん、カスタムフォントのヘッダーファイルは、inoファイルと同じディレクトリに保存する必要があります。これはエラーを回避するために必要な手順です。

### TFTベースのダイヤルサンプルプログラム

Round Display用のダイヤルプログラムを作成しました。これは直接使用できます。一部のXIAOモデルのメモリ容量制限により、このプログラムは基本的な針の動作機能のみを実行し、他の機能は設計されていません。ユーザーはこのプログラムを使用してTFTライブラリの使用と針の動作機能を学習し、実際の状況に応じてより複雑なダイヤルの開発を完成させることができます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>
## LVGL ライブラリを使用したシンプルなダイヤルの描画

LVGL ライブラリは、ボタン、ラベル、リストなどの豊富なグラフィカルユーザーインターフェースコントロールを提供する汎用組み込みグラフィックスライブラリで、様々なユーザーインターフェースの構築に使用できます。TFT ライブラリとは異なり、LVGL ライブラリは抽象化されたオブジェクト指向のグラフィックスインターフェースを提供し、使いやすく保守しやすいですが、パフォーマンスと信頼性のトレードオフが生じる場合があります。

LVGL ライブラリは、コードの記述と保守の作業負荷を軽減する複雑なユーザーインターフェースを構築する際に非常に有用なツールです。一方、TFT ライブラリは、リアルタイム画像処理、ビデオレンダリングなど、高性能グラフィックスを必要とする一部のアプリケーションにより適しています。

### LVGL ライブラリの共通インターフェース

LVGL ライブラリの API は非常に豊富で複雑であり、LVGL を使用するすべての方に公式の LVGL 入門ドキュメントを読む時間を取っていただくことを希望します。

- [Get Started](https://docs.lvgl.io/latest/en/html/get-started/index.html)
- [Display interface](https://docs.lvgl.io/latest/en/html/porting/display.html)
- [Input device interface](https://docs.lvgl.io/latest/en/html/porting/indev.html)
- [Tick interface](https://docs.lvgl.io/latest/en/html/porting/tick.html)
- [Operating system and interrupts](https://docs.lvgl.io/latest/en/html/porting/os.html)

### SquareLine Studio を使用した複雑な UI インターフェースの描画

豊富な LVGL 公式ドキュメントを読んで独自の LVGL グラフィックスプログラムを作成することに加えて、公式の LVGL SquareLine Studio ツールを使用して開発効率を向上させることもできます。

次に、円形スクリーンでのソフトウェアの使用方法、設定方法について簡単に紹介し、ソフトウェアを使用してインターフェースを設計することを迅速に開始できるようお手伝いします。

:::caution
SquareLine Studio の **v1.5.1** バージョンの使用をお勧めします。これは、この Wiki を執筆時点での最新のソフトウェアバージョンでもあります。

このチュートリアルの準備で使用した環境：

1. **[Seeed_GFX library](https://github.com/Seeed-Studio/Seeed_GFX)** by Bodmer, modified by Seeed Studio.

2. **[SeeedStudio_lvgl library](https://github.com/Seeed-Projects/SeeedStudio_lvgl)** by kisvegabor, embeddedt, pete-pjb, modified by Seeed Studio.
:::

#### ステップ1. SuqareLine Studio のダウンロード

[こちら](https://squareline.io/)をクリックして SquareLine Studio の公式ウェブサイトにアクセスし、**TRY IT FOR FREE** をクリックしてソフトウェアをコンピューターにダウンロードできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/3.png" style={{width:1000, height:'auto'}}/></div>

コンピューターでこのソフトウェアを初めて使用する場合は、30日間の無料トライアルが提供されます。そうでない場合は、無料版でも最大5ページ、50個のウィジェットを使用して描画できます。

:::caution
初回ユーザーの場合は、残高のないアカウントに登録してログインしないでください。30日間のトライアル期間全体を失う可能性があります！
:::

#### ステップ2. スクリーンインターフェース情報の設定

次に、ソフトウェアを開いて、空白の表示ページを作成することから始めます。

Arduino プログラミングを使用しているため、作成するものも Arduino ファイルである必要があります。

円形スクリーンの画面解像度は **240*240** で、**16bit** の色深度のみをサポートしています。それ以外に、プロジェクトの名前とテーマはあなたが定義する必要があります。ここでは、テーマとしてダークスタイルを使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/4.png" style={{width:1000, height:'auto'}}/></div>

私のように動作が速すぎて、ダイヤルの形状を設定し忘れてプロジェクトを作成してしまった場合はどうでしょうか？問題ありません。メインインターフェースの左上隅で、Project Settings タブを見つけて、先ほど行った設定を変更することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/5.png" style={{width:1000, height:'auto'}}/></div>

:::caution
正式に描画を開始する前にプロジェクトの設定を完了し、スクリーンの仕様と一致することを確認してください。そうでないと、描画したすべてのものがスクリーンに正しく表示されない可能性があります。

プロジェクトが作成された後では、プロジェクト名など、すべてを変更できるわけではありません。プロジェクト名には英語以外の言語や特殊文字を使用しないでください。また、**"-"** 記号を使用しないでください。**"-"** 記号は **"_"** に置き換えてください。そうでないと、エクスポートされたプログラムがコンパイル中にエラーが発生する可能性があります！
:::

#### ステップ3. ソフトウェアの機能レイアウトの理解

私の使用習慣に基づいて、ソフトウェアのメインインターフェースを大まかに以下の部分に分けました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/6.png" style={{width:1000, height:'auto'}}/></div>

- **Hierarchy and Animation pane**: この領域では、異なるダイヤルページ、表示レイヤー、アニメーションを設定できます。

- **Widgets**: ここでは、表示ページに追加するコンポーネントを選択できます。これらのコンポーネントはソフトウェアに統合されており、直接使用できます。ここで利用できないコンポーネントは、後で独自のプログラミングソフトウェアで追加する必要があります。

- **Working Area**: ワークスペースでは、特定のコンポーネントをドラッグアンドドロップして位置を変更できます。さらに便利なことに、最終的な表示はワークスペースに表示されるものと一致するため、見たものがそのまま得られます。

- **Assets & Console**: Assets では追加した画像クリップが表示され、これらの追加された画像クリップは画像の挿入をサポートするコンポーネントで使用できます。Console では、設定中に発生したエラーメッセージ（ある場合）が表示されます。

- **Setup Area**: ここでの主な目的は、コンポーネントのプロパティを設定することです。

まず、ソフトウェアインターフェースの一般的な知識を持ち、その後、各部分の使用方法を実践的に理解していただきます。

#### ステップ4. ソフトウェアを使用してアイデアを実現する

今、音楽インターフェースを描画したいとします。もちろん、私は音楽を聴くのがとても好きなので、例として音楽表示インターフェースを描画したいと思います。

この音楽表示画面に以下のコンポーネントを含めたいと思います。

- 背景として好きな音楽のアルバムカバーアート
- 再生プログレスバー
- 音量コントロールバー
- 再生と一時停止ボタン

要件を整理した後、建物を建てるように、下から上へと表示コンポーネントを設計する必要があります。

最初のステップは、音楽の背景画像を作成することです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/7.png" style={{width:1000, height:'auto'}}/></div>

ウィジェットで **Panel** を選択すると、クリックするとダイヤルの中央に自動的に配置されるか、配置したいダイヤルの位置にドラッグできます。

ダイヤル全体をこの画像にしたくないため、ダイヤルの背景に直接ではなく Panel に表示画像を配置します。Panel は自由にサイズを変更できます。

この時点で、Setup Area に設定できる一連のプロパティがすでに表示されていることがわかります。各コンポーネントの設定は一般的に似ており、1つまたは2つのオプションが少し異なる場合があります。

> **Name**: ウィジェットに名前を付ける必要があります。名前の最初に数字、アンダースコア、または特殊文字を使用することはできません。コードをエクスポートした後、その名前でウィジェットを見つけることができます。

> **Layout**: レイアウトを使用して、ウィジェットの子要素を自動的に配置できます。レイアウトが有効になっている場合、子要素に `IGNORE_LAYOUT` または `FLOATING` フラグが有効になっていない限り、子要素の X と Y の値を手動で調整することはできません。

> **Main Flags**
>
> - **Hidden** - オブジェクトを非表示にします。（まったく存在しないかのように。）
> - **Clickable** - 入力デバイスによってオブジェクトをクリック可能にします
> - **Click focusable** - クリック時にオブジェクトにフォーカス状態を追加します
> - **Checkable** - オブジェクトがクリックされたときにチェック状態を切り替えます
> - **Snappable** - 親でスクロールスナップが有効になっている場合、このオブジェクトにスナップできます
> - **Press lock** - プレスがオブジェクトからスライドしてもオブジェクトを押された状態に保ちます
> - **Event bubble** - イベントを親にも伝播します
> - **Gesture bubble** - イベントを親にも伝播します
> - **Adv hittest** - より正確なヒット（クリック）テストの実行を許可します。例：角の丸みを考慮
> - **Ignore layout** - レイアウトによってオブジェクトを配置可能にします
> - **Floating** - 親がスクロールするときにオブジェクトをスクロールせず、レイアウトを無視します

> **Scroll Flags**
>
> - **Scrollable** - オブジェクトをスクロール可能にします
> - **Scroll elastic** - 内部でのスクロールを許可しますが、速度は遅くなります
> - **Scroll momentum** - 「投げられた」ときにオブジェクトをさらにスクロールさせます
> - **Scroll one** - スナップ可能な子要素を1つだけスクロールできるようにします
> - **Scroll chain** - スクロールを親に伝播することを許可します
> - **Scroll on focus** - フォーカスされたときに自動的にオブジェクトをスクロールして表示させます

>**Scroll Settings**
>
> - **Scroll direction** - 設定されたモードに従ってスクロールバーが表示されます
> - **Scrollbar mode** - 設定されたモードに従ってスクロールバーが表示されます。以下のモードが存在します：
>   - **Off** - スクロールバーを表示しません
>   - **On** - 常にスクロールバーを表示します
>   - **Active** - オブジェクトがスクロールされている間、スクロールバーを表示します
>   - **Auto** - コンテンツがスクロールできるほど大きい場合にスクロールバーを表示します

> **States**: オブジェクトは以下の状態の組み合わせになることができます：
>
> - **Clickable** - 切り替えまたはチェック状態
> - **Disable** - 無効状態
> - **Focusable** - キーパッドまたはエンコーダーを介してフォーカスされるか、タッチパッド/マウスを介してクリックされます
> - **Pressed** - 押されている状態
> **スタイル設定**: スタイルは、ウィジェットやその部分にエフェクトを追加するために使用できます。カスタム背景色、境界線、影などを追加できます。スタイル設定では、これらのパラメータの値を追加または変更できます。
>
> **状態**: 各状態にカスタムスタイルを作成できます。
>
> **スタイルプロパティ**: スタイルプロパティは、スタイルに設定するパラメータです。
>
> - **Arc**: Arcスタイルは、Arcコンポーネントを持つウィジェットで使用できます。
>   - **Line color** - 線の色
>   - **Arc width** - アークの幅
>   - **Arc rounded** - アーク線の端が丸められます
>   - **Arc image** - アーク線の背景画像
> - **Background**: Backgroundスタイルは、ウィジェットの背景です。グラデーションを作成したり、背景の角を丸くしたりできます。
>   - **Color and alpha** - オブジェクトの背景色とアルファを設定します。
>   - **Gradient color** - 背景のグラデーション色を設定します。
>   - **Bg main stop** - グラデーションの背景色が開始する点を設定します。
>   - **Bg gradinet stop** - 背景のグラデーション色が開始する点を設定します
>   - **Bg radius** - 背景の角を丸くするために使用する半径
>   - **Gradient direction** - グラデーションの方向。水平または垂直にできます。
>   - **Clip corner** - 丸い角でオーバーフローしたコンテンツをクリップするために有効にします。
> - **Background Image**: 画像を背景画像として設定できます。
>   - **Bg image** - 背景画像として使用する画像
>   - **Bg image opa** - 背景画像の不透明度
>   - **Recolor** - Recolor機能を使用すると、背景画像に色を使用できます。アルファパラメータを変更して色の深度を設定します。
>   - **Bg image tiled** - 有効にすると、背景画像がタイル表示されます
> - **Blend**: Blendスタイルを使用すると、現在のウィジェット部分のピクセル色を、その後に続くオブジェクトの色と混合できます。
>   - **Blend mode** - 4つのオプションから選択します。
>     - **Normal** - デフォルト状態
>     - **Additive** - ピクセルを加算
>     - **Subtractive** - ピクセルを減算
>     - **Multiply** - ピクセルを乗算
>   - **Blend opacity** - ここでウィジェット部分の不透明度を設定できます
> - **Border**: Borderを使用すると、選択したオブジェクトの内側の線に境界線を描画できます。
>   - **Border color** - 境界線の色
>   - **Border width** - 境界線の幅
>   - **Border side** - 境界線の方向
> - **Line**: Lineスタイルは、Lineコンポーネントを持つウィジェットで使用できます。
>   - **Color** -  線の色
>   - **Width** - 線の幅
>   - **Line rounded** - 線の端が丸められます
> - **Outline**: Outlineスタイルは、Borderスタイルに似ていますが、ここでは選択したウィジェット部分の周りに境界線を描画します。
>   - **Outline color** - アウトラインの色
>   - **Outline width** - アウトラインの幅
>   - **Outline pad** - ウィジェットの側面からの距離（ピクセル単位）
> - **Paddings**: Paddingsスタイルは、ウィジェット部分にパディングを設定します。これは、階層内でその下にある部分が、ピクセル値で定義されたパディングの距離だけシフトすることを意味します。
>   - **Pad** - パディングの範囲
> - **Shadow**: Shadowスタイルを使用すると、選択したウィジェット部分に影やグローを描画できます。
>   - **Shadow color** - 影の色
>   - **Shadow width** - 影の幅
>   - **Shadow spread** - 影の深度
>   - **Shadow OX** - X軸上で影をシフト
>   - **Shadow OY** - Y軸上で影をシフト
> - **Text**: Textスタイルは、ウィジェット上にあるテキストのパラメータを定義します。
>   - **Text color** - テキストの色
>   - **Letter spacing** - 文字間のスペース
Line spacing - 行間のスペース
>   - **Text align** - テキスト配置の方向
>   - **Text decor** - テキストに上線または下線を付けることができます
>     - **None** - 通常のテキスト
>     - **Understand** - 下線付きテキスト
>     - **Strikethrough** - 上線付きテキスト
>     - **Text font** - テキストのフォント
>
> **イベントプロパティ**: イベントを追加することで、ウィジェットに異なるインタラクションを作成できます。例えば、ボタンを押すことで画面を変更したり、アニメーションを再生したりできます。
>
> - **Add Event**: インスペクターパネルの下部に、ADD EVENTボタンがあります。まず、イベントに名前を付け、それを開始するトリガーを選択する必要があります。
>   - **Event name** - イベントの名前
>   - **Event Trigger** - イベント開始のインタラクション
>     - **Pressed** - オブジェクトが押されました
>     - **Clicked** - オブジェクトが短時間押されてから離されました。スクロールした場合は呼び出されません
>     - **Long pressed** - オブジェクトが長時間押されました
>     - **Long pressed repeat** - `long_press_time`後、`long_press_repeat_time`ミリ秒ごとに呼び出されます。スクロールした場合は呼び出されません
>     - **Focused** - オブジェクトがフォーカスされました
>     - **Defocused** - オブジェクトがフォーカスを失いました
>     - **Value changed** - オブジェクトの値が変更されました。
>     - **Ready** - プロセスが完了しました
>     - **Cancel** - プロセスがキャンセルされました
>     - **Screen loaded** - 画面が読み込まれました。すべてのアニメーションが完了したときに呼び出されます
>     - **Screen unloaded** - 画面がアンロードされました。すべてのアニメーションが完了したときに呼び出されます
>     - **Screen load start** - 画面の読み込みが開始されました。画面変更の遅延が期限切れになったときに発生します
>     - **Screen unload start** - 画面のアンロードが開始されました。lv_scr_load/lv_scr_load_animが呼び出されたときに即座に発生します
>       - **Checked** - ウィジェットがチェックされました
>       - **Unchecked** - ウィジェットのチェックが外されました
>       - **Gesture** - 指タッチのスライド方向
> - **Add Event**
>   - **Actions**: アクションは、トリガーが発生したときに開始されるイベントの要素です。
>     - **Call function**: Call functionアクションを使用すると、イベントが参照できる関数名を追加できます。この関数は、エクスポートプロセス中にui__events.cまたはui_events.pyファイルに作成されます。
>     - **Change Screen**: このアクションで画面間を変更できます。
>       - **Screen to** - 変更したい画面
>       - **Fade mode** - 画面変更時のアニメーション
>       - **Speed** - 画面変更の速度
>       - **Delay** - 画面変更の遅延
>     - **Increment Arc**: Arcウィジェットの値を変更できます。
>     - **Increment Bar**: Barウィジェットの値を変更できます。
>     - **Increment Slider**: Sliderウィジェットの値を変更できます。
>     - **Modify Flag**: ウィジェットのフラグ状態を変更できます。
>     - **Play Animation**: アニメーションパネルで作成されたアニメーションを再生できます。
>       - **Animation** - 選択されたアニメーション
>       - **Target** - アニメーションを使用したいターゲットウィジェット
>       - **Delay** - アニメーションの遅延時間
>     - **Set Opacity**: 選択したウィジェットの不透明度。
>     - **Set Flag**: ウィジェットのフラグ状態の値を設定します。
>     - **Set Property**: ウィジェットのプロパティ値を変更します。
>     - **Set text value from arc**: このアクションを使用して、Arcウィジェットの値をLabelウィジェットに表示します。
>     - **Set text value from slider**: このアクションを使用して、Sliderウィジェットの値をLabelウィジェットに表示します。
>     - **Set text value when checked**: ターゲットオブジェクトのチェック状態またはチェック解除状態に応じて、Labelウィジェットのテキストを変更します。

##### Panelの使用方法

まとめると、ダイヤルの上半分にアルバム画像を表示する必要がある場合、Panelの座標とサイズを調整し、背景画像を設定する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/8.png" style={{width:1000, height:'auto'}}/></div>

:::note
マザーボード上のメモリをできるだけ少なく占有するために、画像をダイヤルの解像度に圧縮して挿入し、大きな画像を放置しないでください！
:::

次に、**Bg Image opa**で画像の透明度を設定できます。完全に不透明な画像は後でテキストの表示に影響するため、完全に不透明にしたくありません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/9.png" style={{width:1000, height:'auto'}}/></div>

ここで注目すべきは、すべてのコンポーネントにはデフォルトでフレーム線があるため、美観に影響しないように、フレーム線を削除する必要があることです。これを行う方法は、Border colorの透明度を0に設定することです。

したがって、**任意の色や線分を削除したい場合は、透明度を0に設定することで実行できます**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/12.png" style={{width:600, height:'auto'}}/></div>

##### Labelの使用方法

次に、中央にテキストを追加し（**Label**ウィジェットを使用）、アーティストと曲名を表示します。スタイルでは、フォントサイズ、色、その他のコンテンツを変更できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/10.png" style={{width:1000, height:'auto'}}/></div>

##### Imgbuttonの使用方法

テキストの下に、いくつかの再生コンポーネント（**Imgbutton**ウィジェットを使用）を追加します。例えば、再生/一時停止ボタンや上/下トラック切り替えボタンなどです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/11.png" style={{width:1000, height:'auto'}}/></div>

Imgbuttonは特別な種類のボタンで、通常のButtonとの最大の違いは、Imgbuttonがボタンを押す前、押している時、離した後の3つの状態のスタイルをそれぞれ設定できることです。このプロセスは、押して再生状態を切り替えるシナリオと非常に似ています。上/下ボタンにそのような複雑な機能が必要ないと思う場合は、Buttonを直接使用することもできます。

次に、PressとReleaseボタンの画像を再生スタイルに設定し、Disable状態でのみ一時停止スタイルにします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/13.png" style={{width:400, height:'auto'}}/></div>

次に、イベントを追加します。このイベントの機能は、ユーザーがボタンを押すと、状態がDisableに切り替わり、画像切り替えの効果を実現することです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/14.png" style={{width:500, height:'auto'}}/></div>

効果を確認したい場合は、ワークスペースの右上にある再生ボタンをクリックし、再生ボタンをクリックして切り替え効果を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/15.png" style={{width:600, height:'auto'}}/></div>

##### Arcの使用方法

次に、最後のコンポーネントであるボリュームバーと再生プログレスバーを追加します。これはArcを使用して行います。

Arcについて、主に調整する必要があるのは、リングの色とサイズです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/16.png" style={{width:1000, height:'auto'}}/></div>

- MAIN：これは、Arc全体の背後にある矩形背景のスタイルデザインを指します。MAINスタイルで設定された**Arc**は、弧領域のスタイルを示すものではありません。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/17.png" style={{width:1000, height:'auto'}}/></div>

- INDICATOR：開始指示領域の弧のスタイル設定を指します。INDICATOR下の**Arc**設定が一般的に使用されます。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/18.png" style={{width:1000, height:'auto'}}/></div>

- KNOB：これは、画像上のこの円の設定を指します。この円が不要な場合は、透明度を0に設定できます。この円のサイズは、INDICATORのArc内で設定する必要があります。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/19.png" style={{width:1000, height:'auto'}}/></div>

これが私が実現したい効果です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/20.png" style={{width:1000, height:'auto'}}/></div>

クリック可能にチェックを入れている場合は、実行ボタンをクリックして弧をドラッグすると、ボリュームバーを変更する効果を実現できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/21.png" style={{width:1000, height:'auto'}}/></div>

##### 画面切り替え

音楽インターフェースがほぼ設計できたので、次に新しいメインインターフェースを追加してみましょう。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/22.png" style={{width:400, height:'auto'}}/></div>

次に、メイン画面を音楽画面に切り替えるイベントを設計します。例えば、ここではメインインターフェース下で指を右にスワイプすることで音楽再生インターフェースに切り替わるように設計します。

メインインターフェースが主役なので、このイベントはScreen下のメインインターフェースに追加する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/23.png" style={{width:500, height:'auto'}}/></div>

スライド後にゆっくりと切り替わるアニメーション効果を持たせたい場合は、Speedを500に保持し、すぐに切り替えたい場合は、Speedを0に設定する必要があります。

##### ポインターアニメーション

メインインターフェースの設計に戻り、ダイヤルの針の回転アニメーション効果を追加したいと思います。

最初にすべきことは、秒針、分針、時針を自分で描く必要があることです。次に、**Image**のスタイルでメインダイヤルに追加します。

ポインターの位置調整には忍耐が必要です。ポインターが画像上の固定点を中心に回転することを確認する必要があるからです。

Transformは画像配置用に設定されます。下のImageタブのPivotは回転点の座標を設定します。これを設定する一般的な方法は、まずTransformを調整してポインターの固定点がダイヤルの中心にあることを確認し、次にPivotの座標を少しずつ調整することです。すべての角度でポインターの固定点が動かない場合、これらのパラメータが最も適切です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/24.png" style={{width:1000, height:'auto'}}/></div>

すべてのポインター位置が決定したら、新しいアニメーション効果の追加を開始できます。異なるポインターのアニメーション効果設定は、以下の図で確認できます。

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

最後に、メイン画面の読み込み中にポインター移動のアニメーションが再生されるように設定するだけです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/28.png" style={{width:400, height:'auto'}}/></div>

:::tip
上記のチュートリアルは、基本的にソフトウェア使用シナリオの80%をカバーしており、他の多くのコンポーネントも非常に似ています。最後に、ソフトウェアを使用する際のヒントとコツをいくつか紹介します。

1. タッチ機能を持つすべてのコンポーネントを最上位に配置する必要があります。そうしないと、コンポーネントのタッチ機能の実装に干渉します。

    デフォルトでは、ソフトウェアによって最後に配置されたコンポーネントが最上位にあります。これは、Hierarchyタブで、隣り合って配置されたコンポーネントが最上位にある傾向があることを意味します。先ほど設計した音楽インターフェースでは、最上位レイヤーは音量調整用のArcで、これによりArcがダイヤル全体を占める矩形であり、再生ボタンのタッチに影響するという問題が発生します。そのため、通常は再生ボタンのレイヤーをArcレイヤーの上に調整して、タッチに影響しないようにする必要があります。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/29.png" style={{width:400, height:'auto'}}/></div>

2. より多くのメモリを節約するために、不要な機能をできるだけ多く無効にしてください。

    すべてのコンポーネントには、デフォルトでいくつかのFlagsがチェックされていますが、すべてが必要というわけではありません。デフォルトのものは問題ありませんが、不要なFlagsを無効にすることで、ダイヤルUIがよりスムーズに動作します。

    音楽インターフェースの背景アルバムのように、クリックする必要もアニメーションも必要ない場合は、Flagsのオプションを無効にするのが良いでしょう。ただし、無効にする際も実際の状況を考慮する必要があります。例えば、スライドでダイヤルページを切り替えるシーンでは、一部のFlagsの機能を無効にするとスライドが無効になるため、効果に応じて慎重に無効にする必要があります。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/30.png" style={{width:1000, height:'auto'}}/></div>

3. すべてのコンポーネント、アニメーション、イベントなどに必ず一意の名前を付けてください。

    ソフトウェアは、いくつかのパターンやアニメーションを描く時間を節約できるだけですが、より複雑な効果を実現するには、後でプログラミングが必要になる場合があります。その場合、コードでコンポーネントがどこにあるかを素早く見つけることができることが重要です。コンポーネント、イベント、アニメーションの命名が鍵となります！

:::

#### ステップ5. プログラムのエクスポートと応用

ダイヤルUIが描画できたら、UIをプログラムにエクスポートし、Arduino経由でXIAOにアップロードすることを検討できます。ソフトウェアの左上をクリックし、**Export** -> **Create Template Project**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/31.png" style={{width:400, height:'auto'}}/></div>

次に、保存するパスを選択すると、コードが自動的にエクスポートされます。エクスポートされたプロジェクトテンプレートには、以下のファイルが含まれます。

- **libraries**：このフォルダディレクトリは、プロジェクトで使用する必要があるすべてのライブラリを提供します。私たちのチュートリアルでは、このディレクトリの*lvgl*と*TFT_eSPI*ライブラリは**不要**ですが、*ui*と*lv_conf.h*は**有用**です。
- **ui**：Arduino用のプロジェクトプログラム、.inoファイルが含まれています。
- REANME.md

次に行う必要があることは、まず必要なライブラリと設定ファイルをArduinoのライブラリフォルダに配置することです。次に、.inoファイルを変更して機能が動作することを確認します。

SquareLine Studioによってエクスポートされたlibrariesフォルダディレクトリから**ui**フォルダと**lv_conf.h**ファイルを、Arduinoライブラリのルートディレクトリにコピーしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/101.png" style={{width:1000, height:'auto'}}/></div>

次に、uiフォルダ直下の.inoファイルを直接開くことができます。その後、プログラムがスムーズにコンパイルされることを確認するために、以下のファイルに変更を加える必要があります。

- **ui.ino**:

<table align="center">
 <tr>
  <th>説明</th>
     <th>スクリーンショット</th>
     <th>コードセグメント</th>
 </tr>
 <tr>
  <th>使用するTFTライブラリの定義と丸型画面ライブラリのインポート</th>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/102.png" style={{width:600, height:'auto'}}/></div></td>  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L1" target="_blank"><b>サンプルコードを見る</b></a></td>
 </tr>
    <tr>
  <th>tftクラスの重複定義をコメントアウト</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/103.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L20" target="_blank"><b>サンプルコードを見る</b></a></td>
 </tr>
 <tr>
  <th>タッチ機能の書き換え</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/104.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L46" target="_blank"><b>サンプルコードを見る</b></a></td>
 </tr>
 <tr>
  <th>画面初期化機能とタッチ初期化機能の追加</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/105.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L86" target="_blank"><b>サンプルコードを見る</b></a></td>
 </tr>
 <tr>
  <th>画面回転</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/106.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L94" target="_blank"><b>サンプルコードを見る</b></a></td>
 </tr>
</table>

その後、使用するXIAOを選択してコンパイルとアップロードを行うことができます。

### LVGLライブラリのカスタマイズオプションについて

コンパイル後に一部のコンポーネントが定義されていないというエラーメッセージが表示される場合、Arduinoライブラリのルートディレクトリにある**lv_conf.h**ファイルをSquareLine Studioでエクスポートした**lv_conf.h**ファイルに置き換えていない可能性が高いです。

マザーボードのメモリを節約するため、lv_conf.hファイルのデフォルト設定では一部のlvgl機能が無効になっています。しかし、ダイヤル描画でこれらの機能を使用する場合は、手動で有効にする必要があります。

- **Windows**システムでの`lv_conf.h`のデフォルトパス：

`C:\Users\{UserName}\Documents\Arduino\libraries`

- **MacOS**システムでの`lv_conf.h`のデフォルトパス：

`\Users\{UserName}\Documents\Arduino\libraries`

簡単な例として、上記の例では`MONTSERRAT 8`フォントを使用していますが、デフォルトではこのフォントは無効になっているため、コンパイル過程でエラーが発生する可能性があります。

必要なのは、lv_conf.hファイル内のこのフォントの後の0を1に変更することだけです。これはフォントが有効になったことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/38.png" style={{width:600, height:'auto'}}/></div>

同様のエラーが発生した場合は、カスタマイズ機能が有効になっているかどうかを再確認してください。

### LVGLベースのダイヤルプログラム

円形画面用に2つのダイヤルスタイルをユーザーの参考として作成しました。複雑なUIロジックのため、XIAOマザーボードに一定のパフォーマンスとメモリが必要になります。XIAOで以下のダイヤルプログラムをコンパイルする際にメモリ不足エラーが発生する場合は、XIAOをアップグレードするか、ダイヤルの機能を削減する必要があるかもしれません。

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

弊社製品をお選びいただきありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
