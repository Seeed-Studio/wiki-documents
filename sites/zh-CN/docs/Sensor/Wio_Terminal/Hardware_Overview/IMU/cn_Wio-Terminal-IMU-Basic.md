---
description: 入门指南
title: 加速度计入门指南
keywords:
- Wio_terminal IMU
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-IMU-Basic
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# 加速度计入门指南

本仓库演示了如何从 Wio Terminal 读取加速度计数值。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-09%2015-42-57.2019-12-09%2015_43_28.gif"/></div>

## 3轴数字加速度计初始化

要在 Wio Terminal 上初始化加速度计：

- 设置输出数据速率：`lis.setOutputDataRate()`，从 1Hz 到 5kHz。

- 设置量程范围：`lis.FullScaleRange()`，从 2g 到 16g。

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

void setup() {
    ...
    lis.begin(Wire1); 
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // 设置输出数据速率为 25Hz，最高可设置到 5kHz 
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // 设置量程范围为 2g，可从 2、4、8、16g 中选择
    ...
}
```

## 读取加速度计数值

要读取 Wio Terminal 上各轴的加速度计数值，只需按照以下方式：

```cpp
void loop() {
    float x_values, y_values, z_values;
    x_values = lis.getAccelerationX();
    y_values = lis.getAccelerationY();
    z_values = lis.getAccelerationZ();
    delay(50);  // 延迟以避免一次读取大量数据
    ...
}
```

注意：强烈建议使用延迟来避免一次读取大量数据。

### 示例代码

此示例在串口监视器上打印加速度计的所有 3 轴数值。

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);

  if (!lis) {
    Serial.println("ERROR");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //数据输出速率
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //量程范围设置为 2g
}

void loop() {
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();
  
  Serial.print("X: "); Serial.print(x_values);
  Serial.print(" Y: "); Serial.print(y_values);
  Serial.print(" Z: "); Serial.print(z_values);
  Serial.println();
  delay(50);
}
```