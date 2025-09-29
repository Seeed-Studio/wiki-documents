---
description: ODYSSEY - X86J41x5
title: pfSense 安装指南

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86J4105-pfSense
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Installing-pfSense/
sku: 102110399
--- -->

本教程演示了如何将 **[pfSense](https://www.pfsense.org/)** 安装到 [ODYSSEY-X86J41x5](https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html) 上。

**[pfSense](https://www.pfsense.org/)** 是基于 [FreeBSD](https://www.freebsd.org/) 的开源防火墙/路由器计算机软件发行版。它可以安装在物理计算机或虚拟机上，用于为网络创建专用的防火墙/路由器。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-04-n.png" /></div>

更多信息，请访问官方 [pfSense 文档](https://docs.netgate.com/pfsense/en/latest/) 以获取更多见解！

## 硬件要求

- 一台可用的计算机

- 2 个 USB 驱动器（建议小于 8GB）

- 一台显示器

- 键盘

- 网络连接和以太网线

## 下载 pfSense 操作系统镜像

首先，将 [pfSense 操作系统镜像](https://www.pfsense.org/download/) 下载到您的驱动器中。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/Download.png" /></div>

对于 ODYSSEY-X86J41x5，选择如上所示的设置并点击下载。

## 创建可启动 USB

### 第 1 步 - 准备您的可启动 USB

格式化其中一个 USB 驱动器。如果您是 Windows 用户，可以通过右键单击 USB 驱动器并选择 `格式化` 来格式化 USB 驱动器。

**注意：** 选择 `FAT32` 作为文件系统。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### 第 2 步 - 下载 Flash 烧录工具

下载开源 Flash 烧录工具 [balenaEtcher](https://www.balena.io/etcher/)。根据您的操作系统（Windows/macOS/Linux）下载相应版本。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### 第 3 步 - 将操作系统镜像写入 USB

选择下载的操作系统镜像，选择格式化后的 USB 驱动器并点击 Flash！现在，可启动 USB 已准备就绪。

<div>
  <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div><br />
</div>

**注意：** 如果出现警告提示“它不包含分区表”，您可以简单地点击 **继续** 忽略该消息。

## 安装 pfSense 操作系统

### 第 1 步 - 在 ODYSSEY - X86J41x5 上启用 CSM 模式

将您的可启动 USB、显示器和键盘连接到 ODYSSEY - X86J41x5，并启动设备。启动时，持续按下 **`DEL`** 键进入设置界面。导航到 **`Advanced`** -> **`CSM Support`** 并按 Enter 键启用它。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### 第 2 步 - 安装操作系统

重新启动 ODYSSEY - X86J41x5，并持续按下 **`F7`** 键进入启动管理器界面。选择可启动 USB（安装程序）并按 Enter 键。

**注意：** 请记住选择包含 pfSense ISO 镜像的那个选项。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### 第 3 步 - 安装过程

如上图所示的启动屏幕将出现。按 `Enter` 键选择 Boot Multi User（pfSense 安装程序）。

<div>
  <div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSenseBIOS.png" /></div><br />
</div>

进入安装程序后，按 `Enter` 键 **接受**。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-1.png" /></div>

如下所示的选项菜单将出现，选择 **Install** 并按 `Enter` 键。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-2.png" /></div>

现在，选择适合您键盘的键位映射，或者直接选择 **Continue with default keymap** 并按 `Enter` 键。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-3.png" /></div>

此时，您可以选择自动安装 pfSense 到 ODYSSEY-X86J41x5，但最好选择 **Manual** 手动选择安装位置。

**注意：** 本教程中，pfSense 安装在 USB 驱动器上以方便操作。因此，选择 **Manual** 而不是 Auto 是另一个好理由。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-4.png" /></div>

在这里，您可以看到所有硬盘驱动器以及分区。选择您想要安装 pfSense 的硬盘驱动器。使用箭头键选择硬盘驱动器。这里，`da1` 是我的第二个 USB 驱动器，将用于安装 pfSense。在此选择 **Auto** 以自动为 pfSense 在此硬盘驱动器上分区。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-5.png" /></div>

在正确的硬盘驱动器下，选择 **OK**。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-6.png" /></div>

现在，安装过程将开始。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-7.png" /></div>

安装完成后，将出现以下窗口，选择 **No**。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-8.png" /></div>

选择 **重启**，pfSense 已成功安装！

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-9.png" /></div>

## pfSense 配置

重启 ODYSSEY-X86J41x5，并选择正确的硬盘启动 pfSense 操作系统。将以太网线插入 ODYSSEY-X86J41x5 的其中一个以太网端口。pfSense 应该能够正常启动，并显示以下屏幕。

**注意：** 如果您看到 LAN 已经配置好，可以选择 **`1`** 来分配接口，并选择正确的端口作为 **WAN**，同时移除 **LAN**。例如，在下图中，LAN 暂时被移除。

除了 **WAN**，您应该会看到设备分配了一个 IP 地址，这个 IP 地址将在后续使用。现在，您可以尝试使用同一网络中的另一台电脑登录 Web GUI！

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-config-1.png" /></div>

### 更改 pfSense WebGUI 协议（可选）

由于某些原因，pfSense 使用 https 协议作为 Web GUI，这可能会导致登录 Web GUI 失败。如果您无法登录 Web GUI，请按照以下步骤将 `https` 协议更改为 `http` 协议。

选择 **`8`** 进入 pfSense 的 shell。输入以下命令进行配置：

```sh
viconfig
```

将会出现一个配置文件，如下所示，找到 `<webgui>` 部分并将 `https` 协议更改为 `http`。

**注意：** 这是使用 vim 编辑器，使用键盘上的 **x** 键删除内容。然后按 **Esc** 键并输入 `:wq!` 保存并退出。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-config-2.png" /></div>

现在，尝试使用 IP 地址再次登录 pfSense Web GUI。

## pfSense Web GUI 配置

现在，您可以使用之前显示的 IP 地址从另一台电脑登录 pfSense Web GUI。

**注意：** 默认登录用户名为 **`admin`**，默认密码为 **`pfsense`**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/WebGUI.png" /></div>

现在，您可以轻松管理运行在 ODYSSEY-X86J41x5 上的 pfSense！

### 安装软件包

要安装软件包，您可以简单地导航到 **System** -> **Package manager**，然后搜索您需要的软件包！

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/packages.png" /></div><br />
</div>

*有关 pfSense 的更多信息，请访问官方 [pfSense 论坛](https://forum.netgate.com/)!*

## 资源

其他有用的应用：

- [pfSense 入门指南](https://www.pfsense.org/getting-started/)

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