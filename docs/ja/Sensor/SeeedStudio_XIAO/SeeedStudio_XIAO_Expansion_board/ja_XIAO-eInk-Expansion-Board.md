---
description: ePaper ブレイクアウトボードの使い方
title: ePaper ブレイクアウトボード
keywords:
- XIAO eInk 拡張
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/XIAO-eInk-Expansion-Board
last_update:
  date: 05/15/2025
  author: Carla
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# ePaper ブレイクアウトボードの使い方

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

XIAO eInk 拡張ボードは、XIAO ファミリーを使用して eInk ディスプレイを簡単に駆動するための最適なソリューションです。このボードは 24 ピン FPC コネクタを備えており、eInk 製品シリーズとのシームレスな接続を提供します。また、8 ピン 2.54 ヘッダーを使用することで、任意のマイクロコントローラーを簡単に統合できます。このボードは eInk の「永遠の親友」として機能し、その能力を向上させ、使いやすさを提供します。

:::note
このブレイクアウトボードには eInk ディスプレイは含まれていません。ディスプレイは別途購入する必要があります。
:::

## 概要

### 特徴

- **24 ピン FPC コネクタ**: eInk ディスプレイへの堅牢で信頼性の高い接続を提供します。
- **XIAO ソケット**: プロセッサとして XIAO を使用でき、コンパクトで強力な制御ソリューションを提供します。
- **8 ピン 2.54 ヘッダー**: 任意のマイクロコントローラーに接続できる柔軟性を提供し、可能性を広げます。
- **プラグアンドプレイ**: 初心者から専門家まで、使いやすさを追求した設計。
- **多用途なアプリケーション**: 小型から大型まで、さまざまなサイズの eInk ディスプレイに対応。

### アプリケーション

- **デジタルサイネージ**: eInk ブレイクアウトボードを使用して、動的で省エネルギーなデジタルサインを作成。
- **電子書籍リーダー**: ニーズに合わせたカスタマイズ可能な電子書籍リーダーを構築。
- **スマートホーム制御パネル**: スマートホームシステムに統合し、洗練されたモダンな制御パネルを実現。
- **小売価格タグ**: 効率的で環境に優しい電子価格タグを作成。
- **教育ツール**: 簡単に更新可能で省エネルギーなインタラクティブ教育素材を開発。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/xiao-expansion.png" style={{width:700, height:'auto'}}/></div>

1. **24 ピン FPC コネクタ**: 2.13 インチ ePaper 用。
2. **XIAO ソケット**: Seeed Studio XIAO 開発ボードを接続。
3. **IO ブレイクアウト**: Arduino UNO や Raspberry Pi など、他のコントローラーを接続。

### ピンアウト定義

<div class="table-center">

|  eInk SPI ピン |  XIAO  | 
|       ---      |  ---   |
|      RST       |   D0   |
|      CS        |   D1   |
|      DC        |   D3   |
|      BUSY      |   D5   |
|      SCK       |   D8   |
|      MOSI      |   D10  |

</div>

### 対応する eInk

