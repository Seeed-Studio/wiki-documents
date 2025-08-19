---
description: 开始使用 ReSpeaker XVF3800 USB 4-Mic Array——一个高性能语音接口模块，具有语音捕获功能，通过 USB 或 I2C 支持跨平台。

title: ReSpeaker XVF3800 USB 麦克风阵列入门指南
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array.webp
slug: /cn/respeaker_xvf3800_introduction
last_update:
  date: 7/15/2025
  author: Kasun Thushara
---

# ReSpeaker XVF3800 入门指南

## 概述

ReSpeaker XVF3800 USB 4-Mic Array 是一个专业的 4 麦克风圆形阵列，搭载 XMOS XVF3800，具有 AEC、AGC、DoA、波束成形、VAD、噪声抑制、去混响、360° 语音捕获（最远 5 米）和双操作模式，适用于高级语音应用。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/intropcb.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- **芯片升级**：从 XVF3000 升级到 XVF3800
  
- **四麦克风阵列**：4 个高性能麦克风呈圆形排列，支持 360° 远场语音捕获，最远距离达 5 米
  
- **先进音频处理**：由 XVF3800 驱动，具有 AEC、多波束成形、去混响、DoA 检测、动态噪声抑制、60dB AGC 范围

- **唯一设备序列号**：内置 SN 支持多设备部署和高级设备管理

- **双操作模式**：USB 即插即用模式可即时连接 PC，INT-Device (I2S) 模式可集成到嵌入式系统——可通过相应切换固件，使用 USB 或 I2C 命令进行配置

- **开源兼容**：适用于 USB 主机（Windows、macOS、Raspberry Pi OS）和 I2S 主机（XIAO 系列、ESP32、Arduino）。

- **视觉反馈**：可编程 RGB LED 和状态指示器显示设备状态和语音活动

- **相等或更好的音频质量**：与之前的型号相比

## 硬件概述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/no-xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### 主要组件

| **组件 / 特性**       | **描述**                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **主音频处理器**      | **XMOS XVF3800**，处理音频处理，包括 AEC、波束成形、噪声抑制等。       |
| **麦克风阵列**          | **四个 PDM MEMS 麦克风**呈圆形排列，支持 **360° 远场语音捕获（5 米）**。 |
| **音频编解码器**               | **TLV320AIC3104**，处理音频转换和输出。                                              |
| **RGB LED**                  | **12 个 WS2812** 可单独寻址的 RGB LED，用于视觉反馈（如状态、语音活动）。 |
| **静音按钮**               | 按下可**静音/取消静音**麦克风输入。                                                       |
| **静音指示 LED**        | 点亮（通常为红色）表示音频已静音。                                               |
| **复位按钮**              | 板子/系统的硬件复位。                                                                 |
| **USB Type-C 端口**           | 用于**电源和数据**（符合 USB Audio Class 2.0）。                                    |
| **3.5mm AUX 耳机插孔**  | 耳机或有源扬声器的音频输出。                                                      |
| **扬声器连接器**         | **JST 扬声器接口**，支持 **5W 放大扬声器**。                                       |
| **调试焊盘**                | **XTAG4** 或其他编程器的调试访问。                                                     |
| **I2C 和 I2S 排针**         | 暴露的排针用于与外部设备进行 **I2C 和 I2S 通信**。                             |
| **未使用的 IO 焊盘（XIAO）**     | 连接到 XIAO 模块的额外 I/O 焊盘。                                                 |
| **I2S 和 I2C 通信**   | 支持使用这些协议连接到外部主机，如 Raspberry Pi、PC 等。             |
| **USB 和 INT-Device 模式**    | 双模式操作：即插即用 USB 或通过 I2S 的内部 INT 设备模式。                          |
| **唯一序列号**      | 内置**设备 SN** 用于识别和多设备管理。                               |
| **开源兼容性** | 适用于 **Arduino、Raspberry Pi、PC/Mac**，并与 **XIAO 系列**兼容。                   |
| **先进音频特性**   | AEC、波束成形、去混响、**DoA 检测**、基于 DNN 的噪声抑制、60dB AGC。         |
| **视觉反馈**           | 设备状态和音频活动通过 **RGB LED 模式**和**状态指示器**显示。            |
| **音频质量**             | 等于或优于**之前基于 XVF3000 的设计**。                                         |

