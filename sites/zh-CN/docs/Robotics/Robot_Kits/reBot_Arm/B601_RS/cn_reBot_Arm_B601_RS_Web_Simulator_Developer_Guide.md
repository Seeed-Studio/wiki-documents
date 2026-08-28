---
description: 本教程面向开发者，介绍 reBot Arm B601-RS 网页控制台、ROS 2、RobStride/SocketCAN、MuJoCo 仿真、视觉抓取与 LLM/MCP Agent 的安装、运行和二次开发流程。
title: reBot Arm B601-RS Web 仿真器与 ROS 2/MuJoCo 开发者教程
keywords:
  - reBot Arm
  - B601-RS
  - Web Simulator
  - Three.js
  - ROS 2
  - RobStride
  - SocketCAN
  - MuJoCo
  - LLM
  - MCP
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_web_simulator_developer_guide
last_update:
  date: 2026-08-24
  author: Yang-Ci
translation:
  skip: [zh-CN]
createdAt: '2026-08-13'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_web_simulator_developer_guide/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# reBot Arm B601-RS Web 仿真器与 ROS 2/MuJoCo 开发者教程

<RebotRsDocNav />

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://detail.tmall.com/item.htm?id=1057521963559" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License: Apache 2.0" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Jazzy-blue.svg" alt="ROS2 Jazzy" />
    <img src="https://img.shields.io/badge/Node.js-18%2B-green.svg" alt="Node.js 18+" />
    <img src="https://img.shields.io/badge/Three.js-r128-orange.svg" alt="Three.js r128" />
    <img src="https://img.shields.io/badge/Version-v1.0.0-brightgreen.svg" alt="Version v1.0.0" />
    <img src="https://img.shields.io/badge/Platform-Cross%20Platform-lightgrey.svg" alt="Platform" />
</p>

<p align="center">
  <strong>Three.js 可视化 · ROS 2 · SocketCAN · MuJoCo 仿真 · LLM/MCP 控制</strong>
</p>

reBot Arm B601-RS 工程集成了 Three.js 网页控制台、ROS 2 真机驱动、RS 专用 MuJoCo 动力学场景、视觉检测、轨迹与逆运动学，以及可选的 LLM/MCP 抓取 Agent。本教程介绍如何安装、启动和二次开发整套系统。

> **重要安全提示**
>
> 真机启动前必须固定机械臂、清空工作区、确认物理急停可用，并先在仿真中验证动作。第一次真机测试建议将速度限制为 `0.2–0.4 rad/s`，且一次只移动一个关节。

## 项目特点

1. **RS 独立机械模型**

   网页和 ROS 2 使用 `ReBot_Arm_RS.urdf` 及配套 STL 网格。网页服务器优先读取 `rebotarm_ros2_RS` 工作区中的模型，并保留一份离线后备模型。

2. **RobStride + SocketCAN 真机链路**

   真机默认使用 Linux SocketCAN 接口 `can0`，波特率为 `1 Mbps`。控制器通过 `reBotArm_control_py` 与 RobStride 电机通信。

3. **MIT 125 Hz 在线控制**

   网页以最高 60 Hz 更新目标，真机控制器以 125 Hz 生成受速度、加速度和 jerk 限制的在线参考，并发送 MIT `q/dq/kp/kd/tau` 命令。网页目标更新不会阻塞电机控制循环。

4. **真机与仿真命名空间隔离**

   真机默认使用 `/rebotarm`，仿真默认使用 `/rebotarm_rs`。同一套网页可切换控制目标，开发时也可以同时运行真机和 Fake Driver 进行接口对比。

5. **RS 专用 MuJoCo 场景**

   MuJoCo 支持 `physics` 和 `kinematic` 两种模式。默认 `physics` 模式包含重力、接触、桌面物体、俯视相机、颜色检测和物理抓取验证。

6. **反馈驱动的网页动画**

   真机模式中，实线模型表示实际反馈，半透明模型表示控制目标。网页对 rosbridge 到达的测量值进行自适应低通、死区和显示插值，避免把本地动画误当成真机姿态。

7. **安全状态机**

   系统对轨迹、重力补偿、安全回零和网页连续命令进行仲裁。非零姿态失能时会先安全回零并验证；验证失败则保持使能，避免机械臂突然掉落。

8. **视觉抓取与 LLM/MCP Agent**

   仿真场景提供红色、蓝色和黄色物体，支持俯视检测、IK、抓取、抬升验证和放置。MCP 工具可独立使用，也可以连接大模型，通过自然语言调用结构化机器人操作。

## 接线与网络说明

### RS 真机 CAN 接线

