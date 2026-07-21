---
description: reSpeaker Flex 是一款强大的模块化语音系统，采用 XMOS XVF3800，配备可互换的环形和线性 4 麦克风阵列，可实现精确的 360° 或定向音频采集——非常适合机器人和智能设备。
title: reSpeaker Flex 入门指南
keywords:
  - reSpeaker flex
  - xvf3800
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg
slug: /respeaker_flex_introduction
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 03/26/2026
  author: Kasun Thushara
createdAt: '2026-03-26'
updatedAt: '2026-07-14'
url: https://wiki.seeedstudio.com/cn/respeaker_flex_introduction/
---
# reSpeaker Flex 入门指南

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex-banner.jpg" alt="pir" width={800} height="auto" /></p>

reSpeaker Flex 是一款基于 XMOS XVF3800 处理器构建的模块化分体式语音处理系统，专为机器人和智能交互终端设计。与传统的一体化麦克风阵列不同，Flex 将核心处理板与麦克风阵列板分离，两者通过柔性 FPC 软排线连接，使阵列可以嵌入产品外壳内的任意物理位置，同时将处理电子部分放置在其他位置。
该系统支持两种可互换的麦克风阵列配置：用于全向 360° 采集的**环形 4 麦克风阵列**，以及用于正面定向拾音并抑制后方声音的**线性 4 麦克风阵列**。两块阵列板都通过标准化的 24 针 FPC 接口连接到同一核心板，系统可在 USB（UAC 2.0 即插即用）或 I2S 模式下运行，以便嵌入式集成。可选的 XIAO ESP32S3 模块可焊接到核心板上，以实现无线连接和扩展控制。

### 环形麦克风系列

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 环形</th>
    <th>reSpeaker Flex XVF3800 环形（带 XIAO ESP32S3）</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

### 线性麦克风系列

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 线性</th>
    <th>reSpeaker Flex XVF3800 线性（带 XIAO ESP32S3）</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-p-6738.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

## 特性

- **分体模块化设计**：核心板与麦克风阵列板物理分离，通过 FPC 软排线连接，可在任意产品机壳内灵活布置

- **多种麦克风配置选择**：在同一核心板上可切换环形 4 麦阵列（360° 拾音，44mm 间距）或线性 4 麦阵列（180° 前向指向性，33mm 间距）

- **XMOS XVF3800 音频处理**：集成完整的 AEC、AGC、DoA、多通道波束成形、VAD、噪声抑制和混响消除功能

- **双工作模式**：USB UAC 2.0，可与 PC 和 SBC 即插即用；I2S 模式用于直接嵌入式集成

- **双 USB 连接方式**：USB-C 接口和 PH2.0 锁扣接口均支持 UAC 2.0 音频和 DFU 固件升级

- **板载扬声器功放**：通过 JST 接口驱动 10W 4 欧姆扬声器，并提供 3.5mm AUX 耳机输出

- **支持 XIAO ESP32S3（可选）**：焊接模块后可增加 Wi-Fi/Bluetooth 功能，I2S 和 I2C 总线直接与 XVF3800 相连，实现无线控制和音频转发

- **固件灵活性**：提供双 USB 固件版本（2 通道和 6 通道）、I2S 固件，支持通过 dfu-util 进行 DFU 升级，并可在断电后保持配置

- **Python SDK**：可通过 Python 调整录音格式、音量、算法参数和通道路由

## 主要组件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/main_noxiao.jpg" alt="pir" width={800} height="auto" /></p>

### 核心板

