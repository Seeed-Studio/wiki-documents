---
description: ReSpeaker Lite を使用した正弦波ジェネレーター
title: ReSpeaker Lite を使用した正弦波ジェネレーター
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/respeaker_streams_generator
last_update:
  date: 05/15/2025
  author: Jessie
---


このプロジェクトでは、ReSpeaker Lite ボードの I2S インターフェースを使用して正弦波を生成し、再生する方法を示します。ReSpeaker Lite は、デュアルチャンネルのマイクとスピーカーを備えた XIAO ESP32S3 マイクロコントローラーを統合したオーディオボードです。

### 機能

* 指定された周波数で正弦波を生成
* I2S インターフェースを介して生成された正弦波を再生
* AudioTools フレームワークを使用してオーディオ処理とストリーミングを実現
* デバッグとモニタリングに便利な AudioLogger を利用

### コード

```cpp
#include "AudioTools.h"

AudioInfo info(16000, 2, 32);                              // サンプルレート、チャンネル数: 2=ステレオ, 1=モノラル, サンプルあたりのビット数 (int16_t = 16ビット)
SineWaveGenerator<int16_t> sineWave(32000);                // 最大振幅32000のSoundGeneratorのサブクラス
GeneratedSoundStream<int16_t> sound(sineWave);             // 正弦波から生成されたストリーム
I2SStream out; 
StreamCopy copier(out, sound);                             // soundをi2sにコピー

// Arduino Setup
void setup(void) {  
  // シリアルを開く
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // I2Sを開始
  Serial.println("I2Sを開始しています...");
  auto config = out.defaultConfig(TX_MODE);
  config.copyFrom(info); 
  out.begin(config);

  // 正弦波の設定
  sineWave.begin(info, N_B4);
  Serial.println("開始しました...");
}

// Arduino loop - soundをoutにコピー
void loop() {
  copier.copy();
}
```

### 設定

`info`: サンプルレート、チャンネル数（ステレオの場合は2、モノラルの場合は1）、サンプルあたりのビット数（16ビット）を含むオーディオ設定を定義します。

`sineWave`: 最大振幅32000の SineWaveGenerator クラスのインスタンスを作成します。

`sound`: sineWave ジェネレーターを使用して GeneratedSoundStream オブジェクトを作成します。

`out`: オーディオ出力用の I2SStream クラスのインスタンスを作成します。

`copier`: 生成された音声を I2S 出力にコピーする StreamCopy オブジェクトを作成します。