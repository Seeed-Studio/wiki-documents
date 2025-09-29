---
description: ODYSSEY - X86J41x5
title: 原始操作系统
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86J4105-Installing-OS
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Installing-OS/
sku: 102110399
--- -->

本教程演示如何创建可启动的 USB 驱动器并将 Linux 操作系统（Ubuntu Desktop 18.04）安装到 ODYSSEY - X86J41x5 上。

## 硬件需求

- 一台可用的电脑

- 一个 USB 驱动器（建议容量 >= 8GB）

- 一台显示器

- 键盘和鼠标

## 创建可启动的 USB

### 第一步 - 下载操作系统镜像

将所需的操作系统镜像下载到本地驱动器。在本教程中，使用 *Ubuntu Desktop 18.04* 作为示例安装到 ODYSSEY - X86J41x5。

- 你可以从[这里](https://ubuntu.com/download/desktop)下载 Ubuntu 操作系统镜像。

### 第二步 - 准备可启动的 USB

格式化 USB 驱动器。如果你是 Windows 用户，可以右键单击 USB 驱动器并选择 `格式化`。

**注意：** 选择 `FAT32` 作为文件系统。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### 第三步 - 下载烧录工具

下载开源烧录工具 [balenaEtcher](https://www.balena.io/etcher/)。根据你的操作系统（Windows/macOS/Linux）下载相应版本。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### 第四步 - 将操作系统镜像写入 USB

选择下载的操作系统镜像，选择已格式化的 USB 驱动器并点击 Flash！现在，可启动的 USB 已经准备就绪。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## 安装操作系统（Ubuntu）

### 第一步 - 选择可启动的 USB 作为启动设备

将可启动的 USB、显示器和键盘插入 ODYSSEY - X86J41x5，并开机。在启动时，持续按下 **`F7`** 键进入启动管理器界面。使用键盘上的 &#8593; 和 &#8595; 键选择你的可启动 USB。

在本教程中，`UEFI: Mass Storage Device 1.00` 是可启动的 USB。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/bios.png" /></div>

### 第二步 - 安装操作系统

选择 **`Install ubuntu`** 并按 Enter 键。按照屏幕上的安装说明进行操作，例如选择系统语言、用户名、位置等。

**注意：** 有关安装 Ubuntu 的详细步骤，你可以参考[这个视频](https://www.youtube.com/watch?v=vt5Lu_ltPkU)获取更多信息。*安装部分从视频的 3:20 开始。*

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/install.png" /></div>

### 第三步 - 重启并享受新系统

如果一切顺利，Ubuntu 应该已经安装在 ODYSSEY - X86J41x5 上，你可以开始享受你的新操作系统了！

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/result.jpg" /></div>

## 注意事项

- **ODYSSEY - X86J41x5 不支持 Ubuntu 16**

## 技术支持与产品讨论

感谢你选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>