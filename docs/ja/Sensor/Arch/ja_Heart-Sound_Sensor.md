---
description: 心音センサー
title: 心音センサー
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Heart-Sound_Sensor
last_update:
  date: 05/15/2025
  author: hushuxu
---


Arch Maxは、迅速なプロトタイピングのためのmbed対応開発ボードです。  
STM32F407VET6マイクロコントローラーをベースにしており、ARM Cortex-M4Fコアが168MHzで動作します。SWDデバッグ、ドラッグ＆ドロッププログラミング、USBシリアル通信を提供するオープンリンクを含んでいます。

## 特徴

* **mbed対応**
  * オンライン開発ツール
    * 使いやすいC/C++ SDK
    * 多数の公開ライブラリとプロジェクト

* **高性能STM32F407VET6**
  * ARM Cortex-M4 MCU（FPU付き）168MHz
    * 512 KBフラッシュ、192 KB RAM

* **オンボードオープンリンクによるデバッグとプログラミング**
  * ドラッグ＆ドロッププログラミング
    * USBシリアル通信
    * GDB+ pyOCD/OpenOCD、KeilまたはIARを使用したSWDデバッグ

* **Arduinoフォームファクターで、多くのシールドと互換性あり**

* **接続性とデータ交換のためのイーサネット、USB、SDカードスロット内蔵**

## 仕様

<table cellspacing="0" width="80%">
<tr>
<th scope="col">項目</th>
<th scope="col">標準値</th>
</tr>
<tr>
<th scope="row">動作電圧</th>
<td>5V</td>
</tr>
<tr>
<th scope="row">マイクロコントローラー</th>
<td>STM32F407VET6</td>
</tr>
<tr>
<th scope="row">フラッシュメモリ</th>
<td>512kB</td>
</tr>
<tr>
<th scope="row">RAM</th>
<td>192kB</td>
</tr>
<tr>
<th scope="row">UART</th>
<td>4</td>
</tr>
<tr>
<th scope="row">I2C</th>
<td>3</td>
</tr>
<tr>
<th scope="row">SPI</th>
<td>3</td>
</tr>
<tr>
<th scope="row">CAN</th>
<td>2</td>
</tr>
<tr>
<th scope="row">SDIO</th>
<td>1</td>
</tr>
<tr>
<th scope="row">カメラインターフェース</th>
<td>1</td>
</tr>
<tr>
<th scope="row">イーサネット</th>
<td>1</td>
</tr>
<tr>
<th scope="row">ADCチャンネル</th>
<td>8</td>
</tr>
<tr>
<th scope="row">I/Oピン</th>
<td>40</td>
</tr>
<tr>
<th scope="row">デジタルI/O最大入力電圧</th>
<td>5.0V</td>
</tr>
<tr>
<th scope="row">寸法</th>
<td>90mm x 44mm</td>
</tr>
</table>

## ピン定義

![](https://files.seeedstudio.com/wiki/Arch_Max/img/Arch_Max_Pinout.png)

## 使用方法

![](https://files.seeedstudio.com/wiki/Arch_Max/img/Get_started_with_mbed.png)

1. [このリンク](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-MAX)をクリックして、**mbedにログインまたはサインアップ**します。

2. mbed_blinkyプログラムをインポートします。

3. 上部ツールバーの**コンパイル**アイコンをクリックしてプログラムをコンパイルし、コンパイルされたhexファイルをダウンロードします。

4. ダウンロードしたbinファイルをMBEDディスクにドラッグ＆ドロップします。

**main.cpp**を開いてプログラムを変更できます。例えば、以下のコードを使用してLEDを0.1秒ごとに点滅させます。

```c
#include "mbed.h"

DigitalOut led(LED1);           // オンボードLEDはD13に接続されています

int main()
{
    while (true) {
        led = !led;
        wait(0.1);
    }
}
```

## デバッグ

SWDデバッグを有効にするか、USB仮想シリアルを通じてデバッグメッセージを取得するには、[mbedのドライバ](https://developer.mbed.org/handbook/Windows-serial-configuration)をインストールしてください。

## ファームウェアの更新または復元

Arch Maxの最新ファームウェアバージョンは、2014年10月8日にビルドされたv0203です。ファームウェアのバージョンとビルド日を確認するには、MBEDディスクのMBED.HTMファイルをテキストエディタで開いてください。

[Arch Max用ファームウェア v0203 2014-10-08](https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20141008.bin)

* Arch Maxのボタンを押しながら電源を入れます。

* CRP DISABLDディスクが表示されます。

  * Windowsの場合、上記のファームウェアでfirmware.binを置き換えます。

  * Linux/Macの場合、以下のコマンドを使用します：  
    **dd if=\{new_firmware.bin\} of=\{firmware.bin\} conv=notrunc**

## バージョン

<table>
<tr>
<th>名前</th>
<th>バージョン</th>
<th>備考</th>
</tr>
<tr>
<td>Arch Max v1.0</td>
<td>v1.0</td>
<td>5V電源がUSB電源に接続されていないため、外部電源を接続する必要があります。</td>
</tr>
<tr>
<td>Arch Max v1.1</td>
<td>v1.1</td>
<td>5V電源がUSB電源に接続可能です。</td>
</tr>
</table>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Max/res/ARCH_Max.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [ARCH Max用回路図 Eagleファイル](https://files.seeedstudio.com/wiki/Arch_Max/res/ARCH_Max.zip)
- **[PDF]** [Arch Max PCB](https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.pdf)
- **[EAGLE]** [Arch Max回路図](https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.sch)
- **[データシート]** [STM32F407データシート](https://files.seeedstudio.com/wiki/Arch_Max/res/STM32F407.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするため、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>