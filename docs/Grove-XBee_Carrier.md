---
name: Grove - XBee Carrier
category: Sensor
bzurl: https://www.seeedstudio.com/grove-xbee-carrier-p-905.html?cPath=132_134
oldwikiname:  Grove - XBee Carrier
prodimagename: Bee_Stem.jpg
surveyurl: https://www.research.net/r/Grove-XBee_Carrier
sku:  113020004
---
![](https://github.com/SeeedDocument/Grove-XBee_Carrier/raw/master/img/Bee_Stem.jpg)

The Grove - XBee Carrier is a Wireless Sensor Network (WSN) base board designed for Bee series and Grove units. It is primarily suitable for standalone Bee Nodes like RFBee, Wifi Bee which have ATMega328 onboard and XBee (Zigbee) modules. It is compatible with [RFBee](/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node"), [Wifi Bee](/Wifi_Bee "Wifi Bee"), [XBee](http://garden.seeedstudio.com/index.php?title=Bee_series#ZigBee "Bee_series#ZigBee") and [Bluetooth Bee](/Bluetooth_Bee "Bluetooth Bee"). Besides a Bee receptacle, there are also two Grove connectors. The board can be powered by a lithium battery or through USB cable. You can use a Wireless charger, Solar Panel or the USB cable to charge the battery. The FT232RL chip onboard helps in downloading the program to Bee Module directly.

Bees which do not have ATMega328 like Bluetooth Bee can only be configured by using on-board FT232RL (USB to UART). Theses Bees are not suitable for standalone applications.

The on-board FT232RL can be used like any other 3.3V USB to UART interface when not connected to any Bee Modules. This is useful for programming a 3.3V MCU through Serial Port.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/grove-xbee-carrier-p-905.html?cPath=132_134)

##  Features
---
*   Bees Compatible Receptacle

*   Two Grove Connectors

*   Two Grove Place Holders

*   LEDs for PWR, Charge Indication and UART transmission.

*   Power Switch

*   Reset Button

##  Application Ideas
---
*   Wireless Sensor Network with Standalone Bee Node like [Wifi Bee](/Wifi_Bee "Wifi Bee").

*   As a configuration aid for Bees using FT232RL.

*   Charger for Lithium Ion Cells using on-board charge controller.

*   As a FT232RL based 3.3v USB-UART.

##  Cautions
---
<font color="red">
</font>

*   Insert the Bees in the proper direction. Use the Bee outline on the silk-screen.

##  Specification
---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Min
</th>
<th scope="col"> Typical
</th>
<th scope="col"> Max
</th>
<th scope="col"> Unit
</th></tr>
<tr>
<th scope="row"> Voltage
</th>
<td> 3.0
</td>
<td> 3.3
</td>
<td> 3.6
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Charge Controller
</th>
<td colspan="4"> CN3063
</td></tr>
<tr>
<th scope="row"> CHARGER (Charging Voltage for LiPo Battery)
</th>
<td colspan="4"> 4.4V to 6V (as per CN3063 Spec)
</td></tr>
<tr>
<th scope="row"> Charging Current
</th>
<td colspan="4"> Max 500mA
</td></tr>
<tr>
<th scope="row">  3.3V LDO
</th>
<td colspan="4"> Low Noise and Micropower type. Suitable for Battery Application.
</td></tr>
<tr>
<th scope="row"> I/O Logic
</th>
<td colspan="4"> 3.3V Logic
</td></tr></table>

##  Interface Function
---
![](https://github.com/SeeedDocument/Grove-XBee_Carrier/raw/master/img/Xbee_Carrier_Interface.jpg)

**U2:** RT9167A_33PB IC, 3.3V LDO Lownoise Micropower Regulator
**U3:** CN3083 IC, Charger controller for Lithium batteries (charging using solar panel)
**U4:** FT232RL IC, USB to serial UART interface

##  Usage
---
When using an RFBee, the following pinouts of ATmage168 on RFBee apply for using the Arduino IDE

Pin 5 is the Grove connector for I/O - Yellow wire
 Pin 6 is the Grove connector for I/O - White wire

Pin 16 may need to be driven low to provide enough power to the I/O Grove [via mosfet]
 Pin 17 may need to be driven low to provide enough power to the I2C Grove [via mosfet]

**Note:** you can use the x2 Grove cable with the white and yellow wires swapped on one to access both I/O.

###  Hardware Installation

####  Charging

Now you can choose a suitable battery for your application from **SeeedStudio** [Batteries and Chargers](/Solar_Charger_Shield_V2.2 "Solar_Charger_Shield_V2.2")

*   Connect a 3.7v LiPo battery to **BAT** JST-socket.

*   Connect a power source like Solar Panel to **CHARGER** JST-Socket.

*   The Battery will be continuous charged. The end of charging would be indicated by LED marked 'OK'.

![](https://github.com/SeeedDocument/Grove-XBee_Carrier/raw/master/img/Bee_Stem_with_LiPOBattery_Being_Charged_By_SolarCell.jpg)

####  Working with Standalone Bee Nodes

Bee Nodes are standalone Arduino Compatible Wireless Nodes. **SeeedStudio** has two such Nodes - [Wifi Bee](/Wifi_Bee "Wifi Bee") and [RFBee](/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node").

*   The following image illustrated the connection of [WiFi Bee](/Wifi_Bee "Wifi Bee") to **Grove - XBee Carrier**.

*   Any Groves can be connected to the Grove sockets provided.

*   The programming of WiFi Bee's onboard **AtMega328P** is carried by connecting to PC through USB port. (FT232RL is used)

![](https://github.com/SeeedDocument/Grove-XBee_Carrier/raw/master/img/Bee_Stem_Connected_to_Wifi_BEE_and_A_Grove.jpg)

Bee Stem Connected to Wifi BEE and A Twig.jpg

*   Refer [Wifi Bee usage documentation for programming examples](http://garden.seeedstudio.com/index.php?title=Wifi_Bee#Usage "Wifi_Bee#Usage")

![](https://github.com/SeeedDocument/Grove-XBee_Carrier/raw/master/img/Bee_Stem_Connected_To_RFBee_And_TwoTwigs.jpg)

Bee Stem Connected To RFBee And TwoTwigs.jpg

####  Working with Bee Modules

This section is about those Bee modules which do not have a MCU pre-programmed with Arduino bootloader. They mostly act just like a wireless trans-receiver. These **Bee Modules** like Bluetooth Bee, etc.. can communicated with PC as well. In this case, **Grove - XBee Carrier** acts as a carrier for these Bees providing necessary power, communication interface with PC through FT232RL USB to UART.

*   In the below example [Bluetooth Bee](/Bluetooth_Bee "Bluetooth Bee") is connected to **Grove - XBee Carrier** and configured using USB-UART

![](https://github.com/SeeedDocument/Grove-XBee_Carrier/raw/master/img/Stem_XBee_Carrier_Connected_to_BluetoothBee.jpg)

*   The communication of Bluetooth Bee and PC is captured with a serial port terminal application.

*   You can see the commands and their reply in the screenshot below.

*   The Bluetooth Bee was put into INQ mode and it even has detected a Bluetooth device in the vicinity.

![](https://github.com/SeeedDocument/Grove-XBee_Carrier/raw/master/img/Stem_XBee_Carrier_BluetoothBee_Commands.png)

*   For more information on using [Bluetooth Bee](/Bluetooth_Bee "Bluetooth Bee"), consult the [Bluetooth Bee Commands documentation](/Bluetooth_Bee#Commands_to_change_default_configuration "Bluetooth Bee").

###  Programming
```
/*
  Test code for use with an XBee Carrier & an RF Bee

  Turns on PD5 (eg: grove relay) on for one second, then off for one second, repeatedly.
*/

void setup()
{
    // initialize the digital pin as an output [Pin 5 is the Grove connector for I/O
    pinMode(5, OUTPUT);

    // These lines are needed to ensure that the relay will pull in [provides power to the Grove]
    pinMode(16, OUTPUT);
    digitalWrite(16, LOW);
}

void loop() {
    digitalWrite(5, HIGH);   // set the LED on
    delay(1000);              // wait for a second
    digitalWrite(5, LOW);    // set the LED off
    delay(1000);              // wait for a second
}
```

##  Version Tracker
---
<table>
<tr>
<th> Revision
</th>
<th> Descriptions
</th>
<th> Release
</th></tr>
<tr>
<td width="300px"> v0.9b
</td>
<td width="500px"> Initial public release
</td>
<td width="200px"> 13th July 2011
</td></tr></table>

##  Resources
---
*   [Grove - XBee Carrier  Eagle Files](https://github.com/SeeedDocument/Grove-XBee_Carrier/raw/master/res/PCBA-Grove%20XBee%20Carrier_Eagle.rar)

*   [Grove - XBee Carrier PDF schematics file](https://github.com/SeeedDocument/Grove-XBee_Carrier/raw/master/res/Bee_Stem_v0.9b.pdf)

*   [CN3063](http://www.consonance-elec.com/pdf/%E6%8A%80%E6%9C%AF%E8%AF%B4%E6%98%8E%E4%B9%A6/DSC-CN3063.pdf)

*   [RT9167A_33PB](http://www.richtek.com/download_ds.jsp?s=238)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>