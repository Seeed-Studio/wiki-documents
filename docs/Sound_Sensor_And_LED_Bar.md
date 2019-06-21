---
name: Sound Sensor And LED Bar
category: Tutorial
oldwikiname:  Sound Sensor And LED Bar
prodimagename:
surveyurl: https://www.research.net/r/Relay_Control_LED
---
This demo will show you how to use Sound Sensor, to indicate the intensity of sound, we need a LED Bar.

**Hardware Required:：**

*   Arduino

*   Sound Sensor

*   LED BAR

**Circuit：**

The output of sound sensor is analog signal, we connect it to A0 of Seeeduino.

LED Bar needs 10 IOs, about the connection, please refer to [LED Bar](http://arduino.cc/en/Tutorial/BarGraph).

![](https://github.com/SeeedDocument/Sound_Sensor_And_LED_Bar/raw/master/img/Sidekick_35_1.png)

**Code:**

Open Arduino IDE, click File -&gt; Sketchbook -&gt; sound_sensor.

We can use analogRead() to read the value of light sensor, this value will indicate the intensity of light. When the light stronger, the value larger.

To make the data more smoothly, we need some simple filtering. We read the value 32 times, and take the average value.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>