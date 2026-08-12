---
description: 本维基介绍了 Seeed AGX Orin Dev Kit（reComputer Classic J501）的产品特性、规格参数与硬件总览，如何刷写 JetPack 7.2 系统镜像，以及 M.2 Key M/E、10GbE 以太网、USB、40 针扩展排针（GPIO/I2C/SPI/UART/CAN/PWM）、摄像头、音频、PCIe、RTC 等接口的使用方法，帮助您快速上手基于 Jetson AGX Orin 的边缘 AI 与具身智能开发。
title: reComputer Classic J501 入门指南
tags:
  - reComputer Classic J501
  - Seeed AGX Orin Dev Kit
  - Flash Jetpack
  - Interfaces Usage
  - Jetson AGX Orin
  - Embodied AI
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/100006184-gallery_img_1.jpg
slug: /ai_robotics_seeed_agx_orin_dev_kit_getting_started
sku: 100003716,100006184
last_update:
  date: 08/10/2026
  author: Zuhao
createdAt: '2026-05-26'
updatedAt: '2026-08-10'
url: https://wiki.seeedstudio.com/cn/ai_robotics_seeed_agx_orin_dev_kit_getting_started/
---

# 刷写 JetPack 与接口使用 | reComputer Classic J501

reComputer Classic J501 是一款围绕 NVIDIA® Jetson AGX Orin™ 模块（32GB/64GB）构建的高性能、紧凑型边缘 AI 计算机，最高 275 TOPS AI 算力，可直接替代 NVIDIA Jetson AGX Orin Developer Kit。它配备 1 路 10GbE 万兆以太网、4× USB 3.2 Type-A、M.2 Key M（NVMe Gen4）与 Key E（WiFi/BT）插槽、PCIe 扩展插槽、40 针扩展排针及 8 路 MIPI CSI 摄像头扩展，可为大模型部署、视觉语言导航（VLN）与视觉语言动作（VLA）等负载提供边缘侧推理能力。

产品支持 JetPack 7.2（兼容 JetPack 6.2），支持刷写 NVIDIA 官方 BSP 与 `sudo apt upgrade` 系统更新，兼容 CUDA、TensorRT、DeepStream、Isaac ROS、PyTorch、ROS 2/1 等工具链与框架，加速自主机器人、智能视觉与多传感器融合等边缘 AI 系统开发。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/100006184-gallery_img_1.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Classic-J5011-p-6880.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 J5011（32GB）🖱</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 J5012（64GB）🖱</font></span></strong>
    </a>
</div>

## 关键特性

- **高性能 AI**：搭载 Jetson AGX Orin 32/64GB 模块，Ampere 架构 GPU + NVDLA v2.0，最高 275 TOPS（INT8），面向大语言模型部署与具身智能应用
- **完全兼容 NVIDIA Jetson 生态**：支持刷写 NVIDIA 官方 BSP、`sudo apt upgrade` 系统更新、SDK Manager 配置环境；CUDA / TensorRT / DeepStream 开箱即用
- **丰富连接性**：M.2 Key M（NVMe Gen4）+ M.2 Key E（WiFi/BT）；1 路 10GbE；4 路 USB 3.2 Type-A；2 路 USB Type-C（供电 / Recovery）
- **全功能扩展**：PCIe 插槽（x8 电气）；40 针排针（I2C、I2S、SPI、UART、GPIO、CAN、PWM）；8 路 CSI 摄像头 BTB 连接器
- **面向机器人应用**：支持 ROS 2/1、Isaac ROS；原生 CAN0/CAN1；针对 AMR 与自动化场景优化
- **易用设计**：19V 适配器 + DC 9–20V 宽压输入；0~40℃ 工作温度；上电自启（Automation Header 短接 5-6 脚）

## 规格参数

### Jetson AGX Orin 系统模块规格

