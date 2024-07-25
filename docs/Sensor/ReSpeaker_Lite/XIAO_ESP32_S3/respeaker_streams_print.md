---
description: I2S to CSV Converter with ReSpeaker Lite
title: CSV Converter
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_streams_print
last_update:
  date: 7/1/2024
  author: Jessie
---




This project demonstrates how to capture audio data from the I2S interface using the reSpeaker Lite board and convert it to CSV format for further analysis or processing. The reSpeaker Lite is an audio board with an integrated XIAO ESP32S3 microcontroller, featuring a dual-channel microphone and speaker.




### Functionality

* Captures audio data from the I2S interface
* Converts the captured audio data to CSV format
* Streams the CSV data over the serial interface for further processing
* Utilizes the AudioTools framework for audio processing and streaming
* Easy-to-use AudioLogger for debugging and monitoring



### Code

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

### Configuration

`info`: Defines the audio configuration, including the sample rate, number of channels (2 for stereo, 1 for mono), and the number of bits per sample (32 bits).

`i2sStream`: Creates an instance of the `I2SStream` class to access the I2S interface as a stream.

`csvStream`: Creates a `CsvOutput` object to convert the audio data to CSV format and stream it over the serial interface.

`copier`: Creates a `StreamCopy` object to copy the audio data from the I2S stream to the CSV stream.

`cfg`: Configures the I2S stream with the desired settings, such as the audio format, master/slave mode, and APLL usage.



Open the `Serial Plotter` to view the output waves.



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/waves.gif" alt="pir" width={600} height="auto" /></p>
 