---
description: 本教程介绍如何在 reBot Arm B601-DM 机械臂上使用 Pinocchio 和 MeshCat 进行运动学分析和可视化。
title: reBot Arm B601-DM 入门 Pinocchio 与 MeshCat
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

import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';

# reBot Arm B601-DM 的 Pinocchio 与 MeshCat 入门指南

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">reBot Arm × Pinocchio × MeshCat</span>
    <h2>使用运动学、轨迹规划与 3D 可视化调试 reBot Arm B601-DM</h2>
    <p>
      本教程介绍如何在 reBot Arm B601-DM 机械臂上使用 Pinocchio 和 MeshCat 进行运动学分析、
      单电机调试、正逆运动学测试、轨迹控制、重力补偿和仿真可视化。
    </p>
    <div className="hero-actions">
      <a href="#quick-path">查看学习路线</a>
      <a href="#installation">开始安装</a>
      <a href="#kinematics">进入运动学测试</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>推荐阅读方式</strong>
    <span>第一次使用 reBot Arm：请先完成 B601-DM 快速入门，确认供电、零点和基础运动正常。</span>
    <span>第一次使用 Pinocchio：建议先运行仿真示例，再连接真实机械臂。</span>
    <span>涉及 MIT 控制、IK 控制、轨迹控制或重力补偿时，请务必保持 1 米安全距离。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全警告：运行前请清空机械臂工作空间</strong>
    <p>
      在运行任何会驱动机械臂运动的程序前，请务必清空机械臂工作空间 1 米范围内
      的贵重物品、易碎物品、工具、线缆和其他无关物体。调试和运行过程中，人员禁止靠近机械臂运动范围。
    </p>
    <ul>
      <li>机械臂上电后，请勿用手触碰关节、电机、连杆、夹爪或末端工具。</li>
      <li>运行单电机控制、MIT 控制、逆运动学控制、轨迹控制、重力补偿或真实机械臂示例前，请确保机械臂已固定牢靠。</li>
      <li>请保持至少 1 米安全距离，并确保周围人员了解机械臂可能突然运动。</li>
      <li>如出现异常运动、异响、抖动、线缆松动、电源接触不良或通信中断，请立即停止程序并断电检查。</li>
      <li>插拔电机线、CAN 线、USB2CAN、XT30 或电源接口前，必须先断开电源。</li>
    </ul>
  </div>
</div>

{/* The following Markdown headings are intentionally kept outside the visual cards so Docusaurus can generate the right-side table of contents. */}

<nav className="doc-nav" aria-label="reBot Pinocchio MeshCat quick navigation">
  <a href="#quick-path">学习路线</a>
  <a href="#overview">项目介绍</a>
  <a href="#specs">规格参数</a>
  <a href="#installation">安装步骤</a>
  <a href="#debug-tools">调试工具</a>
  <a href="#kinematics">运动学</a>
  <a href="#gravity">重力补偿</a>
  <a href="#simulation">仿真环境</a>
  <a href="#faq">FAQ</a>
</nav>

## 推荐学习路线

<section id="quick-path" className="section-card">
  <div className="section-title">
    <span>Step Overview</span>
    <h2>本篇教程的推荐操作顺序</h2>
    <p>下面按照真实调试流程整理为 Step 卡片。建议先在仿真中验证，再逐步连接真实机械臂执行控制示例。</p>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>完成快速入门</strong><p>确认 reBot Arm B601-DM 已完成供电检查、零点校准、串口权限和基础运动测试。</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>安装 uv 与项目依赖</strong><p>克隆控制仓库，使用 uv sync 创建环境并安装依赖。</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>设置设备权限</strong><p>为 USB2CAN 串口桥或 CAN 接口配置权限，避免 Permission denied。</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>运行基础调试工具</strong><p>从单电机控制台、零点校准和角度监控开始，确认通信与电机状态。</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>测试 FK / IK</strong><p>先使用正运动学和逆运动学测试脚本验证模型与末端位姿计算。</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>运行轨迹与重力补偿</strong><p>在安全环境下尝试 MIT 控制、轨迹控制、重力补偿和高阻尼锁定。</p></div>
    <div className="step-card"><span className="step-mini">Step 6</span><strong>进入 MeshCat 仿真</strong><p>使用 fk_sim、ik_sim 和 traj_sim 在浏览器中可视化机械臂位姿和轨迹。</p></div>
  </div>

  <div className="notice-grid">
    <div className="notice-card">
      <strong>先仿真，再上实机</strong>
      <span>FK、IK 和轨迹规划建议先在 MeshCat 仿真中验证，确认目标位姿位于机械臂工作空间内，再连接真实机械臂。</span>
    </div>
    <div className="notice-card warning">
      <strong>MIT 控制模式风险更高</strong>
      <span>MIT 控制、IK 实机控制和轨迹控制可能让机械臂快速运动。运行前必须清空工作空间，并保持至少 1 米安全距离。</span>
    </div>
  </div>
