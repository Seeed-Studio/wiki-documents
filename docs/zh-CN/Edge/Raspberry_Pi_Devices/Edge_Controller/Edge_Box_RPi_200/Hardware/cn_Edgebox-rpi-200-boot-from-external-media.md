---
description: EdgeBox RPi 200 从外部媒体启动
title: EdgeBox RPi 200 从外部媒体启动
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/EdgeBox-RPi-200-boot-from-external-media
last_update:
  date: 6/14/2023
  author: Peter Pan
---


## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPi-200 系列是基于树莓派的一体化工业边缘计算控制器，结合了多种工业用途。设计为高可扩展性和坚固的工业硬件，配备丰富的 IO 资源，并由强大的树莓派工业软件生态系统支持，是智能自动化和工业物联网(IIoT)解决方案的理想选择。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

:::tip在您继续之前：
由于我们已经更新了 2023 年 3 月 30 日之后发布批次的树莓派计算模块 4 的 EEPROM，启动顺序已更改为 `NVME > USB-MSD > BCM-USB-MSD > SD CARD/eMMC > NETWORK > RESTART`，更多信息请访问[更新计算模块 4 的 EEPROM](/cn/Raspberry_pi_CM4_update_eeprom/) 页面。

**如果您在 2023 年 3 月 30 日之前购买了 Edgebox-RPI-200，并且您想按照指南更新 EEPROM 或在 Edgebox-RPI-200 上刷写操作系统，您将需要一个最小开发板，该开发板包含为树莓派 CM4 选择启动模式的功能，[双千兆以太网网卡载板](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)非常适合此用途。**

因此，本指南仅适用于 `2023 年 3 月 30 日之后发布的 EdgeBox-RPi-200`，您可以从`产品标签贴纸`的 `S/N 编号`中找到此信息，下图中突出显示的数字 `2312` 表示 `23` 是`生产年份 2023`，`12` 是 2023 年的`生产周 12`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/label.jpg" alt="pir" width="500" height="auto" /></div>
:::

## 先决条件

- 1 台 PC 主机（Ubuntu 操作系统）
- 1 台 [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)
- 1 个存储设备：
  - 选项 1：1 个 USB 存储驱动器（16GB 或以上）
  - 选项 2：1 个 **M.2 NVMe 驱动器**

:::danger
以下步骤将清除您的存储设备，因此请小心您尝试使用的存储设备，并确保它可以被格式化。
:::

### 设置您的可启动设备

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB Storage" label="USB 存储">

#### 使用 EdgeBox-RPI-200 出厂默认操作系统设置可启动 USB 设备

