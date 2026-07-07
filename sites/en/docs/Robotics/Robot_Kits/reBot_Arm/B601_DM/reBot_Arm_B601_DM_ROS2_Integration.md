---
description: This tutorial shows how to set up the ROS2 control workspace for the reBot Arm B601-DM, including arm control, RViz visualization, and MoveIt 2 integration.
title: reBot Arm B601-DM ROS2 Integration
keywords:
  - reBot Arm
  - B601-DM
  - ROS2
  - Humble
  - Jazzy
  - RViz
  - MoveIt 2
  - Robot Arm
  - Robotics
slug: /rebot_arm_b601_dm_ros2_integration
sku: 100065783, 100095532
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-29'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/rebot_arm_b601_dm_ros2_integration/
---

# reBot Arm B601-DM ROS2 Integration

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Build a ROS2 control workspace for B601-DM with RViz and MoveIt 2</h2>
    <p>
      This guide wraps the low-level reBotArm_control_py SDK into ROS2 topics,
      services, and actions. It covers hardware bring-up, control nodes, RViz
      visualization, MoveIt 2 planning, and real-arm execution for the B601-DM.
    </p>
    <div className="hero-actions">
      <a href="#workflow">View Workflow</a>
      <a href="#install">Install Workspace</a>
      <a href="#moveit">MoveIt 2</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM ROS2 Integration" />
    <strong>B601-DM · ROS2 / RViz / MoveIt 2</strong>
    <span>Validate communication first, simulate motion second, and only then execute on real hardware.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Warning: Clear the Robot Workspace Before Running</strong>
    <p>
      Before running any program that moves the robotic arm, clear all valuable items, fragile objects, tools, cables, and unrelated objects within a
      <strong> 1-meter radius </strong>
      of the robot workspace. During debugging and operation, personnel must stay away from the robot motion range.
    </p>
    <ul>
      <li>Do not touch joints, motors, links, the gripper, or the end effector after the robotic arm is powered on.</li>
      <li>Before running ROS2 actions, MoveIt execution, gravity compensation, IK control, trajectory control, teleoperation, or grasping demos, make sure the arm base is firmly fixed.</li>
      <li>If abnormal motion, noise, vibration, loose cables, poor power contact, or communication loss occurs, stop the program immediately and power off the system before inspection.</li>
      <li>Always power off the system before plugging or unplugging motor cables, CAN cables, USB2CAN adapters, XT30 connectors, or power connectors.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="quick navigation">
  <a href="#workflow">Workflow</a>
  <a href="#overview">Overview</a>
  <a href="#install">Install</a>
  <a href="#bringup">Bringup</a>
  <a href="#api">APIs</a>
  <a href="#examples">Examples</a>
  <a href="#moveit">MoveIt 2</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="workflow" className="section-card">
  <div className="section-title">
    <span>Start Here</span>
    <h2>Recommended ROS2 workflow</h2>
    <p>
      This page is now organized as a step-by-step course module. Follow the cards in order:
      first verify the hardware, then build the ROS2 workspace, then validate communication,
      and finally move to MoveIt 2 planning and real hardware execution.
    </p>
  </div>

  <div className="step-card-grid">
    <a className="step-card recommended" href="/rebot_b601_dm_getting_started/">
      <span className="step-mini">Step 0</span>
      <strong>Complete B601-DM quick start</strong>
      <p>Finish power checks, wiring, motor ID verification, zero-position calibration, and MotorBridge validation before using ROS2.</p>
      <em>Required first</em>
    </a>
    <a className="step-card" href="#install">
      <span className="step-mini">Step 1</span>
      <strong>Install ROS2 and dependencies</strong>
      <p>Use ROS2 Jazzy on Ubuntu 24.04 or ROS2 Humble on Ubuntu 22.04, then install colcon, RViz, Pinocchio, and control messages.</p>
      <em>Environment</em>
    </a>
    <a className="step-card" href="#install">
      <span className="step-mini">Step 2</span>
      <strong>Build the controller workspace</strong>
      <p>Clone the ROS2 controller, install MotorBridge, add the low-level SDK, and build the workspace with colcon.</p>
      <em>Build</em>
    </a>
    <a className="step-card" href="#bringup">
      <span className="step-mini">Step 3</span>
      <strong>Bring up the driver safely</strong>
      <p>Start the control node first without RViz, confirm the serial channel, and verify joint state feedback.</p>
      <em>Driver</em>
    </a>
    <a className="step-card" href="#api">
      <span className="step-mini">Step 4</span>
      <strong>Validate topics, services, and actions</strong>
      <p>Start from read-only topics and safe services, then test controlled joint and pose actions with long durations.</p>
      <em>ROS APIs</em>
    </a>
    <a className="step-card" href="#moveit">
      <span className="step-mini">Step 5</span>
      <strong>Use MoveIt 2 carefully</strong>
      <p>Plan in simulation first, inspect the trajectory in RViz, and execute on real hardware only after the path is safe.</p>
      <em>Planning</em>
    </a>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>What this ROS2 integration provides</h2>
    <p>
      The B601-DM ROS2 workspace exposes the robotic arm through standard ROS2
      interfaces, making it easier to connect the arm to perception, planning,
      visualization, and higher-level robotics applications.
    </p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card">
      <b>Standard ROS2 interfaces</b>
      <span>Publishes joint states and arm status, and exposes services and actions for enabling, disabling, homing, gripper control, pose motion, and joint trajectory execution.</span>
    </div>
    <div className="module-summary-card">
      <b>RViz visualization</b>
      <span>Visualizes the robot model, joint states, and planning frames so users can debug robot state before executing real movement.</span>
    </div>
    <div className="module-summary-card">
      <b>MoveIt 2 planning</b>
      <span>Provides MoveIt 2 configuration and demo packages for simulated planning, hardware execution, draw-square demos, and pick-place demos.</span>
    </div>
    <div className="module-summary-card">
      <b>Real hardware bridge</b>
      <span>Connects ROS2 commands to the reBotArm_control_py SDK and MotorBridge-based low-level motor control.</span>
    </div>
  </div>

  <div className="spec-card-grid">
    <div className="spec-card"><span>Robot Arm</span><strong>reBot Arm B601-DM</strong></div>
    <div className="spec-card"><span>DOF</span><strong>6-DOF + Gripper</strong></div>
    <div className="spec-card"><span>Motor Version</span><strong>Damiao motor version</strong></div>
    <div className="spec-card"><span>Communication</span><strong>USB2CAN serial bridge</strong></div>
    <div className="spec-card"><span>Default Port</span><strong>/dev/ttyACM0</strong></div>
    <div className="spec-card"><span>Power</span><strong>24V DC</strong></div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>BOM, wiring, and environment checklist</h2>
    <p>
      Prepare the robotic arm, power supply, USB2CAN serial bridge, and Ubuntu host before building the ROS2 workspace.
    </p>
  </div>

  <div className="two-col">
    <div className="info-card">
      <h3>Bill of Materials</h3>
      <ul>
        <li>reBot Arm B601-DM Robotic Arm × 1</li>
        <li>Gripper × 1</li>
        <li>USB2CAN Serial Bridge × 1</li>
        <li>24V Power Adapter × 1</li>
        <li>USB-C / Communication Cable × 1</li>
        <li>Ubuntu Host PC × 1</li>
      </ul>
    </div>
    <div className="info-card">
      <h3>Environment Requirements</h3>
      <ul>
        <li>Ubuntu 24.04 with ROS2 Jazzy, or Ubuntu 22.04 with ROS2 Humble</li>
        <li>System Python matching the ROS2 distribution</li>
        <li>colcon build tools</li>
        <li>MotorBridge Python package</li>
        <li>reBotArm_control_py low-level SDK</li>
      </ul>
    </div>
  </div>

  <div className="callout warning">
    <strong>Before powering on:</strong> Confirm that the B601-DM uses the correct 24V power supply, the USB2CAN adapter is connected properly, and the arm has completed zero-position and basic connectivity verification.
  </div>

  <div className="command-card">
    <h3>Check the serial device</h3>
    <pre><code>{`ls /dev/ttyACM*`}</code></pre>
  </div>

  <div className="command-card">
    <h3>Grant temporary serial permission</h3>
    <pre><code>{`sudo chmod 666 /dev/ttyACM0`}</code></pre>
  </div>

  <div className="command-card">
    <h3>Recommended persistent permission</h3>
    <pre><code>{`sudo usermod -a -G dialout $USER

# Log out and log back in for the group change to take effect.`}</code></pre>
  </div>
