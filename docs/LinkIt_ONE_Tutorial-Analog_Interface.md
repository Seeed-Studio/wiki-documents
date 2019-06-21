---
name: LinkIt ONE Tutorial - Analog Interface
category: Tutorial
oldwikiname:   LinkIt ONE Tutorial - Analog Interface
prodimagename:
surveyurl: https://www.research.net/r/LinkIt_ONE_Tutorial-Analog_Interface
---

**What We're Doing**

In the previous sections, we learned how to control the circuit's input and output using digital interface. In this section, we will learn how to vary the output using an analog device called a potentiometer (also known as a variable resistor). A potentiometer is used to vary the voltage in the range of 0 ~ 5V. The MPU reads the voltage value in the range of 0-1023.This can be used to control the brightness of the LED (PWM simulation output interface). If the potentiometer is turned clockwise, the LED brightens gradually. If it is rotated anticlockwise, the luminosity fades.

**Things you need**

*   LinkIt One x 1

*   Break board x 1

*   Resistors 330Ω,10kΩ,1kΩ x 1

*   5mm LED x 1

*   Slide Potentiometer 10kΩ x 1

*   Transistor（2N3904） x 1

**Schematic**

![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-Analog_Interface/raw/master/img/LinkItONE_Kit_6_1.jpg)

**Connection**

![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-Analog_Interface/raw/master/img/LinkItONE_Kit_6_2.jpg)

**Code**

Please click on the button below to download the code for the kit:

[![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-Analog_Interface/raw/master/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

You can unzip the file to the **Examples** folder of your Arduino IDE.

To access the demo code open:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L6_Analog_Ctrl_LED_
```
const int led = 3;
const int pot = A0;

void setup()
{
    // nothing to initialize
}

void loop()
{
    int val = analogRead(pot);              // get value from potentiometer
    val = map(val, 0, 1023, 0, 255);        // make the value to 0~255
    analogWrite(led, val);                  // set the pwm of led
    delay(10);
}
```
**Troubleshooting**

*   Pin Interfacing problem？

    *   If you have connected the input to digital pin instead of analog pin the circuit might not work properly.

*   Not Working？

    *   Potentiometer has three pins in it . Check whether you have connected the middle pin to the analog interface or else the circuit might not work properly.

**Making it better**

To control flickering frequency of the LED with a potentiometer upload the following code
To Open the demo code:

To open the demo code：

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L6_Flashing_LED_

**More ideas**

What else can do with the Potentiometer of the return value?

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