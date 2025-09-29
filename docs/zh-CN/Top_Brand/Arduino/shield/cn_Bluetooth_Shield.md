---
description: 蓝牙扩展板
title: 蓝牙扩展板
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Bluetooth_Shield
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---
name: 蓝牙扩展板
category: Discontinued
bzurl:
oldwikiname: Bluetooth_Shield
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Bluetooth-Shield
sku: 113030002
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield.jpg)

蓝牙扩展板集成了一个串口蓝牙模块。它可以轻松与Arduino/Seeedstudio配合使用，实现透明的无线串口通信。您可以从Arduino D0到D7中选择两个引脚作为软件串口与蓝牙扩展板通信（D0和D1是硬件串口）。该扩展板还有两个Grove连接器（一个是数字接口，另一个是模拟接口），供您安装Grove模块。

型号：[SLD63030P](https://www.seeedstudio.com/depot/bluetooth-shield-p-866.html?cPath=19_21)

## 特性 ##

- 输入电压：3.3V

- 波特率：9600, 19200, 38400, 57600, 115200, 230400, 460800

- Seeeduino/Arduino兼容

- 室内无障碍通信距离可达10米

- UART接口（TTL），可编程波特率（已安装SPP固件）

- 默认波特率：38400，数据位：8，停止位：1，校验：无校验

- 默认配对码："0000"

- 完整的配置命令集

- 板载PCB天线

- FCC Part 15认证

## 接口功能 ##

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/BluetoothInterface.jpg)

| 焊盘类型  |   描述 |
|---|---|
| PIO1  |   蓝牙模块的状态指示端口，可通过Arduino A1端口读取：低电平-断开连接，高电平-已连接。 |
|  BT_RX  |  蓝牙模块的UART数据输入。  |
|  BT_TX  |   蓝牙模块的UART数据输出。 |
|   两个Grove连接器 |   一个是数字接口（D8和D9），另一个是I2C/模拟接口（A4和A5）。 |

## 演示1：两个蓝牙扩展板连接 ##

此演示将向您展示如何连接两个蓝牙扩展板。

您需要两块[Seeeduino V3.0](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7)、一个[Grove - 按钮](https://www.seeedstudio.com/depot/grove-button-p-766.html?cPath=85_50)和一个[Grove - LED](https://www.seeedstudio.com/depot/grove-led-p-767.html?cPath=81_35)。

一个蓝牙扩展板作为主设备，另一个作为从设备，主设备连接一个按钮，从设备连接一个LED。

当按钮被按下时，从设备中的LED将改变状态。

### 硬件安装 ###

首先，我们选择一个蓝牙扩展板作为主设备，并将Grove - 按钮连接到此蓝牙扩展板的D8、D9。

对于从设备，我们将Grove - LED连接到它的D8、D9Grove接口。并且D7作为TX，D6作为RX，如下所示：

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_2_connect.jpg)

### 下载代码并上传 ###

1. 您可以在github上下载代码，点击[这里](https://github.com/Seeed-Studio/Bluetooth_Shield_Demo_Code)，然后将其解压到Arduino的libraries文件夹中。

2. 打开Arduino IDE，打开文件 -> 示例 -> Bluetooth_Shield_Demo_Code -> Master_Button，然后您可以打开主设备的代码

3. 打开Arduino IDE，打开文件 -> 示例 -> Bluetooth_Shield_Demo_Code -> Slave_led，然后您可以打开从设备的代码

4. 点击上传来上传代码，如果您在如何开始使用Arduino方面有任何问题，请点击[这里](https://seeeddoc.github.io/Getting_Started_with_Seeeduino/)获取帮助。

 ![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_ide_1.jpg)

### 检查结果 ###

1. 完成向主设备和从设备上传代码后，同时重置两个设备

2. 您可以看到红色和绿色LED闪烁，表示设备正在初始化和连接。

3. 大约几秒钟后，只有绿色LED闪烁，表示主设备和从设备已连接。

4. 现在您可以按下按钮，然后LED将改变其状态。

**注意**：如果没有观察到上述现象，请尝试拔掉电源并重新插入。

## 演示 2：连接到智能手机 ##

此演示将向您展示如何将蓝牙扩展板连接到智能手机。

我们需要一个 Seeeduino V3.0、一个 Grove - 温度传感器，以及一部具有蓝牙功能的智能手机。

通过蓝牙 SPP 应用程序，我们向蓝牙扩展板发送一个 't'，然后它会返回温度值。

### 硬件安装 ###

将 Grove - 温度传感器插入蓝牙扩展板的 A4,A5 Grove 接口。

TX 连接到 D7，RX 连接到 D6。如下所示：

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_Phone.jpg)

### 下载代码并上传 ###

1. 您可以在 github 上下载代码，点击[这里](https://github.com/Seeed-Studio/Bluetooth_Shield_Demo_Code)，然后将其解压到 Arduino 的 libraries 文件夹中。

2. 打开 Arduino IDE，文件 -> 示例 -> Bluetooth_Shield_Demo_Code -> Slave_Temperature，然后您可以打开代码

3. 点击上传来上传代码，如果您在如何启动 Arduino 方面有任何问题，请点击[这里](https://seeeddoc.github.io/Getting_Started_with_Seeeduino/)获取帮助。

 ![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_Demo2.jpg)

### 下载 SSP 应用程序 ###

这里我们使用一部安卓手机，我的是小米 2A，打开 Google Play，搜索 bluetooth spp，您可以找到许多结果。

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_Find_spp.png)

大多数这些应用程序都很有用，只需选择一个并尝试。

### 获取温度 ###

安装 SPP 应用程序后，尝试将其连接到 SeeedBTSlave，配对码是："0000"

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_App_1.png)

连接成功后，向 SeeedBTSlave 发送 't'，现在您可以获取温度了：

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_get_temp.png)

