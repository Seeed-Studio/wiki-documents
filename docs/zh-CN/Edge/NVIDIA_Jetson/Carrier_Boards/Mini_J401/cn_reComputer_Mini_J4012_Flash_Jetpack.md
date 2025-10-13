---
description: 本文介绍如何在 J401-Mini 载板上刷写 JetPack 6.0，涵盖设备概述、准备工作、进入强制恢复模式以及使用一键脚本进行刷写，帮助用户快速部署 NVIDIA Jetson Orin 设备。
title: 刷写 Jetpack
keywords:
- reComputer Mini
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/recomputer-mini-1.webp
slug: /cn/recomputer_mini_j401_getting_started
last_update:
  date: 03/28/2025
  author: Dayu
---

# 将 JetPack 刷写到 J401-Mini 载板

reComputer Mini 是一款由 NVIDIA Jetson Orin Nano/Orin NX 模块驱动的微型 AI 计算机，可提供高达 100 TOPS 的 AI 性能。它在底部配备了 PCIe 端口，提供丰富的扩展能力，也可以灵活定制。整个系统设计用于嵌入到自主机器中，如无人机、巡逻机器人、配送机器人等。它可以直接使用 54V 直流输入，能够广泛应用于电池供电系统。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/recomputer-mini-1.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

<!-- Buy links -->

## 特性

- **出色的生产级 AI 性能：** 实现高达 **100 TOPS** 的 AI 性能，具有低功耗和低延迟特性，由 NVIDIA Orin SoC 构建，结合了 NVIDIA Ampere™ GPU 架构和 64 位操作能力，集成了先进的多功能视频和图像处理以及 NVIDIA 深度学习加速器。
- **手掌大小的边缘 AI 设备：** 紧凑尺寸为 **63mmx95mmx42mm**，配备 NVIDIA Jetson Orin NX 16GB 模块、Mini J401 载板、风扇和外壳。支持桌面和壁挂安装。
- **丰富 I/O 接口可扩展：** 包括多达 7x USB、1x DP 2.1、2x CSI、1x RJ45 千兆以太网、M.2 Key E、M.2 Key M、双通道 CAN 以及带扩展板的 GPIO。
- **加速解决方案上市：** 在 128GB NVMe SSD 上预装 **JetPack 6.0**、Linux OS BSP，支持 Jetson 软件和领先的 AI 框架。
- **规模化部署：** 支持 OTA、由 Allxon 和 Balena 提供的远程管理服务。
- **灵活定制：** 包括更换配件模块、标识以及基于 reComputer Mini J4012 原始设计的硬件接口修改。

