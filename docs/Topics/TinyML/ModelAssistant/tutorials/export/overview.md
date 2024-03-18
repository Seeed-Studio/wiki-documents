---
description: Export For Model Assistant
title: Export
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug:  /ModelAssistant_Tutorials_Export_Overview
last_update:
  date: 01/11/2024
  author: LynnL4
---

# Model Export

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) currently supports the following methods to convert and export models.
You can refer to the corresponding tutorials to complete the model export, and
then put the exported model into deployment.

:::tip
By default, both ONNX and TFLite models are exported. If you only need to
export one of them, you can use the `--targets` parameter to specify the
exported model type, e.g. `--targets onnx` or `--targets tflite`.
:::

- [PyTorch to ONNX](/ModelAssistant_Tutorials_Export_PyTorch_2_ONNX): Converts PyTorch model and `.pth`
  weights to ONNX model `.onnx`

- [PyTorch to TFLite](/ModelAssistant_Tutorials_Export_PyTorch_2_TFlite): Converts PyTorch model and `.pth`
  weights to TFLite model `.tflite`

:::tip
Before you can start exporting models, you need to complete the
[Training](/ModelAssistant_Tutorials_Training_Overview) section and obtain model weights `.pth` file
before start exporting.

:::

## Parameter Descriptions

For more parameters for model exporting, you can refer the code below.

```sh
python3 tools/export.py --help

# Convert and export PyTorch model to TFLite or ONNX models

# positional arguments:
#   config                the model config file path
#   checkpoint            the PyTorch checkpoint file path

# optional arguments:
#   -h, --help            show this help message and exit
#   --targets TARGETS [TARGETS ...]
#                         the target type of model(s) to export e.g. tflite onnx
#   --precisions PRECISIONS [PRECISIONS ...]
#                         the precisions exported model, e.g. 'int8', 'uint8', 'int16', 'float16' and 'float32'
#   --work_dir WORK_DIR, --work-dir WORK_DIR
#                         the directory to save logs and models
#   --output_stem OUTPUT_STEM, --output-stem OUTPUT_STEM
#                         the stem of output file name (with path)
#   --device DEVICE       the device used for convert & export
#   --input_shape INPUT_SHAPE [INPUT_SHAPE ...], --input-shape INPUT_SHAPE [INPUT_SHAPE ...]
#                         the shape of input data, e.g. 1 3 224 224
#   --input_type {audio,image,sensor}, --input-type {audio,image,sensor}
#                         the type of input data
#   --cfg_options CFG_OPTIONS [CFG_OPTIONS ...], --cfg-options CFG_OPTIONS [CFG_OPTIONS ...]
#                         override some settings in the used config, the key-value pair in 'xxx=yyy' format will be merged into config file
#   --simplify SIMPLIFY   the level of graph simplification, 0 means disable, max: 5
#   --opset_version OPSET_VERSION, --opset-version OPSET_VERSION
#                         ONNX: operator set version of exported model
#   --dynamic_export, --dynamic-export
#                         ONNX: export with a dynamic input shape
#   --algorithm {l2,kl}   TFLite: conversion algorithm
#   --backend {qnnpack,fbgemm}
#                         TFLite: converter backend
#   --calibration_epochs CALIBRATION_EPOCHS, --calibration-epochs CALIBRATION_EPOCHS
#                         TFLite: max epoches for quantization calibration
#   --mean MEAN [MEAN ...]
#                         TFLite: mean for model input (quantization), range: [0, 1], applied to all channels, using the average if multiple values are provided
#   --mean_and_std MEAN_AND_STD [MEAN_AND_STD ...], --mean-and-std MEAN_AND_STD [MEAN_AND_STD ...]
#                         TFLite: mean and std for model input(s), default: [((0.0,), (1.0,))], calculated on normalized input(s), applied to all channel(s), using the average if multiple values are provided
```
