---
description: This wiki demonstrates point cloud reconstruction with a RealSense depth camera and 3D bounding box detection for target objects.
title: RealSense 3D Segmentation
keywords:
  - RealSense
  - YOLO
  - realsense camera
  - GPU acceleration
  - RGB-D camera

image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/3D_Seg/tableseg.webp
slug: /realsense_3d_seg
sku: 113990795,100000540
last_update:
  date: 2025-10-10T00:00:00.000Z
  author: ZhangJiaQuan
createdAt: '2026-03-28'
updatedAt: '2026-03-28'
url: https://wiki.seeedstudio.com/realsense_3D_seg/
translation:
  skip:
    - zh-CN
---



# RealSense 3D Segmentation
<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/3D_Seg/tableseg.jpg" />
</div>
## Device Overview

### RealSense D405

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" />
</div>

The RealSense D405 depth camera is a short-range stereo camera designed for close-up computer vision tasks with sub-millimeter accuracy. Its ideal operating range is **7 cm to 50 cm**. It features high-resolution global shutter sensors and uses an image signal processor (ISP) to generate aligned RGB data without requiring a dedicated RGB sensor. This compact camera is optimized for precision robotics, medical imaging, and automated inspection scenarios.

### RealSense D435i

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" />
</div>

The RealSense D435i depth camera is a stereo camera that combines depth perception and motion tracking, designed for robotics, 3D reconstruction, SLAM, and automated perception applications. It uses active stereo depth technology and provides a wide field of view, global shutter depth sensors, RGB color imaging, and a built-in IMU, allowing synchronized depth, color, and motion data output. This compact camera is suitable for near- to mid-range computer vision tasks such as obstacle avoidance for mobile robots, spatial modeling, path planning, and real-time environment perception.

## Introduction

This demo is based on OpenCV segmentation and uses a depth camera for point cloud reconstruction and target object detection on the reconstructed point cloud. It outputs the following information:

- Object category
- XYZ coordinates of the object center
- Bounding box dimensions
- Bounding box yaw angle

It also supports visualization through Open3D. This solution is suitable for robotic perception tasks such as tabletop grasping, object localization, and candidate grasp pose filtering, and can provide stable 3D geometric information for robotic arm grasp planning and follow-up operations.

## Prerequisites

- RealSense D435i or RealSense D405

## Quick Start

### 1. Get the Project Code

First, clone the project locally and enter the project directory:

```bash
git clone git@github.com:Miscanthus40076/TabletopSeg3D.git
cd TabletopSeg3D
```

> Note: All installation and runtime commands below are executed from the project root directory `TabletopSeg3D` by default.

### 2. Python Virtual Environment

It is recommended to use a dedicated Python virtual environment. The suggested version is **Python 3.11**.

Create an environment with `conda`:

```bash
conda create -n tabletopseg3d python=3.11
conda activate tabletopseg3d
```

Create an environment with `venv`:

```bash
python3.11 -m venv .venv
source .venv/bin/activate
```

### 3. System Dependencies

Before running this project, your system must have **Intel RealSense SDK / librealsense** installed to support data acquisition and driver access for the depth camera.

Notes:

- If you only want to read the code, write documentation, or perform static analysis, you can skip this dependency for now.
- If you want to connect a depth camera and actually run this demo, this dependency must be installed in advance.

### 4. Install Python Dependencies

This project provides two recommended installation paths:

- Default CPU installation
- GPU-accelerated installation

You can choose the appropriate option based on your hardware.

#### 4.1 Default CPU Installation

Run the following command to install the project dependencies:

```bash
python -m pip install -r requirements.txt
```

#### 4.2 GPU Acceleration

If your device has an NVIDIA GPU and a properly configured CUDA environment, you can use the GPU installation path to improve YOLO segmentation inference performance.

Before proceeding, make sure your system meets the following requirements:

- NVIDIA GPU driver is installed
- A CUDA runtime compatible with the driver is installed
- You plan to install GPU builds of `torch` and `torchvision` that match your CUDA version

Install the GPU versions of `torch` and `torchvision` that match your CUDA version:

```bash
pip install torch torchvision --index-url https://download.pytorch.org/whl/cuXXX
```

Where:

- Replace `cuXXX` with the actual CUDA version tag
- Common examples include `cu121` and `cu124`

## 5. Run

### 5.1 Get the Device Serial Number

```bash
python scripts/realtime_open3d_scene.py --list-devices
```

### 5.2 Launch Visualization Mode

Replace the serial number with the actual serial number of your device:

```bash
python scripts/realtime_open3d_scene.py \
  --serial 419522072950 \
  --device cpu \
  --show-labels
```

### 5.3 Run Without a GUI

If you do not need the Open3D graphical interface and want to directly obtain structured detection results for each frame, you can run in headless mode:

```bash
python scripts/realtime_open3d_scene.py \
  --serial 419522072950 \
  --device cpu \
  --frames 10 \
  --no-display
```

In this mode, the program outputs JSON data frame by frame, mainly including:

- Target category
- 3D coordinates of the target center
- Target bounding box dimensions
- Target bounding box yaw angle

### 5.4 Recommended Parameters for D405

For close-range depth cameras such as the D405, it is usually recommended to narrow the valid depth range to obtain more stable point cloud results.

```bash
python scripts/realtime_open3d_scene.py \
  --serial 409122273421 \
  --device cpu \
  --min-depth 0.02 \
  --max-depth 0.50
```
