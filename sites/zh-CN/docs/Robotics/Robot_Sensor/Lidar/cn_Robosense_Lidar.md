---
description: 本文档提供了在 reComputer J30/40 上使用 ROS 安装和设置 RoboSense 速腾聚创3D雷达 的分步指南。
title: 使用 ROS 配置 RoboSense LiDAR
keywords:
- Jetson Nano
- reComputer
- Robosense
- Lidar
- 速腾聚创3D雷达
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/robosense_lidar
last_update:
  date: 05/15/2025
  author: ZhuYaoHui
---

# 如何在 reComputer 上使用 RoboSense速腾聚创3D雷达 LiDAR


## 简介
RoboSense速腾聚创3D雷达传感器为各种应用提供高精度的 3D 点云数据。本指南重点介绍如何在运行 ROS Noetic 的 [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 设备上设置 RS32 型号。

本文档提供了在 [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) Jetson 上使用 ROS 安装和设置 RoboSense LiDAR 的分步指南，并可视化点云数据。
<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig1.gif" />
</div>


## 前置条件
- __[reComputer J30/40 系列](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__：已完成 [JetPack 5.x 系统安装](/cn/reComputer_J4012_Flash_Jetpack) 和 [ROS Noetic 环境安装](/cn/installing_ros1) 的教程。

- __RoboSense 全系列 LiDAR__

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 入门指南

### 安装 Robosense SDK
- **步骤 1：** 安装基本依赖项
  ```bash
  sudo apt-get update &&
  sudo apt-get install -y libyaml-cpp-dev libpcap-dev
  ```
- **步骤 2：** 创建工作空间
  ```bash
  mkdir -p catkin_ws/src
  cd catkin_ws/src
  ```
- **步骤 3：** 克隆 rslidar_sdk
  ```bash
  git clone https://github.com/RoboSense-LiDAR/rslidar_sdk.git
  cd rslidar_sdk
  git submodule init
  git submodule update
  ```
- **步骤 4：** 打开位于 **_catkin_ws/src/rslidar_sdk/CMakeLists.txt_** 的 **CMakeLists.txt** 文件，并将文件顶部的变量 **_COMPILE_METHOD_** 修改为 **_CATKIN_**。

  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig3.png" />
  </div>

- **步骤 4：** 删除位于 **_catkin_ws/src/rslidar_sdk/_** 目录中的现有 **package.xml** 文件，并将 **package_ros1.xml** 文件重命名为 **package.xml**。
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig4.png" />
  </div>

- **步骤 5：** 在终端中输入以下命令
  ```bash
  cd ~/catkin_ws/src/rslidar_sdk/
  mkdir build && cd build
  cmake .. && make -j4
  cd ~/catkin_ws/
  catkin_make
  ```
### 连接硬件
- **步骤 1：** 按如下所述连接电源、Robosense RS32 LiDAR、接口盒和以太网线到 reComputer J4012：
<div align="center">
    <img width={500} 
    src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig5.gif" />
</div>

- **步骤 2：** 打开位于 **_/catkin_ws/src/rslidar_sdk/config/config.yaml_** 的 config.yaml 文件，并将第 **10** 行的 **lidar_type** 修改为 **RS32**。保存文件并关闭。确保根据您的设备填写正确的 LiDAR 型号。
<div align="center">
    <img width={400} 
    src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig6.png" />
</div>

### 配置 reComputer IP 地址
Robosense RS32 LiDAR 的默认 IP 地址为 **_192.168.1.200_**，目标主机 IP 地址为 **_192.168.1.102_**，MSOP 数据包端口号为 6699，DIFOP 数据包端口号为 7788。连接硬件后，需要手动配置 reComputer 的 IP 地址。

- **步骤 1：** 打开以太网设置。
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig7.png" />
  </div>
- **步骤 2：** 在 IPv4 字段中选择手动设置，并输入 IP 地址 **192.168.1.102** 和掩码 **255.255.255.0**。
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
  如果您从 LiDAR 接收到数据，则表示连接成功。

### 运行 LiDAR 代码
  ```bash
  cd ~/catkin_ws/
  source devel/setup.bash
  roslaunch rslidar_sdk start.launch
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig10.png" />
  </div>

  
## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>