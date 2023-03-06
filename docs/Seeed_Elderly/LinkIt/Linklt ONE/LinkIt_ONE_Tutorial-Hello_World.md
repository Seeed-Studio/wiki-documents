---
description: LinkIt ONE Tutorial - Hello World
title: LinkIt ONE Tutorial - Hello World
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt_ONE_Tutorial-Hello_World
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**What We're Doing**

In the previous section we've got an insight about how to control an LED with electronic components but lets do some gimmicks with software for automatic control of the LED. You just have to upload the code that is available in this section. The code written initially switches ON the LED, after a delay of 3sec it switches it OFF. Let's start using the LinkIt board.

**Things you need**

*   LinkIt One x 1

*   Break board x 1

*   Resistors 330Ω,1kΩ x 1

*   5mm LED x 1

*   Transistor（2N3904) x 1

**Schematic**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_1_1.jpg)

**Connection**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_1_2.png)

**Code**

Please click on the button below to download the code for the kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

You can unzip the file to the **Examples** folder of your Arduino IDE.

To access the demo code open:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L2_Control_LED_
```
const int pinLED = 3;                      // LED connect to D13

void setup()
{
    pinMode(pinLED, OUTPUT);                // set direction of D13-OUTPUT
}

void loop()
{
    digitalWrite(pinLED, HIGH);             // LED on
    delay(3000);
    digitalWrite(pinLED, LOW);              // LED off
    delay(100);
}
```

**Troubleshooting**

*   Trouble in Uploading the code？

    *   In this case, the possible problem should be due to wrong selection of the transfer port. You should probably modify it into "Tools&gt; Serial port&gt;".

*   Unable to Stop the process？

    *   This occurs when your code is running in an infinite loop so in order to terminate the process  disconnect the power supply from the board.

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_2_3.jpg)

**Making it better**

In the previous section we used a capacitor to grow the brightness of the LED slowly and fade its luminosity slowly. Lets do the same thing without the capacitor but by purely changing the code.

To open the demo code：

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L2_Breath_LED_

**More ideas**

How do you change the frequency of the LED by modifying the code?

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
