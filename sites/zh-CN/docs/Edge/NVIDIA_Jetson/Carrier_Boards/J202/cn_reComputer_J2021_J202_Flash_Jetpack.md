---
description: reComputerJ2021 | J202
title: J202 载板
keywords:
  - Edge 
  - Jetson
  - reComputer JetPack™_OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_J2021_J202_Flash_Jetpack
sku: 102991695, 102991714, 110061402, 110061481
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

reComputer J202 的设计和功能几乎与 NVIDIA® Jetson Xavier NX™ 载板相同，可完美搭配 Jetson Nano/Xavier NX/TX2 NX 模组使用，板载 4 路 USB 3.2 Gen 2 接口、用于 WIFI 的 M.2 Key E、用于 SSD 的 M.2 Key M、RTC、CAN、Raspberry Pi 40 针 GPIO 等。

## 特性

- **完美适配：** 为 Jetson Nano/Xavier NX/TX2 NX（260-pin SODIMM）设计。
- **外设丰富：** 更高性能稳定性，包含 USB 3.1 接口（4x）、用于 WIFI 的 M.2 Key E、用于 SSD 的 M.2 Key M、RTC、CAN、Raspberry Pi 40 针 GPIO 等。
- **高度通用：** 适用于复杂的 AI 图形应用。
- **认证齐全：** 包含 FCC、CE、RoHS。
- **灵活定制：** 在 J202 原始设计基础上，提供更换配件模组、Logo 以及硬件接口修改等服务。

:::note

由于 Jetson Nano 只有一条 PCIe 通道，如果模组使用 Jetson Nano 连接到 J202 载板，则只能选择用于 SSD 的 M.2 Key M。

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
      <td>1x RJ-45 千兆以太网（10/100/1000M）</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E，用于 WiFi/Bluetooth 模组</td>
    </tr>
    <tr>
      <td rowspan={7}>I/O</td>
      <td>USB</td>
      <td>4x USB 3.1 Type-A（Xavier NX 为 10Gbps，Nano 为 5Gbps）<br/> 1x USB2.0 Type-C（Device 模式）</td>
    </tr>
    <tr>
      <td>摄像头</td>
      <td>2x CSI</td>
    </tr>
    <tr>
      <td>显示</td>
      <td>1x HDMI 2.1，1x DP</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td>1x 风扇连接器</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>1x CAN（仅适用于 Nvidia Xavier 系列）</td>
    </tr>
    <tr>
      <td>多功能接口</td>
      <td>1x 40 针扩展排针 <br/> 1x 12 针控制和 UART 排针</td>
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
      <td rowspan={2}>机械结构</td>
      <td>尺寸（宽 x 深）</td>
      <td>100mm x 80mm</td>
    </tr>
    <tr>
      <td>安装方式</td>
      <td>桌面、壁挂</td>
    </tr>
    <tr>
      <td colspan={2}>工作温度</td>
      <td>10℃~60℃</td>
    </tr>
  </tbody>
</table>
</div>

## 硬件概览

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_1.jpg"/></div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_2.jpg"/></div>

## 支持的模组

- [NVIDIA® Jetson Nano™ 4GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Nanotm-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 8GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 16GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-16GB-1.html)

## 刷写 JetPack

:::danger
刷写 JetPack 会清除设备上的所有数据。请谨慎操作。

如果你购买的是整机系统而不仅仅是载板，系统中已经预装了 JetPack 操作系统，你可以直接开机使用。不过，如果你愿意，也可以按照下面的教程安装新的操作系统。
:::

以下内容将演示如何将 JetPack 4.6.1 系统刷写到 J2021。你也可以参考这一流程，将你所需版本的 JetPack 刷写到其他设备上。

