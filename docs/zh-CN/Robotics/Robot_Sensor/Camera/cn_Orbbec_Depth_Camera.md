---
description: 本文档提供了在 reComputer 上通过 ROS 使用 Orbbec奥比中光深度相机的分步指南。
title: 使用 ROS 配置 Orbbec 深度相机
keywords:
- Jetson Nano
- reComputer
- Orbbec
- 深度相机
- 奥比中光
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/orbbec_depth_camera_on_ros
last_update:
  date: 05/15/2025
  author: Lidayu
---

# 如何在 reComputer Jetson上通过 ROS 使用 Orbbec 奥比中光深度相机

## 简介
本教程提供了在 [reComputer J30/J40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 系列设备上通过 ROS 使用 Orbbec 奥比中光深度相机的分步指南。我们将以 Orbbec Gemini 2 为例，获取深度图像和点云的主题数据，并在 rviz 中进行可视化。

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 前置条件
- __[reComputer J30/40 系列](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__：我们基于 [JetPack 5.x 系统](/cn/reComputer_J4012_Flash_Jetpack) 和 [ROS Noetic 环境](/cn/installing_ros1) 进行教程。

- 安装依赖项（请根据您的 ROS 发行版选择）：
  
  ```bash
  # 假设您已经配置了 ROS 环境，以下命令同样适用
  sudo apt install libgflags-dev ros-$ROS_DISTRO-image-geometry ros-$ROS_DISTRO-camera-info-manager \
  ros-$ROS_DISTRO-image-transport ros-$ROS_DISTRO-image-publisher libgoogle-glog-dev libusb-1.0-0-dev libeigen3-dev \
  ros-$ROS_DISTRO-diagnostic-updater ros-$ROS_DISTRO-diagnostic-msgs libdw-dev
  ```

## 入门指南
### 连接相机
通过 USB Type-C 将 Orbbec 深度相机连接到 Jetson，并确保您的系统上已经[安装了 ROS](/cn/installing_ros1)。

<div align="center">
      <img width={700} 
      src="https://i.imgur.com/0gAng8s.jpg" />
  </div>

### 安装
**如果您已经从我们的项目中克隆了 OBcamera_ws，则无需从以下链接克隆。**

- **步骤 1：**创建一个 ROS 工作空间（**如果您还没有**）：

```bash
mkdir -p OBcamera_ws/src
```

- **步骤 2：**获取源代码：

```bash
cd OBcamera_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS1.git
```

- **步骤 3：**构建包：

```bash
cd OBcamera_ws
catkin_make
```

- **步骤 4：**安装 udev 规则：

```bash
source ./devel/setup.bash
roscd orbbec_camera
sudo bash ./scripts/install_udev_rules.sh
```

### 启动相机

对于相机型号 **Gemini2**，在终端 1 中输入以下命令：

```bash
source ./devel/setup.bash
roslaunch orbbec_camera gemini2.launch
```

在终端 2 中输入：

```bash
source ./devel/setup.bash
rviz
```

您可以在第三个终端中输入 `rostopic list` 命令，查看 Orbbec 相机发布的主题。可用的主题如下：

- `/camera/color/camera_info`：彩色相机信息。
- `/camera/color/image_raw`：彩色流图像。
- `/camera/depth/camera_info`：深度相机信息。
- `/camera/depth/image_raw`：深度流图像。
- `/camera/depth/points`：点云，仅当 `enable_point_cloud` 为 `true` 时可用。
- `/camera/depth_registered/points`：彩色点云，仅当 `enable_colored_point_cloud` 为 `true` 时可用。
- `/camera/left_ir/camera_info`：左红外相机信息。
- `/camera/left_ir/image_raw`：左红外流图像。
- `/camera/right_ir/camera_info`：右红外相机信息。
- `/camera/right_ir/image_raw`：右红外流图像。
- `/diagnostics`：相机的诊断信息。目前诊断信息仅包括相机的温度。

启动 RVIZ 并通过界面左下角的按钮添加主题，您可以获得类似以下的渲染效果：
<div align="center">
      <img width={700} 
      src="https://i.imgur.com/7jmfnZ4.png" />
  </div>

如果您使用的相机型号不同，请从下表中找到对应的启动文件名称，并在终端 1 中将 `gemini2.launch` 替换为相应的文件名。

<table>
  <tr>
    <th>产品系列</th>
    <th>启动文件</th>
  </tr>
  <tr>
    <td>astra+</td>
    <td>astra_adv.launch</td>
  </tr>
  <tr>
    <td>astra mini/astra mini pro/astra pro</td>
    <td>astra.launch</td>
  </tr>
  <tr>
    <td>astra mini s pro</td>
    <td>astra.launch</td>
  </tr>
  <tr>
    <td>astra2</td>
    <td>astra2.launch</td>
  </tr>
  <tr>
    <td>astra stereo s</td>
    <td>stereo_s_u3.launch</td>
  </tr>
  <tr>
    <td>astra pro2</td>
    <td>astra_pro2.launch</td>
  </tr>
  <tr>
    <td>dabai</td>
    <td>dabai.launch</td>
  </tr>
  <tr>
    <td>dabai d1</td>
    <td>dabai_d1.launch</td>
  </tr>
  <tr>
    <td>dabai dcw</td>
    <td>dabai_dcw.launch</td>
  </tr>
  <tr>
    <td>dabai dw</td>
    <td>dabai_dw.launch</td>
  </tr>
  <tr>
    <td>dabai pro</td>
    <td>dabai_pro.launch</td>
  </tr>
  <tr>
    <td>deeya</td>
    <td>deeya.launch</td>
  </tr>
  <tr>
    <td>femto / femto w</td>
    <td>femto.launch</td>
  </tr>
  <tr>
    <td>femto mega</td>
    <td>femto_mega.launch</td>
  </tr>
  <tr>
    <td>femto bolt</td>
    <td>femto_bolt.launch</td>
  </tr>
  <tr>
    <td>gemini</td>
    <td>gemini.launch</td>
  </tr>
  <tr>
    <td>gemini2 / dabai DCL</td>
    <td>gemini2.launch</td>
  </tr>
  <tr>
    <td>gemini2L</td>
    <td>gemini2L.launch</td>
  </tr>
  <tr>
    <td>gemini e</td>
    <td>gemini_e.launch</td>
  </tr>
  <tr>
    <td>gemini e lite</td>
    <td>gemini_e_lite.launch</td>
  </tr>
  <tr>
    <td>dabai max</td>
    <td>dabai_max.launch</td>
  </tr>
  <tr>
    <td>dabai max pro</td>
    <td>dabai_max_pro.launch</td>
  </tr>
  <tr>
    <td>gemini uw</td>
    <td>gemini_uw.launch</td>
  </tr>
  <tr>
    <td>dabai dcw2</td>
    <td>dabai_dcw2.launch</td>
  </tr>
  <tr>
    <td>dabai dw2</td>
    <td>dabai_dw2.launch</td>
  </tr>
  <tr>
    <td>gemini ew</td>
    <td>gemini_ew.launch</td>
  </tr>
  <tr>
    <td>gemini ew lite</td>
    <td>gemini_ew_lite.launch</td>
  </tr>
  <tr>
    <td>gemini 330 系列</td>
    <td>gemini_330_series.launch</td>
  </tr>
</table>

**所有启动文件本质上是相似的，主要区别在于为同一系列的不同型号设置的参数默认值不同。USB 标准的差异（如 USB 2.0 与 USB 3.0）可能需要调整这些参数。如果您遇到启动失败，请仔细查看规格手册，特别注意启动文件中的分辨率设置以及其他参数，以确保兼容性和最佳性能。**

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得流畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>