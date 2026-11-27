---
description: MicroBlocks 上で XIAO SAMD21 を使用する。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_samd21_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-10-31'
url: https://wiki.seeedstudio.com/ja/xiao_samd21_microblocks/
---

# XIAO SAMD21 と MicroBlocks

## MicroBlocks

MicroBlocks は、初心者（9 歳から大人まで）がマイコンを簡単にプログラムできるようにするブロック型言語です。その見た目のシンプルさにもかかわらず、MicroBlocks は MicroPython よりも高いパフォーマンスを持つ強力なプログラミング言語であり、GPIO ピンの制御や I2C、SPI、シリアル経由での周辺機器とのインターフェース、そして約 200 個の拡張ライブラリを備えています。実際、一部のハードウェア設計者は、高速でインタラクティブな開発サイクルのため、迅速なプロトタイピングやテストに MicroBlocks を好んで使用しています。

### XIAO SAMD21 のピン配置とハードウェア機能

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=samd21" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-pinout-samd21.jpg" style={{width:600, height:'auto'}}/></div>

すべての XIAO ボードと同様に、このボードには 0〜10 の 11 本の GPIO ピンがあります。すべてのピンはアナログ入力、およびデジタル出力とアナログ出力として使用できます。
ピン 1〜10 は、他の XIAO ボードと同様にパルス幅変調（PWM）出力をサポートします。

他のボードと異なり、このボードのピン 0 は **10 ビット・デジタル-アナログコンバータ**（DAC）です。ピン 0 に 0 から 1023 の数値を設定すると、そのピンは 0〜3.3 ボルトの間の一定電圧を出力します。（対照的に、PWM は数値によってパルス幅が決まるデジタルパルス列を出力します。）DAC ピンは、オーディオやその他のアナログ信号の生成に使用できます。

このボードには黄色のユーザー LED（ピン 13）と青色の RX/TX LED（ピン 11 と 12）があります。
すべての LED は反転動作で、対応するピンを LOW に設定すると LED が点灯します。

RX/TX LED は注意点付きで MicroBlocks から使用できます。
MicroBlocks はボードと常にデータをやり取りしているため、
MicroBlocks エディタを使用していると RX/TX LED が激しく点滅します。
その点滅が気になるため、RX/TX LED はデフォルトでは無効化されており、
スクリプトが対応するピンを設定したときにのみ有効になります。
この点を踏まえると、IDE が接続されていないときには RX/TX LED が便利に使えます。

## MicroBlocks ファームウェアのインストール

このボードにはブートボタンがないため、ブートローダーモードに入るのは少しコツが要ります。USB ポート左側の 2 つの RST ピン端子をワイヤで素早く 2 回ショートさせてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" style={{width:400, height:'auto'}}/></div>

成功すると、黄色のユーザー LED がゆっくりとフェードイン・フェードアウトし、
**Arduino** という名前の仮想 USB ドライブが表示されます。

[firmware file](https://microblocks.fun/downloads/latest/vm/vm_xiao_samd21.uf2) を
MicroBlocks の [firmware folder](https://microblocks.fun/downloads/latest/vm) からダウンロードし、
そのファイルを仮想 USB ドライブにドラッグします。

数秒後にファームウェアがインストールされ、仮想 USB ドライブは自動的に消えます。
ディスクが正しく取り出されなかったという警告は無視してかまいません。

## ボードを MicroBlocks に接続する

データ通信対応の USB ケーブル（電源専用ケーブルでは **ない** もの）でボードをコンピュータに接続します。

Chrome または Edge ブラウザで [MicroBlocks editor](https://microblocks.fun/run/microblocks.html) を実行します。
**connect**（プラグアイコン）ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:300, height:'auto'}}/></div>

メニューから **connect (USB)** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:300, height:'auto'}}/></div>

ダイアログから自分のボードを選択し、**connect** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-samd21.png" style={{width:400, height:'auto'}}/></div>

ボードが接続されると、緑色の丸とボード名が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-samd21.png" style={{width:300, height:'auto'}}/></div>

## MicroBlocks でのコーディング

MicroBlocks はコードを書きながらテストできる **ライブ** コーディング環境です。
ブロックやスクリプトをクリックして実行します。
ブロックをスクリプト領域にドラッグし、組み合わせてスクリプトを作成します。

コードは永続的なフラッシュメモリに保存されるため、ボードが
MicroBlocks エディタに接続されていないときでも実行できます。
**when started** ブロックの下にあるスクリプトは、ボードの電源が入ったときに実行されます。

MicroBlocks は並行実行をサポートしており、最大 10 個のスクリプトを同時に実行できます。

多数の組み込みブロックに加えて、MicroBlocks には
追加機能や周辺機器をサポートする約 200 個のライブラリがあります。
ライブラリを追加するには **Add Library** ボタンをクリックします。

## 例

このスクリプトは黄色のユーザー LED を点滅させます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

[Blocks Reference](https://wiki.microblocks.fun/en/reference_manual) には、
さらに多くのサンプルが掲載されています。

## プロジェクトデモ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/main.png" style={{width:600, height:'auto'}}/></div>

より包括的なプロジェクトデモとして、メイカーの [Luis](https://www.hackster.io/luis_a_la_m) 氏は、XIAO SAMD21、Grove Shield for XIAO、および LED マトリクスを使用して 8x8 LED Neo-pixel デバイスを構築しています。これを使えば、複雑なコードを書くことなく MicroBlocks で魅力的なピクセルパターンを描くことができます。ステップバイステップのチュートリアルは [Hackster](https://www.hackster.io/luis_a_la_m/paint-with-pixels-8f3a15) で確認できます。


## 特別な謝辞

この記事を執筆してくださった MicroBlocks の John 氏に特別な感謝を申し上げます。

## MicroBlocks リソース

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
