---
description: 本维基详细介绍了 reComputer Jetson Robotics J401 载板的硬件特性和接口使用方法，涵盖详细规格、支持的模块、安装步骤，以及 M.2、Ethernet、USB、CAN、UART、I2C 和 GMSL2 摄像头扩展等各类接口的实用使用指南，帮助用户快速在 J401 平台上开展机器人开发。
title: 接口使用
tags:
  - J401-Robotics carrier board
  - Jetson
  - Robotics
  - Interfaces Usage
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer_robotics1.webp
slug: /recomputer_jetson_robotics_j401_getting_started
sku: 100071398, 100001302, 100010971
last_update:
  date: 06/10/2025
  author: Zibo
---

# Robotics J401 载板硬件与快速上手

reComputer Robotics J401 是一款紧凑型、高性能的边缘 AI 载板，专为高级机器人应用设计。它兼容 NVIDIA Jetson Orin Nano/Orin NX 模块，并支持 Super/MAXN 模式，可提供高达 157 TOPS 的 AI 性能。该载板配备丰富的连接选项——包括双千兆以太网端口、用于 5G 和 Wi-Fi/BT 模块的 M.2 插槽、6 个 USB 3.2 接口、CAN、GMSL2（通过可选扩展板）、I2C 和 UART——可作为强大的机器人“大脑”，处理来自各类传感器的复杂数据。预装 JetPack 6 和 Linux BSP，确保系统可无缝部署。​

reComputer Robotics J401 支持 NVIDIA Isaac ROS、Hugging Face、PyTorch 和 ROS 2/1 等框架，将大语言模型驱动的决策能力与机器人实体控制（如运动规划和传感器融合）连接起来。它非常适合用于自主机器人快速开发，通过开箱即用的接口和优化的 AI 框架，加速产品上市进程。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics-carrier-board.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font></span></strong>
    </a>
</div>

## reComputer Jetson Robotics J401 载板概览

| **顶视图** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/top.png) |
| **顶视图** |
| ![fig2](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/fornt.png) |
| **顶视图** |
| ![fig3](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/bottom.png) |

## 清单

- reComputer Robotics J401 载板 x 1
- 电源和 JST 扩展板 x 1
- XT30 转 DC 线缆 x 1
- USB 线缆，Type A 转 Type C x 1
- 扩展板散热片 x 1
- 支柱 (M3*30) x 5
- M3 六角螺母 x 5
- 用于 Jetson 模块和 M.2 Key M 的螺丝 (CM2.5*L.4) x3
- 用于 M.2 Key E 的螺丝 (CM2*3.0) x1
- 用于 M.2 Key B 的支柱 (M2*2.0) x1
- 用于 M.2 Key B 的螺丝 (CM3*4.0) x1
- 用户手册 x 1

:::note
1.在高电压供电和高工作温度下，请根据《热设计指南》设计可靠的散热方案。
2.请为模块安装散热片以获得更佳性能。
3.在高电压输入和高负载运行期间，请勿触摸散热片，以防烫伤。
4.用于验证的电源适配器建议，请使用 Seeed 官方网站推荐的电源适配器。

- 19V/4.74A 5525 圆孔电源适配器
- 确保满足最大功耗需求。
2.AC 电源线兼容性
- 请根据所在地区购买对应规格的三叶草 AC 电源线。
3.配件兼容性
- 为获得最佳性能和兼容性，请仅使用官方推荐的配件（如无线模块、摄像头、外设等）。

:::

## 规格

### 载板规格

