---
description: "Seeed 具身智能入门课程第八阶段：MuJoCo 与 Isaac Sim 机械臂仿真第 39 章 — 真实机械臂与仿真机械臂同步：本章以 reBotArm-RS 工程的实际源码为例，讲解如何把真实机械臂的关节状态实时同步到MuJoCo 仿真环境。所有代码引用均指向本仓库中的真实文件，可对照阅读。"
title: 第 39 章 - 真实机械臂与仿真机械臂同步
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_39
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_39/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 8 阶段 · 第 39 章 · 实践</span>
    <h2>39. 真实机械臂与仿真机械臂同步</h2>
    <p>
      本章以 reBotArm-RS 工程的实际源码为例，讲解如何把真实机械臂的关节状态实时同步到MuJoCo 仿真环境。所有代码引用均指向本仓库中的真实文件，可对照阅读。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

本章以 reBotArm-RS 工程的实际源码为例，讲解如何把真实机械臂的关节状态实时同步到MuJoCo 仿真环境。所有代码引用均指向本仓库中的真实文件，可对照阅读。

## 39.1 什么是 Real-to-Sim

Real-to-Sim（真实到仿真）是指把真实物理机械臂的关节角度、速度、力矩等状态，实时传输给仿真环境，使虚拟机械臂同步复现真实机械臂的运动。它与 Sim-to-Real（仿真到真实）方向相反：Sim-to-Real 是在仿真中训练策略再部署到真机，而 Real-to-Sim 是把真机状态映射到虚拟模型中。

Real-to-Sim 的典型用途：

1. 数字孪生：网页端实时观察真机姿态，无需直视物理设备。
2. 录制与回放：把真机运动录制为轨迹数据，在仿真中反复回放调试。
3. 安全监控：仿真环境可以叠加碰撞检测、工作空间可视化等真机不具备的能力。
4. 示教复现：手动拖动真机（重力补偿模式），仿真模型同步跟随，用于采集示教数据。

在本工程中，Real-to-Sim 的核心链路是：

```Plain Text
真实 RobStride 电机 → SocketCAN can0 → MotorBridge SDK 状态缓存
→ HardwareManager._get_arm_state() → ROS JointState 话题（60 Hz）
→ MuJoCo Sync 节点订阅 → MuJoCo qpos 更新 → 虚拟机械臂运动
```

关键源文件：

- 硬件状态读取与缓存：\[hardware_manager.py\](ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarmcontroller/rebotarmcontroller/hardware_manager.py)
- ROS 关节状态发布：\[ros_publishers.py\](ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarmcontroller/rebotarmcontroller/ros_publishers.py)
- MuJoCo 同步节点：\[mujoco_sync.py\](ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarm_mujoco_rs/rebotarm_mujoco_rs/mujoco_sync.py)
- 仿真侧假驱动：\[fake_rs_driver.py\](ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarmcontroller/rebotarmcontroller/fake_rs_driver.py)

## 39.4 DM 与 RS 关节单位转换

DM（达妙电机）和 RS（RobStride 电机）在角度单位上都是弧度，但夹爪的单位存在显著

差异，这是同步中容易出错的环节。

### 臂关节

DM 和 RS 的六个臂关节都使用弧度，MuJoCo 模型也使用弧度（`<compiler angle="radian"/>`），

因此臂关节不需要单位转换。

### 夹爪单位差异

夹爪涉及四个不同的量，单位各不相同：

| 量 | 范围 | 单位 | 用途 |
|-|-|-|-|
| RS 夹爪电机角度 | 0-5 | rad | 真机 SDK 命令与反馈 |
| 网页/任务夹爪开口宽度 | 0-0.0715 | m | 用户命令语义 |
| ROS 单指状态 | 0-0.045 | m | 状态发布器映射后的视觉位移 |
| MuJoCo 夹爪位移 | 0-0.05 | m | 仿真 joint7 滑动行程 |

## 39.6 通信频率

Real-to-Sim 链路中存在多个不同频率的环节，理解它们的关系是排查延迟和卡顿的基础。

