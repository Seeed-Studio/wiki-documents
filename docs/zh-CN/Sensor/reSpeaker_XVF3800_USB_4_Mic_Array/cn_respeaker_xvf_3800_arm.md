---
description: 使用 reSpeaker + HorizonArm-Mark 构建您的语音控制智能机械臂
title: 使用 reSpeaker + HorizonArm-Mark 部署您的语音控制智能机械臂
keywords:
- reSpeaker_XVF3800_USB_4_Mic_Array
- reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /cn/respeaker_xvf_3800_arm
sku: 114993702,114993700
last_update:
  date: 2/6/2026
  author: Mingxi
---


> **目标**：让 HorizonArm-Mark 机械臂与 reSpeaker XVF3800 协同工作，实现基于语音指令的机械臂控制。
> 
> **Seeed-Projects**：https://github.com/Seeed-Projects

reSpeaker XVF3800 是一款基于 XMOS XVF3800 芯片的专业 4 麦克风圆形阵列。它具有双模式、360° 远场拾音（最远 5 米）、声学回声消除（AEC）、自动增益控制（AGC）、到达方向（DoA）、去混响、波束成形和噪声抑制等功能，能够在嘈杂环境中提供可靠的语音拾取。凭借其强大的音频捕获和降噪能力，为语音控制应用提供了出色的"耳朵"。

![reSpeaker banner](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg)

---

## 第一部分：reSpeaker 硬件固件准备

本节介绍如何为 reSpeaker XVF3800 刷入 USB 固件。USB 固件支持即插即用模式，可直接连接 PC、Raspberry Pi 等设备使用。
USB 固件仅支持 USB DFU（不支持 I2C DFU）。如果设备当前运行的是 I2S 固件，请先进入**安全模式**，然后使用 USB DFU 刷入 USB 固件。安全模式同时支持 USB DFU 和 I2C DFU。

