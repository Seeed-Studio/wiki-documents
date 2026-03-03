---
description: Exportar Para Asistente de Modelos
title: PyTorch a ONNX
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ModelAssistant_Tutorials_Export_PyTorch_2_ONNX
last_update:
  date: 01/11/2024
  author: LynnL4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PyTorch a ONNX

Este capítulo describirá cómo convertir y exportar modelos PyTorch a modelos ONNX.

## Preparación

### Configuración del Entorno

Como en el paso de [Entrenamiento](/es/ModelAssistant_Tutorials_Training_Overview), recomendamos que lo hagas en un **entorno virtual** durante la fase de exportación del modelo. En el entorno virtual `sscma`, asegúrate de que el paso [Instalación - Prerrequisitos - Instalar Dependencias Adicionales](/es/ModelAssistant_Introduce_Installation#step-4-install-extra-dependencies-optional) haya sido completado.

:::tip

Si has configurado un entorno virtual pero no lo has activado, puedes activarlo con el siguiente comando.

```sh
conda activate sscma
```

:::

### Modelos y Pesos

También necesitas preparar el modelo PyTorch y sus pesos antes de exportar el modelo. Para el modelo, puedes encontrarlo en la sección [Config](/es/ModelAssistant_Tutorials_Datasets), ya lo hemos preconfigurado. Para los pesos, puedes referirte a los siguientes pasos para obtener los pesos del modelo.

- Consulta la sección [Entrenamiento](/es/ModelAssistant_Tutorials_Training_Overview) y elige un modelo, y entrénalo para obtener los pesos del modelo.

- O descarga los pesos preentrenados oficiales de [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) desde nuestro [GitHub Releases - Model Zoo](https://github.com/Seeed-Studio/ModelAssistantreleases/tag/model_zoo).

## Exportar Modelo

Para la conversión y exportación del modelo, se listan los comandos relevantes con algunos parámetros comunes.

```sh
python3 tools/export.py \
    "<CONFIG_FILE_PATH>" \
    "<CHECKPOINT_FILE_PATH>" \
    --target onnx
```

### Ejemplos de Exportación ONNX

Aquí hay algunos ejemplos de conversión de modelos para referencia.

<Tabs>

<TabItem value="FOMO Model Conversion" label="Conversión de Modelo FOMO">

```
python3 tools/export.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint)" \
    --target onnx \
    --cfg-options \
        data_root='datasets/mask'
```

</TabItem>

<TabItem value="PFLD Model Conversion" label="Conversión de Modelo PFLD">

```sh
python3 tools/export.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint)" \
    --target onnx \
    --cfg-options \
        data_root='datasets/meter'
```

</TabItem>

<TabItem value="SWIFT-YOLO Model Conversion" label="Conversión de Modelo SWIFT">

```sh 
python3 tools/export.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint)" \
    --target onnx \
    --cfg-options \
        data_root='datasets/digital_meter'
```
</TabItem>
</Tabs>

## Validación del Modelo

Dado que en el proceso de exportación del modelo, [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) realizará algunas optimizaciones para el modelo usando algunas herramientas, como poda del modelo, destilación, etc. Aunque hemos probado y evaluado los pesos del modelo durante el proceso de entrenamiento, recomendamos que valides el modelo exportado nuevamente.

```sh
python3 tools/inference.py \
    "<CONFIG_FILE_PATH>" \
    "<CHECKPOINT_FILE_PATH>" \
    --show \
    --cfg-options "<CFG_OPTIONS>"
```

:::tip

Para más parámetros soportados, por favor consulta el código fuente `tools/inference.py` o ejecuta `python3 tools/inference.py --help`.

:::

### Ejemplo de Validación del Modelo

<Tabs>

<TabItem value="FOMO Model Validation" label="Validación de Modelo FOMO">

```sh
python3 tools/inference.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint | sed -e 's/.pth/.onnx/g')" \
    --show \
    --cfg-options \
        data_root='datasets/mask'
```

</TabItem>

<TabItem value="PFLD Model Validation" label="Validación de Modelo PFLD">

```sh
python3 tools/inference.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint | sed -e 's/.pth/.onnx/g')" \
    --show \
    --cfg-options \
        data_root='datasets/meter'
```

</TabItem>

<TabItem value="SWIFT-YOLO Model Validation" label="Validación de Modelo SWIFT-YOLO">

```sh
python3 tools/inference.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint | sed -e 's/.pth/.onnx/g')" \
    --show \
    --cfg-options \
        data_root='datasets/digital_meter'
```

</TabItem>

</Tabs>