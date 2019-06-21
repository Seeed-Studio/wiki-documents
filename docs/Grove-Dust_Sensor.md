---
name: Grove - Dust Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html
oldwikiname: Grove - Dust Sensor
prodimagename: Dust_sensor.JPG
surveyurl: https://www.research.net/r/grove-dust-sensor
sku: 101020012
tags: plat_duino
---

![](https://github.com/SeeedDocument/Grove_Dust_Sensor/raw/master/img/Dust1.JPG)

This Dust Sensor gives a good indication of the air quality in an environment by measuring the dust concentration. The Particulate Matter level (PM level) in the air is measured by counting the Low Pulse Occupancy time (LPO time) in given time unit. LPO time is proportional to PM concentration. This sensor can provide reliable data for air purifier systems; it is responsive to PM of diameter 1μm.


<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

!!!warning
    - This sensor uses counting method to measure dust concentration, not weighing method, and the unit is pcs/L or pcs/0.01cf.
    - Please pay attention to the warnings listed here:
        - Please keep it upright.
        - 3 min preheat time is required while using for the first time.
        - Arbitrary operation may cause unexpected damage.
        - Following widgets (red rectangle marked) is used only for the factory setting. Please **DO NOT** change the default configuration.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p>

## Version

| Product Version              | Changes                                   | Released Date |
|------------------------------|-------------------------------------------|---------------|
|Grove-Dust Sensor V1.0        | Initial                                   | Nov 2012      |     


## Features

- Stable and sensitive detection of not only cigarette smoke but also house dust which are indoor asthma triggers.
- Air is self-aspirated with the current of air generation mechanism with a built-in heater.
- Easy maintenance. High sensitivity lasts long term.
- Dual output for the particle size over 1 micron and 2.5 micron (approx).
- More compact and lighter, and easy installation.

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Specifications


|Item|	Norm|	Unit |
|----|-----|-------|
|VCC |	4.75~5.75|	V    |
|Standby Current Supply|	90|	mA|
|Detectable range of concentration|	0~28,000 / 0 ~ 8000	|	pcs/liter / pcs/0.01cf|
|Operating Temperature Range|	0~45|	°C|
|Output Method|	Negative Logic, Digital output, High: over 4.0V(Rev.2), Low: under 0.7V|-|
|Detecting the particle diameter|	>1 |μm|
|Dimensions|	59(W) × 45(H) × 22(D) |mm|
|Humidity Range|	95% rh or less|-|


!!!note
    In the latest version, output Hi Voltage is changed from 4.0V to 4.5V.


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Application Ideas

- Air Purifier
- Air Quality Monitor
- Air Conditioner
- Ventilator

## Getting Started

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


### Play With Arduino

**Hardware**

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove-Dust Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Dust_Sensor/raw/master/img/Dust_sensor%20-_s.JPG)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html)|

- **Step 2.** Connect Grove-Dust Sensor to **D8** port of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove_Dust_Sensor/raw/master/img/seeeduino_dust.jpg)

!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove-Dust Sensor to Seeeduino as below.

| Seeeduino |  Grove-Loudness Sensor |
|-----------|-----------------|
| 5V        | Red             |
| GND       | Black           |
| NC        | White           |
| D8        | Yellow          | 

**Software**

- **Step 1.** Please copy below code to Arduio IDE and upload to arduino. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).


```
int pin = 8;
unsigned long duration;
unsigned long starttime;
unsigned long sampletime_ms = 30000;//sampe 30s ;
unsigned long lowpulseoccupancy = 0;
float ratio = 0;
float concentration = 0;

void setup() 
{
    Serial.begin(9600);
    pinMode(pin,INPUT);
    starttime = millis();//get the current time;
}

void loop() 
{
    duration = pulseIn(pin, LOW);
    lowpulseoccupancy = lowpulseoccupancy+duration;

    if ((millis()-starttime) > sampletime_ms)//if the sampel time == 30s
    {
        ratio = lowpulseoccupancy/(sampletime_ms*10.0);  // Integer percentage 0=>100
        concentration = 1.1*pow(ratio,3)-3.8*pow(ratio,2)+520*ratio+0.62; // using spec sheet curve
        Serial.print(lowpulseoccupancy);
        Serial.print(",");
        Serial.print(ratio);
        Serial.print(",");
        Serial.println(concentration);
        lowpulseoccupancy = 0;
        starttime = millis();
    }
}

```

- **Step 2.** In this program, the Seeeduino samples the total duration of "logic low" in 30s, and this duration illustrates the dust density of environment. Open Serial Monitor, we can get air quality's value detected by sensor from PC's serial port.

