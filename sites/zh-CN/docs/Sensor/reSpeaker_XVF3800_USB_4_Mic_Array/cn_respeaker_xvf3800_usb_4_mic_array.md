---
description: 开始使用 ReSpeaker XVF3800 USB 4-Mic Array——一款通过 USB 或 I2C 提供语音采集和跨平台支持的高性能语音接口模块。
title: reSpeaker XVF3800 USB Mic Array 入门指南
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array.webp
slug: /respeaker_xvf3800_introduction
sku: 101991441,114993701
last_update:
  date: 11/10/2025
  author: Kasun Thushara
createdAt: '2025-08-20'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/
---

# ReSpeaker XVF3800 入门指南

## 概述

ReSpeaker XVF3800 USB 4-Mic Array 是一款搭载 XMOS XVF3800 的专业级 4 麦克风环形阵列，具备 AEC、AGC、DoA、波束成形、VAD、噪声抑制、去混响、360° 语音采集（最远 5m）以及双工作模式，可用于高级语音应用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 特性

- **芯片升级** ：从 XVF3000 升级到 XVF3800

- **四麦克风阵列** ：4 个高性能麦克风组成的环形阵列，可实现 360° 远场语音采集，距离可达 5 米

- **高级音频处理** ：由 XVF3800 提供算力，支持 AEC、多波束成形、去混响、DoA 检测、动态噪声抑制、60dB AGC 范围

- **唯一设备序列号** ：内置 SN，支持多设备部署和高级设备管理

- **双工作模式** ：USB 即插即用模式可快速连接 PC，INT-Device（I2S）模式可集成到嵌入式系统中——可通过 USB 或 I2C 命令配置，并通过切换固件实现

- **开源兼容性** ：可作为 USB 主机（Windows、macOS、Raspberry Pi OS）和 I2S 主机（XIAO 系列、ESP32、Arduino）的音频前端。

- **可视化反馈** ：可编程 RGB LED 和状态指示灯用于显示设备状态和语音活动

- **音频质量相当或更好** ：与上一代产品相比

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/no-xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### 主要组件

| **组件 / 特性**             | **描述**                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **主音频处理器**              | **XMOS XVF3800**，负责包括 AEC、波束成形、噪声抑制等在内的音频处理。                                  |
| **麦克风阵列**                | 环形排布的 **四路 PDM MEMS 麦克风**，支持 **360° 远场语音采集（5m）**。                             |
| **音频编解码器**              | **TLV320AIC3104**，负责音频转换和输出。                                                              |
| **RGB LED**                   | **12 颗 WS2812** 可单独寻址的 RGB LED，用于可视化反馈（如状态、语音活动）。                          |
| **静音按键**                  | 按下可 **静音/取消静音** 麦克风输入。                                                                |
| **静音指示 LED**              | 点亮（通常为红色）表示音频已被静音。                                                                 |
| **复位按键**                  | 为板卡/系统提供硬件复位。                                                                           |
| **USB Type-C 接口**           | 用于 **供电和数据传输**（符合 USB Audio Class 2.0）。                                               |
| **3.5mm AUX 耳机插孔**        | 为耳机或有源音箱提供音频输出。                                                                      |
| **扬声器连接器**              | **JST 扬声器接口**，支持 **5W 功放扬声器**。                                                        |
| **调试焊盘**                  | 为 **XTAG4** 或其他编程器提供调试访问。                                                              |
| **I2C 与 I2S 排针**           | 暴露的排针用于与外部设备进行 **I2C 和 I2S 通信**。                                                   |
| **未使用 IO 焊盘（XIAO）**    | 连接到 XIAO 模块的额外 I/O 焊盘。                                                                   |
| **I2S 与 I2C 通信**           | 通过这些协议支持与 Raspberry Pi、PC 等外部主机连接。                                                |
| **USB 与 INT-Device 模式**    | 双模式工作：即插即用 USB 模式或通过 I2S 的内部 INT 设备模式。                                       |
| **唯一序列号**                | 内置 **设备 SN**，用于设备识别和多设备管理。                                                         |
| **开源兼容性**                | 可与 **Arduino、Raspberry Pi、PC/Mac** 协同工作，并兼容 **XIAO 系列**。                              |
| **高级音频特性**              | AEC、波束成形、去混响、**DoA 检测**、基于 DNN 的噪声抑制、60dB AGC。                                |
| **可视化反馈**                | 通过 **RGB LED 灯效** 和 **状态指示灯** 显示设备状态和音频活动。                                    |
| **音频质量**                  | 与 **基于 XVF3000 的上一代设计** 相当或更佳。                                                        |

