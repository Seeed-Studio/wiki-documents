---
description: tVOC Sensor Built-in
title: tVOC Sensor Built-in
keywords:
- Indicator Development Tutorial RP2040
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_RP2040_tVOC
last_update:
  date: 5/23/2023
  author: Thomas
---
# **tVOCセンサー（内蔵）**

SenseCAP Indicatorに内蔵されているSGP40センサーは、高品質で信頼性の高いTVOCセンサーで、屋内外の空気質を監視する幅広いアプリケーションで使用できます。測定範囲は1-500 VOC Index Pointsです。

TVOCは、建築材料、清掃用品、パーソナルケア製品など、さまざまな発生源からガスとして放出される有機化学物質のグループです。


**サンプルコード:**

この例では、IICインターフェースを通じて内蔵SGP40 TVOCセンサーの値を読み取り、シリアルモニターに出力します。

以下のライブラリに基づいています：

[Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core/)

[SGP40 TVOC sensor library](https://github.com/Sensirion/arduino-i2c-sgp40)

[Transfer index library: Sensirion Gas Index Algorithm](https://github.com/Sensirion/arduino-gas-index-algorithm)

注意：内蔵センサーを使用する場合、センサーの電源を有効にする必要があります。

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp40.h>
#include <VOCGasIndexAlgorithm.h>
#include <Wire.h>

SensirionI2CSgp40 sgp40;
VOCGasIndexAlgorithm voc_algorithm;


//The built-in sensor needs to be powered on
void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}

/************************ sgp40 tvoc  ****************************/

void sensor_sgp40_init(void) {
  uint16_t error;
  char errorMessage[256];

  sgp40.begin(Wire);

  uint16_t serialNumber[3];
  uint8_t serialNumberSize = 3;

  error = sgp40.getSerialNumber(serialNumber, serialNumberSize);

  if (error) {
    Serial.print("Error trying to execute getSerialNumber(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else {
    Serial.print("SerialNumber:");
    Serial.print("0x");
    for (size_t i = 0; i < serialNumberSize; i++) {
      uint16_t value = serialNumber[i];
      Serial.print(value < 4096 ? "0" : "");
      Serial.print(value < 256 ? "0" : "");
      Serial.print(value < 16 ? "0" : "");
      Serial.print(value, HEX);
    }
    Serial.println();
  }

  uint16_t testResult;
  error = sgp40.executeSelfTest(testResult);
  if (error) {
    Serial.print("Error trying to execute executeSelfTest(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (testResult != 0xD400) {
    Serial.print("executeSelfTest failed with error: ");
    Serial.println(testResult);
  }
}

void sensor_sgp40_get(void) {
  uint16_t error;
  char errorMessage[256];
  uint16_t defaultRh = 0x8000;
  uint16_t defaultT = 0x6666;
  uint16_t srawVoc = 0;

  Serial.print("sensor sgp40: ");

  error = sgp40.measureRawSignal(defaultRh, defaultT, srawVoc);
  if (error) {
    Serial.print("Error trying to execute measureRawSignal(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else {
    Serial.print("SRAW_VOC:");
    Serial.print(srawVoc);

    int32_t voc_index = voc_algorithm.process(srawVoc);
    Serial.print(", VOC Index: ");
    Serial.println(voc_index);
  }
}

/************************ setup & loop ****************************/

void setup() {
  Serial.begin(115200);

  sensor_power_on();

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_sgp40_init();
}

void loop() {
  sensor_sgp40_get();
  delay(5000);
}

```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/tvoc.png"/></div>

「SRAW_VOC」は、VOCに対するセンサーの生信号出力を指し、通常は空気中のVOC濃度に比例する電圧または抵抗測定値です。

「VOC Index」は、空気中のVOC濃度をよりユーザーフレンドリーな形式で表現する方法として使用される計算値です。VOC指数は0から500の範囲の数値で、値が高いほどVOC濃度が高いことを示します。


# **技術サポート**

ご心配なく、私たちがサポートします！ご質問は[Seeed公式Discordチャンネル](https://discord.com/invite/QqMgVwHT3X)にお越しください！

大量注文やカスタマイズ要件がある場合は、iot@seeed.ccまでお問い合わせください