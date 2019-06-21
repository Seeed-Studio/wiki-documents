---
name: Grove - Temperature&Humidity Sensor(SHT31)
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temperature&Humidity-Sensor-(SHT31)-p-2655.html
oldwikiname: Grove_-_Temp&Humi_Sensor(SHT31)
prodimagename: Grove-TempAndHumi_Sensor-SHT31-Product_View_700_S.jpg
bzprodimageurl: https://statics3.seeedstudio.com/seeed/master/img/2016-06/bytoMkAMziVhHKidWvUshZYm.jpg
surveyurl: https://www.research.net/r/Grove-TempAndHumi_Sensor-SHT31
sku: 101020212
---

<p style=":center"><img src="https://github.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/raw/master/img/main_new.jpg" /></p>

Grove - Temp&Humi Sensor(SHT31) is a highly reliable, accurate, quick response and integrated temperature & humidity sensor. The sensor(chip) used in the module is designed with Sensirion's CMOSens<sup>®</sup> technology. The chip is well calibrated, linearized and compensated for digital output.

The typical accuracy of this module can be **±2%RH** (for relative humidity) and **±0.3°C** (for temperature). This module is compatible with 3.3 Volts and 5 Volts and hence does not require a voltage level shifter. This module communicates using with I<sup>2</sup>C serial bus and can work up to 1 MHz speed. We also have provided a highly abstracted library to make this product more easier to use.