1. 固定机械臂并清空运动范围。
2. 连接 RobStride 电机 CAN 总线、供电和 USB-CAN 适配器。
3. 确认 CAN_H、CAN_L、GND 接线正确，并按硬件要求配置终端电阻。
4. 接通电源后，在 Ubuntu 中确认存在目标 CAN 适配器。

配置 `can0`：

```bash
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

只读观察总线帧：

```bash
candump can0
```

看到持续 CAN 帧说明接口已收到数据。按 `Ctrl+C` 退出 `candump`。

> 如果接口进入 `BUS-OFF`，请先检查供电、接地、波特率、终端电阻、电机 ID 和 CAN 接线。不要通过反复重启控制器掩盖硬件故障。

### 网页与 ROS 2 网络

网页经 rosbridge WebSocket 与 ROS 2 通信，默认端口为 `9090`：

```text
网页控制台：http://<Ubuntu-IP>:3002
rosbridge： ws://<Ubuntu-IP>:9090
MCP Server： http://<Ubuntu-IP>:8081/mcp
Text Agent： http://<Ubuntu-IP>:8082
```

网页与 ROS 2 在同一台机器上时可以使用 `localhost`。从局域网其他电脑访问时，不能填写浏览器所在电脑自己的 `localhost`，应改为运行 ROS 2 服务的 Ubuntu IP。

项目启动脚本默认设置 ROS 2 发现范围为 `LOCALHOST`，避免 Wi-Fi 漫游或 IP 变化导致同机节点进入不同 DDS 网络。这不影响网页从其他设备访问 HTTP/WebSocket 端口。如需让另一台计算机直接加入 ROS 图，在相关终端中统一设置：

```bash
export REBOTARM_ROS_DISCOVERY_RANGE=SUBNET
```

## 环境要求

| 项目 | 推荐要求 |
|---|---|
| 后端操作系统 | Ubuntu 24.04 |
| ROS 2 | Jazzy |
| 兼容参考环境 | Ubuntu 22.04 + ROS 2 Humble（真机需自行回归） |
| Python | 3.12（Jazzy）或 3.10（Humble） |
| Node.js | 18 及以上 |
| 浏览器 | 当前稳定版 Chrome、Chromium、Edge 或 Firefox |
| CAN 工具 | `iproute2`、`can-utils` |
| 真机 CAN | `can0`，1 Mbps |
| MuJoCo | 由项目 Python 环境安装 |

## 安装步骤

### 步骤 1：获取工程

```bash
git clone https://github.com/Yang-Ci/ReBot_Arm_web_RS.git ~/reBot_Arm_Mujoco-RS
cd ~/reBot_Arm_Mujoco-RS
```

下文以项目目录 `~/reBot_Arm_Mujoco-RS` 为例。如果实际目录不同，请替换命令中的路径。

### 步骤 2：只读检查环境

```bash
cd ~/reBot_Arm_Mujoco-RS
./setup.sh --check
```

该命令只检查系统，不会修改环境。检查项包括：

- Ubuntu、Python 和 Node.js 版本；
- ROS 2、rosbridge、MoveIt 和构建工具；
- SocketCAN 工具与 `can0`；
- Python 虚拟环境及关键模块；
- ROS 2 工作区构建结果；
- 网页 `package.json` 和 `.env`。

### 步骤 3：一键安装和构建

```bash
./setup.sh --yes
./rebotarm doctor
```

安装脚本会安装缺失的 ROS 2、Node.js、SocketCAN 和构建依赖，创建 `rebotarm_ros2_RS/.venv`，安装 RS 真机、MuJoCo 和 Agent 的 Python 依赖，执行 rosdep，并通过下面的命令构建 ROS 2 工作区：

```bash
colcon build --symlink-install
```

控制 SDK 与 MuJoCo 模型作为普通文件由主仓库跟踪，不是 Git submodule，也没有嵌套 Git 仓库。现有 `.env`、SDK 和模型不会被安装脚本重置。

如果系统依赖已经齐全，只需重新准备和构建 ROS 工作区：

```bash
./scripts/setup_rs_workspace.sh
```

修改 Python 包以后通常只需：

```bash
source scripts/rs_env.sh
cd rebotarm_ros2_RS
colcon build --symlink-install
```

### 步骤 4：配置网页环境变量

首次安装会从 `.env.example` 创建 `reBotArm_simulator-RS/.env`。关键字段如下：

```bash
PORT=3002
HTTPS=0
REBOTARM_TEXT_AGENT_URL=http://localhost:8082
REBOTARM_MCP_URL=http://localhost:8081/mcp
MOTORBRIDGE_WS_URL=ws://127.0.0.1:9002
MOTORBRIDGE_WS_TOKEN=
```

如果网页与 ROS 2/Agent 不在同一台机器，请将代理地址改为后端机器的 IP。API Key 和 Token 只应存放在环境变量或未提交的本地 `.env` 中。

## 项目启动

<Tabs defaultValue="web" groupId="launch-mode" queryString>

<TabItem value="web" label="纯网页演示">

只启动 Node.js 网页服务器，不启动 rosbridge 或 ROS 2：

```bash
cd ~/reBot_Arm_Mujoco-RS/reBotArm_simulator-RS
npm start
```

浏览器打开：

```text
http://localhost:3002
```

此模式适合 3D 模型、界面、姿态预设和前端功能开发。没有 ROS 2 后端时，网页不会控制真机或完整 MuJoCo 场景。

<!-- 插图：rebot_rs_web_simulator.png -->

![reBot Arm B601-RS 网页仿真器界面](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_web_simulator.png)
</TabItem>

<TabItem value="sim" label="完整 RS MuJoCo 仿真">

终端 1 启动 Fake Driver、MuJoCo、相机、检测、MCP Agent 和 rosbridge：

```bash
cd ~/reBot_Arm_Mujoco-RS
./rebotarm start rs_sim
```

终端 2 启动网页：

```bash
cd ~/reBot_Arm_Mujoco-RS
./rebotarm start web
```

浏览器打开 `http://localhost:3002`，控制目标选择“RS 仿真（`/rebotarm_rs`）”，ROS WebSocket 填写 `ws://localhost:9090`。