:::note
ReSpeaker XVF3800 提供两个版本——一个不带 XIAO，另一个板载 XIAO ESP32S3。不带 XIAO 的版本使用默认 USB 固件工作。若要使用集成 XIAO 的版本，必须烧录为 **INT-Device（I2S）模式** 构建的固件。有关详细的设置说明，请参考[官方 wiki 指南](/cn/respeaker_xvf3800_xiao_getting_started)。
:::

### XIAO ESP32S3 支持

- 立体声 I2S 输入/输出，支持多种输出选项；I2C 接口用于配置和管理 XVF3800 参数。
- 通过 IO 引脚复位 XIAO
- 接口与焊盘

### 引脚分布

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/gpio_sk.png" alt="pir" width={600} height="auto" /></p>

### GPIO 概览

reSpeaker XVF3800 暴露了 3 个输入引脚（GPI）和 5 个输出引脚（GPO）用于外部控制。你可以使用它们读取按键状态，或控制静音 LED、功放或其他 LED 等硬件。

| **引脚名称** | **方向**     | **功能**                                           |
|--------------|---------------|----------------------------------------------------|
| X1D09        | 输入 (RO)     | 静音按键状态（释放时为高电平）                     |
| X1D13        | 输入 (RO)     | 悬空                                               |
| X1D34        | 输入 (RO)     | 悬空                                               |
| X0D11        | 输出 (RW)     | 悬空                                               |
| X0D30        | 输出 (RW)     | 静音 LED + 麦克风静音控制（高电平 = 静音）         |
| X0D31        | 输出 (RW)     | 功放使能（低电平 = 使能）                         |
| X0D33        | 输出 (RW)     | WS2812 LED 供电控制（高电平 = 打开）              |
| X0D39        | 输出 (RW)     | 悬空                                               |

## 入门指南

### 硬件准备

- USB Type-C 线缆  
- 主机电脑或 Raspberry Pi

### 软件准备

### 开箱即用

:::note

为确保最佳的语音拾取性能以及音频算法的正常运行，请确保设备背面上的麦克风端口（Mic Inlet / Sound Hole）朝向声源。麦克风端口位于印有 Seeed Studio 标志的一侧。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mic-outlet.png" alt="pir" width={800} height="auto"/></p>
:::

#### DOA（到达方向）

你可以体验 LED 阵列跟随语音入射方向变化的效果。

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/nYxsTq_2bw4"
          title="ReSpeaker XVF3800 Plug & Play: Boot Light Show and DOA Demo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

#### 静音按键

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.jpg" alt="pir" width={600} height="auto"/></p>

ReSpeaker 上的 **静音按键（Mute button）** 用于临时 **禁用麦克风阵列的语音采集**。
按下静音按键会发生什么？

- **麦克风被静音** —— 外部声音将不再被采集或处理。
- **红色 LED 会点亮**，表示 **静音模式已激活**。
- 这意味着 ReSpeaker 将 **不会向你的电脑或主机设备发送任何音频输入**。

**使用 Audacity 自行体验**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.gif" alt="pir" width={600} height="auto"/></p>

#### 复位按键

复位（RST）按键提供对 XVF3800 的硬件复位——按下时会重新启动芯片，并从最初状态重新初始化系统，就像执行了一次完整的断电重启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/reset.gif" alt="pir" width={600} height="auto"/></p>

#### 扬声器连接

你可以根据自己的音频输出偏好，通过 3.5mm AUX 耳机插孔或板载 JST 扬声器接口来连接扬声器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/audio.gif" alt="pir" width={600} height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/speaker.jpg" alt="pir" width={600} height="auto"/></p>

#### 安全模式

安全模式是 ReSpeaker XVF3800 上的一种特殊恢复模式，它允许你通过 USB DFU 或 I2C 为设备（如 Raspberry Pi 和 ESP32）烧录固件。如果你之前已经烧录了 I2S 固件并希望切换回 USB 固件，可以进入安全模式，然后使用 USB DFU 重新烧录 USB 固件。

:::note
ReSpeaker XVF3800 上的每种固件类型支持不同的更新方式：

- **USB 固件**仅支持 **USB DFU**，这意味着你可以通过 USB 连接来更新设备。但是，它**不支持 I2C DFU**。

