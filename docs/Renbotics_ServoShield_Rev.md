---
name: Renbotics ServoShield Rev
category: MakerPro
bzurl: https://www.seeedstudio.com/Renbotics-ServoShield-V2.0-p-1299.html
oldwikiname:  Renbotics ServoShield Rev
prodimagename:
surveyurl: https://www.research.net/r/Renbotics_ServoShield_Rev
sku:    105030003
---

![](http://bz.seeedstudio.com/depot/images/product/ServoShieldKitLarge.jpg)

The Renbotics ServoShield is an Arduino-compatible shield that uses two 4017 decade counters to drive up to 16 servos using only 4 pins (digital pins 6 to 9) and as little as one 8bit timer (Timer 2) in standard mode or two 16/8bit timers (Timer 1 and Timer 2 for Duemilanove or Timer 3 for Mega) in high accuracy mode. It also includes a 196 point breadboard style prototyping area.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Renbotics-ServoShield-V2.0-p-1299.html)

##   Features

*   16 Servo Channels

*   Convenient screw terminal for servo power supply

*   196 Point breadboard style prototyping area

*   Compatible with Arduino Duemilanove and Arduino Mega

*   Easy to use API

##   Application Ideas

*   Robotics

*   Animatronics

*   Mechatronic Art


##   Usage

###   Hardware Installation

Accembled View:

![](http://bz.seeedstudio.com/depot/images/product/StackedLarge.jpg)

###   Programming

**Sample 1: Simple servo sweeper**
```
#include <ServoShield.h>
ServoShield servos; //Create a ServoShield object
void setup()
{
    for (int servo = 0; servo < 16; servo++)//Initialize all 16 servos
    {
        servos.setbounds(servo, 1000, 2000); //Set the minimum and maximum pulse duration
        servos.setposition(servo, 1500); //Set the initial position of the servo
    }
    servos.start(); //Start the servo shield
}
void loop()
{
    for(int pos = 1000; pos < 2000; pos++) //Move the servos from 0 degrees to 180 degrees
    { //in steps of 1 degree
        for (int i = 0; i < 16; i++) //for all 16 servos
        servos.setposition(i, pos); //Tell servo to go to position in variable 'pos'
        delay(1);
    }
    for(int pos = 2000; pos >= 1000; pos--)//Move the servos from 180 degrees to 0 degrees
    {
        for (int i = 0; i < 16; i++) //all 16 servos
        servos.setposition(i, pos); //Tell servo to go to position in variable 'pos'
        delay(1);
    }
}
```


##   Bill of Materials (BOM) /parts list

*   2 x 4017 Decade Counter DIP16

*   2 x 10nf Capacitors

*   2 x 6 pin Female Shield Stacking Headers

*   2 x 8 pin Female Shield Stacking Headers

*   1 x 2 pin Screw Terminal

*   3 x 16 pin Male Breakaway Headers


##   Version Tracker

<table>
<tr>
<th> Revision
</th>
<th> Descriptions
</th>
<th> Release
</th></tr>
<tr>
<td width="300px"> v1.1
</td>
<td width="500px"> Initial public release
</td>
<td width="200px"> Aug 23, 2009
</td></tr></table>



##   Resources

*   [Manual Rev 1.5](http://www.seeedstudio.com/depot/datasheet/RenboticsServoShield1.5.pdf)

*   [Arduino Library Rev 1.3 (Updated 07-09-2009)](http://www.seeedstudio.com/depot/images/product/ServoShield.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>