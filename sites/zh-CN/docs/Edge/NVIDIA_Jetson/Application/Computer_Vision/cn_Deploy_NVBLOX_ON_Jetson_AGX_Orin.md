---
description: 本文档提供了在 Jetson AGX Orin 设备上使用 Orbbec RGB-D 相机部署 NVBlox 的全面分步指南，涵盖环境配置、依赖安装、Isaac ROS 集成以及用于机器人应用的实时 3D 建图演示。
title: 在 Jetson AGX Orin 上使用 Orbbec 相机部署 NVBlox
keywords:
  - NVBlox
  - Jetson AGX Orin
  - Isaac ROS
  - ROS2
  - 计算机视觉
  - 机器人
  - 3D 感知
  - RGB-D 相机
  - 边缘 AI
  - TSDF
  - ESDF
  - 3D 建图
image: https://files.seeedstudio.com/wiki/other/page-nvblox.jpg
slug: /deploy_nvblox_jetson_agx_orin
sku: 101090144,100020039
last_update:
  date: 2026-01-20
  author: Dayu
createdAt: '2026-01-22'
updatedAt: '2026-03-17'
url: https://wiki.seeedstudio.com/cn/deploy_nvblox_jetson_agx_orin/
---

<div align="center">
    <img width={700}
     src="https://media.githubusercontent.com/media/NVIDIA-ISAAC-ROS/.github/release-4.0/resources/isaac_ros_docs/repositories_and_packages/isaac_ros_nvblox/isaac_sim_nvblox_humans.gif"/>
</div>

## 介绍

<div style={{ textAlign: "justify" }}>
[Isaac ROS NVBlox](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox) 是由 NVIDIA 开发的高性能 GPU 加速 3D 建图框架，用于实时机器人感知。与单目深度估计算法不同，NVBlox 使用来自 RGB-D 相机或双目相机的真实深度输入来构建精确的 3D 场景表示。

它可以实时构建稠密的 TSDF（截断符号距离场）和 ESDF（欧几里得符号距离场）地图，从而实现高质量 3D 重建、考虑障碍物的导航以及碰撞检测。NVBlox 还可以生成网格、基于体素的代价地图以及适用于自主移动机器人（AMR）的 3D 占用表示。

这使其在硬件资源和计算效率至关重要的边缘 AI 应用中尤为有价值。本文档演示如何在 **Jetson AGX Orin** 上集成 **ROS 2** 部署 Isaac ROS NVBlox，并结合 **Orbbec RGB-D 相机** 和移动机器人平台，实现完全在设备端运行的感知与导航流水线。 🚀

</div>

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5012-with-GMSL-extension-board-p-6682.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱</font></span></strong>
    </a>
</div>

## 前置条件

