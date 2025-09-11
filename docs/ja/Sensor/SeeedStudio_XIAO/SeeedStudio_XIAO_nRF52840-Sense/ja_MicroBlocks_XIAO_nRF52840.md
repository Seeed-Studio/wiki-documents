---
description: XIAO nRF52840 を MicroBlocks で使用する。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /ja/xiao_ble_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# MicroBlocks で XIAO nRF52840 を使用する

## MicroBlocks

MicroBlocks は、初心者（9歳から大人まで）がマイクロコントローラーを簡単にプログラムできるブロック言語です。見た目のシンプルさにもかかわらず、MicroBlocks は MicroPython よりも優れたパフォーマンスを持つ強力なプログラミング言語です。GPIO ピンの制御や、I2C、SPI、シリアル経由での周辺機器とのインターフェース機能、そして約200の拡張ライブラリを提供します。実際、一部のハードウェア設計者は、高速でインタラクティブな開発サイクルのため、ラピッドプロトタイピングやテストに MicroBlocks を好んで使用しています。

## XIAO nRF52840 のピン配置とハードウェア機能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense-pinout.png" style={{width:650, height:'auto'}}/></div>

このボードの大きな利点は、低消費電力の Nordic ラジオです。これにより、MicroBlocks は Bluetooth Low Energy (BLE) を介してボードをワイヤレスでプログラムできます。

ピン 0..10 は GPIO ピンです。ピン 0..5 はアナログ入力として使用できます。
このボードには3つの小さな LED も搭載されています：赤（ピン11、ユーザーLED）、青（ピン12）、緑（ピン13）。
すべての LED は反転しています：関連するピンを LOW に設定すると LED が点灯します。

Sense バージョンには、オンボード PDM マイクロフォン、温度センサー、6軸 LSM6DS3TR-C IMU も含まれており、これらは MicroBlocks の「Microphone」、「Basic Sensors」、「Motion」ライブラリでサポートされています。

## MicroBlocks ファームウェアのインストール

ブートローダーモードに入るには、リセットボタンを素早く2回クリックします。
（リセットボタンは非常に小さく、USB ポートが上向きの時に USB ポートの左側にあります。）

**XIAO-SENSE** という名前の仮想 USB ドライブが表示されます。

MicroBlocks の[ファームウェアフォルダ](https://microblocks.fun/downloads/latest/vm)から[ファームウェアファイル](https://microblocks.fun/downloads/latest/vm/vm_xiao_nrf52840.uf2)をダウンロードし、そのファイルを仮想 USB ドライブにドラッグします。

ファームウェアがインストールされ、数秒後に仮想 USB ドライブが消えます。
ディスクが適切に取り出されなかったという警告は無視してください。

## ボードを MicroBlocks に接続する

データ用 USB ケーブル（電源専用ケーブルでは**ない**）でボードをコンピューターに接続します。

Chrome または Edge ブラウザで [MicroBlocks エディター](https://microblocks.fun/run/microblocks.html)を実行します。
**connect**（プラグアイコン）ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

メニューから **connect (USB)** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**注意：** 接続メニューで **connect (BLE)** を選択してワイヤレスで接続することもできます。

ダイアログからボードを選択し、**connect** ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-nrf.png" style={{width:400, height:'auto'}}/></div>

ボードが接続されると、緑色の円とボード名が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-nrf.png" style={{width:200, height:'auto'}}/></div>

Xiao nRF52840 に独自の電源がある場合は、接続メニューで「connect (BLE)」を選択することで、USB ケーブルなしでも接続できます。

## MicroBlocks でのコーディング

MicroBlocks は**ライブ**コーディング環境なので、コーディングしながらテストできます。
ブロックやスクリプトをクリックして実行します。
ブロックをスクリプトペインにドラッグして組み立て、スクリプトを作成します。

コードは永続的なフラッシュメモリに保存され、ボードが MicroBlocks エディターに接続されていなくても実行できます。
**when started** ブロックの下にあるスクリプトは、ボードの電源が入ったときに実行されます。

MicroBlocks は並行処理をサポートしています。最大10個のスクリプトを同時に実行できます。

多くの組み込みブロックに加えて、MicroBlocks には追加機能や周辺機器をサポートする約200のライブラリがあります。
**Add Library** ボタンをクリックしてライブラリを追加します。

## 例

このスクリプトは赤いユーザー LED を点滅させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

このスクリプトは赤、青、緑の LED を順番に点灯させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-three-led-blink.png" style={{width:300, height:'auto'}}/></div>

[ブロックリファレンス](https://wiki.microblocks.fun/en/reference_manual)には、さらに多くの例が含まれています。

## 特別な謝辞

この記事を執筆してくれた MicroBlocks の John に特別な感謝を捧げます。

## MicroBlocks リソース

- [ウェブサイト](https://microblocks.fun)

- [ユーザーガイド](https://wiki.microblocks.fun/en/ide)

- [ブロックリファレンス](https://wiki.microblocks.fun/en/reference_manual)

- [ライブラリリファレンス](https://wiki.microblocks.fun/en/libraries)

- [学習ガイド](https://learn.microblocks.fun)
