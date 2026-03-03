---
title: DSO nano用交換用LCDスクリーン
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Replacement_LCD_Screen_for_DSO_nano/
slug: /ja/Replacement_LCD_Screen_for_DSO_nano
last_update:
  date: 05/15/2025
  author: gunengyu
---


![https://www.seeedstudio.com/depot/images/product/P1230020.jpg](http://bz.seeedstudio.com/depot/images/product/P1230020.jpg)

DSO nano用交換用LCDスクリーンです。DSOの元のスクリーンを破損した場合に購入してください。このLCDをDSOに取り付けるには、基本的なはんだ付けスキルが必要です。

## 使用方法

### ハードウェアの取り付け

#### DSO nanoの分解

DSO nanoの分解は非常に簡単ですが、分解する前にDSO nanoの内部がどのようになっているかを知るためのチュートリアルを書く価値があります。

<font color="red">
<strong>注意:</strong>
このチュートリアルは情報提供を目的としています。DSO nanoを分解し、このチュートリアルに従う場合は自己責任で行ってください！
</font>

**必要なもの:**

1. 鋭いナイフ（または他の鋭利なもの）

2. 1.4mmのドライバー

![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230049.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230049.jpg)

まず、鋭いナイフを使ってトップパネルを取り外す必要があります。トップパネルは本体に接着剤で固定されていますので、ゆっくりと作業してください。そうしないとアクリルパネルを損傷する可能性があります。

![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/123.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/123.jpg)

トップパネルを取り外すと、6つのネジ（白い円でマークされています）が見えます。1.4mmのドライバーを使ってこれらを取り外し、次のステップに進みます。

![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230039.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230039.jpg)
![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230043-300x225.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230043-300x225.jpg)

残りの2つのネジを取り外します。これで、サブボードをマザーボードから分離できるはずです。

![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230031-300x225.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230031-300x225.jpg)
![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230028-300x225.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230028-300x225.jpg)

サブボードの詳細画像です。6つの金属ドームボタンが上面に取り付けられており、1×3.5mm TRSコネクタ、1×ミニUSBコネクタが底面にあります。また、2つの分離されたPCBを接続するためのボード間コネクタもあります。

![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230019.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230019.jpg)

これで、スクリーンとマザーボードをケースから取り外すことができます。

![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230020.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230020.jpg)
![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/dsoboard2%E5%89%AF%E6%9C%AC.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/dsoboard2%E5%89%AF%E6%9C%AC.jpg)

1. コントローラー: STM32

2. 安定化電源: 3.3V出力

3. 安定化電源: 3.0V出力

4. 安定化電源: P3232 RS-232トランシーバーを使用して+5Vおよび-5Vを出力

5. 汎用デュアルJ-FETオペアンプ: 入力信号を分離およびスケーリング

6. 8チャンネルアナログマルチプレクサ: 異なるV/divに対応するチャンネルを切り替え

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます！お客様が当社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>