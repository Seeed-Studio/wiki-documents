---
description: Recording and playback
title: Recording and playback
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_record_and_play
last_update:
  date: 7/1/2024
  author: Jessie
---


### Functionality



This project demonstrates a basic loopback mechanism using the I2S interface, to test the reading and writing functions of I2S audio data. By switching I2S mode, the audio data is read from the microphone and then written to the speaker.



### Code

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


### Customization


**Modifying the Read and Write Duration**

You can control the duration of audio read and write operations by adjusting the size of the buffer and the number of bytes in out.readBytes and out.write. 

**Example**: 0.5 seconds of audio:

```cpp
uint8_t buffer[64000];
bytes_read = out.readBytes(buffer, 64000);
bytes_write = out.write(buffer, 64000);
```


:::tip
Make sure you have enough dynamic memory to accommodate the buffer, especially when reading longer durations of audio data. If your ESP32-S3 device has insufficient memory, you may need to optimize memory usage or consider alternative solutions.
:::






