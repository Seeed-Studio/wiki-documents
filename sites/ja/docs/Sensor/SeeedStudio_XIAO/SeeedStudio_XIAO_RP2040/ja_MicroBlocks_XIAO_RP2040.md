---
description: MicroBlocks 上で XIAO RP2040 を使用する。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_rp2040_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/xiao_rp2040_microblocks/
---

# XIAO RP2040 と MicroBlocks

## MicroBlocks

MicroBlocks は、初心者（9 歳から大人まで）がマイコンを簡単にプログラムできるようにするブロック型言語です。一見シンプルに見えますが、MicroBlocks は MicroPython よりも高いパフォーマンスを持つ強力なプログラミング言語であり、GPIO ピンの制御や I2C、SPI、シリアル経由での周辺機器とのインターフェース、そして約 200 個の拡張ライブラリを備えています。実際、一部のハードウェア設計者は、高速でインタラクティブな開発サイクルのため、迅速なプロトタイピングとテストに MicroBlocks を好んで使用しています。

### XIAO RP2040 のピン配置とハードウェア機能

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=rp2040" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2040-overview.jpg" style={{width:600, height:'auto'}}/></div><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2040-pinout.png" style={{width:700, height:'auto'}}/></div><br />

このボードには 11 本の GPIO ピン（ピン 0..10）があります。ピン 0..3 はアナログ入力として使用できます。
また、赤（ピン 11、ユーザー LED）、緑（ピン 12）、青（ピン 13）の 3 つの小さな LED があります。
すべての LED は反転動作で、対応するピンを LOW に設定すると LED が点灯します。

このボードには、ピン 14 に単一の RGB LED（NeoPixel）も搭載されています。

## MicroBlocks ファームウェアのインストール

ブートローダーモードに入るには、R（reset）ボタンをクリックしている間、B（boot）ボタンを押し続けます。
3 つすべての LED が点灯し、**RPI-RP2** という名前の仮想 USB ドライブが表示されます。

[firmware file](https://microblocks.fun/downloads/latest/vm/vm_xiao_rp2040.uf2) を
[vm folder](https://microblocks.fun/downloads/latest/vm) からダウンロードし、
そのファイルを仮想 USB ドライブにドラッグします。

数秒後にファームウェアがインストールされ、仮想 USB ドライブは表示されなくなります。
ディスクが正しく取り出されなかったという警告は無視してかまいません。

## ボードを MicroBlocks に接続する

データ通信対応の USB ケーブル（電源専用ケーブルではない）でボードをコンピュータに接続します。

Chrome または Edge ブラウザで [MicroBlocks editor](https://microblocks.fun/run/microblocks.html) を実行します。
**connect**（プラグアイコン）ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

メニューから **connect (USB)** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

ダイアログから自分のボードを選択し、**connect** ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-rp2040.png" style={{width:400, height:'auto'}}/></div>

ボードが接続されると、緑の丸とボード名が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-rp2040.png" style={{width:200, height:'auto'}}/></div>

## MicroBlocks でのコーディング

MicroBlocks は **ライブ** コーディング環境なので、コードを書きながらテストできます。
ブロックやスクリプトをクリックして実行します。
ブロックをスクリプト領域にドラッグし、組み立ててスクリプトを作成します。

コードは永続フラッシュメモリに保存され、ボードが
MicroBlocks editor に接続されていないときでも実行できます。
**when started** ブロックの下にあるスクリプトは、ボードの電源が入ったときに実行されます。

MicroBlocks は並行処理をサポートしており、最大 10 個のスクリプトを同時に実行できます。

多数の組み込みブロックに加えて、MicroBlocks には
追加機能や周辺機器をサポートする約 200 個のライブラリがあります。
ライブラリを追加するには **Add Library** ボタンをクリックします。

## 例

このスクリプトは赤、青、緑の LED を順番に点灯させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-three-led-blink.png" style={{width:300, height:'auto'}}/></div>

このスクリプトは RGB NeoPixel の色を変化させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2040-neopixel.png" style={{width:300, height:'auto'}}/></div>

[Blocks Reference](https://wiki.microblocks.fun/en/reference_manual) には、
さらに多くのサンプルが含まれています。

## 謝辞

この記事を執筆してくださった MicroBlocks の John 氏に感謝いたします。

## MicroBlocks リソース

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
