---
description: 本教程介绍如何在 reBot Arm B601-DM 机械臂上使用 Pinocchio 和 MeshCat 进行运动学分析、轨迹规划、重力补偿与可视化调试。
title: reBot Arm B601-DM 入门 Pinocchio 与 MeshCat
keywords:
  - Pinocchio
  - MeshCat
  - reBot Arm
  - B601-DM
  - 运动学
  - 轨迹规划
  - 重力补偿
  - 机器人
slug: /rebot_arm_b601_dm_pinocchio_meshcat
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-05
  author: LiuJunjie
translation:
  skip:
    - zh-CN
createdAt: '2026-03-24'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_pinocchio_meshcat/
---

# reBot Arm B601-DM 入门 Pinocchio 与 MeshCat

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>用 Pinocchio 和 MeshCat 完成 reBot Arm B601-DM 的运动学分析与可视化调试</h2>
    <p>本教程面向已经完成 B601-DM 基础上电和通信检查的用户，带你从环境安装开始，逐步完成单电机测试、零点读取、FK / IK 测试、轨迹控制、重力补偿和 MeshCat 仿真可视化。</p>
    <div className="hero-actions">
      <a href="#quick-path">查看学习路线</a>
      <a href="#debug-tools">进入调试工具</a>
      <a href="#simulation">查看仿真</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>推荐使用顺序</strong>
    <span>先只跑仿真，再运行 FK / IK 测试，最后再连接真实机械臂。</span>
    <span>B601-DM 使用 24V 电源和 Damiao DM 电机，实机调试前必须确认 USB2CAN 与电源接线。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全警告：运行前请清空机械臂工作空间</strong>
    <p>
      在运行任何会驱动机械臂运动的程序前，请务必清空机械臂工作空间
      <strong> 1 米范围内 </strong>
      的贵重物品、易碎物品、工具、线缆和其他无关物体。
      调试和运行过程中，人员禁止靠近机械臂运动范围。
    </p>
    <ul>
      <li>机械臂上电后，请勿用手触碰关节、电机、连杆、夹爪或末端工具。</li>
      <li>运行校准、遥操作、IK 控制、轨迹控制、重力补偿、MoveIt、LeRobot 数据采集或视觉抓取 Demo 前，请确保机械臂已固定牢靠。</li>
      <li>请保持至少 <strong>1 米安全距离</strong>，并确保周围人员了解机械臂可能突然运动。</li>
      <li>如出现异常运动、异响、抖动、线缆松动、电源接触不良或通信中断，请立即停止程序并断电检查。</li>
      <li>插拔电机线、CAN 线、USB2CAN / PCAN-USB、XT30 或电源接口前，必须先断开电源。</li>
    </ul>
  </div>
</div>


<div className="quick-note">
  <strong>安全提醒：</strong>MIT 控制和 IK 实机控制响应很快。第一次运行时请夹紧底座、保持至少 1 米安全距离，并先使用小角度、小速度、短距离目标测试。
</div>

<nav className="doc-nav" aria-label="Pinocchio MeshCat quick navigation">
  <a href="#quick-path">学习路线</a>
  <a href="#overview">项目概览</a>
  <a href="#install">环境安装</a>
  <a href="#debug-tools">电机调试</a>
  <a href="#kinematics">运动学</a>
  <a href="#gravity">重力补偿</a>
  <a href="#simulation">仿真</a>
</nav>



<section id="course-steps" className="section-card">
  <div className="section-title">
    <span>Step Overview</span>
    <h2>本篇教程的推荐操作顺序</h2>
    <p>下面按照实际调试顺序整理为 Step 卡片。建议从前往后完成，尤其是涉及真实机械臂运动的步骤。</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>完成基础上电与通信检查</strong><p>确认机械臂零点、电源、USB2CAN 和权限配置正常。</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>安装并同步环境</strong><p>使用 uv 安装 reBotArm_control_py、Pinocchio、MeshCat 和 MotorBridge。</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>验证单电机与零点</strong><p>先测试单电机、读取角度和方向，确认反馈正常。</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>验证 FK / IK</strong><p>用软件脚本检查坐标系、目标点、关节限位和可达性。</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>运行 MeshCat 仿真</strong><p>在浏览器中查看机械臂姿态、轨迹和目标坐标系。</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>谨慎运行实机控制</strong><p>从小目标、慢速度、短距离开始，再尝试轨迹和重力补偿。</p></div>
  </div>
