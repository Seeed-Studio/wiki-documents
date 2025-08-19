---
description: 将 JetPack 刷写到 reComputer J4012（J401 承载板）
title: 刷写 Jetpack
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_J4012_Flash_Jetpack
last_update:
  date: 2024/6/12
  author: Lakshantha/Youjiang
---

# 将 JetPack 操作系统刷写到 J401 承载板

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/recomputer-j401.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-without-Power-Adapter-p-5637.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

J401 承载板是一款强大的扩展板，支持 NVIDIA Jetson Orin NX/Nano 模块。它配备了 1 个千兆以太网端口、1 个 CAN 数据传输接口、M.2 Key M 接口用于 SSD、M.2 Key E 接口用于 WiFi/蓝牙、2 个 CSI 接口以及 1 个 HDMI 接口用于高质量视频捕获和显示。此外，它还包含 4 个 USB 3.2 接口、一个风扇、RTC 和灵活的 9-19V 电源输入。这些特性使其在各种工业自动化系统中可靠运行，并能构建强大的 AI 应用。

## 特性

- **卓越性能的承载板：** 支持 NVIDIA Jetson Orin NX/Nano 模块，利用强大的计算能力轻松应对复杂任务
- **多样化的连接性：** 提供 1 个千兆以太网端口用于网络连接，4 个 USB 3.2 Type-A（10Gbps）端口，1 个 USB2.0 Type-C 端口，1 个 CAN 接口用于快速数据传输
- **灵活的存储和无线扩展：** 配备 1 个 M.2 Key M 2280 和 1 个 M.2 Key E 插槽，提供充足的空间用于灵活的存储和无线连接扩展
- **支持高级外设：** 配备 2 个 15 针 CSI 摄像头接口，1 个 HDMI 2.1，1 个风扇，1 个 RTC，用于多种外设
- **宽范围输入电压：** 支持 9-19V DC，提供灵活的电源选项

## 规格参数

