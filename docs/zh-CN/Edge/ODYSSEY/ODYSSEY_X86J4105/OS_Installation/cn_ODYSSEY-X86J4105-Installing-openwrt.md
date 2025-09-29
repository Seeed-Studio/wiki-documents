---
description: ODYSSEY - X86J41x5
title: OpenWRT 安装指南
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86J4105-Installing-openwrt
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Installing-openwrt/
sku: 102110399
--- -->

本教程演示了如何安装用于路由器网络的开源操作系统。借助 OpenWrt，您的 ODYSSEY - X86J41x5 可以变成一台路由器，管理您的家庭网络！

## 硬件需求

- 一台可用的电脑

- 一个 USB 驱动器（建议容量≥8GB）

- 一台显示器

- 键盘和鼠标

- 两根以太网线

## 下载 OpenWrt 操作系统镜像

首先，下载 [OpenWrt](https://downloads.openwrt.org/releases/) 操作系统镜像。选择您需要的版本，导航到 `x86` -> `64` 并下载所需版本。

在本教程中，使用的是 19.07 版本，点击[这里](https://downloads.openwrt.org/releases/19.07.0/targets/x86/64/openwrt-19.07.0-x86-64-combined-ext4.img.gz)下载。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/Openwrt.jpg" /></div>

## 创建可启动的 USB

### 第一步 - 准备您的可启动 USB

格式化 USB 驱动器。如果您是 Windows 用户，可以右键点击 USB 驱动器并选择 `格式化`。

**注意：** 选择 `FAT32` 作为文件系统。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### 第二步 - 下载烧录工具

下载开源烧录工具 [balenaEtcher](https://www.balena.io/etcher/)。根据您的操作系统（Windows/macOS/Linux）下载相应版本。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### 第三步 - 将操作系统镜像写入 USB

选择下载的操作系统镜像，选择已格式化的 USB 驱动器并点击 Flash！现在，可启动的 USB 已经准备就绪。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## 安装 OpenWrt

### 第一步 - 在 ODYSSEY - X86J41x5 上启用 CSM 模式

将可启动 USB、显示器和键盘连接到 ODYSSEY - X86J41x5，然后开机。在启动时，持续按下 **`DEL`** 键进入设置界面。导航到 **`Advanced`** -> **`CSM Support`** 并按 Enter 键启用它。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### 第二步 - 安装操作系统

重启 ODYSSEY - X86J41x5 并持续按下 **`F7`** 键进入启动管理器界面。选择可启动 USB 并按 Enter 键。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### 第三步 - 安装过程

选择 **`OpenWrt`** 并按 Enter 键。按照屏幕上的安装说明进行操作。
<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/installingOpenwrt.jpg" /></div>

安装完成后，按 Enter 键，您应该会看到如下屏幕：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/OpenWrtShell.jpg" /></div>

现在，您的 OpenWrt 已安装完成，可以使用了！

## 配置

现在，让我们配置从另一台电脑通过网页界面访问 OpenWrt 系统。在 OpenWrt 的 shell 中输入以下命令：

```sh
vi /etc/config/network
```

并将设置更改如下：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/settings.jpg" /></div>

在这里更改 LAN 配置的站点 IP 地址，以便您可以使用此 IP 地址访问路由器。这里将 IP 地址更改为 `192.168.10.1`。

**注意：** 在 vim 中，首先输入 **`i`** 进入插入模式以便编辑。编辑完成后，按 **`ESC`** 键并输入 **`:wq`** 然后回车以保存并退出。

## 从另一台电脑访问

现在，您可以通过 LuCI 网页界面从另一台电脑访问 OpenWrt。只需**使用一根以太网线连接靠近 HDMI 接口的以太网端口**。将另一根以太网线连接到 ODYSSEY - X86J41x5 的另一个以太网端口并接入互联网（这可能因方法不同，例如 PPPoE 方法）。

现在，在您的电脑上，在浏览器中输入 `192.168.10.1`（之前指定的 IP 地址），您应该会看到以下界面：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/ipAddress.jpg" /></div>

现在，您可以从另一台电脑访问您的 OpenWrt！

## 配置 LAN 和 WAN

导航到 **`Network`** -> **`Interfaces`** 并配置 WAN 设置以访问互联网：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/interface.jpg" /></div>

这显示了 OpenWrt 的所有接口设置。在这里，只需确保 **WAN(eth1) 端口**已连接到互联网，并设置为 **DHCP 客户端协议**，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/interface2.jpg" /></div>

现在，您的电脑应该可以访问互联网，您的路由器也已准备就绪！

*对于进一步的开发，您可以开始下载和部署各种应用程序，例如广告拦截、端口镜像等！更多信息，请访问 [OpenWrt](https://openwrt.org/)。*

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>