---
description: 展示如何在 reComputer Jetson 平台上使用 Orbbec Gemini 335Lg。
title: AC1 入门指南
keywords:
  - Jetson
  - reComputer Robotics
  - Computer Vision
  - Autonomous Driving
  - Industrial Robot
  - Orbbec
  - AI Camera
  - Stereo Camera
  - Depth Camera
  - Visual SLAM
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/ac1.webp
slug: /ac1
last_update:
  date: 2025-09-18T00:00:00.000Z
  author: Youjiang
createdAt: '2025-09-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/ac1/
---

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/ac1_1.png" />
</div>

## 介绍

<div style={{ textAlign: "justify" }}>
Active Camera 由 RoboSense 发明，是机器人视觉领域的一个突破性类别，旨在解决移动感知和操作认知的挑战。

AC1 是该系列的第一款产品，集成了多个传感器，可在硬件级别融合深度信息、图像数据和运动姿态数据，实现时间和空间同步。这使机器人能够捕获全面的环境细节，克服阳光和高反射表面的干扰，适应各种室内外场景。

在本 wiki 中，我们将演示将 AC1 与 reComputer Robotics 结合使用的详细过程。
</div>

## 前提条件

<div class="table-center">
  <table align="center">
    <tr>
        <th>AC1</th>
        <th>reComputer Robotics J4012</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/ac1_1.png" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100001302_recomputer_robotics_j3011_with_gmsl_extension_1.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.robosense.ai/en/IncrementalComponents/AC1" target="_blank">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html" target="_blank">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
  </table>
</div>

## 硬件连接

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/hardware.png" />
</div>


## 入门指南

### 步骤 1. 在 reComputer Robotics J4012 上安装 ROS

a. 将以下内容添加到 `~/.bashrc` 中。
```bash
export CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export PATH=/usr/src/tensorrt/bin:$PATH
```
:::info
我们可以通过在终端中输入命令 `vim ~/bashrc` 来打开文件。
:::

b. 在终端中输入以下命令来安装 ROS2。

```bash
sudo apt install software-properties-common -y
sudo add-apt-repository universe
sudo apt update
sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
sudo apt update
sudo apt install ros-humble-desktop -y
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ros/ros_install.png" />
</div>

要验证 ROS2 是否已成功安装，我们可以在设备中创建两个新终端并分别运行以下命令。

```bash
# terminal1
ros2 run demo_nodes_cpp talker

# terminal2
ros2 run demo_nodes_py listener
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ros/ros_test.png"/>
</div>

如果两个终端都打印出消息，说明 ROS 2 Humble 已成功安装！🎉

### 步骤 2. 为 AC1 安装 ROS SDK

在 reComputer 的终端中输入以下命令。
```bash
git clone https://github.com/RoboSense-Robotics/robosense_ac_ros2_sdk_infra.git
sudo apt-get install libavformat-dev libavdevice-dev libavcodec-dev
sudo apt install python3-colcon-common-extensions -y
echo "source /usr/share/colcon_argcomplete/hook/colcon-argcomplete.bash" >> ~/.bashrc
source ~/.bashrc
cd robosense_ac_ros2_sdk_infra/modules/
colcon build
source install/setup.bash
```
<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/install_ac1_sdk.png" />
</div>

如果一切顺利，我们可以使用 Rviz 可视化 AC1 捕获的环境数据。

```bash
ros2 launch ac_driver start.py
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/demo.png" />
</div>

## 下一步

:::note
许多高级算法可以使用 AC1 与 reComputer Jetson 结合来复现。更多详情，请参考[这里](https://robosense-wiki-en.readthedocs.io/en/latest/ac_studio/algorithms.html)。
:::

## 资源

- https://robosense-wiki-en.readthedocs.io/en/latest/
- https://github.com/RoboSense-Robotics/robosense_ac_ros2_sdk_infra
- https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
