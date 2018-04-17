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


<p style="text-align:center"><img src="https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/Temp_humi_pro.jpg"   border=0 /></p>


 This is a powerful sister version of our Grove - Temperature and Humidity Sensor. It has more complete and accurate performance than the basic version. The detecting range of this sensor is 5% RH - 99% RH, and -40°C - 80°C. And its accuracy reaches up to 2% RH and 0.5°C. A professional choice for applications that have relatively strict requirements.

<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro%EF%BC%88AM2302%EF%BC%89-p-838.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>

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
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)


Platforms Supported
------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's hardware or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



Getting Started
---------------

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.




### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Temperature and Humidity Sensor Pro |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/gs_1.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)|


- **Step 2.** Connect Grove - Temperature and Humidity Sensor Pro to port **D2** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/connect_arduino.jpg)



!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove - Temperature and Humidity Sensor Pro to Seeeduino as below.


| Seeeduino       | Temperature and Humidity Sensor Pro |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| A0            | Yellow                  |





#### Software

- **Step 1.** Download the  [ Seeed DHT library](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)  from Github.

- **Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open “ DHTtester” example via the path: **File --> Examples --> Grove_Humidity_Temperature_Sensor-master --> DHTtester**. Through this demo, we can read the temperature and relative humidity information of the environment.

![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/path.png)

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

!!!Note
    This Grove - Temperature and Humidity Sensor Pro and our another product [Grove-Temperature and Humidity Sensor](http://wiki.seeedstudio.com/Grove_Temperature_and_Humidity_Sensor/) are sharing this library. No matter which product you are using, make sure that you have made the definition line of the sensor of your board into effect and commented out the definition lines of other specs. For example, the sensor we used on Grove - Temperature and Humidity Sensor Pro is DHT 22. So the definition part of the sensor spec should be:

```
//#define DHTTYPE DHT11   // DHT 11
#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)or
```



- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the temperature.


The result should be like:

![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/result_arduino.png)



### Play With Raspberry Pi

#### Hardware

First, You need to prepare the below stuffs:

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Temperature and Humidity Sensor Pro |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Grovepi%2B.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/gs_1.jpg)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)|

- **Step 2.** Plug the GrovePi_Plus into Raspberry.

- **Step 3.** Connect Grove - Temperature Sensor ranger to **D4** port of GrovePi_Plus.

- **Step 4.** Connect the Raspberry to PC via USB cable.

![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/connect_pi.jpg)



#### Software


- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.

- **Step 2.** Follow [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) to update the newest firmware of GrovePi.


!!!Tip
    In this wiki we use the path **~/GrovePi/** instead of **/home/pi/Desktop/GrovePi**, you need to make sure Step 2 and Step 3 use the same path.


!!!Note
    We firmly suggest you to update the firmware, or for some sensors you may get errors.


- **Step 3.** Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

-	**Step 4.** Configure the parameter

```python

cd ~/GrovePi/Software/Python
sudo nano grove_dht_pro.py

```

Change the default parameter `[temp,humidity] = grovepi.dht(sensor,blue)` into `[temp,humidity] = grovepi.dht(sensor,white)`. Then the code should be like:


```python
import grovepi
import math
# Connect the Grove Temperature & Humidity Sensor Pro to digital port D4
# This example uses the blue colored sensor.
# SIG,NC,VCC,GND
sensor = 4  # The Sensor goes on digital port 4.

# temp_humidity_sensor_type
# Grove Base Kit comes with the blue sensor.
blue = 0    # The Blue colored sensor.
white = 1   # The White colored sensor.

while True:
    try:
        # This example uses the blue colored sensor.
        # The first parameter is the port, the second parameter is the type of sensor.
        [temp,humidity] = grovepi.dht(sensor,white)  
        if math.isnan(temp) == False and math.isnan(humidity) == False:
            print("temp = %.02f C humidity =%.02f%%"%(temp, humidity))

    except IOError:
        print ("Error")

```

Then tap ++ctrl+x++ to quit nano. Tap ++y++ to save the change.


-	**Step 5.** Excute below commands to get the value.

```

sudo python grove_dht_pro.py
```

The result should be like:

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python grove_dht_pro.py
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%

```



## Resources

- **[Zip]** [Temp Humi Pro in eagle format](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/Temp_Humi_Pro_eagle_files.zip)
- **[PDF]** [Temp Humi Pro PCB in PDF format](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/TemperatureHumidiy%20Pro%20PCB.pdf)
- **[PDF]** [Temp Humi Pro Schematic in PDF format](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/TemperatureHumidiy%20Pro%20Schematic.pdf)
- **[Library]** [Humidity Temperature Sensor pro library](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/Humidity_Temperature_Sensor_pro.zip)
- **[Datasheet]** [AM2302-CN.pdf](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/AM2302-CN.pdf)
- **[Datasheet]**  [AM2302-EN.pdf](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/AM2302-EN.pdf)

## Tech Support
Please do not hesitate to contact [techsupport@seeed.cc](techsupport@seeed.cc) if you have any technical issue. Or submit the issue into our [forum](http://seeedstudio.com/forum/).
