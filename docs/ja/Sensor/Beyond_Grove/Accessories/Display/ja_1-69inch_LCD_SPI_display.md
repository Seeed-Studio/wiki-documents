---
description: 1.69インチLCD SPIディスプレイの使い方
title: 1.69インチLCD SPIディスプレイ
keywords:
- oledディスプレイ
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/1-69inch_lcd_spi_display
last_update:
  date: 05/15/2025
  author: Citric
---


# 1.69インチLCD SPIディスプレイ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/6.jpg" style={{width:400, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

## 概要

この1.69インチLCDディスプレイは、1.69インチのシリアル液晶ディスプレイで、角が丸いデザインが特徴です。240×280の高解像度と262K RGB表示色を提供し、鮮明でカラフルな画像表現を実現します。このディスプレイの設計理念は、さまざまなDIYプロジェクトやIoT（Internet of Things）プロジェクトのニーズを満たすために、シンプルで高品質なディスプレイソリューションを提供することです。

このディスプレイは、バックライト付きの4ピン電源供給とST7789V2ドライバーICと通信する4ピンSPIを備えた8ピンインターフェースを採用しています。プロジェクト開発を迅速かつ便利に開始できるよう、ドライバライブラリとサンプルを準備しています。

### 仕様

<div class="table-center">
	<table align="center">
        <tbody>
            <tr>
                <th>動作電圧</th>
                <td>3.3V / 5V</td>
                <th>解像度</th>
                <td>240 × 280 ピクセル</td>
            </tr>
            <tr>
                <th>通信インターフェース</th>
                <td>4線式SPI</td>
                <th>表示サイズ</th>
                <td>27.97 × 32.63mm</td>
            </tr>
            <tr>
                <th>ディスプレイパネル</th>
                <td>IPS</td>
                <th>ピクセルピッチ</th>
                <td>0.11655 × 0.11655mm</td>
            </tr>
            <tr>
                <th>ドライバー</th>
                <td>ST7789V2</td>
                <th>寸法</th>
                <td>31.50 × 39.00mm</td>
            </tr>
        </tbody>
    </table>
</div>

### 外形寸法

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/7.jpg" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/8.jpg" style={{width:450, height:'auto'}}/></div>

### 特徴

- 240×280の解像度、262K RGBカラー、鮮明でカラフルな表示効果
- SPIインターフェースにより必要なIOピンを最小化、XIAO/Raspberry Pi/Arduino/STM32などのコントローラボードをサポート
- 開発リソース付き（XIAO/Raspberry Pi/Arduino/STM32用のサンプル）

### 応用アイデア

- **バンドや時計**: このディスプレイはXIAO MCUと組み合わせてバンドや時計デバイスを構築することができます。高解像度でカラフルな表示により、日付や時計情報を表示できます。その小型サイズにより、迅速にプロトタイプを作成するのに最適です。

- **PC情報表示スクリーン**: このLCDディスプレイをコンバータボードと接続し、PCの動作情報（温度やファンの回転数など）を表示するために使用できます。ボルトを使用してPCケースに簡単に固定することができます。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/9.png" style={{width:800, height:'auto'}}/></div>

## はじめに

### ハードウェア準備

ここでは、IMUの6自由度、Bluetooth、PDMマイクを搭載したXIAO nRF52840ボードの使用方法を説明します。このボードとディスプレイがあれば、デジタル時計を構築するために必要な主要コンポーネントが揃います。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO nRF52840</th>
			<th>1.69インチ LCD SPI ディスプレイ</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

次に、ディスプレイのピンをXIAO nRF52840ボードに接続する必要があります。以下の図に従って接続してください：

| 1.69インチ LCD SPI ディスプレイ | XIAO nRF52840 |
| ----------------------------- | ------------------------- |
| VCC | 3V3 |
| GND | GND |
| DIN | D10 |
| CLK | D8 |
| CS | D1 |
| DC | D3 |
| RST | D0 |
| BL | D6 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/10.png" style={{width:700, height:'auto'}}/></div>

