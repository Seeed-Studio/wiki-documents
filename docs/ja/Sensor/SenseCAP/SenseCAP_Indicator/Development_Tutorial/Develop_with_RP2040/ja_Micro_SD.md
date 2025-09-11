---
description: MicroSD
title: MicroSD
keywords:
- 開発チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_RP2040_MicroSD
last_update:
  date: 05/15/2025
  author: Thomas
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **MicroSD**

RP2040には、外部のMicroSDカードモジュールとインターフェースするために使用できるGPIOピンのセットがあります。

RP2040でMicroSDカードを使用するには、SPI（シリアルペリフェラルインターフェース）プロトコルを使用してSDカードモジュールをマイクロコントローラーのGPIOピンに接続します。これには、以下のRP2040のピンをMicroSDカードモジュールの対応するピンに接続する必要があります：

SPI SCK（例：GPIO10）をSD_SCKに接続  
SPI TX（例：GPIO11）をSD_MOSIに接続  
SPI RX（例：GPIO12）をSD_MISOに接続  
単一のGPIOピン（例：GPIO13）をSDカードモジュールのCS（チップセレクト）ピンに接続  

```cpp
 // SDカード用のSPIインターフェースを初期化
  const int chipSelect = 13;
  SPI1.setSCK(10);
  SPI1.setTX(11);
  SPI1.setRX(12);
```

ハードウェア接続が確立されたら、ArduinoのSDライブラリなどのソフトウェアライブラリを使用して、MicroSDカードにデータを読み書きできます。SDライブラリは、SDカードの初期化、ファイルの開閉、ファイルデータの読み書き、その他のファイルシステム操作を行うための関数を提供します。

**注意**: RP2040上のMicroSDカードインターフェースのパフォーマンスは、SDカードの速度、配線の品質、ソフトウェアの効率などの要因に依存します。また、最大32GBのSDカードがサポートされています。

## **サンプルコード**

このサンプルコードは、CO2データを読み取り、そのデータをSDカードに保存する機能を実現します。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>


SensirionI2CScd4x scd4x;
// SDカードに書き込むデータを格納する文字列を初期化
String SDDataString = "";

void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}
// センサーを電源オンにする関数
void sensor_scd4x_init(void) {
  uint16_t error;
  char errorMessage[256];

  scd4x.begin(Wire);

  // 以前に開始された可能性のある測定を停止
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
  // 測定を読み取る
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
// SDカードが初期化されているか確認
  if (!SD.begin(chipSelect, 1000000, SPI1)) {
    Serial.println("カードが失敗したか、存在しません");
  } else {
    Serial.println("カードが初期化されました。");
  }

  sensor_scd4x_init();
}

void loop() {

  delay(5000);
  // SDデータ文字列をクリアし、シリアルモニタにメッセージを表示
  SDDataString = "";
  Serial.printf("\r\n\r\n--------- 測定開始 %d-------\r\n", cnt);

  SDDataString += String(cnt);
  SDDataString += ',';

  cnt++;
  sensor_scd4x_get();
  // datalog.csvファイルを開いて書き込み
  File dataFile = SD.open("datalog.csv", FILE_WRITE);
  // ファイルが利用可能であれば、書き込みを行う
  if (dataFile) {
    dataFile.println(SDDataString);
    dataFile.close();
    // シリアルポートにも出力
    Serial.print("SD書き込み: ");
    Serial.println(SDDataString);
  } else {
    Serial.println("datalog.txtのオープン中にエラーが発生しました");
  }

}
```

# **技術サポート**

ご安心ください！質問がある場合は、[Seeed公式Discordチャンネル](https://discord.com/invite/QqMgVwHT3X)をご利用ください。

大量注文やカスタマイズの要件がある場合は、iot@seeed.ccまでお問い合わせください。