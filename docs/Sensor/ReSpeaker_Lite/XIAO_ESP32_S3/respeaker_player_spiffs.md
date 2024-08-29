---
description: MP3 Player with XIAO ESP32S3
title: MP3 Player
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_player_spiffs
last_update:
  date: 7/1/2024
  author: Jessie
---


This project demonstrates how to use the reSpeaker Lite board to play MP3 files stored in the SPIFFS file system.



### Library Required

* [ReSpeaker Lite arduino libhelix](https://github.com/limengdu/reSpeaker_Lite-arduino-libhelix)

### Functionality

* Plays MP3 files from the SPIFFS file system
* Utilizes the I2S interface for audio output
* Supports metadata extraction and callback
* Easy-to-use AudioPlayer class for seamless audio playback



### Code

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


### Configuration


* Uploading Files to SPIFFS

SPIFFS is a file system intended for SPI NOR flash devices on embedded targets. It supports wear levelling, file system consistency checks, and more.




Make sure you have the necessary tools to upload files to SPIFFS. 
You can use the `ESP32 Sketch Data Upload` tool in the Arduino IDE 1.x or other tools.

:::tip For Arduino IDE 2.x
**Install**:

Copy the [VSIX file](https://github.com/earlephilhower/arduino-littlefs-upload/releases) to `~/.arduinoIDE/plugins/` on Mac and Linux <br/>
or `C:\Users\<username>\.arduinoIDE\plugins\` on Windows (you may need to make this directory yourself beforehand). <br/>
Then restart the IDE.

**Usage**:

For windows: [Ctrl] + [Shift] + [P], then `Upload LittleFS to Pico/ESP8266/ESP32`.<br/>
For macOS, [⌘] + [Shift] + [P], then `Upload LittleFS to Pico/ESP8266/ESP32`.
:::


Create a folder named "data" in your sketch directory and place the MP3 files you want to play inside it.

Upload the files to SPIFFS using the chosen tool.
