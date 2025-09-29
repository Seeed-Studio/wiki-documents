---
description: 以太网扩展板 V2.0
title: 以太网扩展板 V2.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Ethernet_Shield_V2.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: 以太网扩展板 V2.0‏‎
category: Discontinued
bzurl:
oldwikiname: Ethernet_Shield_V2.0‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Ethernet_Shield_V2-0
sku:
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/IMG_0042.jpg)

您的以太网扩展板现在得到了全面更新！这款扩展板通过高规格的以太网控制器 W5200 为您提供即时的互联网连接，缓冲区大小是 v1.0 的两倍，支持多达八个同时的 TCP/UDP 连接。包含的 SD 卡槽支持需要存储大量数据的应用，如物联网数据记录。由于采用了低矮的 RJ45 接口，您可以灵活地在这个以太网扩展板上添加大多数扩展板。

型号：[SLD91000P](https://www.seeedstudio.com/depot/w5200-ethernet-shield-p-1577.html)

## 特性 ##

- 高速以太网控制器 W5200

- SPI 接口

- 32 KB 内部缓冲区

- 小型 RJ45 以太网端口

- 支持多达八个同时的 TCP/UDP 连接

- 便捷的 SD 卡功能

- 预制的 I2C 和 UART Grove 端口

## 接口 ##

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Ethernet_Interface.jpg)

**硬件配置**

- RJ45：以太网端口；

- IC HX1198：10/100BASE-T 信号端口；

- IC W5200：硬件 TCP/IP 以太网控制器；

- U3：IC CJ117，低压差线性稳压器；

- U6：IC 74VHC125PW，四路缓冲器；

- 复位按键：按下时复位以太网扩展板和 Arduino；

- SD 卡：支持 FAT16 或 FAT32 格式的 Micro SD 卡；最大存储容量为 2GB。

**Arduino 上的引脚使用**

- D4：SD 卡片选

- D10：W5200 片选

- D11：SPI MOSI

- D12：SPI MISO

- D13：SPI SCK

**注意：**

W5200 和 SD 卡都通过 SPI 总线与 Arduino 通信。引脚 10 和引脚 4 分别是 W5200 和 SD 卡槽的片选引脚。它们不能用作通用 I/O。

## 使用方法 ##

我们将构建一个简单的 Web 服务器，响应客户端请求并将 A0 到 A5 的读数存储到 SD 卡中。

**步骤 1：连接**

1. 将以太网扩展板 v2.0 安装到您的 Arduino 上；

2. 使用标准以太网线将扩展板连接到您的计算机或网络集线器或路由器；

3. 通过 USB 线将 Arduino 连接到 PC；

4. 将 SD 卡插入 SD 卡槽。

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/IMG_0039.jpg)

**步骤 2：上传程序**

1.下载库文件：[以太网扩展板 V2.0 库](https://github.com/Seeed-Studio/Ethernet_Shield_W5200)  
注意：适用于 1.0.x IDE 的已弃用/旧库：[链接](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_Library.zip)。

2.解压并将其放入 Arduino IDE 的库文件夹中，路径为：..\arduino-1.0.1\libraries。

3.重启 Arduino IDE。

4.通过路径打开示例 "WebServerWithSD"：文件 --> 示例 --> EthernetV2.0 --> WebServerWithSD。此示例展示如何构建一个简单的 Web 服务器，在收到请求时显示模拟引脚 A0 到 A5 的读数。然后将这些读数存储到 SD 卡中。

**注意：**

这个新库涵盖了 Arduino IDE 内置以太网库中包含的所有功能。您可以像使用之前的以太网库一样使用其他示例。

5.将程序上传到 Arduino。如果您不知道如何上传代码，请点击这里。

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Open_WebSeverWithSD_code.jpg)

在这段代码中，我们定义了引脚 4 作为 SD 卡片选端口，引脚 10 作为 W5200 片选端口。

首先，如果有客户端请求访问此服务器，它将向该客户端发送一个链接。然后将每个模拟输入引脚的值发送到网络。

最后，您可以通过打开 SD 卡文件查看每个模拟引脚的值。

**步骤 3：结果**

打开 Web 浏览器并输入您的控制器的 IP 地址。这取决于您的本地网络，但通常是 192.168.168.178。然后您应该会看到 A0 到 A5 的读数弹出，如下所示。

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Ethernet_Score.jpg)

