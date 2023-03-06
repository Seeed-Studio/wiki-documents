---
description:  Tiny BLE
title:  Tiny BLE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Tiny_BLE
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/BLE_Smurfs_Photo.png)

The Tiny BLE is a Bluetooth Low Energy development board designed with low energy consumption and small size in mind. It's integrated with current measurement feature to provide real time energy consumption data, which is essential for developers to optimize software to design long battery life devices. It supports ARM mbed cloud-based IDE with an handy C/C++ SDK and a large number of open source libraries, which makes prototyping and development extremely easy.

|![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_interface.png) |![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_ble.png)
|---|---|

With its modular design, we can divide it into two parts - CMSIS DAP interface part and BLE part. The CMSIS DAP interface part is like the Swiss army knife. It provides drag-n-drop programming, CMSIS DAP debug, USB virtual serial port, current measurement and battery charging. The BLE part is built on the Nordic nRF51822 with Bluetooth Low Energy 2.4GHz multiprotocol radio and a 32 bit ARM Cortex-M0 core running 16MHz. MPU6050, a 6 DOF with 3D accelerometer and 3D gyroscope, is integrated to provide motion detect feature.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeed-Tiny-BLE-BLE-%2B-6DOF-Mbed-Platform-p-2268.html)

##    Features
---
*   nRF51822: ARM Cortex-M0 + 2.4GHz radio (BLE or ANT+)

*   MPU-6050:3d accelemeter + 3d gyroscope

*   LPC11U35FHI33:CMSIS DAP

*   Current measurement

*   CN3065:battery charge port on USB part

*   Power supply:USB/battery(3.5-4.2V)
*   Output voltage:3.3V

*   4 I/Os, all can be used as analog input, digital input/output, I2C, SPI or UART

*   VCC output control

##   Specification
---
<table>
<tr>
<th> Specification
</th>
<th> Value
</th></tr>
<tr>
<td width="200px"> Microcontroller
</td>
<td width="400px"> nRF51822QFAA; LPC11U35FHI33
</td></tr>
<tr>
<td> Outline Dimension
</td>
<td> 43.3mm x 29.0mm x 4.3mm
</td></tr>
<tr>
<td> Power supply
</td>
<td> USB/Battery(JST-1.0 Battery Holder)
</td></tr>
</table>

##   Get Started
---
![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Get_started_with_mbed.png)

1.  Click [this link](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Tiny-BLE) to **login or signup to mbed**

2.  [Import the mbed_blinky program](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Tiny-BLE) and change the code of main.cpp as following.

3.  Click the **Compile** icon of the top toolbar to compile the program, then download a compiled hex file.

4.  Drag-n-drop the downloaded hex file into the MBED disk

5.  A blue LED will be blinking.
```
#include "mbed.h"

DigitalOut red(p22);           // RED LED
DigitalOut green(p21);         // GREEN LED
DigitalOut blue(p23);          // BLUE LED

int main()
{
    while (true) {
        blue = !blue;
        wait(0.1);
    }
}
```

[Seeed_Tiny_BLE_Get_Started program](http://developer.mbed.org/teams/Seeed/code/Seeed_Tiny_BLE_Get_Started/) includes detecting motions, button and battery level. It's a good reference to get started.

###   Debug

To enable SWD debug and get debug message through USB Virtual serial, please install [the driver from mbed](https://developer.mbed.org/handbook/Windows-serial-configuration).

###   Energy Monitoring

Changing the baud rate of the USB virtual serial port to 4000000+ will trigger current measurement. We designed a tool - Tiny BLE MONITOR for you to get the power consumption information easily.

*   [Tiny BLE MONITOR for Windows](http://tangram.qiniudn.com/ble_smurfs_monitor_v0.1.exe)

*   [Tiny BLE MONITOR for Linux/Mac OS](https://github.com/Seeed-Studio/Tiny_BLE/tree/master/utils), additional requirement: pyqtgraph

![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_monitor_preview.png)

###   Update or Restore Firmware

The latest firmware version for the Arch BLE is v0221 built at Feb 06 2015. To check your firmware version and built date, open the MBED.HTM or DETAILS.TXT of your MBED disk in a text editor.

Changelog:

*   2015-02-07 fix Mac OS X 10.10 issue

Firmware:

*   [lastest interface firmware v221 2015-02-06](https://github.com/Seeed-Studio/Tiny_BLE/raw/master/seeed_tiny_ble_interface_latest.bin)

###   Over-The-Air

We customized a DFU bootloader for you to update your application through Over-The-Air (OTA). It is on [github.com/Seeed-Studio/nrf51_dfu_bootloader](https://github.com/Seeed-Studio/nrf51_dfu_bootloader). See also [mbed.org FOTA](https://developer.mbed.org/teams/Bluetooth-Low-Energy/wiki/Firmware-Over-the-Air-FOTA-Updates)


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##  Resource
---
*   [Tiny BLE V1.0 eagle file](https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0.zip)

*   [Tiny BLE V1.0.pdf](https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0_PDF.pdf)

*   [Resources on github](https://github.com/Seeed-Studio/Tiny_BLE)

*   [frizting part](https://github.com/Seeed-Studio/Tiny_BLE/blob/master/tiny_ble.fzpz)

*   [MPU6050 library](http://developer.mbed.org/teams/Seeed/code/eMPL_MPU6050/)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
