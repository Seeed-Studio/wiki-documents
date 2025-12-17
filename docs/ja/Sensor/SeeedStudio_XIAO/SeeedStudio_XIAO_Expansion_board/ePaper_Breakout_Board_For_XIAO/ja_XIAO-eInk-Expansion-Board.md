---
description: ePaper ブレイクアウトボードの入門ガイド
title: ePaper ブレイクアウトボード
keywords:
- XIAO eInk Expansion
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/XIAO-eInk-Expansion-Board
sidebar_position: 1
last_update:
  date: 05/23/2023
  author: Carla
---

# ePaper ブレイクアウトボードの入門ガイド

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div><br />

XIAO eInk 拡張ボードをご紹介します。XIAO ファミリーで eInk ディスプレイを簡単に駆動するためのソリューションです。24ピン FPC コネクタを搭載し、当社の eInk 製品シリーズとのシームレスな接続を提供します。選択肢を広げたい場合は、8ピン 2.54 ヘッダーにより、お好みのマイクロコントローラーを簡単に統合できます。このボードを eInk の「親友」として考えてください。機能を向上させ、あなたの生活をより便利にします。

:::note
このブレイクアウトボードには eInk ディスプレイは含まれていません。ディスプレイは別途購入する必要があります。
:::

## はじめに

### 特徴

- 24ピン FPC コネクタ：eInk ディスプレイへの堅牢で信頼性の高い接続を提供します。
- XIAO ソケット：XIAO をプロセッサとして使用でき、コンパクトでありながら強力な制御ソリューションを提供します。
- 8ピン 2.54 ヘッダー：任意のマイクロコントローラーに接続できる柔軟性を提供し、可能性の世界を広げます。
- プラグアンドプレイ：使いやすさを重視した設計で、初心者から専門家まで完璧に対応します。
- 多用途アプリケーション：小型から大型まで、幅広い eInk ディスプレイに適用できます。

### アプリケーション

- デジタルサイネージ：eInk ブレイクアウトボードを使用して、動的でエネルギー効率の高いデジタルサインを作成します。
- 電子書籍リーダー：ニーズに合わせてカスタマイズされた機能を持つ独自の電子書籍リーダーを構築します。
- スマートホーム制御パネル：スマートホームシステムにボードを統合し、洗練されたモダンな制御パネルを実現します。
- 小売価格タグ：より効率的で環境に優しい小売体験のための電子価格タグを作成します。
- 教育ツール：簡単に更新でき、エネルギー効率の高いインタラクティブな教育教材を開発します。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/xiao-expansion.png" style={{width:700, height:'auto'}}/></div>

1. 24ピン FPC コネクタ：2.13インチ ePaper 用。
2. XIAO ソケット：Seeed Studio XIAO 開発ボードの接続用。
3. IO ブレイクアウト：Arduino UNO や Raspberry Pi などの他のコントローラーの接続用。

### ピン配置定義

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

### サポートされる eInk

