---
name: FM Receiver
category: Tutorial
---

##Hardware Installation

###Part lists

* [Seeeduino Lotus v1.0](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)
* [Grove - LCD RGB Backlight](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html)
* [Grove - I2C FM Receiver](https://www.seeedstudio.com/Grove-I2C-FM-Receiver-p-1953.html)
* [Grove - Button](https://www.seeedstudio.com/Grove-Button-p-766.html)
* [Grove - Rotary Angle Sensor](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)

###Hardware Linking

Hardware linking is very easy, Grove - LCD RGB Backlight and Grove - I2C FM Receiver communicate over I2C, Grove - Button is a digital input, Grove - Rotary Angle Sensor is an analog input. So it can be linked as shown below.

![](https://github.com/SeeedDocument/Seeeduino_Lotus/blob/master/img/Seeeduino_Lotus_usage.jpg?raw=true)

##Software Part

* To download the demo code in github, click [here](https://github.com/Seeed-Studio/Seeeduino_lotus_Usage).
* Open the I2C_FM_RGB_LCD example sketch, compile and upload it to your board.
* Press the button to start seeking FM and twist the Rotary Angle Sensor to adjust volume.
## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>