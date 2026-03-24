---
description: 本文提供了如何将 JetPack 操作系统刷写到支持 NVIDIA Jetson Orin NX/Nano 模块的 A608 载板的详细指南。内容涵盖了从先决条件和进入强制恢复模式，到下载系统镜像和驱动程序，最后将操作系统刷写到 NVMe SSD、USB 闪存驱动器或 SD 卡的全过程，确保用户能够成功完成系统安装和启动。
title: A608 载板
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.webp
slug: /reComputer_A608_Flash_System
sku: 105110001
last_update:
  date: 12/4/2024
  author: Youjiang
createdAt: '2024-01-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/reComputer_A608_Flash_System/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# 将 JetPack 操作系统刷写到 A608 载板（支持 NVIDIA Jetson Orin NX/Nano）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-A608-Carrier-Board-for-Orin-NX-Orin-Nano-Series-p-5853.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

在本教程中，我们将向您展示如何将 Jetpack 刷写到连接在 A608 载板上的 NVMe SSD 和 USB 闪存驱动器，该载板同时支持 NVIDIA Jetson Orin NX 模块和 NVIDIA Jetson Orin Nano 模块。

## 先决条件

- Ubuntu 主机 PC
- 搭载 Jetson Orin NX 或 Jetson Orin Nano 模块的 A608 载板
- USB Type-C 数据传输线

:::info
我们建议您使用物理 ubuntu 主机设备而不是虚拟机。
请参考下表准备主机。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack 版本 </td>
        <td class="dbon" colspan="3"> Ubuntu 版本（主机） </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 5.x</td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

## 进入强制恢复模式

在我们进行安装步骤之前，我们需要确保开发板处于强制恢复模式。

**步骤 1.** 关闭系统电源，请确保电源已关闭而不是进入待机模式。

**步骤 2.** 使用 Type C 转 USB Type A 线缆连接载板和主机。

**步骤 3.** 使用 GH1.25MM 锁定端子线短接 Recovery 的 pin1 和 pin2，使其进入恢复模式。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/hardware_connection.png" /></div>

**步骤 4.** 给设备上电。

**步骤 5.** 在 Linux 主机 PC 上，打开终端窗口并输入命令 `lsusb`。如果返回的内容根据您使用的 Jetson SoM 有以下输出之一，则开发板处于强制恢复模式。

- 对于 Orin NX 16GB：**0955:7323 NVidia Corp**
- 对于 Orin NX 8GB：**0955:7423 NVidia Corp**
- 对于 Orin Nano 8GB：**0955:7523 NVidia Corp**
- 对于 Orin Nano 4GB：**0955:7623 NVidia Corp**

下图是 Orin NX 8GB 的示例

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/lsusb.png" /></div>

**步骤 6.** 移除短路线

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1" label="JP5.1.1">

这里我们将使用 NVIDIA L4T 35.3.1 在带有 Jetson Orin NX 模块的 A608 载板上安装 Jetpack 5.1.1。

**步骤 1.** 在主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r3531) NVIDIA 驱动程序。所需的驱动程序如下所示：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/nvidia_driver.png" /></div>

**步骤 2.** [下载](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZ5nv2iWBQlIvPq7_aTQiucBp_HUwDmFNgkBMR04SI_teg?e=wseTuy)外设驱动程序并将所有驱动程序放在同一文件夹中。

现在您将在同一文件夹中看到三个压缩文件：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/drivers.png" /></div>

**步骤 3.** 准备系统镜像。

在主机 PC 上打开终端窗口并运行以下命令：

```bash
cd <path to drivers>
sudo apt install unzip 
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
unzip 608_jp511.zip
cp -r ./608_jp511/Linux_for_Tegra/* ./Linux_for_Tegra/

```
**步骤 4.** 将系统刷新至A608。

- Flash to NVMe

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Flash to USB

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Flash to SD

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

如果刷写过程成功，您将看到以下输出。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flash.png" /></div>

刷写完成后，重新为 Jetson 设备上电并登录系统。
</TabItem>
<TabItem value="JP5.1.2" label="JP5.1.2">

这里我们将使用 NVIDIA L4T 35.4.1 在搭载 Jetson Orin NX 模块的 A608 载板上安装 Jetpack 5.1.2。

