---
title: 315Mhz RFリンクキット
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/315Mhz_RF_link_kit/
slug: /ja/315Mhz_RF_link_kit
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](http://bz.seeedstudio.com/depot/images/product/3151.jpg)

このキットは送信機と受信機で構成されており、リモートコントロールで広く使用されています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/315mhz-rf-link-kit-p-76.html)

##   仕様
---
*   周波数: 315Mhz

*   変調方式: ASK

*   受信機データ出力: High - 1/2 Vcc, Low - 0.7v

*   送信機入力電圧: 3-12V (高電圧 = より高い送信出力)

##   使用方法
---
一般的な接続は以下のようになります: MCU -&gt; エンコーダ -&gt; 送信機 ------ 受信機 -&gt; デコーダ -&gt; MCU

PT2262（エンコーダ）とPT2272（デコーダ）はオプションであり、それらの存在は以下の目的を持ちます: 1) 複数のRFリンクが範囲内にある場合の混乱を回避する 2) 干渉を隔離する。エンコーディングとデコーディングの作業を両側のMCUに統合することもできます。周囲に315Mhzデバイスがない場合、直接ケーブル接続として使用することができます。

ドキュメントについてはお詫び申し上げます。現在作業中です。それまでの間、詳細についてはお気軽にお問い合わせください。喜んでお答えいたします ^^ Sparkfunのガイドを使用して試しましたが、互換性があります。唯一の違いは、いくつかの余分なGNDピンがあるパッケージです。

さらに、異なる周波数と容量を持つRFモジュールを自社でさらに製作する予定です。次に計画しているのはcc1100に基づくものです。ぜひご要望をお聞かせください :)

![](https://files.seeedstudio.com/wiki/315Mhz_RF_link_kit/img/315433RF.jpg)

##   リソース
---
*   [デモスキーム](https://www.seeedstudio.com/depot/datasheet/315MRFlink.pdf)

*   [ファイル:VirtualWire.zip](https://files.seeedstudio.com/wiki/315Mhz_RF_link_kit/res/VirtualWire.zip "File:VirtualWire.zip")

*   [バージョン1.3用ドキュメント](https://www.seeedstudio.com/depot/images/product/VirtualWire.pdf)

*   [Sparkfunの例](http://www.sparkfun.com/datasheets/RF/KLP_Walkthrough.pdf)

*   [RFモジュールを動作させる例](http://winavr.scienceprog.com/example-avr-projects/running-tx433-and-rx433-rf-modules-with-avr-microcontrollers.html)

## 技術サポート & 製品ディスカッション
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