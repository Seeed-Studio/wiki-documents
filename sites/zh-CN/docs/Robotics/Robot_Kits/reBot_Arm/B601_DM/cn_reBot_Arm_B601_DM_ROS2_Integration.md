---
description: 本教程介绍如何基于 reBot Arm B601-DM 搭建 ROS2 控制工作空间，完成机械臂控制、RViz 可视化和 MoveIt 2 集成。
title: reBot Arm B601-DM ROS2 集成
keywords:
  - reBot Arm
  - B601-DM
  - ROS2
  - Humble
  - Jazzy
  - RViz
  - MoveIt 2
  - 机械臂
  - 机器人
slug: /rebot_arm_b601_dm_ros2_integration
sku: 100065783, 100095532
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-29'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_ros2_integration/
---

# reBot Arm B601-DM ROS2 集成

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>使用 ROS2、RViz 与 MoveIt 2 构建 B601-DM 机械臂控制工作空间</h2>
    <p>
      本教程将底层 reBotArm_control_py SDK 封装为 ROS2 topic、service 和 action。
      内容覆盖硬件启动、控制节点、RViz 可视化、MoveIt 2 规划，以及 B601-DM 真实机械臂执行。
    </p>
    <div className="hero-actions">
      <a href="#workflow">查看流程</a>
      <a href="#install">安装工作空间</a>
      <a href="#moveit">MoveIt 2</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM ROS2 集成" />
    <strong>B601-DM · ROS2 / RViz / MoveIt 2</strong>
    <span>先验证通信，再仿真规划，最后再执行真实机械臂动作。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全警告：运行前请清空机械臂工作空间</strong>
    <p>
      在运行任何会驱动机械臂运动的程序前，请务必清空机械臂工作空间
      <strong> 1 米范围内 </strong>
      的贵重物品、易碎物品、工具、线缆和其他无关物体。调试和运行过程中，人员禁止靠近机械臂运动范围。
    </p>
    <ul>
      <li>机械臂上电后，请勿用手触碰关节、电机、连杆、夹爪或末端工具。</li>
      <li>运行 ROS2 action、MoveIt 真实执行、重力补偿、IK 控制、轨迹控制、遥操作或抓取 Demo 前，请确保机械臂底座固定牢靠。</li>
      <li>如出现异常运动、异响、抖动、线缆松动、电源接触不良或通信中断，请立即停止程序并断电检查。</li>
      <li>插拔电机线、CAN 线、USB2CAN 适配器、XT30 或电源接口前，必须先断开电源。</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="quick navigation">
  <a href="#workflow">流程</a>
  <a href="#overview">概览</a>
  <a href="#install">安装</a>
  <a href="#bringup">启动</a>
  <a href="#api">API</a>
  <a href="#examples">示例</a>
  <a href="#moveit">MoveIt 2</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="workflow" className="section-card">
  <div className="section-title">
    <span>Start Here</span>
    <h2>推荐 ROS2 操作流程</h2>
    <p>
      本页面按照英文版结构重新整理为 Step-by-Step 课程模块。
      建议按顺序完成：先验证硬件，再构建 ROS2 工作空间，然后验证通信，最后进入 MoveIt 2 规划和真实硬件执行。
    </p>
  </div>

  <div className="step-card-grid">
    <a className="step-card recommended" href="/cn/rebot_b601_dm_getting_started/">
      <span className="step-mini">Step 0</span>
      <strong>完成 B601-DM 快速入门</strong>
      <p>完成供电检查、接线、电机 ID、零点校准和 MotorBridge 基础验证后，再开始 ROS2 集成。</p>
      <em>必须先完成</em>
    </a>
    <a className="step-card" href="#install">
      <span className="step-mini">Step 1</span>
      <strong>安装 ROS2 与依赖</strong>
      <p>Ubuntu 24.04 使用 ROS2 Jazzy；Ubuntu 22.04 使用 ROS2 Humble。随后安装 colcon、RViz、Pinocchio 和控制消息包。</p>
      <em>环境准备</em>
    </a>
    <a className="step-card" href="#install">
      <span className="step-mini">Step 2</span>
      <strong>构建控制器工作空间</strong>
      <p>克隆 ROS2 控制仓库，安装 MotorBridge，引入底层 SDK，并使用 colcon 构建工作空间。</p>
      <em>Build</em>
    </a>
    <a className="step-card" href="#bringup">
      <span className="step-mini">Step 3</span>
      <strong>安全启动驱动</strong>
      <p>先不打开 RViz，只启动控制节点，确认串口通道和 joint state 反馈正常。</p>
      <em>Driver</em>
    </a>
    <a className="step-card" href="#api">
      <span className="step-mini">Step 4</span>
      <strong>验证 topic、service 和 action</strong>
      <p>先测试只读 topic 和安全 service，再使用较长 duration 测试关节和末端 pose action。</p>
      <em>ROS APIs</em>
    </a>
    <a className="step-card" href="#moveit">
      <span className="step-mini">Step 5</span>
      <strong>谨慎使用 MoveIt 2</strong>
      <p>先在仿真中规划，在 RViz 中检查轨迹，确认路径安全后再接入真实机械臂执行。</p>
      <em>Planning</em>
    </a>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>ROS2 集成提供了什么</h2>
    <p>
      B601-DM ROS2 工作空间通过标准 ROS2 接口暴露机械臂能力，方便接入感知、规划、可视化和上层机器人应用。
    </p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card">
      <b>标准 ROS2 接口</b>
      <span>发布 joint state 和 arm status，并提供 enable、disable、safe home、夹爪控制、末端 pose 运动和关节轨迹执行等 service / action。</span>
    </div>
    <div className="module-summary-card">
      <b>RViz 可视化</b>
      <span>显示机器人模型、关节状态和规划坐标系，便于在真实运动前检查当前机械臂状态。</span>
    </div>
    <div className="module-summary-card">
      <b>MoveIt 2 规划</b>
      <span>提供 MoveIt 2 配置和 demo 包，支持仿真规划、硬件执行、画矩形 demo 和 pick-place demo。</span>
    </div>
    <div className="module-summary-card">
      <b>真实硬件桥接</b>
      <span>将 ROS2 命令连接到底层 reBotArm_control_py SDK 和 MotorBridge 电机控制接口。</span>
    </div>
  </div>

  <div className="spec-card-grid">
    <div className="spec-card"><span>机械臂</span><strong>reBot Arm B601-DM</strong></div>
    <div className="spec-card"><span>自由度</span><strong>6-DOF + 夹爪</strong></div>
    <div className="spec-card"><span>电机版本</span><strong>Damiao 电机版</strong></div>
    <div className="spec-card"><span>通信方式</span><strong>USB2CAN 串口桥</strong></div>
    <div className="spec-card"><span>默认端口</span><strong>/dev/ttyACM0</strong></div>
    <div className="spec-card"><span>电源</span><strong>24V DC</strong></div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>BOM、接线与环境检查</h2>
    <p>构建 ROS2 工作空间前，请先准备机械臂、电源、USB2CAN 串口桥和 Ubuntu 主机。</p>
  </div>

  <div className="two-col">
    <div className="info-card">
      <h3>材料清单</h3>
      <ul>
        <li>reBot Arm B601-DM 机械臂 × 1</li>
        <li>夹爪 × 1</li>
        <li>USB2CAN 串口桥 × 1</li>
        <li>24V 电源适配器 × 1</li>
        <li>USB-C / 通信线缆 × 1</li>
        <li>Ubuntu 主机 × 1</li>
      </ul>
    </div>
    <div className="info-card">
      <h3>环境要求</h3>
      <ul>
        <li>Ubuntu 24.04 + ROS2 Jazzy，或 Ubuntu 22.04 + ROS2 Humble</li>
        <li>与 ROS2 发行版匹配的系统 Python</li>
        <li>colcon 构建工具</li>
        <li>MotorBridge Python 包</li>
        <li>reBotArm_control_py 底层 SDK</li>
      </ul>
    </div>
  </div>

  <div className="callout warning">
    <strong>上电前检查：</strong>确认 B601-DM 使用正确的 24V 电源，USB2CAN 连接正常，并且机械臂已经完成零点和基础连通性验证。
  </div>

  <div className="command-card">
    <h3>检查串口设备</h3>
    <pre><code>{`ls /dev/ttyACM*`}</code></pre>
  </div>

  <div className="command-card">
    <h3>临时开放串口权限</h3>
    <pre><code>{`sudo chmod 666 /dev/ttyACM0`}</code></pre>
  </div>

  <div className="command-card">
    <h3>推荐的长期权限配置</h3>
    <pre><code>{`sudo usermod -a -G dialout $USER

# 退出当前用户并重新登录后生效。`}</code></pre>
  </div>
