---
title: 433Mhz RFリンクキット
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/433Mhz_RF_Link_Kit/
slug: /ja/433Mhz_RF_Link_Kit
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/img/113990010%201.jpg)

このキットは送信機と受信機で構成されており、リモートコントロールで広く使用されています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/433mhz-rf-link-kit-p-127.html?cPath=139_140)

## 仕様
---
- 周波数: 433Mhz
- 変調方式: ASK
- 受信機データ出力: High - 1/2 Vcc, Low - 0.7v
- 送信機入力電圧: 3-12V (高電圧 = より高い送信出力)
- 受信機入力電圧: 3.3-6V (高電圧 = より高い受信能力)

## 使用方法
---
一般的なリンク構成は以下のようになります: MCU -> エンコーダ -> 送信機 ------ 受信機 -> デコーダ -> MCU

PT2262（エンコーダ）とPT2272（デコーダ）はオプションであり、これらの存在は以下の目的を持ちます: 1) 複数のRFリンクが範囲内にある場合の混乱を回避する 2) 干渉を隔離する。エンコーディングとデコーディングの作業を両側のMCUに統合することも可能です。315Mhzデバイスが周囲にない場合、直接ケーブル接続として使用することができます。

ドキュメントについてはお詫び申し上げます。現在作業中です。それまでの間、詳細についてはお気軽にお問い合わせください。喜んでお答えします ^^ Sparkfunのガイドを使用して試しましたが、互換性があります。唯一の違いは、一部の余分なGNDピンを含むパッケージにあります。

さらに、異なる周波数と容量を持つRFモジュールを自社でさらに製作する予定です。次に計画しているのはcc1100に基づくものです。ぜひご要望をお聞かせください :)

## サポート

質問やより良い設計アイデアがある場合は、[フォーラム](https://community.seeedstudio.com/)で議論してください。

## リソース

- [デモスキーム](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/315MRFlink.pdf)
- [VirtualWire 1.3](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/VirtualWire.rar)
- [1.3用ドキュメント](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/VirtualWire.pdf)
- [Sparkfunの例](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/KLP_Walkthrough.pdf)
- [RFモジュールの実行例](http://winavr.scienceprog.com/example-avr-projects/running-tx433-and-rx433-rf-modules-with-avr-microcontrollers.html)

## ライセンス

このドキュメントはCreative Commons [Attribution-ShareAlike License 3.0](https://creativecommons.org/licenses/by-sa/3.0/)の下でライセンスされています。ソースコードとライブラリは[GPL/LGPL](http://www.gnu.org/licenses/gpl.html)の下でライセンスされています。詳細についてはソースコードファイルを参照してください。

外部リンク

アプリケーションアイデア、ドキュメント/データシート、またはソフトウェアライブラリを提供する外部ウェブページへのリンク
- [RCSwitch - Arduinoライブラリで433Mhzリモート電源ソケットを制御](http://code.google.com/p/rc-switch)

## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を提出してください。  
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>