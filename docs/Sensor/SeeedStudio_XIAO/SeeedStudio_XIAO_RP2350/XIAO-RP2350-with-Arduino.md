---
description: Using Arduino on your XIAO RP2350 board
title: Getting Started with Seeed Studio XIAO RP2350(Arduino)
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550_XIAO_RP2350-45font_1.webp
slug: /xiao_rp2350_arduino
sidebar_position: 1
last_update:
  date: 2024-10-30T01:39:16.136Z
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO RP2350 with Arduino

The Seeed Studio XIAO RP2350 board now supports programming via Arduino, thanks to the [arduino-pico core](https://github.com/earlephilhower/arduino-pico). This guide will help you set up and begin using Arduino on your RP2350 board.

## Features

- **Powerful MCU Board:** Equipped with a Raspberry Pi RP2350 chip featuring symmetric dual Arm Cortex-M33 @ 150MHz with FPU.
- **Enhanced Security Features:** Built-in secure boot and encrypted bootloader ensure application security.
- **Software Support:** Compatible with C/C++ and MicroPython, ensuring easy project development and prototyping.
- **Rich Onboard Resources:** Integrates an RGB LED, 2MB Flash, 520kB SRAM, and 19 multifunction GPIOs(Analog, Digital, I²C, UART, SPI, PWM).
- **Expanded 8 New IOs:** Compared to previous XIAO MCUs, the addition of 8 IO pins on the back supports more complex applications.
- **Efficient Power Design:** Ultra-low power consumption of just 50μA in sleep mode, enabling battery power supply. Direct battery voltage measurement via internal IO enhances the battery management system (BMS).
- **Compact Thumb-Sized Design:** Measuring 21 x 17.8mm, adopting Seeed Studio's classic XIAO form factor, ideal for space-conscious applications.
- **Production-friendly:** Surface Mount Device (SMD) design with all components on the front and stamp holes on both sides, facilitating efficient mass production.

## Specification

<table>
  <tr>
    <th>Product</th>
    <td>XIAO RP2040</td>
    <td>XIAO RP2350</td>
  </tr>
  <tr>
    <th>Processor</th>
    <td>Raspberry Pi RP2040<br/>Dual Cortex-M0+ @ 133MHz</td>
    <td>Raspberry Pi RP2350<br/>Dual Cortex-M33 @ 150MHz, FPU</td>
  </tr>
  <tr>
    <th>RAM</th>
    <td>264kB SRAM</td>
    <td>520kB SRAM</td>
  </tr>
  <tr>
    <th>Flash</th>
    <td>2MB Onboard</td>
    <td>2MB Flash</td>
  </tr>
  <tr>
    <th>LEDs</th>
    <td>1x user LED<br/>1x power LED<br/>1x RGB LED</td>
    <td>1x user LED<br/>1x power LED<br/>1x RGB LED</td>
  </tr>
  <tr>
    <th>Interface</th>
    <td>11 Pins (All PWM):<br/>4x Analog<br/>11x Digital<br/>1x I²C<br/>1x UART<br/>1x SPI</td>
    <td>19 Pins (All PWM):<br/>3x Analog<br/>19x Digital<br/>2x I²C<br/>2x UART<br/>2x SPI</td>
  </tr>
  <tr>
    <th>Button</th>
    <td>1x RESET button<br/>1x BOOT button</td>
    <td>1x RESET button<br/>1x BOOT button</td>
  </tr>
  <tr>
    <th>Security</th>
    <td>-</td>
    <td>OTP, Secure Boot, Arm TrustZone</td>
  </tr>
  <tr>
    <th>Software compatibility</th>
    <td>Support Micropython / Arduino / CircuitPython</td>
    <td>Support Micropython / Arduino / C,C++</td>
  </tr>
  <tr>
    <th>Working Temperature</th>
    <td>-20°C-70°C</td>
    <td>-20°C-70°C</td>
  </tr>
  <tr>
    <th>Dimensions</th>
    <td>21x17.8 mm</td>
    <td>21x17.8 mm</td>
  </tr>
</table>

## Hardware Overview

<div class="table-center">
<table align="center">
 <tr>
     <th>XIAO RP2350 Front Pinout</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-front.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Front Pinout" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 Back Pinout</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-back.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Back Pinout" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 Components</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-components.png" style={{width:480, height:'auto'}} alt="XIAO RP2350 Components" /></div></td>
 </tr>
</table>
</div>

Need more details on pinouts? Navigate to [Assets and Resources](#assets--resources) below.


## **Pin Map**
| XIAO Pin                 | Function   | Chip Pin     | Alternate Functions | Description                          |
| :---------------------: | :-------: | :----------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS       |              |                    | Power Input/Output                   |
| GND                     |            |              |                    |                                      |
| 3V3                     | 3V3_OUT    |              |                    | Power Output                         |
| D0                      | Analog     | GPIO26       |                    | GPIO, ADC                            |
| D1                      | Analog     | GPIO27       |                    | GPIO, ADC                            |
| D2                      | Analog     | GPIO28       |                    | GPIO, ADC                            |
| D3                      | SPIO_CSn   | GPIO5        |                    | GPIO, SPI                            |
| D4                      | SDA1       | GPIO6        |                    | GPIO, I2C Data                       |
| D5                      | SCL1       | GPIO7        |                    | GPIO, I2C Clock                      |
| D6                      | TX0        | GPIO0        |                    | GPIO, UART Transmit                  |
| D7                      | RX0        | GPIO1        |                    | GPIO, UART Receive                   |
| D8                      | SPIO_SCK   | GPIO2        |                    | GPIO, SPI Clock                      |
| D9                      | SPIO_MISO  | GPIO4        |                    | GPIO, SPI Data                       |
| D10                     | SPIO_MOSI  | GPIO3        |                    | GPIO, SPI Data                       |
| D11                     | RX1        | GPIO21       |                    | GPIO, UART Receive                   |
| D12                     | TX1        | GPIO20       |                    | GPIO, UART Transmit                  |
| D13                     | SCL0       | GPIO17       |                    | GPIO, I2C Clock                      |
| D14                     | SDA0       | GPIO16       |                    | GPIO, I2C Data                       |
| D15                     | SPI1_MOSI  | GPIO11       |                    | GPIO, SPI Data                       |
| D16                     | SPI1_MISO  | GPIO12       |                    | GPIO, SPI Data                       |
| D17                     | SPI1_SCK   | GPIO10       |                    | GPIO, SPI Clock                      |
| D18                     | SPI1_Csn   | GPIO9        | Csn                |                                      |
| ADC_BAT                 |            | GPIO29       |                    | Read the BAT voltage value           |
| Reset                   |            | RUN          |                    | RUN                                  |
| Boot                    |            | RP2040_BOOT  |                    | Enter Boot Mode                      |
| CHARGE_LED              |            | NCHG         |                    | CHG-LED_Red                          |
| RGB LED                 |            | GPIO22       |                    | RGB LED                              |
| USER_LED                |            | GPIO25       |                    | User Light_Yellow                    |
## Prerequisites

To get started, ensure you have:

- An RP2350 board
- The Arduino IDE
- A USB cable

## Setting Up the Software

### 1. Install the Arduino IDE

Download and install the latest Arduino IDE from the official site: [Arduino Software](https://www.arduino.cc/en/software).

### 2. Add RP2350 Board Support

1. Open the Arduino IDE and navigate to **File** > **Preferences**.
2. In the **Additional Boards Manager URLs** field, add this URL:

    ```shell
    https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
    ```

    <div style={{ textAlign: 'center' }}>
    <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-url.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
    </div>

3. Click **OK** to save your settings.
4. Go to **Tools** > **Board** > **Boards Manager**.
5. In the Boards Manager, search for **pico** and click **Install**.
6. After installation, go to **Tools** > **Board** and select the board shown below as your board.

:::note
Ensure you install version 4.2.0 or later for full support of the XIAO RP2350 board.
:::

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-board-option.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

### 3. Uploading a Sketch

Before uploading a sketch, place your XIAO RP2350 into BOOT mode. Use one of the methods below:

<Tabs>
<TabItem value="method1" label="Method 1: Before Connecting to Computer" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Hold Boot-> Plug in Cable-> Release Boot</em></div></div>

</TabItem>

<TabItem value="method2" label="Method 2: While Connected to Computer">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Hold Boot-> Click Reset-> Release Boot</em></div></div>

</TabItem>
</Tabs>

1. Open the Arduino IDE and create a new sketch.
2. Write your code. For example, use the `Blink` example code.
3. Go to **Tools** > **Port** and select the port where your RP2350 is connected.

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-firmware-upload.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>


## Assets & Resources


**Hardware Design**
- **📄[Datasheet]** [Raspberry Pi RP2350 Datasheet](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf )
- **📄[Schematic]** [XIAO RP2350 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf )
- **🗃️[PCB Design Files]** [XIAO RP2350 KiCad Project](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO_RP2350_v1.0_SCH&PCB_240626.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]** [XIAO RP2350 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx )

**Mechanical Design**
- **📄[2D Dimensions]** [XIAO RP2350 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf )
- **🔗[3D Model]** [XIAO RP2350 3D Model](https://grabcad.com/library/seeed-studio-xiao-rp2350-2 )

**Software & Tools**
- **📄[Test Firmware]** [XIAO RP2350 Low Power Test Firmware](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2 )

**Others**
- **📄[Document]** [Getting Started with Raspberry Pi Pico-series](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf )  
  - A comprehensive guide to setting up and programming Raspberry Pi Pico boards, ideal for beginners looking to learn MicroPython or C/C++.
- **📄[Document]** [Raspberry Pi Pico-series Python SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf )  
  - The book which documents the MicroPython setup tutorials and APIs
- **📄[Document]** [Raspberry Pi Pico-series C/C++SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf )  
  - The book which documents the Pico C/C++ SDK APIs
 - **📄[arduino-pico GitHub]**(https://github.com/earlephilhower/arduino-pico)
- **📄[Arduino-Pico Core Documentation]**(https://arduino-pico.readthedocs.io/en/latest/install.html)

## Support & Discussion

Thank you for using Seeed products! We offer multiple channels for support and community discussion:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
