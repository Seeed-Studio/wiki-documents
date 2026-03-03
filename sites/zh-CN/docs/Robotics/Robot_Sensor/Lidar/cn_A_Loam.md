---
description: 本文档提供了在 reComputer Jetson 上使用 RoboSense RS32 LiDAR 传感器设置并运行 A-LOAM 算法的详细步骤。
title: 运行 A-LOAM 3D SLAM
keywords:
- A-LOAM
- SLAM
- reComputer
- Jetson nano
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/a_loam
last_update:
  date: 05/15/2025
  author: ZhuYaoHui
---

# 如何在 reComputer 上运行 A-LOAM 3D SLAM


## A-LOAM 简介

[A-LOAM](https://github.com/HKUST-Aerial-Robotics/A-LOAM/tree/devel) 是由 J. Zhang 和 S. Singh 提出的原始 LOAM（实时激光雷达里程计与建图）算法的高级实现。A-LOAM 的主要特点包括：
- 实时激光雷达里程计与建图。
- 使用 Eigen 和 Ceres Solver 简化代码结构。
- 在多种环境下具有高性能和鲁棒性。

A-LOAM 可用于自动驾驶、机器人和 3D 建图等多种应用。

本文档提供了在 reComputer Jetson 系列上使用 RoboSense RS32 LiDAR 传感器设置并运行 A-LOAM（高级 LOAM）算法的详细步骤。A-LOAM 是 LOAM 的高级实现，利用 Eigen 和 Ceres Solver 实现高效的实时建图与定位。
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig0.gif" />
  </div>

## 前置条件
- __[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__。

- __RoboSense RS32 Lidar__。

  :::note
    - 确保您的 reComputer 正在运行 Jetpack 5.x。我们仅在 Ubuntu 20.04 和 ROS Noetic 上进行了测试。请按照本指南中的 [reComputer 的 ROS1 安装](/cn/installing_ros1) 完成 ROS 环境设置。
    - 确保您已按照教程 [在 reComputer 上启动 RoboSense RS32 LiDAR 并在 ROS 中可视化点云数据](/cn/robosense_lidar)。
  :::

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 开始使用

### 环境设置
 - **步骤 1：** 安装 gflags、google-glog、suitesparse 和 cxsparse3。
    ```bash
    sudo apt-get install libgflags-dev libgoogle-glog-dev
    sudo apt-get install libsuitesparse-dev libcxsparse3 libcxsparse-dev
    ```
- **步骤 2：** 安装 PCL（点云库）。
  ```bash
  sudo apt install libpcl-dev
  ```
- **步骤 3：** 安装 Ceres。
  ```bash
  wget ceres-solver.org/ceres-solver-1.14.0.tar.gz
  tar xvf ceres-solver-1.14.0.tar.gz
  cd ceres-solver-1.14.0
  mkdir build
  cd build
  cmake ..
  make -j4 
  sudo make install
  ```
- **步骤 4：** 将 A-LOAM 代码克隆到工作空间的 src 目录下（~/catkin_ws/src）。
  ```bash
  cd ~/catkin_ws/src
  git clone https://github.com/HKUST-Aerial-Robotics/A-LOAM.git
  ```
### 修改配置文件和源代码

- **步骤 1：** 由于 A-LOAM 算法需要点云类型为 **XYZIRT**，而 RS32 LiDAR 的默认输出为 **XYZI**，您需要修改 **_~/catkin_ws/src/rslidar_sdk/_** 目录下 **CMakeLists.txt** 文件的第 **8** 行，将 **XYZI** 更改为 **XYZIRT**。
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig1.png" />
  </div>

- **步骤 2：** A-LOAM 默认订阅的点云主题为 **_/velodyne_points_**，而 RS32 LiDAR 的默认输出主题为 **_/rslidar_points_**。因此，需要修改 **_~/catkin_ws/src/rslidar_sdk/config/config.yaml_** 文件第 26 行的主题名称为 **_/velodyne_points_**。
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig2.png" />
  </div>

- **步骤 3：** 如果您使用的是 C++14，请修改 **_~/catkin_ws/src/A-LOAM/_** 目录下 **CMakeLists.txt** 文件的第 **5** 行，将 **_C++11_** 更改为 **_C++14_**。
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig3.png" />
  </div>

- **步骤 4：** 如果您使用的是 **OpenCV 4.x**，需要更新 **_~/catkin_ws/src/A-LOAM/src_** 目录下 **scanRegistration.cpp** 文件第 **44** 行的 OpenCV 头文件引用（如果您使用的是 OpenCV 3.x，则可跳过此步骤）。

  替换代码
  ```c++
  #include <opencv/cv.h>
  ```
  
  为
  ```c++
  #include <opencv2/opencv.hpp>
  ```

  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig4.png" />
  </div>

- **步骤 5：** 在 **_~/catkin_ws/src/A-LOAM/src/kittiHelper.cpp_** 文件的第 **91** 和 **93** 行，将 **_CV_LOAD_IMAGE_GRAYSCALE_** 更改为 **_cv::IMREAD_GRAYSCALE_**。
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig5.png" />
  </div>

- **步骤 6：** 如果您使用的是 **tf2**，需要修改 **_~/catkin_ws/src/A-LOAM/src/_** 目录下的所有 **.cpp** 文件 **(kittiHelper.cpp, laserMapping.cpp, laserOdometry.cpp, scanRegistration.cpp)**，将 **_frame_id=/camera_init_** 更改为 **_frame_id=camera_init_**，仅删除 **'/'** 符号。
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig6.png" />
  </div>

### 编译包

-  **步骤 1：** 返回工作空间，重新编译功能包并重新加载环境。
  ```bash
  cd ~/catkin_ws
  catkin_make
  source ~/catkin_ws/devel/setup.bash
  ```

### 启动 3D SLAM
- **步骤 1：** 运行 LiDAR 代码
  ```bash
    roslaunch rslidar_sdk start.launch
  ```
- **步骤 2：** 运行 A-LOAM 代码
  ```bash
  roslaunch aloam_velodyne aloam_velodyne_HDL_32.launch
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig7.png" />
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

---

### 技术支持按钮说明

- **论坛支持**：点击 [论坛链接](https://forum.seeedstudio.com/) 访问 Seeed Studio 官方论坛，与社区成员交流并获取技术支持。
- **邮件支持**：点击 [邮件链接](https://www.seeedstudio.com/contacts) 联系 Seeed Studio 客服团队，获取一对一的技术支持。

- **Discord 社区**：点击 [Discord 链接](https://discord.gg/eWkprNDMU7) 加入 Seeed Studio 的官方 Discord 社区，与开发者实时交流。
- **GitHub 讨论**：点击 [GitHub 讨论链接](https://github.com/Seeed-Studio/wiki-documents/discussions/69) 参与相关技术话题的讨论，分享您的问题或经验。