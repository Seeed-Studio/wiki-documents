---
name: Grove - Electricity Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Electricity-Sensor-p-777.html
oldwikiname: Grove_-_Electricity_Sensor
prodimagename: Twig-Electricity-Sensor.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/P2130726.jpg
surveyurl: https://www.research.net/r/Grove-Electricity_Sensor
sku: 101020027
tags: grove_analog, io_3v3, io_5v, plat_duino, plat_linkit, plat_bbg
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Electricity_Sensor/master/img/Twig-Electricity-Sensor.jpg)

The Electricity sensor module is a member of Grove. It is based on the TA12-200 current transformer which can transform the large AC into small amplitude. You can use it to test large alternating current up to 5A.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html)

## Features


-   Grove compatible interface
-   Maximum 5A input
-   High accuracy
-   Small size

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Application Ideas


-   Alternating current measurement
-   Device condition monitoring

## Specification


### Key Specification

| **Items**    | **Min**                |
|--------------|------------------------|
| PCB Size     | 2.0cm\*4.0cm           |
| Interface    | 2.0mm pitch pin header |
| IO Structure | SIG,NC,NC,GND          |
| RoHS         | YES                    |

### Electronic Characteristics

| **Items**             | **Min** | **Norm** | **Max** | **Unit**  |
|-----------------------|---------|----------|---------|-----------|
| Transformation ratio  | -       | 2000:1   | -       | -         |
| Input Current         | 0       | -        | 5       | A         |
| Output Current        | 0       | -        | 2.5     | mA        |
| Sampling Resistance   | -       | 800      | -       | Ω         |
| Sampling Voltage      | 0       | -        | 2       | V         |
| Working Frequency     | 20      | -        | 20K     | HZ        |
| Nonlinear scale       | -       | -        | 0.2%    | -         |
| Phase Shift           | -       | -        | 5'      | -         |
| Operating Temperature | -55     | -        | 85      | ℃         |
| Dielectric strength   | -       | 6        | -       | KVAC/1min |

## Hardware Overview

![](https://github.com/SeeedDocument/Grove-Electricity_Sensor/raw/master/img/dimensions.jpg)

## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting started


### Play with Arduino

The following sketch demonstrates a simple application of measuring the amplitude of the alternating voltage. The SIG pin will output a alternating voltage based on the alternating current being measured. You can measure the value using ADC.
####　Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Grove-Electricity_Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Electricity_Sensor/raw/master/img/45d_small.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](http://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html)|

- **Step 2.** Connect  Grove-Electricity_Sensor to port **A0** of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

<!--link-->
![with_ardu](https://github.com/SeeedDocument/Grove-Electricity_Sensor/raw/master/img/with_ardu.jpg)

!!!Note
	If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.


  | Seeeduino       | Grove-Electricity_Sensor |
  |---------------|-------------------------|
  | 5V            | Red                     |
  | GND           | Black                   |
  | Not Conencted | White                   |
  | A0            | Yellow                  |




#### Software


**Step 1.** Copy the code and flash it into the controller board and upload the code.


```c
    /****************************************************************************/  
    //  Function: Measure the amplitude current of the alternating current and
    //            the effective current of the sinusoidal alternating current.
    //  Hardware: Grove - Electricity Sensor        
    //  Date:    Jan 19,2013
    //  by www.seeedstudio.com
    #define ELECTRICITY_SENSOR A0 // Analog input pin that sensor is attached to

    float amplitude_current;               //amplitude current
    float effective_value;       //effective current

    void setup()
    {
        Serial.begin(9600);
        pins_init();
    }
    void loop()
    {
        int sensor_max;
        sensor_max = getMaxValue();
        Serial.print("sensor_max = ");
        Serial.println(sensor_max);
        //the VCC on the Grove interface of the sensor is 5v
        amplitude_current=(float)sensor_max/1024*5/800*2000000;
        effective_value=amplitude_current/1.414;//minimum_current=1/1024*5/800*2000000/1.414=8.6(mA)
                            //Only for sinusoidal alternating current
        Serial.println("The amplitude of the current is(in mA)");
        Serial.println(amplitude_current,1);//Only one number after the decimal point
        Serial.println("The effective value of the current is(in mA)");
        Serial.println(effective_value,1);
    }
    void pins_init()
    {
        pinMode(ELECTRICITY_SENSOR, INPUT);
    }
    /*Function: Sample for 1000ms and get the maximum value from the SIG pin*/
    int getMaxValue()
    {
        int sensorValue;             //value read from the sensor
        int sensorMax = 0;
        uint32_t start_time = millis();
        while((millis()-start_time) < 1000)//sample for 1000ms
        {
            sensorValue = analogRead(ELECTRICITY_SENSOR);
            if (sensorValue > sensorMax)
            {
                /*record the maximum sensor value*/
                sensorMax = sensorValue;
            }
        }
        return sensorMax;
    }
```


<div class="admonition note">
<p class="admonition-title">Note</p>
The minimum effective current that can be sensed by the code can be calculated using the equation below. minimum_current=1/1024*5/800*2000000/1.414=8.6(mA).
</div>

- **Step 2.**    Open the serial monitor, The results is as follows：

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Electricity_Sensor/master/img/ardu_result.jpg)

### With Raspberry Pi

#### Hardware

- **Step 1.** Prepare the below stuffs:


| Raspberry pi | GrovePi_Plus | Grove-Electricity_Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Electricity_Sensor/raw/master/img/45d_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](http://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html)|



- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-Electricity_Sensor  to **A0** port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.


![](https://raw.githubusercontent.com/SeeedDocument/Grove-Electricity_Sensor/master/img/with_rpi.jpg)

#### Software

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- **Step 2.** Git clone the Github repository.


```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

-	**Step 3.** Excute below commands to use this sensor


```bash
cd ~/GrovePi/Software/Python
python grove_electricity_sensor.py
```


Here is the code of example:

```Python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove Electricity Sensor (http://www.seeedstudio.com/wiki/Grove_-_Electricity_Sensor)
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
#
'''
## License
The MIT License (MIT)
GrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.
Copyright (C) 2017  Dexter Industries
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
'''

import time
import grovepi

# Connect the Grove Electricity Sensor to analog port A0
# SIG,NC,NC,GND
sensor = 0

grovepi.pinMode(sensor,"INPUT")

# Vcc of the grove interface is normally 5v
grove_vcc = 5

while True:
  try:
      # Get sensor value
      sensor_value = grovepi.analogRead(sensor)

      # Calculate amplitude current (mA)
      amplitude_current = (float)(sensor_value / 1024 * grove_vcc / 800 * 2000000)

      # Calculate effective value (mA)
      effective_value = amplitude_current / 1.414

      # minimum_current = 1 / 1024 * grove_vcc / 800 * 2000000 / 1.414 = 8.6(mA)
      # Only for sinusoidal alternating current

      print("sensor_value", sensor_value)
      print("The amplitude of the current is", amplitude_current, "mA")
      print("The effective value of the current is", effective_value, "mA")
      time.sleep(1)

  except IOError:
      print ("Error")
```
Here is the result.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Electricity_Sensor/master/img/rpi_result.jpg)



## Resources


-  **[Eagle]** [Grove -Electricity Sensor Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Electricity_Sensor/master/res/Electricity_sensor_v1.0_eagle_files.zip)
-  **[PDF]** [Schematic in PDF](https://raw.githubusercontent.com/SeeedDocument/Grove-Electricity_Sensor/master/res/Electricity_sensor_sch.pdf)


## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>