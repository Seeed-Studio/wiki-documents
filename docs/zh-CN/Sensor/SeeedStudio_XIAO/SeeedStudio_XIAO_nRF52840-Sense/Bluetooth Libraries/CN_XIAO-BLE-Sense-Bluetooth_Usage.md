---
description: For Seeed nRF52 Boards Library
title: Seeed nRF52 Boards 蓝牙库
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-Bluetooth_Usage
last_update:
  date: 10/11/2023
  author: 赵桂莹
---

# 基于 Seeed nRF52 Boards Library 的蓝牙使用

Seeed Studio XIAO nRF52840**和**Seeed Studio XIAO nRF52840 Sense**都支持蓝牙连接。本wiki将介绍“Seeed nRF52板卡库”所使用的基本蓝牙功能。

## 开始

### 硬件准备

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) 或者 [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x 蓝牙智能手机
- 1 x USB Type-C cable

###  软件准备

- [nRF Connect for Mobile (Android)](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
- [LightBlue App (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)

### 安装

> 因为我们应用的函数被打包在“Seeed nRF52 Boards Library”中，所以我们不需要安装另一个第三方库。你可以跳过这一步。

- **方法一**(该方法在上述两个代码库中都可用)

既然你已经下载了zip库，打开你的Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**.选择你刚下载的zip文件，如果库安装正确，你将在通知窗口中看到 **Library added to your libraries** 库被添加到你的库中，这意味着库安装成功。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>


- **方法二** (只能安装ArduinoBLE库)

从Arduino IDE 1.5及以上版本(1.6.x)开始添加库管理器。它可以在` Sketch `菜单下的` Include Library `、` Manage Libraries…`中找到。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg" /></div>


当你打开库管理器时，你会发现一个一键安装的库列表。要为你的产品找到一个库，搜索产品名称或关键字，如` k type `或` digitizer `，你想要的库应该会显示出来。点击所需的库，` Install `按钮就会出现。单击该按钮，库应该会自动安装。安装完成后，关闭库管理器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRF.png" /></div>

## 应用实例

在这里，我们将为您介绍蓝牙的应用。

### 无线连接电脑键盘到手机

**Step 1.** 启动Arduino应用程序。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Step 2.** 选择您的开发板模型并将其添加到Arduino IDE中。这里我们使用“Seeed nRF52 Boards Library”。

> 关于电路板库的安装，请参阅 [本教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) 以完成安装。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new.png" /></div>

**Step 3.** 导航至 **"File -> Examples -> Adafruit Bluefruit nRF52 Libraries -> Peripheral -> blehid_keyboard"** 然后打开“blehid keyboard”示例文件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new1.png" /></div>

**Step 4.** 点击Upload，打开Arduino IDE右上角的“monitor”。显示器将显示为:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new3.png" /></div>

**Step 5.** 在您的手机上打开“nRF Connect for Mobile”应用程序或“LightBlue”应用程序，同时确保您的手机正在连接蓝牙。过一会儿，您将发现一个名为“XIAO nRF52840”的设备列表。

- 对于 **nRF Connect for Mobile APP** 来说，它应该是这样的:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new5.jpg" /></div>


- 对于 **LightBlue APP** 来说，它应该是这样的:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new4.jpg" /></div>

**Step 6.** 只需点击设备（device），连接就会自动完成。之后，我们可以用电脑键盘在显示器上输入字符，然后看看在你的手机上发生了什么。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new6.gif" /></div>


## 另外

如果您想尝试更多示例，您可以导航到 `File > Examples > INCOMPATIBLE > ArduinoBLE` ，并查看**ArduinoBLE**下的所有示例


## 技术支持和产品讨论

感谢您选择我们的产品!我们在这里为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
