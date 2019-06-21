---
name: Grove - Serial RF Pro
category: Communication
bzurl: https://www.seeedstudio.com/Grove-Serial-RF-Pro-p-794.html
oldwikiname:  Grove - Serial RF Pro
prodimagename: Twigrf.jpg
surveyurl: https://www.research.net/r/Grove_Serial_RF_Pro
sku:  113020000
---
![](https://github.com/SeeedDocument/Grove-Serial_RF_Pro/raw/master/img/Twigrf.jpg)

Grove-Serial RF Pro is a low cost, high performance transparent FSK transceiver with operating at 433/470/868/915 MHz, and the best performance is at 433M(Default). There is a UART interface that is easy to realize the wireless data transmission with only providing the UART data. It is flexible for the users to set the UART baud rate, frequency, output power, data rate, frequency deviation, receiving bandwidth etc parameters. It is your ideal choice for designing wireless data transmission products which can be widely used on wireless data transmission field.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Serial-RF-Pro-p-794.html)

##  Version Tracker

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
<td width="200px"> NA
</td></tr></table>

##  Features
---
*   Grove compatible
*   High output power
*   High output power
*   Small size
*   Longer transmission distance

##  Application Ideas
---
*   Remote control, remote measurement system
*   Wireless meter
*   Access control
*   Identification system
*   Data collection
*   IT household appliance
*   Baby monitoring system

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
<td scope="row">Working Voltage
</td>
<td> 4.75
</td>
<td> 5.0
</td>
<td> 5.25
</td>
<td> VDC
</td></tr>
<tr>
<td scope="row"> Current at sleep mode
</td>
<td colspan="3"> 1
</td>
<td> uA
</td></tr>
<tr>
<td scope="row"> output power
</td>
<td> 1
</td>
<td> -
</td>
<td> 20
</td>
<td> dB
</td></tr>
<tr>
<td scope="row"> Communication Speed
</td>
<td> 1.2
</td>
<td>  -
</td>
<td> 115.2
</td>
<td> Kbps
</td></tr>
<tr>
<td scope="row"> Transmission Distance(Max)
</td>
<td colspan="3"> 1
</td>
<td> Km
</td></tr>
<tr>
<td scope="row"> Sensitivity
</td>
<td colspan="3"> -117
</td>
<td> dBm
</td></tr>
<tr>
<td scope="row"> Communication Protocol
</td>
<td colspan="3">  UART
</td>
<td> /
</td></tr>
<tr>
<td scope="row"> Operate Temperature
</td>
<td> -40
</td>
<td>  -
</td>
<td> +85
</td>
<td> ℃
</td></tr></table>

