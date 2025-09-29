---
description: 概述
title: Wio Terminal 音频库概述
keywords:
- Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Audio-Overview
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Wio Terminal 音频库概述

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak.gif"/></div>

本 wiki 介绍如何在 Wio Terminal 上使用 [**ReSpeaker 2-Mic Hat**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html) 来使用音频库。借助这个库，您可以使用 Wio Terminal 录制、播放和分析音频！此外，这个音频库可以应用到不同的领域，如语音识别等等！

## 所需硬件

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**ReSpeaker 2-Mics Pi HAT**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)

- *Wio Terminal 40 引脚 Pi HAT 适配板（尚未发布）*

## 硬件连接

> 目前，如果您想测试软件，需要飞线连接。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/ai-wt.png"/></div>

## 入门指南

要开始使用 Wio Terminal 的音频库，请按照以下步骤操作：

## 安装 Seeed_Arduino_Audio

1. 访问 [Seeed_Arduino_Audio](https://github.com/Seeed-Studio/Seeed_Arduino_Audio) 仓库，将整个仓库下载到您的本地驱动器。

2. 现在，可以将库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择您刚刚下载的 `Seeed_Arduino_Audio` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## 为 Wio Terminal 安装 FS 库

- 请访问官方 [**Wio Terminal 文件系统 wiki**](https://wiki.seeedstudio.com/cn/Wio-Terminal-FS-Overview/) 页面。