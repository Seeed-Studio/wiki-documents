---
name: LoNet 808 - Mini GSM/GPRS + GPS Breakout
category: MakerPro
bzurl: https://www.seeedstudio.com/LoNet-808-Mini-GSM%26GPRS-%2B-GPS-Breakout-p-2493.html
oldwikiname:  LoNet 808 - Mini GSM/GPRS + GPS Breakout
prodimagename:  113990107%200.jpg
surveyurl: https://www.research.net/r/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout
sku:  113990107
---
![](https://github.com/SeeedDocument/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/raw/master/img/113990107%200.jpg)

This board based on the latest SIMCOM SIM808 GSM/GPS module, it offers cellular GSM and GPRS data along with GPS technology for satellite navigation.

The board features ultra-low power consumption in sleep mode, giving the project incredibly long standby times. Furthermore there's an onboard battery charging circuit that can be used with LiPo batteries.

The GPS receiver is incredibly sensitive with 22 tracking and 66 acquisition channels, and also supports assisted-GPS (A-GPS) for indoor localisation. The board is controlled by AT command via UART and supports 3.3V and 5V logical level. It comes with a mini GPS and GSM antenna, however a battery is optional.

The board uses the 2G (not 3G or LTE) GSM networks.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoNet-808-Mini-GSM%26GPRS-%2B-GPS-Breakout-p-2493.html)

##   Features
---
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
---
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

##   Interfaces
---
![](https://github.com/SeeedDocument/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/raw/master/img/Mappings-01.png)

① Power Button: this is the hard power switch for the module. When the module is power up, you can turn on or turn off the module by pressing the button for 2s.

② Li-ion Battery: this is power supply for the module, input voltage is from 3.4V to 4.4V. It uses the JST-2.0mm connector, that make it convenient to connect to 3.7V Li-Po Battery.

③ MicroUSB: the charging interface for Li-Ion battery, of input voltage range from 5V to 7V.

④ GSM Antenna: this is an uFL GSM antenna connector, just connect it to a GSM antenna for receiving GSM signal.

⑤ GPS Antenna: this is an uFL GPS antenna connector. You can connect either passive or active GPS antenna to it. Active GPS antenna runs at 2.8V voltage.

⑥ Net Indicator: Red LED, it will tell the what status is about the module linking to network.

⑦ Status Indicator: Green LED, it will tell whether the module is on, light when the module is running.

⑧ Breakout Pin: see Pin Definitions for more details.

⑨ SIM - Card Holder: SIM card holder for standard SIM card

⑩ Power Supply Pin: used for power soldering and testing.

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
<td> I/0
</td>
<td> Power input / output
</td>
<td> 3.4V - 4.4V DC
</td></tr>
<tr>
<td> GND
</td>
<td> I/0
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
<td> 2.8V - 5.0V DC
</td></tr>
<tr>
<td> DTR
</td>
<td> I
</td>
<td> Sleep mode controlled pin
</td>
<td> Pull high for sleep mode
</td></tr>
<tr>
<td> PWR
</td>
<td> O
</td>
<td> Power switch
</td>
<td> Active low in 2s
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
<td> Reset pin
</td>
<td> Active low
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

##    Accessories
---

Besides the antenna, you may need the following accessories using with LoNet 808.

<table>
<tr>
<td> <div class="center"><div class="floatnone">![](https://github.com/SeeedDocument/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/raw/master/img/Simcard.jpg)</div></div>
<div style=": center;">SIM-Card
 for GSM/GPRS Communication </div>
</td>
<td> <div class="center"><div class="floatnone">[![](https://github.com/SeeedDocument/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/raw/master/img/Battery_2200ma.jpg)](http://www.seeedstudio.com/depot/Polymer-Lithium-Ion-Battery-2200mAh-37V-p-1709.html?cPath=1_3)</div></div>
<div style=": center;"> 3.7V Li-ion Battery
 for power supply</div>
</td>
<td> <div class="center"><div class="floatnone">[![](https://github.com/SeeedDocument/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/raw/master/img/Power_Converter.jpg)](http://www.seeedstudio.com/depot/Adjustable-DCDC-Power-Converter-125V-35V3A-p-1534.html?cPath=1_4)</div></div>
<div style=": center;">DC/DC Voltage Regulator
 for power supply</div>
</td></tr>
<tr>
<td> <div class="center"><div class="floatnone">[![](https://github.com/SeeedDocument/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/raw/master/img/100cmUSBc.jpg)](http://www.seeedstudio.com/depot/USB-To-Uart-5V3V3-p-1832.html)</div></div>
<div style=": center;"> MicroUSB Cable
for charging battery</div>
</td>
<td> <div class="center"><div class="floatnone">[![](https://github.com/SeeedDocument/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/raw/master/img/USB_To_Uart_5V3V3.jpg)](http://www.seeedstudio.com/depot/USB-To-Uart-5V3V3-p-1832.html)</div></div>
<div style=": center;"> USB to UART Tool
for testing ATcommand on PC</div>
</td>
<td> <div class="center"><div class="floatnone">[![](https://github.com/SeeedDocument/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/raw/master/img/3wsp.JPG)](http://www.seeedstudio.com/depot/3W-Solar-Panel-138X160-p-954.html?cPath=1_118)</div></div>
<div style=": center;"> Solder Panel
for charging battery </div>
</td></tr>
</table>

##   Usage
---
###   Reference Circuit

**&gt; Connect to MCU **

![](https://github.com/SeeedDocument/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/raw/master/img/C1-01.png)

**&gt; Connect to PC **

![](https://github.com/SeeedDocument/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/raw/master/img/C2-01.png)

###   Getting Started with AT Command

The module is controlled by AT command via serial port, here we use Arduino as USB to serial tool. Upload the following code to Arduino and open the serial monitor. If you use other USB to serial tools, you can use [AT Command Tester](/AT_Command_Tester_Application) or [SSCOM32](https://github.com/SeeedDocument/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/raw/master/res/Sscom32E.zip) to test AT commands.
```
// this sketch is used for testing LoNet with Arduino

// Connect VIO to +5V
// Connect GND to Ground
// Connect RX (data into SIM808) to Digital 11
// Connect TX (data out from SIM808) to Digital 10

#include <SoftwareSerial.h>

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
```

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

##   Downloads
---
*   [LoNet_808_Schematic](https://github.com/SeeedDocument/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/raw/master/res/LoNet_808_Schematic.pdf)

*   [SIM800_ATCommand_Manual](https://github.com/SeeedDocument/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/raw/master/res/SIM800_ATCommand_Manual_V1.02.pdf)

*   [SIM808_HardwareDesign_Manual](https://github.com/SeeedDocument/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/raw/master/res/SIM808_Hardware_Design_V1.00.pdf)

*   [SIM808_GPSApplication_Note](https://github.com/SeeedDocument/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/raw/master/res/SIM808_GPS_Application_Note_V1.00.pdf)

##   Resources
---
*   [GPRS_Shield library on gitHub](https://github.com/Seeed-Studio/GPRS_Shield_Suli)

*   [Adafruit_FONA_Library](https://github.com/adafruit/Adafruit_FONA_Library/)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>