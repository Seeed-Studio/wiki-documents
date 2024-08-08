---
description: This wiki demonstrates how to use yolov8n to do object detection with ai kit on raspberry pi5 from traing to deploying 
title: Tutorial of AI Kit with Raspberry Pi 5 about YOLOv8n object detection 
keywords:
  - Edge
  - rpi5
  - Ai kit
  - YOLO
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection 
last_update:
  date: 08/6/2024
  author: Jiahao

no_comments: false # for Disqus
---

# Tutorial of AI Kit with Raspberry Pi 5 about YOLOv8n object detection 
## Introduction

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once version 8) is the popular most YOLO series of real-time pose estimation and object de tection models. It builds upon the strengths of its predecessors by introducing several advancements in speed, accuracy, and flexibility. The [Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) is used to accelerate inference speed, featuring a 13 tera-operations per second (TOPS) neural network inference accelerator built around the Hailo-8L chip.

This wiki we will show you how to use yolov8n to do object detection with ai kit on raspberry pi5 from traing to deploying.

## Prepare Hardware

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer r1000</th>
		<th>Raspberry Pi AI Kit</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113060086-raspberry-pi-ai-kit-45font.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


## Install Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/install_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

## Host computer

:::note
We will install hailo software, make sure you have a hailo account.
:::

### Install Ultralytics and train model:

Install python3.11
```
sudo apt install python3.11
```

Creat yolo_env as your virtual environment

```
python3.11 -m venv yolo_env
```

Activate the environment

```
source yolo_env/bin/activate
```

Install ultralytics

```
pip install ultralytics
```

Train yolov8n, here we use coco as dateset, if you want train your own dataset, you can use [this](https://docs.ultralytics.com) to train your own dataset. 

```
mkdir yolomodel && cd yolomodel
yolo detect train data=coco128.yaml model=yolov8n.pt name=retrain_yolov8n epochs=100 batch=16
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/train.png" alt="pir" width={1000} height="auto"/></p>

You will get best.pt model after your training like below:

```
cd ./runs/detect/retrain_yolov8n/weights/
ls
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/train_result.png" alt="pir" width={1000} height="auto"/></p>

Convert pt model to onnx

```
yolo export model=./best.pt imgsz=640 format=onnx opset=11 
```
Result like below:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/convert_onnx.png" alt="pir" width={1000} height="auto"/></p>

### Install hailo software:

Install python 3.8

```
cd ~
sudo apt install python3.8
```

Creat hailo_env as your virtual environment

```
python3.8 -m venv hailo_env
```

Activate the environment

```
source hailo_env/bin/activate
```

Install [Hailo Dataflow Compiler 3.27](https://hailo.ai/developer-zone/software-downloads/), here you need to register Hailo and login, and download the software.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/HDF_install.png" alt="pir" width={1000} height="auto"/></p>

``` 
pip install hailo_dataflow_compiler-3.27.0-py3-none-linux_x86_64.whl 

```
Install [Model zoo](https://hailo.ai/developer-zone/software-downloads/), here you need to register Hailo and login, and download the software.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_zoo.png" alt="pir" width={1000} height="auto"/></p>

```
pip install hailo_model_zoo-2.11.0-py3-none-any.whl 
```

Test hailo_model_zoo weather it can work

```
hailomz -h
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_zoo_test.png" alt="pir" width={1000} height="auto"/></p>


Install hailo_model_zoo github file

```
cd yolomodel/runs/detect/retrain_yolov8n/weights

git clone https://github.com/hailo-ai/hailo_model_zoo.git
```

Install coco dataset for evaluate/optimize/compile the yolov8n model

```
python hailo_model_zoo/datasets/create_coco_tfrecord.py val2017
python hailo_model_zoo/datasets/create_coco_tfrecord.py calib2017
```
### Use hailomz to parse the model:

Use hailomz to parse the model

```
hailomz parse --hw-arch hailo8l --ckpt ./best.onnx yolov8n
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/parse_model.png" alt="pir" width={1000} height="auto"/></p>

### Use hailomz to optimize the model:

:::note
If you excute the following command, you may get some errors, but you can copy ```./hailo_model_zoo/hailo_model_zoo``` to your local library. And if the error is about not find dateset, you can enter ```~/.hailomz``` and find the dataset, and copy it to your local dataset. 
:::

```
hailomz optimize --hw-arch hailo8l --har ./yolov8n.har yolov8n
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/optimize_model.png" alt="pir" width={1000} height="auto"/></p>

### Use hailomz to compile the model:

```
hailomz compile  yolov8n --hw-arch hailo8l --har ./yolov8n.har 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_compile.png" alt="pir" width={1000} height="auto"/></p>

After all you will get a hef format model, you can use it to deploy on reComputer r1000.

```
ls
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/compile_result.png" alt="pir" width={1000} height="auto"/></p>

## raspberry pi5

### update the system:

```
sudo apt update
sudo apt full-upgrade
```

### Set pcie to gen2/gen3(gen3 is faster than gen2):

Add following text to ```/boot/firmware/config.txt```

```
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```
:::note
If you want to use gen2,please comment dtparam=pciex1_gen=3
:::

### Install hailo-all and reboot:

Open terminal on the Raspberry Pi5, and input command as follows to install Hailo software.

```
sudo apt install hailo-all
sudo reboot
```
### Check Software and Hardware:

Open terminal on the Raspberry Pi5, and input command as follows to check if hailo-all have been installed.

```
hailortcli fw-control identify
```

The right result show as bellow:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Open terminal on the Raspberry Pi5, and input command as follows to check if hailo-8L have been connected.

```
lspci | grep Hailo
```

The right result show as bellow:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>


### Clone the project:

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
```

### Copy your model to the raspberry pi5:

make a directory named ```hailomodel```
```
mkdir hailomodel
```

:::note
The command below you should run on your host computer, not your raspberry pi5, and make sure your host computer and raspberry pi5 at the same net.
:::

```
scp -r ./yolomodel/runs/detect/retrain_yolov8n/weights/yolov8n.hef name@:ip /home/pi/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/hailomodel/
```

### Change code

Find line 105 and 106 in ```object-detection-hailo.py```, and change the code like below:
```
        elif args.network == "yolov8n":
            self.hef_path = os.path.join(self.current_path, './hailomodel/yolov8n.hef')
```

Find line 172 in ```object-detection-hailo.py```, and change the code like below:
```
    parser.add_argument("--network", default="yolov8n", choices=['yolov6n', 'yolov8s', 'yolox_s_leaky'], help="Which Network to use, defult is yolov6n")
```

### Run the code:

```
bash run.sh object-detection-hailo
```


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>