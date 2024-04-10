---
description: YOLOv5 from training to deployment
title: deploy YOLOv5
keywords:
- YOLOv5 
- we2 
- object detection
image: <https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png>
slug: /CN/TinyML/ModelAssistant/Deploy/Deploy_YOLOv5
last_update:
  date: 04/02/2024
  author: 大庆
---

# 部署YOLOv5目标检测模型

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_person_yolov5.png" style={{width:600, height:'auto'}}/></div>

此wiki将介绍如何训练官方的YOLOv5目标检测模型及将训练好的模型部署到`Grove Vision AI(V2)`或`XIAO ESP32S3`设备上。

## 数据集准备

数据集建议使用[roboflow](https://universe.roboflow.com/)平台，此平台可进行数据集的标注与一些数据增强策略，同时支持多种数据集格式的导出。可查看yolov5数据集准备[介绍](https://docs.ultralytics.com/zh/yolov5/tutorials/train_custom_data/)

## 克隆YOLOv5官方仓库

- 在此默认你已经有了`python`的环境与`pip`包管理工具，且python>=3.8。

```bash
# 克隆官方仓库
git clone https://github.com/ultralytics/yolov5
```

- 安装所需环境

```bash
# 切至yolov5文件夹下
cd yolov5
# 使用pip安装所需依赖
pip install -r requirements.txt
```

## 训练

- 执行以下命令开始训练模型

```bash
python train.py  --weights yolov5n.pt --data ${数据集yaml文件路径} --imgsz 192
```

## 导出模型至tflite

- 训练完成后的模型会在`runs/train/exp*/weights/`文件夹下，确认你的模型的评估指标达到你的需求
- 首先使用以下命令导出saved_model格式模型

```bash
python export.py --weights ${你训练好的模型路径}  --imgsz 192 --include saved_model
```

- 之后使用以下代码将导出的`saved_model`模型量化并转成`tflite`模型格式

```python
import tensorflow as tf
import os.path as osp



converter = tf.lite.TFLiteConverter.from_saved_model(r'你的saved_model文件夹路径')

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

with open(osp.join(r'需要保存的位置路径','yolov5n_int8.tflite'), 'wb') as f:
    f.write(tflite_quant_model)

```

- 之后会所保存路径文件夹下看到一个`yolov5n_int8.tflite`模型文件

### 模型图优化

- `Grove Vision AI(V2)`支持使用`vela`优化后的模型，同时也能加速模型的推理，首先执行以下命令安装`vela`命令行工具

```bash

pip3 install ethos-u-vela
```

- 之后需要[下载](https://files.seeedstudio.com/sscma/configs/vela_config.ini)`vela`相关的配置文件,或者复制下列的内容到一个文件内，可命名为`vela_config.ini`

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

- 最后使用以下命令，进行图优化

```bash
vela --accelerator-config ethos-u55-64 \ 
    --config vela_config.ini \
    --system-config My_Sys_Cfg \
    --memory-mode My_Mem_Mode_Parent \
    --output-dir ${优化后的模型保存路径} \
    ${需要被优化的tflite模型路径}
```

## 部署

- 需要部署的模型文件是以上导出的`tflite`文件，可根据以下教程将模型文件烧录至目标设备

- 我们强烈建议使用我们的网页工具将训练好的tflite模型烧录到设备中，其详细操作我们提供的[部署教程](https://wiki.seeedstudio.com/ModelAssistant_Deploy_Overview/)进行

`注意:`由于`ESP32S3`设备不支持经过`vela`图优化后的模型部署，因此如果你想将模型部署到`XIAO ESP32S3`设备上不需要进行`tflite`模型图优化。
