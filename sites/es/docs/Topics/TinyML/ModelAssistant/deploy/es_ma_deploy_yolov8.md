---
description: YOLOv8 desde entrenamiento hasta despliegue
title: Entrenar y desplegar el modelo de detección de objetos YOLOv8
keywords:
- YOLOv8
- we2 
- object detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ma_deploy_yolov8
last_update:
  date: 04/02/2024
  author: Jack Mu
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Desplegar modelo de detección de objetos YOLOv8

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_person_yolov8.png" style={{width:600, height:'auto'}}/></div>

Este wiki introducirá cómo entrenar el modelo oficial de detección de objetivos YOLOv8 y desplegar el modelo entrenado en el dispositivo Grove Vision AI (V2) o dispositivos `XIAO ESP32S3`.

## Preparación del conjunto de datos

Se recomienda usar la plataforma [roboflow](https://universe.roboflow.com/) para conjuntos de datos. Esta plataforma puede realizar anotación de conjuntos de datos y algunas estrategias de mejora de datos, y soporta la exportación de múltiples formatos de conjuntos de datos.

## Instalar herramienta de línea de comandos YOLOv8

- Por defecto, ya tienes el entorno `python` y la herramienta de gestión de paquetes `pip`, y python>=3.8.

<Tabs>

<TabItem value="pip installation" label="pip">

Instala el paquete `ultralytics`, o ejecutando `pip install -U ultralytics`. Por favor visita el Índice de Paquetes de Python (PyPI) para aprender más sobre el paquete `ultralytics` en [https://pypi.org/project/ultralytics/](https://pypi.org/project/ultralytics/).

```bash
# Install using pip
pip install ultralytics
# Chinese users can use mirror acceleration
# pip install ultralytics -i https://pypi.tuna.tsinghua.edu.cn/simple
```

</TabItem>

<TabItem value="conda installation" label="conda">

`Conda` es un gestor de paquetes alternativo a `pip` y también puede ser usado para la instalación. Visita Anaconda para más detalles: [https://anaconda.org/conda-forge/ultralytics](https://anaconda.org/conda-forge/ultralytics) . El repositorio feedstock de `Ultralytics` para actualizar paquetes de `conda` se encuentra en [https://github.com/conda-forge/ultralytics-feedstock/](https://github.com/conda-forge/ultralytics-feedstock/).

```bash
# Install using conda
conda install -c conda-forge ultralytics
```

</TabItem>

<TabItem value="Git installation" label="Git">

Clona `ultralytics` si estás interesado en participar en el desarrollo, o deseas experimentar con el código fuente más reciente, por favor visita el repositorio. Después de clonar, navega al directorio e instala el paquete en modo desarrollador usando el parámetro `-e`.

```bash
# Clone the official repository
git clone https://github.com/ultralytics/ultralytics

# Go into the cloned folder
cd ultralytics

# Install in developer mode
pip install -e .
```

</TabItem>

</Tabs>

`Consejos:` Si no estás familiarizado con el código de YOLOv8, se recomienda que uses pip o conda para instalarlo.

- Puedes usar el comando de consulta de versión para probar si la herramienta de línea de comandos `yolo` se instaló correctamente.

```bash
# version query
yolo -v
```

## Entrenar

- Primero, ve a la carpeta del conjunto de datos descargado

- Ejecuta el siguiente comando para comenzar a entrenar el modelo

```bash
yolo train detect model=yolov8n.pt data=./data.yaml imgsz=192
```

## Exportar modelo a tflite

- Después del entrenamiento, el modelo estará en la carpeta `runs/train/exp*/weights/`. Asegúrate de que los indicadores de evaluación de tu modelo cumplan con tus necesidades.
- Usa el siguiente comando para exportar el modelo `tflite`

```bash
yolo export model=${your model path}  format=tflite imgsz=192 int8
```

- Luego verás una carpeta `yolov8n_saved_model` bajo la carpeta actual, que contiene el archivo de modelo `yolov8n_full_integer_quant.tflite`. Este archivo de modelo puede ser desplegado en dispositivos `Grove Vision AI(V2)` o `XIAO ESP32S3`.

### Optimización del grafo del modelo

- Grove Vision AI (V2) soporta modelos optimizados con vela y también puede acelerar la inferencia del modelo. Primero, ejecuta el siguiente comando para instalar la herramienta de línea de comandos vela (el dispositivo `XIAO ESP32S3` aún no es compatible)

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

- Finalmente, usa el siguiente comando para optimizar el grafo

```bash
vela --accelerator-config ethos-u55-64 \ 
    --config vela_config.ini \
    --system-config My_Sys_Cfg \
    --memory-mode My_Mem_Mode_Parent \
    --output-dir ${Save path of the optimized model} \
    ${The path of the tflite model that needs to be optimized}
```

Después de la ejecución, se generará un modelo tflite optimizado para gráficos en la ruta especificada por `--output-dir`.

## Despliegue

- El archivo de modelo que necesita ser desplegado es el archivo `tflite` exportado anteriormente. Puedes grabar el archivo de modelo en el dispositivo objetivo siguiendo el siguiente tutorial.

- Recomendamos encarecidamente usar nuestra herramienta web para grabar el modelo tflite entrenado en el dispositivo. Las operaciones detalladas se proporcionan en el [Tutorial de Despliegue](https://wiki.seeedstudio.com/es/ModelAssistant_Deploy_Overview/)

`Nota:` Dado que el dispositivo `ESP32S3` no admite el despliegue de modelos después de la optimización de gráficos `vela`, no necesitas realizar la optimización de gráficos del modelo `tflite` si deseas desplegar el modelo en el dispositivo `XIAO ESP32S3`.
