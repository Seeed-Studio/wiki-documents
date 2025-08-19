---
description: TBD
title: Grove - VOC Gas Sensor (SGP40)
keywords:
- Grove
- SGP40
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_voc_gas_sensor_sgp40
last_update:
  date: 6/6/2023
  author: Stephen Lo
---

# Grove - VOC Gas Sensor (SGP40)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

The Grove - VOC Gas Sensor (SGP40) is an innovative environmental sensing module developed for a wide array of Volatile Organic Compound (VOC) detection applications. Based on the advanced Sensirion SGP40 sensor, it excels in transforming raw sensor signals into standardized digital signals for seamless integration into existing systems.

With its capability to perform high-quality VOC measurements in real-time, this sensor module provides a versatile solution for tracking and monitoring indoor air quality. Given the increasing awareness and need for monitoring air quality due to its direct correlation with health, the Grove - VOC Gas Sensor (SGP40) can be an essential component of systems targeted towards improving indoor air quality, personal environment monitoring, HVAC systems, industrial safety and any application where air quality assessment is pivotal.

Its compatibility with the Grove ecosystem facilitates an easy and straightforward setup process. The plug-and-play nature of Grove system allows developers to incorporate this module without needing to handle complicated wiring or intricate coding. This feature can significantly speed up development time and allows users to focus more on data interpretation and action steps based on the VOC measurements.

One of the key advantages of the Grove - VOC Gas Sensor (SGP40) is its communication protocol. The sensor module uses the I2C interface, a widely adopted protocol known for its simplicity and efficiency. This makes the data transfer process between the sensor and your main controller extremely smooth, enabling quick reaction times for applications where immediate actions based on VOC levels are crucial.

In sum, the Grove - VOC Gas Sensor (SGP40) is a compact, powerful, and easy-to-integrate module that makes the challenging task of VOC detection simpler and more accessible, opening doors for innovations and developments in environmental applications.


## Features

- Utilizes the Sensirion SGP40 sensor for reliable VOC detection.
- Easy integration into the Grove ecosystem, simplifying the wiring and coding process.
- Provides real-time VOC measurements for accurate air quality assessment.
- Communicates via I2C interface, allowing for efficient data transfer.
- Compact and modular design, perfect for embedding in various applications.

## Specification

- Operating Voltage: 3.3/5V
- Interface: I2C
- Dimensions: 20x40mm

## Applications

- Indoor air quality monitoring system: The Grove - VOC Gas Sensor can be used in buildings to monitor the air quality and ensure a healthy living or working environment.
- Personal environment monitoring device: The sensor can be used to create a portable device that allows individuals to monitor the air quality in their immediate environment.
- HVAC systems: The sensor can help regulate air quality in heating, ventilation, and air conditioning systems.
- Industrial safety: It can be used in factories and industrial sites to ensure worker safety by detecting harmful VOC levels.

## Hardware Overview

### Pin Map


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/pinmap.png" alt="pir" width={500} height="auto" /></p>


## Getting Started

:::note
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield| Grove - VOC Gas Sensor (SGP40) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/main.jpg" alt="pir" width={250} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html" target="_blank">Get One Now</a>|

:::note
**1.** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
**2.** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

- **Step 1.** Connect Grove - VOC Gas Sensor (SGP40) to **I2C** port  of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg" alt="pir" width={600} height="auto" /></p>


:::note
If we don't have Grove Base Shield, We also can directly connect Grove - Smart Air Quality Sensor (SGP41) to Seeeduino as below.
:::

| Seeeduino     | Grove - VOC Gas Sensor (SGP40) |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |

#### Software

- **Step 1.** Download the [SGP40 Arduino Library](https://github.com/Sensirion/arduino-i2c-sgp40) from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** After downloading and installing the library correctly, you can find an example program named `exampleUsage.ino` in the examples folder. This program is designed for the SGP40 sensor.

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp40.h>
#include <Wire.h>

SensirionI2CSgp40 sgp40;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sgp40.begin(Wire);

    uint16_t serialNumber[3];
    uint8_t serialNumberSize = 3;

    error = sgp40.getSerialNumber(serialNumber, serialNumberSize);

    if (error) {
        Serial.print("Error trying to execute getSerialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SerialNumber:");
        Serial.print("0x");
        for (size_t i = 0; i < serialNumberSize; i++) {
            uint16_t value = serialNumber[i];
            Serial.print(value < 4096 ? "0" : "");
            Serial.print(value < 256 ? "0" : "");
            Serial.print(value < 16 ? "0" : "");
            Serial.print(value, HEX);
        }
        Serial.println();
    }

    uint16_t testResult;
    error = sgp40.executeSelfTest(testResult);
    if (error) {
        Serial.print("Error trying to execute executeSelfTest(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else if (testResult != 0xD400) {
        Serial.print("executeSelfTest failed with error: ");
        Serial.println(testResult);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];
    uint16_t defaultRh = 0x8000;
    uint16_t defaultT = 0x6666;
    uint16_t srawVoc = 0;

    delay(1000);

    error = sgp40.measureRawSignal(defaultRh, defaultT, srawVoc);
    if (error) {
        Serial.print("Error trying to execute measureRawSignal(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SRAW_VOC:");
        Serial.println(srawVoc);
    }
}
```

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the result.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/result.png" alt="pir" width={800} height="auto" /></p>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_SGP40/Grove-VOC_Gas_Sensor(SGP40).rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[ZIP]** [Grove - VOC Gas Sensor (SGP40) SCH&PCB](https://files.seeedstudio.com/wiki/Grove_SGP40/Grove-VOC_Gas_Sensor(SGP40).zip)
- **[PDF]** [SGP40 Datasheet](https://files.seeedstudio.com/wiki/Grove_SGP40/Sensirion_Gas_Sensors_Datasheet_SGP40.pdf)


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



