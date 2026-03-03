---
description: Entrenamiento para Model Assistant
title: Detección de Puntos Clave - PFLD
keywords:
- sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ModelAssistant_Tutorials_Training_PFLD
last_update:
  date: 01/11/2024
  author: LynnL4
---

# Detección de Puntos Clave - PFLD

Esta sección describe cómo entrenar el modelo PFLD en el conjunto de datos de medidores PFLD. El modelo PFLD se presenta en el artículo [PFLD: A Practical Facial Landmark Detector](https://arxiv.org/pdf/1902.10859.pdf).

## Preparar Conjuntos de Datos

SSCMA utiliza [Conjuntos de Datos de Medidores Personalizados](/es/ModelAssistant_Tutorials_Datasets#SSCMA) por defecto para entrenar el modelo PFLD, por favor consulte los siguientes pasos para completar la preparación de los conjuntos de datos.

1. Por favor consulte [Conjuntos de Datos de Internet - SSCMA - Conjunto de Datos de Medidores Personalizados](/es/ModelAssistant_Tutorials_Datasets#SSCMA) para descargar y descomprimir el conjunto de datos.

2. Recuerde la **ruta de la carpeta** (ej. `datasets\meter`) de los conjuntos de datos descomprimidos, puede que necesite usar esta ruta de carpeta más adelante.

## Elegir una Configuración

Elegiremos un archivo de configuración apropiado dependiendo del tipo de tarea de entrenamiento que necesitemos realizar, lo cual ya hemos introducido en [Config](/es/ModelAssistant_Tutorials_Config), para una breve descripción de las funciones, estructura y principios del archivo de configuración.

Para el ejemplo del modelo PFLD de medidores, usamos `pfld_mbv2n_112.py` como archivo de configuración, que se encuentra en la carpeta bajo el directorio raíz de SSCMA `configs/pfld` y adicionalmente hereda el archivo de configuración `default_runtime_pose.py`.

Para principiantes, recomendamos prestar atención a los parámetros `data_root` y `epochs` en este archivo de configuración al principio.

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

# dataset settings
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

# learning policy
param_scheduler=[
    dict(type='LinearLR', begin=0, end=500, start_factor=0.001,
         by_epoch=False),  # warm-up
    dict(type='MultiStepLR',
         begin=1,
         end=500,
         milestones=[350, 400, 450, 490],
         gamma=0.1,
         by_epoch=True)
]
```

</details>

## Modelo de Entrenamiento

El entrenamiento del modelo requiere usar nuestro entorno de trabajo SSCMA previamente configurado. Si sigues nuestra guía de [Instalación](/es/ModelAssistant_Introduce_Installation) usando Conda para instalar SSCMA en un entorno virtual llamado `sscma`, por favor asegúrate primero de que estás actualmente en el entorno virtual.

Luego, en el directorio raíz del proyecto SSCMA, ejecutamos el siguiente comando para entrenar un modelo PFLD de medidor de extremo a extremo.

```sh
python3 tools/train.py \
    configs/pfld/pfld_mbv2n_112.py \
    --cfg-options \
        data_root='datasets/meter' \
        epochs=50
```

Durante el entrenamiento, los pesos del modelo y la información de registro relacionada se guardan en la ruta `work_dirs/pfld_mbv2n_112` por defecto, y puedes usar herramientas como [TensorBoard](https://www.tensorflow.org/tensorboard/get_started) para monitorear el entrenamiento.

```sh
tensorboard --logdir work_dirs/pfld_mbv2n_112
```

Después de completar el entrenamiento, la ruta del archivo de pesos del modelo FOMO más reciente se guarda en el archivo `work_dirs/pfld_mbv2n_112/last_checkpoint`. Por favor, ten cuidado con la ruta del archivo de pesos, ya que es necesaria al convertir el modelo a otros formatos.

:::tip

Si tienes un entorno virtual configurado pero no activado, puedes activarlo con el siguiente comando.

```sh
conda activate sscma
```

:::

## Pruebas y Evaluación

### Pruebas

Después de haber terminado de entrenar el modelo PFLD, puedes especificar pesos específicos y probar el modelo usando el siguiente comando.

```sh
python3 tools/inference.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint)" \
    --cfg-options \
        data_root='datasets/meter'
```

:::tip

Si quieres una vista previa en tiempo real mientras realizas pruebas, puedes agregar un parámetro `--show` al comando de prueba para mostrar los resultados predichos. Para más parámetros opcionales, consulta el código fuente `tools/test.py`.

:::

### Evaluación

Para probar y evaluar más a fondo el modelo en un dispositivo de computación en el borde realista, necesitas exportar el modelo. En el proceso de exportar el modelo, SSCMA realizará algunas optimizaciones en el modelo, como poda del modelo, destilación, etc. Puedes consultar la sección [Exportar](/es/ModelAssistant_Tutorials_Export_Overview) para aprender más sobre cómo exportar modelos.

### Despliegue

Después de exportar el modelo, puedes desplegar el modelo en el dispositivo de computación en el borde para pruebas y evaluación. Puedes consultar la sección [Desplegar](/es/ModelAssistant_Deploy_Overview) para aprender más sobre cómo desplegar modelos.
