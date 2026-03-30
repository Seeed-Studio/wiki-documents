---
description: reTerminal-FAQ
title: Raspberry Pi OSとインストール済みパッケージをアップグレードする方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /upgrade-rpiOS_installed-packages
last_update:
  date: 6/21/2023
  author: cheng.tang
createdAt: '2025-08-12'
updatedAt: '2025-08-12'
url: https://wiki.seeedstudio.com/ja/upgrade-rpiOS_installed-packages/
---

<!-- ## Q3: How to upgrade Raspberry Pi OS and the installed packages -->

すべてのパッケージとRaspberry Pi OSを最新バージョンにアップデートします

### **ステップ 1.** reTerminalでターミナルウィンドウを開き、以下を入力します

```sh
sudo apt update
sudo apt full-upgrade
```

### **ステップ 2.** カーネルヘッダーを再インストールします

```sh
sudo apt install raspberrypi-kernel-headers
```

### **ステップ 3.** reTerminalを再起動します

```sh
sudo reboot
```

これでRaspberry Pi OSとすべての必要なパッケージが最新の状態になりました！