Using the sensor is easy. For [Seeeduino](http://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7) (compliant with Arduino), just connect this breakout board with the main control board via [Grove cable](http://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57). Then use the provided library and example/demo code available at GitHub to get your data. If you're using an Arduino without a Base Shield, simply connect the VIN pin to the 5V voltage pin, GND to ground, SCL to I2C Clock (Analog 5) and SDA to I2C Data (Analog 4).

<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style=":center"><a href="http://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-SHT31-p-2655.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version              | Changes                                                                                                                                                                                    | Released Date |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - Temperature&Humidity Sensor(SHT31) V1.0 | Initial                                                                                                                                                                                    | Jan 2016      |

## Features

-   Highly reliable, accurate and quick response time
-   Grove compatible and easy to use
-   Well calibrated, linearized, compensated for digital output
-   Highly abstracted development library
-   I2C Address  0x44

!!!Note
    If you want to use multiplue I2C devices, please refer to [Software I2C](http://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/).

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Specifications


| Parameter                | Value                                                                                                        |
|--------------------------|--------------------------------------------------------------------------------------------------------------|
| Input voltage (VCC)      | 3.3 volts or 5 volts                                                                                         |
| I/O Logic Level          | 3.3 volts or 5 volts based on VCC                                                                            |
| Operating Current        | 100 μA                                                                                                       |
| Operating Temperature    | -40–125 ℃                                                                                                                                                                                                                                                                         |
| Temperature Sensor Range | -40–125 ℃, with ±0.3°C accuracy                                                                              |
| Humidity Sensor Range    | 0% - 100%(Relative Humidity), with ±2% accuracy                                                              |
| Sensor Chip              | SHT31([Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)) |
| Port            | I<sup>2</sup>C                                                                                               |
| Weight                   | 4 g (for breakout board), 9 g for whole package each piece                                                   |
| Dimensions               | 40(length)×20(width) mm                                                                                      |

## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.

### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove - Temp&Hum Sensor(SHT31) |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/raw/master/img/thumbnail.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](http://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-SHT31-p-2655.html)|

- **Step 2.** Connect Grove - Temperature&Humidity Sensor(SHT31) to I2C port of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.
![](https://github.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/raw/master/img/arduino_connect.jpg)

## Hardware Overview

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/img/Grove-TempAndHumi_Sensor-SHT31-components_1200_s.jpg)

<div class="admonition caution">
<p class="admonition-title">Caution</p>
Do not touch, shake or let this product vibrate while using. Otherwise, it will affect the accuracy of data measured.
</div>

!!!Note
	If we don't have Grove Base Shield, We also can directly Grove - Temperature&Humidity Sensor(SHT31) to Seeeduino as below.

| Seeeduino       | Grove - Temperature&Humidity Sensor(SHT31) |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |

#### Software

- **Step 1.** Download the [Library](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor) from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open a new sketch, and copy the following code into the new sketch.

```C
#include <Arduino.h>
#include <Wire.h>
#include "SHT31.h"

SHT31 sht31 = SHT31();

void setup() {  
  Serial.begin(9600);
  while(!Serial);
  Serial.println("begin...");  
  sht31.begin();  
}

void loop() {
  float temp = sht31.getTemperature();
  float hum = sht31.getHumidity();
  Serial.print("Temp = "); 
  Serial.print(temp);
  Serial.println(" C"); //The unit for  Celsius because original arduino don't support speical symbols
  Serial.print("Hum = "); 
  Serial.print(hum);
  Serial.println("%"); 
  Serial.println();
  delay(1000);
}
```

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **9600**. If every thing goes well, you will get the results.


The result should be like:

![](https://github.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/raw/master/img/RESULT.png)


### Play With Raspberry Pi

#### Hardware

- **Step 1.** Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Temp&Hum Sensor(SHT31)|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/raw/master/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|

- **Step 2.** Plug the Grove Base Hat into Raspberry.
- **Step 3.** Connect the Grove - Temperature&Humidity Sensor (SHT31) to the **I^2^C** port of the Base Hat.
- **Step 4.** Connect the Raspberry Pi to PC through USB cable.

![](https://github.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/raw/master/img/SHT31_Hat.jpg)

#### Software

- **Step 1.** Follow [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2.** Download the source file by cloning the grove.py library. 

```

cd ~
git clone https://github.com/Seeed-Studio/grove.py


```

- **Step 3.** Excute below command to run the code.

```

cd grove.py/grove
python grove_temperature_humidity_sensor_sht3x.py 

```

Following is the grove_temperature_humidity_sensor_sht3x.py code.

```python


import time
from grove.i2c import Bus


def CRC(data):
    crc = 0xff
    for s in data:
        crc ^= s
        for _ in range(8):
            if crc & 0x80:
                crc <<= 1
                crc ^= 0x131
            else:
                crc <<= 1
    return crc


class GroveTemperatureHumiditySensorSHT3x(object):

    def __init__(self, address=0x44, bus=None):
        self.address = address

        # I2C bus
        self.bus = Bus(bus)

    def read(self):
        # high repeatability, clock stretching disabled
        self.bus.write_i2c_block_data(self.address, 0x24, [0x00])

        # measurement duration < 16 ms
        time.sleep(0.016)

        # read 6 bytes back
        # Temp MSB, Temp LSB, Temp CRC, Humididty MSB, Humidity LSB, Humidity CRC
        data = self.bus.read_i2c_block_data(self.address, 0x00, 6)

        if data[2] != CRC(data[:2]):
            raise ValueError("temperature CRC mismatch")
        if data[5] != CRC(data[3:5]):
            raise ValueError("humidity CRC mismatch")


        temperature = data[0] * 256 + data[1]
        celsius = -45 + (175 * temperature / 65535.0)
        humidity = 100 * (data[3] * 256 + data[4]) / 65535.0

        return celsius, humidity


Grove = GroveTemperatureHumiditySensorSHT3x


def main():
    sensor = GroveTemperatureHumiditySensorSHT3x()
    while True:
        temperature, humidity = sensor.read()

        print('Temperature in Celsius is {:.2f} C'.format(temperature))
        print('Relative Humidity is {:.2f} %'.format(humidity))

        time.sleep(1)


if __name__ == "__main__":
    main()


```

!!!success
     If everything goes well, you will be able to see temperature and humidity
     
```python

pi@raspberrypi:~/grove.py/grove $ python grove_temperature_humidity_sensor_sht3x.py 
Temperature in Celsius is 21.48 C
Relative Humidity is 51.32 %
Temperature in Celsius is 21.47 C
Relative Humidity is 51.34 %
Temperature in Celsius is 21.46 C
Relative Humidity is 51.37 %
^CTraceback (most recent call last):
  File "grove_temperature_humidity_sensor_sht3x.py", line 95, in <module>
    main()
  File "grove_temperature_humidity_sensor_sht3x.py", line 91, in main
    time.sleep(1)
KeyboardInterrupt


```


## Resources

- **[EAGLE]** [Grove - Temperature&Humidity Sensor(SHT31) PCB files and PDF schematic](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/res/Grove-TempAndHumi_Sensor-SHT31-v1.0_Schematics.zip)
- **[Datasheet]** [SHT31 Sensor Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-TempAndHumi_Sensor-SHT31/master/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip)
- **[Library]** [Library and example code](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor)
- **[MoreReading]** [I<sup>2</sup>C How-to for Arduino](https://www.arduino.cc/en/Reference/Wire)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Temp&Humi_Sensor(SHT31) -->

## Projects

**MediaTek Open Source Hardware Plant Health Monitor**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/shanek/mediatek-open-source-hardware-plant-health-monitor-3390f5/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>