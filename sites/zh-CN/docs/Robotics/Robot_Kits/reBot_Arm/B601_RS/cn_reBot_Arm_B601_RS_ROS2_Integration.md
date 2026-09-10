---
description: 本教程介绍如何基于 reBot Arm B601-RS 搭建 ROS2 控制工作空间，完成 SocketCAN 连接、机械臂控制、RViz 可视化和 MoveIt 2 集成。
title: reBot Arm B601-RS ROS2 集成
keywords:
  - reBot Arm
  - B601-RS
  - ROS2
  - Humble
  - Jazzy
  - SocketCAN
  - RViz
  - MoveIt 2
  - 机械臂
  - 机器人
slug: /rebot_arm_b601_rs_ros2_integration
last_update:
  date: 2026-06-10
  author: YinHaizhou
translation:
  skip: [[zh-CN]]
createdAt: '2026-06-10'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_ros2_integration/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# reBot Arm B601-RS ROS2 集成教程

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://detail.tmall.com/item.htm?id=1057521963559" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Humble | Jazzy-blue.svg" alt="ROS2 Humble | Jazzy" />
    <img src="https://img.shields.io/badge/Python-3.10%2B-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Version-v0.3.0-brightgreen.svg" alt="Version v0.3.0" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
</p>

<p align="center">
  <strong>ROS2 控制 · SocketCAN · RViz 可视化 · MoveIt 2 支持 · 重力补偿</strong>
</p>

本教程介绍如何通过在工作空间 `rebotarm_ros2` 中运行 ROS2 实现对 reBot Arm B601-RS 的控制。该工作空间将接入 Pinocchio 逆运动学、轨迹规划和重力补偿功能的 `reBotArm_control_py` 机械臂 Python SDK 封装为 ROS2 topic、service 和 action，方便用户接入上层规划、RViz 可视化、重力补偿、夹爪控制和二次开发流程。

:::note
本文默认以 `Ubuntu 24.04 + ROS2 Jazzy` 为主要环境。ROS2 Humble / Ubuntu 22.04 可参考相同流程使用。
:::

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/ros2/MoveIt2_RS.gif" alt="reBot Arm B601-RS MoveIt 2 demo" />
</p>

## 项目特点

1. **标准 ROS2 接口**  
   提供 `/rebotarm/joint_states`、`/rebotarm/arm_status`、`FollowJointTrajectory`、`GripperCommand`、`MoveToPose` 等常用接口。

2. **提供正逆运动学、轨迹规划和重力补偿等功能节点**  
   提供开箱即用的正逆运动学、轨迹规划和重力补偿等控制节点，支持 RViz 可视化。

3. **MoveIt 2 集成**  
   提供 MoveIt 2 配置和应用 demo，支持 RViz MotionPlanning 插件进行仿真规划，也可配合硬件控制节点进行真实机械臂执行。

## 规格参数

