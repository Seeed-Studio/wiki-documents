---
description: Atmel AVRISP STK500 USB ISPプログラマ
title: Atmel AVRISP STK500 USB ISPプログラマ
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Atmel_AVRISP_STK500_USB_ISP_Programmer
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/Avrisp_stk500_usb.jpg)

<!-- <p style=":center"><a href="https://www.seeedstudio.com/depot/atmel-avrisp-stk500-usb-isp-programmer-p-207.html?cPath=132_135" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/depot/atmel-avrisp-stk500-usb-isp-programmer-p-207.html?cPath=132_135" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## 特徴
- 幅広いATMEL AVRマイクロコントローラをサポートします。
- AVR StudioまたはWINAVR (GCC) と連携して動作します。

:::note   
   ATMEL AVR Studio 4.13をダウンロードできない場合は、avrstudio7をダウンロードしてください。最新バージョンのAvrStudioをダウンロードし、ツールでstk500を選択してください。
:::

## 応用アイデア
- AVRプログラミング
- AVRブートローダーの書き込み

## 対応デバイス
|                       |                       |                     |                       |
|-----------------------|-----------------------|---------------------|-----------------------|
| AT90S1200             | AT90S2313             | AT90S2323           | AT90S2343             |
| AT90S4433             | AT90S8515             | AT90S8535           | ATmega128             |
| ATmega1280            | ATmega1281            | ATmega128RZAV       | ATmega128RZBV         |
| ATmega16              | ATmega161             | ATmega162           | ATmega163             |
| ATmega164P            | ATmega164P Automotive | ATmega165           | ATmega168             |
| ATmega168 Automotive  | ATmega168P            | ATmega169           | ATmega16A             |
| ATmega16U4            | ATmega2560            | ATmega2561          | ATmega256RZAV         |
| ATmega256RZBV         | ATmega32              | ATmega323           | ATmega324P            |
| ATmega324P automotive | ATmega325             | ATmega3250          | ATmega3250P           |
| ATmega325P            | ATmega328P            | ATmega329           | ATmega3290            |
| ATmega3290P           | ATmega329P            | ATmega32A           | ATmega32U4            |
| ATmega48              | ATmega48 Automotive   | ATmega48P           | ATmega64              |
| ATmega640             | ATmega644             | ATmega644P          | ATmega644P Automotive |
| ATmega645             | ATmega6450            | ATmega649           | ATmega6490            |
| ATmega8535            | ATmega88              | ATmega88 Automotive | ATmega88P             |
| ATtiny12              | ATtiny13              | ATtiny13A           | ATtiny15L             |
| ATtiny2313            | ATtiny26              | ATtiny88            |                       |

## ハードウェア接続
<!-- <p style=":center"><a target="_blank"><img src="https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-1.JPG"  /></a></p> -->
![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-1.JPG)

<!-- <p style=":center"><a target="_blank"><img src="https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-2.jpg"  /></a></p> -->
![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-2.jpg)

## 例: Arduino UNOにブートローダーを書き込む

- 1. 接続方法: 上記の画像を参照してください。
- 2. CDに含まれるAVRISPドライバをインストールします。
- 3. AVR STUDIO4.19をダウンロードしてインストールします。

:::warning
    CDにはAVR STUDIO4.13ソフトウェアが含まれています。
:::
- 4. Arduino UNOにブートローダーを書き込む

    - ステップ1. AVR STUDIO4.19を開きます。
    - ステップ2. STK500に接続します。

        ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP0.jpg)

    - ステップ3. プラットフォームを選択します。

        ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-3.jpg)

    - ステップ4. デバイス「ATmega328P」を選択します。
    ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-4.jpg)

    - ステップ5. ブートローダーを選択 > パス:\arduino-1.0\hardware\arduino\bootloaders\optiboot\optiboot_atmega328.hex
    ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-5.png)

    - ステップ6. プログラムを実行します。

## リソース

- [USBドライバ](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/USB+Driver/CH341SER.EXE)
- [aStudio4b528](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/aStudio4b528/aStudio413b528.exe)
- [AVRISPユーザーガイド](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/res/AVRISP.chm)

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>