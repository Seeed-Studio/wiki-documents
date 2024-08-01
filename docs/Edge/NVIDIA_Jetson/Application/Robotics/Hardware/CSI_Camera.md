---
description: This wiki provides a step-by-step guide to use multiple CSI cameras on reComputer by ROS.
title: CSI Camera with ROS
keywords:
- Jetson Nano
- reComputer
- CSI
- Camera
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /csi_camera_on_ros
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
---
# How to Use Multiple CSI Cameras on reComputer with ROS

## Introduction
This tutorial provides a step-by-step guide on how to read multiple CSI camera image data through ROS on  [reComputer J30/J40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) series devices and publish image topics to be displayed in the RVIZ visualization interface.

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Prerequisites
- __[reComputer J30/40 series](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__:  Ensure you have completed the [installation of the JetPack 5.x](/reComputer_J4012_Flash_Jetpack) system and the [ROS Noetic environment](/installing_ros1) according to the provided tutorials.

- __Supported cameras are as follows:__

  - IMX219 cameras

    - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
    - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
    - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
    - [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html)
    - [IMX219-77 8MP Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
    - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
    - [IMX219-83 8MP 3D Stereo Camera Module](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
    - [IMX219-77IR 8MP IR Night Vision Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
    - [IMX219-160IR 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)
    - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

  - IMX477 cameras

    - [Raspberry Pi High Quality Camera](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
    - [Raspberry Pi HQ Camera - M12 mount](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
    - [High Quality Camera for Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)


## Getting Started
### Connecting the Cameras
Please follow this tutorial to complete the [Connecting and testing of the CSI cameras](/J401_carrierboard_Hardware_Interfaces_Usage), and ensure that [ROS is already installed](/installing_ros1) on your system.

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/csi_camera/fig0.jpg" />
  </div>

### Installation
- **Step 1:** Open a terminal on your reComputer and create a directory for your workspace:
  ```bash
  mkdir -p ~/catkin_ws/src
  cd ~/catkin_ws/src
  ```
- **Step 2:** Clone the desired ROS package:
  ```bash
  git clone https://github.com/ZhuYaoHui1998/csi_camera_reader.git
  ```

- **Step 3:** Build the workspace:
  ```bash
  cd ~/catkin_ws/
  catkin_make
  ```

- **Step 4:** Source the setup file again to update your environment:
  ```bash
  source devel/setup.bash
  ```

### Usage
- To publish the one camera stream to the ROS topic /csi_cam_0/image_raw, use this command in the terminal:
  ```bash
  roslaunch csi_camera_reader csi_camera.launch sensor_id:=0
  ```

- You can also change sensor_id to 1 to match your interface:
  ```bash
  roslaunch csi_camera_reader csi_camera.launch sensor_id:=1
  ```

- If you want to open two CSI cameras simultaneously and publish topics to ROS, you can execute the following commands:

  ```bash
  roslaunch csi_camera_reader dual_camera.launch
  ```
  You can enter the "**rostopic list**" command in the terminal to see the image topics published by the cameras.
  <div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/csi_camera/fig1.png" />
  </div>
    You can also use the RVIZ visualization tool to subscribe to the image topics and view the visual information.
      <div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/csi_camera/fig2.png" />
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