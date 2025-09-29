---
description: ポリマーリチウムイオン 5100mAh 3.8V バッテリーデテクター
title: ポリマーリチウムイオン 5100mAh 3.8V バッテリーデテクター
keywords:
- アクセサリー 充電
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/img/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_700_s.jpg)

ポリマーリチウムイオン 5100mAh 3.8V バッテリーデテクターには、1050mAhリチウムイオンバッテリーと、リチウムイオンバッテリーの残量を測定するバッテリーパワーデテクターの2つのアイテムが含まれています。

リチウムイオンバッテリーは非常に薄型で軽量、かつコスト効率が高いです。公称電圧は3.8Vを出力します。また、最大入力電流5100mA、最大入力電圧4.2Vの専用充電器で充電することができます。このバッテリーには、便利に着脱可能なJST 2.0コネクタが事前に取り付けられています。また、出力短絡に対する過電流保護機能が内蔵されています。**ただし、使用時には注意を払い、バッテリーを乱用しないでください。充電中や使用中に放置しないでください。**

バッテリーパワーデテクターは、3～4.2ボルトの入力電圧範囲を検出できます。JST 1.0、JST 2.0、JST 2.0の3つのJSTソケットと、異なるコネクタを持つバッテリーに対応する2つのバッテリーはんだ付けパッドがあります。バッテリーをこのバッテリーパワーデテクターに接続すると、オンボードの4つのLEDが残りの電力をパーセンテージ（0–25%、26–50%、51–75%、76–100%）で表示します。また、バッテリーのコネクタを逆に接続した場合、別のLEDが点灯します。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Battery-Detector-with-Polymer-Lithium-Ion-5100mAh-38V-p-2647.html)

:::note

1. 同時にテストできるバッテリーは1つだけです。

2. 入力電圧が9ボルトを超えると、このバッテリーパワーデテクターが損傷します。

3. 充電中にバッテリーを使用しないでください。
:::

バージョントラッカー
----------------

| 製品リビジョン                                                        | リリース日 | サポート状況 | 備考 |
|-------------------------------------------------------------------------|------------|--------------|------|
| ポリマーリチウムイオン 1050mAh 3.8V バッテリーデテクター（現行バージョン） | 2016年5月  | サポート中   | なし |

特徴
--------

**バッテリー用**

- JST 2.0コネクタが事前に取り付け済み
- 出力回路の短絡保護
- コスト効率が高い

**バッテリーパワーデテクター用**

- バッテリーの残量を視覚的に表示
- 異なるバッテリーコネクタに対応するJSTソケット

仕様
--------------

**バッテリー用**

| パラメータ                  | 値                                         |
|----------------------------|---------------------------------------------|
| 容量                       | 5100mAh                                    |
| 公称出力電圧（DC）         | 3.8ボルト                                  |
| コネクタ                   | JST 2.0                                     |
| 最大充電電流               | 2500mA                                     |
| 保護                       | 出力回路の短絡保護                         |
| 重量                       | 76g、パッケージ全体の重量は91g             |
| 寸法                       | 59.8（幅）×10.8（高さ）×59.5（奥行）mm     |

**バッテリーパワーデテクター用**

| パラメータ         | 値                                                                                                                                     |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| 入力電圧          | 3 – 4.2V                                                                                                                              |
| 動作電流          | 15mA                                                                                                                                   |
| 表示方法          | 4つのLED（詳細は後述）                                                                                                                 |
| ソケット           | 異なるバッテリーコネクタに対応する3つのソケットと2つのバッテリーはんだ付けパッド（詳細は後述）                                         |
| 寸法              | 30（幅）×25（奥行）mm                                                                                                                  |
| CN1185            | [データシート](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/CN1185_Datasheet.pdf)       |
| 重量              | 3.2g                                                                                                                                   |
| 備考              | このモジュールには1つのバッテリーのみ接続してください。入力電圧が9ボルトを超えると、このモジュールが損傷します。                          |

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

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/img/Battery_kit-3.7V_520mAh_Battery_power_detector_components_description_1200_s.jpg)

- **CN1185**、電圧監視回路。
- **バッテリーはんだ付けパッド**、バッテリーのリード線をはんだ付けするためのもの。

### **パッケージ内容**（主要部品）

| 部品名                  | 数量 |
|------------------------|------|
| リチウムイオンバッテリー | 1個   |
| バッテリーパワーデテクター | 1個   |

Getting Started  
---------------  

バッテリーとバッテリーパワーデテクターを以下の画像のように接続してください。LEDが点灯している場合、実際の電力が残っていることを示しています。  

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/img/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_700_s.jpg)  


## 回路図オンラインビューア  

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/110060467_Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_Battery_Power_Detector.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>  
</div>  

リソース  
---------  

- [回路図(Eagle)ファイル](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/110060467_Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_Battery_Power_Detector.zip)  
- [CN1185 データシート](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/CN1185_Datasheet.pdf)  
- [バッテリーデータシート](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_Battery_Datasheet.pdf)  
- [このバッテリーの認証および試験報告書](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/Certifications_and_Test_Report.zip)  

## 技術サポートと製品ディスカッション  

弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。  

<div class="button_tech_support_container">  
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>  
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>  
</div>  

<div class="button_tech_support_container">  
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>  
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>  
</div>  