---
description: 本教程介绍如何在 reBot Arm B601-RS 机械臂上使用 Pinocchio 和 MeshCat 进行运动学分析和可视化。
title: reBot Arm B601-RS入门Pinocchio与MeshCat
keywords:
  - Pinocchio
  - MeshCat
  - 机械臂
  - 机器人
  - LeRobot
  - 运动学
  - Robostride
slug: /rebot_arm_b601_rs_pinocchio_meshcat
sku: 100019336
last_update:
  date: 2026-06-11
  author: LiJie
translation:
  skip:
    - zh-CN
createdAt: '2026-06-11'
updatedAt: '2026-06-11'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_pinocchio_meshcat/
---

# reBot Arm B601-RS 的 Pinocchio 与 MeshCat 入门指南

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>6-DOF Robotic Arm · Multi-Motor Support · Kinematics Solver · Trajectory Planning · Fully Open Source</strong>
</p>

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png)

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) 是一个用于机器人动力学分析和优化的开源库。它提供了高效的正向/逆向运动学、动力学计算和轨迹规划功能。[MeshCat](https://github.com/rdeits/meshcat) 是一个基于 Web 的 3D 可视化工具，可以实时显示机器人状态和运动轨迹。

本项目结合了 Pinocchio 的强大计算能力和 MeshCat 的直观可视化，为 reBot Arm B601-RS 提供了一套完整的运动学分析和调试工具。


---

## 项目特点

1. **完整的运动学分析**  
   支持正向运动学 (FK) 和逆向运动学 (IK) 计算，可实时解算机械臂末端位姿。

2. **实时 3D 可视化**  
   通过 MeshCat 在浏览器中实时显示机械臂状态和运动轨迹，无需额外软件。

3. **轨迹规划与跟踪**  
   实现 SE(3) 测地线轨迹规划，支持 CLIK (Closed-Loop Inverse Kinematics) 跟踪控制。

4. **重力补偿控制**  
   基于 Pinocchio 动力学模型计算关节重力矩，实现机械臂的"漂浮"效果。支持基础版和末端速度锁止版两种模式。

5. **多模式电机控制**  
   支持 MIT、POS_VEL、VEL 三种控制模式，兼容 Damiao 和 Robostride 两种电机协议。

6. **开源 & 可扩展**  
   所有代码开源，支持用户根据需求自定义控制算法和可视化效果。

## 规格参数

本教程硬件由 [矽递科技 Seeed Studio](https://www.seeedstudio.com/) 提供

| 参数 | 规格 |
|------|------|
| 机械臂型号 | reBot Arm B601-RS Assembled Kit with Gripper |
| 自由度 | 6+1 (含夹爪) |
| 活动半径 | 754.7 mm (含夹爪) / 587.5 mm (无夹爪) |
| 负载能力 | 额定负载 2.5 kg / 最大负载 5 kg |
| 关节运动范围 | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / 夹爪: 345° ~ 0° |
| 重复定位精度 | 0.1 mm |
| 自重 | 6.7 kg |
| 伺服电机 | RobStride 06 × 3 / RobStride 00 × 4 |
| 通信方式 | CAN Bus @ 1 Mbps |
| 工作电压 | DC 48V |
| 电源 | DC 48V 15A |
| 工作温度 | -20°C ~ 50°C |
| 控制方式 | PC |

### 支持的软件平台

| 平台 | 支持状态 |
|------|---------|
| ROS1 | ✅ |
| MoveIt1 | ✅ |
| ROS2 | ✅ |
| MoveIt2 | ✅ |
| Python | ✅ |
| LeRobot | ✅ |
| Isaac Sim | ✅ |
| Pinocchio | ✅ |

### 关节电机参数

| 参数 | RobStride 00 | RobStride 06 |
|------|-------------|--------------|
| 额定电压 | 48V | 48V |
| 额定电流 | 4.7 Apk ± 10% | 14.3 Apk ± 10% |
| 峰值电流 | 15.5 Apk ± 10% | 57 Apk ± 10% |
| 额定扭矩 | 5 N.m | 11 N.m |
| 峰值扭矩 | 14 N.m | 36 N.m |
| 额定转速 | 100 rpm ± 10% | 100 rpm ± 10% |
| 空载最大转速 | 315 rpm ± 10% | 480 rpm ± 10% |
| 减速比 | 10 : 1 | 9 : 1 |
| 极对数 | 28 | — |
| 电机电感 | 750 ± 20 μH | 0.165 mH ± 10% |
| 线电阻 | 1.5 ± 10% Ω | 0.23 ± 10% Ω |
| 外径 | 57 mm | 82 mm |
| 高度 | 51 ± 1 mm | 49 ± 0.5 mm |
| 电机重量 | 310 g ± 3 g | 621 g |
| 编码器分辨率 | 14 bit (单圈绝对值) | |
| 编码器数量 | 2 | |
| 编码器类型 | 磁编码器（单圈） | |
| 控制接口 | CAN @ 1 Mbps | |
| 调试接口 | UART @ 921600 bps | |
| 控制模式 | MIT Mode / Speed Mode / Position Mode / Torque Mode | |
| 保护功能 | 过温保护：电机热敏电阻温度超过 145°C<br />欠压保护：电机电压低于保护电压 12V | |

## 材料清单（BOM）

| 部件 | 数量 | 是否包含 |
|--|--|--|
| reBot Arm B601-RS 机械臂 | 1 | ✅ |
| CANABLE | 1 | ✅ |
| 电源适配器 (DC 48V 15A) | 1 | ✅ |
| USB-C 线缆 | 1 | ✅ |
| 夹爪 | 1 | ✅ |


## 环境要求

| 项目 | 要求 |
|------|------|
| **Python** | 3.10+ |
| **操作系统** | Ubuntu 22.04+ |
| **通信接口** | CAN 接口 (can0) |
| **电源要求** | DC 48V 15A |

---

## 安装步骤

### 步骤 1. 安装 uv（如未安装）

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### 步骤 2. 同步环境（安装所有依赖）

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git 
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` 会自动创建虚拟环境（如不存在）并根据 `pyproject.toml` 和 `uv.lock` 安装所有依赖。
:::

### 步骤 3. 修改配置文件为 RS 版本

本 Wiki 面向 **reBot Arm B601-RS**，在运行任何示例前，请将 `config/rebotarm.yaml` 中的硬件配置从 DM 版本切换为 RS 版本：

```yaml
# 修改前
hardware_yaml: "rebotarm_dm.yaml"

# 修改后
hardware_yaml: "rebotarm_rs.yaml"
```

:::caution
若不修改此配置，程序会按 Damiao 电机协议通信，导致 RS 电机无法正常识别或运行。
:::


### 调试工具

:::tip can通道设置
运行实机控制示例和调试电机前，需要设置can通道（PCAN-USB有重新插拔需要再次配置此项）：

```bash
#PCAN-USB 通常应该直接出现 can0 或 can1
sudo modprobe peak_usb
ip -br link

#如果出现 can0，再设置 bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up    #拉起can0
```

:::

#### 单电机控制台 — Robostride RS06 (`0x01rs06_test.py`)

直接使用 motorbridge SDK 进行 Robostride RS06 单电机测试。RS06 电机通过 **CAN 总线** 通信。

**运行方式**：
```bash
uv run python example/0x01rs06_test.py
```

**交互命令**：
| 命令 | 说明 |
|------|------|
| `enable` / `disable` | 使能/去使能 |
| `set_zero` | 设置软件零位 |
| `state` | 查看当前状态 |
| `ping` | Ping 电机获取响应 |
| `clear_error` | 清除电机错误 |
| `mode <mit/posvel/vel>` | 切换控制模式 |
| `mit <pos> [vel] [kp] [kd]` | MIT 模式指令 |
| `posvel <pos> [vlim]` | POS_VEL 模式指令 |
| `vel <velocity>` | 纯速度模式指令 |
| `read_param <id> [type]` | 读取电机参数 |
| `write_param <id> <value> [type]` | 写入电机参数 |
| `loop` | 进入循环控制模式 |
| `q` / `quit` | 退出 |

**注意**：Robostride 电机使用 CAN 接口（默认 `can0`），host/feedback ID 默认为 `0xFD`。

---

#### 零点校准与角度监控 (`2_zero_and_read.py`)

自动设置所有关节零点，实时显示关节角度。

**运行方式**：
```bash
uv run python example/2_zero_and_read.py
```

---

### 基础控制测试

#### MIT 模式全关节控制 (`3_mit_control.py`)

所有关节统一 MIT 模式，每周期同步发送控制指令。

**输入**：全部关节角度（度），空格分隔。若配置了夹爪，需额外输入夹爪角度。

**运行方式**：
```bash
uv run python example/3_mit_control.py
> 0 0 0 0 0 0        # 仅机械臂
> 0 0 0 0 0 0 2.0    # 机械臂 + 夹爪
```

---

#### POS_VEL 模式全关节控制 (`4_pos_vel_control.py`)

所有关节统一 POS_VEL 模式，每周期同步发送控制指令。

**输入**：全部关节角度（度），空格分隔。

**运行方式**：
```bash
uv run python example/4_pos_vel_control.py
> 0 0 0 0 0 0
```

---

### 运动学测试

#### 正运动学测试 (`5_fk_test.py`)

根据关节角度计算末端位姿。

**输入**：6 个关节角度（度）

**输出**：
- 末端位置 (X, Y, Z) — 单位：米
- 旋转矩阵 (3×3)
- 欧拉角 (横滚/俯仰/偏航) — 单位：度

**示例**：
```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180
```

---

#### 逆运动学测试 (`6_ik_test.py`)

根据期望末端位姿求解关节角度。

**输入格式**：
- 仅位置：`<x> <y> <z>`（米）
- 位置 + 姿态：`<x> <y> <z> <roll> <pitch> <yaw>`（度）

**示例**：
```bash
uv run python example/6_ik_test.py
> 0.25 0.0 0.15              # 仅位置
> 0.25 0.0 0.15 0 0 0        # 位置 + 姿态
```

---

### 仿真环境

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic_rs.png" />
</div>


#### 正运动学仿真 (`sim/fk_sim.py`)

交互式正运动学仿真，通过输入关节角度在 MeshCat 中可视化机械臂位姿。

**运行方式**：
```bash
uv run python example/sim/fk_sim.py
```

**交互命令**：
- 输入 6 个关节角度（度），空格分隔
- 示例：`0 0 0 0 0 0`
- 示例：`45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`：退出

**功能特点**：
- 实时显示末端位置和姿态
- 支持连续输入测试不同位姿
- 输出格式化的位姿信息

---

#### 逆运动学仿真 (`sim/ik_sim.py`)

交互式逆运动学仿真，输入目标位姿自动求解关节角度并可视化。

**运行方式**：
```bash
uv run python example/sim/ik_sim.py
```

**输入格式**：
- 仅位置：`x y z`（米）
- 位置+姿态：`x y z roll pitch yaw`（弧度）

**示例**：
```bash
> 0.25 0.0 0.25              # 仅位置
> 0.25 0.0 0.25 0 0 0        # 位置+姿态
```

**功能特点**：
- 自动判断 IK 是否收敛
- 显示迭代次数和误差
- 实时更新机器人位姿

---

#### 轨迹规划仿真 (`sim/traj_sim.py`)

基于 SE(3) 测地线的轨迹规划仿真，包含 CLIK 跟踪和 MeshCat 动画回放。

**运行方式**：
```bash
uv run python example/sim/traj_sim.py
```

**交互命令**：
- 输入：`x y z [roll pitch yaw]`（米/弧度）
- 直接回车使用默认配置
- `q`：退出

**功能特点**：
- 从当前位置规划到目标位姿
- 使用最小加加速度轨迹 profile
- 实时显示轨迹统计信息
- MeshCat 中回放完整轨迹动画
- 显示参考路径（灰色）和实际路径（绿色）

---

#### 可视化工具 (`sim/visualizer.py`)

MeshCat 可视化器封装，提供统一的机器人显示接口。

**主要功能**：
- 加载 URDF 模型并显示机器人
- 绘制 3D 折线路径（参考/实际）
- 显示 IK 目标位姿（三色轴+球体）
- 支持关节轨迹动画播放

**使用示例**：
```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # 更新机器人位姿
viz.draw_path(points, "path_name", color)  # 绘制路径
```

---

### 实机控制

#### IK 实时控制 (`7_arm_ik_control.py`)

基于 IK 解算的机械臂实时末端控制。

**交互命令**：
| 命令 | 说明 |
|------|------|
| `x y z [roll pitch yaw]` | 目标末端位姿 |
| `state` | 查看状态 |
| `pos` | 当前末端位置 |
| `q/quit/exit` | 退出 |

**运行方式**：
```bash
uv run python example/7_arm_ik_control.py
> 0.3 0.0 0.2
> 0.3 0.1 0.25 0 0.5 0
```

---

#### 轨迹规划控制 (`8_arm_traj_control.py`)

SE(3) 测地线轨迹规划 + CLIK 跟踪。

**输入格式**：
```
x y z [roll pitch yaw] [duration]
```

**参数说明**：
- `x, y, z`: 目标位置（米）
- `roll, pitch, yaw`: 目标姿态（弧度）
- `duration`: 运动时长（秒），默认 2.0s

**运行方式**：
```bash
uv run python example/8_arm_traj_control.py
> 0.3 0.0 0.3 0 0.4 0 2.0
```

---

#### 重力补偿控制 — 基础版 (`9_gravity_compensation.py`)

使用 Pinocchio 动力学模型补偿关节重力。

**控制律**：
```
tau = g(q)          — 重力前馈
pos = 当前电机位置   — 关节位置跟随当前位置
kp = 2,  kd = 1     — 所有关节统一刚度/阻尼
```

**预期行为**：
- 机械臂可以在任意姿态下"漂浮"
- 松开后不会因自重坠落
- 可以手动掰动到任意位置

**运行方式**：
```bash
uv run python example/9_gravity_compensation.py
```

**输出**：
- 实时显示各关节期望力矩（N·m）
- 按 `Ctrl+C` 停止并断开连接

:::caution 退出重力补偿前务必归位
停止脚本（`Ctrl+C`）时，程序会**直接失能所有电机**，机械臂**不会自动回到零点**。请在退出前用手扶住机械臂或先将其移动到安全/归零姿态，避免关节突然下落造成碰撞或损伤。
:::

:::tip 单独调节各关节补偿力度
如果某些关节因结构摩擦或装配差异导致补偿不足/过补偿，可以在代码中对 `tau_g` 数组的对应元素进行额外缩放：

```python
tau_g[x] *= y  # x 为关节电机 id，y 为补偿力度系数，一般从 1 开始调整
#此补偿一般只在关节2和3使用
```

例如 `tau_g[2] *= 1.2` 表示将第 2 个关节的重力补偿力矩增大 20%。建议根据实际漂浮效果逐项微调，避免一次性改动过大。
:::

---

#### 重力补偿控制 — 末端速度锁止版 (`10_gravity_compensation_lock.py`)

在基础重力补偿的基础上，加入末端执行器速度检测与关节角度锁定机制。

**控制律**：
```
tau = g(q) + integral_term    — 重力前馈 + 积分项
pos = q_target                 — 目标关节角度（锁定或更新）
kp = 8.0,  kd = 1.0           — 增强刚度/阻尼
```

**锁止逻辑**：
- 当末端线速度 `||v_ee|| < 0.04 m/s` 且角速度 `||w_ee|| < 0.08 rad/s` 时：
  - 目标关节角度 `q_target` 保持锁定
  - 机械臂锁止在当前位置
- 当末端速度超过阈值时：
  - `q_target` 更新为当前关节角度
  - 允许手动推动改变位置

**预期行为**：
- 机械臂锁止在当前位置，用力推才能改变目标角度
- 比基础版更稳定，适合需要保持姿态的场景

**运行方式**：
```bash
uv run python example/10_gravity_compensation_lock.py
```

**输出**：
- 实时显示锁定状态（LOCKED / UPDATE）
- 末端线速度、角速度
- 各关节重力补偿力矩（N·m）
- 按 `Ctrl+C` 停止并断开连接

:::caution 退出重力补偿前务必归位
停止脚本（`Ctrl+C`）时，程序会**直接失能所有电机**，机械臂**不会自动回到零点**。请在退出前用手扶住机械臂或先将其移动到安全/归零姿态，避免关节突然下落造成碰撞或损伤。
:::

:::tip 单独调节各关节补偿力度
如果某些关节因结构摩擦或装配差异导致补偿不足/过补偿，可以在代码中对 `tau_g` 数组的对应元素进行额外缩放：

```python
tau_g[x] *= y  # x 为关节电机 id，y 为补偿力度系数，一般从 1 开始调整
#此补偿一般只在关节2和3使用
```

例如 `tau_g[2] *= 1.2` 表示将第 2 个关节的重力补偿力矩增大 20%。建议根据实际漂浮效果逐项微调，避免一次性改动过大。
:::

**安全测试配置**：
可通过修改脚本顶部的 `ENABLED_JOINTS` 列表，仅使能指定关节进行安全测试：
```python
ENABLED_JOINTS = ["joint1"]  # 仅使能 joint1
```

---

## FAQ

- **遇到 `Permission denied` 错误**  
  确保已执行 `sudo chmod 666 /dev/ttyACM0`（Damiao）或 `sudo chmod 666 /dev/can0`（Robostride）设置设备权限。

- **IK 解算失败或结果异常**  
  检查目标位姿是否在机械臂工作空间内，确保关节限位配置正确。

- **重力补偿效果不佳**  
  这可能是结构件误差和加工精度引起的，本项目的重力补偿依赖urdf和pinocchio，您可以先尝试修正urdf变为您实测下来的参数（这一步可以询问ai）。

- **Robostride 电机无法读取状态**  
  motorbridge 内部协议配置问题可能导致 RS 电机无法像 DM 电机那样查询状态。请以实际运动效果为准，或尝试使用 `ping` 命令确认电机通信正常。

- **如何切换 Damiao 和 Robostride 电机配置**  
  修改 `config/rebotarm_dm.yaml`（达妙）或 `config/rebotarm_rs.yaml`（Robostride）配置文件，并在代码中加载对应的配置。

---

## 联系方式

- **技术支持**: [提交 Issue](https://github.com/vectorBH6/reBotArm_control_py/issues)
- **项目仓库**: [GitHub](https://github.com/vectorBH6/reBotArm_control_py)
- **论坛**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## 参考文档

- [Pinocchio 官方文档](https://stack-of-tasks.github.io/pinocchio/)
- [MeshCat 官方文档](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/motorbridge/motorbridge)

---

<div align="center">
  <strong>如果本项目对你有帮助，请给个 Star 支持一下！</strong>
</div>
