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
 - **Step 1:** Install gflags, google-glog, suitesparse, cxsparse3, cxsparse.
    ```bash
    sudo apt-get install libgflags-dev libgoogle-glog-dev
    sudo apt-get install libsuitesparse-dev libcxsparse3 libcxsparse-dev
    ```
- **Step 2:** Install PCL (Point Cloud Library).
  ```bash
  sudo apt install libpcl-dev
  ```
- **Step 3:** Install Ceres.
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
- **Step 4:** Clone the A-LOAM code into the src directory of your workspace (~/catkin_ws/src).
  ```bash
  cd ~/catkin_ws/src
  git clone https://github.com/HKUST-Aerial-Robotics/A-LOAM.git
  ```
### Modify Configuration Files and Source Code

- **Step 1:** Since the A-LOAM algorithm requires the point cloud type to be **XYZIRT**, and the RS32 LiDAR default output is **XYZI**, you need to modify the **CMakeLists.txt** file at line **8** in the **_~/catkin_ws/src/rslidar_sdk/_** directory, changing **XYZI** to **XYZIRT**.
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig1.png" />
  </div>

- **Step 2:** The default point cloud topic that A-LOAM subscribes to is **_/velodyne_points_**, while the RS32 LiDAR default output topic is **_/rslidar_points_**. Therefore, modify the topic name at line 26 in the **_~/catkin_ws/src/rslidar_sdk/config/config.yaml_** file to **_/velodyne_points_**.
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig2.png" />
  </div>

- **Step 3:** If you are using C++14, modify line **5** in the **CMakeLists.txt** file located in the **_~/catkin_ws/src/A-LOAM/_** directory, changing **_C++11_** to **_C++14_**.
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig3.png" />
  </div>

- **Step 4:** If you are using **OpenCV 4.x**, you need to update the OpenCV header file references at line **44** in the **scanRegistration.cpp** file located in the **_~/catkin_ws/src/A-LOAM/src_** directory (this step can be skipped if you are using OpenCV 3.x).

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

- **Step 5:** In lines **91** and **93** of **_~/catkin_ws/src/A-LOAM/src/kittiHelper.cpp_**, change **_CV_LOAD_IMAGE_GRAYSCALE_** to **_cv::IMREAD_GRAYSCALE_**
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig5.png" />
  </div>

- **Step 6:** If you are using **tf2**, modify all **.cpp** files **(kittiHelper.cpp, laserMapping.cpp, laserOdometry.cpp, scanRegistration.cpp)** in the **_~/catkin_ws/src/A-LOAM/src/_** directory by changing **_frame_id=/camera_init_** to **_frame_id=camera_init_**, removing only the **'/'** symbol.
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig6.png" />
  </div>

### Compile the Package

-  **Step 1:** Go back to the workspace and recompile the feature pack and reload the environment.
  ```bash
  cd ~/catkin_ws
  catkin_make
  source ~/catkin_ws/devel/setup.bash
  ```

### Starting 3D SLAM
- **Step 1:** Running lidar code
  ```bash
    roslaunch rslidar_sdk start.launch
  ```
- **Step 2:** Running A loam code
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