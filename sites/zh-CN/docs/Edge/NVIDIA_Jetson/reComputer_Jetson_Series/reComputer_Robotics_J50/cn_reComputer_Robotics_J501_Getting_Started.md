---
description: 本维基提供了对 reComputer Jetson Robotics J501 载板硬件特性和接口使用的全面介绍。内容涵盖详细规格、支持的模块、安装设置步骤，以及双 M.2 Key M 插槽、10GbE + 4 路 1GbE 以太网、USB 3.0、四路 CAN 接口（2 路原生 + 2 路 SPI-to-CAN）、UART、DI/DO、I2S 和 GMSL2 摄像头扩展等多种接口的实用使用指南，帮助用户快速在 J501 平台上开展机器人开发。
title: 刷写 Jetpack 与接口使用
tags:
  - reComputer Robotics J501
  - Flash Jetpack
  - Robotics
  - Interfaces Usage
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg
slug: /cn/ai_robotics_recomputer_j501_robotics_getting_started
sku: 100090853,100076722,100060802,100032662
last_update:
  date: 12/09/2025
  author: Lorraine
---

# Robotics J501 硬件与快速上手

reComputer Robotics J501 是一款为高级机器人和工业应用设计的高性能边缘 AI 载板。它在 MAXN 模式下兼容 NVIDIA Jetson AGX Orin 模块（32GB/64GB），可提供高达 275 TOPS 的 AI 性能。

该载板配备了丰富的连接选项——包括 1 路 10GbE 和 4 路 1GbE 以太网端口、用于 NVMe SSD 的双 M.2 Key M 插槽、用于 5G 和 Wi-Fi/BT 模块的 M.2 插槽、多路 USB 3.0 端口、四路 CAN 接口（2 路原生 + 2 路 SPI-to-CAN）、GMSL2 摄像头扩展，以及包括 DI/DO、I2S、UART 和 RS485 在内的全面 I/O——可作为复杂多传感器融合和实时 AI 处理的强大机器人“大脑”。

预装 JetPack 6.2.1 和 Linux BSP，可确保无缝部署。支持 NVIDIA Isaac ROS、Hugging Face、PyTorch 和 ROS 2/1 等框架，J501 将大语言模型驱动的决策与物理机器人控制相结合，通过开箱即用的接口和优化的 AI 框架，加速自主机器人的开发。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5012-with-GMSL-extension-board-p-6682.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font></span></strong>
    </a>
</div>

## 关键特性  

- **高性能 AI**：搭载 Jetson AGX Orin 32/64GB 模块，Ampere GPU 和 DLA 引擎，最高可达 275 TOPS
- **丰富连接性**：双 M.2 Key M（NVMe）；Key E（WiFi/BT）+ Key B（5G）；1 路 10GbE + 4 路 1GbE；3 路 USB 3.0；2 路 USB-C
- **四路 CAN-FD**：2 路原生 + 2 路 SPI-to-CAN 接口，具备电气隔离
- **GMSL2 视觉**：单路 GMSL2 接口（1 路），用于高速摄像头连接
- **工业级设计**：19-48V DC 输入；-10~60°C 工作温度；隔离接口；预装 JetPack 6.2.1
- **面向机器人应用**：支持 ROS 2/1、Isaac ROS；DI/DO、I2S、UART、RS485；针对 AMR 和自动化场景优化

## 规格参数

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={3} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson AGX Orin 系统模块</th>
    </tr>
    <tr>
      <th style={{width: '25%'}}>规格</th>
      <th style={{width: '37.5%'}}>reComputer Robotics J5011</th>
      <th style={{width: '37.5%'}}>reComputer Robotics J5012</th>
    </tr>
    <tr>
      <td>模块</td>
      <td>NVIDIA Jetson AGX Orin 32GB</td>
      <td>NVIDIA Jetson AGX Orin 64GB</td>
    </tr>
    <tr>
      <td>AI 性能</td>
      <td>200 TOPS</td>
      <td>275 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>1792 核 NVIDIA Ampere @ 930 MHz</td>
      <td>2048 核 NVIDIA Ampere @ 1.3 GHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 核 Arm Cortex-A78AE @ 2.0 GHz</td>
      <td>12 核 Arm Cortex-A78AE @ 2.2 GHz</td>
    </tr>
    <tr>
      <td>内存</td>
      <td>32GB 256-bit LPDDR5 @ 204.8 GB/s</td>
      <td>64GB 256-bit LPDDR5 @ 204.8 GB/s</td>
    </tr>
    <tr>
      <td>视频编码器</td>
      <td>1x 4K60 / 3x 4K30 / 6x 1080p60 / 12x 1080p30 (H.265)</td>
      <td>2x 4K60 / 6x 4K30 / 8x 1080p60 / 16x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>视频解码器</td>
      <td>1x 8K30 / 2x 4K60 / 4x 4K30 / 9x 1080p60 / 18x 1080p30 (H.265)</td>
      <td>1x 8K30 / 3x 4K60 / 7x 4K30 / 11x 1080p60 / 22x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>CSI 摄像头</td>
      <td colSpan={2}>最多支持 6 路摄像头（通过虚拟通道最多 16 路）<br/>16 通道 MIPI CSI-2<br/>D-PHY 2.1（最高 40Gbps）/ C-PHY 2.0（最高 164Gbps）</td>
    </tr>
    <tr>
      <td>机械尺寸</td>
      <td colSpan={2}>100mm x 87mm<br/>699 针 Molex Mirror Mezz 连接器<br/>集成导热板</td>
    </tr>
    <tr>
      <th colSpan={3} style={{ fontSize: '24px', fontWeight: 'bold' }}>载板</th>
    </tr>
    <tr>
      <th>存储</th>
      <td colSpan={2}>2x M.2 Key-M（NVMe 2280 SSD）<br/>1x M.2 Key-B（用于 4G/5G 模块）</td>
    </tr>
    <tr>
      <th>网络</th>
      <td colSpan={2}>1x M.2 Key-E（WiFi/BT）<br/>1x RJ45 10GbE + 4x RJ45 1GbE</td>
    </tr>
    <tr>
      <th>USB</th>
      <td colSpan={2}>3x USB 3.0 Type-A<br/>1x USB 3.0 Type-C（Recovery）<br/>1x USB 2.0 Type-C（Debug UART）</td>
    </tr>
    <tr>
      <th>DI/DO/CAN</th>
      <td colSpan={2}>1x 2x10P 3.81mm 端子排 - 4x DI @12V + 4x DO @40V + 4x CAN（支持 CAN-FD，电气隔离）</td>
    </tr>
    <tr>
      <th>GMSL</th>
      <td colSpan={2}>2x Mini-Fakra 连接器（用于 8 路 GMSL2 摄像头）（可选）</td>
    </tr>
    <tr>
      <th>串口</th>
      <td colSpan={2}>2x DB9（RS232/422/485）</td>
    </tr>
    <tr>
      <th>显示</th>
      <td colSpan={2}>1x HDMI 2.1</td>
    </tr>
    <tr>
      <th>风扇</th>
      <td colSpan={2}>1×12 V（2.54 mm），1×5 V（1.25 mm JST）</td>
    </tr>
    <tr>
      <th>按键</th>
      <td colSpan={2}>1x Recovery + 1x Reset</td>
    </tr>
    <tr>
      <th>LED</th>
      <td colSpan={2}>3x LED（PWR、SSD 和用户 LED）</td>
    </tr>
    <tr>
      <th>RTC</th>
      <td colSpan={2}>1x CR1220 电池座，1x RTC 2 针排针</td>
    </tr>
    <tr>
      <th>电源输入</th>
      <td colSpan={2}>通过 5.08mm 端子排输入 19-48V DC（不含电源适配器）</td>
    </tr>
    <tr>
      <th>功耗</th>
      <td colSpan={2}>Jetson AGX Orin 模块：最高 60W（MAXN 模式）<br/>整机峰值：75W（包含外设）</td>
    </tr>
    <tr>
      <th>软件</th>
      <td colSpan={2}>Jetpack 6.2.1</td>
    </tr>
    <tr>
      <th>机械结构</th>
      <td colSpan={2}>
        尺寸：210mm x 180mm x 87mm（含支架）<br/>
        重量：200g<br/>
        安装方式：桌面 / 壁挂 / 导轨（DIN 导轨支架包含在配件中）<br/>
        工作温度：-10℃~60℃（25W）/ -10℃~55℃（MAXN）
      </td>
    </tr>
    <tr>
      <th>质保</th>
      <td colSpan={2}>2 年</td>
    </tr>
    <tr>
      <th>认证</th>
      <td colSpan={2}>RoHS、REACH、CE、FCC、UKCA、KC</td>
    </tr>
  </tbody>