</section>

## 项目介绍

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>Pinocchio 与 MeshCat 项目简介</h2>
    <p>本项目结合 Pinocchio 的运动学 / 动力学计算能力和 MeshCat 的 Web 3D 可视化能力，为 reBot Arm B601-DM 提供完整的调试工具链。</p>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png" alt="reBot Arm B601-DM Pinocchio MeshCat demo" />
  </div>

  <div className="image-frame">
    <a href="./LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
  </div>

  <p>
    <strong>6-DOF Robotic Arm · Multi-Motor Support · Kinematics Solver · Trajectory Planning · Fully Open Source</strong>
  </p>

  
  <div className="get-one-now-panel" style={{display: 'flex', justifyContent: 'center', margin: '1.2rem 0'}}>
    <a
      className="get-one-now-button"
      style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: '220px', minHeight: '48px', padding: '0.85rem 1.4rem', borderRadius: '999px', background: 'linear-gradient(135deg, #2563eb, #14b8a6)', color: '#ffffff', fontWeight: 900, textDecoration: 'none', lineHeight: 1.2, whiteSpace: 'nowrap', boxSizing: 'border-box'}}
      href="https://detail.tmall.com/item.htm?abbucket=16&id=1042412233386&mi_id=0000hhNAEYgKZRabreGKmpExxxW4B15HjvYNlAFLtirfARA&ns=1&priceTId=2150405117834359648414312e11d8&spm=a21n57.1.hoverItem.2&utparam=%7B%22aplus_abtest%22%3A%22ca09d8e41107a6a0c24ff70520779f5e%22%7D&xxc=taobaoSearch&skuId=6073790464610"
      target="_blank"
      rel="noopener noreferrer">
      立即购买 / Get One Now
    </a>
  </div>

  :::tip
  本案例示例代码可用于进行机械臂的电机或姿态调控，包含单个电机调控、正 / 逆运动学调控与测试、机械臂原点设置及电机角度读取、MeshCat 可视化系统等。
  :::

  <p>
    <a href="https://github.com/stack-of-tasks/pinocchio" target="_blank" rel="noopener noreferrer">Pinocchio</a>
    是一个用于机器人动力学分析和优化的开源库。它提供了高效的正向 / 逆向运动学、动力学计算和轨迹规划功能。
    <a className="path-card" href="https://github.com/rdeits/meshcat" target="_blank" rel="noopener noreferrer">MeshCat</a>
    是一个基于 Web 的 3D 可视化工具，可以实时显示机器人状态和运动轨迹。
  </p>

  <p>
    本项目结合了 Pinocchio 的强大计算能力和 MeshCat 的直观可视化，为 reBot Arm B601-DM 提供了一套完整的运动学分析和调试工具。
  </p>
</section>

## 项目特点

<section id="features" className="section-card">
  <div className="section-title">
    <span>Features</span>
    <h2>项目特点</h2>
    <p>本项目覆盖从基础电机控制到运动学、轨迹规划、重力补偿和仿真可视化的完整调试流程。</p>
  </div>

  <div className="feature-grid">
    <div><strong>完整的运动学分析</strong><span>支持正向运动学（FK）和逆向运动学（IK）计算，可实时解算机械臂末端位姿。</span></div>
    <div><strong>实时 3D 可视化</strong><span>通过 MeshCat 在浏览器中实时显示机械臂状态和运动轨迹，无需额外软件。</span></div>
    <div><strong>轨迹规划与跟踪</strong><span>实现 SE(3) 测地线轨迹规划，支持 CLIK（Closed-Loop Inverse Kinematics）跟踪控制。</span></div>
    <div><strong>重力补偿控制</strong><span>基于 Pinocchio 动力学模型计算关节重力矩，实现机械臂的“漂浮”效果。</span></div>
    <div><strong>开源与可扩展</strong><span>所有代码开源，支持用户根据需求自定义控制算法和可视化效果。</span></div>
  </div>
