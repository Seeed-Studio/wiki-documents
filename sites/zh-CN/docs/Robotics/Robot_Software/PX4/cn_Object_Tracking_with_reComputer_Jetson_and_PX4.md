---
description: reComputer Mini 搭载 NVIDIA Jetson Orin Nano/Orin NX，是一款紧凑型 AI 计算机，专为无人机设计以实现实时目标跟踪。通过集成 PX4 飞控、ROS 2 和 Orbbec Gemini 2 3D 相机，该方案配置 ROS2 与 PX4 的通信，安装 Gemini 2 Python SDK 捕获同步 RGB-D 数据，并使用经 TensorRT 优化的 YOLOv11n 模型进行检测。ROS2 包将 YOLO 检测与 ByteTrack 算法结合，实现精准多目标跟踪，同时利用深度数据估算无人机与目标之间的距离，从而在飞行中实现高精度实时跟踪。
title: 使用 reComputer Jetson 与 PX4 进行目标跟踪
keywords:
  - NVIDIA
  - PX4
  - ROS
  - Jetson
  - reComputer
  - 目标跟踪
  - 距离测量
  - 无人机
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.webp
slug: /object_tracking_with_reComputer_jetson_and_pX4
sku: 101090144,100071398
last_update:
  date: 2025/8/08
  author: Zibo
createdAt: '2025-09-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/object_tracking_with_reComputer_jetson_and_pX4/
---

## 简介

<div style={{ textAlign: "justify" }}>
reComputer Mini 是一款由 NVIDIA Jetson Orin Nano/Orin NX 模块驱动的微型 AI 计算机，AI 性能高达 100 TOPS。
凭借其紧凑的设计，非常适合安装在无人机上执行 AI 任务。本教程将演示如何使用 reComputer 与 PX4 在无人机上实现实时目标跟踪。
</div>

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

## 前置条件

- reComputer 系列产品  
- PX4 飞控  
- 已安装 Jetson Pack 6.2 与 [ROS 2 Humble](https://wiki.seeedstudio.com/cn/install_ros2_humble/)  
- [Orbbec Gemini 2 3D 相机](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)  

## 配置 PX4 的 ROS2 通信环境

要在 Jetson 上实现无人机状态监控，请首先参考 [此教程](https://wiki.seeedstudio.com/cn/control_px4_with_recomputer_jetson/) 配置 PX4 的 ROS2 通信环境。

## 设置 Gemini 2 Python SDK

Orbbec Gemini 2 是一款高精度 RGB-D 3D 相机，可采集同步的深度与彩色数据，适用于机器人、3D 扫描和计算机视觉等应用。

**步骤 1.** 安装依赖并克隆仓库：

```bash
sudo apt-get install python3-dev python3-venv python3-pip python3-opencv
# 安装 pybind11
pip install pybind11
# 克隆仓库
git clone https://github.com/orbbec/pyorbbecsdk.git
# 安装必要依赖
cd pyorbbecsdk
pip install -r requirements.txt
```

**步骤 2.** 构建并安装项目：

```bash
mkdir build && cd build
# 构建项目
cmake \
  -Dpybind11_DIR=`pybind11-config --cmakedir` \
  -DPython3_EXECUTABLE=/usr/bin/python3.10 \
  -DPython3_INCLUDE_DIR=/usr/include/python3.10 \
  -DPython3_LIBRARY=/usr/lib/aarch64-linux-gnu/libpython3.10.so \
  ..
make -j4
sudo make install
# 应用 Python SDK
pip install wheel
python setup.py bdist_wheel
pip install dist/*.whl
# 配置 udev_rules
export PYTHONPATH=$PYTHONPATH:$(pwd)/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

## 读取 PX4 在 ROS2 中发布的话题

将 PX4 控制器连接至 Jetson 的 UART1 串口：

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_mini.jpg" />
</div>

打开一个终端并在 Jetson 上启动 Agent：

```bash
cd /path/to/Micro-XRCE-DDS-Agent/build
./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600
```

在另一个终端中运行以下命令，可以看到 PX4 发布的状态话题：

```bash
ros2 topic list | grep "/fmu/out/"
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_topic.png" />
</div>

:::info
通过阅读以下主题的内容，您可以获取无人机的基本状态信息：

- /fmu/out/failsafe_flags -> 当前失效保护条件的指示。
- /fmu/out/sensor_combined -> 同步的原始 IMU、磁力计和气压计数据。
- /fmu/out/timesync_status -> 与外部源的时间同步状态。
- /fmu/out/vehicle_attitude -> 当前飞行器姿态，四元数表示。
- /fmu/out/vehicle_control_mode -> 当前激活的控制和导航模式。
- /fmu/out/vehicle_local_position -> 本地 NED 坐标系下的位置和速度。
- /fmu/out/vehicle_odometry -> 完整的六自由度位姿和速度数据。
- /fmu/out/vehicle_status -> 飞行器总体状态、模式和就绪情况。

:::

## 快速配置目标检测环境

**步骤 1.** 根据 Jetpack 版本，可参考 [此教程](https://wiki.seeedstudio.com/cn/install_torch_on_recomputer/) 安装 PyTorch 与 Torchvision。

**步骤 2.** 安装必要依赖与软件包：

```bash
sudo apt-get update
sudo apt-get -y install libcusparselt0 libcusparselt-dev
pip install ultralytics
pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.20.0-cp310-cp310-linux_aarch64.whl
pip install numpy==1.23.5
```

**步骤 3.** 下载 YOLOv11n 预训练模型：

```bash
wget -O yolo11n.pt https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n.pt
```

**步骤 4.** 导出 TensorRT 推理引擎模型：

```bash
yolo export model=/path/to/yolo11n.pt format=engine device=0 half=True dynamic=True
```

## 安装 ROS2 目标跟踪包

```bash
cd /path/to/your/work_space/src

git clone https://github.com/zibochen6/ROS2-package-for-target-tracking.git

cd ..
# 构建包
colcon build
```

:::note
在运行检测节点之前，您需要将之前生成的引擎模型文件移动到 `/ROS2-package-for-target-tracking/models` 目录中。此外，您必须在工作空间的 src 目录中克隆 `px4_msgs` 和 `px4_ros_com` 包（参考 [此 wiki](https://wiki.seeedstudio.com/cn/control_px4_with_recomputer_jetson/#step-2-build-the-px4_msgs-ros-2-package)）。

您的 src 目录结构应如下所示：

```bash
└── src
    ├── detect
    ├── px4_msgs
    └── px4_ros_com
```

:::

运行 ROS2 目标跟踪包时，需要打开一个终端启动 MicroXRCEAgent：

```bash
./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600

# 打开另一个终端并运行检测节点
cd /path/to/your/work_space
source install/setup.bash
ros2 run detect detect
```

<div class="video-container">
  <iframe width="853" height="480" src="https://www.youtube.com/embed/YG1XmZL6kpU" title="🚁 reComputer Mini 实现无人机自主目标跟踪" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>
上面的视频展示了在无人机上实现目标跟踪的示例。无人机通过目标检测定位目标，并利用 ByteTrack 算法精准跟踪特定目标，同时使用深度图像估算无人机与目标之间的距离。
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您拥有尽可能顺畅的体验。我们提供多种交流渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
