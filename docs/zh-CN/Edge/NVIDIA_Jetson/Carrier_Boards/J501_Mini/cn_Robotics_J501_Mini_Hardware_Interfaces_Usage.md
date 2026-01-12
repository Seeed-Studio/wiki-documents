---
description: 本 wiki 提供了 reComputer Jetson Robotics J501-Mini 载板的硬件特性和接口使用的全面介绍。它涵盖了详细的规格、支持的模块、设置说明，以及使用各种接口（如 M.2、以太网、USB、CAN、UART、DI/DO、I2S 和 GMSL2 相机扩展）的实用指南，帮助用户快速开始在 J501-Mini 平台上进行机器人开发。
title: 刷写 Jetpack && 接口使用
tags:
  - J501-Robotics 载板
  - 刷写 Jetpack
  - 机器人
  - 接口使用
  - 接口
  - 硬件
image: https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg
slug: /cn/recomputer_j501_mini_getting_started
sku: 100020039
last_update:
  date: 11/04/2025
  author: Dayu
---

# Robotics J501 载板硬件和入门指南

reComputer Robotics J501 Mini 是一款紧凑、高性能的边缘 AI 载板，专为先进机器人设计。兼容 NVIDIA Jetson AGX Orin 模块（32GB/64GB）在 MAXN 模式下，可提供高达 275 TOPS 的 AI 性能。配备广泛的连接选项——包括双千兆以太网端口、用于 5G 和 Wi-Fi/BT 模块的 M.2 插槽、2 个 USB 3.2 端口、CAN、GMSL2（通过可选扩展）、I2C 和 UART——它作为一个强大的机器人大脑，能够处理来自各种传感器的复杂数据。预装 JetPack 6.2.1 和 Linux BSP，确保无缝部署。

支持 NVIDIA Isaac ROS、Hugging Face、PyTorch 和 ROS 2/1 等框架，reComputer Robotics J501 Mini 将大语言模型驱动的决策制定与物理机器人控制（如运动规划和传感器融合）连接起来。非常适合自主机器人的快速开发，通过即用型接口和优化的 AI 框架加速产品上市时间。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font></span></strong>
    </a>
</div>

## reComputer Jetson Robotics J501-Mini 载板概述

