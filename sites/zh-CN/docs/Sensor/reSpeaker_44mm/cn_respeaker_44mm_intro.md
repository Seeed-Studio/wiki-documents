---
description: reSpeaker XVF3800 4-Mic Array 44mm 是一款由 XMOS XVF3800 驱动的紧凑型圆形语音模块，麦克风间距为 44 mm，具备 360° 远场拾音、AEC/AGC/DoA/波束成形、24 颗 RGB LED、三个按键，并支持 USB 或 I2S 工作模式。
title: reSpeaker XVF3800 44mm 4-Mic Array 入门指南
keywords:
  - reSpeaker 44mm
  - reSpeaker XVF3800
  - xvf3800
  - 4 mic array
  - xmos voice
  - usb microphone array
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_introduction
sku: 100040880,100020767,100066841,100065276,100052499
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/cn/respeaker_44mm_introduction/
---
# reSpeaker XVF3800 44mm 4-Mic Array 入门指南

{/* TODO: Banner}

reSpeaker XVF3800 4-Mic Array 44mm 是一款基于 XMOS XVF3800 音频处理器的紧凑型圆形语音处理模块，适用于语音识别、语音控制、智能助手和机器人等应用。四颗 PDM MEMS 麦克风以 **44 mm 间距**环形排布，实现 360° 远场拾音，同时相比 66 mm 间距的 reSpeaker XVF3800 Circular 4-Mic Array 明显缩小了板卡尺寸，但仍保持相同的 XMOS 处理平台和音频质量。

该模块运行完整的 XVF3800 语音处理链路——声学回声消除（AEC）、60 dB 范围的自动增益控制（AGC）、多通道波束成形、声源到达方向（DoA）检测、语音活动检测（VAD）、动态噪声抑制以及混响消除——并且所有参数都可由用户调节。外圈配有 24 颗 WS2812 RGB LED、三个物理按键（音量加、音量减、静音）以及硬件静音指示灯，开箱即可使用；同时支持 USB Audio Class 2.0 和 I2S 模式，既适合即插即用，也方便嵌入式集成。可选的 XIAO ESP32-S3 Plus 可直接焊接在板上，可选的扬声器扩展板则提供一个 5 W 扬声器和 1200 mAh 电池。

## 产品阵容

{/* TODO: replace the five href="#" values with the Seeed Studio product page URLs once they are published. */}

<table align="center">
  <tr>
    <th>Variant</th>
    <th>SKU</th>
    <th>Contents</th>
    <th>Order</th>
  </tr>
  <tr>
    <td><strong>reSpeaker XMOS XVF3800 4 Mics Array 44mm</strong></td>
    <td><code>100040880</code></td>
    <td>单块 PCBA，预烧录 USB 固件</td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
  <tr>
    <td><strong>reSpeaker XMOS XVF3800 4 Mics Array 44mm With Case</strong></td>
    <td><code>100020767</code></td>
    <td>PCBA + 外壳</td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
  <tr>
    <td><strong>reSpeaker XMOS XVF3800 4 Mics Array 44mm With XIAO ESP32S3 Plus</strong></td>
    <td><code>100066841</code></td>
    <td>PCBA + XIAO ESP32-S3 Plus</td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
  <tr>
    <td><strong>reSpeaker XMOS XVF3800 4 Mics Array 44mm With Case and XIAO ESP32S3 Plus</strong></td>
    <td><code>100065276</code></td>
    <td>PCBA + 外壳 + XIAO ESP32-S3 Plus</td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
  <tr>
    <td><strong>reSpeaker Sound Base</strong></td>
    <td><code>100052499</code></td>
    <td>5 W 4 Ω 扬声器、1200 mAh 电池、USB-C 充电、电源开关</td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

{/* TODO(image): add a product render per variant — see wiki_44mm_images/README.txt */}

## 特性

- **紧凑的 44 mm 设计**：麦克风间距由 66 mm 缩小到 44 mm，减小了板卡直径，使其能够安装在空间受限的产品中。

- **XMOS XVF3800 音频处理**：支持 AEC、AGC（60 dB 范围）、多通道波束成形、DoA、VAD、动态噪声抑制和混响消除，并提供可调参数。