- **[reComputer J50](https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html)**（Jetson AGX Orin），已安装 JetPack 6.2.1
- Orbbec RGB-D 相机 📷
- 移动机器人底盘（可选）🤖
- 已安装 [ROS2 Humble](https://wiki.seeedstudio.com/cn/install_ros2_humble/) 环境
- 需要安装 Orbbec ROS2 SDK
- 需要安装 Isaac ROS

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/page-nvblox.jpg"/>
</div>

## 技术亮点

- **实时 3D 建图**：NVBlox 使用 GPU 加速实时生成稠密 TSDF 和 ESDF 地图，为机器人应用提供高质量 3D 场景重建。

- **RGB-D 相机集成**：利用 Orbbec RGB-D 相机的真实深度信息创建精确的 3D 表示，而无需依赖单目深度估计。

- **针对边缘部署优化**：专为 Jetson AGX Orin 等边缘设备上的高效推理而设计，并通过 CUDA 优化以获得最大性能。

- **面向导航的输出**：生成网格、基于体素的代价地图和 3D 占用栅格，适用于自主导航和避障。

- **原生 ROS2 支持**：提供与 ROS2 Humble 的无缝集成，支持标准机器人消息类型，便于集成到现有机器人系统中。

## 环境配置

### 安装基础依赖

在终端中安装以下依赖：

```bash
sudo apt update
sudo apt-get install python3-pip # Install Python3
sudo apt-get install nvidia-jetpack # Install developer tools
sudo pip3 install jetson-stats # Install Jtop to check JetPack version
sudo apt-get install git-lfs # Install Git LFS
```

### 安装 Docker CE

更新软件源：

```bash
sudo apt-get update
```

安装基础依赖：

```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common # Install essential packages to allow apt over HTTPS
```

添加 Docker 官方 GPG 密钥：

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

添加 Docker 稳定版软件源：

```bash
sudo add-apt-repository \
   "deb [arch=arm64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

再次更新软件包列表（已添加新源）：

```bash
sudo apt-get update
```

安装 Docker CE（社区版）：

```bash
sudo apt-get install docker-ce
```

确保 Docker 启动：

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

添加权限（将用户加入 Docker 组）：

```bash
sudo usermod -aG docker $USER
```

重启系统或注销登录：

```bash
sudo reboot
```

### 安装 Isaac ROS 3.2

创建工作空间并加入环境变量：

```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

进入工作空间并克隆软件包：

```bash
cd ${ISAAC_ROS_WS}/src
git clone -b release-3.2 https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
```

拉取官方 Isaac Common Docker 镜像并进入 Docker：

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

运行 `./scripts/run_dev.sh` 将自动安装 Isaac ROS 并启动容器。

:::tip
安装 Isaac ROS 需要在终端登录 NVIDIA NGC，并输入由你的 NGC 账号生成的 API Key 🔑
:::

### 安装 Orbbec SDK ROS2

使用 Orbbec RGB-D 相机需要安装 SDK 驱动。本指南采用从源码构建的方式。

安装依赖：

```bash
sudo apt install libgflags-dev nlohmann-json3-dev \
ros-$ROS_DISTRO-image-transport ros-${ROS_DISTRO}-image-transport-plugins ros-${ROS_DISTRO}-compressed-image-transport \
ros-$ROS_DISTRO-image-publisher ros-$ROS_DISTRO-camera-info-manager \
ros-$ROS_DISTRO-diagnostic-updater ros-$ROS_DISTRO-diagnostic-msgs ros-$ROS_DISTRO-statistics-msgs ros-$ROS_DISTRO-xacro \
ros-$ROS_DISTRO-backward-ros libdw-dev libssl-dev mesa-utils libgl1 libgoogle-glog-dev
```

创建 colcon 工作空间：

```bash
mkdir -p ~/ros2_ws/src

cd ~/ros2_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

进入工作目录并编译：

```bash
cd ~/ros2_ws
colcon build --event-handlers console_direct+ --cmake-args -DCMAKE_BUILD_TYPE=Release
```

为了让 Orbbec 相机在 Linux 上被正确识别，需要安装 udev 规则。

进入源码工作目录并运行脚本：

```bash
cd ~/ros2_ws/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

:::note
如果不执行该脚本，打开设备时会因为权限问题而失败，你将需要使用 sudo（管理员权限）来运行示例程序。⚠️
:::

## 部署 NVBlox

### 构建 NVBlox

获取适配 Orbbec 相机的 NVBlox 源码并复制到工作目录：

```bash
git clone https://github.com/jjjadand/isaac-NVblox-Orbbec.git
cp -r isaac-NVblox-Orbbec/src/isaac_ros_nvblox/ ${ISAAC_ROS_WS}/src/
cp -r isaac-NVblox-Orbbec/src/isaac_ros_nitros/ ${ISAAC_ROS_WS}/src/
cp -r isaac-NVblox-Orbbec/build/ ${ISAAC_ROS_WS}/
```

进入工作空间并启动 Isaac ROS Docker 容器：

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

（可选）如果你遇到类似如下的错误：

```bash
Finished pulling pre-built base image: nvcr.io/nvidia/isaac/ros:aarch64-ros2_humble_4c0c55dddd2bbcc3e8d5f9753bee634c
Nothing to build, retagged nvcr.io/nvidia/isaac/ros:aarch64-ros2_humble_4c0c55dddd2bbcc3e8d5f9753bee634c as isaac_ros_dev-aarch64
Running isaac_ros_dev-aarch64-container
docker: Error response from daemon: failed to create task for container: failed to create shim task: OCI runtime create failed: could not apply required modification to OCI specification: error modifying OCI spec: failed to inject CDI devices: unresolvable CDI devices nvidia.com/gpu=all
```

你可以尝试在终端中运行以下命令进行修复：

```bash
sudo nvidia-ctk cdi generate --mode=csv --output=/etc/cdi/nvidia.yaml
```

成功启动容器后，你应当会看到类似如下的界面：
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/isaac-ros.jpg"/>
</div>

安装额外依赖：

```bash
sudo apt update
sudo apt-get install -y ros-humble-magic-enum
sudo apt-get install -y ros-humble-foxglove-msgs
```

将 CUDA 环境变量添加到 `.bashrc`：

```bash
echo '
CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export CUDACXX=$CUDA_HOME/bin/nvcc
' >> ~/.bashrc
```

创建符号链接：

```bash
sudo ln -sf /opt/ros/humble/include/magic_enum.hpp /usr/include/magic_enum.hpp

sudo mkdir -p /opt/ros/humble/include/foxglove_msgs
sudo ln -sfn /opt/ros/humble/include/foxglove_msgs/foxglove_msgs/msg /opt/ros/humble/include/foxglove_msgs/msg
```

在 `/workspaces/isaac_ros-dev` 中构建并初始化工作空间：

```bash
colcon build --symlink-install --cmake-args -DBUILD_TESTING=OFF
source install/setup.bash
```

编译完成后，你应当会看到类似如下的结果：
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/NVblox-complied.jpg"/>
</div>

### 启动 NVBlox

将 Orbbec 相机通过数据线连接到 Jetson 后，首先在本地环境中启动 Orbbec ROS2 脚本：

```bash
cd ~/ros2_ws/src
source install/setup.bash

ros2 launch orbbec_camera <camera_name>.launch.py

# Example: ros2 launch orbbec_camera gemini2.launch.py
```

以下是部分支持的 `<camera_name>` 参数：

- gemini210
- gemini2
- gemini2L
- gemini_330_gmsl
- gemini_330_series

:::warning
请注意，不要在 Docker 容器内启动 Orbbec 脚本。请确保你已经按照前文教程安装好 Orbbec 驱动。⚠️
:::

Isaac ROS 容器默认与本地发布的 ROS2 进行桥接。在 Docker 容器中输入：

```bash
ros2 topic list
```

通常情况下，你应该能在 Docker 容器中看到 Orbbec 相机发布的以下数据主题：

```yaml
/camera/accel/imu_info
/camera/color/camera_info
/camera/color/image_raw
/camera/depth/camera_info
/camera/depth/image_raw
/camera/depth/points
/camera/depth_filter_status
/camera/device_status
/camera/gyro/imu_info
/camera/gyro_accel/sample
/camera/ir/camera_info
/camera/ir/image_raw
```

确保你可以读取 Orbbec 相机的数据主题。然后在 Isaac ROS 容器中启动 NVBlox 示例脚本：

```bash
cd ~/workspaces/isaac_ros-dev
source install/setup.bash

ros2 launch nvblox_examples_bringup orbbec_example.launch.py
```

你可以在 RViz 中看到 NVBlox 输出的 3D 占用栅格和网格：
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/other/rviz.jpg"/>
</div>

RViz 可以按如下方式进行配置。启用你想要的可视化结果，并选择可用的主题名称：
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/other/rviz-lan.jpg"/>
</div>

最后，通过将 AGX Orin 和 Orbbec 相机安装在移动 AGV 上，你可以实现视频中所示的效果：🎥

<div class="video-container">
  <iframe width="1029" height="579" src="https://www.youtube.com/embed/_TKNGejfGIo" title="Deploy NVBlox on reComputer Mini J501" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

这可以用于移动机器人进行障碍物检测，并构建场景的 3D 网格地图。🤖

## 参考资料

- [Isaac ROS Common GitHub 仓库](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common)
- [Isaac ROS NVBlox GitHub 仓库](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox.git)
- [Isaac NVBlox Orbbec GitHub 仓库](https://github.com/jjjadand/isaac-NVblox-Orbbec#)
- [ROS2 Humble 文档](https://docs.ros.org/en/humble/)
- [Orbbec SDK ROS2 文档](https://github.com/orbbec/OrbbecSDK_ROS2)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
