---
description: 使用 Edge Impulse 进行一站式模型训练
title: 使用 Edge Impulse 进行一站式模型训练
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/One-Stop-Model-Training-with-Edge-Impulse
last_update:
  date: 3/31/2023
  author: Yvonne
---

## 概述

在本教程中，我们将教您如何使用 **Edge Impulse** 为您的特定应用训练自己的 AI 模型，然后轻松将其部署到 SenseCAP A1101 - LoRaWAN 视觉 AI 传感器上。让我们开始吧！

:::tip
**什么是 Edge Impulse？**Edge Impulse 是面向企业团队的边缘 AI 平台，用于在任何边缘设备上构建优化模型。通过先进的 AI 传感器功能，更快地交付价值并实现产品创新。
:::

## 硬件准备

[Seeed SenseCAP A1101](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html) - **LoRaWAN 视觉 AI 传感器**是专为开发者设计的图像识别 AI 传感器。SenseCAP A1101 - LoRaWAN 视觉 AI 传感器结合了 TinyML AI 技术和 LoRaWAN 长距离传输，为室内外使用提供了低功耗、高性能的 AI 设备解决方案。<br />该传感器采用海思的高性能、低功耗 AI 视觉解决方案，支持 Google TensorFlow Lite 框架和多个 TinyML AI 平台。<br />

它完全支持 Edge Impulse，这意味着您可以从摄像头采样原始数据、构建模型，并直接从工作室将训练好的机器学习模型部署到模块上，无需任何编程。SenseCAP - 视觉 AI 模块可直接从 [Seeed Studio Bazaar](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html) 购买。

- SenseCAP A1101 - LoRaWAN 视觉 AI 传感器
- USB Type-C 数据线
- 具有互联网连接的 Windows/ Linux/ Mac

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p1.jpg"/></div>

## 软件准备

要在 Edge Impulse 中设置此 A1101，您需要安装以下软件：

1. [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)。
2. 在 Linux 上：
   - GNU Screen：例如通过 `sudo apt install screen` 安装。
