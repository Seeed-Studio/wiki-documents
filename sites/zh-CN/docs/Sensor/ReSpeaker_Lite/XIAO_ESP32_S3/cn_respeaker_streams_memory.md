---
description: 使用 XIAO ESP32S3 的星球大战主题播放器
title: 星球大战主题播放器
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/respeaker_streams_memory
last_update:
  date: 7/1/2024
  author: Jessie
---

本项目演示如何使用 reSpeaker Lite 开发板播放星球大战主题曲。


### 功能特性

* 播放存储在内存中的星球大战主题曲
* 利用 I2S 接口进行音频输出
* 采用 AudioTools 框架进行音频处理和流传输
* 易于使用的 AudioLogger 用于调试和监控


### 代码

```cpp
#include "AudioTools.h"
#include "StarWars30.h"

AudioInfo info(22050, 1, 16);
I2SStream i2s;  // Output to I2S
MemoryStream music(StarWars30_raw, StarWars30_raw_len);
StreamCopy copier(i2s, music); // copies sound into i2s

void setup(){
    Serial.begin(115200);
    AudioLogger::instance().begin(Serial, AudioLogger::Info);

    auto config = i2s.defaultConfig(TX_MODE);
    config.copyFrom(info);
    i2s.begin(config);
}

void loop(){
    if (!copier.copy()){
      i2s.end();
      stop();
    }
}
```

### 配置说明

`info`：定义音频配置，包括采样率（22050 Hz）、声道数（1 为单声道）和每个采样的位数（16 位）。

`i2s`：创建 I2SStream 类的实例，通过 I2S 接口输出音频。

`music`：创建 MemoryStream 对象，在内存中存储星球大战主题曲数据。

`copier`：创建 StreamCopy 对象，将音频数据从内存流复制到 I2S 流。

### 自定义设置

您可以将 `StarWars30_raw` 和 `StarWars30_raw_len` 变量替换为您自己的音频数据，以播放不同的歌曲或音效。

可以通过调整 AudioInfo 对象的参数来修改音频配置，例如采样率、声道数和每个采样的位数。