- **高音频质量**：设计目标与现有的 66 mm 间距 reSpeaker XVF3800 Circular 4-Mic Array 保持同等音质。

- **双工作模式**：USB Audio Class 2.0 适用于与 PC 和 SBC 的即插即用，或 I2S/INT-Device 模式适用于嵌入式主机——通过固件进行选择。

- **灵活的控制与更新**：通过 USB 或 I2C 进行配置，根据已烧录固件支持 USB DFU 和 I2C DFU。

- **唯一设备标识**：可读写 UUID/SN，用于多设备管理、识别和数据追踪。

- **可编程 RGB 反馈**：24 × WS2812 LED 显示设备状态、启动动画和 DoA 方向；静音状态由专用红色 LED 指示。

- **三个可自定义按键**：默认连接到 XMOS 处理器时为音量加、音量减和静音，可通过开关将其切换到 XIAO。

- **扬声器就绪**：板载 Class D 功放、用于 5 W 4 Ω 扬声器的垂直 JST 接插件、3.5 mm AUX 插孔，以及用于硬连线扬声器的焊盘。

- **广泛的平台兼容性**：支持 Windows、macOS 和 Raspberry Pi OS 等 USB 主机，以及与 XIAO、ESP32 和 Arduino 级开发板的 I2S 集成。

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg" alt="reSpeaker XVF3800 44mm PCB component callouts" width={900} height="auto" /></p>

板正面集成了四个麦克风以及最外圈的 24 颗 RGB LED，因此在将板卡安装到外壳中后，声学开孔和灯环都能保持可见。背面则集成了 USB-C 接口、3.5 mm 插孔、JST 扬声器接口、复位按键、XIAO ESP32-S3 Plus 焊盘以及所有引出焊盘。

### 主要元件

| 元件 / 功能 | 描述 |
|--------------------|-------------|
| **主音频处理器** | XMOS XVF3800（固件 v3.2.1），用于 AEC、波束成形、噪声抑制、DoA 检测以及完整语音处理链路 |
| **麦克风阵列** | 4 × PDM MEMS 麦克风，环形排布，间距 44 mm，实现 360° 远场拾音 |
| **音频编解码器** | TLV320AIC3104，负责音频转换和 DAC 输出 |
| **功放** | LM48511 Class D 音频功放 |
| **RGB LED** | 24 × WS2812 可单独寻址的 RGB LED，用于状态和音频活动指示 |
| **可自定义按键** | 三个物理按键，连接到 XVF3800 时默认功能为音量加、音量减和静音 |
| **按键连接选择** | 开关可在 XVF3800 与 XIAO 模块焊盘之间切换三颗按键的连接 |
| **静音指示 LED** | 红色 LED，在麦克风静音时点亮；上电时音频为非静音状态 |
| **安全模式进入** | 上电时按住静音按键可启动恢复固件 |
| **板载天线** | 当焊接兼容的 XIAO 无线模块时，支持无线通信 |
| **USB Type-C 接口** | 提供 5 V 供电以及用于 UAC 音频、控制和 DFU 的 USB 数据通道 |
| **USB Power Delivery (USB PD)** | USB-C 供电设计，可驱动整板并带动 5 W 扬声器工作 |
| **3.5 mm AUX 插孔** | 侧面安装的耳机 / 线路输出，来自板载 DAC |
| **扬声器接口** | 垂直 JST 接插件，用于连接额定功率 5 W 或更高的 4 Ω 扬声器，同时保留有线扬声器焊盘 |
| **外部电源焊盘** | 为整个系统提供的备用电源输入 |
| **调试接口** | 兼容 XTAG4 的焊盘，用于 XMOS 编程和调试，未焊接连接器 |
| **XVF3800 I2C 接口** | 引出 XVF3800 的 I2C 引脚，用于在 INT-Device 模式下进行控制和配置 |
| **XVF3800 I2S 接口** | 引出 XVF3800 的 I2S 引脚，用于在 INT-Device 模式下向外部主机传输音频 |
| **电源与地排针** | 5 V 和 GND 引出，用于外部集成 |
| **XVF3800 GPIO 焊盘** | 额外的 XVF3800 I/O，用于外部控制 |
| **XIAO ESP32-S3 Plus 焊盘** | 可焊接模块位置，提供 I2S、I2C、复位、按键和 LED 连接 |
| **IPEX 天线连接器** | 通过合适的射频线缆，将板载天线连接到 XIAO 天线接口 |
| **安装孔** | 与外壳匹配的固定孔位 |

