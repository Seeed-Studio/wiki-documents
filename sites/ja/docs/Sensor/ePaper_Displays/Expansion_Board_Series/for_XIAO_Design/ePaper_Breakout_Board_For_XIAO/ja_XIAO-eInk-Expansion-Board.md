---
description: ePaper Breakout Board 入門ガイド
title: ePaper Breakout Board 入門ガイド
keywords:
  - XIAO eInk Expansion
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO-eInk-Expansion-Board
sku: 104990843,104990845,104990846,104990847,104990853,104990855,104990857,104990858,104990859,104990861,105990172
sidebar_position: 1
last_update:
  date: 05/23/2023
  author: Carla
createdAt: '2023-10-30'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/ja/XIAO-eInk-Expansion-Board/
---
# ePaper Breakout Board 入門ガイド

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div><br />

XIAO eInk Expansion Board は、XIAO ファミリで eInk ディスプレイを手軽に駆動するための最適なソリューションです。24 ピン FPC コネクタを備え、このボードは当社の eInk 製品シリーズとシームレスに接続できます。さらに選択肢を広げたい場合は、8 ピン 2.54 ヘッダを使って、お好みのマイコンを簡単に統合できます。このボードは、あなたの eInk の「永遠の親友」のような存在で、その機能を強化し、あなたの作業をより簡単にしてくれます。

:::note
このブレイクアウトボードには eInk ディスプレイは含まれていません。ディスプレイは別途購入する必要があります。
:::

## はじめに

### 特長

- 24 ピン FPC コネクタ：eInk ディスプレイへの堅牢で信頼性の高い接続を提供します。
- XIAO ソケット：XIAO をプロセッサとして使用でき、コンパクトでありながら強力な制御ソリューションを提供します。
- 8 ピン 2.54 ヘッダ：任意のマイコンに接続できるため、高い柔軟性があり、さまざまな可能性が広がります。
- プラグアンドプレイ：使いやすさを重視して設計されており、初心者から上級者まで幅広いユーザーに最適です。
- 多用途なアプリケーション：小型から大型まで、幅広いサイズの eInk ディスプレイに対応します。

### 用途

- デジタルサイネージ：eInk Breakout Board を使用して、動的で省電力なデジタルサインを作成します。
- 電子書籍リーダー：自分のニーズに合わせた機能を備えたカスタム電子書籍リーダーを構築します。
- スマートホーム制御パネル：スマートホームシステムに組み込んで、スタイリッシュでモダンな制御パネルを実現します。
- リテール用プライスタグ：より効率的で環境に優しい電子プライスタグを作成します。
- 教育ツール：簡単に更新でき、省電力なインタラクティブ教育教材を開発します。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/xiao-expansion.png" style={{width:700, height:'auto'}}/></div>

1. 24 ピン FPC コネクタ：2.13 インチ ePaper 用。
2. XIAO ソケット：Seeed Studio XIAO 開発ボードを接続するためのものです。
3. IO ブレイクアウト：Arduino UNO や Raspberry Pi など、他のコントローラを接続するためのものです。

### ピン配置の定義

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

### 対応 eInk

