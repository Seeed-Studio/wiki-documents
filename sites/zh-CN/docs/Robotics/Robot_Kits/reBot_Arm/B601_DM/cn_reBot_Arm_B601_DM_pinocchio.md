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
  skip: [[zh-CN]]
createdAt: '2026-03-24'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_pinocchio_meshcat/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# reBot Arm B601-DM 的 Pinocchio 与 MeshCat 入门指南

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://detail.tmall.com/item.htm?id=1042412233386&skuId=6065255360559" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

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


:::tip
本案例示例代码可用于进行机械臂的电机或姿态的调控，包含单个电机调控、正/逆运动学调控与测试、机械臂原点设置及电机角度读取、MeshCat可视化系统等。
:::


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

:::caution 前置要求 — 请先完成机械臂快速入门
开始本教程前，请**务必**先完整跑通 **[reBot Arm B601-DM 快速入门](/rebot_b601_dm_getting_started)** 文档，至少包含以下前置步骤：

- 机械臂开箱、接线与上电自检
- 串口 / CAN 设备权限（`sudo chmod 666 /dev/ttyACM0` 或 `/dev/can0`）
- 所有关节的零点初始化（`2_zero_and_read.py`）与 MIT / POS_VEL 模式的基础连通性验证

本教程默认机械臂已在总线正常响应、关节零点已标定，且操作人员熟悉相关安全限制。跳过快速入门直接上手本教程，可能导致电机配置错误、关节堵转或机械臂坠落。
:::

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
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` 会自动创建虚拟环境（如不存在）并根据 `pyproject.toml` 和 `uv.lock` 安装所有依赖。
:::


## 调节 MIT / POS_VEL 控制器参数 {#tune-controller-params}

本节说明**如何修改**机械臂各关节在 **MIT 模式** 与 **POS_VEL 模式**下的控制器参数，以及修改后如何让改动生效。

:::tip 本节只讲「在哪里改 / 怎么改」，不讲「该改多少」
合适的参数只能通过**实测整定**得到。本节只介绍：参数存放在哪里、每个字段控制什么、修改后如何让改动生效并验证。具体整定策略（如试凑法、Ziegler‑Nichols 等）请参考通用电机控制资料。
:::

### 配置文件位置

| 硬件版本 | 电机配置文件 | 切换入口 |
|---|---|---|
| **reBot Arm B601-DM**（本文档） | `config/rebotarm_dm.yaml` | `config/rebotarm.yaml` 中设置 `hardware_yaml: "rebotarm_dm.yaml"` |
| **reBot Arm B601-RS** | `config/rebotarm_rs.yaml` | `config/rebotarm.yaml` 中设置 `hardware_yaml: "rebotarm_rs.yaml"` |

:::caution 不要直接编辑 `rebotarm.yaml`
该文件只包含 `hardware_yaml: ...` 一行；电机参数全部在 `rebotarm_dm.yaml` / `rebotarm_rs.yaml` 里。
:::

### 配置文件结构

每个关节都是一个独立条目，按**控制模式**分组：

```yaml
joints:
  - name: joint1
    motor_id: 0x01
    feedback_id: 0x11
    model: "4340P"
    vendor: "damiao"
    MIT:
      kp: 120.0
      kd: 8.0
    POS_VEL:
      vel_kp: 0.0125
      vel_ki: 0.004
      pos_kp: 150.0
      pos_ki: 0.5
      vlim: 5.0
  # ... joint2 ~ joint6 同结构 ...
