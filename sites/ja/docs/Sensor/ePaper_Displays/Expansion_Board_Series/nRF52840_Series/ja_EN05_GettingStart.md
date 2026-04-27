---
description: XIAO ePaper Display Board(nRF52840) - EN05 入門ガイド
sku: TBD
title: XIAO ePaper Display Board(nRF52840) - EN05 入門ガイド
sidebar_position: 1
image: https://files.seeedstudio.com/wiki/Epaper/EN05/3.jpg
slug: /epaper_en05
last_update:
  date: 04/08/2026
  author: Jackson.Li
createdAt: '2026-04-08'
url: https://wiki.seeedstudio.com/ja/epaper_en05/
updatedAt: '2026-04-10'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display EN05 入門ガイド

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN05/3_26_1.jpg"/></div>

    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN05-p-6756.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## はじめに

**XIAO nRF52840 Plus** を搭載したディスプレイボード EN05 は、24 ピン ePaper ディスプレイ専用に設計された超低消費電力の ePaper ドライバボードです。ハードウェア電源スイッチを備えており、電子棚札、スマートバッジ、ポータブル IoT 情報ボードなど、バッテリー駆動プロジェクトに最適です。

### 特長

- **XIAO nRF52840 Plus 搭載:** ワイヤレス通信のための Bluetooth 5.0 機能を内蔵。
- **ユーザーフレンドリーなボタン:** 側面実装の Reset ボタン 1 個とユーザーボタン 3 個（ボタン 3 は D9 にマッピング）を備え、カスタム操作（例：ウェイクアップ / 前のページ / 次のページ）に利用可能。
- **低消費電力設計:** ハードウェアスライドスイッチ付き JST 2.0mm バッテリーコネクタを統合し、MCU スリープ中は周辺回路の電源を自動的にオフ。
- **フラットバックデザイン:** マットブラック PCB とフラットな背面（ロングピンなし）により、取り付けが容易。

### 仕様

| パラメータ | 説明 |
|---|---|
| **プロセッサ** | XIAO nRF52840 Plus |
| **無線** | Bluetooth 5.0 |
| **ePaper コネクタ** | SPI FPC 24 ピン 0.5mm |
| **バッテリーコネクタ** | JST 2.0mm (3.7V リチウムバッテリー) |
| **スイッチ** | ハードウェア電源スライドスイッチ |
| **ボタン** | Reset ボタン 1 個（側面実装）<br/> ユーザーボタン 3 個（側面実装） |
| **PCB 厚さ** | 1.2mm |

## ハードウェア概要

### 対応 ePaper ディスプレイ

EN05 は、以下を含むさまざまな 24 ピン SPI ePaper ディスプレイをサポートします（これらに限定されません）。

- [1.54-inch E-paper - Dotmatix 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch E-Paper -Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch E-Paper - Quadruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9 inch E-paper - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [4.2-inch E-Paper - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch E-Paper - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch E-paper - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch Monochrome ePaper Display with 800x480 Pixels](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)



## ソフトウェア概要

### Seeed GFX ライブラリのインストール

:::tip
このライブラリは TFT ライブラリと同じ機能を持ちますが、互換性はありません。TFT ライブラリやその他の類似ディスプレイライブラリをインストールしている場合は、先にアンインストールしてください。
:::

GitHub から Seeed GFX ライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックしてダウンロード</button></p>
</a>
</div>

スクロールダウンして、このリンクを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

デバイスタイプを選択すると、いくつかのコードが生成されます。そのコードをコピーしておき、後で使用します。

:::tip
誤った選択をすると、画面には何も表示されません。

必ず正しいデバイスまたはコンポーネントタイプを選択してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/1.jpg" style={{width:800, height:'auto'}}/></div>

ライブラリをダウンロードしたら、**Sketch** -> **Include Library** -> **Add .ZIP Library** に進み、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

## はじめての使用

ここでは、7.5 インチのモノクロディスプレイを例として使用します。手順は他の対応スクリーンでも同じで、ドライバ内で適切な画面サイズ識別子を選択するだけです。

### プログラムの設定と書き込み
図に示すサンプルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_1.jpg" style={{width:800, height:'auto'}}/></div>

新しい "driver.h" ファイルを作成し、その中に先ほどのコードを貼り付けます。コードは次のようになります。

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EN05
```

その後、**Tools** -> **Board** -> **Seeed nRF52 Boards** -> **Seeed XIAO nRF52840 Sense** および **Tools** -> **Port** -> **ボードが接続されているポートを選択** に進みます。

次に **Upload** をクリックしてコードを書き込みます。
これで ePaper スクリーンにフィードバックが表示されます！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/2.jpg" style={{width:500, height:'auto'}}/></div>

## リソース

- **[PDF]** [XIAO ePaper Display Board Ex05 回路図](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)

## トラブルシューティング

**Q1: コードを書き込んだ後も画面に何も表示されません。**
- **FPC ケーブルを確認:** ePaper の FPC ケーブルが正しい向きで挿入され、コネクタで確実にロックされていることを確認してください。
- **ドライバ設定を確認:** `driver.h` を再確認し、使用している画面サイズに対して正しい `BOARD_SCREEN_COMBO` が選択されていることを確認してください。

**Q2: バッテリーを接続してもボードの電源が入りません。**
- **ハードウェアスイッチ:** ボード上のハードウェアスライドスイッチが ON 位置になっていることを確認してください。
- **バッテリー接続:** JST 2.0mm コネクタの極性を確認してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、サポートをご提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
