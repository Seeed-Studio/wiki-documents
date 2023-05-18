---
description: CO2 Sensor Built-in
title: CO2 Sensor Built-in
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Develop_with_RP2040/CO2_Sensor_Built-in
last_update:
  date: 5/17/2023
  author: Yvonne
---
# **CO2 Sensor(Built-in)**

SenseCAP Indicator (D1S/D1Pro Version)has a built-in SCD41 sensor, which can detect the CO2 value with a range of 0-40000ppm.
CO2 content is an important criterion for assessing the quality of air and ensuring that it is safe and healthy for all who breathe it.


The levels of CO2 in the air: 
* Normal outdoor level: 350 - 450 ppm
* Acceptable levels: < 600 ppm
* Complaints of stuffiness and odors: 600 - 1000 ppm
* ASHRAE and OSHA standards: 1000 ppm
* General drowsiness: 1000 - 2500 ppm
* Adverse health effects may be expected: 2500 - 5000 ppm




**Example Code**:

This example reads the value of the built-in SCD41 Co2 sensor through the IIC interface, and print it to the serial monitor.

Based on the following library：

[Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core/)
[SCD41 CO2 sensor library](https://github.com/Sensirion/arduino-i2c-scd4x)

**Note**: When using the built-in sensor, the sensor power must be enabled.


```
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>


SensirionI2CScd4x scd4x;
String SDDataString = "";

//The built-in sensor needs to be powered on
void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}

void sensor_scd4x_init(void) {
  uint16_t error;
  char errorMessage[256];

  scd4x.begin(Wire);

  // stop potentially previously started measurement
  error = scd4x.stopPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }

  // Start Measurement
  error = scd4x.startPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute startPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
}

void sensor_scd4x_get(void) {
  uint16_t error;
  char errorMessage[256];

  Serial.print("sensor scd4x: ");
  // Read Measurement
  uint16_t co2;
  float temperature;
  float humidity;
  error = scd4x.readMeasurement(co2, temperature, humidity);
  if (error) {
    Serial.print("Error trying to execute readMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (co2 == 0) {
    Serial.println("Invalid sample detected, skipping.");
  } else {
    Serial.print("Co2:");
    Serial.print(co2);
    Serial.print("\t");
    Serial.print("Temperature:");
    Serial.print(temperature);
    Serial.print("\t");
    Serial.print("Humidity:");
    Serial.println(humidity);
  }
}

int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_scd4x_init();
}

void loop() {
  delay(5000);
  sensor_scd4x_get();
}


```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/scd4xsensor.png"/></div>

**Note:** The temperature and humidity in this built-in SCD41 sensor does not fully represent the air temperature and humidity



    
# **Tech Support**

Don’t worry, we’ve got you covered! Please visit our [Seeed Official Discord Channel](https://discord.gg/cPpeuQMM) to ask your questions！
If you have large order or customization requirment, please contact iot@seeed.cc
