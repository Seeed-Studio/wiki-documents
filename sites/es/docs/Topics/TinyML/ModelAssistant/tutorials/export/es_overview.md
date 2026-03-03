---
description: Exportar Para Asistente de Modelo
title: Exportar
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ModelAssistant_Tutorials_Export_Overview
last_update:
  date: 01/11/2024
  author: LynnL4
---

# Exportación de Modelos

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) actualmente soporta los siguientes métodos para convertir y exportar modelos.
Puedes consultar los tutoriales correspondientes para completar la exportación del modelo, y
luego poner el modelo exportado en despliegue.

:::tip
Por defecto, se exportan tanto modelos ONNX como TFLite. Si solo necesitas
exportar uno de ellos, puedes usar el parámetro `--targets` para especificar el
tipo de modelo exportado, por ejemplo `--targets onnx` o `--targets tflite`.
:::

- [PyTorch a ONNX](/es/ModelAssistant_Tutorials_Export_PyTorch_2_ONNX): Convierte modelo PyTorch y pesos `.pth`
  a modelo ONNX `.onnx`

- [PyTorch a TFLite](/es/ModelAssistant_Tutorials_Export_PyTorch_2_TFLite): Convierte modelo PyTorch y pesos `.pth`
  a modelo TFLite `.tflite`

:::tip
Antes de poder comenzar a exportar modelos, necesitas completar la
sección de [Entrenamiento](/es/ModelAssistant_Tutorials_Training_Overview) y obtener el archivo de pesos del modelo `.pth`
antes de comenzar la exportación.

:::

## Descripciones de Parámetros

Para más parámetros para la exportación de modelos, puedes consultar el código a continuación.

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