| 项目          | reComputer Classic J501（32G / J5011）                  | reComputer Classic J501（64G / J5012）                   |
| ----------- | ----------------------------------------------------- | ------------------------------------------------------ |
| 模块          | NVIDIA Jetson AGX Orin 32GB                           | NVIDIA Jetson AGX Orin 64GB                            |
| AI 性能       | 200 TOPS（INT8）                                        | 275 TOPS（INT8）                                         |
| GPU         | 1792 核 NVIDIA Ampere，56 Tensor Core                   | 2048 核 NVIDIA Ampere，64 Tensor Core                    |
| CPU         | 8 核 Arm Cortex-A78AE，2MB L2 + 4MB L3                  | 12 核 Arm Cortex-A78AE，3MB L2 + 6MB L3                  |
| 内存          | 32GB 256-bit LPDDR5 @ 204.8 GB/s                      | 64GB 256-bit LPDDR5 @ 204.8 GB/s                       |
| 视频编码（H.265） | 1×4K60 \| 3×4K30 \| 6×1080p60 \| 12×1080p30           | 2×4K60 \| 4×4K30 \| 8×1080p60 \| 16×1080p30            |
| 视频解码（H.265） | 1×8K30 \| 2×4K60 \| 4×4K30 \| 9×1080p60 \| 18×1080p30 | 1×8K30 \| 3×4K60 \| 7×4K30 \| 11×1080p60 \| 22×1080p30 |
| DL / 视觉加速器  | 2× NVDLA v2.0 / PVA v2.0                              | 2× NVDLA v2.0 / PVA v2.0                               |
| 板载存储        | 64GB eMMC 5.1                                         | 64GB eMMC 5.1                                          |
| 功耗          | 15W – 40W                                             | 15W – 60W                                              |

### 载板规格

| 项目       | 规格                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------- |
| 机械尺寸     | 110mm × 110mm × 73mm                                                                              |
| 显示       | 1× DP（附 DP→HDMI 线）                                                                                |
| 网络       | 1× RJ45 10GbE（J17）                                                                                |
| M.2      | 1× M.2 Key M（J4，NVMe 2280，Gen4，附 128G SSD）；1× M.2 Key E（J5，2230 WiFi/BT，附模块）                      |
| USB      | 4× USB 3.2 Type-A（J24/J33）；1× USB 3.0 Type-C（供电）；1× USB 3.0 Type-C（Recovery）；1× Micro USB（J26，调试） |
| PCIe     | 1× PCIe 插槽（J6，UPHY block1 ×8，控制器 #5）                                                              |
| 扩展 IO    | 40-pin 排针（J30：I2C、I2S、SPI、UART、GPIO、CAN、PWM）                                                      |
| 摄像头      | BTB 摄像头连接器（J509，CSI0–CSI7，8×2-lane）                                                               |
| 风扇       | 1× 4 针 5V PWM 风扇接口（J9，PWM + TACH）                                                                 |
| 按键 / LED | 1× Recovery + 1× RST + 1× Power；1× PWR/ACT 绿色 LED                                                 |
| RTC      | 1× RTC 2 针排针（J13）                                                                                 |
| 其他       | 音频面板排针（J511）；自动化排针（J42）；JTAG 排针（J502）                                                             |
| 电源输入     | DC Jack，DC 9–20V（附 19V 适配器）                                                                       |
| 软件       | JetPack 7.2（兼容 JetPack 6.2）                                                                       |
| 工作温度     | 0~40℃                                                                                             |

## 硬件总览

**侧面视图 1** —— 按键 / 供电 / 网络 / 显示：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_side_view_1.png"/>
</div>

1. Power Button（电源按键）　2. Recovery Button（恢复按键）　3. Reset Button（复位按键）　4. LED - Power/ACT（电源/活动指示灯）　5. USB Type-C - Power（Type-C 供电口）　6. DC 5525 9~20V（直流电源插孔）　7. 10 GbE（万兆网口）　8. USB Type-A × 2　9. Display Port（显示输出）

**侧面视图 2** —— 扩展接口：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_side_view_2.png"/>
</div>

1. PCIe x16 Expansion（PCIe x16 物理插槽）　2. USB Type-C for flashing（刷机用 Type-C 口）　3. 40-pin connector（40 针扩展排针）　4. USB 3.2 Type-A × 2

**底部视图** —— 载板内部接口：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_bottom_view.png"/>
</div>

1. Automation Header（自动化排针 J42）　2. RTC Battery Connector（RTC 电池连接器 J13）　3. JTAG Header（JTAG 排针 J502）　4. M.2 Key E（附 WiFi/BT 模块）　5. Audio Header（音频排针 J511）　6. Camera Connector（摄像头连接器 J509）　7. M.2 Key M（附 128G SSD）

