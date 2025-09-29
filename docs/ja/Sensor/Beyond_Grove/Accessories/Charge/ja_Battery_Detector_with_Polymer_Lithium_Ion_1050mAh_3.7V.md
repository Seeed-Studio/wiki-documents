---
description: ポリマーリチウムイオン 1050mAh 3.7V バッテリーデテクター
title: ポリマーリチウムイオン 1050mAh 3.7V バッテリーデテクター
keywords:
- アクセサリー充電
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/img/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V.jpg)

ポリマーリチウムイオン 1050mAh 3.8V バッテリーデテクターには、1050mAhのリチウムイオンバッテリーと、リチウムイオンバッテリーの残量を測定するバッテリーパワーデテクターの2つのアイテムが含まれています。

リチウムイオンバッテリーは非常に薄型で軽量、かつコスト効率が高いです。出力電圧は3.7V（標準）です。また、最大入力電流1050mA、最大入力電圧4.2Vの専用充電器で充電することができます。このバッテリーには事前に取り付けられたJST 2.0コネクターが付属しており、簡単に接続・取り外しが可能です。また、出力短絡に対する過電流保護機能が内蔵されています。**ただし、使用時には注意を払い、バッテリーを乱用しないでください。充電中や使用中に放置しないでください。**

バッテリーパワーデテクターは、入力電圧範囲3～4.2ボルトを検出できます。3つのJSTソケット（JST 1.0、JST 2.0、JST 2.0）と2つのバッテリーはんだ付けパッドがあり、異なるコネクターを持つバッテリーに対応します。バッテリーをこのバッテリーパワーデテクターに接続すると、オンボードの4つのLEDが残りの電力をパーセンテージ（0～25%、26～50%、51～75%、76～100%）で表示します。また、バッテリーのコネクターを逆に接続すると、別のLEDが点灯します。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Battery-Detector-with-Polymer-Lithium-Ion-1050mAh-3.7V-p-2648.html)

:::note

1. 同時にテスト可能なバッテリーは1つのみです。

2. 入力電圧が9ボルトを超えると、このバッテリーパワーデテクターが損傷します。

3. 充電中のバッテリーは使用しないでください。
:::

バージョントラッカー
----------------

| 製品リビジョン                                                        | リリース日 | サポート状況 | 備考 |
|-------------------------------------------------------------------------|--------------|----------------|-------|
| ポリマーリチウムイオン 1050mAh 3.8V バッテリーデテクター（現行バージョン） | 2016年5月     | サポート中      | なし  |

特徴
--------

**バッテリーについて**

- JST 2.0コネクターが事前に取り付けられています
- 出力回路の短絡保護
- コスト効率が高い

**バッテリーパワーデテクターについて**

- バッテリーの残量を視覚的に表示
- 異なるバッテリーコネクターに対応するJSTソケット

仕様
--------------

**バッテリーについて**

| パラメータ                  | 値                                       |
|----------------------------|---------------------------------------------|
| 容量                       | 1050mAh                                    |
| 標準出力電圧（DC）         | 3.7ボルト                                   |
| コネクター                 | JST 2.0                                     |
| 最大充電電流               | 1050mA                                     |
| 保護                       | 出力回路の短絡保護                          |
| 重量                       | 19g、パッケージ全体の重量は33.5g            |
| 寸法                       | 幅48×高さ4.9×奥行45mm                      |

**バッテリーパワーデテクターについて**

| パラメータ         | 値                                                                                                                                          |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| 入力電圧         | 3～4.2V                                                                                                                                  |
| 動作電流         | 15mA                                                                                                                                     |
| 表示方法         | 4つのLED（後述します）                                                                                                                     |
| ソケット         | 異なるバッテリーコネクターに対応する3つのソケットと2つのバッテリーはんだ付けパッド（後述します）                                            |
| 寸法             | 幅30×奥行25mm                                                                                                                            |
| CN1185           | [データシート](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/CN1185_Datasheet.pdf)                                      |
| 重量             | 3.2g                                                                                                                                     |
| 備考             | このモジュールには単一のバッテリーのみ接続してください。入力電圧が9ボルトを超えると、このモジュールが損傷します。 |

対応プラットフォーム（バッテリーのみ）
------------------------

<table>
<tr>
<td>
プラットフォーム
</td>
<td>
Seeeduino/Arduino
</td>
<td>
Raspberry Pi
</td>
<td>
Beaglebone
</td>
<td>
LinkIt ONE
</td>
</tr>
<tr>
<td>
サポート状況
</td>
<td>
サポート中
</td>
<td>
サポート外
</td>
<td>
サポート中（Grove Base Cape for Beaglebone v2が必要）
</td>
<td>
サポート外
</td>
</tr>
<tr>
<td>
備考
</td>
<td colspan="5">
特定のプラットフォームにバージョン番号が記載されていない場合、この製品はそのプラットフォーム内のすべてのバージョンをサポートします。
</td>
</tr>
</table>

ハードウェア概要
-----------------

このセクションでは、バッテリーパワーデテクターのコンポーネントについて説明します。

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/img/Battery_kit-3.7V_520mAh_Battery_power_detector_components_description_1200_s.jpg)

- **CN1185**、電圧監視回路。
- **バッテリーはんだ付けパッド**、バッテリーのリードをはんだ付けするためのもの。

### **パッケージ内容**（主要部品）

| 部品名                 | 数量     |
|------------------------|----------|
| リチウムイオンバッテリー | 1個      |
| バッテリーパワーデテクター | 1個      |

はじめに
---------

以下の画像のように、バッテリーとバッテリーパワーデテクターを接続してください。LEDが*点灯*している場合、実際の電力が残っていることを示しています。

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/img/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/Battery_kit-3.7V_520mAh_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [回路図（Eagle）ファイル](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/Battery_kit-3.7V_520mAh_Schematics.zip)
- [CN1185 データシート](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/CN1185_Datasheet.pdf)
- [バッテリー使用データシート](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V_Battery_Datasheet.pdf)
- [バッテリー安全データシートおよび証明書](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/Lithium-ion_Battery_3.7v-1050_mAh_Safety_Datasheet_and_Certificates.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>