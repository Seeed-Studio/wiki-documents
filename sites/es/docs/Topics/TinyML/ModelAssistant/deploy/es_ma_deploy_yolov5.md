---
description: YOLOv5 desde entrenamiento hasta despliegue
title: Entrenar y desplegar el modelo de detección de objetos YOLOv5
keywords:
- YOLOv5 
- we2 
- object detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ma_deploy_yolov5
last_update:
  date: 04/02/2024
  author: Jack Mu
---


# Desplegar modelo de detección de objetos YOLOv5

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_person_yolov5.png" style={{width:600, height:'auto'}}/></div>

Este wiki introducirá cómo entrenar el modelo oficial de detección de objetivos YOLOv5 y desplegar el modelo entrenado en dispositivos `Grove Vision AI(V2)` o `XIAO ESP32S3`.

## Preparación del conjunto de datos

Se recomienda usar la plataforma [roboflow](https://universe.roboflow.com/) para conjuntos de datos. Esta plataforma puede realizar anotación de conjuntos de datos y algunas estrategias de mejora de datos, y soporta la exportación de múltiples formatos de conjuntos de datos. Puedes ver la [Introducción](https://docs.ultralytics.com/zh/yolov5/tutorials/train_custom_data/) de preparación de conjuntos de datos yolov5

## Clonar repositorio oficial de YOLOv5

- Por defecto, ya tienes el entorno python y la herramienta de gestión de paquetes pip y python>=3.8.

```bash
# Clonar repositorio oficial de YOLOv5
git clone https://github.com/ultralytics/yolov5
```

- Instalar el entorno requerido

```bash
# Cambiar a la carpeta YOLOv5
cd yolov5
# Usar pip para instalar dependencias requeridas
pip install -r requirements.txt
```

## Entrenar

- Ejecuta el siguiente comando para comenzar a entrenar el modelo

```bash
python train.py  --weights yolov5n.pt --data ${ruta del archivo yaml del conjunto de datos} --imgsz 192
```

## Exportar modelo a tflite

- Después del entrenamiento, el modelo estará en la carpeta `runs/train/exp*/weights/`. Asegúrate de que los indicadores de evaluación de tu modelo cumplan con tus necesidades.
- Primero exporta el modelo en formato saved_model usando el siguiente comando

```bash
python export.py --weights ${Ruta de tu modelo entrenado (formato .pt)}  --imgsz 192 --include saved_model
```

- Luego usa el siguiente código para cuantificar y convertir el modelo saved_model exportado al formato de modelo tflite

```python
import tensorflow as tf
import os.path as osp


converter = tf.lite.TFLiteConverter.from_saved_model(r'Ruta de tu carpeta saved_model')

tflite_model = converter.convert()

def representative_dataset():
  for _ in range(100):
    yield [
        tf.random.uniform((1, 192, 192
                           , 3))
    ]

converter.optimizations = [
    tf.lite.Optimize.DEFAULT
]
converter.target_spec.supported_ops = [
    tf.lite.OpsSet.TFLITE_BUILTINS_INT8
]
converter.inference_input_type = tf.int8
converter.inference_output_type = tf.int8
converter.representative_dataset = representative_dataset

tflite_quant_model = converter.convert()

with open(osp.join(r'La ruta de ubicación donde se guardará','yolov5n_int8.tflite'), 'wb') as f:
    f.write(tflite_quant_model)

```

- Después, verás un archivo de modelo `yolov5n_int8.tflite` bajo la carpeta de ruta de guardado del club. Este archivo de modelo puede ser desplegado en dispositivos `Grove Vision AI(V2)` o `XIAO ESP32S3`.

### Optimización del grafo del modelo

- Grove Vision AI (V2) soporta modelos optimizados con vela y también puede acelerar la inferencia del modelo. Primero, ejecuta el siguiente comando para instalar la herramienta de línea de comandos vela (el dispositivo `XIAO ESP32S3` aún no es compatible).

```bash
pip3 install ethos-u-vela
```

- Después, necesitas [descargar](https://files.seeedstudio.com/sscma/configs/vela_config.ini) el archivo de configuración relacionado con `vela`, o copiar el siguiente contenido en un archivo, que puede llamarse `vela_config.ini`

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
    --output-dir ${Ruta de guardado del modelo optimizado} \
    ${La ruta del modelo tflite que necesita ser optimizado}
```

## Desplegar

- El archivo de modelo que necesita ser desplegado es el archivo `tflite` exportado arriba. Puedes grabar el archivo de modelo en el dispositivo objetivo según el siguiente tutorial.

- Recomendamos encarecidamente usar nuestra herramienta web para grabar el modelo tflite entrenado en el dispositivo. Las operaciones detalladas se proporcionan en el [Tutorial de Despliegue](https://wiki.seeedstudio.com/es/ModelAssistant_Deploy_Overview/)

`Nota:` Dado que el dispositivo `ESP32S3` no soporta el despliegue de modelos después de la optimización del grafo `vela`, no necesitas realizar la optimización del grafo del modelo `tflite` si quieres desplegar el modelo en el dispositivo `XIAO ESP32S3`.