---
description: YOLOv5 从训练到部署
title: 训练和部署 YOLOv5 目标检测模型
keywords:
- YOLOv5 
- we2 
- object detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ma_deploy_yolov5
last_update:
  date: 04/02/2024
  author: Jack Mu
---


# 部署 YOLOv5 目标检测模型

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_person_yolov5.png" style={{width:600, height:'auto'}}/></div>

本教程将介绍如何训练官方 YOLOv5 目标检测模型，并将训练好的模型部署到 `Grove Vision AI(V2)` 或 `XIAO ESP32S3` 设备上。

## 数据集准备

推荐使用 [roboflow](https://universe.roboflow.com/) 平台获取数据集。该平台可以进行数据集标注和一些数据增强策略，并支持导出多种数据集格式。您可以查看 yolov5 数据集准备[介绍](https://docs.ultralytics.com/zh/yolov5/tutorials/train_custom_data/)

## 克隆 YOLOv5 官方仓库

- 默认情况下，您已经拥有 python 环境和 pip 包管理工具，且 python>=3.8。

```bash
# 克隆 YOLOv5 官方仓库
git clone https://github.com/ultralytics/yolov5
```

- 安装所需环境

```bash
# 切换到 YOLOv5 文件夹
cd yolov5
# 使用 pip 安装所需依赖
pip install -r requirements.txt
```

## 训练

- 执行以下命令开始训练模型

```bash
python train.py  --weights yolov5n.pt --data ${dataset yaml file path} --imgsz 192
```

## 导出模型为 tflite

- 训练完成后，模型将位于 `runs/train/exp*/weights/` 文件夹中。确保您的模型评估指标满足您的需求。
- 首先使用以下命令导出 saved_model 格式模型

```bash
python export.py --weights ${Your trained model path (.pt format)}  --imgsz 192 --include saved_model
```

- 然后使用以下代码对导出的 saved_model 模型进行量化并转换为 tflite 模型格式

```python
import tensorflow as tf
import os.path as osp


converter = tf.lite.TFLiteConverter.from_saved_model(r'Your saved_model folder path')

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

with open(osp.join(r'The location path to be saved','yolov5n_int8.tflite'), 'wb') as f:
    f.write(tflite_quant_model)

```

- 之后，您将在保存路径文件夹下看到一个 `yolov5n_int8.tflite` 模型文件，该模型文件可以部署到 `Grove Vision AI(V2)` 或 `XIAO ESP32S3` 设备上。

### 模型图优化

- Grove Vision AI (V2) 支持 vela 优化的模型，也可以加速模型推理。首先，执行以下命令安装 vela 命令行工具（`XIAO ESP32S3` 设备暂不支持）。

```bash
pip3 install ethos-u-vela
```

- 之后，您需要[下载](https://files.seeedstudio.com/sscma/configs/vela_config.ini) `vela` 相关配置文件，或将以下内容复制到文件中，可命名为 `vela_config.ini`

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

- 最后，使用以下命令进行图优化

```bash
vela --accelerator-config ethos-u55-64 \ 
    --config vela_config.ini \
    --system-config My_Sys_Cfg \
    --memory-mode My_Mem_Mode_Parent \
    --output-dir ${Save path of the optimized model} \
    ${The path of the tflite model that needs to be optimized}
```

## 部署

- 需要部署的模型文件是上面导出的 `tflite` 文件。您可以根据以下教程将模型文件烧录到目标设备。

- 我们强烈推荐使用我们的网页工具将训练好的 tflite 模型烧录到设备中。详细操作请参考[部署教程](https://wiki.seeedstudio.com/cn/ModelAssistant_Deploy_Overview/)

`注意：` 由于 `ESP32S3` 设备不支持 `vela` 图优化后的模型部署，如果您想将模型部署到 `XIAO ESP32S3` 设备，则无需执行 `tflite` 模型图优化。