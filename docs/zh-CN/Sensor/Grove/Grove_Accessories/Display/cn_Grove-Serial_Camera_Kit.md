---
description: Grove - 串行摄像头套件
title: Grove - 串行摄像头套件
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Serial_Camera_Kit
last_update:
  date: 2/22/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Introduction.jpg)

Grove - 串行摄像头套件包括一个控制板和两个可互换镜头，一个是标准镜头，另一个是广角镜头。这是一款适用于以 Arduino 为中心的图像识别项目的优秀摄像头，因为 30 万像素不会对 Arduino 造成过大负担，从而实现实时图像识别。为了增加趣味性和可玩性，此套件中提供了两种规格的镜头。标准镜头适用于普通拍摄，而广角镜头特别适合监控项目。

## 规格

---

* 输入电压：5V

* 像素：300,000

* 分辨率：640*480、320*240、160*120

* UART 波特率：9600~115200

* 通信方式：RS485 和 RS232

* 照片 JPEG 压缩，可选高、中、低等级

* 自动增益控制（AGC）

* 自动曝光事件控制

* 自动白平衡控制

* 可调焦距

## 演示

---
本演示将向您展示如何使用 Grove - 串行摄像头套件。我们需要一个 [Seeeduino](https://www.seeedstudio.com/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7)、一个 [SD 卡扩展板](https://www.seeedstudio.com/sd-card-shield-v40-p-1381.html?cPath=105) 和一个 [Grove - 按钮](/cn/Grove-Button)。当按下按钮时，我们拍摄一张照片并将其保存到 SD 卡。

按照以下步骤逐步操作，您可以轻松运行您的 Grove - 串行摄像头套件。让我们开始吧。

### 硬件安装

我们可以发现 SD 卡扩展板 V4.0 上有两个 Grove 接口，因此我们不需要基座扩展板，只需将按钮插入 I2C Grove 接口，将摄像头插入 UART Grove 接口。

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Hardware.jpg)

### 下载代码并上传

您可以在 GitHub 上下载演示代码，点击 [这里](https://github.com/Seeed-Studio/Grove_Serial_Camera_Kit)。

然后上传代码，代码运行后即可使用。

### 拍摄照片

完成上传演示代码后，我们现在可以拍摄照片了。只需按下按钮，等待几秒钟，照片将保存到 SD 卡中。

以下图片是使用标准镜头拍摄的我办公室天花板。

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_60.jpg)

### 更换镜头

套件中还有一个广角镜头，我将向您展示如何更换它。

首先，您需要一个螺丝刀：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step1.jpg)

然后，拧下镜头侧面的螺丝：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step2.jpg)

尝试旋转镜头，它可以被拧下来：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step3.jpg)

我们使用广角镜头拍摄了一张照片，同样是我办公室的天花板！

与之前的天花板图片相比，发现有什么不同吗？

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_90.jpg)

### 如何调焦

镜头拧入的深度代表不同的焦距，您可以尝试调整。

## 资源

* **[库]** [演示代码](https://github.com/Seeed-Studio/Grove_Serial_Camera_Kit)
* **[数据手册]** [CJ OV528](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/res/cj-ov528_protocol.pdf)

## 项目

**Grove 摄像头 -> PHPoC -> Web 应用** 此项目展示了如何从 Grove 摄像头读取数据并通过 WebSocket 将数据发送到 Web 应用。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/phpoc_man/grove-camera-phpoc-web-application-1dfd63/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>