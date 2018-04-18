---
title: Grove - Loudness Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Loudness-Sensor-p-1382.html
oldwikiname: Grove_-_Loudness_Sensor
prodimagename: LoudnessSensor.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/Loudness Sensor.jpg
surveyurl: https://www.research.net/r/Grove-Loudness_Sensor
sku: 101020063
tags: grove_analog, io_3v3, io_5v, plat_duino, plat_linkit, plat_bbg, plat_pi
---

![](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/Loudness%20Sensor_new.jpg)

The Grove - Loudness Sensor is designed to detect the sound of environment. Based on LM2904 amplifier and a built-in microphone, it amplifies and filters the high frequency signal that received from the microphone, and outputs a positive envelop. This is used for Arduino’s signal acquisition. The output value depends on the level of sound input. In order to avoid unnecessary signal disturbances, input signal will go through two times’ filtering inside the module. There is a screw potentiometer that enables manual adjustments to the output gain.

<p style="text-align:center"><a href="http://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p>

## Version

| Product Version              | Changes                                   | Released Date |
|------------------------------|-------------------------------------------|---------------|
|Grove-Loudness Sensor V0.9b   | Initial                                   | Dec 2012      |     


## Features

-   Grove Interface
-   Easy to use
-   Basic Grove element

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Specifications

| Parameter             | Value/Range            |
|-----------------------|------------------------|
| Voltage               | 3.5~10 VDC             |
| Working Frequency     | 50~2000 Hz             |
| Sensitivity           | -48~66 dB              |
| Signal-to-noise Ratio | >58 dB                 |
| Output Signal range   | Analog Signal (0-1023) |


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's hardware or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting Started

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


### Play With Arduino

**Hardware**

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove-Loudness Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/LoudnessSensor_s.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](http://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html)|

- **Step 2.** Connect Grove-Loudness Sensor to **A0** port of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/seeeduino_loudness.jpg)

!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove-Loudness Sensor to Seeeduino as below.

| Seeeduino |  Grove-Loudness Sensor |
|-----------|-----------------|
| 5V        | Red             |
| GND       | Black           |
| NC        | White           |
| A0        | Yellow          | 

**Software**

- **Step 1.** Please copy below code to Arduio IDE and upload to arduino. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).


```
int loudness;

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    loudness = analogRead(0);
    Serial.println(loudness);
    delay(200);
}

```

- **Step 2.** Open the serial to monitor the output. It will be a significant change when blow to the sensor.

![](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/seeeduino_serial.png)


### Play With Raspberry Pi

**Hardware**

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove-Loudness Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/LoudnessSensor_s.jpg)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](http://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html)|


- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-Loudness Sensor to **A0** port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.

![](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/rpi_loudness.jpg)

**Software**

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- **Step 2.** Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Step 3.** Excute below commands to monitor the loudness.


```python
cd ~/GrovePi/Software/Python
python grove_loudness_sensor.py
```

Here is the grove_loudness_sensor.py code.

```python
import time
import grovepi

# Connect the Grove Loudness Sensor to analog port A0
# SIG,NC,VCC,GND
loudness_sensor = 0

while True:
    try:
        # Read the sound level
        sensor_value = grovepi.analogRead(loudness_sensor)

        print("sensor_value = %d" %sensor_value)
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- **Step 4.** We will see the loudness status as below.

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_loudness_sensor.py
sensor_value = 135
sensor_value = 23
sensor_value = 196
sensor_value = 258
sensor_value = 98
sensor_value = 131
```

## Resources

- **[Eagle&PDF]** [Grove - Loudness Sensor Schematic](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/res/Grove%20-%20Loudness%20Sensor%20Eagle%20File_v0.9b.zip)
- **[Datasheet]** [LM2904DR Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Loudness_Sensor/master/res/LM2904DR.pdf)

## Tech Support
Please do not hesitate to contact [techsupport@seeed.cc](techsupport@seeed.cc) if you have any technical issue. Or submit the issue into our [forum](http://seeedstudio.com/forum/). 