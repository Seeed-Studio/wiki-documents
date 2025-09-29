---
description: Arch Pro
title: Arch Pro
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Arch_Pro
last_update:
  date: 05/15/2025
  author: hushuxu
---


![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Arch_pro.jpg)

Arch Proは、迅速なプロトタイピングのためのmbed対応開発ボードです。これは、Ethernet、USBホスト/デバイス、Groveコネクタ、Arduinoフォームファクタを内蔵したmbed LPC1768のバリアントです。Arch Pro用のさまざまなシールドやGroveモジュール、豊富なソフトウェアライブラリを使用することで、Ethernet、USBホスト/デバイス、NFCアプリケーションを迅速かつ簡単に実装できます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Arch-Pro-p-1677.html)

特徴
--------

-   mbed対応
    -   オンライン開発ツール
    -   使いやすいC/C++ SDK
    -   便利なライブラリ

-   2つのGroveコネクタを備えたArduinoフォームファクタ
-   ドラッグ＆ドロッププログラミング
-   CMSIS-DAPを使用したデバッグ
-   通信用のUSB仮想シリアル

仕様
-------------

| パラメータ       | 値/可用性                                   |
|-----------------|---------------------------------------------|
| MCU             | NXP LPC1768バリアント (ARM Cortex-M3コア搭載) |
| クロックスピード | 100 MHz                                    |
| フラッシュ       | 512 KB                                     |
| RAM             | 64KB                                       |
| UART            | 4個                                         |
| I2C             | 3個                                         |
| SPI             | 2個                                         |
| Ethernet        | 対応                                        |
| USBホスト/デバイス | 対応                                       |

対応プラットフォーム
-----------------

-   mbed

アプリケーションアイデア
-----------------

