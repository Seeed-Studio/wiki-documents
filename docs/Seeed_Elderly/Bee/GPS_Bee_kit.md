---
description: GPS Bee kit
title: GPS Bee kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /GPS_Bee_kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/Gpsbee_05.jpg)

To make the GPS module be easily compatible with the existent shield , we use the same pin packaging as XBee wireless module.So you can put the GPS module into the existent shield which compatible with XBee. Also you can use the [UartSBee V4](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) to connect the GPS module to USB port, run a software named u-center to analyze the GPS data and to reset the GPS module parameter. Put the GPS Bee on the [UartSBee V4](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) , and connect the [UartSBee V4](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) to the PC , open the u-center.exe , choose the UartSB port , then you can see the data that GPS module send back , and the software analyze them and show you the specific information ,like : time , speed , latitude and longitude, ASL and so on.

Kit is come with Mini Embedded Antenna U.FL for GPS，you can also purchase another Antenna with lager size [Embedded Antenna U.FL for GPS](https://www.seeedstudio.com/depot/embedded-antenna-ufl-for-gps-p-564.html?cPath=84_89). Compatible with all shields, breakout, boards with Xbee standard sockets.

[4 pin 2.54mm to 2.0mm Female jumper wire](https://www.seeedstudio.com/depot/4-pin-254mm-to-20mm-female-jumper-wire-100mm-p-403.html) is also available for easy adaption!

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/gps-bee-kit-with-mini-embedded-antenna-p-560.html?cPath=144_145)

## Features

---
- 50-channel u-blox 5 engine with over 1 million effective correlators
- &lt;1 second Time To First Fix for Hot and Aided Starts
- -160dBm SuperSense® acquisition and tracking sensitivity
- Accelerated startup at weak signals for modules with KickStart feature
- Supports AssistNow Online and AssistNow Offline A-GPS services; OMA SUPL compliant
- High immunity to jamming
- 4 Hz position update rate
- Miniature 2.0mm pitch header, compatible with Xbee sockets
- UART, USB, DDC and SPI interfaces
- RoHS compliant

## Application Ideas

---
- Any position system

## Specification

---

| Item | Symbol | Min | Typ | Max | Unit |
|------|--------|-----|-----|-----|------|
| Power Supply | Vcc | 2.7 | 3.0 | 3.6 | V |
| Peak Supply Current (Vcc=3.6V) | | | | 150 | mA |
| Sustained Supply Current (Vcc=3.0V) | | | | | |
| Acquisition | | | 102 | | mA |
| Tracking | | | 44 | | mA |
| Antenna Gain | | | 30 | | dB |
| Operation temperature | | -40 | | 85 | ℃ |

### Pin definition and Rating

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPS.jpg)

| Pin | Name | Function |
|-----|------|----------|
| 1 | Vcc | Power suppl, 2.7-3.6VDC |
| 2 | TX | Serial Port 1 |
| 3 | RX | Serial Port 2 |
| 4 | NC | Reserved |
| 5 | EX | Reserved |
| 6 | NC | Reserved |
| 7 | NC | Reserved |
| 8 | NC | Reserved |
| 9 | NC | Reserved |
| 10 | GND | Ground |
| 11 | NC | Reserved |
| 12 | NC | Reserved |
| 13 | NC | Reserved |
| 14 | NC | Reserved |
| 15 | TP | Configurable Pulse output (default 1Hz, max 4Hz) |
| 16 | NC | Reserved |
| 17 | NC | Reserved |
| 18 | NC | Reserved |
| 19 | SCL | I2C clock pin (configuration only) |
| 20 | SDA | I2C data pin (configuration only) |

## Usage

---
1.General purpose GPS shield Benefiting from XBee compatible pinout and voltage, GPS Bee could re-use any Xbee socket, from Xbee shield to Xbee explore. For example, you may just mount the Xbee module to Arduino projects by a Xbee shield.

2.

| | |
|---|---|
| USB | ![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam.jpg) |

| | |
|---|---|
| **Bluetooth GPS module** Work with UartSB as a USB port GPS module. You may use powerful Ucenter to get practical details easily. Or, add a Bluetooth module to get a Bluetooth GPS module for your projects. | ![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam-2.jpg) |

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam-3.jpg)

Click [here](http://garden.seeedstudio.com/images/2/20/GPSBee-exam-3.jpg) to see the legible and complete image.

### SIM28 module Note

1. GPS Bee has change the module as SIM28 which the same footprint as origin version.

2. You should use ["SIMCom GPS DEMO"](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIMCom_GPS_DEMO_V1.07.zip) tools to receive SIM28 module data.

3. Open SIMCom_GPS_DEMO tools, go to Module-&gt;properties-&gt;module-&gt;select SIM28.

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/SIM28_module_select.jpg)

4. Open SIMCom_GPS_DEMO tools, go to Module-&gt;connect. Select the serial port which the GPS module used.

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/SIM28_module_tools_pannel.jpg)

## Version Tracker

| Revision | Descriptions | Release |
|----------|-------------|----------|
| GPS Bee kit (with Mini Embedded Antenna) | - | Nov 08, 2009 |
| v0.91 | complement | Mar 15, 2011 |
| v1.2 | antenna | May 18,2012 |
| v1.2 | change the GPS module to SIM28 | Dec 5,2013 |
| v1.3 | change the GPS module to SIM28, change the LED to the bottom side. | Jan 10,2014 |

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPS_Bee_v1.3_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

---
- [NEO-5 DataSheet Of U-blox](https://www.seeedstudio.com/depot/datasheet/NEO-5x_Data_Sheet(GPS.G5-MS5-07025).pdf)

- [NEO-6 DataSheet Of U-blox](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/NEO-6_DataSheet-GPS.G6-HW-09005-.pdf)

- [LEA-6 NEO-6 HardwareIntegrationManual](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/LEA-6_NEO-6_HardwareIntegrationManual.pdf)

- [U-center](https://www.seeedstudio.com/depot/datasheet/u-center_5.07_Installer.rar)

- [GPSBee Schematic v1.2.pdf](http://garden.seeedstudio.com/images/5/58/GPSBee_v1.2.pdf)

- [GPSBee v1.2 Eagle file](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPSBee_v1.2_eagle.zip)

- [SIM28_DATA_File](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIM28_DATA_File.zip)

- [SIMCom_GPS_DEMO_V1.07](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIMCom_GPS_DEMO_V1.07.zip)

- [GPSBee V1.3 Eagle File](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPS_Bee_v1.3_eagle.zip)

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
