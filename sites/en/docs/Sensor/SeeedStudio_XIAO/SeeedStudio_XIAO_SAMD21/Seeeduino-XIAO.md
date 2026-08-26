---
description: Getting Started with Seeed Studio XIAO SAMD21 
title: Getting Started with Seeed Studio XIAO SAMD21 Series
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
url: https://wiki.seeedstudio.com/Seeeduino-XIAO/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Getting Started with Seeed Studio XIAO SAMD21 Series

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-SAMD21-Plus-p-6933.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Overview

The Seeed Studio XIAO SAMD21, which used to be named Seeeduino XIAO, is the first debut of the [Seeed Studio XIAO family, a series of powerful thumb-size dev boards compatible with Arduino](https://www.seeedstudio.com/xiao-series-page). It carries the powerful ATSAMD21G18A-MU which is a low-power microcontroller. On the other hand, this little board has good performance in processing but needs less power. It is designed in a tiny size and can be used for wearable devices and small projects.

Seeed Studio XIAO SAMD21 has 14 PINs, which can be used for 11 digital interfaces, 11 analog interfaces, 10 PWM interfaces (d1-d10), 1 DAC output pin D0, 1 SWD pad interface, 1 I2C interface, 1 SPI interface, 1 UART interface, Serial communication indicator (T/R), Blink light (L) through pin multiplexing. The colors of LEDs(Power, L,RX,TX) are green, yellow, blue, and blue. Moreover, Seeed Studio XIAO SAMD21 has a Type-C interface that can supply power and download code. There are two reset buttons, you can short-connect them to reset the board.

Powered by Microchip's SAMD21G18A ARM Cortex-M0+ 32-bit processor, XIAO SAMD21 Plus brings enhanced flexibility and expandability to the tiny and versatile XIAO SAMD21. While maintaining all the powerful features including Arduino, MicroPython, and PlatformIO compatibility, the Plus variant features redesigned castellations and backside pad layout, offering 16 additional GPIOs, integrated Li-ion battery management, dedicated Reset and Boot buttons, and an onboard programmable WS2812 RGB LED. It is ideal for advanced IoT projects, battery-powered wearables, embedded applications, and production-ready SoM designs.

## Documentations

There are two documents on the usage of **Seeed Studio XIAO SAMD21** which focus on different areas, check the table below for reference:

|[**Documentation by Seeed**](https://wiki.seeedstudio.com/Seeeduino-XIAO/)|[**Documentation by Nanase**](https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|Pinout Digram|Interface|
|Seeed Studio XIAO SAMD21 Getting Started|Seeed Studio XIAO SAMD21 with MicroSD Card(SPI)|
|Seeed Studio XIAO SAMD21 GPIO Usage|Seeed Studio XIAO SAMD21 with GPS(UART)|
|Seeed Studio XIAO SAMD21 Resources|Single Cycle IOBUS|

<!-- ### CircuitPython on Seeed Studio XIAO SAMD21

- Get started with [**CircuitPython on Seeed Studio XIAO SAMD21 **](https://wiki.seeedstudio.com/Seeeduino-XIAO-CircuitPython). -->

## Features

- Powerful MCU: Microchip ATSAMD21G18A Arm® Cortex®-M0+ processor at 48 MHz, with 256 KB Flash, 32 KB SRAM, and native USB support.
- Expanded I/O: XIAO SAMD21 Plus retains the standard 14-pin XIAO layout and adds 16 GPIOs through 1.27 mm backside SMD castellations, with PWM, DAC, I2C, UART, SPI, I2S, and SWD support.
- Integrated Power Management: Supports direct Li-ion battery connection, onboard charging, backflow protection, and charge-status indication.
- Flexible Development: Compatible with Arduino IDE, PlatformIO, CircuitPython, and TinyGo.
- Compact and Ecosystem-Ready: Maintains the 21 × 17.8 mm breadboard-friendly XIAO form factor while adopting the standardized XIAO Plus backside layout for expansion boards and custom carrier designs.

## Specification

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
| **Software Compatibility** | Arduino, PlatformIO, MicroPython, CircuitPython, Zephyr<br/>[Exhibition for XIAO Series - Seeed Studio Wiki](https://wiki.seeedstudio.com/xiao_topic_page/ ) |
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
      <td colspan="2">Arm® Cortex®-M0+ processor running at up to 48 MHz</td>
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
        GPIO Pin ×14<br />
        Digital Pin ×11<br />
        Analog Pin ×11<br />
        DAC ×1<br />
        I2C ×1<br />
        UART ×1<br />
        SPI ×1
      </td>
      <td>
        GPIO Pin ×30<br />
        Digital Pin ×27<br />
        Analog Pin ×11<br />
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
        User LED ×1<br />
        Power LED ×1<br />
        TX/RX Status LED ×2
      </td>
      <td>
        User LED ×1<br />
        Reset Button ×1<br />
        Boot Button ×1
      </td>
    </tr>
    <tr>
      <th>Battery Management</th>
      <td>None</td>
      <td>Onboard PMIC</td>
    </tr>
    <tr>
      <th>Power</th>
      <td>
        Input Voltage (Type-C): 5 V<br />
        BAT Input: Not supported
      </td>
      <td>
        Input Voltage (Type-C): 5 V<br />
        BAT Input: 3.7 V single-cell Li-ion/LiPo battery
      </td>
    </tr>
    <tr>
      <th>BAT-to-3V3 Backflow Protection</th>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Working Temperature</th>
      <td colspan="2">-40°C to 85°C</td>
    </tr>
    <tr>
      <th>Dimensions</th>
      <td colspan="2">21 × 17.8 mm</td>
    </tr>
    <tr>
      <th>Software Compatibility</th>
      <td colspan="2">
        Arduino, PlatformIO, MicroPython, CircuitPython, Zephyr, and more
      </td>
    </tr>
  </tbody>
</table>

## **Hardware Overview**

<Tabs>
<TabItem value="XIAO SAMD21" label="XIAO SAMD21" default>

### XIAO SAMD21 Front

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_SAMD21_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO SAMD21 Back

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_SAMD21_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value="XIAO SAMD21 Plus" label="XIAO SAMD21 Plus">

### XIAO SAMD21 Plus Front

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-SAMD21-Plus-Front.png" style={{width:1000, height:'auto'}}/></div>

### XIAO SAMD21 Plus Back

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-SAMD21-Plus-Back.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

:::caution
For general I/O pins:
Working voltage of MCU is 3.3V. Voltage input connected to general I/O pins may cause chip damage if it' higher than 3.3V .

For power supply pins:
The built-in DC-DC converter circuit able to change 5V voltage into 3.3V allows to power the device with a 5V supply via VIN-PIN and 5V-PIN.

It is critical to understand that the VIN and GND pads on the back of the XIAO SAMD21 are not designed for directly connecting a battery, especially not a rechargeable lithium battery (LiPo/Li-Ion). The board lacks the essential battery management circuitry required for safe operation. These pads are simply an alternative power input point that bypasses the board's built-in protection diode. If you wish to power your project with a battery, you must use a dedicated external battery management module that provides charging and protection, and then connect that module's regulated output to the XIAO's 5V pin.

Please pay attention to use, do not lift the shield cover.
:::

## Pin Map

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
| 5V          | VBUS               | VBUS          | VBUS              | USB 5 V power input/output                                 |
| GND         | GND                | GND           | GND               | Ground                                                     |
| 3V3         | 3V3_OUT            | 3V3_OUT       | 3V3_OUT           | 3.3 V power output                                         |
| D0          | A0 / DAC           | PA02          | PA02              | GPIO, ADC AIN0, DAC output; no hardware PWM                |
| D1          | A1                 | PA04          | PA04              | GPIO, ADC AIN4                                             |
| D2          | A2                 | PA10          | PA10              | GPIO, ADC AIN18                                            |
| D3          | A3                 | PA11          | PA11              | GPIO, ADC AIN19                                            |
| D4          | SDA0               | PA08          | PA08              | GPIO, ADC AIN16, I2C data                                  |
| D5          | SCL0               | PA09          | PA09              | GPIO, ADC AIN17, I2C clock                                 |
| D6          | TX                 | PB08          | PB08              | GPIO, ADC AIN2, UART transmit                              |
| D7          | RX                 | PB09          | PB09              | GPIO, ADC AIN3, UART receive                               |
| D8          | SCK                | PA07          | PA07              | GPIO, ADC AIN7, SPI clock                                  |
| D9          | MISO               | PA05          | PA05              | GPIO, ADC AIN5, SPI data input                             |
| D10         | MOSI               | PA06          | PA06              | GPIO, ADC AIN6, SPI data output                            |
| D11         | TX_LED             | PA19          | -                 | Internal TX LED on XIAO SAMD21; not defined on Plus        |
| D12         | GPIO               | PA18 (RX_LED) | PA28              | Plus expansion GPIO                                        |
| D13         | SCL1               | PA17 (USER_LED) | PA17            | Plus expansion GPIO and I2C1 clock                         |
| D14         | SDA1               | -             | PA16              | Plus expansion GPIO and I2C1 data                          |
| D15         | GPIO               | -             | PA15              | Plus expansion GPIO                                        |
| D16         | GPIO               | -             | PA14              | Plus expansion GPIO                                        |
| D17         | GPIO               | -             | PA13              | Plus expansion GPIO                                        |
| D18         | GPIO               | -             | PA12              | Plus expansion GPIO                                        |
| D19         | I2S_SD             | -             | PA19              | Plus expansion GPIO and I2S data                           |
| D20         | I2S_SCK            | -             | PA20              | Plus expansion GPIO and I2S clock                          |
| D21         | I2S_WS             | -             | PA21              | Plus expansion GPIO and I2S word select                    |
| D22         | GPIO               | -             | PB10              | Plus expansion GPIO                                        |
| D23         | GPIO               | -             | PB11              | Plus expansion GPIO                                        |
| D24         | GPIO               | -             | PB23              | Plus expansion GPIO                                        |
| D25         | GPIO               | -             | PA23              | Plus expansion GPIO                                        |
| D26         | GPIO               | -             | PB2               | Plus expansion GPIO                                        |
| D27         | GPIO               | -             | PA18              | Plus expansion GPIO                                        |
| VBAT_EN     | Battery Enable     | -             | PB2               | Battery power control on Plus                              |
| AIN11_VBAT  | Voltage Read       | -             | PB3               | Read the battery voltage on Plus                           |
| Reset       | RESETN             | RESETN        | RESETN            | Active-low reset input, package pin 40                     |
| TX_LED      | LED                | PA19          | -                 | Original-board TX indicator, active low                    |
| RX_LED      | LED                | PA18          | -                 | Original-board RX indicator, active low                    |
| USER_LED    | LED                | PA17          | -                 | Original-board user LED, active low                        |
| POWER_LED   | Power indicator    | 3V3           | -                 | Original-board green power LED; not an MCU GPIO            |
| RGB_LED     | WS2812B data       | -             | PA27              | Plus addressable RGB LED data                              |
| USER_BUTTON | Button             | -             | PB22              | Plus user button, active low                               |
| VBAT_EN     | Battery ADC enable | -             | PB02              | Enables battery-voltage measurement                        |
| AIN11_VBAT  | Battery ADC        | -             | PB03 / AIN11      | Battery voltage through a 1/2 divider                      |
| CHARGE_LED  | Charging indicator | -             | -                 | Plus hardware-controlled charging LED; not an MCU GPIO     |
| SWDIO       | SWD debug          | PA31          | PA31              | Serial Wire Debug data                                     |
| SWCLK       | SWD debug          | PA30          | PA30              | Serial Wire Debug clock                                    |

## Enter Bootloader Mode

### For XIAO SAMD21

Sometimes the Seeed Studio XIAO SAMD21 port may disappear when user programming process fails. we can solve this problem by the following operation:

- Connect the Seeed Studio XIAO SAMD21 to your computer.
- Use tweezers or short lines to short the RST pins in the diagram twice.
- The orange LED lights flicker on and light up.

At this point, the chip enters Bootloader mode and the burn port appears again. Because the samd21 chip has two partitions, one is the Bootloader and the other is the user program. The product will burn a bootloader code in the system memory when it leaves the factory. We can switch modes by performing the above steps.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### For XIAO SAMD21 Plus

Connect the XIAO SAMD21 Plus to your computer. Press the Reset button twice consecutively to enter Bootloader Mode.

### Reset

If you want to reset the Seeed Studio XIAO SAMD21 , perform the following steps:

- Connect the Seeed Studio XIAO SAMD21 to your computer.
- Use tweezers or short lines to short the RST pins **only once**
- The orange LED lights flicker on and light up.

Please note: The behavior of the built-in LED is reversed to the one on an Arduino. On the Seeed Studio XIAO SAMD21 , the pin has to be pulled low, whereas on other micro-controllers it has to be pulled high.  

### Interrupt

All pins on Seeed Studio XIAO SAMD21 support interrupts, but two pins cannot be used at the same time: 5 pin and 7 pin. For more detail about Interrupt please check [here](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp).

## Getting Started

### Hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-SAMD21-Plus-p-6933.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**Materials required**

- Seeed Studio XIAO SAMD21 x1
- Computer x1
- USB Type-C cable x1

:::tip

Some USB cables can only supply power and cannot transfer data. If you don't have a usb cable or don't know if your usb cable can transmit data, you can check [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

- Step 1. Prepare a Seeed Studio XIAO SAMD21 and a Type-C cable.

- Step 2. Connect the Seeed Studio XIAO SAMD21 to your computer.Then the yellow power LED should go on.

### Software

:::note

If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino)
:::

- **Step 1. You need to Install an Arduino Software.**

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

**Launch the Arduino application**

Double-click the Arduino application (arduino.exe) you have previously downloaded.

:::note

If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.
:::

- **Step 2. Open the Blink example**  

Open the LED blink example sketch: **File > Examples >01.Basics > Blink**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **Step 3. Add Seeeduino to your Arduino IDE**

Click on **File > Preference**, and fill Additional Boards Manager URLs with the url below:

```url
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

Click **Tools-> Board-> Boards Manager...**, print  keyword "**Seeed Studio XIAO SAMD21**" in the searching blank. Here comes the **Seeed SAMD Boards**. Install it.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" /></p>

#### XIAO SAMD21 Blink

- **Step 4. Select your board and port**

After installing the board, click **Tools-> Board**, find **Seeed Studio XIAO** and select it. Now you have already set up the board of Seeed Studio XIAO SAMD21 for Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/1.jpg" alt="pir" width={600} height="auto" /></p>

Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (**COM1** and **COM2** are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/2.jpg" alt="pir" width={600} height="auto" /></p>

- **Step 5.Upload the program**  

Now, simply click the **Upload** button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={800} height="auto" /></p>

 A few seconds after the upload finishes, you should see the pin 13 (L) LED on the board start to blink (in orange). If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions.

:::note
The maximum flash size is 8 KB. For more information, refer to the ATSAMD21G18A-MU datasheet in the resources section.
:::

#### XIAO SAMD21 Plus Blink

On the XIAO SAMD21 Plus, the L (LED) pin has been removed. It is replaced by the RGB_LED, which is controlled via pin PA27.

‑ Change the target board to XIAO M0 Plus.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/gst_1.png" alt="pir" width={800} height="auto" /></p>

- Install the Adafruit_NeoPixel library and update it to the latest version.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/gst_2.png" alt="pir" width={800} height="auto" /></p>

‑ Replace the code with the snippet below. The pin for RGB_LED is PA27, which has been redefined as PIN_LED_RGB.

:::caution

The RGB LEDs may cause eye strain or injury if operated at excessive brightness; proper eye protection is recommended.

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

‑ Click Upload to flash the program. Once completed, the RGB‑LED will light up.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/gst_3.gif" alt="pir" width={600} height="auto" /></p>

:::note
The maximum flash size is 8 KB. For more information, refer to the ATSAMD21G18A-MU datasheet in the resources section.
:::

## Pin Multiplexing

We don't need to configure the pins ourselves, after using the pins, you can call a function directly.

### Digital Input and Output

- Use pin 6 as the digital pin:

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

- Use pin 6 as the analog pin:

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

### Serial

- Use pin 6 as the TX pin of UART(RX pin of UART is pin 7):

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

- Use pin 5 as the SCL pin of IIC(SDA pin of IIC is pin 4):

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

- Use pin 8 as the SCK pin of SPI(MISO pin of SPI is pin 9,MOSI pin of SPI is pin 10):

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

For how to use QTouch, we provide an example project: [How to Make a Fruit Piano on Seeed Studio XIAO SAMD21 ’s Q-Touch Function](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/).

### Analog Input and Output

While it still has PWM-based "analog outputs", the SAMD21 also features true analog output in the form of a digital-to-analog converter (DAC). This module can produce an analog voltage between 0 and 3.3V. It can be used to produce audio with more natural sound, or as a kind of "digital potentiometer" to control analog devices.

The DAC is only available on the Arduino pin A0, and is controlled using analogWrite(A0, `<value>`). The DAC can be set up to 10-bit resolution (make sure to call [**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/) in your setup), which means values between 0 and 1023 will set the voltage to somewhere between 0 and 3.3V.

In addition to the DAC, the SAMD21's ADC channels also stand apart from the ATmega328: they're equipped with up to 12-bit resolution. That means the analog input values can range from 0-4095, representing a voltage between 0 and 3.3V. To use the ADC's in 12-bit mode, make sure you call [**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/) in your setup.

**Serial Plotting the DAC**

Here's an example that demonstrates both the DAC and the ADC. To set the experiment up, connect A0 to A1 -- we'll drive A0 with an analog voltage, then read it with A1. It's the simplest circuit we've ever put in a tutorial:

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>

:::note
The Seeed Studio XIAO SAMD21 using the [**Seeed Studio XIAO SAMD21 expansion board**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
:::

This sketch produces a sine wave output on A0, with values ranging from 0 to 3.3V. Then it uses A1 to read that output into its ADC, and convert it into a voltage between 0 and 3.3V.

You can, of course, open the serial monitor to view the voltage values stream by. But if the the sine wave is hard to visualize through text, check out Arduino's new Serial Plotter, by going to Tools > Serial Plotter.  

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>
  
Thank you to [Aleksei Tertychnyi](https://github.com/WeSpeakEnglish) for submitting the code, all related functionalities were developed and contributed by him.

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

**Result**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/THonny_DAC.jpg" alt="pir" width={600} height="auto" /></p>

## Battery Usage

:::note

Only the XIAO SAMD21 Plus features a BAT battery connector on its back side, please take note.

:::

The XIAO SAMD21 Plus is capable of using a 3.7V lithium battery as the power supply input. You can refer to the following diagram for the wiring method.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/battery.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::caution

Please be careful not to short-circuit the positive and negative terminals and burn the battery and equipment when soldering. If the battery has power, never solder it onto the board, as this may burn out the circuit board. Short-circuiting while the circuit is powered on poses a significant risk; it is recommended to use an adapter.

:::

### Battery Voltage Reading Example

According to the schematic, the **SGM40567-4.2XG/TR** provides single-cell lithium battery charging with a charging current of approximately **200 mA**. The **Charge_LED** blinks during charging.<br/>

Battery voltage measurement is controlled by the **TPS22916CNYFPR** load switch through **PB2/VBAT_EN**, reducing standby power consumption. The battery voltage is divided by two and measured through the **PB3/AIN11_VBAT** ADC pin.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/battery_read.png" style={{width:800, height:'auto'}}/></div>
<br/>

The battery voltage is measured using a resistor-divider circuit. The voltage read by the ADC is half of the actual battery voltage, so the software must multiply the ADC measurement by 2 to obtain the actual battery voltage.

In the Arduino core, PB02 and PB03 are mapped to pin numbers 31 and 32, respectively. Define them as follows:

```cpp
// VBAT_EN on PB02
#define PIN_VBAT_EN  (31u)

// AIN11_VBAT on PB03
#define PIN_VBAT_ADC (32u)
```

<details>

<summary>Battery read example</summary>

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

For low-power applications, disable **BAT_EN** after the battery voltage measurement is complete to reduce the quiescent power consumption caused by the voltage-divider resistors.

:::

- The **Charge_LED** blinks while the battery is charging.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_detection.gif" style={{width:400, height:'auto'}}/></div>
<br/>

- Battery voltage measurement result: The measured voltage of a lithium-ion battery may differ from the nominal value printed on the battery. Always refer to the actual measured value.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/battery_read_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

## The sample application

- [How to use Seeed Studio XIAO SAMD21 to log in to your Raspberry PI](https://wiki.seeedstudio.com/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [SPI Communication Interface](https://wiki.seeedstudio.com/XIAO-SPI-Communication-Interface)

- [How to unbrick a dead xiao using raspberry pi](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990). Thanks John_Doe for sharing.

## Resources

### XIAO SAMD21

**Hardware Design**
- **📄[Datasheet]** [Atmel SAMD21G18 Datasheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)
- **📄[Schematic]** [XIAO SAMD21 Schematic](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)
- **🗃️[PCB Design Files]** 
  - [XIAO SAMD21 KiCad Project](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO_SAMD21_v2.1_SCH&PCB_20260304.zip)  
  - [XIAO SAMD21 Eagle Project](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)
- **🗃️[PCB Design Libraries]** 
  - [XIAO Series Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO Series SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Sheet]** [XIAO SAMD21 Pinout Sheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx )

**Mechanical Design**
- **📄[2D Dimensions]** [XIAO Dimension in DXF](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar )
- **📄[3D Model]** [XIAO SAMD21 3D Model](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip )

**Software & Tools**
- **📄[Factory Firmware]** [XIAO SAMD21 Factory Firmware](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip )

### XIAO SAMD21 Plus

**Hardware Design**
- **📄[Datasheet]** [Atmel SAMD21G18 Datasheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)
- **📄[Schematic]** [XIAO SAMD21 Plus Schematic](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/202004620_XIAO-SAMD21Plus_260422.pdf)
- **🗃️[PCB Design Files]** 
  - [XIAO SAMD21 Plus KiCad Project](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/202004620_XIAO-SAMD21-Plus_V1.0_SCH&PCB_20260422.zip)  
  - [XIAO SAMD21 Plus Eagle Project](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)
- **🗃️[PCB Design Libraries]** 
  - [XIAO Series Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO Series SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Sheet]** [XIAO SAMD21 Plus Pinout Sheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-PLUS-pinout_sheet.xlsx )

**Mechanical Design**
- **📄[2D Dimensions]** [XIAO Dimension in DXF](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar )
- **📄[3D Model]** [XIAO SAMD21 Plus 3D Model](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip )

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Course Resources

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
