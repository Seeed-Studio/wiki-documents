---
description: 概述
title: Seeed Studio XIAO RP2040 入门指南
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /XIAO-RP2040
sku: 102010428, 100045204
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-11-27'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/cn/XIAO-RP2040/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Seeed Studio XIAO RP2040 入门指南

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO RP2040 与 Seeed Studio XIAO SAMD21 一样小巧，但性能更强大。一方面，它搭载了强劲的双核 RP2040 处理器，可灵活调节时钟频率，最高运行至 133 MHz，是一款低功耗微控制器。Seeed Studio XIAO RP2040 还集成了 264KB SRAM 和 2MB 片上 Flash 存储，可提供更多空间用于程序存储和运行。另一方面，这块小板在处理性能方面表现出色，同时功耗更低。  
总的来说，它被设计成拇指大小（21x17.8mm）的微型尺寸，可用于可穿戴设备和各类小型项目。

Seeed Studio XIAO RP2040 上共有 14 个 GPIO 引脚，其中包括 11 个数字引脚、4 个模拟引脚、11 个 PWM 引脚、1 个 I2C 接口、1 个 UART 接口、1 个 SPI 接口、1 个 SWD 焊盘接口。

Seeed Studio XIAO RP2040 与 Seeed Studio XIAO 扩展板兼容。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## **产品特性**

- 强大的 MCU：双核 ARM Cortex M0+ 处理器，时钟频率最高可达 133 MHz
- 丰富的片上资源：264KB SRAM，2MB 片上 Flash 存储
- 灵活的兼容性：支持 Micropython/Arduino/CircuitPython
- 简化项目操作：面包板友好 & SMD 设计，背面无元器件
- 小巧尺寸：拇指大小（21x17.8mm），适用于可穿戴设备和小型项目
- 多种接口：11 个数字引脚、4 个模拟引脚、11 个 PWM 引脚、1 个 I2C 接口、1 个 UART 接口、1 个 SPI 接口、1 个 SWD 焊盘接口

## **规格参数**