</section>
<section id="quick-path" className="section-card">
  <div className="section-title">
    <span>Start Here</span>
    <h2>推荐学习路线</h2>
    <p>Pinocchio / MeshCat 更偏底层运动学与动力学调试。建议先从不连接机械臂的仿真与计算脚本开始，再进入实机控制。</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#install"><b>1. 安装环境</b><span>使用 uv 同步 reBotArm_control_py 依赖，确认 Python、Pinocchio、MeshCat 和 MotorBridge 可用。</span><em>先做这一步</em></a>
    <a className="path-card" href="#debug-tools"><b>2. 单电机与零点测试</b><span>先用单电机控制台和角度读取脚本确认 USB2CAN、ID、零点和方向正确。</span><em>实机前检查</em></a>
    <a className="path-card" href="#kinematics"><b>3. FK / IK 验证</b><span>用正运动学和逆运动学脚本验证 URDF、关节限位、末端坐标和目标点是否合理。</span><em>核心步骤</em></a>
    <a className="path-card" href="#simulation"><b>4. MeshCat 仿真</b><span>在浏览器中查看机械臂姿态、目标坐标系、参考轨迹和实际轨迹。</span><em>推荐常用</em></a>
    <a className="path-card" href="#gravity"><b>5. 重力补偿</b><span>在确认 URDF 和电机方向后，再尝试重力补偿和高阻尼锁定模式。</span><em>进阶调试</em></a>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>项目概览</h2>
    <p>Pinocchio 提供高效的刚体运动学、动力学、雅可比和轨迹计算能力；MeshCat 负责在浏览器中实时显示机械臂模型、目标位姿和轨迹。二者结合后，非常适合做机械臂控制算法调试。</p>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png" alt="reBot Arm B601-DM Pinocchio MeshCat" />
  </div>

  <div className="badge-row">
    <span>Pinocchio</span>
    <span>MeshCat</span>
    <span>Forward / Inverse Kinematics</span>
    <span>SE(3) Trajectory</span>
    <span>Gravity Compensation</span>
  </div>

  <div className="feature-grid">
    <div><strong>正 / 逆运动学</strong><span>通过关节角计算末端位姿，或从目标位姿反求关节角，用于验证工作空间和关节限位。</span></div>
    <div><strong>MeshCat 可视化</strong><span>在浏览器中显示 URDF 模型、末端坐标系、目标点和轨迹，适合定位 IK 不收敛问题。</span></div>
    <div><strong>轨迹规划</strong><span>支持 SE(3) 测地线轨迹、最小 jerk 曲线和 CLIK 跟踪，降低直接跳变带来的关节抖动。</span></div>
    <div><strong>重力补偿</strong><span>基于动力学模型计算关节重力矩。实际效果依赖 URDF、质心、减速比、摩擦和电机方向准确性。</span></div>
  </div>

  <div className="buy-box">
    <a href="https://detail.tmall.com/item.htm?abbucket=16&id=1042412233386&mi_id=0000hhNAEYgKZRabreGKmpExx8eS7wS_DqxaG6ePdGjrn4Q&ns=1&skuId=6073790464610&spm=a21n57.1.hoverItem.1&utparam=%7B%22aplus_abtest%22%3A%22ef0f0c248fcf6a14c9bd99035ac573f9%22%7D&xxc=taobaoSearch" target="_blank">购买 reBot Arm B601-DM</a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>硬件与环境要求</h2>
    <p>B601-DM 版本使用 Damiao 电机和 USB2CAN 通信，默认工作电压为 24V DC。</p>
  </div>

  | 项目 | 要求 |
  |------|------|
  | 机械臂 | reBot Arm B601-DM |
  | 电机 | Damiao DM4340 / DM4310 |
  | 通信 | USB2CAN 串口桥或 CAN 接口 |
  | 电源 | 24V DC |
  | 系统 | Ubuntu 22.04+ |
  | Python | 3.10+ |

  <div className="callout warning">
    <strong>实机控制前检查：</strong>确认机械臂已经完成基础快速入门中的上电、接线、零点和电机 ID 检查。若只是学习 FK / IK 和 MeshCat，可先不连接机械臂，只运行仿真脚本。
  </div>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>安装环境</h2>
      <p>本项目使用 uv 管理依赖。uv 会根据 pyproject.toml 和 uv.lock 创建虚拟环境并安装依赖。</p>
    </div>
  </div>

  <div className="command-card">
    <h3>1. 安装 uv</h3>
    <pre><code>{`curl -LsSf https://astral.sh/uv/install.sh | sh`}</code></pre>
  </div>

  <div className="command-card">
    <h3>2. 克隆仓库并同步环境</h3>
    <pre><code>{`git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync`}</code></pre>
  </div>

  <details className="content-details" open>
    <summary>运行前权限配置</summary>

    Damiao USB2CAN 常见映射为 <code>/dev/ttyACM0</code>。如果你的设备名不同，请通过 <code>dmesg</code> 或 <code>ls /dev/ttyACM*</code> 确认。

    <pre><code>{`sudo chmod 666 /dev/ttyACM0

# 如果使用 SocketCAN 接口，也可以检查 can0：
ip -br link
sudo chmod 666 /dev/can0 2>/dev/null || true`}</code></pre>
  </details>
