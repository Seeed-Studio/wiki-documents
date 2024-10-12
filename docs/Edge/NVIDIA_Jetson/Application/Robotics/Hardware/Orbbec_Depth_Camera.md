---
description: This wiki provides a step-by-step guide to use Orbbec Depth cameras on reComputer by ROS.
title: Orbbec Depth Camera with ROS
keywords:
- Jetson Nano
- reComputer
- Orbbec
- Depth Camera
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /orbbec_depth_camera_on_ros
last_update:
  date: 10/10/2024
  author: Lidayu
---
# How to Use Orbbec Depth Cameras on reComputer with ROS

## Introduction
This tutorial provides a step-by-step guide on how to use Orbbec Depth Camera through ROS on  [reComputer J30/J40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) series devices. We will take Orbbec Gemini 2 as an example, obtain topic data of depth images and point clouds, and visualize them on rviz.

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Prerequisites
- __[reComputer J30/40 series](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__:  We conduct tutorials based on the [JetPack 5.x system](/reComputer_J4012_Flash_Jetpack) and the [ROS Noetic environment](/installing_ros1).

- Install dependencies (be careful with your ROS distribution):
  
  ```bash
  # Assuming you have sourced the ROS environment, same below
  sudo apt install libgflags-dev ros-$ROS_DISTRO-image-geometry ros-$ROS_DISTRO-camera-info-manager \
  ros-$ROS_DISTRO-image-transport ros-$ROS_DISTRO-image-publisher libgoogle-glog-dev libusb-1.0-0-dev libeigen3-dev \
  ros-$ROS_DISTRO-diagnostic-updater ros-$ROS_DISTRO-diagnostic-msgs libdw-dev
  ```


## Getting Started
### Connecting the Cameras
Connect Orbbec Depth Camera to Jetson via USB Type-C, and ensure that [ROS is already installed](/installing_ros1) on your system.

<div align="center">
      <img width={700} 
      src="https://i.imgur.com/0gAng8s.jpg" />
  </div>

### Installation
**If you have cloned OBcamera_ws from our project, you don't need to clone from the link below.**

- **Step 1:**Create a ROS workspace (**if you don't have one**):

```bash
mkdir -p OBcamera_ws/src
```

- **Step 2:**Get the source code:

```bash
cd OBcamera_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS1.git
```

- **Step 3:**Build the package:

```bash
cd OBcamera_ws
catkin_make
```

- **Step 4:**Install udev rules:

```bash
source ./devel/setup.bash
roscd orbbec_camera
sudo bash ./scripts/install_udev_rules.sh
```

### Start the Camera

For the camera model **Gemini2**, enter the following in terminal 1:

```bash
source ./devel/setup.bash
roslaunch orbbec_camera gemini2.launch
```

In terminal 2:

```bash
source ./devel/setup.bash
rviz
```
You can enter the `rostpoic list` command in the third terminal to view the topics published by Orbbec Camera. Available Topics are as follows:

- `/camera/color/camera_info`: The color camera info.
- `/camera/color/image_raw`: The color stream image.
- `/camera/depth/camera_info`: The depth camera info.
- `/camera/depth/image_raw`: The depth stream image.
- `/camera/depth/points`: The point cloud, only available when `enable_point_cloud` is `true`.
- `/camera/depth_registered/points`: The colored point cloud, only available when `enable_colored_point_cloud` is `true`.
- `/camera/left_ir/camera_info`: The left IR camera info.
- `/camera/left_ir/image_raw`: The left IR stream image.
- `/camera/right_ir/camera_info`: The right IR camera info.
- `/camera/right_ir/image_raw`: The right IR stream image.
- `/diagnostics`: The diagnostic information of the camera. Currently, the diagnostic information only includes the temperature of the camera.


Start RVIZ and add topic via the button in the lower left corner of the RVIZ interface, you can get a rendering similar to the following:
<div align="center">
      <img width={700} 
      src="https://i.imgur.com/7jmfnZ4.png" />
  </div>


If the camera model you are using is different, find the corresponding launch file name from the table below and replace `gemini2.launch` in terminal 1 accordingly.

| Product Serials                     | Launch File              |
| ----------------------------------- | ------------------------ |
| astra+                              | astra_adv.launch         |
| astra mini/astra mini pro/astra pro | astra.launch             |
| astra mini s pro                    | astra.launch             |
| astra2                              | astra2.launch            |
| astra stereo s                      | stereo_s_u3.launch       |
| astra pro2                          | astra_pro2.launch        |
| dabai                               | dabai.launch             |
| dabai d1                            | dabai_d1.launch          |
| dabai dcw                           | dabai_dcw.launch         |
| dabai dw                            | dabai_dw.launch          |
| dabai pro                           | dabai_pro.launch         |
| deeya                               | deeya.launch             |
| femto / femto w                     | femto.launch             |
| femto mega                          | femto_mega.launch        |
| femto bolt                          | femto_bolt.launch        |
| gemini                              | gemini.launch            |
| gemini2 / dabai DCL                 | gemini2.launch           |
| gemini2L                            | gemini2L.launch          |
| gemini e                            | gemini_e.launch          |
| gemini e lite                       | gemini_e_lite.launch     |
| dabai max                           | dabai_max.launch         |
| dabai max pro                       | dabai_max_pro.launch     |
| gemini uw                           | gemini_uw.launch         |
| dabai dcw2                          | dabai_dcw2.launch        |
| dabai dw2                           | dabai_dw2.launch         |
| gemini ew                           | gemini_ew.launch         |
| gemini ew lite                      | gemini_ew_lite.launch    |
| gemini 330 series                   | gemini_330_series.launch |

**All launch files are essentially similar, with the primary difference being the default values of the parameters set for different models within the same series. Differences in USB standards, such as USB 2.0 versus USB 3.0, may require adjustments to these parameters. If you encounter a startup failure, please carefully review the specification manual. Pay special attention to the resolution settings in the launch file, as well as other parameters, to ensure compatibility and optimal performance.**
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
