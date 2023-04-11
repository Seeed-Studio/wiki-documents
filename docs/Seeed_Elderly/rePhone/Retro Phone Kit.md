---
description:  Retro Phone Kit
title:  Retro Phone Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Retro Phone Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Retro%20Phone%20Kit.jpg)

The Retro Phone Kit is an open-source hardware phone that is compatible with Arduino. Remember RePhone？The world first open-source and modular phone, with which you can hack things around you with cellular connection. The Retro Phone can be considered as RePhone with push button that can bring you back to those old days when mobile phone is simply a tool to make phone call. The kit is very easy to use, so you can make a mobile phone in minutes.

The main board of this kit is Xadow-Key Board, which contains a screen and a push button panel. The most important part is the RePhone Core 2G-Atmel32u4, which is a new RePhone Core board that was just brought to the market. It uses Atmel32u4 MCU and supports quad-band 850/900/1800/1900MHz that covers GSM network all over the world. We also let it keeps a 3.5mm headphone jack so that you can use a headphone to make phone call. We did not include any shell for the phone, so you are free to DIY any shell you like.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Retro-Phone-Kit-p-2797.html)

## Features
---
- Arduino-Compatible

- Support Analog Audio

- 2G Nano SIM only

- PTCRB Certied

- LCD 128*64

- 3.5mm headphone jack(with Mic) which support OMTP

- Power Supply:3.4-4.2V(BAT) 5V(USB)

## Specification

**Rephone Core 2G-Atmel32u4**

For more info about this module please check on [Rephone Core 2G-Atmel32u4](https://wiki.seeedstudio.com/RePhone_core_2G-Atmel32u4/)

|Item|	Value|
|---|---|
|Microcontroller|	Atmega32U4|
|Operating Voltage|	3.3V|
|DC Current per I/O Pin	|50|
|Flash Memory	|32 KB of which 4KB used by bootloader|
|SRAM	|2.5 KB
|EEPROM|	1KB
|Clock Speed	|16 MHz
|Lenght	|68 mm
|Width	|30 mm
|Weight	|12 gr

## Module Connection
The Rephone Core 2G-Atmel32u4  integrates a Xadow 36 Pin connector and a Xadow 11 Pin connector, similar as Xadow - GSM＋BLE. In this case, the module connection is very easy,

1. Connect the Xadow Key Board  to the RePhon core board via 36 pin connector, Do bear in mind that the cable has to be inserted firmly and flat, and most importantly, keep the ‘TOP’ side upwards.

2. Insert the antenna

3. Insert a nano 2G SIM card

4. Connect the Lipo battery to the Rephone core board via the battery interface.

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/IMG_2275.JPG)

## Run a test code

**RePhone_Menu_GSM**

Step1. Install the Rephone Core 2G-Atmel32u4, please click [here](https://wiki.seeedstudio.com/RePhone_core_2G-Atmel32u4/#arduino-ide) to see the full instruction .

Step2. Find the example and upload to your board

Once you have installed the Rephone Core 2G-Atmel32u4 in Arduino IDE, the basic examples would also be included and you can find them in the example section.

The examples include:
- Atmel32u4_gprs.h
- TimerOne.h
- Rephone_lcm.h
- Rephone_button.h
- Rephone_menu_gsm

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Example%20code.png)

Step3.  Make a phone call to yourself

- If the example is uploaded successfully, the screen will be on and you can see the main menu as below.

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Main%20Manu.JPG)

- Click the right button to select the phone call interface

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Call.JPG)

- Del your number and then click the right button to choose "Go"

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Del.JPG)

Then you wil receive a phone call from the Retro Phone.

##  RePhone Community
---
[![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

We’ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules’ development in the future. And then here we go, the RePhone Community.

Now join us in the [RePhone Community](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)! Together we seek answers, make interesting stuff, care about each other, and share our experiences.


## RePhone core 2G Atmel32u4 Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Xadow - Key Board Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/202001232_PCBA%3BXadow%20-%20Key%20Board_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Resources

- [RePhone core 2G Atmel32u4 Schematic in PDF](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0.pdf)
- [RePhone core 2G Atmel32u4 Schematic in Eagle](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0_Eagle.zip)
- [Xaodw - Key Board Schematic in PDF](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/Xadow%20-%20Key%20Board%20v1.0.pdf)
- [Xadow - Key Board Schematic in Eagle](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/202001232_PCBA%3BXadow%20-%20Key%20Board_Eagle.zip)
- [Driver for RePhone core 2G Atmel32u4](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20driver.zip)
- [Datasheet of ETA6003](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/ETA6003.pdf)
- [AT Command of SIM800](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/SIM800_AT.pdf)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
