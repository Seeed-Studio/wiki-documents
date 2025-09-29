---
description: 本维基提供了通过 ROS 在 reComputer 上使用多个 CSI 摄像头的分步指南。
title: 使用 ROS 的 CSI 摄像头
keywords:
- Jetson Nano
- reComputer
- CSI
- 摄像头
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/csi_camera_on_ros
last_update:
  date: 05/15/2025
  author: ZhuYaoHui
---

# 如何通过 ROS 在 reComputer 上使用多个 CSI 摄像头


## 简介
本教程提供了如何通过 ROS 在 [reComputer J30/J40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 系列设备上读取多个 CSI 摄像头图像数据，并发布图像主题以在 RVIZ 可视化界面中显示的分步指南。

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 前提条件
- __[reComputer J30/40 系列](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__：确保您已按照提供的教程完成 [JetPack 5.x 的安装](/cn/reComputer_J4012_Flash_Jetpack) 和 [ROS Noetic 环境的安装](/cn/installing_ros1)。

- __支持的摄像头如下：__

  - IMX219 摄像头

    - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
    - [IMX219-130 8MP 摄像头，130°视场角](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
    - [IMX219-160 8MP 摄像头，160°视场角](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
    - [IMX219-200 8MP 摄像头，200°视场角](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html)
    - [IMX219-77 8MP 摄像头，77°视场角](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
    - [IMX219 M12/CS 安装 CMOS 摄像头模块](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
    - [IMX219-83 8MP 3D 立体摄像头模块](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
    - [IMX219-77IR 8MP 红外夜视摄像头，77°视场角](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
    - [IMX219-160IR 8MP 摄像头，160°视场角](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)
    - [IMX219 M12/CS 安装 CMOS 摄像头模块](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

  - IMX477 摄像头

    - [Raspberry Pi 高质量摄像头](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
    - [Raspberry Pi HQ 摄像头 - M12 安装](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
    - [适用于 Raspberry Pi 的高质量摄像头](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)


## 入门指南
### 连接摄像头
请按照本教程完成 [CSI 摄像头的连接和测试](/cn/J401_carrierboard_Hardware_Interfaces_Usage)，并确保您的系统上已安装 [ROS](/cn/installing_ros1)。

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/csi_camera/fig0.jpg" />
  </div>

### 安装
- **步骤 1：** 在您的 reComputer 上打开终端并创建工作空间目录：
  ```bash
  mkdir -p ~/catkin_ws/src
  cd ~/catkin_ws/src
  ```
- **步骤 2：** 克隆所需的 ROS 包：
  ```bash
  git clone https://github.com/ZhuYaoHui1998/csi_camera_reader.git
  ```

- **步骤 3：** 构建工作空间：
  ```bash
  cd ~/catkin_ws/
  catkin_make
  ```

- **步骤 4：** 再次加载 setup 文件以更新环境：
  ```bash
  source devel/setup.bash
  ```

### 使用方法
- 要将一个摄像头流发布到 ROS 主题 /csi_cam_0/image_raw，请在终端中使用以下命令：
  ```bash
  roslaunch csi_camera_reader csi_camera.launch sensor_id:=0
  ```

- 您也可以将 sensor_id 更改为 1，以匹配您的接口：
  ```bash
  roslaunch csi_camera_reader csi_camera.launch sensor_id:=1
  ```

- 如果您希望同时打开两个 CSI 摄像头并将主题发布到 ROS，可以执行以下命令：

  ```bash
  roslaunch csi_camera_reader dual_camera.launch
  ```
  您可以在终端中输入 "**rostopic list**" 命令，查看摄像头发布的图像主题。
  <div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/csi_camera/fig1.png" />
  </div>
    您还可以使用 RVIZ 可视化工具订阅图像主题并查看视觉信息。
      <div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/csi_camera/fig2.png" />
  </div>
## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>