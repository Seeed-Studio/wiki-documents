---
description: Este wiki demonstra como compilar um modelo tensorflow ou um modelo pytorch para um modelo edge tup e executá-lo.
title: Converter Modelo para Formato Edge TPU TFlite para Google Coral
keywords:
  - Edge TPU
  - rpi5
  - M.2 coral
  - Tensorflow
  - Pytorch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /convert_model_to_edge_tpu_tflite_format_for_google_coral
last_update:
  date: 07/23/2024
  author: Jiahao
no_comments: false
createdAt: '2024-07-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/convert_model_to_edge_tpu_tflite_format_for_google_coral/
---

# Converter Modelo para Formato Edge TPU TFlite para Google Coral

## Introdução

O [Coral M.2 Accelerator](https://www.seeedstudio.com/Coral-M2-Accelerator-with-Dual-Edge-TPU-p-4681.html) com Dual Edge TPU é um módulo M.2 que traz dois coprocessadores Edge TPU para sistemas e produtos existentes com um slot M.2 E-key disponível. O [Tensorflow](https://www.tensorflow.org/) e o [Pytorch](https://pytorch.org/) são os frameworks de deep learning mais populares. Portanto, para usar a Edge TPU, precisamos compilar o modelo para o formato Edge TPU.

Este artigo do wiki irá guiá-lo através do processo de compilação de um modelo e execução dele na Google Coral TPU, permitindo que você aproveite seus recursos para aplicações de aprendizado de máquina de alto desempenho.

## Preparar Hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-M-2-HAT-for-Raspberry-Pi-5-p-5881.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Instalar Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pycoral_install.gif" alt="pir" width={1000} height="auto"/></p>

## Converter Modelo

:::note
Antes de começar, certifique-se de ter instalado o Google Coral TPU no Pi 5 seguindo o [guia de instalação](https://wiki.seeedstudio.com/pt-br/install_m2_coral_to_rpi5/).
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Para Modelo Tensorflow">

:::note
E todo o processo foi testado no Python 3.11.9.
:::

### Instalar Tensorflow

```
pip install tensorflow
```

### Verificar tflite_converter

```
tflite_convert -h
```

O resultado deve ser assim:

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

### Converter Modelo Tensorflow para Modelo TFlite

```
tflite_convert --saved_model_dir=YOUR_MODEL_PATH --output_file=YOUR_MODEL_NAME.tflite
```

### Converter Modelo TFlite para Modelo Edge TPU

:::note
Você deve otimizar seu modelo antes de converter o modelo tflite para modelo edge tup, por favor verifique o [Optimize Tensorflow Model](https://www.tensorflow.org/lite/performance/model_optimization)
:::

#### Instalar compilador edgetpu

```
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

sudo apt-get update

sudo apt-get install edgetpu-compiler
```

#### Transformar Modelo TFlite em Modelo Edge TPU

```
edgetpu_compiler YOUR_MODEL_NAME.tflite
```

E então você deve obter um novo arquivo chamado `YOUR_MODEL_NAME_edgetpu.tflite`

</TabItem>

<TabItem value="Method 2" label="Para Modelo Pytorch">

:::note
Nós não recomendamos esta abordagem porque existem muitos pacotes conflitantes no processo real. E o TensorFlow Lite oferece suporte a um conjunto limitado de operações, algumas operações do PyTorch podem não ser suportadas.  
:::

### Converter modelo Pytorch para modelo tflite

#### Instalar dependências

```
pip install -r https://github.com/google-ai-edge/ai-edge-torch/releases/download/v0.1.1/requirements.txt
pip install ai-edge-torch==0.1.1
```

#### Converter

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

Você obterá ```resnet.tflite```

### Verificar tflite_converter

:::note
Você deve otimizar seu modelo antes de converter o modelo tflite para modelo edge tup, por favor verifique o [Optimize Tensorflow Model](https://www.tensorflow.org/lite/performance/model_optimization)
:::

```
tflite_convert -h
```

O resultado deve ser assim:

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

### Converter Modelo TFlite para Modelo Edge TPU

#### Instalar compilador edgetpu

```
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

sudo apt-get update

sudo apt-get install edgetpu-compiler
```

#### Transformar modelo TFlite em modelo Edge TPU

```
edgetpu_compiler resnet18.tflite
```

E então você deverá obter um novo arquivo chamado `resnet18_edgetpu.tflite`

</TabItem>

<TabItem value="Method 3" label="Para modelo Yolo">

### Instalar Ultralytics

```
pip install ultralytics 
```

### Converter modelo YOLO em modelo Edge TPU

```
# For example, if you want to convert yolov8n.pt to yolov8n_integer_quant_edgetpu.tflite

yolo export model=yolov8n.pt format=edge int8=True

```

O resultado deverá ser assim:

```
jiahao@PC:~/yolov8s_saved_model$ ls
assets          saved_model.pb          yolov8s_float32.tflite                     yolov8s_full_integer_quant.tflite
fingerprint.pb  variables               yolov8s_full_integer_quant_edgetpu.log     yolov8s_int8.tflite
metadata.yaml   yolov8s_float16.tflite  yolov8s_full_integer_quant_edgetpu.tflite  yolov8s_integer_quant.tflite
```

O ```yolov8s_full_integer_quant_edgetpu.tflite``` é o modelo de que você precisa.

### Você pode converter outro modelo tflite em modelo Edge TPU usando o seguinte comando

```
# For example, you can convert yolov8s_int8.tflite to edge TPU model
edgetpu_compiler yolov8s_int8.tflite

```

</TabItem>
</Tabs>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
