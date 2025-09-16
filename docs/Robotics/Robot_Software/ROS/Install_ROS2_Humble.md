---
description: This wiki provides a step-by-step guide to install ROS2 humble.
title: Install the ROS2 Humble
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /install_ros2_humble
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ROS2 Humble Installation

ROS 2 is a next-generation open-source robotics middleware designed for building real-time, reliable, and scalable robotic systems. This wiki will demonstrate the detailed installation process of ROS 2 using Jetson as an example.


<Tabs>

<TabItem value="JP5.1.2" label="JP5.1.2">

## Set Locale
```bash
locale  # check for UTF-8
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
locale  # verify settings
```

## Install Dependencies
```bash
sudo apt update && sudo apt install gnupg wget
sudo apt install software-properties-common
sudo add-apt-repository universe
```

## Initialize Sources (Choose One Region)
```bash
# US Region
echo 'deb https://isaac.download.nvidia.com/isaac-ros/ubuntu/main focal main' | sudo tee -a /etc/apt/sources.list

# China Region
echo 'deb https://isaac.download.nvidia.cn/isaac-ros/ubuntu/main focal main' | sudo tee -a /etc/apt/sources.list
```

## Add ROS 2 APT Repository
```bash
sudo apt update && sudo apt install curl -y \
&& sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

## Install ROS2
```bash
sudo apt update
sudo apt install ros-humble-desktop-full  # Options: ros-humble-desktop-full, ros-humble-desktop, or ros-humble-ros-base
```

## Install Additional Build Tools
```bash
sudo apt install ros-dev-tools
```

## Initialize ROS Environment
```bash
sudo rosdep init
rosdep update
```

## Set Up ROS Environment Variables
```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

On the Jetson device, open a terminal and enter the following command:

```bash
sudo apt install software-properties-common -y
sudo add-apt-repository universe
sudo apt update
sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
sudo apt update
sudo apt install ros-humble-desktop -y
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ros/ros_install.png"/>
</div>

</TabItem>

</Tabs>

To verify whether ROS2 has been successfully installed, we can create two new terminals in the device and run the following commands respectively.

```bash
# terminal1
ros2 run demo_nodes_cpp talker

# terminal2
ros2 run demo_nodes_py listener
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ros/ros_test.png"/>
</div>

If both terminals print out the messages, it means ROS 2 Humble has been successfully installed! 🎉

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