:::info
请参考[此处](https://developer.nvidia.com/embedded/jetson-linux-archive)以确定不同 [Jetson modules](#支持的模组) 所支持的系统版本。
:::

### 前置条件

- 运行 **Ubuntu 18.04 OS 或 Ubuntu 20.04 OS** 的 **主机电脑（Host Computer）**
- reComputer J1020/J2021/J2022 或 J202 载板 + Nvidia Jetson 模组
- 9V-12V/5A 电源适配器
- USB Type-C 线缆
- 跳线帽或母对母杜邦线

### 进入 Force Recovery 模式

在进行安装步骤之前，我们需要确保 reComputer 处于 force recovery 模式。

**步骤 1.** 开始之前，需要先断开 reComputer 的电源。

**步骤 2.** 要进入 recovery 模式，需要使用跳线连接 **FC REC** 和 **GND**。

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">按键排针</th>
      <th align="center">描述</th>  
      <th align="center">按键排针</th>
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

**步骤 3.** 使用 12V/5A 直流电源线从 reComputer 左侧为其供电，并使用 Type-C 线缆将 reComputer 右侧与 Linux 主机 PC 连接。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png" /></div>

**步骤 4.** 在 Linux 主机 PC 屏幕上，右键单击鼠标打开 Terminal，并输入命令 `lsusb`。当返回的内容中包含 `ID 0955:xxxx NVidia Corp.` 时，表示你的 J202 载板已进入 force recovery 模式，可以继续后续操作。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

:::note

- 对于 NVIDIA® Jetson Nano™：0955:7f21 NVidia Corp
- 对于 NVIDIA® Jetson Xavier™ NX：0955:7e19 NVidia Corp

:::

:::caution
Jetson-Nano 上的 SPI 接口默认与 GPIO 复用，且未启用。请参考[**本指南**](/cn/enable_spi_interface_on_jetsonnano)了解如何启用它。
:::

### 刷写到 Jetson

有两种可选方式将 JetPack OS 刷写到 reComputer J2021。对于刚接触 NVIDIA Jetson 的初学者，我们强烈推荐使用 NVIDIA SDK Manager：

- [通过 NVIDIA SDK Manage 刷写 JetPack OS](#通过-nvidia-sdk-manage-刷写-jetpack-os)
- [通过命令行刷写 JetPack OS](#通过命令行刷写到-emmc)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="SDK Manager" label="SDK Manager">

NVIDIA SDK Manager 是一个集成工具，打包了开发者软件，并为 NVIDIA SDK 提供端到端的开发环境搭建方案。因此，推荐初学者使用。

:::note
 在本教程中，我们在主机电脑上使用 Ubuntu 18.04 LTS 操作系统，本指南中要安装的 Jetpack 版本为 4.6.1。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

**步骤 1.**  在 Linux 主机 PC 上安装 NVIDIA SDK Manager

首先，你需要创建一个 <a href="https://developer.nvidia.com/login" target="_blank">NVIDIA 账号</a> 才能使用 sdkmanager。然后在 Linux 主机 PC 上，从 NVIDIA 官方网站下载 <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank">NVIDIA SDK Manager</a>。

**步骤 2.**  打开 NVIDIA SDK Manager 并登录

在 Linux 主机 PC 屏幕上，我们可以右键单击鼠标打开 Terminal。然后输入下面的命令来启动 SDK Manager：

```bash
sdkmanager
```

:::note
第一次使用 NVIDIA SDK Manager 时，会弹出网页提示你使用之前注册的 NVIDIA 账号登录。
:::

**步骤 3.**  选择目标设备

由于我们已经连接好了 reComputer J2021，会弹出一个窗口让你选择硬件设备。

reComputer J2021 搭载的是 **NVIDIA Jetson Xavier 8GB 模组**，因此我们可以选择 `Jetson Xavier NX`（第一个选项）。

<!-- <div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/select_target_device.png" />
</div> -->

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/1.png"/></div>

:::info
请注意，不同版本的 SDK Manager 界面可能略有差异。请根据你的实际情况选择合适的选项。
:::

在第一个界面中，还有更多选项供你选择：

- 需要在 Product Category 面板中选择 **Jetson**。
- 在 Hardware Configuration 面板中，我们建议你**不要选择 Host Machine**。这会花费更多时间在你当前的 Ubuntu 主机上安装 NVIDIA 组件。如果有需要，你也可以选择它。
- 在 Target Operating System 面板中，我们可以选择不同的**操作系统**和 **JetPack 版本**。但要注意 JetPack 的版本，不同模组可能支持不同类型的 JetPack，例如 `JetPack 4.6.1`、`JetPack 5.1.x` 等。这里我们推荐使用 **JetPack 4.6.1**。
- 在 Additional SDKs 中，由于 eMMC 的存储空间只有 16GB，如果在这里安装 DeepStream，将会出现内存不足的问题。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

点击 Continue 继续下一步。

**Step 4.**  检查需要的组件

在 **Details and License** 中，你可以展开 host components 和 target components 面板，查看将要安装到系统中的组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

如果你只需要安装系统，可以取消勾选 SDK 组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

:::tip
在选择要安装的组件时，你可能需要关注已使用的容量。内置 eMMC 大小只有 16GB，请根据实际需求合理分配和使用这部分空间。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
经过实际测试，在安装完整的 SDK 组件后，eMMC 只剩下大约 500MB 的空间。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
如果你想查看如何解决容量不足的问题，请参考：

https://wiki.seeedstudio.com/cn/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space .
:::

如果你希望 SDK Manager 将所有文件下载到默认路径以外的位置，请前往屏幕底部的 Download & Install Options，然后选择你希望使用的路径。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

选择 Continue 继续下一步。

**Step 5.** 安装系统

在安装开始之前，SDK Manager 会提示你输入 `sudo` 密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

过一会儿，我们会被要求为 reComputer 设置新系统。由于我们是手动强制进入恢复模式，这里选择 `Manual setup: set the target to Force Recovery Mode via manual operations`。同时，我们选择默认的 **Pre-Config**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

之后，我们需要为 reComputer 上的新 Jetson 系统输入名称和密码，这些由你自行设置。

准备就绪后，点击 `Flash` 继续。

显示器会显示软件下载和安装的进度。请耐心等待安装完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

**(Optional)Step 6.** 安装 SDK 组件

如果你在之前的 **step 4** 中勾选了组件安装，就需要执行此步骤。

稍等片刻，你会看到 NVIDIA SDK Manager 中弹出一个新窗口，提示你需要通过 IP 地址连接到设备。这意味着系统已经安装完成，接下来将继续安装组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

在这种情况下，我们可以**拔掉跳线帽**并重启 reComputer。然后需要通过 HDMI 将 reComputer 连接到显示器，输入你在 **step 4** 中设置的密码，并登录到主界面。

此时你需要将 reComputer 与 Linux host PC 连接到同一局域网，并使用 `ifconfig` 命令确定 Jetson 的 **IP address**。

回到 Linux host PC，输入刚刚获取到的 IP 地址。NVIDIA SDK Manager 会尝试连接到 Jetson 设备，并继续完成后续 SDK 组件的安装。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

当你看到如下窗口出现时，说明安装已经完成。你可以开始使用 Jetson，或者继续按照下面的步骤完成新系统的一些基础配置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

:::note
在重新上电进入系统之前，一定要拔掉跳线帽并退出强制恢复模式。
:::
</TabItem>

<TabItem value="Command Line" label="Command Line">

得益于可以自由定制 BSP（NVIDIA Linux Driver Package），对于具备 Linux 基础知识的用户来说，通过命令行刷写 JetPack OS 会非常简单。

**Step 1.** 下载合适的 NVIDIA Linux Driver Package

在 **Linux host PC** 上，我们需要打开浏览器并访问 <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>。首先我们需要检查该版本的 Jetson Linux 是否支持我们的 reComputer Jetson 模组。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack2.png" /></div>

找到合适的版本后，点击进入下载页面。找到并点击 "L4T Driver Package (BSP)" 和 "Sample Root Filesystem" 下载驱动文件。文件名类似于 `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` 和 `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

作为示例，我们选择 NVIDIA L4T 35.1 版本，因为它包含在 JetPack 5.0.2 中，并且支持 Jetson Xavier NX 模组。文件名为：

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

:::info
你也可以选择其他版本，例如支持 Jetpack 4.6.2 的 NVIDIA L4T 32.7.2。
:::

**Step 2.**  通过命令行解压安装包并组装 rootfs

在 Linux host PC 上，我们需要找到一个文件夹来存放之前下载的安装包文件。然后在该文件夹下打开命令行窗口（Terminal），并使用下面的命令行来解压文件并组装 rootfs：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

:::note
`${}` 是你放置文件名的位置。
:::

以 **NVIDIA L4T 35.1** 为例，下载的文件存放在 `/Desktop/L4T_Drivers` 中，因此我们在 `/Desktop/L4T_Drivers` 路径下打开命令行窗口（Terminal），并执行以下命令。

```sh
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

输出应类似如下：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

**Step 3.**  将系统刷写到 reComputer

由于我们已经将 reComputer J2021 强制进入恢复模式，并且模组为 Jetson Xavier NX，我们可以直接执行以下命令将系统刷写到 reComputer：

```sh
sudo ./flash.sh jetson-xavier-nx-devkit-emmc mmcblk0p1
```

如果你使用的是 Jetson nano 模组，刷写命令如下：

```sh
sudo ./flash.sh jetson-nano-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

:::note
刷写 L4T 大约需要 10 分钟，在主机性能较慢的情况下可能需要更长时间。
:::

此时，我们可以拔掉跳线帽，然后再次给 reComputer 上电使用。

</TabItem>

<TabItem value="With Seeed BSP (nano)" label="With Seeed BSP (nano)">

:::info

近期，NVIDIA 更新了 DRAM 模组，Seeed 目前已经发布了与该模组更新兼容的新固件。

如果在刷写官方 NVIDIA 镜像的过程中，由于 DP 信号导致系统卡死（表现为无法刷写并卡在 NVIDIA 界面），则说明你购买的是更新后的模组。在这种情况下，你需要刷写我们目前提供的出厂镜像。

当前该出厂镜像与原始镜像的差异如下：

1. 修改了 DP 配置（防止部分模组因 DP 信号导致系统卡死）。
2. 默认将 SD 卡槽设置为可用状态，无需额外修改设备树来启用 SD 卡槽功能。
3. 镜像内置 Jetpack4.6.6。
4. 已合入最新的 PCN。

:::

### Step 1. 下载合适的 NVIDIA Linux Driver Package

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack Version</th>
      <th>Download Link</th>
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

### 步骤 2.  解压缩软件包文件并通过命令行组装 rootfs

在 Linux 主机 PC 上，我们需要先找到一个文件夹并将之前下载的软件包文件存放其中。然后在该文件夹中打开一个命令行窗口（Terminal），并使用下面的命令行来解压这些文件并组装 rootfs：

```sh
tar xpf  mfi_recomputer-nano-4g-4.6.6-32.7.6-2024-12-23.tbz2
cd mfi_jetson-nano-devkit-emmc
```

### 步骤 3.  将系统烧录到 reComputer

由于我们已经将 reComputer J1010 强制进入恢复模式，并且模块是 Jetson Nano。我们可以直接执行以下命令将系统烧录到 reComputer 中：

```bash
sudo ./nvmflash.sh --showlogs
```

</TabItem>

<TabItem value="With Seeed BSP (Xavier NX)" label="使用 Seeed BSP（Xavier NX）">

这里我们将在 reComputer 上安装 Jetpack 5.1.3。

**步骤 1：** 将与你所使用 Jetson 模块对应的系统镜像下载到 Ubuntu PC：

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
为了验证下载固件的完整性，你可以对比 SHA256 哈希值。

在 Ubuntu 主机上打开终端，运行命令 `sha256sum <File>` 获取下载文件的 SHA256 哈希值。如果得到的哈希值与 wiki 中提供的 SHA256 哈希值一致，则说明你下载的固件是完整且未损坏的。
:::

**步骤 2：** 解压下载的镜像文件：

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**步骤 3：** 进入解压后的目录，并执行以下命令将 jetpack 系统烧录到 NVMe SSD：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果烧录过程成功，你将看到如下输出

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer_J2021/flash-jetpack.png"/></div>

:::note
烧录命令可能会运行 2-10 分钟。
:::

**步骤 4：** 使用板载的 HDMI 接口将 J20 连接到显示器，并完成初始配置设置：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
请根据你的需求完成 **System Configuration**。
:::

</TabItem>

</Tabs>

## 故障排查

### 使用 NVIDIA SDK Manager 安装时的故障排查

导致各种安装错误的原因有很多。下面是常见安装问题的检查清单，可以帮助你从损坏的安装中恢复。

1. 查看摘要表以确定哪个组件失败。

    a. 展开状态为 "Error" 的分组。

    b. 找到失败的组件后，点击 Install Error 右侧的详情图标，会跳转到 Terminal 选项卡，在那里可以看到具体的错误信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. 如果错误与环境问题有关，例如 apt 源损坏或缺少先决条件，请尝试手动修复，然后点击 Retry Failed Items 按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. 还有两种方式可以重试安装：

    a. 在 **Flashing to eMMC with SDK Manager -- Step 3** 中，使用 Repair/Uninstall 按钮进入 Manage NVIDIA SDKs 页面。如有需要，展开状态为 "Broken" 的 SDK，然后为相关部分（Host 或 Target）点击 Repair。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. 在 **Flashing to eMMC with SDK Manager -- Step 3** 中，选择所需的 SDK 并重新执行安装流程。

5. 最后，尝试卸载并重新安装相关 SDK。

### 使用命令行安装时的故障排查

命令行安装方法相对简单，在使用强制恢复模式的场景中也更容易出错。

如果你在 **Flashing to eMMC with command-line -- Step 2** 中遇到如下所示的错误，很可能是没有成功让 Jetson-202 Carrier Board 进入强制恢复模式。请特别注意，不要在 Jetson-202 Carrier Board 上电的情况下进入强制恢复模式，因为这样是无效的。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

如果你在 **Flashing to eMMC with command-line -- Step 3** 中无法进入系统，而是卡在开机显示的命令行界面上，很可能是你没有退出强制恢复模式。同样地，在 Jetson-202 Carrier Board 上电的情况下拔掉跳线以退出强制恢复模式也是无效的，这些操作都需要在断电状态下完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
如果需要更多存储空间，我们可以使用 SD 卡扩展容量，或者将系统烧录到 SD 卡上，你可以参考我们推荐的解决方案 [Flash System on SD card](/cn/J101_Enable_SD_Card)
:::

## 资源

[reComputer J202x 数据手册](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202x-datasheet.pdf)

[reComputer J202x 3D 文件](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetson 系列目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio Edge AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson 系列对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson 设备一览](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