<table>
  <thead>
    <tr>
      <th>规格参数</th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html?queryID=e8d0ae9b2e338e8a860f07dacef58f6e&objectID=5631&indexName=bazaar_retailer_products">reComputer J3010</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">reComputer J3011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html?queryID=5577f61da645361a7aad9179bc04efc2&objectID=5629&indexName=bazaar_retailer_products">reComputer J4011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html?queryID=639ef60cde4a38ccc9ff2f82070d4854&objectID=5628&indexName=bazaar_retailer_products">reComputer J4012</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>模块</td>
      <td>Jetson Orin Nano 4GB</td>
      <td>Jetson Orin Nano 8GB</td>
      <td>Jetson Orin NX 8GB</td>
      <td>Jetson Orin NX 16GB</td>
    </tr>
    <tr>
      <td>AI 性能</td>
      <td>20 TOPS</td>
      <td>40 TOPS</td>
      <td>70 TOPS</td>
      <td>100 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>512 核 NVIDIA Ampere 架构 GPU，带 16 个 Tensor 核心</td>
      <td>1024 核 NVIDIA Ampere 架构 GPU，带 32 个 Tensor 核心</td>
      <td colSpan={2}>1024 核 NVIDIA Ampere 架构 GPU，带 32 个 Tensor 核心</td>
    </tr>
    <tr>
      <td>GPU 最大频率</td>
      <td colSpan={2}>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>6 核 Arm® Cortex®-A78AE v8.2 64 位 CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6 核 Arm® Cortex®-A78AE v8.2 64 位 CPU 1.5MB L2 + 4MB L3</td>
      <td>8 核 Arm® Cortex®-A78AE v8.2 64 位 CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU 最大频率</td>
      <td colSpan={2}>1.5 GHz</td>
      <td colSpan={2}>2 GHz</td>
    </tr>
    <tr>
      <td>内存</td>
      <td>4GB 64 位 LPDDR5<br />34 GB/s</td>
      <td>8GB 128 位 LPDDR5<br />68 GB/s</td>
      <td>8GB 128 位 LPDDR5 102.4GB/s</td>
      <td>16GB 128 位 LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>深度学习加速器</td>
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>DLA 最大频率</td>
      <td colSpan={2}>/</td>
      <td colSpan={2}>614 MHz</td>
    </tr>
    <tr>
      <td>视觉加速器</td>
      <td colSpan={2}>/</td>
      <td colSpan={2}>1x PVA v2</td>
    </tr>
    <tr>
      <td>存储</td>
      <td colSpan={4}>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>视频编码器</td>
      <td colSpan={2}>支持 1080p30，由 1-2 个 CPU 核心处理</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>视频解码器</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265) | 2x 4K60 (H.265) | 4x 4K30 (H.265)<br />9x 1080p60 (H.265) | 18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>显示</td>
      <td colSpan={4}>1* HDMI 2.1</td>
    </tr>
    <tr>
      <td>CSI 摄像头</td>
      <td colSpan={4}>2* CSI （2 通道 15 针）</td>
    </tr>
    <tr>
      <td>网络</td>
      <td colSpan={4}>1* 千兆以太网 (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4* USB 3.2 Type-A (10Gbps); 1* USB2.0 Type-C (设备模式)</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td colSpan={4}>1* M.2 Key M</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td colSpan={4}>1* M.2 Key E</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td colSpan={4}>1* 4 针风扇接口 (5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={4}>1* CAN</td>
    </tr>
    <tr>
      <td>多功能接口</td>
      <td colSpan={4}>1* 40 针扩展头，1* 12 针控制和 UART 接口</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={4}>RTC 2 针，RTC 插槽（支持 CR1220，但不包含）</td>
    </tr>
    <tr>
      <td>电源</td>
      <td colSpan={4}>9-19V</td>
    </tr>
    <tr>
      <td>电源适配器</td>
      <td colSpan={4}>不包含电源适配器</td>
    </tr>
    <tr>
      <td>温度</td>
      <td colSpan={4}>-10℃~60℃</td>
    </tr>
    <tr>
      <td>机械尺寸</td>
      <td colSpan={4}>130mm x 120mm x 58.5mm</td>
    </tr>
  </tbody>
</table>

## 硬件概览

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-J4012/6.png"/></div>

## 刷写 JetPack

在这里，我们将向您展示如何将 [Jetpack](https://developer.nvidia.com/embedded/jetpack) 刷写到连接到 reComputer J4012/J4011/J3010 和 J3011 的 NVMe SSD 上。这些设备内部均配备 J401 承载板，刷写过程对所有设备都是相同的。

reComputer J40/J30 系列随附的 NVMe SSD 上预装了 JetPack 5.1，因此您无需重新刷写。然而，如果您想重新刷写 JetPack，可以按照本指南操作。

### 支持的模块
- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html) 
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer) 
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html) 
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html) 

### 前置条件

- Ubuntu 主机电脑
- reComputer J4012/J4011/J3010 或 J3011
- USB Type-C 数据传输线

:::info
我们建议您使用物理 Ubuntu 主机设备，而非虚拟机。
请参考下表准备主机设备。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td rowspan="2"> JetPack 版本 </td>
        <td class="dbon" colspan="3"> Ubuntu 版本（主机电脑） </td>
    </tr>
    <tr>
        <td> 18.04 </td>
        <td> 20.04 </td>
        <td> 22.04 </td>
    </tr>
    <tr>
        <td> JetPack 5.x </td>
        <td> ✅ </td>
        <td> ✅ </td>
        <td> </td>
    </tr>
    <tr>
        <td> JetPack 6.x </td>
        <td> </td>
        <td> ✅ </td>
        <td> ✅ </td>
    </tr>
  </tbody>
</table>

:::

### 进入强制恢复模式

:::note
- 我们不建议使用虚拟机和基于 ARM 架构的 Ubuntu 进行刷写。
- 在进行安装步骤之前，我们需要确保开发板处于强制恢复模式。
:::

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/j401_set_recovery.gif" /></div>

<details>

<summary> 分步操作 </summary>

**步骤 1.** 使用跳线将 **FC REC** 引脚和 **GND** 引脚连接。

