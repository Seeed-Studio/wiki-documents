---
title: 2.8インチ TFT タッチシールド V1.0
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/2.8inch-TFT_Touch_Shield_V1.0/
slug: /ja/2.8inch-TFT_Touch_Shield_V1.0
last_update:
  date: 05/15/2025
  author: gunengyu
---


2.8インチ TFT タッチシールドは、Arduino / Arduino Mega 互換の多色TFTディスプレイで、4線式抵抗膜タッチスクリーンを備えています。Arduinoシールド互換のフットプリントを含み、取り付けが可能です。TFTドライバはプロフェッショナルなドライバICに基づいており、8ビットデータと4ビット制御インターフェースを備えています。

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/Tft.jpg)

## 特徴

- Arduino/Seeeduino、Arduino Mega、および Seeeduino Mega 互換

- 2.8インチ QVGA ディスプレイ

- 抵抗膜タッチスクリーン

## 仕様

<table cellspacing="0" width="80%">
<tr>
<th scope="col"> 項目</th>
<th scope="col"> 最小</th>
<th scope="col"> 典型</th>
<th scope="col"> 最大</th>
<th scope="col"> 単位</th>
</tr>
<tr>
<th scope="row"> 電圧</th>
<td>4.5</td>
<td>5</td>
<td>5.5</td>
<td>VDC</td>
</tr>
<tr>
<th scope="row"> 電流</th>
<td>/</td>
<td>/</td>
<td>250</td>
<td>mA</td>
</tr>
<tr>
<th scope="row"> LCD パネルサイズ</th>
<td colspan="3"> 2.8</td>
<td>インチ</td>
</tr>
<tr>
<th scope="row"> 視野角</th>
<td colspan="3"> 60~120</td>
<td>度</td>
</tr>
<tr>
<th scope="row"> 解像度</th>
<td colspan="3"> 320x240</td>
<td>/</td>
</tr>
<tr>
<th scope="row"> LCD 色</th>
<td colspan="3"> 65k</td>
<td>/</td>
</tr>
<tr>
<th scope="row"> バックライトタイプ</th>
<td colspan="3"> LED</td>
<td>/</td>
</tr>
<tr>
<th scope="row"> LCD ドライバ IC</th>
<td colspan="3"> ST7781R</td>
<td>/</td>
</tr>
<tr>
<th scope="row"> インターフェースタイプ</th>
<td colspan="3"> 10±2</td>
<td>g</td>
</tr>
<tr>
<th scope="row"> インターフェースタイプ</th>
<td colspan="3"> パラレルポート (8ビットデータ + 4ビット制御)</td>
<td>/</td>
</tr>
<tr>
<th scope="row"> タッチスクリーン</th>
<td colspan="3"> 4線式抵抗膜タッチスクリーン</td>
<td>/</td>
</tr>
<tr>
<th scope="row"> アクティブエリア</th>
<td colspan="3"> 43.2*57.3</td>
<td>mm</td>
</tr>
<tr>
<th scope="row"> ESD 接触放電</th>
<td colspan="3"> ±4</td>
<td>KV</td>
</tr>
<tr>
<th scope="row"> ESD 空気放電</th>
<td colspan="3"> ±8</td>
<td>KV</td>
</tr>
<tr>
<th scope="row"> 寸法</th>
<td colspan="3"> 72.5x54.7x18</td>
<td>mm</td>
</tr>
<tr>
<th scope="row"> 重量</th>
<td colspan="3"> 24±2</td>
<td>g</td>
</tr>
</table>

**注意事項**

- モジュールを落下させるなどの機械的衝撃や衝突を与えないでください。

- ディスプレイ表面やその周辺部分に過度な力を加えないでください。色調が変化する可能性があります。

## Arduinoでのピン使用

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/2.8_Inch_TFT_Touch_Shield_Block_Diagram.jpg)

**D0** - 未使用。

**D1** - 未使用。

**D2** - LCD データビット 8。

**D3** - LCD データビット 9。

**D4** - LCD データビット 10。

**D5** - LCD データビット 11。

**D6** - LCD データビット 12。

**D7** - LCD データビット 13。

**D8** - LCD データビット 14。

**D9** - LCD データビット 15。

