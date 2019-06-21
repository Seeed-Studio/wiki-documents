---
name: Project Four – Noise Maker
category: Tutorial
oldwikiname:  Project Four – Noise Maker
prodimagename:
surveyurl: https://www.research.net/r/Project_Four-Noise_Maker
---

The purpose of this sketch is to use the piezo buzzer to make a beeping noise.
The potentiometer is used again as an analog input to vary the delay time.  As you adjust the potentiometer, the speed of the beeps will change.
The picture is incorrect - you need to Connect the Potentiometer to the Analog A0/A1 input jack, like it was in Project 3.
The Potentiometer produces an analog voltage on its D1 output, which is connected to Arduino A0 analog input on the A0/A1 input jack.
Connect the Buzzer to the D6/D7 Digital I/O Jack.  The sketch uses Arduino Pin D6 to send power to the Buzzer on its D1 input.

![](https://github.com/SeeedDocument/Project_Four-Noise_Maker/raw/master/img/Conn-four.jpg)

_**Now upload the following Arduino sketch:**_

```
// Project Four - Noise maker
//

void setup()
{
  pinMode(6, OUTPUT);
}

void loop()
{
  digitalWrite(6, HIGH);
  delay(analogRead(0));
  digitalWrite(6, LOW);
  delay(analogRead(0));
}
```
As you can see, the piezo can be used as another form of digital output. When using this Grove unit, don't forget to set the output pin connected to the Grove back to LOW when you want the sound to turn off.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>