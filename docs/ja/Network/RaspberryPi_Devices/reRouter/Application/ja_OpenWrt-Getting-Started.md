---
description: OpenWrtの始め方
title: OpenWRTの使い方
keywords:
- ソフトウェア OpenWrt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/OpenWrt-Getting-Started
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" alt="pir" width="1000" height="auto"/></p>

OpenWrtは、組み込みデバイスやルーターで動作するオープンソースのLinuxオペレーティングシステムです。従来のルーターよりも多くの機能、性能、セキュリティを提供します。完全に書き込み可能なファイルシステムを備え、パッケージ管理システムを含んでいます。これらのパッケージを利用して、さまざまな方法でアプリケーションに適応させることができます。

OpenWrtを使用することで、以下のような機能を利用できます：

- 複数のデバイスが接続されている場合のネットワーク全体の性能向上
- ルーターに直接接続された外部ストレージドライブを介してデバイス間でファイルを共有
- ネットワークセキュリティの向上
- ルーターからBitTorrentクライアントを実行
- ルーターにプリンターを直接接続してネットワークプリンターを作成
- ネットワーク内の特定のデバイスの帯域幅使用量を制限
- アクティブキュー管理
- リアルタイムネットワーク監視
- 動的DNSの作成
- VPNクライアントまたはサーバーの設定

それでは、Raspberry Pi CM4用Dual Gigabit Ethernet Carrier BoardおよびODYSSEY - X86J4125でOpenWrtを使用する方法を見ていきましょう。

:::note
このガイドはODYSSEY - X86J4105にも対応しています。
:::

## 必要なハードウェア

Raspberry Pi CM4用Dual Gigabit Ethernet Carrier BoardおよびODYSSEY - X86J4125でOpenWRTを始める前に、以下のハードウェアを準備する必要があります：

