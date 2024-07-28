---
description: 概述
title: Wio Terminal音频库概述
keywords:
- Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Audio-Overview
last_update:
  date: 3/04/2023
  author: 金菊
---

# Wio Terminal音频库概述

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak.gif"/></div>

本Wiki介绍了如何使用音频库和Wio Terminal一起使用 [**ReSpeaker 2-Mic Hat**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)。借助这个库的帮助，您可以使用Wio Terminal录制、播放和分析音频！此外，这个音频库可以应用到不同的领域，比如语音识别等等！

## 所需硬件

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**ReSpeaker 2-Mics Pi HAT**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)

- *用于Wio Terminal的40引脚Pi HAT适配器板（尚未发布）*

## 硬件连接

> 目前，如果您想要测试软件，您将需要自己连接线。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/ai-wt.png"/></div>

## 入门指南

开始使用Wio Terminal的音频库，请按照以下步骤进行操作：

## 安装 Seeed_Arduino_Audio

1. 访问 [Seeed_Arduino_Audio](https://github.com/Seeed-Studio/Seeed_Arduino_Audio) 存储库，并将整个存储库下载到本地驱动器上。

2. 现在，可以将库安装到Arduino IDE中。打开Arduino IDE，单击 `sketch` -> `Include Library` -> `Add .ZIP Library`, 选择刚刚下载的`Seeed_Arduino_Audio` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## 安装 Wio Terminal  的FS库

- 请访问官方的 [**Wio Terminal File System wiki**](https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/) 页面。
