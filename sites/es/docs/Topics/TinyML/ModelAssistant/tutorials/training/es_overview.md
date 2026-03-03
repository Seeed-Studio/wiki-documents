---
description: Entrenamiento para Model Assistant
title: Visión General
keywords:
- sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ModelAssistant_Tutorials_Training_Overview
last_update:
  date: 01/11/2024
  author: LynnL4
---

# Resumen

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) actualmente soporta los siguientes modelos. Puedes consultar los tutoriales correspondientes para completar el entrenamiento de los modelos y obtener los pesos del modelo.

- [Detección de Objetos - SWIFT-YOLO](/es/ModelAssistant_Tutorials_Training_YOLO): lectura de medidores digitales

- [Detección de Objetos - FOMO](/es/ModelAssistant_Tutorials_Training_FOMO): Detección de mascarillas faciales

- [Detección de Puntos Clave PFLD](/es/ModelAssistant_Tutorials_Training_PFLD): Lectura de medidores de aguja

:::tip

Antes de comenzar el entrenamiento, recomendamos que leas primero las secciones [Config](/es/ModelAssistant_Tutorials_Config) y [Datasets](/es/ModelAssistant_Tutorials_Datasets).

:::

## Descripciones de Parámetros

Para más parámetros durante el entrenamiento del modelo, puedes consultar el código a continuación.

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

### Despliegue

Después de exportar el modelo, puedes desplegar el modelo en un dispositivo de computación en el borde para pruebas y evaluación. Puedes consultar la sección [Deploy](/es/ModelAssistant_Deploy_Overview) para aprender más sobre cómo desplegar el modelo.