## 📦 刷写 JetPack 操作系统

### 支持的模块

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### 前置准备

- Ubuntu 主机电脑
- reComputer Classic J501
- USB Type-C 数据传输线
- 19V 电源适配器

:::info

我们建议使用物理 Ubuntu 主机设备，而不是虚拟机。
请参考下表准备主机环境。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td rowspan="2"> JetPack 版本 </td>
        <td class="dbon" colspan="3"> Ubuntu 版本（主机电脑） </td>
    </tr>
    <tr>
        <td> 20.04 </td>
        <td> 22.04 </td>
        <td> 24.04 </td>
    </tr>
    <tr>
        <td> JetPack 7.2 </td>
        <td> ✅ </td>
        <td> ✅ </td>
        <td> ✅ </td>
    </tr>
  </tbody>
</table>

<p><strong>注意：</strong> 对于 JetPack 7.2，Ubuntu 24.04 仅支持刷机和目标端组件安装。如果需要主机端开发组件，请使用 Ubuntu 20.04 或 22.04。</p>

:::

### 准备 JetPack 镜像

在这里，我们需要根据所使用的 Jetson 模块，在 Ubuntu 主机上下载对应的系统镜像：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack 版本</th>
      <th>Jetson 模块</th>
      <th>下载链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>7.2</td>
      <td>AGX Orin 64GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBO6K-vbZtNQrhyL3ZfEJH2AUCoIRVNqDCcmA9QsbABiJA">Download</a></td>
      <td>07bb83b8b0fced67a71126ada26076a0<br />76bdefee394d0647429ef9c15bab0f6b</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCQ4t5XnL9sS7StIWTe2d08AQy2N6Su32eg5pZ3IrvfFBs">Download</a></td>
      <td>55e2acfbec97313dbacb04c80c668442<br />2e169c1e5299228d424f8807bd7be4bd</td>
    </tr>
  </tbody>
</table>
</div>

:::note
Classic J501 **不带 GMSL 接口**。本文刷机示例基于 **64GB** 版本，镜像文件名形如 `mfi_seeed-agx-orin-64g-<JetPack 版本>-<L4T 版本>-<日期>.tar.gz`，解压后为同名目录（以下示例以 `mfi_seeed-agx-orin-64g-7.2.0-39.2.0-2026-08-04` 为例，请以实际下载文件名为准）。
:::

:::danger
JetPack 镜像文件较大，下载可能需要大约 60 分钟。请等待下载完成。
:::

:::info
要验证已下载固件的完整性，可以比较 SHA256 哈希值。

在 Ubuntu 主机上打开终端并运行命令 `sha256sum <File>` 以获取下载文件的 SHA256 哈希值。如果得到的哈希值与 wiki 中提供的 SHA256 哈希值一致，则说明你下载的固件是完整且未损坏的。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_sha256sum.png"/>
</div>
:::

⚙️ **所有用于 SEEED Jetson 载板的 `.dts` 文件和其他源代码可以从此处下载：** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)

### 进入强制恢复模式

<details>

<summary> 分步说明 </summary>

在继续安装步骤之前，我们需要确保开发板处于强制恢复模式。

📌 关键硬件位置（另见本文「硬件总览」）：

| 部件                | 位置                                                   | 说明                                                                   |
| ----------------- | ---------------------------------------------------- | -------------------------------------------------------------------- |
| Recovery 按钮       | 侧视图 1，标记 #2                                          | 载板上 1× Recovery Button（与 Power、Reset 同侧）                             |
| Recovery USB-C 端口 | 侧视图 2，标记 #2（USB Type-C for flashing）                 | 固件刷写专用 USB Type-C 接口，数据手册标注 1× USB 3.0 Type-C (Recovery)，用于 Flashing |
| 其他 USB 端口         | Type-C (Power) / Micro-B (Debug) / 4× USB 3.2 Type-A | **不要接错 Recovery 端口**                                                 |

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_recovery_button.png"/>
</div>