| 环节 | 频率 | 说明 |
|-|-|-|
| RS 真机控制循环 | 125 Hz | 最终发往电机的 MIT 指令 |
| 同步硬件反馈查询 | 20 Hz | 查询 RobStride 状态并刷新缓存 |
| ROS 关节状态发布 | 60 Hz | 从缓存发布 JointState 话题 |
| MuJoCo 仿真同步 | 250 Hz | 仿真步进频率 |
| 浏览器接收 MuJoCo 状态 | 最高 25 Hz | rosbridge 订阅节流 40 ms |
| 浏览器绘制 | 约 60 Hz | requestAnimationFrame |

关键理解点：

- 网页最高 60 Hz 发送命令，不代表电机只以 60 Hz 控制。RS 控制器收到新目标后，用自己的 125 Hz 循环持续生成并发送 MIT 指令。
- 硬件反馈以 20 Hz 刷新缓存，ROS 从缓存以 60 Hz 发布。实时 MIT 循环不做同步CAN 参数查询。
- MuJoCo 以 250 Hz 步进，但其输入来自 60 Hz 的 ROS 话题，因此 MuJoCo 内部会在相邻输入之间保持上一次目标。

## 39.7 UDP、Socket 或 ROS2 通信

本工程选择 ROS2 话题作为 Real-to-Sim 的通信层，而非 UDP 或原始 Socket。理解这个选择的原因有助于在其他场景中做正确的架构决策。

### 为什么选择 ROS2

1. 话题抽象：`sensor_msgs/JointState` 是标准消息类型，发布者和订阅者不需要约定数据格式。
2. QoS 策略：`qos_profile_sensor_data` 提供BEST_EFFORT 可靠性和小深度，适合高频传感器数据。
3. 多对多通信：一个关节状态话题可以被 MuJoCo 同步、网页、日志记录等多个节点同时订阅。
4. 生态集成：rosbridge 可以把 ROS 话题直接桥接到 WebSocket，网页无需额外通信层。

### 话题拓扑

```Plain Text
/rebotarm/joint_states          ← 真机控制器发布（60 Hz）
    ↓
MuJoCo Sync 节点订阅
    ↓
/rebotarm/mujoco/joint_states   ← MuJoCo 同步节点发布（250 Hz）
    ↓
rosbridge WebSocket → 浏览器
```

MuJoCo 同步节点的订阅和发布在 \[mujoco_sync.py\](/home/robot/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarm_mujoco_rs/rebotarm_mujoco_rs/mujoco_sync.py) 中定义：

```Python
self.subscription = self.create_subscription(
    JointState, input_topic, self._joint_state_callback, qos_profile_sensor_data,
)
self.publisher = self.create_publisher(
    JointState, output_topic, qos_profile_sensor_data,
)
```

### 命名空间隔离

真机和仿真使用不同命名空间，避免话题冲突：

| 环境 | 默认命名空间 | 启动脚本 |
|-|-|-|
| 真机 | `/rebotarm` | `scripts/start_rs_hardware.sh` |
| Fake Driver + MuJoCo | `/rebotarm_rs` | `scripts/start_rs_sim.sh` |
| MuJoCo 跟随真机 | `/rebotarm`（跟随） | `scripts/start_rs_mujoco_follow.sh` |

Real-to-Sim 场景下，MuJoCo 同步节点订阅真机的 `/rebotarm/joint_states`，自身

命名空间也设为 `rebotarm`，但它只订阅不发送电机命令，所以不会与真机控制器冲突。

### DDS 发现范围

\[rs_env.sh\](/home/robot/ReBot_Arm_DigitalTwin_RS/scripts/rs_env.sh) 将 DDS 发现范围限制为本地主机，避免 Wi-Fi 漫游后节点互相找不到：

```Bash
export ROS_AUTOMATIC_DISCOVERY_RANGE="${REBOTARM_ROS_DISCOVERY_RANGE:-LOCALHOST}"
```

### UDP vs ROS2 的适用场景

| 特性 | ROS2 话题 | UDP |
|-|-|-|
| 延迟 | 毫秒级，有 DDS 中间件开销 | 最低，微秒级 |
| 可靠性 | 可配置 BEST_EFFORT / RELIABLE | 需自行实现 |
| 多订阅 | 原生支持 | 需自行实现广播 |
| 调试工具 | ros2 topic echo / hz | 需自行实现 |
| 适用场景 | 多节点协作、需要生态 | 点对点超低延迟 |

本工程的延迟需求（60 Hz 状态、人眼可接受）远未达到需要 UDP 的程度，ROS2 话题是最自然的选择。