<table border="1" cellPadding="8" cellSpacing="0">
  <thead>
    <tr>
      <th>类别</th>
      <th>项目</th>
      <th>详情</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowSpan="1">存储</th>
      <td>M.2 KEY M PCIe</td>
      <td>1x M.2 KEY M PCIe（内置 128G M.2 NVMe 2280 SSD）</td>
    </tr>
    <tr>
      <th rowSpan="3">网络</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E，用于 WiFi/Bluetooth 模块</td>
    </tr>
    <tr>
      <td>M.2 KEY B</td>
      <td>1x M.2 Key B，用于 5G 模块</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>2x RJ45 千兆以太网</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>6x USB 3.2 Type-A (5Gbps);<br />1x USB 3.0 Type-C (Host/DP 1.4);<br />1x USB 2.0 Type-C (Device Mode/Debug)</td>
    </tr>
    <tr>
      <td>Camera</td>
      <td>1x 4 合 1 GMSL2（mini fakra）（可选板）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0（XT30(2+2)）；<br />3x CAN1（4-Pin GH 1.25 插针）</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1x DP1.4（Type C Host）</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART 4-Pin GH 1.25 插针</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C 4-Pin GH 1.25 插针</td>
    </tr>
    <tr>
      <td>Fan</td>
      <td>1x 4-Pin 风扇接口（5V PWM）；<br />1x 4-Pin 风扇接口（12V PWM）</td>
    </tr>
    <tr>
      <td>Extension Port</td>
      <td>1x 摄像头扩展排针（用于 GMSL2 板）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2-pin；<br />1x RTC 插座</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>3x LED（PWR、ACT 和用户 LED）</td>
    </tr>
    <tr>
      <td>Pinhole Button</td>
      <td>1x PWR；<br />1x RESET</td>
    </tr>
    <tr>
      <td>DIP Switch</td>
      <td>1x REC</td>
    </tr>
    <tr>
      <td>Antenna Hole</td>
      <td>5x 天线孔</td>
    </tr>
    <tr>
      <th rowSpan="1">电源</th>
      <td colSpan="2">19-54V XT30(2+2)（附带 XT30 转 5525 DC 插孔线缆）</td>
    </tr>
    <tr>
      <th rowSpan="1">Jetpack 版本</th>
      <td colSpan="2">Jetpack 6</td>
    </tr>
    <tr>
      <th rowSpan="3">机械特性</th>
      <td>尺寸 (W x D x H)</td>
      <td>115mm x 115mm x 38mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td>200g</td>
    </tr>
    <tr>
      <td>安装方式</td>
      <td>桌面、壁挂</td>
    </tr>
    <tr>
      <th rowSpan="1">工作温度</th>
      <td colSpan="2">-20℃~60℃（25W 模式）；<br />-20℃~55℃（MAXN 模式）；<br />（搭配 reComputer Robotics 带风扇散热片）</td>
    </tr>
    <tr>
      <th rowSpan="1">质保</th>
      <td>2 年</td>
    </tr>
    <tr>
      <th rowSpan="1">认证</th>
      <td>RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>

## 刷写 JetPack OS

### 支持的模块

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html)

### 前置准备

- Ubuntu 主机电脑
- Robotics J401 载板
- NVIDIA® Jetson Orin™ Nano/NX 模块
- Nano/NX 模块主动散热风扇
- NVMe M.2 2280 内置 SSD
- USB Type-C 数据传输线

:::info

我们建议使用物理 Ubuntu 主机设备，而不是虚拟机。
请参考下表准备主机环境。

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

在这里，我们需要在 Ubuntu PC 上下载与所使用 Jetson 模块对应的系统镜像：

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
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eaq3jfzUJiVJpBSdd0UqtKIB8cRP--j90it2K1Vk7Neo3g?e=sYD5S2">Download</a></td>
      <td>c63d1219531245abecc7bbdcafc73d3<br />4f75547454c7af85de40f08396a87e5ee  </td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWIfNPP5Te5CqqiIBwXxilwBeTYuJiXPlO4OVFZxf54-gw?e=fGjs5R">Download</a></td>
      <td>5d1f3cd28eb44ca60132c87ccce5aca<br />f806ee945b486df9061a34de73fbb582b </td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERskD6LNzTRFkvDuLiSubTsBH8_eEFinmE-mPDvUhYZREg?e=deeaoO">Download</a></td>
      <td>e7f0c8e6b578d411f81122879f92c76<br />66adfada5ed493a4cc458dc169ca8c1b7  </td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETx2PP9D85dHgzljJ_pJH-0Bsss82nPxMbOkJ-JvPA1hrQ?e=cReLPU">Download</a></td>
      <td> b08cbdad8ab6e50222146d3175a9d2<br />627d499bf1d67cfaf69cc737b5bfa9e33a </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6 镜像文件大小约为 **14.2GB**，下载大约需要 60 分钟，请耐心等待下载完成。
