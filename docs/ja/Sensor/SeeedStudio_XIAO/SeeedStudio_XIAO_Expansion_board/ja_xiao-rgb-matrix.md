---
description: XIAO 用 6x10 RGB MATRIX の使い方
title: XIAO 用 6x10 RGB MATRIX の使い方
keywords:
- XIAO RGB
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/rgb_matrix_for_xiao
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO 用 6x10 RGB MATRIX の使い方

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/1.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html#" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

「6x10 RGB-MATRIX for XIAO」は、Seeed Studio の XIAO 製品シリーズに新たに加わった魅力的なアイテムです。この 6x10 RGB-MATRIX を使用すれば、プロジェクトを色鮮やかに照らすことができます。60 個の精密に配置された WS2812 LED で構成されており、このマトリックスは単なる美観を超え、創造的なビジョンを実現するツールです。インタラクティブなアート作品を作成したり、動的な通知システムを設計したり、単に作品に色彩を加えたい場合でも、このマトリックスはあなたのキャンバスとなります。XIAO メインコントローラーとのシームレスな統合を目的として設計されており、VCC、GND、DIN のはんだ付けパッドが含まれているため、多様なシナリオでの柔軟性がさらに強調されています。

## 概要

### 特徴

- **60 個の WS2812 LED**: 6x10 グリッドに配置されており、鮮やかなディスプレイを作成するのに最適です。
- **コンパクトなデザイン**: 各 LED はわずか 1mm x 1mm で、高密度のディスプレイを提供しながらスペースをほとんど取りません。
- **多用途な接続**: XIAO メインコントローラー用に設計されていますが、VCC、GND、DIN のはんだ付けパッドも含まれており、幅広い用途に対応します。
- **RGB 機能**: 各 LED は幅広い色を表示できるため、動的でカラフルなディスプレイを作成する自由があります。

### 仕様

- **LED タイプ**: WS2812
- **LED 数**: 60
- **配置**: 6 行 x 10 列
- **LED サイズ**: 1mm x 1mm
- **XIAO 用接続ポート**: D0
- **追加パッド**: VCC、GND、DIN、DOUT

### 応用例

- **インタラクティブディスプレイ**: プロジェクトで動的な視覚フィードバックを提供するために LED マトリックスを使用。
- **通知**: デバイスのカラフルな通知やアラートを作成。
- **アートインスタレーション**: LED マトリックスをアート作品に組み込んでモダンなタッチを追加。
- **ウェアラブル技術**: 衣類やアクセサリーに統合して未来的な外観を実現。
- **ゲーム**: 鮮やかな視覚効果でゲーム体験を向上。
- **一般照明**: 様々な環境での間接照明やムード設定に使用。

## 始め方

XIAO 用 6x10 RGB-MATRIX のクイックスタートガイドへようこそ。このガイドでは、新しい LED マトリックス拡張ボードを XIAO RP2040 メインコントローラーと組み合わせてセットアップする方法を説明します。

### ハードウェア準備

製品を受け取ったら、いくつかのはんだ付けが必要になります。パッケージには 2 つのピンヘッダーが付属しています。これらのヘッダーを拡張ボードに取り付ける必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/2.png" style={{width:700, height:'auto'}}/></div>

はんだ付けが完了したら、拡張ボードを XIAO RP2040 メインコントローラーに接続する準備が整います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/3.jpg" style={{width:700, height:'auto'}}/></div>

:::caution
接続時には特に注意してください。XIAO が通電している状態で接続しないでください。また、電源ピンを間違えて接続しないようにしてください。そうしないと、ボードが焼損する可能性があります。
:::

### ソフトウェア準備

このチュートリアルでは XIAO RP2040 をマスターとして使用します。初めて XIAO RP2040 を使用する場合は、その「Getting Started Wiki」を参照してください。

- [Seeed Studio XIAO RP2040 with Arduino](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/)

なお、このチュートリアルで提供されるすべてのサンプルプログラムは他の XIAO でも動作します。また、使用している XIAO に応じて Arduino 開発環境を事前に設定することもできます。

## Arduino ライブラリ概要

:::tip