**D10** - LCD CS ピン（アクティブロー）。

**D11** - LCD RS ピン。

**D12** - LCD WR ピン。

**D13** - LCD RD ピン。

**D14(A0)** - タッチスクリーン Y-。

**D15(A1)** - タッチスクリーン X-。

**D16(A2)** - タッチスクリーン Y+。

**D17(A3)** - タッチスクリーン X+。

**D18(A4)** - 未使用。

**D19(A5)** - 未使用。

## 使用方法 ##

### ハードウェアのインストール ###

- 以下の図のように、TFTタッチシールドをSeeeduinoに挿入します。

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/TFT_Touch_Shield_with_Seeeduino.jpg)

### TFTプログラミング ###

**TFT**ライブラリは以下のアプリケーションプログラミングインターフェース(**API**)を提供します。このライブラリはArduino APIの代わりにPORTレジスタへの直接アクセスを利用しています。これはMCUとTFT間の通信速度を向上させるためです。現在、このライブラリはArduino、Arduino Mega（1280または2560）、およびSeeeduino ADKメインボード互換のボードをサポートしています。Megaでは、TFTの8ビットデータポートが異なるポートに属する異なるピンに分散されます。これにより、Arduinoと比較してグラフィック描画の速度が低下します。ポートピンの選択は純粋にArduino / Megaのポートピン配置に基づいています。

### 一般的な関数 ###

---

**paintScreenBlack(void)**

- TFT RAMはディスプレイオフモードでのみ初期化できるため、この関数は黒色で画面をクリアするためだけに使用されます。

**setXY(unsigned int poX, unsigned int poY)**

- カーソル位置を(poX, poY)に設定します。この関数は他のグラフィックAPIによって内部的に使用されます。

**setPixel(unsigned int poX, unsigned int poY, unsigned int color)**

- (poX, poY)のピクセルを指定した色に設定します。この関数は他のグラフィックAPIによって内部的に使用されます。

### 線 ###

---

**drawLine(unsigned int x0, unsigned int y0, unsigned int x1, unsigned int y1, unsigned int color)**

- ピクセル(x0, y0)からピクセル(x1, y1)まで指定した色で線を描画します。

**drawVerticalLine(unsigned int poX, unsigned int poY, unsigned int length, unsigned int color)**

- ピクセル(poX, poY)から始まる指定した長さの垂直線を指定した色で描画します。

**drawHorizontalLine(unsigned int poX, unsigned int poY, unsigned int length, unsigned int color)**

- ピクセル(poX, poY)から始まる指定した長さの水平線を指定した色で描画します。

### 長方形 ###

---

**drawRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, unsigned int color)**

- (poX, poY)から始まる長さlength、幅width、色colorの長方形を描画します。

**fillRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, unsigned int color)**

- (poX, poY)から始まる長さlength、幅width、色colorの塗りつぶされた長方形を描画します。

### 円 ###

---

**drawCircle(int poX, int poY, int r, unsigned int color)**

- (poX, poY)を中心とし、半径r、色colorの円を描画します。

**fillCircle(int poX, int poY, int r, unsigned int color)**

- (poX, poY)を中心とし、半径r、色colorの塗りつぶされた円を描画します。

### テキスト ###

---

**drawChar(unsigned char ascii, unsigned int poX, unsigned int poY, unsigned int size, unsigned int fgcolor)**

- (poX, poY)から始まる指定したサイズsize、色fgcolorの組み込みフォントを使用して文字を描画します。この関数はdrawString()関数によって使用されます。

**drawString(char *string, unsigned int poX, unsigned int poY, unsigned int size, unsigned int fgcolor)**

- (poX, poY)から始まる指定したサイズsize、色fgcolorの組み込みフォントを使用して文字列を描画します。

### タッチスクリーンプログラミング ###

---

