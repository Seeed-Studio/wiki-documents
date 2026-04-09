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
last_update:
  date: 2026-03-24
  author: LiuJunjie
translation:
  skip:
    - [zh-CN]
createdAt: '2026-03-24'
updatedAt: '2026-03-25'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_pinocchio_meshcat/
---

# reBot Arm B601-DM 的 Pinocchio 与 MeshCat 入门指南

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

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

---

## 📖 项目简介

**reBotArm Control** 是一个面向 reBot Arm B601 系列机械臂的 Python 控制库，提供从底层电机控制到上层运动学解算的完整解决方案。

### ✨ 核心特性

- 🦾 **双型号支持** — B601-DM（达妙电机）和 B601-RS（灵足电机）两款机械臂
- 🧮 **运动学求解** — 基于 Pinocchio 的正/逆运动学计算
- 🛤️ **轨迹规划** — SE(3) 测地线轨迹 + CLIK 跟踪
- 🔧 **灵活配置** — YAML 配置文件，快速适配不同硬件

---

## ⚙️ 快速开始

### 环境要求

| 项目 | 要求 |
|------|------|
| **Python** | 3.10+ |
| **操作系统** | Ubuntu 22.04+ |
| **通信接口** | USB2CAN 串口桥 或 CAN 接口 |

### 安装步骤

#### 步骤 1. 安装 uv（如未安装）

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

#### 步骤 2. 同步环境（安装所有依赖）

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` 会自动创建虚拟环境（如不存在）并根据 `pyproject.toml` 和 `uv.lock` 安装所有依赖。
:::

---

## 🔌 硬件配置

### 默认配置：达妙 USB2CAN 串口桥

reBot Arm B601-DM 默认使用达妙 USB2CAN 串口桥模块。

**硬件连接**：
1. 将 USB2CAN 模块通过 USB 线连接到计算机
2. 系统会自动识别为 `/dev/ttyACM0` 设备

**配置验证**：
```bash
# 检查设备
ls /dev/ttyACM0

# 扫描电机
motorbridge-cli scan --vendor damiao --transport dm-serial \
    --serial-port /dev/ttyACM0 --serial-baud 921600
```

### 可选配置：标准 CAN 接口

使用其他 USB-CAN 适配器（CANable、PCAN 等）：

```bash
# 启动 CAN 接口
sudo ip link set can0 up type can bitrate 500000

# 验证接口
ip -details link show can0
```

### 电机品牌配置

| 电机品牌 | 传输方式 | 配置参数 | 波特率 |
|----------|---------|---------|--------|
| **达妙 (Damiao)** | 串口桥 | `dm-serial` | 921600 |
| **达妙 (Damiao)** | CAN 接口 | `socketcan` | 500000 |
| **RobStride** | CAN 接口 | `socketcan` | 500000 |

:::tip
- 达妙电机使用串口桥时，必须设置 `--transport dm-serial`
- 反馈 ID 规则：`feedback_id = motor_id + 0x10`
:::

---

## 📁 项目结构

```
reBotArm_control_py/
├── config/                     # 配置文件
│   └── robot.yaml              # 关节参数配置
├── example/                    # 示例程序
│   ├── 调试工具/
│   │   ├── 1_damiao_text.py        # 单电机控制台
│   │   └── 2_zero_and_read.py      # 零点校准
│   ├── 位置控制/
│   │   ├── 3_mit_control.py        # MIT 控制
│   │   └── 4_pos_vel_control.py    # POS_VEL 控制
│   ├── 运动学测试/
│   │   ├── 5_fk_test.py            # 正运动学
│   │   └── 6_ik_test.py            # 逆运动学
│   ├── 实机控制/
│   │   ├── 7_arm_ik_control.py     # IK 实时控制
│   │   ├── 8_arm_traj_control.py   # 轨迹规划
│   │   └── 9_gravity_compensation.py  # 重力补偿
│   └── sim/                    # 仿真工具
├── reBotArm_control_py/        # 核心库
│   ├── actuator/               # 执行器模块
│   ├── kinematics/             # 运动学模块
│   ├── controllers/            # 控制器模块
│   └── trajectory/             # 轨迹规划模块
├── urdf/                       # URDF 模型
└── README.md
```

---

## 🎮 示例程序

### 调试工具

#### 1️⃣ 单电机控制台 (`1_damiao_text.py`)

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

#### 2️⃣ 零点校准与角度监控 (`2_zero_and_read.py`)

自动设置所有关节零点，实时显示关节角度。

**运行方式**：
```bash
uv run python example/2_zero_and_read.py
```

---

### 运动学测试

#### 5️⃣ 正运动学测试 (`5_fk_test.py`)

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

#### 6️⃣ 逆运动学测试 (`6_ik_test.py`)

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

#### 7️⃣ IK 实时控制 (`7_arm_ik_control.py`)

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

#### 8️⃣ 轨迹规划控制 (`8_arm_traj_control.py`)

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

#### 9️⃣ 重力补偿控制 (`9_gravity_compensation.py`)

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

## 📄 License

本项目采用 **MIT 许可证** 开源。

---

## ☎ 联系我们

- **技术支持**: [提交 Issue](https://github.com/vectorBH6/reBotArm_control_py/issues)
- **项目仓库**: [GitHub](https://github.com/vectorBH6/reBotArm_control_py)

---

<p align="center">
  <strong>🌟 如果本项目对你有帮助，请给个 Star 支持一下！</strong>
</p>
