---
description: 概述
title: 概述
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-USBH-Overview
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# 概述

本仓库介绍如何将 Wio Terminal 用作 USB 主机，这意味着您可以将 USB 设备插入 Wio Terminal 并像使用计算机一样操作它！

此功能依赖于 [USB Host Library SAMD](https://github.com/gdsports/USB_Host_Library_SAMD)。该库已在 Wio Terminal(SAMD51) 上测试并正常工作。

## 安装 USB Host Library SAMD

1. 访问 [USB Host Library SAMD](https://github.com/gdsports/USB_Host_Library_SAMD) 仓库并将整个仓库下载到您的本地驱动器。

2. 现在，可以将库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择您刚刚下载的 `Seeed_Arduino_LCD` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## USB 主机配置

要在 Wio Terminal 上启用 USB 主机，您必须配置两个引脚。需要将 `PIN_USB_HOST_ENABLE` 设置为 **LOW**，将 `OUTPUT_CTR_5V` 设置为 **HIGH**。

您可以通过在 `void setup()` 中添加以下代码来简单实现：

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```