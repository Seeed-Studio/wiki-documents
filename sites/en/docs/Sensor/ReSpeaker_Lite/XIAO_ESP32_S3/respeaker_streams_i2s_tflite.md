---
description: Keyword Spotting with ReSpeaker Lite and TensorFlow Lite
title: Keyword Spotting
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_streams_i2s_tflite
last_update:
  date: 7/1/2024
  author: Jessie
---


This project demonstrates how to perform keyword spotting using the reSpeaker Lite board and TensorFlow Lite. The ReSpeaker Lite is an audio board with an integrated XIAO ESP32S3 microcontroller, featuring a dual-channel microphone and speaker. The project utilizes the reSpeaker Lite library, which is built on top of the AudioTools framework, and integrates with TensorFlow Lite for audio classification.


### Library Required

* [TensorFlow Lite library](https://github.com/limengdu/tflite-micro-reSpeaker-Lite-arduino-examples)



### Functionality

* Captures audio from the I2S interface using the reSpeaker Lite board
* Performs keyword spotting using a pre-trained TensorFlow Lite model
* Classifies the captured audio into predefined categories: `silence`, `unknown`, `yes`, and `no`
* Provides a callback function to respond to detected commands
* Utilizes the AudioTools framework for audio processing and streaming
* Easy-to-use AudioLogger for debugging and monitoring



### Code

Open the `streams-i2s-tflite.ino` sketch in the Arduino IDE.


Upload the sketch to your reSpeaker Lite board.

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

Open the `Serial Monitor` to view the output and any log messages.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/yes_or_no.png" alt="pir" width={800} height="auto" /></p>




### Configuration

`i2s`: Creates an instance of the `I2SStream` class to capture audio from the I2S interface.

`tfl`: Creates an instance of the `TfLiteAudioStream` class to process the captured audio using TensorFlow Lite.

`kCategoryLabels`: Defines the category labels for the classification results.

`copier`: Creates a `StreamCopy` object to copy the audio data from the I2S stream to the TensorFlow Lite stream.

`channels`: Specifies the number of audio channels (1 for mono).

`samples_per_second`: Specifies the sample rate of the audio input.

`respondToCommand`: A callback function that is invoked when a command is detected. It receives the detected command, score, and a flag indicating if it is a new command.


### Customization

* You can modify the `kCategoryLabels` array to define your own set of category labels for the classification results.

* The `respondToCommand` function can be customized to perform specific actions based on the detected commands.

* The TensorFlow Lite model can be replaced with your own trained model by updating the model.h file.


### Resource

[TensorFlow Lite library](https://github.com/limengdu/reSpeaker_Lite-Arduino-Library/tree/main/examples/streams-i2s-tflite)