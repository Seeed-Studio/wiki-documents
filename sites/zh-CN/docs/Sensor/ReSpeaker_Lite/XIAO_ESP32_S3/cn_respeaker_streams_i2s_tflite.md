---
description: 使用 ReSpeaker Lite 和 TensorFlow Lite 进行关键词识别
title: 在 reSpeaker Lite 上进行关键词识别 
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
updatedAt: '2024-10-09'
url: https://wiki.seeedstudio.com/cn/respeaker_streams_i2s_tflite/
---


本项目演示如何使用 reSpeaker Lite 开发板和 TensorFlow Lite 进行关键词识别。ReSpeaker Lite 是一款集成了 XIAO ESP32S3 微控制器的音频板，配备双通道麦克风和扬声器。该项目使用基于 AudioTools 框架构建的 reSpeaker Lite 库，并与 TensorFlow Lite 集成以实现音频分类。


### 所需库

* [TensorFlow Lite library](https://github.com/limengdu/tflite-micro-reSpeaker-Lite-arduino-examples)



### 功能特性

* 使用 reSpeaker Lite 开发板通过 I2S 接口采集音频
* 使用预训练的 TensorFlow Lite 模型进行关键词识别
* 将采集到的音频分类为预定义类别：`silence`、`unknown`、`yes` 和 `no`
* 提供回调函数以响应检测到的指令
* 利用 AudioTools 框架进行音频处理和流式传输
* 易于使用的 AudioLogger，便于调试和监控



### 代码

在 Arduino IDE 中打开 `streams-i2s-tflite.ino` 示例。


将示例上传到你的 reSpeaker Lite 开发板。

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

打开 `Serial Monitor` 以查看输出和日志信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/yes_or_no.png" alt="pir" width={800} height="auto" /></p>




### 配置说明

`i2s`：创建一个 `I2SStream` 类的实例，用于从 I2S 接口采集音频。

`tfl`：创建一个 `TfLiteAudioStream` 类的实例，用于使用 TensorFlow Lite 处理采集到的音频。

`kCategoryLabels`：定义分类结果的类别标签。

`copier`：创建一个 `StreamCopy` 对象，用于将音频数据从 I2S 流复制到 TensorFlow Lite 流。

`channels`：指定音频通道数（单声道为 1）。

`samples_per_second`：指定音频输入的采样率。

`respondToCommand`：当检测到指令时调用的回调函数。它会接收检测到的指令、得分以及一个指示是否为新指令的标志。


### 自定义

* 你可以修改 `kCategoryLabels` 数组，为分类结果定义你自己的类别标签集合。

* 可以自定义 `respondToCommand` 函数，根据检测到的指令执行特定操作。

* 可以通过更新 model.h 文件，将 TensorFlow Lite 模型替换为你自己训练的模型。


### 资源

[TensorFlow Lite library](https://github.com/limengdu/reSpeaker_Lite-Arduino-Library/tree/main/examples/streams-i2s-tflite)