### XIAO ESP32-S3 Plus 支持

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/xiao_pinout.jpg" alt="XIAO ESP32-S3 Plus expansion pads" width={700} height="auto" /></p>

XIAO ESP32-S3 Plus 可以直接焊接在板背面。焊接后，它会与 XVF3800 以及板载按键和 LED 相连：

| 功能 | 描述 |
|---------|-------------|
| **XIAO ESP32-S3 Plus 支持** | 将 XIAO ESP32-S3 Plus 模块直接焊接到阵列上，实现一体化语音处理和应用开发 |
| **XVF3800 通信** | 通过 I2S 进行录音和回放，共享 BCLK、MCLK 和 LRCLK，并通过 I2C 对 XVF3800 进行控制和配置 |
| **XVF3800 复位控制** | 提供与 RST 相关的 GPIO，使 XIAO 能以硬件方式复位 XVF3800 |
| **灵活的按键与 LED 连接** | 可在 XVF3800 与 XIAO 的 GPIO 焊盘之间切换板载按键和 LED，实现自定义控制与反馈 |
| **扩展 GPIO 访问** | 其余 XIAO I/O 通过标注焊盘引出，用于连接传感器、外设和应用硬件，并与 XVF3800 I/O 区域对齐 |
| **外接天线连接** | IPEX 连接器，可通过射频馈线将板载天线连接到 XIAO 天线接口 |

{/* TODO(image): xiao_soldered.jpg — XIAO ESP32-S3 Plus soldered on the board */}

### reSpeaker Sound Base（扬声器扩展）

扬声器扩展可将麦克风阵列变成一个独立的语音终端。它集成了一个 **5 W、4 Ω 扬声器**、一块 **1200 mAh 可充电电池**、充电与电源管理电路、一个 USB-C 充电接口以及一个物理电源开关，并采用模块化外壳设计，可卡扣或滑动安装到阵列外壳的底部。

- 外壳可以拆卸，因此用户可以更换电池和扬声器。
- 暴露的 XMOS I/O 连接器在两块板之间传输扬声器输出、5 V 电源和电池电量信号。
- 充电指示灯环在充电时显示电池电量百分比，在未连接电池时保持熄灭。
- 开关只控制输出；即使开关关闭，充电仍会继续。

{/* TODO(image): speaker_expansion.jpg — speaker expansion attached to the array */}

### 引脚定义

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/xmos_io_pinout.jpg" alt="XMOS XVF3800 I/O header" width={600} height="auto" /></p>


XVF3800 I/O 区域引出了 INT-Device 工作和扬声器扩展所需的总线。请根据你所用版本的丝印标记确认具体焊盘顺序。

| 信号 | 描述 |
|--------|-------------|
| **3V3** | 为外部逻辑提供 3.3 V 电源轨 |
| **GND** | 地 |
| **MCLK** | I2S 主时钟 |
| **BCLK** | I2S 位时钟 |
| **LRCK** | I2S 左/右（字）时钟 |
| **DATA0** | I2S 数据，录音通道 |
| **DATA1** | I2S 数据，回放通道 |
| **SDA / SCL** | XVF3800 的 I2C 控制总线 |
| **CS_N / CLK / MISO** | 兼容外设使用的 SPI 信号 |
| **Speaker pins** | 外接扬声器的扬声器输出，与板载 JST 连接器共用 |

XIAO 焊盘区域还通过带标签的焊盘（D0、D2、D3、D13、D14、3V3、GND）引出了模块剩余的 I/O，因此可以在不使用单独载板的情况下连接外设。

{/* TODO(image): respeaker_44mm_pinout_schematic.png — labeled schematic to replace the close-up photos */}

### GPIO 概览

XVF3800 提供可配置的 GPIO，用于按键检测、音量、静音、功放使能、LED 供电以及外设通信。

