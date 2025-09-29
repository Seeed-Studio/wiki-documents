---
description: ODYSSEY - X86J41x5
title: pfSense インストール

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86J4105-pfSense
last_update:
  date: 05/15/2025
  author: w0x7ce

---


<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/ja/ODYSSEY-X86J4105-Installing-pfSense/
sku: 102110399
--- -->

このチュートリアルでは、**[pfSense](https://www.pfsense.org/)** を [ODYSSEY-X86J41x5](https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html) にインストールする方法を説明します。

**[pfSense](https://www.pfsense.org/)** は、[FreeBSD](https://www.freebsd.org/) をベースにしたオープンソースのファイアウォール/ルーター用コンピュータソフトウェアディストリビューションです。物理コンピュータまたは仮想マシンにインストールして、ネットワーク用の専用ファイアウォール/ルーターを作成します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-04-n.png" /></div>

さらに詳しく知りたい場合は、公式の [pfSense ドキュメント](https://docs.netgate.com/pfsense/en/latest/) を参照してください！

## ハードウェア要件

- 動作するコンピュータ

- USB ドライブ x 2（8GB未満推奨）

- モニター

- キーボード

- インターネット & イーサネットケーブル

## pfSense OS イメージのダウンロード

まず、[pfSense OS イメージ](https://www.pfsense.org/download/) をドライブにダウンロードします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/Download.png" /></div>

ODYSSEY-X86J41x5 用に上記の設定を選択し、ダウンロードをクリックします。

## ブータブル USB の作成

### ステップ 1 - ブータブル USB の準備

USB ドライブをフォーマットします。Windows ユーザーの場合、USB ドライブを右クリックして `フォーマット` を選択することでフォーマットできます。

**注意:** ファイルシステムには `FAT32` を選択してください。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### ステップ 2 - フラッシュバーナーのダウンロード

オープンソースのフラッシュバーナー [balenaEtcher](https://www.balena.io/etcher/) をダウンロードします。お使いのオペレーティングシステム（Windows/macOS/Linux）に応じたバージョンをダウンロードしてください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### ステップ 3 - OS イメージを USB に書き込む

ダウンロードしたオペレーティングシステムイメージを選択し、フォーマット済みの USB ドライブを選択してフラッシュします！これでブータブル USB の準備が整いました。

<div>
  <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div><br />
</div>

**注意:** パーティションテーブルが含まれていないという警告が表示された場合は、**続行** をクリックしてメッセージを無視してください。

## pfSense OS のインストール

### ステップ 1 - ODYSSEY - X86J41x5 での CSM モードの有効化

ブータブル USB、モニター、キーボードを ODYSSEY - X86J41x5 に接続し、電源を入れます。起動中に **`DEL`** キーを押し続けてセットアップ画面に入ります。**`Advanced`** -> **`CSM Support`** に移動し、Enter を押して有効にします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### ステップ 2 - OS のインストール

ODYSSEY - X86J41x5 を再起動し、**`F7`** キーを押し続けてブートマネージャ画面に入ります。ブータブル USB（インストーラー）を選択し、Enter を押します。

**注意:** pfSense の iso イメージが含まれているものを選択してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### ステップ 3 - インストールプロセス

上記のようなブート画面が表示されます。`Enter` を押して Boot Multi User（pfSense インストーラー）を選択します。

<div>
  <div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSenseBIOS.png" /></div><br />
</div>

インストーラーに入り、`Enter` を押して **同意** します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-1.png" /></div>

次のようなオプションメニューが表示されます。**Install** を選択し、`Enter` を押します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-2.png" /></div>

次に、キーボードの正しいキーマップを選択するか、**Continue with default keymap** を選択して `Enter` を押します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-3.png" /></div>

ここでは、pfSense を ODYSSEY-X86J41x5 に自動インストールするために Auto を選択できますが、インストール先を正確に選択するために **Manual** を使用することをお勧めします。

**注意:** このチュートリアルでは、利便性のために pfSense を USB ドライブにインストールしています。そのため、Auto よりも Manual を選択するもう一つの理由があります。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-4.png" /></div>

ここでは、すべてのハードドライブとパーティションが表示されます。pfSense をインストールしたいハードドライブを選択します。矢印キーを使用してハードドライブを選択します。ここでは、`da1` が私の 2 番目の USB ドライブであり、pfSense をインストールするために使用されます。このハードドライブで pfSense の自動パーティションを行うには **Auto** を選択します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-5.png" /></div>

正しいハードドライブの下で、**OK** を選択します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-6.png" /></div>

これでインストールプロセスが開始されます。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-7.png" /></div>

インストール後、次のウィンドウが表示されます。**No** を選択します。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-8.png" /></div>

**再起動**を選択すると、pfSenseのインストールが完了します！

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-9.png" /></div>

## pfSenseの設定

ODYSSEY-X86J41x5を再起動し、正しいハードドライブを選択してpfSense OSを起動します。ODYSSEY-X86J41x5のEthernetポートのいずれかにイーサネットケーブルを接続してください。pfSenseが正常に起動し、以下の画面が表示されるはずです。

**注意:** LANがすでに設定されている場合は、**`1`**を選択してインターフェースを割り当て、**WAN**用の正しいポートを選択して**LAN**を削除することができます。例えば、以下の画像では、LANは一時的に削除されています。

**WAN**とともに、デバイスに割り当てられたIPが表示されるはずです。このIPは後で使用します。同じネットワークに接続された別のPCを使用してWeb GUIにログインしてみてください！

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-config-1.png" /></div>

### pfSense WebGUIプロトコルの変更（オプション）

pfSenseはWeb GUIにhttpsプロトコルを使用しており、これが原因でWeb GUIへのログインに失敗する場合があります。Web GUIへのログインに失敗した場合は、以下の手順で`https`プロトコルを`http`プロトコルに変更してください。

**`8`**を選択してpfSenseのシェルに入ります。以下のコマンドを入力して設定を行います：

```sh
viconfig
```

以下のような設定ファイルが表示されます。`<webgui>`セッションを見つけて、`https`プロトコルを`http`に変更してください。

**注意:** これはvimエディタを使用しています。キーボードの**x**キーを使用して削除します。その後、**Esc**キーを押して`:wq!`と入力し、保存して終了します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-config-2.png" /></div>

これで、再度IPアドレスを使用してpfSense Web GUIにログインしてみてください。

## pfSense Web GUIの設定

別のPCから、先ほど表示されたIPアドレスを使用してpfSense Web GUIにログインできます。

**注意:** デフォルトのログインは**`admin`**、デフォルトのパスワードは**`pfsense`**です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/WebGUI.png" /></div>

これで、ODYSSEY-X86J41x5上で動作しているpfSenseを簡単に管理できます！

### パッケージのインストール

パッケージをインストールするには、**System** -> **Package manager**に移動し、必要なパッケージを検索するだけです！

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/packages.png" /></div><br />
</div>

*pfSenseについてさらに詳しく知りたい場合は、公式の [pfSense Forum](https://forum.netgate.com/) を訪問してください！*

## リソース

その他の便利なアプリケーション：

- [Getting Started with pfSense](https://www.pfsense.org/getting-started/)

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>