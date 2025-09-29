---
description: Arch GPRS V2
title: Arch GPRS V2
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Arch_GPRS_V2
last_update:
  date: 05/15/2025
  author: hushuxu
---


![](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/img/Arch_GPRS_V2.jpg)

**Arch GPRS V2**は、[Seeed Studio](https://www.seeedstudio.com)によるArch GPRS開発ボードの新しく改良されたバージョンです。元のArch GPRSと同様に、[mbed](http://mbed.org/handbook/mbed-SDK)対応の開発ボードであり、セルラー通信モジュールとマイクロコントローラーを搭載しています。Arch GPRS V2は、Arch GPRSで使用されていたLPC11U24の代わりにLPC11U37マイクロコントローラーを使用しています。mbed C/C++ SDK、ライブラリ、オンライン開発ツールを活用して、Arch GPRS V2をベースにしたプロトタイプを迅速に構築できます。Arch GPRSのセルラー通信モジュールは、SIMComのSIM900クアッドバンドGSM/GPRSエンジンに基づいています。これにより、2G GSM/GPRSベースのセルラー通信ネットワークを使用してデータ収集機能を簡単に実行できます。
Arch GPRS V2は標準的なArduinoインターフェースと[Grove](https://wiki.seeedstudio.com/ja/Grove_System/ "Grove")コネクタを搭載しています。既存のシールドや[Grove](https://wiki.seeedstudio.com/ja/Grove_System/ "Grove")製品をArch GPRS V2に簡単に接続できます。さらに、ソーラーパネルを直接ボードに接続してバッテリーを充電することも可能です。低消費電力設計により、屋外での簡単な充電と長時間の動作が保証されます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Arch-GPRS-V2-p-2026.html)

<div class="admonition note">
<p class="admonition-title">注意</p>
<p>Arch GPRS V2には<a href="https://mbed.org/handbook/mbed-HDK">mbedインターフェース</a>が付属していません。デバッグメッセージを出力するには、<a href="https://mbed.org/handbook/USBSerial">USBSerial</a>を試してください。</p>
</div>

特徴
--------

- mbed対応
  - オンライン開発ツール
  - 使いやすいC/C++ SDK
  - 多数の公開ライブラリ、プロジェクト

- NXP LPC11U37コントローラー
  - 低消費電力ARM Cortex-M0コア
  - オンチップ128KBフラッシュ、12KB SRAM、4KB EEPROM
  - USBデバイス、UART、I2C

- SIM900モジュール
  - クアッドバンド（850/900/1800/1900MHz）GSM/GPRS対応
  - 外部SIMカード対応：1.8V/3V
  - 標準ATコマンドで制御

- USB5Vまたはソーラーパネルを自動選択してバッテリーを充電

Arch GPRS V2 vs Arch GPRS
-----------------------

| パラメータ       | **Arch GPRS V2**| **Arch GPRS**|
|-----------------|-----------------|--------------|
| MCU             | LPC11U27        | LPC11U24     |
| GSM/GPRSモジュール | SIM900          | EG-10        |
| MicroSDカード    | あり             | なし         |

ハードウェア概要
-----------------

![](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/img/Arch_GPRS_V2_Pinout.png)

はじめに
---------------

![](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/img/Get_started_with_arch.png)

1. [こちら](http://www.mbed.org)からmbed環境にログインします。
2. [mbed_blinky](https://mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-GPRS)プログラムをインポートします。
3. mbedオンラインコンパイラ環境内のmbed_blinkyフォルダ内のmain.cppにインポートされたコードが、上記のステップ3の図に示されている通りであることを確認します。コードをコンパイルするために選択されたプラットフォームがSeeeduino-Archであることを確認してください。その後、コードをコンパイルします。結果として得られるバイナリファイル（.bin）を保存するよう求められたら、PC上の指定されたフォルダに保存します。
4. ArchボードをPCに接続し、リセットボタンを長押しします。PCにCRP DISABLDという名前のリムーバブルUSBドライブが自動的に表示されるはずです。CRP DISABLDドライブに移動し、フォルダ内に表示される既存のファームウェアファイルを削除し、ダウンロードしたバイナリファイルをCRP DISABLDにコピーします。リセットボタンを短く押して新しいバイナリを実行します。
5. Arch GPRS V2ボードを確認してコードが正常に動作していることを確認します。上記のピンアウト図に示されている最右端のLEDが点滅し、その隣の3つのLEDがすべて点灯している場合、コードが正常に動作していることを意味します。

以下のコードに変更して、結果を確認することができます：

```

    #include "mbed.h"

    DigitalOut myled1(LED2); // ピンアウト図に示されているようにボードを保持した場合の最左端のLED
    DigitalOut myled2(LED3); // 左から2番目
    DigitalOut myled3(LED4); // 左から3番目
    DigitalOut myled4(LED1); // 最右端のLED

    int main() {
        while(1) {
                    
            myled1 = 1; // 最左端のLEDが点灯し、他は消灯
            myled2 = 0;
            myled3 = 0;
            myled4 = 0;
            
            wait(1); // 1秒待機
            myled1 = 0;
            myled2 = 1; // 左から2番目のLEDが点灯し、他は消灯
            myled3 = 0;
            myled4 = 0;

            wait(1);
            myled1 = 0;
            myled2 = 0;
            myled3 = 1; // 左から3番目のLEDが点灯し、他は消灯
            myled4 = 0;
            
            wait(1);
            myled1 = 0;
            myled2 = 0;
            myled3 = 0;
            myled4 = 1; // 最右端のLEDが点灯し、他は消灯
            
            wait(1);
        }
    }
```

上記のコードをArch GPRS V2ボードでコンパイルして実行すると、LEDが順番に点滅する様子が確認できます。

上記の手順を正常に完了した場合、以下が確認できます：

1. Arch GPRS V2が正しく電源を供給されている。
2. コードがArch GPRS V2モジュールによって正常にダウンロードおよび実行されている。
3. より複雑なプロジェクトに取り組む準備が整っている！

Windows、Linux、MacでのArchのプログラミング
-----------------------------------------

Archにはmbedインターフェースがありません。USBインシステムプログラミング（ISP）を使用してファームウェアをアップグレードします。

USB ISPモードに入るには、Archをコンピューターに接続し、ボタンを長押しします。その後、「CRP DISABLD」という名前のディスクが表示されます。

- Windowsの場合

    1. 「CRP DISABLD」ディスク内のfirmware.binを削除します。
    2. 新しいファームウェアをディスクにコピーします。

- Linuxの場合

    1. ディスクがマウントされていない場合、ディスクを**\{mnt_dir\}**にマウントします。
    2. **dd if=\{new_firmware.bin\} of=\{mnt_dir\}/firmware.bin conv=notrunc**

- Mac では、以下のスクリプトをターミナルで実行して、.bin ファイルを Arch にコピーする必要があります。

    1. **dd if=\{new_firmware.bin\} of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc**

もし興味があれば、**Automator** アプリケーションを作成して、ファイルをボードにドラッグ＆ドロップで対応させることもできます。以下のコマンドを使用して "*Run Shell Script*" を作成してください：

dd if=$\* of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc

また、`"Pass Input"` オプションを `"to stdin"` から `"as arguments"` に変更する必要があります。これを行わないと、ログに `"The action 'Run Shell Script' encountered an error"` または `"dd: no value specified for if (1)"` というエラーが表示されます。

さらに改良されたスクリプトの形式は以下の通りです：
**dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

この形式は、ファイルパス内のスペースを処理し、指定された最初のファイルのみを使用します。
新しいファームウェアを実行するには、ボタンを短く押してください。

リソース
------------------------

- [Arch GPRS V2.0 mbed 開発者プラットフォームページ](https://developer.mbed.org/platforms/Seeed-Arch-GPRS/)

**設計ファイル**

- [EAGLE フォーマットの回路図および基板ファイル](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/res/Arch_GPRS_v2.0_sch_pcb.zip)
- [PDF フォーマットの回路図](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/res/Arch_GPRS_v2.0_SCH_PDF.pdf)

**アプリケーションとライブラリ**

- [GPRS ライブラリ](http://developer.mbed.org/teams/Seeed/code/GPRSInterface/)
- [Seeeduino Arch をデバッグアダプタとして使用して別の Seeeduino Arch をデバッグする](https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/)
- [環境を Sense する](https://mbed.org/users/yihui/notebook/sense-environment/)
- [Grove RTC を使って遊ぶ](https://mbed.org/cookbook/seeed-grove-RTC)
- [Grove - 超音波レンジャーで遊ぶ](https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger)

**関連情報**

- [SIM900 GPRS モジュール情報](/ja/GPRS_Shield_V2.0)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Arch_GPRS_V2 から作成されました -->

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