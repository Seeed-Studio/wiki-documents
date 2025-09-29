---
description: ODYSSEY - X86J4105
title: オペレーティングシステムのインストール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/linkstar-install-system
last_update:
  date: 05/15/2025
  author: w0x7ce
---


<!-- ---
name: LinkStar-H68K-1432 Router with Wi-Fi 6 & 32GB eMMC, dual-2.5G & dual-1G Ethernet, 4K output, Pre-installed Android 11, Ubuntu & OpenWRT support
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 102110777
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/OVerview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-p-5501.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## はじめに

LinkStar-H68Kルーターは、クアッドコアCortex-A55 RK3568チップを搭載し、デュアル2.5Gおよびデュアル1Gの4つのイーサネットインターフェースを備えています。また、Wi-Fi 6技術（オプション）を提供し、高いストレージ容量とメディアプレーヤー機能を備えています。このWikiでは、TFカードまたはeMMCを使用してオペレーティングシステムをインストールする方法を説明します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar/25.png" /></div>

## LinkStarに必要なシステムを選択する

強力なLinkStarは、Android、Ubuntu、OpenWRT、Debianなど、幅広いオペレーティングシステムをサポートしています。このセクションでは、各システムのインストール方法を紹介します。

### 注意事項と指示

LinkStarには2種類のストレージがあります。一つは**TFカード**ストレージ、もう一つは**eMMC**ストレージです。どちらのメモリもフラッシュメモリシステムに対応しています。

この章では、カードリーダーを使用してTFカードにシステムをフラッシュする方法を説明します。この方法は、読み取り/書き込み速度と安定性のため、**OpenWRT**システムにのみフラッシュできます。

