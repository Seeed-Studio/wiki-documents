---
description: Seeeduino Lite
title: Seeeduino Lite
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Lite
last_update:
  date: 1/31/2023
  author: shuxu hu
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/400px-Lite_01.jpg)

Seeeduino Lite is a microcontroller based on ATmega32U4. Just like Arduino Leonardo, it saves a secondary processor needed for USB to serial communication. And this allows Seeeduino Lite appear to computer as a USB device, like keyboard and mouse. Derived from Leonardo, we also merged custom details of Seeeduino series into Seeeduino Lite, like selectable operating voltage, onboard Grove connectors and so on. It has 20 digital I/Os (7 of which can output PWM),a micro USB connection, a power jack, an ICSP header, and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter to get started.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html)


## Specifications
---
- Microcontroller: ATmega32u4
- Operating Voltage: 5V
- Input Voltage (recommended): 7-12V
- Input Voltage (limits): 6-20V
- Digital I/O Pins: 20
- PWM Channels: 7
- Analog Input Channels: 12
- DC Current per I/O Pin: 40 mA
- DC Current for 3.3V Pin: 50 mA
- Flash Memory: 32 KB (ATmega32u4) of which 4 KB used by bootloader
- SRAM: 2.5 KB (ATmega32u4)
- EEPROM: 1 KB (ATmega32u4)
- Clock Speed: 16 MHz

## Interface
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Seeeduino_Lite_Intrface_Function.jpg)

**U1:** 78M05 IC, Three-terminal positive voltage regulator.

**U3:** LD1117 IC, a Low Drop Voltage Regulator able to provide up to 800mA of Output Current.

**U5:** Atmega32U4 IC, 8-bit AVR Microcontroller with 32K Bytes of ISP Flash and USB Controller.


## Driver Installation
---

:::note
    If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino)
:::


Download the driver files from here [https://github.com/Seeed-Studio/Signed_USB_Serial_Driver](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver).

Connect Seeeduino Lite to your computer via a micro-USB wire.

Wait for the new found hardware prompt.If the installer does not launch automatically, Navigate to the Windows Device Manager and find the Seeeduino Lite listing.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Unknow_Device.jpg)

Right click and choose Update driver. When asked to install automatically or from a specific location, select "Browse my computer for driver software".

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Update_Driver.jpg)

Choose "Search for the best driver in these locations", and check the box "incude this location in the search". Click the Browse button and navigate to drive you have downloaded. Select the drivers folder an click OK.


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Browse_Driver_Location.jpg)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Successfully_Update_Driver.jpg)

Replace two file in the path of Arduino. Open up Arduino-1.0.1/hardware/arduino/cores/arduino directory, replace the file:USBCore.cpp with the new USBCore.cpp.And replace file：boards.txt with the new boards.txt in the path:Arduino-1.0.1/hardware/arduino. Now, you can program and use the seeeduino lite as you use other Arduino boards.



## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Seeeduino_Lite_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources
---
- [Seeeduino Lite Eagle File](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Seeeduino_Lite_Eagle_File.zip).
- [new boards.txt](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Boards.zip).
- [new USBCore.cpp](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Boards.zip).
- [Lite Driver File](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Signed_USB_Serial_Driver-master.zip).

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
