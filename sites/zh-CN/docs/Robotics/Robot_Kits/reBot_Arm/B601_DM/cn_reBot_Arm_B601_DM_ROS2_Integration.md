---
description: 本教程介绍如何基于 reBot Arm B601-DM 搭建 ROS2 控制工作空间，完成机械臂、夹爪、轨迹接口、重力补偿和 RViz 可视化集成。
title: reBot Arm B601-DM ROS2 集成
keywords:
  - reBot Arm
  - B601-DM
  - ROS2
  - Humble
  - Jazzy
  - RViz
  - 机械臂
  - 机器人
slug: /rebot_arm_b601_dm_ros2_integration
sku: 100065783, 100095532
last_update:
  date: 2026-05-14
  author: YinHaizhou
translation:
  skip:
    - [zh-CN]
createdAt: '2026-04-29'
updatedAt: '2026-05-14'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_ros2_integration/
---

# reBot Arm B601-DM ROS2 集成教程

<p align="center">
  <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</p>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Humble | Jazzy-blue.svg" alt="ROS2 Humble | Jazzy" />
    <img src="https://img.shields.io/badge/Python-3.10%2B-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Version-v0.2.2-brightgreen.svg" alt="Version v0.2.2" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Hardware-B601--DM-lightgrey.svg" alt="Hardware" />
</p>

<p align="center">
  <strong>ROS2 控制 · 夹爪控制 · 标准轨迹接口 · 重力补偿 · RViz 可视化 · 全开源</strong>
</p>

本教程介绍如何在 reBot Arm B601-DM 上运行 ROS2 控制工作空间 `rebotarm_ros2`。该工作空间将底层 `reBotArm_control_py` Python SDK 封装为 ROS2 topic、service 和 action，方便用户接入上层规划、视觉抓取、RViz 可视化和二次开发流程。

:::note
本文默认以 `Ubuntu 24.04 + ROS2 Jazzy + Python 3.12` 为主要环境。ROS2 Humble / Ubuntu 22.04 可参考相同流程使用。
:::

## 项目特点

1. **标准 ROS2 接口**  
   提供 `/joint_states`、`FollowJointTrajectory`、`GripperCommand`、`MoveToPose` 等常用接口，便于后续接入 MoveIt2、视觉抓取或任务编排系统。

2. **提供正逆运动学、轨迹规划和重力补偿等功能节点**  
   提供开箱即用的正逆运动学、轨迹规划和重力补偿等控制节点、支持RViz可视化。

3. **MoveIt 2 集成**  
   提供完整的 MoveIt 2 配置和应用 demo，支持 RViz MotionPlanning 插件进行仿真规划和真实硬件执行。

## 规格参数

