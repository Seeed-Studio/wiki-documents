---
description: Grove - FM レシーバー
title: Grove - FM レシーバー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-FM_Receiver
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - FM Receiver
category: Sensor
bzurl: https://seeedstudio.com/Grove-FM-Receiver-p-1841.html
oldwikiname: Grove_-_FM_Receiver
prodimagename: Grove_FM_Receiver_Photo.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/Grove FM Receiver.jpg
surveyurl: https://www.research.net/r/Grove-FM_Receiver
sku: 107020005
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_linkit, plat_pi, plat_bbg
--- -->

![](https://files.seeedstudio.com/wiki/Grove-FM_Receiver/img/Grove_FM_Receiver_Photo.jpg)

Grove - FM レシーバーは広帯域FMレシーバーモジュールです。このモジュールはSX6119をベースにしており、アンプ、VCO、フィルタ、デモジュレータを内蔵した真のシングルチップ音声FMレシーバーを提供します。多機能ボタンにより、ユーザーはより便利に操作できます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-FM-Receiver-p-1841.html)

特徴
--------

- Groveインターフェース
- 64 MHzから108 MHzのチューニング範囲を持つFMレシーバー（東ヨーロッパ（OIRT）、日本、ヨーロッパ、米国のバンドをカバー）
- 低消費電力
- 多機能ボタン
- LEDインジケーター
- ヘッドセットインターフェース

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリ/デモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

ハードウェア概要
------------------

![](https://files.seeedstudio.com/wiki/Grove-FM_Receiver/img/Grove-FM_v2.0_Top.jpg)

- ①：ヘッドセットインターフェース：16Ωまたは32Ωのイヤホンまたはオーディオを駆動可能。
- ②：多機能ボタン：音量調整およびチャンネル選択。

  - 中央：FMオン/オフ（1秒間長押し）
  - 上：音量を上げる
  - 下：音量を下げる
  - 左：下方向に検索
  - 右：上方向に検索

- ③：Groveインターフェース
- ④：LEDインジケーター

  - FMオフ：LED消灯
  - FMオン：LED点灯
  - FM検索中：LED点滅

使用方法
-----

**部品リスト：**

- Grove - USB電源
- Grove - FMレシーバー
- ミニケーブル
- オーディオ

![](https://files.seeedstudio.com/wiki/Grove-FM_Receiver/img/Grove-FM_Receiver_Photo.jpg)

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-FM_Receiver/res/Grove-FM_Receiver_v1.0_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
--------

- [Grove - FM Receiver Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-FM_Receiver/res/Grove-FM_Receiver_v1.0_eagle.zip)
- [PDF形式の回路図](https://files.seeedstudio.com/wiki/Grove-FM_Receiver/res/Grove-FM_Receiver_v1.0_sch_pdf.pdf)
- [SX6119のデータシート](https://files.seeedstudio.com/wiki/Grove-FM_Receiver/res/SX6119_收音IC_datasheet.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_FM_Receiver から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>