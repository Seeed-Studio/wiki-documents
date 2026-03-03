---
description: Configuración para Model Assistant
title: Configuración
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ModelAssistant_Tutorials_Config
last_update:
  date: 01/11/2024
  author: LynnL4
---


# Configuración

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) utiliza el sistema de procesamiento de configuración proporcionado por [OpenMMLab - MMEngine](https://github.com/open-mmlab/mmengine) con un diseño modular y heredable que proporciona a los usuarios una interfaz de acceso de configuración unificada para varias pruebas y validaciones de diferentes redes neuronales.

## Estructura de Directorios

Los archivos de configuración utilizados por [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) se encuentran en el directorio `configs`, que se utilizan para entrenar diferentes modelos bajo diferentes tareas. Y hemos creado muchas subcarpetas según diferentes tareas, y en cada subcarpeta, se almacenan diferentes parámetros de pipeline de entrenamiento de múltiples modelos.

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
└── <Other Tasks...>
```

:::tip

La carpeta de tareas llamada `_base_` es un objeto de herencia para otras tareas. Para más detalles sobre la herencia de archivos de configuración, consulte [MMEngine - Herencia de Archivos de Configuración](https://mmengine.readthedocs.io/en/latest/advanced_tutorials/config.html#id3).

:::

## Estructura de Configuración

Tomando el archivo de configuración `fomo_mobnetv2_0.35_x8_abl_coco.py` como ejemplo, introducimos diferentes campos en este archivo de configuración según los diferentes módulos funcionales.

### Parámetros Importantes

Al cambiar la configuración de entrenamiento, generalmente es necesario modificar los siguientes parámetros. Por ejemplo, los factores `height` y `width` son usualmente para el tamaño de imagen. Por lo tanto, recomendamos definir estos parámetros por separado en el archivo de configuración.

```python
height=96       # Input image height
width=96        # Input image width
batch_size=16   # Batch size of a single GPU during validation
workers=4       # Worker to pre-fetch data for each single GPU during validation
epoches=300     # Maximum training epochs: 300 epochs
lr=0.001        # Learn rate
```

### Configuración del Modelo

En el archivo de configuración del modelo FOMO, usamos model para configurar los componentes del algoritmo de detección, incluyendo componentes de red neuronal como backbone, neck, etc. Parte de la configuración del modelo como se muestra a continuación:

```python
num_classes=2                                   # Number of class
model=dict(
    type='Fomo',                                # The name of detector
    backbone=dict(
        type='MobileNetV2',
        widen_factor=0.35,
        out_indices=(2, )),                     # The config of backbone
    head=dict(
        type='Fomo_Head',                       # The config of head
        input_channels=16,                      # The input channels, this is consistent with the input channels of neck
        num_classes=num_classes,                # Number of classes for classification
        middle_channels=[96, 32],               # The output channels for head conv
        act_cfg='ReLU6',                        # The config of activation function
        loss_cls=dict(type='BCEWithLogitsLoss', # This loss combines a Sigmoid layer and the BCELoss in one single class
                      reduction='none',
                      pos_weight=40),
        loss_bg=dict(type='BCEWithLogitsLoss', reduction='none'),
        cls_weight=40)                          # Parameter for pos_weight
)
```

### Configuración del Dataset y Evaluador

El dataset y el pipeline de datos necesitan ser configurados para construir el dataloader. Debido a la complejidad de esta parte, utilizamos variables intermedias para simplificar la escritura de las configuraciones del dataloader. Métodos de argumentación de datos más complejos se pueden encontrar en la ruta `sscma/datasets/pipelines`.

Demostraremos aquí el pipeline de entrenamiento y prueba para FOMO, que utiliza el [Custom COCO_MASK Dataset](/es/ModelAssistant_Tutorials_Datasets):

```python
dataset_type='FomoDatasets'   # Dataset type, this will be used to define the dataset
data_root=''                  # Root path of data
train_pipeline=[              # Training data loading pipeline
    dict(type='RandomResizedCrop', height=height, width=width, scale=(0.90, 1.1),
         p=1),                                 # RandomResizedCrop augmentation in albumentation for fomo
    dict(type='Rotate', limit=20),             # Rotate transform with limit degree 20
    dict(type='RandomBrightnessContrast',      # RandomBrightnessContrast augmentation in albumentation
         brightness_limit=0.2,                 # Factor range for changing brightness
         contrast_limit=0.2,                   # Factor range for changing contrast
         p=0.5),                               # Probability of applying the transform
    dict(type='HorizontalFlip', p=0.5),        # Flip the input horizontally around the y-axis
]
test_pipeline=[dict(type='Resize', height=height, width=width,
                    p=1)]                      # Resize the input to the given height and width

data=dict(samples_per_gpu=batch_size,          # Batch size of a single GPU during training
          workers_per_gpu=workers,             # Worker to pre-fetch data for each single GPU during training
          train_dataloader=dict(collate=True), # Flag of merging a list of samples to form a mini-batch
          val_dataloader=dict(collate=True),
          train=dict(type=dataset_type,
                     data_root=data_root,
                     ann_file='annotations/person_keypoints_train2017.json',
                     img_prefix='train2017',   # Path of annotation file and prefix of image path
                     pipeline=train_pipeline),
          val=dict(type=dataset_type,
                   data_root=data_root,
                   test_mode=True,             # Enable test mode of the dataset to avoid filtering annotations or images
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

Los evaluadores se utilizan para calcular las métricas del modelo entrenado en los conjuntos de datos de validación y prueba. La configuración de los evaluadores consiste en una o una lista de configuraciones de métricas:

```python
evaluation=dict(interval=1, metric=['mAP'], fomo=True) # Validation metric for evaluate mAP
find_unused_parameters=True
```

### Configuración del Optimizador

```python
optimizer=dict(type='Adam', lr=lr, weight_decay=0.0005)         # Adam gradient descent optimizer with base learning rate and weight decay
optimizer_config=dict(grad_clip=dict(max_norm=35, norm_type=2)) # Config used to build the optimizer hook
```

:::tip

Para más detalles sobre la aplicación de Hook, consulte [MMEngine - Hook](https://mmengine.readthedocs.io/en/latest/tutorials/hook.html).

:::

### Herencia de Archivos de Configuración

El directorio `config/_base_` contiene el archivo de configuración predeterminado, y los archivos de configuración están compuestos por los componentes en `_base_`, lo cual se denomina primitivo.

Para facilitar las pruebas, recomendamos que los usuarios hereden los archivos de configuración existentes. Por ejemplo, el archivo de configuración de entrenamiento de un modelo FOMO con `_base_='. /_base_/default_runtime_det.py'`, y luego basándose en el archivo heredado, modificamos los campos necesarios en el archivo de configuración.

```python
_base_='../_base_/default_runtime_det.py
checkpoint_config=dict(interval=5) # Config to set the checkpoint hook
log_config=dict(                   # Config to register logger hook
            interval=150,          # Interval to print the log
            hooks=[
                dict(type='TextLoggerHook', ndigits=4),       # TXT logger
                dict(type='TensorboardLoggerHook', ndigits=4) # Tensorboard logger
            ])                                                # The logger used to record the training process
epochs=300
runner=dict(type='EpochBasedRunner',  # Type of runner to use (i.e. IterBasedRunner or EpochBasedRunner)
            max_epochs=epochs)        # Runner that runs the workflow in total max_epochs. For IterBasedRunner use `max_iters`
dist_params=dict(backend='nccl')      # Parameters to setup distributed training, the port can also be set
log_level = 'INFO'                    # The level of logging
load_from = None                      # Load models as a pre-trained model from a given path, this will not resume training
resume_from = None                    # Resume checkpoints from a given path, the training will be resumed from the epoch when the checkpoint's is saved
workflow = [('train', 1)]             # Workflow for runner. [('train', 1)] means there is only one workflow and the workflow named 'train' is executed once. The workflow trains the model by 300 epochs according to the total_epochs
opencv_num_threads = 1                # Disable OpenCV multi-threads to save memory
work_dir = './work_dirs'              # Directory to save the model checkpoints and logs for the current experiments
```

## Configuración Parametrizada

Al enviar un trabajo usando `tools/train.py` o `tools/test.py` desde [SSCMA](https://github.com/Seeed-Studio/ModelAssistant), puedes especificar `--cfg-options` para sobrescribir temporalmente la configuración.

:::tip

Puedes especificar opciones de configuración en el orden de las claves del diccionario en la configuración original y actualizar la cadena de diccionario de claves de configuración. Por ejemplo, `--cfg-options data_root='. /dataset/coco'` cambia el directorio raíz de datos del conjunto de datos.

:::

## Preguntas Frecuentes

- El archivo de configuración de diferentes modelos será diferente, ¿cómo lo entiendo?

  Para más detalles, por favor consulta [MMDet Config](https://mmdetection.readthedocs.io/en/latest/tutorials/config.html), [MMPose Config](https://mmpose.readthedocs.io/en/latest/tutorials/0_config.html) y [MMCls Config](https://mmclassification.readthedocs.io/en/latest/tutorials/config.html).
