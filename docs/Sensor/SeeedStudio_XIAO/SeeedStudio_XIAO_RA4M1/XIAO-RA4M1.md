---
title: Getting Started with Seeed Studio XIAO RA4M1
description: |
  XIAO RA4M1 - Smallest Dev Borad Based on 32-bit Renesas RA4M1, Arduino IDE-Ready, 19 GPIOs, RGB LED, CAN BUS, USB 2.0
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
slug: /getting_started_xiao_ra4m1
keywords:
  - XIAO
  - RA4M1
last_update:
  date: 08/15/2024
  author: Carla
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- Product Description -->

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" 
    style={{ width: 480, height: 'auto', "border-radius": '12.8px' }} 
  />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1">
  <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
  </a>
</div><br></br>

## Introduction

The XIAO RA4M1 integrates Renesas' RA4M1 chip (32-bit ARM® Cortex®-M4 MCU up to 48 MHz) into the classic XIAO form factor. This development board offers 256KB Flash, 32KB SRAM, 8KB EEPROM, a USB 2.0 connector, reset and boot buttons, 3 LEDs, a 14-bit A/D converter, a 12-bit D/A converter, and a CAN BUS interface. With onboard charging circuitry and low-power modes (as low as 45μA), it’s ideal for battery-powered applications. Sharing the same 32-bit R7FA4M1AB3CFM microcontroller as the Arduino Uno R4, it's natively compatible with Arduino IDE and the extensive XIAO accessories, making it the perfect starting point for electronics projects.

### Features

<!-- Key Features with bullet -->

- **Popular Microcontroller Onboard:** Powered by Renesas RA4M1, an 32-bit ARM® Cortex®-M4 R7FA4M1AB3CFM MCU operating at up to 48 MHz, 256 KB of Flash memory, and 32 KB of SRAM.
- **Highlighted Onboard Resources:** Equipped with a 14-bit ADC, 12-bit DAC, CAN BUS, USB 2.0, and an onboard RGB LED.
- **Expanded 8 New IOs:** Adds 8 new IO pins on the back compared to previous XIAO boards (19 GPIOs in total), enabling more complex applications.
- **Powerful Security Features:** Built-in hardware encryption, secure boot, key storage, and other functions to ensure application security.
- **Software Compatibility:** Fully compatible with Arduino IDE for seamless project development and prototyping.
- **Efficient Power Design:** Offers 4 operating modes with power consumption as low as 45μA in deep sleep, and supports lithium battery charge management.
- **Compact Thumb-Sized Design:** Measuring 21 x 17.8mm, adopting Seeed Studio's classic XIAO form factor, ideal for space-conscious applications.
- **Production-Friendly:** Surface Mount Device (SMD) design with all components on the front and stamp holes on both sides, facilitating efficient mass production.


### Specification

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
            <td>21x17.8 mm</td>
        </tr>
        <tr>
            <th>Power</th>
            <td>Type-C: 5V<br />BAT: 3.8V</td>
        </tr>
    </tbody>
</table>

### Hardware Overview

Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of Seeed Studio XIAO RA4M1.

<!-- 硬件相关 -->

<!-- 引脚等的定义 -->
<table>
	<tr>
	    <th>XIAO RA4M1 front indication diagram</th>
	</tr>
    <tr>
        <br />
        <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO-RA4M1-components.png" style={{width:380, height:'auto'}}/></div>
        <br />        
    </tr>
    <tr>
        <th>XIAO RA4M1 Pin List</th>
    </tr>
    <tr>
        <br />
        <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO-RA4M1-pinout.png" style={{width:880, height:'auto'}}/></div>
        <br />
    </tr>
</table>

## Getting Started

### Hardware Preparation

You need to prepare the following:

- 1 x [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1)
- 1 x Computer
- 1 x USB Type-C cable

<br></br>

