---
description: ODYSSEY-X86でのbalenaOSの始め方
title: BalenaOSインストール
keywords:
- Sorftware Allxon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/BalenaOS-X86-Getting-Started
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/thumb.png" alt="pir" width="1000" height="auto"/></p>

## balenaOSとは？

[balenaOS](https://www.balena.io/os)は、組み込みデバイス上でDockerコンテナを実行するために最適化されたオペレーティングシステムであり、長期間の運用における信頼性を重視し、balenaの構築経験から得た教訓に基づいた生産的な開発者ワークフローを提供します。

balenaOSの核心的な洞察は、Linuxコンテナが組み込みデバイスで仮想化を利用するための実用的な道を初めて提供するという点です。VMやハイパーバイザーはクラウド展開における生産性と自動化の大きな進歩をもたらしましたが、ハードウェアの抽象化、リソースのオーバーヘッド、ハードウェアサポートの欠如により、組み込みシナリオには適していません。Linuxコンテナで実装されたOSレベルの仮想化により、これらの問題はLinuxデバイスに対して解消されます。これらのデバイスは、IoTの中で非常に多く存在します。

## balenaCloudとは？

[balenaCloud](https://www.balena.io/cloud)は、balenaがホストする包括的なクラウドベースのデバイス展開および管理インフラストラクチャです。初心者のフリートオーナーでも、任意の言語でアプリケーションを構築し、デバイスをシームレスにプロビジョニングし、新しい機能を迅速にテストし、デバイスフリートを簡単に管理することができます。Dockerコンテナ技術により、デバイスがオンラインで完全に機能している間に、単一のコマンドで安全で信頼性の高い更新を実現します。ユーザーはbalenaCloudダッシュボードを使用してデバイスフリート全体を表示および管理することができます。また、APIを直接操作することも可能です。

## ODYSSEY - X86でのbalenaOSのクイックスタート

ODYSSEY - X86にbalenaOSをインストールし、balenaCloudを利用する最も簡単な方法は、以下の手順を実行することです：

- balenaCloudでデバイスフリートを作成する
- balenaOSイメージをUSBドライブに書き込む
- USBドライブをODYSSEY - X86に接続し、ライブイメージを起動する
- 起動したODYSSEY - X86がbalenaCloudダッシュボードに表示される

それでは始めましょう！

### 必要条件

始める前に以下を準備してください：

- [ODYSSEY - X86ボード](https://www.seeedstudio.com/ODYSSEY-X86J4125864-p-4916.html)
- USBフラッシュドライブ
- イーサネットケーブルまたはWiFi接続
- [balenaアカウント](https://dashboard.balena-cloud.com/signup)
- [balenaEtcher](https://www.balena.io/etcher)またはその他のイメージ書き込みソフトウェア

### balenaCloudでデバイスフリートを作成する

- **ステップ1.** [balenaアカウントに登録](https://dashboard.balena-cloud.com/signup)し、ログインします。

- **ステップ2.** ログイン後、**Create fleet**をクリックして最初のデバイスフリートを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/5.png" alt="pir" width="1000" height="auto"/></p>

**注意:** フリートは、同じアーキテクチャを共有し、同じコードを実行するデバイスのグループです。デバイスをプロビジョニングすると、特定のフリートに追加されますが、いつでも別のフリートに移行することができます。

- **ステップ3.** フリートの名前を入力し、**Seeed ODYSSEY-X86**をデフォルトのデバイスタイプとして選択し、フリートタイプを**Starter**のままにして、最後に**Create new fleet**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/6.png" alt="pir" width="1000" height="auto"/></p>

**注意:** 複数のコンテナを持つフリートを作成する場合は、StarterまたはMicroservicesフリートタイプを使用する必要があります。Starterフリートは完全な機能を備えており、すべてのユーザーに無料で提供され、Starterフリート全体で最大10台のデバイスまで利用可能です。

- **ステップ4.** **+ Add device**をクリックして、このフリートにODYSSEY - X86ボードを追加し、balenaCloudに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/7.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ5.** ここで**デバイスタイプ**はすでに選択されており、**バージョン**は最新のものが選択されています。**エディション**として**Development**を選択します。これは初めてのユーザーに推奨されます。また、ネットワーク接続を**Ethernet only**または**Wifi + Ethernet**のいずれかに選択することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/8.png" alt="pir" width="650" height="auto"/></p>

**注意:** 初めての利用時には、Developmentイメージが最も便利です。これにより、多くのテストやトラブルシューティング機能が利用可能です。運用環境では、Productionイメージに切り替えることを忘れないでください。DevelopmentイメージとProductionイメージの違いについての詳細は[こちら](https://www.balena.io/docs/reference/OS/overview/2.x/#development-vs-production-images)をご覧ください。

- **ステップ6.** **+ Advanced**をクリックして、デバイスが更新をチェックする頻度を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/9.png" alt="pir" width="350" height="auto"/></p>

### USBドライブからbalenaOSイメージをフラッシュして実行する

- **ステップ1.** イメージの設定が完了したら、**Flash**の横にある矢印をクリックし、**Download balenaOS**を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/10.jpg" alt="pir" width="300" height="auto"/></p>

ダウンロードが完了すると、**balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img**のような名前の圧縮イメージファイルが得られます。ここで、**ODYSSEY-fleet**はダッシュボードで付けたフリート名です。また、ダウンロードボタンのトグルセクションをクリックすることで、イメージ全体ではなく構成ファイル（config.json）のみをダウンロードするオプションも選択できます。

- **ステップ2.** [balenaEtcher](https://www.balena.io/etcher)を開き、**Flash from file**をクリックして、先ほどダウンロードした**zip**ファイルを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/etcher.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 3.** USB フラッシュドライブを PC に接続し、接続されたフラッシュドライブを **ターゲット** として選択し、**Flash** をクリックします。

次に、このイメージを ODYSSEY - X86 で実行します。

- **ステップ 4.** フラッシュドライブを ODYSSEY - X86 ボードに接続し、ボードの電源を入れます。

- **ステップ 5.** ボードの電源を入れる際に、**DELETE キー** を押し続けて **BIOS 設定** に入ります。

- **ステップ 6.** **Boot** セクションに移動し、**Boot Option #1** を **UEFI: USB, Partition 1** に設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/UEFI.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 7.** **Save & Exit** に移動し、**Save Changes and Reset** を選択します。

これで、USB フラッシュドライブから OS が正常に起動します。

### balenaCloud ダッシュボードから ODYSSEY - X86 を管理する

- **ステップ 1.** 再び balenaCloud ダッシュボードを開くと、約 1 分後に ODYSSEY - X86 ボードが表示されます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/11.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 2.** リストからデバイスをクリックしてデバイスダッシュボードにアクセスします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/12.png" alt="pir" width="1000" height="auto"/></p>

デバイスがオンラインにならない場合は、[balena サポートチャンネル](https://www.balena.io/docs/learn/welcome/support) を訪問してください。

## FAQ

### Q1: balenaOS イメージを HDD/SSD から実行するにはどうすればよいですか？

USB ドライブからではなく HDD/SSD から balenaOS イメージを実行したい場合は、以下の手順に従ってください。

- **ステップ 1.** 上記の **USB ドライブから balenaOS イメージをフラッシュして実行する** セクションの **ステップ 1 ～ ステップ 7** を実行します。

- **ステップ 2.** 正常に起動した後、balenaCloud ダッシュボードからボードの電源をオフにします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/13.png" alt="pir" width="700" height="auto"/></p>

**注意:** フラッシュ後に一度起動する必要があります。これは、**resin-data** パーティションがフラッシュドライブの残りのスペースを占有するように拡張され、そのスペースを使用して HDD/SSD にフラッシュする必要があるイメージを保存するためです。

- **ステップ 3.** ODYSSEY - X86 からフラッシュドライブを取り外し、PC に接続します。

- **ステップ 4.** 以前にダウンロードした **圧縮イメージファイル** を解凍します。

- **ステップ 5.** ターミナルウィンドウを開き、解凍した **balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img** イメージをフラッシュドライブの **resin-data** パーティション内の **resin-data** フォルダにコピーします。

```sh
sudo cp balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img /media/username/resin-data/resin-data
```

**注意:** **username** を PC のユーザー名に変更してください。

- **ステップ 6.** フラッシュドライブを PC から取り外し、ODYSSEY - X86 ボードに接続します。また、外部 HDD/SSD を ODYSSEY ボードに接続します。

- **ステップ 7.** ボードが起動した後、balenaCloud ダッシュボードに移動し、**ターミナル** にアクセスします。ここで **Select a target** ドロップダウンメニューをクリックし、**Host OS** を選択して **Start terminal session** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/15.jpg" alt="pir" width="10000" height="auto"/></p>

- **ステップ 8.** ターミナルで以下のコマンドを入力します。

```sh
fdisk -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/fdisk-l.png" alt="pir" width="620" height="auto"/></p>

接続された HDD が **/dev/sda** として表示されます。

- **ステップ 9.** 以前にコピーした **balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img** ファイルを **dd** ユーティリティを使用して接続された HDD/SSD にフラッシュします。

```sh
dd if=/resin-data/balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img of=/dev/sda
```

**注意:** **/dev/sda** を接続された HDD/SSD に対応する名前に置き換えてください。

- **ステップ 10.** フラッシュが完了したら、ODYSSEY - X86 の電源をオフにします。

- **ステップ 11.** USB フラッシュドライブを取り外し、ODYSSEY - X86 の電源を入れます。

- **ステップ 12.** ボードの電源を入れる際に、**DELETE キー** を押し続けて BIOS 設定に入ります。

- **ステップ 13.** **BOOT** セクションに移動し、**Boot Option #1** を **UEFI OS xxxxx** に設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/bios.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 14.** **Save & Exit** に移動し、**Save Changes and Reset** を選択します。

これで、HDD/SSD から OS が正常に起動します。

### Q2: ターミナルを使用して ODYSSEY - X86 にアクセスするにはどうすればよいですか？

ターミナルを介して ODYSSEY - X86 にアクセスできますが、ホスト PC に Balena CLI がインストールされている必要があります。Balena CLI は balenaCloud または openBalena 用のコマンドラインインターフェイスです。これは Windows、macOS、Linux 用に提供されており、コマンドプロンプト/ターミナルウィンドウを通じて使用されます。対話的に使用することも、スクリプトで呼び出すこともできます。

- **ステップ 1.** [このリンク](https://github.com/balena-io/balena-cli/blob/master/INSTALL.md) に従って、オペレーティングシステムに応じて Balena CLI をインストールします。

**注意:** このチュートリアルでは、Ubuntu 上で Balena CLI を使用します。ただし、他のシステムでも手順は類似しています。

- **ステップ 2.** ルーターから ODYSSEY - X86 ボードにイーサネットケーブルを接続します。

**注意:** ホスト PC と ODYSSEY - X86 が同じネットワーク上にあることを確認してください。

- **ステップ 3.** ターミナルウィンドウを開き、ローカルネットワーク上の BalenaOS デバイスをスキャンします。

```sh
sudo balena scan
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/scan.png" alt="pir" width="550" height="auto"/></p>

- **ステップ 4.** IP アドレスを使用してボードに SSH 接続します。

```sh
balena ssh <ip address>
```

```sh
例:
balena ssh 192.168.1.78
```

これで、BalenaOS を実行している ODYSSEY - X86 内部にアクセスできます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/ssh.png" alt="pir" width="650" height="auto"/></p>

Balena CLI の詳細については [こちら](https://www.balena.io/docs/reference/balena-cli/) を参照してください。

### Q3: balenaOS をソースコードからコンパイルするにはどうすればよいですか？


たとえ前述のように balenaCloud ダッシュボードから balenaOS イメージを取得できるとしても、冒険心がある場合は、ソースコードから balenaOS イメージをコンパイルすることもできます！

#### ローカルマシンでの手動コンパイル

ここでは、Yocto を使用してコマンドライン経由で ODYSSEY - X86 用の BalenaOS システムイメージを手動でコンパイルする方法を説明します。

**注意:** このガイドは Ubuntu 20.04 をインストールしたホスト PC でテストした後に作成されました。ただし、他の Linux システムでも動作します。

- **ステップ 1.** ホスト PC 上で以下のパッケージをインストールして開発環境を準備します。

```sh
sudo apt update
sudo apt install gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat python3-distutils
```

**注意:** ホスト PC が異なる Linux ディストリビューションを使用している場合は、[こちら](https://www.yoctoproject.org/docs/1.8/ref-manual/ref-manual.html#required-packages-for-the-host-development-system)を確認してください。

- **ステップ 2.** 以下のリポジトリをクローンし、リポジトリに移動します。

```sh
git clone https://github.com/balena-os/balena-seeed-x86
cd balena-seeed-x86
```

- **ステップ 3.** 必要なすべての依存関係をダウンロードします。

```sh
git submodule update --init --recursive
```

- **ステップ 4.** ビルドスクリプトを実行します。

```sh
./balena-yocto-scripts/build/barys
```

これでコンパイルプロセスが開始されます。コンパイルが終了するまで辛抱強く待ちます。コンパイル時間はビルドマシンのハードウェア仕様によって異なります。

#### コンパイルされたイメージを探す

コンパイルが終了したら、以下のコマンドを実行してシステムイメージが正常に生成されたか確認します。

```sh
cd build/tmp/deploy/images/odyssey-x86/;ls -lh *balenaos-img
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/image-location.png" alt="pir" width="1000" height="auto"/></p>

- **balena-image-odyssey-x86** は ODYSSEY - X86 に接続された外部ストレージ（フラッシュドライブ、SSD、HDD）から直接起動するために使用されます。
- **balena-image-flasher-odyssey-x86** は ODYSSEY - X86 の内部 eMMC ストレージから直接起動するために使用されます。このフラッシャーイメージは初回起動用にフラッシュドライブに書き込まれます。起動時に、このフラッシャーイメージは自動的に内部 eMMC ストレージに BalenaOS をインストールします。

#### コンパイルされたイメージの使用

デフォルトでは、イメージのファイル拡張子は **.balenaos-img** です。これらのイメージをフラッシュする前に、ファイル拡張子を **.img** に変更する必要があります。

例えば：

- **balena-image-odyssey-x86.balenaos-img** を **balena-image-odyssey-x86.img** にリネームします。
- **balena-image-flasher-odyssey-x86.balenaos-img** を **balena-image-flasher-odyssey-x86.img** にリネームします。

## リソース

- **[ウェブページ]** [Balena ドキュメント](https://www.balena.io/docs)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>