| 组件 / 特性 | 描述 |
|--------------------|------------|
| **主音频处理器** | XMOS XVF3800（固件 v3.2.1），负责所有音频 DSP，包括 AEC、波束成形、DoA 和噪声抑制 |
| **音频编解码器** | TLV320AIC3104，负责音频转换和 DAC 输出 |
| **FPC 麦克风阵列接口** | 24 针带锁扣 FPC 连接器，支持最多 8 麦阵列和 2 路 GPIO 线 |
| **USB-C 接口** | 提供 UAC 2.0 音频、DFU 固件升级和供电 |
| **PH2.0 接口** | 带锁扣连接器；提供与 USB-C 接口相同的 UAC 2.0 音频和 DFU 支持 |
| **3.5 mm AUX 插孔** | 侧向出线耳机输出，由板载 DAC 驱动 |
| **扬声器 JST 接口** | 直立安装连接器，可驱动最高 10W、4Ω 扬声器；保留焊盘以便硬连线扬声器连接 |
| **外部电源端子** | 为整个系统提供 12V 供电并支持 10W 扬声器负载（P1 优先级） |
| **RST 按钮** | XVF3800 的硬件复位按钮 |
| **SafeMode（启动）按钮** | 上电时按住可进入安全模式以进行固件恢复 |
| **PWR 指示灯** | 绿色电源指示灯 |
| **调试焊盘** | 预留 XMOS XTAG4 焊盘（出厂未焊接） |
| **XMOS 3800 IO 排针** | 引出 I2C、I2S、5V/GND、扬声器引脚及其余 XVF3800 IO 的排针/焊盘 |
| **安装孔** | 4 × M3 安装孔 |
| **XIAO ESP32S3** | 当其作为主机设备使用时，支持焊接 XIAO ESP32S3 |
| **XIAO ESP32S3 GPIO** | 剩余 GPIO 可用于 IO 和外设扩展 |

### 环形阵列板

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_doa.jpg" alt="pir" width={800} height="auto" /></p>

| 组件 / 特性 | 描述 |
|--------------------|------------|
| **麦克风** | 4× PDM MEMS 麦克风，44 mm 间距，环形排布 |
| **拾音模式** | 360° 全向音频采集 |
| **接口** | 通过 FPC 连接器连接到核心板 |
| **安装** | 3 × M3 安装孔，用于固定在外壳或机箱上 |

### 线性阵列板

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_linear.jpg" alt="pir" width={800} height="auto" /></p>

| 组件 / 特性 | 描述 |
|--------------------|------------|
| **麦克风** | 4× PDM MEMS 麦克风，33 mm 间距，线性排布 |
| **拾音模式** | 约 180° 的前向拾音模式，并抑制后方声音 |
| **接口** | FPC 连接器；排线可从侧面或背面走线 |
| **安装** | 2 × M3 安装孔 |


:::note

为确保最佳语音拾取性能以及音频算法的正常运行，请确保设备背面的麦克风端口（Mic Inlet / Sound Hole）朝向声源。麦克风端口位于印有 Seeed Studio 标志的一侧。 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/array_mic_inlet.jpg" alt="pir" width={800} height="auto" /></p>
:::

### XIAO ESP32S3 支持

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/xiao_esp32s3.png" alt="pir" width={700} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/header_pinout.jpg" alt="pir" width={800} height="auto" /></p>

reSpeaker Flex 核心板预留了用于焊接 Seeed Studio XIAO ESP32S3 模块的专用焊盘，在 XVF3800 音频处理链路之上提供 Wi-Fi 和 Bluetooth 连接能力。包含 XIAO 的 SKU（-C4-1 和 -L4-1）会预装该模块；基础 SKU（-C4-0 和 -L4-0）则保留焊盘未焊接。
当安装了 XIAO 后，它与 XVF3800 之间会建立如下连接：

- **I2S 总线** — 双总线（播放和录制），共享 BCLK、MCLK 和 LRCLK，用于双向音频流传输
- **I2C 总线** — 供 XIAO 读取和写入 XVF3800 的配置参数
- **RST 线** — XIAO 可通过专用 IO 引脚对 XVF3800 进行硬件复位
- **剩余 XIAO IO** — 引出到带标签的排针/焊盘，供用户扩展

### 排针

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_2.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_1.png" alt="pir" width={600} height="auto" /></p>

### 24 FPC 线缆

FPC 麦克风阵列接口是一个 24 针、0.5mm 间距、带锁扣的连接器，包装盒中附带的 20cm FPC 软排线与该连接器配套使用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/24_fpc_cable.png" alt="pir" width={600} height="auto" /></p>

