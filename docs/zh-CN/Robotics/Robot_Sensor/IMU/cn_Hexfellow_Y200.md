---
description: 本篇wiki提供如何上手HEXFELLOW Y200 IMU传感器
title: 使用Y200 IMU传感器
keywords:
- IMU
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig1.jpg
slug: /cn/hexfellow_y200
last_update:
  date: 06/18/2025
  author: ZhuYaoHui
---
# HEXFELLOW Y200 IMU传感器快速入门指南

Y200是一款专为机器人开发的9轴陀螺仪。该设备支持最高60V的电源输入，采用标准XT30 CAN接口，可快速集成到机器人网络中。其内部采用灌封工艺，具有出色的抗冲击性能，外壳采用加强结构设计，安装稳定可靠。

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig1.jpg" />
</div>


## 规格参数

### 角度输出参数

| 角度参数       |          | 数值                      | 备注     |
|----------------|----------|--------------------------|----------|
| **横滚角(Roll)** | 精度:    | 0.15°                   | 1σ RMS   |
|                | 量程:    | ±180°                   |          |
| **俯仰角(Pitch)**| 精度:    | 0.15°                   | 1σ RMS   |
|                | 量程:    | ±90°                    |          |
| **偏航角(Yaw，无参考)** | 精度: | 0.2°                   | 1σ RMS   |
|                | 量程:    | ±180°                   |          |
| **分辨率**     |          | 0.001°                  |          |

### 陀螺仪参数

| 参数               | 数值             | 备注                     |
|--------------------|------------------|--------------------------|
| **量程**           | ±2000°/s        |                          |
| **非线性度**       | ±0.05%FS        |                          |
| **噪声密度**       | 0.015°/s/√Hz    |                          |
| **零偏不稳定性**   | 5°/h            | 艾伦方差，1σ             |
| **带宽(-3dB)**     | 50Hz            |                          |
| **零偏**           | ±0.5°/s         | 1σ RMS                   |
| **温漂**           | ±1°/s           | 1σ RMS，-40~85°C         |

### 加速度计参数

| 参数                | 数值           | 备注                      |
|---------------------|----------------|---------------------------|
| **量程**            | ±12g          |                           |
| **非线性度**         | ±0.5%FS       |                           |
| **噪声密度**         | 190μg/√Hz     |                           |
| **零偏不稳定性**     | 0.05mg        | 艾伦方差，1σ               |
| **带宽(-3dB)**       | 50Hz          |                           |
| **零偏**             | ±20mg         | 1σ RMS                    |
| **温漂**             | ±20mg         | 1σ RMS，-40~85°C          |

### 其他参数

| 参数                  | 数值             | 备注                                  |
|-----------------------|------------------|---------------------------------------|
| **电压容限**          | 12-60V          | XT30 2+2接口，兼容USB-C供电但不支持USB-C |
| **通信接口**           | CAN              |                                       |
| **最大输出频率**       | 200Hz           |                                       |
| **尺寸**              | 60×60×15 mm     |                                       |
| **工作温度**          | -20~85°C        |                                       |

### 支持平台

- [x] **reComputer Mini**
- [x] **reComputer Robotics**

### 支持ROS版本

- [x] **ROS Noetic**
- [x] **ROS Humble**

### 外观安装尺寸

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig3.png"/>
</div>

## 在reComputer Jetson上使用IMU

我们提供基于SocketCAN的Linux驱动，这是与IMU配合使用的推荐方式。

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

我们的reComputer Mini和reComputer Robotics J40（如上图所示）均配备XT30 2+2 CAN通信接口，可同时为IMU提供供电和通信功能。

:::tip
重要提示：  
我们设备的CAN_H和CAN_L引脚定义与市面上大多数电机和传感器**位置相反**。因此接线时必须**对调H和L的连接顺序**以确保正常通信。更多设备的CAN使用教程请参考[此链接](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can)。  
:::

### 连接XT30 2+2线缆


<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig4.jpg"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig2.jpg"/>  
</div>


### 在Jetson上安装ROS

请参考教程[在reComputer Jetson上安装ROS2 Humble](/cn/install_ros2_humble)或[安装ROS1](/cn/install_ros2_humble)

### 启用CAN功能

**对于reComputer Robotics J401:**
```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
gpioset --mode=time --sec=60 2 3=0 & # 对于CAN1: gpioset --mode=time --sec=60 2 4=0 &
```

**对于reComputer Mini:**
```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
gpioset --mode=time --sec=30 0 43=0 # 对于CAN1: gpioset --mode=time --sec=30 0 106=0 &
```

### 安装依赖

克隆仓库：
```bash
cd ~/
pip3 install numpy==1.24
git clone https://github.com/hexfellow/hex_utils.git
```

构建包：
```bash
cd hex_utils
sudo apt-get install python3-venv
python3 -m build
```

安装包：
```bash
pip3 install dist/hex_utils-0.0.1-py3-none-any.whl
```

### 创建工作空间并获取源码

```shell
mkdir -p catkin_ws/src
cd catkin_ws/src
git clone git@github.com:hexfellow/hex_imu.git
```

### 构建代码

- **ROS1**
```shell
cd ../
catkin_make
```

- **ROS2**
```shell
cd ../
colcon build
```

### 运行测试

- **ROS1**
```shell
source devel/setup.bash --extend
roslaunch hex_imu canopen_imu.launch
```

- **ROS2**
```shell
source install/setup.bash --extend
ros2 launch hex_imu canopen_imu.launch.py
```

## 技术支持与产品讨论

感谢选择我们的产品！我们提供多种支持渠道，确保您获得顺畅的使用体验。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
