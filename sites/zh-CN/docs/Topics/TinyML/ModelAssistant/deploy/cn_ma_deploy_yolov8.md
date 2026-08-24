---
description: 从训练到部署 YOLOv8
title: 训练并部署 YOLOv8 目标检测模型
keywords:
  - YOLOv8
  - we2
  - 目标检测
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ma_deploy_yolov8
last_update:
  date: 04/02/2024
  author: Jack Mu
createdAt: '2024-04-07'
updatedAt: '2026-08-19'
url: https://wiki.seeedstudio.com/cn/ma_deploy_yolov8/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 部署 YOLOv8 目标检测模型

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_person_yolov8.png" style={{width:600, height:'auto'}}/></div>

本教程将介绍如何训练官方 YOLOv8 目标检测模型，并将训练好的模型部署到 Grove Vision AI (V2) 设备或 `XIAO ESP32S3` 设备上。

## 数据集准备

推荐使用 [roboflow](https://universe.roboflow.com/) 平台来管理数据集。该平台可以进行数据集标注和部分数据增强策略，并支持导出多种数据集格式。

## 安装 YOLOv8 命令行工具

- 默认情况下，你已经具备 `python` 环境和 `pip` 包管理工具，并且 python>=3.8。

<Tabs>

<TabItem value="pip installation" label="pip">

安装 `ultralytics` 包，可以运行 `pip install -U ultralytics`。请访问 Python Package Index (PyPI) 了解更多关于 `ultralytics` 包的信息：[https://pypi.org/project/ultralytics/](https://pypi.org/project/ultralytics/)。

```bash
# Install using pip
pip install ultralytics==8.2.8
# Chinese users can use mirror acceleration
# pip install ultralytics==8.2.8 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

</TabItem>

<TabItem value="conda installation" label="conda">

`Conda` 是 `pip` 的另一种包管理器，也可以用于安装。访问 Anaconda 获取更多详情：[https://anaconda.org/conda-forge/ultralytics](https://anaconda.org/conda-forge/ultralytics) 。用于更新 `conda` 包的 `Ultralytics` feedstock 仓库位于 [https://github.com/conda-forge/ultralytics-feedstock/](https://github.com/conda-forge/ultralytics-feedstock/)。

```bash
# Install using conda
conda install -c conda-forge ultralytics=8.2.8
```

</TabItem>

<TabItem value="Git installation" label="Git">

如果你有兴趣参与开发，或希望尝试最新的源代码，可以克隆 `ultralytics` 仓库。克隆完成后，进入该目录，并使用 `-e` 参数以开发者模式安装该包。

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

`Tips:` 如果你不熟悉 YOLOv8 的代码，建议使用 pip 或 conda 进行安装。

- 你可以使用版本查询命令来测试 `yolo` 命令行工具是否安装成功。

```bash
# version query
yolo -v
```

## 训练

- 首先，进入下载好的数据集文件夹

- 执行以下命令开始训练模型

```bash
yolo train detect model=yolov8n.pt data=./data.yaml imgsz=192
```

## 导出模型为 tflite

- 训练完成后，模型将位于 `runs/train/exp*/weights/` 文件夹中。请确保你的模型评估指标满足需求。
- 使用以下命令导出 `tflite` 模型

```bash
yolo export model=${your model path}  format=tflite imgsz=192 int8
```

- 然后你会在当前文件夹下看到一个 `yolov8n_saved_model` 文件夹，其中包含 `yolov8n_full_integer_quant.tflite` 模型文件，该模型文件可以部署到 `Grove Vision AI(V2)` 或 `XIAO ESP32S3` 设备。

### 模型图优化

- Grove Vision AI (V2) 支持经过 vela 优化的模型，并且可以加速模型推理。首先，执行以下命令安装 vela 命令行工具（`XIAO ESP32S3` 设备暂不支持）

```bash

pip3 install ethos-u-vela
```

- 之后，你需要[下载](https://files.seeedstudio.com/sscma/configs/vela_config.ini) `vela` 相关配置文件，或者将下面的内容复制到一个文件中，该文件可以命名为 `vela_config.ini`

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

- 最后，使用以下命令对图进行优化

```bash
vela --accelerator-config ethos-u55-64 \ 
    --config vela_config.ini \
    --system-config My_Sys_Cfg \
    --memory-mode My_Mem_Mode_Parent \
    --output-dir ${Save path of the optimized model} \
    ${The path of the tflite model that needs to be optimized}
```

执行完成后，将在 `--output-dir` 指定的路径下生成一个经过图优化的 tflite 模型。

## 部署

- 需要部署的模型文件就是上面导出的 `tflite` 文件。你可以根据以下教程将模型文件烧录到目标设备中。

- 我们强烈建议使用我们的 Web 工具将训练好的 tflite 模型烧录到设备中。详细操作请参考[部署教程](https://wiki.seeedstudio.com/cn/ModelAssistant_Deploy_Overview/)

`Note:` 由于 `ESP32S3` 设备不支持在 `vela` 图优化之后进行模型部署，如果你要将模型部署到 `XIAO ESP32S3` 设备，则无需对 `tflite` 模型进行图优化。
