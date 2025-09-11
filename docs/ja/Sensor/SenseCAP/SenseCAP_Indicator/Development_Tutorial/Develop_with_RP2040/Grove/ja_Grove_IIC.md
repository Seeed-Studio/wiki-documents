---
description: Grove IIC
title: Grove IIC
keywords:
- 開発チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_RP2040_Grove_IIC
last_update:
  date: 05/15/2025
  author: Thomas
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **概要**

SenseCAP IndicatorにはGroveモジュールを接続するための2つのGroveインターフェースがあります。一つはデフォルトのI2Cポートで、もう一つは設定可能なデジタル/アナログピンです。このピンはPWM出力としても使用できます。両方のGroveポートはデジタルとして使用可能であり、開発者により多くの可能性を提供します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>

このリポジトリでは、SenseCAP Indicator上でGrove IOを使用する方法を紹介します。これにより、[Grove Ecosystem](https://www.seeedstudio.com/category/Grove-c-1003.html)のプラグアンドプレイ機能を楽しむとともに、RP2040互換のGPIOを使用することができます。

# **Grove(IIC)**

より多くのアプリケーションを拡張するために、IICインターフェースを使用してより多くのセンサーを接続することができます。内蔵センサーとは異なり、SCLとSDAピンの接続を定義するだけで済みます。

## **サンプルコード**:

このサンプルコードでは、[Grove THセンサー](/ja/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor)を接続する方法を紹介します。

[AHT20温度・湿度センサーライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/)

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
  if (ret)  // データ取得成功
  {
    Serial.print("湿度: ");
    Serial.print(humi * 100);
    Serial.print("  温度: ");
    Serial.println(temp);
  } else  // データ取得失敗
  {
    Serial.println("AHT20からデータ取得失敗");
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