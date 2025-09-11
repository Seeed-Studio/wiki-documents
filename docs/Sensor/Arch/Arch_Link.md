---
description: Arch Link
title: Arch Link
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arch_Link
last_update:
  date: 2/1/2023
  author: hushuxu
---

![](https://files.seeedstudio.com/wiki/Arch_Link/img/1020800061.jpg)

**Arch Link** is an mbed enabled development board based on Nordic nRF51822 and WIZnet W5500 ethernet interface. With Arduino form factor, Grove connectors and micro SD interface, it is extremely easy to create a bluetooth low energy device.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Arch-Link-p-2511.html)

Features
--------

- mbed enabled
  - Online IDE
  - Easy to use C/C++ SDK
  - Handy libraries
- CMSIS DAP based on LPC11U35
  - Drag-n-drop programming
  - Debug using CMSIS DAP standard
  - USB virtual serial for communication
- Arduino form factor with Grove connectors
  - I2C and UART connecter on board
- Nordic nRF51822 Multi-protocol Bluetooth® 4.0 low energy/2.4GHz RF SoC
  - ARM Cortex M0 processor
  - 256kB flash/16kB RAM
  - Configurable I/O mapping for digital I/O
- WIZnet W5500 Ethernet
  - Supports following Hardwired TCP/IP Protocols : TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
  - Supports Power down mode
  - Supports Wake on LAN over UDP
  - Supports High Speed Serial Peripheral Interface(SPI MODE 0, 3)
  - Internal 32Kbytes Memory for Tx/Rx Buffers
  - 10BaseT/100BaseTX Ethernet PHY embedded
  - with RJ45 connector
- USB Micro B connector
- Micro SD Card connector

Hardware Overview
------

![](https://files.seeedstudio.com/wiki/Arch_Link/img/Arch_link_pinout.png)

Get Started
-----------

![](https://files.seeedstudio.com/wiki/Arch_Link/img/Get_started_with_mbed.png)

1. Click [this link](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-BLE) to **login or signup to mbed**
2. Import the mbed_blinky program
3. Click the **Compile** icon of the top toolbar to compile the program, then download a compiled hex file.
4. Drag-n-drop the downloaded hex file into the MBED disk

You can open **main.cpp** to change the program. For example, use the following code to blink the LED every 0.1s

```cpp
#include "mbed.h"

DigitalOut led(p30);           // on-board led is connected to p30

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

Applications
------------

1. Color Pixels, a colorful LED strip, can be controlled by mobile phone.

    - Hardware
        - Arch Link
        - [Digital RGB LED Strip](https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-30-LED-1-Meter-p-1665.html)
        - Android device with BLE

    ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Ble_color_pixels_bb.png)

    ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Color_pixels_app.png)

    - Make it run

        1. Download [BLE_Color_Pixels_Arch_BLE.hex](http://tangram.qiniudn.com/BLE_Color_Pixels_ARCH_BLE.hex)
        2. Copy the hex file to the MBED disk of your Arch BLE
        3. Download [the Color Pixels Android app](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)

If you want to change the program, click [this link](https://mbed.org/compiler/#import:/teams/Seeed/code/BLE_Color_Pixels/;platform:Seeed-Arch-BLE) to import the Color Pixels program to mbed online IDE.

If the BLE device is disconnected frequently, we can improve the stability by changing the BLE parameters - Advertising Duration (main.cpp), Min Interval and Max Interval (nRF51822/projectconfig.h)

```cpp
#define CFG_GAP_CONNECTION_MIN_INTERVAL_MS           20                     /**< Minimum acceptable connection interval */
#define CFG_GAP_CONNECTION_MAX_INTERVAL_MS          200                     /**< Maximum acceptable connection interval */
```

2. You can use the Arch Link as a web dashboard.

    - Hardware
        - Arch Link
        - [Grove - Temperature&Humidity Sensor Pro](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-Pro-p-838.html)

    ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Web_dashboard_bb.png)

    - Make it run

        1. Download [Web_Dashboard_Arch_Link.hex](http://tangram.qiniudn.com/Web_Dashboard_Arch_Link.hex)
        2. Copy the hex file to the MBED disk of your Arch Link
        3. Connect the Grove - Temperature&Humidity Sensor Pro to I2C Grove connector
        4. Connect the Arch Link to your PC through USB cable
        5. Open a web browser and visit [http://mbed.org/media/uploads/yihui/web_dashboard.html](http://mbed.org/media/uploads/yihui/web_dashboard.html)

If you want to change the program, click [this link](https://mbed.org/compiler/#import:/teams/Seeed/code/Web_Dashboard/;platform:Seeed-Arch-Link) to import the Web Dashboard program to mbed online IDE.

## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Link/res/Arch_Link_v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
---------

-   [Arch Link mbed developer platform page](https://developer.mbed.org/platforms/Seeed-Arch-Link/)
-   [Schematic in PDF format](https://files.seeedstudio.com/wiki/Arch_Link/res/Arch_Link_v1.0_pdf.pdf)
-   [Schematic and board files in EAGLE format](https://files.seeedstudio.com/wiki/Arch_Link/res/Arch_Link_v1.0_Eagle.zip)
-   [LPC11U35 Firmware](https://files.seeedstudio.com/wiki/Arch_Link/res/Lpc11u35_nrf51822_if_mbed.bin.zip)
-   [Seeed BLE Color Pixels App for Android](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)
-   [Sources of BLE Color Pixels App](https://github.com/Seeed-Studio/ble_color_pixels)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Arch_Link -->

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
