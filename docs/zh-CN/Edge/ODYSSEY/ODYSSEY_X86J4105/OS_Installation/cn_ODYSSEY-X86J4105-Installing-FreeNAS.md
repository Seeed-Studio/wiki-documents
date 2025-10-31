---
description: ODYSSEY - X86J41x5
title: FreeNAS 安装
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86J4105-Installing-FreeNAS
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Installing-FreeNAS/
sku: 102110399
--- -->

本教程演示如何安装开源存储操作系统。[FreeNAS](https://www.freenas.org/) 是一种操作系统，可以安装在几乎任何硬件平台上，通过网络共享数据。在 ODYSSEY - X86J41x5 上安装 FreeNAS 后，您就拥有了一个个人云盘！

## 硬件要求

- 一台可用的电脑

- USB 驱动器 x 2（建议容量 >= 8GB）

- 一台显示器

- 键盘

## 下载 FreeNAS 操作系统镜像

首先，将 [FreeNAS 操作系统镜像](https://www.freenas.org/download-freenas-release/) 下载到您的驱动器中。它应该是一个 `.iso` 文件。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-download.jpg)

在本教程中，使用的是 FreeNAS 11.3。FreeNAS 需要安装在一个不同的驱动器上。您可以将 FreeNAS 安装在 HDD 或 SSD 硬盘上。

**注意：** 本教程中，为了方便起见，FreeNAS 操作系统安装在 USB 驱动器上。

## 创建可启动 USB

### 第 1 步 - 准备您的可启动 USB

格式化其中一个 USB 驱动器。如果您是 Windows 用户，可以通过右键单击 USB 驱动器并选择 `格式化` 来格式化 USB 驱动器。

**注意：** 文件系统请选择 `FAT32`。

<div align="center"><img width="{450}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### 第 2 步 - 下载 Flash 烧录工具

下载开源 Flash 烧录工具 [balenaEtcher](https://www.balena.io/etcher/)。根据您的操作系统（Windows/macOS/Linux）下载相应版本。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### 第 3 步 - 将操作系统镜像写入 USB

选择下载的操作系统镜像，选择格式化后的 USB 驱动器并点击 Flash！现在，可启动 USB 已准备就绪。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## 安装 FreeNAS 操作系统

### 第 1 步 - 在 ODYSSEY - X86J41x5 上启用 CSM 模式

将您的可启动 USB、显示器和键盘连接到 ODYSSEY - X86J41x5，并启动设备。启动时，持续按下 **`DEL`** 键进入设置界面。导航到 **`Advanced`** -> **`CSM Support`** 并按 Enter 键启用它。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### 第 2 步 - 安装操作系统

重新启动 ODYSSEY - X86J41x5，并持续按下 **`F7`** 键进入启动管理器界面。选择可启动 USB（安装程序）并按 Enter 键。

**注意：** 请记住选择包含 FreeNAS iso 镜像的那个。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### 第 3 步 - 安装过程

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-boot.jpg)

如上图所示的启动屏幕应该会出现。按 `Enter` 键选择 Boot FreeNAS Installer。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-option.jpg)

进入安装程序后，会出现如下选项菜单，选择 **Install/Select** 并按 `Enter` 键。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-drive.jpg)

选择一个驱动器来安装 FreeNAS 镜像。在这里，我们应该能够看到另一个 USB 驱动器。

**注意：** 使用 `空格键` 选择 USB 驱动器。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-warning.jpg)

会出现一个警告，提示所选驱动器上的所有内容将被清除，只需按 Yes。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-pw.jpg" /></div>

创建您的 root 密码，以便稍后通过 Web 界面登录 FreeNAS。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-complete.jpg)

安装过程将开始，等待安装完成。当安装完成时，应该如上图所示。

安装过程全部完成后，您可以重新启动 ODYSSEY - X86J41x5 并拔下可启动 USB（安装程序）。

插入以太网电缆以连接互联网，并可以通过 Web 界面访问。

## 配置

重启 ODYSSEY - X86J41x5 并再次按下 `F7` 进入启动管理器界面，选择刚刚安装了 FreeNAS 的 USB 驱动器。

**注意：** 也可以通过按下 `DEL` 键进入设置界面，将 USB 驱动器设置为第一个启动选项。

成功启动进入 FreeNAS 后，您应该会看到 Web 界面地址：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-bootcomplete.jpg" /></div>

**注意：** 如果显示无法访问 Web 界面，请检查您的网络连接。

使用另一台连接到相同网络的电脑（例如您的笔记本电脑），在浏览器中输入该地址：

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-web1.jpg)

用户名为 `root`，密码是您在安装过程中设置的密码。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-web2.jpg)

如果您能看到此界面，那么您已经成功安装了 FreeNAS，可以随意为 ODYSSEY - X86J41x5 添加更多存储，并享受个人云盘的乐趣！

*如需进一步开发，您可以访问 [FreeNAS 官方论坛](https://www.ixsystems.com/community/?__hstc=54333623.367bb0a280861850367fe7c0081ee5de.1582628751612.1582693495900.1582699340011.3&__hssc=54333623.1.1582699340011&__hsfp=3609375136) 了解更多插件和功能。*

## 亚克力外壳

我们还设计了一款亚克力外壳，用于将您的 NAS 构建到一个封闭的机箱中！根据硬盘的尺寸，这里提供了两种版本的外壳：

1. 适用于 [**2.5 英寸 SATA HDD**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/J4105-2.5.dwg) 硬盘。

2. 适用于 [**3.5 英寸 SATA HDD**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/J4105-3.5.dwg) 硬盘。

**所需材料：**

- 3mm 亚克力板

- M3 x 20mm 六角母-母螺柱 x 4

- M3 x 40mm 六角母-母螺柱 x 4（或使用 M3 x 20mm 叠加至 40mm）

- M3 螺丝

## 资源

- Explaining Computers 关于在 Odyssey-X86 上运行 FreeNAS 的视频：

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/qyz91Q_JrBc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

其他有用的应用：

- [FreeNAS 11 入门指南：安装、配置、设置用户、设置共享及快照工作原理](https://www.youtube.com/watch?v=sMZ-s8wHkHw&list=PLMeX7dgR89SvzGW0eumZuP_LAeBGEDnBb&index=11)

- [如何使用 FreeNAS 设置家庭文件服务器](https://www.windowscentral.com/how-to-set-up-freenas-home-file-server)

- [将 FreeNAS 和 TrueNAS 备份到 Backblaze B2](https://www.backblaze.com/blog/how-to-setup-freenas-cloud-storage/)

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