---
title: Grove - Temperature and Humidity Sensor Pro
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html
oldwikiname: Grove - Temperature and Humidity Sensor Pro
prodimagename:
surveyurl: https://www.surveymonkey.com/r/Grove_Temperature_and_Humidity_Sensor_Pro
sku: 101020019
tags: io_3v3, io_5v, plat_duino, plat_pi

---
![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/Temp_humi_pro.jpg)

 This is a powerful sister version of our Grove - Temperature and Humidity Sensor. It has more complete and accurate performance than the basic version. The detecting range of this sensor is 5% RH - 99% RH, and -40°C - 80°C. And its accuracy reaches up to 2% RH and 0.5°C. A professional choice for applications that have relatively strict requirements.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)

Specification
-------------

|Item|		Min	|Norm	|Max	|Unit|
|---|---|---|---|---|
|VCC	|	3.3|	-|	6|	V|
|Measuring Current Supply	|	1|	-|	1.5|	mA|
|Standby Current Supply	|	40|	-|	50|	uA|
|Measuring range **(Humidity)**	|5%|	-|	99%|	RH|
|Measuring range **(Temperature)**|	-40|	-	|80|	°C|
|Accuracy	**(Humidity)**|-	|	-|	±2%|	RH|
|Accuracy **(Temperature)**	|-|-|	±0.5|	°C|
|Resolution	**(Humidity)**	|-|	-|	0.1%	|RH|
|Resolution **(Temperature)**	| -|-|	0.1|	°C|
|Repeatability	**(Humidity)**|	-|	-|	±0.3%|	RH|
|Repeatability **(Temperature)**|	-	|-	|±0.2|	°C|
|Long-term Stability|		-|	-	|±0.5%	|RH/year|
|Signal Collecting Period	|-|	2|	-|	S|
|Respond Time	1/e(63%)|	6|	-	|20|	S|

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)


Platforms Supported
------------------


Getting Started
---------------
Here are the getting started user guides.

- [Preface - Getting Started](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/blob/master/res/Preface.pdf)
- [Introduction to Grove](http://wiki.seeed.cc/Grove_System/)

We provide 2 demos, include both arduino and raspberry pi platforms.

**With Arduino**

We will show you how this Grove - temperature and humidity Sensor pro works through a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino V4 | Grove - DHT Sensor pro | Base Shield |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|


- Connect the Temperature and Humidity Sensor Pro to A0 of [Grove - Base Shield](http://wiki.seeed.cc/Base_Shield_V2/). Then plug Grove - Base Shield into Arduino and connect Arduino to PC using a USB cable.
![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/Temperature%26Humidity_Sensor_Pro_demo_Seeeduino_600_s.jpg)

- Please follow [how to install an arduino library](http://wiki.seeed.cc/How_to_install_Arduino_Library/) procedures to install library.

- Download [Seeed DHT library](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) for arduino boards with 16MHz XTAL;  Another library - [DHTlib](https://github.com/RobTillaart/Arduino/tree/master/libraries/DHTlib) is also available instead of Seeed DHT library. This library supports both 16MHz and 8MHz Arduino (eg. Seeeduino Stalker)

- Restart the Arduino IDE. Open “ DHTtester” example via the path: **File --> Examples --> Grove_Humidity_Temperature_Sensor-master --> DHTtester**. Through this demo, we can read the temperature and relative humidity information of the environment.

![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/library%20example.jpg)

!!!Note
    This Grove - Temperature and Humidity Sensor Pro and our another product [Grove-Temperature and Humidity Sensor](http://wiki.seeed.cc/Grove_Temperature_and_Humidity_Sensor/) are sharing this library. No matter which product you are using, make sure that you have made the definition line of the sensor of your board into effect and commented out the definition lines of other specs. For example, the sensor we used on Grove - Temperature and Humidity Sensor Pro is DHT 22. So the definition part of the sensor spec should be:

```
//#define DHTTYPE DHT11   // DHT 11
#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)or
```
- Upload it into your Arduino board.
- Here is the result.


![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/DHT_Test_Score.jpg)

**With Raspberry Pi**

First, You need to prepare the below stuffs:

|  Raspberry pi | Grove - DHT Sensor pro | Grovepi+ |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/pi.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/gs_1.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/grovepi%2B.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)|[Get ONE Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|


- Follow [instruction](http://wiki.seeed.cc/GrovePi_Plus/) to configure the development environment.

- Plug grove DHT pro to the socket D4 of grovepi+.
![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/Grovalpi%20dht%20pro)
- Navigate to the demos' directory:

```
  cd yourpath/GrovePi/Software/Python/
```

- To see the code

```
    nano grove_dht_pro.py   # "Ctrl+x" to exit #
```


```
import grovepi

# Connect the Grove Temperature & Humidity Sensor Pro to digital port D4
# SIG,NC,VCC,GND
sensor = 4

while True:
    try:
        [temp,humidity] = grovepi.dht(sensor,1)
        print "temp =", temp, " humidity =", humidity

    except IOError:
        print "Error"
```


- Run the demo.

```
      sudo python grove_dht_pro.py
```
- Here is the Result.

![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/Grovepi_dht_pro_00.png)

## Resources

- [Temp Humi Pro in eagle format](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/Temp_Humi_Pro_eagle_files.zip)
- [Temp Humi Pro PCB in PDF format](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/TemperatureHumidiy%20Pro%20PCB.pdf)
- [Temp Humi Pro Schematic in PDF format](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/TemperatureHumidiy%20Pro%20Schematic.pdf)
- [Humidity Temperature Sensor pro library](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/Humidity_Temperature_Sensor_pro.zip)
- [AM2302-CN.pdf](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/AM2302-CN.pdf)
- [AM2302-EN.pdf](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/AM2302-EN.pdf)
