---
description: 模型助手导出功能
title: 导出
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ModelAssistant_Tutorials_Export_Overview
last_update:
  date: 01/11/2024
  author: LynnL4
---

# 模型导出

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 目前支持以下方法来转换和导出模型。
您可以参考相应的教程来完成模型导出，然后
将导出的模型投入部署。

:::tip
默认情况下，ONNX 和 TFLite 模型都会被导出。如果您只需要
导出其中一种，可以使用 `--targets` 参数来指定
导出的模型类型，例如 `--targets onnx` 或 `--targets tflite`。
:::

- [PyTorch 转 ONNX](/cn/ModelAssistant_Tutorials_Export_PyTorch_2_ONNX)：将 PyTorch 模型和 `.pth`
  权重转换为 ONNX 模型 `.onnx`

- [PyTorch 转 TFLite](/cn/ModelAssistant_Tutorials_Export_PyTorch_2_TFLite)：将 PyTorch 模型和 `.pth`
  权重转换为 TFLite 模型 `.tflite`

:::tip
在开始导出模型之前，您需要完成
[训练](/cn/ModelAssistant_Tutorials_Training_Overview) 部分并获得模型权重 `.pth` 文件
才能开始导出。

:::

## 参数说明

有关模型导出的更多参数，您可以参考下面的代码。

```sh
python3 tools/export.py --help

# 转换并导出 PyTorch 模型为 TFLite 或 ONNX 模型

# 位置参数:
#   config                模型配置文件路径
#   checkpoint            PyTorch 检查点文件路径

# 可选参数:
#   -h, --help            显示此帮助信息并退出
#   --targets TARGETS [TARGETS ...]
#                         要导出的模型目标类型，例如 tflite onnx
#   --precisions PRECISIONS [PRECISIONS ...]
#                         导出模型的精度，例如 'int8', 'uint8', 'int16', 'float16' 和 'float32'
#   --work_dir WORK_DIR, --work-dir WORK_DIR
#                         保存日志和模型的目录
#   --output_stem OUTPUT_STEM, --output-stem OUTPUT_STEM
#                         输出文件名的主干（带路径）
#   --device DEVICE       用于转换和导出的设备
#   --input_shape INPUT_SHAPE [INPUT_SHAPE ...], --input-shape INPUT_SHAPE [INPUT_SHAPE ...]
#                         输入数据的形状，例如 1 3 224 224
#   --input_type {audio,image,sensor}, --input-type {audio,image,sensor}
#                         输入数据的类型
#   --cfg_options CFG_OPTIONS [CFG_OPTIONS ...], --cfg-options CFG_OPTIONS [CFG_OPTIONS ...]
#                         覆盖所使用配置中的某些设置，'xxx=yyy' 格式的键值对将合并到配置文件中
#   --simplify SIMPLIFY   图简化级别，0 表示禁用，最大值：5
#   --opset_version OPSET_VERSION, --opset-version OPSET_VERSION
#                         ONNX：导出模型的算子集版本
#   --dynamic_export, --dynamic-export
#                         ONNX：使用动态输入形状导出
#   --algorithm {l2,kl}   TFLite：转换算法
#   --backend {qnnpack,fbgemm}
#                         TFLite：转换器后端
#   --calibration_epochs CALIBRATION_EPOCHS, --calibration-epochs CALIBRATION_EPOCHS
#                         TFLite：量化校准的最大轮数
#   --mean MEAN [MEAN ...]
#                         TFLite：模型输入的均值（量化），范围：[0, 1]，应用于所有通道，如果提供多个值则使用平均值
#   --mean_and_std MEAN_AND_STD [MEAN_AND_STD ...], --mean-and-std MEAN_AND_STD [MEAN_AND_STD ...]
#                         TFLite：模型输入的均值和标准差，默认：[((0.0,), (1.0,))]，在归一化输入上计算，应用于所有通道，如果提供多个值则使用平均值
```