:::note
我们已经备份了原始操作系统镜像并在 Sourceforge 上发布了文件，您可以访问[此页面](https://sourceforge.net/projects/edgebox-rpi-200/files/edgeboxrpi200.img/download)来获取镜像文件。
:::

请按照[此处的步骤](https://wiki.seeedstudio.com/cn/Raspberry_Pi_3_Model_B/)了解如何使用[树莓派官方镜像工具](https://www.raspberrypi.com/software/)设置可启动的 Raspbian 操作系统设备

#### 从 USB 启动

在为 EdgeBox-RPI-200 插入电源之前，您应该插入从上述步骤准备的 USB 存储设备。

然后插入电源并等待设备启动。

现在您的 EdgeBox-RPI-200 应该已经从 USB 存储启动了。

##### 检查启动媒体

您可以使用 `lsblk` 命令检查 EdgeBox-RPI-200 从哪个媒体启动。

您应该看到如下所示的输出：

```sh
pi@raspberrypi:~ lsblk
NAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda            8:0    1  7.2G  0 disk 
|-sda1         8:1    1  256M  0 part /boot
`-sda2         8:2    1    7G  0 part /
mmcblk0      179:0    0 14.6G  0 disk 
|-mmcblk0p1  179:1    0  256M  0 part 
`-mmcblk0p2  179:2    0 14.3G  0 part 
mmcblk0boot0 179:32   0    4M  1 disk 
mmcblk0boot1 179:64   0    4M  1 disk 
```

:::note
如果你看到以下输出，这很可能是首次启动时的情况：

```sh
pi@raspberrypi:~ $ lsblk
NAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda            8:0    1  7.2G  0 disk 
|-sda1         8:1    1  256M  0 part /boot
`-sda2         8:2    1  4.6G  0 part 
mmcblk0      179:0    0 14.6G  0 disk 
|-mmcblk0p1  179:1    0  256M  0 part 
`-mmcblk0p2  179:2    0 14.3G  0 part /
mmcblk0boot0 179:32   0    4M  1 disk 
mmcblk0boot1 179:64   0    4M  1 disk 
```

您需要修改 `/boot/cmdline.txt` 中的 `root=` 参数，使其指向正确的存储设备来挂载根目录为 `root=/dev/sda2`，因此您的 `/boot/cmdline.txt` 应该如下所示：

```sh
console=serial0,115200 console=tty1 root=/dev/sda2 rootfstype=ext4 elevator=deadline 
fsck.repair=yes rootwait quiet splash plymouth.ignore-serial-consoles
```

然后重启。
:::

</TabItem>
<TabItem value="NVMe Drive" label="NVMe Drive">

#### 安装 NVMe 驱动器

请将 NVMe 驱动器安装到 M.2 插槽中

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/install-nvme.jpg" alt="pir" width="500" height="auto" /></div>

#### 创建可启动的 NVMe 驱动器

:::note
确保 NVMe 驱动器已格式化且不包含任何可启动分区
:::

请插入电源并等待设备启动。

然后请使用 SSH 访问 EdgeBox-RPI-200，这里是[指南](/cn/reterminal-dm-flash-OS/#access-reterminal-dm-via-ssh)。

一旦获得 SSH 访问权限，您可以按照以下步骤操作：

**步骤 1：** 检查 NVMe 驱动器是否正确加载

请输入 `lsblk` 命令。您应该看到以下输出，其中 `nvme0n1` 是 NVMe 驱动器的设备名称。

```sh
pi@raspberrypi:~ $ lsblk
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0      179:0    0  14.6G  0 disk 
|-mmcblk0p1  179:1    0   256M  0 part /boot
`-mmcblk0p2  179:2    0  14.3G  0 part /
mmcblk0boot0 179:32   0     4M  1 disk 
mmcblk0boot1 179:64   0     4M  1 disk 
nvme0n1      259:0    0 119.2G  0 disk 
|-nvme0n1p1  259:1    0   200M  0 part 
`-nvme0n1p2  259:2    0   119G  0 part 
```

**步骤 2:** 下载 EdgeBox-RPI-200 图像文件

请输入以下命令来下载图片文件：

```sh
wget https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img -O edgeboxrpi200.img
```

你应该会看到类似这样的下载进度：

```sh
pi@raspberrypi:~/Downloads $ wget https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img -O edgeboxrpi200.img
--2023-06-27 16:34:07--  https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img
Resolving altushost-swe.dl.sourceforge.net (altushost-swe.dl.sourceforge.net)... 79.142.76.130
Connecting to altushost-swe.dl.sourceforge.net (altushost-swe.dl.sourceforge.net)|79.142.76.130|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 5230625280 (4.9G) [application/octet-stream]
Saving to: 'edgeboxrpi200.img'

edgeboxrpi200.img                     3%[=>                                                                 ] 151.13M  14.2MB/s    eta 6m 4s
```

**步骤 3：** 使用 `DD` 工具将操作系统镜像刷写到 NVMe 驱动器

请输入以下命令，其中 `if` 作为输入文件应该是镜像文件名 `edgeboxrpi200.img`，`of` 作为 NVMe 驱动器名称 `/dev/nvme0n1`

```sh
sudo dd if=edgeboxrpi200.img of=/dev/nvme0n1 bs=4MB status=progress oflag=sync
```

**步骤 4：** 重启

请输入以下命令：

```sh
sudo reboot
```

##### 检查启动介质

现在您的 EdgeBox-RPI-200 应该已经从 NVMe 存储设备启动了。

您可以使用 `lsblk` 命令检查 EdgeBox-RPI-200 从哪个介质启动。

其中启动目录 `/boot` 挂载在 `nvme0n1p1` 分区上，根目录 `/` 挂载在 `nvme0n1p2` 分区上。

```sh
pi@raspberrypi:~ $ lsblk   
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0      179:0    0  14.6G  0 disk 
|-mmcblk0p1  179:1    0   256M  0 part 
`-mmcblk0p2  179:2    0  14.3G  0 part 
mmcblk0boot0 179:32   0     4M  1 disk 
mmcblk0boot1 179:64   0     4M  1 disk 
nvme0n1      259:0    0 119.2G  0 disk 
|-nvme0n1p1  259:1    0   256M  0 part /boot
`-nvme0n1p2  259:2    0   119G  0 part /
```

</TabItem>
</Tabs>

<!-- Code END -->

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
