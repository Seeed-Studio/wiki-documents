---
description: Seeeduino Arch
title: Seeeduino Arch
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_Arch
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Arch_01.jpg)

**Seeeduino Arch** は、[mbed](http://mbed.org/handbook/mbed-SDK) 対応の開発ボードで、mbed SDKの利点とArduinoのフォームファクターを組み合わせたものです。Seeeduino Archを使用すると、mbed C/C++ SDK、ライブラリ、最適化されたオンライン開発ツールを利用して迅速にプロトタイプを構築できます。  
Seeeduino Archは標準的なArduinoの外観とGroveコネクタを備えており、既存のシールドやGrove製品をSeeeduino Archに簡単に接続できます。

[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/seeeduino-arch-p-1561.html)  

## 特徴

* mbed対応

       1.オンライン開発ツール

       2.使いやすいC/C++ SDK

       3.多数の公開ライブラリ、プロジェクト

* 標準的なArduino外観、2つのGroveコネクタ

    1.3.3V互換のシールドが利用可能

    2.多数のGroveモジュール

* ドラッグ＆ドロッププログラミング

* NXP LPC11U24 MCU

     1.低消費電力ARM Cortex-M0コア

     2.48MHz、32KBフラッシュ、8KB RAM、4KB EEPROM

     3.USBデバイス、2xSPI、UART、I2C

## 仕様

<table cellspacing="0" width="100%">
<tr><th scope="col">項目</th><th scope="col">典型値</th></tr>
<tr><th scope="row">動作電圧</th><td>7 ~ 12V</td></tr>
<tr><th scope="row">マイクロコントローラ</th><td>LPC11U24</td></tr>
<tr><th scope="row">フラッシュメモリ</th><td>32kB</td></tr>
<tr><th scope="row">EEPROM</th><td>4kB</td></tr>
<tr><th scope="row">RAM</th><td>8kB</td></tr>
<tr><th scope="row">UART</th><td>1</td></tr>
<tr><th scope="row">I2C</th><td>1</td></tr>
<tr><th scope="row">ADCチャンネル</th><td>8</td></tr>
<tr><th scope="row">I/Oピン</th><td>40</td></tr>
<tr><th scope="row">デジタルI/O最大入力電圧</th><td>5.0V</td></tr>
</table>

## ピン配置

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Arch_Pinout.png)

印刷用の**モノクロ版**も用意されています。

## Seeeduino ArchとArduinoの比較

SeeeduinoとArduinoはどちらも迅速なプロトタイピングを作成するためのプラットフォームですが、いくつかの違いがあります。以下の表でそれらを比較することで、より詳しい情報を得ることができます。

<table cellspacing="0" width="100%">
<tr><th scope="col">項目</th><th scope="col">Seeeduino Arch</th><th scope="col">Arduino</th></tr>
<tr><th scope="row">マイクロコントローラ</th><td>ARM Cortex-MシリーズMCU</td><td>主にAVR 8ビットMCU、新しいDue Cortex-M3 MCUファミリーを使用。</td></tr>
<tr><th scope="row">ハードウェア仕様</th><td>標準化されたサイズとピンで簡単にモジュール化されたプロトタイプを構築可能</td><td>標準化されたサイズとピンで簡単にモジュール化されたプロトタイプを構築可能</td></tr>
<tr><th scope="row">開発環境</th><td>コラボレーションや共有が容易なオンライン開発ツール、プロジェクトをローカルにエクスポートして開発やデバッグが可能。強力でありながらシンプル。</td><td>Arduino IDE、使いやすく、シンプルだが機能的。</td></tr>
<tr><th scope="row">開発とデバッグ</th><td>ライブラリのインポート、プロジェクトのエクスポート、バージョン管理、デバッグなどの機能をサポート。</td><td>ライブラリとアプリケーションコードが分離されており、簡単なコードを書くのに適しているが、デバッグ機能はなし。</td></tr>
</table>

Seeeduino Archはハードウェア面でArduinoと互換性があります。以下にそれぞれのピン配置を共有します。

