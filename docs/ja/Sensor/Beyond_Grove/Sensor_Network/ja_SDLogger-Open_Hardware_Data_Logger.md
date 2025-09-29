---
title: SDLogger - オープンハードウェアデータロガー
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/SDLogger-Open_Hardware_Data_Logger/
slug: /ja/SDLogger-Open_Hardware_Data_Logger
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](http://bz.seeedstudio.com/depot/images/product/sdlogger1.jpg)

SDLoggerは、[SparkFun](http://www.sparkfun.com/)/[Nathan Seidle's OpenLog](https://github.com/sparkfun/OpenLog/wiki/)に基づいたシンプルなシリアルロガーです。ATmega644Pプロセッサを使用し、14.7456MHzで動作し、フルサイズのSDカードにログを記録します。標準SDカード（FAT16）およびSDHCカード（FAT32）の両方をサポートしています。SDLoggerには、OpenLogファームウェア1.61（SDHC/FAT32サポートおよび大容量2048文字入力バッファでコンパイル済み）がインストールされており、プログラムの更新を簡単に行うためのArduino互換ブートローダーも搭載されています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/sdlogger-open-hardware-data-logger-p-723.html?cPath=132_136)


## 特徴

*   設定が簡単で使いやすい

*   シリアル入力ポートで受信したデータを自動的にログ記録

*   SDカード上の設定ファイルを使用して設定可能

*   2400、4800、9600、19200、38400、57600、115200、230400のシリアルボーレート（8-N-1）をサポート

*   最大2GBの標準SDカード（FAT16）および最大16GBのSDHCカード（FAT32）をサポート

*   大容量入力バッファ（2048文字）

*   フルサイズSDカードのフォームファクター

*   正確なボーレート生成のための14.7456 MHz水晶発振器

*   入力電圧範囲：3.3～12V

*   プログラム更新を簡単に行うためのArduino互換ブートローダーを搭載

*   フルArduino環境サポート - プログラム開発用の低コストなArduinoボードとして使用可能

*   Arduino環境でサポートされるI/Oポート（メインシリアルポートに加えて）：4つのアナログ入力、第2シリアルポート、I2Cポート

*   Arduino環境を使用したSDLoggerオリジナルファームウェアの簡単な復元手順

*   SDLoggerハードウェア/ファームウェアはSaanlima/Magnus Karlssonによって設計され、CC BY-SA v3ライセンスの下で公開

*   設計ファイル、Arduinoコード、その他の移植コードは[GitHub](http://github.com/magnuskarlsson/SDLogger)で利用可能

## リソース

1.  SDLogger Wikiページ

1.  *   [基本操作](https://github.com/magnuskarlsson/SDLogger/wiki/Basic-operation)

1.  *   [SDLogger FTDIケーブルの使い方](https://github.com/magnuskarlsson/SDLogger/wiki/FTDI-cable-Howto)

1.  *   [SDLoggerをArduinoボードとして使用する方法](https://github.com/magnuskarlsson/SDLogger/wiki/Arduino-howto)

1.  *   [Arduino環境を使用してオリジナルファームウェアを復元する方法](https://github.com/magnuskarlsson/SDLogger/wiki/SDLogger-firmware-restore)

1.  OpenLog Wikiページ（ここにある多くの情報はSDLoggerにも関連しています）

1.  *   [OpenLogデータシートWikiへのリンク](https://github.com/sparkfun/OpenLog/wiki/datasheet)

1.  *   [OpenLogファームウェアコマンドセットWikiへのリンク](https://github.com/sparkfun/OpenLog/wiki/command-set)


### クレジット

1.  FAT16/FAT32ファームウェアは元々Roland Riegelによって設計され、GPL v2の下で公開されています。

2.  OpenLogハードウェアおよびファームウェアは[SparkFun](http://www.sparkfun.com/)/Nathan Seidle's OpenLogによって開発され、CC-SA v3ライセンスの下で公開されています。

3.  Arduino SdFatライブラリはBill Greimanによって作成され、GPL v3の下で公開されています。

## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>