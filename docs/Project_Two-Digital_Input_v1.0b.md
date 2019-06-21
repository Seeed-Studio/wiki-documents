---
name: Project Two - Digital Input v1.0b
category: Tutorial
oldwikiname:  Project Two - Digital Input v1.0b
prodimagename:
surveyurl: https://www.research.net/r/Project_Two-Digital_Input_v1b
---

The purpose of this project is to demonstrate two forms of digital input – using the button Grove and the tilt switch Grove . Pressing the button will light the LED, and activating the tilt-switch will light the LED.

**Wiring it:**

1.  Connect the LED Module to the D1/D2 Digital I/O jack, like it was in Projects 1.

2.  Arduino Pin D1 powers the LED on the Grove's SIG connector, and Arduino Pin D2 connect to the LED Grove's NC connector.

3.  Connect the Tilt Switch Grove to the D5/D6 Digital I/O jack.

4.  The Tilt Switch Grove's SIG connector sends a high or low signal to the Arduino's D5 digital input.

5.  Connect the Button Module to the D7/D8 input jack (on the second row.)

6.  The Button Grove uses the SIG connector to send a signal to the Arduino's D7 digital input.
![](https://github.com/SeeedDocument/Project_Two-Digital_Input_v1.0b/raw/master/img/Digitalv1.0b.jpg)

_**Now upload the following Arduino sketch:**_
```
// Project Two - Digital Inputs
//

void setup()
{
  pinMode(1, OUTPUT);
  pinMode(5, INPUT);
  pinMode(7, INPUT);
}

void loop()
{

if (digitalRead(5)==HIGH)
  {
    digitalWrite(1, HIGH);
    delay(100);
    digitalWrite(1, LOW);
  }

  if (digitalRead(7)==HIGH)
  {
    digitalWrite(1, HIGH);
    delay(200);
    digitalWrite(1, LOW);
  }

}
```

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>