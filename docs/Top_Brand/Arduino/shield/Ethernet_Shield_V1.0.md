---
description:  Ethernet Shield V1.0
title:  Ethernet Shield V1.0
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Ethernet_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name:  Ethernet Shield V1.0
category: Discontinued
bzurl:
oldwikiname: Ethernet_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Ethernet_Shield_V1-0
sku:
tags:

--- -->
![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_Shield_Pic.jpg)

Ethernet Shield instantly enables internet connectivity for Arduino projects. An on-board Wiz5100 ethernet controller handles up to four TCP and UDP connections, just stack it onto an Arduino to create your own networked devices. Easily check connection status with on board indicator lights. Extend your design further with two extra rows of pin header that connect to shields and prototyping boards.

**Model:** [ARD124B2P](https://www.seeedstudio.com/depot/wiznet-ethernet-shield-w5100-p-518.html?cPath=102)

## Features ##

- Standard Arduino and Arduino Mega compatible

- Arduino Ethernet Library compatible

- Standard RJ45 ethernet Jack

- 16K byte internal buffer

- Indicator LEDs for all functions

- Easy to access reset button

- Standard pin headers for 0.1" grid prototyping boards

- Up to 4 TCP/UDP network connections

## Specification ##

 |Item| Min| Typical| Max| Unit
 |---|---|---|---|---|
 |**Voltage**|3.5|5|5.5|V|
 |**Current**| 120| 210| 350| mA|
|**Demension**| 72.6x58.4x23.2||| mm|
 |**Supported Connection**| TCP/UDP||| /|
 |**Net Weight**|24.2|||g|

## Interface Function ##

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet-hard1.png)
**RJ45** - Ethernet Port

**Power LED** - Power

**RST LED(red)** - Red when Reset

**LINK LED** - Always ON when link is ok and flashes while in a TX or RX stat

**SPD LED** - Light indicates the link speed is 100Mbps

**FDX LED** - Light indicates the status of full-duplex mode.

**Coll LED** - Light indicates the presence of collision activity

**Rx LED** - Light indicates the presence of receiving activity

**Tx LED** - Light indicates the presence of transmitting activity

**Reset KEY** - Reset Ethernet shield and Arduino when pressed

### Pins usage on Arduino ###

**D0** - Unused

**D1** - Unused

**D2** - Connects the INT pin of the W5100

**D3** - Contral the reset of the W5100

**D4** - Unused

**D5** - Unused

**D6** - Unused

**D7** - Unused

**D8** - Unused

**D9** - Unused

**D10** - Used for SPI Chip Select

**D11** - Used for SPI MOSI

**D12** - Used for SPI MISO

**D13** - Used for SPI SCK

**D14(A0)** - Unused

**D15(A1)** - Unused

**D16(A2)** - Unused

**D17(A3)** - Unused

**D18(A4)** - Unused

**D19(A5)** - Unused

## Usage ##

### Hardware Installation ###

Connect the ethernet shield with internet via RJ45 connector, and Arduino with PC via USB cable. Insert ethernet shield onto Arduion board:
![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield_hard.jpg)

### Software ###

- Open the Arduino IDE(1.0), open the **WebServer** example in the Ethernet library:

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield1.jpg) ![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield3.jpg)

- Select the corresponding Arduino board, like Arduino UNO or Duemilanove or others, in: **Tools- Board**; Select COM port you are using in: **Tools- Serial port**.

- Open your web browser and input the web address:192.168.1.177, you will see the operation result of the arduino board as web server:

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield2.jpg)

## Version Tracker ##

|Revision| Descriptions|Release|
|---|---|---|
|v1.0|V1.0 Release|2012/3/29|

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/Ethernet_Shield.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources ##

- **[Getting started]**[Ethernet Shield Getting started](https://arduino.cc/en/Guide/ArduinoEthernetShield)
- **[Eagle]**[Ethernet Shield Eagle Files](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/Ethernet_Shield.zip)
- **[PDF]**[W5100_ethernet_shield PCB](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/W5100_ethernet_shield.pdf)
- **[PDF]**[W5100_ethernet_shield SCH](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/W5100_ethernet_shield%20SCH.pdf)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
