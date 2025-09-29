---
description: reTerminal-常见问题解答
title: 如何升级 Raspberry Pi OS 和已安装的软件包
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/upgrade-rpiOS_installed-packages
last_update:
  date: 6/21/2023
  author: cheng.tang
---

<!-- ## Q3: 如何升级 Raspberry Pi OS 和已安装的软件包 -->

我们将更新所有软件包，同时将 Raspberry Pi OS 升级到最新版本。

### **步骤 1.** 在 reTerminal 上打开终端窗口并输入以下命令

```sh
sudo apt update
sudo apt full-upgrade
```

### **步骤 2.** 重新安装内核头文件

```sh
sudo apt install raspberrypi-kernel-headers
```

### **步骤 3.** 重启 reTerminal

```sh
sudo reboot
```

现在，您的 Raspberry Pi OS 和所有必要的软件包都已更新到最新版本！