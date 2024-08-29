---
description: 入门指南
title: 加速度计入门指南
keywords:
- Wio_terminal IMU
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-IMU-Basic
last_update:
  date: 3/09/2024
  author: 金菊
---

# 加速度计入门指南

该存储库演示了如何从 Wio Terminal 读取加速度计的数值。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-09%2015-42-57.2019-12-09%2015_43_28.gif"/></div>

## 3轴数字加速度计初始化

要初始化 Wio Terminal 上的加速度计，请执行以下操作：

- 设置输出数据速率: `lis.setOutputDataRate()`, 范围为1Hz至5kHz。

- 设置量程范围: `lis.FullScaleRange()`, 范围为2g至16g。

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

void setup() {
    ...
    lis.begin(Wire1); 
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // Setting output data rage to 25Hz, can be set up tp 5kHz 
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // Setting scale range to 2g, select from 2,4,8,16g
    ...
}
```

## 读取加速度计数值

要读取 Wio Terminal 上每个轴的加速度计数值，只需按照以下步骤进行操作：

```cpp
void loop() {
    float x_values, y_values, z_values;
    x_values = lis.getAcceleratationX();
    y_values = lis.getAcceleratationY();
    z_values = lis.getAcceleratationZ();
    delay(50);  // delay to avoid large amount of data being read
    ...
}
```

注: 强烈建议使用延时来避免一次性获取大量数据。

### 示例代码

此示例在串行监视器上打印出加速度计的所有三轴数值。

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
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g
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
