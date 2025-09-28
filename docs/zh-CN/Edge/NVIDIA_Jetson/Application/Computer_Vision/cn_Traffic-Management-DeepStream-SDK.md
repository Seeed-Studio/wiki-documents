---
description: 交通管理 DeepStream SDK
title: 交通管理 DeepStream SDK
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

# 使用 DeepStream SDK 的智能交通管理系统

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

## 概述

随着城市的日益发展，道路上的车辆数量也在不断增加。因此，交通拥堵也快速增长，这反过来会严重影响一个国家的发展。本文档提出了使用 AI 视觉技术解决这一问题的方案。可以捕获每个交通信号灯处已部署的 CCTV 摄像头的流视频，执行目标检测来检测所有车辆，然后根据车辆拥堵情况控制交通信号灯。此外，这些数据可以连同车辆品牌和行人数量一起发送到数据库进行进一步分析。

对于这个 AI 视觉应用，我们将使用 NVIDIA 的 DeepStream SDK，并在 NVIDIA Jetson 设备上进行边缘推理。此外，我们将使用来自 [NVIDIA NGC 模型目录](https://catalog.ngc.nvidia.com/models) 的预训练模型来完成这项任务，以使部署过程快速简便。NVIDIA NGC 模型目录还为许多其他不同的应用提供了大量预训练模型。

## 什么是 DeepStream SDK？

NVIDIA 的 [DeepStream SDK](https://developer.nvidia.com/deepstream-sdk) 提供了一个完整的流分析工具包，用于基于 AI 的多传感器处理、视频、音频和图像理解。DeepStream 通过为开发者提供使用 C/C++、Python 开发的选项，或使用 Graph Composer 进行低代码图形化编程的选项，带来了开发灵活性。DeepStream 附带各种硬件加速插件和扩展。

<div align="center"><img width={1000} src="https://developer.nvidia.com/sites/default/files/akamai/ds-workflow.png" /></div>

DeepStream 专为开发者和企业构建，为流行的目标检测和分割模型（如最先进的 SSD、YOLO、FasterRCNN 和 MaskRCNN）提供广泛的 AI 模型支持。您还可以在 DeepStream 中集成自定义函数和库。

Deepstream 提供从快速原型设计到完整生产级解决方案的灵活性。它还允许您选择推理路径。通过与 NVIDIA Triton 推理服务器的原生集成，您可以在 PyTorch 和 TensorFlow 等原生框架中部署模型进行推理。使用 NVIDIA TensorRT 进行高吞吐量推理，支持多 GPU、多流和批处理选项，您可以实现最佳性能。

## 支持的硬件

DeepStream SDK 支持以下硬件：

- Seeed 套件：

  - 基于 Jetson Nano 构建的 reComputer J1010
  - 基于 Jetson Nano 构建的 reComputer J1020
  - 基于 Jetson Xavier NX 8GB 构建的 reComputer J2011
  - 基于 Jetson Xavier NX 16GB 构建的 reComputer J2012

- Seeed 载板：

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203 载板
  - A203 (版本 2) 载板
  - A205 载板
  - A206 载板

- NVIDIA 官方开发套件：

  - NVIDIA® Jetson Nano 开发者套件
  - NVIDIA® Jetson Xavier NX 开发者套件
  - NVIDIA® Jetson AGX Xavier 开发者套件
  - NVIDIA® Jetson TX2 开发者套件
  - NVIDIA® Jetson AGX Orin 开发者套件

- NVIDIA 官方 SoM：
  
  - NVIDIA® Jetson Nano 模块
  - NVIDIA® Jetson Xavier NX 模块
  - NVIDIA® Jetson TX2 NX 模块
  - NVIDIA® Jetson TX2 模块
  - NVIDIA® Jetson AGX Xavier 模块

## 前提条件

- 运行 JetPack 的上述任一 Jetson 设备
- 键盘和 HDMI 显示器
- 运行 Windows、Linux 或 Mac 的主机 PC
- USB 网络摄像头或您的 Jetson 设备支持的 MIPI CSI 摄像头

## 入门指南

在这里我们将使用 [DashCamNet 模型](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/dashcamnet)作为主检测器，检测感兴趣的对象，对于每个检测到的汽车，[VehicleTypeNet 模型](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehicletypenet)和 [VehicleMakeNet 模型](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehiclemakenet)作为二级分类器，分别确定汽车的类型和品牌。VehicleTypeNet 分类以下类型：轿跑车、轿车、SUV、面包车、大型车辆和卡车。而 VehicleMakeNet 分类以下汽车品牌：讴歌、奥迪、宝马、雪佛兰、克莱斯勒、道奇、福特、GMC、本田、现代、英菲尼迪、吉普、起亚、雷克萨斯、马自达、奔驰、日产、斯巴鲁、丰田和大众。

> 以下工作流程在运行 [JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461) 的 [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) 上进行了测试

**步骤 1：** 确保您已在 Jetson 设备上正确安装了所有 **SDK 组件**和 **DeepStream SDK**。（安装参考请查看[此 wiki](https://wiki.seeedstudio.com/cn/reComputer_J1020_A206_Flash_JetPack/)）

**注意：** 建议使用 **NVIDIA SDK Manager** 来安装所有 SDK 组件和 DeepStream SDK

**步骤 2：** 下载配置文件

```sh
git clone https://github.com/NVIDIA-AI-IOT/deepstream_reference_apps.git
cd deepstream_reference_apps/deepstream_app_tao_configs/
sudo cp -a * /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
```

**步骤 3：** 下载模型

```sh
sudo apt install -y wget zip
cd /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/
sudo ./download_models.sh
```

**步骤 4:** 打开 **deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt**

```sh
vi deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

**步骤 5：** 将 [sink0] 下的 **sync=1** 改为 **sync=0**

```sh
[sink0]
enable=1
#Type - 1=FakeSink 2=EglSink 3=File
type=2
sync=0
source-id=0
gpu-id=0
```

**步骤 6：** 在 [primary-gie] 下，将 model-engine-file 更改为 **../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine**

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

**步骤 7：** 在 [secondary-gie0] 下，将 model-engine-file 更改为 **../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine**

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

**步骤 8：** 在 [secondary-gie1] 下，将 model-engine-file 更改为 **../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine**

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

**步骤 9:** 将摄像头、键盘、HDMI显示器连接到Jetson设备并执行以下操作

```sh
sudo deepstream-app -c deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt
```

现在您可以在连接的 HDMI 显示器上看到演示效果，如下所示

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" /></div>

如果您想尝试 **/opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/** 目录下的其他可用演示，您可以按如下方式简单运行它们

```sh
sudo deepstream-app -c deepstream_app_source1_$MODEL.txt
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
