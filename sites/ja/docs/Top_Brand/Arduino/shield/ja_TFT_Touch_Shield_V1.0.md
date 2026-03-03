---
description: TFTタッチシールド V1.0
title: TFTタッチシールド V1.0
keywords:
- Arduinoシールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/TFT_Touch_Shield_V1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/img/Tft.jpg)

2.8インチTFTタッチシールドは、Arduino / Arduino Mega互換の多色TFTディスプレイで、4線式抵抗膜タッチスクリーンを備えています。Arduinoシールド互換のフットプリントを含み、取り付けが可能です。TFTドライバはプロフェッショナルなドライバICに基づいており、8ビットデータと4ビット制御インターフェースを備えています。

## 特徴 ##

- Arduino/Seeeduino、Arduino Mega、Seeeduino Mega互換

- 2.8インチサイズのQVGAディスプレイ

- 抵抗膜タッチスクリーン

## 仕様 ##

|項目| 最小| 標準| 最大| 単位|
|---|---|---|---|---|
|電圧| 4.5| 5| 5.5| VDC|
|電流 |/ |/ |250| mA|
|LCDパネルサイズ ||||2.8 インチ|
|視野角 |60~120 |||度|
|解像度 |320x240 |||/|
|LCDカラー |65k |||/|
|バックライトタイプ| LED||| /|
|LCDドライバIC |ST7781R||| /|
|インターフェースタイプ| パラレルポート (8ビットデータ + 4ビット制御) |||/|
|タッチスクリーン| 4線式抵抗膜タッチスクリーン||| /|
|アクティブエリア |43.2*57.3||| mm|
|ESD接触放電 |±4 |||KV|
|ESD空気放電 |±8||| KV|
|寸法 |72.5x54.7x18||| mm|
|重量 |24±2 |||g|

## 注意事項 ##

- モジュールを落下させるなどの機械的衝撃や衝突を与えないでください。

- ディスプレイ表面や隣接するエリアに過度の力を加えないでください。これにより色調が変化する可能性があります。

### Arduinoでのピン使用 ###

![](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/img/2.8_Inch_TFT_Touch_Shield_Block_Diagram.jpg) (width=undefined)

**D0** - 未使用。

**D1** - 未使用。

**D2** - LCDデータビット8。

**D3** - LCDデータビット9。

**D4** - LCDデータビット10。

**D5** - LCDデータビット11。

**D6** - LCDデータビット12。

**D7** - LCDデータビット13。

**D8** - LCDデータビット14。

**D9** - LCDデータビット15。

**D10** - LCD CSピン（アクティブロー）。

**D11** - LCD RSピン。

**D12** - LCD WRピン。

**D13** - LCD RDピン。

**D14(A0)** - タッチスクリーンY-。

**D15(A1)** - タッチスクリーンX-。

**D16(A2)** - タッチスクリーンY+。

**D17(A3)** - タッチスクリーンX+。

**D18(A4)** - 未使用。

**D19(A5)** - 未使用。

## 使用方法 ##

### ハードウェアのインストール ###

- 以下のようにTFTタッチシールドをSeeeduinoに挿入します。

![](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/img/TFT_Touch_Shield_with_Seeeduino.jpg)

## TFTプログラミング ##

**TFT**ライブラリは以下のアプリケーションプログラミングインターフェース（API）を提供します。このライブラリは、Arduino APIの代わりにPORTレジスタへの直接アクセスを使用します。これは、MCUとTFT間の通信速度を向上させるためです。現在、このライブラリはArduino、Arduino Mega（1280または2560）、およびSeeeduino ADKメインボード互換のボードをサポートしています。Megaでは、TFTの8ビットデータポートが異なるポートに属する異なるピンに分配されます。これにより、Arduinoと比較してグラフィック描画の速度が低下します。ポートピンの選択は、Arduino / Megaのポートピン配置に基づいています。

### 一般的な関数 ###

---

#### setXY(unsigned int poX, unsigned int poY) ####

カーソル位置を(poX, poY)に設定します。この関数は他のグラフィックAPIによって内部的に使用されます。

#### setPixel(unsigned int poX, unsigned int poY, unsigned int color) ####

(poX, poY)ピクセルを色colorに設定します。この関数は他のグラフィックAPIによって内部的に使用されます。

### 線 ###

