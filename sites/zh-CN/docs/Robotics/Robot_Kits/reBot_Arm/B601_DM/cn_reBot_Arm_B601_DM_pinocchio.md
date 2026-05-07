---
description: 本教程介绍如何在 reBot Arm B601-DM 机械臂上使用 Pinocchio 和 MeshCat 进行运动学分析和可视化。
title: reBot Arm B601-DM入门Pinocchio与MeshCat
keywords:
  - Pinocchio
  - MeshCat
  - 机械臂
  - 机器人
  - LeRobot
  - 运动学
slug: /rebot_arm_b601_dm_pinocchio_meshcat
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-04-17
  author: LiuJunjie
translation:
  skip:
    - [zh-CN]
createdAt: '2026-03-24'
updatedAt: '2026-03-25'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_pinocchio_meshcat/
---

# reBot Arm B601-DM 的 Pinocchio 与 MeshCat 入门指南

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


![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) 是一个用于机器人动力学分析和优化的开源库。它提供了高效的正向/逆向运动学、动力学计算和轨迹规划功能。[MeshCat](https://github.com/rdeits/meshcat) 是一个基于 Web 的 3D 可视化工具，可以实时显示机器人状态和运动轨迹。

本项目结合了 Pinocchio 的强大计算能力和 MeshCat 的直观可视化，为 reBot Arm B601-DM 提供了一套完整的运动学分析和调试工具。


---

## 项目特点

1. **完整的运动学分析**  
   支持正向运动学 (FK) 和逆向运动学 (IK) 计算，可实时解算机械臂末端位姿。

2. **实时 3D 可视化**  
   通过 MeshCat 在浏览器中实时显示机械臂状态和运动轨迹，无需额外软件。

3. **轨迹规划与跟踪**  
   实现 SE(3) 测地线轨迹规划，支持 CLIK (Closed-Loop Inverse Kinematics) 跟踪控制。

4. **重力补偿控制**  
   基于 Pinocchio 动力学模型计算关节重力矩，实现机械臂的"漂浮"效果。

5. **开源 & 可扩展**  
   所有代码开源，支持用户根据需求自定义控制算法和可视化效果。

## 规格参数

本教程硬件由 [矽递科技 Seeed Studio](https://www.seeedstudio.com/) 提供

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
      <td>电机型号</td>
      <td>Damiao DM4340 / DM4310</td>
    </tr>
    <tr>
      <td>通信方式</td>
      <td>CAN Bus via USB-CAN 适配器</td>
    </tr>
    <tr>
      <td>工作电压</td>
      <td>24V DC</td>
    </tr>
    <tr>
      <td>控制方式</td>
      <td>PC</td>
    </tr>
    <tr>
      <td>推荐工作温度范围</td>
      <td>0°C ～ 40°C</td>
    </tr>
  </tbody>
</table>

## 材料清单（BOM）

| 部件 | 数量 | 是否包含 |
|--|--|--|
| reBot Arm B601-DM 机械臂 | 1 | ✅ |
| USB2CAN 串口桥 | 1 | ✅ |
| 电源适配器 (24V) | 1 | ✅ |
| USB-C 线缆 | 1 | ✅ |
| 夹爪 | 1 | ✅ |


## 环境要求

| 项目 | 要求 |
|------|------|
| **Python** | 3.10+ |
| **操作系统** | Ubuntu 22.04+ |
| **通信接口** | USB2CAN 串口桥 或 CAN 接口 |

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


### 调试工具

#### 单电机控制台 (`1_damiao_text.py`)

直接使用 motorbridge SDK 进行单电机测试。

**运行方式**：
```bash
uv run python example/1_damiao_text.py
```

**交互命令**：
| 命令 | 说明 |
|------|------|
| `enable` / `disable` | 使能/失能 |
| `set_zero` | 设置零位 |
| `state` | 查看状态 |

---

#### 零点校准与角度监控 (`2_zero_and_read.py`)

自动设置所有关节零点，实时显示关节角度。

**运行方式**：
```bash
uv run python example/2_zero_and_read.py
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
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" />
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

:::tip 权限设置
运行实机控制示例前，需要设置设备权限：

```bash
# 设置串口设备权限（达妙 USB2CAN）
sudo chmod 666 /dev/ttyACM0

# 或设置 CAN 设备权限（如 can0）
sudo chmod 666 /dev/can0
```
:::

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

#### 重力补偿控制 (`9_gravity_compensation.py`)

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

---

## FAQ

- **遇到 `Permission denied` 错误**  
  确保已执行 `sudo chmod 666 /dev/ttyACM0` 或 `sudo chmod 666 /dev/can0` 设置设备权限。

- **IK 解算失败或结果异常**  
  检查目标位姿是否在机械臂工作空间内，确保关节限位配置正确。

- **重力补偿效果不佳**  
  这可能是结构件误差和加工精度引起的，本项目的重力补偿依赖urdf和pinocchio，您可以先尝试修正urdf变为您实测下来的参数（这一步可以询问ai）。

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
