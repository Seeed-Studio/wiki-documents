---
name: LinkIt ONE Tutorial - Push Button
category: Tutorial
oldwikiname:  LinkIt ONE Tutorial - Push Button
prodimagename:
surveyurl: https://www.research.net/r/LinkIt_ONE_Tutorial-Push_Button
---
**What We’re Doing**

We now got an insight of how a software and hardware works from the previous chapter. In this chapter we will learn how to integrate both software and hardware for the control of the LED. Make breadboard connections as shown in the Fig 3.2 and upload the code. Now this circuit operates as a two way switch when you press the left side push button switch the LED glows and when the right side push button is pressed the LED is switched OFF.

**Things you need**

*   LinkIt One x 1

*   Break board x 1

*   Resistors 330Ω,1kΩ x 1

*   Resistor 10kΩ x 2

*   5mm LED x 1

*   Transistor(2N3904) x 1

*   Push Button switches x 2

**Schematic**

![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-Push_Button/raw/master/img/LinkItONE_Kit_3_1.jpg)

**Connection**

![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-Push_Button/raw/master/img/LinkItONE_Kit_3_2.jpg)

**Code**

Please click on the button below to download the code for the kit:

[![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-Push_Button/raw/master/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

You can unzip the file to the **Examples** folder of your Arduino IDE.

To access the demo code open:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L3_Control_LED_Button_
```
const int pinLED = 3;                      // LED connect to D13

const int btnOn  = 5;                       // button on
const int btnOff = 6;                       // button off

void setup()
{
    pinMode(pinLED, OUTPUT);                // set direction of D13-OUTPUT
    pinMode(btnOff, INPUT);                 // set direction of D2-INPUT
    pinMode(btnOn, INPUT);
}

void loop()
{
    if(0 == digitalRead(btnOn))            // button on pressed
    {
        digitalWrite(pinLED, HIGH);
    }

    if(0 == digitalRead(btnOff))
    {
        digitalWrite(pinLED, LOW);
    }
}
```

**Making it better**

Keeping the same hardware connection upload the following code. The luminosity brightens when the left push button switch is pressed and fades when the right push button switch is pressed.

To access the demo code open:：

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L3_Brightness_

**More ideas**

How will you modify the code such that the blinking frequency of the LED changes?

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