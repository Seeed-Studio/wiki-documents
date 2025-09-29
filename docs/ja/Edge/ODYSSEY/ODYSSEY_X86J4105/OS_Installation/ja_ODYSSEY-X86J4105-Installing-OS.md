---
description: ODYSSEY - X86J41x5
title: オリジナルOS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86J4105-Installing-OS
last_update:
  date: 05/15/2025
  author: w0x7ce

---


<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/ja/ODYSSEY-X86J4105-Installing-OS/
sku: 102110399
--- -->

このチュートリアルでは、ブート可能なUSBドライブを作成し、Linux OS（Ubuntu Desktop 18.04）をODYSSEY - X86J41x5にインストールする方法を説明します。

## ハードウェア要件

- 動作するコンピュータ

- USBドライブ（8GB以上推奨）

- モニター

- キーボードとマウス

## ブート可能なUSBの作成

### ステップ1 - オペレーティングシステムイメージのダウンロード

必要なOSイメージをローカルドライブにダウンロードします。このチュートリアルでは、*Ubuntu Desktop 18.04*を使用してODYSSEY - X86J41x5へのインストールを説明します。

- [Ubuntu](https://ubuntu.com/download/desktop) OSイメージをこちらからダウンロードできます。

### ステップ2 - ブート可能なUSBの準備

USBドライブをフォーマットします。Windowsユーザーの場合、USBドライブを右クリックして`フォーマット`を選択することでフォーマットできます。

**注意:** ファイルシステムには`FAT32`を選択してください。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### ステップ3 - フラッシュバーナーのダウンロード

オープンソースのフラッシュバーナー[balenaEtcher](https://www.balena.io/etcher/)をダウンロードします。お使いのオペレーティングシステム（Windows/macOS/Linux）に応じたバージョンをダウンロードしてください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### ステップ4 - OSイメージをUSBに書き込む

ダウンロードしたオペレーティングシステムイメージを選択し、フォーマット済みのUSBドライブを選択してフラッシュします。これでブート可能なUSBの準備が完了です。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## オペレーティングシステム（Ubuntu）のインストール

### ステップ1 - ブートデバイスとしてブート可能なUSBを選択

ブート可能なUSB、モニター、キーボードをODYSSEY - X86J41x5に接続し、電源を入れます。起動時に**`F7`**を押し続けてブートマネージャ画面に入ります。キーボードの&#8593;および&#8595;キーを使用してブート可能なUSBを選択します。

このチュートリアルでは、`UEFI: Mass Storage Device 1.00`がブート可能なUSBです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/bios.png" /></div>

### ステップ2 - OSのインストール

**`Install ubuntu`**を選択してEnterキーを押します。画面上のインストール手順（システム言語、ユーザー名、場所など）に従って進めます。

**注意:** Ubuntuのインストール手順の詳細については、[こちら](https://www.youtube.com/watch?v=vt5Lu_ltPkU)のビデオをご覧ください。*インストール部分はビデオの3:20から始まります。*

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/install.png" /></div>

### ステップ3 - 再起動して新しいOSを楽しむ

すべてが正常に進めば、UbuntuがODYSSEY - X86J41x5にインストールされ、新しいOSを楽しむことができます！

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/result.jpg" /></div>

## 注意事項

- **Ubuntu 16はODYSSEY - X86J41x5ではサポートされていません**

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>