</table>
</div>

**GMSL 扩展板规格（可选）**

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th>解串器</th>
      <td>MAX96712</td>
    </tr>
    <tr>
      <th>GMSL 接口</th>
      <td>2x Robotics-Fakra 公头连接器</td>
    </tr>
    <tr>
      <th>GMSL 输入</th>
      <td>最多 8 路 GMSL2 摄像头</td>
    </tr>
    <tr>
      <th>连接方式</th>
      <td>GMSL2 Fakra 1-to-4 M-M 线缆</td>
    </tr>
    <tr>
      <th>POC 接口特性</th>
      <td>支持电源与数据同时传输</td>
    </tr>
  </tbody>
</table>
</div>

## 硬件总览

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hw_overview_1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hw_overview_2.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hw_overview_3.png"/>
</div>

## 📦 刷写 JetPack 操作系统

### 支持的模块

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### 前置准备

- Ubuntu 主机电脑
- reComputer Robotics J501
- USB Type-C 数据传输线

:::info

我们建议使用物理 Ubuntu 主机设备，而不是虚拟机。
请参考下表准备主机设备。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack Version </td>
        <td class="dbon" colspan="3"> Ubuntu Version (Host Computer) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
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

在这里，我们需要根据所使用的 Jetson 模块，在 Ubuntu 主机上下载对应的系统镜像：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpack 版本</th>
      <th>Jetson 模块</th>
      <th> GMSL </th>
      <th>下载链接 1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2.1</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDPKrVl7UDaTYXmxi1CoTu2AcsHUPKLqNw_olmvlPBODqQ?e=gWuNzv">Download</a></td>
      <td>ed82745decdf554d82bd93441f1f4ad<br/>149f395a4ba5719664ce2351be8201522  </td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB3JLwYRpS8SqoqjWuXJmmmAW56Nvpdn8YnbYLW7g5_FHM?e=Gqe1XR">Download</a></td>
      <td>58fa8b76754449b0a49ad7d5f273edd<br/>f3e1d1f458cdb34994f6d8643da7a1249 </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6 镜像文件大小约为 **14.2GB**，下载大约需要 60 分钟，请耐心等待下载完成。
:::

:::info
要验证下载固件的完整性，可以对比 SHA256 哈希值。

在 Ubuntu 主机上打开终端，运行命令 `sha256sum <File>` 以获取已下载文件的 SHA256 哈希值。如果得到的哈希值与 wiki 中提供的 SHA256 哈希值一致，则说明你下载的固件是完整且未损坏的。
:::

⚙️ **SEEED 的 Jetson 载板的所有 `.dts` 文件和其他源代码可以从此处下载：** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)

### 进入强制恢复模式

:::info
在继续安装步骤之前，我们需要确保开发板处于强制恢复模式。
:::

<details>

<summary> 分步说明 </summary>

**步骤 1.** 使用 USB Type-C 数据线，将 USB2.0 DEVICE 接口与 Ubuntu 主机 PC 连接。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/flash_1.png" />
</div>

**步骤 2.** 使用针插入 RECOVERY 孔按下恢复按键，并保持按住。

**步骤 3.** 接通电源。

**步骤 4.** 松开恢复按键。

**步骤 5.** 在 Linux 主机 PC 上打开终端窗口并输入命令 `lsusb`。如果返回的内容中根据你使用的 Jetson SoM 出现以下输出之一，则说明开发板已进入强制恢复模式。

- 对于 AGX Orin 32GB：**0955:7223 NVidia Corp**
- 对于 AGX Orin 64GB：**0955:7023 NVidia Corp**

下图为 AGX Orin 32GB 的示例：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### 刷写到 Jetson

**步骤 1：** 解压下载的镜像文件：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11.tar.gz
```

**步骤 2：** 执行以下命令将 jetpack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-robo-agx-orin-j501x
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果刷写过程成功，你将看到如下输出

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
刷写命令可能需要运行 2-10 分钟。
:::

**步骤 3：** 使用 PD 转 HDMI 转接器将 Robotics J501 连接到支持 HDMI 输入的显示器，或者使用 PD 线缆直接连接到支持 PD 输入的显示器，并完成初始配置设置：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
请根据你的需求完成 **System Configuration**。
:::

## 🔌 接口使用

下面将介绍 Robotics J501 板上的各类接口及其使用方法。

## M.2 Key M

J501 集成了双 M.2 Key M 插槽，支持 PCIe Gen4x4 NVMe SSD，用于高速存储扩展。

### 支持的 SSD 如下

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-5768.html)

### 硬件连接

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_m_1.png"/>
</div>

### 使用说明

在 Jetson 设备中打开终端，输入以下命令测试 SSD 的读写速度。

**步骤 1.** 创建测试目录和文件：

```bash
mkdir ssd
touch ~/ssd/test
```

**步骤 2.** 测试写入性能：

```bash
dd if=/dev/zero of=/home/$USER/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_m2.png"/>
</div>

