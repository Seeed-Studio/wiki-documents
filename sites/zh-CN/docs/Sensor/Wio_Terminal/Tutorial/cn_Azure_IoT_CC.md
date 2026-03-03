---
title: Codecraft 连接 Azure IoT 与 Wio Terminal
nointro:
keywords:
  - Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/Azure_IoT_CC
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Codecraft 连接 Azure IoT 与 Wio Terminal

## 介绍

在这里我们将向您展示如何基于 Wio Terminal 将 Codecraft 与 Azure IoT 连接，并将传感器应用到物联网项目中。[Codecraft](https://ide.tinkergen.com/) 是由 Seeed 开发的可在线和离线使用的图形化编程应用程序。[Azure IoT](https://apps.azureiotcentral.com/) 是由微软开发的托管式物联网应用平台，安全可靠，可随着您的业务增长而扩展，并与您现有的业务应用程序集成。

<div align="center"><img src="https://files.seeedstudio.com/wiki/CCandAzure/jihe.png" /></div>

## 入门指南

### 硬件

**所需硬件**

在此演示中，您需要以下设备：

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) x1
- Type-C 数据线 x1
- 计算机 x1

**硬件连接**

通过 Type-C 数据线连接到计算机。

### 软件

**所需软件**

- [Codecraft](https://ide.tinkergen.com/)
- [Azure IoT](https://apps.azureiotcentral.com/)

### 教程

在这里我们将向您展示如何在 Codecraft 中应用 Wio Terminal，然后将 Codecraft 与 Azure IoT 连接以训练机器学习模型并使用它。该项目基于 Arduino 平台，这意味着需要 Arduino IDE 和各种 Arduino 库。如果这是您第一次使用 Wio terminal，我们推荐一个快速[开始使用 Wio Terminal](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/) 的指南。

- **步骤 1** 将 Wio Terminal 与 PC 连接。
- **步骤 2** 打开 [Codecraft 网站](https://ide.tinkergen.com/) 并与 Wio Terminal 连接

选择 "Wio Terminal"

![](https://files.seeedstudio.com/wiki/CCandAzure/cc1.png)

选择 "Connect"，如果这是您第一次使用 Codecraft，可能需要安装 CodecraftAssistant。

![](https://files.seeedstudio.com/wiki/CCandAzure/cc2.png)

![](https://files.seeedstudio.com/wiki/CCandAzure/cc3.png)

- **步骤 3** 将左侧的积木块拖拽到右侧，构建如下完整程序：

![](https://files.seeedstudio.com/wiki/CCandAzure/cc5.png)

如您所见，这里需要设置 Wi-Fi 和 **Azure IoT Central scope id**。Wi-Fi 必须与您的环境相同，下一步我们将填写 Azure IoT 信息。

![](https://files.seeedstudio.com/wiki/CCandAzure/cc6.png)

- **步骤 4** 打开 [Azure 网站](https://ide.tinkergen.com/) 并**创建新应用**

点击左侧的 **"Build"**，这里的信息是自定义的，不是很重要。

![](https://files.seeedstudio.com/wiki/CCandAzure/az.png)

- **步骤 5** 点击 **"Administration"-->"Device connection"-->"SAS-IoT-Device"** 添加 Wio Terminal

![](https://files.seeedstudio.com/wiki/CCandAzure/az3.png)

- **步骤 6** 复制我们在 Codecraft 中需要的信息并粘贴到我们构建的程序中

这里是 Codecraft 所需的关键信息 **"ID Scope"、"Primary key"、"Device ID"**

![](https://files.seeedstudio.com/wiki/CCandAzure/az5.png)

![](https://files.seeedstudio.com/wiki/CCandAzure/az6.png)

- **步骤 7** 上传程序并查看结果

点击 "upload" 上传程序

![](https://files.seeedstudio.com/wiki/CCandAzure/ccaz4.png)

有时上传需要很长时间，请耐心等待。

转到 Azure IoT 页面并点击 "Device" --> "SAS-IoT-Device"

结果应该如下：

![](https://files.seeedstudio.com/wiki/CCandAzure/ccaz5.png)

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