---
description: This tutorial introduces how to use Pinocchio and MeshCat for kinematics analysis and visualization on the reBot Arm B601-RS robotic arm.
title: Getting Started with Pinocchio and MeshCat for reBot Arm B601-RS
keywords:
  - Pinocchio
  - MeshCat
  - Robotic Arm
  - Robot
  - LeRobot
  - Kinematics
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
url: https://wiki.seeedstudio.com/rebot_arm_b601_rs_pinocchio_meshcat/
---

# Getting Started with Pinocchio and MeshCat for reBot Arm B601-RS

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Debug B601-RS kinematics, trajectories, gravity compensation, and MeshCat visualization step by step</h2>
    <p>This guide turns the low-level reBotArm_control_py workflow into a safer learning sequence: install the environment, verify CAN communication, test a single RobStride motor, validate FK / IK, simulate trajectories in MeshCat, and only then move the real arm.</p>
    <div className="hero-actions">
      <a href="#workflow">View Workflow</a>
      <a href="#install">Install</a>
      <a href="#hardware-control">Real Control</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
    <strong>B601-RS · Pinocchio / MeshCat</strong>
    <span>Simulation first. Small motions second. Gravity compensation last.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Warning: Clear the Robot Workspace Before Running</strong>
    <p>Before running any program that moves the robotic arm, clear all valuable items, fragile objects, tools, cables, and unrelated objects within a <strong>1-meter radius</strong> of the robot workspace. During debugging and operation, personnel must stay away from the robot motion range.</p>
    <ul>
      <li>Do not touch joints, motors, links, the gripper, or the end effector after the robotic arm is powered on.</li>
      <li>Before running MIT control, IK control, trajectory control, gravity compensation, or any real-arm script, make sure the arm base is firmly fixed.</li>
      <li>If abnormal motion, noise, vibration, loose cables, poor power contact, or communication loss occurs, stop the program immediately and power off the system before inspection.</li>
      <li>Always power off the system before plugging or unplugging motor cables, CAN cables, PCAN-USB adapters, XT30 connectors, or power connectors.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="Pinocchio MeshCat navigation">
  <a href="#workflow">Workflow</a>
  <a href="#overview">Overview</a>
  <a href="#install">Install</a>
  <a href="#debug">Motor Debug</a>
  <a href="#kinematics">FK / IK</a>
  <a href="#simulation">MeshCat</a>
  <a href="#hardware-control">Real Control</a>
  <a href="#gravity">Gravity</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="workflow" className="section-card step-section">
  <div className="section-title">
    <span>Start Here</span>
    <h2>Recommended safe workflow</h2>
    <p>Pinocchio and MeshCat are powerful low-level debugging tools. Follow the order below to move from software-only checks to real hardware control with lower risk.</p>
  </div>

  <div className="step-card-grid">
    <a className="step-card recommended" href="#install">
      <span className="step-mini">Step 0</span>
      <strong>Finish B601-RS Quick Start</strong>
      <p>Complete power, wiring, PCAN-USB / SocketCAN, zero-position, and MotorBridge checks before using low-level scripts.</p>
    </a>
    <a className="step-card" href="#install">
      <span className="step-mini">Step 1</span>
      <strong>Install and sync the environment</strong>
      <p>Clone reBotArm_control_py, run uv sync, and switch the hardware configuration to the RS version.</p>
    </a>
    <a className="step-card" href="#debug">
      <span className="step-mini">Step 2</span>
      <strong>Verify CAN and motor state</strong>
      <p>Bring up can0, run the RS06 single-motor console, check state feedback, and verify zero positions.</p>
    </a>
    <a className="step-card" href="#kinematics">
      <span className="step-mini">Step 3</span>
      <strong>Validate FK / IK in software</strong>
      <p>Check units, joint limits, workspace, frame definitions, and IK convergence before moving hardware.</p>
    </a>
    <a className="step-card" href="#simulation">
      <span className="step-mini">Step 4</span>
      <strong>Visualize with MeshCat</strong>
      <p>Inspect robot poses, target frames, and planned trajectories in the browser before real-arm execution.</p>
    </a>
    <a className="step-card" href="#hardware-control">
      <span className="step-mini">Step 5</span>
      <strong>Move the real arm slowly</strong>
      <p>Use small target changes, long durations, and a clear emergency stop plan for IK and trajectory scripts.</p>
    </a>
    <a className="step-card" href="#gravity">
      <span className="step-mini">Step 6</span>
      <strong>Tune gravity compensation last</strong>
      <p>Only test gravity compensation after zero offsets, joint directions, URDF parameters, and motor behavior are verified.</p>
    </a>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>What this tutorial covers</h2>
    <p>This tutorial focuses on kinematics, trajectory generation, visualization, and dynamics-based compensation for the B601-RS RobStride version.</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Pinocchio model analysis</b><span>Use the robot model to calculate FK, IK, Jacobians, gravity torque, and trajectory tracking targets.</span></div>
    <div className="module-summary-card"><b>MeshCat visualization</b><span>Open a browser-based 3D viewer to inspect robot state, target poses, reference paths, and actual trajectories.</span></div>
    <div className="module-summary-card"><b>MotorBridge control path</b><span>Use MotorBridge and SocketCAN to communicate with RobStride motors through the CAN interface.</span></div>
    <div className="module-summary-card"><b>Real-arm experiments</b><span>Run IK, smooth trajectory, and gravity compensation scripts after simulation and small motion validation.</span></div>
  </div>

  <div className="feature-grid">
    <div><strong>Forward / inverse kinematics</strong><span>Calculate the end-effector pose from joint angles, or solve joint angles from a target pose.</span></div>
    <div><strong>Trajectory planning and tracking</strong><span>Use SE(3) geodesic trajectory planning and CLIK tracking to reduce abrupt motion.</span></div>
    <div><strong>Gravity compensation</strong><span>Compute joint gravity torques from the dynamics model and test floating or pose-locking effects.</span></div>
    <div><strong>Multi-mode motor control</strong><span>Use MIT, POS_VEL, and velocity control modes for different debugging stages.</span></div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>B601-RS hardware specifications</h2>
    <p>The RS version uses RobStride motors, CAN communication at 1 Mbps, and a 48V power supply.</p>
  </div>

  <div className="spec-grid">
    <div className="spec-card"><b>Robot Arm</b><span>reBot Arm B601-RS assembled kit with gripper</span></div>
    <div className="spec-card"><b>Degrees of Freedom</b><span>6 + 1 with gripper</span></div>
    <div className="spec-card"><b>Reach</b><span>754.7 mm with gripper / 587.5 mm without gripper</span></div>
    <div className="spec-card"><b>Payload</b><span>Rated 2.5 kg / maximum 5 kg</span></div>
    <div className="spec-card"><b>Motors</b><span>RobStride 06 × 3 and RobStride 00 × 4</span></div>
    <div className="spec-card"><b>Communication</b><span>CAN bus at 1 Mbps, usually mapped as can0</span></div>
    <div className="spec-card"><b>Power</b><span>DC 48V, recommended 15A supply</span></div>
    <div className="spec-card"><b>Software</b><span>Ubuntu 22.04+, Python 3.10+, Pinocchio, MeshCat</span></div>
  </div>

  <details className="content-details">
    <summary>Joint range of motion and motor information</summary>

    | Item | Specification |
    |------|---------------|
    | Joint range | J1: ±150°, J2: 220° to 0°, J3: 220° to 0°, J4: ±90°, J5: ±90°, J6: ±180°, Gripper: 345° to 0° |
    | Repeatability | 0.1 mm |
    | Self weight | 6.7 kg |
    | RobStride 00 rated / peak torque | 5 N·m / 14 N·m |
    | RobStride 06 rated / peak torque | 11 N·m / 36 N·m |
    | Rated voltage | 48V |
    | Control modes | MIT mode, speed mode, position mode, torque mode |
  </details>

  <details className="content-details">
    <summary>Bill of materials</summary>

    | Component | Quantity | Included |
    |-----------|----------|----------|
    | reBot Arm B601-RS robotic arm | 1 | ✅ |
    | CAN adapter | 1 | ✅ |
    | DC 48V power adapter | 1 | ✅ |
    | USB-C cable | 1 | ✅ |
    | Gripper | 1 | ✅ |
  </details>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>Install the environment and select the RS hardware configuration</h2>
      <p>This step prepares reBotArm_control_py and makes sure the configuration uses the RobStride RS hardware file instead of the Damiao DM file.</p>
    </div>
  </div>

  <div className="command-grid">
    <div className="command-card">
      <h3>1. Install uv</h3>
      <pre><code>{`curl -LsSf https://astral.sh/uv/install.sh | sh`}</code></pre>
    </div>
    <div className="command-card">
      <h3>2. Clone the repository</h3>
      <pre><code>{`git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py`}</code></pre>
    </div>
    <div className="command-card">
      <h3>3. Sync dependencies</h3>
      <pre><code>{`uv sync`}</code></pre>
    </div>
  </div>

  <div className="callout warning">
    <strong>Important configuration for B601-RS:</strong> before running examples, open <code>{`config/rebotarm.yaml`}</code> and switch the hardware configuration to the RS file.
  </div>

  <pre><code>{`# Before modification
hardware_yaml: "rebotarm_dm.yaml"

# After modification
hardware_yaml: "rebotarm_rs.yaml"`}</code></pre>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Why this matters</b><span>The DM and RS versions use different motor protocols. If the configuration still points to the DM file, RS motors may not be recognized or controlled correctly.</span></div>
    <div className="module-summary-card"><b>When to check again</b><span>Check this file again after pulling new code, switching branches, or copying the project to another machine.</span></div>
  </div>
