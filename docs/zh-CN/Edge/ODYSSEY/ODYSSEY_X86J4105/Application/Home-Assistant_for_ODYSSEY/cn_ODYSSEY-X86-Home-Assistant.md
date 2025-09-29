---
description: 使用 Home Assistant 在 ODYSSEY-X86 上快速入门
title: 使用 Home Assistant 快速入门
tags:
  - Home Assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86-Home-Assistant
last_update:
  date: 03/16/2023
  author: Lakshantha

---
# 使用 Home Assistant 在 ODYSSEY-X86 上快速入门

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/thumb.png" /></div>


## 简介

本指南将逐步引导您如何使用 [ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html) 将普通的房屋变成智能家居！完成本指南后，您将能够在 PC、平板电脑、智能手机、reTerminal 上查看一个美观的仪表盘，并能够控制家用电器以及查看传感器数据等信息，触手可及。让我们开始吧！

## 什么是 Home Assistant？

[Home Assistant](https://www.home-assistant.io) 是一款免费的开源家庭自动化软件，旨在成为智能家居设备的中央控制系统，也可以称为智能家居中心。它提供无需云端的家庭自动化，这意味着您的家庭自动化系统不依赖于远程服务器或互联网连接。这种本地控制方式可以提供比云连接设备更高的安全性。此外，它在保持 24x7 运行方面也具有更高的可靠性。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" /></div>

它使用灵活且非常容易上手，即使是初学者也可以通过 Home Assistant 提供的优秀文档轻松开始。此外，Home Assistant 社区的活跃成员会在 [Home Assistant 论坛](https://community.home-assistant.io) 上帮助您解决在构建和运行 Home Assistant 时遇到的问题。

设置完成后，Home Assistant 可以通过基于网页的用户界面访问，也可以通过 Android 和 iOS 的配套应用程序访问，或者通过支持的虚拟助手（如 Google Assistant 或 Amazon Alexa）进行语音命令控制。

如果您想快速在网页浏览器上体验演示，请 [点击这里](https://demo.home-assistant.io)。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" /></div>

## 不同的安装方法

Home Assistant 支持在不同的硬件上运行，例如 Raspberry Pi、ODROID、ASUS Tinkerboard、Intel NUC、Windows/Linux/Mac PC。基于此，不同硬件有不同的安装方法。要了解所有这些安装方法，请访问 [此页面](https://www.home-assistant.io/installation)。

如下所示，有 4 种主要的安装方法，但并非所有安装方法都支持 Home Assistant 的所有功能。

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/2.png" /></div>

## ODYSSEY - X86 的安装方法

根据《Home Assistant》的说明，推荐的两种《Home Assistant》安装方法是 **OS 方法和容器方法**。这里我们将使用 **OS 方法**，因为它可以访问《Home Assistant》的所有功能。

### 为什么不选择《Home Assistant》容器？

如果我们在 ODYSSEY-X86 上安装《Home Assistant》容器，将会错过《Home Assistant》的多个功能。因此，我们将跳过这种安装方法。不过，如果您想探索这种安装方法，可以参考[此指南](https://www.home-assistant.io/installation/generic-x86-64#install-home-assistant-container)。

## 开始构建！

现在让我们来了解如何在 ODYSSEY-X86 上安装《Home Assistant》OS。

在 ODYSSEY-X86 上安装《Home Assistant》OS 有多种方法。最简单的方法是直接将《Home Assistant》OS 镜像写入 USB 闪存驱动器，将 USB 驱动器连接到 ODYSSEY-X86，并从中运行《Home Assistant》。

另一种方法是将《Home Assistant》OS 安装到其他存储设备上，例如外部 HDD、SSD、M.2 SSD 或板载 eMMC（适用于 ODYSSEY-X86 eMMC 版本）。这种方法可以保证比 USB 驱动器更可靠的存储设备。

我们将解释如何通过这两种方法安装《Home Assistant》OS！

### 从 USB 闪存驱动器运行《Home Assistant》

- **步骤 1.** 将 USB 闪存驱动器连接到您的电脑

**注意：** 建议使用至少 16GB 存储容量的闪存驱动器

- **步骤 2.** 根据您的操作系统下载并安装 [Balena Etcher](https://www.balena.io/etcher)

- **步骤 3.** 打开 Balena Etcher 并选择 **Flash from URL**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/20.png" /></div>

- **步骤 4.** 将以下 URL 复制并粘贴到空白框中，然后点击 **OK**

```sh
https://github.com/home-assistant/operating-system/releases/download/9.0/haos_generic-x86-64-9.0.img.xz
```

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/21.png" /></div>

- **步骤 5.** 镜像下载完成后，点击 **Select target** 并选择已连接的 USB 闪存驱动器

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/23.png" /></div>

- **步骤 6.** 点击 **Flash** 开始将镜像写入 USB 闪存驱动器

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/24.png" /></div>

如果写入过程成功，您将看到以下输出

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/25.png" /></div>

- **步骤 7.** 将此 USB 闪存驱动器连接到 ODYSSEY-X86 的一个 USB 端口并启动主板

- **步骤 8.** 持续按下 **DELETE** 键进入 BIOS

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/7.png" /></div>

- **步骤 9.** 进入 **Boot** 选项卡，选择 **Boot Option #1**，然后选择 **UEFI: OS (USB)**，并在弹出窗口中点击 **Yes**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/27.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/10.jpg" /></div>

现在 ODYSSEY-X86 将重新启动并使用连接的 USB 驱动器作为启动设备。在成功引导进入《Home Assistant》OS 后，您将看到以下输出

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/19.png" /></div>

### 从外部 HDD/SSD、M.2 SSD、eMMC 运行《Home Assistant》

在这种方法中，我们将首先创建一个带有 Ubuntu Desktop 的可启动 USB 驱动器，然后从中引导 ODYSSEY-X86。之后，我们将在 Ubuntu 系统中将《Home Assistant》OS 写入一个驱动器（外部 HDD/SSD、M.2 SSD、板载 eMMC），并从该驱动器运行《Home Assistant》。

- **步骤 1.** 从[这里](https://ubuntu.com/download/desktop)下载最新的 Ubuntu Desktop 镜像

- **步骤 2.** 将 USB 闪存驱动器连接到您的电脑

**注意：** 建议使用至少 8GB 存储容量的闪存驱动器

- **步骤 3.** 根据您的操作系统下载并安装 [Balena Etcher](https://www.balena.io/etcher)

- **步骤 4.** 打开 Balena Etcher，选择 **Flash from file**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/2.png" /></div>

- **步骤 5.** 点击下载的 **.iso 文件** 并点击 **Open**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/3.png" /></div>

- **步骤 6.** 点击 **Select target**，选择已连接的 USB 闪存驱动器并点击 **Select**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/4.png" /></div>

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/5.png" /></div>

- **步骤 7.** 点击 **Flash** 将 Ubuntu Server 写入 USB 闪存驱动器

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/6.png" /></div>

如果写入过程成功，您将看到以下输出

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/1.png" /></div>

- **步骤 8.** 将此 USB 闪存驱动器连接到 ODYSSEY-X86 的一个 USB 端口，连接一个存储驱动器（外部 HDD/SSD、M.2 SSD），并启动主板

**注意：** 确保键盘、鼠标和显示器已连接到 ODYSSEY-X86

- **步骤 9.** 持续按下 **DELETE** 键进入 BIOS

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/7.png" /></div>

- **步骤 10.** 进入 **Boot** 选项卡，选择 **Boot Option #1**，然后选择 **UEFI: USB, Partition 2**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/8.jpg" /></div>

- **步骤 11.** 进入 **Save & Exit** 选项卡，点击 **Save Changes and Reset**，然后在弹出的窗口中点击 **Yes**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/9.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/10.jpg" /></div>

现在 ODYSSEY-X86 将重启并使用连接的 USB 驱动器作为启动设备。

- **步骤 12.** 选择 **Try or Install Ubuntu**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/11.jpg" /></div>

- **步骤 13.** 点击 **Try Ubuntu**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/12.jpg" /></div>

几秒钟后，它将启动到 Ubuntu 桌面。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/13.png" /></div>

- **步骤 14.** 按下 **Ctrl+Alt+T** 打开终端窗口。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/14.png" /></div>

- **步骤 15.** 输入以下命令下载 Home Assistant OS 镜像：

```sh
wget https://github.com/home-assistant/operating-system/releases/download/9.0/haos_generic-x86-64-9.0.img.xz
```

- **步骤 16.** 使用以下命令解压文件：

```sh
unxz haos_generic-x86-64-9.0.img.xz
```

这将把上述 **.img.xz** 文件解压为 **.img** 文件。

- **步骤 17.** 输入 **lsblk** 列出连接的存储驱动器。这里我们通过 SATA 接口连接了一个 HDD 驱动器。

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/15.png" /></div>

如图所示，运行 Ubuntu OS 的驱动器（USB 闪存驱动器）是 **sdb**，它有多个分区和挂载点。我们还可以通过 **SIZE** 来识别该驱动器。这意味着驱动器 **sda** 是连接的 HDD 驱动器。

- **步骤 18.** 输入以下命令将 Home Assistant OS 镜像刷写到连接的 HDD 驱动器上。在本例中，驱动器为 **sda**：

```sh
sudo dd if=haos_generic-x86-64-9.0.img of=/dev/sda status=progress
```

等待几分钟，直到该过程完成。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/16.png" /></div>

- **步骤 19.** 输入以下命令重启 ODYSSEY-X86：

```sh
sudo reboot
```

- **步骤 20.** 移除 USB 闪存驱动器，并在看到以下提示时按 **ENTER**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/17.png" /></div>

- **步骤 21.** 按照之前的说明进入 BIOS，并将启动驱动器更改为连接的驱动器。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/18.png" /></div>

现在 ODYSSEY-X86 将重启并使用连接的驱动器作为启动设备。在成功启动到 Home Assistant OS 后，您将看到以下输出：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/19.png" /></div>

## 在网页浏览器中查看 Home Assistant 仪表板界面

- **步骤 1.** 在 PC、平板电脑或智能手机上打开网页浏览器，输入以下 URL：

```sh
homeassistant.local:8123
```

完成初始启动过程需要一些时间。

- **步骤 2.** 启动完成后，创建一个账户并按照初始设置说明进行操作。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" /></div>

之后，您将看到如下的欢迎仪表板：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/15.png" /></div>

## 在 reTerminal 上以 Kiosk 模式查看 Home Assistant 仪表板界面

为了在 [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) 的 LCD 上查看 Home Assistant 仪表板界面，我们将使用 Raspberry Pi OS 中已预装的 Chromium 浏览器。我们将设置 Chromium，使其在 reTerminal 启动后以全屏模式自动启动。

- **步骤 1.** 打开 reTerminal，并确保已安装 Raspberry Pi OS。如果尚未安装，可以参考 [此文档](https://wiki.seeedstudio.com/cn/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)。

- **步骤 2.** 导航到以下目录：

```sh
cd /etc/xdg/lxsession/LXDE-pi/
```

- **步骤 3.** 使用 **nano 文本编辑器** 打开 **autostart** 文件：

```sh
sudo nano autostart
```

- **步骤 4.** 在文件末尾添加以下行：

```sh
@chromium-browser --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 homeassistant.local:8123
```

- **步骤 5.** 重启 reTerminal：

```sh
sudo reboot 
```

现在，当 reTerminal 启动时，Home Assistant 仪表板界面将以全屏窗口打开！

## 额外内容

在集成了智能灯光、温度和湿度传感器、闭路电视等设备后，完整的智能家居仪表板在 Home Assistant 中将如下所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/16.png" /></div>

<video style={{display: 'block', maxWidth: '100%'}} id="video" controls preload="none" poster="https://files.seeedstudio.com/wiki/Home-Assistant/thumb.png">
  <source id="mp4" src="https://files.seeedstudio.com/wiki/Home-Assistant/HA-dashboard.mp4" type="video/mp4" />
</video>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>