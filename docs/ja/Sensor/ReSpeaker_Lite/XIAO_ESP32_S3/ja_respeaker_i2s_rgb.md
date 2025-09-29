---
description: I2S RGBを使用したXIAO ESP32S3
title: I2S RGBの使用方法
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/respeaker_i2s_rgb
last_update:
  date: 05/15/2025
  author: Jessie
---


このプロジェクトでは、reSpeakerボードを使用して、I2Sインターフェースを介して受信したオーディオ入力の強度に基づいてNeoPixel LEDストリップを制御する方法を示します。LEDストリップは、オーディオの平均強度に応じて明るさと色を調整して反応します。

### ハードウェア要件

* ReSpeaker Liteボード（統合されたXIAO ESP32S3マイクロコントローラー付き）

* [Grove - RGB LED Stick](https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Mini.html)

* ジャンパーワイヤー


### 配線

NeoPixel LEDストリップをreSpeakerボードに接続します：

* LEDストリップのデータピンをreSpeakerのD2ピンに接続

* LEDストリップの電源およびグランドピンを適切な電源に接続

I2SマイクはすでにreSpeakerボードに統合されているため、オーディオ入力のための追加の配線は必要ありません。


スケッチ内の以下の定数を必要に応じて変更してください：

`PIN`: NeoPixelストリップのデータピンに接続されているピン番号（デフォルト: D2）
`NUMPIXELS`: NeoPixelストリップのピクセル数（デフォルト: 10）
`sampleRate`: I2Sオーディオ入力のサンプルレート（デフォルト: 16000 Hz）


`Serial Monitor`を開いて、平均オーディオ強度値を確認します。

### 機能

スケッチは以下のタスクを実行します：

NeoPixel LEDストリップを初期化し、その明るさを設定します。

I2Sインターフェースを構成します。

I2Sインターフェースから1024サンプルのブロックでオーディオサンプルを継続的に読み取ります。

ゼロ以外のオーディオサンプルの絶対値の合計を計算し、平均強度を決定します。

平均強度をNeoPixelストリップ上のアクティブなLEDの数にマッピングします。

各LEDの位置とマッピングされた強度値に基づいて、LEDの色と明るさを更新します。

色はストリップの長さに沿って青から緑に変化します。
非アクティブなLEDはオフになります。
NeoPixelストリップ上の更新されたLEDの色を表示します。

デバッグ目的で平均オーディオ強度値をSerial Monitorに出力します。

各反復間に100ミリ秒の遅延を挟んでプロセスを繰り返します。


### コード

```cpp
/**
 * @file i2s_rgb.ino
 * @author Seeed Studio
 * @brief 音楽スペクトロメーターの作成
 * @version 1.0
 * @date 2024-06-28
 *
 * @copyright Copyright (c) 2024
 */

#include <ESP_I2S.h>
#include <wav_header.h>
#include <Adafruit_NeoPixel.h>

I2SClass I2S;

#define PIN        D2
#define NUMPIXELS  10
Adafruit_NeoPixel strip = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);
#define DELAYVAL   500                                // ピクセル間の一時停止時間（ミリ秒）

const int sampleRate = 16000;                         // サンプルレート（Hz）
const int frequency = 440;                            // 正弦波の周波数（Hz）
const int amplitude = 500;                            // 正弦波の振幅
int32_t sample = amplitude;                           // 現在のサンプル値
const int halfWavelength = sampleRate / frequency;    // 正弦波の半波長

bool i2s_rgb = true;


void setup() {
  Serial.begin(115200);
//  while(!Serial);             // シリアルポートが接続されるまで待機

  strip.begin();
  strip.show();
  strip.setBrightness(20);

  I2S.setPins(8, 7, 43, 44);  // I2Sピンを構成
  if (!I2S.begin(I2S_MODE_STD, sampleRate, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_STEREO)){
    Serial.println("I2Sの初期化に失敗しました！");
    while(1);                 // 初期化に失敗した場合は停止
  }
}

void loop() {
  int32_t sample_read;
  uint32_t sum = 0;
  int count = 0;

  // I2Sからオーディオデータを読み取る
  for (int i = 0; i < 1024; i++) {
    sample_read = I2S.read();
    if (sample_read != 0 && sample_read != 0xFFFF){
      sum += abs(sample_read);  // 絶対値の合計を計算
      count++;
    }
  }

  int average = sum / count;    // 平均強度の計算
  Serial.println(average);

  int activeLEDs = map(average, 30000, 36000, 0, NUMPIXELS);  // 平均値をLEDの数にマッピング

  // LEDストリップの明るさと色を更新
  for (int i = 0; i < NUMPIXELS; i++) {
    if (i < activeLEDs) {
      // LEDの位置に応じて色を設定
      int colorIntensity = map(i, 0, NUMPIXELS - 1, 0, 255);
      strip.setPixelColor(i, strip.Color(0, colorIntensity, 255 - colorIntensity));  // 青から緑への変化
    } else {
      strip.setPixelColor(i, strip.Color(0, 0, 0));  // 非アクティブなLEDをオフにする
    }
  }
  strip.show();

  delay(100);
}
```

### カスタマイズ

オーディオ反応型NeoPixelストリップの動作を以下のパラメータを変更することでカスタマイズできます：

`DELAYVAL`: 各ピクセル更新間の遅延時間（ミリ秒）（デフォルト: 500）
`activeLEDsのマッピング範囲`: 平均強度値をアクティブなLEDの数にマッピングする範囲を調整（デフォルト: 30000から36000）
`カラースキーム`: strip.setPixelColor()関数を変更して、色の変化を変更したり、LEDに異なる色を使用したりする