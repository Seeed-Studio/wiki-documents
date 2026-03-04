---
description: 本 wiki 提供了在 Jetson AGX Orin 设备上部署 Depth Anything V3 的全面分步指南。它涵盖了环境设置、关键依赖项安装（CUDA、ROS2、TensorRT）、模型转换为 TensorRT 引擎，以及与 USB 摄像头集成的实时深度估计。该指南重点介绍了 Depth Anything V3 从单个 RGB 图像生成高质量深度图的能力，计算开销最小，使其非常适合边缘设备上的机器人、自主导航和 3D 感知应用。
title: 在 Jetson AGX Orin 上部署 Depth Anything V3
keywords:
- Depth Anything V3
- Jetson AGX Orin
- 深度估计
- TensorRT
- ROS2
- 计算机视觉
- 机器人
- 3D 感知
- USB 摄像头
- 边缘 AI
image: https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/da3_head.webp
slug: /deploy_depth_anything_v3_jetson_agx_orin
last_update:
  date: 2026-01-09
  author: Zibo
---

<div align="center">
  <img width="600" src="https://github.com/ByteDance-Seed/Depth-Anything-3/raw/main/assets/images/demo320-2.gif"/>
</div>

## 简介

<div style={{ textAlign: "justify" }}>
[Depth Anything V3](https://github.com/ByteDance-Seed/depth-anything-3) 是一个最先进的单目深度估计模型，通过从单个 RGB 图像生成高质量深度图来革新 3D 感知。与需要专用硬件或多摄像头输入的传统深度估计方法不同，Depth Anything V3 利用先进的深度学习技术，仅使用标准 2D 图像来预测准确的深度信息。这使其对于硬件约束和计算效率是关键考虑因素的边缘 AI 应用特别有价值。本 wiki 将指导您在 Jetson AGX Orin 上部署 Depth Anything V3，并集成 ROS2 用于实时机器人应用。
</div>

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

## 先决条件

- **[reComputer Mini J501 载板](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)**（Jetson AGX Orin），配备 JetPack 6.2
- USB 摄像头
- 已安装 [ROS2 Humble](https://wiki.seeedstudio.com/cn/install_ros2_humble/) 环境


<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/demo.gif"/>
</div>


## 技术亮点

- **高质量单目深度估计**：Depth Anything V3 从单个 RGB 图像生成准确的深度图，无需专用深度传感器或立体摄像头设置。

- **针对边缘部署优化**：该模型专为在 Jetson AGX Orin 等边缘设备上高效推理而设计，通过 TensorRT 优化实现最大性能。

- **实时处理**：能够实时处理高分辨率图像，适用于自主导航、障碍物避免和机器人操作任务。

- **ROS2 集成**：提供原生 ROS2 Humble 支持，具有深度图和点云发布功能，可无缝集成到机器人系统中。

- **灵活的输入支持**：支持各种输入源，包括 USB 摄像头、ROS 图像话题和预录制视频流。

## 环境设置

**步骤 1.** 安装依赖项

```bash
sudo apt update
sudo apt install -y \
    build-essential \
    cmake \
    git \
    libopencv-dev \
    python3-pip \
    python3-colcon-common-extensions \
    v4l-utils
```

**步骤 2.** 安装 Python 依赖项

```bash
pip3 install numpy opencv-python
```

**步骤 3.** 配置 CUDA 环境变量

```bash
# Add CUDA environment variables to .bashrc
echo '
# CUDA Environment
export CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export CUDACXX=$CUDA_HOME/bin/nvcc
' >> ~/.bashrc

# Reload shell configuration
source ~/.bashrc

# Verify CUDA installation
nvcc --version
```
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/nvcc.png"/>
</div>


**步骤 4.** 安装 ROS2 USB 摄像头包

```bash
# Install USB camera driver for ROS2
sudo apt install -y ros-humble-usb-cam

# Install additional ROS2 dependencies
sudo apt install -y ros-humble-cv-bridge
sudo apt install -y ros-humble-image-transport
sudo apt install -y ros-humble-image-geometry
sudo apt install -y ros-humble-cv-bridge ros-humble-image-transport ros-humble-rviz2

```

**步骤 5.** 设置 Depth Anything V3 ROS2 环境

```bash
# Clone the repository
git clone https://github.com/zibochen6/ros2-depth-anything-v3-trt.git

# Navigate to the project directory
cd ros2-depth-anything-v3-trt
```

**步骤 6.** 构建 ROS2 包

```bash
# Build the depth_anything_v3 package with Release configuration
colcon build --packages-select depth_anything_v3 --cmake-args -DCMAKE_BUILD_TYPE=Release

# Source the workspace
source install/setup.bash
```

**步骤 7.** 生成 TensorRT 引擎

:::note
在生成引擎文件之前，您需要提前下载 [Depth Anything V3 的 `.onnx` 模型](https://huggingface.co/TillBeemelmanns/Depth-Anything-V3-ONNX)，并将其放置在 ros2-depth-anything-v3-trt/onnx 目录中。
:::

```bash
# Make the engine generation script executable
chmod +x generate_engines.sh

# Generate TensorRT engines from ONNX models
./generate_engines.sh onnx
```
请耐心等待 `.engine` 文件的生成。转换完成后，将在 `onnx` 目录中创建两个文件，如下所示。

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/engine.png"/>
</div>


## 运行深度估计

### 摄像头深度估计

**步骤 1.** 连接 USB 摄像头

将您的 USB 摄像头连接到 Jetson AGX Orin 设备。验证摄像头是否被检测到：

```bash
# Check if USB camera is detected
ls /dev/video*
```
**预期输出：**

```
/dev/video0  /dev/video1
```

**步骤 2.** 摄像头标定

`v4l2_camera` 包充当 Linux Video4Linux2 (V4L2) API 和 ROS 2 话题之间的桥梁，发布可在标定流水线中轻松使用的图像和摄像头信息消息。

安装摄像头标定包：

```bash
# Install Camera Calibration Package
sudo apt install ros-humble-camera-calibration

# v4l2_camera is the official ROS2 maintained node that can directly publish USB camera images
sudo apt install ros-${ROS_DISTRO}-v4l2-camera
```

启动摄像头节点：

```bash
# Launch camera node
ros2 run v4l2_camera v4l2_camera_node \
  --ros-args \
  -p image_size:=[640,480] \
  -p pixel_format:=YUYV
```

默认发布的话题有：

- `/image_raw` - 原始摄像头图像
- `/camera` - 摄像头信息

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/image.png" />
</div>

运行摄像头标定：

```bash
# In another terminal
ros2 run camera_calibration cameracalibrator \
  --size 8x6 \
  --square 0.025 \
  --fisheye-recompute-extrinsicsts \
  --fisheye-fix-skew \
  --ros-args --remap image:=/image_raw --remap camera:=/v4l2_camera
```

:::note
- `--size 8x6` 指的是内角点数量（8×6 = 48 个角点，对应 9×7 网格）
- `--square 0.025` 指的是方格大小，单位为米（25mm）
- 移动摄像头从不同角度捕获图像，直到 `CALIBRATE` 按钮亮起

:::

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/cal2.png" />
</div>

标定成功后，您将在终端中获得类似的摄像头参数：

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/cal3.png" />
</div>

您可以参考[此 wiki](https://wiki.seeedstudio.com/cn/pycuvslam_recomputer_robotics/#camera-calibration) 进行摄像头标定。
将标定参数写入 `camera_info_example.yaml` 文件

**步骤 3.** 启动 USB 摄像头节点

将标定参数保存到 `camera_info_example.yaml` 文件中，以校正 GMSL 摄像头的鱼眼畸变。然后，运行以下命令进行实时深度估计：
```bash
#Start the script for camera depth estimation
CAMERA_INFO_FILE=camera_info_example.yaml ENABLE_UNDISTORTION=1 ./run_camera_depth.sh
```

<div class="video-container">
  <iframe width="1029" height="579" src="https://www.youtube.com/embed/3Khm3OpLg3M" title="Deploy Depth Anything V3 on reComputer Mini J501" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


### 视频深度估计

**步骤 1.** 准备视频文件

准备一个用于深度估计的视频文件。

**步骤 2.** 启动视频深度估计节点

```bash
#Start the script for video depth estimation
./run_video_depth.sh
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/da3.gif"/>
</div>


## 参考资料

- [Depth Anything V3 GitHub 仓库](https://github.com/DepthAnything/Depth-Anything-V3)
- [ROS2 Depth Anything V3 TRT 仓库](https://github.com/ika-rwth-aachen/ros2-depth-anything-v3-trt)
- [TensorRT 文档](https://developer.nvidia.com/tensorrt)
- [ROS2 Humble 文档](https://docs.ros.org/en/humble/)


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