<table align="center">
<thead>
  <tr>
    <th> </th>
    <th>按钮引脚</th>
    <th>描述</th>
    <th>按钮引脚</th>
    <th>描述</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="6"><div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-J4012/1.png"/></div></td>
    <td>1</td>
    <td>PWR BTN</td>
    <td>7</td>
    <td>AUTO ON</td>
  </tr>
  <tr>
    <td>2</td>
    <td>GND</td>
    <td>8</td>
    <td>DIS</td>
  </tr>
  <tr>
    <td>3</td>
    <td>FC REC</td>
    <td>9</td>
    <td>UART TXD</td>
  </tr>
  <tr>
    <td>4</td>
    <td>GND</td>
    <td>10</td>
    <td>UART RXD</td>
  </tr>
  <tr>
    <td>5</td>
    <td>SYS RET</td>
    <td>11</td>
    <td>LED +</td>
  </tr>
  <tr>
    <td>6</td>
    <td>GND</td>
    <td>12</td>
    <td>LED -</td>
  </tr>
</tbody>
</table>

**步骤 2.** 通过连接电源适配器附带的电缆为 reComputer 供电，并使用 USB Type-C 数据传输线将开发板与 Ubuntu 主机电脑连接。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/2.png"/></div>

**步骤 3.** 在 Linux 主机电脑上，打开终端窗口并输入命令 `lsusb`。如果返回的内容根据您使用的 Jetson SoM 显示以下输出之一，则说明开发板已进入强制恢复模式。

- 对于 Orin NX 16GB: **0955:7323 NVidia Corp**
- 对于 Orin NX 8GB: **0955:7423 NVidia Corp**
- 对于 Orin Nano 8GB: **0955:7523 NVidia Corp**
- 对于 Orin Nano 4GB: **0955:7623 NVidia Corp**

以下图片为 Orin NX 16GB 的示例：

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/></div>

**步骤 4.** 移除跳线。

</details>

### 使用单条命令刷写设备

<details>

<summary> 使用单条命令刷写设备 </summary>

reComputer Jetson J30/40 提供了一键刷写脚本，支持刷写 Jetpack 5.1.1、5.1.2 和 6.0。目前，Jetpack 6.1 和其他系列 reComputer Jetson 的一键刷写功能正在测试中，未来将向所有用户开放。

```bash
wget -O ./flashing.sh https://files.seeedstudio.com/OSHW_Jetson/flashing.sh  && sudo chmod 777 ./flashing.sh && ./flashing.sh
```

<iframe width="960" height="480" src="https://www.youtube.com/embed/_YfpJAhhT-g?si=OJxCcPqWauYEp9LR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

:::caution
免责声明：一键刷写脚本旨在加快 Jetpack 的刷写速度。目前版本为测试版，可能存在许多问题，敬请谅解。如果遇到刷写问题，请按照下方的 `逐步刷写设备` 指南操作，并在我们的 [Discord Jetson 频道](https://discord.com/channels/862602258452578314/930732339624026152) 中反馈问题。我们会及时修复并在未来改进此功能。
:::

</details>

### 逐步刷写设备

:::note
在开始刷写之前，需要注意的是 Jetson Orin NX 模块仅支持 JetPack 5.1 及以上版本，而 Jetson Orin Nano 模块仅支持 JetPack 5.1.1 及以上版本。
:::

首先，在 Ubuntu 主机电脑上安装以下必要的依赖项，然后再进行 JetPack 的刷写。

```sh
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```

<!-- 代码 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
NVIDIA 已更新其模块中使用的 DRAM。为了确保与新模块的兼容性，我们已相应更新 JetPack。当前稳定且受支持的版本为 `JetPack 5.1.3`。
如果您的模块上的 DRAM 来自 `Hynix`（可以通过芯片封装上的标记识别），建议刷写 `JetPack 5.1.3`。
:::

<Tabs>
<TabItem value="JP5.1.1" label="JP5.1.1">

这里我们将使用 NVIDIA L4T 35.3.1 在 reComputer 上安装 Jetpack 5.1.1。

**步骤 1：** 在主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r3531) NVIDIA 驱动程序。所需的驱动程序如下所示：

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**步骤 2：** 解压 **Jetson_Linux_R35.3.1_aarch64** 和 **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64**，导航到包含这些文件的文件夹，应用更改并安装必要的前置条件：

