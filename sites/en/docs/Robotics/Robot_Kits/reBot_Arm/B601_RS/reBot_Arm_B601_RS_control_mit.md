---
description: This tutorial shows how to use rebot_control to perform MIT position control on the reBot Arm B601-RS via MotorBridge and the CAN bus, including gripper, temperature protection, and safe return-to-zero.
title: reBot Arm B601-RS MIT Position Control Getting Started
keywords:
  - reBot
  - B601-RS
  - MIT
  - MotorBridge
  - RobStride
  - CAN
  - Robotic Arm
  - Gripper
  - Temperature Protection
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_mit_control
sku: 100019336
last_update:
  date: 2026-08-04
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-08-04'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/rebot_arm_b601_rs_mit_control/
---

# Getting Started with MIT Position Control on the reBot Arm B601-RS

<p align="center">
    <a href="https://github.com/LAN-GER/rebot_control/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Mode-MIT%20Position-yellow.svg" alt="MIT Mode" />
</p>

<p align="center">
  <strong>6+1 DOF · RobStride · CAN @ 1 Mbps · MIT Position Control · Temperature Protection · Safe Return-to-Zero · Open-Source Python Interface</strong>
</p>

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png)

[MotorBridge](https://github.com/motorbridge/motorbridge) is a Python CAN control SDK for motors such as RobStride and Damiao. Built on top of it, [rebot_control](https://github.com/LAN-GER/rebot_control) wraps an MIT position control interface tailored for the **reBot Arm B601-RS**: YAML configuration, per-joint speed limiting, three-level MOS temperature protection, and smooth return-to-zero triggered by Esc / Ctrl+C / `stop()`.

This tutorial walks you through: environment setup → CAN configuration → running the examples → using it as a library for secondary development.

:::caution Important Safety Notice
- **This project provides only the control interface; it does not include software joint limits or workspace limits.** The target angles you set are sent directly to the motors.
- **Keep the arm within roughly 70% of its workspace.** Staying beyond the workspace for extended periods may trigger stall protection on the J2 motor, and the arm may drop.
- For first-time use, test with **small angles and low speeds**, and make sure the surroundings are clear of obstacles and that people stay away from the working radius.
:::

---

## Project Features

1. **MIT Position Control**  
   Continuously sends MIT position commands at 200 Hz by default; each joint has an independent speed limit, with in-loop velocity smoothing.

2. **6+1 Motor Support**  
   J1–J6 are arm joints, and **J7 (CAN ID 7) is the end-effector gripper**, all controlled uniformly via `set_joint_angles` / `set_joint_angle`.

3. **Three-Level Temperature Protection**  
   Monitors each motor's MOS temperature in real time: alarm and continue → high-temperature slow return-to-zero then disable → emergency disable (no return-to-zero).

4. **Safe Exit and Return-to-Zero**  
   Esc / Ctrl+C / `arm.stop()` triggers a smoothstep trajectory for slow return-to-zero; pressing Ctrl+C again during the return immediately aborts and disables.

5. **YAML-Driven Configuration**  
   CAN channel, temperature thresholds, return-to-zero parameters, and motor `kp`/`kd` are all configured in `config/rebotarm_rs.yaml`—change parameters without touching code.

6. **Secondary-Development Friendly**  
   Clean layering (config / interface / examples); can be used directly as a library via `from rebot import ReBotRSMITController`.

---

## Specifications

The hardware for this tutorial is provided by [Seeed Studio](https://www.seeedstudio.com/).

| Parameter | Specification |
|-----------|---------------|
| Arm Model | reBot Arm B601-RS Assembled Kit with Gripper |
| Degrees of Freedom | 6+1 (including gripper) |
| Working Radius | 754.7 mm (with gripper) / 587.5 mm (without gripper) |
| Payload | Rated 2.5 kg / Maximum 5 kg |
| Joint Range | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / Gripper: 345° ~ 0° |
| Repeatability | 0.1 mm |
| Self-Weight | 6.7 kg |
| Servo Motors | RobStride 06 × 3 / RobStride 00 × 4 (including gripper) |
| Communication | CAN Bus @ 1 Mbps |
| Operating Voltage | DC 48V |
| Power Supply | DC 48V 15A |
| Operating Temperature | -20°C ~ 50°C |
| Control Method | PC |

### Motor Mapping in This Project

| Joint # | CAN ID | Model | Notes |
|---------|--------|-------|-------|
| J1 | 1 | RS06 | Base |
| J2 | 2 | RS06 | |
| J3 | 3 | RS06 | |
| J4 | 4 | RS00 | |
| J5 | 5 | RS00 | |
| J6 | 6 | RS00 | Wrist |
| J7 | **7** | RS00 | **End-effector gripper** |

### Supported Software Capabilities (this repo)

| Capability | Status |
|------------|--------|
| MIT position control | ✅ |
| Per-joint speed limiting | ✅ |
| Gripper control (CAN ID 7) | ✅ |
| MOS temperature monitoring & three-level protection | ✅ |
| Safe return-to-zero / emergency disable | ✅ |
| YAML configuration | ✅ |
| Python library calls | ✅ |
| Forward/inverse kinematics (Pinocchio) | ❌ (see [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)) |
| MeshCat simulation | ❌ (see the repo above) |

### Joint Motor Parameters

| Parameter | RobStride 00 | RobStride 06 |
|-----------|-------------|--------------|
| Rated Voltage | 48V | 48V |
| Rated Current | 4.7 Apk ± 10% | 14.3 Apk ± 10% |
| Peak Current | 15.5 Apk ± 10% | 57 Apk ± 10% |
| Rated Torque | 5 N·m | 11 N·m |
| Peak Torque | 14 N·m | 36 N·m |
| Rated Speed | 100 rpm ± 10% | 100 rpm ± 10% |
| No-Load Max Speed | 315 rpm ± 10% | 480 rpm ± 10% |
| Gear Ratio | 10 : 1 | 9 : 1 |
| Control Interface | CAN @ 1 Mbps | CAN @ 1 Mbps |
| Control Mode | MIT / Speed / Position / Torque | MIT / Speed / Position / Torque |

## Bill of Materials (BOM)

| Part | Qty | Included |
|------|-----|----------|
| reBot Arm B601-RS robotic arm | 1 | ✅ |
| CAN adapter (CANABLE / PCAN-USB, etc.) | 1 | ✅ |
| Power adapter (DC 48V 15A) | 1 | ✅ |
| USB-C cable | 1 | ✅ |
| Gripper | 1 | ✅ |

## Environment Requirements

| Item | Requirement |
|------|-------------|
| **Python** | 3.10+ |
| **OS** | Ubuntu 22.04+ (recommended) |
| **Communication Interface** | CAN interface (default `can0`) |
| **Power** | DC 48V 15A |
| **Dependencies** | `motorbridge`, `pyyaml`; optional `pynput` (Esc key) |

---

## Installation Steps

### Step 1. Clone the Repository

```bash
git clone https://github.com/LAN-GER/rebot_control.git
cd rebot_control
```

### Step 2. Install Dependencies

```bash
pip install motorbridge pynput pyyaml
```

:::tip
`pynput` is used for Esc key listening. If not installed, only the Esc function is unavailable; Ctrl+C and `arm.stop()` still work.
:::

### Step 3. Configure the CAN Interface

```bash
# View the interface (PCAN-USB, etc.)
sudo modprobe peak_usb   # If using a PEAK adapter
ip -br link

# Set can0 bitrate to 1 Mbps (RobStride default)
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 up type can bitrate 1000000
```

:::caution
After re-plugging a USB CAN adapter, you usually need to run the `ip link` configuration again.
:::

### Step 4. (Optional) Adjust the Configuration File

Edit `config/rebotarm_rs.yaml`:

| Config | Description | Default |
|--------|-------------|---------|
| `can.channel` | CAN interface name | `can0` |
| `can.host_id` | Host ID | `0xFD` |
| `control.control_hz` | MIT command send rate (not motion speed) | 200 Hz |
| `control.telemetry_hz` | Temperature read rate | 2 Hz |
| `temperatures.alarm_c` | Temperature alarm threshold | 80°C |
| `temperatures.return_zero_c` | High-temperature return-to-zero threshold | 100°C |
| `temperatures.disconnect_c` | Emergency disable threshold | 140°C |
| `return_zero.max_speed_deg_s` | Peak speed for normal return-to-zero | 30°/s |
| `return_zero.thermal_max_speed_deg_s` | Peak speed for high-temperature return-to-zero | 30°/s |
| `return_zero.min_time_s` | Minimum return-to-zero duration | 3.0 s |
| `return_zero.settle_time_s` | Hold time after reaching zero | 0.30 s |
| `motors` | Motor ID / model / MIT `kp` / `kd` | see YAML |

Items not filled in the YAML use code defaults; filling in a non-existent key raises an error immediately, making typos easy to catch.

---

## Code Structure

```
rebot_control/
├── config/
│   └── rebotarm_rs.yaml            # CAN / motors / temperature / return-to-zero
├── rebot/
│   ├── __init__.py                 # Public API
│   ├── config.py                   # Config loading & validation
│   └── controller.py               # ReBotRSMITController
└── examples/
    ├── _bootstrap.py               # Path bootstrap + wait-for-reached helper
    ├── quick_start.py              # Tutorial 1: Quick Start
    ├── custom_config.py            # Tutorial 2: Custom Config
    ├── monitor_status.py           # Tutorial 3: Status Monitoring
    ├── single_joint_adjust.py      # Tutorial 4: Single Joint + Gripper
    ├── read_joint_angles.py        # Tutorial 5: Read Actual Position
    ├── stop_options.py             # Tutorial 6: Stop Options
    ├── recommended_structure.py    # Tutorial 7: Recommended Structure
    └── mit_position_control.py     # Full editable demo
```

Layering notes:

- **Config file**: single source of truth for tunable parameters.
- **Config layer**: `load_config()` → `ControllerConfig`.
- **Interface layer**: pure control logic, no hardcoded demo parameters.
- **Examples layer**: target angles, speeds, and run flow.

---

## Feature Notes

### MIT Control and Velocity Smoothing

- `control_hz` (default 200 Hz) only determines the **command send rate**.
- The actual motion speed is determined by `set_max_speeds([...])` (unit: degrees/second).
- `set_joint_angles()` only updates the **target**; the control loop gradually moves the **commanded angle** toward the target at the limited speed.

:::tip
If you call `stop()` right after setting the target, you may barely see motion toward the target. The examples use `wait_for_command_targets()` (see `examples/_bootstrap.py`) to wait until the commanded angle is close to the target before returning to zero.
:::

### Three-Level Temperature Protection

| Threshold (default) | Behavior |
|---------------------|----------|
| ≥ 80°C | Temperature alarm (reported only once per over-temperature edge per motor); continues running |
| ≥ 100°C | Stops motion, slowly returns to zero at the high-temperature peak speed, then disables |
| ≥ 140°C | Immediate emergency disable, **no return-to-zero** |

### Safe Return-to-Zero

Return-to-zero uses a **smoothstep** trajectory. The total duration is:

```
duration = max(min_time_s, time estimated from peak speed for each joint)
```

The peak speed is `max_speed_deg_s` (normal) or `thermal_max_speed_deg_s` (high temperature). Both default to **30°/s**, and `min_time_s` is **3.0 s**.

| Exit Method | Behavior |
|-------------|----------|
| Esc / first Ctrl+C / `arm.stop()` | Slow return-to-zero → disable → close CAN |
| Second Ctrl+C during return-to-zero | Immediately abort return and disable |
| Communication error | Emergency disable, no return-to-zero attempted |

### Unit Convention

| Context | Unit |
|---------|------|
| External API (angles, speeds) | degrees, degrees/second |
| MotorBridge MIT internal | radians, radians/second |

---

## Calling Tutorials

All examples below are run from the **project root**. Each script has an **Expected motion** header at the top and prints an `[Expected]` line at startup, making it easy to follow along.

| Tutorial | File | Command |
|----------|------|---------|
| 1. Quick Start | `examples/quick_start.py` | `python3 examples/quick_start.py` |
| 2. Custom Config | `examples/custom_config.py` | `python3 examples/custom_config.py` |
| 3. Status Monitoring | `examples/monitor_status.py` | `python3 examples/monitor_status.py` |
| 4. Single Joint + Gripper | `examples/single_joint_adjust.py` | `python3 examples/single_joint_adjust.py` |
| 5. Read Actual Position | `examples/read_joint_angles.py` | `python3 examples/read_joint_angles.py` |
| 6. Stop Options | `examples/stop_options.py` | `python3 examples/stop_options.py default` |
| 7. Recommended Structure | `examples/recommended_structure.py` | `python3 examples/recommended_structure.py` |
| Full Demo | `examples/mit_position_control.py` | `python3 examples/mit_position_control.py` |

### 1. Quick Start (`quick_start.py`)

**Expected motion**: J1 rotates to +20° at about 15°/s while the other joints and gripper stay at 0°; after reaching the target, it slowly returns to zero and disables.

```bash
python3 examples/quick_start.py
```

Flow: `start()` → `set_max_speeds()` → `set_joint_angles()` → **wait for reached** → `stop()`.

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/quick_start/quick_start.mp4" title="Video Demo - Quick Start" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 2. Custom Config File (`custom_config.py`)

```bash
python3 examples/custom_config.py
python3 examples/custom_config.py config/rebotarm_rs.yaml
```

**Expected motion**: J1 → +15° (about 15°/s), the rest at 0°, then returns to zero.

---

### 3. Monitor Status While Running (`monitor_status.py`)

```bash
python3 examples/monitor_status.py
```

**Expected motion**: J1 → +30°; the terminal continuously prints target / commanded / MOS temperature. Press **Esc** or **Ctrl+C** to end and return to zero.

Notes:

- **Target vs commanded**: the commanded angle lags behind the target (speed-limited smoothing).
- **Temperature**: read `arm.last_temperatures` directly—no need to poll CAN yourself.

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/monitor_status/monitor_status.mp4" title="Video Demo - Monitor Status" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 4. Single-Joint Fine-Tuning and Gripper (`single_joint_adjust.py`)

```bash
python3 examples/single_joint_adjust.py
```

**Default targets**:

| J1 | J2 | J3 | J4 | J5 | J6 | J7 Gripper |
|----|----|----|----|----|----|------------|
| +25° | +15° | +15° | -15° | 0° | 0° | **180°** |

`joint_id`: 1–6 are arm joints, and **7 is the gripper (CAN ID 7)**.

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/single_joint_adjust/single_joint_adjust.mp4" title="Video Demo - Single Joint and Gripper" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 5. Read Actual Position (`read_joint_angles.py`)

```bash
python3 examples/read_joint_angles.py
```

**Expected motion**: prints the actual angles at startup; J1 moves toward +20° for about 5 s, then reads the actual angle again (should be close to 20°); then returns to zero.

:::tip
`read_joint_angles()` accesses CAN synchronously, so it should not be called at very high frequencies. Use `get_command_angles()` to monitor command progress.
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/read_joint_angles/read_joint_angles.mp4" title="Video Demo - Read Actual Position" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 6. Safe Stop Options (`stop_options.py`)

Each mode first moves J1 to about +20°, then stops according to the mode:

```bash
python3 examples/stop_options.py default      # Slow return-to-zero then disable (recommended)
python3 examples/stop_options.py no_return    # No return-to-zero, disable directly
python3 examples/stop_options.py async        # stop(wait=False) + wait_until_stopped()
python3 examples/stop_options.py emergency    # Emergency disable, no return-to-zero
```

:::danger
`no_return` / `emergency` leaves the arm in a non-zero pose and disables it. Make sure the surroundings are safe and hold the arm by hand if necessary.
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/stop_options/stop_options.mp4" title="Video Demo - Safe Stop Options" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 7. Recommended Program Structure (`recommended_structure.py`)

Demonstrates `try` / `except` / `finally` to ensure a safe `stop()` even when exceptions occur.

```bash
python3 examples/recommended_structure.py
```

---

### Full Parameter Demo (`mit_position_control.py`)

Modify `TARGET_ANGLES` (length 7) and `JOINT_SPEEDS_DEG_S` at the top of the file, then run:

```bash
python3 examples/mit_position_control.py
```

Default example: J1 → +50° (20°/s), the rest and the gripper at 0°; the terminal refreshes target / commanded / temperature; Esc / Ctrl+C returns to zero and exits.

:::danger
Under MIT mode the arm can still move quickly. Keep people and equipment away from the working radius, and limit operation to roughly 70% of the workspace.
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/mit_position_control/mit_position_control.mp4" title="Video Demo - Full Parameter Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## Using as a Library

### Minimal Example

```python
from rebot import ReBotRSMITController

arm = ReBotRSMITController()  # Auto-loads config/rebotarm_rs.yaml

arm.start(enable_esc=True)
arm.set_max_speeds([15.0] * 7)
arm.set_joint_angles([20.0, 0, 0, 0, 0, 0, 0])  # J1–J6 + gripper J7

# You need to wait for motion to complete yourself before calling stop; see examples/quick_start.py
arm.stop()  # Slow return-to-zero → disable → close CAN
```

### Custom Config and Gripper

```python
from rebot import (
    ReBotRSMITController,
    load_config,
    GRIPPER_JOINT_ID,
)

arm = ReBotRSMITController(load_config("config/rebotarm_rs.yaml"))
arm.start()
arm.set_max_speeds([20.0] * 7)
arm.set_joint_angles([25, 15, 15, -15, 0, 0, 0])
arm.set_joint_angle(GRIPPER_JOINT_ID, 180.0)  # Gripper = J7
```

### Controller Lifecycle

```
Create → start() → set_max_speeds() → set_joint_angles() / set_joint_angle() → … → stop()
```

### Main API

| Method / Attribute | Description |
|--------------------|-------------|
| `start(enable_esc=True, install_signal_handlers=True)` | Start control and temperature threads |
| `set_joint_angles(angles_deg)` | Set 7 target angles (degrees) |
| `set_joint_angle(joint_id, angle_deg)` | Set a single joint / gripper (1–7) |
| `set_max_speeds(speeds_deg_s)` | Set 7 maximum speeds (degrees/second) |
| `get_target_angles()` / `get_command_angles()` | Target / smoothed commanded angles |
| `read_joint_angles()` | Synchronously read the actual mechanical position |
| `last_temperatures` | MOS temperature of each motor |
| `is_stopped` | Whether safe stop is complete |
| `stop(return_to_zero=True, wait=True)` | Stop (returns to zero by default) |
| `request_stop(..., emergency=True)` | Advanced stop / emergency disable |

Exported constants: `GRIPPER_MOTOR_ID = 7`, `GRIPPER_JOINT_ID = 7`.

---

## FAQ

- **`Permission denied` / cannot open can0**  
  Make sure the CAN interface is `up` and the current user has permission to access network devices. Use `sudo` to configure `ip link` if necessary, or check the udev rules.

- **No motor response / enable failure**  
  1. Confirm the bitrate is 1 Mbps;  
  2. Confirm `channel`, `host_id`, and motor IDs in `config/rebotarm_rs.yaml` match the real hardware;  
  3. After re-plugging the USB CAN, run `ip link` again.

- **Set angles but barely moves**  
  `set_joint_angles()` only changes the target. Set a reasonable `set_max_speeds()`, and wait for the commanded angle to approach the target before calling `stop()`. See `examples/quick_start.py`.

- **Gripper does not move**  
  The gripper is **J7 / CAN ID 7**. `set_joint_angles` must take **7 values**, with the last one being the gripper; or use `set_joint_angle(7, angle)`.

- **Temperature alarm flooding**  
  The current implementation is edge-triggered with hysteresis debouncing: each motor reports only once per over-temperature event; it will report again only after the temperature drops below `alarm_c - 2°C`.

- **J2 stall protection / arm drops**  
  Common when operating beyond about 70% of the arm's reach for extended periods. Power-cycle the arm to clear the protection, and reduce the target angles and dwell range.

- **Behavior after communication error**  
  When the control loop encounters a communication failure, the program **emergency-disables without returning to zero**, avoiding continued motion under faulty communication.

- **Relationship to Pinocchio / MeshCat / gravity compensation tutorials**  
  This repo focuses on the MIT position control interface. For kinematics, trajectory simulation, and gravity compensation, see [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) and the Seeed Wiki "Getting Started with Pinocchio and MeshCat".

---

## Contact

- **Project Repository**: [https://github.com/LAN-GER/rebot_control](https://github.com/LAN-GER/rebot_control)
- **Tech Support / Issues**: [GitHub Issues](https://github.com/LAN-GER/rebot_control/issues)
- **Forum**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## References

- [MotorBridge SDK](https://github.com/motorbridge/motorbridge)
- [reBotArm_control_py (kinematics / simulation / gravity compensation)](https://github.com/Seeed-Projects/reBotArm_control_py)
- [RobStride motor documentation](https://www.seeedstudio.com/)
- Chinese README of this repo: `README_zh.md`
