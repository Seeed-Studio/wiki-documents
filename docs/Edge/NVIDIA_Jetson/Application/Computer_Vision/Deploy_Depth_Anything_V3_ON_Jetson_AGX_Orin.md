---
description: This wiki provides a comprehensive, step-by-step guide for deploying Depth Anything V3 on Jetson AGX Orin devices. It covers environment setup, installation of key dependencies (CUDA, ROS2, TensorRT), model conversion to TensorRT engines, and real-time depth estimation with USB camera integration. The guide highlights Depth Anything V3's ability to generate high-quality depth maps from single RGB images with minimal computational overhead, making it ideal for robotics, autonomous navigation, and 3D perception applications on edge devices.
title: Deploy Depth Anything V3 on Jetson AGX Orin
keywords:
- Depth Anything V3
- Jetson AGX Orin
- Depth Estimation
- TensorRT
- ROS2
- Computer Vision
- Robotics
- 3D Perception
- USB Camera
- Edge AI
image: https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/da3_head.webp
slug: /deploy_depth_anything_v3_jetson_agx_orin
last_update:
  date: 2026-01-09
  author: Zibo
---

<div align="center">
  <img width="600" src="https://github.com/ByteDance-Seed/Depth-Anything-3/raw/main/assets/images/demo320-2.gif"/>
</div>

## Introduction