## 相关项目 ##

很遗憾，我们在[Recipe](https://www.seeedstudio.com/recipe/)中还没有任何关于蓝牙扩展板的演示。

发布您关于 CAN BUS 扩展板的精彩项目，赢取 $100 优惠券！请随时联系我们：[recipe@seeed.cc](mailto:recipe@seeed.cc)

这里我们介绍一些关于[串口蓝牙模块](https://www.seeedstudio.com/recipe/255-control-multiple-servo-motor-from-android-app.html)的项目。

### 什么是串口蓝牙模块 ###

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Serial_Port_Bluetooth_Module_.jpg)

串口蓝牙，有线串口连接的直接替代品，透明使用。您可以简单地将其用作串口替代品，在 MCU 和 GPS、PC 与您的嵌入式项目等之间建立连接。

### 串口蓝牙模块演示 ###

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Control_Multiple_servo_Motor_From_android_app.jpg)

这是一个关于如何通过串口蓝牙模块从安卓应用程序控制多个舵机的完整教程。

[我想制作它](https://www.seeedstudio.com/recipe/255-control-multiple-servo-motor-from-android-app.html)。

### 与我们分享您的精彩项目 ###

天生具有制作和分享的精神，这是我们相信成就创客的品质。

也正因为如此，开源社区才能像今天这样繁荣。

无论您是什么身份，制作了什么，黑客、创客、艺术家还是工程师。

只要您开始与他人分享您的作品，您就成为了开源社区的一部分，您就在做出自己的贡献。

现在在[Recipe](https://www.seeedstudio.com/recipe/)上与我们分享您的精彩项目，赢得成为 Seeed 核心用户的机会。

- 核心用户，是那些对 Seeed 产品表现出高度兴趣并在 Recipe 上做出重要贡献的用户。

- 我们与核心用户在新产品开发中合作，换句话说，核心用户将有机会在 Seeed 的任何新产品正式发布之前体验它们，作为回报，我们期望他们提供有价值的反馈，帮助我们改进产品性能和用户体验。在大多数情况下，当我们的核心用户有一些制作的好想法时，我们会提供硬件组件、PCBA 服务以及技术支持。此外，与核心用户进一步的商业合作也是非常可能的。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BT_shield_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[EAGLE]**[Eagle格式的原理图和布局](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BT_shield_eagle_files.zip)
- **[PDF]**[蓝牙扩展板原理图](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BlueTooth%20Shield%20SCH.pdf)
- **[PDF]**[蓝牙扩展板PCB](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BlueTooth%20Shield%20PCB.pdf)
- **[库文件]**[Arduino 1.0蓝牙扩展板库](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BluetoothShieldDemoCode_For_Arduino1.0.zip)
- **[说明]**[蓝牙软件说明](https://seeeddoc.github.io/Bluetooth_Shield/res/BTSoftware_Instruction.pdf)
- **[数据手册]**[蓝牙模块数据手册](https://seeeddoc.github.io/Bluetooth_Shield/res/Bluetooth_module.pdf)
- **[连接]** [逐步设置两个BluetoothBee之间的连接](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687)

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