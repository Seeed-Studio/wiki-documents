---
description: "Seeed 具身智能入门课程第七阶段：ROS2 与机器人系统集成第 34 章 — MoveIt2 运动规划：MoveIt 2 是 ROS2 生态中最主流的机械臂运动规划框架，负责逆运动学求解、碰撞检测、轨迹规划和轨迹执行。对于 reBot Arm B601-DM，MoveIt 2 将上层规划与底层驱动隔离开：规划在 move_group 节点中完成，执行通过 follow_joint_trajectory…"
title: 第 34 章 - MoveIt2 运动规划
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_34
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_34/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 7 阶段 · 第 34 章 · 理论与实践</span>
    <h2>34. MoveIt2 运动规划</h2>
    <p>
      MoveIt 2 是 ROS2 生态中最主流的机械臂运动规划框架，负责逆运动学求解、碰撞检测、轨迹规划和轨迹执行。对于 reBot Arm B601-DM，MoveIt 2 将上层规划与底层驱动隔离开：规划在 move_group 节点中完成，执行通过 follow_joint_trajectory action 下发给reBotArmController。本章从系统架构到真机执行，逐层拆解 MoveIt 2 的理论与实践。教学目的：让机械臂在复杂环境中自动规划安全运动。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

MoveIt 2 是 ROS2 生态中最主流的机械臂运动规划框架，负责逆运动学求解、碰撞检测、轨迹规划和轨迹执行。对于 reBot Arm B601-DM，MoveIt 2 将上层规划与底层驱动隔离开：规划在 `move_group` 节点中完成，执行通过 `follow_joint_trajectory` action 下发给`reBotArmController`。本章从系统架构到真机执行，逐层拆解 MoveIt 2 的理论与实践。教学目的：让机械臂在复杂环境中自动规划安全运动。

## 34.1 MoveIt2 系统架构

MoveIt 2 的核心是 `move_group` 节点，它充当运动规划的总调度器。围绕 `move_group`，reBot Arm 的 MoveIt 2 集成涉及以下组件：

| 组件 | 作用 | 对应文件/包 |
|-|-|-|
| `move_group` | 规划总调度：接收目标、调用 IK 和 planner、生成轨迹、下发执行 | `rebotarm_moveit_config` |
| URDF/Xacro | 机器人模型描述（连杆、关节、mesh、夹爪、gripper_tcp） | `rebotarm.urdf.xacro` |
| SRDF | 语义模型：规划组、末端执行器、默认状态、自碰撞矩阵 | `rebotarm.srdf` |
| Kinematics Plugin | IK 求解器 | `kinematics.yaml`（KDL） |
| OMPL Planner | 采样运动规划器 | `ompl_planning.yaml`（RRTConnect） |
| Trajectory Execution | 轨迹执行控制器 | `moveit_controllers.yaml` |
| Planning Scene | 环境模型：物体、碰撞、ACM | `pick_place.py` 中的场景操作 |
| RViz MotionPlanning | 可视化交互界面 | `moveit.rviz` |

### 仿真环境下的启动链路：

```Bash
ros2 launch rebotarm_moveit_config demo.launch.py
```

这条命令会启动 `move_group`、`robot_state_publisher`、`ros2_control_node`（mock 硬件）、

`joint_state_broadcaster`、`rebotarm_controller`、`gripper_controller` 和 RViz。

仿真环境使用 `mock_components/GenericSystem` 作为虚拟硬件，不需要真实机械臂。

### 真机环境下的启动链路：

```Bash
#RS：
# 终端 1：启动硬件驱动
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0

#DM：
ros2 launch rebotarm_bringup bringup.launch.py model:=dm channel:=/dev/ttyACM0

# 终端 2：启动 MoveIt（连接到已运行的驱动）
ros2 launch rebotarm_moveit_config hardware.launch.py
```

`hardware.launch.py` 不启动 `ros2_control_node`，而是通过 remap 将 `/joint_states`指向

`/<arm_namespace>/joint_states`，直接读取真实驱动发布的关节状态，并将规划好的轨迹通过 `follow_joint_trajectory` action 下发给 `reBotArmController`。

