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

* [ReSpeaker Lite library](https://github.com/limengdu/reSpeaker_Lite-Arduino-Library.git)
* [ReSpeaker Lite arduino libhelix](https://github.com/limengdu/reSpeaker_Lite-arduino-libhelix)

### Functionality

* Plays MP3 files from the SPIFFS file system
* Utilizes the I2S interface for audio output
* Supports metadata extraction and callback
* Easy-to-use AudioPlayer class for seamless audio playback


### Uploading Files to SPIFFS

You can refer to the [Wiki](https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem/#serial-peripheral-interface-flash-file-system-spiffs) here.

Make sure you have the necessary tools to upload files to SPIFFS. You can use the "ESP32 Sketch Data Upload" tool in the Arduino IDE or an external tool like "ESP32 File Uploader".

Create a folder named "data" in your sketch directory and place the MP3 files you want to play inside it.

Upload the files to SPIFFS using the chosen tool.

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

`startFilePath`: The directory path where the MP3 files are located in SPIFFS (default: "/").

`ext`: The file extension of the audio files (default: "mp3").

You can modify these constants in the sketch to match your specific file structure and requirements.

### Customization

`printMetaData`: This function is called when metadata is extracted from the audio file. You can customize the function to handle the metadata according to your needs.

`AudioSourceSPIFFS`: You can change the file filter by uncommenting the line //source.setFileFilter("*Bob Dylan*"); and replacing the filter with your desired criteria.