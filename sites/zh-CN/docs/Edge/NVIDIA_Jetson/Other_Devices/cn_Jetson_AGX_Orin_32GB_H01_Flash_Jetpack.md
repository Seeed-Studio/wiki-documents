---
description: 将 JetPack 刷写到 NVIDIA® Jetson AGX Orin 32GB H01 套件
title: NVIDIA® Jetson AGX Orin 32GB H01 套件
tags:
  - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson_AGX_Orin_32GB_H01_Flash_Jetpack
sku: 114110207
last_update:
  date: 07/02/2026
  author: Lakshantha/Youjiang
createdAt: '2023-03-02'
updatedAt: '2026-07-02'
url: https://wiki.seeedstudio.com/cn/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack/
---

<!-- # Flash JetPack to NVIDIA® Jetson AGX Orin 32GB H01 Kit  -->

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

:::info
请注意，以下更新已于 2024 年 11 月 25 日应用到该产品：

1. 更改了 5V 供电方案（电源 IC 从 ONNCP3020ADR2G 更换为 TI TPS53015DGS，并相应调整了外围元件），解决了在使用某些动态电流较高的 USB 设备时设备重启的问题。
2. 优化了板卡布局，放大了风扇线缆的开槽，以适配风扇布线。
3. 为了稳定配件供应，WiFi 模组型号从 8265.NGW 更换为 BL-M8822CP1，并相应更新了软件驱动。

:::

本教程将指导你如何在 Jetson AGX Orin 32GB H01 套件上安装 JetPack。

## 前置条件

