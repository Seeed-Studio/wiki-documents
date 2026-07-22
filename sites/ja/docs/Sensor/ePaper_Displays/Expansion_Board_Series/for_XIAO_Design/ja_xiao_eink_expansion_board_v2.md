---
title: ePaper Driver Board 入門ガイド
description: eInk expansion board For XIAO は、Seeed Studio による、epaper スクリーンに表示を行うために設計されたスマートモジュールです。
image: https://files.seeedstudio.com/wiki/eInk/xiao-expansion/titleimg.webp
slug: /xiao_eink_expansion_board_v2
sku: 104990861,114993558
keywords:
  - XIAO
  - epaper
  - eink
last_update:
  author: Allen
  date: 12/09/2024
createdAt: '2025-01-10'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/xiao_eink_expansion_board_v2/
---

# ePaper Driver Board 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/headimage.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div><br />

ePaper driver board は、24 ピン FPC コネクタ、効率的かつ安全なバッテリー充電のための内蔵充電 IC、簡単にバッテリー接続ができる JST 2 ピン BAT コネクタを備えています。WiFi 対応のデジタルフォトフレームの作成に最適です。

:::note
このブレイクアウトボードには ePaper ディスプレイは含まれていません。ディスプレイは別途購入する必要があります。
:::

## はじめに

### 特長

- **内蔵充電 IC**: 効率的で安全なバッテリー充電を実現します。
- **スイッチ付き BAT コネクタ**: バッテリーを簡単に接続でき、バッテリーとスイッチを組み合わせて、より効率的な省エネを実現します。
- **24 ピン FPC コネクタ**: さまざまな周辺機器に対応する柔軟な接続オプションを提供します。
- **拡張 IO ポート**: 温湿度センサーなどの追加センサーを接続でき、機能を拡張できます。
- **Seeed Studio XIAO エコシステムとの互換性**: XIAO シリーズ（プリハンダ付け版）とシームレスに統合でき、多様なプロジェクト開発が可能です。

### 応用例

- **スマートホームダッシュボード**: 天気情報、カレンダーイベント、各種スマートホームデバイスからの通知など、リアルタイム情報を表示します。
- **エネルギーモニタリング**: スマートメーターからの電力消費データを表示し、家庭でのエネルギー使用状況をより効率的に把握・管理できるようにします。
- **セキュリティアラート**: 人感検知やドア／窓センサーの作動など、セキュリティイベントに関するアラートや通知を表示します。
- **スマートサーモスタットディスプレイ**: 温度や湿度レベル、スマートサーモスタットの制御設定を表示します。
- **デジタルフォトフレーム**: スマートホームネットワーク上の画像を表示できる、WiFi 対応デジタルフォトフレームを作成します。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/overview.png" style={{width:700, height:'auto'}}/></div>

1. 24 ピン FPC コネクタ: ePaper インターフェース用。
2. JST BAT コネクタ: バッテリー接続およびスイッチ用。
3. XIAO ソケット: Seeed Studio XIAO 開発ボード接続用。
4. IO ブレイクアウト: Grove センサーや Arduino UNO、Raspberry Pi などの他のコントローラを接続するためのもの。
5. 電源スイッチ: バッテリー電源の制御用。

### ピン配置定義

<div class="table-center">

|  ePaper SPI ピン |  XIAO  |
|       ---      |  ---   |
|      RST       |   D0   |
|      CS        |   D1   |
|      DC        |   D3   |
|      BUSY      |   D2   |
|      SCK       |   D8   |
|      MOSI      |   D10  |
|      3V3       |   3V3   |
|      GND      |   GND  |

</div>

### 対応 eInk

