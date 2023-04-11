---
description: Getting Started
title: Getting Started
keywords:
- Wio_terminal IMU
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-IMU-Basic
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Getting Started with accelerometer

This repo demonstrates how to read accelerometer values from Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-09%2015-42-57.2019-12-09%2015_43_28.gif"/></div>

## 3-Axis Digital Accelerator Initialization

To initialize the accelerator on Wio Terminal:

- Setting output data rate: `lis.setOutputDataRate()`, 1Hz up to 5kHz.

- Setting scale range: `lis.FullScaleRange()`, 2g up to 16g.

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

## Reading accelerometer Values

To read accelerometer values of each axis on Wio Terminal, simply follow this:

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

Note: Delay is strongly recommended to avoid large amount of data at once.

### Example Code

This example prints all 3-axis values of accelerometer on the serial monitor.

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
