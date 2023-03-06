---
description: TensorFlow Lite Micro Getting Started
title: TensorFlow Lite Micro Getting Started
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-TinyML-TFLM-1
last_update:
  date: 1/30/2023
  author: jianjing Huang
---

# Wio Terminal Tensorflow Lite Micro Getting started

This article introduces how to install the official [Arduino Tensorflow Lite library](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/micro/examples/hello_world) into your Wio Terminal, allowing you to test out some Machine Learning models using Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221174623.jpg" /></div>

For more information, please visit [TensorFlow Lite For Microcontrollers](https://www.tensorflow.org/lite/microcontrollers).

Make sure to use 1.8.2 version of Seeed SAMD boards definitions, see how to check and update board definitions in Get started with Wio Terminal.

## Install the Arduino TensorFlow Lite Library

The version of Tensorflow Lite library for Arduino IDE, that can be downloaded from Arduino IDE Library Manager is outdated at the moment (October 2021). Therefore, a development version from the official Tensorflow Lite for Microcontrollers repository needs to be used.

```
git clone https://github.com/tensorflow/tflite-micro-arduino-examples Arduino_TensorFlowLite
```

in your Arduino sketches/libraries folder. You can find more details on installing latest development version of library in [TensorFlow Lite Micro Library for Arduino repository](https://github.com/tensorflow/tflite-micro-arduino-examples).

The projects described here were tested with commit 219ac1dfed8a8ba0edfdbaae51aed5dc9b208c0c of TensorFlow Lite Micro Library for Arduino repository.

## Running the Arduino TensorFlow Lite Hello World Example

The example is designed to demonstrate the absolute basics of using TensorFlow Lite for Microcontrollers. It includes the full end-to-end workflow of training a model, converting it for use with TensorFlow Lite, and running inference on a microcontroller.

The sample is built around a model trained to replicate a sine function. It contains implementations for several platforms. In each case, the model is used to generate a pattern of data that is used to either blink LEDs or control an animation.

1. Go to `Files` -> `Examples` -> `Arduino_TensorFlowLite` -> `hello_world`. The example sketch should appear.

2. If compiles now, there will be an **compile error** because the `min` and `max` functions defined for the board are also defined in Arduino TensorFlow Library. So to solve this, use `#undef max` and `#undef min` right before the including library to avoid error, just like this:

```cpp
#undef max
#undef min
#include <TensorFlowLite.h>
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221173149.jpg" /></div>

3. Now, click on **Upload** and upload your first TensorFlow Lite example to Wio Terminal!

4. Open the Serial Plotter, and you should see a Sine waveform. Further, check the built in LED on the back, it should be fading in and out according to the Sine wave you just generated from TensorFlow Lite!

**Note:** if you want to see the full Sine wave on Serial Plotter(i.e. LED flickering faster), you can click on the **arduino_constants.cpp** file on the top, and change the `kInferencesPerCycle` to 100 as follow:

```cpp
const int kInferencesPerCycle = 100;
```
