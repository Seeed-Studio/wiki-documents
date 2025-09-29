---
description: Xadow - 1.54インチタッチスクリーン
title:  Xadow - 1.54インチタッチスクリーン
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_1.54_inch_Touchscreen
last_update:
  date: 05/15/2025
  author: shuxu hu
---


---
もし、世界初のオープンソースでモジュール式の電話であるRephoneを使用したことがある、または聞いたことがあるなら、これから紹介する製品に馴染みがあるでしょう。そうです！Xadow 1.54インチタッチスクリーンは、まさにRephoneで使用されているタッチスクリーンです。

このTFTディスプレイは240 x 240ピクセルを含み、それぞれを個別に制御して最大262K色を表示できます。ディスプレイの上には静電容量式タッチスクリーンの層があり、ディスプレイの中央に29.4mm x 29.4mmのアクティブエリアを提供します。この単一タッチスクリーンは、通常の操作中にアクティブエリア内のどこでも指の押下を検出できます。TFTドライバにはST7789S ICドライバが内蔵されており、2ビットデータと4ビット制御のシリアルインターフェースを使用します。一方、静電容量式タッチスクリーンコントローラはI2Cを使用します。

![](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/images/Xadow_1.54%E2%80%99%E2%80%99_Touchscreen.JPG)

:::note
    Xadow 1.54インチタッチスクリーンのライブラリにいくつかの変更を加えています。詳細については**注意事項**セクションを参照してください。
:::

### バージョントラッカー

|製品 |バージョン|	リリース日|	サポート状況|	備考|
|---|---|---|---|---|
|Xadow 1.54インチタッチスクリーン|(v1.0, 旧バージョン)|	2015年10月	|サポート中	|なし|
|Xadow 1.54インチタッチスクリーン|(v1.1, 最新バージョン)|	2016年6月	|サポート中|	なし|

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Xadow-1.54-inch-Touchscreen-p-2553.html)

## 特徴
---
- 240 x 240 解像度
- 最大262K色を表示可能
- 4つの2mm/0.9インチ取り付け穴
- 簡単に接続可能なXadowコネクタ内蔵
- DIY電話プロジェクトに最適

## 仕様
---

|一般|値|
|---|---|
|**TFTドライバ**|	ST7789S|
|**タッチスクリーン** |タイプ	静電容量式|
|**バックライト**|	3段階調整可能な白色LED|
|**消費電流**|	フルバックライト時約100mA|
|**解像度**|240 × 240 ピクセル|
|**コネクタ**|2 × 35ピンXadowコネクタ（Xadow / GSM+BLE & Xadow Audio用）|
|**インターフェース**| TFTディスプレイ用4線式シリアルインターフェース / タッチスクリーン用I2C|

**寸法**

|項目 |単位(mm)|単位(inch)|
|---|---|---|
|基板 | 50.22mm × 47.21mm   |1.98” × 1.86”|
|タッチスクリーン | 38.1mm × 37.8mm |1.51”× 1.51”|
|アクティブエリア | 27.72mm × 27.72mm  |1.09” × 1.09”|
|取り付け穴|4 × 2mm|4 x 0.9”|

## ハードウェア概要
---
![](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/images/Xadow_1.54%E2%80%99%E2%80%99_Touchscreen.png)

:::warning
    コントローラ（例：Xadow GSM+BLE）は**右側**のポートに、オーディオモジュールは**左側**のポートに挿入してください。
:::

## 注意事項
---
- 製品は見た目ほど頑丈ではないため、温度や湿度の急激な変化がパネルの故障を引き起こす可能性があるため、安定した環境で使用してください。
- パネル表面を清潔に保ち、表面に接着剤を付けないようにしてください。画面を清掃する必要がある場合は、中性洗剤またはイソプロピルアルコールを使用した清潔で柔らかい布をお勧めします。
- Xadow 1.54インチタッチスクリーンの新しいバージョン用にライブラリにいくつかの変更を加えています。Xadow 1.54インチタッチスクリーンv1.1を使用している場合：
  - JavaScript、Lua、Arduinoの開発環境、またはRePhone Create Kitのソースコードを使用する場合、対応する行`#define _TOUCH_SCREEN_V1_0_`をコメントアウトし、行`//#define _TOUCH_SCREEN_V1_1_`をアンコメント（有効化）してください。対応する行は以下にあります：
    - https://github.com/Seeed-Studio/Arduino_IDE_for_RePhone/blob/master/hardware/arduino/mtk/libraries/LDisplay/utility/lcd_sitronix_st7789s.h
    - https://github.com/Seeed-Studio/JavaScript_for_RePhone/blob/master/src/lcd_sitronix_st7789s.h
    - https://github.com/Seeed-Studio/Lua_for_RePhone/blob/master/src/lcd_sitronix_st7789s.h
    - https://github.com/WayenWeng/RePhone_Create_Kit_Source_Code/blob/master/RePhone_Create_Source_Code/lcd_sitronix_st7789s.h
  - RePhone Create Kitの.VXPファイルの場合、以下の行を変更してください：`App=C:\MRE\RePhone_Create_Kit_v6_4_TP_v1_x.vxp`を`App=C:\MRE\RePhone_Create_Kit_v6_4_TP_v1_1.vxp`に変更してください。詳細は以下を参照してください：
    - https://github.com/WayenWeng/RePhone_Create_Kit_VXP/blob/master/RePhone%20Create%20Kit%20VXP/autostart.txt
  - Eclipseの開発環境では、何も変更する必要はありません。

## Rephone コミュニティ
---
[![](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

私たちは、支援者（RePhone ユーザー）が集まり、温かく快適に RePhone について会話し、技術的な問題を議論し、アイデアやプロジェクトを共有し、将来のモジュール開発に関するフィードバックを提供できる場所を探してきました。そして、ここに [RePhone コミュニティ](https://community.seeedstudio.com/discover.html?t=RePhone) が誕生しました。

今すぐ [RePhone コミュニティ](https://community.seeedstudio.com/discover.html?t=RePhone) に参加しましょう！一緒に答えを探し、面白いものを作り、お互いを気遣い、経験を共有しましょう。


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/resources/202000724_PCBA%3BXadow%201.54''Touchscreen%20v1.0%20schematic%20files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---
Xadow 1.54インチタッチスクリーンの回路図は以下のリンクから提供されています：

- [Xadow 1.54インチタッチスクリーン回路図ファイル](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/resources/202000724_PCBA%3BXadow%201.54''Touchscreen%20v1.0%20schematic%20files.zip)

TFTディスプレイと静電容量式タッチスクリーンに関する詳細情報はこちらをご覧ください：

- [TFTディスプレイのデータシート](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/res/Datasheet-Capacitive_touchscreen.pdf)
- [静電容量式タッチスクリーンのデータシート](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/res/TFT_Display.rar)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、スムーズな体験を提供するため、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>