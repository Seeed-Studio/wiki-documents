---
description: Xadow - Main Board
title: Xadow - Main Board
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Main_Board
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Main_Board_00V1.jpg)

The Xadow Main board module is based on the controller **ATmega32U4**. It features high performance and low power consumption, which makes your project small and portable, especially suitable for wearable projects.

The on-board controller **ATmega32U4** has 32K Flash and 2.5K SRAM and 1K EEPROM, it can be also used as a USB slave module, same as the [Seeeduino Lite](https://www.seeedstudio.com/seeeduino-lite-p-1487.html?cPath=6_7), that you can make much more projects with this. This Board can be powered either from the on-board USB connection or a Lithium battery. Also, there is charge circuit on this module that you can charge for the Lithium battery through the USB port.

The first time you use this Xadow main board, please install the related driver and make little modification as Here.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Main-Board-p-1524.html)

## Specification
---
- Microcontroller: ATmega32u4
- Work Voltage: 3.3V
- DC Current per IO pin :40mA
- Digital I/O Pins: 20
- PWM Channels: 7
- Analog Input Channels: 12
- Operating Temperature: -20~70 ℃
- Dimensions: 25.43mm x 20.35mm


## Interface Function
---
![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/XadowMainBoardScreen.jpg)

- J1: Micro USB. can be used for charging for Lithium battery and uploading code.
- U2: ATmega32U4 IC, 8-bit AVR Microcontroller with 32K Bytes of ISP Flash and USB Controller.
- RST: Reset Button. Can reset all system when it connects several Xadow modules.
- J2,J3: FPC interface.
- U1: CN3065 IC, charge management chip.
- BAT: Battery socket, used to hook up LiPo battery,the interface is JST 1.0.
- U4: MIC5205-3.3YM5,Voltage Regulators.

## Pins Description
---
Pins on both sides of Xadow modules are symmetrical, here are pins descriptions about J2 Interface from top to bottom.

![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Pins.jpg)

|Xadow Pins	|Microcontroller Pins	|Function|
|---|---|---|
|1|	9	|(PCINT1/SCLK)PB1|
|2|	10	|(PDI/PCINT2/MOSI)PB2|
|3|	11	|(PDO/PCINT3/MISO)PB3|
|4|	38	|PF5(ADC5/TMS)|
|5|	14,34,24,44	|VCC|
|6|	5,23,35,43	|GND|
|7|	5,23,35,43	|GND|
|8|	14,34,24,44	|VCC|
|9|	18	|(OC0B/SCL/INT0 )PD0|
|10|	19	|(SDA/INT1)PD1|
|11|	20	|(RXD/INT2)PD2|
|12|	21	|(TXD/INT3)PD3|

## Board Revisions and Changes
---
![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_-_Main_board_v1.3.JPG)

**Revision 1.3**
1. This version replaces the J2 and J3 FPC connector to a Flip type. It makes users more easier to connect or disconnect peripherals.
2. Optimize the charge circuit with path control function.
3. Separated the power supply for MCU and peripherals. It makes the MCU working more stable.

## Get Start with Xadow Main Board
---
Similar to the Arduino, the Xadow Main Board uses only a single microcontroller (the Atmel ATmega32U4) to both run your sketches and communicate over USB with the computer. This means that you only need a USB cable to program the Xadow. The specific steps are as follows:
<!-- - To make your Arduino IDE support Xadow, there're a few steps you need to follow, please refer to [here]() -->
- Download the driver files from [https://github.com/Seeed-Studio/Signed_USB_Serial_Driver](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver)
- Connect the Micro-USB cable to the Xadow Main Board.
- Connect the other side of the Micro-USB connector to the computer's USB port.
- Then install the Xadow Driver. You can refer to [Download Arduino and install Arduino driver](https://wiki.seeedstudio.com/Guide_to_use_demos_downloaded_from_Seeed-s_Github/) to learn how to install the Xadow driver.

![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Main_Board_Driver_step4.jpg)

 Now, you can program and use the Xadow as you use other Arduino boards.

[Boards.txt and USBCore.cpp](https://github.com/freespace/Files_For_Seeed_Main_Board) for Arduino IDE v1.6.3


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Main_Board/res/Xadow_Main_Board.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources
---
- [Xadow Main Board eagle file.zip](https://files.seeedstudio.com/wiki/Xadow_Main_Board/res/Xadow_Main_Board.zip)
- [Library of Xadow Main Board](https://github.com/Seeed-Studio/Xadow_MainBoard)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
