---
description: Xadow - OLED 128*64
title:  Xadow - OLED 128*64
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xado_OLED_128multiply64
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xado_OLED_128multiply64/img/Xadow_OLED.jpg)

OLEDの利点はその消費電力です。E-inkに加えて、OLEDはおそらく最もエネルギー効率の良いスクリーンです。128x64のOLEDスクリーンは非常にクールです。このモジュールは最も包括的なソフトウェアサポートを備えており、このスクリーン上で簡単に好きなパターンを描くことができます。全金属製のXadow時計のように見えるとき、私が嘘をついていないことがわかるでしょう。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-OLED-0.96-p-1520.html)

## 仕様
---
*   電源電圧 (VCC)：3.3V
*   表示色: 白
*   ドットマトリックス: 128*64
*   動作温度:  -20~70 ℃
*   寸法: 25.43mm x 20.35mm
*   接続方式: I2C (アドレス 0x3C)

:::caution
    注意: OLEDに強い衝撃やストレスを与えると、スクリーンが故障する原因になります。
:::
## デモンストレーション
---
強力なライブラリファイルに基づいて、スクリーン上にさまざまなパターンを表示することができます。

**ハードウェアのインストール:**

![](https://files.seeedstudio.com/wiki/Xado_OLED_128multiply64/img/XadowOLEDUsage.jpg)

注意: Xadow OLEDをXadowメインボードに接続する際には、接続方向に注意してください。接続方法は、1つのXadowモジュールの未充填の角を別のモジュールの直角部分に接続する必要があります（各Xadowモジュールの4つの角を参照してください）。

**コードのアップロード:**

OLEDライブラリをダウンロードしてArduinoライブラリにインストールします。次に、以下のパスでコードを開きます: Files-&gt;Examples-&gt;OLED_Display12864-&gt;examples。例えば、OLED_Bitmap_Inverse_Hello_Worldを選択すると、OLEDスクリーンに「Hello World」が表示されます。

![](https://files.seeedstudio.com/wiki/Xado_OLED_128multiply64/img/XadowOLEDUsage2.JPG)


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xado_OLED_128multiply64/res/Xadow_OLED.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース
---
[Xadow OLED Eagleファイル](https://files.seeedstudio.com/wiki/Xado_OLED_128multiply64/res/Xadow_OLED.zip)

[Xadow OLEDライブラリ](https://files.seeedstudio.com/wiki/Xado_OLED_128multiply64/res/SeeedOLED03142012.zip)

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>