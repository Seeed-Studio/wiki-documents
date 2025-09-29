---
description: reTerminal-常见问题解答
title: 使用 SSH 通过 Wi-Fi/以太网登录到 Raspberry Pi OS/Ubuntu OS 或其他操作系统
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/log_rpios_use_ssh_over_wifi_ethernet
last_update:
  date: 2023/6/21
  author: Seraphina
---

<!-- 使用 SSH 通过 Wi-Fi/以太网登录到 Raspberry Pi OS/Ubuntu OS 或其他操作系统 -->

如果您想使用 **SSH 通过 Wi-Fi/以太网** 登录到 Raspberry Pi OS，可以按照以下步骤操作。首先在 reTerminal 上设置 Wi-Fi/以太网，然后使用 Windows/Mac/Linux 进行 SSH 登录。

## 第 1 步：在 reTerminal 上设置 Wi-Fi/以太网

:::caution
如果您已经使用 Raspberry Pi Imager 配置了 Wi-Fi 并启用了 SSH，可以跳过第 1 步
:::

- **1.** 如果您 **有 Wi-Fi 连接**，点击 Raspberry Pi OS 桌面右上角的 **Wi-Fi 图标**，选择您的 Wi-Fi 网络并使用屏幕上的虚拟键盘输入密码。

**注意：** Wi-Fi 设置的位置可能因操作系统不同而有所不同。

- **2.** 如果您 **没有 Wi-Fi 连接**，可以将路由器的以太网电缆连接到 reTerminal 的以太网端口。

**注意：** 请确保 reTerminal 和您的计算机连接到同一网络。

- **3.** 点击左上角的 Raspberry Pi 图标，导航到 `Preferences > Raspberry Pi Configuration`，然后点击 **Interfaces** 选项卡。

- **4.** 选择 **SSH** 旁边的 **Enable**，然后点击 **OK**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ssh-select-2.jpg" alt="pir" width="1000" height="auto"/></p>

现在让我们在计算机上配置软件。请根据您的操作系统继续操作。

## 第 2 步：使用 Windows/Mac/Linux 配置 SSH

### 对于 Windows

- **1.** 打开 **命令提示符**，然后输入以下内容：

```sh
ssh pi@raspberrypi.local
```

- **2.** 在提示时输入 **yes**。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **3.** 输入以下密码：

```sh
raspberry
```

- **4.** 如果您成功登录到 Raspberry Pi OS，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

### 对于 Mac/Linux

- **1.** 在计算机上打开 **终端**，然后输入以下内容：

```sh
ssh pi@raspberrypi.local
```

- **2.** 对于以下消息，输入 **yes**：

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **3.** 当提示输入密码时，输入以下内容：

```sh
raspberry
```

- **4.** 如果您成功登录到 Raspberry Pi OS，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>