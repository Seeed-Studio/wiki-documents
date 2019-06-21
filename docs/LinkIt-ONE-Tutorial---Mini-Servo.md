---
name: LinkIt ONE Tutorial - Mini Servo
category: Tutorial
oldwikiname:   LinkIt ONE Tutorial - Mini Servo
prodimagename:
surveyurl: https://www.research.net/r/LinkIt-ONE-Tutorial-Mini-Servo
---
**What We're Doing**

Servo motor (servo) is commonly used in small robots and other machines to control angular position. It is wrapped by a small gear box, and positioned by the timing control pulses. In this section we control the angular position of the mini servo with the help of potentiometer.

**Things you need**

*   LinkIt One x 1

*   Break board x 1
*   Slide Potentiometer 10kΩ x 1

*   Servo x 1

**Schematic**

![](https://github.com/SeeedDocument/LinkIt-ONE-Tutorial---Mini-Servo/raw/master/img/LinkItONE_Kit_7_1.jpg)

**Connection**

![](https://github.com/SeeedDocument/LinkIt-ONE-Tutorial---Mini-Servo/raw/master/img/LinkItONE_Kit_7_2.jpg)

**Code**

Please click on the button below to download the code for the kit:

[![](https://github.com/SeeedDocument/LinkIt-ONE-Tutorial---Mini-Servo/raw/master/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

You can unzip the file to the **Examples** folder of your Arduino IDE.

To access the demo code open:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L7_Servo_
```
#include <Servo.h>

Servo myservo;              // create servo object to control a servo
int potpin = A0;             // analog pin used to connect the potentiometer
int val;                    // variable to read the value from the analog pin

void setup()
{
    myservo.attach(9);                  // attaches the servo on pin 9 to the servo object
}

void loop() {
    val = analogRead(potpin);          // reads the value of the potentiometer (value between 0 and 1023)
    val = map(val, 0, 1023, 0, 179);   // scale it to use it with the servo (value between 0 and 180)
    myservo.write(val);                // sets the servo position according to the scaled value
    delay(15);                         // waits for the servo to get there
}
```

**Troubleshooting**

*   There are three pins in servos and they are color coded respective to their functionality yellow-analog port red – positive, dark brown – ground. So please make connections according to its functionality.

*   Ensure that 5v power supply is connected to the board.

**Making it better**

If the mini steering worked, we can adjust the speed of rotation by using a potentiometer. Upload the following code to produce different functionality.

To access the demo code open:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L7_Servo_Speed_

**More ideas**

How do you control two servo motors simultaneously so that you can make a robot?

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