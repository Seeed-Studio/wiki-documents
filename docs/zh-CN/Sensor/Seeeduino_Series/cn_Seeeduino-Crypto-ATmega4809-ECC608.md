---
description: Seeeduino Crypto (ATmega4809 ECC608)
title: Seeeduino Crypto (ATmega4809 ECC608)
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-Crypto-ATmega4809-ECC608
last_update:
  date: 1/31/2023
  author: shuxu hu
---


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/Seeed-Crypto-ATmega4809-ECC608-wiki.jpg)


Seeeduino Crypto 是专为加密而设计的。它基于高性能的 ATmega4809 和 Microchip ECC608 加密芯片。借助 ECC608 加密芯片，您可以体验 I2C 加密和其他加密通信。


除了加密功能外，Seeeduino Crypto 具有与 Seeeduino V4.2 / Arduino Uno Rev3 相同的功能。它拥有丰富的接口资源，包括 6 个模拟输入引脚、14 个数字 I/O 引脚（其中 5 个用于 PWM 输出），配备 2 个 Grove I2C 端口和 1 个 Grove UART 端口。只需插入即可使用数百种传感器和执行器。


Seeeduino Crypto 的控制方案与 ARDUINO UNO WIFI REV2 相同。不同之处在于 Seeeduino Crypto 没有板载 WIFI。如有必要，您可以添加 Arduino wifi 模块。相应地，Seeeduino Crypto 的价格不到 ARDUINO UNO WIFI REV2 的一半。


:::tip

    该产品允许用户体验 I2C 通信的加密模式，具有很强的可塑性。
:::


<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Crypto-ATmega4809-ECC608-p-4369.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Crypto-ATmega4809-ECC608-p-4369.html)


## 特性


 - 高性能 ATmega4809 微控制器 

 - 高安全性加密芯片 ECC608，支持 SHA-256 & HMAC 哈希 / AES-128

 - 2 个 Grove I2C + 1 个 Grove UART，易于原型制作

 - Type C 供电 + 数据传输


## 规格参数

|项目|详情|
|---|---|
| 芯片 | 微控制器：ATMEGA4809-AFR   / 加密：ECC608 |
| 时钟速度 | 16Mhz |
| I/O 资源 |模拟输入通道：6  /数字 I/O 引脚：14 / PWM 通道：5|
| 外设接口 |2 个 Grove I2C 端口 / 1 个 Grove UART 端口 / 1 个 ICSP 接口 /1 个 USB Type C 数据端口|
| 工作电压 | 5V|
| 电源供应 |5V USB Type C / 8 -15 V DC 插孔输入|


## 硬件概述


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/Hardware-figure.jpg)


 - **Type C** 这是板载 Type C 接口，连接到 PC 端，用作电源供应和下载。  
 
 - **LED RX / LED TX** 串行通信指示灯 TX、RX，方便用户了解串行通信的接收和发送状态。  
  
 - **DC 电源插孔** 输入电压为 8v-15v。

 - **复位按钮和复位 LED** 用于复位板子，复位时，复位灯会闪烁。

 - **电源 LED** 系统电源指示灯。

 - **ATMEGA32U4-MU 芯片** 用作 USB 到 UPDI 下载的芯片，连接到主 MCU atmega4809-afr，将程序烧录到主 MCU。

 - **ATECC608 加密芯片** 用于 I2C 通信的加密芯片。

 - **ATMEGA4809-AFR 芯片** 板载 MCU，作为系统的主控芯片。

 - **Grove 连接器** 包含两个 I2C 和一个 UART 标准 Grove 接口


:::note

    使用串口通信输出数据时，应有超过 25ms 的一定延迟，否则串口可能会卡住。
:::

## 入门指南


:::note

    本部分基于 Windows 10 下的 Arduino 1.8.10。
:::


首先，您需要安装 Arduino 软件。


[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)


**启动 Arduino 应用程序**

双击您之前下载的 Arduino 应用程序（arduino.exe）。


:::note
 
    如果 Arduino 软件以不同语言加载，您可以在首选项对话框中更改它。详情请参见 [Arduino 软件 (IDE) 页面](https://www.arduino.cc/en/Guide/Environment#languages)。
:::


**打开 Blink 示例**

打开 LED 闪烁示例程序：**File > Examples >01.Basics > Blink**。


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/select-blink.png)


**将 Seeeduino 添加到您的 Arduino IDE**


点击 **Tools > Board > Boards Manager**，您可以在搜索栏中输入关键词 'MegaAVR'，找到 **Arduino MegaAVR**，然后安装它。


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/install.png)


**选择您的开发板**

您需要在 **Tools > Board** 菜单中选择与您的 Arduino 对应的条目。
选择 **Arduino Uon WIFI Rev2**。


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/board.png)


**选择您的串口**

从 Tools | Serial Port 菜单中选择 Arduino 开发板的串行设备。这很可能是 COM3 或更高（**COM1** 和 **COM2** 通常为硬件串口保留）。要找出正确的端口，您可以断开 Arduino 开发板的连接并重新打开菜单；消失的条目应该就是 Arduino 开发板。重新连接开发板并选择该串口。


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/port.png)


**上传程序**


现在，只需点击环境中的"Upload"按钮。等待几秒钟，如果上传成功，状态栏中将出现"Done uploading."消息。


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)


上传完成几秒钟后，您应该看到开发板上的引脚 13 (L) LED 开始闪烁（橙色）。如果是这样，恭喜您！您已经成功运行了 Arduino。如果遇到问题，请参阅故障排除建议。


## 资源


- **原理图**    

   [Seeeduino Crypto 原理图](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/Seeeduino-Crypto-(ATmega4809%26ECC608).zip)  

- **数据手册**

   [ATECC608A-MAHDA-S 数据手册](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATECC608A-MAHDA-S-datasheet.pdf)

   [ATMEGA32U4-MU 数据手册](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATMEGA32U4-MU-datasheet.pdf)

   [ATMEGA4809-AFR 数据手册](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATMEGA4809-AFR-datasheet.pdf)  

- **参考资料**

   [Arduino 入门指南](https://www.arduino.cc/en/Guide/HomePage)

   [Arduino 语言参考](https://www.arduino.cc/en/Reference/HomePage)

   [下载 Arduino 软件(IDE)](https://www.arduino.cc/en/Main/Software)

   [Arduino 常见问题](https://www.arduino.cc/en/Main/FAQ)

   [Arduino 介绍](https://www.arduino.cc/en/guide/introduction)

   [Arduino 维基百科页面](https://en.wikipedia.org/wiki/Arduino)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>