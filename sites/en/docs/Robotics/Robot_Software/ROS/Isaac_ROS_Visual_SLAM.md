---
description: This wiki provides a step-by-step guide to use Isaac ROS Visual SLAM.
title: Isaac ROS Visual SLAM
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /isaac_ros_visual_slam
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---


# Isaac ROS Visual SLAM Deployment  

## Prerequisites  
Before deploying Visual SLAM, ensure the Isaac ROS environment is properly set up on your ReComputer [Installation Guide](/install_isaacros). If ROS2 is not installed, refer to [this document](/install_ros2_humble).  


## 1. Environment Configuration  

### Create Workspace (Skip if existing)  
```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

### Clone Visual SLAM Package  
```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam.git
```

### Enter Docker Container  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

## 2. Testing with ROS Bag Data  

### Install Visual SLAM Package (Inside Docker)  
```bash
sudo apt-get install -y ros-humble-isaac-ros-visual-slam
```

### Launch Visual SLAM Node  
```bash
ros2 launch isaac_ros_visual_slam isaac_ros_visual_slam.launch.py
```

### Open RViz2 for Visualization  
In a **local terminal** (outside Docker):  
```bash
cd ${ISAAC_ROS_WS}/src
rviz2 -d isaac_ros_visual_slam/isaac_ros_visual_slam/rviz/default.cfg.rviz
```

### Play Stereo Camera ROS Bag  
In a **third terminal**:  
```bash
cd ${ISAAC_ROS_WS}/src
ros2 bag play isaac_ros_visual_slam/isaac_ros_visual_slam/test/test_cases/rosbags/small_pol_test/
```

### Expected Output:  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/6.png" />
</div>


### Notes:  
1. Ensure ROS bag contains **stereo camera images** (left/right frames).  
2. Adjust RViz2 configuration as needed (e.g., map visualization, trajectory settings).  

For troubleshooting, refer to the [official documentation](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam).  

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