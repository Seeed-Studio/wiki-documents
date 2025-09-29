---
description: reTerminal-常见问题解答
title: 如何在 reTerminal 上安装 Ubuntu
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/install-ubuntu-on-reterminal
last_update:
  date: 2023/6/21
  author: Seraphina
---

<!-- Q10: 如何在 reTerminal 上安装 Ubuntu？ -->

如果您想在 reTerminal 上安装 Ubuntu，请按照以下步骤逐步操作：

- **步骤 1.** 将 [Ubuntu Server 21.10](https://ubuntu.com/download/raspberry-pi/thank-you?version=21.10&architecture=server-arm64+raspi) 刷写到 reTerminal 的 eMMC 存储中

:::note
参考 [此处](https://wiki.seeedstudio.com/cn/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) 的刷写说明。在打开 **Raspberry Pi Imager** 后，导航到 `CHOOSE OS > Use custom`，然后选择上述镜像进行刷写。
:::

- **步骤 2.** 通过 SSH 登录到 reTerminal，并依次运行以下命令。请确保使用 **ubuntu** 作为用户名和 **ubuntu** 作为密码。

```sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script1.sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script2.1.sh
chmod +x script1.sh script2.1.sh
sudo ./script1.sh
sudo reboot
sudo ./script2.1.sh
sudo reboot
```

- **步骤 3.** 现在，reTerminal 将启动到 Ubuntu 桌面，但屏幕方向可能是错误的。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait.jpg" alt="pir" width={1000} height="auto" /></p>

- **步骤 4.** 点击右上角的 **电源图标**，然后点击 **设置**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-settings-2.jpg" alt="pir" width={350} height="auto" /></p>

- **步骤 5.** 选择 **显示**，在 **方向** 下选择 **纵向左**，然后点击 **应用**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait-left-2.jpg" alt="pir" width={400} height="auto" /></p>

最后，您将看到正确方向的 Ubuntu 桌面！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-landscape.jpg" alt="pir" width={1000} height="auto" /></p>