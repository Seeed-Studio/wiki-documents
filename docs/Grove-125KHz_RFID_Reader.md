---
title: Grove - 125KHz RFID Reader
category: Communication
bzurl: https://seeedstudio.com/Grove-125KHz-RFID-Reader-p-1008.html
oldwikiname: Grove_-_125KHz_RFID_Reader
prodimagename: Grove-125KHz_RFID_Reader.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/gr125k.jpg
surveyurl: https://www.research.net/r/Grove-125KHz_RFID_Reader
sku: 113020002
tags: grove_digital, io_5v, plat_duino, plat_pi
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-125KHz_RFID_Reader/master/img/Grove-125KHz_RFID_Reader.jpg)

This Grove-125KHz RFID Reader is a module used to read uem4100 RFID card information with two output formats: Uart and Wiegand. It has a sensitivity with maximum 7cm sensing distance. There is also [the electronic brick version](http://www.seeedstudio.com/depot/electronic-brick-125khz-rfid-card-reader-p-702.html?cPath=52) of this module. It can help you with project like internet of thing and access control system.

And you should use the module below while using RFID reader:

-   [RFID tag combo (125khz)](http://www.seeedstudio.com/depot/rfid-tag-combo-125khz-5-pcs-p-700.html?cPath=19_24)

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/grove-125khz-rfid-reader-p-1008.html)

Specifications
--------------

-   Voltage: 4.75-5.25V
-   Working Frequency: 125 KHz
-   Sensing Distance(Max): 70mm
-   TTL Output: 9600 baudrate, 8 data bits, 1 stop bit, and no verify bit
-   Wiegand Output: 26 bits Wiegand format, 1 even verify bit, 24 data bits, and 1 odd verify bit

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)
    
Platforms Supported
-------------------

Demonstration
-------------

Here we show how to read RFID information using the Grove - 125KHz RFID Reader. Connect Grove - 125KHz RFID Reader to UART of Grove - Base Shield.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-125KHz_RFID_Reader/master/img/RFID_reader.jpg)

### Uart Mode (Jumper set to the left two pins)

You would need to select the jumper to "U" to enter this mode, and the setting is: 9600bps, N, 8, 1, TTL output

```c
/*
  link between the computer and the SoftSerial Shield
  at 9600 bps 8-N-1
  Computer is connected to Hardware UART
  SoftSerial Shield is connected to the Software UART:D2&D3
*/
 
#include <SoftwareSerial.h>
 
SoftwareSerial SoftSerial(2, 3);
unsigned char buffer[64];       // buffer array for data receive over serial port
int count = 0;                    // counter for buffer array
 
void setup()
{
    SoftSerial.begin(9600);     // the SoftSerial baud rate
    Serial.begin(9600);         // the Serial port of Arduino baud rate.
}
 
void loop()
{
    // if date is coming from software serial port ==> data is coming from SoftSerial shield
    if (SoftSerial.available())              
    {
        while(SoftSerial.available())               // reading data into char array
        {
            buffer[count++] = SoftSerial.read();      // writing data into array
            if(count == 64)break;
        }
        Serial.write(buffer, count);     // if no data transmission ends, write buffer to hardware serial port
        clearBufferArray();             // call clearBufferArray function to clear the stored data from the array
        count = 0;                      // set counter of while loop to zero
    }
    if (Serial.available())             // if data is available on hardware serial port ==> data is coming from PC or notebook
    SoftSerial.write(Serial.read());    // write it to the SoftSerial shield
}
void clearBufferArray()                 // function to clear buffer array
{
    // clear all index of array with command NULL
    for (int i=0; i<count; i++)
    {
        buffer[i]=NULL;
    }                  
}
```

Open the Serial Monitor, the card information can be displayed as shown below:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-125KHz_RFID_Reader/master/img/Read_Data_.jpg)

### Wiegand Mode (Jumper Set to the Right two Pins)

You would need to select the jumper to "W" to enter this mode.
The [Wiegand demo code](https://raw.githubusercontent.com/SeeedDocument/Grove-125KHz_RFID_Reader/master/res/RFID_Wiegand_INT.zip) for Seeeduino is designed to read Wiegand data in interrupt mode.

In Wiegand Mode, output data is formatted with 26bits including 24bits card info and 2 bits parity.

<table border="1">
<tr style="font-weight:bold">
<td width="20">
bit
</td>
<td width="20">
0
</td>
<td width="20">
1
</td>
<td width="20">
2
</td>
<td width="20">
3
</td>
<td width="20">
4
</td>
<td width="20">
5
</td>
<td width="20">
6
</td>
<td width="20">
7
</td>
<td width="20">
8
</td>
<td width="20">
9
</td>
<td width="20">
10
</td>
<td width="20">
11
</td>
<td width="20">
12
</td>
<td width="20">
13
</td>
<td width="20">
14
</td>
<td width="20">
15
</td>
<td width="20">
16
</td>
<td width="20">
17
</td>
<td width="20">
18
</td>
<td width="20">
19
</td>
<td width="20">
20
</td>
<td width="20">
21
</td>
<td width="20">
22
</td>
<td width="20">
23
</td>
<td width="20">
24
</td>
<td width="20">
25
</td>
</tr>
<tr style="font-size: 90%" align="center">
<td>
-
</td>
<td>
PE
</td>
<td colspan="24" rowspan="1">
D
</td>
<td>
P0
</td>
</tr>
<tr style="font-size: 90%" align="center">
<td>
-
</td>
<td>
-
</td>
<td colspan="12" rowspan="1">
E
</td>
<td colspan="12" rowspan="1">
0
</td>
<td>
-
</td>
</tr>
<tr style="font-size: 90%" align="center">
<td>
-
</td>
<td>
-
</td>
<td colspan="8" rowspan="1">
D2[7..0]
</td>
<td colspan="8" rowspan="1">
D1[7..0]
</td>
<td colspan="8" rowspan="1">
D0[7..0]
</td>
<td>
-
</td>
</tr>
</table>
-   PE is even bit, PO is odd bit;
-   E is the data bit which was involved in even, O is the data bit which was involved in odd;
-   DX\[7..0\] is the data bit which correspond to Mifare@ Standard & Light card read only ID;

### How to convert the output to Card Number

Take ID: 0009776930 for example:

-   Card Number ID: 0009776930 ------- Decimalism [Start Bit(00) + Card Number(8 numbers)]
-   Output: 0700952F229F ------------- Hex [[Start Bit(07h) + Card Number(8 numbers) + Checksum]
-   The calculator for decimal and hex numbers is available online.

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_125KHz_RFID_Reader -->