1. [1.54-inch E-paper - Dotmatix 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
2. [2.13-inch E-Paper -Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
3. [2.13-inch E-Paper - Quadruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
4. [2.9 inch E-paper - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
5. [4.2-inch E-Paper - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
6. [4.26-inch E-Paper - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
7. [5.65-inch E-paper -  Sevencolor 600x480](https://www.seeedstudio.com/5-65-Seven-Color-ePaper-Display-with-600x480-Pixels-p-5786.html)
8. [5.83-inch E-paper - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)



### ハードウェアの準備

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

**ステップ 2.** XIAO を XIAO ソケットに挿入します：ピンを揃え、ボード上の XIAO ソケットに XIAO をやさしく挿し込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_xiao.gif" style={{width:700, height:'auto'}}/></div>

**ステップ 3.** eInk を FPC コネクタに挿入します：ePaper Breakout Board 上の 24 ピン FPC コネクタに、E-paper を慎重に差し込みます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_eink.gif" style={{width:700, height:'auto'}}/></div>

### ソフトウェアの準備

 推奨される開発ツールは Arduino IDE です。XIAO 用に Arduino 環境を設定し、オンボードパッケージを追加する必要があります。
:::tip
初めて Arduino を使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

**ステップ 1.** Arduino アプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong>
    </a>
</div>

**ステップ 2.** 使用する開発ボードのモデルを選択し、Arduino IDE に追加します。

- 後の手順で **Seeed Studio XIAO SAMD21** を使用したい場合は、追加作業を完了するために **[this tutorial](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)** を参照してください。

- 後の手順で **Seeed Studio XIAO RP2040** を使用したい場合は、追加作業を完了するために **[this tutorial](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)** を参照してください。

- 後の手順で **Seeed Studio XIAO nRF52840** を使用したい場合は、追加作業を完了するために **[this tutorial](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)** を参照してください。

- 後の手順で **Seeed Studio XIAO ESP32C3** を使用したい場合は、追加作業を完了するために **[this tutorial](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)** を参照してください。

- 後の手順で **Seeed Studio XIAO ESP32S3** を使用したい場合は、追加作業を完了するために **[this tutorial](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)** を参照してください。

## Seeed GFX ライブラリのインストール

**ステップ 3.** Seeed GFX ライブラリをインストールします

:::tip
このライブラリは TFT ライブラリと同じ機能を持ちますが、互換性はありません。TFT ライブラリや類似のディスプレイライブラリをインストールしている場合は、先にアンインストールしてください。
:::

GitHub から Seeed GFX ライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>クリックしてダウンロード</button></p>
</a>
</div>

下にスクロールしてこのリンクを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

使用しているデバイスタイプを選択するとコードが生成されます。そのコードをコピーしておき、後で使用します。

:::tip
誤った選択をすると、画面には何も表示されません。

そのため、ご使用のデバイスやコンポーネントの種類を必ず確認してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/epaper_display.jpg" style={{width:600, height:'auto'}}/></div>

ライブラリをダウンロードしたら、**Sketch** -> **Include Library** -> **Add .ZIP Library** に進み、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

基本的なサンプルが 4 つあります。好みの基本サンプルを開きます：

1. Bitmap: ビットマップ画像を表示します。
2. Clock: アナログ時計を表示します。
3. Clock_digital: デジタル時計を表示します。
4. Shape: さまざまなサイズの文字や図形をランダムに表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### コードを書き込む

**新しい "driver.h" ファイル**を作成し、その中に先ほどのコードを貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 504 // 2.9 inch monochrome ePaper Screen （SSD1680）
#define USE_XIAO_EPAPER_BREAKOUT_BOARD
```

その後、**Tools** -> **Board** -> **XIAO ESP32C6** および **Tools** -> **Port** -> **ボードが接続されているポートを選択** に進みます。次に **Upload** をクリックしてコードを書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/table.jpg" style={{width:1000, height:'auto'}}/></div>

これで、epaper スクリーンにフィードバックが表示されます！以下は Helloworld サンプルの結果です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/153.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
1.54 インチまたは 2.9 インチの電子ペーパー画面を使用している場合、ドライバチップの仕様により、時計などの動的エフェクトを使用するとフリッカーが発生することがあります。これはプログラムの問題ではないのでご安心ください。ただし、画面の寿命を縮めないよう、動的エフェクトのサンプルを長時間連続して動作させることは推奨しません。

5.83 インチおよび 7.5 インチの画面を使用している場合は、異なるチップを採用しているため、このようなフリッカー現象は発生しません。
:::

## 画像変換ソフトウェア

### Web サイトの使い方（推奨）

ここではテスト用に 7.5 インチの電子ペーパー画面を使用しています。

#### 画像の作成方法

この [URL](https://jlamch.net/MXChipWelcome/) は非常に便利な画像変換操作を提供しており、電子ペーパー画面上にさまざまな画像を簡単に表示できるようにしてくれます。さっそく始めましょう！
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9191.jpg" style={{width:700, height:'auto'}}/></div>

**Step 1**.画像を選択

まず表示したい画像を選びます。サイズは 800×480 を超えないようにしてください。

**Step 2**.画像設定

- Canvas Size(s)
  - Canvas Size: キャンバスのサイズを設定します。例えば 800 x 480 ピクセルは、キャンバスの幅が 800 ピクセル、高さが 480 ピクセルであることを意味します。

- Background Color
  - Background Color: キャンバスの背景色を選択します。オプションは次のとおりです：

  - White: 白い背景
  - Black: 黒い背景

- Transparent: 透明な背景
  - Invert Image Color
  - Invert Image Color: 画像の色を反転させるためのオプションです。選択すると、画像の色が反転します。

- Brightness / Alpha Threshold
  - Brightness / Alpha Threshold: ピクセルの明るさの値を 0 ～ 255 の範囲で設定します。値が大きいほどピクセルは明るくなり、この値より低いピクセルは黒になります。

- Scaling
  - Scaling: 画像の拡大縮小方法を選択します。オプションは次のとおりです：

- Original size: 元のサイズを維持
  - その他のスケーリングオプション（具体的なオプションは別途説明が必要な場合があります）
- Center
  - Center: 画像をキャンバスの中央に配置するかどうかを選択します。注意：このオプションは、画像が元のサイズより大きい場合にのみ機能します。

**Step 3**.プレビュー

設定が完了すると、ここで画像がどのように表示されるかをプレビューできます。

**Step 4**.出力

- 変換されたコードをコピーします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9090.jpg" style={{width:700, height:'auto'}}/></div>
- このヘッダーファイル内の画像コードを置き換えます
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/image_h.jpg" style={{width:700, height:'auto'}}/></div>

#### 表示効果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaper_display.jpg" style={{width:700, height:'auto'}}/></div>

### Image2lcd ソフトウェアの使い方

#### 画像の作成方法

Windows に標準搭載されている **Paint** ソフトを使用して、使用中の画面と**同じ解像度**の画像を作成し、`BMP` または `JPG` ファイルとして保存します。

:::note
画像の解像度は、使用している画面と同じでなければなりません。例えば、4.2 インチの電子ペーパーは 400 x 300 ピクセルなので、300 x 400 のサイズは使用できません。そうすると、image2lcd が出力する `.h` ファイルに 200 バイト余分に追加されてしまいます。
:::

画像の色は、Windows に付属する標準のペイントボードの色と一致している必要があります。ペイントボードの色は次のとおりです：

<div class="table-center">

|      電子ペーパー      | 色 |
|       ---      |  ---   |
|1.54-inch E-paper - Dotmatix 200x200           | 純粋な白黒          |
|2.13-inch E-Paper -Flexible Monochrome 212x104 | 純粋な白黒          |
|2.13-inch E-Paper - Quadruple 212x104          | 黒、白、赤、黄 |
|2.9 inch E-paper - Monocolor 128x296           | 純粋な白黒          |
|2.9-inch e-paper - Quadruple color 128x296     | 黒、白、赤、黄 |
|4.2-inch E-Paper - Monocolor 400x300           | 純粋な白黒          |
|4.26-inch E-Paper - Monocolor 800x480          | 純粋な白黒          |
|5.65-inch E-paper -  Sevencolor 600x480        | 黒、白、赤、黄、青、緑、オレンジ|
|5.83-inch E-paper - Monocolor 648x480          | 純粋な白黒          |
|7.5-inch E-paper - Monocolor 800x480           | 純粋な白黒          |
|7.5-inch E-paper - Tri-Color 800x480           | 純粋な白黒          |

</div>

#### ビットマップ変換

**Step 1.** [Image2lcd.7z](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image2Lcd.7z) を開き、解凍してアプリケーションを起動します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/1.png" style={{width:700, height:'auto'}}/></div>

**Step 2.** 画像を開き、「Output file type」を「C array (*.c)」に、「Scan mode」を「Horizon Scan」に設定し、その他のパラメータ設定は次のとおりにします：

<div class="table-center">
  <table align="center">
    <tr>
        <th>電子ペーパー</th>
        <th>BitPixl</th>
        <th>最大幅と高さ</th>
        <th>色反転</th>
        <th>表示モード</th>
    </tr>
    <tr>
        <th>1.54-inch E-paper - Dotmatix 200x200</th>
        <td align="center">モノクロ</td>
        <td align="center">200x200</td>
        <td align="center">✅</td>
        <td align="center">左右反転</td>
    </tr>
    <tr>
        <th>2.13-inch E-Paper -Flexible Monochrome 212x104</th>
        <td align="center">モノクロ</td>
        <td align="center">104x212</td>
        <td align="center">✅</td>
        <td align="center">通常</td>
    </tr>
    <tr>
        <th>2.13-inch E-Paper - Quadruple 212x104 </th>
        <td align="center">4 階調グレー</td>
        <td align="center">104x212</td>
        <td align="center">/</td>
        <td align="center">通常</td>
    </tr>
    <tr>
        <th>2.9 inch E-paper - Monocolor 128x296</th>
         <td align="center">モノクロ</td>
        <td align="center">128x296</td>
        <td align="center">✅</td>
        <td align="center">通常</td>
    </tr>
    <tr>
        <th>2.9-inch e-paper - Quadruple color 128x296 </th>
        <td align="center">4 階調グレー</td>
        <td align="center">128x296</td>
        <td align="center">/</td>
        <td align="center">通常</td>
    </tr>
    <tr>
        <th>4.2-inch E-Paper - Monocolor 400x300</th>
        <td align="center">モノクロ</td>
        <td align="center">400x300</td>
        <td align="center">✅</td>
        <td align="center">左右反転</td>
    </tr>
    <tr>
        <th>4.26-inch E-Paper - Monocolor 800x480</th>
        <td align="center">モノクロ</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">左右反転</td>
    </tr>
    <tr>
        <th>5.65-inch E-paper -  Sevencolor 600x480</th>
        <td align="center">256 色</td>
        <td align="center">600x448</td>
        <td align="center">/</td>
        <td align="center">通常</td>
    </tr>
    <tr>
        <th>5.83-inch E-paper - Monocolor 648x480</th>
        <td align="center">モノクロ</td>
        <td align="center">600x480</td>
        <td align="center">✅</td>
        <td align="center">左右反転</td>
    </tr>
    <tr>
        <th>7.5-inch E-paper - Monocolor 800x480</th>
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

- Max Width と Height を設定した後、確定するために矢印をクリックする必要があります。
- ヘッダーデータを含めないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/2.png" style={{width:700, height:'auto'}}/></div>
:::

**Step 3.** "Save" をクリックして、lcd 出力配列を `.h` ファイルとして保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/7.png" style={{width:500, height:'auto'}}/></div>

## リソース

- **[ZIP]** [PCB&SCH Eagle ファイル](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaperIO.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