</section>

<section id="install" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>安装 ROS2 并构建工作空间</h2>
      <p>先安装与 Ubuntu 版本匹配的 ROS2 发行版，再构建 B601-DM ROS2 控制器工作空间。</p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card"><span className="step-mini">1.1</span><strong>安装 ROS2</strong><p>Ubuntu 24.04 使用 Jazzy，Ubuntu 22.04 使用 Humble。</p></div>
    <div className="step-card"><span className="step-mini">1.2</span><strong>安装依赖</strong><p>安装 colcon、control messages、trajectory messages、RViz、robot_state_publisher 和 Pinocchio。</p></div>
    <div className="step-card"><span className="step-mini">1.3</span><strong>克隆控制器仓库</strong><p>默认使用 Seeed-Projects 仓库；如需测试新功能，可使用开发仓库。</p></div>
    <div className="step-card"><span className="step-mini">1.4</span><strong>安装 MotorBridge</strong><p>在 ROS2 节点使用的 Python 环境中安装 MotorBridge。</p></div>
    <div className="step-card"><span className="step-mini">1.5</span><strong>加入底层 SDK</strong><p>将 reBotArm_control_py 克隆到 third_party，供 ROS2 控制器调用。</p></div>
    <div className="step-card"><span className="step-mini">1.6</span><strong>构建并 source</strong><p>使用 colcon 构建，每次运行 ROS2 命令前 source install/setup.bash。</p></div>
  </div>

  <details className="content-details" open>
    <summary>Step 1.1 根据 Ubuntu 版本安装 ROS2</summary>
    <div className="link-grid">
      <a href="https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html" target="_blank">ROS2 Jazzy Ubuntu 安装文档</a>
      <a href="https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html" target="_blank">ROS2 Humble Ubuntu 安装文档</a>
    </div>
    <div className="tip-card">
      <strong>版本选择规则</strong>
      <span>Ubuntu 24.04 使用 ROS2 Jazzy；Ubuntu 22.04 使用 ROS2 Humble。</span>
    </div>
  </details>

  <details className="content-details" open>
    <summary>Step 1.2 安装构建工具和 ROS 依赖</summary>
    <pre><code>{`sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-jazzy-control-msgs \
  ros-jazzy-trajectory-msgs \
  ros-jazzy-tf-transformations \
  ros-jazzy-robot-state-publisher \
  ros-jazzy-rviz2 \
  ros-jazzy-pinocchio

source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"`}</code></pre>
    <p>如果使用 ROS2 Humble，请将 <code>{`ros-jazzy-*`}</code> 替换为 <code>{`ros-humble-*`}</code>，并 source <code>{`/opt/ros/humble/setup.bash`}</code>。</p>
  </details>

  <details className="content-details" open>
    <summary>Step 1.3 克隆 ROS2 控制器仓库</summary>
    <pre><code>{`git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
    <p>如果需要测试开发分支或新功能，也可以使用：</p>
    <pre><code>{`git clone https://github.com/EclipseaHime017/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.4 安装 MotorBridge</summary>
    <pre><code>{`python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.5 加入底层 SDK</summary>
    <pre><code>{`mkdir -p third_party
git clone https://github.com/vectorBH6/reBotArm_control_py.git third_party/reBotArm_control_py`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.6 构建工作空间</summary>
    <pre><code>{`source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash

ros2 pkg executables rebotarmcontroller`}</code></pre>
    <p>期望至少看到如下可执行入口：</p>
    <pre><code>{`rebotarmcontroller reBotArmController
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose`}</code></pre>
  </details>
</section>

<section id="bringup" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>启动机械臂控制器</h2>
      <p>从最小硬件驱动开始。确认通信稳定后，再打开 RViz 可视化。</p>
    </div>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>启动前安全检查</strong>
      <p>请清空机械臂工作空间 <strong>1 米范围内</strong> 的物品和人员，并确保 B601-DM 底座固定牢靠后再使能控制器。</p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card"><span className="step-mini">2.1</span><strong>source 工作空间</strong><p>每个新终端都需要进入工作空间并 source install/setup.bash。</p></div>
    <div className="step-card"><span className="step-mini">2.2</span><strong>只启动 driver</strong><p>先用 driver launch 隔离硬件通信问题，不引入 RViz。</p></div>
    <div className="step-card"><span className="step-mini">2.3</span><strong>启动完整 bringup</strong><p>在 driver 稳定后，再启动控制器、robot_state_publisher 和可选 RViz。</p></div>
    <div className="step-card"><span className="step-mini">2.4</span><strong>验证 joint states</strong><p>发送任何运动命令前，先读取一次 /rebotarm/joint_states。</p></div>
  </div>

  <div className="command-card">
    <h3>source 工作空间</h3>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash`}</code></pre>
  </div>

  <div className="command-card">
    <h3>只启动控制节点</h3>
    <pre><code>{`ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0`}</code></pre>
  </div>

  <div className="command-card">
    <h3>启动完整系统但不打开 RViz</h3>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0`}</code></pre>
  </div>

  <div className="command-card">
    <h3>启动并打开 RViz 可视化</h3>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0 use_rviz:=true`}</code></pre>
  </div>

  <details className="content-details">
    <summary>RViz 视角调整建议</summary>
    <ul>
      <li>将 <code>{`Fixed Frame`}</code> 设置为 <code>{`base_link`}</code>。</li>
      <li>将 <code>{`Target Frame`}</code> 设置为 <code>{`base_link`}</code>。</li>
      <li>如果模型太小，可将 <code>{`Distance`}</code> 调整到 <code>{`1.0`}</code> 或 <code>{`1.5`}</code> 左右。</li>
      <li>使用鼠标滚轮缩放，并检查各关节状态是否正确。</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>命名空间配置</summary>
    <p>默认命名空间为 <code>{`/rebotarm`}</code>。如果需要多机械臂，可以在 launch 时修改命名空间：</p>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py arm_namespace:=left_arm`}</code></pre>
  </details>
