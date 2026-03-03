---
description: ReSpeaker Lite RGBテスト
title: RGBテスト
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/respeaker_rgb_test
last_update:
  date: 05/15/2025
  author: Jessie
---


### 機能

ReSpeaker LiteボードのRGBライトはWS2812チップを使用しており、`GPIO1`ピンを介して制御されています。このプロジェクトでは、RGBライトが正常に動作していることを確認するために、赤、緑、青、白の異なる色を順番に表示します。




### コード

```cpp
#include <Adafruit_NeoPixel.h>

// LEDストリップのパラメータを定義
#define PIN 1            // RGB LEDに接続されているピン
#define NUMPIXELS 1      // LEDの数

Adafruit_NeoPixel strip(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);  // LEDストリップオブジェクトを初期化

void setup() {
  // デバッグ用にシリアルモニターを初期化
  Serial.begin(115200);
  
  // RGB LEDストリップを初期化
  strip.begin();
  strip.show();  // すべてのピクセルをオフ状態に初期化
}

void loop() {
  // 赤色テスト
  Serial.println("赤色テスト");
  strip.setPixelColor(0, strip.Color(255, 0, 0));  // 最初のピクセルを赤色に設定
  strip.show();  // ストリップ表示を更新
  delay(1000);   // 1秒間の遅延

  // 緑色テスト
  Serial.println("緑色テスト");
  strip.setPixelColor(0, strip.Color(0, 255, 0));  // 最初のピクセルを緑色に設定
  strip.show();
  delay(1000);

  // 青色テスト
  Serial.println("青色テスト");
  strip.setPixelColor(0, strip.Color(0, 0, 255));  // 最初のピクセルを青色に設定
  strip.show();
  delay(1000);

  // 白色テスト
  Serial.println("白色テスト");
  strip.setPixelColor(0, strip.Color(255, 255, 255));  // 最初のピクセルを白色に設定
  strip.show();
  delay(1000);

  // LEDをオフにする
  Serial.println("LEDをオフにする");
  strip.setPixelColor(0, strip.Color(0, 0, 0));  // 最初のピクセルをオフに設定
  strip.show();
  delay(1000);
}
```


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/rgb_led.gif" alt="pir" width={400} height="auto" /></p>





### 設定

`strip.setPixelColor`: ストリップ内のLEDの色を設定します。

`strip.show`: LEDに色の変更を適用します。