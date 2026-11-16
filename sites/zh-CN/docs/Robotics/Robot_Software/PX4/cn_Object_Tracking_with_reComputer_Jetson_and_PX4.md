---
description: "在 reComputer Jetson 上跟踪目标并通过 ROS 2 将位置发送到 PX4：Gemini 2 深度输入、YOLO 检测和 MAVROS 输出。"
title: 使用 reComputer Jetson 和 PX4 进行目标跟踪
keywords:
  - NVIDIA
  - PX4
  - ROS
  - Jetson
  - reComputer
  - object tracking
  - distance measure
  - drone
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.webp
slug: /object_tracking_with_reComputer_jetson_and_pX4
sku: 101090144,100071398
last_update:
  date: 8/08/2025
  author: Zibo
createdAt: '2025-08-08'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/object_tracking_with_reComputer_jetson_and_pX4/
---

## 介绍

<div style={{ textAlign: "justify" }}>
reComputer Mini 搭载 Jetson Orin Nano 或 Orin NX 模块，在足够小可安装到机体上的机壳中提供高达 100 TOPS 的算力。本项目通过 ROS 2 将其连接到 PX4，在 Gemini 2 彩色图像流上运行带 ByteTrack 的 YOLO 检测，并利用深度帧测量被跟踪目标与无人机之间的距离。
</div>

<div align="center">
  <img alt="Two reComputer Mini units with Wi-Fi antennas, badged NVIDIA Jetson Orin Nano / Orin NX" width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 前置条件