</section>

<section id="install" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>Install ROS2 and build the workspace</h2>
      <p>
        Install the ROS2 distribution that matches your Ubuntu version, then build the
        B601-DM ROS2 controller workspace.
      </p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card">
      <span className="step-mini">1.1</span>
      <strong>Install ROS2</strong>
      <p>Use Jazzy for Ubuntu 24.04 and Humble for Ubuntu 22.04.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.2</span>
      <strong>Install dependencies</strong>
      <p>Install colcon, control messages, trajectory messages, RViz, robot_state_publisher, and Pinocchio.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.3</span>
      <strong>Clone controller repo</strong>
      <p>Use the Seeed-Projects repository by default, or the development repository if instructed.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.4</span>
      <strong>Install MotorBridge</strong>
      <p>Install MotorBridge in the same Python environment used by ROS2 nodes.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.5</span>
      <strong>Add low-level SDK</strong>
      <p>Clone reBotArm_control_py into third_party so the ROS2 controller can call the arm SDK.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.6</span>
      <strong>Build and source</strong>
      <p>Build with colcon and source install/setup.bash before running any ROS2 commands.</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>Step 1.1 Install ROS2 for your Ubuntu version</summary>
    <div className="link-grid">
      <a href="https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html" target="_blank">ROS2 Jazzy Ubuntu Installation</a>
      <a href="https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html" target="_blank">ROS2 Humble Ubuntu Installation</a>
    </div>
    <div className="tip-card">
      <strong>Version rule</strong>
      <span>Use ROS2 Jazzy on Ubuntu 24.04. Use ROS2 Humble on Ubuntu 22.04.</span>
    </div>
  </details>

  <details className="content-details" open>
    <summary>Step 1.2 Install build tools and ROS dependencies</summary>
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
    <p>If you use ROS2 Humble, replace <code>{`ros-jazzy-*`}</code> with <code>{`ros-humble-*`}</code> and source <code>{`/opt/ros/humble/setup.bash`}</code>.</p>
  </details>

  <details className="content-details" open>
    <summary>Step 1.3 Clone the ROS2 controller repository</summary>
    <pre><code>{`git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
    <p>You can also use the development repository when testing new features:</p>
    <pre><code>{`git clone https://github.com/EclipseaHime017/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.4 Install MotorBridge</summary>
    <pre><code>{`python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.5 Add the low-level SDK</summary>
    <pre><code>{`mkdir -p third_party
git clone https://github.com/vectorBH6/reBotArm_control_py.git third_party/reBotArm_control_py`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Step 1.6 Build the workspace</summary>
    <pre><code>{`source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash

ros2 pkg executables rebotarmcontroller`}</code></pre>
    <p>Expected executable entries include:</p>
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
      <h2>Bring up the robot controller</h2>
      <p>Start from the minimal hardware driver. Add RViz only after communication is stable.</p>
    </div>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Safety Check Before Bringup</strong>
      <p>Clear all valuable objects and keep all personnel away within a <strong>1-meter radius</strong>. Make sure the B601-DM base is firmly fixed before enabling the controller.</p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card">
      <span className="step-mini">2.1</span>
      <strong>Source the workspace</strong>
      <p>Every new terminal must enter the workspace and source the install setup file.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">2.2</span>
      <strong>Start driver only</strong>
      <p>Use the driver launch first to isolate hardware communication from visualization.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">2.3</span>
      <strong>Start full bringup</strong>
      <p>Launch controller, robot_state_publisher, and optionally RViz after the driver is stable.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">2.4</span>
      <strong>Verify joint states</strong>
      <p>Read /rebotarm/joint_states once before sending any motion command.</p>
    </div>
  </div>

  <div className="command-card">
    <h3>Source the workspace</h3>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash`}</code></pre>
  </div>

  <div className="command-card">
    <h3>Start only the control node</h3>
    <pre><code>{`ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0`}</code></pre>
  </div>

  <div className="command-card">
    <h3>Start the full system without RViz</h3>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0`}</code></pre>
  </div>

  <div className="command-card">
    <h3>Start with RViz visualization</h3>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0 use_rviz:=true`}</code></pre>
  </div>

  <details className="content-details">
    <summary>RViz viewing tips</summary>
    <ul>
      <li>Set <code>{`Fixed Frame`}</code> to <code>{`base_link`}</code>.</li>
      <li>Set <code>{`Target Frame`}</code> to <code>{`base_link`}</code>.</li>
      <li>Adjust <code>{`Distance`}</code> to around <code>{`1.0`}</code> or <code>{`1.5`}</code> if the model appears too small.</li>
      <li>Use the mouse wheel to zoom and inspect joint motion.</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>Namespace configuration</summary>
    <p>The default namespace is <code>{`/rebotarm`}</code>. For multiple arms, change the namespace at launch time:</p>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py arm_namespace:=left_arm`}</code></pre>
  </details>
