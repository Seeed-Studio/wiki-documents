---
description: 録音と再生
title: 録音と再生
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/respeaker_record_and_play
last_update:
  date: 05/15/2025
  author: Jessie
---


### 機能

このプロジェクトは、I2Sインターフェースを使用した基本的なループバックメカニズムを示しており、I2Sオーディオデータの読み取りおよび書き込み機能をテストします。I2Sモードを切り替えることで、マイクからオーディオデータを読み取り、スピーカーに書き込むことができます。

### コード

```cpp

#include "AudioTools.h"

AudioInfo info(16000, 2, 32);
// SineWaveGenerator<int16_t> sineWave(32000);                // 最大振幅32000のSoundGeneratorのサブクラス
// GeneratedSoundStream<int16_t> sound(sineWave);             // サイン波から生成されたストリーム
I2SStream out; 
I2SConfig config;
// StreamCopy copier(out, sound);                             // soundをi2sにコピー

uint8_t buffer[128000];
size_t bytes_read = 0;
size_t bytes_write = 0;

// Arduino Setup
void setup(void) {  
  // シリアルを開く
  Serial.begin(115200);
  while(!Serial);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // I2Sを開始
  Serial.println("I2Sを開始しています...");
  config = out.defaultConfig(TX_MODE);
  config.copyFrom(info); 
  // カスタムI2S出力ピン
  config.pin_bck = 8;
  config.pin_ws = 7;
  config.pin_data = 43;
  config.pin_data_rx = 44;
  config.is_master = false;
  out.begin(config);

  // サイン波の設定
  // sineWave.begin(info, N_B4);
  Serial.println("開始しました...");
}

// Arduinoループ - 音声を出力にコピー
void loop() {
  // copier.copy();
  out.end();
  config.rx_tx_mode = RX_MODE;
  out.begin(config);
  bytes_read = out.readBytes(buffer, 128000);
  out.end();
  config.rx_tx_mode = TX_MODE;
  out.begin(config);
  bytes_write= out.write(buffer, 128000);
}
```

### カスタマイズ

**読み取りおよび書き込みの期間を変更する**

バッファのサイズや、`out.readBytes`および`out.write`で使用するバイト数を調整することで、オーディオの読み取りおよび書き込み操作の期間を制御できます。

**例**: 0.5秒間のオーディオ:

```cpp
uint8_t buffer[64000];
bytes_read = out.readBytes(buffer, 64000);
bytes_write = out.write(buffer, 64000);
```

:::tip
バッファを収容するために十分な動的メモリがあることを確認してください。特に長い期間のオーディオデータを読み取る場合は注意が必要です。ESP32-S3デバイスのメモリが不足している場合、メモリ使用量を最適化するか、代替ソリューションを検討する必要があります。
:::