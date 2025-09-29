---
description: Seeeduino Arch V1.0
title: Seeeduino Arch V1.0
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_Arch_V1.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/img/Arch_01.jpg)

**Seeeduino Arch** は、[mbed](http://mbed.org/handbook/mbed-SDK) 対応の開発ボードで、mbed SDK の利点と Arduino フォームファクタを組み合わせたものです。Seeeduino Arch を使用すると、mbed C/C++ SDK、ライブラリ、およびオンライン開発ツールを活用して迅速にプロトタイプを構築できます。  
Seeeduino Arch は標準的な Arduino の外観と Grove コネクタを備えており、既存のシールドや Grove 製品を簡単に接続できます。

[![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/seeeduino-arch-p-1561.html)

## 特徴

*   mbed 対応

    1. オンライン開発ツール  
    2. 使いやすい C/C++ SDK  
    3. 多数の公開ライブラリ、プロジェクト  

*   標準的な Arduino 外観、2つの Grove コネクタ

    1. 3.3V 対応のシールドが利用可能  
    2. 多数の Grove モジュール  

*   ドラッグ＆ドロッププログラミング

*   NXP LPC11U24 MCU

    1. 低消費電力 ARM Cortex-M0 コア  
    2. 48MHz、32KB フラッシュ、8KB RAM、4KB EEPROM  
    3. USB デバイス、2xSPI、UART、I2C  

## 仕様
---
<table cellspacing="0" width="80%">
<tr>
<th scope="col">項目</th>
<th scope="col">仕様</th>
</tr>
<tr>
<th scope="row">動作電圧</th>
<td>7 ~ 9V</td>
</tr>
<tr>
<th scope="row">マイクロコントローラ</th>
<td>LPC11U24</td>
</tr>
<tr>
<th scope="row">フラッシュメモリ</th>
<td>32kB</td>
</tr>
<tr>
<th scope="row">EEPROM</th>
<td>4kB</td>
</tr>
<tr>
<th scope="row">RAM</th>
<td>8kB</td>
</tr>
<tr>
<th scope="row">UART</th>
<td>1</td>
</tr>
<tr>
<th scope="row">I2C</th>
<td>1</td>
</tr>
<tr>
<th scope="row">ADC チャンネル</th>
<td>8</td>
</tr>
<tr>
<th scope="row">I/O ピン</th>
<td>40</td>
</tr>
</table>

## ピン配置
---
![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/img/Arch_Pinout.png)

## Seeeduino Arch と Arduino の比較
---
Seeeduino と Arduino はどちらも迅速なプロトタイピングを作成するためのプラットフォームですが、それぞれに違いがあります。以下の表でそれらを比較してみましょう。

<table cellspacing="0" width="100%">
<tr>
<th scope="col">項目</th>
<th scope="col">Seeeduino Arch</th>
<th scope="col">Arduino</th>
</tr>
<tr>
<th scope="row">マイクロコントローラ</th>
<td>ARM Cortex-M シリーズ MCU</td>
<td>主に AVR 8ビット MCU、新しい Due Cortex-M3 MCU ファミリを使用</td>
</tr>
<tr>
<th scope="row">ハードウェア仕様</th>
<td>モジュール化されたプロトタイプを簡単に構築するための標準化されたサイズとピン</td>
<td>モジュール化されたプロトタイプを簡単に構築するための標準化されたサイズとピン</td>
</tr>
<tr>
<th scope="row">開発環境</th>
<td>コラボレーションや共有が容易なオンライン開発ツール。プロジェクトをローカルにエクスポートして開発やデバッグが可能。強力でありながらシンプル。</td>
<td>Arduino IDE、使いやすく、シンプルだが機能的。</td>
</tr>
<tr>
<th scope="row">開発とデバッグ</th>
<td>ライブラリのインポート、プロジェクトのエクスポート、バージョン管理、デバッグなどの機能をサポート。</td>
<td>ライブラリとアプリケーションコードが分離されており、シンプルなコードの記述に適しているが、デバッグ機能はなし。</td>
</tr>
</table>

Seeeduino Arch はハードウェア面で Arduino と互換性があります。以下にそれぞれのピン配置を共有します。

<table cellspacing="0" width="100%">
<tr>
<th scope="col">Arduino</th>
<th scope="col">Seeeduino Arch</th>
<th scope="col">説明</th>
</tr>
<tr>
<th scope="row">D0</th>
<td>P0_18</td>
<td rowspan="14">デジタル I/O</td>
</tr>
<tr>
<th scope="row">D1</th>
<td>P0_19</td>
</tr>
<tr>
<th scope="row">D2</th>
<td>P0_17</td>
</tr>
<tr>
<th scope="row">D3</th>
<td>P1_17</td>
</tr>
<tr>
<th scope="row">D4</th>
<td>P1_18</td>
</tr>
<tr>
<th scope="row">D5</th>
<td>P1_24</td>
</tr>
<tr>
<th scope="row">D6</th>
<td>P1_25</td>
</tr>
<tr>
<th scope="row">D7</th>
<td>P1_5</td>
</tr>
<tr>
<th scope="row">D8</th>
<td>P1_26</td>
</tr>
<tr>
<th scope="row">D9</th>
<td>P1_27</td>
</tr>
<tr>
<th scope="row">D10</th>
<td>P0_2</td>
</tr>
<tr>
<th scope="row">D11</th>
<td>P1_29</td>
</tr>
<tr>
<th scope="row">D12</th>
<td>P0_8</td>
</tr>
<tr>
<th scope="row">D13</th>
<td>P0_9</td>
</tr>
<tr>
<th scope="row">SDA</th>
<td>P0_5</td>
<td rowspan="2">I2C</td>
</tr>
<tr>
<th scope="row">SCL</th>
<td>P0_4</td>
</tr>
<tr>
<th scope="row">A0</th>
<td>P0_11</td>
<td rowspan="7">アナログ</td>
</tr>
<tr>
<th scope="row">A1</th>
<td>P0_12</td>
</tr>
<tr>
<th scope="row">A2</th>
<td>P0_13</td>
</tr>
<tr>
<th scope="row">A3</th>
<td>P0_14</td>
</tr>
<tr>
<th scope="row">A4</th>
<td>P0_16</td>
</tr>
<tr>
<th scope="row">A5</th>
<td>P0_22</td>
</tr>
<tr>
<th scope="row">A6</th>
<td>P0_23</td>
</tr>
<tr>
<th scope="row">1-MISO1</th>
<td>P1_21</td>
<td rowspan="6">SPI1</td>
</tr>
<tr>
<th scope="row">2-SCK</th>
<td>P1_20</td>
</tr>
<tr>
<th scope="row">3-RESET</th>
<td>P1_23</td>
</tr>
<tr>
<th scope="row">4-GND</th>
<td>/</td>
</tr>
<tr>
<th scope="row">5-MOSI</th>
<td>P1_22</td>
</tr>
<tr>
<th scope="row">6-VCC</th>
<td>/</td>
</tr>
<tr>
<th scope="row">1-SWDIO</th>
<td>P0_15</td>
<td rowspan="6">2X3 SWD インターフェース</td>
</tr>
<tr>
<th scope="row">2-VCC</th>
<td>/</td>
</tr>
<tr>
<th scope="row">3-SWCLK</th>
<td>P0_10</td>
</tr>
<tr>
<th scope="row">4-</th>
<td>P1_4</td>
</tr>
<tr>
<th scope="row">5-nRET</th>
<td>P0_0</td>
</tr>
<tr>
<th scope="row">6-GND</th>
<td>/</td>
</tr>
<tr>
<th scope="row">D+</th>
<td>USB_DP</td>
<td rowspan="5">USB&amp;ISP</td>
</tr>
<tr>
<th scope="row">D-</th>
<td>USB_DM</td>
</tr>
<tr>
<th scope="row">VBUS</th>
<td>P0_3</td>
</tr>
<tr>
<th scope="row">CONNECT</th>
<td>P0_6</td>
</tr>
<tr>
<th scope="row">ISP</th>
<td>P0_1</td>
</tr>
<tr>
<th scope="row">RX</th>
<td>P1_14</td>
<td rowspan="2">UART Grove</td>
</tr>
<tr>
<th scope="row">TX</th>
<td>P1_13</td>
</tr>
<tr>
<th scope="row">AREF</th>
<td>P0_7</td>
<td>/</td>
</tr>
</table>

## 使用方法
---
**Seeeduino Arch** はソフトウェア面で **mbed** と互換性があります。mbed SDK が提供する包括的なファームウェアライブラリや豊富なサンプルコードを利用することができます。もし **mbed** プラットフォームや **mbed** SDK に詳しくない場合は、[こちら](https://mbed.org/handbook/mbed-NXP-LPC11U24-Getting-Started) をクリックして理解を深めてください。

**Seeeduino Arch** は、mbed の無料オンライン IDE と C++ コンパイラを使用できます。このコンパイラは最適化された ARMCC コンパイラエンジン上に構築されており、プログラムを迅速に動作させることができます。また、ソフトウェアのインストールは不要です。プログラムのダウンロードは USB フラッシュドライブを使用するのと同じくらい簡単で、外部プログラマは必要ありません。

オンライン IDE とコンパイラに加えて、ARM Cortex M マイクロコントローラ用の ARM Embedded GCC、Keil MDK ARM、IAR Embedded Workbench など、多くのオフラインコンパイラ/IDE を利用することもできます。

さらに、ライブラリの作成は初心者にとっても難しい作業ではありません。[こちら](http://mbed.org/cookbook/Writing-a-Library) をクリックして、mbed ライブラリの作成方法を学ぶことができます。

ここでは、Seeeduino Arch を使用した簡単なデモ「ウォーターライト」を紹介します。

### デモ: ウォーターライト

* 「mbed Enabled」ロゴをクリックして、Seeeduino Arch 用のアカウントを登録してください。
[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/img/Mbedenabled.jpg)](https://mbed.org/account/login/?next=/start?auth=104000000000000000000002F7F0F640e640d504b45e111da24094a9d300da46&amp;firmware=999999)

* [https://mbed.org/compiler/](https://mbed.org/compiler/) を開くと、mbed のオンライン IDE が表示されます。プログラミングを始める前に、mbed コンパイラの使い方を読むことをお勧めします。
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/img/Open_Compiler.jpg)

* 「New」をクリックして新しいプログラムを作成し、デバイス「mbed NXP LPC11U24」を選択します。この画像が説明を補足してくれるでしょう。
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/img/Compiler.jpg)

以下は、Seeeduino Arch の 4 つの LED を制御するためのコードです。
```
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

* コードをコンパイルしてください。コードにエラーがある場合、エラーメッセージが表示され、必要な助言が得られます。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/img/Error_prompt.jpg)

* コードを正常にコンパイルした後、bin ファイルを保存します。

* 次に、リセットボタンを長押しすると、自動的に「CRP DISABLD」という名前の USB ドライブとして認識されます。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/img/A_usb_device.jpg)

* CRP DISABLD に移動します。ここで、ファームウェアファイルを削除し、「waterLights_LPC11U24」bin ファイルを CRP DISABLD に追加します。新しいプログラムをダウンロードした後、マイクロコントローラをリセットして実行を開始することを忘れないでください。これで Seeeduino Arch がウォーターライトプログラムを実行します。ぜひ試してみてください。

mbed C/C++ SDK は、Seeeduino Arch にも適用可能なソフトウェアプラットフォームと [ライブラリ](http://mbed.org/cookbook/Homepage) を提供しています。この利用可能なリソースを活用して、アプリケーションを構築することができます。Seeeduino Arch、シールド、Grove モジュールを組み合わせたプログラムを共有していただけることを楽しみにしています。

## アプリケーション
---
*   [Seeeduino Arch をデバッグアダプタとして使用し、別の Seeeduino Arch をデバッグする](https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/)

*   [環境をセンシングする](https://mbed.org/users/yihui/notebook/sense-environment/)

*   [Grove RTC で遊ぶ](https://mbed.org/cookbook/seeed-grove-RTC)

*   [Grove - 超音波レンジャーで遊ぶ](https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger)


## 回路図オンラインビューア
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/res/Seeeduino_Arch_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---
- [Seeeduino Arch Eagle ファイル](https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/res/Seeeduino_Arch_Eagle_files.zip)

- [LPC11U2x データシート](https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/res/LPC11U2x_datasheet.pdf)

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>