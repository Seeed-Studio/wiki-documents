---
description: This tutorial shows how to set up the ROS2 control workspace for the reBot Arm B601-RS, including SocketCAN connection, arm control, RViz visualization, and MoveIt 2 integration.
title: reBot Arm B601-RS ROS2 Integration
keywords:
  - reBot Arm
  - B601-RS
  - ROS2
  - Humble
  - Jazzy
  - SocketCAN
  - RViz
  - MoveIt 2
  - Robot Arm
  - Robotics
slug: /rebot_arm_b601_rs_ros2_integration
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-10'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/rebot_arm_b601_rs_ros2_integration/
---

# reBot Arm B601-RS ROS2 Integration

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Build a ROS2 control workspace for B601-RS with SocketCAN, RViz, and MoveIt 2</h2>
    <p>This guide turns the low-level B601-RS control stack into a ROS2 workflow. You will bring up SocketCAN, build the ROS2 workspace, verify topics and services, run safe control examples, and then move from MoveIt 2 simulation to real hardware execution.</p>
    <div className="hero-actions">
      <a href="#quick-start">View Workflow</a>
      <a href="#install">Install Workspace</a>
      <a href="#moveit">MoveIt 2</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/ros2/MoveIt2_RS.gif" alt="reBot Arm B601-RS ROS2 Integration" />
    <strong>B601-RS · ROS2 / MoveIt 2</strong>
    <span>Use simulation first. Execute on real hardware only after CAN, joint states, and planned trajectories are verified.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Warning: Clear the Robot Workspace Before Running</strong>
    <p>Before running any program that moves the robotic arm, clear all valuable items, fragile objects, tools, cables, and unrelated objects within a <strong>1-meter radius</strong> of the robot workspace. During debugging and operation, personnel must stay away from the robot motion range.</p>
    <ul>
      <li>Do not touch joints, motors, links, the gripper, or the end effector after the robotic arm is powered on.</li>
      <li>Before running ROS2 actions, MoveIt execution, gravity compensation, trajectory control, teleoperation, or visual grasping demos, make sure the arm is firmly fixed.</li>
      <li>If abnormal motion, noise, vibration, loose cables, poor power contact, or communication loss occurs, stop the program immediately and power off the system before inspection.</li>
      <li>Always power off the system before plugging or unplugging motor cables, CAN cables, PCAN-USB adapters, XT30 connectors, or power connectors.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="quick navigation">
  <a href="#quick-start">Workflow</a>
  <a href="#overview">Overview</a>
  <a href="#install">Install</a>
  <a href="#bringup">Bringup</a>
  <a href="#api">APIs</a>
  <a href="#examples">Examples</a>
  <a href="#moveit">MoveIt 2</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="quick-start" className="section-card">
  <div className="section-title">
    <span>Start Here</span>
    <h2>Recommended ROS2 bring-up workflow</h2>
    <p>Follow the order below to separate hardware communication, ROS2 interfaces, and MoveIt execution. This makes failures easier to diagnose and reduces the risk of unsafe robot motion.</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#install"><span>Step 0</span><strong>Finish the B601-RS quick start</strong><p>Confirm 48V power, PCAN-USB / SocketCAN, zero position, MotorBridge checks, and basic motion tests.</p><em>Required</em></a>
    <a className="path-card" href="#install"><span>Step 1</span><strong>Install ROS2 and build</strong><p>Install ROS2 dependencies, clone the controller workspace, install MotorBridge, and build with colcon.</p><em>Workspace</em></a>
    <a className="path-card" href="#bringup"><span>Step 2</span><strong>Bring up the driver</strong><p>Start with the hardware driver and verify CAN communication and joint states before adding RViz or MoveIt.</p><em>Driver first</em></a>
    <a className="path-card" href="#api"><span>Step 3</span><strong>Validate ROS2 APIs</strong><p>Check topics, services, and actions. Start with read-only status and safe services before motion actions.</p><em>Verification</em></a>
    <a className="path-card" href="#examples"><span>Step 4</span><strong>Run control examples</strong><p>Use small positions, long durations, and safe-home commands before trying larger trajectories.</p><em>Safe motion</em></a>
    <a className="path-card" href="#moveit"><span>Step 5</span><strong>Use MoveIt 2</strong><p>Plan in simulation, inspect the path in RViz, and only then execute on the real robotic arm.</p><em>Advanced</em></a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Detailed Steps</span>
    <h2>Step-by-step ROS2 bring-up path</h2>
    <p>This page is organized as a progressive bring-up workflow. Each step adds one layer of complexity.</p>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>Prepare the robot</strong><p>Complete the B601-RS quick start, including 48V power, wiring, zero position, PCAN-USB, and basic MotorBridge checks.</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>Build ROS2 workspace</strong><p>Install ROS2 packages, clone the workspace, install MotorBridge, add the low-level SDK, and build with colcon.</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>Start hardware driver</strong><p>Bring up <code>{`can0`}</code>, launch the B601-RS driver, and verify that joint states are published.</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>Validate interfaces</strong><p>Confirm topics, services, actions, namespace, gripper commands, and safe-home behavior.</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>Run safe examples</strong><p>Use conservative joint and pose targets with long durations before testing application demos.</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>MoveIt 2 planning</strong><p>Run simulation first, then connect real hardware and execute only after checking the planned path.</p></div>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>What this ROS2 workspace provides</h2>
    <p>The workspace wraps the B601-RS low-level control stack into standard ROS2 interfaces so the arm can be used with RViz, MoveIt 2, and task-level robotics applications.</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Standard ROS2 interfaces</b><span>Provides topics such as <code>{`/rebotarm/joint_states`}</code> and actions such as <code>{`FollowJointTrajectory`}</code> and <code>{`MoveToPose`}</code>.</span></div>
    <div className="module-summary-card"><b>SocketCAN support</b><span>B601-RS communicates through CAN. The default channel is <code>{`can0`}</code>, configured at 1 Mbps.</span></div>
    <div className="module-summary-card"><b>RViz visualization</b><span>Use the URDF model and joint states to inspect robot state and debug bring-up issues.</span></div>
    <div className="module-summary-card"><b>MoveIt 2 integration</b><span>Use MoveIt 2 for IK, collision checking, trajectory planning, simulated execution, and real hardware execution.</span></div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>Specifications and requirements</h2>
    <p>Confirm the B601-RS hardware and software requirements before building the ROS2 workspace.</p>
  </div>

  <div className="spec-grid">
    <div className="spec-card"><b>Robot Arm</b><span>reBot Arm B601-RS</span></div>
    <div className="spec-card"><b>Degrees of Freedom</b><span>6-DOF + Gripper</span></div>
    <div className="spec-card"><b>Communication</b><span>CAN via SocketCAN</span></div>
    <div className="spec-card"><b>Default CAN Channel</b><span><code>{`can0`}</code></span></div>
    <div className="spec-card"><b>Default Control Mode</b><span><code>{`mit`}</code></span></div>
    <div className="spec-card"><b>Recommended System</b><span>Ubuntu 24.04 + ROS2 Jazzy + Python 3.12</span></div>
    <div className="spec-card"><b>Reference System</b><span>Ubuntu 22.04 + ROS2 Humble + Python 3.10</span></div>
    <div className="spec-card"><b>Power</b><span>48V DC power supply for B601-RS</span></div>
  </div>

  <details className="content-details" open>
    <summary>Bill of Materials</summary>

    | Component | Quantity | Included |
    |---|---|---|
    | reBot Arm B601-RS Robotic Arm | 1 | ✅ |
    | Gripper | 1 | ✅ |
    | CAN Adapter | 1 | ✅ |
    | Power Adapter | 1 | ✅ |
    | Communication Cable | 1 | ✅ |
    | Ubuntu Host PC | 1 | Self-prepared |
  </details>

  <details className="content-details" open>
    <summary>Wiring and CAN check</summary>

    <div className="step-card-grid compact-grid">
      <div className="step-card"><span className="step-mini">1</span><strong>Connect CAN adapter</strong><p>Connect the CAN adapter to the robot arm CAN bus.</p></div>
      <div className="step-card"><span className="step-mini">2</span><strong>Connect the gripper</strong><p>Connect the gripper motor to the same CAN bus.</p></div>
      <div className="step-card"><span className="step-mini">3</span><strong>Power the arm</strong><p>Connect 48V power and connect the CAN adapter to the host PC.</p></div>
      <div className="step-card"><span className="step-mini">4</span><strong>Bring up CAN</strong><p>Confirm the CAN interface and set the bitrate to 1 Mbps.</p></div>
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
      <h2>Install ROS2 and build the workspace</h2>
      <p>Install the ROS2 packages that match your Ubuntu version, then clone, configure, and build the reBot ROS2 workspace.</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">1.0</span><strong>Complete B601-RS Quick Start</strong><p>Before ROS2 integration, complete the basic setup, zero-position initialization, and PCAN-USB / SocketCAN checks.</p></div>
    <div className="step-card"><span className="step-mini">1.1</span><strong>Install ROS2</strong><p>Use Jazzy on Ubuntu 24.04 or Humble on Ubuntu 22.04.</p></div>
    <div className="step-card"><span className="step-mini">1.2</span><strong>Install dependencies</strong><p>Install colcon, Git, control messages, trajectory messages, RViz, robot-state-publisher, and Pinocchio.</p></div>
    <div className="step-card"><span className="step-mini">1.3</span><strong>Clone workspace</strong><p>Use the Seeed-Projects repository by default. Development repositories can be used when needed.</p></div>
    <div className="step-card"><span className="step-mini">1.4</span><strong>Install MotorBridge</strong><p>Install MotorBridge so the ROS2 node can communicate with the low-level motor interface.</p></div>
    <div className="step-card"><span className="step-mini">1.5</span><strong>Build with colcon</strong><p>Build and source the workspace, then verify executable entries.</p></div>
  </div>

  <details className="content-details" open>
    <summary>Step 1.0: complete B601-RS quick start</summary>
    <p>Before starting ROS2 integration, complete the <a href="https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/">reBot Arm B601-RS Quick Start</a>, including assembly, motor ID configuration, zero-position initialization, power checks, and PCAN-USB / SocketCAN setup.</p>
  </details>

  <details className="content-details" open>
    <summary>Step 1.1: install ROS2 for your Ubuntu system</summary>
    <p>Use the ROS2 version that matches your Ubuntu distribution:</p>
    <ul>
      <li>Ubuntu 24.04: ROS2 Jazzy</li>
      <li>Ubuntu 22.04: ROS2 Humble</li>
    </ul>
    <p>References: <a href="https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html">ROS2 Jazzy Installation</a>, <a href="https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html">ROS2 Humble Installation</a>, and <a href="https://wiki.seeedstudio.com/install_ros2_humble/">Seeed ROS2 Humble Installation</a>.</p>
  </details>

  <details className="content-details" open>
    <summary>Step 1.2: install build tools and ROS dependencies</summary>
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
    <summary>Step 1.3: clone the code repository</summary>
    <p>Prefer the official Seeed-Projects repository:</p>
    <pre><code>{`git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
    <p>You can also use the current development repository:</p>
    <pre><code>{`git clone https://github.com/EclipseaHime017/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.4: install MotorBridge</summary>
    <pre><code>{`python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge

# On Ubuntu 22.04 / ROS2 Humble, you can usually use:
python3 -m pip install --user --index-url https://pypi.org/simple motorbridge`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.5: add the low-level SDK and build</summary>
    <pre><code>{`mkdir -p third_party
git clone https://github.com/vectorBH6/reBotArm_control_py.git third_party/reBotArm_control_py

source /opt/ros/\${ROS_DISTRO}/setup.bash
colcon build --symlink-install
source install/setup.bash

ros2 pkg executables rebotarmcontroller`}</code></pre>
    <p>Expected entries include <code>{`reBotArmController`}</code>, <code>{`GravityCompensation`}</code>, <code>{`GripperControl`}</code>, <code>{`MoveTo`}</code>, and <code>{`MoveToPose`}</code>.</p>
  </details>
</section>

<section id="bringup" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Safety Check Before Running</strong>
      <p>Clear all valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>Bring up the B601-RS controller</h2>
      <p>Start with communication and joint state verification. Add RViz only after the hardware driver is stable.</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Driver only</b><span>Best for first hardware verification because it starts the controller without RViz.</span></div>
    <div className="module-summary-card"><b>Full bringup</b><span>Starts the controller, robot-state-publisher, and optional RViz visualization.</span></div>
    <div className="module-summary-card"><b>Namespace support</b><span>Use a custom namespace when running multiple arms or integrating with larger ROS2 systems.</span></div>
  </div>

  <details className="content-details" open>
    <summary>Step 2.1: confirm CAN interface</summary>
    <pre><code>{`ip -details link show can0`}</code></pre>
    <p>If <code>{`can0`}</code> is not up, reconfigure it:</p>
    <pre><code>{`sudo modprobe peak_usb
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 2.2: start the full system</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0`}</code></pre>
    <p>If you only use B601-RS for a long time, you can set <code>{`default_model: rs`}</code> in <code>{`src/rebotarm_bringup/config/rebotarm_hardware.yaml`}</code>. Then you can launch with:</p>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py channel:=can0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 2.3: start RViz visualization</summary>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=true`}</code></pre>
    <p>If the model view is inconvenient, set <code>{`Target Frame`}</code> to <code>{`base_link`}</code>, change the view type to <code>{`Move Camera`}</code>, and adjust the distance to <code>{`1.0`}</code> or <code>{`1.5`}</code>.</p>
  </details>

  <details className="content-details" open>
    <summary>Step 2.4: start only the hardware control node</summary>
    <pre><code>{`ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0`}</code></pre>
    <p>Use the launch file rather than running the node directly, because the launch file passes the hardware configuration from <code>{`rebotarm_bringup/config`}</code>.</p>
  </details>

  <details className="content-details">
    <summary>Optional: change the namespace</summary>
    <p>The default namespace is <code>{`/rebotarm`}</code>. To run multiple arms or integrate with other ROS2 systems, pass a custom namespace:</p>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 arm_namespace:=right_arm`}</code></pre>
    <p>For example, <code>{`/rebotarm/joint_states`}</code> becomes <code>{`/right_arm/joint_states`}</code>.</p>
  </details>
</section>

<section id="api" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>Validate ROS2 topics, services, and actions</h2>
      <p>Start with read-only status checks. Then test services and actions with small, conservative targets.</p>
    </div>
  </div>

  <div className="api-grid">
    <div className="api-card"><b>Status topic</b><code>{`/rebotarm/joint_states`}</code><span>6-axis joint positions, velocities, and efforts, including visual gripper joints for RViz.</span></div>
    <div className="api-card"><b>Status topic</b><code>{`/rebotarm/arm_status`}</code><span>Control mode, enabled state, state machine, and error codes.</span></div>
    <div className="api-card"><b>Service</b><code>{`/rebotarm/enable`}</code><span>Enable the robotic arm.</span></div>
    <div className="api-card"><b>Service</b><code>{`/rebotarm/disable`}</code><span>Disable the robotic arm.</span></div>
    <div className="api-card"><b>Service</b><code>{`/rebotarm/safe_home`}</code><span>Move back to the safe home position.</span></div>
    <div className="api-card"><b>Action</b><code>{`/rebotarm/move_to_pose`}</code><span>End-effector pose motion.</span></div>
    <div className="api-card"><b>Action</b><code>{`/rebotarm/follow_joint_trajectory`}</code><span>Standard joint trajectory compatible entry point.</span></div>
    <div className="api-card"><b>Action</b><code>{`/rebotarm/gripper/command`}</code><span>Standard gripper action.</span></div>
  </div>

  <details className="content-details" open>
    <summary>Read status topics</summary>
    <pre><code>{`ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Common gripper services</summary>
    <pre><code>{`ros2 service call /rebotarm/gripper/open rebotarm_msgs/srv/GripperCommand "{}"
ros2 service call /rebotarm/gripper/close rebotarm_msgs/srv/GripperCommand "{}"
ros2 service call /rebotarm/gripper/set rebotarm_msgs/srv/SetGripper "{position: 5.0}"`}</code></pre>
  </details>
</section>

<section id="examples" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Safety Check Before Running</strong>
      <p>Clear all valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Use small targets and long durations for the first motion tests.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>Run safe control examples</h2>
      <p>All examples assume that the B601-RS controller is already running.</p>
    </div>
  </div>

  <div className="command-card">
    <h3>Start the controller first</h3>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0`}</code></pre>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">4.1</span><strong>Enable the arm</strong><p>Enable only after checking that the workspace is clear and the arm is firmly fixed.</p></div>
    <div className="step-card"><span className="step-mini">4.2</span><strong>Move to a small pose</strong><p>Use a conservative target position and a duration of at least 2 seconds for the first test.</p></div>
    <div className="step-card"><span className="step-mini">4.3</span><strong>Send a joint target</strong><p>Use a very small joint offset and a long duration to verify motion direction.</p></div>
    <div className="step-card"><span className="step-mini">4.4</span><strong>Return home</strong><p>Call safe home and then disable the arm before changing cables or hardware.</p></div>
  </div>

  <details className="content-details" open>
    <summary>Step 4.1: enable the robotic arm</summary>
    <pre><code>{`ros2 service call /rebotarm/enable std_srvs/srv/Trigger`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 4.2: move to an end-effector pose</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"`}</code></pre>
    <p>The <code>{`move_to_pose`}</code> action is executed by the SDK end-pose controller. The B601-RS control mode defaults to <code>{`mit`}</code> in <code>{`rebotarm_hardware.yaml`}</code>.</p>
  </details>

  <details className="content-details" open>
    <summary>Step 4.3: send a joint target</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 4.4: safe home and disable</summary>
    <pre><code>{`ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Additional demo commands</summary>
    <pre><code>{`# Joint motion example, unit: rad
ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0

# Single joint motion
ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0

# End-effector pose example
ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0

# Interactive gripper example
ros2 run rebotarmcontroller GripperControl`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Gravity compensation example</summary>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Gravity Compensation Safety Check</strong>
        <p>Hold the arm carefully, keep the workspace clear, and be prepared to stop the controller. Do not use gravity compensation until zero position and joint directions are verified.</p>
      </div>
    </div>
    <pre><code>{`ros2 run rebotarmcontroller GravityCompensation`}</code></pre>
    <p>The script calls <code>{`/rebotarm/enable`}</code>, starts gravity compensation, and on <code>{`Ctrl+C`}</code> calls <code>{`/rebotarm/gravity_compensation/stop`}</code>, <code>{`/rebotarm/safe_home`}</code>, and <code>{`/rebotarm/disable`}</code>.</p>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Configuration</span>
    <h2>Key configuration files</h2>
    <p>The B601-RS ROS2 workspace uses an upper-layer hardware configuration file to select the RS model and override SDK parameters.</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b><code>{`rebotarm_hardware.yaml`}</code></b><span>Hardware selection and SDK parameter overrides for B601-RS.</span></div>
    <div className="module-summary-card"><b><code>{`driver_params.yaml`}</code></b><span>ROS parameter examples for the driver launch workflow.</span></div>
    <div className="module-summary-card"><b><code>{`default_model: rs`}</code></b><span>Use RS automatically when <code>{`model:=...`}</code> is not explicitly passed.</span></div>
  </div>

  <details className="content-details" open>
    <summary>Common launch parameters</summary>

    | Parameter | Default | Description |
    |---|---|---|
    | <code>{`hardware_config`}</code> | Built-in hardware config | ROS2 upper-layer hardware configuration path |
    | <code>{`model`}</code> | <code>{`rs`}</code> | Selects the B601-RS configuration |
    | <code>{`channel`}</code> | <code>{`can0`}</code> | SocketCAN channel |
    | <code>{`joint_state_rate`}</code> | <code>{`100.0`}</code> | Publish rate of <code>{`/rebotarm/joint_states`}</code> |
    | <code>{`cmd_arbitration`}</code> | <code>{`reject`}</code> | Arm joint command arbitration during trajectory execution |
    | <code>{`arm_namespace`}</code> | <code>{`rebotarm`}</code> | ROS namespace prefix |
    | <code>{`frame_id`}</code> | <code>{`base_link`}</code> | Robot arm base frame |
    | <code>{`ee_frame_id`}</code> | <code>{`gripper_end`}</code> | End-effector frame |
    | <code>{`use_rviz`}</code> | <code>{`false`}</code> | Whether to start bringup RViz |
    | <code>{`disable_after_safe_home`}</code> | <code>{`true`}</code> | Whether motors are disabled after safe home completes |
  </details>

  <details className="content-details">
    <summary>Low-level command topics</summary>
    <p>Low-level topics are for debugging only. They do not perform IK, trajectory planning, or URDF limit checks.</p>

    | API | Type | Description |
    |---|---|---|
    | <code>{`/rebotarm/joints/<joint>/cmd/mit`}</code> | <code>{`rebotarm_msgs/msg/JointMitCmd`}</code> | Single-joint MIT raw command |
    | <code>{`/rebotarm/joints/<joint>/cmd/pos_vel`}</code> | <code>{`rebotarm_msgs/msg/JointPosVelCmd`}</code> | Single-joint position-velocity raw command |
    | <code>{`/rebotarm/gripper/cmd/mit`}</code> | <code>{`rebotarm_msgs/msg/JointMitCmd`}</code> | Gripper MIT raw command |
    | <code>{`/rebotarm/gripper/cmd/pos_vel`}</code> | <code>{`rebotarm_msgs/msg/JointPosVelCmd`}</code> | Gripper position-velocity raw command |
  </details>
</section>

<section id="moveit" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>Use MoveIt 2 for planning and execution</h2>
      <p>MoveIt 2 handles IK, collision checking, trajectory planning, and execution. Always validate in simulation before using real hardware.</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">5.1</span><strong>Install MoveIt packages</strong><p>Install MoveIt, ros2_control, controller managers, OMPL planners, and xacro.</p></div>
    <div className="step-card"><span className="step-mini">5.2</span><strong>Rebuild and verify</strong><p>Rebuild the workspace and confirm MoveIt packages and demo entry points are available.</p></div>
    <div className="step-card"><span className="step-mini">5.3</span><strong>Run simulation first</strong><p>Start the MoveIt demo with virtual hardware and inspect the plan in RViz.</p></div>
    <div className="step-card"><span className="step-mini">5.4</span><strong>Use real hardware</strong><p>Start the hardware driver first, then start the hardware MoveIt launch file.</p></div>
    <div className="step-card"><span className="step-mini">5.5</span><strong>Run demos carefully</strong><p>Run draw-square and pick-place only after the trajectory has been verified.</p></div>
  </div>

  <details className="content-details" open>
    <summary>Step 5.1: install MoveIt environment</summary>
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
    <summary>Step 5.2: rebuild and verify packages</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash

ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos`}</code></pre>
    <p>Expected entries include <code>{`draw_square`}</code> and <code>{`pick_place`}</code>.</p>
  </details>

  <details className="content-details" open>
    <summary>Step 5.3: use MoveIt in simulation</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs

# Without RViz:
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs use_rviz:=false`}</code></pre>
    <p>This starts <code>{`move_group`}</code>, <code>{`robot_state_publisher`}</code>, <code>{`ros2_control_node`}</code>, joint controllers, gripper controllers, and RViz with the MoveIt MotionPlanning plugin.</p>
  </details>

  <details className="content-details" open>
    <summary>Step 5.4: use MoveIt with real hardware</summary>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>MoveIt Hardware Safety Check</strong>
        <p>Clear the workspace, verify the planned path in RViz, and be ready to stop the controller before executing any real motion.</p>
      </div>
    </div>
    <pre><code>{`# Terminal 1: hardware driver
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0

# Terminal 2: MoveIt hardware environment
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py model:=rs`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 5.5: run the draw-square demo</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs`}</code></pre>
    <p>The draw-square demo moves <code>{`gripper_tcp`}</code> through four corners of a coplanar rectangle. Default parameters are in <code>{`src/rebotarm_moveit_demos/config/draw_square_rs.yaml`}</code>.</p>
  </details>

  <details className="content-details" open>
    <summary>Step 5.6: run the pick-place demo</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py model:=rs`}</code></pre>
    <p>The pick-place demo adds an object to the planning scene, opens the gripper, moves to the pick pose, closes the gripper, moves to the place pose, and releases the object. Default parameters are in <code>{`src/rebotarm_moveit_demos/config/pick_place_rs.yaml`}</code>.</p>
  </details>

  <details className="content-details">
    <summary>MoveIt configuration files</summary>

    | File | Description |
    |---|---|
    | <code>{`rebotarm_moveit_config/config/rebotarm_rs.urdf.xacro`}</code> | B601-RS robot model used by MoveIt, including the gripper and <code>{`gripper_tcp`}</code> |
    | <code>{`rebotarm_moveit_config/config/rebotarm_rs.ros2_control.xacro`}</code> | ros2_control mock hardware description for simulation |
    | <code>{`rebotarm_moveit_config/config/rebotarm_rs.srdf`}</code> | MoveIt groups, end effector, default states, and semantic configuration |
    | <code>{`rebotarm_moveit_config/config/kinematics.yaml`}</code> | IK solver configuration |
    | <code>{`rebotarm_moveit_config/config/joint_limits.yaml`}</code> | Joint limits used by MoveIt planning |
    | <code>{`rebotarm_moveit_config/config/ompl_planning.yaml`}</code> | OMPL planner parameters |
    | <code>{`rebotarm_moveit_config/config/moveit_controllers.yaml`}</code> | Trajectory execution controller configuration for simulation |
    | <code>{`rebotarm_moveit_config/config/moveit_hardware_controllers.yaml`}</code> | Trajectory execution controller configuration for real hardware |
    | <code>{`rebotarm_moveit_demos/config/draw_square_rs.yaml`}</code> | Draw-square demo parameters |
    | <code>{`rebotarm_moveit_demos/config/pick_place_rs.yaml`}</code> | Pick-place demo parameters |
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>Common issues</h2>
    <p>Most RS ROS2 issues are caused by CAN interface state, workspace sourcing, model selection, stale ROS2 processes, or MoveIt target configuration.</p>
  </div>

  <details className="content-details" open>
    <summary>1. <code>{`socketcan write failed: Network is down`}</code> appears at startup</summary>
    <p>This means the CAN interface has not been brought up yet.</p>
    <pre><code>{`ip -details link show can0

sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
  </details>

  <details className="content-details">
    <summary>2. <code>{`can0`}</code> cannot be found</summary>
    <pre><code>{`ip -br link
sudo modprobe peak_usb
ip -br link

# If the interface is can1, launch with:
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can1`}</code></pre>
  </details>

  <details className="content-details">
    <summary>3. Robot model is not displayed in RViz</summary>
    <ul>
      <li>Check whether the workspace has been sourced: <code>{`source install/setup.bash`}</code>.</li>
      <li>Check whether <code>{`Fixed Frame`}</code> is set to <code>{`base_link`}</code>.</li>
      <li>Check whether <code>{`robot_state_publisher`}</code> started correctly.</li>
      <li>Check whether the URDF mesh path starts with <code>{`package://rebotarm_bringup/description/...`}</code>.</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>4. MoveIt planning fails</summary>
    <ul>
      <li>Confirm that <code>{`move_group`}</code> is running correctly.</li>
      <li>Confirm that the current joint state is not stale.</li>
      <li>Confirm that the target point is inside the reachable workspace.</li>
      <li>Confirm that target orientation does not cause wrist or gripper collision.</li>
      <li>Plan manually in RViz first, then run the demo.</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>5. FastDDS SHM port warning appears</summary>
    <p>If services and actions still respond normally, this warning usually does not affect control. To clean leftover shared-memory lock files:</p>
    <pre><code>{`pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*

# Optional temporary workaround:
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4`}</code></pre>
  </details>

  <details className="content-details">
    <summary>6. What if I use Humble?</summary>
    <p>Follow the same workflow, replace Jazzy packages with Humble packages, source the Humble environment, and rebuild the workspace.</p>
  </details>

  <details className="content-details">
    <summary>7. <code>{`pinocchio`}</code> cannot be found</summary>
    <pre><code>{`sudo apt install -y ros-\${ROS_DISTRO}-pinocchio
source /opt/ros/\${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
python3 -c "import sys; print('\\n'.join(sys.path))"`}</code></pre>
    <p>After sourcing Jazzy, the Python path should include a path similar to <code>{`/opt/ros/jazzy/lib/python3.12/site-packages`}</code>. For Humble, replace <code>{`jazzy`}</code> with <code>{`humble`}</code>.</p>
  </details>
</section>

<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue Learning</span>
    <h2>reBot B601-RS learning path</h2>
    <p>These tutorials are designed to be followed in order: Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2. Use the links below to jump between modules.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>Complete unboxing, wiring, 48V power checks, PCAN-USB setup, calibration, and first motion tests.</span></span>
      <span className="course-tag">Start here</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot Teleoperation and Data Collection</strong><span>Teleoperate the arm, connect cameras, record datasets, and prepare imitation-learning tasks.</span></span>
      <span className="course-tag">Data collection</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio Kinematics Visualization</strong><span>Understand robot models, joints, coordinate frames, forward/inverse kinematics, trajectories, and gravity compensation.</span></span>
      <span className="course-tag">Control</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Visual Grasping Demo</strong><span>Combine RGB-D perception, hand-eye calibration, YOLO / GraspNet, and grasp pose generation for real object grasping.</span></span>
      <span className="course-tag">Application</span>
    </a>
    <a className="course-path-item active" href="/rebot_arm_b601_rs_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 Integration</strong><span>Connect the arm to ROS2, RViz, MoveIt 2, planning, and higher-level robotics workflows.</span></span>
      <span className="course-tag">Current article</span>
    </a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>References</span>
    <h2>References and support</h2>
  </div>
  <div className="reference-grid">
    <a href="https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/">reBot Arm B601-RS Quick Start</a>
    <a href="https://docs.ros.org/en/humble/">ROS2 Humble Documentation</a>
    <a href="https://docs.ros.org/en/jazzy/">ROS2 Jazzy Documentation</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py">reBotArm_control_py</a>
    <a href="https://moveit.picknik.ai/main/index.html">MoveIt 2 Documentation</a>
    <a href="https://forum.seeedstudio.com/">Seeed Studio Forum</a>
    <a href="https://github.com/EclipseaHime017/reBotArmController_ROS2/issues">Submit an Issue</a>
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
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
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
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
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
pre { overflow-x: auto; }
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
