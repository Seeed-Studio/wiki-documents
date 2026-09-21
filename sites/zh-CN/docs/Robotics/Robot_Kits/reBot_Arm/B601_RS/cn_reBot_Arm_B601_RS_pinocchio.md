---
description: 本教程介绍如何在 reBot Arm B601-RS 机械臂上使用 Pinocchio 和 MeshCat 进行运动学分析和可视化。
title: B601-RS 与匹诺曹
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
  date: 2026-07-22
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-06-11'
updatedAt: '2026-09-11'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_pinocchio_meshcat/
---

import '/src/css/rebot-wiki-style.css';
import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm B601-RS Pinocchio 与 MeshCat 入门

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://detail.tmall.com/item.htm?id=1057521963559" target="_blank" rel="noopener noreferrer">
    <span>点击立即获取</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

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

<p align="center">
  <a href="https://github.com/stack-of-tasks/pinocchio">Pinocchio</a> 是一个用于机器人动力学分析和优化的开源库。它提供了高效的正向/逆向运动学、动力学计算和轨迹规划功能。
</p>

<p align="center">
  <a href="https://github.com/rdeits/meshcat">MeshCat</a> 是一个基于 Web 的 3D 可视化工具，可以实时显示机器人状态和运动轨迹。
</p>

本项目结合了 Pinocchio 的强大计算能力和 MeshCat 的直观可视化，为 reBot Arm B601-RS 提供了一套完整的运动学分析和调试工具。

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBotArm_control_py"
  ariaLabel="在 GitHub 上为 reBotArm_control_py 点亮 Star"
/>


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

