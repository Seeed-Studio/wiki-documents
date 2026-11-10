---
description: "Track objects on a reComputer Jetson and send position to PX4 over ROS 2: Gemini 2 depth input, YOLO detection and MAVROS output."
title: Object Tracking with reComputer Jetson and PX4
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
url: https://wiki.seeedstudio.com/object_tracking_with_reComputer_jetson_and_pX4/
---

## Introduction

<div style={{ textAlign: "justify" }}>
reComputer Mini carries a Jetson Orin Nano or Orin NX module and delivers up to 100 TOPS in a case small enough to mount on an airframe. The build connects it to PX4 over ROS 2, runs YOLO detection with ByteTrack on the Gemini 2 colour stream, and uses the depth frame to measure how far the tracked target is from the drone.
</div>

<div align="center">
  <img alt="Two reComputer Mini units with Wi-Fi antennas, badged NVIDIA Jetson Orin Nano / Orin NX" width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## Prerequisites

- reComputer series of products
- PX4 flight controller
- JetPack 6.2 and [ROS 2 Humble](https://wiki.seeedstudio.com/install_ros2_humble/) have been installed
- [Orbbec Gemini 2 3D Camera](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)

## Configure the PX4 communication environment of ROS2

To implement the state monitoring of the drone on Jetson, please first refer to [this wiki](https://wiki.seeedstudio.com/control_px4_with_recomputer_jetson/) to configure the ROS2 communication environment for PX4.

## Set up the Gemini 2 Python SDK

The Orbbec Gemini 2 is a high-precision RGB-D 3D camera that captures synchronized depth and color data for applications like robotics, 3D scanning, and computer vision.

**Step 1.** Install dependencies and clone the repository:

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

**Step 2.** Build and install the project:

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

## Read the topics published by px4 in ROS2

Connect the PX4 controller to the UART1 serial port of Jetson

<div align="center">
    <img alt="PX4 controller wired to the UART1 serial port on the Jetson for the Micro-XRCE-DDS link" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_mini.jpg" />
</div>

Open one terminal and start the Agent on the jetson:

```bash
cd /path/to/Micro-XRCE-DDS-Agent/build
./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600
```

By using the following command and opening another terminal, you can see the status topic published by px4:

```bash
ros2 topic list | grep "/fmu/out/"
```

<div align="center">
    <img alt="ros2 topic list filtered on /fmu/out/ showing the PX4 status topics" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_topic.png" />
</div>

:::info
By reading the content of the following topics, you can obtain the basic status information of the drone:

- /fmu/out/failsafe_flags -> Indicators of current failsafe conditions.
- /fmu/out/sensor_combined -> Synchronized raw IMU, magnetometer, and barometer data.
- /fmu/out/timesync_status -> Status of time synchronization with external sources.
- /fmu/out/vehicle_attitude -> Current vehicle orientation as a quaternion.
- /fmu/out/vehicle_control_mode -> Current active control and navigation modes.
- /fmu/out/vehicle_local_position -> Position and velocity in the local NED frame.
- /fmu/out/vehicle_odometry -> Full 6-DoF pose and velocity data.
- /fmu/out/vehicle_status -> Overall vehicle state, mode, and readiness.

:::

## Quickly configure the object detection environment

**Step 1.** According to your Jetpack version, you can refer to this wiki for [installing PyTorch](https://wiki.seeedstudio.com/install_torch_on_recomputer/) and Torchvision.

**Step 2.** Install the necessary dependencies and packages:

```bash
sudo apt-get update
sudo apt-get -y install libcusparselt0 libcusparselt-dev
pip install ultralytics
pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.20.0-cp310-cp310-linux_aarch64.whl
pip install numpy==1.23.5
```

**Step 3.** Download the YOLOv11n pre-trained model:

```bash
wget -O yolo11n.pt https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n.pt
```

**Step 4.** Export engine model for using tensorrt inference:

```bash
yolo export model=/path/to/yolo11n.pt format=engine device=0 half=True dynamic=True
```

## Install the ROS2 package for target tracking

```bash
cd /path/to/your/work_space/src

git clone https://github.com/zibochen6/ROS2-package-for-target-tracking.git

cd ..
# build the package
colcon build
```

:::note
Before running the detection node, you need to move the previously generated engine model file to the `/ROS2-package-for-target-tracking/models` directory. Additionally, you must clone the `px4_msgs` and `px4_ros_com` packages(refer to [this wiki](https://wiki.seeedstudio.com/control_px4_with_recomputer_jetson/#step-2-build-the-px4_msgs-ros-2-package)) in the src directory of your workspace.

Your src directory structure should be as follows:

```bash
└── src
    ├── detect
    ├── px4_msgs
    └── px4_ros_com
```

:::

To run the ROS2 package for normal operation of target tracking, you need to open a terminal and start the MicroXRCEAgent:

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
The above video presents an example of achieving target tracking on a drone. It locates the target through target detection and uses the ByteTrack target tracking algorithm to precisely track the specific target. At the same time, depth images are used to estimate the distance between the drone and the target.
</div>

## FAQ

**What does the Jetson do and what does PX4 do?**
The Jetson runs YOLO detection with ByteTrack and reads distance from the Gemini 2 depth frame, then sends the target position to PX4 over ROS 2. PX4 keeps flying the airframe; this build does not replace the flight controller.

**Which serial port carries the ROS 2 link to PX4?**
`/dev/ttyTHS1` at 921600 baud, through the Micro-XRCE-DDS Agent: `./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600`. Run the agent first, then start the detection node in a second terminal.

**How do I know the link is up?**
`ros2 topic list | grep "/fmu/out/"` should list `vehicle_status`, `vehicle_local_position`, `vehicle_attitude` and the rest of the PX4 status topics. No topics means the agent or the wiring is wrong, not the detector.

**Which JetPack version does this build use?**
JetPack 6.2 with ROS 2 Humble, plus the Orbbec Gemini 2 and the udev rules from `./scripts/install_udev_rules.sh`. The detection node is built in a ROS 2 workspace and needs `PYTHONPATH` extended to `install/lib/`.

## Related Resources

- [Orbbec Gemini 2 3D camera on ROS 2](/orbbec_gemini2/)
- [Pair the Gemini 2 with YOLOv11 for distance measurement](/yolov11_with_depth_camera/)
- [Install ROS 2 Humble on reComputer](/install_ros2_humble/)
- [Orbbec Gemini 2 product page](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)

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
