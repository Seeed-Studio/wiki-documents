---
description: 本教程介绍如何基于 reBot Arm B601-RS 搭建 ROS2 控制工作空间，完成 SocketCAN 连接、机械臂控制、RViz 可视化和 MoveIt 2 集成。
title: reBot Arm B601-RS ROS2 集成
keywords:
  - reBot Arm
  - B601-RS
  - ROS2
  - Humble
  - Jazzy
  - SocketCAN
  - RViz
  - MoveIt 2
  - 机械臂
  - 机器人
slug: /rebot_arm_b601_rs_ros2_integration
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip:
    - zh-CN
createdAt: '2026-06-10'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_ros2_integration/
---

# reBot Arm B601-RS ROS2 集成

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>用 SocketCAN、RViz 与 MoveIt 2 构建 B601-RS 的 ROS2 控制工作空间</h2>
    <p>
      本教程将 B601-RS 的底层控制能力接入 ROS2 工作流。你将依次完成 SocketCAN 启动、ROS2 工作空间构建、
      topic / service / action 验证、安全控制示例，以及从 MoveIt 2 仿真规划到真实机械臂执行的完整流程。
    </p>
    <div className="hero-actions">
      <a href="#quick-start">查看流程</a>
      <a href="#install">安装工作空间</a>
      <a href="#moveit">进入 MoveIt 2</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/ros2/MoveIt2_RS.gif" alt="reBot Arm B601-RS ROS2 Integration" />
    <strong>B601-RS · ROS2 / MoveIt 2</strong>
    <span>请先完成仿真验证。只有在 CAN、joint states 和规划轨迹都确认正常后，再执行真实硬件运动。</span>
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
      <li>运行 ROS2 action、MoveIt 真实执行、重力补偿、轨迹控制、遥操作或视觉抓取 Demo 前，请确保机械臂已固定牢靠。</li>
      <li>如出现异常运动、异响、抖动、线缆松动、电源接触不良或通信中断，请立即停止程序并断电检查。</li>
      <li>插拔电机线、CAN 线、PCAN-USB、XT30 或电源接口前，必须先断开电源。</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="quick navigation">
  <a href="#quick-start">流程</a>
  <a href="#overview">概览</a>
  <a href="#hardware">硬件</a>
  <a href="#install">安装</a>
  <a href="#bringup">启动</a>
  <a href="#api">API</a>
  <a href="#examples">示例</a>
  <a href="#moveit">MoveIt 2</a>
  <a href="#faq">FAQ</a>
  <a href="#course-path">课程导链</a>
</nav>