**步骤 1.** 使用 USB Type-C 数据线连接载板的 **USB Type-C for flashing** 口（侧视图 2，标记 #2）和 Ubuntu 主机电脑。

**步骤 2.** 按下恢复按键（侧视图 1，标记 #2），并保持按住。

**步骤 3.** 接通电源（DC 5525，9–20V / 19V 适配器）。

**步骤 4.** 松开恢复按键。

**步骤 5.** 在 Linux 主机电脑上打开终端窗口并输入命令 `lsusb`。如果返回的内容中根据你使用的 Jetson SoM 出现以下输出之一，则说明开发板已进入强制恢复模式。

- 对于 AGX Orin 64GB：**0955:7023 NVidia Corp**
- 对于 AGX Orin 32GB：**0955:7223 NVidia Corp**

下图为 AGX Orin 64GB 的示例：

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_lsusb_recovery.png"/>
</div>

</details>

### 刷写到 Jetson

**步骤 1：** 解压下载的镜像文件（以 64GB 版本为例）：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For JetPack 7.2 example: sudo tar xpf mfi_seeed-agx-orin-64g-7.2.0-39.2.0-2026-08-04.tar.gz
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_extract_image.png"/>
</div>

**步骤 2：** 执行以下命令将 JetPack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# For example: cd mfi_seeed-agx-orin-64g-7.2.0-39.2.0-2026-08-04
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_start.png"/>
</div>

如果刷写过程成功，你将看到如下输出（`Successfully flashed the QSPI` / `Successfully flashed the eMMC` / `Flashing success`）：

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_success.png"/>
</div>

:::note
刷写命令可能会运行 2-10 分钟。
:::

**步骤 3：** 使用 DP 线（或附带的 DP→HDMI 线）连接显示器，上电开机并完成初始系统配置（语言、用户名、网络等）。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_boot_desktop.png"/>
</div>

## 🔌 接口使用说明

下面将介绍 reComputer Classic J501 板上的各类接口及其使用方法。

## M.2 Key M

J501 包含 1 个 M.2 Key M 插槽（J4），支持 **PCIe Gen4 x4 NVMe SSD**（2280 规格），随机附带 128G SSD。

### 支持的 SSD 如下

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-5768.html)

### 硬件连接

M.2 Key M 位置见「硬件总览」底部视图标注 7。卸下外壳螺丝后，将 NVMe SSD 插入插槽并用螺丝固定即可。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_m2_key_m_ssd.jpg"/>
</div>

### 使用说明

在 Jetson 设备中打开终端，输入以下命令测试 SSD 的状态与读写速度。

**步骤 1.** 查看 SSD 基本信息：

```bash
nvme list
```

**步骤 2.** 查看 SSD 健康状态（SMART 信息）：

```bash
sudo nvme smart-log /dev/nvme0n1
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_m2m_nvme_status.png"/>
</div>

**步骤 3.** 测试写入性能：

```bash
mkdir -p ~/ssd
dd if=/dev/zero of=~/ssd/test bs=1024M count=5 conv=fdatasync
```

**步骤 4.** 测试读取性能（先清空页缓存避免读到内存）：

```bash
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
dd if=~/ssd/test of=/dev/null bs=1024M
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_m2m_ssd_speed.png"/>
</div>

:::danger
请在测试完成后运行 `sudo rm ~/ssd/test` 命令删除测试文件。
:::

## M.2 Key E（WiFi/BT）

M.2 Key E 插槽（J5）支持 M.2 2230 规格的 Wi-Fi / 蓝牙模块，用于无线连接，随机附带 WiFi/BT 模块。

### 硬件连接

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_m2_key_e_wifi.jpeg"/>
</div>

:::tip

**注意：在使用该接口前，必须先卸下外壳螺丝，将 WiFi/BT 模块安装到 M.2 Key E 插槽（见「硬件总览」底部视图标注 4）并接好天线。**
:::

### 使用说明

**步骤 1.** 查看 WiFi 模块 PCIe 识别：

```bash
lspci | grep -i network
```

**步骤 2.** 查看当前连接状态：

```bash
iw dev <wlanX> link
```

**步骤 3.** 扫描周围 WiFi 网络：

```bash
nmcli -f active,ssid,signal,freq dev wifi list
```

