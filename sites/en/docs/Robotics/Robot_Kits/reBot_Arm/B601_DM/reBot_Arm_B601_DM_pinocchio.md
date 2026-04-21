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
  date: 2026-04-17
  author: LiuJunjie
translation:
  skip:
    - [zh-CN]
createdAt: '2026-03-24'
updatedAt: '2026-04-08'
url: https://wiki.seeedstudio.com/rebot_arm_b601_dm_pinocchio_meshcat/
---

# Getting Started with Pinocchio and MeshCat for reBot Arm B601-DM

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) is an open-source library for robotics dynamics analysis and optimization. It provides efficient forward/inverse kinematics, dynamics calculations, and trajectory planning capabilities. [MeshCat](https://github.com/rdeits/meshcat) is a web-based 3D visualization tool that can display robot status and motion trajectories in real-time.

This project combines Pinocchio's powerful computing capabilities with MeshCat's intuitive visualization, providing a complete set of kinematic analysis and debugging tools for reBot Arm B601-DM.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>


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
      <td>0°C ～ 40°C</td>
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

:::caution
Seeed Studio **is only responsible for hardware quality**. The tutorial is updated in strict accordance with official documentation. If you encounter unsolvable software or environmental issues, please consult the FAQ at the end of the document first, or contact customer service to join the SeeedStudio Lerobot communication group for inquiries.
:::

---

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
git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` will automatically create a virtual environment (if it doesn't exist) and install all dependencies according to `pyproject.toml` and `uv.lock`.
:::

---

## Debug Tools

#### Single Motor Console (`1_damiao_text.py`)

Direct motorbridge SDK single motor testing.

**Usage**:
```bash
uv run python example/1_damiao_text.py
```

**Interactive Commands**:
| Command | Description |
|---------|-------------|
| `enable` / `disable` | Enable/Disable |
| `set_zero` | Set zero position |
| `state` | View state |

---

#### Zero Calibration & Angle Monitor (`2_zero_and_read.py`)

Automatically set all joint zeros and display joint angles in real-time.

**Usage**:
```bash
uv run python example/2_zero_and_read.py
```

---

## Kinematics Tests

#### Forward Kinematics Test (`5_fk_test.py`)

Calculate end-effector pose from joint angles.

**Input**: 6 joint angles (degrees)

**Output**:
- End-effector position (X, Y, Z) — Unit: meters
- Rotation matrix (3×3)
- Euler angles (Roll/Pitch/Yaw) — Unit: degrees

**Example**:
```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180
```

---

#### Inverse Kinematics Test (`6_ik_test.py`)

Solve joint angles from desired end-effector pose.

**Input Format**:
- Position only: `<x> <y> <z>` (meters)
- Position + Orientation: `<x> <y> <z> <roll> <pitch> <yaw>` (degrees)

**Example**:
```bash
uv run python example/6_ik_test.py
> 0.25 0.0 0.15              # Position only
> 0.25 0.0 0.15 0 0 0        # Position + Orientation
```

---

## Simulation Environment

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" />
</div>

#### Forward Kinematics Simulation (`sim/fk_sim.py`)

Interactive forward kinematics simulation, visualize robot arm pose by inputting joint angles in MeshCat.

**Usage**:
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

**Usage**:
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

**Usage**:
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

## Real Machine Control

:::tip Permission Setup
Before running real machine control examples, you need to set device permissions:

```bash
# Set serial device permission (Damiao USB2CAN)
sudo chmod 666 /dev/ttyACM0

# Or for CAN interface (e.g., can0)
sudo chmod 666 /dev/can0
```
:::

#### IK Real-time Control (`7_arm_ik_control.py`)

Real-time end-effector control based on IK solver.

**Interactive Commands**:
| Command | Description |
|---------|-------------|
| `x y z [roll pitch yaw]` | Target end-effector pose |
| `state` | View state |
| `pos` | Current end-effector position |
| `q/quit/exit` | Exit |

**Usage**:
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

**Parameters**:
- `x, y, z`: Target position (meters)
- `roll, pitch, yaw`: Target orientation (radians)
- `duration`: Movement duration (seconds), default 2.0s

**Usage**:
```bash
uv run python example/8_arm_traj_control.py
> 0.3 0.0 0.3 0 0.4 0 2.0
```

---

#### Gravity Compensation Control (`9_gravity_compensation.py`)

Compensates for joint gravity using Pinocchio dynamics model.

**Control Law**:
```
tau = g(q)          — Gravity feedforward
pos = current motor position  — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**Expected Behavior**:
- The robotic arm can "float" in any posture
- Won't fall due to its own weight when released
- Can be manually moved to any position

**Usage**:
```bash
uv run python example/9_gravity_compensation.py
```

**Output**:
- Real-time display of expected torque for each joint (N·m)
- Press `Ctrl+C` to stop and disconnect

---

## FAQ

- **Encountering `Permission denied` error**  
  Ensure you have executed `sudo chmod 666 /dev/ttyACM0` or `sudo chmod 666 /dev/can0` to set device permissions.

- **IK solving fails or results are abnormal**  
  Check if the target pose is within the robot arm's workspace, ensure joint limit configuration is correct.

- **Gravity compensation effect is not good**  
  This may be caused by structural errors and processing accuracy. The gravity compensation of this project depends on urdf and pinocchio. You can try to correct urdf to your actual measured parameters (you can ask ai for this step).

---

## License

This project is open source under the **MIT License**.

---

## Contact Us

- **Technical Support**: [Submit Issue](https://github.com/vectorBH6/reBotArm_control_py/issues)
- **Repository**: [GitHub](https://github.com/vectorBH6/reBotArm_control_py)
- **Forum**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## Reference Documents

- [Pinocchio Official Documentation](https://stack-of-tasks.github.io/pinocchio/)
- [MeshCat Official Documentation](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/Damiao/motorbridge)

---

<div align="center">
  <strong>If this project helps you, please give us a Star!</strong>
</div>