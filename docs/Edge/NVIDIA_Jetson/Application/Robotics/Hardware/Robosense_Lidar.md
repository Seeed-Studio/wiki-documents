---
description: This wiki provides a step-by-step guide to install and set up RoboSense LiDAR on reComputer J30/40 using ROS.
title: RoboSense Lidar with ROS
keywords:
- Jetson Nano
- reComputer
- Robosense
- Lidar
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /robosense_lidar
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
---
# How to use RoboSense LiDAR on reComputer

## Introduction
RoboSense LiDAR sensors provide high-precision 3D point cloud data for various applications. This guide focuses on setting up the RS32 model on a [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) device running ROS Noetic.

This wiki provides a step-by-step guide to install and set up RoboSense LiDAR on [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) Jetson using ROS, and visualize point cloud data.
<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig1.gif" />
</div>


## Prerequisites
- __[reComputer J30/40 series](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__: Already completed the [installation of the JetPack 5.x](/reComputer_J4012_Flash_Jetpack) system and the [ROS Noetic environment](/installing_ros1) according to the tutorial. 

- __RoboSense all series lidar__

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Getting Started

### Install Robosense SDK
- **Step 1:** Install Basic Dependencies
  ```bash
  sudo apt-get update &&
  sudo apt-get install -y libyaml-cpp-dev libpcap-dev
  ```
- **Step 2:** Create Workspace
  ```bash
  mkdir -p catkin_ws/src
  cd catkin_ws/src
  ```
- **Step 3:** Clone the rslidar_sdk
  ```bash
  git clone https://github.com/RoboSense-LiDAR/rslidar_sdk.git
  cd rslidar_sdk
  git submodule init
  git submodule update
  ```
- **Step 4:** Open the **CMakeLists.txt** file located at **_catkin_ws/src/rslidar_sdk/CMakeLists.txt_** and change the variable **_COMPILE_METHOD_** at the top of the file to **_CATKIN_**.

  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig3.png" />
  </div>

- **Step 4:** Delete the existing **package.xml** file located in the **_catkin_ws/src/rslidar_sdk/ directory_**，Rename the **package_ros1.xml** file to **package.xml**.
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig4.png" />
  </div>

- **Step 5:** Enter the Following Commands in the Terminal
  ```bash
  cd ~/catkin_ws/src/rslidar_sdk/
  mkdir build && cd build
  cmake .. && make -j4
  cd ~/catkin_ws/
  catkin_make
  ```
### Connect Hardware
- **Step 1:** Connect the power supply, Robosense RS32 LiDAR, interface box, and Ethernet cable to the reComputer J4012 as described below:
<div align="center">
    <img width={500} 
    src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig5.gif" />
</div>

- **Step 2:** Open the config.yaml file located at **_/catkin_ws/src/rslidar_sdk/config/config.yaml_** and change the **lidar_type** on line **10** to **RS32**. Save the file and close it. Ensure you fill in the correct LiDAR model according to your device.
<div align="center">
    <img width={400} 
    src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig6.png" />
</div>

### Configure reComputer IP Address
The default IP address for the Robosense RS32 LiDAR is **_192.168.1.200_**, the target host machine IP address is **_192.168.1.102_**, the MSOP packet port number is 6699, and the DIFOP packet port number is 7788. After connecting the hardware, you need to manually configure the IP address of the reComputer.

- **Step 1:** Open Ethernet Settings.
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig7.png" />
  </div>
- **Step 2:** Select Manual Settings in the IPv4 field and enter the IP address **192.168.1.102** and mask **255.255.255.0**. 
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig8.png" />
  </div>

  ```bash
  ping 192.168.1.200
  ```
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig9.png" />
  </div>
  If you receive data from the LiDAR, it indicates a successful connection.

### Running Lidar Code
  ```bash
  cd ~/catkin_ws/
  source devel/setup.bash
  roslaunch rslidar_sdk start.launch
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig10.png" />
  </div>

  
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