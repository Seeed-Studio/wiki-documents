---
description: 概述
title: 概述
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-USBCLIENT-Overview
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# 概述

本仓库介绍如何将 Wio Terminal 用作 USB 客户端，包括将其用于人机接口设备(HID)，如键盘、鼠标等。它还支持乐器数字接口(MIDI)。

此功能依赖于 [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino)。该库已在 Wio Terminal(SAMD51) 上测试并正常工作。

## 安装 Adafruit TinyUSB Library for Arduino

1. 访问 [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) 仓库，并将整个仓库下载到您的本地驱动器。

2. 现在，可以将该库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择您刚刚下载的 `Adafruit_TinyUSB_Arduino` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)