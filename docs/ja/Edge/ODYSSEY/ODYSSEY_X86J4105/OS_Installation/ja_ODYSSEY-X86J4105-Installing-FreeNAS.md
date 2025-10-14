---
description: ODYSSEY - X86J41x5
title: FreeNAS インストール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86J4105-Installing-FreeNAS
last_update:
  date: 05/15/2025
  author: w0x7ce

---


<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/ja/ODYSSEY-X86J4105-Installing-FreeNAS/
sku: 102110399
--- -->

このチュートリアルでは、オープンソースのストレージオペレーティングシステムをインストールする方法を説明します。[FreeNAS](https://www.freenas.org/) は、ほぼすべてのハードウェアプラットフォームにインストールして、ネットワークを介してデータを共有できるオペレーティングシステムです。ODYSSEY - X86J41x5 に FreeNAS をインストールすることで、個人用クラウドドライブを構築できます！

## ハードウェア要件

- 動作するコンピュータ

- USB ドライブ x 2（8GB 以上を推奨）

- モニター

- キーボード

## FreeNAS OS イメージのダウンロード

まず、[FreeNAS OS イメージ](https://www.freenas.org/download-freenas-release/) をドライブにダウンロードします。これは `.iso` ファイルである必要があります。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-download.jpg)

このチュートリアルでは、FreeNAS 11.3 を使用します。FreeNAS は別のドライブにインストールする必要があります。HDD または SSD ハードドライブに FreeNAS をインストールできます。

**注意:** このチュートリアルでは、利便性のために FreeNAS OS を USB ドライブにインストールします。

## ブータブル USB の作成

### ステップ 1 - ブータブル USB の準備

USB ドライブの 1 つをフォーマットします。Windows ユーザーの場合、USB ドライブを右クリックして `フォーマット` を選択することでフォーマットできます。

**注意:** ファイルシステムには `FAT32` を選択してください。

<div align="center"><img width="{450}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### ステップ 2 - フラッシュバーナーのダウンロード

オープンソースのフラッシュバーナー [balenaEtcher](https://www.balena.io/etcher/) をダウンロードします。お使いのオペレーティングシステム（Windows/macOS/Linux）に応じたバージョンをダウンロードしてください。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### ステップ 3 - OS イメージを USB に書き込む

ダウンロードしたオペレーティングシステムイメージを選択し、フォーマット済みの USB ドライブを選択してフラッシュします！これでブータブル USB の準備が整いました。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## FreeNAS OS のインストール

### ステップ 1 - ODYSSEY - X86J41x5 での CSM モードの有効化

ブータブル USB、モニター、キーボードを ODYSSEY - X86J41x5 に接続し、電源を入れます。起動中に **`DEL`** キーを押し続けてセットアップ画面に入ります。**`Advanced`** -> **`CSM Support`** に移動し、Enter を押して有効にします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### ステップ 2 - OS のインストール

ODYSSEY - X86J41x5 を再起動し、**`F7`** を押し続けてブートマネージャ画面に入ります。ブータブル USB（インストーラー）を選択して Enter を押します。

**注意:** FreeNAS の iso イメージが含まれているものを選択してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### ステップ 3 - インストールプロセス

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-boot.jpg)

上記のようなブート画面が表示されます。`Enter` を押して Boot FreeNAS Installer を選択します。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-option.jpg)

インストーラーに入ると、以下のようなオプションメニューが表示されます。**Install/Select** を選択して `Enter` を押します。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-drive.jpg)

FreeNAS イメージをインストールするドライブを選択します。ここで、もう 1 つの USB ドライブが表示されるはずです。

**注意:** USB ドライブを選択するには `スペースバー` を使用します。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-warning.jpg)

選択したドライブ内のすべてが消去されるという警告が表示されますが、単に Yes を押します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-pw.jpg" /></div>

後で Web インターフェースから FreeNAS にログインするためのルートパスワードを作成します。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-complete.jpg)

インストールプロセスが開始され、完了するまで待ちます。完了すると、上記のようになります。

インストールプロセスはすべて完了しました。ODYSSEY - X86J41x5 を再起動し、ブータブル USB（インストーラー）を取り外します。

インターネット接続のためにイーサネットケーブルを接続し、Web インターフェースにアクセスできるようになります。

## 設定

ODYSSEY - X86J41x5 を再起動し、再度 `F7` を押してブートマネージャ画面に入り、FreeNAS をインストールした USB ドライブを選択します。

**注意:** `DEL` を押してセットアップ画面に入り、USB ドライブを最初の起動オプションに設定することもできます。

FreeNAS にブートすると、Web インターフェースのアドレスが表示されるはずです:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-bootcomplete.jpg" /></div>

**注意:** Web インターフェースにアクセスできない場合は、インターネット接続を確認してください。

同じインターネットを使用している別のコンピュータ（例: ノートパソコン）を使用して、ブラウザにアドレスを入力してください:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-web1.jpg)

ユーザー名は `root` で、パスワードはインストール時に設定したものです。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-web2.jpg)

この画面が表示された場合、FreeNAS のインストールに成功しています。ODYSSEY - X86J41x5 にさらにストレージを追加して、個人用クラウドドライブを楽しんでください！

*さらなる開発については、[FreeNAS 公式フォーラム](https://www.ixsystems.com/community/?__hstc=54333623.367bb0a280861850367fe7c0081ee5de.1582628751612.1582693495900.1582699340011.3&__hssc=54333623.1.1582699340011&__hsfp=3609375136) を訪問し、プラグインや機能について詳しく調べてください。*

## アクリルケース

NAS をエンクロージャに組み込むためのアクリルケースも設計しました！ハードドライブのサイズに応じて、以下の2つのバージョンを提供しています:

1. [**2.5インチ SATA HDD**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/J4105-2.5.dwg) 用エンクロージャ。

2. [**3.5インチ SATA HDD**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/J4105-3.5.dwg) 用エンクロージャ。

**必要な材料:**

- 3mm アクリルシート

- M3 x 20mm 六角メス-メスねじ付き支柱 x 4

- M3 x 40mm 六角メス-メスねじ付き支柱 x 4 (または M3 x 20mm を積み重ねて40mmにする)

- M3 ネジ

## リソース

- ODYSSEY-X86 上で FreeNAS を使用する方法に関する Explaining Computers の動画:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/qyz91Q_JrBc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

その他の便利なアプリケーション:

- [FreeNAS 11 のインストール、設定、ユーザーのセットアップ、共有のセットアップ、スナップショットの仕組み](https://www.youtube.com/watch?v=sMZ-s8wHkHw&list=PLMeX7dgR89SvzGW0eumZuP_LAeBGEDnBb&index=11)

- [FreeNAS を使用してホームファイルサーバーをセットアップする方法](https://www.windowscentral.com/how-to-set-up-freenas-home-file-server)

- [FreeNAS と TrueNAS を Backblaze B2 にバックアップする方法](https://www.backblaze.com/blog/how-to-setup-freenas-cloud-storage/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>