**步骤 4.** 确认模块支持的频段（Band 1 = 2.4GHz，Band 2 = 5GHz）：

```bash
iw phy phy0 info | grep -E "Band [0-9]"
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_m2e_wifi_test.png"/>
</div>

**性能测试：**
要测试 Wi-Fi 性能，请使用以下命令（将 IP 地址替换为你的测试服务器）：

```bash
# On server: iperf3 -s
# On client:
iperf3 -c your_server_ip
```

通过 M.2 Key E 插槽可以使用蓝牙功能（`bluetoothctl` 扫描/配对）。

## 以太网

Classic J501 提供 1 个 RJ45 10GbE（万兆）接口（J17），支持 10 Gigabit Ethernet，向下兼容更低速率。

**每个端口的 LED 指示灯（正常工作状态）：**

- **绿色 LED：** 常亮表示链路建立
- **LED 闪烁：** 表示有网络活动

使用 `ethtool` 验证 PHY 是否正常工作并查看支持的速率模式（未插网线时 Link detected 显示 no 属正常）：

```bash
sudo ip link set end0 up
sudo ethtool end0
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_ethernet_ethtool.png"/>
</div>

要测试以太网端口速率，请按如下方式使用 `iperf3`（需插网线并连接对端服务器）：

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` 是 iperf3 服务器的 IP 地址。客户端将连接到该服务器以执行带宽测试。
`<bind_ip>` 将指定的本地 IP 地址绑定为测试流量的源地址。
:::

## LED

J501 配备状态指示 LED：

- **PWR/ACT LED：** 电源/系统活动状态（绿色）

## USB

Classic J501 提供 4 个 USB 3.2 Type-A 接口（J24/J33，10Gbps，仅 Host 模式，用于连接高速外设、存储设备或相机）、1 个 USB 3.0 Type-C 供电口、1 个 USB 3.0 Type-C Recovery 口（刷机口），以及 1 个 Micro USB 调试口（J26）。

### USB 总线拓扑

使用 `lsusb -t` 查看设备树，确认各 USB 端口与外设的连接状态和协商速率：

```bash
lsusb -t
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_usb_topology.png"/>
</div>

### USB-A 速率测试

创建一个脚本来测试 USB 设备速率：

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

使脚本具有可执行权限并进行测试：

```bash
sudo chmod +x test_usb.sh
./test_usb.sh /mnt          # If your USB drive is mounted at /mnt
# Or
./test_usb.sh /media/usb    # If your USB drive is mounted at /media/usb
# Or
./test_usb.sh /path/to/your/usb/mount_point
```

:::note
请先使用 `df -h` 或 `lsblk` 命令确认 USB 设备的实际挂载点！
:::

### Micro USB 调试串口

通过该串口与 Micro-USB 线，你可以在 PC 端监控输入和输出的调试信息。

**步骤 1.** 打开串口工具（此处以 MobaXterm 工具为例），创建一个新会话。

**步骤 2.** 选择 Serial 工具。

**步骤 3.** 选择对应的串口，将波特率设置为 **115200** 并点击 "OK"。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_mobaxterm_serial_session.png"/>
</div>

**步骤 4.** 使用用户名和密码登录你的 reComputer Classic J501。

## 风扇

Classic J501 提供 1 个 4 针 5V PWM 风扇接口（J9），引脚定义为 GND / 电源 / FAN_TACH（测速）/ FAN_PWM（调速）。PWM 控制允许根据系统温度进行动态且精确的转速调节，在实现高效散热的同时，将噪声和功耗降至最低。

### 使用说明

**手动 PWM 控制：**

```bash
# Set fan speed (0-255)
sudo -i
echo 200 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
```

:::note
默认散热策略已在 `/etc/nvpmodel.conf` 中预配置。若需自定义配置文件，请参考 [NVIDIA Jetson Linux Developer Guide](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)。
:::

此外，我们还可以使用 `jtop` 工具手动设置风扇转速。

你可以在终端中输入以下命令来安装 **jtop**：

