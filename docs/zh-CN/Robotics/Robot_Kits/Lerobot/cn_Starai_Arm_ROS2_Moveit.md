---
description: 本维基提供的是 Starai Arm 机械臂ROS2 Moveit 使用教程。
title: StarAi 机械臂ROS2 Moveit
keywords:
- Moveit
- ROS2
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /cn/starai_arm_ros_moveit
last_update:
  date: 8/1/2025
  author: LiShanghang
---



# Starai Arm 机械臂ROS2 Moveit 使用教程
<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115603406916070&bvid=BV1HmUrBGEN6&cid=34225391454&p=1" title="bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

| **跟随臂 Viola** | **领导臂 Violin** | **跟随臂 Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://detail.tmall.com/item.htm?abbucket=14&id=877820346195&pisk=g1g-PB_1NKvkMpXPwvxD-sHz71ADnncPlYl1-J2lAxHxOAnoqpyuOwMZe8qQKb4p9xymr8cuPJUK_AHuEkjokrNgOa_QOWabGWymKwcoJm7K_XukayAzzbzURdvMSwhrayr0KlOKysGbsj_CAwt0lVl6JA9MSFcvV7znGd0h1yvLM5bQRuZCGEw4TgNIdu6bh-PUOTaQFIhb3-_5PWw7GENaNJsIdw6fh7P3dawQOrTbs-wQRyMIGIF3hJaQRvGjpu-8H_NAJ0MtvojDMR_CRqF8cnc7h9qxl7U0BbgRRw1UwuesN-p59m_4cXrK867LFbiZL5M5FdqrOmHYwyLcVPGxAAFqPFX8g0cjs-GO1NGuyc3TP0pV0zD-lrgSX6_IMzezc4qAeKeszjgaloY66jgqEbuxt6TQiA2ja4ap5Cz8P8aYg2vVPJnjA4qz8T9g4XixH7U141giWbKGIRFhVIdAYMr7g17h2CC0e5U4MRA8wMSUASPYIIdAYMr7gSeMwgSFYkNV.&rn=acacff6fbd3de1ee202eac8643c0e445&spm=a1z10.5-b-s.w4011-22390330418.50.1c211a1b6fFWjc&skuId=5898337868110" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> 淘宝来一单 🖱️</font></span></strong>
</a></div>

##  产品介绍

