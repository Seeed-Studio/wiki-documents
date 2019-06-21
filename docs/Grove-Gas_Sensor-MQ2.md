---
name: Grove - Gas Sensor(MQ2)
category: Sensor
bzurl: https://seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html
oldwikiname: Grove_-_Gas_Sensor(MQ2)
prodimagename: Twig-Gas_Sensor.bmp
bzprodimageurl: http://statics3.seeedstudio.com/images/product/Gas Sensor MQ.jpg
surveyurl: https://www.research.net/r/Grove-Gas_Sensor-MQ2
sku: 101020055
tags: grove_analog, io_5v, plat_duino
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Gas_Sensor-MQ2/master/img/Twig-Gas_Sensor.bmp)

The Grove - Gas Sensor(MQ2) module is useful for gas leakage detection (home and industry). It is suitable for detecting H2, LPG, CH4, CO, Alcohol, Smoke or Propane. Due to its high sensitivity and fast response time, measurement can be taken as soon as possible. The sensitivity of the sensor can be adjusted by potentiometer.

!!!Note
    The sensor value only reflects the approximated trend of gas concentration in a permissible error range, it DOES NOT represent the exact gas concentration. The detection of certain components in the air usually requires a more precise and costly instrument, which cannot be done with a single gas sensor. If your project is aimed at obtaining the gas concentration at a very precise level, then we don't recommend this gas sensor.

There are 4 kinds of gas sensors, every can detect different type of gas, here we use a table to illustrate.


