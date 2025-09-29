---
description: Xadowチュートリアル - シェイクシェイク
title: Xadowチュートリアル - シェイクシェイク
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Tutorial_Shaking_Shaking
last_update:
  date: 05/15/2025
  author: shuxu hu
---


このデモでは、以下のものを使用します：

*   Xadow メインボード

*   Xadow OLED

*   Xadow 加速度計

*   Xadow 気圧計

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/img/Untitled.png)

これらをFFCケーブルで接続し、最初のデモの手順を参照して準備を行います。デモ1とは異なり、[ライブラリ: Smile](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/res/SMILE.zip)をダウンロードし、SMILE INOファイルを直接開きます。

このデモの機能：通常時、OLEDは現在の気圧値を表示します。Xadow加速度計を振ると、画面に笑顔が表示されます。

## 注意

コード「smile」をXadowメインボードにアップロードする前に、ArduinoライブラリにOLED_Display12864と[DigitalAccelerometer_ADX345](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/res/DigitalAccelerometer_ADXL345.zip)があることを確認してください。もしない場合は、それらをダウンロードして解凍後、Arduino IDEのライブラリフォルダ（パス: ..\arduino-1.0.1\libraries）に配置してください。また、Arduino環境の「ツール | ボード」メニューからSeeed Xadowを選択することを忘れないでください。

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/img/Demo_2_display_data.jpg)

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/img/Demo_2_display_smile.jpg)

## リソース

[デモ2 SMILEコード](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/res/SMILE.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>