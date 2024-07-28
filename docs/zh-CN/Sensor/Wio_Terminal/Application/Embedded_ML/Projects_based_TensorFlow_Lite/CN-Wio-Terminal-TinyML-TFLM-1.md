---
description: TensorFlow Lite Micro入门指南
title: TensorFlow Lite Micro入门指南
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-TinyML-TFLM-1
last_update:
  date: 3/06/2024
  author: 金菊
---

# Wio Terminal TensorFlow Lite Micro入门指南

本文介绍如何将官方的 [Arduino Tensorflow Lite 库](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/micro/examples/hello_world) 安装到您的 Wio Terminal ，使您能够使用 Wio Terminal 测试一些机器学习模型。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221174623.jpg" /></div>

更多信息，请访问 [TensorFlow Lite For Microcontrollers](https://www.tensorflow.org/lite/microcontrollers).

确保使用1.8.2版本的Seeed SAMD板定义，请参阅在Wio终端上开始使用中检查和更新板定义的方法。

## 安装Arduino TensorFlow Lite库

目前（2021年10月）可以从Arduino IDE库管理器下载的Tensorflow Lite库的版本已经过时。因此，需要使用来自官方Tensorflow Lite for Microcontrollers存储库的开发版本。

```
git clone https://github.com/tensorflow/tflite-micro-arduino-examples Arduino_TensorFlowLite
```

将官方 [TensorFlow Lite Micro Library for Arduino 存储库](https://github.com/tensorflow/tflite-micro-arduino-examples)中的开发版本复制到Arduino的sketches/libraries文件夹中。您可以在存储库中找到有关安装最新开发版本库的更多详细信息。

中的开发版本复制到Arduino的sketches/libraries文件夹中。您可以在存储库中找到有关安装最新开发版本库的更多详细信息。

## 运行Arduino TensorFlow Lite Hello World示例

该示例旨在演示如何在微控制器上使用TensorFlow Lite的基本知识。它包括了训练模型、将其转换为TensorFlow Lite可用格式以及在微控制器上运行推理的完整端到端工作流程。

该示例围绕一个训练用于复制正弦函数的模型构建。它包含了几个平台的实现。在每种情况下，模型被用于生成一系列数据，这些数据用于闪烁LED或控制动画。

1. 转到 `Files` -> `Examples` -> `Arduino_TensorFlowLite` -> `hello_world` 。示例代码将显示出来。

2. 如果现在编译，会出现一个 **compile error** ，因为板定义中定义的 `min`和 `max` 函数也在Arduino TensorFlow库中定义。为了解决这个问题，在包含库之前，使用 `#undef max` 和 `#undef min` 将其取消定义，就像这样：

```cpp
#undef max
#undef min
#include <TensorFlowLite.h>
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221173149.jpg" /></div>

3. 现在，点击 **Upload** 将您的第一个TensorFlow Lite示例上传到Wio终端！

4. 打开串行绘图仪（Serial Plotter），您应该会看到一个正弦波形。此外，检查背面的内置LED，它应该根据您刚刚从TensorFlow Lite生成的正弦波形的变化而渐变。

**注:** 如果您想在串行绘图仪上看到完整的正弦波（即LED闪烁更快），您可以点击顶部的 **arduino_constants.cpp** 文件，并将 `kInferencesPerCycle` 更改为100，如下所示：

```cpp
const int kInferencesPerCycle = 100;
```
