---
description: H28K ブートチュートリアル
title: オペレーティングシステムのインストール
keywords:
- ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/H28K-install-system
last_update:
  date: 05/15/2025
  author: Parker
---


<!-- ---
name: H28K ルーター（8GB eMMC、QWRT サポート）
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: *******
tags:
--- -->

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/Overview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H28K-0208-p-5848.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## はじめに

LinkStar-H28K は、PCIE/RGMII ギガビット技術を使用した 2 つのギガビットネットワークポートとクアッドコアチップを備えています。LPDDR4X 4GB メモリと 8GB eMMC ストレージを搭載しており、TF カードを使用して最大 512GB まで拡張可能です。また、PD（Power Delivery）対応の 5V-12V Type-C 接続を備えています。このウィキでは、TF カードまたは eMMC を使用してオペレーティングシステムをインストールする方法を説明します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/30.png" /></div>

## H28K に必要なシステムを選択する

H28K は QWRT オペレーティングシステムをサポートしています。このセクションでは、QWRT システムのインストール方法を紹介します。

### 注意事項と手順

H28K には 2 種類のストレージがあります。1 つは TF カードストレージ、もう 1 つは eMMC ストレージです。どちらのメモリもフラッシュメモリシステムに使用できます。

この章では、カードリーダーを使用して TF カードにシステムをフラッシュする方法を説明します。

