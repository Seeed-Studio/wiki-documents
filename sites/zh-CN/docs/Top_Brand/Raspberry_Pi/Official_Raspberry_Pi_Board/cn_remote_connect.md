---
description: 远程连接到 Raspberry Pi/reComputer
title: 远程连接到 Raspberry Pi
keywords:
- Raspberry_Pi
- Official_Raspberry_Pi_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/remote_connect
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

# 远程连接到 Raspberry Pi/reComputer

用户经常会遇到由于某些限制（如没有额外的显示器等）而无法物理访问 Raspberry Pi（reComputer 或其他边缘设备）的情况。因此，远程连接 Raspberry Pi 是非常必要的。根据您运行的操作系统，有几种方法可以建立到远程边缘设备的连接。在这个项目中，根据 Raspberry Pi 使用的操作系统（Linux），我们可以使用安全外壳协议（SSH）来远程控制机器。

## 入门指南

SSH，也称为安全外壳或安全套接字外壳，是一种网络协议，为用户（特别是系统管理员）提供了通过不安全网络安全访问计算机的方式。SSH 被网络管理员广泛用于远程管理系统和应用程序，使他们能够通过网络登录到另一台计算机、执行命令并在计算机之间移动文件。默认情况下，SSH 服务器监听标准传输控制协议（TCP）端口 22。

### 所需材料

- 基于 Linux 的设备（Raspberry Pi 或 reComputer）
- PC

### 远程连接

以 Raspberry Pi 为例，我们将打开 Raspberry Pi SSH 端口并使用 PC 上的 SSH 接口远程调用它。要从计算机连接到 Raspberry Pi，我们需要知道 Pi 的 IP 地址。
>注意：确保 PC 和 Raspberry Pi 在同一个局域网下。

如果您的设备是 reComputer，您可以跳过步骤 1 到步骤 3，因为 ssh 端口默认是开放的。以下是将 Raspberry Pi 与计算机连接的步骤。

**步骤 1.** 在 Raspberry Pi 上打开一个新终端并执行 `sudo raspi-config.`菜单将如下所示，我们需要选择"Interfacing Options"然后按 ENTER

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_2.png"/></div>

**步骤 2.** 选择"SSH"并按 ENTER。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_3.png"/></div>

**步骤 3.** 选择"Yes"并按 ENTER。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_4.png"/></div>

稍等片刻，我们将收到消息"The SSH server is enabled"。

 <div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_5.png"/></div>

**步骤 4.**  在 Raspberry Pi 上打开终端并执行 `ifconfig`
我们可以看到 Raspberry Pi 的 IP 地址如下所示：

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_6.png"/></div>

**步骤 5.** 打开 PC 的终端并执行 `ssh pi@192.168.6.215` 并输入 Raspberry Pi 的密码。然后 PC 将远程连接到 Raspberry Pi。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_7.png"/></div>