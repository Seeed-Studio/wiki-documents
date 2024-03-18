---
description: Trainnig For Model Assistant
title: Overview
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug:  /ModelAssistant_Tutorials_Training_Overview
last_update:
  date: 01/11/2024
  author: LynnL4
---

# Overview

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) currently supports the following models. You can refer to the corresponding tutorials to complete the training of the models and obtain the model weights.

- [Object Detection - SWIFT-YOLO](/ModelAssistant_Tutorials_Training_YOLO): digital meter reading

- [Object Detection - FOMO](/ModelAssistant_Tutorials_Training_FOMO): Face mask detection

- [Keypoint Detection PFLD](/ModelAssistant_Tutorials_Training_PFLD): Pointer meter reading


:::tip

Before start training, we recommend you to read [Config](/ModelAssistant_Tutorials_Config) and [Datasets](/ModelAssistant_Tutorials_Datasets) sections first.

:::

## Parameter Descriptions

For more parameters during model training, you can refer the code below.

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

### Deployment

After exporting the model, you can deploy the model to an edge computing device for testing and evaluation. You can refer to [Deploy](/ModelAssistant_Deploy_Overview) section to learn more about how to deploy the model.