- [Ubuntu 主机电脑](https://developer.nvidia.com/sdk-manager)（原生安装或使用 VMware Workstation Player 的虚拟机）。
- Jetson AGX Orin H01 套件。
- USB Type-C 数据传输线

## 进入强制恢复模式

- **步骤 1：** 板卡上有一个恢复按键，它位于下图所示的三个按键的中间。按住恢复按键，然后将板卡连接到电源即可进入强制恢复模式。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/4.jpg"/></div>

- **步骤 2：** 使用 USB Type-C 数据传输线将 Jetson AGX Orin 32GB H01 套件与 Ubuntu 主机电脑连接。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/5.jpg"/></div>

- **步骤 3：** 在 Ubuntu 主机上使用 `lsusb` 命令，确认设备是否已进入恢复模式。
<div align="center"><img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/h01/check_rec.png"/></div>

:::info
如果日志中出现 `0955:7223 NVIDIA Corp.`，则表示设备已进入恢复模式。
:::

## 下载外设驱动

首先，你需要为该板卡安装外设驱动。这些驱动是部分硬件外设在板卡上正常工作所必需的。点击下方链接，根据 JetPack 版本下载对应驱动。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack 版本</th>
      <th>L4T 版本</th>
      <th>驱动下载链接</th>
      <th>L4T 下载链接 </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5.0.2</td>
      <td>35.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.0.2/AGX-Orin-32GB-H01-JP5.0.2.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r351" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.1.1/AGX-Orin-32GB-H01-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3531" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>5.1.4</td>
      <td>35.6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaRL0XDaYCdFhkBiwvO3b8UBk4HmzRBQgfhYCKlN_ANVpA?e=5ndnMu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3560" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfdaZCD6wMZPrW_LtMm3eQgBXnPq_8ri8WmKw3nsxXVf1Q?e=uvKRhE" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r363" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbYu41kk-LNNmsssNIuM5AoBLYjTFZo_mEUTUtIJlCCnyw?e=dvCgKk" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3640" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
    <td>6.2</td>
      <td>36.4.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ES6058EFNl1LkrJGAvTYR6IBFTldWYyxJ4ZxQP3EM00BbQ?e=rjshwu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3643" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>7.2</td>
      <td>39.2.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAOW5tcK2vPTagiGOFw9oMcAYITLgRqj_dXQJMchlUeGOk?e=8ar0lu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2#:~:text=Jetson%20Linux%2039.2%20%286%2F02%2F2026%29" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>
</div>

## 刷写到 Jetson

:::danger
NVIDIA® Jetson AGX Orin 32GB H01 套件预装了 `JetPack 5.1.4` 操作系统。默认用户名和密码为 user: nvidia / password: nvidia。收到设备后，你可以直接登录系统开始使用，无需重新刷写系统。

如果你的系统损坏，可以参考下面的步骤重新刷写系统。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.0.2/JP5.1.1" label="JP5.0.2/JP5.1.1">

这里我们将使用：**NVIDIA L4T 35.1** 来在 Jetson AGX Orin 32GB H01 套件上安装 **Jetpack 5.0.2**，或使用 **NVIDIA L4T 35.3.1** 来安装 **Jetpack 5.1.1**。

- **步骤 1：** 在主机电脑上下载合适的 NVIDIA 驱动。所需驱动如下所示：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

- **步骤 2：** 将之前下载的外设驱动移动到与 NVIDIA 驱动相同的文件夹中。现在你会在同一文件夹中看到三个压缩文件。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/7.png"/></div>

- **步骤 3：** 通过进入包含这些文件的文件夹，解压 **Jetson_Linux_R35.1.0_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2**，并应用更改

```sh
cd <directory_where_the_files_are_located>
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

- **步骤 4：** 解压 **AGX-Orin-32GB-H01-JP5.0.2.zip**。这里我们另外安装用于解压 .zip 文件的 **unzip** 软件包

```sh
cd ..
sudo apt install unzip 
unzip AGX-Orin-32GB-H01-JP5.0.2.zip
```

此时会询问是否替换文件。输入 **A** 并按下 **ENTER** 以替换必要的文件

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/3.jpg"/></div>

- **步骤 5：** 将系统刷写到 eMMC

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson‐agx‐orin‐devkit mmcblk0p1
```

如果刷写过程成功，你会看到如下输出

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/9.jpg"/></div>

### 遇到的错误

- 在 *Jetpack 5.1.1* 上，**AGX Orin** 和 **NX Orin** 出现 **ERROR: failed to read rcm_state** 错误
  - NVIDIA 对 Jetson AGX Orin 做了 PCN 变更，但这不是 Seeed 的 PCN 变更。
  - 除了 Wiki 中提到的物料外，请在 Jetson Linux 35.3.1 页面底部下载 [Overlay_PCN210361_PCN210100_r35.3.1.tbz2](https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/overlay_pcn210361_pcn210100_r35.3.1.tbz2)。
  - 在解压 *Jetson_Linux* 之后、应用二进制文件之前，请先解压 *Overlay_PCN210361_PCN210100_r35.3.1.tbz2*。然后将所有文件和文件夹复制到 *Linux_For_Tegra* 中（合并，而不是跳过）。
  - 然后继续按照指南中的剩余步骤操作。

</TabItem>

<TabItem value="JP5.1.4" label="JP5.1.4">

这里我们将使用：**NVIDIA L4T 35.6.0** 在 Jetson AGX Orin 32GB H01 套件上安装 **Jetpack 5.1.4**。

在 Ubuntu 主机的终端窗口中输入以下命令：

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/jetson_linux_r35.6.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2

tar xf jetson_linux_r35.6.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
sudo tar xf 605_jp514.tbz2  # Please copy 605_jp514.tbz2 to the Linux_for_Tegra/ directory before execution.

```

从以下命令中选择一个来执行烧录操作：

(1). 将系统烧录到 eMMC：

```bash
sudo ./flash.sh jetson-agx-orin-devkit internal
```

(2). 将系统烧录到 SSD：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  --showlogs --network usb0 jetson-agx-orin-devkit external
```

<div align="center"><img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/h01/flash_successful.png"/></div>

烧录完成后，设备会自动重启。

</TabItem>


<TabItem value="JP6.0" label="JP6.0">

这里我们将使用 **NVIDIA L4T 36.3** 在 Jetson AGX Orin 32GB H01 Kit 上安装 **Jetpack 6.0**。

- **步骤 1：** 在主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r363) NVIDIA 驱动程序。所需驱动程序如下所示：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **步骤 2：** 将之前下载的外设驱动移动到与 NVIDIA 驱动相同的文件夹中。现在你会在同一文件夹中看到 3 个压缩文件。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/files.png"/>
</div>

- **步骤 3：** 通过进入包含这些文件的文件夹并应用更改，解压 **Jetson_Linux_R36.3.0_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2**：

