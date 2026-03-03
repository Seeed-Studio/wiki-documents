---
description: Seeeduino 驱动程序
title: Seeeduino 驱动程序
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Driver_for_Seeeduino
last_update:
  date: 1/31/2023
  author: shuxu hu
---

##   安装驱动程序

###   在 Windows 7 上为 Seeeduino 安装驱动程序


*插入您的开发板并等待 Windows 开始其驱动程序安装过程。几分钟后，该过程将失败。
*   右键单击"我的电脑"并选择控制面板来打开设备管理器。

*   查看端口 (COM & LPT)。您应该看到一个名为"USB Serial Port"的开放端口。右键单击"USB Serial Port"并选择"更新驱动程序软件"选项。


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver1.jpg)


*   接下来，选择"浏览我的计算机以查找驱动程序软件"选项。


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver2.jpg)


*   最后，选择名为"FTDI USB Drivers"的驱动程序文件，该文件位于 Arduino 软件下载的"Drivers"文件夹中。


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver3.jpg)

**注意：** FTDI USB 驱动程序来自 Arduino。但是当您为其他控制器（如 Xadow Main Board、Seeeduino Clio、Seeeduino Lite）安装驱动程序时，

您需要下载相应的驱动程序文件并保存它。然后选择您已下载的驱动程序文件。


*   如果您已成功安装驱动程序，下面的对话框将自动出现。


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver4.jpg)


*   您可以通过打开 Windows 设备管理器来检查驱动程序是否已安装。在端口部分查找"USB Serial Port"。


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver5.jpg)


*   您也可以在 Arduino 环境中看到串行端口。


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver6.jpg)

###   在 Windows 8 上为 Seeeduino 安装驱动程序

在使用 Windows 8 安装驱动程序之前，您应该保存正在编辑的这些文件，因为在操作过程中会有几次断电。


*   按"Windows 键" + "R"

*   输入 shutdown.exe /r /o /f /t 00

*   点击"确定"按钮。

*   系统将重启到"选择一个选项"屏幕

*   从"选择一个选项"屏幕中选择"疑难解答"

*   从"疑难解答"屏幕中选择"高级选项"

*   从"高级选项"屏幕中选择"Windows 启动设置"

*   点击"重启"按钮

*   系统将重启到"高级启动选项"屏幕

*   选择"禁用驱动程序签名强制"

*   系统启动后，您可以像在 Windows 上一样安装 Arduino 驱动程序


###   在 Mac OS 上为 Seeeduino 安装驱动程序


*   进入页面：[https://www.ftdichip.com](https://www.ftdichip.com)。


*   下载适用于 Mac OS X 版本的驱动程序，名为 2.2.18 (32bit)


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver7.png)


*   打开您刚刚下载的驱动程序文件，并双击 FTDIUSBSerialDriver_10_4_10_5_10_6_10_7.mpkg


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver8.png)


*   双击后，您将看到一个安装程序窗口。


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver9.png)


*   点击"继续"。


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver10.png)


*   如果您已成功安装驱动程序，您可以看到下面的对话框。


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver11.png)


*   使用 Seeeduino 进行测试


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver12.png)

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