</section>

<section id="debug" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Safety Check Before Motor Debugging</strong>
      <p>Clear the workspace, keep all personnel away within a <strong>1-meter radius</strong>, and make sure the arm is mechanically fixed before enabling motors.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>Bring up CAN and verify motor behavior</h2>
      <p>Do not run full-arm motion before confirming the CAN interface, motor response, zero positions, and joint directions.</p>
    </div>
  </div>

  <div className="command-card wide">
    <h3>Configure SocketCAN for PCAN-USB</h3>
    <pre><code>{`sudo modprobe peak_usb
ip -br link

sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0`}</code></pre>
  </div>

  <div className="debug-grid">
    <details className="content-details" open>
      <summary>2.1 Single motor console: 0x01rs06_test.py</summary>
      <p>Use this console to confirm that a RobStride RS06 motor can be enabled, disabled, pinged, and commanded safely.</p>
      <pre><code>{`uv run python example/0x01rs06_test.py`}</code></pre>
      <div className="content-table">
        <table>
          <thead><tr><th>Command</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>enable</code> / <code>disable</code></td><td>Enable or disable the motor.</td></tr>
            <tr><td><code>set_zero</code></td><td>Set the current position as software zero.</td></tr>
            <tr><td><code>state</code></td><td>Read current motor state.</td></tr>
            <tr><td><code>ping</code></td><td>Check whether the motor responds.</td></tr>
            <tr><td><code>clear_error</code></td><td>Clear motor error flags.</td></tr>
            <tr><td><code>mode mit</code> / <code>mode posvel</code> / <code>mode vel</code></td><td>Switch control mode.</td></tr>
            <tr><td><code>mit pos vel kp kd</code></td><td>Send a MIT mode command.</td></tr>
            <tr><td><code>posvel pos vlim</code></td><td>Send a position-velocity command.</td></tr>
            <tr><td><code>vel velocity</code></td><td>Send a velocity command.</td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details className="content-details" open>
      <summary>2.2 Zero calibration and angle monitoring: 2_zero_and_read.py</summary>
      <p>Use this script to set all joint zeros and display joint angles in real time. Verify the zero pose before using FK / IK.</p>
      <pre><code>{`uv run python example/2_zero_and_read.py`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2.3 MIT full-joint control: 3_mit_control.py</summary>
      <div className="callout danger"><strong>High torque warning:</strong> MIT mode can respond quickly. Start with very small angles and keep people and objects away from the arm.</div>
      <pre><code>{`uv run python example/3_mit_control.py
> 0 0 0 0 0 0
> 0 0 0 0 0 0 2.0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2.4 POS_VEL full-joint control: 4_pos_vel_control.py</summary>
      <p>POS_VEL mode is usually a better starting point for smooth joint motion tests.</p>
      <pre><code>{`uv run python example/4_pos_vel_control.py
> 0 0 0 0 0 0`}</code></pre>
    </details>
  </div>
</section>

<section id="kinematics" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>Validate forward and inverse kinematics</h2>
      <p>Use FK / IK scripts to verify units, coordinate frames, joint limits, and reachable workspace before driving the real robot.</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Forward kinematics</b><span>Input joint angles and calculate the end-effector position, rotation matrix, and Euler angles.</span></div>
    <div className="module-summary-card"><b>Inverse kinematics</b><span>Input a target pose and solve the joint angles. Start with position-only targets to reduce constraints.</span></div>
    <div className="module-summary-card"><b>Unit check</b><span>Positions are in meters. Some examples use degrees, while simulation scripts may use radians.</span></div>
  </div>

  <details className="content-details" open>
    <summary>3.1 Forward kinematics: 5_fk_test.py</summary>
    <pre><code>{`uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>3.2 Inverse kinematics: 6_ik_test.py</summary>
    <pre><code>{`uv run python example/6_ik_test.py

# Position only, unit: m
> 0.25 0.0 0.15

# Position + orientation, position in m, orientation in degrees
> 0.25 0.0 0.15 0 0 0`}</code></pre>
  </details>
</section>

<section id="simulation" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>Run MeshCat simulation before real-arm motion</h2>
      <p>MeshCat lets you inspect robot poses and trajectories visually. Use this before sending IK or trajectory commands to the physical arm.</p>
    </div>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic_rs.png" alt="B601-RS MeshCat trajectory simulation" />
  </div>

  <div className="debug-grid">
    <details className="content-details" open>
      <summary>4.1 Forward kinematics simulation: sim/fk_sim.py</summary>
      <pre><code>{`uv run python example/sim/fk_sim.py

# Input six joint angles, unit: degrees
> 0 0 0 0 0 0
> 45 -30 15 -60 90 -180`}</code></pre>
    </details>

    <details className="content-details" open>
      <summary>4.2 Inverse kinematics simulation: sim/ik_sim.py</summary>
      <pre><code>{`uv run python example/sim/ik_sim.py

# Position only, unit: m
> 0.25 0.0 0.25

# Position + orientation, orientation unit: radians
> 0.25 0.0 0.25 0 0 0`}</code></pre>
    </details>

    <details className="content-details" open>
      <summary>4.3 Trajectory planning simulation: sim/traj_sim.py</summary>
      <pre><code>{`uv run python example/sim/traj_sim.py

# Input x y z [roll pitch yaw], position in m, orientation in radians
> 0.25 0.0 0.25 0 0 0`}</code></pre>
      <p>This script displays trajectory statistics, plays the full trajectory in MeshCat, and shows both reference and actual paths.</p>
    </details>

    <details className="content-details">
      <summary>4.4 Visualizer helper: sim/visualizer.py</summary>
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
      <strong>Safety Check Before Real-Arm Control</strong>
      <p>Clear all valuable objects and keep all personnel away within a <strong>1-meter radius</strong>. Use small target changes and long durations for the first run.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>Run real-arm IK and trajectory control carefully</h2>
      <p>Only run these scripts after CAN communication, zero positions, FK / IK, and MeshCat simulation have been verified.</p>
    </div>
  </div>

  <div className="debug-grid">
    <details className="content-details" open>
      <summary>5.1 IK real-time control: 7_arm_ik_control.py</summary>
      <p>Use this script for target end-effector pose control. Start with a pose close to the current pose.</p>
      <pre><code>{`uv run python example/7_arm_ik_control.py

# Position only
> 0.3 0.0 0.2

# Position + orientation
> 0.3 0.1 0.25 0 0.5 0

# Read current state
> state
> pos`}</code></pre>
    </details>

    <details className="content-details" open>
      <summary>5.2 Smooth trajectory control: 8_arm_traj_control.py</summary>
      <p>This script uses SE(3) geodesic trajectory planning and CLIK tracking. Use a longer duration for safer first tests.</p>
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
      <strong>Safety Check Before Gravity Compensation</strong>
      <p>Gravity compensation may disable motors directly when stopped. Hold the arm or move it to a safe pose before exiting.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 6</span>
    <div>
      <h2>Test gravity compensation after all basic checks</h2>
      <p>Gravity compensation depends on URDF mass, center of mass, inertia, motor direction, zero offsets, and friction. Do not tune gains blindly.</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Basic floating mode</b><span>Uses gravity feedforward torque to make the arm feel lighter and manually movable.</span></div>
    <div className="module-summary-card"><b>Velocity-lock mode</b><span>Locks the current pose when end-effector velocity is low, then updates the target when the arm is pushed.</span></div>
    <div className="module-summary-card"><b>Safety tuning</b><span>Enable only selected joints for first tests and adjust torque scaling gradually.</span></div>
  </div>

  <details className="content-details" open>
    <summary>6.1 Basic gravity compensation: 9_gravity_compensation.py</summary>
    <pre><code>{`uv run python example/9_gravity_compensation.py`}</code></pre>
    <div className="callout danger"><strong>Exit warning:</strong> when stopping the script with Ctrl+C, the program may directly disable all motors and the arm will not automatically return to zero. Hold the arm or move it to a safe pose before exiting.</div>
  </details>

  <details className="content-details" open>
    <summary>6.2 End-effector velocity lock: 10_gravity_compensation_lock.py</summary>
    <pre><code>{`uv run python example/10_gravity_compensation_lock.py`}</code></pre>
    <p>The terminal displays LOCKED or UPDATE, end-effector velocity, angular velocity, and gravity compensation torque.</p>
  </details>

  <details className="content-details">
    <summary>6.3 Enable only selected joints for safety testing</summary>
    <pre><code>{`ENABLED_JOINTS = ["joint1"]  # Enable only joint1 for first safety tests`}</code></pre>
  </details>

  <details className="content-details">
    <summary>6.4 Adjust individual joint compensation carefully</summary>
    <pre><code>{`tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3`}</code></pre>
    <p>For example, <code>{`tau_g[2] *= 1.2`}</code> increases the gravity compensation torque of joint 2 by 20%. Adjust one item at a time based on the actual floating effect.</p>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>Common issues</h2>
  </div>

  <details className="content-details" open>
    <summary>Permission denied</summary>
    <p>For B601-RS, first check whether the CAN interface exists and is up. If using a SocketCAN device, configure <code>{`can0`}</code> before running examples.</p>
    <pre><code>{`ip -br link
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
  </details>

  <details className="content-details">
    <summary>IK solving fails or returns abnormal results</summary>
    <p>Check whether the target pose is inside the workspace, whether orientation constraints are too strict, whether the initial joint guess is far away, and whether joint limits are correct. Try position-only IK first.</p>
  </details>

  <details className="content-details">
    <summary>RobStride motors cannot read status</summary>
    <p>Some MotorBridge protocol paths may not expose the same status fields as DM motors. Use actual motion feedback and the ping command to confirm communication.</p>
  </details>

  <details className="content-details">
    <summary>Gravity compensation is poor</summary>
    <p>Check URDF mass, center of mass, inertia, joint direction, zero offsets, torque constants, friction, and assembly differences. Do not simply increase gains.</p>
  </details>

  <details className="content-details">
    <summary>How to switch between Damiao and RobStride motor configurations</summary>
    <p>Modify the configuration file and load the corresponding hardware YAML. For B601-RS, use <code>{`rebotarm_rs.yaml`}</code>.</p>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>References</span>
    <h2>Reference documents</h2>
  </div>
  <div className="reference-grid">
    <a href="https://stack-of-tasks.github.io/pinocchio/" target="_blank">Pinocchio Official Documentation</a>
    <a href="https://github.com/rdeits/meshcat" target="_blank">MeshCat GitHub</a>
    <a href="https://github.com/motorbridge/motorbridge" target="_blank">MotorBridge SDK</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py" target="_blank">reBotArm_control_py</a>
    <a href="https://forum.seeedstudio.com/" target="_blank">Seeed Studio Forum</a>
  </div>
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
      <span className="course-path-copy"><strong>Getting Started</strong><span>Complete unboxing, wiring, power checks, PCAN-USB setup, calibration, and first motion tests.</span></span>
      <span className="course-tag">Start here</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot Teleoperation and Data Collection</strong><span>Teleoperate the arm, connect cameras, record datasets, and prepare imitation-learning tasks.</span></span>
      <span className="course-tag">Data collection</span>
    </a>
    <a className="course-path-item active" href="/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio Kinematics Visualization</strong><span>Understand robot models, joints, coordinate frames, forward/inverse kinematics, trajectories, and gravity compensation.</span></span>
      <span className="course-tag">Current article</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Visual Grasping Demo</strong><span>Combine RGB-D perception, hand-eye calibration, YOLO / GraspNet, and grasp pose generation for real object grasping.</span></span>
      <span className="course-tag">Application</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_rs_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 Integration</strong><span>Connect the arm to ROS2, RViz, MoveIt 2, planning, and higher-level robotics workflows.</span></span>
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