</section>

<section id="api" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>验证 ROS2 API</h2>
      <p>先从只读 topic 和安全 service 开始，再测试会驱动机械臂运动的 action。</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>状态 Topic</b><span>优先测试。它们只读，可用于确认控制器已经启动并发布状态。</span></div>
    <div className="module-summary-card"><b>Service</b><span>用于 enable、disable、safe home、set zero、夹爪控制和重力补偿 start / stop。</span></div>
    <div className="module-summary-card"><b>Action</b><span>用于末端 pose、关节轨迹和夹爪动作。Action 会移动机械臂，请谨慎测试。</span></div>
  </div>

  <details className="content-details" open>
    <summary>状态 Topic</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>API</th><th>类型</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td><code>{`/rebotarm/joint_states`}</code></td><td><code>{`sensor_msgs/msg/JointState`}</code></td><td>6 轴关节位置、速度和力矩</td></tr>
          <tr><td><code>{`/rebotarm/arm_status`}</code></td><td><code>{`rebotarm_msgs/msg/ArmStatus`}</code></td><td>控制模式、使能状态、状态机和错误码</td></tr>
          <tr><td><code>{`/rebotarm/joints/&lt;joint&gt;/state`}</code></td><td><code>{`rebotarm_msgs/msg/JointMotorState`}</code></td><td>单关节电机状态</td></tr>
          <tr><td><code>{`/rebotarm/gripper/state`}</code></td><td><code>{`rebotarm_msgs/msg/JointMotorState`}</code></td><td>夹爪电机状态</td></tr>
        </tbody>
      </table>
    </div>
    <pre><code>{`ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once`}</code></pre>
  </details>

  <details className="content-details">
    <summary>常用 Service</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>API</th><th>类型</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td><code>{`/rebotarm/enable`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>使能机械臂</td></tr>
          <tr><td><code>{`/rebotarm/disable`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>失能机械臂</td></tr>
          <tr><td><code>{`/rebotarm/safe_home`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>返回安全零位</td></tr>
          <tr><td><code>{`/rebotarm/set_mode`}</code></td><td><code>{`rebotarm_msgs/srv/SetMode`}</code></td><td>切换 <code>{`mit`}</code>、<code>{`pos_vel`}</code> 或 <code>{`vel`}</code> 模式</td></tr>
          <tr><td><code>{`/rebotarm/set_zero`}</code></td><td><code>{`rebotarm_msgs/srv/SetZero`}</code></td><td>设置全部或单个关节零点</td></tr>
          <tr><td><code>{`/rebotarm/move_to_pose_ik`}</code></td><td><code>{`rebotarm_msgs/srv/MoveToPoseIK`}</code></td><td>IK 预检查与目标关节角求解</td></tr>
          <tr><td><code>{`/rebotarm/gripper/set`}</code></td><td><code>{`rebotarm_msgs/srv/SetGripper`}</code></td><td>设置夹爪电机位置，单位 rad</td></tr>
          <tr><td><code>{`/rebotarm/gravity_compensation/start`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>启动重力补偿</td></tr>
          <tr><td><code>{`/rebotarm/gravity_compensation/stop`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>停止重力补偿</td></tr>
        </tbody>
      </table>
    </div>
  </details>

  <details className="content-details">
    <summary>运动 Action</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>API</th><th>类型</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td><code>{`/rebotarm/move_to_pose`}</code></td><td><code>{`rebotarm_msgs/action/MoveToPose`}</code></td><td>末端位姿移动</td></tr>
          <tr><td><code>{`/rebotarm/follow_joint_trajectory`}</code></td><td><code>{`control_msgs/action/FollowJointTrajectory`}</code></td><td>标准关节轨迹兼容入口</td></tr>
          <tr><td><code>{`/rebotarm/gripper/command`}</code></td><td><code>{`control_msgs/action/GripperCommand`}</code></td><td>标准夹爪 action</td></tr>
        </tbody>
      </table>
    </div>
  </details>
</section>

<section id="examples" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>运行基础控制示例</h2>
      <p>请在控制器已经运行、joint state 反馈正常后，再执行下面命令。</p>
    </div>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>运动前安全检查</strong>
      <p>使用较小目标值、较长 duration，并保持工作空间清空。随时准备停止控制器。</p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card"><span className="step-mini">4.1</span><strong>使能机械臂</strong><p>只有在工作空间清空、joint state 正常后才执行 enable。</p></div>
    <div className="step-card"><span className="step-mini">4.2</span><strong>移动到末端位姿</strong><p>第一次使用靠近当前位置的保守目标。</p></div>
    <div className="step-card"><span className="step-mini">4.3</span><strong>发送关节目标</strong><p>使用较小弧度值，并设置较长 time_from_start。</p></div>
    <div className="step-card"><span className="step-mini">4.4</span><strong>安全回零并失能</strong><p>每次测试结束后回到 safe home，并 disable 机械臂。</p></div>
  </div>

  <details className="content-details" open>
    <summary>4.1 使能机械臂</summary>
    <pre><code>{`ros2 service call /rebotarm/enable std_srvs/srv/Trigger`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.2 移动到末端 Pose</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.3 发送关节目标</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.4 安全回零并失能</summary>
    <pre><code>{`ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger`}</code></pre>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Examples</span>
    <h2>Demo 命令</h2>
    <p>下面示例假设 <code>{`reBotArmController`}</code> 已经运行。</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>关节运动</b><span>向所有关节或指定关节发送弧度目标。</span></div>
    <div className="module-summary-card"><b>末端 Pose</b><span>使用 SDK pose controller 将 TCP 移动到指定笛卡尔位姿。</span></div>
    <div className="module-summary-card"><b>重力补偿</b><span>通过 ROS2 节点启动重力补偿，并通过 service 安全停止。</span></div>
    <div className="module-summary-card"><b>交互式夹爪</b><span>通过终端交互循环打开和闭合夹爪。</span></div>
  </div>

  <details className="content-details" open>
    <summary>关节运动示例</summary>
    <pre><code>{`ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0

ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0`}</code></pre>
  </details>

  <details className="content-details">
    <summary>末端 Pose 示例</summary>
    <pre><code>{`ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0`}</code></pre>
  </details>

  <details className="content-details">
    <summary>重力补偿示例</summary>
    <pre><code>{`ros2 run rebotarmcontroller GravityCompensation`}</code></pre>
    <p>按下 <code>{`Ctrl+C`}</code> 后，脚本会按顺序调用：</p>
    <ol>
      <li><code>{`/rebotarm/gravity_compensation/stop`}</code></li>
      <li><code>{`/rebotarm/safe_home`}</code></li>
      <li><code>{`/rebotarm/disable`}</code></li>
    </ol>
  </details>

  <details className="content-details">
    <summary>交互式夹爪示例</summary>
    <pre><code>{`ros2 run rebotarmcontroller GripperControl

# o / open    打开夹爪
# c / close   闭合夹爪
# q / quit    退出`}</code></pre>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Configuration</span>
    <h2>配置文件与低层 Topic</h2>
    <p>
      默认配置文件位于 <code>{` src/rebotarm_bringup/config/`}</code>。
      应用层控制优先使用 service 和 action；低层电机 topic 主要用于调试。
    </p>
  </div>

  <div className="two-col">
    <div className="info-card">
      <h3>配置文件</h3>
      <ul>
        <li><code>{`arm.yaml`}</code>：6 个机械臂关节的电机、反馈 ID 与控制参数</li>
        <li><code>{`gripper.yaml`}</code>：夹爪电机 ID、反馈 ID、厂商和控制参数</li>
        <li><code>{`driver_params.yaml`}</code>：ROS 参数示例</li>
      </ul>
    </div>
    <div className="info-card">
      <h3>常用 launch 参数</h3>
      <ul>
        <li><code>{`channel`}</code>：串口，例如 <code>{`/dev/ttyACM0`}</code></li>
        <li><code>{`joint_state_rate`}</code>：<code>{`/rebotarm/joint_states`}</code> 发布频率</li>
        <li><code>{`cmd_arbitration`}</code>：<code>{`reject`}</code> 或 <code>{`preempt`}</code></li>
        <li><code>{`arm_namespace`}</code>：命名空间前缀，默认 <code>{`rebotarm`}</code></li>
        <li><code>{`use_rviz`}</code>：是否启动 RViz</li>
      </ul>
    </div>
  </div>

  <div className="callout danger">
    <strong>低层 topic 仅用于调试：</strong>它们不会执行 IK、轨迹规划或 URDF 限位检查。应用层运动建议优先使用 <code>{`/move_to_pose`}</code>、<code>{`/follow_joint_trajectory`}</code> 和 <code>{`/gripper/set`}</code>。
  </div>
</section>

<section id="moveit" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>使用 MoveIt 2</h2>
      <p>
        MoveIt 2 提供逆运动学、碰撞检测、轨迹规划和轨迹执行能力。请先在仿真环境中验证，再连接真实硬件。
      </p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card"><span className="step-mini">5.1</span><strong>安装 MoveIt 包</strong><p>安装当前 ROS 发行版对应的 MoveIt、ros2_control、controllers 和 xacro 包。</p></div>
    <div className="step-card"><span className="step-mini">5.2</span><strong>构建并验证 demo</strong><p>重新构建工作空间，确认 MoveIt 包和 demo 可执行入口存在。</p></div>
    <div className="step-card"><span className="step-mini">5.3</span><strong>先运行仿真</strong><p>使用 MoveIt demo launch 和模拟硬件，在 RViz 中检查运动。</p></div>
    <div className="step-card"><span className="step-mini">5.4</span><strong>接入真实硬件</strong><p>先启动硬件 driver，再启动 hardware MoveIt 环境，并在执行前检查规划路径。</p></div>
    <div className="step-card"><span className="step-mini">5.5</span><strong>运行应用 demo</strong><p>确认 frame、limit 和 gripper 参数后，再尝试 draw-square 与 pick-place。</p></div>
  </div>

  <details className="content-details" open>
    <summary>5.1 安装 MoveIt 2 相关包</summary>
    <pre><code>{`sudo apt update
sudo apt install -y \
  ros-\${ROS_DISTRO}-moveit \
  ros-\${ROS_DISTRO}-moveit-configs-utils \
  ros-\${ROS_DISTRO}-moveit-kinematics \
  ros-\${ROS_DISTRO}-moveit-planners-ompl \
  ros-\${ROS_DISTRO}-moveit-simple-controller-manager \
  ros-\${ROS_DISTRO}-ros2-control \
  ros-\${ROS_DISTRO}-ros2-controllers \
  ros-\${ROS_DISTRO}-xacro`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>5.2 重新构建并验证 MoveIt 包</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash

ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos`}</code></pre>
    <p>期望包含：</p>
    <pre><code>{`rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>5.3 在仿真中使用 MoveIt</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py

# 不启动 RViz：
ros2 launch rebotarm_moveit_config demo.launch.py use_rviz:=false`}</code></pre>
  </details>

  <details className="content-details">
    <summary>5.4 使用 MoveIt 控制真实硬件</summary>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>硬件执行前安全检查</strong>
        <p>清空机械臂工作空间，在 RViz 中确认规划路径，并随时准备停止控制器。</p>
      </div>
    </div>
    <pre><code>{`ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0

# 另开终端：
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py`}</code></pre>
  </details>

  <details className="content-details">
    <summary>5.5 运行 draw-square demo</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py`}</code></pre>
    <p><code>{`draw_square`}</code> 会控制 <code>{`gripper_tcp`}</code> 遍历同一平面矩形的四个角点。默认参数位于 <code>{`src/rebotarm_moveit_demos/config/draw_square.yaml`}</code>。</p>
  </details>

  <details className="content-details">
    <summary>5.6 运行 pick-place demo</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py`}</code></pre>
    <p><code>{`pick_place`}</code> 使用 ready pose、物体尺寸、抓取 / 放置 TCP 姿态以及夹爪开闭位置，默认参数位于 <code>{`src/rebotarm_moveit_demos/config/pick_place.yaml`}</code>。</p>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>常见问题与解决方法</h2>
    <p>当 ROS2 无法打开设备、RViz 不显示模型或 MoveIt 无法执行时，可以先从本节排查。</p>
  </div>

  <div className="faq-grid">
    <details className="content-details" open>
      <summary>1. 启动时报 <code>{`open serial port /dev/ttyACM0 failed`}</code></summary>
      <p>默认串口不存在或设备名变化。先查看实际串口，再通过 <code>{`channel`}</code> 指定。</p>
      <pre><code>{`ls /dev/ttyACM*
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2. 启动时报 <code>{`Device or resource busy`}</code></summary>
      <p>串口被其他进程占用，例如之前的 ROS2 节点、SDK 示例或调试脚本没有退出。</p>
      <pre><code>{`ps aux | grep -E "reBotArmController|ros2|python"`}</code></pre>
    </details>

    <details className="content-details">
      <summary>3. 权限不足</summary>
      <p>将当前用户加入 <code>{`dialout`}</code> 组，或临时开放串口权限。</p>
      <pre><code>{`sudo usermod -a -G dialout $USER
sudo chmod 666 /dev/ttyACM0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>4. RViz 中不显示机器人模型</summary>
      <p>检查是否已经 source 工作空间，<code>{`Fixed Frame`}</code> 是否为 <code>{`base_link`}</code>，以及 <code>{`robot_state_publisher`}</code> 是否正常启动。</p>
    </details>

    <details className="content-details">
      <summary>5. 出现 FastDDS SHM port warning</summary>
      <p>通常是上一次 ROS2 进程异常退出后留下 FastDDS shared-memory 锁文件。</p>
      <pre><code>{`pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*

# 可选绕过：
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4`}</code></pre>
    </details>

    <details className="content-details">
      <summary>6. 找不到 <code>{`pinocchio`}</code></summary>
      <pre><code>{`sudo apt install -y ros-jazzy-pinocchio
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"`}</code></pre>
    </details>
  </div>
</section>

<section className="course-path-section section-card">
  <div className="section-title">
    <span>课程导链</span>
    <h2>reBot B601-DM 系列课程跳转</h2>
    <p>
      系列课程按照 Robotics Page 的顺序组织：快速入门 → LeRobot → Pinocchio → 视觉夹取 → ROS2。
      你可以通过下面的卡片跳转到任意模块。
    </p>
  </div>

  <div className="course-path-grid">
    <a className="course-path-item" href="/cn/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>快速入门</strong><span>完成开箱、接线、电源检查、驱动配置、零点校准和基础运动测试。</span></span>
      <span className="course-tag">Start here</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot 遥操作与数据采集</strong><span>完成主从遥操作、相机接入、数据集采集、训练和真实机械臂评估。</span></span>
      <span className="course-tag">Data collection</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio 运动学可视化</strong><span>理解机器人模型、坐标系、FK / IK、轨迹规划和重力补偿。</span></span>
      <span className="course-tag">Control</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>视觉夹取 Demo</strong><span>结合 RGB-D 感知、YOLO / OBB 或 GraspNet、手眼标定和真实物体抓取。</span></span>
      <span className="course-tag">Application</span>
    </a>
    <a className="course-path-item active" href="/cn/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 集成</strong><span>接入 ROS2、RViz、MoveIt 2、标准 service、action 和规划流程。</span></span>
      <span className="course-tag">当前文章</span>
    </a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>References</span>
    <h2>参考文档</h2>
  </div>
  <div className="reference-grid">
    <a href="https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/">reBot Arm B601-DM 快速入门</a>
    <a href="https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_lerobot/">reBot Arm B601-DM LeRobot 教程</a>
    <a href="https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_pinocchio_meshcat/">reBot Arm B601-DM Pinocchio 与 MeshCat</a>
    <a href="https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_grasping_demo/">reBot Arm B601-DM 视觉夹取 Demo</a>
    <a href="https://docs.ros.org/en/humble/">ROS2 Humble 文档</a>
    <a href="https://docs.ros.org/en/jazzy/">ROS2 Jazzy 文档</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py">reBotArm_control_py</a>
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

.doc-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr);
  gap: 1.5rem;
  padding: 2rem;
  margin: 1.5rem 0 1.25rem;
  border: 1px solid var(--rb-border);
  border-radius: 26px;
  background:
    radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%),
    radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%),
    linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92));
  box-shadow: var(--rb-shadow);
  overflow: hidden;
}

.eyebrow {
  display: inline-flex;
  margin-bottom: 0.6rem;
  color: var(--rb-primary);
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.doc-hero h2 {
  margin: 0 0 0.8rem;
  color: var(--rb-text);
  font-size: clamp(1.6rem, 3vw, 2.35rem);
  line-height: 1.18;
}

.doc-hero p {
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.2rem;
}

.hero-actions a {
  display: inline-flex;
  padding: 0.72rem 1rem;
  border-radius: 999px;
  text-decoration: none !important;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent));
  box-shadow: 0 12px 24px rgba(37,99,235,0.18);
}

