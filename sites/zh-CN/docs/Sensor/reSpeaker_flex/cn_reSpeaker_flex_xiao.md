---
description: reSpeaker Flex 是一款强大的模块化语音系统，搭载 XMOS XVF3800，配备可互换的环形和线性 4 麦克风阵列，可实现精确的 360° 或定向音频采集——非常适合机器人和智能设备。
title: 使用 Xiao ESP32S3 的 reSpeaker Flex 入门
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg
slug: /respeaker_flex_xiao_introduction
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 04/8/2026
  author: Kasun Thushara
createdAt: '2026-04-08'
updatedAt: '2026-07-23'
url: https://wiki.seeedstudio.com/cn/respeaker_flex_xiao_introduction/
---

# 搭配 XIAO ESP32S3 的 reSpeaker Flex

## 概述

reSpeaker Flex ESP32 版本在核心板上集成了预焊接的 XIAO ESP32S3 模块，为无线控制和边缘处理提供了内置 Wi-Fi 和 Bluetooth 连接。系统由 XMOS XVF3800 语音处理器驱动，保持相同的模块化架构，麦克风阵列板通过柔性的 24 针 FPC 线缆连接到核心板，便于在设备外壳内部灵活布置。它支持环形和线性两种 4 麦克风阵列，可实现 360° 全向采集或前向定向拾音。系统可以通过 USB（UAC 2.0）或 I2S 工作，而集成的 ESP32S3 则实现 IoT 连接、本地控制以及与嵌入式应用的更简便集成。


<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 线性阵列，搭配 XIAO ESP32S3 </th>
    <th>reSpeaker Flex XVF3800 环形阵列，搭配 XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
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

## 特性 

- **分体式模块化设计**：核心板和麦克风阵列板物理分离，通过 FPC 软排线连接，可在任意产品机壳内灵活放置

- **多种麦克风配置选择**：在同一核心板上可互换环形 4 麦阵列（360° 拾音，44mm 间距）或线性 4 麦阵列（180° 前向指向性，33mm 间距）

- **XMOS XVF3800 音频处理**：完整支持 AEC、AGC、DoA、多通道波束成形、VAD、噪声抑制和混响消除

- **双工作模式**：USB UAC 2.0，可即插即用连接 PC 和 SBC；I2S 模式用于直接嵌入式集成

- **双 USB 连接**：USB-C 接口和 PH2.0 锁扣接口均支持 UAC 2.0 音频和 DFU 固件升级

- **板载功放**：通过 JST 接口驱动 10W、4 欧姆扬声器，并提供 3.5mm AUX 耳机输出

- **XIAO ESP32S3 支持**：预焊接模块提供 Wi-Fi/Bluetooth 功能，I2S 和 I2C 总线直接连接 XVF3800，用于无线控制和音频转发

- **固件灵活性**：双 USB 固件版本（2 通道和 6 通道）、I2S 固件、通过 dfu-util 进行 DFU 升级，并在断电后保持配置

- **Python SDK**：可通过 Python 调整录音格式、音量、算法参数和通道路由


## 主要组件 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/main.jpg" alt="pir" width={800} height="auto" /></p>


### 核心板

| 组件 / 特性 | 描述 |
|--------------------|------------|
| **主音频处理器** | XMOS XVF3800（固件 v3.2.1），负责所有音频 DSP，包括 AEC、波束成形、DoA 和噪声抑制 |
| **音频编解码器** | TLV320AIC3104，负责音频转换和 DAC 输出 |
| **FPC 麦克风阵列接口** | 24 针带锁扣 FPC 连接器，支持最多 8 麦阵列和 2 路 GPIO 线 |
| **USB-C 接口** | UAC 2.0 音频、DFU 固件升级和供电 |
| **PH2.0 接口** | 带锁扣连接器；提供与 USB-C 接口相同的 UAC 2.0 音频和 DFU 支持 |
| **3.5 mm AUX 插孔** | 侧向耳机输出，由板载 DAC 驱动 |
| **扬声器 JST 接口** | 直立安装连接器，可驱动最高 10W、4Ω 扬声器；保留焊盘以便硬连线扬声器连接 |
| **外部电源端子** | 为整个系统提供 12V 供电并支持 10W 扬声器负载（P1 优先） |
| **RST 按钮** | XVF3800 的硬件复位 |
| **SafeMode（启动）按钮** | 上电时按住可进入安全模式进行固件恢复 |
| **PWR 指示灯** | 绿色电源指示灯 |
| **调试焊盘** | 预留 XMOS XTAG4 焊盘（出厂未焊接） |
| **XMOS 3800 IO 排针** | 引出 I2C、I2S、5V/GND、扬声器引脚及其余 XVF3800 IO 的排针/焊盘 |
| **安装孔** | 4 × M3 安装孔 |
| **XIAO ESP32S3** | 当其作为主控设备使用时，支持焊接 XIAO ESP32S3 |
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
| **拾音模式** | 约 180° 的前向拾音模式，后向声音被抑制 |
| **接口** | FPC 连接器；线缆可从侧面或背面走线 |
| **安装** | 2 × M3 安装孔 |