</section>

## 规格参数

<section id="specs" className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>规格参数</h2>
    <p>本教程硬件由 <a href="https://www.seeedstudio.com/" target="_blank" rel="noopener noreferrer">矽递科技 Seeed Studio</a> 提供。</p>
  </div>

  | 参数 | 规格 |
  |---|---|
  | 机械臂型号 | reBot Arm B601-DM |
  | 自由度 | 6-DOF + 夹爪 |
  | 电机型号 | Damiao DM4340 / DM4310 |
  | 通信方式 | CAN Bus via USB-CAN 适配器 |
  | 工作电压 | 24V DC |
  | 控制方式 | PC |
  | 推荐工作温度范围 | 0°C ～ 40°C |

  <h3>材料清单（BOM）</h3>

  | 部件 | 数量 | 是否包含 |
  |--|--|--|
  | reBot Arm B601-DM 机械臂 | 1 | ✅ |
  | USB2CAN 串口桥 | 1 | ✅ |
  | 电源适配器（24V） | 1 | ✅ |
  | USB-C 线缆 | 1 | ✅ |
  | 夹爪 | 1 | ✅ |
</section>

## 环境要求

<section id="requirements" className="section-card">
  <div className="section-title">
    <span>Environment</span>
    <h2>环境要求</h2>
    <p>建议使用 Ubuntu 物理机运行真实机械臂控制示例，避免虚拟机 USB 映射造成通信异常。</p>
  </div>

  | 项目 | 要求 |
  |------|------|
  | **Python** | 3.10+ |
  | **操作系统** | Ubuntu 22.04+ |
  | **通信接口** | USB2CAN 串口桥 或 CAN 接口 |
</section>

## 安装步骤

<section id="installation" className="section-card">
  <div className="section-title">
    <span>Step 1</span>
    <h2>安装步骤</h2>
    <p>使用 uv 管理 Python 环境和依赖。`uv sync` 会自动创建虚拟环境并根据项目文件安装依赖。</p>
  </div>

  <h3>步骤 1. 安装 uv（如未安装）</h3>

<CodeBlock language="bash">
{`curl -LsSf https://astral.sh/uv/install.sh | sh`}
</CodeBlock>

  <h3>步骤 2. 同步环境（安装所有依赖）</h3>

<CodeBlock language="bash">
{`git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync`}
</CodeBlock>

  :::tip
  `uv sync` 会自动创建虚拟环境（如不存在）并根据 `pyproject.toml` 和 `uv.lock` 安装所有依赖。
  :::
</section>

## 调试工具介绍

<section id="debug-tools" className="section-card">
  <div className="section-title">
    <span>Step 2</span>
    <h2>调试工具介绍</h2>
    <p>本节包含单电机控制台、零点校准与角度监控、MIT 控制模式以及位置 - 速度控制模式。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>运行前安全确认</strong>
      <p>
        请清空机械臂工作空间 1 米范围内的贵重物品和无关人员。
        确认机械臂固定牢靠、电源和线缆连接正常后，再运行本节程序。
      </p>
    </div>
  </div>

  :::tip 权限设置
  运行实机控制示例前，需要设置设备权限。
  :::

<CodeBlock language="bash">
{`# 设置串口设备权限（达妙 USB2CAN）
sudo chmod 666 /dev/ttyACM0

# 或设置 CAN 设备权限（如 can0）
sudo chmod 666 /dev/can0`}
</CodeBlock>

  <details className="content-details">
    <summary>单电机控制台（0x01damiao_test.py）</summary>

    直接使用 motorbridge SDK 进行单电机测试。

    **运行方式：**

