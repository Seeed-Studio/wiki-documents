---
name: Arch Pro
category: mbed
bzurl: https://seeedstudio.com/Arch-Pro-p-1677.html
oldwikiname: Arch_Pro
prodimagename: Arch_pro.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/arch pro.jpg
surveyurl: https://www.research.net/r/Arch_Pro
sku: 102080002
---

![](https://raw.githubusercontent.com/SeeedDocument/Arch_Pro/master/img/Arch_pro.jpg)

Arch Pro is an mbed enabled development board for rapid prototyping. It is a variant of mbed LPC1768 with built-in Ethernet, USB Host/Device, Grove connectors and Arduino form factor. With a variety of Shield and Grove modules and lots of software libraries for Arch Pro, you can implement Ethernet, USB Host/Device and NFC applications rapidly and easily.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Arch-Pro-p-1677.html)

Features
--------

-   mbed enabled
    -   Online development tools
    -   Easy to use C/C++ SDK
    -   Handy libraries

-   Arduino form factor with two Grove connectors
-   Drag-n-drop programming
-   Debug using CMSIS-DAP
-   USB virtual serial for communication

Specifications
-------------

| Parameter       | Value/Availability                            |
|-----------------|-----------------------------------------------|
| MCU             | NXP LPC1768 variant (with ARM Cortex-M3 core) |
| Clock Speed     | 100 MHz                                       |
| Flash           | 512 KB                                        |
| RAM             | 64KB                                          |
| UART            | 4 No.s                                        |
| I2C             | 3 No.s                                        |
| SPI             | 2 No.s                                        |
| Ethernet        | Yes                                           |
| USB Host/Device | Yes                                           |

 Platforms Supported
-----------------

-   mbed.

Application Ideas
-----------------