<table cellspacing="0" width="100%">
<tr><th scope="col">Arduino</th><th scope="col">Seeeduino Arch</th><th scope="col">説明</th></tr>
<tr><th scope="row">D0</th><td>P0_18</td><td rowspan="14">デジタルI/O</td></tr>
<tr><th scope="row">D1</th><td>P0_19</td></tr>
<tr><th scope="row">D2</th><td>P0_17</td></tr>
<tr><th scope="row">D3</th><td>P1_17</td></tr>
<tr><th scope="row">D4</th><td>P1_18</td></tr>
<tr><th scope="row">D5</th><td>P1_24</td></tr>
<tr><th scope="row">D6</th><td>P1_25</td></tr>
<tr><th scope="row">D7</th><td>P1_5</td></tr>
<tr><th scope="row">D8</th><td>P1_26</td></tr>
<tr><th scope="row">D9</th><td>P1_27</td></tr>
<tr><th scope="row">D10</th><td>P0_2</td></tr>
<tr><th scope="row">D11</th><td>P1_29</td></tr>
<tr><th scope="row">D12</th><td>P0_8</td></tr>
<tr><th scope="row">D13</th><td>P0_9</td></tr>
<tr><th scope="row">SDA</th><td>P0_5</td><td rowspan="2">I2C</td></tr>
<tr><th scope="row">SCL</th><td>P0_4</td></tr>
<tr><th scope="row">A0</th><td>P0_11</td><td rowspan="7">アナログ</td></tr>
<tr><th scope="row">A1</th><td>P0_12</td></tr>
<tr><th scope="row">A2</th><td>P0_13</td></tr>
<tr><th scope="row">A3</th><td>P0_14</td></tr>
<tr><th scope="row">A4</th><td>P0_16</td></tr>
<tr><th scope="row">A5</th><td>P0_22</td></tr>
<tr><th scope="row">A6</th><td>P0_23</td></tr>
<tr><th scope="row">1-MISO1</th><td>P1_21</td><td rowspan="6">SPI1</td></tr>
<tr><th scope="row">2-SCK</th><td>P1_20</td></tr>
<tr><th scope="row">3-RESET</th><td>P1_23</td></tr>
<tr><th scope="row">4-GND</th><td>/</td></tr>
<tr><th scope="row">5-MOSI</th><td>P1_22</td></tr>
<tr><th scope="row">6-VCC</th><td>/</td></tr>
<tr><th scope="row">1-SWDIO</th><td>P0_15</td><td rowspan="6">2X3 SWDインターフェース</td></tr>
<tr><th scope="row">2-VCC</th><td>/</td></tr>
<tr><th scope="row">3-SWCLK</th><td>P0_10</td></tr>
<tr><th scope="row">4-</th><td>P1_4</td></tr>
<tr><th scope="row">5-nRET</th><td>P0_0</td></tr>
<tr><th scope="row">6-GND</th><td>/</td></tr>
<tr><th scope="row">D+</th><td>USB_DP</td><td rowspan="5">USB&amp;ISP</td></tr>
<tr><th scope="row">D-</th><td>USB_DM</td></tr>
<tr><th scope="row">VBUS</th><td>P0_3</td></tr>
<tr><th scope="row">CONNECT</th><td>P0_6</td></tr>
<tr><th scope="row">ISP</th><td>P0_1</td></tr>
<tr><th scope="row">RX</th><td>P1_14</td><td rowspan="2">UART Grove</td></tr>
<tr><th scope="row">TX</th><td>P1_13</td></tr>
<tr><th scope="row">AREF</th><td>P0_7</td><td>/</td></tr>
</table>

## はじめに

