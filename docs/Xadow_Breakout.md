---
name: Xadow - Breakout
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-Breakout-p-1519.html
oldwikiname: Xadow - Breakout
prodimagename: Xadow_ble_01.jpg
surveyurl: https://www.research.net/r/xadow_breakout
sku: 103040007
---
![](https://github.com/SeeedDocument/Xadow_Breakout/raw/master/img/Xadow_Breakout_01.jpg)

Perhaps you want to connect various modules to Xadow. For example, an IR sensor which can detect whether someone is near by. You can connect the sensor to this Breakout Module.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Breakout-p-1519.html)

## Specification
---
- A adapter
- Compatible with all Grove Module in hardware
- Dimensions: 25.43mm x 20.35mm

## Demonstration
---
Below is the Demo to control a buzzer. You need to connect Grove - Buzzer to Xadow Breakout with a Grove cable and connect Xadow Breakout to Xadow Main Board with a FFC cable.

![](https://github.com/SeeedDocument/Xadow_Breakout/raw/master/img/XadowBreakoutUsage.jpg)

Xadow breakout not only can control some modules which are IIC communication or Serial communication, but also can control other modules because the two Grove connectors can be used as Digital port or Analog port. In other words, it can control all Grove modules.

The demo code like this:
```
Void setup()
{
    DDRD |=0x04;
}
void loop()
{
    PORTD |=0x04;
    delay(500);
    PORTD &=~(0x04);
    delay(500);
}
```
Now you can hear the buzzer "Bi Bi Bi". You can replace it with Grove - LED and see the LED on/off.

## Resources
---
- [Xadow Breakout Eagle File](https://github.com/SeeedDocument/Xadow_Breakout/raw/master/res/Xadow%20-%20Breakout_eagle%20file.rar)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>