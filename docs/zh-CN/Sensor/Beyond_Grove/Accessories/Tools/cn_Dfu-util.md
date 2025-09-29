---
title: Dfu-util
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Dfu-util/
slug: /cn/Dfu-util
last_update:
  date: 02/03/2022
  author: gunengyu
---

## 使用 dfu-util 更新固件

您需要 dfu-util 0.5 或更高版本才能将 dfu 文件下载到 [DSO Nano](/cn/DSO_Nano "DSO Nano")。
较旧版本的 dfu-util 将无法正常工作。DSO Nano 和许多其他基于 ST Micro 微控制器的设备使用 ST Micro 自己的 DFU 扩展 (DfuSe)，这些扩展与 DFU 标准不兼容。

您可以在 [Tormod 的 PPA](https://launchpad.net/~tormodvolden/+archive/ppa/+packages?field.series_filter=lucid) 中找到适用于 Ubuntu 10.04 的 dfu-util 0.8 包。只需下载并安装正确的 .deb 包即可。该包在任何后续版本的 Ubuntu 或 Debian 不稳定版中也应该可以正常安装。对于其他操作系统，您可能需要按照 dfu-util 官方主页上的说明自行构建 dfu-util。

要将 .dfu 固件文件从您的计算机下载到 Nano，请运行以下命令：

```
dfu-util -a 0 -D your-firmware-file.dfu
```

您可能需要重复运行几次直到成功。如果出现“权限被拒绝”错误，请在命令行前加上 "sudo"。
不要忘记对所有需要的固件文件（APP 和 LIB）重复运行该命令。

## 将非 DfuSe 文件下载到 DfuSe 设备（高级）

标准 DFU 设备将接受来自计算机的原始二进制文件，并将其加载到闪存中的正确位置。
另一方面，对于 DfuSe，地址由 .dfu 文件指定，计算机必须告诉设备将其加载到哪里。

因此，要将原始二进制文件下载到 DfuSe 设备，您需要知道目标地址。

例如，要下载原始二进制文件（如果您正在开发）：

```
dfu-util -a 0 --dfuse-address 0x08004000 -D your-lib.bin
dfu-util -a 0 --dfuse-address 0x0800C000 -D your-app.bin
```

## 如何从源码构建 dfu-util

请参阅 dfu-util 官方主页上的[构建说明](http://dfu-util.sourceforge.net/build.html)。

## 链接

原始论坛帖子和讨论：

* [Linux 操作步骤](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1353&amp;start=10)

* [Mac OS X 特定说明](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1364)

官方主页：

* [dfu-util 官方主页](http://dfu-util.sourceforge.net/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>