---
description: Grove ADC
title: Grove ADC
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_ADC
last_update:
  date: 5/17/2023
  author: Yvonne
---
# **Overview**

There are two Grove interfaces in the SenseCAP Indicator for connecting Grove modules, one is the default I2C Port and other one is configurable Digital/Analog Pin, it can also be used for PWM outputs. Both Grove ports can be used as Digital.Providing more possibilities for developers. 

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>


This repo will introduce how to use the Grove IOs on the SenseCAP Indicator. This allows you to enjoy the plug and play functionality of the [Grove Ecosystem](https://www.seeedstudio.com/category/Grove-c-1003.html) as well as using the RP2040 compatible GPIO!

# **Grove(ADC)**

To use the Grove configurable A/D Port as Analog port, simply define it as follow:

```
#define ADC1  27
```

## **Example Code**:

This example code introduces how to connect the [Light sensor](https://wiki.seeedstudio.com/Grove-Light_Sensor) in the grove ADC interface.
The output signal is analog value, the brighter the light is, the larger the value.

```
#include <Arduino.h>

#define ADC1  27

void setup() {
  Serial.begin(115200);
}

void loop() {
  int adc0_data = analogRead(ADC1);
  Serial.println(adc0_data);
  delay(1000);
}
```