#### drawLine(unsigned int x0, unsigned int y0, unsigned int x1, unsigned int y1, unsigned int color) ####

ピクセル(x0, y0)からピクセル(x1, y1)まで色colorで線を描画します。

#### drawVerticalLine(unsigned int poX, unsigned int poY, unsigned int length, unsigned int color) ####

ピクセル(poX, poY)から始まる長さlengthの水平線を色colorで描画します。

#### drawHorizontalLine(unsigned int poX, unsigned int poY, unsigned int length, unsigned int color) ####

ピクセル(poX, poY)から始まる長さlengthの垂直線を色colorで描画します。

### 長方形 ###

#### drawRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, unsigned int color) ####

(poX, poY)から始まる長さlength、幅width、色colorの長方形を描画します。

#### fillRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, unsigned int color) ####

ピクセル(poX, poY)から始まる長さlength、幅width、色colorの塗りつぶし長方形を描画します。

### 円 ###

#### drawCircle(int poX, int poY, int r, unsigned int color) ####

(poX, poY)に半径r、色colorの円を描画します。

#### fillCircle(int poX, int poY, int r, unsigned int color) ####

(poX, poY)に半径r、色colorの塗りつぶし円を描画します。

### テキスト ###

#### drawChar(unsigned char ascii, unsigned int poX, unsigned int poY, unsigned int size, unsigned int fgcolor) ####

(poX, poY)から始まる位置に、組み込みフォントのサイズsize、色fgcolorで文字を描画します。この関数はdrawString()関数によって使用されます。

#### drawString(char *string, unsigned int poX, unsigned int poY, unsigned int size, unsigned int fgcolor) ####

(poX, poY)から始まる位置に、組み込みフォントのサイズsize、色fgcolorでテキスト文字列を描画します。

### タッチスクリーンプログラミング ###

---

