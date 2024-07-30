---
description: Build a DAPLink Device using Wio Terminal
title: 使用Wio terminal 构建 DAPLink设备
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-DAPLink
last_update:
  date: 3/07/2024
  author: jessie
---

# Wio Terminal DAPLink

现在，我们已经 **开发了适用于您的Arduino板 (*SAMD 系列*) 的DAPLink固件** ，例如 [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 和 [Seeeduino Xiao](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) 这样您就可以以最经济的方式上传和调试支持DAPLink的开发板！

## 特点

- 调试和烧录Arm Cortex处理器
- 提供虚拟串口，无需usb转串口
- 拖放上传固件（即将推出）

## 入门指南

请从[这](https://wiki.seeedstudio.com/Arduino-DAPLink/)访问Arduino DAPLink入门指南 Wiki 页面。

### `uf2` 方法

为了方便起见，我们还提供了使用 `uf2` 方法上传Wio Terminal固件的方式。只需从以下链接下载 `uf2` 文件。

- 下载 [**simple_daplink_wt**](https://files.seeedstudio.com/wiki/Wio-Terminal/res/simple_daplink_wt.uf2) `uf2` 文件。

通过快速切换电源开关两次进入启动加载模式。更多参考信息，请参阅 [这里](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq)。

您的计算机上将出现一个名为 `Arduino` 的外部驱动器。将下载的uf2文件拖放到Arduino驱动器中。

### 连接引脚布局

您可以使用以下引脚布局作为参考：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-wt.jpg"/></div>

## 技术支持 & 产品讨论


感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您尽可能顺畅的体验我们的产品。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
