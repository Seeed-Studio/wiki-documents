---
description: Seeeduino Mega
title: Seeeduino Mega
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_Mega
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/Seeeduino_Mega_cover.jpg)

Seeeduino Mega 是一款基于 Arduino Mega 开发的强大微控制器。它采用 ATmega2560 处理器，提供大量 I/O 引脚，多达 70 个数字 I/O、16 个模拟输入、14 个 PWM 和 4 个硬件串口。与 Arduino Mega 相比，我们将 Arduino Mega 的体积缩小了至少 30%，并使其与 [Seeed Shield 产品](https://www.seeedstudio.com/s/shield.html) 100% 兼容。作为 Seeeduino 系列的一员，Seeeduino Mega 继承了 Seeeduino 的精心设计细节，如可选择的工作电压（3.3V/5V）、直角复位按钮等。


[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Mega-p-717.html)


## 应用场景

* 物联网  
* DIY
* 机器人
* 智能家居
* 3D 打印机
* 工业应用

以下是一些有趣的项目供您参考。

|8*8*8 LED 立方体|六足机器人|DIY Arduino 3D 打印机|
|-------|-------|--------
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/example_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/example_2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/example_3.jpg)|
|[立即制作](https://www.instructables.com/id/Arduino-Mega-8x8x8-RGB-LED-Cube/)|[立即制作](https://www.instructables.com/id/Arduino-Mega-Hexapod/)|[立即制作](https://www.instructables.com/id/Arduino-Controlled-CNC-3D-Printer/)|

## 特性

* 兼容大多数 Arduino Duemilanove 和 Diecimila 扩展板
* ATmega 2560 @ 16MHz
* 可选择 5V/3.3V 工作电压
* 70 个数字 IO
* 16 个模拟输入
* 14 个 PWM 输出
* 4 个硬件串口 (UART)
* 小尺寸设计，比 Arduino Mega 小 30%
* 易于编程，无需额外硬件即可加载固件 – 只需插入 USB 端口即可使用
* ICSP 接口
* 可通过电池或 AC 转 DC 适配器供电

## 规格参数

|项目|值|
|------------|-----------|
|微控制器|ATmega2560|
|工作电压|5V/3.3V|
|输入电压|7-12V|
|数字 I/O 引脚|70|
|PWM 通道|14|
|模拟输入通道|16|
|每个 I/O 引脚直流电流|20 mA|
|闪存|256 KB|
|RAM|8 KB|
|EEPROM|4 KB|
|时钟速度|16 MHz|


## 硬件概述

下图显示了 Seeeduino Mega 硬件特性的概览。引脚图显示了 Seeeduino Mega 各个引脚的引脚分布和替代功能。这可以用作快速参考。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/Seeeduino_Mega_hardware1.png)


