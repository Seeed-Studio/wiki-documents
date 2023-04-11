---
description: Traffic Management DeepStream SDK
title: Traffic Management DeepStream SDK
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Traffic-Management-DeepStream-SDK
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Intelligent Traffic Management System using DeepStream SDK

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

## Overview

As cities are growing day-by-day, so is the number of vehicles on the roads. Because of this, the traffic congestion also grows rapidly and this in turn can heavily impact on the development of a country. This wiki proposes a solution for this issue using AI vision. The streaming video from already depolyed CCTV cameras at every traffic light can be captured, perform object detection to detect all the vehicles and then control the traffic lights according to the vehicle congestion. Furthermore this data can be sent to a database along with the vehicle make and the number of pedestrians for further analysis.

For this AI vision application, we will use DeepStream SDK by NVIDIA and perform inference at the edge on an NVIDIA Jetson device. Also, we will use a pre-trained model for this task from [NVIDIA NGC Model Catalog](https://catalog.ngc.nvidia.com/models) to make the deployment process fast and easy. NVIDIA NGC Model Catalog provides a large number of pre-trained models for many other different applications as well.

## What is DeepStream SDK?

NVIDIA’s [DeepStream SDK](https://developer.nvidia.com/deepstream-sdk) delivers a complete streaming analytics toolkit for AI-based multi-sensor processing, video, audio and image understanding. DeepStream brings development flexibility by giving developers the option to develop in C/C++,Python, or use low-code graphical programming with Graph Composer. DeepStream ships with various hardware accelerated plugins and extensions.

<div align="center"><img width={1000} src="https://developer.nvidia.com/sites/default/files/akamai/ds-workflow.png" /></div>

DeepStream is built for both developers and enterprises and offers extensive AI model support for popular object detection and segmentation models such as state of the art SSD, YOLO, FasterRCNN, and MaskRCNN. You can also integrate custom functions and libraries in DeepStream.

Deepstream offers the flexibility from rapid prototyping to full production level solutions. It also allows you to choose your inference path. With native integration to NVIDIA Triton Inference Server, you can deploy models in native frameworks such as PyTorch and TensorFlow for inference. Using NVIDIA TensorRT for high throughput inference with options for multi-GPU, multi-stream and batching support option, you can achieve the best possible performance.

## Hardware supported

DeepStream SDK is supported by the following hardware:

- Kits by Seeed:

  - reComputer J1010 built with Jetson Nano
  - reComputer J1020 built with Jetson Nano
  - reComputer J2011 built with Jetson Xavier NX 8GB
  - reComputer J2012 built with Jetson Xavier NX 16GB

- Carrier Boards by Seeed:

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203 Carrier Board
  - A203 (Version 2) Carrier Board
  - A205 Carrier Board
  - A206 Carrier Board

- Official Development Kits by NVIDIA:

  - NVIDIA® Jetson Nano Developer Kit
  - NVIDIA® Jetson Xavier NX Developer Kit
  - NVIDIA® Jetson AGX Xavier Developer Kit
  - NVIDIA® Jetson TX2 Developer Kit
  - NVIDIA® Jetson AGX Orin Developer Kit

- Official SoMs by NVIDIA:
  
  - NVIDIA® Jetson Nano module
  - NVIDIA® Jetson Xavier NX module
  - NVIDIA® Jetson TX2 NX module
  - NVIDIA® Jetson TX2 module
  - NVIDIA® Jetson AGX Xavier module

## Prerequisites

- Any of the above Jetson devices running JetPack
- Keyboard and HDMI display
- Host PC with Windows, Linux or Mac
- USB webcam or MIPI CSI camera supported by your Jetson device

## Getting started

Here we will use [DashCamNet model](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/dashcamnet) which acts as the primary detector, detecting the objects of interest and for each detected car the [VehicleTypeNet model](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehicletypenet) and [VehicleMakeNet model](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehiclemakenet) act as secondary classifiers determining the type of the car and the make of the car respectively. VehicleTypeNet classifies the following: coupe, sedan, SUV, van, large vehicle and truck. Whereas VehicleMakeNet classifies following cars: Acura, Audi, BMW, Chevrolet, Chrysler, Dodge, Ford, GMC, Honda, Hyundai, Infiniti, Jeep, Kia, Lexus, Mazda, Mercedes, Nissan, Subaru, Toyota, and Volkswagen.

> The below workflow is tested on a [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) running [JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461)

**Step 1:** Make sure you have properly installed all the **SDK Components** and **DeepStream SDK** on the Jetson device. (check [this wiki](https://wiki.seeedstudio.com/Tutorial-of-A20X-Carrier-Boards/) for a reference on installation)

**Note:** It is recommended to use **NVIDIA SDK Manager** to install all the SDK components and DeepStream SDK

**Step 2:** Download the configuration files

```sh
git clone https://github.com/NVIDIA-AI-IOT/deepstream_reference_apps.git
cd deepstream_reference_apps/deepstream_app_tao_configs/
sudo cp -a * /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
```

**Step 3:** Download the models

```sh
sudo apt install -y wget zip
cd /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
sudo ./download_models.sh
```

**Step 4:** Open **deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt**

```sh
vi deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

**Step 5:** Change **sync=1** to **sync=0** under [sink0]

```sh
[sink0]
enable=1
#Type - 1=FakeSink 2=EglSink 3=File
type=2
sync=0
source-id=0
gpu-id=0
```

**Step 6:** Under [primary-gie], change model-engine-file to **../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine**

```sh
[primary-gie]
enable=1
gpu-id=0
# Modify as necessary
model-engine-file=../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine
batch-size=1
#Required by the app for OSD, not a plugin property
bbox-border-color0=1;0;0;1
bbox-border-color1=0;1;1;1
bbox-border-color2=0;0;1;1
bbox-border-color3=0;1;0;1
gie-unique-id=1
config-file=config_infer_primary_dashcamnet.txt
```

**Step 7:** Under [secondary-gie0], change model-engine-file to **../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine**

```sh
[secondary-gie0]
enable=1
model-engine-file=../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine
gpu-id=0
batch-size=4
gie-unique-id=4
operate-on-gie-id=1
operate-on-class-ids=0;
config-file=config_infer_secondary_vehiclemakenet.txt
```

**Step 8:** Under [secondary-gie1], change model-engine-file to **../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine**

```sh
[secondary-gie1]
enable=1
model-engine-file=../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine
gpu-id=0
batch-size=4
gie-unique-id=5
operate-on-gie-id=1
operate-on-class-ids=0;
config-file=config_infer_secondary_vehicletypenet.txt
```

**Step 9:** Connect camera, keyboard, HDMI display to Jetson device and execute the following

```sh
sudo deepstream-app -c deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

Now you can visualize the demo on the connected HDMI display as follows

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

If you want to try other demos available under **/opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/**, you can simply run them as follows

```sh
sudo deepstream-app -c deepstream_app_source1_$MODEL.txt
```

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
