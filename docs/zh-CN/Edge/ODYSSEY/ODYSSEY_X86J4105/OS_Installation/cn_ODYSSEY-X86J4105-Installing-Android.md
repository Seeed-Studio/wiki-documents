---
description: ODYSSEY - X86J41x5
title: Android-x86 安装指南
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86J4105-Installing-Android
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Installing-Android/
sku: 102110399
--- -->

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/BBC.png" /></div>

本教程演示如何在 ODYSSEY-X86J41x5 上安装 Android-x86，并借助 [Kodi](https://kodi.tv/) 将其用作智能电视盒，以观看直播电视或从本地存储（如 NAS）播放媒体。

Android-x86 是一个将 Android 开源项目移植到 x86 平台的项目，前身为“支持 Android x86 的补丁托管”。有关更多参考，请访问官方 [Android-x86](https://www.android-x86.org/)。

## 硬件需求

- 一台可用的电脑

- 一个 USB 驱动器（建议容量 >= 8GB）

- 一台显示器

- 键盘

## 下载 Android-x86 操作系统镜像

首先，将 [Android-x86 操作系统镜像](https://www.android-x86.org/download.html) 下载到您的驱动器中。它应该是一个 `.iso` 文件。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/download.png" /></div>

在本教程中，使用的是 `android-x86-7.1-r4-k419`。

## 创建可启动 USB

### 第 1 步 - 准备您的可启动 USB

格式化一个 USB 驱动器。如果您是 Windows 用户，可以右键单击 USB 驱动器并选择 `格式化`。

**注意：** 选择 `FAT32` 作为文件系统。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### 第 2 步 - 下载烧录工具

下载开源烧录工具 [balenaEtcher](https://www.balena.io/etcher/)。根据您的操作系统（Windows/macOS/Linux）下载相应版本。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### 第 3 步 - 将操作系统镜像写入 USB

选择下载的操作系统镜像，选择已格式化的 USB 驱动器，然后点击 Flash！现在，可启动 USB 已准备就绪。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## 安装 Android-x86

### 第 1 步 - 在 ODYSSEY - X86J41x5 中启用 CSM 模式

将可启动 USB、显示器和键盘连接到 ODYSSEY - X86J41x5，然后开机。在启动时，持续按下 **`DEL`** 键进入设置界面。导航到 **`Advanced`** -> **`CSM Support`**，按 Enter 键启用它。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### 第 2 步 - 安装操作系统

重新启动 ODYSSEY - X86J41x5，并持续按下 **`F7`** 键进入启动管理器界面。选择可启动 USB（安装程序）并按 Enter 键。

**注意：** 请记得选择包含 Android-x86 iso 镜像的驱动器。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### 第 3 步 - 安装过程

在 **GRUB 选项** 中，选择 `Advanced options`：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/1.png" /></div>

选择 `Android-x86** Auto Install to specific harddisk`：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/2.png" /></div>

进入安装过程，您可以选择将 Android-x86 安装到 ODYSSEY-X86 的哪个位置。本教程将其安装到板载 eMMC 上。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/3.png" /></div>

选择 `Yes` 进行确认：

<div align="center"><img src="https://files.seeedstudio.com/wiki/
ODYSSEY-X86J4105-Installing-Android/4.png" /></div>

现在，安装过程正在进行中，完成后选择 `Reboot`：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/5.png" /></div>

拔出可启动 USB 并重新启动设备。Android-x86 应该会启动。

!!!注意
        如果未正确启动，请按 F7 并选择您安装 Android-x86 的驱动器进行启动。

## 配置

如果一切顺利，您将会进入如下所示的 Android-x86 界面：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/home.png" /></div>

这对于使用过 Android 手机的人来说可能会非常熟悉！

## 设置为智能电视盒

要让 ODYSSEY-X86J41x5 作为智能电视盒工作，我们需要安装 [Kodi](https://kodi.tv/)。

Kodi 是一款免费的开源媒体中心软件，可以运行在从 Android 手机到家用 PC 的各种设备上，以及其他许多设备。当然，它也支持 Android-x86！

### 下载并安装 Kodi for Android-x86

您可以从 [这里下载 Kodi for Android-x86](https://mirrors.kodi.tv/releases/android/x86/)。您可能需要从另一台电脑下载并将 `.apk` 文件保存到 USB 驱动器中，然后从 USB 安装该应用程序。

### Kodi IPTV 设置

打开 **Kodi** 并导航到 **TV** -> **More Add-on**：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/add-on.png" /></div>

选择 **PVR clients**：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/PVR.png" /></div>

选择 **PVR IPTV Simple Client**：

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/iptv.png" /></div>

选择 **configure** 并输入 **IPTV 流媒体 `m3u` URL**。您可以参考此 [`iptv repo`](https://github.com/iptv-org/iptv/blob/master/README.md)。选择 **OK** 并记得 **启用**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/config.png" /></div>

重新启动 Kodi，您应该会看到频道加载完成！现在，您已经将 ODYSSEY-X86 转变为一个智能电视盒了！

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/live.png" /></div>

### 开机启动

如果您希望 ODYSSEY-X86 在启动时直接运行 Kodi，您可以通过从 Google Play 商店安装 `Boot apps` 来轻松实现！

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/boot.png" /></div>

安装该应用程序并选择 Kodi 作为开机启动应用程序！

## 资源

- [Kodi](https://kodi.tv/)

- [如何使用 Kodi – 无限流媒体的完整指南](https://troypoint.com/how-to-use-kodi/)

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