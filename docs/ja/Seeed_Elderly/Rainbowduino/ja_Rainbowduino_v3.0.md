---
description: Rainbowduino_v3.0
title: Rainbowduino v3.0
keywords:
- Rainbowduino_v3.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Rainbowduino_v3.0
last_update:
  date: 05/15/2025
  author: Matthew
---


![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbowduino_V3.0.jpg)

Rainbowduinoボードは、プロフェッショナルな多重化LEDドライバーを備えたArduino互換のコントローラーボードです。**8x8 RGB LEDマトリックス**または**4x4x4 RGB LEDキューブ**を共通アノードモードで駆動することができます。Rainbowduino v3.0は、**12チャンネル**（R/G/B x 4）の定電流適応パルス密度変調（APDM）を提供する**MY9221**チップを2つ使用しています。Rainbowduino v3.0は、I2Cインターフェースを使用してさらに多くのボードをカスケード接続するための準備が整っています。

**Rainbowduino v3.0**はArduinoブートローダーがフラッシュされており、Arduino IDEを使用してスケッチを簡単にプログラムできます。他のLEDドライバーとは異なり、スケッチをプログラムするためのUSBからUART（FT232RL）が内蔵されています。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Rainbowduino-LED-driver-platform-Atmega-328.html?queryID=bc1228bcd9b9d4b2534accb940b86bea&objectID=2019&indexName=bazaar_retailer_products)

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbowduino_V3.0b_board_bottom.png)
**Rainbowduino v3.0** 底面

特徴
--------

| パラメータ                     | 値                                      |
|---------------------------------|----------------------------------------|
| 定電流出力                     | 20.8mA                                 |
| ピンヘッダー                   | 2 x 16（多重化LED接続用）              |
| 最大LED駆動能力                | 192（例：8x8x3）                       |
| 対応LEDディスプレイ            | 4x4x4 RGBキューブ & 8x8 RGB LEDマトリックス |
| USBからUART                    | FT232RL                                |
| DC電源                         | USB給電または外部6V~12V DC             |
| 内蔵電圧レギュレーター         | 5V / 1A                                |

応用アイデア
-----------------

- 汎用LEDドライバー
  - 4x4x4 RGBキューブを接続
  - 8x8 RGBマトリックスを接続
- 複数の**Rainbowduino v3.0**を連結してLED看板を作成

使用方法
-----

### ハードウェアセットアップ

:::note
Rainbowduino v3.0をプログラムする際は、スライドスイッチを常に<span style={{fontWeight: 'bold'}}>USB</span>位置に設定してください。スライドスイッチを<span style={{fontWeight: 'bold'}}>HOST</span>位置に設定すると、オンボードのFT232がUartSBeeとして動作します（この機能はRainbowduino v3.0の通常操作には必要ありません）。
:::

LEDマトリックスへの接続は非常に簡単です。

- **RGB LEDマトリックスの接続**
    RGBマトリックスの2x16オスピンヘッダーを以下のようにRainbowduinoに接続します（RGBマトリックスの背面を確認し、「2088RGB」テキストマークに近い16オスピンヘッダーをRainbowduinoのDRIVE - GREEN - DRIVEピンヘッダーに接続してください）。

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbowduino_v3.0_with_LED_Matrix.jpg)

**Rainbowduino v3.0が8x8 RGB LEDマトリックスに接続された状態**

または

- **RGB LEDキューブの接続**
    Rainbow Cube Kitの2x16オスピンヘッダーを以下のようにRainbowduinoに接続します。

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube_Installation_1.jpg)

**2x16ピンヘッダー**の位置

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube_Installation_2.jpg)

**Rainbowduino**が**Rainbow Cube Kit**に正しく接続された状態

- プログラム用にRainbowduinoにUSBケーブルを接続します。

### ソフトウェアセットアップ

- Arduino IDE --> ツール --> ボードメニューで「DuemilanoveまたはDiecimila」を選択します。
- リソースセクションからRainbouduino 3.0ライブラリをダウンロードしてインストールします。

### プログラミング

#### RGB LEDキューブでの使用

------------------------------------------------------------------------