## 34.2 SRDF 和 Planning Group

SRDF（Semantic Robot Description Format）是 URDF 的语义补充层。URDF 描述了机器人的物理结构（连杆、关节、mesh），但不知道哪些关节"一起动"、哪个连杆是"末端"、哪些连杆"不会碰"。SRDF 回答这些问题。

reBot Arm 的 SRDF 定义了两个规划组：

| 规划组 | 组成 | 用途 |
|-|-|-|
| `arm` | 运动链 `base_link` → `gripper_tcp` | 6 轴机械臂运动规划 |
| `gripper` | `gripper_joint1`、`gripper_joint2` | 夹爪开闭控制 |

`arm` 组使用 `<chain>` 定义，从 `base_link` 到 `gripper_tcp`，覆盖 6 个关节加夹爪连杆。`gripper` 组使用 `<joint>` 逐个列举，只包含两个夹爪关节。

SRDF 还定义了命名状态（`group_state`），方便快速复位：

| 状态名 | 组 | 含义 |
|-|-|-|
| `home` | `arm` | 6 关节全零位 |
| `open` | `gripper` | 夹爪关节 `0.0715` rad（全开） |
| `closed` | `gripper` | 夹爪关节 `0.0` rad（全闭） |

末端执行器声明：

```XML
<end_effector name="gripper" parent_link="gripper_link"
              group="gripper" parent_group="arm"/>
```

`name="gripper"`：末端执行器名字

`parent_link="gripper_link"`：夹爪安装在哪个连杆上（机械臂最末连杆）

`group="gripper"`：夹爪对应的规划组

`parent_group="arm"`：从属的父规划组（机械臂 arm 组）

虚拟关节将机械臂固定到世界坐标系：

```XML
<virtual_joint name="FixedBase" type="fixed"
               parent_frame="world" child_link="base_link"/>
```

## 34.3 关节限制

关节限制分为两层：URDF 中的物理限位和 MoveIt 的规划限位。

URDF 层定义每个关节的角度范围（min/max position），是硬件级别的硬限制。

MoveIt 层在 `joint_limits.yaml` 中定义速度和加速度限制，用于轨迹时间参数化：

```YAML
joint_limits:
  joint1:
    has_velocity_limits: true
    max_velocity: 1.0          # rad/s
    has_acceleration_limits: true
    max_acceleration: 1.0      # rad/s^2
  # joint2 ~ joint6 同上
  gripper_joint1:
    has_velocity_limits: true
    max_velocity: 0.2          # rad/s
    has_acceleration_limits: true
    max_acceleration: 0.5      # rad/s^2
```

全局缩放因子：

```YAML
default_velocity_scaling_factor: 0.2
default_acceleration_scaling_factor: 0.2
```

这意味着默认规划只使用 20% 的最大速度和加速度，是安全保守的设置。在 demo 中可以单独覆盖，例如 `pick_place.yaml` 中 `velocity_scaling: 1.0` 表示全速规划。

## 34.4 碰撞模型和自碰撞

MoveIt 2 的碰撞检测基于 FCL（Flexible Collision Library），使用 URDF 中的 mesh 或基本几何体进行碰撞检测。为了加速，SRDF 中预定义了自碰撞矩阵（ACM，AllowedCollision Matrix），声明哪些连杆对"永远不需要检测碰撞"。

reBot Arm 的自碰撞矩阵分为两类：

**Adjacent（相邻连杆）**：通过关节直接连接的连杆对，物理上必然接触，无需检测：

| 连杆对 | 原因 |
|-|-|
| `base_link` - `link1` | 相邻 |
| `link1` - `link2` | 相邻 |
| `link2` - `link3` | 相邻 |
| `link3` - `link4` | 相邻 |
| `link4` - `link5` | 相邻 |
| `link5` - `link6` | 相邻 |
| `link6` - `gripper_link` | 相邻 |
| `gripper_link` - `gripper_left` | 相邻 |
| `gripper_link` - `gripper_right` | 相邻 |
| `gripper_link` - `gripper_tcp` | 相邻 |

