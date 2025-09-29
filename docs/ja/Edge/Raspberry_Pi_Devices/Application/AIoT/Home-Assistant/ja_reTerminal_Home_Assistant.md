---
description: reTerminalにHome Assistantをインストールする方法
title: reTerminalでHome Assistantを始める
image: https://avatars.githubusercontent.com/u/4452826?s=400&amp;v=4
slug: /ja/reTerminal_Home_Assistant
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# reTerminalでHome Assistantを始める

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/94.jpg" /></center>

## はじめに

このwikiでは、reTerminalを使って普通の家をスマートホームに変える方法を段階的に説明します！このwikiの最後には、reTerminalのLCDで美しいダッシュボードを表示し、家電製品を制御したり、センサーデータなどの他の情報を指先で確認できるようになります。それでは、始めましょう！

## Home Assistantとは？

[Home Assistant](https://www.home-assistant.io)は、スマートホームデバイスの中央制御システムとして設計されたホームオートメーション用の無料でオープンソースのソフトウェアで、スマートホームハブと呼ぶことができます。クラウドを必要としないホームオートメーションを提供するため、ホームオートメーションシステムがリモートサーバーやインターネット接続に依存しません。このローカル制御により、クラウド接続デバイスよりもはるかに優れたセキュリティを実現できます。また、24時間365日稼働し続ける際の信頼性も向上します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" /></center>

使用が柔軟で、Home Assistantが提供する優れたドキュメントにより、初心者でも非常に簡単に始めることができます。また、[Home Assistant Forum](https://community.home-assistant.io)には多くのメンバーがいるアクティブなコミュニティがあり、Home Assistantの構築と実行で問題が発生した場合にサポートしてくれます。
Home Assistantをセットアップした後は、AndroidやiOS用のコンパニオンアプリを使用したWebベースのユーザーインターフェース、またはGoogle AssistantやAmazon Alexaなどのサポートされた仮想アシスタントを介した音声コマンドでアクセスできます。
Webブラウザでデモを素早く体験したい場合は、[こちらをクリック](https://demo.home-assistant.io)してください。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" /></center>

## 異なるインストール方法

Home Assistantは、Raspberry Pi、ODROID、ASUS Tinkerboard、Intel NUC、Windows/Linux/Mac PCなど、さまざまなハードウェアでの実行がサポートされています。これに伴い、異なるハードウェアでの異なるインストール方法があります。これらすべてのインストール方法について詳しく知りたい場合は、[このページ](https://www.home-assistant.io/installation)をご覧ください。
以下に示すように、4つの主要なインストール方法があり、すべてのインストール方法ですべてのHome Assistant機能がサポートされているわけではありません。

<center><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/2.png" /></center>

## reTerminalのインストール方法

Home Assistantによると、推奨されるHome Assistantインストール方法は**OSとContainer方法**の2つです。しかし、reTerminalにインストールする際は、これら2つの方法を使用しません。なぜでしょうか？

### なぜHome Assistant Operating Systemではないのか？

reTerminalにHome Assistant Operating Systemをインストールした場合、reTerminalのLCDでHome AssistantダッシュボードUIを表示することができません。これは、Home Assistant OSが接続されたディスプレイに以下のようなCLIインターフェースのみを出力するためです。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/5.png" /></center>

そのため、ダッシュボードUIは他のデバイスで**homeassistant.local:8123**経由でのみアクセスできます。ただし、このようにインストールしてreTerminalのLCDでダッシュボードを表示したくない場合は、[このガイド](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-operating-system)に従うことができます。reTerminalはRaspberry Pi Compute Module 4をベースにしているため、Raspberry Piと同じインストール方法に従います。

### なぜHome Assistant Containerではないのか？

reTerminalにHome Assistant Containerをインストールした場合、いくつかのHome Assistant機能を見逃すことになります。そのため、このインストールはスキップします。ただし、このインストール方法を探求したい場合は、[このガイド](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-container)に従うことができます。reTerminalはRaspberry Pi Compute Module 4をベースにしているため、Raspberry Piと同じインストール方法に従います。

### なぜHome Assistant Supervisedなのか？

reTerminalにHome Assistant Supervisedをインストールした場合、Home Assistantのすべての機能を使用でき、reTerminalのLCDでダッシュボードUIも表示できます！ただし、このインストールはOSやContainer方法と比較してより多くのステップが必要になります。しかし、このwikiを注意深く読み進めれば、成功させることができます！

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Method 1" label="Bullseye">

## 構築してみましょう

:::note
一部のステップでは、Wi-Fi経由で接続している場合、接続が切断される可能性があります。代わりにLAN接続を使用することをお勧めします。

:::

それでは、reTerminalにHome Assistant Supervisedをインストールするプロセスを進めていきましょう。

- **ステップ 1.** Raspberry Pi OSがすでにインストールされたreTerminalを準備します。reTerminalにはRPi OS 32-bitがプリインストールされています。ただし、再インストールしたい場合は、[このwiki](https://wiki.seeedstudio.com/ja/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)に従ってください。

**注意:** 32-bit版を使用することを確認してください。reTerminal LCDでのHome AssistantダッシュボードUIは、32-bit版の方がはるかにスムーズに動作するためです。

- **ステップ 2.** パッケージマネージャーリストを更新します

```sh
sudo apt update
```

- **ステップ 3.** Install dependencies

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

- **ステップ 4.** 破損したインストールを修復する

```sh
sudo apt --fix-broken install
```

- **ステップ 5.** reTerminalを再起動する

```sh
sudo reboot
```

- **ステップ 6.** 公式Dockerスクリプトをダウンロード

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
```

- **ステップ 7.** Docker スクリプトを実行する

```sh
sudo sh get-docker.sh
```

- **ステップ 8.** Dockerユーザーをシステムに追加する

```sh
sudo usermod -aG docker pi
```

- **ステップ 9.** Dockerが正常に動作しているかどうかを確認する

```sh
docker --version
```

以下のような出力が表示された場合、Dockerが正しくインストールされていることを意味します

```
Docker version 20.10.18, build b40c2f6
```

:::note

Home Assistant Supervisorの互換性は、特定のDocker CGroup v1に依存しています。この互換性を確保するために、以下の変更を行う必要があります：

:::

- **エディターを使用してこのファイルを開く**

```sh
sudo nano /etc/default/grub
```

- **この行を追加して保存してください。**

```sh
systemd.unified_cgroup_hierarchy=false
```

- **このファイルを開く**

```sh
sudo nano /boot/cmdline.txt
```

- **この行をフレーズの最後に追加して保存してください。**

```sh
systemd.unified_cgroup_hierarchy=false apparmor=1 security=apparmor
```

- **ステップ 10.** [Home Assistant OS Agent ページ](https://github.com/home-assistant/os-agent/releases)にアクセスし、最新リリースの下で、***linux_armv7.deb** で終わるファイルを右クリックしてリンクをコピーします

:::note
reTerminal(CM4)で現在テスト済みで安定して動作するHome Assistant Agentのリリースは V1.3.0 です。
:::

<center><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/4.jpg" /></center>

- **ステップ 11.** 以下の形式で入力してファイルをダウンロードします

```sh
wget <copied_link>
```

例えば：

```sh
wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_armv7.deb
```

- **ステップ 12.** Home Assistant OS エージェントをインストールする

```sh
sudo dpkg -i os-agent_<version_number>_linux_armv7.deb
```

例えば：

```sh
sudo dpkg -i os-agent_1.3.0_linux_armv7.deb
```

- **ステップ 13.** Home Assistant-Supervised インストールスクリプトをダウンロードする

:::note
同様に、reTerminal(CM4) で現在テスト済みで安定して動作する Home Assistant-Supervised のリリースも V1.3.0 です。
:::

```sh
wget https://github.com/home-assistant/supervised-installer/releases/download/1.3.0/homeassistant-supervised.deb
```

- **ステップ 14.** Home Assistant-Supervisedをインストール

```sh
sudo dpkg -i homeassistant-supervised.deb
```

- **ステップ 15.** インストール中にエラーが発生した場合は、以下のコマンドを実行して破損したインストールを修復してください

```sh
sudo apt --fix-broken install
```

- **ステップ 16.** **Package configuration** ウィンドウで、**raspberrypi4** を選択し、**ENTER** を押します

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/6.png" /></center>

出力は以下のようになります

<center><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/7.png" /></center>

:::note

再起動後にWi-Fi接続の問題が発生した場合は、以下の手順に従ってください

:::

- 'dhcpcd' を有効にするには、以下のコマンドを実行します：

```sh
sudo systemctl enable dhcpcd
```

- 次のコマンドでネットワーキングサービスを無効にします：

```sh
sudo systemctl disable networking
```

- 変更を適用するためにRaspberry Piを再起動します：

```sh
sudo reboot
```

:::note

「Network Manager の問題」を解決するには（設定で確認）、Network Manager を開始してから有効化することで状況を修正できます。これを実行するには以下のコマンドを使用してください：

:::

```sh
sudo systemctl enable NetworkManager
```

## ウェブブラウザでHome Assistant ダッシュボードUIを表示する

- **ステップ 1.** ウェブブラウザで、以下のURLを入力します

```sh
homeassistant.local:8123
```

初期起動プロセスの完了には時間がかかります

- **ステップ 2.** 起動が完了したら、アカウントを作成し、初期設定の指示に従ってください

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" /></center>

その後、以下のようなウェルカムダッシュボードが表示されます

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/15.png" /></center>

## reTerminalでキオスクモードでHome AssistantダッシュボードUIを表示する

reTerminalのLCDでHome AssistantダッシュボードUIを表示するために、Raspberry Pi OSに既に含まれているChromiumウェブブラウザを使用します。reTerminalが起動した後にChromiumがフルスクリーンモードで自動起動するように設定します。

- **ステップ 1.** 以下のディレクトリに移動します

```sh
cd /etc/xdg/lxsession/LXDE-pi/
```

- **ステップ2.** **nano テキストエディタ**で **autostart** ファイルを開く

```sh
sudo nano autostart
```

- **ステップ 3.** ファイルの末尾に以下の行を追加します

```sh
@chromium-browser --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 homeassistant.local:8123
```

- **ステップ 4.** reTerminalを再起動する

```sh
sudo reboot 
```

reTerminalが起動すると、Home AssistantダッシュボードUIがフルスクリーンウィンドウで開きます！

## ボーナス

スマートライト、温度・湿度センサー、CCTVなどを統合した後、Home Assistant上の完全なスマートホームダッシュボードは以下のようになります

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

## Home Assistant Supervised インストール - Bookworm

#### ステップ1：依存関係の更新とインストール

```bash
sudo apt update
sudo apt-get install -y jq wget curl udisks2 apparmor-utils libglib2.0-bin network-manager dbus systemd-journal-remote systemd-resolved
```

#### ステップ2: Network Managerの開始と有効化

Network Managerのステータスを確認する

```bash
sudo systemctl status NetworkManager.service
```

NetworkManagerが起動しない場合は、起動して有効化してください

```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

#### ステップ3: ブートパラメータの変更

`cmdline.txt` ファイルを編集します：

```bash
sudo nano /boot/firmware/cmdline.txt
```

行の最後に以下を追加してください：

```bash
systemd.unified_cgroup_hierarchy=false lsm=apparmor
```

システムを再起動します：

```bash
sudo reboot
```

#### ステップ4: Dockerのインストール

```bash
sudo curl -fsSL get.docker.com | sh
sudo gpasswd -a $USER docker
newgrp docker
```

#### ステップ5: OS Agentのインストール

```bash
wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_aarch64.deb
sudo dpkg -i os-agent_1.6.0_linux_aarch64.deb
```

#### ステップ 6: Home Assistant Supervised をインストールする

```bash
wget https://github.com/home-assistant/supervised-installer/releases/download/1.6.0/homeassistant-supervised.deb
sudo dpkg -i homeassistant-supervised.deb
```

修正が成功すると、青い画面が表示され、**Raspberry Pi4 64** モデルを選択できるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" style={{width:600}}/></div>

数分後、インストールが開始されます。

その後、`<your_reTerminal_ip>:8123` を使用してWebブラウザで Home Assistant ダッシュボードUIを表示できます。

初期起動プロセスの完了には時間がかかります。起動が完了したら、アカウントを作成し、初期セットアップの指示に従ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" style={{width:600}}/></div>

:::note
通知に警告が表示される場合は、reTerminalを再起動してください。
:::

</TabItem>

</Tabs>

## Tech Support

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験を可能な限りスムーズにするため、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