:::

:::info
要验证下载固件的完整性，可以对比 SHA256 哈希值。

在 Ubuntu 主机上打开终端，运行命令 `sha256sum <File>` 获取下载文件的 SHA256 哈希值。如果结果与本 wiki 中提供的 SHA256 值一致，则说明你下载的固件是完整且未损坏的。
:::

### 进入强制恢复模式

:::info
在继续安装步骤之前，我们需要确保载板已进入强制恢复模式。
:::

<details>

<summary> Step-by-Step </summary>

**步骤 1.** 将拨码开关切换到 RESET 模式。

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg" />
</div>

**步骤 2.** 连接电源线以给载板供电。

**步骤 3.** 使用 USB Type-C 数据传输线将载板连接到 Ubuntu 主机电脑。

**步骤 4.** 在 Linux 主机电脑上打开终端窗口并输入命令 `lsusb`。如果根据你使用的 Jetson SoM，返回的内容中包含以下输出之一，则说明载板已进入强制恢复模式。

- 对于 Orin NX 16GB：**0955:7323 NVidia Corp**
- 对于 Orin NX 8GB：**0955:7423 NVidia Corp**
- 对于 Orin Nano 8GB：**0955:7523 NVidia Corp**
- 对于 Orin Nano 4GB：**0955:7623 NVidia Corp**

下图为 Orin Nano 8GB 的示例

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### 刷写到 Jetson

**步骤 1：** 解压下载的镜像文件：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-orin-nano-8g-j401-gmsl-6.2-36.4.3-2026-02-06.tar.gz
```

**步骤 2：** 执行以下命令将 jetpack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-robotics-j401 
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果刷写过程成功，你将看到如下输出

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
刷写命令可能需要运行 2-10 分钟。
:::

**步骤 3：** 将 Robotics J401 连接到显示器，可使用 PD 转 HDMI 转接器连接到支持 HDMI 输入的显示器，或使用 PD 线直接连接到支持 PD 输入的显示器，并完成初始配置设置：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
请根据你的需求完成 **System Configuration**。
:::

## 接口使用

下面将介绍 Robotics J401 载板的各类接口及其使用方法。

## M.2 Key M

M.2 Key M 专为高速 NVMe SSD 设计，为机器人应用提供超高速数据传输。

### 支持的 SSD 如下

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### 硬件连接

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/ssd_c.jpg"/>
</div>

### 使用说明

在 Jetson 设备中打开终端，输入以下命令测试 SSD 的读写速度。

```bash
#You need to create a blank test file first
sudo touch /ssd/test
dd if=/dev/zero of=/home/seeed/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd_w.png"/>
</div>

:::danger
测试完成后，请运行 `sudo rm /home/seeed/ssd/test` 命令删除缓存文件。
:::

## M.2 Key B

M.2 Key B 插槽用于 5G 模组扩展，为机器人和边缘 AI 场景提供高速蜂窝网络连接。

### 硬件连接

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/5g_c.jpg"/>
</div>

### 使用说明

**步骤 1.** 检查硬件识别情况

```bash
lsusb 
```

该命令会显示系统中所有已连接的 USB 设备列表，以及它们的厂商（ID）、类型和其他信息。例如，输出中可能会显示来自 Quectel Wireless Solutions Co., Ltd. 的 EM12-G 设备，表明 5G 模组已存在。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb.png"/>
</div>

**步骤 2.** 确认驱动加载
必须确保 5G 模组所需的 option 驱动已加载。我们可以使用 lsmod 命令进行检查。

```bash
lsmod | grep option 
```

如果 option 驱动加载成功，输出中会显示与该驱动相关的信息。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsmod.png"/>
</div>

**步骤 3.** 配置 ModemManager
ModemManager 是一个用于管理调制解调器设备的工具，需要安装并重启。

```bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

apt install 命令用于安装 ModemManager 软件包，而 systemctl restart 用于重启 ModemManager 服务，以确保新设置生效。

**步骤 4.** 验证模组识别
我们可以使用 mmcli -L 命令检查 ModemManager 是否能正确识别 5G 模组。

```bash
mmcli -L 
```

如果 5G 模组被识别，将会显示类似 /org/freedesktop/ModemManager1/Modem/0 的输出，表示检测到的调制解调器设备路径。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_l.jpg"/>
</div>

**步骤 5.** 设置 APN
APN（接入点名称）对于移动设备连接网络至关重要。我们将使用 nmcli 命令创建承载配置文件。以中国移动为例，可以使用以下命令创建配置文件：

```bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

该命令添加一个新的 GSM（全球移动通信系统）类型连接，将 APN 指定为 "CMNET"，并使用自动 IPv4 配置。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_con.jpg"/>
</div>

**步骤 6.** 激活连接
创建承载配置文件后，我们需要激活该连接。

```bash
sudo nmcli con up "gsm" 
```

该命令会激活 GSM 连接，如果成功，将显示确认信息。

**步骤 7.** 再次验证模组识别
再次运行 mmcli -L 命令，以确保在配置 APN 之后模组仍然被识别。

```bash
mmcli -L 
```

**步骤 8.** 检查模组状态
最后，我们可以使用 mmcli -m 0 命令查看模组的详细信息，例如 IP 分配、运营商以及网络连接状态。

```bash
mmcli -m 0 
```

该命令会提供有关 5G 模组的详细信息，包括其制造商、型号、支持和当前使用的网络技术、设备状态以及已连接的网络运营商。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_m.jpg"/>
</div>

## M.2 Key E

M.2 Key E 接口是标准的 M.2 连接器，主要用于连接无线模组，例如 Wi-Fi 和蓝牙，以扩展无线通信能力。

### 硬件连接

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/m2_e.jpg"/>
</div>

### 使用说明

要测试 Wi-Fi 性能，请使用以下命令（将 IP 地址替换为你的测试服务器）：

```bash
iperf3 -c 192.168.6.191
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/wifi_speed.png"/>
</div>

蓝牙功能可通过 M.2 Key E 插槽实现。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/bluetooth.png"/>
</div>

## 以太网

Robotics j401 载板配备 2 个 1Gbps RJ45 以太网端口，用于高速有线网络连接。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/eth.jpg"/>
</div>

要测试以太网端口速度，请按如下方式使用 `iperf3`：

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` 是 iperf3 服务器的 IP 地址。客户端将连接到该服务器以执行带宽测试。
`<bind_ip>` 将指定的本地 IP 地址绑定为测试流量的源地址。
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/ethnet_speed.png"/>
</div>

## LED

reComputer Jetson Robotics J401 配备 3 个 LED 指示灯（PWR、ACT 和 User LED），可为电源、系统活动和用户自定义功能提供清晰的状态反馈。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/led.jpg"/>
</div>

### 使用说明

User LED 是一个 RGB LED，可以显示不同颜色以指示各种状态，需要由用户自行定义。

下面是一个用于控制 RGB LED 的测试脚本：

```bash
touch rgb_test
chmod +x rgb_test
vi rgb_test
```

粘贴以下内容：

```bash
#!/bin/bash
# RED ON
gpioset --mode=time --sec=1 2 0=1
sleep 2
# RED OFF
gpioset --mode=time --sec=1 2 0=0

# Blue ON
gpioset --mode=time --sec=1 2 1=1
sleep 2
# Blue OFF
gpioset --mode=time --sec=1 2 1=0

# Green ON
gpioset --mode=time --sec=1 2 2=1
sleep 2
# Green OFF
gpioset --mode=time --sec=1 2 2=0
```

运行该脚本以测试 RGB LED。

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/rgb_led.gif"/>
</div>

## USB

Robotics j401 载板配备多种 USB 接口，包括 6 个 USB 3.2 Type-A 端口（5Gbps）、1 个带 DP 1.4（Host 模式）的 USB 3.0 Type-C 端口，以及 1 个用于设备模式/调试的 USB 2.0 Type-C 端口，提供多样化的连接选项。

### USB 速度测试

创建一个脚本来测试 USB 设备速度：

