---
description: ODYSSEY - X86J41x5
title: OpenWRTインストール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86J4105-Installing-openwrt
last_update:
  date: 05/15/2025
  author: w0x7ce

---


<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/ja/ODYSSEY-X86J4105-Installing-openwrt/
sku: 102110399
--- -->

このチュートリアルでは、ルーターネットワーク用のオープンソースOSをインストールする方法を説明します。OpenWrtを使用することで、ODYSSEY - X86J41x5をルーターに変え、自宅のネットワークを管理することができます！

## ハードウェア要件

- 動作するコンピュータ

- USBドライブ（推奨容量：8GB以上）

- モニター

- キーボードとマウス

- イーサネットケーブル x 2

## OpenWrt OSイメージのダウンロード

まず、[OpenWrt](https://downloads.openwrt.org/releases/) OSイメージをダウンロードします。希望するバージョンを選択し、`x86` -> `64`に移動して必要なバージョンをダウンロードしてください。

このチュートリアルでは、19.07バージョンを使用します。[こちら](https://downloads.openwrt.org/releases/19.07.0/targets/x86/64/openwrt-19.07.0-x86-64-combined-ext4.img.gz)をクリックしてダウンロードしてください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/Openwrt.jpg" /></div>

## ブート可能なUSBの作成

### ステップ1 - ブート可能なUSBの準備

USBドライブをフォーマットします。Windowsユーザーの場合、USBドライブを右クリックして`フォーマット`を選択することでフォーマットできます。

**注意:** ファイルシステムには`FAT32`を選択してください。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### ステップ2 - フラッシュバーナーのダウンロード

オープンソースのフラッシュバーナー[balenaEtcher](https://www.balena.io/etcher/)をダウンロードします。使用しているオペレーティングシステム（Windows/macOS/Linux）に応じたバージョンをダウンロードしてください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### ステップ3 - OSイメージをUSBに書き込む

ダウンロードしたオペレーティングシステムイメージを選択し、フォーマット済みのUSBドライブを選択してフラッシュします。これでブート可能なUSBの準備が整いました。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## OpenWrtのインストール

### ステップ1 - ODYSSEY - X86J41x5でCSMモードを有効化

ブート可能なUSB、モニター、キーボードをODYSSEY - X86J41x5に接続し、電源を入れます。起動中に**`DEL`**キーを押し続けてセットアップ画面に入ります。**`Advanced`** -> **`CSM Support`**に移動し、Enterキーを押して有効化します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### ステップ2 - OSのインストール

ODYSSEY - X86J41x5を再起動し、**`F7`**キーを押し続けてブートマネージャ画面に入ります。ブート可能なUSBを選択し、Enterキーを押します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### ステップ3 - インストールプロセス

**`OpenWrt`**を選択してEnterキーを押します。画面上のインストール手順に従って進めます。
<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/installingOpenwrt.jpg" /></div>

インストールが完了したらEnterキーを押します。以下の画面が表示されるはずです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/OpenWrtShell.jpg" /></div>

これでOpenWrtがインストールされ、使用する準備が整いました！

## 設定

次に、別のPCからWebインターフェースを使用してOpenWrtシステムにアクセスできるように設定します。OpenWrtのシェルで以下を入力してください：

```sh
vi /etc/config/network
```

そして、設定を以下のように変更します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/settings.jpg" /></div>

ここで、LAN設定のステーションIPアドレスを変更し、このIPを使用してルーターにアクセスできるようにします。この例では、IPを `192.168.10.1` に変更しています。

**注意:** vimでは、最初に **`i`** を押して挿入モードに入り、編集を行います。編集が完了したら、**`ESC`** キーを押して **`:wq`** と入力し、Enterキーを押して保存して終了します。

## 別のPCからのアクセス

これで、別のコンピュータからLuCI Webインターフェースを介してOpenWrtにアクセスできるようになります。**HDMIポートに近いEthernetポートにEthernetケーブルを接続**してください。もう1本のEthernetケーブルをODYSSEY - X86J41x5のもう一方のEthernetポートに接続し、インターネットに接続します（PPPoE方式など、接続方法は異なる場合があります）。

次に、コンピュータのWebブラウザで `192.168.10.1`（先ほど指定したIPアドレス）を入力すると、以下の画面が表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/ipAddress.jpg" /></div>

これで、別のPCからOpenWrtにアクセスできるようになりました！

## LANおよびWANの設定

**`Network`** -> **`Interfaces`** に移動し、インターネットアクセスのためにWAN設定を構成します：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/interface.jpg" /></div>

これは、OpenWrtのすべてのインターフェース設定を示しています。ここでは、**WAN(eth1)ポート**がインターネットに接続されており、以下のように**DHCPクライアントプロトコル**に設定されていることを確認してください：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/interface2.jpg" /></div>

これで、コンピュータがインターネットにアクセスできるようになり、ルーターの設定が完了しました！

*さらなる開発のために、Adブロックやポートミラーリングなど、さまざまなアプリケーションをダウンロードして展開することができます！詳細については、[OpenWrt](https://openwrt.org/)をご覧ください。*

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>