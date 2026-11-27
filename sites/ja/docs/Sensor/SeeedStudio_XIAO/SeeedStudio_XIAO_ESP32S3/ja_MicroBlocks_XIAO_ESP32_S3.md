---
description: MicroBlocks 上で XIAO ESP32-S3 を使用する。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.webp
slug: /xiao_esp32s3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-11-28'
url: https://wiki.seeedstudio.com/ja/xiao_esp32s3_microblocks/
---

# XIAO ESP32-S3 と MicroBlocks

## MicroBlocks

MicroBlocks は、初心者（9 歳から大人まで）がマイコンを簡単にプログラムできるようにするブロック型言語です。一見シンプルに見えますが、MicroBlocks は MicroPython よりも高いパフォーマンスを持つ強力なプログラミング言語であり、GPIO ピンの制御や I2C、SPI、シリアル経由での周辺機器とのインターフェース、そして約 200 個の拡張ライブラリを備えています。実際、一部のハードウェア設計者は、高速でインタラクティブな開発サイクルのため、迅速なプロトタイピングとテストに MicroBlocks を好んで使用しています。

## XIAO ESP32S3 のピン配置とハードウェア機能

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=s3sense" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32-s3-sense-overview.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32s3-sense-pinout.jpg" style={{width:600, height:'auto'}}/></div>

このボードは、付属の外部アンテナを介して Wi-Fi と BLE の両方の接続性を提供します。

このボードには 11 本の GPIO ピン（ピン 0..10）があります。
Sense バージョンには、カメラボード上に 2 本の追加 GPIO ピン（ピン 11..12）があります。
ピン 0..5 および 8..10 はアナログ入力として使用できます。

ピン 13 は黄色のユーザー LED（反転）です。

Sense バージョンには、カメラ（1600x1200 解像度の OV2640 カメラまたは 2048x1536 解像度の OV3660 のいずれか）とデジタルマイクを備えた拡張ボードが含まれます。

**注意: カメラのサポートはまだ MicroBlocks に実装されていませんが、将来的に追加される可能性があります。**

## MicroBlocks ファームウェアのインストール

このボード用の MicroBlocks ファームウェアは、MicroBlocks エディタから直接インストールできます。

データ通信対応の USB ケーブル（電源専用ケーブルでは**ない**もの）でボードをコンピュータに接続します。

Chrome または Edge ブラウザで [MicroBlocks エディタ](https://microblocks.fun/run/microblocks.html) を実行します。

ギアメニューで「advanced mode」を有効にします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

展開されたギアメニューから **install ESP firmware from microblocks.fun** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

**xiao esp32 s3** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-s3.png" style={{width:200, height:'auto'}}/></div>

プロンプトが表示されたら、「Connect」ボタン（プラグアイコン）を使用してボードへの USB 接続を開きます。ファームウェアのインストール処理が開始されると、進行状況インジケータが表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

ファームウェアのインストールには 30～60 秒かかります。完了するまでブラウザのタブを切り替えないでください。

ファームウェアがインストールされたら、ボードを MicroBlocks に接続してコーディングを開始できます。

## ブートローダーモード

ESP32 ボードに MicroBlocks ファームウェアをインストールする際、通常は手動でブートローダーモードに入る必要はありません。

必要に応じてブートローダーモードに入るには、B（boot）ボタンを押し続けながら R（reset）ボタンを押して離します。
また、B ボタンを押し続けたままボードをコンピュータに接続することもできます。

**USB コネクタの両側にある小さな B ボタンと R ボタンは押しにくいため、
爪や小さなツールを使って押す必要があるかもしれません。**

## ボードを MicroBlocks に接続する

データ通信対応の USB ケーブル（電源専用ケーブルでは**ない**もの）でボードをコンピュータに接続します。

Chrome または Edge ブラウザで [MicroBlocks エディタ](https://microblocks.fun/run/microblocks.html) を実行します。
**connect**（プラグアイコン）ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

メニューから **connect (USB)** を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**注意:** 接続メニューで **connect (BLE)** を選択することで、ワイヤレス接続することもできます。

ダイアログから自分のボードを選択し、**connect** ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-esp.png" style={{width:400, height:'auto'}}/></div>

ボードが接続されると、緑色の丸とボード名が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32s3.png" style={{width:200, height:'auto'}}/></div>

## MicroBlocks でのコーディング

MicroBlocks は **ライブ** コーディング環境なので、コーディングしながらテストできます。
ブロックやスクリプトをクリックして実行します。
ブロックをスクリプトペインにドラッグし、組み立ててスクリプトを作成します。

コードは永続的なフラッシュメモリに保存され、ボードが MicroBlocks エディタに接続されていないときでも実行できます。
**when started** ブロックの下にあるスクリプトは、ボードの電源が入ったときに実行されます。

MicroBlocks は並行実行をサポートしています。最大 10 個のスクリプトを同時に実行できます。

多数の組み込みブロックに加えて、MicroBlocks には
追加機能や周辺機器をサポートする約 200 個のライブラリがあります。
ライブラリを追加するには **Add Library** ボタンをクリックします。

## 例

このスクリプトは黄色のユーザー LED を点滅させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

[Blocks Reference](https://wiki.microblocks.fun/en/reference_manual) には、さらに多くのサンプルが含まれています。

## プロジェクトデモ

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Vjjg3Hfl_UA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br/>
より包括的なデモとして、メイカーの [Zeller](https://www.hackster.io/Zeller) 氏は、XIAO ESP32S3、XIAO Expansion Board に Grove Speaker と Grove Button アクセサリを組み合わせた Mood Player を作成しています。MicroBlocks を使えば、複雑なコードを書くことなく、お気に入りのパターンや音楽を作成できます。詳細な手順付きのステップバイステップチュートリアルは [Hackster](https://www.hackster.io/Zeller/mood-player-2426ef) で確認できます。

## 特別な謝辞

この記事を執筆してくれた MicroBlocks の John 氏に特別な感謝を表します。

## MicroBlocks リソース

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