:::note
ReSpeaker XVF3800 提供两种变体——一种不带 XIAO，另一种板载 XIAO ESP32S3。不带 XIAO 的版本使用默认 USB 固件运行。要使用集成 XIAO 的版本，您必须刷入为 **INT-Device (I2S) 模式**构建的固件。详细设置说明请参考[官方 wiki 指南](docs/Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/respeaker_xvf3800_with_xiao_intro.md)。
:::

### XIAO ESP32S3 支持 

-  立体声 I2S 输入/输出，具有多种输出选项；I2C 接口用于配置和管理 XVF3800 参数。
- 通过 IO 引脚复位 XIAO
- 接口和焊盘

### 引脚定义
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

### GPIO 概述

reSpeaker XVF3800 提供了 3 个输入引脚（GPI）和 5 个输出引脚（GPO）用于外部控制。您可以使用这些引脚来读取按钮状态或控制硬件，如静音 LED、放大器或 LED。

| **引脚名称** | **方向** | **功能**                                         |
|--------------|---------------|------------------------------------------------------|
| X1D09        | 输入 (RO)    | 静音按钮状态（释放时为高电平）              |
| X1D13        | 输入 (RO)    | 悬空                                             |
| X1D34        | 输入 (RO)    | 悬空                                             |
| X0D11        | 输出 (RW)   | 悬空                                             |
| X0D30        | 输出 (RW)   | 静音 LED + 麦克风静音控制（高电平 = 静音）            |
| X0D31        | 输出 (RW)   | 放大器使能（低电平 = 使能）                     |
| X0D33        | 输出 (RW)   | WS2812 LED 电源控制（高电平 = 开启）                 |
| X0D39        | 输出 (RW)   | 悬空                                             |


## 快速入门


### 硬件准备

- USB Type-C 数据线  
- 主机电脑或树莓派

### 软件准备 

### 开箱即用

#### DOA（到达方向）

您可以体验 LED 阵列跟随语音来源方向的功能。

<div align="center">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/nYxsTq_2bw4"
          title="ReSpeaker XVF3800 Plug & Play: Boot Light Show and DOA Demo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>


#### 静音按钮

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.jpg" alt="pir" width={600} height="auto"/></p>

您的 ReSpeaker 上的**静音按钮**用于临时**禁用麦克风阵列的语音捕获**。
当您按下静音按钮时会发生什么？

- **麦克风被静音** — 外部语音将不再被捕获或处理。
- **红色 LED 亮起**以指示**静音模式已激活**。
- 这意味着 ReSpeaker 将**不会向您的计算机或主机设备发送任何音频输入**。

**使用 Audacity 亲自试试**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.gif" alt="pir" width={600} height="auto"/></p>

#### 复位按钮

复位（RST）按钮为 XVF3800 提供硬件复位功能——按下时，它会重启芯片并从头开始重新初始化系统，就像完全断电重启一样。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/reset.gif" alt="pir" width={600} height="auto"/></p>

#### 扬声器连接 

这里您可以看到如何使用 3.5mm AUX 耳机插孔或板载 JST 扬声器接口连接扬声器，具体取决于您的音频输出偏好。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/audio.gif" alt="pir" width={600} height="auto"/></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/speaker.jpg" alt="pir" width={600} height="auto"/></p>


#### 安全模式

安全模式是 ReSpeaker XVF3800 上的一种特殊恢复模式，允许您通过 USB DFU 或 I2C 刷写固件——适用于树莓派和 ESP32 等设备。如果您之前刷写了 I2S 固件并想切换回 USB 固件，您可以进入安全模式并使用 USB DFU 重新刷写 USB 固件。

:::note
ReSpeaker XVF3800 上的每种固件类型支持不同的更新方法：
- **USB 固件**仅支持 **USB DFU**，这意味着您可以使用 USB 连接更新设备。但是，它**不支持 I2C DFU**。
  
- **I2S 固件**则相反——它支持 **I2C DFU**，允许通过 I2C 接口进行固件更新，但它**不支持 USB DFU**。
  
- 存储在出厂分区中的**安全模式固件**是最灵活的。它**同时支持 USB DFU 和 I2C DFU**。
:::

**何时使用安全模式**

- 您的固件工作不正常（例如 USB 未被检测到，LED 未按预期点亮）。
- 您需要重新刷写新固件，但当前固件无响应。
- 您意外刷写了错误的内容并想要恢复。