**参考资源**：
- [reSpeaker XVF3800 入门指南](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/)
- [reSpeaker XVF3800 固件仓库](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares)
- [reSpeaker 代码仓库](https://github.com/respeaker)

### 1.1 准备工作

#### 硬件需求

| 物品 | 说明 |
|------|------|
| reSpeaker XVF3800 USB 4-Mic Array | 主控麦克风阵列 |
| USB Type-C 数据线 | 用于电源和数据传输 |
| 计算机 | Windows / macOS / Linux 均可 |

#### 软件准备（安装 dfu-util）

**Windows**：

1. 下载并解压 `dfu-util` 二进制文件（例如 `D:\dfu-util-0.11-binaries\win64\`）
2. 将包含 `dfu-util.exe` 的目录添加到系统 PATH
3. 打开命令提示符，运行 `dfu-util -V` 验证安装
4. 如果 `dfu-util -l` 返回 `LIBUSB_ERROR_NOT_SUPPORTED`，请使用 Zadig 将设备驱动程序替换为 WinUSB

**macOS（Homebrew）**：

```bash
brew install dfu-util
dfu-util -l
```

**Linux（Debian / Ubuntu / Raspberry Pi OS）**：

```bash
sudo apt update
sudo apt install dfu-util
sudo dfu-util -l
```

#### 下载 USB 固件

访问固件仓库：https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares

根据需求选择以下 USB 固件之一（一般选择 2 通道版本即可）：

| 固件 | 通道数 | 说明 |
|------|--------|------|
| `respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin` | 2 | 处理后的双通道输出<br>通道 0：会议（Conference）<br>通道 1：ASR |
| `respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin` | 6 | 通道 0：处理后的音频（会议）<br>通道 1：处理后的音频（ASR）<br>通道 2-5：麦克风 0-3 原始数据 |

### 1.2 连接并进入 DFU 模式

#### 接线注意事项

连接计算机时，请使用**靠近 3.5mm 耳机插孔的 USB-C 端口**（XMOS 侧），请勿使用 XIAO 侧端口。

#### 进入安全模式

以下情况需要进入安全模式：
- 当前固件为 I2S 模式，需要切换为 USB 模式
- 固件损坏或刷入了错误固件

**操作步骤**：

1. 完全断开设备电源
2. 按住板载 **Mute** 按钮
3. 保持按住按钮的同时重新连接电源
4. 当红色 LED 开始闪烁时，松开按钮——设备已进入安全模式

### 1.3 使用 dfu-util 刷入 USB 固件

#### 确认设备可见

运行以下命令检查设备是否被识别：

```bash
# Linux / Raspberry Pi OS
sudo dfu-util -l

# macOS / Windows
dfu-util -l
```

预期输出应包含：`Found DFU: [2886:001a] ... alt=1, name="reSpeaker DFU Upgrade"`

#### 执行刷入命令

```bash
# Linux / Raspberry Pi OS（需要 sudo）
sudo dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin

# macOS / Windows（无需 sudo）
dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin
```

**参数说明**：
- `-R`：刷写完成后重置/重启设备
- `-e`：擦除原有固件
- `-a 1`：写入 Upgrade 分区
- `-D`：指定固件文件路径

刷写完成后，设备将自动重启并加载 USB 固件。

### 1.4 验证与故障排除

#### 验证固件

刷入 USB 固件后，可通过以下方式验证：

1. **设备管理器检测**
   - **Windows**：打开设备管理器，在"声音、视频和游戏控制器"中应看到"reSpeaker 3800"
   - **macOS/Linux**：运行 `lsusb` 命令，查看设备是否识别为 USB 音频设备
   
   ![usbset](https://files.seeedstudio.com/wiki/reSpeaker-arm/respeaker_usb.png)

2. **录音测试**
   - 使用 Audacity 或其他录音软件
   - 选择 "reSpeaker 3800" 作为录音设备
   - 设置采样率为 16000 Hz，通道数根据刷入的固件选择（2 通道或 6 通道）
   - 开始录音并测试语音捕获

#### 常见问题

**Q：`dfu-util -l` 无法检测到设备？**
- 检查 USB 线缆和端口（必须使用 XMOS 侧连接器，靠近 3.5mm 耳机插孔的 USB-C 端口）
- 如果设备当前运行 I2S 固件，请先进入安全模式
- Windows 用户：通过 Zadig 确保使用 WinUSB 驱动程序

**Q：刷入过程中出现错误？**
- 尝试更换 USB 线缆或主机端口
- 在安全模式下重新刷入

**Q：刷入后电脑无法识别设备？**
- 确保使用的是 USB 固件文件（文件名以 `usb` 开头），而非 I2S 固件
- 尝试重新插拔设备或更换 USB 端口

**Q：录音时没有声音或声音异常？**
- 检查录音软件的采样率设置是否为 16000 Hz
- 确认通道数设置与固件匹配（2 通道或 6 通道）
- 检查麦克风是否被静音（查看红色静音 LED 是否亮起，按下静音按钮可取消静音）

---

## 第二部分：软件配置与连接使用

### 2.1 硬件连接

确保中控电脑通过 USB 同时连接机械臂和麦克风阵列。

### 2.2 连接机械臂

1. 打开机械臂控制软件 HorizonArm
2. 点击左上角的**连接**按钮
3. 选择对应的串口号（如 COM3）和波特率（500000）
4. 选择**电机 ID 设置** → **机械臂** → **自定义 ID**，确认显示：1, 2, 3, 4, 5, 6
5. 点击**连接**

![armset](https://files.seeedstudio.com/wiki/reSpeaker-arm/armset.png)

连接成功后，您可以在 HorizonArm 软件界面上看到机械臂的状态。点击**回零位**可让机械臂回到初始位置（90 度伸直状态）。

### 2.3 配置 AI 系统

1. 点击**具身智能**界面
2. 进行参数配置：
   - 输入大模型的 API 地址和密钥
   - 选择相机 ID（一般为 1，部分机型为 0）
3. 点击**初始化 AI 系统**
4. 进入**具身驱动**界面开始使用

![aiset](https://files.seeedstudio.com/wiki/reSpeaker-arm/aiset.png)

### 2.4 语音控制操作

进入执行界面后，您将看到四个控制按钮：

![monitor](https://files.seeedstudio.com/wiki/reSpeaker-arm/monitor.png)

**操作方式**：

| 功能 | 操作说明 |
|------|----------|
| **执行指令** | 在文本框内输入指令，点击按钮执行 |
| **运行对话** | 类似于录音功能：<br>• 第一次点击：开始录音<br>• 第二次点击：结束录音<br>录音将发送到大模型处理，返回结果会显示在界面上，机械臂根据指令执行动作 |
| **开启对话模式** | 机械臂进入持续监听状态，说出唤醒词 **"Mark"** 后，接下来的话语将被识别为指令并执行 |

---

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种沟通渠道，以确保您获得顺畅的产品使用体验。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