</section>

<section id="api" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>Validate ROS2 APIs</h2>
      <p>Start with read-only topics and safe services, then test motion actions.</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card">
      <b>Status topics</b>
      <span>Use these first. They are read-only and help confirm that the controller is alive and publishing state.</span>
    </div>
    <div className="module-summary-card">
      <b>Services</b>
      <span>Use services for enable, disable, safe home, zero setting, mode switching, gripper setting, and gravity compensation start / stop.</span>
    </div>
    <div className="module-summary-card">
      <b>Actions</b>
      <span>Use actions for pose motion, joint trajectory following, and gripper commands. Actions can move the robot, so test carefully.</span>
    </div>
  </div>

  <details className="content-details" open>
    <summary>Status topics</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>API</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>{`/rebotarm/joint_states`}</code></td><td><code>{`sensor_msgs/msg/JointState`}</code></td><td>6-axis joint positions, velocities, and efforts</td></tr>
          <tr><td><code>{`/rebotarm/arm_status`}</code></td><td><code>{`rebotarm_msgs/msg/ArmStatus`}</code></td><td>Control mode, enabled state, state machine, and error codes</td></tr>
          <tr><td><code>{`/rebotarm/joints/&lt;joint&gt;/state`}</code></td><td><code>{`rebotarm_msgs/msg/JointMotorState`}</code></td><td>Single-joint motor state</td></tr>
          <tr><td><code>{`/rebotarm/gripper/state`}</code></td><td><code>{`rebotarm_msgs/msg/JointMotorState`}</code></td><td>Gripper motor state</td></tr>
        </tbody>
      </table>
    </div>
    <pre><code>{`ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Common services</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>API</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>{`/rebotarm/enable`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>Enable the robot arm</td></tr>
          <tr><td><code>{`/rebotarm/disable`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>Disable the robot arm</td></tr>
          <tr><td><code>{`/rebotarm/safe_home`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>Move back to the safe home position</td></tr>
          <tr><td><code>{`/rebotarm/set_mode`}</code></td><td><code>{`rebotarm_msgs/srv/SetMode`}</code></td><td>Switch between <code>{`mit`}</code>, <code>{`pos_vel`}</code>, and <code>{`vel`}</code></td></tr>
          <tr><td><code>{`/rebotarm/set_zero`}</code></td><td><code>{`rebotarm_msgs/srv/SetZero`}</code></td><td>Set zero position for all joints or a single joint</td></tr>
          <tr><td><code>{`/rebotarm/move_to_pose_ik`}</code></td><td><code>{`rebotarm_msgs/srv/MoveToPoseIK`}</code></td><td>IK pre-check and target joint solution</td></tr>
          <tr><td><code>{`/rebotarm/gripper/set`}</code></td><td><code>{`rebotarm_msgs/srv/SetGripper`}</code></td><td>Set gripper motor position in radians</td></tr>
          <tr><td><code>{`/rebotarm/gravity_compensation/start`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>Start gravity compensation</td></tr>
          <tr><td><code>{`/rebotarm/gravity_compensation/stop`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>Stop gravity compensation</td></tr>
        </tbody>
      </table>
    </div>
  </details>

  <details className="content-details">
    <summary>Motion actions</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>API</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>{`/rebotarm/move_to_pose`}</code></td><td><code>{`rebotarm_msgs/action/MoveToPose`}</code></td><td>End-effector pose motion</td></tr>
          <tr><td><code>{`/rebotarm/follow_joint_trajectory`}</code></td><td><code>{`control_msgs/action/FollowJointTrajectory`}</code></td><td>Standard joint trajectory compatible entry point</td></tr>
          <tr><td><code>{`/rebotarm/gripper/command`}</code></td><td><code>{`control_msgs/action/GripperCommand`}</code></td><td>Standard gripper action</td></tr>
        </tbody>
      </table>
    </div>
  </details>
</section>

<section id="examples" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>Run basic control examples</h2>
      <p>Use these commands after the controller is running and joint state feedback is correct.</p>
    </div>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Safety Check Before Motion</strong>
      <p>Use small target values, long durations, and keep the workspace clear. Be ready to stop the controller at any time.</p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card">
      <span className="step-mini">4.1</span>
      <strong>Enable the arm</strong>
      <p>Enable only after the workspace is clear and joint states are valid.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">4.2</span>
      <strong>Move to a pose</strong>
      <p>Use a conservative pose close to the current pose first.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">4.3</span>
      <strong>Send a joint target</strong>
      <p>Use small radian values and a long time_from_start.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">4.4</span>
      <strong>Safe home and disable</strong>
      <p>End each test by returning to safe home and disabling the robot.</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>4.1 Enable the robot arm</summary>
    <pre><code>{`ros2 service call /rebotarm/enable std_srvs/srv/Trigger`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.2 Move to an end-effector pose</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.3 Send a joint target</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.4 Safe home and disable</summary>
    <pre><code>{`ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger`}</code></pre>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Examples</span>
    <h2>Demo commands</h2>
    <p>These examples assume that <code>{`reBotArmController`}</code> is already running.</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card">
      <b>Joint motion</b>
      <span>Send radian targets to all joints or a selected joint.</span>
    </div>
    <div className="module-summary-card">
      <b>End-effector pose</b>
      <span>Move the TCP to a specified Cartesian pose using the SDK pose controller.</span>
    </div>
    <div className="module-summary-card">
      <b>Gravity compensation</b>
      <span>Start gravity compensation through the ROS2 node and stop safely with service calls.</span>
    </div>
    <div className="module-summary-card">
      <b>Interactive gripper</b>
      <span>Open and close the gripper through a terminal interaction loop.</span>
    </div>
  </div>

  <details className="content-details" open>
    <summary>Joint motion example</summary>
    <pre><code>{`ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0

ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0`}</code></pre>
  </details>

  <details className="content-details">
    <summary>End-effector pose example</summary>
    <pre><code>{`ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Gravity compensation example</summary>
    <pre><code>{`ros2 run rebotarmcontroller GravityCompensation`}</code></pre>
    <p>When you press <code>{`Ctrl+C`}</code>, the script calls these services in order:</p>
    <ol>
      <li><code>{`/rebotarm/gravity_compensation/stop`}</code></li>
      <li><code>{`/rebotarm/safe_home`}</code></li>
      <li><code>{`/rebotarm/disable`}</code></li>
    </ol>
  </details>

  <details className="content-details">
    <summary>Interactive gripper example</summary>
    <pre><code>{`ros2 run rebotarmcontroller GripperControl

# o / open    Open the gripper
# c / close   Close the gripper
# q / quit    Quit`}</code></pre>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Configuration</span>
    <h2>Configuration files and low-level topics</h2>
    <p>
      The default configuration files are located under
      <code>{` src/rebotarm_bringup/config/`}</code>. Use application-level services
      and actions whenever possible. Low-level motor topics are intended for debugging.
    </p>
  </div>

  <div className="two-col">
    <div className="info-card">
      <h3>Configuration files</h3>
      <ul>
        <li><code>{`arm.yaml`}</code>: motor, feedback ID, and control parameters for the 6 arm joints</li>
        <li><code>{`gripper.yaml`}</code>: gripper motor ID, feedback ID, vendor, and control parameters</li>
        <li><code>{`driver_params.yaml`}</code>: ROS parameter examples</li>
      </ul>
    </div>
    <div className="info-card">
      <h3>Common launch parameters</h3>
      <ul>
        <li><code>{`channel`}</code>: serial port such as <code>{`/dev/ttyACM0`}</code></li>
        <li><code>{`joint_state_rate`}</code>: publish rate of <code>{`/rebotarm/joint_states`}</code></li>
        <li><code>{`cmd_arbitration`}</code>: <code>{`reject`}</code> or <code>{`preempt`}</code></li>
        <li><code>{`arm_namespace`}</code>: namespace prefix, default <code>{`rebotarm`}</code></li>
        <li><code>{`use_rviz`}</code>: whether to start RViz</li>
      </ul>
    </div>
  </div>

  <div className="callout danger">
    <strong>Low-level topics are for debugging only:</strong> They do not perform IK, trajectory planning, or URDF limit checks. For application-level motion, prefer <code>{`/move_to_pose`}</code>, <code>{`/follow_joint_trajectory`}</code>, and <code>{`/gripper/set`}</code>.
  </div>
</section>

<section id="moveit" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>Use MoveIt 2</h2>
      <p>
        MoveIt 2 provides inverse kinematics, collision checking, trajectory planning,
        and trajectory execution. Start from simulation before connecting real hardware.
      </p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card">
      <span className="step-mini">5.1</span>
      <strong>Install MoveIt packages</strong>
      <p>Install MoveIt, ros2_control, controllers, and xacro packages for your ROS distribution.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.2</span>
      <strong>Build and verify demos</strong>
      <p>Rebuild the workspace and confirm the MoveIt packages and demo executables are available.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.3</span>
      <strong>Run simulation first</strong>
      <p>Use the MoveIt demo launch with simulated hardware and inspect the motion in RViz.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.4</span>
      <strong>Connect real hardware</strong>
      <p>Start the hardware driver, then launch the hardware MoveIt environment only after verifying the planned path.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.5</span>
      <strong>Run application demos</strong>
      <p>Try draw-square and pick-place after checking all frames, limits, and gripper parameters.</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>5.1 Install MoveIt 2 packages</summary>
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
    <summary>5.2 Rebuild and verify MoveIt packages</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash

ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos`}</code></pre>
    <p>Expected entries include:</p>
    <pre><code>{`rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>5.3 Use MoveIt in simulation</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py

# Without RViz:
ros2 launch rebotarm_moveit_config demo.launch.py use_rviz:=false`}</code></pre>
  </details>

  <details className="content-details">
    <summary>5.4 Use MoveIt with real hardware</summary>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Safety Check Before Hardware Execution</strong>
        <p>Clear the robot workspace, verify the planned path in RViz, and be ready to stop the controller at any time.</p>
      </div>
    </div>
    <pre><code>{`ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0

# In another terminal:
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py`}</code></pre>
  </details>

  <details className="content-details">
    <summary>5.5 Run the draw-square demo</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py`}</code></pre>
    <p><code>{`draw_square`}</code> moves <code>{`gripper_tcp`}</code> through the four corners of a coplanar rectangle. Default parameters are stored in <code>{`src/rebotarm_moveit_demos/config/draw_square.yaml`}</code>.</p>
  </details>

  <details className="content-details">
    <summary>5.6 Run the pick-place demo</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py`}</code></pre>
    <p><code>{`pick_place`}</code> uses ready poses, object dimensions, pick / place TCP orientation, and gripper open / close positions defined in <code>{`src/rebotarm_moveit_demos/config/pick_place.yaml`}</code>.</p>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>Common issues and fixes</h2>
    <p>Use this section when ROS2 cannot open the device, RViz does not show the model, or MoveIt fails to execute.</p>
  </div>

  <div className="faq-grid">
    <details className="content-details" open>
      <summary>1. <code>{`open serial port /dev/ttyACM0 failed`}</code> appears at startup</summary>
      <p>The default serial port does not exist or the device name has changed. Check the actual serial device and pass it to <code>{`channel`}</code>.</p>
      <pre><code>{`ls /dev/ttyACM*
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2. <code>{`Device or resource busy`}</code> appears at startup</summary>
      <p>The serial port is occupied by another process, such as a previous ROS2 node, SDK example, or debugging script.</p>
      <pre><code>{`ps aux | grep -E "reBotArmController|ros2|python"`}</code></pre>
    </details>

    <details className="content-details">
      <summary>3. Permission denied</summary>
      <p>Add the current user to the <code>{`dialout`}</code> group, or temporarily grant permission.</p>
      <pre><code>{`sudo usermod -a -G dialout $USER
sudo chmod 666 /dev/ttyACM0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>4. Robot model is not displayed in RViz</summary>
      <p>Check whether the workspace has been sourced, whether <code>{`Fixed Frame`}</code> is set to <code>{`base_link`}</code>, and whether <code>{`robot_state_publisher`}</code> started correctly.</p>
    </details>

    <details className="content-details">
      <summary>5. FastDDS SHM port warning appears</summary>
      <p>This is usually caused by leftover FastDDS shared-memory lock files after a previous ROS2 process exited abnormally.</p>
      <pre><code>{`pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*

# Optional bypass:
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4`}</code></pre>
    </details>

    <details className="content-details">
      <summary>6. <code>{`pinocchio`}</code> cannot be found</summary>
      <pre><code>{`sudo apt install -y ros-jazzy-pinocchio
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"`}</code></pre>
    </details>
  </div>
</section>

<section className="course-path-section section-card">
  <div className="section-title">
    <span>Continue Learning</span>
    <h2>reBot B601-DM learning path</h2>
    <p>
      These tutorials follow the same order as the Robotics Page: Getting Started →
      LeRobot → Pinocchio → Visual Grasping → ROS2. Use the links below to jump
      between modules.
    </p>
  </div>

  <div className="course-path-grid">
    <a className="course-path-item" href="/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy">
        <strong>Getting Started</strong>
        <span>Complete unboxing, wiring, power checks, driver setup, calibration, and basic motion tests.</span>
      </span>
      <span className="course-tag">Start here</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy">
        <strong>LeRobot Teleoperation and Data Collection</strong>
        <span>Teleoperate the arm, connect cameras, record datasets, train policies, and evaluate real-arm behavior.</span>
      </span>
      <span className="course-tag">Data collection</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy">
        <strong>Pinocchio Kinematics Visualization</strong>
        <span>Understand robot models, coordinate frames, FK / IK, trajectory planning, and gravity compensation.</span>
      </span>
      <span className="course-tag">Control</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy">
        <strong>Visual Grasping Demo</strong>
        <span>Combine RGB-D perception, YOLO / OBB or GraspNet, hand-eye calibration, and real object grasping.</span>
      </span>
      <span className="course-tag">Application</span>
    </a>
    <a className="course-path-item active" href="/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy">
        <strong>ROS2 Integration</strong>
        <span>Connect the arm to ROS2, RViz, MoveIt 2, standard services, actions, and planning workflows.</span>
      </span>
      <span className="course-tag">Current article</span>
    </a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>References</span>
    <h2>References</h2>
  </div>
  <div className="reference-grid">
    <a href="https://wiki.seeedstudio.com/rebot_b601_dm_getting_started/">reBot Arm B601-DM Getting Started</a>
    <a href="https://wiki.seeedstudio.com/rebot_arm_b601_dm_lerobot/">reBot Arm B601-DM LeRobot Tutorial</a>
    <a href="https://wiki.seeedstudio.com/rebot_arm_b601_dm_pinocchio_meshcat/">reBot Arm B601-DM Pinocchio and MeshCat</a>
    <a href="https://wiki.seeedstudio.com/rebot_arm_b601_dm_grasping_demo/">reBot Arm B601-DM Visual Grasping Demo</a>
    <a href="https://docs.ros.org/en/humble/">ROS2 Humble Documentation</a>
    <a href="https://docs.ros.org/en/jazzy/">ROS2 Jazzy Documentation</a>
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
