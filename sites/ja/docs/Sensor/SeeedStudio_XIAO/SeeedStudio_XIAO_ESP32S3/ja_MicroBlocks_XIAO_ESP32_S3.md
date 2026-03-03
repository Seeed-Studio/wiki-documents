---
description: XIAO ESP32-S3をMicroBlocksで使用する。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.webp
slug: /ja/xiao_esp32s3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO ESP32-S3 と MicroBlocks

## MicroBlocks

MicroBlocksは、初心者（9歳から大人まで）がマイクロコントローラーを簡単にプログラムできるブロック言語です。見た目のシンプルさにもかかわらず、MicroBlocksはMicroPythonよりも優れたパフォーマンスを持つ強力なプログラミング言語で、GPIOピンの制御やI2C、SPI、シリアル経由での周辺機器とのインターフェース機能、そして約200の拡張ライブラリを提供します。実際、一部のハードウェア設計者は、高速でインタラクティブな開発サイクルのため、迅速なプロトタイピングとテストにMicroBlocksを好んで使用しています。

## XIAO ESP32S3 ピン配置とハードウェア機能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32-s3-sense-overview.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32s3-sense-pinout.jpg" style={{width:600, height:'auto'}}/></div>

このボードは、外部アンテナ（付属）を介してWi-FiとBLE接続の両方を提供します。

ボードには11個のGPIOピン（ピン0..10）があります。
Senseバージョンには、カメラボード上に2つの追加GPIOピン（ピン11..12）があります。
ピン0..5と8..10はアナログ入力として使用できます。

ピン13は黄色のユーザーLED（反転）です。

Senseバージョンには、カメラ（1600x1200解像度のOV2640カメラまたは2048x1536解像度のOV3660）とデジタルマイクロフォンを搭載した拡張ボードが含まれています。

**注意：カメラサポートはMicroBlocksではまだ実装されていませんが、将来追加される可能性があります。**

## MicroBlocksファームウェアのインストール

このボード用のMicroBlocksファームウェアは、MicroBlocksエディターから直接インストールできます。

データUSBケーブル（電源専用ケーブルでは**ない**）でボードをコンピューターに接続します。

ChromeまたはEdgeブラウザで[MicroBlocksエディター](https://microblocks.fun/run/microblocks.html)を実行します。

ギアメニューで「advanced mode」を有効にします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

拡張されたギアメニューから**install ESP firmware from microblocks.fun**を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

**xiao esp32 s3**を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-s3.png" style={{width:200, height:'auto'}}/></div>

プロンプトが表示されたら、"Connect"ボタン（プラグアイコン）を使用してボードへのUSB接続を開きます。ファームウェアインストールプロセスが開始されると、進行状況インジケーターが表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

ファームウェアのインストールには30〜60秒かかります。完了するまでブラウザタブを切り替えないでください。

ファームウェアがインストールされたら、ボードをMicroBlocksに接続してコーディングを開始できます！

## ブートローダーモード

ESP32ボードにMicroBlocksファームウェアをインストールする際、通常は手動でブートローダーモードに入る必要はありません。

必要に応じてブートローダーモードに入るには、R（リセット）ボタンを押して離しながら、B（ブート）ボタンを押し続けます。
Bボタンを押し続けながらボードをコンピューターに接続することもできます。

**USBコネクターの両側にある小さなBとRボタンは扱いにくいです；
押すには爪や小さな工具を使用する必要があるかもしれません。**

## ボードをMicroBlocksに接続する

データUSBケーブル（電源専用ケーブルでは**ない**）でボードをコンピューターに接続します。

ChromeまたはEdgeブラウザで[MicroBlocksエディター](https://microblocks.fun/run/microblocks.html)を実行します。
**connect**（プラグアイコン）ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

メニューから**connect (USB)**を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**注意：** 接続メニューで**connect (BLE)**を選択することで、ワイヤレスで接続することもできます。

ダイアログからボードを選択し、**connect**ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-esp.png" style={{width:400, height:'auto'}}/></div>

ボードが接続されると、緑色の円とボード名が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32s3.png" style={{width:200, height:'auto'}}/></div>

## MicroBlocksでのコーディング

MicroBlocksは**ライブ**コーディング環境なので、コーディングしながらテストできます。
ブロックやスクリプトをクリックして実行します。
ブロックをスクリプトペインにドラッグして組み立て、スクリプトを作成します。

コードは永続的なフラッシュメモリに保存され、ボードがMicroBlocksエディターに接続されていなくても実行できます。
**when started**ブロックの下にあるスクリプトは、ボードに電源が供給されたときに実行されます。

MicroBlocksは並行処理をサポートしています。最大10個のスクリプトを同時に実行できます。

多くの組み込みブロックに加えて、MicroBlocksには約200のライブラリがあり、
追加機能と周辺機器をサポートします。
**Add Library**ボタンをクリックしてライブラリを追加します。

## 例

このスクリプトは黄色のユーザーLEDを点滅させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

[ブロックリファレンス](https://wiki.microblocks.fun/en/reference_manual)には、さらに多くの例が含まれています。

## プロジェクトデモ

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Vjjg3Hfl_UA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br/>
より包括的なデモンストレーションとして、メーカーの[Zeller](https://www.hackster.io/Zeller)がXIAO ESP32S3、XIAO拡張ボード、Grove SpeakerとGrove Buttonアクセサリを使用してMood Playerを作成しました。MicroBlocksを使用すると、複雑なコードを書くことなく、お気に入りのパターンと音楽を作成できます。詳細な手順を含むステップバイステップのチュートリアルは[Hackster](https://www.hackster.io/Zeller/mood-player-2426ef)で見つけることができます。

## 特別な感謝

記事を執筆してくれたMicroBlocksのJohnに特別な感謝を。

## MicroBlocksリソース

- [ウェブサイト](https://microblocks.fun)

- [ユーザーガイド](https://wiki.microblocks.fun/en/ide)

- [ブロックリファレンス](https://wiki.microblocks.fun/en/reference_manual)

- [ライブラリリファレンス](https://wiki.microblocks.fun/en/libraries)

- [学習ガイド](https://learn.microblocks.fun)