## 39.8 状态刷新和延迟

### 异步缓存与反馈频率分离

\[hardware_manager.py\](/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarmcontroller/rebotarmcontroller/hardware_manager.py) 的设计核心是把硬件反馈查询频率和

ROS 发布频率分离：

```python
# ros_publishers.py 中的 JointStatePublisher
period = 1.0 / max(float(rate_hz), 1.0)           # 60 Hz 发布
self._feedback_poll_period = 1.0 / max(float(feedback_poll_rate_hz), 1.0)  # 20 Hz 反馈

def publish(self) -> None:
    now = time.monotonic()
    request_feedback = now - self._last_feedback_poll >= self._feedback_poll_period
    if request_feedback:
        self._last_feedback_poll = now
    pos, vel, effort = self._hardware.get_joint_state(request_feedback=request_feedback)
```
60 Hz 发布中有三分之一帧（20 Hz）会触发同步 CAN 读取，其余帧直接返回缓存。这样
既保证了 ROS 话题的高刷新率，又不会让 CAN 总线被反馈查询占满。

### MuJoCo 侧的陈旧超时

MuJoCo 同步节点设有 `stale_timeout` 参数（默认 1.0 秒）。如果超过这个时间没有
收到新的 JointState 消息，仿真会停止更新：

```python
def _update(self) -> None:
    if self.last_input_time == 0.0:
        return
    if (self.stale_timeout > 0.0
        and time.monotonic() - self.last_input_time > self.stale_timeout):
        return
```

这防止了真机断连后仿真继续用旧数据运动。

### 延迟分层与排查

当同步出现卡顿或不跟手时，应沿链路逐层测量，而非只调单个参数：

1. 真机反馈层：用 `ros2 topic hz /rebotarm/joint_states` 确认是否稳定 60 Hz。
2. MuJoCo 同步层：确认 `last_input_time` 是否在持续更新。
3. 网页接收层：rosbridge 订阅节流可能导致浏览器端不到 25 Hz。
4. 显示插值层：浏览器在相邻测量值之间做 32-120 ms 插值。

详细的数据流和排查方法见 \[DATA_FLOW_RS_ZH.md\](/home/robot/ReBot_Arm_DigitalTwin_RS/DATA_FLOW_RS_ZH.md)。

## 39.9 夹爪状态同步

夹爪同步比臂关节更复杂，因为它涉及单位转换和 MuJoCo 的 equality 约束联动。

### MuJoCo 夹爪模型

\[rs_arm.xml\](/home/robot/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarm_mujoco_rs/models/rs_arm.xml) 中夹爪由三个关节组成：

```XML
<joint name="joint7" type="slide" axis="0 1 0" range="0 0.05"/>
<joint name="joint_left" type="slide" .../>
<joint name="joint_right" type="slide" .../>

<equality>
  <joint joint1="joint7" joint2="joint_left" polycoef="0 1 0 0 0"/>
  <joint joint1="joint7" joint2="joint_right" polycoef="0 1 0 0 0"/>
</equality>
```

`joint7` 是驱动关节，`joint_left` 和 `joint_right` 通过 equality 约束 1:1 联动。同步时只需要设置 `joint7` 的 `qpos`，左右夹爪会自动跟随。

### 同步代码

MuJoCo 同步节点在收到 JointState 消息时，先转换夹爪单位，再在更新时设置三个关节的 qpos：

```Python
def _joint_state_callback(self, msg: JointState) -> None:
    if "gripper_joint1" in values:
        self.target_gripper = self._visual_to_mujoco_gripper(
            values["gripper_joint1"], _RS_ROS_VISUAL_OPEN_M
        )

def _update_kinematic(self) -> None:
    self.data.qpos[self.gripper_qpos_addr] = next_gripper      # joint7
    self.data.qpos[self.left_qpos_addr] = next_gripper         # joint_left
    self.data.qpos[self.right_qpos_addr] = next_gripper        # joint_right
```

注意：kinematic 模式下三个关节直接写入相同值；physics 模式下只驱动 `joint7_motor`，左右夹爪由 equality 约束自动联动。

## 39.10 同步程序安全设计

### 硬件确认门控

