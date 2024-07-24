---
description: Overview
title: 概述
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-USBCLIENT-Overview
last_update:
  date: 3/07/2024
  author: jessie
---

# 概述

该存储库介绍了如何将Wio Terminal用作USB客户端，包括将其用作人机界面设备（HID），如键盘、鼠标等。它还支持音乐仪器数字接口（MIDI）。

这个功能依赖于 [为Arduino设计的Adafruit TinyUSB库](https://github.com/adafruit/Adafruit_TinyUSB_Arduino)。 该库已经在Wio Terminal（SAMD51）上进行了测试，并且正常工作。

## 给Arduino安装Adafruit TinyUSB 库

1. 访问 [为Arduino设计的Adafruit TinyUSB库](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) 存储库，并将整个存储库下载到本地驱动器。

2. 现在，可以将该库安装到Arduino IDE中。打开Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`, 然后选择刚刚下载的 `Adafruit_TinyUSB_Arduino` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)
