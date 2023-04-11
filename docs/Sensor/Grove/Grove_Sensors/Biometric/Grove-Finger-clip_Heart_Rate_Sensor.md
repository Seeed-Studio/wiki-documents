---
description: Grove - Finger-clip Heart Rate Sensor
title: Grove - Finger-clip Heart Rate Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Finger-clip_Heart_Rate_Sensor
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Grove-Finger-clip_Heart_Rate_Sensor.jpg" /></div>

Grove - Finger-clip Heart Rate Sensor is based on PAH8001EI-2G, a high performance and low power CMOS-process optical sensor with Green LED and DSP integrated serving as a Heart Rate Detection(HRD) sensor. This module is based on optical technology which measures the variation human blood movement in the vessel. Low power consumption and flexible power saving mode make it suitable for wearable device. Cause the heart rate sensor chip need high processing speed for the algorithm of heart rate data(), this module integrate a STM32, reserved SWD interface allow users to reprogram the STM32.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Specification

---

* Ultra-low power consumption, power saving mode during time of no touch movement

* Flexible sleep rate control

* Integrated the STM32F103

* I2C interface

* Heart rate sensor area just 3.0 x 4.7mm

* Reserved SWD interface

* Working temperature: -20 ~ +60℃

## Interface Function

---
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_TOP.jpg" /></div>
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_Bottom.jpg" /></div>

* 1: Grove Interface

* 2: Reserved SWD Interface for programming to STM32

* 3: Heart Rate Sensor

## Usage

---
Here, We will provide an example here to show you how to use this sensor.

### Hardware Installation

Link the Sensor to I2C port of Seeeduino with Grove Cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_Connect.jpg" /></div>

### Software Part

#### With Arduino

**Hardware Serial**

Copy the following code into a new sketch of Arduino and upload the sketch, then you can get heart rate from the Serial Monitor.
It may take about a minute to get valid heart rate after you touch your finger with sensor.

```c++
#include <Wire.h>
void setup() {
    Serial.begin(9600);
    Serial.println("heart rate sensor:");
    Wire.begin();
}
void loop() {
    Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device
    while(Wire.available()) {          // slave may send less than requested
        unsigned char c = Wire.read();   // receive heart rate value (a byte)
        Serial.println(c, DEC);         // print heart rate value
    }
    delay(500);
}
```

**Software Serial**

The standard I2C library for the Arduino is the Wire Library. While this library does not work when the I2C pins SDA/SCL are in use already for other purposes. So you can use the SoftwareI2C. You can connect the SCL to D2 and SDA to D3. Please download the [SoftI2CMaster library](https://github.com/felias-fogg/SoftI2CMaster) and follow [How to install arduino library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/) to setup the library. Copy the following code into a new sketch of Arduino and upload the sketch, then you can get heart rate from the Serial Monitor.
It may take about a minute to get valid heart rate after you touch your finger with sensor.

```c++
#define SDA_PORT PORTD
#define SDA_PIN 3
#define SCL_PORT PORTD
#define SCL_PIN 2
#include <SoftI2CMaster.h>
#include <SoftWire.h>
SoftWire Wire = SoftWire();

void setup() {
    Serial.begin(9600);
    Serial.println("heart rate sensor:");
    Wire.begin();
}
void loop() {
    Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device
    while(Wire.available()) {          // slave may send less than requested
        unsigned char c = Wire.read();   // receive heart rate value (a byte)
        Serial.println(c, DEC);         // print heart rate value
    }
    delay(500);
}
```

#### With Mbed

Read a byte from I2C device 0xA0 (8 bit address), it's the heart rate.

```c++
#include "mbed.h"

I2C i2c(I2C_SDA, I2C_SCL);
const int addr = 0xA0;

int main() {
    char heart_rate;
    while (1) {
        i2c.read(addr, &heart_rate, 1);
        printf("heart rate: = %d\r\n", heart_rate);
    }
}
```

#### Upgrade firmware

We can upgrade the firmware of the heart rate sensor through its bootloader.

* The bootloader is located at 0x08000000 - 0x08002000
* The application is located at 0x08002000 - 0x08020000

##### Hardware Connection

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Firmware_Connection.jpg" /></div>

* [USB to serial adapter](https://www.seeedstudio.com/CH340G-USB-to-Serial-%28TTL%29-Module%26Adapter-p-2359.html) is required
* UART (the Grove connector supports I2C and UART),when upgrade the firmware, the Grove interface run in UART mode.

| Grove-Finger-clip_Heart_Rate_Sensor | USB to Serial (TTL) Module&Adapter |
|-------------------------------------|------------------------------------|
| VCC                                 | VCC                                |
| GND                                 | GND                                |
| SDA                                 | TX                                 |
| SCL                                 | RX                                 |

##### Software

* Download [Tera Term](https://ttssh2.osdn.jp/index.html.en) Software
* Set UART Baud Rate as 115200

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/BaudRate_Setting.png" /></div>

* Download [firmware](ttps://github.com/SeeedDocument/Grove-Finger-clip_Heart_Rate_Sensor/raw/master/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip)

* Select Grove - Finger-clip Heart Rate Sensor.bin

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Select_firmware.png" /></div>

* Downloading the firmware to Grove-Finger-clip_Heart_Rate_Sensor

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Firmware_download.png" /></div>

* Firmware download successfully

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finish_Downloading.png" /></div>

:::note
Grove - Finger-clip Heart Rate Sensor provide heart rate measurements.However, it is not a medical device. To use the heart rate detection sensor on your wrist, finger or palm, you must:
:::

* Fasten the sensor snugly makes tight contact with your skin and maintain table (no motion) while measuring to acquire accurate
 heart rate.If the sensor does not contact the skin well or have extreme motion while measuring that the heart rate will not
 be measured correctly.

* Sensor's performance is optimized with greater blood flow. On cold days or users have poor circulation(ex: cold hands,
 fingers and cold feet) the sensor performance (heart rate accuracy) can be impacted because of lower blood flow in the
 measuring position.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resource

---

* [Grove - Finger-clip Heart Rate Sensor eagle file](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_v1.0_sch_pcb.zip)

* [Grove - Finger-clip Heart Rate Sensor bin file](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