常用仿真选项：

```bash
# 无 MuJoCo 原生窗口，适合自动测试
REBOTARM_MUJOCO_VIEWER=false ./rebotarm start rs_sim

# 仅做运动学跟随，不验证接触、重力和物理抓取
REBOTARM_MUJOCO_MODE=kinematic ./rebotarm start rs_sim

# 不启动 MCP Agent
REBOTARM_START_AGENT=false ./rebotarm start rs_sim

# 确认没有有效任务后，清理残留仿真进程再启动
./rebotarm start rs_sim --force
```

> 视觉抓取必须使用默认 `physics` 模式。`kinematic` 模式直接同步关节位置，不能用于判断控制增益、接触稳定性或抓取力。

<!-- 插图：rebot_rs_mujoco_physics.png -->

![reBot Arm B601-RS MuJoCo 物理仿真](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_mujoco_physics.png)
</TabItem>

<TabItem value="real" label="RS 真机控制">

先配置并检查 SocketCAN：

```bash
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details -statistics link show can0
```

确认急停可用、工作区无人后，在终端 1 启动真机控制器：

```bash
cd ~/reBot_Arm_Mujoco-RS
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE \
  ./rebotarm start rs
```

终端 2 启动网页和 rosbridge：

```bash
./rebotarm start web
```

打开 `http://localhost:3002`，选择“RS 真机（`/rebotarm`）”。首次测试按以下顺序进行：

1. 检查网页显示已连接、机械臂状态正常且无电机错误。
2. 点击使能。
3. 将速度设置为 `0.2–0.4 rad/s`。
4. 一次只小幅移动一个关节，确认方向、限位和反馈。
5. 再测试 TCP 拖拽、轨迹或重力补偿。
6. 结束时安全回零并失能，然后在控制器终端按 `Ctrl+C`。

不要用 `Ctrl+Z` 暂停真机控制器，也不要把网页按钮当作物理急停。如果旧控制器异常残留，再次运行真机启动脚本会请求旧实例安全退出并清理已确认属于该控制器的残留资源。

<!-- 插图：rebot_rs_real_robot_web.png -->

![reBot Arm B601-RS 真机网页控制](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_real_robot_web.png)
</TabItem>

<TabItem value="dual" label="双命名空间调试">

```bash
export REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE
./scripts/start_rs_dual.sh
```

该脚本同时启动：

- 真机 `/rebotarm`；
- Fake Driver `/rebotarm_rs`；
- rosbridge `9090`。

它用于对比接口、关节方向和状态，不会启动完整 MuJoCo、视觉、Agent 或网页服务器。发送命令前必须再次确认网页选中的命名空间。


</TabItem>

</Tabs>

## 统一命令行

| 命令 | 说明 |
|---|---|
| `./rebotarm doctor` | 只读检查环境，等同 `./setup.sh --check` |
| `./rebotarm start web` | 启动或复用 rosbridge，并启动网页服务器 |
| `./rebotarm start rs_sim` | 启动完整 RS MuJoCo 仿真栈 |
| `./rebotarm start rs` | 启动 RS 真机控制器，必须设置硬件确认变量 |
| `./rebotarm status` | 查看登记进程、端口和 `can0` |
| `./rebotarm stop` | 停止由 `start web` 登记的网页/rosbridge 子进程 |

