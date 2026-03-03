---
description: 模型助手训练教程
title: 目标检测 - FOMO
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ModelAssistant_Tutorials_Training_FOMO
last_update:
  date: 01/11/2024
  author: LynnL4
---

# 目标检测 - FOMO

本节介绍如何在 COCO MASK 数据集上训练 FOMO 口罩检测模型。FOMO 口罩检测模型的实现基于 MobileNet V2 和 MobileNet V3（实际选择的神经网络取决于您选择的模型配置文件）。

有关 MobileNet 的更多信息，请参考论文 [MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications](https://arxiv.org/pdf/1704.04861.pdf)。

## 准备数据集

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 默认使用 [COCO_MASK 数据集](/cn/ModelAssistant_Tutorials_Datasets#SSCMA) 来训练 FOMO 模型，请参考以下步骤完成数据集的准备。

1. 请参考 [互联网数据集](/cn/ModelAssistant_Tutorials_Datasets#SSCMA) 下载并解压数据集。

2. 记住解压后数据集的**文件夹路径**（例如 `datasets\mask`），您稍后可能需要使用此文件夹路径。

## 选择配置

我们将根据需要执行的训练任务类型选择合适的配置文件，我们已经在 [配置](/cn/ModelAssistant_Tutorials_Config) 中介绍了这一点，简要描述了配置文件的功能、结构和原理。

对于 FOMO 模型示例，我们使用 `fomo_mobnetv2_0.35_x8_abl_coco.py` 作为配置文件，它位于 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 根目录下的 `configs/fomo` 文件夹中，并且它还继承了 `default_runtime_det.py` 配置文件。

对于初学者，我们建议首先关注此配置文件中的 `data_root` 和 `epochs` 参数。

<details>

<summary> fomo_mobnetv2_0.35_x8_abl_coco.py </summary>

```python
_base_='../_base_/default_runtime_det.py'
default_scope='sscma'
custom_imports=dict(imports=['sscma'], allow_failed_imports=False)

num_classes=2
model=dict(type='Fomo',
           backbone=dict(type='mmdet.MobileNetV2', widen_factor=0.35, out_indices=(2,)),
           head=dict(type='FomoHead',
                     input_channels=[16],
                     num_classes=num_classes,
                     middle_channel=48,
                     act_cfg='ReLU6',
                     loss_cls=dict(type='BCEWithLogitsLoss',
                                   reduction='none',
                                   pos_weight=40),
                     loss_bg=dict(type='BCEWithLogitsLoss', reduction='none'),
           ),
)

# 数据集设置
dataset_type='FomoDatasets'
data_root=''
height=96
width=96
batch_size=16
workers=1

train_pipeline=[
    dict(type='RandomResizedCrop',
         height=height,
         width=width,
         scale=(0.80, 1.2),
         p=1),
    dict(type='Rotate', limit=30),
    dict(type='RandomBrightnessContrast',
         brightness_limit=0.3,
         contrast_limit=0.3,
         p=0.5),
    dict(type='HorizontalFlip', p=0.5),
]
test_pipeline=[dict(type='Resize', height=height, width=width, p=1)]

train_dataloader=dict(
    batch_size=batch_size,
    num_workers=workers,
    persistent_workers=True,
    drop_last=False,
    collate_fn=dict(type='fomo_collate'),
    sampler=dict(type='DefaultSampler', shuffle=True, round_up=False),
    dataset=dict(type=dataset_type,
                 data_root=data_root,
                 ann_file='train/_annotations.coco.json',
                 img_prefix='train',
                 pipeline=train_pipeline),
)
val_dataloader=dict(
    batch_size=1,
    num_workers=1,
    persistent_workers=True,
    drop_last=False,
    collate_fn=dict(type='fomo_collate'),
    sampler=dict(type='DefaultSampler', shuffle=True, round_up=False),
    dataset=dict(type=dataset_type,
                 data_root=data_root,
                 ann_file='valid/_annotations.coco.json',
                 img_prefix='valid',
                 pipeline=test_pipeline))
test_dataloader=val_dataloader

# 优化器
lr=0.001
epochs=300
find_unused_parameters=True
optim_wrapper=dict(optimizer=dict(type='Adam', lr=lr, weight_decay=5e-4,eps=1e-7))

#评估器
val_evaluator=dict(type='FomoMetric')
test_evaluator=val_evaluator
train_cfg=dict(by_epoch=True, max_epochs=70)

# 学习策略
param_scheduler=[
    dict(type='LinearLR', begin=0, end=30, start_factor=0.001, by_epoch=False),  # 预热
    dict(type='MultiStepLR',
         begin=1,
         end=500,
         milestones=[100, 200, 250],
         gamma=0.1,
         by_epoch=True)
]
```

</details>

## 训练模型

训练模型需要使用我们之前配置的 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 工作环境，如果您按照我们的[安装](/cn/ModelAssistant_Introduce_Installation)指南使用 Conda 在名为 `sscma` 的虚拟环境中安装了 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)，请首先确保您当前处于该虚拟环境中。

然后，在 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 项目根目录中，我们执行以下命令来训练一个 FOMO 口罩检测模型。

```sh
python3 tools/train.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    --cfg-options \
        data_root='datasets/mask' \
        epochs=50
```

在训练过程中，模型权重和相关日志信息默认保存到路径 `work_dirs/fomo_mobnetv2_0.35_x8_abl_coco`，您可以使用 [TensorBoard](https://www.tensorflow.org/tensorboard/get_started) 等工具来监控训练过程。

```sh
tensorboard --logdir work_dirs/fomo_mobnetv2_0.35_x8_abl_coco
```

训练完成后，最新的 FOMO 模型权重文件的路径保存在 `work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint` 文件中。请记住权重文件的路径，因为在将模型转换为其他格式时需要用到它。

:::tip

如果您已配置虚拟环境但尚未激活，可以使用以下命令激活它。

```sh
conda activate sscma
```

## 测试和评估

### 测试

完成 FOMO 模型训练后，您可以使用以下命令指定特定权重并测试模型。

```sh
python3 tools/inference.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint)" \
    --cfg-options \
        data_root='datasets/mask'
```

:::tip

如果您希望在测试时进行实时预览，可以在测试命令后添加参数 `--show` 来显示预测结果。更多可选参数请参考源代码 `tools/test.py`。

:::

### 评估

为了在真实的边缘计算设备上进一步测试和评估模型，您需要导出模型。在导出模型的过程中，[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 会对模型进行一些优化，如模型剪枝、蒸馏等。您可以参考[导出](/cn/ModelAssistant_Tutorials_Export_Overview)部分了解更多关于如何导出模型的信息。

### 部署

导出模型后，您可以将模型部署到边缘计算设备上进行测试和评估。您可以参考[部署](/cn/ModelAssistant_Deploy_Overview)部分了解更多关于如何部署模型的信息。