```bash
sudo vim test_usb
```

粘贴以下内容：

```bash
#!/bin/bash
sudo dd if=/dev/zero of=/dev/$1 bs=1000M count=2 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
sudo dd if=/dev/$1 of=/dev/null bs=1000M count=2
```

使脚本具有可执行权限：

```bash
sudo chmod +x test_usb
```

使用你的 USB 设备名称作为参数运行该脚本。

### USB 2.0 Type-C 接口

通过该串口和 USB C 数据线，你可以在 PC 端监控输入和输出的调试信息。

**步骤 1.** 将拨码开关切换到调试模式。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug.jpg"/>
</div>

**步骤 2.** 通过 USB 数据线连接 PC，在你的 PC 上下载 [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads)。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**步骤 3.** 通过 USB 数据线连接 PC，解压下载的文件并在你的 PC 上安装驱动。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**步骤 4.** 在 Windows PC 上打开 Device Manager，并检查分配给 reComputer Super 的 COM 端口号。它应显示在 "Ports (COM & LPT)" 下，名称为 "Silicon Labs CP210x USB to UART Bridge (COMX)"，其中 X 为 COM 端口号。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/com4.png"/>
</div>

**步骤 5.** 打开串口工具（这里以 MobaXterm 工具为例），创建一个新会话。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**步骤 6.** 选择 Serial 工具。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**步骤 7.** 选择对应的串口，将波特率设置为 115200 并点击 "OK"。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug1.png"/>
</div>

**步骤 8.** 使用用户名和密码登录你的 reComputer Super。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug2.png"/>
</div>

### USB 摄像头

通过 USB 3.2 Type-A 接口使用 USB 摄像头，安装并运行 `guvcview`：

```bash
sudo apt-get install guvcview
guvcview -d /dev/video0
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/usb_camera.png"/>
</div>

## 风扇

reComputer Jetson Robotics J401 配备了两种类型的风扇连接器，以满足不同电压和散热需求：

- 1x 4-Pin 风扇连接器（5V PWM）：专为低电压、低功耗静音风扇设计，该连接器支持 PWM 转速控制，可根据系统温度智能调节风扇转速，从而提高能效并降低噪音。

- 1x 4-Pin 风扇连接器（12V PWM）：兼容标准 12V PWM 风扇，同样支持精确转速控制，非常适合高性能散热需求。

### 硬件连接

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/fan.png"/>
</div>

:::note
更多信息请查看[这里](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)。
:::

**创建一个脚本来设置风扇转速：**

```bash
cat test_fanSpeedSet
```

粘贴以下内容：

```bash
#!/bin/bash
sudo systemctl stop nvfancontrol
sleep 2
echo "000000" | sudo -S chmod 777 /sys/devices/platform/pwm-fan/hwmon/hwmon1/pwm1
echo $1 > /sys/devices/platform/pwm-fan/hwmon/hwmon1/pwm1
```

> 注意：对于 Jetson Nano 4G，风扇路径为 `/sys/devices/platform/pwm-fan/hwmon/hwmon0/pwm1`。

此外，我们可以使用 jtop 工具手动设置风扇转速。

## 针孔按键

Robotics J401 载板配备了用于用户交互的针孔按键，包括电源（PWR）按键和重置（RESET）按键。这些按键分别用于设备的开关机和系统重启。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/pinhole_button.jpg"/>
</div>

## CAN

CAN（Controller Area Network，控制器局域网）是一种可靠的车载总线标准，使微控制器和设备无需主机计算机即可相互通信。
Robotics J401 在 XT30（2+2）电源连接器中集成了一个 CAN0 接口，用于方便的电源和数据传输。此外，还通过两个标准 JST 4-pin 接口提供 3 个 CAN1 接口，以实现灵活的 CAN 总线连接。

### CAN 通信

在[数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)中，你可以找到如下所示的 CAN0/CAN1 接口接线图：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_datasheet.png"/>
</div>

这里我们将向你演示如何使用 CAN1 接口进行数据通信，并使用 [USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)。

### 硬件连接

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_c.png"/>
</div>

根据下图所示的连接方式，将 CAN1 的 CANL、CANH 和 GND 分别连接到 USB to CAN 工具对应的 CANL、CANH 和 GND 端口。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_c1.png"/>
</div>

在我们的示例中，根据所使用的适配器，我们已经下载并安装了可在[这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)找到的软件。

**步骤 1.** 配置 CAN1 接口：

```bash
#Set the bit rate
sudo ip link set can1 type can bitrate 500000
#Enable CAN1
sudo ip link set can1 up
```

**步骤 2.** 配置 PC 端数据接收软件。
请按照下图所示配置通信设置。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can_software.png"/>
</div>

**步骤 3.** Jetson 向 PC 发送数据：

```bash
cansend can1 123#abcdabcd
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/pc_rcan1.png"/>
</div>

