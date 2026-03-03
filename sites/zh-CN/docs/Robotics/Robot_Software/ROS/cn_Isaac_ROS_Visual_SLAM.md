---
description: 本维基提供了使用 Isaac ROS Visual SLAM 的分步指南。
title: Isaac ROS Visual SLAM
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/isaac_ros_visual_slam
last_update:
  date: 2025/5/28
  author: zhuyaohui
---


# Isaac ROS Visual SLAM 部署指南  

## 前置条件  
在部署 Visual SLAM 之前，请确保 Isaac ROS 环境已在您的 ReComputer 上正确设置 [安装指南](/cn/install_isaacros)。如果尚未安装 ROS2，请参考[此文档](/cn/install_ros2_humble)。  


## 1. 环境配置  

### 创建工作空间（如果已有可跳过）  
```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

### 克隆 Visual SLAM 包  
```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam.git
```

### 进入 Docker 容器  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

## 2. 使用 ROS Bag 数据进行测试  

### 安装 Visual SLAM 包（在 Docker 内）  
```bash
sudo apt-get install -y ros-humble-isaac-ros-visual-slam
```

### 启动 Visual SLAM 节点  
```bash
ros2 launch isaac_ros_visual_slam isaac_ros_visual_slam.launch.py
```

### 打开 RViz2 进行可视化  
在**本地终端**（Docker 外）：  
```bash
cd ${ISAAC_ROS_WS}/src
rviz2 -d isaac_ros_visual_slam/isaac_ros_visual_slam/rviz/default.cfg.rviz
```

### 播放立体相机 ROS Bag  
在**第三个终端**中：  
```bash
cd ${ISAAC_ROS_WS}/src
ros2 bag play isaac_ros_visual_slam/isaac_ros_visual_slam/test/test_cases/rosbags/small_pol_test/
```

### 预期输出：  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/6.png" />
</div>


### 注意事项：  
1. 确保 ROS bag 包含**立体相机图像**（左/右帧）。  
2. 根据需要调整 RViz2 配置（例如地图可视化、轨迹设置）。  

如需排查问题，请参考[官方文档](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam)。  

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您在使用我们的产品时获得顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>