- reComputer 系列产品
- PX4 飞控
- 已安装 JetPack 6.2 和 [ROS 2 Humble](https://wiki.seeedstudio.com/cn/install_ros2_humble/)
- [Orbbec Gemini 2 3D Camera](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)

## 配置 ROS2 的 PX4 通信环境

为了在 Jetson 上实现对无人机状态的监控，请首先参考[这篇 wiki](https://wiki.seeedstudio.com/cn/control_px4_with_recomputer_jetson/)来为 PX4 配置 ROS2 通信环境。

## 设置 Gemini 2 Python SDK

Orbbec Gemini 2 是一款高精度 RGB-D 3D 相机，可采集同步的深度和彩色数据，适用于机器人、3D 扫描和计算机视觉等应用。

**步骤 1.** 安装依赖并克隆仓库：

```bash
sudo apt-get install python3-dev python3-venv python3-pip python3-opencv
#install pybind11
pip install pybind11
#clone the repository
git clone https://github.com/orbbec/pyorbbecsdk.git
#Install the necessary packages
cd pyorbbecsdk
pip install -r requirements.txt
```

**步骤 2.** 构建并安装项目：

```bash
mkdir build && cd build
#Build the project
cmake \
  -Dpybind11_DIR=`pybind11-config --cmakedir` \
  -DPython3_EXECUTABLE=/usr/bin/python3.10 \
  -DPython3_INCLUDE_DIR=/usr/include/python3.10 \
  -DPython3_LIBRARY=/usr/lib/aarch64-linux-gnu/libpython3.10.so \
  ..
make -j4
sudo make install
#apply the python SDK
pip install wheel
python setup.py bdist_wheel
pip install dist/*.whl
#Configure udev_rules
export PYTHONPATH=$PYTHONPATH:$(pwd)/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

## 在 ROS2 中读取 px4 发布的主题

将 PX4 飞控连接到 Jetson 的 UART1 串口

<div align="center">
    <img alt="PX4 controller wired to the UART1 serial port on the Jetson for the Micro-XRCE-DDS link" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_mini.jpg" />
</div>

打开一个终端，在 Jetson 上启动 Agent：

```bash
cd /path/to/Micro-XRCE-DDS-Agent/build
./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600
```

通过使用以下命令并再打开一个终端，你可以看到由 px4 发布的状态主题：

```bash
ros2 topic list | grep "/fmu/out/"
```

<div align="center">
    <img alt="ros2 topic list filtered on /fmu/out/ showing the PX4 status topics" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_topic.png" />
</div>

:::info
通过读取以下主题的内容，你可以获取无人机的基本状态信息：

- /fmu/out/failsafe_flags -> 当前失效保护状态的指示。
- /fmu/out/sensor_combined -> 同步的原始 IMU、磁力计和气压计数据。
- /fmu/out/timesync_status -> 与外部源时间同步的状态。
- /fmu/out/vehicle_attitude -> 当前飞行器姿态（四元数）。
- /fmu/out/vehicle_control_mode -> 当前激活的控制和导航模式。
- /fmu/out/vehicle_local_position -> 本地 NED 坐标系中的位置和速度。
- /fmu/out/vehicle_odometry -> 完整的 6 自由度位姿和速度数据。
- /fmu/out/vehicle_status -> 整体飞行器状态、模式和就绪情况。

:::

## 快速配置目标检测环境

**步骤 1.** 根据你的 Jetpack 版本，你可以参考这篇 wiki [安装 PyTorch](https://wiki.seeedstudio.com/cn/install_torch_on_recomputer/) 和 Torchvision。

**步骤 2.** 安装必要的依赖和软件包：

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

**步骤 4.** 导出用于 tensorrt 推理的 engine 模型：

```bash
yolo export model=/path/to/yolo11n.pt format=engine device=0 half=True dynamic=True
```

## 安装用于目标跟踪的 ROS2 包

```bash
cd /path/to/your/work_space/src

git clone https://github.com/zibochen6/ROS2-package-for-target-tracking.git

cd ..
# build the package
colcon build
```

:::note
在运行检测节点之前，你需要将之前生成的 engine 模型文件移动到 `/ROS2-package-for-target-tracking/models` 目录中。此外，你必须在工作空间的 src 目录中克隆 `px4_msgs` 和 `px4_ros_com` 包（参考[这篇 wiki](https://wiki.seeedstudio.com/cn/control_px4_with_recomputer_jetson/#step-2-build-the-px4_msgs-ros-2-package)）。

你的 src 目录结构应如下所示：

```bash
└── src
    ├── detect
    ├── px4_msgs
    └── px4_ros_com
```

:::

要运行用于目标跟踪正常工作的 ROS2 包，你需要打开一个终端并启动 MicroXRCEAgent：

```bash
./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600

# Open another terminal and run the detection node
cd /path/to/your/work_space
source install/setup.bash
ros2 run detect detect
```

<div class="video-container">
  <iframe width="853" height="480" src="https://www.youtube.com/embed/YG1XmZL6kpU" title="🚁 Autonomous Drone Target Tracking by reComputer Mini" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>
上面的视频展示了一个在无人机上实现目标跟踪的示例。它通过目标检测定位目标，并使用 ByteTrack 目标跟踪算法精确跟踪特定目标。同时，利用深度图像估算无人机与目标之间的距离。
</div>

## 常见问题

**Jetson 做什么，PX4 又做什么？**
Jetson 运行带 ByteTrack 的 YOLO 检测，并从 Gemini 2 的深度帧中读取距离，然后通过 ROS 2 将目标位置发送给 PX4。PX4 负责持续控制机体飞行；本项目并不会替代飞控。

**哪一个串口承载与 PX4 的 ROS 2 链路？**
`/dev/ttyTHS1`，波特率 921600，通过 Micro-XRCE-DDS Agent：`./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600`。先运行 agent，然后在第二个终端中启动检测节点。

**我如何确认链路已经建立？**
`ros2 topic list | grep "/fmu/out/"` 应该会列出 `vehicle_status`、`vehicle_local_position`、`vehicle_attitude` 以及其他 PX4 状态主题。如果没有任何主题，说明是 agent 或连线有问题，而不是检测器的问题。

**这个构建使用的是哪个 JetPack 版本？**
JetPack 6.2 搭配 ROS 2 Humble，再加上 Orbbec Gemini 2 以及来自 `./scripts/install_udev_rules.sh` 的 udev 规则。检测节点在 ROS 2 工作空间中构建，并需要将 `PYTHONPATH` 扩展到 `install/lib/`。

## 相关资源

- [在 ROS 2 上使用 Orbbec Gemini 2 3D 相机](/cn/orbbec_gemini2/)
- [将 Gemini 2 与 YOLOv11 结合进行距离测量](/cn/yolov11_with_depth_camera/)
- [在 reComputer 上安装 ROS 2 Humble](/cn/install_ros2_humble/)
- [Orbbec Gemini 2 产品页面](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