![](https://github.com/SeeedDocument/Grove_Dust_Sensor/raw/master/img/Serial.png)

**Terminology：**

- **"Lowpulseoccupancy"** represents the Low Pulse Occupancy Time(LPO Time) detected in given 30s. Its unit is microseconds.

- **"Ratio"** reflects on which level LPO Time takes up the whole sample time.

- **"Concentration"** is a figure that has a physical meaning. It is calculated from the characteristic graph below by using the LPO time.
![](https://raw.githubusercontent.com/SeeedDocument/Grove_Dust_Sensor/master/image/600px-Characteristics.jpg)

- Here is a graph of the dust concentration measured in office :

![](https://raw.githubusercontent.com/SeeedDocument/Grove_Dust_Sensor/master/image/600px-Dust_sensor_4.jpg)

We can see the concentration of dust is very low in the evening, but it is higher in the afternoon. A threshold can be set when the concentration is above a value. Also, if you want to set the sensor more sensitive you can add a fan on the sensor, and add a 10kΩ resistor between the Pin5 and Ground. More information please visit the [blog of A.J](https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/).



### Play With Raspberry Pi

**Hardware**

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove-Dust Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Dust_Sensor/raw/master/img/Dust_sensor%20-_s.JPG)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html)|


- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-Dust Sensor to **D2** port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.

![](https://github.com/SeeedDocument/Grove_Dust_Sensor/raw/master/img/rpi_dust.jpg)

**Software**

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- **Step 2.** Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Step 3.** Excute below commands to monitor the dust.


```python
cd ~/GrovePi/Software/Python
python grove_dust_sensor.py
```

Here is the grove_dust_sensor.py code.

```python
import time
import grovepi
import atexit

atexit.register(grovepi.dust_sensor_dis)

print("Reading from the dust sensor")
grovepi.dust_sensor_en()
while True:
    try:
		[new_val,lowpulseoccupancy] = grovepi.dustSensorRead()
		if new_val:
			print(lowpulseoccupancy)
		time.sleep(5) 

    except IOError:
        print ("Error")

```

- **Step 4.** We will see the dust status as below.

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_dust_sensor.py 
Reading from the dust sensor
14029
2621
1725
1978
2533
1619
```

## Related Projects

If you want to make some awesome projects by Grove - Dust Sensor, here is a project for reference.

**Air Quality Box**

![](https://raw.githubusercontent.com/SeeedDocument/Grove_Dust_Sensor/master/image/600px-Overview0.png)

This section an IoT demo made by Seeeduino and [Grove](http://www.seeedstudio.com/wiki/Grove_System).

More attention is being paid to the environmental air quality nowadays because the tiny particles in the air around can badly endanger people’s health. We always get the information of environment from our government department. But it’s the average value of the whole city/section. It can not reflect the environment around you accurately.

[![](https://raw.githubusercontent.com/SeeedDocument/Grove_Dust_Sensor/master/image/200px-Wiki_makeitnow_logo.png)](http://www.instructables.com/id/Air-Quality-Test-Box/?ALLSTEPS)


## FAQs

**Q1: How can Grove - Dust Sensor (with 5V logic) be used with Seeeduino Stalker (with 3.3V logic)?**

A1: The output signal from Dust Sensor needs to be scaled down to 3.3V logic to work with Seeeduino Stalker (or any such board). The output from Dust Sensor is 0.7V for Logic Low and greater than 4.0V for Logic High. You could use a voltage divider to scale the output to be compatible with 3.3V logic or use a TTL logic level translator.

## Resources

- **[Datasheet]** [Grove-Dust_sensor datasheet](https://github.com/SeeedDocument/Grove_Dust_Sensor/raw/master/resource/Grove_-_Dust_sensor.pdf)
- **[Datasheet]** [De-construction of the Shinyei PPD42NS dust sensor Made by Tracy Allen](https://github.com/SeeedDocument/Grove_Dust_Sensor/raw/master/resource/ShinyeiPPD42NS_Deconstruction_TracyAllen.pdf)
- **[Demo]**[Building a low-cost networked PM2.5 monitor](https://indiaairquality.com/2014/12/14/building-pickle-jr-the-low-cost-networked-pm2-5-monitor-part-2/) -- Made by A.J.
- **[Demo]** [Measuring the Pickle Jr. – a modified PPD42 with an attached fan.](https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/) -- Made by A.J.
- **[Demo]** [Testing the Shinyei PPD42NS](http://irq5.io/2013/07/24/testing-the-shinyei-ppd42ns/) -- Made by darell tan
- **[Demo]** [Air Quality Monitoring](http://www.howmuchsnow.com/arduino/airquality/grovedust/) -- Made by Chris Nafis

## Projects

**Air Quality Box**: Monitor air quality around you

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ye-xiaobo/air-quality-box-d7658a/embed' width='350'></iframe>

**Smart Crops: Implementing IoT in Conventional Agriculture!**: Our mission with nature is to preserve it, designing and implementing technologies and monitoring methods with the help of IoT via Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

**LoRa IoTea**: An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>