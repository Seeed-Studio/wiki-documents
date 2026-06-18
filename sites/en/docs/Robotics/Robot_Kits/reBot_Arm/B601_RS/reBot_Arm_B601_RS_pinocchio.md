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
  date: 2026-06-11
  author: LiJie
translation:
  skip:
    - zh-CN
createdAt: '2026-06-11'
updatedAt: '2026-06-11'
url: https://wiki.seeedstudio.com/rebot_arm_b601_rs_pinocchio_meshcat/
---

# Getting Started with Pinocchio and MeshCat for reBot Arm B601-RS

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

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png)

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) is an open-source library for robot dynamics analysis and optimization. It provides efficient forward/inverse kinematics, dynamics computation, and trajectory planning. [MeshCat](https://github.com/rdeits/meshcat) is a web-based 3D visualization tool that can display robot states and motion trajectories in real time.

This project combines Pinocchio's powerful computation capabilities with MeshCat's intuitive visualization, providing a complete set of kinematics analysis and debugging tools for reBot Arm B601-RS.


---

## Project Features

1. **Complete Kinematics Analysis**  
   Supports forward kinematics (FK) and inverse kinematics (IK) calculations, enabling real-time solving of the robotic arm's end-effector pose.

2. **Real-time 3D Visualization**  
   Displays the robotic arm's state and motion trajectories in the browser through MeshCat in real time, without additional software.

3. **Trajectory Planning and Tracking**  
   Implements SE(3) geodesic trajectory planning, supporting CLIK (Closed-Loop Inverse Kinematics) tracking control.

4. **Gravity Compensation Control**  
   Calculates joint gravity torques based on the Pinocchio dynamics model, achieving a "floating" effect for the robotic arm. Supports both basic and end-effector velocity lock versions.

5. **Multi-Mode Motor Control**  
   Supports MIT, POS_VEL, and VEL control modes, compatible with both Damiao and Robostride motor protocols.

6. **Open Source & Extensible**  
   All code is open source, allowing users to customize control algorithms and visualization effects according to their needs.

## Specifications

The hardware for this tutorial is provided by [Seeed Studio](https://www.seeedstudio.com/).

| Parameter | Specification |
|-----------|-------------|
| Robot Arm Model | reBot Arm B601-RS Assembled Kit with Gripper |
| Degrees of Freedom | 6+1 (with gripper) |
| Reach | 754.7 mm (with gripper) / 587.5 mm (without gripper) |
| Load Capacity | Rated load 2.5 kg / Max load 5 kg |
| Joint Range of Motion | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / Gripper: 345° ~ 0° |
| Repeatability | 0.1 mm |
| Self Weight | 6.7 kg |
| Servo Motors | RobStride 06 × 3 / RobStride 00 × 4 |
| Communication | CAN Bus @ 1 Mbps |
| Operating Voltage | DC 48V |
| Power Supply | DC 48V 15A |
| Operating Temperature | -20°C ~ 50°C |
| Control Method | PC |

### Supported Software Platforms

| Platform | Support Status |
|----------|---------------|
| ROS1 | ✅ |
| MoveIt1 | ✅ |
| ROS2 | ✅ |
| MoveIt2 | ✅ |
| Python | ✅ |
| LeRobot | ✅ |
| Isaac Sim | ✅ |
| Pinocchio | ✅ |

### Joint Motor Parameters

| Parameter | RobStride 00 | RobStride 06 |
|-----------|--------------|--------------|
| Rated Voltage | 48V | 48V |
| Rated Current | 4.7 Apk ± 10% | 14.3 Apk ± 10% |
| Peak Current | 15.5 Apk ± 10% | 57 Apk ± 10% |
| Rated Torque | 5 N.m | 11 N.m |
| Peak Torque | 14 N.m | 36 N.m |
| Rated Speed | 100 rpm ± 10% | 100 rpm ± 10% |
| No-Load Max Speed | 315 rpm ± 10% | 480 rpm ± 10% |
| Reduction Ratio | 10 : 1 | 9 : 1 |
| Pole Pairs | 28 | — |
| Motor Inductance | 750 ± 20 μH | 0.165 mH ± 10% |
| Line Resistance | 1.5 ± 10% Ω | 0.23 ± 10% Ω |
| Outer Diameter | 57 mm | 82 mm |
| Height | 51 ± 1 mm | 49 ± 0.5 mm |
| Motor Weight | 310 g ± 3 g | 621 g |
| Encoder Resolution | 14 bit (single-turn absolute) | |
| Encoder Count | 2 | |
| Encoder Type | Magnetic encoder (single-turn) | |
| Control Interface | CAN @ 1 Mbps | |
| Debug Interface | UART @ 921600 bps | |
| Control Modes | MIT Mode / Speed Mode / Position Mode / Torque Mode | |
| Protection | Over-temperature protection: motor thermistor temperature exceeds 145°C<br />Under-voltage protection: motor voltage below protection voltage 12V | |

## Bill of Materials (BOM)

| Component | Quantity | Included |
|-----------|----------|----------|
| reBot Arm B601-RS Robotic Arm | 1 | ✅ |
| CANABLE | 1 | ✅ |
| Power Adapter (DC 48V 15A) | 1 | ✅ |
| USB-C Cable | 1 | ✅ |
| Gripper | 1 | ✅ |


## Environment Requirements

| Item | Requirement |
|------|-------------|
| **Python** | 3.10+ |
| **Operating System** | Ubuntu 22.04+ |
| **Communication Interface** | CAN interface (can0) |
| **Power Supply** | DC 48V 15A |

---

## Installation Steps

### Step 1. Install uv (if not installed)

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Step 2. Sync Environment (Install All Dependencies)

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git 
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` will automatically create a virtual environment (if it doesn't exist) and install all dependencies based on `pyproject.toml` and `uv.lock`.
:::

### Step 3. Modify Configuration File for RS Version

This Wiki is for **reBot Arm B601-RS**. Before running any examples, please switch the hardware configuration in `config/rebotarm.yaml` from the DM version to the RS version:

```yaml
# Before modification
hardware_yaml: "rebotarm_dm.yaml"

# After modification
hardware_yaml: "rebotarm_rs.yaml"
```

:::caution
If this configuration is not modified, the program will communicate using the Damiao motor protocol, causing the RS motors to fail to be recognized or run properly.
:::


### Debugging Tools

:::tip CAN Channel Setup
Before running real-machine control examples and debugging motors, you need to set up the CAN channel (for PCAN-USB, you need to configure this again after re-plugging):

```bash
# PCAN-USB should usually appear directly as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up    # Bring up can0
```

:::

#### Single Motor Console — Robostride RS06 (`0x01rs06_test.py`)

Directly use the motorbridge SDK for Robostride RS06 single motor testing. RS06 motors communicate via **CAN bus**.

**Run Command**:
```bash
uv run python example/0x01rs06_test.py
```

**Interactive Commands**:
| Command | Description |
|---------|-------------|
| `enable` / `disable` | Enable/Disable |
| `set_zero` | Set software zero position |
| `state` | View current state |
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

**Note**: Robostride motors use the CAN interface (default `can0`), with host/feedback ID defaulting to `0xFD`.

---

#### Zero Calibration and Angle Monitoring (`2_zero_and_read.py`)

Automatically set all joint zero positions and display joint angles in real time.

**Run Command**:
```bash
uv run python example/2_zero_and_read.py
```

---

### Basic Control Tests

#### MIT Mode Full Joint Control (`3_mit_control.py`)

All joints use MIT mode uniformly, sending control commands synchronously every cycle.

**Input**: All joint angles (degrees), space-separated. If gripper is configured, an additional gripper angle is required.

**Run Command**:
```bash
uv run python example/3_mit_control.py
> 0 0 0 0 0 0        # Arm only
> 0 0 0 0 0 0 2.0    # Arm + gripper
```

---

#### POS_VEL Mode Full Joint Control (`4_pos_vel_control.py`)

All joints use POS_VEL mode uniformly, sending control commands synchronously every cycle.

**Input**: All joint angles (degrees), space-separated.

**Run Command**:
```bash
uv run python example/4_pos_vel_control.py
> 0 0 0 0 0 0
```

---

### Kinematics Tests

#### Forward Kinematics Test (`5_fk_test.py`)

Calculate the end-effector pose based on joint angles.

**Input**: 6 joint angles (degrees)

**Output**:
- End-effector position (X, Y, Z) — unit: meters
- Rotation matrix (3×3)
- Euler angles (roll/pitch/yaw) — unit: degrees

**Example**:
```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180
```

---

#### Inverse Kinematics Test (`6_ik_test.py`)

Solve joint angles based on the desired end-effector pose.

**Input Format**:
- Position only: `<x> <y> <z>` (meters)
- Position + Orientation: `<x> <y> <z> <roll> <pitch> <yaw>` (degrees)

**Example**:
```bash
uv run python example/6_ik_test.py
> 0.25 0.0 0.15              # Position only
> 0.25 0.0 0.15 0 0 0        # Position + orientation
```

---

### Simulation Environment

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic_rs.png" />
</div>


#### Forward Kinematics Simulation (`sim/fk_sim.py`)

Interactive forward kinematics simulation, visualizing the robotic arm's pose in MeshCat by inputting joint angles.

**Run Command**:
```bash
uv run python example/sim/fk_sim.py
```

**Interactive Commands**:
- Input 6 joint angles (degrees), space-separated
- Example: `0 0 0 0 0 0`
- Example: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: Exit

**Features**:
- Display end-effector position and orientation in real time
- Support continuous input to test different poses
- Output formatted pose information

---

#### Inverse Kinematics Simulation (`sim/ik_sim.py`)

Interactive inverse kinematics simulation, automatically solving joint angles and visualizing for a target pose.

**Run Command**:
```bash
uv run python example/sim/ik_sim.py
```

**Input Format**:
- Position only: `x y z` (meters)
- Position + Orientation: `x y z roll pitch yaw` (radians)

**Example**:
```bash
> 0.25 0.0 0.25              # Position only
> 0.25 0.0 0.25 0 0 0        # Position + orientation
```

**Features**:
- Automatically determine whether IK converges
- Display iteration count and error
- Update robot pose in real time

---

#### Trajectory Planning Simulation (`sim/traj_sim.py`)

SE(3) geodesic trajectory planning simulation, including CLIK tracking and MeshCat animation playback.

**Run Command**:
```bash
uv run python example/sim/traj_sim.py
```

**Interactive Commands**:
- Input: `x y z [roll pitch yaw]` (meters/radians)
- Press Enter directly to use default configuration
- `q`: Quit

**Features**:
- Plan from current position to target pose
- Use minimum jerk trajectory profile
- Display trajectory statistics in real time
- Playback full trajectory animation in MeshCat
- Display reference path (gray) and actual path (green)

---

#### Visualization Tool (`sim/visualizer.py`)

MeshCat visualizer wrapper, providing a unified robot display interface.

**Main Functions**:
- Load URDF model and display robot
- Draw 3D polyline paths (reference/actual)
- Display IK target pose (three-color axes + sphere)
- Support joint trajectory animation playback

**Usage Example**:
```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```

---

### Real-Machine Control

#### IK Real-Time Control (`7_arm_ik_control.py`)

Real-time end-effector control based on IK solving.

**Interactive Commands**:
| Command | Description |
|---------|-------------|
| `x y z [roll pitch yaw]` | Target end-effector pose |
| `state` | View state |
| `pos` | Current end-effector position |
| `q/quit/exit` | Quit |

**Run Command**:
```bash
uv run python example/7_arm_ik_control.py
> 0.3 0.0 0.2
> 0.3 0.1 0.25 0 0.5 0
```

---

#### Trajectory Planning Control (`8_arm_traj_control.py`)

SE(3) geodesic trajectory planning + CLIK tracking.

**Input Format**:
```
x y z [roll pitch yaw] [duration]
```

**Parameter Description**:
- `x, y, z`: Target position (meters)
- `roll, pitch, yaw`: Target orientation (radians)
- `duration`: Motion duration (seconds), default 2.0s

**Run Command**:
```bash
uv run python example/8_arm_traj_control.py
> 0.3 0.0 0.3 0 0.4 0 2.0
```

---

#### Gravity Compensation Control — Basic Version (`9_gravity_compensation.py`)

Use the Pinocchio dynamics model to compensate for joint gravity.

**Control Law**:
```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**Expected Behavior**:
- The robotic arm can "float" at any pose
- Will not fall due to self-weight after release
- Can be manually moved to any position

**Run Command**:
```bash
uv run python example/9_gravity_compensation.py
```

**Output**:
- Display desired torque for each joint in real time (N·m)
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

---

#### Gravity Compensation Control — End-Effector Velocity Lock Version (`10_gravity_compensation_lock.py`)

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

**Run Command**:
```bash
uv run python example/10_gravity_compensation_lock.py
```

**Output**:
- Display lock status in real time (LOCKED / UPDATE)
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

## FAQ

- **Encounter `Permission denied` error**  
  Make sure to run `sudo chmod 666 /dev/ttyACM0` (Damiao) or `sudo chmod 666 /dev/can0` (Robostride) to set device permissions.

- **IK solving fails or results are abnormal**  
  Check whether the target pose is within the robotic arm's workspace and ensure joint limits are configured correctly.

- **Gravity compensation effect is poor**  
  This may be caused by structural errors and machining accuracy. The gravity compensation in this project relies on URDF and Pinocchio. You can try correcting the URDF to parameters you actually measured (you can ask AI for this step).

- **Robostride motors cannot read status**  
  Internal protocol configuration issues in motorbridge may prevent RS motors from querying status like DM motors. Please judge based on actual motion effects, or try using the `ping` command to confirm normal motor communication.

- **How to switch between Damiao and Robostride motor configurations**  
  Modify the `config/rebotarm_dm.yaml` (Damiao) or `config/rebotarm_rs.yaml` (Robostride) configuration file and load the corresponding configuration in the code.

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