TFTタッチシールドは[Adafruit Touch Screen Library](https://github.com/adafruit/Touch-Screen-Library)を使用します。抵抗膜方式タッチスクリーンの原理については[外部リンク](https://wiki.seeedstudio.com/ja/2.8inch-TFT_Touch_Shield_V1.0/)を参照してください。簡単に言うと、4線式抵抗膜タッチスクリーンはX軸とY軸それぞれに電圧分圧器を提供します。各軸に適切な電圧を適用し、ADC値をスキャンすることでタッチ位置を検出できます。これらの値は常にノイズの影響を受けやすいため、デジタルフィルターが使用されます。

- TouchScreenライブラリを使用するには、まず以下のようにTouchScreenオブジェクトを作成します。

```
TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300);
```

ここで、XP, YP, XM, YMはタッチスクリーンのXPlus, YPlus, XMinus, YMinusピンに接続されたADCポートピンです。300はXプレート間の抵抗値です。

- Raw ADC値を読み取るには以下を使用します。

```
Point p = ts.getPoint();
```

- Raw ADC値をピクセル座標に変換する必要があります。これはmap関数で行います。このマッピングはv0.9とv1.0で異なります。デモアプリケーションはこのマッピングをすでに処理しています。

```
p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);
```

- 以下のスケッチはTouchScreenライブラリの使用例を示します。また、タッチスクリーン座標をキャリブレーションするためにも使用できます。

- スケッチをコンパイルしてアップロードします。

- シリアルポートモニターを開き、画面に表示されるポイントをタッチします。

- 表示されるXおよびY値が正しいか確認します。正しくない場合は、タッチスクリーン座標を再キャリブレーションする必要があります。

#### タッチスクリーンをキャリブレーションする方法 ####

- パラメータ`TS_MINX, TS_MAXX, TS_MINY, TS_MAXY`はタッチスクリーンの端を決定し、キャリブレーションパラメータを形成します。

- これらの変数に割り当てられる値は、タッチスクリーンの対角線の端をタッチしたときの測定されたADC値（Raw X, Raw Y）です。

- ポイント(0,0)と(239,319)をタッチし、Raw XおよびRaw Y値を記録します。より正確な値を得るために、何度も試して正しい値を見つけてください。

- TS_MINXはX=0のときのADC値に対応します。

- TS_MINYはY=0のときのADC値に対応します。

- TS_MAXXはX=240-1、つまり239のときのADC値に対応します。

- TS_MAXYはY=320-1、つまり319のときのADC値に対応します。

- これらのパラメータをスケッチ内で変更し、再コンパイルしてArduinoにアップロードします。

- まだ正確な値が得られない場合は、上記の手順を繰り返してください。

#### タッチスクリーンデモスケッチ ####

```cpp
// ペイントアプリケーション - TFTとタッチスクリーンの両方をデモンストレーション
// このライブラリはフリーソフトウェアです。再配布および/または
// GNU Lesser General Public Licenseの条件に基づいて変更できます。
// バージョン2.1またはそれ以降のバージョンを選択できます。
//
// このライブラリは有用であることを願って配布されていますが、
// 商品性や特定の目的への適合性の保証はありません。
// 詳細についてはGNU Lesser General Public Licenseを参照してください。
//
// このライブラリとともにGNU Lesser General Public Licenseのコピーを受け取ったはずです。
// 受け取っていない場合は、以下に連絡してください。
// Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
#include <stdint.h>
#include <TouchScreen.h>
#include <TFT.h>

#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__) // mega
#define YP A2   // アナログピンである必要があります。"An"表記を使用してください！
#define XM A1   // アナログピンである必要があります。"An"表記を使用してください！
#define YM 54   // デジタルピンでも可、これはA0です
#define XP 57   // デジタルピンでも可、これはA3です

#elif defined(__AVR_ATmega32U4__) // leonardo
#define YP A2   // アナログピンである必要があります。"An"表記を使用してください！
#define XM A1   // アナログピンである必要があります。"An"表記を使用してください！
#define YM 18   // デジタルピンでも可、これはA0です
#define XP 21   // デジタルピンでも可、これはA3です

#else //168, 328, その他
#define YP A2   // アナログピンである必要があります。"An"表記を使用してください！
#define XM A1   // アナログピンである必要があります。"An"表記を使用してください！
#define YM 14   // デジタルピンでも可、これはA0です
#define XP 17   // デジタルピンでも可、これはA3です

#endif

// (0,0)および(210-1,320-1)の測定されたADC値
// TS_MINXはX=0のときのADC値に対応します
// TS_MINYはY=0のときのADC値に対応します
// TS_MAXXはX=240-1のときのADC値に対応します
// TS_MAXYはY=320-1のときのADC値に対応します

#define TS_MINX 140
#define TS_MAXX 900
#define TS_MINY 120
#define TS_MAXY 940

int color = WHITE;  // ペイントブラシの色

// より良い圧力精度のために、X+とX-間の抵抗を知る必要があります。
// 任意のマルチメータを使用して読み取ります。
// 2.8インチTFTタッチシールドにはXプレート間に300オームがあります。

TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300); // TouchScreenポートピンを初期化

void setup()
{
    Tft.init();  // TFTライブラリを初期化
    pinMode(0,OUTPUT);
    // パレットを描画
    Tft.fillRectangle(0,0,30,10,BLACK);
    Tft.fillRectangle(30,0,30,10,RED);
    Tft.fillRectangle(60,0,30,10,GREEN);
    Tft.fillRectangle(90,0,30,10,BLUE);
    Tft.fillRectangle(120,0,30,10,CYAN);
    Tft.fillRectangle(150,0,30,10,YELLOW);
    Tft.fillRectangle(180,0,30,10,WHITE);
    Tft.fillRectangle(210,0,30,10,GRAY1);
}

void loop()
{
    // ポイントオブジェクトはx, y, z座標を保持します。
    Point p = ts.getPoint();

    // 読み取ったADC値をピクセル座標にマッピング
    p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
    p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);

    // 有効とみなされる最小圧力があります。
    // 圧力が0の場合は押されていないことを意味します。

    if (p.z > ts.pressureThreshhold) {
        // ペイントブラシの色変更を検出
        if(p.y < 15)
        {
            if(p.x >= 0 && p.x < 30)
            {
                color = BLACK;
            }
            if(p.x >= 30 && p.x < 60)
            {
                color = RED;
                digitalWrite(0,HIGH);
            }
            if(p.x >= 60 && p.x < 90)
            {
                color = GREEN;
            }
            if(p.x >= 90 && p.x < 110)
            {
                color = BLUE;
                digitalWrite(0,LOW);
            }
            if(p.x >= 120 && p.x < 150)
            {
                color = CYAN;
            }
            if(p.x >= 150 && p.x < 180)
            {
                color = YELLOW;
            }
            if(p.x >= 180 && p.x < 210)
            {
                color = WHITE;
            }
            if(p.x >= 210 && p.x < 240)
            {
                color = GRAY1;
            }
        }
        else
        {
            Tft.fillCircle(p.x,p.y,2,color);
        }
    }
}
```

### デモコードの表示 ###

- 以下のように、TFT タッチシールドを Seeeduino に挿入してください。

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/DemoShow.JPG)
TFT タッチシールドが Seeeduino に接続されています


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース ##

