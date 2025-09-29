---
description: 敲击
title: 敲击
keywords:
- Wio_terminal IMU
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-IMU-Tapping
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Wio Terminal 感应敲击动作演示

本仓库演示了 Wio Terminal 如何使用内置加速度计来感应单击敲击或双击敲击动作！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-10%2010-33-58.2019-12-10%2010_35_11.gif"/></div>

## 3轴加速度计初始化

要在 Wio Terminal 上初始化加速度计，请访问 [IMU 入门指南](https://wiki.seeedstudio.com/cn/Wio-Terminal-IMU-Basic/) 获取更多信息。

## 敲击灵敏度配置

对于敲击灵敏度，请根据 IMU 的量程范围调整 THRESHOLD 值：

| 量程范围 | 2g    | 4g    | 8g    | 16g  |
|----------|-------|-------|-------|------|
| THRESHOLD| 40-80 | 20-40 | 10-20 | 5-10 |

## 单击或双击

要使用 `click` 功能，只需按如下方式调用，其中第一个参数用于确定感应单击还是双击（1 或 2），第二个参数为阈值：

```cpp
void setup() {
    ...
    lis.click(1,THRESHOLD);
    //检测到敲击时触发的中断信号！
    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);
}
```

**注意：** `GYROSCOPE_INT1` 是加速度计中断引脚 1。

## 完整代码

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

//调整此阈值以设置点击灵敏度
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
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //数据输出速率
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //量程范围设置为2g

    //1表示单击，2表示双击
    //阈值越小，灵敏度越高
    lis.click(1, THRESHOLD);
    //检测到敲击时触发的中断信号！
    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);
}

void loop() {
}
```