.hero-actions a:nth-child(n+2) {
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  box-shadow: none;
}

.hero-card {
  position: relative;
  z-index: 1;
  display: grid;
  align-content: center;
  gap: 0.75rem;
  padding: 1.1rem;
  border-radius: 18px;
  background: rgba(255,255,255,0.78);
  border: 1px solid rgba(148,163,184,0.22);
  box-shadow: 0 10px 26px rgba(15,23,42,0.06);
  backdrop-filter: blur(10px);
}

.hero-card img {
  width: 100%;
  border-radius: 14px;
  border: 1px solid var(--rb-border);
}

.hero-card strong {
  color: var(--rb-text);
}

.hero-card span {
  color: var(--rb-muted);
  font-size: 0.92rem;
  line-height: 1.55;
}

.doc-nav {
  position: sticky;
  top: 0.75rem;
  z-index: 5;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.65rem;
  padding: 0.7rem;
  margin: 1.1rem 0 2rem;
  border-radius: 18px;
  background: rgba(255,255,255,0.88);
  border: 1px solid var(--rb-border);
  box-shadow: 0 12px 28px rgba(15,23,42,0.07);
  backdrop-filter: blur(14px);
}

.doc-nav a {
  text-align: center;
  padding: 0.72rem 0.7rem;
  border-radius: 13px;
  color: #334155;
  background: var(--rb-surface-soft);
  text-decoration: none !important;
  font-weight: 800;
  font-size: 0.88rem;
  transition: all 0.2s ease;
}

