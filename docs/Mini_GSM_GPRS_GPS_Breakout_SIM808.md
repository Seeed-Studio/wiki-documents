---
name: Mini GSM/GPRS+GPS Breakout SIM808
category: Discontinued
bzurl:
oldwikiname: Mini-GSM-GPRS-GPS-Breakout-SIM808
prodimagename:
bzprodimageurl: https://www.research.net/r/Mini-GSM-GPRS-GPS-Breakout-SIM808
sku:
tags:

---

##   Overview  

This board based on the latest SIMCOM SIM808 GSM/GPS module, it offers cellular GSM and GPRS data along with GPS technology for satellite navigation.

The board features ultra-low power consumption in sleep mode, giving the project incredibly long standby times. Furthermore there's an onboard battery charging circuit that can be used with LiPo batteries.

The GPS receiver is incredibly sensitive with 22 tracking and 66 acquisition channels, and also supports assisted-GPS (A-GPS) for indoor localisation. The board is controlled by AT command via UART and supports 3.3V and 5V logical level. It comes with a mini GPS and GSM antenna, however a battery is optional.

The board uses the 2G (not 3G or LTE) GSM networks.

##   Features

*   Quad-band 850/900/1800/1900MHz

*   GPRS multi-slot class12 connectivity: max. 85.6kbps(down-load/up-load)

*   GPRS mobile station class B

*   Controlled by AT Command (3GPP TS 27.007, 27.005 and SIMCOM enhanced AT Commands)

*   Supports charging control for Li-Ion battery

*   Supports Real Time Clock

*   Supply voltage range 3.4V ~ 4.4V

*   Integrated GPS/CNSS and supports A-GPS

*   Supports 3.0V to 5.0V logic level

*   Low power consumption, 1mA in sleep mode

*   Supports GPS NMEA protocol

*   Compact size 27mm x 46mm x 10mm

*   Standard SIM Card

##   GPS Specifications   

*   Receiver channels: 22 tracking / 66 acquisition

*   Coarse/Acquisition code: GPS L1

*   Tracking sensitivity: -165dBm

*   Cold start time: 30s (typ.)

*   Hot start time: 1s (typ.)

*   Warm start time: 28s (typ.)

*   Horizontal position accuracy: &lt; 2.5m CEP

*   Power consumption - Acquisition: 42mA

*   Power consumption - Continuous tracking: 24mA

*   Update rate: 5Hz

##   Functional Block  

