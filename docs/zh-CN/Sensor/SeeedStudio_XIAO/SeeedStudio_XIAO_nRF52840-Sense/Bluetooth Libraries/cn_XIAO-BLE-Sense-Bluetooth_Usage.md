---
description: 适用于 Seeed nRF52 开发板库
title: 适用于 Seeed nRF52 开发板库
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-Bluetooth_Usage
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# 蓝牙使用方法（Seeed nRF52 开发板库）

**Seeed Studio XIAO nRF52840** 和 **Seeed Studio XIAO nRF52840 Sense** 都支持蓝牙连接。本教程将介绍使用"Seeed nRF52 开发板库"的基本蓝牙功能。

## 入门指南

### 所需硬件

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) 或 [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x 支持蓝牙连接的智能手机
- 1 x USB Type-C 数据线

### 所需软件

- [nRF Connect for Mobile (Android)](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
- [LightBlue 应用 (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)

### 安装

> 由于我们使用的功能已经打包在"Seeed nRF52 开发板库"中，我们不需要安装其他第三方库。您可以跳过此步骤。

- **方法一**（此方法适用于上述两个代码库。）

由于您已经下载了 zip 库文件，请打开您的 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的 zip 文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**。这意味着库已成功安装。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>


- **方法二**（仅 ArduinoBLE 库可以这样安装。）

库管理器是从 Arduino IDE 版本 1.5 及更高版本（1.6.x）开始添加的。它位于"Sketch"菜单下的"Include Library"、"Manage Libraries..."中。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg" /></div>


当您打开库管理器时，您会发现一个可以一键安装的大型库列表。要为您的产品找到库，请搜索产品名称或关键词，如"k type"或"digitizer"，您想要的库应该会显示出来。点击所需的库，"Install"按钮将出现。点击该按钮，库应该会自动安装。安装完成后，关闭库管理器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRF.png" /></div>

## 应用示例

我们将在这里为您介绍蓝牙应用。

### 将 PC 键盘无线连接到手机

**步骤 1.** 启动 Arduino 应用程序。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>


**步骤 2.** 选择您的开发板型号并将其添加到 Arduino IDE。这里我们使用"Seeed nRF52 开发板库"。

> 有关开发板库安装，请参考[此教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)完成安装。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new.png" /></div>


**步骤 3.** 导航到 **"File -> Examples -> Adafruit Bluefruit nRF52 Libraries -> Peripheral -> blehid_keyboard"** 并打开"blehid_keyboard"示例文件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new1.png" /></div>


**步骤 4.** 点击"Upload"，然后打开 Arduino IDE 右上角的"monitor"。监视器将显示如下：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new3.png" /></div>


**步骤 5.** 在您的手机上打开"nRF Connect for Mobile"应用或"LightBlue"应用，同时确保您的手机已连接蓝牙。稍等片刻，您将发现一个名为"XIAO nRF52840"的设备被列出。

- 对于 **nRF Connect for Mobile APP**，应该是这样的：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new5.jpg" /></div>


- 对于 **LightBlue APP**，应该是这样的：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new4.jpg" /></div>


**步骤 6.** 简单点击设备，连接将自动完成。之后我们可以用 PC 键盘在监视器中输入字符，然后看看您的手机上会发生什么。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new6.gif" /></div>


## 更多内容？

如果您想尝试更多示例，可以导航到 `File > Examples > INCOMPATIBLE > ArduinoBLE` 并查看 **ArduinoBLE** 下的所有示例


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