本教程硬件由 [矽递科技 Seeed Studio](https://www.seeedstudio.com/) 提供。

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>规格</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>机械臂型号</td>
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>自由度</td>
      <td>6-DOF + 夹爪</td>
    </tr>
    <tr>
      <td>电机版本</td>
      <td>DAMIAO 电机版</td>
    </tr>
    <tr>
      <td>通信方式</td>
      <td>CAN Bus via USB2CAN 串口桥</td>
    </tr>
    <tr>
      <td>默认串口</td>
      <td><code>/dev/ttyACM0</code></td>
    </tr>
    <tr>
      <td>推荐系统</td>
      <td>Ubuntu 24.04 + ROS2 Jazzy + Python 3.12</td>
    </tr>
    <tr>
      <td>参考系统</td>
        <td>Ubuntu 22.04 + ROS2 Humble + Python 3.10</td>
    </tr>
  </tbody>
</table>

## 材料清单（BOM）

| 部件 | 数量 | 是否包含 |
|--|--|--|
| reBot Arm B601-DM 机械臂 | 1 | ✅ |
| 夹爪 | 1 | ✅ |
| USB2CAN 串口桥 | 1 | ✅ |
| 电源适配器（24V） | 1 | ✅ |
| USB-C / 通信线缆 | 1 | ✅ |
| Ubuntu 主机 | 1 | 自备 |

## 接线说明

1. 将 USB2CAN 串口桥连接到机械臂 CAN 总线。
2. 接通 24V 电源，并将 USB2CAN 插入主机。
3. 确认主机识别到串口：

```bash
ls /dev/ttyACM*
```

如果需要临时开放串口权限：

```bash
sudo chmod 666 /dev/ttyACM0
```

更推荐将当前用户加入 `dialout` 组，重新登录后生效：

```bash
sudo usermod -a -G dialout $USER
```

## 环境要求

| 项目 | 推荐要求 |
|------|------|
| 操作系统 | Ubuntu 24.04，Ubuntu 22.04 可参考 |
| ROS2 | Jazzy，Humble 可参考 |
| Python | 系统 Python，Jazzy 通常为 3.12，Humble 通常为 3.10 |


## 安装步骤

### 步骤 0. 完成机械臂基础准备

开始 ROS2 集成前，请先完成 [reBot Arm B601-DM 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/) 中的内容，包括机械臂组装、电机 ID 配置、零点初始化和基础连通性确认。

### 步骤 1. 安装适合 Ubuntu 系统版本的 ROS2

请参考 Seeed Studio Wiki ROS2 安装文档或 ROS2 官方文档安装：

- [ROS2 Jazzy Ubuntu 安装教程](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html)
- [ROS2 Humble Ubuntu 安装教程](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)
- [Seeed Studio Wiki ROS2 Humble 安装教程](https://wiki.seeedstudio.com/install_ros2_humble/)

### 步骤 2. 安装构建工具和 ROS 依赖

安装 colcon、pip、Git 和本工作空间需要的 ROS 包：

```bash
sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-jazzy-control-msgs \
  ros-jazzy-trajectory-msgs \
  ros-jazzy-tf-transformations \
  ros-jazzy-robot-state-publisher \
  ros-jazzy-rviz2 \
  ros-jazzy-pinocchio
```

安装后可以验证：

```bash
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"
```

如果你使用 ROS2 Humble，请将上面的 `ros-jazzy-*` 包名替换为 `ros-humble-*`，并 source
`/opt/ros/humble/setup.bash`。

### 步骤 3. 克隆代码仓库

优先使用 Seeed-Projects 官方仓库：

```bash
git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2
```

也可以使用当前开发仓库：

```bash
git clone https://github.com/EclipseaHime017/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2
```

### 步骤 4. 安装 motorbridge

`motorbridge` 从 PyPI 官方源安装：

```bash
python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge
```

### 步骤 5. 获取底层 SDK

```bash
mkdir -p third_party
git clone https://github.com/vectorBH6/reBotArm_control_py.git third_party/reBotArm_control_py
```

### 步骤 6. 构建工作空间

```bash
source /opt/ros/jazzy/setup.bash
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

在正式开始使用机械臂前请注意： **机械臂的控制器具有较高自由度，启用控制器或者给机械臂上电前务必注意械臂工作空间内无人和障碍物。同时，请严格审查每一次对机械臂的运动控制，避免出现意外。严禁危险操作，造成后果自负。**

### 启动完整系统

完整 bringup 会启动：

- `reBotArmController` 控制节点
- `robot_state_publisher`
- 可选 RViz

```bash
cd ~/seeed/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0
```

如果你的串口不是 `/dev/ttyACM0`，请替换为实际设备名：

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1
```

### 启动 RViz 可视化

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0 use_rviz:=true
```

如果 RViz 中模型看起来很小，可以在 RViz 左侧 `Views` 面板中调整：

- 将 `Target Frame` 设为 `base_link`
- 调整 `Distance`，例如改为 `1.0` 或 `1.5`
- 使用鼠标滚轮缩放视角
- 确认 `Fixed Frame` 为 `base_link`

### 只启动控制节点

如果不需要 URDF 和 RViz：

```bash
ros2 launch rebotarm_bringup driver_only.launch.py channel:=/dev/ttyACM0
```

也可以直接运行节点：

```bash
ros2 run rebotarmcontroller reBotArmController
```

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

如果需要多机械臂或和其他 ROS2 系统共存，可以在 launch 时修改命名空间：

```bash
ros2 launch rebotarm_bringup bringup.launch.py arm_namespace:=left_arm
```

此时 `/rebotarm/joint_states` 会变为 `/left_arm/joint_states`。命名空间只影响 ROS graph 中的 topic、service、action 名字，不会自动修改 URDF 中的 TF frame 名称。

## 常用 API

### 状态 Topic

| API | 类型 | 说明 |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | 6 轴关节位置、速度和力矩 |
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
| `/rebotarm/set_mode` | `rebotarm_msgs/srv/SetMode` | 切换 `mit`、`pos_vel`、`vel` |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | 设置全部或单个关节零点 |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | IK 预检查和目标关节角求解 |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | 设置夹爪电机位置，单位 rad |
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

`move_to_pose` 内部会进入 `pos_vel` 控制，并调用 SDK `ArmEndPos.move_to_traj(...)` 执行轨迹。

### 3. 发送关节目标

```bash
ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"
```

当前 `FollowJointTrajectory` 是面向 SDK 的薄封装：读取最后一个 trajectory point 作为关节目标，并由底层 SDK 的 `pos_vel` 控制循环执行。

### 4. 安全回零并失能

```bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

## 演示示例

所有示例都假设已经启动 `reBotArmController`：

```bash
cd ~/seeed/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0
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
| `arm.yaml` | 机械臂 6 个关节的电机、反馈 ID 和控制参数 |
| `gripper.yaml` | 夹爪电机 ID、反馈 ID、厂商和控制参数 |
| `driver_params.yaml` | ROS 参数示例 |

常用 launch 参数：

| 参数 | 默认值 | 说明 |
|---|---|---|
| `arm_config` | bringup 内置 `arm.yaml` | 机械臂配置路径 |
| `gripper_config` | bringup 内置 `gripper.yaml` | 夹爪配置路径 |
| `channel` | 空字符串 | 留空使用 YAML；非空时覆盖串口 |
| `joint_state_rate` | `100.0` | `/rebotarm/joint_states` 发布频率 |
| `cmd_arbitration` | `reject` | 轨迹运行中 arm joint 低层 cmd 仲裁，`reject` 或 `preempt`；gripper 低层 cmd 不抢占 arm 轨迹 |
| `arm_namespace` | `rebotarm` | ROS 命名空间前缀 |
| `frame_id` | `base_link` | 机械臂基座坐标系 |
| `ee_frame_id` | `end_link` | 末端坐标系 |
| `use_rviz` | `false` | 是否启动 RViz |

## 低层 Command Topic

ROS2 工作空间也提供低层电机调试 topic：

| API | 类型 | 说明 |
|---|---|---|
| `/rebotarm/joints/<joint>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | 单关节 MIT raw command |
| `/rebotarm/joints/<joint>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | 单关节位置速度 raw command |
| `/rebotarm/joints/<joint>/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | 单关节速度 raw command |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | 夹爪 MIT raw command |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | 夹爪位置速度 raw command |
| `/rebotarm/gripper/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | 夹爪速度 raw command |

:::caution
低层 command topic 面向调试和实验，不做 IK、轨迹规划或 URDF 合法性检查。应用层运动建议优先使用 `/move_to_pose`、`/follow_joint_trajectory`、`/gripper/set` 等 service/action。
:::

## MoveIt 2

MoveIt 2 是用于机械臂运动规划的框架，这里主要负责逆解、碰撞检测、轨迹规划和轨迹执行，
并通过独立的 demo 包将应用流程与底层驱动隔离开。
更多内容可参考官方 [MoveIt 2 文档](https://moveit.picknik.ai/main/index.html)。

MoveIt 相关内容集中在两个包：

| 包 | 作用 |
|---|---|
| `rebotarm_moveit_config` | 机械臂模型、SRDF、运动学、joint limits、controller 和 RViz 配置 |
| `rebotarm_moveit_demos` | 基于 MoveIt 2 的应用 demo |

MoveIt 环境使用 `ros2_control` 的模拟硬件和 `move_group` 进行规划执行，适合在 RViz
中验证模型、IK、轨迹规划和 demo 流程。

本仓库同样提供了硬件接口的支持。接入真实硬件前，请先确认机械臂零点配置、关节方向、限位、
速度和夹爪开闭范围相关配置准确或者保持仓库默认配置。

### MoveIt 环境配置

先确认已经加载 ROS2 环境。下面的命令会使用当前 `ROS_DISTRO` 安装对应版本依赖：

```bash
sudo apt update
sudo apt install -y \
  ros-${ROS_DISTRO}-moveit \
  ros-${ROS_DISTRO}-moveit-configs-utils \
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

MoveIt 通过 ros2_control 虚拟硬件接口实现 RViz 中的仿真，首先启用

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py
```

默认会启动：

- `move_group`
- `robot_state_publisher`
- `ros2_control_node`
- `joint_state_broadcaster`
- `rebotarm_controller`
- `gripper_controller`
- RViz MoveIt MotionPlanning 插件

RViz 界面会自动弹出并加载机械臂的urdf模型，可以通过左侧的 GUI 控制面板对机械臂的运动进行控制。

如果只需要后台 MoveIt 环境，不启动 RViz：

```bash
ros2 launch rebotarm_moveit_config demo.launch.py use_rviz:=false
```

#### 使用 MoveIt 控制 reBotArm

在实际场景中使用 MoveIt 控制 reBotArm 需要先启动带有硬件接口的控制器而不再是虚拟控制器，
再启动针对实际场景的 MoveIt 环境：

```bash
ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0
```

另开终端：

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py
```

再次重申，在真实硬件上运行任何 demo 前，请确保机械臂工作空间内无人和障碍物，先在 RViz 中确认规划路径，并随时准备停止控制器。

### 运行画矩形 demo

先启动 MoveIt 环境，再另开一个终端运行：

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py
```

`draw_square` 会控制 `gripper_tcp` 遍历同一平面矩形的四个角点。默认参数在：

```text
src/rebotarm_moveit_demos/config/draw_square.yaml
```

常用参数：

| 参数 | 说明 |
|---|---|
| `start_point` | demo 开始前复位到的关节位置 |
| `rectangle_center` | 矩形中心点，坐标系为 `base_link` |
| `rectangle_width` / `rectangle_height` | 矩形宽高，单位 m |
| `tcp_rpy` | 末端姿态，默认让夹爪竖直朝下 |
| `tcp_yaw_offsets` | IK 备选 yaw，用于避免 joint6 大幅绕转 |

### 运行抓取放置 demo

先启动 MoveIt 环境，再另开一个终端运行：

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py
```

默认参数在：

```text
src/rebotarm_moveit_demos/config/pick_place.yaml
```

常用参数：

| 参数 | 说明 |
|---|---|
| `ready_point` | 抓取前后使用的预备关节位置 |
| `pick_position` | 物体底面中心位置，坐标系为 `base_link` |
| `pick_tcp_rpy` / `place_tcp_rpy` | 抓取和放置时的末端姿态 |
| `object_dimensions` | MoveIt 场景中物体尺寸，单位 m |
| `max_gripper_width` | 夹爪最大总开口，默认 `0.09m` |
| `open_gripper_position` / `closed_gripper_position` | 仿真夹爪单侧开闭关节位置 |
| `hardware_open_gripper_position` / `hardware_closed_gripper_position` | 硬件夹爪电机开闭位置 |
| `grasp_gripper_to_object_width` | 是否按物体宽度计算夹取位置 |

### MoveIt 配置文件

| 文件 | 说明 |
|---|---|
| `rebotarm_moveit_config/config/rebotarm.urdf.xacro` | MoveIt 使用的机器人模型 |
| `rebotarm_moveit_config/config/rebotarm.srdf` | MoveIt group、end effector、默认状态等语义配置 |
| `rebotarm_moveit_config/config/kinematics.yaml` | IK solver 配置 |
| `rebotarm_moveit_config/config/joint_limits.yaml` | MoveIt 规划使用的关节限位 |
| `rebotarm_moveit_config/config/moveit_controllers.yaml` | MoveIt trajectory execution controller 配置 |
| `rebotarm_moveit_config/config/ros2_controllers.yaml` | ros2_control controller 配置 |
| `rebotarm_moveit_config/config/initial_positions.yaml` | ros2_control 模拟硬件初始关节位置 |
| `rebotarm_moveit_demos/config/draw_square.yaml` | 画矩形 demo 参数 |
| `rebotarm_moveit_demos/config/pick_place.yaml` | 抓取放置 demo 参数 |

## FAQ

### 1. 启动时报 `open serial port /dev/ttyACM0 failed`

表示默认串口不存在或名称变化。先查看实际串口：

```bash
ls /dev/ttyACM*
```

再通过 `channel` 指定：

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1
```

### 2. 启动时报 `Device or resource busy`

表示串口已经被其他进程占用。常见原因是之前的 ROS2 节点、SDK 示例或调试脚本没有退出。可以先确认进程：

```bash
ps aux | grep -E "reBotArmController|ros2|python"
```

停止占用串口的进程后重新启动。机械臂和夹爪应该共用同一个底层 Controller，不要分别打开同一个串口。

### 3. 权限不足

如果串口存在但无权限：

```bash
sudo usermod -a -G dialout $USER
```

重新登录后生效。临时调试也可以执行：

```bash
sudo chmod 666 /dev/ttyACM0
```

### 4. RViz 中模型不显示

请检查：

- 是否已经 source 工作空间：`source install/setup.bash`
- `Fixed Frame` 是否为 `base_link`
- `robot_state_publisher` 是否正常启动
- URDF mesh 路径是否为 `package://rebotarm_bringup/description/meshes/...`

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
sudo apt install -y ros-jazzy-pinocchio
```

然后确认当前终端已经 source ROS2 环境：

```bash
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
```

如果仍然找不到，请检查当前 Python 搜索路径中是否包含 ROS2 的 Python 包路径：

```bash
python3 -c "import sys; print('\n'.join(sys.path))"
```

正常情况下，source Jazzy 后应能看到类似 `/opt/ros/jazzy/lib/python3.12/site-packages`
的路径。如果使用 Humble，请将命令中的 `jazzy` 替换为 `humble`。

## 联系方式

- 技术支持：[提交 Issue](https://github.com/EclipseaHime017/reBotArmController_ROS2/issues)
- 项目地址：[Github](https://github.com/EclipseaHime017/reBotArmController_ROS2)
- 论坛：[Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考文档

- [reBot Arm B601-DM 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/)
- [reBot Arm B601-DM 视觉夹取 Demo](https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_grasping_demo/)
- [reBot Arm B601-DM Pinocchio 与 MeshCat](https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_pinocchio_meshcat/)
- [reBot Arm B601-DM LeRobot 教程](https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_lerobot/)
- [ROS2 Humble 文档](https://docs.ros.org/en/humble/)
- [ROS2 Jazzy 文档](https://docs.ros.org/en/jazzy/)
- [reBotArm_control_py](https://github.com/vectorBH6/reBotArm_control_py)