<!-- ![](https://www.seeedstudio.com/depot/images/cubeani.gif) -->
RGB LEDキューブを使用した簡単な例から始めましょう：

- リソースからRainbowduino v3.0ライブラリをダウンロードします。
- Cube1.inoスケッチを開きます（そのコピーを以下に再現しています）。
- スケッチをコンパイルしてアップロードします。そのコピーを以下に再現しています：

```
/*
 Rainbowduino v3.0 Library examples:  Cube1
 
 Sets pixels on 3D plane (4x4x4 cube)
*/
 
#include <Rainbowduino.h>
 
void setup()
{
  Rb.init(); //Rainbowduinoドライバーを初期化
}
 
void loop()
{
  // (Z,X,Y):(0,0,0) ピクセルをBLUEに設定
  Rb.setPixelZXY(0,0,0,0x0000FF); //24ビットRGBカラーコードを使用
 
  // (Z,X,Y):(0,3,0) ピクセルをREDに設定
  Rb.setPixelZXY(0,3,0,0xFF,0,0); //R, G, Bカラーのバイトを使用
 
  // (Z,X,Y):(3,0,3) ピクセルをGREENに設定
  Rb.setPixelZXY(3,0,3,0x00FF00); //24ビットRGBカラーコードを使用
}
```

出力：

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube1.jpg)

Cube1.pdeデモ

Rainbowduino v3.0ライブラリはRGB LEDキューブを使用するための多くのAPIを提供しています。以下のセクションではそれらをリストアップし説明します：

| API                                                                                                                                     | 説明                                                                           |
|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| **Rb.init(void)**                                                                                                                       | Rainbowduinoドライバーを初期化します。これはsetup()内に配置する必要があります。 |
| **Rb.setPixelZXY(unsigned char z, unsigned char x, unsigned char y, unsigned char colorR, unsigned char colorG, unsigned char colorB)** | 各チャンネル（カラー）を8ビット数で指定してピクセル(z,x,y)を設定します。       |
| **Rb.setPixelZXY(unsigned char z, unsigned char x, unsigned char y, uint32_t colorRGB)**                                              | 24ビットRGBカラーコードを指定してピクセル(z,x,y)を設定します。                 |
| **Rb.blankDisplay(void)**                                                                                                               | すべてのLEDを消灯するために使用される関数です。                                |

**setPixelZXY() デモ**

- (Z,X,Y) ピクセルアドレス指定を理解するために、別の例を見てみましょう。このデモでは、レイヤー 0 (Z-0) が緑色に塗られ、レイヤー 3 が青色に塗られます。

```
/*
 Rainbowduino v3.0 ライブラリ例: Cube2
 
 3D 平面 (4x4x4 キューブ) 上のピクセルを設定
*/
 
#include <Rainbowduino.h>
 
void setup()
{
  Rb.init(); // Rainbowduino ドライバを初期化
}
 
unsigned int z,x,y;
 
void loop()
{
  for(x=0;x<4;x++)
  {
    for(y=0;y<4;y++)
    {
     // レイヤー 0 を緑色に塗る
     Rb.setPixelZXY(0,x,y,0x00FF00); // 24ビット RGB カラーコードを使用
    }
  }  
 
  for(x=0;x<4;x++)
  {
    for(y=0;y<4;y++)
    {
     // レイヤー 3 を青色に塗る
     Rb.setPixelZXY(3,x,y,0x0000FF); // 24ビット RGB カラーコードを使用
    }
  }
}
```

出力:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube2.jpg)

Cube2.pde デモ

**setPixelZXY() ランダムカラー デモ**

- このデモでは、すべての LED がランダムな色で塗られます。5秒の遅延後、キューブ全体が再びランダムな色で塗り直されます。

```
    /*
     Rainbowduino v3.0 ライブラリ例: Cube3

     3D 平面 (4x4x4 キューブ) 上のピクセルを設定
    */

    #include <Rainbowduino.h>

    void setup()
    {
      Rb.init(); // Rainbowduino ドライバを初期化
    }

    unsigned int z,x,y;

    void loop()
    {
     for(z=0;z<4;z++)
     { 
      for(x=0;x<4;x++)
      {
        for(y=0;y<4;y++)
        {
         // ランダムな色で塗る
         Rb.setPixelZXY(z,x,y,random(0xFF),random(0xFF),random(0xFF)); // R, G, B カラーバイトを使用
        }
      }
     }
    delay(5000);
    Rb.blankDisplay(); // LED をクリア (すべてを空白にする)
    }
```

出力:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube3.jpg)

Cube3.pde デモ

**ナイトランプ / ムードランプ デモ**

