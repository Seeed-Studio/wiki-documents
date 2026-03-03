---
description: ReSpeaker LiteとTensorFlow Liteを使用したキーワードスポッティング
title: キーワードスポッティング
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/respeaker_streams_i2s_tflite
last_update:
  date: 05/15/2025
  author: Jessie
---


このプロジェクトでは、ReSpeaker LiteボードとTensorFlow Liteを使用してキーワードスポッティングを実行する方法を示します。ReSpeaker Liteは、デュアルチャンネルマイクとスピーカーを備えたXIAO ESP32S3マイクロコントローラーを統合したオーディオボードです。このプロジェクトでは、AudioToolsフレームワークを基盤としたReSpeaker Liteライブラリを使用し、TensorFlow Liteと統合してオーディオ分類を行います。


### 必要なライブラリ

* [TensorFlow Liteライブラリ](https://github.com/limengdu/tflite-micro-reSpeaker-Lite-arduino-examples)



### 機能

* ReSpeaker Liteボードを使用してI2Sインターフェースからオーディオをキャプチャ
* 事前に学習されたTensorFlow Liteモデルを使用してキーワードスポッティングを実行
* キャプチャしたオーディオを以下の事前定義されたカテゴリに分類: `silence`、`unknown`、`yes`、`no`
* 検出されたコマンドに応答するためのコールバック関数を提供
* オーディオ処理とストリーミングのためにAudioToolsフレームワークを利用
* デバッグとモニタリングのための使いやすいAudioLoggerを提供



### コード

Arduino IDEで`streams-i2s-tflite.ino`スケッチを開きます。

スケッチをReSpeaker Liteボードにアップロードします。

```cpp
#include "AudioTools.h"
#include "AudioLibs/TfLiteAudioStream.h"
#include "model.h"  // TensorFlowモデル

I2SStream i2s;  // オーディオソース
TfLiteAudioStream tfl;  // オーディオシンク
const char* kCategoryLabels[4] = {
    "silence",
    "unknown",
    "yes",
    "no",
};
StreamCopy copier(tfl, i2s);  // マイクからTensorFlow Liteへコピー
int channels = 1;
int samples_per_second = 16000;

void respondToCommand(const char* found_command, uint8_t score,
                      bool is_new_command) {
//  if (is_new_command) {
    char buffer[80];
    sprintf(buffer, "結果: %s, スコア: %d, 新しいコマンド: %s", found_command, score,
            is_new_command ? "true" : "false");
    Serial.println(buffer);
//  }
}

void setup() {
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Warning);

  // Audioi2s入力の設定
  auto cfg = i2s.defaultConfig(RX_MODE);
  cfg.channels = channels;
  cfg.sample_rate = samples_per_second;
  cfg.use_apll = false;
  cfg.buffer_size = 512;
  cfg.buffer_count = 16;
  i2s.begin(cfg);

  // TensorFlow出力の設定
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

`Serial Monitor`を開いて、出力やログメッセージを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/yes_or_no.png" alt="pir" width={800} height="auto" /></p>




### 設定

`i2s`: I2Sインターフェースからオーディオをキャプチャするための`I2SStream`クラスのインスタンスを作成します。

`tfl`: TensorFlow Liteを使用してキャプチャしたオーディオを処理するための`TfLiteAudioStream`クラスのインスタンスを作成します。

`kCategoryLabels`: 分類結果のカテゴリラベルを定義します。

`copier`: I2SストリームからTensorFlow Liteストリームにオーディオデータをコピーする`StreamCopy`オブジェクトを作成します。

`channels`: オーディオチャンネル数を指定します（モノラルの場合は1）。

`samples_per_second`: オーディオ入力のサンプルレートを指定します。

`respondToCommand`: コマンドが検出されたときに呼び出されるコールバック関数です。検出されたコマンド、スコア、および新しいコマンドかどうかを示すフラグを受け取ります。


### カスタマイズ

* 分類結果のカテゴリラベルを定義するために`kCategoryLabels`配列を変更できます。

* 検出されたコマンドに基づいて特定のアクションを実行するために`respondToCommand`関数をカスタマイズできます。

* モデル.hファイルを更新することで、独自に学習させたTensorFlow Liteモデルに置き換えることができます。


### リソース

[TensorFlow Liteライブラリ](https://github.com/limengdu/reSpeaker_Lite-Arduino-Library/tree/main/examples/streams-i2s-tflite)