<section id="quick-start" className="section-card">
  <div className="section-title">
    <span>Start Here</span>
    <h2>推荐 ROS2 调试流程</h2>
    <p>建议按照下面顺序逐层验证：先确认硬件通信，再验证 ROS2 接口，最后再进入 MoveIt 2 规划和真实执行。这样更容易定位问题，也能降低误动作风险。</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#install"><span>Step 0</span><strong>完成 B601-RS 快速入门</strong><p>确认 48V 电源、PCAN-USB / SocketCAN、零点、MotorBridge 检查和基础运动测试都已经完成。</p><em>Required</em></a>
    <a className="path-card" href="#install"><span>Step 1</span><strong>安装 ROS2 并构建工作空间</strong><p>安装 ROS2 依赖、克隆控制器工作空间、安装 MotorBridge，并使用 colcon 构建。</p><em>Workspace</em></a>
    <a className="path-card" href="#bringup"><span>Step 2</span><strong>启动硬件驱动</strong><p>先启动底层驱动并验证 CAN 通信和 joint states，再打开 RViz 或 MoveIt。</p><em>Driver first</em></a>
    <a className="path-card" href="#api"><span>Step 3</span><strong>验证 ROS2 API</strong><p>先检查只读状态 topic，再测试安全 service，最后再执行 motion action。</p><em>Verification</em></a>
    <a className="path-card" href="#examples"><span>Step 4</span><strong>运行安全控制示例</strong><p>使用小位移、长时长和 safe home 命令验证运动方向和控制链路。</p><em>Safe motion</em></a>
    <a className="path-card" href="#moveit"><span>Step 5</span><strong>使用 MoveIt 2</strong><p>先在仿真中规划并检查轨迹，再谨慎切换到真实机械臂执行。</p><em>Advanced</em></a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Detailed Steps</span>
    <h2>Step-by-step ROS2 启动路径</h2>
    <p>本页面按渐进式 bring-up 方式组织，每一步只增加一层复杂度。</p>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>准备机械臂</strong><p>完成 B601-RS 快速入门，包括 48V 电源、接线、零点、PCAN-USB 和 MotorBridge 基础检查。</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>构建 ROS2 工作空间</strong><p>安装 ROS2 依赖、克隆工作空间、安装 MotorBridge、加入底层 SDK，并用 colcon 构建。</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>启动硬件驱动</strong><p>拉起 <code>{`can0`}</code>，启动 B601-RS driver，并确认 joint states 正常发布。</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>验证接口</strong><p>确认 topic、service、action、namespace、夹爪命令和 safe-home 行为。</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>运行安全示例</strong><p>使用保守的关节目标和末端目标，并设置较长执行时间。</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>MoveIt 2 规划</strong><p>先运行仿真，再连接真实硬件，并在执行前检查规划路径。</p></div>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>这个 ROS2 工作空间提供了什么</h2>
    <p>该工作空间将 B601-RS 的底层控制栈封装成标准 ROS2 接口，使机械臂可以接入 RViz、MoveIt 2 和更高层机器人应用。</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>标准 ROS2 接口</b><span>提供 <code>{`/rebotarm/joint_states`}</code>、<code>{`FollowJointTrajectory`}</code>、<code>{`MoveToPose`}</code> 等常用 topic 和 action。</span></div>
    <div className="module-summary-card"><b>SocketCAN 支持</b><span>B601-RS 通过 CAN 通信。默认通道为 <code>{`can0`}</code>，通信速率为 1 Mbps。</span></div>
    <div className="module-summary-card"><b>RViz 可视化</b><span>基于 URDF 模型和 joint states 查看机械臂状态，辅助排查启动和模型显示问题。</span></div>
    <div className="module-summary-card"><b>MoveIt 2 集成</b><span>支持 IK、碰撞检测、轨迹规划、仿真执行和真实硬件执行。</span></div>
  </div>
</section>

