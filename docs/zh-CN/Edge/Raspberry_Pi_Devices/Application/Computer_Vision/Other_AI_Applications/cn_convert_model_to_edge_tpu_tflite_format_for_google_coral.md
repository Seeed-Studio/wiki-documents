---
description: 本wiki演示如何将tensorflow模型或pytorch模型编译为edge tpu模型并运行它。
title: 将模型转换为Google Coral的Edge TPU TFlite格式
keywords:
  - Edge TPU
  - rpi5
  - M.2 coral
  - Tensorflow
  - Pytorch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/convert_model_to_edge_tpu_tflite_format_for_google_coral
last_update:
  date: 07/23/2024
  author: Jiahao

no_comments: false # for Disqus
---

# 将模型转换为Google Coral的Edge TPU TFlite格式

## 介绍

[Coral M.2 加速器](https://www.seeedstudio.com/Coral-M2-Accelerator-with-Dual-Edge-TPU-p-4681.html)配备双Edge TPU，是一个M.2模块，为具有可用M.2 E-key插槽的现有系统和产品带来两个Edge TPU协处理器。[Tensorflow](https://www.tensorflow.org/)和[Pytorch](https://pytorch.org/)是最受欢迎的深度学习框架。因此，为了使用Edge TPU，我们需要将模型编译为Edge TPU格式。

本wiki文章将指导您完成编译模型并在Google Coral TPU上运行的过程，使您能够利用其功能进行高性能机器学习应用。

## 准备硬件

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-M-2-HAT-for-Raspberry-Pi-5-p-5881.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 安装硬件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pycoral_install.gif" alt="pir" width={1000} height="auto"/></p>

## 转换模型

:::note
在开始之前，请确保您已按照[安装指南](https://wiki.seeedstudio.com/cn/install_m2_coral_to_rpi5/)将 Google Coral TPU 安装到 Pi 5 上。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="适用于 Tensorflow 模型">

:::note
所有过程都已在 Python 3.11.9 上测试过。
:::

### 安装 Tensorflow

```
pip install tensorflow
```

### Check tflite_converter

```
tflite_convert -h
```

结果应该是这样的：

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

### 将 Tensorflow 模型转换为 TFlite 模型

```
tflite_convert --saved_model_dir=YOUR_MODEL_PATH --output_file=YOUR_MODEL_NAME.tflite
```

### 将 TFlite 模型转换为 Edge TPU 模型

:::note
在将 tflite 模型转换为 edge tpu 模型之前，您应该优化您的模型，请查看 [优化 Tensorflow 模型](https://www.tensorflow.org/lite/performance/model_optimization)
:::

#### 安装 edgetpu 编译器

```
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

sudo apt-get update

sudo apt-get install edgetpu-compiler
```

#### 将 TFlite 模型转换为 Edge TPU 模型

```
edgetpu_compiler YOUR_MODEL_NAME.tflite
```

然后你应该得到一个名为 `YOUR_MODEL_NAME_edgetpu.tflite` 的新文件

</TabItem>

<TabItem value="Method 2" label="For Pytorch Model">

:::note
我们不推荐这种方法，因为在实际过程中存在许多冲突的包。而且 TensorFlow Lite 支持的操作集有限，某些 PyTorch 操作可能不被支持。
:::

### 将 Pytorch 模型转换为 tflite 模型

#### 安装依赖项

```
pip install -r https://github.com/google-ai-edge/ai-edge-torch/releases/download/v0.1.1/requirements.txt
pip install ai-edge-torch==0.1.1
```

#### Convert

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

您将获得 ```resnet.tflite```

### 检查 tflite_converter

:::note
在将 tflite 模型转换为 edge tup 模型之前，您应该优化您的模型，请查看 [优化 Tensorflow 模型](https://www.tensorflow.org/lite/performance/model_optimization)
:::

```
tflite_convert -h
```

结果应该是这样的：

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

### 将 TFlite 模型转换为 Edge TPU 模型

#### Install edgetpu compiler

```
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

sudo apt-get update

sudo apt-get install edgetpu-compiler
```

#### 将 TFlite 模型转换为 Edge TPU 模型

```
edgetpu_compiler resnet18.tflite
```

然后你应该得到一个名为 `resnet18_edgetpu.tflite` 的新文件

</TabItem>

<TabItem value="Method 3" label="For Yolo Model">

### 安装 Ultralytics

```
pip install ultralytics 
```

### 将 YOLO 模型转换为边缘 TPU 模型

```
# For example, if you want to convert yolov8n.pt to yolov8n_integer_quant_edgetpu.tflite

yolo export model=yolov8n.pt format=edge int8=True

```

结果应该像这样：

```
jiahao@PC:~/yolov8s_saved_model$ ls
assets          saved_model.pb          yolov8s_float32.tflite                     yolov8s_full_integer_quant.tflite
fingerprint.pb  variables               yolov8s_full_integer_quant_edgetpu.log     yolov8s_int8.tflite
metadata.yaml   yolov8s_float16.tflite  yolov8s_full_integer_quant_edgetpu.tflite  yolov8s_integer_quant.tflite
```

```yolov8s_full_integer_quant_edgetpu.tflite``` 是您需要的模型。

### 您可以使用以下命令将其他 tflite 模型转换为 edge TPU 模型

```
# For example, you can convert yolov8s_int8.tflite to edge TPU model
edgetpu_compiler yolov8s_int8.tflite

```

</TabItem>
</Tabs>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
