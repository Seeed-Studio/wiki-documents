---
description: Grove ADC
title: Grove ADC
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_RP2040_Grove_ADC
last_update:
  date: 3/4/2024
  author: DuKaiyin
---
# **概览**

SenseCAP Indicator有两个Grove接口，用于连接Grove模块，一个是默认的I2C端口，另一个是可配置的数字/模拟引脚，也可用于PWM输出。两个Grove端口都可以用作数字端口，为开发人员提供更多的可能性。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>


这个仓库将介绍如何在SenseCAP Indicator上使用Grove IOs。这使您可以享受 [Grove 生态系统](https://www.seeedstudio.com/category/Grove-c-1003.html) 的即插即用功能，同时还可以使用与RP2040兼容的GPIO！
# **Grove(ADC)**

要将Grove可配置的A/D端口用作模拟端口，只需按照以下定义

```cpp
#define ADC1  27
```

## **示例代码**:

此示例代码介绍了如何连接 [Grove ADC接口中的光传感器](/Grove-Light_Sensor) 输出信号是模拟值，光线越亮，数值越大。

```cpp
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