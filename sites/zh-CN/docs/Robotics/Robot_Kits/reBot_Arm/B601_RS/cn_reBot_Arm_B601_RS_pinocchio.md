---
description: 本教程介绍如何在 reBot Arm B601-RS 机械臂上使用 Pinocchio 和 MeshCat 进行运动学分析、轨迹规划、重力补偿与可视化调试。
title: reBot Arm B601-RS 入门 Pinocchio 与 MeshCat
keywords:
  - Pinocchio
  - MeshCat
  - 机械臂
  - 机器人
  - LeRobot
  - 运动学
  - Robostride
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_pinocchio_meshcat
sku: 100019336
last_update:
  date: 2026-07-05
  author: LiJie
translation:
  skip:
    - zh-CN
createdAt: '2026-06-11'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_pinocchio_meshcat/
---

# reBot Arm B601-RS 入门 Pinocchio 与 MeshCat

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>分步骤完成 B601-RS 的运动学、轨迹、重力补偿与 MeshCat 可视化调试</h2>
    <p>
      本教程将 reBotArm_control_py 的底层调试流程整理成更安全的学习路径：先安装环境，
      再验证 CAN 通信和单个 RobStride 电机，随后完成 FK / IK 验证、MeshCat 轨迹仿真，
      最后再进入真实机械臂控制和重力补偿调试。
    </p>
    <div className="hero-actions">
      <a href="#workflow">查看流程</a>
      <a href="#install">安装环境</a>
      <a href="#hardware-control">实机控制</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
    <strong>B601-RS · Pinocchio / MeshCat</strong>
    <span>先仿真，再小范围实机运动，最后再测试重力补偿。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全警告：运行前请清空机械臂工作空间</strong>
    <p>
      在运行任何会驱动机械臂运动的程序前，请务必清空机械臂工作空间
      <strong>1 米范围内</strong>
      的贵重物品、易碎物品、工具、线缆和其他无关物体。调试和运行过程中，人员禁止靠近机械臂运动范围。
    </p>
    <ul>
      <li>机械臂上电后，请勿触碰关节、电机、连杆、夹爪或末端执行器。</li>
      <li>运行 MIT 控制、IK 控制、轨迹控制、重力补偿或任何实机脚本前，请确认机械臂底座已经牢固固定。</li>
      <li>如出现异常运动、异响、抖动、线缆松动、电源接触不良或通信中断，请立即停止程序并断电检查。</li>
      <li>插拔电机线、CAN 线、PCAN-USB、XT30 或电源接口前，必须先断开电源。</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="Pinocchio MeshCat navigation">
  <a href="#workflow">流程</a>
  <a href="#overview">概览</a>
  <a href="#install">安装</a>
  <a href="#debug">电机调试</a>
  <a href="#kinematics">FK / IK</a>
  <a href="#simulation">MeshCat</a>
  <a href="#hardware-control">实机控制</a>
  <a href="#gravity">重力补偿</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="workflow" className="section-card step-section">
  <div className="section-title">
    <span>Start Here</span>
    <h2>推荐安全调试流程</h2>
    <p>
      Pinocchio 与 MeshCat 适合做底层运动学、轨迹和动力学调试。建议按照下面的顺序，
      从纯软件验证逐步过渡到真实硬件控制，降低误操作风险。
    </p>
  </div>

  <div className="step-card-grid">
    <a className="step-card recommended" href="/cn/rebot_b601_rs_getting_started/">
      <span className="step-mini">Step 0</span>
      <strong>完成 B601-RS 快速入门</strong>
      <p>完成供电、接线、PCAN-USB / SocketCAN、零位和 MotorBridge 检查后，再使用底层脚本。</p>
    </a>
    <a className="step-card" href="#install">
      <span className="step-mini">Step 1</span>
      <strong>安装并同步环境</strong>
      <p>克隆 reBotArm_control_py，运行 uv sync，并将硬件配置切换到 RS 版本。</p>
    </a>
    <a className="step-card" href="#debug">
      <span className="step-mini">Step 2</span>
      <strong>验证 CAN 和电机状态</strong>
      <p>拉起 can0，运行 RS06 单电机控制台，检查状态反馈并确认零点。</p>
    </a>
    <a className="step-card" href="#kinematics">
      <span className="step-mini">Step 3</span>
      <strong>先在软件中验证 FK / IK</strong>
      <p>在实机运动前检查单位、关节限位、工作空间、坐标系定义和 IK 收敛情况。</p>
    </a>
    <a className="step-card" href="#simulation">
      <span className="step-mini">Step 4</span>
      <strong>使用 MeshCat 可视化</strong>
      <p>在浏览器中检查机械臂姿态、目标坐标系和规划轨迹，再进入实机执行。</p>
    </a>
    <a className="step-card" href="#hardware-control">
      <span className="step-mini">Step 5</span>
      <strong>缓慢移动真实机械臂</strong>
      <p>首次运行 IK 和轨迹脚本时，只使用小目标、长时长，并提前准备停止方案。</p>
    </a>
    <a className="step-card" href="#gravity">
      <span className="step-mini">Step 6</span>
      <strong>最后再调试重力补偿</strong>
      <p>只有在零点、关节方向、URDF 参数和电机行为都确认正确后，再测试重力补偿。</p>
    </a>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>本教程覆盖的内容</h2>
    <p>
      本教程聚焦 B601-RS RobStride 版本的运动学建模、轨迹生成、可视化调试和基于动力学模型的重力补偿。
    </p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Pinocchio 模型分析</b><span>利用机器人模型计算 FK、IK、雅可比、重力矩和轨迹跟踪目标。</span></div>
    <div className="module-summary-card"><b>MeshCat 可视化</b><span>通过浏览器 3D Viewer 查看机械臂状态、目标位姿、参考路径和实际轨迹。</span></div>
    <div className="module-summary-card"><b>MotorBridge 控制链路</b><span>通过 MotorBridge 与 SocketCAN 和 RobStride 电机通信，完成底层控制验证。</span></div>
    <div className="module-summary-card"><b>真实机械臂实验</b><span>在仿真和小幅度运动验证完成后，再运行 IK、平滑轨迹和重力补偿脚本。</span></div>
  </div>

  <div className="feature-grid">
    <div><strong>正 / 逆运动学</strong><span>从关节角计算末端位姿，或从目标末端位姿反求关节角。</span></div>
    <div><strong>轨迹规划与跟踪</strong><span>使用 SE(3) 测地线轨迹规划和 CLIK 跟踪，减少突变运动。</span></div>
    <div><strong>重力补偿</strong><span>基于动力学模型计算关节重力矩，测试漂浮模式或姿态锁止效果。</span></div>
    <div><strong>多模式电机控制</strong><span>使用 MIT、POS_VEL 和速度模式完成不同阶段的电机调试。</span></div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>B601-RS 硬件规格</h2>
    <p>B601-RS 版本使用 RobStride 电机、1 Mbps CAN 通信和 48V 电源。</p>
  </div>

  <div className="spec-grid">
    <div className="spec-card"><b>机械臂</b><span>reBot Arm B601-RS Assembled Kit with Gripper</span></div>
    <div className="spec-card"><b>自由度</b><span>6 + 1，包含夹爪</span></div>
    <div className="spec-card"><b>活动半径</b><span>含夹爪 754.7 mm / 不含夹爪 587.5 mm</span></div>
    <div className="spec-card"><b>负载</b><span>额定负载 2.5 kg / 最大负载 5 kg</span></div>
    <div className="spec-card"><b>电机</b><span>RobStride 06 × 3，RobStride 00 × 4</span></div>
    <div className="spec-card"><b>通信</b><span>CAN Bus @ 1 Mbps，通常映射为 can0</span></div>
    <div className="spec-card"><b>电源</b><span>DC 48V，推荐 15A 电源</span></div>
    <div className="spec-card"><b>软件</b><span>Ubuntu 22.04+，Python 3.10+，Pinocchio，MeshCat</span></div>
  </div>

  <details className="content-details">
    <summary>关节运动范围与电机参数</summary>

    | 项目 | 规格 |
    |------|------|
    | 关节运动范围 | J1: ±150°，J2: 220° 到 0°，J3: 220° 到 0°，J4: ±90°，J5: ±90°，J6: ±180°，夹爪: 345° 到 0° |
    | 重复定位精度 | 0.1 mm |
    | 自重 | 6.7 kg |
    | RobStride 00 额定 / 峰值扭矩 | 5 N·m / 14 N·m |
    | RobStride 06 额定 / 峰值扭矩 | 11 N·m / 36 N·m |
    | 额定电压 | 48V |
    | 控制模式 | MIT 模式、速度模式、位置模式、力矩模式 |
  </details>

  <details className="content-details">
    <summary>材料清单</summary>

    | 部件 | 数量 | 是否包含 |
    |------|------|----------|
    | reBot Arm B601-RS 机械臂 | 1 | ✅ |
    | CAN 适配器 | 1 | ✅ |
    | DC 48V 电源适配器 | 1 | ✅ |
    | USB-C 线缆 | 1 | ✅ |
    | 夹爪 | 1 | ✅ |
  </details>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>安装环境并选择 RS 硬件配置</h2>
      <p>本节将准备 reBotArm_control_py，并确认硬件配置使用 RobStride RS 文件，而不是 Damiao DM 文件。</p>
    </div>
  </div>

  <div className="command-grid">
    <div className="command-card">
      <h3>1. 安装 uv</h3>
      <pre><code>{`curl -LsSf https://astral.sh/uv/install.sh | sh`}</code></pre>
    </div>
    <div className="command-card">
      <h3>2. 克隆仓库</h3>
      <pre><code>{`git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py`}</code></pre>
    </div>
    <div className="command-card">
      <h3>3. 同步依赖</h3>
      <pre><code>{`uv sync`}</code></pre>
    </div>
  </div>

  <div className="callout warning">
    <strong>B601-RS 的关键配置：</strong>运行示例前，请打开 <code>{`config/rebotarm.yaml`}</code>，将硬件配置切换到 RS 文件。
  </div>

  <pre><code>{`# 修改前
hardware_yaml: "rebotarm_dm.yaml"

# 修改后
hardware_yaml: "rebotarm_rs.yaml"`}</code></pre>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>为什么必须修改？</b><span>DM 与 RS 版本使用不同的电机协议。如果配置仍指向 DM 文件，RS 电机可能无法识别或被正确控制。</span></div>
    <div className="module-summary-card"><b>什么时候需要再次检查？</b><span>拉取新代码、切换分支或把项目复制到另一台机器后，建议重新检查该配置。</span></div>
  </div>
