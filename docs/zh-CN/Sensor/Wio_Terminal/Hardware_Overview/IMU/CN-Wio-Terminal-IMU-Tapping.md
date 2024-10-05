---
description: Tapping
title: 敲击
keywords:
- Wio_terminal IMU
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-IMU-Tapping
last_update:
  date: 3/09/2024
  author: 金菊
---

# Wio Terminal 感知敲击运动演示

该存储库演示了如何使用 Wio Terminal 的内置加速度计来感知单击敲击或双击敲击运动！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-10%2010-33-58.2019-12-10%2010_35_11.gif"/></div>

## 3轴加速度计初始化

要初始化 Wio Terminal上的加速度计，请访问 [IMU入门指南](https://wiki.seeedstudio.com/Wio-Terminal-IMU-Basic/) 获取更多信息。

## 敲击灵敏度配置

对于敲击的灵敏度，请根据加速度计的量程范围调整THRESHOLD的值：

| 量程范围 | 2g    | 4g    | 8g    | 16g  |
|-------------|-------|-------|-------|------|
| 阈值   | 40-80 | 20-40 | 10-20 | 5-10 |

## 单击或双击

要使用 `click` 函数，只需按如下方式调用，其中第一个参数用于确定是感知单击还是双击（1或2），第二个参数是阈值。

```cpp
void setup() {
    ...
    lis.click(1,THRESHOLD);
    //Interrupt signal to trigger when a tap is detected!
    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);
}
```

**注:** `GYROSCOPE_INT1` 是加速度计中断引脚1。

## 示例代码

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