<section id="hardware" className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>规格参数与环境要求</h2>
    <p>构建 ROS2 工作空间前，请先确认硬件版本、通信方式和系统环境。</p>
  </div>

  <div className="spec-grid">
    <div className="spec-card"><b>机械臂型号</b><span>reBot Arm B601-RS</span></div>
    <div className="spec-card"><b>自由度</b><span>6-DOF + 夹爪</span></div>
    <div className="spec-card"><b>通信方式</b><span>CAN via SocketCAN</span></div>
    <div className="spec-card"><b>默认 CAN 通道</b><span><code>{`can0`}</code></span></div>
    <div className="spec-card"><b>默认控制模式</b><span><code>{`mit`}</code></span></div>
    <div className="spec-card"><b>推荐系统</b><span>Ubuntu 24.04 + ROS2 Jazzy + Python 3.12</span></div>
    <div className="spec-card"><b>参考系统</b><span>Ubuntu 22.04 + ROS2 Humble + Python 3.10</span></div>
    <div className="spec-card"><b>电源</b><span>B601-RS 使用 48V DC 电源</span></div>
  </div>

  <details className="content-details" open>
    <summary>材料清单（BOM）</summary>

    | 部件 | 数量 | 是否包含 |
    |---|---|---|
    | reBot Arm B601-RS 机械臂 | 1 | ✅ |
    | 夹爪 | 1 | ✅ |
    | CAN 适配器 | 1 | ✅ |
    | 电源适配器 | 1 | ✅ |
    | 通信线缆 | 1 | ✅ |
    | Ubuntu 主机 | 1 | 自备 |
  </details>

  <details className="content-details" open>
    <summary>接线与 CAN 检查</summary>

    <div className="step-card-grid compact-grid">
      <div className="step-card"><span className="step-mini">1</span><strong>连接 CAN 适配器</strong><p>将 CAN 适配器接入机械臂 CAN 总线。</p></div>
      <div className="step-card"><span className="step-mini">2</span><strong>连接夹爪</strong><p>将夹爪电机接入同一条 CAN 总线。</p></div>
      <div className="step-card"><span className="step-mini">3</span><strong>接通电源</strong><p>连接 48V 电源，并将 CAN 适配器连接到主机。</p></div>
      <div className="step-card"><span className="step-mini">4</span><strong>启动 CAN</strong><p>确认 CAN 接口存在，并将 bitrate 设置为 1 Mbps。</p></div>
    </div>

    <pre><code>{`ip -br link

sudo modprobe peak_usb
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0`}</code></pre>
  </details>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>安装 ROS2 并构建工作空间</h2>
      <p>安装与你的 Ubuntu 版本匹配的 ROS2 包，然后克隆、配置并构建 reBot ROS2 工作空间。</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">1.0</span><strong>完成快速入门</strong><p>在 ROS2 集成前，先完成基础安装、零点初始化和 PCAN-USB / SocketCAN 检查。</p></div>
    <div className="step-card"><span className="step-mini">1.1</span><strong>安装 ROS2</strong><p>Ubuntu 24.04 使用 Jazzy，Ubuntu 22.04 使用 Humble。</p></div>
    <div className="step-card"><span className="step-mini">1.2</span><strong>安装依赖</strong><p>安装 colcon、Git、control messages、trajectory messages、RViz、robot-state-publisher 和 Pinocchio。</p></div>
    <div className="step-card"><span className="step-mini">1.3</span><strong>克隆工作空间</strong><p>默认使用 Seeed-Projects 仓库；需要开发版本时可切换到开发仓库。</p></div>
    <div className="step-card"><span className="step-mini">1.4</span><strong>安装 MotorBridge</strong><p>安装 MotorBridge，让 ROS2 节点可以与底层电机接口通信。</p></div>
    <div className="step-card"><span className="step-mini">1.5</span><strong>colcon 构建</strong><p>构建并 source 工作空间，然后验证可执行入口。</p></div>
  </div>

  <details className="content-details" open>
    <summary>Step 1.0：完成 B601-RS 快速入门</summary>
    <p>开始 ROS2 集成前，请先完成 <a href="/cn/rebot_b601_rs_getting_started/">reBot Arm B601-RS 快速入门</a>，包括组装、电机 ID 配置、零点初始化、电源检查和 PCAN-USB / SocketCAN 设置。</p>
  </details>

  <details className="content-details" open>
    <summary>Step 1.1：安装适合系统版本的 ROS2</summary>
    <ul>
      <li>Ubuntu 24.04：ROS2 Jazzy</li>
      <li>Ubuntu 22.04：ROS2 Humble</li>
    </ul>
    <p>参考文档：<a href="https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html">ROS2 Jazzy 安装</a>、<a href="https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html">ROS2 Humble 安装</a> 和 <a href="/install_ros2_humble/">Seeed ROS2 Humble 安装教程</a>。</p>
  </details>

  <details className="content-details" open>
    <summary>Step 1.2：安装构建工具和 ROS 依赖</summary>
    <pre><code>{`sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-\${ROS_DISTRO}-control-msgs \
  ros-\${ROS_DISTRO}-trajectory-msgs \
  ros-\${ROS_DISTRO}-tf-transformations \
  ros-\${ROS_DISTRO}-robot-state-publisher \
  ros-\${ROS_DISTRO}-rviz2 \
  ros-\${ROS_DISTRO}-pinocchio

source /opt/ros/\${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.3：克隆代码仓库</summary>
    <p>优先使用 Seeed-Projects 官方仓库：</p>
    <pre><code>{`git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
    <p>也可以使用当前开发仓库：</p>
    <pre><code>{`git clone https://github.com/EclipseaHime017/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.4：安装 MotorBridge</summary>
    <pre><code>{`python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge

# Ubuntu 22.04 / ROS2 Humble 通常可以使用：
python3 -m pip install --user --index-url https://pypi.org/simple motorbridge`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.5：加入底层 SDK 并构建</summary>
    <pre><code>{`mkdir -p third_party
git clone https://github.com/vectorBH6/reBotArm_control_py.git third_party/reBotArm_control_py

source /opt/ros/\${ROS_DISTRO}/setup.bash
colcon build --symlink-install
source install/setup.bash

ros2 pkg executables rebotarmcontroller`}</code></pre>
    <p>期望看到 <code>{`reBotArmController`}</code>、<code>{`GravityCompensation`}</code>、<code>{`GripperControl`}</code>、<code>{`MoveTo`}</code> 和 <code>{`MoveToPose`}</code> 等入口。</p>
  </details>
</section>

<section id="bringup" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>运行前安全确认</strong>
      <p>请清空机械臂工作空间 <strong>1 米范围内</strong> 的贵重物品和无关人员。确认机械臂固定牢靠后，再运行本节程序。</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>启动 B601-RS 控制器</h2>
      <p>先验证通信和 joint states。硬件驱动稳定后，再添加 RViz 可视化。</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Driver only</b><span>首次硬件验证推荐使用，只启动控制器，不启动 RViz。</span></div>
    <div className="module-summary-card"><b>Full bringup</b><span>启动控制器、robot-state-publisher 和可选 RViz。</span></div>
    <div className="module-summary-card"><b>Namespace support</b><span>多机械臂或大型 ROS2 系统集成时，可以使用自定义 namespace。</span></div>
  </div>

  <details className="content-details" open>
    <summary>Step 2.1：确认 CAN 接口</summary>
    <pre><code>{`ip -details link show can0`}</code></pre>
    <p>如果 <code>{`can0`}</code> 没有启动，请重新配置：</p>
    <pre><code>{`sudo modprobe peak_usb
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 2.2：启动完整系统</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0`}</code></pre>
    <p>如果长期只使用 B601-RS，可以在 <code>{`src/rebotarm_bringup/config/rebotarm_hardware.yaml`}</code> 中设置 <code>{`default_model: rs`}</code>。之后可省略 <code>{`model:=rs`}</code>：</p>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py channel:=can0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 2.3：启动 RViz 可视化</summary>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=true`}</code></pre>
    <p>如果模型视角不方便，可以将 <code>{`Target Frame`}</code> 设置为 <code>{`base_link`}</code>，视角类型切换为 <code>{`Move Camera`}</code>，并将距离调整为 <code>{`1.0`}</code> 或 <code>{`1.5`}</code>。</p>
  </details>

  <details className="content-details" open>
    <summary>Step 2.4：只启动硬件控制节点</summary>
    <pre><code>{`ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0`}</code></pre>
    <p>建议通过 launch 文件启动，而不是直接运行节点，因为 launch 会传入 <code>{`rebotarm_bringup/config`}</code> 中的硬件配置。</p>
  </details>

  <details className="content-details">
    <summary>可选：修改命名空间</summary>
    <p>默认命名空间是 <code>{`/rebotarm`}</code>。多机械臂或系统集成时，可以传入自定义 namespace：</p>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 arm_namespace:=right_arm`}</code></pre>
    <p>例如，<code>{`/rebotarm/joint_states`}</code> 会变为 <code>{`/right_arm/joint_states`}</code>。</p>
  </details>
</section>

<section id="api" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>验证 ROS2 topics、services 和 actions</h2>
      <p>先做只读状态检查，再使用小范围、保守目标测试 service 和 action。</p>
    </div>
  </div>

  <div className="api-grid">
    <div className="api-card"><b>Status topic</b><code>{`/rebotarm/joint_states`}</code><span>6 轴关节位置、速度和力矩，包含 RViz 夹爪可视化关节。</span></div>
    <div className="api-card"><b>Status topic</b><code>{`/rebotarm/arm_status`}</code><span>控制模式、使能状态、状态机和错误码。</span></div>
    <div className="api-card"><b>Service</b><code>{`/rebotarm/enable`}</code><span>使能机械臂。</span></div>
    <div className="api-card"><b>Service</b><code>{`/rebotarm/disable`}</code><span>失能机械臂。</span></div>
    <div className="api-card"><b>Service</b><code>{`/rebotarm/safe_home`}</code><span>移动回安全零位。</span></div>
    <div className="api-card"><b>Action</b><code>{`/rebotarm/move_to_pose`}</code><span>末端位姿控制。</span></div>
    <div className="api-card"><b>Action</b><code>{`/rebotarm/follow_joint_trajectory`}</code><span>标准关节轨迹兼容入口。</span></div>
    <div className="api-card"><b>Action</b><code>{`/rebotarm/gripper/command`}</code><span>标准夹爪 action。</span></div>
  </div>

  <details className="content-details" open>
    <summary>读取状态 topic</summary>
    <pre><code>{`ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once`}</code></pre>
  </details>

  <details className="content-details">
    <summary>常用夹爪服务</summary>
    <pre><code>{`ros2 service call /rebotarm/gripper/open rebotarm_msgs/srv/GripperCommand "{}"
ros2 service call /rebotarm/gripper/close rebotarm_msgs/srv/GripperCommand "{}"
ros2 service call /rebotarm/gripper/set rebotarm_msgs/srv/SetGripper "{position: 5.0}"`}</code></pre>
  </details>
</section>

<section id="examples" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>运行前安全确认</strong>
      <p>请清空机械臂工作空间 <strong>1 米范围内</strong> 的贵重物品和无关人员。首次运动测试请使用小目标和长执行时间。</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>运行安全控制示例</h2>
      <p>下面所有示例都假设 B601-RS 控制器已经启动。</p>
    </div>
  </div>

  <div className="command-card">
    <h3>先启动控制器</h3>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0`}</code></pre>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">4.1</span><strong>使能机械臂</strong><p>只有在确认工作空间清空且机械臂固定牢靠后，才执行使能。</p></div>
    <div className="step-card"><span className="step-mini">4.2</span><strong>移动到小范围末端位姿</strong><p>首次测试使用保守目标，并将 duration 设置为至少 2 秒。</p></div>
    <div className="step-card"><span className="step-mini">4.3</span><strong>发送关节目标</strong><p>使用很小的关节偏移和较长时间，确认运动方向。</p></div>
    <div className="step-card"><span className="step-mini">4.4</span><strong>安全回零并失能</strong><p>调用 safe home，再失能机械臂。之后再进行接线或硬件调整。</p></div>
  </div>

  <details className="content-details" open>
    <summary>Step 4.1：使能机械臂</summary>
    <pre><code>{`ros2 service call /rebotarm/enable std_srvs/srv/Trigger`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 4.2：移动到末端 Pose</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"`}</code></pre>
    <p><code>{`move_to_pose`}</code> action 通过 SDK 末端控制器执行。B601-RS 的控制模式在 <code>{`rebotarm_hardware.yaml`}</code> 中默认为 <code>{`mit`}</code>。</p>
  </details>

  <details className="content-details" open>
    <summary>Step 4.3：发送关节目标</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 4.4：安全回零并失能</summary>
    <pre><code>{`ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger`}</code></pre>
  </details>

  <details className="content-details">
    <summary>更多 demo 命令</summary>
    <pre><code>{`# 关节移动示例，单位：rad
ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0

# 单关节移动
ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0

# 末端 Pose 示例
ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0

# 夹爪交互示例
ros2 run rebotarmcontroller GripperControl`}</code></pre>
  </details>

  <details className="content-details">
    <summary>重力补偿示例</summary>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>重力补偿安全确认</strong>
        <p>请扶稳机械臂、清空工作空间，并随时准备停止控制器。只有在零点和关节方向已经确认后，才可以测试重力补偿。</p>
      </div>
    </div>
    <pre><code>{`ros2 run rebotarmcontroller GravityCompensation`}</code></pre>
    <p>脚本会调用 <code>{`/rebotarm/enable`}</code>，启动重力补偿，并在 <code>{`Ctrl+C`}</code> 后依次调用 <code>{`/rebotarm/gravity_compensation/stop`}</code>、<code>{`/rebotarm/safe_home`}</code> 和 <code>{`/rebotarm/disable`}</code>。</p>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Configuration</span>
    <h2>关键配置文件</h2>
    <p>B601-RS ROS2 工作空间通过上层硬件配置文件选择 RS 型号，并覆盖底层 SDK 参数。</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b><code>{`rebotarm_hardware.yaml`}</code></b><span>B601-RS 的硬件选择和 SDK 参数覆盖。</span></div>
    <div className="module-summary-card"><b><code>{`driver_params.yaml`}</code></b><span>driver launch 工作流的 ROS 参数示例。</span></div>
    <div className="module-summary-card"><b><code>{`default_model: rs`}</code></b><span>未显式传入 <code>{`model:=...`}</code> 时，自动使用 RS 配置。</span></div>
  </div>

  <details className="content-details" open>
    <summary>常用 launch 参数</summary>

    | 参数 | 默认值 | 说明 |
    |---|---|---|
    | <code>{`hardware_config`}</code> | 内置硬件配置 | ROS2 上层硬件配置路径 |
    | <code>{`model`}</code> | <code>{`rs`}</code> | 选择 B601-RS 配置 |
    | <code>{`channel`}</code> | <code>{`can0`}</code> | SocketCAN 通道 |
    | <code>{`joint_state_rate`}</code> | <code>{`100.0`}</code> | <code>{`/rebotarm/joint_states`}</code> 发布频率 |
    | <code>{`cmd_arbitration`}</code> | <code>{`reject`}</code> | 轨迹执行期间的关节命令仲裁策略 |
    | <code>{`arm_namespace`}</code> | <code>{`rebotarm`}</code> | ROS 命名空间前缀 |
    | <code>{`frame_id`}</code> | <code>{`base_link`}</code> | 机械臂基座坐标系 |
    | <code>{`ee_frame_id`}</code> | <code>{`gripper_end`}</code> | 末端坐标系 |
    | <code>{`use_rviz`}</code> | <code>{`false`}</code> | 是否启动 bringup RViz |
    | <code>{`disable_after_safe_home`}</code> | <code>{`true`}</code> | safe home 完成后是否失能电机 |
  </details>

  <details className="content-details">
    <summary>低层 command topic</summary>
    <p>低层 topic 仅用于调试，不做 IK、轨迹规划或 URDF 限位检查。</p>

    | API | 类型 | 说明 |
    |---|---|---|
    | <code>{`/rebotarm/joints/<joint>/cmd/mit`}</code> | <code>{`rebotarm_msgs/msg/JointMitCmd`}</code> | 单关节 MIT raw command |
    | <code>{`/rebotarm/joints/<joint>/cmd/pos_vel`}</code> | <code>{`rebotarm_msgs/msg/JointPosVelCmd`}</code> | 单关节位置速度 raw command |
    | <code>{`/rebotarm/gripper/cmd/mit`}</code> | <code>{`rebotarm_msgs/msg/JointMitCmd`}</code> | 夹爪 MIT raw command |
    | <code>{`/rebotarm/gripper/cmd/pos_vel`}</code> | <code>{`rebotarm_msgs/msg/JointPosVelCmd`}</code> | 夹爪位置速度 raw command |
  </details>
