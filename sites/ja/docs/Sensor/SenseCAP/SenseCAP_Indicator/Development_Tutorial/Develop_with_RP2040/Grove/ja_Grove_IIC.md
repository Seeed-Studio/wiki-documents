---
description: Grove IIC
title: Grove IIC
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_RP2040_Grove_IIC
last_update:
  date: 5/23/2023
  author: Thomas
---
# **概要**

SenseCAP IndicatorにはGroveモジュールを接続するための2つのGroveインターフェースがあります。1つはデフォルトのI2Cポートで、もう1つは設定可能なデジタル/アナログピンで、PWM出力としても使用できます。両方のGroveポートはデジタルとして使用できます。開発者により多くの可能性を提供します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>

このリポジトリでは、SenseCAP IndicatorでGrove IOを使用する方法を紹介します。これにより、[Groveエコシステム](https://www.seeedstudio.com/category/Grove-c-1003.html)のプラグアンドプレイ機能を楽しむことができ、RP2040互換のGPIOも使用できます！

# **Grove(IIC)**

より多くのアプリケーションを拡張するために、IICインターフェースを使用してより多くのセンサーを接続できます。
内蔵センサーとは異なり、SCLとSDAピンの接続を定義するだけです。

## **サンプルコード**

このサンプルコードでは、[Grove THセンサー](/ja/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor)の接続方法を紹介します：

[AHT20温湿度センサーライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/)

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