```bash
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

然后重启你的 reComputer Classic J501：

```bash
sudo reboot
```

安装 **jtop** 之后，你可以在终端中启动它：

```bash
jtop
```

## 40 针扩展排针（GPIO / I2C / SPI / UART / CAN / I2S / PWM）

Classic J501 的 40-pin 排针（J30，见「硬件总览」侧面视图 2 标注 3）兼容树莓派排针形态，提供：2 路 I2C（I2C2/I2C4）、SPI1（双片选）、UART1（TX/RX/RTS/CTS）、I2S2、**原生 CAN0/CAN1**、PWM01 与多路 GPIO。

排针实物位置如下图（绿色箭头所示，位于 USB Type-A 口旁）：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_40pin_header_photo.png"/>
</div>

引脚定义如下图：

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_40pin_header_pinout.png"/>
</div>

:::note
图中 GPIOxx 为树莓派兼容编号；个别标注与 datasheet J30 引脚表不一致（如 3/5 脚图标 I2C5、datasheet 为 I2C4，I2S 简写等），官方命名以 datasheet 引脚表为准（3/5 脚对应模块球位 E60/D61 = I2C4_DAT/CLK）。
:::

### GPIO 操作

使用 libgpiod 工具操作（先用 `gpioinfo` 查询芯片与行号）：

```bash
gpioinfo
sudo gpioset --mode=wait <gpiochipX> <line>=1   # 输出高
sudo gpioget <gpiochipX> <line>                 # 读取输入
```

### SPI 回环测试

**步骤 1.** 加载 spidev 模块：`sudo modprobe spidev`

**步骤 2.** 查看设备节点：`ls /dev/spidev*`

**步骤 3.** 获取并编译测试代码：

```bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**步骤 4.** 将所选 SPI 的 MOSI 与 MISO 短接（回环），运行（40-pin SPI1 通常为 `/dev/spidev0.0`，以 `ls /dev/spidev*` 实际节点为准）：

```bash
sudo ./spidev_test -v -D /dev/spidev0.0 -s 100000
```

**步骤 5.** TX 与 RX 数据一致即回环测试成功。

### UART 测试

40-pin 的 UART1（引脚 8/10/11/36）可接 USB 转串口适配器，使用 CuteCom 测试：

```bash
sudo apt-get install cutecom
sudo cutecom
```

串口参数：设备 `/dev/ttyTHS1`（40-pin UART1，以实际节点为准），波特率 115200，8N1，无流控。

### CAN 通信

40-pin 提供 CAN0（引脚 29/31）与 CAN1（引脚 33/37）。这 4 个引脚是直连 AGX Orin 模块的 **3.3V TTL 电平** CAN 控制器信号（CANx_DOUT = 控制器 TX、CANx_DIN = 控制器 RX），**载板未板载 CAN 收发器**，排针上不存在可直接接线的 CAN_H/CAN_L，须外接 3.3V CAN 收发器（如 SN65HVD230 / TCAN332，NVIDIA 官方推荐 SN65HVD230）后才能组网。

回环测试需 2 个收发器：TTL 侧接收发器 TXD→CANx_DOUT、RXD←CANx_DIN、VCC→3.3V（引脚 1/17）、GND→地；总线侧交叉接线（CAN0_H↔CAN1_H、CAN0_L↔CAN1_L，总线两端加 120Ω 终端电阻），然后可进行回环测试：

:::note
已确认（依据 datasheet 40-pin 引脚表）：J30 的 CAN 引脚为模块球位直连信号（CAN0_DIN=F58、CAN0_DOUT=D59、CAN1_DOUT=H61、CAN1_DIN=B61），datasheet 全文未标注任何板载收发器，与 NVIDIA AGX Orin DevKit 40-pin 定义一致；NVIDIA 官方文档明确要求外接 ≥3.3V CAN 收发器。
:::

#### Classic CAN 模式

```bash
# 配置并启动（Classic CAN 1Mbps 示例）
sudo ip link set can0 down
sudo ip link set can1 down
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can1 type can bitrate 1000000
sudo ip link set can0 up
sudo ip link set can1 up

# 一个终端接收，一个终端发送
candump can1 &
cangen can0 -g 10
```

#### CAN-FD 模式

```bash
sudo ip link set can0 type can bitrate 500000 dbitrate 5000000 fd on berr-reporting on restart-ms 100
sudo ip link set can0 up
```

## 摄像头连接器