##  Interface Function
---
![](https://github.com/SeeedDocument/Grove-Serial_RF_Pro/raw/master/img/Serial_RF_Pro1.jpg)

<table >
<tr>
<th> Pad Type (5V Logic level)
</th>
<th> Description
</th></tr>
<tr>
<td width="100px"> G(GND)
</td>
<td width="450px"> Ground port
</td></tr>
<tr>
<td> EN(ENABLE)
</td>
<td> Set low for normal mode as data transceiver (Default is low with 10k to GND).
Set high to put into sleep mode.
</td></tr>
<tr>
<td> CON(CONFIG)
</td>
<td> Set low for configuration mode (connect to GND).
Set high for communication (Default is high).
</td></tr>
<tr>
<td> RX
</td>
<td> UART Data input
</td></tr>
<tr>
<td> TX
</td>
<td> UART Data output
</td></tr>
<tr>
<td> V(VCC)
</td>
<td> Designed for 5V(+)supply
</td></tr>
<tr>
<td> AT
</td>
<td> Antenna pin
</td></tr></table>

##  Getting Started
---
Here we show two RF Pro Grove units mutually transmitting/receiving data. You need two RF Pro Grove units and two Seeeduino to do the demo.

*   Connect one Grove - Serial RF Pro to UART of [Grove - Base Shield](http://wiki.seeedstudio.com/Base_Shield_V2/) and plug Grove - Base Shield into Seeeduino.

![](https://github.com/SeeedDocument/Grove-Serial_RF_Pro/raw/master/img/Rfdemo.jpg)

*   Connect another Grove - Serial RF Pro to Seeeduino using the same method.

###  Config and Inquiry methods

The module will be ready for Config status if ENABLE pin is low, CONFIG pin is low. It will be in Config
if the red and green LED keep lighting. Then you can Config &amp; inquiry on the module.

*   Connect CON pin to LOW/GND to enter configure mode.

*   Send command to modify and query the config of the module. Config &amp; Inquiry instruction description see [Reference](http://wiki.seeedstudio.com/Grove-Serial_RF_Pro/#reference).

The Config instruction format is as AA+FA+[instruction]+[parameter]. The instruction is 1 byte, the parameter is the HEX data of 0-4 bytes (in big-endian ordering, with the high byte before the low byte).

**Note:**

1) Do remember the UART transfer speed (default is 9600, better not change) if you make some change, or you won't be able to control the module. The instruction’s transfer speed will change accordingly if changes the transfer speed of UART. The range of transfer speed of the instruction is from 1.2Kbps – 115.2K bps.

2) LED Function Description:
- The red and green LED will flash when there is power and the module is working.
- The module will be ready for configuration mode if EN(ENABLE) pin is low(default is low)，CON(Config) pin is low. When in configuration mode, the red and green LED will both be solidly lit. - The green and red LED will not be solidly lit if the module is not in configuration mode.
- The red LED flash when the module is transmitting, the red LED will be off when the transmission is finished.
- The green LED is off when the module is waiting for data to be received, the green LED will flash once when the module receives data.
</dd></dl>
</dd></dl>

###  Communication Mode

Upload the below code into Seeeduino, Please click [here](http://wiki.seeedstudio.com/Upload_Code) if you do not know how to upload.

```
//send data routine

// link between the computer and the SoftSerial Shield
//at 9600 bps 8-N-1
//Computer is connected to Hardware UART
//SoftSerial Shield is connected to the Software UART:D2&D3

#include <SoftwareSerial.h>

SoftwareSerial SoftSerial(11, 10); // TX, RX
int buffer[64];
int count=0;
void setup()
{
    SoftSerial.begin(9600);               // the SoftSerial baud rate
    Serial.begin(9600);             // the Serial port of Arduino baud rate.

}

void loop()
{
    delay(1000);
    SoftSerial.write(0xAA);
    SoftSerial.write(0xFA);
    SoftSerial.write(0xE1);

    if (SoftSerial.available())              // if date is coming from software serial port ==> data is coming from SoftSerial shield
    {
        while(SoftSerial.available())          // reading data into char array
        {
            buffer[count++]=SoftSerial.read();     // writing data into array
            if(count == 64)break;
        }
        for (int i=0; i<count; i++) {
            Serial.print(buffer[i],HEX);            // if no data transmission ends, write buffer to hardware serial port
        }
        clearBufferArray();              // call clearBufferArray function to clear the stored data from the array
        count = 0;                       // set counter of while loop to zero
    }
    if (Serial.available())            // if data is available on hardware serial port ==> data is coming from PC or notebook
    SoftSerial.write(Serial.read());       // write it to the SoftSerial shield
    Serial.println("...");
}
void clearBufferArray()              // function to clear buffer array
{
    for (int i=0; i<count;i++)
    { buffer[i]=NULL;}                  // clear all index of array with command NULL
}
```

*   You can see as show below after open serial monitor.

![](https://github.com/SeeedDocument/Grove-Serial_RF_Pro/raw/master/img/Communication_result.jpg)

##  Reference
---
The following table lists the commands and responses involved in interacting with Serial RF Pro v0.9b.

<table>
<tr>
<th>Instruction(HEX)
</th>
<th>Description
</th>
<th>Config instruction(HEX)
</th>
<th>Return Value
</th></tr>
<tr>
<td>F0
</td>
<td>Reset to default parameters (except UART transfer speed), no parameter follows
</td>
<td width="400px">AA FA F0
</td>
<td>4F 4B 0D 0A （OK /r/n)
</td></tr>
<tr>
<td>E1
</td>
<td>Reading the current Config parameter, no parameter follows
</td>
<td>AA FA E1
</td>
<td>16 bytes: (**following the order below**)
<pre>working frequency-4 bytes,
wireless data rate-4 bytes,
receiving bandwidth-2 bytes,
frequency deviation-1 byte,
transmission power-1 byte,
UART transfer speed-4 bytes
</pre>
</td></tr>
<tr>
<td>D2
</td>
<td>Set up working frequency，[parameter]4 byte，[parameter] Unit :Hz.

Set up range:

*   HM-TRP-433: 414000000-454000000Hz;

*   HM-TRP-470: 450000000-490000000Hz;

*   HM-TRP-868: 849000000-889000000Hz;

*   HM-TRP-915: 895000000-935000000Hz
</td>
<td>Example:

*   Config instruction: AA FA D2 **36 89 CA C0**, set up frequency as 915000000Hz.(**0x36 89 CA C0=915000000**)

*   Config instruction: AA FA D2 **19 DE 50 80**, set up frequency as 434000000Hz.(**0x19 DE 50 80=434000000**)
</td>
<td>4F 4B 0D 0A （OK /r/n)
</td></tr>
<tr>
<td>C3
</td>
<td>Set up wireless data rate，[parameter]4 byte，[parameter] unit :bps.

Set up range:1200-115200 bps

</td>
<td>Example:

*   Config instruction: AA FA C3 **00 00 25 80**,set up transfer speed as 9600bps.(**0x00 00 25 80=9600**)

*   Config instruction: AA FA C3 **00 00 96 00**, set up transfer speed as 38400bps.(**0x00 00 96 00=38400**)
</td>
<td>4F 4B 0D 0A （OK /r/n)
</td></tr>
<tr>
<td>B4
</td>
<td>Set up receiving bandwidth，[parameter]2 byte，[parameter]Unit :KHz

Set up range:30-620KHz

</td>
<td>Example:

*   Config instruction: AA FA B4 **00 69**, set up receiving band as 105KHz.(**0x00 69=105**)

*   Config instruction: AA FA B4 **01 2C**, set up receiving band as 300KHz.(**0x01 2C=300**)
</td>
<td>4F 4B 0D 0A （OK /r/n)
</td></tr>
<tr>
<td>A5
</td>
<td>Set up frequency deviation，[parameter]1 byte，[parameter]Unit :KHz

