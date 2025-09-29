---
description: OpenWrt-FAQ
title: OpenWrtでデフォルトゲートウェイIPを変更する方法は？
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/change_default_gateway_IP
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q1: デフォルトゲートウェイIPが192.168.2.1の既存ルーターにOpenWrtルーターを接続する場合はどうすればよいですか？ -->

Seeed OpenWrtイメージには、必要なネットワーク設定があらかじめ設定されています。Raspberry Pi CM4用デュアルギガビットイーサネットキャリアボードを既存のルーターに接続するシナリオでは、1つのネットワーク設定のみを変更する必要がある場合があります。そのルーターのデフォルトゲートウェイIPが192.168.2.1に設定されており、これがOpenWrtのデフォルトゲートウェイIPと同じである場合です。このシナリオでは、以下のようにOpenWrtのLANインターフェースのデフォルトIPを変更する必要があります：

- **ステップ1.** Webブラウザを開き、**192.168.2.1**と入力してOpenWrtポータルにログインします

- **ステップ2.** **System > TTYD Terminal**に移動し、ユーザー名として**root**でログインします

- **ステップ3.** 以下のファイルを開きます

```sh
vi /etc/config/network
```

- **ステップ4.** LANインターフェースの静的IPアドレスを以下のように変更します

```sh
config interface 'lan'
        option type 'bridge'
        option ifname 'eth0'
        option proto 'static'
        option ipaddr '192.168.3.1'
        option netmask '255.255.255.0'
        option ip6assign '60'
```

**注意：** ここでは静的IPを**192.168.3.1**に変更しています。ただし、お好みの任意のIPアドレスを入力することができます

- **ステップ4.** ルーターを再起動します

```sh
reboot
```