**Seeeduino Arch** はソフトウェア面で **mbed** に対応しています。mbed SDK が提供する包括的なファームウェアライブラリや豊富なサンプルコードを利用することができます。**mbed** プラットフォームや **mbed** SDK に馴染みがない場合は、[こちら](https://mbed.org/handbook/mbed-NXP-LPC11U24-Getting-Started)をクリックして理解を深めてください。

**Seeeduino Arch** は、mbed の無料オンライン IDE と C++ コンパイラを使用できます。このコンパイラは最適化された ARMCC コンパイラエンジンを基盤としており、プログラムを迅速に動作させることができます。また、ソフトウェアのインストールは不要です。プログラムのダウンロードは USB フラッシュドライブを使用するのと同じくらい簡単で、外部プログラマは必要ありません。

オンライン IDE やコンパイラに加えて、ユーザーは ARM Cortex M マイクロコントローラ向けのオフラインコンパイラ/IDE（ARM Embedded GCC、Keil MDK ARM、IAR Embedded Workbench など）を利用することもできます。

さらに、ライブラリの作成は初心者にとっても難しい作業ではありません。[こちら](http://mbed.org/cookbook/Writing-a-Library)をクリックして、mbed ライブラリの作成方法を学ぶことができます。

ここでは、Seeeduino Arch を使用した簡単なデモ「**ウォーターライト**」を紹介します。

### デモ: ウォーターライト

* Seeeduino Arch のアカウントを登録するには、「mbed Enabled」ロゴをクリックしてください。
[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Mbedenabled.jpg)](https://mbed.org/account/login/?next=/start?auth=104000000000000000000002F7F0F640e640d504b45e111da24094a9d300da46&amp;firmware=999999)

* [https://mbed.org/compiler/](https://mbed.org/compiler/) を開くと、mbed のオンライン IDE が表示されます。プログラミングを始める前に、mbed コンパイラの使い方を読むことをお勧めします。
![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Open_Compiler.jpg)

* 「New」をクリックして新しいプログラムを作成し、デバイス「mbed NXP LPC11U24」を選択します。この画像が説明を補足してくれるでしょう。
![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Compiler.jpg)

以下は、Seeeduino Arch の4つのLEDを制御するためのコードです。

```c
#include "mbed.h"
DigitalOut  led1(LED1);
DigitalOut  led2(LED2);
DigitalOut  led3(LED3);
DigitalOut  led4(LED4);


int main() {
while(1) {
led1 = !led1;
wait(0.5);
led2 = !led2;
wait(0.5);
led3 = !led3;
wait(0.5);
led4 = !led4;
wait(0.5);
}
}
```

* コードをコンパイルします。コードにエラーがある場合、エラーが表示され、必要なヘルプが提供されます。このヘルプは非常に役立つでしょう。
![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Error_prompt.jpg)

* コードを正常にコンパイルした後、bin ファイルを保存します。

* 次に、リセットボタンを長押しすると、CRP DISABLD という名前の USB ドライブとして自動的に表示されます。
![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/A_usb_device.jpg)

* CRP DISABLD に移動します。ファームウェアファイルを削除し、waterLights_LPC11U24 bin ファイルを CRP DISABLD に追加します。新しいプログラムをダウンロードした後、マイクロコントローラをリセットして実行を開始することを忘れないでください。これで Seeeduino Arch がウォーターライトプログラムを実行します。ぜひ試してみてください。

mbed C/C++ SDK はソフトウェアプラットフォームと [ライブラリ](http://mbed.org/cookbook/Homepage) を提供しており、Seeeduino Arch にも適用できます。この利用可能なリソースを活用してアプリケーションを構築することができます。また、Seeeduino Arch、シールド、Grove モジュールを組み合わせたプログラムを共有していただけることを楽しみにしています。

**注意:**

MAC または Linux で Seeeduino Arch を使用する場合は、アプリケーションノート --- [USB ISP プログラミング](http://www.lpcware.com/content/nxpfile/an11305-usb-system-programming-lpc11u3xlpc11u2x) をお読みください。

## Windows、Linux、Macでの Seeeduino Arch のプログラミング

Seeeduino Arch には mbed インターフェースがありません。ファームウェアのアップグレードには USB インシステムプログラミング（ISP）を使用します。

USB ISP モードに入るには、Arch をコンピュータに接続し、ボタンを長押しします。すると、「CRP DISABLD」という名前のディスクが表示されます。

* Windowsの場合

1. 「CRP DISABLD」ディスク内の firmware.bin を削除します。

2. 新しいファームウェアをディスクにコピーします。

* Linuxの場合

1. ディスクがマウントされていない場合は、**\{mnt_dir\}** にディスクをマウントします。

2. **dd if=\{new_firmware.bin\} of=\{mnt_dir\}/firmware.bin conv=notrunc**

* Macの場合、ターミナルを使用して以下のスクリプトを実行し、.bin ファイルを Arch にコピーします。

1. **dd if=\{new_firmare.bin\} of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

   必要に応じて、**Automator** アプリケーションを作成し、ファイルをボードにドラッグ＆ドロップで対応できるようにすることもできます。以下のコマンドを使用して "_Run Shell Script_" を作成してください：

   if=$* of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc

   また、`"Pass Input"` オプションを `"to stdin"` から `"as arguments"` に変更する必要があります。これを行わないと、ログに `"The action 'Run Shell Script' encountered an error"` または `"dd: no value specified for if (1)"` というエラーが表示されます。

   改良版のスクリプトは以下の通りです：

   **`dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc`**

   このスクリプトは、ファイルパス内のスペースを処理し、最初に指定されたファイルのみを使用します。

新しいファームウェアを実行するには、ボタンを _非常に_ 素早く押してください。

## オンボードボタンの多機能化

デフォルトでは、オンボードボタンには2つの機能があります：短押しでリセット、長押しで ISP モードに入ります。さらに機能を追加することも可能です！

例えば、[multifunction_for_reset_button](http://developer.mbed.org/users/yihui/code/multifunction_for_reset_button/) を使用すると、以下のような機能を追加できます：

1. シングルクリック - LED1 を点灯

2. ダブルクリック - LED2 を点灯

3. 長押し - リセット

4. クリックしてから電源を入れる - ISP モードに入る

## アプリケーション

* [Seeeduino Arch をデバッグアダプタとして使用して別の Seeeduino Arch をデバッグする](https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/)

* [環境をセンスする](https://mbed.org/users/yihui/notebook/sense-environment/)

* [Grove RTC を使う](https://mbed.org/cookbook/seeed-grove-RTC)

* [Grove - 超音波レンジャーで遊ぶ](https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger)

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/Seeeduino_Arch_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* **[Eagle]**   [Seeeduino Arch Eagle ファイル](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/Seeeduino_Arch_Eagle_files.zip)

* **[PDF]** [Seeeduino_Arch_V1.0 pdf](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/Seeeduino_Arch_V1.0.pdf)

* **[データシート]**  [LPC11U2x データシート](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/LPC11U2x_datasheet.pdf)

* **[PDF]**   [LPC11Uxx ユーザーマニュアル](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/LPC11UxxUserManual.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>