---
description: Keyword Spotting with ReSpeaker Lite and TensorFlow Lite
title: Keyword Spotting
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /streams_i2s_tflite
last_update:
  date: 7/1/2024
  author: Jessie
---


This project demonstrates how to perform keyword spotting using the reSpeaker Lite board and TensorFlow Lite. The ReSpeaker Lite is an audio board with an integrated XIAO ESP32S3 microcontroller, featuring a dual-channel microphone and speaker. The project utilizes the reSpeaker Lite library, which is built on top of the AudioTools framework, and integrates with TensorFlow Lite for audio classification.

### Functionality

* Captures audio from the I2S interface using the reSpeaker Lite board
* Performs keyword spotting using a pre-trained TensorFlow Lite model
* Classifies the captured audio into predefined categories: `silence`, `unknown`, `yes`, and `no`
* Provides a callback function to respond to detected commands
* Utilizes the AudioTools framework for audio processing and streaming
* Easy-to-use AudioLogger for debugging and monitoring



### Install library

* [TensorFlow Lite library](https://github.com/limengdu/tflite-micro-reSpeaker-Lite-arduino-examples)

Clone this project into the Arduino libraries folder e.g. with

```
cd  ~/Documents/Arduino/libraries
git clone https://github.com/limengdu/tflite-micro-reSpeaker-Lite-arduino-examples
```

Or download the library as `zip` file and add it to the library in Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/add-lib.png" alt="pir" width={800} height="auto" /></p>


### Code

Open the `streams-generator-i2s.ino` sketch in the Arduino IDE.


Upload the sketch to your reSpeaker Lite board.


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