- **I2S 固件**则相反——它支持 **I2C DFU**，允许通过 I2C 接口进行固件更新，但**不支持 USB DFU**。

- 存储在 Factory 分区中的 **安全模式固件（Safe Mode firmware）**是最灵活的。它同时支持 **USB DFU 和 I2C DFU**。

:::

**何时使用安全模式（Safe Mode）**

- 你的固件工作异常（例如 USB 无法被识别、LED 未按预期点亮）。
- 你需要重新烧录新固件，但当前固件没有响应。
- 你不小心烧录了错误的内容，需要恢复。

**如何进入安全模式（Safe Mode）**

- 完全关闭设备电源。
- 按住 Mute 按钮不放。
- 在按住 Mute 按钮的同时，重新接通电源。
- 红色 LED 会开始闪烁——这表明设备已进入安全模式。
- 此时设备运行的是存储在 Factory 分区中的安全模式固件。

### 更新固件

在官方 GitHub 仓库中提供了三个固件版本。你可以根据应用需求选择并烧录合适的固件。更多详情和下载，请参考 [Github 链接](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)

:::note
**不要**使用“另存为（save as）”从 GitHub 下载固件文件，否则文件会损坏。请克隆仓库，或使用“Download as ZIP”将整个仓库（及其中所有文件）作为 ZIP 文件下载。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB" label="USB">

### USB 固件

USB 固件面向 Windows、Linux 和 macOS 等主机系统。官方 USB 固件更新日志将 v2.1.0 标记为当前版本，而当前固件目录中包含以下 v2.1.0 镜像：

| 固件镜像 | 仓库标注的 USB 配置文件 |
| --- | --- |
| `respeaker_xvf3800_usb_dfu_firmware_v2.1.0.bin` | 标准 v2.1.0 USB 镜像。其文件名未标明采样率或通道数。 |
| `respeaker_xvf3800_usb_dfu_firmware_v2.1.0_16k6ch.bin` | 16 kHz、6 通道 USB 镜像。 |
| `respeaker_xvf3800_usb_dfu_firmware_v2.1.0_48k2ch.bin` | 48 kHz、2 通道 USB 镜像。 |

选择与应用需求相匹配的配置文件所对应的镜像。对于 48 kHz、双通道 USB 采集，请使用带有 `_48k2ch` 的那个镜像；不要从通用的 v2.1.0 文件名推断其支持 48 kHz。

固件目录和更新日志并未发布这些二进制文件的 USB 音频类描述符转储。在烧录之后，请在配置录音应用之前，先在主机上验证其报告的格式。在没有设备描述符证据的情况下，不要声称 USB 采样位宽或任何额外的采样率 / 通道组合。
</TabItem>

 <TabItem value="I2S" label="I2S">

I2S 固件适用于设备连接到 **XIAO ESP32S3** 等微控制器主机的场景。在这种配置下，语音数据通过 I2S 协议传输。

固件文件 **respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin** 可在[此处](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s)获取。该固件支持 **2 通道**音频，位深为 **32 位**。

| 固件 | 通道数 | 说明 |
|---------|----------|-------|
| respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin | 2 | 处理后的 2 通道输出 <br /> 通道 0：Conference（会议） <br /> 通道 1：ASR |

</TabItem>

<TabItem value="HA" label="HA">

Home Assistant 固件是另一种基于 I2S 的固件，专门为与 Home Assistant 集成而设计。该优化固件使用 2 通道音频和 48 kHz 采样率，在 Home Assistant 环境中提供更好的兼容性和性能。
你可以从[这里](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s)查看该固件

| 固件 | 通道数 | 说明 |
|---------|----------|-------|
| respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.x_48k.bin | 2 | 处理后的 2 通道输出 <br /> 通道 0：ASR <br /> 通道 1：唤醒词 |

</TabItem>
</Tabs>

通过 USB 线将 reSpeaker XVF3800 连接到电脑。注意，你需要使用 XMOS 的 USB-C 接口（靠近 3.5mm 插孔的那个）来烧录 XMOS 固件。

#### 安装 DFU Util

