---
description: FST-01  
title: FST-01  
keywords:  
- grove  
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png  
slug: /ja/FST-01
last_update:  
  date: 05/15/2025
  author: shuxu hu  
---


![](https://files.seeedstudio.com/wiki/FST-01/img/FST-01_board.jpg)

FST-01は小型のUSB 32ビットコンピュータです。実際、FST-01は略称で、その正式名称は「Flying Stone Tiny ZERO-ONE」です。

これは日本の群馬県前橋市にあるFlying Stone Technologyによって設計されました。

そのコンセプトは「ミニマリストデザイン」です。これは自由（自由の意味での）ハードウェア設計によるものです。想定されるアプリケーションはGnuk（GnuPG用暗号トークン）とNeuG（ADCノイズに基づく真の乱数生成器）です。これらのアプリケーションはフリーソフトウェアです。

Flying Stone Technologyは、非営利団体であるFree Software Initiative of Japanが著作権を持つ「Gnuk」のセカンドソースメーカーです。

より多機能な製品をお求めの方は、[Maple Mini](https://www.seeedstudio.com/depot/maple-mini-p-861.html)をご検討ください。

```
                        SWDポート
                        (GND, SWD-CLK, SWD-IO)
    電源ポート +---------------------+
           Vdd |[]           []()() -------+
           GND |[]                  |      |
               |()() I/Oポート       | USB  |
               |      (PA2, PA3)    |      |
               |                    -------+
               +---------------------+
```

ご質問は[FST-01 Q&amp;Aサイト](http://no-passwd.net/askbot/questions/)をご利用ください。

|エンクロージャなしのFST-01|熱収縮チューブ付きFST-01|ケース付きFST-01 (P1A-120704U)|
|---|---|---|
|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/fst01-without-enclosure-p-1276.html)|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/fst01-with-heat-shrink-tube-p-1277.html)|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/fst01-with-white-enclosure-p-1279.html)|

