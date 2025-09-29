---
description: 使用语音命令和 Seeed Studio XIAO ESP32S3 Sense 以及圆形 LCD 显示屏构建一个紧凑的、CircuitPython 驱动的番茄钟计时器。
title: 使用 XIAO ESP32S3 和 CircuitPython 构建语音激活番茄钟计时器
keywords:
  - XIAO
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/xiao_esp32s3_voice_pomodoro
last_update:
  date: 04/17/2025
  author: Peter Machona
---

# AskLou.io 番茄钟计时器

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32s3_sense_pomodoro_timer/AskLou_01.png" style={{width:800, height:'auto'}}/></div>

> 一个使用 Seeed Studio XIAO ESP32S3 Sense 和 XIAO 圆形显示屏构建的语音控制番茄钟计时器。通过免手动时间管理保持高效！

## 项目概述

AskLou.io 番茄钟计时器是一个紧凑的语音激活生产力工具，帮助您实施流行的番茄工作法进行时间管理。使用简单的语音命令，您可以开始工作会话、休息，并管理您的生产力，无需触摸您的电脑或手机。

## 为什么选择 AskLou.io 番茄钟计时器？

传统的番茄钟计时器需要手动交互，会打断您的工作流程和专注力。AskLou.io 通过语音命令解决了这个问题，让您无需动手就能管理时间。优雅的圆形显示屏提供当前会话状态的一目了然视图，帮助您保持专注和高效。

## 功能特性

- **语音控制**：通过简单的语音命令启动和暂停计时器
- **多种会话类型**：标准工作会话（25分钟）、短休息（5分钟）和长休息（15分钟）
- **可视化进度跟踪**：直观的圆形进度指示器显示剩余时间
- **无干扰**：无应用程序、无通知，只有专注的生产力
- **可定制**：易于修改会话持续时间以匹配您的个人工作流程
- **低功耗**：设计用于在您的桌面上全天使用
- **独立运行**：设置完成后无需智能手机或电脑

## 硬件

### 所需组件

- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Sense-Pre-Soldered-p-6335.html)
- [Seeed Studio XIAO 圆形显示屏（1.28" 240x240 GC9A01 LCD）](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- USB-C 电缆供电
- 可选：3D 打印外壳（项目中包含文件）

### 为什么我们选择这个硬件

XIAO ESP32S3 Sense 包含板载麦克风，使其非常适合语音控制应用。其紧凑的外形尺寸配合令人惊艳的圆形显示屏，创造了一个优雅的桌面伴侣，不会分散您工作空间的美感。

## 构建过程

### 1. 硬件组装

- 将圆形显示屏连接到 XIAO ESP32S3 Sense 开发板
- 显示屏直接连接到 XIAO 的引脚 - 无需焊接！
- 可选：安装在 3D 打印外壳中以获得完成的外观

### 2. 软件设置

**设置 CircuitPython**

- 从 [CircuitPython.org](https://circuitpython.org/) 下载 CircuitPython 8.x 或更新版本
- 将您的开发板置于引导加载程序模式（双击复位按钮）
- 将 CircuitPython UF2 文件拖放到开发板的驱动器上

**安装所需库**

- 从 [CircuitPython 库包](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases) 下载这些库：
  - adafruit_display_text
  - adafruit_display_shapes
  - gc9a01.mpy
  - analogio（用于麦克风功能）
- 将它们复制到您的 CircuitPython 设备上的 lib 文件夹中。

### 3. 代码部署

只需将此[仓库](https://github.com/AskLou-io/Pomodoro_Circuit_Python)中的 code.py 文件复制到您的 CircuitPython 设备，计时器将自动开始运行！

## 工作原理

- **语音检测**：板载麦克风监听超过阈值的声音
- **命令模拟**：对于演示版本，命令在预设列表中循环
- **计时器逻辑**：跟踪工作会话、短休息和长休息
- **视觉反馈**：圆形显示屏显示会话类型和剩余时间
- **进度指示器**：发光弧形显示当前会话的进度

AskLou.io 番茄钟计时器响应以下语音命令：

- "Start timer" - 开始 25 分钟工作会话
- "Pause timer" - 暂停当前会话
- "Start short break" - 开始 5 分钟休息
- "Start long break" - 开始 15 分钟休息

## 自定义选项

您可以通过多种方式自定义您的 AskLou.io 番茄钟计时器：

- **会话持续时间**：修改 session_durations 字典来更改工作或休息时长
- **语音灵敏度**：根据您的环境调整 LOUD_THRESHOLD 值
- **视觉主题**：为不同会话类型更改弧形颜色
- **命令词**：更新 voice_commands 列表以使用不同的短语

## 未来增强功能

未来版本的潜在改进：

- 改进语音识别以实现更可靠的命令检测
- 会话结束时的触觉或音频反馈
- 与生产力应用程序的连接以记录会话
- 用于音频通知的小扬声器
- 电池供电以实现便携性

## 资源

- [GitHub 仓库](https://github.com/AskLou-io/Pomodoro_Circuit_Python/blob/main/README.md)
- [Hackster.io 项目](https://www.hackster.io/peter-machona/asklou-io-pomodoro-timer-a7a1f2)
- [XIAO ESP32S3 文档](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/)
- [圆形显示屏文档](https://wiki.seeedstudio.com/cn/get_start_round_display/)

## 致谢

- 硬件平台由 Seeed Studio 提供
- 番茄工作法由 Francesco Cirillo 创建
- [项目作者 Peter Machona](https://github.com/AskLou-io/Pomodoro_Circuit_Python)

## 许可证

本项目在知识共享署名-非商业性使用 (CC BY-NC) 许可证下发布。这意味着您可以自由地：

- **分享** — 以任何媒介或格式复制和重新分发材料
- **改编** — 重新混合、转换和基于材料进行创作

在以下条款下：

- **署名** — 您必须给出适当的署名，提供许可证链接，并指出是否进行了更改。您可以以任何合理的方式这样做，但不得以任何方式暗示许可人认可您或您的使用。
- **非商业性使用** — 您不得将材料用于商业目的。

---

AskLou.io 番茄钟计时器 - 专注生产力，只需开口询问。

## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持。
- 特别感谢 [Peter Machona](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92639112&issue=Seeed-Studio%7Cwiki-documents%7C2074) 的专注努力。您的工作将被[展示](https://wiki.seeedstudio.com/contributors/)。

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