- [OpenWRTをTFカードにフラッシュする](#jump1)

また、LinkStarに付属するeMMCにシステムをフラッシュすることもできます。この方法は現在、LinkStarがサポートするすべてのオペレーティングシステムに対応しています。

- [OpenWRTをeMMCにフラッシュする](#jump2)
- [Android / UbuntuをeMMCにフラッシュする](#jump3)

LinkStarにTFカードが挿入されている場合、システムが起動するときにTFカード内のシステムが優先的に起動されます。つまり、**TFが起動優先**となります。

### <span id="jump1">OpenWRTをTFカードにフラッシュする</span>

#### 準備

- Windows/MacOS PC
- USB-Cデータケーブル
- TFカード
- カードリーダー
- [balenaEtcher](https://www.balena.io/etcher/) —— balenaEtcherをダウンロードしてインストールしてください。このソフトウェアを使用してTFカードにシステムをフラッシュします。
- OpenWRTパッケージ

上記の必要な機器を準備してください。ファームウェア更新パッケージは以下のダウンロードボタンをクリックしてダウンロードできます。

| バージョン | 説明 | ダウンロード |
|---------|----------|----------|
|  balenaEtcher  | - | [ダウンロード](https://sourceforge.net/projects/linkstar-h68k-os/files/Flash-to-TF-card-tool/) |
|  OpenWRT R22.11.18  | Dockerサポートを追加。 | [ダウンロード](https://sourceforge.net/projects/linkstar-h68k-os/files/Openwrt/) |

:::caution
LinkStarでTFカードを使用する場合、一部の**高速カード**と互換性がない可能性があることに注意してください。高速カードを使用している場合、カードの速度によりデータ読み込みエラー、起動エラー、または電源投入時やシステム読み込み時の不具合が発生する可能性があります。

TFカードを使用する利点は、異なるネットワークを異なるTFカードで構成できることです。また、複数のシステムを持つことも可能で、異なるTFカードを交換することで異なるシステムを使用できます。
:::

#### 手順

**ステップ1.** TFカードをPCに接続する

準備したカードリーダーにTFカードを挿入し、PCに接続してください。

**ステップ2.** TFカードにシステムをフラッシュする

事前にインストールしたbalenaEtcherを開きます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/11.png" /></div>

ダウンロードしたOpenWRTファームウェアを選択します。ファイルは**.img**で終わるはずです。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/12.png" /></div>

システムをフラッシュするドライブを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/13.png" /></div>

**Flash**ボタンをクリックすると、ソフトウェアがTFカードにシステムをフラッシュします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/14.png" /></div>

:::caution
システムをフラッシュした後、一部のコンピュータではUSBデバイスが認識されないというプロンプトが表示され、フォーマットするかどうかを尋ねられる場合があります。この場合、カードを**再フォーマットしないでください**。そうしないと、内部のシステムが消去されます。
:::

**ステップ3.** TFカードからOpenWRTを起動する

カードリーダーからTFカードを取り外し、LinkStarのTFカードスロットに挿入してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/15.png" /></div>

次にLinkStarに電源を入れます。**USB-C-5V**または**DC-12V**で電源を供給することができます。

電源が入ると、LinkStarの電源ボタンが白く点灯します。電源ボタンを押すと、デバイスが起動し、システムに入ります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LinkStar/16.png" /></div>

**ステップ4.** OpenWRTのバックエンドを管理する

ネットワークケーブルを使用してLinkStarのETH1/ETH2/ETH3ネットワークポートに接続します。その後、ブラウザにアドレス`192.168.100.1`を入力して管理バックエンドにアクセスします。

:::caution
ETH0はWANポートであり、その他のネットワークポートはLANポートです。LinkStarのOpenWRTをネットワークケーブルで管理したい場合は、ETH0以外のLANポートにネットワークケーブルを接続してください。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar/17.png" /></div>

システムの初期アカウントとパスワードは以下の通りです。

```
アカウント: root
パスワード: password
```

おめでとうございます。これでTFカードを使用してOpenWRTを正常にインストールできました。

### <span id="jump2">OpenWRTをeMMCにフラッシュする</span>

#### 準備

- Windows PC
- USB-Cデータケーブル
- OpenWRTパッケージ
- Androidパッケージ（オプション）

上記の必要な機器を準備してください。ファームウェア更新パッケージは以下のダウンロードボタンをクリックしてダウンロードできます。

| バージョン | 説明 | ダウンロード |
|-----------|------|-------------|
| OpenWRT R22.11.18  | Dockerサポートを追加。 | [ダウンロード](https://sourceforge.net/projects/linkstar-h68k-os/files/Openwrt/) |
| ファームウェア消去ツール | - | [ダウンロード](https://sourceforge.net/projects/linkstar-h68k-os/files/Erase-tool/) |
| eMMCへのフラッシュツールとドライバー | - | [ダウンロード](https://sourceforge.net/projects/linkstar-h68k-os/files/Flash-to-eMMC-tool/) |
| Android TV R22.11.17 (オプション) | リモートコントロールサポート（現在販売されていません） | [ダウンロード](https://sourceforge.net/projects/linkstar-h68k-os/files/Android/) |

:::caution
他のシステムからOpenWRTをインストールする場合、OpenWRTインストールを完了する前にAndroidシステムをeMMCにフラッシュする必要があります。そのため、Androidパッケージをダウンロードする必要があるかもしれません。
:::

#### 手順

**ステップ1.** ドライバーをインストールする

**Rockchip_DriverAssitant_v5.1.1**フォルダーに移動し、**DriverInstall.exe**ファイルをダブルクリックしてドライバーをインストールします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/1.png" /></div>

起動したドライバーインストールソフトウェアで「驱动安装」（ドライバーインストール）をクリックします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/2.png" /></div>

**ステップ2.** デバイスをMaskromモードにする

**RKDevTool_Release_v2.84**フォルダーに移動し、**RKDevTool.exe**ファイルをダブルクリックして開きます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/3.png" /></div>

この時点で、ソフトウェアの下部に「No Devices Found」と表示されるはずです。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/4.png" /></div>

カードピックアップピンを使用して**Update keyhole**ボタンを押し続け、離さないでください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/5.png" /></div>

LinkStarを手で保持しながら、USB-Cタイプのケーブルを使用してコンピューターに接続します。その後、ボタンを離すことができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/6.png" /></div>

この時点で再度ソフトウェアを確認すると、「No Devices Found」から「Found One MASKROM Device」に変わります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/7.png" /></div>

**ステップ3.** ファームウェアを消去する

「Upgrade Firmware」をクリックし、「Firmware」をクリックしてファイルディレクトリ内の**LinkStar-H68K-EraseFlash.img**ファイルを選択します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/8.png" /></div>

ファイルをインポートした後、「EraseFlash」をクリックします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/9.png" /></div>

操作が完了するのを待ち、「确定」（OK）をクリックします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/10.png" /></div>

**ステップ4.** OpenWRTをフラッシュする

:::note
上記の手順に従った場合、LinkStar H68KはまだMASKROMモードにあるはずです。そうでない場合は、再度**ステップ2**の手順を繰り返してください。
:::

ソフトウェアの左上にある「Download Image」をクリックし、最初の**Boot**オプション行に対して**H68K-Boot-Loader_xxx.bin**ファイルを選択します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/18.png" /></div>

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/19.png" /></div>

次に、**system**オプションの2行目でOpenWRTのシステムイメージを選択します。このファイルは**.img**で終わるはずです。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/20.png" /></div>

その後、下部の「Run」ボタンをクリックします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/21.png" /></div>

「Download image OK」のプロンプトが表示されるのを待ちます。この時点で、システムはLinkStarのeMMCに正常にインストールされています。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/22.png" /></div>

システムのフラッシュが完了すると、LinkStar H68Kは自動的に再起動し、再起動後にOpenWRTシステムに入ります。

**ステップ5.** OpenWRTのバックエンドを管理する

ネットワークケーブルを使用してLinkStarのETH1/ETH2/ETH3ネットワークポートに接続します。その後、ブラウザにアドレス`192.168.100.1`を入力して管理バックエンドにアクセスします。

:::caution
ETH0はWANポートであり、その他のネットワークポートはLANポートです。LinkStarのOpenWRTをネットワークケーブルで管理したい場合は、ETH0以外のLANポートにネットワークケーブルを接続してください。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar/17.png" /></div>

システムの初期アカウントとパスワードは以下の通りです。

```
アカウント: root
パスワード: password
```

おめでとうございます。これでOpenWRTをeMMCに正常にインストールできました。

### <span id="jump3">Android / Ubuntu を eMMC に書き込む</span>

#### 準備

- Windows PC
- USB-C データケーブル
- システムパッケージ

上記のデバイスとソフトウェアを準備してください。ファームウェア更新パッケージは以下のダウンロードボタンをクリックしてダウンロードできます。

| バージョン | 説明 | ダウンロード |
|---------|----------|----------|
| eMMC 書き込みツール & ドライバー | - | [ダウンロード](https://sourceforge.net/projects/linkstar-h68k-os/files/Flash-to-eMMC-tool/) |
| Android Pad R22.11.17  | 動作インジケーターの修正; HDMI の音声問題を修正; 右クリックを戻るに変更; 密度を 240 に変更 | [ダウンロード](https://sourceforge.net/projects/linkstar-h68k-os/files/Android/)  |
| Android TV R22.11.17  | リモコン対応（現在販売されていません） | [ダウンロード](https://sourceforge.net/projects/linkstar-h68k-os/files/Android/)  |
| Ubuntu 20.04 R22.01.15 | WiFi AP256 のサポートを追加, `デフォルトのユーザー名: linkstar, パスワード: linkstar, Root ユーザー名: root, Root パスワード: root` | [ダウンロード](https://sourceforge.net/projects/linkstar-h68k-os/files/Ubuntu%2020.04/) |

:::note
LinkStar の ARM ベース CPU コアのリソースが限られているため、Ubuntu 20.04 は [Lubuntu](https://lubuntu.me/) をベースにしています。これは LXDM または LXQt デスクトップ環境を使用する軽量な Linux ディストリビューションです。
:::

:::caution
ここで提供されているイメージはカードフラッシングをサポートしていません。
:::

#### 手順

ここでは **Android TV** のインストールを例として取り上げます。他のシステムのインストール手順もほぼ同じで、異なるシステムイメージファイルを選択するだけです。

**ステップ 1.** ドライバーをインストールする

**Rockchip_DriverAssitant_v5.1.1** フォルダーに移動し、**DriverInstall.exe** ファイルをダブルクリックしてドライバーをインストールします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/1.png" /></div>

起動したドライバーインストールソフトウェアで「驱动安装」（ドライバーインストール）をクリックします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/2.png" /></div>

**ステップ 2.** デバイスを Maskrom モードにする

**RKDevTool_Release_v2.84** フォルダーに移動し、**RKDevTool.exe** ファイルをダブルクリックして開きます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/3.png" /></div>

この時点で、ソフトウェアの下部に「No Devices Found」（デバイスが見つかりません）と表示されます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/4.png" /></div>

カードピックアップピンを使用して **Update keyhole** ボタンを連続して押し続け、離さないでください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/5.png" /></div>

LinkStar を手で押さえながら、USB-C タイプケーブルを使用してコンピュータに接続します。その後、ボタンを離すことができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/6.png" /></div>

この時点で再度ソフトウェアを確認すると、「No Devices Found」から「Found One MASKROM Device」（1つの MASKROM デバイスが見つかりました）に変わります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/7.png" /></div>

**ステップ 3.** ファームウェアを書き込む

「Upgrade Firmware」（ファームウェアのアップグレード）をクリックし、「Firmware」（ファームウェア）をクリックしてインストールしたいシステムイメージを選択します。このファイルは **.img** で終わります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/8.png" /></div>

ファイルをインポートした後、「Upgrade」（アップグレード）をクリックします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/23.png" /></div>

「Reset Device Success」（デバイスのリセット成功）というプロンプトが表示されるまで待ちます。この時点でシステムの書き込みが完了しています。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/24.png" /></div>

システムの書き込みが完了すると、LinkStar は自動的に再起動し、再起動後にシステムに入ります。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>