また、Flying Stone Technology（飛石技術）から直接購入することも可能です。詳細はgniibe.orgの[Buy FST-01!](http://www.gniibe.org/shop/buy-fst-01)ページ（日本語）をご覧ください。

## アプリケーション
---
前述のセクションで説明したように、FST-01上で[Gnuk](http://www.fsij.org/gnuk/)を実行することを意図しています。これは**GPLv3**ライセンスの下で配布されている著作権ソフトウェアです。

![](https://files.seeedstudio.com/wiki/FST-01/img/Gnuk-sticker.png)

GnukはGnuPG用暗号トークンの実装であり、STM32F103上で動作します。ソースコードはhttp://www.gniibe.org/ (https://git.gniibe.org/cgit/chopstx/ttxs.git/)で入手可能です。

Gnukに関する詳細情報は、[公式Gnukドキュメント](http://www.fsij.org/doc-gnuk/)をご覧ください。

また、FST-01上でNeuGを実行することも意図しています。

![](https://files.seeedstudio.com/wiki/FST-01/img/NeuG.png)

[NeuG](http://www.gniibe.org/memo/development/gnuk/rng/neug)は、ADCの量子化誤差に基づく真の乱数生成器の実装です。

FST-01には1つのアプリケーション（GnukまたはNeuGのいずれか）しかインストールできないことに注意してください。

### 開発環境

Gnuk 1.0.1では、[GCC ARM Embedded 4.6-2012-q2](https://launchpad.net/gcc-arm-embedded/+milestone/4.6-2012-q2-update)を使用します。

### FST-01の初回ロットについて

この製品には、**GPLv3**ライセンスの下でライセンスされている著作権ソフトウェアGnukバージョン1.0.1が含まれています。このライセンスのコピーはこのWiKiに含まれています。**GPLv3**をご覧ください。  
この製品の最終出荷日から3年間、完全な対応ソースコードを入手することができます。この期間は2016年1月1日以前には終了しません。ソースコードはメーカーのウェブサイトhttp://git.gniibe.org/gitweb/?p=gnuk/gnuk.gitで入手可能で、製品バージョンにはタグ「release/1.0.1」が付けられています。

FST-01の初回ロットに含まれるGnukバイナリは、GCC ARM Embedded 4.6-2012-q2で「-O3 -Os」オプションを使用してコンパイルされています。

### Gnuk/NeuG用メーリングリスト

Gnuk/NeuG用のメーリングリストがあります：[https://lists.alioth.debian.org/mailman/listinfo/gnuk-users](https://lists.alioth.debian.org/mailman/listinfo/gnuk-users)

また、git.gniibe.orgと同様に、ソースコードリポジトリは以下でも利用可能です：[https://anonscm.debian.org/cgit/gnuk/](https://anonscm.debian.org/cgit/gnuk/)

## MCUのフラッシュROM書き込み
---
MCUのフラッシュROMを書き込むためにSWDポートを使用します。SWDは比較的新しい技術であるため、ハードウェアやソフトウェアの経験がまだ十分ではありません。

安価なSWDデバッガとしてST-Link/V2を選択し、Pythonで独自のツール「stlinkv2.py」を作成しました。このツール「stlinkv2.py」はGnuk内で配布されています。ST-Link/V2とFST-01の接続については[この記事](http://www.gniibe.org/memo/development/fst-01/dongle/fst-01-swd-connection)をご覧ください。

今後リリースされるOpenOCD 0.6.0では、ST-Link/V2とSWDがサポートされる予定です。それを使用することも可能です。


### 説明

FST-01は最小限のSTM32F103ボードであり、Gnukのような計算指向のアプリケーションを実行するのに適しています。
- 寸法: 1.62 x 0.52インチ (USBプラグを含む)
- USBバス電源
- MCU: 32ビットARM Cortex M3、72MHz (STM32F103TBU6)、フラッシュROM: 128KB、RAM: 20KB
- SPIフラッシュメモリ: 4MB
- SWDポート、2つのI/Oピン
- MCUのフラッシュROMの内容: テスト計画の副産物として、FST-01にはGnukバージョン1.0.1がMCUのフラッシュROMにインストールされており、保護されています。フラッシュROMを書き込む前に保護を解除する必要があります。

詳細についてはこのページをご覧ください。

**ケースなしのFST-01**

評価、開発、または独自のケースを作成したい人向けの裸基板です。

SWDポートにアクセスしてフラッシュROMの内容を変更することができます。

**透明な熱収縮チューブ付きのFST-01**

基板は透明な熱収縮チューブで覆われています。そのため、SWDポートにアクセスすることはできません。
Gnukトークンとして日常的に使用することができます。

**ケース付きFST-01 (P1A-120704U)**

基板はケース付きで提供されます。ただし、基板をケースに取り付けるのはユーザー自身です。
透明なチューブが好みに合わない場合や、MCUのフラッシュROMの内容を変更したい場合に適しています。
FST-01のPCBはP1A-120704U仕様の推奨に従って設計されていますが、ケースが少し大きい可能性があり、基板とケースを固定するために少量の接着剤が必要になる場合があります。そうしないと、基板が少し (< 1mm程度) 動く可能性があります。

## 履歴
---
* 2011-08-06: [アイデア](http://www.gniibe.org/memo/development/fst-01/fst-01-idea)

* 2011-08-08: [FST-01 Gitリポジトリ](http://www.gniibe.org/gitweb?p=fst-01.git)への初回コミット

* 2011-08-23: プロトタイプPCBのFusion PCB注文: #33163

* 2011-08-26: [FST-01の希望](https://www.seeedstudio.com/wish/?p=783)

* 2011-09-06: プロトタイプPCBのFusion PCB注文: #34012

* 2011-09-13: プロトタイプPCBのFusion PCB注文: #34217

* 2011-09-30: プロトタイプPCBのFusion PCB注文: #35421

* 2011-10-27: プロトタイプPCBのFusion PCB注文: #37126

* 2011-11-14: FST-01 PCBデザインのバージョン1.0リリース

* 2012-07-10: Propageteに提出

* 2012-08-??: 生産注文を実施

* 2012-09-27: 初回ロットの生産完了

    * 初回ロットでは、XTALが20pF負荷容量のものに変更されました。（部品の入手可能性のため）

        * 初回ロットでは、MCUのフラッシュROMの内容はGnuk 1.0.1であり、保護されています。

* 2012-10-08: Seeed Bazaarで販売開始

* 2015-04-01: FSFショップで販売開始、NeuGをインストール済み: [http://shop.fsf.org/product/usb/](http://shop.fsf.org/product/usb/)

## 自由（自由としての）ボード設計

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-schematic.png)

Fst-01-schematic.png

ボード設計は [KiCAD](http://www.kicad-pcb.org/) フォーマットで利用可能です。以下のリンクをご覧ください：http://git.gniibe.org/gitweb?p=gnuk/fst-01.git。

回路図設計は Creative Commons Attribution 3.0 Unported License (CC BY 3.0) の下で配布されています。

PCB設計は Creative Commons Attribution-ShareAlike 3.0 Unported License (CC BY-SA 3.0) の下で配布されています。

## FST-01 の部品表 (BOM)
---
**FST-01 の部品表 (BoM)**

| 部品番号 | 名称 | 詳細 | パッケージ | 製造元 | 販売元 | 販売元参照 |
|---|---|---|---|---|---|---|
| C1 | コンデンサ | 27pF | C0402 | | | |
| C2 | コンデンサ | 27pF | C0402 | | | |
| C3 | コンデンサ | 0.1uF | C0402 | | | |
| C4 | コンデンサ | 0.1uF | C0402 | | | |
| C5 | コンデンサ | 0.1uF | C0402 | | | |
| C6 | コンデンサ | 0.1uF | C0402 | | | |
| C7 | コンデンサ | 0.1uF | C0402 | | | |
| C8 | コンデンサ | 4.7uF | C0603 | | | |
| C9 | コンデンサ | 0.01uF | C0402 | | | |
| C10 | コンデンサ | 4.7uF | C0603 | | | |
| C11 | コンデンサ | 0.1uF | C0402 | | | |
| R1 | 抵抗 | 510R | R0402 | | | |
| D1 | LED | 青色 | LED0603 | | | |
| J1 | コネクタ | USB 2.0, 1002-015-01001 | USB プラグ A オス | CNC Tech | Digikey | 1175-1020-ND |
| U1 | MCU | STM32F103TBU6 | QFN36 | ST Microelectronics | AVNET | STM32F103TBU6 |
| U2 | LDO 電圧レギュレータ | CAT6217-330TDGT3 +3.3V | TSOT23-5 | ON Semiconductor | Mouser | 698-CAT6217330TD-G |
| U3 | USB ターミネータ | NUF2221W1 | SOT363 | ON Semiconductor | Digikey | NUF2221W1T2GOSTR-ND |
| U4 | SPI フラッシュメモリ | SST25VF032B-80-4I-QAE-T | WSON8 | Silicon Storage Technology | Digikey | SST25VF032B-80-4I-QAE-T-ND |
| X1 | 水晶振動子 | ABM8G-12.000MHZ-18-D2Y-T | 3.2mmx2.5mm | Abracon Corporation | Digikey | 535-10261-2-ND |
| | エンクロージャ | P1A-120704U  白色 | 1.2 x .71 x .40 インチ | New Age Enclosures | | |

## FST-01の構成部品
---
* STM32F103TB  
* SPIフラッシュメモリ (32Mbit)  
* USBターミネータ  
* LDOレギュレータ (3.3V)  
* 12MHz XTAL C<sub>L</sub>=18pF  

* LED  
* GND/SWDIO/SWDCLKのSWDポート  
* VDD/GND/Port0/Port1の拡張ポート  
* USBプラグA  

**<big>STM32F103TB</big>**

MCUはSTMicroelectronics製のCortex-M3ベースのARMです。72MHzで動作し、128KBのフラッシュROMと20KBのRAMを搭載しています。

**<big>SPIフラッシュメモリ</big>**

秘密データはMCUのフラッシュに保存されるべきですが、機密性のないデータ（例えば公開鍵リングのバックアップなど）はSPIフラッシュメモリに保存できます。

SST25VF032B（32Mbit = 4MB）を使用しています。

**<big>USBターミネータ</big>**

NUF2221W1 USBアップストリームターミネータを使用しています。

これは静電気放電保護機能を備えているためです。また、2つのコンデンサと2つの抵抗よりも小型化が可能です。

**<big>LDOレギュレータ</big>**

3.3Vレギュレータ（5Vから）としてCAT6217-330を使用しています。150mAの電流で十分です。

**<big>XTAL 12MHz C<sub>L</sub>=18pF</big>**

12MHz XTAL C<sub>L</sub>=18pFを使用しています。

これは、12MHzのXTALが8MHzよりも小型化できるためです。

**<big>LED</big>**

ステータスを表示するためにLEDを使用しています。

**<big>SWDポート</big>**

SWDポートはMCUのフラッシュROMにファームウェアをインストールするためのものです。

**<big>VDD/GND/Port0/Port1の拡張ポート</big>**

I/Oピンを2つ持つことにしました。（最小限の設計でも1つのI/Oピンでは不十分です。）

2つのI/Oピンがあれば以下の用途に使用できます：

* シリアル通信のTXとRX  
* タッチセンサーの駆動と入力  
* 他のMCUのSWDポートの制御  

**<big>USBプラグA</big>**

FST-01の使用方法はUSBポートに接続するだけで、USBメモリのように使えます。

## 回路および部品の変更の可能性
---
**<big>LDOレギュレータ</big>**

MCP1700T-330が代替品となる可能性があります（電気的特性は劣りますが、より多くの電流が必要な場合に適しています）。この場合、回路を少し変更する必要があります。

**<big>XTAL</big>**

XTALを12MHz XTAL C<sub>L</sub>=20pFに置き換えるだけで可能です。この変更は設計の許容範囲内です。

その場合、最初から行うのであればC1とC2を33pFに置き換えるのが良いでしょう。

[Wikipediaの負荷容量に関する説明](https://en.wikipedia.org/wiki/Pierce_oscillator#Load_capacitance)を参照してください。

**<big>シールドGNDと信号GND</big>**

FST-01はUSBポートに直接挿入することを意図しています。  
使用方法が直接ではなく延長ケーブルで接続する場合、シールドGNDと信号GNDを抵抗（必要に応じてコンデンサも）で接続するのが良いでしょう。

参考：  
[http://electronics.stackexchange.com/questions/4515/how-to-connect-usb-connector-shield](http://electronics.stackexchange.com/questions/4515/how-to-connect-usb-connector-shield)

**<big>USB_EN</big>**

USB_ENは必要ありませんが、NUF2221W1のピン5を3.3V（Vdd）に直接接続することができます。

STM32F103を使用した多くのボード設計ではそのようなものが見られますが、ソフトウェアでUSB D+を0Vに制御することが可能なため、USB_ENは不要です。

**<big>デフォルトでSPIフラッシュメモリなし</big>**

サイズがやや小さすぎて有用性が低いため、特別なユーザーオプションとして扱い、デフォルトではチップなしでも問題ありません。

## PCB画像
---
PCB画像は[prettygerbv](http://projects.qi-hardware.com/index.php/p/eda-tools/source/tree/master/fab/prettygerbv)によって生成されています。

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-front.png)

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-back.png)

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-conn.png)

## FST-01のエンジニアリングプロトタイプ
---

![](https://files.seeedstudio.com/wiki/FST-01/img/FST-01-Prototype-PCB.jpg)

FST-01-Prototype-PCB.jpg

Fusion PCBサービスのおかげで、FST-01エンジニアリングプロトタイプのPCBを製作しました。

![](https://files.seeedstudio.com/wiki/FST-01/img/FST-01-prototype.jpg)

PCBの組み立ては**User:Gniibe**が手作業で行いました。詳細については[私の記事](http://www.gniibe.org/memo/development/fst-01/qfn-diy-soldering)をご覧ください。

## テスト計画概要
---
1. MCU IDの確認
2. MCUのフラッシュROMへの書き込み
3. LEDの点滅確認
4. SPIフラッシュROMアクセスの確認
5. USBを使用するアプリケーションを実行し、動作を確認（ハブによるアドレス割り当て）
    1. 電源投入時（またはリセット時）、LEDが点灯します。
    2. FST-01アプリケーションはUSBハブによるUSBアドレス割り当てを待機します。（ハブがデバイスを検出し、アドレスを割り当てるまで数秒かかります。）
    3. USBアドレス割り当て後、FST-01アプリケーションは以下のループに入ります：
        * 5秒間待機
        * LEDを点滅（25ms点灯、200ms消灯）。

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供できるよう、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>