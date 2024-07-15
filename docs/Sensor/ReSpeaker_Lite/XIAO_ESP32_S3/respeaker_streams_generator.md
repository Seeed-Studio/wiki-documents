---
description: Sine Wave Generator with ReSpeaker Lite
title: Sine Wave Generator with ReSpeaker Lite
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_streams_generator
last_update:
  date: 7/1/2024
  author: Jessie
---


This project demonstrates how to generate a sine wave and play it using the I2S interface on the reSpeaker Lite board. The reSpeaker Lite is an audio board with an integrated XIAO ESP32S3 microcontroller, featuring a dual-channel microphone and speaker. 

### Functionality

* Generates a sine wave with a specified frequency
* Plays the generated sine wave through the I2S interface
* Utilizes the AudioTools framework for audio processing and streaming
* Easy-to-use AudioLogger for debugging and monitoring

### Code

```cpp
#include "AudioTools.h"

AudioInfo info(16000, 2, 32);                              // Sample Rate, Number of channels: 2=stereo, 1=mono, Number of bits per sample (int16_t = 16 bits)
SineWaveGenerator<int16_t> sineWave(32000);                // subclass of SoundGenerator with max amplitude of 32000
GeneratedSoundStream<int16_t> sound(sineWave);             // Stream generated from sine wave
I2SStream out; 
StreamCopy copier(out, sound);                             // copies sound into i2s

// Arduino Setup
void setup(void) {  
  // Open Serial 
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // start I2S
  Serial.println("starting I2S...");
  auto config = out.defaultConfig(TX_MODE);
  config.copyFrom(info); 
  out.begin(config);

  // Setup sine wave
  sineWave.begin(info, N_B4);
  Serial.println("started...");
}

// Arduino loop - copy sound to out 
void loop() {
  copier.copy();
}
```

### Configuration

`info`: Defines the audio configuration, including the sample rate, number of channels (2 for stereo, 1 for mono), and the number of bits per sample (16 bits).

`sineWave`: Creates an instance of the SineWaveGenerator class with a maximum amplitude of 32000.

`sound`: Creates a GeneratedSoundStream object using the sineWave generator.

`out`: Creates an instance of the I2SStream class for audio output.

`copier`: Creates a StreamCopy object to copy the generated sound to the I2S output.