前台运行的仿真和真机应在各自终端使用 `Ctrl+C` 正常结束。

## 项目架构

```text
reBot_Arm_Mujoco-RS/
├─ setup.sh                              一键检查、安装与构建
├─ rebotarm                              统一启动、状态和停止入口
├─ requirements-rs-hardware.txt          RS 真机 Python 依赖
├─ requirements-rs-mujoco.txt            MuJoCo/Agent Python 依赖
├─ scripts/
│  ├─ rs_env.sh                          加载 ROS、venv 和工作区
│  ├─ setup_rs_workspace.sh              准备并构建 ROS 工作区
│  ├─ start_rs_sim.sh                    完整 RS 仿真栈
│  ├─ start_rs_hardware.sh               RS 真机控制器
│  ├─ start_rs_dual.sh                   真机/Fake 双命名空间
│  └─ start_rs_text_agent.sh             Text Agent HTTP 服务
├─ rebotarm_ros2_RS/
│  ├─ src/rebotarmcontroller/             真机控制器与 Fake Driver
│  ├─ src/rebotarm_msgs/                  自定义 msg/srv/action
│  ├─ src/rebotarm_bringup/               配置、URDF、Mesh 和 launch
│  ├─ src/rebotarm_mujoco_rs/             RS MuJoCo、相机、检测和任务
│  ├─ src/rebotarm_agent/                 MCP Server 与 Text Agent
│  ├─ src/rebotarm_moveit_config/         MoveIt 配置
│  ├─ src/rebotarm_moveit_demos/          轨迹与抓放示例
│  └─ third_party/reBotArm_control_py/     控制 SDK 普通源码
└─ reBotArm_simulator-RS/
   ├─ server.js                           静态服务器与 Agent 代理
   ├─ public/index.html                   网页入口
   ├─ public/js/rebot-sim.js              Three.js、IK、场景与动画
   ├─ public/js/ros/rebot-ros-client.js   rosbridge 客户端
   ├─ public/js/ros/rebot-ros-ui.js       ROS UI、控制与反馈业务
   ├─ public/js/rebot-llm.js              LLM 聊天 UI
   ├─ description/                        网页独立运行的模型后备
   └─ split_meshes/grouped_gripper/       可选网页夹爪网格
```

## 系统数据流

### 网页命令到 RS 真机

```text
用户拖动关节滑块或 TCP 手柄
  → Three.js / 浏览器 DLS IK
  → 30 ms 滑块阻尼、1° 输入死区、最高 60 Hz 节流
  → rosbridge WebSocket
  → JointMitCmd ROS 话题
  → 命令状态仲裁
  → 125 Hz 限速度/加速度/jerk 在线参考
  → MIT q/dq/kp/kd/tau
  → reBotArm_control_py
  → MotorBridge + SocketCAN can0
  → RobStride 电机
```

新网页目标只更新在线轨迹终点。即使浏览器暂时没有发送下一帧，125 Hz 控制循环也会继续生成连续参考。命令 QoS 深度为 1，新目标覆盖尚未处理的旧目标，避免拖动结束后继续补播积压位置。

### RS 真机反馈到网页

```text
RobStride 编码器/状态
  → SocketCAN can0
  → SDK 状态缓存
  → 20 Hz 真机同步查询
  → 60 Hz ROS JointState 发布
  → rosbridge 订阅节流
  → 自适应低通 + 反馈死区
  → 32–120 ms 显示插值
  → Three.js 实线反馈模型
```

半透明模型表示控制目标。当关节和夹爪误差足够小时，目标影子自动消失。显示滤波只影响网页画面，不会更改发送给电机的目标。

### MuJoCo 仿真链路

```text
网页或 Agent
  → ROS 2 命令、服务或动作
  → Fake RS Driver（100 Hz）
  → MuJoCo Sync（250 Hz）
  → RS MJCF 动力学与碰撞
  → 关节/物体状态、俯视相机和颜色检测
  → 网页与 MCP Agent
```

## 网页控制说明

### 控制目标与命名空间

| 模式 | 命名空间 | 网页模型来源 |
|---|---|---|
| RS 真机 | `/rebotarm` | 真机 `/joint_states` 反馈 |
| RS 仿真 | `/rebotarm_rs` | 优先使用 MuJoCo 实际状态 |

切换模式后，网页会根据目标命名空间重新创建 rosbridge 客户端和接口路径。

### 关节和夹爪

