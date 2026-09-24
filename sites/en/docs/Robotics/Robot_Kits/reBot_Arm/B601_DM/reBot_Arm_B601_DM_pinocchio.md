---
description: This tutorial introduces how to use Pinocchio and MeshCat for kinematic analysis and visualization on the reBot Arm B601-DM robotic arm.
title: B601-DM with Pinocchio
keywords:
  - Pinocchio
  - MeshCat
  - Robotic Arm
  - Robot
  - LeRobot
  - Kinematics
slug: /rebot_arm_b601_dm_pinocchio_meshcat
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-06-30
  author: LiuJunjie
translation:
  skip: [zh-CN]
createdAt: '2026-03-24'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/rebot_arm_b601_dm_pinocchio_meshcat/
---

import '/src/css/rebot-wiki-style.css';
import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm B601-DM Pinocchio & MeshCat

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm.png" alt="reBot Arm B601-DM" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Get One Now</span>
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

:::tip
This example code can be used to control the robotic arm motors or poses, including single motor control, forward/inverse kinematics control and testing, arm zero position setting and motor angle reading, MeshCat visualization system, and more.
:::

<div align="center">
  <a href="https://github.com/stack-of-tasks/pinocchio">Pinocchio</a> is an open-source library for robotics dynamics analysis and optimization. It provides efficient forward/inverse kinematics, dynamics calculations, and trajectory planning capabilities.
</div>

<div align="center">
  <a href="https://github.com/rdeits/meshcat">MeshCat</a> is a web-based 3D visualization tool that can display robot status and motion trajectories in real-time.
</div>

This project combines Pinocchio's powerful computing capabilities with MeshCat's intuitive visualization, providing a complete set of kinematic analysis and debugging tools for reBot Arm B601-DM.

<GitHubStarButton owner="Seeed-Projects" repo="reBotArm_control_py" />

---

## Project Features

1. **Complete Kinematic Analysis**
   Supports Forward Kinematics (FK) and Inverse Kinematics (IK) calculations, able to solve the robot arm's end-effector pose in real-time.

2. **Real-time 3D Visualization**
   Displays robot arm status and motion trajectories in real-time through MeshCat in the browser, no additional software required.

3. **Trajectory Planning and Tracking**
   Implements SE(3) geodesic trajectory planning, supporting CLIK (Closed-Loop Inverse Kinematics) tracking control.

4. **Gravity Compensation Control**
   Calculates joint gravity torque based on Pinocchio dynamics model, achieving the "floating" effect of the robot arm.

5. **Open Source & Extensible**
   All code is open source, supporting users to customize control algorithms and visualization effects according to their needs.

## Specifications

