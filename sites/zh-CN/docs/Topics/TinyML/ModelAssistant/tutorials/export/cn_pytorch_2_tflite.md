---
description: 模型助手导出功能
title: PyTorch 转 TFLite
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ModelAssistant_Tutorials_Export_PyTorch_2_TFLite
last_update:
  date: 01/11/2024
  author: LynnL4
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PyTorch 转 TFLite

本章将介绍如何将 PyTorch 模型转换并导出为 TFLite 模型。

## 准备工作

### 环境配置

与[训练](/cn/ModelAssistant_Tutorials_Training_Overview)步骤一样，我们建议您在模型导出阶段在**虚拟环境**中进行。在 `sscma` 虚拟环境中，确保已完成[安装 - 先决条件 - 安装额外依赖项](/cn/ModelAssistant_Introduce_Installation#step-4-install-extra-dependencies-optional)步骤。

:::tip

如果您已配置虚拟环境但未激活，可以使用以下命令激活它。

```sh
conda activate sscma
```

:::

### 模型和权重

在导出模型之前，您还需要准备 PyTorch 模型及其权重。对于模型，您可以在[配置](/cn/ModelAssistant_Tutorials_Config)部分找到，我们已经预先配置好了。对于权重，您可以参考以下步骤获取模型权重。

- 参考[训练](/cn/ModelAssistant_Tutorials_Training_Overview)部分，选择一个模型并训练以获得模型权重。

- 或者从我们的 [GitHub Releases - Model Zoo](https://github.com/Seeed-Studio/ModelAssistantreleases/tag/model_zoo) 下载 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 官方预训练权重。

:::tip

导出 TFLite 模型需要训练集作为代表性数据集，如果未找到，程序将自动下载。但是，对于一些大型数据集，这可能需要很长时间，请耐心等待。

:::

## 导出模型

对于模型转换（转换和导出），相关命令及一些常用参数如下所示。

```sh
python3 tools/export.py \
    "<CONFIG_FILE_PATH>" \
    "<CHECKPOINT_FILE_PATH>" \
    --target tflite
```

### TFLite 导出示例

以下是一些模型转换示例（`int8` 精度）供参考。

<Tabs>

<TabItem value="FOMO Model Conversion" label="FOMO 模型转换">

```sh
python3 tools/export.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint)" \
    --target tflite \
    --cfg-options \
        data_root='datasets/mask'

```

</TabItem>

<TabItem value="PFLD Model Conversion" label="PFLD 模型转换">

```sh
python3 tools/export.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint)" \
    --target tflite \
    --cfg-options \
        data_root='datasets/meter'
```

</TabItem>

<TabItem value="PFLD Model Conversio" label="PFLD 模型转换">

```sh
python3 tools/export.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint)" \
    --target tflite
    --cfg-options \
        data_root='datasets/digital_meter'
```

</TabItem>

</Tabs>


## 模型验证

由于在导出模型的过程中，[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 会使用一些工具对模型进行优化，如模型剪枝、蒸馏等。虽然我们在训练过程中已经测试和评估了模型权重，但我们建议您再次验证导出的模型。

```sh
python3 tools/inference.py \
    "<CONFIG_FILE_PATH>" \
    "<CHECKPOINT_FILE_PATH>" \
    --show \
    --cfg-options "<CFG_OPTIONS>"
```

:::tip

有关支持的更多参数，请参考源代码 `tools/inference.py` 或运行 `python3 tools/inference.py --help`。

:::

### 模型验证示例

以下是一些验证转换模型（`int8` 精度）的示例，仅供参考。

<Tabs>

<TabItem value="FOMO Model Validation" label="FOMO 模型验证">

```sh
python3 tools/inference.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint | sed -e 's/.pth/_int8.tflite/g')" \
    --show \
    --cfg-options \
        data_root='datasets/mask'
```

</TabItem>

<TabItem value="PFLD Model Validation" label="PFLD 模型验证">

```sh
python3 tools/inference.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint | sed -e 's/.pth/_int8.tflite/g')" \
    --show \
    --cfg-options \
        data_root='datasets/meter'
```

</TabItem>

<TabItem value="SWIFT-YOLO Model Validation" label="SWIFT-YOLO 模型验证">

```sh
python3 tools/inference.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint | sed -e 's/.pth/_int8.tflite/g')" \
    --show \
    --cfg-options \
        data_root='datasets/digital_meter'
```

</TabItem>

</Tabs>