**步骤 3.** PC 向 Jetson 发送数据：

```bash
#CAN1 monitors PC data
candump can1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1.png"/>
</div>

可以看到，Jetson 终端已经接收到 PC 发送的数据。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_r.png"/>
</div>

### CAN FD 模式

这里，我使用 CAN0 连接到 CAN1，演示多台 Jetson 设备如何通过 CAN 接口进行通信。

### 硬件连接

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can0_can1_c.jpg"/>
</div>

**步骤 1.** 拆下底盖，并将两个 120Ω 终端电阻设置为 ON 位置。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/on.jpg"/>
</div>

**步骤 2.** 配置 CAN0 和 CAN1 接口：

```bash
#close the interface

sudo ip link set can0 down
sudo ip link set can1 down

#Set to FD mode

sudo ip link set can0 type can bitrate 500000 dbitrate 2000000 fd on
sudo ip link set can1 type can bitrate 500000 dbitrate 2000000 fd on

#open the interface
sudo ip link set can0 up
sudo ip link set can1 up

```

**步骤 3.** 打开一个新的终端监听 CAN1，并通过 CAN0 向 CAN1 发送数据：

```bash
#open a new terminal and run
candump can1

#another terminal sends data
cansend can0 123##011112233445566778899AABBCCDDEEFF112233445566778899AABBCCDDEEFF112233445566778899AABBCCDDEEFF
```

:::info

- `123` 是 ID
- `##` 表示 CAN FD 帧
- 后面是 64 字节数据（共 128 个十六进制字符）

:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can_fd.png"/>
</div>

## UART

Robotics J401 提供了一个标准的 4-pin JST 接口用于 UART 串行通信。

### 硬件连接

对于 UART 通信，请按照以下接线方式进行。这里我们以 USB to TTL 工具为例。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_c.jpg"/>
</div>

### 使用说明

**步骤 1.** 在 Jetson 设备上打开终端并运行以下命令以启用 UART 接口：

```bash
gpioset --mode=time --sec=100 2 5=0
```

**步骤 2.** 将 USB to TTL 工具连接到 Robotics J401 的 UART 接口和 PC。

**步骤 3.** 在 PC 端打开串口工具（这里以 xcom 工具为例），并将波特率设置为 115200。

**步骤 4.** 创建一个简单的 Python 脚本用于串行通信：

```python

import serial
import time

ser = serial.Serial('/dev/ttyTHS1', 115200, timeout=1)
ser.write(b'Hello Jetson!\n')
while True:

    if ser.in_waiting:
        data = ser.readline()
        print("get:", data.decode('utf-8').strip())
    time.sleep(0.1)

ser.close()
```

**步骤 5.** 在 Jetson 设备上运行 Python 脚本：

```bash
python3 uart_test.py
```

**步骤 6.** 现在你可以在 PC 端看到输出，也可以从 PC 向 Jetson 设备发送数据：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_s.jpg"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_r.png"/>
</div>

## I2C

Robotics J401 通过标准 JST 4 针排针提供两个 I2C 接口（IIC0 和 IIC1）。
可轻松连接传感器和外设以扩展系统。

### 硬件连接

Robotics J401 具有两个 4 针 GH-1.25 IIC 接口，IIC0 和 IIC1。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic.jpg"/>
</div>

