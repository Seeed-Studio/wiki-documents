---
description: ODYSSEY - X86J4105
title: OPNsense インストール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86-OPNsense
last_update:
  date: 05/15/2025
  author: w0x7ce

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/1.png" alt="pir" width={1000} height="auto" /></p>

このガイドでは、ODYSSEY-X86 に OPNsense をインストールしてソフトウェアルーターおよびファイアウォールに変える方法を説明します。それでは始めましょう！

## OPNsense とは？

[OPNsense](https://opnsense.org) は、FreeBSD オペレーティングシステムに基づいたオープンソースのファイアウォールおよびルーティングソフトウェアで、Deciso によって開発されています。これは pfSense のフォークであり、さらにその pfSense は m0n0wall からフォークされました。OPNsense は 2015 年 1 月にリリースされました。OPNsense はウェブベースの GUI を持ち、x86-64 プラットフォームをサポートしています。ファイアウォールとして機能するだけでなく、トラフィックシェーピング、負荷分散、仮想プライベートネットワーク機能も備えています。また、プラグインを通じて他の機能を追加することも可能です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/25.png" alt="pir" width={300} height="auto" /></p>

## 必要条件

- [ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- USB フラッシュドライブ（1GB 以上）
- イーサネットケーブル 2 本とインターネットに接続可能なルーター
- 外部ストレージメディア（ODYSSEY-X86 に内蔵 eMMC がある場合、それを使用することも可能）

  - NVMe SSD または
  - SATA SSD または
  - SATA HDD または
  - Micro-SD カード または
  - USB フラッシュドライブ（1GB 以上）

## 始めに

それでは、ODYSSEY-X86 に OPNsense をインストールする手順を見ていきましょう。

### OPNsense イメージを USB フラッシュドライブに書き込む

- **ステップ 1.** [こちらのリンク](https://opnsense.org/download) を開き、OPNsense のダウンロードページにアクセスします。

- **ステップ 2.** **amd64** をアーキテクチャとして選択し、**vga** をイメージタイプとして選択、任意のミラー場所を選び、**Download** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/2.png" alt="pir" width={550} height="auto" /></p>

- **ステップ 3.** **.bz2** ファイルを解凍して **.img** ファイルを取得します。

- **ステップ 4.** [こちらのリンク](https://www.balena.io/etcher) から OS に応じた **BalenaEtcher** をダウンロードしてインストールし、起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/3.jpg" alt="pir" width={1000} height="auto" /></p>

- **ステップ 5.** USB フラッシュドライブを PC に接続し、**Flash from file** をクリックして、先ほどダウンロード/解凍したファイルを選択します。次に **Select target** をクリックして接続した USB フラッシュドライブを選択し、**Flash** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/4.png" alt="pir" width={1000} height="auto" /></p>

### フラッシュドライブから OPNsense を起動し、外部ドライブにインストールする

- **ステップ 1.** 先ほど OPNsense イメージを書き込んだ USB フラッシュドライブを ODYSSEY-X86 の USB ポートの一つに接続します。

- **ステップ 2.** OPNsense をインストールするための外部ストレージドライブを接続します。ODYSSEY-X86 には以下のようなストレージオプションがあります：

  - NVMe SSD
  - SATA SSD
  - SATA HDD
  - Micro-SD カード
  - USB フラッシュドライブ（1GB 以上）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width={650} height="auto" /></p>

- **ステップ 3.** ODYSSEY-X86 の電源を入れ、**DELETE** キーを連打して BIOS に入ります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/5.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 4.** **Boot** タブに移動し、**Boot Option #1** を選択して **UEFI: USB, Partition 1** を選びます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/6.jpg" alt="pir" width={1000} height="auto" /></p>

- **ステップ 5.** **Save & Exit** タブに移動し、**Save Changes and Reset** を選択して、ポップアップウィンドウで **Yes** を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/8.jpg" alt="pir" width={1000} height="auto" /></p>

これで ODYSSEY-X86 は USB フラッシュドライブから OPNsense を起動し、正常に起動すると以下のような画面が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/9.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 6.** **login:** プロンプトで **installer** と入力し、パスワードとして **opnsense** を入力してインストールページに進みます。

- **ステップ 7.** **Continue with default keymap**（デフォルトオプション）を選択し、**ENTER** を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/10.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 8.** **Install (UFS)**（デフォルトオプション）を選択し、**ENTER** を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/11.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 9.** 接続した外部ドライブを選択し、**ENTER** を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/12.png" alt="pir" width={1000} height="auto" /></p>

これで接続した外部ドライブに OPNsense のインストールが開始されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/13.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 10.** インストールが完了すると、**root パスワード**の変更を求められます。これは**推奨**されます。ウィンドウで **ENTER** を押して root パスワードを変更します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/14.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/15.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 11.** **Complete Install** を選択し、**ENTER** を押して再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/16.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 12.** システムが再起動を開始したら、USB フラッシュドライブを取り外し、BIOS に入り、接続した外部ドライブをブートデバイスとして選択して再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/17.png" alt="pir" width={1000} height="auto" /></p>

これで ODYSSEY-X86 は外部ドライブから起動し、OPNsense に入ります。正常に起動すると、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/9.png" alt="pir" width={1000} height="auto" /></p>

### OPNsense のセットアップ

#### LAN インターフェースの IP アドレスを変更する

デフォルトでは、OPNsense は LAN インターフェースに **192.168.1.1** を割り当て、**DHCP サーバー**を有効にします。もしルーターの IP アドレスも 192.168.1.1（多くのルーターがこの IP を使用しています）の場合、OPNsense の LAN IP を変更する必要があります。まずこれを行います。

ただし、ルーターの IP アドレスが 192.168.1.1 以外の場合、このセクションをスキップして、次の **ハードウェア構成セクション** に進むことができます。

- **ステップ 1.** **root アカウント**にログインします。**login:** プロンプトで **root** と入力し、以前に指定したパスワードを入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/18.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2.** 以下のように設定を行います。

  - **2** を入力してインターフェースの IP アドレスを設定します。
  - **1** を入力して、設定するインターフェースとして LAN を選択します。
  - **N** を入力して、LAN インターフェースの IPv4 アドレスを DHCP 経由で設定しないようにします。
  - 新しい LAN IPv4 アドレスとして **192.168.2.1** を入力します（ここでは任意の IP アドレスを指定できます）。
  - 新しい LAN IPv4 サブネットビット数として **24** を入力します。
  - **ENTER** を押して、LAN 用に設定し、WAN 用には設定しません。
  - **ENTER** を押して、WAN トラッキング経由で LAN インターフェースの IPv6 アドレスを設定しないようにします。
  - **y** を入力して、LAN 上で DHCP サーバーを有効にします。
  - IPv4 クライアントアドレス範囲の開始アドレスとして **192.168.2.1** を入力します。
  - IPv4 クライアントアドレス範囲の終了アドレスとして **192.168.2.254** を入力します。
  - **N** を入力して、Web GUI プロトコルを HTTPS から HTTP に変更しないようにします。
  - **N** を入力して、新しい自己署名 Web GUI 証明書を生成しないようにします。
  - **N** を入力して、Web GUI アクセスのデフォルトを復元しないようにします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/20.png" alt="pir" width={1000} height="auto" /></p>

その後、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/21.png" alt="pir" width={1000} height="auto" /></p>

#### ハードウェア構成

ODYSSEY-X86 の 2 つのイーサネットポートを、2 本のイーサネットケーブルを使用して PC（クライアント）とルーターに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/22.png" alt="pir" width={1000} height="auto" /></p>

これで、PC は新しくセットアップした OPNsense ルーターを介してインターネットに接続できるようになります！

#### OPNsense GUI

Web ブラウザで **192.168.2.1** を入力し、以前に指定した root アカウントの詳細を入力して OPNsense の Web GUI にログインします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/24.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/1.png" alt="pir" width={1000} height="auto" /></p>

ここでは、[OPNsense 公式ドキュメント](https://docs.docker.com) を参照して、必要に応じて多くの設定を構成することができます！

## コミュニティ

<iframe width={560} height={315} src="https://www.youtube.com/embed/_IzyJTcnPu8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## リソース

- **[ウェブページ]** [OPNsense 公式ドキュメント](https://docs.docker.com)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>