-   [Ethernet](https://mbed.org/handbook/Ethernet-Interface)
-   [USB Host](https://mbed.org/handbook/USBHost) or [Device](https://mbed.org/handbook/USBDevice)
-   [NFC](https://mbed.org/users/yihui/notebook/rapid-prototyping-with-nfc/)
-   [RTOS](https://mbed.org/handbook/RTOS)
-   [Lua](http://mbed.org/users/jsnyder/notebook/elua-preliminary-port/)

Hardware Overview
-----------------

![](https://raw.githubusercontent.com/SeeedDocument/Arch_Pro/master/img/Arch_pro_v1_pinout.png)

There is [a monochrome version](http://seeed-studio.github.io/Artwork/images/arch_pro_v1_pinout_mono.png) for you to print.

<div class="admonition note">
<p class="admonition-title">Note</p>
The Arch Pro silkscreen for the Grove connectors is labeled 3V3 on top of the PCB and 5V on the underside. Grove Vcc is by default 3V3, but can be changed to 5V by moving R50 to R51. SPI Vcc pin can be set by populating R52 (3V3) or R53 (5V) with 0R - neither populated by default.
</div>

Getting Started
---------------

As the Arch Pro is compatible with mbed LPC1768, one can use the mbed C/C++ SDK, libraries and online development tools to rapidly build a prototype.
Here we show how to light up an LED. This can be done in less than 10 minutes.

Step one： Sign up for an mbed account.

-   Open [mbed.org](https://developer.mbed.org/), click Login or signup. If you have already registered, please click login directly.

Step two： Enter online development tools.

-   Click Compiler， it opens the online mbed IDE. Before programming, it is better to read the mbed Complier [Getting started](https://developer.mbed.org/getting-started/).

![](https://raw.githubusercontent.com/SeeedDocument/Arch_Pro/master/img/Open_Compiler.jpg)

Step three：Edit code.

-   Click "New" in the left top corner to create a Program and edit a blink program in main.cpp file.

```
#include "mbed.h"
 
DigitalOut  led1(LED1);
 
int main() {
    while(1) {
        led1 = !led1; 
        wait(0.5); 
    }
}
```

Step four： Add a device.

-   Click ”No device selected” in the top right corner, then click ”Add a device” button in the bottom left as seen in the picture below.

<div class="admonition note">
<p class="admonition-title">Note</p>
If you have already used an mbed device, it will be seen in the top right corner instead of ”No device selected”.
</div>

![](https://raw.githubusercontent.com/SeeedDocument/Arch_Pro/master/img/选择设备.jpg)

-   A pop-up page appears with a list of devices as shown below. Select ”mbed LPC1768”.

![](https://raw.githubusercontent.com/SeeedDocument/Arch_Pro/master/img/选择设备1.jpg)

-   Enter mbed LPC1768 page and click ”Add to mbed Compiler”. Now you have successfully added Mbed LPU1768. Return to mbed compiler page and click ”No device selected”. After you click "LPC1768" in the bottom left corner, a screen appears as shown below.

![](https://raw.githubusercontent.com/SeeedDocument/Arch_Pro/master/img/Arch_pro_add_platform.png)

-   You can see the selected board in mbed online compiler after clicking ”Select Platform”.

Step five： Compile, download.

-   Click "Compile". On successful compilation, the mbed IDE generates a bin file. Save the bin file on your PC.

Step six： Update firmware.

-   Connect the USB interface (next to 'BUTTON') of Arch Pro to your PC using a USB Micro B cable; It automatically appears as a USB device named MBED.
-   Copy the generated bin file to MBED device (on your PC). Now the USB device disappears and reappears.
-   Press BUTTON of Arch Pro, you will see an LED flashing.

Debug
-----

To enable SWD debug or to get debug message through USB Virtual serial, please install [the driver from mbed](https://developer.mbed.org/handbook/Windows-serial-configuration).

Update or Restore Firmware
--------------------------

The latest firmware version for the Arch Pro is v0221 built on Jan 28 2015. To check your firmware version and build date, open the MBED.HTM or DETAILS.TXT of your MBED disk in a text editor.

-   \[[Firmware v221 2015-01-28 for Arch Pro](https://developer.mbed.org/media/uploads/yihui/lpc11u35_lpc1768_if_mbed_20150128.bin)\] Fix Mac OS X 10.10 Yosemite read only file system bug
-   \[[Firmware v0203 2014-09-02 for Arch Pro](https://github.com/xiongyihui/CMSIS-DAP/raw/arch_pro/interface/mdk/lpc11u35/lpc11u35_lpc1768_if_mbed_bootloader.bin)\]

To update:

-   A Windows or Linux computer is needed.
-   Download the latest firmware.
-   Press and hold the Arch Pro's BUTTON and power it ON.
-   A disk named MBED LOADER will appear.
-   Drag-n-drop the downloaded firmware into the disk.

<div class="admonition note">
<p class="admonition-title">Notes</p>
<ul>
<li>LocalFileSystem does not work:
As the Arch Pro does not have external flash to store files, the LocalFileSystem is not available for this board.</li>

<li>P0_27 & P0_28 do not work with DigitalOut:
P0_28 & P0_27 are open-drain digital I/O for compatible with I2C. External pull-up resistors are needed to provide output functionality.</li>

<li>USB Serial Communication:
In Windows, install the mbed Windows serial port driver to use USB Serial Communication. Have a look at <a href="https://developer.mbed.org/handbook/Windows-serial-configuration">Windows Serial Configuration</a></li>
</ul>
</div>

Resources
---------

-   [Arch Pro V1.0 Schematic PDF](https://raw.githubusercontent.com/SeeedDocument/Arch_Pro/master/res/Arch_Pro_V1.0_Schematic.pdf)
-   [Arch Pro V1.0 EAGLE Files](https://raw.githubusercontent.com/SeeedDocument/Arch_Pro/master/res/Arch_Pro_V1.0.zip)
-   [LPC1768 datasheet](https://raw.githubusercontent.com/SeeedDocument/Arch_Pro/master/res/LPC1769_68_67_66_65_64_63.pdf)
-   [LPC17xx User Manual](https://raw.githubusercontent.com/SeeedDocument/Arch_Pro/master/res/LPC17xxUserManual.pdf)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Arch_Pro -->


## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>