在 [datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf) 中，你可以找到如下所示的 IIC0/IIC1 4 针 GH-1.25 接口接线图：
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/12c.png"/>
</div>
选择一个 IIC 接口设备进行测试，具体选择由你决定。这里我们使用 [Arduino-Uno-Rev4-Minima](https://www.seeedstudio.com/Arduino-Uno-Rev4-Minima-p-5716.html) 来测试 I2C0/I2C1。

此处的测试过程包括扫描 IIC0/IIC1 上外部连接设备的地址。
:::info
请按照以下连接方式连接设备（IIC0/IIC1 ↔ Device）：

- Power → Power

- SDA → SDA

- SCL → SCL

- Ground → Ground

:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_connect.jpg"/>
</div>

### 使用说明

**步骤 1.** 下载 [Arduino IDE](https://www.arduino.cc/en/software/) 来上传代码。

**步骤 2.** 选择开发板的类型。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/slect_board.png"/>
</div>

**步骤 3.** 重启 IDE 并上传你的代码。

```bash
#code example
#include <Wire.h>

void setup() {
  Wire.begin(0x08); // Set the I2C slave address to 0x08
  Wire.onReceive(receiveEvent);
  Wire.onRequest(requestEvent);
}

void loop() {
  delay(100);
}

void receiveEvent(int howMany) {
  // Callback when receiving host data
  while (Wire.available()) {
    char c = Wire.read();
    // Data received can be processed here.
  }
}

void requestEvent() {
  // Callback when the host requests data
  Wire.write("A"); // Return a byte of data
}
```

**步骤 4.** 在 Jetson 上安装用于 IIC 测试的工具。

```bash
sudo apt update
sudo apt-get install i2c-tools
```

**步骤 5.** 在终端中运行以下命令以查看 IIC 总线上映射的名称：

```bash
i2cdetect -l
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_l.png"/>
</div>

**步骤 6.** 运行以下命令在 IIC0 上进行扫描：

```bash
sudo i2cdetect -y -r 1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_detect.png"/>
</div>

我们可以看到连接到 IIC0 的设备被设置为地址 0x08。

## 扩展端口

Robotics j401 载板配备了用于 GMSL 扩展板的 Camera Expansion Header。它可以同时连接并运行四个 GMSL 摄像头。

### 硬件连接

下面是 Robotics j401 载板 GMSL 摄像头扩展板连接插槽（需要提前准备扩展板）：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/exb.png"/>
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
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/io_p1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/io_p2.png"/>
</div>

:::note
一共有三个 overlay 文件，分别是 Seeed GMSL 1X4 3G、Seeed GMSL 1X4 6G、Seeed GMSL 1X4 和 Orbbec Gemini 335Lg。它们分别对应 SG3S 的 3G 摄像头、SG2 和 SG8S 的 6G 摄像头，以及 Orbbec 的摄像头。如图 3 所示，请根据你的摄像头型号配置 io 文件。
:::

**步骤 2.** 安装视频接口配置工具。

```bash
sudo apt update
sudo apt install v4l-utils
```

### 使用 Gemini 335Lg 摄像头

```bash
#Download the Orbbec Gemini 335Lg visualization tool
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.8/OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
#unzip and run the UI tool
unzip OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
cd OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64
./OrbbecViewer
```

第一次开启时，你可能需要更新固件。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/update.png"/>
</div>

打开数据流后，你可以查看来自摄像头的视频。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/g_camera.png"/>
</div>

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

`--set-fmt-video` 后面跟随的分辨率是根据所连接摄像头选择的。目前有三个 sensor_mode 选项，每个选项对应一种不同的分辨率。
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
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/camera1.png"/>
</div>

## 显示

reComputer Jetson Robotics J401 配备了一个 DP1.4（包含在 Type-C Host 中），用于高分辨率显示输出。

## 资源

- [reComputer Robotics J401 载板原理图](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Robotics%20J401_V1.0_SCH_250421.pdf)
- [reComputer Robotics J401 载板数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)
- [reComputer Robotics 3D 文件](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp)
- [Mechanical Document-reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf)
- [Seeed NVIDIA Jetson 产品目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Nvidia Jetson 对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Nvidia Jetson 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson 一页纸简介](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
