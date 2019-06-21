---
name: Xadow GPS V2
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html
oldwikiname: Xadow GPS V2
prodimagename: Xadow_GPS_v2.JPG
surveyurl: https://www.research.net/r/xadow-gps-v2
sku: 113040009
---

---
![](https://github.com/SeeedDocument/Xadow_GPS_V2/raw/master/images/Xadow_GPS_v2.JPG)

Based on the GPS L70 module from Quectel®, the Xadow GPS v2 combines the advanced AGPS technology EASYTM (Embedded Assist System) and the AlwaysLocateTM technology to achieve high performance, ultra-low power consumption and fast positioning even at indoor signal levels. With an excellent high-sensibility receiver (-163dBm tracking) and a built-in chip antenna, the module can track up to 22 satellites on 66 channels, making it a perfect choice for navigation projects. The board also adopts the new 11 PIN Xadow connector to improve the flexibility of module connections.

[![](https://github.com/SeeedDocument/Xadow_GPS_V2/raw/master/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)

## Features
---

- EASY™, advanced AGPS technology without the need for external memory
- Ultra-low power consumption in tracking mode
- AlwaysLocate™, an intelligent controller of alternate modes
- High sensitivity
- Support QZSS
- Support DGPS, SBAS(WAAS/EGNOS/MSAS/GAGAN)
- Anti-Jamming, Multi-tone Active Interference Canceller
- Built-in chip antenna with efficiency up to 83%
- Built-in 11 PIN Xadow Connectors for fully flexible connection with other Xadow Modules
- Stackable, chain-able and sew-able with other Xadow Modules

## Specification
---

|||
|---|---|
|**Microcontroller**|	Kinetis KL02|
|**Core**|	ARM® 32-bit Cortex® -M0+CPU|
|**Power Supply**	|3.3 ~ 6 V (via breakout pins)|
|**Flash**|	32 KB|
|**SRAM**|	4 KB
|**Clock Speed**|	48 MHz
|**Power Consumption**	|18mA@Tracking, 21mA@Acquisition
|**Power Saving**|	Typ. 3mA@AlwaysLocateTM, 7uA@Backup<br>Mode, 180uA@Standby Mode
|**Channel**|	22(Tracking) / 66 (Acquisition)
|**Update Rate**|	1Hz(Default), up to 10Hz
|**Horizontal Position Accuracy**|	<2.5m CEP
|**Velocity Accuracy**|	<0.1m/s
|**Maximum Velocity**|	Max.515m/s
|**Cold/warm start with EASYTM**|215s/5s
|**Acquisition Sensitivity**|-145dBm
|**Tracking Sensitivity**|	-163dBm
|**Operating Temperature**|-40℃ to 85℃
|**Protocols	NMEA**|0183/PMTK
|**Antenna Type**|	Chip antenna
|**Interface**|	Interface with Xadow GSM+BLE through<br>I2C (7-bit address 0x05)
|**Dimensions**|	25.37mm X 20.30mm / 1” × 0.8”

## Hardware Overview
---
![](https://github.com/SeeedDocument/Xadow_GPS_V2/raw/master/images/Xadow_GPS_v2.png)

## About Global Positioning System (GPS)
---
The Global Positioning System (GPS) is a space-based navigation system that provides real-time and all-weather geographic position, altitude, travelling speed and time information anywhere on or near the Earth where there is an unobstructed line of sight to four or more GPS satellites. It was formerly used only by military projects, and now it is freely accessible to anyone with a GPS receiver. The typical applications of GPS cover automobile navigation, time transfer, traffic signal timing, anti-theft and tracking devices, etc.

## Rephone Community
---
[![](https://github.com/SeeedDocument/Xadow_GPS_V2/raw/master/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

We’ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules’ development in the future. And then here we go, the [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone).

Now join us in the [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone)! Together we seek answers, make interesting stuff, care about each other, and share our experiences.

**Frequently Asked Questions**

Some frequently asked questions in [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone) are collected and answered to the topic "Frequently Asked Questions of RePhone (FAQ)" , the topic will be kept updating whenever a new FAQ comes out.

## Resources
---
We will be keep updating the source code on our github page:

- [Source Code for Xadow GPS v2](https://github.com/WayenWeng/Xadow_GPS_v2/)
- [Testing Code for Xadow GPS v2 based on Eclipse IDE](https://github.com/WayenWeng/Xadow_GPS_v2_test/)

The schematic diagram of Xadow GPS v2 is provided in the following link:

- [Xadow GPS v2 Schematic Files](https://github.com/SeeedDocument/Xadow_GPS_V2/raw/master/resources/202000729_PCBA%3BXadow%20GPS%20v2.1_schemic%20file.zip)

When you find the GPS values are a bit far from your actual location, you might need to burn new firmware to Xadow GPS V2:

- [Learn how to burn new firmware with a mbed board](https://github.com/SeeedDocument/Xadow_GPS_V2/raw/master/resources/Burn_to_Xadow_modules.zip)

Check more info about the GPS L70 and the chip antenna:

- [Specification for GPS L70 and the chip antenna](https://github.com/SeeedDocument/Xadow_GPS_V2/raw/master/resources/GPS_L70_%26_Chip_Antenna.rar)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>