## 规格参数

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin 系统模块</th>
    </tr>
    <tr>
      <th>规格</th>
      <th>reComputer Mini J3010</th>
      <th>reComputer Mini J3011</th>
      <th>reComputer Mini J4011</th>
      <th>reComputer Mini J4012</th>
    </tr>
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
      <td>512核 NVIDIA Ampere 架构 GPU，配备 16 个 Tensor 核心</td>
      <td colSpan={3}>1024核 NVIDIA Ampere 架构 GPU，配备 32 个 Tensor 核心</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>6核 Arm® Cortex®-A78AE v8.2 64位 CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6核 Arm® Cortex®-A78AE v8.2 64位 CPU 1.5MB L2 + 4MB L3</td>
      <td>8核 Arm® Cortex®-A78AE v8.2 64位 CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU 最大频率</td>
      <td colSpan={2}>1.5 GHz</td>
      <td colSpan={2}>2 GHz</td>
    </tr>
    <tr>
      <td>内存</td>
      <td>4GB 64位 LPDDR5<br />34 GB/s</td>
      <td>8GB 128位 LPDDR5<br />68 GB/s</td>
      <td>8GB 128位 LPDDR5 102.4GB/s</td>
      <td>16GB 128位 LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>深度学习加速器</td>
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>视频编码器</td>
      <td colSpan={2}>1080p30 由 1-2 个 CPU 核心支持</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>视频解码器</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265)<br />2x 4K60 (H.265)<br />4x 4K30 (H.265)<br />9x 1080p60 (H.265)<br />18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>载板</th>
    </tr>
    <tr>
      <td>存储</td>
      <td colSpan={4}>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>网络</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E 用于 WiFi/蓝牙模块</td>
    </tr>
    <tr>
      <td rowSpan={7}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>2x USB 3.2 Type-A (10Gbps)<br />1x USB 2.0 Micro-B (设备模式)<br />1x USB 3.0 Type-C (主机模式)<br />1x USB 2.0 JST-5pin (主机模式)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td colSpan={3}>1x UART; 1x UART 用于调试</td>
    </tr>
    <tr>
      <td>显示</td>
      <td colSpan={3}>1x DP 2.1 (包含在 Type-C 连接器中)</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td colSpan={3}>1x 4针风扇连接器 (5V PWM)</td>
    </tr>
    <tr>
      <td>按钮</td>
      <td colSpan={3}>1x 复位按钮; 1x 恢复按钮</td>
    </tr>
    <tr>
      <td>扩展端口</td>
      <td colSpan={3}>2x 60针高速连接器 (用于扩展板)<br />1x 10针电源连接器 (用于扩展板)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2针</td>
    </tr>
    <tr>
      <td>电源</td>
      <td colSpan={4}>1x XT30 连接器 (12-54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>扩展板</td>
    </tr>
    <tr>
      <td>网络</td>
      <td>以太网</td>
      <td colSpan={3}>1x RJ-45 千兆以太网 (10/100/1000M)</td>
    </tr>
    <tr>
      <td rowSpan={5}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A (5 Gbps)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1x CAN JST 4针 (3.3V); 1x CAN (XT30 2+2) </td>
    </tr>
    <tr>
      <td>风扇</td>
      <td colSpan={3}>1x 4针风扇连接器 (5V PWM)</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td colSpan={3}>2x I2C JST 4针 (3.3V)</td>
    </tr>
    <tr>
      <td>SPI</td>
      <td colSpan={3}>1x I2S JST 6针 (3.3V)</td>
    </tr>
    <tr>
      <td>电源</td>
      <td colSpan={4}>2x XT30 2+2 连接器 (12-54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>其他</td>
    </tr>
    <tr>
      <td rowSpan={3}>机械</td>
      <td >尺寸 (宽 x 深 x 高)</td>
      <td colSpan={3}>63mm * 95mm * 42mm (不含扩展)<br />63mm * 95mm * 66.7mm (含扩展)</td>
    </tr>
    <tr>
      <td>重量</td>
      <td colSpan={3}>345g (不含扩展)<br />462g (含扩展)</td>
    </tr>
    <tr>
      <td>安装</td>
      <td colSpan={3}>桌面、壁挂安装</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td colSpan={4}>-10℃ ~ 50℃</td>
    </tr>
    <tr>
      <td>保修</td>
      <td colSpan={4}>1年</td>
    </tr>
  </tbody>
</table>
</div>

## 硬件概览

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B1.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B2.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B3.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B4.png"/>  
</div>

## 刷写 JetPack 操作系统

在这里，我们将向您展示如何将 [Jetpack 6.0](https://developer.nvidia.com/embedded/jetson-linux-archive) 刷写到连接到 reComputer Mini 的 NVMe SSD 上。

### 支持的 Nvidia Jetson 模块

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html)

### 前提条件

- Ubuntu 主机电脑
- 带有 Jetson Orin 模块的 reComputer J401-Mini 载板
- USB Micro-B 数据传输线

:::info

我们建议您使用物理 ubuntu 主机设备而不是虚拟机。
请参考下表准备主机。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack 版本 </td>
        <td class="dbon" colspan="3"> Ubuntu 版本（主机电脑） </td>
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

### 准备 Jetpack 镜像

在这里，我们需要下载与我们使用的 Jetson 模块对应的系统镜像到我们的 Ubuntu PC：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpack 版本</th>
      <th>Jetson 模块</th>
      <th>下载链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>5.1.3</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfA7P_6gLnJAnxptIAURoCgBDF-emSfyD9uGWYY2vuFhmg?e=DF6a8l" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>099bf8e706468dc36600ffdb3444168<br />3cde7454646621017fc39db49c16a2c53</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eew7pWvWB3RLtT5vMkVTFHABADBzxS8id4xNtrQHGcO3eg?e=drxTwI" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>6ce30b9e212310498eee2c0a363cb35<br />14b1c607ae6a1ab403d5029115bc3a71b</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcEvOGxB9DpOuFubj-xJ1oYBixiZy4vd0t_chXQcezPy9A?e=RnX7NN" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>b8f7a0b6d5974add33c3102824c671b<br />61ca8e278b0c5e3c38a7c5a45e251251e</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYi8K66PG6xOjwiU-_x3Ey4BpZhEiLFS8c_JoEDzeTVaxg?e=TkAgJV" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>cc6efd6e4a42f099dde47e9ed71a34e<br />0981e77c50e3dc74f38338210c1f3bda0</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.0</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcQFCfXEWVREuzwvvBX7vRsBlr9H6HQpTBzmDw0rigIt1Q?e=IzLuYu" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>7B4ABE1D1A8711D5D4E9B676DBB1E76<br />CDA35C614608CE7ECE112BC4A50E71C7C</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUpeLu1P7RJOv7-nqR7QbmABfmWR45xVUt95bMplpp25mQ?e=oiWB6b" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>3956B968F2BFB9FDF37D952E83DDB70<br />3980C813156919BC367CA5E23BBDEC89F</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWbSLkBX0XpIrFjkT0vndGsBysfm51HvFkBFsRnfRaWBxA?e=t7vRcH" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>BF6921DF313B467254154BDA835C379<br />AD86D817E03D0301543B62F7CA0C9222F</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUB7YoQeCrVHnDjsrfFaL8EBxkjRrclpDxFwDB3dJpM3xQ?e=oYHLp7" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>8941C13204A8069CE70B109B6A13EA2<br />40CBB02F69B8D4028D465134B3744BC28</td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2</td>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVjuq6G9y_5OjIxMIHFiBj0BVckYdcRQBunaXMHFBLZ3tw?e=tY89se" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>A1C5F44B19B6C06E11AC38ABDA79AD6<br />CBFF2AAFBEEA7BF3A14B2FE08EA37267F</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcdaeIBdGRpCp0Dev5R3o1sB2Tr4HIwjgtp3d_XX7lE9Gg?e=bxteCW" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>23855098982DD1E05C025D3F078BCA0<br />2F396C1FB68DC58E539D83569A894571D</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6 镜像文件大约为 **16.7GB**，下载时间约为 60 分钟。请耐心等待下载完成。
:::

:::info
为了验证下载固件的完整性，您可以比较 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 来获取下载文件的 SHA256 哈希值。如果得到的哈希值与 wiki 中提供的 SHA256 哈希值匹配，则确认您下载的固件是完整无损的。
:::

### 进入强制恢复模式

:::info
在进行安装步骤之前，我们需要确保开发板处于强制恢复模式。
:::

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/HEIXFkizP5Y" title="Enter Force Recovery Mode (reComputer Mini)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> 分步说明 </summary>

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini_rec.png" />
</div>

- **步骤 1.**  在 USB2.0 DEVICE 端口和 ubuntu 主机 PC 之间连接一根 USB Micro-B 线缆。
- **步骤 2.**  使用针插入 RECOVERY 孔按下恢复按钮并保持按住。
- **步骤 3.**  连接电源。
- **步骤 4.**  释放恢复按钮。

</details>

在 Linux 主机 PC 上，打开终端窗口并输入命令 `lsusb`。如果返回的内容根据您使用的 Jetson SoM 包含以下输出之一，则表示开发板处于强制恢复模式。

- 对于 Orin NX 16GB：0955:7323 NVidia Corp
- 对于 Orin NX 8GB：0955:7423 NVidia Corp
- 对于 Orin Nano 8GB：0955:7523 NVidia Corp
- 对于 Orin Nano 4GB：0955:7623 NVidia Corp

下图是 Orin Nx 16GB 的示例：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/>
</div>

### 使用单个命令刷写到 Jetson

<details>

<summary> 使用单个命令刷写设备。 </summary>

reComputer Jetson J30/40 Mini 已推出一键刷写脚本，支持刷写 Jetpack 6.0。

```bash
wget -O ./flashing.sh https://files.seeedstudio.com/OSHW_Jetson/flashing.sh  && sudo chmod 777 ./flashing.sh && ./flashing.sh
```

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZFBzTlyOjhE?si=uNN-l5VVGbAyGnot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::caution
免责声明：一键刷写脚本旨在使 jetpack 刷写更快速。当前版本是测试版，可能存在许多问题。希望您能理解。如果出现刷写问题，请按照下面的`逐步刷写设备`进行操作，并在我们的 [Discord Jetson 频道](https://discord.com/channels/862602258452578314/930732339624026152)中提供反馈。我们将及时修复这些问题，并在不久的将来改进此功能。
:::

</details>

### 逐步刷写到 Jetson

**步骤 1：** 在 ubuntu 主机 PC 上解压下载的镜像文件：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**步骤 2:** 执行以下命令将 jetpack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果刷写过程成功，您将看到以下输出

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
刷写命令可能需要运行 2-10 分钟。
:::

**步骤 3：** 使用板载 HDMI 连接器将 J501 连接到显示器，并完成初始配置设置：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
请根据您的需要完成**系统配置**。
:::

**步骤 4（可选）：** 安装 Nvidia Jetpack SDK

请在 Jetson 设备上打开终端并执行以下命令：

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## 硬件接口使用

:::info
如果您想了解更多关于硬件接口的详细规格和使用方法，请参考[此wiki](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/)。
:::

## 资源

- [reComptuer Mini 数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)
- [reComptuer Mini 原理图](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z)
- [reComputer Mini 3D文件](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_3D.7z)
- [Seeed Jetson系列产品目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio边缘AI成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson系列产品对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson设备单页介绍](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
