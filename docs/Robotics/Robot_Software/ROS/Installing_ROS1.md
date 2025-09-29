---
description: This wiki provides install ROS1 on reComputer.
title: Install ROS1
keywords:
- ROS1
- ROS installation
- Jetson Nano
- robotics
- Robot Operating System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /installing_ros1
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
---
# How to Install ROS1 on reComputer

## Introduction
ROS, or Robot Operating System, is an open-source framework widely used in robotics development and research. Developed initially at Stanford University and later by Willow Garage, ROS1 supports heterogeneous computing platforms, various programming languages, and modular design. It features communication mechanisms via Topics, Services, and a Parameter Server, efficient package management with Catkin, and a rich set of development tools like rviz, gazebo, and rosbag, making it a vital tool for building and integrating complex robotic systems.

In this wiki, you will learn how to install ROS Noetic on the [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) Series Follow the steps below to set up your development environment.

## Prerequisites
- __[reComputer J30/40 Series](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__.

  :::note
  Ensure your reComputer device is installed with _JetPack 5.x_, including all necessary CUDA and related drivers. Follow the hardware connection setup as described below.
  :::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/software/install_ros1/fig1.gif" />
</div>

## Getting Started

### Install ROS1
- **Step 1:** Open Terminal and Update System Packages.
  ```bash
  sudo apt update 
  sudo apt upgrade
  ```
- **Step 2:** Install Basic Tools.
  ```bash
  sudo apt install curl gnupg2 lsb-release
  ```
- **Step 3:** Add ROS repository key.
  ```bash
  sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
  ```
- **Step 4:** Add ROS repository.
  ```bash
  sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
  ```
- **Step 5:** Update package list.
  ```bash
  sudo apt update
  ```
- **Step 6:** Install ros-noetic-desktop-full.
  ```bash
  sudo apt install ros-noetic-desktop-full
  sudo apt-get install python3-rosdep
  ```
- **Step 7:** Initialize rosdep.
  ```bash
  sudo rosdep init
  rosdep update
  ```
- **Step 8:** Set Up ROS Environment Variables.
  ```bash
  echo "source /opt/ros/noetic/setup.bash">> ~/.bashrc &&
  source ~/.bashrc
  ```
- **Step 9:** Install Dependency Tools.
  ```bash
  sudo apt install python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
  ```
- **Step 10:** Test the Installation.
  ```bash
  roscore
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/software/install_ros1/fig2.png" />
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