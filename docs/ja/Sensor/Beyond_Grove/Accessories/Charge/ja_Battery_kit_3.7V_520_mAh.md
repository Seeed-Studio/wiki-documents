---
title: バッテリーキット 3.7V 520mAh
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Battery_kit_3.7V_520_mAh/
slug: /ja/Battery_kit_3.7V_520_mAh
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/img/Battery_kit-3.7V_520mAh_Product_View_960.jpg)

バッテリーキット-3.7V 520mAhには、520mAhリチウムイオンバッテリーと、リチウムイオンバッテリーの残量を測定するためのバッテリーパワーデテクターの2つのアイテムが含まれています。

リチウムイオンバッテリーは非常に薄型で軽量、かつコストパフォーマンスに優れています。定格電圧は3.7Vです。また、最大入力電流520mA、最大入力電圧4.2Vの専用充電器で充電することができます。このバッテリーには、便利に着脱可能なJST 1.0コネクタがあらかじめ取り付けられています。また、出力短絡に対する過電流保護機能が内蔵されています。**ただし、使用時には注意を払い、バッテリーを乱用しないでください。充電中や使用中に放置しないでください。**

バッテリーパワーデテクターは、3～4.2ボルトの入力電圧範囲を検出できます。JSTソケットが3つ（JST 1.0、JST 2.0、JST 2.0）と、異なるコネクタを持つバッテリーに対応するための2つのバッテリーはんだ付けパッドがあります。このバッテリーパワーデテクターにバッテリーを接続すると、オンボードの4つのLEDが残量をパーセンテージ（0～25%、26～50%、51～75%、76～100%）で表示します。また、バッテリーのコネクタを逆向きに接続した場合、別のLEDが点灯します。

**注意**：同時にテストできるバッテリーは1つだけです。

**注意**：入力電圧が9ボルトを超えると、このバッテリーパワーデテクターが損傷します。

**注意**：充電中にバッテリーを使用しないでください。

### バージョントラッカー ###

| 製品バージョン | リリース日 | サポート状況 | 備考 |
|---|---|---|---|
| バッテリーキット-3.7V 520mAh（初版） | 2016年5月 | サポート中 | なし |

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png) ](https://www.seeedstudio.com/depot/Battery-kit37V-520mAh-p-2646.html)

## 特徴 ##

**バッテリーについて**

- JST 1.0コネクタがあらかじめ取り付けられています

- 出力回路の短絡保護

- コストパフォーマンスに優れています

**バッテリーパワーデテクターについて**

- バッテリーの残量を視覚的に表示

- 異なるバッテリーコネクタに対応する複数のJSTソケット

## 仕様 ##

**バッテリーについて**

| 項目 | 値 |
|--|--|
| 容量 | 520mAh |
| 定格出力電圧（DC） | 3.7ボルト |
| コネクタ | JST 1.0 |
| 最大充電電流 | 520mA |
| 保護機能 | 出力回路の短絡保護 |
| 重量 | 11g |
| 寸法 | 50（幅）×2.5（高さ）×41（奥行き）mm |

**バッテリーパワーデテクターについて**

| 項目 | 値 |
|---|---|
| 入力電圧 | 3～4.2V |
| 動作電流 | 15mA |
| 表示方法 | 4つのLED（詳細は後述） |
| ソケット | 異なるバッテリーコネクタ用の3つのソケットと2つのバッテリーはんだ付けパッド（詳細は後述） |
| 寸法 | 30（幅）×25（奥行き）mm |
| CN1185 | [データシート](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/CN1185_Datasheet.pdf) |
| 重量 | 3.2g |
| 備考 | このモジュールには1つのバッテリーのみ接続してください。入力電圧が9ボルトを超えると、このモジュールが損傷します。 |

### 対応プラットフォーム（バッテリーのみ） ###

| プラットフォーム | Seeeduino/Arduino | Raspberry Pi | Beaglebone | LinkIt ONE |
|--|--|--|--|--|
| サポート状況 | サポート中 | 非サポート | サポート中（[Grove Base Cape for Beaglebone](https://seeeddoc.github.io/Grove_Base_Cape_for_BeagleBone_v2/)が必要） | 非サポート |
| 備考 | 特定のプラットフォームにバージョン番号が記載されていない場合、この製品はそのプラットフォーム内のすべてのバージョンをサポートします。 |||| |

## ハードウェア概要 ##

このセクションでは、バッテリーパワーデテクタのコンポーネントについて説明します。

![](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/img/Battery_kit-3.7V_520mAh_Battery_power_detector_components_description_1200_s.jpg)

- **CN1185**：電圧監視回路。
- **バッテリーはんだ付けパッド**：バッテリーのリード線をはんだ付けするためのパッド。

### パッケージ内容（主要部品） ###

| 部品名 | 数量 |
|---|---|
| リチウムイオンバッテリー | 1個 |
| バッテリーパワーデテクタ | 1個 |

## はじめに ##

以下の画像のようにバッテリーとバッテリーパワーデテクタを接続してください。LEDが点灯している場合、実際の残り電力を示しています。

![](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/img/Battery_kit-3.7V_520mAh_Battery_power_demo_1200_s.jpg)

## 回路図オンラインビューア ##

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery_kit-3.7V_520mAh_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[Eagle]** [回路図（Eagle）ファイル](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery_kit-3.7V_520mAh_Schematics.zip)
- **[PDF]** [バッテリーデテクタ v1.0 PCB](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery%20Detector%20v1.0pcb.pdf)
- **[PDF]** [バッテリーデテクタ v1.0 回路図](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery%20Detector%20v1.0.pdf)
- **[データシート]** [CN1185 データシート](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/CN1185_Datasheet.pdf)
- **[データシート]** [バッテリーデータシート](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Lithium-ion_Battery_3.7V-520mAH_Datasheet.pdf)

## 技術サポートと製品ディスカッション ##

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>