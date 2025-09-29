---
description: Xadow - 主板
title: Xadow - 主板
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Main_Board
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Main_Board_00V1.jpg)

Xadow 主板模块基于控制器 **ATmega32U4**。它具有高性能和低功耗的特点，使您的项目小巧便携，特别适合可穿戴项目。

板载控制器 **ATmega32U4** 拥有 32K Flash、2.5K SRAM 和 1K EEPROM，它还可以作为 USB 从模块使用，与 [Seeeduino Lite](https://www.seeedstudio.com/seeeduino-lite-p-1487.html?cPath=6_7) 类似，您可以用它实现更多项目。此主板可以通过板载 USB 接口或锂电池供电。此外，该模块还配备了充电电路，可以通过 USB 端口为锂电池充电。

首次使用 Xadow 主板时，请安装相关驱动程序并进行一些小修改，具体操作请参考 [这里](https://www.seeedstudio.com/Xadow-Main-Board-p-1524.html)。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Main-Board-p-1524.html)

## 规格
---
- 微控制器：ATmega32u4
- 工作电压：3.3V
- 每个 IO 引脚的直流电流：40mA
- 数字 I/O 引脚：20
- PWM 通道：7
- 模拟输入通道：12
- 工作温度：-20~70 ℃
- 尺寸：25.43mm x 20.35mm

## 接口功能
---
![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/XadowMainBoardScreen.jpg)

- J1：Micro USB，可用于锂电池充电和代码上传。
- U2：ATmega32U4 IC，8 位 AVR 微控制器，带有 32K 字节 ISP Flash 和 USB 控制器。
- RST：复位按钮。当连接多个 Xadow 模块时，可复位整个系统。
- J2, J3：FPC 接口。
- U1：CN3065 IC，充电管理芯片。
- BAT：电池插座，用于连接锂聚合物电池，接口为 JST 1.0。
- U4：MIC5205-3.3YM5，电压调节器。

## 引脚描述
---
Xadow 模块两侧的引脚是对称的，以下是 J2 接口从上到下的引脚描述。

![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Pins.jpg)

| Xadow 引脚 | 微控制器引脚 | 功能 |
|---|---|---|
| 1 | 9 | (PCINT1/SCLK)PB1 |
| 2 | 10 | (PDI/PCINT2/MOSI)PB2 |
| 3 | 11 | (PDO/PCINT3/MISO)PB3 |
| 4 | 38 | PF5(ADC5/TMS) |
| 5 | 14,34,24,44 | VCC |
| 6 | 5,23,35,43 | GND |
| 7 | 5,23,35,43 | GND |
| 8 | 14,34,24,44 | VCC |
| 9 | 18 | (OC0B/SCL/INT0 )PD0 |
| 10 | 19 | (SDA/INT1)PD1 |
| 11 | 20 | (RXD/INT2)PD2 |
| 12 | 21 | (TXD/INT3)PD3 |

## 板版本和更改
---
![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_-_Main_board_v1.3.JPG)

**版本 1.3**
1. 此版本将 J2 和 J3 FPC 连接器替换为翻转型，使用户更容易连接或断开外设。
2. 优化了带路径控制功能的充电电路。
3. 将 MCU 和外设的电源分离，使 MCU 工作更加稳定。

## Xadow 主板入门
---
与 Arduino 类似，Xadow 主板仅使用单个微控制器（Atmel ATmega32U4）来运行您的代码并通过 USB 与计算机通信。这意味着您只需要一根 USB 数据线即可对 Xadow 进行编程。具体步骤如下：
<!-- - 要让 Arduino IDE 支持 Xadow，需要按照一些步骤操作，请参考 [这里]() -->
- 从 [https://github.com/Seeed-Studio/Signed_USB_Serial_Driver](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver) 下载驱动文件。
- 将 Micro-USB 数据线连接到 Xadow 主板。
- 将 Micro-USB 数据线的另一端连接到计算机的 USB 端口。
- 然后安装 Xadow 驱动程序。您可以参考 [下载 Arduino 并安装 Arduino 驱动](https://wiki.seeedstudio.com/cn/Guide_to_use_demos_downloaded_from_Seeed-s_Github/) 来学习如何安装 Xadow 驱动。

![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Main_Board_Driver_step4.jpg)

现在，您可以像使用其他 Arduino 板一样对 Xadow 进行编程和使用。

[Boards.txt 和 USBCore.cpp](https://github.com/freespace/Files_For_Seeed_Main_Board) 适用于 Arduino IDE v1.6.3

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Main_Board/res/Xadow_Main_Board.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
- [Xadow 主板 Eagle 文件.zip](https://files.seeedstudio.com/wiki/Xadow_Main_Board/res/Xadow_Main_Board.zip)
- [Xadow 主板库](https://github.com/Seeed-Studio/Xadow_MainBoard)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>