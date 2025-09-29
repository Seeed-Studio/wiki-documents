---
description:  Arch Max v1.1
title:  Arch Max v1.1
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arch_Max_v1.1
last_update:
  date: 2/1/2023
  author: hushuxu
---


![](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Arch_Max_v1.1_product_view.jpg)

The Arch Max is a mbed enabled development board for rapid prototyping. It is based on an STM32F407VET6 microcontroller with an ARM Cortex-M4F core running at 168MHz. It provides [Serial Wire Debug](https://en.wikipedia.org/wiki/Joint_Test_Action_Group#Serial_Wire_Debug)(SWD) debug, drag-and-drop programming and USB serial communication.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Arch-Max-v11-p-2632.html)


Version Tracker
-------

| Name                       | Version | Note                                                                            |
|----------------------------|---------|---------------------------------------------------------------------------------|
| Arch Max v1.0              | v1.0    | 5V cannot be powered by USB, user should connect to ext-power |
| Arch Max v1.1              | v1.1    | 5V cannot be powered by USB                                   |



Features
--------

-   mbed enabled
    -   Online development tools(include IDE)
    -   Complete and straightforward C/C++ SDK
    -   Massive examples and tutorials
-   High-performance STM32F407VET6
    -   ARM Cortex-M4 MCU with FPU of 168MHz
    -   512 KB Flash memory, 192 KB RAM
-   On-board programming and debug
    -   Drag-and-drop programming
    -   USB serial communication
    -   SWD debug with GDB+ pyOCD/OpenOCD, Keil or IAR
-   Arduino form factor, compatible with lots of shields
-   Built-in Ethernet port, USB and SD card slot for Internet connectivity and data exchange

Specifications
--------------

| Parameter/Item                | Value         |
|-------------------------------|---------------|
| Work Voltage                  | 5V            |
| Microcontroller               | STM32F407VET6 |
| Flash Memory                  | 512KB         |
| RAM                           | 192KB         |
| UART                          | 4             |
| I2C                           | 3             |
| SPI                           | 3             |
| CAN                           | 2             |
| SDIO                          | 1             |
| Camera interface              | 1             |
| Eth                           | 1             |
| ADC Channels                  | 8             |
| I/O pins                      | 40            |
| Digital I/O Max Input Voltage | 5.0V          |
| Diameter                      | 90mm x 44mm   |

Hardware Overview
--------------

![](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Arch_Max_Pinout.png)

Usage
-----

![](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Get_started_with_mbed.png)

1.  Click [here](<https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-MAX>) to login or signup to mbed
2.  Import the mbed_blinky program
3.  Click the **Compile** icon of the top toolbar to compile the program, then download a compiled hex file.
4.  Drag-n-drop the downloaded bin file into the mbed disk

You can open **main.cpp** to change the program. For example, use the following code to blink the LED every 0.1 second

```cpp
#include "mbed.h"

DigitalOut led(LED1);          // on-board led is connected to D13

int main()
{
    while (true) {
        led = !led;
        wait(0.1);
    }
}
```

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If you are get a compiling error that 'device.h' is not found, try to update the mbed library to the latest revision in your program.</p>
</div>

## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Arch_Max_v1.1_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
---------

-   [Arch Max v1.1 mbed developer platform page](https://developer.mbed.org/platforms/Seeed-Arch-Max/)
-   [Schematic in PDF format](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Arch_Max_v1.1_pdf.pdf)
-   [Schematic and board files in EAGLE format](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Arch_Max_v1.1_Eagle.zip)
-   [LPC11U35 Firmware](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Lpc11u35_stm32f4xx_if_mbed.bin.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Arch_Max_v1.1 -->

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
