---
description: ブザー
title: ブザー
keywords:
- SenseCAP Indicator RP2040 開発チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_RP2040_Buzzer
last_update:
  date: 05/15/2025
  author: Thomas
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **ブザー**

SenseCAP Indicator に内蔵されているブザーはパッシブブザーであり、AC信号（PWM）が必要で、それによって音を出力します。これにより、さまざまな音色や効果を生成することができます。

## **基本**

```cpp
#include <Arduino.h>

#define Buzzer  19 // ブザーのGPIO

void setup() {
  digitalWrite(Buzzer, OUTPUT); // ブザーを出力として設定
  analogWrite(Buzzer, 127);   // 50%デューティサイクルのPWMを生成
}

void loop() {
  delay(1000);
  digitalWrite(Buzzer, LOW); // ブザーをオフにする
}
```

## **サンプルコード 1**

この例では、ブザーを使用してメロディを再生します。適切な周波数の方形波をブザーに送信し、対応する音を生成します。  
「きらきら星」のメロディを再生します。

```cpp
#include <Arduino.h>
#define Buzzer  19 // ブザーのGPIO

int length = 15;         /* 音符の数 */
char notes[] = "ccggaagffeeddc ";
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void setup() {
    // ブザーのピンを出力として設定
    pinMode(19, OUTPUT);
}

void loop() {
    for(int i = 0; i < length; i++) {
        if(notes[i] == ' ') {
            delay(beats[i] * tempo);
        } else {
            playNote(notes[i], beats[i] * tempo);
        }
        delay(tempo / 2);    /* 音符間の遅延 */
    }
}

// 音を再生
void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(19, HIGH);
        delayMicroseconds(tone);
        digitalWrite(19, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // 音符名に対応する音を再生
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}
```

## **サンプルコード 2**

この例では、CO2値が1000ppmを超えた場合にアラームを鳴らします。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>

#define Buzzer  19 // ブザーのGPIO

SensirionI2CScd4x scd4x;
String SDDataString = "";

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
    Serial.print("CO2:");
    Serial.print(co2);
    Serial.print("\t");
    Serial.print("温度:");
    Serial.print(temperature);
    Serial.print("\t");
    Serial.print("湿度:");
    Serial.println(humidity);
  }

  if( co2 > 1000 ) {
    analogWrite(Buzzer, 10);
  } else {
    analogWrite(Buzzer, 0);
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

  digitalWrite(Buzzer, OUTPUT);
}

void loop() {
  delay(5000);
  sensor_scd4x_get();
}
```

# **技術サポート**

ご安心ください！質問がある場合は、[Seeed公式Discordチャンネル](https://discord.com/invite/QqMgVwHT3X)をご利用ください。

大量注文やカスタマイズのご要望がある場合は、iot@seeed.cc までお問い合わせください。