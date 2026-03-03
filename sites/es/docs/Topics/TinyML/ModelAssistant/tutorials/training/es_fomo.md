---
description: Entrenamiento para Model Assistant
title: Detección de Objetos - FOMO
keywords:
- sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ModelAssistant_Tutorials_Training_FOMO
last_update:
  date: 01/11/2024
  author: LynnL4
---

# Detección de Objetos - FOMO

Esta sección describe cómo entrenar el modelo de detección de máscaras FOMO en los conjuntos de datos COCO MASK. Las implementaciones del modelo de detección de máscaras FOMO se basan en MobileNet V2 y MobileNet V3 (la red neuronal real seleccionada depende del perfil del modelo que elijas).

Para más información sobre MobileNet, consulta el artículo [MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications](https://arxiv.org/pdf/1704.04861.pdf).

## Preparar Conjuntos de Datos

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) utiliza por defecto [COCO_MASK Datasets](/es/ModelAssistant_Tutorials_Datasets#SSCMA) para entrenar el modelo FOMO, consulta los siguientes pasos para completar la preparación de los conjuntos de datos.

1. Consulta [Internet Datasets](/es/ModelAssistant_Tutorials_Datasets#SSCMA) para descargar y descomprimir el conjunto de datos.

2. Recuerda su **ruta de carpeta** (ej. `datasets\mask`) de los conjuntos de datos descomprimidos, es posible que necesites usar esta ruta de carpeta más adelante.

## Elegir una Configuración

Elegiremos un archivo de configuración apropiado dependiendo del tipo de tarea de entrenamiento que necesitemos realizar, lo cual ya hemos introducido en [Config](/es/ModelAssistant_Tutorials_Config), para una breve descripción de las funciones, estructura y principios del archivo de configuración.

Para el ejemplo del modelo FOMO, usamos `fomo_mobnetv2_0.35_x8_abl_coco.py` como archivo de configuración, que se encuentra en la carpeta bajo el directorio raíz de [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) `configs/fomo` y adicionalmente hereda el archivo de configuración `default_runtime_det.py`.

Para principiantes, recomendamos prestar atención primero a los parámetros `data_root` y `epochs` en este archivo de configuración.

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

# dataset settings
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

# optimizer
lr=0.001
epochs=300
find_unused_parameters=True
optim_wrapper=dict(optimizer=dict(type='Adam', lr=lr, weight_decay=5e-4,eps=1e-7))

#evaluator
val_evaluator=dict(type='FomoMetric')
test_evaluator=val_evaluator
train_cfg=dict(by_epoch=True, max_epochs=70)

# learning policy
param_scheduler=[
    dict(type='LinearLR', begin=0, end=30, start_factor=0.001, by_epoch=False),  # warm-up
    dict(type='MultiStepLR',
         begin=1,
         end=500,
         milestones=[100, 200, 250],
         gamma=0.1,
         by_epoch=True)
]
```

</details>

## Entrenamiento del Modelo

El entrenamiento del modelo requiere usar nuestro entorno de trabajo de [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) previamente configurado. Si siguió nuestra guía de [Instalación](/es/ModelAssistant_Introduce_Installation) usando Conda para instalar [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) en un entorno virtual llamado `sscma`, por favor asegúrese primero de que se encuentra actualmente en el entorno virtual.

Luego, en el directorio raíz del proyecto [SSCMA](https://github.com/Seeed-Studio/ModelAssistant), ejecutamos el siguiente comando para entrenar un modelo de detección de mascarillas FOMO.

```sh
python3 tools/train.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    --cfg-options \
        data_root='datasets/mask' \
        epochs=50
```

Durante el entrenamiento, los pesos del modelo y la información de registro relacionada se guardan en la ruta `work_dirs/fomo_mobnetv2_0.35_x8_abl_coco` por defecto, y puedes usar herramientas como [TensorBoard](https://www.tensorflow.org/tensorboard/get_started) para monitorear el entrenamiento.

```sh
tensorboard --logdir work_dirs/fomo_mobnetv2_0.35_x8_abl_coco
```

Después de completar el entrenamiento, la ruta del archivo de pesos del modelo FOMO más reciente se guarda en el archivo `work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint`. Por favor, ten cuidado con la ruta del archivo de pesos, ya que es necesaria al convertir el modelo a otros formatos.

:::tip

Si tienes un entorno virtual configurado pero no activado, puedes activarlo con el siguiente comando.

```sh
conda activate sscma
```

:::

## Pruebas y Evaluación

### Pruebas

Después de haber terminado de entrenar el modelo FOMO, puedes especificar pesos específicos y probar el modelo usando el siguiente comando.

```sh
python3 tools/inference.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint)" \
    --cfg-options \
        data_root='datasets/mask'
```

:::tip

Si quieres una vista previa en tiempo real mientras realizas pruebas, puedes agregar un parámetro `--show` al comando de prueba para mostrar los resultados predichos. Para más parámetros opcionales, consulta el código fuente `tools/test.py`.

:::

### Evaluación

Para probar y evaluar más a fondo el modelo en un dispositivo de computación de borde realista, necesitas exportar el modelo. En el proceso de exportar el modelo, [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) realizará algunas optimizaciones en el modelo, como poda del modelo, destilación, etc. Puedes consultar la sección [Exportar](/es/ModelAssistant_Tutorials_Export_Overview) para aprender más sobre cómo exportar modelos.

### Despliegue

Después de exportar el modelo, puedes desplegar el modelo en el dispositivo de computación de borde para pruebas y evaluación. Puedes consultar la sección [Desplegar](/es/ModelAssistant_Deploy_Overview) para aprender más sobre cómo desplegar modelos.
