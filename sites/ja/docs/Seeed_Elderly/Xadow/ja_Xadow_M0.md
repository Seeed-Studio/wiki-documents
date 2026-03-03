---
description: Xadow - M0
title: Xadow - M0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_M0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Xadowm0.jpg)

<!-- Xadow - M0は、[Xadow]()フォームファクターを持つmbed対応の開発ボードです。[Xadow]()は、センサーやディスプレイなどを含む柔軟な電子モジュールのシリーズです。複数のXadowモジュールを連結して、インタラクティブなオブジェクトを作成できます。 -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-M0-mbed-enabled-ARM-Cortex-M0-board-for-Rapid-Prototyping-p-1880.html)

## 特徴
---
- mbed対応
 - オンライン開発ツール
 - 使いやすいC/C++ SDK
 - 多数の公開ライブラリとプロジェクト
- Xadowフォームファクター
 - 非常に小型で柔軟
 - カスケード接続
- ドラッグ＆ドロッププログラミング
- NXP LPC11U35 MCU
 - 低消費電力ARM Cortex-M0コア
 - 48MHz、64KBフラッシュ、10KB RAM、4KB EEPROM
 - USBデバイス、2xSPI、UART、I2C
- 加速度計統合: ADXL345

## 仕様
---
- 動作電圧: 3.3V
- IOピンあたりのDC電流: 20mA
- デジタルI/Oピン: 16
- アナログ入力チャンネル: 2
- 動作温度: -20~70 ℃
- 寸法: 25.43mm x 20.35mm

## ピン配置
---
![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Xadow_M0_Pinout.png)

## 始め方
---
1. このリンクをクリックしてmbedにサインアップまたはログインし、xadow_m0_blinkyプログラムをmbedオンラインコンパイラにインポートします。

![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Import_xadow_m0_blinky.png)

2. mbedオンラインIDEで「Compile」（またはCTRL + D）をクリックしてコードをコンパイルし、バイナリファイルをダウンロードします。

![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Compile_mbed_program.png)

3. ボードをコンピュータに接続し、**ボタンを長押し**すると、**CRP DISABLD**という名前のUSBドライブが表示されます。

4. CRP DISABLDドライブ内の**firmware.bin**ファイルを削除し、ダウンロードしたファイルをドライブにコピーします。

5. **ボタンを短押し**すると、プログラムが実行され、LEDが点滅します。

**main.cpp**を開いてコードを変更することができます。例えば、以下のコードを使用してLEDを0.1秒ごとに点滅させることができます。
```
#include "mbed.h"

DigitalOut blue(P0_20);

int main() {
    while(1) {
        blue = 1;         // LEDを点灯します。
        wait(0.1);        // 0.1秒待ちます。
        blue = 0;         // LEDを消灯します。
        wait(0.1);        // 0.1秒待ちます。
    }
}
```

## オンボードボタンの多機能化
---
デフォルトでは、オンボードボタンには2つの機能があります：短押しでリセット、長押しでISPモードに入ります。さらに機能を追加することも可能です！

例えば、[multifunction_for_reset_button](https://developer.mbed.org/users/yihui/code/multifunction_for_reset_button/)を使用して以下を実現できます：
- シングルクリック - LED1を点灯
- ダブルクリック - LED2を点灯
- 長押し - リセット
- クリックしてから電源オン - ISPモードに入る

## Windows、Linux、Macでのプログラミングアーキテクチャ
---
Archにはmbedインターフェースがありません。USBインシステムプログラミング（ISP）を使用してファームウェアをアップグレードします。

USB ISPモードに入るには、Archをコンピュータに接続し、ボタンを長押しします。その後、「CRP DISABLD」という名前のディスクが表示されます。
- Windowsの場合
  1. 「CRP DISABLD」ディスク内のfirmware.binを削除します。
  2. 新しいファームウェアをディスクにコピーします。
- Linuxの場合
  1. ディスクがマウントされていない場合、`{mnt_dir}`にディスクをマウントします。
  2. **dd if=`{new_firmware.bin}` of=`{mnt_dir}`/firmware.bin conv=notrunc**
- Macの場合、ターミナルを使用して以下のスクリプトを実行し、.binファイルをArchにコピーします。
  1. **dd if=`{new_firmare.bin}` of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

また、**Automator**アプリケーションを作成して、ファイルをボードにドラッグ＆ドロップで対応させることもできます。「Run Shell Script」を作成し、以下のコマンドを使用します：
dd if=$* of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc

さらに、「Pass Input」オプションを「to stdin」から「as arguments」に変更する必要があります。これを行わないと、「The action 'Run Shell Script' encountered an error」や「dd: no value specified for if (1)」というエラーがログに表示されます。

改良版のスクリプトは以下の通りです：
- **dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

これにより、ファイルパス内のスペースを処理し、最初のファイルのみを使用します。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_M0/res/Xadow_M0_Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- [File:Xadow M0 Schematic.zip](https://files.seeedstudio.com/wiki/Xadow_M0/res/Xadow_M0_Schematic.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>