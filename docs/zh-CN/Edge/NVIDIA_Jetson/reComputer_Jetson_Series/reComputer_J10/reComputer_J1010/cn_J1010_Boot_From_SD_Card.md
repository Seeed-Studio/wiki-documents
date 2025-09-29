---
description: J1010 从 SD 卡启动
title: J1010 从 SD 卡启动
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/J1010_Boot_From_SD_Card
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# J1010 从 SD 卡启动

## 入门指南

在开始之前，我们需要阅读以下两篇文章。确保 J1010 系统正确烧录，并且 SD 卡驱动程序已正确安装。

- [J1010/J101 刷写 Jetpack](https://wiki.seeedstudio.com/cn/reComputer_J1010_J101_Flash_Jetpack/)
- [J101_启用_SD_卡](https://wiki.seeedstudio.com/cn/J101_Enable_SD_Card/)

## 从 J101 将系统刷写到 SD 卡

首先，我们需要克隆包含所需工具的脚本。

```bash
git clone https://github.com/limengdu/bootFromUSB
```

其次，我们需要确保 SD 卡是 ext4 格式，这可以在"磁盘"工具中直观地看到，如果不是 ext4 格式，我们需要格式化它并将其更改为 ext4 格式。

点击蓝色区域，然后点击绿色区域选择"格式化分区"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_1.jpg" /></div>


点击绿色区域选择"仅用于 Linux 系统的内部磁盘 (Ext4)"
在黄色区域的"卷名称"中填写您想要的名称。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_2.jpg" /></div>

这样我们可以发现 SD 卡的格式已经更改为 ext4。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png" /></div>


然后，进入脚本目录，执行以下命令

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

等待一段时间，直到它自动完成，如果没有报告错误，烧录就完成了

## 启动配置

一旦驱动程序成功安装和配置，我们可以通过"lsblk"命令简单地查看它，或者在"/dev"中查看设备。

### 更改启动设备

我们应该更改"/boot/extlinux/extlinux.conf"中的配置。

- 从 SD 卡启动

    在我们从载板上的 emmc 启动后，我们想要修改它从 SD 卡启动。我们需要确保之前的过程，包括系统烧录到 SD 卡，以及 SD 卡驱动程序都正确安装。将 root 后面的参数修改为我们要启动的设备地址。当我们完成更改后，重启系统。

    **重启前修改"/boot/extlinux/extlinux.conf" 重启后查看"/media/seeed/\{xxx-xxx\}/boot/extlinux/extlinux.conf"**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png" /></div>

    :::note
    从 SD 卡启动系统后，我们的配置文件是"/media/seeed/\{xxx-xxx\}/boot/extlinux/extlinux.conf"，从板载 emmc 启动系统后的配置文件在"/boot/extlinux/extlinux.conf"。它们是设备读取配置并在开机后选择从哪里启动系统的相同文件，当系统完成启动后相对路径会发生变化。
    :::

- 从板载 emmc 启动

    在从 SD 卡启动后，我们想要改回从 emmc 启动，或者由于某种目的我们需要更换 SD 卡。然后我们需要首先将设备更改为从 emmc 启动。我们应该进行以下更改。

    **重启前修改"/media/seeed/\{xxx-xxx\}/boot/extlinux/extlinux.conf" 重启后查看"/boot/extlinux/extlinux.conf"**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png" /></div>


最后，我们发现它确实工作得很好。

- 从 emmc 启动

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png" /></div>

- 从 SD 卡启动

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png" /></div>


## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>