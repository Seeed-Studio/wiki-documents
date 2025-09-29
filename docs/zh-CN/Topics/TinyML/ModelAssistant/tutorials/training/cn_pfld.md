---
description: 模型助手训练教程
title: 关键点检测 - PFLD
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ModelAssistant_Tutorials_Training_PFLD
last_update:
  date: 01/11/2024
  author: LynnL4
---

# 关键点检测 - PFLD

本节介绍如何在 PFLD 仪表数据集上训练 PFLD 模型。PFLD 模型在论文 [PFLD: A Practical Facial Landmark Detector](https://arxiv.org/pdf/1902.10859.pdf) 中提出。

## 准备数据集

SSCMA 默认使用[自定义仪表数据集](/cn/ModelAssistant_Tutorials_Datasets#SSCMA)来训练 PFLD 模型，请参考以下步骤完成数据集的准备。

1. 请参考[网络数据集 - SSCMA - 自定义仪表数据集](/cn/ModelAssistant_Tutorials_Datasets#SSCMA)下载并解压数据集。

2. 记住解压后数据集的**文件夹路径**（例如 `datasets\meter`），您稍后可能需要使用此文件夹路径。

## 选择配置

我们将根据需要执行的训练任务类型选择合适的配置文件，我们已经在[配置](/cn/ModelAssistant_Tutorials_Config)中介绍了这一点，简要描述了配置文件的功能、结构和原理。

对于仪表 PFLD 模型示例，我们使用 `pfld_mbv2n_112.py` 作为配置文件，它位于 SSCMA 根目录下的 `configs/pfld` 文件夹中，并且它还继承了 `default_runtime_pose.py` 配置文件。

对于初学者，我们建议首先关注此配置文件中的 `data_root` 和 `epochs` 参数。

<details>

<summary> pfld_mbv2n_112.py </summary>

```python
_base_='../_base_/default_runtime_pose.py'

num_classes=1
model=dict(type='PFLD',
             backbone=dict(type='PfldMobileNetV2',
                           inchannel=3,
                           layer1=[16, 16, 16, 16, 16],
                           layer2=[32, 32, 32, 32, 32, 32],
                           out_channel=16),
             head=dict(type='PFLDhead',
                       num_point=num_classes,
                       input_channel=16,
                       loss_cfg=dict(type='L1Loss')))

# 数据集设置
dataset_type='MeterData'

data_root=''
height=112
width=112
batch_size=32
workers=4

train_pipeline=[
    dict(type="Resize", height=height, width=width, interpolation=0),
    dict(type='ColorJitter', brightness=0.3, p=0.5),
    dict(type='GaussNoise'),
    dict(type='MedianBlur', blur_limit=3, p=0.3),
    dict(type='HorizontalFlip'),
    dict(type='VerticalFlip'),
    dict(type='Rotate'),
    dict(type='Affine', translate_percent=[0.05, 0.1], p=0.6)
]

val_pipeline=[dict(type="Resize", height=height, width=width)]

train_dataloader=dict(
    batch_size=32,
    num_workers=2,
    persistent_workers=True,
    drop_last=False,
    collate_fn=dict(type='default_collate'),
    sampler=dict(type='DefaultSampler', shuffle=True, round_up=False),
    dataset=dict(type=dataset_type,
                 data_root=data_root,
                 index_file=r'train/annotations.txt',
                 pipeline=train_pipeline,
                 test_mode=False),
)

val_dataloader=dict(
    batch_size=1,
    num_workers=1,
    persistent_workers=True,
    drop_last=False,
    collate_fn=dict(type='default_collate'),
    sampler=dict(type='DefaultSampler', shuffle=False, round_up=False),
    dataset=dict(type=dataset_type,
                 data_root=data_root,
                 index_file=r'val/annotations.txt',
                 pipeline=val_pipeline,
                 test_mode=True),
)
test_dataloader=val_dataloader

lr=0.0001
epochs=300
evaluation=dict(save_best='loss')
optim_wrapper=dict(
    optimizer=dict(type='Adam', lr=lr, betas=(0.9, 0.99), weight_decay=1e-6))
optimizer_config=dict(grad_clip=dict(max_norm=35, norm_type=2))
val_evaluator=dict(type='PointMetric')
test_evaluator=val_evaluator
find_unused_parameters=True
train_cfg=dict(by_epoch=True, max_epochs=500)

# 学习策略
param_scheduler=[
    dict(type='LinearLR', begin=0, end=500, start_factor=0.001,
         by_epoch=False),  # 预热
    dict(type='MultiStepLR',
         begin=1,
         end=500,
         milestones=[350, 400, 450, 490],
         gamma=0.1,
         by_epoch=True)
]
```

</details>

## 训练模型

训练模型需要使用我们之前配置的 SSCMA 工作环境，如果您按照我们的[安装](/cn/ModelAssistant_Introduce_Installation)指南使用 Conda 在名为 `sscma` 的虚拟环境中安装了 SSCMA，请首先确保您当前处于该虚拟环境中。

然后，在 SSCMA 项目根目录中，我们执行以下命令来训练端到端的仪表 PFLD 模型。

```sh
python3 tools/train.py \
    configs/pfld/pfld_mbv2n_112.py \
    --cfg-options \
        data_root='datasets/meter' \
        epochs=50
```

在训练过程中，模型权重和相关日志信息默认保存到路径 `work_dirs/pfld_mbv2n_112`，您可以使用 [TensorBoard](https://www.tensorflow.org/tensorboard/get_started) 等工具来监控训练过程。

```sh
tensorboard --logdir work_dirs/pfld_mbv2n_112
```

训练完成后，最新的 FOMO 模型权重文件的路径保存在 `work_dirs/pfld_mbv2n_112/last_checkpoint` 文件中。请记住权重文件的路径，因为在将模型转换为其他格式时需要用到它。

:::tip

如果您已配置虚拟环境但尚未激活，可以使用以下命令激活它。

```sh
conda activate sscma
```

## 测试和评估

### 测试

完成 PFLD 模型训练后，您可以使用以下命令指定特定权重并测试模型。

```sh
python3 tools/inference.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint)" \
    --cfg-options \
        data_root='datasets/meter'
```

:::tip

如果您希望在测试时进行实时预览，可以在测试命令后添加参数 `--show` 来显示预测结果。更多可选参数请参考源代码 `tools/test.py`。

:::

### 评估

为了在实际的边缘计算设备上进一步测试和评估模型，您需要导出模型。在导出模型的过程中，SSCMA 会对模型进行一些优化，如模型剪枝、蒸馏等。您可以参考[导出](/cn/ModelAssistant_Tutorials_Export_Overview)部分了解更多关于如何导出模型的信息。

### 部署

导出模型后，您可以将模型部署到边缘计算设备上进行测试和评估。您可以参考[部署](/cn/ModelAssistant_Deploy_Overview)部分了解更多关于如何部署模型的信息。