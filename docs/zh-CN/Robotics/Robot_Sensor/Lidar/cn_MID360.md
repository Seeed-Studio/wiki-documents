---
description: 本文档提供了在 reComputer J30/40 上使用 ROS 安装和设置 MID360 LiDAR 的分步指南。
title: 使用 ROS 配置 Mid360
keywords:
- Jetson Nano
- reComputer
- Mid360
- Lidar
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/mid360
last_update:
  date: 05/15/2025
  author: ZhuYaoHui
---

# 如何在 reComputer 上使用 MID360 LiDAR

## 简介
MID360 LiDAR 传感器为各种应用提供高精度的 3D 点云数据。本指南重点介绍如何在运行 ROS Noetic 的 [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 设备上设置 MID360。

本文档提供了在 [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) Jetson 上使用 ROS 安装和设置 MID360 LiDAR 的分步指南，并可视化点云数据。
<!-- <div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig1.gif" />
</div> -->


## 前置条件
- __[reComputer J30/40 系列](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__：已根据教程完成 [JetPack 5.x 系统的安装](/cn/reComputer_J4012_Flash_Jetpack) 和 [ROS Noetic 环境的安装](/cn/installing_ros1)。

- __MID360 LIDAR__

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 入门指南

### 安装 SDK2
- **步骤 1：** 安装 Livox-SDK2
  ```bash
  git clone https://github.com/Livox-SDK/Livox-SDK2.git
  cd ./Livox-SDK2/
  mkdir build
  cd build
  cmake .. && make -j8
  sudo make install
  ```

- **步骤 2：** 安装 livox_ros_driver2：
  ```bash
  git clone https://github.com/Livox-SDK/livox_ros_driver2.git ~/ws_livox/src/livox_ros_driver2
  cd ~/ws_livox/src/livox_ros_driver2
  source /opt/ros/noetic/setup.sh
  ./build.sh ROS1
  ```

### 配置 reComputer 的 IP 地址
MID360 LiDAR 的默认 IP 地址为 **_192.168.1.2xx_**，目标主机的 IP 地址为 **_192.168.1.50_**。连接硬件后，需要手动配置 reComputer 的 IP 地址。

- **步骤 1：** 打开以太网设置。
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig7.png" />
  </div>
- **步骤 2：** 在 IPv4 字段中选择手动设置，并输入 IP 地址 **192.168.1.50** 和掩码 **255.255.255.0**。
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/change_ip.png" />
  </div>

- **步骤 3：** 配置参数。
  接下来，修改 `~/src/livox_ros_driver2/config` 文件夹中的 `livox_ros_driver2` 配置文件。蓝色下划线部分应与静态 IP 保持一致。红色下划线部分应设置为 `192.168.1.1xx`，其中最后两位数字对应 MID360 广播代码的最后两位数字。例如，如果广播代码为 47MDL1C0010081（14 个字符），则 IP 地址应设置为 `192.168.1.181`。

  - `livox_ros_driver2/config/MID360_config.json`
      <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/MID360_config.png" />
      </div>
  - `livox_ros_driver2/launch_ROS1/rviz_MID360.launch`
      <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/RVIZ_MID360.png" />
      </div>
  - `livox_ros_driver2/launch_ROS1/msg_MID360.launch`
      <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/MSG_MID360.png" />
      </div>


### 运行 LiDAR 代码
  启动 LiDAR：
  ```bash
  cd ~/ws_livox/
  source devel/setup.bash
  roslaunch livox_ros_driver2 msg_MID360.launch
  ```
  
  打开一个新终端：
  ```bash
  cd ~/ws_livox/
  source devel/setup.bash
  roslaunch livox_ros_driver2 rviz_MID360.launch
  ```
  <div align="center">
  <img width={500} 
  src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/reesult.png" />
  </div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>