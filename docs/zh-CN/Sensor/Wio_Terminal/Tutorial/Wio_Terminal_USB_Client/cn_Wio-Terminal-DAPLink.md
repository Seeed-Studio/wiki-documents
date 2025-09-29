---
description: 使用 Wio Terminal 构建 DAPLink 设备
title: 使用 Wio Terminal 构建 DAPLink 设备
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-DAPLink
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Wio Terminal DAPLink

现在，我们已经**开发了运行在您的 Arduino 开发板**（*SAMD 系列*）上的 DAPLink 固件，例如 [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 和 [Seeeduino Xiao](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)，这样您就可以以最具成本效益的方式上传和调试支持 DAPLink 的开发板！

## 特性

- 调试和烧录 Arm Cortex CPU
- 提供虚拟串口，无需 USB 转串口
- 拖拽上传固件（即将推出）

## 开始使用

请访问 Arduino DAPLink 入门指南 Wiki [这里](https://wiki.seeedstudio.com/cn/Arduino-DAPLink/)。

### `uf2` 方法

为了方便起见，我们还提供了上传 Wio Terminal 固件的 `uf2` 方法。只需从下面下载 `uf2` 文件。

- 下载 [**simple_daplink_wt**](https://files.seeedstudio.com/wiki/Wio-Terminal/res/simple_daplink_wt.uf2) `uf2` 文件。

通过快速滑动电源开关两次进入引导加载程序模式。更多参考信息，请参见[这里](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/#faq)。

您的 PC 中应该会出现一个名为 `Arduino` 的外部驱动器。将下载的 uf2 文件拖拽到 `Arduino` 驱动器中。

### 连接引脚图

您可以使用以下内容作为参考：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-wt.jpg"/></div>

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