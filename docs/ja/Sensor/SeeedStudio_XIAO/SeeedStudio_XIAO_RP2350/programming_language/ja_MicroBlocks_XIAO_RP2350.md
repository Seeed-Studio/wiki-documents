---
description: MicroBlocks で XIAO RP2350 を使用する。
title: MicroBlocks で XIAO RP2350 を使用する
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /ja/xiao_rp2350_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

## MicroBlocks で XIAO RP2350 を使用する

### MicroBlocks

MicroBlocks は、初心者（9歳から大人まで）がマイクロコントローラーを簡単にプログラミングできるブロック言語です。見た目の単純さにもかかわらず、MicroBlocks は MicroPython よりも優れたパフォーマンスを持つ強力なプログラミング言語で、GPIO ピンの制御や I2C、SPI、シリアル経由での周辺機器とのインターフェース機能、そして約200の拡張ライブラリを備えています。実際、高速でインタラクティブな開発サイクルのため、一部のハードウェア設計者は迅速なプロトタイピングとテストに MicroBlocks を好んで使用しています。

### XIAO RP2350 ピン配置とハードウェア機能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2350-pinout.png" style={{width:600, height:'auto'}}/></div><br />

ピン 0..18 は GPIO ピンです。（**注意：GPIO 11-18 はボードの裏面のパッドです。**）
ピン 0..2 はアナログ入力として使用できます。このボードには、ピン 19 に黄色のユーザー LED（反転）
とピン 20 に単一の RGB LED（NeoPixel）があります。

### MicroBlocks ファームウェアのインストール

ブートローダーモードに入るには、小さな B（ブート）ボタンを押しながら R（リセット）ボタンをクリックします。**RP2350** という名前の仮想 USB ドライブが表示されます。

[ファームウェアファイル](https://microblocks.fun/downloads/latest/vm/vm_xiao_rp2350.uf2)を
[vm フォルダ](https://microblocks.fun/downloads/latest/vm)からダウンロードし、
そのファイルを仮想 USB ドライブにドラッグします。

ファームウェアがインストールされ、数秒後に仮想 USB ドライブが消えます。
ディスクが正しく取り出されなかったという警告は無視してください。

### ボードを MicroBlocks に接続する

データ用 USB ケーブル（電源専用ケーブルでは**ない**）でボードをコンピューターに接続します。

Chrome または Edge ブラウザで [MicroBlocks エディター](https://microblocks.fun/run/microblocks.html)を実行します。
**connect**（プラグアイコン）ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

メニューから **connect (USB)** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

ダイアログからボードを選択し、**connect** ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-rp2350.png" style={{width:200, height:'auto'}}/></div>

ボードが接続されると、緑色の円とボード名が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-rp2350.png" style={{width:200, height:'auto'}}/></div>

### MicroBlocks でのコーディング

MicroBlocks は**ライブ**コーディング環境なので、コーディングしながらテストできます。
ブロックやスクリプトをクリックして実行します。
ブロックをスクリプトペインにドラッグして組み立て、スクリプトを作成します。

コードは永続的なフラッシュメモリに保存され、ボードが
MicroBlocks エディターに接続されていなくても実行できます。
**when started** ブロックの下にあるスクリプトは、ボードに電源が入ったときに実行されます。

MicroBlocks は並行処理をサポートしています。最大10個のスクリプトを同時に実行できます。

多くの組み込みブロックに加えて、MicroBlocks には約200のライブラリがあり、
追加機能と周辺機器をサポートしています。
**Add Library** ボタンをクリックしてライブラリを追加します。

### 例

このスクリプトは黄色のユーザー LED を点滅させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

このスクリプトは RGB NeoPixel の色を変化させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2350-neopixel.png" style={{width:200, height:'auto'}}/></div>

[ブロックリファレンス](https://wiki.microblocks.fun/en/reference_manual)には
多くの追加例が含まれています。

## 特別な感謝

この記事を執筆してくださった MicroBlocks の John さんに特別な感謝を申し上げます。

### MicroBlocks リソース

- [ウェブサイト](https://microblocks.fun)

- [ユーザーガイド](https://wiki.microblocks.fun/en/ide)

- [ブロックリファレンス](https://wiki.microblocks.fun/en/reference_manual)

- [ライブラリリファレンス](https://wiki.microblocks.fun/en/libraries)

- [学習ガイド](https://learn.microblocks.fun)
