---
description: Frigate 是一个开源的 NVR（网络视频录像机），具有针对 IP 摄像头的实时对象检测功能。在本指南中，我们将逐步介绍如何在 NVIDIA Jetson 设备上部署 Frigate。
title: 在 Jetson 上部署 Frigate
image: https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png
slug: /cn/deploy_frigate_on_jetson
last_update:
  date: 08/29/2024
  author: kourosh
---

# 在 reComputer（NVIDIA Jetson）设备上部署 Frigate

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png)

Frigate 是一个开源的 NVR（网络视频录像机），具有针对 IP 摄像头的实时对象检测功能。在本指南中，我们将逐步介绍如何在 NVIDIA Jetson 设备上部署 Frigate。NVIDIA Jetson 是一个边缘 AI 平台，能够高效部署 AI 工作负载。将 Frigate 与 Jetson 结合使用，可以利用硬件加速的机器学习来高效处理视频流并检测对象。

项目目标：

- 在 NVIDIA Jetson 设备上设置 Frigate 环境，以实现高效的视频处理。
- 在来自多个 IP 摄像头的视频流上启用实时对象检测。

在本项目结束时，用户将拥有一个完全可操作的监控系统，该系统可以实时检测对象、发送警报并与其他智能设备集成。此解决方案不仅增强了安全性，还确保处理在本地完成，保护隐私并减少对云服务的依赖。

<p style={{textAlign: 'center'}}><img src="https://docs.frigate.video/assets/images/media_browser-min-1f8a7c629d1bdbee1c78f99a97a0219a.png" alt="pir" width={900} height="auto" /></p>

## 硬件准备

要在 NVIDIA Jetson 上使用 IP 摄像头成功部署 Frigate，您需要准备以下硬件组件。本节概述了必要的设备并提供简要描述，以帮助您开始使用。

### 1. NVIDIA Jetson 设备：

NVIDIA Jetson 设备作为运行 Frigate 和执行实时对象检测的中央处理单元。根据您的需求和预算，您可以从几个型号中选择：

- Jetson Nano：一个经济实惠的选择，具有足够的处理能力，适用于少数摄像头的小规模监控设置。
- Jetson Xavier NX：提供更多功率，可以处理更大规模的部署或更复杂的对象检测任务。
- Jetson Orin 系列：最强大的选择，适用于高性能应用和多摄像头设置。

:::info
**所需配件**：

- 适合 Jetson 型号的电源。
- 至少 32GB 容量的 MicroSD 卡（用于 Jetson Nano 和 Orin）或 eMMC（用于 Jetson Xavier NX/AGX Orin）。
- 冷却解决方案（例如风扇或散热器）以确保最佳工作温度。
用于初始设置的显示器、键盘和鼠标。

:::

### 2. IP 摄像头：

IP 摄像头提供高质量的视频源，这对于有效的对象检测至关重要。您至少需要一个与 RTSP（实时流协议）兼容的大华 IP 摄像头，这允许 Frigate 接收视频流。

### 3. 所需硬件总结：

- Jetson 设备：Jetson Nano、Xavier NX 或 Orin 系列
- IP 摄像头：与 RTSP 兼容
- MicroSD 卡/eMMC：至少 32GB（用于 Jetson 设置）
- 电源和冷却：用于 Jetson 设备
- 网络设备：以太网电缆
- 可选：外部存储、PoE 注入器/交换机

## 软件准备

设置软件环境是在您的 NVIDIA Jetson 设备上部署 Frigate 的关键步骤。本节概述了必要的软件组件和安装步骤，以确保您的系统准备好运行 Frigate 并处理来自 IP 摄像头的视频流。

### 1. 操作系统(Jetpack)

确保您的 NVIDIA Jetson 设备运行最新版本的 NVIDIA JetPack SDK。JetPack 提供基于 Linux 的操作系统以及 AI 开发所需的基本库和工具。

- 下载 JetPack SDK：访问 NVIDIA JetPack 下载页面，下载与您的 Jetson 设备兼容的最新 JetPack SDK（我使用的是 Jetpack 5.1.3 配合 Xavier NX）。