<CodeBlock language="bash">
{`uv run python example/0x01damiao_test.py`}
</CodeBlock>

    **交互命令：**

    | 命令 | 说明 |
    |------|------|
    | `enable` / `disable` | 使能 / 失能 |
    | `set_zero` | 设置零位 |
    | `state` | 查看状态 |
    | `mode mit` | MIT 模式 |
    | `mode posvel` | 位置速度模式，并可追加 PID 参数 |
    | `mode vel` | 纯速度模式 |
  </details>

  <details className="content-details">
    <summary>零点校准与角度监控（2_zero_and_read.py）</summary>

    自动设置所有关节零点，实时显示关节角度。

    **运行方式：**

<CodeBlock language="bash">
{`uv run python example/2_zero_and_read.py

# 输出实例
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01`}
</CodeBlock>
  </details>

  <details className="content-details">
    <summary>MIT 控制模式（3_mit_control.py）</summary>

    输入所有关节的目标角度，将 MIT 控制模式下完成各电机的控制，通常用于力控、阻抗控制或需要高动态响应的场景。

    **运行方式：**

<CodeBlock language="bash">
{`uv run python example/3_mit_control.py
> 30 0 0 0 0 0 # 控制1号电机正转30度
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # 退出系统`}
</CodeBlock>

    :::danger
    注意，在 MIT 控制模式下，机械臂的速度会很快，需要保证人或其他设备远离机械臂的工作半径。
    :::
  </details>

  <details className="content-details">
    <summary>位置 - 速度控制模式（4_pos_vel_control.py）</summary>

    输入所有关节的目标角度，将在 POS_VEL（位置 - 速度）混合控制模式下完成各电机的控制，在到达指定角度时运动得更加平稳、可控，减少震动。

    **运行方式：**

<CodeBlock language="bash">
{`uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 # 控制1号电机正转30度
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # 退出系统`}
</CodeBlock>
  </details>
</section>

## 运动学测试

<section id="kinematics" className="section-card">
  <div className="section-title">
    <span>Step 3</span>
    <h2>运动学测试</h2>
    <p>本节用于验证正运动学、逆运动学，以及基于 IK 的实机控制与平滑轨迹控制。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>运行前安全确认</strong>
      <p>
        请清空机械臂工作空间 1 米范围内的贵重物品和无关人员。
        确认机械臂固定牢靠、电源和线缆连接正常后，再运行本节程序。
      </p>
    </div>
  </div>

  <details className="content-details">
    <summary>正运动学测试（5_fk_test.py）</summary>

    根据关节角度计算末端位姿。

    **输入**：6 个关节角度（度）

    **输出**：

    - 末端位置 (X, Y, Z) — 单位：米
    - 旋转矩阵 (3×3)
    - 欧拉角（横滚 / 俯仰 / 偏航）— 单位：度

    **示例：**

<CodeBlock language="bash">
{`uv run python example/5_fk_test.py
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
    偏航/yaw   = +0.0000`}
</CodeBlock>
  </details>

  <details className="content-details">
    <summary>逆运动学测试（6_ik_test.py）</summary>

    根据期望末端位姿求解关节角度。

    **输入格式**：

    - 仅位置：`<x> <y> <z>`（米）
    - 位置 + 姿态：`<x> <y> <z> <roll> <pitch> <yaw>`（度）

    **示例：**

<CodeBlock language="bash">
{`uv run python example/6_ik_test.py

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
    joint6     =  +0.0057 deg  (+0.0001 rad)`}
</CodeBlock>
  </details>

  <details className="content-details">
    <summary>MIT 模式下的逆运动学控制（7_arm_ik_control.py）</summary>

    在 MIT 模式下使用逆运动学（IK）指定机械臂末端想去的三维坐标（X, Y, Z）和姿态（欧拉角）。

    **输入格式**：

    - 仅位置：`<x> <y> <z>`（米）
    - 位置 + 姿态：`<x> <y> <z> <roll> <pitch> <yaw>`（度）
    - 输入 `state`：查看当前各个关节的实际弧度值。
    - 输入 `end_state`：查看当前末端在空间中的实际坐标 (m) 和欧拉角 (rad)。

    **运行方式：**

