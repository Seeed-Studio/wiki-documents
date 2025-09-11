---
description: MicroBlocks で XIAO ESP32-C3 を使用する。
title: MicroBlocks で XIAO ESP32-C3 を使用する
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /ja/xiao_esp32c3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# MicroBlocks で XIAO ESP32-C3 を使用する

## MicroBlocks

MicroBlocks は、初心者（9歳から大人まで）がマイクロコントローラーを簡単にプログラミングできるブロック言語です。見た目のシンプルさにもかかわらず、MicroBlocks は MicroPython よりも優れたパフォーマンスを持つ強力なプログラミング言語です。GPIO ピンの制御や、I2C、SPI、シリアル経由での周辺機器とのインターフェース機能、そして約200の拡張ライブラリを提供します。実際、一部のハードウェア設計者は、高速でインタラクティブな開発サイクルのため、ラピッドプロトタイピングやテストに MicroBlocks を好んで使用しています。

### XIAO ESP32C3 のピン配置とハードウェア機能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-overview.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-pinout.png" style={{width:800, height:'auto'}}/></div>

このボードは、外部アンテナ（付属）を介して Wi-Fi と BLE 接続の両方を提供します。

ボードには11個の GPIO ピン（ピン0..10）があります。ピン0..3はアナログ入力として使用できます。

このボードには内蔵ユーザー LED が**ありません**。
MicroBlocks の「set user LED」ブロックを使用するには、ピン10とグラウンド間に外部LEDを接続してください。

### MicroBlocks ファームウェアのインストール

このボード用の MicroBlocks ファームウェアは、MicroBlocks エディターから直接インストールできます。

データ用 USB ケーブル（電源専用ケーブルでは**ない**）でボードをコンピューターに接続します。

Chrome または Edge ブラウザで [MicroBlocks エディター](https://microblocks.fun/run/microblocks.html) を実行します。

ギアメニューで「advanced mode」を有効にします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

拡張されたギアメニューから **install ESP firmware from microblocks.fun** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

**xiao_esp32_c3** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-c3.png" style={{width:200, height:'auto'}}/></div>

プロンプトが表示されたら、「Connect」ボタン（プラグアイコン）を使用してボードへの USB 接続を開きます。ファームウェアインストールプロセスが開始されると、進行状況インジケーターが表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

ファームウェアのインストールには30〜60秒かかります。完了するまでブラウザのタブを切り替えないでください。

ファームウェアがインストールされたら、ボードを MicroBlocks に接続してコーディングを開始できます！

## ブートローダーモード

ESP32 ボードに MicroBlocks ファームウェアをインストールする際、通常は手動でブートローダーモードに入る必要はありません。

必要に応じてブートローダーモードに入るには、R（リセット）ボタンを押して離す間、B（ブート）ボタンを押し続けます。
B ボタンを押し続けながらボードをコンピューターに接続することもできます。

## ボードを MicroBlocks に接続する

データ用 USB ケーブル（電源専用ケーブルでは**ない**）でボードをコンピューターに接続します。

Chrome または Edge ブラウザで [MicroBlocks エディター](https://microblocks.fun/run/microblocks.html) を実行します。
**connect**（プラグアイコン）ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

メニューから **connect (USB)** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**注意：** 接続メニューで **connect (BLE)** を選択することで、ワイヤレスで接続することもできます。

ダイアログからボードを選択し、**connect** ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-esp.png" style={{width:400, height:'auto'}}/></div>

ボードが接続されると、緑色の円とボード名が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32c3.png" style={{width:200, height:'auto'}}/></div>

## MicroBlocks でのコーディング

MicroBlocks は**ライブ**コーディング環境なので、コーディングしながらテストできます。
ブロックやスクリプトをクリックして実行します。
ブロックをスクリプトペインにドラッグし、組み立ててスクリプトを作成します。

コードは永続的なフラッシュメモリに保存され、ボードが MicroBlocks エディターに接続されていなくても実行できます。
**when started** ブロックの下にあるスクリプトは、ボードの電源が入ったときに実行されます。

MicroBlocks は並行処理をサポートしています。最大10個のスクリプトを同時に実行できます。

多くの内蔵ブロックに加えて、MicroBlocks には追加機能や周辺機器をサポートする約200のライブラリがあります。
**Add Library** ボタンをクリックしてライブラリを追加します。

## 例

このボードには内蔵ユーザー LED がありませんが、
ピン10とグラウンド間に LED を接続すると、このスクリプトで点滅させることができます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

[Blocks Reference](https://wiki.microblocks.fun/en/reference_manual) には、さらに多くの例が含まれています。

## 特別な謝辞

記事を執筆してくださった MicroBlocks の John さんに特別な感謝を申し上げます。

## MicroBlocks リソース

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)