**Never（永不碰撞）**：几何上不可能接触的连杆对：

| 连杆对 | 原因 |
|-|-|
| `gripper_left` - `gripper_tcp` | 永不 |
| `gripper_right` - `gripper_tcp` | 永不 |
| `gripper_left` - `gripper_right` | 永不 |

未出现在 ACM 中的连杆对（如 `base_link` 和 `link6`）会被正常检测碰撞。规划时，OMPL 会在采样空间中避开导致碰撞的关节配置。

## 34.5 Planning Scene

Planning Scene 是 MoveIt 对"世界"的建模，包含机器人本体、环境物体和碰撞关系。它是规划的前提：每次规划前，MoveIt 都会检查起始状态是否与 Planning Scene 中的物体碰撞。

Planning Scene 的核心操作通过三个 service 完成：

| Service | 类型 | 作用 |
|-|-|-|
| `/apply_planning_scene` | `ApplyPlanningScene` | 增删物体、修改 ACM、附加物体 |
| `/get_planning_scene` | `GetPlanningScene` | 查询当前场景 |
| `/plan_kinematic_path` | `GetMotionPlan` | 请求规划（不执行） |

## 34.6 笛卡尔路径

笛卡尔路径是指末端在笛卡尔空间中沿直线或曲线运动，而不是在关节空间中逐点插值。MoveIt 2 通过`compute_cartesian_path` 实现这一功能。在 reBot Arm 的 demo 中，`draw_square` 使用了笛卡尔路径的思路：控制 `gripper_tcp`

遍历同一平面矩形的四个角点。具体实现方式是：

1. 对每个角点，用 IK 求解对应的关节角：

```Python
target = self.compute_ik_joint_target(
    pose_stamped, seed_values, ik_link_name,
    timeout_sec, avoid_collisions=True, label=label
)
```

1. 用 OMPL 规划从当前关节角到目标关节角的轨迹：

```Python
request = GetMotionPlan.Request()
request.motion_plan_request.group_name = self.group_name
request.motion_plan_request.pipeline_id = "ompl"
request.motion_plan_request.planner_id = "RRTConnect"
request.motion_plan_request.allowed_planning_time = 5.0
```

1. 通过 `/execute_trajectory` action 执行轨迹。

`draw_square` 的关键参数：

| 参数 | 默认值 | 说明 |
|-|-|-|
| `rectangle_center` | `[0.28, 0.0, 0.12]` | 矩形中心，坐标系 `base_link` |
| `rectangle_width` | `0.04` | 矩形宽度（m） |
| `rectangle_height` | `0.08` | 矩形高度（m） |
| `tcp_rpy` | `[0.0, 1.57, 0.0]` | 末端姿态，默认夹爪竖直朝下 |
| `tcp_yaw_offsets` | `[0.0, 3.1416, -3.1416]` | IK 备选 yaw，避免 joint6 大幅绕转 |
| `avoid_collisions` | `true` | IK 求解时是否避碰 |

`tcp_yaw_offsets` 是一个实用技巧：IK 可能返回多个解，其中某些解会导致 `joint6`大幅旋转。通过提供多个备选 yaw，demo 会选择关节变化最小的解，减少不必要的绕转。

## 34.7 障碍物规划

当 Planning Scene 中存在障碍物时，OMPL 会在规划过程中自动避开它们。reBot Arm 的OMPL 配置如下：

```YAML
planning_plugin配置s:
  - ompl_interface/OMPLPlanner

request_adapters:
  - default_planning_request_adapters/ResolveConstraintFrames
  - default_planning_request_adapters/ValidateWorkspaceBounds
  - default_planning_request_adapters/CheckStartStateBounds
  - default_planning_request_adapters/CheckStartStateCollision

response_adapters:
  - default_planning_response_adapters/AddTimeOptimalParameterization
  - default_planning_response_adapters/ValidateSolution
  - default_planning_response_adapters/DisplayMotionPath

arm:
  default_planner_config: RRTConnect
  projection_evaluator: joints(joint1,joint2)
  longest_valid_segment_fraction: 0.005
```

