---
description: Fubarino SD
title: Fubarino SD
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Fubarino_SD
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Fubarino_SD/img/Fubarinosd.jpg)

Fubarino SDは、小型でブレッドボードに簡単に接続できるマイクロコントローラボードです。chipKITおよびMPIDEと互換性があり、MPIDE（chipKIT互換ボード向けのArduino IDEフォーク）でスケッチを書くことができます。このボードのマイクロコントローラはMicrochip PIC32MX440F256Hです。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Fubarino-SD-p-1265.html)

## 特徴
---
* PIC32のUSB周辺機器に接続されたUSBコネクタ。
* PIC32のハードウェアSPI周辺機器に接続されたmicroSDコネクタ。
* MPIDEとの完全な統合と互換性 - 実際、現在のMPIDEバージョンはFubarino SDをターゲットボードとしてサポートしています。
* 標準的な「DIP」フォームファクターで、ブレッドボードで簡単に使用できるすべてのI/Oおよび電源ピン。
* USBコネクタ、外部3.3V、または外部2.8Vから13.2Vの電源供給で動作。
* 15個のアナログ入力（10ビット）。
* 45個のデジタルI/Oピン。
* MPLABまたはMPAB X IDE（どちらもMicrochipから無料提供）でハードウェアプログラマまたはデバッガを使用する場合のICSPヘッダーピン。
* すべてのchipKIT互換ボードと同様に、Fubarino SDはネイティブAVRレジスタに直接アクセスしない限り、Arduinoスケッチやライブラリを実行可能。
* すべてのI/Oは3.3Vで動作しますが、多くのI/Oピンは5V耐性があります。
* PIC32MX440F256Hは、80MHzで動作する32ビットプロセッサで、256Kのフラッシュと32KのRAMを搭載。
* USB（5V）、3.3V、または2.3Vから15Vの入力で電源供給可能。
* PIC32プロセッサの一部として、4つのDMAチャネル、1つのSPI（microSD用だがピンに接続）、2つのI2Cポート、USB（ホスト、機能、OTG）、15個のA/Dチャネル（10ビット）、5つの16ビットタイマー、5つのハードウェアPWM、PMPなどを含む。

## サポート

Fubarino SDハードウェアに関連するバグについては、Githubの[issue tracker](https://github.com/fubarino/fubarino.github.com/issues)をご利用ください。MPIDE、ソフトウェア、ライブラリに関するバグについては、[chipKIT/MPIDEフォーラム](http://www.chipkit.org/forum/index.php)またはchipKIT/MPIDE Githubの[issue tracker](https://github.com/organizations/chipKIT32/dashboard/issues)をご参照ください。

最初の100枚のFubarino SDボードは誤ってPIC32MX795F512部品で製造されました。これはMPIDEで構築されたスケッチには影響しないはずですが、これにより[RetroBSD](http://retrobsd.org/)がこれら最初の100枚のボードで利用可能になります。

## リソース
---
* Fubarino SD v1.4ボードと回路図（Eagle 6形式） - [Githubディレクトリ](https://github.com/fubarino/fubarino.github.com/tree/master/sd/v1.4)

* Fubarino SD v1.4 [回路図](https://github.com/fubarino/fubarino.github.com/raw/master/sd/v1.4/Fubarino_SD_v14_sch.pdf) (PDF)
* Fubarino SD v1.4 [ボードレイアウト](https://github.com/fubarino/fubarino.github.com/raw/master/sd/v1.4/Fubarino_SD_v14_brd.pdf) (PDF)
* Fubarino SD v1.4 [BOM](https://github.com/fubarino/fubarino.github.com/raw/master/sd/v1.4/Fubarino_SD_v14_BOM_SeeedFormat.xlsx) (Excel)
* Fubarino SD [リファレンスマニュアル](https://github.com/fubarino/fubarino.github.com/raw/master/sd/docs/FubarinoSDURefManual.docx) (Word)
* USBブートローダー（avrdude互換）[HEXファイル](https://github.com/fubarino/fubarino.github.com/raw/master/sd/files/BL_1_1_6_FuncTest_1_0.hex) 注意: 右クリックして「名前を付けて保存」を選択して.HEXファイルを取得してください - ボードにはすでにこのブートローダーがプリプログラムされています。
* [工場テストスケッチ](https://github.com/fubarino/fubarino.github.com/raw/master/sd/files/FubarinoSD_ManufactureTest.pde) このスケッチは工場でFubarino SDボードをテストするために使用されます - 右クリックして「名前を付けて保存」を選択してください。

## 著者

Fubarino SDはBrian Schmalz（[Schmalz Haus LLC](http://www.schmalzhaus.com)）とRick Anderson（[Fubar Labs](http://fubarlabs.org)）によって設計されました。両者ともchipKIT/MPIDE開発チームのメンバーです。

## 外部リンク

アプリケーションアイデア、ドキュメント/データシート、またはソフトウェアライブラリを提供する外部ウェブページへのリンク

* MPIDE（マルチプラットフォーム統合開発環境）[ダウンロード](http://www.chipkit.org/forum)

* [Fubarinoウェブサイト](http://fubarino.org/)（最新ファイル、FAQ、チュートリアル、例などを含む）
* [chipKITおよびMPIDEフォーラム](http://www.chipkit.org/forum/index.php)

* [chipKIT/MPIDE wiki](http://chipkit.org/wiki/index.php?title=Main_Page "Main_Page")

* [Digilent Inc](http://www.digilentinc.com) chipKITボードの設計者
* [PIC32MX440F256H](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en534168) Microchip PIC32プロセッサ

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