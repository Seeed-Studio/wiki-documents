---
name: Xadow - Buzzer
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-Buzzer-p-1599.html
oldwikiname: Xadow - Buzzer
prodimagename: Xadow_buzzer.jpg
surveyurl: https://www.research.net/r/xadow_buzzer
sku: 107040000
---
![](https://github.com/SeeedDocument/Xadow_Buzzer/raw/master/img/Xadow_buzzer.jpg)

This is a Xadow module which can emit a tone. To drive it, you need to give control to two pins simultaneously: this is different from Grove - Buzzer which uses one pin to control. It is petite but loud! It can be used for making beeps, tones and alerts.

Xadow is a small but perfectly formed Arduino(TM) compatible board series containing several modules. It's a kit extremely suitable for space-sensitive projects such as wearable devices & arts designs, which have higher request on size, weight and flexible cascade connection. You can find more modules here.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Buzzer-p-1599.html)

## Specification
---
- Work Voltage: 3.3V
- FundamentalFrequency: 2700Hz
- Sound Pressure Level: >75dB
- Dimensions: 25.43mm x 20.35mm

## Demonstration
---
There is an easy demo to show how to drive buzzer sound. If you have successfully used it, then you can apply it to your great projects, such as detecting the battery status: the buzzer will emit a sound when Xadow Main Board is in low battery.

![](https://github.com/SeeedDocument/Xadow_Buzzer/raw/master/img/Buzzer_Usage.jpg)

```
void setup()
{
    DDRB |= 0x06;
}

void loop()
{
    //turn on the buzzer
    PORTB |= 0x06;
    delay(1);
    //turn off the buzzer
    PORTB &= ~(0x06);
    delay(1);
}
```

## Resource
---
- [Xadow Buzzer Eagle File](https://github.com/SeeedDocument/Xadow_Buzzer/raw/master/res/Xadow_Buzzer_eagle_file.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>