</section>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>运行前安全确认</strong>
    <p>
      请清空机械臂工作空间 <strong>1 米范围内</strong> 的贵重物品和无关人员。
      确认机械臂固定牢靠、电源和线缆连接正常后，再运行本节程序。
    </p>
  </div>
</div>

<section id="debug-tools" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>电机调试工具</h2>
      <p>先确认单个电机、零点和各关节角度正常，再进入 IK 或轨迹控制。</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>单电机控制台：0x01damiao_test.py</summary>
    <p>用于直接测试 MotorBridge SDK 与单个 Damiao 电机的通信、使能、模式切换和零点设置。</p>
    <pre><code>{`uv run python example/0x01damiao_test.py`}</code></pre>

    | 命令 | 说明 |
    |------|------|
    | `enable` / `disable` | 使能 / 失能电机 |
    | `set_zero` | 设置当前电机零位 |
    | `state` | 查看电机状态 |
    | `mode mit` | MIT 模式 |
    | `mode posvel` | 位置速度模式，可追加 PID 参数 |
    | `mode vel` | 速度模式 |
  </details>

  <details className="content-details">
    <summary>零点校准与角度监控：2_zero_and_read.py</summary>
    <p>用于设置所有关节零点并实时显示关节角度。建议在后续 FK / IK 测试前先确认零点和方向。</p>
    <pre><code>{`uv run python example/2_zero_and_read.py

# Example output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01`}</code></pre>
  </details>

  <details className="content-details">
    <summary>MIT 控制模式：3_mit_control.py</summary>
    <div className="callout danger"><strong>注意：</strong>MIT 模式响应快、力矩大。首次测试请只输入很小角度，并确保人和设备远离机械臂工作范围。</div>
    <pre><code>{`uv run python example/3_mit_control.py
> 30 0 0 0 0 0
> state
> q`}</code></pre>
  </details>

  <details className="content-details">
    <summary>位置-速度控制模式：4_pos_vel_control.py</summary>
    <p>POS_VEL 模式通常比直接 MIT 目标角输入更平稳，适合做基础关节动作测试。</p>
    <pre><code>{`uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0
> state
> q`}</code></pre>
  </details>
</section>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>运行前安全确认</strong>
    <p>
      请清空机械臂工作空间 <strong>1 米范围内</strong> 的贵重物品和无关人员。
      确认机械臂固定牢靠、电源和线缆连接正常后，再运行本节程序。
    </p>
  </div>
</div>