**步骤 3.** 查看 SSD 信息：

```bash
nvme list
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t2.png"/>
</div>

:::danger
测试完成后，请运行 sudo rm /home/$USER/ssd/test 命令删除缓存文件。
:::

## M.2 Key E（WiFi/BT）

M.2 Key E 插槽支持 Wi-Fi 6 和 Bluetooth 5.x 模块，用于无线连接。


### 硬件连接

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_1.png"/>
</div>

:::tip

**注意：在使用该接口之前，必须先卸下外壳螺丝，并按照下图所示安装对应模块。**
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/open-board.png"/>
</div>
:::

### 使用说明

**性能测试：**
要测试 Wi-Fi 性能，请使用以下命令（将 IP 地址替换为你的测试服务器）：

```bash
# On server: iperf3 -s
# On client:
iperf3 -c 192.168.7.157
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_2.png"/>
</div>

通过 M.2 Key E 插槽可以使用 Bluetooth 功能。
**Bluetooth 测试：**
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_3.png"/>
</div>

## M.2 Key B（4G/5G 模块）

M.2 Key B 插槽支持带 Nano SIM 卡座的 4G/5G 蜂窝模块。

### 硬件连接

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/keyb-keye.png"/>
</div>

:::tip

**注意：在使用该接口之前，必须先卸下外壳螺丝，并按照下图所示安装对应模块。**
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/open-board.png"/>
</div>
:::

### 使用说明

**步骤 1.** 检查硬件识别情况

```bash
lsusb 
```

该命令会显示系统中连接的所有 USB 设备列表，以及它们的厂商（ID）、类型和其他信息。例如，输出中可能会显示来自 Quectel Wireless Solutions Co., Ltd. 的 EM12-G 设备，表明 5G 模块已存在。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_1.png"/>
</div>

**步骤 2.** 确认驱动加载情况
必须确保 5G 模块所需的 option 驱动已加载。我们可以使用 lsmod 命令进行检查。

```bash
lsmod | grep option 
```

如果 option 驱动加载成功，输出中会显示与该驱动相关的信息。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_2.png"/>
</div>

**步骤 3.** 配置 ModemManager
ModemManager 是一个用于管理调制解调器设备的工具，需要安装并重启。

```bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

apt install 命令用于安装 ModemManager 软件包，而 systemctl restart 用于重启 ModemManager 服务，以确保新设置生效。

**步骤 4.** 验证模块识别情况
我们可以使用 mmcli -L 命令检查 ModemManager 是否能够正确识别 5G 模块。

```bash
mmcli -L 
```

如果 5G 模块被识别，将会显示类似 /org/freedesktop/ModemManager1/Modem/0 的输出，表示检测到的调制解调器设备路径。
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_3.png"/>
</div>

**步骤 5.** 设置 APN
APN（接入点名称，Access Point Name）对于移动设备连接网络至关重要。我们将使用 nmcli 命令创建承载配置文件。以中国移动为例，可以使用以下命令创建配置文件：

```bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

该命令会添加一个新的 GSM（全球移动通信系统，Global System for Mobile Communications）类型连接，将 APN 指定为 "CMNET"，并使用自动 IPv4 配置。

**步骤 6.** 激活连接
创建承载配置文件后，我们需要激活该连接。

```bash
sudo nmcli con up "gsm" 
```

该命令会激活 GSM 连接，如果成功，将显示确认信息。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_4.png"/>
</div>

**步骤 7.** 再次验证模块识别情况
再次运行 mmcli -L 命令，以确保在配置 APN 之后模块仍然被识别。

```bash
mmcli -L 
```

**步骤 8.** 检查模块状态
最后，我们可以使用 mmcli -m 0 命令查看模块的详细信息，例如 IP 分配、运营商以及网络连接状态。

```bash
mmcli -m 0 
```

该命令会提供有关 5G 模块的详细信息，包括其制造商、型号、支持和当前使用的网络技术、设备状态以及已连接的网络运营商。
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_5.png"/>
</div>

## 以太网

Robotics J501 提供 1 个 10GbE（原生）和 4 个 1GbE（通过 PCIe 交换芯片）的 RJ45 接口。10GbE 接口采用 TI TQSPH-10G PHY，支持 10/5/2.5/1/0.1 GbE 五种速率。1GbE 接口支持 10/100/1000M 速率。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/eth_1.png"/>
</div>

**每个端口的 LED 指示说明：**

- **绿色 LED：** 在 10G/5G/2.5G/1000M 链路时常亮
- **黄色 LED：** 闪烁表示网络活动

要测试以太网端口速度，请按如下方式使用 `iperf3`：

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` 是 iperf3 服务器的 IP 地址。客户端将连接到该服务器以执行带宽测试。
`<bind_ip>` 将指定的本地 IP 地址绑定为测试流量的源地址。
:::

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/eth_speed.png"/>
</div>

## LED

J501 配备了多个状态指示 LED：

- **PWR LED：** 电源状态（绿色）
- **ACT LED：** 系统活动（黄色）
- **USR LED：** 通过 GPIO 控制

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/led_1.png"/>
</div>

### 使用说明

下面演示如何控制 USER LED 显示为绿色、红色或蓝色。

```bash
#change to red
echo 1 | sudo tee /sys/class/leds/on-board:red/brightness
echo 0 | sudo tee /sys/class/leds/on-board:red/brightness
#change to green
echo 1 | sudo tee /sys/class/leds/on-board:green/brightness
echo 0 | sudo tee /sys/class/leds/on-board:green/brightness

#change to blue
echo 1 | sudo tee /sys/class/leds/on-board:blue/brightness
echo 0 | sudo tee /sys/class/leds/on-board:blue/brightness

