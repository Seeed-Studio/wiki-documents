---
description: Export For Model Assistant
title: PyTorch to ONNX
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug:  /ModelAssistant_Tutorials_Export_PyTorch_2_ONNX
last_update:
  date: 01/11/2024
  author: LynnL4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PyTorch to ONNX

This chapter will describe how to convert and export PyTorch models to ONNX models.

## Preparation

### Environment Configuration

As the [Training](/ModelAssistant_Tutorials_Training_Overview) step, we recommend you to do it in a **virtual environment** during the model exporting phase. In the `sscma` virtual environment, make sure that the [Installation - Prerequisites - Install Extra Dependencies](/ModelAssistant_Introduce_Installation#step-4-install-extra-dependencies-optional) step has been completed.

:::tip

If you have configured a virtual environment but not activated it, you can activate it with the following command.

```sh
conda activate sscma
```

:::

### Models and Weights

You also need to prepare the PyTorch model and its weights before exporting the model. For the model, you can find it in the [Config](/ModelAssistant_Tutorials_Datasets) section, we have already preconfigured. For the weights, you can refer to the following steps to get the model weights.

- Refer to [Training](/ModelAssistant_Tutorials_Training_Overview) section and choose a model, and train to get the model weights.

- Or download the [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) official pre-trained weights from our [GitHub Releases - Model Zoo](https://github.com/Seeed-Studio/ModelAssistantreleases/tag/model_zoo).

## Export Model

For model convert and export, the relevant commands with some common parameters are listed.

```sh
python3 tools/export.py \
    "<CONFIG_FILE_PATH>" \
    "<CHECKPOINT_FILE_PATH>" \
    --target onnx
```

### ONNX Export Examples

Here are some model conversion examples for reference.

<Tabs>

<TabItem value="FOMO Model Conversion" label="FOMO Model Conversion">

```
python3 tools/export.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint)" \
    --target onnx \
    --cfg-options \
        data_root='datasets/mask'
```

</TabItem>

<TabItem value="PFLD Model Conversion" label="PFLD Model Conversion">

```sh
python3 tools/export.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint)" \
    --target onnx \
    --cfg-options \
        data_root='datasets/meter'
```

</TabItem>

<TabItem value="SWIFT-YOLO Model Conversion" label="SWIFT Model Conversion">

```sh 
python3 tools/export.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint)" \
    --target onnx \
    --cfg-options \
        data_root='datasets/digital_meter'
```
</TabItem>
</Tabs>

## Model Validation

Since in the process of exporting the model, [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) will do some optimization for the model using some tools, such as model pruning, distillation, etc. Although we have tested and evaluated the model weights during the training process, we recommend you to validate the exported model again.

```sh
python3 tools/inference.py \
    "<CONFIG_FILE_PATH>" \
    "<CHECKPOINT_FILE_PATH>" \
    --show \
    --cfg-options "<CFG_OPTIONS>"
```

:::tip

For more parameters supported, please refer to the source code `tools/inference.py` or run `python3 tools/inference.py --help`.

:::

### Model Validation Example

<Tabs>

<TabItem value="FOMO Model Validation" label="FOMO Model Validation">

```sh
python3 tools/inference.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint | sed -e 's/.pth/.onnx/g')" \
    --show \
    --cfg-options \
        data_root='datasets/mask'
```

</TabItem>

<TabItem value="PFLD Model Validation" label="PFLD Model Validation">

```sh [PFLD Model Validation]
python3 tools/inference.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint | sed -e 's/.pth/.onnx/g')" \
    --show \
    --cfg-options \
        data_root='datasets/meter'
```

</TabItem>

<TabItem value="SWIFT-YOLO Model Validation" label="SWIFT-YOLO Model Validation">

```sh [SWIFT-YOLO Model Validation]
python3 tools/inference.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint | sed -e 's/.pth/.onnx/g')" \
    --show \
    --cfg-options \
        data_root='datasets/digital_meter'
```

</TabItem>

</Tabs>