3. 下载最新的 [Bouffalo Lab Dev Cube](https://dev.bouffalolab.com/download)

:::tip
**安装 Edge Impulse CLI 时遇到问题？**
请参阅[安装和故障排除指南](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)。
:::

## 连接到 Edge Impulse

安装好所有软件后，现在是时候将 A1101 连接到 Edge Impulse 了。

:::caution **注意：**
如果您在 **2023年3月30日** 之后购买了设备，则无需更新 EI 固件，请直接跳转到 [步骤3](https://wiki.seeedstudio.com/cn/One-Stop-Model-Training-with-Edge-Impulse/#step-3-setting-keys) 设置密钥。请注意，更新 EI 固件将覆盖默认模型。
:::

### 步骤 1. 更新 BL702 芯片固件

BL702 是 USB-UART 芯片，它实现了 PC 和海思芯片之间的通信。您需要更新此固件以使 Edge Impulse 固件正常工作。

1. 从[这里](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases)获取最新的引导加载程序固件：**tinyuf2-sensecap_vision_ai_xxx.bin**。

2. 在按住 A1101 上的 **Boot** 按钮的同时，通过 USB Type-C 数据线将 A1101 连接到 PC。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p2.png" /></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p3.png" /></div>

3. 打开之前安装的 Bouffalo Lab Dev Cube 软件，选择 **BL702/704/706**，然后点击 **Finish**。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p4.png" /></div>

4. 转到 **MCU** 选项卡。在 **Image file** 下，点击 **Browse** 并选择您刚刚下载的固件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p5.png" /></div>

5. 点击 **Refresh**，选择与连接的 A1101 相关的 **Port**，将 **Chip Erase** 设置为 **True**，点击 **Open UART**，点击 **Create & Download** 并等待过程完成。

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p6.png"/></div>

如果一切顺利，您将看到输出显示为 **All Success**。

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p7.png"/></div>

:::note
如果刷写出现错误，请尝试多次点击 **Create & Download**，直到看到 **All Success** 消息。
:::

### 步骤 2. 更新 Edge Impulse 固件

A1101 尚未配备正确的 Edge Impulse 固件。要更新固件：

1. [下载最新的 Edge Impulse 固件](https://files.seeedstudio.com/wiki/SenseCAP-A1101/ei_sensecap_vision_ai.uf2.zip)并解压以获得 **firmware.uf2** 文件。

2. 通过 USB Type-C 数据线再次将 A1101 连接到 PC，并双击 A1101 上的 **Boot** 按钮进入**大容量存储模式**。

3. 之后您将在文件资源管理器中看到一个新的存储驱动器显示为 **SENSECAP**。将 **firmware.uf2** 文件拖放到 SENSECAP 驱动器中。

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

复制完成后，**SENSECAP** 驱动器将消失。这是我们检查复制是否成功的方法。

### 步骤 3. 设置密钥

从命令提示符或终端运行：

```
edge-impulse-daemon
```

这将启动一个向导，要求您登录并选择一个 Edge Impulse 项目。如果您想切换项目，请使用 `--clean` 参数运行该命令。

或者，最新版本的 Google Chrome 和 Microsoft Edge 可以直接从您的 A1101 收集数据，无需 Edge Impulse CLI。更多信息请参见[这篇博客文章](https://www.edgeimpulse.com/blog/collect-sensor-data-straight-from-your-web-browser)。

### 步骤 4. 验证设备已连接

就是这样！您的设备现在已连接到 Edge Impulse。要验证这一点，请转到[您的 Edge Impulse 项目](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1)，然后点击**设备**。设备将在此处列出。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p9.png"/></div>

## 从 A1101 - Vision AI 收集数据

完成所有设置后，您现在可以通过以下教程构建并运行您的第一个机器学习模型：

- [目标检测](https://docs.edgeimpulse.com/docs/tutorials/object-detection)。
- [使用 FOMO 计数对象](https://docs.edgeimpulse.com/docs/tutorials/detect-objects-using-fomo)。

可以直接从工作室捕获板载摄像头的帧：

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p16.png"/></div>

最后，一旦模型训练完成，就可以轻松部署到 A1101 – Vision AI 模块开始推理！

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p17.png"/></div>

## 将模型部署到 A1101 - Vision AI

构建机器学习模型并从 Edge Impulse Studio 下载 Edge Impulse 固件后，按照[更新 Edge Impulse 固件部分](https://docs.edgeimpulse.com/docs/development-platforms/officially-supported-mcu-targets/seeed-sensecap-a1101#2.-update-edge-impulse-firmware)下的**步骤 1 和 2**，将模型 uf2 部署到 SenseCAP - Vision AI。
将 **firmware.uf2** 文件从 EDGE IMPULSE 拖放到 **SENSECAP** 驱动器。

当您在本地界面上运行时：

```
edge-impulse-daemon --debug
```

它会要求您点击一个URL，然后您将在设备上看到摄像头的实时预览。

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p33.png"/></div>

## 在SenseCap Mate上配置您的模型

- 下载[SenseCAP Mate](https://wiki.seeedstudio.com/cn/Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP/#docusaurus_skipToContent_fallback)
  - [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
  - [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)
- 打开SenseCAP Mate并登录

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p10.png"/></div>

- 在**配置**界面下，选择**Vision AI Sensor**

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p11.jpg"/></div>

- 按住SenseCap A1101上的配置按钮3秒钟以进入蓝牙配对模式

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p12.jpg"/></div>
<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p13.jpg"/></div>

- 点击**设置**，它将开始扫描附近的SenseCAP A1101设备- 转到**设置**并确保选择了**Object Detection**和**User Defined 1**。如果没有，请选择它并点击**发送**

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p14.jpg"/></div>

- 转到**通用**并点击**检测**

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p15.jpg"/></div>

- [点击这里](https://files.seeedstudio.com/grove_ai_vision/index.html)打开摄像头流的预览窗口

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p31.png"/></div>

- 点击**连接**按钮。然后您将在浏览器上看到一个弹出窗口。选择**SenseCAP Vision AI - Paired**并点击**连接**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p32.png"/></div>

- 使用预览窗口查看实时推理结果！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.png"/></div>

例如，如上所示，猫被检测到并在它们周围有边界框。这里"0"对应于同一类别的每次检测。如果您有多个类别，它们将被命名为0,1,2,3,4等等。此外，每个检测到的苹果的置信度分数（上述演示中为0.72）也会显示！

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
