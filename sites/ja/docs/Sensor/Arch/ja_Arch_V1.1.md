---
description: Arch V1.1
title: Arch V1.1
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Arch_V1.1
last_update:
  date: 05/15/2025
  author: hushuxu
---


![画像をここに挿入](https://files.seeedstudio.com/wiki/Arch_V1.1/img/Arch.jpg)

Arch V1.1は、ArduinoフォームファクターとGroveコネクタを備えたmbed対応の開発ボードで、迅速なプロトタイピングを可能にします。多様なシールドやGroveモジュール、mbed SDK、豊富なソフトウェアライブラリを活用して、迅速にプロトタイプを構築できます。

[![画像をここに挿入](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/seeeduino-arch-p-1561.html)

バージョントラッカー
-------

<table>
<colgroup>
<col width="25%" />
<col width="50%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th>リビジョン</th>
<th>説明</th>
<th>リリース日</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Seeeduino Arch V1.0</td>
<td><ul>
<li>初回公開リリース</li>
</ul></td>
<td>2013-6-17</td>
</tr>
<tr class="even">
<td>Arch V1.1</td>
<td><ul>
<li>名前をSeeeduino ArchからArchに変更</li>
<li>D13とD11を切り替え</li>
<li>Groveコネクタを1つ追加</li>
<li>デュアルダイオードを削除</li>
</ul></td>
<td></td>
</tr>
</tbody>
</table>

特徴
-------

-   mbed対応
    -   オンライン開発ツール
    -   使いやすいC/C++ SDK
    -   多数の公開ライブラリとプロジェクト

-   Arduinoフォームファクター、3つのGroveコネクタ
    -   3.3V互換シールドに対応
    -   多数のGroveモジュール
-   ドラッグ＆ドロッププログラミング
-   NXP LPC11U24 MCU
    -   低消費電力ARM Cortex-M0コア
    -   48MHz、32KBフラッシュ、8KB RAM、4KB EEPROM
    -   USBデバイス、2xSPI、UART、I2C

仕様
-------------

| 項目                          | 典型値  |
|-------------------------------|----------|
| 動作電圧                     | 7 ~ 12V  |
| マイクロコントローラ          | LPC11U24 |
| フラッシュメモリ              | 32KB     |
| EEPROM                        | 4KB      |
| RAM                           | 8KB      |
| UART                          | 1        |
| I2C                           | 1        |
| ADCチャンネル                 | 8        |
| I/Oピン                       | 40       |
| デジタルI/O最大入力電圧       | 5.0V     |

ハードウェア概要
------

![画像をここに挿入](https://files.seeedstudio.com/wiki/Arch_V1.1/img/Arch_V1.1_Pinout.png)

印刷用に[モノクロバージョン](https://seeed-studio.github.io/Artwork/images/arch_v1.1_pinout_mono.png)も用意されています。

はじめに
-----------

![画像をここに挿入](https://files.seeedstudio.com/wiki/Arch_V1.1/img/Get_started_with_arch.png)

1.  [このリンク](https://mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeeduino-Arch)をクリックして、mbedにログインまたはサインアップします。
2.  mbed_blinkyプログラムをインポートします。
3.  コーディングを開始！コードをコンパイルして出力バイナリをダウンロードできます。
4.  ArchボードをPCに接続し、リセットボタンを長押しすると、USBドライブ「CRP DISABLD」として自動的に認識されます。「CRP DISABLD」に移動し、ファームウェアファイルを削除して、ダウンロードしたバイナリファイルを「CRP DISABLD」にコピーします。リセットボタンを短く押して新しいバイナリを実行します。

以下のようにコードを変更して再試行できます。

```
    #include "mbed.h"

    BusOut leds(LED1, LED2, LED3, LED4);

    int main() {
        uint8_t count = 0;
        while(1) {
            leds = count++;
            wait(1);
        }
    }
```

Windows、Linux、またはMacでのArchのプログラミング
-----------------------------------------

Archにはmbedインターフェースがありません。USBインシステムプログラミング（ISP）を使用してファームウェアをアップグレードします。

USB ISPモードに入るには、Archをコンピュータに接続し、ボタンを長押しします。すると、「CRP DISABLD」という名前のディスクが表示されます。

-   Windowsの場合
    1.  「CRP DISABLD」ディスク内のfirmware.binを削除します。
    2.  新しいファームウェアをディスクにコピーします。

-   Linuxの場合
    1.  ディスクがマウントされていない場合、ディスクを**\{mnt_dir\}**にマウントします。
    2.  **dd if=\{new_firmware.bin\} of=\{mnt_dir\}/firmware.bin conv=notrunc**

-   Macの場合、ターミナルを使用して以下のスクリプトを実行し、.binファイルをArchにコピーします。

    1.  **dd if=\{new_firmare.bin\} of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc**

また、**Automator**アプリケーションを作成して、ファイルをボードにドラッグ＆ドロップで対応することもできます。「*Run Shell Script*」を作成し、以下のコマンドを使用します：

dd if=$\* of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc

さらに、`"Pass Input"`オプションを`"to stdin"`から`"as arguments"`に変更する必要があります。これを行わないと、ログに`"The action 'Run Shell Script' encountered an error"`または`"dd: no value specified for if (1)"`というエラーが表示されます。

改良版スクリプトは以下の通りです：

**`dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc`**

これにより、ファイルパス内のスペースを処理し、最初に指定されたファイルのみを使用します。

ボタンを短く押して新しいファームウェアを実行します。

アプリケーション
------------

-   [Seeeduino Archをデバッグアダプタとして使用して別のSeeeduino Archをデバッグする](https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/)
-   [環境をセンシングする](https://mbed.org/users/yihui/notebook/sense-environment/)
-   [Grove RTCで遊ぶ](https://mbed.org/cookbook/seeed-grove-RTC)
-   [Grove - 超音波レンジャーで遊ぶ](https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger)

リソース
---------

-   [Arch V1.1の回路図](https://upverter.com/yihui/35f45e266de84e9c/Arch/)

<!-- このMarkdownファイルはhttps://www.seeedstudio.com/wiki/Arch_V1.1から作成されました -->

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>