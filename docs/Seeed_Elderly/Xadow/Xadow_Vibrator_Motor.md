---
description: Xadow - Vibrator Motor
title: Xadow - Vibrator Motor
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Vibrator_Motor
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/img/Vibration_Motor_01.jpg)

This small vibrator motor can vibrate like your phone. When using it, you only need to power for the module and then send "Vibration" command. In fact, the "Vibration" command is setting control pins to high level, then it will work. I like this module because it can create a short-term shock to prompt me whether one operation was successful, such as shaking my arm to switch my iPhone songs, which sounds terrible, but it does not like the buzzer.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Vibration-Motor-p-1517.html)


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

![](https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/img/XadowVibration.jpg)

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


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/res/Xadow_Vibrator.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Resources
---
[Xadow Vibrator Motor Eagle File](https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/res/Xadow_Vibrator.zip)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
