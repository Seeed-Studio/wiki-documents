---
description: タッピング
title: タッピング
keywords:
- Wio_terminal IMU
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-IMU-Tapping
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal タッピング動作検知デモ

このリポジトリでは、Wio Terminal が内蔵の加速度センサーを使用して、シングルクリックタッピングまたはダブルクリックタッピング動作を検知する方法を示します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-10%2010-33-58.2019-12-10%2010_35_11.gif"/></div>

## 3軸加速度センサーの初期化

Wio Terminal 上で加速度センサーを初期化するには、[IMUの基本操作](https://wiki.seeedstudio.com/ja/Wio-Terminal-IMU-Basic/)をご覧ください。

## タッピング感度の設定

タッピングの感度については、IMUのスケール範囲に応じてTHRESHOLD値を調整してください。

| スケール範囲 | 2g    | 4g    | 8g    | 16g  |
|--------------|-------|-------|-------|------|
| THRESHOLD    | 40-80 | 20-40 | 10-20 | 5-10 |

## シングルクリックまたはダブルクリック

`click` 関数を使用するには、以下のように呼び出します。最初のパラメータはシングルクリックまたはダブルクリック（1または2）を検知するために使用し、2番目のパラメータは閾値の値を指定します。

```cpp
void setup() {
    ...
    lis.click(1,THRESHOLD);
    // タップが検知されたときにトリガーされる割り込み信号
    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);
}
```

**注意:** `GYROSCOPE_INT1` は加速度センサーの割り込みピン1です。

## 完全なコード

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

// クリック感度のためにこの閾値を調整
#define THRESHOLD 40
uint8_t cnt=0;

void count() {
    cnt++;
    Serial.print("タップ回数: ");
    Serial.println(cnt);
}

void setup() {
    Serial.begin(115200);
    lis.begin(Wire1);

    if (!lis) {
        Serial.println("エラー");
        while(1);
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // データ出力レート
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // スケール範囲を2gに設定

    // 1はシングルクリック、2はダブルクリック
    // 閾値が小さいほど感度が高くなる
    lis.click(1, THRESHOLD);
    // タップが検知されたときにトリガーされる割り込み信号
    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);
}

void loop() {
}
```