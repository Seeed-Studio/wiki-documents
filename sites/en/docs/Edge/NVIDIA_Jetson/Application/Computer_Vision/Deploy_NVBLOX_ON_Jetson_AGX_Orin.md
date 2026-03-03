---
description: This wiki provides a comprehensive, step-by-step guide for deploying NVBlox with Orbbec RGB-D camera on Jetson AGX Orin devices. It covers environment setup, dependency installation, Isaac ROS integration, and real-time 3D mapping demonstrations for robotics applications.
title: Deploy NVBlox with Orbbec Camera on Jetson AGX Orin
keywords:
- NVBlox
- Jetson AGX Orin
- Isaac ROS
- ROS2
- Computer Vision
- Robotics
- 3D Perception
- RGB-D Camera
- Edge AI
- TSDF
- ESDF
- 3D Mapping
image: https://files.seeedstudio.com/wiki/other/page-nvblox.jpg
slug: /deploy_nvblox_jetson_agx_orin
sku: 101090144,100020039
last_update:
  date: 2026-01-20
  author: Dayu
---

<div align="center">
    <img width={700}
     src="https://media.githubusercontent.com/media/NVIDIA-ISAAC-ROS/.github/release-4.0/resources/isaac_ros_docs/repositories_and_packages/isaac_ros_nvblox/isaac_sim_nvblox_humans.gif"/>
</div>

## Introduction

<div style={{ textAlign: "justify" }}>
[Isaac ROS NVBlox](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox) is a high-performance GPU-accelerated 3D mapping framework developed by NVIDIA for real-time robotic perception. Unlike monocular depth estimation models, NVBlox consumes true depth input from RGB-D cameras or stereo cameras to construct accurate 3D scene representations.

It builds dense TSDF (Truncated Signed Distance Field) and ESDF (Euclidean Signed Distance Field) maps in real time, enabling high-quality 3D reconstruction, obstacle-aware navigation, and collision checking. NVBlox can also generate meshes, voxel-based cost maps, and 3D occupancy representations suitable for autonomous mobile robots (AMRs).

This makes it particularly valuable for edge AI applications where hardware constraints and computational efficiency are critical considerations. This wiki demonstrates how to deploy Isaac ROS NVBlox on **Jetson AGX Orin** with **ROS 2** integration, using an **Orbbec RGB-D camera** and a mobile robot platform to achieve a fully on-device perception and navigation pipeline. 🚀

</div>

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5012-with-GMSL-extension-board-p-6682.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱</font></span></strong>
    </a>
</div>

## Prerequisites