**步骤 1.** 在主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r3541) NVIDIA 驱动程序。所需的驱动程序如下所示：
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**步骤 2.** [下载](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZcvwwGTgLBBq_M_pAa2tmEB-pZmFQraF9v9JcdiqcRbLA?e=Px98MO)外设驱动程序并将所有驱动程序放在同一文件夹中。

现在您将在同一文件夹中看到三个压缩文件：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P2.png" /></div>

**步骤 3.** 准备系统镜像。

在主机 PC 上打开终端窗口并运行以下命令：

```bash
cd <path to drivers>
sudo apt install unzip 
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
unzip a608_jp512.zip
cp -r ./608_jp512/Linux_for_Tegra/* ./Linux_for_Tegra/
```
**步骤 4.** 将系统刷新至A608。

- Flash to NVMe

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Flash to USB

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Flash to SD

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

如果刷写过程成功，您将看到以下输出。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

刷写完成后，重新为 Jetson 设备上电并登录系统。

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

这里我们将使用 NVIDIA L4T 36.3 在搭载 Jetson Orin NX 模块的 A608 载板上安装 Jetpack 6.0。

**步骤 1.** 在主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r363) NVIDIA 驱动程序。所需的驱动程序如下所示：
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**步骤 2.** [下载](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZdUUKln2yBKhPS8yegaLzMBWZm2MtIaFnHbFYkwazArzA?e=blzKtI)外设驱动程序并将所有驱动程序放在同一文件夹中。

现在您将在同一文件夹中看到三个压缩文件：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/6.0.png" /></div>

**步骤 3.** 准备系统镜像。

在主机 PC 上打开终端窗口并运行以下命令：

```sh
cd <path to drivers>
sudo apt install unzip 
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
unzip 608_jp60.zip
sudo cp -r ./608_jp60/Linux_for_Tegra/* ./Linux_for_Tegra/
```
**步骤 4.** 将系统刷入A608的Nvme中。

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

如果刷写过程成功，您将看到以下输出。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

刷写完成后，重新为 Jetson 设备上电并登录系统。

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

这里我们将使用 NVIDIA L4T 36.4 在配备 Jetson Orin NX 模块的 A608 载板上安装 Jetpack 6.1。

**步骤 1.** 在主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r3640) NVIDIA 驱动程序。所需的驱动程序如下所示：
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**步骤 2.** [下载](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVrGntfS1wxHhrgnwGeHQmQBtQ0gvHj4udkREIDIACvFDw?e=5B07Za)外设驱动程序并将所有驱动程序放在同一文件夹中。

现在您将在同一文件夹中看到三个压缩文件：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/a608_jp6.1.png" /></div>

**步骤 3.** 准备系统镜像。

在主机 PC 上打开终端窗口并运行以下命令：

```bash
cd <path to drivers>
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
tar xf A608_Jetpack_6.1.tar.gz
sudo cp -r 608_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```
**步骤 4.** 将系统刷入A608的Nvme中。

```bash
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

如果刷写过程成功，您将看到以下输出。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

刷写完成后，重新为 Jetson 设备上电并登录系统。

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

这里我们将使用 NVIDIA L4T 36.4.3 在配备 Jetson Orin NX 模块的 A608 载板上安装 Jetpack 6.2。

**步骤 1.** 在主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r3643) NVIDIA 驱动程序。所需的驱动程序如下所示：
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/jp6.2.png" /></div>

**步骤 2.** [下载](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYGdRLSx_oxDjagkG2J6GTYBB9TDLvTKagnRfQcbz6gplA?e=sswKna)外设驱动程序并将所有驱动程序放在同一文件夹中。

现在您将在同一文件夹中看到三个压缩文件：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/jp62_files.png" /></div>

**步骤 3.** 准备系统镜像。

在主机 PC 上打开终端窗口并运行以下命令：

```bash
cd <path to drivers>
tar xf Jetson_Linux_R36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
sudo tar zxpf 608_jp62.tar.gz
sudo cp -r 608_jp62/Linux_for_Tegra/* Linux_for_Tegra/ 
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```
**步骤 4.** 将系统刷入A608的Nvme中。

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

如果刷写过程成功，您将看到以下输出。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

刷写完成后，重新为 Jetson 设备上电并登录系统。

</TabItem>

</Tabs>

## 资源

- [A608 CAD 文件](https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608_V1.2.zip)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

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
