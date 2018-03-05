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

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Loudness_Sensor/master/img/LoudnessSensor.jpg)

The Grove - Loudness Sensor is designed to detect the sound of environment. Based on LM2904 amplifier and a built-in microphone, it amplifies and filters the high frequency signal that received from the microphone, and outputs a positive envelop. This is used for Arduino’s signal acquisition. The output value depends on the level of sound input. In order to avoid unnecessary signal disturbances, input signal will go through two times’ filtering inside the module. There is a screw potentiometer that enables manual adjustments to the output gain.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html)

Specifications
--------------

-   Voltage ：3.5~10 VDC
-   Working Frequency ：50~2000 Hz
-   Sensitivity : -48~66 dB
-   Signal-to-noise Ratio : &gt;58 dB
-   Output Signal range : Analog Signal (0-1023)

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)


Platforms Supported
-------------------

Getting Started
-------------

### With Arduino
#### Connection
This module uses the chip LM2904 to amplify the electronic signal produced by the mini microphone. At last, you’ll get the analog-to-digital conversion value. Let's try to read the output value.

Here we will show you how this Grove - Loudness Sensor works via a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino V4 | Grove - Loudness Sensor | Base Shield |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/LoudnessSensor_s.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](http://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|


- As the picture on the below indicates, the Loudness sensor is connected to analog port A0 of the Grove - Base Shield.

![](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/arduino%20loudness%20sensor.jpg)

-   Connect Arduino/Seeeduino to PC by using a USB cable.

#### Software
-   Copy and paste code below to a new Arduino sketch.

```
int val;
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    analogRead(0);
    delay(10);
    val = analogRead(0);
    Serial.println(val);
    delay(200);
}
```

-   Upload the code.
-   Then open the serial monitor to observe the output results. There will be a significant change when blow to the sensor.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Loudness_Sensor/master/img/Loudness_Sensor.jpg)


**Here is the test screenshot from the oscilloscope.**
The blue line is the original signal from microphone and the yellow is the sig pin of Loudness Sensor. It is the original signal envelope that the module outputs.

Blowing to the sensor:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Loudness_Sensor/master/img/Loudness_Sensor_Test_1.bmp)

Speaking to the sensor：

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Loudness_Sensor/master/img/Loudness_Sensor_Test_3.bmp)


### With Raspberry Pi

#### Connection

- First, You need to prepare the below stuffs:

|  Raspberry pi | Grove - DHT Sensor pro | Grovepi+ |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/pi.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/LoudnessSensor_s.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/grovepi%2B.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](http://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html)|[Get ONE Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|


- Follow [instruction](http://wiki.seeed.cc/GrovePi_Plus/) to configure the development environment.

-   Plug the sensor to grovepi socket A0 by using a grove cable.
![](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/pi%20loudness%20sensor.jpg)

#### Software

- Navigate to the demos' directory:

```
    cd yourpath/GrovePi/Software/Python/
```

-   To see the code
```
    nano grove_loudness_sensor.py   # "Ctrl+x" to exit #
```
```
    import time
    import grovepi

    # Connect the Grove Loudness Sensor to analog port A0
    # SIG,NC,VCC,GND
    loudness_sensor = 0

    while True:
        try:
            # Read the sound level
            sensor_value = grovepi.analogRead(loudness_sensor)

            print "sensor_value =", sensor_value
            time.sleep(.5)

        except IOError:
            print "Error"
```

- Run the demo.
```
    sudo python grove_loudness_sensor.py
```

Resources
--------

- **【Eagle】** [Grove - Loudness Sensor in Eagle format](https://raw.githubusercontent.com/SeeedDocument/Grove-Loudness_Sensor/master/res/Grove-Loudness_Sensor_Eagle_File.zip)
- **【PDF】** [Grove - loudness sensor Schematic in PDF format](https://raw.githubusercontent.com/SeeedDocument/Grove-Loudness_Sensor/master/res/Grove_loudness_sensor.pdf)
- **【PDF】** [Grove - loudness sensor PCB in PDF format](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/res/Grove-loudness%20sensor%20PCB.pdf)
- **【Datasheet】** [LM2904DR Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Loudness_Sensor/master/res/LM2904DR.pdf)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Loudness_Sensor -->