```

LED 控制效果如下图所示：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/led_test.png"/>
</div>

## USB

Robotics J501 提供 4 个 USB 3.2 Type-A 端口（通过内部 USB 3.1 Gen1 集线器，实现最高 5Gbps 数据速率，可连接高速外设、存储设备或相机）以及 1 个 USB 2.0 Type-C 调试端口（作为串行控制台，用于访问系统日志、调试启动问题和执行固件更新）。

### USB-A 速度测试

创建一个脚本来测试 USB 设备速度：

```bash
vim test_usb.sh
```

粘贴以下内容：
<details>
<summary> test_usb.sh </summary>
```bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
set -e

MOUNT_POINT="$1"
TEST_FILE="$MOUNT_POINT/test_usb_speed.bin"

if [ -z "$MOUNT_POINT" ]; then
  echo "Usage: $0 <mount_point>"
  echo "Example: $0 /media/seeed/USB"
  exit 1
fi

if [ ! -d "$MOUNT_POINT" ]; then
  echo "Error: $MOUNT_POINT is not a directory"
  exit 1
fi

echo "Write test..."
dd if=/dev/zero of="$TEST_FILE" bs=1M count=2048 conv=fdatasync status=progress

echo
echo "Drop caches..."
sync
echo 3 | sudo tee /proc/sys/vm/drop_caches >/dev/null

echo "Read test..."
dd if="$TEST_FILE" of=/dev/null bs=1M count=2048 status=progress

echo
echo "Cleaning up..."
rm -f "$TEST_FILE"
EOF

```

</details>

使脚本可执行并进行测试：

```bash
sudo chmod +x test_usb.sh
./test_usb.sh /mnt          # If your USB drive is mounted at /mnt
# Or
./test_usb.sh /media/usb    # If your USB drive is mounted at /media/usb
# Or
./test_usb.sh /path/to/your/usb/mount_point
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/USB-A_Speed_Test.png"/>
</div>

:::note
请先使用 `df -h` 或 `lsblk` 命令确认 USB 设备的实际挂载点！
:::

### USB 2.0 Type-C 端口

通过该串口，使用 USB-C 数据线，可以在 PC 端监控输入和输出的调试信息。

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug.png"/>
</div>

**步骤 1.** 打开串口工具（此处以 MobaXterm 工具为例），创建一个新会话。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**步骤 2.** 选择 Serial 工具。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**步骤 3.** 选择对应的串口，将波特率设置为 115200 并点击 "OK"。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug_1.png"/>
</div>

**步骤 4.** 使用用户名和密码登录你的 reComputer Super。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug_2.png"/>
</div>

## 风扇

Robotics J501 提供两个 4 针 PWM 风扇接口，用于为 Jetson 模组和载板元件散热：

- **12V 风扇**：2.54 mm 接口，最大 1.5A，适用于高性能散热
- **5V 风扇**：1.25 mm JST 接口，最大 1.5A，适用于低功耗静音散热

通过 PWM 控制，可以根据系统温度进行动态且精确的转速调节，在实现高效散热的同时，将噪声和功耗降至最低。

**12V 风扇引脚定义：**

12V 风扇接口（2.54 mm）的引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/fan_12v_pinout.png"/>
</div>

### 使用说明

**手动 PWM 控制：**

```bash
# Set fan speed (0-255)
sudo -i
echo 200 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
```

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/fan.png"/>
</div>

:::note
默认散热策略已在 `/etc/nvpmodel.conf` 中预配置。若需自定义配置文件，请参考 [NVIDIA Jetson Linux Developer Guide](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)。
:::

此外，我们还可以使用 `jtop` 工具手动设置风扇转速。

你可以在终端中输入以下命令来安装 **jtop**。

```bash
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

然后重启你的 reComputer Mini：

```bash
sudo reboot
```

安装 **jtop** 后，你可以在终端中启动它：

```bash
jtop
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

## CAN

reComputer Robotics J501 配备了 4 个独立的 CAN 接口（CAN 0、CAN 1、CAN 2、CAN 3），与 DI/DO 接口共用 J25 2x10P 连接器。这些接口支持 Classic CAN 和 CAN FD 通信协议，具有较强的抗干扰性能和实时数据传输能力，适用于车载电子、工业自动化和机器人等工业控制场景。

### 使用说明

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_hw_1.png"/>
</div>
这是 CAN 接口的原理图。

### CAN 通信

本节演示在 Jetson 上连接 CAN0↔CAN1 和 CAN2↔CAN3，并展示如何在 Classic CAN 模式和 CAN‑FD 模式下在这些通道对之间进行数据收发。

| 通道名称 | 接口类型 | 引脚名称 | GPIO 芯片 | GPIO 编号 | 终端电阻控制 |
|--------------|----------------|----------|-----------|-------------|------------------------------|
| CAN0         | Native         | PAA.04   | gpiochip1 | 4           | gpiochip1 line4 (PAA.04)    |
| CAN1         | Native         | PAA.07   | gpiochip1 | 7           | gpiochip1 line7 (PAA.07)    |
| CAN2         | SPI-to-CAN     | -        | gpiochip2 | 10          | gpiochip2 line10             |
| CAN3         | SPI-to-CAN     | -        | gpiochip2 | 12          | gpiochip2 line12             |

CAN0 和 CAN1 的终端电阻可以通过两个引脚进行控制：PAA.04（位于 gpiochip1 line4）和 PAA.07（位于 gpiochip1 line7）。  

终端电阻控制遵循以下规则：  

```
When `PAA.04 = 1`, the 120 Ω termination resistor of CAN0 is **disconnected**;  
when `PAA.04 = 0`, the 120 Ω termination resistor of CAN0 is **connected**.

When `PAA.07 = 1`, the 120 Ω termination resistor of CAN1 is **disconnected**;  
when `PAA.07 = 0`, the 120 Ω termination resistor of CAN1 is **connected**.
```

输入以下命令查看 gpiochip 1 上的引脚：

```bash
gpioinfo gpiochip1
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gpiochip1-can.png"/>
</div>

参考以下命令将 `PAA.04` 和 `PAA.07` 设为 0：

```bash
sudo gpioset --mode=wait gpiochip1 4=0
sudo gpioset --mode=wait gpiochip1 7=0
```

参考以下命令将 `PAA.04` 和 `PAA.07` 设为 1：

```bash
sudo gpioset --mode=wait gpiochip1 4=1
sudo gpioset --mode=wait gpiochip1 7=1
```

#### Classic CAN 模式

以下脚本实现了 CAN0/CAN1 和 CAN2/CAN3 之间的回环通信测试，包括使能终端电阻、配置比特率以及双向数据传输。

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_hw_2.png"/>
</div>

接线图如下所示：

| From | To |
| --- | --- |
| CAN0_H | CAN1_H |
| CAN0_L | CAN1_L |
| CAN2_H | CAN3_H |
| CAN2_L | CAN3_L |

接线图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/CAN-connect.png"/>
</div>

创建 `test_can.sh`，用于在标准模式下测试 CAN0↔CAN1 和 CAN2↔CAN3 之间的数据收发：

```bash
touch test_can.sh
sudo chmod +x test_can.sh
sudo ./test_can.sh
```

`test_can.sh` 的脚本代码如下：

<details>
<summary> test_can.sh </summary>

```sh
#!/bin/bash
set -e