[`dfu-util`](http://dfu-util.sourceforge.net/) 是一个通过 USB 进行设备固件升级（Device Firmware Upgrade）的命令行工具。

<Tabs>
<TabItem value="windows" label="Windows">

- 下载 `dfu-util-0.11-binaries.tar.xz` 并解压，例如解压到 `D:\dfu-util-0.11-binaries\win64\`  
  [下载链接](http://dfu-util.sourceforge.net/)

- 将 `dfu-util.exe` 的路径添加到系统的 `Path` 变量中：  
  `My Computer > Properties > Advanced > Environment Variables > Path`

- 打开 **命令提示符（Command Prompt）**（`cmd`）并验证安装：

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image.png" alt="pir" width={600} height="auto"/></p>

- 连接 ReSpeaker XVF3800 并检查设备是否被检测到：

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> 如果你看到：  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> 请继续执行下面的驱动安装步骤。

- 安装 [Zadig](https://zadig.akeo.ie/)  
  - 打开 Zadig → `Options > List All Devices`  
  - 选择 `reSpeaker 3800` 或 `reSpeaker XVF3800 4-Mic Array`  
  - 安装 **WinUSB** 驱动  
  - 重新上电设备  
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

#### 烧录固件

从 GitHub 在此处下载完整固件仓库[`XMOS XVF 3800`](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)

- 运行以下命令来烧录固件

```bash

dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- 在 Linux 上，请使用 sudo 运行

```bash
sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- `-R` 选项会在烧录完成后自动重启开发板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image3.png" alt="pir" width={600} height="auto"/></p>

- 再次使用 `dfu-util -l` 命令检查固件版本，以确保新固件已成功烧录

## 录音与回放

<Tabs>
<TabItem value="windows" label="Windows">

### 配置 Audacity（Windows）

1. 打开 **Audacity**
2. 进入 **Audio Setup > Audio Settings**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw1.png" alt="pir" width={600} height="auto"/></p>

3. 设置如下：
   - **Host**：`Windows WASAPI`
   - **Recording Device**：`reSpeaker 3800`
   - **Channels**：`2 (Stereo)`
   - **Sample Rate**：`16000 Hz`（用于 **Project** 和 **Default Sample Rate**）
   - **Sample Format**：`24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw2.png" alt="pir" width={600} height="auto"/></p>

1. 点击 **OK**
2. 一切就绪——开始录音吧！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### 配置 Audacity（macOS）

1. 打开 **Audacity**
2. 进入 **Audio Setup**，并将 **Recording Device** 选择为 **reSpeaker 3800**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. 进入 **Audio Setting** 并进行如下设置：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac3.png" alt="pir" width={600} height="auto"/></p>

- **Recording Device**：`reSpeaker 3800`
- **Channels**：`2 (Stereo)`
- **Sample Rate**：`16000 Hz`（用于 **Project** 和 **Default Sample Rate**）
- **Sample Format**：`24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. 点击 **OK**
5. 准备开始录音！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac5.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### 在 Raspberry Pi 上录音（命令行）

1. **查找声卡编号**：

```bash
arecord -l
```

示例输出：

```
**** List of CAPTURE Hardware Devices ****
card 4: Array [reSpeaker XVF3800 4-Mic Array], device 0: USB Audio [USB Audio]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

 在本例中，**声卡编号为 4**

---

2. **录制音频（5 秒）**：

```bash
arecord -D plughw:4,0 -c 2 -r 16000 -f S16_LE -d 5 output.wav
```

 将 `4` 替换为你实际的声卡编号

---

3. **在 ALSA 中调整 ReSpeaker XVF3800 的音量**

```bash
alsamixer
```

在 alsamixer 中，使用左右方向键切换到正确的声卡设备。使用向上方向键增加音量。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alsa.png" alt="pir" width={600} height="auto"/></p>

4. **回放**：

```bash
aplay -D plughw:4,0 output.wav
```

### 在 Raspberry Pi 上录音（Audacity）

1. **安装 Pi-Apps（如果尚未安装）**

在 Raspberry Pi 上打开终端。运行以下命令安装 Pi-Apps

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
  - 选择正确的 Recording Device（例如 reSpeaker XVF3800）。
  - 选择合适的 Playback Device（例如 reSpeaker XVF3800）。
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

[**Python 控制目录**](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/python_control)

使用提供的 Python 脚本，你可以：

- 配置内置音频算法参数
- 获取 DoA（声源到达方向）数据
- 获取 VAD（语音活动检测）数据
- 控制板载 LED
- 控制语音处理流水线
- 直接与 XMOS 设备通信

**系统要求**

使用 Python 控制接口需要以下依赖：

- Python 3.6 或更高版本
- `pyusb` Python 库
- `libusb` 系统库

### 安装与依赖

使用以下命令安装所需的 Python 依赖：

```bash
pip install pyusb
```

根据你的操作系统，你可能还需要单独安装 `libusb` 软件包。

### 用法

**基本语法**

```bash
python xvf_host.py [options] command [value(s)...]
```

**命令选项**

| 选项           | 描述                                                   |
| -------------- | ----------------------------------------------------- |
| `-l`, `--list` | 列出所有支持的命令及其详细信息                        |
| `--vid`        | 设置 USB 供应商 ID（默认：`0x2886`）                  |
| `--pid`        | 设置 USB 产品 ID（默认：`0x001A`）                    |
| `--values`     | 为写入命令提供数值（可选）                            |

### 使用示例

**列出可用命令**

显示所有支持的固件命令。

```bash
python xvf_host.py --list
```

**读取固件版本**

获取当前在设备上运行的固件版本。

```bash
python xvf_host.py VERSION
```

**示例输出**

```text
VERSION: [2, 0, 7]
```

**读取声源到达方向（DOA）**

获取检测到的声源方向。

```bash
python xvf_host.py DOA_VALUE
```

**示例输出**

```text
DOA_VALUE: [135]
```

**设置 LED 颜色**

使用十六进制 RGB 值配置 LED 颜色。

```bash
python xvf_host.py LED_COLOR --values 0xFF0000
```

**设置 LED 亮度**

调整 LED 亮度百分比。

```bash
python xvf_host.py LED_BRIGHTNESS --values 50
```

**读取麦克风阵列几何结构**

获取声学处理算法使用的麦克风坐标。

```bash
python xvf_host.py AEC_MIC_ARRAY_GEO
```

**示例输出**

```text
AEC_MIC_ARRAY_GEO:
[0.033, -0.033, 0.000,
 0.033,  0.033, 0.000,
-0.033,  0.033, 0.000,
-0.033, -0.033, 0.000]
```

## reSpeaker XVF_HOST 应用程序

`xvf_host` 应用程序是一个主机端工具，用于通过 USB 与 reSpeaker XVF3800 通信。它可用于读取或修改 XVF3800 控制参数、检查固件版本、读取 GPIO 值，以及访问诸如声源到达方向（DoA）等功能。


主机控制应用程序可以在[这里](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/host_control)找到

### 主机应用程序文件

主机应用程序位于仓库的 `host_control` 目录下。

典型的平台目录包括：

```text
host_control/
├── linux_x86_64/
├── mac_arm64/
├── win32/
└── ...
```

每个平台目录都包含主机应用程序以及该应用程序所需的库。

例如：

**Windows**

```text
host_control/win32/
├── command_map.dll
├── device_usb.dll
└── xvf_host.exe
```

**Linux**

```text
host_control/linux_x86_64/
├── libcommand_map.so
├── libdevice_usb.so
└── xvf_host
```

**macOS**

```text
host_control/mac_arm64/
├── libcommand_map.dylib
├── libdevice_usb.dylib
├── libusb-1.0.0.dylib
└── xvf_host
```

> **重要：** 当将主机应用程序复制到另一台计算机时，请保持完整的平台目录在一起。可执行文件依赖于位于同一目录中的库。

<Tabs>
<TabItem value="windows" label="Windows">

**1. 连接 XVF3800**

通过 USB 将 reSpeaker XVF3800 连接到 Windows 电脑。

**2. 打开命令提示符或 PowerShell**

进入 Windows 主机应用程序目录：

```powershell
cd C:\path\to\reSpeaker_XVF3800_USB_4MIC_ARRAY\host_control\win32
```

**3. 检查主机应用程序**

运行：

```powershell
xvf_host.exe --help
```

如果应用程序工作正常，将会显示帮助信息。

要显示所有可用的控制命令：

```powershell
xvf_host.exe --list-commands
```

`--list-commands` 选项会显示主机应用程序支持的命令。

**4. 检查 XVF3800 连接**

运行：

```powershell
xvf_host.exe VERSION
```

成功连接后，输出应类似于：

```text
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 10
```

固件版本取决于安装在 XVF3800 上的固件。

`VERSION` 命令是验证 `xvf_host.exe` 能否与 XVF3800 通信的一种简单方式。

**5. 读取 GPI 值**

```powershell
xvf_host.exe GPI_READ_VALUES
```

**6. 读取 GPO 值**

```powershell
xvf_host.exe GPO_READ_VALUES
```

**7. 读取声源到达方向（DoA）**

```powershell
xvf_host.exe AEC_AZIMUTH_VALUES
```

返回的方位角值可用于确定检测到的声源方向。

**8. 列出可用命令**

要查看所有可用的 XVF3800 主机命令：

```powershell
xvf_host.exe --list-commands
```

然后你可以使用以下格式调用任意受支持的命令：

```powershell
xvf_host.exe <COMMAND>
```

例如：

```powershell
xvf_host.exe VERSION
```

</TabItem>

<TabItem value="linux" label="Linux">

**1. 连接 XVF3800**

通过 USB 将 reSpeaker XVF3800 连接到 Linux 电脑。

**2. 进入 Linux 主机应用程序目录**

对于 x86-64 Linux 系统：

```bash
cd ~/reSpeaker_XVF3800_USB_4MIC_ARRAY/host_control/linux_x86_64
```

**3. 赋予应用程序执行权限**

运行：

```bash
chmod +x xvf_host
```

**4. 检查主机应用程序**

运行：

```bash
./xvf_host --help
```

要显示所有可用的控制命令：

```bash
./xvf_host --list-commands
```

**5. 检查 XVF3800 连接**

运行：

```bash
./xvf_host VERSION
```

成功连接后，输出应类似于：

```text
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 10
```

固件版本取决于安装在 XVF3800 上的固件。

`VERSION` 命令是验证 `xvf_host` 能否与 XVF3800 通信的一种简单方式。

**6. 如果 USB 权限被拒绝**

如果由于 Linux USB 权限导致应用程序无法访问 USB 设备，你可以使用以下方式测试应用程序：

```bash
sudo ./xvf_host VERSION
```

如果命令在使用 `sudo` 时可以工作，而不使用时不行，那么问题很可能与 Linux 的 USB 设备权限或 udev 规则有关。

**7. 读取 GPI 值**

```bash
./xvf_host GPI_READ_VALUES
```

**8. 读取 GPO 值**

```bash
./xvf_host GPO_READ_VALUES
```

**9. 读取声源到达方向（DoA）**

```bash
./xvf_host AEC_AZIMUTH_VALUES
```

**10. 列出可用命令**

```bash
./xvf_host --list-commands
```

然后你可以使用以下方式执行受支持的命令：

```bash
./xvf_host <COMMAND>
```

例如：

```bash
./xvf_host VERSION
```

</TabItem>

<TabItem value="macos" label="macOS">

**1. 连接 XVF3800**

使用 USB 将 reSpeaker XVF3800 连接到 Mac。

**2. 进入 macOS Host 应用程序目录**

对于 Apple Silicon Mac：

```bash
cd ~/reSpeaker_XVF3800_USB_4MIC_ARRAY/host_control/mac_arm64
```

**3. 赋予应用程序执行权限**

运行：

```bash
chmod +x xvf_host
```

**4. 检查 Host 应用程序**

运行：

```bash
./xvf_host --help
```

要显示所有可用的控制命令：

```bash
./xvf_host --list-commands
```

**5. 检查 XVF3800 连接**

运行：

```bash
./xvf_host VERSION
```

成功连接后应输出类似如下的信息：

```text
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 10
```

固件版本取决于安装在 XVF3800 上的固件。

**6. 读取 GPI 值**

```bash
./xvf_host GPI_READ_VALUES
```

**7. 读取 GPO 值**

```bash
./xvf_host GPO_READ_VALUES
```

**8. 读取声源方向 (DoA)**

```bash
./xvf_host AEC_AZIMUTH_VALUES
```

**9. 列出可用命令**

```bash
./xvf_host --list-commands
```

</TabItem>
</Tabs>

### 常用命令

以下命令对于基本的 XVF3800 测试非常有用：

| Command              | Description                        |
| -------------------- | ---------------------------------- |
| `--help`             | 显示 Host 应用程序帮助            |
| `--list-commands`    | 显示可用的 XVF3800 命令           |
| `VERSION`            | 读取 XVF3800 固件版本             |
| `GPI_READ_VALUES`    | 读取 GPI 值                        |
| `GPO_READ_VALUES`    | 读取 GPO 值                        |
| `AEC_AZIMUTH_VALUES` | 读取当前 DoA/方位角值             |


更多命令可以在[这里](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/host_control)找到


## reSpeaker 控制台应用程序

我们准备了一个桌面应用程序，用于控制和配置你的 reSpeaker 设备。

通过这个应用程序，你可以：

- 连接到你的 reSpeaker 设备
- 配置音频设置（噪声抑制、增益、AEC 和通道配置）
- 监控声源方向 (DoA) 和语音活动检测 (VAD)
- 控制 LED 效果
- 调整设备参数

### 安装应用程序

从以下地址下载最新版本：

https://github.com/respeaker/respeaker-console/releases

| Platform | Architecture  | Package Type         |
| -------- | ------------- | -------------------- |
| Windows  | x64           | `.msi` / `.exe`      |
| macOS    | Apple Silicon | `.dmg` (aarch64)     |
| macOS    | Intel         | `.dmg` (x86_64)      |
| Linux    | x64           | `.deb` / `.AppImage` |

### Windows：USB 驱动设置

首次使用该应用程序前，请使用 **Zadig** 安装 **WinUSB** 驱动。

**步骤 1：** 下载并运行 **Zadig**。

**步骤 2：** 选择 **Options → List All Devices**。

**步骤 3：** 在设备列表中选择 **reSpeaker 3800** 或 **reSpeaker XVF3800 4-Mic Array**。

**步骤 4：** 选择 **WinUSB** 作为驱动。

**步骤 5：** 点击 **Install Driver**。

**步骤 6：** 拔下并重新连接设备。

**步骤 7：** 运行以下命令以验证设备是否被检测到：

```bash
dfu-util -l
```

:::note
`dfu-util.exe` 已与应用程序打包在一起，因此无需单独安装。
:::

### Linux：安装 dfu-util 并配置 USB 权限

安装 **dfu-util**：

```bash
sudo apt install dfu-util
```

USB 访问还需要一个 **udev** 规则。

创建以下文件：

```text
/etc/udev/rules.d/99-respeaker.rules
```

添加以下内容：

```text
SUBSYSTEM=="usb", ATTRS\{idVendor\}=="2886", MODE="0666", GROUP="plugdev"
```

重新加载 udev 规则：

```bash
sudo udevadm control --reload-rules && sudo udevadm trigger
```

最后，断开并重新连接你的设备。

### macOS：安装 dfu-util

在使用固件更新功能之前，请先安装 **dfu-util**。

```bash
brew install dfu-util
```

### 使用应用程序

安装应用程序后，启动它以访问 **reSpeaker Console**。

接下来我们依次介绍侧边栏中的各个部分。

#### 设备连接

首先，连接你的 reSpeaker 设备。

1. 点击 **Scan Devices**。
2. 应用程序会列出所有检测到的设备。
3. 选择你的设备。
4. 点击 **Connect** 建立连接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/scan.jpg" alt="Device Connection" width={800} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/connect.jpg" alt="Device Connection" width={800} height="auto"/></p>

#### Audio

**Audio** 选项卡允许你配置和增强音频处理流程。

在这里你可以配置：

- 非平稳噪声抑制
- 平稳噪声抑制
- 自动增益控制 (AGC)
- 声学回声消除 (AEC)
- 输出通道配置
- 左右声道映射

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/audio.jpg" alt="Audio Tab" width={800} height="auto"/></p>

#### Monitor

**Monitor** 选项卡提供麦克风处理的实时可视化。

你可以监控：

- 声源方向 (DoA)
- 语音活动检测 (VAD)
- 波束能量水平

这些指示器有助于你确认设备是否正确检测到语音。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/monitor.jpg" alt="Monitor Tab" width={800} height="auto"/></p>

#### LEDs

**LEDs** 选项卡允许你自定义 LED 灯环。

可用功能包括：

- 呼吸效果
- 彩虹效果
- 环形效果
- 亮度调节
- 动画速度控制
- RGB 颜色选择

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/led.jpg" alt="LEDs Tab" width={800} height="auto"/></p>

#### Parameters

**Parameters** 选项卡提供对所有可配置设备参数的访问。

这些设置按以下类别进行组织，例如：

- Audio
- 声学回声消除 (AEC)
- 后处理
- LEDs / GPIO
- 系统

通过此界面，你可以直接更新参数值。

每个参数都包含说明，帮助你了解其用途和推荐取值范围。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/parameters.jpg" alt="Parameters Tab" width={800} height="auto"/></p>

## 故障排查

### 扬声器播放声音输出不够大？

如果 **ReSpeaker XVF3800** 在 Linux 上的扬声器输出音量太小，你可能需要调整 XVF3800 声卡的 **ALSA 混音器级别**。按照以下步骤提高输出音量。

**步骤 1：打开 ALSA Mixer**

1. 打开终端。
2. 输入以下命令并按下 **Enter**：

   ```bash
   alsamixer
   ```

**步骤 2：选择 XVF3800 声卡**

1. 按 **F6** 打开声卡选择菜单。
2. 使用 **上下方向键** 高亮选择 **XVF3800** 声卡。
3. 按 **Enter** 确认选择。

**步骤 3：调整 PCM-1 音量**

1. 使用 **左右方向键** 导航到 **PCM-1**。
2. 使用 **上方向键** 将音量级别提高到 **100%**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alexa.png" alt="pir" width={600} height="auto"/></p>

**步骤 4：保存 ALSA 设置**

1. 按 **ESC** 退出 `alsamixer`。
2. 在拔下 XVF3800 之前，运行以下命令以保存你的设置：

```bash
   sudo alsactl store
   ```

**步骤 5：附加选项（使用 PulseAudio）**

如果在调整 ALSA 级别后仍然听不清声音，可以尝试安装 **PulseAudio Volume Control** 以进行更精细的音量调节：

```bash
sudo apt install pavucontrol -y
```

然后你可以打开 **pavucontrol**，在需要时将输出音量提高到 100% 以上。

### 重新安装 USB 驱动后，我的 ReSpeaker 无法录音和播放

在设备管理器中卸载与 ReSpeaker 相关的所有驱动程序。这样可以解决该问题。

### 在刷写固件后，无法在 Windows 中作为声音设备使用？

打开开始菜单并输入 Device manager。找到与 reSpeaker XVF 3800 相关的设备，右键点击它们并选择 Uninstall devices。之后，重启设备（USB 拔插），Windows 会为其重新安装正确的声卡驱动。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker_xvf_3800_dfu.png" alt="pir" width={600} height="auto"/></p>

### 如何在不损坏外壳的情况下打开它？

你可以用指甲轻轻撬起外壳边缘。外壳盖由三个卡扣固定。一旦释放其中一个卡扣，外壳就可以比较容易地打开。请小心操作外壳，以避免损坏卡扣或外壳本体。

### 为什么我的 reSpeaker XVF3800 没有被检测为声音设备？

reSpeaker XVF3800 ESP32 版本默认预装的是 I2S 固件，因此连接到电脑时不会显示为 USB 音频设备。此信息已在我们的 Bazaar 产品页面和官方文档中说明。

如果你想将该设备用作 **USB 音频设备**，需要重新刷写 USB 固件。请按照以下步骤操作：

1. **首先进入安全模式：**
   [安全模式说明](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#safe-mode)

2. **刷写 USB 固件：**
   [固件更新说明](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#update-firmware)

### 为什么在 XVF3800 6 通道固件下有些通道是静音的？

在刷写 6 通道固件后，可能需要通过系统的音频混音器控制来启用原始麦克风通道。

在 Linux 上，首先检查声卡 ID：

```bash
arecord -l
```

例如，如果 XVF3800 显示为 **card 1**，请启用采集通道并设置其音量：

```bash
amixer -c 1 cset numid=8 on,on,on,on,on,on
amixer -c 1 cset numid=10 60,60,60,60,60,60
```

根据需要调整音量值，然后保存设置：

```bash
sudo alsactl store 1
```

应用这些设置后，所有六个通道都应能采集到非零音频信号。

**Windows：** 如果某些通道仍然没有声音，请尝试在 **设备管理器（Device Manager）** 中卸载 XVF3800 设备驱动程序，然后拔下并重新连接设备。这样可以让 Windows 重新配置设备和驱动程序。

## 如何使用 I2C 命令通过 XIAO ESP32S3 控制 reSpeaker XVF3800 USB Mic Array？

我们提供了详细的 I2C 命令列表和代码示例。请参考 [Using I2C Commands to Control reSpeaker XVF3800 USB Mic Array with XIAO ESP32S3](/cn/respeaker_xvf_3800_i2c_list) 章节。

## 资源

- [ReSpeaker XVF3800 2D 文件](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker_xvf3800_2d_mechanical_drawing.pdf)
- [ReSpeaker XVF3800 3D 文件](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/respeaker_mic_array_xvf3800_1_with-xiao-0820.stp)
- [ReSpeaker XVF3800 3D-Enclosure-Up 文件](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/1-up.stp)
- [ReSpeaker XVF3800 3D-Enclosure-Down 文件](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/1-down.stp)

## 参考资料

- [XMOS XVF3800 芯片数据手册](https://www.xmos.com/documentation/XM-014888-PC/html/)

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
