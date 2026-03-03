---
description: 模型助手训练教程
title: 目标检测 - SWIFT-YOLO
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ModelAssistant_Tutorials_Training_YOLO
last_update:
  date: 01/11/2024
  author: LynnL4
---

# 目标检测 - SWIFT-YOLO

本节介绍如何在 COCO 数字仪表数据集上训练数字仪表模型。yolo 数字仪表检测模型的实现基于 Swift-YOLO，由 [mmyolo](https://github.com/open-mmlab/mmyolo) 提供支持。

## 准备数据集

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 默认使用[数字仪表数据集](https://universe.roboflow.com/seeeddatasets/seeed_meter_digit/)来训练 Swift-YOLO 模型，请参考以下步骤完成数据集的准备工作。

1. 下载 COCO 数据集格式的数字仪表数据集

2. 记住解压后数据集的**文件夹路径**（例如 `datasets\digital_meter`），您稍后可能需要使用此文件夹路径。

## 选择配置

我们将根据需要执行的训练任务类型选择合适的配置文件，我们已经在[配置](/cn/ModelAssistant_Tutorials_Config)中介绍了配置文件的功能、结构和原理的简要说明。

对于 Swift-YOLO 模型示例，我们使用 `swift_yolo_tiny_1xb16_300e_coco.py` 作为配置文件，它位于 SSCMA 根目录下的 `configs/swift_yolo` 文件夹中，并且它还继承了 `base_arch.py` 配置文件。

对于初学者，我们建议首先关注此配置文件中的 `data_root` 和 `epochs` 参数。

<details>

<summary> swift_yolo_tiny_1xb16_300e_coco.py </summary>

```python
_base_='../_base_/default_runtime_det.py'
_base_ = ["./base_arch.py"]

anchors = [
    [(10, 13), (16, 30), (33, 23)],  # P3/8
    [(30, 61), (62, 45), (59, 119)],  # P4/16
    [(116, 90), (156, 198), (373, 326)]  # P5/32
]
num_classes = 11
deepen_factor = 0.33
widen_factor = 0.15

strides = [8, 16, 32]

model = dict(
    type='mmyolo.YOLODetector',
    backbone=dict(
        type='YOLOv5CSPDarknet',
        deepen_factor=deepen_factor,
        widen_factor=widen_factor,
    ),
    neck=dict(
        type='YOLOv5PAFPN',
        deepen_factor=deepen_factor,
        widen_factor=widen_factor,
    ),
    bbox_head=dict(
        head_module=dict(
            num_classes=num_classes,
            in_channels=[256, 512, 1024],
            widen_factor=widen_factor,
        ),
    ),
)
```

</details>

## 训练模型

训练模型需要使用我们之前配置的 SSCMA 工作环境，如果您按照我们的[安装](/cn/ModelAssistant_Introduce_Installation)指南使用 Conda 在名为 `sscma` 的虚拟环境中安装了 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)，请首先确保您当前在虚拟环境中。

然后，在 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 项目根目录中，我们执行以下命令来训练 Swift-YOLO 数字仪表检测模型。

```sh
python3 tools/train.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    --cfg-options \
        data_root='datasets/digital_meter' \
        epochs=50
```

在训练过程中，模型权重和相关日志信息默认保存到路径 `work_dirs/swift_yolo_tiny_1xb16_300e_coco`，您可以使用 [TensorBoard](https://www.tensorflow.org/tensorboard/get_started) 等工具来监控训练过程。

```sh
tensorboard --logdir work_dirs/swift_yolo_tiny_1xb16_300e_coco
```

训练完成后，最新的 Swift-YOLO 模型权重文件路径保存在 `work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint` 文件中。请记住权重文件的路径，因为在将模型转换为其他格式时需要用到它。

:::tip

如果您已配置虚拟环境但未激活，可以使用以下命令激活它。

```sh
conda activate sscma
```

:::

## 测试和评估

### 测试

完成 Swift-YOLO 模型训练后，您可以指定特定权重并使用以下命令测试模型。

```sh
python3 tools/inference.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint)" \
    --show \
    --cfg-options \
        data_root='datasets/digital_meter'
```

:::tip

如果您想在测试时进行实时预览，可以在测试命令后附加参数 `--show` 来显示预测结果。有关更多可选参数，请参考源代码 `tools/inference.py`。

:::

### 评估

为了在实际的边缘计算设备上进一步测试和评估模型，您需要导出模型。在导出模型的过程中，[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 会对模型进行一些优化，如模型剪枝、蒸馏等。您可以参考[导出](/cn/ModelAssistant_Tutorials_Export_Overview)部分了解更多关于如何导出模型的信息。

### 部署

导出模型后，您可以将模型部署到边缘计算设备上进行测试和评估。您可以参考[部署](/cn/ModelAssistant_Deploy_Overview)部分了解更多关于如何部署模型的信息。