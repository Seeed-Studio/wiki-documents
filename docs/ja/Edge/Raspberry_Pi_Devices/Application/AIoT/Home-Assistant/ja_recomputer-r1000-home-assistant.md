---
description: reComputer R1000 に Home Assistant をセットアップおよび構成する方法を学びます
title: reComputer R1000 と Home Assistant
keywords:
  - Home Assistant
  - reComputer R1000
  - ホームオートメーション
  - Bookworm
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_home_automation
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

reComputer r1000 は、ビルディングオートメーションシステム向けに設計されており、高速および低速通信の両方をサポートする複数の絶縁された RS485 チャネルを備えています。BACnet、Modbus RTU、および Modbus TCP/IP プロトコルと互換性があり、さまざまなオートメーションニーズに対応する汎用性を提供します。このガイドでは、reComputer r1000 に Home Assistant をインストールする方法を簡潔に紹介し、スマートホームデバイスのシームレスな統合と制御を可能にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/logo.png" style={{width:400}}/></div>

[Home Assistant](https://www.home-assistant.io/) は、ホームオートメーション向けの無料かつオープンソースのソフトウェアであり、さまざまなデバイスの中央制御システムまたはスマートホームハブとして機能します。ローカル制御を念頭に設計されており、ビルディング管理システム (BMS) がリモートサーバーやインターネット接続に依存せずに動作することを保証し、セキュリティと信頼性を向上させます。これにより、クラウド接続デバイスに関連する脆弱性を回避しながら、BMS を 24 時間 365 日稼働させることができ、堅牢で安全なオートメーションソリューションを提供します。

## 始める前に

このプロジェクトを開始する前に、以下に記載されているようにハードウェアを事前に準備する必要があります。

### ハードウェアの準備

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

:::note
HA インストールプロセス中、ワイヤレス接続を使用してテストを行いました。
:::

### ソフトウェアの準備

reComputer には、事前にインストールされた Bookworm 64 ビットバージョンが付属しています。このガイドでは、そのシステム上で **Home Assistant Supervised** をインストールする手順を説明します。

## なぜ Home Assistant Supervised なのか？

reComputer に Home Assistant をインストールする方法はいくつかあります。Home Assistant を完全にインストールする方法を選択することもできますし、オペレーティングシステム上で他のアプリケーションと並行して Home Assistant を実行する予定がある場合は、Supervised メソッドが理想的です。もう一つの選択肢として Docker を使用する方法がありますが、これはアドオンとして個別の Docker コンテナを設定する必要があります。このガイドでは、より複雑なインストールプロセスである **Supervised メソッド** に焦点を当てています。心配しないでください—ステップバイステップで説明します。

## Home Assistant Supervised インストール - Bookworm

#### ステップ 1: 更新と依存関係のインストール

```bash
sudo apt update
sudo apt-get install -y jq wget curl udisks2 apparmor-utils libglib2.0-bin network-manager dbus systemd-journal-remote systemd-resolved
```

#### ステップ 2: Network Manager の開始と有効化

Network Manager のステータスを確認します。

```bash
sudo systemctl status NetworkManager.service
```

NetworkManager が開始されていない場合、以下のコマンドで開始して有効化します。

```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

#### ステップ 3: ブートパラメータの変更

`cmdline.txt` ファイルを編集します:
```bash
sudo nano /boot/firmware/cmdline.txt
```

以下を行の末尾に追加します:

```bash
systemd.unified_cgroup_hierarchy=false lsm=apparmor
```

システムを再起動します:
```bash
sudo reboot
```

#### ステップ 4: Docker のインストール

```bash
sudo curl -fsSL get.docker.com | sh
sudo gpasswd -a $USER docker
newgrp docker
```

#### ステップ 5: OS Agent のインストール

```bash
wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_aarch64.deb
sudo dpkg -i os-agent_1.6.0_linux_aarch64.deb
```

#### ステップ 6: Home Assistant Supervised のインストール

```bash
wget https://github.com/home-assistant/supervised-installer/releases/download/1.6.0/homeassistant-supervised.deb
sudo dpkg -i homeassistant-supervised.deb
```

インストールが成功すると、青い画面が表示され、**Raspberry Pi4 64** モデルを選択することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" style={{width:600}}/></div>

数分後、インストールが開始されます。

その後、ウェブブラウザで `<your_recomputer_ip>:8123` を使用して Home Assistant Dashboard UI を表示できます。

初回の起動プロセスが完了するまで少し時間がかかります。起動が完了したら、アカウントを作成し、初期設定の指示に従ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" style={{width:600}}/></div>

:::note
通知に警告が表示された場合は、reComputer を再起動してください。
:::

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>