| 引脚 | 信号名称 | 类型 | 功能描述 | 备注 |
|-----|------------|------|----------------------|-------|
| 1 | MIC_VDD | 电源 | 麦克风电源 | 3.3V 供电 |
| 2 | MIC_VDD | 电源 | 麦克风电源 | 双引脚以增强电源稳定性 |
| 3 | GND | GND | 电源回流地 | 电源地 |
| 4 | MIC_CLK | 输出 | 全局时钟信号 | 核心信号，2–4 MHz |
| 5 | GND | GND | 时钟屏蔽地 | 时钟专用地 |
| 6 | MIC_D1 | 输入 | 数据线 1 | CH1 麦克风 |
| 7 | GND | GND | D1 隔离地 | |
| 8 | MIC_D2 | 输入 | 数据线 2 | CH2 麦克风 |
| 9 | GND | GND | D2 隔离地 | |
| 10 | MIC_D3 | 输入 | 数据线 3 | CH3 麦克风 |
| 11 | GND | GND | D3 隔离地 | |
| 12 | MIC_D4 | 输入 | 数据线 4 | CH4 麦克风 |
| 13 | GND | GND | D4 隔离地 | |
| 14 | MIC_D5 | 输入 | 数据线 5 | CH5 麦克风 |
| 15 | GND | GND | D5 隔离地 | |
| 16 | MIC_D6 | 输入 | 数据线 6 | CH6 麦克风 |
| 17 | GND | GND | D6 隔离地 | |
| 18 | MIC_D7 | 输入 | 数据线 7 | CH7 麦克风 |
| 19 | GND | GND | D7 隔离地 | |
| 20 | MIC_D8 | 输入 | 数据线 8 | CH8 麦克风 |
| 21 | GND | GND | D8 隔离地 | |
| 22 | GPIO_1 | I/O | 通用输入/输出 | 扩展功能 |
| 23 | GPIO_2 | I/O | 通用输入/输出 | 扩展功能 |
| 24 | GND | GND | GPIO 屏蔽地 | 吸收 GPIO 噪声 |

## 入门指南

### 硬件准备

- USB Type-c 线缆
- 主机电脑或 Raspberry Pi

### 软件准备

### 开箱即用

#### 复位

复位（RST）按钮为 reSpeaker Flex 提供硬件复位功能，按下时会重新启动芯片并从头初始化系统，就像完整的断电重启一样。

#### 扬声器连接

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/speaker-connection .jpg" alt="pir" width={600} height="auto" /></p>

如上所示，你可以根据自己的音频输出偏好，选择使用 3.5mm AUX 耳机插孔或板载 JST 扬声器接口来连接扬声器。

#### 安全模式

**Safe Mode** 是 **reSpeaker Flex** 上的一种特殊恢复模式，它允许你通过 **USB DFU** 或 I2C（如 **ESP32** 等设备）来烧录固件。

如果你之前烧录了 **I2S 固件**，并希望切换回 **USB 固件**，可以进入 **Safe Mode**，然后使用 **USB DFU** 重新烧录 USB 固件。

:::note

- USB 固件
  - 仅支持 USB DFU。
  - 你可以通过 USB 连接更新设备。
  - 不支持 I2C DFU。
- I2S 固件
  - 支持 I2C DFU。
  - 允许通过 I2C 接口更新固件。
  - 不支持 USB DFU。
- Safe Mode 固件
  - 存储在 Factory 分区中。
  - 同时支持 USB DFU 和 I2C DFU。
  - 这是最灵活的恢复固件。

:::

**在以下情况下使用 Safe Mode**

- 你的固件**工作异常**（例如，**USB 无法被识别**）。
- 你需要**重新烧录新固件**，但当前固件**没有响应**。
- 你**不小心烧录了错误的固件**，希望恢复设备。

 **如何进入 Safe Mode**

- 将设备**完全断电**。
- **按住 Boot 按钮不放**。
- 在按住 **Boot 按钮的同时，重新接通电源。**
使用 DFU util 命令行工具检查 DFU 分区；更多细节请参阅下方 **Install DFU Util** 部分。

### 更新固件