- **Mini USB**
Mini USB 端口用于将开发板连接到 PC 进行编程和供电。
- **模式开关**
滑动开关，用于允许或避免自动复位和上传。
- **电源开关**
滑动开关，用于将开发板的逻辑电平和电源输出更改为 5V 或 3.3V。如今许多新的优秀传感器都是为 3.3V 工作而开发的，使用其他 duino 开发板时，您需要在开发板和这些传感器之间放置逻辑电平转换器，而使用 Seeeduino Mega，您只需滑动开关即可！
- **DC 输入**
DC 输入允许您的 Seeeduino Mega 通过墙式适配器供电，这样您可以在需要时为项目提供更多电力，例如使用直流电机或其他大功率设备时。DC 输入可以是 7V-12V。由于模块开机时峰值电流为 2A，DC 电源是比 USB 电源更好的选择。
- **复位**
此按钮方便地放置在侧面，即使在顶部放置扩展板时也能让您复位 Seeeduino 开发板。这与其他 Arduino 开发板不同，其他开发板的按钮放在顶部，难以访问。
- **ICSP**
这是 ATmega328P 的 ICSP 连接，它位于 Arduino Uno、Due、Mega 和 Leonardo 兼容硬件（例如扩展板）的标准 ICSP/SPI 位置，这些硬件可能使用此连接器。此端口中的 SPI 引脚：MISO、SCK 和 MOSI，也分别连接到数字引脚 12、13 和 11，就像 Arduino Uno 一样。
- **数字引脚**
Seeeduino Mega 中有多达 70 个数字引脚。点击[这里](https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino%20Mega%20pin%20mapping.pdf)查看 Arduino 引脚和 Atmega2560 引脚之间的引脚映射。
Mega 上的 70 个数字引脚中的每一个都可以用作输入或输出，使用 pinMode()、digitalWrite() 和 digitalRead() 函数。它们在 5 伏电压下工作。每个引脚可以提供或接收 20 mA 作为推荐工作条件，并具有 20-50 k 欧姆的内部上拉电阻（默认断开）。最大 40mA 是不得超过的值，以避免对微控制器造成永久损坏。
此外，一些引脚具有专门功能：
	* 串口：0 (RX) 和 1 (TX)；串口 1：19 (RX) 和 18 (TX)；串口 2：17 (RX) 和 16 (TX)；串口 3：15 (RX) 和 14 (TX)。用于接收 (RX) 和发送 (TX) TTL 串行数据。引脚 0 和 1 也连接到 ATmega16U2 USB 转 TTL 串行芯片的相应引脚。
	* 外部中断：2（中断 0）、3（中断 1）、18（中断 5）、19（中断 4）、20（中断 3）和 21（中断 2）。这些引脚可以配置为在低电平、上升沿或下降沿或电平变化时触发中断。详情请参见 attachInterrupt() 函数。
	* PWM：2 到 13 和 44 到 46。使用 analogWrite() 函数提供 8 位 PWM 输出。
	* SPI：50 (MISO)、51 (MOSI)、52 (SCK)、53 (SS)。这些引脚支持使用 SPI 库进行 SPI 通信。SPI 引脚也在 ICSP 接口上引出，物理上与 Arduino /Genuino Uno 兼容。
	* LED：13。有一个内置 LED 连接到数字引脚 13。当引脚为高电平时，LED 点亮，当引脚为低电平时，LED 熄灭。
	* TWI：20 (SDA) 和 21 (SCL)。支持使用 Wire 库进行 TWI 通信。请注意，这些引脚与旧的 Duemilanove 或 Diecimila Arduino 开发板上的 TWI 引脚位置不同。
	* 模拟：Mega 2560 有 16 个模拟输入，每个都提供 10 位分辨率（即 1024 个不同值）。默认情况下，它们测量从地到 5 伏的电压，但可以使用 AREF 引脚和 analogReference() 函数更改其范围的上限。
	* AREF：模拟输入的参考电压。与 analogReference() 一起使用。
	* 复位：将此线拉低以复位微控制器。通常用于为阻挡开发板上复位按钮的扩展板添加复位按钮。
	* 未标记的引脚：通过操作寄存器来使用它们。

## 安装驱动程序

首先，您需要：

* **获取一根 Micro-USB 数据线**
您首先需要一根 Micro-USB 数据线；安卓手机的数据线就可以。
如果您找不到，可以在[这里](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100)购买一根。

* **连接开发板**
使用 USB 数据线将 Arduino 开发板连接到您的计算机。绿色电源 LED（标记为 **PWR**）应该会亮起。


**Windows 系统**

:::note
    此驱动程序适用于 Windows XP、Windows Vista、Windows 7、Windows 8/8.1 和 Windows 10。
