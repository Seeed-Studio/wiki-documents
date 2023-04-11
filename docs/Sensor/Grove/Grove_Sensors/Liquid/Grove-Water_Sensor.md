---
description: Grove - Water Sensor
title: Grove - Water Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Water_Sensor
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_1.png" alt="pir" width={600} height="auto" /></p>


The Water Sensor module is part of the Grove system. It indicates whether the sensor is dry, damp or completely immersed in water by measuring conductivity. The sensor traces have a weak pull-up resistor of 1 MΩ. The resistor will pull the sensor trace value high until a drop of water shorts the sensor trace to the grounded trace. Believe it or not this circuit will work with the digital I/O pins of your Arduino or you can use it with the analog pins to detect the amount of water induced contact between the grounded and sensor traces.


<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)

## Version

| Product Version              | Changes                                                                                                                                                                                    | Released Date |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Water Sensor V1.1 | Initial                                                                                                                                                                                    | July 2014      |


## Features


- Grove compatible interface
- Low power consumption
- 2.0cm x 2.0cm Grove module
- High sensitivity

## Applications Ideas

- Rainfall detecting
- Liquid leakage
- Tank overflow detector

## Specifications

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Min
</th>
<th scope="col">
Typical
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unit
</th>
</tr>
<tr align="center">
<th scope="row">
Working Voltage
</th>
<td>
4.75
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Current
</th>
<td colspan="3">
&lt;20
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Working Temperature
</th>
<td>
10
</td>
<td>
-
</td>
<td>
30
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Working Humidity (without condensation)
</th>
<td>
10
</td>
<td>
-
</td>
<td>
90
</td>
<td>
 %
</td>
</tr>
</table>

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
## Platforms Supported


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

:::note
    If this is the first time you work with Arduino, we firmly recommend you to see Getting Started with Arduino before the start.
:::
### Play With Arduino

#### Hardware

Connect the module to the Basic board using any of the digital pin. You can gain the value of the signal pin. When there is water on the bare conducting wires, the value is LOW. Otherwise, it will be HIGH.

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove - Water Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)|

- **Step 2.** Connect Water Sensor to port D2 of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/3.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	If we don't have Grove Base Shield, We also can directly connect Grove_Water_Sensor to Seeeduino as below.
:::
| Seeeduino       | Grove - Water Sensor |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D2            | Yellow                  |

#### Software
- **Step 1.** Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

```c
#define WATER_SENSOR 2

void setup()
{
  Serial.begin (9600);
  pinMode(WATER_SENSOR, INPUT);
}
void loop()
{
  Serial.println(digitalRead(WATER_SENSOR));
  delay(500);
}

```
- **Step 2.** We will see the output display on terminal as below.

```c
1
1
0
0
1
1
```

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Water Sensor to port D2 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

:::note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::
**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/cc_Water_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/cc_Water_Sensor.png" alt="pir" width={600} height="auto" /></p>

Upload the program to your Arduino/Seeeduino.

:::success
    When the code finishes uploaded, you will see there is water or not in Serial Monitor.
:::
### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Water Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)

- **Step 2**. Plug the Grove Base Hat into Raspberry Pi.
- **Step 3**. Connect the Grove - Water Sensor to to the A0 port of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/with_rpi_basehat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/with_rpi_basehat.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3.** Excute below command to run the code.

```
cd grove.py/grove
python grove_water_sensor.py 0
```


Following is the grove_water_sensor.py code.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveWaterSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)

Grove = GroveWaterSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveWaterSensor(int(sys.argv[1]))

    print('Detecting ...') 
    while True:
        value = sensor.value        
        if sensor.value > 800:
            print("{}, Detected Water.".format(value))
        else:
            print("{}, Dry.".format(value))

        time.sleep(.1)

if __name__ == '__main__':
    main()


```


:::success
    If everything goes well, you will be able to see the following result
:::
```python

pi@raspberrypi:~/grove.py/grove $ python grove_water_sensor.py 0
Detecting ...
612, Dry.
749, Detected Water.
829, Dry.
357, Dry.
98, Dry.
352, Dry.
517, Dry.
718, Detected Water.
868, Detected Water.
581, Dry.
90, Dry.
326, Dry.
451, Dry.
666, Dry.
867, Detected Water.
684, Dry.
100, Dry.
^CTraceback (most recent call last):
  File "grove_water_sensor.py", line 71, in <module>
    main()
  File "grove_water_sensor.py", line 62, in main
    value = sensor.value        
  File "grove_water_sensor.py", line 48, in value
    return self.adc.read(self.channel)
  File "/usr/local/lib/python2.7/dist-packages/grove/adc.py", line 66, in read
    return self.read_register(addr)
  File "/usr/local/lib/python2.7/dist-packages/grove/adc.py", line 84, in read_register
    return self.bus.read_word_data(self.address, n)
  File "/home/pi/.local/lib/python2.7/site-packages/smbus2/smbus2.py", line 396, in read_word_data
    ioctl(self.fd, I2C_SMBUS, msg)
KeyboardInterrupt


```

You can use this sensor to detect the water. Press ++ctrl+c++ to quit.


:::note
        You may have noticed that for the analog port, the silkscreen pin number is something like **A1, A0**, however in the command we use parameter **0** and **1**, just the same as digital port. So please make sure you plug the module into the correct port, otherwise there may be pin conflicts.
:::

### Play With Raspberry Pi(with GrovePi_Plus)

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove - Water Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)|


- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-Water Sensor to **D2** port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/7.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/7.jpg" alt="pir" width={600} height="auto" /></p>


#### Software

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- **Step 2.** Navigate to the demos' directory:

```
cd yourpath/GrovePi/Software/Python/
```

-	**Step 3.** To see the code

```
nano grove_water_sensor.py
```

```python
import time
import grovepi

# Connect the Grove Water Sensor to digital port D2
# SIG,NC,VCC,GND
water_sensor = 2

grovepi.pinMode(water_sensor,"INPUT")

while True:
    try:
        print grovepi.digitalRead(water_sensor)
        time.sleep(.5)

    except IOError:
        print "Error"
```

-	**Step 4.** Run the demo.

```
sudo python grove_water_sensor.py
```

- **Step 5.** We will see the output display on terminal as below.

```
1
1
0
0
1
```


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Water_sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources

- **[Eagle]** [Grove Water Sensor Schematic](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Water_sensor.zip)
- **[Library]** [Demo code for Grove Water Sensor](https://github.com/Seeed-Studio/Grove_Water_Sensor)
- **[Codecraft]** [CDC File](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Grove_Water_Sensor_CDC_File.zip)

<!-- This Markdown file was created from https://wiki.seeedstudio.com/Grove-Water_Sensor/ -->

## Project 

**Smart Crops: Implementing IoT in Conventional Agriculture!**:Our mission with nature is to preserve it, designing and implementing technologies and monitoring methods with the help of IoT via Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>