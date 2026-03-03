---
description: 模型助手配置
title: 配置
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ModelAssistant_Tutorials_Config
last_update:
  date: 01/11/2024
  author: LynnL4
---


# 配置

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 使用 [OpenMMLab - MMEngine](https://github.com/open-mmlab/mmengine) 提供的配置处理系统，采用模块化和可继承的设计，为用户提供统一的配置访问接口，用于不同神经网络的各种测试和验证。

## 目录结构

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 使用的配置文件位于 `configs` 目录中，用于在不同任务下训练不同的模型。我们根据不同的任务创建了许多子文件夹，在每个子文件夹中，存储着多个模型的不同训练流水线参数。

```sh
configs
├── _base_
│   ├── datasets
│   │   └── coco_detection.py
│   ├── default_runtime_cls.py
│   ├── default_runtime_det.py
│   ├── default_runtime_pose.py
│   └── schedules
│       ├── schedule_1x.py
│       ├── schedule_20e.py
│       └── schedule_2x.py
├── classification
│   ├── base.py
│   ├── mobnetv2_1.0_1bx16_300e_custom.py
│   └── mobnetv3_small_1bx16_300e_custom.py
├── fomo
│   ├── fomo_efficientnet_b0_x8_abl_coco.py
│   ├── fomo_mobnetv2_0.35_x8_abl_coco.py
│   └── fomo_squeezenet_0.1_x8_abl_coco.py
├── pfld
│   ├── pfld_dan_fpn_x8_192.py
│   ├── pfld_mbv2n_112.py
│   ├── pfld_mbv3l_192.py
│   └── README.md
└── swift_yolo
    ├── base_arch.py
    └── swift_yolo_tiny_1xb16_300e_coco.py
└── <其他任务...>
```

:::tip

名为 `_base_` 的任务文件夹是其他任务的继承对象。有关配置文件继承的更多详细信息，请参考 [MMEngine - 配置文件继承](https://mmengine.readthedocs.io/en/latest/advanced_tutorials/config.html#id3)。

:::

## 配置结构

以 `fomo_mobnetv2_0.35_x8_abl_coco.py` 配置文件为例，我们根据不同的功能模块介绍此配置文件中的不同字段。

### 重要参数

在更改训练配置时，通常需要修改以下参数。例如，`height` 和 `width` 因子通常用于图像尺寸。因此我们建议在配置文件中单独定义这些参数。

```python
height=96       # 输入图像高度
width=96        # 输入图像宽度
batch_size=16   # 验证期间单个GPU的批次大小
workers=4       # 验证期间每个单个GPU预取数据的工作进程数
epoches=300     # 最大训练轮数：300轮
lr=0.001        # 学习率
```

### 模型配置

在 FOMO 模型的配置文件中，我们使用 model 来设置检测算法组件，包括神经网络组件如 backbone、neck 等。部分模型配置如下：

```python
num_classes=2                                   # 类别数量
model=dict(
    type='Fomo',                                # 检测器名称
    backbone=dict(
        type='MobileNetV2',
        widen_factor=0.35,
        out_indices=(2, )),                     # backbone 的配置
    head=dict(
        type='Fomo_Head',                       # head 的配置
        input_channels=16,                      # 输入通道数，这与 neck 的输入通道数一致
        num_classes=num_classes,                # 分类的类别数量
        middle_channels=[96, 32],               # head 卷积的输出通道数
        act_cfg='ReLU6',                        # 激活函数的配置
        loss_cls=dict(type='BCEWithLogitsLoss', # 此损失函数将 Sigmoid 层和 BCELoss 结合在一个单一类中
                      reduction='none',
                      pos_weight=40),
        loss_bg=dict(type='BCEWithLogitsLoss', reduction='none'),
        cls_weight=40)                          # pos_weight 的参数
)
```

### 数据集和评估器配置

需要设置数据集和数据管道来构建数据加载器。由于这部分的复杂性，我们使用中间变量来简化数据加载器配置的编写。更复杂的数据增强方法可以在 `sscma/datasets/pipelines` 路径中找到。

我们将在这里演示 FOMO 的训练和测试管道，它使用 [自定义 COCO_MASK 数据集](/cn/ModelAssistant_Tutorials_Datasets)：

```python
dataset_type='FomoDatasets'   # 数据集类型，这将用于定义数据集
data_root=''                  # 数据的根路径
train_pipeline=[              # 训练数据加载管道
    dict(type='RandomResizedCrop', height=height, width=width, scale=(0.90, 1.1),
         p=1),                                 # fomo的albumentation中的RandomResizedCrop增强
    dict(type='Rotate', limit=20),             # 限制角度为20的旋转变换
    dict(type='RandomBrightnessContrast',      # albumentation中的RandomBrightnessContrast增强
         brightness_limit=0.2,                 # 改变亮度的因子范围
         contrast_limit=0.2,                   # 改变对比度的因子范围
         p=0.5),                               # 应用变换的概率
    dict(type='HorizontalFlip', p=0.5),        # 围绕y轴水平翻转输入
]
test_pipeline=[dict(type='Resize', height=height, width=width,
                    p=1)]                      # 将输入调整为给定的高度和宽度

data=dict(samples_per_gpu=batch_size,          # 训练期间单个GPU的批次大小
          workers_per_gpu=workers,             # 训练期间每个单个GPU预取数据的工作进程数
          train_dataloader=dict(collate=True), # 合并样本列表以形成小批次的标志
          val_dataloader=dict(collate=True),
          train=dict(type=dataset_type,
                     data_root=data_root,
                     ann_file='annotations/person_keypoints_train2017.json',
                     img_prefix='train2017',   # 注释文件路径和图像路径前缀
                     pipeline=train_pipeline),
          val=dict(type=dataset_type,
                   data_root=data_root,
                   test_mode=True,             # 启用数据集的测试模式以避免过滤注释或图像
                   ann_file='annotations/person_keypoints_val2017.json',
                   img_prefix='val2017',
                   pipeline=test_pipeline),
          test=dict(type=dataset_type,
                    data_root=data_root,
                    test_mode=True,
                    ann_file='annotations/person_keypoints_val2017.json',
                    img_prefix='val2017',
                    pipeline=test_pipeline))
```

评估器用于计算训练模型在验证和测试数据集上的指标。评估器的配置由一个或多个指标配置组成：

```python
evaluation=dict(interval=1, metric=['mAP'], fomo=True) # Validation metric for evaluate mAP
find_unused_parameters=True
```

### 优化器配置

```python
optimizer=dict(type='Adam', lr=lr, weight_decay=0.0005)         # Adam梯度下降优化器，包含基础学习率和权重衰减
optimizer_config=dict(grad_clip=dict(max_norm=35, norm_type=2)) # 用于构建优化器钩子的配置
```

:::tip

有关 Hook 应用的更多详细信息，请参考 [MMEngine - Hook](https://mmengine.readthedocs.io/en/latest/tutorials/hook.html)。

:::

### 配置文件继承

目录 `config/_base_` 包含默认配置文件，配置文件由 `_base_` 中的组件组成，这被称为原语。

为了便于测试，我们建议用户继承现有的配置文件。例如，FOMO 模型的训练配置文件使用 `_base_='. /_base_/default_runtime_det.py'`，然后基于继承的文件，我们修改配置文件中的必要字段。

```python
_base_='../_base_/default_runtime_det.py
checkpoint_config=dict(interval=5) # 设置检查点钩子的配置
log_config=dict(                   # 注册日志记录器钩子的配置
            interval=150,          # 打印日志的间隔
            hooks=[
                dict(type='TextLoggerHook', ndigits=4),       # TXT 日志记录器
                dict(type='TensorboardLoggerHook', ndigits=4) # Tensorboard 日志记录器
            ])                                                # 用于记录训练过程的日志记录器
epochs=300
runner=dict(type='EpochBasedRunner',  # 要使用的运行器类型（即 IterBasedRunner 或 EpochBasedRunner）
            max_epochs=epochs)        # 运行工作流的总最大轮数。对于 IterBasedRunner 使用 `max_iters`
dist_params=dict(backend='nccl')      # 设置分布式训练的参数，也可以设置端口
log_level = 'INFO'                    # 日志记录级别
load_from = None                      # 从给定路径加载模型作为预训练模型，这不会恢复训练
resume_from = None                    # 从给定路径恢复检查点，训练将从保存检查点时的轮数恢复
workflow = [('train', 1)]             # 运行器的工作流。[('train', 1)] 表示只有一个工作流，名为 'train' 的工作流执行一次。工作流根据 total_epochs 训练模型 300 轮
opencv_num_threads = 1                # 禁用 OpenCV 多线程以节省内存
work_dir = './work_dirs'              # 保存当前实验的模型检查点和日志的目录
```

## 参数化配置

当使用来自 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 的 `tools/train.py` 或 `tools/test.py` 提交作业时，您可以指定 `--cfg-options` 来临时覆盖配置。

:::tip

您可以按照原始配置中字典键的顺序指定配置选项，并更新配置键的字典链。例如，`--cfg-options data_root='. /dataset/coco'` 更改数据集的数据根目录。

:::

## 常见问题

- 不同模型的配置文件会有所不同，我该如何理解？

  有关更多详细信息，请参考 [MMDet Config](https://mmdetection.readthedocs.io/en/latest/tutorials/config.html)、[MMPose Config](https://mmpose.readthedocs.io/en/latest/tutorials/0_config.html) 和 [MMCls Config](https://mmclassification.readthedocs.io/en/latest/tutorials/config.html)。