\[start_rs_hardware.sh\](/ReBot_Arm_DigitalTwin_RS/scripts/start_rs_hardware.sh) 在启动真机控制器前要求显式确认，防止误操作导致机械臂运动：

```Bash
if [[ "${REBOTARM_RS_HARDWARE_CONFIRM:-}" != "I_UNDERSTAND_RS_WILL_MOVE" ]]; then
  echo "Hardware launch blocked." >&2
  exit 2
fi
```

但 MuJoCo 跟随脚本\[start_rs_mujoco_follow.sh\](/ReBot_Arm_DigitalTwin_RS/scripts/start_rs_mujoco_follow.sh)不需要这个确认，因为它只订阅真机话题、不发送电机命令、不打开 SocketCAN：

### 进程互斥锁

\[start_rs_hardware.sh\](/ReBot_Arm_DigitalTwin_RS/scripts/start_rs_hardware.sh) 使用 flock实现硬件启动的进程互斥，防止两个控制器同时竞争电机：

```Bash
exec 9>"${REBOTARM_HARDWARE_LOCK}"
if ! flock -n 9; then
  # 识别并安全终止上一次启动
  stop_processes "the previous RS hardware launch" "${REBOTARM_LOCK_HOLDERS[@]}"
fi
```

它还能识别被 Ctrl+Z 暂停的控制器，先发 SIGCONT 再发 SIGINT，最后清理 Fast DDS共享内存残留。

### 状态机仲裁

\[hardware_manager.py\](/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarmcontroller/rebotarmcontroller/hardware_manager.py) 使用状态机拒绝不安全的命令：

```Python
def _begin_lowlevel_streaming(self, required_mode: str) -> None:
    if not self._enabled:
        raise RuntimeError("rejecting low-level command while arm is disabled")
    if self._gravity_comp_active or self.state_machine == "GRAVITY_COMP":
        raise RuntimeError("rejecting low-level command during gravity compensation")
    if self.state_machine == "SAFE_HOMING":
        raise RuntimeError("rejecting low-level command during safe home")
```

状态包括：`IDLE`、`LOWLEVEL_STREAMING`、`TRAJ_RUNNING`、`GRAVITY_COMP`、`SAFE_HOMING`。每个状态只接受特定类型的命令，其余一律拒绝。

### 安全回零

失能前如果机械臂不在零位附近（各关节绝对角度超过 2 度、速度超过 0.15 rad/s），控制器会先进入 `SAFE_HOMING` 状态，清除旧目标、关闭夹爪、执行回零、验证到位后才失能电机。详细流程见 \[DATA_FLOW_RS_ZH.md\](/ReBot_Arm_DigitalTwin_RS/DATA_FLOW_RS_ZH.md) 第 5 节。

---

### 实践 Demo

### Demo 1：真实机械臂同步到 MuJoCo

### 整体链路：

```Plain Text
真实 reBot Arm (RobStride 电机)
  ↓  CAN 总线
Python SDK (motorbridge + reBotArm_control_py)
  ↓  读取编码器反馈
ROS 控制器 (rebotarmcontroller)
  ↓  发布 JointState 话题
MuJoCo 同步节点 (mujoco_sync.py)
  ↓  运动学模式直接写入 qpos
MuJoCo 虚拟机械臂
```

### DEMO启动

机械臂上的 6 个 RobStride 电机（关节 1–6）和 1 个夹爪电机持续通过 SocketCAN `can0` 总线以 1 Mbps 报告自己的编码器状态（位置、速度、力矩、状态码）。这一层是纯硬件，不涉及任何软件。

启动前需要配置 CAN 接口：

```Plain Text
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

启动真机控制器：

```Plain Text
# 终端 1：真机控制器
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE ./rebotarm start rs

# 终端 2：MuJoCo 跟随（与 Demo 1 相同）
./scripts/start_rs_mujoco_follow.sh

# 终端 3：网页
./rebotarm start web
```

### Demo 2：重力补偿手动示教同步

### 整体链路

```Plain Text
网页点击"启动重补"
  ↓  rosbridge → ROS Service
真机控制器进入重力补偿模式 (GRAVITY_COMP)
  ↓  Pinocchio 算重力力矩 + 低增益 MIT 保持
用户手动拖动真臂
  ↓  电机编码器报回新角度
控制器发布 JointState (60 Hz，与正常运动相同)
  ↓
