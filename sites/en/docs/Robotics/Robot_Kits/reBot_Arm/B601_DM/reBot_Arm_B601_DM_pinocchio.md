---
description: This tutorial explains how to use Pinocchio and MeshCat with the reBot Arm B601-DM for kinematic analysis, trajectory planning, gravity compensation, and visual debugging.
title: Getting Started with Pinocchio and MeshCat for reBot Arm B601-DM
keywords:
  - Pinocchio
  - MeshCat
  - reBot Arm
  - B601-DM
  - Kinematics
  - Trajectory Planning
  - Gravity Compensation
  - Robot
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
url: https://wiki.seeedstudio.com/rebot_arm_b601_dm_pinocchio_meshcat/
---

# Getting Started with Pinocchio and MeshCat for reBot Arm B601-DM

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Analyze, visualize, and debug reBot Arm B601-DM kinematics with Pinocchio and MeshCat</h2>
    <p>This guide is for users who have already completed the basic B601-DM power and communication checks. It walks through environment setup, single-motor tests, zero-position reading, FK / IK validation, trajectory control, gravity compensation, and MeshCat visualization.</p>
    <div className="hero-actions">
      <a href="#quick-path">View Workflow</a>
      <a href="#debug-tools">Debug Tools</a>
      <a href="#simulation">Open Simulation</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Recommended Order</strong>
    <span>Start with simulation, then validate FK / IK, and only then connect to the real robotic arm.</span>
    <span>B601-DM uses 24V power and Damiao DM motors. Check USB2CAN and power wiring before real-arm testing.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Warning: Clear the Robot Workspace Before Running</strong>
    <p>
      Before running any program that moves the robotic arm, clear all valuable items,
      fragile objects, tools, cables, and unrelated objects within a <strong>1-meter radius</strong>
      of the robot workspace. During debugging and operation, personnel must stay outside
      the robot motion range.
    </p>
    <ul>
      <li>Do not touch joints, motors, links, the gripper, or the end effector after the robotic arm is powered on.</li>
      <li>Before calibration, teleoperation, IK control, trajectory control, gravity compensation, ROS2 / MoveIt execution, or visual grasping, make sure the arm base is firmly fixed.</li>
      <li>If abnormal motion, noise, vibration, loose cables, poor power contact, or communication loss occurs, stop the program immediately and power off the system before inspection.</li>
      <li>Always power off the system before plugging or unplugging motor cables, CAN cables, USB2CAN / PCAN-USB adapters, XT30 connectors, or power connectors.</li>
    </ul>
  </div>
</div>


<div className="quick-note">
  <strong>Safety reminder:</strong> MIT control and real-arm IK control can move very quickly. Clamp the base, keep at least 1 meter away from the arm, and start with small angles, low speeds, and short target motions.
</div>

<nav className="doc-nav" aria-label="Pinocchio MeshCat quick navigation">
  <a href="#quick-path">Path</a>
  <a href="#overview">Overview</a>
  <a href="#install">Install</a>
  <a href="#debug-tools">Motor Debug</a>
  <a href="#kinematics">Kinematics</a>
  <a href="#gravity">Gravity</a>
  <a href="#simulation">Simulation</a>
</nav>

<section id="quick-path" className="section-card">
  <div className="section-title">
    <span>Start Here</span>
    <h2>Recommended workflow</h2>
    <p>Pinocchio and MeshCat are lower-level tools for kinematics, dynamics, and control debugging. Start with scripts that do not move the real robot, then gradually move to hardware control.</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#install"><b>1. Install the environment</b><span>Use uv to sync reBotArm_control_py dependencies and confirm Python, Pinocchio, MeshCat, and MotorBridge are available.</span><em>Start here</em></a>
    <a className="path-card" href="#debug-tools"><b>2. Test motors and zeros</b><span>Use the single-motor console and joint reading scripts to verify USB2CAN, motor IDs, zero positions, and directions.</span><em>Hardware check</em></a>
    <a className="path-card" href="#kinematics"><b>3. Validate FK / IK</b><span>Use FK and IK scripts to verify the URDF, joint limits, end-effector frame, and target workspace.</span><em>Core step</em></a>
    <a className="path-card" href="#simulation"><b>4. Use MeshCat simulation</b><span>Visualize the arm pose, target frame, reference trajectory, and actual trajectory in a browser.</span><em>Highly recommended</em></a>
    <a className="path-card" href="#gravity"><b>5. Try gravity compensation</b><span>Attempt gravity compensation only after URDF parameters and motor directions have been verified.</span><em>Advanced</em></a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Detailed Steps</span>
    <h2>Safe debugging sequence</h2>
    <p>Follow this sequence to move from software-only validation to real-arm control with lower risk.</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>Finish the quick start</strong><p>Verify power, wiring, zero position, and communication before using low-level control scripts.</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>Install and sync the environment</strong><p>Use uv to create a reproducible Python environment and confirm Pinocchio / MeshCat imports.</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>Check single motor behavior</strong><p>Verify CAN / USB2CAN communication, motor ID, zero, state feedback, and direction.</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>Validate FK / IK in software</strong><p>Check units, frames, workspace, and joint limits before sending commands to the real arm.</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>Visualize with MeshCat</strong><p>Use browser visualization to inspect poses, trajectories, and target frames.</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>Move real hardware slowly</strong><p>Start from short distances, small angles, long durations, and safe stop procedures.</p></div>
  </div>