- [TF カードに QWRT をフラッシュする](#jump1)

また、H28K に搭載されている eMMC にシステムをフラッシュすることもできます。

- [eMMC に QWRT をフラッシュする](#jump2)

H28K に TF カードが挿入されている場合、システム起動時に TF カード内のシステムが優先的に起動されます。これは、**TF カードが起動優先権を持つ**ためです。

### <span id="jump1">TF カードに QWRT をフラッシュする</span>

#### 準備

- Windows/MacOS PC
- USB-C データケーブル
- TF カード
- カードリーダー
- [balenaEtcher](https://www.balena.io/etcher/) —— balenaEtcher をダウンロードしてインストールしてください。このソフトウェアを使用して TF カードにシステムをフラッシュします。
- QWRT パッケージ

上記の機器を準備してください。ファームウェア更新パッケージは、以下のダウンロードボタンをクリックしてダウンロードできます。

| バージョン           | 説明                                               | ダウンロード                                                     |
| ----------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| balenaEtcher      | ISO 書き込みツール                                           | [ダウンロード](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| QWRT R24.01.23              | OpenWRT ベース | [ダウンロード](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |

:::caution
H28K で TF カードを使用する場合、一部の**高速カード**と互換性がない可能性があることに注意してください。高速カードを使用している場合、カードの速度が原因でデータ読み込みエラー、起動エラー、またはシステムの電源投入および読み込み中の不具合が発生する可能性があります。

TF カードを使用する利点は、異なるネットワークを異なる TF カードで構成できることです。また、複数のシステムを持つことも可能で、異なる TF カードを交換することで異なるシステムを使用できます。
:::

#### 手順

**ステップ 1.** TF カードを PC に接続する

準備したカードリーダーに TF カードを挿入し、PC に接続してください。

**ステップ 2.** TF カードにシステムをフラッシュする

事前にインストールした balenaEtcher を開きます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/18.png" /></div>

ダウンロードした QWRT ファームウェアを選択します。ファイルは **.img** で終わるはずです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/19.png" /></div>

システムをフラッシュするドライブを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/20.png" /></div>
<br />
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/21.png" /></div>

**Flash** ボタンをクリックすると、ソフトウェアがシステムを TF カードにフラッシュします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/22.png" /></div>

:::caution
システムをフラッシュした後、一部のコンピュータでは USB デバイスが認識されないというプロンプトが表示され、フォーマットするかどうかを尋ねられる場合があります。この場合、カードを再フォーマットしないでください。そうしないと、内部のシステムが消去されます。
:::

**ステップ 3.** TF カードから QWRT を起動する

カードリーダーから TF カードを取り外し、H28K の TF カードスロットに挿入します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/23.png" /></div>

その後、H28K に電源を入れます。**USB-C-5V** を使用して電源を供給することができます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/24.png" /></div>

**ステップ 4.** QWRT のバックエンドを管理する

ネットワークケーブルを使用して H28K の ETH0 ネットワークポートに接続します。その後、ブラウザにアドレス `192.168.1.1` を入力して管理バックエンドにアクセスします。

:::caution
ETH0 は LAN ポートであり、ETH1 ポートは WAN ポートです。ネットワークケーブルを使用して H28K の QWRT を管理する場合は、ネットワークケーブルを ETH0 に接続してください。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/15.png" /></div>

システムの初期アカウントとパスワードは以下の通りです。

```text
アカウント: root
パスワード: password
```

おめでとうございます！これで TF カードを使用して QWRT を正常にインストールできました。

### <span id="jump2">eMMC に QWRT をフラッシュする</span>

#### 準備

- Windows PC
- USB-C データケーブル
- QWRT パッケージ 

上記の機器を準備してください。ファームウェア更新パッケージは、以下のダウンロードボタンをクリックしてダウンロードできます。

| バージョン                     | 説明                                               | ダウンロード                                                     |
| --------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| QWRT R24.01.23              | OpenWRT ベース | [ダウンロード](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |
| eMMC 書き込みツール & ドライバ | V5.12                                                     | [ダウンロード](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/H28K_Flash_Tools.zip) |

#### 手順

**ステップ 1.** ドライバをインストールする

**DriverAssitant_v5.12** フォルダに移動し、**DriverInstall.exe** ファイルをダブルクリックして開き、ドライバをインストールします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/2.png" /></div>

起動したドライバインストールソフトウェアで、「驱动安装」（ドライバインストール）をクリックします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/3.png" /></div>

**ステップ 2.** デバイスを Maskrom モードにする

**RKDevTool_Release_v2.84** フォルダに移動し、**RKDevTool.exe** ファイルをダブルクリックして開きます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/4.png" /></div>

カードピックアップピンを使用して **Update keyhole** ボタン（赤枠の番号1）を押し続け、離さないでください。

その後、H28K を手で保持しながら、USB-C タイプのケーブルを使用してコンピュータに接続します（赤枠の番号2）。接続後、**Update keyhole** ボタンを離します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/5.png" /></div>

この時点でソフトウェアを確認すると、「Found One MASKROM Device」と表示されます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/6.png" /></div>

**ステップ 3.** ファームウェアを消去する

「Upgrade Firmware」をクリックし、その後「Firmware」をクリックして、ファイルディレクトリ内の **rk3528_spl_loader_v1.05.104.bin** ファイルを選択します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/7.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/8.png" /></div>

ファイルをインポートした後、「EraseFlash」をクリックします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/9.png" /></div>

操作が完了するのを待ち、「确定」（OK）をクリックします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/10.png" /></div>

**ステップ 4.** QWRT を書き込む

:::note
上記の手順に従った場合、H28K はまだ MASKROM モードにあるはずです。そうでない場合は、**ステップ 2** の手順を再度繰り返してください。
:::

ソフトウェアの左上にある「Download Image」をクリックし、最初の **Boot** オプション行に **rk3528_spl_loader_v1.05.104.bin** ファイルを選択します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/11.png" /></div>

次に、**system** オプションの2行目で、QWRT のシステムイメージを選択します。このファイルは **.img** で終わるはずです。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/12.png" /></div>

その後、下部の「Run」ボタンをクリックします。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/13.png" /></div>

「Download image OK」のプロンプトが表示されるのを待ちます。これでシステムが H28K の eMMC に正常にインストールされました。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/14.png" /></div>

システムの書き込みが完了すると、H28K は自動的に再起動し、再起動後に QWRT システムに入ります。

**ステップ 5.** QWRT バックエンドを管理する

ネットワークケーブルを使用して H28K の ETH0 ネットワークポートに接続します。その後、ブラウザにアドレス `192.168.1.1` を入力して管理バックエンドにアクセスします。

:::caution
ETH1 は WAN ポートで、ETH0 は LAN ポートです。ネットワークケーブルを使用して H28K の QWRT を管理する場合は、ネットワークケーブルを LAN ポートに接続してください。
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/15.png" /></div>

システムの初期アカウントとパスワードは以下の通りです。

```text
アカウント: root
パスワード: password
```

おめでとうございます！これで QWRT が eMMC に正常にインストールされました。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/30.png" /></div>

## リソース

H28Kはオープンソースハードウェアです。関連資料のダウンロードリンクを以下に示します。

| バージョン                     | 説明                  | ダウンロード                                                 |
| ----------------------------- | -------------------- | ------------------------------------------------------------ |
| QWRT R24.01.23                | OpenWRTベース         | [ダウンロード](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |
| eMMCへのフラッシュツール & ドライバ | V5.12                | [ダウンロード](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/H28K_Flash_Tools.zip) |
| balenaEtcher                  | ISO書き込みツール     | [ダウンロード](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H28K-SCH                      | H28K回路図            | [ダウンロード](https://files.seeedstudio.com/wiki/H28K/Open_source/H28K-SCH.zip) |

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>