Classic J501 通过 120 针 BTB 连接器（J509，见「硬件总览」底部视图标注 6）引出 CSI0–CSI7（8 个 2-lane MIPI CSI 端口），并提供相机 I2C、主时钟（MCLK）、Powerdown/Reset、帧同步（FRSYNC）与 2.8V/1.8V/3.3V 相机供电，适合多相机同步感知方案。

### 硬件连接

该接口为 BTB（板对板）形式，需搭配 Seeed 或自研的相机转接板/FPC 排线使用。

### 使用说明

**步骤 1.** 确认设备节点：`ls /dev/video*`

**步骤 2.** 使用 GStreamer 预览（示例）：

```bash
gst-launch-1.0 v4l2src device=/dev/video0 ! \
video/x-raw,width=1920,height=1080,framerate=30/1 ! \
videoconvert ! xvimagesink
```

## 音频接口

10 针音频面板排针（J511，见「硬件总览」底部视图标注 5）：双麦克风输入（IN1P/IN2P）、立体声耳机输出（HPO_L/HPO_R）、插孔/在位检测。

连接音频面板小板后，可在 Ubuntu 声音设置中选择对应输入/输出设备进行录音与播放测试：

```bash
arecord -l   # 列出录音设备
aplay -l     # 列出播放设备
arecord -d 5 test.wav && aplay test.wav
```

## 显示（DP）

Classic J501 配备 1 个 DisplayPort 接口，可使用 DP 线直连显示器，或使用附带的 **DP→HDMI 线** 连接 HDMI 显示器，支持桌面与多路视频渲染输出。

## PCIe 扩展插槽

板载 PCIe 插槽（J6，见「硬件总览」侧面视图 2 标注 1）物理为 x16 形态、电气为 **x8**（UPHY block 1 Lane 0–7，PCIe 控制器 #5），含 12V/3.3V 供电与完整控制信号（PERST#/CLKREQ#/WAKE#/在位检测），可扩展网卡、采集卡、NVMe 转接卡等。

```bash
sudo lspci            # 查看 PCIe 设备是否识别
sudo lspci -vvv -s <BDF>
```

## RTC

Classic J501 通过 RTC 2 针排针（J13，PMIC_BBATT，见「硬件总览」底部视图标注 2）外接备份电池保持断电计时。

**步骤 1.** 连接 RTC 电池（注意极性）。

**步骤 2.** 开机，进入 `Settings > Date & Time`，联网选择 **Automatic Date & Time**（或手动设置）。

:::note
如果你尚未连接到互联网，可以在此手动设置日期/时间。
:::

**步骤 3.** 打开一个终端窗口，执行以下命令检查硬件时钟时间：

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**步骤 4.** 断开网络连接并重启设备，验证时间保持。

## 自动化排针（上电自启 / 远程开关机）

自动化排针 J42（见「硬件总览」底部视图标注 1）提供 FORCE_RECOVERY_N（引脚 2）、SYS_RESET_N（引脚 3）、电源键信号（引脚 4）、PD 控制器输出/ACOK（引脚 5/6）、MODULE_SLEEP_N（引脚 7）、过流指示 SYSTEM_OC_N（引脚 8）与 Wake on LAN（引脚 9，GPIO38）等信号。

:::note
将 **引脚 5 与引脚 6 短接** 即可启用 Auto-Power-On（上电自启），适合无人值守设备。
:::

## 资源

- [reComputer Classic J5011（32GB）产品页](https://www.seeedstudio.com/reComputer-Classic-J5011-p-6880.html)
- [reComputer Classic J5012（64GB）产品页](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html)
- [reComputer Classic J501 数据手册（PDF 下载）](https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/reComputer_classic_j501_datasheet.pdf)
- [NVIDIA Jetson AGX Orin 模组规格书（PDF 下载）](https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/AGX_P3737_A05_V1_20260605.pdf)
- [reComputer Classic J501 3D 模型（STP 下载）](https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/reComputer_classic_J501.stp)
- [Seeed NVIDIA Jetson 产品目录](https://www.seeedstudio.com/nvidia.html)
- [Seeed 的 L4T 源代码（Linux_for_Tegra）](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson AGX Orin 文档](https://developer.nvidia.com/embedded/jetson-agx-orin)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
