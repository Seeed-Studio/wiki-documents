---
description: Esta wiki demuestra cómo compilar un modelo de tensorflow o pytorch al formato de modelo Edge TPU y ejecutarlo.
title: Convertir modelo a formato Edge TPU TFlite para Google Coral
keywords:
  - Edge TPU
  - rpi5
  - M.2 coral
  - Tensorflow
  - Pytorch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/convert_model_to_edge_tpu_tflite_format_for_google_coral
last_update:
  date: 02/18/2025
  author: Erick González

no_comments: false # para Disqus
---

# Convertir modelo a formato Edge TPU TFlite para Google Coral
## Introducción

El [Coral M.2 Accelerator](https://www.seeedstudio.com/Coral-M2-Accelerator-with-Dual-Edge-TPU-p-4681.html) con Dual Edge TPU es un módulo M.2 que trae dos coprocesadores Edge TPU a sistemas y productos existentes con un slot M.2 E-key disponible. [Tensorflow](https://www.tensorflow.org/) y [Pytorch](https://pytorch.org/) son los marcos de aprendizaje profundo más populares. Por lo tanto, para usar el Edge TPU, necesitamos compilar el modelo al formato de Edge TPU.

Este artículo de wiki te guiará a través del proceso de compilar un modelo y ejecutarlo en el Google Coral TPU, permitiéndote aprovechar sus capacidades para aplicaciones de aprendizaje automático de alto rendimiento.

## Preparar el hardware

<div class="table-center">
	<table align="center">
	<tr>
		<th>Raspberry Pi 5 8GB</th>
		<th>Raspberry Pi M.2 HAT+</th>
		<th>Coral M.2 Accelerator B+M key</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-103990663-raspberry-pi-m.2-hat_-_for-raspberry-pi-5_-font.jpg" style={{width:600, height:'auto'}}/></div></td>
	   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992124-front.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-M-2-HAT-for-Raspberry-Pi-5-p-5881.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Instalar hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pycoral_install.gif" alt="pir" width={1000} height="auto"/></p>

## Convertir modelo

:::note
Antes de comenzar, asegúrate de haber instalado el Google Coral TPU en la Pi 5 siguiendo la [guía de instalación](https://wiki.seeedstudio.com/install_m2_coral_to_rpi5/).
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Para modelo de Tensorflow">

:::note
Y todo el proceso ha sido probado en Python 3.11.9.
:::
### Instalar Tensorflow

```
pip install tensorflow
```
### Verificar tflite_converter

```
tflite_convert -h
```

El resultado debería ser algo como esto:
```
2024-07-23 10:41:03.750087: I tensorflow/core/platform/cpu_feature_guard.cc:182] Este binario de TensorFlow está optimizado para usar las instrucciones de CPU disponibles en operaciones críticas de rendimiento.
Para habilitar las siguientes instrucciones: AVX2 FMA, en otras operaciones, recompila TensorFlow con los indicadores del compilador apropiados.
2024-07-23 10:41:04.276520: W tensorflow/compiler/tf2tensorrt/utils/py_utils.cc:38] TF-TRT Advertencia: No se pudo encontrar TensorRT
uso: tflite_convert [-h] --output_file OUTPUT_FILE [--saved_model_dir SAVED_MODEL_DIR | --keras_model_file KERAS_MODEL_FILE] [--saved_model_tag_set SAVED_MODEL_TAG_SET]
                      [--saved_model_signature_key SAVED_MODEL_SIGNATURE_KEY] [--enable_v1_converter] [--experimental_new_converter [EXPERIMENTAL_NEW_CONVERTER]]
                      [--experimental_new_quantizer [EXPERIMENTAL_NEW_QUANTIZER]]

Herramienta de línea de comandos para ejecutar el conversor de TensorFlow Lite.

argumentos opcionales:
  -h, --help            muestra este mensaje de ayuda y sale
  --output_file OUTPUT_FILE
                        Ruta completa del archivo de salida.
  --saved_model_dir SAVED_MODEL_DIR
                        Ruta completa del directorio que contiene el SavedModel.
  --keras_model_file KERAS_MODEL_FILE
                        Ruta completa del archivo HDF5 que contiene el modelo tf.Keras.
  --saved_model_tag_set SAVED_MODEL_TAG_SET
                        Conjunto de etiquetas separadas por comas que identifican el MetaGraphDef dentro del SavedModel a analizar. Todas las etiquetas deben estar presentes. Para pasar un conjunto de etiquetas vacío, pasa "". (predeterminado "serve")
  --saved_model_signature_key SAVED_MODEL_SIGNATURE_KEY
                        Clave que identifica el SignatureDef que contiene entradas y salidas. (predeterminado DEFAULT_SERVING_SIGNATURE_DEF_KEY)
  --enable_v1_converter
                        Habilita el conversor de TensorFlow V1 en 2.0
  --experimental_new_converter [EXPERIMENTAL_NEW_CONVERTER]
                        Bandera experimental, sujeta a cambios. Habilita la conversión basada en MLIR en lugar de la conversión TOCO. (predeterminado True)
  --experimental_new_quantizer [EXPERIMENTAL_NEW_QUANTIZER]
                        Bandera experimental, sujeta a cambios. Habilita el cuantificador basado en MLIR en lugar de la conversión flatbuffer. (predeterminado True)

```

### Convertir modelo de Tensorflow a modelo TFlite

```
tflite_convert --saved_model_dir=TU_RUTA_DE_MODELO --output_file=TU_NOMBRE_DE_MODELO.tflite
```

### Convertir modelo TFlite a modelo Edge TPU

:::note
Debes optimizar tu modelo antes de convertir el modelo tflite a modelo Edge TPU, por favor consulta la [Optimización del modelo Tensorflow](https://www.tensorflow.org/lite/performance/model_optimization)
:::

#### Instalar compilador edgetpu

```
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

sudo apt-get update

sudo apt-get install edgetpu-compiler
```
#### Transformar modelo TFlite a modelo Edge TPU

```
edgetpu_compiler TU_NOMBRE_DE_MODELO.tflite
```
Y entonces deberías obtener un nuevo archivo llamado `TU_NOMBRE_DE_MODELO_edgetpu.tflite`


</TabItem>

<TabItem value="Method 2" label="Para modelo de Pytorch">

:::note
No recomendamos este enfoque porque existen muchos paquetes conflictivos en el proceso actual. Y TensorFlow Lite admite un conjunto limitado de operaciones, algunas operaciones de Pytorch pueden no ser compatibles.
:::

### Convertir modelo Pytorch a modelo tflite

#### Instalar dependencias

```
pip install -r https://github.com/google-ai-edge/ai-edge-torch/releases/download/v0.1.1/requirements.txt
pip install ai-edge-torch==0.1.1
```

#### Convertir
```
import ai_edge_torch
import numpy
import torch
import torchvision


resnet18 = torchvision.models.resnet18(torchvision.models.ResNet18_Weights.IMAGENET1K_V1).eval()
sample_inputs = (torch.randn(1, 3, 224, 224),)
torch_output = resnet18(*sample_inputs)

edge_model = ai_edge_torch.convert(resnet18.eval(), sample_inputs)

edge_model.export('resnet.tflite')
```

Obtendrás ```resnet.tflite```

### Verificar tflite_converter
:::note
Debes optimizar tu modelo antes de convertir el modelo tflite a modelo Edge TPU, por favor consulta la [Optimización del modelo Tensorflow](https://www.tensorflow.org/lite/performance/model_optimization)
:::
```
tflite_convert -h
```

El resultado debería ser algo como esto:
```
2024-07-23 10:41:03.750087: I tensorflow/core/platform/cpu_feature_guard.cc:182] Este binario de TensorFlow está optimizado para usar las instrucciones de CPU disponibles en operaciones críticas de rendimiento.
Para habilitar las siguientes instrucciones: AVX2 FMA, en otras operaciones, recompila TensorFlow con los indicadores del compilador apropiados.
2024-07-23 10:41:04.276520: W tensorflow/compiler/tf2tensorrt/utils/py_utils.cc:38] TF-TRT Advertencia: No se pudo encontrar TensorRT
uso: tflite_convert [-h] --output_file OUTPUT_FILE [--saved_model_dir SAVED_MODEL_DIR | --keras_model_file KERAS_MODEL_FILE] [--saved_model_tag_set SAVED_MODEL_TAG_SET]
                      [--saved_model_signature_key SAVED_MODEL_SIGNATURE_KEY] [--enable_v1_converter] [--experimental_new_converter [EXPERIMENTAL_NEW_CONVERTER]]
                      [--experimental_new_quantizer [EXPERIMENTAL_NEW_QUANTIZER]]

```

### Convertir modelo TFlite a modelo Edge TPU

#### Instalar compilador edgetpu

```
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

sudo apt-get update

sudo apt-get install edgetpu-compiler
```
#### Transformar modelo TFlite a modelo Edge TPU

```
edgetpu_compiler resnet18.tflite
```
Y entonces deberías obtener un nuevo archivo llamado `resnet18_edgetpu.tflite`

</TabItem>


<TabItem value="Method 3" label="Para modelo Yolo">

### Instalar Ultralytics

```
pip install ultralytics
```

### Convertir modelo YOLO a modelo Edge TPU

```
# Por ejemplo, si quieres convertir yolov8n.pt a yolov8n_integer_quant_edgetpu.tflite

yolo export model=yolov8n.pt format=edge int8=True

```
El resultado debería ser algo como esto:
```
jiahao@PC:~/yolov8s_saved_model$ ls
assets          saved_model.pb          yolov8s_float32.tflite                     yolov8s_full_integer_quant.tflite
fingerprint.pb  variables               yolov8s_full_integer_quant_edgetpu.log     yolov8s_int8.tflite
metadata.yaml   yolov8s_float16.tflite  yolov8s_full_integer_quant_edgetpu.tflite  yolov8s_integer_quant.tflite
```

El ```yolov8s_full_integer_quant_edgetpu.tflite``` es el modelo que necesitas.

### Puedes convertir otros modelos tflite a modelos Edge TPU usando el siguiente comando:

```
# Por ejemplo, puedes convertir yolov8s_int8.tflite a modelo Edge TPU
edgetpu_compiler yolov8s_int8.tflite

```

</TabItem>
</Tabs>


## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte el soporte necesario para asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