关键配置说明：

| 配置 | 值 | 说明 |
|-|-|-|
| 默认 planner | `RRTConnect` | 双向快速随机树，适合大多数场景 |
| 投影评估器 | `joints(joint1,joint2)` | 采样空间投影维度，影响规划效率 |
| 最长有效段比例 | `0.005` | 碰撞检测插值粒度，越小越安全但越慢 |

请求适配器链（request_adapters）在规划前做四件事：

1. `ResolveConstraintFrames` — 将约束坐标系对齐到 planning frame
2. `ValidateWorkspaceBounds` — 验证目标在工作空间范围内
3. `CheckStartStateBounds` — 检查起始状态是否在关节限位内
4. `CheckStartStateCollision` — 检查起始状态是否碰撞

响应适配器链（response_adapters）在规划后做三件事：

1. `AddTimeOptimalParameterization` — 为轨迹添加时间参数（速度、加速度）
2. `ValidateSolution` — 验证轨迹是否满足约束
3. `DisplayMotionPath` — 在 RViz 中预览轨迹

`pick_place` demo 完整展示了障碍物规划流程：添加物体 → 规划到抓取位（避碰） →附加物体 → 规划到放置位（物体随臂运动，仍需避碰） → 分离物体 → 清理场景。

## 34.8 轨迹执行

MoveIt 2 规划出的轨迹需要通过 controller 下发给硬件执行。仿真和真机使用不同的controller 配置。

**仿真环境**（`moveit_controllers.yaml`）：

```YAML
moveit_simple_controller_manager:
  controller_names:
    - rebotarm_controller
    - gripper_controller

  rebotarm_controller:
    action_ns: follow_joint_trajectory
    type: FollowJointTrajectory
    default: true
    joints: [joint1, joint2, joint3, joint4, joint5, joint6]

  gripper_controller:
    action_ns: follow_joint_trajectory
    type: FollowJointTrajectory
    default: false
    joints: [gripper_joint1, gripper_joint2]
```

仿真中，`rebotarm_controller` 和 `gripper_controller` 都是 `ros2_control` 的mock 硬件 controller，轨迹直接在虚拟硬件上执行。

**真机环境**（`moveit_hardware_controllers.yaml`）：

```YAML
moveit_simple_controller_manager:
  controller_names:
    - rebotarm

  rebotarm:
    action_ns: follow_joint_trajectory
    type: FollowJointTrajectory
    default: true
    joints: [joint1, joint2, joint3, joint4, joint5, joint6]
```

真机配置只有一个 `rebotarm` controller，指向 `reBotArmController`的`/rebotarm/follow_joint_trajectory` action。夹爪在真机模式下通过独立的`/rebotarm/gripper/command` action（`GripperCommand` 类型）控制，不走`follow_joint_trajectory`

轨迹执行容差：

```YAML
trajectory_execution:
  allowed_execution_duration_scaling: 1.2   # 允许执行时间放大 20%
  allowed_goal_duration_margin: 0.5          # 到位后额外等待 0.5s
  allowed_start_tolerance: 0.05              # 起始状态偏差容差 0.05 rad
  execution_duration_monitoring: true        # 启用执行时间监控
```

真机执行流程：

1. `move_group` 规划出 `RobotTrajectory`
2. 通过 `/execute_trajectory` action 将轨迹发给 `MoveItSimpleControllerManager`
3. Controller manager 将轨迹转换为 `follow_joint_trajectory` goal，发给`reBotArmController` 的

`/rebotarm/follow_joint_trajectory`

1. `reBotArmController` 内部执行轨迹（校验 → pos_vel 模式 → 定时下发 → 到位检查）
2. 执行结果回传给 `move_group`

如果执行失败（超时、到位偏差过大），`move_group` 会返回错误码，demo 脚本据此决定是否中止。

## 34.9 运行 Demo

### **画矩形 demo**

先启动 MoveIt 仿真环境，再另开终端运行：

