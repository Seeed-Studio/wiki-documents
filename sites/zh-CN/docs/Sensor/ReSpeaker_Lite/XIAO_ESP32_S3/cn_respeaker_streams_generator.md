---
description: 使用 ReSpeaker Lite 的正弦波生成器
title: 使用 ReSpeaker Lite 的正弦波生成器
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/respeaker_streams_generator
last_update:
  date: 7/1/2024
  author: Jessie
---


本项目演示了如何生成正弦波并使用 reSpeaker Lite 板上的 I2S 接口播放。reSpeaker Lite 是一款集成了 XIAO ESP32S3 微控制器的音频板，具有双通道麦克风和扬声器。

### 功能特性

* 生成指定频率的正弦波
* 通过 I2S 接口播放生成的正弦波
* 利用 AudioTools 框架进行音频处理和流传输
* 易于使用的 AudioLogger 用于调试和监控

### 代码

```cpp
#include "AudioTools.h"

AudioInfo info(16000, 2, 32);                              // 采样率，通道数：2=立体声，1=单声道，每个采样的位数（int16_t = 16位）
SineWaveGenerator<int16_t> sineWave(32000);                // SoundGenerator 的子类，最大振幅为 32000
GeneratedSoundStream<int16_t> sound(sineWave);             // 从正弦波生成的流
I2SStream out; 
StreamCopy copier(out, sound);                             // 将声音复制到 i2s

// Arduino 设置
void setup(void) {  
  // 打开串口
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // 启动 I2S
  Serial.println("starting I2S...");
  auto config = out.defaultConfig(TX_MODE);
  config.copyFrom(info); 
  out.begin(config);

  // 设置正弦波
  sineWave.begin(info, N_B4);
  Serial.println("started...");
}

// Arduino 循环 - 将声音复制到输出
void loop() {
  copier.copy();
}
```

### 配置

`info`：定义音频配置，包括采样率、通道数（2 为立体声，1 为单声道）和每个采样的位数（16 位）。

`sineWave`：创建一个 SineWaveGenerator 类的实例，最大振幅为 32000。

`sound`：使用 sineWave 生成器创建一个 GeneratedSoundStream 对象。

`out`：创建一个 I2SStream 类的实例用于音频输出。

`copier`：创建一个 StreamCopy 对象，将生成的声音复制到 I2S 输出。