```bash
cd < directory_where_the_files_are_located >
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **步骤 4：** 解压 **AGX-Orin-H01-JP6.0.zip**。这里我们另外安装用于解压 .zip 文件所需的 **unzip** 软件包。

```sh
cd ..
sudo apt install unzip 
sudo unzip AGX-Orin-H01-JP6.0.zip
```

此时会询问是否替换文件。输入 **A** 并按下 **ENTER** 以替换必要的文件。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/extract_drivers.png"/>
</div>

- **步骤 5：** 将系统烧录到 eMMC

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

如果烧录过程成功，你会看到如下输出：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

这里我们将使用 **NVIDIA L4T 36.4** 在 Jetson AGX Orin 32GB H01 Kit 上安装 **Jetpack 6.1**。

- **步骤 1：** 在 Ubuntu 主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r3640) NVIDIA 驱动程序。所需驱动程序如下所示：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **步骤 2：** 将之前下载的外设驱动移动到与 NVIDIA 驱动相同的文件夹中。现在你会在同一文件夹中看到 3 个压缩文件。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
你可以使用以下命令来验证下载的文件是否完整。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **步骤 3：** 通过进入包含这些文件的文件夹并应用更改，解压 **Jetson_Linux_R36.4.0_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2**：

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **步骤 4：** 解压 **A605_Jetpack_6.1.tar.gz**：

```bash
cd ..
tar xf A605_Jetpack_6.1.tar.gz
sudo cp -r 605_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

- **步骤 5：** 将系统烧录到 eMMC：

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

如果烧录过程成功，你会看到如下输出：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
我们也可以运行以下命令将系统安装到 SSD 上：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

这里我们将使用 **NVIDIA L4T 36.4** 在 Jetson AGX Orin 32GB H01 Kit 上安装 **Jetpack 6.2**。

- **步骤 1：** 在 Ubuntu 主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r3643) NVIDIA 驱动程序。所需驱动程序如下所示：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **步骤 2：** 将之前下载的外设驱动移动到与 NVIDIA 驱动相同的文件夹中。现在你会在同一文件夹中看到 3 个压缩文件。

:::info
与 Jetpack 6.1 的烧录过程类似！
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
你可以使用以下命令来验证下载的文件是否完整。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **步骤 3：** 通过进入包含这些文件的文件夹并应用更改，解压 **Jetson_Linux_R36.4.3_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R36.4.3_aarch64.tbz2**：

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.3_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **步骤 4：** 解压 **605_jp62.tar.gz**：

```bash
cd ..
tar xf 605_jp62.tar.gz
sudo cp -r 605_jp62/Linux_for_Tegra/* Linux_for_Tegra/
```

- **步骤 5：** 将系统烧录到 eMMC：

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

如果烧录过程成功，你会看到如下输出：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
我们也可以运行以下命令将系统安装到 SSD 上：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

<TabItem value="JP7.2" label="JP7.2">

这里我们将使用 **NVIDIA L4T 39.2.0** 在 Jetson AGX Orin 32GB H01 Kit 上安装 **JetPack 7.2**。

