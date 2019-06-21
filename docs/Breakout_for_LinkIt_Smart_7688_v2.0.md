---
name: Breakout for LinkIt Smart 7688 v2.0
category: LinkIt
bzurl: https://www.seeedstudio.com/Breakout-for-LinkIt-Smart-7688-v2.0-p-2641.html
oldwikiname: Breakout for LinkIt Smart 7688 v2.0
prodimagename: Breakout_for_LinkIt_Smart_7688_v2.0_product_view_700.jpg
surveyurl: https://www.research.net/r/Breakout_for_LinkIt_Smart_7688_v2
sku: 103100022
---

---
**Breakout for LinkIt Smart 7688 v2.0** is a Grove port integrated expansion board for LinkItTM Smart 7688 development board. This breakout board will help beginners to get started fast because it can save a lot of work and make prototyping easier through simplified wiring. It comes with USB, Ethernet, and 3.5mm Audio ports and supports serial buses like I2C, UART.

![](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688_v2_0/blob/master/image/Breakout_for_LinkIt_Smart_7688_v2.0_product_view_700.jpg?raw=true)

**Version Tracker**

|Product reversion | Release date |Support status |Notes                  |
|------------------|--------------|---------------|-----------------------|
|Version 1.0       |November 2015 |Supported      |	None                  |
|Version 2.0       |April 2016	  |Supported      | Refer to New Features |

**New features:**

* Support recording functionality.
* For 3.5 mm phone connector (audio jack), it supports the protocol OMTP and CTIA. You can use either protocol by toggling a switch. About how to switch protocol, we will please sroll down the page to  read **How to switch phone connector protocol between OMTP and CTIA**


[![enter image description here](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688_v2_0/raw/master/image/300px-Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Breakout-for-LinkIt-Smart-7688-v20-p-2641.html)

## Features
---
* Grove interface makes wiring easier and allows expansions with Grove modules.
* USB host
* Audio Output
* Ethernet port
* Cost-effective
* Support recording functionality
* Switch between OMTP and CTIA

## Application ideas
---
* IoT/Gateway Device.
* Robotics
* Smart multimedia devices
* Teaching and learning


## Specification
---
|Input voltage|Operating voltage|
|:---------------:|:---------------:|
|5.0V(With USB Power port) 	|  3.3V  |


!!!note
    Debug pins, Ethernet pins and USB type-A host pins connect with MT7688, other pins connect with ATmega32U4.

## Hardware Overview
---
![](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688_v2_0/blob/master/image/Breakout_for_LinkIt_Smart_7688_v2.0_hardware_connections_1200_s.jpg?raw=true)

|Hardware|Qty|Hardware|Qty|Hardware|Qty|
|---|---|---|---|---|---|
|Debug port	|1|Headset port|1|Aux Pins|2|
|Ethernet port	|1|Pins to switch protocol |6|Grove Connector|3|
|USB type-A	|1|Stereo Speaker driver interface|1|Headset port|	1|


### About Grove interface

If you ever used Seeed's [Grove](http://www.seeedstudio.com/wiki/Grove_System) products, you will fell in love with this kind of modules. With this kind of ports, you can say goodbye to  jumper wire and soldering work, and you can make more powerful applications with those functional modules.

### How to switch phone connector protocol between OMTP and CTIA

![](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688_v2_0/raw/master/image/Breakout_for_LinkIt_Smart_7688_v2.0_switch_procotol_1200_.jpg)


If you compare V1.0 and V2.0, you can notice that there are six pins and two jumper caps on bottom-right corner. These pins are used to switch phone connector protocol. As you set tiny jumper(both) to left-four pin, protocol OMTP is used. As you set tiny jumper(both) to right-four pin (as preceded figure shows), protocol CTIA is used. As following figures show:
Breakout for LinkIt Smart 7688 v2.0 CTIA OMTP Switch Manner.JPG
Note that to use the recording functionality, you need to update on-board firmware to Breakout for LinkIt Smart 7688 firmware(above version v0.9.2).

![](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688_v2_0/raw/master/image/Breakout_for_LinkIt_Smart_7688_v2.0_CTIA_OMTP_Switch_Manner.JPG)

!!!note
	* Because the Write/Read speed of on-board flash memory is limited， We recommend you to use external storage device.


## Get started
---
In this tutorial, you are going to make a simple MP3 player with Breakout for LinkIt Smart 7688 V2.0.

### Material required
Except Breakout for Linkit Smart 7688 V2.0, here are other materials that is needed for the application. Before you start, please make sure you have every thing on hand, or you can visit Seeed [Bazzar](https://www.seeedstudio.com/) to get them.

|LinkIt Smart 7688 × 1|USB cable (type A to micro type-B) × 2|UARTBee × 1|Jumper wires × 3
|:---:|:---:|:---:|:---:|
|![](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688_v2_0/raw/master/image/linkit%20smart%207688.jpg)|![](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688_v2_0/raw/master/image/48cmUSBc.jpg)|![](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688_v2_0/raw/master/image/UartSBee%20V5_01.jpg)|![](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688_v2_0/raw/master/image/jw100n.jpg)
|[Get One Now](https://www.seeedstudio.com/Breakout-for-LinkIt-Smart-7688-v2.0-p-2641.html)|[Get One Now](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|[Get One Now](https://www.seeedstudio.com/UartSBee-V5-p-1752.html)|[Get One Now](https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html)|

For below 2, I think you surely have them.
- Stereo Speaker(with 3.5 mm audio cable) × 1
- USB flash disk (with audio file of MP3 format inside) × 1

**Step1:** Refer [here](http://www.seeedstudio.com/wiki/LinkIt_Smart_7688#Getting_Started) to connect your LinkIt Smart 7688 to Internet.


!!!note
    You can plug jumper wires to MT7688 UART2 port instead soldering them to Pin 8, Pin 9 and Pin GND.

!!!note
    In rare cases, you might not connect to Internet successfully, reboot the embedded OS.

**Step2:** Open a console with USB to Serial adapter.

**Step3:** Connect all parts like follows:

![](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688_v2_0/raw/master/image/Breakout_for_LinkIt_Smart_7688_demo_connection_New.jpg)

!!!note
    This is a figure of Breakout for LinkIt Smart 7688(v1.0).

**Step4:** Enter folder of USB by type **cd /Media/USB-A1** in console.

**Step5:** Play music with utility **Madplay**(installed on OpenWRT) by typing **madplay filename.mp3** into console.

**Step6:** Now you will hear the music.

## Resources
---

* [Schematic files](https://github.com/SeeedDocument/Breakout_for_LinkIt_Smart_7688_v2_0/blob/master/resource/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip?raw=true)
* [LinkIt smart 7688](http://www.seeedstudio.com/wiki/LinkIt_Smart_7688)
* [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)
* [Link to buy a LinkIt Smart 7688](http://www.seeedstudio.com/depot/LinkIt-Smart-7688-p-2573.html?cPath=122_142)

## Project

**Smart Vendy** Tracking vendor sales so that effectively manage what inventory needs to buy to fill machines before it gets out of stock.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sainath-komakula/smart-vendy-cd197e/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>