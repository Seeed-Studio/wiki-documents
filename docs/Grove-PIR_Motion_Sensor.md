---
title: Grove - PIR Motion Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html
oldwikiname: Grove - PIR Motion Sensor
prodimagename: Breakout_for_LinkIt_Smart_7688_v2.0_product_view_700.jpg
surveyurl: https://www.surveymonkey.com/r/grove-pir-motion-sensor
sku: 101020020
tags: io_3v3, io_5v, plat_duino, plat_pi
---

---
![](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/images/Grove_-_PIR_Motion_Sensor.jpg)

This sensor allows you to sense motion, usually human movement in its range. Simply connect it to Grove - Base shield and program it, when anyone moves in its detecting range, the sensor will output HIGH on its SIG pin.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)

## Features
---
- Grove compatible interface
- Adjustable detecting distance
- Adjustable holding time

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

## Specification
----
|Parameter	|Value/Range
|---|---|
|Operating Voltage|	3V–5V
|Operating Current(VCC = 3V)|	100uA
|Operating Current(VCC = 5V)|	150uA
|Measuring Range	|0.1 - 6m
|Default detecting distance|	3m
|Holding Time	|1 - 25s
|Working Wave Length	|7 - 14um
|Detecting Angle|	120 degrees

## Platforms Supported
-----

## Getting Started
---
### With Arduino

The following sketch demonstrates a simple application of sensing motion. When someone moves in its detecting range, it will output High through its SIG pin and the LED will light. Otherwise, it will output LOW. Then you can use it to detect the motion of people.

#### Connections

Here we will show you how this Grove - PIR MOTION SENSOR works via a simple demo. First of all, we need to prepare the below stuffs:

| Seeeduino V4 | Grove - PIR MOTION SENSOR | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|


- Connect Grove - PIR Motion Sensor to **D2** port of base shield.
- Connect Grove - LED to **D4** port of base shield.
- Plug the base Shield into Arduino.
- Connect Arduino to PC by using a USB cable.

![](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/images/PIR_Motion_test.jpg)

#### Software
- upload the code into Arduino.

```c
/*macro definitions of PIR motion sensor pin and LED pin*/
#define PIR_MOTION_SENSOR 2//Use pin 2 to receive the signal from the module
#define LED	4//the Grove - LED is connected to D4 of Arduino


void setup()
{
	pinMode(PIR_MOTION_SENSOR, INPUT);
	pinMode(LED,OUTPUT);
}

void loop()
{
	if(isPeopleDetected())//if it detects the moving people?
		digitalWrite(LED, HIGH);
	else
		digitalWrite(LED, LOW);
}


/***************************************************************/
/*Function: Detect whether anyone moves in it's detecting range*/
/*Return:-boolean, true is someone detected.*/
boolean isPeopleDetected()
{
	int sensorValue = digitalRead(PIR_MOTION_SENSOR);
	if(sensorValue == HIGH)//if the sensor value is HIGH?
	{
		return true;//yes,return true
	}
	else
	{
		return false;//no,return false
	}
}
```
- The led will turn on when we walk around.

!!!Note
    The detecting distance and holding time can be adjusted by adding two extra potentiometers on board. For the details please refer to the V1.2 Eagle below. The module can also be set as retriggerable or un- retriggerable by changing the jumper hat.


### With Raspberry Pi

#### Connection
First of all, we need to prepare the below stuffs:

| Raspberry pi | Grove - PIR MOTION SENSOR | GrovePi_Plus |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/pi.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/grovepi%2B.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|[Get ONE Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|

- Follow [instruction](http://wiki.seeed.cc/GrovePi_Plus/) to configure the development environment.
- Plug the sensor to grovepi+ socket **D8** by using a grove cable.

![](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/img/pi%20connection.jpg)

#### Software

- Navigate to the demos' directory:

```
  cd yourpath/GrovePi/Software/Python/
```

- To see the code

```
   nano grove_pir_motion_sensor.py   # "Ctrl+x" to exit #
```

```python
import time
import grovepi

# Connect the Grove PIR Motion Sensor to digital port D8
# SIG,NC,VCC,GND
pir_sensor = 8

grovepi.pinMode(pir_sensor,"INPUT")

while True:
    try:
        # Sense motion, usually human, within the target range
        if grovepi.digitalRead(pir_sensor):
            print 'Motion Detected'
        else:
            print '-'

        # if your hold time is less than this, you might not see as many detections
        time.sleep(.2)

    except IOError:
        print "Error"
```
- Run the demo.

```
   sudo python grove_pir_motion_sensor.py
```

## Resources
---

- **[Eagle]** [Grove - PIR Motion Sensor Eagle File v1.2](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/res/Grove_-_PIR_Motion_Sensor_Eagle_File.zip)
- **[Easyeda]** [Schematics at Easyeda](https://easyeda.com/Seeed/Grove_PIR_Sensor_v1_2-101b3ca1281645c4a36fbc06b1c7b8d0)
- **[PDF]** [Grove - PIR Motion Sensor v1.2 Schematics](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/resources/Grove_PIR_Sensor_v1.2.pdf)
- **[PDF]** [Grove - PIR Motion Sensor Eagle V1.2 PCB](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/res/Grove%20-%20PIR%20motion%20sensor%20v1.1b%20PCB.pdf)
- **[Library]** [Github repository for PIR Motion Sensor](https://github.com/Seeed-Studio/PIR_Motion_Sensor)
- **[Datasheet]** [BISS0001 Datasheet](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/resources/Twig_-_BISS0001.pdf)
- **[Datasheet]** [Fresnel lens 8120 Datasheet](https://github.com/SeeedDocument/Grove_PIR_Motion_Sensor/raw/master/resources/Fresnel_lens_8120.pdf)