1. [1.54インチ E-paper - ドットマトリックス 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
2. [2.13インチ E-Paper - フレキシブルモノクロ 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
3. [2.13インチ E-Paper - 4色 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
4. [2.9インチ E-paper - モノカラー 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
5. [2.9インチ e-paper - 4色 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
6. [4.2インチ E-Paper - モノカラー 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
7. [4.26インチ E-Paper - モノカラー 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
8. [5.65インチ E-paper - 7色 600x480](https://www.seeedstudio.com/5-65-Seven-Color-ePaper-Display-with-600x480-Pixels-p-5786.html)
9. [5.83インチ E-paper - モノカラー 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
10. [7.5インチ E-paper - モノカラー 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
11. [7.5インチ E-paper - 3色 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

### ハードウェア準備

**ステップ 1.** 材料準備

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
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**ステップ 2.** XIAO を XIAO ソケットに挿入：ピンを合わせて、XIAO をボード上の XIAO ソケットに優しく挿入します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_xiao.gif" style={{width:700, height:'auto'}}/></div>

**ステップ 3.** eInk を FPC コネクタに挿入：E-paper を ePaper ブレイクアウトボードの 24ピン FPC コネクタに慎重にスライドさせます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_eink.gif" style={{width:700, height:'auto'}}/></div>

### ソフトウェア準備

 推奨プログラミングツールは Arduino IDE で、XIAO 用の Arduino 環境を設定し、オンボードパッケージを追加する必要があります。
:::tip
Arduino を初めて使用する場合は、[Arduino の入門ガイド](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

**ステップ 1.** Arduino アプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong>
    </a>
</div>

**ステップ 2.** 開発ボードモデルを選択し、Arduino IDE に追加します。

- 後のルーチンで **Seeed Studio XIAO SAMD21** を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)**を参照して追加を完了してください。

- 後のルーチンで **Seeed Studio XIAO RP2040** を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)**を参照して追加を完了してください。

- 後のルーチンで **Seeed Studio XIAO nRF52840** を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)**を参照して追加を完了してください。

- 後のルーチンで **Seeed Studio XIAO ESP32C3** を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)**を参照して追加を完了してください。

- 後のルーチンで **Seeed Studio XIAO ESP32S3** を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)**を参照して追加を完了してください。

## Seeed GFX ライブラリのインストール

**ステップ 3.** Seeed GFX ライブラリをインストールします

:::tip
このライブラリは TFT ライブラリと同じ機能を持ちますが、互換性はありません。TFT ライブラリや他の類似のディスプレイライブラリをインストールしている場合は、まずアンインストールしてください。
:::

GitHubからSeeed GFXライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックしてダウンロード</button></p>
</a>
</div>

下にスクロールしてこのリンクを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

デバイスタイプを選択すると、コードが生成されます。そのコードをコピーして、後で使用します。

:::tip
間違った選択をすると、画面に何も表示されません。

そのため、デバイスやコンポーネントのタイプを確認してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/epaper_display.jpg" style={{width:600, height:'auto'}}/></div>

ライブラリをダウンロードした後、**Sketch** -> **Include Library** -> **Add .ZIP Library** に移動し、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

4つの基本的な例があります。お好みの基本例を開いてください：

1. Bitmap：ビットマップ画像を表示します。
2. Clock：時計を表示します。
3. Clock_digital：デジタル時計を表示します。
4. Shape：異なるサイズの文字と図形をランダムに表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### コードのアップロード

新しい **"driver.h" ファイル** を作成し、そのコードを貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 504 // 2.9 inch monochrome ePaper Screen （SSD1680）
#define USE_XIAO_EPAPER_BREAKOUT_BOARD
```

その後、**Tools** -> **Board** -> **XIAO ESP32C6** と **Tools** -> **Port** -> **ボードが接続されているポートを選択** に移動します。次に **Upload** をクリックしてコードをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/table.jpg" style={{width:1000, height:'auto'}}/></div>

これで電子ペーパー画面にフィードバックが表示されます！以下はHelloworldの例の結果です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/153.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
1.54インチまたは2.9インチの電子インク画面を使用している場合、ドライバーチップの特性により、時計などの動的効果を使用する際にちらつきが発生する可能性があります。これはプログラムの問題ではありませんのでご安心ください。ただし、画面の寿命を短縮しないよう、動的効果の例を長時間実行することは推奨されません。

5.83インチと7.5インチの画面を使用している場合、異なるチップを使用しているため、ちらつき現象は発生しません。
:::

## 画像抽出ソフトウェア

### ウェブサイトの使用方法（推奨）

ここでは7.5インチの電子インク画面をテストに使用しています

#### 画像の作成方法

この[URL](https://jlamch.net/MXChipWelcome/)は非常に便利な画像抽出操作を提供しており、電子インク画面上に様々な画像を表示することを簡単に実現できます。始めましょう！
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9191.jpg" style={{width:700, height:'auto'}}/></div>

**ステップ1**. 画像を選択

まず、使用したい画像を選択します。800*480のサイズを超えないようにしてください。

**ステップ2**. 画像設定

- Canvas Size(s)
  - Canvas Size：キャンバスの寸法を設定します。例えば、800 x 480ピクセルは、キャンバスの幅が800ピクセル、高さが480ピクセルであることを意味します。

- Background Color
  - Background Color：キャンバスの背景色を選択します。オプションには以下が含まれます：

  - White：白い背景
  - Black：黒い背景

- Transparent：透明な背景
  - Invert Image Color
  - Invert Image Color：このオプションは画像の色を反転するために使用されます。選択すると、画像の色が反転されます。

- Brightness / Alpha Threshold
  - Brightness / Alpha Threshold：ピクセルの明度値を設定します。範囲は0から255です。値が高いほどピクセルが明るくなり、この値を下回るピクセルは黒になります。

- Scaling
  - Scaling：画像のスケーリング方法を選択します。オプションには以下が含まれます：

- Original size：元のサイズを維持
  - その他のスケーリングオプション（具体的なオプションについてはさらなる説明が必要な場合があります）
- Center
  - Center：画像をキャンバスの中央に配置するかどうかを選択します。注意：このオプションは画像が元のサイズより大きい場合にのみ機能します。

**ステップ3**. プレビュー

設定が完了すると、ここで画像がどのように表示されるかのプレビューを確認できます

**ステップ4**. 出力

- 変換されたコードをコピー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9090.jpg" style={{width:700, height:'auto'}}/></div>
- このヘッダーファイル内の画像コードを置き換え
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/image_h.jpg" style={{width:700, height:'auto'}}/></div>

#### 表示効果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaper_display.jpg" style={{width:700, height:'auto'}}/></div>

### Image2lcdソフトウェアの使用方法

#### 画像の作成方法

Windowsの内蔵ソフトウェア **Paint** を使用して、使用している画面と **同じ解像度** の画像を作成し、`BMP` または `JPG` ファイルとして保存します；

:::note
画像の解像度は使用している画面と同じでなければなりません。例えば、4.2インチの電子ペーパーは400 x 300ピクセルなので、300 x 400のサイズを使用することはできません。これによりimage2lcdの出力`.h`ファイルに余分な200バイトが発生します。
:::

画像の色は、Windowsに付属する描画ボードの標準色と一致している必要があります。描画ボードの色は以下の通りです：

<div class="table-center">

|      電子ペーパー      | 色 |
|       ---      |  ---   |
|1.54インチ電子ペーパー - Dotmatix 200x200           | 純粋な黒と白          |
|2.13インチ電子ペーパー -フレキシブルモノクローム 212x104 | 純粋な黒と白          |
|2.13インチ電子ペーパー - 4色 212x104          | 黒、白、赤、黄色 |
|2.9インチ電子ペーパー - モノカラー 128x296           | 純粋な黒と白          |
|2.9インチ電子ペーパー - 4色 128x296     | 黒、白、赤、黄色 |
|4.2インチ電子ペーパー - モノカラー 400x300           | 純粋な黒と白          |
|4.26インチ電子ペーパー - モノカラー 800x480          | 純粋な黒と白          |
|5.65インチ電子ペーパー -  7色 600x480        | 黒、白、赤、黄色、青、緑、オレンジ|
|5.83インチ電子ペーパー - モノカラー 648x480          | 純粋な黒と白          |
|7.5インチ電子ペーパー - モノカラー 800x480           | 純粋な黒と白          |
|7.5インチ電子ペーパー - 3色 800x480           | 純粋な黒と白          |

</div>

#### ビットマップ変換

**ステップ1.** [Image2lcd.7z](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image2Lcd.7z)を開き、解凍してアプリケーションを開きます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/1.png" style={{width:700, height:'auto'}}/></div>

**ステップ2.** 画像を開き、"Output file type"を"C array (*.c)"として選択し、"Scan mode"を"Horizon Scan"として選択します。その他のパラメータ設定は以下の通りです：

<div class="table-center">
  <table align="center">
    <tr>
        <th>電子ペーパー</th>
        <th>BitPixl</th>
        <th>最大幅と高さ</th>
        <th>色の反転</th>
        <th>表示モード</th>
    </tr>
    <tr>
        <th>1.54インチ電子ペーパー - Dotmatix 200x200</th>
        <td align="center">モノクローム</td>
        <td align="center">200x200</td>
        <td align="center">✅</td>
        <td align="center">左右ミラー</td>
    </tr>
    <tr>
        <th>2.13インチ電子ペーパー -フレキシブルモノクローム 212x104</th>
        <td align="center">モノクローム</td>
        <td align="center">104x212</td>
        <td align="center">✅</td>
        <td align="center">通常</td>
    </tr>
    <tr>
        <th>2.13インチ電子ペーパー - 4色 212x104 </th>
        <td align="center">4グレー</td>
        <td align="center">104x212</td>
        <td align="center">/</td>
        <td align="center">通常</td>
    </tr>
    <tr>
        <th>2.9インチ電子ペーパー - モノカラー 128x296</th>
         <td align="center">モノクローム</td>
        <td align="center">128x296</td>
        <td align="center">✅</td>
        <td align="center">通常</td>
    </tr>
    <tr>
        <th>2.9インチ電子ペーパー - 4色 128x296 </th>
        <td align="center">4グレー</td>
        <td align="center">128x296</td>
        <td align="center">/</td>
        <td align="center">通常</td>
    </tr>
    <tr>
        <th>4.2インチ電子ペーパー - モノカラー 400x300</th>
        <td align="center">モノクローム</td>
        <td align="center">400x300</td>
        <td align="center">✅</td>
        <td align="center">左右ミラー</td>
    </tr>
    <tr>
        <th>4.26インチ電子ペーパー - モノカラー 800x480</th>
        <td align="center">モノクローム</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">左右ミラー</td>
    </tr>
    <tr>
        <th>5.65インチ電子ペーパー -  7色 600x480</th>
        <td align="center">256色</td>
        <td align="center">600x448</td>
        <td align="center">/</td>
        <td align="center">通常</td>
    </tr>
    <tr>
        <th>5.83インチ電子ペーパー - モノカラー 648x480</th>
        <td align="center">モノクロ</td>
        <td align="center">600x480</td>
        <td align="center">✅</td>
        <td align="center">左右反転</td>
    </tr>
    <tr>
        <th>7.5インチ E-paper - モノカラー 800x480</th>
        <td align="center">モノクロ</td>
        <td align="center">800x480</td>
        <td align="center">✅</td>
        <td align="center">左右反転</td>
    </tr>
    <tr>
        <th>7.5インチ E-paper - 3色 800x480</th>
        <td align="center">モノクロ</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">通常</td>
    </tr>
  </table>
</div>

:::tip

- 最大幅と高さを設定した後、矢印をクリックして確認する必要があります。
- ヘッダーデータは含めないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/2.png" style={{width:700, height:'auto'}}/></div>
:::

**ステップ 3.** "Save" をクリックして、LCD出力配列を `.h` ファイルとして保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/7.png" style={{width:500, height:'auto'}}/></div>

## リソース

- **[ZIP]** [PCB&SCH Eagleファイル](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaperIO.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
