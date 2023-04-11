---
description: LinkIt ONE Tutorial - Marquee
title: LinkIt ONE Tutorial - Marquee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt_ONE_Tutorial-Marquee
last_update:
  date: 1/13/2023
  author: shuxu hu
---
**What We’re Doing**

The experiments in the previous sections used only one LED but to show dazzling light effects lets use three LEDs. Make connections as shown in the Fig 4.2 and upload the code given below and observe the changes that happens.

**Things you need**

*   LinkIt One x 1
*   Break board x 1

*   Resistors 330Ω,1kΩ x 3

*   5mm LED x 3

*   Transistor(2N3904) x 3

**Schematic**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/LinkItONE_Kit_4_1.jpg)

**Connection**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/LinkItONE_Kit_4_2.jpg)

**Code**

Please click on the button below to download the code for the kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

You can unzip the file to the **Examples** folder of your Arduino IDE.

To access the demo code open:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L4_Control_LEDs_
```
const int pinLed1    = 2;                       // pin of led1
const int pinLed2    = 3;                       // pin of led2
const int pinLed3    = 4;                       // pin of led3

void setup()
{
    pinMode(pinLed1, OUTPUT);                   // set all pin OUTPUT
    pinMode(pinLed2, OUTPUT);
    pinMode(pinLed3, OUTPUT);
}


void loop()
{
    digitalWrite(pinLed4, LOW);                 // led4 off
    digitalWrite(pinLed1, HIGH);                // led1 on
    delay(100);

    digitalWrite(pinLed1, LOW);                 // led1 off
    digitalWrite(pinLed2, HIGH);                // led2 on

    delay(100);

    digitalWrite(pinLed2, LOW);                 // led2 off
    digitalWrite(pinLed3, HIGH);                // led3 on

    delay(100);

    digitalWrite(pinLed3, LOW);                 // led3 off
    digitalWrite(pinLed4, HIGH);                // led4 on

    delay(100);
}
```

**Troubleshooting**

*   Check the polarity of the LED's.

*   Ensure that you have connected the LED' to the correct port pins.

**Making it better**

Upload the following code with the same breadboard connection in order to obtain different flashing effects.

To access the demo code open:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L4_Control_LEDs_Speed_

**More ideas**

Modify the existing code such that the frequency of LED blinking increases.

**Reference**

<!-- *   [The Basics](/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/LinkIt_ONE_Tutorial-Hello_World)

*   [Push Button](/LinkIt_ONE_Tutorial-Push_Button)

*   [Marquee](/LinkIt_ONE_Tutorial-Marquee)

*   [Colorful World](/LinkIt_ONE_Tutorial-Colorful_World)

*   [Analog Interface](/LinkIt_ONE_Tutorial-Analog_Interface)

*   [Mini Servo](/LinkIt-ONE-Tutorial---Mini-Servo)

*   [Light Sensor](/LinkIt_ONE_Tutorial-Light-Sensor)

*   [SMS Control the LED](/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [Get Temperature with Webpage](/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) -->

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
