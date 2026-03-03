---
description: 模型助手概述
title: SenseCraft AI 模型助手概述
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ModelAssistant_Introduce_Overview
last_update:
  date: 01/11/2024
  author: LynnL4
---

# 概述

<div align="center">
  <img width="20%" src="https://files.seeedstudio.com/sscma/docs/images/SSCMA-Hero.png"/>
</div>

## 介绍

Seeed SenseCraft 模型助手（简称 SSCMA）是一个专注于嵌入式 AI 的开源项目。我们针对真实世界场景优化了来自 [OpenMMLab](https://github.com/open-mmlab) 的优秀算法，并使实现更加用户友好，在嵌入式设备上实现了更快、更准确的推理。

## 包含什么？

目前我们支持以下算法方向：

### 🔍 异常检测

在现实世界中，异常数据往往难以识别，即使能够识别，也需要非常高的成本。异常检测算法以低成本的方式收集正常数据，任何超出正常数据范围的都被认为是异常的。

### 👁️ 计算机视觉

这里我们提供了许多计算机视觉算法，如目标检测、图像分类、图像分割和姿态估计。然而，这些算法无法在低成本硬件上运行。SSCMA 优化了这些计算机视觉算法，在低端设备中实现了良好的运行速度和准确性。

### ⏱️ 特定场景

SSCMA 为特定生产环境提供定制化场景，如模拟仪表识别、传统数字仪表和音频分类。我们将在未来继续为指定场景添加更多算法。

## 特性

### 🤝 用户友好

SSCMA 提供了一个用户友好的平台，允许用户轻松对收集的数据进行训练，并通过训练过程中生成的可视化更好地了解算法的性能。

### 🔋 低计算能力和高性能的模型

SSCMA 专注于端侧 AI 算法研究，算法模型可以部署在微处理器上，类似于 [ESP32](https://www.espressif.com.cn/en/products/socs/esp32)、一些 [Arduino](https://arduino.cc) 开发板，甚至在嵌入式单板计算机如 [Raspberry Pi](https://www.raspberrypi.org) 中。

### 🗂️ 支持多种格式的模型导出

[TensorFlow Lite](https://www.tensorflow.org/lite) 主要用于微控制器，而 [ONNX](https://onnx.ai) 主要用于运行嵌入式 Linux 的设备。还有一些特殊格式如 [TensorRT](https://developer.nvidia.com/tensorrt)、[OpenVINO](https://docs.openvino.ai)，这些已经得到 OpenMMLab 的良好支持。SSCMA 为微控制器添加了 TFLite 模型导出，可以直接转换为 [TensorRT](https://developer.nvidia.com/tensorrt)、[UF2](https://github.com/microsoft/uf2) 格式，并拖放到设备中进行部署。

## 应用示例

### 目标检测

<div align="center"><img width="800" src="https://files.seeedstudio.com/sscma/docs/static/esp32/images/person_detection.png"/></div>

### 指针仪表识别

<div align="center"><img width="800" src="https://files.seeedstudio.com/sscma/docs/static/grove/images/pfld_meter.gif"/></div>

### 数字仪表识别

<div align="center"><img width="800" src="https://files.seeedstudio.com/sscma/docs/static/grove/images/digital_meter.gif"/></div>

更多应用示例可以在 [模型库](https://github.com/Seeed-Studio/sscma-model-zoo) 中找到。