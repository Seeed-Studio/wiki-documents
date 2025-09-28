---
description: Docker 入门指南
title: Docker 入门指南
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/jetson-docker-getting-started
last_update:
  date: 01/04/2023
  author: w0x7ce
---

# Docker 入门指南

> 这是 [Ajeet](https://collabnix.com/author/ajeetraina) 在 [collabnix.com](https://collabnix.com) 上撰写的[博客](https://collabnix.com/getting-started-with-docker-on-seeed-studios-recomputer-powered-by-nvidia-jetson)的转载。所有功劳归于他。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/1.jpeg" /></div>

上周，我很幸运地第一次接触到了 Seeed Studio 最新的 [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) 边缘 AI 设备。reComputer J1020 由 Jetson Nano 开发套件驱动。它是一台小巧的、手掌大小的强大计算机，为嵌入式开发者带来了现代 AI 的力量。这台售价 259 美元的小型设备围绕 NVIDIA Jetson Nano 系统模块构建，专为边缘 AI 应用而设计。该设备让您能够并行运行多个神经网络，用于图像分类、目标检测、分割和语音处理等应用。凭借丰富的扩展模块、工业外设和热管理，reComputer J1020 已准备好帮助您通过将流行的 DNN 模型和 ML 框架部署到边缘并进行高性能推理，来加速和扩展下一代 AI 产品，用于实时分类和目标检测、姿态估计、语义分割和自然语言处理 (NLP) 等任务。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/2.jpg" /></div>

## reComputer J1020 的独特之处是什么？

[Seeed Studio reComputer J1020](https://wiki.seeedstudio.com/cn/reComputer_Jetson_Series_Introduction/#recomputer-j1020) 提供了开始构建基于 AI 应用程序所需的一切。与 NVIDIA 提供的 Jetson Nano 开发套件相比，它不需要从头开始在 SD 卡上刷写操作系统。它在 16 GB eMMC 上预装了 Ubuntu 操作系统。reComputer 预装的 Jetpack 4.6 包括板级支持包 (BSP)、Linux 操作系统、NVIDIA CUDA、cuDNN 和用于深度学习、计算机视觉、GPU 计算、多媒体处理等的 TensorRT 软件库。它支持整个 [Jetson 软件栈](https://developer.nvidia.com/embedded/develop/software)和 Seeed 边缘 AI 合作伙伴提供的各种[开发者工具](https://wiki.seeedstudio.com/cn/Jetson-AI-developer-tools)，用于[构建快速且强大的 AI 应用程序](https://wiki.seeedstudio.com/cn/Jetson-AI-developer-tools)。

## 几个值得注意的特性包括

- 128 个 NVIDIA CUDA® 核心 – 提供 0.5 TFLOPs (FP16) 来运行 AI 框架和模型，用于图像分类、目标检测、分割和语音处理等应用。
- 配备 Armv8 处理器
- 配备 NVIDIA Tegra X1(nvgpu)/集成
- 磁盘大小为 16GB
- 4GB 内存
- 64 位操作系统类型
- Ubuntu 18.04.5
- Seeed Studio reComputer 预装了 JetPack 4.6 系统
- 您无需刷写 SD 卡，它预装了操作系统
- 支持 CUDA 10.2.300
- CUDA 架构：5.3
- OpenCV 版本：4.1.1

[了解更多关于 reComputer 的硬件布局](https://wiki.seeedstudio.com/cn/reComputer_Jetson_Series_Hardware_Layout)

## reComputer 的组件

它包含以下部件清单：

- NVIDIA Jetson Nano x1
- Seed 参考载板 x1
- 被动式铝制散热器 x1
- 铝制外壳 x1
- 12V 电源适配器 x1
- 4x USB 3.0 端口
- 2x HDMI 端口
- MIPI-CSI 摄像头连接器
- 控制和 UART 接头
- 40 针扩展接头(GPIO, I2C, Header)
- 260 针 SODIMM
- MicroUSB
- 千兆以太网端口
- LED 指示灯

## 硬件设置

要开始使用，您需要连接以下最基本的连接器：

- 电源线
- WiFi 模块 / 千兆以太网线
- WiFi 键盘和鼠标的 USB 接收器
- HDMI 连接到您的显示器

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/3.jpg" /></div>

## 运行 CUDA deviceQuery

```sh
cd /usr/local/cuda/samples/1_Utilities/deviceQuery
sudo make 
./deviceQuery
```

Here’s the results:

```sh
./deviceQuery Starting...

 CUDA Device Query (Runtime API) version (CUDART static linking
Detected 1 CUDA Capable device(s)

Device 0: "NVIDIA Tegra X1"
  CUDA Driver Version / Runtime Version          10.2 / 10.2
  CUDA Capability Major/Minor version number:    5.3
  Total amount of global memory:                 3956 MBytes (4148273152 bytes)
  ( 1) Multiprocessors, (128) CUDA Cores/MP:     128 CUDA Cores
  GPU Max Clock rate:                            922 MHz (0.92 GHz)
  Memory Clock rate:                             13 Mhz
  Memory Bus Width:                              64-bit
  L2 Cache Size:                                 262144 bytes
  Maximum Texture Dimension Size (x,y,z)         1D=(65536), 2D=(65536, 65536), 3D=(4096, 4096, 4096)
  Maximum Layered 1D Texture Size, (num) layers  1D=(16384), 2048 layers
  Maximum Layered 2D Texture Size, (num) layers  2D=(16384, 16384), 2048 layers
  Total amount of constant memory:               65536 bytes
  Total amount of shared memory per block:       49152 bytes
  Total number of registers available per block: 32768
  Warp size:                                     32
  Maximum number of threads per multiprocessor:  2048
  Maximum number of threads per block:           1024
  Max dimension size of a thread block (x,y,z): (1024, 1024, 64)
  Max dimension size of a grid size    (x,y,z): (2147483647, 65535, 65535)
  Maximum memory pitch:                          2147483647 bytes
  Texture alignment:                             512 bytes
  Concurrent copy and kernel execution:          Yes with 1 copy engine(s)
  Run time limit on kernels:                     Yes
  Integrated GPU sharing Host Memory:            Yes
  Support host page-locked memory mapping:       Yes
  Alignment requirement for Surfaces:            Yes
  Device has ECC support:                        Disabled
  Device supports Unified Addressing (UVA):      Yes
  Device supports Compute Preemption:            No
  Supports Cooperative Kernel Launch:            No
  Supports MultiDevice Co-op Kernel Launch:      No
  Device PCI Domain ID / Bus ID / location ID:   0 / 0 / 0
  Compute Mode:
     < Default (multiple host threads can use ::cudaSetDevice() with device simultaneously) >
deviceQuery, CUDA Driver = CUDART, CUDA Driver Version = 10.2, CUDA Runtime Version = 10.2, NumDevs = 1

Result = PASS
```

## 在 reComputer Jetson Nano 上运行 Docker

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/4.png" /></div>

[Docker](https://www.docker.com) 是一套用于创建、共享和运行独立容器的软件开发工具。它是一个容器化平台，将您的应用程序及其所有依赖项打包在一个 docker 容器中，以确保您的应用程序在任何环境中都能无缝运行。Docker 容器是一个标准化单元，可以即时创建以部署特定的应用程序或环境。

如今开发任何类型的应用程序都很复杂。这远不止是编写代码。有众多的编程语言、Web 框架、复杂的架构，以及每个生命周期阶段工具之间不连续的接口，这造成了巨大的复杂性。Docker 简化并加速了您的工作流程，同时让开发人员能够自由地为每个项目选择工具、应用程序堆栈和部署环境进行创新。它使您能够将应用程序与基础设施分离，从而快速交付软件。

Docker 在 reComputer J1020（一个由 Jetson Nano 驱动的开发套件）上得到官方支持。该套件默认预装了最新版本的 Docker。您可以通过运行以下命令来验证 Docker 的版本：

```sh
sudo docker version

Client: Docker Engine - Community
 Cloud integration: v1.0.25
 Version:           20.10.17
 API version:       1.41
 Go version:        go1.17.11
 Git commit:        100c701
 Built:             Mon Jun  6 23:02:19 2022
 OS/Arch:           linux/arm64
 Context:           default
 Experimental:      true


Server: Docker Engine - Community
 Engine:
  Version:          20.10.17
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.17.11
  Git commit:       a89b842
  Built:            Mon Jun  6 23:00:46 2022
  OS/Arch:          linux/arm64
  Experimental:     false
 containerd:
  Version:          1.6.6
  GitCommit:        10c12954828e7c7c9b6e0ea9b0c02b01407d3ae1
 runc:
  Version:          1.1.2
  GitCommit:        v1.1.2-0-ga916309
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

## 安装 Docker Compose

reComputer Jetson 没有预装 Docker compose。您可以按照以下步骤在系统中安装 Docker Compose：

```sh
export DOCKER_COMPOSE_VERSION=2.6.0
sudo apt-get install libhdf5-dev
sudo apt-get install libssl-dev
sudo pip3 install docker-compose=="${DOCKER_COMPOSE_VERSION}"
apt install python3
apt install python3-pip
pip install docker-compose
```
## 安装最新版本的 CUDA 工具包

```sh
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/sbsa/cuda-ubuntu1804.pin
sudo mv cuda-ubuntu1804.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/11.3.1/local_installers/cuda-repo-ubuntu1804-11-3-local_11.3.1-465.19.01-1_arm64.deb
sudo dpkg -i cuda-repo-ubuntu1804-11-3-local_11.3.1-465.19.01-1_arm64.deb
sudo apt-key add /var/cuda-repo-ubuntu1804-11-3-local/7fa2af80.pub
sudo apt-get update
sudo apt-get -y install cuda
```

## Verify Docker runtime

```sh
docker info | grep runtime

 Runtimes: nvidia runc io.containerd.runc.v2 io.containerd.runtime.v1.linuxs
```

## 运行您的第一个 Python 容器

让我们通过运行以下命令来测试一个简单的基于 Arm 的 Python Docker 镜像：

```sh
sudo docker run arm64v8/python:slim ls
```

## 使用 JTOP Docker 容器监控 CPU、GPU 和内存

在本节中，您将了解如何设置系统监控实用程序来监控 CPU、RAM 和 GPU。我们将使用 JTOP 实用程序。Jtop 是一个在终端上运行的系统监控实用程序，可以实时查看和控制您的 reComputer Jetson Nano 套件、CPU、RAM、GPU 状态和频率。您将了解如何将该实用程序容器化。让我们开始吧 –

首先，创建一个包含以下内容的 Dockerfile：

```sh
FROM python:3-alpine

RUN apk update \

    && apk --no-cache add bash \

    && pip install jetson-stats \

    && rm -rf /var/cache/apk/*
```

第一行显示我们选择了 python:3-alpine 作为基础镜像。第二行安装了 jetson-stats 和依赖包

## 构建 JTOP Docker 镜像

使用 docker build CLI 来构建 Docker 镜像

```sh
docker build -t ajeetraina/jetson-stats-nano .
```

## 运行 JTOP Docker 容器

现在是时候通过传递 –gpus 作为参数并将其挂载到 jtop socket 来运行 Docker 容器了。

```sh
docker run --rm -it --gpus all -v /run/jtop.sock:/run/jtop.sock ajeetraina/jetson-stats-nano jtop
```

您将看到以下结果：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/jetson-docker/5.png" /></div>

在我们的下一篇博客文章中，我们将看到如何使用运行在 Docker 容器内的 OpenDatacam 来实现车辆识别。敬请期待！

请查看以下带有教程的应用示例！

- [Edge Impulse 行人检测](https://www.edgeimpulse.com/blog/recognizing-your-blind-spots-pedestrian-detection-system-with-nvidia-jetson-nano)
- [安全帽检测](https://www.seeedstudio.com/blog/2022/03/03/deploy-hard-hat-detection-for-enforcing-workplace-safety) 并构建自定义 PPE 检测
- [使用 alwaysAI 进行姿态估计](https://alwaysai.co/blog/using-pose-estimation-on-the-jetson-nano-with-alwaysai)
- [使用 NVIDIA Deepstream IoT 进行视觉异常检测](https://developer.nvidia.com/gtc/2020/video/s22675-vid)
- [零售店商品检测](https://www.seeedstudio.com/blog/2022/06/08/retail-store-items-detection-using-yolov5-roboflow-and-node-red)
- [野火检测](https://github.com/Seeed-Studio/node-red-contrib-ml)
- [动物检测](https://github.com/Seeed-Studio/node-red-contrib-ml)

关注 Ajeet：

- [Twitter](https://twitter.com/ajeetsraina)
- [LinkedIn](https://www.linkedin.com/in/ajeetsraina)
- [collabnix](https://collabnix.com/author/ajeetraina)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