PW="000000"

echo "$PW" | sudo -S ip link set can0 down || true
echo "$PW" | sudo -S ip link set can1 down || true
echo "$PW" | sudo -S ip link set can2 down || true
echo "$PW" | sudo -S ip link set can3 down || true

# Set socket buffer sizes
echo "$PW" | sudo -S sysctl -w net.core.rmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.rmem_default=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_default=524288

# Set bitrate, 1 Mbps
BITRATE=1000000
echo "$PW" | sudo -S ip link set can0 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can1 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can0 up
echo "$PW" | sudo -S ip link set can1 up

echo "$PW" | sudo -S ip link set can2 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can3 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can2 up
echo "$PW" | sudo -S ip link set can3 up

sleep 1

# Enable termination resistors
sudo pkill -f gpioset || true
gpioset --mode=time --sec=200000 gpiochip2 8=0 & # enable CAN1 120R
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 9=0 & # enable CAN0 120R
GPIO2_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 12=0 & # enable CAN3 120R
GPIO3_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 10=0 & # enable CAN2 120R
GPIO4_PID=$!

echo "Start candump on can0 & can1..."
candump can0 &
DUMP0_PID=$!
candump can1 &
DUMP1_PID=$!

echo "Start candump on can2 & can3..."
candump can2 &
DUMP2_PID=$!
candump can3 &
DUMP3_PID=$!

echo "Start cangen on can0 & can1 and can2 & can3 (bi-directional test)..."
# -g 10 sends one frame every 10 ms; adjust as needed
cangen can0 -g 10 &
GEN0_PID=$!
cangen can1 -g 10 & 
GEN1_PID=$!
cangen can2 -g 10 &
GEN2_PID=$!
cangen can3 -g 10 &
GEN3_PID=$!

# Cleanup background processes on Ctrl+C
cleanup() {
  echo
  echo "Stopping CAN test..."
  kill $GEN0_PID $GEN1_PID $DUMP0_PID $DUMP1_PID $GPIO1_PID $GPIO2_PID 2>/dev/null || true
  kill $GEN2_PID $GEN3_PID $DUMP2_PID $DUMP3_PID $GPIO3_PID $GPIO4_PID 2>/dev/null || true
  echo "$PW" | sudo -S ip link set can0 down || true
  echo "$PW" | sudo -S ip link set can1 down || true
  echo "$PW" | sudo -S ip link set can2 down || true
  echo "$PW" | sudo -S ip link set can3 down || true
  echo "Done."
}
trap cleanup INT TERM

# Wait for child processes (candump runs until you Ctrl+C)
wait
```

</details>

:::note
在 CAN 测试脚本中，将 PW 替换为你自己的 Jetson 密码。
:::

**CAN0** 和 **CAN1** 之间的数据收发将被完成：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_test.png"/>
</div>

#### CAN-FD 模式

CAN FD 支持更高的数据传输速率和更大的数据帧长度。以下脚本实现 CAN FD 回环测试。

创建 `test_canfd.sh`，在 CAN-FD 模式下测试 **CAN0↔CAN1** 和 **CAN2↔CAN3** 之间的数据收发：

```bash
touch test_canfd.sh
sudo chmod +x test_canfd.sh
sudo ./test_canfd.sh
```

`test_canfd.sh` 的脚本代码如下：

<details>
<summary> test_canfd.sh </summary>

```sh
#!/bin/bash
set -e

PW="000000"

echo "$PW" | sudo -S ip link set can0 down || true
echo "$PW" | sudo -S ip link set can1 down || true
echo "$PW" | sudo -S ip link set can2 down || true
echo "$PW" | sudo -S ip link set can3 down || true

# Set socket buffers
echo "$PW" | sudo -S sysctl -w net.core.rmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.rmem_default=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_default=524288

# ---- CAN-FD parameters ----
BITRATE=500000        # Arbitration (nominal) bitrate
DBITRATE=5000000      # Data phase bitrate (FD fast mode)

# Configure CAN-FD: arbitration bitrate + data bitrate + FD on + error reporting + auto restart
echo "$PW" | sudo -S ip link set can0 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100
echo "$PW" | sudo -S ip link set can1 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100
echo "$PW" | sudo -S ip link set can2 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100
echo "$PW" | sudo -S ip link set can3 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100

echo "$PW" | sudo -S ip link set can0 up
echo "$PW" | sudo -S ip link set can1 up
echo "$PW" | sudo -S ip link set can2 up
echo "$PW" | sudo -S ip link set can3 up

sleep 1

# Enable termination resistors
sudo pkill -f gpioset || true
gpioset --mode=time --sec=200000 gpiochip2 8=0 &   # enable CAN1 120R
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 9=0 &   # enable CAN0 120R
GPIO2_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 12=0 &  # enable CAN3 120R
GPIO3_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 10=0 &  # enable CAN2 120R
GPIO4_PID=$!

echo "Start candump on can0 & can1..."
candump can0 &
DUMP0_PID=$!
candump can1 &
DUMP1_PID=$!

echo "Start candump on can2 & can3..."
candump can2 &
DUMP2_PID=$!
candump can3 &
DUMP3_PID=$!

echo "Start cangen on can0 & can1 and can2 & can3 (bi-directional test)..."
# -g 10 sends one frame every 10 ms; adjust as needed
cangen can0 -g 10 &
GEN0_PID=$!
cangen can1 -g 10 &
GEN1_PID=$!
cangen can2 -g 10 &
GEN2_PID=$!
cangen can3 -g 10 &
GEN3_PID=$!

# Cleanup background processes on Ctrl+C
cleanup() {
  echo
  echo "Stopping CAN-FD test..."
  kill $GEN0_PID $GEN1_PID $DUMP0_PID $DUMP1_PID $GPIO1_PID $GPIO2_PID 2>/dev/null || true
  kill $GEN2_PID $GEN3_PID $DUMP2_PID $DUMP3_PID $GPIO3_PID $GPIO4_PID 2>/dev/null || true
  echo "$PW" | sudo -S ip link set can0 down || true
  echo "$PW" | sudo -S ip link set can1 down || true
  echo "$PW" | sudo -S ip link set can2 down || true
  echo "$PW" | sudo -S ip link set can3 down || true
  echo "Done."
}
trap cleanup INT TERM