![](https://github.com/SeeedDocument/Mini-GSM-GPRS-GPS-Breakout-SIM808/raw/master/img/Lonet_pcb_top.jpg)

*   GPS Antenna: this is an uFL GPS antenna connector. You can connect either passive or active GPS antenna to it. Active GPS antenna runs at 2.8V voltage.

*   MicroUSB: the charging interface for Li-Ion battery, of input voltage range from 5V to 7V.

*   Power Button: this is the hard power switch for the module. When the module is power up, you can turn on or turn off the module by pressing the button for 2s.

*   Net Indicator: Red LED, it will tell the what status is about the module linking to network. It can be turned off by LEDs_EN jumper pad.

*   Status Indicator: Green LED, it will tell whether the module is on, light when the module is running. It can be turned off by LEDs_EN jumper pad.

*   Li-ion Battery: this is power supply for the module, input voltage is from 3.4V to 4.4V. It uses the JST-2.0mm connector, that make it convenient to connect to 3.7V Li-Po Battery.

*   GSM Antenna: this is an uFL GSM antenna connector, just connect it to a GSM antenna for receiving GSM signal.

*   SIM - Card Holder: SIM card holder for standard SIM card

###   Pin Definitions

<table >
<tr>
<th scope="col"> **Name**
</th>
<th scope="col"> **I/O**
</th>
<th scope="col"> **Description**
</th>
<th scope="col"> **Note**
</th></tr>
<tr>
<th scope="row"> BAT
</th>
<td>
</td>
<td> Power input / output
</td>
<td> 3.4V - 4.4V DC
</td></tr>
<tr>
<td> GND
</td>
<td>
</td>
<td> Power ground / logic ground
</td>
<td>
</td></tr>
<tr>
<td> VIO
</td>
<td> I
</td>
<td> Logic level reference
</td>
<td> 3.0V - 5.0V DC
</td></tr>
<tr>
<td> DTR
</td>
<td> I
</td>
<td> Wake up pin for module in sleep mode
</td>
<td>
</td></tr>
<tr>
<td> PWR
</td>
<td> O
</td>
<td> Power switch
</td>
<td> Low level pulse
</td></tr>
<tr>
<td> RI
</td>
<td> O
</td>
<td> Event/ message pin
</td>
<td>
</td></tr>
<tr>
<td> TXD
</td>
<td> O
</td>
<td> Transmit data
</td>
<td> UART output from SIM808
</td></tr>
<tr>
<td> RXD
</td>
<td> I
</td>
<td> Receive data
</td>
<td> UART Input to SIM808
</td></tr>
<tr>
<td> RST
</td>
<td> I
</td>
<td> Module rest
</td>
<td>
</td></tr></table>

###   Indicator LEDs

<table >
<tr>
<th scope="col"> **Indicator LEDs**
</th>
<th scope="col"> **Status**
</th>
<th scope="col"> **Behavior**
</th></tr>
<tr>
<th scope="row"> Operating Status (Green)
</th>
<td> Off
</td>
<td> SIM808 is not running
</td></tr>
<tr>
<td>
</td>
<td> On
</td>
<td> SIM808 is running
</td></tr>
<tr>
<th scope="row"> Network Status (Red)
</th>
<td> Off
</td>
<td> SIM808 is not running
</td></tr>
<tr>
<td>
</td>
<td> 64ms on/ 800ms Off
</td>
<td> SIM808 not registered to the network
</td></tr>
<tr>
<td>
</td>
<td> 64ms On/ 3000ms Off
</td>
<td> SIM808 registered to the network
</td></tr>
<tr>
<td>
</td>
<td> 64ms On/ 300ms Off
</td>
<td> PPP GPRS communication is established
</td></tr></table>

##   Usage  

###   Related Product

The module comes with a mini GPS and GSM antenna, but not includes Li-Po battery. In addition, to use this module, you still need a unlock SIM-Card that supports GPRS service.

*   3.7 V Li-ion Battery
*   SIM-Card
*   USB to UART Tool

###   Reference Circuit

![](https://github.com/SeeedDocument/Mini-GSM-GPRS-GPS-Breakout-SIM808/raw/master/img/Rerfer_Circuit_SIM808.png)

###   Getting Started with AT Command

The module is controlled by AT command via serial port, here we use Arduino as USB to serial tool. Upload the following code to Arduino and open the serial monitor. If you use other USB to serial tools, you can use [AT Command Tester](https://seeeddoc.github.io/AT_Command_Tester_Application/) or [SSCOM32](https://github.com/SeeedDocument/Mini-GSM-GPRS-GPS-Breakout-SIM808/raw/master/res/Sscom32E.zip) to test AT commands.

<pre>
// this sketch is used for testing LoNet with Arduino

// Connect VIO to +5V
// Connect GND to Ground
// Connect RX (data into SIM808) to Digital 11
// Connect TX (data out from SIM808) to Digital 10

#include &lt;SoftwareSerial.h&gt;

SoftwareSerial mySerial(10, 11); // RX, TX

void setup()  
{
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  mySerial.begin(9600);

}

void loop() // run over and over
{
  if (mySerial.available())
    Serial.write(mySerial.read());

  if (Serial.available())
  {
    while(Serial.available())
    {
      mySerial.write(Serial.read());
    }
    mySerial.println();
  }
}
</pre>

####   Set Baud and Enable Charging Function

It is recommended to execute this process when first time to use the module. In the Serial Monitor columns of following tables, input of AT commands are in back, module returns values are in orange.

<table cellpadding="0">
<tr>
<th scope="col" width="50"> Serial Monitor
</th>
<th scope="col" width="100"> Description
</th></tr>
<tr>
<td> AT
<span style="color: rgb(242,133,0)">OK</span> </td>
<td> Send command “AT” to synchronize baud rate. Serial port of module is by default set at auto-baud mode, and in this mode, it will not output any indications when the module is on.
</td></tr>
<tr>
<td> AT+IPR=9600
<span style="color: rgb(242,133,0)">OK</span></td>
<td> Set baud rate at 9600bps, supports baud rate from 1200bps to 115200bps.
</td></tr>
<tr>
<td> AT+ECHARGE=1
<span style="color: rgb(242,133,0)">OK</span></td>
<td> Send command “AT+ECHARGE=1” to enable battery charging function. By default the charging function is closed.
</td></tr>
<tr>
<td> AT&amp;W
<span style="color: rgb(242,133,0)">OK</span></td>
<td> Save parameter setting.
</td></tr>
<tr>
<td> AT+CPOWD=1
<span style="color: rgb(242,133,0)">NORMAL POWER DOWN</span></td>
<td>Power down the module.
</td></tr>
<tr>
<td> <span style="color: rgb(242,133,0)">RDY
+CFUN: 1
GPS Ready
+CPIN: READY
Call Ready
SMS Ready</span></td>
<td>Turn on the module again by the power button, it will response status about GPS and GSM.
</td></tr>
<tr>
<td> AT+CBC
<span style="color: rgb(242,133,0)"> +CBC: 1,96,4175
 OK</span></td>
<td>Inquire charging status and remaining battery capacity.
</td></tr>
<tr>
<td> AT+CSQ
<span style="color: rgb(242,133,0)"> +CSQ: 14,0
 OK</span></td>
<td>Inquire GSM signal quality.
</td></tr>
</table>

####   Get location with GPS

<table cellpadding="0">
<tr>
<th scope="col" width="11"> Serial Monitor
</th>
<th scope="col" width="700"> Description
</th></tr>
<tr>
<td> AT+CGPSPWR=1
<span style="color: rgb(242,133,0)">OK</span> </td>
<td> Open GPS
</td></tr>
<tr>
<td> AT+CGPSSTATUS?
<span style="color: rgb(242,133,0)"> +CGPSSTATUS: Location Not Fix
OK</span></td>
<td> Read GPS fix status, “Location Not Fix” means that positioning is not successful. For the first time to start, it will take at least 30s. _**GPS must be tested by the window or outdoor.**_
</td></tr>
<tr>
<td> AT+CGPSSTATUS?
<span style="color: rgb(242,133,0)"> +CGPSSTATUS: Location 3D Fix
OK</span></td>
<td> GPS has fixed with 3D status.
</td></tr>
<tr>
<td> AT+CGPSINF=0
<span style="color: rgb(242,133,0)"> +CGPSINF:
 0,2234.931817,11357.122485,
92.461185,20141031041141.000,
88,12,0.000000,0.000000 </span></td>
<td> Get the current GPS location information. Parameters formate: &lt;mode&gt;, &lt;altitude&gt;, &lt;longitude&gt;, &lt;UTC time&gt;, &lt;TTFF&gt;, &lt;num&gt;, &lt;speed&gt;, &lt;course&gt;
</td></tr>
<tr>
<td> AT+CGPSOUT=32
<span style="color: rgb(242,133,0)">OK
$GPRMC,043326.000,A,
2234.9414,N,11357.1187,E,
0.000,143.69,311014,,,A*50 </span></td>
<td> Read NMEA $GPRMC data, of which, “2234.9414 N, 11357.1187 E” is the location coordinates. For more details about NMEA sentences, [check this site](http://www.gpsinformation.org/dale/nmea.htm).
</td></tr>
<tr>
<td> AT+CGPSRST=0
<span style="color: rgb(242,133,0)"> OK</span></td>
<td>Reset GPS in Cold Start Mode.
</td></tr>
<tr>
<td> AT+CGPSRST=1
<span style="color: rgb(242,133,0)"> OK</span></td>
<td>Reset GPS in Hot Start Mode.
</td></tr>
<tr>
<td> AT+CGPSPWR=0
<span style="color: rgb(242,133,0)"> OK</span></td>
<td>Close GPS.
</td></tr>
</table>

##   Resource  

- **[PDF]**   [LoNet_DesignSchematic](https://github.com/SeeedDocument/Mini-GSM-GPRS-GPS-Breakout-SIM808/raw/master/res/LoNet_DesignSchematic.pdf)

- **[PDF]**    [SIM800_ATCommand_Manual](https://github.com/SeeedDocument/Mini-GSM-GPRS-GPS-Breakout-SIM808/raw/master/res/SIM800_ATCommand_Manual_V1.02.pdf)

- **[PDF]**   [SIM808_HardwareDesign_Manual](https://github.com/SeeedDocument/Mini-GSM-GPRS-GPS-Breakout-SIM808/raw/master/res/SIM808_Hardware_Design_V1.00.pdf)

- **[PDF]**   [SIM808_GPSApplication_Note](https://github.com/SeeedDocument/Mini-GSM-GPRS-GPS-Breakout-SIM808/raw/master/res/SIM808_GPS_Application_Note_V1.00.pdf)

- **[Library]**    [GPRS_Shield library on gitHub](https://github.com/Seeed-Studio/GPRS_Shield_Suli)

- **[Library]**   [Adafruit_FONA_Library](https://github.com/adafruit/Adafruit_FONA_Library/)

##   Related Projects

It's a pity that we don't have any demo about LoNet-GSM/GPRS/GPS Breakout in the [Recipe](http://www.seeedstudio.com/recipe/) yet.

Post your awesome project about LoNet-GSM/GPRS/GPS Breakout to <font color="#FF0000">win $100 Coupon!</font>. Please feel free to contact us: **recipe@seeed.cc**

Here we introduce some projects about [GPRS Shield](http://www.seeedstudio.com/depot/GPRS-Shield-V30-p-2333.html) as a reference.

###  What is GPRS shield

![](https://github.com/SeeedDocument/Mini-GSM-GPRS-GPS-Breakout-SIM808/raw/master/img/113030009_1.jpg)

Features:

*   Compatible with standard Arduino and Arduino Mega

*   Quad band support: 850/900/1800/1900MHz

*   Full control via AT commands set: Standard - GSM 07.07 &amp; 07.05 and Enhanced - SIMCOM AT Commands

*   Support TCP/UDP protocols

###   SMS Remote Control

![](https://github.com/SeeedDocument/Mini-GSM-GPRS-GPS-Breakout-SIM808/raw/master/img/54c720959dae7.JPG)

This project describes how to turn your hot water heater on and off via SMS and check if it is on or off.

It is reliable, secure, easy and flexible because of the reasons below:

*   Commands are always responded to and lost messages are re-requested

*   It uses 128 bit password protection

*   The pfodDesigner generates all the code, and you can use it to create you own custom menu.

*   All the pfod screens are available via SMS, like sub-menus, multi and single selection list, text input, data logging and plotting.

[**I want to make it.**](http://www.seeedstudio.com/recipe/98-sms-remote-control.html)

###   Arduino Phone

![](https://github.com/SeeedDocument/Mini-GSM-GPRS-GPS-Breakout-SIM808/raw/master/img/Recipe-arduinophone.png)

Arduino phone is a cell phone made by ourselves via combining Arduino and other shield modules.

This project tells us what you need to do when Arduino Phone apps can't fit your needs.

This Arduino Phone contains the following main functions.

*   receive &amp; send message, letter input

*   dial &amp; answer calls

*   real time clock display

*   A convenient and concise UI

[**I want to make it.**](http://www.seeedstudio.com/recipe/37-arduinophone.html)

[**More Awesome Projects by GPRS**](http://www.seeedstudio.com/recipe/index.php?query=GPRS)

###   Share Your Awesome Projects with Us

Born with the spirit of making and sharing, that is what we believe makes a maker.

And only because of this, the open source community can be as prosperous as it is today.

It does not matter what you are and what you have made, hacker, maker, artist or engineers.

As long as you start sharing your works with others, you are being part of the open source community and you are making your contributions.

Now share your awesome projects with us on [Recipe](http://www.seeedstudio.com/recipe/), and win a chance to become the Core User of Seeed.

*   Core Users, are those who show high interests in Seeed products and make significant contributions on Recipe.
*   We cooperate with our Core Users in the development of our new product, this, in another word, the Core Users will have the chance to experience any new products of Seeed before its official launch, and in return we expect valuable feedback from them to help us improve the product performance and user experience. And in most cases when our Core Users have some good ideas of making things, we'll offer hardware pieces, PCBA services as well as technical support. Besides, further commercial cooperation with the Core Users is highly possible.

<font color="#FF0000">Get more information about Core User, please email to:</font> **recipe@seeed.cc**

##   Support

Any tech support, please contact [_support@deegou.com_](http://www.deegou.com)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>