---
description: Grove IIC
title: Grove IIC
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_IIC
last_update:
  date: 5/17/2023
  author: Yvonne
---
# **Overview**

There are two Grove interfaces in the SenseCAP Indicator for connecting Grove modules, one is the default I2C Port and other one is configurable Digital/Analog Pin, it can also be used for PWM outputs. Both Grove ports can be used as Digital.Providing more possibilities for developers. 

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>


This repo will introduce how to use the Grove IOs on the SenseCAP Indicator. This allows you to enjoy the plug and play functionality of the [Grove Ecosystem](https://www.seeedstudio.com/category/Grove-c-1003.html) as well as using the RP2040 compatible GPIO!


# **Grove(IIC)**



To expand more applications, you can use the IIC interface to connect more sensors. 
Different with the built-in sensors, you only need to define the SCL and SDA pin connections.

## **Example Cod**e:

This example code introduces how to connect a [Grove TH sensor](https://wiki.seeedstudio.com/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor):

[AHT20 temperature and humidity sensor library](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/)



```
#include <Arduino.h>
#include <Wire.h>
#include "AHT20.h"

AHT20 AHT;

void sensor_aht_init(void) {
  AHT.begin();
}

void sensor_aht_get(void) {
  float humi, temp;
  int ret = AHT.getSensor(&humi, &temp);
  if (ret)  // GET DATA OK
  {
    Serial.print("humidity: ");
    Serial.print(humi * 100);
    Serial.print("  temerature: ");
    Serial.println(temp);
  } else  // GET DATA FAIL
  {
    Serial.println("GET DATA FROM AHT20 FAIL");
  }
}

void setup() {
  Serial.begin(115200);

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_aht_init();
}

void loop() {
  sensor_aht_get();
  delay(5000);
}
```






