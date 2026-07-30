---
description: This tutorial introduces how to use Pinocchio and MeshCat for kinematic analysis and visualization on the reBot Arm B601-DM robotic arm.
title: Getting Started with Pinocchio and MeshCat for reBot Arm B601-DM
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
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/rebot_arm_b601_dm_pinocchio_meshcat/
---

# Getting Started with Pinocchio and MeshCat for reBot Arm B601-DM

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


![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)


:::tip
This example code can be used to control the robotic arm motors or poses, including single motor control, forward/inverse kinematics control and testing, arm zero position setting and motor angle reading, MeshCat visualization system, and more.
:::


[Pinocchio](https://github.com/stack-of-tasks/pinocchio) is an open-source library for robotics dynamics analysis and optimization. It provides efficient forward/inverse kinematics, dynamics calculations, and trajectory planning capabilities. [MeshCat](https://github.com/rdeits/meshcat) is a web-based 3D visualization tool that can display robot status and motion trajectories in real-time.

This project combines Pinocchio's powerful computing capabilities with MeshCat's intuitive visualization, providing a complete set of kinematic analysis and debugging tools for reBot Arm B601-DM.

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
|--|--|--|
| reBot Arm B601-DM Robotic Arm | 1 | ✅ |
| USB2CAN Serial Bridge | 1 | ✅ |
| Power Adapter (24V) | 1 | ✅ |
| USB-C Cable | 1 | ✅ |
| Gripper | 1 | ✅ |


## Environment Requirements

| Item | Requirement |
|------|-------------|
| **Python** | 3.10+ |
| **Operating System** | Ubuntu 22.04+ |
| **Communication Interface** | USB2CAN Serial Bridge or CAN Interface |

---

## Installation Steps

### Step 1. Install uv (if not installed)

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Step 2. Sync Environment (Install All Dependencies)

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` will automatically create a virtual environment (if it doesn't exist) and install all dependencies according to `pyproject.toml` and `uv.lock`.
:::


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
### Single Motor Control Console (`0x01damiao_test.py`)

Direct single motor testing using the motorbridge SDK.

**How to Run**:
```bash
uv run python example/0x01damiao_test.py
```

**Interactive Commands**:
| Command | Description |
|------|------|
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

### Zero Calibration and Angle Monitoring (`2_zero_and_read.py`)

Automatically set all joint zeros and display joint angles in real-time.

**How to Run**:
```bash
uv run python example/2_zero_and_read.py

# Example Output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01
```

### MIT Control Mode (`3_mit_control.py`)

Input target angles for all joints to complete motor control in MIT control mode, typically used for force control, impedance control, or scenarios requiring high dynamic response.

**How to Run**:
```bash
uv run python example/3_mit_control.py
> 30 0 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```
:::danger
Note that in MIT control mode, the robotic arm moves very fast. Ensure that people and other devices are away from the arm's working radius.
:::

### Position-Velocity Control Mode (`4_pos_vel_control.py`)

Input target angles for all joints to complete motor control in POS_VEL (Position-Velocity) hybrid control mode, achieving smoother and more controllable motion when reaching target angles, reducing vibration.

**How to Run**:
```bash
uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

---

## Kinematics Testing

### Forward Kinematics Testing (`5_fk_test.py`)

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

---

### Inverse Kinematics Testing (`6_ik_test.py`)

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
### Inverse Kinematics Control in MIT Mode (`7_arm_ik_control.py`)

Use inverse kinematics (IK) in MIT mode to specify the 3D coordinates (X, Y, Z) and orientation (Euler angles) where the robotic arm end-effector should move.

**Input Format**:
- Position only: `<x> <y> <z>` (meters)
- Position + Orientation: `<x> <y> <z> <roll> <pitch> <yaw>` (degrees)
- Input `state`: View current actual radian values of each joint.
- Input `end_state`: View current end-effector actual coordinates (m) and Euler angles (rad) in space.

**How to Run**:
```bash
uv run python example/7_arm_ik_control.py

#Usage A
> 0.3 0.0 0.4 # Position only (orientation defaults to 0), move the arm end-effector to 0.3 meters forward and 0.4 meters above.

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians.

> ctrl + c # Return to zero position and exit system
```
:::danger
Note that in this example code, the robotic arm moves very fast. Ensure that people and other devices are away from the arm's working radius.
:::

### Inverse Kinematics Control with Smooth Trajectory (`8_arm_traj_control.py`)

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
---

## Gravity Compensation Testing

### Gravity Compensation Control — Basic Version (`9_gravity_compensation.py`)

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

**How to Run**:
```bash
uv run python example/9_gravity_compensation.py
```

**Output**:
- Real-time display of desired torque for each joint (N·m)
- Press `Ctrl+C` to stop and disconnect

:::caution Return to Home Before Exiting Gravity Compensation
When stopping the script (`Ctrl+C`), the program will **directly disable all motors**, and the robotic arm **will not automatically return to zero**. Please hold the robotic arm by hand or move it to a safe/home pose before exiting to avoid sudden joint drops that may cause collisions or damage.
:::

:::tip Adjusting Individual Joint Compensation
If some joints are under-compensated or over-compensated due to structural friction or assembly differences, you can apply additional scaling to the corresponding element of the `tau_g` array in the code:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

For example, `tau_g[2] *= 1.2` means increasing the gravity compensation torque of joint 2 by 20%. It is recommended to adjust item by item based on the actual floating effect to avoid making excessively large changes at once.
:::


### Gravity Compensation Control — End-Effector Velocity Lock Version (`10_gravity_compensation_lock.py`)

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

**How to Run**:
```bash
uv run python example/10_gravity_compensation_lock.py
```

**Output**:
- Real-time display of lock status (LOCKED / UPDATE)
- End linear velocity, angular velocity
- Gravity compensation torque for each joint (N·m)
- Press `Ctrl+C` to stop and disconnect

:::caution Return to Home Before Exiting Gravity Compensation
When stopping the script (`Ctrl+C`), the program will **directly disable all motors**, and the robotic arm **will not automatically return to zero**. Please hold the robotic arm by hand or move it to a safe/home pose before exiting to avoid sudden joint drops that may cause collisions or damage.
:::

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

---

### Simulation Environment

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" />
</div>


#### Forward Kinematics Simulation (`sim/fk_sim.py`)

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

---

#### Inverse Kinematics Simulation (`sim/ik_sim.py`)

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

---

#### Trajectory Planning Simulation (`sim/traj_sim.py`)

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

---

#### Visualizer Tool (`sim/visualizer.py`)

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

- **Technical Support**: [Submit Issue](https://github.com/vectorBH6/reBotArm_control_py/issues)
- **Project Repository**: [GitHub](https://github.com/vectorBH6/reBotArm_control_py)
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