TFTタッチシールドは[Adafruit Touch Screen Library](https://github.com/adafruit/Touch-Screen-Library)を使用します。抵抗膜タッチスクリーンの原理を理解するには、[外部リンク](/ja/2.8inch_TFT_Touch_Shield_v2.0#resources)を参照してください。簡単に言えば、4線式抵抗膜タッチスクリーンは、X軸とY軸それぞれに電圧分圧器を提供します。各軸に適切な電圧を適用し、ADC値をスキャンすることでタッチ位置を検出できます。これらの値は常にノイズの影響を受けやすいため、デジタルフィルタが使用されます。

- TouchScreenライブラリを使用するには、まずTouchScreenオブジェクトを作成します。

`
TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300);
`

ここで、XP、YP、XM、YMはタッチスクリーンのXPlus、YPlus、XMinus、YMinusピンに接続されたADCポートピンです。300はXプレート間の抵抗値です。

- 生のADC値を読み取るには以下を使用します。

`
Point p = ts.getPoint();
`

- Raw ADC値はピクセル座標に変換する必要があります。この変換は`map`関数を使用して行われます。このマッピングはv0.9とv1.0で異なります。デモアプリケーションでは、このマッピングがすでに処理されています。

`
p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);
`

- 以下のスケッチはTouchScreenライブラリの使用例を示しています。このスケッチはタッチスクリーン座標のキャリブレーションにも使用できます。

- スケッチをコンパイルしてアップロードしてください。

- シリアルポートモニターを開き、画面に表示されるポイントをタッチしてください。

- 表示されるXおよびY値が正しいか確認してください。正しくない場合は、タッチスクリーン座標を再キャリブレーションする必要があります。

#### タッチスクリーンをキャリブレーションする方法 ####

- `TS_MINX, TS_MAXX, TS_MINY, TS_MAXY`のパラメータは、タッチスクリーンの端を決定するものであり、キャリブレーションパラメータを構成します。

- これらの変数に割り当てられる値は、タッチスクリーンの対角線の端をタッチしたときの測定されたADC値（つまりRaw X, Raw Y）です。

- タッチポイント(0,0)と(239,319)をタッチし、Raw XおよびRaw Y値を記録してください。より正確な値を得るために、何度も試して正しい値を見つけてください。

- **TS_MINX**はX = 0のときのADC値に対応します。

- **TS_MINY**はY = 0のときのADC値に対応します。

- **TS_MAXX**はX = 240 - 1、つまり239のときのADC値に対応します。

- **TS_MAXY**はY = 320 - 1、つまり319のときのADC値に対応します。

- スケッチ内のこれらのパラメータを変更し、再コンパイルしてArduinoにアップロードしてください。

- まだ正確な値が得られない場合は、上記の手順を繰り返してください。

#### タッチスクリーンデモスケッチ ####

```cpp
// ペイントアプリケーション - TFTとタッチスクリーンの両方をデモンストレーション
// このライブラリはフリーソフトウェアです。再配布および/または
// GNU Lesser General Public Licenseのバージョン2.1またはそれ以降のバージョンに基づいて
// 修正することができます。
//
// このライブラリは有用であることを願って配布されていますが、
// 商品性や特定の目的への適合性の保証はありません。
// 詳細についてはGNU Lesser General Public Licenseを参照してください。
//
// このライブラリとともにGNU Lesser General Public Licenseのコピーを受け取ったはずです。
// 受け取っていない場合は、以下に連絡してください。
// Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
#include <stdint.h>
#include <TouchScreen.h>
#include <TFT.h>

#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__) // mega
#define YP A2   // 必ずアナログピンである必要があります。"An"表記を使用してください！
#define XM A1   // 必ずアナログピンである必要があります。"An"表記を使用してください！
#define YM 54   // デジタルピンでも可能です。これはA0です。
#define XP 57   // デジタルピンでも可能です。これはA3です。

#elif defined(__AVR_ATmega32U4__) // leonardo
#define YP A2   // 必ずアナログピンである必要があります。"An"表記を使用してください！
#define XM A1   // 必ずアナログピンである必要があります。"An"表記を使用してください！
#define YM 18   // デジタルピンでも可能です。これはA0です。
#define XP 21   // デジタルピンでも可能です。これはA3です。

#else //168, 328, その他
#define YP A2   // 必ずアナログピンである必要があります。"An"表記を使用してください！
#define XM A1   // 必ずアナログピンである必要があります。"An"表記を使用してください！
#define YM 14   // デジタルピンでも可能です。これはA0です。
#define XP 17   // デジタルピンでも可能です。これはA3です。

#endif

// (0,0)および(210-1,320-1)の測定されたADC値
// TS_MINXはX = 0のときのADC値に対応します
// TS_MINYはY = 0のときのADC値に対応します
// TS_MAXXはX = 240 - 1のときのADC値に対応します
// TS_MAXYはY = 320 - 1のときのADC値に対応します

#define TS_MINX 140
#define TS_MAXX 900
#define TS_MINY 120
#define TS_MAXY 940

int color = WHITE;  // ペイントブラシの色

// より良い圧力精度のためには、X+とX-間の抵抗を知る必要があります。
// 任意のマルチメーターを使用して測定してください。
// 2.8インチTFTタッチシールドにはXプレートに300オームの抵抗があります。

TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300); // タッチスクリーンポートピンを初期化

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

    // Pointオブジェクトはx, y, z座標を保持します。
    Point p = ts.getPoint();

    // 読み取ったADC値をピクセル座標にマッピング

    p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
    p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);

    // 有効とみなされる最小圧力があります。
    // 圧力が0の場合は押されていないことを意味します！

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

### 表示されたデモコード ###

- 以下のようにSeeeduinoにTFTタッチシールドを挿入してください。

![](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/img/DemoShow.JPG)
TFTタッチシールドがSeeeduinoに接続されています

## バージョントラッカー ##

|リビジョン| 説明 |リリース日|
|---|---|---|
|v1.1| 画像とデモコードの組み合わせを変更 |2011年11月22日|
|v1.0 |ST7781RドライバチップベースのTFTの代わりにSPFD5408AベースのTFTを使用| 2011年9月12日|
|v0.9b |初回公開リリース| 2011年6月24日|

## サポート ##

[Seeedフォーラムで質問する](https://www.seeedstudio.com/forum).

## TFT Touch Shield v1.0 回路図オンラインビューアー

<div className="altium-ecad-viewer" data-project-src="https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## TFT Touch Shield v0.9b 回路図オンラインビューアー

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/ja/images/1/17/2.8_TFT_Touch_Shield_v0.9b_EagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[ライブラリ]** [TFT & TouchScreen Libraries](https://www.seeedstudio.com/wiki/images/2/29/Tft_touch_libraries_11252011.zip)
- **[ライブラリ]** [Arduino 1.0用TFT & TouchScreen Libraries 20120628](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/res/TFT_TouchScreen_for_Arduino_1.0.zip)
- **[デモ]** [TFT BMPデモ](https://www.seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip).
- **[Eagle]** [TFT Touch Shield v1.0 回路図とボードファイル - Eagle形式](https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip)
- **[Eagle]** [TFT Touch Shield v0.9b 回路図とボードファイル - Eagle形式](https://wiki.seeedstudio.com/ja/images/1/17/2.8_TFT_Touch_Shield_v0.9b_EagleFiles.zip)
- **[データシート]** [FGD280E3715V1 - TFTタッチスクリーンデータシート](https://wiki.seeedstudio.com/ja/images/7/75/FGD280E3715V1_8bit.pdf)
- **[データシート]** [ST7781Rデータシート](https://wiki.seeedstudio.com/ja/images/4/4e/ST7781R_datasheet.pdf)

## 購入方法 ##

こちらをクリックして購入: [2.8 TFT Touch Shield](https://www.seeedstudio.com/depot/28-tft-touch-shield-p-864.html?cPath=132_134)

## 関連リンク ##

- [Seeeduino ADK メインボード](https://seeeddoc.github.io/Seeeduino_ADK_Main_Board/)
- [Seeeduino Mega](https://seeeddoc.github.io/Seeeduino_Mega/)

## ライセンス ##

このドキュメントはCreative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/)の下でライセンスされています。ソースコードとライブラリはさまざまなオープンソースライセンスの下でライセンスされています。詳細はソースコードファイルを参照してください。

## 外部リンク ##

- [ATMEL - 4線および5線タッチスクリーンに関するアプリケーションノート](http://www.adafruit.com/datasheets/AVR341.pdf)
- [TI - 抵抗膜タッチスクリーンの使用](http://focus.ti.com/lit/an/slyt209a/slyt209a.pdf)
- [SDカードライブラリ](https://github.com/adafruit/SD) .

## 関連プロジェクト ##

残念ながら、[Recipe](https://www.seeedstudio.com/recipe/)にはTFT Touch Shield V1.0に関するデモがまだありません。

TFT Touch Shield V1.0に関する素晴らしいプロジェクトを投稿して、$100クーポンを獲得しましょう！お気軽にご連絡ください: **recipe@seeed.cc**

ここでは、[3DpadタッチレスジェスチャーコントローラーArduinoシールド](https://www.seeedstudio.com/depot/3Dpad-touchless-gesture-controller-Arduino-shield-p-2332.html)に関するいくつかのプロジェクトを紹介します。

![](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/img/Seeed-recipe-3Dpad_inchAir_controlinch_MIDI_controller.jpg)

このデモは、DpadタッチレスジェスチャーコントローラーArduinoシールドを使用して作成された3Dpad「エアコントロール」MIDIコントローラーです。

[作ってみたい](https://www.seeedstudio.com/recipe/229-3dpad-quot-air-control-quot-midi-controller.html).

### 素晴らしいプロジェクトを共有しましょう ###

作ることと共有することの精神を持って生まれた、それが私たちが信じる「メイカー」の本質です。

そして、この精神があるからこそ、オープンソースコミュニティは今日のように繁栄しています。

あなたが何者であろうと、何を作ったかは関係ありません。ハッカー、メイカー、アーティスト、エンジニアであっても。

他の人と自分の作品を共有し始めるだけで、あなたはオープンソースコミュニティの一員となり、貢献をしているのです。

今すぐ[Recipe](https://www.seeedstudio.com/recipe/)で素晴らしいプロジェクトを共有し、Seeedのコアユーザーになるチャンスを手に入れましょう。

- コアユーザーとは、Seeed製品に高い関心を持ち、Recipeで重要な貢献をした人々です。

- 私たちはコアユーザーと協力して新製品を開発します。つまり、コアユーザーはSeeedの新製品を公式発売前に体験する機会を得られます。その代わりに、製品性能やユーザー体験を向上させるための貴重なフィードバックを期待しています。さらに、コアユーザーが良いアイデアを持っている場合、ハードウェア部品、PCBAサービス、技術サポートを提供します。また、コアユーザーとのさらなる商業的協力も十分に可能です。

コアユーザーに関する詳細情報は、以下のメールアドレスにお問い合わせください:**recipe@seeed.cc**

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>