---
description: 下载 Arduino 并安装 Arduino 驱动程序
title: 下载 Arduino 并安装 Arduino 驱动程序

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Download-Arduino-and-install-Arduino_Driver
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Arduino_quickstart.jpg)

## 下载 Arduino 环境

现在 Arduino IDE 可用于 Windows、Mac OS X 和 Linux。请点击下面的按钮下载。

![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

:::note
    我们建议使用最新版本的 Arduino IDE。
:::

## 设置 Arduino IDE

### 对于 Windows 和 Mac OS X

下载相应的软件，点击 setup.exe，然后按照说明操作即可。

### 对于 Linux

请访问 ![在 Linux 上安装 Arduino](http://playground.arduino.cc/Learning/Linux)

## 将 Seeeduino 连接到 PC

使用 USB 线将 Seeeduino 开发板连接到您的计算机。绿色电源 LED（标记为 PWR）应该亮起。

## 安装驱动程序

### 在 Windows 7 上为 Seeeduino 安装驱动程序

* 插入您的开发板并等待 Windows 开始其驱动程序安装过程。几分钟后，该过程将失败。
* 通过右键单击"我的电脑"并选择控制面板来打开设备管理器。

* 查看端口（COM 和 LPT）。您应该看到一个名为"USB Serial Port"的开放端口。右键单击"USB Serial Port"并选择"更新驱动程序软件"选项。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver1.jpg)

* 接下来，选择"浏览我的计算机以查找驱动程序软件"选项。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver2.jpg)

* 最后，选择名为"FTDI USB Drivers"的驱动程序文件，该文件位于 Arduino 软件下载的"Drivers"文件夹中。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver3.jpg)

<font color="red"><strong>注意：</strong>FTDI USB 驱动程序来自 Arduino。但是当您为其他控制器安装驱动程序时，例如 Xadow Main Board、Seeeduino Clio、Seeeduino Lite，您需要下载相应的驱动程序文件并保存它。然后选择您已下载的驱动程序文件。</font>

* 如果您已成功安装驱动程序，下面的对话框将自动出现。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver4.jpg)

* 您可以通过打开 Windows 设备管理器来检查驱动程序是否已安装。在端口部分查找"USB Serial Port"。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver5.jpg)

* 您也可以在 Arduino 环境中看到串行端口。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver6.jpg)

### 在 Windows 8 上为 Seeeduino 安装驱动程序

在使用 Windows 8 安装驱动程序之前，您应该保存正在编辑的这些文件，因为在操作过程中会有几次断电。

* 按"Windows 键"+"R"

* 输入 shutdown.exe /r /o /f /t 00

* 点击"确定"按钮。

* 系统将重启到"选择一个选项"屏幕

* 从"选择一个选项"屏幕中选择"疑难解答"

* 从"疑难解答"屏幕中选择"高级选项"

* 从"高级选项"屏幕中选择"Windows 启动设置"

* 点击"重启"按钮

* 系统将重启到"高级启动选项"屏幕

* 选择"禁用驱动程序签名强制"

* 系统启动后，您可以像在 Windows 中一样安装 Arduino 驱动程序

### 在 Mac OS 上为 Seeeduino 安装驱动程序

* 进入页面：[https://www.ftdichip.com](https://www.ftdichip.com)。

* 下载适用于 Mac OS X 版本的驱动程序，名为 2.2.18（32位）

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver7.png)

* 打开您刚刚下载的驱动程序文件，并双击 FTDIUSBSerialDriver_10_4_10_5_10_6_10_7.mpkg

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver8.png)

* 双击后，您将看到一个安装程序窗口。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver9.png)

* 点击"继续"。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver10.png)

* 如果您已成功安装驱动程序，您可以看到下面的对话框。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver11.png)

* 使用 Seeeduino 进行测试

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver12.png)

-----------------------------

# 添加

## 安装驱动程序

首先，您需要：

* **获取一根 Micro-USB 数据线**
  * 您首先需要一根 Micro-USB 数据线；安卓手机的数据线就可以。
如果您找不到，可以在[这里](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100)购买一根。

* **连接开发板**
  * Seeeduino V4.2 会自动从 USB 连接到计算机或外部电源供电。使用 USB 数据线将 Arduino 开发板连接到您的计算机。绿色电源 LED（标记为 **PWR**）应该会亮起。

### Windows 系统

:::note
此驱动程序适用于 Windows XP、Windows Vista、Windows 7、Windows 8/8.1 和 Windows 10。
:::

[![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

* 插入您的开发板并等待 Windows 开始驱动程序安装过程。几分钟后，尽管尽了最大努力，该过程仍会失败。
* 点击开始菜单，打开控制面板。
* 在控制面板中，导航到系统和安全。接下来，点击系统。系统窗口打开后，打开**设备管理器**。
* 查看端口 (COM & LPT)。您应该会找到一个名为"Seeeduino v4.2"的开放端口。如果没有 COM & LPT 部分，请在"其他设备"下查找"未知设备"。
* 右键点击"Seeeduino v4.2"端口并选择"更新驱动程序软件"选项。
* 接下来，选择"浏览我的计算机以查找驱动程序软件"选项。
* 最后，导航到并选择名为"seeed_usb_serial.inf"的驱动程序文件
* Windows 将从那里完成驱动程序安装。

### Mac OSX 系统

您不需要安装任何驱动程序。

### Linux 系统

## Linux 系统入门

要在 Linux 上使用，请转到[在 Linux 上安装 Arduino](http://playground.arduino.cc/Learning/Linux)

您不需要安装任何驱动程序。

-----------------------
首先，您需要安装 Arduino 软件。

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

-------------

#### Q1. Arduino UNO 和 Seeeduino v4.2 有什么区别

Seeeduino v4.2 与 Arduino UNO 完全兼容。主要区别如下：

* 使用 micro USB 为开发板供电和编程
* 3 个板载 Grove 连接器
* 3.3/5V 系统电源开关
* DCDC 电路代替 LDO，效率更高
* 其他电路改进

#### Q2. 我无法将程序上传到 Seeeduino v4.2

请检查：

* 电源 LED 是否亮起
* 是否选择了正确的端口和开发板（Seeeduino v4.2）
* 关闭并重新打开 Arduino IDE 再试一次

#### Q3. 如果我有其他问题，在哪里可以找到技术支持

您可以在[Seeed 论坛](https://community.seeedstudio.com/discover.html?t=Arduino)发布问题。

## 技术支持与产品讨论


<br />

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>