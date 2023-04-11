---
description: Grove - Air Quality Sensor v1.3
title: Grove - Air Quality Sensor v1.3
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Air_Quality_Sensor_v1.3
last_update:
  date: 1/5/2023
  author: shuxu hu
---


---
<!-- ![](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" width={600} height="auto" /></p>

This sensor is designed for comprehensive monitor over indoor air condition. It's responsive to a wide scope of harmful gases, as carbon monoxide, alcohol, acetone, thinner, formaldehyde and so on. Due to the measuring mechanism, this sensor can't output specific data to describe target gases' concentrations quantitatively. But it's still competent enough to be used in applications that require only qualitative results, like auto refresher sprayers and auto air cycling systems.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)

:::tip
    We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.
:::

## Version

| Product Version | Changes | Released Date |
|-----------------|---------|---------------|
| Grove - Air Quality Sensor v1.3 | Initial | May 2016      |

## Features

- Responsive to a wide scope of target gases
- Cost efficient
- Durable
- Compatible with 5V and 3.3V

:::caution
    1. Requires relatively clean air as an initial condition.
    2. Long time exposure to highly polluted air can significantly weaken its sensitivity.
    3. Coffre-fort et armoire forte:
:::

## Platforms Supported

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

:::note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

### Play With Arduino

#### Demonstration

As described in Introduction, this sensor performs better in providing qualitative results over a wide scope of target gases. In this demo, we will define 4 statuses for reference in the '.cpp' file. They are:

- a. air fresh -- indicating a good air condition
- b. low pollution -- indicating a rather low concentration of target gases exist.
- c. high pollution(without "Force signal active" message printed on serial monitor) -- you should be aware of the pollution level and consider if some measures could be taken.
- d. high pollution(with "Force signal active" message printed on serial monitor) -- instant measures should be taken to improve the air quality.

We encapsulated the decision structure in a '.cpp' file. You can find information there on how to modify the thresholds.

Let's try it out!

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove - Air Quality Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={500} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={500} height="auto" /></p>|<img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" width={600} height="auto" />|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)|

- **Step 2.** Connect Grove - Air Quality Sensor to port **A0** of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_-_Air_Quality_Sensor_v1.3_Test.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_-_Air_Quality_Sensor_v1.3_Test.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 If we don't have Grove Base Shield, We also can directly connect Grove - Air Quality Sensor to Seeeduino as below.
:::
| Seeeduino       | Grove - Air Quality Sensor |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| A0            | Yellow                  |

#### Software