- 1 x [Raspberry Pi CM4用Dual Gigabit Ethernet Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)
- 1 x [USB Type-Cケーブル付き電源アダプター (5V/3A)](https://www.seeedstudio.com/Wall-Adapter-Power-Supply-5VDC-3A-Type-C-p-4103.html)
- 1 x [ODYSSEY - X86J4125（付属の電源アダプター付き）](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- 2 x イーサネットケーブル

## 初期設定

### Raspberry Pi CM4用Dual Gigabit Ethernet Carrier Board

まず、Raspberry Pi Compute Module 4用Dual Gigabit Ethernet Carrier BoardにOpenWrtをインストールして設定する方法を説明します。

#### OpenWrtイメージの書き込み

まず、ボードのeMMCストレージにOpenWrtイメージを書き込む必要があります。必要なドライバーがインストールされたら、CM4のUSB Type-CポートをPCに接続するだけで、外部ドライブとして表示されます。以下の手順をオペレーティングシステムに応じて実行してください。

##### Windowsの場合

- **ステップ1.** このボード用にSeeedがコンパイルした**最新のOpenWrtイメージ**を[こちら](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)からダウンロードしてください。

:::note
**openwrt-bcm27xx-bcm2711-rpi-4-ext4-factory.img.gz**ファイルを選択してください。
:::

- **ステップ2.** 必要なドライバーとブートツールをインストールするために[このインストーラー](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)をダウンロードして実行してください。

- **ステップ3.** インストールした**rpiboot**ツールを検索して開きます。

- **ステップ4.** BOOTモードを有効にするために、以下のように**Boot**ピンと**GND**ピンの間にジャンパーワイヤーを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/connection.png" alt="pir" width="600" height="auto"/></p>

- **ステップ5.** Carrier BoardをUSB Type-CケーブルでPCに接続します。

Windowsがハードウェアを検出し、必要なドライバーをインストールします。

- **ステップ6.** **ファイルエクスプローラー**を開くと、Compute Module 4のeMMCが**USBマスストレージデバイス**として表示されます。

- **ステップ7.** オペレーティングシステムに応じて[こちらのリンク](https://www.balena.io/etcher)から**balenaEtcher**ソフトウェアをダウンロードしてください。

- **ステップ8.** **balenaEtcher**を**管理者として実行**します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **ステップ9.** **Flash from file**をクリックし、先ほどダウンロードしたOpenWrtイメージファイルを指定します。

- **ステップ10.** **Select target**をクリックし、接続されたeMMCドライブを選択します。

- **ステップ11.** 最後に、**Flash!**をクリックします。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

フラッシュプロセスが完了するまで数分待ってください。

##### Mac/Linuxの場合

- **ステップ1.** このボード用にSeeedがコンパイルした**最新のOpenWrtイメージ**を[こちら](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)からダウンロードしてください。

:::note
**openwrt-bcm27xx-bcm2711-rpi-4-ext4-factory.img.gz**ファイルを選択してください。
:::

- **ステップ2.** **ターミナル**ウィンドウを開き、以下を入力して**パッケージリスト**を更新します。

```sh
sudo apt update
```

- **ステップ3.** 以下のコマンドで**Git**をインストールします。

```sh
sudo apt install git
```

- **ステップ4.** Gitがエラーを出す場合、日付が正しく設定されていない可能性があります。以下を入力して修正してください。

```sh
sudo date MMDDhhmm
```

:::note
ここで**MM**は月、**DD**は日付、**hh**と**mm**はそれぞれ時間と分を表します。
:::

- **ステップ5.** **usbboot**ツールリポジトリをクローンします。

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ6.** 以下を入力して**libusb**をインストールします。

```sh
sudo apt install libusb-1.0-0-dev
```

:::note
macOS ユーザーの方は、以下をご参照ください：
```
brew install libusb pkg-config
```
:::

- **ステップ7.** usbbootツールをビルドしてインストールします。

```sh
make
```

- **ステップ8.** usbbootツールを実行し、接続を待機します。

```sh
sudo ./rpiboot
```

- **ステップ9.** プログラミングモードを有効にするために、以下のように**Boot**ピンと**GND**ピンの間にジャンパーワイヤーを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/connection.png" alt="pir" width="600" height="auto"/></p>

- **ステップ10.** Carrier BoardをUSB Type-CケーブルでPCに接続します。

- **ステップ11.** オペレーティングシステムに応じて[こちらのリンク](https://www.balena.io/etcher)から**balenaEtcher**ソフトウェアをダウンロードしてください。

- **ステップ12.** **balenaEtcher**を**管理者として実行**します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **ステップ 13.** **Flash from file** をクリックし、以前にダウンロードした OpenWrt イメージファイルを指定します。

- **ステップ 14.** **Select target** をクリックし、接続されている eMMC ドライブを選択します。

- **ステップ 15.** 最後に **Flash!** をクリックします。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

#### デュアルギガビットイーサネットポートの接続

OpenWrt が Raspberry Pi CM4 用デュアルギガビットイーサネットキャリアボードにフラッシュされると、以下のようにイーサネットケーブルをボードに接続できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/cm4-ports-2.png" alt="pir" width="600" height="auto"/></p>

OpenWrt イメージにはデュアルギガビットポートがすぐに動作するために必要なネットワーク設定がすでに含まれているため、自分で設定する必要はありません。ただし、2つのポートがどのように設定されているかについて説明します。

1つのポートは **LAN インターフェース** として設定され、もう1つは **WAN インターフェース** として設定されています。WAN インターフェースはインターネットに接続できるもので、**DHCP クライアント**として設定されています。一方、LAN インターフェースはクライアントデバイスに接続できるもので、**DHCP サーバー**として設定されています。

LAN インターフェースは静的 IP アドレス **192.168.2.1** に設定されています。ただし、この OpenWrt ルーターをデフォルトゲートウェイ IP が 192.168.2.1 の別のルーターに接続する場合、LAN インターフェースの IP アドレスを変更する必要があるか、そうでなければ OpenWrt に IP の競合が発生します。詳細については、以下の [FAQ](https://wiki.seeedstudio.com/ja/OpenWrt-Getting-Started/#q1-what-if-i-connect-the-openwrt-router-to-my-exisiting-router-which-has-a-default-gateway-ip-of-19216821) を参照してください！

### ODYSSEY - X86J4125

次に、ODYSSEY - X86J4125 に OpenWrt をインストールして設定する方法を説明します。

#### OpenWrt イメージのフラッシュ

ODYSSEY - X86J4125 の eMMC/HDD/SSD に OpenWrt をインストールしてボード上で動作させる必要があります。そのためには、まず OpenWrt イメージを使用してブート可能な USB を作成する必要があります。以下の手順に従ってください。

- **ステップ 1.** このボード用に Seeed がコンパイルした **最新の OpenWrt イメージ** を [こちら](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd) からダウンロードします。

:::note
**openwrt-x86-64-generic-ext4-combined-efi.img.gz** ファイルを選択してください。
:::

- **ステップ 2.** USB ドライブを PC に挿入します。

- **ステップ 3.** [このリンク](https://www.balena.io/etcher) にアクセスして、使用しているオペレーティングシステムに応じた **balenaEtcher** ソフトウェアをダウンロードします。

- **ステップ 4.** **balenaEtcher** を **管理者として実行** します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **ステップ 5.** **Flash from file** をクリックし、以前にダウンロードした OpenWrt イメージファイルを指定します。

- **ステップ 6.** **Select target** をクリックし、接続されている USB ドライブを選択します。

- **ステップ 7.** 最後に **Flash!** をクリックします。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

#### デュアルギガビットイーサネットポートの接続

OpenWrt が USB ドライブにフラッシュされると、以下のようにイーサネットケーブルをボードに接続できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/odyssey-ports-2.png" alt="pir" width="700" height="auto"/></p>

OpenWrt イメージにはデュアルギガビットポートがすぐに動作するために必要なネットワーク設定がすでに含まれているため、自分で設定する必要はありません。ただし、2つのポートがどのように設定されているかについて説明します。

1つのポートは **LAN インターフェース** として設定され、もう1つは **WAN インターフェース** として設定されています。WAN インターフェースはインターネットに接続できるもので、**DHCP クライアント**として設定されています。一方、LAN インターフェースはクライアントデバイスに接続できるもので、**DHCP サーバー**として設定されています。

LAN インターフェースは静的 IP アドレス **192.168.2.1** に設定されています。ただし、この OpenWrt ルーターをデフォルトゲートウェイ IP が 192.168.2.1 の別のルーターに接続する場合、LAN インターフェースの IP アドレスを変更する必要があるか、そうでなければ OpenWrt に IP の競合が発生します。詳細については、以下の **FAQ** を参照してください！

#### OpenWrt のインストール

以前にブート可能な USB ドライブを作成したので、次に ODYSSEY - X86J4125 に OpenWrt をインストールします。

- **ステップ 1.** ブート可能な USB ドライブを ODYSSEY ボードに挿入し、ボードをディスプレイとキーボードに接続します。

- **ステップ 2.** ボードを起動し、**F7** を押し続けてブートマネージャ画面に入ります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" alt="pir" width="500" height="auto"/></p>

- **ステップ 3.** ブート可能な USB を選択し、ENTER を押します。

これで OpenWrt が USB ドライブからライブで起動します。

- **ステップ 4.** ボードを起動し、ウェブブラウザを開いて検索バーに **192.168.2.1** と入力します。

- **ステップ 5.** OpenWrt ポータルが開いたら、**System > FileTransfer** に移動します。

- **ステップ 6.** **Upload** の下にある **Choose File** をクリックし、以前にダウンロードした OpenWrt イメージを選択します。

:::note
**.gz** ファイルを **.img** ファイルに解凍しておくことを確認してください。
:::

- **ステップ 7.** **Upload** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/OpenWrt-image-upload.png" alt="pir" width="1000" height="auto"/></p>

これでイメージが **/tmp/upload/** ディレクトリに保存されます。

- **ステップ 8.** **System > TTYD Terminal** に移動し、ユーザー名 **root** でログインします。

- **ステップ 9.** **lsblk** を入力して接続されているストレージデバイスを一覧表示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/lsblk.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 10.** 次のコマンドを入力して、接続されたストレージデバイス（eMMC/HDD/SSD）に OpenWrt イメージを書き込みます。

```sh
dd if=/tmp/upload/openwrt-x86-64-generic-ext4-combined-efi.img of=/dev/sda 
```

:::note
**/dev/sda** は接続されたストレージデバイスを指します。
:::
- **ステップ 11.** ストレージデバイスへの書き込みが完了したら、ボードを再起動し、USB ドライブを取り外します。これで、接続されたストレージデバイスから OpenWrt の起動が開始されます。

## OpenWrt を実行する

OpenWrt ソフトウェアとデュアルギガビットイーサネットポートのセットアップが完了したので、Raspberry Pi CM4 および ODYSSEY - X86J4125 用のデュアルギガビットイーサネットキャリアボードで OpenWrt を実行する手順に進みます。このセクションでは、2 つのボードに分けず、両方とも同じ OpenWrt 機能と同じ Web インターフェースを持つことを前提とします。

イーサネットケーブルを前述のように接続し、OpenWrt イメージを書き込んだ後、以下の手順を実行してください。

- **ステップ 1.** ボードの電源を入れます。

- **ステップ 2.** Web ブラウザを開き、**192.168.2.1** と入力します。

ここで OpenWrt Luci Web インターフェースが表示されます。Seeed によってコンパイルされた OpenWrt イメージには、多くのパッケージがあらかじめ含まれています。これらのパッケージを使用して、多くのアプリケーションを実現できます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/OpenWrt-UI.png" alt="pir" width="1000" height="auto"/></p>

## R23.5 OpenWrt を実行する

Rerouter 用の最新バージョン OpenWrt、R23.5 バージョンを更新しました。最新バージョンの OpenWrt を使用したい場合は、以下のイメージを選択できます。

[R23.5 OpenWrt イメージ](https://firmware-selector.openwrt.org/?version=23.05.2&target=bcm27xx%2Fbcm2711&id=rpi-4)

イーサネットケーブルを前述のように接続し、OpenWrt イメージを書き込んだ後、以下の手順を実行してください。

- **ステップ 1.** ボードの電源を入れます。

- **ステップ 2.** Web ブラウザを開き、**192.168.1.1** と入力します。

```text
アカウント: root
パスワード: password
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/R24.7OP-UI.png" alt="pir" width="1000" height="auto"/></p>

## ネットワーク速度テスト

最後に、Raspberry Pi CM4 および ODYSSEY - X86J4125 用のデュアルギガビットイーサネットキャリアボードに OpenWrt をインストールした状態で、ネットワーク速度をテストします。

### デュアルギガビットボードをサーバー、ODYSSEY をクライアントとして使用

最初に、デュアルギガビットイーサネットキャリアボードをサーバーとして、ODYSSEY - X86J4125 をクライアントとしてネットワークテストを行います。

:::note
ODYSSEY ボードの LAN インターフェースの IP アドレスを **192.168.3.1** に変更してください。[こちら](https://wiki.seeedstudio.com/ja/OpenWrt-Getting-Started/#q1-what-if-i-connect-the-openwrt-router-to-my-exisiting-router-which-has-a-default-gateway-ip-of-19216821) を参照してください。
:::

- **ステップ 1.** 以下のようにボードを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/speed-cm4-server.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 2.** Web ブラウザを開き、両方のボードにログインして、以下のようにターミナルに入ります。

**デュアルギガビットイーサネットキャリアボード**

- Web ブラウザの検索ボックスに **192.168.2.1** と入力します。

- **System > TTYD Terminal** に移動し、ユーザー名 **root** でログインします。

**ODYSSEY - X86J4125/ X86J4105**

- Web ブラウザの検索ボックスに **192.168.3.1** と入力します。

- **System > TTYD Terminal** に移動し、ユーザー名 **root** でログインします。

:::note
両方のデバイスが LAN インターフェースで同じ IP 範囲にないことを確認してください。
:::
- **ステップ 3.** 両方のデバイスに **iperf3** ネットワーク性能テストツールをインストールします。

```sh
opkg update
opkg install iperf3
```

- **ステップ 4.** デュアルギガビットイーサネットキャリアボードの **TTYD Terminal** ウィンドウで、以下を入力して iperf3 をサーバーとして起動します。

```sh
iperf3 -s
```

- **ステップ 5.** ODYSSEY - X86J4125 の **TTYD Terminal** ウィンドウで、以下を入力して iperf3 をクライアントとして起動し、前に作成したサーバーに接続します。

```sh
iperf3 -c 192.168.2.1
```

:::note
ここでは、デュアルギガビットボードサーバーの IP アドレスが記載されています。
:::

これで、以下のようにネットワーク速度テストの結果が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/TTYD-CM4-server.png
" alt="pir" width="1000" height="auto"/></p>

:::note
ここでは、速度が 1Gbps に近いことが確認できます。
:::

### ODYSSEY をサーバー、デュアルギガビットボードをクライアントとして使用

次に、ODYSSEY - X86J4125 をサーバーとして、デュアルギガビットイーサネットキャリアボードをクライアントとしてネットワークテストを行います。

- **ステップ 1.** 以下のようにボードを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/speed-odyssey-server.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 2.** ODYSSEY - X86J4125 の **TTYD Terminal** ウィンドウで、以下を入力して iperf3 をサーバーとして起動します。

```sh
iperf3 -s
```

- **ステップ 3.** デュアルギガビットイーサネットキャリアボードの **TTYD Terminal** ウィンドウで、以下を入力して iperf3 をクライアントとして起動し、前に作成したサーバーに接続します。

```sh
iperf3 -c 192.168.3.1
```

:::note
ここでは、ODYSSEY-X86 サーバーの IP アドレスが記載されています。
:::

これで、以下のようにネットワーク速度テストの結果が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/TTYD-X86-server.png" alt="pir" width="1000" height="auto"/></p>

:::note
ここでは、速度が 1Gbps に近いことが確認できます。
:::

## FAQ
詳細については、[**こちら**](/ja/FAQs_For_openWrt)をクリックしてください。

## リソース

- **[Webページ]** [OpenWrt公式ドキュメント](https://openwrt.org)

- **[GitHub]** [Seeed OpenWrt](https://github.com/Seeed-Studio/seeed-linux-openwrt)

- **[OneDrive]** [Seeed OpenWrtイメージ](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

- **[ダウンロード]** [R23.5 OpenWrtイメージ](https://firmware-selector.openwrt.org/?version=23.05.2&target=bcm27xx%2Fbcm2711&id=rpi-4)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>