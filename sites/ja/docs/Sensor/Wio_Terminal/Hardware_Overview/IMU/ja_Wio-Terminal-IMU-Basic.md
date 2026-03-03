---
description: 始め方
title: 加速度計の使い方
keywords:
- Wio_terminal IMU
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-IMU-Basic
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# 加速度計の使い方

このリポジトリでは、Wio Terminalから加速度計の値を読み取る方法を示します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-09%2015-42-57.2019-12-09%2015_43_28.gif"/></div>

## 3軸デジタル加速度計の初期化

Wio Terminalで加速度計を初期化するには以下を行います：

- 出力データレートの設定: `lis.setOutputDataRate()`、1Hzから5kHzまで設定可能。

- スケール範囲の設定: `lis.FullScaleRange()`、2gから16gまで設定可能。

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

void setup() {
    ...
    lis.begin(Wire1); 
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // 出力データレートを25Hzに設定、最大5kHzまで設定可能
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // スケール範囲を2gに設定、2,4,8,16gから選択可能
    ...
}
```

## 加速度計の値を読み取る

Wio Terminalで各軸の加速度計の値を読み取るには、以下の手順に従います：

```cpp
void loop() {
    float x_values, y_values, z_values;
    x_values = lis.getAcceleratationX();
    y_values = lis.getAcceleratationY();
    z_values = lis.getAcceleratationZ();
    delay(50);  // 一度に大量のデータを読み取るのを避けるための遅延
    ...
}
```

注意: 一度に大量のデータを読み取るのを避けるために、遅延を入れることを強く推奨します。

### サンプルコード

この例では、加速度計の3軸すべての値をシリアルモニターに出力します。

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
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // データ出力レート
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // スケール範囲を2gに設定
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