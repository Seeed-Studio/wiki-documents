---
name: LinkIt ONE Tutorial - Light Sensor
category: Tutorial
oldwikiname:  LinkIt ONE Tutorial - Light Sensor
prodimagename:
surveyurl: https://www.research.net/r/LinkIt_ONE_Tutorial-Light-Sensor
---

**What We're Doing**

It's time to know about new sensors that could make our projects even more interesting. A photoresistor (light dependent resistor or photocell) is a light sensor which varies its resistance value based on the intensity of the ambient light. A buzzer is a electro-acoustic device used to generate standard tone when it is connected to the power supply. Lets use both these components in our experiments.

**Things you need**

*   LinkIt One x 1

*   Break board x 1

*   Resistors 10kΩ,1kΩ,330Ω x 1

*   Buzzer x 1

*   Photoresistor x 1

*   Transistor（2N3904）x 1

**Schematic**

![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-Light-Sensor/raw/master/img/LinkItONE_Kit_8_1.jpg)

**Connection**

![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-Light-Sensor/raw/master/img/LinkItONE_Kit_8_2.jpg)

**Code**

Please click on the button below to download the code for the kit:

[![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-Light-Sensor/raw/master/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

You can unzip the file to the **Examples** folder of your Arduino IDE.

To access the demo code open:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L8_Light_Control_Buzzer_
```
const int pinBuz   = 3;                        // pin define of LED
const int pinLight = A0;                        // pin define of Light Sensor

void setup()
{
    pinMode(pinBuz, OUTPUT);
    pinMode(pinLight, INPUT);
}

void loop()
{
    int value = analogRead(pinLight);
    value = map(value, 0, 1023, 255, 0);
    analogWrite(pinBuz, value);
    delay(100);
}
```
**Troubleshooting**

*   Photosensitive does not work ?

    *   Photoresistor lead's wire spacing is not standard. It is easy to short the leads. Carefully check.

*   No Sound？

    *   Buzzer leads are very short. Carefully check if they are properly inserted in the breadboard.

**Making it better**

Lets control the tone of the buzzer further using the photoresistor. Different tones can be generated if you vary the light intensity that falls on the photo resistor. Upload the following code and observe the difference.

To access the demo code open:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L8_Buzzer_Music_

**More ideas**

We can make more interesting applications using photocell. Try making a light-sensitive Christmas gift.

**Reference**

*   [The Basics](/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/LinkIt_ONE_Tutorial-Hello_World)

*   [Push Button](/LinkIt_ONE_Tutorial-Push_Button)

*   [Marquee](/LinkIt_ONE_Tutorial-Marquee)

*   [Colorful World](/LinkIt_ONE_Tutorial-Colorful_World)

*   [Analog Interface](/LinkIt_ONE_Tutorial-Analog_Interface)

*   [Mini Servo](/LinkIt-ONE-Tutorial---Mini-Servo)

*   [Light Sensor](/LinkIt_ONE_Tutorial-Light-Sensor)

*   [SMS Control the LED](/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [Get Temperature with Webpage](/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>