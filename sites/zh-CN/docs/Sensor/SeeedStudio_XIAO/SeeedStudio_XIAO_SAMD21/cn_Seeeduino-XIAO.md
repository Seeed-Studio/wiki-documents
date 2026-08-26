---
description: Seeed Studio XIAO SAMD21 入门指南 
title: Seeed Studio XIAO SAMD21 系列入门指南
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/get_sarted.webp
slug: /Seeeduino-XIAO
sku: 110010004, 102010388, 102010328
last_update:
  date: 6/30/2026
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Seeed Studio XIAO SAMD21 系列入门指南

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO SAMD21</th>
   <th>Seeed Studio XIAO SAMD21 Plus</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/xiao-samd21-pre.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/xiao-samd21-plus-pre.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-SAMD21-Plus-p-6933.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 概述

Seeed Studio XIAO SAMD21 之前被命名为 Seeeduino XIAO，是 [Seeed Studio XIAO 家族的首款产品，这是一系列兼容 Arduino 的高性能拇指大小开发板](https://www.seeedstudio.com/xiao-series-page)。它搭载了功耗低的 ATSAMD21G18A-MU 微控制器。一方面，这块小板子在处理性能上表现良好，同时又能保持较低的功耗。它采用超小尺寸设计，可用于可穿戴设备和小型项目。

Seeed Studio XIAO SAMD21 具有 14 个引脚，可用作 11 个数字接口、11 个模拟接口、10 个 PWM 接口（d1-d10）、1 个 DAC 输出引脚 D0、1 个 SWD 焊盘接口、1 个 I2C 接口、1 个 SPI 接口、1 个 UART 接口，通过引脚复用实现串口通信指示灯（T/R）、闪烁指示灯（L）。LED（电源、L、RX、TX）的颜色分别为绿色、黄色、蓝色和蓝色。此外，Seeed Studio XIAO SAMD21 具有一个 Type-C 接口，可用于供电和下载代码。板上有两个复位焊盘，你可以将它们短接来复位开发板。

由 Microchip 的 SAMD21G18A ARM Cortex-M0+ 32 位处理器提供算力，XIAO SAMD21 Plus 为小巧多功能的 XIAO SAMD21 带来了更高的灵活性和可扩展性。在保持包括兼容 Arduino、MicroPython 和 PlatformIO 在内的所有强大特性的同时，Plus 版本重新设计了半孔和背面焊盘布局，提供额外 16 个 GPIO、集成锂电池管理、独立的 Reset 和 Boot 按钮，以及板载可编程 WS2812 RGB LED。它非常适合高级物联网项目、电池供电可穿戴设备、嵌入式应用以及可量产的 SoM 设计。

## 文档

关于 **Seeed Studio XIAO SAMD21** 的使用有两份文档，分别侧重不同的内容，请参考下表：

|[**Seeed 官方文档**](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/)|[**Nanase 编写的文档**](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|引脚图|接口|
|Seeed Studio XIAO SAMD21 入门指南|Seeed Studio XIAO SAMD21 与 MicroSD 卡（SPI）|
|Seeed Studio XIAO SAMD21 GPIO 使用方法|Seeed Studio XIAO SAMD21 与 GPS（UART）|
|Seeed Studio XIAO SAMD21 资源|单周期 IOBUS|

<!-- ### CircuitPython on Seeed Studio XIAO SAMD21

- Get started with [**CircuitPython on Seeed Studio XIAO SAMD21 **](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO-CircuitPython). -->

## 特性

- 强大的 MCU：Microchip ATSAMD21G18A Arm® Cortex®-M0+ 处理器，主频 48 MHz，集成 256 KB Flash、32 KB SRAM，并支持原生 USB。
- 扩展 I/O：XIAO SAMD21 Plus 保留标准的 14 引脚 XIAO 布局，并通过 1.27 mm 背面贴片半孔增加 16 个 GPIO，支持 PWM、DAC、I2C、UART、SPI、I2S 和 SWD。
- 集成电源管理：支持锂电池直接连接、板载充电、反灌电流保护以及充电状态指示。
- 灵活开发：兼容 Arduino IDE、PlatformIO、CircuitPython 和 TinyGo。
- 小巧且适配生态：在保持 21 × 17.8 mm 面包板友好 XIAO 外形尺寸的同时，采用标准化的 XIAO Plus 背面布局，便于扩展板和自定义载板设计。

## 规格

<!-- | Product Name | Seeed Studio XIAO SAMD21 |
|-------------|-------------------------|
| **Chipset** | [Microchip SAMD21G18](https://www.microchip.com/en-us/product/atsamd21g18 ) |
| **Processor** | ARM Cortex-M0+ processor running at up to 48 MHz |
| **RAM** | 32KB SRAM |
| **Flash** | 256KB Flash |
| **Interface** | GPIO Pin x14<br/>Digital Pin x11<br/>Analog Pin x11<br/>DAC x1<br/>I2C x1<br/>UART x1<br/>SPI x1 |
| **Onboard** | User LED x1<br/>Power LED x1<br/>Status LEDs for Serial Communication (TX/RX Indicators) x2 |
| **Wireless Connectivity** | / |
| **Power** | Input voltage (Type-C): 5V<br/>Input voltage (BAT): 5V |
| **Max Output** | 5V@500mA<br/>3.3V@200mA |
| **Software Compatibility** | Arduino, PlatformIO, MicroPython, CircuitPython, Zephyr<br/>[Exhibition for XIAO Series - Seeed Studio Wiki](https://wiki.seeedstudio.com/cn/xiao_topic_page/ ) |
| **Working Temperature** | -40 to 85°C |
| **Dimensions** | 21×17.8mm |
| **Variants** | [Seeed Studio XIAO SAMD21 (Pre-Soldered) - Seeed Studio](https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html  )<br/>[Seeed Studio XIAO SAMD21 - Arduino Microcontroller - SAMD21 Cortex M0+ (3 PCs） - Seeed Studio](https://www.seeedstudio.com/Seeeduino-XIAO-3Pcs-p-4546.html  ) | -->

<table>
  <tbody>
    <tr>
      <th>Product Name</th>
      <td>Seeed Studio XIAO SAMD21</td>
      <td>Seeed Studio XIAO SAMD21 Plus</td>
    </tr>
    <tr>
      <th>Chipset</th>
      <td colspan="2">
        <a href="https://www.microchip.com/en-us/product/atsamd21g18">
          Microchip SAMD21G18
        </a>
      </td>
    </tr>
    <tr>
      <th>Processor</th>
      <td colspan="2">Arm® Cortex®-M0+ 处理器，最高运行频率 48 MHz</td>
    </tr>
    <tr>
      <th>RAM</th>
      <td colspan="2">32 KB SRAM</td>
    </tr>
    <tr>
      <th>Flash</th>
      <td colspan="2">256 KB Flash</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>
        GPIO 引脚 ×14<br />
        数字引脚 ×11<br />
        模拟引脚 ×11<br />
        DAC ×1<br />
        I2C ×1<br />
        UART ×1<br />
        SPI ×1
      </td>
      <td>
        GPIO 引脚 ×30<br />
        数字引脚 ×27<br />
        模拟引脚 ×11<br />
        DAC ×1<br />
        I2C ×2<br />
        UART ×1<br />
        SPI ×1<br />
        I2S ×1
      </td>
    </tr>
    <tr>
      <th>Onboard</th>
      <td>
        用户 LED ×1<br />
        电源 LED ×1<br />
        TX/RX 状态 LED ×2
      </td>
      <td>
        用户 LED ×1<br />
        Reset 按钮 ×1<br />
        Boot 按钮 ×1
      </td>
    </tr>
    <tr>
      <th>Battery Management</th>
      <td>无</td>
      <td>板载 PMIC</td>
    </tr>
    <tr>
      <th>Power</th>
      <td>
        输入电压（Type-C）：5 V<br />
        BAT 输入：不支持
      </td>
      <td>
        输入电压（Type-C）：5 V<br />
        BAT 输入：3.7 V 单节锂离子/锂聚合物电池
      </td>
    </tr>
    <tr>
      <th>BAT-to-3V3 Backflow Protection</th>
      <td>否</td>
      <td>是</td>
    </tr>
    <tr>
      <th>Working Temperature</th>
      <td colspan="2">-40°C 至 85°C</td>
    </tr>
    <tr>
      <th>Dimensions</th>
      <td colspan="2">21 × 17.8 mm</td>
    </tr>
    <tr>
      <th>Software Compatibility</th>
      <td colspan="2">
        Arduino、PlatformIO、MicroPython、CircuitPython、Zephyr 等
      </td>
    </tr>
  </tbody>
</table>

## **硬件概览**

<Tabs>
<TabItem value="XIAO SAMD21" label="XIAO SAMD21" default>

### XIAO SAMD21 正面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_SAMD21_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO SAMD21 背面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_SAMD21_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value="XIAO SAMD21 Plus" label="XIAO SAMD21 Plus">

### XIAO SAMD21 Plus 正面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-SAMD21-Plus-Front.png" style={{width:1000, height:'auto'}}/></div>

### XIAO SAMD21 Plus 背面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-SAMD21-Plus-Back.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

:::caution
对于通用 I/O 引脚：
MCU 的工作电压为 3.3V。如果接入通用 I/O 引脚的电压高于 3.3V，可能会导致芯片损坏。

对于电源引脚：
板载 DC-DC 转换电路可以将 5V 电压转换为 3.3V，从而允许通过 VIN-PIN 和 5V-PIN 使用 5V 电源为设备供电。

必须明确的是，XIAO SAMD21 背面的 VIN 和 GND 焊盘并非用于直接连接电池，尤其不能直接连接可充电锂电池（LiPo/Li-Ion）。该开发板缺少安全运行所必需的电池管理电路。这些焊盘只是一个替代电源输入点，会绕过板载的保护二极管。如果你希望使用电池为项目供电，必须使用专用的外部电池管理模块来提供充电和保护，然后将该模块的稳压输出连接到 XIAO 的 5V 引脚。

请在使用时多加注意，请不要掀开屏蔽罩。
:::

## 引脚映射

<!-- | XIAO Pin        | Function      | Chip Pin  |   Description      |
| :-------:      | :-----:        | :----------:         |       :---:     |
|5V              |VBUS             |                                      | Power Input/Output     |
| GND           |                 |                                      |                          |
| 3V3           |   3V3_OUT              |                                |    Power Output           |
|D0             |  Analog         |   PA02                                |     GPIO, ADC            |
| D1            |   Analog        |   PA04                                |        GPIO, ADC         |
| D2            |     Analog      | PA10                                  |    GPIO, ADC             |
| D3            |    Analog       |  PA11                                 |     GPIO, ADC            |
| D4            |  Analog,SDA   	| PA08		                              | GPIO, I2C Data, ADC        |
| D5            |  Analog,SCL     |	PA09	                                |	GPIO, I2C Clock, ADC       |
| D6            | Analog,TX       |  	PB08	                               |	GPIO, UART Transmit, ADC |  
| D7            |Analog,RX	      |  PB09	                                |   	GPIO, UART Receive, ADC |
|D8             | Analog,SPI_SCK  | 	PA07	                              |	GPIO, SPI Clock, ADC   |
|D9             | Analog,SPI_MISO |  	PA05                                |		GPIO, SPI Data, ADC  |
|D10            | Analog,SPI_MOSI |  PA06	                                | 	GPIO, SPI Data         |
|Reset          |                 |  RES	                                |	RESET                  |
|TX_LED         |                 |   PA19	                              |	TX_LED                 |
|RX_LED         |                 | PA18	                                |	RX_LED                 |
|Power_LED     |          |        VBUS	                                |       	CHG-LED_Red      |
|USER_LED       |                 |   PA17	                              |	User Light_Yellow      | -->

| XIAO Pin    | Function           | XIAO SAMD21   | XIAO SAMD21 Plus | Description                                                |
| :---------- | :----------------- | :------------ | :---------------- | :--------------------------------------------------------- |
| 5V          | VBUS               | VBUS          | VBUS              | USB 5 V 电源输入/输出                                      |
| GND         | GND                | GND           | GND               | 地                                                         |
| 3V3         | 3V3_OUT            | 3V3_OUT       | 3V3_OUT           | 3.3 V 电源输出                                             |
| D0          | A0 / DAC           | PA02          | PA02              | GPIO，ADC AIN0，DAC 输出；无硬件 PWM                       |
| D1          | A1                 | PA04          | PA04              | GPIO，ADC AIN4                                             |
| D2          | A2                 | PA10          | PA10              | GPIO，ADC AIN18                                            |
| D3          | A3                 | PA11          | PA11              | GPIO，ADC AIN19                                            |
| D4          | SDA0               | PA08          | PA08              | GPIO，ADC AIN16，I2C 数据                                  |
| D5          | SCL0               | PA09          | PA09              | GPIO，ADC AIN17，I2C 时钟                                  |
| D6          | TX                 | PB08          | PB08              | GPIO，ADC AIN2，UART 发送                                  |
| D7          | RX                 | PB09          | PB09              | GPIO，ADC AIN3，UART 接收                                  |
| D8          | SCK                | PA07          | PA07              | GPIO，ADC AIN7，SPI 时钟                                   |
| D9          | MISO               | PA05          | PA05              | GPIO，ADC AIN5，SPI 数据输入                               |
| D10         | MOSI               | PA06          | PA06              | GPIO，ADC AIN6，SPI 数据输出                               |
| D11         | TX_LED             | PA19          | -                 | XIAO SAMD21 上的内部 TX LED；在 Plus 上未定义             |
| D12         | GPIO               | PA18 (RX_LED) | PA28              | Plus 扩展 GPIO                                             |
| D13         | SCL1               | PA17 (USER_LED) | PA17            | Plus 扩展 GPIO 和 I2C1 时钟                               |
| D14         | SDA1               | -             | PA16              | Plus 扩展 GPIO 和 I2C1 数据                               |
| D15         | GPIO               | -             | PA15              | Plus 扩展 GPIO                                             |
| D16         | GPIO               | -             | PA14              | Plus 扩展 GPIO                                             |
| D17         | GPIO               | -             | PA13              | Plus 扩展 GPIO                                             |
| D18         | GPIO               | -             | PA12              | Plus 扩展 GPIO                                             |
| D19         | I2S_SD             | -             | PA19              | Plus 扩展 GPIO 和 I2S 数据                                |
| D20         | I2S_SCK            | -             | PA20              | Plus 扩展 GPIO 和 I2S 时钟                                |
| D21         | I2S_WS             | -             | PA21              | Plus 扩展 GPIO 和 I2S 字选择                              |
| D22         | GPIO               | -             | PB10              | Plus 扩展 GPIO                                             |
| D23         | GPIO               | -             | PB11              | Plus 扩展 GPIO                                             |
| D24         | GPIO               | -             | PB23              | Plus 扩展 GPIO                                             |
| D25         | GPIO               | -             | PA23              | Plus 扩展 GPIO                                             |
| D26         | GPIO               | -             | PB2               | Plus 扩展 GPIO                                             |
| D27         | GPIO               | -             | PA18              | Plus 扩展 GPIO                                             |
| VBAT_EN     | Battery Enable     | -             | PB2               | Plus 上的电池电源控制                                     |
| AIN11_VBAT  | Voltage Read       | -             | PB3               | 在 Plus 上读取电池电压                                    |
| Reset       | RESETN             | RESETN        | RESETN            | 低电平有效复位输入，封装引脚 40                           |
| TX_LED      | LED                | PA19          | -                 | 原始板 TX 指示灯，低电平点亮                              |
| RX_LED      | LED                | PA18          | -                 | 原始板 RX 指示灯，低电平点亮                              |
| USER_LED    | LED                | PA17          | -                 | 原始板用户 LED，低电平点亮                                |
| POWER_LED   | Power indicator    | 3V3           | -                 | 原始板绿色电源 LED；不是 MCU GPIO                         |
| RGB_LED     | WS2812B data       | -             | PA27              | Plus 可寻址 RGB LED 数据                                  |
| USER_BUTTON | Button             | -             | PB22              | Plus 用户按键，低电平有效                                 |
| VBAT_EN     | Battery ADC enable | -             | PB02              | 使能电池电压测量                                          |
| AIN11_VBAT  | Battery ADC        | -             | PB03 / AIN11      | 通过 1/2 分压后的电池电压                                 |
| CHARGE_LED  | Charging indicator | -             | -                 | Plus 硬件控制的充电 LED；不是 MCU GPIO                    |
| SWDIO       | SWD debug          | PA31          | PA31              | 串行线调试数据                                             |
| SWCLK       | SWD debug          | PA30          | PA30              | 串行线调试时钟                                             |

## 进入 Bootloader 模式

### 适用于 XIAO SAMD21

有时在用户烧录程序失败时，Seeed Studio XIAO SAMD21 的端口可能会消失。我们可以通过以下操作来解决这个问题：

- 将 Seeed Studio XIAO SAMD21 连接到你的电脑。
- 使用镊子或导线将图中的 RST 引脚短接两次。
- 橙色 LED 灯会闪烁并点亮。

此时，芯片进入 Bootloader 模式，烧录端口会再次出现。由于 samd21 芯片有两个分区，一个是 Bootloader，另一个是用户程序。产品在出厂时会在系统存储器中烧录一段 bootloader 代码。我们可以通过执行上述步骤在两种模式之间切换。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### 适用于 XIAO SAMD21 Plus

将 XIAO SAMD21 Plus 连接到你的电脑。连续按下 Reset 按钮两次即可进入 Bootloader 模式。

### 复位

如果你想复位 Seeed Studio XIAO SAMD21，请执行以下步骤：

- 将 Seeed Studio XIAO SAMD21 连接到你的电脑。
- 使用镊子或导线将 RST 引脚**只短接一次**
- 橙色 LED 灯会闪烁并点亮。

请注意：板载 LED 的行为与 Arduino 上的是相反的。在 Seeed Studio XIAO SAMD21 上，引脚需要被拉低，而在其他微控制器上则需要被拉高。  

### 中断

Seeed Studio XIAO SAMD21 上的所有引脚都支持中断，但有两个引脚不能同时使用：5 号引脚和 7 号引脚。关于中断的更多细节请查看[这里](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp)。

## 入门指南

### 硬件

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO SAMD21</th>
   <th>Seeed Studio XIAO SAMD21 Plus</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/xiao-samd21-pre.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/xiao-samd21-plus-pre.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-SAMD21-Plus-p-6933.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**所需材料**

- Seeed Studio XIAO SAMD21 x1
- 电脑 x1
- USB Type-C 线缆 x1

:::tip

有些 USB 线缆只能供电，不能传输数据。如果你没有 usb 线缆，或者不知道你的 usb 线缆是否可以传输数据，你可以查看 [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html)。
:::

- 步骤 1. 准备一个 Seeed Studio XIAO SAMD21 和一根 Type-C 线缆。

- 步骤 2. 将 Seeed Studio XIAO SAMD21 连接到你的电脑。然后黄色电源 LED 应该会亮起。

### 软件

:::note

如果这是你第一次使用 Arduino，我们强烈建议你参考 [Getting Started with Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino)
:::

- **步骤 1. 你需要安装 Arduino 软件。**

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

**启动 Arduino 应用程序**

双击你之前下载的 Arduino 应用程序（arduino.exe）。

:::note

如果 Arduino 软件以其他语言加载，你可以在首选项对话框中更改它。详情请参阅 [Arduino Software (IDE) 页面](https://www.arduino.cc/en/Guide/Environment#languages)。
:::

- **步骤 2. 打开 Blink 示例**  

打开 LED 闪烁示例草图：**File > Examples >01.Basics > Blink**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3. 将 Seeeduino 添加到你的 Arduino IDE**

点击 **File > Preference**，并在 Additional Boards Manager URLs 中填入以下 URL：

```url
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

点击 **Tools-> Board-> Boards Manager...**，在搜索框中输入关键字 "**Seeed Studio XIAO SAMD21**"。此时会出现 **Seeed SAMD Boards**。安装它。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" /></p>

#### XIAO SAMD21 闪烁

- **步骤 4. 选择你的开发板和端口**

安装好开发板后，点击 **Tools-> Board**，找到 **Seeed Studio XIAO** 并选择它。现在你已经为 Arduino IDE 设置好了 Seeed Studio XIAO SAMD21 开发板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/1.jpg" alt="pir" width={600} height="auto" /></p>

在 Tools | Serial Port 菜单中选择 Arduino 开发板的串口设备。这通常是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串口）。要确认的话，你可以断开 Arduino 开发板并重新打开菜单；消失的那一项应该就是 Arduino 开发板。重新连接开发板并选择该串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/2.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 5. 上传程序**  

现在，只需点击环境中的 **Upload** 按钮。等待几秒钟，如果上传成功，状态栏中会出现 "Done uploading." 的消息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={800} height="auto" /></p>

 上传完成几秒钟后，你应该会看到板子上的 13 号引脚（L）LED 开始闪烁（橙色）。如果是这样，恭喜你！你已经成功运行 Arduino。如果遇到问题，请查看故障排除建议。

:::note
最大闪存容量为 8 KB。更多信息请参考资源部分中的 ATSAMD21G18A-MU 数据手册。
:::

#### XIAO SAMD21 Plus 闪烁

在 XIAO SAMD21 Plus 上，L（LED）引脚已被移除。它被 RGB_LED 取代，通过引脚 PA27 控制。

‑ 将目标开发板更改为 XIAO M0 Plus。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/gst_1.png" alt="pir" width={800} height="auto" /></p>

- 安装 Adafruit_NeoPixel 库并更新到最新版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/gst_2.png" alt="pir" width={800} height="auto" /></p>

‑ 将代码替换为下面的代码片段。RGB_LED 的引脚是 PA27，已被重新定义为 PIN_LED_RGB。

:::caution

如果在过高亮度下运行，RGB LED 可能会导致眼睛疲劳或损伤；建议佩戴适当的眼部防护。

:::

```cpp
#include <Adafruit_NeoPixel.h>

#define NUMPIXELS 1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN_NEOPIXEL, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();

  pinMode(NEOPIXEL_POWER, OUTPUT);
  digitalWrite(NEOPIXEL_POWER, HIGH);

// Set overall brightness (0~255)
// Recommended eye-friendly range: 10~50
  pixels.setBrightness(50);
}


void loop() {

  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(15, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(103, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 242, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 23, 23));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(12, 66, 101));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.show();
  delay(500);
}
```

‑ 点击 Upload 来烧录程序。完成后，RGB‑LED 将会点亮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/gst_3.gif" alt="pir" width={600} height="auto" /></p>

:::note
最大闪存容量为 8 KB。更多信息请参考资源部分中的 ATSAMD21G18A-MU 数据手册。
:::

## 引脚复用

我们不需要自己配置引脚，使用引脚之后，你可以直接调用函数。

### 数字输入和输出

- 使用引脚 6 作为数字引脚：

```c
const int buttonPin = 6;     // the number of the pushbutton pin
const int ledPin =  13;      // the number of the LED pin

int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }
}
```

### AnalogRead

- 使用引脚 6 作为模拟引脚：

```c


void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(sensorPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(sensorValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(sensorValue);
}
```

### 串口

- 使用引脚 6 作为 UART 的 TX 引脚（UART 的 RX 引脚是引脚 7）：

```c

void setup() {
    Serial1.begin(115200);
    while (!Serial);
}

void loop() {
    Serial1.println("Hello,World");
    delay(1000);
}
```

### I2C

- 使用引脚 5 作为 IIC 的 SCL 引脚（IIC 的 SDA 引脚是引脚 4）：

```c
// Wire Master Writer
// by Nicholas Zambetti <http://www.zambetti.com>

// Demonstrates use of the Wire library
// Writes data to an I2C/TWI slave device
// Refer to the "Wire Slave Receiver" example for use with this

// Created 29 March 2006

// This example code is in the public domain.


#include <Wire.h>

void setup()
{
  Wire.begin(); // join i2c bus (address optional for master)
}

byte x = 0;

void loop()
{
  Wire.beginTransmission(4); // transmit to device #4
  Wire.write("x is ");        // sends five bytes
  Wire.write(x);              // sends one byte  
  Wire.endTransmission();    // stop transmitting
  x++;
  delay(500);
}
```

### SPI

- 使用引脚 8 作为 SPI 的 SCK 引脚（SPI 的 MISO 引脚是引脚 9，MOSI 引脚是引脚 10）：

```c
#include <SPI.h>
const int CS = 7;
void setup (void) {
   digitalWrite(CS, HIGH); // disable Slave Select
   SPI.begin ();
   SPI.setClockDivider(SPI_CLOCK_DIV8);//divide the clock by 8
}

void loop (void) {
   char c;
   digitalWrite(CS, LOW); // enable Slave Select
   // send test string
   for (const char * p = "Hello, world!\r" ; c = *p; p++) {
      SPI.transfer (c);
   }
   digitalWrite(CS, HIGH); // disable Slave Select
   delay(2000);
}
```

### QTouch

关于如何使用 QTouch，我们提供了一个示例项目：[How to Make a Fruit Piano on Seeed Studio XIAO SAMD21 ’s Q-Touch Function](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/)。

### 模拟输入和输出

虽然它仍然具有基于 PWM 的“模拟输出”，但 SAMD21 还具有真正的模拟输出，即数模转换器（DAC）。该模块可以产生 0 到 3.3V 之间的模拟电压。它可以用来产生更自然声音的音频，或者作为一种“数字电位器”来控制模拟设备。

DAC 仅在 Arduino 引脚 A0 上可用，并通过 analogWrite(A0, `<value>`) 控制。DAC 最多可以设置为 10 位分辨率（请确保在 setup 中调用 [**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/)），这意味着 0 到 1023 之间的数值会将电压设置在 0 到 3.3V 之间的某个值。

除了 DAC 之外，SAMD21 的 ADC 通道也不同于 ATmega328：它们支持最高 12 位分辨率。这意味着模拟输入值可以在 0-4095 之间变化，对应 0 到 3.3V 之间的电压。要在 12 位模式下使用 ADC，请确保在 setup 中调用 [**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/)。

**串行绘图 DAC**

下面是一个同时演示 DAC 和 ADC 的示例。要搭建实验电路，将 A0 连接到 A1 —— 我们用模拟电压驱动 A0，然后用 A1 读取它。这是我们在教程中使用过的最简单电路：

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>

:::note
Seeed Studio XIAO SAMD21 使用了 [**Seeed Studio XIAO SAMD21 expansion board**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
:::

该示例程序在 A0 上产生一个正弦波输出，电压范围为 0 到 3.3V。然后使用 A1 将该输出读入其 ADC，并将其转换为 0 到 3.3V 之间的电压。

当然，你可以打开串口监视器来查看电压值的连续输出。但如果通过文本难以想象正弦波的形状，可以通过依次点击 Tools > Serial Plotter 打开 Arduino 的新串行绘图器。  

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>

感谢 [Aleksei Tertychnyi](https://github.com/WeSpeakEnglish) 提交代码，所有相关功能均由他开发并贡献。

```cpp
#define DAC_PIN A0 // Make code a bit more legible
float x = 0; // Value to take the sin of
float increment = 0.02;  // Value to increment x by each time
// Frequency of sine wave is about 1.37 Hz

void setup() 
{
  analogWriteResolution(10); // Set analog out resolution to max, 10-bits
  analogReadResolution(12); // Set analog input resolution to max, 12-bits

  Serial.begin(9600);
}

void loop() 
{
  // Generate a voltage value between 0 and 1023. 
  // Let's scale a sin wave between those values:
  // Offset by 511.5, then multiply sin by 511.5.
  int dacVoltage = (int)(511.5 + 511.5 * sin(x));
  x += increment; // Increase value of x

  // Generate a voltage between 0 and 3.3V.
  // 0= 0V, 1023=3.3V, 512=1.65V, etc.
  analogWrite(DAC_PIN, dacVoltage);

  // Now read A1 (connected to A0), and convert that
  // 12-bit ADC value to a voltage between 0 and 3.3.
  float voltage = analogRead(A1) * 3.3 / 4096.0;
  Serial.println(voltage); // Print the voltage.
  delay(1); // Delay 1ms
}
```

**结果**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/THonny_DAC.jpg" alt="pir" width={600} height="auto" /></p>

## 电池使用

:::note

只有 XIAO SAMD21 Plus 在背面带有 BAT 电池连接器，请注意区分。

:::

XIAO SAMD21 Plus 可以使用 3.7V 锂电池作为电源输入。你可以参考下图了解接线方式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/battery.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::caution

焊接时请务必注意不要让正负极短路，以免烧毁电池和设备。如果电池本身带电，切勿直接将其焊接到电路板上，否则可能烧毁电路板。在电路上电的情况下发生短路风险极大，建议使用适配器。

:::

### 电池电压读取示例

根据原理图，**SGM40567-4.2XG/TR** 提供单节锂电池充电功能，充电电流约为 **200 mA**。在充电过程中，**Charge_LED** 会闪烁。<br/>

电池电压测量由 **TPS22916CNYFPR** 负载开关通过 **PB2/VBAT_EN** 控制，从而降低待机功耗。电池电压经二分压后，通过 **PB3/AIN11_VBAT** ADC 引脚进行测量。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/battery_read.png" style={{width:800, height:'auto'}}/></div>
<br/>

电池电压是通过电阻分压电路测量的。ADC 读取到的电压是实际电池电压的一半，因此软件必须将 ADC 测量值乘以 2 才能得到实际电池电压。

在 Arduino 内核中，PB02 和 PB03 分别映射为引脚编号 31 和 32。按如下方式进行定义：

```cpp
// VBAT_EN on PB02
#define PIN_VBAT_EN  (31u)

// AIN11_VBAT on PB03
#define PIN_VBAT_ADC (32u)
```

<details>

<summary>电池读取示例</summary>

```c
constexpr float ADC_VREF = 3.3f;
constexpr float ADC_MAX = 4095.0f;
constexpr float DIVIDER_RATIO = 2.0f;  // R5 = R6 = 10 kΩ

float readBatteryVoltage() {
  digitalWrite(PIN_VBAT_EN, HIGH);
  delay(10);

  analogRead(PIN_VBAT_ADC);  // Discard a stale reading

  uint32_t sum = 0;
  constexpr int samples = 16;

  for (int i = 0; i < samples; i++) {
    sum += analogRead(PIN_VBAT_ADC);
    delay(2);
  }

  digitalWrite(PIN_VBAT_EN, LOW);

  float adcRaw = sum / static_cast<float>(samples);
  float adcVoltage = adcRaw * ADC_VREF / ADC_MAX;

  return adcVoltage * DIVIDER_RATIO;
}

void setup() {
  Serial.begin(115200);

  pinMode(PIN_VBAT_EN, OUTPUT);
  digitalWrite(PIN_VBAT_EN, LOW);

  analogReadResolution(12);  // SAMD21 ADC: 0–4095
}

void loop() {
  float batteryVoltage = readBatteryVoltage();

  Serial.print("Battery: ");
  Serial.print(batteryVoltage, 3);
  Serial.println(" V");

  delay(1000);
}
```

</details>
<br/>
:::note

对于低功耗应用，在完成电池电压测量后，请关闭 **BAT_EN**，以减少由分压电阻引起的静态功耗。

:::

- 当电池正在充电时，**Charge_LED** 会闪烁。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_detection.gif" style={{width:400, height:'auto'}}/></div>
<br/>

- 电池电压测量结果：锂离子电池的实测电压可能与电池上标注的标称值不同，请始终以实际测量值为准。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/battery_read_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

## 示例应用

- [How to use Seeed Studio XIAO SAMD21 to log in to your Raspberry PI](https://wiki.seeedstudio.com/cn/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [SPI Communication Interface](https://wiki.seeedstudio.com/cn/XIAO-SPI-Communication-Interface)

- [How to unbrick a dead xiao using raspberry pi](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990)。感谢 John_Doe 的分享。

## 资源

### XIAO SAMD21

**硬件设计**
- **📄[Datasheet]** [Atmel SAMD21G18 数据手册](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)
- **📄[Schematic]** [XIAO SAMD21 原理图](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)
- **🗃️[PCB Design Files]** 
  - [XIAO SAMD21 KiCad 工程](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO_SAMD21_v2.1_SCH&PCB_20260304.zip)  
  - [XIAO SAMD21 Eagle 工程](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)
- **🗃️[PCB Design Libraries]** 
  - [XIAO 系列封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Sheet]** [XIAO SAMD21 引脚分布表](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx )

**结构设计**
- **📄[2D 尺寸]** [DXF 格式的 XIAO 尺寸图](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar )
- **📄[3D 模型]** [XIAO SAMD21 3D 模型](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip )

**软件与工具**
- **📄[Factory Firmware]** [XIAO SAMD21 出厂固件](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip )

### XIAO SAMD21 Plus

**硬件设计**
- **📄[Datasheet]** [Atmel SAMD21G18 数据手册](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)
- **📄[Schematic]** [XIAO SAMD21 Plus 原理图](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/202004620_XIAO-SAMD21Plus_260422.pdf)
- **🗃️[PCB Design Files]** 
  - [XIAO SAMD21 Plus KiCad 工程](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/202004620_XIAO-SAMD21-Plus_V1.0_SCH&PCB_20260422.zip)  
  - [XIAO SAMD21 Plus Eagle 工程](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)
- **🗃️[PCB Design Libraries]** 
  - [XIAO 系列封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO 系列原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[引脚分布表]** [XIAO SAMD21 Plus 引脚分布表](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-PLUS-pinout_sheet.xlsx )

**机械设计**
- **📄[2D 尺寸]** [DXF 格式的 XIAO 尺寸图](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar )
- **📄[3D 模型]** [XIAO SAMD21 Plus 3D 模型](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip )

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[电子书]** [XIAO：强大性能，小巧板卡——精通 Arduino 与 TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
