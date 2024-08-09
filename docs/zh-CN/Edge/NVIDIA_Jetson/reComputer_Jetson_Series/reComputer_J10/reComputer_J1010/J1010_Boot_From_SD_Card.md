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

我们在开始之前需要阅读这两篇文章。请确保J1010系统已经正确刷机，并且SD卡驱动程序已正确安装。

- [J1010/J101 Flash Jetpack](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/)
- [J101_启用SD卡](https://wiki.seeedstudio.com/J101_Enable_SD_Card/)

## 将系统从J101刷写到SD卡

首先，我们需要克隆脚本，包含我们所需的工具。

```bash
git clone https://github.com/limengdu/bootFromUSB
```

其次，我们需要确保 SD 卡是 ext4 格式，这可以在“磁盘”工具中直观地看到。如果不是 ext4 格式，我们需要对其进行格式化并将其更改为 ext4 格式。

点击蓝色区域，然后点击绿色区域选择“格式化分区”。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_1.jpg" /></div>


点击绿色区域选择“仅供Linux系统使用的内部磁盘（Ext4）”
在黄色区域填写您想要的“卷名称”。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_2.jpg" /></div>

我们发现SD卡的格式已经更改为ext4。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png" /></div>


然后，进入脚本目录，执行以下命令

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

稍等片刻，直到自动完成，如果没有报告错误，烧录就完成了。

## 启动配置

一旦驱动程序成功安装和配置后，我们可以通过"lsblk"命令查看，或在"/dev"目录中查看设备。

### 更改启动设备

我们需要修改 "/boot/extlinux/extlinux.conf" 中的配置。

- 从SD卡启动

    从载板的emmc启动后，我们希望将其修改为从SD卡启动。我们需要确保之前的过程，包括将系统烧录到SD卡，以及SD卡驱动程序已正确安装。修改根目录后的参数为我们正在启动的设备的地址。当我们完成更改后，重新启动系统。

    **重启前修改 "/boot/extlinux/extlinux.conf" After reboot view "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf"**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png" /></div>


    !!!注意
        我们从SD卡启动系统后的配置文件路径是“/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf”，而从板载eMMC启动系统后的配置文件路径是“/boot/extlinux/extlinux.conf”。这两个文件是系统读取配置并选择启动系统的来源，系统启动完成后，相对路径会发生变化。
- 从板载eMMC启动

    我们想在从SD卡启动后或出于某些目的需要更换SD卡后，切换回从emmc启动。因此，我们需要将设备改回优先从emmc启动。我们应该做以下更改。

    **重启前修改 "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" After reboot view "/boot/extlinux/extlinux.conf"**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png" /></div>


最终，我们发现它确实效果不错。

- 从EMMC启动

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png" /></div>

- 从SD卡启动

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png" /></div>


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于提供不同形式的支持，以确保您使用我们的产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
