---
title: Grove - High Temperature Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-High-Temperature-Sensor-p-1810.html
oldwikiname: Grove_-_High_Temperature_Sensor
prodimagename: High_Temperature_Sensor_01.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/High Temperature Sensor.jpg
surveyurl: https://www.research.net/r/Grove-High_Temperature_Sensor
sku: 111020002
tags: grove_analog, io_3v3, io_5v, plat_duino, plat_linkit, plat_pi
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-High_Temperature_Sensor/master/img/High_Temperature_Sensor_01.jpg)

Thermocouples are very sensitive devices. It requires a good amplifier with cold-junction compensation. The Grove - High Temperatire Sensor uses a K-Type themocouple and a thermocouple amplifier that measures ambient temperature using thermistor for cold-junction compensation. The detectable range of this Sensor is -50~600°C , and the accuracy is ±(2.0% + 2°C).

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Grove-High-Temperature-Sensor-p-1810.html)

## Version
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#6ab0de;}
.tg .tg-yw4l{vertical-align:top;width:20%}
.tg .tg-yw42{vertical-align:top;width:50%}
.tg .tg-4eph{background-color:#f9f9f9;}
.tg .tg-b7b8{background-color:#f9f9f9;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-yw4l">Product Version</th>
    <th class="tg-yw42">Changes</th>
    <th class="tg-yw4l">Released Date</th>
  </tr>
  <tr>
    <td class="tg-4eph">Grove - High Temperature Sensor V1.0</td>
    <td class="tg-4eph">Initial</td>
    <td class="tg-b7b8">Feb 25, 2014</td>
  </tr>
  <tr>
</table>


## Specifications


<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#6ab0de;}
.tg .tg-vn4c{background-color:#D2E4FC}
.tg .tg-yw4l{vertical-align:top}
.tg .tg-6k2t{background-color:#D2E4FC;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-yw4l">  Parameter</th>
    <th class="tg-yw4l">  Value/Range</th>
  </tr>
  <tr>
    <td class="tg-vn4c">  Operating Voltage </td>
    <td class="tg-vn4c">  3.3-5V</td>
  </tr>
  <tr>
    <td class="tg-031e">  Max power rating at 25℃  </td>
    <td class="tg-031e">  300mW </td>
  </tr>
  <tr>
    <td class="tg-vn4c">  Operating temperature range </td>
    <td class="tg-vn4c">  -40 ~ +125 ℃</td>
  </tr>
  <tr>
    <td class="tg-031e">  Temperature measurement range </td>
    <td class="tg-031e">  -50 ~ +600℃ </td>
  </tr>
  <tr>
    <td class="tg-vn4c">  Amplifier output voltage range </td>
    <td class="tg-vn4c">  0 ~ 3.3 V</td>
  </tr>
  <tr>
    <td class="tg-vn4c">  Thermocouple material </td>
    <td class="tg-vn4c">  Glass Fiber</td>
  </tr>
  <tr>
    <td class="tg-yw4l">  Cold junction compensation</td>
    <td class="tg-yw4l">  Environment temperature measurement</td>
  </tr>
  <tr>
    <td class="tg-6k2t">   Thermocouple temperature measurement accuracy</td>
    <td class="tg-6k2t">   +/-2.0% (+ 2 ℃) </td>
  </tr>
  <tr>
    <td class="tg-6k2t">   Thermocouple temperature sensor cable length</td>
    <td class="tg-6k2t">   100cm </td>
  </tr>
  <tr>
    <td class="tg-yw4l">  Dimension</td>
    <td class="tg-yw4l">  20mm x 40mm</td>
  </tr>
</table>


!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

## Platforms Supported

## Getting Started

### Play with Arduino

#### Hardware

- Step 1. We need to prepare the below stuffs:

| Seeeduino V4.2 | Base Shield |  Grove-High Temperature Sensor|
|--------------|----------------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-High_Temperature_Sensor/raw/master/img/High_Temperature_Sensor_s.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://seeedstudio.com/Grove-High-Temperature-Sensor-p-1810.html)|

- Step 2. Connect the Grove-High Temperature Sensor to **A0** on Base Shield.
- Step 3. Plug the base Shield into Seeeduino-V4.2.
- Step 4. Connect Seeeduino-V4.2 to PC by using a USB cable.

![](https://github.com/SeeedDocument/Grove-High_Temperature_Sensor/raw/master/img/arduino_connection.jpg)

!!!Note
    If we don't have a Base Shield, don't worry, the sensor can be connected to your Arduino directly. Please follow below tables to connect with Arduino.

| Seeeduino |Grove-High Temperature Sensor |
|------------------|------- --|
| GND              | Black  |
| 5V               |  Red   |
| A1               | White  |
| A0               | Yellow |

#### Software

- Step 1. Download the  [ UltrasonicRanger Library](https://github.com/Seeed-Studio/Grove_HighTemp_Sensor/archive/master.zip) from Github.
- Step 2. Refer [How to install library](http://wiki.seeed.cc/How_to_install_Arduino_Library) to install library for Arduino.
- Step 3. Copy the code into Arduino IDE and upload.

```c++
#include "High_Temp.h"

HighTemp ht(A1, A0);

void setup()
{
    Serial.begin(115200);
    Serial.println("grove - hight temperature sensor test demo");
    ht.begin();
}

void loop()
{
    Serial.println(ht.getThmc());
    delay(100);
}
```

- Step 4. Open your Serial Monitor and set baud rate as 115200, We will see the temperature in Celsius here.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-High_Temperature_Sensor/master/img/Htsdata.jpg)

### Play With Raspberry Pi

#### Hardware

- Step 1. Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Grovepi%2B.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-High_Temperature_Sensor/raw/master/img/High_Temperature_Sensor_s.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get ONE Now](https://seeedstudio.com/Grove-High-Temperature-Sensor-p-1810.html)|

- Step 2. Plug the GrovePi_Plus into Raspberry.
- Step 3. Connect Grove-Ultrasonic ranger to **A0** port of GrovePi_Plus.
- Step 4. Connect the Raspberry to PC through USB cable.

![](https://github.com/SeeedDocument/Grove-High_Temperature_Sensor/raw/master/img/raspberry_connection.jpg)

#### Software

- Step 1. Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- Step 2. Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```
- Step 3. Excute below commands to use the ultrasonic_ranger to meansure the distance.

```
cd ~/GrovePi/Software/Python/grove_hightemperature_sensor
python high_temperature_example.py
```

Here is the grove_ultrasonic.py code.

```python

import grove_hightemperature_sensor as grovepi # our library
from time import sleep # and for the sleep function
import sys # we need this for the exception throwing stuff

# Don't forget to run it with Python 3 !!
# Don't forget to run it with Python 3 !!
# Don't forget to run it with Python 3 !!

def Main():
    room_temperature_pin = 15 # this is equal to A1
    probe_temperature_pin = 14 # this is equal to A0
    # so you have to connect the sensor to A0 port

    # instatiate a HighTemperatureSensor object
    sensor = grovepi.HighTemperatureSensor(room_temperature_pin, probe_temperature_pin)

    # and do this indefinitely
    while True:
        # read the room temperature
        room_temperature = sensor.getRoomTemperature()
        # and also what's important to us: the temperature at the tip of the K-Type sensor
        probe_temperature = sensor.getProbeTemperature()

        # print it in a fashionable way
        print('[room temperature: {:5.2f}°C][probe temperature: {:5.2f}°C]'.format(room_temperature, probe_temperature))
        # and wait for 250 ms before taking another measurement - so we don't overflow the terminal
        sleep(0.25)


if __name__ == "__main__":
    try:
        Main()

    # in case CTRL-C / CTRL-D keys are pressed (or anything else that might interrupt)
    except KeyboardInterrupt:
        print('[Keyboard interrupted]')
        sys.exit(0)

    # in case there's an IO error aka I2C
    except IOError:
        print('[IO Error]')
        sys.exit(0)

    # in case we have a math error (like division by 0 - can happen depending on the read values)
    # or if the values exceed a certain threshold
    # experiment and you'll see
    except ValueError as e:
        print('[{}]'.format(str(e)))
        sys.exit(0)
```

- Step 4. We will see the temperature display on terminal as below.

```
pi@raspberrypi:~/GrovePi/Software/Python/grove_hightemperature_sensor $ python high_temperature_example.py
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.60°C][probe temperature: 32.19°C]
[room temperature: 20.60°C][probe temperature: 32.19°C]
[room temperature: 20.60°C][probe temperature: 32.19°C]
```

## FAQ
Please click [here](http://support.seeedstudio.com/knowledgebase/articles/743697-grove-high-temperature-sensor-sku-111020002) to see all Grove-High_Temperature_Sensor FAQs.

## Tech Support
Please do not hesitate to contact **techsupport@seeed.cc** if you require further information.

## Resources

- **[PDF]** [Download Wiki PDF](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/res/Grove-High_Temperature_Sensor.pdf)
- **[PDF]**[Grove - High Temperature Sensor SCH PDF](https://raw.githubusercontent.com/SeeedDocument/Grove-High_Temperature_Sensor/master/res/Grove-High_Temperature_Sensor_v1.0.pdf)
- **[PDF]**[Grove - High Temperature Sensor PCB PDF](https://github.com/SeeedDocument/Grove-High_Temperature_Sensor/raw/master/res/Grove%20-%20High%20Temperature%20Sensor%20v1.0%20-%20PCB.pdf)
- **[Eagle]**[Grove - High Temperature Sensor Eagle SCH](https://github.com/SeeedDocument/Grove-High_Temperature_Sensor/raw/master/res/Grove%20-%20High%20Temperature%20Sensor%20v1.0.sch.zip)
- **[Eagle]**[Grove - High Temperature Sensor Eagle PCB](https://github.com/SeeedDocument/Grove-High_Temperature_Sensor/raw/master/res/Grove%20-%20High%20Temperature%20Sensor%20v1.0%20.brd.zip)
- **[Library]**[High Temperature Sensor Library](https://github.com/Seeed-Studio/Grove_HighTemp_Sensor)
- **[Datasheet]**[OPA333 PDF](http://www.ti.com/lit/ds/symlink/opa333.pdf)
- **[Datasheet]**[LMV358 PDF](https://raw.githubusercontent.com/SeeedDocument/Grove-High_Temperature_Sensor/master/res/Lmv358.pdf)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_High_Temperature_Sensor -->
