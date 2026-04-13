---
description: ReSpeaker XVF3800 USB 4-Mic Array 是一款基于 XVF3800 的专业级环形 4 麦克风阵列，具备 AEC、波束成形、噪声抑制以及 360° 语音采集等功能。搭配 XIAO ESP32S3，可为智能设备、机器人以及物联网应用实现高级语音控制。了解其无缝集成能力与双模式灵活性。
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
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/respeaker_xvf3800_xiao_getting_started/
---

# reSpeaker XVF3800 USB 4 麦克风阵列搭配 XIAO ESP32S3

## 概述

**ReSpeaker XVF3800 USB 4-Mic Array** 是一款基于 XMOS XVF3800 的专业级环形 4 麦克风阵列。它具备 AEC、AGC、DoA、波束成形、VAD、噪声抑制、混响消除以及 360° 语音采集（最远达 5 米）等功能。同时支持双工作模式，非常适合高级语音应用。当与 Xiao ESP32S3 结合使用时，对 ReSpeaker XVF3800 USB 的控制将更加强大，释放无限可能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 特性

- **芯片升级**：从 XVF3000 升级为 XVF3800

- **四麦克风阵列**：4 颗高性能麦克风环形排布，可实现 360° 远场语音采集，最远达 5 米

- **高级音频处理**：由 XVF3800 提供 AEC、多波束成形、混响消除、DoA 检测、动态噪声抑制，以及 60dB AGC 范围

- **唯一设备序列号**：内置 SN，支持多设备部署和高级设备管理

- **双工作模式**：USB 即插即用模式，用于快速连接 PC；INT-Device（I2S）模式，用于嵌入式系统集成——可通过 USB 或 I2C 命令进行配置，只需相应切换固件

- **开源兼容性**：可用于 USB 主机（Windows、macOS、Raspberry Pi OS）和 I2S 主机（XIAO 系列、ESP32、Arduino）。

- **可视化反馈**：可编程 RGB LED 和状态指示灯用于显示设备状态和语音活动

- **相同或更佳的音频质量**：相较于上一代产品

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### 主要组件

| **组件 / 特性**              | **描述**                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **主音频处理器**              | **XMOS XVF3800**，负责包括 AEC、波束成形、噪声抑制等在内的音频处理。                                  |
| **麦克风阵列**                | **四路 PDM MEMS 麦克风** 采用环形排布，支持 **360° 远场语音采集（5m）**。                           |
| **音频编解码器**              | **TLV320AIC3104**，负责音频转换和输出。                                                              |
| **RGB LED**                   | **12 颗 WS2812** 可独立寻址的 RGB LED，用于可视化反馈（如状态、语音活动）。                           |
| **静音按键**                  | 按下可 **静音/取消静音** 麦克风输入。                                                                |
| **静音指示 LED**              | 点亮（通常为红色）以指示当前音频处于静音状态。                                                       |
| **复位按键**                  | 为开发板/系统提供硬件复位。                                                                         |
| **USB Type-C 接口**           | 用于 **供电和数据传输**（符合 USB Audio Class 2.0 标准）。                                          |
| **3.5mm AUX 耳机插孔**        | 为耳机或有源音箱提供音频输出。                                                                      |
| **扬声器连接器**              | **JST 扬声器接口**，支持 **5W 功放扬声器**。                                                         |
| **调试焊盘**                  | 为 **XTAG4** 或其他编程器提供调试访问。                                                              |
| **I2C 与 I2S 排针**           | 为与外部设备进行 **I2C 和 I2S 通信** 提供排针接口。                                                  |
| **未使用的 IO 焊盘（XIAO）**  | 连接到 XIAO 模组的额外 I/O 焊盘。                                                                   |
| **I2S 与 I2C 通信**           | 支持通过这些协议与 Raspberry Pi、PC 等外部主机连接。                                                |
| **USB 与 INT-Device 模式**    | 双模式运行：即插即用 USB 模式或通过 I2S 的内部 INT 设备模式。                                      |
| **唯一序列号**                | 内置 **设备 SN**，用于标识和多设备管理。                                                             |
| **开源兼容性**                | 兼容 **Arduino、Raspberry Pi、PC/Mac**，并支持 **XIAO 系列**。                                       |
| **高级音频功能**              | AEC、波束成形、混响消除、**DoA 检测**、基于 DNN 的噪声抑制、60dB AGC。                               |
| **可视化反馈**                | 通过 **RGB LED 灯效** 和 **状态指示灯** 显示设备状态和音频活动。                                    |
| **音频质量**                  | 与 **基于 XVF3000 的上一代设计** 相同或更佳。                                                        |

### XIAO ESP32S3 支持

- 立体声 I2S 输入/输出，提供多种输出选项；I2C 接口用于配置和管理 XVF3800 参数。
- 通过 IO 引脚复位 XIAO
- 接口和焊盘

### 引脚分布

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

### 板载 WIFI 天线

在使用 XIAO ESP32S3 时，无需外接天线——只需连接天线焊盘即可使用板载 PCB 天线。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/antenna.PNG" alt="pir" width={600} height="auto" /></p>

### GPIO 概览

reSpeaker XVF3800 暴露了 3 个输入引脚（GPI）和 5 个输出引脚（GPO）用于外部控制。你可以使用这些引脚读取按键状态，或控制诸如静音 LED、功放或 LED 等硬件。

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

## 烧录 I2S 固件

要将 reSpeaker XVF3800 与 XIAO ESP32S3 搭配使用，请确保 reSpeaker XVF3800 固件为 I2S 版本。
请查看 Firmware Flash 以烧录最新的 I2S 固件。请访问[本节](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#update-firmware)。

:::note
要与 XIAO ESP32S3 协同工作，你需要烧录 I2S 固件。然而，它不支持 USB DFU。如果你当前已在使用 USB 固件，可以进入安全模式来烧录固件。这种方式更灵活，因为它同时支持 USB DFU 和 I2C DFU。要了解更多，请访问[本节](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#safe-mode)。
:::

## 软件准备

### 安装 Arduino IDE

请根据你的操作系统下载并安装稳定版本的 Arduino IDE

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

要通过开发板管理器开始安装过程，请按照以下步骤进行：

- 安装当前上游版本的 Arduino IDE 1.8 或更高版本。当前版本可在 [arduino.cc](https://www.arduino.cc/en/Main/Software) 网站获取。

- 启动 Arduino 并打开 `Settings` 窗口。

- 将上述任一发布链接填入 Additional Board Manager URLs 字段中。你可以添加多个 URL，用英文逗号分隔。

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- 打开侧边栏中的 `Boards Manager`，搜索 `ESP32` 然后点击 `INSTALL`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- 重启 Arduino IDE。

### 支持库 

:::note
请安装 [Arduino Audio Tools 库](https://github.com/pschatzmann/arduino-audio-tools)，以便运行提供的示例。
:::


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺畅。我们提供多种交流渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