- **步骤 1：** 在 Ubuntu 主机 PC 上[下载](https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2#:~:text=Jetson%20Linux%2039.2%20%286%2F02%2F2026%29) NVIDIA BSP 和 RootFS 软件包。所需的 Jetson Linux 39.2.0 文件如下所示：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/7.2-H01.png"/>
</div>

你也可以使用以下命令来下载这些文件：

```bash
wget https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Jetson_Linux_R39.2.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2
```

- **步骤 2：** 下载 Jetson AGX Orin 32GB H01 Kit JetPack 7.2 外设驱动包 [605_jp72.tbz2](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAOW5tcK2vPTagiGOFw9oMcAYITLgRqj_dXQJMchlUeGOk?e=8ar0lu)，然后将其放入与 NVIDIA BSP 和 RootFS 软件包相同的文件夹中。现在你会在同一文件夹中看到 3 个压缩文件。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/Seeed_AGX_Orin_Dev_Kit_JP72_downloaded_files.png"/>
</div>

- **步骤 3：** 解压 **Jetson_Linux_R39.2.0_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2**，然后应用 NVIDIA 二进制文件：

```bash
cd <path_to_files>
tar xf Jetson_Linux_R39.2.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **步骤 4：** 解压 **605_jp72.tbz2**：

```bash
cd ..
tar xf 605_jp72.tbz2
sudo cp -r 605_jp72/Linux_for_Tegra/* Linux_for_Tegra/
```

- **步骤 5：** 将系统烧录到 eMMC：

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

如果烧录过程成功，你会看到如下输出：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
我们也可以运行以下命令将系统安装到 SSD 上：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

</Tabs>

## 开发者工具

### 预装 Jetpack，便于快速开发与边缘 AI 集成

[Jetson Software](https://developer.nvidia.com/embedded/develop/software) 从 NVIDIA JetPack™ SDK 开始，它提供了完整的开发环境，并包含 CUDA-X 加速库和其他 NVIDIA 技术，以帮助你快速启动开发。JetPack 包含 Jetson Linux 驱动程序包，为 Jetson 平台提供 Linux 内核、引导加载程序、NVIDIA 驱动、烧录工具、示例文件系统和工具链。它还包括安全特性、空中升级能力等更多功能。

### 计算机视觉与嵌入式机器学习

- [Deepstream](https://developer.nvidia.com/deepstream-sdk) 为基于 AI 的多传感器处理以及 Jetson 上的视频和图像理解提供完整的流式分析工具包。
- [TAO](https://developer.nvidia.com/tao-toolkit) 基于 TensorFlow 和 PyTorch 构建，是 NVIDIA TAO 框架的低代码版本，可加速模型训练
- [alwaysAI](https://alwaysai.co/blog/getting-started-with-the-jetson-nano-using-alwaysai)：在 reComputer 的边缘侧直接构建、训练和部署计算机视觉应用。通过企业订阅，可免费访问 100+ 预训练计算机视觉模型，并在云端通过几次点击训练自定义 AI 模型。查看我们的 [wiki](https://wiki.seeedstudio.com/cn/alwaysAI-Jetson-Getting-Started/#object-detection-on-pre-loaded-video-file) 指南以开始使用 alwaysAI。
- [edge impulse](https://www.edgeimpulse.com/)：用于在边缘部署音频、分类和目标检测应用的最简单嵌入式机器学习流水线，对云零依赖。
- [Roboflow](https://blog.roboflow.com/deploy-to-nvidia-jetson/) 提供工具，将原始图像转换为自定义训练的目标检测和分类计算机视觉模型，并部署该模型以供应用使用。请参阅 https://docs.roboflow.com/inference/nvidia-jetson  了解如何使用 Roboflow 部署到 NVIDIA Jetson。
- [ultralytics yolo](https://github.com/ultralytics/yolov5)：使用迁移学习，通过 YOLOv5 实现小样本目标检测，只需极少的训练样本。请参阅我们逐步讲解的 [wiki](https://wiki.seeedstudio.com/cn/YOLOv5-Object-Detection-Jetson/) 教程。
- [Deep Learning](https://deci.ai/blog/jetson-machine-learning-inference/)：在 NVIDIA Jetson Nano 上优化你的模型。点击 [here](https://info.deci.ai/benchmark-optimize-runtime-performance-nvidia-jetson) 前往 Deci，自动基准测试并优化 NVIDIA Jetson Nano 和 Xavier NX 设备上的运行时性能

### 语音 AI

- [Riva](https://developer.nvidia.com/riva) 是一个 GPU 加速的 SDK，用于构建针对你用例定制并可实现实时性能的语音 AI 应用。

### 远程车队管理

使用 [allxon](https://www.allxon.com/) 启用安全的 OTA 和远程设备管理。使用代码 H4U-NMW-CPK 解锁 90 天免费试用。

### 机器人与 ROS 开发

- NVIDIA Isaac ROS GEMs 是硬件加速的软件包，使 ROS 开发者更容易在 NVIDIA 硬件上构建高性能解决方案。了解更多 [NVIDIA Isaac](https://developer.nvidia.com/embedded/develop/software) 相关信息。
- [Cogniteam Nimbus](https://www.cogniteam.com/nimbus) 是一款云端解决方案，可让开发者更高效地管理自主机器人。Nimbus 平台开箱即用地支持 NVIDIA® Jetson™ 和 ISAAC SDK 及 GEMs。查看我们的 [webinar](https://www.seeedstudio.com/blog/2022/04/21/webinar-connect-your-ros-project-to-the-cloud-with-nimbus/) 了解如何使用 Nimbus 将你的 ROS 项目连接到云端。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
