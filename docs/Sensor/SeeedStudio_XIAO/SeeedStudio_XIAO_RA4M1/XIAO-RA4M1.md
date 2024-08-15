---
title: Getting Started with Seeed Studio XIAO RA4M1
description: |
  XIAO RA4M1 - Smallest Dev Borad Based on 32-bit Renesas RA4M1, Arduino IDE-Ready, 19 GPIOs, RGB LED, CAN BUS, USB 2.0
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
slug: /getting-started-xiao-ra4m1
keywords:
  - XIAO
  - RA4M1
author: Spencer
last_update:
  date: 08/15/2024
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Seeed Studio XIAO RA4M1

<!-- Product Description -->

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" 
    style={{ width: 480, height: 'auto', "border-radius": '12.8px' }} 
  />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1">
  <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
  </a>
</div><br></br>

The XIAO RA4M1 integrates Renesas' RA4M1 chip (32-bit ARM® Cortex®-M4 MCU up to 48 MHz) into the classic XIAO form factor. This development board offers 256KB Flash, 32KB SRAM, 8KB EEPROM, a USB 2.0 connector, reset and boot buttons, 3 LEDs, a 14-bit A/D converter, a 12-bit D/A converter, and a CAN BUS interface. With onboard charging circuitry and low-power modes (as low as 45μA), it’s ideal for battery-powered applications. Sharing the same 32-bit R7FA4M1AB3CFM microcontroller as the Arduino Uno R4, it's natively compatible with Arduino IDE and the extensive XIAO accessories, making it the perfect starting point for electronics projects.

## **Features**

<!-- Key Features with bullet -->

- **Popular Microcontroller Onboard:** Powered by Renesas RA4M1, an 32-bit ARM® Cortex®-M4 R7FA4M1AB3CFM MCU operating at up to 48 MHz, 256 KB of Flash memory, and 32 KB of SRAM.
- **Highlighted Onboard Resources:** Equipped with a 14-bit ADC, 12-bit DAC, CAN BUS, USB 2.0, and an onboard RGB LED.
- **Expanded 8 New IOs:** Adds 8 new IO pins on the back compared to previous XIAO boards (19 GPIOs in total), enabling more complex applications.
- **Powerful Security Features:** Built-in hardware encryption, secure boot, key storage, and other functions to ensure application security.
- **Software Compatibility:** Fully compatible with Arduino IDE for seamless project development and prototyping.
- **Efficient Power Design:** Offers 4 operating modes with power consumption as low as 45μA in deep sleep, and supports lithium battery charge management.
- **Compact Thumb-Sized Design:** Measuring 21 x 17.8mm, adopting Seeed Studio's classic XIAO form factor, ideal for space-conscious applications.
- **Production-Friendly:** Surface Mount Device (SMD) design with all components on the front and stamp holes on both sides, facilitating efficient mass production.


## **Specification**

<!-- Technical Specifications | Table | or bullet -->

<table>
    <thead>
        <tr>
            <th>Product</th>
            <th>XIAO RA4M1</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="2">Processor</th>
            <td><a href="https://www.renesas.com/us/en/products/microcontrollers-microprocessors/ra-cortex-m-mcus/ra4m1-32-bit-microcontrollers-48mhz-arm-cortex-m4-and-lcd-controller-and-cap-touch-hmi">Renesas RA4M1</a>
            </td>
        </tr>
        <tr>
            <td>48-MHz Arm® Cortex®-M4 Core</td>
        </tr>
        <tr>
            <th>RAM</th>
            <td>32 KB SRAM</td>
        </tr>
        <tr>
            <th>Flash</th>
            <td>256 KB</td>
        </tr>
        <tr>
            <th>LEDs</th>
            <td>1 User LED, 1 Power LED, 1 RGB LED</td>
        </tr>
        <tr>
            <th>Interfaces</th>
            <td>19 Pins:14x Analog,19x Digital, 2x IIC, 2x UART, 2x SPI</td>
        </tr>
        <tr>
            <th>Buttons</th>
            <td>1 RESET Button, 1 BOOT Button</td>
        </tr>
        <tr>
            <th>Security</th>
            <td>AES128/256</td>
        </tr>
        <tr>
            <th>Low Power</th>
            <td>45μA</td>
        </tr>
        <tr>
            <th>Software Compatibility</th>
            <td>Arduino IDE</td>
        </tr>
        <tr>
            <th>Working Temperature</th>
            <td>-20°C-70°C</td>
        </tr>
        <tr>
            <th>Dimensions</th>
            <td>21x17.5 mm</td>
        </tr>
    </tbody>
</table>

## **Hardware Overview**


<!-- 硬件相关 -->

<!-- 引脚等的定义 -->

## Schematic Online Viewer

<!-- 原理图预览链接 -->


## Resources

- 📄 **[PDF]** [RA4M1 datasheet](https://www.renesas.com/us/en/document/dst/ra4m1-group-datasheet)
- 📄 **[PDF]** [Seeed Studio XIAO RA4M1 Schematic](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf)
- 🗃️ **[ZIP]** [Seeed Studio XIAO RA4M1 KiCAD file](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip)
- 🗃️ **[ZIP]** [Seeed Studio XIAO RA4M1 Eagle file](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/XIAO_RP2040_v1.22_SCH&PCB.zip)
- 📄 **[DXF]** [Seeed Studio XIAO RA4M1 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/XIAO-RP2040-DXF.zip)
- 📄 **[LBR]** [Seeed Studio XIAO RA4M1 Eagle footprint](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr)
- 📄 **[XLSX]** [Seeed Studio XIAO RA4M1 pinout sheet](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/XIAO-RP2040-pinout_sheet.xlsx)

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