---
description: This wiki provides detailed steps to set up and run the A-LOAM algorithm on reComputer Jetson using a RoboSense RS32 LiDAR sensor.
title: Run A-LOAM 3D SLAM
keywords:
- A-LOAM
- SLAM
- reComputer
- Jetson nano
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /a_loam
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
---
# How to run A-LOAM 3D SLAM on reComputer

## Introduction to A-LOAM

[A-LOAM](https://github.com/HKUST-Aerial-Robotics/A-LOAM/tree/devel) is an advanced implementation of the original LOAM (Lidar Odometry and Mapping) algorithm by J. Zhang and S. Singh. The key features of A-LOAM include:

- Real-time LiDAR odometry and mapping.
- Simplified code structure using Eigen and Ceres Solver.
- High performance and robustness in diverse environments.

A-LOAM can be used for various applications including autonomous driving, robotics, and 3D mapping.

This wiki provides detailed steps to set up and run the A-LOAM (Advanced LOAM) algorithm on reComputer Jetson Series using a RoboSense RS32 LiDAR sensor. A-LOAM is an advanced implementation of LOAM (Lidar Odometry and Mapping in Real-time) that utilizes Eigen and Ceres Solver for efficient and real-time mapping and localization.
  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig0.gif" />
  </div>

## Prerequisites

- __[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__.

- __RoboSense RS32 Lidar__.

  :::note
  - Ensure your reComputer is running Jetpack 5.x. We have only tested on Ubuntu 20.04 and ROS Noetic. Follow the [ROS1 installation for reComputer](/installing_ros1) as outlined in this guide to complete the ROS environment setup.
  - Ensure you follow the tutorial to [launch the RoboSense RS32 LiDAR on reComputer in ROS](/robosense_lidar), and successfully visualize the point cloud data.
  :::

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Getting Started

### Environment Setup

- __Step 1:__ Install gflags, google-glog, suitesparse, cxsparse3, cxsparse.

    ```bash
    sudo apt-get install libgflags-dev libgoogle-glog-dev
    sudo apt-get install libsuitesparse-dev libcxsparse3 libcxsparse-dev
    ```

- __Step 2:__ Install PCL (Point Cloud Library).

  ```bash
  sudo apt install libpcl-dev
  ```

- __Step 3:__ Install Ceres.

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

- __Step 4:__ Clone the A-LOAM code into the src directory of your workspace (~/catkin_ws/src).

  ```bash
  cd ~/catkin_ws/src
  git clone https://github.com/HKUST-Aerial-Robotics/A-LOAM.git
  ```

### Modify Configuration Files and Source Code

- __Step 1:__ Since the A-LOAM algorithm requires the point cloud type to be __XYZIRT__, and the RS32 LiDAR default output is __XYZI__, you need to modify the __CMakeLists.txt__ file at line __8__ in the ___~/catkin_ws/src/rslidar_sdk/___ directory, changing __XYZI__ to __XYZIRT__.
  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig1.png" />
  </div>

- __Step 2:__ The default point cloud topic that A-LOAM subscribes to is ___/velodyne_points___, while the RS32 LiDAR default output topic is ___/rslidar_points___. Therefore, modify the topic name at line 26 in the ___~/catkin_ws/src/rslidar_sdk/config/config.yaml___ file to ___/velodyne_points___.
  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig2.png" />
  </div>

- __Step 3:__ If you are using C++14, modify line __5__ in the __CMakeLists.txt__ file located in the ___~/catkin_ws/src/A-LOAM/___ directory, changing ___C++11___ to ___C++14___.
  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig3.png" />
  </div>

- __Step 4:__ If you are using __OpenCV 4.x__, you need to update the OpenCV header file references at line __44__ in the __scanRegistration.cpp__ file located in the ___~/catkin_ws/src/A-LOAM/src___ directory (this step can be skipped if you are using OpenCV 3.x).

  Replace code

  ```c++
  #include <opencv/cv.h>
  ```
  
  with

  ```c++
  #include <opencv2/opencv.hpp>
  ```

  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig4.png" />
  </div>

- __Step 5:__ In lines __91__ and __93__ of ___~/catkin_ws/src/A-LOAM/src/kittiHelper.cpp___, change ___CV_LOAD_IMAGE_GRAYSCALE___ to ___cv::IMREAD_GRAYSCALE___
  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig5.png" />
  </div>

- __Step 6:__ If you are using __tf2__, modify all __.cpp__ files __(kittiHelper.cpp, laserMapping.cpp, laserOdometry.cpp, scanRegistration.cpp)__ in the ___~/catkin_ws/src/A-LOAM/src/___ directory by changing ___frame_id=/camera_init___ to ___frame_id=camera_init___, removing only the __'/'__ symbol.
  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig6.png" />
  </div>

### Compile the Package

- __Step 1:__ Go back to the workspace and recompile the feature pack and reload the environment.

  ```bash
  cd ~/catkin_ws
  catkin_make
  source ~/catkin_ws/devel/setup.bash
  ```

### Starting 3D SLAM

- __Step 1:__ Running lidar code

  ```bash
    roslaunch rslidar_sdk start.launch
  ```

- __Step 2:__ Running A loam code

  ```bash
  roslaunch aloam_velodyne aloam_velodyne_HDL_32.launch
  ```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig7.png" />
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
