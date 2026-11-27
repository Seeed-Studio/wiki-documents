---
description: MicroBlocks を使った XIAO ESP32-C3
title: MicroBlocks を使った XIAO ESP32-C3
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_esp32c3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-09-25'
url: https://wiki.seeedstudio.com/ja/xiao_esp32c3_microblocks/
---

# MicroBlocks を使った XIAO ESP32-C3

## MicroBlocks

MicroBlocks は、初心者（9 歳から大人まで）がマイコンを簡単にプログラムできるようにするブロック型言語です。その見た目のシンプルさにもかかわらず、MicroBlocks は MicroPython よりも高いパフォーマンスを持つ強力なプログラミング言語であり、GPIO ピンの制御や I2C、SPI、シリアル経由での周辺機器とのインターフェース、そして約 200 個の拡張ライブラリを備えています。実際、一部のハードウェア設計者は、高速でインタラクティブな開発サイクルのため、迅速なプロトタイピングとテストに MicroBlocks を好んで使用しています。

### XIAO ESP32C3 のピン配置とハードウェア機能

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=c3" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-overview.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-pinout.png" style={{width:800, height:'auto'}}/></div>

このボードは、付属の外部アンテナを使用して Wi-Fi と BLE の両方の接続機能を提供します。

このボードには 11 本の GPIO ピン（ピン 0..10）があります。ピン 0..3 はアナログ入力として使用できます。

このボードにはユーザー用の LED が内蔵されて**いません**。
MicroBlocks の「set user LED」ブロックを使用するには、ピン 10 と GND の間に外付け LED を接続してください。

### MicroBlocks ファームウェアのインストール

このボード用の MicroBlocks ファームウェアは、MicroBlocks エディタから直接インストールできます。

データ通信対応の USB ケーブル（給電専用ケーブル**ではなく**）でボードをコンピュータに接続します。

Chrome または Edge ブラウザで [MicroBlocks editor](https://microblocks.fun/run/microblocks.html) を実行します。

ギアメニューで「advanced mode」を有効にします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

展開されたギアメニューから **install ESP firmware from microblocks.fun** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

**xiao_esp32_c3** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-c3.png" style={{width:200, height:'auto'}}/></div>

指示が表示されたら、「Connect」ボタン（プラグのアイコン）を使ってボードへの USB 接続を開きます。ファームウェアのインストール処理が始まると、進行状況インジケータが表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

ファームウェアのインストールには 30～60 秒かかります。完了するまでブラウザのタブを切り替えないでください。

ファームウェアがインストールされたら、ボードを MicroBlocks に接続してコーディングを開始できます。

## ブートローダーモード

ESP32 ボードに MicroBlocks ファームウェアをインストールする際、通常は手動でブートローダーモードに入る必要はありません。

必要な場合は、B（boot）ボタンを押し続けながら
R（reset）ボタンを押して離すことで、ブートローダーモードに入ります。
また、B ボタンを押し続けたままボードをコンピュータに接続することもできます。

## ボードを MicroBlocks に接続する

データ通信対応の USB ケーブル（給電専用ケーブル**ではなく**）でボードをコンピュータに接続します。

Chrome または Edge ブラウザで [MicroBlocks editor](https://microblocks.fun/run/microblocks.html) を実行します。
**connect**（プラグのアイコン）ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

メニューから **connect (USB)** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**注:** 接続メニューで **connect (BLE)** を選択することで、ワイヤレス接続することもできます。

ダイアログから自分のボードを選択し、**connect** ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-esp.png" style={{width:400, height:'auto'}}/></div>

ボードが接続されると、緑色の丸とボード名が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32c3.png" style={{width:200, height:'auto'}}/></div>

## MicroBlocks でのコーディング

MicroBlocks は**ライブ**コーディング環境なので、コーディングしながらテストできます。
ブロックやスクリプトをクリックして実行します。
ブロックをスクリプト領域にドラッグし、組み立ててスクリプトを作成します。

コードは永続的なフラッシュメモリに保存され、ボードが
MicroBlocks エディタに接続されていないときでも実行できます。
**when started** ブロックの下にあるスクリプトは、ボードの電源が入ったときに実行されます。

MicroBlocks は並行実行をサポートしており、最大 10 個のスクリプトを同時に実行できます。

多数の組み込みブロックに加えて、MicroBlocks には
追加機能や周辺機器をサポートする約 200 個のライブラリがあります。
ライブラリを追加するには、**Add Library** ボタンをクリックします。

## 例

このボードにはユーザー用の LED は内蔵されていませんが、
ピン 10 と GND の間に LED を接続すれば、次のスクリプトで点滅させることができます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

[Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)
には、さらに多くのサンプルが含まれています。

## 謝辞

この記事を執筆してくださった MicroBlocks の John 氏に感謝いたします。

## MicroBlocks リソース

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
