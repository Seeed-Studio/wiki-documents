---
title: Grove - Temperature&Humidity Sensor (High-Accuracy &Mini) v1.0
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temperature&Humidity-Sensor-(High-Accuracy-&-Mini)-p-1921.html
oldwikiname: Grove_-_Tempture&Humidity_Sensor_(High-Accuracy_&Mini)_v1.0
prodimagename: Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/Grove Tem Hum Accuracy Mini.jpg
surveyurl: https://www.research.net/r/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1_0
sku: 101020074
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/master/img/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-.jpg)

This is a multifunctional sensor that gives you temperature and relative humidity information at the same time. It utilizes a TH02 sensor that can meet measurement needs of general purposes. It provides reliable readings when environment humidity condition in between 0-80% RH, and temperature condition in between 0-70°C, covering needs in most home and daily applications that don't contain extreme conditions.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html)

Specifications
--------------

-   Wide operating voltage range
    - (3.3V ~ 5V)
-   Low Power Consumption
    - 350 µA during RH conversion
-   0 to 100% RH operating range
-   Measuring Range:
    - Humidity: 0% - 80% RH
    - Temperature: 0 ~ 70 °C
-   Accuracy:
    - Humidity: ±4.5% RH
    - Temperature: ±0.5°C
-   I2C host interface
-   Excellent long term stability

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

Platforms Supported
-------------------

Applications
------------

-   Industrial HVAC/R
-   Thermostats/humidistats
-   Micro-environments/data centers

Demonstration
-------------

This demo is going to show you how to read temperature and humidity information from this Grove - Temperature&Humidity Sensor (High-Accuracy &Mini) Sensor.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/master/img/Temperature_Sensor-xin.jpg)
The Temperature and Humidity sensor is connecting to analog port I2C of Grove - Base Shield.

-   Download [Grove_Temper_Humidity_TH02 library](https://github.com/Seeed-Studio/Grove_Temper_Humidity_TH02) and install the library into Arduino libraries.

```
/*
 * Demo name  ?: TH02_dev demo
 * Usage      ?: DIGITAL I2C HUMIDITY AND TEMPERATURE SENSOR
 * Author     ?: Oliver Wang from Seeed Studio
 * Version    ?: V0.1
 */

#include <TH02_dev.h>
#include "Arduino.h"
#include "Wire.h"

void setup()
{
    Serial.begin(9600);        // start serial for output

    Serial.println("****TH02_dev demo by seeed studio****\n");
    /* Power up,delay 150ms,until voltage is stable */
    delay(150);
    /* Reset HP20x_dev */
    TH02.begin();
    delay(100);

    /* Determine TH02_dev is available or not */
    Serial.println("TH02_dev is available.\n");
}


void loop()
{
    float temper = TH02.ReadTemperature();
    Serial.println("Temperature: ");
    Serial.print(temper);
    Serial.println("C\r\n");

    float humidity = TH02.ReadHumidity();
    Serial.println("Humidity: ");
    Serial.print(humidity);
    Serial.println("%\r\n");
    delay(1000);
}
```


Upload it into your Arduino board and open the serial monitor to observe the temperature and relative humidity information of the environment.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/master/img/Result_Picture1.jpg)

Resources
---------

-   [Grove - Temperature&Humidity Sensor (High-Accuracy & Mini) V1.0 sch pcb](https://raw.githubusercontent.com/SeeedDocument/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/master/res/Grove-TemperatureAndHumidity_Sensor-High-Accuracy_And_Mini-V1.0_sch_pcb.zip)
-   [TH02_SENSOR.pdf](https://raw.githubusercontent.com/SeeedDocument/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/master/res/TH02_SENSOR.pdf)
-   [Grove_Temper_Humidity_TH02 library](https://github.com/Seeed-Studio/Grove_Temper_Humidity_TH02)



<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Tempture&Humidity_Sensor_(High-Accuracy_&Mini)_v1.0 -->
