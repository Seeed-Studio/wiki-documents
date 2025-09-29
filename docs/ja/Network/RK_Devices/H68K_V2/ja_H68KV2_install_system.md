---
description: LinkStar-V2 オペレーティングシステムのインストール
title: オペレーティングシステムのインストール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/H68KV2_install_system
last_update:
  date: 05/15/2025
  author: Parker
---


<!-- ---
name: LinkStar-H68K-1432-V2 Router with Wi-Fi 6, 4GB RAM & 32GB eMMC, dual-2.5G & dual-1G Ethernet, 4K output, Pre-installed OpenWRT support Armbian
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 102110958
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/01.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-V2-p-5886.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## はじめに

LinkStar-H68K-V2 ルーターは、クアッドコア Cortex-A55 RK3568 チップを搭載し、デュアル 2.5G とデュアル 1G の 4 つのイーサネットインターフェース、Wi-Fi 6 技術、高いストレージ容量、メディアプレーヤー機能を備えています。この Wiki では、TF カードまたは eMMC を使用してオペレーティングシステムをインストールする方法を説明します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar_V2/24.png" /></div>

## LinkStar-V2 に必要なシステムを選択する

強力な LinkStar-V2 は、OpenWRT、Armbian などの幅広いオペレーティングシステムをサポートしています。このセクションでは、各システムのインストール方法を紹介します。また、旧バージョンの LinkStar H68K のすべての [ファームウェア](https://wiki.seeedstudio.com/ja/linkstar-install-system/#flash-android--ubuntu-to-emmc) と互換性があります。

### 注意事項と手順

LinkStar-V2 には 2 種類のストレージがあります。1 つは **TF カード**ストレージ、もう 1 つは **eMMC** ストレージです。どちらのメモリもフラッシュメモリシステムに使用できます。

この章では、カードリーダーを使用して TF カードにシステムをフラッシュする方法を説明します。この方法は、読み書き速度と安定性のため、**OpenWRT** システムにのみ使用できます。

- [OpenWRT を TF カードにフラッシュする](#jump1)

また、LinkStar-V2 に付属する eMMC にシステムをフラッシュすることもできます。この方法は、現在 LinkStar-V2 がサポートするすべてのオペレーティングシステムをサポートしています。

- [OpenWRT を eMMC にフラッシュする](#jump2)

LinkStar-V2 に TF カードが挿入されている場合、システム起動時に TF カード内のシステムが起動します。これは、**TF カードが起動優先**であるためです。

### <span id="jump1">OpenWRT を TF カードにフラッシュする</span>

#### 準備

- Windows/MacOS PC
- USB-C データケーブル
- TF カード
- カードリーダー
- [balenaEtcher](https://www.balena.io/etcher/) —— balenaEtcher をダウンロードしてインストールしてください。このソフトウェアを使用して TF カードにシステムをフラッシュします。
- OpenWRT パッケージ

上記の必要な機器を準備し、ファームウェア更新パッケージは以下のダウンロードボタンをクリックしてダウンロードできます。

| バージョン | 説明 | ダウンロード |
|---------|----------|----------|
|  balenaEtcher  | ISO 書き込みツール  | [ダウンロード](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
|  OpenWRT R22.11.18  | Docker サポートを追加。 | [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |

:::caution
LinkStar-V2 で TF カードを使用する場合、一部の**高速カード**と互換性がない可能性があることに注意してください。高速カードを使用している場合、カードの速度によりデータ読み込みエラー、起動エラー、またはシステムの電源投入および読み込み中の不具合が発生する可能性があります。

TF カードを使用する利点は、異なるネットワークを異なる TF カードで構成できることです。また、複数のシステムを持つことも可能で、異なる TF カードを交換することで異なるシステムを使用できます。
:::

#### 手順

**ステップ 1.** TF を PC に接続する

準備したカードリーダーに TF カードを挿入し、PC に接続してください。

**ステップ 2.** TF カードにシステムをフラッシュする

事前にインストールした balenaEtcher を開きます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/25.png" /></div>

ダウンロードした OpenWRT ファームウェアを選択します。ファイルは **.img** で終わるはずです。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/26.png" /></div>

システムをフラッシュするドライブを選択します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/27.png" /></div>

**Flash** ボタンをクリックすると、ソフトウェアがシステムを TF カードにフラッシュします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/28.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/29.png" /></div>

:::caution
システムをフラッシュした後、一部のコンピュータでは USB デバイスが認識されない、またはフォーマットするかどうかを尋ねるプロンプトが表示される場合があります。この場合、カードを再フォーマットしないでください。システムが消去されてしまいます。
:::

**ステップ 3.** TF カードから OpenWRT を起動する

カードリーダーから TF カードを取り外し、LinkStar-V2 の TF カードスロットに挿入します。

その後、LinkStar の電源を入れます。**Type-C 電源**を使用して電源を供給することができます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/30.png" /></div>

**ステップ 4.** OpenWRT バックエンドを管理する

ネットワークケーブルを使用して、LinkStar-V2 の ETH1/ETH2/ETH3 ネットワークポートに接続します。その後、ブラウザにアドレス `192.168.100.1` を入力して管理バックエンドにアクセスします。

:::caution
ETH0 は WAN ポートであり、他のネットワークポートは LAN ポートです。ネットワークケーブルを使用して LinkStar-V2 の OpenWRT を管理する場合は、ETH0 以外の LAN ポートにネットワークケーブルを接続してください。
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/31.png" /></div>

システムの初期アカウントとパスワードは以下の通りです。

```
アカウント: root
パスワード: password
```

おめでとうございます！これで TF カードを使用して OpenWRT を正常にインストールできました。

### <span id="jump2">OpenWRT を eMMC にフラッシュする</span>

#### 準備

- Windows PC
- USB-C データケーブル
- OpenWRT パッケージ
- Armbian パッケージ（オプション）

上記の必要な機器を準備してください。ファームウェア更新パッケージは以下のダウンロードボタンをクリックしてダウンロードできます。

| バージョン | 説明 | ダウンロード |
|-----------|------|-------------|
| OpenWRT R22.11.18  | Dockerサポートを追加。 | [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| eMMCへのフラッシュツールとドライバ | - | [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| Armbian 24.5.0 デスクトップ (オプション) | - | [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |

#### 手順

**ステップ 1.** ドライバをインストールする

ダウンロードした[ファイル](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip)には以下の3つのファイルが含まれています。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/07.png" /></div>

**Rockchip_DriverAssitant_v5.1.2**フォルダに移動し、**DriverInstall.exe**ファイルをダブルクリックして開き、ドライバをインストールします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/08.png" /></div>

起動したドライバインストールソフトウェアで「驱动安装」(ドライバインストール)をクリックします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/09.png" /></div>

**ステップ 2.** デバイスをMaskromモードにする

**RKDevTool_Release_v2.84**フォルダに移動し、**RKDevTool.exe**ファイルをダブルクリックして開きます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/10.png" /></div>

この時点で、ソフトウェアの下部に「No Devices Found」と表示されるはずです。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/11.png" /></div>

カードピックアップピンを使用して**Update keyhole**ボタンを押し続け、離さないでください。その後、LinkStar-V2を手で保持しながらUSB-Cタイプのケーブルを使用してコンピュータに接続します。その後、ボタンを離します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/12.png" /></div>

この時点で再度ソフトウェアを確認すると、「No Devices Found」から「Found One MASKROM Device」に変わります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/13.png" /></div>

**ステップ 3.** ファームウェアを消去する

「Upgrade Firmware」をクリックし、「Firmware」をクリックしてファイルディレクトリ内の**H6XK-Boot-Loader.bin**ファイルを選択します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/14.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/15.png" /></div>

ファイルをインポートした後、「EraseFlash」をクリックします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/16.png" /></div>

操作が完了するのを待ち、「确定」(OK)をクリックします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/17.png" /></div>

**ステップ 4.** OpenWRTをフラッシュする

:::note
上記の手順に従った場合、LinkStar H68K-V2はまだMASKROMモードにあるはずです。そうでない場合は、再度**ステップ 2**の手順を繰り返してください。
:::

ソフトウェアの左上にある「Download Image」をクリックし、最初の**Boot**オプション行に**H6XK-Boot-Loader.bin**ファイルを選択します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/18.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/19.png" /></div>

次に、**system**オプションの2行目でOpenWRTのシステムイメージを選択します。このファイルは**.img**で終わるはずです。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/20.png" /></div>

その後、下部の「Run」ボタンをクリックします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/21.png" /></div>

「Download image OK」のプロンプトを待ちます。これでシステムがLinkStar-V2のeMMCに正常にインストールされました。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/22.png" /></div>

システムフラッシュが完了すると、LinkStar H68K-V2は自動的に再起動し、再起動後にOpenWRTシステムに入ります。

**ステップ 5.** OpenWRTのバックエンドを管理する

ネットワークケーブルを使用してLinkStar-V2のETH1/ETH2/ETH3ネットワークポートに接続します。その後、ブラウザにアドレス`192.168.100.1`を入力して管理バックエンドにアクセスします。

:::caution
ETH0はWANポートであり、その他のネットワークポートはLANポートです。ネットワークケーブルを使用してLinkStar-V2のOpenWRTを管理する場合は、ETH0以外のLANポートにネットワークケーブルを接続してください。
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/23.png" /></div>

システムの初期アカウントとパスワードは以下の通りです。

```
アカウント: root
パスワード: password
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/24.png" /></div>

おめでとうございます。これでOpenWRTをeMMCに正常にインストールできました。

## リソース

LinkStar H68K-V2はオープンソースハードウェアです。関連資料のダウンロードリンクを以下に示します。

| バージョン                     | 説明              | ダウンロード                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| OpenWRT R22.11.18           | Dockerサポートを追加 | [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Armbian 24.5.0 desktop (オプション)|-| [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |
| eMMCへのフラッシュツール & ドライバー | - | [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| balenaEtcher                | ISO書き込みツール  | [ダウンロード](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H68K-V2-SCH                    | H68K回路図         | [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar_V2/H68K_V2_Schematic.pdf) |
| RK3568 データシート            | - | [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf) |
| M7921E Wi-Fiモジュール         | - | [ダウンロード](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf) |

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>