- J1–J6 以弧度控制，限位与 RS URDF 保持一致。
- 网页速度范围为 `0.05–1.50 rad/s`，默认 `1.2 rad/s`。
- J1–J6 默认使用 `30 ms` 滑块阻尼和 `1°` 输入死区，松手时强制提交最终位置。
- J7/夹爪在网页中以开口宽度表示，范围为 `0–71.5 mm`。
- 夹爪发布时换算为 RS 电机 `0–5 rad`，ROS 反馈再换算回米。
- J7 不经过 J1–J6 的弧度阻尼和输入死区；每个浏览器绘制帧只发送最新目标。

### TCP 拖拽与 IK

网页使用阻尼最小二乘法（DLS）求解 TCP 目标。RS 版会根据奇异程度自适应调整阻尼，再将关节解发送到相同的 MIT 在线控制链路。

网页 Three.js 使用 Y 轴向上，ROS 使用 Z 轴向上。坐标转换逻辑位于 `rebot-sim.js`，扩展位姿功能时应复用现有转换，不要直接交换表单数值。

Pose 输入单位为米：X 向前、Y 向左、Z 向上。目标不可达时，应先增加 Z 或减小水平距离，并检查姿态约束和关节限位。

### 示教与轨迹回放

网页可记录关节轨迹并调用：

```text
/<namespace>/follow_joint_trajectory
```

RS 真机动作服务器使用连续的单调三次 Hermite 位置/速度参考，并自动延长过短轨迹段，使普通真机轨迹速度不超过约 `0.60 rad/s`。调用端必须等待动作结果或真机反馈，不应按原始请求时长提前播放完成动画。

### 使能、安全回零与失能

- 真机控制器每次启动后需要使能。
- `safe_home` 平滑返回零位并验证角度和速度。
- 非零姿态点击失能会先进入 `SAFE_HOMING`。
- 回零验证失败时电机保持使能，并返回失败信息。
- `set_zero` 会改写电机零点，不是普通回零按钮。只有机械结构确实位于标定姿态时才能调用。

### 重力补偿

RS 重力补偿从当前测量姿态启动，逐关节切入 MIT，避免把零位误当作目标。重复启动为幂等操作；停止后保持最后测量位置。

重力补偿期间拒绝网页关节、TCP、轨迹和夹爪命令。相关服务：

```text
/<namespace>/gravity_compensation/start
/<namespace>/gravity_compensation/stop
/<namespace>/gravity_compensation/status
```

## ROS 2 接口

以下以真机 `/rebotarm` 为例。仿真时将前缀替换为 `/rebotarm_rs`。

### 状态 Topic

| Topic | 类型 | 说明 |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | 六轴和夹爪统一状态 |
| `/rebotarm/joints/<name>/state` | `rebotarm_msgs/msg/JointMotorState` | 单电机位置、速度、力矩和状态码 |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | 夹爪电机原始状态 |
| `/rebotarm/control_target` | `sensor_msgs/msg/JointState` | 网页或动作层最终目标 |
| `/rebotarm/control_reference` | `sensor_msgs/msg/JointState` | 125 Hz 在线轨迹参考的 ROS 采样；`effort` 携带参考加速度 |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | 使能、模式、状态机和错误码 |

### 低层命令 Topic

| Topic | 类型 | 说明 |
|---|---|---|
| `/rebotarm/joints/<joint1..joint6>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | 网页真机默认关节命令 |
| `/rebotarm/joints/<joint1..joint6>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | 位置速度命令 |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | RS 夹爪 MIT 命令 |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | 夹爪位置速度命令 |
| `/rebotarm/mujoco/target_pose` | `geometry_msgs/msg/PoseStamped` | TCP 目标位姿 |

自行发布低层命令前，应检查 `arm_status.state_machine`。不要在 `GRAVITY_COMP`、`SAFE_HOMING` 或轨迹运行期间抢占控制。

### Service

| Service | 类型 | 说明 |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | 使能机械臂 |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | 安全失能；必要时先回零 |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | 安全回零并验证 |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | 写入电机零点，谨慎使用 |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | 启动重力补偿 |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | 停止重力补偿 |
| `/rebotarm/gravity_compensation/status` | `std_srvs/srv/Trigger` | 查询重力补偿状态 |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | 位姿 IK 解算 |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | 夹爪到位控制 |
| `/rebotarm/gripper/open` | `rebotarm_msgs/srv/GripperCommand` | 打开夹爪 |
| `/rebotarm/gripper/close` | `rebotarm_msgs/srv/GripperCommand` | 关闭夹爪 |

示例：

```bash
source scripts/rs_env.sh
ros2 service call /rebotarm/gravity_compensation/status std_srvs/srv/Trigger '{}'
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger '{}'
```

### Action

| Action | 类型 | 说明 |
|---|---|---|
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | 关节轨迹 |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | 夹爪动作 |
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | 笛卡尔位姿运动 |

