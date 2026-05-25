---
description: XIAO ePaper Display Board(ESP32-S3) - EE05 入門ガイド
sku: 100057220
title: EE05 入門ガイド
image: https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.webp
slug: /epaper_ee05
sidebar_position: 4
last_update:
  date: 04/27/2026
  author: dimo
createdAt: '2026-04-07'
url: https://wiki.seeedstudio.com/ja/epaper_ee05/
updatedAt: '2026-04-27'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display Board - EE05 入門ガイド

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE05-p-6755.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## はじめに

**XIAO ESP32-S3 Plus** を搭載したディスプレイボード EE05 は、幅広い 24 ピン ePaper ディスプレイをサポートし、SenseCraft HMI を用いたノーコード UI 設計とデプロイを可能にします。拡張 IO とバッテリーコネクタ用電源スイッチを備えており、低消費電力のスマートディスプレイ用途に最適です。

### 特長

- **XIAO ESP32-S3 Plus 搭載:** 対応する ePaper ディスプレイに接続するだけで、すぐに動作します。
- **多用途なディスプレイ対応:** 幅広い 24 ピン ePaper ディスプレイに対応し、さまざまなプロジェクト要件に対応できます。
- **拡張 IO ポート:** 温湿度センサなどの追加センサを接続でき、機能を拡張できます。
- **スイッチ付き BAT コネクタ:** シンプルなバッテリー接続を提供し、スイッチを内蔵することで効率的な電源管理と省エネを実現します。
- **SenseCraft HMI によるノーコード UI 設計とデプロイ:** 新しい AI 搭載ノーコードプラットフォームである SenseCraft HMI を使って、パーソナライズされたダッシュボードを簡単に設計・デプロイできます。ドラッグ＆ドロップで UI を作成し、豊富なテンプレートから選ぶことも、AI に手伝ってもらうこともできます。Web API からリアルタイムデータを接続し、数回クリックするだけで完成したダッシュボードを ePaper ディスプレイにデプロイできます。設計からデータ設定、デプロイまで、すべてを 1 つのプラットフォーム上でシームレスに行えます。

### 仕様

| パラメータ | 説明 |
|---|---|
| **プロセッサ** | XIAO ESP32-S3 Plus |
| **ePaper コネクタ** | SPI FPC 24 ピン 0.5mm |
| **バッテリーコネクタ** | JST 2.0mm |
| **スイッチ** | ハードウェア電源スライドスイッチ |
| **電源** | 3.7V リチウムバッテリー / USB Type-C |
| ボタン | 1x リセットボタン（側面実装） <br/> 3x ユーザーボタン（側面実装） |

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
このライブラリは TFT ライブラリと同じ機能を持ちますが、互換性はありません。TFT ライブラリやその他の類似したディスプレイライブラリをインストールしている場合は、先にアンインストールしてください。
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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/1.jpg" style={{width:800, height:'auto'}}/></div>

ライブラリをダウンロードしたら、**Sketch** -> **Include Library** -> **Add .ZIP Library** に進み、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

## はじめての使用

ここでは、7.5 インチのモノクロディスプレイを例として使用します。他の対応スクリーンでも手順は同じで、ドライバ内で適切な画面サイズ識別子を選択するだけです。

### プログラムの設定と書き込み
図に示すサンプルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_1.jpg" style={{width:800, height:'auto'}}/></div>

新しい「driver.h」ファイルを作成し、その中に先ほどのコードを貼り付けます。コードは次のようになります。

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE05
```

その後、**Tools** -> **Board** -> **XIAO ESP32S3** および **Tools** -> **Port** -> **ボードが接続されているポートを選択** に進みます。


PSRAM を有効にする必要があることに注意してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.jpg" style={{width:1000, height:'auto'}}/></div>

その後、**Upload** をクリックしてコードを書き込みます。
これで ePaper スクリーンにフィードバックが表示されます！以下は Bitmap サンプルの結果です。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_3.jpg" style={{width:500, height:'auto'}}/></div>

## リソース

- **[PDF]** [XIAO ePaper Display Board Ex05 回路図](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE05 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_EE05_V1.11_SCH&PCB_260420.zip)

## トラブルシューティング

**Q1: コードを書き込んだ後も画面に何も表示されません。**
- **FPC ケーブルを確認:** ePaper の FPC ケーブルが正しい向きで挿入され、コネクタでしっかりロックされていることを確認してください。
- **ドライバ設定を確認:** `driver.h` を再確認し、使用している画面サイズに対して正しい `BOARD_SCREEN_COMBO` が選択されていることを確認してください。

**Q2: 色が反転している、または異常なパターンが表示されます。**
- **正確なモデルを選択:** 画面サイズや IC のリビジョンが異なると、特定のドライバ設定が必要になります。コンボ番号が使用している画面モデルと完全に一致していることを確認してください。
- **電源を確認:** （7.5 インチのような）大型スクリーンでは、画面リフレッシュ時に十分な電流を供給できる電源を使用してください。

**Q3: バッテリー接続時にボードの電源が入りません。**
- **ハードウェアスイッチ:** ボード上のハードウェアスライドスイッチが ON 位置になっていることを確認してください。
- **バッテリー接続:** JST 2.0mm コネクタの極性がボードの設計と一致していることを確認してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