| 产品名称 | Seeed Studio XIAO RP2040 |
|-------------|-------------------------|
| **芯片组** | [Silicon - Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#rp2040) |
| **处理器** | 双核 Cortex M0+ 处理器，最高运行频率 133 MHz |
| **RAM** | 264KB SRAM |
| **Flash** | 2MB 片上 Flash |
| **接口** | GPIO 引脚 x14<br/>数字引脚 x11<br/>模拟引脚 x4<br/>I2C x1<br/>UART x1<br/>SPI x1<br/>PWM x11 |
| **板载器件** | 用户 LED（三色）x1<br/>电源 LED x1<br/>RGB LED x1<br/>复位按钮 x1<br/>Boot 按钮 x1 |
| **无线连接** | / |
| **电源** | 输入电压（Type-C）：5V<br/>输入电压（BAT）：5V |
| **低功耗模式（典型）** | / |
| **软件兼容性** | Arduino, PlatformIO, MicroPython, CircuitPython, tinyGo, Rust, Zephyr, [Exhibition for XIAO Series \| Seeed Studio Wiki](https://wiki.seeedstudio.com/cn/xiao_topic_page/) |
| **工作温度** | -20°C-70°C |
| **尺寸** | 21x17.8mm |
| **产品变体** | [Seeed Studio XIAO RP2040 3PCS Pack \| Save 10% for tiny Mic...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-3PCS-p-5942.html)<br/>[Seeed Studio XIAO RP2040 Pre-Soldered \| Plug-and-Play mini ...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-Pre-Soldered-p-6333.html) |

## **硬件概览**

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg" alt="pir" width={600} height="auto" /></p>

:::caution
对于通用 I/O 引脚：
MCU 的工作电压为 3.3V。如果接入通用 I/O 引脚的电压高于 3.3V，可能会导致芯片损坏。

对于电源引脚：
内置的 DC-DC 转换电路可以将 5V 电压转换为 3.3V，从而允许通过 VIN-PIN 和 5V-PIN 使用 5V 电源为设备供电。

XIAO RP2040 目前仅支持电池供电，当连接电池时不能再连接 Type-C，否则可能存在安全风险。

请注意使用安全，请勿撬起屏蔽罩。
:::

## **引脚分布图**
| XIAO 引脚        | 功能     | 芯片引脚          | 描述                          |
| :-------------: | :---------: | :---------------: | :---------------------------------- |
| 5V              | VBUS        |                                       | 电源输入/输出                   |
| GND             |             |                                       |                                      |
| 3V3             | 3V3_OUT     |                                       | 电源输出                         |
| D0              | Analog      | GPIO26                                   | GPIO, ADC                            |
| D1              | Analog      | GPIO27                                   | GPIO, ADC                            |
| D2              | Analog      | GPIO28                                   | GPIO, ADC                            |
| D3              | Analog      | GPIO29                                   | GPIO, ADC                            |
| D4              | SDA         | GPIO6                                    | GPIO, I2C 数据                       |
| D5              | SCL         | GPIO7                                    | GPIO, I2C 时钟                      |
| D6              | TX          | GPIO0                                    | GPIO, UART 发送                  |
| D7              | RX,CSn      | GPIO1                                    | GPIO, UART 接收,CSn               |
| D8              | SCK         | GPIO2                                    | GPIO, SPI 时钟                      |
| D9              | MISO        |GPIO4                                    | GPIO, SPI 数据                       |
| D10             | MOSI        | GPIO3                                    | GPIO, SPI 数据                       |
| Reset           |             | RUN                                   | RUN                                  |
| Boot            |             | RP2040_BOOT                           | 进入 Boot 模式                      |
| CHARGE_LED      |             | VCC_3V3                               | CHG-LED_Red                          |
| RGB LED         |             | GPIO12                       | RGB LED                              |
| USER_LED_R      |             | GPIO17                           | 用户控制的红色 RGB LED 引脚      |
| USER_LED_B      |             | GPIO25                            | 用户控制的蓝色 RGB LED 引脚     |
| USER_LED_G      |             | GPIO16                          | 用户控制的绿色 RGB LED 引脚    |

### **进入 Bootloader 模式**

有时在用户烧录程序失败时，Seeed Studio XIAO RP2040 的端口可能会消失。我们可以通过以下操作来解决这个问题：

- 长按 "B" 按钮。
- 将 Seeed Studio XIAO PR2040 连接到电脑。
- 电脑上会出现一个磁盘驱动器。

此时，芯片进入 Bootloader 模式，烧录端口会再次出现。由于 RP2040 芯片有两个分区，一个是 Bootloader，另一个是用户程序。产品在出厂时会在系统存储器中烧录一段 Bootloader 代码。我们可以通过执行上述步骤在两种模式之间切换。

### **复位**

如果你想复位 Seeed Studio XIAO RP2040，请执行以下步骤：

- 将 Seeed Studio XIAO RP2040 连接到电脑。
- **按下** "R" 引脚 **一次**。

请注意：板载可编程单色 LED（红、蓝、绿）的行为与 Arduino 上的是相反的。在 Seeed Studio XIAO RP2040 上，需要将引脚拉低才能点亮。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

**硬件设计**
- **📄[数据手册]** [Raspberry Pi RP2040 Datasheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[原理图]** [XIAO RP2040 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf )
- **🗃️[PCB 设计文件]** 
  - [ XIAO RP2040 KiCad Project](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip )
  - [XIAO RP2040 Eagle Project](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip )
- **🗃️[PCB 设计库]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[引脚图]** [XIAO RP2040 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx )

**机械设计**
- **📄[2D 尺寸]** [XIAO RP2040 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip )
- **📄[3D 模型]** [ XIAO RP2040 3D Model](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip )

<JetsonLeadQuote
  buttonText="获取定制报价"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[电子书]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种交流渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