```sh
tar xf Jetson_Linux_R35.3.1_aarch64
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**步骤 3（可选）：** 配置您的用户名、密码和主机名，以便设备启动后无需进入 Ubuntu 安装向导：

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例如（用户名："nvidia"，密码："nvidia"，设备名称："nvidia-desktop"）：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**步骤 4：** 将系统刷写到 NVMe SSD：

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

如果刷写过程成功，您将看到以下输出：

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

现在，您可以将鼠标、键盘和显示器连接到 Jetson 设备。设备已准备好使用！

:::tip
如果您的 Jetson 设备打开桌面需要很长时间，请重新连接电源。
:::

**步骤 5（可选）：** 安装 Nvidia Jetpack SDK

请在 **Jetson 设备** 上打开终端并执行以下命令：

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

</TabItem>

<TabItem value="JP5.1.2" label="JP5.1.2">

这里我们将使用 NVIDIA L4T 35.4.1 在 reComputer 上安装 Jetpack 5.1.2。

**步骤 1：** 在主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r3541) NVIDIA 驱动程序。所需的驱动程序如下所示：

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**步骤 2：** 解压 **Jetson_Linux_R35.4.1_aarch64** 和 **Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64**，导航到包含这些文件的文件夹，应用更改并安装必要的前置条件：

```sh
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

