---
description: XIAO-常见问题解答
title: 上传失败/程序运行异常/设备端口未找到时该怎么办？
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/noport_upload_fails
last_update:
  date: 2023/6/21
  author: Seraphina
---

有时我们可能会因为使用了错误的程序，导致 XIAO 设备端口丢失或无法正常工作。具体表现为：

- 连接到电脑，但未找到 XIAO 的端口号。

- 电脑已连接且端口号出现，但上传程序失败。

在本 Wiki 中，您可以找到解决方案。不同型号的 XIAO 有不同的故障排除方法，请根据您的型号选择相应的解决方案。

:::success快速浏览
以下是针对各种 XIAO 型号的上传失败、程序异常或设备端口未找到问题的故障排除方法。您可以通过以下链接快速索引：

- [**XIAO SAMD21**](/cn/noport_upload_fails/#for-xiao-samd21)
- [**XIAO RP2040**](/cn/noport_upload_fails/#for-xiao-rp2040)
- [**XIAO nRF52840（Sense）**](/cn/noport_upload_fails/#for-xiao-nrf52840-sense)
- [**XIAO ESP32C3**](/cn/noport_upload_fails/#for-xiao-esp32c3)
- [**XIAO ESP32S3（Sense）**](/cn/noport_upload_fails/#for-xiao-esp32s3-sense)
:::

## **针对 XIAO SAMD21**

有时在用户编程过程中失败可能会导致 Seeed Studio XIAO SAMD21 的端口消失。我们可以通过以下操作解决此问题：

### 重置

首先，您可以尝试重置 XIAO SAMD21。步骤如下：

- 将 Seeed Studio XIAO SAMD21 连接到您的电脑。
- 使用镊子或短接线 **仅短接一次** RST 引脚。
- 橙色 LED 灯闪烁并点亮。

:::note
内置 LED 的行为与 Arduino 上的 LED 是相反的。在 Seeed Studio XIAO SAMD21 上，引脚需要被拉低，而在其他微控制器上则需要被拉高。
:::

如果这不起作用，请尝试进入 **Bootloader 模式**：

### 进入 Bootloader 模式

当您遇到上述两种情况时，可以尝试将 XIAO 置于 Bootloader 模式，这可以解决大多数设备无法识别和上传失败的问题。具体方法如下：

- 将 Seeed Studio XIAO SAMD21 连接到您的电脑。
- 使用镊子或短接线 **短接两次** RST 引脚。
- 橙色 LED 灯闪烁并点亮。

此时，芯片进入 Bootloader 模式，烧录端口再次出现。由于 SAMD21 芯片有两个分区，一个是 Bootloader，另一个是用户程序。产品出厂时会在系统内存中烧录一个 Bootloader 代码。我们可以通过执行上述步骤切换模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

如果这仍然不起作用，请断开板子与电脑的连接，然后重新连接。

## **针对 XIAO RP2040**

有时在用户编程过程中失败可能会导致 Seeed Studio XIAO RP2040 的端口消失。我们可以通过以下操作解决此问题：

### 重置

首先，您可以尝试重置 XIAO RP2040。步骤如下：

- 将 Seeed Studio XIAO RP2040 连接到您的电脑。
- 按下 "R" 引脚 **一次**。

:::note
内置可编程单色 LED（两个蓝色，一个绿色）的行为与 Arduino 上的 LED 是相反的。在 Seeed Studio XIAO RP2040 上，引脚需要被拉低以启用。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

如果这不起作用，请尝试进入 **Bootloader 模式**：

### 进入 Bootloader 模式

当您遇到上述两种情况时，可以尝试将 XIAO 置于 Bootloader 模式，这可以解决大多数设备无法识别和上传失败的问题。具体方法如下：

- 长按 "B" 按钮。
- 将 Seeed Studio XIAO RP2040 连接到您的电脑。
- 电脑上会出现一个磁盘驱动器。

此时，芯片进入 Bootloader 模式，烧录端口再次出现。由于 RP2040 芯片有两个分区，一个是 Bootloader，另一个是用户程序。产品出厂时会在系统内存中烧录一个 Bootloader 代码。我们可以通过执行上述步骤切换模式。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->

如果这仍然不起作用，请断开板子与电脑的连接，然后重新连接。

## **针对 XIAO nRF52840 (Sense)**

有时，当用户编程过程失败时，Seeed Studio XIAO nRF52840 (Sense) 的端口可能会消失。我们可以通过以下操作解决此问题：

### 重置

首先，您可以尝试**重置** XIAO nRF52840 (Sense)。步骤如下：

- 将 Seeed Studio XIAO nRF52840 (Sense) 连接到您的电脑。
- 按下“重置按钮”**一次**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/functional2a.jpg" alt="pir" width={700} height="auto" /></p>

如果这不起作用，请尝试进入**引导加载模式**：

### 进入引导加载模式

当您遇到上述两种情况时，可以尝试将 XIAO 置于引导加载模式，这可以解决大多数设备无法识别和上传失败的问题。具体方法如下：

- 将 Seeed Studio XIAO nRF52840 (Sense) 连接到您的电脑。
- 按下“重置按钮”**两次**。

如果仍然不起作用，请断开板子与电脑的连接，然后重新连接板子。

## **针对 XIAO ESP32C3**

有时，当用户编程过程失败时，Seeed Studio XIAO ESP32C3 的端口可能会消失。我们可以通过以下操作解决此问题：

### 重置

首先，您可以尝试重置 XIAO ESP32C3。步骤如下：

- 将 Seeed Studio XIAO ESP32C3 连接到您的电脑。
- 按下“重置按钮”**一次**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:500, height:'auto'}}/></div>

如果这不起作用，请尝试进入**引导加载模式**：

### 进入引导加载模式

当您遇到上述两种情况时，可以尝试将 XIAO 置于引导加载模式，这可以解决大多数设备无法识别和上传失败的问题。具体方法如下：

- 长按“BOOT按钮”。
- 在按住**BOOT按钮**的同时，将 Seeed Studio XIAO ESP32C3 连接到您的电脑。
- 松开按钮以进入**引导加载模式**。

## **针对 XIAO ESP32S3 (Sense)**

有时，当用户编程过程失败时，Seeed Studio XIAO ESP32S3 (Sense) 的端口可能会消失。我们可以通过以下操作解决此问题：

### 重置

首先，您可以尝试重置 XIAO ESP32S3。步骤如下：

- 将 Seeed Studio XIAO ESP32S3 连接到您的电脑。
- 按下“重置按钮”**一次**。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/esp32s3.png" style={{width:700, height:'auto'}}/></div>

如果这不起作用，请尝试进入**引导加载模式**：

### 进入引导加载模式

当您遇到上述两种情况时，可以尝试将 XIAO 置于引导加载模式，这可以解决大多数设备无法识别和上传失败的问题。具体方法如下：

- **步骤 1**. 按住 XIAO ESP32S3 的 BOOT 按钮并保持不松开。

- **步骤 2**. 在按住 BOOT 按钮的同时，通过数据线连接到电脑。连接到电脑后松开 BOOT 按钮。

:::note
当您在上电时按住 BOOT 按钮，然后按一次重置按钮，也可以进入引导加载模式。
:::

- **步骤 3**. 上传 **Blink** 程序以检查 XIAO ESP32S3 的运行情况。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>