在官方 GitHub 仓库中提供了三个固件版本。你可以根据应用需求选择并烧录合适的固件。更多详情和下载请参考 Github [Link](https://github.com/respeaker/reSpeaker_Flex)

:::note
请确保你需要下载整个仓库。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB" label="USB">

USB 固件适用于通过 USB 硬件接口与主机操作系统（如 **Windows、Linux 和 macOS**）进行通信的场景。
提供两种固件变体：**respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin**，提供 2 通道音频；以及 **respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin**，提供 6 通道音频。两种固件版本均以 16 kHz 采样率和 32 位深度运行。

你可以通过此链接查看这些固件文件

| 固件                         | 通道数 | 备注                                                   |
|----------------------------------|----------|---------------------------------------------------------|
| respeaker_flex_ua-io16-6ch-cir.bin | 6 通道 | 16 kHz，6 通道，使用环形麦克风阵列             |
| respeaker_flex_ua-io16-6ch-lin.bin | 6 通道 | 16 kHz，6 通道，使用线性麦克风阵列               |
| respeaker_flex_ua-io16-cir.bin     | 2 通道 | 16 kHz，立体声输出，使用环形麦克风阵列          |
| respeaker_flex_ua-io16-lin.bin     | 2 通道 | 16 kHz，立体声输出，使用线性麦克风阵列            |
| respeaker_flex_ua-io48-cir.bin     | 2 通道 | 48 kHz，立体声输出，使用环形麦克风阵列          |
| respeaker_flex_ua-io48-lin.bin     | 2 通道 | 48 kHz，立体声输出，使用线性麦克风阵列            |

通过 USB 线缆将 reSpeaker Flex 连接到你的电脑。请注意，你需要使用 XMOS USB-C 端口（靠近 RST 按钮）来烧录 XMOS 固件。

</TabItem>

 <TabItem value="I2S" label="I2S">

I2S 固件适用于设备连接到诸如 XIAO ESP32S3 等微控制器主机时使用。在这种配置下，语音数据通过 I2S 协议传输。固件文件 **respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin** 可在此处获取。该固件支持 2 通道音频，32 位深度，采样率为 16 kHz。

| 固件                                      | 通道数 | 备注                                                     |
|-----------------------------------------------|----------|-----------------------------------------------------------|
| respeaker_flex_inthost-lr16-cir-i2c.bin      | 2 通道 | 16 kHz，立体声输出，环形麦克风阵列   |
| respeaker_flex_inthost-lr16-lin-i2c.bin      | 2 通道 | 16 kHz，立体声输出，线性麦克风阵列|
| respeaker_flex_inthost-lr48-cir-i2c.bin      | 2 通道 | 48 kHz，立体声输出，环形麦克风阵列|
| respeaker_flex_inthost-lr48-lin-i2c.bin      | 2 通道 | 48 kHz，立体声输出，线性麦克风阵列|

通过 USB 线缆将 reSpeaker Flex 连接到你的电脑。请注意，你需要使用 XMOS USB-C 端口（靠近 RST 按钮）来烧录 XMOS 固件。

</TabItem>
</Tabs>

### 安装 DFU Util

`dfu-util` 是一个通过 USB 进行设备固件升级的命令行工具。

<Tabs>
<TabItem value="windows" label="Windows">

- 下载 `dfu-util-0.11-binaries.tar.xz` 并解压，例如解压到 `D:\dfu-util-0.11-binaries\win64\`  
  [Download Link](http://dfu-util.sourceforge.net/)

- 将 `dfu-util.exe` 的路径添加到系统 `Path` 变量中：  
  `My Computer > Properties > Advanced > Environment Variables > Path`

- 打开 **Command Prompt**（`cmd`）并验证安装：

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image.png" alt="pir" width={600} height="auto"/></p>

- 连接 reSpeaker Flex 并检查设备是否被检测到：

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> 如果你看到：  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> 请继续执行下面的驱动安装步骤。

- 安装 [Zadig](https://zadig.akeo.ie/)  
  - 打开 Zadig → `Options > List All Devices`  
  - 选择 `reSpeaker XVF3800 Flex`  
  - 安装 **WinUSB** 驱动  
  - 对设备进行断电重启  
  - 再次运行 `dfu-util -l` 以确认设备已被检测到。

</TabItem>

 <TabItem value="macos" label="macOS">

- 使用 Homebrew 安装 dfu-util：

```bash
brew install dfu-util
```

- 检查设备是否被检测到：

```bash
dfu-util -l
```

**预期输出：**

```
dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:001a] ver=0202, devnum=3, cfg=1, intf=4, path="2-1.1.4", alt=1, name="reSpeaker DFU Upgrade", serial="101991441000000001"
Found DFU: [2886:001a] ver=0202, devnum=3, cfg=1, intf=4, path="2-1.1.4", alt=0, name="reSpeaker DFU Factory", serial="101991441000000001"

