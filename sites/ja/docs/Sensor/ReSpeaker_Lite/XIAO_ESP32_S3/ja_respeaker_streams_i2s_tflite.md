---
description: ReSpeaker Lite と TensorFlow Lite を用いたキーワードスポッティング
title: reSpeaker Lite でのキーワードスポッティング
keywords:
  - ESP32S3
  - XIAO
  - ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_streams_i2s_tflite
last_update:
  date: 7/1/2024
  author: Jessie
createdAt: '2024-07-03'
updatedAt: '2026-06-17'
url: https://wiki.seeedstudio.com/ja/respeaker_streams_i2s_tflite/
---


このプロジェクトでは、reSpeaker Lite ボードと TensorFlow Lite を使用してキーワードスポッティングを行う方法を紹介します。ReSpeaker Lite は、XIAO ESP32S3 マイコンを搭載したオーディオボードで、デュアルチャネルマイクとスピーカーを備えています。本プロジェクトでは、AudioTools フレームワーク上に構築された reSpeaker Lite ライブラリを利用し、TensorFlow Lite と統合して音声分類を行います。


### 必要なライブラリ

* [TensorFlow Lite library](https://github.com/limengdu/tflite-micro-reSpeaker-Lite-arduino-examples)



### 機能

* reSpeaker Lite ボードを使用して I2S インターフェースから音声を取得
* 事前学習済み TensorFlow Lite モデルを用いたキーワードスポッティング
* 取得した音声を、`silence`、`unknown`、`yes`、`no` のあらかじめ定義されたカテゴリに分類
* 検出されたコマンドに応答するためのコールバック関数を提供
* AudioTools フレームワークを利用した音声処理およびストリーミング
* デバッグとモニタリングに便利な使いやすい AudioLogger



### コード

Arduino IDE で `streams-i2s-tflite.ino` スケッチを開きます。


スケッチを reSpeaker Lite ボードに書き込みます。

```cpp
#include "AudioTools.h"
#include "AudioLibs/TfLiteAudioStream.h"
#include "model.h"  // tensorflow model

I2SStream i2s;  // Audio source
TfLiteAudioStream tfl;  // Audio sink
const char* kCategoryLabels[4] = {
    "silence",
    "unknown",
    "yes",
    "no",
};
StreamCopy copier(tfl, i2s);  // copy mic to tfl
int channels = 1;
int samples_per_second = 16000;

void respondToCommand(const char* found_command, uint8_t score,
                      bool is_new_command) {
//  if (is_new_command) {
    char buffer[80];
    sprintf(buffer, "Result: %s, score: %d, is_new: %s", found_command, score,
            is_new_command ? "true" : "false");
    Serial.println(buffer);
//  }
}

void setup() {
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Warning);

  // setup Audioi2s input
  auto cfg = i2s.defaultConfig(RX_MODE);
  cfg.channels = channels;
  cfg.sample_rate = samples_per_second;
  cfg.use_apll = false;
  cfg.buffer_size = 512;
  cfg.buffer_count = 16;
  i2s.begin(cfg);

  // Setup tensorflow output
  auto tcfg = tfl.defaultConfig();
  tcfg.setCategories(kCategoryLabels);
  tcfg.channels = channels;
  tcfg.sample_rate = samples_per_second;
  tcfg.kTensorArenaSize = 10 * 1024;
  tcfg.respondToCommand = respondToCommand;
  tcfg.model = g_model;
  tfl.begin(tcfg);
}

void loop() { copier.copy(); }
```

出力およびログメッセージを確認するために `Serial Monitor` を開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/yes_or_no.png" alt="pir" width={800} height="auto" /></p>




### 設定

`i2s`: I2S インターフェースから音声を取得するための `I2SStream` クラスのインスタンスを作成します。

`tfl`: 取得した音声を TensorFlow Lite を使用して処理するための `TfLiteAudioStream` クラスのインスタンスを作成します。

`kCategoryLabels`: 分類結果のカテゴリラベルを定義します。

`copier`: I2S ストリームから TensorFlow Lite ストリームへ音声データをコピーする `StreamCopy` オブジェクトを作成します。

`channels`: オーディオチャネル数を指定します（モノラルの場合は 1）。

`samples_per_second`: オーディオ入力のサンプリングレートを指定します。

`respondToCommand`: コマンドが検出されたときに呼び出されるコールバック関数です。検出されたコマンド、スコア、および新しいコマンドかどうかを示すフラグを受け取ります。


### カスタマイズ

* 分類結果のカテゴリラベルを独自に定義するには、`kCategoryLabels` 配列を変更できます。

* 検出されたコマンドに基づいて特定の動作を実行するように、`respondToCommand` 関数をカスタマイズできます。

* TensorFlow Lite モデルは、model.h ファイルを更新することで、独自に学習させたモデルに置き換えることができます。


### リソース

[TensorFlow Lite library](https://github.com/limengdu/reSpeaker_Lite-Arduino-Library/tree/main/examples/streams-i2s-tflite)