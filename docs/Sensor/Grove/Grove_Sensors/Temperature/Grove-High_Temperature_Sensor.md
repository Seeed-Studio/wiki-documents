---
description: Grove - High Temperature Sensor
title: Grove - High Temperature Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-High_Temperature_Sensor
last_update:
  date: 1/4/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/High_Temperature_Sensor_01.jpg" /></div>

Thermocouples are very sensitive devices. It requires a good amplifier with cold-junction compensation. The Grove - High Temperatire Sensor uses a K-Type themocouple and a thermocouple amplifier that measures ambient temperature using thermistor for cold-junction compensation. The detectable range of this Sensor is -50~600°C , and the accuracy is ±(2.0% + 2°C).

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-High-Temperature-Sensor.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2101 Wireless Temperature and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) for your next successful industrial project.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody><tr><td align="center"><font size={4}><strong>SenseCAP Industrial Sensor</strong></font></td>
    </tr>
    <tr>
      <td><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 Air Temp &amp; Humidity</strong></a></td>
    </tr>
  </tbody></table>

## Version

| Product Version                      | Changes | Released Date |
|--------------------------------------|---------|---------------|
| Grove - High Temperature Sensor V1.0 | Initial | Feb 25, 2014  |

## Specifications

| Parameter                                     | Value/Range                         |
|-----------------------------------------------|-------------------------------------|
| Operating Voltage                             | 3.3-5V                              |
| Max power rating at 25℃                       | 300mW                               |
| Operating temperature range                   | -40 ~ +125 ℃                        |
| Temperature measurement range                 | -50 ~ +600 ℃                        |
| Amplifier output voltage range                | 0 ~ 3.3 V                           |
| Thermocouple material                         | Glass Fiber                         |
| Cold junction compensation                    | Environment temperature measurement |
| Thermocouple temperature measurement accuracy | +/-2.0% (+ 2 ℃)                     |
| Thermocouple temperature sensor cable length  | 100cm                               |
| Dimension                                     | 20mm x 40mm                         |

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play with Arduino

#### Hardware

- Step 1. We need to prepare the below stuffs:

| Seeeduino V4.2 | Base Shield |  Grove-High Temperature Sensor|
|--------------|----------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/High_Temperature_Sensor_s.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://seeedstudio.com/Grove-High-Temperature-Sensor-p-1810.html)|

- Step 2. Connect the Grove-High Temperature Sensor to **A0** on Base Shield.
- Step 3. Plug the base Shield into Seeeduino-V4.2.
- Step 4. Connect Seeeduino-V4.2 to PC by using a USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/arduino_connection.jpg" /></div>

:::note
    If we don't have a Base Shield, don't worry, the sensor can be connected to your Arduino directly. Please follow below tables to connect with Arduino.
:::

| Seeeduino |Grove-High Temperature Sensor |
|------------------|------- --|
| GND              | Black  |
| 5V               |  Red   |
| A1               | White  |
| A0               | Yellow |

#### Software

- Step 1. Download the  [Grove-High Temperature Sensor Library](https://github.com/Seeed-Studio/Grove_HighTemp_Sensor/archive/master.zip) from Github.
- Step 2. Refer [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
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

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/Htsdata.jpg" /></div>

### Play With Raspberry Pi

#### Hardware

- Step 1. Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/High_Temperature_Sensor_s.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get ONE Now](https://seeedstudio.com/Grove-High-Temperature-Sensor-p-1810.html)|

- Step 2. Plug the GrovePi_Plus into Raspberry.
- Step 3. Connect Grove-Ultrasonic ranger to **A0** port of GrovePi_Plus.
- Step 4. Connect the Raspberry to PC through USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/raspberry_connection.jpg" /></div>

#### Software

- Step 1. Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- Step 2. Follow [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) to update the newest firmware of GrovePi.

:::tip
In this wiki we use the path **~/GrovePi/** instead of **/home/pi/Desktop/GrovePi**, you need to make sure Step 2 and Step 3 use the same path.
:::

:::note
We firmly suggest you to update the firmware, or for some sensors you may get errors.
:::

:::caution
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- Step 3. Git clone the Github repository.

```txt
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- Step 4. Excute below commands to use the ultrasonic_ranger to meansure the distance.

```txt
cd ~/GrovePi/Software/Python/grove_hightemperature_sensor
python3 high_temperature_example.py
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

```txt
pi@raspberrypi:~/GrovePi/Software/Python/grove_hightemperature_sensor $ python3 high_temperature_example.py
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.47°C][probe temperature: 32.19°C]
[room temperature: 20.60°C][probe temperature: 32.19°C]
[room temperature: 20.60°C][probe temperature: 32.19°C]
[room temperature: 20.60°C][probe temperature: 32.19°C]
```

## FAQs

**Q1: How to do Grove-High temperature sensor calibration?**

**A1:**  Please download the [libray](https://files.seeedstudio.com/wiki/Grove_High_Temperature_Sensor/resource/Grove_HighTemp_Sensor-master_cal.zip) and then follow below instructions.  

- Step 1. run the getTemperature-calibration-measurement.ino to get below info.

```txt
10:02:17.792 -> "You have Scucessfully record the sample data,please copy the following line of code to your clipboard and replace the first line of function loop()
10:02:17.935 ->       double TMP[]={10.29,10.29,10.29,10.29,10.29,10.29,10.29,10.29,10.29,10.29};
10:02:18.038 ->       double Real_temperature[]={10.00,20.00,30.00,40.00,50.00,60.00,70.00,80.00,90.00,100.00};
```

- Step 2. paste to getTemperature-calibration_demo.ino and run the calibration.

- Step 3. run getTemperature.ino to read the temperature.  

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Grove%20-%20High%20Temperature%20Sensor%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[PDF]** [Download Wiki PDF](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove-High_Temperature_Sensor.pdf)
- **[Eagle]** [Grove - High Temperature Sensor Eagle file](https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Grove%20-%20High%20Temperature%20Sensor%20v1.0.zip)
- **[Library]** [High Temperature Sensor Library](https://github.com/Seeed-Studio/Grove_HighTemp_Sensor)
- **[Datasheet]** [OPA333 PDF](http://www.ti.com/lit/ds/symlink/opa333.pdf)
- **[Datasheet]** [LMV358 PDF](https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Lmv358.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_High_Temperature_Sensor -->

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
