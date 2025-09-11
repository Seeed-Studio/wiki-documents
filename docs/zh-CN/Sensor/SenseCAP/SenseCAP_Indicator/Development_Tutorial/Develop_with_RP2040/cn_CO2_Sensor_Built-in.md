---
description: 内置CO2传感器
title: 内置CO2传感器
keywords:
- SenseCAP Indicator RP2040 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_RP2040_CO2
last_update:
  date: 5/23/2023
  author: Thomas
---
# **CO2传感器（内置）**

SenseCAP Indicator（D1S/D1Pro版本）内置SCD41传感器，可检测CO2值，检测范围为0-40000ppm。
CO2含量是评估空气质量的重要标准，确保空气对所有呼吸者都是安全和健康的。


空气中CO2的含量水平：
* 正常室外水平：350 - 450 ppm
* 可接受水平：< 600 ppm
* 闷热和异味投诉：600 - 1000 ppm
* ASHRAE和OSHA标准：1000 ppm
* 一般困倦：1000 - 2500 ppm
* 可能出现不良健康影响：2500 - 5000 ppm


**示例代码**：

此示例通过IIC接口读取内置SCD41 CO2传感器的值，并将其打印到串行监视器。

基于以下库：

[Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core/)
[SCD41 CO2 sensor library](https://github.com/Sensirion/arduino-i2c-scd4x)

**注意**：使用内置传感器时，必须启用传感器电源。


```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>


SensirionI2CScd4x scd4x;
String SDDataString = "";

//内置传感器需要上电
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

**注意：** 此内置SCD41传感器中的温度和湿度并不能完全代表空气温度和湿度


# **技术支持**

别担心，我们为您提供支持！请访问我们的[Seeed官方Discord频道](https://discord.com/invite/QqMgVwHT3X)提出您的问题！

如果您有大批量订单或定制需求，请联系 iot@seeed.cc