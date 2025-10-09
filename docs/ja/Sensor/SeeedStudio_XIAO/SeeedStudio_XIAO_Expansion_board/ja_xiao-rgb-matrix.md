---
description: XIAO用6x10 RGBマトリックスの使用開始
title: XIAO用6x10 RGBマトリックスの使用開始
keywords:
- XIAO RGB
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/rgb_matrix_for_xiao
last_update:
  date: 08/11/2023
  author: Citric
---

# XIAO用6x10 RGBマトリックスの使用開始

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/1.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html#" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

Seeed StudioのXIAO製品シリーズに眩しい新製品「XIAO用6x10 RGB-MATRIX」をご紹介します。6x10 RGB-MATRIXにより、プロジェクトを色彩のスペクトラムで照らす力を手に入れることができます。60個の精密に配置されたWS2812 LEDで構成されたこのマトリックスは、単なる美観だけでなく、創造的なビジョンを実現するためのツールです。インタラクティブなアート作品の制作、動的な通知システムの設計、または単に作品に色彩を加えたい場合でも、このマトリックスがあなたのキャンバスとなります。XIAOメインコントローラーとのシームレスな統合のために調整されており、VCC、GND、DINはんだパッドの追加により、多様なシナリオでの柔軟性がさらに強調されています。

## 概要

### 特徴

- 60個のWS2812 LED：6x10グリッドに配置されたこれらのLEDは、鮮やかなディスプレイの作成に最適です。
- コンパクトデザイン：各LEDはわずか1mm x 1mmで、多くのスペースを取ることなく高密度ディスプレイを提供します。
- 多用途接続：XIAOメインコントローラー用に設計されていますが、より広範囲な用途のためにVCC、GND、DINはんだパッドも含まれています。
- RGB機能：各LEDは幅広い色を表示でき、動的でカラフルなディスプレイを作成する自由を提供します。

### 仕様

- LED タイプ：WS2812
- LED 数：60個
- 配置：6行 x 10列
- LED サイズ：1mm x 1mm
- XIAO用接続ポート：D0
- 追加パッド：VCC、GND、DIN、DOUT

### 用途

- インタラクティブディスプレイ：プロジェクトで動的な視覚フィードバックのためにLEDマトリックスを使用します。
- 通知：デバイス用のカラフルな通知やアラートを作成します。
- アートインスタレーション：モダンなタッチのためにアート作品にLEDマトリックスを組み込みます。
- ウェアラブル技術：未来的な外観のために衣服やアクセサリーに統合します。
- ゲーミング：鮮やかな視覚効果でゲーム体験を向上させます。
- 一般照明：様々な環境でアンビエント照明やムード設定に使用します。

## 使用開始

XIAO用6x10 RGB-MATRIXのクイックスタートガイドへようこそ。このガイドは、XIAO RP2040メインコントローラーと組み合わせて新しいLEDマトリックス拡張ボードをセットアップし、使用開始するのに役立ちます。

### ハードウェア準備

製品を受け取った際、いくつかのはんだ付けが必要になります。パッケージには2つのピンヘッダーが付属しています。これらのヘッダーを拡張ボードにはんだ付けする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/2.png" style={{width:700, height:'auto'}}/></div>

はんだ付けが完了したら、拡張ボードをXIAO RP2040メインコントローラーに接続することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/3.jpg" style={{width:700, height:'auto'}}/></div>

:::caution
接続時は特に注意してください。XIAOに電源が入っている状態で接続せず、電源ピンを間違って接続しないでください。そうしないと、ボードが焼損する可能性があります。
:::

### ソフトウェア準備

このチュートリアルではXIAO RP2040をマスターとして使用します。XIAO RP2040を初めて使用する場合は、その使用開始Wikiをお読みください。

- [Seeed Studio XIAO RP2040 with Arduino](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/)

一方、このチュートリアルで提供されるすべてのサンプルプログラムは他のXIAOでも動作し、使用しているXIAOに応じてArduino開発環境を事前に設定することもできます。

## Arduino ライブラリ概要

:::tip

Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

### 機能

スケッチの開発を始める前に、ライブラリで利用可能な機能を見てみましょう。

