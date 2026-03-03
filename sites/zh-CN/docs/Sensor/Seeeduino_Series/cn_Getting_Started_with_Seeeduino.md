---
description: Seeeduino 入门指南
title: Seeeduino 入门指南
keywords:
- Seeeduino_Series
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Getting_Started_with_Seeeduino
last_update:
  date: 1/12/2022
  author: hushuxu
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Hello_world.jpg" alt="pir" width={600} height="auto" /></p>

### **0. Hello world**

通常，当我们开始学习一门编程语言时，老师会教我们编写一个简单的 Hello World 示例。这只是一个基础的入门介绍，但却是一个非常重要的过程。虽然您可能对 Arduino 还不熟悉，但不用担心。您可以学习 Arduino 的 hello world：点亮一个 LED。
现在我们以 Seeeduino 为例来学习如何点亮一个由数字 13 引脚控制的 LED。在此之前，请确保您已经下载了 Arduino 环境并成功安装了 Seeeduino 驱动程序。如果没有，请点击这里学习具体步骤。

### 1. 将 Seeeduino 连接到 PC

使用 USB 线将 Seeeduino 开发板连接到您的计算机。绿色电源 LED（标记为 PWR）应该会亮起。
（当 Seeeduino 独立工作时，您可以选择 USB 或电源适配器为 Seeeduino 供电。）

### 2. 打开 Blink 示例

打开 LED 闪烁示例程序：**File&gt;Examples&gt;01.Basics&gt;Blink**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started1.png" alt="pir" width={600} height="auto" /></p>

### 3. 选择您的开发板

您需要在 Tools &gt; Board 菜单中选择与您的 Arduino 对应的条目。这里我们需要选择 ATmega328。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started2.png" alt="pir" width={600} height="auto" /></p>

### 4. 选择您的串口

从 Tools | Serial Port 菜单中选择 Arduino 开发板的串行设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started3.png" alt="pir" width={600} height="auto" /></p>

### 5. 上传程序

现在，只需点击环境中的"Upload"按钮。等待几秒钟 - 您应该会看到开发板上的 RX 和 TX LED 闪烁。如果上传成功，状态栏中会出现"Done uploading."消息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started4.png" alt="pir" width={600} height="auto" /></p>

### 6. 结果

上传完成几秒钟后，您应该会看到开发板上的引脚 13 (L) LED 开始闪烁（橙色）。如果是这样，恭喜您！您已经成功运行了 Arduino。

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