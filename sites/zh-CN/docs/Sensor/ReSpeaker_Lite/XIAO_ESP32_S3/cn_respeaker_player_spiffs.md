---
description: 使用 XIAO ESP32S3 的 MP3 播放器
title: MP3 播放器
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/respeaker_player_spiffs
last_update:
  date: 7/1/2024
  author: Jessie
---


本项目演示如何使用 reSpeaker Lite 开发板播放存储在 SPIFFS 文件系统中的 MP3 文件。


### 所需库

* [ReSpeaker Lite library](https://github.com/limengdu/reSpeaker_Lite-Arduino-Library.git)
* [ReSpeaker Lite arduino libhelix](https://github.com/limengdu/reSpeaker_Lite-arduino-libhelix)

### 功能特性

* 从 SPIFFS 文件系统播放 MP3 文件
* 利用 I2S 接口进行音频输出
* 支持元数据提取和回调
* 易于使用的 AudioPlayer 类，实现无缝音频播放


### 上传文件到 SPIFFS

您可以参考[这里的 Wiki](https://wiki.seeedstudio.com/cn/xiao_esp32s3_sense_filesystem/#serial-peripheral-interface-flash-file-system-spiffs)。

确保您拥有将文件上传到 SPIFFS 的必要工具。您可以使用 Arduino IDE 中的"ESP32 Sketch Data Upload"工具或外部工具如"ESP32 File Uploader"。

在您的项目目录中创建一个名为"data"的文件夹，并将您想要播放的 MP3 文件放入其中。

使用选择的工具将文件上传到 SPIFFS。

### 代码

```cpp
#include "AudioTools.h"
#include "AudioLibs/AudioSourceSPIFFS.h"
#include "AudioCodecs/CodecMP3Helix.h"

const char *startFilePath="/";
const char* ext="mp3";
AudioSourceSPIFFS source(startFilePath, ext);
I2SStream i2s;
MP3DecoderHelix decoder;
AudioPlayer player(source, i2s, decoder);

void printMetaData(MetaDataType type, const char* str, int len){
  Serial.print("==> ");
  Serial.print(toStr(type));
  Serial.print(": ");
  Serial.println(str);
}

void setup() {
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // setup output
  auto cfg = i2s.defaultConfig(TX_MODE);
  i2s.begin(cfg);

  // setup player
  //source.setFileFilter("*Bob Dylan*");
  player.setMetadataCallback(printMetaData);
  player.begin();
}

void loop() {
  player.copy();
}
```


### 配置

`startFilePath`：MP3 文件在 SPIFFS 中的目录路径（默认："/"）。

`ext`：音频文件的文件扩展名（默认："mp3"）。

您可以在代码中修改这些常量以匹配您的特定文件结构和需求。

### 自定义

`printMetaData`：当从音频文件中提取元数据时会调用此函数。您可以自定义此函数以根据您的需要处理元数据。

`AudioSourceSPIFFS`：您可以通过取消注释 //source.setFileFilter("*Bob Dylan*"); 这一行并将过滤器替换为您所需的条件来更改文件过滤器。