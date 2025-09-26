---
description: Seeeduino Lite
title: Seeeduino Lite
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_Lite
last_update:
  date: 1/31/2023
  author: shuxu hu
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/400px-Lite_01.jpg)

Seeeduino Lite 是一款基于 ATmega32U4 的微控制器。就像 Arduino Leonardo 一样，它省去了 USB 到串口通信所需的辅助处理器。这使得 Seeeduino Lite 可以作为 USB 设备（如键盘和鼠标）出现在计算机中。基于 Leonardo，我们还将 Seeeduino 系列的自定义细节融入到 Seeeduino Lite 中，如可选择的工作电压、板载 Grove 连接器等。它有 20 个数字 I/O 口（其中 7 个可以输出 PWM）、一个 micro USB 连接、一个电源插孔、一个 ICSP 接头和一个复位按钮。它包含支持微控制器所需的一切；只需用 USB 线将其连接到计算机或用 AC-DC 适配器供电即可开始使用。

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html)


## 规格参数
---
- 微控制器：ATmega32u4
- 工作电压：5V
- 输入电压（推荐）：7-12V
- 输入电压（极限）：6-20V
- 数字 I/O 引脚：20
- PWM 通道：7
- 模拟输入通道：12
- 每个 I/O 引脚的直流电流：40 mA
- 3.3V 引脚的直流电流：50 mA
- 闪存：32 KB（ATmega32u4），其中 4 KB 用于引导加载程序
- SRAM：2.5 KB（ATmega32u4）
- EEPROM：1 KB（ATmega32u4）
- 时钟速度：16 MHz

## 接口说明
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Seeeduino_Lite_Intrface_Function.jpg)

**U1：** 78M05 IC，三端正电压稳压器。

**U3：** LD1117 IC，低压差电压稳压器，能够提供高达 800mA 的输出电流。

**U5：** Atmega32U4 IC，8 位 AVR 微控制器，具有 32K 字节的 ISP 闪存和 USB 控制器。


## 驱动安装
---

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino)
:::


从这里下载驱动文件 [https://github.com/Seeed-Studio/Signed_USB_Serial_Driver](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver)。

通过 micro-USB 线将 Seeeduino Lite 连接到您的计算机。

等待新发现硬件的提示。如果安装程序没有自动启动，请导航到 Windows 设备管理器并找到 Seeeduino Lite 列表。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Unknow_Device.jpg)

右键单击并选择更新驱动程序。当询问是否自动安装或从特定位置安装时，选择"浏览我的计算机以查找驱动程序软件"。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Update_Driver.jpg)

选择"在这些位置搜索最佳驱动程序"，并勾选"在搜索中包含此位置"框。单击浏览按钮并导航到您已下载的驱动器。选择 drivers 文件夹并单击确定。


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Browse_Driver_Location.jpg)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Successfully_Update_Driver.jpg)

替换 Arduino 路径中的两个文件。打开 Arduino-1.0.1/hardware/arduino/cores/arduino 目录，用新的 USBCore.cpp 替换文件：USBCore.cpp。并在路径：Arduino-1.0.1/hardware/arduino 中用新的 boards.txt 替换文件：boards.txt。现在，您可以像使用其他 Arduino 板一样编程和使用 seeeduino lite。


## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Seeeduino_Lite_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源
---
- [Seeeduino Lite Eagle 文件](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Seeeduino_Lite_Eagle_File.zip)。
- [新的 boards.txt](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Boards.zip)。
- [新的 USBCore.cpp](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Boards.zip)。
- [Lite 驱动文件](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Signed_USB_Serial_Driver-master.zip)。

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