:::
[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

- 插入您的开发板并等待 Windows 开始驱动程序安装过程。几分钟后，尽管尽了最大努力，该过程仍会失败。
- 点击开始菜单，打开控制面板。
- 在控制面板中，导航到系统和安全。接下来，点击系统。系统窗口打开后，打开**设备管理器**。
- 查看端口 (COM 和 LPT)。您应该会找到一个名为"Seeeduino Mega"的开放端口。如果没有 COM 和 LPT 部分，请在"其他设备"下查找"未知设备"。
- 右键点击"Seeeduino Mega"端口并选择"更新驱动程序软件"选项。
- 接下来，选择"浏览我的计算机以查找驱动程序软件"选项。
- 最后，导航到并选择名为"Seeeduino Mega.inf"的驱动程序文件
- Windows 将从那里完成驱动程序安装。

**Mac OSX 系统**

您无需安装任何驱动程序。


## 入门指南

:::note
    本部分基于 Windows 10 下的 Arduino 1.6.9。
:::
首先，您需要安装 Arduino 软件。

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)


**启动 Arduino 应用程序**

双击您之前下载的 Arduino 应用程序 (arduino.exe)。

:::note
    如果 Arduino 软件以不同语言加载，您可以在首选项对话框中更改它。详情请参见 [Arduino 软件 (IDE) 页面](https://www.arduino.cc/en/Guide/Environment#languages)。
:::

**打开 Blink 示例**

打开 LED 闪烁示例程序：**File > Examples >01.Basics > Blink**。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png)

**将 Seeeduino 添加到您的 Arduino IDE**

点击 **File > Preference**，并在附加开发板管理器网址中填入以下网址：
    *https://raw.githubusercontent.com/Seeed-Studio/Seeeduino-Boards/master/package_seeeduino_index.json*

点击 OK 完成设置。然后点击 **Tools > Board > Boards Manager**，找到 **Seeeduino by Seeed Studio**，并安装它。

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/add_board.png)

**选择您的开发板**

您需要在 **Tools > Board** 菜单中选择与您的 Arduino 对应的条目。
选择 **Seeeduino Mega 2560**。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/mega_arduino_ide.png)

**选择您的串口**

从 Tools | Serial Port 菜单中选择 Arduino 开发板的串行设备。这很可能是 COM3 或更高（**COM1** 和 **COM2** 通常为硬件串口保留）。要找出来，您可以断开 Arduino 开发板的连接并重新打开菜单；消失的条目应该就是 Arduino 开发板。重新连接开发板并选择该串口。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/select_com_seeeduino_mega.png)

:::note
    在 Mac 上，这应该是带有 **/dev/tty.USBmodem** 的内容。
:::
**上传程序**

现在，只需点击环境中的"Upload"按钮。等待几秒钟，如果上传成功，状态栏中将出现"Done uploading."消息。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)

上传完成几秒钟后，您应该会看到开发板上的引脚 13 (L) LED 开始闪烁（橙色）。如果是这样，恭喜！您已经成功运行了 Arduino。如果遇到问题，请参阅故障排除建议。

## 在 Linux 上开始使用

要在 Linux 上使用，请前往 [在 Linux 上安装 Arduino](http://playground.arduino.cc/Learning/Linux)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino_Mega_v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

* **原理图**

    [Seeeduino Mega Eagle 文件](https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino_Mega_v3.0.zip)

* **引脚映射**

    [Seeeduino Mega 引脚映射 PDF](https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino%20Mega%20pin%20mapping.pdf)

* **参考资料**

    [Arduino 入门指南](https://www.arduino.cc/en/Guide/HomePage)

    [Arduino 语言参考](https://www.arduino.cc/en/Reference/HomePage)

    [下载 Arduino 软件(IDE)](https://www.arduino.cc/en/Main/Software)

    [Arduino 常见问题](https://www.arduino.cc/en/Main/FAQ)

    [Arduino 介绍](https://www.arduino.cc/en/guide/introduction)

    [Arduino 维基百科页面](https://en.wikipedia.org/wiki/Arduino)

    [Arduino Mega](https://www.arduino.cc/en/Main/ArduinoBoardMega2560?setlang=en)

## 常见问题

**Arduino Mega 与 Seeeduino Mega 有什么区别？**

Seeeduino Mega 是一款基于 Arduino Mega 开发的强大微控制器。主要区别如下：

* 使用 mini USB 进行供电和编程
* 增加 3.3/5V 系统电源开关
* 增加自动复位模式开关
* 更小的尺寸

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