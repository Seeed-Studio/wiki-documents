---
description: 将 JetPack 操作系统闪存到 SD 中（J101）
title: 将 JetPack 操作系统闪存到 SD 中（J101）
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/J101_Enable_SD_Card
last_update:
  date: 01/05/2022
  author: w0x7ce

no_comments: false # for Disqus

---

<!-- # Boot NVIDIA JetPack OS from SD card for J101 Carrier Board -->

# J101 启用 SD 卡

该方法是将英伟达 JetPack 操作系统闪存到 J101 载板上的 SD 卡中，该载板在 reComputer J1010 上运行。 以下是 <a href="https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/" target="_blank"><span>将 JetPack 操作系统闪存到 reComputer J1010 中</span></a> 需要的步骤.

## 驱动程序配置

-开始，我们需要打开 reComputer 电源并进入桌面，如下图所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/S.png" /></div>


### 第一步. 克隆存储库

右键单击并打开终端，然后执行以下命令，代码如下所示：

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
```

### 步骤2. 编译Jetson-sdmmc-overlay。

工作区位置访问：

```bash
cd seeed-linux-dtoverlays
```

对于 J101 载板，我们需要在文件 "overlays\jetsonnano\jetson-sdmmc-overlay.dts" 中更改 "compatible" 值。

```bash
sed -i '17s#JETSON_COMPATIBLE#\"nvidia,p3449-0000-b00+p3448-0002-b00\"\, \"nvidia\,jetson-nano\"\, \"nvidia\,tegra210\"#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
```

<!-- Just like this.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/change.png"/></div> -->

然后编译更改的文件，以确保它们被正确修改。

```bash
make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
```

### 步骤三：确保能识别到SD卡

将SD卡插入**J101载板**，运行以下命令：

```bash
sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
cd /boot/
sudo /opt/nvidia/jetson-io/config-by-hardware.py -l
```

执行完上述命令后，我们应该会得到**类似**的输出（**可能不会完全相同，取决于外围设备和已经安装的驱动程序**），这样就知道SD卡已经被识别：

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

### 步骤四：命名设备并完成驱动程序安装

```bash
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/fix01.png" /></div>


!!! 注意
    完成首次安装后，您可能需要**重启**才能运行 jtop。.

<!-- ## Move system to SD card

First, we need to clone the script include the tools we need.

```bash
git clone https://github.com/limengdu/bootFromUSB
```

Second , We need to make sure the sd card is in ext4 format, which can be seen visually in the "disk" tool, if it is not ext4 we need to format it and change it to ext4 format.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png"/></div>

And then , go to the script directory , execute the following command like this

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

Wait a while, only until it finishes automatically, if no error is reported, the burning is done

## Boot Configuration

Once the driver has been successfully installed and configured,we can simply view it via the command like "lsblk" or view device in "/dev".

### Change boot device

We are supposed to change the configuration in "/boot/extlinux/extlinux.conf".

- Boot from sd card

    After we boot from the emmc on the carrier board, we want to modify it to boot from the SD card. We need to make sure that the previous process, including the system burn to the sd card, and the sd card drivers are installed properly. Modify the parameters after root to the address of the device we are booting from. When we have completed our changes, reboot the system.

    **Before reboot Modify "/boot/extlinux/extlinux.conf" After reboot view "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf"**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png"></div>

    !!!Note
        Our configuration file after booting the system from the sd card is "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" and the configuration file after booting the system from the onboard emmc is in "/boot/extlinux/extlinux.conf" . They are the same files from which the device reads the configuration and chooses where to boot the system after power-up, and the relative paths change when the system has finished booting.

- Boot from board emmc

    We want to change back to booting from emmc after booting from an SD card or we need to change the SD card for some purpose. Then we need to change the device back to boot from emmc first. We should make the following changes.

    **Before reboot Modify "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" After reboot view "/boot/extlinux/extlinux.conf"**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png"></div>

Finally, we find it really works well.

- Boot from emmc

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png"></div>

- Boot from sd card

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png"></div> -->

## 更多

### 更改SD卡的I/O速度

我们在 <a href="https://wiki.seeedstudio.com/install_NVIDIA_software_to_Jetson-101" target="_blank"><span>reComputer J101 载板</span></a>上提供SD卡功能, 支持48MHz的时钟频率。此处设计的时钟是为了获得证书（如CE/FCC）。如果您想自行提高时钟频率，可以参考以下指令。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>


- **步骤 1**. 克隆此存储库并修改以下代码。

    ```bash
    git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
    ```

- **步骤 2**.修改并编译max-clk-limit值

    ```bash
    cd seeed-linux-dtoverlays
    sed -i '10s#48000000#208000000#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
    make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
    sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
    sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
    ```

- **步骤  3**. 重启

    ```bash
    reboot
    ```

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您在使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

