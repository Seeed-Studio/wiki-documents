---
description: Grove IIC
title: Grove IIC
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_RP2040_Grove_IIC
last_update:
  date: 5/23/2023
  author: Thomas
---
# **概述**

SenseCAP Indicator 中有两个 Grove 接口用于连接 Grove 模块，一个是默认的 I2C 端口，另一个是可配置的数字/模拟引脚，也可用于 PWM 输出。两个 Grove 端口都可以用作数字端口。为开发者提供了更多可能性。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>

本仓库将介绍如何在 SenseCAP Indicator 上使用 Grove IO。这让您可以享受 [Grove 生态系统](https://www.seeedstudio.com/category/Grove-c-1003.html) 的即插即用功能，以及使用 RP2040 兼容的 GPIO！

# **Grove(IIC)**

为了扩展更多应用，您可以使用 IIC 接口连接更多传感器。
与内置传感器不同，您只需要定义 SCL 和 SDA 引脚连接。

## **示例代码**

此示例代码介绍如何连接 [Grove TH 传感器](/cn/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor)：

[AHT20 温湿度传感器库](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/)

```cpp
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