</section>

<section id="moveit" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>使用 MoveIt 2 进行规划和执行</h2>
      <p>MoveIt 2 负责 IK、碰撞检测、轨迹规划和执行。请始终先在仿真中验证，再接入真实硬件。</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">5.1</span><strong>安装 MoveIt 包</strong><p>安装 MoveIt、ros2_control、controller managers、OMPL planners 和 xacro。</p></div>
    <div className="step-card"><span className="step-mini">5.2</span><strong>重新构建并验证</strong><p>重新构建工作空间，确认 MoveIt 包和 demo 入口可用。</p></div>
    <div className="step-card"><span className="step-mini">5.3</span><strong>先运行仿真</strong><p>使用虚拟硬件启动 MoveIt demo，并在 RViz 中检查规划路径。</p></div>
    <div className="step-card"><span className="step-mini">5.4</span><strong>接入真实硬件</strong><p>先启动硬件 driver，再启动 hardware MoveIt launch 文件。</p></div>
    <div className="step-card"><span className="step-mini">5.5</span><strong>谨慎运行 demo</strong><p>只有在确认轨迹安全后，才运行 draw-square 或 pick-place。</p></div>
  </div>

  <details className="content-details" open>
    <summary>Step 5.1：安装 MoveIt 环境</summary>
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
    <summary>Step 5.2：重新构建并验证包</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash

ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos`}</code></pre>
    <p>期望至少看到 <code>{`draw_square`}</code> 和 <code>{`pick_place`}</code>。</p>
  </details>

  <details className="content-details" open>
    <summary>Step 5.3：在仿真中使用 MoveIt</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs

# 不启动 RViz：
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs use_rviz:=false`}</code></pre>
    <p>该命令会启动 <code>{`move_group`}</code>、<code>{`robot_state_publisher`}</code>、<code>{`ros2_control_node`}</code>、关节控制器、夹爪控制器和带 MoveIt MotionPlanning 插件的 RViz。</p>
  </details>

  <details className="content-details" open>
    <summary>Step 5.4：在真实硬件中使用 MoveIt</summary>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>MoveIt 真实硬件安全确认</strong>
        <p>请清空工作空间，在 RViz 中确认规划路径，并在执行任何真实运动前准备好停止控制器。</p>
      </div>
    </div>
    <pre><code>{`# Terminal 1：硬件驱动
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0

# Terminal 2：MoveIt 硬件环境
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py model:=rs`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 5.5：运行 draw-square demo</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs`}</code></pre>
    <p>draw-square demo 会让 <code>{`gripper_tcp`}</code> 依次经过同一平面矩形的四个角点。默认参数位于 <code>{`src/rebotarm_moveit_demos/config/draw_square_rs.yaml`}</code>。</p>
  </details>

  <details className="content-details" open>
    <summary>Step 5.6：运行 pick-place demo</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py model:=rs`}</code></pre>
    <p>pick-place demo 会在规划场景中添加物体、打开夹爪、移动到抓取位、闭合夹爪、移动到放置位并释放物体。默认参数位于 <code>{`src/rebotarm_moveit_demos/config/pick_place_rs.yaml`}</code>。</p>
  </details>

  <details className="content-details">
    <summary>MoveIt 配置文件</summary>

    | 文件 | 说明 |
    |---|---|
    | <code>{`rebotarm_moveit_config/config/rebotarm_rs.urdf.xacro`}</code> | MoveIt 使用的 B601-RS 机器人模型，包含夹爪和 <code>{`gripper_tcp`}</code> |
    | <code>{`rebotarm_moveit_config/config/rebotarm_rs.ros2_control.xacro`}</code> | 仿真环境使用的 ros2_control mock hardware 描述 |
    | <code>{`rebotarm_moveit_config/config/rebotarm_rs.srdf`}</code> | MoveIt group、end effector、默认状态和语义配置 |
    | <code>{`rebotarm_moveit_config/config/kinematics.yaml`}</code> | IK solver 配置 |
    | <code>{`rebotarm_moveit_config/config/joint_limits.yaml`}</code> | MoveIt 规划使用的关节限位 |
    | <code>{`rebotarm_moveit_config/config/ompl_planning.yaml`}</code> | OMPL planner 参数 |
    | <code>{`rebotarm_moveit_config/config/moveit_controllers.yaml`}</code> | 仿真环境 trajectory execution controller 配置 |
    | <code>{`rebotarm_moveit_config/config/moveit_hardware_controllers.yaml`}</code> | 真实硬件 trajectory execution controller 配置 |
    | <code>{`rebotarm_moveit_demos/config/draw_square_rs.yaml`}</code> | draw-square demo 参数 |
    | <code>{`rebotarm_moveit_demos/config/pick_place_rs.yaml`}</code> | pick-place demo 参数 |
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>常见问题</h2>
    <p>大多数 RS ROS2 问题来自 CAN 接口状态、工作空间未 source、型号选择错误、残留 ROS2 进程或 MoveIt 目标配置不合理。</p>
  </div>

  <details className="content-details" open>
    <summary>1. 启动时报 <code>{`socketcan write failed: Network is down`}</code></summary>
    <p>这说明 CAN 接口还没有启动。</p>
    <pre><code>{`ip -details link show can0

sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
  </details>

  <details className="content-details">
    <summary>2. 找不到 <code>{`can0`}</code></summary>
    <pre><code>{`ip -br link
sudo modprobe peak_usb
ip -br link

# 如果接口是 can1，启动时改为：
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can1`}</code></pre>
  </details>

  <details className="content-details">
    <summary>3. RViz 中不显示机器人模型</summary>
    <ul>
      <li>确认已经 source 工作空间：<code>{`source install/setup.bash`}</code>。</li>
      <li>确认 <code>{`Fixed Frame`}</code> 设置为 <code>{`base_link`}</code>。</li>
      <li>确认 <code>{`robot_state_publisher`}</code> 已正常启动。</li>
      <li>确认 URDF mesh 路径以 <code>{`package://rebotarm_bringup/description/...`}</code> 开头。</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>4. MoveIt 规划失败</summary>
    <ul>
      <li>确认 <code>{`move_group`}</code> 正常运行。</li>
      <li>确认当前 joint state 不是过期数据。</li>
      <li>确认目标点在机械臂可达空间内。</li>
      <li>确认目标姿态不会导致腕部或夹爪碰撞。</li>
      <li>先在 RViz 中手动规划，再运行 demo。</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>5. 出现 FastDDS SHM 端口提示</summary>
    <p>如果 service 和 action 仍然正常响应，该提示通常不影响控制。需要清理 shared-memory 锁文件时：</p>
    <pre><code>{`pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*

# 可选临时绕过：
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4`}</code></pre>
  </details>

  <details className="content-details">
    <summary>6. 使用 Humble 时怎么办？</summary>
    <p>流程相同，只需要将 Jazzy 相关包替换为 Humble 包，source Humble 环境后重新构建工作空间。</p>
  </details>

  <details className="content-details">
    <summary>7. 找不到 <code>{`pinocchio`}</code></summary>
    <pre><code>{`sudo apt install -y ros-\${ROS_DISTRO}-pinocchio
source /opt/ros/\${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
python3 -c "import sys; print('\\n'.join(sys.path))"`}</code></pre>
    <p>source Jazzy 后，Python path 中应包含类似 <code>{`/opt/ros/jazzy/lib/python3.12/site-packages`}</code> 的路径。Humble 用户请将 <code>{`jazzy`}</code> 替换为 <code>{`humble`}</code>。</p>
  </details>
</section>

<section id="course-path" className="section-card course-path-section">
  <div className="section-title">
    <span>Continue Learning</span>
    <h2>reBot B601-RS 课程导链</h2>
    <p>建议按照以下顺序学习：快速入门 → LeRobot → Pinocchio → 视觉夹取 → ROS2。你可以通过下面链接在各模块之间跳转。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/cn/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>快速入门</strong><span>完成开箱、接线、48V 电源检查、PCAN-USB 配置、零点校准和首次运动测试。</span></span>
      <span className="course-tag">Start here</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot 遥操作与数据采集</strong><span>完成主从遥操作、相机接入、数据集录制和模仿学习任务准备。</span></span>
      <span className="course-tag">Data</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio 运动学可视化</strong><span>理解机器人模型、关节、坐标系、正逆运动学、轨迹和重力补偿。</span></span>
      <span className="course-tag">Control</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>视觉夹取 Demo</strong><span>结合 RGB-D 感知、手眼标定、YOLO / GraspNet 和抓取位姿生成完成真实物体夹取。</span></span>
      <span className="course-tag">Application</span>
    </a>
    <a className="course-path-item active" href="/cn/rebot_arm_b601_rs_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 集成</strong><span>将机械臂接入 ROS2、RViz、MoveIt 2、运动规划和更高层机器人工作流。</span></span>
      <span className="course-tag">当前文章</span>
    </a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>References</span>
    <h2>参考文档与技术支持</h2>
  </div>
  <div className="reference-grid">
    <a href="/cn/rebot_b601_rs_getting_started/">reBot Arm B601-RS 快速入门</a>
    <a href="https://docs.ros.org/en/humble/">ROS2 Humble 文档</a>
    <a href="https://docs.ros.org/en/jazzy/">ROS2 Jazzy 文档</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py">reBotArm_control_py</a>
    <a href="https://moveit.picknik.ai/main/index.html">MoveIt 2 文档</a>
    <a href="https://forum.seeedstudio.com/">Seeed Studio Forum</a>
    <a href="https://github.com/EclipseaHime017/reBotArmController_ROS2/issues">提交 Issue</a>
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
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
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
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(92px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.84rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .feature-grid, .checklist-grid, .step-card-grid, .module-summary-grid, .spec-grid, .api-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.path-card, .step-card, .module-summary-card, .spec-card, .api-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.path-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.path-card span, .step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.path-card strong, .step-card strong, .module-summary-card b, .spec-card b, .api-card b { color: var(--rb-text); font-size: 1rem; }
.path-card p, .path-card small, .step-card p, .step-card span, .module-summary-card span, .spec-card span, .api-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.path-card em { width: fit-content; margin-top: 0.2rem; padding: 0.32rem 0.62rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.compact-grid { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.content-details summary::after { content: "展开"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after { content: "收起"; }
.command-card { margin: 1rem 0; padding: 1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); }
.command-card h3 { margin-top: 0; color: var(--rb-text); }
.step-title-row { display: flex; gap: 0.95rem; align-items: flex-start; margin-bottom: 1rem; }
.step-pill { display: inline-flex; padding: 0.45rem 0.8rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); border: 1px solid rgba(37,99,235,0.18); font-weight: 900; white-space: nowrap; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; }
.reference-grid a { padding: 0.9rem 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: var(--rb-primary); text-decoration: none !important; font-weight: 800; }
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
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
pre { overflow-x: auto; border-radius: 14px; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .path-card, html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .api-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .command-card, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .path-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert { grid-template-columns: 1fr; } .step-title-row { display: grid; } }
`}</style>
