---
description: Overview
title: 概述
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-USBH-Overview
last_update:
  date: 3/07/2024
  author: jessie
---

# 概述

本教程介绍了如何将Wio Terminal用作USB主机，这意味着您可以将USB设备插入Wio Terminal并像使用计算机一样与之交互！

这个功能依赖于 [USB Host Library SAMD](https://github.com/gdsports/USB_Host_Library_SAMD)。 该库已经在Wio Terminal（SAMD51）上进行了测试，并且能够正常工作。

## 安装 USB 主机库 SAMD

1. 访问 [USB 主机库 SAMD](https://github.com/gdsports/USB_Host_Library_SAMD) 存储库并将整个存储库下载到本地驱动器。

2. 现在，可以将库安装到Arduino IDE中。打开Arduino IDE，单击 `sketch` -> `Include Library` -> `Add .ZIP Library`, 然后选择刚刚下载的 `Seeed_Arduino_LCD` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## USB 主机配置

USB主机配置要在Wio Terminal上启用USB主机功能，您必须配置两个引脚。需要将 `PIN_USB_HOST_ENABLE` 设为 **LOW** 将 `OUTPUT_CTR_5V` 设为 **HIGH**。

您只需在 `void setup()` 中添加以下代码即可完成这个操作：

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```
