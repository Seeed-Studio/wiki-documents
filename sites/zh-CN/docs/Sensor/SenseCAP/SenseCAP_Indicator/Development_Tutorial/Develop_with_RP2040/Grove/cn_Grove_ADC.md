---
description: Grove ADC
title: Grove ADC
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_RP2040_Grove_ADC
last_update:
  date: 5/23/2023
  author: Thomas
---
# **概述**

SenseCAP Indicator 中有两个 Grove 接口用于连接 Grove 模块，一个是默认的 I2C 端口，另一个是可配置的数字/模拟引脚，它也可以用于 PWM 输出。两个 Grove 端口都可以用作数字端口。为开发者提供了更多可能性。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>


本仓库将介绍如何在 SenseCAP Indicator 上使用 Grove IO。这使您能够享受 [Grove 生态系统](https://www.seeedstudio.com/category/Grove-c-1003.html) 的即插即用功能，以及使用 RP2040 兼容的 GPIO！

# **Grove(ADC)**

要将 Grove 可配置 A/D 端口用作模拟端口，只需按如下方式定义：

```cpp
#define ADC1  27
```

## **示例代码**：

此示例代码介绍如何在 grove ADC 接口中连接[光传感器](/cn/Grove-Light_Sensor)。
输出信号是模拟值，光线越亮，值越大。

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