### XIAO ESP32S3 支持 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/xiao_esp32s3.png" alt="pir" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/header_pinout.jpg" alt="pir" width={800} height="auto" /></p>


reSpeaker Flex 核心板包含专用焊盘，可焊接 Seeed Studio XIAO ESP32S3 模块，在 XVF3800 音频处理链路之上实现 Wi-Fi 和 Bluetooth 连接。包含 XIAO 的 SKU（-C4-1 和 -L4-1）出厂已预装该模块；基础 SKU（-C4-0 和 -L4-0）则保留焊盘未焊接。
当安装了 XIAO 后，它与 XVF3800 之间会建立如下连接：

- **I2S 总线** — 双总线（播放和录制），共享 BCLK、MCLK 和 LRCLK，用于双向音频流传输
- **I2C 总线** — 供 XIAO 读取和写入 XVF3800 配置参数
- **RST 线** — XIAO 可通过专用 IO 引脚对 XVF3800 进行硬件复位
- **剩余 XIAO IO** — 引出到带标签的排针/焊盘，供用户扩展

### 排针 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_2.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_1.png" alt="pir" width={600} height="auto" /></p>


### 24 FPC 线缆 

FPC 麦克风阵列接口为 24 针、0.5mm 间距带锁扣连接器，包装盒内附带的 20cm FPC 软排线已与该连接器配套。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/24_fpc_cable.png" alt="pir" width={600} height="auto" /></p>

| 引脚 | 信号名称 | 类型 | 功能描述 | 备注 |
|-----|------------|------|----------------------|-------|
| 1 | MIC_VDD | Power | 麦克风电源 | 3.3V 供电 |
| 2 | MIC_VDD | Power | 麦克风电源 | 双引脚以增强供电稳定性 |
| 3 | GND | GND | 电源回流地 | 电源地 |
| 4 | MIC_CLK | Out | 全局时钟信号 | 核心信号，2–4 MHz |
| 5 | GND | GND | 时钟屏蔽地 | 时钟专用地 |
| 6 | MIC_D1 | In | 数据线 1 | CH1 麦克风 |
| 7 | GND | GND | D1 隔离地 | |
| 8 | MIC_D2 | In | 数据线 2 | CH2 麦克风 |
| 9 | GND | GND | D2 隔离地 | |
| 10 | MIC_D3 | In | 数据线 3 | CH3 麦克风 |
| 11 | GND | GND | D3 隔离地 | |
| 12 | MIC_D4 | In | 数据线 4 | CH4 麦克风 |
| 13 | GND | GND | D4 隔离地 | |
| 14 | MIC_D5 | In | 数据线 5 | CH5 麦克风 |
| 15 | GND | GND | D5 隔离地 | |
| 16 | MIC_D6 | In | 数据线 6 | CH6 麦克风 |
| 17 | GND | GND | D6 隔离地 | |
| 18 | MIC_D7 | In | 数据线 7 | CH7 麦克风 |
| 19 | GND | GND | D7 隔离地 | |
| 20 | MIC_D8 | In | 数据线 8 | CH8 麦克风 |
| 21 | GND | GND | D8 隔离地 | |
| 22 | GPIO_1 | I/O | 通用输入/输出 | 扩展功能 |
| 23 | GPIO_2 | I/O | 通用输入/输出 | 扩展功能 |
| 24 | GND | GND | GPIO 屏蔽地 | 吸收 GPIO 噪声 |

## 入门指南

:::note
为确保最佳语音拾取性能以及音频算法的正常运行，请确保设备背面上的麦克风端口（Mic Inlet / Sound Hole）朝向声源。麦克风端口位于印有 Seeed Studio 标志的一侧。 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/array_mic_inlet.jpg" alt="pir" width={800} height="auto" /></p>
:::

### 硬件准备 

- USB Type-c 线缆 
- 主机电脑或 Raspberry Pi 


### 烧录 I2S 固件 

要将 reSpeaker Flex 与 XIAO ESP32S3 搭配使用，请确保 reSpeaker Flex 固件为 `I2S` 版本。请查看 Firmware Flash 以烧录最新的 `I2S` 固件。请访问此[章节](https://wiki.seeedstudio.com/cn/respeaker_flex_introduction/#update-firmware)


:::note
通常情况下，搭配 XIAO ESP32S3 的 reSpeaker Flex 出厂时已预装配置为 I2S 版本的固件。
:::

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
    <strong>下载 Arduino IDE</strong>
  </a>
</div>

<br />

#### 安装 Arduino-ESP32

要通过开发板管理器开始安装过程，请按照以下步骤操作：

- 安装当前上游 Arduino IDE 1.8 或更高版本。当前版本可在 [arduino.cc](https://www.arduino.cc/en/Main/Software) 网站获取。

- 启动 Arduino 并打开 `Settings` 窗口。

- 在 Additional Board Manager URLs 字段中输入上述其中一个发布链接。你可以添加多个 URL，用逗号分隔。

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- 从侧边栏打开 `Boards Manager`，搜索 `ESP32` 并点击 `INSTALL`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- 重启 Arduino IDE。

### 支持库 

:::note
请安装 [Arduino Audio Tools library](https://github.com/pschatzmann/arduino-audio-tools) 以运行提供的示例。
:::

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


