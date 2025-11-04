---
description: XIAO SAMD21をMicroBlocksで使用する。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /ja/xiao_samd21_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO SAMD21 と MicroBlocks

## MicroBlocks

MicroBlocksは、初心者（9歳から大人まで）がマイクロコントローラーを簡単にプログラムできるブロック言語です。見た目のシンプルさにもかかわらず、MicroBlocksはMicroPythonよりも優れたパフォーマンスを持つ強力なプログラミング言語で、GPIOピンの制御やI2C、SPI、シリアル経由での周辺機器とのインターフェース機能、そして約200の拡張ライブラリを備えています。実際、一部のハードウェア設計者は、高速でインタラクティブな開発サイクルのため、迅速なプロトタイピングとテストにMicroBlocksを好んで使用しています。

### XIAO SAMD21 ピン配置とハードウェア機能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-pinout-samd21.jpg" style={{width:600, height:'auto'}}/></div>

すべてのXIAOボードと同様に、このボードには11個のGPIOピン（ピン0〜10）があります。すべてのピンはアナログ入力、デジタル出力、アナログ出力に使用できます。
ピン1〜10は、他のXiaoボードと同様にパルス幅変調（PWM）出力をサポートしています。

他のボードとは異なり、このボードのピン0は**10ビットデジタル-アナログコンバーター**（DAC）です。ピン0を0から1023の間の数値に設定すると、ピンは0から3.3ボルトの間の安定した電圧を出力します。（対照的に、PWMは数値がパルス幅を決定するデジタルパルスの連続を出力します。）DACピンは音声やその他のアナログ信号の生成に使用できます。

このボードには黄色のユーザーLED（ピン13）と青色のRX/TX LED（ピン11と12）があります。
すべてのLEDは反転しています：LEDを点灯させるには関連するピンをLOWに設定します。

RX/TX LEDはMicroBlocksで使用できますが、注意点があります。
MicroBlocksは常にボードとデータを交換しているため、
MicroBlocksエディターを使用している際にRX/TX LEDが明るく点滅します。
その点滅が気を散らすため、RX/TX LEDはデフォルトで無効になっており、
スクリプトが関連するピンを設定した場合にのみ有効になります。
このことを念頭に置くと、RX/TX LEDはIDEが接続されていない時に有用です。

## MicroBlocksファームウェアのインストール

このボードにはブートボタンがないため、ブートローダーモードに入るのは少し難しいです。USBポートの左側にある2つのRSTピンの接点を素早く2回ショートさせるためにワイヤーを使用してください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" style={{width:400, height:'auto'}}/></div>

成功すると、黄色のユーザーLEDがゆっくりと点滅し、
**Arduino**という名前の仮想USBドライブが表示されます。

MicroBlocksの[ファームウェアフォルダ](https://microblocks.fun/downloads/latest/vm)から
[ファームウェアファイル](https://microblocks.fun/downloads/latest/vm/vm_xiao_samd21.uf2)をダウンロードし、
そのファイルを仮想USBドライブにドラッグしてください。

ファームウェアがインストールされ、数秒後に仮想USBドライブが消えます。
ディスクが適切に取り出されなかったという警告は無視してください。

## ボードをMicroBlocksに接続する

データ用USBケーブル（電源専用ケーブルでは**ない**）でボードをコンピューターに接続してください。

ChromeまたはEdgeブラウザで[MicroBlocksエディター](https://microblocks.fun/run/microblocks.html)を実行してください。
**connect**（プラグアイコン）ボタンをクリックしてください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:300, height:'auto'}}/></div>

メニューから**connect (USB)**を選択してください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:300, height:'auto'}}/></div>

ダイアログからボードを選択し、**connect**ボタンをクリックしてください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-samd21.png" style={{width:400, height:'auto'}}/></div>

ボードが接続されると、緑色の円とボード名が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-samd21.png" style={{width:300, height:'auto'}}/></div>

## MicroBlocksでのコーディング

MicroBlocksは**ライブ**コーディング環境なので、コーディングしながらテストできます。
ブロックやスクリプトをクリックして実行してください。
ブロックをスクリプトペインにドラッグして組み立て、スクリプトを作成してください。

コードは永続的なフラッシュメモリに保存され、ボードが
MicroBlocksエディターに接続されていない場合でも実行できます。
**when started**ブロックの下にあるスクリプトは、ボードに電源が供給されたときに実行されます。

MicroBlocksは並行処理をサポートしています。最大10個のスクリプトを同時に実行できます。

多くの組み込みブロックに加えて、MicroBlocksには追加機能と周辺機器をサポートする
約200のライブラリがあります。
ライブラリを追加するには**Add Library**ボタンをクリックしてください。

## 例

このスクリプトは黄色のユーザーLEDを点滅させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

[ブロックリファレンス](https://wiki.microblocks.fun/en/reference_manual)には
多くの追加例が含まれています。

## プロジェクトデモ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/main.png" style={{width:600, height:'auto'}}/></div>

より包括的なプロジェクトデモとして、メーカーの[Luis](https://www.hackster.io/luis_a_la_m)がXIAO SAMD21、Grove Shield for XIAO、LEDマトリックスを使用して8x8 LED Neo-pixelデバイスを構築しました。これにより、複雑なコードを書くことなくMicroBlocksを使用して見事なピクセルパターンを描くことができます。ステップバイステップのチュートリアルは[Hackster](https://www.hackster.io/luis_a_la_m/paint-with-pixels-8f3a15)で見つけることができます。


## 特別な感謝

この記事を執筆してくれたMicroBlocksのJohnに特別な感謝を申し上げます。

## MicroBlocksリソース

- [ウェブサイト](https://microblocks.fun)

- [ユーザーガイド](https://wiki.microblocks.fun/en/ide)

- [ブロックリファレンス](https://wiki.microblocks.fun/en/reference_manual)

- [ライブラリリファレンス](https://wiki.microblocks.fun/en/libraries)

- [学習ガイド](https://learn.microblocks.fun)