- 刷写 Jetson 设备：使用 SDK Manager 将 JetPack 镜像刷写到 Jetson 设备的 SD 卡（适用于 Jetson Nano）或 eMMC（适用于 Jetson Xavier NX/AGX Orin）。

对于 Seeed Jetson 驱动设备的刷写指南，请参考以下链接：

- [reComputer J1010 | J101](https://wiki.seeedstudio.com/cn/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/cn/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/cn/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/cn/reComputer_J4012_Flash_Jetpack)
- [A203 载板](https://wiki.seeedstudio.com/cn/reComputer_A203_Flash_System)
- [A205 载板](https://wiki.seeedstudio.com/cn/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 套件](https://wiki.seeedstudio.com/cn/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 套件](https://wiki.seeedstudio.com/cn/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

### 2. 系统更新和依赖项：

设置操作系统后，执行系统更新并安装所需的依赖项。

:::info
**更新系统：在 Jetson 设备上打开终端并运行：**

```
sudo apt-get update && sudo apt-get upgrade
```

**安装额外依赖项：安装在 Jetson 上构建和运行软件所需的常用依赖项：**

```
sudo apt-get install -y \
python3-pip \
python3-dev \
python3-venv \
build-essential \
libssl-dev \
libffi-dev \
git
```

:::

### 2. Docker 安装：

Frigate 作为 Docker 容器运行。使用以下步骤在 Jetson 设备上安装 Docker：

##### 1. 安装 docker：

* 安装 Docker 的依赖项：

```
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
```

- 添加 Docker 的官方 GPG 密钥：

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

- Add Docker repository:

```
sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

- install docker:

```
sudo apt-get update
sudo apt-get install -y docker-ce
```

##### 2. Docker Compose 安装：

Docker Compose 用于定义和运行多容器 Docker 应用程序，例如 Frigate，并处理 yaml 文件来运行 docker 容器。

- 安装 Docker Compose：使用以下命令安装 Docker Compose：

```
sudo apt-get install -y python3-pip
sudo pip3 install docker-compose
```

- 验证 Docker Compose 安装：

```
docker-compose --version
```

##### 3. NVIDIA Container Toolkit

要安装 Nvidia 容器工具包，您可以访问参考资料中的链接。根据您的系统，您可以按照以下安装指南进行操作。您需要安装它才能在 docker 容器中使用 GPU。

##### 4. Frigate 配置：

* 设置配置目录：创建一个目录来存放 Frigate 配置文件：

```
mkdir ~/frigate
cd ~/frigate
```

- 创建配置文件：您需要在 ~/frigate 目录中创建 docker-compose.yml 和 config.yml 文件。这些文件将定义 Frigate 的部署方式以及它如何连接到您的 IP 摄像头。docker-compose.yml 定义了 Frigate 的 Docker 服务，config.yml：指定 Frigate 设置，如摄像头流、检测设置和 MQTT 集成。

通过完成这些步骤，您的 NVIDIA Jetson 设备将完全准备好运行 Frigate，您将准备好继续部署 Frigate 并集成您的 IP 摄像头进行实时物体检测。

## 入门指南

现在您已经准备好硬件并设置好软件环境，是时候在您的 NVIDIA Jetson 设备上部署 Frigate 并将其连接到您的大华 IP 摄像头了。按照以下步骤开始您的部署：

### 1. 拉取 Frigate docker 镜像：

在 Frigate 网站中，使用 compose 在 Docker 中运行是推荐的安装方法。首先，您需要拉取针对 TensorRT 优化的 Frigate Docker 镜像。此镜像专门设计用于利用 NVIDIA Jetson 设备的 GPU 功能进行高效的物体检测。

这里我们在 JP5.1.3 上工作，拉取请求是：

```
docker pull ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

当前稳定版本的官方 docker 镜像标签有：

- stable : 适用于 amd64 的标准 Frigate 构建版本 & 适用于 arm64 的 RPi 优化 Frigate 构建版本
- stable-standard-arm64 : 适用于 arm64 的标准 Frigate 构建版本
- stable-tensorrt : 专为运行 nvidia GPU 的 amd64 设备构建的 Frigate 版本

当前稳定版本的社区支持 docker 镜像标签有：

- stable-tensorrt-jp5 : 为运行 Jetpack 5 的 nvidia Jetson 设备优化的 Frigate 构建版本
- stable-tensorrt-jp4 : 为运行 Jetpack 4.6 的 nvidia Jetson 设备优化的 Frigate 构建版本
- stable-rk : 适用于搭载 Rockchip SoC 的单板计算机的 Frigate 构建版本
- stable-rocm : 适用于 AMD GPU 和集成显卡的 Frigate 构建版本

您可以根据您的部署情况使用这些标签中的任何一个。但在这里我们使用的是 Jetson 和 tensorrt 以及 Jetpack 5.1.3，所以我们需要拉取 'stable-tensorrt-jp5'。这个 docker 镜像包含了运行 Frigate 所需的所有软件包，无需安装 tensorrt 等其他组件。

### 2. 准备 Frigate 配置文件：

在开始部署之前，您需要配置 Frigate 以适配您的特定设置，包括摄像头流和检测设置。

config.yml 文件：此文件将包含 Frigate 的配置，包括摄像头设置和检测参数。使用文本编辑器创建一个名为 config.yml 的新文件，并添加以下内容。此配置在 NVIDIA Jetson 设备上设置 Frigate，使用 TensorRT 从大华 IP 摄像头进行高效的目标检测。

```
mqtt:
  enabled: False

cameras:
  dummy_camera: # <--- this will be changed to your actual camera later
    enabled: True
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: rtsp://admin:admin1234@192.168.1.108:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - detect

birdseye:

  enabled: True
  mode: objects
         
detectors:
  tensorrt:
    type: tensorrt
    device: 0 #This is the default, select the first GPU

model:
  path: /config/model_cache/tensorrt/yolov7-320.trt
  input_tensor: nchw
  input_pixel_format: rgb
  width: 320
  height: 320

detect:
  fps : 20
  width: 1280
  height: 720
  
objects:
  track:
    - person 
```

关键点包括：

**MQTT 已禁用**：MQTT 集成已关闭，因此 Frigate 不会通过 MQTT 发送检测事件。

**摄像头设置**：启用了一个名为 dummy_camera 的占位符摄像头，通过 FFmpeg 使用硬件加速处理 H.264 视频流。它使用 RTSP URL 连接到大华 IP 摄像头进行检测。

**鸟瞰视图已启用**：提供概览显示，仅显示来自所有摄像头源的检测对象。

**TensorRT 检测器**：在主 GPU 上使用 TensorRT 进行推理，优化检测速度和效率。

**模型详情**：指定用于对象检测的 TensorRT 优化 YOLOv7 模型，输入尺寸为 320x320，RGB 格式。

**检测设置**：以每秒 20 帧的速度处理视频，检测分辨率为 1280x720。
对象跟踪：配置为仅跟踪人员，减少计算负载并专注于相关检测。

### 2. 准备 docker-compose.yml 文件：

此文件定义了 Frigate 服务以及如何使用 Docker Compose 运行它。在同一目录中创建一个名为 docker-compose.yml 的新文件，内容如下：

```
services:
  frigate:
    privileged: true
    environment:
      - YOLO_MODELS=yolov7-320
      - USE_FP16=false
    container_name: frigate
    runtime: nvidia 
    #devices:
      #- /dev/video0:/dev/video0 
    volumes:
      - /home/jetson/frigate/config:/config
      - /home/jetson/frigate/storage:/media/frigate
      #- type: tmpfs # Optional: 1GB of memory, reduces SSD/SD Card wear
        #target: /tmp/cache
        #tmpfs:
          #size: 1000000000
    ports:
      - "5000:5000"
      - "8554:8554"
    image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

提供的代码片段似乎是 Docker Compose 设置中 Frigate 服务的配置。Frigate 是一个开源的 AI 驱动视频监控系统，可用于实时检测和跟踪对象。

以下是配置的详细说明：

1. **services**：此部分定义了将成为 Docker Compose 设置一部分的服务。

2. **frigate**：这是 Frigate 容器的服务名称。

3. **privileged: true**：这为 Frigate 容器授予特权访问权限，通常需要此权限来访问摄像头等硬件设备。

4. **environment**：此部分为 Frigate 容器设置两个环境变量：
   - `YOLO_MODELS=yolov7-320`：指定用于对象检测的 YOLO（You Only Look Once）模型。
   - `USE_FP16=false`：禁用 16 位浮点精度的使用，这可以在某些硬件上提高性能。

5. **container_name: frigate**：设置 Frigate 容器的名称。

6. **runtime: nvidia**：指定用于 Frigate 容器的运行时环境，在这种情况下是用于 GPU 加速处理的 NVIDIA 运行时。

7. **volumes**：挂载以下目录：
   - `/home/jetson/frigate/config:/config`：将本地配置目录挂载到容器的 `/config` 目录。
   - `/home/jetson/frigate/storage:/media/frigate`：将本地存储目录挂载到容器的 `/media/frigate` 目录。
   - 注释掉的行显示了使用 tmpfs（内存文件系统）进行缓存的可选配置，这有助于减少存储设备的磨损。

8. **ports**：暴露以下端口：
   - `5000:5000`：将容器的端口 5000 映射到主机的端口 5000。
   - `8554:8554`：将容器的端口 8554 映射到主机的端口 8554。

9. **image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5**：指定用于 Frigate 容器的 Docker 镜像，在这种情况下是来自 GitHub Container Registry 上 `blakeblackshear/frigate` 仓库的 `stable-tensorrt-jp5` 标签。

此配置在 Docker Compose 环境中设置了一个 Frigate 服务，提供了一种运行 Frigate 视频监控系统的方式，并支持自定义设置和硬件加速。

### 3. 使用 Docker Compose 部署 Frigate：

设置好配置文件并拉取 Docker 镜像后，您现在可以使用 Docker Compose 部署 Frigate。

1. 导航到 Frigate 目录：确保您在创建配置文件的目录中：

```
cd ~/frigate
```

2. 使用 Docker Compose 启动 Frigate：运行以下命令来启动 Frigate：

```
docker-compose up -d
```

此命令以分离模式启动 Frigate 服务。Docker 容器现在将在后台运行。

3. 验证 Frigate 是否正在运行：通过使用以下命令检查 Frigate 容器是否正在运行：

```
docker ps
```

4. 运行 docker 后，您可以看到 Tensorrt 日志，这意味着 Frigate 正在 GPU 上运行。

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/1.png)

### 4. 访问 Frigate Web 界面：

一旦 Frigate 启动并运行，您可以访问 web 界面来监控视频流并配置设置：

1. 打开 Web 浏览器：在连接到与您的 Jetson 设备相同网络的设备上，打开 web 浏览器。
2. 输入 Jetson 设备的 IP 地址：在地址栏中，输入您的 Jetson 设备的 IP 地址，后跟端口 5000（例如，`http://jetson-ip-address:5000` 或 `http://127.0.0.1:5000`）。
3. 查看仪表板：Frigate 仪表板将显示来自连接的大华 IP 摄像头的实时视频流、检测事件和配置选项。
4. 现在您可以通过 jtop 或在 frigate 系统中检查 Jetson 是否正在使用 GPU 进行检测。下面我们可以看到检测部分每帧运行约 33ms。

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/2.png)

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/4.png)

## 故障排除

在硬件连接、软件调试或上传过程中可能会遇到一些问题，特别是在运行 docker 时。您可以使用 docker log 来解决错误。

```
docker logs frigate
```

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

## 参考资料

1. [Frigate 网站](https://frigate.video/)
2. [Frigate Github](https://github.com/blakeblackshear/frigate)
3. [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
