---
description: J101 启用 SD 卡
title: J101 启用 SD 卡
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/J101_Enable_SD_Card
last_update:
  date: 01/05/2022
  author: w0x7ce

no_comments: false # for Disqus

---

<!-- # Boot NVIDIA JetPack OS from SD card for J101 Carrier Board -->

# J101 启用 SD 卡

该方法是将 NVIDIA JetPack 操作系统刷写到 J101 载板上的 SD 卡，该载板运行在 reComputer J1010 上。因此需要先<a href="https://wiki.seeedstudio.com/cn/reComputer_J1010_J101_Flash_Jetpack/" target="_blank"><span>将 JetPack 操作系统刷写到 reComputer J1010</span></a>。

## 驱动配置

首先，我们需要给 reComputer 上电并进入桌面，如下所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/S.png" /></div>

### 步骤 1. 克隆仓库

右键打开终端，然后执行以下命令下载相关代码：

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
```

### 步骤 2. 编译 jetson-sdmmc-overlay

访问工作区位置：

```bash
cd seeed-linux-dtoverlays
```

对于 J101 载板，我们需要在文件 "overlays\jetsonnano\jetson-sdmmc-overlay.dts" 中更改 "compatible" 值。

```bash
sed -i '17s#JETSON_COMPATIBLE#\"nvidia,p3449-0000-b00+p3448-0002-b00\"\, \"nvidia\,jetson-nano\"\, \"nvidia\,tegra210\"#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
```

<!-- 就像这样。

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/change.png"/></div> -->

然后我们编译修改过的文件，以确保它们被正确修改。

```bash
make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
```

### 步骤 3. 确保 SD 卡可以被识别

将 SD 卡插入到 **J101 载板**中。

```bash
sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
cd /boot/
sudo /opt/nvidia/jetson-io/config-by-hardware.py -l
```

执行上述命令后，我们应该得到**类似**（**可能不完全相同。取决于外设和已安装的驱动程序**）以下的输出，我们知道SD卡已被识别：

```txt
    Header 1 [default]: Jetson 40pin Header
    Available hardware modules:
    1. Adafruit SPH0645LM4H
    2. Adafruit UDA1334A
    3. FE-PI Audio V1 and Z V2
    4. MCP251x CAN Controller
    5. ReSpeaker 4 Mic Array
    6. ReSpeaker 4 Mic Linear Array
    7. reComputer sdmmc
    Header 2: Jetson Nano CSI Connector


    Available hardware modules:
    1. Camera IMX219 Dual
    2. Camera IMX477 Dual
    3. Camera IMX477-A and IMX219-B
    Header 3: Jetson M.2 Key E Slot
    No hardware configurations found!
```

### 步骤 4. 为我们的设备命名并完成驱动程序安装

```bash
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/fix01.png" /></div>

!!!Note
    首次完成安装后，您可能需要**重启**才能运行 jtop。

<!-- ## Move system to SD card

首先，我们需要克隆脚本以包含我们需要的工具。

```bash
git clone https://github.com/limengdu/bootFromUSB
```

其次，我们需要确保SD卡是ext4格式，这可以在"磁盘"工具中直观地看到，如果不是ext4格式，我们需要格式化它并将其更改为ext4格式。

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png"/></div>

然后，进入脚本目录，执行以下命令

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

等待一段时间，直到自动完成，如果没有报告错误，则烧录完成

## 启动配置

一旦驱动程序成功安装和配置，我们可以通过"lsblk"等命令简单查看，或在"/dev"中查看设备。

### 更改启动设备

我们需要在"/boot/extlinux/extlinux.conf"中更改配置。

- 从SD卡启动

    在我们从载板上的emmc启动后，我们想要修改为从SD卡启动。我们需要确保之前的过程，包括系统烧录到SD卡，以及SD卡驱动程序都正确安装。修改root后面的参数为我们要启动的设备地址。当我们完成更改后，重启系统。

    **重启前修改"/boot/extlinux/extlinux.conf" 重启后查看"/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf"**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png"></div>

    !!!Note
        从SD卡启动系统后，我们的配置文件在"/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf"，从板载emmc启动系统后的配置文件在"/boot/extlinux/extlinux.conf"。它们是设备读取配置并在开机后选择从哪里启动系统的同一个文件，当系统完成启动后相对路径会发生变化。

- 从板载emmc启动

    我们想要在从SD卡启动后改回从emmc启动，或者我们因为某些目的需要更换SD卡。那么我们需要首先将设备改回从emmc启动。我们应该进行以下更改。

    **重启前修改"/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" 重启后查看"/boot/extlinux/extlinux.conf"**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png"></div>

最后，我们发现它确实工作得很好。

- 从emmc启动

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png"></div>

- 从SD卡启动

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png"></div> -->

## 更多

### 更改SD卡I/O速度

我们在<a href="https://wiki.seeedstudio.com/cn/install_NVIDIA_software_to_Jetson-101" target="_blank"><span>reComputer J101载板</span></a>上提供SD卡功能，支持CLK频率48MHz。这里的CLK设计是为了获得认证（如CE/FCC）。如果您想自己提高CLK，可以使用下面的说明。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

- **步骤1**. 克隆此仓库并修改下面的代码。

    ```bash
    git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
    ```

- **步骤2**. 修改并编译max-clk-limit值

    ```bash
    cd seeed-linux-dtoverlays
    sed -i '10s#48000000#208000000#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
    make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
    sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
    sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
    ```

- **步骤3**. 重启

    ```bash
    reboot
    ```

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
