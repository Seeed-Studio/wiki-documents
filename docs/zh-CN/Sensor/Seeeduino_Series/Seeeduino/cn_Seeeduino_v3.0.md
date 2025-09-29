---
description: Seeeduino v3.0
title: Seeeduino v3.0
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_v3.0
last_update:
  date: 1/11/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_v3.0_top.jpg)

##   概述  ##
Seeeduino v3 是一款基于 ATmega328 的微控制器开发板，它是一款兼容 Arduino 的开发板。它配备了 FTDI USB 转串口驱动芯片，可以作为桥梁，让您的计算机与开发板进行通信。它有 14 个数字引脚（其中包括 6 个 PWM 引脚和 UART 端口）和 8 个模拟引脚，一个 16 MHz 陶瓷谐振器，一个 USB 连接，一个复位按钮，一个 ICSP 接头和一个 DC 电源插孔。它有两个拨动开关，一个用于改变 ATmega328 的输入电压，另一个是 DTR 的启用/禁用引脚，您可以单独使用 FTDI 功能而不受 ATmega328 的影响。它还有两个白色的 Grove 连接器，方便与开发板一起使用 Grove 产品。

##   规格参数   ##
|项目|值|
|---|---|
| 微控制器|Atmel ATmega328 (AVR 8位) TQFP-32 封装  |   
|  开发板（引导加载程序）|Arduino Duemilanove w/Atmega328 |   
| 工作电压|5V 或 3.3V（通过滑动开关选择）  |  
|  3V3 端口和 5V 端口的最大输出电流|5V 端口 - 500mA，3V3 端口 - 800mA（需要通过 DC 插孔或 Vin 供电） |   
| 数字引脚的最大输出电流|40mA  |   
|  miniUSB 输入电压|5V。最大值为 5.5V。 |
|  DC 插孔和 Vin 输入电压|7V 到 12V（较低值更佳）。最大值为 20V。如果输入低于 7V 且开关设置为 5V，则 AVR 的 VCC 约比输入低 2V。 |   
|数字 I/O 引脚|14 个（其中 6 个提供 PWM 输出）   |
|  模拟输入引脚|8 个（其中 2 个用于 I2C 通信 - PC4 和 PC5） |   
|  闪存|32 KB  |
|  SRAM|2 KB |   
|  EEPROM|1 KB     |
|  时钟速度|16 MHz     |


##   使用方法  ##

###  USB 转串口 ###

Seeeduino 板载了一个 FTDI USB 转串口驱动芯片 - FT232R，它被编程为 USB 转串口转换器。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_FTDI.png)

FT232R 的十个引脚已经标出，它位于 ICSP 端口旁边，方便您在需要时使用这些引脚。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_FTDI_pinout.png)

板上有一个拨动开关"M_RST_AUTO"。这决定了是否允许来自主机的 DTR 信号复位 ATmega328 微控制器。

设置为"AUTO"为自动模式，允许主机使用 DTR 信号复位微控制器，自动复位微控制器。注意：在开发过程中需要此位置，因此对大多数人来说这将是默认位置。

设置为"M"为手动模式，禁用来自主机的 DTR 信号，因此需要用户物理按下复位按钮来复位微控制器。另外，如果您想单独使用 FT232R，需要将其设置为"M"模式。

有关 FTDI 芯片的更多信息，您可以参考 [FTDI 官网](https://www.ftdichip.com/index.html)

###  引脚分布 ###

Seeeduino 是一款基于 ATmega328 的主板，所有有用的引脚都已引出。Seeeduino 上有电源引脚、14 个数字 IO 引脚和 8 个模拟引脚，同时，其中六个数字 IO 引脚可以用作 PWM 输出。Seeeduino 的所有引脚都连接到 2.54mm 间距的排针。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_pinout.png)