| **顶视图** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/recomputer-j501-mini/top.png) |
| **侧视图** |
| ![fig2](https://files.seeedstudio.com/wiki/recomputer-j501-mini/side.png) |
| **底视图** |
| ![fig3](https://files.seeedstudio.com/wiki/recomputer-j501-mini/bottom.png) |

## 📝 零件清单

- reComputer Robotics J501-Mini 载板 x 1
- 电源和 JST 扩展板 x 1
- XT30 转 DC 线缆 x 1
- USB 线缆，Type A 转 Type C x 1
- 扩展板散热器 x 1
- 螺柱(M3*30) x 5
- M3 六角螺母 x 5
- 螺丝(CM2.5*L.4) 用于 Jetson 模块和 M.2 Key M x3
- 螺丝(CM2*3.0) 用于 M.2 Key E x1
- 螺柱(M2*2.0) 用于 M.2 Key B x1
- 螺丝(CM3*4.0) 用于 M.2 Key B x1
- 用户手册 x 1

:::note
1.在高电压电源和工作温度下，请根据热设计指南设计强大的散热解决方案。
2.请为模块安装散热器以获得更好的性能。
3.在高电压输入和高负载运行期间，请不要触摸散热器以防烫伤。
4.验证用电源适配器推荐，请使用 Seeed 官方网站推荐的电源适配器。

- 19V/4.74A 5525 桶形插头电源适配器
- 确保满足最大功耗要求。
2.AC 电源线兼容性
- 根据您的位置购买特定地区的 AC 三叶草电源线。
3.配件兼容性
- 仅使用官方推荐的配件（如无线模块、相机、外设）以获得最佳性能和兼容性。

:::

## 🔍 规格

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
      <td>1x M.2 KEY M PCIe (M.2 NVMe 2280 SSD)</td>
    </tr>
    <tr>
      <th rowSpan="2">网络</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E 用于 WiFi/蓝牙模块</td>
    </tr>
    <tr>
      <td>以太网</td>
      <td>1x RJ45 10GbE && 1x RJ45 1GbE</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>2x USB 3.2 Type-A (10Gbps);<br />1x USB 2.0 Type C (Debug);<br />1x USB 3.0 Type C (Recovery/Debug)</td>
    </tr>
    <tr>
      <td>相机</td>
      <td>2x 4 合 1 GMSL2 Mini-Fakra 连接器（可选）；</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN JST 4 针连接器(GH 1.25)；</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td>1x DI JST 6 针连接器(GH 1.25)；<br />1x DO JST 5 针连接器(GH 1.25)；</td>
    </tr>
      <tr>
      <td>I2S</td>
      <td>1x I2S JST 6 针连接器(GH 1.25)</td>
    </tr>
    <tr>
      <td>RS485</td>
      <td>1x RS-485 JST 4 针连接器(GH 1.25)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART JST 6 针连接器（与 DO 复用）</td>
    </tr>
    <tr>
      <td>显示</td>
      <td>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td>1x 4 针风扇连接器(12V PWM)</td>
    </tr>
    <tr>
      <td>扩展端口</td>
      <td>2x 相机扩展接头（用于 GMSL2 板）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2 针；</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>1x PWR LED，绿色；<br />1x SSD LED，绿色；<br />1x USR LED，RGB</td>
    </tr>
    <tr>
      <td>按钮</td>
      <td>1x Recovery 按钮；<br />1x RESET 按钮</td>
    </tr>
    <tr>
      <th rowSpan="1">电源</th>
      <td colSpan="2">19-48V XT30（包含 XT30 转 5525 DC 插头线缆）</td>
    </tr>
    <tr>
      <th rowSpan="1">Jetpack 版本</th>
      <td colSpan="2">Jetpack 6.2.1</td>
    </tr>
    <tr>
      <th rowSpan="3">机械</th>
      <td>尺寸（长 x 宽 x 高）</td>
      <td>115mm x 115mm x 38mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td>200g</td>
    </tr>
    <tr>
      <td>安装</td>
      <td>桌面、壁挂</td>
    </tr>
    <tr>
      <th rowSpan="1">工作温度</th>
      <td colSpan="2">-20℃~60℃（25W 模式）；<br />-20℃~55℃（MAXN 模式）；<br />（配备 reComputer Robotics 散热器和风扇）</td>
    </tr>
    <tr>
      <th rowSpan="1">保修</th>
      <td colSpan="2">2 年</td>
    </tr>
    <tr>
      <th rowSpan="1">认证</th>
      <td colSpan="2">RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>

## 📦 刷写 JetPack OS

### 支持的模块

- [NVIDIA® Jetson AGX Orin™ 模块 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ 模块 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### 前提条件

- Ubuntu 主机 PC
- Robotics J501 Mini 载板
- NVIDIA® Jetson AGX Orin 模块
- Nano/NX 模块主动风扇
- NVMe M.2 2280 内置 SSD
- USB Type-C 数据传输线缆

:::info

我们建议您使用物理 ubuntu 主机设备而不是虚拟机。
请参考下表准备主机。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack 版本 </td>
        <td class="dbon" colspan="3"> Ubuntu 版本（主机计算机） </td>
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

在这里，我们需要将对应我们使用的 Jetson 模块的系统镜像下载到我们的 Ubuntu PC：

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
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDxBYYGqIfaSZqJT3uPt0alAa47BjjqCGvXWhD5tBsKx1M?e=3SW4Jf">下载</a></td>
      <td>f0efee5f265dbaef49dc14d517b269e<br />7f6582ff9977d9193d377966f36408ec3  </td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBohA1Z3GuSSJ7tFOQU8v22AYu8NNk9AS-1Cne78jOnSHw?e=dejuH9">下载</a></td>
      <td>0a97cbb6d708776bd97608594c60c3<br />4208b5d5dc6efbfc5553edd9c5a95802f6 </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6 镜像文件大约 **14.2GB**，下载大约需要 60 分钟。请耐心等待下载完成。
:::

:::info
要验证下载固件的完整性，您可以比较 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 来获取下载文件的 SHA256 哈希值。如果结果哈希与 wiki 中提供的 SHA256 哈希匹配，则确认您下载的固件是完整的。
:::

⚙️ **SEEED 的 Jetson 载板的所有 `.dts` 文件和其他源代码可以从** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) **下载**


### 进入强制恢复模式

:::info
在我们进行安装步骤之前，我们需要确保板子处于强制恢复模式。
:::

<details>

<summary> 分步指南 </summary>

**步骤 1.** 持续按住按钮进入 RESET 模式。

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/reset.png" />
</div>

**步骤 2.** 通过连接电源线为载板供电，然后释放 **REC** 按钮。

**步骤 3.** 使用 USB Type-C 数据传输线缆将板子连接到 Ubuntu 主机 PC。

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/flash-port.png" />
</div>

**步骤 4.** 在 Linux 主机 PC 上，打开终端窗口并输入命令 `lsusb`。如果返回的内容根据您使用的 Jetson SoM 有以下输出之一，则板子处于强制恢复模式。

- 对于 AGX Orin 32GB：**0955:7223 NVidia Corp**
- 对于 AGX Orin 64GB：**0955:7023 NVidia Corp**

下图是 AGX Orin 32GB 的情况：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### 刷写到 Jetson

**步骤 1：** 解压下载的镜像文件：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2025-09-08.tar.gz
```

**步骤 2：** 执行以下命令将 jetpack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-robotics-j501 
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果刷写过程成功，您将看到以下输出

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
刷写命令可能需要运行 2-10 分钟。
:::

**步骤 3：** 将 Robotics J501-Mini 连接到显示器，使用 PD 转 HDMI 适配器连接到支持 HDMI 输入的显示器，或使用 PD 线缆直接连接到支持 PD 输入的显示器，并完成初始配置设置：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
请根据您的需要完成 **System Configuration**。
:::

## 🔌 接口使用

以下将介绍 Robotics j501-Mini 板的各种接口及其使用方法。

## M.2 Key M

M.2 Key M 专为高速 NVMe SSD 设计，为机器人应用提供超快的数据传输。

### 支持的 SSD 如下

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### 硬件连接

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-real.png"/>
</div>

### 使用说明

在测试 SSD 读写速度之前，您需要在 Jetson 终端中输入以下内容：

```bash
sudo apt update
sudo apt install smartmontools
sudo smartctl -i /dev/nvme0n1
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t.png"/>
</div>


创建脚本文件来测试 SSD 读写速度：


```bash
#You need to create a blank test file first
cat <<'EOF' | sudo tee test_nvme.sh >/dev/null
#!/usr/bin/env bash
set -e

sudo dd if=/dev/zero of=test bs=1000M count=1 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
sudo dd if=test of=/dev/null bs=1000M count=1
sudo rm -rf test
EOF
```

运行脚本来测试 SSD 读写速度：
```bash
sudo chmod +x test_nvme.sh
./test_nvme
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t2.png"/>
</div>



## M.2 Key E

M.2 Key E 接口是标准的 M.2 连接器，主要用于连接无线模块，如 Wi-Fi 和蓝牙，以扩展无线通信功能。

### 硬件连接

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/KEY-E.png"/>
</div>

### 使用说明

要测试 Wi-Fi 性能，请使用以下命令（将 IP 地址替换为您的测试服务器）：

```bash
iperf3 -c 192.168.6.191
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/wifi_speed.png"/>
</div>

蓝牙功能可通过 M.2 Key E 插槽使用。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/bluetooth.png"/>
</div>

## 以太网

Robotics j501-Mini 载板配备一个 1Gbps 和一个 10Gbps RJ45 以太网端口，用于高速有线网络连接。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethernet-real.png"/>
</div>

要测试以太网端口速度，请按如下方式使用 `iperf3`：

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` 是 iperf3 服务器的 IP 地址。客户端将连接到此服务器以执行带宽测试。
`<bind_ip>` 绑定指定的本地 IP 地址作为测试流量的源。
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethernet-speed.png"/>
</div>

## LED

J501 mini 有两个可控制的 LED。以下演示如何控制 LED 显示为**绿色**、**红色**或**蓝色**。

<!-- <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/led.jpg"/>
</div> -->

### 使用说明

控制 LED 的参考命令如下：

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
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/led-rg.jpg"/>
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/led-gg.jpg"/>
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/led-bg.jpg"/>
</div>

## USB

Robotics j501-Mini 载板配备多种 USB 端口，包括 2 个 USB 3.2 Type-A 端口（10Gbps）、一个 USB 3.0 Type-C 端口和一个用于设备模式/调试的 USB 2.0 Type-C 端口，提供多样化的连接选项。

### USB-A 速度测试

创建脚本来测试 USB 设备速度：

```bash
sudo vim test_usb
```

粘贴以下内容：

```bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
sudo dd if=/dev/zero of=/dev/$1 bs=1000M count=2 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
sudo dd if=/dev/$1 of=/dev/null bs=1000M count=2
EOF
```

使脚本可执行并测试：

```bash
sudo chmod +x test_usb
./test_usb
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/usba-test.png"/>
</div>



### USB 2.0 Type-C 端口

使用此串口，通过 USB-C 数据线，您可以在 PC 端监控输入和输出的调试信息。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/debug-port-real.png"/>
</div>


在您的 PC（不是 Jetson）上，安装串口登录工具并登录到 `/dev/ttyUSB0`（也可能是 `ttyUSB1`、2）：

```bash
sudo apt update
sudo apt install screen
screen /dev/ttyUSB0 115200
```

然后您可以通过另一台 Linux 主机上的串口控制 Jetson 的终端，如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/login-usb.png"/>
</div>


## 风扇

reComputer Jetson Robotics j501-Mini 配备：

- 1x 4 针风扇连接器（12V PWM）：兼容标准 12V PWM 风扇，还支持精确的速度控制，非常适合高性能散热需求。

### 硬件连接

Robotics J501 Mini 为风扇提供标准的 4 针接头。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan0.png"/>
</div>

**风扇**数据表原理图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan1.png"/>
</div>

**J1** 的引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan2.png"/>
</div>

:::note
更多信息，请查看[这里](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)。
:::

### 使用说明

**创建脚本来设置风扇速度：**

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


此外，我们可以使用 `jtop` 工具手动设置风扇速度。


## CAN

CAN（控制器局域网）是一种强大的车辆总线标准，使微控制器和设备能够在没有主机的情况下相互通信。

J501 Mini 提供两个集成到 JST 4 针（GH1.25）的 CAN 接口。此外，两个 CAN 接口都**支持 CAN-FD**，CAN0 和 CAN1 如下所示：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-real.png"/>
</div>

**CAN0** 和 **CAN1** 的引脚定义相似，接口图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-jst.png"/>
</div>

**CAN0** 对应 **J6**，引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can0-ds.png"/>
</div>

**CAN1** 对应 **J7**，引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can1-ds.png"/>
</div>

### CAN 通信
本节将 Jetson 上的 CAN0 和 CAN1 连接起来，演示如何在 `Classic CAN 模式` 和 `CAN-FD 模式` 下在 CAN0 和 CAN1 之间发送和接收数据。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/CAN-connect.png"/>
</div>

CAN0 和 CAN1 的终端电阻可以通过两个引脚控制：PAA.04（位于 gpiochip1 line4）和 PAA.07（位于 gpiochip1 line7）。

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


参考以下命令将 `PAA.04` 和 `PAA.07` 设置为 0：
```bash
sudo gpioset --mode=wait gpiochip1 4=0
sudo gpioset --mode=wait gpiochip1 7=0
```

参考以下命令将 `PAA.04` 和 `PAA.07` 设置为 1：
```bash
sudo gpioset --mode=wait gpiochip1 4=1
sudo gpioset --mode=wait gpiochip1 7=1
```



#### Classic CAN 模式

创建 `test_can.sh` 来测试 **CAN0** 和 **CAN1** 在标准模式下的数据传输和接收：

```bash
touch test_can.sh
chmod +x test_can.sh
sudo ./tets_can.sh
```
`test_can.sh` 的脚本代码如下：

<details>
<summary> test_can.sh </summary>

```sh
#!/bin/bash

echo "000000" | sudo -S ip link set can0 down
echo "000000" | sudo -S ip link set can1 down

# set buffer size
echo "000000" | sudo -S sysctl -w net.core.rmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.rmem_default=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_default=524288

 #set to 2M bps
echo "000000" | sudo -S ip link set can0 type can bitrate 2000000
echo "000000" | sudo -S ip link set can0 up

echo "000000" | sudo -S ip link set can1 type can bitrate 2000000
echo "000000" | sudo -S ip link set can1 up

sleep 2

#Enable 5s to test
sudo pkill -f gpioset
gpioset --mode=time --sec=200000 gpiochip1 7=0 &
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip1 4=0 &
GPIO2_PID=$!

cangen can1 &
candump can0
```

</details>

**CAN0** 和 **CAN1** 之间的数据传输和接收将完成：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can_normal.jpg"/>
</div>


#### CAN-FD 模式

在[数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)中，您可以找到 **CAN0/CAN1** 接口的接线图，如下所示：


<!-- <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_datasheet.png"/>
</div> -->

<!-- Here we will demonstrate to you how to conduct data communication using the CAN1 interface, by utilizing the [USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html). -->

创建 `test_canfd.sh` 来测试 CAN0 和 CAN1 在 CAN-FD 模式下的数据传输和接收：

```bash
touch test_canfd.sh
chmod +x test_can.sh
sudo ./tets_can.sh
```
`test_canfdfd.sh` 的脚本代码如下：

<details>
<summary> test_canfd.sh </summary>

```sh
#!/bin/bash

# configure CAN FD mode
#CAN bus rate set to 500 kbps, data rate set to 5 Mbps.
echo "000000" | sudo -S ip link set can0 down
echo "000000" | sudo -S sudo ip link set can0 type can bitrate 500000 dbitrate 5000000 berr-reporting on fd on restart-ms 100
echo "000000" | sudo -S ip link set can0 up

echo "000000" | sudo -S ip link set can1 down
echo "000000" | sudo -S sudo ip link set can1 type can bitrate 500000 dbitrate 5000000 berr-reporting on fd on restart-ms 100
echo "000000" | sudo -S ip link set can1 up


# config buffer size
echo "000000" | sudo -S sysctl -w net.core.rmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.rmem_default=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_default=524288


# check CAN FD status
echo "CAN0 status:"
ip -details link show can0

echo "CAN1 status:"
ip -details link show can1

#Enable 5s to test
sudo pkill -f gpioset
gpioset --mode=time --sec=200000 gpiochip1 7=0 &
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip1 4=0 &
GPIO2_PID=$!

candump can0 &
cangen can1 -f

```

</details>

CAN0 和 CAN1 之间的数据传输和接收将完成：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-fd.jpg"/>
</div>


## GPI && GPO

### GPI

Robotics J501 Mini 提供标准的 6 引脚 JST 接头用于 GPI。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-real.png"/>
</div>

**GPI** 数据手册原理图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-jst.png"/>
</div>

**J12** 的引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-ds.png"/>
</div>


启用 **GPI 1** 到 **GPI 4** 以读取输入状态：
```bash
sudo gpioset --mode=wait 0 131=0
```


要读取 **GPI 1** 到 **GPI 4** 的输入，请参考以下命令：
```bash
sudo gpioget 0 96  #read the input of GPI 1
sudo gpioget 0 104 #read the input of GPI 2
sudo gpioget 0 86  #read the input of GPI 3
sudo gpioget 0 83  #read the input of GPI 4
```

当读取到高电平时，将返回 1；当读取到低电平时，将返回 0。

### GPO

Robotics J501 Mini 提供标准的 6 引脚 JST 接头用于 GPO。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-real.png"/>
</div>


**GPO** 数据手册原理图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-jst.png"/>
</div>

**J14** 的引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-ds.png"/>
</div>

启用 **GPO 1** 到 **GPO 4** 以输出状态：
```bash
sudo gpioset --mode=wait 0 79=1
```


要设置 **GPO 1** 到 **GPO 4** 的输出，请参考以下命令：

```bash
sudo gpioset --mode=wait 0 110=1  #set output of GPO 1 to high voltag
sudo gpioset --mode=wait 0 112=1  #set output of GPO 2 to high voltag
sudo gpioset --mode=wait 0 111=1  #set output of GPO 3 to high voltag
sudo gpioset --mode=wait 0 113=1  #set output of GPO 4 to high voltag


sudo gpioset --mode=wait 0 110=1  #set output of GPO 1 to low voltag
sudo gpioset --mode=wait 0 112=1  #set output of GPO 2 to low voltag
sudo gpioset --mode=wait 0 111=1  #set output of GPO 3 to low voltag
sudo gpioset --mode=wait 0 113=1  #set output of GPO 4 to low voltag
```


## UART

Robotics J501 Mini 提供标准的 6 引脚 JST 接头用于 UART 串行通信。
UART 和 GPO 使用相同的 JST 接口。此接口默认为 GPO 功能。**如果您需要切换到 UART 功能，必须指向新的设备树并重启设备以使更改生效。**


对于 **UART** 通信，请按照以下接线方式。这里我们以 USB 转 TTL 工具为例。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/uart-real.png"/>
</div>

**UART** 数据手册原理图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-jst.png"/>
</div>

**J14** 的引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-ds.png"/>
</div>



:::warning
UART 和 GPO 共享同一个物理接口。默认情况下，此接口作为 GPO 功能。如果您需要切换到 UART，请参考本节内容。
:::

对于不同的模块，您需要下载相应的设备树文件。

AGX Orin 32G 的 `.dtb` 下载链接：
[https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0004-recomputer-mini.dtb](https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0004-recomputer-mini.dtb)

AGX Orin 64G 的 `.dtb` 下载链接：
[https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0005-recomputer-mini.dtb](https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0005-recomputer-mini.dtb)

将设备树复制到指定路径：
```bash
# AGX Orin 32G
sudo cp tegra234-j501x-0000%2Bp3701-0004-recomputer-mini.dtb /boot/

# AGX Orin 64G
sudo cp tegra234-j501x-0000%2Bp3701-0005-recomputer-mini.dtb /boot/
```

备份并修改 `/boot/extlinux/extlinux.conf`，添加一行指向新的 `.dtb` 文件：

```bash
sudo cp /boot/extlinux/extlinux.conf /boot/extlinux/extlinux.conf.bak
sudo vim /boot/extlinux/extlinux.conf
```

根据您使用的设备树文件名，在 `extlinux.conf` 中添加一行 `FDT=/your_path`。以 AGX Orin 32G 为例：

```python
LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      FDT=/boot/tegra234-j501x-0000+p3701-0004-recomputer-mini.dtb
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/uart-edit.png"/>
</div>


6 针 JST 接头 **UART** 映射到 Jetson 上的 `/dev/ttyTHS1`。您可以使用 `minicom` 查看串口数据传输和接收：

```bash
sudo apt install minicom
sudo minicom -D /dev/ttyTHS1
```


## RS485

RS485 接口提供了一个强大且抗噪声的差分通信通道，通常用于工业环境。它支持长距离、多点串行通信，非常适合连接传感器、电机控制器、PLC 和其他工业设备。

### 硬件连接

Robotics J501-Mini 提供了一个 JST 4 针（GH 1.25）接头用于 RS485。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-real.png"/>
</div>

**RS485** 数据手册原理图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-jst.png"/>
</div>

**J8** 的引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-ds.png"/>
</div>



### 使用说明
参考以下命令启用 **RS485** 接口：

```bash
sudo gpioset --mode=wait 1 9=0  # Enable 120R resistance

sudo gpioset --mode=wait 0 126=0 # Enable RS485
```


**RS485** 接口映射到 Jetson 上的 `/dev/ttyTHS4`。您可以使用 `cutecom` 与 PC 测试串行数据传输和接收：

```bash
sudo apt install cutecom
sudo cutecom
```

选择 `/dev/ttyTHS4`，将 Jetson 和 PC 都设置为 9600 波特率，并通过 RS485 转 USB 模块连接 Jetson 和 PC。
串行数据传输和接收效果如下图所示：

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
  <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485_jetson.png" alt="Jetson side" height={200} />
  <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485_PC.png" alt="PC side" height={200} />
</div>

## I2S

I2S 接口提供了一个数字音频通信总线，专为在设备之间传输立体声音频数据而设计。Robotics J501-Mini 支持标准 I2S 信号，允许高质量、低延迟的音频输入和输出，适用于语音交互、声音定位和实时音频处理等应用。

### 硬件连接
Robotics J501-Mini 提供了一个 1x JST 5 针连接器（GH 1.25）用于 **I2S**。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/I2S-real.png"/>
</div>


**I2S** 数据手册原理图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-jst.png"/>
</div>


**J9** 的引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-ds.png"/>
</div>


### 使用说明

要启用 **I2S**，您需要在 `jetson-io.py` 中配置它。在终端中运行以下命令：

```bash
sudo python /opt/nvidia/jetson-io/jetson-io.py
```

然后，参考以下四个步骤启用 I2S 接口：

- 步骤 1：选择 **Jetson 40-pin header** 选项
- 步骤 2：选择 **Configure header pins manually**
- 步骤 3：选择 `i2s2`；选择后，它将被标记为 `[*]`
- 步骤 4：保存设置并重启 Jetson

<div style={{ 
  display: 'grid', 
  gridTemplateColumns: '1fr 1fr', 
  gap: '10px', 
  justifyContent: 'center', 
  alignItems: 'center' 
}}>

  <!-- Step 1 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>步骤 1</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/1-i2s.png" 
         alt="Step 1" 
         height={300} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

  <!-- Step 3 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>步骤 3</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/3-i2s.png" 
         alt="Step 3" 
         height={300} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

  <!-- Step 2 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>步骤 2</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-i2s.png" 
         alt="Step 2" 
         height={500} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

  <!-- Step 4 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>步骤 4</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/4-i2s.png" 
         alt="Step 4" 
         height={460} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

</div>


启用 **I2S** 后，本节演示如何使用 I2S 驱动双声道扬声器。首先，在终端中输入以下内容：

```bash
amixer -c APE cset name="I2S2 Mux" "ADMAIF1" # Speaker
```

如果您使用的是麦克风：
```bash
amixer -c APE cset name="ADMAIF2 Mux" "I2S2" # Microphone
```

参考以下命令驱动扬声器，其中 `-c` 应更改为您使用的扬声器声道数：

```bash
speaker-test -t sine -f 440 -c 2
```

当扬声器正常驱动时，您可以在终端中看到输出，如下图所示。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-speaker.png"/>
</div>

## RTC


Robotics J501-Mini 提供了一个标准的 2 针接头用于 **RTC**（3V）。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc0.png"/>
</div>

**RTC** 数据手册原理图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc1.png"/>
</div>

**J15** 的引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc2.png"/>
</div>



插入外部电池后，您可以在终端中检查 `rtc0`（主 RTC，对应板载电池）的运行状态：

```bash
cat /sys/class/rtc/rtc0/power/runtime_status
```


## 扩展端口 - GMSL

Robotics j501-Mini 载板具有用于 GMSL 扩展板的摄像头扩展接头。它可以同时连接和操作四个 GMSL 摄像头。

### 硬件连接

以下是 Robotics j501-Mini 载板 GMSL 摄像头扩展板连接插槽（需要提前准备扩展板）：

<div align="center">
  <img width="450" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gmsl-real1.png"/>
  <img width="450" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gmsl-real2.png"/>
</div>

以下是我们已经支持的 GMSL 摄像头型号：

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A

### 使用说明

:::note
在启用 GMSL 功能之前，请确保您已安装了带有 GMSL 扩展板驱动程序的 JetPack 版本。
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
总共有三个覆盖文件，分别是 Seeed GMSL 1X4 3G、Seeed GMSL 1X4 6G、Seeed GMSL 1X4 和 Orbbec Gemini 335Lg。这些分别对应 SG3S 的 3G 摄像头、SG2 和 SG8S 的 6G 摄像头以及 Orbbec 的摄像头。如图 3 所示，请根据您的摄像头型号配置 io 文件。
:::

**步骤 2.** 安装视频接口配置工具。

```bash
sudo apt update
sudo apt install v4l-utils
```

<!-- ### Use the camera of Gemini 335Lg

```bash
#Download the Orbbec Gemini 335Lg visualization tool
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.8/OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
#unzip and run the UI tool
unzip OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
cd OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64
./OrbbecViewer
```

The first time you turn it on, you might need to update the firmware.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/update.png"/>
</div>

Opening the data stream, you can view the video from the camera.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/g_camera.png"/>
</div> -->

### 使用 SGxxx 系列摄像头

**步骤 1.** 为串行器和解串器设置通道格式。图中的接口编号对应串行器/解串器编号。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gmsl-Interface.png"/>
</div>

```bash
  media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_1_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_2_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_3_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_4_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_5_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_6_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_7_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_3":0[fmt:YUYV8_1X16/1920x1536]'

```

:::note
`ser_0_ch_0` 是解码器的第一个通道，`des_ch_0` 是第一个摄像头上的串行器，其他通道同理。如果连接的摄像头分辨率不同，那么这里的配置将基于摄像头的实际格式。
每次设备重启时，我们都需要为串行器和解串器设置通道格式。
:::

**步骤 2.** 设置摄像头的分辨率。

:::info
这里我们演示如何配置不同型号和分辨率的摄像头。
:::

```bash
v4l2-ctl -V --set-fmt-video=width=1920,height=1080 -c sensor_mode=1  -d /dev/video0
v4l2-ctl -V --set-fmt-video=width=1920,height=1080 -c sensor_mode=1  -d /dev/video1
v4l2-ctl -V --set-fmt-video=width=1920,height=1536 -c sensor_mode=0  -d /dev/video2
v4l2-ctl -V --set-fmt-video=width=3840,height=2160 -c sensor_mode=2  -d /dev/video3 
```

:::note
`--set-fmt-video` 后面跟随的分辨率是根据连接的摄像头选择的。sensor_mode 也会相应选择。目前有三种 sensor_mode 选项，每种对应不同的分辨率。

- sensor_mode=0 -------> YUYV8_1X16/1920x1536
- sensor_mode=1 -------> YUYV8_1X16/1920x1080
- sensor_mode=2 -------> YUYV8_1X16/3840x2160

:::

**步骤 3.** 启动摄像头。

```bash
gst-launch-1.0 v4l2src device=/dev/video0 ! \
'video/x-raw,width=1920,height=1080,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev

gst-launch-1.0 v4l2src device=/dev/video1 ! \
'video/x-raw,width=1920,height=1080,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev

gst-launch-1.0 v4l2src device=/dev/video2 ! \
'video/x-raw,width=1920,height=1536,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev

gst-launch-1.0 v4l2src device=/dev/video3 ! \
'video/x-raw,width=3840,height=2160,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/camera1.png"/>
</div>

## 显示

Robotics J501 Mini 配备了 HDMI 接口，用于高分辨率显示输出。

## 资源

- [reComputer Robotics J501-Mini 载板原理图](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_J501_datasheet.pdf)

<!-- - [reComputer Robotics J501-Mini Carrier Board Datasheet]() -->

- [Seeed L4T 源代码](https://github.com/Seeed-Studio/Linux_for_Tegra)

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
