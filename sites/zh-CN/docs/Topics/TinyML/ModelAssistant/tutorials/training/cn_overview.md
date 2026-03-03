---
description: 模型助手训练
title: 概述
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ModelAssistant_Tutorials_Training_Overview
last_update:
  date: 01/11/2024
  author: LynnL4
---

# 概述

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 目前支持以下模型。您可以参考相应的教程来完成模型的训练并获得模型权重。

- [目标检测 - SWIFT-YOLO](/cn/ModelAssistant_Tutorials_Training_YOLO)：数字仪表读数

- [目标检测 - FOMO](/cn/ModelAssistant_Tutorials_Training_FOMO)：口罩检测

- [关键点检测 PFLD](/cn/ModelAssistant_Tutorials_Training_PFLD)：指针仪表读数


:::tip

在开始训练之前，我们建议您先阅读[配置](/cn/ModelAssistant_Tutorials_Config)和[数据集](/cn/ModelAssistant_Tutorials_Datasets)部分。

:::

## 参数说明

有关模型训练期间的更多参数，您可以参考以下代码。

```sh
python3 tools/train.py --help

# Train SSCMA models

# positional arguments:
#   config                the model config file path

# optional arguments:
#   -h, --help            show this help message and exit
#   --work_dir WORK_DIR, --work-dir WORK_DIR
#                         the directory to save logs and models
#   --amp                 enable automatic-mixed-precision during training (https://pytorch.org/tutorials/recipes/recipes/amp_recipe.html)
#   --auto_scale_lr, --auto-scale-lr
#                         enable automatic-scale-LR during training
#   --resume [RESUME]     resume training from the checkpoint of the last epoch (or a specified checkpoint path)
#   --no_validate, --no-validate
#                         disable checkpoint evaluation during training
#   --launcher {none,pytorch,slurm,mpi}
#                         the job launcher for MMEngine
#   --cfg_options CFG_OPTIONS [CFG_OPTIONS ...], --cfg-options CFG_OPTIONS [CFG_OPTIONS ...]
#                         override some settings in the used config, the key-value pair in 'xxx=yyy' format will be merged into config file
#   --local_rank LOCAL_RANK, --local-rank LOCAL_RANK
#                         set local-rank for PyTorch
#   --dynamo_cache_size DYNAMO_CACHE_SIZE, --dynamo-cache-size DYNAMO_CACHE_SIZE
#                         set dynamo-cache-size limit for PyTorch
#   --input_shape INPUT_SHAPE [INPUT_SHAPE ...], --input-shape INPUT_SHAPE [INPUT_SHAPE ...]
#                         Extension: input data shape for model parameters estimation, e.g. 1 3 224 224
```

### 部署

导出模型后，您可以将模型部署到边缘计算设备上进行测试和评估。您可以参考[部署](/cn/ModelAssistant_Deploy_Overview)部分了解更多关于如何部署模型的信息。