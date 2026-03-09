---
description: 本文档提供了将 SO100 Arm Kit 机械臂导入 NVIDIA 的 Isaac Sim 仿真平台并使用 ROS2 和 Python 脚本进行控制的说明。
title: Isaac Sim 中导入和控制 SO100Arm Kit
keywords:
  - Lerobot
  - Huggingface
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Isaac_sim_import_success.webp
slug: /lerobot_so100m_isaacsim
last_update:
  date: 05/15/2025
  author: ZhuYaoHui
createdAt: '2025-05-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/lerobot_so100m_isaacsim/
---

# 如何在 Isaac Sim 中导入和控制 SO100Arm Kit


## 简介

[SO-100ARM](https://github.com/TheRobotStudio/SO-ARM100) 是由 [TheRobotStudio](https://www.therobotstudio.com/) 推出的完全开源的机械臂项目。它包括从动臂和主导机械臂，并提供详细的 3D 打印文件和操作指南。[LeRobot](https://github.com/huggingface/lerobot/tree/main) 致力于为 PyTorch 提供真实世界机器人模型、数据集和工具。其目标是降低机器人技术的入门门槛，使每个人都能通过共享数据集和预训练模型来贡献和受益。

本文档提供了将 SO100 Arm Kit 机械臂导入 NVIDIA 的 Isaac Sim 仿真平台并使用 ROS2 和 Python 脚本进行控制的说明。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/buiqdmNQKwY?si=CvovjaHNQy2nZsR2" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 项目介绍

SO-ARM100 和 reComputer Jetson AI 智能机器人套件将高精度机械臂控制与强大的 AI 计算平台无缝结合，提供全面的机器人开发解决方案。该套件基于 Jetson Orin 或 AGX Orin 平台，结合 SO-ARM100 机械臂和 LeRobot AI 框架，为用户提供适用于教育、研究和工业自动化等多场景的智能机器人系统。
本文档提供了 SO ARM100 的组装和调试教程，并在 Lerobot 框架内实现数据收集和训练。

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

## 规格

| 规格 | Arm Kit | Arm Kit Pro |
|--|--|--|
| 类型 | Arm Kit | Arm Kit Pro |
| 自由度 | 6 | 6 |
| 最大扭矩 | 19.5kg.cm 7.4V | 30kg.cm 12V |
| 舵机 | STS3215 总线舵机 | STS3215 总线舵机 |
| 电源 | 5.5mm*2.1mm DC 5V4A | 5.5mm*2.1mm DC 12V1A |
| 角度传感器 | 12 位磁编码器 | 12 位磁编码器 |
| 推荐工作温度范围 | 0℃～40℃ | 0℃～40℃ |
| 通信方式 | UART | UART |
| 控制方式 | PC | PC |

## 材料清单 (BOM)

| 部件 | 数量 | 是否包含 |
|--|--|--|
| STS3215 舵机1 | 12 | ✅ |
| 电机控制板 | 2 | ✅ |
| USB-C 数据线 2 根 | 1 | ✅ |
| 电源2 | 2 | ✅ |
| 桌面夹具 | 1 | ❌ |
| 机械臂的 3D 打印部件 | 1 | ❌ |

:::caution
3D 打印部件和桌面夹具不包含在产品中。然而，SO-100ARM 提供了详细的 [3D 打印 STL 文件](https://github.com/TheRobotStudio/SO-ARM100/tree/main/stl_files_for_3dprinting) 和打印参数。此外，我们还提供了 [桌面夹具的 3D 打印部件](https://makerworld.com/zh/models/908660)。
:::

## 前置条件

  1. [熟悉我们的 Lerobot SO100Arm 基本使用教程](/cn/lerobot_so100m)。
  2. [根据教程安装 Isaac Sim](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_workstation.html)
  3. [根据教程完成 ROS2 的安装和配置](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html)

## 安装 Lerobot 环境

  **步骤 1. 克隆 Lerobot 项目**

  ```bash
    cd ~/
    git clone https://github.com/ZhuYaoHui1998/lerobot.git
    cd lerobot
  ```

  确保您已根据教程安装了 [Lerobot 环境](/cn/lerobot_so100m)
  
## 将 URDF 导入 Isaac Sim

  **步骤 1. 打开 Isaac Sim**

  **确保 Isaac Sim 已根据 NVIDIA 的 [官方教程](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_workstation.html) 安装，[ROS2 已安装并完成基本环境配置](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html)。使用如下图所示的参数打开 Isaac Sim 界面。**
  <div align="center">
      <img width={600}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/open_isaac_sim.png" />
  </div>

  **步骤 2. 使用 URDF 导入工具**

  **在 Isaac Sim 工具栏中打开 Isaac Utils → Workflows → URDF Importer**

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/isaacsim_tooltab.png" />
  </div>

  **步骤 3. 导入 URDF**

  **保持默认参数，在 Input 中浏览文件，并从克隆的 Lerobot 仓库中导入 URDF 文件，路径为 `/lerobot/SO-ARM100/URDF/SO_5DOF_ARM100_8j_URDF.SLDASM/urdf/SO_5DOF_ARM100_8j_URDF.SLDASM.urdf`**

  <div align="center">
      <img width={600}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/urdf_importer.png" />
  </div>

  <div align="center">
      <img width={600}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/urdf_file.png" />
  </div>

  **现在您可以看到我们的 SO100 机械臂已成功导入 Isaac Sim。**

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Isaac_sim_import_success.png" />
  </div>

**步骤 4. 添加物理元素**

**在 Isaac Sim 工具栏中，导航到 Create → Physics，并添加 `Physics Scene` 和 `Ground Plane`，以设置物理环境和地面。**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/import_physics.png" />
</div>

**步骤 5. 删除 `root_joint` 的 `Articulation Root`**

**在右侧的 Stage 面板中，找到 `root_joint`。点击它，然后在下面的 Properties 中，找到 Physics 下的 `Articulation Root`，点击右侧的 × 删除该根节点。**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/delete_root.png" />
</div>

**步骤 6. 添加 `root_joint` 的 `Articulation Root`**

**在 Stage 面板中，点击 SO100，右键单击，然后选择 Add → Physics → Articulation Root。**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/add_root.png" />
</div>

## 添加动作图

**步骤 1. 在工具栏中，导航到 Create → Visual Scripting 并添加 Action Graph。**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/add_graph.png" />
</div>

**步骤 2. 添加动作组件**

**在搜索框中，按顺序添加：On Playback Tick、Isaac Read Simulation Time、ROS2 Publish Joint State、Articulation Controller、ROS2 Subscribe Joint State。**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/add_graph_action.png" />
</div>

**为了更清楚地理解这一部分，请根据视频内容执行动作连接和基本参数配置。**

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/buiqdmNQKwY?si=sHjysqfqxPVz-r3T&amp;start=92" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

**步骤 3. 播放**

**点击右侧的 Play 按钮以正常启动动作。此时，使用 `ros2 topic list` 命令查看主题信息。**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/ros2topic.png" />
</div>

## **通过 ROS2 Python 控制机械臂运动**

**现在，您可以在 ROS2 环境中运行以下 Python 脚本来控制机械臂。这些脚本文件位于 `lerobot/lerobot/scripts/` 下，分别为 `control_motor.py` 和 `lerobot_publisher.py`。**

**`control_motor.py` 允许您单独发送特定舵机的角度，角度值范围为 -π 到 π。**

<details>
<summary>control_motor.py</summary>

```python
import threading

import rclpy
from sensor_msgs.msg import JointState

rclpy.init()
node = rclpy.create_node('position_velocity_publisher')
pub = node.create_publisher(JointState, 'joint_command', 10)

thread = threading.Thread(target=rclpy.spin, args=(node, ), daemon=True)
thread.start()

joint_state_position = JointState()

joint_state_position.name = ["Rotation", "Pitch","Elbow","Wrist_Pitch","Wrist_Roll","Jaw"]

joint_state_position.position = [0.2,0.2,float('nan'),0.2,0.2,0.2]
# joint_state_position.position = [0.0,0.0,0.0,0.0,0.0,0.0]

rate = node.create_rate(10)
try:
    while rclpy.ok():
        pub.publish(joint_state_position)

        rate.sleep()
except KeyboardInterrupt:
    pass
rclpy.shutdown()
thread.join()
```

</details>

**`lerobot_publisher.py` 实现了向舵机连续发送动作指令。**

<details>
<summary>lerobot_publisher.py</summary>

```python
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import JointState
import numpy as np
import time


class TestROS2Bridge(Node):
    def __init__(self):

        super().__init__("test_ros2bridge")

        # 创建发布者。此发布者将发布 JointState 消息到 /joint_command 主题。
        self.publisher_ = self.create_publisher(JointState, "joint_command", 10)

        # 创建 JointState 消息
        self.joint_state = JointState()

        self.joint_state.name = [
            "Rotation",
            "Pitch",
            "Elbow",
            "Wrist_Pitch",
            "Wrist_Roll",
            "Jaw"
        ]

        num_joints = len(self.joint_state.name)

        # 确保 Kit 的编辑器处于播放状态以接收消息
        self.joint_state.position = np.array([0.0] * num_joints, dtype=np.float64).tolist()
        self.default_joints = [0, 0, 0, 0, 0, 0]

        # 将运动限制在较小范围内（这不是机器人的范围，仅是运动范围）
        self.max_joints = np.array(self.default_joints) + 0.3
        self.min_joints = np.array(self.default_joints) - 0.3

        # 使用位置控制让机器人围绕每个关节摆动
        self.time_start = time.time()

        timer_period = 0.05  # 秒
        self.timer = self.create_timer(timer_period, self.timer_callback)

    def timer_callback(self):
        self.joint_state.header.stamp = self.get_clock().now().to_msg()

        joint_position = (
            np.sin(time.time() - self.time_start) * (self.max_joints - self.min_joints) * 0.5 + self.default_joints
        )
        self.joint_state.position = joint_position.tolist()

        # 将消息发布到主题
        self.publisher_.publish(self.joint_state)


def main(args=None):
    rclpy.init(args=args)

    ros2_publisher = TestROS2Bridge()

    rclpy.spin(ros2_publisher)

    # 显式销毁节点
    ros2_publisher.destroy_node()
    rclpy.shutdown()


if __name__ == "__main__":
    main()
```

</details>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/buiqdmNQKwY?si=3CizpKK3Nhj4Vlp9&amp;start=232" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 引用

TheRobotStudio 项目: [SO-ARM100](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface 项目: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson 容器](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI 实验室](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT 或 ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>