# Wait for child processes (candump will run until you Ctrl+C)
wait
```

</details>

:::note
在 CAN 测试脚本中，将 PW 替换为你自己的 Jetson 密码。
:::

**CAN0↔CAN1** 和 **CAN2↔CAN3** 之间的数据收发将被完成：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_test_2.png"/>
</div>

## DI/DO

reComputer Robotics J501 的 DI/DO 接口集成在 J25 2x10P 连接器上，与 CAN 接口共用接口。它们支持 4 路数字输入和 4 路数字输出，具有稳定的信号传输和工业级电压适配能力，适合连接数字传感器、继电器等外设设备。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_test.png"/>
</div>

### 硬件连接

#### 数字输入（DI）通道

| 通道名称 | 电压特性 | GPIO 标号 | 引脚名称 | GPIO 芯片 | GPIO 编号 |
|--------------|-------------------------|------------|----------|-----------|-------------|
| DI_12V_1     | 12V 输入自适应         | DI_1_GPIO17 | PP.04    | gpiochip0 | 96          |
| DI_12V_2     | 12V 输入自适应         | DI_1_GPIO18 | PQ.04    | gpiochip0 | 104         |
| DI_12V_3     | 12V 输入自适应         | DI_1_GPIO19 | PN.02    | gpiochip0 | 86          |
| DI_12V_4     | 12V 输入自适应         | DI_1_GPIO33 | PM.07    | gpiochip0 | 83          |

#### 数字输出（DO）通道

| 通道名称 | 电压特性 | GPIO 标号 | 引脚名称 | GPIO 芯片 | GPIO 编号 | 其他信息 |
|--------------|-------------------------|------------|----------|-----------|-------------|-----------------|
| DO_40V_1     | 开漏输出；未上拉时约 0V（低电平），上拉时为 12V（高电平） | DO_1_GPIO | PAA.04 | gpiochip1 | 4 | 对应编号：320 |
| DO_40V_2     | 开漏输出；未上拉时约 0V（低电平），上拉时为 12V（高电平） | DO_2_GPIO | PAA.07 | gpiochip1 | 7 | 对应编号：323 |
| DO_40V_3     | 开漏输出；未上拉时约 0V（低电平），上拉时为 12V（高电平） | DO_3_GPIO | PBB.01 | gpiochip1 | 9 | 对应编号：325 |
| DO_40V_4     | 开漏输出；未上拉时约 0V（低电平），上拉时为 12V（高电平） | DO_4_GPIO | PBB.00 | gpiochip1 | 8 | 对应编号：324 |

J25 连接器上 DI/DO 接口的关键引脚定义如下（引脚编号对应物理连接器）：

| 引脚编号 | 功能标号 | 描述 |
|------------|----------------|-------------|
| 1          | DI_12V_1       | 12V 数字输入通道 1 |
| 3          | DI_12V_2       | 12V 数字输入通道 2 |
| 5          | DI_12V_3       | 12V 数字输入通道 3 |
| 7          | DI_12V_4       | 12V 数字输入通道 4 |
| 9          | GND_DI         | 数字输入通道地 |
| 2          | DO_40V_1       | 40V 数字输出通道 1 |
| 4          | DO_40V_2       | 40V 数字输出通道 2 |
| 6          | DO_40V_3       | 40V 数字输出通道 3 |
| 8          | DO_40V_4       | 40V 数字输出通道 4 |
| 10         | GND_DO         | 数字输出通道地 |

:::note
如需完整引脚定义（包括 CAN 接口），请参考 reComputer Robotics J501 的硬件文档，以避免错误连接。
:::

### 使用说明

**数字输出（DO）操作**

DO 接口采用开漏输出。你可以通过命令设置输出电平（高/低），以控制继电器、LED 等外设。

运行以下命令以使能 DO 通道（输出 12V，由外部上拉电阻和 12V 电源供电）：

```
# Enable DO_40V_1 (gpiochip1 4)
sudo gpioset --mode=wait 1 4=1

# Enable DO_40V_2 (gpiochip1 7)
sudo gpioset --mode=wait 1 7=1

# Enable DO_40V_3 (gpiochip1 9)
sudo gpioset --mode=wait 1 9=1

# Enable DO_40V_4 (gpiochip1 8)
sudo gpioset --mode=wait 1 8=1
```

DO 上拉前：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_before.png"/>
</div>

DO 上拉后：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/do_after.png"/>
</div>

运行以下命令以关闭 DO 通道（输出约 0V）：

```
# Disable DO_40V_1 (gpiochip1 4)
sudo gpioset --mode=wait 1 4=0

# Disable DO_40V_2 (gpiochip1 7)
sudo gpioset --mode=wait 1 7=0

# Disable DO_40V_3 (gpiochip1 9)
sudo gpioset --mode=wait 1 9=0

# Disable DO_40V_4 (gpiochip1 8)
sudo gpioset --mode=wait 1 8=0
```

**数字输入（DI）操作**

使用 `gpioget` 命令读取 DI 通道的输入电平（返回值 `1` = 高电平，`0` = 低电平），以获取外设设备的状态。

读取 DI 通道电平的命令如下：

```
# Read DI_12V_1 (gpiochip0 96) status
gpioget gpiochip0 96

# Read DI_12V_2 (gpiochip0 104) status
gpioget gpiochip0 104

# Read DI_12V_3 (gpiochip0 86) status
gpioget gpiochip0 86

# Read DI_12V_4 (gpiochip0 83) status
gpioget gpiochip0 83
```

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_set.png"/>
</div>

## SPI

### 硬件连接

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi.png"/>
</div>

### 使用说明

使用杜邦线连接目标 SPI 通道的核心引脚（以 /dev/spidev2.0 为例）：
将 SPI2.0 的 MOSI 引脚连接到其 MISO 引脚（实现数据回环收发）。

接线示意图如下：
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi_conn_2.png"/>
</div>

:::note
要使用 SPI，请按上图所示使用螺丝刀拆下设备侧盖。
:::

**步骤 1：加载 SPI 内核模块（前置条件）**
在操作 SPI 接口之前，确保已加载 `spidev` 内核模块（默认系统可能已预加载，但建议手动确认）：

```bash
sudo modprobe spidev
```

:::note
如果命令执行后没有错误提示，表示模块加载成功；如果模块已加载，该命令不会返回任何信息，这是正常现象。
:::

**步骤 2：查看 SPI 设备节点**
在终端中输入以下命令，以查看由 reComputer Robotics J501 的 SPI 接口映射的设备名称：

```bash
ls /dev/spidev*
```

如果没有显示设备节点，说明 `spidev` 模块未成功加载。请重新运行 `sudo modprobe spidev`，并检查系统日志进行故障排查。

**步骤 3：获取并编译 SPI 测试代码**
从 GitHub 拉取 `spidev-test` 测试代码并进行编译：

```bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**步骤 4：运行 SPI 测试程序**
在终端中输入以下命令来运行 SPI 测试程序（以 `/dev/spidev2.0` 为例）：

