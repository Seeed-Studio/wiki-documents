---
name: Light Sensor and LED Bar
category: Tutorial
oldwikiname:  Light Sensor and LED Bar
prodimagename:
surveyurl: https://www.research.net/r/Light_Sensor_and_LED_Bar
---
This demo will show you how to use light sensor. In order to indicate the intensity of light, we need a Led Bar.

**Hardware Required：**

*   Arduino

*   Light Sensor

*   LED Bar

**Circuit：**

The output of Light Sensor is analog signal, so we connect it to A0 of Seeeduino.

LED Bar needs 10 IOs, about the connection, please refer to [LED Bar](http://arduino.cc/en/Tutorial/BarGraph).

![](https://github.com/SeeedDocument/Light_Sensor_and_LED_Bar/raw/master/img/Sidekick_33_1.png)

**Code:**

Open Arduino IDE, click File -&gt; Sketchbook -&gt; light_sensor.

We can use analogRead() to read the value of light sensor, this value will indicate the intensity of light. When the light stronger, the value larger.

To make the data more smoothly, we need some simple filtering. We read the value 32 times, and take the average value.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>