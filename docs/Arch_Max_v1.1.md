---
name: Arch Max v1.1
category: mbed
bzurl: https://seeedstudio.com/Arch-Max-v1.1-p-2632.html
oldwikiname: Arch_Max_v1.1
prodimagename: Arch_Max_v1.1_product_view.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/102110014 1.jpg
surveyurl: https://www.research.net/r/Arch_Max_v1_1
sku: 102110014
---

![](https://raw.githubusercontent.com/SeeedDocument/Arch_Max_v1.1/master/img/Arch_Max_v1.1_product_view.jpg)

The Arch Max is a mbed enabled development board for rapid prototyping. It is based on an STM32F407VET6 microcontroller with an ARM Cortex-M4F core running at 168MHz. It provides [Serial Wire Debug](https://en.wikipedia.org/wiki/Joint_Test_Action_Group#Serial_Wire_Debug)(SWD) debug, drag-and-drop programming and USB serial communication.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Arch-Max-v11-p-2632.html)


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

![](https://raw.githubusercontent.com/SeeedDocument/Arch_Max_v1.1/master/img/Arch_Max_Pinout.png)

Usage
-----

![](https://raw.githubusercontent.com/SeeedDocument/Arch_Max_v1.1/master/img/Get_started_with_mbed.png)

1.  Click [here](<https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-MAX>) to login or signup to mbed
2.  Import the mbed\_blinky program
3.  Click the **Compile** icon of the top toolbar to compile the program, then download a compiled hex file.
4.  Drag-n-drop the downloaded bin file into the mbed disk

You can open **main.cpp** to change the program. For example, use the following code to blink the LED every 0.1 second

```
    #include "mbed.h"

    DigitalOut led(LED1);          // on-board led is connected to D13

    int main()
    {
        while (true) {
            led = !led;
            wait(0.1);
        }
    }
```

Debug
-----

To enable SWD debug or to get debug message through USB Virtual serial, please install [a driver from mbed](https://developer.mbed.org/handbook/Windows-serial-configuration).

Update or Restore Firmware
--------------------------

The latest firmware version for the Arch Max is v0203 built at Oct 8, 2014. To check your firmware version and built date, open the mbed.HTM file of your mbed disk in a text editor.

[The firmware v0203 2014-10-08 for Arch Max](https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20141008.bin)

-   Press and hold the Arch Max's button to power it on.
-   A CRP DISABLD disk will show
    -   On Windows, replace firmware.bin with the above firmware
    -   On Linux/Mac, enter command: **dd if={new\_firmware.bin} of={firmware.bin} conv=notrunc**

Resources
---------

-   [Schematics Eagle file for ARCH Max](https://raw.githubusercontent.com/SeeedDocument/Arch_Max_v1.1/master/res/ARCH_Max.zip)
-   [Schematics PDF file for ARCH Max](https://raw.githubusercontent.com/SeeedDocument/Arch_Max_v1.1/master/res/Arch_Max.pdf)
-   [STM32F407 datasheet](https://raw.githubusercontent.com/SeeedDocument/Arch_Max_v1.1/master/res/STM32F407.pdf)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Arch_Max_v1.1 -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>