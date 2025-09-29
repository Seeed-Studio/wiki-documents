---
description: reComputerJ2021 | J202
title: J202 载板
keywords:
  - Edge 
  - Jetson
  - reComputer JetPack™_OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_J2021_J202_Flash_Jetpack
last_update:
  date: 08/27/2024
  author: Youjiang

no_comments: false # for Disqus

---

# reComputer J202 入门指南

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/carrier_board-Photoroom.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/recomputer-j202-carrier-board-for-jetson-nano-xavier-nx-without-power-adapter-p-5435.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
  </a>
</div>

reComputer J202 的设计和功能与 NVIDIA® Jetson Xavier NX™ 载板几乎相同，完美兼容 Jetson Nano/Xavier NX/TX2 NX 模块，包含 4x USB 3.2 gen 2 端口、M.2 key E 用于 WIFI、M.2 Key M 用于 SSD、RTC、CAN、树莓派 GPIO 40 针接口等。

## 特性

- **完美适配：** 专为 Jetson Nano/Xavier NX/TX2 NX（260 针 SODIMM）设计。
- **丰富外设：** 高性能稳定性，包含 USB 3.1 端口（4x）、M.2 key E 用于 WIFI、M.2 Key M 用于 SSD、RTC、CAN、树莓派 GPIO 40 针接口等。
- **高通用性：** 适用于复杂的 AI 图形应用。
- **全面认证：** 包括 FCC、CE、RoHS 认证。
- **灵活定制：** 基于 J202 原始设计提供配件模块更换、logo 和硬件接口修改服务。

:::note

由于 Jetson Nano 只有一个 PCIe 通道，如果模块使用 Jetson Nano 连接到 J202 载板，只能选择 M.2 Key M 用于 SSD。

:::

## 规格参数

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <td colspan={2}>存储</td>
      <td>1x M.2 Key M</td>
    </tr>
    <tr>
      <td rowspan={2}>网络</td>
      <td>以太网</td>
      <td>1x RJ-45 千兆以太网 (10/100/1000M)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E 用于 WiFi/蓝牙模块</td>
    </tr>
    <tr>
      <td rowspan={7}>I/O</td>
      <td>USB</td>
      <td>4x USB 3.1 Type-A (Xavier NX 为 10Gbps，Nano 为 5Gbps) <br/> 1x USB2.0 Type-C (设备模式)</td>
    </tr>
    <tr>
      <td>摄像头</td>
      <td>2x CSI</td>
    </tr>
    <tr>
      <td>显示</td>
      <td>1x HDMI 2.1, 1x DP</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td>1x 风扇连接器</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>1x CAN (仅适用于 Nvidia Xavier 系列)</td>
    </tr>
    <tr>
      <td>多功能端口</td>
      <td>1x 40 针扩展接口 <br/> 1x 12 针控制和 UART 接口</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2 针</td>
    </tr>
    <tr>
      <td colspan={2}>电源</td>
      <td>DC 12V/5A</td>
    </tr>
    <tr>
      <td rowspan={2}>机械</td>
      <td>尺寸 (宽 x 深)</td>
      <td>100mm x 80mm</td>
    </tr>
    <tr>
      <td>安装方式</td>
      <td>桌面、壁挂安装</td>
    </tr>
    <tr>
      <td colspan={2}>工作温度</td>
      <td>10℃~60℃</td>
    </tr>
  </tbody>
</table>
</div>

## 硬件概述

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_1.jpg"/></div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_2.jpg"/></div>

## 支持的模块

- [NVIDIA® Jetson Nano™ 4GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Nanotm-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 8GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 16GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-16GB-1.html)

## 刷写 JetPack

:::danger
刷写 JetPack 将会擦除设备上的所有数据。请谨慎操作。

如果您购买的是完整系统而不仅仅是载板，它将预装 JetPack 操作系统，您可以直接启动并使用。但是，如果您愿意，也可以按照下面的教程安装新的操作系统。
:::

以下内容将演示如何将 JetPack 4.6.1 系统刷写到 J2021 上。您可以参考此过程将所需的 JetPack 版本刷写到其他设备上。