```

</TabItem>

<TabItem value="linux" label="Linux">

- 安装 dfu-util：

```bash
sudo apt install dfu-util
```

- 连接 XVF3800 并检查是否被检测到：

```bash
sudo dfu-util -l
```

**预期输出：**

```bash
pi@raspberrypi:~ $ sudo dfu-util -l
dfu-util 0.9

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2016 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:001a] ver=0202, devnum=5, cfg=1, intf=3, path="1-1.1", alt=1, name="reSpeaker DFU Upgrade", serial="101991441000000001"
Found DFU: [2886:001a] ver=0202, devnum=5, cfg=1, intf=3, path="1-1.1", alt=0, name="reSpeaker DFU Factory", serial="101991441000000001"

```

  </TabItem>
</Tabs>

### 烧录固件

从 GitHub 下载完整的固件仓库：reSpeaker Flex XVF 3800

- 运行以下命令来烧录固件

  - dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin

- 在 Linux 上，使用 sudo 运行

  - sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin

## 使用 USB 固件进行录音和回放

<Tabs>
<TabItem value="windows" label="Windows">

### 设置 Audacity（Windows）

1. 打开 **Audacity**
2. 进入 **Audio Setup > Audio Settings**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/audacity_setting.png" alt="pir" width={600} height="auto" /></p>

3. 设置：
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker XVF3800 Flex`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz`（用于 **Project** 和 **Default Sample Rate**）
   - **Sample Format**: `16-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/audacity_setting_2.png" alt="pir" width={600} height="auto" /></p>

1. 点击 **OK**
2. 一切就绪——开始录音吧！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### 设置 Audacity（macOS）

1. 打开 **Audacity**
2. 进入 **Audio Setup** 并将 **Recording Device** 选择为 **reSpeaker 3800 Flex**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. 进入 **Audio Setting** 并进行如下设置：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac3.png" alt="pir" width={600} height="auto"/></p>