| 引脚名称 | 功能 | 描述 |
|----------|----------|-------------|
| **X1D09** | 静音按键状态（GPI） | 读取静音按键状态；松开时为高电平 |
| **X1D13** | 音量增大 | 接收音量增大按键信号 |
| **X1D34** | 音量减小 | 接收音量减小按键信号 |
| **X0D11** | I2C 初始化 | 用于 I2C 初始化及相关控制 |
| **X0D30** | 静音 LED / 麦克风静音控制 | 驱动静音指示 LED 和麦克风静音功能 |
| **X0D31** | 功放使能 | 使能或关闭音频功放 |
| **X0D33** | WS2812 LED 供电控制 | 控制 WS2812 RGB LED 电路的供电 |
| **X0D39** | SPI MOSI | 面向兼容外设的 SPI 主出从入数据 |

## 入门指南

### 硬件准备

- USB Type-C 线缆
- 主机电脑，或 Raspberry Pi
- 可选：用于回放的 5 W 4 Ω 扬声器
- 可选：用于无线 / 嵌入式运行的 XIAO ESP32-S3 Plus

### 软件准备

- 用于录音和回放测试的 **Audacity**
- 用于固件更新的 **dfu-util**
- 带有 `pyusb` 的 **Python 3**，用于参数调节

### 开箱即用

:::note
为确保最佳的语音拾取效果以及音频算法的正确运行，请将设备背面麦克风端口（麦克风进音口 / 声孔）朝向声源。麦克风端口位于印有 Seeed Studio 标志的一侧。

{/* TODO(image): mic_inlet_orientation.jpg — mic port / Seeed logo side */}
:::

#### DoA（声源方向）

LED 灯环会跟随输入语音的方向移动，因此无需任何软件就能看到检测到的角度。DoA 数值也可以通过 USB/I2C 读取，用于你自己的应用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/doa_demo.gif" alt="DoA LED ring following the voice" width={600} height="auto" /></p>

#### 静音按键

静音按键会暂时禁用来自麦克风阵列的采集。

- 麦克风被静音，因此外部声音将不再被采集或处理。
- 静音激活时红色 LED 会点亮。
- 不会向主机发送任何音频输入。
- 再次按下按键会取消阵列静音。设备上电时默认为非静音状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/mute_demo.gif" alt="Mute button and red status LED" width={600} height="auto" /></p>

#### 音量增大 / 减小

剩下的两个按键在连接到 XVF3800 时，默认用于调节回放音量。它们是单步控制：每按一次，音量调整一个档位。也可以通过 Python 控制工具或操作系统的混音器在主机端设置相同的音量级别。

#### 复位按键

复位（RST）按键提供 XVF3800 的硬件复位。按下它会重新启动芯片，并从头重新初始化系统，与完整断电重启的效果完全相同。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/reset_demo.gif" alt="Reset button behaviour" width={600} height="auto" /></p>

#### 扬声器连接

你可以根据自己的音频输出偏好，通过板载 JST 连接器或 3.5 mm AUX 插孔连接扬声器。使用 JST 连接器并配合 4 Ω、5 W 扬声器，可以由板载 LM48511 功放驱动。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/speaker_connection.jpg" alt="Speaker connected to the JST connector" width={600} height="auto" /></p>

#### 安全模式

**Safe Mode** 是一种恢复模式，允许你通过 USB DFU 或 I2C DFU 烧录固件。如果你之前烧录了 I2S 固件并希望切换回 USB 固件，或者开发板不再被识别时，可以使用该模式。

| 固件 | USB DFU | I2C DFU |
|----------|---------|---------|
| **USB 固件** | 支持 | 不支持 |
| **I2S 固件** | 不支持 | 支持 |
| **Safe Mode 固件**（出厂分区） | 支持 | 支持 |

**何时使用 Safe Mode**

- 固件工作异常（USB 未被检测到、LED 行为异常）。
- 你需要重新烧录，但当前固件没有响应。
- 你烧录了错误的固件并希望恢复开发板。

**如何进入 Safe Mode**

1. 将设备完全断电。
2. 按住 **Mute** 按键。
3. 保持按住的同时重新接通电源。
4. 红色 LED 开始闪烁——设备现在正在从出厂分区运行 Safe Mode 固件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/safe_mode_demo.gif" alt="Red LED blinking in Safe Mode" width={600} height="auto" /></p>

## 更新固件

官方 GitHub 仓库中提供了两个固件镜像：

