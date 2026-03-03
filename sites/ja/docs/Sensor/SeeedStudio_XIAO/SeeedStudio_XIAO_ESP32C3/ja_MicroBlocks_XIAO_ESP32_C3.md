---
description: XIAO ESP32-C3 と MicroBlocks
title: XIAO ESP32-C3 と MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /ja/xiao_esp32c3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO ESP32-C3 と MicroBlocks

## MicroBlocks

MicroBlocks は、初心者（9歳から大人まで）がマイクロコントローラーを簡単にプログラミングできるブロック言語です。見た目のシンプルさにもかかわらず、MicroBlocks は MicroPython よりも優れたパフォーマンスを持つ強力なプログラミング言語です。GPIO ピンの制御や I2C、SPI、シリアル経由での周辺機器とのインターフェース機能、そして約200の拡張ライブラリを備えています。実際、一部のハードウェア設計者は、高速でインタラクティブな開発サイクルのため、迅速なプロトタイピングとテストに MicroBlocks を好んで使用しています。

### XIAO ESP32C3 ピン配置とハードウェア機能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-overview.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-pinout.png" style={{width:800, height:'auto'}}/></div>

このボードは、外部アンテナ（付属）を介して Wi-Fi と BLE 接続の両方を提供します。

ボードには11個の GPIO ピン（ピン 0..10）があります。ピン 0..3 はアナログ入力として使用できます。

このボードには内蔵ユーザー LED は**ありません**。
MicroBlocks の「set user LED」ブロックを使用するには、ピン10とグラウンド間に外部 LED を接続してください。

### MicroBlocks ファームウェアのインストール

このボード用の MicroBlocks ファームウェアは、MicroBlocks エディターから直接インストールできます。

データ用 USB ケーブル（電源専用ケーブルでは**ない**）でボードをコンピューターに接続します。

Chrome または Edge ブラウザで [MicroBlocks エディター](https://microblocks.fun/run/microblocks.html) を実行します。

歯車メニューで「advanced mode」を有効にします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

拡張された歯車メニューから **install ESP firmware from microblocks.fun** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

**xiao_esp32_c3** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-c3.png" style={{width:200, height:'auto'}}/></div>

プロンプトが表示されたら、「Connect」ボタン（プラグアイコン）を使用してボードへの USB 接続を開きます。ファームウェアインストールプロセスが開始されると、進行状況インジケーターが表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

ファームウェアのインストールには30〜60秒かかります。完了するまでブラウザタブを切り替えないでください。

ファームウェアがインストールされたら、ボードを MicroBlocks に接続してコーディングを開始できます！

## ブートローダーモード

ESP32 ボードに MicroBlocks ファームウェアをインストールする際、通常は手動でブートローダーモードに入る必要はありません。

必要に応じてブートローダーモードに入るには、B（ブート）ボタンを押し続けながら
R（リセット）ボタンを押して離します。
B ボタンを押し続けながらボードをコンピューターに接続することもできます。

## ボードを MicroBlocks に接続する

データ用 USB ケーブル（電源専用ケーブルでは**ない**）でボードをコンピューターに接続します。

Chrome または Edge ブラウザで [MicroBlocks エディター](https://microblocks.fun/run/microblocks.html) を実行します。
**connect**（プラグアイコン）ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

メニューから **connect (USB)** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**注意：** 接続メニューで **connect (BLE)** を選択することで、ワイヤレス接続も可能です。

ダイアログからボードを選択し、**connect** ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-esp.png" style={{width:400, height:'auto'}}/></div>

ボードが接続されると、緑色の円とボード名が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32c3.png" style={{width:200, height:'auto'}}/></div>

## MicroBlocks でのコーディング

MicroBlocks は**ライブ**コーディング環境なので、コーディングしながらテストできます。
ブロックやスクリプトをクリックして実行します。
ブロックをスクリプトペインにドラッグして組み立て、スクリプトを作成します。

コードは永続的なフラッシュメモリに保存され、ボードが
MicroBlocks エディターに接続されていなくても実行できます。
**when started** ブロックの下にあるスクリプトは、ボードの電源が入ったときに実行されます。

MicroBlocks は並行処理をサポートしています。最大10個のスクリプトを同時に実行できます。

多くの組み込みブロックに加えて、MicroBlocks には約200のライブラリがあり、
追加機能と周辺機器をサポートしています。
**Add Library** ボタンをクリックしてライブラリを追加します。

## 例

このボードには内蔵ユーザー LED はありませんが、
ピン10とグラウンド間に LED を接続すると、このスクリプトで点滅させることができます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

[ブロックリファレンス](https://wiki.microblocks.fun/en/reference_manual)
には、さらに多くの例が含まれています。

## 特別な謝辞

この記事を執筆してくださった MicroBlocks の John さんに特別な感謝を申し上げます。

## MicroBlocks リソース

- [ウェブサイト](https://microblocks.fun)

- [ユーザーガイド](https://wiki.microblocks.fun/en/ide)

- [ブロックリファレンス](https://wiki.microblocks.fun/en/reference_manual)

- [ライブラリリファレンス](https://wiki.microblocks.fun/en/libraries)

- [学習ガイド](https://learn.microblocks.fun)
