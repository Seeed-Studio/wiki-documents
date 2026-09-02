---
description: 本文档全面介绍了 Jetson Mini J501 载板的硬件特性和接口使用方法。该载板专为边缘 AI 和机器人场景设计，内容涵盖详细规格、支持的模块、刷机步骤，以及 M.2、以太网、USB、CAN、UART、DI/DO、I2S 和 GMSL2 摄像头扩展等接口的实用使用指南。
title: Mini J501 刷写 JetPack 与接口使用
tags:
  - Mini J501 载板
  - 刷写 JetPack
  - 机器人
  - 接口使用
  - 接口
  - 硬件
image: https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg
slug: /recomputer_j501_mini_getting_started
sku: 100020039
last_update:
  date: 07/09/2026
  author: Dayu
createdAt: '2025-11-25'
updatedAt: '2026-08-17'
url: https://wiki.seeedstudio.com/cn/recomputer_j501_mini_getting_started/
---
# Mini J501 载板硬件与快速上手

Mini J501 是一款面向 NVIDIA Jetson AGX Orin 模块（32GB/64GB）的紧凑型高性能边缘 AI 载板。在 MAXN 模式下可提供高达 275 TOPS 的 AI 性能，并具备丰富的连接选项，包括双千兆以太网接口、用于 5G 和 Wi-Fi/Bluetooth 模块的 M.2 插槽、2 个 USB 3.2 接口、CAN、可选扩展的 GMSL2、I2C 和 UART 等。板载预装 JetPack 6.2.1 和 Linux BSP，可支持边缘 AI 应用的快速部署。

Mini J501 也可用于机器人场景。其支持 NVIDIA Isaac ROS、Hugging Face、PyTorch 和 ROS 2/1 等框架，可将模型驱动的决策与机器人实体控制相结合，包括运动规划、传感器融合和多摄像头感知等。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-with-GMSL-Bundle-for-Jetson-AGX-Orintm.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱</font></span></strong>
    </a>
</div>

## reComputer Jetson Mini J501 载板概览

