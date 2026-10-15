---
description: 适用于连接到 reSpeaker XVF3800 的 ESP32-S3 USB 音频与控制桥的 Arduino 固件。通过单一原生 USB 连接即可提供立体声采集、立体声回放，以及用于通过 I2C 控制 reSpeaker XVF3800 的 CDC 串行接口。
title: reSpeaker XVF3800 搭配 XIAO ESP32S3 的 USB 音频桥
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
  - USB Audio
  - I2S
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp
slug: /respeaker_xvf3800_i2s_usb_bridge
last_update:
  date: 10/12/2026
  author: Kasun Thushara
createdAt: '2026-10-12'
updatedAt: '2026-10-12'
url: https://wiki.seeedstudio.com/cn/respeaker_xvf3800_i2s_usb_bridge/
---

# reSpeaker XVF3800 搭配 XIAO ESP32S3 的 USB 音频桥

## 概述

本项目提供连接到 **reSpeaker XVF3800** 的 **基于 ESP32-S3 的 USB 音频与控制桥 Arduino 固件**。通过单一原生 USB 连接即可提供**立体声采集**、**立体声回放**，以及用于通过 **I2C** 控制 reSpeaker XVF3800 的 **CDC 串行接口**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="reSpeaker XVF3800 with XIAO ESP32S3" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 固件特性

- 通过全速 USB 提供 USB Audio Class 1 (UAC1) 采集与回放。
- 立体声有符号 32 位小端 PCM，使用 32 位 Philips I2S 时隙。
- 在编译时选择 16 kHz 或 48 kHz 工作模式以及 I2S 时钟源。
- 支持 USB 采集与回放同时进行。USB 与 I2S 使用相同的标称采样率。
- 回放缓冲与软件时钟漂移校正，支持主通道和各独立通道的 USB 主机音量与静音控制。
- 采集路径不进行回放音量处理或软件重采样。
- 将 USB CDC 命令转发到 reSpeaker XVF3800 的 I2C 控制接口，配套 Python 主机工具以及只读音频/USB 诊断信息。
- 项目本地的 TinyUSB DWC2 驱动和 USB 描述符，使全双工音频与 CDC 能够适配 ESP32-S3 的硬件 FIFO 预算。

## 音频模式

在 `bridge_config.h` 中设置 `BRIDGE_MODE`，然后重新构建整个草图。**宏名称中的 Master 和 Slave 描述的是 reSpeaker XVF3800 的角色。**ESP32-S3 使用相反的角色。

| 模式 | 采样率 | reSpeaker 角色 | ESP32-S3 角色 | 时钟源 |
| --- | --- | --- | --- | --- |
| `BRIDGE_I2S_MASTER_48K` | 48 kHz | 主机 | 从机 | reSpeaker |
| `BRIDGE_I2S_MASTER_16K` | 16 kHz | 主机 | 从机 | reSpeaker |
| `BRIDGE_I2S_SLAVE_16K` | 16 kHz | 从机 | 主机 | ESP32-S3 |

reSpeaker XVF3800 必须运行已配置为匹配采样率和 I2S 角色的固件。该桥接固件不会配置或烧录 reSpeaker。模式选择需要重新编译；不支持运行时速率切换或 16/48 kHz 转换。

## 前置条件

- 一块带原生 USB 的 ESP32-S3 开发板；提供的配置文件针对 Seeed Studio XIAO ESP32S3。
- 已安装 Espressif 开发板包的 Arduino IDE 或 Arduino CLI。
- Arduino-ESP32 **3.3.11**。

不需要单独的 USB 音频库。请使用固定的核心版本：本地 USB 驱动覆盖与描述符依赖其 TinyUSB 实现。

## 构建设置（Arduino IDE）

打开 `reSpeaker_ESP32S3_USB_BRIDGE.ino`，安装/选择 Arduino-ESP32 3.3.11，并使用以下设置：

| 设置项 | 值 |
| --- | --- |
| Board | Seeed Studio XIAO_ESP32S3 |
| USB Mode | USB-OTG (TinyUSB) |
| USB CDC On Boot | Disabled |
| Upload Mode | USB-OTG CDC (TinyUSB) |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240 MHz |
| PSRAM | Disabled |