```
/*
 
 Rainbowduino v3.0 ライブラリ例: ムードランプ
 
*/
 
#include <Rainbowduino.h>
 
 
// HSV から RGB 配列への変換
 
unsigned char RED[64] = {255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,238,221,204,188,171,154,137,119,102,85,
68,51,34,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,35,52};
 
unsigned char GREEN[64] = {0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255,255,255,255,255,255,255,255,255,255,255,255,
255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,238,221,204,188,170,154,136,120,102,86,68,52,34,18,0,0,0,0};
 
unsigned char BLUE[64] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,34,52,68,86,102,120,136,154,170,188,
204,221,238,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255};
 
void setup()
{
  Rb.init(); // Rainbowduino ドライバを初期化
}
 
unsigned int z,x,y;
void loop()
{
 
for(z=0; z<64 ;z++)
{
 for(x=0;x<8;x++)
 {
    for(y=0;y<8;y++)
    {
     // ランダムな色で塗る
     //Rb.setPixelZXY(z,x,y,RED[i],GREEN[i],BLUE[i]); // R, G, B カラーバイトを使用
     Rb.setPixelXY(x,y,RED[z],GREEN[z],BLUE[z]); // R, G, B カラーバイトを使用
    }
 }
 delay(100);
}
 
for(z=63; z > 0 ;z--)
{
 for(x=0;x<8;x++)
 {
    for(y=0;y<8;y++)
    {
     // ランダムな色で塗る
     //Rb.setPixelZXY(z,x,y,RED[i],GREEN[i],BLUE[i]); // R, G, B カラーバイトを使用
     Rb.setPixelXY(x,y,RED[z],GREEN[z],BLUE[z]); // R, G, B カラーバイトを使用
    }
 }
 delay(100);
}
 
}
```

**プラズマキューブ**

```
/*
 
 Rainbowduino v3.0 ライブラリ例: 3D プラズマ
 
*/
 
#include <Rainbowduino.h>
 
// HSV から RGB 配列への変換
 
unsigned char RED[64] = {255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,238,221,204,188,171,154,137,119,102,85,
68,51,34,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,35,52};
 
unsigned char GREEN[64] = {0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255,255,255,255,255,255,255,255,255,255,255,255,
255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,238,221,204,188,170,154,136,120,102,86,68,52,34,18,0,0,0,0};
 
unsigned char BLUE[64] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,34,52,68,86,102,120,136,154,170,188,
204,221,238,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255};
 
unsigned char plasma[4][4][4];
 
void setup()
{
  Rb.init(); // Rainbowduino ドライバを初期化
 
  for(unsigned char x = 0; x < 4; x++)
  {
    for(unsigned char y = 0; y < 4; y++)
    {
      for(unsigned char z = 0; z < 4; z++)
       {
        int color = int(32.0 + (32.0 * sin(x / 1.0))+ 32.0 + (32.0 * sin(y / 1.0)) + 32.0 + (32.0 * sin(z / 1.0))) / 3;
        plasma[x][y][z] = color;      
       }   
    }
  }
}
 
unsigned char x,y,z,colorshift=0;
 
void loop()
{
for(x=0;x<4;x++)  
{
 for(y=0;y<4;y++)  
 {
  for(z=0;z<4;z++)
    {
     Rb.setPixelZXY(z,x,y,(RED[plasma[x][y][z] + colorshift]) % 256,(GREEN[plasma[x][y][z] + colorshift]) % 256,(BLUE[plasma[x][y][z] + colorshift]) % 256); // R, G, B カラーバイトを使用
    }
 }
}
 delay(100);
 colorshift=  colorshift + 1;
}
```

出力:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube_Plasma_demo.jpg)

PlasmaCube.pde デモ

#### RGB LED マトリックスでの使用

Rainbowduino v3.0 ライブラリは、RGB LED マトリックスを使用するための多くの API を提供します。以下のセクションでは、それらをリストアップし説明します:

<table>
<tr>
<th>API</th>
<th>説明</th>
</tr>
<tr>
<td><b>Rb.init(void)</b></td>
<td>Rainbowduino ドライバを初期化します。setup() 内に配置する必要があります。</td>
</tr>
<tr>
<td><b>Rb.setPixelXY(unsigned char x, unsigned char y, unsigned char colorR, unsigned char colorG, unsigned char colorB)</b></td>
<td>各チャンネル (色) を 8ビット数値で指定してピクセル (x,y) を設定します。</td>
</tr>
<tr>
<td><b>Rb.setPixelXY(unsigned char x, unsigned char y, uint32_t colorRGB)</b></td>
<td>24ビット RGB カラーコードを指定してピクセル (x,y) を設定します。</td>
</tr>
<tr>
<td><b>Rb.blankDisplay(void)</b></td>
<td>すべての LED を空白にするために使用されます。</td>
</tr>
<tr>
<td><b>Rb.drawChar(unsigned char ascii, unsigned int poX, unsigned int poY, uint32_t colorRGB)</b></td>
<td>(poX,poY) に uint32_t カラーの ASCII 文字を描画します。</td>
</tr>
<tr>
<td><b>Rb.drawCircle(int poX, int poY, int r, uint32_t color)</b></td>
<td>(poX,poY) に半径 r の uint32_t カラーの円を描画します。</td>
</tr>
<tr>
<td><b>Rb.fillCircle(int poX, int poY, int r, uint32_t color)</b></td>
<td>(poX,poY) に半径 r の塗りつぶし uint32_t カラーの円を描画します。</td>
</tr>
<tr>
<td><b>Rb.drawLine(unsigned int x0,unsigned int y0,unsigned int x1,unsigned int y1, uint32_t color)</b></td>
<td>(x0,y0) から (x1,y1) までの線を描画します。</td>
</tr>
<tr>
<td><b>Rb.drawVerticalLine(unsigned int poX, unsigned int poY,unsigned int length, uint32_t color)</b></td>
<td>(poX,poY) から長さピクセルの水平線を描画します。</td>
</tr>
<tr>
<td><b>Rb.drawRectangle(unsigned int poX, unsigned int poY, unsigned int length,unsigned int width, uint32_t color)</b></td>
<td>(poX,poY) から長さと幅ピクセルの矩形線を描画します。</td>
</tr>
<tr>
<td><b>Rb.fillRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, uint32_t color)</b></td>
<td>(poX,poY) から長さと幅ピクセルの塗りつぶし矩形を描画します。</td>
</tr>
</table>

