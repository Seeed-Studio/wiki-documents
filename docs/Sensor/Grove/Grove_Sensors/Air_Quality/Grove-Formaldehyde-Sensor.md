---
description: Grove - Formaldehyde sensor
title: Grove - Formaldehyde sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Formaldehyde-Sensor
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - Formaldehyde sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html
oldwikiname: Grove - PIR Motion Sensor
prodimagename: Breakout_for_LinkIt_Smart_7688_v2.0_product_view_700.jpg
surveyurl: https://www.surveymonkey.com/r/grove-pir-motion-sensor
sku: 101020972
tags: io_3v3, io_5v, plat_duino, plat_pi
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/101020972_Front-05.jpg)

Grove Formaldehyde Sensor can detect formaldehyde around 0~1000 ppb with low cross-sensitivity to alcohol and high stability of 6 years lifetime. Built-in RHT sensor ensures it maintains fine performance under different temperatures and humidity and it transmits data through UART and I2C ports.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html)

## Features

- Low cross-sensitivity to alcohol
- Standard formaldehyde measurement range: 0 ~ 1000 ppb
- Long-term stability and 6 years’ service lifetime
- Patented electrochemical cell with anti-dry technology
- I2C/UART interface with lifetime-calibrated output
- Maintain performance under different temperatures and humidity: compensated via Sensirion RHT sensor

## Specification

|Parameter|Value/Range
|---|---|
|Supply voltage range|3.3V or 5V
|Measurement range|0 to 1,000 ppb
|Response time|<2 min
|Limit of detection|<20 ppb
|Interface|I2C / UART
|Formaldehyde accuracy|±20 ppb or ±20% of measured value, whichever is larger

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

:::note
If this is the first time you work with Arduino, we highly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

### Play With Arduino

**Hardware**

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove-Formaldehyde Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|   [Get One Now](https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html)    |

- **Step 2.** Set the button on the Grove-Formaldehyde Sensor to the **"1"** position.

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/hardware1.png)

- **Step 3.** Plug Grove - Base Shield into Seeeduino and set Grove-Formaldehyde Sensor to **I²C** port of Grove-Base Shield
- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/Arduous-link.jpg)

:::note
If you don't have Grove Base Shield, it still can be directly connected Grove-Formaldehyde Sensor to Seeeduino as below.
:::

| Seeeduino |  Grove-Loudness Sensor |
|-----------|-----------------|
| 5V        | Red             |
| GND       | Black           |
| SDA       | White           |
| SCL       | Yellow          |

**Software**

- **Step 1.** Download the [Grove-Formaldehyde Sensor Library](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/Grove-Formaldehyde-Sensor-SFA30.zip) for the usage of Grove Formaldehyde Sensor and [install](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/) it.

- **Step 2.** Open the Arduino IDE. Copy below codes to Arduio IDE and upload it. If you do not know how to upload the codes, here we have some guides about [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

```c++
#include <Arduino.h>
#include <SensirionI2CSfa3x.h>
#include <Wire.h>

SensirionI2CSfa3x sfa3x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sfa3x.begin(Wire);

    // Start Measurement
    error = sfa3x.startContinuousMeasurement();
    if (error) {
        Serial.print("Error trying to execute startContinuousMeasurement(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);
    int16_t hcho;
    int16_t humidity;
    int16_t temperature;
    error = sfa3x.readMeasuredValues(hcho, humidity, temperature);
    if (error) {
        Serial.print("Error trying to execute readMeasuredValues(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Hcho:");
        Serial.print(hcho / 5.0);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.print(humidity / 100.0);
        Serial.print("\t");
        Serial.print("Temperature:");
        Serial.println(temperature / 200.0);
    }
}
```

- **Step 4.** In this program, Seeeduino can monitor the formaldehyde gas concentration, air humidity and temperature data in real-time. By opening the 'Serial Monitor', the results should be like:

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/test.png)

### Play With Raspberry Pi

**Hardware**

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | Grove Base Hat for Raspberry Pi | Grove-Formaldehyde Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html)|

- **Step 2.** Plug the Grove Base Hat for Raspberry Pi into Raspberry Pi.
- **Step 3.** Connect Grove-Dust Sensor to **I²C** port of Grove Base Hat for Raspberry Pi.
- **Step 4.** Connect the Raspberry Pi to PC through a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/raspberry-link.jpg)

**Software**

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment of Resberry Pi.
- **Step 2.** Download the [Grove-Formaldehyde Sensor Library](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/embedded-sfa3x-main.zip) and unzip it to the Raspberry Pi.

- **Step 3.** Navigate to the demos' directory. The following command can monitor the concentration of formaldehyde, humidity and temperature.

```python
cd ~/embedded-sfa3x-main/i2c
make
./sfa3x_i2c_example_usage
```

:::tip
In this wiki we use the path **~/embedded-sfa3x-main/i2c** instead of **/home/pi/Desktop/embedded-sfa3x-main/i2c**, you need to make sure Step 2 and Step 3 use the same path.
:::

Here is the **sfa3x_i2c_example_usage.c** code.

```C
#include <stdio.h>  // printf

#include "sensirion_common.h"
#include "sensirion_i2c_hal.h"
#include "sfa3x_i2c.h"

/**
 * TO USE CONSOLE OUTPUT (PRINTF) IF NOT PRESENT ON YOUR PLATFORM
 */
//#define printf(...)

int main(void) {
    int16_t error = 0;

    sensirion_i2c_hal_init();

    error = sfa3x_device_reset();
    if (error) {
        printf("Error resetting device: %i\n", error);
        return -1;
    }

    uint8_t device_marking[42];
    error = sfa3x_get_device_marking(&device_marking[0], sizeof(device_marking));
    if (error) {
        printf("Error getting device marking: %i\n", error);
        return -1;
    }
    printf("Device marking: %s\n", device_marking);

    // Start Measurement
    error = sfa3x_start_continuous_measurement();
    if (error) {
        printf("Error executing sfa3x_start_continuous_measurement(): %i\n",
               error);
    }

    for (;;) {
        // Read Measurement

        int16_t hcho;
        int16_t humidity;
        int16_t temperature;

        sensirion_i2c_hal_sleep_usec(500000);

        error = sfa3x_read_measured_values(&hcho, &humidity, &temperature);

        if (error) {
            printf("Error executing sfa3x_read_measured_values(): %i\n", error);
        } else {
            printf("Measurement:\n");
            printf("  Formaldehyde concentration: %.1f\n", hcho / 5.0f);
            printf("  Relative humidity: %.2f\n", humidity / 100.0f);
            printf("  Temperature: %.2f\n", temperature / 200.0f);
        }
    }

    error = sfa3x_stop_measurement();
    if (error) {
        printf("Error executing sfa3x_stop_measurement(): %i\n", error);
    }

    return 0;
}

```

:::tipsuccess
If everything goes well, the following results can be displayed like:
:::

```python
pi@raspberrypi:~/Downloads/embedded-sfa3x-main/i2c $ ./sfa3x_i2c_example_usage
Device marking: 211117825F073B80
Measurement:
  Formaldehyde concentration: 0.0
  Relative humidity: 70.19
  Temperature: 27.41
```

You can quit this program by simply press ++ctrl+c++.

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
