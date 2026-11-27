---
description: MicroBlocks 上で XIAO nRF52840 を使用する。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_ble_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-09-25'
url: https://wiki.seeedstudio.com/ja/xiao_ble_microblocks/
---

# XIAO nRF52840 と MicroBlocks

## MicroBlocks

MicroBlocks は、初心者（9 歳から大人まで）がマイコンを簡単にプログラムできるようにするブロック型言語です。その見た目のシンプルさにもかかわらず、MicroBlocks は MicroPython よりも高いパフォーマンスを持つ強力なプログラミング言語であり、GPIO ピンの制御や I2C、SPI、シリアル経由での周辺機器とのインターフェース、そして約 200 個の拡張ライブラリを備えています。実際、一部のハードウェア設計者は、高速でインタラクティブな開発サイクルのため、迅速なプロトタイピングとテストに MicroBlocks を好んで使用しています。

## XIAO nRF52840 のピン配置とハードウェア機能

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52840sense" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense-pinout.png" style={{width:650, height:'auto'}}/></div>

このボードの大きな利点は低消費電力の Nordic 無線であり、これにより MicroBlocks は Bluetooth Low Energy (BLE) を介してボードをワイヤレスでプログラムできます。

ピン 0..10 は GPIO ピンです。ピン 0..5 はアナログ入力として使用できます。
このボードには、赤（ピン 11、ユーザー LED）、青（ピン 12）、緑（ピン 13）の 3 つの小さな LED もあります。
すべての LED は反転動作で、対応するピンを LOW に設定すると LED が点灯します。

Sense バージョンには、オンボードの PDM マイク、温度センサ、6 軸 LSM6DS3TR-C IMU も搭載されており、MicroBlocks の「Microphone」「Basic Sensors」「Motion」ライブラリでサポートされています。

## MicroBlocks ファームウェアのインストール

ブートローダーモードに入るには、リセットボタンを素早く 2 回クリックします。
（リセットボタンはとても小さく、USB ポートを上向きにしたときにポートの左側にあります。）

**XIAO-SENSE** という名前の仮想 USB ドライブが表示されます。

MicroBlocks の[ファームウェアフォルダ](https://microblocks.fun/downloads/latest/vm)から[ファームウェアファイル](https://microblocks.fun/downloads/latest/vm/vm_xiao_nrf52840.uf2)をダウンロードし、そのファイルを仮想 USB ドライブにドラッグします。

数秒後にファームウェアがインストールされ、仮想 USB ドライブは表示されなくなります。
ディスクが正しく取り出されなかったという警告は無視してかまいません。

## ボードを MicroBlocks に接続する

データ通信対応の USB ケーブル（電源専用ケーブルではない）でボードをコンピュータに接続します。

Chrome または Edge ブラウザで [MicroBlocks エディタ](https://microblocks.fun/run/microblocks.html)を実行します。
**connect**（プラグアイコン）ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

メニューから **connect (USB)** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**注:** 接続メニューで **connect (BLE)** を選択することで、ワイヤレス接続することもできます。

ダイアログから自分のボードを選択し、**connect** ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-nrf.png" style={{width:400, height:'auto'}}/></div>

ボードが接続されると、緑色の丸とボード名が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-nrf.png" style={{width:200, height:'auto'}}/></div>

Xiao nRF52840 が独自の電源を持っている場合は、接続メニューで "connect (BLE)" を選択することで、USB ケーブルなしでも接続できます。

## MicroBlocks でのコーディング

MicroBlocks は **ライブ** コーディング環境なので、コードを書きながらテストできます。
ブロックやスクリプトをクリックして実行します。
ブロックをスクリプト領域にドラッグし、組み合わせてスクリプトを作成します。

コードは永続的なフラッシュメモリに保存され、ボードが MicroBlocks エディタに接続されていないときでも実行できます。
**when started** ブロックの下にあるスクリプトは、ボードの電源が入ったときに実行されます。

MicroBlocks は並行処理をサポートしています。最大 10 個のスクリプトを同時に実行できます。

多数の組み込みブロックに加えて、MicroBlocks には追加機能や周辺機器をサポートする約 200 個のライブラリがあります。
ライブラリを追加するには **Add Library** ボタンをクリックします。

## 例

このスクリプトは赤いユーザー LED を点滅させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

このスクリプトは赤、青、緑の LED を順番に点灯させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-three-led-blink.png" style={{width:300, height:'auto'}}/></div>

[Blocks Reference](https://wiki.microblocks.fun/en/reference_manual) には、さらに多くの例が掲載されています。

## 謝辞

この記事を執筆してくれた MicroBlocks の John 氏に特別な感謝を表します。

## MicroBlocks リソース

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