</section>


<section id="overview" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>Project overview</h2>
    <p>Pinocchio provides efficient rigid-body kinematics, dynamics, Jacobian, and trajectory computation. MeshCat provides real-time browser-based visualization of the robot model, target poses, and trajectories. Together, they are useful for robotic arm control algorithm debugging.</p>
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
    <div><strong>Forward / inverse kinematics</strong><span>Compute the end-effector pose from joint angles, or solve joint angles from a target pose to validate workspace and joint limits.</span></div>
    <div><strong>MeshCat visualization</strong><span>Display the URDF model, end-effector frame, target pose, and planned paths in a browser to diagnose IK failures.</span></div>
    <div><strong>Trajectory planning</strong><span>Use SE(3) geodesic trajectories, minimum-jerk profiles, and CLIK tracking to reduce abrupt joint motion.</span></div>
    <div><strong>Gravity compensation</strong><span>Compute joint gravity torques from the dynamics model. Real results depend on URDF mass, center of mass, gear ratio, friction, and motor direction accuracy.</span></div>
  </div>

  <div className="buy-box">
    <a href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">Get reBot Arm B601-DM</a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>Hardware and environment requirements</h2>
    <p>The B601-DM version uses Damiao motors and USB2CAN communication. The default operating voltage is 24V DC.</p>
  </div>

  | Item | Requirement |
  |------|-------------|
  | Robotic arm | reBot Arm B601-DM |
  | Motors | Damiao DM4340 / DM4310 |
  | Communication | USB2CAN serial bridge or CAN interface |
  | Power | 24V DC |
  | OS | Ubuntu 22.04+ |
  | Python | 3.10+ |

  <div className="callout warning">
    <strong>Before real-arm control:</strong> Complete the basic quick-start checks first, including power, wiring, zero position, and motor ID checks. If you only want to learn FK / IK and MeshCat, you can run the simulation scripts without connecting the robot.
  </div>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>Install the environment</h2>
      <p>This project uses uv for dependency management. uv creates a virtual environment and installs dependencies based on pyproject.toml and uv.lock.</p>
    </div>
  </div>

  <div className="command-card">
    <h3>1. Install uv</h3>
    <pre><code>{`curl -LsSf https://astral.sh/uv/install.sh | sh`}</code></pre>
  </div>

  <div className="command-card">
    <h3>2. Clone the repository and sync dependencies</h3>
    <pre><code>{`git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync`}</code></pre>
  </div>

  <details className="content-details" open>
    <summary>Device permissions before running examples</summary>

    Damiao USB2CAN is commonly mapped to <code>/dev/ttyACM0</code>. If your device path is different, check it with <code>dmesg</code> or <code>ls /dev/ttyACM*</code>.

    <pre><code>{`sudo chmod 666 /dev/ttyACM0

# If using a SocketCAN interface, you can also check can0:
ip -br link
sudo chmod 666 /dev/can0 2>/dev/null || true`}</code></pre>
  </details>
</section>