MuJoCo 跟随节点订阅 → 虚拟臂实时复现
同时网页 3D 模型也实时显示反馈
```

与 Demo 1 的关键区别：真机不再是被动的位置目标驱动，而是进入**重力补偿模式**——用户用手拖动真臂，编码器反馈不断变化，JointState 照常发布，MuJoCo 和网页都跟着动。MuJoCo 跟随部分完全复用 Demo 1 的脚本，不需要额外配置。

### 第一步：网页操作 —— 启动重力补偿

###### 前置准备

三个终端，分别启动真机、MuJoCo 跟随和网页：

```Plain Text
# 终端 1：真机控制器
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE ./rebotarm start rs

# 终端 2：MuJoCo 跟随（与 Demo 1 相同）
./scripts/start_rs_mujoco_follow.sh

# 终端 3：网页
./rebotarm start web
```

浏览器打开 `http://localhost:3002`，操作步骤：

1. **选命名空间**：控制目标选"RS 真机（`/rebotarm`）"；
2. **连接**：ROS WebSocket 填 `ws://localhost:9090`，点连接；
3. **打开控制锁**：勾选控制锁复选框；
4. **使能**：点击"使能"按钮，等待状态显示已使能；
5. **启动重补**：点击"启动重补"按钮。

### 第二步：真机控制器进入重力补偿

几个关键设计：

- **增益平滑过渡**：用 smoothstep 在 `transition_duration`（默认 0.5 s）内从硬增益 `[80,150,150,50,50,50]` / `[5,10,10,5,4,4]` 渐变到柔顺增益 `kp=2.0` / `kd=1.0`（RS 配置）。smoothstep 两端导数为零，避免切换瞬间刚度突降。
- **目标跟随测量角**：`q_target` 从启动时的保持角平滑插值到实时测量角。过渡完成后 `q_target = q`，即目标始终等于当前角度，用户拖到哪里臂就跟到哪里。
- **重力前馈**：每周期用缓存角度（不做 CAN 读）重算 `compute_generalized_gravity`，叠加到 MIT 力矩上。电机只需输出极小位置误差力，主要靠 `tau` 抵消重力。
- **缓存而非实时读 CAN**：`_read_gravity_comp_positions(request=False)` 从 20 Hz 刷新的缓存取角度，125 Hz 循环不做同步 CAN 参数查询，避免阻塞。

###### 重力补偿期间的安全规则

状态机为 `GRAVITY_COMP` 期间，控制器拒绝所有网页关节命令、TCP 拖拽、轨迹回放和夹爪命令。只有"停止重补"按钮和失能请求能打断。

---

### 完整数据流

```Plain Text
用户点击网页"重力补偿启动"
  → rosbridge WebSocket
  → /rebotarm/gravity_compensation/start 服务
  → HardwareManager.start_gravity_compensation()
  → 逐关节切入 MIT + 重力前馈
  → 125 Hz 柔顺控制循环
用户手动拖动真机
  → 编码器反馈 → SocketCAN → 状态缓存
  → /rebotarm/joint_states（60 Hz）
  → 网页镜像（Three.js 模型跟随）
  → MuJoCo Sync（虚拟机械臂跟随）
```

###### MuJoCo 虚拟臂 + 网页 3D 模型+真实机械臂实时复现

<figure view-type="Preview"><source name="重力补偿.mp4" mime="video/mp4" origin-height="720.000000" origin-width="1280.000000" size="994529" token="VznpbiYk1oMqfkxtTkNcYMjYnag"/></figure>

### 小结

Real-to-Sim 同步的核心是把真机关节状态以合适的频率和格式传给仿真环境。本工程

的实践要点：

1. 按名称映射关节，不依赖数组顺序。
2. 夹爪涉及四种单位，转换链路必须逐级明确。
3. 硬件反馈查询与 ROS 发布频率分离，不在实时环内做同步 CAN 读取。
4. ROS2 话题在本场景下优于 UDP，生态和调试工具的收益超过微秒级延迟差异。
5. 安全设计贯穿全链路：硬件确认门控、进程互斥锁、状态机仲裁、安全回零。
6. 重力补偿示教是 Real-to-Sim 的高价值场景，低刚度 + 重力前馈 + 目标随反馈

更新是关键设计。

## FAQ

---

</div>
