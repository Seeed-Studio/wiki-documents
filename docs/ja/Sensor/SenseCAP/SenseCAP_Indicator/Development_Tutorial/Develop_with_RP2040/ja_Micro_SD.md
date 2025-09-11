---
description: MicroSD
title: MicroSD
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_RP2040_MicroSD
last_update:
  date: 5/23/2023
  author: Thomas
---
# **MicroSD**

RP2040には、外部MicroSDカードモジュールとのインターフェースに使用できるGPIOピンのセットがあります。

RP2040でMicroSDカードを使用するには、SPI（Serial Peripheral Interface）プロトコルを使用してSDカードモジュールをマイクロコントローラーのGPIOピンに接続します。これには、RP2040の以下のピンをMicroSDカードモジュールの対応するピンに接続することが含まれます：

SPI SCK（GPIO10など）をSD_SCKに
SPI TX（GPIO11など）をSD_MOSIに
SPI RX（GPIO12など）をSD_MISOに
単一のGPIOピン（GPIO13など）をSDカードモジュールのCS（チップセレクト）ピンに

```cpp
 // SDカード用のSPIインターフェースを初期化
  const int chipSelect = 13;
  SPI1.setSCK(10);
  SPI1.setTX(11);
  SPI1.setRX(12);
```

ハードウェア接続が確立されたら、ArduinoのSDライブラリなどのソフトウェアライブラリを使用して、MicroSDカードにデータを読み書きできます。SDライブラリは、SDカードの初期化、ファイルの開閉、ファイルデータの読み書き、その他のファイルシステム操作を実行する関数を提供します。

**注意**：RP2040のMicroSDカードインターフェースの性能は、SDカードの速度、配線品質、ソフトウェア効率などの要因に依存し、最大32GBのSDカードがサポートされます。

## **サンプルコード**

このサンプルコードは、CO2データを読み取り、そのデータをSDに保存することを実現します。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>


SensirionI2CScd4x scd4x;
//SDカードへの書き込み用データを格納する文字列を初期化
String SDDataString = "";

void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}
// センサーの電源をオンにする関数
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
  // SDデータ文字列にデータを追加
  SDDataString += "scd4x,";
  if (error) {
    SDDataString += "-,-,-,";
  } else {
    SDDataString += String(co2);
    SDDataString += ',';
    SDDataString += String(temperature);
    SDDataString += ',';
    SDDataString += String(humidity);
    SDDataString += ',';
  }
}


int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();
  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();
 // SDカード用のSPIインターフェースを初期化
  const int chipSelect = 13;
  SPI1.setSCK(10);
  SPI1.setTX(11);
  SPI1.setRX(12);
// SDカードが初期化されているかチェック
  if (!SD.begin(chipSelect, 1000000, SPI1)) {
    Serial.println("Card failed, or not present");
  } else {
    Serial.println("card initialized.");
  }

  sensor_scd4x_init();
}

void loop() {

  delay(5000);
  // SDデータ文字列をクリアし、シリアルモニターにメッセージを出力
  SDDataString = "";
  Serial.printf("\r\n\r\n--------- start measure %d-------\r\n", cnt);

  SDDataString += String(cnt);
  SDDataString += ',';

  cnt++;
  sensor_scd4x_get();
  // 書き込み用にdatalog.csvファイルを開く
  File dataFile = SD.open("datalog.csv", FILE_WRITE);
  // if the file is available, write to it:
  if (dataFile) {
    dataFile.println(SDDataString);
    dataFile.close();
    // print to the serial port too:
    Serial.print("sd write: ");
    Serial.println(SDDataString);
  } else {
    Serial.println("error opening datalog.txt");
  }

}


```

# **技術サポート**

ご心配なく、私たちがサポートします！ご質問は[Seeed公式Discordチャンネル](https://discord.com/invite/QqMgVwHT3X)にお越しください！

大量注文やカスタマイズ要件がある場合は、iot@seeed.ccまでお問い合わせください。