Arduino を初めて使用する場合は、[Arduino の始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

### 機能

スケッチを開発する前に、ライブラリの利用可能な機能を確認しましょう。

- `Adafruit_NeoPixel(uint16_t n, int16_t pin = 6, neoPixelType type = NEO_GRB + NEO_KHZ800);` —— 長さ、ピン、ピクセルタイプがコンパイル時に既知の場合の NeoPixel コンストラクタ。

  **入力パラメータ**:

  - `n`: NeoPixel の数。
  - `p`: NeoPixel データを駆動する Arduino ピン番号。
  - `t`: ピクセルタイプ -- Adafruit_NeoPixel.h に定義された NEO_* 定数を組み合わせます。例えば、`NEO_GRB+NEO_KHZ800` は、800 KHz（400 KHz ではなく）のデータストリームを期待し、各ピクセルの色バイトが緑、赤、青の順で表される NeoPixel を意味します。

  **戻り値**: Adafruit_NeoPixel オブジェクト。使用する前に `begin()` 関数を呼び出してください。

- `void begin(void)` —— NeoPixel ピンを出力用に設定します。

- `void show(void)` —— RAM 内のピクセルデータを NeoPixel に送信します。

- `void setPin(int16_t p)` —— NeoPixel 出力ピン番号を設定/変更します。以前のピンがある場合は INPUT に設定され、新しいピンが OUTPUT に設定されます。

  **入力パラメータ**:

  - `p`: Arduino ピン番号 (-1 = ピンなし)。

- `void setPixelColor(uint16_t n, uint8_t r, uint8_t g, uint8_t b, uint8_t w)` —— 赤、緑、青、白の個別のコンポーネントを使用してピクセルの色を設定します（RGBW NeoPixel のみ）。

  **入力パラメータ**:

  - `n`: ピクセルインデックス（0 から開始）。
  - `r`: 赤の明るさ、0 = 最小（オフ）、255 = 最大。
  - `g`: 緑の明るさ、0 = 最小（オフ）、255 = 最大。
  - `b`: 青の明るさ、0 = 最小（オフ）、255 = 最大。
  - `w` (オプション): 白の明るさ、0 = 最小（オフ）、255 = 最大。RGB ピクセルを使用している場合は無視されます。

- `void setPixelColor(uint16_t n, uint32_t c)` —— 32 ビットの「パックされた」RGB または RGBW 値を使用してピクセルの色を設定します。

  **入力パラメータ**:

  - `n`: ピクセルインデックス（0 から開始）。
  - `c`: 32 ビットの色値。最上位バイトは白（RGBW ピクセルの場合）または無視されます（RGB ピクセルの場合）。次は赤、その次は緑、最下位バイトは青です。

- `void fill(uint32_t c = 0, uint16_t first = 0, uint16_t count = 0)` —— NeoPixel ストリップ全体または一部を色で埋めます。

  **入力パラメータ**:

  - `c`: 32 ビットの色値。最上位バイトは白（RGBW ピクセルの場合）または無視されます（RGB ピクセルの場合）。次は赤、その次は緑、最下位バイトは青です。すべての引数が指定されていない場合、これは 0（オフ）になります。
  - `first`: 埋める最初のピクセルのインデックス（0 から開始）。範囲内である必要があり、クリッピングは行われません。指定されていない場合は 0。
  - `count`: 埋めるピクセルの数（正の値）。0 を渡すか指定しない場合はストリップの終わりまで埋めます。

- `void setBrightness(uint8_t b)` —— 出力の明るさを調整します。現在 LED に表示されている内容にはすぐには影響しません。次回 `show()` を呼び出すと、このレベルで LED が更新されます。

  **入力パラメータ**:

  - `b`: 明るさ設定、0=最小（オフ）、255=最大。

- `void clear(void)` —— NeoPixel ストリップ全体を 0 / 黒 / オフで埋めます。

- `void updateLength(uint16_t n)` —— 以前に宣言された Adafruit_NeoPixel ストリップオブジェクトの長さを変更します。古いデータは解放され、新しいデータはクリアされます。ピン番号とピクセルフォーマットは変更されません。

  **入力パラメータ**:

  - `n`: ストリップの新しい長さ（ピクセル単位）。

- `void updateType(neoPixelType t)` —— 以前に宣言された Adafruit_NeoPixel ストリップオブジェクトのピクセルフォーマットを変更します。フォーマットが RGB バリアントのいずれかから RGBW バリアント（または RGBW から RGB）に変更される場合、古いデータは解放され、新しいデータはクリアされます。それ以外の場合、古いデータは RAM に残り、新しいフォーマットに再配置されないため、`clear()` を続けて呼び出すことをお勧めします。

  **入力パラメータ**:

  - `t`: ピクセルタイプ -- Adafruit_NeoPixel.h に定義された NEO_* 定数を組み合わせます。例えば、`NEO_GRB+NEO_KHZ800` は、800 KHz（400 KHz ではなく）のデータストリームを期待し、各ピクセルの色バイトが緑、赤、青の順で表される NeoPixel を意味します。

- `static uint32_t Color(uint8_t r, uint8_t g, uint8_t b)` —— 赤、緑、青の個別の値を単一の「パックされた」32 ビット RGB 色に変換します。

  **入力パラメータ**:

  - `r`: 赤の明るさ、0 から 255。
  - `g`: 緑の明るさ、0 から 255。
  - `b`: 青の明るさ、0 から 255。

  **戻り値**: 32 ビットのパックされた RGB 値。この値は後で使用するために変数に割り当てるか、`setPixelColor()` 関数に渡すことができます。パックされた RGB フォーマットは、LED ストランドの色順に関係なく予測可能です。

### インストール

- **方法 1**

このチュートリアルでは **[Adafruit NeoPixel ライブラリ](https://github.com/adafruit/Adafruit_NeoPixel)** を使用します。Arduino のライブラリマネージャーで検索し、ダウンロードしてインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/4.png" style={{width:1000, height:'auto'}}/></div>

- **方法 2**

以下のボタンからライブラリをダウンロードしてください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/adafruit/Adafruit_NeoPixel" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Arduino IDE を開き、**スケッチ > ライブラリをインクルード > .ZIP形式のライブラリを追加** をクリックします。ダウンロードした ZIP ファイルを選択してください。ライブラリが正しくインストールされると、通知ウィンドウに **ライブラリがライブラリに追加されました** と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## デモ: 流れる光

以下のサンプルプログラムは、ランニングライトの効果を実現するためのものです。ランプビーズが一つずつ順番に点灯します。このプログラムはすべての XIAO に対応しています。

```cpp
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
 #include <avr/power.h> // 16 MHz Adafruit Trinket 用に必要
#endif

// NeoPixel が接続されている Arduino のピン
#define PIN        A0 // Trinket または Gemma の場合、1 に変更を推奨

// Arduino に接続されている NeoPixel の数
#define NUMPIXELS 60 // 一般的な NeoPixel リングのサイズ

// NeoPixel ライブラリを設定する際、ピクセル数と信号を送るピンを指定します。
// 古い NeoPixel ストリップの場合、3 番目のパラメータを変更する必要があるかもしれません。
// 詳細は strandtest の例を参照してください。
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

#define DELAYVAL 500 // ピクセル間の一時停止時間 (ミリ秒)

void setup() {
  // 以下のコードは Adafruit Trinket 5V 16 MHz をサポートするためのものです。
  // 他のボードでは、この部分を削除しても問題ありません (削除しなくても害はありません)。
#if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
#endif
  // Trinket 固有のコード終了。

  pixels.begin(); // NeoPixel ストリップオブジェクトを初期化 (必須)
}

void loop() {
  pixels.clear(); // すべてのピクセルの色を「オフ」に設定

  // ストランド内の最初の NeoPixel は #0、2 番目は 1、最後はピクセル数 - 1 です。
  for(int i=0; i<NUMPIXELS; i++) { // 各ピクセルについて...

    // pixels.Color() は RGB 値を受け取ります (0,0,0 から 255,255,255 まで)。
    // ここでは中程度の明るさの緑色を使用しています:
    pixels.setPixelColor(i, pixels.Color(0, 10, 0));

    pixels.show();   // 更新されたピクセルの色をハードウェアに送信。

    delay(DELAYVAL); // 次のループまで一時停止
  }
}
```

プログラムをアップロードし、すべてが正常に動作すれば、ランプビーズが一つずつ順番に点灯するのが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/5.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
このプログラムでは特にランプビーズの明るさを抑えています。明るさを最大にすると、ランプビーズを長時間直視することで目にダメージを与える可能性があります。
:::

## 複数のライトボードの接続

RGB MATRIX for XIAO は、電源供給が保証されている場合、複数のスプライス拡張をサポートします。以下の図に示すように、複数のライトボードを順番に接続することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/6.jpg" style={{width:800, height:'auto'}}/></div>

:::caution
複数のライトパネルを接続すると、熱くなったり電力不足になる可能性があります。この場合、ライトボードが異常に表示されることがあります。その際は、ライトボードに追加の電力を供給し、各ライトボードが安定した 5V 入力を確保できるようにしてください。
:::

## リソース

- **[ZIP]** [PCB&SCH Eagle ファイル](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/EAGLE_XIAO_MATRIX.zip)
- **[PDF]** [データシート - WS2812B](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/WS2812B-1010-DATASHEET.pdf)

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