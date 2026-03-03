---
description: CO2 Sensor Built-in
title: CO2 Sensor Built-in
keywords:
- SenseCAP Indicator RP2040 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_RP2040_CO2
last_update:
  date: 5/23/2023
  author: Thomas
---
# **CO2センサー（内蔵）**

SenseCAP Indicator（D1S/D1Proバージョン）には内蔵のSCD41センサーが搭載されており、0-40000ppmの範囲でCO2値を検出できます。
CO2濃度は空気の質を評価し、呼吸する全ての人にとって安全で健康的であることを確保するための重要な基準です。


空気中のCO2レベル：
* 通常の屋外レベル：350 - 450 ppm
* 許容レベル：< 600 ppm
* 息苦しさと臭いの苦情：600 - 1000 ppm
* ASHRAEとOSHA基準：1000 ppm
* 一般的な眠気：1000 - 2500 ppm
* 健康への悪影響が予想される：2500 - 5000 ppm


**サンプルコード**：

この例では、IICインターフェースを通じて内蔵のSCD41 Co2センサーの値を読み取り、シリアルモニターに出力します。

以下のライブラリに基づいています：

[Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core/)
[SCD41 CO2 sensor library](https://github.com/Sensirion/arduino-i2c-scd4x)

**注意**：内蔵センサーを使用する際は、センサーの電源を有効にする必要があります。


```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>


SensirionI2CScd4x scd4x;
String SDDataString = "";

//The built-in sensor needs to be powered on
void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}

void sensor_scd4x_init(void) {
  uint16_t error;
  char errorMessage[256];

  scd4x.begin(Wire);

  // stop potentially previously started measurement
  error = scd4x.stopPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }

  // Start Measurement
  error = scd4x.startPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute startPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
}

void sensor_scd4x_get(void) {
  uint16_t error;
  char errorMessage[256];

  Serial.print("sensor scd4x: ");
  // Read Measurement
  uint16_t co2;
  float temperature;
  float humidity;
  error = scd4x.readMeasurement(co2, temperature, humidity);
  if (error) {
    Serial.print("Error trying to execute readMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (co2 == 0) {
    Serial.println("Invalid sample detected, skipping.");
  } else {
    Serial.print("Co2:");
    Serial.print(co2);
    Serial.print("\t");
    Serial.print("Temperature:");
    Serial.print(temperature);
    Serial.print("\t");
    Serial.print("Humidity:");
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

**注意：** この内蔵SCD41センサーの温度と湿度は、空気の温度と湿度を完全に表すものではありません


# **技術サポート**

ご心配なく、私たちがサポートします！ご質問は[Seeed公式Discordチャンネル](https://discord.com/invite/QqMgVwHT3X)にお越しください！

大量注文やカスタマイズ要件がある場合は、iot@seeed.ccまでお問い合わせください