- `Adafruit_NeoPixel(uint16_t n, int16_t pin = 6, neoPixelType type = NEO_GRB + NEO_KHZ800);` —— 長さ、ピン、ピクセルタイプがコンパイル時に既知の場合のNeoPixelコンストラクタ。

  **入力パラメータ**:

  - `n`: ストランド内のNeoPixelの数。
  - `p`: NeoPixelデータを駆動するArduinoピン番号。
  - `t`: ピクセルタイプ -- Adafruit_NeoPixel.hで定義されたNEO_*定数を組み合わせます。例えば、ピクセルごとに緑、赤、青の順序で色バイトが表現される800 KHz（400 KHzに対して）データストリームを期待するNeoPixelの場合は`NEO_GRB+NEO_KHZ800`。

  **戻り値**: Adafruit_NeoPixelオブジェクト。使用前に`begin()`関数を呼び出してください。

- `void begin(void)` —— NeoPixelピンを出力用に設定します。

- `void show(void)` —— RAM内のピクセルデータをNeoPixelに送信します。

- `void setPin(int16_t p)` —— NeoPixel出力ピン番号を設定/変更します。以前のピンがある場合はINPUTに設定され、新しいピンはOUTPUTに設定されます。

  **入力パラメータ**:

  - `p`: Arduinoピン番号（-1 = ピンなし）。

- `void setPixelColor(uint16_t n, uint8_t r, uint8_t g, uint8_t b, uint8_t w)` —— 個別の赤、緑、青、白コンポーネントを使用してピクセルの色を設定します（RGBWのNeoPixelのみ）。

  **入力パラメータ**:

  - `n`: ピクセルインデックス、0から開始。
  - `r`: 赤の明度、0 = 最小（オフ）、255 = 最大。
  - `g`: 緑の明度、0 = 最小（オフ）、255 = 最大。
  - `b`: 青の明度、0 = 最小（オフ）、255 = 最大。
  - `w`（オプション）: 白の明度、0 = 最小（オフ）、255 = 最大、RGBピクセルを使用している場合は無視されます。

- `void setPixelColor(uint16_t n, uint32_t c)` —— 32ビット「パック」RGBまたはRGBW値を使用してピクセルの色を設定します。

  **入力パラメータ**:

  - `n`: ピクセルインデックス、0から開始。
  - `c`: 32ビット色値。最上位バイトは白（RGBWピクセルの場合）または無視（RGBピクセルの場合）、次は赤、次に緑、最下位バイトは青。

- `void fill(uint32_t c = 0, uint16_t first = 0, uint16_t count = 0)` —— NeoPixelストリップの全部または一部を色で塗りつぶします。

  **入力パラメータ**:

  - `c`: 32ビット色値。最上位バイトは白（RGBWピクセルの場合）または無視（RGBピクセルの場合）、次は赤、次に緑、最下位バイトは青。すべての引数が未指定の場合、これは0（オフ）になります。
  - `first`: 塗りつぶしを開始する最初のピクセルのインデックス、0から開始。境界内である必要があり、クリッピングは実行されません。未指定の場合は0。
  - `count`: 塗りつぶすピクセル数、正の値として。0を渡すか未指定のままにすると、ストリップの終端まで塗りつぶします。

- `void setBrightness(uint8_t b)` —— 出力の明度を調整します。現在LEDに表示されているものには即座に影響しません。次の`show()`の呼び出しで、このレベルでLEDが更新されます。

  **入力パラメータ**:

  - `b`: 明度設定、0=最小（オフ）、255=最大。

- `void clear(void)` —— NeoPixelストリップ全体を0/黒/オフで塗りつぶします。

- `void updateLength(uint16_t n)` —— 以前に宣言されたAdafruit_NeoPixelストリップオブジェクトの長さを変更します。古いデータは解放され、新しいデータはクリアされます。ピン番号とピクセル形式は変更されません。

  **入力パラメータ**:

  - `n`: ストリップの新しい長さ、ピクセル単位。

- `void updateType(neoPixelType t)` —— 以前に宣言されたAdafruit_NeoPixelストリップオブジェクトのピクセル形式を変更します。形式がRGBバリアントの1つからRGBWバリアント（またはRGBWからRGB）に変更される場合、古いデータは解放され、新しいデータはクリアされます。それ以外の場合、古いデータはRAMに残り、新しい形式に再配置されないため、`clear()`でフォローアップすることをお勧めします。

  **入力パラメータ**:

  - `t`: ピクセルタイプ -- Adafruit_NeoPixel.hで定義されたNEO_*定数を組み合わせます。例えば、ピクセルごとに緑、赤、青の順序で色バイトが表現される800 KHz（400 KHzに対して）データストリームを期待するNeoPixelの場合は`NEO_GRB+NEO_KHZ800`。