<CodeBlock language="bash">
{`uv run python example/7_arm_ik_control.py

# 用法A
> 0.3 0.0 0.4 # 仅控制位置（姿态默认为0），让机械臂末端走到前方 0.3 米，上方 0.4 米的位置。

# 用法B
> 0.3 0.0 0.4 0.0 0.0 0.5 # 同时控制位置和姿态：走到指定位置，同时手腕偏航角旋转 0.5 弧度。

> ctrl + c # 退出系统`}
</CodeBlock>

    :::danger
    注意，在该实例代码下机械臂的速度会很快，需要保证人或其他设备远离机械臂的工作半径。
    :::
  </details>

  <details className="content-details">
    <summary>平滑轨迹的逆运动学控制（8_arm_traj_control.py）</summary>

    在 MIT 模式下使用逆运动学（IK），在目标时间内自动规划出一条匀速或带平滑加减速的运动轨迹，避免了关节剧烈抖动。

    **输入格式**：

    - 仅位置：`<x> <y> <z>`（米）
    - 位置 + 姿态：`<x> <y> <z> <roll> <pitch> <yaw>`（度）
    - 位置 + 姿态 + 时间（默认为 2.0）：`<x> <y> <z> <roll> <pitch> <yaw> <time>`（度）
    - 输入 `state`：查看当前各个关节的实际弧度值。
    - 输入 `end_state`：查看当前末端在空间中的实际坐标 (m) 和欧拉角 (rad)。

    **运行方式：**

<CodeBlock language="bash">
{`uv run python example/8_arm_traj_control.py

# 用法A
> 0.3 0.0 0.4 # 仅指定位置，姿态默认为 0，移动时间默认为 2.0 秒

# 用法B
> 0.3 0.0 0.4 0.0 0.0 0.5 # 同时控制位置和姿态：走到指定位置，同时手腕偏航角旋转 0.5 弧度，移动时间默认为 2.0 秒

# 用法C
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 # 让机械臂走到特定位置，并指定用 5.0 秒 的时间慢慢挪过去。(注意：如果要输时间，前方的姿态参数 0 0 0 不能省略)

> ctrl + c # 退出系统`}
</CodeBlock>
  </details>
</section>

## 重力补偿测试

<section id="gravity" className="section-card">
  <div className="section-title">
    <span>Step 4</span>
    <h2>重力补偿测试</h2>
    <p>重力补偿依赖 URDF 与 Pinocchio 动力学模型，可以让机械臂在一定程度上抵消自重影响。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>运行前安全确认</strong>
      <p>
        请清空机械臂工作空间 1 米范围内的贵重物品和无关人员。
        确认机械臂固定牢靠、电源和线缆连接正常后，再运行本节程序。
      </p>
    </div>
  </div>

  <details className="content-details">
    <summary>重力补偿控制（9_gravity_compensation.py）</summary>

    使用 Pinocchio 动力学模型补偿关节重力。

    **控制律：**

<CodeBlock language="text">
{`tau = g(q)          — 重力前馈
pos = 当前电机位置   — 关节位置跟随当前位置
kp = 2, kd = 1     — 所有关节统一刚度/阻尼`}
</CodeBlock>

    **预期行为：**

    - 机械臂可以在任意姿态下“漂浮”
    - 松开后不会因自重坠落
    - 可以手动掰动到任意位置

    **运行方式：**

<CodeBlock language="bash">
{`uv run python example/9_gravity_compensation.py`}
</CodeBlock>

    **输出：**

    - 实时显示各关节期望力矩（N·m）
    - 按 `Ctrl+C` 停止并断开连接
  </details>

  <details className="content-details">
    <summary>高阻尼重力补偿控制（10_gravity_compensation_lock.py）</summary>

    抵抗轻微外力的重力补偿控制。

    **控制律：**

    注：当人用力推机械臂，末端线速度 &gt; 0.04 m/s 或角速度 &gt; 0.08 rad/s 时，解锁并实时更新目标角度。

