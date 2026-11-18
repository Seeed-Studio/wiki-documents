---
description: reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus 将紧凑的 44 mm 圆形 4 麦克风阵列与预焊接的 ESP32-S3 模组结合，在 XMOS XVF3800 语音处理链路之上增加了 Wi-Fi/Bluetooth、I2S 音频和 I2C 控制。
title: reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus 入门指南
keywords:
  - reSpeaker 44mm
  - reSpeaker XVF3800
  - XIAO ESP32-S3 Plus
  - ESP32S3
  - xvf3800
  - i2s microphone array
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png
slug: /respeaker_44mm_xiao_getting_started
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/cn/respeaker_44mm_xiao_getting_started/
---
# reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus 入门指南

{/* TODO(image): add a product render per variant — see wiki_44mm_images/README.txt */}

## 概述

reSpeaker XVF3800 USB 44mm with XIAO ESP32-S3 Plus 是一款基于 XMOS XVF3800 的专业圆形 4 麦克风阵列。它具备 AEC、AGC、DoA、波束成形、VAD、噪声抑制、去混响以及最远 5 米的 360° 语音采集能力，并支持 USB 和 I2S 两种工作方式。将阵列与 XIAO ESP32-S3 Plus 组合后，可增加 Wi-Fi 和 Bluetooth 以及本地主控处理器，从而在无需 PC 的情况下控制和传输语音处理链路。

该板保持了标准 44 mm 阵列的紧凑 **44 mm 麦克风间距**，因此可以适配相同的外壳，同时 XIAO 模组直接焊接在背面，并通过 I2S 和 I2C 与 XVF3800 连接。

{/* TODO: replace the href="#" values with the Seeed Studio product page URLs once they are published. */}

