---
description: A603 载板
title: A603 载板
keywords:
  - Edge
  - Jetson Orin
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_A603_Flash_System
sku: 102110840
last_update:
  date: 04/19/2023
  author: Lakshantha
---

# 将 JetPack 操作系统刷写到 A603 载板

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/A603_Carrier_Board.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A603-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5635.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

A603 载板是一款功能强大的扩展板，支持 Jetson Orin™ NX/Nano 模块。它具有 1 GbE 端口、用于 SSD 的 M.2 Key M、用于 WiFi/蓝牙的 M.2 Key E、CSI 和 HDMI，可实现高质量的视频捕获和显示。它还包含 4 个 USB 端口、风扇、RTC、灵活的 9-20V 电源供应。通过紧凑的设计，它可以灵活且轻松地集成到各种边缘计算应用中。在本教程中，我们将向您展示如何将 [Jetpack](https://developer.nvidia.com/embedded/jetpack) 刷写到连接到 A603 载板的 NVMe SSD 和 USB 闪存驱动器。

## 支持的模块

- [NVIDIA® Jetson Orin™ Nano 模块 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano 模块 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX 模块 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX 模块 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

## 前提条件

- Ubuntu 主机 PC
- 带有 Jetson Orin 模块的 A603 载板
- Micro-USB 数据传输线

## 进入强制恢复模式

:::note
在我们进行安装步骤之前，我们需要确保板子处于强制恢复模式。
:::

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/recovery.gif" /></div>

<details>

<summary> 逐步详细教程 </summary>

**步骤 1.** 在板子上的 micro-USB 连接器和 Linux 主机 PC 之间连接 USB 线

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A603/2.jpg" /></div>

**步骤 2.** 在 14 针排针的第 3 针和第 4 针之间连接跳线

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/3.jpg" /></div>

**步骤 3.** 将电源适配器连接到板子上的 DC 插座以给板子供电

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/4.jpg" /></div>

**步骤 4.** 在 Linux 主机 PC 上，打开终端窗口并输入命令 `lsusb`。如果返回的内容根据您使用的 Jetson SoM 有以下输出之一，则板子处于强制恢复模式。

- 对于 Orin NX 16GB：**0955:7323 NVidia Corp**
- 对于 Orin NX 8GB：**0955:7423 NVidia Corp**
- 对于 Orin Nano 8GB：**0955:7523 NVidia Corp**
- 对于 Orin Nano 4GB：**0955:7623 NVidia Corp**

下图是 Orin NX 16GB 的示例。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/A607/4.png" /></div>

**步骤 5.** 移除跳线。

</details>

## 下载外设驱动程序

首先，您需要为此开发板安装外设驱动程序。这些驱动程序是开发板上某些硬件外设正常工作所必需的。请点击下面的链接，根据 Jetson 模块下载相应的驱动程序

<div class="table-center">
<table style={{textAlign:'center'}}>
  <thead>
    <tr>
      <th>Jetson 模块</th>
      <th>JetPack 版本</th>
      <th>L4T 版本</th>
      <th>下载链接</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB</td>
      <td>5.1</td>
      <td>35.2.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.zip/download">下载</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-Nano/A603-Orin-Nano-JP5.1.1.zip/download">下载</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.2</td>
      <td>35.4.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZC4-Ci8o0dNkc0wWWlphf0BEQHp2nV-TM2Qpn7WwmpB1g?e=heBSc2">下载</a></td>
    </tr>
        <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.4</td>
      <td>35.6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EShnCiOVY3ZPqptpnJZ0tlABemb3chgmuUZyuvsqJpHpcA?e=hXxCRr">下载</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0H4iNmfUxPjCfiwfi59NEB8KQ9HuYEiu_0VLnsJVPjVw?e=oR4LYr">下载</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdmS2OfqVg5IpQt9MeiBoT0BdS3Uft6DlJ1GPTJqZHoVNQ?e=ocmcHG">下载</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.2</td>
      <td>36.4.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQLFs4vd8N5Lp0nhbP_KU-gB6kYGlXu3_N3KLiL25ze52Q?e=CWhIaE">下载</a></td>
    </tr>
  </tbody>
</table>
</div>

:::info
要验证下载固件的完整性，您可以比较 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 来获取下载文件的 SHA256 哈希值。如果得到的哈希值与[此处](https://seeedstudio88-my.sharepoint.com/:x:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXljqlpW3ZNNplIPBwJuyvsBdkW92geUmV7_7VN4SDlggA?e=Xea32u)提供的 SHA256 哈希值匹配，则确认您下载的固件是完整且完好的。
:::

**注意：** 目前我们提供上述驱动程序。随着新 JetPack 版本的发布，我们将在未来持续更新驱动程序。

## 刷写到 Jetson

这里有一个将 JetPack 6.1 刷写到 A603 载板 + Orin Nx 16GB 模块的视频。您可以参考视频和下面的详细步骤来刷写您的设备。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/qN4GxscUGW0" title="A603 JetPack6.1 Installation Walkthrough" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
在开始刷写之前，需要注意的是 Jetson Orin NX 模块仅支持 JetPack 5.1 及以上版本，而 Jetson Orin Nano 模块仅支持 JetPack 5.1.1 及以上版本。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1 for Jetson Orin NX" label="JP5.1.1 for Jetson Orin NX">

这里我们将在 A603 载板配合 Jetson Orin NX 模块上安装 **Jetpack 5.1.1**。

**步骤 1：** 在主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r3531) NVIDIA 驱动程序。所需的驱动程序如下所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**步骤 2：** 将之前下载的外设驱动程序移动到与 NVIDIA 驱动程序相同的文件夹中。现在您将在同一文件夹中看到三个压缩文件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/6.png" /></div>

**步骤 3：** 通过导航到包含这些文件的文件夹来解压 **Jetson_Linux_R35.3.1_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2**，应用更改并安装必要的先决条件

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**步骤 4：** 解压 **A603-Orin-NX-JP5.1.1.zip**。这里我们额外安装了解压 .zip 文件所需的 **unzip** 软件包

```sh
cd ..
sudo apt install unzip 
unzip A603-Orin-NX-JP5.1.1.zip
```

这里会询问是否替换文件。输入 **A** 并按 **ENTER** 键来替换必要的文件

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/7.jpg" /></div>

**步骤 5：** 配置您的用户名、密码和主机名，这样设备启动完成后就不需要进入 Ubuntu 安装向导。

首先使用 `cd Linux_for_Tegra` 确保您在正确的目录中。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例如（用户名："nvidia"，密码："nvidia"，设备名称："nvidia-desktop"）：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**步骤 6:** 将系统刷写到 NVMe SSD 或 USB 闪存驱动器

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

如果刷写过程成功，您将看到以下输出

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>
<TabItem value="JP5.1.1 for Jetson Orin Nano" label="JP5.1.1 for Jetson Orin Nano">

这里我们将使用 NVIDIA L4T **35.3.1** 在搭载 Jetson Orin Nano 模块的 A603 载板上安装 **Jetpack 5.1.1**

**步骤 1：** 在主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r3531) NVIDIA 驱动程序。所需的驱动程序如下所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**步骤 2：** 将之前下载的外设驱动程序移动到与 NVIDIA 驱动程序相同的文件夹中。现在您将在同一文件夹中看到三个压缩文件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/8.png" /></div>

**步骤 3：** 通过导航到包含这些文件的文件夹来解压 **Jetson_Linux_R35.3.1_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2**，应用更改并安装必要的先决条件

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**步骤 4：** 解压 **A603-Orin-NX-JP5.1.1.zip**。这里我们额外安装了解压 .zip 文件所需的 **unzip** 软件包

```sh
cd ..
sudo apt install unzip 
unzip A603-Orin-NX-JP5.1.1.zip
```

这里会询问是否替换文件。输入 **A** 并按 **ENTER** 键来替换必要的文件

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/9.png" /></div>

**步骤 5：** 配置您的用户名、密码和主机名，这样设备启动完成后就不需要进入 Ubuntu 安装向导

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例如（用户名："nvidia"，密码："nvidia"，设备名称："nvidia-desktop"）：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**步骤 6:** 将系统刷写到 NVMe SSD 或 USB 闪存驱动器

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

如果刷写过程成功，您将看到以下输出。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

<TabItem value="JP5.1.2" label="JP5.1.2">

在这里我们将在带有 Jetson Orin 模块的 A603 载板上安装 **Jetpack 5.1.2**。

**步骤 1：** 在主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r3541) NVIDIA 驱动程序。所需的驱动程序如下所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**步骤 2：** 将之前下载的外设驱动程序移动到与 NVIDIA 驱动程序相同的文件夹中。现在您将在同一文件夹中看到三个压缩文件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/jp512_files.png" /></div>

