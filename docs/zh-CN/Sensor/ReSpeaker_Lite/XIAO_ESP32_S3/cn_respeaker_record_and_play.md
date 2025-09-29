---
description: 录音和播放
title: 录音和播放
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/respeaker_record_and_play
last_update:
  date: 7/1/2024
  author: Jessie
---


### 功能


该项目演示了使用 I2S 接口的基本环回机制，用于测试 I2S 音频数据的读取和写入功能。通过切换 I2S 模式，从麦克风读取音频数据，然后将其写入扬声器。


### 代码

```cpp

#include "AudioTools.h"

AudioInfo info(16000, 2, 32);
// SineWaveGenerator<int16_t> sineWave(32000);                // subclass of SoundGenerator with max amplitude of 32000
// GeneratedSoundStream<int16_t> sound(sineWave);             // Stream generated from sine wave
I2SStream out; 
I2SConfig config;
// StreamCopy copier(out, sound);                             // copies sound into i2s

uint8_t buffer[128000];
size_t bytes_read = 0;
size_t bytes_write = 0;

// Arduino Setup
void setup(void) {  
  // Open Serial 
  Serial.begin(115200);
  while(!Serial);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // start I2S
  Serial.println("starting I2S...");
  config = out.defaultConfig(TX_MODE);
  config.copyFrom(info); 
  // Custom I2S output pins
  config.pin_bck = 8;
  config.pin_ws = 7;
  config.pin_data = 43;
  config.pin_data_rx = 44;
  config.is_master = false;
  out.begin(config);

  // Setup sine wave
  // sineWave.begin(info, N_B4);
  Serial.println("started...");
}

// Arduino loop - copy sound to out 
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


### 自定义


**修改读取和写入持续时间**

您可以通过调整缓冲区大小以及 out.readBytes 和 out.write 中的字节数来控制音频读取和写入操作的持续时间。

**示例**：0.5 秒的音频：

```cpp
uint8_t buffer[64000];
bytes_read = out.readBytes(buffer, 64000);
bytes_write = out.write(buffer, 64000);
```


:::tip
确保您有足够的动态内存来容纳缓冲区，特别是在读取较长持续时间的音频数据时。如果您的 ESP32-S3 设备内存不足，您可能需要优化内存使用或考虑替代解决方案。
:::