本教程硬件由 [矽递科技 Seeed Studio](https://www.seeedstudio.com/) 提供。

| 参数 | 规格 |
|---|---|
| 机械臂型号 | reBot Arm B601-RS |
| 自由度 | 6-DOF + 夹爪 |
| 通信方式 | CAN |
| 默认 CAN 通道 | `can0` |
| 默认 arm 控制模式 | `mit` |
| 推荐系统 | Ubuntu 24.04 + ROS2 Jazzy + Python 3.12 |
| 参考系统 | Ubuntu 22.04 + ROS2 Humble + Python 3.10 |

## 材料清单（BOM）

| 部件 | 数量 | 是否包含 |
|---|---|---|
| reBot Arm B601-RS 机械臂 | 1 | ✅ |
| 夹爪 | 1 | ✅ |
| CAN 适配器 | 1 | ✅ |
| 电源适配器 | 1 | ✅ |
| 通信线缆 | 1 | ✅ |
| Ubuntu 主机 | 1 | 自备 |

## 接线说明

1. 将 CAN 适配器连接到机械臂 CAN 总线。
2. 将夹爪电机接入同一条 CAN 总线。
3. 接通机械臂电源，并将 CAN 适配器接入主机。
4. 确认主机识别到 CAN 设备：

```bash
ip -br link
```

启动 CAN 接口：

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

## 环境要求

| 项目 | 推荐要求 |
|---|---|
| 操作系统 | Ubuntu 24.04，Ubuntu 22.04 可参考 |
| ROS2 | Jazzy，Humble 可参考 |
| Python | 系统 Python，Jazzy 通常为 3.12，Humble 通常为 3.10 |

## 安装步骤

### 步骤 0. 完成机械臂基础准备

开始 ROS2 集成前，请先完成 [reBot Arm B601-RS 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/) 中的内容，包括机械臂组装、电机 ID 配置、零点初始化等前置工作。

### 步骤 1. 安装适合 Ubuntu 系统版本的 ROS2

请参考 Seeed Studio Wiki ROS2 安装文档或 ROS2 官方文档安装：

- [ROS2 Jazzy Ubuntu 安装教程](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html)
- [ROS2 Humble Ubuntu 安装教程](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)
- [Seeed Studio Wiki ROS2 Humble 安装教程](https://wiki.seeedstudio.com/install_ros2_humble/)

### 步骤 2. 安装构建工具和 ROS 依赖

安装 colcon、pip、Git 和本工作空间需要的 ROS 包。下面命令使用当前终端的 `ROS_DISTRO`：

```bash
sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-${ROS_DISTRO}-control-msgs \
  ros-${ROS_DISTRO}-trajectory-msgs \
  ros-${ROS_DISTRO}-tf-transformations \
  ros-${ROS_DISTRO}-robot-state-publisher \
  ros-${ROS_DISTRO}-rviz2 \
  ros-${ROS_DISTRO}-pinocchio
```

安装后可以验证：

```bash
source /opt/ros/${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"
```

### 步骤 3. 克隆代码仓库

优先使用 Seeed-Projects 官方仓库：

```bash
git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2
```



### 步骤 4. 安装 motorbridge

`motorbridge` 从 PyPI 官方源安装：

```bash
python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge
```

如果使用 Ubuntu 22.04 / ROS2 Humble，通常可以去掉 `--break-system-packages`：

```bash
python3 -m pip install --user --index-url https://pypi.org/simple motorbridge
```

### 步骤 5. 获取底层 SDK

```bash
mkdir -p third_party
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py
```

### 步骤 6. 构建工作空间

```bash
source /opt/ros/${ROS_DISTRO}/setup.bash
colcon build --symlink-install
source install/setup.bash
```

验证可执行入口：

```bash
ros2 pkg executables rebotarmcontroller
```

期望至少看到：

```text
rebotarmcontroller reBotArmController
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose
```

## 快速启动

:::caution
在正式开始使用机械臂前请注意：**机械臂的控制器具有较高自由度，启用控制器或者给机械臂上电前务必注意机械臂工作空间内无人和障碍物。同时，请严格审查每一次对机械臂的运动控制，避免出现意外。严禁危险操作，造成后果自负。**
:::

### 启动完整系统

先确认 CAN 接口已经启动：

```bash
ip -details link show can0
```

完整 bringup 会启动：

- `reBotArmController` 控制节点
- `robot_state_publisher`
- 可选 RViz

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0
```

如果长期只使用 B601-RS，也可以手动将 `src/rebotarm_bringup/config/rebotarm_hardware.yaml` 中的 `default_model` 修改为 `rs`。修改后可以省略 `model:=rs`，只保留实际 CAN 通道参数，例如：

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=can0
```

### 启动 RViz 可视化

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=true
```

如果 RViz 中模型看起来很小，可以在 RViz 左侧 `Views` 面板中调整：

- 将 `Target Frame` 设为 `base_link`
- 将视角类型切换为 `Move Camera`
- 调整 `Distance`，例如改为 `1.0` 或 `1.5`
- 确认 `Fixed Frame` 为 `base_link`

### 只启动控制节点

如果不需要 URDF 和 RViz：

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0
```

请通过 ros launch 的方式启动节点，因为 launch 文件会传入 `rebotarm_bringup/config` 中的硬件配置。

## ROS2 命名空间

默认命名空间为：

```text
/rebotarm
```

因此所有 topic、service 和 action 都会带有 `/rebotarm` 前缀，例如：

```text
/rebotarm/joint_states
/rebotarm/enable
/rebotarm/move_to_pose
```

如果有多机械臂控制需求，可以在 launch 时修改命名空间进行重映射：

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 arm_namespace:=right_arm
```

此时 `/rebotarm/joint_states` 会变为 `/right_arm/joint_states`。

## 常用 API

### 状态 Topic

| API | 类型 | 说明 |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | 6 轴关节位置、速度和力矩，包含 RViz 夹爪可视化关节 |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | 控制模式、使能状态、状态机和错误码 |
| `/rebotarm/joints/<joint>/state` | `rebotarm_msgs/msg/JointMotorState` | 单关节电机状态 |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | 夹爪电机状态 |

示例：

```bash
ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once
```

### Service

| API | 类型 | 说明 |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | 使能机械臂 |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | 失能机械臂 |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | 安全回零 |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | 设置全部或单个关节零点 |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | IK 预检查和目标关节角求解 |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | 设置夹爪电机位置，单位 rad |
| `/rebotarm/gripper/open` | `rebotarm_msgs/srv/GripperCommand` | 按配置打开夹爪 |
| `/rebotarm/gripper/close` | `rebotarm_msgs/srv/GripperCommand` | 按配置闭合夹爪 |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | 启动重力补偿 |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | 停止重力补偿 |

### Action

| API | 类型 | 说明 |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | 末端位姿移动 |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | 标准关节轨迹兼容入口 |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | 标准夹爪 action |

## 基础控制示例

### 1. 使能机械臂

```bash
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
```

### 2. 移动到末端 Pose

```bash
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"
```

`move_to_pose` action 通过 SDK 末端控制器执行。B601-RS 的 arm 控制模式在 `rebotarm_hardware.yaml` 中默认为 `mit`。

### 3. 发送关节目标

```bash
ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"
```

### 4. 控制夹爪

```bash
ros2 service call /rebotarm/gripper/open rebotarm_msgs/srv/GripperCommand "{}"
ros2 service call /rebotarm/gripper/close rebotarm_msgs/srv/GripperCommand "{}"
```

也可以发送明确的夹爪电机位置：

```bash
ros2 service call /rebotarm/gripper/set rebotarm_msgs/srv/SetGripper "{position: 5.0}"
```

### 5. 安全回零并失能

```bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

## 演示示例

所有示例都假设已经启动 `reBotArmController`：

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0
```

### 关节移动示例

一次性控制 6 个关节，单位 rad：

```bash
ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0
```

只控制一个关节：

```bash
ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0
```

### 末端 Pose 示例

```bash
ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0
```

### 重力补偿示例

```bash
ros2 run rebotarmcontroller GravityCompensation
```

脚本启动时会先调用 `/rebotarm/enable`，再启动重力补偿。按 `Ctrl+C` 退出时，脚本会依次调用：

1. `/rebotarm/gravity_compensation/stop`
2. `/rebotarm/safe_home`
3. `/rebotarm/disable`

这样可以让机械臂先停止重力补偿，再回到安全零位并失能。

也可以手动调用对应服务：

```bash
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/start std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/stop std_srvs/srv/Trigger
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

### 夹爪交互示例

```bash
ros2 run rebotarmcontroller GripperControl
```

运行后输入：

```text
o / open    打开夹爪
c / close   闭合夹爪
q / quit    退出
```

## 配置说明

默认配置位于：

```text
src/rebotarm_bringup/config/
```

| 文件 | 说明 |
|---|---|
| `rebotarm_hardware.yaml` | B601-RS 的 ROS2 上层硬件选择和 SDK 参数覆盖配置 |
| `driver_params.yaml` | ROS 参数示例 |

`rebotarm_hardware.yaml` 顶部的 `default_model` 默认可能为 `dm`。如果希望 B601-RS 成为默认型号，可以改为：

```yaml
default_model: rs
```

修改后，未显式传入 `model:=...` 时会自动使用 B601-RS 配置。

常用 launch 参数：

| 参数 | 默认值 | 说明 |
|---|---|---|
| `hardware_config` | bringup 内置 `rebotarm_hardware.yaml` | ROS2 上层硬件配置路径 |
| `model` | `rs` | 本教程命令显式传入 `rs`，用于选择 B601-RS 配置 |
| `channel` | `can0` | SocketCAN 通道 |
| `joint_state_rate` | `100.0` | `/rebotarm/joint_states` 发布频率 |
| `cmd_arbitration` | `reject` | 轨迹运行中 arm joint 低层 cmd 仲裁，`reject` 或 `preempt` |
| `arm_namespace` | `rebotarm` | ROS 命名空间前缀 |
| `frame_id` | `base_link` | 机械臂基座坐标系 |
| `ee_frame_id` | `gripper_end` | 末端坐标系 |
| `use_rviz` | `false` | 是否启动 bringup RViz |
| `disable_after_safe_home` | `true` | 该参数控制 safe home 完成后是否失能电机 |

B601-RS 在 `rebotarm_hardware.yaml` 中的默认关键配置：

| 项目 | 默认值 |
|---|---|
| 通信通道 | `can0` |
| arm 控制模式 | `mit` |
| 夹爪 open 位置 | `5.0` |
| 夹爪 close 位置 | `0.0` |
| 重力补偿关节 2/3 输出增益 | `1.5` |

## 低层 Command Topic

ROS2 工作空间也提供低层电机调试 topic：

| API | 类型 | 说明 |
|---|---|---|
| `/rebotarm/joints/<joint>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | 单关节 MIT raw command |
| `/rebotarm/joints/<joint>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | 单关节位置速度 raw command |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | 夹爪 MIT raw command |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | 夹爪位置速度 raw command |

:::caution
低层 command topic 面向调试和实验，不做 IK、轨迹规划或 URDF 合法性检查。应用层运动建议优先使用 `/move_to_pose`、`/follow_joint_trajectory`、`/gripper/set` 等 service/action。
:::

## MoveIt 2

MoveIt 2 是用于机械臂运动规划的框架，这里主要负责逆解、碰撞检测、轨迹规划和轨迹执行，并通过独立的 demo 包将应用流程与底层驱动隔离开。
更多内容可参考官方 [MoveIt 2 文档](https://moveit.picknik.ai/main/index.html)。

MoveIt 相关内容集中在两个包：

| 包 | 作用 |
|---|---|
| `rebotarm_moveit_config` | 机械臂模型、SRDF、运动学、joint limits、controller 和 RViz 配置 |
| `rebotarm_moveit_demos` | 基于 MoveIt 2 的应用 demo |

MoveIt 环境使用 `ros2_control` 的模拟硬件和 `move_group` 进行规划执行，适合在 RViz 中验证模型、IK、轨迹规划和 demo 流程。

本仓库同样提供了硬件接口的支持。接入真实硬件前，请先确认机械臂零点配置、关节方向、限位、速度和夹爪开闭范围相关配置准确或者保持仓库默认配置。

### MoveIt 环境配置

先确认已经加载 ROS2 环境。下面的命令会使用当前 `ROS_DISTRO` 安装对应版本依赖：

```bash
sudo apt update
sudo apt install -y \
  ros-${ROS_DISTRO}-moveit \
  ros-${ROS_DISTRO}-moveit-configs-utils \
  ros-${ROS_DISTRO}-moveit-kinematics \
  ros-${ROS_DISTRO}-moveit-planners-ompl \
  ros-${ROS_DISTRO}-moveit-simple-controller-manager \
  ros-${ROS_DISTRO}-ros2-control \
  ros-${ROS_DISTRO}-ros2-controllers \
  ros-${ROS_DISTRO}-xacro
```

MoveIt 相关包和 demo 已包含在本工作空间中，安装依赖后重新构建：

```bash
cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash
```

验证 MoveIt 包和 demo 入口：

```bash
ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos
```

期望至少能看到如下两个可执行 Demo：

```text
rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place
```

### 使用 MoveIt

MoveIt 的规划功能需要基于 RViz GUI 或者通过节点调用，可以适用于仿真或真实场景。

#### 在仿真环境使用 MoveIt

MoveIt 通过 ros2_control 虚拟硬件接口实现 RViz 中的仿真，首先启用：

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
```

默认会启动：

- `move_group`
- `robot_state_publisher`
- `ros2_control_node`
- `joint_state_broadcaster`
- `rebotarm_controller`
- `gripper_controller`
- RViz MoveIt MotionPlanning 插件

RViz 界面会自动弹出并加载 B601-RS 模型，可以通过左侧的 GUI 控制面板对机械臂的运动进行控制。

如果只需要后台 MoveIt 环境，不启动 RViz：

```bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs use_rviz:=false
```

#### 使用 MoveIt 控制 reBotArm

在实际场景中使用 MoveIt 控制 reBotArm 需要先启动带有硬件接口的控制器而不再是虚拟控制器，再启动针对实际场景的 MoveIt 环境：

先启动硬件控制节点：

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0
```

另开终端：

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py model:=rs
```

:::caution 
再次重申，在真实硬件上运行任何 demo 前，请确保机械臂工作空间内无人和障碍物，先在 RViz 中确认规划路径，并随时准备停止控制器。
:::

### 运行画矩形 demo

先启动 MoveIt 环境，再另开一个终端运行：

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs
```

`draw_square` 会控制 `gripper_tcp` 遍历同一平面矩形的四个角点。默认参数在：

```text
src/rebotarm_moveit_demos/config/draw_square_rs.yaml
```

常用参数：

| 参数 | 说明 |
|---|---|
| `start_point` | demo 开始前复位到的关节位置 |
| `rectangle_center` | 矩形中心点，坐标系为 `base_link` |
| `rectangle_width` / `rectangle_height` | 矩形宽高，单位 m |
| `tcp_rpy` | 末端姿态，默认让夹爪竖直朝下 |
| `tcp_yaw_offsets` | IK 备选 yaw，用于避免 joint6 大幅绕转 |

`draw_square` 适合用于验证 MoveIt 的 IK、轨迹规划和执行链路是否正常。如果规划失败，通常需要先检查起始关节状态、矩形中心点、TCP 姿态和关节限位是否合理。

### 运行抓取放置 demo

先启动 MoveIt 环境，再另开一个终端运行：

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py model:=rs
```

默认参数在：

```text
src/rebotarm_moveit_demos/config/pick_place_rs.yaml
```

常用参数：

| 参数 | 说明 |
|---|---|
| `ready_point` | 抓取前后使用的预备关节位置 |
| `pick_position` | 物体底面中心位置，坐标系为 `base_link` |
| `pick_tcp_rpy` / `place_tcp_rpy` | 抓取和放置时的末端姿态 |
| `object_dimensions` | MoveIt 场景中物体尺寸，单位 m |
| `max_gripper_width` | 夹爪最大总开口，默认 `0.09m` |
| `open_gripper_position` / `grasp_gripper_position` / `closed_gripper_position` | 仿真夹爪单侧关节位置 |
| `hardware_open_gripper_position` / `hardware_closed_gripper_position` | 硬件夹爪电机开闭位置 |

`pick_place` 会在规划场景中添加一个待抓取物体，控制夹爪打开、移动到抓取位、闭合夹爪、移动到放置位并释放物体。仿真夹爪关节位置和真实硬件夹爪电机位置是两个不同参数，真实硬件运行前请先确认夹爪开闭方向和限位。

### MoveIt 配置文件

| 文件 | 说明 |
|---|---|
| `rebotarm_moveit_config/config/rebotarm_rs.urdf.xacro` | MoveIt 使用的 B601-RS 机器人模型，包含夹爪和 `gripper_tcp` |
| `rebotarm_moveit_config/config/rebotarm_rs.ros2_control.xacro` | 仿真环境使用的 ros2_control mock hardware 描述 |
| `rebotarm_moveit_config/config/rebotarm_rs.srdf` | MoveIt group、end effector、默认状态等语义配置 |
| `rebotarm_moveit_config/config/kinematics.yaml` | IK solver 配置 |
| `rebotarm_moveit_config/config/joint_limits.yaml` | MoveIt 规划使用的关节限位 |
| `rebotarm_moveit_config/config/ompl_planning.yaml` | OMPL planner 参数 |
| `rebotarm_moveit_config/config/moveit_controllers.yaml` | 仿真环境 MoveIt trajectory execution controller 配置 |
| `rebotarm_moveit_config/config/moveit_hardware_controllers.yaml` | 真实硬件 MoveIt trajectory execution controller 配置 |
| `rebotarm_moveit_config/config/ros2_controllers.yaml` | 仿真环境 ros2_control controller 配置 |
| `rebotarm_moveit_config/config/initial_positions.yaml` | ros2_control 模拟硬件初始关节位置 |
| `rebotarm_moveit_demos/config/draw_square_rs.yaml` | 画矩形 demo 参数 |
| `rebotarm_moveit_demos/config/pick_place_rs.yaml` | 抓取放置 demo 参数 |

## FAQ

### 1. 启动时报 `socketcan write failed: Network is down`

表示 CAN 接口还没有启动。先查看接口：

```bash
ip -details link show can0
```

重新启动 CAN：

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### 2. 找不到 `can0`

先确认 CAN 适配器已经插入，并查看接口名：

```bash
ip -br link
```

如果使用 PCAN-USB：

```bash
sudo modprobe peak_usb
ip -br link
```

如果接口名不是 `can0`，请在启动时替换 `channel`：

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can1
```

### 3. RViz 中模型不显示

请检查：

- 是否已经 source 工作空间：`source install/setup.bash`
- `Fixed Frame` 是否为 `base_link`
- `robot_state_publisher` 是否正常启动
- URDF mesh 路径是否为 `package://rebotarm_bringup/description/...`

如果模型已经显示但视角不方便，可以在 RViz 左侧 `Views` 面板中将视角类型切换为 `Move Camera`，将 `Target Frame` 设为 `base_link`，再调整 `Distance`。

### 4. MoveIt 规划失败

如果 demo 打印 `MoveIt planning failed`，可以按下面顺序检查：

- 确认已经启动 `demo.launch.py` 或 `hardware.launch.py`，并且 `move_group` 正常运行。
- 确认当前关节状态不是过期数据，`/joint_states` 或 `/rebotarm/joint_states` 正常发布。
- 确认目标点在机械臂可达空间内，且目标姿态不会造成腕部或夹爪与机械臂本体碰撞。
- 确认 `joint_limits.yaml` 中的关节限位和速度限制符合当前机械臂。
- 先在 RViz MotionPlanning 插件中手动规划，确认路径无碰撞后再运行 demo。

### 5. 出现 FastDDS SHM 端口提示

如果终端出现类似：

```text
[RTPS_TRANSPORT_SHM Error] Failed init_port fastrtps_port7002: open_and_lock_file failed
```

通常是之前的 ROS2 进程异常退出后，FastDDS shared memory 锁文件残留。服务和 action 能正常响应时，这个提示一般不影响控制。

需要清理时，先停掉相关 ROS2 进程，再执行：

```bash
pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*
```

如果希望临时绕开 shared memory transport，可在启动 ROS2 前设置：

```bash
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4
```

### 6. 如果使用 Humble 怎么办？

Humble 用户可以参考同样流程，将命令中的 `jazzy` 替换为 `humble`，并按 Humble 官方文档安装对应依赖。切换 ROS2 发行版后，重新执行 `colcon build` 即可。

### 7. 提示找不到 `pinocchio`

如果运行节点或验证命令时提示：

```text
ModuleNotFoundError: No module named 'pinocchio'
```

先确认已经安装了对应 ROS2 发行版的 Pinocchio 包：

```bash
sudo apt install -y ros-${ROS_DISTRO}-pinocchio
```

然后确认当前终端已经 source ROS2 环境：

```bash
source /opt/ros/${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
```

如果仍然找不到，请检查当前 Python 搜索路径中是否包含 ROS2 的 Python 包路径：

```bash
python3 -c "import sys; print('\n'.join(sys.path))"
```

正常情况下，source Jazzy 后应能看到类似 `/opt/ros/jazzy/lib/python3.12/site-packages` 的路径。如果使用 Humble，请将命令中的 `jazzy` 替换为 `humble`。

## 联系方式

- 技术支持：[提交 Issue](https://github.com/Seeed-Projects/reBotArmController_ROS2/issues)
- 项目地址：[Github](https://github.com/Seeed-Projects/reBotArmController_ROS2)
- 论坛：[Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考文档

- [reBot Arm B601-RS 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/)
- [ROS2 Humble 文档](https://docs.ros.org/en/humble/)
- [ROS2 Jazzy 文档](https://docs.ros.org/en/jazzy/)
- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)
- [MoveIt 2 文档](https://moveit.picknik.ai/main/index.html)
