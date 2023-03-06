---
description: Atmel AVRISP STK500 USB ISP Programmer
title: Atmel AVRISP STK500 USB ISP Programmer
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Atmel_AVRISP_STK500_USB_ISP_Programmer
last_update:
  date: 1/13/2023
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/Avrisp_stk500_usb.jpg)

<!-- <p style=":center"><a href="https://www.seeedstudio.com/depot/atmel-avrisp-stk500-usb-isp-programmer-p-207.html?cPath=132_135" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/depot/atmel-avrisp-stk500-usb-isp-programmer-p-207.html?cPath=132_135" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## Features
- It can supports a wide range of ATMEL AVR microcontrollor.
- It can works with AVR Studio or WINAVR (GCC)
  
:::note   
   If you can’t download ATMEL AVR Studio 4.13, please download avrstudio7, please download the latest version of AvrStudio. Tools select stk500.
:::

## Application Ideas
- AVR programming
- AVR Burn Bootloader

## Supported Devices
|                       |                       |                     |                       |
|-----------------------|-----------------------|---------------------|-----------------------|
| AT90S1200             | AT90S2313             | AT90S2323           | AT90S2343             |
| AT90S4433             | AT90S8515             | AT90S8535           | ATmega128             |
| ATmega1280            | ATmega1281            | ATmega128RZAV       | ATmega128RZBV         |
| ATmega16              | ATmega161             | ATmega162           | ATmega163             |
| ATmega164P            | ATmega164P Automotive | ATmega165           | ATmega168             |
| ATmega168 Automotive  | ATmega168P            | ATmega169           | ATmega16A             |
| ATmega16U4            | ATmega2560            | ATmega2561          | ATmega256RZAV         |
| ATmega256RZBV         | ATmega32              | ATmega323           | ATmega324P            |
| ATmega324P automotive | ATmega325             | ATmega3250          | ATmega3250P           |
| ATmega325P            | ATmega328P            | ATmega329           | ATmega3290            |
| ATmega3290P           | ATmega329P            | ATmega32A           | ATmega32U4            |
| ATmega48              | ATmega48 Automotive   | ATmega48P           | ATmega64              |
| ATmega640             | ATmega644             | ATmega644P          | ATmega644P Automotive |
| ATmega645             | ATmega6450            | ATmega649           | ATmega6490            |
| ATmega8535            | ATmega88              | ATmega88 Automotive | ATmega88P             |
| ATtiny12              | ATtiny13              | ATtiny13A           | ATtiny15L             |
| ATtiny2313            | ATtiny26              | ATtiny88            |                       |


## Hardware Connection
<!-- <p style=":center"><a target="_blank"><img src="https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-1.JPG"  /></a></p> -->
![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-1.JPG)

<!-- <p style=":center"><a target="_blank"><img src="https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-2.jpg"  /></a></p> -->
![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-2.jpg)

## Example: Burn Bootloader to Arduino UNO

- 1.How to connect : See the picture above
- 2.Install AVRISP driver in the CD .
- 3.Download AVR STUDIO4.19 and install it.

:::warning
    The AVR STUDIO4.13 software in the CD.
:::
- 4.Burn Bootloader to Arduino UNO

    - Step 1. Open AVR STUDIO4.19
    - Step 2. Connect to STK500

        ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP0.jpg)

    - Step 3. Select Platform

        ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-3.jpg)

    - Step 4. Select Device "ATmega328P"
    ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-4.jpg)

    - Step 5. Select Bootloader > Path:\arduino-1.0\hardware\arduino\bootloaders\optiboot\optiboot_atmega328.hex
    ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-5.png)

    - Step 6. Program


## Resources

- [USB Driver](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/USB+Driver/CH341SER.EXE)
- [aStudio4b528](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/aStudio4b528/aStudio413b528.exe)
- [AVRISP User's Guide](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/res/AVRISP.chm)
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