```

定位规则：

- **按关节名定位**：要修改哪个关节，就找到 `- name: jointX` 那一段；
- **按模式定位**：在该 joint 段下，`MIT:` 子表放 MIT 模式参数，`POS_VEL:` 子表放 POS_VEL 模式参数；
- **当前模式决定下发哪组**：脚本里通过 `mode mit` / `mode posvel` 切换，电机实际收到的是对应子表下的参数。

### MIT 模式字段含义

| 字段 | 作用 |
|---|---|
| `kp` | 位置环比例增益：跟踪目标位置的「硬度」。 |
| `kd` | 速度环阻尼增益：抑制位置误差带来的振荡。 |

### POS_VEL 模式字段含义

| 字段 | 作用 |
|---|---|
| `vel_kp` | 速度环比例增益。 |
| `vel_ki` | 速度环积分增益。 |
| `pos_kp` | 位置环比例增益。 |
| `pos_ki` | 位置环积分增益（部分厂商配置中存在）。 |
| `vlim` | 速度上限，限制最大运动速度。 |

:::warning 字段定义因厂商而异
Damiao（DM）与 Robostride（RS）电机的协议层单位不同，**同一字段名下的「大小」没有跨厂商可比性**。修改 RS 的 `vel_kp` 与修改 DM 的 `vel_kp` 含义不同，请按各自 yaml 内的字段顺序理解，不要跨配置文件做数值类比。
:::

### 修改流程

1. **关闭所有运行中的脚本**。电机处于使能状态时改 YAML 不会立即生效，且容易出现不一致行为。
2. **编辑对应的 yaml 文件**：
   ```bash
   # 以 DM 为例
   vim config/rebotarm_dm.yaml
   ```
   - 只改你需要调整的关节（如 `joint1`），不要动其他无关关节；
   - 同一关节内只改需要调整的模式（MIT 或 POS_VEL），不要无意义地改两个模式的字段。
3. **保持 YAML 缩进**：每级缩进 2 空格，键值对用 `: ` 分隔。写错缩进会导致 `yaml.safe_load` 解析失败，所有参数回落到默认值。
4. **保存后重启脚本**。YAML 在脚本启动时一次性读取，**运行时修改不会立即生效**。
5. **单关节验证**：建议先用 `3_mit_control.py`（MIT）/ `4_pos_vel_control.py`（POS_VEL）之类的脚本对**单个关节**小幅运动验证改动效果，再做整臂测试。

### 验证改动是否生效

- **运行时观察**：在 `3_mit_control.py` / `4_pos_vel_control.py` 中使能电机 → `state` 查看状态；若参数没变化或电机表现与改前完全一样，说明 YAML 改错或被默认配置覆盖。
- **YAML 自检**：用 Python 直接解析并打印某关节的字段，确认就是你刚改的值：
  ```bash
  uv run python -c "import yaml; print(yaml.safe_load(open('config/rebotarm_dm.yaml'))['joints'][0])"
  ```
- **快速回滚**：直接 `git checkout config/rebotarm_dm.yaml` 即可恢复仓库默认参数。

:::caution 不要一次跨多关节大幅调整
多关节同时大幅改动 `kp` / `kd` 后，若某关节方向或极性填错，整臂可能瞬间出现抖动、过流甚至撞限位。请**逐关节、逐模式、小步迭代**。
:::

---

## 调试工具介绍

:::tip 权限设置
运行实机控制示例前，需要设置设备权限：

```bash
# 设置串口设备权限（达妙 USB2CAN）
sudo chmod 666 /dev/ttyACM0

# 或设置 CAN 设备权限（如 can0）
sudo chmod 666 /dev/can0
```
:::
<details>
<summary>调试用工具（仅异常情况使用）</summary>

**单电机控制台 (`0x01damiao_test.py`)**

直接使用 motorbridge SDK 进行单电机测试。

**运行方式**：
```bash
uv run python example/0x01damiao_test.py
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
---

**零点校准与角度监控 (`2_zero_and_read.py`)**

自动设置所有关节零点，实时显示关节角度。

**运行方式**：
```bash
uv run python example/2_zero_and_read.py

# 输出实例
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01
```

---
</details>

<details>
<summary>MIT 控制模式（reBot DM 上的备选方案，按需查看 — 推荐使用 POS_VEL 模式）</summary>

:::warning 适用性提示
对于 **reBot Arm B601-DM** 而言，**POS_VEL（位置‑速度）模式是推荐的控制模式** — Damiao 电机协议原生支持位置‑速度混合控制并自带速度限制，开箱即可获得最平滑的效果。MIT 模式**是备选方案**，通常需要更细致地调参 `kp` / `kd` 才能有较好表现。因此 MIT 模式在 DM 硬件上**不是默认推荐**，但出于部分用户确有此需求，**保留该 demo 供按需参考与调参**。如果无特殊场景，建议优先使用下方的 POS_VEL 模式示例。
:::

**MIT 控制模式 (`3_mit_control.py`)**

输入所有关节的目标角度，将MIT控制模式下完成各电机的控制，通常用于力控、阻抗控制或需要高动态响应的场景。

**运行方式**：
```bash
uv run python example/3_mit_control.py
> 30 0 0 0 0 0 0 # 控制1号电机正转30度
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # 退出系统
```
:::danger
本示例**没有路径规划与速度规划**，输入的目标关节角度过大会让电机以很快的速度运动，甚至**直接触发电机过流保护**。建议：