- 面向 Windows、Linux 和 macOS 主机系统的 **USB 固件**
- 面向 XIAO ESP32-S3 Plus 等微控制器主机的 **I2S 固件**

:::note
从 GitHub 下载固件文件时请**不要**使用 “Save as”（另存为）——这样得到的二进制文件会损坏。请克隆仓库，或使用 **Download ZIP** 获取包含所有文件的完整仓库。
:::

仓库： [reSpeaker_XVF3800_4MIC_44mm](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm)

### USB 固件

USB 固件会枚举为 UAC 2.0 声卡，适用于 Windows、Linux 和 macOS 主机。

| 固件镜像 | USB 音频配置 |
|----------------|-------------------|
| `respeaker_44mm_usb_c48k2ch_v1.0.0.bin` | 48 kHz、2 通道 USB 音频 |

固件目录中未附带 USB 音频类描述符转储文件。烧录完成后，请在配置录音应用之前，先在主机上确认设备报告的格式——不要在未从设备描述符中确认的情况下，擅自假定采样位宽或额外的采样率 / 通道配置。

### I2S 固件

当阵列连接到 XIAO ESP32-S3 Plus 等微控制器主机时，会使用 I2S 固件。音频通过 I2S 传输，XVF3800 通过 I2C 进行控制。

| 固件 | 通道数 | 说明 |
|----------|----------|-------|
| `respeaker_44mm_i2s_c48k2ch_v1.0.0.bin` | 2 | 处理后的 2 通道输出：通道 0 = Conference，通道 1 = ASR |

要烧录 XMOS 固件，请使用 USB 线将开发板连接到电脑。使用靠近 3.5 mm 音频插孔的 **XMOS USB-C 接口**。

### 安装 DFU Util

`dfu-util` 是一个通过 USB 进行设备固件升级（DFU）的命令行工具。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="windows" label="Windows">

- 下载 `dfu-util-0.11-binaries.tar.xz` 并解压，例如解压到 `D:\dfu-util-0.11-binaries\win64\`

  [下载链接](http://dfu-util.sourceforge.net/)

- 将 `dfu-util.exe` 的路径添加到系统的 `Path` 变量中：

  `My Computer > Properties > Advanced > Environment Variables > Path`

- 打开 **Command Prompt**（`cmd`）并验证安装：

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/dfu_util_version.png" alt="dfu-util version output" width={700} height="auto" /></p>

- 连接 reSpeaker XVF3800 44mm 并检查设备是否被检测到：

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/dfu_util_list.png" alt="dfu-util list output" width={800} height="auto" /></p>

> 如果你看到：
> `Cannot open DFU device 2886:0024 ... (LIBUSB_ERROR_NOT_SUPPORTED)`
> 请继续完成下面的驱动安装步骤。

- 安装 [Zadig](https://zadig.akeo.ie/)
  - 打开 Zadig → `Options > List All Devices`
  - 选择 `reSpeaker 3800 44 mm` 或 `reSpeaker XVF3800 4-Mic Array 44mm`
  - 安装 **WinUSB** 驱动
  - 对设备断电再上电
  - 再次运行 `dfu-util -l` 以确认设备已被检测到

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

```text
dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0024] ver=0100, devnum=57, cfg=1, intf=4, path="1-2", alt=1, name="reSpeaker DFU Upgrade", serial="??????????????????"
Found DFU: [2886:0024] ver=0100, devnum=57, cfg=1, intf=4, path="1-2", alt=0, name="reSpeaker DFU Factory", serial="??????????????????"
```

</TabItem>

<TabItem value="linux" label="Linux">

- 安装 dfu-util：

```bash
sudo apt install dfu-util
```

- 连接开发板并检查其是否被检测到：

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

Found DFU: [2886:0024] ver=0100, devnum=57, cfg=1, intf=4, path="1-2", alt=1, name="reSpeaker DFU Upgrade", serial="??????????????????"
Found DFU: [2886:0024] ver=0100, devnum=57, cfg=1, intf=4, path="1-2", alt=0, name="reSpeaker DFU Factory", serial="??????????????????"
```

</TabItem>
</Tabs>

### 烧录固件

- 运行以下命令，将 `-D` 指向你想要烧录的 `.bin` 文件：