### MuJoCo 与视觉接口

| 接口 | 类型/用途 |
|---|---|
| `/rebotarm_rs/mujoco/joint_states` | MuJoCo 实际关节状态 |
| `/rebotarm_rs/mujoco/object_states` | 场景物体状态 JSON |
| `/rebotarm_rs/mujoco/overhead_rgb/image_raw` | 俯视 RGB 相机 |
| `/rebotarm_rs/vision/color_blocks/detections` | 颜色物体检测 JSON |
| `/rebotarm_rs/mujoco/reset` | 重置仿真 |
| `/rebotarm_rs/mujoco/record/start` | 开始记录 |
| `/rebotarm_rs/mujoco/record/stop` | 停止记录 |
| `/rebotarm_rs/mujoco/record/replay` | 回放记录 |
| `/rebotarm_rs/mujoco/record/clear` | 清空记录 |

## 视觉抓取

完整仿真默认包含红色方块、蓝色长方块和黄色圆柱。网页可选择指定颜色或自动选择目标，并执行对正、预抓取、下探、闭合、抬升和放置。

抓取成功不只看轨迹是否完成。系统还会检查 MuJoCo 物体是否实际抬升，防止夹爪空合或轨迹执行完成却没有抓住物体时误报成功。

排查视觉抓取：

```bash
source scripts/rs_env.sh
ros2 topic echo /rebotarm_rs/vision/color_blocks/detections --once
ros2 topic echo /rebotarm_rs/mujoco/object_states --once
ros2 service list | grep rebotarm_rs
```

如果夹爪闭合但没有抬起物体：

- 确认使用 `physics` 模式；
- 检查相机和颜色检测是否持续发布；
- 检查目标宽度、方向和抓取高度；
- 查看日志中的接触稳定和物理抬升验证结果；
- 避免同时发起多个抓取或 IK 请求。

## LLM/MCP 文本控制

### 架构

```text
网页 rebot-llm.js
  → Node.js /api/llm/chat
  → Text Agent（默认 :8082）
  → MCP Server（默认 :8081/mcp）
  → ROS 2 service/action/topic
```

LLM 用于理解自然语言，MCP 层将意图约束为结构化工具调用。没有配置大模型时，MCP 的检测、IK、关节、夹爪和抓取工具仍可直接调用。

### 启动 Text Agent

完整仿真默认启动 MCP Agent。启用自然语言入口时，另开终端：

```bash
cd ~/reBot_Arm_Mujoco-RS
export DASHSCOPE_API_KEY='你的 Key'
export REBOTARM_LLM_MODEL='qwen-plus'
./scripts/start_rs_text_agent.sh
```

默认地址：

```text
MCP Server：http://127.0.0.1:8081/mcp
Dashboard： http://localhost:8082
```

网页中可以输入：

- 查询机械臂和 ROS 状态；
- 打开或关闭夹爪；
- 检查目标位姿是否可达；
- 移动到指定位姿；
- 抓取指定颜色物体。

真机环境中启用运动类工具前，应明确检查 Agent 的运动许可和命名空间。自然语言入口不能绕过机械臂后端安全状态机，也不能替代物理急停。

## 关键控制参数

真机默认配置位于：

```text
rebotarm_ros2_RS/src/rebotarm_bringup/config/rebotarm_hardware.yaml
```

当前 RS 关键参数：

```yaml
rate: 125
control:
  arm_control_mode: mit
  mit_kp: [80, 150, 150, 50, 50, 50]
  mit_kd: [5, 10, 10, 5, 4, 4]
  stream_acceleration_limit: 4.0
  stream_jerk_limit: 30.0
  stream_natural_frequency: 8.0
gravity_compensation:
  kp: 2.0
  kd: 1.0
```

其他默认频率：

| 层 | 默认频率 | 说明 |
|---|---:|---|
| 网页关节目标 | 最高 60 Hz | 滑块和 TCP IK 连续更新目标 |
| 真机同步反馈查询 | 20 Hz | 刷新 RobStride 测量缓存 |
| ROS 真机状态 | 60 Hz | 从缓存发布反馈、目标和参考 |
| RS MIT 控制 | 125 Hz | 在线平滑并发送电机命令 |
| Fake Driver | 100 Hz | 仿真控制和状态 |
| MuJoCo Sync | 250 Hz | 默认动力学同步 |
| MuJoCo 物体状态 | 30 Hz | 场景和 Agent |
| 俯视相机 | 8 Hz | RGB 图像 |
| 颜色检测 | 10 Hz | 检测结果 |

调整增益前，建议同时记录：

```text
/rebotarm/control_target
/rebotarm/control_reference
/rebotarm/joint_states
```

