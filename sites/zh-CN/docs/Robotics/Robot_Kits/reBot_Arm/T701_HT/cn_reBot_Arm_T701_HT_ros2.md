---
title: reBot Arm T701 HT ROS 2 SDK
sidebar_label: ROS 2 SDK
toc_max_heading_level: 2
description: 在 Ubuntu 22.04 和 ROS 2 Humble 上安装 T701-HT ROS 2 SDK，使用 RViz2、运动学仿真和真机例程，并通过话题、服务和轨迹 action 接入机械臂。
keywords:
  - reBot
  - T701 HT
  - ROS 2
  - Humble
  - RViz2
  - QP IK
slug: /rebot_t701_ht_ros2
last_update:
  date: 11/24/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reBot Arm T701 HT ROS 2 SDK

<div className="rebot-page">

<div align="center">
  <img
    width={800}
    height={586}
    style={{ height: 'auto', aspectRatio: '800 / 586', objectFit: 'contain', backgroundColor: '#000' }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp"
    alt="reBot Arm T701 HT 双臂机器人"
  />
</div>

<GitHubStarButton
  owner="Welt-liu"
  repo="T701_ROS2_SDK"
  fallbackCount={0}
  ariaLabel="在 GitHub 上为 T701-HT ROS 2 SDK 点亮 Star"
/>

T701-HT ROS 2 SDK 提供关节控制、多点轨迹、QP 逆运动学、夹爪、回零和阻尼刹车。你可以先在不连接机械臂的情况下，通过 RViz2 查看模型和运行例程，再切换到真机，并从自己的 ROS 2 节点发送命令。

[SDK 仓库](https://github.com/Welt-liu/T701_ROS2_SDK) 提供源码、模型、依赖安装包和中英文 README。本文所有命令均从包含 `start.sh` 的 **`T701_ROS2_SDK` 根目录**执行。

:::note[与 Python SDK 分别安装]

本章使用系统 Python 3.10 和 SDK 内的 `.venv`，无需激活快速开始中的 `t701-ht` Conda 环境。同一时间只用一套 SDK 控制同一块通信板。现有的 [Pinocchio](./cn_reBot_Arm_T701_HT_pinocchio.md) 和 [VR 遥操作](./cn_reBot_Arm_T701_HT_vr.md) 页面介绍的是 Python SDK 例程；ROS 2 包尚未包含 VR 输入接收器、MoveIt、`ros2_control` 插件或 Gazebo 物理仿真。

:::

<section className="section-card">

## 安装与构建

### 安装系统依赖

| 环境项 | 要求 |
| --- | --- |
| 操作系统 | Ubuntu 22.04 |
| ROS 版本 | ROS 2 Humble |
| Python | 系统 Python 3.10，使用 SDK 内的 `.venv` |
| 处理器架构 | Linux x86_64 或 ARM64 |
| 模型与数值库 | apt 提供的 Pinocchio、FCL，以及 NumPy 1.x；仿真和真机均需要 |

先按 [ROS 2 Humble 官方安装说明](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html) 配置 ROS 软件源，再安装依赖：

```bash
sudo apt update
sudo apt install python3-venv python3-pip python3-pytest \
  python3-colcon-common-extensions python3-numpy python3-scipy python3-yaml \
  python3-jinja2 python3-joblib \
  ros-humble-desktop ros-humble-control-msgs ros-humble-diagnostic-msgs \
  ros-humble-pinocchio ros-humble-hpp-fcl
```

Pinocchio 和 FCL 用于运动学、重力计算和网格碰撞检查，仿真和真机都需要安装。使用本章的 apt 模型库和 NumPy 1.x，不直接复用原 Python SDK 的 Conda 环境。

### 获取 SDK

```bash
git clone https://github.com/Welt-liu/T701_ROS2_SDK.git
cd T701_ROS2_SDK
```

### 创建环境并构建

```bash
python3.10 -m venv --system-site-packages .venv
.venv/bin/python -m pip install \
  'numpy>=1.23,<2' 'scipy>=1.9,<2' 'PyYAML>=6,<7' 'osqp>=1,<2' pytest
./build.sh
```

`build.sh` 和 `start.sh` 会加载 ROS 2 Humble 与本工作空间。首次安装完成后，日常操作直接使用 `start.sh`。移动目录或换电脑后，在新位置重新创建 `.venv` 并构建。仿真不需要安装电机库；真机模式的安装步骤见下方「连接真机」标签。

</section>

<section className="section-card">

## 选择运行方式

| 对比项 | 仿真 `sim` | 真机 `real` |
| --- | --- | --- |
| 机械臂连接 | 不需要机械臂或通信板 | 需要机械臂供电并连接通信板 |
| 电机库 | 不需要安装 | 安装匹配电脑架构的 wheel |
| 启动后的运动使能 | 自动使能 | 默认禁用，检查反馈后手动使能 |
| 默认通信域 | `20` | `21` |

准备两个终端：**终端 A 持续运行驱动，终端 B 运行例程**。每个终端都位于 SDK 根目录，使用相同的 `sim` 或 `real` 前缀。以下例程按需选择，每次只执行一个。

<Tabs defaultValue="sim" groupId="t701-ros2-mode">
<TabItem value="sim" label="仿真与 RViz2">

不连接机械臂即可运行。仿真按指令更新关节状态，用于模型显示和 ROS 接口练习，不模拟动力学、接触或重力下落。

### 终端 A：启动仿真

```bash
./start.sh sim arms:=dual
```

保持该终端运行。RViz2 的 Fixed Frame 使用 `base_link`，模型应随例程更新。只查看单臂时，关闭当前驱动后，将 `arms:=dual` 改为 `arms:=left` 或 `arms:=right`。

### 终端 B：读取状态

```bash
./start.sh sim demo --mode state --duration 5
```

查看一次关节位置、速度、力矩和左末端位姿：

```bash
./start.sh sim topic echo /t701_ht/motor_states --once
./start.sh sim topic echo /t701_ht/left_tool_pose --once
```

### 终端 B：运行运动例程

| 例程 | 预期行为 | 本例参数与选臂 |
| --- | --- | --- |
| 关节往返 | 所选机械臂 J1 从当前位置往返 | 幅度 `0.10 rad`，运动时间 `5 s` |
| 多点轨迹 | 从当前位置执行四段小幅轨迹 | 运动时间 `8 s` |
| QP 逆运动学 | 根据当前姿态生成附近的末端目标，求解并检查实际到位 | 默认示例为左臂；右臂使用 `--side right`，且驱动需选择右臂或双臂 |
| 夹爪控制（暂时无可见效果） | 仅设置内部模拟目标；当前模型不显示夹指开合，无法验证开度或抓取效果 | 左侧目标 `0.4 rad`，默认观察 `5 s`；右侧使用 `--side right` |

以下每组命令分别运行一个例程。

**关节往返**

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode joint --duration 5 --amplitude 0.10
```

**多点轨迹**

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode trajectory --duration 8 --amplitude 0.10
```

**QP 逆运动学**

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode ik --side left
```

**夹爪控制（暂时无可见效果）**

:::info[当前仿真限制]

当前夹爪作为整体末端模型显示，没有独立的夹指运动关节。该案例只设置内部模拟目标，RViz2 中不会出现开合动作；终端显示的机械臂关节状态也不包含夹爪位置，不能据此验证夹爪开度、到位或抓取效果。此限制适用于当前 `sim` 案例。

:::

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode gripper --side left --gripper 0.4
```

以上运动例程完成后会回零并进入阻尼刹车状态，因此每次运行下一例程前都需要使能。关节和轨迹例程的 `--duration` 不包含最终回零时间。RViz2 不显示夹指独立开合动画。

### 终端 B：回零与停止

需要单独回零时执行：

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode home
```

立即停止模拟运动并禁用控制：

```bash
./start.sh sim demo --mode stop
```

</TabItem>
<TabItem value="real" label="连接真机">

先按 [快速开始](./cn_reBot_Arm_T701_HT_Getting_Started.md) 完成装配、供电和零点确认。本章使用独立的 ROS 2 SDK 目录和配置。

:::warning[首次运行真机]

确认机械臂固定牢靠，取下负载并清空运动范围和回零路径。首次运行选择单臂，全程现场看护。启动驱动后先检查反馈，再使能运动。

:::

### 安装电机库

按电脑架构选择一条命令，只需安装一次。

Linux x86_64、Python 3.10：

```bash
.venv/bin/python -m pip install hardware_wheels/hightorque_robot-1.2.0-cp310-cp310-linux_x86_64.whl
```

Linux ARM64、Python 3.10：

```bash
.venv/bin/python -m pip install hardware_wheels/hightorque_robot-1.0.0-cp310-cp310-linux_aarch64.whl
```

### 检查接线与串口

| 连接项 | 接线位置 |
| --- | --- |
| 左臂 | 通信板 CAN1 |
| 右臂 | 通信板 CAN2 |
| 电脑 | 通过 USB 连接通信板 |

查看通信板的 USB 身份，将 `src/t701_ht_description/config/serial_binding.yaml` 中的 `board_serial` 设为实际通信板序列号。驱动按板子身份查找串口，无需根据 ACM 编号变化手动调整配置。

```bash
ls -l /dev/serial/by-id/
ls -l /dev/ttyACM*
id -nG
```

若当前用户不属于 `dialout` 组，执行下列命令后退出桌面登录并重新登录：

```bash
sudo usermod -aG dialout "$USER"
```

### 终端 A：启动真机驱动

首次运行使用左臂：

```bash
./start.sh real arms:=left
```

右臂使用 `arms:=right`，双臂使用 `arms:=dual`。更换选臂前先关闭当前驱动。启动后只读取反馈，默认不会使能运动；保持终端 A 运行。

### 终端 B：检查反馈

```bash
./start.sh real demo --mode state --duration 5
./start.sh real topic echo /t701_ht/motor_states --once
./start.sh real topic echo /diagnostics --once
```

确认所选机械臂的关节反馈和诊断无误后，再运行运动例程。夹爪例程用于观察实际开合响应。

### 终端 B：运行运动例程

| 例程 | 预期行为 | 本例参数与选臂 |
| --- | --- | --- |
| 关节往返 | 所选机械臂 J1 从当前位置往返 | 幅度 `0.10 rad`，运动时间 `5 s` |
| 多点轨迹 | 从当前位置执行四段小幅轨迹 | 运动时间 `8 s` |
| QP 逆运动学 | 根据当前姿态生成附近的末端目标，求解并检查实际到位 | 默认示例为左臂；右臂使用 `--side right`，且驱动需选择右臂或双臂 |
| 夹爪控制 | 设置夹爪电机目标并观察响应 | 左侧目标 `0.4 rad`，默认观察 `5 s`；右侧使用 `--side right` |

以下每组命令分别运行一个例程。

**关节往返**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode joint --duration 5 --amplitude 0.10
```

**多点轨迹**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode trajectory --duration 8 --amplitude 0.10
```

**QP 逆运动学**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode ik --side left
```

**夹爪控制**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode gripper --side left --gripper 0.4
```

以上运动例程完成后，会将驱动所选机械臂的关节和夹爪回零，再进入阻尼刹车状态；每次运行下一例程前都需要重新使能。关节和轨迹例程的运动时间不包含回零时间。

### 终端 B：回零与停止

需要单独回零时执行：

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode home
```

立即请求电机阻尼刹车并禁用控制，不执行回零路径：

```bash
./start.sh real demo --mode stop
```

</TabItem>
</Tabs>

| 参数 | 作用 | 范围或行为 |
| --- | --- | --- |
| `arms` | 启动驱动时选择机械臂，决定关节往返、多点轨迹及回零的作用范围 | `left`、`right` 或 `dual` |
| `--side` | 选择 IK 或夹爪操作侧 | `left` 或 `right`；所选侧须已由驱动启动 |
| `--amplitude` | 关节和轨迹例程的幅度 | `(0, 0.20]` rad |
| `--gripper` | 夹爪电机角度目标 | `[-0.2, 2.2]` rad |
| `--duration` | 关节和轨迹的运动时间，或状态和夹爪的观察时间 | 关节和轨迹不包含最终回零时间；IK 根据到位状态结束，不用此参数指定时长 |

在双臂模式下，关节例程两臂同步执行，右侧 J1 取反号；IK 例程的另一臂保持当前位置。

</section>

<section className="section-card">

## RViz2 与无窗口运行

<div className="image-frame">

![T701-HT ROS 2 SDK 的 RViz2 模型与坐标系](https://raw.githubusercontent.com/Welt-liu/T701_ROS2_SDK/main/assets/docs/rviz_overview.png)

</div>

| RViz2 设置 | 设置值或操作 | 用途 |
| --- | --- | --- |
| Fixed Frame | `base_link` | 使用机器人基座作为显示参考坐标系 |
| TF | 勾选启用 | 查看各坐标系 |
| RobotModel → Collision Enabled | 打开 | 查看碰撞网格 |

真机画面使用实际关节反馈，仿真画面使用模拟关节状态。

无图形桌面时，在终端 A 启动不带 RViz2 的驱动：

```bash
./start.sh sim arms:=dual rviz:=false
```

真机使用 `./start.sh real arms:=left rviz:=false`。驱动已运行时，可在另一终端单独打开 RViz2：

```bash
./start.sh sim run rviz2 rviz2 -d src/t701_ht_ros2/config/t701_ht.rviz
```

真机将前缀改为 `real`。出现 GLX/OpenGL 错误时，先关闭原驱动，再使用 `T701_HT_SOFTWARE_RENDERING=1 ./start.sh sim` 或对应的 `real` 命令重启。

驱动与 RViz2 分别运行在两台电脑时，两边使用相同的 SDK 模式和通信域，在启动前设置 `export ROS_LOCALHOST_ONLY=0`，并允许局域网 DDS 通信。只启动一个驱动。

</section>

<section className="section-card">

## 从 ROS 2 程序接入

### 常用接口

| 接口 | 消息类型 | 用途 |
| --- | --- | --- |
| `/joint_states` | `sensor_msgs/msg/JointState` | URDF 坐标下的状态，用于 TF 和 RViz2 |
| `/t701_ht/motor_states` | `sensor_msgs/msg/JointState` | 电机坐标下的关节位置、速度和力矩 |
| `/t701_ht/joint_command` | `sensor_msgs/msg/JointState` | 所选机械臂的完整关节目标 |
| `/t701_ht/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | 多点轨迹、反馈、结果和取消 |
| `/t701_ht/left_tool_pose`、`/t701_ht/right_tool_pose` | `geometry_msgs/msg/PoseStamped` | 末端实际位姿 |
| `/t701_ht/left_target_pose`、`/t701_ht/right_target_pose` | `geometry_msgs/msg/PoseStamped` | QP 末端目标 |
| `/t701_ht/left_gripper`、`/t701_ht/right_gripper` | `std_msgs/msg/Float64` | 夹爪电机角度目标 |
| `/t701_ht/home`、`/t701_ht/stop` | `std_srvs/srv/Trigger` | 请求回零或立即阻尼刹车 |
| `/t701_ht/set_enabled` | `std_srvs/srv/SetBool` | 使能或禁用运动 |
| `/diagnostics` | `diagnostic_msgs/msg/DiagnosticArray` | 模式、使能、活动目标和错误状态 |

单臂模式只创建所选侧的末端和夹爪接口。电机位置、速度、力矩单位分别为 rad、rad/s、N·m；末端位置单位为 m。

:::note[电机坐标与模型坐标]

关节命令使用 `left_joint1`～`left_joint7` 和 `right_joint1`～`right_joint7`。`/joint_states` 使用 `A_l_joint1_link` 等 URDF 名称，并已做方向换算，不能原样回填到电机命令。每条关节命令必须包含驱动所选侧的全部关节，双臂模式为 14 轴。

:::

### 发送关节目标

以下示例只用于**左臂仿真驱动**。先关闭当前驱动，在终端 A 执行：

```bash
./start.sh sim arms:=left
```

在终端 B 发送七轴目标，默认平滑过渡时间为 2 秒：

```bash
./start.sh sim demo --mode enable
./start.sh sim topic pub --once /t701_ht/joint_command sensor_msgs/msg/JointState \
  '{name: [left_joint1, left_joint2, left_joint3, left_joint4, left_joint5, left_joint6, left_joint7], position: [0.10, 0, 0, 0, 0, 0, 0]}'
```

直接话题目标和轨迹 action 完成后保持终点，需要回零时再执行 `./start.sh sim demo --mode home`。双臂命令、轨迹 action 和 QP 位姿消息的完整示例见 [SDK README 的标准 ROS 指令](https://github.com/Welt-liu/T701_ROS2_SDK/blob/main/README.md)。

位姿目标在 `base_link` 中表达，四元数顺序为 x、y、z、w，需归一化。一次只执行一个运动任务；当前接口不用于直接接收高频连续遥操目标。

</section>

<section className="section-card">

## 启动参数与退出

| 参数 | 默认值 | 说明 |
| --- | --- | --- |
| `arms` | `dual` | `left`、`right` 或 `dual` |
| `rviz` | `true` | 是否启动 RViz2 |
| `state_rate` | `50.0` | 控制与状态发布频率，范围为 5～100 Hz |
| `enable_on_start` | `false` | 真机是否在启动时使能；仿真自动使能 |

参数变更后重启驱动。无参数运行 `./start.sh` 默认启动仿真，例程会检查驱动模式。

| 模式 | 默认通信域 | 自定义环境变量 |
| --- | --- | --- |
| 仿真 | `20` | `T701_HT_SIM_DOMAIN_ID` |
| 真机 | `21` | `T701_HT_REAL_DOMAIN_ID` |

多机器人使用自定义通信域时，在相关终端设置相同的环境变量值。仿真与真机的值必须不同，范围为 0～232。

| 触发情况 | 驱动行为 | 注意事项 |
| --- | --- | --- |
| 关节、轨迹、IK 或夹爪例程正常完成 | 回零并阻尼刹车，完成后禁用运动 | 下次运动前重新使能 |
| 终端 B 第一次按 Ctrl+C | 请求结束当前运动并回零 | 保持终端 A 运行，等待收尾完成 |
| 终端 A 按 Ctrl+C | 条件满足时，回零刹车后退出 | 需控制已使能、反馈有效且回零路径通过检查 |
| 再次中断 | 立即请求阻尼刹车 | 不继续等待回零 |
| 显式停止或禁用 | 立即请求阻尼刹车 | 不执行回零 |
| 轨迹取消 | 结束原轨迹并请求回零 | 根据实际状态确认回零完成 |

服务返回 `success: true` 表示请求已受理，实际回零完成以关节状态和诊断 `mode=braked` 为准。

默认几何检查覆盖所选机械臂自碰撞、与本体碰撞，以及双臂模式下的两臂互撞。单臂模式不检查另一臂，夹指、线缆和外部障碍物未纳入模型；离散网格检查不代表实测制动距离。反馈失效或回零路径被拒绝时，驱动报告错误并尝试刹车，不报告回零成功。

</section>

<section className="section-card">

## 常见问题

| 现象 | 处理方式 |
| --- | --- |
| 找不到 `ros2` 或 `rclpy` | 检查 ROS 2 Humble 安装，使用本章的系统 Python 3.10 环境后重新构建 |
| NumPy 或 Python 扩展导入错误 | 使用 NumPy 1.x，不混用 Conda 与 ROS 原生库；在 SDK 根目录重新创建 `.venv` |
| `control is disabled` | 在相同模式的终端 B 先执行 `demo --mode enable`。每次例程回零刹车后都需要重新使能 |
| 例程找不到驱动或提示模式不匹配 | 终端 A 保持运行，核对双方的 `sim` / `real` 前缀和通信域 |
| 电机库、串口或 USB 身份错误 | 安装匹配架构的 wheel，检查接线、`board_serial` 和 `dialout` 权限 |
| RViz2 无模型或 TF 报错 | 检查 `/joint_states`、`/robot_description`，Fixed Frame 使用 `base_link` |
| 轨迹被拒绝或 QP 不收敛 | 检查关节名称、完整轴数、时间、限位、位姿坐标系和诊断；先运行本章的小幅例程 |

</section>

</div>
