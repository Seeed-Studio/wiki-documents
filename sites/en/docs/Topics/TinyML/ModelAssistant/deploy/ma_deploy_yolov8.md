---
description: YOLOv8 from training to deployment
title: Train and deploy the YOLOv8 object detection model
keywords:
- YOLOv8
- we2 
- object detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ma_deploy_yolov8
last_update:
  date: 04/02/2024
  author: Jack Mu
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy YOLOv8 object detection model

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_person_yolov8.png" style={{width:600, height:'auto'}}/></div>

This wiki will introduce how to train the official YOLOv8 target detection model and deploy the trained model to the Grove Vision AI (V2) device or `XIAO ESP32S3` devices..

## Dataset preparation

It is recommended to use the [roboflow](https://universe.roboflow.com/) platform for datasets. This platform can perform data set annotation and some data enhancement strategies, and supports the export of multiple data set formats.

## Install YOLOv8 command line tool

- By default, you already have the `python` environment and `pip` package management tool, and python>=3.8.

<Tabs>

<TabItem value="pip installation" label="pip">

Install the `ultralytics` package, or by running `pip install -U ultralytics`. Please visit the Python Package Index (PyPI) to learn more about the `ultralytics` package at [https://pypi.org/project/ultralytics/](https://pypi.org/project/ultralytics/).

```bash
# Install using pip
pip install ultralytics
# Chinese users can use mirror acceleration
# pip install ultralytics -i https://pypi.tuna.tsinghua.edu.cn/simple
```

</TabItem>

<TabItem value="conda installation" label="conda">

`Conda` is an alternative package manager to `pip` and can also be used for installation. Visit Anaconda for more details: [https://anaconda.org/conda-forge/ultralytics](https://anaconda.org/conda-forge/ultralytics) . The `Ultralytics` feedstock repository for updating `conda` packages is located at [https://github.com/conda-forge/ultralytics-feedstock/](https://github.com/conda-forge/ultralytics-feedstock/).

```bash
# Install using conda
conda install -c conda-forge ultralytics
```

</TabItem>

<TabItem value="Git installation" label="Git">

Clone `ultralytics` If you are interested in participating in development, or wish to experiment with the latest source code, please visit the repository. After cloning, navigate to the directory and install the package in developer mode using the `-e` parameter.

```bash
# Clone the official repository
git clone https://github.com/ultralytics/ultralytics

# Go into the cloned folder
cd ultralytics

# Install in developer mode
pip install -e .
```

</TabItem>

</Tabs>

`Tips:` If you are not familiar with the YOLOv8 code, it is recommended that you use pip or conda to install it.

- You can use the version query command to test whether the `yolo` command line tool is successfully installed.

```bash
# version query
yolo -v
```

## Train

- First, go to the downloaded data set folder

- Execute the following command to start training the model

```bash
yolo train detect model=yolov8n.pt data=./data.yaml imgsz=192
```

## Export model to tflite

- After training, the model will be in the `runs/train/exp*/weights/` folder. Make sure that the evaluation indicators of your model meet your needs.
- Use the following command to export the `tflite` model

```bash
yolo export model=${your model path}  format=tflite imgsz=192 int8
```

- You will then see a `yolov8n_saved_model` folder under the current folder, which contains the `yolov8n_full_integer_quant.tflite` model file,This model file can be deployed to `Grove Vision AI(V2)` or `XIAO ESP32S3` devices.

### Model graph optimization

- Grove Vision AI (V2) supports vela-optimized models and can also accelerate model inference. First, execute the following command to install the vela command line tool (`XIAO ESP32S3` device is not supported yet)

```bash

pip3 install ethos-u-vela
```

- After that, you need to [download](https://files.seeedstudio.com/sscma/configs/vela_config.ini) `vela` related configuration file, or copy the following content into a file, which can be named `vela_config.ini`

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

- Finally, use the following command to optimize the graph

```bash
vela --accelerator-config ethos-u55-64 \ 
    --config vela_config.ini \
    --system-config My_Sys_Cfg \
    --memory-mode My_Mem_Mode_Parent \
    --output-dir ${Save path of the optimized model} \
    ${The path of the tflite model that needs to be optimized}
```

After execution, a graph-optimized tflite model will be generated in the path specified by `--output-dir`.

## Deploy

- The model file that needs to be deployed is the `tflite` file exported above. You can burn the model file to the target device according to the following tutorial.

- We strongly recommend using our web tool to burn the trained tflite model into the device. Detailed operations are provided in the [Deployment Tutorial](https://wiki.seeedstudio.com/ModelAssistant_Deploy_Overview/)

`Note:` Since the `ESP32S3` device does not support model deployment after `vela` graph optimization, you do not need to perform `tflite` model graph optimization if you want to deploy the model to the `XIAO ESP32S3` device.
