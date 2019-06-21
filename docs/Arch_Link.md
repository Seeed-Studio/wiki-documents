---
name: Arch Link
category: mbed
bzurl: https://seeedstudio.com/Arch-Link-p-2511.html
oldwikiname: Arch_Link
prodimagename: 1020800061.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/1020800061.JPG
surveyurl: https://www.research.net/r/Arch_Link
sku: 102080006
---

![](https://raw.githubusercontent.com/SeeedDocument/Arch_Link/master/img/1020800061.jpg)

**Arch Link** is an mbed enabled development board based on Nordic nRF51822 and WIZnet W5500 ethernet interface. With Arduino form factor, Grove connectors and micro SD interface, it is extremely easy to create a bluetooth low energy device.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Arch-Link-p-2511.html)

Features
--------

-   mbed enabled
    -   Online IDE
    -   Easy to use C/C++ SDK
    -   Handy libraries
-   CMSIS DAP based on LPC11U35
    -   Drag-n-drop programming
    -   Debug using CMSIS DAP standard
    -   USB virtual serial for communication
-   Arduino form factor with Grove connectors
    -   I2C and UART connecter on board
-   Nordic nRF51822 Multi-protocol Bluetooth® 4.0 low energy/2.4GHz RF SoC
    -   ARM Cortex M0 processor
    -   256kB flash/16kB RAM
    -   Configurable I/O mapping for digital I/O
-   WIZnet W5500 Ethernet
    -   Supports following Hardwired TCP/IP Protocols : TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
    -   Supports Power down mode
    -   Supports Wake on LAN over UDP
    -   Supports High Speed Serial Peripheral Interface(SPI MODE 0, 3)
    -   Internal 32Kbytes Memory for Tx/Rx Buffers
    -   10BaseT/100BaseTX Ethernet PHY embedded
    -   with RJ45 connector
-   USB Micro B connector
-   Micro SD Card connector

Hardware Overview
------

![](https://raw.githubusercontent.com/SeeedDocument/Arch_Link/master/img/Arch_link_pinout.png)

Get Started
-----------

![](https://raw.githubusercontent.com/SeeedDocument/Arch_Link/master/img/Get_started_with_mbed.png)

1.  Click [this link](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-BLE) to **login or signup to mbed**
2.  Import the mbed\_blinky program
3.  Click the **Compile** icon of the top toolbar to compile the program, then download a compiled hex file.
4.  Drag-n-drop the downloaded hex file into the MBED disk

You can open **main.cpp** to change the program. For example, use the following code to blink the LED every 0.1s

```
    #include "mbed.h"

    DigitalOut led(p30);           // on-board led is connected to p30

    int main()
    {
        while (true) {
            led = !led;
            wait(0.1);
        }
    }
```

<div class="admonition note">
<p class="admonition-title">Note</p>
If you are get a compiling error that 'device.h' is not found, try to update the mbed library to the latest revision in your program.
</div>

Applications
------------

1. Color Pixels, a colorful LED strip, can be controlled by mobile phone.

    -   Hardware
        -   Arch Link
        -   [Digital RGB LED Strip](http://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-30-LED-1-Meter-p-1665.html)
        -   Android device with BLE

    ![](https://raw.githubusercontent.com/SeeedDocument/Arch_Link/master/img/Ble_color_pixels_bb.png)

    ![](https://raw.githubusercontent.com/SeeedDocument/Arch_Link/master/img/Color_pixels_app.png)

    -   Make it run

        1.  Download [BLE\_Color\_Pixels\_Arch\_BLE.hex](http://tangram.qiniudn.com/BLE_Color_Pixels_ARCH_BLE.hex)
        2.  Copy the hex file to the MBED disk of your Arch BLE
        3.  Download [the Color Pixels Android app](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)


       If you want to change the program, click [this link](https://mbed.org/compiler/#import:/teams/Seeed/code/BLE_Color_Pixels/;platform:Seeed-Arch-BLE) to import the Color Pixels program to mbed online IDE.

       If the BLE device is disconnected frequently, we can improve the stability by changing the BLE parameters - Advertising Duration (main.cpp), Min Interval and Max Interval (nRF51822/projectconfig.h)


        #define CFG_GAP_CONNECTION_MIN_INTERVAL_MS           20                     /**< Minimum acceptable connection interval */
        #define CFG_GAP_CONNECTION_MAX_INTERVAL_MS          200                     /**< Maximum acceptable connection interval */


2. You can use the Arch Link as a web dashboard.

    ![](https://raw.githubusercontent.com/SeeedDocument/Arch_Link/master/img/Arch_link_application1.png)

3. You can also use the Arch Link as a Mobile APP dashboard.

    ![](https://raw.githubusercontent.com/SeeedDocument/Arch_Link/master/img/Arch_link_application2.png)

Update or Restore Firmware
--------------------------

The latest firmware version for the Arch Link is v0203 built at Jun 4 2015. To check your firmware version and built date, open the MBED.HTM or DETAILS.TXT of your MBED disk in a text editor.

Changelog:

-   2015-06-4 first version

Firmware:

The firmware v0203 2015-06-04 for Arch Link
To flash a new firmware:

-   Hold the Arch Link's button and power it ON
-   A CRP DISABLD disk will show up
    -   On Windows, replace firmware.bin with the above firmware
    -   On Linux/Mac, use command: dd if={new\_firmware.bin} of={firmware.bin} conv=notrunc

Resources
---------

-   [Arch Link mbed developer platform page](https://developer.mbed.org/platforms/Seeed-Arch-Link/)
-   [Schematic in PDF format](https://raw.githubusercontent.com/SeeedDocument/Arch_Link/master/res/Arch_Link_v1.0_sch.pdf)
-   [Schematic and board files in EAGLE format](https://raw.githubusercontent.com/SeeedDocument/Arch_Link/master/res/Arch_Link_v1.0_Eagle.rar)
-   [LPC11U35 Firmware](https://raw.githubusercontent.com/SeeedDocument/Arch_Link/master/res/Lpc11u35_nrf51822_if_mbed.bin.zip)
-   [Seeed BLE color pixels App for android](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)
-   [Sources of BLE color pixels App](https://github.com/Seeed-Studio/ble_color_pixels)

See Also
--------

-   [Arch BLE](/Arch_BLE)
-   [W5500 Ethernet Shield](/W5500_Ethernet_Shield_v1.0)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Arch_Link -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>