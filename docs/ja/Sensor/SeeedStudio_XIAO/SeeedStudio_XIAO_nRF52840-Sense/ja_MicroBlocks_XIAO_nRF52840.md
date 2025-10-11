---
description: XIAO nRF52840をMicroBlocksで使用する。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /ja/xiao_ble_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO nRF52840 と MicroBlocks

## MicroBlocks

MicroBlocksは、初心者（9歳から大人まで）がマイクロコントローラーを簡単にプログラミングできるブロック言語です。見た目のシンプルさにもかかわらず、MicroBlocksはMicroPythonよりも優れたパフォーマンスを持つ強力なプログラミング言語で、GPIOピンの制御やI2C、SPI、シリアル経由での周辺機器とのインターフェース機能、そして約200の拡張ライブラリを備えています。実際、一部のハードウェア設計者は、高速でインタラクティブな開発サイクルのため、ラピッドプロトタイピングやテストにMicroBlocksを好んで使用しています。

## XIAO nRF52840のピン配置とハードウェア機能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense-pinout.png" style={{width:650, height:'auto'}}/></div>

このボードの大きな利点は、低消費電力のNordic無線機能で、MicroBlocksがBluetooth Low Energy（BLE）経由でボードをワイヤレスでプログラムできることです。

ピン0〜10はGPIOピンです。ピン0〜5はアナログ入力として使用できます。
このボードには3つの小さなLEDも搭載されています：赤（ピン11、ユーザーLED）、青（ピン12）、緑（ピン13）。
すべてのLEDは反転しています：LEDを点灯させるには、対応するピンをLOWに設定します。

Senseバージョンには、オンボードPDMマイクロフォン、温度センサー、6軸LSM6DS3TR-C IMUも含まれており、これらはMicroBlocksの「Microphone」、「Basic Sensors」、「Motion」ライブラリでサポートされています。

## MicroBlocksファームウェアのインストール

ブートローダーモードに入るには、リセットボタンを素早く2回クリックします。
（リセットボタンは非常に小さく、USBポートが上向きの時にUSBポートの左側にあります。）

**XIAO-SENSE**という名前の仮想USBドライブが表示されます。

MicroBlocksの[ファームウェアフォルダ](https://microblocks.fun/downloads/latest/vm)から[ファームウェアファイル](https://microblocks.fun/downloads/latest/vm/vm_xiao_nrf52840.uf2)をダウンロードし、そのファイルを仮想USBドライブにドラッグします。

ファームウェアがインストールされ、数秒後に仮想USBドライブが消えます。
ディスクが適切に取り出されなかったという警告は無視してください。

## ボードをMicroBlocksに接続する

データ用USBケーブル（電源専用ケーブルでは**ない**）でボードをコンピューターに接続します。

ChromeまたはEdgeブラウザで[MicroBlocksエディター](https://microblocks.fun/run/microblocks.html)を実行します。
**connect**（プラグアイコン）ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

メニューから**connect (USB)**を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**注意：** 接続メニューで**connect (BLE)**を選択することで、ワイヤレスで接続することもできます。

ダイアログからボードを選択し、**connect**ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-nrf.png" style={{width:400, height:'auto'}}/></div>

ボードが接続されると、緑色の円とボード名が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-nrf.png" style={{width:200, height:'auto'}}/></div>

Xiao nRF52840に独自の電源がある場合、接続メニューで「connect (BLE)」を選択することで、USBケーブルなしでも接続できます。

## MicroBlocksでのコーディング

MicroBlocksは**ライブ**コーディング環境なので、コーディングしながらテストできます。
ブロックやスクリプトをクリックして実行します。
ブロックをスクリプトペインにドラッグして組み立て、スクリプトを作成します。

コードは永続的なフラッシュメモリに保存され、ボードがMicroBlocksエディターに接続されていなくても実行できます。
**when started**ブロックの下にあるスクリプトは、ボードに電源が供給されたときに実行されます。

MicroBlocksは並行処理をサポートしています。最大10個のスクリプトを同時に実行できます。

多くの組み込みブロックに加えて、MicroBlocksには追加機能や周辺機器をサポートする約200のライブラリがあります。
**Add Library**ボタンをクリックしてライブラリを追加します。

## 例

このスクリプトは赤いユーザーLEDを点滅させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

このスクリプトは赤、青、緑のLEDを順番に点灯させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-three-led-blink.png" style={{width:300, height:'auto'}}/></div>

[Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)には、さらに多くの例が含まれています。

## 特別な感謝

この記事を執筆してくれたMicroBlocksのJohnに特別な感謝を。

## MicroBlocksリソース

- [ウェブサイト](https://microblocks.fun)

- [ユーザーガイド](https://wiki.microblocks.fun/en/ide)

- [ブロックリファレンス](https://wiki.microblocks.fun/en/reference_manual)

- [ライブラリリファレンス](https://wiki.microblocks.fun/en/libraries)

- [学習ガイド](https://learn.microblocks.fun)
