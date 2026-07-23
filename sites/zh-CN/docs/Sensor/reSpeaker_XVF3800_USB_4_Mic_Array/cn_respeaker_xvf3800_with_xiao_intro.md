---
description: ReSpeaker XVF3800 USB 4-Mic Array 是一款专业的环形 4 麦克风阵列，具备 AEC、波束成形、噪声抑制和 360° 语音采集功能。搭配 XIAO ESP32S3，可为智能设备、机器人和物联网应用提供高级语音控制能力，实现无缝集成与双模式灵活应用。
title: 使用 reSpeaker XVF3800 USB Mic Array 搭配 XIAO ESP32S3 的入门指南
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_xiao_getting_started
sku: 114993700
last_update:
  date: 8/20/2025
  author: Kasun Thushara
createdAt: '2025-07-16'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/cn/respeaker_xvf3800_xiao_getting_started/
---

# reSpeaker XVF3800 USB 4 麦克风阵列（搭配 XIAO ESP32S3）

## 概述

**ReSpeaker XVF3800 USB 4-Mic Array** 是一款基于 XMOS XVF3800 的专业环形 4 麦克风阵列。它具备 AEC、AGC、DoA、波束成形、VAD、噪声抑制、去混响以及 360° 语音采集（最远可达 5 米）等功能。同时支持双工作模式，非常适合高级语音应用。与 Xiao ESP32S3 结合使用时，控制 ReSpeaker XVF3800 USB 的能力更加强大，释放无限可能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 特性

- **芯片升级**：从 XVF3000 升级为 XVF3800

- **四麦克风阵列**：4 个高性能麦克风呈环形排布，可实现 360° 远场语音采集（最远 5 米）

- **高级音频处理**：由 XVF3800 提供算力，支持 AEC、多波束成形、去混响、DoA 检测、动态噪声抑制、60dB AGC 范围

- **唯一设备序列号**：内置 SN，支持多设备部署和高级设备管理

- **双工作模式**：USB 即插即用模式用于快速连接 PC，INT-Device（I2S）模式用于嵌入式系统集成——可通过 USB 或 I2C 命令配置，并通过切换固件实现

- **开源兼容性**：可与 USB 主机（Windows、macOS、Raspberry Pi OS）以及 I2S 主机（XIAO 系列、ESP32、Arduino）配合使用。

- **可视化反馈**：可编程 RGB LED 和状态指示灯用于显示设备状态和语音活动

- **音频质量相当或更佳**：与上一代产品相比

## 入门指南（I2S 与 USB 固件）

默认情况下，reSpeaker XVF3800 USB 4 麦克风阵列搭配 XIAO ESP32S3 使用 **I2S 固件**。在 I2S 模式下，它**不会**被识别为 **USB 设备**。

你可以通过安装对应固件在 I2S 和 USB 模式之间切换。使用安全模式将设备作为 USB 设备连接，并烧录固件，以更新固件或在模式之间切换。

### 烧录 I2S 固件

