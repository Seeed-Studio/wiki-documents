---
description: Seeeduino Lotus
title: Seeeduino Lotus
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_Lotus
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/Seeeduino_Lotus_Cover.jpg)

Seeeduino Lotus 是一款 ATMEGA328 微控制器开发板。它是 Seeeduino 和 Base Shield 的组合。Seeeduino Lotus v1.0 使用 Atmel ATMEGA328P-MU 和 CH340。ATMEGA328P-MU 是一款高性能、低功耗的 AVR 8 位微控制器。CH340 是一款 USB 总线转换芯片，可以实现 USB 到串口的接口转换。Seeeduino Lotus v1.1 将 CH340 替换为 CP2102N 以实现与 MAC 的兼容性，与 Seeeduino Lotus v1.0 相比没有其他变化。Seeeduino Lotus 具有 14 个数字输入/输出引脚（其中 6 个可以输出 PWM）和 7 个模拟输入/输出引脚、一个 micro USB 连接、一个 ICSP 接头、12 个 Grove 连接器、一个复位按钮。

:::warning
Seeeduino Lotus 1.0 仅适用于 Windows 操作系统。Seeeduino Lotus 1.1 适用于 Windows 和 Mac。
:::

## 版本

---
| 版本 | 描述                                              | 发布时间      |购买链接|
|----------|-----------------------------------------------------------|--------------|--------------|
| v1.0   | 初始公开发布（测试版）                             | 2014年7月22日  |[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)|
| v1.1   | 将 CH340 替换为 CP2102N 以实现与 MAC 的兼容性 |2016年12月22日   |[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-V1.1-ATMega328-Board-with-Grove-Interface-p-2917.html)|

## 应用场景

* DIY
* 物联网和智能家居
* 机器人
* 学习
* 玩具

以下是一些有趣的项目供您参考。

|轨迹球控制小车|FM 接收器|制作木制枪|
|-------|-------|-------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/example_1.png)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/Fm%20demo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg)|
|[立即制作](https://community.seeedstudio.com/A-Car-Controlled-by-Track-Ball-p-1132.html)|<a href="/cn/FM_Receiver" ><span><font size={"3"}> 立即制作 </font></span></a>|[立即制作](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)|

## 特性

* 完全兼容 Arduino UNO
* ATmega328 微控制器
* 12 个板载 Grove 连接器
* 14 个数字 I/O 引脚（6 个 PWM 输出）
* 6 个模拟输入
* ISP 接头
* Arduino UNO-R3 扩展板兼容
* Micro USB 编程和供电
* 5V 工作电压

## 规格参数

|项目|数值|
|------------|-----------|
|微控制器|ATmega328P-MU|
|工作电压|5V|
|数字 I/O 引脚|14|
|PWM 通道|6|
|模拟输入通道|7|
|每个 I/O 引脚直流电流|40 mA|
|闪存|32 KB|
|RAM|2 KB|
|EEPROM|1 KB|
|时钟速度|16 MHz|

## 硬件概述

下面的图片展示了 Seeeduino Lotus 硬件功能的概述。Seeeduino Lotus 各个引脚的引脚图和替代功能在引脚图中显示。这可以用作快速参考。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/seeeduino_lotus_hardware_overview.jpg)

* **LED-D13**
一个 LED 连接到板子的 D13 引脚。这可以用作程序/草图的板载 LED 指示器。
* **USB 输入**
USB 端口用于将板子连接到您的 PC 进行编程和供电。Micro USB 是 USB 的通用版本，在大多数 Android 手机和其他设备中都能找到。您的家里可能有很多这样的线缆。
* **复位**
这个按钮方便地放置在侧面，即使在顶部放置了扩展板时，也能让您复位 Seeeduino 板。这在其他 Arduino 板中是不存在的，因为按钮放在顶部，很难访问。
* **电源引脚和模拟引脚**
就像额外的数字接头焊盘一样，这些额外的连接是我们个人意识到人们在项目中需要的，特别是如果您想在不使用面包板的情况下为多个传感器/设备供电时的电源连接。
* **Grove 连接器**
SeeedStudio 有各种传感器/设备可以使用这种模拟、数字、I2C 和 UART 连接。此外，我们销售独立的 Grove 连接器来帮助您制作自己的传感器连接。
* **ICSP**
这是 ATmega328P 的 ICSP 连接，它位于 Arduino Uno、Due、Mega 和 Leonardo 兼容硬件（例如扩展板）的标准 ICSP/SPI 位置，这些硬件可能使用此连接器。此端口中的 SPI 引脚：MISO、SCK 和 MOSI，也分别连接到数字引脚 12、13 和 11，就像 Arduino Uno 的那些引脚一样。
* **USB 2 Uart**
USB-2-Uart 的引脚图。通过将板载 ATmega328 置于复位模式，这些焊盘可用于与其他 UART 设备交互。这使得 Seeeduino Lotus 可以用作 USB2UART 实用板。

:::warning
在处理 micro USB 插座时要小心，否则您可能会弄坏插座。
:::

## 安装驱动程序

首先，您需要：

* **获取一根 Micro-USB 线缆**
您首先需要一根 Micro-USB 线缆；Android 手机的数据线就可以。
如果您找不到，可以在[这里](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100)购买一根。

