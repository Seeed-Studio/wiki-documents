---
description: Grove ADC
title: Grove ADC
keywords:
- 開発チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_RP2040_Grove_ADC
last_update:
  date: 05/15/2025
  author: Thomas
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **概要**

SenseCAP Indicatorには、Groveモジュールを接続するための2つのGroveインターフェースがあります。一つはデフォルトのI2Cポートで、もう一つは設定可能なデジタル/アナログピンです。このピンはPWM出力としても使用できます。両方のGroveポートはデジタルとして使用可能であり、開発者により多くの可能性を提供します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>

このリポジトリでは、SenseCAP Indicator上でGrove IOを使用する方法を紹介します。これにより、[Grove Ecosystem](https://www.seeedstudio.com/category/Grove-c-1003.html)のプラグアンドプレイ機能を楽しむとともに、RP2040互換のGPIOを使用することができます。

# **Grove(ADC)**

Groveの設定可能なA/Dポートをアナログポートとして使用するには、以下のように定義します：

```cpp
#define ADC1  27
```

## **サンプルコード**:

このサンプルコードでは、Grove ADCインターフェースに[光センサー](/ja/Grove-Light_Sensor)を接続する方法を紹介します。出力信号はアナログ値であり、光が明るいほど値が大きくなります。

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