要将 reSpeaker XVF3800 与 XIAO ESP32S3 搭配使用，请确保 reSpeaker XVF3800 固件为 I2S 版本，并更新到最新版本。
请访问此[章节](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#更新固件)。

:::note
要与 XIAO ESP32S3 协同工作，你需要将其烧录为 I2S 固件。然而，I2S 固件不支持 USB DFU（设备不会被识别为 USB 设备）。请切换到安全模式，因为它同时支持 USB DFU 和 I2C DFU。要了解更多信息，请访问此[章节](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#安全模式)。
:::

## 硬件总览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### 主要组件

| **组件 / 特性**              | **描述**                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **主音频处理器**              | **XMOS XVF3800**，负责包括 AEC、波束成形、噪声抑制等在内的音频处理。                                  |
| **麦克风阵列**                | 环形排布的 **四路 PDM MEMS 麦克风**，支持 **360° 远场语音采集（5m）**。                              |
| **音频编解码器**              | **TLV320AIC3104**，负责音频转换和输出。                                                               |
| **RGB LED**                   | **12 颗 WS2812** 可单独寻址的 RGB LED，用于可视化反馈（如状态、语音活动）。                          |
| **静音按键**                  | 按下可 **静音/取消静音** 麦克风输入。                                                                 |
| **静音指示 LED**              | 点亮（通常为红色）表示音频已静音。                                                                   |
| **复位按键**                  | 用于对板卡/系统进行硬件复位。                                                                        |
| **USB Type-C 接口**           | 用于 **供电和数据传输**（符合 USB Audio Class 2.0）。                                                |
| **3.5mm AUX 耳机插孔**        | 为耳机或有源音箱提供音频输出。                                                                       |
| **扬声器连接器**              | **JST 扬声器接口**，支持 **5W 功放扬声器**。                                                         |
| **调试焊盘**                  | 为 **XTAG4** 或其他编程器提供调试访问。                                                              |
| **I2C 与 I2S 排针**           | 为与外部设备进行 **I2C 和 I2S 通信** 提供引出排针。                                                  |
| **未使用 IO 焊盘（XIAO）**    | 连接到 XIAO 模组的额外 I/O 焊盘。                                                                    |
| **I2S 与 I2C 通信**           | 通过这些协议支持与 Raspberry Pi、PC 等外部主机连接。                                                 |
| **USB 与 INT-Device 模式**    | 双模式运行：即插即用 USB 模式或通过 I2S 的内部 INT 设备模式。                                       |
| **唯一序列号**                | 内置 **设备 SN**，用于标识和多设备管理。                                                             |
| **开源兼容性**                | 可与 **Arduino、Raspberry Pi、PC/Mac** 协同工作，并兼容 **XIAO 系列**。                              |
| **高级音频特性**              | AEC、波束成形、去混响、**DoA 检测**、基于 DNN 的噪声抑制、60dB AGC。                                 |
| **可视化反馈**                | 通过 **RGB LED 灯效** 和 **状态指示灯** 显示设备状态和音频活动。                                    |
| **音频质量**                  | 与 **基于 XVF3000 的上一代设计** 相当或更佳。                                                        |

### XIAO ESP32S3 支持

- 立体声 I2S 输入/输出，具备多种输出选项；I2C 接口用于配置和管理 XVF3800 参数。
- 通过 IO 引脚复位 XIAO
- 接口与焊盘

### 引脚分布

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

### 板载 WIFI 天线

在使用 XIAO ESP32S3 时，无需外接天线——只需连接天线焊盘即可使用板载 PCB 天线。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/antenna.PNG" alt="pir" width={600} height="auto" /></p>

### GPIO 概览

reSpeaker XVF3800 提供 3 个输入引脚（GPI）和 5 个输出引脚（GPO）用于外部控制。你可以使用它们读取按键状态，或控制诸如静音 LED、功放或 LED 等硬件。

| **引脚名称** | **方向**     | **功能**                                           |
|--------------|---------------|----------------------------------------------------|
| X1D09        | 输入 (RO)     | 静音按键状态（释放时为高电平）                     |
| X1D13        | 输入 (RO)     | 悬空                                               |
| X1D34        | 输入 (RO)     | 悬空                                               |
| X0D11        | 输出 (RW)     | 悬空                                               |
| X0D30        | 输出 (RW)     | 静音 LED + 麦克风静音控制（高电平 = 静音）        |
| X0D31        | 输出 (RW)     | 功放使能（低电平 = 使能）                         |
| X0D33        | 输出 (RW)     | WS2812 LED 供电控制（高电平 = 打开）              |
| X0D39        | 输出 (RW)     | 悬空                                               |

## 软件准备

### 安装 Arduino IDE

根据你的操作系统下载并安装稳定版本的 Arduino IDE

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

要通过开发板管理器开始安装流程，请按照以下步骤操作：

- 安装当前上游版本的 Arduino IDE，版本需为 1.8 或更高。当前版本可在 [arduino.cc](https://www.arduino.cc/en/Main/Software) 网站获取。

- 启动 Arduino 并打开 `Settings` 窗口。

- 在 Additional Board Manager URLs 字段中输入上述任一发行链接。你可以添加多个 URL，用逗号分隔。

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- 从侧边栏打开 `Boards Manager`，搜索 `ESP32` 并点击 `INSTALL`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- 重启 Arduino IDE。

### 支持库

:::note
请安装 [Arduino Audio Tools 库](https://github.com/pschatzmann/arduino-audio-tools)，以便运行提供的示例。
:::

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