- 先输入**小角度**验证效果（例如单个关节只动 5~10 度），确认电机响应与方向无误后再逐步放大；
- 本节**没有内置的平滑轨迹版本**，若需要在多次目标之间平稳过渡，请谨慎控制目标与到位节奏，或参考后续的 [平滑轨迹的逆运动学控制 (8_arm_traj_control.py)](#demo8-traj-control) 把最小 jerk / 加减速规划的思路移植进自己的脚本；
- 运行时人或其他设备务必远离机械臂工作半径。
:::

---
</details>

### 位置-速度控制模式 (`4_pos_vel_control.py`)

输入所有关节的目标角度，将在POS_VEL（位置-速度）混合控制模式下完成各电机的控制，在到达指定角度时运动得更加平稳、可控，减少震动。

**运行方式**：
```bash
uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 0 # 控制1号电机正转30度
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # 退出系统
```
:::danger
本示例**没有路径规划与速度规划**，输入的目标关节角度过大会让电机以很快的速度运动，甚至**直接触发电机过流保护**。建议：

- 先输入**小角度**验证效果（例如单个关节只动 5~10 度），确认电机响应与方向无误后再逐步放大；
- 本节**没有内置的平滑轨迹版本**，若需要在多次目标之间平稳过渡，请谨慎控制目标与到位节奏，或参考后续的 [平滑轨迹的逆运动学控制 (8_arm_traj_control.py)](#demo8-traj-control) 把最小 jerk / 加减速规划的思路移植进自己的脚本；
- 运行时人或其他设备务必远离机械臂工作半径。
:::

---

## 运动学测试

### 正运动学测试 (`5_fk_test.py`)

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
====================================================
  结果 / Result
====================================================
  关节角度 (度) / Joint angles (deg): [0. 0. 0. 0. 0. 0.]
  末端位置 (m) / End-effector position (m):
    X = +0.260306
    Y = +0.000000
    Z = +0.191701
  旋转矩阵 (R_world^end) / Rotation matrix (R_world^end):
    [+1.000000  +0.000000  -0.000007]
    [+0.000000  +1.000000  +0.000100]
    [+0.000007  -0.000100  +1.000000]
  欧拉角 XYZ (横滚, 俯仰, 偏航) [度] / Euler XYZ (roll, pitch, yaw) [deg]:
    横滚/roll  = -0.0057
    俯仰/pitch = -0.0004
    偏航/yaw   = +0.0000
```

---

### 逆运动学测试 (`6_ik_test.py`)

根据期望末端位姿求解关节角度。

**输入格式**：
- 仅位置：`<x> <y> <z>`（米）
- 位置 + 姿态：`<x> <y> <z> <roll> <pitch> <yaw>`（度）

**示例**：
```bash
uv run python example/6_ik_test.py

# 用法A
> 0.28 0 0.3  # 仅位置
====================================================
  结果 / Result
====================================================
  目标末端位置 / Target position : [+0.2800, +0.0000, +0.3000] m
  收敛 / Converged : 是 / Yes
  迭代次数 / Iterations: 2000
  位置误差 / Position error: 5.62e-17 m
  关节角度 (度) [前 6 个控制关节] / Joint angles (deg) [first 6 control joints]:
    joint1     =  -0.0003 deg  (-0.0000 rad)
    joint2     = -22.9687 deg  (-0.4009 rad)
    joint3     = -24.2191 deg  (-0.4227 rad)
    joint4     =  +1.2508 deg  (+0.0218 rad)
    joint5     =  -0.0003 deg  (-0.0000 rad)
    joint6     =  +0.0057 deg  (+0.0001 rad)

# 用法B
> 0.28 0 0.3 0 1 0       # 位置 + 姿态
====================================================
  结果 / Result
====================================================
  目标末端位置 / Target position   : [+0.2800, +0.0000, +0.3000] m
  目标末端姿态 / Target orientation: [+0.00, +1.00, +0.00] deg
  收敛 / Converged  : 是 / Yes
  迭代次数 / Iterations: 2000
  位置误差 / Position error: 6.28e-17 m
  关节角度 (度) [前 6 个控制关节] / Joint angles (deg) [first 6 control joints]:
    joint1     =  -0.0003 deg  (-0.0000 rad)
    joint2     = -23.3968 deg  (-0.4084 rad)
    joint3     = -25.3018 deg  (-0.4416 rad)
    joint4     =  +2.9054 deg  (+0.0507 rad)
    joint5     =  -0.0003 deg  (-0.0000 rad)
    joint6     =  +0.0057 deg  (+0.0001 rad)
```
### MIT 模式下的逆运动学控制 (`7_arm_ik_control.py`)

在 MIT 模式下使用逆运动学（IK）指定机械臂末端想去的三维坐标（X, Y, Z）和姿态（欧拉角）

**输入格式**：
- 仅位置：`<x> <y> <z>`（米）
- 位置 + 姿态：`<x> <y> <z> <roll> <pitch> <yaw>`（度）
- 输入 `state` ：查看当前各个关节的实际弧度值。
- 输入 `end_state` ：查看当前 末端在空间中的实际坐标 (m) 和欧拉角 (rad)。

**运行方式**：
```bash
uv run python example/7_arm_ik_control.py

#用法A
> 0.3 0.0 0.4 # 仅控制位置（姿态默认为0），让机械臂末端走到前方 0.3 米，上方 0.4 米的位置。

#用法B
> 0.3 0.0 0.4 0.0 0.0 0.5 #同时控制位置和姿态：走到指定位置，同时手腕偏航角旋转 0.5 弧度。

> ctrl + c # 回到零点并退出系统
```
:::danger
本示例**没有路径规划与速度规划**，输入的目标角度过大会直接让电机以很快的速度运动，甚至**直接触发电机过流保护**。建议：

- 先输入**小角度**验证效果（例如让末端在当前位置附近只动 5~10 cm），确认姿态与方向无误后再逐步放大；
- 如需在两次目标之间平滑过渡，请直接跳到下一节的 [平滑轨迹的逆运动学控制 (8_arm_traj_control.py)](#demo8-traj-control) 使用带最小 jerk / 加减速规划的版本；
- 运行时人或其他设备务必远离机械臂工作半径。
:::

### 平滑轨迹的逆运动学控制 (`8_arm_traj_control.py`) {#demo8-traj-control}

在 MIT 模式下使用逆运动学（IK），在目标时间内自动规划出一条匀速或带平滑加减速的运动轨迹，避免了关节剧烈抖动。

**输入格式**：
- 仅位置：`<x> <y> <z>`（米）
- 位置 + 姿态：`<x> <y> <z> <roll> <pitch> <yaw>`（度）
- 位置 + 姿态 + 时间（默认为 2.0 ）：`<x> <y> <z> <roll> <pitch> <yaw> <time>`（度）
- 输入 `state` ：查看当前各个关节的实际弧度值。
- 输入 `end_state` ：查看当前 末端在空间中的实际坐标 (m) 和欧拉角 (rad)。

**运行方式**：
```bash
uv run python example/8_arm_traj_control.py

#用法A
> 0.3 0.0 0.4 #仅指定位置，姿态默认为 0，移动时间默认为 2.0 秒

#用法B
> 0.3 0.0 0.4 0.0 0.0 0.5 #同时控制位置和姿态：走到指定位置，同时手腕偏航角旋转 0.5 弧度，移动时间默认为 2.0 秒

#用法C
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 #让机械臂走到特定位置，并指定用 5.0 秒 的时间慢慢挪过去。(注意：如果要输时间，前方的姿态参数 0 0 0 不能省略)

> ctrl + c # 回到零点并退出系统
```

:::tip 位姿偏差怎么办？
如果运行本示例时发现**读取到的末端位姿**与**下发的目标位姿**存在偏差，且**该位姿本身是可达的**（不在工作空间外、不是奇异位姿），那么问题很可能出在 MIT / POS_VEL 控制器的参数上。此时请参考前面的 [调节 MIT / POS_VEL 控制器参数](#tune-controller-params) 章节，按"单关节、逐模式、小步迭代"的方式手动整定 `kp` / `kd` 等参数；整定完成后再回到本示例验证。
:::

---

## 重力补偿测试

### 重力补偿控制 — 基础版 (`9_gravity_compensation.py`)

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


### 重力补偿控制 — 末端速度锁止版 (`10_gravity_compensation_lock.py`)

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

## FAQ

- **遇到 `Permission denied` 错误**  
  确保已执行 `sudo chmod 666 /dev/ttyACM0` 或 `sudo chmod 666 /dev/can0` 设置设备权限。

- **IK 解算失败或结果异常**  
  检查目标位姿是否在机械臂工作空间内，确保关节限位配置正确。

- **重力补偿效果不佳**  
  这可能是结构件误差和加工精度引起的，本项目的重力补偿依赖urdf和pinocchio，您可以先尝试修正urdf变为您实测下来的参数（这一步可以询问ai）。

---

## 联系方式

- **技术支持**: [提交 Issue](https://github.com/Seeed-Projects/reBotArm_control_py/issues)
- **项目仓库**: [GitHub](https://github.com/Seeed-Projects/reBotArm_control_py)
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