要检查 SD 卡的情况，请打开串口监视器。您可以使用 Arduino IDE 的内置串口监视器或像我们一样使用串口监视器工具。打开串口监视器后，您可以读取文件 "test.txt" 的内容，我们创建这个文件来存储模拟引脚的读数。

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/WebServerWithSD_Result.jpg)

**注意：**

1）确保以太网扩展板和您的计算机在同一个本地网络中。

2）一旦代码成功上传，您可以断开板子与计算机的连接并为其提供独立电源，让它独立运行。

## 相关项目 ##

很遗憾，我们在[Recipe](https://www.seeedstudio.com/recipe/)中还没有任何关于以太网扩展板的演示。

发布您关于以太网扩展板的精彩项目来**赢取$100优惠券！** 请随时联系我们：**recipe@seeed.cc**

这里我们介绍一些关于[LinkIt ONE](https://www.seeedstudio.com/depot/LinkIt-ONE-p-2017.html)的项目。

### 什么是LinkIt ONE ###

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Linkit-one-page.jpg)

LinkIt ONE开发板是一个开源、高性能的板子，用于可穿戴设备和物联网设备的原型制作。

它基于世界领先的可穿戴设备SoC，联发科Aster (MT2502)，结合高性能Wi-Fi (MT5931)

和GPS (MT3332)芯片组，为您提供对联发科LinkIt所有功能的访问。

它还提供与Arduino板类似的引脚输出功能，使您能够轻松连接各种传感器、外设和Arduino扩展板。

### LinkIt ONE物联网演示 ###

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/Seeed-recipe-77-20141020151546.jpg)

这是一个由LinkIt ONE制作的物联网演示。

通过这个演示，我们可以：

- 在OLED屏幕上显示家庭温度、湿度、亮度、音量控制数据收集

- 云服务，数据上传到云平台Xively，实时监控

- 数据保留，用于查看数据随时间的变化

- 通过发送消息远程控制家用电器

- 台灯、3D打印，由您的手机控制

[我想制作它](https://www.seeedstudio.com/recipe/77-linkit-one-iot-demo.html)。

### 使用LinkIt ONE制作品客薯片罐天线 ###

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/img/5515ae26588ec.jpg)

用品客薯片罐制作一个聚焦天线。

[我想制作它。](https://www.seeedstudio.com/recipe/177-pringles-can-antenna-with-a-linkit-one.html)

[更多LinkIt ONE的精彩项目](https://www.seeedstudio.com/recipe/index.php?m=Home&amp;controller=Recipe&amp;action=productDetail&amp;id=2)

### 与我们分享您的精彩项目 ###

生而具有制作和分享的精神，这是我们相信成就创客的品质。

也正因为如此，开源社区才能像今天这样繁荣。

无论您是什么身份，制作了什么，黑客、创客、艺术家或工程师。

只要您开始与他人分享您的作品，您就成为了开源社区的一部分，您就在做出自己的贡献。

现在在[Recipe](https://community.seeedstudio.com/projects.html#recipe)上与我们分享您的精彩项目，赢得成为Seeed核心用户的机会。

- 核心用户，是那些对Seeed产品表现出高度兴趣并在Recipe上做出重要贡献的人。

- 我们与核心用户在新产品开发中合作，换句话说，核心用户将有机会在Seeed任何新产品正式发布之前体验它们，作为回报，我们期望他们提供有价值的反馈来帮助我们改进产品性能和用户体验。在大多数情况下，当我们的核心用户有一些制作东西的好想法时，我们会提供硬件组件、PCBA服务以及技术支持。此外，与核心用户进一步的商业合作是非常可能的。

获取更多关于核心用户的信息请发邮件至：[recipe@seeed.cc](mailto:recipe@seeed.cc)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[库文件]**[以太网扩展板 V2.0 库文件](https://github.com/Seeed-Studio/Ethernet_Shield_W5200)
- **[库文件]**[已弃用/旧版本的以太网扩展板 V2.0 库文件](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_Library.zip)
- **[Eagle]**[以太网扩展板 V2.0 eagle 文件](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Ethernet_Shield_eagle_files.zip)
- **[PDF]**[以太网扩展板 v2.0 PCB](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/Ethernet%20Shield%20v2.0.pdf)
- **[PDF]**[以太网扩展板 v2.0 原理图](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/Ethernet%20Shield%20v2.0%20sch.pdf)
- **[数据手册]**[W5200 数据手册.pdf](https://files.seeedstudio.com/wiki/Ethernet_Shield_V2.0/res/W5200_Datasheet.pdf)

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