- **Recording Device**: `reSpeaker 3800 Flex`
- **Channels**: `2 (Stereo)`
- **Sample Rate**: `16000 Hz`（用于 **Project** 和 **Default Sample Rate**）
- **Sample Format**: `16-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. 点击 **OK**
5. 可以开始录音了！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac5.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### 在 Raspberry Pi 上录音（命令行）

1. **查找声卡编号**：

```bash
arecord -l
```

示例输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/arecord.png" alt="pir" width={600} height="auto"/></p>

 在此示例中，**声卡编号为 3**

---

2. **录制音频（5 秒）**：

```bash
arecord -D plughw:3,0 -c 2 -r 16000 -f S16_LE -d 5 output.wav
```

 将 `3` 替换为你实际的声卡编号

---

3. **在 ALSA 中调整 reSpeaker XVF3800 的音量**

```bash
alsamixer
```

在 alsamixer 中，使用左右方向键切换到正确的声卡设备。使用上方向键增加音量。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/alsa.png" alt="pir" width={600} height="auto"/></p>

4. **回放**：

```bash
aplay -D plughw:3,0 output.wav
```

### 在 Raspberry Pi 上录音（Audacity）

1. **安装 Pi-Apps（如果尚未安装）**

在 Raspberry Pi 上打开终端。运行以下命令来安装 Pi-Apps

```bash
wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```

等待安装完成。菜单中会出现一个新的 Pi-Apps 图标。

2. **通过 Pi-Apps 安装 Audacity**

3. **设置音频输入和输出**

- 点击工具栏中的 "Audio Setup"。
- 在下拉菜单中选择 "Audio Settings"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-1.PNG" alt="pir" width={600} height="auto"/></p>

- 在 Audio Settings 窗口中：
  - 选择正确的 Recording Device（例如 reSpeaker XVF3800 Flex）。
  - 选择合适的 Playback Device（例如 reSpeaker XVF3800 Flex）。
  - 确保 Host 设置为 ALSA，以在 Raspberry Pi 上获得最佳兼容性。
- 点击 OK 以应用设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **录制和回放音频**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>

## 如何调参？

调参允许用户配置内置音频算法的参数，并与 XMOS 芯片直接通信。

我们提供了专用的 Python 控制接口，用于参数配置和设备交互。


[**Python Control Directory**](https://github.com/respeaker/reSpeaker_Flex/tree/main/python_control)

使用提供的 Python 脚本，你可以：

* 配置内置音频算法参数
* 获取 DoA（到达方向）数据
* 获取 VAD（语音活动检测）数据
* 控制板载 LED
* 控制语音处理流水线
* 直接与 XMOS 设备通信

**系统要求**

使用 Python 控制接口需要以下依赖：

* Python 3.6 或更高版本
* `pyusb` Python 库
* `libusb` 系统库


### 安装与依赖

使用以下命令安装所需的 Python 依赖：

```bash
pip install pyusb
```

根据你的操作系统，你可能还需要单独安装 `libusb` 软件包。

---

### 用法

**基本语法**

```bash
python xvf_host.py [options] command [value(s)...]
```

---

**命令选项**

| Option         | Description                                           |
| -------------- | ----------------------------------------------------- |
| `-l`, `--list` | 列出所有支持的命令及其详细信息                       |
| `--vid`        | 设置 USB Vendor ID（默认：`0x2886`）                 |
| `--pid`        | 设置 USB Product ID（默认：`0x001A`）                |
| `--values`     | 为写入命令提供数值（可选）                           |

---

### 使用示例

**1. 列出所有可用命令**

```bash
python xvf_host.py --list
```

显示所有支持的命令及其说明。

---

**2. 读取固件版本信息**

```bash
python xvf_host.py VERSION
```

从设备中读取并显示当前固件版本信息。

---

**3. 读取 DOA（到达方向）数值**

```bash
python xvf_host.py DOA_VALUE
```

获取麦克风阵列当前检测到的 DOA（到达方向）数值。

## 故障排查

### 扬声器输出的回放声音不够大？

如果 **reSpeaker Flex** 在 Linux 上的扬声器输出音量太小，你可能需要调整 XVF3800 声卡的 **ALSA 混音器级别**。按照以下步骤提高输出音量。

**步骤 1：打开 ALSA Mixer**

1. 打开终端。
2. 输入以下命令并按下 **Enter**：

   ```bash
   alsamixer
   ```

**步骤 2：选择 XVF3800 Flex 声卡**

1. 按下 **F6** 打开声卡选择菜单。
2. 使用 **上下方向键** 高亮选择 **XVF3800 Flex** 声卡。
3. 按下 **Enter** 确认选择。

**步骤 3：调整 PCM-1 音量**

1. 使用 **左右方向键** 导航到 **PCM-1**。
2. 使用 **上方向键** 将音量级别提高到 **100%**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alexa.png" alt="pir" width={600} height="auto"/></p>

**步骤 4：保存 ALSA 设置**

1. 按下 **ESC** 退出 `alsamixer`。
2. 在拔掉 reSpeaker Flex 之前，运行以下命令保存你的设置：

```bash
   sudo alsactl store
   ```

**步骤 5：附加选项（使用 PulseAudio）**

如果在调整 ALSA 级别后仍然无法清晰听到声音，可以尝试安装 **PulseAudio Volume Control** 以进行更精细的音量调节：

```bash
sudo apt install pavucontrol -y
```

然后你可以打开 **pavucontrol**，在需要时将输出音量提高到 100% 以上。

### 刷写固件后在 Windows 中无法作为声卡使用？

打开开始菜单并输入 Device manager。找到与 reSpeaker Flex 相关的设备，右键点击并选择 Uninstall devices。之后，重启设备（USB 拔插一次），Windows 会为其重新安装正确的声卡驱动。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker_xvf_3800_dfu.png" alt="pir" width={600} height="auto"/></p>


## 资源

[reSpeaker Flex XVF3800 圆形 step 文件](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_circular_260210.step)

[reSpeaker Flex XVF3800 线性 step 文件](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_linear.step)

[reSpeaker Flex XVF3800 核心板 Step](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_Separate.step)



## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
