---
description: "Seeed 具身智能入门课程第七阶段：ROS2 与机器人系统集成第 33 章 — reBot Arm ROS2 集成：在正式开始之前，需要确保硬件正确连接，并准备好软件环境。这是所有后续步骤的基础。"
title: 第 33 章 - reBot Arm ROS2 集成
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_33
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_33/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 7 阶段 · 第 33 章 · 实践</span>
    <h2>33. reBot Arm ROS2 集成</h2>
    <p>
      在正式开始之前，需要确保硬件正确连接，并准备好软件环境。这是所有后续步骤的基础。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 33.1 reBot ROS2 Workspace构建

### 准备工作：环境与硬件

在正式开始之前，需要确保硬件正确连接，并准备好软件环境。这是所有后续步骤的基础。

- **硬件接线**：将 `USB2CAN` **/** 串口桥接到机械臂的 CAN 总线转接板上。接通电源后，将 `USB2CAN` 插入主机，确认系统识别到CAN/串口设备。
- **操作系统**：推荐使用 **Ubuntu 24.04** 搭配 **ROS2 Jazzy** 或者 **Ubuntu 22.04** 搭配 **ROS2 Humble**。

<grid>
<column width-ratio="0.500000">
RS：
```Bash
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```
</column>
<column width-ratio="0.500000">
DM：
```Bash
sudo chmod 666 /dev/ttyACM*
```
</column>
</grid>

### 核心工作空间

这是整个集成工作的核心代码仓库，它包含了将 reBot Arm 封装成标准 ROS2 机器人所需的所有组件。

- **获取代码**：从官方仓库克隆工作空间：

```Bash
#RS：
git clone https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS.git ~/ReBot_Arm_DigitalTwin_RS

#DM：
git clone https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_DM.git ~/ReBot_Arm_DigitalTwin_DM

工作空间结构：RS 和 DM 两个版本的工作空间目录名不同
（RS 为 rebotarm_ros2_RS，DM 为 rebotarm_ros2_DM）
```

**工作空间结构**：它包含了七个主要的 ROS2 包：

- `rebotarm_msgs`：自定义的消息、服务和动作接口。
- `rebotarmcontroller`：驱动节点，包含核心控制器 `reBotArmController`。
- `rebotarm_bringup`：启动文件、配置文件、URDF 模型和 RViz 资源。
- `rebotarm_moveit_config`：MoveIt 2 的配置文件。
- `rebotarm_moveit_demos`：MoveIt 2 的示例程序。
- `rebotarm_mujoco`：DM 版本的 MuJoCo 仿真同步节点（包名为 `rebotarm_mujoco`，RS 版本为 `rebotarm_mujoco_rs`）。
- `rebotarm_agent`：DM 版本的上层 Agent 节点。

## 32.1 Python SDK 与 ROS2 驱动的桥梁

`reBotArm_control_py` 是底层的 Python 控制库，而 `rebotarm_ros2` 工作空间的作用就是将它“封装”成 ROS2 的标准接口。

- **安装底层 SDK**：

在工作空间的 third_party 目录下，获取这个底层库（RS 在 rebotarm_ros2/third_party，DM 自动匹配setup.sh 会依次检查 reBotArmController_ROS2-main/third_party、reBotArmController_ROS2-main/sdk、\－/reBotArm_control_py 三个候选路）：

```Bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py。

#reBotArm_control_py 默认yaml文件配置为dm 需将/reBotArm_control_py/config中的改成适配选项

#RS：
hardware_yaml: "rebotarm_rs.yaml"

#DM：
hardware_yaml: "rebotarm_dm.yaml"
```

- **安装 motorbridge**：这是连接电机和上层软件的关键中间件，通过 pip 安装：

```Bash
python3 -m pip install motorbridge。

#验证
motorbridge -v
#输出
motorbridge 0.5.0
```

## 32.2 启动与可视化

- 验证可执行入口：

RS：

```Bash
cd ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2
source install/setup.bash
ros2 pkg executables rebotarmcontroller
```

DM：

```Bash
cd ~/ReBot_Arm_DigitalTwin_DM/rebotarm_ros2
source install/setup.bash
ros2 pkg executables rebotarmcontroller
```

- 期望至少看到：

```Bash
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose
rebotarmcontroller reBotArmController
RS 版本额外多出两个可执行入口：
rebotarmcontroller FakeRsDriver     # RS 专属：MuJoCo 仿真假驱动（文件名 fake_rs_driver.py）
rebotarmcontroller CancelAction     # RS 专属：取消正在执行的 Action 目标
DM 版本额外多出一个可执行入口：
rebotarmcontroller FakeReBotArmDriver # DM 专属：MuJoCo 仿真假驱动（文件名 fake_driver.py）
注意：RS 版本还包含 motion_profiles.py 和 trajectory_profiles.py 两个运动规划文件，DM 版本没有。
```

- 编译工作空间后，可以通过一条命令启动完整的系统，将机械臂的控制、状态发布和可视化全部串联起来。

```Bash
# 编译工作空间
source /opt/ros/${ROS_DISTRO}/setup.bash
colcon build --symlink-install
source install/setup.bash

# 启动完整系统并开启RViz 可视化
RS：
cd ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=true
DM：
cd ~/ReBot_Arm_DigitalTwin_DM
./rebotarm start dm use_rviz:=true
```

- **状态发布**：启动后，`reBotArmController` 节点会持续发布机械臂状态，例如关节状态（`/rebotarm/joint_states`）和整体状态（`/rebotarm/arm_status`）。

```Bash
#显示活跃的话题名
ros2 topic list
#列出话题及其消息类型，通过添加 -t 参数，可以同时查看每个话题的消息类型：
ros2 topic list -t
#输出示例：
/client_count
/connected_clients
/goal_pose
/initialpose
/parameter_events
/rebotarm/arm_status
/rebotarm/control_reference
/rebotarm/control_target
/rebotarm/gripper/cmd/mit
/rebotarm/gripper/cmd/pos_vel
/rebotarm/gripper/state
/rebotarm/joint_states
/rebotarm/joints/joint1/cmd/mit
/rebotarm/joints/joint1/cmd/pos_vel
/rebotarm/joints/joint1/state
/rebotarm/joints/joint2/cmd/mit
/rebotarm/joints/joint2/cmd/pos_vel
/rebotarm/joints/joint2/state
/rebotarm/joints/joint3/cmd/mit
/rebotarm/joints/joint3/cmd/pos_vel
/rebotarm/joints/joint3/state
/rebotarm/joints/joint4/cmd/mit
/rebotarm/joints/joint4/cmd/pos_vel
/rebotarm/joints/joint4/state
/rebotarm/joints/joint5/cmd/mit
/rebotarm/joints/joint5/cmd/pos_vel
/rebotarm/joints/joint5/state
/rebotarm/joints/joint6/cmd/mit
/rebotarm/joints/joint6/cmd/pos_vel
/rebotarm/joints/joint6/state
/rebotarm/mujoco/object_states
/rebotarm/mujoco/overhead_rgb/image_raw
/rebotarm/sim/animation_event
/rebotarm/vision/color_blocks/detections
/robot_description
/rosout
/tf
/tf_static
```

- **RViz 显示**：通过 RViz，你可以看到基于 URDF 模型的机械臂实时运动，实现“所见即所得”的监控效果。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-33cn/ch33-01cn.jpg" alt="" />
</div>

启动后，`reBotArmController` 节点会持续发布机械臂状态。状态发布由`JointStatePublisher` 类（`ros_publishers.py`）统一管理，通过定时器以可配置频率（默认 100 Hz）驱动，无需外部触发。

发布的话题一览：

| 话题 | 消息类型 | 说明 |
|-|-|-|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | 6 轴关节位置、速度、力矩，附带夹爪 `finger_left` |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | 控制模式、使能状态、状态机、关节状态码、错误码（latched QoS） |
| `/rebotarm/joints/<joint>/state` | `rebotarm_msgs/msg/JointMotorState` | 单关节电机级状态，`<joint>` 为 `joint1` 到 `joint6` |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | 夹爪电机级状态，未配置夹爪时不发布 |

`ArmStatus` 消息使用 `TRANSIENT_LOCAL` durability（latched QoS），这意味着晚加入的订阅者也能立即收到最近一次状态快照，适合 UI 和健康监控组件做状态同步：

```Bash
# 查看关节状态
ros2 topic echo /rebotarm/joint_states --once

# 查看整体状态（含状态机和错误码）
ros2 topic echo /rebotarm/arm_status --once

# 查看单关节电机状态
ros2 topic echo /rebotarm/joints/joint1/state --once
```

`ArmStatus` 消息字段：

```Plain Text
std_msgs/Header header
string mode               # 当前控制模式：mit / pos_vel / vel
bool enabled              # 机械臂是否使能
bool control_loop_active  # 内部 pos_vel 控制循环是否运行
string state_machine      # 状态机：IDLE / TRAJ_RUNNING / LOWLEVEL_STREAMING / GRAVITY_COMP
string[] joint_names      # 关节名列表
uint8[] per_joint_status_code  # 每个关节电机的状态码
string[] error_codes     # 错误码列表
```

## 32.3Topic、Service 和 Action 控制

rebotarm_ros2 提供了多种符合 ROS2 标准的控制接口，方便根据不同应用场景进行选择。所有接口默认挂在 `/rebotarm` 命名空间下，可通过 launch 参数 `arm_namespace` 覆盖。

<callout emoji="🎉">
控制前统一单位：角度是弧度 rad；时间单位秒。
</callout>

### Topic、Service 和 Action 控制时的流程示例：

```Bash
#1 电机上电使能
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
#2 回安全原点（验证零点是否正常）
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
# 此时就可以发送 move_to_pose / follow_joint_trajectory action目标
# ...执行运动...
# 结束后失能
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

### **Topic：低层单电机直通**

对于调试和低层控制实验，（`motor_passthrough.py`）提供了 per-joint sparse raw command 话题：

| 话题 | 消息类型 | 说明 |
|-|-|-|
| `/rebotarm/joints/<joint>/cmd` | `rebotarm_msgs/msg/JointMotorCmd` | 单关节 sparse raw command |
| `/rebotarm/gripper/cmd` | `rebotarm_msgs/msg/JointMotorCmd` | 夹爪 sparse raw command |

`JointMotorCmd` 采用 sparse-flag 设计：只有 `use_pos`、`use_vel`、`use_kp`、`use_kd`、`use_tau`、`use_vlim` 为 `true` 的字段才覆盖默认值。`mode` 可选 `0`（MIT）、`1`（POS_VEL）、`2`（VEL）。

```Bash
# 单关节 MIT 模式指令
ros2 topic pub --once /rebotarm/joints/joint1/cmd/mit \
  rebotarm_msgs/msg/JointMitCmd \
  "{pos: 0.2, vel: 0.0, kp: 80.0, kd: 4.0, tau: 0.0}"
```

<figure view-type="Preview"><source name="file_v3_0014l_8f7e605c-e0f9-4176-be18-997f8682e72g.mp4" mime="video/mp4" origin-height="720.000000" origin-width="1280.000000" size="1215680" token="MizAbqP9Jo8cWVxhQKHcAXUWnif"/></figure>

轨迹运行期间，低层 cmd 默认被拒绝（`cmd_arbitration:=reject`）。如需抢占式覆盖，可在 launch 时传 `cmd_arbitration:=preempt`。

### **Service：触发式控制**

Service 适用于使能/失能、安全回零、模式切换等触发式操作。定义在 `ros_services.py`的`ArmServices` 类中。

| Service | 类型 | 说明 |
|-|-|-|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | 使能机械臂和夹爪，启动 pos_vel 控制循环 |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | 停止控制循环并失能机械臂 |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | 以安全速度回零（关节 + 夹爪） |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | 设置全部或指定关节零点 |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | 只做 IK 求解并更新目标关节角 |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | 设置夹爪开合距离和最大力矩 |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | 启动 controller 内部重力补偿闭环 |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | 停止重力补偿闭环 |
| `/rebotarm/gravity_compensation/status` | `std_srvs/srv/Trigger` | 查询重力补偿状态，`success=true` 表示运行中 |

常用命令示例：

```Bash
# 使能
ros2 service call /rebotarm/enable std_srvs/srv/Trigger

# 安全回零
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger

# IK 求解 （！！！注意机械臂运动很快）
ros2 service call /rebotarm/move_to_pose_ik rebotarm_msgs/srv/MoveToPoseIK \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {w: 1.0}}}"
  #时间
  ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {w: 1.0}}, duration: 3.0}"

# 设置夹爪开口（rad弧度制 0-5）
ros2 service call /rebotarm/gripper/set rebotarm_msgs/srv/SetGripper \
  "{position: 2.5, max_effort: 0.5}"
 #DM
ros2 service call /rebotarm/gripper/set \
  rebotarm_msgs/srv/SetGripper "{position: -1.0, max_effort: 0.0}"
```

### **Action：面向过程的控制**

Action 适用于需要反馈和取消的长时间运动，如轨迹执行。定义在 `ros_actions.py` 的

`ArmActions` 类中。

| Action | 类型 | 说明 |
|-|-|-|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | 末端笛卡尔位姿轨迹，内部走 `ArmEndPos.move_to_traj()` |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | 标准关节轨迹接口，MoveIt2 的标准接口 |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | 标准夹爪 action |

`move_to_pose` 示例：向 reBot Arm 机械臂 的 Action 服务发送一个运动目标：让机械臂运动到指定位姿，运动总耗时控制在 3 秒，并且打印运动过程的实时反馈。

```Bash
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {w: 1.0}}, duration: 3.0}" \
  --feedback
```

<figure view-type="Preview"><source name="18446744073566823104.mp4" mime="video/mp4" origin-height="360.000000" origin-width="640.000000" size="2957005" token="FtVBb6Mh8oVL3axtAumc6xVqnYc"/></figure>

查看 Action 的消息定义

```Bash
ros2 interface show rebotarm_msgs/action/MoveToPose
#可以看到完整的 Goal / Feedback / Result 字段。
```

### 演示示例

所有示例都假设已经启动 `reBotArmController`：

```Bash
cd ~/seeed/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0
```

示例已注册为 ROS2 可执行入口，可以直接通过 `ros2 run` 调用。源文件位于`src/rebotarmcontroller/rebotarmcontroller/examples/` 目录下。

### 末端 Pose 示例

`move_to_pose.py` — 末端位姿移动。脚本通过 `/rebotarm/move_to_pose` action 发送

`geometry_msgs/Pose` 目标，控制节点内部负责模式切换和轨迹执行。对应底层 SDK 的

`ArmEndPos.move_to_traj()` 能力链路。单次动作 demo，不会自动 `safe_home` 或 `disable`。

```Bash
ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0
```

<figure view-type="Preview"><source name="1126939039.mp4" mime="video/mp4" origin-height="360.000000" origin-width="640.000000" size="2563535" token="AoFKbWbOiozLpFxRvOacav7Gn7g"/></figure>

### 重力补偿示例

`gravity_compensation.py` — 重力补偿锁止示例。脚本本身不重写控制循环，而是直接调用

`reBotArmController` 内部的重力补偿服务；真正的重力补偿闭环在 controller 进程内部直接

使用 SDK 的 `RobotArm.get_positions/get_velocities/mit` 完成。

```Bash
ros2 run rebotarmcontroller GravityCompensation
```

<figure view-type="Preview"><source name="video_20260817_142623.mp4" mime="video/mp4" origin-height="360.000000" origin-width="640.000000" size="7539106" token="R7BAbbGHLo6OlvxXp9fcGtiYnGb"/></figure>

脚本启动时会先调用 `/rebotarm/enable`，再启动重力补偿。按 `Ctrl+C` 退出时，脚本会依次

调用 `/rebotarm/gravity_compensation/stop` → `/rebotarm/safe_home` → `/rebotarm/disable`，

让机械臂先停止重力补偿，再回到安全零位并失能。

## 32.5 安全停车和故障排查

<callout emoji="🥖">
安全是机器人操作的第一要务。rebotarm_ros2 在多个层面提供了安全机制。
</callout>

### **safe_home 服务**：通过 `/rebotarm/safe_home` 服务可以让机械臂以安全速度回到预设零位。

该服务内部会先停止重力补偿，再切入 `pos_vel` 模式，然后执行回零：

```Bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
```

### **disable 服务**：停止控制循环并失能机械臂，是紧急停车的首选：

```Bash
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

**hold_current_position**：在轨迹取消或异常时，控制器会自动调用此方法锁住当前关节位置，防止机械臂自由滑落。

### **状态机监控**

`/rebotarm/arm_status` 话题中的 `state_machine` 字段反映当前运行状态，是排查问题的

第一入口：

| 状态 | 含义 |
|-|-|
| `IDLE` | 空闲，等待指令 |
| `TRAJ_RUNNING` | 轨迹执行中 |
| `LOWLEVEL_STREAMING` | 低层单电机指令流式下发中 |
| `GRAVITY_COMP` | 重力补偿闭环运行中 |

```Bash
# 持续监控状态机
ros2 topic echo /rebotarm/arm_status --field state_machine
```

### **故障码排查**

`ArmStatus` 消息中的 `per_joint_status_code` 和 `error_codes` 字段用于故障定位：

`per_joint_status_code`：每个关节电机的状态码（`uint8`），来自底层 SDK 的

`motor.get_state().status_code`，非零值表示电机异常。`error_codes`：控制器级别的错误码字符串

```Bash
# 查看完整状态（含故障码）
ros2 topic echo /rebotarm/arm_status --once
```

### FAQ常见问题排查

### **找不到串口**：启动时报 `open serial port /dev/ttyACM0 failed`，用 `ls /dev/ttyACM\*`

查看实际设备，然后用 `channel:=/dev/ttyACM1` 覆盖。

**权限不足**：串口存在但无权限时，执行 `sudo usermod -a -G dialout \$USER`，

重新登录后生效。

### **RViz 模型不显示**：确认 URDF mesh 路径为

`package://rebotarm_bringup/description/meshes/...`。

### **轨迹执行失败**：检查首个轨迹点是否接近当前关节角（偏差需小于 `0.10 rad`），

最终位置误差需小于 `0.03 rad`。可用 `ros2 topic echo /rebotarm/joint_states --once`

查看当前关节角。

---

</div>