<div class="table-center">
<table>
  <tr>
    <td align="center" width="320" valign="top">
      <div style={{height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm with XIAO ESP32S3 Plus" style={{maxWidth: 300, maxHeight: 300}} />
      </div>
    </td>
    <td align="center" width="320" valign="top">
      {/* TODO(image): replace with the case + XIAO render once available */}
      <div style={{height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_case.png" alt="reSpeaker XVF3800 44mm with case and XIAO ESP32S3 Plus" style={{maxWidth: 300, maxHeight: 300}} />
      </div>
    </td>
  </tr>
  <tr>
    <td align="center" valign="top">
      <p><strong>reSpeaker XVF3800 4-Mic Array 44mm with XIAO ESP32-S3 Plus</strong><br />
      <code>SKU 100066841</code><br />
      预焊接 XIAO ESP32-S3 Plus 的 PCBA，I2S 固件</p>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="#" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div>
    </td>
    <td align="center" valign="top">
      <p><strong>reSpeaker XVF3800 4-Mic Array 44mm with Case &amp; XIAO ESP32-S3 Plus</strong><br />
      <code>SKU 100065276</code><br />
      PCBA + 外壳 + 预焊接 XIAO ESP32-S3 Plus</p>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="#" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div>
    </td>
  </tr>
</table>
</div>

## 特性

- **紧凑的 44 mm 设计**：麦克风间距从 66 mm 减小到 44 mm，使电路板更小，更易集成到空间受限的产品中。

- **板载 XIAO ESP32-S3 Plus**：预焊接模组增加了 Wi-Fi 和 Bluetooth，I2S 音频和 I2C 控制直接连接到 XVF3800。

- **高级音频处理**：XMOS XVF3800，具备 AEC、AGC（60 dB 范围）、多通道波束成形、DoA、VAD、动态噪声抑制和去混响，所有参数均可调。

- **高音频质量**：与现有 66 mm 间距的 reSpeaker XVF3800 圆形 4 麦克风阵列相当。

- **双工作模式**：USB Audio Class 2.0 即插即用，或通过固件选择 I2S/INT-Device 模式供 XIAO 和其他嵌入式主机使用。

- **灵活的连接与更新**：通过 USB 和 I2C 进行配置，并支持 DFU 固件更新。

- **唯一设备标识**：可读写 UUID，用于多设备管理、识别和数据追踪。

- **可编程 RGB 反馈**：24 颗 WS2812 LED 显示设备状态、启动动画和 DoA 方向，并可切换由 XIAO 控制。

- **三个可自定义按键**：默认分别为音量加、音量减和静音，可在 XVF3800 与 XIAO 焊盘之间切换。

- **广泛的平台兼容性**：支持 Windows、macOS 和 Raspberry Pi OS 等 USB 主机，以及与 XIAO 系列、ESP32 和 Arduino 的 I2S 集成。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg" alt="reSpeaker XVF3800 44mm PCB component callouts" width={900} height="auto" /></p>

## 入门指南（I2S 与 USB 固件）

默认情况下，reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus 预装 **I2S 固件**。在 I2S 模式下，该板 **不会** 被识别为 USB 设备。

你可以通过烧录对应固件在 I2S 和 USB 模式之间切换。使用 **Safe Mode** 让电路板以 USB 设备方式启动，这样你就可以对其进行烧录、更新或在模式之间切换。

:::note
为确保最佳的语音拾取效果以及音频算法的正确运行，请将设备背面麦克风端口（麦克风进音口 / 声孔）朝向声源。麦克风端口位于印有 Seeed Studio 标志的一侧。

{/* TODO(image): mic_inlet_orientation.jpg — mic port / Seeed logo side */}
:::

### 烧录 I2S 固件

要将阵列与 XIAO ESP32-S3 Plus 搭配使用，请确保 XVF3800 正在运行 `I2S` 固件，并将其更新到最新版本。请参阅介绍页面中的 [Update Firmware](https://wiki.seeedstudio.com/cn/respeaker_44mm_introduction/#update-firmware) 章节。

:::note
I2S 固件 **不** 支持 USB DFU，因为在该模式下电路板不会枚举为 USB 设备。请改为进入 [Safe Mode](https://wiki.seeedstudio.com/cn/respeaker_44mm_introduction/#safe-mode) —— 出厂的 Safe Mode 固件同时支持 USB DFU 和 I2C DFU，因此始终可以恢复并重新烧录。
:::

## 硬件概览

{/* TODO(image): xiao_soldered.jpg — board with the XIAO ESP32-S3 Plus soldered on */}

XIAO 模组位于电路板背面，靠近 USB-C 接口和 XMOS I/O 焊盘。其余所有 I/O 都引出到带有丝印标注的焊盘上，因此该模组无需额外载板即可驱动外设。

### 主要元件

| 元件 / 特性 | 描述 |
|--------------------|-------------|
| **主音频处理器** | XMOS XVF3800，负责 AEC、波束成形、噪声抑制和 DoA 检测 |
| **麦克风阵列** | 4 颗 PDM MEMS 麦克风，圆形布局，44 mm 间距，360° 远场采集 |
| **音频编解码器** | TLV320AIC3104，音频转换和 DAC 输出 |
| **功放** | LM48511 D 类音频功率放大器 |
| **RGB LED** | 24 颗 WS2812 可单独寻址 RGB LED |
| **可自定义按键** | 三个实体按键，默认为音量加 / 音量减 / 静音，可切换连接到 XIAO |
| **静音指示 LED** | 麦克风静音时点亮的红色 LED |
| **USB Type-C 接口** | 5 V 供电、UAC 2.0 音频、控制和 DFU |
| **扬声器连接器** | 竖直 JST 接口用于 5 W 4 Ω 扬声器，外加 3.5 mm AUX 插孔 |
| **XIAO ESP32-S3 Plus** | 预焊接模组，提供 I2S、I2C、RST、按键和 LED 连接 |
| **板载天线** | 用于 Wi-Fi/Bluetooth 的 PCB 天线，并带有 IPEX 接口以连接外部馈线 |

完整的引脚级列表（包括电源、调试和扩展焊盘）请参阅介绍页面中的 [Main Components](https://wiki.seeedstudio.com/cn/respeaker_44mm_introduction/#main-components)。

### XIAO ESP32-S3 Plus 支持

XIAO ESP32-S3 Plus 与 XVF3800 以及板载按键和 LED 相连：

- **立体声 I2S 输入/输出**，具有多种输出选项，使用双总线（播放和录音），共享 BCLK、MCLK 和 LRCLK。
- **I2C 接口**，用于从 XIAO 配置和管理 XVF3800 参数。
- **复位线** —— XIAO 可通过专用 IO 引脚对 XVF3800 进行硬件复位。
- **接口与焊盘** —— 其余 XIAO I/O 引出到带标签的焊盘，供用户扩展。
- **灵活的按键和 LED 连接** —— 通过开关将三个按键和 LED 串连接到 XVF3800 或 XIAO。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/xiao_esp32s3_plus_schematic.png" alt="XIAO ESP32-S3 Plus schematic on the 44mm array" width={900} height="auto" /></p>

原理图中 U24 为 XIAO ESP32-S3 Plus 焊盘：D4/D5 承载 I2C，D6–D10 承载 I2S 总线和 MCLK，D11 用于选择按键/LED 连接，D12 为 I2C 中断，D15–D19 驱动 LED 串、麦克风使能/静音以及音量按键。

| XIAO 引脚 | 信号 | 功能 |
|----------|--------|----------|
| D0 | `XIAO_D0` | 空闲 GPIO |
| D1 | `XIAO_D1` | 空闲 GPIO |
| D2 | `XIAO_D2` | 空闲 GPIO |
| D3 | `XIAO_D3` | 空闲 GPIO |
| D4 | `I2C_SDA` | 到 XVF3800 的 I2C 数据 |
| D5 | `I2C_SCL` | 到 XVF3800 的 I2C 时钟 |
| D6 | `I2S_DATA1` | I2S 录音数据（RX） |
| D7 | `I2S_DATA0` | I2S 播放数据（TX） |
| D8 | `I2S_LRCK` | I2S 左/右声道时钟 |
| D9 | `I2S_BCLK` | I2S 位时钟 |
| D10 | `MCLK` | I2S 主时钟 |
| D11 | `XIAO_D11_SWITCH` | 按键 / LED 连接开关控制 |
| D12 | `I2C_INT` | I2C 中断 |
| D13 | `XIAO_D13` | 空闲 GPIO |
| D14 | `XIAO_D14` | 空闲 GPIO |
| D15 | `WS2812_DIN_XIAO` | WS2812 LED 数据（连接到 XIAO 时） |
| D16 | `MIC_OEN_XIAO` | 麦克风使能 |
| D17 | `MIC_Mute_XIAO` | 麦克风静音控制 |
| D18 | `Audio_Down_XIAO` | 音量减按键 |
| D19 | `Audio_Up_XIAO` | 音量加按键 |

### 引脚输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/xiao_pinout.jpg" alt="XIAO expansion pads on the 44mm array" width={600} height="auto" /></p>

焊盘上的丝印标签与下表一致。与 XVF3800 共享的信号已标注，其余为空闲的 XIAO GPIO。



带有 XIAO 引脚编号的引出焊盘对应以下 ESP32-S3 GPIO：

| XIAO ESP32-S3 Plus 引脚 | ESP32-S3 GPIO |
|------------------------|---------------|
| D0 | GPIO1 |
| D2 | GPIO2 |
| D3 | GPIO4 |
| D13 | GPIO40 |
| D14 | GPIO41 |

有关完整的 XIAO 引脚分布和工具链详情，请参阅 [XIAO ESP32S3 入门指南](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/) 页面。

### 板载 Wi-Fi 天线

使用 XIAO ESP32-S3 Plus 时，无需外接天线——只需连接天线焊盘即可使用内置的 PCB 天线。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/on_board_antenna.jpg" alt="Onboard antenna slots" width={400} height="auto" /></p>

天线焊盘旁边的 IPEX 连接器可以通过合适的射频线缆，将 XIAO 模组的射频信号馈入板载天线，如果你希望以不同方式布线的话。

## 软件准备

### 安装 Arduino IDE

下载并安装适用于你操作系统的稳定版本 Arduino IDE。

 <div className="download_arduino_container" style={{ textAlign: 'center' }}>
  <a
    className="download_arduino_item"
    href="https://www.arduino.cc/en/software"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: '#FFFFFF', fontSize: '1.25rem' }}
  >
    <strong>Download Arduino IDE</strong>
  </a>
</div>

<br />

#### 安装 Arduino-ESP32

通过 Boards Manager 安装 ESP32 开发板支持包：

- 安装 1.8 或更高版本的当前上游 Arduino IDE。当前版本可在 [arduino.cc](https://www.arduino.cc/en/Main/Software) 网站获取。

- 启动 Arduino 并打开 `Settings` 窗口。

- 在 **Additional Board Manager URLs** 字段中输入下面的发布链接。你可以添加多个用逗号分隔的 URL。

```text
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/arduino_preferences.png" alt="Arduino IDE Preferences with board manager URL" width={900} height="auto" /></p>

- 从侧边栏打开 `Boards Manager`，搜索 `ESP32`，然后点击 `INSTALL`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/arduino_boards_manager.png" alt="Arduino IDE Boards Manager installing esp32" width={900} height="auto" /></p>

- 重启 Arduino IDE。

### 支持库

:::note
请安装 [Arduino Audio Tools 库](https://github.com/pschatzmann/arduino-audio-tools)，以便运行提供的示例。
:::

## 资源

- [reSpeaker XVF3800 44mm 介绍](https://wiki.seeedstudio.com/cn/respeaker_44mm_introduction/)
- [固件和 Python 控制（GitHub）](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm)
- [Arduino Audio Tools 库](https://github.com/pschatzmann/arduino-audio-tools)
- [XMOS XVF3800 文档](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/index.html)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
