---
description: 基于 DeepStream SDK的智能交通管理系统
title: 基于 DeepStream SDK的智能交通管理系统
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Traffic-Management-DeepStream-SDK
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# 基于 DeepStream SDK的智能交通管理系统

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

## 概述

随着城市日益增长，道路上的车辆数量也在增加。由于这一点，交通拥堵也快速增长，这反过来会严重影响国家的发展。这篇WiKi基于AI视觉提出了解决这个问题的方案。可以捕获每个红绿灯已经部署CCTV摄像头的流视频，执行目标检测以检测所有车辆，然后根据车辆拥堵情况来控制交通信号灯。此外，这些数据连同车辆制造商和行人数量一起发送到数据库以供进一步分析。该方案可以通过Jetson等设备实现。

为了实现这个AI视觉应用程序，我们将使用NVIDIA提供的DeepStream SDK在NVIDIA Jetson设备上进行边缘推理。此外，我们将使用 [NVIDIA NGC 模型目录](https://catalog.ngc.nvidia.com/models) 中的预训练模型来快速简便地完成部署过程。NVIDIA NGC模型目录还为许多其他不同应用程序提供了大量预训练模型。

## 什么是 DeepStream SDK?

NVIDIA的 [DeepStream SDK](https://developer.nvidia.com/deepstream-sdk) 提供了一个完整的流分析工具包，用于基于AI的多传感器处理、视频、音频和图像理解。DeepStream为开发者提供了C/C ++、Python等开发语言选择或使用图形合成器进行低代码图形编程的选项，具有较高的开发灵活性。同时，DeepStream还内置了各种硬件加速插件和扩展。

<div align="center"><img width={1000} src="https://developer.nvidia.com/sites/default/files/akamai/ds-workflow.png" /></div>

DeepStream既适用于开发人员，也适用于企业，并为流行的目标检测和分割模型（如最先进的SSD、YOLO、FasterRCNN和MaskRCNN）提供广泛的AI模型支持。你还可以在DeepStream中集成自定义的函数和库。

DeepStream提供了从快速原型到完整生产级解决方案的灵活性。它还允许你选择推理路径。通过与NVIDIA Triton推理服务器的本地集成，你可以在原生框架（如PyTorch和TensorFlow）中部署模型进行推理。使用NVIDIA TensorRT进行高吞吐量推理，并提供多GPU、多流和批处理支持选项，你可以获得最佳性能。

## 硬件支持

DeepStream SDK支持以下硬件：

- Seeed的开发板:

  - 搭载Jetson Nano的reComputer J1010 
  - 搭载Jetson Nano的reComputer J1020
  - 搭载Jetson Xavier NX 8GB的reComputer J2011
  - 搭载Jetson Xavier NX 16GB的reComputer J2012

- Seeed的载板：

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203载板
  - A203（版本2）载板
  - A205载板
  - A206载板

- NVIDIA官方的开发套件：

  - NVIDIA® Jetson Nano开发套件
  - NVIDIA® Jetson Xavier NX开发套件
  - NVIDIA® Jetson AGX Xavier开发套件
  - NVIDIA® Jetson TX2开发套件
  - NVIDIA® Jetson AGX Orin开发套件

- NVIDIA官方的SoMs：

  - NVIDIA® Jetson Nano模块
  - NVIDIA® Jetson Xavier NX模块
  - NVIDIA® Jetson TX2 NX模块
  - NVIDIA® Jetson TX2模块
  - NVIDIA® Jetson AGX Xavier模块

## 先决条件

- 任何一种搭载上述JetPack的Jetson设备
- 键盘和HDMI显示器
- 具有Windows、Linux或Mac操作系统的主机PC
- USB网络摄像头或MIPI CSI摄像头，且该摄像头可以由你的Jetson设备支持

## 入门指南

在本例中，我们将使用 [DashCamNet model](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/dashcamnet) 它作为主要检测器，检测感兴趣的对象，对于每辆检测到的汽车， [VehicleTypeNet model](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehicletypenet) 和 [VehicleMakeNet model](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehiclemakenet) 作为二级分类器，分别确定车辆的类型和制造商。VehicleTypeNet可以对以下车型进行分类：双门轿车、四门轿车、SUV、货车、大型车辆和卡车。而VehicleMakeNet可以对以下车辆进行分类：讴歌、奥迪、宝马、雪佛兰、克莱斯勒、道奇、福特、道朗格、本田、现代、英菲尼迪、Jeep、起亚、雷克萨斯、马自达、奔驰、日产、斯巴鲁、丰田和大众。

> 以下工作流程是在搭载[JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461)的 [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) 上运行测试的。

**步骤 1:**请确保你已正确地在Jetson设备上安装了所有**SDK组件**和**DeepStream SDK**。 (点击 [WiKi](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack/) 阅读安装指南)

**注意:** 建议使用 **NVIDIA SDK Manager** 安装所有SDK组件和DeepStream SDK。

**步骤 2:** 下载配置文件

```sh
git clone https://github.com/NVIDIA-AI-IOT/deepstream_reference_apps.git
cd deepstream_reference_apps/deepstream_app_tao_configs/
sudo cp -a * /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
```

**步骤 3:** 下载模型

```sh
sudo apt install -y wget zip
cd /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
sudo ./download_models.sh
```

**步骤 4:** 打开 **deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt**

```sh
vi deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

**步骤 5:** 将[sink0]下的**sync=1** 修改成 **sync=0**

```sh
[sink0]
enable=1
#Type - 1=FakeSink 2=EglSink 3=File
type=2
sync=0
source-id=0
gpu-id=0
```

**步骤 6:** 将 [primary-gie] 下的 model-engine-file 改为 **../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine**

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

**步骤 7:** 将 [secondary-gie0] 下的 model-engine-file 改为 **../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine**

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

**步骤 8:** 将 [secondary-gie1] 下的 model-engine-file 改为 **../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine**

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

**步骤 9:** 将摄像头、键盘和HDMI显示器连接到Jetson设备上，然后执行以下操作：

```sh
sudo deepstream-app -c deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

现在你可以在连接的HDMI显示器上显示如下的可视化demo：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

如果你想尝试 **/opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/** 下可用的其他示例，你可以按如下方式运行它们：

```sh
sudo deepstream-app -c deepstream_app_source1_$MODEL.txt
```

## 技术支持与项目讨论

非常感谢您选择我们的产品！我们提供不同的支持方式，以确保您在使用我们的产品时拥有尽可能流畅的体验。我们提供多种沟通渠道，以适应不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
