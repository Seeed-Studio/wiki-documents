---
description: 本维基提供的是 Starai Arm 机械臂ROS2 Moveit 使用教程。
title: Starai Arm 机械臂ROS2 Moveit 使用教程
keywords:
- Moveit
- ROS2
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /cn/starai_arm_ros_moveit
last_update:
  date: 8/1/2025
  author: LiShanghang
---

# Starai Arm 机械臂ROS2 Moveit 使用教程

<div align="center">
  <img width={800}
  src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_and_violin.png" />
</div>

<div align="center">
  <img width={800}
  src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png" />
</div>


## 环境依赖

No LSB modules are available.

Distributor ID: Ubuntu

Description:    Ubuntu 22.04.5 LTS

Release:        22.04

Codename:       Jammy

ROS2:           Humble

### 安装ROS2 Humble

[ROS2 Humble 安装指南](https://wiki.seeedstudio.com/cn/install_ros2_humble/)

### 安装Moveit2

```bash
sudo apt install ros-humble-moveit*
```

### 安装舵机SDK库

```bash
sudo pip install pyserial
sudo pip install fashionstar-uart-sdk
```

### 创建工作空间并初始化

```bash
mkdir -p ~/starai_ws/src
cd ~/starai_ws
colcon build
```

### 克隆starai-arm-moveit2功能包
```
cd ~/starai_ws/src
git clone https://github.com/Welt-liu/starai-arm-moveit2.git
cd ~/starai_ws
colcon build
echo "source ~/starai_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## Starai Arm Moveit2仿真脚本

```bash
ros2 launch viola_configure demo.launch.py 
```


## 使用真实的机械臂

### 终端1:开启手臂控制节点

手臂会移动到零位。

```bash
ros2 run robo_driver driver
```

### 开启控制器节点

```bash
ros2 run viola_controller controller
```

### 启动moveit2

```bash
ros2 launch viola_configure actual_robot_demo.launch.py
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/L82y7e9uk9Q?si=Fa8YorBPgbRszYGn" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## FAQ

- 如果rivz2界面出现频闪，可以尝试以下指令:

    ```bash
    export QT_AUTO_SCREEN_SCALE_FACTOR=0
    ```