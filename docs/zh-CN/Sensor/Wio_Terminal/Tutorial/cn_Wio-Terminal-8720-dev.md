---
description: 如何将 Wio Terminal 用作 RTL8720DN 开发板
title: 如何将 Wio Terminal 用作 RTL8720DN 开发板
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-8720-dev
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# 如何将 Wio Terminal 用作 RTL8720DN 开发板

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.gif" /></div>

Wio Terminal 配备了 Atmel SAMD51 核心和 Realtek RTL8720DN 无线核心。如果你也可以将 Wio Terminal 用作简单的 RTL8720DN 开发板，那不是很酷吗？在本教程中，你将学习如何将 Wio Terminal 用作 RTL8720DN 开发板来开发 Wi-Fi 和蓝牙连接功能！

## 开始使用

- 在进行以下操作之前，请先阅读 [**Wio Terminal 入门指南**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/)。

### 将 Realtek 开发板库添加到 Arduino

1.打开你的 Arduino IDE，点击 **File** > **Preferences**，并将以下网址复制到 **Additional Boards Manager URLs**：

```sh
https://github.com/ambiot/ambd_arduino/raw/master/Arduino_package/package_realtek.com_amebad_index.json
```

2.点击 **Tools** > **Board** > **Board Manager** 并在开发板管理器中搜索 **realtek**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/realtek-board.png" /></div>

## SAMD51 和 RTL8720DN 之间的通信程序

我们准备了一个 Arduino 示例代码，可用于 Wio Terminal 的 SAMD51 核心与 RTL8720DN 的通信。在[**这里**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_USB2Serial_Burn8720)下载完整的源代码。

- 选择开发板为 **Wio Terminal**，将代码上传到 Wio Terminal。

**注意：** 此程序上传到 Wio Terminal 的 SAMD51 核心。

此 Arduino 程序有 **2 种模式**。

### 模式 1 - RTL8720DN 烧录固件模式

按下按钮（右按钮）进入此模式。这是**用于将 Arduino 代码烧录到 RTL8720DN 的模式**。现在，你可以选择一个 RTL8720DN 示例代码上传到 RTL8720DN 核心。你必须选择此模式才能上传到 RTL8720DN 核心，并**选择开发板为 RTL8720**。

### 模式 2 - USB 转串口模式

按下按钮（中间按钮）进入此模式。这是**用于查看 RTL8720DN 核心串口输出的模式。** 在此模式下，SAMD51 核心充当 USB 转串口模块。

## Wi-Fi 示例

让我们通过一个示例来演示整个过程！

- 将 **SAMD51 和 RTL8720DN 之间的通信程序上传到 Wio Terminal**（选择开发板为 **Wio Terminal**）。

- 上传程序后，导航到 **Tools** -> **Board** 并选择开发板为 **RTL8722DM**，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-board.png" /></div>

- 导航到 **Files** -> **Examples**，在 **Examples for RTL8720DM** 下，你可以选择 RTL8720DN 的示例。我以 ScanNetworks 为例。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-example.png" /></div>

:::note
如果使用 Wi-Fi 相关示例，请先查看[这里](https://wiki.seeedstudio.com/cn/Wio-Terminal-Network-Overview/)以首先擦除 RTL8720DN 核心固件。
:::

- 确保 Wio Terminal 处于 **RTL8720DN 烧录固件模式**，如下所示。选择开发板为 **RTL8722DM** 并点击上传。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/burn.png" /></div>

- 将 Wi-Fi 示例上传到 RTL8720DN 核心后。重置 Wio Terminal 并按下 Wio Terminal 的中间按钮切换到 **USB 转串口模式**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/USB-serial.png" /></div>

- 现在，如果你打开串口监视器，你应该能够看到从 RTL8720DN 核心打印的结果！现在你可以将 Wio Terminal 的 RTL8720DN 核心用作开发板！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/result.png" /></div>

## 蓝牙示例

让我们也来看一个蓝牙示例。

- 将 **SAMD51 和 RTL8720DN 之间的通信程序上传到 Wio Terminal**（选择开发板为 **Wio Terminal**）。

- 上传程序后，导航到 **Tools** -> **Board** 并选择开发板为 **RTL8722DM**。导航到 **Files** -> **Examples**，在 **Examples for RTL8720DM** 下，你可以选择 RTL8720DN 的示例。我以 ScanNetworks 为例。

- 确保 Wio Terminal 处于 **RTL8720DN 烧录固件模式**。选择开发板为 **RTL8722DM** 并点击上传。

- 将 Wi-Fi 示例上传到 RTL8720DN 核心后。重置 Wio Terminal 并按下 Wio Terminal 的中间按钮切换到 **USB 转串口模式**。

- 现在，如果你打开串口监视器，你应该能够看到从 RTL8720DN 核心打印的结果！现在你可以将 Wio Terminal 的 RTL8720DN 核心用作开发板！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.png" /></div>

## 技术支持和产品讨论


感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>