---
description: 使用 ReSpeaker Lite 的 I2S 到 CSV 转换器
title: CSV 转换器
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/respeaker_streams_print
last_update:
  date: 7/1/2024
  author: Jessie
---


本项目演示了如何使用 reSpeaker Lite 开发板从 I2S 接口捕获音频数据，并将其转换为 CSV 格式以供进一步分析或处理。reSpeaker Lite 是一款集成了 XIAO ESP32S3 微控制器的音频开发板，具有双通道麦克风和扬声器。


### 功能特性

* 从 I2S 接口捕获音频数据
* 将捕获的音频数据转换为 CSV 格式
* 通过串行接口流式传输 CSV 数据以供进一步处理
* 利用 AudioTools 框架进行音频处理和流式传输
* 易于使用的 AudioLogger 用于调试和监控


### 代码

```cpp
#include "AudioTools.h"

AudioInfo info(16000, 2, 32);
I2SStream i2sStream; // Access I2S as stream
CsvOutput<int32_t> csvStream(Serial);
StreamCopy copier(csvStream, i2sStream); // copy i2sStream to csvStream

// Arduino Setup
void setup(void) {
    Serial.begin(115200);
    AudioLogger::instance().begin(Serial, AudioLogger::Info);
    
    auto cfg = i2sStream.defaultConfig(RX_MODE);
    cfg.copyFrom(info);
    cfg.i2s_format = I2S_STD_FORMAT; // or try with I2S_LSB_FORMAT
    cfg.is_master = false;  // this module nees a master clock if the ESP32 is master
    cfg.use_apll = false;   // try with yes
    i2sStream.begin(cfg);

    // make sure that we have the correct channels set up
    csvStream.begin(info);

}

// Arduino loop - copy data
void loop() {
    copier.copy();
}
```

### 配置说明

`info`：定义音频配置，包括采样率、通道数（2 为立体声，1 为单声道）和每个采样的位数（32 位）。

`i2sStream`：创建 `I2SStream` 类的实例，以将 I2S 接口作为流进行访问。

`csvStream`：创建 `CsvOutput` 对象，将音频数据转换为 CSV 格式并通过串行接口进行流式传输。

`copier`：创建 `StreamCopy` 对象，将音频数据从 I2S 流复制到 CSV 流。

`cfg`：使用所需的设置配置 I2S 流，如音频格式、主/从模式和 APLL 使用。


打开 `Serial Plotter` 查看输出波形。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/waves.gif" alt="pir" width={600} height="auto" /></p>