<CodeBlock language="text">
{`tau = g(q) + 积分项  — 重力前馈，并引入积分累计消除静摩擦力和残余重力死区
pos = 目标锁定角度   — 当末端移动速度低于阈值时，目标角度锁死在当前点
kp = 8.0, kd = 1.0  — 锁定状态下刚度提升至 8.0，提供更坚固的抗干扰和定位约束`}
</CodeBlock>

    **预期行为：**

    - 松手即锁死：将机械臂用手掰到某个位置一旦松手，会立刻在原地死死锁住，能完美解决缓缓下坠和微小漂移的问题。
    - 轻推不发生位移：轻微的晃动、风吹或外力触碰无法让机械臂移位。
    - 用力即可拖动：只有用一定的力气推它、打破速度阈值后，才会解锁并顺从地滑动。

    **运行方式：**

<CodeBlock language="bash">
{`uv run python example/10_gravity_compensation_lock.py`}
</CodeBlock>

    **输出：**

    - 实时显示当前的状态（锁定状态显示 `LOCKED`，解锁拖动状态显示 `UPDATE`）。
    - 同步打印末端实时的线速度（m/s）、角速度（rad/s）以及各关节的重力矩（N·m）。
    - 按 `Ctrl+C` 停止并断开连接
  </details>
</section>

## 仿真环境

<section id="simulation" className="section-card">
  <div className="section-title">
    <span>Step 5</span>
    <h2>仿真环境</h2>
    <p>MeshCat 仿真环境可在浏览器中展示机械臂位姿、轨迹、IK 目标和路径信息，适合在实机运行前进行验证。</p>
  </div>

  <div className="image-frame">
    <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" alt="reBot Arm trajectory simulation in MeshCat" />
  </div>

  <details className="content-details">
    <summary>正运动学仿真（sim/fk_sim.py）</summary>

    交互式正运动学仿真，通过输入关节角度在 MeshCat 中可视化机械臂位姿。

    **运行方式：**

<CodeBlock language="bash">
{`uv run python example/sim/fk_sim.py`}
</CodeBlock>

    **交互命令：**

    - 输入 6 个关节角度（度），空格分隔
    - 示例：`0 0 0 0 0 0`
    - 示例：`45 -30 15 -60 90 -180`
    - `q` / `quit` / `exit`：退出

    **功能特点：**

    - 实时显示末端位置和姿态
    - 支持连续输入测试不同位姿
    - 输出格式化的位姿信息
  </details>

  <details className="content-details">
    <summary>逆运动学仿真（sim/ik_sim.py）</summary>

    交互式逆运动学仿真，输入目标位姿自动求解关节角度并可视化。

    **运行方式：**

<CodeBlock language="bash">
{`uv run python example/sim/ik_sim.py`}
</CodeBlock>

    **输入格式：**

    - 仅位置：`x y z`（米）
    - 位置 + 姿态：`x y z roll pitch yaw`（弧度）

    **示例：**

<CodeBlock language="bash">
{`> 0.25 0.0 0.25              # 仅位置
> 0.25 0.0 0.25 0 0 0        # 位置+姿态`}
</CodeBlock>

    **功能特点：**

    - 自动判断 IK 是否收敛
    - 显示迭代次数和误差
    - 实时更新机器人位姿
  </details>

  <details className="content-details">
    <summary>轨迹规划仿真（sim/traj_sim.py）</summary>

    基于 SE(3) 测地线的轨迹规划仿真，包含 CLIK 跟踪和 MeshCat 动画回放。

    **运行方式：**

<CodeBlock language="bash">
{`uv run python example/sim/traj_sim.py`}
</CodeBlock>

    **交互命令：**

    - 输入：`x y z [roll pitch yaw]`（米 / 弧度）
    - 直接回车使用默认配置
    - `q`：退出

    **功能特点：**

    - 从当前位置规划到目标位姿
    - 使用最小加加速度轨迹 profile
    - 实时显示轨迹统计信息
    - MeshCat 中回放完整轨迹动画
    - 显示参考路径（灰色）和实际路径（绿色）
  </details>

  <details className="content-details">
    <summary>可视化工具（sim/visualizer.py）</summary>

    MeshCat 可视化器封装，提供统一的机器人显示接口。

    **主要功能：**

    - 加载 URDF 模型并显示机器人
    - 绘制 3D 折线路径（参考 / 实际）
    - 显示 IK 目标位姿（三色轴 + 球体）
    - 支持关节轨迹动画播放

    **使用示例：**