- **[ライブラリ]** [TFT タッチシールドライブラリ](https://github.com/Seeed-Studio/TFT_Touch_Shield_V1)
- **[Eagle]** [TFT タッチシールド v1.0 回路図とレイアウト](https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip)
- **[PDF]** [TFT タッチ PCB](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/TFT%20Touch%20PCB.pdf)
- **[PDF]** [TFT タッチ SCH](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/TFT%20Touch%20Sch.pdf)
- **[バージョン]** [Radio Shack バージョンの TFT タッチシールド (Eagle ファイル)](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/Schematic_for_Radio_Shack_.zip)
- **[データシート]** [ST7781R](http://garden.seeedstudio.com/images/4/4e/ST7781R_datasheet.pdf) , [FGD280E3715V1_8bit](http://garden.seeedstudio.com/images/7/75/FGD280E3715V1_8bit.pdf)
- **[アプリケーションノート]** [ATMEL - 4線および5線式タッチスクリーンに関するアプリケーションノート](http://www.adafruit.com/datasheets/AVR341.pdf)
- **[タッチスクリーン]** [TI - 抵抗膜式タッチスクリーンの使用](http://focus.ti.com/lit/an/slyt209a/slyt209a.pdf)
- **[SDカード]** [https://github.com/adafruit/SD](https://github.com/adafruit/SD)

## 技術サポート & 製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>