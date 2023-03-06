---
description: Tapping
title: Tapping
keywords:
- Wio_terminal IMU
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-IMU-Tapping
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Wio Terminal Sensing Tapping Motion Demo

This repo demonstrates how Wio Terminal used the built-in acclerator to sense the Single-click tapping or Double-click tapping motion!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-10%2010-33-58.2019-12-10%2010_35_11.gif"/></div>

## 3-Axis Accelerator Initialization

To initialize the accelerator on Wio Terminal, please visit [Getting Started with IMU](https://wiki.seeedstudio.com/Wio-Terminal-IMU-Basic/) for more information.

## Tapping Sensitivity Configurations

For sensitivity of tapping, adjust the value for THRESHOLD according to scale range of IMU:

| Scale Range | 2g    | 4g    | 8g    | 16g  |
|-------------|-------|-------|-------|------|
| THRESHOLD   | 40-80 | 20-40 | 10-20 | 5-10 |

## Single click or Double click

To use the `click` function, simply call it as follow, where first parameter is used to determine sensing single clicking or double clicking(1 or 2), and second parameter is for threshold value.

```cpp
void setup() {
    ...
    lis.click(1,THRESHOLD);
    //Interrupt signal to trigger when a tap is detected!
    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);
}
```

**Note:** `GYROSCOPE_INT1` is the Acclerometer Interrupt Pin 1.

## Complete Code

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

//Adjust this threshold value for sensitivity of clicking
#define THRESHOLD 40
uint8_t cnt=0;

void count() {
    cnt++;
    Serial.print("Tap Count: ");
    Serial.println(cnt);
}

void setup() {
    Serial.begin(115200);
    lis.begin(Wire1);

    if (!lis) {
        Serial.println("ERROR");
        while(1);
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g

    //1 for single click, 2 for double click
    //smaller the threshold value, the more sensitive
    lis.click(1, THRESHOLD);
    //Interrupt signal to trigger when a tap is detected!
    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);
}

void loop() {
}
```
