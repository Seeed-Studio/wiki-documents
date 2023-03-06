---
description: Grove - Bee Socket
title: Grove - Bee Socket
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Bee_Socket
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Bee_Socket_01.jpg)

Grove - Bee Socket is an adapter of Xbee serials which can connect wireless modules with Arduino, such as WIFI Bee, RF Bee, Bluetooth Bee, etc. It is Arduino compatible and more effective to conduct operations of peer to peer and mesh network ran by wireless modules. Regulator CJT1117 guarantees Xbee of stable 3.3 voltage. LEDs can perform work modes of the grove clearly.
<!-- Grove-Bee Socket has the same functions as [XBee Shield](/XBee_Shield_V2.0). Grove-Bee Socket and Arduino are connected by cables, and XB Shield is a standard adapter that can plug to Arduino. -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Bee-Socket-p-1449.html)


##  Feature
---
*   Standard Bee Socket and Grove Interface

*   Onboard 3.3V regulator to power your XBee

*   Level Shifting circuit

*   Reset Button for Bee modules

*   LEDs for Bee operations

##  Interface Function
---
![](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Bee_Socket_Interface.jpg)

**J1:** Grove Interface, used for connecting to UART Interface of Arduino/Seeeduino.

**J2,J3:** Breakout connection for every pin of Xbee.

**J4,J5:** Bee sockets

**U1:** CJT1117 IC, Low dropout linear regulator. Used for power 3.3V for XBee modules.

**U2,U3:** SN74LVC1G125 IC, protects your XBee from 5V Signal, converting it to 3.3V.

**RSSI indicator:** XBee RX Signal Strength Indicator.

**PWR LED:** Power Indicator.

**ASSOC indicator:** Xbee Associated Indicator.

**ON/SLEEP LED:** XBee module Status Indicator.

##  Usage
---
Using the Grove - Bee Socket, it is easy to control Bee Modules by Arduino/Seeeduino. Here take the RF Bee as an example, we'll tell you how to use it.

*   Plug XBee module onto the Bee Socket.

*   Then connect Grove - Bee Socket to UART Interface of Arduino/Seeeduino using a Grove cable. And connect your Arduino/Seeeduino to the computer via a USB cable to turn it on.

![](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Grove-Bee_Socket.jpg)

*   Now you can send some simple AT commands to do some basic configuration for the RF Bee and send/receive data. Of course, you can update the firmware without changing the hardware connection.

If you need further information about how to communicate, please refer to WIKI pages of relevant Bee modules.


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Bee_Socket/res/Bee_Socket_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##  Resource
---
[Bee Socket Eagle File](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/res/Bee_Socket_Eagle_File.zip)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
