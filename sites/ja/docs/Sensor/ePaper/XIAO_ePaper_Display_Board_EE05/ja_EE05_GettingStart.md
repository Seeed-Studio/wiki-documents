---
description: XIAO ePaper Display Board(ESP32-S3) - EE05 入門ガイド
sku: TBD
title: Getting Started with XIAO ePaper Display Board(ESP32-S3) - EE05
sidebar_position: 1
slug: /epaper_ee05
last_update:
  date: 04/07/2026
  author: Jackson.Li
createdAt: '2026-04-07'
url: https://wiki.seeedstudio.com/ja/epaper_ee05/
updatedAt: '2026-04-07'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display EE05 入門ガイド

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE05/4.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=EE05" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## はじめに

**XIAO ESP32-S3 Plus** を搭載したディスプレイボード EE05 は、24 ピン ePaper ディスプレイに対応したコンパクトな ePaper ドライバボードです。JST 2.0 mm バッテリーコネクタと電源スイッチ、内蔵のバッテリー残量検出回路を備え、リセットボタン 1 個とユーザーがプログラム可能なボタン 3 個を搭載しています。デジタルサイネージ、電子ラベル、携帯情報端末など、低消費電力の ePaper プロジェクトに最適です。

### 特長

- **XIAO ESP32-S3 Plus 搭載:** 対応する ePaper ディスプレイに接続するだけですぐに動作します。
- **多様なディスプレイ対応:** 幅広い ePaper スクリーンと互換性があり、24 ピン SPI インターフェースをネイティブサポートします。
- **スイッチ付き BAT コネクタ:** シンプルなバッテリー接続を提供し、ハードウェアスライドスイッチを統合しているため、効率的な電源管理と省エネが可能です。さらに、XIAO ESP32 用のバッテリー残量検出回路を追加しています。
- **ユーザーフレンドリーなボタン:** 側面に配置されたリセットボタン 1 個と、ユーザーがプログラム可能なボタン 3 個を備え、（スリープ解除 / 前のページ / 次のページ など）柔軟な機能カスタマイズが可能です。
- **低消費電力設計:** MCU スリープ中に周辺回路の消費電力を効果的に制御または遮断します。

### 仕様

| パラメータ | 説明 |
|---|---|
| **プロセッサ** | XIAO ESP32-S3 Plus |
| **ePaper コネクタ** | SPI FPC 24 ピン 0.5mm |
| **バッテリーコネクタ** | JST 2.0mm |
| **スイッチ** | ハードウェア電源スライドスイッチ |
| **電源** | 3.7V リチウムバッテリー / USB Type-C |
| ボタン | 1× リセットボタン（側面実装） <br/> 3× ユーザーボタン（側面実装） |

## ハードウェア概要

### 対応 ePaper ディスプレイ

EE05 は、以下を含むさまざまな 24 ピン SPI ePaper ディスプレイをサポートします（これらに限定されません）。

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
このライブラリは TFT ライブラリと同じ機能を持ちますが、互換性はありません。すでに TFT ライブラリやその他の類似ディスプレイライブラリをインストールしている場合は、先にアンインストールしてください。
:::

GitHub から Seeed GFX ライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to download</button></p>
</a>
</div>

下へスクロールして、このリンクを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

自分のデバイスタイプを選択すると、いくつかのコードが生成されます。そのコードをコピーしておき、後で使用します。

:::tip
誤った選択をすると、画面には何も表示されません。

必ず正しいデバイスまたはコンポーネントの種類を選択してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/1.jpg" style={{width:800, height:'auto'}}/></div>

ライブラリをダウンロードしたら、**Sketch** -> **Include Library** -> **Add .ZIP Library** を開き、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

## スタートガイド

ここでは例として 7.5 インチのモノクロディスプレイを使用します。他の対応スクリーンでも手順は同じで、ドライバ内で適切な画面サイズ識別子を選択するだけです。

### プログラムの設定と書き込み
図に示すサンプルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_1.jpg" style={{width:800, height:'auto'}}/></div>

新しく "driver.h" ファイルを作成し、そこにそのコードを貼り付けます。コードは次のようになります。

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE05
```

その後、**Tools** -> **Board** -> **XIAO ESP32S3** および **Tools** -> **Port** -> **ボードが接続されているポートを選択** を開きます。


PSRAM を有効にする必要があることに注意してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.jpg" style={{width:1000, height:'auto'}}/></div>

その後、**Upload** をクリックしてコードを書き込みます。
これで ePaper スクリーンに表示結果が現れます！以下は Bitmap サンプルの結果です。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_3.jpg" style={{width:500, height:'auto'}}/></div>

## リソース

- **[PDF]** [XIAO ePaper Display Board Ex05 回路図](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)

## トラブルシューティング

**Q1: コードを書き込んだあと、画面に何も表示されません。**
- **FPC ケーブルの確認:** ePaper の FPC ケーブルが正しい向きで挿入され、コネクタでしっかりロックされていることを確認してください。
- **ドライバ設定の確認:** `driver.h` を再確認し、使用している画面サイズに合った `BOARD_SCREEN_COMBO` が選択されていることを確かめてください。

**Q2: 色が反転している、または異常なパターンが表示されます。**
- **正確なモデルの選択:** 画面サイズや IC バージョンの違いによって、必要なドライバ設定が変わります。コンボ番号がスクリーンのモデルと完全に一致していることを確認してください。
- **電源の確認:** 7.5 インチのような大きなスクリーンでは、リフレッシュ時に十分な電流を供給できる電源を使用してください。

**Q3: バッテリー接続時にボードの電源が入りません。**
- **ハードウェアスイッチ:** ボード上のハードウェアスライドスイッチが ON 位置になっているか確認してください。
- **バッテリー接続:** JST 2.0mm コネクタの極性がボードの設計と一致しているか確認してください。

## 技術サポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。お客様が製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
