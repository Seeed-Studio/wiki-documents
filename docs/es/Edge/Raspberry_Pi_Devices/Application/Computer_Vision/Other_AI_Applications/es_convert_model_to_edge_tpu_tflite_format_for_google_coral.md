---
description: Esta wiki demuestra cómo compilar un modelo de tensorflow o pytorch a un modelo edge tpu, y ejecutarlo.
title: Convertir Modelo a Formato Edge TPU TFlite para Google Coral
keywords:
  - Edge TPU
  - rpi5
  - M.2 coral
  - Tensorflow
  - Pytorch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/convert_model_to_edge_tpu_tflite_format_for_google_coral
last_update:
  date: 07/23/2024
  author: Jiahao

no_comments: false # for Disqus
---

# Convertir Modelo a Formato Edge TPU TFlite para Google Coral

## Introducción

El [Acelerador Coral M.2](https://www.seeedstudio.com/Coral-M2-Accelerator-with-Dual-Edge-TPU-p-4681.html) con Dual Edge TPU es un módulo M.2 que aporta dos coprocesadores Edge TPU a sistemas y productos existentes con una ranura M.2 E-key disponible. [Tensorflow](https://www.tensorflow.org/) y [Pytorch](https://pytorch.org/) son los frameworks de aprendizaje profundo más populares. Así que para usar el Edge TPU, necesitamos compilar el modelo al formato Edge TPU.

Este artículo wiki te guiará a través del proceso de compilar un modelo y ejecutarlo en la TPU Google Coral, permitiéndote aprovechar sus capacidades para aplicaciones de aprendizaje automático de alto rendimiento.

## Preparar Hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>Raspberry Pi 5 8GB</th>
  <th>Raspberry Pi M.2 HAT+</th>
  <th>Acelerador Coral M.2 B+M key</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-103990663-raspberry-pi-m.2-hat_-_for-raspberry-pi-5_-font.jpg" style={{width:600, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992124-front.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-M-2-HAT-for-Raspberry-Pi-5-p-5881.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Instalar Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pycoral_install.gif" alt="pir" width={1000} height="auto"/></p>

## Convertir Modelo

:::note
Antes de comenzar, asegúrate de haber instalado el Google Coral TPU en el Pi 5 siguiendo la [guía de instalación](https://wiki.seeedstudio.com/es/install_m2_coral_to_rpi5/).
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Para Modelo Tensorflow">

:::note
Todo el proceso ha sido probado en Python 3.11.9.
:::

### Instalar Tensorflow

```
pip install tensorflow
```

### Verificar tflite_converter

```
tflite_convert -h
```

El resultado debería ser como este:

```
2024-07-23 10:41:03.750087: I tensorflow/core/platform/cpu_feature_guard.cc:182] This TensorFlow binary is optimized to use available CPU instructions in performance-critical operations.
To enable the following instructions: AVX2 FMA, in other operations, rebuild TensorFlow with the appropriate compiler flags.
2024-07-23 10:41:04.276520: W tensorflow/compiler/tf2tensorrt/utils/py_utils.cc:38] TF-TRT Warning: Could not find TensorRT
usage: tflite_convert [-h] --output_file OUTPUT_FILE [--saved_model_dir SAVED_MODEL_DIR | --keras_model_file KERAS_MODEL_FILE] [--saved_model_tag_set SAVED_MODEL_TAG_SET]
                      [--saved_model_signature_key SAVED_MODEL_SIGNATURE_KEY] [--enable_v1_converter] [--experimental_new_converter [EXPERIMENTAL_NEW_CONVERTER]]
                      [--experimental_new_quantizer [EXPERIMENTAL_NEW_QUANTIZER]]

Command line tool to run TensorFlow Lite Converter.

optional arguments:
  -h, --help            show this help message and exit
  --output_file OUTPUT_FILE
                        Full filepath of the output file.
  --saved_model_dir SAVED_MODEL_DIR
                        Full path of the directory containing the SavedModel.
  --keras_model_file KERAS_MODEL_FILE
                        Full filepath of HDF5 file containing tf.Keras model.
  --saved_model_tag_set SAVED_MODEL_TAG_SET
                        Comma-separated set of tags identifying the MetaGraphDef within the SavedModel to analyze. All tags must be present. In order to pass in an empty tag set, pass in "". (default "serve")
  --saved_model_signature_key SAVED_MODEL_SIGNATURE_KEY
                        Key identifying the SignatureDef containing inputs and outputs. (default DEFAULT_SERVING_SIGNATURE_DEF_KEY)
  --enable_v1_converter
                        Enables the TensorFlow V1 converter in 2.0
  --experimental_new_converter [EXPERIMENTAL_NEW_CONVERTER]
                        Experimental flag, subject to change. Enables MLIR-based conversion instead of TOCO conversion. (default True)
  --experimental_new_quantizer [EXPERIMENTAL_NEW_QUANTIZER]
                        Experimental flag, subject to change. Enables MLIR-based quantizer instead of flatbuffer conversion. (default True)

```

### Convertir Modelo de Tensorflow a Modelo TFlite

```
tflite_convert --saved_model_dir=YOUR_MODEL_PATH --output_file=YOUR_MODEL_NAME.tflite
```

### Convertir Modelo TFlite a Modelo Edge TPU

:::note
Debes optimizar tu modelo antes de convertir el modelo TFLite a un modelo Edge TPU. Por favor, consulta la guía [Optimizar Modelo TensorFlow](https://www.tensorflow.org/lite/performance/model_optimization).
:::

#### Instalar el compilador edgetpu

```
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

sudo apt-get update

sudo apt-get install edgetpu-compiler
```

#### Transformar Modelo TFlite a Modelo Edge TPU

```
edgetpu_compiler YOUR_MODEL_NAME.tflite
```

Y entonces deberías obtener un nuevo archivo llamado `YOUR_MODEL_NAME_edgetpu.tflite`

</TabItem>

<TabItem value="Method 2" label="Para Modelo Pytorch">

:::note
No recomendamos este enfoque, ya que durante el proceso real pueden surgir muchos conflictos entre paquetes. Además, TensorFlow Lite admite un conjunto limitado de operaciones, y algunas operaciones de PyTorch pueden no ser compatibles.
:::

### Convertir modelo de Pytorch a modelo tflite

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
Debes optimizar tu modelo antes de convertir un modelo TFLite a un modelo Edge TPU. Por favor, consulta [Optimización de Modelos TensorFlow](https://www.tensorflow.org/lite/performance/model_optimization) para más detalles.
:::

```
tflite_convert -h
```

El resultado debería ser como este:

```
2024-07-23 10:41:03.750087: I tensorflow/core/platform/cpu_feature_guard.cc:182] This TensorFlow binary is optimized to use available CPU instructions in performance-critical operations.
To enable the following instructions: AVX2 FMA, in other operations, rebuild TensorFlow with the appropriate compiler flags.
2024-07-23 10:41:04.276520: W tensorflow/compiler/tf2tensorrt/utils/py_utils.cc:38] TF-TRT Warning: Could not find TensorRT
usage: tflite_convert [-h] --output_file OUTPUT_FILE [--saved_model_dir SAVED_MODEL_DIR | --keras_model_file KERAS_MODEL_FILE] [--saved_model_tag_set SAVED_MODEL_TAG_SET]
                      [--saved_model_signature_key SAVED_MODEL_SIGNATURE_KEY] [--enable_v1_converter] [--experimental_new_converter [EXPERIMENTAL_NEW_CONVERTER]]
                      [--experimental_new_quantizer [EXPERIMENTAL_NEW_QUANTIZER]]

Command line tool to run TensorFlow Lite Converter.

optional arguments:
  -h, --help            show this help message and exit
  --output_file OUTPUT_FILE
                        Full filepath of the output file.
  --saved_model_dir SAVED_MODEL_DIR
                        Full path of the directory containing the SavedModel.
  --keras_model_file KERAS_MODEL_FILE
                        Full filepath of HDF5 file containing tf.Keras model.
  --saved_model_tag_set SAVED_MODEL_TAG_SET
                        Comma-separated set of tags identifying the MetaGraphDef within the SavedModel to analyze. All tags must be present. In order to pass in an empty tag set, pass in "". (default "serve")
  --saved_model_signature_key SAVED_MODEL_SIGNATURE_KEY
                        Key identifying the SignatureDef containing inputs and outputs. (default DEFAULT_SERVING_SIGNATURE_DEF_KEY)
  --enable_v1_converter
                        Enables the TensorFlow V1 converter in 2.0
  --experimental_new_converter [EXPERIMENTAL_NEW_CONVERTER]
                        Experimental flag, subject to change. Enables MLIR-based conversion instead of TOCO conversion. (default True)
  --experimental_new_quantizer [EXPERIMENTAL_NEW_QUANTIZER]
                        Experimental flag, subject to change. Enables MLIR-based quantizer instead of flatbuffer conversion. (default True)

```

### Convertir Modelo TFlite a Modelo Edge TPU

#### Instalar el compilador edgetpu

```
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

sudo apt-get update

sudo apt-get install edgetpu-compiler
```

#### Transformar Modelo TFlite a Modelo Edge TPU

```
edgetpu_compiler resnet18.tflite
```

Y entonces deberías obtener un nuevo archivo llamado `resnet18_edgetpu.tflite`

</TabItem>

<TabItem value="Method 3" label="For Yolo Model">

### Instalar Ultralytics

```
pip install ultralytics 
```

### Convertir Modelo YOLO a Modelo edge TPU

```
# For example, if you want to convert yolov8n.pt to yolov8n_integer_quant_edgetpu.tflite

yolo export model=yolov8n.pt format=edge int8=True

```

El resultado debería ser como este:

```
jiahao@PC:~/yolov8s_saved_model$ ls
assets          saved_model.pb          yolov8s_float32.tflite                     yolov8s_full_integer_quant.tflite
fingerprint.pb  variables               yolov8s_full_integer_quant_edgetpu.log     yolov8s_int8.tflite
metadata.yaml   yolov8s_float16.tflite  yolov8s_full_integer_quant_edgetpu.tflite  yolov8s_integer_quant.tflite
```

El ```yolov8s_full_integer_quant_edgetpu.tflite``` es el modelo que necesitas.

### Puedes convertir otros modelos tflite a modelo edge TPU usando el siguiente comando

```
# For example, you can convert yolov8s_int8.tflite to edge TPU model
edgetpu_compiler yolov8s_int8.tflite

```

</TabItem>
</Tabs>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
