---
description: Grove - Temperature & Humidity Sensor(SHT4x)
title: Grove - Temperature & Humidity Sensor(SHT4x)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-SHT4x
last_update:
  date: 1/4/2022
  author: jianjing Huang
---


# Grove - Temperature & Humidity Sensor

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4x.jpeg" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/grove-temp-humi-sensor-sht40-p-5384.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## Introduction

This Grove SHT40 digital sensor is based on Sensirion's industry-proven humidity and temperature sensors. It can provide constant temperature and humidity accuracy over an extensive measurement range And with the grove platform, you are ready to plug and play the SHT4x sensor on any microcontroller (Arduino) or microprocessor (Raspberry Pi).

## Hardware Overview

Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of Grove - Temperature & Humidity Sensor.

<table border="0">
<tbody>
<tr>
<td><strong>Parameter       </strong></td>
<td><strong>Rating</strong></td>
</tr>
<tr>
<td>Temperatur accuracy rate</td>
<td>±0.2 ℃</td>
</tr>
<tr>
<td>Humidity accuracy rate </td>
<td>±1.8% RH</td>
</tr>
<tr>
<td>Operating temperature range  </td>
<td>-40°C to 125°C</td>
</tr>
<tr>
<td>Operating Humidity range       </td>
<td>0% to 100% RH</td>
</tr>
<tr>
<td>Grove power supply            </td>
<td>5/3.3 v</td>
</tr>
<tr>
<td>Serial Protocol</td>
<td>I2C </td>
</tr>
<tr>
<td>Grove average current </td>
<td>32 µA</td>
</tr>
<tr>
<td>Grove idle current</td>
<td>1.2µA</td>
</tr>
<tr>
<td>Product Dimension</td>
<td>20mm x 40mm</td>
</tr>
<tr>
<td>Communication</td>
<td>IIC</td>
</tr>
<tr>
<td>Rate</td>
<td>115200</td>
</tr>
</tbody>
</table>

## Getting Started

Now we can set up the module and detect humidity and temperature.

### Preparation

**Hardware**

- Grove - Temperature & Humidity Sensor
- Windows host PC or MacOS PC (Win 10 & MacOS 12.2 tested)
- Type-C cable

**Software**

- [Arduino Software](https://www.arduino.cc/)
- [Module library](https://github.com/Sensirion/arduino-i2c-sht4x)

## Arduino Library Overview

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

The library we use here is published on the Github, including the example.

<p style={{textAlign: 'center'}}><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank"><img src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></a></p>

### Function

- `Serial.begin(115200);` —— The number here means the rate is set up at 115200. When we upload the code, it is required to set up rate as 115200 while monitor openning

### Installation

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>

### Upgrading the Package

For the sake of product continuity, we may optimize and upgrade the product library at a later stage. According to the two library installation methods provided above, there are also two ways to update the library for reference.

We will be the first to update GitHub when the library is optimized. You can delete the original library folder in your computer's folder, then download the latest version from GitHub, unzip it and put it in the Arduino IDE library directory. (**...\Arduino\libraries. ....** is the path you setup Arduino)

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png" /></div>

## Arduino Example

Now that we have our library installed and we understand the basic functions, let's run some examples for our Grove - Temp & Humidi Sensor to see how it behaves.

**Prerequisite**

| Seeeduino V4.2 | Base Shield | Grove - Temp & Humidi Sensor|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width="{210}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4x.jpeg" /></div>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/grove-temp-humi-sensor-sht40-p-5384.html)|

**Step 1.**  Connect the hardware like below, and focus on the IIC port connection:

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4xconnection.png" /></div>

**Step 2.** You need to Install an Arduino Software.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width = "{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

**Step 3.** Launch the Arduino application.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Step 4.** Negative to "file-->examples-->Sensirion IIC Sen4x-->exampleUsage" and open the example provided in the library. You can also copy the code below:

```c++
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

SensirionI2CSht4x sht4x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Temperature:");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.println(humidity);
    }
}
```

**Step 5.** Upload the code to Arduino software and click the "monitor" on the upper right corner. The monitor result might show up like:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4xoutput.png" /></div>

## Resources

- **[PDF]** [SHT4x Datasheet](https://files.seeedstudio.com/wiki/SHT4x/SHT4x_Datasheet.pdf)

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