Set up range:10-160KHz

</td>
<td>Example:

*   Config instruction: AA FA A5 **23**, set up modulation frequency as 35KHz.(**0x23=35**)

*   Config instruction: AA FA A5 **32**, set up modulation frequency as 50KHz.(**0x32=50**)
</td>
<td>4F 4B 0D 0A （OK /r/n)
</td></tr>
<tr>
<td>96
</td>
<td>Set up transmission power ,[parameter]1 byte，0~7level

Set up range:0-7level(1-20 dBm)

</td>
<td>Example:

*   Config instruction: AA FA 96 **07**, set up transmission power as level 7 (+20 dBm)

*   Config instruction:AA FA 96 **03**, set up transmission power as level 3 (+8 dBm)
<pre>Transmission power level     Transmission power
7                                 +20dBm
6                                 +17dBm
5                                 +14dBm
4                                 +11dBm
3                                 +8dBm
2                                 +5dBm
1                                 +2dBm
0                                 +1dBm
</pre>
</td>
<td>4F 4B 0D 0A （OK /r/n)
</td></tr>
<tr>
<td>1E
</td>
<td>Set up UART transfer speed，[parameter]4 byte，[parameter] unit: bps

Set up range:1200-115200 bps

</td>
<td>Example:

*   Config Instruction :AA FA 1E **00 00 25 80**,set up speed as 9600bps.(**0x00 00 25 80=9600**)

*   Config instruction :AA FA 1E **00 00 96 00**, set up speed as 38400bps.(**0x00 00 96 00=38400**)
</td>
<td>4F 4B 0D 0A （OK /r/n)
</td></tr>
<tr>
<td>87
</td>
<td>Wireless signal strength when receiving useful data, follows no [parameter]
</td>
<td>Config Instruction：AA FA 87

![](https://github.com/SeeedDocument/Grove-Serial_RF_Pro/raw/master/img/WirelesssignalstrengthRSSI.jpg)

</td>
<td>RSSI value is 8 bit, range: 0-255
</td></tr>
<tr>
<td>78
</td>
<td>Disturb wireless signal strength, follows no [parameter]

Note：

*   Modulation index : h = Fd/Rb, Range is 0.5 ~ 32.

*   If h&gt;1, BW =Rb+2Fd; If h&lt;1, BW =2Rb+ Fd.
</td>
<td>Config Instruction：AA FA 78
</td>
<td>RSSI value is 8 bit , range: 0-255
</td></tr></table>



##  Resources

*   **[Code]** [Serial RF Pro Demo Code](https://github.com/SeeedDocument/Grove-Serial_RF_Pro/raw/master/res/Grove-Serial_RF_Pro_Demo_Code.zip)

*   **[Datasheet]** [HopeRF HM-TRP Series 100mW Transceiver modules V1.0 Datasheet](https://github.com/SeeedDocument/Grove-Serial_RF_Pro/raw/master/res/HM-TRP-RS232_enV1.0_20120604.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>