.doc-nav a:hover {
  color: var(--rb-primary);
  background: #fff;
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(37,99,235,0.12);
}

.section-card {
  margin: 1.6rem 0;
  padding: 1.45rem;
  border-radius: 22px;
  background: var(--rb-surface);
  border: 1px solid var(--rb-border);
  box-shadow: 0 10px 30px rgba(15,23,42,0.055);
}

.section-title {
  margin-bottom: 1rem;
}

.section-title span {
  color: var(--rb-primary);
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-title h2 {
  margin: 0.18rem 0 0.45rem;
  color: var(--rb-text);
}

.section-title p {
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}

.step-title-row {
  display: flex;
  align-items: flex-start;
  gap: 0.95rem;
  margin-bottom: 1rem;
}

.step-pill,
.step-mini {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent));
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37,99,235,0.22);
}

.step-pill {
  min-width: 4.6rem;
  height: 2.35rem;
}

.step-title-row h2 {
  margin: 0 0 0.35rem;
  color: var(--rb-text);
}

.step-title-row p {
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}

.step-card-grid,
.module-summary-grid,
.spec-card-grid,
.two-col,
.faq-grid,
.reference-grid {
  display: grid;
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}

.step-card-grid {
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}

.step-card-grid.small {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.module-summary-grid,
.two-col {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.spec-card-grid {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.faq-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.reference-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.step-card,
.module-summary-card,
.spec-card,
.info-card,
.content-details,
.tip-card,
.command-card,
.reference-grid a {
  padding: 1rem 1.05rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft));
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
  text-decoration: none !important;
}

.step-card {
  color: inherit;
  transition: all 0.2s ease;
}

.step-card:hover {
  transform: translateY(-2px);
  border-color: rgba(37,99,235,0.35);
  box-shadow: 0 16px 32px rgba(37,99,235,0.10);
}

.step-card.recommended {
  border-color: rgba(37, 99, 235, 0.42);
  background: linear-gradient(135deg, rgba(239, 246, 255, 0.92), rgba(240, 253, 250, 0.78));
}

.step-card .step-mini {
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 0.65rem;
  margin-bottom: 0.65rem;
  font-size: 0.86rem;
}

.step-card strong,
.module-summary-card b,
.spec-card strong,
.info-card h3,
.command-card h3 {
  display: block;
  color: var(--rb-text);
  margin: 0 0 0.35rem;
}

.step-card p,
.step-card span,
.module-summary-card span,
.spec-card span,
.info-card li,
.tip-card span {
  display: block;
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}

.step-card em {
  display: inline-flex;
  width: fit-content;
  margin-top: 0.75rem;
  padding: 0.32rem 0.62rem;
  border-radius: 999px;
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  font-style: normal;
  font-size: 0.78rem;
  font-weight: 850;
}

.command-card pre,
.content-details pre {
  margin: 0.75rem 0 0;
}

.content-details summary {
  cursor: pointer;
  color: var(--rb-text);
  font-weight: 850;
}

.callout {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface-soft);
  color: var(--rb-muted);
  line-height: 1.65;
}

