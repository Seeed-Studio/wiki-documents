---
name: Project Three – Analog Input v1.0b
category: Tutorial
oldwikiname:  Project Three – Analog Input v1.0b
prodimagename:
surveyurl: https://www.research.net/r/Project_Three-Analog_Input_v1b
---

The purpose of this sketch is to demonstrate a form of analog input using the potentiometer Grove. We will use this to set the delay for our blinking LEDs from project one.

Connect the LED module to the D1/D2 Digital I/O jack, like it was in Projects 1 and 2.
Arduino Pin D1 powers the LED Grove's SIG connector, and Arduino Pin D2 connect to the LED Grove's NC connector.

Connect the Potentiometer module to the Analog A0/A1 input jack.

The Potentiometer module produces an analog voltage on its SIG output, which is connected to Arduino A0 analog input on the A0/A1 input jack.

![](https://github.com/SeeedDocument/Project_Three-Analog_Input_v1b/raw/master/img/Analog_Input_v1.0b.jpg)

_**Now upload the following Arduino sketch:**_

```
// Project Three - Analog Input
//

void setup()
{
  pinMode(1, OUTPUT);
}

void loop()
{
  digitalWrite(1, HIGH);
  delay(analogRead(0));
  digitalWrite(1, LOW);
  delay(analogRead(0));
}
```

The maximum delay value is 1023, as this is the upper limit of the value returned by the analogRead() function. You could use mathematical functions to increase or scale down the range of the delay.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>