简而言之：**USB Mode = USB-OTG (TinyUSB)；CDC/MSC/DFU On Boot = Disabled；CPU = 240 MHz；PSRAM = Disabled。**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/arduino_settings.jpg" alt="pir" width={400} height="auto" /></p>

固件会创建自己的 CDC 接口，因此必须保持 CDC On Boot 为 Disabled。在固定的 CLI 配置文件中，`CDCOnBoot=cdc` 对应 Disabled。草图会在编译时检查这三个 USB 设置。Upload Mode 通过 `ARDUINO_FQBN` 进行检查，因为核心没有定义单独的上传模式宏。CLI 配置文件显式选择 `UploadMode=cdc`，以请求 1200 波特复位并等待下载端口。

<!-- TODO: add Arduino IDE build settings screenshot here -->

选择 **Verify** 进行编译，然后选择 **Upload** 上传。

## 下载与安装

1. 从 GitHub 下载固件：[reSpeaker_ESP32S3_USB_BRIDGE](https://github.com/respeaker/reSpeaker_ESP32S3_USB_BRIDGE)。
2. 将下载的仓库中的全部内容复制到新建文件夹 `Documents\Arduino\reSpeaker_ESP32S3_USB_BRIDGE` 中。请包含所有文件：`.ino`、头文件、`.cpp` 文件、`sketch.yaml`、`host\`、`src\` 和 `docs`。仅复制 `.ino` 文件是不够的。
3. 在新文件夹中编辑 `bridge_config.h`，选择 16 kHz 模式，如果你正在使用：

```cpp
// #define BRIDGE_MODE BRIDGE_I2S_MASTER_48K
#define BRIDGE_MODE BRIDGE_I2S_SLAVE_16K
```

4. 在 Arduino IDE 中，打开 **File > Sketchbook > reSpeaker_ESP32S3_USB_BRIDGE**（此时文件夹名称与 `.ino` 一致）。

## 检查 USB 枚举

断开并重新连接 USB 线，你应该会看到：

- 一个 **CDC 串行端口**（例如在 Windows 上为 `COM5`）——这是控制端口。
- 一个名为 `BRIDGE I2S Slave 16k` 的**音频设备**（立体声、32 位、16 kHz 输入与输出）。

在继续之前，请关闭任何占用该端口的程序（例如串口监视器）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/device_tree.jpg" alt="pir" width={800} height="auto" /></p>

## 验证控制端（主机工具）

在仓库中进入 `host` 文件夹并安装依赖：

```sh
cd host
python -m venv .venv
.venv\Scripts\activate.bat
python -m pip install -r requirements.txt
python bridge_host.py --list-ports
python bridge_host.py --port COMx --ping
python bridge_host.py --port COMx VERSION
```

将 `COMx` 中的 `x` 替换为你实际的 COM 端口号。在 Linux 或 macOS 上，使用 `source .venv/bin/activate` 激活虚拟环境，并使用诸如 `/dev/ttyACM0` 或 `/dev/cu.usbmodemXXXX` 之类的路径来替代 `COMx`。

预期结果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/listports.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/ping.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/mic_again.jpg" alt="pir" width={800} height="auto" /></p>

<!-- TODO: add host tool output screenshot here -->

## 测试音频

- **回放：** 将立体声 32 位 16 kHz WAV 文件播放到 `BRIDGE I2S Slave 16k` 输出；你应该能从 reSpeaker 编解码器/扬声器听到声音。
- **采集：** 从其输入端录制 16 kHz 立体声 32 位音频。

**参考 Audacity 截图**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/audio_settings.jpg" alt="pir" width={600} height="auto" /></p>

<!-- TODO: add audio test screenshot here -->

## 资源

- [reSpeaker_ESP32S3_USB_BRIDGE 固件（GitHub）](https://github.com/respeaker/reSpeaker_ESP32S3_USB_BRIDGE)
- `README.md` — 固件概览、音频模式和构建说明。
- `PLAYBACK.md` — 音频连线、回放缓冲、诊断以及音频/USB 状态。
- `CONTROL.md` — I2C 连线、Python 主机工具以及 CDC 串行协议。

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