1. [1.54 インチ E-paper - ドットマトリックス 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
2. [2.13 インチ E-Paper - フレキシブルモノクロ 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
3. [2.13 インチ E-Paper - クアッドカラー 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
4. [2.9 インチ E-paper - モノクロ 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
5. [2.9 インチ e-paper - クアッドカラー 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
6. [4.2 インチ E-Paper - モノクロ 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
7. [4.26 インチ E-Paper - モノクロ 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
8. [5.65 インチ E-paper - セブンカラー 600x480](https://www.seeedstudio.com/5-65-Seven-Color-ePaper-Display-with-600x480-Pixels-p-5786.html)
9. [5.83 インチ E-paper - モノクロ 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
10. [7.5 インチ E-paper - モノクロ 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
11. [7.5 インチ E-paper - トリカラー 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

### ハードウェア準備

**ステップ 1.** 材料の準備

<table align="center">
	<tr>
		<th>Seeed Studio XIAO SAMD21</th>
		<th>Seeed Studio XIAO RP2040</th>
		<th>Seeed Studio XIAO nRF52840 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C3</th>
	    <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
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
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

**STEP 2.** XIAO を XIAO ソケットに挿入する: ピンを揃え、XIAO を基板上の XIAO ソケットに慎重に挿入してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_xiao.gif" style={{width:700, height:'auto'}}/></div>

**STEP 3.** eInk を FPC コネクタに挿入する: E-paper を ePaper ブレークアウトボードの 24 ピン FPC コネクタに慎重にスライドさせて挿入してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_eink.gif" style={{width:700, height:'auto'}}/></div>



### ソフトウェア準備
推奨されるプログラミングツールは Arduino IDE であり、XIAO 用に Arduino 環境を設定し、オンボードパッケージを追加する必要があります。
:::tip
Arduino を初めて使用する場合は、[Arduino の始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

**Step 1.** Arduino アプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
</div>

**Step 2.** 開発ボードモデルを選択し、Arduino IDE に追加します。

- **Seeed Studio XIAO SAMD21** を使用する場合は、後の手順のために **[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)** を参照して追加を完了してください。

- **Seeed Studio XIAO RP2040** を使用する場合は、後の手順のために **[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)** を参照して追加を完了してください。

- **Seeed Studio XIAO nRF52840** を使用する場合は、後の手順のために **[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)** を参照して追加を完了してください。

- **Seeed Studio XIAO ESP32C3** を使用する場合は、後の手順のために **[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)** を参照して追加を完了してください。

- **Seeed Studio XIAO ESP32S3** を使用する場合は、後の手順のために **[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)** を参照して追加を完了してください。


## Seeed_Arduino_LCD ライブラリの使用

**Step 3.** Seeed Arduino LCD ライブラリをインストールする

:::tip
このライブラリは TFT ライブラリと同じ機能を持ちますが、互換性はありません。TFT ライブラリをインストールしている場合は、まずアンインストールしてください。
:::

GitHub から Seeed Arduino LCD ライブラリをダウンロードしてインストールします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

ライブラリをダウンロードした後、**Sketch** -> **Include Library** -> **Add .ZIP Library** に移動し、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

基本的な例が4つあります。好きな基本例を開いてください:
1. Bitmap: ビットマップ画像を表示します。
2. Clock: 時計を表示します。
3. Clock_digital: デジタル時計を表示します。
4. HelloWorld: e-inkスクリーン上に異なるサイズの基本的なパターンとテキストを表示します。
5. Shape: ランダムに異なるサイズの文字と形状を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/150.png" style={{width:800, height:'auto'}}/></div>

**Step 4.** コードをアップロードする

コードをアップロードする前に、Seeed_Arduino_LCD ライブラリ内の **User_Setup_Select.h** を開く必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/53.png" style={{width:800, height:'auto'}}/></div>

この例では 2.9インチの e-ink スクリーンを使用するため、このファイル内の160行目 `#include <User_Setups/Setup666_XIAO_ILI9341.h>` をコメントアウトし、165行目 `#include <User_Setups/Setup504_Seeed_XIAO_EPaper_2inch9.h>` をアンコメントする必要があります。他の e-ink スクリーンを使用している場合は、この方法に従って変更を行ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/151.png" style={{width:1000, height:'auto'}}/></div>

その後、**Tools** -> **Board** -> **XIAO ESP32C6** と **Tools** -> **Port** -> **接続されているボードのポートを選択** に移動します。そして **Upload** をクリックしてコードをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/152.png" style={{width:1000, height:'auto'}}/></div>

これで ePaper スクリーンにフィードバックが表示されます！以下は Helloworld の例の結果です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/153.jpg" style={{width:600, height:'auto'}}/></div>


:::caution
1.54インチまたは2.9インチの e-ink スクリーンを使用している場合、そのドライバーチップの影響で、時計などの動的効果を使用するときにちらつきが発生することがあります。これはプログラムの問題ではないためご安心ください。ただし、スクリーンの寿命を縮める可能性があるため、動的効果の例を長時間実行することは推奨されません。

5.83インチおよび7.5インチのスクリーンを使用している場合、これらは異なるチップを使用しているため、ちらつき現象は発生しません。
:::

## 画像抽出ソフトウェア

### 推奨ウェブサイトの使用方法

ここでは、7.5インチの電子ペーパー画面を使用してテストを行います。

#### 画像の作成方法

この[URL](https://jlamch.net/MXChipWelcome/)は非常に便利な画像抽出操作を提供しており、電子ペーパー画面上でさまざまな画像を簡単に表示することができます。それでは始めましょう！
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9191.jpg" style={{width:700, height:'auto'}}/></div>

**ステップ1**.画像を選択

まず表示したい画像を選びます。サイズは800×480を超えないようにしてください。

**ステップ2**.画像設定

- キャンバスサイズ
    - キャンバスサイズ: キャンバスの寸法を設定します。例えば、800×480ピクセルはキャンバスの幅が800ピクセル、高さが480ピクセルであることを意味します。

- 背景色
    - 背景色: キャンバスの背景色を選択します。選択肢は以下の通りです：

    - 白: 白い背景
    - 黒: 黒い背景

- 透明: 透明な背景
    - 画像の色を反転
    - 画像の色を反転: このオプションを選択すると、画像の色が反転されます。

- 明るさ / アルファ閾値
    - 明るさ / アルファ閾値: ピクセルの明るさ値を設定します。範囲は0から255までです。値が高いほどピクセルが明るくなり、この値以下のピクセルは黒になります。

- スケーリング
    - スケーリング: 画像のスケーリング方法を選択します。選択肢は以下の通りです：

    - 元のサイズ: 元のサイズを維持
    - その他のスケーリングオプション（具体的なオプションはさらに説明が必要かもしれません）
- 中央揃え
    - 中央揃え: 画像をキャンバスの中央に配置するかどうかを選択します。注意: このオプションは画像が元のサイズより大きい場合にのみ機能します。

**ステップ3**.プレビュー

設定が完了すると、画像がどのように表示されるかをプレビューできます。

**ステップ4**.出力

- 変換されたコードをコピー
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9090.jpg" style={{width:700, height:'auto'}}/></div>
- このヘッダーファイル内の画像コードを置き換えます
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/image_h.jpg" style={{width:700, height:'auto'}}/></div>



#### 表示効果
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaper_display.jpg" style={{width:700, height:'auto'}}/></div>


### Image2lcdソフトウェアの使用方法

#### 画像の作成方法

Windowsに内蔵されているソフトウェア**ペイント**を使用して、使用しているスクリーンと**同じ解像度**の画像を作成し、`BMP`または`JPG`ファイルとして保存します。


:::note
画像の解像度は使用しているスクリーンと同じでなければなりません。例えば、4.2インチの電子ペーパーは400×300ピクセルです。この場合、300×400のサイズを使用することはできません。そうすると、Image2lcdが出力する`.h`ファイルに余分な200バイトが含まれてしまいます。
:::

画像の色はWindowsに付属している標準的な描画ボードの色と一致している必要があります。描画ボードの色は以下の通りです：

<div class="table-center">

|      電子ペーパー      | 色 |
|       ---      |  ---   |
|1.54インチ電子ペーパー - ドットマトリックス 200x200           | 純粋な黒と白          |
|2.13インチ電子ペーパー - フレキシブルモノクローム 212x104 | 純粋な黒と白          |
|2.13インチ電子ペーパー - クアッドカラー 212x104          | 黒、白、赤、黄色 |
|2.9インチ電子ペーパー - モノクローム 128x296           | 純粋な黒と白          |
|2.9インチ電子ペーパー - クアッドカラー 128x296     | 黒、白、赤、黄色 |
|4.2インチ電子ペーパー - モノクローム 400x300           | 純粋な黒と白          |
|4.26インチ電子ペーパー - モノクローム 800x480          | 純粋な黒と白          |
|5.65インチ電子ペーパー - セブンカラー 600x480        | 黒、白、赤、黄色、青、緑、オレンジ|
|5.83インチ電子ペーパー - モノクローム 648x480          | 純粋な黒と白          |
|7.5インチ電子ペーパー - モノクローム 800x480           | 純粋な黒と白          |
|7.5インチ電子ペーパー - トリカラー 800x480           | 純粋な黒と白          |

</div>

#### ビットマップ変換

**ステップ1.** [Image2lcd.7z](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image2Lcd.7z)を開き、解凍してアプリケーションを開きます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/1.png" style={{width:700, height:'auto'}}/></div>

**ステップ2.** 画像を開き、「出力ファイルタイプ」を「C配列（*.c）」に設定し、「スキャンモード」を「水平スキャン」に設定します。他のパラメータ設定は以下の通りです：

<div class="table-center">
  <table align="center">
    <tr>
        <th>電子ペーパー</th>
        <th>ビットピクセル</th>
        <th>最大幅と高さ</th>
        <th>色反転</th>
        <th>表示モード</th>    
    </tr>
    <tr>
        <th>1.54インチ電子ペーパー - ドットマトリックス 200x200</th>
        <td align="center">モノクローム</td>
        <td align="center">200x200</td>
        <td align="center">✅</td>
        <td align="center">左右反転</td>
    </tr>
    <tr>
        <th>2.13インチ電子ペーパー - フレキシブルモノクローム 212x104</th>
        <td align="center">モノクローム</td>
        <td align="center">104x212</td>
        <td align="center">✅</td>
        <td align="center">通常</td>
    </tr>
    <tr>
        <th>2.13インチ電子ペーパー - クアッドカラー 212x104 </th>
        <td align="center">4階調</td>
        <td align="center">104x212</td>
        <td align="center">/</td>
        <td align="center">通常</td>     
    </tr>
    <tr>
        <th>2.9インチ電子ペーパー - モノクローム 128x296</th>
         <td align="center">モノクローム</td>
        <td align="center">128x296</td>
        <td align="center">✅</td>
        <td align="center">通常</td>   
    </tr>
    <tr>
        <th>2.9インチ電子ペーパー - クアッドカラー 128x296 </th>
        <td align="center">4階調</td>
        <td align="center">128x296</td>
        <td align="center">/</td>
        <td align="center">通常</td>       
    </tr>
    <tr>
        <th>4.2インチ電子ペーパー - モノクローム 400x300</th>
        <td align="center">モノクローム</td>
        <td align="center">400x300</td>
        <td align="center">✅</td>
        <td align="center">左右反転</td>        
    </tr>
    <tr>
        <th>4.26インチ電子ペーパー - モノクローム 800x480</th>
        <td align="center">モノクローム</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">左右反転</td>        
    </tr>
    <tr>
        <th>5.65インチ電子ペーパー - セブンカラー 600x480</th>
        <td align="center">256色</td>
        <td align="center">600x448</td>
        <td align="center">/</td>
        <td align="center">通常</td>        
    </tr>
    <tr>
        <th>5.83インチ電子ペーパー - モノクローム 648x480</th>
        <td align="center">モノクローム</td>
        <td align="center">600x480</td>
        <td align="center">✅</td>
        <td align="center">左右反転</td>        
    </tr>
    <tr>
        <th>7.5インチ電子ペーパー - モノクローム 800x480</th>
        <td align="center">モノクローム</td>
        <td align="center">800x480</td>
        <td align="center">✅</td>
        <td align="center">左右反転</td>     
    </tr>
    <tr>
        <th>7.5インチ電子ペーパー - トリカラー 800x480</th>
        <td align="center">モノクローム</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">通常</td>     
    </tr>
  </table>
</div>

:::tip
- 最大幅と高さを設定した後、矢印をクリックして確認する必要があります。  
- ヘッダーデータを含めないでください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/2.png" style={{width:700, height:'auto'}}/></div>
:::

**ステップ 3.** 「Save」をクリックして、LCD 出力配列を `.h` ファイルとして保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/7.png" style={{width:500, height:'auto'}}/></div>

## リソース

- **[ZIP]** [PCB&SCH Eagle ファイル](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaperIO.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>