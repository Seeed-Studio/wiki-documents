---
description: Grove IIC
title: Grove IIC
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_RP2040_Grove_IIC
last_update:
  date: 3/4/2024
  author: DuKaiyin
---
# **概览**

感知指示器SenseCAP配备了两个Grove接口，用于连接Grove模块，一个是默认的I2C端口，另一个是可配置的数字/模拟引脚，也可用于PWM输出。两个Grove端口都可以用作数字端口，为开发人员提供更多可能性。


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>


这个存储库将介绍如何在SenseCAP指示器上使用Grove IOs。这使您既可以享受[Grove 生态系统](https://www.seeedstudio.com/category/Grove-c-1003.html) 的即插即用功能，也可以使用RP2040兼容的GPIO！

# **Grove(IIC)**
为了扩展更多的应用，您可以使用IIC接口连接更多的传感器。
与内置传感器不同，您只需定义SCL和SDA引脚的连接。

## **实例代码**:

这个示例代码介绍了如何连接 [Grove TH 传感器](/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor):

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






