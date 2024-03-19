---
description: tVOC Sensor Built-in
title: tVOC Sensor Built-in
keywords:
- Indicator Development Tutorial RP2040
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_RP2040_tVOC
last_update:
  date: 3/4/2024
  author: DuKaiyin
---
# **SGP40 TVOC传感器(Built-in)**

SenseCAP Indicator中内置的SGP40传感器是一种高质量、可靠的TVOC传感器，可在广泛的应用中用于监测室内和室外空气质量。它具有1-500 VOC指数点的测量范围。

TVOC是一组有机化合物，从各种来源，包括建筑材料、清洁产品和个人护理产品中释放为气体。


**示例代码:**

此示例通过IIC接口读取内置SGP40 TVOC传感器的值，并将其打印到串行监视器上。

基于以下库：

[Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core/)

[SGP40 TVOC sensor library](https://github.com/Sensirion/arduino-i2c-sgp40)

[Transfer index library: Sensirion Gas Index Algorithm](https://github.com/Sensirion/arduino-gas-index-algorithm)

注意: 使用内置传感器时，必须启用传感器电源

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp40.h>
#include <VOCGasIndexAlgorithm.h>
#include <Wire.h>

SensirionI2CSgp40 sgp40;
VOCGasIndexAlgorithm voc_algorithm;


//The built-in sensor needs to be powered on
void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}

/************************ sgp40 tvoc  ****************************/

void sensor_sgp40_init(void) {
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

void sensor_sgp40_get(void) {
  uint16_t error;
  char errorMessage[256];
  uint16_t defaultRh = 0x8000;
  uint16_t defaultT = 0x6666;
  uint16_t srawVoc = 0;

  Serial.print("sensor sgp40: ");

  error = sgp40.measureRawSignal(defaultRh, defaultT, srawVoc);
  if (error) {
    Serial.print("Error trying to execute measureRawSignal(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else {
    Serial.print("SRAW_VOC:");
    Serial.print(srawVoc);

    int32_t voc_index = voc_algorithm.process(srawVoc);
    Serial.print(", VOC Index: ");
    Serial.println(voc_index);
  }
}

/************************ setup & loop ****************************/

void setup() {
  Serial.begin(115200);

  sensor_power_on();

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_sgp40_init();
}

void loop() {
  sensor_sgp40_get();
  delay(5000);
}

```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/tvoc.png"/></div>

"SRAW_VOC" 是指传感器对挥发性有机化合物（VOCs）的原始信号输出，通常是与空气中的VOC浓度成比例的电压或电阻测量。

"VOC指数" 是一种计算出的值，用作以更用户友好的格式表示空气中VOC浓度的方式。VOC指数是一个从0到500的数值，数值越高表示VOC浓度越高。



**注意:** 此内置SCD41传感器中的温度和湿度并不能完全代表空气的温度和湿度。

 **技术支持**

   别担心，我们为您提供了支持！请访问我们的[Seeed官方Discord频道](https://discord.com/invite/QqMgVwHT3X)提出您的问题！

如果您有大量订单或定制需求，请联系 iot@seeed.cc