- `static uint32_t Color(uint8_t r, uint8_t g, uint8_t b)` —— 個別の赤、緑、青の値を単一の「パック」32ビットRGB色に変換します。

  **入力パラメータ**:

  - `r`: 赤の明度、0から255。
  - `g`: 緑の明度、0から255。
  - `b`: 青の明度、0から255。

  **戻り値**: 32ビットパックRGB値。後で使用するために変数に割り当てるか、`setPixelColor()`関数に渡すことができます。パックRGB形式は、LEDストランドの色順序に関係なく予測可能です。

### インストール

- **方法1**

このチュートリアルでは**[Adafruit NeoPixel Library](https://github.com/adafruit/Adafruit_NeoPixel)**を使用します。Arduinoのライブラリマネージャーで検索し、ダウンロードしてインストールできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/4.png" style={{width:1000, height:'auto'}}/></div>

- **方法2**

下のボタンからライブラリをダウンロードします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/adafruit/Adafruit_NeoPixel" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

zipライブラリをダウンロードしたので、Arduino IDEを開き、**Sketch > Include Library > Add .ZIP Library**をクリックしてください。ダウンロードしたzipファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**Library added to your libraries**と表示されます。これはライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## デモ：流れるライト

以下のサンプルプログラムは流れるライトの効果を実現するために使用され、LEDビーズが順番に一つずつ点灯します。このプログラムはすべてのXIAOと互換性があります。

```cpp
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
 #include <avr/power.h> // Required for 16 MHz Adafruit Trinket
#endif

// Which pin on the Arduino is connected to the NeoPixels?
#define PIN        A0 // On Trinket or Gemma, suggest changing this to 1

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS 60 // Popular NeoPixel ring size

// When setting up the NeoPixel library, we tell it how many pixels,
// and which pin to use to send signals. Note that for older NeoPixel
// strips you might need to change the third parameter -- see the
// strandtest example for more information on possible values.
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

#define DELAYVAL 500 // Time (in milliseconds) to pause between pixels

void setup() {
  // These lines are specifically to support the Adafruit Trinket 5V 16 MHz.
  // Any other board, you can remove this part (but no harm leaving it):
#if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
#endif
  // END of Trinket-specific code.

  pixels.begin(); // INITIALIZE NeoPixel strip object (REQUIRED)
}

void loop() {
  pixels.clear(); // Set all pixel colors to 'off'

  // The first NeoPixel in a strand is #0, second is 1, all the way up
  // to the count of pixels minus one.
  for(int i=0; i<NUMPIXELS; i++) { // For each pixel...

    // pixels.Color() takes RGB values, from 0,0,0 up to 255,255,255
    // Here we're using a moderately bright green color:
    pixels.setPixelColor(i, pixels.Color(0, 10, 0));

    pixels.show();   // Send the updated pixel colors to the hardware.

    delay(DELAYVAL); // Pause before next pass through loop
  }
}
```

プログラムをアップロードし、すべてがうまくいけば、ライトビーズが一つずつ点灯するのを見ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/5.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
このプログラムは特別にランプビーズの明度を下げています。明度を最大まで上げた場合、ランプビーズを長時間直視すると目に損傷を与える可能性があります。
:::

## 複数ライトボードの接続

XIAO用RGB MATRIXは、電源供給が保証された複数の接続拡張をサポートしています。下図の指示に従って、複数のライトボードを順次接続することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/6.jpg" style={{width:800, height:'auto'}}/></div>

:::caution
複数のライトパネルを接続すると、発熱し電力不足になる可能性があります。この時、ライトボードが異常表示する場合があります。この場合は、各ライトボードが安定した5V入力を得られるよう、ライトボードに追加の電源を供給してください。
:::

## リソース

- **[ZIP]** [PCB&SCH Eagleファイル](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/EAGLE_XIAO_MATRIX.zip)
- **[PDF]** [データシート - WS2812B](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/WS2812B-1010-DATASHEET.pdf)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