```bash
dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- 在 Linux 上，使用 `sudo` 运行：

```bash
sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

`-R` 选项会在烧录完成后自动重启开发板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/dfu_flash.png" alt="dfu-util flashing output" width={800} height="auto" /></p>

再次运行 `dfu-util -l` 以确认新的固件版本已经在运行。

## 录音与回放

<Tabs>
<TabItem value="windows" label="Windows">

### 配置 Audacity（Windows）

1. 打开 **Audacity**。
2. 进入 **Audio Setup > Audio Settings**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/audacity_audio_setup.png" alt="Audacity Audio Setup menu" width={800} height="auto" /></p>

3. 设置：
   - **Host**：`Windows WASAPI`
   - **Playback Device**：`reSpeaker XVF3800 4-Mic 44mm`
   - **Recording Device**：`reSpeaker XVF3800 4-Mic 44mm`
   - **Channels**：`2 (Stereo)`
   - **Project Sample Rate**：`48000 Hz`
   - **Default Sample Rate**：`48000 Hz`
   - **Default Sample Format**：`32-bit float`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/audacity_audio_settings.jpg" alt="Audacity Audio Settings dialog" width={800} height="auto" /></p>

4. 点击 **OK** —— 现在可以开始录音了。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/audacity_recording.jpg" alt="Audacity recording waveform" width={800} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

### 配置 Audacity（macOS）

1. 打开 **Audacity**。
2. 进入 **Audio Setup** 并选择 **Recording Device > reSpeaker XVF3800 4-Mic 44mm**。
3. 打开 **Audio Settings** 并设置：
   - **Recording Device**：`reSpeaker XVF3800 4-Mic 44mm`
   - **Channels**：`2 (Stereo)`
   - **Project Sample Rate**：`48000 Hz`
   - **Default Sample Rate**：`48000 Hz`
   - **Default Sample Format**：`32-bit float`
4. 点击 **OK** 并开始录音。

:::note
macOS 需要在 **System Settings > Privacy & Security > Microphone** 中为 Audacity 授予麦克风权限。
:::

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### 从命令行录音

1. 查找声卡编号：

```bash
arecord -l
```

找到名为 `reSpeaker XVF3800 4-Mic 44mm` 的条目，并记下它的声卡编号，例如 `card 3`。

2. 录制 5 秒音频：

```bash
arecord -D plughw:3,0 -c 2 -r 48000 -f S32_LE -d 5 output.wav
```

将 `3` 替换为你实际的声卡编号。

3. 回放录音：

```bash
aplay -D plughw:3,0 output.wav
```

4. 如有需要，使用 `alsamixer` 调整音量（参见故障排查）。

### 使用 Audacity 录音

1. 安装 Audacity，例如通过 Pi-Apps：

```bash
wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```

2. 打开 **Audio Setup > Audio Settings** 并选择：
   - **Host**：`ALSA`
   - **Recording Device**：`reSpeaker XVF3800 4-Mic 44mm`
   - **Playback Device**：`reSpeaker XVF3800 4-Mic 44mm`
   - **Channels**：`2 (Stereo)`
3. 点击 **OK** 并开始录音。

</TabItem>
</Tabs>

## 调参

调参可以让你配置内置音频算法，并直接与 XMOS 芯片通信。我们提供了一个 Python 控制接口，用于参数配置和设备交互。

[**Python 控制目录**](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm/tree/main/python_control)

使用提供的脚本，你可以：

- 配置内置音频算法参数
- 获取 DoA（到达方向）数据
- 获取 VAD（语音活动检测）数据
- 控制板载 LED
- 控制语音处理流水线
- 读写设备 UUID
- 将信号路由到 USB 输出通道

**系统要求**

- Python 3.6 或更高版本
- `pyusb` Python 库
- `libusb` 系统库

### 安装与依赖

```bash
pip install pyusb
```

在 Windows 上，`libusb-package` pip 包是提供 libusb 的最简单方式。在 Linux 上，通过你的包管理器安装 libusb。

### 用法

**基本语法**

```bash
python xvf_host.py [options] command [--values value(s)...]
```

**命令选项**