## Arduino ライブラリ概要

:::tip
Arduinoを初めて使用する場合は、[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

**Waveshare**が提供するArduinoのサンプルプログラムを基に、XIAOシリーズ全体で使用できるArduinoライブラリを作成しました。このライブラリは以下のボタンからGithubで直接ダウンロードできます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO_ST7789V2_LCD_Display/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 関数

スケッチを開発する前に、ライブラリで利用可能な関数を確認しましょう。

- `void Init(uint8_t cs = CS_PIN, uint8_t dc = DC_PIN, uint8_t rst = RST_PIN, uint8_t bl = BL_PIN)` —— 共通レジスタの初期化。

    **入力パラメータ**
    - `cs`: チップセレクトピンを設定します。デフォルト値はXIAOの**D1**ピンです。
    - `dc`: DCピンを設定します。デフォルト値はXIAOの**D3**ピンです。
    - `rst`: リセットピンを設定します。デフォルト値はXIAOの**D0**ピンです。
    - `bl`: バックライト制御ピンを設定します。デフォルト値はXIAOの**D6**ピンです。

- `void SetBacklight(uint16_t Value)` —— バックライトの設定。

    **入力パラメータ**
    - `Value`: バックライトの強度を0から255の範囲で設定します。

- `void Reset(void)` —— ハードウェアリセット。

- `void SetCursor(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend)` —— カーソル位置を設定。

    **入力パラメータ**
    - `Xstart`: 開始位置のx座標。
    - `Ystart`: 開始位置のy座標。
    - `Xend`: 終了位置のx座標。
    - `Yend`: 終了位置のy座標。

- `void Clear(uint16_t Color)` —— 画面を特定の色でリフレッシュするクリア機能。

    **入力パラメータ**
    - `Color`: 画面全体をクリアする色。

- `void ClearWindow(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t color)` —— 特定のエリアを同じ色でリフレッシュ。

    **入力パラメータ**
    - `Xstart`: 開始位置のx座標。
    - `Ystart`: 開始位置のy座標。
    - `Xend`: 終了位置のx座標。
    - `Yend`: 終了位置のy座標。
    - `color`: 設定する色。

- `void SetWindowColor(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color)` —— エリアの色を設定。

    **入力パラメータ**
    - `Xstart`: 開始位置のx座標。
    - `Ystart`: 開始位置のy座標。
    - `Xend`: 終了位置のx座標。
    - `Yend`: 終了位置のy座標。
    - `color`: 設定する色。

- `void SetUWORD(uint16_t x, uint16_t y, uint16_t Color)` —— uint16_tを描画。

    **入力パラメータ**
    - `x`: X座標を設定。
    - `y`: Y座標を設定。
    - `Color`: 色を設定。

- `void SetRotate(uint16_t Rotate)` —— 画像の回転を選択。

    **入力パラメータ**
    - `Rotate`: ROTATE_0, ROTATE_90, ROTATE_180, ROTATE_270

- `void SetMirroring(uint8_t mirror)` —— 画像のミラーリングを選択。

    **入力パラメータ**
    - `mirror`: MIRROR_NONE, MIRROR_HORIZONTAL, MIRROR_VERTICAL, MIRROR_ORIGIN

- `void SetPixel(uint16_t Xpoint, uint16_t Ypoint, uint16_t Color)` —— ピクセルを描画します。

    **入力パラメータ**
    - `Xpoint`: X座標。
    - `Ypoint`: Y座標。
    - `Color`: 塗りつぶす色。

- `void DrawPoint( uint16_t Xpoint, uint16_t Ypoint, uint16_t Color, DOT_PIXEL Dot_Pixel, DOT_STYLE Dot_FillWay)` —— 点 (Xpoint, Ypoint) を描画し、色を塗りつぶします。

    **入力パラメータ**
    - `Xpoint`: 点のX座標。
    - `Ypoint`: 点のY座標。
    - `Color`: 色を設定。
    - `Dot_Pixel`: 点のサイズ。

- `void DrawLine(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color, DOT_PIXEL Line_width, LINE_STYLE Line_Style)` —— 任意の傾斜の線を描画します。

    **入力パラメータ**
    - `Xstart`：開始点のX座標。
    - `Ystart`：開始点のY座標。
    - `Xend`：終了点のX座標。
    - `Yend`：終了点のY座標。
    - `Color`：線分の色。

- `void DrawRectangle(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color, DOT_PIXEL Line_width, DRAW_FILL Filled)` —— 長方形を描画します。

    **入力パラメータ**
    - `Xstart`：開始点のX座標。
    - `Ystart`：開始点のY座標。
    - `Xend`：終了点のX座標。
    - `Yend`：終了点のY座標。
    - `Color`：線分の色。
    - `Filled`: 塗りつぶしの有無--- 1：塗りつぶし、0：空。

- `void DrawCircle(uint16_t X_Center, uint16_t Y_Center, uint16_t Radius, uint16_t Color, DOT_PIXEL Line_width, DRAW_FILL Draw_Fill)` —— 指定された位置に指定されたサイズの円を8点法で描画します。

    **入力パラメータ**
    - `X_Center`：中心のX座標。
    - `Y_Center`：中心のY座標。
    - `Radius`：円の半径。
    - `Color`：円の線分の色。
    - `Filled`: 塗りつぶしの有無--- 1：塗りつぶし、0：塗りつぶさない。

- `void DrawString_EN(int16_t Xstart, int16_t Ystart, const char * pString, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)` —— 文字列を表示します。

    **入力パラメータ**
    - `Xstart`：X座標。
    - `Ystart`：Y座標。
    - `pString`：表示する英文字列の先頭アドレス。
    - `Font`：文字サイズを表示する構造体ポインタ。
    - `Color_Background`: 英文字の背景色を選択。
    - `Color_Foreground`: 英文字の前景色を選択。

- `void DrawNum(int16_t Xpoint, int16_t Ypoint, int32_t Nummber, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)` —— 数字を表示します。

    **入力パラメータ**
    - `Xstart`：X座標。
    - `Ystart`：Y座標。
    - `Nummber`：表示する数字。
    - `Font`：文字サイズを表示する構造体ポインタ。
    - `Color_Background`: 英文字の背景色を選択。
    - `Color_Foreground`: 英文字の前景色を選択。

- `void DrawFloatNum(int16_t Xpoint, int16_t Ypoint, double Nummber,  int8_t Decimal_Point, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)` —— 浮動小数点数を表示します。

    **入力パラメータ**
    - `Xstart`：X座標。
    - `Ystart`：Y座標。
    - `Nummber`：表示する浮動小数点データ。
    - `Decimal_Point`：小数点以下の桁数を表示。
    - `Font`: 文字サイズを表示する構造体ポインタ。
    - `Color`: 英文字の背景色を選択。

- `void DrawImage(const unsigned char *image, int16_t xStart, int16_t yStart, int16_t W_Image, int16_t H_Image)` —— 画像を表示します。

    **入力パラメータ**
    - `image`: 画像の開始アドレス。
    - `xStart`：X開始座標。
    - `yStart`：Y開始座標。
    - `xEnd`: 画像の幅。
    - `yEnd`: 画像の高さ。

### デフォルト変数

```cpp
#define RST_PIN D0
#define DC_PIN  D3
#define BL_PIN  D6
#define CS_PIN  D1

#define LCD_WIDTH   240 //LCDの幅
#define LCD_HEIGHT  280 //LCDの高さ

/**
 * 画像の色
**/
#define WHITE         0xFFFF
#define BLACK         0x0000    
#define BLUE          0x001F  
#define BRED          0XF81F
#define GRED          0XFFE0
#define GBLUE         0X07FF
#define RED           0xF800
#define MAGENTA       0xF81F
#define GREEN         0x07E0
#define CYAN          0x7FFF
#define YELLOW        0xFFE0
#define BROWN         0XBC40 
#define BRRED         0XFC07 
#define GRAY          0X8430 
#define DARKBLUE      0X01CF  
#define LIGHTBLUE     0X7D7C   
#define GRAYBLUE      0X5458 
#define LIGHTGREEN    0X841F 
#define LGRAY         0XC618 
#define LGRAYBLUE     0XA651
#define LBBLUE        0X2B12

/**
 * 表示の回転
**/
#define ROTATE_0            0
#define ROTATE_90           90
#define ROTATE_180          180
#define ROTATE_270          270

#define MIRROR_NONE        0x00
#define MIRROR_HORIZONTAL  0x01
#define MIRROR_VERTICAL    0x02
#define MIRROR_ORIGIN      0x03
```

### インストール

ZIPライブラリをダウンロードした後、Arduino IDEを開き、**スケッチ > ライブラリを含める > .ZIPライブラリを追加**をクリックします。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## XIAO 例

ライブラリを正しくダウンロードしてインストールした後、examplesフォルダ内に**helloworld.ino**と**bgcolor.ino**という2つのサンプルプログラムが見つかります。**bgcolor.ino**は背景色を表示する例で、デフォルトでは赤色に設定されています。一方、**helloworld.ino**は会社のロゴのアニメーションを表示する例で、この例には**bgcolor**の例で使用されている効果も含まれています。

```cpp
#include <st7789v2.h>
#include "SPI.h"
#include "seeed.h"

st7789v2 Display;

void setup() {
  // 初回実行時にセットアップコードを記述します:
  Display.SetRotate(270);
  Display.Init();
  Display.SetBacklight(100);
  Display.Clear(WHITE);
}

void loop() {
  // 繰り返し実行されるメインコードを記述します:
//  Display.SetPixel(100, 100, RED);
//  Display.DrawPoint(50, 50, YELLOW, DOT_PIXEL_8X8, DOT_FILL_AROUND);

  Display.DrawImage(gImage_seeed, 20, 90, 240, 47);

  Display.DrawLine(15, 65, 65, 65, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(15, 70, 80, 70, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
  Display.DrawRectangle(15, 80, 265, 150, GRAY, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  
  Display.DrawCircle(10, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(10, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawLine(200, 160, 265, 160, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(215, 165, 265, 165, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
  Display.DrawString_EN(20, 180, "By: Citric", &Font20, WHITE, BLACK);
//  Display.DrawNum(100, 220, 123456, &Font24, RED, BRED);
  Display.DrawFloatNum(100, 210, 1.00, 2, &Font16, WHITE, BLACK);
}
```

ディスプレイ上にSeeed Studioのロゴが動的に表示されるのが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/11.jpg" style={{width:700, height:'auto'}}/></div>


## トラブルシューティング

### 1. スクリーンを接続したままプログラムを書き換えるとスクリーンが動作しない？

A: プログラムがスクリーンと継続的に通信している場合、プログラムの書き換えがこのプロセスを中断し、スクリーンが正常に動作しなくなることがあります。電源をオフにして、スクリーンの正常な動作を回復させてください。

### 2. ディスプレイにはどのような電源を使用すればよいですか？

A: 回路基板は3.3Vまたは5Vの入力電圧を受け入れることができますので、この範囲内の電源を使用してください。

### 3. ディスプレイの色が正しく表示されません。原因は何でしょうか？

A: コード内でディスプレイが正しく初期化されていること、正しい色の値を使用していることを確認してください。それでも問題が解決しない場合、ディスプレイまたは接続ケーブルに問題がある可能性があります。接続を確認するか、別のディスプレイで試してみてください。

## リソース

- **[PDF]** [回路図](https://www.waveshare.com/w/upload/2/2b/1.69inch_LCD_Module.pdf)
- **[PDF]** [データシート](https://www.waveshare.com/w/upload/c/c9/ST7789V2.pdf)
- **[PDF]** [2D図面](https://www.waveshare.com/w/upload/4/41/1.69inch_LCD_Module_2Ddrawing.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なるニーズや好みに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>