| **顶视图** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/recomputer-j501-mini/top.png) |
| **侧视图** |
| ![fig2](https://files.seeedstudio.com/wiki/recomputer-j501-mini/side.png) |
| **底视图** |
| ![fig3](https://files.seeedstudio.com/wiki/recomputer-j501-mini/bottom.png) |

## 📝 清单

- Mini J501 载板 x 1
- 电源和 JST 扩展板 x 1
- XT30 转 DC 线缆 x 1
- USB 线缆，Type A 转 Type C x 1
- 扩展板散热片 x 1
- 支柱 (M3*30) x 5
- M3 六角螺母 x 5
- Jetson 模块和 M.2 Key M 固定螺丝 (CM2.5*L.4) x3
- M.2 Key E 固定螺丝 (CM2*3.0) x1
- M.2 Key B 支柱 (M2*2.0) x1
- M.2 Key B 固定螺丝 (CM3*4.0) x1
- 用户手册 x 1

:::note
1.在高电压供电和高工作温度下，请根据《热设计指南》设计可靠的散热方案。
2.请为模块安装散热片以获得更佳性能。
3.在高电压输入和高负载运行过程中，请勿触摸散热片，以防烫伤。
4.验证阶段电源适配器推荐：请使用 Seeed 官方网站推荐的电源适配器。

- 19V/4.74A 5525 圆孔电源适配器
- 确保满足最大功耗需求。
2.AC 电源线兼容性
- 请根据所在地区购买对应规格的三叶草 AC 电源线。
3.配件兼容性
- 请仅使用官方推荐的配件（如无线模块、摄像头、外设），以获得最佳性能和兼容性。

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
      <td>1x M.2 KEY M PCIe（M.2 NVMe 2280 SSD）</td>
    </tr>
    <tr>
      <th rowSpan="2">网络</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E，用于 WiFi/Bluetooth 模块</td>
    </tr>
    <tr>
      <td>以太网</td>
      <td>1x RJ45 10GbE && 1x RJ45 1GbE</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>2x USB 3.2 Type-A（10Gbps）；<br />1x USB 2.0 Type C（调试）；<br />1x USB 3.0 Type C（恢复/调试）</td>
    </tr>
    <tr>
      <td>摄像头</td>
      <td>2x 4 合 1 GMSL2 Mini-Fakra 接口（可选）；</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN JST 4-Pin 接口（GH 1.25）；</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td>1x DI JST 6-Pin 接口（GH 1.25）；<br />1x DO JST 5-Pin 接口（GH 1.25）；</td>
    </tr>
      <tr>
      <td>I2S</td>
      <td>1x I2S JST 6-Pin 接口（GH 1.25）</td>
    </tr>
    <tr>
      <td>RS485</td>
      <td>1x RS-485 JST 4-Pin 接口（GH 1.25）</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART JST 6-Pin 接口（与 DO 复用）</td>
    </tr>
    <tr>
      <td>显示</td>
      <td>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td>1x 4 Pin 风扇接口（12V PWM）</td>
    </tr>
    <tr>
      <td>扩展接口</td>
      <td>2x 摄像头扩展排针（用于 GMSL2 板）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2-Pin；</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>1x PWR LED，绿色；<br />1x SSD LED，绿色；<br />1x USR LED，RGB</td>
    </tr>
    <tr>
      <td>按键</td>
      <td>1x Recovery 按键；<br />1x RESET 按键</td>
    </tr>
    <tr>
      <th rowSpan="1">电源</th>
      <td colSpan="2">19-48V XT30（附带 XT30 转 5525 DC 插头线缆）</td>
    </tr>
    <tr>
      <th rowSpan="1">Jetpack 版本</th>
      <td colSpan="2">Jetpack 6.2.1</td>
    </tr>
    <tr>
      <th rowSpan="3">机械特性</th>
      <td>尺寸（宽 x 深 x 高）</td>
      <td>110mm x 110mm x 38mm</td>
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
      <td colSpan="2">-20℃~60℃（25W 模式）；<br />-20℃~55℃（MAXN 模式）；<br />（需搭配兼容的带风扇散热片）</td>
    </tr>
    <tr>
      <th rowSpan="1">质保</th>
      <td colSpan="2">2 年</td>
    </tr>
    <tr>
      <th rowSpan="1">认证</th>
      <td colSpan="2">RoHS、REACH、CE、FCC、UKCA、KC</td>
    </tr>
  </tbody>
</table>

## 📦 刷写 JetPack OS

### 支持的模块

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### 前置准备

- Ubuntu 主机电脑
- Mini J501 载板
- NVIDIA® Jetson AGX Orin 模块
- Nano/NX 模块主动散热风扇
- NVMe M.2 2280 内置 SSD
- USB Type-C 数据传输线

:::info

我们建议使用物理 Ubuntu 主机设备，而不是虚拟机。
请参考下表准备主机环境。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack 版本 </td>
        <td class="dbon" colspan="4"> Ubuntu 版本（主机电脑） </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
        <td > 24.04 </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 7.2</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

<p><strong>注意：</strong> 对于 JetPack 7.2，Ubuntu 24.04 仅支持刷机和目标端组件安装。如果需要主机端开发组件，请使用 Ubuntu 20.04 或 22.04。</p>

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
      <td rowSpan={2}>7.2</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBraqxVv-rUQKkcwG2EXybtAUKJgIvgi77ze4eig_Hj3Ns">Download</a></td>
      <td>1cd0d7004f426a524a55761bf01dd22280829b9834cbd11d4094b29865f46fe9</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBj3DRU7fhETozDjV3BAOG2Ac69rCRZhqNqr_RXuCliXXM">Download</a></td>
      <td>c369b02c979a8d0e1bd926725e94eba19be0e1b6a1a145e03a1179e77b72c5fd</td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2.1</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAUQ4ithrVMQLSE274ftNcLAdScXb2OFE8LXfabvKzaGS8">Download</a></td>
      <td>53859b314aba332c417c7295d9f6b6711bc7d8c4352dad55aa917af80757330c</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBvVrfoK43HRL2Y3PDLtz8wAUzka-auuvvWTx0J4QCrtwc">Download</a></td>
      <td>16408ec8d3b8b0e01eb7edd81b0367357f7dddfdee09388da4c74591d31f917a</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
JetPack 镜像文件体积较大，下载可能需要大约 60 分钟。请耐心等待下载完成。
:::

:::info
要验证下载固件的完整性，可以对比 SHA256 哈希值。

在 Ubuntu 主机上打开终端，运行命令 `sha256sum <File>` 获取下载文件的 SHA256 哈希值。如果结果与本文档中提供的 SHA256 值一致，则说明你下载的固件是完整且未损坏的。
:::

⚙️ **SEEED Jetson 载板的所有 `.dts` 文件及其他源代码可从此处下载：** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)


### 进入强制恢复模式

:::info
在继续安装步骤之前，我们需要确保载板已进入强制恢复模式。
:::

<details>

<summary> 分步操作 </summary>

**步骤 1.** 按住 **REC** 按键不放。

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/reset.png" />
</div>

**步骤 2.** 连接电源线为载板供电，然后松开 **REC** 按钮。

**步骤 3.** 使用 USB Type-C 数据传输线将载板连接到 Ubuntu 主机电脑。

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/flash-port.png" />
</div>

**步骤 4.** 在 Linux 主机电脑上打开终端窗口并输入命令 `lsusb`。如果根据你所使用的 Jetson SoM，在返回内容中出现以下输出之一，则说明载板已进入强制恢复模式。

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
# For JetPack 7.2 example: sudo tar xpf mfi_recomputer-mini-agx-orin-j501x-32g-7.2.0-39.2.0-2026-06-25.tar.gz
# For JetPack 6.2.1 example: sudo tar xpf mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11.tar.gz
```

**步骤 2：** 执行以下命令，将 jetpack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果刷写过程成功，你将看到如下输出

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
刷写命令可能需要运行 2-10 分钟。
:::

**步骤 3：** 使用 PD 转 HDMI 转接器将 Mini J501 连接到显示器，或者使用 PD 线直接连接到支持 PD 输入的显示器，并完成初始配置设置：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
请根据你的需求完成 **System Configuration**。
:::

## 🔌 接口使用

以下章节将介绍 Mini J501 载板的各类接口及其使用方法。

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
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-real.png"/>
</div>

### 使用说明

在测试 SSD 读写速度之前，你需要在 Jetson 终端中输入以下内容：

```bash
sudo apt update
sudo apt install smartmontools
sudo smartctl -i /dev/nvme0n1
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t.png"/>
</div>


创建一个脚本文件来测试 SSD 读写速度：


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

运行脚本以测试 SSD 读写速度：
```bash
sudo chmod +x test_nvme.sh
./test_nvme
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t2.png"/>
</div>



## M.2 Key E

M.2 Key E 接口是一个标准的 M.2 连接器，主要用于连接无线模块，例如 Wi-Fi 和蓝牙，以扩展无线通信能力。

### 硬件连接

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/KEY-E.png"/>
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

Mini J501 载板配备一个 1Gbps 和一个 10Gbps RJ45 以太网接口，用于高速有线网络连接。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethernet-real.png"/>
</div>

要测试以太网接口速度，请按如下方式使用 `iperf3`：

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` 是 iperf3 服务器的 IP 地址。客户端将连接到该服务器执行带宽测试。
`<bind_ip>` 将指定的本地 IP 地址绑定为测试流量的源地址。
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethernet-speed.png"/>
</div>

## LED

Mini J501 上有两个可控的 LED。下面演示如何将 LED 控制为**绿色**、**红色**或**蓝色**。

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

Mini J501 载板配备多种 USB 接口，包括 2 个 USB 3.2 Type-A 接口（10Gbps）、1 个 USB 3.0 Type-C 接口，以及 1 个用于设备模式/调试的 USB 2.0 Type-C 接口，提供多样化的连接选项。

### USB-A 速度测试

创建一个脚本来测试 USB 设备速度：

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

使脚本可执行并进行测试： 

```bash
sudo chmod +x test_usb
./test_usb
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/usba-test.png"/>
</div>



### USB 2.0 Type-C 接口

通过该串口，使用 USB-C 数据线，你可以在 PC 端监控输入和输出的调试信息。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/debug-port-real.png"/>
</div>


在你的 PC（不是 Jetson）上安装串口登录工具，并登录到 `/dev/ttyUSB0`（也可能是 `ttyUSB1`、2）：

```bash
sudo apt update
sudo apt install screen
screen /dev/ttyUSB0 115200
```

然后你就可以通过另一台 Linux 主机上的串口控制 Jetson 的终端，如下图所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/login-usb.png"/>
</div>


## 风扇

reComputer Jetson Mini J501 配备：

- 1x 4-Pin 风扇连接器（12V PWM）：兼容标准 12V PWM 风扇，并支持精确转速控制，非常适合高性能散热需求。

### 硬件连接

Mini J501 提供一个标准的 4 针风扇排针。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan0.png"/>
</div>

**Fan** 的数据手册原理图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan1.png"/>
</div>

**J1** 的引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan2.png"/>
</div>

:::note
更多信息请查看[这里](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)。
:::

### 使用说明

**创建脚本来设置风扇转速：**

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


此外，我们还可以使用 `jtop` 工具手动设置风扇转速。


## CAN

CAN（控制器局域网，Controller Area Network）是一种可靠的车载总线标准，使微控制器和设备无需主机电脑即可相互通信。  

Mini J501 提供了两个集成在 JST 4 针（GH1.25）中的 CAN 接口。此外，这两个 CAN 接口均**支持 CAN-FD**，CAN0 和 CAN1 如下所示：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-real.png"/>
</div>

**CAN0** 和 **CAN1** 的引脚定义类似，接口示意图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-jst.png"/>
</div>

**CAN0** 对应 **J6**，其引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can0-ds.png"/>
</div>

**CAN1** 对应 **J7**，其引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can1-ds.png"/>
</div>

### CAN 通信
本节将连接 Jetson 上的 CAN0 和 CAN1，演示如何在 `Classic CAN mode` 和 `CAN-FD mode` 下实现 CAN0 与 CAN1 之间的数据收发。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/CAN-connect.png"/>
</div>

CAN0 和 CAN1 的终端电阻可以通过两个引脚进行控制：PAA.04（位于 gpiochip1 的 line4）和 PAA.07（位于 gpiochip1 的 line7）。  

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

创建 `test_can.sh`，用于测试 **CAN0** 与 **CAN1** 在标准模式下的数据收发：

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

**CAN0** 与 **CAN1** 之间的数据收发将被完成：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can_normal.jpg"/>
</div>


#### CAN-FD 模式

在 [datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf) 中，你可以找到如下所示的 **CAN0/CAN1** 接口接线图：


<!-- <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_datasheet.png"/>
</div> -->

<!-- Here we will demonstrate to you how to conduct data communication using the CAN1 interface, by utilizing the [USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html). -->

创建 `test_canfd.sh`，用于测试 CAN0 与 CAN1 在 CAN-FD 模式下的数据收发：

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

CAN0 与 CAN1 之间的数据收发将被完成：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-fd.jpg"/>
</div>


## GPI && GPO

### GPI

Mini J501 为 GPI 提供了一个标准的 6 针 JST 接口。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-real.png"/>
</div>

**GPI** 的数据手册原理图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-jst.png"/>
</div>

**J12** 的引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-ds.png"/>
</div>


使能 **GPI 1** 到 **GPI 4** 以读取输入状态：
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

当读取为高电平时，将返回 1；当读取为低电平时，将返回 0。

### GPO

Mini J501 为 GPO 提供了一个标准的 6 针 JST 接口。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-real.png"/>
</div>


**GPO** 的数据手册原理图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-jst.png"/>
</div>

**J14** 的引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-ds.png"/>
</div>

使能 **GPO 1** 到 **GPO 4** 以输出状态：
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

Mini J501 为 UART 串口通信提供了一个标准的 6 针 JST 接口。
UART 和 GPO 使用相同的 JST 接口。该接口默认为 GPO 功能。**如果你需要切换为 UART 功能，必须指向新的设备树并重启设备，变更才会生效。**


对于 **UART** 通信，请按照以下接线方式进行。这里以 USB 转 TTL 工具为例。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/uart-real.png"/>
</div>

**UART** 的数据手册原理图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-jst.png"/>
</div>

**J14** 的引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-ds.png"/>
</div>



:::warning
UART 和 GPO 共享同一个物理接口。默认情况下，该接口作为 GPO 使用。如果你需要切换为 UART，请参考本节内容。
:::

对于不同的模组，你需要下载对应的设备树文件。

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

根据你使用的设备树文件名，在 `extlinux.conf` 中添加一行 `FDT=/your_path`。以 AGX Orin 32G 为例：

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


6 针 JST 排针 **UART** 在 Jetson 上映射为 `/dev/ttyTHS1`。你可以使用 `minicom` 查看串口数据的收发情况：

```bash
sudo apt install minicom
sudo minicom -D /dev/ttyTHS1
```


## RS485

RS485 接口提供了一个稳健且抗噪的差分通信通道，常用于工业环境。它支持长距离、多点串行通信，非常适合连接传感器、电机控制器、PLC 以及其他工业设备。

### 硬件连接

Mini J501 为 RS485 提供了一个 JST 4 针（GH 1.25）排针。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-real.png"/>
</div>

**RS485** 规格书中的原理图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-jst.png"/>
</div>

**J8** 的引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-ds.png"/>
</div>



### 使用说明
参考以下命令以启用 **RS485** 接口：

```bash
sudo gpioset --mode=wait 1 9=0  # Enable 120R resistance

sudo gpioset --mode=wait 0 126=0 # Enable RS485
```


**RS485** 接口在 Jetson 上映射为 `/dev/ttyTHS4`。你可以使用 `cutecom` 与 PC 一起测试串口数据的收发：

```bash
sudo apt install cutecom
sudo cutecom
```

选择 `/dev/ttyTHS4`，将 Jetson 和 PC 的波特率都设置为 9600，并通过 RS485 转 USB 模块连接 Jetson 和 PC。
串口数据收发效果如下图所示：

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
  <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485_jetson.png" alt="Jetson side" height={200} />
  <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485_PC.png" alt="PC side" height={200} />
</div>

## I2S

I2S 接口提供了一个数字音频通信总线，用于在设备之间传输立体声音频数据。Mini J501 支持标准 I2S 信号，可为语音交互、声源定位和实时音频处理等应用提供高质量、低延迟的音频输入和输出。

### 硬件连接
Mini J501 为 **I2S** 提供了 1 个 JST 5 针连接器（GH 1.25）。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/I2S-real.png"/>
</div>


**I2S** 规格书中的原理图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-jst.png"/>
</div>


**J9** 的引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-ds.png"/>
</div>


### 使用说明

要启用 **I2S**，需要在 `jetson-io.py` 中进行配置。在终端中运行以下命令：

```bash
sudo python /opt/nvidia/jetson-io/jetson-io.py
```

然后参考下面四个步骤启用 I2S 接口：

- step1：选择 **Jetson 40-pin header** 选项  
- step2：选择 **Configure header pins manually**  
- step3：选择 `i2s2`；选择后会被标记为 `[*]`  
- step4：保存设置并重启 Jetson  

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
    }}>Step 1</div>
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
    }}>Step 3</div>
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
    }}>Step 2</div>
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
    }}>Step 4</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/4-i2s.png" 
         alt="Step 4" 
         height={460} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

</div>


启用 **I2S** 后，本节将演示如何使用 I2S 驱动双声道扬声器。首先在终端中输入以下命令：

```bash
amixer -c APE cset name="I2S2 Mux" "ADMAIF1" # Speaker
```

如果你使用的是麦克风：
```bash
amixer -c APE cset name="ADMAIF2 Mux" "I2S2" # Microphone
```

参考下面的命令驱动扬声器，其中 `-c` 需要根据你使用的扬声器声道数进行修改：

```bash
speaker-test -t sine -f 440 -c 2
```

当扬声器正常驱动时，你可以在终端中看到输出，如下图所示。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-speaker.png"/>
</div>

## RTC


Mini J501 为 **RTC**（3V）提供了一个标准 2 针排针。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc0.png"/>
</div>

**RTC** 规格书中的原理图如下所示：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc1.png"/>
</div>

**J15** 的引脚定义如下：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc2.png"/>
</div>



插入外接电池后，你可以在终端中查看 `rtc0`（主 RTC，对应板载电池）的工作状态：

```bash
cat /sys/class/rtc/rtc0/power/runtime_status
```


## 扩展端口 - GMSL

Mini J501 载板配备了用于 GMSL 扩展板的摄像头扩展排针。它可以同时连接并运行四个 GMSL 摄像头。

### 硬件连接

下面是 Mini J501 载板 GMSL 摄像头扩展板的连接插槽（你需要提前准备好扩展板）：

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
一共有三个 overlay 文件，分别是 Seeed GMSL 1X4 3G、Seeed GMSL 1X4 6G、Seeed GMSL 1X4 和 Orbbec Gemini 335Lg。它们分别对应 SG3S 的 3G 摄像头、SG2 和 SG8S 的 6G 摄像头以及 Orbbec 的摄像头。如图 3 所示，请根据你摄像头的型号配置 io 文件。
:::

**step 2.** 安装视频接口配置工具。

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

打开数据流后，您可以查看来自摄像头的视频。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/g_camera.png"/>
</div> -->

### 使用 SGxxx 系列的摄像头

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
`ser_0_ch_0` 是解码器的第一个通道，`des_ch_0` 是第一路摄像头上的串行器，其它通道同理。如果连接的摄像头分辨率不同，那么这里的配置将基于摄像头的实际格式。
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
`--set-fmt-video` 后面跟随的分辨率是根据所连接的摄像头来选择的。`sensor_mode` 也会相应选择。目前有三个 `sensor_mode` 选项，每个对应一种不同的分辨率。

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

Mini J501 配备了一个 HDMI 接口，用于高分辨率显示输出。

## 资源

- [reComputer Mini J501 载板原理图](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_J501_datasheet.pdf)

<!-- - [reComputer Mini J501 Carrier Board Datasheet]() -->

- [Seeed 的 L4T 源代码](https://github.com/Seeed-Studio/Linux_for_Tegra)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
