---
description: This wiki provides the Starai Arm Manipulator - ROS2 MoveIt Guide.
title: Starai Arm Manipulator - ROS2 MoveIt Guide
keywords:
- Moveit
- ROS2
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /starai_arm_ros_moveit
last_update:
  date: 8/1/2025
  author: LiShanghang
---

# Starai Arm Manipulator - ROS2 MoveIt Guide

<div align="center">
  <img width={800}
  src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_and_violin.png" />
</div>

<div align="center">
  <img width={800}
  src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png" />
</div>


## Dependent Environment

No LSB modules are available.

Distributor ID: Ubuntu

Description:    Ubuntu 22.04.5 LTS

Release:        22.04

Codename:       Jammy

ROS2:           Humble

### Install ROS2 Humble

[ROS2 Humble Installation](https://wiki.seeedstudio.com/install_ros2_humble/)


### Install Moveit2

```bash
sudo apt install ros-humble-moveit*
```

### Install Servo Motor's SDK

```bash
sudo pip install pyserial
sudo pip install fashionstar-uart-sdk
```

### Create a workspace and Initialization.

```bash
mkdir -p ~/starai_ws/src
cd ~/starai_ws
colcon build
```

### Clone `starai-arm-moveit2` Ros2's Package
```
cd ~/starai_ws/src
git clone https://github.com/Welt-liu/starai-arm-moveit2.git
cd ~/starai_ws
colcon build
echo "source ~/starai_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```


## Starai Arm MoveIt2 Simulation Script

```bash
ros2 launch viola_configure demo.launch.py 
```


## Using a Real Robotic Arm

### Terminal 1: Start the Arm Control Node

The Arm Will Move to The Zero Position.

```bash
ros2 run robo_driver driver
```

### Start the Controller Node

```bash
ros2 run viola_controller controller
```

### Start the Moveit2

```bash
ros2 launch viola_configure actual_robot_demo.launch.py
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/L82y7e9uk9Q?si=Fa8YorBPgbRszYGn" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## FAQ

- If you experience flickering in the RViz2 interface, try the following commands:

    ```bash
    export QT_AUTO_SCREEN_SCALE_FACTOR=0
    ```