**如何进入安全模式**
- 完全关闭设备电源。
- 按住静音按钮。
- 在按住静音按钮的同时，重新连接电源。
- 红色 LED 将开始闪烁——这确认设备现在处于安全模式。
- 现在设备运行存储在出厂分区中的安全模式固件。


### 更新固件 

通过 USB 数据线将 reSpeaker XVF3800 连接到您的 PC。请注意，您需要使用 XMOS USB-C 端口（靠近 3.5mm 插孔端口）来刷写 XMOS 的固件。

#### 安装 DFU Util

[`dfu-util`](http://dfu-util.sourceforge.net/) 是一个通过 USB 进行设备固件升级的命令行工具。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs> 
<TabItem value="windows" label="Windows">

- 下载 `dfu-util-0.11-binaries.tar.xz` 并解压，例如，`D:\dfu-util-0.11-binaries\win64\`  
  [下载链接](http://dfu-util.sourceforge.net/)

- 将 `dfu-util.exe` 的路径添加到您的系统 `Path` 变量中：  
  `我的电脑 > 属性 > 高级 > 环境变量 > Path`

- 打开**命令提示符**（`cmd`）并验证安装：

```bash
dfu-util -V
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image.png" alt="pir" width={600} height="auto"/></p>


- 连接 ReSpeaker XVF3800 并检查设备检测：

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> 如果您遇到：  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> 请继续执行下面的驱动程序安装步骤。

- 安装 [Zadig](https://zadig.akeo.ie/)  
  - 打开 Zadig → `Options > List All Devices`  
  - 选择 `reSpeaker 3800` 或 `reSpeaker XVF3800 4-Mic Array`  
  - 安装 **WinUSB** 驱动程序  
  - 重新给设备上电  
  - 再次运行 `dfu-util -l` 确认检测到设备。

</TabItem>

 <TabItem value="macos" label="macOS">

 - 使用 Homebrew 安装 dfu-util：

```bash
brew install dfu-util
```

- 检查是否检测到设备：

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

- 连接 XVF3800 并检查检测情况：

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

#### 刷写固件

从这里下载固件。[`XMOS XVF 3800`](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)


- 运行以下命令刷写固件
```bash

dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- 在 Linux 上，使用 sudo 运行

```bash
sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- `-R` 选项将在刷写后自动重启开发板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image3.png" alt="pir" width={600} height="auto"/></p>

- 使用 `dfu-util -l` 命令再次检查固件版本，确保新固件已刷写成功


## 录音和播放

<Tabs>
<TabItem value="windows" label="Windows">

### 设置 Audacity (Windows)

1. 打开 **Audacity**
2. 转到 **Audio Setup > Audio Settings**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw1.png" alt="pir" width={600} height="auto"/></p>

3. 设置：
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker 3800`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz`（**Project** 和 **Default Sample Rate** 都设置为此值）
   - **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw2.png" alt="pir" width={600} height="auto"/></p>

1. 点击 **OK**
2.  您已准备就绪 — 开始录音！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### 设置 Audacity (macOS)

1. 打开 **Audacity**
2. 转到 **Audio Setup** 并选择 **Recording Device** 为 **reSpeaker 3800**


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. 转到 **Audio Setting** 设置：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac3.png" alt="pir" width={600} height="auto"/></p>

   - **Recording Device**: `reSpeaker 3800`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz`（**Project** 和 **Default Sample Rate** 都设置为此值）
   - **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. 点击 **OK**
5.  准备录音！

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

 在这种情况下，**声卡编号是 4**

---

2. **录制音频（5 秒）**：

```bash
arecord -D plughw:4,0 -c 2 -r 16000 -f S16_LE -d 5 output.wav
```

 将 `4` 替换为您实际的声卡编号

---

3. **播放**：

```bash
aplay -D plughw:4,0 output.wav
```
### 在 Raspberry Pi 上录音（Audacity）

1. **安装 Pi-Apps（如果尚未安装）**

在您的 Raspberry Pi 上打开终端。运行以下命令安装 Pi-Apps

```bash
wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```
等待安装完成。菜单中将出现新的 Pi-Apps 图标。

2. **通过 Pi-Apps 安装 Audacity**

3. **设置音频输入和输出**

- 点击工具栏中的"Audio Setup"。
- 从下拉菜单中选择"Audio Settings"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-1.PNG" alt="pir" width={600} height="auto"/></p>


- 在音频设置窗口中：
  - 选择正确的录音设备（例如，reSpeaker XVF3800）。
  - 选择合适的播放设备（例如，reSpeaker XVF3800）。
  - 确保主机设置为 ALSA 以在 Raspberry Pi 上获得最佳兼容性。
- 点击确定应用设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **录制和播放音频**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>


</TabItem>
</Tabs>

## 如何控制 reSpeaker XVF3800

reSpeaker XVF3800 配备了控制接口，允许用户配置设备操作、设置或读取参数数据并在设备上保存参数数据。用户可以通过 USB 或 I2C 接口控制设备。提供了一个示例主机应用程序 xvf_host（适用于 Linux、macOS 和 Raspberry Pi OS）或 xvf_host.exe（适用于 Windows），以便轻松连接到 reSpeaker XVF3800 的控制接口。

从[这里](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/host_control)下载

:::note
如果您想了解更多关于通过 xvf_host 进行控制的信息，请阅读这篇[文章](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)。
:::

<Tabs>
<TabItem value="windows" label="Windows">

### Windows 用户

- 确保 ReSpeaker XVF3800 通过 USB 连接
- 将 `xvf_host.exe` 解压到文件夹中，例如：

```text
C:\Tools\xvf_host\
```

---

**验证安装**

```bash
cd C:\Tools\xvf_host
xvf_host.exe --help
```

---

**检查设备连接**

```bash
xvf_host.exe VERSION
```

预期输出：

```
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 2
```

---

**LED 控制**

| 命令 | 示例 | 描述 |
|--------|---------|-------------|
| `led_effect` | `xvf_host.exe led_effect 1` | 0=关闭, 1=呼吸, 2=彩虹, 3=纯色, 4=DoA |
| `led_color` | `xvf_host.exe led_color 0xff8800` | 设置十六进制颜色（橙色） |
| `led_speed` | `xvf_host.exe led_speed 1` | 设置效果速度 |
| `led_brightness` | `xvf_host.exe led_brightness 255` | 设置亮度 |
| `led_gammify` | `xvf_host.exe led_gammify 1` | 启用伽马校正 |
| `led_doa_color` | `xvf_host.exe led_doa_color 0x0000ff 0xff0000` | 设置 DoA 基础/方向颜色 |

🟠 示例（橙色呼吸）：

```bash
xvf_host.exe led_effect 1
xvf_host.exe led_color 0xff8800
xvf_host.exe led_speed 1
xvf_host.exe led_brightness 255
```
**配置**

```bash
xvf_host.exe save_configuration 1
xvf_host.exe clear_configuration 1
```
---

**GPIO 控制**

**读取输入：**

```bash
xvf_host.exe GPI_READ_VALUES
```

输出示例：`GPI_READ_VALUES 1 0 0`

在此示例中，返回 1 0 0 表示引脚 X1D09 为高电平，引脚 X1D13 为低电平，引脚 X1D34 为低电平。


**读取输出：**

```bash
xvf_host.exe GPO_READ_VALUES
```

输出示例：`GPO_READ_VALUES 0 1 1 0 0`

在此示例中，返回 0 0 0 1 0 表示引脚 X0D11 为低电平，引脚 X0D30 为低电平，引脚 X0D31 为高电平，引脚 X0D33 为高电平，引脚 X0D39 为低电平。


**设置输出：**

```bash
xvf_host.exe GPO_WRITE_VALUE 30 1  # 打开静音 LED
xvf_host.exe GPO_WRITE_VALUE 30 0  # 关闭静音 LED
```
**到达方向（DoA）**

- DoA 告诉您有人从哪个方向说话。
- ReSpeaker XVF3800 上的 **LED 环**使用灯光显示方向。
- 您也可以使用 `xvf_host` 工具读取 DoA 值。

检查 DoA 值的命令

```bash
xvf_host.exe AEC_AZIMUTH_VALUES
```
示例输出
```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_AZIMUTH_VALUES 0.91378 (52.36 deg) 0.00000 (0.00 deg) 1.57080 (90.00 deg) 0.91378 (52.36 deg)
```
- **聚焦波束 1**：第一个固定监听方向
- **聚焦波束 2**：第二个固定监听方向
- **自由运行波束**：始终扫描方向
- **自动选择波束**：为最佳音频选择的最终波束（用于 DoA 指示）

**语音指示**

- 语音能量显示语音信号的强度——就像语音音量表。
- 用于检测是否有人在说话以及他们的声音有多大/多近。
- 噪音、回声和距离会影响能量值。

检查语音能量的命令：

  
```bash
xvf_host.exe AEC_SPENERGY_VALUES
```
示例输出

```bash
Device (USB)::device\_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_SPENERGY_VALUES 2080656 0 2083455 2080656
```
- **聚焦波束 1**：第一个波束的能量
- **聚焦波束 2**：第二个波束的能量
- **自由运行波束**：扫描波束的能量
- **自动选择波束**：为最终输出选择的波束的能量

**音频输出通道**

- XVF3800 提供 **2 个音频通道**：
  - **左通道**：干净的后处理音频
  - **右通道**：ASR 波束或回声/参考数据

您可以**重新路由**这些通道以输出不同的源。

示例命令

将左通道设置为放大麦克风 0

```bash
xvf_host.exe AUDIO_MGR_OP_L 3 0
```
将右通道设置为远端（参考）数据

```bash
xvf_host.exe AUDIO_MGR_OP_R 5 0
```
示例输出：

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
```

**调优参数（让声音更好！）**

- 这些设置有助于改善**回声消除**、**噪声抑制**、**增益**等。
- **当默认设置不够好时使用它们。**


常用参数：

| 参数             | 含义                                         |
|-----------------------|-------------------------------------------------|
| **AUDIO_MGR_REF_GAIN**   | 扬声器输入增益（回声信号）             |
| **AUDIO_MGR_MIC_GAIN**   | 麦克风输入增益（麦克风听到的音量） |
| **AUDIO_MGR_SYS_DELAY**  | 麦克风和扬声器信号之间的延迟         |
| **PP_AGCMAXGAIN**        | 最大自动增益控制级别              |
| **AEC_ASROUTGAIN**       | ASR 波束输出增益                      |

如需更深入的文档和高级命令，请访问官方 GitHub 仓库：  
[ReSpeaker XVF3800 主机控制 README](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)

---


</TabItem>

<TabItem value="linux" label="macOS / Linux / Raspberry Pi">

### 适用于 Raspberry Pi

- 通过 USB 或 I2C 连接 XVF3800
- 使 `xvf_host` 可执行：

```bash
cd /path/to/xvf_host
chmod +x xvf_host
```

---

**验证安装**

```bash
./xvf_host --help
./xvf_host VERSION
```

预期输出：

```
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 2
```

**使用 I2C：**

```bash
./xvf_host --use i2c VERSION
```

---

**LED 控制（与 Windows 相同，前缀为 ./）**

```bash
./xvf_host led_effect 1
./xvf_host led_color 0xff8800
./xvf_host led_speed 1
./xvf_host led_brightness 255
```
**配置**

```bash
./xvf_host save_configuration 1
./xvf_host clear_configuration 1
```
---

**GPIO 控制**

```bash
chmod +x ./xvf_host
```

**读取输入：**

```bash
./xvf_host GPI_READ_VALUES
```

输出示例：`GPI_READ_VALUES 1 0 0`

在此示例中，返回值 1 0 0 表示引脚 X1D09 为高电平，引脚 X1D13 为低电平，引脚 X1D34 为低电平。


**读取输出：**

```bash
./xvf_host GPO_READ_VALUES
```
输出示例：`GPO_READ_VALUES 0 1 1 0 0`

在此示例中，返回值 0 0 0 1 0 表示引脚 X0D11 为低电平，引脚 X0D30 为低电平，引脚 X0D31 为高电平，引脚 X0D33 为高电平，引脚 X0D39 为低电平。

**设置输出：**

```bash
./xvf_host GPO_WRITE_VALUE 30 1
./xvf_host GPO_WRITE_VALUE 30 0
```
**到达方向 (DoA)**

- DoA 告诉您说话者来自哪个方向。
- ReSpeaker XVF3800 上的 **LED 环** 使用灯光显示方向。
- 您也可以使用 `xvf_host` 工具读取 DoA 值。

检查 DoA 值的命令

```bash
./xvf_host AEC_AZIMUTH_VALUES
````

示例输出

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_AZIMUTH_VALUES 0.91378 (52.36 deg) 0.00000 (0.00 deg) 1.57080 (90.00 deg) 0.91378 (52.36 deg)
```

* **聚焦波束 1**：第一个固定监听方向
* **聚焦波束 2**：第二个固定监听方向
* **自由运行波束**：始终扫描方向
* **自动选择波束**：为获得最佳音频而选择的最终波束（用于 DoA 指示）

**语音指示**

* 语音能量显示语音信号的强度——就像语音音量表。
* 用于检测是否有人在说话以及声音有多大/距离有多近。
* 噪音、回声和距离会影响能量值。

检查语音能量的命令：

```bash
./xvf_host AEC_SPENERGY_VALUES
```

示例输出

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_SPENERGY_VALUES 2080656 0 2083455 2080656
```

* **聚焦波束 1**：第一个波束的能量
* **聚焦波束 2**：第二个波束的能量
* **自由运行波束**：扫描波束的能量
* **自动选择波束**：为最终输出选择的波束的能量

**音频输出通道**

* XVF3800 提供 **2 个音频通道**：

  * **左通道**：干净的后处理音频
  * **右通道**：ASR 波束或回声/参考数据

您可以 **重新路由** 这些通道以输出不同的源。

示例命令

将左通道设置为放大麦克风 0

```bash
./xvf_host AUDIO_MGR_OP_L 3 0
```

将右通道设置为远端（参考）数据

```bash
./xvf_host AUDIO_MGR_OP_R 5 0
```

示例输出：

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
```

**调优参数（让声音更好！）**

* 这些设置有助于改善 **回声消除**、**噪声抑制**、**增益** 等。
* **当默认设置不够好时使用它们。**

常用参数：

| 参数                       | 含义                                           |
| -------------------------- | ---------------------------------------------- |
| **AUDIO_MGR_REF_GAIN**  | 扬声器输入增益（回声信号）                     |
| **AUDIO_MGR_MIC_GAIN**  | 麦克风输入增益（麦克风听到的音量）             |
| **AUDIO_MGR_SYS_DELAY** | 麦克风和扬声器信号之间的延迟                   |
| **PP_AGCMAXGAIN**         | 最大自动增益控制级别                           |
| **AEC_ASROUTGAIN**        | ASR 波束输出增益                               |

如需更深入的文档和高级命令，请访问官方 GitHub 仓库：
[ReSpeaker XVF3800 主机控制 README](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)


---

</TabItem>
</Tabs>

## ReSpeaker XVF3800 的 Python 示例

我们已经准备了 Python 示例来通过 USB 或 I2C 控制设备。

:::note
如果您想了解更多关于使用 python 脚本通过 xvf_host 进行控制的信息，请阅读这篇[文章](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)。
:::


<Tabs>
<TabItem value="windows" label="Windows">

###  适用于 Windows
```bash
git clone https://github.com/KasunThushara/reSpeakerXVF.git
cd reSpeakerXVF
python test.py
```

确保已安装 Python 并且 ReSpeaker XVF3800 通过 USB 连接。

</TabItem>

<TabItem value="rpi" label="Raspberry Pi / Linux">

###  适用于 Raspberry Pi

```bash
git clone https://github.com/KasunThushara/reSpeakerXVF_rpi.git
cd reSpeakerXVF_rpi
chmod +x xvf_host
python3 test.py
```

确保 `xvf_host` 是可执行的，并且您的开发板通过 USB 或 I2C 连接。

</TabItem>
</Tabs>

`test.py` 文件可以按如下方式探索。这仅供您参考。

``` bash
import subprocess
import sys
import time

# Path to your xvf_host binary
XVF_HOST_PATH = "./xvf_host"  # Change this if xvf_host is in a different location

def run_command(*args):
    """Run a command using the xvf_host tool."""
    command = ["sudo", XVF_HOST_PATH] + list(map(str, args))
    try:
        print(f"Running: {' '.join(command)}")
        result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True, text=True)
        print("Output:\n", result.stdout)
    except subprocess.CalledProcessError as e:
        print("Error:\n", e.stderr)
        sys.exit(1)

if __name__ == "__main__":
    # Example: Get device version
    run_command("VERSION")
    time.sleep(0.005)

    # Example: Set LED to breath mode with orange color
    run_command("led_effect", 1)
    time.sleep(0.005)
    run_command("led_color", "0xff8800")
    time.sleep(0.005)
    run_command("led_speed", 1)
    time.sleep(0.005)
    run_command("led_brightness", 255)
    time.sleep(0.005)

    # Example: Save current configuration
    #run_command("save_configuration", 1)

    # Uncomment to clear config
    run_command("clear_configuration", 1)
    time.sleep(0.005)

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/led_2.gif" alt="pir" width={600} height="auto"/></p>


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