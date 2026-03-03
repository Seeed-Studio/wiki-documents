---
description: 本文档提供了使用 Isaac ROS AprilTag 的分步指南。
title: Isaac ROS AprilTag
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/isaac_ros_apriltag
last_update:
  date: 2025/5/28
  author: ZhuYaoHui
---

# Isaac ROS AprilTag  

## 前置条件  
在部署 AprilTag 之前，请确保 Isaac ROS 基础环境已在您的 reComputer 上成功设置完成 [安装指南](/cn/install_isaacros)。如果尚未安装 ROS2，请参考 [此文档](/cn/install_ros2_humble)。  

### Isaac ROS AprilTag 包的主题  
**订阅的主题：**  

| ROS 主题       | 接口                      | 描述                             |  
|-----------------|----------------------------|---------------------------------|  
| image         | sensor_msgs/Image        | 输入摄像头流。                  |  
| camera_info   | sensor_msgs/CameraInfo   | 输入摄像头内参流。              |  

**发布的主题：**  

| ROS 主题          | 类型                                              | 描述                                      |  
|--------------------|---------------------------------------------------|--------------------------------------------------|  
| tag_detections   | isaac_ros_apriltag_interfaces/AprilTagDetectionArray | AprilTag 检测消息数组。                     |  
| tf              | tf2_msgs/TFMessage                             | 检测到的 AprilTag（TagFamily:ID）相对于摄像头 frame_id 的位姿。 |  


## 1. Isaac ROS AprilTag 环境设置  

### 创建工作空间（如果已完成可跳过）  
```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

### 克隆包和 ROS Bag 数据  
```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_apriltag.git
cd ${ISAAC_ROS_WS}/src/isaac_ros_apriltag && \
  git lfs pull -X "" -I "resources/rosbags/quickstart.bag"
```

### 进入 Docker 容器  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```


## 2. 使用 ROS Bag 数据进行测试  

### 安装 AprilTag 包（在 Docker 内）  
```bash
sudo apt-get install -y ros-humble-isaac-ros-apriltag
```

### 启动 AprilTag 节点  
```bash
ros2 launch isaac_ros_apriltag isaac_ros_apriltag.launch.py
```

### 打开新终端（在 Docker 内）  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

### 播放 ROS Bag  
```bash
ros2 bag play --loop src/isaac_ros_apriltag/resources/rosbags/quickstart.bag
```

### 在 RViz2 中可视化  
在本地终端打开 RViz2，并添加 **Image** 和 **TF** 组件：  
```bash
ros2 run rviz2 rviz2
```

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/1.png" />
</div>



## 3. 使用 USB 摄像头进行测试  
确保本地已安装 ROS2。  

### 创建 USB 摄像头工作空间  
```bash
cd ~/
mkdir -p usbcam/src
cd usbcam/src
```

### 克隆并构建 `usb_cam` 包  
```bash
git clone https://github.com/ros-drivers/usb_cam.git
cd ..
colcon build
echo "source ~/usbcam/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### 检查摄像头格式  
连接摄像头并验证其设备路径（例如 `/dev/video*`）。测试命令：  
```bash
cd ~/usbcam
ros2 run usb_cam usb_cam_node_exe
```

<div align="center">
    <img width={400} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/2.png" />
</div>


#### 支持的像素格式：  
`rgb8`, `yuyv`, `yuyv2rgb`, `uyvy`, `uyvy2rgb`, `m4202rgb`, `mono8`, `mono16`, `y102mono8`, `raw_mjpeg`  

### 配置摄像头  
1. 修改 `/usbcam/src/usb_cam/config/params_1.yaml` 中的 `pixel_format`。  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/3.png" />
</div>

2. 调整 `frame_id`（默认值：`camera`）。  
3. 在 `/usbcam/src/usb_cam/launch/camera_config.py` 中修改主题名称（第 58 和 62 行），以匹配 AprilTag 的要求（`/image` 和 `/camera_info`）。  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/4.png" />
</div>

### 重新构建并启动摄像头  
```bash
cd ~/usbcam
colcon build
ros2 launch usb_cam camera.launch.py
```

### 运行 AprilTag 节点（在 Docker 内）  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
ros2 launch isaac_ros_apriltag isaac_ros_apriltag.launch.py
```

### 在 RViz2 中可视化  
将 **Fixed Frame** 设置为摄像头的 `frame_id`，添加订阅 `/image` 的 **Image** 组件，并启用 **TF**。  
*注意：此测试使用 200mm × 200mm 的 AprilTag。*  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/5.png" />
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>