- **Step 1.** Download the  [AirQuality_Sensor Library](https://github.com/Seeed-Studio/Grove_Air_quality_Sensor).
- **Step 2.** Refer [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
- **Step 3.** Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

```c
#include"AirQuality.h"
#include"Arduino.h"
AirQuality airqualitysensor;
int current_quality =-1;
void setup()
{
    Serial.begin(9600);
    airqualitysensor.init(A0);
}
void loop()
{
    current_quality=airqualitysensor.slope();
    if (current_quality >= 0)// if a valid data returned.
    {
        if (current_quality==0)
            Serial.println("High pollution! Force signal active");
        else if (current_quality==1)
            Serial.println("High pollution!");
        else if (current_quality==2)
            Serial.println("Low pollution!");
        else if (current_quality ==3)
            Serial.println("Fresh air");
    }
}
ISR(TIMER2_OVF_vect)
{
    if(airqualitysensor.counter==122)//set 2 seconds as a detected duty
    {
        airqualitysensor.last_vol=airqualitysensor.first_vol;
        airqualitysensor.first_vol=analogRead(A0);
        airqualitysensor.counter=0;
        airqualitysensor.timer_index=1;
        PORTB=PORTB^0x20;
    }
    else
    {
        airqualitysensor.counter++;
    }
}

```

- **Step 4.** We will see the distance display on terminal as below.

```
Waiting sensor to init...
Sensor ready.
Sensor value: 48
Fresh air.
Sensor value: 51
Fresh air.
Sensor value: 49
Fresh air.
Sensor value: 48
Fresh air.
Sensor value: 48
Fresh air.
Sensor value: 48
Fresh air.
```

To adjust the thresholds and indicating messages, refer to the decision structure below in the .cpp file.

```c
int AirQualitySensor::slope(void) {
    _lastVoltage = _currentVoltage;
    _currentVoltage = analogRead(_pin);

    _voltageSum += _currentVoltage;
    _volSumCount += 1;

    updateStandardVoltage();
    if (_currentVoltage - _lastVoltage > 400 || _currentVoltage > 700) {
        return AirQualitySensor::FORCE_SIGNAL;
    }
    else if ((_currentVoltage - _lastVoltage > 400 && _currentVoltage < 700)
             || _currentVoltage - _standardVoltage > 150) {
        return AirQualitySensor::HIGH_POLLUTION;
    }
    else if ((_currentVoltage - _lastVoltage > 200 && _currentVoltage < 700)
             || _currentVoltage - _standardVoltage > 50) {
        return AirQualitySensor::LOW_POLLUTION;
    }
    else {
        return AirQualitySensor::FRESH_AIR;
    }

    return -1;
}
```

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Air Quality Sensor to port A0 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

:::note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::
**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/cc_Air_Quality_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/cc_Air_Quality_Sensor.png" alt="pir" width={600} height="auto" /></p>

Upload the program to your Arduino/Seeeduino.

:::success
    When the code finishes uploaded, you will see air quality in the Serial Monitor.
:::

### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi | Grove - Air Quality Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={500} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={500} height="auto" /></p>|<img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" width={600} height="auto" />|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html)

- **Step 2**. Plug the Grove Base Hat into Raspberry Pi.
- **Step 3**. Connect the Grove - Air Quality Sensor to the A0 port of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.
![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect3.jpg)

#### Software

:::cautionattention
     If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3.** Excute below command to run the code.

```
cd grove.py/grove
python3 grove_air_quality_sensor_v1_3.py 0
```

Following is the grove_air_quality_sensor_v1_3.py code.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveAirQualitySensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)

Grove = GroveAirQualitySensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveAirQualitySensor(int(sys.argv[1]))

    print('Detecting ...') 
    while True:
        value = sensor.value        
        if value > 100:
            print("{}, High Pollution.".format(value))
        else:
            print("{}, Air Quality OK.".format(value))

        time.sleep(.1)

if __name__ == '__main__':
    main()

```

:::tipsuccess
    If everything goes well, you will be able to see the following result:
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_air_quality_sensor_v1_3.py 0 
Detecting ...
138, High Pollution.
139, High Pollution.
140, High Pollution.
141, High Pollution.
139, High Pollution.
140, High Pollution.
140, High Pollution.
140, High Pollution.
139, High Pollution.
138, High Pollution.
139, High Pollution.
138, High Pollution.
138, High Pollution.
^CTraceback (most recent call last):
  File "grove_air_quality_sensor_v1_3.py", line 71, in <module>
    main()
  File "grove_air_quality_sensor_v1_3.py", line 68, in main
    time.sleep(.1)
KeyboardInterrupt

```

You can use this sensor to detect the air quality. Press ++ctrl+c++ to quit.

:::note
        You may have noticed that for the analog port, the silkscreen pin number is something like **A1, A0**, however in the command we use parameter **0** and **1**, just the same as the digital port. So please make sure you plug the module into the correct port, otherwise, there may be pin conflicts.
:::

### Play With Raspberry Pi(with GrovePi_Plus)

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus |  Grove - Air Quality Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={500} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={500} height="auto" /></p>|<img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" width={600} height="auto" />|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)|

- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-MOSFET ranger to **A0** port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.

#### Software

- **Step 1.** Navigate to the demos' directory:

```
cd yourpath/GrovePi/Software/Python/
```

- **Step 2.**  To see the code

```
nano grove_air_quality_sensor.py   # "Ctrl+x" to exit #
```

```python
import time
import grovepi

# Connect the Grove Air Quality Sensor to analog port A0
# SIG,NC,VCC,GND
air_sensor = 0

grovepi.pinMode(air_sensor,"INPUT")

while True:
    try:
        # Get sensor value
        sensor_value = grovepi.analogRead(air_sensor)

        if sensor_value > 700:
            print "High pollution"
        elif sensor_value > 300:
            print "Low pollution"
        else:
            print "Air fresh"

        print "sensor_value =", sensor_value
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **Step 3.** Run the demo.

```
sudo python grove_air_quality_sensor.py
```

- **Step 4.** We will see the output display on terminal as below.

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/pi_result.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/pi_result.png" alt="pir" width={600} height="auto" /></p>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Library]** [AirQuality Sensor Library](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/AirQuality_Sensor.zip)
- **[Eagle]** [Grove_-_Air_quality_sensor_v1.3_sch_pcb](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip)
- **[PDF]** [Grove_-_Air_quality_sensor_v1.3_sch](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch.pdf)
- **[PDF]** [Air_quality_sensor_MP503_Chinese](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Air_quality_sensor_MP503%20Chinese.pdf)
- **[PDF]** [Air_quality sensor_MP503_English](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Mp503%20English.pdf)
- **[Codecraft]** [CDC File](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_Air_Quality_Sensor_CDC_File.zip)

## Projects

**SPCPM (Solar Powered City Pollution Monitor)**: Low maintenance, high output air pollution, sound pollution that put throughout the city without wiring.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/100181/spcpm-solar-powered-city-pollution-monitor-ca4072/embed' width='350'></iframe>

**A website to see the environment data around you**:

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/a-website-to-see-the-environment-data-around-you-1aea66/embed' width='350'></iframe>

**Home Control Center using BeagleBone Green Wireless**:

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/kevin-lee2/home-control-center-using-beaglebone-green-wireless-107a0d/embed" width={350} />

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