<section id="kinematics" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>运动学测试</h2>
      <p>FK 用于从关节角得到末端位姿；IK 用于从末端目标反求关节角。建议先在不连接实机的情况下验证目标是否在工作空间内。</p>
    </div>
  </div>

  <div className="callout">
    <strong>补充说明：</strong>FK/IK 的结果依赖 URDF、关节限位、坐标系定义和单位。本文中的位置单位为米，示例中的欧拉角脚本有的使用度、有的使用弧度，请按每个脚本说明输入。
  </div>

  <details className="content-details" open>
    <summary>正运动学测试：5_fk_test.py</summary>
    <p>输入 6 个关节角度，输出末端位置、旋转矩阵和 XYZ 欧拉角。</p>
    <pre><code>{`uv run python example/5_fk_test.py
> 0 0 0 0 0 0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>逆运动学测试：6_ik_test.py</summary>
    <p>输入目标位置，或输入目标位置 + 姿态，脚本会尝试求解关节角。</p>
    <pre><code>{`uv run python example/6_ik_test.py

# 仅位置，单位 m
> 0.28 0 0.3

# 位置 + 姿态，位置 m，姿态 deg
> 0.28 0 0.3 0 1 0`}</code></pre>
  </details>

  <details className="content-details">
    <summary>MIT 模式下 IK 实机控制：7_arm_ik_control.py</summary>
    <div className="callout danger"><strong>实机风险：</strong>该脚本会真实驱动机械臂运动。第一次请先使用靠近当前位置的小目标，不要直接输入远距离目标。</div>
    <pre><code>{`uv run python example/7_arm_ik_control.py

# 仅位置
> 0.3 0.0 0.4

# 位置 + 姿态
> 0.3 0.0 0.4 0.0 0.0 0.5

# 查看当前关节状态
> state

# 查看当前末端状态
> end_state`}</code></pre>
  </details>

  <details className="content-details">
    <summary>平滑轨迹 IK 控制：8_arm_traj_control.py</summary>
    <p>该脚本会在目标时间内插值生成平滑轨迹，通常比直接跳到目标位姿更适合实机测试。</p>
    <pre><code>{`uv run python example/8_arm_traj_control.py

# 仅位置，默认 2 秒
> 0.3 0.0 0.4

# 位置 + 姿态 + 时间
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0`}</code></pre>
  </details>
</section>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>运行前安全确认</strong>
    <p>
      请清空机械臂工作空间 <strong>1 米范围内</strong> 的贵重物品和无关人员。
      确认机械臂固定牢靠、电源和线缆连接正常后，再运行本节程序。
    </p>
  </div>
</div>

<section id="gravity" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>重力补偿测试</h2>
      <p>重力补偿依赖动力学模型和实际机械结构的一致性。若 URDF 中质量、质心或关节方向与实物存在偏差，补偿效果会下降。</p>
    </div>
  </div>

  <div className="feature-grid">
    <div><strong>普通重力补偿</strong><span>通过 <code>tau = g(q)</code> 抵消关节重力，让机械臂呈现可被手动推动的漂浮效果。</span></div>
    <div><strong>高阻尼锁定</strong><span>在低速时锁住当前角度，用更高刚度抵抗轻微外力；用力推动超过阈值后再更新目标角。</span></div>
  </div>

  <details className="content-details" open>
    <summary>9_gravity_compensation.py</summary>
    <pre><code>{`uv run python example/9_gravity_compensation.py`}</code></pre>
    <p>输出各关节期望重力矩，按 <code>Ctrl+C</code> 停止。</p>
  </details>

  <details className="content-details">
    <summary>10_gravity_compensation_lock.py</summary>
    <pre><code>{`uv run python example/10_gravity_compensation_lock.py`}</code></pre>
    <p>终端会显示 <code>LOCKED</code> 或 <code>UPDATE</code> 状态，并打印末端线速度、角速度和各关节重力矩。</p>
  </details>

  <div className="callout warning">
    <strong>调试建议：</strong>如果机械臂缓慢下坠、抖动或补偿方向相反，请优先检查 URDF 质量 / 质心、关节正方向、零点偏移、电机力矩常数和摩擦死区，而不是直接增大增益。
  </div>
</section>

<section id="simulation" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>MeshCat 仿真与可视化</h2>
      <p>MeshCat 会在本机启动 Web 可视化界面。运行脚本后，按照终端提示打开浏览器链接即可查看机械臂模型。</p>
    </div>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" alt="MeshCat trajectory simulation" />
  </div>

  <details className="content-details" open>
    <summary>正运动学仿真：sim/fk_sim.py</summary>
    <pre><code>{`uv run python example/sim/fk_sim.py

# 输入 6 个关节角，单位 deg
> 0 0 0 0 0 0
> 45 -30 15 -60 90 -180`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>逆运动学仿真：sim/ik_sim.py</summary>
    <pre><code>{`uv run python example/sim/ik_sim.py

# 仅位置，单位 m
> 0.25 0.0 0.25

# 位置 + 姿态，姿态单位 rad
> 0.25 0.0 0.25 0 0 0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>轨迹规划仿真：sim/traj_sim.py</summary>
    <pre><code>{`uv run python example/sim/traj_sim.py

# 输入 x y z [roll pitch yaw]，位置 m，姿态 rad
> 0.25 0.0 0.25 0 0 0`}</code></pre>
    <p>该脚本会显示参考路径与实际路径，并通过 MeshCat 回放完整轨迹动画。</p>
  </details>

  <details className="content-details">
    <summary>可视化工具：sim/visualizer.py</summary>
    <pre><code>{`from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)
viz.draw_path(points, "path_name", color)`}</code></pre>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>常见问题</h2>
  </div>

  <details className="content-details" open>
    <summary>Permission denied</summary>
    <p>请确认已经给串口或 CAN 设备授权：</p>
    <pre><code>{`sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/can0 2>/dev/null || true`}</code></pre>
  </details>

  <details className="content-details">
    <summary>IK 解算失败或结果异常</summary>
    <p>优先检查目标点是否超出工作空间、姿态约束是否过强、初始关节角是否离目标太远、关节限位是否正确。调试时可以先只输入位置，不输入姿态。</p>
  </details>

  <details className="content-details">
    <summary>MeshCat 页面打不开</summary>
    <p>确认终端输出的 MeshCat URL 是否正确。如果在远程机器上运行，需要确认端口转发或浏览器能访问该主机。</p>
  </details>

  <details className="content-details">
    <summary>重力补偿效果不佳</summary>
    <p>重力补偿对 URDF 中 link 质量、质心和惯量非常敏感。若实物结构或 3D 打印件与 URDF 不一致，建议测量实际参数后修正 URDF，再重新测试。</p>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>References</span>
    <h2>参考文档</h2>
  </div>
  <div className="reference-grid">
    <a href="https://stack-of-tasks.github.io/pinocchio/">Pinocchio 官方文档</a>
    <a href="https://github.com/rdeits/meshcat">MeshCat GitHub</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py">reBotArm_control_py</a>
    <a href="https://github.com/motorbridge/motorbridge">MotorBridge SDK</a>
    <a href="https://forum.seeedstudio.com/">Seeed Studio Forum</a>
  </div>
</section>



<section className="section-card course-path-section">
  <div className="section-title">
    <span>课程导链</span>
    <h2>reBot B601-DM 系列课程跳转</h2>
    <p>建议按照 Robotics Page 的学习顺序阅读：快速入门 → LeRobot → Pinocchio → 视觉夹取 → ROS2。也可以通过下面的卡片直接跳转到任意课程。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/cn/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>快速入门</strong><span>完成开箱、供电检查、组装、电机 ID、零点校准和基础运动测试。</span></span>
      <span className="course-tag">Start</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot 遥操作与数据采集</strong><span>完成主从遥操作、相机接入、数据集采集、训练和策略评估。</span></span>
      <span className="course-tag">Data</span>
    </a>
    <a className="course-path-item active" href="/cn/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio 运动学可视化</strong><span>理解模型、坐标系、FK / IK、轨迹规划、MeshCat 仿真和重力补偿。</span></span>
      <span className="course-tag">当前文章</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>视觉夹取 Demo</strong><span>结合 RGB-D 感知、YOLO / GraspNet、手眼标定和真实机械臂抓取。</span></span>
      <span className="course-tag">Application</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 集成</strong><span>接入 ROS2、RViz、MoveIt 2、标准 topic / service / action 和规划流程。</span></span>
      <span className="course-tag">Integration</span>
    </a>
  </div>
</section>

</div>

<style>{`
.rebot-page {
  --rb-bg: #ffffff;
  --rb-surface: #ffffff;
  --rb-surface-soft: #f8fafc;
  --rb-text: #111827;
  --rb-muted: #64748b;
  --rb-border: rgba(148, 163, 184, 0.28);
  --rb-primary: #2563eb;
  --rb-primary-soft: #eff6ff;
  --rb-accent: #14b8a6;
  --rb-accent-soft: #ccfbf1;
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(2), .hero-actions a:nth-child(3) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; color: #7c2d12; background: #fff7ed; border: 1px solid #fed7aa; line-height: 1.65; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.86rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.image-frame { margin: 1rem 0; text-align: center; }
.image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.badge-row { display: flex; flex-wrap: wrap; gap: 0.55rem; margin: 1rem 0; }
.badge-row span { padding: 0.35rem 0.65rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 800; font-size: 0.78rem; }
.buy-box { margin: 1rem 0; }
.buy-box a { display: inline-flex; padding: 0.74rem 1.05rem; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); border-radius: 999px; text-decoration: none !important; font-weight: 850; }
.path-grid, .checklist-grid, .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.path-card, .checklist-grid div, .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .checklist-grid strong, .feature-grid strong { color: var(--rb-text); }
.path-card span, .checklist-grid span, .feature-grid span { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; }
.path-card em { width: fit-content; padding: 0.32rem 0.6rem; border-radius: 999px; color: #047857; background: #d1fae5; font-style: normal; font-weight: 850; font-size: 0.75rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.35); background: linear-gradient(135deg, rgba(37,99,235,0.10), rgba(20,184,166,0.09)); }
.step-title-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; min-width: 74px; padding: 0.55rem 0.7rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-title-row h2 { margin: 0 0 0.25rem; color: var(--rb-text); }
.step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker, .video-details summary::-webkit-details-marker { display: none; }
.content-details summary::after, .video-details summary::after { content: "展开"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after, .video-details[open] summary::after { content: "收起"; }
.content-details > :not(summary), .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child, .video-details > :last-child { margin-bottom: 1rem; }
.command-card { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); }
.command-card h3 { margin-top: 0; color: var(--rb-text); }
.command-card p { color: var(--rb-muted); line-height: 1.65; }
.callout { margin: 1rem 0; padding: 0.95rem 1rem; border-radius: 16px; border: 1px solid rgba(37,99,235,0.22); background: var(--rb-primary-soft); color: var(--rb-text); line-height: 1.65; }
.callout.warning { border-color: rgba(245,158,11,0.34); background: #fffbeb; color: #78350f; }
.callout.danger { border-color: rgba(239,68,68,0.34); background: #fef2f2; color: #7f1d1d; }
.video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; }
.reference-grid a { display: block; padding: 0.85rem 0.95rem; border-radius: 14px; text-decoration: none !important; color: var(--rb-text); background: var(--rb-surface-soft); border: 1px solid var(--rb-border); transition: all 0.18s ease; }
.reference-grid a:hover { color: var(--rb-primary); transform: translateY(-2px); }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page table { display: table; width: 100%; }
pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .quick-note { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .callout.warning { background: rgba(245,158,11,0.12); color: #fde68a; }
html[data-theme='dark'] .callout.danger { background: rgba(239,68,68,0.12); color: #fecaca; }
html[data-theme='dark'] .path-card em { color: #bbf7d0; background: rgba(34,197,94,0.18); }
@media (max-width: 900px) { .doc-hero, .two-col { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } .step-title-row { align-items: flex-start; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { margin-bottom: 0.75rem; } }

.safety-alert {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: flex-start;
  margin: 1.2rem 0 1.6rem;
  padding: 1.05rem 1.15rem;
  border-radius: 18px;
  border: 1px solid rgba(239, 68, 68, 0.38);
  background:
    linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92));
  color: #7f1d1d;
  box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12);
}

.safety-alert-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 999px;
  background: #fee2e2;
  color: #dc2626;
  font-size: 1.25rem;
  line-height: 1;
  flex-shrink: 0;
}

.safety-alert-content strong {
  display: block;
  margin-bottom: 0.45rem;
  color: #991b1b;
  font-size: 1.05rem;
  font-weight: 900;
}

.safety-alert-content p {
  margin: 0;
  color: #7f1d1d;
  line-height: 1.72;
}

.safety-alert-content ul {
  margin: 0.65rem 0 0;
  padding-left: 1.2rem;
  color: #7f1d1d;
  line-height: 1.68;
}

.safety-alert-content li + li {
  margin-top: 0.35rem;
}

.safety-alert-content strong,
.safety-alert-content p strong,
.safety-alert-content li strong {
  font-weight: 900;
}

.safety-alert.compact {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  border-radius: 16px;
}

.safety-alert.compact .safety-alert-content strong {
  margin-bottom: 0.25rem;
}

html[data-theme='dark'] .safety-alert {
  border-color: rgba(248, 113, 113, 0.42);
  background:
    linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18));
  color: #fecaca;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
}

html[data-theme='dark'] .safety-alert-icon {
  background: rgba(248, 113, 113, 0.18);
  color: #fca5a5;
}

html[data-theme='dark'] .safety-alert-content strong,
html[data-theme='dark'] .safety-alert-content p,
html[data-theme='dark'] .safety-alert-content ul {
  color: #fecaca;
}

@media (max-width: 560px) {
  .safety-alert {
    grid-template-columns: 1fr;
  }

  .safety-alert-icon {
    width: 2.1rem;
    height: 2.1rem;
  }
}


/* Course navigation and polished step cards */
.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item,
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.95rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border, var(--border, rgba(148,163,184,0.28)));
  background: var(--rb-surface, var(--panel-bg, #fff));
  text-decoration: none !important;
  color: var(--rb-text, var(--text-main, #111827));
  box-shadow: 0 10px 24px rgba(15,23,42,0.05);
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}
.course-path-item:hover,
.course-step:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.course-path-item.active,
.course-step.active { border-color: rgba(37,99,235,0.50); background: linear-gradient(135deg, rgba(239,246,255,0.94), rgba(240,253,250,0.80)); }
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.45rem;
  height: 2.45rem;
  border-radius: 999px;
  color: #fff;
  background: var(--rb-primary, var(--primary, #2563eb));
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37,99,235,0.24);
}
.course-path-copy strong,
.course-step strong { display: block; color: var(--rb-text, var(--text-main, #111827)); font-size: 1rem; margin-bottom: 0.25rem; }
.course-path-copy span,
.course-step small { display: block; color: var(--rb-muted, var(--text-muted, #64748b)); line-height: 1.6; }
.course-tag,
.course-step em { justify-self: end; white-space: nowrap; padding: 0.35rem 0.7rem; border-radius: 999px; color: var(--rb-primary, var(--primary, #2563eb)); background: var(--rb-primary-soft, var(--primary-soft, #eff6ff)); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.step-card-grid,
.module-summary-grid,
.quick-step-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1rem; margin: 1rem 0 1.35rem; }
.step-card,
.module-summary-card,
.path-card,
.info-card,
.command-card,
.check-card,
.tip-card,
.warning-card,
.danger-card,
.spec-card {
  position: relative;
  padding: 1rem 1.05rem;
  border: 1px solid var(--rb-border, var(--border, rgba(148,163,184,0.28)));
  border-radius: 18px;
  background: linear-gradient(180deg, var(--rb-surface, var(--panel-bg, #fff)), var(--rb-surface-soft, var(--panel-bg-soft, #f8fafc)));
  box-shadow: 0 10px 24px rgba(15,23,42,0.05);
}
.step-mini,
.step-card > span:first-child,
.path-card > span:first-child,
.step-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 0.65rem;
  margin-bottom: 0.65rem;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary, var(--primary, #2563eb)), var(--rb-accent, var(--accent, #14b8a6)));
  font-weight: 900;
  font-size: 0.86rem;
}
.path-card b,
.path-card strong,
.step-card strong,
.module-summary-card b,
.module-summary-card strong { display: block; color: var(--rb-text, var(--text-main, #111827)); margin-bottom: 0.35rem; }
.path-card p,
.path-card small,
.path-card span:not(:first-child),
.step-card p,
.step-card span:not(:first-child),
.module-summary-card span { display: block; margin: 0; color: var(--rb-muted, var(--text-muted, #64748b)); line-height: 1.65; }
.path-card em { display: inline-flex; width: fit-content; margin-top: 0.75rem; padding: 0.32rem 0.65rem; border-radius: 999px; color: var(--rb-primary, var(--primary, #2563eb)); background: var(--rb-primary-soft, var(--primary-soft, #eff6ff)); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.step-title-row { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.95rem; align-items: start; margin-bottom: 1rem; }
html[data-theme='dark'] .course-path-item,
html[data-theme='dark'] .course-step,
html[data-theme='dark'] .step-card,
html[data-theme='dark'] .module-summary-card,
html[data-theme='dark'] .path-card,
html[data-theme='dark'] .info-card,
html[data-theme='dark'] .command-card,
html[data-theme='dark'] .check-card,
html[data-theme='dark'] .tip-card,
html[data-theme='dark'] .warning-card,
html[data-theme='dark'] .danger-card,
html[data-theme='dark'] .spec-card { background: rgba(15,23,42,0.72); border-color: rgba(148,163,184,0.22); }
html[data-theme='dark'] .course-path-item.active,
html[data-theme='dark'] .course-step.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
@media (max-width: 720px) {
  .course-path-item,
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-tag,
  .course-step em { grid-column: 2; justify-self: start; }
  .step-title-row { grid-template-columns: 1fr; }
}

`}</style>