The hardware for this tutorial is provided by [Seeed Studio](https://www.seeedstudio.com/)

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Specification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Robot Arm Model</td>
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>Degrees of Freedom</td>
      <td>6-DOF + Gripper</td>
    </tr>
    <tr>
      <td>Motor Model</td>
      <td>Damiao DM4340 / DM4310</td>
    </tr>
    <tr>
      <td>Communication Method</td>
      <td>CAN Bus via USB-CAN Adapter</td>
    </tr>
    <tr>
      <td>Operating Voltage</td>
      <td>24V DC</td>
    </tr>
    <tr>
      <td>Control Method</td>
      <td>PC</td>
    </tr>
    <tr>
      <td>Recommended Operating Temperature Range</td>
      <td>0°C ~ 40°C</td>
    </tr>
  </tbody>
</table>

## Bill of Materials (BOM)

| Component | Quantity | Included |
| -- | -- | -- |
| reBot Arm B601-DM Robotic Arm | 1 | ✅ |
| USB2CAN Serial Bridge | 1 | ✅ |
| Power Adapter (24V) | 1 | ✅ |
| USB-C Cable | 1 | ✅ |
| Gripper | 1 | ✅ |

## Environment Requirements

:::caution Prerequisite — Complete the Arm Quick Start First
Before proceeding with this tutorial, you **must** finish the **[reBot Arm B601-DM Quick Start](/rebot_b601_dm_getting_started)** document end-to-end, including:

- Hardware unboxing, wiring, and power-on checklist
- Serial / CAN device permission (`sudo chmod 666 /dev/ttyACM0` or `/dev/can0`)
- Zero calibration of all joints (`2_zero_and_read.py`) and verifying the arm can be commanded in MIT / POS_VEL mode

This tutorial assumes the arm is already responsive on the bus, joints are zeroed, and the operator is familiar with the relevant safety limits. Skipping the Quick Start can lead to mis-configured motors, stalled joints, or arm drops.
:::

| Item | Requirement |
| ------ | ------------- |
| **Python** | 3.10+ |
| **Operating System** | Ubuntu (Ubuntu 24.04 LTS recommended) |
| **Communication Interface** | USB2CAN Serial Bridge or CAN Interface |

---

## Installation Steps

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>Install uv (if not installed)</h4>
<p className="rebot-step-label">Step 1</p>

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

After installation, run the following command to verify that `uv` is available:

```bash
uv --version
```

If the installation succeeded, you should see output similar to the following (the version and platform may differ):

```text
uv 0.11.31 (x86_64-unknown-linux-gnu)
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>Sync Environment (Install All Dependencies)</h4>
<p className="rebot-step-label">Step 2</p>

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` will automatically create a virtual environment (if it doesn't exist) and install all dependencies according to `pyproject.toml` and `uv.lock`.
:::

</div>
</section>
</div>

## Tuning MIT / POS_VEL Controller Parameters {#tune-controller-params}

This section explains **how to modify** the controller parameters for each joint of the arm under **MIT mode** and **POS_VEL mode**, and how to make the changes take effect.

:::tip This section only covers "where / how to change", not "what value to use"
Suitable parameters can only be obtained through **on-hardware tuning**. This section only covers: where the parameters live, what each field controls, and how to make the changes effective and verify them. For specific tuning strategies (e.g., trial-and-error, Ziegler‑Nichols), please refer to general motor control references.
:::

### Configuration File Location

| Hardware version | Motor config file | Switch entry |
| --- | --- | --- |
| **reBot Arm B601-DM** (this document) | `config/rebotarm_dm.yaml` | Set `hardware_yaml: "rebotarm_dm.yaml"` in `config/rebotarm.yaml` |
| **reBot Arm B601-RS** | `config/rebotarm_rs.yaml` | Set `hardware_yaml: "rebotarm_rs.yaml"` in `config/rebotarm.yaml` |

:::caution Do not edit `rebotarm.yaml` directly
That file only contains a single line `hardware_yaml: ...`; all motor parameters live in `rebotarm_dm.yaml` / `rebotarm_rs.yaml`.
:::

### Configuration File Structure

Each joint has its own entry, grouped by **control mode**:

```yaml
joints:
  - name: joint1
    motor_id: 0x01
    feedback_id: 0x11
    model: "4340P"
    vendor: "damiao"
    MIT:
      kp: 120.0
      kd: 8.0
    POS_VEL:
      vel_kp: 0.0125
      vel_ki: 0.004
      pos_kp: 150.0
      pos_ki: 0.5
      vlim: 5.0
  # ... joint2 ~ joint6 follow the same structure ...
```

How to locate:

- **By joint name**: to modify a joint, find the `- name: jointX` block;
- **By mode**: under that joint, `MIT:` holds MIT mode parameters, `POS_VEL:` holds POS_VEL mode parameters;
- **Current mode determines which set is sent**: the script switches modes via `mode mit` / `mode posvel`; the motor actually receives the parameters under the corresponding sub-block.

### MIT Mode Field Meanings

| Field | Role |
| --- | --- |
| `kp` | Position-loop proportional gain: the "stiffness" of tracking the target position. |
| `kd` | Velocity-loop damping gain: suppresses oscillations caused by position error. |

### POS_VEL Mode Field Meanings

| Field | Role |
| --- | --- |
| `vel_kp` | Velocity-loop proportional gain. |
| `vel_ki` | Velocity-loop integral gain. |
| `pos_kp` | Position-loop proportional gain. |
| `pos_ki` | Position-loop integral gain (only present in some vendor configs). |
| `vlim` | Speed limit, caps the maximum motion speed. |

:::warning Field definitions differ across vendors
Damiao (DM) and Robostride (RS) motors use different protocol-layer units, so **the same field name has no cross-vendor comparability**. Modifying RS's `vel_kp` and modifying DM's `vel_kp` mean different things. Please interpret each YAML according to its own field order, do not compare values across config files.
:::

:::caution Limit the Test Scope Before Tuning
Large `kp` / `kd` changes across several joints can cause immediate oscillation, overcurrent, or hard-stop collisions if any joint direction or sign is wrong. Before tuning, clear the arm's workspace and plan to test **one joint and one mode at a time, in small steps**.
:::

### Editing Procedure

1. **Stop any running script**. The motor is enabled when you edit YAML, changes do not take effect immediately, and inconsistent behavior is easy to trigger.
2. **Edit the corresponding YAML file**:

   ```bash
   # Example for DM
   vim config/rebotarm_dm.yaml
   ```

   - Only change the joint you need to tune (e.g., `joint1`); leave unrelated joints alone;
   - Within one joint, only change the mode you need to tune (MIT or POS_VEL); do not modify the other mode's fields without reason.
3. **Preserve YAML indentation**: 2 spaces per level, keys separated from values by `:`. Wrong indentation causes `yaml.safe_load` parsing to fail, and all parameters will fall back to defaults.
4. **Restart the script after saving**. The YAML is read once at script startup; **runtime edits do not take effect immediately**.
5. **Single-joint verification**: use a script like `3_mit_control.py` (MIT) / `4_pos_vel_control.py` (POS_VEL) to verify the change with a **small single-joint motion** before doing a full-arm test.

### Verifying the Change Took Effect

- **Runtime observation**: enable the motor in `3_mit_control.py` / `4_pos_vel_control.py` and check `state`; if parameters look unchanged or the motor behaves exactly as before, the YAML was edited incorrectly or got overridden by defaults.
- **YAML self-check**: parse it directly with Python and print one joint's fields to confirm the values match what you just wrote:

  ```bash
  uv run python -c "import yaml; print(yaml.safe_load(open('config/rebotarm_dm.yaml'))['joints'][0])"
  ```

- **Quick rollback**: `git checkout config/rebotarm_dm.yaml` restores the repository defaults.

---

## Debug Tools Introduction

:::tip Permission Settings
Before running hardware control examples, you need to set device permissions:

```bash
# Set serial device permissions (Damiao USB2CAN)
sudo chmod 666 /dev/ttyACM0

# Or set CAN device permissions (e.g., can0)
sudo chmod 666 /dev/can0
```

:::
<details>
<summary>Debugging Tools (use only when an exception occurs)</summary>

**Single Motor Control Console (`0x01damiao_test.py`)**

Direct single motor testing using the motorbridge SDK.

**How to Run**:

```bash
uv run python example/0x01damiao_test.py
```

**Interactive Commands**:

| Command | Description |
| ------ | ------ |
| `enable` / `disable` | Enable/Disable motor |
| `set_zero` | Set zero position |
| `state` | View status |
| `ping` | Ping motor to get response |
| `clear_error` | Clear motor errors |
| `mode <mit/posvel/vel>` | Switch control mode |
| `mit <pos> [vel] [kp] [kd]` | MIT mode command |
| `posvel <pos> [vlim]` | POS_VEL mode command |
| `vel <velocity>` | Pure velocity mode command |
| `read_param <id> [type]` | Read motor parameters |
| `write_param <id> <value> [type]` | Write motor parameters |
| `loop` | Enter loop control mode |
| `q` / `quit` | Quit |

---

**Zero Calibration and Angle Monitoring (`2_zero_and_read.py`)**

Automatically set all joint zeros and display joint angles in real-time.

**How to Run**:

```bash
uv run python example/2_zero_and_read.py

# Example Output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01
```

---
</details>

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>MIT Control Mode (alternative on reBot DM, view on demand — POS_VEL is recommended)</h4>
<p className="rebot-step-label">Demo 3 · 3_mit_control.py</p>

:::warning Optional — MIT Is the Alternative Mode on DM
For the **reBot Arm B601-DM**, POS_VEL (Position‑Velocity) is generally the more appropriate joint-control mode; the Damiao motor protocol natively supports position‑velocity hybrid control with built-in speed limiting. MIT mode usually requires more careful `kp` / `kd` tuning.

This example is not required to complete the tutorial. Unless you specifically need to debug MIT mode, **skip this example** and use the POS_VEL example below. If your goal is smooth end-effector motion along a planned path, go directly to [Smooth Trajectory IK Control (`8_arm_traj_control.py`)](#demo8-traj-control).
:::

Input target angles for all joints to complete motor control in MIT control mode, typically used for force control, impedance control, or scenarios requiring high dynamic response.

:::danger Before Running — This Example Has No Smooth Trajectory Planning
This example sends target joint angles directly to the motors, with **no path or velocity planning**. A large target change can cause sudden high-speed motion and trigger overcurrent protection.

- Run it only when you need to verify low-level MIT joint control. Start by moving one joint by only 5–10 degrees, then increase the change gradually after confirming the response and direction;
- If you need a complete smooth trajectory, skip this example and go to [Smooth Trajectory IK Control (`8_arm_traj_control.py`)](#demo8-traj-control);
- Clear the arm's workspace before running and make sure you can cut power immediately.
:::

<details className="rebot-demo-details">
<summary>Expand Run Instructions (Optional)</summary>

**How to Run**:

```bash
uv run python example/3_mit_control.py
> 30 0 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

</details>

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>Position-Velocity Control Mode</h4>
<p className="rebot-step-label">Demo 4 · 4_pos_vel_control.py</p>

Enter target angles for all joints to control the motors in POS_VEL (Position-Velocity) hybrid mode. Damiao's built-in speed limiting can reduce the impact of target changes, but this example itself does not provide complete smooth trajectory planning.

:::danger Optional — Speed Limiting Is Not Complete Trajectory Planning
Although POS_VEL is the recommended joint-control mode for DM, this example still updates joint position targets directly and does not plan the intermediate path. A large target change can still cause sudden motion, collision, or overcurrent.

- This example is not required to complete the tutorial. If you only need smooth end-effector motion, **skip this example** and go directly to [Smooth Trajectory IK Control (`8_arm_traj_control.py`)](#demo8-traj-control);
- When verifying POS_VEL joint control, start by moving one joint by only 5–10 degrees, then increase the target change gradually;
- Clear the arm's workspace before running and make sure you can cut power immediately.
:::

<details className="rebot-demo-details">
<summary>Expand Run Instructions (Optional)</summary>

**How to Run**:

```bash
uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

</details>

</div>
</section>
</div>

---

## Kinematics Testing

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>Forward Kinematics Testing</h4>
<p className="rebot-step-label">Demo 5 · 5_fk_test.py</p>

Calculate end-effector pose based on joint angles.

**Input**: 6 joint angles (degrees)

**Output**:

- End-effector position (X, Y, Z) — Unit: meters
- Rotation matrix (3×3)
- Euler angles (roll/pitch/yaw) — Unit: degrees

**Example**:

```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
====================================================
  Result / Result
====================================================
  Joint angles (deg): [0. 0. 0. 0. 0. 0.]
  End-effector position (m):
    X = +0.260306
    Y = +0.000000
    Z = +0.191701
  Rotation matrix (R_world^end):
    [+1.000000  +0.000000  -0.000007]
    [+0.000000  +1.000000  +0.000100]
    [+0.000007  -0.000100  +1.000000]
  Euler XYZ (roll, pitch, yaw) [deg]:
    roll   = -0.0057
    pitch  = -0.0004
    yaw    = +0.0000
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>Inverse Kinematics Testing</h4>
<p className="rebot-step-label">Demo 6 · 6_ik_test.py</p>

Solve joint angles based on desired end-effector pose.

**Input Format**:

- Position only: `<x> <y> <z>` (meters)
- Position + Orientation: `<x> <y> <z> <roll> <pitch> <yaw>` (degrees)

**Example**:

```bash
uv run python example/6_ik_test.py

# Usage A
> 0.28 0 0.3  # Position only
====================================================
  Result / Result
====================================================
  Target position : [+0.2800, +0.0000, +0.3000] m
  Converged : Yes
  Iterations: 2000
  Position error: 5.62e-17 m
  Joint angles (deg) [first 6 control joints]:
    joint1     =  -0.0003 deg  (-0.0000 rad)
    joint2     = -22.9687 deg  (-0.4009 rad)
    joint3     = -24.2191 deg  (-0.4227 rad)
    joint4     =  +1.2508 deg  (+0.0218 rad)
    joint5     =  -0.0003 deg  (-0.0000 rad)
    joint6     =  +0.0057 deg  (+0.0001 rad)

# Usage B
> 0.28 0 0.3 0 1 0       # Position + Orientation
====================================================
  Result / Result
====================================================
  Target position   : [+0.2800, +0.0000, +0.3000] m
  Target orientation : [+0.00, +1.00, +0.00] deg
  Converged  : Yes
  Iterations: 2000
  Position error: 6.28e-17 m
  Joint angles (deg) [first 6 control joints]:
    joint1     =  -0.0003 deg  (-0.0000 rad)
    joint2     = -23.3968 deg  (-0.4084 rad)
    joint3     = -25.3018 deg  (-0.4416 rad)
    joint4     =  +2.9054 deg  (+0.0507 rad)
    joint5     =  -0.0003 deg  (-0.0000 rad)
    joint6     =  +0.0057 deg  (+0.0001 rad)
```

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">7</span>
<div className="rebot-step-content">
<h4>Inverse Kinematics Control in MIT Mode</h4>
<p className="rebot-step-label">Demo 7 · 7_arm_ik_control.py</p>

Use inverse kinematics (IK) in MIT mode to specify the 3D coordinates (X, Y, Z) and orientation (Euler angles) where the robotic arm end-effector should move.

**Input Format**:

- Position only: `<x> <y> <z>` (meters)
- Position + Orientation: `<x> <y> <z> <roll> <pitch> <yaw>` (degrees)
- Input `state`: View current actual radian values of each joint.
- Input `end_state`: View current end-effector actual coordinates (m) and Euler angles (rad) in space.

:::danger Optional — This Example Has No Smooth Trajectory Planning
This example sends the IK solution directly as the joint target, with **no path or velocity planning**. A large target-pose change can cause sudden high-speed motion and trigger overcurrent protection.

- This example is not required to complete the tutorial. In most cases, **skip this example** and use the next section, [Smooth Trajectory IK Control (`8_arm_traj_control.py`)](#demo8-traj-control), which includes minimum-jerk acceleration/deceleration planning;
- Run it only when you need to compare or debug IK control without trajectory planning. Keep the first target within 5–10 cm of the current end-effector position;
- Before running, confirm the target pose is reachable, clear the workspace of people and obstacles, and make sure you can cut power immediately.
:::

<details className="rebot-demo-details">
<summary>Expand Run Instructions (Optional)</summary>

**How to Run**:

```bash
uv run python example/7_arm_ik_control.py

#Usage A
> 0.3 0.0 0.4 # Position only (orientation defaults to 0), move the arm end-effector to 0.3 meters forward and 0.4 meters above.

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians.

> ctrl + c # Return to zero position and exit system
```

</details>

</div>
</section>

<section className="rebot-step-item rebot-step-item--recommended">
<span className="rebot-step-number">8</span>
<div className="rebot-step-content">
<h4 id="demo8-traj-control">Inverse Kinematics Control with Smooth Trajectory</h4>
<p className="rebot-step-label">Demo 8 · 8_arm_traj_control.py</p>

Use inverse kinematics (IK) in MIT mode to automatically plan a uniform or smooth acceleration/deceleration motion trajectory within the target time, avoiding severe joint vibration.

**Input Format**:

- Position only: `<x> <y> <z>` (meters)
- Position + Orientation: `<x> <y> <z> <roll> <pitch> <yaw>` (degrees)
- Position + Orientation + Time (default 2.0): `<x> <y> <z> <roll> <pitch> <yaw> <time>` (degrees)
- Input `state`: View current actual radian values of each joint.
- Input `end_state`: View current end-effector actual coordinates (m) and Euler angles (rad) in space.

**How to Run**:

```bash
uv run python example/8_arm_traj_control.py

#Usage A
> 0.3 0.0 0.4 # Position only, orientation defaults to 0, default movement time is 2.0 seconds

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians, default movement time is 2.0 seconds

#Usage C
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 # Move the arm to the specific position and specify 5.0 seconds to slowly move there. (Note: If entering time, the preceding orientation parameters 0 0 0 cannot be omitted)

> ctrl + c # Return to zero position and exit system
```

:::tip What if I observe pose deviation?
If you notice that the **read end-effector pose** differs from the **commanded target pose**, and the **pose itself is reachable** (not outside workspace, not at a singularity), the problem is likely in your MIT / POS_VEL controller parameters. In that case, please refer to the earlier [Tuning MIT / POS_VEL Controller Parameters](#tune-controller-params) section and manually tune `kp` / `kd` etc. using the "single joint, mode by mode, small steps" approach; once tuned, return to this example to verify.
:::

</div>
</section>
</div>

---

## Gravity Compensation Testing

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--caution">
<span className="rebot-step-number">9</span>
<div className="rebot-step-content">
<h4>Gravity Compensation Control — Basic Version</h4>
<p className="rebot-step-label">Demo 9 · 9_gravity_compensation.py</p>

Use the Pinocchio dynamics model to compensate for joint gravity.

**Control Law**:

```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**Expected Behavior**:

- The arm can "float" at any pose
- Won't fall due to its own weight when released
- Can be manually moved to any position

:::caution Normal Exit Performs a Safe Return Home
When you stop the script normally with `Ctrl+C`, it first stops gravity-compensation control and holds the current pose with stiff gains and gravity feedforward. It then returns the arm to zero through a minimum-jerk trajectory; only after homing completes does it disconnect and disable the motors.

Automatic homing depends on normal program execution, communication, and power. Keep people and obstacles outside the arm's workspace and be ready to support the arm during homing. A communication failure, unexpected power loss, or forced termination may prevent the protection sequence from completing; cut power immediately if abnormal motion occurs.
:::

**How to Run**:

```bash
uv run python example/9_gravity_compensation.py
```

**Output**:

- Real-time display of desired torque for each joint (N·m)
- Press `Ctrl+C` to stop and disconnect

:::tip Adjusting Individual Joint Compensation
If some joints are under-compensated or over-compensated due to structural friction or assembly differences, you can apply additional scaling to the corresponding element of the `tau_g` array in the code:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

For example, `tau_g[2] *= 1.2` means increasing the gravity compensation torque of joint 2 by 20%. It is recommended to adjust item by item based on the actual floating effect to avoid making excessively large changes at once.
:::

</div>
</section>

<section className="rebot-step-item rebot-step-item--caution">
<span className="rebot-step-number">10</span>
<div className="rebot-step-content">
<h4>Gravity Compensation Control — End-Effector Velocity Lock Version</h4>
<p className="rebot-step-label">Demo 10 · 10_gravity_compensation_lock.py</p>

Based on the basic gravity compensation, adds end-effector velocity detection and joint angle locking mechanism.

**Control Law**:

```
tau = g(q) + integral_term    — Gravity feedforward + integral term
pos = q_target                 — Target joint angle (locked or updated)
kp = 8.0,  kd = 1.0           — Enhanced stiffness/damping
```

**Lock Logic**:

- When end linear velocity `||v_ee|| < 0.04 m/s` and angular velocity `||w_ee|| < 0.08 rad/s`:
  - Target joint angle `q_target` remains locked
  - Robotic arm locks in current position
- When end velocity exceeds threshold:
  - `q_target` updates to current joint angle
  - Allows manual pushing to change position

**Expected Behavior**:

- Robotic arm locks in current position, requiring force to change target angle
- More stable than basic version, suitable for scenarios requiring pose maintenance

:::caution Normal Exit Performs a Safe Return Home
When you stop the script normally with `Ctrl+C`, it first stops gravity-compensation control and holds the current pose with stiff gains and gravity feedforward. It then returns the arm to zero through a minimum-jerk trajectory; only after homing completes does it disconnect and disable the motors.

Automatic homing depends on normal program execution, communication, and power. Keep people and obstacles outside the arm's workspace and be ready to support the arm during homing. A communication failure, unexpected power loss, or forced termination may prevent the protection sequence from completing; cut power immediately if abnormal motion occurs.
:::

**How to Run**:

```bash
uv run python example/10_gravity_compensation_lock.py
```

**Output**:

- Real-time display of lock status (LOCKED / UPDATE)
- End linear velocity, angular velocity
- Gravity compensation torque for each joint (N·m)
- Press `Ctrl+C` to stop and disconnect

:::tip Adjusting Individual Joint Compensation
If some joints are under-compensated or over-compensated due to structural friction or assembly differences, you can apply additional scaling to the corresponding element of the `tau_g` array in the code:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

For example, `tau_g[2] *= 1.2` means increasing the gravity compensation torque of joint 2 by 20%. It is recommended to adjust item by item based on the actual floating effect to avoid making excessively large changes at once.
:::

**Safety Test Configuration**:
You can modify the `ENABLED_JOINTS` list at the top of the script to enable only specified joints for safety testing:

```python
ENABLED_JOINTS = ["joint1"]  # Enable only joint1
```

</div>
</section>
</div>

---

## Simulation Environment

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/meshcat_DM.png" alt="MeshCat simulation of the reBot Arm B601-DM" />
</div>

:::tip MeshCat web viewer address
After starting a simulation, the terminal prints the actual access URL. The default is `http://127.0.0.1:7000/static/`; if the port is occupied, MeshCat automatically tries the next port, so use the URL printed in the terminal.
:::

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S1</span>
<div className="rebot-step-content">
<h4>Forward Kinematics Simulation</h4>
<p className="rebot-step-label">Simulation Demo 1 · sim/fk_sim.py</p>

Interactive forward kinematics simulation, visualize robot arm pose by inputting joint angles in MeshCat.

**How to Run**:

```bash
uv run python example/sim/fk_sim.py
```

**Interactive Commands**:

- Input 6 joint angles (degrees), space separated
- Example: `0 0 0 0 0 0`
- Example: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: Exit

**Features**:

- Real-time display of end-effector position and orientation
- Supports continuous input to test different poses
- Formatted pose information output

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S2</span>
<div className="rebot-step-content">
<h4>Inverse Kinematics Simulation</h4>
<p className="rebot-step-label">Simulation Demo 2 · sim/ik_sim.py</p>

Interactive inverse kinematics simulation, automatically solve joint angles from target pose and visualize.

**How to Run**:

```bash
uv run python example/sim/ik_sim.py
```

**Input Format**:

- Position only: `x y z` (meters)
- Position+Orientation: `x y z roll pitch yaw` (radians)

**Example**:

```bash
> 0.25 0.0 0.25              # Position only
> 0.25 0.0 0.25 0 0 0        # Position+Orientation
```

**Features**:

- Automatic judgment of IK convergence
- Display iteration count and error
- Real-time robot pose updates

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S3</span>
<div className="rebot-step-content">
<h4>Trajectory Planning Simulation</h4>
<p className="rebot-step-label">Simulation Demo 3 · sim/traj_sim.py</p>

SE(3) geodesic based trajectory planning simulation, including CLIK tracking and MeshCat animation playback.

**How to Run**:

```bash
uv run python example/sim/traj_sim.py
```

**Interactive Commands**:

- Input: `x y z [roll pitch yaw]` (meters/radians)
- Press Enter to use default configuration
- `q`: Exit

**Features**:

- Plan from current position to target position
- Use minimum jerk trajectory profile
- Real-time display of trajectory statistics
- Complete trajectory animation playback in MeshCat
- Display reference path (gray) and actual path (green)

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S4</span>
<div className="rebot-step-content">
<h4>Visualizer Tool</h4>
<p className="rebot-step-label">Simulation Demo 4 · sim/visualizer.py</p>

MeshCat visualizer wrapper, providing unified robot display interface.

**Main Features**:

- Load URDF model and display robot
- Draw 3D polyline paths (reference/actual)
- Display IK target pose (tricolor axes + sphere)
- Support joint trajectory animation playback

**Usage Example**:

```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```

</div>
</section>
</div>

---

## FAQ

- **Encountering `Permission denied` error**
  Ensure you have executed `sudo chmod 666 /dev/ttyACM0` or `sudo chmod 666 /dev/can0` to set device permissions.

- **IK solving fails or results are abnormal**
  Check if the target pose is within the robot arm's workspace, ensure joint limit configuration is correct.

- **Gravity compensation effect is not good**
  This may be caused by structural errors and processing accuracy. The gravity compensation of this project depends on URDF and Pinocchio. You can try correcting the URDF to your actual measured parameters (you can ask AI for this step).

---

## Contact

- **Technical Support**: [Submit Issue](https://github.com/Seeed-Projects/reBotArm_control_py/issues)
- **Project Repository**: [GitHub](https://github.com/Seeed-Projects/reBotArm_control_py)
- **Forum**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## Reference Documents

- [Pinocchio Official Documentation](https://stack-of-tasks.github.io/pinocchio/)
- [MeshCat Official Documentation](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/motorbridge/motorbridge)

---

<div align="center">
  <strong>If this project helps you, please give us a Star!</strong>
</div>
