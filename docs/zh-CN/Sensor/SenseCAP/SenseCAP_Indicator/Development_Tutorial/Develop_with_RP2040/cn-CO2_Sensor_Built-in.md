---
description: CO2 Sensor Built-in
title: CO2 Sensor Built-in
keywords:
- SenseCAP Indicator RP2040 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_RP2040_CO2
last_update:
  date: 3/4/2024
  author: DuKaiyin
---
# **CO2 传感器（内置）**
SenseCAP Indicator（D1S/D1Pro版本）配有内置的SCD41传感器，可以检测范围为0-40000ppm的CO2值。
CO2含量是评估空气质量并确保对所有呼吸者都是安全和健康的重要标准。


空气中的CO2水平：
* 正常室外水平：350 - 450 ppm
* 可接受水平：< 600 ppm
* 对闷热和异味的抱怨：600 - 1000 ppm
* ASHRAE和OSHA标准：1000 ppm
* 一般昏昏欲睡：1000 - 2500 ppm
* 可预期不良健康影响：2500 - 5000 ppm




**示例代码：**:

此示例通过IIC接口读取内置SCD41 Co2传感器的值，并将其打印到串行监视器。

基于以下库：

[Sensirion Arduino Core 库](https://github.com/Sensirion/arduino-core/)与
[SCD41 CO2 sensor 库](https://github.com/Sensirion/arduino-i2c-scd4x)

**注意**: 在使用内置传感器时，必须启用传感器电源


```cpp
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

**注意:** 此内置SCD41传感器中的温度和湿度并不能完全代表空气的温度和湿度。

 **技术支持**

   别担心，我们为您提供了支持！请访问我们的[Seeed官方Discord频道](https://discord.com/invite/QqMgVwHT3X)提出您的问题！

如果您有大量订单或定制需求，请联系 iot@seeed.cc