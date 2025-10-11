---
description: reComputer R1000でHome Assistantをセットアップし、設定する方法を学ぶ
title: reComputer R1000とHome Assistant 
keywords:
  - Home Assistant 
  - reComputer R1000
  - Home Automation
  - Bookworm
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_home_automation
last_update:
  date: 08/02/2024
  author: Kasun Thushara
---

## はじめに

ビルディングオートメーションシステム向けに設計されたreComputer r1000は、高速・低速両方の通信をサポートする複数の絶縁RS485チャンネルを備えています。BACnet、Modbus RTU、Modbus TCP/IPプロトコルに対応しており、様々な自動化ニーズに対応できる汎用性を持っています。このガイドでは、reComputer r1000にHome Assistantをインストールする簡潔な手順を提供し、スマートホームデバイスのシームレスな統合と制御を可能にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/logo.png" style={{width:400}}/></div>

[Home Assistant](https://www.home-assistant.io/)は、ホームオートメーション用の無料でオープンソースのソフトウェアで、様々なデバイスの中央制御システムまたはスマートホームハブとして機能します。ローカル制御を念頭に設計されており、ビルディング管理システム（BMS）がリモートサーバーやインターネット接続に依存せずに動作することを保証し、セキュリティと信頼性を向上させます。これにより、BMSはクラウド接続デバイスに関連する脆弱性なしに24時間365日稼働でき、堅牢で安全な自動化ソリューションを提供します。

## はじめに

このプロジェクトを開始する前に、ここで説明されているようにハードウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

:::note
HA インストールプロセス中に、ワイヤレス接続を使用してテストを行いました。
:::

### ソフトウェアの準備

reComputer には Bookworm 64 bit バージョンが事前にインストールされています。このガイドでは、そのシステムに **Home Assistant Supervised をインストール**する手順について説明します。

## なぜ Home Assistant Supervised なのか？

reComputer に Home Assistant をインストールする方法はいくつかあります。Home Assistant の完全インストールを選択することもできますし、オペレーティングシステム上で Home Assistant を他のアプリケーションと並行して実行する予定がある場合は、supervised 方式が理想的です。もう一つの選択肢は Docker を使用することですが、これにはアドオンとして個別の Docker コンテナを設定する必要があります。このガイドでは、より複雑なインストールプロセスである **Supervised 方式**に焦点を当てています。心配しないでください—ステップバイステップでご案内します。

## Home Assistant Supervised インストール - Bookworm

#### ステップ 1: 依存関係の更新とインストール

```bash
sudo apt update
sudo apt-get install -y jq wget curl udisks2 apparmor-utils libglib2.0-bin network-manager dbus systemd-journal-remote systemd-resolved
```

#### ステップ2: Network Managerの開始と有効化

Network Managerのステータスを確認する

```bash
sudo systemctl status NetworkManager.service
```

NetworkManagerが開始されない場合は、開始して有効化してください

```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

#### ステップ3: ブートパラメータの変更

`cmdline.txt` ファイルを編集します：

```bash
sudo nano /boot/firmware/cmdline.txt
```

行の末尾に以下を追加してください：

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

修正が正常に完了すると、青い画面が表示され、**Raspberry Pi4 64** モデルを選択できるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" style={{width:600}}/></div>

数分後、インストールが開始されます。

その後、`<your_recomputer_ip>:8123` を使用してWebブラウザで Home Assistant ダッシュボードUIを表示できます。

初期起動プロセスの完了には時間がかかります。起動が完了したら、アカウントを作成し、初期セットアップの手順に従ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" style={{width:600}}/></div>

:::note
通知に警告が表示される場合は、reComputerを再起動してください。
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