<CodeBlock language="python">
{`from example.sim.visualizer import Visualizer

viz = Visualizer()
viz.update(q)  # 更新机器人位姿
viz.draw_path(points, "path_name", color)  # 绘制路径`}
</CodeBlock>
  </details>
</section>

## FAQ

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>常见问题</h2>
    <p>本节保留原教程中的故障处理内容，并按问题卡片整理，便于快速定位。</p>
  </div>

  <details className="content-details">
    <summary>遇到 Permission denied 错误</summary>
    <p>确保已执行下面的设备权限设置命令。</p>

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/can0`}
</CodeBlock>
  </details>

  <details className="content-details">
    <summary>IK 解算失败或结果异常</summary>
    <p>检查目标位姿是否在机械臂工作空间内，确保关节限位配置正确。</p>
  </details>

  <details className="content-details">
    <summary>重力补偿效果不佳</summary>
    <p>
      这可能是结构件误差和加工精度引起的。本项目的重力补偿依赖 URDF 和 Pinocchio，
      您可以先尝试修正 URDF，改为您实测下来的参数（这一步可以询问 AI）。
    </p>
  </details>
</section>

## 联系方式

<section id="contact" className="section-card">
  <div className="section-title">
    <span>Contact</span>
    <h2>联系方式</h2>
    <p>如果你在项目使用过程中遇到问题，可以通过 Issue、项目仓库或 Seeed Studio Forum 获取支持。</p>
  </div>

  <div className="path-grid">
    <a className="path-card" href="https://github.com/vectorBH6/reBotArm_control_py/issues" target="_blank" rel="noopener noreferrer">技术支持：提交 Issue</a>
    <a className="path-card" href="https://github.com/vectorBH6/reBotArm_control_py" target="_blank" rel="noopener noreferrer">项目仓库：GitHub</a>
    <a className="path-card" href="https://forum.seeedstudio.com/" target="_blank" rel="noopener noreferrer">论坛：Seeed Studio Forum</a>
  </div>
</section>

## 参考文档

<section id="references" className="section-card">
  <div className="section-title">
    <span>References</span>
    <h2>参考文档</h2>
  </div>

  <div className="path-grid">
    <a className="path-card" href="https://stack-of-tasks.github.io/pinocchio/" target="_blank" rel="noopener noreferrer">Pinocchio 官方文档</a>
    <a className="path-card" href="https://github.com/rdeits/meshcat" target="_blank" rel="noopener noreferrer">MeshCat 官方文档</a>
    <a className="path-card" href="https://github.com/motorbridge/motorbridge" target="_blank" rel="noopener noreferrer">motorbridge SDK</a>
  </div>
</section>

## 后续学习路径

<section id="learning-path" className="section-card course-path-section">
  <div className="section-title">
    <span>Continue Learning</span>
    <h2>reBot Arm B601-DM 学习路径</h2>
    <p>完成 Pinocchio 与 MeshCat 入门后，可以继续学习 LeRobot、视觉夹取和 ROS2 集成。</p>
  </div>

  <div className="course-path-grid">
    <a className="course-path-item" href="/cn/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>B601-DM 快速入门</strong><span>购买选项、组装、电机 ID、零点校准和 MotorBridge 初体验。</span></span>
      <span className="course-tag">Start</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>B601-DM 入门 LeRobot</strong><span>遥操作、相机接入、数据采集、训练和评估。</span></span>
      <span className="course-tag">LeRobot</span>
    </a>
    <a className="course-path-item active" href="/cn/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio 与 MeshCat</strong><span>运动学、轨迹规划、重力补偿和可视化调试。</span></span>
      <span className="course-tag">Current article</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>视觉夹取 Demo</strong><span>RGB-D、YOLO、GraspNet、手眼标定与真实抓取。</span></span>
      <span className="course-tag">Grasping</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 集成</strong><span>ROS2、RViz、MoveIt 2 和真实硬件执行。</span></span>
      <span className="course-tag">ROS2</span>
    </a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Star</span>
    <h2>如果本项目对你有帮助，请给个 Star 支持一下！</h2>
  </div>
</section>

</div>