**Shapes デモ**

```
    /*
     Rainbowduino v3.0 ライブラリの例:

     2D 平面 (8x8 マトリックス) に図形を描画

    */

    #include <Rainbowduino.h>

    void setup()
    {
      Rb.init();
    }

    unsigned char x,y,z;

    void loop()
    {

         Rb.drawCircle(3, 4, 3, 0xFF0000); // (3,4) の位置に半径 3 の赤い円を描画
         delay(1000);
         Rb.blankDisplay();
      
         Rb.fillCircle(3, 4, 2, 0x0000FF); // (3,4) の位置に半径 2 の青い塗りつぶし円を描画
         delay(1000);
         Rb.blankDisplay();

         Rb.drawLine(0, 0, 7, 7, 0x00FF00); // (0,0) から (7,7) までの線を描画
         delay(1000);
         Rb.blankDisplay();

         Rb.drawVerticalLine(0, 0, 7, random(0xFFFFFF)); // (0,0) から長さ 7 ピクセルの垂直線を描画
         delay(1000);
         Rb.blankDisplay();

         Rb.drawHorizontalLine(0, 0, 7, random(0xFFFFFF)); // (0,0) から長さ 7 ピクセルの水平線を描画
         delay(1000);
         Rb.blankDisplay();

         Rb.drawRectangle(0, 0, 4, 6, random(0xFFFFFF)); // (0,0) から長さ 4、幅 6 ピクセルの矩形を描画
         delay(1000);
         Rb.blankDisplay();

         Rb.fillRectangle(0, 0, 7, 7, random(0xFFFFFF)); // (0,0) から長さと幅が 7 ピクセルの塗りつぶし矩形を描画
         delay(1000);
         Rb.blankDisplay();
      
    }
```

出力:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Shapes.jpg)

図形

**drawChar デモ**

```
    /*
     Rainbowduino v3.0 ライブラリの例:

     2D 平面 (8x8 マトリックス) に文字を描画

    */

    #include <Rainbowduino.h>

    void setup()
    {
      Rb.init();
    }

    unsigned char x,y,z;

    void loop()
    {

      for(int i= 0x20; i<=0x7E; i++) // すべての印刷可能な文字の ASCII 値を生成
      {
         Rb.drawChar(i,0,1,random(0xFFFFFF)); 
         delay(500);
         Rb.blankDisplay();
      }
      
    }
```

出力:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/CharE.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_v3.0b_EagleCADFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Arduino IDE 1.0 以上用 Rainbowduino V3.0 ライブラリ](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_for_Arduino1.0.zip)
- [Arduino 1.0 用 Rainbowduino3.0 SnakeGame ライブラリ](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/SnakeGame20120601.zip)
- [Eagle フォーマットの Rainbowduino V3.0 回路図とレイアウト](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_v3.0b_EagleCADFiles.zip)
- [PDF フォーマットの Rainbowduino V3.0 回路図](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_V3.0b.pdf)
- [MY9221 LED ドライバ データシート](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/MY9221_DS_1.0.pdf)

**その他関連製品、リソース、プロジェクト:**

- [Rainbow Cube Kit (組み立て済み)](https://www.seeedstudio.com/depot/rainbow-cube-kit-assembled-p-998.html?cPath=138)
- [Rainbow Cube kit- RGB 4X4X4](https://www.seeedstudio.com/depot/rainbow-cube-kit-rgb-4x4x4-rainbowduino-compatible-p-596.html?cPath=138)
- [60mm 四方 8*8 LED マトリックス - 超高輝度 RGB](https://www.seeedstudio.com/depot/60mm-square-88-led-matrix-super-bright-rgb-p-113.html?cPath=163_165)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Rainbowduino_v3.0 から作成されました -->

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>