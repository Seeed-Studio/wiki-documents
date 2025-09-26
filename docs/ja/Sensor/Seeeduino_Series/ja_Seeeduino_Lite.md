---
description: Seeeduino Lite
title: Seeeduino Lite
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_Lite
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/400px-Lite_01.jpg)

Seeeduino LiteはATmega32U4をベースとしたマイクロコントローラーです。Arduino Leonardoと同様に、USBからシリアル通信に必要なセカンダリプロセッサを省略しています。このため、Seeeduino LiteはコンピューターにキーボードやマウスのようなUSBデバイスとして認識されます。Leonardoを基にして、Seeeduinoシリーズのカスタム詳細をSeeeduino Liteに統合しました。例えば、動作電圧の選択、オンボードのGroveコネクタなどです。20個のデジタルI/O（そのうち7つはPWM出力可能）、マイクロUSB接続、電源ジャック、ICSPヘッダー、リセットボタンを備えています。マイクロコントローラーをサポートするために必要なものがすべて含まれており、USBケーブルでコンピューターに接続するか、AC-DCアダプターで電源を供給するだけで使用を開始できます。

[![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html)


## 仕様
---
- マイクロコントローラー: ATmega32u4
- 動作電圧: 5V
- 入力電圧（推奨）: 7-12V
- 入力電圧（制限値）: 6-20V
- デジタルI/Oピン: 20
- PWMチャンネル: 7
- アナログ入力チャンネル: 12
- I/OピンあたりのDC電流: 40 mA
- 3.3VピンのDC電流: 50 mA
- フラッシュメモリ: 32 KB (ATmega32u4) うち4 KBはブートローダーで使用
- SRAM: 2.5 KB (ATmega32u4)
- EEPROM: 1 KB (ATmega32u4)
- クロックスピード: 16 MHz

## インターフェース
---
![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Seeeduino_Lite_Intrface_Function.jpg)

**U1:** 78M05 IC、三端子正電圧レギュレーター。

**U3:** LD1117 IC、最大800mAの出力電流を提供可能な低ドロップ電圧レギュレーター。

**U5:** Atmega32U4 IC、32KバイトのISPフラッシュとUSBコントローラーを備えた8ビットAVRマイクロコントローラー。


## ドライバーインストール
---

:::note
    Arduinoを初めて使用する場合は、[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino)を参照することを強くお勧めします。
:::


ドライバーファイルを以下からダウンロードしてください：[https://github.com/Seeed-Studio/Signed_USB_Serial_Driver](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver)。

Seeeduino LiteをマイクロUSBケーブルでコンピューターに接続します。

新しいハードウェアのプロンプトが表示されるのを待ちます。インストーラーが自動的に起動しない場合は、Windowsデバイスマネージャーに移動し、Seeeduino Liteのリストを見つけます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Unknow_Device.jpg)

右クリックして「ドライバーの更新」を選択します。自動インストールまたは特定の場所からインストールするかを尋ねられたら、「コンピューターを参照してドライバーソフトウェアを検索」を選択します。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Update_Driver.jpg)

「これらの場所で最適なドライバーを検索する」を選択し、「検索にこの場所を含める」チェックボックスをオンにします。「参照」ボタンをクリックして、ダウンロードしたドライバーの場所に移動します。ドライバーフォルダーを選択して「OK」をクリックします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Browse_Driver_Location.jpg)

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Successfully_Update_Driver.jpg)

Arduinoのパス内の2つのファイルを置き換えます。Arduino-1.0.1/hardware/arduino/cores/arduinoディレクトリを開き、新しいUSBCore.cppでファイルUSBCore.cppを置き換えます。そして、Arduino-1.0.1/hardware/arduinoパス内のboards.txtを新しいboards.txtで置き換えます。これで、他のArduinoボードと同様にSeeeduino Liteをプログラムして使用することができます。



## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Seeeduino_Lite_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---
- [Seeeduino Lite Eagle File](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Seeeduino_Lite_Eagle_File.zip).
- [新しいboards.txt](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Boards.zip).
- [新しいUSBCore.cpp](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Boards.zip).
- [Lite Driver File](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Signed_USB_Serial_Driver-master.zip).

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>