1.  **开源设计，便于二次开发**  
    本系列伺服电机由[华馨京科技](https://fashionrobo.com/)提供，可打造开源且易于定制的6+1自由度机械臂解决方案。

2.  **多负载双臂系统**  
    Violin作为主机械臂（Leader），在其臂展的70%伸展状态下，从机械臂（Follower）Viola的工作负载为300克，从机械臂（Follower）Cello的工作负载则为750克, Cello最大支持1000克。

3.  **支持ROS2、MoveIt2与Isaac Sim**  
    支持通过ROS2（机器人操作系统2）发布和订阅机械臂数据话题并实现对机械臂的控制，同时支持通过MoveIt2完成运动学逆解计算，也可在Isaac Sim（NVIDIA机器人仿真平台）中进行仿真操作。

4.  **支持LeRobot平台集成**  
    本产品专为集成[LeRobot平台](https://github.com/huggingface/lerobot)设计。该平台提供PyTorch模型、数据集及工具，可用于现实世界机器人任务中的模仿学习，涵盖数据采集、仿真、训练与部署等环节。

5.  **开源软件开发工具包（SDK）**  
    支持Python与C++语言的SDK开发。

6.  **按键悬停功能**  
    模仿重力补偿原理，可通过按键控制机械臂在任意位置悬停。

7.  **模块化末端执行器**  
    支持用户自行DIY，实现快速替换。

8.  **丰富的学习资源**  
    我们提供全面的开源学习资源，包括环境搭建指南、安装调试教程及自定义抓取任务示例，助力用户快速上手并开发机器人应用。

9.  **兼容NVIDIA平台**  
    支持通过NVIDIA Jetson平台进行部署。


## 规格参数

| 项目（Item）               | 跟随臂 \| Viola                          | 领导臂 \| Violin                        | 跟随臂 \| Cello                        |
| -------------------------- | ------------------------------------------ | ----------------------------------------- | ---------------------------------------- |
| 自由度（Degrees of Freedom） | 6+1                                        | 6+1                                       | 6+1                                      |
| 最大工作半径（Reach）       | 470毫米                                    | 470毫米                                   | 670毫米                                  |
| 最大臂展（Span）           | 940毫米                                    | 940毫米                                   | 1340毫米                                 |
| 重复定位精度（Repeatability） | 2毫米                                      | -                                         | 1毫米                                    |
| 工作负载（Working Payload） | 300克（在70%工作半径下）                   | -                                         | 750克（在70%工作半径下）                 |
| 伺服电机（Servos）         | RX8-U50H-M × 2<br/>RA8-U25H-M × 4<br/>RA8-U26H-M × 1 | RX8-U50H-M × 2<br/>RA8-U25H-M × 4<br/>RA8-U26H-M × 1 | RX18-U100H-M × 3<br/>RX8-U50H-M × 3<br/>RX8-U51H-M × 1 |
| 平行夹爪套件（Parallel Gripper Kit） | ✅（支持）                                  | -                                         | ✅（支持）                                |
| 腕部旋转（Wrist Rotate）    | 支持（Yes）                                | 支持（Yes）                               | 支持（Yes）                              |
| 任意位置悬停（Hold at any Position） | 支持（Yes）                          | 支持（Yes，带手柄按键）                   | 支持（Yes）                              |
| 腕部相机安装座（Wrist Camera Mount） | 提供参考3D打印文件              | -                                         | 提供参考3D打印文件                       |
| 兼容LeRobot（Works with LeRobot） | ✅（兼容）                          | ✅（兼容）                                 | ✅（兼容）                                |
| 兼容ROS 2（Works with ROS 2） | ✅（兼容）                              | ✅（兼容）                                 | ✅（兼容）                                |
| 兼容MoveIt2（Works with MoveIt2） | ✅（兼容）                          | ✅（兼容）                                 | ✅（兼容）                                |
| 兼容Gazebo（Works with Gazebo） | ✅（兼容）                          | ✅（兼容）                                 | ✅（兼容）                                |
| 通信集线器（Communication Hub） | UC-01                                  | UC-01                                     | UC-01                                    |
| 电源适配器（Power Supply）  | 12伏10安/120瓦，XT30接口                   | 12伏10安/120瓦，XT30接口                  | 12伏25安/300瓦，XT60接口                 |



有关舵机更多资讯，请访问以下链接。

[RA8-U25H-M](https://fashionrobo.com/actuator-u25/23396/)

[RX18-U100H-M](https://fashionrobo.com/actuator-u100/22853/)

[RX8-U50H-M](https://fashionrobo.com/actuator-u50/136/)


## 环境依赖

No LSB modules are available.

Distributor ID: Ubuntu

Description:    Ubuntu 22.04.5 LTS

Release:        22.04

Codename:       Jammy

ROS2:           Humble

### 安装ROS2 Humble

[ROS2 Humble 安装指南](https://wiki.seeedstudio.com/cn/install_ros2_humble/)

### 安装Moveit2

```bash
sudo apt install ros-humble-moveit*
```

### 安装舵机SDK库

```bash
sudo pip install pyserial
sudo pip install fashionstar-uart-sdk
```

### 创建工作空间并初始化

```bash
mkdir -p ~/starai_ws/src
cd ~/starai_ws
colcon build
```

### 克隆starai-arm-moveit2功能包
```
cd ~/starai_ws/src
git clone https://github.com/Welt-liu/starai-arm-moveit2.git
cd ~/starai_ws
colcon build
echo "source ~/starai_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## Viola机械臂

### Starai Arm Moveit2仿真脚本（可选）

```bash
ros2 launch viola_configure demo.launch.py 
```


### 使用真实的机械臂

#### 步骤 1:开启手臂控制节点

启动手臂硬件驱动，手臂会移动到零位。

```bash
ros2 launch viola_moveit_config driver.launch.py
```

#### 步骤 2: 启动Moveit2节点

```bash
ros2 launch viola_moveit_config actual_robot_demo.launch.py
```

#### 步骤 3: 手臂末端位姿读写示例

```bash
ros2 launch viola_moveit_config moveit_write_read.launch.py
```


## Cello机械臂

### Starai Arm Moveit2仿真脚本（可选）

```bash
ros2 launch cello_moveit_config demo.launch.py 
```


### 使用真实的机械臂

#### 步骤 1:开启手臂控制节点

启动手臂硬件驱动，手臂会移动到零位。

```bash
ros2 launch cello_moveit_config driver.launch.py
```

#### 步骤 2: 启动Moveit2节点

```bash
ros2 launch cello_moveit_config actual_robot_demo.launch.py
```

#### 步骤 3: 手臂末端位姿读写示例

```bash
ros2 launch cello_moveit_config moveit_write_read.launch.py
```

## 位姿话题发送节点示例

请更新文件`src/arm_moveit_write/src/topic_publisher.cpp`

```bash
    // // viola
    // dataset1_ = { 
    //   {0.003, -0.204, 0.274},       // position
    //   {0.014, 0.717, 0.017, 0.696}, // orientation
    //   "open"                         // gripper_state
    // };
    // dataset2_ = {
    //   {-0.00, -0.34, 0.177},        // position
    //   {0.0, 0.7071, 0.0, 0.7071},   // orientation
    //   "close"                        // gripper_state
    // };

    // cello
    dataset1_ = {
      {-0.278, 0.000, 0.438},       // position
      {0.707, 0.000, -0.707, 0.000}, // orientation
      "open"                         // gripper_state
    };
    dataset2_ = {
      {-0.479, -0.000, 0.369},        // position
      {0.707, -0.000, -0.707, 0.000},   // orientation
      "close"                        // gripper_state
    }

```

```bash
colcon build
source install/setup.sh
ros2 run arm_moveit_write topic_publisher 
```



<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/L82y7e9uk9Q?si=Fa8YorBPgbRszYGn" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## FAQ

- 如果rivz2界面出现频闪，可以尝试以下指令:

    ```bash
    export QT_AUTO_SCREEN_SCALE_FACTOR=0
    ```