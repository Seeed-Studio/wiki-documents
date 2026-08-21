---
description: YOLOv8 desde el entrenamiento hasta el despliegue
title: Entrenar y desplegar el modelo de detección de objetos YOLOv8
keywords:
  - YOLOv8
  - we2
  - detección de objetos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ma_deploy_yolov8
last_update:
  date: 04/02/2024
  author: Jack Mu
createdAt: '2024-04-07'
updatedAt: '2026-08-19'
url: https://wiki.seeedstudio.com/es/ma_deploy_yolov8/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Desplegar el modelo de detección de objetos YOLOv8

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_person_yolov8.png" style={{width:600, height:'auto'}}/></div>

Este wiki presentará cómo entrenar el modelo oficial de detección de objetos YOLOv8 y desplegar el modelo entrenado en el dispositivo Grove Vision AI (V2) o en dispositivos `XIAO ESP32S3`.

## Preparación del conjunto de datos

Se recomienda utilizar la plataforma [roboflow](https://universe.roboflow.com/) para los conjuntos de datos. Esta plataforma puede realizar la anotación del conjunto de datos y algunas estrategias de aumento de datos, y admite la exportación de múltiples formatos de conjuntos de datos.

## Instalar la herramienta de línea de comandos YOLOv8

- De forma predeterminada, ya tienes el entorno `python` y la herramienta de gestión de paquetes `pip`, y python>=3.8.

<Tabs>

<TabItem value="pip installation" label="pip">

Instala el paquete `ultralytics`, ejecutando `pip install -U ultralytics`. Visita el Python Package Index (PyPI) para obtener más información sobre el paquete `ultralytics` en [https://pypi.org/project/ultralytics/](https://pypi.org/project/ultralytics/).

```bash
# Install using pip
pip install ultralytics==8.2.8
# Chinese users can use mirror acceleration
# pip install ultralytics==8.2.8 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

</TabItem>

<TabItem value="conda installation" label="conda">

`Conda` es un gestor de paquetes alternativo a `pip` y también puede utilizarse para la instalación. Visita Anaconda para más detalles: [https://anaconda.org/conda-forge/ultralytics](https://anaconda.org/conda-forge/ultralytics). El repositorio `Ultralytics` feedstock para actualizar los paquetes de `conda` se encuentra en [https://github.com/conda-forge/ultralytics-feedstock/](https://github.com/conda-forge/ultralytics-feedstock/).

```bash
# Install using conda
conda install -c conda-forge ultralytics=8.2.8
```

</TabItem>

<TabItem value="Git installation" label="Git">

Clona `ultralytics` si estás interesado en participar en el desarrollo o deseas experimentar con el código fuente más reciente, visita el repositorio. Después de clonar, navega al directorio e instala el paquete en modo desarrollador utilizando el parámetro `-e`.

```bash
# Clone the official repository
git clone -b v8.2.8 https://github.com/ultralytics/ultralytics

# Go into the cloned folder
cd ultralytics

# Install in developer mode
pip install -e .
```

</TabItem>

</Tabs>

`Tips:` Si no estás familiarizado con el código de YOLOv8, se recomienda que lo instales con pip o conda.

- Puedes utilizar el comando de consulta de versión para probar si la herramienta de línea de comandos `yolo` se ha instalado correctamente.

```bash
# version query
yolo -v
```

## Entrenar

- Primero, ve a la carpeta del conjunto de datos descargado

- Ejecuta el siguiente comando para iniciar el entrenamiento del modelo

```bash
yolo train detect model=yolov8n.pt data=./data.yaml imgsz=192
```

## Exportar el modelo a tflite

- Después del entrenamiento, el modelo estará en la carpeta `runs/train/exp*/weights/`. Asegúrate de que los indicadores de evaluación de tu modelo cumplan con tus necesidades.
- Utiliza el siguiente comando para exportar el modelo `tflite`

```bash
yolo export model=${your model path}  format=tflite imgsz=192 int8
```

- A continuación verás una carpeta `yolov8n_saved_model` en la carpeta actual, que contiene el archivo de modelo `yolov8n_full_integer_quant.tflite`. Este archivo de modelo se puede desplegar en dispositivos `Grove Vision AI(V2)` o `XIAO ESP32S3`.

### Optimización del grafo del modelo

- Grove Vision AI (V2) admite modelos optimizados con vela y también puede acelerar la inferencia del modelo. Primero, ejecuta el siguiente comando para instalar la herramienta de línea de comandos vela (el dispositivo `XIAO ESP32S3` aún no es compatible)

```bash

pip3 install ethos-u-vela
```

- Después de eso, necesitas [descargar](https://files.seeedstudio.com/sscma/configs/vela_config.ini) el archivo de configuración relacionado con `vela`, o copiar el siguiente contenido en un archivo, que puede llamarse `vela_config.ini`

```bash
; file: my_vela_cfg.ini ; ----------------------------------------------------------------------------- 
; Vela configuration file ; ----------------------------------------------------------------------------- 
; System Configuration 

; My_Sys_Cfg 
[System_Config.My_Sys_Cfg] 
core_clock=400e6 
axi0_port=Sram 
axi1_port=OffChipFlash 
Sram_clock_scale=1.0 
Sram_burst_length=32 
Sram_read_latency=16 
Sram_write_latency=16 
Dram_clock_scale=0.75 
Dram_burst_length=128 
Dram_read_latency=500 
Dram_write_latency=250 
OnChipFlash_clock_scale=0.25 
OffChipFlash_clock_scale=0.015625 
OffChipFlash_burst_length=32 
OffChipFlash_read_latency=64 
OffChipFlash_write_latency=64 
; ----------------------------------------------------------------------------- 
; Memory Mode 
; My_Mem_Mode_Parent 
[Memory_Mode.My_Mem_Mode_Parent] 
const_mem_area=Axi1 
arena_mem_area=Axi0 
cache_mem_area=Axi0
```

- Finalmente, utiliza el siguiente comando para optimizar el grafo

```bash
vela --accelerator-config ethos-u55-64 \ 
    --config vela_config.ini \
    --system-config My_Sys_Cfg \
    --memory-mode My_Mem_Mode_Parent \
    --output-dir ${Save path of the optimized model} \
    ${The path of the tflite model that needs to be optimized}
```

Después de la ejecución, se generará un modelo tflite con grafo optimizado en la ruta especificada por `--output-dir`.

## Desplegar

- El archivo de modelo que debe desplegarse es el archivo `tflite` exportado anteriormente. Puedes grabar el archivo de modelo en el dispositivo de destino según el siguiente tutorial.

- Recomendamos encarecidamente utilizar nuestra herramienta web para grabar el modelo tflite entrenado en el dispositivo. Las operaciones detalladas se proporcionan en el [Tutorial de Despliegue](https://wiki.seeedstudio.com/es/ModelAssistant_Deploy_Overview/)

`Note:` Dado que el dispositivo `ESP32S3` no admite el despliegue de modelos después de la optimización del grafo con `vela`, no es necesario realizar la optimización del grafo del modelo `tflite` si deseas desplegar el modelo en el dispositivo `XIAO ESP32S3`.