* **连接板子**
使用 USB 线缆将 Arduino 板连接到您的计算机。绿色电源 LED（标记为 **PWR**）应该亮起。

:::note
此 CH340 驱动程序（Seeeduino_Lotus V1.0）适用于 Windows XP、Windows Vista、Windows 7、Windows 8/8.1 和 Windows 10。
:::
[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/download_driver_for_seeeduino_lotus.png)](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/CH341SER.EXE)

双击驱动程序并安装它。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/driver_install.png)

:::note
此 CP2102N 驱动程序（Seeeduino_Lotus V1.1）适用于 Windows XP、Windows Vista、Windows 7、Windows 8/8.1、Windows 10 和 Mac。
:::
[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/download_driver_for_seeeduino_lotus.png)](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

## 入门指南

:::note
    本部分基于 Windows 10 下的 Arduino 1.6.9。
:::
首先，您需要安装 Arduino 软件。

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**启动 Arduino 应用程序**

双击您之前下载的 Arduino 应用程序（arduino.exe）。

:::note
如果 Arduino 软件以不同语言加载，您可以在首选项对话框中更改它。详情请参见 [Arduino Software (IDE) 页面](https://www.arduino.cc/en/Guide/Environment#languages)。
:::

**打开 Blink 示例**

打开 LED 闪烁示例程序：**File > Examples >01.Basics > Blink**。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png)

**将 Seeeduino Lite 添加到您的 Arduino IDE**

在您的 Arduino IDE 板卡选项中没有 *Seeeduino Lite* 选项，请点击[如何将 Seeed 板卡添加到 Arduino IDE](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/) 查看说明。

**选择您的板卡**
您需要在 **Tools > Board** 菜单中选择与您的 Arduino 对应的条目。
选择 **Seeeduino Lotus**。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/select_seeeduino_lotus.jpg)

**选择您的串口**
从 Tools | Serial Port 菜单中选择 Arduino 板卡的串行设备。这很可能是 COM3 或更高（**COM1** 和 **COM2** 通常为硬件串口保留）。要找出正确的端口，您可以断开 Arduino 板卡的连接并重新打开菜单；消失的条目应该就是 Arduino 板卡。重新连接板卡并选择该串口。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/select_com.jpg)

**上传程序**
现在，只需点击环境中的"Upload"按钮。等待几秒钟，如果上传成功，状态栏中将出现"Done uploading."消息。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)

上传完成几秒钟后，您应该看到板卡上的引脚 13 (L) LED 开始闪烁（橙色）。如果是这样，恭喜！您已经成功运行了 Arduino。如果遇到问题，请参阅故障排除建议。

## Seeeduino Lotus v1.0 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_Sch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Seeeduino Lotus v1.1 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* **原理图**
  * [Seeeduino Lotus Eagle 文件 V1.0](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_Sch.zip)
  * [Seeeduino Lotus Eagle 文件 V1.1](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.1.zip)
  * [Seeeduino Lotus SCH PDF 文件 V1.0](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_SCH.pdf)
  * [Seeeduino Lotus SCH PDF 文件 V1.1](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino%20Lotus%20v1.1%20SCH.pdf)
  * [Seeeduino Lotus PCB PDF 文件 V1.0](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_PCB.pdf)
  * [Seeeduino Lotus PCB PDF 文件 V1.1](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino%20Lotus%20v1.1%20PCB.pdf)

* **数据手册**
  * [ATmega328P](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega328.pdf)
  * [ATmega16U2](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega16u2.pdf)

* **参考资料**
  * [Arduino 入门指南](https://www.arduino.cc/en/Guide/HomePage)
  * [Arduino 语言参考](https://www.arduino.cc/en/Reference/HomePage)
  * [下载 Arduino 软件(IDE)](https://www.arduino.cc/en/Main/Software)
  * [Arduino 常见问题](https://www.arduino.cc/en/Main/FAQ)
  * [Arduino 介绍](https://www.arduino.cc/en/guide/introduction)
  * [Arduino 维基百科页面](https://en.wikipedia.org/wiki/Arduino)
  * [Seeeduino Lotus V1.1 USB 驱动程序](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

## 常见问题

**Q1. Arduino UNO 和 Seeeduino Lotus 有什么区别**

Seeeduino Lotus 完全兼容 Arduino UNO。而且 Seeeduino Lotus 有 12 个 Grove 连接器，这使得使用 Seeed Studio Grove 模块创建演示变得非常方便。此外，Seeeduino Lotus 使用 micro USB 进行供电和编程。

**Q2. 我无法将程序上传到 Seeeduino Lotus**

请检查，

* 电源 LED 是否亮起
* 是否选择了正确的端口和开发板（Seeeduino Lotus）
* 关闭并重新打开 Arduino IDE 再试一次

## 项目

**达芬奇密码** 这个作品结合了艺术和电子技术。艺术部分构成了骨架，由 11 层中密度纤维板组成。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/coding-with-da-vince/the-da-vinci-code-3b91a8/embed" width={350} />

**小宇宙，手势控制落地灯** 小宇宙是一个手势控制的落地灯，有三个木制支腿和一个艺术灯头。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/100385/the-little-universe-a-gesture-controlled-floor-lamp-323503/embed" width={350} />

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