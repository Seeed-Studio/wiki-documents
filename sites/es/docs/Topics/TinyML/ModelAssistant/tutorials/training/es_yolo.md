---
description: Entrenamiento para Asistente de Modelos
title: Detección de Objetos - SWIFT-YOLO
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ModelAssistant_Tutorials_Training_YOLO
last_update:
  date: 01/11/2024
  author: LynnL4
---

# Detección de Objetos - SWIFT-YOLO

Esta sección describe cómo entrenar el modelo de medidor digital en los conjuntos de datos de medidor digital COCO. Las implementaciones del modelo de detección de medidor digital yolo se basan en Swfit-YOLO y están impulsadas por [mmyolo](https://github.com/open-mmlab/mmyolo)

## Preparar Conjuntos de Datos

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) utiliza por defecto [Conjuntos de Datos de Medidor Digital](https://universe.roboflow.com/seeeddatasets/seeed_meter_digit/) para entrenar el modelo Swfit-YOLO, por favor consulte los siguientes pasos para completar la preparación de los conjuntos de datos.

1. Descargar conjuntos de datos de medidor digital con modo de conjuntos de datos COCO

2. Recuerde su **ruta de carpeta** (por ejemplo, `datasets\digital_meter`) de los conjuntos de datos descomprimidos, puede necesitar usar esta ruta de carpeta más tarde.

## Elegir una Configuración

Elegiremos un archivo de configuración apropiado dependiendo del tipo de tarea de entrenamiento que necesitemos realizar, lo cual ya hemos introducido en [Config](/es/ModelAssistant_Tutorials_Config), para una breve descripción de las funciones, estructura y principios del archivo de configuración.

Para el ejemplo del modelo Swfit-YOLO, usamos `swift_yolo_tiny_1xb16_300e_coco.py` como archivo de configuración, que se encuentra en la carpeta bajo el directorio raíz de SSCMA `configs/swift_yolo` y adicionalmente hereda el archivo de configuración `base_arch.py`.

Para principiantes, recomendamos prestar atención primero a los parámetros `data_root` y `epochs` en este archivo de configuración.

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

## Entrenar Modelo

Entrenar el modelo requiere usar nuestro entorno de trabajo SSCMA previamente configurado, si siguió nuestra guía de [Instalación](/es/ModelAssistant_Introduce_Installation) usando Conda para instalar [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) en un entorno virtual llamado `sscma`, por favor primero asegúrese de que actualmente está en el entorno virtual.

Luego, en el directorio raíz del proyecto [SSCMA](https://github.com/Seeed-Studio/ModelAssistant), ejecutamos el siguiente comando para entrenar un modelo de detección de medidor digital Swfit-YOLO.

```sh
python3 tools/train.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    --cfg-options \
        data_root='datasets/digital_meter' \
        epochs=50
```

Durante el entrenamiento, los pesos del modelo y la información de registro relacionada se guardan por defecto en la ruta `work_dirs/swift_yolo_tiny_1xb16_300e_coco`, y puede usar herramientas como [TensorBoard](https://www.tensorflow.org/tensorboard/get_started) para monitorear el entrenamiento.

```sh
tensorboard --logdir work_dirs/swift_yolo_tiny_1xb16_300e_coco
```

Después de que se complete el entrenamiento, la ruta del archivo de pesos del modelo Swfit-YOLO más reciente se guarda en el archivo `work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint`. Por favor cuide la ruta del archivo de pesos, ya que se necesita al convertir el modelo a otros formatos.

:::tip

Si tiene un entorno virtual configurado pero no activado, puede activarlo con el siguiente comando.

```sh
conda activate sscma
```

:::

## Pruebas y Evaluación

### Pruebas

Después de haber terminado de entrenar el modelo Swfit-YOLO, puede especificar pesos específicos y probar el modelo usando el siguiente comando.

```sh
python3 tools/inference.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint)" \
    --show \
    --cfg-options \
        data_root='datasets/digital_meter'
```

:::tip

Si desea una vista previa en tiempo real mientras prueba, puede agregar un parámetro `--show` al comando de prueba para mostrar los resultados predichos. Para más parámetros opcionales, por favor consulte el código fuente `tools/inference.py`.

:::

### Evaluación

Para probar y evaluar más el modelo en un dispositivo de computación de borde realista, necesita exportar el modelo. En el proceso de exportar el modelo, [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) hará algunas optimizaciones en el modelo, como poda de modelo, destilación, etc. Puede consultar la sección [Exportar](/es/ModelAssistant_Tutorials_Export_Overview) para aprender más sobre cómo exportar modelos.

### Despliegue

Después de exportar el modelo, puede desplegar el modelo al dispositivo de computación de borde para pruebas y evaluación. Puede consultar la sección [Desplegar](/es/ModelAssistant_Deploy_Overview) para aprender más sobre cómo desplegar modelos.