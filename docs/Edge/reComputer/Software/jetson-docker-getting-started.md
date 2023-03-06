---
description: Getting Started with Docker
title: Getting Started with Docker
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson-docker-getting-started
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Getting Started with Docker

> This is a repost of the [blog](https://collabnix.com/getting-started-with-docker-on-seeed-studios-recomputer-powered-by-nvidia-jetson) written by [Ajeet](https://collabnix.com/author/ajeetraina) on [collabnix.com](https://collabnix.com). All credits goes to him.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/1.jpeg" /></div>

Last week, I was lucky enough to get access to the latest Seeed Studio [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) edge AI device for the first time. The reComputer J1020 is powered by Jetson Nano development kit. It is a small, hand-sized powerful computer that brings the power of modern AI for embedded developers. This $259 small device  is built around the NVIDIA Jetson Nano system-on-module and designed for Edge AI applications. This device lets you run multiple neural networks in parallel for applications like image classification, object detection, segmentation, and speech processing. With rich extension modules, industrial peripherals, and thermal management, reComputer J1020 is ready to help you accelerate and scale the next-gen AI product by deploying popular DNN models and ML frameworks to the edge and inferencing with high performance, for tasks like real-time classification and object detection, pose estimation, semantic segmentation, and natural language processing (NLP).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/2.jpg" /></div>

## What’s unique about reComputer J1020?

[Seeed Studio reComputer J1020](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Introduction/#recomputer-j1020) comes with everything you need to start building your AI-based application. Compared to the Jetson Nano development kit supplied by NVIDIA , it doesn’t require flashing the operating system on an SD card from scratch. It comes with the Ubuntu OS already pre-installed on 16 GB eMMC.  The reComputer Pre-installed Jetpack 4.6  includes a board support package (BSP), Linux OS, NVIDIA CUDA, cuDNN, and TensorRT software libraries for deep learning, computer vision, GPU computing, multimedia processing, etc. It supports the entire [Jetson software stack](https://developer.nvidia.com/embedded/develop/software) and various [developer tools](https://wiki.seeedstudio.com/Jetson-AI-developer-tools) for [building fast and robust AI applications](https://wiki.seeedstudio.com/Jetson-AI-developer-tools) provided by Seeed Edge AI partners.

## Few Notable Features includes

- 128 NVIDIA CUDA® cores – deliver 0.5 TFLOPs (FP16) to run AI frameworks and models for applications like image classification, object detection, segmentation, and speech processing.
- Equipped with Armv8 Processor
- Comes with NVIDIA Tegra X1(nvgpu)/Integrated
- Disk size of 16GB
- 4GB Memory
- 64-bit OS type
- Ubuntu 18.04.5
- Seeed Studio reComputer comes with JetPack 4.6 system already installed
- You don’t need to flash SD card, it comes with Operating System already installed
- CUDA 10.2.300 supported
- CUDA Architecture: 5.3
- OpenCV version: 4.1.1

[Learn more about Hardware Layout of reComputer](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Hardware_Layout)

## Components of reComputer

It comes with the following part list:

- NVIDIA Jetson Nano x1
- Seed Reference Carrier Board x1
- Passive Aluminum Heatsink x1
- Aluminium case x1
- 12V power adapter x1
- 4x USB 3.0 Ports
- 2x HDMI Ports
- MIPI-CSI Camera Connector
- Control and UART Header
- 40-pin Expansion Header(GPIO, I2C, Header)
- 260-Pin SODIMM
- MicroUSB
- Gigabit Ethernet Port
- LED Lights

## Hardware Setup

To get started, you will require the below minimal connectors in place:

- Power cable
- Wifi Module / Gigabit Ethernet Cable
- USB Receiver for WiFi Keyboard and Mouse
- HDMI connectivity to your Display

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/3.jpg" /></div>

## Running CUDA deviceQuery

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

## Running Docker on reComputer Jetson Nano

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/4.png" /></div>

[Docker](https://www.docker.com) is a suite of software development tools for creating, sharing and running individual containers. It is a containerization platform that packages your application and all its dependencies together in the form of a docker container to ensure that your application works seamlessly in any environment. Docker Container is a standardized unit which can be created on the fly to deploy a particular application or environment.

Developing any kind of application today is complex. It’s  much more than writing code. There are multitude of programming languages, web frameworks,  complex architectures, and discontinuous interfaces between tools for each lifecycle stage and that creates enormous complexity. Docker simplifies and accelerates your workflow, while giving developers the freedom to innovate with their choice of tools, application stacks, and deployment environments for each project. It enables you to separate your applications from your infrastructure so you can deliver software quickly.

Docker is officially supported on reComputer J1020, a Jetson Nano powered development kit. The kit comes with the latest version of Docker pre-installed by default. You can verify the version of Docker by running the following command:

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

## Installing Docker Compose

reComputer Jetson doesn’t come with Docker compose installed. You can follow the below steps to install Docker Compose in your system:

```sh
export DOCKER_COMPOSE_VERSION=2.6.0
sudo apt-get install libhdf5-dev
sudo apt-get install libssl-dev
sudo pip3 install docker-compose=="${DOCKER_COMPOSE_VERSION}"
apt install python3
apt install python3-pip
pip install docker-compose
```

## Install the latest version of CUDA toolkit

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

## Running Your first Python Container

Let us test drive a simple Arm-based Python Docker image by running the below command:

```sh
sudo docker run arm64v8/python:slim ls
```

## Monitoring CPU, GPU and Memory using JTOP Docker container

In this section, you will see how to set up a system monitoring utility to monitor CPU, RAM and GPU. We will be using the JTOP utility. Jtop is a system monitoring utility that runs on the terminal and sees and controls real time the status of your reComputer Jetson Nano kit, CPU, RAM, GPU status and frequency. You will see how you can containerise the utility. Let’s get started –

First, create a Dockerfile with the following content:

```sh
FROM python:3-alpine

RUN apk update \

    && apk --no-cache add bash \

    && pip install jetson-stats \

    && rm -rf /var/cache/apk/*
```

The first line shows that we have picked up python:3-alpine as a base image. The second line install jetson-stats and dependent packages

## Building the JTOP Docker Image

Use docker build CLI to build the Docker image

```sh
docker build -t ajeetraina/jetson-stats-nano .
```

## Running the JTOP Docker Container

It’s time to run the Docker container by passing –gpus as a parameter and mounting it to jtop socket.

```sh
docker run --rm -it --gpus all -v /run/jtop.sock:/run/jtop.sock ajeetraina/jetson-stats-nano jtop
```

You will see the following results:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/jetson-docker/5.png" /></div>

In our next blog post, we will see how to implement vehicle identification using OpenDatacam running inside a Docker container. Stay tuned!

Do check out the following application example with tutorials!

- [Pedestrian detection by Edge Impulse](https://www.edgeimpulse.com/blog/recognizing-your-blind-spots-pedestrian-detection-system-with-nvidia-jetson-nano)
- [Hard hat detection](https://www.seeedstudio.com/blog/2022/03/03/deploy-hard-hat-detection-for-enforcing-workplace-safety) and build custom PPE detection
- [Pose Estimation with alwaysAI](https://alwaysai.co/blog/using-pose-estimation-on-the-jetson-nano-with-alwaysai)
- [Visual anomaly detection using NVIDIA Deepstream IoT](https://developer.nvidia.com/gtc/2020/video/s22675-vid)
- [Retail store items detection](https://www.seeedstudio.com/blog/2022/06/08/retail-store-items-detection-using-yolov5-roboflow-and-node-red)
- [Wildfire detection](https://github.com/Seeed-Studio/node-red-contrib-ml)
- [Animal detection](https://github.com/Seeed-Studio/node-red-contrib-ml)

Follow Ajeet on:

- [Twitter](https://twitter.com/ajeetsraina)
- [LinkedIn](https://www.linkedin.com/in/ajeetsraina)
- [collabnix](https://collabnix.com/author/ajeetraina)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