```Bash

#RS 真机
#终端 1：
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=false
#终端 2：
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
#终端 3：
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs
#真机前确认机械臂周围空旷、急停可用。demo.launch.py 是仿真，别和真机 bringup 同时开。
```

```Bash
#DM 真机
#终端 1：
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm use_rviz:=false
#终端 2：
ros2 launch rebotarm_moveit_config hardware.launch.py model:=dm
#终端 3：
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=dm
#真机前确认机械臂周围空旷、急停可用。demo.launch.py 是仿真，别和真机 bringup 同时开。
```

`draw_square` 会控制 `gripper_tcp` 遍历矩形的四个角点，验证 IK、轨迹规划和执行

链路是否正常。默认参数在 `src/rebotarm_moveit_demos/config/draw_square.yaml`。

<figure view-type="Preview"><source name="409527786.mp4" mime="video/mp4" origin-height="360.000000" origin-width="640.000000" size="6127139" token="PMFUbKMb0o3gWlxmOp6cQxfDnbg"/></figure>

### **抓取放置 demo**

`pick_place` 会在规划场景中添加一个待抓取物体，控制夹爪打开 → 移动到抓取位 →闭合夹爪 → 附加物体 → 移动到放置位 → 释放物体。默认参数在`src/rebotarm_moveit_demos/config/pick_place.yaml`。

<callout emoji="🦄">
真机运行前，请先确认夹爪开闭方向和限位。仿真夹爪关节位置和真实硬件夹爪电机位置
是两套不同参数：
</callout>

| 参数 | 仿真值 | 硬件值 |
|-|-|-|
| 夹爪全开 | `0.045`（单侧 rad） | `-5.0`（电机位置） |
| 夹爪全闭 | `0.0`（单侧 rad） | `0.0`（电机位置） |

<figure view-type="Preview"><source name="18446744072629597584.mp4" mime="video/mp4" origin-height="360.000000" origin-width="640.000000" size="4209331" token="QvAWbxrpGoynKuxwDhTcizpNnlh"/></figure>

```Bash
#RS 真机
#终端 1：
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=false
#终端 2：
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
#终端 3：
ros2 launch rebotarm_moveit_demos pick_place.launch.py
```

```Bash
#DM 真机
#终端 1：
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm use_rviz:=false
#终端 2：
ros2 launch rebotarm_moveit_config hardware.launch.py model:=dm
#终端 3：
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=dm
#真机前确认机械臂周围空旷、急停可用。demo.launch.py 是仿真，别和真机 bringup 同时开。
```

### FAQ

**MoveIt 规划失败怎么办？**

检查以下几点：

- 起始关节状态是否在限位内（`CheckStartStateBounds` 适配器会报错）
- 起始状态是否与场景物体碰撞（`CheckStartStateCollision` 适配器会报错）
- 目标位姿是否在工作空间范围内（`ValidateWorkspaceBounds` 适配器会报错）
- IK 是否能求解到目标（`ik_timeout` 默认 5s，可增大）
- 规划时间是否足够（`planning_time` 默认 5s，可增大）

**RViz 中 MotionPlanning 插件不显示？**

确认 `demo.launch.py` 已启动，且 RViz 配置文件加载了 `moveit.rviz`。如果手动打开 RViz，需要手动添加 MotionPlanning 显示。

**仿真正常但真机执行失败？**

检查 `hardware.launch.py` 是否正确 remap 了 `/joint_states` 到`/<arm_namespace>/joint_states`。确认 `reBotArmController` 已启动且使能。

轨迹首点偏差需小于 `0.10 rad`，最终到位偏差需小于 `0.03 rad`。

**joint6 旋转过多？**

IK 可能返回多个解，导致 `joint6` 大幅绕转。`draw_square` 通过 `tcp_yaw_offsets`参数提供备选 yaw 来缓解。自定义应用可以在 IK 求解后选择关节变化最小的解。

**夹爪在真机上方向反了？**

检查 `pick_place.yaml` 中的 `hardware_open_gripper_position`  `hardware_closed_gripper_position`。B601-DM 默认开 `-5.0`、闭 `0.0`，如果电机方向相反，需要交换这两个值。

---

</div>