<div style={{ textAlign: "justify" }}>
[Depth Anything V3](https://github.com/ByteDance-Seed/depth-anything-3) is a state-of-the-art monocular depth estimation model that revolutionizes 3D perception by generating high-quality depth maps from single RGB images. Unlike traditional depth estimation methods that require specialized hardware or multiple camera inputs, Depth Anything V3 leverages advanced deep learning techniques to predict accurate depth information using only standard 2D images. This makes it particularly valuable for edge AI applications where hardware constraints and computational efficiency are critical considerations. This wiki will guide you through deploying Depth Anything V3 on Jetson AGX Orin with ROS2 integration for real-time robotics applications.
</div>

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## Prerequisites

- **[reComputer Mini J501 Carrier Board](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)** (Jetson AGX Orin) with JetPack 6.2
- USB Camera
- [ROS2 Humble](https://wiki.seeedstudio.com/install_ros2_humble/) environment installed


<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/demo.gif"/>
</div>


## Technical Highlights

- **High-Quality Monocular Depth Estimation**: Depth Anything V3 generates accurate depth maps from single RGB images without requiring specialized depth sensors or stereo camera setups.

- **Optimized for Edge Deployment**: The model is specifically designed for efficient inference on edge devices like Jetson AGX Orin, with TensorRT optimization for maximum performance.

- **Real-Time Processing**: Capable of processing high-resolution images in real-time, making it suitable for autonomous navigation, obstacle avoidance, and robotic manipulation tasks.

- **ROS2 Integration**: Provides native ROS2 Humble support with depth map and point cloud publishing for seamless integration into robotic systems.

- **Flexible Input Support**: Works with various input sources including USB cameras, ROS image topics, and pre-recorded video streams.

## Environment Setup

**Step 1.**Install Dependencies

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

**Step 2.** Install Python Dependencies

```bash
pip3 install numpy opencv-python
```

**Step 3.** Configure CUDA Environment Variables

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


**Step 4.** Install ROS2 USB Camera Package

```bash
# Install USB camera driver for ROS2
sudo apt install -y ros-humble-usb-cam

# Install additional ROS2 dependencies
sudo apt install -y ros-humble-cv-bridge
sudo apt install -y ros-humble-image-transport
sudo apt install -y ros-humble-image-geometry
sudo apt install -y ros-humble-cv-bridge ros-humble-image-transport ros-humble-rviz2

```

**Step 5.** Setup Depth Anything V3 ROS2 Environment

```bash
# Clone the repository
git clone https://github.com/zibochen6/ros2-depth-anything-v3-trt.git

# Navigate to the project directory
cd ros2-depth-anything-v3-trt
```

**Step 6.** Build the ROS2 Package

```bash
# Build the depth_anything_v3 package with Release configuration
colcon build --packages-select depth_anything_v3 --cmake-args -DCMAKE_BUILD_TYPE=Release

# Source the workspace
source install/setup.bash
```

**Step 7.** Generate TensorRT Engines

:::note
Before generating the engine file, you need to download the [`.onnx` model of Depth Anything V3](https://huggingface.co/TillBeemelmanns/Depth-Anything-V3-ONNX) in advance and place it in the directory of ros2-depth-anything-v3-trt/onnx.
:::

```bash
# Make the engine generation script executable
chmod +x generate_engines.sh

# Generate TensorRT engines from ONNX models
./generate_engines.sh onnx
```
Please be patient while the `.engine` file is being generated. Once the conversion is complete, two files will be created in the `onnx` directory as follows.

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/engine.png"/>
</div>


## Running Depth Estimation

### Camera for Depth Estimation

**Step 1.** Connect USB Camera

Connect your USB camera to the Jetson AGX Orin device. Verify that the camera is detected:

```bash
# Check if USB camera is detected
ls /dev/video*
```
**Expected Output:**

```
/dev/video0  /dev/video1
```

**Step 2.** Camera calibration

`v4l2_camera` Package acts as a bridge between the Linux Video4Linux2 (V4L2) API and ROS 2 topics, publishing image and camera info messages that can be easily used in calibration pipelines.

Install Camera Calibration Package:

```bash
# Install Camera Calibration Package
sudo apt install ros-humble-camera-calibration

# v4l2_camera is the official ROS2 maintained node that can directly publish USB camera images
sudo apt install ros-${ROS_DISTRO}-v4l2-camera
```
 
launch camera node:

```bash
# Launch camera node
ros2 run v4l2_camera v4l2_camera_node \
  --ros-args \
  -p image_size:=[640,480] \
  -p pixel_format:=YUYV
```

The default topics published are:

- `/image_raw` - Raw camera image
- `/camera` - Camera info

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/image.png" />
</div>

Run camera calibration :

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
- `--size 8x6` refers to the number of inner corners (8×6 = 48 corners for a 9×7 grid)
- `--square 0.025` refers to the square size in meters (25mm)
- Move the camera around to capture images from different angles until the `CALIBRATE` button lights up

:::

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/cal2.png" />
</div>

After successful calibration, you will obtain camera parameters in the terminal similar to:

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/cal3.png" />
</div>

You can refer to [this wiki](https://wiki.seeedstudio.com/pycuvslam_recomputer_robotics/#camera-calibration) for camera calibration.
Write the calibrated parameters into the `camera_info_example.yaml` file

**Step 3.** Launch USB Camera Node 

Save the calibration parameters to the `camera_info_example.yaml` file to rectify the fisheye distortion of the GMSL camera. Then, run the following command for real-time depth estimation:
```bash
#Start the script for camera depth estimation
CAMERA_INFO_FILE=camera_info_example.yaml ENABLE_UNDISTORTION=1 ./run_camera_depth.sh
```

<div class="video-container">
  <iframe width="1029" height="579" src="https://www.youtube.com/embed/3Khm3OpLg3M" title="Deploy Depth Anything V3 on reComputer Mini J501" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


### Video for Depth Estimation

**Step 1.** Prepare Video File

Prepare a video file for depth estimation.

**Step 2.** Launch Video Depth Estimation Node 

```bash
#Start the script for video depth estimation
./run_video_depth.sh
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/da3.gif"/>
</div>


## References

- [Depth Anything V3 GitHub Repository](https://github.com/DepthAnything/Depth-Anything-V3)
- [ROS2 Depth Anything V3 TRT Repository](https://github.com/ika-rwth-aachen/ros2-depth-anything-v3-trt)
- [TensorRT Documentation](https://developer.nvidia.com/tensorrt)
- [ROS2 Humble Documentation](https://docs.ros.org/en/humble/)


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

