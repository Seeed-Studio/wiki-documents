---
description: reTerminalでHome Assistantをインストールする方法
title: Home Assistantの始め方
image: https://avatars.githubusercontent.com/u/4452826?s=400&amp;v=4
slug: /ja/reTerminal_Home_Assistant
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminalでHome Assistantの始め方

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/94.jpg" /></center>

## はじめに

このWikiでは、reTerminalを使用して普通の家をスマートホームに変える方法をステップバイステップで説明します！ このWikiを読み終える頃には、reTerminalのLCD上で美しいダッシュボードを表示し、家庭の電化製品を制御したり、センサーのデータなどの情報を指先で確認できるようになります。それでは始めましょう！

## Home Assistantとは？

[Home Assistant](https://www.home-assistant.io)は、スマートホームデバイスの中央制御システムとして設計された、ホームオートメーション用の無料かつオープンソースのソフトウェアで、スマートホームハブとも呼ばれます。クラウドを必要としないホームオートメーションを提供しており、これによりホームオートメーションシステムがリモートサーバーやインターネット接続に依存しません。このローカル制御により、クラウド接続デバイスよりもはるかに高いセキュリティを確保できます。また、24時間365日稼働させる際の信頼性も向上します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" /></center>

Home Assistantは柔軟に使用でき、初心者でも簡単に始められる素晴らしいドキュメントが提供されています。また、[Home Assistant Forum](https://community.home-assistant.io)には活発なコミュニティがあり、Home Assistantの構築や運用中に問題が発生した場合に助けてくれる多くのメンバーがいます。
Home Assistantをセットアップした後は、AndroidやiOSのコンパニオンアプリを使用したり、Google AssistantやAmazon Alexaなどの対応する仮想アシスタントを通じて音声コマンドで操作したりすることで、ウェブベースのユーザーインターフェースにアクセスできます。
ウェブブラウザでデモをすぐに体験したい場合は、[こちらをクリックしてください](https://demo.home-assistant.io)。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" /></center>

## インストール方法の種類

Home Assistantは、Raspberry Pi、ODROID、ASUS Tinkerboard、Intel NUC、Windows/Linux/Mac PCなどのさまざまなハードウェアで動作することがサポートされています。そしてこれに伴い、異なるハードウェアに対して異なるインストール方法があります。これらすべてのインストール方法について詳しく知りたい場合は、[このページ](https://www.home-assistant.io/installation)をご覧ください。
以下に示すように、主に4つのインストール方法があり、すべてのHome Assistant機能がすべてのインストール方法でサポートされているわけではありません。

<center><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/2.png" /></center>

## reTerminalのインストール方法

Home Assistantによると、推奨されるHome Assistantインストール方法は**OSとコンテナ方式**の2つです。しかし、これら2つの方法を使用してreTerminalにインストールすることはありません。なぜでしょうか？

### なぜHome Assistant Operating Systemではないのか？

reTerminalにHome Assistant Operating Systemをインストールすると、reTerminalのLCD上でHome AssistantのダッシュボードUIを表示することができません。これは、Home Assistant OSが以下のように接続されたディスプレイにCLIインターフェースのみを出力するためです。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/5.png" /></center>

そのため、ダッシュボードUIは別のデバイス上で**homeassistant.local:8123**を介してのみアクセス可能です。ただし、この方法でインストールしたい場合や、reTerminalのLCD上でダッシュボードを表示したくない場合は、[このガイド](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-operating-system)に従うことができます。これは、reTerminalがRaspberry Pi Compute Module 4に基づいているため、Raspberry Piと同じインストール方法を採用しています。

### なぜHome Assistant Containerではないのか？

reTerminalにHome Assistant Containerをインストールすると、いくつかのHome Assistant機能が欠落することになります。そのため、このインストール方法はスキップします。ただし、このインストール方法を試したい場合は、[このガイド](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-container)に従うことができます。これは、reTerminalがRaspberry Pi Compute Module 4に基づいているため、Raspberry Piと同じインストール方法を採用しています。

### なぜHome Assistant Supervisedなのか？

reTerminalにHome Assistant Supervisedをインストールすると、Home Assistantのすべての機能を使用できるだけでなく、reTerminalのLCD上でダッシュボードUIを表示することも可能になります！ ただし、このインストールにはOSやコンテナ方式と比較して多くの手順が必要です。しかし、このWikiを注意深く順に従えば、成功することができます！

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Method 1" label="Bullseye">

## 構築してみましょう

:::note
いくつかのステップで、Wi-Fi接続を使用している場合、接続が失われる可能性があります。そのため、LAN接続を使用することを推奨します。
:::

それでは、reTerminalにHome Assistant Supervisedをインストールする手順を見ていきましょう。

- **ステップ 1.** Raspberry Pi OSがすでにインストールされたreTerminalを準備します。reTerminalにはRPi OS 32ビットがプリインストールされています。ただし、再インストールしたい場合は[このWiki](https://wiki.seeedstudio.com/ja/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)を参照してください。

**注意:** 32ビット版を使用してください。reTerminal LCD上のHome Assistant Dashboard UIは32ビット版の方がスムーズに動作します。

- **ステップ 2.** パッケージマネージャーリストを更新します

```sh
sudo apt update
```

- **ステップ 3.** 依存関係をインストールします

```sh
sudo apt-get install \
apparmor \
jq \
wget \
curl \
udisks2 \
libglib2.0-bin \
network-manager \
dbus \
systemd-journal-remote -y
```

- **ステップ 4.** 壊れたインストールを修復します

```sh
sudo apt --fix-broken install
```

- **ステップ 5.** reTerminalを再起動します

```sh
sudo reboot
```

- **ステップ 6.** 公式Dockerスクリプトをダウンロードします

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
```

- **ステップ 7.** Dockerスクリプトを実行します

```sh
sudo sh get-docker.sh
```

- **ステップ 8.** Dockerユーザーをシステムに追加します

```sh
sudo usermod -aG docker pi
```

- **ステップ 9.** Dockerが正常に動作しているか確認します

```sh
docker --version
```

以下のような出力が表示されれば、Dockerが正常にインストールされています。

```
Docker version 20.10.18, build b40c2f6
```

:::note
Home Assistant Supervisorの互換性は特定のDocker CGroup v1に依存しています。この互換性を確保するために、以下の変更を行う必要があります。
:::

- **エディタを使用してこのファイルを開きます**

```sh
sudo nano /etc/default/grub
```

- **この行を追加して保存します**

```sh
systemd.unified_cgroup_hierarchy=false
```

- **このファイルを開きます**

```sh
sudo nano /boot/cmdline.txt
```

- **フレーズの末尾にこの行を追加して保存します**

```sh
systemd.unified_cgroup_hierarchy=false apparmor=1 security=apparmor
```

- **ステップ 10.** [Home Assistant OS Agentページ](https://github.com/home-assistant/os-agent/releases)にアクセスし、最新リリースの下で***linux_armv7.deb**で終わるファイルを右クリックしてリンクをコピーします。

:::note
reTerminal(CM4)でテスト済みの安定した動作するHome Assistant Agentのリリースは現在V1.3.0です。
:::

<center><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/4.jpg" /></center>

- **ステップ 11.** 以下の形式でファイルをダウンロードします

```sh
wget <copied_link>
```

例:

```sh
wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_armv7.deb
```

- **ステップ 12.** Home Assistant OS Agentをインストールします

```sh
sudo dpkg -i os-agent_<version_number>_linux_armv7.deb
```

例:

```sh
sudo dpkg -i os-agent_1.3.0_linux_armv7.deb
```

- **ステップ 13.** Home Assistant-Supervisedインストールスクリプトをダウンロードします

:::note
同様に、reTerminal(CM4)でテスト済みの安定した動作するHome Assistant-Supervisedのリリースは現在V1.3.0です。
:::

```sh
wget https://github.com/home-assistant/supervised-installer/releases/download/1.3.0/homeassistant-supervised.deb
```

- **ステップ 14.** Home Assistant-Supervisedをインストールします

```sh
sudo dpkg -i homeassistant-supervised.deb
```

- **ステップ 15.** インストール中にエラーが発生した場合、以下のコマンドを実行して壊れたインストールを修復してください

```sh
sudo apt --fix-broken install
```

- **ステップ 16.** **パッケージ構成**ウィンドウで、**raspberrypi4**を選択し、**ENTER**を押します

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/6.png" /></center>

出力は以下のようになります

<center><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/7.png" /></center>

:::note
再起動後にWi-Fi接続の問題が発生した場合は、以下の手順を実行してください。
:::

- 'dhcpcd'を有効にするには、以下のコマンドを実行します:
```sh
sudo systemctl enable dhcpcd
```

- ネットワークサービスを無効にするには、以下のコマンドを実行します:
```sh
sudo systemctl disable networking
```

- Raspberry Piを再起動して変更を適用します:
```sh
sudo reboot
```

:::note
「ネットワークマネージャーの問題」を解決するには、ネットワークマネージャーを起動して有効化する必要があります。以下のコマンドを使用してください:
:::

```sh
sudo systemctl enable NetworkManager
```

## WebブラウザでHome Assistant Dashboard UIを表示する

- **ステップ 1.** Webブラウザで以下のURLを入力してください

```sh
homeassistant.local:8123
```

初期起動プロセスが完了するまで少し時間がかかります。

- **ステップ 2.** 起動が完了したら、アカウントを作成し、初期設定の指示に従ってください。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" /></center>

その後、以下のようなウェルカムダッシュボードが表示されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/15.png" /></center>

## reTerminalでキオスクモードでHome Assistant Dashboard UIを表示する

reTerminalのLCDでHome Assistant Dashboard UIを表示するために、Raspberry Pi OSに既に含まれているChromiumウェブブラウザを使用します。reTerminalが起動した後、Chromiumがフルスクリーンモードで自動的に起動するように設定します。

- **ステップ 1.** 以下のディレクトリに移動します。

```sh
cd /etc/xdg/lxsession/LXDE-pi/
```

- **ステップ 2.** **nanoテキストエディタ**で**autostart**ファイルを開きます。

```sh
sudo nano autostart
```

- **ステップ 3.** ファイルの末尾に以下の行を追加します。

```sh
@chromium-browser --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 homeassistant.local:8123
```

- **ステップ 4.** reTerminalを再起動します。

```sh
sudo reboot 
```

これで、reTerminalが起動すると、Home AssistantダッシュボードUIがフルスクリーンウィンドウで開きます！

## ボーナス

スマートライト、温度・湿度センサー、CCTVなどを統合した後、Home Assistant上の完全なスマートホームダッシュボードは以下のようになります。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/16.png" /></center>

<video style={{display: 'block', maxWidth: '100%'}} id="video" controls preload="none" poster="https://files.seeedstudio.com/wiki/Home-Assistant/thumb.png">
  <source id="mp4" src="https://files.seeedstudio.com/wiki/Home-Assistant/HA-dashboard.mp4" type="video/mp4" />
</video>
<br />

</TabItem>



<TabItem value="Method 2" label="Bookworm">

:::note
HAインストールプロセス中、ワイヤレス接続を使用してテストしました。
:::

## Home Assistant Supervisedインストール - Bookworm

#### ステップ 1: 依存関係の更新とインストール

```bash
sudo apt update
sudo apt-get install -y jq wget curl udisks2 apparmor-utils libglib2.0-bin network-manager dbus systemd-journal-remote systemd-resolved
```

#### ステップ 2: ネットワークマネージャーの開始と有効化

ネットワークマネージャーのステータスを確認します。

```bash
sudo systemctl status NetworkManager.service
```

NetworkManagerが開始していない場合、開始して有効化します。

```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

#### ステップ 3: ブートパラメータの変更

`cmdline.txt`ファイルを編集します。
```bash
sudo nano /boot/firmware/cmdline.txt
```

以下を行の末尾に追加します。

```bash
systemd.unified_cgroup_hierarchy=false lsm=apparmor
```

システムを再起動します。
```bash
sudo reboot
```

#### ステップ 4: Dockerのインストール

```bash
sudo curl -fsSL get.docker.com | sh
sudo gpasswd -a $USER docker
newgrp docker
```

#### ステップ 5: OS Agentのインストール

```bash
wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_aarch64.deb
sudo dpkg -i os-agent_1.6.0_linux_aarch64.deb
```

#### ステップ 6: Home Assistant Supervisedのインストール

```bash
wget https://github.com/home-assistant/supervised-installer/releases/download/1.6.0/homeassistant-supervised.deb
sudo dpkg -i homeassistant-supervised.deb
```

インストールが成功すると、青い画面が表示され、**Raspberry Pi4 64**モデルを選択できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" style={{width:600}}/></div>

数分後、インストールが開始されます。

その後、以下のURLを使用してWebブラウザでHome Assistant Dashboard UIを表示できます。 `<your_reTerminal_ip>:8123`

初期起動プロセスが完了するまで少し時間がかかります。起動が完了したら、アカウントを作成し、初期設定の指示に従ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" style={{width:600}}/></div>

:::note
通知に警告が表示された場合は、reTerminalを再起動してください。
:::


</TabItem>

</Tabs>

# 技術サポート

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートをご用意しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>