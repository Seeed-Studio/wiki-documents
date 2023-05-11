---
description: This article focuses on the use of the Grove SGP41 sensor.
title: Grove -Smart Air Quality Sensor (SGP41)
keywords:
- SGP41
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove-smart-air-quality-sensor-sgp41
last_update:
  date: 5/11/2023
  author: Stephen Lo
---

# Grove -Smart Air Quality Sensor (SGP41)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

The Grove - Smart Air Quality Sensor (SGP41) is a digital gas sensor module from the Grove series. It features a 4-pin Grove interface that allows users to easily connect the sensor to a microcontroller. The module supports both 3.3V and 5V power supply, making it flexible.

The SGP41 digital gas sensor uses Sensirion's CMOSens® technology, which offers a complete and easy-to-use sensor system on a single chip. It can measure the concentration of volatile organic compounds (VOCs) and nitrogen oxides (NOx) in indoor air and provides digital output signals. Additionally, this sensor has outstanding long-term stability and lifetime.

The Grove - Smart Air Quality Sensor (SGP41) module is compact and suitable for applications with limited space. It also has high reliability and reproducibility. If you need to measure indoor air quality, consider using our Grove - Air Quality Sensor (SGP41) module!



:::tip

We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.

:::



## Features

- Digital gas sensor: The SGP41 is a digital gas sensor that can measure the concentration of volatile organic compounds (VOCs) and nitrogen oxides (NOx) in indoor air.
- CMOSens® technology: The SGP41 uses Sensirion's CMOSens® technology, which offers a complete and easy-to-use sensor system on a single chip.
- Long-term stability: The SGP41 has outstanding long-term stability and lifetime, making it ideal for applications that require continuous monitoring of indoor air quality.
- Digital output signals: The SGP41 provides digital output signals, which makes it easy to integrate with microcontrollers and other digital systems.
- Small form factor: The SGP41 is very compact and suitable for applications with limited space. It features a 4-pin Grove interface that allows users to easily connect the sensor to a microcontroller.
- Flexible power supply: The module supports both 3.3V and 5V power supply, making it very flexible and easy to use in different applications.
- High reliability and reproducibility: Sensirion's state-of-the-art production process guarantees high reproducibility and reliability of the SGP41 module.

## Specification

- Sensing technology: MOx-based gas sensor for air quality applications
- Gas detection: VOC and NOx measurements
- Interface: I2C interface with digital output signals
- Power consumption: Low power consumption of 3.0 mA at 3.3 V
- Operating temperature range: -40°C to +85°C
- Humidity range: 0% to 100% RH (non-condensing)
- Response time: <10 seconds for VOCs and <60 seconds for NOx
- Accuracy: ±15% for VOCs and ±50 ppb for NOx (at standard conditions)

## Applications

- Indoor air quality monitoring: The SGP41 is ideal for monitoring indoor air quality in homes, offices, schools, and other indoor environments.
- Air purifiers: The SGP41 can be integrated into air purifiers to detect and remove harmful gases from the air.
- Demand-controlled ventilation systems: The SGP41 can be used in demand-controlled ventilation systems to adjust the ventilation rate based on the level of pollutants in the air.
- Smart homes: The SGP41 can be integrated into smart home systems to provide real-time information about indoor air quality and trigger actions based on this information.
- Industrial applications: The SGP41 can be used in industrial applications such as chemical plants, refineries, and manufacturing facilities to monitor indoor air quality and ensure worker safety.
- Environmental monitoring: The SGP41 can be used for environmental monitoring of VOCs and NOx emissions from factories, vehicles, and other sources.

## Hardware Overview

### Pin Map

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/sgp41_hw.png" alt="pir" width={600} height="auto" /></p>


## Getting Started

:::note
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

### Play With Arduino

#### Materials required

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeeduino V4.3</th>
			<th>Grove Base Shield V2.0</th>
            <th>Grove - Smart Air Quality Sensor (SGP41)</th>
		</tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>








:::note
**1**. Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
**2**. Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

- **Step 1.** Connect Grove - Smart Air Quality Sensor (SGP41) to **I2C** port of Grove Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg" alt="pir" width={600} height="auto" /></p>


:::note
If we don't have Grove Base Shield, We also can directly connect Grove - Smart Air Quality Sensor (SGP41) to Seeeduino as below.
:::

| Seeeduino     | Grove-VOC and eCO2 Gas Sensor(SGP30) |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |

#### Software

- **Step 1.** Download the dependency libraries from Github.

    - **arduino-core Library**:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-core">
        <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

    - **arduino-i2c-sgp41 Library**:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-i2c-sgp41">
        <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** After downloading and installing the library correctly, you can find an example program named `exampleUsage.ino` in the examples folder. This program is designed for the SGP41 sensor.

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp41.h>
#include <Wire.h>

SensirionI2CSgp41 sgp41;

// time in seconds needed for NOx conditioning
uint16_t conditioning_s = 10;

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
}

void loop() {
    uint16_t error;
    char errorMessage[256];
    uint16_t defaultRh = 0x8000;
    uint16_t defaultT = 0x6666;
    uint16_t srawVoc = 0;
    uint16_t srawNox = 0;

    delay(1000);

    if (conditioning_s > 0) {
        // During NOx conditioning (10s) SRAW NOx will remain 0
        error = sgp41.executeConditioning(defaultRh, defaultT, srawVoc);
        conditioning_s--;
    } else {
        // Read Measurement
        error = sgp41.measureRawSignals(defaultRh, defaultT, srawVoc, srawNox);
    }

    if (error) {
        Serial.print("Error trying to execute measureRawSignals(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SRAW_VOC:");
        Serial.print(srawVoc);
        Serial.print("\t");
        Serial.print("SRAW_NOx:");
        Serial.println(srawNox);
    }
}
```

- **Step 4.** Upload the demo code.



- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/2.png" style={{width:700, height:'auto'}}/></div>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-SGP41/AIR_QUALITY_SENSOR(SGP41)_sch&pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[ZIP]** [Grove - Smart Air Quality Sensor (SGP41) SCH&PCB](https://files.seeedstudio.com/wiki/Grove-SGP41/AIR_QUALITY_SENSOR(SGP41)_sch&pcb.zip)
- **[PDF]** [SGP41 Datasheet](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf)

## Tech Support

Please submit any technical issues into our [forum](https://forum.seeedstudio.com/).

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>


