---
description: Seeeduino Stalker
title: Seeeduino Stalker
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Stalker
last_update:
  date: 1/31/2023
  author: shuxu hu
---

**Seeeduino Stalker** is a feature rich Arduino compatible **Wireless Sensor Network node** with **Data logger functionality**. Its modular structure and onboard peripherals makes it convenient to log time stamped sensor data on a periodic basis. **Seeeduino Stalker** comes with a _Temperature sensor, RTC with backup power, SD Card Socket, Bee Socket and Solar LiPoimer Ion Battery Charger_. The **Seeeduino Stalker** is a good candidate for all your tracking, monitoring and control projects.

Please note that the current (and also the latest) version of is Seeeduino-Stalker v3.

Clicking on the images below will take you to the documentation for the corresponding version.

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeeduino-stalker-168.jpg)   |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Stalkerv21.jpg)   |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeduino_Stalker_v2.1.jpg)   |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeduino_Stalker_v2.2.jpg)   | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeduino_Stalker_v2.2.jpg)| ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeed_Stalker_v3-6.png)|
|---|---|---|---|---|---|
| Seeeduino Stalker v1.0  |Seeeduino Stalker v2.0   |Seeeduino Stalker v2.1   |Seeeduino Stalker v2.2   | Seeeduino Stalker v2.3  | Seeeduino-Stalker v3  |

### Comparison between various versions of Seeeduino Stalker  

