---
description: CO2センサー内蔵
title: CO2センサー内蔵
keywords:
- SenseCAP Indicator RP2040 開発チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_RP2040_CO2
last_update:
  date: 05/15/2025
  author: Thomas
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **CO2センサー（内蔵）**

SenseCAP Indicator（D1S/D1Proバージョン）には内蔵のSCD41センサーが搭載されており、0～40000ppmの範囲でCO2値を検出することができます。  
CO2濃度は空気の質を評価し、呼吸するすべての人々にとって安全で健康的であることを保証するための重要な基準です。

空気中のCO2濃度レベル：
* 通常の屋外レベル: 350 - 450 ppm
* 許容レベル: < 600 ppm
* 蒸し暑さや臭いの苦情: 600 - 1000 ppm
* ASHRAEおよびOSHA基準: 1000 ppm
* 一般的な眠気: 1000 - 2500 ppm
* 健康への悪影響が予想される: 2500 - 5000 ppm

**サンプルコード**：

このサンプルコードは、IICインターフェースを介して内蔵のSCD41 CO2センサーの値を読み取り、シリアルモニターに出力します。

以下のライブラリに基づいています：

[Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core/)  
[SCD41 CO2 sensor library](https://github.com/Sensirion/arduino-i2c-scd4x)

**注意**: 内蔵センサーを使用する際は、センサーの電源を有効にする必要があります。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>

SensirionI2CScd4x scd4x;
String SDDataString = "";

// 内蔵センサーの電源をオンにする必要があります
void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}

void sensor_scd4x_init(void) {
  uint16_t error;
  char errorMessage[256];

  scd4x.begin(Wire);

  // 以前に開始された測定を停止
  error = scd4x.stopPeriodicMeasurement();
  if (error) {
    Serial.print("stopPeriodicMeasurement()の実行中にエラーが発生しました: ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }

  // 測定を開始
  error = scd4x.startPeriodicMeasurement();
  if (error) {
    Serial.print("startPeriodicMeasurement()の実行中にエラーが発生しました: ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
}

void sensor_scd4x_get(void) {
  uint16_t error;
  char errorMessage[256];

  Serial.print("センサー scd4x: ");
  // 測定値を読み取る
  uint16_t co2;
  float temperature;
  float humidity;
  error = scd4x.readMeasurement(co2, temperature, humidity);
  if (error) {
    Serial.print("readMeasurement()の実行中にエラーが発生しました: ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (co2 == 0) {
    Serial.println("無効なサンプルが検出されました。スキップします。");
  } else {
    Serial.print("Co2:");
    Serial.print(co2);
    Serial.print("\t");
    Serial.print("温度:");
    Serial.print(temperature);
    Serial.print("\t");
    Serial.print("湿度:");
    Serial.println(humidity);
  }
}

int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_scd4x_init();
}

void loop() {
  delay(5000);
  sensor_scd4x_get();
}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/scd4xsensor.png"/></div>

**注意:** この内蔵SCD41センサーの温度と湿度は、空気の温度と湿度を完全に表しているわけではありません。

# **技術サポート**

ご安心ください！私たちがサポートします！質問がある場合は、[Seeed公式Discordチャンネル](https://discord.com/invite/QqMgVwHT3X)をご利用ください。

大量注文やカスタマイズの要件がある場合は、iot@seeed.ccまでお問い合わせください。