---
name: 125Khz RFID module - UART
category: MakerPro
bzurl: https://www.seeedstudio.com/125Khz-RFID-module-UART-p-171.html
oldwikiname:  125Khz RFID module - UART
prodimagename:  P1240147.jpg
surveyurl: https://www.research.net/r/125Khz_RFID_module-UART
sku:      113990014
---
![http://www.seeedstudio.com/depot/images/product/P1240147.jpg](https://github.com/SeeedDocument/125Khz_RFID_module-UART/raw/master/img/125khz20uart.jpg)

RDM 125KHz card mini-module is designed for reading code from 125KHz card compatible read-only tags and read/write card . It can be applied in office/home security, personal identification, access control, anti-forgery, interactive toy and production control systems etc.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/125Khz-RFID-module-UART-p-171.html)

**Note:** Module will notify whenever 125khz tag approaches, tag serial number will be send via TX pin. Easy way for a RFID module on MCU projects or PC connnection via UartSB.

##   Features

*   Support external antenna
*   Maximum effective distance up to 50mm
*   Less than 100ms decoding time
*   UART TTL interface
*   Support EM4100 compatible read only or read/write tags
*   Built-in external bi-color LED and buzzer driver
*   Small outline design

##   Specification

May include key specification and other specifications.

###   Key Specification

<table>
<tr>
<td width="300px"> Frequency
</td>
<td width="500px"> 125KHz
</td></tr>
<tr>
<td> Baud Rate
</td>
<td> 9600 (TTL Electricity Level RS232 format)
</td></tr>
<tr>
<td> interface
</td>
<td> Weigang26 Or TTL Electricity Level RS232 format
</td></tr>
<tr>
<td> Power supply
</td>
<td> DC 5V（±5%）
</td></tr>
<tr>
<td> Current
</td>
<td> &lt;50Ma
</td></tr>
<tr>
<td> Operating range
</td>
<td> &gt;50mm(Depend on Card/Tag shape, manufacturer)
</td></tr>
<tr>
<td> Expand I/O port
</td>
<td> N/A
</td></tr>
<tr>
<td> Indication light
</td>
<td> N/A
</td></tr>
<tr>
<td> Working temperature
</td>
<td> -10℃~ +70℃
</td></tr>
<tr>
<td> Storage temperature
</td>
<td> -20℃~ +80℃
</td></tr>
<tr>
<td> Max. humidity
</td>
<td> Relative humidity 0 ~ 95%
</td></tr>
<tr>
<td> Size
</td>
<td> 38.5mm ×19mm×9mm
</td></tr></table>

##   Pin definition and Rating

Look the image below(Mechanic Dimensions), and check the pin definition list here:

<pre> Pin Definition :
 P1:
   PIN1    TX
   PIN2    RX
   PIN3
   PIN4    GND
   PIN5    +5V(DC)
 P2:
   PIN1    ANT1
   PIN2    ANT2
 P3:
   PIN1    LED
   PIN2    +5V(DC)
   PIN3    GND
</pre>

##   Mechanic Dimensions

![](https://github.com/SeeedDocument/125Khz_RFID_module-UART/raw/master/img/RFID-wiegand-dimen.JPG)

##   Usage

###   TTL Interface RS232 Data output format

1.  9600bps,N,8,1
2.  CHECKSUM: card 10byte DATA entire do XOR operation
<table>
<tr>
<td width="100px"> 02
</td>
<td width="300px"> 10ASCII Data Characters
</td>
<td width="100px"> Chechsum
</td>
<td width="100px"> 03
</td></tr></table>

Example: card number: 62E3086CED

*   Output data:36H、32H、45H、33H、30H、38H、36H、43H、45H、44H
*   CHECKSUM: (62H) XOR (E3H) XOR (08H) XOR (6CH) XOR (EDH)=08H

####   Time sequence chart

![](https://github.com/SeeedDocument/125Khz_RFID_module-UART/raw/master/img/RFID-wiegand-time-seq.JPG)

###   Exampel

![](https://github.com/SeeedDocument/125Khz_RFID_module-UART/raw/master/img/125k_RFID_uasge.JPG)

Output date(HEX): 02 | 30 31 30 30 30 37 33 34 45 30 | 44 32 | 03
-&gt;Change to Decimal
CardNumber Decimal: 48 49 48 48 48 55 51 52 69 48
CheckSum Decimal: 68 50
-&gt;Refer to ASCII table,get Ascill value
CardNumber Ascill: 0 1 0 0 0 7 3 4 E 0
CheckSum Ascill : D 2
(01H) xor (00H) xor (07H) xor (34H) xor (E0H) = D2H

###   Programming

Connect RX/TX to Arduino UART port , Uart demo code :
```
void setup()
{
  Serial.begin(9600);
}
void loop()
{
  if(Serial.available())
  {
    while(Serial.available())
    Serial.write(Serial.read());
  }
}
```

##   Resources

*   Datasheet: [RDM630-Spec.pdf](https://github.com/SeeedDocument/125Khz_RFID_module-UART/raw/master/res/RDM630-Spec.pdf)

*   [How to connect Arduino and RFID](http://www.instructables.com/id/Arduino-and-RFID-from-seeedstudio/)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>