现在我们需要应用 NVIDIA 提供的补丁，该补丁是 JP5.1.2 所需的，具体说明请参见 [此处](https://docs.nvidia.com/jetson/archives/r35.4.1/ReleaseNotes/Jetson_Linux_Release_Notes_r35.4.1.pdf) 的官方 NVIDIA JetPack 发布说明第 4.2.3 节。

**步骤 3：** 导航到以下目录：

```sh
cd Linux_for_Tegra/bootloader/t186ref/BCT
```

**步骤 4：** 打开文件 **"tegra234-mb2-bct-scr-p3767-0000.dts"**，并在 **tfc** 部分下添加以下内容：

```sh
tfc {
    reg@322 { /* GPIO_M_SCR_00_0 */
    exclusion-info = <2>;
    value = <0x38008080>;
    };
```

**步骤 5（可选）：** 导航到 **"Linux_for_Tegra"** 目录，并输入以下命令以配置您的用户名、密码和主机名，以便设备启动后无需进入 Ubuntu 安装向导：

```sh
cd Linux_for_Tegra
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例如（用户名："nvidia"，密码："nvidia"，设备名称："nvidia-desktop"）：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**步骤 6：** 将系统刷写到 NVMe SSD：

```bash

cp p3509-a02+p3767-0000.conf p3509-a02-p3767-0000.conf
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1   -c tools/kernel_flash/flash_l4t_nvme.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg"   --showlogs --network usb0 p3509-a02-p3767-0000 external

```

如果刷写过程成功，您将看到以下输出：

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

现在，您可以将鼠标、键盘和显示器连接到 Jetson 设备。设备已准备好使用！

:::tip
如果您的 Jetson 设备打开桌面需要很长时间，请重新连接电源。
:::

**步骤 7（可选）：** 安装 Nvidia Jetpack SDK

请在 **Jetson 设备** 上打开终端并执行以下命令：

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

</TabItem>

<TabItem value="JP5.1.3" label="JP5.1.3">

这里我们将在 reComputer 上安装 Jetpack 5.1.3。

**步骤 1：** 根据您使用的 Jetson 模块，将对应的系统镜像下载到您的 Ubuntu PC：

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
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXNAt15LoFlDhwXTWQQmv1QBpUhKxHSpUkeqp-lRVcRUaA?e=F4JonE" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td>03a48a3035cff720902636664608277b573ce392602c14f1b84c4a18ea9f59bb</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbaFgN0BKn5GnKZW_wG5_08BFzL6LOzYQKNIO8xBRwSakg?e=aZIbSg" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td>d35b47c01a1bb3be73b931841387af0401cbc7e88fdfd1f8f64cde1838084e0c</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZZm_6YlZHxEuEF-V6Xael0BsJ2PavdzoLApWzYLpB6m6w?e=OD8SO9" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td>3a5daef9d0a5cb07dd5ff6c595f84be6773ec6fad7c4eeff4e5de3fdfd10e8a5</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaTmJFMwMshJhqxb2Cys1okBJ2yjUBm80GGHGdrirYfB8Q?e=eXFEXB" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td>84ae723e6a78568dfb11aa85fc0a4f70504c58e2f339071b237aa0a4785a2591</td>
    </tr>
  </tbody>
</table>
</div>

:::info
要验证下载的固件的完整性，可以比较其 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 来获取下载文件的 SHA256 哈希值。如果生成的哈希值与 Wiki 中提供的 SHA256 哈希值匹配，则说明您下载的固件是完整且未损坏的。
:::

**步骤 2：** 解压下载的镜像文件：
```bash
sudo tar xpf mfi_xxxx.tar.gz
# 例如：sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**步骤 3：** 进入解压后的目录，并执行以下命令将 Jetpack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# 例如：cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果刷写过程成功，您将看到以下输出：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
刷写命令可能需要运行 2-10 分钟。
:::

**步骤 4：** 使用板载 HDMI 接口将 J401 连接到显示器，并完成初始配置设置。

:::info
请根据您的需求完成 **系统配置**。
:::

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

这里我们将使用 NVIDIA L4T 36.3 在 reComputer 上安装 Jetpack 6.0。

**步骤 1：** 根据您使用的 Jetson 模块，将对应的系统镜像下载到您的 Ubuntu PC：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetson 模块</th>
      <th>下载链接1</th>
      <th>下载链接2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EavQHXoSEg9PuLs4vuujXLcB0-GW6Ti1zHGL2UHzgS6TWg?e=J7oRrf" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td>
        <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EbEZRxHDtgBDjBrHK_7ltfEB6JBa3VGXLx3meNc0OJUL_g?e=8MNsTg" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td>20b38d9524327fd714c37cb293036006e070b5335d6b4f6978a862be51c3db52</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcfUdbmSiOBFo_Po-Cui3jkBDORKexZ4S43Jde5XApqdeQ?e=zqealW" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQawJy3jmKBAmJgHght-vVUBHbsC3vtlvMsYfW7vsie3LQ?e=vor3t3" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td>da966e7616ed86b45e184b6db9c3eb81e779a5f4524f6c3c5610e56c53532fe1</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EauK-aXvruxHsC1-bAmTwZkBNB0PsvPX6S6oV4Q1UrAUFw?e=rytWvU" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EeJP8SNF76BKiJg2e-FKNd4BhJwlWiMbLcT6Y286tRO7JQ?e=ct6qLf" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td>e0fa101c5df6f507d123c2332e9fedea0ac54f8a5253cb28e71fdff01147fa68</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcHfrgY9GxVNiwGh6YTB50cBCc5QcKgnGpTZQfv94x4VNw?e=Rl73Zh" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERQJluPq9X1LmpLXTSGZVMwBVg9ikWw8veG2aOdHv504Gw?e=hujab4" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td>80ebeac0a843baa2c3104ee6341d44f39a2cfab1c9c725e176c7b2a219b79dfc</td>
    </tr>
  </tbody>
</table>
</div>

:::info
要验证下载的固件的完整性，可以比较其 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 来获取下载文件的 SHA256 哈希值。如果生成的哈希值与 Wiki 中提供的 SHA256 哈希值匹配，则说明您下载的固件是完整且未损坏的。
:::

**步骤 2：** 解压下载的镜像文件：
```bash
sudo tar xpf mfi_xxxx.tar.gz
# 例如：sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**步骤 3：** 进入解压后的目录，并执行以下命令将 Jetpack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# 例如：cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果刷写过程成功，您将看到以下输出：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
刷写命令可能需要运行 2-10 分钟。
:::

**步骤 4：** 使用板载 HDMI 接口将 J401 连接到显示器，并完成初始配置设置：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
请根据您的需求完成 **系统配置**。
:::

**步骤 5：** 系统启动后，您需要执行以下命令重新激活无线网卡驱动：
```bash
sudo rm /lib/modules/5.15.136-tegra/build
sudo ln -s /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/ /lib/modules/5.15.136-tegra/build
sudo apt install -y iwlwifi-modules
```

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

这里我们将使用 NVIDIA L4T 36.4 在 reComputer 上安装 Jetpack 6.1。

**步骤 1：** 根据您使用的 Jetson 模块，将系统镜像下载到您的 Ubuntu PC：

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
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWCZOBNb9C9AoZe-mt23jLABZk942Lf0yopVGFJFTeL5DA?e=o7epES" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td> 3e53f484eb41a2d81f01ba2a0512a3c13d86d90f646207a488eaf77ae0cd5d69 </td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcvDRK7qgWhGty_H-P7yHZ8Bob3v9AEs_vFVd-zOC3WX5w?e=FmlfjD" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td> fc22a3d1669eb311cf237b8f4252896bfb71ff860c14f7a502c60fda5439d99d </td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeO8T8kNkpZGl9W2QfmnKYQBeXB8-M88aZWLMvPP7uARcA?e=fBuClA" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td> c2e48b41d284e4c98a2bc3409f1a1d09c61e4b60d6a5bdec3a33d084560a3bba </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY01pL5oq0FAmavoRY_p9DMBj4t-LHzRtEAh1UBQen3S3g?e=jUfauO" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td> b9e4f5889a66d055d967884980aee6357316acb562c4d713ef2fdb21f4644788 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
为了验证下载固件的完整性，您可以比较 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 来获取下载文件的 SHA256 哈希值。如果结果哈希值与 wiki 中提供的 SHA256 哈希值匹配，则说明您下载的固件是完整且未损坏的。
:::

**步骤 2：** 解压下载的镜像文件：
```bash
sudo tar xpf mfi_xxxx.tar.gz
# 例如：sudo tar xpf mfi_recomputer-orin-nx-16g-j401-6.1-36.4.0-2024-12-04.tar
```

**步骤 3：** 进入解压后的目录，并执行以下命令将 Jetpack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# 例如：cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果刷写过程成功，您将看到以下输出：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
刷写命令可能需要运行 2-10 分钟。
:::

**步骤 4：** 使用板载 HDMI 接口将 J401 连接到显示器，并完成初始配置设置：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
请根据您的需求完成 **系统配置**。
:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

这里我们将使用 NVIDIA L4T 36.4.3 在 reComputer 上安装 Jetpack 6.2。

**步骤 1：** 根据您使用的 Jetson 模块，将系统镜像下载到您的 Ubuntu PC：

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
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcyQPZeI9glGmENtN2a4A2oBizsgTMATEMEMZCPI06aWJg?e=ctPbmU" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td> D00349D7698A8BFEDB23B655B496117A650C18472A7E60365E0EF86889EDD301 </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ef6LSFMH_01PpeUCg2R_V9MB2mWyghzGIiDhV4eNHUeC-A?e=bAr2kO" target="_blank" rel="noopener noreferrer">下载</a>
      </td>
      <td> 2495E2275999283415F523D0F3D35594B21EAAD71CF87E4AA3BDC072A830B871 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
为了验证下载固件的完整性，您可以比较 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 来获取下载文件的 SHA256 哈希值。如果结果哈希值与 wiki 中提供的 SHA256 哈希值匹配，则说明您下载的固件是完整且未损坏的。
:::

:::note
请注意，由于启用 `super mode` 后功耗和热量增加，[reComputer J4011](https://www.seeedstudio.com/reComputer-J4011-p-5585.html) 和 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6Iko0MDEyIiwiY19zZWFyY2hfcmVzdWx0X3BvcyI6MiwiY190b3RhbF9yZXN1bHRzIjo4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D) 无法在最高模式下稳定运行。因此，此更新不包括这两款产品。
我们正在设计新版本的 reComputer，敬请期待！
:::

**步骤 2：** 解压下载的镜像文件：
```bash
sudo tar xpf mfi_xxxx.tar.gz
# 例如：sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.2-36.4.3-2025-04-07.tar.gz
```

**步骤 3：** 进入解压后的目录，并执行以下命令将 Jetpack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# 例如：cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果烧录过程成功，您将看到以下输出：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
烧录命令可能需要运行 2-10 分钟。
:::

**步骤 4：** 使用板上的 HDMI 接口将 J401 连接到显示器，并完成初始配置设置：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
请根据您的需求完成 **系统配置**。
:::

</TabItem>

</Tabs>

<!-- 代码结束 -->


## 资源
- [reComputer J30x 数据手册](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x 数据手册](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [reComputer J30/J40 原理图](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [reComputer J30/J40 3D 文件](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Seeed Jetson 系列目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio 边缘 AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson 系列比较](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson 设备一览](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetson 示例](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson 入门指南](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>