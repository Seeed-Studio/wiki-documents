---
description: Arch Max v1.1
title: Arch Max v1.1
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Arch_Max_v1.1
last_update:
  date: 05/15/2025
  author: hushuxu
---


![](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Arch_Max_v1.1_product_view.jpg)

Arch Maxは、迅速なプロトタイピングのためのmbed対応開発ボードです。ARM Cortex-M4Fコアを搭載したSTM32F407VET6マイクロコントローラをベースにしており、168MHzで動作します。[Serial Wire Debug](https://en.wikipedia.org/wiki/Joint_Test_Action_Group#Serial_Wire_Debug)（SWD）デバッグ、ドラッグ＆ドロッププログラミング、USBシリアル通信を提供します。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Arch-Max-v11-p-2632.html)

バージョントラッカー
-------

| 名前                       | バージョン | 備考                                                                            |
|----------------------------|---------|---------------------------------------------------------------------------------|
| Arch Max v1.0              | v1.0    | USBで5Vを供給できず、外部電源を接続する必要があります |
| Arch Max v1.1              | v1.1    | USBで5Vを供給できません                                   |

特徴
--------

-   mbed対応
    -   オンライン開発ツール（IDEを含む）
    -   完全で簡潔なC/C++ SDK
    -   豊富な例とチュートリアル
-   高性能STM32F407VET6
    -   168MHzのFPUを備えたARM Cortex-M4 MCU
    -   512 KBのフラッシュメモリ、192 KBのRAM
-   オンボードプログラミングとデバッグ
    -   ドラッグ＆ドロッププログラミング
    -   USBシリアル通信
    -   GDB+ pyOCD/OpenOCD、KeilまたはIARを使用したSWDデバッグ
-   Arduinoフォームファクタ、多くのシールドと互換性あり
-   インターネット接続とデータ交換のためのイーサネットポート、USB、SDカードスロット内蔵

仕様
--------------

| パラメータ/項目                | 値         |
|-------------------------------|---------------|
| 動作電圧                  | 5V            |
| マイクロコントローラ               | STM32F407VET6 |
| フラッシュメモリ                  | 512KB         |
| RAM                           | 192KB         |
| UART                          | 4             |
| I2C                           | 3             |
| SPI                           | 3             |
| CAN                           | 2             |
| SDIO                          | 1             |
| カメラインターフェース              | 1             |
| イーサネット                           | 1             |
| ADCチャンネル                  | 8             |
| I/Oピン                      | 40            |
| デジタルI/O最大入力電圧 | 5.0V          |
| 寸法                      | 90mm x 44mm   |

ハードウェア概要
--------------

![](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Arch_Max_Pinout.png)

使用方法
-----

![](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Get_started_with_mbed.png)

1.  [こちら](<https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-MAX>)をクリックしてmbedにログインまたはサインアップします。
2.  mbed_blinkyプログラムをインポートします。
3.  上部ツールバーの**Compile**アイコンをクリックしてプログラムをコンパイルし、コンパイルされたhexファイルをダウンロードします。
4.  ダウンロードしたbinファイルをmbedディスクにドラッグ＆ドロップします。

**main.cpp**を開いてプログラムを変更できます。例えば、以下のコードを使用してLEDを0.1秒ごとに点滅させることができます。

```
    #include "mbed.h"

    DigitalOut led(LED1);          // オンボードLEDはD13に接続されています

    int main()
    {
        while (true) {
            led = !led;
            wait(0.1);
        }
    }
```

デバッグ
-----

SWDデバッグを有効にするか、USB仮想シリアルを通じてデバッグメッセージを取得するには、[mbedのドライバ](https://developer.mbed.org/handbook/Windows-serial-configuration)をインストールしてください。

ファームウェアの更新または復元
--------------------------

Arch Maxの最新ファームウェアバージョンは、2014年10月8日にビルドされたv0203です。ファームウェアのバージョンとビルド日を確認するには、mbedディスクのmbed.HTMファイルをテキストエディタで開いてください。

[Arch Max用ファームウェアv0203 2014-10-08](https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20141008.bin)

-   Arch Maxのボタンを押し続けて電源を入れます。
-   CRP DISABLDディスクが表示されます。
    -   Windowsの場合、上記のファームウェアでfirmware.binを置き換えます。
    -   Linux/Macの場合、以下のコマンドを入力します：**dd if=\{new_firmware.bin\} of=\{firmware.bin\} conv=notrunc**

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/ARCH_Max.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

-   [ARCH Max用回路図 Eagleファイル](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/ARCH_Max.zip)
-   [ARCH Max用回路図 PDFファイル](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Arch_Max.pdf)
-   [STM32F407データシート](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/STM32F407.pdf)

<!-- このMarkdownファイルはhttps://www.seeedstudio.com/wiki/Arch_Max_v1.1から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>