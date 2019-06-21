---
name: Xadow - Vibrator Motor
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-Vibration-Motor-p-1517.html
oldwikiname: Xadow - Vibrator Motor
prodimagename: Vibration_Motor_01.jpg
surveyurl: https://www.research.net/r/Xadow_Vibrator_Motor
sku:  105040000
---

![](https://github.com/SeeedDocument/Xadow_Vibrator_Motor/raw/master/img/Vibration_Motor_01.jpg)

This small vibrator motor can vibrate like your phone. When using it, you only need to power for the module and then send "Vibration" command. In fact, the "Vibration" command is setting control pins to high level, then it will work. I like this module because it can create a short-term shock to prompt me whether one operation was successful, such as shaking my arm to switch my iPhone songs, which sounds terrible, but it does not like the buzzer.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Vibration-Motor-p-1517.html)


##  Specification
---
*   working voltage: 3.3V

*   Rated Speed: 9000rpm

*   controlled by two digital signals

*   Dimensions: 25.43mm x 20.35mm

##  Demonstration
---
Here is a Demo Code showing how to turn on the vibration motor.

**Hardware Installation: **

![](https://github.com/SeeedDocument/Xadow_Vibrator_Motor/raw/master/img/XadowVibration.jpg)

Note: when connect Xadow Vibrator Motor to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).
Demo code like this:
```
<pre>
void setup()
{
    DDRF |= 0x01;
    DDRB |= 0x04;
}

void loop()
{
    //turn on the vibration motor
    PORTF |= 0x01;
    PORTB |= 0x04;
    delay(1000);
    //turn off the vibration motor
    PORTF &amp;= ~(0x01);
    PORTB |= 0x04;
    delay(1000);
    //turn on the vibration motor
    PORTF |= 0x01;
    PORTB |= 0x04;
    delay(1000);
    //turn off the vibration motor
    PORTF |= 0x01;
    PORTB &amp;= ~(0x04);
    delay(1000);
    //turn on the vibration motor
    PORTF |= 0x01;
    PORTB |= 0x04;
    delay(1000);
    //turn off the vibration motor
    PORTF &amp;= ~(0x01);
    PORTB &amp;= ~(0x04);
    delay(1000);
}</pre>
```
##  Resources
---
[Xadow Vibrator Motor Eagle File](https://github.com/SeeedDocument/Xadow_Vibrator_Motor/blob/master/res/Xadow_Vibrator.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>