---
description: Grove ADC
title: Grove ADC
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_RP2040_Grove_ADC
last_update:
  date: 5/23/2023
  author: Thomas
---
# **概要**

SenseCAP Indicatorには、Groveモジュールを接続するための2つのGroveインターフェースがあります。1つはデフォルトのI2Cポートで、もう1つは設定可能なデジタル/アナログピンです。これはPWM出力にも使用できます。両方のGroveポートはデジタルとして使用できます。開発者により多くの可能性を提供します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>


このリポジトリでは、SenseCAP IndicatorでGrove IOを使用する方法を紹介します。これにより、[Groveエコシステム](https://www.seeedstudio.com/category/Grove-c-1003.html)のプラグアンドプレイ機能を楽しむことができ、RP2040互換のGPIOも使用できます！

# **Grove(ADC)**

Grove設定可能A/Dポートをアナログポートとして使用するには、以下のように定義するだけです：

```cpp
#define ADC1  27
```

## **サンプルコード**：

このサンプルコードでは、grove ADCインターフェースに[光センサー](/ja/Grove-Light_Sensor)を接続する方法を紹介します。
出力信号はアナログ値で、光が明るいほど値が大きくなります。

```cpp
#include <Arduino.h>

#define ADC1  27

void setup() {
  Serial.begin(115200);
}

void loop() {
  int adc0_data = analogRead(ADC1);
  Serial.println(adc0_data);
  delay(1000);
}
```