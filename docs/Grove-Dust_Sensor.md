---
title: Grove - Dust Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html
oldwikiname: Grove - Dust Sensor
prodimagename: Dust_sensor.JPG
surveyurl: https://www.research.net/r/grove-dust-sensor
sku: 101020012
tags: plat_duino
---
---
![](https://raw.githubusercontent.com/SeeedDocument/Grove_Dust_Sensor/master/image/Dust_sensor.JPG)

This Dust Sensor gives a good indication of the air quality in an environment by measuring the dust concentration. The Particulate Matter level (PM level) in the air is measured by counting the Low Pulse Occupancy time (LPO time) in given time unit. LPO time is proportional to PM concentration. This sensor can provide reliable data for air purifier systems; it is responsive to PM of diameter 1μm.

!!!note
    - This sensor uses counting method to measure dust concentration, not weighing method, and the unit is pcs/L or pcs/0.01cf.
    - Please pay attention to the warnings listed [here](#jump).

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/item_detail.html?p_id=1050)

Features
--------
- Stable and sensitive detection of not only cigarette smoke but also house dust which are indoor asthma triggers.
- Air is self-aspirated with the current of air generation mechanism with a built-in heater.
- Easy maintenance. High sensitivity lasts long term.
- Dual output for the particle size over 1 micron and 2.5 micron (approx).
- More compact and lighter, and easy installation.
!!!note
In the latest version, output Hi Voltage is changed from 4.0V to 4.5V.

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

Specification
-------------

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

Platforms Supported
--------------------


Application Ideas
------------------
- Air Purifier
- Air Quality Monitor
- Air Conditioner
- Ventilator

Getting Started
---------------
### <span id="jump">Cautions</span>
- Please keep it upright.
- 3 min preheat time is required while using for the first time.
- Arbitrary operation may cause unexpected damage.
- Following widgets (red rectangle marked) is used only for the factory setting. Please **DO NOT** change the default configuration.

![](https://raw.githubusercontent.com/SeeedDocument/Grove_Dust_Sensor/master/image/Grove_-_Dust_Sensor_cautions.jpg)

### Connection
Here is a demo to show how to obtain PM concentration data from this Grove - Dust Sensor.

Plug the dust sensor into digital port **D8** on the Grove - [Base Shield](http://www.seeedstudio.com/wiki/Grove_-_Base_Shield). It can only be D8 because the operation of this sensor involves sampling. This function only can be achieved by D8, the input capturing pin of ATmega328P, on Arduino/Seeeduino.

|Arduino UNO	| Dust Sensor Pin| Cable Color|
|--|--|--|
|5V| Pin 3|	Red wire|
|GND	| Pin 1|Black wire|
|D8| Pin 4|	Yellow wire|

Grove cable is included in Grove Dust Sensor package. We also can use Dupont Line to connect Base Shield as below picture.
![](https://github.com/SeeedDocument/Grove_Dust_Sensor/raw/master/image/connection.jpg)

Also, you can connect Grove - Dust sensor to Arduino UNO without Base Shield.

### Software

Copy and paste the demo code below to a new Arduino sketch.

```c
/*
Grove - Dust Sensor Demo v1.0
 Interface to Shinyei Model PPD42NS Particle Sensor
 Program by Christopher Nafis
 Written April 2012

 http://www.seeedstudio.com/depot/grove-dust-sensor-p-1050.html
 http://www.sca-shinyei.com/pdf/PPD42NS.pdf

 JST Pin 1 (Black Wire)  =&gt; //Arduino GND
 JST Pin 3 (Red wire)    =&gt; //Arduino 5VDC
 JST Pin 4 (Yellow wire) =&gt; //Arduino Digital Pin 8
 */

int pin = 8;
unsigned long duration;
unsigned long starttime;
unsigned long sampletime_ms = 2000;//sampe 30s&nbsp;;
unsigned long lowpulseoccupancy = 0;
float ratio = 0;
float concentration = 0;

void setup() {
  Serial.begin(9600);
  pinMode(8,INPUT);
  starttime = millis();//get the current time;
}

void loop() {
  duration = pulseIn(pin, LOW);
  lowpulseoccupancy = lowpulseoccupancy+duration;

  if ((millis()-starttime) >= sampletime_ms)//if the sampel time = = 30s
  {
    ratio = lowpulseoccupancy/(sampletime_ms*10.0);  // Integer percentage 0=&gt;100
    concentration = 1.1*pow(ratio,3)-3.8*pow(ratio,2)+520*ratio+0.62; // using spec sheet curve
    Serial.print("concentration = ");
    Serial.print(concentration);
    Serial.println(" pcs/0.01cf");
    Serial.println("\n");
    lowpulseoccupancy = 0;
    starttime = millis();
  }
}
```

In this program, the Seeeduino samples the total duration of "logic low" in 30s, and this duration illustrates the dust density of environment. Open Serial Monitor, we can get air quality's value detected by sensor from PC's serial port.



![](https://raw.githubusercontent.com/SeeedDocument/Grove_Dust_Sensor/master/image/Dust_sensor_1.png)

**"lowpulseoccupancy"** represents the Low Pulse Occupancy Time(LPO Time) detected in given 30s. Its unit is microseconds.

**"ratio"** reflects on which level LPO Time takes up the whole sample time.

**"concentration"** is a figure that has a physical meaning. It is calculated from the characteristic graph below by using the LPO time.
![](https://raw.githubusercontent.com/SeeedDocument/Grove_Dust_Sensor/master/image/600px-Characteristics.jpg)

Here is a graph of the dust concentration measured in office :

![](https://raw.githubusercontent.com/SeeedDocument/Grove_Dust_Sensor/master/image/600px-Dust_sensor_4.jpg)

We can see the concentration of dust is very low in the evening, but it is higher in the afternoon. A threshold can be set when the concentration is above a value. Also, if you want to set the sensor more sensitive you can add a fan on the sensor, and add a 10kΩ resistor between the Pin5 and Ground. More information please visit the [blog of A.J](https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/).

Related Projects
---
If you want to make some awesome projects by Grove - Dust Sensor, here is a project for reference.

### Air Quality Box
![](https://raw.githubusercontent.com/SeeedDocument/Grove_Dust_Sensor/master/image/600px-Overview0.png)

This section an IoT demo made by Seeeduino and [Grove](http://www.seeedstudio.com/wiki/Grove_System).

More attention is being paid to the environmental air quality nowadays because the tiny particles in the air around can badly endanger people’s health. We always get the information of environment from our government department. But it’s the average value of the whole city/section. It can not reflect the environment around you accurately.

[![](https://raw.githubusercontent.com/SeeedDocument/Grove_Dust_Sensor/master/image/200px-Wiki_makeitnow_logo.png)](http://www.instructables.com/id/Air-Quality-Test-Box/?ALLSTEPS)

Resources
---
- **[Datasheet]** [Grove-Dust_sensor datasheet](https://github.com/SeeedDocument/Grove_Dust_Sensor/raw/master/resource/Grove_-_Dust_sensor.pdf)
- **[Datasheet]** [De-construction of the Shinyei PPD42NS dust sensor Made by Tracy Allen](https://github.com/SeeedDocument/Grove_Dust_Sensor/raw/master/resource/ShinyeiPPD42NS_Deconstruction_TracyAllen.pdf)
- **[Demo]**[Building a low-cost networked PM2.5 monitor](https://indiaairquality.com/2014/12/14/building-pickle-jr-the-low-cost-networked-pm2-5-monitor-part-2/) -- Made by A.J.
- **[Demo]** [Measuring the Pickle Jr. – a modified PPD42 with an attached fan.](https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/) -- Made by A.J.
- **[Demo]** [Testing the Shinyei PPD42NS](http://irq5.io/2013/07/24/testing-the-shinyei-ppd42ns/) -- Made by darell tan
- **[Demo]** [Air Quality Monitoring](http://www.howmuchsnow.com/arduino/airquality/grovedust/) -- Made by Chris Nafis