|Sensor|Gas Type|Get One Now|
|:---:|---|---|
|[MQ2](http://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ2/)|Combustible Gas, Smoke|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html">![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>|
|[MQ3](http://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ3/)|Alcohol Vapor|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ3%29-p-1418.html">![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>|
|[MQ5](http://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ5/)|LPG, Natural Gas, Town Gas|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ5%29-p-938.html">![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>|
|[MQ9](http://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ9/)|Carbon Monoxide, Coal Gas, Liquefied Gas|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ9%29-p-1419.html">![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>|


!!!Tip
    We've released the [Seeed Gas Sensor Selection Guide](http://wiki.seeedstudio.com/Seeed_Gas_Sensor_Selection_Guide/), it will help you choose the gas sensor that best suits your needs.

## Features


-   Wide detecting scope
-   Stable and long lifetime
-   Fast response and High sensitivity

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Specification


| Item | Parameter           | Min | Typical    | Max | Unit |
|------|---------------------|-----|------------|-----|------|
| VCC  | Working Voltage     | 4.9 | 5          | 5.1 | V    |
| PH   | Heating consumption | 0.5 | -          | 800 | mW   |
| RL   | Load resistance     |     | adjustable |     |      |
| RH   | Heater resistance   | -   | 33         | -   | Ω    |
| Rs   | Sensing Resistance  | 3   | -          | 30  | kΩ   |

## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Application Ideas


-   Gas leakage detection.
-   Toys.




## Getting Started
The output voltage from the Gas sensor increases when the concentration of gas increases. Sensitivity can be adjusted by rotating the potentiometer. For detail information about the MQ-2 sensor, please refer the data-sheet provided in **Resources** section.

!!!warning
    Please note that the best preheat time for the sensor is above 24 hours.

### Play with arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Grove-Gas Sensor-MQ2 |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Gas_Sensor-MQ2/raw/master/img/45d_small.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html)|

- **Step 2.** Connect Grove-Gas_Sensor-MQ2 to port A0 of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

<!--connected with arduino-->
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Gas_Sensor-MQ2/master/img/with_ardu.jpg)
Connect the Grove - Gas Sensor(MQ2) to A0 port as shown in the picture above.

!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove-Gas_Sensor-MQ2 to Seeeduino as below.

| Seeeduino       | Grove-Gas_Sensor-MQ2 |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| A0            | Yellow                  |


#### Software

there are some examples  Please copy and paste code below to a new Arduino sketch, and upload them respectively, If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

**Basic example:Gas Detection**

In this example, the sensor is connected to A0 pin. The voltage read from the sensor is displayed. This value can be used as a threshold to detect any increase/decrease in gas concentration.

```C
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float sensorValue;

    sensorValue = analogRead(A0);
    sensor_volt = sensorValue/1024*5.0;

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");
    delay(1000);
}
```


 **Measurement : Approximation**

These examples demonstrate ways to know the approximate concentration of Gas. As per the data-sheet of the MQx sensors, these equations are tested for standard conditions and are not calibrated. It may vary based on change in temperature or humidity.

!!!Note
    Please keep the Gas Sensor in clean air environment.

```c
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float RS_air; //  Get the value of RS via in a clear air
    float R0;  // Get the value of R0 via in H2
    float sensorValue;

  // Get a average data by testing 100 times
    for(int x = 0 ; x < 100 ; x++)
    {
        sensorValue = sensorValue + analogRead(A0);
    }
    sensorValue = sensorValue/100.0;


    sensor_volt = sensorValue/1024*5.0;
    RS_air = (5.0-sensor_volt)/sensor_volt; // omit * RL
    R0 = RS_air/9.8; // The ratio of RS/R0 is 9.8 in a clear air from Graph (Found using WebPlotDigitizer)

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");

    Serial.print("R0 = ");
    Serial.println(R0);
    delay(1000);

}
```

Then, open the serial monitor of Arduino IDE. Write down the value of R0 and this will be used in the next program. Please write down the R0 after the reading stabilizes.

!!!warning
    Replace the R0 below with value of R0 tested above. 

Expose the sensor to any one of the gas listed above.

```c
void setup() {
    Serial.begin(9600);
}

void loop() {

    float sensor_volt;
    float RS_gas; // Get value of RS in a GAS
    float ratio; // Get ratio RS_GAS/RS_air
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = (5.0-sensor_volt)/sensor_volt; // omit * RL

          /*-Replace the name "R0" with the value of R0 in the demo of First Test -*/
    ratio = RS_gas/R0;  // ratio = RS/R0
          /*-----------------------------------------------------------------------*/

    Serial.print("sensor_volt = ");
    Serial.println(sensor_volt);
    Serial.print("RS_ratio = ");
    Serial.println(RS_gas);
    Serial.print("Rs/R0 = ");
    Serial.println(ratio);

    Serial.print("\n\n");

    delay(1000);

}
```

Now, we can get the concentration of gas from the figure below.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Gas_Sensor-MQ2/master/img/Gas_sensor_1.png)

According to the graph, we can see that the minimum concentration we can test is 100ppm and the maximum is 10000ppm, in a other word, we can get a concentration of gas between 0.01% and 1%. However, we can't provide a formula because the relation between ratio and concentration is nonlinear.




### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove-Gas_Sensor-MQ2 |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Gas_Sensor-MQ2/raw/master/img/45d_small.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the Grove-Gas Sensor MQ2 to port A0 of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


![](https://github.com/SeeedDocument/Grove_Gas_Sensor_MQ2/raw/master/image/With_Hat.jpg)

!!! Note
    For step 3 you are able to connect the Grove-Gas Sensor MQ2 to **any Analog Port** but make sure you change the command with the corresponding port number.


#### Software

- **Step 1**. Follow [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. Excute below commands to write the code.

```
cd grove.py/grove
nano grove_gas_sensor_mq2.py
```
Then you should copy following code in this file and hit ++ctrl+x++ to quit and save.

```python


import math
import sys
import time
from grove.adc import ADC


class GroveGasSensorMQ2:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def MQ2(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGasSensorMQ2


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGasSensorMQ2(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('Gas value: {0}'.format(sensor.MQ2))
        time.sleep(.3)

if __name__ == '__main__':
    main()


```

- **Step 4**. Excute below command to run the code 

```

python grove_gas_sensor_mq2.py 0

```



!!!success
    If everything goes well, you will be able to see the following result


```python

pi@raspberrypi:~/grove.py/grove $ python grove_gas_sensor_mq2.py 0
Detecting...
Gas value: 760
Gas value: 714
Gas value: 675
Gas value: 637
Gas value: 603
Gas value: 568
Gas value: 535
Gas value: 506
Gas value: 481
Gas value: 464
Gas value: 449
Gas value: 429
Gas value: 413
Gas value: 456
Gas value: 470
Gas value: 440
Gas value: 404
Gas value: 373
Gas value: 352
Gas value: 339
Gas value: 330
^CTraceback (most recent call last):
  File "grove_gas_sensor_mq2.py", line 69, in <module>
    main()
  File "grove_gas_sensor_mq2.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt


```


You can quit this program by simply press ++ctrl+c++.

!!!Notice
        You may have noticed that for the analog port, the silkscreen pin number is something like **A1, A0**, however in the command we use parameter **0** and **1**, just the same as digital port. So please make sure you plug the module into the correct port, otherwise there may be pin conflicts.



### Play With Raspberry Pi (with GrovePi_Plus)

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove-Gas_Sensor-MQ2 |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Gas_Sensor-MQ2/raw/master/img/45d_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html)|


- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-Gas_Sensor-MQ2  to **A0** port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.
<!--wrong link-->
![with_rpi](https://github.com/SeeedDocument/Grove-Gas_Sensor-MQ2/raw/master/img/with_rpi.jpg)



#### Software

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- **Step 2.** Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

-   **Step 3.** Excute below commands to use this sensor

```bash
cd ~/GrovePi/Software/Python
python grove_gas_sensor.py
```
Here is code of grove_gas_sensor.py:

```Python
#!/usr/bin/env python
#
# GrovePi Example for using the  Grove Gas Sensor
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

# NOTE:
# There are 5 gas sensors
# MQ2 - Combustible Gas, Smoke
# MQ3 - Alcohol Vapor
# MQ5 - LPG, Natural Gas, Town Gas
# MQ9 - Carbon Monoxide, Coal Gas, Liquefied Gas
# 02 - Oxygen
# The sensitivity can be adjusted by the onboard potentiometer
#
# http://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor
# http://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(MQ5)
# http://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(O%E2%82%82)

import time
import grovepi



# Connect the Grove Gas Sensor to analog port A0
# SIG,NC,VCC,GND
gas_sensor = 0

grovepi.pinMode(gas_sensor,"INPUT")

while True:
    try:
        # Get sensor value
        sensor_value = grovepi.analogRead(gas_sensor)

        # Calculate gas density - large value means more dense gas
        density = (float)(sensor_value / 1024.0)

        print("sensor_value =", sensor_value, " density =", density)
        time.sleep(.5)

    except IOError:
        print ("Error")
```


## Resources


-  **[Suggest Reading]** [How to choose a Gas Sensor](/How_to_Chose_A_Gas_Sensor)
-  **[References]** [What's LEL](https://en.wikipedia.org/wiki/Flammability_limit)
-  **[Schematic]** [Grove Gas Sensor - EAGLE (Schematic and Board) files](https://raw.githubusercontent.com/SeeedDocument/Grove-Gas_Sensor-MQ2/master/res/Gas_Sensor_Eagle_files.zip)
-  **[Schematic]** [Grove Gas Sensor - PDF Schematic](https://raw.githubusercontent.com/SeeedDocument/Grove-Gas_Sensor-MQ2/master/res/Gas_Sensor_Schematic.pdf)
-  **[Datasheet]** [MQ-2 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Gas_Sensor-MQ2/master/res/MQ-2.pdf)


## Projects

**Arduino And MQ2 Gas Sensor**: The Grove Gas Sensor (MQ2) module is useful for gas leakage detection (home and industry). It is suitable for detecting H2, LPG, CH4 and CO.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/karimmufte/arduino-and-mq2-gas-sensor-57f98c/embed' width='350'></iframe>

[**Electronic nose to detect fruit ripening**](https://hackaday.io/project/16809-electronic-nose-to-detect-fruit-ripening)

[**ED-E: Home Automation and Monitoring System**](https://hackaday.io/project/8011-ed-e-home-automation-and-monitoring-system)

**Scalable Intelligent Air Quality Monitoring and Response** Air Quality Monitoring that uses the Intel Edison Compute Module, Amazon AWS, Visualization through Kibana, and drones!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/iot-warriors/scalable-intelligent-air-quality-monitoring-and-response-b72732/embed' width='350'></iframe>

**Octopod: Smart IoT Home Automation Project** Octopod, a uniquely shaped full home automation system that allows you to monitor your home and keep security with AI and smart RFID locks.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sakshambhutani2001/octopod-smart-iot-home-automation-project-fa939b/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>