本教程硬件由 [矽递科技 Seeed Studio](https://www.seeedstudio.com/) 提供



## 环境要求

:::caution 前置要求 — 请先完成机械臂快速入门
开始本教程前，请**务必**先完整跑通 **[reBot Arm B601-RS 快速入门](/rebot_b601_rs_getting_started)** 文档，至少包含以下前置步骤：

- 机械臂开箱、接线与上电自检
- CAN 通道建立（`can0` @ 1 Mbps）
- 所有关节的零点初始化

本教程默认机械臂已在 CAN 总线正常响应、关节零点已标定，且操作人员熟悉**70% 臂展工作空间**的安全限制。跳过快速入门直接上手本教程。

机械臂在运行示例时机械臂需要在70%以内的臂展工作空间内工作，超出工作空间长时间停留会出现二号关节电机进入堵转保护，导致机械臂掉落。
:::

| 项目 | 要求 |
|------|------|
| **Python** | 3.10+ |
| **操作系统** | Ubuntu（推荐 Ubuntu 24.04 LTS） |
| **通信接口** | CAN 接口 (can0) |
| **电源要求** | DC 48V 15A |

---

## 安装步骤

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>安装 uv（如未安装）</h4>
<p className="rebot-step-label">第 1 步</p>

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

安装完成后，运行以下命令确认 `uv` 可用：

```bash
uv --version
```

成功时会看到类似输出（版本号和平台可能不同）：

```text
uv 0.11.31 (x86_64-unknown-linux-gnu)
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>同步环境（安装所有依赖）</h4>
<p className="rebot-step-label">第 2 步</p>

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git 
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` 会自动创建虚拟环境（如不存在）并根据 `pyproject.toml` 和 `uv.lock` 安装所有依赖。
:::

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>切换为 RS 硬件配置</h4>
<p className="rebot-step-label">第 3 步</p>

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

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>设置 CAN 通道</h4>
<p className="rebot-step-label">第 4 步</p>

:::tip can通道设置
运行实机控制示例和调试电机前，需要设置can通道（PCAN-USB有重新插拔需要再次配置此项）：

```bash
#PCAN-USB 通常应该直接出现 can0 或 can1
sudo modprobe peak_usb
ip -br link

#如果出现 can0，再设置 bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 
sudo ip link set can0 up    #拉起can0
```

:::

<details>
<summary>调试用工具（仅异常情况使用）</summary>

**单电机控制台 — Robostride RS06 (`0x01rs06_test.py`)**

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

**注意**：Robostride 电机使用 CAN 接口（默认 `can0`），host/feedback ID 默认为 `0xFD`，电机在测试时需要disable后在enable才可以正常读取和控制电机。

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

</div>
</section>
</div>

## 调节 MIT / POS_VEL 控制器参数 {#tune-controller-params}

本节说明**如何修改**机械臂各关节在 **MIT 模式** 与 **POS_VEL 模式**下的控制器参数，以及修改后如何让改动生效。

:::tip 本节只讲「在哪里改 / 怎么改」，不讲「该改多少」
合适的参数只能通过**实测整定**得到。本节只介绍：参数存放在哪里、每个字段控制什么、修改后如何让改动生效并验证。具体整定策略（如试凑法、Ziegler‑Nichols 等）请自行学习。
:::

### 配置文件位置

| 硬件版本 | 电机配置文件 | 切换入口 |
|---|---|---|
| **reBot Arm B601-RS**（本文档） | `config/rebotarm_rs.yaml` | `config/rebotarm.yaml` 中设置 `hardware_yaml: "rebotarm_rs.yaml"` |
| **reBot Arm B601-DM** | `config/rebotarm_dm.yaml` | `config/rebotarm.yaml` 中设置 `hardware_yaml: "rebotarm_dm.yaml"` |

:::caution 不要直接编辑 `rebotarm.yaml`
该文件只包含 `hardware_yaml: ...` 一行；电机参数全部在 `rebotarm_rs.yaml` / `rebotarm_dm.yaml` 里。
:::

### 配置文件结构

每个关节都是一个独立条目，按**控制模式**分组：

```yaml
joints:
  - name: joint1
    motor_id: 0x01
    feedback_id: 0xFD
    model: "rs-06"
    vendor: "robstride"
    MIT:
      kp: 50.0
      kd: 3.0
    POS_VEL:
      vel_kp: 12.0
      vel_ki: 0.1
      pos_kp: 13.0
      vlim: 10.0
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
| `pos_kp` | 位置环比例增益（与 `vlim` 联动实现位置‑速度混合控制）。 |
| `vlim` | 速度上限，限制最大运动速度。 |

:::warning 字段定义因厂商而异
Damiao（DM）与 Robostride（RS）电机的协议层单位不同，**同一字段名下的「大小」没有跨厂商可比性**。修改 RS 的 `vel_kp` 与修改 DM 的 `vel_kp` 含义不同，请按各自 yaml 内的字段顺序理解，不要跨配置文件做数值类比。
:::

:::caution 调参前先限制测试范围
多关节同时大幅改动 `kp` / `kd` 后，若某关节方向或极性填错，整臂可能瞬间出现抖动、过流甚至撞限位。开始调参前，请先清空机械臂工作范围，并计划好**逐关节、逐模式、小步迭代**的测试顺序。
:::

### 修改流程

1. **关闭所有运行中的脚本**。电机处于使能状态时改 YAML 不会立即生效，且容易出现不一致行为。
2. **编辑对应的 yaml 文件**：
   ```bash
   # 以 RS 为例
   vim config/rebotarm_rs.yaml
   ```
   - 只改你需要调整的关节（如 `joint1`），不要动其他无关关节；
   - 同一关节内只改需要调整的模式（MIT 或 POS_VEL），不要无意义地改两个模式的字段。
3. **保持 YAML 缩进**：每级缩进 2 空格，键值对用 `: ` 分隔。写错缩进会导致 `yaml.safe_load` 解析失败，所有参数回落到默认值。
4. **保存后重启脚本**。YAML 在脚本启动时一次性读取，**运行时修改不会立即生效**。
5. **单关节验证**：建议先用 demo3（MIT）/ demo4（POS_VEL）之类的脚本对**单个关节**小幅运动验证改动效果，再做整臂测试。

### 验证改动是否生效

- **运行时观察**：在 demo3 / demo4 中使能电机 → `state` 查看状态；若参数没变化或电机表现与改前完全一样，说明 YAML 改错或被默认配置覆盖。
- **YAML 自检**：用 Python 直接解析并打印某关节的字段，确认就是你刚改的值：
  ```bash
  uv run python -c "import yaml; print(yaml.safe_load(open('config/rebotarm_rs.yaml'))['joints'][0])"
  ```
- **快速回滚**：直接 `git checkout config/rebotarm_rs.yaml` 即可恢复仓库默认参数。

## 基础控制测试

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>MIT 模式全关节控制</h4>
<p className="rebot-step-label">Demo 3 · 3_mit_control.py</p>

所有关节统一 MIT 模式，每周期同步发送控制指令。

**输入**：全部关节角度（度），空格分隔。若配置了夹爪，需额外输入夹爪角度。

:::danger 可跳过：本示例没有平滑轨迹规划
本示例会将目标关节角直接下发给电机，**没有路径规划或速度规划**。较大的目标变化可能使机械臂突然高速运动，并触发过流保护。

- 本示例不是完成教程的必做步骤；如果你的目标是让机械臂安全、平滑地移动，建议**不要运行本示例**，直接前往 [平滑轨迹的逆运动学控制 (`8_arm_traj_control.py`)](#demo8-traj-control)；
- 仅当需要验证底层 MIT 关节控制时再运行，并先让单个关节小幅移动 5～10 度，确认响应和方向后再逐步调整；
- 运行前清空机械臂工作范围，并确保随时可以断电。
:::

<details className="rebot-demo-details">
<summary>展开运行方式（可选）</summary>

**运行方式**：
```bash
uv run python example/3_mit_control.py
> 30 0 0 0 0 0 # 控制1号电机正转30度
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # 退出系统
```

</details>

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>POS_VEL 模式全关节控制（可选）</h4>
<p className="rebot-step-label">Demo 4 · 4_pos_vel_control.py</p>

:::warning 可跳过：默认参数下不保证平滑
本示例直接更新各关节的目标位置，不包含完整的轨迹规划。对于 **reBot Arm B601-RS**，POS_VEL（位置‑速度）模式还需要**单独调参**才能获得较好的效果，默认参数下通常不如已整定的 MIT 模式平滑。

本示例不是完成教程的必做步骤；没有明确的 POS_VEL 调试需求时，建议**不要运行本示例**，直接前往 [平滑轨迹的逆运动学控制 (`8_arm_traj_control.py`)](#demo8-traj-control)。如需调试，请仅使用小幅目标变化，并确保人员和设备远离机械臂工作范围。
:::

输入所有关节的目标角度，以 POS_VEL（位置-速度）混合控制模式控制各电机。经过正确调参后，该模式可以限制到达目标角度时的速度；本示例本身不提供完整的平滑轨迹规划。

<details className="rebot-demo-details">
<summary>展开运行方式（可选）</summary>

**运行方式**：
```bash
uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 # 控制1号电机正转30度
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # 退出系统
```

</details>

</div>
</section>
</div>

## 运动学测试

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>正运动学测试</h4>
<p className="rebot-step-label">Demo 5 · 5_fk_test.py</p>

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

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>逆运动学测试</h4>
<p className="rebot-step-label">Demo 6 · 6_ik_test.py</p>

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

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">7</span>
<div className="rebot-step-content">
<h4>MIT 模式下的逆运动学控制（可选）</h4>
<p className="rebot-step-label">Demo 7 · 7_arm_ik_control.py</p>

在 MIT 模式下使用逆运动学（IK）指定机械臂末端想去的三维坐标（X, Y, Z）和姿态（欧拉角）

**输入格式**：
- 仅位置：`<x> <y> <z>`（米）
- 位置 + 姿态：`<x> <y> <z> <roll> <pitch> <yaw>`（度）
- 输入 `state` ：查看当前各个关节的实际弧度值。
- 输入 `end_state` ：查看当前 末端在空间中的实际坐标 (m) 和欧拉角 (rad)。

:::danger 可跳过：本示例没有平滑轨迹规划
本示例会将 IK 解算结果直接作为关节目标，**没有路径规划或速度规划**。目标位姿变化较大时，机械臂可能突然高速运动，并触发过流保护。

- 本示例不是完成教程的必做步骤；通常建议**不要运行本示例**，直接使用下一节带最小 jerk / 加减速规划的 [平滑轨迹逆运动学控制 (`8_arm_traj_control.py`)](#demo8-traj-control)；
- 仅当需要对比或调试无轨迹规划的 IK 控制时再运行，第一次目标应限制在当前位置附近 5～10 cm；
- 运行前确认目标位姿可达、工作范围内无人或障碍物，并确保随时可以断电。
:::

<details className="rebot-demo-details">
<summary>展开运行方式（可选）</summary>

**运行方式**：
```bash
uv run python example/7_arm_ik_control.py

#用法A
> 0.3 0.0 0.3 # 仅控制位置（姿态默认为0），让机械臂末端走到前方 0.3 米，上方 0.3 米的位置。

#用法B
> 0.3 0.0 0.3 0.0 0.0 0.5 #同时控制位置和姿态：走到指定位置，同时手腕偏航角旋转 0.5 弧度。

> ctrl + c # 退出系统
```

</details>

</div>
</section>

<section className="rebot-step-item rebot-step-item--recommended">
<span className="rebot-step-number">8</span>
<div className="rebot-step-content">
<h4 id="demo8-traj-control">平滑轨迹的逆运动学控制（推荐）</h4>
<p className="rebot-step-label">Demo 8 · 8_arm_traj_control.py</p>

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

> ctrl + c # 退出系统
```

:::tip 位姿偏差怎么办？
如果运行本示例时发现**读取到的末端位姿**与**下发的目标位姿**存在偏差，且**该位姿本身是可达的**（不在工作空间外、不是奇异位姿），那么问题很可能出在 MIT / POS_VEL 控制器的参数上。此时请参考前面的 [调节 MIT / POS_VEL 控制器参数](#tune-controller-params) 章节，按"单关节、逐模式、小步迭代"的方式手动整定 `kp` / `kd` 等参数；整定完成后再回到本示例验证。
:::

</div>
</section>
</div>

## 重力补偿测试

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--caution">
<span className="rebot-step-number">9</span>
<div className="rebot-step-content">
<h4>重力补偿控制 — 基础版</h4>
<p className="rebot-step-label">Demo 9 · 9_gravity_compensation.py</p>

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

:::caution 正常退出会自动安全归零
正常按 `Ctrl+C` 停止时，程序会先停止重力补偿控制，以刚性增益和重力前馈保持当前位置，然后通过最小 jerk 轨迹自动回到零位；归零完成后，程序才会断开连接并失能电机。

自动归零依赖程序、通信和供电正常。归零过程中请确保机械臂工作范围内无人或障碍物，并随时准备扶稳机械臂；若发生通信异常、意外断电或强制终止，保护流程可能无法完成，出现异常运动时请立即断电。
:::

**运行方式**：
```bash
uv run python example/9_gravity_compensation.py
```

**输出**：
- 实时显示各关节期望力矩（N·m）
- 按 `Ctrl+C` 停止并断开连接

:::tip 单独调节各关节补偿力度
如果某些关节因结构摩擦或装配差异导致补偿不足/过补偿，可以在代码中对 `tau_g` 数组的对应元素进行额外缩放：

```python
tau_g[x] *= y  # x 为关节电机 id，y 为补偿力度系数，一般从 1 开始调整
#此补偿一般只在关节2和3使用
```

例如 `tau_g[2] *= 1.2` 表示将第 2 个关节的重力补偿力矩增大 20%。建议根据实际漂浮效果逐项微调，避免一次性改动过大。
:::

</div>
</section>

<section className="rebot-step-item rebot-step-item--caution">
<span className="rebot-step-number">10</span>
<div className="rebot-step-content">
<h4>重力补偿控制 — 末端速度锁止版</h4>
<p className="rebot-step-label">Demo 10 · 10_gravity_compensation_lock.py</p>

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

:::caution 正常退出会自动安全归零
正常按 `Ctrl+C` 停止时，程序会先停止重力补偿控制，以刚性增益和重力前馈保持当前位置，然后通过最小 jerk 轨迹自动回到零位；归零完成后，程序才会断开连接并失能电机。

自动归零依赖程序、通信和供电正常。归零过程中请确保机械臂工作范围内无人或障碍物，并随时准备扶稳机械臂；若发生通信异常、意外断电或强制终止，保护流程可能无法完成，出现异常运动时请立即断电。
:::

**运行方式**：
```bash
uv run python example/10_gravity_compensation_lock.py
```

**输出**：
- 实时显示锁定状态（LOCKED / UPDATE）
- 末端线速度、角速度
- 各关节重力补偿力矩（N·m）
- 按 `Ctrl+C` 停止并断开连接

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

</div>
</section>
</div>

---

## 仿真环境

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/meshcat_RS.png" alt="reBot Arm B601-RS 的 MeshCat 仿真界面" />
</div>

:::tip MeshCat 网页地址
运行仿真后，终端会打印实际访问地址。默认地址为 `http://127.0.0.1:7000/static/`；如果端口被占用，MeshCat 会自动尝试下一个端口，请以终端打印的地址为准。
:::

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S1</span>
<div className="rebot-step-content">
<h4>正运动学仿真</h4>
<p className="rebot-step-label">仿真 Demo 1 · sim/fk_sim.py</p>

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

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S2</span>
<div className="rebot-step-content">
<h4>逆运动学仿真</h4>
<p className="rebot-step-label">仿真 Demo 2 · sim/ik_sim.py</p>

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
> 0.29545 0.0 0.28664 0 0.17453 0  # 位置+姿态
```

**功能特点**：
- 自动判断 IK 是否收敛
- 显示迭代次数和误差
- 实时更新机器人位姿

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S3</span>
<div className="rebot-step-content">
<h4>轨迹规划仿真</h4>
<p className="rebot-step-label">仿真 Demo 3 · sim/traj_sim.py</p>

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

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S4</span>
<div className="rebot-step-content">
<h4>可视化工具</h4>
<p className="rebot-step-label">仿真 Demo 4 · sim/visualizer.py</p>

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

</div>
</section>
</div>

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

- **机械臂在超过70%的臂展工作空间，长时间停出现二号关节电机进入堵转保护**  
  将机械臂重新断电上电启动，二号关节电机堵转保护错误会自动清除。

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
