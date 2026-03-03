---
title: 315Mhzリモートリレー切替キット - 2チャンネル
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/315Mhz_remote_relay_switch_kits-2_channels/
slug: /ja/315Mhz_remote_relay_switch_kits-2_channels
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](http://bz.seeedstudio.com/depot/images/P2130781.jpg)

このリモートスイッチを使用すると、12ボルトDCデバイスをリモートで制御できます。ライト、ファン、ランドスケープ照明など、あらゆる12Vデバイスの制御に最適です。この簡単に配線できるキットは、電気配線の基本的な知識を持つ人に最適で、多くの12Vアプリケーションに簡単に配線できます。PCモッダーにとって、リモートコントロール12VDCキットの結果は非常に印象的で、観客を驚かせること間違いありません。DIY愛好者にとって、このキットはプロジェクトに魔法のような効果を与えるでしょう。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Skeleton-Box-p-1407.html)

##   仕様
---
*   周波数: 315Mhz

*   変調方式: ASK

*   動作電圧: 12VDC

*   受信感度: -105dbm

*   送信距離: 開けた場所で100m

*   サイズ: 68mm*47mm*12mm

*   *デフォルトでは315Mhz受信機、433Mhz受信機に交換可能。

##   ピン定義と定格
---
各リレーには3ピンのグループがあります:

*   **A** - 通常閉じている、リレーが作動すると開く

*   **B** - 共通ノード

*   **C** - 通常開いている、リレーが作動すると閉じる

##   使用方法
---

###   エンコードとデコード

一般的なリンクは以下のようになります: MCU -&gt; エンコーダ -&gt; トランスミッタ ------ レシーバ -&gt; デコーダ -&gt; MCU

PT2262（エンコーダ）とPT2272（デコーダ）はオプションであり、それらの存在は以下を目的としています:

1) 複数のRFリンクが範囲内にある場合の混乱を回避する

2) 干渉を隔離する

エンコードとデコードの作業を両側のMCUに統合することができます。周囲に315Mhzデバイスがない場合は、直接ケーブル接続として使用することができます。

PT2272とPT2262リンクを設定するには、PT2262を少しハンダ付けする必要があります:

![](http://bz.seeedstudio.com/depot/images/product/RFReceiverDec.jpg)

そしてPT2272の対応するピンを設定します:

![](http://bz.seeedstudio.com/depot/images/product/RFTransmitEnc.jpg)

###  リレー操作モード

受信機には、リレー出力の動作を制御する3つのモードがあります。これらのモードは、受信機の3ピンジャンパーを使用してユーザーが選択できます。

**モーメンタリーモード:**
スイッチ位置を「M???」に移動して、選択されたリレーをモーメンタリーモードに設定します。モーメンタリーモードでは、選択されたリレーは受信した送信の期間中状態を変更し維持します。送信が終了すると、リレーは元の状態に戻ります。

**フリップフロップモード:**
ジャンパーを取り外して、選択されたリレーをフリップフロップモードに設定します。フリップフロップモードでは、選択されたリレーは状態を変更し、対応する送信が受信されるまでその状態を維持します。送信が受信されるたびに、リレーは状態を変更し、次の送信が受信されるまでその状態を維持します。

**ラッチングモード:**
スイッチ位置を「L???」に移動して、選択されたリレーをラッチングモードに設定します。ラッチングモードでは、送信機によって選択されたリレーが作動すると、そのリレーは状態を変更し、受信機の電源が切れるか中断されるまでその状態を維持します。

315Mhz RFリンクの簡単な図を参照してください。送信機側では、"+12V"ピンに3-5VDCを供給する必要があります（**注意**: PCB上のシルクスクリーンに誤りがあり、12Vと記載されていますが、5V以上を供給しないでください）、そして"TE"を高（5V）に設定して送信を有効にします。受信機側では、+5VDC（別名VCC）を電源として使用し、D0〜D3から出力を読み取ることができます。"TV"はデータが変更された場合に通知します。

![](http://bz.seeedstudio.com/depot/images/product/315MhzTransmitter.gif)


##   リソース
---
*   [使用方法マニュアル](https://www.seeedstudio.com/depot/datasheet/How%20to%20Use%20315MHz%20Remote%20Relay%20Kits.pdf)

## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を提出してください。  
弊社製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>