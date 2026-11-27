---
title: reBot Arm T701 HT ROS 2 SDK
sidebar_label: ROS 2 SDK
toc_max_heading_level: 2
description: Install the T701-HT ROS 2 SDK on Ubuntu 22.04 with ROS 2 Humble, use RViz2 and kinematic simulation or hardware examples, and control the arms through topics, services, and a trajectory action.
keywords:
  - reBot
  - T701 HT
  - ROS 2
  - Humble
  - RViz2
  - QP IK
slug: /rebot_t701_ht_ros2
translation:
  skip: [zh-CN]
last_update:
  date: 11/24/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reBot Arm T701 HT ROS 2 SDK

<div className="rebot-page">

<div align="center">
  <img
    width={800}
    height={586}
    style={{ height: 'auto', aspectRatio: '800 / 586', objectFit: 'contain', backgroundColor: '#000' }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp"
    alt="reBot Arm T701 HT bimanual robot"
  />
</div>

<GitHubStarButton
  owner="Welt-liu"
  repo="T701_ROS2_SDK"
  fallbackCount={0}
  ariaLabel="Star T701-HT ROS 2 SDK on GitHub"
/>

The T701-HT ROS 2 SDK provides joint control, multipoint trajectories, QP inverse kinematics, gripper control, homing, and damping brake. Start with RViz2 and the examples without connecting a robot, then switch to hardware and send commands from your own ROS 2 nodes.

The [SDK repository](https://github.com/Welt-liu/T701_ROS2_SDK) includes source code, the model, dependency wheels, and Chinese and English READMEs. Run every command on this page from the **`T701_ROS2_SDK` root directory** containing `start.sh`.

:::note[Install separately from the Python SDK]

This chapter uses system Python 3.10 and the SDK's `.venv`; you do not need to activate the `t701-ht` Conda environment from the Quick Start. Run only one SDK against a communication board at a time. The existing [Pinocchio](./reBot_Arm_T701_HT_pinocchio.md) and [VR Teleoperation](./reBot_Arm_T701_HT_vr.md) pages describe Python SDK examples. This ROS 2 package does not include a VR input receiver, MoveIt, a `ros2_control` plugin, or Gazebo physics simulation.

:::

<section className="section-card">

## Install and Build

### Install system dependencies

| Environment item | Requirement |
| --- | --- |
| Operating system | Ubuntu 22.04 |
| ROS version | ROS 2 Humble |
| Python | System Python 3.10 with the SDK's `.venv` |
| Processor architecture | Linux x86_64 or ARM64 |
| Model and numerical libraries | Pinocchio and FCL from apt, plus NumPy 1.x; required for both simulation and hardware |

Configure the ROS repository using the [official ROS 2 Humble installation instructions](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html), then install the dependencies:

```bash
sudo apt update
sudo apt install python3-venv python3-pip python3-pytest \
  python3-colcon-common-extensions python3-numpy python3-scipy python3-yaml \
  python3-jinja2 python3-joblib \
  ros-humble-desktop ros-humble-control-msgs ros-humble-diagnostic-msgs \
  ros-humble-pinocchio ros-humble-hpp-fcl
```

Pinocchio and FCL provide kinematics, gravity computation, and mesh collision checks. Both simulation and hardware need them. Use the apt model libraries and NumPy 1.x described here rather than reusing the Python SDK's Conda environment.

### Get the SDK

```bash
git clone https://github.com/Welt-liu/T701_ROS2_SDK.git
cd T701_ROS2_SDK
```

### Create the environment and build

```bash
python3.10 -m venv --system-site-packages .venv
.venv/bin/python -m pip install \
  'numpy>=1.23,<2' 'scipy>=1.9,<2' 'PyYAML>=6,<7' 'osqp>=1,<2' pytest
./build.sh
```

`build.sh` and `start.sh` load ROS 2 Humble and this workspace. After the initial setup, use `start.sh` for daily operation. Recreate `.venv` and rebuild after moving the directory or copying it to another computer. Simulation does not need the motor SDK; see the **Connect hardware** tab below for its installation.

</section>

<section className="section-card">

## Choose a Run Mode

| Comparison | Simulation `sim` | Hardware `real` |
| --- | --- | --- |
| Robot connection | No robot or communication board needed | Power the robot and connect the communication board |
| Motor SDK | Not required | Install the wheel for your computer's architecture |
| Motion enabled at startup | Enabled automatically | Disabled by default; check feedback before enabling |
| Default communication domain | `20` | `21` |

Open two terminals: **keep the driver running in terminal A and run examples in terminal B**. Both terminals must be in the SDK root and use the same `sim` or `real` prefix. Choose the examples you need and run one at a time.

<Tabs defaultValue="sim" groupId="t701-ros2-mode">
<TabItem value="sim" label="Simulation and RViz2">

No robot connection is required. Simulation updates joint states from commands for model display and ROS interface practice. It does not simulate dynamics, contact, or falling under gravity.

### Terminal A: start simulation

```bash
./start.sh sim arms:=dual
```

Keep this terminal running. Set the RViz2 Fixed Frame to `base_link`; the model should update during the examples. To use one arm, close the current driver and replace `arms:=dual` with `arms:=left` or `arms:=right`.

### Terminal B: read state

```bash
./start.sh sim demo --mode state --duration 5
```

Read joint position, velocity, torque, and the left tool pose once:

```bash
./start.sh sim topic echo /t701_ht/motor_states --once
./start.sh sim topic echo /t701_ht/left_tool_pose --once
```

### Terminal B: run motion examples

| Example | Expected behavior | Parameters and arm selection |
| --- | --- | --- |
| Joint motion | J1 of each selected arm moves back and forth from its current position | `0.10 rad` amplitude over `5 s` |
| Multipoint trajectory | Execute four small trajectory segments from the current position | `8 s` motion time |
| QP inverse kinematics | Generate a nearby tool target from the current pose, solve it, and check measured arrival | The example uses the left arm; use `--side right` with the right arm or both arms selected by the driver |
| Gripper control (currently no visible effect) | Only set an internal simulated target. The current model does not show finger motion, so opening width or grasping cannot be verified | Left target `0.4 rad`, observed for `5 s` by default; use `--side right` for the right gripper |

Each command block below runs one example.

**Joint motion**

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode joint --duration 5 --amplitude 0.10
```

**Multipoint trajectory**

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode trajectory --duration 8 --amplitude 0.10
```

**QP inverse kinematics**

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode ik --side left
```

**Gripper control (currently no visible effect)**

:::info[Current simulation limitation]

The gripper is displayed as one rigid end-effector model without separate finger joints. This example only sets an internal simulated target; RViz2 shows no opening or closing motion. The arm joint states printed in the terminal also omit the gripper position, so they cannot verify opening width, target arrival, or grasping. This limitation applies to the current `sim` example.

:::

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode gripper --side left --gripper 0.4
```

These motion examples return home and apply damping brake on completion, so enable control before each new example. Joint and trajectory `--duration` values exclude the final homing time. RViz2 does not animate individual gripper fingers opening and closing.

### Terminal B: home and stop

To request a separate return to zero:

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode home
```

To stop simulated motion immediately and disable control:

```bash
./start.sh sim demo --mode stop
```

</TabItem>
<TabItem value="real" label="Connect hardware">

Follow the [Quick Start](./reBot_Arm_T701_HT_Getting_Started.md) to assemble and power the robot and verify its zero positions. This chapter uses the separate ROS 2 SDK directory and configuration.

:::warning[First hardware run]

Secure the robot, remove any payload, and clear its range of motion and return-to-zero path. Start with one arm and supervise the run. Check feedback after starting the driver before enabling motion.

:::

### Install the motor SDK

Choose one command for your computer's architecture. Install it only once.

Linux x86_64, Python 3.10:

```bash
.venv/bin/python -m pip install hardware_wheels/hightorque_robot-1.2.0-cp310-cp310-linux_x86_64.whl
```

Linux ARM64, Python 3.10:

```bash
.venv/bin/python -m pip install hardware_wheels/hightorque_robot-1.0.0-cp310-cp310-linux_aarch64.whl
```

### Check wiring and serial ports

| Connection | Port |
| --- | --- |
| Left arm | CAN1 on the communication board |
| Right arm | CAN2 on the communication board |
| Computer | USB connection to the communication board |

Check the board's USB identity and set `board_serial` in `src/t701_ht_description/config/serial_binding.yaml` to its actual serial number. The driver resolves ports by board identity, so ACM enumeration changes do not require manual configuration changes.

```bash
ls -l /dev/serial/by-id/
ls -l /dev/ttyACM*
id -nG
```

If your user is not in the `dialout` group, run the following command, then log out of the desktop and log in again:

```bash
sudo usermod -aG dialout "$USER"
```

### Terminal A: start the hardware driver

Use the left arm for the first run:

```bash
./start.sh real arms:=left
```

Use `arms:=right` for the right arm or `arms:=dual` for both. Close the current driver before changing the arm selection. Startup reads feedback with motion disabled by default; keep terminal A running.

### Terminal B: check feedback

```bash
./start.sh real demo --mode state --duration 5
./start.sh real topic echo /t701_ht/motor_states --once
./start.sh real topic echo /diagnostics --once
```

Check the selected arm's joint feedback and diagnostics before running a motion example. Use the gripper example below to observe the physical gripper response.

### Terminal B: run motion examples

| Example | Expected behavior | Parameters and arm selection |
| --- | --- | --- |
| Joint motion | J1 of each selected arm moves back and forth from its current position | `0.10 rad` amplitude over `5 s` |
| Multipoint trajectory | Execute four small trajectory segments from the current position | `8 s` motion time |
| QP inverse kinematics | Generate a nearby tool target from the current pose, solve it, and check measured arrival | The example uses the left arm; use `--side right` with the right arm or both arms selected by the driver |
| Gripper control | Set a gripper motor target and observe its response | Left target `0.4 rad`, observed for `5 s` by default; use `--side right` for the right gripper |

Each command block below runs one example.

**Joint motion**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode joint --duration 5 --amplitude 0.10
```

**Multipoint trajectory**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode trajectory --duration 8 --amplitude 0.10
```

**QP inverse kinematics**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode ik --side left
```

**Gripper control**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode gripper --side left --gripper 0.4
```

On completion, these motion examples return the joints and grippers of all arms selected by the driver to zero, then apply damping brake. Enable control again before every new example. Joint and trajectory motion times exclude homing.

### Terminal B: home and stop

To request a separate return to zero:

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode home
```

To request motor damping brake immediately and disable control without following the homing path:

```bash
./start.sh real demo --mode stop
```

</TabItem>
</Tabs>

| Parameter | Purpose | Range or behavior |
| --- | --- | --- |
| `arms` | Select arms at driver startup for joint motion, multipoint trajectories, and homing | `left`, `right`, or `dual` |
| `--side` | Select the IK or gripper side | `left` or `right`; the driver must have started that side |
| `--amplitude` | Joint and trajectory example amplitude | `(0, 0.20]` rad |
| `--gripper` | Gripper motor angle target | `[-0.2, 2.2]` rad |
| `--duration` | Joint and trajectory motion time, or state and gripper observation time | Joint and trajectory times exclude final homing. IK ends based on arrival checks rather than this duration |

In dual-arm mode, joint motion runs on both arms together with the right J1 sign reversed. During the IK example, the other arm holds its current position.

</section>

<section className="section-card">

## RViz2 and Headless Operation

<div className="image-frame">

![T701-HT ROS 2 SDK model and coordinate frames in RViz2](https://raw.githubusercontent.com/Welt-liu/T701_ROS2_SDK/main/assets/docs/rviz_overview.png)

</div>

| RViz2 setting | Value or action | Purpose |
| --- | --- | --- |
| Fixed Frame | `base_link` | Use the robot base as the display reference frame |
| TF | Enable | Display coordinate frames |
| RobotModel → Collision Enabled | Enable | Display collision meshes |

Hardware mode uses measured joint feedback; simulation uses simulated joint states.

On a computer without a graphical desktop, start the driver in terminal A without RViz2:

```bash
./start.sh sim arms:=dual rviz:=false
```

For hardware, use `./start.sh real arms:=left rviz:=false`. With the driver already running, open RViz2 separately in another terminal:

```bash
./start.sh sim run rviz2 rviz2 -d src/t701_ht_ros2/config/t701_ht.rviz
```

Use the `real` prefix for hardware. If GLX/OpenGL fails, close the original driver and restart with `T701_HT_SOFTWARE_RENDERING=1 ./start.sh sim` or the corresponding `real` command.

When the driver and RViz2 run on separate computers, use the same SDK mode and communication domain on both. Set `export ROS_LOCALHOST_ONLY=0` before startup and allow LAN DDS communication. Start only one driver.

</section>

<section className="section-card">

## Connect Your ROS 2 Program

### Common interfaces

| Interface | Message type | Purpose |
| --- | --- | --- |
| `/joint_states` | `sensor_msgs/msg/JointState` | URDF-coordinate state for TF and RViz2 |
| `/t701_ht/motor_states` | `sensor_msgs/msg/JointState` | Joint position, velocity, and torque in motor coordinates |
| `/t701_ht/joint_command` | `sensor_msgs/msg/JointState` | Complete joint targets for the selected arms |
| `/t701_ht/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Multipoint trajectories, feedback, results, and cancellation |
| `/t701_ht/left_tool_pose`, `/t701_ht/right_tool_pose` | `geometry_msgs/msg/PoseStamped` | Measured tool poses |
| `/t701_ht/left_target_pose`, `/t701_ht/right_target_pose` | `geometry_msgs/msg/PoseStamped` | QP tool targets |
| `/t701_ht/left_gripper`, `/t701_ht/right_gripper` | `std_msgs/msg/Float64` | Gripper motor angle targets |
| `/t701_ht/home`, `/t701_ht/stop` | `std_srvs/srv/Trigger` | Request homing or immediate damping brake |
| `/t701_ht/set_enabled` | `std_srvs/srv/SetBool` | Enable or disable motion |
| `/diagnostics` | `diagnostic_msgs/msg/DiagnosticArray` | Mode, enable state, active goal, and errors |

Single-arm mode creates only the selected side's tool and gripper interfaces. Motor position, velocity, and torque use rad, rad/s, and N·m; tool positions use meters.

:::note[Motor and model coordinates]

Joint commands use `left_joint1` through `left_joint7` and `right_joint1` through `right_joint7`. `/joint_states` uses URDF names such as `A_l_joint1_link` with axis signs already converted; do not send it unchanged as a motor command. Each joint command must include all joints selected by the driver: 14 joints in dual-arm mode.

:::

### Send a joint target

This example requires a **left-arm simulation driver**. Close the current driver, then run in terminal A:

```bash
./start.sh sim arms:=left
```

Send a seven-axis target from terminal B. The default smooth transition time is 2 seconds:

```bash
./start.sh sim demo --mode enable
./start.sh sim topic pub --once /t701_ht/joint_command sensor_msgs/msg/JointState \
  '{name: [left_joint1, left_joint2, left_joint3, left_joint4, left_joint5, left_joint6, left_joint7], position: [0.10, 0, 0, 0, 0, 0, 0]}'
```

Direct topic targets and trajectory actions hold their endpoints after completion. Run `./start.sh sim demo --mode home` when you want to return to zero. See the [SDK README standard ROS commands](https://github.com/Welt-liu/T701_ROS2_SDK/blob/main/README_EN.md) for full dual-arm, trajectory action, and QP pose-message examples.

Pose targets are expressed in `base_link`, with normalized quaternions in x, y, z, w order. Only one motion task runs at a time; this interface is not a direct receiver for high-rate continuous teleoperation targets.

</section>

<section className="section-card">

## Startup Parameters and Shutdown

| Parameter | Default | Description |
| --- | --- | --- |
| `arms` | `dual` | `left`, `right`, or `dual` |
| `rviz` | `true` | Start RViz2 |
| `state_rate` | `50.0` | Control and state publication rate, from 5 to 100 Hz |
| `enable_on_start` | `false` | Enable motion at hardware startup; simulation enables automatically |

Restart the driver after changing parameters. Running `./start.sh` without arguments starts simulation, and examples check the driver's mode.

| Mode | Default communication domain | Environment variable for customization |
| --- | --- | --- |
| Simulation | `20` | `T701_HT_SIM_DOMAIN_ID` |
| Hardware | `21` | `T701_HT_REAL_DOMAIN_ID` |

For multiple robots, set matching environment variable values in the relevant terminals. Simulation and hardware values must differ and be in the range 0–232.

| Trigger | Driver behavior | Notes |
| --- | --- | --- |
| Joint, trajectory, IK, or gripper example completes | Return home, apply damping brake, then disable motion | Re-enable before the next motion |
| First Ctrl+C in terminal B | Request the current motion to end and return home | Keep terminal A running until shutdown actions finish |
| Ctrl+C in terminal A | Return home and brake before exiting when conditions permit | Control must be enabled, feedback valid, and the homing path checked |
| Second interrupt | Request damping brake immediately | Stop waiting for homing |
| Explicit stop or disable | Request damping brake immediately | Do not follow the homing path |
| Trajectory cancellation | End the original trajectory and request homing | Confirm homing completion from actual state |

A service response of `success: true` means the request was accepted; confirm actual homing completion from joint state and diagnostic `mode=braked`.

Default geometry checks cover self-collision of selected arms, collisions with the body, and inter-arm collisions in dual-arm mode. Single-arm mode does not check the other arm. Fingers, cables, and external obstacles are absent from the model, and discrete mesh checks do not represent a measured stopping distance. Invalid feedback or a rejected homing path reports an error and attempts brake rather than reporting successful homing.

</section>

<section className="section-card">

## Troubleshooting

| Symptom | Action |
| --- | --- |
| `ros2` or `rclpy` is missing | Check the ROS 2 Humble installation and rebuild using this chapter's system Python 3.10 environment |
| NumPy or Python extension import error | Use NumPy 1.x, keep Conda separate from ROS native libraries, and recreate `.venv` in the SDK root |
| `control is disabled` | Run `demo --mode enable` in terminal B using the same mode. Re-enable after every example that homes and brakes |
| Driver missing or example reports a mode mismatch | Keep terminal A running and match the `sim` / `real` prefix and communication domain in both terminals |
| Motor SDK, serial port, or USB identity error | Install the wheel for your architecture and check wiring, `board_serial`, and `dialout` permissions |
| RViz2 has no model or reports a TF error | Check `/joint_states` and `/robot_description`, and use `base_link` as Fixed Frame |
| Trajectory rejected or QP does not converge | Check joint names, complete joint count, timing, limits, pose frame, and diagnostics. Start with the small examples on this page |

</section>

</div>
