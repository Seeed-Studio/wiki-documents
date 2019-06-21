---
name: Grove - Bee Socket
category: Communication
bzurl: https://www.seeedstudio.com/Grove-Bee-Socket-p-1449.html
oldwikiname:  Grove - Bee Socket
prodimagename: LFUUlWtcc3wNmrxDp3yjPy7I.jpg
surveyurl: https://www.research.net/r/Grove_Bee_Socket
sku:  103020002
---

![](https://github.com/SeeedDocument/Grove-Bee_Socket/raw/master/img/Bee_Socket_01.jpg)

Grove - Bee Socket is an adapter of Xbee serials which can connect wireless modules with Arduino, such as WIFI Bee, RF Bee, Bluetooth Bee, etc. It is Arduino compatible and more effective to conduct operations of peer to peer and mesh network ran by wireless modules. Regulator CJT1117 guarantees Xbee of stable 3.3 voltage. LEDs can perform work modes of the grove clearly.
Grove-Bee Socket has the same functions as [XBee Shield](/XBee_Shield_V2.0). Grove-Bee Socket and Arduino are connected by cables, and XB Shield is a standard adapter that can plug to Arduino.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Bee-Socket-p-1449.html)


##  Feature
---
*   Standard Bee Socket and Grove Interface

*   Onboard 3.3V regulator to power your XBee

*   Level Shifting circuit

*   Reset Button for Bee modules

*   LEDs for Bee operations

##  Interface Function
---
![](https://github.com/SeeedDocument/Grove-Bee_Socket/raw/master/img/Bee_Socket_Interface.jpg)

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

![](https://github.com/SeeedDocument/Grove-Bee_Socket/raw/master/img/Grove-Bee_Socket.jpg)

*   Now you can send some simple AT commands to do some basic configuration for the RF Bee and send/receive data. Of course, you can update the firmware without changing the hardware connection.

If you need further information about how to communicate, please refer to WIKI pages of relevant Bee modules.

##  Resource
---
[Bee Socket Eagle File](https://github.com/SeeedDocument/Grove-Bee_Socket/raw/master/res/Bee_Socket_Eagle_File.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>