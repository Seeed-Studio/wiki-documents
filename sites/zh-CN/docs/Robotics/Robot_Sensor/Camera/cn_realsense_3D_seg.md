---
description: 本wiki利用realsense深度相机进行点云重建，并针对点云进行目标物体三维框选
title: RealSense 三维分割
keywords:
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
url: https://wiki.seeedstudio.com/cn/realsense_3d_seg/
---



# RealSense 三维分割
<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/3D_Seg/tableseg.jpg" />
</div>
## 设备简介

### RealSense™ D405

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" />
</div>

RealSense™ D405 深度相机是一款短距离双目立体相机，专为近距离计算机视觉需求提供亚毫米级精度。其理想工作范围为 **7 cm 至 50 cm**，配备高分辨率全局快门传感器，并利用图像信号处理器（ISP）在无需专用 RGB 传感器的情况下生成匹配的 RGB 数据。这款紧凑型相机专为精密机器人、医疗成像和自动化检测场景优化。


### RealSense™ D435i

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" />
</div>

RealSense™ D435i 深度相机是一款集深度感知与运动追踪于一体的双目立体相机，专为机器人、三维重建、SLAM 与自动化感知应用而设计。它采用主动双目深度技术，具备宽视场角、全局快门深度传感器、RGB 彩色成像以及内置 IMU，可同步输出深度、彩色与运动数据。这款紧凑型相机适用于移动机器人避障、空间建模、路径规划和实时环境感知等近中距离计算机视觉场景。

## 介绍

本 Demo 基于 OpenCV 分割技术，利用深度相机进行点云重建，并针对点云进行目标物体框选，输出如下信息：

- 物体类型
    
- 物体中心的 XYZ 坐标
    
- 物体框选尺寸
    
- 物体框的偏角
    

同时支持通过 Open3D 进行可视化。该方案适用于桌面抓取、目标定位、候选抓取位姿筛选等机器人感知任务，可为机械臂抓取规划与后续操作提供稳定的三维几何信息。

## 先决条件

- RealSense™ D435i 或 RealSense™ D405
    

## 快速开始

### 1. 获取项目代码

首先将项目克隆到本地，并进入项目目录：

```
git clone git@github.com:Miscanthus40076/TabletopSeg3D.git
cd TabletopSeg3D
```

> 说明：以下安装与运行命令默认均在项目根目录 `TabletopSeg3D` 下执行。

### 2. Python 虚拟环境

建议使用独立的 Python 虚拟环境，推荐版本为 **Python 3.11**。

使用 `conda` 创建环境：

```
conda create -n tabletopseg3d python=3.11
conda activate tabletopseg3d
```

使用 `venv` 创建环境：

```
python3.11 -m venv .venv
source .venv/bin/activate
```

### 3. 系统依赖

在运行本项目之前，系统需具备 **Intel RealSense SDK / librealsense** 运行环境，用于支持深度相机的数据采集与驱动访问。

说明如下：

- 若仅进行代码阅读、文档编写或静态分析，可暂不安装该依赖
    
- 若需要实际连接深度相机运行本 Demo，则必须提前完成安装
    

### 4. Python 依赖安装

本项目提供两种推荐安装路径：

- CPU 默认安装路径
    
- GPU 加速安装路径
    

用户可根据本机硬件条件选择对应方案。

#### 3.1 CPU 默认安装

执行以下命令安装项目依赖：

```
python -m pip install -r requirements.txt
```

#### 3.2 GPU 加速

对于具备 NVIDIA GPU 且已正确配置 CUDA 环境的设备，可采用 GPU 安装方式，以提升 YOLO 分割推理效率。

在进行 GPU 安装前，请确认系统已满足以下条件：

- 已安装 NVIDIA 显卡驱动
    
- 已安装与驱动兼容的 CUDA 运行环境
    
- 计划安装与本机 CUDA 版本匹配的 GPU 版 `torch` 与 `torchvision`
    

安装与本机 CUDA 版本匹配的 GPU 版 `torch` 与 `torchvision`：

```
pip install torch torchvision --index-url https://download.pytorch.org/whl/cuXXX
```

其中：

- `cuXXX` 需替换为实际对应的 CUDA 版本标识
    
- 常见示例包括 `cu121`、`cu124`
    

## 5. 运行

### 5.1 获取设备序列号

```
python scripts/realtime_open3d_scene.py --list-devices
```

### 5.2 启动可视化模式

将序列号替换为实际设备序列号：

```
python scripts/realtime_open3d_scene.py \
  --serial 419522072950 \
  --device cpu \
  --show-labels
```

### 5.3 无界面运行

若不需要 Open3D 图形界面，而是希望直接获取每帧的结构化检测结果，可使用无界面模式运行：

```
python scripts/realtime_open3d_scene.py \
  --serial 419522072950 \
  --device cpu \
  --frames 10 \
  --no-display
```

该模式下，程序将按帧输出 JSON 数据，主要包括：

- 目标类别
    
- 目标中心点的三维坐标
    
- 目标包围框尺寸
    
- 目标包围框偏角 `yaw`
    

### 5.4 D405 推荐参数

对于 D405 这类近距离深度相机，通常建议同时收紧有效深度范围，以获得更稳定的点云结果。

```
python scripts/realtime_open3d_scene.py \
  --serial 409122273421 \
  --device cpu \
  --min-depth 0.02 \
  --max-depth 0.50
```
