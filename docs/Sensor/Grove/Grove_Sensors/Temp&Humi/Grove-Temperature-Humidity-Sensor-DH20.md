---
description: Grove - Temperature&Humidity Sensor(DHT20)
title: Grove - Temperature&Humidity Sensor(DHT20)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Temperature-Humidity-Sensor-DH20
last_update:
  date: 1/3/2023
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" /></div>

The new Grove - Temperature & Humidity Sensor is based on the DHT20 sensor. The DHT20 is an upgraded version of the DHT11, compared with the previous version, the temperature and humidity measurement accuracy are higher, and the measurement range is larger. It features I2C output which means it is easier to use.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

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

|Parameter |Value|
|---|---|
|Input Voltage|2.0 V – 5.5 V|
|Measuring Humidity Range|0 ~ 100% RH|
|Measuring Temperature Range|-40 ~ + 80 ℃ |
|Humidity Accuracy|± 3 % RH ( 25 ℃ )|
|Temperature Accuracy|± 0.5 ℃|
|Output Signal|I2C signal|

## Hardware Overview

### Pin Map

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pin-mode.jpg" /></div>

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoretical compatibility. We only provide software library or code examples for the Arduino platform in most cases. It is not possible to provide software library/demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield| Grove - Temperature & Humidity Sensor V2.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">Get One Now</a>|

- **Step 1.** Connect the Grove Temperature & Humidity Sensor V2.0 to port **I2C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC through a USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/zhanshitu4.png" /></div>

#### Software

:::note
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

Compared with DHT11, the DHT20 Temperature and Humidity Sensor has clear changes in supply voltage, measurement range of temperature and humidity, precision and quality of output signal.

It has equipped with a fully calibrated digital I2C interface, so there are slightly different definitions of pins. You should download and install the library [here](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) to use DHT20.

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

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Serial-Monitor.png" /></div>

And the output should be something like... :

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/output.png" /></div>

The values are based on the current environment.

## Play with MicroPython

### Connect RaspberryPi Pico

**Materials required**

| RaspberryPi Pico | Grove Shield for Pi Pico v1.0 | Grove - Temperature & Humidity Sensor V2.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https:///files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico1.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico-shield1.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png" /></div>
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)|

#### I2C Connection

- **Step 1.** Plug RaspberryPi Pico into Grove Shield for Pi Pico.

- **Step 2.**  Plug Grove - CO2 & Temperature & Humidity Sensor - SCD41 to **I2C1** port of Grove Shield for Pi Pico.

- **Step 3.** Connect RaspberryPi Pico to a PC through a USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico-connect.png" /></div>

This is the basic hardware connecting.

### Software

- **Step 1.** We need to use third-party library to control **Grove - Temperature & Humidity Sensor V2.0**

1. Download [dht20.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht20.py) library and save it to the computer.

2. Use Thonny to open the files, click on the "file" option at the top left, and then select "save as".

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny1.png" /></div>

3. Select "Raspberry Pi Pico" and save it in Pico.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny2.png" /></div>

:::note
Once we saving, Thonny will ask to name the file. Here we type "lcd1602.py" as its name, and we also need to type the extension of the file, or it can not be used.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/zhanshitu5.png" /></div>

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

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/zhanshitu6.png" /></div>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Grove-Temperature&Humidity-Sensor-V2.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[ZIP]** [Grove - Temperature & Humidity Sensor V2.0(DHT20)](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Pico-micropython-master.zip)

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
