---
name: LinkIt ONE Tutorial - Colorful World
category: Tutorial
oldwikiname:  LinkIt ONE Tutorial - Colorful World
prodimagename:
surveyurl: https://www.research.net/r/LinkIt_ONE_Tutorial-Colorful_World
---
**What We’re Doing**

We now know how to control the LED's lets combine it with basic idea about combining colors. The R-Red G-Green B-Blue are the primary colors these colors when mixed in different proportion gives different colors. An RGB LED consists of four pins the long lead is the positive terminal and the other three lead are for controlling RGB colors. Make connections as shown in the Fig5.2 and upload the code.

**Things you need**

*   LinkIt One x 1

*   Break board x 1

*   Resistors 330Ω,10kΩ,1kΩ x 3

*   8mm RGB LED x 1
*   Transistor（2N3904） x 3
*   Button x 3

**Schematic**

![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-Colorful_World/raw/master/img//LinkItONE_Kit_5_1.jpg)

**Connection**

![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-Colorful_World/raw/master/img//LinkItONE_Kit_5_2.jpg)

**Code**

Please click on the button below to download the code for the kit:

[![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-Colorful_World/raw/master/img//Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

You can unzip the file to the **Examples** folder of your Arduino IDE.

To access the demo code open:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L5_Color_Pannel_
```
const int ledR = 2;
const int ledB = 3;
const int ledG = 4;

const int buttonR = 5;
const int buttonG = 6;
const int buttonB = 7;

void setup()
{
    pinMode(ledR, OUTPUT);                          // set all led pin OUTPUT
    pinMode(ledG, OUTPUT);
    pinMode(ledB, OUTPUT);

    pinMode(buttonR, INPUT);                        // set all button pin INPUT
    pinMode(buttonG, INPUT);
    pinMode(buttonB, INPUT);
}

void loop()
{
    int stateR = 1-digitalRead(buttonR);            // get state of button
    int stateG = 1-digitalRead(buttonG);
    int stateB = 1-digitalRead(buttonB);

    digitalWrite(ledR, stateR);                     // set led
    digitalWrite(ledG, stateG);
    digitalWrite(ledB, stateB);

    delay(10);
}
```
**Troubleshooting**

*   Wrong color display

    *   Since there are four pins in the LED, there exists probability of error in the connection make sure that all the control pins are connected to the correct leads

*   Reddish appearance？

    *   In RGB LED, red color has high intensity than the other two colors for a given voltage. In order to make the colour overall tone in harmony, try to reduce the intensity of RED LED with a larger resistance value.

**Making it better**

Do you want to get more colors? There are two buttons to adjust the RGB values of successive rises. Then we can find more colors. Try to build the circuit linking the two analog output interface (RGB values were increased higher or lower). Code has been defined to get it. (PWM analog output, you get a return value of the output of the analog 0-1023 to use.)

To open the demo code：

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L5_Colourful_RGB_

**More ideas**

How expand the code to turn down the RGB values?

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