</section>

<section id="debug" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>电机调试前安全确认</strong>
      <p>清空工作空间，保持人员距离机械臂至少 <strong>1 米</strong>，并确认机械臂已经机械固定后再使能电机。</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>拉起 CAN 并验证电机行为</h2>
      <p>在确认 CAN 接口、电机响应、零位和关节方向之前，不要运行全臂运动脚本。</p>
    </div>
  </div>

  <div className="command-card wide">
    <h3>配置 PCAN-USB 对应的 SocketCAN</h3>
    <pre><code>{`sudo modprobe peak_usb
ip -br link

sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0`}</code></pre>
  </div>

  <div className="debug-grid">
    <details className="content-details" open>
      <summary>2.1 单电机控制台：0x01rs06_test.py</summary>
      <p>使用该控制台确认 RobStride RS06 电机可以安全地使能、失能、ping、读取状态和发送控制指令。</p>
      <pre><code>{`uv run python example/0x01rs06_test.py`}</code></pre>
      <div className="content-table">
        <table>
          <thead><tr><th>命令</th><th>说明</th></tr></thead>
          <tbody>
            <tr><td><code>enable</code> / <code>disable</code></td><td>使能或失能电机。</td></tr>
            <tr><td><code>set_zero</code></td><td>将当前位置设置为软件零位。</td></tr>
            <tr><td><code>state</code></td><td>读取当前电机状态。</td></tr>
            <tr><td><code>ping</code></td><td>检查电机是否响应。</td></tr>
            <tr><td><code>clear_error</code></td><td>清除电机错误标志。</td></tr>
            <tr><td><code>mode mit</code> / <code>mode posvel</code> / <code>mode vel</code></td><td>切换控制模式。</td></tr>
            <tr><td><code>mit pos vel kp kd</code></td><td>发送 MIT 模式命令。</td></tr>
            <tr><td><code>posvel pos vlim</code></td><td>发送位置速度命令。</td></tr>
            <tr><td><code>vel velocity</code></td><td>发送速度命令。</td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details className="content-details" open>
      <summary>2.2 零点校准与角度监控：2_zero_and_read.py</summary>
      <p>使用该脚本设置所有关节零点并实时显示关节角度。在使用 FK / IK 前，请先确认零位姿态正确。</p>
      <pre><code>{`uv run python example/2_zero_and_read.py`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2.3 MIT 全关节控制：3_mit_control.py</summary>
      <div className="callout danger"><strong>高力矩警告：</strong>MIT 模式响应快。首次测试请只输入非常小的角度，并确保人和物体远离机械臂。</div>
      <pre><code>{`uv run python example/3_mit_control.py
> 0 0 0 0 0 0
> 0 0 0 0 0 0 2.0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2.4 POS_VEL 全关节控制：4_pos_vel_control.py</summary>
      <p>POS_VEL 模式通常更适合作为平滑关节动作测试的起点。</p>
      <pre><code>{`uv run python example/4_pos_vel_control.py
> 0 0 0 0 0 0`}</code></pre>
    </details>
  </div>
</section>

<section id="kinematics" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>验证正运动学与逆运动学</h2>
      <p>在驱动真实机械臂前，先用 FK / IK 脚本验证单位、坐标系、关节限位和可达工作空间。</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>正运动学</b><span>输入关节角，计算末端位置、旋转矩阵和欧拉角。</span></div>
    <div className="module-summary-card"><b>逆运动学</b><span>输入目标位姿并求解关节角。初次调试建议先使用仅位置目标，减少姿态约束。</span></div>
    <div className="module-summary-card"><b>单位检查</b><span>位置单位为米。部分示例使用角度，仿真脚本中的姿态可能使用弧度。</span></div>
  </div>

  <details className="content-details" open>
    <summary>3.1 正运动学：5_fk_test.py</summary>
    <pre><code>{`uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>3.2 逆运动学：6_ik_test.py</summary>
    <pre><code>{`uv run python example/6_ik_test.py

# 仅位置，单位：m
> 0.25 0.0 0.15

# 位置 + 姿态，位置单位 m，姿态单位 deg
> 0.25 0.0 0.15 0 0 0`}</code></pre>
  </details>
</section>

<section id="simulation" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>先运行 MeshCat 仿真，再执行实机运动</h2>
      <p>MeshCat 可以直观检查机械臂姿态和轨迹。建议在向真实机械臂发送 IK 或轨迹指令前，先在浏览器中确认目标合理。</p>
    </div>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic_rs.png" alt="B601-RS MeshCat trajectory simulation" />
  </div>

  <div className="debug-grid">
    <details className="content-details" open>
      <summary>4.1 正运动学仿真：sim/fk_sim.py</summary>
      <pre><code>{`uv run python example/sim/fk_sim.py

# 输入 6 个关节角，单位：degree
> 0 0 0 0 0 0
> 45 -30 15 -60 90 -180`}</code></pre>
    </details>

    <details className="content-details" open>
      <summary>4.2 逆运动学仿真：sim/ik_sim.py</summary>
      <pre><code>{`uv run python example/sim/ik_sim.py

# 仅位置，单位：m
> 0.25 0.0 0.25

# 位置 + 姿态，姿态单位：rad
> 0.25 0.0 0.25 0 0 0`}</code></pre>
    </details>

    <details className="content-details" open>
      <summary>4.3 轨迹规划仿真：sim/traj_sim.py</summary>
      <pre><code>{`uv run python example/sim/traj_sim.py

# 输入 x y z [roll pitch yaw]，位置单位 m，姿态单位 rad
> 0.25 0.0 0.25 0 0 0`}</code></pre>
      <p>该脚本会显示轨迹统计信息，在 MeshCat 中回放完整轨迹，并显示参考路径与实际路径。</p>
    </details>

    <details className="content-details">
      <summary>4.4 可视化工具：sim/visualizer.py</summary>
      <pre><code>{`from example.sim.visualizer import Visualizer

viz = Visualizer()
viz.update(q)
viz.draw_path(points, "path_name", color)`}</code></pre>
    </details>
  </div>
</section>

<section id="hardware-control" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>实机控制前安全确认</strong>
      <p>清空所有贵重物品，并让人员距离机械臂至少 <strong>1 米</strong>。首次运行请使用小目标和长运动时间。</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>谨慎运行实机 IK 与轨迹控制</h2>
      <p>只有在 CAN 通信、零点、FK / IK 和 MeshCat 仿真都验证完成后，再运行下面的实机脚本。</p>
    </div>
  </div>

  <div className="debug-grid">
    <details className="content-details" open>
      <summary>5.1 IK 实时控制：7_arm_ik_control.py</summary>
      <p>该脚本用于目标末端位姿控制。首次测试请从靠近当前位置的目标位姿开始。</p>
      <pre><code>{`uv run python example/7_arm_ik_control.py

# 仅位置
> 0.3 0.0 0.2

# 位置 + 姿态
> 0.3 0.1 0.25 0 0.5 0

# 读取当前状态
> state
> pos`}</code></pre>
    </details>

    <details className="content-details" open>
      <summary>5.2 平滑轨迹控制：8_arm_traj_control.py</summary>
      <p>该脚本使用 SE(3) 测地线轨迹规划和 CLIK 跟踪。首次测试请设置更长 duration。</p>
      <pre><code>{`uv run python example/8_arm_traj_control.py

# x y z roll pitch yaw duration
> 0.3 0.0 0.3 0 0.4 0 5.0`}</code></pre>
    </details>
  </div>
</section>

<section id="gravity" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>重力补偿前安全确认</strong>
      <p>重力补偿脚本停止时可能会直接失能电机。退出前请扶住机械臂，或先移动到安全姿态。</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 6</span>
    <div>
      <h2>完成基础检查后再测试重力补偿</h2>
      <p>重力补偿依赖 URDF 质量、质心、惯量、电机方向、零点偏移和摩擦。不要盲目增大增益。</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>基础漂浮模式</b><span>使用重力前馈力矩，让机械臂变轻并可被手动推动。</span></div>
    <div className="module-summary-card"><b>末端速度锁止模式</b><span>末端速度较低时锁住当前姿态，被推动后再更新目标关节角。</span></div>
    <div className="module-summary-card"><b>安全调试建议</b><span>首次测试可只使能部分关节，并逐步调整补偿比例。</span></div>
  </div>

  <details className="content-details" open>
    <summary>6.1 基础重力补偿：9_gravity_compensation.py</summary>
    <pre><code>{`uv run python example/9_gravity_compensation.py`}</code></pre>
    <div className="callout danger"><strong>退出警告：</strong>使用 Ctrl+C 停止脚本时，程序可能直接失能所有电机，机械臂不会自动回零。退出前请扶住机械臂或移动到安全姿态。</div>
  </details>

  <details className="content-details" open>
    <summary>6.2 末端速度锁止：10_gravity_compensation_lock.py</summary>
    <pre><code>{`uv run python example/10_gravity_compensation_lock.py`}</code></pre>
    <p>终端会显示 LOCKED 或 UPDATE、末端线速度、角速度和重力补偿力矩。</p>
  </details>

  <details className="content-details">
    <summary>6.3 仅使能指定关节做安全测试</summary>
    <pre><code>{`ENABLED_JOINTS = ["joint1"]  # 首次安全测试时仅使能 joint1`}</code></pre>
  </details>

  <details className="content-details">
    <summary>6.4 谨慎调整单个关节补偿比例</summary>
    <pre><code>{`tau_g[x] *= y  # x 为关节电机 id，y 为补偿系数，通常从 1 开始
# 一般只建议针对关节 2 和关节 3 做补偿微调`}</code></pre>
    <p>例如 <code>{`tau_g[2] *= 1.2`}</code> 表示将第 2 个关节的重力补偿力矩增大 20%。建议一次只调整一个参数，并根据实际漂浮效果逐项微调。</p>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>常见问题</h2>
  </div>

  <details className="content-details" open>
    <summary>Permission denied</summary>
    <p>B601-RS 用户应优先确认 CAN 接口是否存在并已拉起。如果使用 SocketCAN 设备，请先配置 <code>{`can0`}</code>。</p>
    <pre><code>{`ip -br link
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
  </details>

  <details className="content-details">
    <summary>IK 解算失败或结果异常</summary>
    <p>检查目标位姿是否在工作空间内、姿态约束是否过强、初始关节角是否离目标过远，以及关节限位是否正确。建议先尝试仅位置 IK。</p>
  </details>

  <details className="content-details">
    <summary>RobStride 电机无法读取状态</summary>
    <p>部分 MotorBridge 协议路径可能不像 DM 电机一样暴露全部状态字段。请结合实际运动反馈和 ping 命令确认通信是否正常。</p>
  </details>

  <details className="content-details">
    <summary>重力补偿效果不佳</summary>
    <p>优先检查 URDF 质量、质心、惯量、关节方向、零点偏移、电机力矩常数、摩擦和装配差异。不要简单地直接增大增益。</p>
  </details>

  <details className="content-details">
    <summary>如何切换 Damiao 和 RobStride 电机配置？</summary>
    <p>修改配置文件并加载对应硬件 YAML。B601-RS 应使用 <code>{`rebotarm_rs.yaml`}</code>。</p>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>References</span>
    <h2>参考文档</h2>
  </div>
  <div className="reference-grid">
    <a href="https://stack-of-tasks.github.io/pinocchio/" target="_blank">Pinocchio 官方文档</a>
    <a href="https://github.com/rdeits/meshcat" target="_blank">MeshCat GitHub</a>
    <a href="https://github.com/motorbridge/motorbridge" target="_blank">MotorBridge SDK</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py" target="_blank">reBotArm_control_py</a>
    <a href="https://forum.seeedstudio.com/" target="_blank">Seeed Studio Forum</a>
  </div>
</section>

<section className="section-card course-path-section">
  <div className="section-title">
    <span>课程导链</span>
    <h2>reBot B601-RS 系列课程跳转</h2>
    <p>建议按照 Robotics Page 的学习顺序阅读：快速入门 → LeRobot → Pinocchio → 视觉夹取 → ROS2。也可以通过下面的卡片直接跳转到任意课程。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/cn/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>快速入门</strong><span>完成开箱、供电检查、PCAN-USB 配置、校准和第一次运动测试。</span></span>
      <span className="course-tag">Start</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot 遥操作与数据采集</strong><span>完成遥操作、相机接入、数据集采集，并准备模仿学习任务。</span></span>
      <span className="course-tag">Data</span>
    </a>
    <a className="course-path-item active" href="/cn/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio 运动学可视化</strong><span>理解机器人模型、关节、坐标系、FK / IK、轨迹和重力补偿。</span></span>
      <span className="course-tag">当前文章</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>视觉夹取 Demo</strong><span>结合 RGB-D 感知、手眼标定、YOLO / GraspNet 和真实物体抓取。</span></span>
      <span className="course-tag">Application</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_rs_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 集成</strong><span>接入 ROS2、RViz、MoveIt 2、规划和更高层机器人应用流程。</span></span>
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
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(n+2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card img { width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.step-title-row { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 1rem; align-items: start; margin-bottom: 1.1rem; }
.step-pill, .step-mini { display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-pill { padding: 0.5rem 0.8rem; white-space: nowrap; }
.step-card-grid, .module-summary-grid, .spec-grid, .debug-grid, .command-grid, .feature-grid, .reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1rem; }
.step-card, .module-summary-card, .spec-card, .command-card, .content-details, .reference-grid a, .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05); }
.step-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.96), rgba(240,253,250,0.82)); }
.step-card .step-mini { width: fit-content; min-width: 2.1rem; height: 2.1rem; padding: 0 0.65rem; margin-bottom: 0.3rem; font-size: 0.86rem; }
.step-card strong, .module-summary-card b, .spec-card b, .feature-grid strong, .command-card h3 { color: var(--rb-text); margin: 0; }
.step-card p, .module-summary-card span, .spec-card span, .feature-grid span, .content-details p { color: var(--rb-muted); line-height: 1.65; margin: 0; }
.command-card.wide { grid-column: 1 / -1; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.content-table { overflow-x: auto; }
.image-frame { margin: 1rem 0; padding: 0.7rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); }
.image-frame img { width: 100%; border-radius: 14px; display: block; }
.callout { margin: 1rem 0; padding: 0.95rem 1rem; border-radius: 16px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); color: var(--rb-muted); line-height: 1.65; }
.callout.warning { border-color: rgba(245,158,11,0.36); background: #fffbeb; color: #78350f; }
.callout.danger { border-color: rgba(239,68,68,0.38); background: #fef2f2; color: #7f1d1d; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary); color: #fff; font-weight: 900; box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .command-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .feature-grid div, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .step-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .callout.warning { background: rgba(245,158,11,0.12); color: #fde68a; }
html[data-theme='dark'] .callout.danger { background: rgba(127,29,29,0.26); color: #fecaca; }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 700px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert, .step-title-row { grid-template-columns: 1fr; } }
`}</style>