-   [Ethernet](https://mbed.org/handbook/Ethernet-Interface)
-   [USBホスト](https://mbed.org/handbook/USBHost) または [デバイス](https://mbed.org/handbook/USBDevice)
-   [NFC](https://mbed.org/users/yihui/notebook/rapid-prototyping-with-nfc/)
-   [RTOS](https://mbed.org/handbook/RTOS)
-   [Lua](http://mbed.org/users/jsnyder/notebook/elua-preliminary-port/)

ハードウェア概要
-----------------

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Arch_pro_v1_pinout.png)

印刷用に[モノクロバージョン](https://seeed-studio.github.io/Artwork/images/arch_pro_v1_pinout_mono.png)も用意されています。

<div className="admonition note">
  <p className="admonition-title">注意</p>
  Arch ProのGroveコネクタのシルクスクリーンは、PCBの上部に「3V3」、下部に「5V」とラベル付けされています。Grove Vccはデフォルトで3V3ですが、R50をR51に移動することで5Vに変更できます。SPI Vccピンは、R52（3V3）またはR53（5V）に0Ωを配置することで設定できます（デフォルトではどちらも未配置）。
</div>

はじめに
---------------

Arch Proはmbed LPC1768と互換性があるため、mbed C/C++ SDK、ライブラリ、オンライン開発ツールを使用して迅速にプロトタイプを構築できます。ここでは、LEDを点灯させる方法を示します。これは10分以内で実行可能です。

ステップ1： mbedアカウントにサインアップする。

-   [mbed.org](https://developer.mbed.org/)を開き、「Login」または「signup」をクリックします。すでに登録済みの場合は、「login」を直接クリックしてください。

ステップ2： オンライン開発ツールに入る。

-   「Compiler」をクリックすると、オンラインmbed IDEが開きます。プログラミングを始める前に、mbed Compilerの[Getting started](https://developer.mbed.org/getting-started/)を読むことをお勧めします。

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Open_Compiler.jpg)

ステップ3： コードを編集する。

-   左上の「New」をクリックしてプログラムを作成し、main.cppファイルに以下のような点滅プログラムを編集します。

```
#include "mbed.h"
 
DigitalOut  led1(LED1);
 
int main() {
    while(1) {
        led1 = !led1; 
        wait(0.5); 
    }
}
```

ステップ4： デバイスを追加する。

-   右上の「No device selected」をクリックし、次に左下の「Add a device」ボタンをクリックします（以下の画像参照）。

<div className="admonition note">
  <p className="admonition-title">注意</p>
  すでにmbedデバイスを使用している場合は、「No device selected」の代わりに右上にデバイスが表示されます。
</div>

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/選択デバイス.jpg)

-   以下のようにデバイスのリストが表示されるポップアップページが現れます。「mbed LPC1768」を選択します。

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/選択デバイス1.jpg)

-   mbed LPC1768ページに入り、「Add to mbed Compiler」をクリックします。これでMbed LPC1768が正常に追加されました。mbedコンパイラページに戻り、「No device selected」をクリックします。その後、左下の「LPC1768」をクリックすると、以下のような画面が表示されます。

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Arch_pro_add_platform.png)

-   「Select Platform」をクリックすると、mbedオンラインコンパイラに選択したボードが表示されます。

ステップ5： コンパイルとダウンロード。

-   「Compile」をクリックします。コンパイルが成功すると、mbed IDEがbinファイルを生成します。このbinファイルをPCに保存します。

ステップ6： ファームウェアを更新する。

-   USB Micro Bケーブルを使用して、Arch ProのUSBインターフェース（「BUTTON」の隣）をPCに接続します。自動的に「MBED」という名前のUSBデバイスとして表示されます。
-   生成されたbinファイルをPC上のMBEDデバイスにコピーします。これでUSBデバイスが一度消え、再び表示されます。
-   Arch Proの「BUTTON」を押すと、LEDが点滅するのが見えます。

デバッグ
-----

SWDデバッグを有効にするか、USB仮想シリアルを介してデバッグメッセージを取得するには、[mbedのドライバ](https://developer.mbed.org/handbook/Windows-serial-configuration)をインストールしてください。

ファームウェアの更新または復元
--------------------------

Arch Proの最新ファームウェアバージョンは、2015年1月28日にビルドされたv0221です。ファームウェアのバージョンとビルド日を確認するには、MBEDディスクのMBED.HTMまたはDETAILS.TXTをテキストエディタで開いてください。

-   \[[Arch Pro用ファームウェア v221 2015-01-28](https://developer.mbed.org/media/uploads/yihui/lpc11u35_lpc1768_if_mbed_20150128.bin)\] Mac OS X 10.10 Yosemiteの読み取り専用ファイルシステムバグを修正
-   \[[Arch Pro用ファームウェア v0203 2014-09-02](https://github.com/xiongyihui/CMSIS-DAP/raw/arch_pro/interface/mdk/lpc11u35/lpc11u35_lpc1768_if_mbed_bootloader.bin)\]

更新手順:

-   Windows または Linux コンピュータが必要です。
-   最新のファームウェアをダウンロードしてください。
-   Arch Pro の BUTTON を押しながら電源を入れてください。
-   MBED LOADER という名前のディスクが表示されます。
-   ダウンロードしたファームウェアをそのディスクにドラッグ＆ドロップしてください。

<div class="admonition note">
<p class="admonition-title">注意事項</p>
<ul>
<li>LocalFileSystem は動作しません:
Arch Pro にはファイルを保存するための外部フラッシュがないため、このボードでは LocalFileSystem は利用できません。</li>

<li>P0_27 と P0_28 は DigitalOut では動作しません:
P0_28 と P0_27 は I2C 互換のオープンドレインデジタル I/O です。出力機能を提供するには外部プルアップ抵抗が必要です。</li>

<li>USB シリアル通信:
Windows では、USB シリアル通信を使用するために mbed Windows シリアルポートドライバーをインストールしてください。詳細は <a href="https://developer.mbed.org/handbook/Windows-serial-configuration">Windows Serial Configuration</a> をご覧ください。</li>
</ul>
</div>


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Pro/res/Arch_Pro_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



リソース
---------

-   [Arch Pro V1.0 回路図 PDF](https://files.seeedstudio.com/wiki/Arch_Pro/res/Arch_Pro_V1.0_Schematic.pdf)
-   [Arch Pro V1.0 EAGLE ファイル](https://files.seeedstudio.com/wiki/Arch_Pro/res/Arch_Pro_V1.0.zip)
-   [LPC1768 データシート](https://files.seeedstudio.com/wiki/Arch_Pro/res/LPC1769_68_67_66_65_64_63.pdf)
-   [LPC17xx ユーザーマニュアル](https://files.seeedstudio.com/wiki/Arch_Pro/res/LPC17xxUserManual.pdf)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Arch_Pro から作成されました -->


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>