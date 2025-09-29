---
title: FSM-55
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/FSM-55/
slug: /ja/FSM-55
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/FSM-55/img/FSM-55_board.jpg)

FSM-55 (Flying Stone Mini 55) は、5x5 LEDマトリックスディスプレイを操作するための小型ボードです。その名前はLEDマトリックスに由来しています。

### 発音

F-S-M「ゴー」「ゴー」と発音してください。「ゴー」は日本語で5の発音です。

## 再現可能な製品によるコンピューティングの自由

### ハードウェア設計

ハードウェア設計はフリーハードウェア設計として利用可能です。KiCADで設計されています。
回路図設計のライセンスはCC-BY 3.0 Unported、PCB設計のライセンスはCC-BY-SA 3.0 Unportedです。
（これはREADMEに記載する必要があります。近日中に追加する予定です。）

PCB設計を自身で使用する場合は、目的に合わせて修正してください。ただし、Flying Stone TechnologyのロゴをPCBに含めないでください。

*   http://git.gniibe.org/gitweb/?p=fsm-55.git

### ファームウェア

ファームウェアはGPLv3+の下でフリーソフトウェアとして利用可能です。

*   http://git.gniibe.org/gitweb/?p=chopstx/chopstx.git;h=refs/heads/cortex-m0-support

<pre>
$ git clone --branch cortex-m0-support git://git.gniibe.org/chopstx/chopstx.git
</pre>

メインプログラムは `example-fsm-55` ディレクトリ内にあります。

そうです、私はファームウェア用に独自のスレッドライブラリを使用しており、それをCortex-M0に移植しました。

### ツール

PCでWindowsを使用している場合、ベンダーツールはCLIでうまく動作します。GUIバージョンはうまく動作しないという報告を受けています。

フリーのオペレーティングシステムでは、おそらく新しいOpenOCDが動作するでしょうが、Debianの0.8の時点では私には動作しませんでした。

私はGnukプロジェクト（FST-01用）向けに元々書かれた独自のツールを使用しています。

このツール（stlinkv2.py）を修正し、Cortex-M0 MCUで動作するようにしました。

*   http://git.gniibe.org/gitweb/?p=gnuk/gnuk.git;h=refs/heads/stlink-m0-support

<pre>
$ git clone --branch stlink-m0-support git://git.gniibe.org/gnuk/gnuk.git
</pre>

このツールは元々FST-01用に開発されました。そして、SPIフラッシュチェックのようなFST-01固有のものがあります。FSM-55ではSPIフラッシュチェックを抑制するために `-i` オプションを使用して呼び出す必要があります。

<pre>
$ stlinkv2.py -i ...
</pre>

## 理由: フリーツールは私たちにとって非常に重要です！

このボードが開発された主な理由の1つは、FreeRouting.Netのサービス終了でした。
私は（gniibe）このサービスを使用していませんでしたが、悲しい出来事です。多くの人々にフリー（自由）のツールによるPCB設計と現在の状況について知らせたいと思いました。

*   FreeRouting.Net: [http://freerouting.net/](http://freerouting.net/)

このボードのもう1つの理由は、OpenOCDのSWDサポートが改善されつつあることを発見したことです。まだ完全ではありませんが、OpenOCDとSWDツールの状況を自分自身で改善する機会を増やしたいと思いました。

*   OpenOCD forthcoming 0.9.0: [http://openocd.sourceforge.net/](http://openocd.sourceforge.net/)

## Seeed Bazaarで購入可能な製品

*   [FSM-55 LEDマトリックスディスプレイキット](https://www.seeedstudio.com/depot/FSM55-LED-Matrix-Display-p-2121.html) (2014年10月)

*   <s>[SWDプログラマー (ST-Link/V2クローン)](https://www.seeedstudio.com/depot/STLink-V2-for-STM8-STM32-interface-programmer-p-2297.html)</s>(2015年3月)

*   **注意**: ST-Link/V2クローンがFSM-55で動作するかどうかは不明です。FSM-55はプログラマーにNRSTピンが接続されている必要があります。クローンのピン#9がNRSTとして機能する場合は問題ありません。しかし、オリジナルのST-Link/V2ではNRSTピンとSWIM_RSTが異なるようです。

*   **注意**: ST-Link/V2クローンを入手しましたが、使用方法がわかりません。FSM-55のNRST用にSWIM_RSTのピン9をアサートする方法を見つける必要があります。2015-05-28

*   **注意**: ST-Link/V2自体のファームウェアはプロプライエタリソフトウェアです。理想的には、それもフリーソフトウェアであるべきです。しかし、現在のハードウェア開発の状況はこのようなものです。BusPirateやVersaloonを代わりに使用することもできますが、それらはまだSWDに十分安定していません。

## リンク

### FSM-55 プロトタイプの動画

*   [https://www.youtube.com/watch?v=7L2qUNF0v2U](https://www.youtube.com/watch?v=7L2qUNF0v2U)

*   [https://plus.google.com/111933309665296903652/posts/AMm9zEScpWK](https://plus.google.com/111933309665296903652/posts/AMm9zEScpWK)

*   [https://plus.google.com/109927329313008001365/posts/3z5w9XwkhSr](https://plus.google.com/109927329313008001365/posts/3z5w9XwkhSr)

### FSM-55 開発者による記事

*   FSM-55 に関する開発者の記事: [http://www.gniibe.org/tag/fsm-55.html](http://www.gniibe.org/tag/fsm-55.html)

### 哲学

*   Graham Seaman, 2001年5月, 「フリーハードウェアデザイン - 過去、現在、未来」: [https://web.archive.org/web/20140407174608/http://www.opencollector.org/Whyfree/freedesign.html](https://web.archive.org/web/20140407174608/http://www.opencollector.org/Whyfree/freedesign.html)

*   フリーソフトウェアとフリーハードウェアデザイン: [https://web.archive.org/web/20140407212334/http://www.opencollector.org/Whyfree/whyfree.html](https://web.archive.org/web/20140407212334/http://www.opencollector.org/Whyfree/whyfree.html)

*   1998年のオープンハードウェア定義: [https://web.archive.org/web/20140407171518/http://www.opencollector.org/Whyfree/open_hardware.html](https://web.archive.org/web/20140407171518/http://www.opencollector.org/Whyfree/open_hardware.html)

*   定義: [https://web.archive.org/web/20140407194913/http://www.opencollector.org/Whyfree/definitions.html](https://web.archive.org/web/20140407194913/http://www.opencollector.org/Whyfree/definitions.html)

*   Benjamin Mako Hill, 2010年6月, 「フリーソフトウェアにはフリーツールが必要」: [http://mako.cc/writing/hill-free_tools.html](http://mako.cc/writing/hill-free_tools.html)

### OSHW（FSM-55 開発者にとっては不十分）

*   オープンソースハードウェア: [http://freedomdefined.org/OSHW](http://freedomdefined.org/OSHW)

*   [http://www.oshwa.org/research/brief-history-of-open-source-hardware-organizations-and-definitions](http://www.oshwa.org/research/brief-history-of-open-source-hardware-organizations-and-definitions)

### オープンデザイン

*   オープンデザイン: [https://en.wikipedia.org/wiki/Open_design](https://en.wikipedia.org/wiki/Open_design)

### GCC

*   GCC ARM Embedded: [https://launchpad.net/gcc-arm-embedded](https://launchpad.net/gcc-arm-embedded)

## 技術サポート & 製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>