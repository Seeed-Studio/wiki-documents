---
description: ODYSSEY-X86でHome Assistantを始める
title: Home Assistantの始め方
tags:
  - Home Assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86-Home-Assistant
last_update:
  date: 05/15/2025
  author: Lakshantha

---


# ODYSSEY-X86でHome Assistantを始める

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/thumb.png" /></div>

## はじめに

このWikiでは、[ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)を使用して、普通の家をスマートホームに変える方法をステップバイステップで解説します！このWikiを読み終える頃には、PC、タブレット、スマートフォン、reTerminalで美しいダッシュボードを表示し、自宅の家電を操作したり、センサーデータなどの情報を指先で確認できるようになります。それでは始めましょう！

## Home Assistantとは？

[Home Assistant](https://www.home-assistant.io)は、スマートホームデバイスの中央制御システムとして設計された、無料かつオープンソースのホームオートメーションソフトウェアで、スマートホームハブとも呼ばれます。Home Assistantはクラウドを必要としないホームオートメーションを提供します。つまり、リモートサーバーやインターネット接続に依存しないため、より高いセキュリティを実現できます。また、24時間365日稼働させる際の信頼性も向上します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" /></div>

Home Assistantは柔軟で使いやすく、初心者でも簡単に始められるように優れたドキュメントが用意されています。また、[Home Assistantフォーラム](https://community.home-assistant.io)には活発なコミュニティがあり、Home Assistantの構築や運用中に問題が発生した場合でも、多くのメンバーがサポートしてくれます。

Home Assistantをセットアップした後は、AndroidやiOS用のコンパニオンアプリを使用したり、GoogleアシスタントやAmazon Alexaなどの対応するバーチャルアシスタントを介して音声コマンドで操作したりすることで、ウェブベースのユーザーインターフェースにアクセスできます。

ウェブブラウザでデモをすぐに体験したい場合は、[こちらをクリック](https://demo.home-assistant.io)してください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" /></div>

## さまざまなインストール方法

Home Assistantは、Raspberry Pi、ODROID、ASUS Tinkerboard、Intel NUC、Windows/Linux/Mac PCなど、さまざまなハードウェアで動作するようにサポートされています。そして、それに伴い、異なるハードウェアに応じたさまざまなインストール方法があります。これらすべてのインストール方法について詳しく知りたい場合は、[こちらのページ](https://www.home-assistant.io/installation)をご覧ください。

以下に示すように、主に4つのインストール方法があり、すべてのインストール方法がすべてのHome Assistant機能をサポートしているわけではありません。

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/2.png" /></div>

## ODYSSEY - X86 のインストール方法

Home Assistant によると、Home Assistant の推奨インストール方法は **OS メソッド** と **コンテナメソッド** の 2 つです。ここでは、Home Assistant のすべての機能にアクセスできる **OS メソッド** を使用します。

### なぜ Home Assistant コンテナではないのか？

ODYSSEY-X86 に Home Assistant コンテナをインストールすると、いくつかの Home Assistant 機能が利用できなくなります。そのため、このインストール方法はスキップします。ただし、このインストール方法を試したい場合は、[こちらのガイド](https://www.home-assistant.io/installation/generic-x86-64#install-home-assistant-container)を参照してください。

## さあ、始めましょう！

それでは、ODYSSEY-X86 に Home Assistant OS をインストールする手順を見ていきましょう。

ODYSSEY-X86 に Home Assistant OS をインストールする方法はいくつかあります。最も簡単な方法は、Home Assistant OS イメージを USB フラッシュドライブに直接書き込み、USB ドライブを ODYSSEY-X86 に接続して Home Assistant を実行することです。

もう一つの方法は、外部 HDD、SSD、M.2 SSD、またはオンボード eMMC（ODYSSEY-X86 eMMC バージョンの場合）などの別のストレージデバイスに Home Assistant OS をインストールすることです。この方法は、USB ドライブと比較して信頼性の高いストレージデバイスを保証できます。

ここでは、両方の方法で Home Assistant OS をインストールする手順を説明します！

### USB フラッシュドライブから Home Assistant を実行する

- **ステップ 1.** USB フラッシュドライブを PC に接続します

**注意:** 少なくとも 16GB のストレージ容量を持つフラッシュドライブを使用することをお勧めします

- **ステップ 2.** お使いのオペレーティングシステムに応じて [Balena Etcher](https://www.balena.io/etcher) をダウンロードしてインストールします

- **ステップ 3.** Balena Etcher を開き、**Flash from URL** を選択します

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/20.png" /></div>

- **ステップ 4.** 以下の URL を空欄にコピー＆ペーストし、**OK** をクリックします

```sh
https://github.com/home-assistant/operating-system/releases/download/9.0/haos_generic-x86-64-9.0.img.xz
```

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/21.png" /></div>

- **ステップ 5.** イメージのダウンロードが完了したら、**Select target** をクリックして接続された USB フラッシュドライブを選択します

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/23.png" /></div>

- **ステップ 6.** **Flash** をクリックして、イメージを USB フラッシュドライブに書き込みます

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/24.png" /></div>

フラッシュプロセスが成功すると、以下の出力が表示されます

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/25.png" /></div>

- **ステップ 7.** この USB フラッシュドライブを ODYSSEY-X86 の USB ポートの一つに接続し、ボードの電源を入れます

- **ステップ 8.** **DELETE** キーを押し続けて BIOS に入ります

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/7.png" /></div>

- **ステップ 9.** **Boot** タブに移動し、**Boot Option #1** を選択して **UEFI: OS (USB)** を選択し、ポップアップで **Yes** をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/27.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/10.jpg" /></div>

これで ODYSSEY-X86 は再起動し、接続された USB ドライブをブートデバイスとして使用します。Home Assistant OS へのブートが成功すると、以下の出力が表示されます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/19.png" /></div>

### 外部 HDD/SSD、M.2 SSD、eMMC から Home Assistant を実行する

この方法では、まず Ubuntu Desktop を使用してブート可能な USB ドライブを作成し、それを使用して ODYSSEY-X86 を起動します。その後、Ubuntu システム内で Home Assistant OS をドライブ（外部 HDD/SSD、M.2 SSD、オンボード eMMC）にフラッシュし、そのドライブから Home Assistant を実行します。

- **ステップ 1.** [こちら](https://ubuntu.com/download/desktop) から最新の Ubuntu Desktop イメージをダウンロードします

- **ステップ 2.** USB フラッシュドライブを PC に接続します

**注意:** 少なくとも 8GB のストレージ容量を持つフラッシュドライブを使用することをお勧めします

- **ステップ 3.** お使いのオペレーティングシステムに応じて [Balena Etcher](https://www.balena.io/etcher) をダウンロードしてインストールします

- **ステップ 4.** Balena Etcher を開き、**Flash from file** を選択します

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/2.png" /></div>

- **ステップ 5.** ダウンロードした **.iso ファイル** をクリックし、**Open** をクリックします

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/3.png" /></div>

- **ステップ 6.** **Select target** をクリックし、接続された USB フラッシュドライブを選択して **Select** をクリックします

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/4.png" /></div>

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/5.png" /></div>

- **ステップ 7.** **Flash** をクリックして、Ubuntu サーバーを USB フラッシュドライブにフラッシュします

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/6.png" /></div>

フラッシュプロセスが成功すると、以下の出力が表示されます

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/1.png" /></div>

- **ステップ 8.** この USB フラッシュドライブを ODYSSEY-X86 の USB ポートの一つに接続し、ストレージドライブ（外部 HDD/SSD、M.2 SSD）を接続してボードの電源を入れます

**注意:** ODYSSEY-X86 にキーボード、マウス、ディスプレイが接続されていることを確認してください

- **ステップ 9.** **DELETE** キーを押し続けて BIOS に入ります

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/7.png" /></div>

- **ステップ 10.** **Boot** タブに移動し、**Boot Option #1** を選択して **UEFI: USB, Partition 2** を選択します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/8.jpg" /></div>

- **ステップ 11.** **Save & Exit** タブに移動し、**Save Changes and Reset** をクリックして、ポップアップで **Yes** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/9.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/10.jpg" /></div>

これで ODYSSEY-X86 は再起動し、接続された USB ドライブをブートデバイスとして使用します。

- **ステップ 12.** **Try or Install Ubuntu** を選択します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/11.jpg" /></div>

- **ステップ 13.** **Try Ubuntu** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/12.jpg" /></div>

数秒後、Ubuntu デスクトップが起動します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/13.png" /></div>

- **ステップ 14.** **Ctrl+Alt+T** を押してターミナルウィンドウを開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/14.png" /></div>

- **ステップ 15.** 以下のコマンドを入力して Home Assistant OS イメージをダウンロードします。

```sh
wget https://github.com/home-assistant/operating-system/releases/download/9.0/haos_generic-x86-64-9.0.img.xz
```

- **ステップ 16.** 以下のコマンドを使用してファイルを解凍します。

```sh
unxz haos_generic-x86-64-9.0.img.xz
```

これにより、上記の **.img.xz** ファイルが **.img** に解凍されます。

- **ステップ 17.** **lsblk** を入力して接続されているストレージドライブを一覧表示します。この例では、SATA ポート経由で HDD ドライブを接続しています。

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/15.png" /></div>

ご覧の通り、Ubuntu OS がすでに動作しているドライブ（USB フラッシュドライブ）は **sdb** で、いくつかのパーティションとマウントポイントがあります。このドライブは **SIZE** からも識別できます。つまり、**sda** が接続された HDD ドライブです。

- **ステップ 18.** 以下のコマンドを入力して、Home Assistant OS イメージを接続された HDD ドライブ（この場合は **sda**）にフラッシュします。

```sh
sudo dd if=haos_generic-x86-64-9.0.img of=/dev/sda status=progress
```

プロセスが完了するまで数分待ちます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/16.png" /></div>

- **ステップ 19.** 以下を入力して ODYSSEY-X86 を再起動します。

```sh
sudo reboot
```

- **ステップ 20.** USB フラッシュドライブを取り外し、以下のプロンプトが表示されたら **ENTER** を押します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/17.png" /></div>

- **ステップ 21.** 前述の手順に従って BIOS に入り、ブートドライブを接続されたドライブに変更します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/18.png" /></div>

これで ODYSSEY-X86 は再起動し、接続されたドライブをブートデバイスとして使用します。Home Assistant OS の起動に成功すると、以下の出力が表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/19.png" /></div>

## WebブラウザでHome Assistant Dashboard UIを表示する

- **ステップ 1.** PC、タブレット、スマートフォンでウェブブラウザを開き、以下のURLを入力します。

```sh
homeassistant.local:8123
```

初回の起動プロセスが完了するまで少し時間がかかります。

- **ステップ 2.** 起動が完了したら、アカウントを作成し、初期設定の指示に従います。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" /></div>

その後、以下のようなウェルカムダッシュボードが表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/15.png" /></div>

## reTerminalでHome Assistant Dashboard UIをキオスクモードで表示する

[reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)のLCDでHome Assistant Dashboard UIを表示するために、Raspberry Pi OSに付属しているChromiumウェブブラウザを使用します。Chromiumを設定して、reTerminalが起動した後にフルスクリーンモードで自動的に開始するようにします。

- **ステップ 1.** reTerminalを起動し、Raspberry Pi OSがすでにインストールされていることを確認します。インストールされていない場合は、[このWiki](https://wiki.seeedstudio.com/ja/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)を参照してください。

- **ステップ 2.** 以下のディレクトリに移動します。

```sh
cd /etc/xdg/lxsession/LXDE-pi/
```

- **ステップ 3.** **nanoテキストエディタ**で**autostart**ファイルを開きます。

```sh
sudo nano autostart
```

- **ステップ 4.** ファイルの末尾に以下の行を追加します。

```sh
@chromium-browser --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 homeassistant.local:8123
```

- **ステップ 5.** reTerminalを再起動します。

```sh
sudo reboot 
```

これで、reTerminalが起動すると、Home AssistantダッシュボードUIがフルスクリーンウィンドウで開きます！

## ボーナス

スマートライト、温度・湿度センサー、CCTVなどを統合した後、Home Assistantでの完全なスマートホームダッシュボードは以下のようになります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/16.png" /></div>

<video style={{display: 'block', maxWidth: '100%'}} id="video" controls preload="none" poster="https://files.seeedstudio.com/wiki/Home-Assistant/thumb.png">
  <source id="mp4" src="https://files.seeedstudio.com/wiki/Home-Assistant/HA-dashboard.mp4" type="video/mp4" />
</video>

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>