| Option | Description |
|--------|-------------|
| `-l`, `--list` | 列出所有支持的命令及其详细信息 |
| `--vid` | 设置 USB Vendor ID（默认：`0x2886`） |
| `--pid` | 设置 USB Product ID；省略时，设备会通过 VID 自动发现 |
| `--values` | 为写命令提供数值（可选），十进制或十六进制（`0x7B`） |

### 使用示例

**1. 列出所有可用命令**

```bash
python xvf_host.py --list
```

**2. 读取固件版本**

```bash
python xvf_host.py VERSION
```

```text
VERSION: [1, 0, 0]
```

返回的元组与您烧录的固件相对应。

**3. 读取到达方向（DoA）**

```bash
python xvf_host.py DOA_VALUE
```

```text
DOA_VALUE: [135]
```

角度以度为单位，范围 0–359。

**4. 设置 LED 颜色**

```bash
python xvf_host.py LED_COLOR --values 0xFF0000
```

**5. 设置 LED 亮度**

```bash
python xvf_host.py LED_BRIGHTNESS --values 50
```

**6. 读取麦克风阵列几何信息**

```bash
python xvf_host.py AEC_MIC_ARRAY_GEO
```

```text
AEC_MIC_ARRAY_GEO:
[0.033, -0.033, 0.000,
 0.033,  0.033, 0.000,
-0.033,  0.033, 0.000,
-0.033, -0.033, 0.000]
```

这些数值是波束形成器使用的麦克风 X/Y 坐标，单位为米。在进行声学测量或校准之前，请检查报告的几何信息是否与你的开发板麦克风间距以及你烧录的固件镜像相匹配。

### USB 输出通道选择

USB 固件通过 `AUDIO_MGR_OP_L` 和 `AUDIO_MGR_OP_R` 将信号路由到立体声输出。每条命令需要两个值：`category`（信号组）和 `source`（该组内的信号）。省略 `--values` 可读取当前路由配置。

```bash
python xvf_host.py AUDIO_MGR_OP_L
python xvf_host.py AUDIO_MGR_OP_L --values 6 3
python xvf_host.py AUDIO_MGR_OP_R --values 1 0
```

最后两条命令将自动选择的波束路由到左声道，将原始麦克风 0 路由到右声道。原始麦克风流会绕过语音增强，通常比处理后的音频更安静。

保存路由配置，使其在重启后仍然有效：

```bash
python xvf_host.py SAVE_CONFIGURATION --values 1
```

## 故障排查

### 在 Linux 上扬声器回放声音太小

XVF3800 声卡有自己的 ALSA 混音器音量级别。如果回放声音太小：

1. 打开混音器：

   ```bash
   alsamixer
   ```

2. 按 **F6**，选择 `reSpeaker XVF3800 4-Mic 44mm` 声卡，然后按 **Enter**。
3. 使用方向键选择 **PCM-1** 并将其提高到 100%。
4. 使用 **ESC** 退出并保存设置：

   ```bash
   sudo alsactl store
   ```

5. 如果仍然很小，安装 PulseAudio Volume Control 并将输出提高到 100% 以上：

   ```bash
   sudo apt install pavucontrol -y
   ```

### 在 Windows 上刷写后，开发板未被列为声音设备

打开 **Device Manager**，找到相关的 reSpeaker 条目，右键点击每一项并选择 **Uninstall device**。然后拔下并重新插入 USB 线——Windows 会重新安装正确的声卡驱动。

### `dfu-util -l` 报告 LIBUSB_ERROR_NOT_SUPPORTED

WinUSB 驱动未绑定到 DFU 接口。安装 [Zadig](https://zadig.akeo.ie/)，启用 `Options > List All Devices`，选择 `reSpeaker 3800 44 mm`，安装 **WinUSB**，对开发板断电重上电，然后再次运行 `dfu-util -l`。

### 开发板完全无法枚举

进入 **Safe Mode**（按住静音按钮上电，等待红色 LED 闪烁），然后重新刷写 USB 固件。Safe Mode 固件同时支持 USB DFU 和 I2C DFU，因此始终可以恢复。

## 资源

- [reSpeaker XVF3800 44mm 固件和 Python 控制（GitHub）](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm)
- [XMOS XVF3800 文档](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/index.html)

{/* TODO: add 2D DXF and 3D STEP downloads here once the mechanical files are published */}

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
