---
description: 本文档展示了如何将 Tensorflow 模型或 Pytorch 模型编译为 Edge TPU 模型，并运行它。
title: 将模型转换为 Google Coral 的 Edge TPU TFlite 格式
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

no_comments: false # 用于 Disqus
---

# 将模型转换为 Google Coral 的 Edge TPU TFlite 格式
## 简介

[Coral M.2 加速器](https://www.seeedstudio.com/Coral-M2-Accelerator-with-Dual-Edge-TPU-p-4681.html) 配备双 Edge TPU，是一个 M.2 模块，可为具有 M.2 E-key 插槽的现有系统和产品提供两个 Edge TPU 协处理器。[Tensorflow](https://www.tensorflow.org/) 和 [Pytorch](https://pytorch.org/) 是最流行的深度学习框架。因此，为了使用 Edge TPU，我们需要将模型编译为 Edge TPU 格式。

本文将指导您完成将模型编译并运行在 Google Coral TPU 上的过程，使您能够利用其高性能机器学习应用的能力。

## 准备硬件

<div class="table-center">
	<table align="center">
	<tr>
		<th>树莓派 5 8GB</th>
		<th>树莓派 M.2 HAT+</th>
		<th>Coral M.2 加速器 B+M key</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-103990663-raspberry-pi-m.2-hat_-_for-raspberry-pi-5_-font.jpg" style={{width:600, height:'auto'}}/></div></td>
	   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992124-front.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-M-2-HAT-for-Raspberry-Pi-5-p-5881.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 安装硬件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pycoral_install.gif" alt="pir" width={1000} height="auto"/></p>

## 转换模型

:::note
在开始之前，请确保您已按照[安装指南](https://wiki.seeedstudio.com/cn/install_m2_coral_to_rpi5/)将 Google Coral TPU 安装到 Pi 5。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="方法 1" label="针对 Tensorflow 模型">

:::note
所有过程均已在 Python 3.11.9 上测试。
:::
### 安装 Tensorflow

```
pip install tensorflow
```
### 检查 tflite_converter

```
tflite_convert -h
```

结果应如下所示：
```
2024-07-23 10:41:03.750087: I tensorflow/core/platform/cpu_feature_guard.cc:182] 此 TensorFlow 二进制文件已优化以在性能关键操作中使用可用的 CPU 指令。
要启用以下指令：AVX2 FMA，请在其他操作中使用适当的编译器标志重新构建 TensorFlow。
2024-07-23 10:41:04.276520: W tensorflow/compiler/tf2tensorrt/utils/py_utils.cc:38] TF-TRT 警告：未找到 TensorRT
usage: tflite_convert [-h] --output_file OUTPUT_FILE [--saved_model_dir SAVED_MODEL_DIR | --keras_model_file KERAS_MODEL_FILE] [--saved_model_tag_set SAVED_MODEL_TAG_SET]
                      [--saved_model_signature_key SAVED_MODEL_SIGNATURE_KEY] [--enable_v1_converter] [--experimental_new_converter [EXPERIMENTAL_NEW_CONVERTER]]
                      [--experimental_new_quantizer [EXPERIMENTAL_NEW_QUANTIZER]]

TensorFlow Lite 转换器的命令行工具。

可选参数:
  -h, --help            显示此帮助信息并退出
  --output_file OUTPUT_FILE
                        输出文件的完整路径。
  --saved_model_dir SAVED_MODEL_DIR
                        包含 SavedModel 的目录的完整路径。
  --keras_model_file KERAS_MODEL_FILE
                        包含 tf.Keras 模型的 HDF5 文件的完整路径。
  --saved_model_tag_set SAVED_MODEL_TAG_SET
                        用逗号分隔的标签集，用于标识 SavedModel 中的 MetaGraphDef。所有标签必须存在。要传递空标签集，请传递 ""。（默认值 "serve"）
  --saved_model_signature_key SAVED_MODEL_SIGNATURE_KEY
                        标识包含输入和输出的 SignatureDef 的键。（默认值 DEFAULT_SERVING_SIGNATURE_DEF_KEY）
  --enable_v1_converter
                        在 2.0 中启用 TensorFlow V1 转换器
  --experimental_new_converter [EXPERIMENTAL_NEW_CONVERTER]
                        实验性标志，可能会更改。启用基于 MLIR 的转换，而不是 TOCO 转换。（默认值 True）
  --experimental_new_quantizer [EXPERIMENTAL_NEW_QUANTIZER]
                        实验性标志，可能会更改。启用基于 MLIR 的量化器，而不是 flatbuffer 转换。（默认值 True）

```
### 将 Tensorflow 模型转换为 TFlite 模型

```
tflite_convert --saved_model_dir=YOUR_MODEL_PATH --output_file=YOUR_MODEL_NAME.tflite
```
### 将 TFlite 模型转换为 Edge TPU 模型

:::note
在将 tflite 模型转换为 edge tpu 模型之前，您应该优化您的模型，请查看[优化 Tensorflow 模型](https://www.tensorflow.org/lite/performance/model_optimization)。
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
然后您应该会得到一个名为 `YOUR_MODEL_NAME_edgetpu.tflite` 的新文件。

</TabItem>

<TabItem value="方法 2" label="针对 Pytorch 模型">

:::note
我们不推荐这种方法，因为实际过程中存在许多冲突的包。此外，TensorFlow Lite 支持的操作集有限，某些 PyTorch 操作可能不被支持。
:::

### 将 Pytorch 模型转换为 tflite 模型

#### 安装依赖项

```
pip install -r https://github.com/google-ai-edge/ai-edge-torch/releases/download/v0.1.1/requirements.txt
pip install ai-edge-torch==0.1.1
```

#### 转换
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

您将得到 ```resnet.tflite``` 

### 检查 tflite_converter
:::note
在将 tflite 模型转换为 edge tpu 模型之前，您应该优化您的模型，请查看[优化 Tensorflow 模型](https://www.tensorflow.org/lite/performance/model_optimization)。
:::
```
tflite_convert -h
```

结果应如下所示：
```
2024-07-23 10:41:03.750087: I tensorflow/core/platform/cpu_feature_guard.cc:182] 此 TensorFlow 二进制文件已优化以在性能关键操作中使用可用的 CPU 指令。
要启用以下指令：AVX2 FMA，请在其他操作中使用适当的编译器标志重新构建 TensorFlow。
2024-07-23 10:41:04.276520: W tensorflow/compiler/tf2tensorrt/utils/py_utils.cc:38] TF-TRT 警告：未找到 TensorRT
usage: tflite_convert [-h] --output_file OUTPUT_FILE [--saved_model_dir SAVED_MODEL_DIR | --keras_model_file KERAS_MODEL_FILE] [--saved_model_tag_set SAVED_MODEL_TAG_SET]
                      [--saved_model_signature_key SAVED_MODEL_SIGNATURE_KEY] [--enable_v1_converter] [--experimental_new_converter [EXPERIMENTAL_NEW_CONVERTER]]
                      [--experimental_new_quantizer [EXPERIMENTAL_NEW_QUANTIZER]]

TensorFlow Lite 转换器的命令行工具。

可选参数:
  -h, --help            显示此帮助信息并退出
  --output_file OUTPUT_FILE
                        输出文件的完整路径。
  --saved_model_dir SAVED_MODEL_DIR
                        包含 SavedModel 的目录的完整路径。
  --keras_model_file KERAS_MODEL_FILE
                        包含 tf.Keras 模型的 HDF5 文件的完整路径。
  --saved_model_tag_set SAVED_MODEL_TAG_SET
                        用逗号分隔的标签集，用于标识 SavedModel 中的 MetaGraphDef。所有标签必须存在。要传递空标签集，请传递 ""。（默认值 "serve"）
  --saved_model_signature_key SAVED_MODEL_SIGNATURE_KEY
                        标识包含输入和输出的 SignatureDef 的键。（默认值 DEFAULT_SERVING_SIGNATURE_DEF_KEY）
  --enable_v1_converter
                        在 2.0 中启用 TensorFlow V1 转换器
  --experimental_new_converter [EXPERIMENTAL_NEW_CONVERTER]
                        实验性标志，可能会更改。启用基于 MLIR 的转换，而不是 TOCO 转换。（默认值 True）
  --experimental_new_quantizer [EXPERIMENTAL_NEW_QUANTIZER]
                        实验性标志，可能会更改。启用基于 MLIR 的量化器，而不是 flatbuffer 转换。（默认值 True）
```

### 将 TFlite 模型转换为 Edge TPU 模型

#### 安装 edgetpu 编译器

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
然后你应该会得到一个名为 `resnet18_edgetpu.tflite` 的新文件。

</TabItem>


<TabItem value="Method 3" label="针对 Yolo 模型">

### 安装 Ultralytics 

```
pip install ultralytics 
```

### 将 YOLO 模型转换为 Edge TPU 模型

```
# 例如，如果你想将 yolov8n.pt 转换为 yolov8n_integer_quant_edgetpu.tflite

yolo export model=yolov8n.pt format=edge int8=True

```
结果应该如下所示：
```
jiahao@PC:~/yolov8s_saved_model$ ls
assets          saved_model.pb          yolov8s_float32.tflite                     yolov8s_full_integer_quant.tflite
fingerprint.pb  variables               yolov8s_full_integer_quant_edgetpu.log     yolov8s_int8.tflite
metadata.yaml   yolov8s_float16.tflite  yolov8s_full_integer_quant_edgetpu.tflite  yolov8s_integer_quant.tflite
```

文件 ```yolov8s_full_integer_quant_edgetpu.tflite``` 就是你需要的模型。

### 你可以使用以下命令将其他 tflite 模型转换为 Edge TPU 模型：

```
# 例如，你可以将 yolov8s_int8.tflite 转换为 Edge TPU 模型
edgetpu_compiler yolov8s_int8.tflite

```

</TabItem>
</Tabs>


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
