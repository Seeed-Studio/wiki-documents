---
description: 本文档提供在 reComputer 上安装 ROS1 的指南。
title: 安装 ROS1
keywords:
- ROS1
- ROS 安装
- Jetson Nano
- 机器人
- 机器人操作系统
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/installing_ros1
last_update:
  date: 05/15/2025
  author: ZhuYaoHui
---

# 如何在 reComputer 上安装 ROS1

## 简介
ROS，即机器人操作系统（Robot Operating System），是一个广泛应用于机器人开发和研究的开源框架。ROS1 最初由斯坦福大学开发，后来由 Willow Garage 维护，支持异构计算平台、多种编程语言以及模块化设计。它通过 Topics、Services 和 Parameter Server 提供通信机制，使用 Catkin 进行高效的包管理，并提供丰富的开发工具，如 rviz、gazebo 和 rosbag，使其成为构建和集成复杂机器人系统的重要工具。

在本指南中，您将学习如何在 [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 系列上安装 ROS Noetic。按照以下步骤设置您的开发环境。

## 前提条件
- __[reComputer J30/40 系列](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__。

  :::note
  请确保您的 reComputer 设备已安装 _JetPack 5.x_，包括所有必要的 CUDA 和相关驱动程序。按照以下描述完成硬件连接设置。
  :::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/software/install_ros1/fig1.gif" />
</div>

## 开始

### 安装 ROS1
- **步骤 1：** 打开终端并更新系统包。
  ```bash
  sudo apt update 
  sudo apt upgrade
  ```
- **步骤 2：** 安装基本工具。
  ```bash
  sudo apt install curl gnupg2 lsb-release
  ```
- **步骤 3：** 添加 ROS 仓库密钥。
  ```bash
  sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
  ```
- **步骤 4：** 添加 ROS 仓库。
  ```bash
  sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
  ```
- **步骤 5：** 更新包列表。
  ```bash
  sudo apt update
  ```
- **步骤 6：** 安装 ros-noetic-desktop-full。
  ```bash
  sudo apt install ros-noetic-desktop-full
  sudo apt-get install python3-rosdep
  ```
- **步骤 7：** 初始化 rosdep。
  ```bash
  sudo rosdep init
  rosdep update
  ```
- **步骤 8：** 设置 ROS 环境变量。
  ```bash
  echo "source /opt/ros/noetic/setup.bash">> ~/.bashrc &&
  source ~/.bashrc
  ```
- **步骤 9：** 安装依赖工具。
  ```bash
  sudo apt install python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
  ```
- **步骤 10：** 测试安装。
  ```bash
  roscore
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/software/install_ros1/fig2.png" />
  </div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您在使用我们的产品时能够获得顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>