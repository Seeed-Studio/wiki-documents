---
name: Grove - CO2 & Temperature & Humidity Sensor - SCD41
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 101020932
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit
---



![](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg)


The new Grove - Temperature & Humidity Sensor is based on the DHT20 sensor. The DHT20 is an upgraded version of the DHT11, compared with the previous version, the temperature and humidity measurement accuracy are higher, and the measurement range is larger. It features I2C output which means it is easier to use.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

 - High Accuracy:
   - Temperature Accuracy:± 0.5 ℃
   - Humidity Accuracy:± 3 % RH ( 25 ℃ )
 - Wide measurement ranges:
   - Measuring Range (Humidity):0 ~ 100% RH
   - Measuring Range (Temperature):-40 ~ + 80 ℃
 - Better compatibility：
   - Digital output
   - I²C interface
 - Fully calibrated
 - Excellent long-term stability
 - Quick response and anti-interference capability
 - Wide voltage support 2.5-5.5V DC



## Specification

|Parameter	|Value|
|---|---|
|Input Voltage|2.0 V – 5.5 V|
|Measuring Humidity Range|0 ~ 100% RH|
|Measuring Temperature Range|-40 ~ + 80 ℃ |
|Humidity Accuracy|± 3 % RH ( 25 ℃ )|
|Temperature Accuracy|± 0.5 ℃|
|Output Signal|I2C signal|


## Hardware Overview

### Pin Map

![](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pin-mode.jpg)


## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoretical compatibility. We only provide software library or code examples for the Arduino platform in most cases. It is not possible to provide software library/demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting Started

### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield| Grove - Temperature & Humidity Sensor V2.0 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">Get One Now</a>|


- **Step 1.** Connect the Grove Temperature & Humidity Sensor V2.0 to port **I2C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC through a USB cable.


![](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/zhanshitu4.png)


#### Software

!!!Note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

Compared with DHT11, the DHT20 Temperature and Humidity Sensor has clear changes in supply voltage, measurement range of temperature and humidity, precision and quality of output signal. 

It has equipped with a fully calibrated digital I2C interface, so there are slightly different definitions of pins. You should download and install the library [here](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Grove_Temperature_And_Humidity_Sensor-master.zip) to use DHT20. 

Once it is all set up, we can upload the sample code to see if it works:

```C++
// Example testing sketch for various DHT humidity/temperature sensors
// Written by ladyada, public domain
#include "Wire.h"
#include "DHT.h"
#define DHTTYPE DHT20   // DHT 20
/*Notice: The DHT10 and DHT20 is different from other DHT* sensor ,it uses i2c interface rather than one wire*/
/*So it doesn't require a pin.*/
DHT dht(DHTTYPE);         //   DHT10 DHT20 don't need to define Pin

#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

void setup() {

    debug.begin(115200);
    debug.println("DHTxx test!");
    Wire.begin();

    /*if using WIO link,must pull up the power pin.*/
    // pinMode(PIN_GROVE_POWER, OUTPUT);
    // digitalWrite(PIN_GROVE_POWER, 1);

    dht.begin();
}

void loop() {
    float temp_hum_val[2] = {0};
    // Reading temperature or humidity takes about 250 milliseconds!
    // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)


    if (!dht.readTempAndHumidity(temp_hum_val)) {
        debug.print("Humidity: ");
        debug.print(temp_hum_val[0]);
        debug.print(" %\t");
        debug.print("Temperature: ");
        debug.print(temp_hum_val[1]);
        debug.println(" *C");
    } else {
        debug.println("Failed to get temprature and humidity value.");
    }

    delay(1500);
}
```

After done uploading, we can use Serial Monitor in Arduino to see the result.

![](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Serial-Monitor.png)

And the output should be something like... :

![](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/output.png)

The values are based on the current environment.

## Play with MicroPython

### Connect RaspberryPi Pico

**Materials required**


| RaspberryPi Pico | Grove Shield for Pi Pico v1.0 | Grove - Temperature & Humidity Sensor V2.0 |
|--------------|-------------|-----------------|
|![enter image description here](https:///files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico1.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico-shield1.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png)
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)|

#### I2C Connection

- **Step 1.** Plug RaspberryPi Pico into Grove Shield for Pi Pico.

- **Step 2.**  Plug Grove - CO2 & Temperature & Humidity Sensor - SCD41 to **I2C1** port of Grove Shield for Pi Pico.

- **Step 3.** Connect RaspberryPi Pico to a PC through a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico-connect.png)

This is the basic hardware connecting.

### Software

- **Step 1.** We need to use third-party library to control **Grove - Temperature & Humidity Sensor V2.0**

1. Download [dht20.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht20.py) library and save it to the computer.

2. Use Thonny to open the files, click on the "file" option at the top left, and then select "save as".

![](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny1.png)

3. Select "Raspberry Pi Pico" and save it in Pico.

![](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny2.png)

!!!Note
         Once we saving, Thonny will ask to name the file. Here we type "lcd1602.py" as its name, and we also need to type the extension of the file, or it can not be used.

![](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/zhanshitu5.png)

- **Step 2.** Upload the code.

```c++
from machine import I2C
from dht20 import DHT20
i2c = I2C(0)
dht20 = DHT20(i2c)
while True:
    temper = dht20.dht20_temperature()
    humidity = dht20.dht20_humidity()
    print("temper : " + str(temper))
    print("humidity : " + str(humidity))
```

- **Step 3.** The result should look like:

![](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/zhanshitu6.png)


                                                    
## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Grove-Temperature&Humidity-Sensor-V2.1.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;">
</div>



## Resources

- **[ZIP]** [Grove - Temperature & Humidity Sensor V2.0(DHT20)](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Pico-micropython-master.zip)

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>