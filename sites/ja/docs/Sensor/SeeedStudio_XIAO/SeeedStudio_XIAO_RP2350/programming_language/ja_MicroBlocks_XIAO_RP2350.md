---
description: MicroBlocks 上で XIAO RP2350 を使用する。
title: MicroBlocks での XIAO RP2350
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_rp2350_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-09-25'
url: https://wiki.seeedstudio.com/ja/xiao_rp2350_microblocks/
---

## MicroBlocks での XIAO RP2350

### MicroBlocks

MicroBlocks は、初心者（9 歳から大人まで）がマイコンを簡単にプログラムできるようにするブロック型言語です。その見た目のシンプルさにもかかわらず、MicroBlocks は MicroPython よりも高いパフォーマンスを持つ強力なプログラミング言語であり、GPIO ピンの制御や I2C、SPI、シリアル経由での周辺機器とのインターフェース、そして約 200 個の拡張ライブラリを備えています。実際、一部のハードウェア設計者は、高速でインタラクティブな開発サイクルのため、迅速なプロトタイピングとテストに MicroBlocks を好んで使用しています。

### XIAO RP2350 のピン配置とハードウェア機能

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=rp2350" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2350-pinout.png" style={{width:600, height:'auto'}}/></div><br />

ピン 0..18 は GPIO ピンです。（**注意: GPIO 11〜18 は基板裏面のパッドです。**）
ピン 0..2 はアナログ入力として使用できます。このボードにはピン 19（反転）に黄色のユーザー LED があり、
ピン 20 には 1 個の RGB LED（NeoPixel）が搭載されています。

### MicroBlocks ファームウェアのインストール

ブートローダーモードに入るには、小さな B（boot）ボタンを押しながら R（reset）ボタンをクリックします。**RP2350** という名前の仮想 USB ドライブが表示されます。

[firmware file](https://microblocks.fun/downloads/latest/vm/vm_xiao_rp2350.uf2) を
[vm folder](https://microblocks.fun/downloads/latest/vm) からダウンロードし、
そのファイルを仮想 USB ドライブにドラッグします。

数秒後にファームウェアがインストールされ、仮想 USB ドライブは自動的に消えます。
ディスクが正しく取り出されなかったという警告は無視してかまいません。

### ボードを MicroBlocks に接続する

データ通信対応の USB ケーブル（電源専用ケーブルでは**ない**もの）でボードをコンピュータに接続します。

Chrome または Edge ブラウザで [MicroBlocks editor](https://microblocks.fun/run/microblocks.html) を実行します。
**connect**（プラグアイコン）ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

メニューから **connect (USB)** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

ダイアログで自分のボードを選択し、**connect** ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-rp2350.png" style={{width:200, height:'auto'}}/></div>

ボードが接続されると、緑色の丸とボード名が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-rp2350.png" style={{width:200, height:'auto'}}/></div>

### MicroBlocks でのコーディング

MicroBlocks はコードを書きながらテストできる **ライブ** コーディング環境です。
ブロックやスクリプトをクリックして実行します。
ブロックをスクリプト領域にドラッグし、組み合わせてスクリプトを作成します。

あなたのコードは永続フラッシュメモリに保存され、ボードが
MicroBlocks エディタに接続されていないときでも実行できます。
**when started** ブロックの下にあるスクリプトは、ボードの電源が入ったときに実行されます。

MicroBlocks は並行実行をサポートしており、最大 10 個のスクリプトを同時に実行できます。

多数の組み込みブロックに加えて、MicroBlocks には
追加機能や周辺機器をサポートする約 200 個のライブラリがあります。
ライブラリを追加するには **Add Library** ボタンをクリックします。

### 例

このスクリプトは黄色のユーザー LED を点滅させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

このスクリプトは RGB NeoPixel の色を変化させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2350-neopixel.png" style={{width:200, height:'auto'}}/></div>

[Blocks Reference](https://wiki.microblocks.fun/en/reference_manual) には、
さらに多くのサンプルが含まれています。

## 特別な謝辞

この記事を執筆してくださった MicroBlocks の John 氏に特別な感謝を申し上げます。

### MicroBlocks リソース

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