**步骤 3：** 通过导航到包含这些文件的文件夹来提取 **Jetson_Linux_R35.4.1_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2**，应用更改并安装必要的先决条件。

```sh
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**步骤 4：** 解压 **A603-JP5.1.2.zip**。这里我们额外安装了解压 .zip 文件所需的 **unzip** 软件包。

```sh
cd ..
sudo apt install unzip 
unzip A603-JP5.1.2.zip
```

**步骤 5：** 配置您的用户名、密码和主机名，这样设备启动完成后您就不需要进入 Ubuntu 安装向导。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例如（用户名："nvidia"，密码："nvidia"，设备名称："nvidia-desktop"）：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```
**步骤 6:** 将系统刷写到NVMe SSD。

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

如果刷写过程成功，您将看到以下输出。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/flash_successful.png" /></div>

</TabItem>

<TabItem value="JP5.1.4" label="JP5.1.4">

这里我们将在带有 Jetson Orin 模块的 A603 载板上安装 **Jetpack 5.1.4**。

**步骤 1：** 在主机 PC 上下载 NVIDIA 驱动程序：

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/jetson_linux_r35.6.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2
```

**步骤 2:** 组装刷机包
按顺序执行以下命令：

```bash
tar xf jetson_linux_r35.6.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
tar zxpf 603_jp514.tar.gz # Unzip the driver package
sudo cp -r 603_jp514/Linux_for_Tegra/* Linux_for_Tegra/ # Replace all files in the Linux_for_Tegra directory with the files from the driver package
cd Linux_for_Tegra/ # Navigate to the Linux_for_Tegra path to run the flashing commands
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**步骤 3：** 将设备置于恢复模式。设备必须处于恢复模式才能进行刷写。按照以下步骤进入恢复模式：

1. 短接载板上的 REC 引脚和 GND 引脚。
2. 使用 Micro USB 数据线将载板连接到 PC。
3. 给设备上电。
4. 在 PC 上运行 `lsusb` 并检查产品 ID 是否为以下之一：7323、7423、7523 或 7623。这表示设备处于恢复模式：
   - 7323：Orin NX 16G
   - 7423：Orin NX 8G
   - 7523：Orin Nano 8G
   - 7623：Orin Nano 4G

**步骤 4：** 刷写设备。

   ```bash
   sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
   ```

**提示：** 使用备份镜像备份系统并刷写

1. 如果您将系统刷写到了 SSD 上，请运行以下命令：
   - 备份镜像（需要恢复模式）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit
     ```

   - 使用备份镜像刷写（需要恢复模式）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit
     ```

   完成后，设备可以启动进入系统。

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

这里我们将在带有 Jetson Orin 模块的 A603 载板上安装 **Jetpack 6.0**。

**步骤 1：** 在主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r363) NVIDIA 驱动程序。所需的驱动程序如下所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**步骤 2：** 将之前下载的外设驱动程序移动到与 NVIDIA 驱动程序相同的文件夹中。现在您将在同一文件夹中看到三个压缩文件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/jp6.0_files.png" /></div>

**步骤 3：** 通过导航到包含这些文件的文件夹，解压 **Jetson_Linux_R36.3.0_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2**。

```sh
sudo tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

**步骤 4：** 解压 **A603-JP6.0.zip**。这里我们额外安装了解压缩 .zip 文件所需的 **unzip** 软件包。

```sh
cd ..
sudo apt install unzip 
sudo unzip A603-JP6.0.zip
```

然后，将三个文件夹 `(A603-JP6.0.zip 中的 bootloader、kernel、rootfs)` 复制到 Linux_for_Tegra 文件夹中。

**步骤 5：** 应用更改并安装必要的先决条件

```sh
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**步骤 6：** 配置您的用户名、密码和主机名，这样设备启动完成后您就不需要进入 Ubuntu 安装向导。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例如（用户名："nvidia"，密码："nvidia"，设备名称："nvidia-desktop"）：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**步骤 7：** 将系统刷写到 NVMe SSD。

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

如果刷写过程成功，您将看到以下输出。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/flash_successful.png" /></div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

这里我们将在带有 Jetson Orin 模块的 A603 载板上安装 **Jetpack 6.1**。

**步骤 1：** 在主机 PC 上下载 NVIDIA 驱动程序：

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Jetson_Linux_R36.4.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2
```

**步骤 2:** 组装刷机包
按顺序执行以下命令：

```bash
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
tar xpf 603_jetpack6.1.tar.gz # Unzip the driver package
sudo cp -r 603_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/ # Replace all files in the Linux_for_Tegra directory with the files from the driver package
cd Linux_for_Tegra/ # Navigate to the Linux_for_Tegra path to run the flashing commands
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**步骤 3：** 将设备置于恢复模式。设备必须处于恢复模式才能进行刷写。按照以下步骤进入恢复模式：

1. 短接载板上的 REC 引脚和 GND 引脚。
2. 使用 Micro USB 数据线将载板连接到 PC。
3. 给设备上电。
4. 在 PC 上运行 `lsusb` 并检查产品 ID 是否为以下之一：7323、7423、7523 或 7623。这表示设备处于恢复模式：
   - 7323：Orin NX 16G
   - 7423：Orin NX 8G
   - 7523：Orin Nano 8G
   - 7623：Orin Nano 4G

**步骤 4：** 刷写设备。

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml"   --showlogs --network usb0 jetson-orin-nano-devkit internal
```

:::info
备份系统并使用备份镜像刷写

如果您将系统刷写到了 SSD 上，请运行以下命令：

- 备份镜像（需要恢复模式）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit
     ```

- 使用备份镜像刷写（需要恢复模式）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit
     ```

   完成后，设备可以启动进入系统。
:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

这里我们将在带有 Jetson Orin 模块的 A603 载板上安装 **Jetpack 6.2**。

**步骤 1：** 在主机 PC 上下载 NVIDIA 驱动程序：

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2
```

**步骤 2：** 组装刷写包

请注意，我们需要将 Nvidia 驱动程序和外设驱动程序放在同一个目录中，然后在该目录中打开终端并执行以下代码：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/driver_files_directory_layout.png" /></div>

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
sudo tar zxpf 603_jp62.tar.gz
sudo cp -r 603_jp62/Linux_for_Tegra/* Linux_for_Tegra/
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

**步骤 3：** 将设备置于恢复模式。设备必须处于恢复模式才能进行刷写。按照以下步骤进入恢复模式：

1. 短接载板上的 REC 引脚和 GND 引脚。
2. 使用 Micro USB 数据线将载板连接到 PC。
3. 给设备上电。
4. 在 PC 上运行 `lsusb` 并检查产品 ID 是否为以下之一：7323、7423、7523 或 7623。这表示设备处于恢复模式：
   - 7323：Orin NX 16G
   - 7423：Orin NX 8G
   - 7523：Orin Nano 8G
   - 7623：Orin Nano 4G

**步骤 4：** 刷写设备。

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

:::info
提示：备份系统并使用备份镜像刷写

如果您将系统刷写到了 SSD 上，请运行以下命令：

- 备份镜像（需要恢复模式）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit-super
     ```

- 使用备份镜像刷写（需要恢复模式）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit-super
     ```

   完成后，设备可以启动进入系统。
:::

</TabItem>

</Tabs>

## CAN 接口

由于 A603 载板上有 CAN 收发器，您不需要像开发套件那样额外的收发器。

**步骤1.** 安装 `devmem2` 以向寄存器写入值：

```sh
sudo apt-get install devmem2
```

**步骤2.** 根据[这里](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/HR/ControllerAreaNetworkCan.html#jetson-platform-details)的说明写入数值。

```sh
sudo devmem2 0x0c303010 w 0xc400
sudo devmem2 0x0c303018 w 0xc458
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/send1.png"/>
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/send2.png"/>
</div>

**步骤3.** 加载内核模块：

```bash
sudo modprobe can
sudo modprobe can_raw
sudo modprobe mttcan
```

加载这些模块后，您应该能够在 `sudo dmesg` 中看到这些日志：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/check_can.png"/>
</div>

**步骤4.** 启动 can0 接口：

```sh
sudo ip link set can0 type can bitrate 500000
```

你可以选择将比特率更改为 1000000。然后，调出 can0：

```sh
sudo ip link set can0 up
```

使用 `ifconfig` 检查接口：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/ifconfig.png"/>
</div>

**步骤5.** 发送数据（需要安装 can-utils）。在另一端，我们使用带有 CAN 扩展板的 MCU 来接收数据。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/hardware.png"/>
</div>

在 jetson 终端运行 `cansend can0 123#11.22.33.50`：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/cansend.png"/>
</div>

**步骤6.** 接收数据。在另一端，我们使用带有 CAN 扩展板的 MCU 来发送数据。

在 jetson 终端运行 `candump can0`：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/candump.png"/>
</div>

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
