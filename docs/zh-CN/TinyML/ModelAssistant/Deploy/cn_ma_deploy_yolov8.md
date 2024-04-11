---
description: YOLOv8 from training to deployment
title: 训练部署YOLOv8目标检测模型
keywords:
- YOLOv8
- we2 
- object detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ma_deploy_yolov8
last_update:
  date: 04/02/2024
  author: 大庆
---

# 部署YOLOv8目标检测与姿态估计模型

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_person_yolov8.png" style={{width:600, height:'auto'}}/></div>

此wiki将介绍如何训练官方的YOLOv8目标检测模型及将训练好的模型部署到`Grove Vision AI(V2)`或`XIAO ESP32S3`设备上。

## 数据集准备

数据集建议使用[roboflow](https://universe.roboflow.com/)平台，此平台可进行数据集的标注与一些数据增强策略，同时支持多种数据集格式的导出。

## 安装YOLOv8命令行工具

- 在此默认你已经有了`python`的环境与`pip`包管理工具，且python>=3.8。

<Tabs>

<TabItem value="pip安装" label="pip">

安装 `ultralytics` 软件包，或通过运行 `pip install -U ultralytics`.请访问Python Package Index (PyPI)，了解更多有关 `ultralytics`包可访问 [https://pypi.org/project/ultralytics/](https://pypi.org/project/ultralytics/).

```bash
# 使用pip安装
pip install ultralytics
# 中国用户可使用镜像加速
# pip install ultralytics -i https://pypi.tuna.tsinghua.edu.cn/simple
```

</TabItem>

<TabItem value="conda安装" label="conda">

`Conda` 是 `pip` 的替代软件包管理器，也可用于安装。更多详情请访问 Anaconda：[https://anaconda.org/conda-forge/ultralytics](https://anaconda.org/conda-forge/ultralytics) 。`Ultralytics` 用于更新 `conda` 软件包的 feedstock 资源库位于[https://github.com/conda-forge/ultralytics-feedstock/](https://github.com/conda-forge/ultralytics-feedstock/)。

```bash
# 使用conda安装
conda install -c conda-forge ultralytics
```

克隆 `ultralytics` 如果你有兴趣参与开发，或希望使用最新的源代码进行实验，请访问软件仓库。克隆后，导航到目录，以开发者模式安装软件包使用 `-e` 参数安装。

</TabItem>

<TabItem value="git安装" label="conda">

```bash
# 克隆官方仓库
git clone https://github.com/ultralytics/ultralytics

# 进入到克隆下来的文件夹内
cd ultralytics

# 以开发者模型进行安装，以便后续的修改能够同步
pip install -e .
```

</TabItem>

</Tabs>

如果您对并不熟悉YOLOv8的代码建议您使用`pip`或者`conda`安装，如果您比较熟悉YOLOv8的代码同时追求在设备上有较好的推理速度建议使用`Git`安装，因为下面也会指导您如何修改YOLO的代码加速推理

- 可使用版本查询命令测试是否成功安装`yolo`命令行工具

```bash
# 训练测试
yolo -v
```

## 训练

- 首先切入到所下载的数据集文件夹下

- 执行以下命令开始训练模型

```bash
yolo train detect model=yolov8n.pt data=./data.yaml imgsz=192
```

## 导出模型至tflite

- 训练完成后的模型会再`runs/train/exp*/weights/`文件夹下，确认你的模型的评估指标达到你的需求
- 使用以下命令可导出`tflite`模型

```bash
yolo export model=${你的模型路径}  format=tflite imgsz=192 int8
```

- 之后会再所在文件夹下看到一个`yolov8n_saved_model`的文件夹，里面含有`yolov8n_full_integer_quant.tflite`模型文件

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