如果目标不连续，检查网页输入层；参考不连续，检查在线轨迹；参考连续但反馈过冲，检查 MIT 增益、负载、摩擦、电流和温升；只有网页画面抖动时，再检查反馈滤波和 rosbridge 到达间隔。

## 二次开发指南

### 修改网页关节限位或姿态预设

文件：

```text
reBotArm_simulator-RS/public/js/rebot-sim.js
```

关节定义位于 `jointDefs`，预设位于 `presets`。修改关节限位时，必须同步核对 RS URDF、SDK 配置和真机机械限位，不能只改网页显示范围。

### 修改网页命令频率、滤波和阻尼

文件：

```text
reBotArm_simulator-RS/public/js/ros/rebot-ros-ui.js
```

该文件负责网页命令节流、真机反馈滤波、反馈死区、插值、目标影子、控制锁和视觉业务。不要用提高真机 MIT 增益的方式补偿网页动画延迟。

### 添加自定义 ROS 接口

客户端封装位于：

```text
reBotArm_simulator-RS/public/js/ros/rebot-ros-client.js
```

在 UI 层添加 Topic、Service 或 Action 路径，并调用客户端的 `subscribe()`、`callService()` 或 `sendActionGoal()`。接口应始终根据当前 `namespace` 生成，避免把仿真命令误发到真机。

### 修改 RS URDF 或 Mesh

ROS 2 主模型：

```text
rebotarm_ros2_RS/src/rebotarm_bringup/description/urdf/ReBot_Arm_RS.urdf
rebotarm_ros2_RS/src/rebotarm_bringup/description/meshes_rs/
```

网页服务器优先读取上述模型。如果将网页目录单独复制运行，则使用：

```text
reBotArm_simulator-RS/description/urdf/ReBot_Arm_RS.urdf
reBotArm_simulator-RS/description/meshes_rs/
```

修改时应保持两份资源版本一致，并检查 Linux 文件名大小写。

### 修改 MuJoCo

| 文件/目录 | 作用 |
|---|---|
| `rebotarm_ros2_RS/src/rebotarm_mujoco_rs/models/` | RS MJCF 和 STL |
| `rebotarm_mujoco_rs/mujoco_sync.py` | 同步频率、动力学和 PD |
| `rebotarm_mujoco_rs/scene_camera.py` | 俯视相机 |
| `rebotarm_mujoco_rs/scene_detector.py` | 颜色检测 |
| `rebotarm_mujoco_rs/task_server.py` | 任务、记录和回放 |
| `rebotarm_mujoco_rs/launch/mujoco_rs.launch.py` | launch 参数 |

### 扩展 MCP 工具

MCP Server 位于：

```text
rebotarm_ros2_RS/src/rebotarm_agent/rebotarm_agent/rebotarm_mcp_server.py
```

新增工具时应：

1. 定义明确的输入 Schema 和单位；
2. 区分只读工具和运动工具；
3. 在运动工具中校验命名空间、状态和运动许可；
4. 使用 ROS 2 Service/Action/Topic 调用后端，不直接绕过控制器；
5. 重建工作区并在仿真中测试异常、超时和取消路径。

## 验证命令

```bash
source scripts/rs_env.sh
python3 -m pytest rebotarm_ros2_RS/src/rebotarmcontroller/test -q

bash -n setup.sh rebotarm scripts/*.sh

node --check reBotArm_simulator-RS/server.js
node --check reBotArm_simulator-RS/public/js/rebot-sim.js
node --check reBotArm_simulator-RS/public/js/ros/rebot-ros-client.js
node --check reBotArm_simulator-RS/public/js/ros/rebot-ros-ui.js
node --check reBotArm_simulator-RS/public/js/rebot-llm.js
```

运行时检查：

```bash
./rebotarm status
ros2 node list
ros2 topic list | grep rebotarm
ros2 service list | grep rebotarm
ros2 action list | grep rebotarm
```

## FAQ

### 1. 网页一直停在模型加载界面

打开浏览器开发者工具的 Network 面板，检查以下请求是否返回 `200`：

```text
/api/urdf
/api/description/meshes/*.STL
```

常见原因：

- RS URDF 或 STL 不存在；
- 网页目录被单独移动后，后备模型不完整；
- URDF 中的 `package://` 映射不正确；
- Linux 下文件名大小写不一致；
- Three.js、STLLoader 或 URDFLoader 加载顺序错误。

### 2. ROS 显示未连接

```bash
ss -ltnp | grep 9090
ros2 node list
./rebotarm status
```

确认 rosbridge 监听 `0.0.0.0:9090`，WebSocket 地址以 `ws://` 开头。远程浏览器应填写 Ubuntu IP，而不是浏览器电脑的 `localhost`。

