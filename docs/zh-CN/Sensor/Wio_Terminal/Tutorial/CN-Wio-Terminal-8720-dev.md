---
description:  How to Use Wio Terminal as RTL8720DN Dev Board
title:  如何将Wio Terminal用作RTL8720DN开发板
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-8720-dev
last_update:
  date: 3/08/2024
  author: jessie
---

# 如何将Wio Terminal用作RTL8720DN开发板

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.gif" /></div>

Wio Terminal配备了Atmel SAMD51核心和Realtek RTL8720DN无线核心。如果您可以将Wio Terminal也用作简单的RTL8720DN开发板，那将非常酷。在本文中，您将学习如何将Wio Terminal用作RTL8720DN开发板，以开发Wi-Fi和蓝牙连接性！

## 入门指南

- 在进行以下操作之前，请先按照 [**Wio Terminal 入门指南**](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/) 操作。

### 将Realtek板支持库添加到Arduino

1.打开Arduino IDE，单击 **File** > **Preferences**, 将下面的URL复制 **Additional Boards Manager URLs** 中:

```sh
https://github.com/ambiot/ambd_arduino/raw/master/Arduino_package/package_realtek.com_amebad_index.json
```

2.点击 **Tools** > **Board** > **Board Manager** ，在板管理器中搜索 **realtek** 。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/realtek-board.png" /></div>

## SAMD51与RTL8720DN之间的通信程序

我们准备了一个Arduino示例代码，用于使Wio Terminal的SAMD51核心与RTL8720DN进行通信。从 [**此处**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_USB2Serial_Burn8720) 下载完整的源代码。

- 选择面板为 **Wio Terminal**，将代码上传到Wio Terminal。

**注:** 此程序将上传到Wio Terminal的SAMD51核心。

此Arduino程序有 **2 个模式** 。

### 模式 1 - RTL8720DN烧录固件模式

按下按钮（右侧按钮）进入此模式。这是 **用于将Arduino代码烧录到RTL8720DN的模式。**现在，您可以选择RTL8720DN示例代码之一上传到RTL8720DN核心。您必须选择此模式才能上传到RTL8720DN核心，并**将板设置为RTL8720**。

### 模式 2 - USB串口模式

按下按钮（中间按钮）进入此模式。这是 **用于查看RTL8720DN核心的串口输出的模式。** 在此模式下，SAMD51核心充当USB串口模块。

## Wi-Fi 示例

让我们通过一个示例来了解具体步骤！

- 将 **SAMD51与RTL8720DN之间的通信程序代码上传到Wio Terminal** (选择板为 **Wio Terminal**)。

- 上传程序后，导航到 **Tools** -> **Board** 选择板为 **RTL8722DM** ，如下图所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-board.png" /></div>

- 导航到 **Files** -> **Examples** 在 **Examples for RTL8720DM**下, 您可以选择RTL8720DN的示例。让我们以ScanNetworks为例。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-example.png" /></div>

:::注
如果使用Wi-Fi相关的示例，请先查看 [here](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/) 以擦除RTL8720DN核心固件。
:::

- 确保Wio Terminal处于 **RTL8720DN 烧录固件模式** 选择板为 **RTL8722DM** 然后点击上传。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/burn.png" /></div>

- 一旦将Wi-Fi示例上传到RTL8720DN核心，请重置Wio Terminal并通过按下Wio Terminal的中间按钮切换到 **USB 串口模式** 。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/USB-serial.png" /></div>

- 现在，如果您打开串口监视器，您应该能够看到从RTL8720DN核心打印出的结果！现在，您可以将Wio Terminal的RTL8720DN核心用作开发板！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/result.png" /></div>

## 蓝牙示例

我们来看一个蓝牙示例。

- 将 **SAMD51与RTL8720DN之间的通信程序上传到 Wio Terminal** (选择板为 **Wio Terminal**).

- 上传程序之后，导航到 **Tools** -> **Board** 并选择板为 **RTL8722DM** 。导航到 **Files** -> **Examples** 并在 **RTL8720DM示例下**, 您可以选择RTL8720DN的示例。让我们以ScanNetworks为例。

- 确保Wio Terminal处于 **烧录固件模式的状态下**。 选择板为 **RTL8722DM** 然后点击上传。

- 一旦将Wi-Fi示例上传到RTL8720DN核心，请重置Wio Terminal并通过按下Wio Terminal的中间按钮切换到 **USB 串口模式** 。

- 现在，如果您打开串口监视器，您应该能够看到从RTL8720DN核心打印出的结果！现在，您可以将Wio Terminal的RTL8720DN核心用作开发板！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.png" /></div>

## 技术支持 & 产品讨论


感谢您选择我们的产品！我们将在各种支持渠道上为您提供不同的支持，以确保您对我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
