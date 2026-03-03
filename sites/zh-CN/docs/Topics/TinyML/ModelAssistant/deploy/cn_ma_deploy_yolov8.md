---
description: YOLOv8 从训练到部署
title: 训练和部署 YOLOv8 目标检测模型
keywords:
- YOLOv8
- we2 
- object detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ma_deploy_yolov8
last_update:
  date: 04/02/2024
  author: Jack Mu
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 部署 YOLOv8 目标检测模型

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_person_yolov8.png" style={{width:600, height:'auto'}}/></div>

本 wiki 将介绍如何训练官方 YOLOv8 目标检测模型，并将训练好的模型部署到 Grove Vision AI (V2) 设备或 `XIAO ESP32S3` 设备上。

## 数据集准备

建议使用 [roboflow](https://universe.roboflow.com/) 平台获取数据集。该平台可以进行数据集标注和一些数据增强策略，并支持导出多种数据集格式。

## 安装 YOLOv8 命令行工具

- 默认情况下，您已经拥有 `python` 环境和 `pip` 包管理工具，且 python>=3.8。

<Tabs>

<TabItem value="pip installation" label="pip">

安装 `ultralytics` 包，或通过运行 `pip install -U ultralytics`。请访问 Python 包索引 (PyPI) 了解更多关于 `ultralytics` 包的信息：[https://pypi.org/project/ultralytics/](https://pypi.org/project/ultralytics/)。

```bash
# 使用 pip 安装
pip install ultralytics
# 中国用户可以使用镜像加速
# pip install ultralytics -i https://pypi.tuna.tsinghua.edu.cn/simple
```

</TabItem>

<TabItem value="conda installation" label="conda">

`Conda` 是 `pip` 的替代包管理器，也可用于安装。访问 Anaconda 了解更多详情：[https://anaconda.org/conda-forge/ultralytics](https://anaconda.org/conda-forge/ultralytics)。用于更新 `conda` 包的 `Ultralytics` feedstock 仓库位于 [https://github.com/conda-forge/ultralytics-feedstock/](https://github.com/conda-forge/ultralytics-feedstock/)。

```bash
# 使用 conda 安装
conda install -c conda-forge ultralytics
```

</TabItem>

<TabItem value="Git installation" label="Git">

如果您有兴趣参与开发，或希望体验最新的源代码，请克隆 `ultralytics` 仓库。克隆后，导航到目录并使用 `-e` 参数以开发者模式安装包。

```bash
# 克隆官方仓库
git clone https://github.com/ultralytics/ultralytics

# 进入克隆的文件夹
cd ultralytics

# 以开发者模式安装
pip install -e .
```

</TabItem>

</Tabs>

`提示：` 如果您不熟悉 YOLOv8 代码，建议您使用 pip 或 conda 进行安装。

- 您可以使用版本查询命令来测试 `yolo` 命令行工具是否成功安装。

```bash
# 版本查询
yolo -v
```

## 训练

- 首先，进入下载的数据集文件夹

- 执行以下命令开始训练模型

```bash
yolo train detect model=yolov8n.pt data=./data.yaml imgsz=192
```

## 导出模型为 tflite

- 训练完成后，模型将位于 `runs/train/exp*/weights/` 文件夹中。确保您的模型评估指标符合您的需求。
- 使用以下命令导出 `tflite` 模型

```bash
yolo export model=${your model path}  format=tflite imgsz=192 int8
```

- 然后您将在当前文件夹下看到一个 `yolov8n_saved_model` 文件夹，其中包含 `yolov8n_full_integer_quant.tflite` 模型文件，此模型文件可以部署到 `Grove Vision AI(V2)` 或 `XIAO ESP32S3` 设备上。

### 模型图优化

- Grove Vision AI (V2) 支持 vela 优化的模型，也可以加速模型推理。首先，执行以下命令安装 vela 命令行工具（`XIAO ESP32S3` 设备暂不支持）

```bash

pip3 install ethos-u-vela
```

- 之后，您需要[下载](https://files.seeedstudio.com/sscma/configs/vela_config.ini) `vela` 相关配置文件，或将以下内容复制到一个文件中，可以命名为 `vela_config.ini`

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

- 最后，使用以下命令优化图

```bash
vela --accelerator-config ethos-u55-64 \ 
    --config vela_config.ini \
    --system-config My_Sys_Cfg \
    --memory-mode My_Mem_Mode_Parent \
    --output-dir ${Save path of the optimized model} \
    ${The path of the tflite model that needs to be optimized}
```

执行后，将在 `--output-dir` 指定的路径中生成一个图优化的 tflite 模型。

## 部署

- 需要部署的模型文件是上面导出的 `tflite` 文件。您可以根据以下教程将模型文件烧录到目标设备。

- 我们强烈推荐使用我们的网页工具将训练好的 tflite 模型烧录到设备中。详细操作请参考[部署教程](https://wiki.seeedstudio.com/cn/ModelAssistant_Deploy_Overview/)

`注意：` 由于 `ESP32S3` 设备不支持 `vela` 图优化后的模型部署，如果您想将模型部署到 `XIAO ESP32S3` 设备，则不需要执行 `tflite` 模型图优化。