.callout.warning {
  border-color: rgba(245, 158, 11, 0.35);
  background: #fffbeb;
  color: #92400e;
}

.callout.danger {
  border-color: rgba(239, 68, 68, 0.35);
  background: #fef2f2;
  color: #991b1b;
}

.link-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.link-grid a,
.reference-grid a {
  color: var(--rb-primary);
  font-weight: 800;
}

.table-wrap {
  overflow-x: auto;
}

.safety-alert {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: flex-start;
  margin: 1.2rem 0 1.6rem;
  padding: 1.05rem 1.15rem;
  border-radius: 18px;
  border: 1px solid rgba(239, 68, 68, 0.38);
  background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92));
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

.safety-alert-content p,
.safety-alert-content ul {
  margin: 0;
  color: #7f1d1d;
  line-height: 1.68;
}

.safety-alert-content ul {
  margin-top: 0.65rem;
  padding-left: 1.2rem;
}

.safety-alert-content li + li {
  margin-top: 0.35rem;
}

.safety-alert.compact {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  border-radius: 16px;
}

.course-path-section {
  margin-top: 2rem;
}

.course-path-grid {
  display: grid;
  gap: 0.85rem;
  margin-top: 1rem;
}

.course-path-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.95rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface);
  text-decoration: none !important;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}