<section id="debug-tools" className="section-card step-section">
  
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
      <h2>Motor debugging tools</h2>
      <p>Verify single-motor communication, zero positions, and joint angles before running IK or trajectory control.</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>Single motor console: 0x01damiao_test.py</summary>
    <p>Use this script to test MotorBridge SDK communication with a single Damiao motor, including enabling, mode switching, and zero setting.</p>
    <pre><code>{`uv run python example/0x01damiao_test.py`}</code></pre>

    | Command | Description |
    |---------|-------------|
    | `enable` / `disable` | Enable / disable motor |
    | `set_zero` | Set current motor zero position |
    | `state` | Read motor state |
    | `mode mit` | MIT mode |
    | `mode posvel` | Position-velocity mode with optional PID parameters |
    | `mode vel` | Velocity mode |
  </details>

  <details className="content-details">
    <summary>Zero setting and joint monitoring: 2_zero_and_read.py</summary>
    <p>Set all joint zeros and print joint angles in real time. Run this before FK / IK tests to verify zero positions and joint directions.</p>
    <pre><code>{`uv run python example/2_zero_and_read.py

# Example output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01`}</code></pre>
  </details>

  <details className="content-details">
    <summary>MIT control mode: 3_mit_control.py</summary>
    <div className="callout danger"><strong>Warning:</strong> MIT mode responds quickly and can output high torque. For the first test, use very small angles and keep people and equipment away from the arm.</div>
    <pre><code>{`uv run python example/3_mit_control.py
> 30 0 0 0 0 0
> state
> q`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Position-velocity control: 4_pos_vel_control.py</summary>
    <p>POS_VEL mode is usually smoother than directly sending MIT target angles, making it a good starting point for basic joint motion tests.</p>
    <pre><code>{`uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0
> state
> q`}</code></pre>
  </details>
</section>

<section id="kinematics" className="section-card step-section">
  
<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear all valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>Kinematics testing</h2>
      <p>Forward kinematics computes the end-effector pose from joint angles. Inverse kinematics solves joint angles from a target pose. Start without real-arm motion to verify whether the target is inside the workspace.</p>
    </div>
  </div>

  <div className="callout">
    <strong>Additional note:</strong> FK / IK results depend on URDF, joint limits, frame definitions, and units. Positions are in meters. Some scripts use degrees for Euler angles, while simulation scripts may use radians. Follow each script's input description carefully.
  </div>

  <details className="content-details" open>
    <summary>Forward kinematics: 5_fk_test.py</summary>
    <p>Input six joint angles and print end-effector position, rotation matrix, and XYZ Euler angles.</p>
    <pre><code>{`uv run python example/5_fk_test.py
> 0 0 0 0 0 0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Inverse kinematics: 6_ik_test.py</summary>
    <p>Input a target position, or target position plus orientation. The script attempts to solve the corresponding joint angles.</p>
    <pre><code>{`uv run python example/6_ik_test.py

# Position only, unit: m
> 0.28 0 0.3

# Position + orientation, position in m, orientation in deg
> 0.28 0 0.3 0 1 0`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Real-arm IK control in MIT mode: 7_arm_ik_control.py</summary>
    <div className="callout danger"><strong>Real-arm risk:</strong> This script moves the real robotic arm. For the first run, use a small target close to the current pose instead of a far-away target.</div>
    <pre><code>{`uv run python example/7_arm_ik_control.py

# Position only
> 0.3 0.0 0.4

# Position + orientation
> 0.3 0.0 0.4 0.0 0.0 0.5

# Read current joint state
> state

# Read current end-effector state
> end_state`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Smooth IK trajectory control: 8_arm_traj_control.py</summary>
    <p>This script interpolates a smooth trajectory over the target duration. It is generally safer for real-arm testing than jumping directly to a target pose.</p>
    <pre><code>{`uv run python example/8_arm_traj_control.py

# Position only, default 2 seconds
> 0.3 0.0 0.4

# Position + orientation + duration
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0`}</code></pre>
  </details>
</section>

<section id="gravity" className="section-card step-section">
  
<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear all valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>Gravity compensation testing</h2>
      <p>Gravity compensation depends on consistency between the dynamics model and the real robot. Errors in URDF mass, center of mass, inertia, or joint direction will reduce compensation quality.</p>
    </div>
  </div>

  <div className="feature-grid">
    <div><strong>Basic gravity compensation</strong><span>Uses <code>tau = g(q)</code> to cancel joint gravity torque and make the arm feel floating and manually movable.</span></div>
    <div><strong>High-damping lock mode</strong><span>Locks the current joint position at low end-effector velocity, resists small disturbances, and updates the target only when pushed beyond the velocity threshold.</span></div>
  </div>

  <details className="content-details" open>
    <summary>9_gravity_compensation.py</summary>
    <pre><code>{`uv run python example/9_gravity_compensation.py`}</code></pre>
    <p>The terminal prints desired gravity torque for each joint. Press <code>Ctrl+C</code> to stop.</p>
  </details>

  <details className="content-details">
    <summary>10_gravity_compensation_lock.py</summary>
    <pre><code>{`uv run python example/10_gravity_compensation_lock.py`}</code></pre>
    <p>The terminal displays <code>LOCKED</code> or <code>UPDATE</code>, as well as end-effector linear velocity, angular velocity, and gravity torque for each joint.</p>
  </details>

  <div className="callout warning">
    <strong>Debugging advice:</strong> If the arm slowly drops, jitters, or compensates in the wrong direction, first check URDF mass / center of mass, joint direction, zero offsets, motor torque constants, and friction dead zones. Do not simply increase gains.
  </div>
</section>

<section id="simulation" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>MeshCat simulation and visualization</h2>
      <p>MeshCat starts a web-based visualizer locally. After launching a script, open the URL printed in the terminal to view the robot model.</p>
    </div>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" alt="MeshCat trajectory simulation" />
  </div>

  <details className="content-details" open>
    <summary>Forward kinematics simulation: sim/fk_sim.py</summary>
    <pre><code>{`uv run python example/sim/fk_sim.py

# Input six joint angles, unit: deg
> 0 0 0 0 0 0
> 45 -30 15 -60 90 -180`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Inverse kinematics simulation: sim/ik_sim.py</summary>
    <pre><code>{`uv run python example/sim/ik_sim.py

# Position only, unit: m
> 0.25 0.0 0.25

# Position + orientation, orientation unit: rad
> 0.25 0.0 0.25 0 0 0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Trajectory planning simulation: sim/traj_sim.py</summary>
    <pre><code>{`uv run python example/sim/traj_sim.py

# Input x y z [roll pitch yaw], position in m, orientation in rad
> 0.25 0.0 0.25 0 0 0`}</code></pre>
    <p>This script displays the reference path and actual path, and plays back the complete trajectory animation in MeshCat.</p>
  </details>

  <details className="content-details">
    <summary>Visualizer helper: sim/visualizer.py</summary>
    <pre><code>{`from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)
viz.draw_path(points, "path_name", color)`}</code></pre>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>Common issues</h2>
  </div>

  <details className="content-details" open>
    <summary>Permission denied</summary>
    <p>Grant permission to the serial or CAN device:</p>
    <pre><code>{`sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/can0 2>/dev/null || true`}</code></pre>
  </details>

  <details className="content-details">
    <summary>IK fails or returns abnormal results</summary>
    <p>Check whether the target is outside the workspace, whether orientation constraints are too strict, whether the initial joint guess is too far away, and whether joint limits are correct. When debugging, try position-only IK first.</p>
  </details>

  <details className="content-details">
    <summary>MeshCat page cannot be opened</summary>
    <p>Check the URL printed by the terminal. If running on a remote machine, make sure port forwarding or network access to that host is available.</p>
  </details>

  <details className="content-details">
    <summary>Gravity compensation is not accurate</summary>
    <p>Gravity compensation is sensitive to link mass, center of mass, and inertia in the URDF. If the real structure or 3D-printed parts differ from the URDF, measure the actual parameters and update the URDF before testing again.</p>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>References</span>
    <h2>References</h2>
  </div>
  <div className="reference-grid">
    <a href="https://stack-of-tasks.github.io/pinocchio/">Pinocchio Documentation</a>
    <a href="https://github.com/rdeits/meshcat">MeshCat GitHub</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py">reBotArm_control_py</a>
    <a href="https://github.com/motorbridge/motorbridge">MotorBridge SDK</a>
    <a href="https://forum.seeedstudio.com/">Seeed Studio Forum</a>
  </div>
</section>


<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue Learning</span>
    <h2>reBot B601-DM learning path</h2>
    <p>These tutorials follow the same order as the Robotics Page learning path: <strong>Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2</strong>.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>Complete unboxing, wiring, power checks, driver setup, calibration, and first motion tests.</span></span>
      <span className="course-tag">Start here</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot Teleoperation and Data Collection</strong><span>Teleoperate the arm, connect cameras, record datasets, train policies, and evaluate real-arm behavior.</span></span>
      <span className="course-tag">Data collection</span>
    </a>
    <a className="course-path-item active" href="/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio Kinematics Visualization</strong><span>Understand robot models, joints, coordinate frames, forward/inverse kinematics, trajectories, and gravity compensation.</span></span>
      <span className="course-tag">Current article</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Visual Grasping Demo</strong><span>Combine RGB-D perception, hand-eye calibration, YOLO / GraspNet, and grasp pose generation for real object grasping.</span></span>
      <span className="course-tag">Application</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_dm_ros2_integration/">
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
.content-details summary::after, .video-details summary::after { content: "Open"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after, .video-details[open] summary::after { content: "Close"; }
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

/* Shared safety warning and course navigation */
.safety-alert {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: flex-start;
  margin: 1.15rem 0 1.35rem;
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
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  border-radius: 16px;
}
.safety-alert.compact .safety-alert-content strong { margin-bottom: 0.25rem; }
.course-nav-section {
  margin-top: 1.4rem;
}
.course-path-grid {
  display: grid;
  gap: 0.85rem;
}
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border, rgba(148, 163, 184, 0.28));
  background: var(--rb-surface, var(--panel-bg, #ffffff));
  text-decoration: none !important;
  color: var(--rb-text, var(--text-main, #111827));
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.course-step:hover {
  transform: translateY(-1px);
  border-color: rgba(37, 99, 235, 0.32);
  box-shadow: 0 16px 32px rgba(37, 99, 235, 0.10);
}
.course-step.active {
  border-color: rgba(37, 99, 235, 0.42);
  background: linear-gradient(135deg, rgba(239, 246, 255, 0.92), rgba(240, 253, 250, 0.78));
}
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
  color: #ffffff;
  background: #2563eb;
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.24);
}
.course-step strong {
  display: block;
  color: var(--rb-text, var(--text-main, #111827));
  font-size: 1rem;
  margin-bottom: 0.24rem;
}
.course-step small {
  display: block;
  color: var(--rb-muted, var(--text-muted, #64748b));
  line-height: 1.55;
  font-size: 0.92rem;
}
.course-step em {
  justify-self: end;
  white-space: nowrap;
  font-style: normal;
  font-size: 0.78rem;
  font-weight: 800;
  color: #2563eb;
  background: #eff6ff;
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 999px;
  padding: 0.35rem 0.65rem;
}
html[data-theme='dark'] .safety-alert {
  border-color: rgba(248, 113, 113, 0.42);
  background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18));
  color: #fecaca;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
}
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong,
html[data-theme='dark'] .safety-alert-content p,
html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-step {
  background: rgba(31, 32, 35, 0.84);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .course-step.active {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.18), rgba(20, 184, 166, 0.10));
  border-color: rgba(96, 165, 250, 0.38);
}
html[data-theme='dark'] .course-step strong { color: #e5e7eb; }
html[data-theme='dark'] .course-step small { color: #cbd5e1; }
html[data-theme='dark'] .course-step em { color: #93c5fd; background: rgba(37, 99, 235, 0.16); border-color: rgba(96, 165, 250, 0.28); }
@media (max-width: 640px) {
  .safety-alert { grid-template-columns: 1fr; }
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-step em { grid-column: 2; justify-self: start; }
}




/* Polished step cards and course path refinements */
.step-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}
.step-card {
  position: relative;
  padding: 1rem 1.05rem 1rem 1.1rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: linear-gradient(180deg, var(--rb-surface, #fff), var(--rb-surface-soft, #f8fafc));
  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.06);
}
.step-card .step-mini {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 0.65rem;
  margin-bottom: 0.65rem;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent));
  font-weight: 900;
  font-size: 0.86rem;
}
.step-card strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.35rem;
}
.step-card p,
.step-card span {
  display: block;
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}
.module-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}
.module-summary-card {
  padding: 1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface, #fff);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.module-summary-card b {
  display: block;
  margin-bottom: 0.35rem;
  color: var(--rb-text);
}
.module-summary-card span {
  display: block;
  color: var(--rb-muted);
  line-height: 1.65;
}
.path-grid > div:not([class]) {
  padding: 1rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: var(--rb-surface, #fff);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.path-card p { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.6; }
.course-path-section { margin-top: 2rem; }
.course-path-grid {
  display: grid;
  gap: 0.85rem;
  margin-top: 1rem;
}
.course-path-item,
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.95rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface, #fff);
  text-decoration: none !important;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.course-path-item.active,
.course-step.active {
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
.course-path-copy strong,
.course-step strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}
.course-path-copy span,
.course-step small {
  display: block;
  color: var(--rb-muted);
  line-height: 1.6;
}
.course-tag,
.course-step em {
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
@media (max-width: 720px) {
  .course-path-item,
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-tag,
  .course-step em { grid-column: 2; justify-self: start; }
}
html[data-theme='dark'] .step-card,
html[data-theme='dark'] .module-summary-card,
html[data-theme='dark'] .course-path-item,
html[data-theme='dark'] .course-step,
html[data-theme='dark'] .path-grid > div:not([class]) {
  background: rgba(15, 23, 42, 0.72);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .course-path-item.active,
html[data-theme='dark'] .course-step.active {
  background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12));
}

`}</style>
