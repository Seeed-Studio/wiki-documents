---
description: このWikiでは、reCameraに静的IPアドレスを設定する方法を説明します。
title: reCameraでの静的IP設定
keywords:
  - Edge
  - reCamera
  - Static IP
  - Network
image: https://files.seeedstudio.com/wiki/reCamera/static_ip_banner.png
slug: /configure_static_ip_on_recamera
sku: 102991897,102991896,102991894,102991895,101991223,102991898,101991224,102991899,108990119,108990120,E20245041001,100018917, 100041077, 100029708, 100074316
sidebar_position: -1
last_update:
  date: 04/13/2026
  author: Samuel
createdAt: "2026-04-13"
updatedAt: "2026-04-13"
url: https://wiki.seeedstudio.com/ja/configure_static_ip_on_recamera/
---

# reCameraでの静的IP設定

このドキュメントでは、reCamera（Buildrootシステム）に静的IPアドレスを設定する方法を説明します。設定には、設定ファイルの編集、静的ネットワークパラメータの設定、および検証のためのネットワークサービスの再起動という3つのステップが含まれます。

## 静的IP設定

### ステップ1: ネットワーク設定ファイルを編集する

reCameraのターミナルで以下のコマンドを実行します：

```bash
sudo vi /etc/network/interfaces
```

### ステップ2: `eth0` の静的IPパラメータを設定する

`eth0` を静的インターフェースとして設定します。実際のネットワークに基づいて値を更新し、`address` が同じLAN内の他のIPアドレスと重複しないようにしてください：

```bash
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
    address 192.168.2.100
    netmask 255.255.255.0
    gateway 192.168.2.1
```

DNSを手動で設定する必要がある場合：

```bash
echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
```

### ステップ3: ネットワークを再起動して検証する

再起動せずに新しい設定を適用します：

```bash
sudo /etc/init.d/S40network restart
```

次に、`eth0` のアドレスを確認します：

```bash
ip addr show eth0
```

出力に設定した `address` が含まれていれば、静的IPの設定は成功しています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/static_ip_output.png" /></div>

## 技術サポートと製品ディスカッション

当社の製品をお選びいただき、ありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様のご要望やニーズに合わせて、いくつかのコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