<table >
<tr>
<th> Parameter
</th>
<th> v1.0
</th>
<th> v2.0
</th>
<th> v2.1
</th>
<th> v2.2
</th>
<th> v2.3
</th>
<th> v3
</th>
<th> Remarks
</th></tr>
<tr >
<td > <strong><font >Product Release Date</font></strong>
</td>
<td > <strong><font >23rd Dec 2009</font></strong>
</td>
<td > <strong><font >17th Dec 2010</font></strong>
</td>
<td > <strong><font >3rd Oct 2011</font></strong>
</td>
<td > <strong><font >27th Dec 2011</font></strong>
</td>
<td > <strong><font >29th Dec 2011</font></strong>
</td>
<td > <strong><font >6th  Jun 2014</font></strong>
</td>
<td >
</td></tr>
<tr >
<td > <strong>Production Status</strong>
</td>
<td > <strong><font >Discontinued</font></strong>
</td>
<td > <strong><font >Discontinued</font></strong>
</td>
<td > <strong><font >Discontinued</font></strong>
</td>
<td > <strong><font >Discontinued</font></strong>
</td>
<td > <strong><font>In Production</font></strong>
</td>
<td > <strong><font >In Production</font></strong>
</td>
<td >
</td></tr>
<tr >
<td> <strong>User LED &amp; Switch</strong>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr >
<td> User LED
</td>
<td> PB5 (Arduino Pin 13)
</td>
<td> PB0 (Arduino Pin 8)
</td>
<td> PB0 (Arduino Pin 8)
</td>
<td> PB5 (Arduino Pin 13)
</td>
<td> PB5 (Arduino Pin 13)
</td>
<td> PB0 (Arduino Pin 13)
</td>
<td>
</td></tr>
<tr >
<td> User Switch
</td>
<td> PB4 (Arduino Pin 12)
</td>
<td> Not Present
</td>
<td> Not Present
</td>
<td> Not Present
</td>
<td> Not Present
</td>
<td> Not Present
</td>
<td>
</td></tr>
<tr >
<td> <strong>Arduino Compatibility</strong>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr >
<td> Physically compatible with Arduino pinout
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Compatible with Diecimila/Duemilanove/UNO
</td></tr>
<tr >
<td> Software compatible with Arduino
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Bootloader preloaded
</td></tr>
<tr >
<td> Atmega168 variant Available
</td>
<td> Yes
</td>
<td> No
</td>
<td> No
</td>
<td> No
</td>
<td> No
</td>
<td> No
</td>
<td>
</td></tr>
<tr >
<td> Atmega328 variant Available
</td>
<td> No
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td>
</td></tr>
<tr >
<td> AVRISP 6 Pin header present
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td>
</td></tr>
<tr >
<td> FT232RL &amp; USB Connector Present
</td>
<td> No
</td>
<td> No
</td>
<td> No
</td>
<td> No
</td>
<td> No
</td>
<td> No
</td>
<td> In both version "UartSBee V3.1" or <strong>V4.0</strong> must be brought seperately and used for program downloading using Arduino IDE. A connector to mate to UartSBee is present on both versions. Microcontroller reset will automatically be controlled by DTR.
</td></tr>
<tr >
<td> Standalone Operation
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td>
</td></tr>
<tr >
<td> Operation as a shield for Arduino/Seeeduino
</td>
<td> Yes
</td>
<td> No
</td>
<td> No
</td>
<td> No
</td>
<td> No
</td>
<td> No
</td>
<td>
</td></tr>
<tr >
<td> Can be stacked further in shield mode?
</td>
<td> Yes
</td>
<td> N.A.
</td>
<td> N.A.
</td>
<td> N.A.
</td>
<td> N.A.
</td>
<td> N.A.
</td>
<td> Using I<sup>2</sup>C Interface
</td></tr>
<tr >
<td> <strong>Real Time Clock</strong>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr >
<td> Chip
</td>
<td> DS1307
</td>
<td> RX8025
</td>
<td> DS3231
</td>
<td> DS3231
</td>
<td> DS3231
</td>
<td> DS1337
</td>
<td>
</td></tr>
<tr >
<td> Onboard backup power source
</td>
<td> CR2032 Coin Cell
</td>
<td> Super Capacitor
</td>
<td> CR2032 Coin Cell
</td>
<td> CR2032 Coin Cell
</td>
<td> CR2032 Coin Cell
</td>
<td> CR1220 Coin Cell
</td>
<td>
</td></tr>
<tr >
<td> Interface
</td>
<td> I<sup>2</sup>C
</td>
<td> I<sup>2</sup>C
</td>
<td> I<sup>2</sup>C
</td>
<td> I<sup>2</sup>C
</td>
<td> I<sup>2</sup>C
</td>
<td> I<sup>2</sup>C
</td>
<td>
</td></tr>
<tr >
<td> <strong>I<sup>2</sup>C Interface</strong>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr >
<td> Connector for direct connection to PC4 and PC5 (ie SCL and SDA) of the microcontroller
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td> Yes
</td>
<td>
</td></tr>
<tr >
<td> Onboard level translation for connecting to 5.0 volt devices while microcontroller operates in 3.3v mode
</td>
<td> Yes (using PCA9306)
</td>
<td> Yes (using N channel enhancement MOSFET)
</td>
<td> Yes (using N channel enhancement MOSFET)
</td>
<td> Yes (using N channel enhancement MOSFET)
</td>
<td> Yes (using N channel enhancement MOSFET)
</td>
<td> Yes (using N channel enhancement MOSFET)
</td>
<td>
</td></tr>
<tr >
<td> <strong>Power Supply</strong>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
</td></tr>
<tr >
<td> From DC Supply
</td>
<td> Yes (5-12V DC)
</td>
<td> Yes (connect to Solar Cell Connector, but apply 5.0 Volts only)
</td>
<td> Yes (connect to Solar Cell Connector, but apply 5.0 Volts only)
</td>
<td> Yes (connect to Solar Cell Connector, but apply 5.0 Volts only)
</td>
<td> Yes (connect to Solar Cell Connector, but apply 5.0 Volts only)
</td>
<td> Yes (connect to Solar Cell Connector, but apply 5.0 Volts only)
</td>
<td>
</td></tr>
<tr >
<td> From USB
</td>
<td> Yes (when used with UartSBee V3.1)
</td>
<td> Yes (when used with UartSBee V3.1)
</td>
<td> Yes (when used with UartSBee V4.0 or FTDI Cable)
</td>
<td> Yes (when used with UartSBee V4.0 or FTDI Cable)
</td>
<td> Yes (when used with UartSBee V4.0 or FTDI Cable)
</td>
<td> Yes (when used with UartSBee V4.0 or FTDI Cable)
</td>
<td>
</td></tr>
<tr >
<td> From Solar Panel
</td>
<td> No
</td>
<td> Yes (Seperate Connector Present)
</td>
<td> Yes (Seperate Connector Present)
</td>
<td> Yes (Seperate Connector Present)
</td>
<td> Yes (Seperate Connector Present)
</td>
<td> Yes (Seperate Connector Present)
</td>
<td>
</td></tr>
<tr >
<td> From Lithium Polymer Battery
</td>
<td> No
</td>
<td> Yes (Seperate Connector Present)
</td>
<td> Yes (Seperate Connector Present)
</td>
<td> Yes (Seperate Connector Present)
</td>
<td> Yes (Seperate Connector Present)
</td>
<td> Yes (Seperate Connector Present)
</td>
<td>
</td></tr>
<tr >
<td> Battery voltage measurement
</td>
<td> No
</td>
<td> Yes (Jumper for connecting to ADC7)
</td>
<td> Yes (Jumper for connecting to ADC7)
</td>
<td> Yes (Jumper for connecting to ADC7)
</td>
<td> Yes (Jumper for connecting to ADC7)
</td>
<td> Yes (Battery voltage connecting to ADC7)
</td>
<td>
</td></tr>
<tr >
<td> Battery Charging?
</td>
<td> No
</td>
<td> Yes (Through solar cell, Managed by CN3063 Chip)
</td>
<td> Yes (Through solar cell, Managed by CN3063 Chip)
</td>
<td> Yes (Through solar cell, Managed by CN3063 Chip)
</td>
<td> Yes (Through solar cell, Managed by CN3063 Chip)
</td>
<td> Yes (Through solar cell, Managed by CN3065 Chip)
</td>
<td>
</td></tr>
<tr >
<td> Battery Charging Status Read?
</td>
<td> No
</td>
<td> Yes (Digital Pin 6&amp;7)
</td>
<td> Yes (Digital Pin 6&amp;7)
</td>
<td> Yes (ADC6)
</td>
<td> Yes (ADC6)
</td>
<td> Yes (ADC6)
</td>
<td>
</td></tr></table>

## Tech Support

  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
  <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