:::info
请参考[这里](https://developer.nvidia.com/embedded/jetson-linux-archive)来确定不同 [Jetson 模块](#supported-module)支持的系统版本。
:::

### 前提条件

- 安装有 **Ubuntu 18.04 OS 或 Ubuntu 20.04 OS** 的**主机电脑**
- reComputer J1020/J2021/J2022 或 J202 载板 + Nvidia Jetson 模块
- 9V-12V/5A 电源适配器
- USB Type-C 数据线
- 跳线帽或母对母杜邦线

### 进入强制恢复模式

在进行安装步骤之前，我们需要确保 reComputer 处于强制恢复模式。

**步骤 1.** 开始之前，您需要断开 reComputer 的电源。

**步骤 2.** 要进入恢复模式，您需要使用跳线连接 **FC REC** 和 **GND**。

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">按钮接头</th>
      <th align="center">描述</th>  
      <th align="center">按钮接头</th>
      <th align="center">描述</th>
    </tr>
    <tr>
      <td rowSpan={6}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/J202-b.png" /></div></td>
      <td align="center">1</td>
      <td align="center">PWR BTN</td>
      <td align="center">7</td>
      <td align="center">AUTO ON</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">8</td>
      <td align="center">DISABLE</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td align="center">FC REC</td>
      <td align="center">9</td>
      <td align="center">UART TXD</td>
    </tr>
    <tr>
      <td align="center">4</td>
      <td align="center">GND</td>
      <td align="center">10</td>
      <td align="center">UART RXD</td>
    </tr>
    <tr>
      <td align="center">5</td>
      <td align="center">SYS RET</td>
      <td align="center">11</td>
      <td align="center">LED +</td>
    </tr>
    <tr>
      <td align="center">6</td>
      <td align="center">GND</td>
      <td align="center">12</td>
      <td align="center">LED -</td>
    </tr>
  </tbody></table>

**步骤 3.** 使用 12V/5A 直流电缆为 reComputer 供电（连接到 reComputer 左侧），并使用 Type-C 电缆连接到 Linux 主机 PC（连接到 reComputer 右侧）。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png" /></div>

**步骤 4.** 在 Linux 主机 PC 屏幕上，我们可以右键单击鼠标打开终端并输入命令 `lsusb`。当返回的内容中包含 `ID 0955:xxxx NVidia Corp.` 时，说明您的 J202 载板处于强制恢复模式，您可以继续进行后续操作。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

:::note

- 对于 NVIDIA® Jetson Nano™：0955:7f21 NVidia Corp
- 对于 NVIDIA® Jetson Xavier™ NX：0955:7e19 NVidia Corp

:::

:::caution
Jetson-Nano 上的 SPI 接口默认与 GPIO 复用且未启用。请参考[**此指南**](/cn/enable_spi_interface_on_jetsonnano)了解如何启用它。
:::

### 刷写到 Jetson

有两种可选方式将 JetPack 操作系统刷写到 reComputer J2021，对于 NVIDIA Jetson 初学者，我们强烈推荐使用 NVIDIA SDK Manager：

- [通过 NVIDIA SDK Manager 刷写 JetPack 操作系统](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [通过命令行刷写 JetPack 操作系统](#flashing-to-emmc-with-command-line)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="SDK Manager" label="SDK Manager">

NVIDIA SDK Manager 是一个一体化工具，它捆绑了开发者软件并为 NVIDIA SDK 提供端到端的开发环境设置解决方案。因此，推荐初学者使用。

:::note
在本教程中，我们将在主机上使用 Ubuntu 18.04 LTS 操作系统，本指南中要安装的 Jetpack 版本为 4.6.1。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

**步骤 1.** 在 Linux 主机 PC 上安装 NVIDIA SDK Manager

首先，您需要创建一个 <a href="https://developer.nvidia.com/login" target="_blank">NVIDIA 账户</a>以便使用 sdkmanager。然后在 Linux 主机 PC 上从 NVIDIA 官方网站下载 <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank">NVIDIA SDK Manager</a>。

**步骤 2.** 打开 NVIDIA SDK Manager 并登录

在 Linux 主机 PC 屏幕上，我们可以右键单击鼠标并打开终端。然后我们可以输入以下命令来启动 SDK Manager：

```bash
sdkmanager
```

:::note
第一次使用 NVIDIA SDK Manager 时，会弹出一个网页提示您使用之前注册的 NVIDIA 账户登录。
:::

**步骤 3.** 选择目标设备

由于我们已经连接了 reComputer J2021，会弹出一个窗口让您选择硬件设备。

reComputer J2021 配备了 **NVIDIA Jetson Xavier 8GB 模块**，因此我们可以选择 `Jetson Xavier NX`（第一个选项）。

<!-- <div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/select_target_device.png" />
</div> -->

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/1.png"/></div>

:::info
请注意，不同版本的 SDK Manager 界面可能略有不同。请根据您的实际情况选择合适的选项。
:::

在第一个屏幕中有更多选项供您选择：

- 需要选择产品类别面板中的 **Jetson**。
- 在硬件配置面板中，我们建议您**不要选择主机**。这将花费更多时间为您当前的 Ubuntu 主机安装 NVIDIA 组件。如果需要，您可以选择它。
- 在目标操作系统面板中，我们可以选择不同的**操作系统**和 **JetPack 版本**。但要注意 JetPack 的版本，不同的模块可能支持不同类型的 JetPack，如 `JetPack 4.6.1`、`JetPack 5.1.x` 等。我们在这里推荐 **JetPack 4.6.1**。
- 在附加 SDK 中，由于 eMMC 的存储空间只有 16GB，如果我们在这里安装 DeepStream，将会出现内存不足的情况。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

点击继续进入下一步。

**步骤 4.** 查看所需组件

在**详细信息和许可证**中，您可以展开主机组件和目标组件面板来查看将安装在您系统上的组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

如果您只需要安装系统，可以取消选中 SDK 组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

:::tip
在选择要安装的组件时，您可能需要关注使用的容量。内置 eMMC 大小只有 16GB，请根据您的实际需求明智地分配和使用这个空间。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
经过实际测试，安装完整套 SDK 组件后，eMMC 空间只剩下约 500MB。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
如果您想了解如何解决容量不足的问题，请参考：

https://wiki.seeedstudio.com/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space 。
:::

如果您希望 SDK Manager 将所有文件下载到默认路径以外的位置，请转到屏幕底部的下载和安装选项，然后选择您希望使用的路径。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

选择继续进入下一步。

**步骤 5.** 安装系统

在安装开始之前，SDK Manager 会提示您输入 `sudo` 密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

过一会儿，我们将被要求为我们的 reComputer 设置新系统。由于我们手动强制进入恢复模式，我们在这里选择 `Manual setup: set the target to Force Recovery Mode via manual operations`。同时，我们选择默认的 **Pre-Config**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

之后，我们需要为我们的 reComputer 输入新 Jetson 系统的名称和密码，这是由您自己设置的。

准备就绪后，点击 `Flash` 继续。

显示屏显示软件下载和安装的进度。请耐心等待安装完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

**（可选）步骤 6.** 安装 SDK 组件

如果您在之前的**步骤 4** 中选中了组件安装，您将需要执行此步骤。

过一会儿，您将能够看到 NVIDIA SDK Manager 中弹出一个新窗口，提示您需要通过 IP 地址连接到您的设备。这意味着系统已经安装完成，组件安装将继续进行。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

在这种情况下，我们可以**拔出跳线**并重启 reComputer。然后我们需要通过 HDMI 将 reComputer 连接到显示器，输入您在**步骤 4** 中输入的密码，并登录到主界面。

此时您需要将 reComputer 连接到与 Linux 主机 PC 相同的局域网，并使用命令 `ifconfig` 确定 Jetson 的 **IP 地址**。

回到 Linux 主机 PC 并输入您刚刚获得的 IP 地址。NVIDIA SDK Manager 将尝试连接到 Jetson 设备并继续完成下一个 SDK 组件的安装。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

当您看到以下窗口出现时，安装已经完成。您可以开始使用 Jetson 或继续按照以下步骤完成新系统的一些基本配置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

:::note
在重新启动系统之前，请务必拔掉跳线并退出强制恢复模式。
:::
</TabItem>

<TabItem value="Command Line" label="Command Line">

由于可以自由定制 BSP（NVIDIA Linux 驱动程序包），通过命令行刷写 JetPack 操作系统对于具有 Linux 知识基础的用户来说非常简单。

**步骤 1.** 下载合适的 NVIDIA Linux 驱动程序包

在 **Linux 主机 PC** 上，我们需要打开浏览器并访问 <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>。首先我们应该检查 Jetson Linux 的版本是否支持我们的 reComputer Jetson 模块。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack2.png" /></div>

找到合适的版本后，点击进入下载页面。找到并点击 "L4T Driver Package (BSP)" 和 "Sample Root Filesystem" 来下载驱动文件。文件名类似于 `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` 和 `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

作为示例，我们选择 NVIDIA L4T 35.1 版本，因为它作为 JetPack 5.0.2 的一部分包含在内，并支持 Jetson Xavier NX 模块。文件名为：

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

:::info
您也可以选择其他版本，如支持 Jetpack 4.6.2 的 NVIDIA L4T 32.7.2。
:::

**步骤 2.** 通过命令行解压包文件并组装 Rootfs

在 Linux 主机 PC 上，我们应该找到一个文件夹并存储之前下载的包文件。然后在该文件夹中打开命令行窗口（终端），使用下面的命令行来解压文件并组装 rootfs：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

:::note
`${}` 是您放置文件名称的地方。
:::

以 **NVIDIA L4T 35.1** 为例，下载的文件存储在 `/Desktop/L4T_Drivers` 中，因此我们在 '/Desktop/L4T_Drivers' 路径下打开命令行窗口（终端）并执行以下命令。

```sh
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

输出内容应该为：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

**步骤 3.** 将系统刷写到 reComputer

由于我们已经强制 reComputer J2021 进入恢复模式，并且模块是 Jetson Xavier NX。我们可以直接将系统刷写到 reComputer，执行以下命令：

```sh
sudo ./flash.sh jetson-xavier-nx-devkit-emmc mmcblk0p1
```

如果您使用 Jetson nano 模块，刷写命令如下：

```sh
sudo ./flash.sh jetson-nano-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

:::note
刷写 L4T 大约需要 10 分钟，在较慢的主机电脑上可能需要更长时间。
:::

此时，我们可以拔掉跳线，然后重新给 reComputer 上电以使用它。

</TabItem>

<TabItem value="With Seeed BSP (nano)" label="With Seeed BSP (nano)">

:::info

最近，NVIDIA 已更新了 DRAM 模块，Seeed 目前已发布了与此模块更新兼容的新固件。

如果在刷写官方 NVIDIA 镜像的过程中，系统因 DP 信号而冻结（表现为无法刷写并卡在 NVIDIA 界面），这证明您购买的是更新后的模块。在这种情况下，您需要刷写我们目前提供的出厂镜像。

当前这个出厂镜像与原始镜像的区别如下：

1. DP 配置已被修改（以防止某些模块上因 DP 信号导致系统冻结）。
2. SD 卡插槽默认设置为可用状态，无需额外修改设备树来启用 SD 卡插槽功能。
3. 镜像包含 Jetpack4.6.6。
4. 已纳入最新的 PCN。

:::

### 步骤 1. 下载合适的 NVIDIA Linux 驱动程序包

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack 版本</th>
      <th>下载链接</th>
      <th>SHA265</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.6.6</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV7LGr3R0VRDsgfFibgOgfsBam44-zEqOrQJoUKpHXEmRw?e=gJEHhU" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>138547DF526D19F737DEC27856C078217D15FE9160F2669DF57823916BAA260E</td>
    </tr>
  </tbody>
</table>
</div>

### 步骤 2. 通过命令行解压包文件并组装 Rootfs

在 Linux 主机 PC 上，我们应该找一个文件夹来存储之前下载的包文件。然后在该文件夹中打开命令行窗口（终端），使用下面的命令行来解压文件并组装 rootfs：

```sh
tar xpf  mfi_recomputer-nano-4g-4.6.6-32.7.6-2024-12-23.tbz2
cd mfi_jetson-nano-devkit-emmc
```

### 步骤 3. 将系统刷写到 reComputer

由于我们已经强制 reComputer J1010 进入恢复模式，并且模块是 Jetson Nano。我们可以直接将系统刷写到 reComputer，执行以下命令：

```bash
sudo ./nvmflash.sh --showlogs
```

</TabItem>

<TabItem value="With Seeed BSP (Xavier NX)" label="With Seeed BSP (Xavier NX)">

这里我们将在 reComputer 上安装 Jetpack 5.1.3。

**步骤 1：** 将对应您使用的 Jetson 模块的系统镜像下载到您的 Ubuntu PC：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetson 模块</th>
      <th>下载链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Xavier NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfKRq92vAAxEhDx43JOBDxkBCQvjy_-h8UC7HmWK6COMEg?e=PCDzib" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td>0cded5b093da648e5371c880037601d1593132780bb869c814ac21b11f2aae5c</td>
    </tr>
    <tr>
      <td>Xavier NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaNbv75ItvNHqdsj9LEW4E0BvP_CCTRWMyUvJOA2JUQv8g?e=lToSlK" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td>db960d3f0e31909aa443e3d4317c737de6cec4de9a7df7c09801fcb1574f4595</td>
    </tr>
  </tbody>
</table>
</div>

:::info
为了验证下载固件的完整性，您可以比较 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <文件>` 来获取下载文件的 SHA256 哈希值。如果得到的哈希值与 wiki 中提供的 SHA256 哈希值匹配，则确认您下载的固件是完整无损的。
:::

**步骤 2：** 解压下载的镜像文件：

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**步骤 3：** 导航到解压后的目录并执行以下命令将 jetpack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果刷写过程成功，您将看到以下输出

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer_J2021/flash-jetpack.png"/></div>

:::note
刷写命令可能需要运行 2-10 分钟。
:::

**步骤 4：** 使用板上的 HDMI 连接器将 J20 连接到显示器，并完成初始配置设置：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
请根据您的需要完成**系统配置**。
:::

</TabItem>

</Tabs>

## 故障排除

### NVIDIA SDK Manager 安装故障排除

各种安装错误的原因很多。以下是常见安装问题的检查清单，可能有助于您从损坏的安装中恢复。

1. 查看摘要表以识别哪个组件失败了。

    a. 展开状态为"Error"的组。

    b. 当您找到失败的组件时，点击"Install Error"右侧的详细信息图标，将重定向到终端选项卡，该选项卡将显示确切的错误。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. 如果错误与环境问题相关，例如损坏的 apt 存储库或缺少先决条件，请尝试手动修复，然后点击"Retry Failed Items"按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. 重试安装还可以通过其他两种方式进行：

    a. 从**使用 SDK Manager 刷写到 eMMC -- 步骤 3**，使用"Repair/Uninstall"按钮进入"Manage NVIDIA SDKs"页面。如果需要，展开状态为"Broken"的 SDK，然后点击相关部分（Host 或 Target）的"Repair"。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. 在**使用 SDK Manager 刷写到 eMMC -- 步骤 3**，选择所需的 SDK 并重新运行安装。

5. 最后，尝试卸载并重新安装相关的 SDK。

### 使用命令行安装的故障排除

命令行安装方法相对简单，在使用强制恢复模式的场景中经常容易出错。

如果您在**使用命令行刷写到 eMMC -- 步骤 2**中遇到下面显示的错误，您可能没有成功让 Jetson-202 载板进入强制恢复模式。请特别注意，不要在 Jetson-202 载板通电的情况下进入强制恢复模式，因为这是无效的。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

如果您在**使用命令行刷写到 eMMC -- 步骤 3**中无法进入系统并卡在启动显示命令行，您可能没有退出强制恢复模式。同样，在 Jetson-202 载板通电时拔掉跳线来退出强制恢复模式是无效的，这些都需要在断电时完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
如果需要更多存储空间，我们可以使用 SD 卡来扩展容量，或者将系统烧录到 SD 卡上，您可以参考我们推荐的解决方案 [在 SD 卡上刷写系统](/cn/J101_Enable_SD_Card)
:::

## 资源

[reComputer J202x 数据手册](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202x-datasheet.pdf)

[reComptuer J202x 载板原理图](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[reComputer J202x 3D 文件](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetson 系列产品目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio 边缘AI成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson 系列对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson 设备单页介绍](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