- **[reComputer J50](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)** (Jetson AGX Orin) with JetPack 6.2
- Orbbec RGB-D Camera 📷
- Mobile robot chassis (optional) 🤖
- [ROS2 Humble](https://wiki.seeedstudio.com/install_ros2_humble/) environment installed
- Orbbec ROS2 SDK installation required
- Isaac ROS installation required

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/page-nvblox.jpg"/>
</div>

## Technical Highlights

- **Real-Time 3D Mapping**: NVBlox generates dense TSDF and ESDF maps in real-time using GPU acceleration, enabling high-quality 3D scene reconstruction for robotics applications.

- **RGB-D Camera Integration**: Leverages true depth information from Orbbec RGB-D cameras to create accurate 3D representations without relying on monocular depth estimation.

- **Optimized for Edge Deployment**: Specifically designed for efficient inference on edge devices like Jetson AGX Orin, with CUDA optimization for maximum performance.

- **Navigation-Ready Outputs**: Generates meshes, voxel-based cost maps, and 3D occupancy grids suitable for autonomous navigation and collision avoidance.

- **ROS2 Native Support**: Provides seamless ROS2 Humble integration with standard robotics message types for easy integration into existing robotic systems.

## Environment Setup

### Install Basic Dependencies

Install the following dependencies in your terminal:

```bash
sudo apt update
sudo apt-get install python3-pip # Install Python3
sudo apt-get install nvidia-jetpack # Install developer tools
sudo pip3 install jetson-stats # Install Jtop to check JetPack version
sudo apt-get install git-lfs # Install Git LFS
```

### Install Docker CE

Update software sources:

```bash
sudo apt-get update
```

Install basic dependencies:

```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common # Install essential packages to allow apt over HTTPS
```

Add Docker's official GPG key:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Add Docker's stable repository:

```bash
sudo add-apt-repository \
   "deb [arch=arm64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

Update package list again (new repository added):

```bash
sudo apt-get update
```

Install Docker CE (Community Edition):

```bash
sudo apt-get install docker-ce
```

Ensure Docker starts:

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

Add permissions (add user to Docker group):

```bash
sudo usermod -aG docker $USER
```

Reboot system or logout:

```bash
sudo reboot
```

### Install Isaac ROS 3.2

Create workspace and add to environment:

```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

Enter workspace and clone packages:

```bash
cd ${ISAAC_ROS_WS}/src
git clone -b release-3.2 https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
```

Pull official Isaac Common Docker image and enter Docker:

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

Running `./scripts/run_dev.sh` will automatically install Isaac ROS and start the container.

:::tip
Installing Isaac ROS requires logging into NVIDIA NGC in the terminal and entering your NGC account-generated API Key 🔑
:::

### Install Orbbec SDK ROS2

Using Orbbec RGB-D cameras requires installing the SDK driver. This guide uses the Build from Source method.

Install dependencies:

```bash
sudo apt install libgflags-dev nlohmann-json3-dev \
ros-$ROS_DISTRO-image-transport ros-${ROS_DISTRO}-image-transport-plugins ros-${ROS_DISTRO}-compressed-image-transport \
ros-$ROS_DISTRO-image-publisher ros-$ROS_DISTRO-camera-info-manager \
ros-$ROS_DISTRO-diagnostic-updater ros-$ROS_DISTRO-diagnostic-msgs ros-$ROS_DISTRO-statistics-msgs ros-$ROS_DISTRO-xacro \
ros-$ROS_DISTRO-backward-ros libdw-dev libssl-dev mesa-utils libgl1 libgoogle-glog-dev
```

Create a colcon workspace:

```bash
mkdir -p ~/ros2_ws/src

cd ~/ros2_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

Enter the working directory and compile:

```bash
cd ~/ros2_ws
colcon build --event-handlers console_direct+ --cmake-args -DCMAKE_BUILD_TYPE=Release
```

To allow Orbbec cameras to be recognized correctly on Linux, install the udev rules.

Enter the source code working directory and run the script:

```bash
cd ~/ros2_ws/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

:::note
If this script is not executed, opening the device will fail due to permission issues. You would need to run the sample with sudo (administrator privileges). ⚠️
:::

## Deploy NVBlox

### Build NVBlox

Get the Orbbec camera-adapted NVBlox source code and copy it to the working directory:

```bash
git clone https://github.com/jjjadand/isaac-NVblox-Orbbec.git
cp -r isaac-NVblox-Orbbec/src/isaac_ros_nvblox/ ${ISAAC_ROS_WS}/src/
cp -r isaac-NVblox-Orbbec/src/isaac_ros_nitros/ ${ISAAC_ROS_WS}/src/
cp -r isaac-NVblox-Orbbec/build/ ${ISAAC_ROS_WS}/
```

Enter the workspace and start the Isaac ROS Docker container:

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

(Optional) If you encounter an error similar to the following:

```bash
Finished pulling pre-built base image: nvcr.io/nvidia/isaac/ros:aarch64-ros2_humble_4c0c55dddd2bbcc3e8d5f9753bee634c
Nothing to build, retagged nvcr.io/nvidia/isaac/ros:aarch64-ros2_humble_4c0c55dddd2bbcc3e8d5f9753bee634c as isaac_ros_dev-aarch64
Running isaac_ros_dev-aarch64-container
docker: Error response from daemon: failed to create task for container: failed to create shim task: OCI runtime create failed: could not apply required modification to OCI specification: error modifying OCI spec: failed to inject CDI devices: unresolvable CDI devices nvidia.com/gpu=all
```

You can try running the following command in the terminal to fix it:

```bash
sudo nvidia-ctk cdi generate --mode=csv --output=/etc/cdi/nvidia.yaml
```

After successfully starting the container, you should see something like this:
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/isaac-ros.jpg"/>
</div>

Install additional dependencies:

```bash
sudo apt update
sudo apt-get install -y ros-humble-magic-enum
sudo apt-get install -y ros-humble-foxglove-msgs
```

Add CUDA environment variables to `.bashrc`:

```bash
echo '
CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export CUDACXX=$CUDA_HOME/bin/nvcc
' >> ~/.bashrc
```

Create symbolic links:

```bash
sudo ln -sf /opt/ros/humble/include/magic_enum.hpp /usr/include/magic_enum.hpp

sudo mkdir -p /opt/ros/humble/include/foxglove_msgs
sudo ln -sfn /opt/ros/humble/include/foxglove_msgs/foxglove_msgs/msg /opt/ros/humble/include/foxglove_msgs/msg
```

Build and initialize the workspace in `/workspaces/isaac_ros-dev`:

```bash
colcon build --symlink-install --cmake-args -DBUILD_TESTING=OFF
source install/setup.bash
```

After compilation is complete, you should see results like this:
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/NVblox-complied.jpg"/>
</div>

### Launch NVBlox

After connecting the Orbbec camera to the Jetson via data cable, first start the Orbbec ROS2 script in the local environment:

```bash
cd ~/ros2_ws/src
source install/setup.bash

ros2 launch orbbec_camera <camera_name>.launch.py

# Example: ros2 launch orbbec_camera gemini2.launch.py
```

Here are some supported `<camera_name>` parameters:

- gemini210
- gemini2
- gemini2L
- gemini_330_gmsl
- gemini_330_series

:::warning
Note that you should NOT start the Orbbec script inside the Docker container. Make sure you have installed the Orbbec driver following the previous tutorial. ⚠️
:::

The Isaac ROS container bridges with locally published ROS2 by default. In the Docker container, enter:

```bash
ros2 topic list
```

Normally, you should see the following data topics published by the Orbbec camera in the Docker container:

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

Ensure you can read the Orbbec camera data topics. Then start the NVBlox example script in the Isaac ROS container:

```bash
cd ~/workspaces/isaac_ros-dev
source install/setup.bash

ros2 launch nvblox_examples_bringup orbbec_example.launch.py
```

You can see NVBlox's output of 3D occupancy grids and meshes in RViz:
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/other/rviz.jpg"/>
</div>

RViz can be configured as shown below. Enable the visualization results you want and select available topic names:
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/other/rviz-lan.jpg"/>
</div>

Finally, by mounting the AGX Orin and Orbbec camera on a mobile AGV, you can achieve the effect shown in the video: 🎥

<div class="video-container">
  <iframe width="1029" height="579" src="https://www.youtube.com/embed/_TKNGejfGIo" title="Deploy NVBlox on reComputer Mini J501" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

This can be used for obstacle detection and building 3D mesh maps of scenes for mobile robots. 🤖

## References

- [Isaac ROS Common GitHub Repository](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common)
- [Isaac ROS NVBlox GitHub Repository](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox.git)
- [Isaac NVBlox Orbbec GitHub Repository](https://github.com/jjjadand/isaac-NVblox-Orbbec#)
- [ROS2 Humble Documentation](https://docs.ros.org/en/humble/)
- [Orbbec SDK ROS2 Documentation](https://github.com/orbbec/OrbbecSDK_ROS2)

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