板上的 14 个数字引脚中的每一个都可以用作输入或输出，使用 [pinMode()](https://arduino.cc/en/Reference/PinMode)、[digitalWrite()](https://arduino.cc/en/Reference/DigitalWrite)、[digitalRead()](https://arduino.cc/en/Reference/DigitalRead) 函数。当将拨动开关"3V3_VCC_5V"切换到两个不同位置时，它们工作在 5 伏或 3.3 伏。每个引脚可以提供或接收最大 40 mA 的电流。[SoftwareSerial](https://arduino.cc/en/Reference/SoftwareSerial) 库允许在任何数字引脚上进行串行通信。

####  UART：D0（RX）和 D1（TX）。 ####

它可以用于接收和发送 TTL 串行数据。这两个引脚已连接到 FTDI 芯片，实现了您的计算机和外围设备之间的直接通信。

####  外部中断：D2 和 D3。 ####

这两个引脚是来自 ATmega328 的外部中断，可以配置为在低电平值、上升沿或下降沿或值变化时触发中断。更多信息请参考 [attachInterrupt() 函数](https://arduino.cc/en/Reference/AttachInterrupt)。

####  PWM：D3、D5、D6、D9、D10、D11。 ####

脉宽调制是一种通过数字方式获得模拟结果的技术。它可以通过使用 analogWrite() 生成，输出一系列重复的高低脉冲信号。Seeeduino 的 PWM 频率约为 500Hz，并通过 [analogWrite()](https://arduino.cc/en/Reference/AnalogWrite) 函数提供 8 位 PWM 输出。更多信息请参考 [PWM](https://arduino.cc/en/Reference/AnalogWrite)

####  SPI：D10（SS）、D11（MOSI）、D12（MISO）、D13（SCK）。 ####

这些引脚支持使用 [SPI 库](https://arduino.cc/en/Reference/SPI) 进行 SPI 通信。

#####  SPI 图表 #####

| MISO (D12)|VCC  |   
|---|---|
| SCK(D13)|MOSI(D11)  |   
|  Reset|GND |   


####  "L"指示灯。 ####

板上有一个"L"LED，它连接到 D13，您可以通过 D13 控制这个 LED。

模拟接头上有八个模拟引脚，标记为 A0 到 A7。每个引脚可以提供 10 位分辨率。这意味着 0V 到 5V（0V 到 3.3V）之间的模拟输入可以映射到 0 到 1024（0 到 675）。您可以使用 analogRead() 从模拟输入获取值。

####  I2C：A4（SDA）和 A5（SCL）。 ####

Seeeduino 可以生成总线时钟来控制具有特定地址的从 I2C 设备。Grove I2C 也连接到 A4 和 A5。

板子上有一个复位按钮，连接到RST引脚。按下按钮，该引脚将被拉低，然后ATmega328将重启。

###  电源 ###

Seeeduino可以通过USB或DC插孔连接器（Vin）供电。如果您使用USB供电，输入电压应为稳定的5VDC，如计算机或USB墙式适配器。另一方面，当您选择DC插孔时，应使用2.1mm中心正极插头，外孔直径5.5mm。DC电源输入应为7-20V，但是，由于较高输入电压会导致过热，建议使用7-12V。板子上有一个电压调节器，因此它可以将5v转换为3.3v。当将拨动开关"3V3_VCC_5V"切换到3V3位置时，ATmega328的输入电压将变为3.3v，同时，板子将在3.3伏特下工作。

###  Grove连接器 ###

Seeeduino有两个白色的Grove连接器，一个是IIC端口，另一个是UART端口。这两个端口从ATmega328引出，设计用于更方便地将Grove产品插接到板子上。

###  板载指示灯 ###

板子上有一些指示灯，可以显示一些状态。

|  标签 | 连接|
|---|---|
|  带"L"标签的用户LED |   它连接到ATmega328P PB5/SCK引脚（数字头引脚13）。   |
| 带"RST"标签的复位LED  | 它连接到ATmega328P PC6/RESET引脚。当复位为低电平时点亮。  |
|带"PWR"标签的电源LED|它连接到ATmega328P VCC引脚。|
|带"TX"标签的发送LED|它连接到FT232RL CBUS1引脚。|
|带"RX"标签的接收LED|它连接到FT232RL CBUS0引脚。|


##  相关阅读 ##

- [如何使用Seeeduino](https://seeeddoc.github.io/How_to_use_Seeeduino/)
- [版本跟踪器](https://seeeddoc.github.io/Seeeduino/)

##   许可证   ##

本文档采用知识共享[署名-相同方式共享许可证3.0](http://creativecommons.org/licenses/by-sa/3.0/)授权。源代码和库采用[GPL/LGPL](http://www.gnu.org/licenses/gpl.html)授权，详情请参见源代码文件。


## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/SeeeduinoV3.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   资源   ##

- **[源文件]**[Seeeduino v3.0源文件](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/SeeeduinoV3.0_Source_File.zip)
- **[PDF]**[Seeeduino v3.0 PCB](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/Seeeduino%20v3.0%20PCB.pdf)
- **[PDF]**[Seeeduino v3.0 SCH](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/Seeeduino_v3.0%20SCH.pdf)
- **[PDF]**[PDF格式原理图](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/Seeeduino_v3.0.pdf)

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