:::tip
Some USB cables can only supply power and cannot transfer data. If you don't have a USB cable or don't know if your USB cable can transmit data, you can check [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::

### Software Preparation

The recommended programming tool for the XIAO RA4M1 is the Arduino IDE, so as part of the software preparation, you will need to complete the Arduino installation.

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

- **Step 1.** Download and Install the stable version of Arduino IDE according to your operating system.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

- **Step 2.** Launch the Arduino application.

- **Step 3.** Add RA4M1 board package to your Arduino IDE.

    Navigate to **File > Preferences**, and fill **"Additional Boards Manager URLs"** with the url below:
    *<https://files.seeedstudio.com/arduino/package_renesas_1.2.0_index.json>*
    
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/arduino_preference.png" style={{width:800, height:'auto'}}/></div>

    Navigate to **Tools > Board > Boards Manager...**, type the keyword **RA4M1** in the search box, select the latest version of **Seeed Renesas Board**, and install it.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/board_manager.png" style={{width:600, height:'auto'}}/></div>
- **Step 4.** Select your board and port.

    On top of the Arduino IDE, you can search for **xiao** in the development board on the left, select XIAO_RA4M1, and select the port directly.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/select_port.png" style={{width:800, height:'auto'}}/></div>


## BootLoader Mode

Sometimes, using the wrong program can cause the XIAO to lose its port or not function correctly. Common issues include:

- The XIAO is connected to the computer, but no port number is found.
- The XIAO is connected, and a port number appears, but the program upload fails.

When you encounter the above two situations, you can try to put XIAO into BootLoader mode, which can solve most of the problems of unrecognized devices and failed  uploads. The specific method is:

- **Method 1.** Press and hold the `BOOT` button on the XIAO RA4M1 without releasing it.
- **Method 2.** Keep the `BOOT` button pressed and then connect to the computer via the data cable. Release the BOOT button after connecting to the computer.

## Reset

When the program runs abnormally, you can press `Reset` once during power-up to let XIAO re-execute the uploaded program.
When you press and hold the `BOOT` key while powering up and then press the `Reset` key once, you can also enter BootLoader mode.

## Run your first Blink program

By now, I believe you have a good understanding of the features and hardware of the XIAO RA4M1. Next, let's take the simplest Blink program as an example and perform the first blink for your XIAO RA4M1!

- **Step 1.** Launch the Arduino application.
- **Step 2.** Navigate to **File > Examples > 01.Basics > Blink**, open the program.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink_code.png" style={{width:700, height:'auto'}}/></div>

- **Step 3.** Select the board model to **XIAO RA4M1**, and select the correct port number to upload the program.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/choose_board.png" style={{width:700, height:'auto'}}/></div>

Once the program is successfully uploaded, you will see the following output message and you can observe that the orange LED on the right side of the XIAO RA4M1 is blinking.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink.gif" style={{width:700, height:'auto'}}/></div>

Congratulations, you've learned how to write and upload programs for the XIAO RA4M1!
:::note
The LED will only turn off when the user LED pin on the XIAO RA4M1 is set to a high level, and it will only turn on when the pin is set to a low level.
:::

## Play with RGB LEDs
The XIAO RA4M1 comes with a build-in RGB LED that you can control, follow is a example of how to smoothly change the LED color between red, green, and blue:

```cpp
#include <Adafruit_NeoPixel.h>

#define LED_PIN RGB_BUILTIN  // Define the pin for the built-in RGB LED
#define NUM_PIXELS 1         // Number of WS2812 LEDs

Adafruit_NeoPixel pixels(NUM_PIXELS, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pinMode(PIN_RGB_EN, OUTPUT); // Set up the power pin
  digitalWrite(PIN_RGB_EN, HIGH); //Turn on power to the LED
  pixels.begin();  // Initialize the NeoPixel library
}

void loop() {
    // Transition from Red to Green
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(255 - i, i, 0));  // Red decreases, Green increases
    pixels.show();
    delay(10);  // Adjust delay for smoothness
  }

  // Transition from Green to Blue
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(0, 255 - i, i));  // Green decreases, Blue increases
    pixels.show();
    delay(10);  // Adjust delay for smoothness
  }

  // Transition from Blue to Red
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(i, 0, 255 - i));  // Blue decreases, Red increases
    pixels.show();
    delay(10);  // Adjust delay for smoothness
  }
}

```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/rgb_led.gif" style={{width:600, height:'auto'}}/></div>

## Resources

- 📄 **[PDF]** [RA4M1 datasheet](https://www.renesas.com/us/en/document/dst/ra4m1-group-datasheet)
- 📄 **[PDF]** [Seeed Studio XIAO RA4M1 Schematic](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO-RA4M1_SCH_PDF_v1.0_240719.pdf)
<!-- - 🗃️ **[ZIP]** [Seeed Studio XIAO RA4M1 KiCAD file](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip) -->
<!-- - 🗃️ **[ZIP]** [Seeed Studio XIAO RA4M1 Eagle file](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/XIAO_RP2040_v1.22_SCH&PCB.zip) -->
<!-- - 📄 **[DXF]** [Seeed Studio XIAO RA4M1 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/XIAO-RP2040-DXF.zip) -->
<!-- - 📄 **[LBR]** [Seeed Studio XIAO RA4M1 Eagle footprint](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr) -->
<!-- - 📄 **[XLSX]** [Seeed Studio XIAO RA4M1 pinout sheet](https://files.seeedstudio.com/wiki/XIAO-RA4M1/res/XIAO-RP2040-pinout_sheet.xlsx) -->


## Troubleshooting


### Q1: What should I look for when soldering pins

Due to the miniature size of XIAO RA4M1, please be careful when soldering headers, do not stick different pins together, and do not stick solder to the shield or other components. Otherwise, it may cause XIAO to short circuit or not work properly, and the consequences caused by this will be borne by the user.

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