```bash
sudo ./spidev_test -v -D /dev/spidev2.0 -s 100000
```

**步骤 5：验证测试结果**
运行测试命令后，可以在终端中观察 SPI2.0 接口的数据收发情况。核心输出如下：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi_out.png"/>
</div>

> 关键判断标准：TX（发送）数据与 RX（接收）数据一致，表示 SPI 回环测试成功，SPI 接口功能正常。

## UART

reComputer Robotics J501 配备了 2 个独立的 UART 接口（UART1 和 UART2），支持 RS232、RS422 和 RS485 通信模式，具有信号传输稳定、与外设设备兼容性广等特点。

### 硬件连接

#### UART 接口通道

| 通道名称 | 设备节点 | 支持模式 | 默认波特率 | GPIO 使能命令 | 模式切换方式 |
|--------------|-------------|-----------------|-------------------|--------------------|-------------------|
| UART1 (DB9-1) | /dev/ttyTHS1 | RS232, RS422, RS485 | RS232: 115200 bps; RS422/RS485: 9600 bps | `gpioset --mode=wait gpiochip0 2=0` | SW3 拨码开关（8 位 DIP） |
| UART2 (DB9-2) | /dev/ttyTHS4 | RS232 (default) | 115200 bps | `gpioset --mode=wait gpiochip2 15=0` | 固定 RS232（不可切换） |

**引脚定义（DB9 接口）**

每个 DB9 引脚的功能会随通信模式变化而不同。请参考下表进行准确接线（引脚编号遵循标准 DB9 公头规格）：

| DB9 引脚号 | RS232 模式功能 | RS422 模式功能 | RS485 模式功能 |
|----------------|---------------------|---------------------|---------------------|
| 1              | -                   | TXD- (Transmit Data-) | Data- (Differential Data-) |
| 2              | RXD (Receive Data)  | TXD+ (Transmit Data+) | Data+ (Differential Data+) |
| 3              | TXD (Transmit Data) | RXD+ (Receive Data+) | -                   |
| 4              | -                   | RXD- (Receive Data-) | -                   |
| 5              | GND (Ground)        | GND (Ground)        | GND (Ground)        |
| 6              | -                   | -                   | -                   |
| 7              | RTS (Request to Send) | -                   | -                   |
| 8              | CTS (Clear to Send) | -                   | -                   |
| 9              | -                   | -                   | -                   |

**模式配置（SW3 拨码开关）**

只有 UART1（DB9-1）支持通过 SW3 拨码开关进行模式切换（UART2 固定为 RS232）。该开关为 8 位 DIP 类型，在原理图中核心配置引脚标记为 MODE_0、MODE_1 和 MODE_2。

接口实物如下图所示：
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/Switch.png"/>
</div>

**配置规则**

| 工作模式 | 拨码开关组合 (MODE_2, MODE_1, MODE_0) | 开关状态操作 |
|--------------|------------------------------------------------|------------------------|
| RS232        | 0 (OFF), 0 (OFF), 1 (ON)                       | MODE_0：拨到 ON；MODE_1/MODE_2：保持 OFF |
| RS422        | 0 (OFF), 0 (OFF), 0 (OFF) or 1 (ON), 0 (OFF), 0 (OFF) | MODE_0/MODE_1：保持 OFF；MODE_2：可选（ON/OFF） |
| RS485        | 0 (OFF), 1 (ON), 0 (OFF) or 1 (ON), 1 (ON), 0 (OFF) | MODE_1：拨到 ON；MODE_0/MODE_2：可选（ON/OFF） |

:::note
完成硬件连接后，请使用终端软件（例如 CuteCom）测试 UART 通信功能。如果尚未安装 CuteCom，可运行 `sudo apt-get install cutecom` 进行安装。请确保已通过 GPIO 命令使能对应的 UART 通道。
:::

### 使用说明

**GPIO 使能命令**

在连接前，请在终端中执行 GPIO 使能命令，以激活对应的 UART 通道：

```bash
# Enable UART1 (ttyTHS1)
sudo gpioset --mode=wait gpiochip0 2=0

# Enable UART2 (ttyTHS4)
sudo gpioset --mode=wait gpiochip2 15=0
```

#### RS232 模式测试

此处可以使用 USB 转 RS232 转换器来测试接口。我们在测试中使用了 [UGREEN USB to RS232 Adapter](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1)。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_1.png"/>
</div>

接线示意图如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/232-PC.png"/>
</div>

**步骤 1：启动 CuteCom**
运行 `sudo cutecom` 启动 CuteCom 终端软件。

**步骤 2：配置串口参数**
按以下参数配置串口：

- Device: `/dev/ttyTHS1` (UART1) 或 `/dev/ttyTHS4` (UART2)
- Baud Rate: 115200 bps
- Data Bits: 8, Parity: None, Stop Bits: 1, Flow Control: None

**步骤 3：打开串口**
点击 "Open Device" 打开串口。

**步骤 4：发送测试数据**
发送测试数据（例如 "232 test from jetson"），并在外设设备端验证数据接收情况。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_2.png"/>
</div>
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_3.png"/>
</div>

#### RS485 模式测试

此处可以使用 USB 转 RS485 转换器来测试接口。我们在测试中使用了 [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K)。

接线示意图如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/422-485.png"/>
</div>

**步骤 1：启动 CuteCom**
运行 `sudo cutecom` 启动 CuteCom 终端软件。

**步骤 2：配置串口参数**
按以下参数配置串口：

- Device: `/dev/ttyTHS1`
- Baud Rate: 9600 bps
- Data Bits: 8, Parity: None, Stop Bits: 1, Flow Control: None

**步骤 3：打开串口**
点击 "Open Device" 打开串口。

**步骤 4：发送测试数据**
发送测试数据（例如 "485 test from jetson"），并在外设设备端验证数据接收情况。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs485_1.png"/>
</div>

#### RS422 模式测试

