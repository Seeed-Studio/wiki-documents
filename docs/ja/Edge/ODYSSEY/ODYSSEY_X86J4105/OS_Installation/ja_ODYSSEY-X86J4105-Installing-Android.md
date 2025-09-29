---
description: ODYSSEY - X86J41x5
title: Android-x86 インストール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86J4105-Installing-Android
last_update:
  date: 05/15/2025
  author: w0x7ce

---


<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/ja/ODYSSEY-X86J4105-Installing-Android/
sku: 102110399
--- -->

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/BBC.png" /></div>

このチュートリアルでは、ODYSSEY-X86J41x5 に Android-x86 をインストールし、[Kodi](https://kodi.tv/) を使用してスマート TV ボックスとしてライブストリーム TV を視聴したり、NAS などのローカルストレージからメディアを再生したりする方法を説明します。

Android-x86 は、Android オープンソースプロジェクトを x86 プラットフォームに移植するプロジェクトで、以前は「Android x86 サポートのためのパッチホスティング」として知られていました。詳細については、公式サイト [Android-x86](https://www.android-x86.org/) をご覧ください。

## ハードウェア要件

- 動作するコンピュータ

- USB ドライブ x 1 (8GB 以上推奨)

- モニター

- キーボード

## Android-x86 OS イメージのダウンロード

まず、[Android-x86 OS イメージ](https://www.android-x86.org/download.html) をドライブにダウンロードします。ファイル形式は `.iso` である必要があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/download.png" /></div>

このチュートリアルでは、`android-x86-7.1-r4-k419` を使用します。

## ブータブル USB の作成

### ステップ 1 - ブータブル USB の準備

USB ドライブをフォーマットします。Windows ユーザーの場合、USB ドライブを右クリックして「フォーマット」を選択することでフォーマットできます。

**注意:** ファイルシステムには `FAT32` を選択してください。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### ステップ 2 - フラッシュバーナーのダウンロード

オープンソースのフラッシュバーナー [balenaEtcher](https://www.balena.io/etcher/) をダウンロードします。お使いのオペレーティングシステム（Windows/macOS/Linux）に応じたバージョンをダウンロードしてください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### ステップ 3 - OS イメージを USB に書き込む

ダウンロードしたオペレーティングシステムイメージを選択し、フォーマット済みの USB ドライブを選択してフラッシュします。これでブータブル USB の準備が整いました。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## Android-x86 のインストール

### ステップ 1 - ODYSSEY - X86J41x5 での CSM モードの有効化

ブータブル USB、モニター、キーボードを ODYSSEY - X86J41x5 に接続し、電源を入れます。起動中に **`DEL`** キーを押し続けてセットアップ画面に入ります。**`Advanced`** -> **`CSM Support`** に移動し、Enter キーを押して有効にします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### ステップ 2 - OS のインストール

ODYSSEY - X86J41x5 を再起動し、**`F7`** キーを押し続けてブートマネージャ画面に入ります。ブータブル USB（インストーラー）を選択して Enter キーを押します。

**注意:** Android-x86 の iso イメージが含まれているものを選択してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### ステップ 3 - インストールプロセス

**GRUB オプション**で、`Advanced options` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/1.png" /></div>

`Android-x86** Auto Install to specific harddisk` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/2.png" /></div>

これでインストールプロセスが開始され、Android-x86 を ODYSSEY-X86 にインストールする場所を選択できます。この例では、オンボード eMMC にインストールします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/3.png" /></div>

確認のために `Yes` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/
ODYSSEY-X86J4105-Installing-Android/4.png" /></div>

インストールプロセスが進行し、完了したら `Reboot` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/5.png" /></div>

ブータブル USB を取り外し、デバイスを再起動します。Android-x86 が起動するはずです。

!!!注意
        正しく起動しない場合は、F7 を押して Android-x86 をインストールしたドライブを選択して起動してください。

## 設定

すべてが正常に進むと、以下の画面のように Android-x86 が起動します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/home.png" /></div>

これは、Android 搭載のスマートフォンを使用している方にはおなじみの画面かもしれません！

## スマート TV ボックスとしての設定

ODYSSEY-X86J41x5 をスマート TV ボックスとして動作させるには、[Kodi](https://kodi.tv/) をインストールする必要があります。

Kodi は、Android スマートフォンから家庭用 PC まで、さまざまなデバイスで動作する無料のオープンソースのメディアセンターソフトウェアです。そしてもちろん、Android-x86 もサポートしています！

### Android-x86 用 Kodi のダウンロードとインストール

[こちら](https://mirrors.kodi.tv/releases/android/x86/)から Android-x86 用の Kodi をダウンロードできます。他の PC からダウンロードし、`.apk` ファイルを USB ドライブに保存して、USB 経由でアプリをインストールすることをお勧めします。

### Kodi IPTV 設定

**Kodi** を開き、**TV** -> **More Add-on** に移動します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/add-on.png" /></div>

**PVR clients** を選択します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/PVR.png" /></div>

**PVR IPTV Simple Client** を選択します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/iptv.png" /></div>

**configure** を選択し、**IPTV ストリーミング `m3u` URL** を入力します。この [`iptv repo`](https://github.com/iptv-org/iptv/blob/master/README.md) を参考にすることができます。**OK** を選択し、**有効化**することを忘れないでください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/config.png" /></div>

Kodi を再起動すると、チャンネルが読み込まれるはずです！これで ODYSSEY-X86 をスマート TV ボックスに変えることができました！

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/live.png" /></div>

### 起動時に自動起動

ODYSSEY-X86 を起動時に Kodi を自動起動させたい場合は、Google Play ストアから `Boot apps` をインストールするだけで簡単に実現できます！

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/boot.png" /></div>

アプリをインストールし、Kodi を起動時のアプリとして選択してください！

## リソース

- [Kodi](https://kodi.tv/)

- [Kodi の使い方 – 無制限ストリーミングのためのすべての情報](https://troypoint.com/how-to-use-kodi/)

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