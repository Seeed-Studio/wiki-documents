---
description: Star Wars Theme Player with XIAO ESP32S3
title: Star Wars Theme Player
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_streams_memory
last_update:
  date: 7/1/2024
  author: Jessie
---

This project demonstrates how to play the Star Wars theme song using the reSpeaker Lite board. 



### Functionality

* Plays the Star Wars theme song stored in memory
* Utilizes the I2S interface for audio output
* Employs the AudioTools framework for audio processing and streaming
* Easy-to-use AudioLogger for debugging and monitoring


### Code

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

### Configuration

`info`: Defines the audio configuration, including the sample rate (22050 Hz), number of channels (1 for mono), and the number of bits per sample (16 bits).

`i2s`: Creates an instance of the I2SStream class to output audio through the I2S interface.

`music`: Creates a MemoryStream object to store the Star Wars theme song data in memory.

`copier`: Creates a StreamCopy object to copy the audio data from the memory stream to the I2S stream.

### Customization

You can replace the `StarWars30_raw` and `StarWars30_raw_len` variables with your own audio data to play a different song or sound effect.

The audio configuration can be modified by adjusting the parameters of the AudioInfo object, such as the sample rate, number of channels, and number of bits per sample.

