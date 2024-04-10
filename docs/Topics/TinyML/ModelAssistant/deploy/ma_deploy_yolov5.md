---
description: YOLOv5 from training to deployment
title: Train and deploy the YOLOv5 object detection model
keywords:
- YOLOv5 
- we2 
- object detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ma_deploy_yolov5
last_update:
  date: 04/02/2024
  author: Jack Mu
---


# Deploy YOLOv5 object detection model

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_person_yolov5.png" style={{width:600, height:'auto'}}/></div>

This wiki will introduce how to train the official YOLOv5 target detection model and deploy the trained model to `Grove Vision AI(V2)` or `XIAO ESP32S3` devices.

## Dataset preparation

It is recommended to use the [roboflow](https://universe.roboflow.com/) platform for data sets. This platform can perform data set annotation and some data enhancement strategies, and supports the export of multiple data set formats. You can view the yolov5 data set preparation [Introduction](https://docs.ultralytics.com/zh/yolov5/tutorials/train_custom_data/)

## Clone YOLOv5 official repository

- By default, you already have the python environment and pip package management tool and python>=3.8.

```bash
# Clone YOLOv5 official repository
git clone https://github.com/ultralytics/yolov5
```

- Install the required environment

```bash
# Cut to the YOLOv5 folder
cd yolov5
# Use pip to install required dependencies
pip install -r requirements.txt
```

## Train

- Execute the following command to start training the model

```bash
python train.py  --weights yolov5n.pt --data ${dataset yaml file path} --imgsz 192
```

## Export model to tflite

- After training, the model will be in the `runs/train/exp*/weights/` folder. Make sure that the evaluation indicators of your model meet your needs.
- First export the saved_model format model using the following command

```bash
python export.py --weights ${Your trained model path (.pt format)}  --imgsz 192 --include saved_model
```

- Then use the following code to quantify and convert the exported saved_model model into tflite model format

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

- Afterwards, you will see a `yolov5n_int8.tflite` model file under the save path folder of the club,This model file can be deployed to `Grove Vision AI(V2)` or `XIAO ESP32S3` devices..

### Model graph optimization

- Grove Vision AI (V2) supports vela-optimized models and can also accelerate model inference. First, execute the following command to install the vela command line tool (`XIAO ESP32S3` device is not supported yet).

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

## Deploy

- The model file that needs to be deployed is the `tflite` file exported above. You can burn the model file to the target device according to the following tutorial.

- We strongly recommend using our web tool to burn the trained tflite model into the device. Detailed operations are provided in the [Deployment Tutorial](https://wiki.seeedstudio.com/ModelAssistant_Deploy_Overview/)

`Note:` Since the `ESP32S3` device does not support model deployment after `vela` graph optimization, you do not need to perform `tflite` model graph optimization if you want to deploy the model to the `XIAO ESP32S3` device.
