---
description: Grove - 串口相机套件
title: Grove - 串口相机套件
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Serial_Camera_Kit
last_update:
  date: 03/23/2024
  author: WuFeifei
---
<!-- ---
name: Grove - Serial Camera Kit
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Serial-Camera-Kit-p-1608.html
oldwikiname:  Grove - Serial Camera Kit
prodimagename: GSCK_Introduction.jpg
surveyurl: https://www.research.net/r/Grove_Serial_Camera_Kit
sku:  101020000
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Introduction.jpg)

Grove - Serial Camera Kit 包括一个控制板和两个可互换镜头，一个是标准镜头，另一个是广角镜头。这是一款非常适合以 Arduino 为中心的图像识别项目的相机，因为 30 万像素对于 Arduino 来说并不会造成过大的负担，因此可以实现实时图像识别。为了让这个套件更加有趣和可玩，套件中附带了两种规格的镜头。标准镜头适用于常规拍照，而广角镜头特别适合监控项目。

## 规格

---

* 输入电压：5V

* 像素：30万
* 分辨率：640*480，320*240，160*120
* UART 波特率：9600~115200
* 通信方式：RS485 和 RS232
* 照片 JPEG 压缩，可选高、中、低三个等级
* 自动增益控制（AGC）
* 自动曝光事件控制
* 自动白平衡控制
* 可调焦距

## 演示

---
本演示将向您展示如何使用 Grove - Serial Camera Kit。我们需要一个 [Seeeduino](https://www.seeedstudio.com/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7)，一个 [SD Card Shield](https://www.seeedstudio.com/sd-card-shield-v40-p-1381.html?cPath=105) 和一个 [Grove - Button](https://www.seeedstudio.com/Grove-Button-p-766.html)。当按下按钮时，我们将拍摄一张照片并将其保存到 SD 卡中。

按照以下步骤操作，您可以轻松运行您的 Grove - Serial Camera Kit。那么，我们开始吧。

### 硬件安装

我们可以发现 SD Card Shield V4.0 上有两个 Grove 接口，所以我们不需要 Base Shield，只需将 Button 插入 I2C Grove 接口，将 Camera 插入 Uart Grove 接口即可。

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Hardware.jpg)

### 下载代码并上传

您可以在 github 上下载演示代码，点击 [这里](https://github.com/Seeed-Studio/Grove_Serial_Camera_Kit)

然后上传代码，它就可以工作了。

### 拍照

上传演示代码后，我们现在就可以拍照了，只需按下按钮，然后等待几秒钟，照片就会保存到 SD 卡中。

下面的图片是使用直角镜头拍摄的我的办公室天花板。

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_60.jpg)

### 更换镜头

还有一个广角镜头，我将向您展示如何更换它。

首先，您需要一把螺丝刀：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step1.jpg)

然后，拧开镜头侧面的螺丝：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step2.jpg)

尝试旋转镜头，可以将其拧出：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step3.jpg)

我们使用广角镜头拍照，同样，这也是我办公室的天花板！

与之前的天花板照片相比，你发现了什么不同吗？

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_90.jpg)

### 如何调焦

镜头拧入的不同深度代表不同的焦距，您可以尝试一下。

## 资源

* **[库文件]** [演示代码](https://github.com/Seeed-Studio/Grove_Serial_Camera_Kit)
* **[数据手册]** [CJ OV528](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/res/cj-ov528_protocol.pdf)

## 项目

**Grove 相机 -> PHPoC -> Web 应用程序** 这个项目展示了如何从 Grove 相机读取数据，并通过 WebSocket 将数据发送到 Web 应用程序。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/phpoc_man/grove-camera-phpoc-web-application-1dfd63/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
