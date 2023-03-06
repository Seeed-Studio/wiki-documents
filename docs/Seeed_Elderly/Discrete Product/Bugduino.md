---
description:  Bugduino
title: Bugduino
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Bugduino
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Bugduino/img/Bugduino-V2r0-Front.jpg)

Bugduino is an Arduino compatible module.

Designed for working with [Buglabs BUG platform](http://www.buglabs.net/).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bugduino-V2.0-p-863.html)

##   Features
---
*   [Arduino](https://arduino.cc) compatible, based on Seeeduino
*   BUG connector
*   USB to Uart: FT232RL
*   ATmega328 microcontroller
*   Input voltage - 7-12V
*   14 Digital I/O Pins (6 PWM outputs)
*   8 Analog Inputs
*   32k Flash Memory
*   16Mhz Clock Speed

**

##   Schematic

1.  [File:BUGduinoSchematicPDF.pdf](https://files.seeedstudio.com/wiki/Bugduino/res/BUGduinoSchematicPDF.pdf)


##   Specifications

<table cellpadding="1" cellspacing="1">
<tr>
<th scope="row"> Microprocessor
</th>
<td> Atmega328
</td></tr>
<tr>
<th scope="row"> PCB size
</th>
<td> 60.2cm x 60.2cm
</td></tr>
<tr>
<th scope="row"> Indicators
</th>
<td> POWER,Green LED. LEDs for Txd, Rxd, Rst
</td></tr>
<tr>
<th scope="row"> Power supply
</th>
<td> 5V DC
</td></tr>
<tr>
<th scope="row"> Interface
</th>
<td> Mini-B USB, 2.54mm pitch pin header
</td></tr>
<tr>
<th scope="row"> Connectivity
</th>
<td> USB
</td></tr>
<tr>
<th scope="row"> Communication Protocol
</th>
<td> UART, Bit Bang I/O, SPI, I2C
</td></tr>
<tr>
<th scope="row"> ROHS
</th>
<td> YES
</td></tr></table>


##   Mechanic Dimensions

60.2mm * 60.2mm * 20.5mm

##   Usage

###   Hardware Installation

1.  Toggle Serial Switch to USB side;

2.  Plug USB cable;

3.  Select the Corresponding COM port in Arduino IDE;

4.  Select "Arduino Duemilanove or Nano w/ ATmega328" in Arduino Board menu;

5.  click the upload bottom in Arduino IDE;

###   Programming
```
#include <Wire.h>

//SLOTS: Vendor:  0x02
//SLOTS: Product  0x10
//SLOTS: Revision 0x20
//A0-->GND, A1-->GND, A2-->GND
#define AT24C02B_Addr  0b1010000

unsigned char bugduino_signature[]=
{
    0x00,0x00,0x02,0x00,0x10,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x0b,0x16,0x00,0x00,0x00,0x0f
};
unsigned char address_map[]=
{
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0x7f
};

void setup()
{
    Wire.begin();
    Serial.begin(38400);
}
void loop()
{
  /*
   */
    unsigned char i = 0;
    unsigned char eeprom = 0;
    for(i=0;i<20;i++)
    {
        Wire.beginTransmission(AT24C02B_Addr); //start
        Wire.send(address_map[i]);
        Wire.endTransmission();    //stop
        Wire.requestFrom(AT24C02B_Addr, 1);    // request
        delay(1);
        while(Wire.available())    // slave may send less than requested
        {
            unsigned char c = Wire.receive(); // receive a byte as character
            if(c != bugduino_signature[i])
            {
                eeprom =1;
            }
        }
    }
    delay(100);

    if(eeprom)
    {
        Serial.println("Write Signature");
        for(i=0;i<20;i++)
        {
            Wire.beginTransmission(AT24C02B_Addr); //start
            Wire.send(address_map[i]);
            Wire.send(bugduino_signature[i]);
            Wire.endTransmission();    //stop
            delay(10);
        }
    }
    else
    {
        Serial.println("Signature OK");
    }
    for(;;);
}
```

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
