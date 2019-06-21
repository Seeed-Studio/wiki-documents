# Project Three – Analog Input
---
name: Project Three – Analog Input
category: Tutorial
oldwikiname:  Project Two – Digital Input
prodimagename:
surveyurl: https://www.research.net/r/Project_Two-Digital_Input
---

The purpose of this sketch is to demonstrate a form of analog input using the potentiometer . We will use this to set the delay for our blinking LEDs from project one.

**Wiring it:**

1.  Connect the LED to the D1/D2 Digital I/O jack, like it was in Projects 1 and 2.

2.  Arduino Pin D1 powers the Red LED on the Grove's D1 connector, and Arduino Pin D2 powers the Green LED on the Grove's D2 connector.

3.  Connect the Potentiometer to the Analog A0/A1 input jack.

4.  The Potentiometer produces an analog voltage on its D1 output, which is connected to Arduino A0 analog input on the A0/A1 input jack.
![](https://github.com/SeeedDocument/Project_Three-Analog_Input/raw/master/img/Conn-three.jpg)

_**Now upload the following Arduino sketch:**_
```
// Project Three - Analog Input
//

void setup()
{
    pinMode(1, OUTPUT);
    pinMode(2, OUTPUT);
}

void loop()
{
    digitalWrite(1, HIGH);
    digitalWrite(2, LOW);
    delay(analogRead(0));
    digitalWrite(1, LOW);
    digitalWrite(2, HIGH);
    delay(analogRead(0));
}
```
The maximum delay value is 1023, as this is the upper limit of the value returned by the analogRead() function. You could use mathematical functions to increase or scale down the range of the delay.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>