此处可以使用 USB 转 RS422 转换器来测试接口。我们在测试中使用了 [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K)。

接线示意图如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/422-485.png"/>
</div>

**步骤 1：启动 CuteCom**
运行 `sudo cutecom` 启动 CuteCom 终端软件。

**步骤 2：配置串口参数**
按以下参数配置串口：

- Device: `/dev/ttyTHS1`
- Baud Rate: 9600 bps
- Data Bits: 8, Parity: None, Stop Bits: 1, Flow Control: None

**步骤 3：打开串口**
点击 "Open Device" 打开串口。

**步骤 4：发送测试数据**
发送测试数据（例如 "422 test from jetson"），并在外设设备端验证数据接收情况。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs422.png"/>
</div>

## RTC

reComputer Robotics J501 集成了带电池备份的硬件 RTC，用于精确计时。为 RTC 提供备份电源有两种方式：

1. 使用 CR1220 纽扣电池座（J14）
2. 使用 RTC 2-Pin Header - J4 连接外部电源

### 硬件连接

**方法 1：使用 CR1220 纽扣电池座**

将 3V CR1220 纽扣电池按下图所示连接到板载 RTC 插座中。请确保电池正极（+）朝上。

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_0.png"/>
</div>

**方法 2：使用 RTC 2-Pin Header**

RTC 2-Pin Header 提供了一种为 RTC 连接外部电源的替代方式。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_2pin_pinout.png"/>
</div>

### 使用说明

**步骤 1.** 按上述方法连接 RTC 电池。

**步骤 2.** 打开 reComputer Robotics J501。

**步骤 3.** 在 Ubuntu 桌面上，点击右上角的下拉菜单，进入 `Settings > Date & Time`，通过以太网线连接网络，并选择 **Automatic Date & Time** 以自动获取日期/时间。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_1.png"/>
</div>

:::note
如果尚未通过以太网连接到互联网，可以在此手动设置日期/时间。
:::

**步骤 4.** 打开终端窗口，执行以下命令检查硬件时钟时间：

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**步骤 5.** 断开网络连接并重启设备。你会发现系统时间已经失去供电但仍然可以正常工作。
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_2.png"/>
</div>

## 显示

Robotics J501 配备了一个 HDMI 接口，用于高分辨率显示输出。

## 扩展端口

Robotics J501 载板配备了用于 GMSL 扩展板的摄像头扩展排针。它可以同时连接并运行 4 个 GMSL 摄像头。

### 硬件连接

下面是 Robotics J501 载板 GMSL 摄像头扩展板的连接插槽（需要提前准备好扩展板）：

<div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
  <div>
    <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_conn_1.png"/>
  </div>
  <div>
    <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_conn_2.png"/>
  </div>
</div>

以下是我们已经支持的 GMSL 摄像头型号：

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### 使用说明

:::note
在启用 GMSL 功能之前，请确保你已经安装了带有 GMSL 扩展板驱动的 JetPack 版本。
:::

### 配置 Jetson IO 文件

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_1.png"/>
</div>

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_2.png"/>
</div>

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_3.png"/>
</div>

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_4.png"/>
</div>

:::note
一共有三个 overlay 文件，分别是 Seeed GMSL 1X4 3G、Seeed GMSL 1X4 6G、Seeed GMSL 1X4 和 Orbbec Gemini 335Lg。它们分别对应 SG3S 的 3G 摄像头、SG2 和 SG8S 的 6G 摄像头，以及 Orbbec 的摄像头。如图 3 所示，请根据你摄像头的型号配置 io 文件。
:::

**步骤 2.** 安装视频接口配置工具。

```bash
sudo apt update
sudo apt install v4l-utils wmctrl
```
<!-- 
### Use the camera of Gemini 335Lg

The first time you turn it on, you might need to update the firmware.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/update.png"/>
</div>

Opening the data stream, you can view the video from the camera.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/g_camera.png"/>
</div> -->

### 使用 SGxxx 系列摄像头

**步骤 1.** 设置帧同步模式（默认未启用！）。

:::info
这里我们演示如何配置不同型号和分辨率的摄像头。
:::

```bash
#enables frame synchronization
v4l2-ctl -d /dev/video0 --set-ctrl=trig_mode=1
#Set the frame rate of the camera
v4l2-ctl -V --set-fmt-video=width=1920,height=1536 -c sensor_mode=0 --stream-mmap -d /dev/video0
#Set the camera format
v4l2-ctl -V --set-fmt-video=width=1920,height=1536 -c sensor_mode=0 -d /dev/video0
```

:::note
`trig_mode = 1` 启用帧同步，而 `trig_mode = 0` 禁用帧同步。默认设置为禁用帧同步。

`--set-fmt-video` 后面跟随的分辨率是根据所连接的摄像头来选择的。目前有三个 sensor_mode 选项，每个选项对应一种不同的分辨率。

- sensor_mode=0 -------> YUYV8_1X16/1920x1536
- sensor_mode=1 -------> YUYV8_1X16/1920x1080
- sensor_mode=2 -------> YUYV8_1X16/3840x2160

:::

**步骤 2.** 启动摄像头。

```bash
gst-launch-1.0 \
    v4l2src device=/dev/video0 ! \
    video/x-raw,format=YUY2,width=1920,height=1080,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink

gst-launch-1.0 \
    v4l2src device=/dev/video1 ! \
    video/x-raw,format=YUY2,width=1920,height=1080,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink

gst-launch-1.0 \
    v4l2src device=/dev/video2 ! \
    video/x-raw,format=YUY2,width=1536,height=1080,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink

gst-launch-1.0 \
    v4l2src device=/dev/video3 ! \
    video/x-raw,format=YUY2,width=3840,height=2160,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_preview.png"/>
</div>

## 资源

- [reComputer Robotics J501 载板原理图](https://files.seeedstudio.com/wiki/recomputer_robotic_j501/reComputer%20Robotics%20J501%20Main%20Board%20for%20Jetson%20AGX%20Orin_V1.0_SCH_2512161.pdf)
- [reComputer Robotics J501 载板数据手册](https://files.seeedstudio.com/wiki/recomputer_robotic_j501/reComputer_robotics_J501_datasheet.pdf)
- [Seeed NVIDIA Jetson 产品目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Nvidia Jetson 对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Nvidia Jetson 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson 一页纸简介](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Seeed 的 L4T 源代码](https://github.com/Seeed-Studio/Linux_for_Tegra)

<!-- - [reComputer Robotics 3D file](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp) -->
<!-- - [Mechanical Document-reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf) -->
## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
