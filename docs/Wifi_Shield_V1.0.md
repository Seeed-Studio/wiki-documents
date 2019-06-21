---
name:  Wifi Shield V1.0‏‎
category: Discontinued
bzurl:
oldwikiname: Wifi_Shield_V1.0‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Wifi_Shield_V1-0
sku:
tags:
---

![](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/img/Wifishield.jpg)

This Wifi Shield utilizes a RN171 wifi module to provide your Arduino/Seeeduino with serial Ethernet's function. It only takes two pins to hook your device up to 802.11b/g wireless networks with this shield. It features an independent antenna which can cover a wider range and transmit stronger signals. With supports for common TCP, UDP and FTP communication protocols, this Wifi Shield can meet needs of most wireless network projects, like smart home networks, robot controls or personal weather stations,etc. We prepared an easy and convenient command set for this shield so that you can use neat and concise code to run the function.



#   Features   #

- Arduino, Seeeduino, Arduino Mega and Seeeduino Mega compatible

- Host Data Rate up to 1 Mbps for UART, 2 Mbps over SPI slave

- UART serial port of RN171 on the Shield can be connected to Arduino by jumpers

- SPI pin of RN171 is just breakout

- With two Grove connectors, making it easy to connect I2C and digital IO Grove modules to Arduino

- Secure WiFi authentication WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)

- Built-in networking applications: DHCP client, DNS client, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP

#   Specifications   #

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
<td> 3.3
</td>
<td> 5
</td>
<td> 5.5
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Current
</th>
<td> 25
</td>
<td> 60
</td>
<td> 400
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> Transmit power
</th>
<td colspan="3"> 0-10
</td>
<td> dBm
</td></tr>
<tr>
<th scope="row"> Frequency
</th>
<td colspan="3"> 2402~2480
</td>
<td> MHz
</td></tr>
<tr>
<th scope="row">
<p>Network rate<br/>
</p>
</th>
<td colspan="4"> 1-11 Mbps for 802.11b/6-54Mbps for 802.11g
</td></tr>
<tr>
<th scope="row"> Dimension
</th>
<td colspan="3">  60x56x19
</td>
<td> mm
</td></tr>
<tr>
<th scope="row"> Net Weight
</th>
<td colspan="3">  20±2
</td>
<td> g
</td></tr></table>

#   Interface Function

![](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/img/Wifishield009.jpg)

#   Usage   #

The example we provided here is to show you how to connect this Wifi Shield to the Ethernet and get data exchanging between the shield and a virtual server started.

###   Hardware Installation   ###

The package you receive should contain these parts: a Wifi Shield, an antenna and an antenna connector.

![](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/img/Wifishield001.jpg)

Assemble these parts together like the picture below.

![](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/img/Wifishield002.jpg)

Mount the shield onto your Arduino/Seeeduino

![](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/img/Wifishield003.jpg)

Ok, time to write some code.

###   Software Programming   ###

First you have to make sure that Arduino1.0 has already been installed on your computer.

![](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/img/Tb2.jpg)
Download the wifishield library here [Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) and unzip it into the libraries file of Arduino via this path: ..\arduino-1.0\libraries
Open a new sketch in Arduino-1.0, then copy the following code to your sketch.

```
#include "Wifly.h"
#include <SoftwareSerial.h>
WiflyClass Wifly(2,3);
void setup()
{
 Serial.begin(9600);//use the hardware serial to communicate with the PC
 Wifly.init();//Initialize the wifishield
 Wifly.setConfig("SSID","PASSWORD");//here to set the ssid and password of the Router
 Wifly.join("SSID");
 Wifly.checkAssociated();
 while(!Wifly.connect("192.168.1.164","90"));//connect the remote service
 Wifly.writeToSocket("Connected!");
}
void loop()
{
 if(Wifly.canReadFromSocket())
 {
   Serial.print(Wifly.readFromSocket());
 }
 if(Serial.available())
 {
   Wifly.print((char)Serial.read());
 }
}

```

You need to do some modifications on this sketch according to your specific configuration.

1.Select Pin to connect the Serial Port of WIFI Module

```
WiflyClass Wifly(2,3);

```

The parameters 2 and 3 here represent RX and TX respectively for the software serial port. Based on this, pins of D2 and D3 should be shorted as the picture below. You can change the pin number as you like, just make sure corresponding changes on the shorted pins.

![](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/img/Wifishield004.jpg)

2.Fill in wireless network information

```
Wifly.setConfig("SSID","PASSWORD");//here to set the ssid and password of the Router
Wifly.join("SSID");
```

Fill the name of your target network into SSID and password into PASSWORD. For example, if you like to join the China-NET and its password is 12345678, then this line of code should be changed into:

```
Wifly.setConfig("China-NET","12345678");//here to set the ssid and password of the Router
Wifly.join("China-NET");
```

**Note:**

1.Router Security type just support WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)

2.Router must to connect Internet 

3.Fill in the information of the remote server

```
while(!Wifly.connect("192.168.1.164","90"));//connect the remote service
```

In the upper line, "192.168.1.164" is the remote IP address of the virtual server, and "90" is the port information.

We provide a TCP Client software  [YFTCPServer.zip](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/res/YFTCPServer.zip) and serial port software [SCCOM](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/res/Sscom32E.zip) for testing purpose.

Open the TCP Client software you will see:

![](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/img/Wifishield005.jpg)

Change your lines according to the information you get from this software.

```
while(!Wifly.connect("192.168.1.164","90"));//connect the remote service
```

Upload the sketch.

Now run the TCP Client software first, then the serial port software, click the "OpenCom" button, wait until a message "<--Connected!" is printed on the screen of the virtual software.

![](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/img/Wifishield006.jpg)

![](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/img/Wifishield007.jpg)

Now you can communicate with the Wifi Shield via this serial port software.

For more detailed information about RN171, you can download the datasheet here [RN171 Datasheet](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/res/WiFly-RN-UM.pdf)

#   Resources   #

- **[Eagle]**[Wifi Shield Eagle File](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/res/Wifi_Shield_Eagle.zip)
- **[PDF]**[wifi Shield V1.0 PCB](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/res/wifi%20Shield%20V1.0.pdf)
- **[PDF]**[wifi Shield V1.0 SCH](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/res/wifi%20Shield%20V1.0%20SCH.pdf)
- **[Datasheet]**[RN171 Datasheet](https://github.com/SeeedDocument/Wifi_Shield_v1.0/raw/master/res/WiFly-RN-UM.pdf)
- **[Library]**[Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>