---
title: 将 Azure IoT 与 Wio 终端连接起来的 Codecraft
nointro:
keywords:
  - Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/Azure_IoT_CC
last_update:
  date: 3/08/2024
  author: jessie
---

# Codecraft连接Wio Terminal与Azure IoT

## 简介

在这里，我们将展示如何将Codecraft与基于Wio Terminal的Azure IoT连接，并将传感器应用于物联网项目。 [Codecraft](https://ide.tinkergen.com/) 是由Seeed开发的可在线和离线使用的图形化可编程应用程序。 [Azure IoT](https://apps.azureiotcentral.com/)是由Microsoft开发的托管物联网应用平台，具有安全性，随着业务增长而扩展，并与现有的业务应用集成。

<div align="center"><img src="https://files.seeedstudio.com/wiki/CCandAzure/jihe.png" /></div>

## 入门指南

### 硬件

**所需硬件**

在此演示中，您将需要以下设备：

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) x1
- Type-C 数据线 x1
- 计算机 x1

**硬件连接**

通过Type-C数据线将其连接到计算机。

### 软件

**所需软件**

- [Codecraft](https://ide.tinkergen.com/)
- [Azure IoT](https://apps.azureiotcentral.com/)

### 教程

在这里，我们将展示如何在Codecraft中使用Wio Terminal，并将Codecraft与Azure IoT连接，以训练机器学习模型并使用它。该项目基于Arduino平台，这意味着需要Arduino IDE和各种Arduino库。如果您是第一次使用Wio Terminal，请查看一个快速入门指南来 [使用 Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

- **步骤 1**  连接Wio Terminal与PC。
- **步骤 2** 打开 [Codecraft 网站](https://ide.tinkergen.com/) 并与Wio Terminal连接。

选择 "Wio Terminal"

![](https://files.seeedstudio.com/wiki/CCandAzure/cc1.png)

选择 "Connect" , 这可能需要安装CodecraftAssistant（如果这是您第一次使用Codecraft）。

![](https://files.seeedstudio.com/wiki/CCandAzure/cc2.png)

![](https://files.seeedstudio.com/wiki/CCandAzure/cc3.png)

- **步骤 3** 从左侧拖动块以构建一个完成的程序，如下所示：

![](https://files.seeedstudio.com/wiki/CCandAzure/cc5.png)

正如您所看到的，这里需要设置Wi-Fi和 **Azure IoT Central 范围 id** Wi-Fi必须与您的环境相同，下一步我们将填写Azure IoT信息。

![](https://files.seeedstudio.com/wiki/CCandAzure/cc6.png)

- **步骤 4** 打开 [Azure 网站](https://ide.tinkergen.com/) 并 **creat a new app**

点击左侧的 **"Build"** ，这里的信息是自定义的，并不是非常重要。

![](https://files.seeedstudio.com/wiki/CCandAzure/az.png)

- **步骤 5** 点击 **“Administration”-->"Device connection"-->"SAS-IoT-Device"** 来添加Wio Terminal。

![](https://files.seeedstudio.com/wiki/CCandAzure/az3.png)

- **步骤 6** 将我们在Codecraft中需要的信息复制并粘贴到我们构建的程序中。

以下是Codecraft所需的基本信息 **"ID Scope", "Primary key", "Device ID"** 。

![](https://files.seeedstudio.com/wiki/CCandAzure/az5.png)

![](https://files.seeedstudio.com/wiki/CCandAzure/az6.png)

- **步骤 7** 上传程序并查看结果。

点击 "upload" 并上传程序。

![](https://files.seeedstudio.com/wiki/CCandAzure/ccaz4.png)

有时上传需要很长时间，请耐心等待。

转到Azure IoT页面，点击 "Device" --> "SAS-IoT-Device"

结果应如下所示：

![](https://files.seeedstudio.com/wiki/CCandAzure/ccaz5.png)

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