### 3. 网页可以连接，但滑块不能控制真机

依次确认：

1. 网页选择的是 RS 真机 `/rebotarm`；
2. ROS WebSocket 已连接；
3. 网页控制锁已开启；
4. 机械臂已使能；
5. `arm_status` 不在 `GRAVITY_COMP`、`TRAJ_RUNNING` 或 `SAFE_HOMING`；
6. 真机控制器无 CAN 或电机错误。

### 4. 网页模型抖动或目标影子长期存在

- 确认同一命名空间只有一个控制器和一个状态发布源；
- 检查 `/joint_states` 是否有多个发布者；
- 同时记录 `control_target`、`control_reference` 和 `joint_states`；
- 检查 CAN 错误计数和反馈时间间隔；
- 不要同时运行轨迹回放和手动连续拖动。

目标影子长期存在通常说明实际反馈没有到达目标，不一定是网页渲染问题。

### 5. CAN 无反馈或进入 BUS-OFF

```bash
ip -details -statistics link show can0
candump can0
```

检查：

- 波特率是否为 `1 Mbps`；
- CAN_H/CAN_L 是否接反；
- 两端终端电阻；
- 电机供电与共地；
- 电机 ID 和 SDK 配置；
- USB-CAN 驱动和接口名称。

错误计数持续增加时应立即停止真机测试。

### 6. 点击失能后机械臂没有立即断电

如果机械臂不在零点附近，控制器会先执行安全回零并验证。这是预期行为。回零失败时系统保持使能，以避免非零姿态突然掉落。紧急情况应使用物理急停。

### 7. 重力补偿启动失败或无法控制

- 确认机械臂已使能；
- 查询 `/gravity_compensation/status`；
- 确认没有轨迹或安全回零正在运行；
- 重力补偿期间其他运动命令会被拒绝；
- 切换模式时托住可能下坠的负载。

### 8. 视觉抓取不工作

确认已启动完整 `rs_sim` 且模式为 `physics`，然后检查：

```bash
ros2 topic echo /rebotarm_rs/mujoco/overhead_rgb/image_raw --once
ros2 topic echo /rebotarm_rs/vision/color_blocks/detections --once
ros2 topic echo /rebotarm_rs/mujoco/object_states --once
```

如果按钮显示任务已排队，应等待当前串行动作完成，不要重复启动多个抓取请求。

### 9. LLM 助手连接失败

确认 Text Agent 已启动：

```bash
./scripts/start_rs_text_agent.sh
```

检查 `reBotArm_simulator-RS/.env` 中的 `REBOTARM_TEXT_AGENT_URL` 和 `REBOTARM_MCP_URL`。网页会通过 `/api/llm/health` 检查后端。不要把 API Key 写进网页源码或提交到仓库。

### 10. 修改前端后页面仍显示旧版本

RS 网页包含 Service Worker/PWA 支持。先使用 `Ctrl+Shift+R` 强制刷新；如果仍未更新，在浏览器开发者工具中清除站点数据或注销 Service Worker，再重新加载页面。

### 11. `setup.sh` 或 `colcon build` 失败

- 确认 Ubuntu、ROS 2 和 Python 版本匹配；
- 确认 rosdep 已初始化并可更新；
- 运行 `./setup.sh --check` 查看缺失项；
- 确认 `rebotarm_ros2_RS/.venv` 中可以导入 `numpy`、`scipy`、`mujoco`、`pinocchio`、`motorbridge` 和 `fastmcp`；
- 删除或重置用户文件前先备份，不要用破坏性命令解决构建问题。

## 快速命令表

```bash
# 检查与安装
./setup.sh --check
./setup.sh --yes
./rebotarm doctor

# 完整仿真
./rebotarm start rs_sim
./rebotarm start web

# 自然语言 Agent
export DASHSCOPE_API_KEY='你的 Key'
./scripts/start_rs_text_agent.sh

# RS 真机
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE ./rebotarm start rs

# 状态与停止
./rebotarm status
./rebotarm stop
```

## 参考资料

- ROS 2 Jazzy 文档：https://docs.ros.org/en/jazzy/
- rosbridge_suite：https://github.com/RobotWebTools/rosbridge_suite
- Three.js：https://threejs.org/docs/
- URDFLoader：https://github.com/gkjohnson/urdf-loaders
- MuJoCo：https://mujoco.readthedocs.io/
- Model Context Protocol：https://modelcontextprotocol.io/
- B601-RS 工程内文档：`README.md`、`USER_MANUAL_ZH.md`、`DEVELOPER_GUIDE_ZH.md`、`DATA_FLOW_RS_ZH.md`
