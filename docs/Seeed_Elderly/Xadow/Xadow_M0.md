---
description: Xadow - M0
title: Xadow - M0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_M0
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Xadowm0.jpg)

<!-- Xadow - M0 is an mbed enabled development board with [Xadow]() form factor. [Xadow]() is a series of flexible electronic modules including sensors, displays and etc. Several Xadow modules can be cascaded to create interactive objects. -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-M0-mbed-enabled-ARM-Cortex-M0-board-for-Rapid-Prototyping-p-1880.html)

## Features
---
- mbed enabled
 - online development tools
 - easy to use C/C++ SDK
 - lots of published libraries, projects
- Xadow form factor
 - extremely small and flexible
 - cascade connection
- Drag-n-drop programming
- NXP LPC11U35 MCU
 - Low power ARM Cortex-M0 Core
 - 48MHz, 64KB Flash, 10KB RAM, 4KB EEPROM
 - USB Device, 2xSPI, UART, I2C
- Integrated with accelerometer: ADXL345

## Specification
---
- Work Voltage: 3.3V
- DC Current per IO pin :20mA
- Digital I/O Pins: 16
- Analog Input Channels: 2
- Operating Temperature: -20~70 ℃
- Dimensions: 25.43mm x 20.35mm


## Pinout
---
![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Xadow_M0_Pinout.png)

## Get Started
---
1.Click this link to signup or login mbed, then import xadow_m0_blinky program into mbed online compiler.

![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Import_xadow_m0_blinky.png)

2.On mbed online IDE, click "Compile" (or use CTRL + D) to compile the code and download a binary file.

![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Compile_mbed_program.png)

3.Connect the board to the computer and **long press the button**, a USB drive named **CRP DISABLD** will show up.

4.Delete the **firmware.bin** file in the CRP DISABLD drive, then copy the downloaded file to the drive.

5.**Quick press the button**, the program will be running, an LED will be blinking.

You can open **main.cpp** to change the code. For example, use the following code to blink the LED every 0.1 second.
```
#include "mbed.h"

DigitalOut blue(P0_20);

int main() {
    while(1) {
        blue = 1;         // Switch ON the LED.
        wait(0.1);        // Wait for 0.1 Seconds.
        blue = 0;         // Switch OFF the LED.
        wait(0.1);        // Wait for 0.1 Seconds.
    }
}
```

## Multifunction for on-board button
---
By default, the on-board button has two functions: quick press to reset, long press to enter ISP mode. We can add more functions!

For example, use [multifunction_for_reset_button](https://developer.mbed.org/users/yihui/code/multifunction_for_reset_button/) to get:
- single click - turn on LED1
- double click - turn on LED2
- long click - reset
- click and then power on - enter ISP mode

## Programming Arch on Windows, Linux or Mac
---
Arch doesn't have an mbed interface. It uses USB In-System-Programming (ISP) to upgrade the firmware.

To enter the USB ISP mode, connect the Arch with your computer and long press its button, and then a disk named "CRP DISABLD" will appear.
- on windows
  1. delete firmware.bin in the "CRP DISABLD" disk.
  2. copy a new firmware into the disk.
- on linux
  1. if the disk is not mounted, mount the disk at {mnt_dir}
  2. **dd if={new_firmware.bin} of={mnt_dir}/firmware.bin conv=notrunc**
- on mac you'll need to use Terminal to run the following script to copy you're .bin file to your Arch
  1. **dd if={new_firmare.bin} of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

If you're so inclined, you can also create an **Automator** application to support drag-and-drop of the file to your board. Just create a "Run Shell Script" with the following command:
dd if=$* of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc

You will also need to change the "Pass Input" option from "to stdin" to "as arguments"--without this you will get an error "The action 'Run Shell Script' encountered an error" or "dd: no value specified for if (1)" in the log.

Also, an improved form of the script is:
- **dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

Which should handle spaces in the file path and only uses the first file supplied.


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_M0/res/Xadow_M0_Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resource
---
- [File:Xadow M0 Schematic.zip](https://files.seeedstudio.com/wiki/Xadow_M0/res/Xadow_M0_Schematic.zip)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