1. [1.54-inch E-paper - Dotmatix 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
2. [2.13-inch E-Paper -Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
3. [2.13-inch E-Paper - Quadruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
4. [2.9 inch E-paper - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
5. [2.9-inch e-paper - Quadruple color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
6. [4.2-inch E-Paper - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
7. [4.26-inch E-Paper - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
8. [5.65-inch E-paper -  Sevencolor 600x480](https://www.seeedstudio.com/5-65-Seven-Color-ePaper-Display-with-600x480-Pixels-p-5786.html)
9. [5.83-inch E-paper - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
10. [7.5-inch E-paper - Monocolor 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
11. [7.5-inch E-paper - Tri-Color 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

## セットアップ

 **XIAO eInk Expansion Board** を使用するには、XIAO シリーズにプログラムを書き込む必要があります。XIAO がサポートする各サイズの E-paper の対応表は次のとおりです。

<div class="table-center">

|      E-paper / XIAO     | XIAO SAMD21 | XIAO RP2040|  XIAO nRF52840 | XIAO ESP32-C3 | XIAO ESP32-S3 |
|       ---      |  ---  | --- | --- | --- | --- |
|1.54-inch E-paper - Dotmatix 200x200           | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.13-inch E-Paper -Flexible Monochrome 212x104 | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.13-inch E-Paper - Quadruple 212x104          | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.9 inch E-paper - Monocolor 128x296           | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.9-inch e-paper - Quadruple color 128x296     | ✅ | ✅ | ✅ | ✅ | ✅ |
|4.2-inch E-Paper - Monocolor 400x300           | ✅ | ✅ | ✅ | ✅ | ✅ |
|4.26-inch E-Paper - Monocolor 800x480          | RAM overflowed | ✅ | ✅ | ✅ | ✅ |
|5.65-inch E-paper -  Sevencolor 600x480        | FLASH overflowd | ✅ | ✅ | ✅ | ✅ |
|5.83-inch E-paper - Monocolor 648x480          | ✅ | ✅ | ✅ | ✅ | ✅ |
|7.5-inch E-paper - Monocolor 800x480           | RAM overflowed | ✅ | ✅ | ✅ | ✅ |
|7.5-inch E-paper - Tri-Color 800x480           | RAM overflowed | ✅ | ✅ | ✅ | ✅ |

</div>

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

**ステップ 2.** XIAO を XIAO ソケットに挿入します: ピンを揃え、ボード上の XIAO ソケットに XIAO をゆっくりと挿し込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_xiao.gif" style={{width:700, height:'auto'}}/></div>

**ステップ 3.** eInk を FPC コネクタに挿入します: ePaper Breakout Board 上の 24 ピン FPC コネクタに、E-paper を慎重に差し込みます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_eink.gif" style={{width:700, height:'auto'}}/></div>

### ソフトウェアの準備

 推奨される開発ツールは Arduino IDE であり、XIAO 用に Arduino 環境を設定し、オンボードパッケージを追加する必要があります。
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

**ステップ 2.** 開発ボードのモデルを選択し、Arduino IDE に追加します。

- 後の手順で **Seeed Studio XIAO SAMD21** を使用したい場合は、追加作業を完了するために **[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#ソフトウェア)** を参照してください。

- 後の手順で **Seeed Studio XIAO RP2040** を使用したい場合は、追加作業を完了するために **[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#ソフトウェア-セットアップ)** を参照してください。

- 後の手順で **Seeed Studio XIAO nRF52840** を使用したい場合は、追加作業を完了するために **[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#ソフトウェア-セットアップ)** を参照してください。

- 後の手順で **Seeed Studio XIAO ESP32C3** を使用したい場合は、追加作業を完了するために **[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#ソフトウェア-セットアップ)** を参照してください。

- 後の手順で **Seeed Studio XIAO ESP32S3** を使用したい場合は、追加作業を完了するために **[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#ソフトウェア-準備)** を参照してください。

## Seeed GFX ライブラリをインストール

**ステップ 3.** Seeed GFX ライブラリをインストールします

:::tip
このライブラリは TFT ライブラリと同じ機能を持ち、互換性はありません。TFT ライブラリやその他の類似のディスプレイライブラリをインストールしている場合は、先にアンインストールしてください。
:::

GitHub から Seeed GFX ライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックしてダウンロード</button></p>
</a>
</div>

下にスクロールしてこのリンクを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

デバイスタイプを選択すると、いくつかのコードが生成されます。そのコードをコピーしておき、後で使用します。

:::tip
誤った選択をすると、画面には何も表示されません。

そのため、ご使用のデバイスやコンポーネントの種類を必ず確認してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/config.jpg" style={{width:600, height:'auto'}}/></div>

ライブラリをダウンロードしたら、**Sketch** -> **Include Library** -> **Add .ZIP Library** に進み、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

基本的なサンプルが 4 つあります。好みの基本サンプルを開きます：

1. Bitmap: ビットマップ画像を表示します。
2. Clock: 時計を表示します。
3. Clock_digital: デジタル時計を表示します。
4. Shape: さまざまなサイズの文字と図形をランダムに表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### コードを書き込む

**新しい "driver.h" ファイル** を作成し、その中にこれらのコードを貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 504 // 2.9 inch monochrome ePaper Screen （SSD1680）
#define USE_XIAO_EPAPER_BREAKOUT_BOARD
```

その後、**Tools** -> **Board** -> **XIAO ESP32C6** および **Tools** -> **Port** -> **ボードが接続されているポートを選択** に進みます。次に **Upload** をクリックしてコードを書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/table.jpg" style={{width:1000, height:'auto'}}/></div>

これで e-paper スクリーンにフィードバックが表示されます！以下は Helloworld サンプルの結果です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/153.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
1.54 インチまたは 2.9 インチの電子ペーパー画面を使用している場合、そのドライバチップの特性により、時計などの動的なエフェクトを使用するとフリッカーが発生することがあります。これはプログラムの問題ではないのでご安心ください。ただし、画面の寿命を縮めないよう、動的エフェクトのサンプルを長時間連続して実行することは推奨されません。

5.83 インチおよび 7.5 インチの画面を使用している場合は、異なるチップを採用しているため、このようなフリッカー現象は発生しません。
:::

## 画像変換ソフトウェア

### Web サイトの使い方（推奨）

ここではテスト用に 7.5 インチの電子ペーパー画面を使用しています。

#### 画像の作り方

この [URL](https://jlamch.net/MXChipWelcome/) は非常に便利な画像変換操作を提供しており、電子ペーパー画面上にさまざまな画像を簡単に表示できるようにしてくれます。さっそく始めましょう！
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9191.jpg" style={{width:700, height:'auto'}}/></div>

**ステップ 1**. 画像を選択

まず表示したい画像を選びます。サイズは 800×480 を超えないようにしてください。

**ステップ 2**. 画像設定

- Canvas Size(s)
  - Canvas Size: キャンバスのサイズを設定します。例えば 800 x 480 ピクセルは、キャンバスの幅が 800 ピクセル、高さが 480 ピクセルであることを意味します。

- Background Color
  - Background Color: キャンバスの背景色を選択します。オプションには次のものがあります：

  - White: 白い背景
  - Black: 黒い背景

- Transparent: 透明な背景
  - Invert Image Color
  - Invert Image Color: このオプションは画像の色を反転するために使用します。選択すると、画像の色が反転します。

- Brightness / Alpha Threshold
  - Brightness / Alpha Threshold: ピクセルの明るさの値を 0 〜 255 の範囲で設定します。値が高いほどピクセルは明るくなり、この値より低いピクセルは黒になります。

- Scaling
  - Scaling: 画像の拡大縮小方法を選択します。オプションには次のものがあります：

- Original size: 元のサイズを維持
  - その他のスケーリングオプション（具体的なオプションについては別途説明が必要な場合があります）
- Center
  - Center: 画像をキャンバスの中央に配置するかどうかを選択します。注意：このオプションは、画像が元のサイズより大きい場合にのみ機能します。

**ステップ 3**. プレビュー

設定が完了すると、ここで画像がどのように表示されるかをプレビューできます。

**ステップ 4**. 出力

- 変換されたコードをコピーします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9090.jpg" style={{width:700, height:'auto'}}/></div>
- このヘッダーファイル内の画像コードを置き換えます
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/image_h.jpg" style={{width:700, height:'auto'}}/></div>

#### 表示効果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaper_display.jpg" style={{width:700, height:'auto'}}/></div>

### Image2lcd ソフトウェアの使い方

#### 画像の作り方

Windows に標準搭載されているソフトウェア **ペイント (Paint)** を使用して、使用している画面と**同じ解像度**の画像を作成し、`BMP` または `JPG` ファイルとして保存します。

:::note
画像の解像度は、使用している画面と同じでなければなりません。例えば、4.2 インチの電子ペーパーは 400 x 300 ピクセルなので、300 x 400 のサイズは使用できません。そうすると image2lcd が出力する `.h` ファイルに 200 バイト余分に追加されてしまいます。
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

**ステップ 1.** [Image2lcd.7z](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image2Lcd.7z) を開き、解凍してアプリケーションを起動します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/1.png" style={{width:700, height:'auto'}}/></div>

**ステップ 2.** 画像を開き、「Output file type」を「C array (*.c)」に、「Scan mode」を「Horizon Scan」に設定し、その他のパラメータ設定は次のとおりです：

<div class="table-center">
  <table align="center">
    <tr>
        <th>Epaper</th>
        <th>BitPixl</th>
        <th>Max Width and Height</th>
        <th>Reverse color</th>
        <th>Display mode</th>
    </tr>
    <tr>
        <th>1.54-inch E-paper - Dotmatix 200x200</th>
        <td align="center">Monochrome</td>
        <td align="center">200x200</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>2.13-inch E-Paper -Flexible Monochrome 212x104</th>
        <td align="center">Monochrome</td>
        <td align="center">104x212</td>
        <td align="center">✅</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>2.13インチ E-Paper - 4階調 212x104 </th>
        <td align="center">4階調</td>
        <td align="center">104x212</td>
        <td align="center">/</td>
        <td align="center">通常</td>
    </tr>
    <tr>
        <th>2.9インチ E-Paper - モノクロ 128x296</th>
         <td align="center">モノクロ</td>
        <td align="center">128x296</td>
        <td align="center">✅</td>
        <td align="center">通常</td>
    </tr>
    <tr>
        <th>2.9インチ E-Paper - 4階調カラー 128x296 </th>
        <td align="center">4階調</td>
        <td align="center">128x296</td>
        <td align="center">/</td>
        <td align="center">通常</td>
    </tr>
    <tr>
        <th>4.2インチ E-Paper - モノクロ 400x300</th>
        <td align="center">モノクロ</td>
        <td align="center">400x300</td>
        <td align="center">✅</td>
        <td align="center">左右反転</td>
    </tr>
    <tr>
        <th>4.26インチ E-Paper - モノクロ 800x480</th>
        <td align="center">モノクロ</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">左右反転</td>
    </tr>
    <tr>
        <th>5.65インチ E-Paper - 7色 600x480</th>
        <td align="center">256色</td>
        <td align="center">600x448</td>
        <td align="center">/</td>
        <td align="center">通常</td>
    </tr>
    <tr>
        <th>5.83インチ E-Paper - モノクロ 648x480</th>
        <td align="center">モノクロ</td>
        <td align="center">600x480</td>
        <td align="center">✅</td>
        <td align="center">左右反転</td>
    </tr>
    <tr>
        <th>7.5インチ E-Paper - モノクロ 800x480</th>
        <td align="center">モノクロ</td>
        <td align="center">800x480</td>
        <td align="center">✅</td>
        <td align="center">左右反転</td>
    </tr>
    <tr>
        <th>7.5インチ E-Paper - 3色 800x480</th>
        <td align="center">モノクロ</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">通常</td>
    </tr>
  </table>
</div>

:::tip

- Max Width と Height を設定した後、矢印をクリックして確定する必要があります。
- ヘッダーデータを含めないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/2.png" style={{width:700, height:'auto'}}/></div>
:::

**Step 3.** "Save" をクリックして、lcd 出力配列を `.h` ファイルとして保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/7.png" style={{width:500, height:'auto'}}/></div>

## リソース

- **[PDF]**: [ePaper ドライバボード SCH PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
