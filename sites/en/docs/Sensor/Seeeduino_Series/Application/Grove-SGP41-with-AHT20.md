---
description: This article focuses on the use of the Grove SGP41 sensor.
title: Correction for SGP41(raw) measurement dependent on humidity and temperature
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove-sgp41-with-aht20
last_update:
  date: 10/16/2023
  author: Hans Bausewein
---

# Correction for SGP41(raw) measurement dependent on humidity and temperature

## Overview (How I get started with this project)

First I have read the [Grove - Smart Air Quality Sensor (SGP41)](https://wiki.seeedstudio.com/grove-smart-air-quality-sensor-sgp41) and the [Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor](https://wiki.seeedstudio.com/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/) documentation.

According to the [SGP41 Datasheet (PDF)](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf) section 3.2 (Raw Signal Measurement), the SGP41 measurement is dependent on humidity and temperature, so we need to apply a correction to get consistent data: read the relative humidity and temperature from the AHT20 (or another sensor), calculate the ticks and pass them to the *sgp41_measure_raw_signals* function.

### Theory Test

Table 11 (Description of the I2C measurement command) on page 15 describes the formulas to calculate the ticks:

```
RHticks = RH% × 65535 / 100
Tticks = (T°C + 45) × 65535 / 175
```

Verify by using the defaults 25°C and 50% relative humidity:

```
50 × 65535 / 100 = 32767.5 = 0x8000 (hexadecimal, rounded up)
(25 + 45) × 65535 / 175 = 26214 = 0x6666 (hexadecimal) 
```

The results match the constants used in the program used by [Grove - Smart Air Quality Sensor (SGP41)](https://wiki.seeedstudio.com/grove-smart-air-quality-sensor-sgp41) and defined in Table 11 of the [SGP41 Datasheet (PDF)](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf).

The same in c:

```cpp
        int h_ticks = humi * 0xFFFF;
        int t_ticks = (temp + 45) * 0xFFFF / 175;
```

Note that 'humi' in the program is a value between 0 and 1, so the division by 100 and earlier multiplication were removed.

## Hardware Preparation

I am using Seeeduino Nano as the control board and using Grove - Smart Air Quality Sensor (SGP41) and Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor to make it happened.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeeduino Nano</th>
   <th>Grove - AHT20 Temperature&amp;Humidity Sensor</th>
            <th>Grove - Smart Air Quality Sensor (SGP41)</th>
   <th>Grove - Branch Cable</th>
  </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-wiki.jpg" style={{width:185, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/101990644_4_.png" style={{width:185, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg" style={{width:185, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/Grove-Branch_Cable-5PCs_pack-.jpg" style={{width:185, height:'auto'}}/></div></td>
        </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"3"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"3"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"3"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Branch-Cable-5PCs-pack.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"3"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Software Preparation

<div class="table-center">
  <table align="center">
    <tr>
        <th>Arduino IDE</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

There are multiple libraries that are required and are presented next setp.

## Getting Started

:::note
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

### 1. Connect With Arduino Nano

:::note
Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
:::

- **Step 1.** Connect Grove - Branch Cable to the **I2C** port of Seeeduino Nano.

- **Step 2.** Plug Grove - Branch Cable into the I2C Grove AHT20 sensor module.

- **Step 3.** Plug Grove - Branch Cable into the I2C Grove SGP41 sensor module.

- **Step 4.** Connect Seeeduino to a PC via a USB cable.

![Seeeduino_SGP41_AHT20](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/seeeduino_nano-SGP41-correction/1.jpg)

### 2. Downolad the required libraries and add them into Arduino

- **Step 1.** Download the dependency libraries from Github.

  - **arduino-core Library**:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-core" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

  - **arduino-i2c-sgp41 Library**:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-i2c-sgp41" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

  - **Seeed_Arduino_AHT20** Library:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_AHT20" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** After downloading and installing the libraries correctly, you can upload the code below, which is a combination of the [SGP41](https://wiki.seeedstudio.com/grove-smart-air-quality-sensor-sgp41#software) and the [AHT20](https://wiki.seeedstudio.com/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor//#software-code) software with the formulas described in the introduction added.

### 3. Upload the Code and check the result

- **Step 1.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

```cpp
// ARDUINO DEMO FOR GROVE-AHT20+SGP41
//
#include <Wire.h>
#include "AHT20.h"
#include <Arduino.h>
#include <SensirionI2CSgp41.h>

SensirionI2CSgp41 sgp41;

// time in seconds needed for NOx conditioning
uint16_t conditioning_s = 10;

AHT20 AHT;

void setup() {
    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sgp41.begin(Wire);

    uint16_t serialNumber[3];
    uint8_t serialNumberSize = 3;

    error = sgp41.getSerialNumber(serialNumber, serialNumberSize);

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
    error = sgp41.executeSelfTest(testResult);
    if (error) {
        Serial.print("Error trying to execute executeSelfTest(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else if (testResult != 0xD400) {
        Serial.print("executeSelfTest failed with error: ");
        Serial.println(testResult);
    }
    AHT.begin();
}

uint16_t read_sgp41(uint16_t rh, uint16_t t) {
    uint16_t error;
    char errorMessage[256];
    uint16_t srawVoc = 0;
    uint16_t srawNox = 0;

    delay(1000);

    if (conditioning_s > 0) {
        // During NOx conditioning (10s) SRAW NOx will remain 0
        error = sgp41.executeConditioning(rh, t, srawVoc);
        conditioning_s--;
    } else {
        // Read Measurement
        error = sgp41.measureRawSignals(rh, t, srawVoc, srawNox);
    }

    if (error) {
        Serial.print("Error trying to execute measureRawSignals(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("RH ticks: ");
        Serial.print(rh);
        Serial.print("\t");
        Serial.print("T ticks: ");
        Serial.print(t);
        Serial.print("\t");
        Serial.print("SRAW_VOC: ");
        Serial.print(srawVoc);
        Serial.print("\t");
        Serial.print("SRAW_NOx: ");
        Serial.println(srawNox);
    }
    return error;
}

void loop()
{
    float humi, temp;
    
    int ret = AHT.getSensor(&humi, &temp);
    
    if(ret)     // GET DATA OK
    {
        Serial.print("humidity: ");
        Serial.print(humi*100);
        Serial.print("%\t temperature: ");
        Serial.print(temp);
        Serial.print("\t");
        // T-ticks = (T/°C + 45) × 65535 / 175
        // H-ticks = RH/% × 65535 / 100
        int h_ticks = humi * 0xFFFF;
        int t_ticks = (temp + 45) * 0xFFFF / 175;
        read_sgp41(h_ticks, t_ticks);
    }
    else        // GET DATA FAIL
    {
        Serial.println("GET DATA FROM AHT20 FAIL");
    }
    
    delay(100);
}

// END FILE
```

- **Step 2.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**.

![Serial Console output](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/seeeduino_nano-SGP41-correction/2.jpg)

Note that the first ten SRAW_NOx values are zero due to conditioning.

## Resources

- [SGP41](https://wiki.seeedstudio.com/grove-smart-air-quality-sensor-sgp41#resources)
- [AHT20](https://wiki.seeedstudio.com/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/#resources)

## ✨ Contributor Project

- This project is supported by the Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- Thanks [Hans's efforts](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35179519) and your work will be [exhibited](https://wiki.seeedstudio.com/Honorary-Contributors/).

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