.course-path-item.active {
  border-color: rgba(37, 99, 235, 0.45);
  background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.06));
}

.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.45rem;
  height: 2.45rem;
  border-radius: 999px;
  color: #fff;
  background: var(--rb-primary);
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37,99,235,0.24);
}

.course-path-copy strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.course-path-copy span {
  display: block;
  color: var(--rb-muted);
  line-height: 1.6;
}

.course-tag {
  justify-self: end;
  white-space: nowrap;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  border: 1px solid rgba(37,99,235,0.18);
  font-style: normal;
  font-weight: 800;
  font-size: 0.78rem;
}

html[data-theme='dark'] .rebot-page {
  --rb-bg: #111827;
  --rb-surface: #1f2023;
  --rb-surface-soft: #24262a;
  --rb-text: #f9fafb;
  --rb-muted: #a1a1aa;
  --rb-border: #343840;
  --rb-primary: #60a5fa;
  --rb-primary-soft: rgba(96,165,250,0.14);
  --rb-accent: #2dd4bf;
  --rb-shadow: 0 18px 42px rgba(0,0,0,0.34);
}

html[data-theme='dark'] .doc-hero {
  background:
    radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%),
    radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%),
    linear-gradient(135deg, #1f2023, #16181d);
}

html[data-theme='dark'] .hero-card,
html[data-theme='dark'] .doc-nav,
html[data-theme='dark'] .step-card,
html[data-theme='dark'] .module-summary-card,
html[data-theme='dark'] .spec-card,
html[data-theme='dark'] .info-card,
html[data-theme='dark'] .content-details,
html[data-theme='dark'] .tip-card,
html[data-theme='dark'] .command-card,
html[data-theme='dark'] .reference-grid a,
html[data-theme='dark'] .course-path-item {
  background: rgba(31, 32, 35, 0.86);
}

html[data-theme='dark'] .step-card.recommended,
html[data-theme='dark'] .course-path-item.active {
  background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12));
}

html[data-theme='dark'] .callout.warning {
  background: rgba(245, 158, 11, 0.12);
  color: #fde68a;
}

html[data-theme='dark'] .callout.danger {
  background: rgba(239, 68, 68, 0.12);
  color: #fecaca;
}

html[data-theme='dark'] .safety-alert {
  border-color: rgba(248, 113, 113, 0.42);
  background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18));
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

@media (max-width: 900px) {
  .doc-hero {
    grid-template-columns: 1fr;
  }

  .doc-nav {
    position: static;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .course-path-item {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .course-tag {
    grid-column: 2;
    justify-self: start;
  }
}

@media (max-width: 560px) {
  .doc-hero,
  .section-card {
    padding: 1.1rem;
    border-radius: 18px;
  }

  .doc-nav {
    grid-template-columns: 1fr;
  }

  .safety-alert {
    grid-template-columns: 1fr;
  }
}
`}</style>
