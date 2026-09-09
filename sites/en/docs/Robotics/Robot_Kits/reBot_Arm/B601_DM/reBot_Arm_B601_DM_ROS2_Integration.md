---
description: This tutorial shows how to set up the ROS2 control workspace for the reBot Arm B601-DM, including arm control, RViz visualization, and MoveIt2 integration.
title: reBot Arm B601-DM ROS2 Integration
keywords:
  - reBot Arm
  - B601-DM
  - ROS2
  - Humble
  - Jazzy
  - RViz
  - Robot Arm
  - Robotics
slug: /rebot_arm_b601_dm_ros2_integration
sku: 100065783, 100095532
last_update:
  date: 2026-05-29
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-29'
updatedAt: '2026-08-27'
url: https://wiki.seeedstudio.com/rebot_arm_b601_dm_ros2_integration/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# reBot Arm B601-DM ROS2 Integration Guide

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Humble | Jazzy-blue.svg" alt="ROS2 Humble | Jazzy" />
    <img src="https://img.shields.io/badge/Python-3.10%2B-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Version-v0.2.3-brightgreen.svg" alt="Version v0.2.3" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
</p>

<p align="center">
  <strong>ROS2 Control · RViz Visualization · MoveIt2 Support</strong>
</p>

This tutorial shows how to run the ROS2 control workspace `rebotarm_ros2` for the reBot Arm B601-DM. The workspace wraps the low-level `reBotArm_control_py` Python SDK into ROS2 topics, services, and actions, making it easier to integrate upper-level planning, visual grasping, RViz visualization, and custom application development.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/v2MlI3zMi1k?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
This tutorial uses `Ubuntu 24.04 + ROS2 Jazzy + Python 3.12` as the main reference environment. ROS2 Humble / Ubuntu 22.04 can follow the same workflow with the corresponding ROS2 distribution.
:::

## Project Features

1. **Standard ROS2 Interfaces**  
   Provides common ROS2 interfaces such as `/joint_states`, `FollowJointTrajectory`, `GripperCommand`, and `MoveToPose`, making it easier to integrate with MoveIt2, visual grasping pipelines, or task-level systems.

2. **Ready-to-use Kinematics, Trajectory, and Gravity Compensation Nodes**  
   Provides out-of-the-box forward/inverse kinematics, trajectory execution, gravity compensation, and RViz visualization support.

3. **MoveIt 2 Integration**  
   Includes complete MoveIt 2 configuration and application demos, supporting the RViz MotionPlanning plugin for simulated planning and real hardware execution.

## Specifications

The hardware for this tutorial is provided by [Seeed Studio](https://www.seeedstudio.com/).

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
      <td>Motor Version</td>
      <td>DAMIAO motor version</td>
    </tr>
    <tr>
      <td>Communication</td>
      <td>CAN Bus via USB2CAN serial bridge</td>
    </tr>
    <tr>
      <td>Default Serial Port</td>
      <td><code>/dev/ttyACM0</code></td>
    </tr>
    <tr>
      <td>Recommended System</td>
      <td>Ubuntu 24.04 + ROS2 Jazzy + Python 3.12</td>
    </tr>
    <tr>
      <td>Reference System</td>
      <td>Ubuntu 22.04 + ROS2 Humble + Python 3.10</td>
    </tr>
  </tbody>
</table>

## Bill of Materials (BOM)

| Component | Quantity | Included |
|--|--|--|
| reBot Arm B601-DM Robotic Arm | 1 | ✅ |
| Gripper | 1 | ✅ |
| USB2CAN Serial Bridge | 1 | ✅ |
| Power Adapter (24V) | 1 | ✅ |
| USB-C / Communication Cable | 1 | ✅ |
| Ubuntu Host PC | 1 | Self-prepared |

## Wiring

1. Connect the USB2CAN serial bridge to the robot arm CAN bus.
2. Connect the 24V power supply and plug the USB2CAN adapter into the host PC.
3. Confirm that the host recognizes the serial device:

```bash
ls /dev/ttyACM*
```

If you need to temporarily grant serial port permission:

```bash
sudo chmod 666 /dev/ttyACM0
```

It is recommended to add the current user to the `dialout` group instead. Log out and log back in for the change to take effect:

```bash
sudo usermod -a -G dialout $USER
```

## Environment Requirements

| Item | Recommended Requirement |
|------|------|
| Operating System | Ubuntu 24.04, Ubuntu 22.04 can be used as reference |
| ROS2 | Jazzy, Humble can be used as reference |
| Python | System Python. Jazzy usually uses 3.12, while Humble usually uses 3.10 |

## Installation Steps

### Step 0. Complete Basic Robot Arm Setup

Before starting the ROS2 integration, please complete the [reBot Arm B601-DM Getting Started Guide](https://wiki.seeedstudio.com/rebot_b601_dm_getting_started/), including assembly, motor ID configuration, zero-position initialization, and basic connectivity verification.

### Step 1. Install the ROS2 Version for Your Ubuntu System

Please refer to the official ROS2 documentation:

- [ROS2 Jazzy Ubuntu Installation](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html)
- [ROS2 Humble Ubuntu Installation](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)

:::tip

If you are using Ubuntu 24.04, you should install ROS 2 Jazzy.

If you are using Ubuntu 22.04, you should install ROS 2 Humble.

:::

### Step 2. Install Build Tools and ROS Dependencies

Install colcon, pip, Git, and the ROS packages required by this workspace:

```bash
sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-jazzy-control-msgs \
  ros-jazzy-trajectory-msgs \
  ros-jazzy-tf-transformations \
  ros-jazzy-robot-state-publisher \
  ros-jazzy-rviz2 \
  ros-jazzy-pinocchio
```

Verify the installation:

```bash
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"
```

If you use ROS2 Humble, replace the `ros-jazzy-*` package names with `ros-humble-*` and
source `/opt/ros/humble/setup.bash`.

### Step 3. Clone the Code Repository

Use the Seeed-Projects official repository by default:

```bash
git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2
```

### Step 4. Install motorbridge

Install `motorbridge` from the official PyPI source:

```bash
python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge
```

### Step 5. Get the Low-level SDK

```bash
mkdir -p third_party
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py
```

### Step 6. Build the Workspace

```bash
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash
```

Verify the executable entries:

```bash
ros2 pkg executables rebotarmcontroller
```

Expected entries include:

```text
rebotarmcontroller reBotArmController
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose
```

## Quick Start

:::caution
Before using the robot, note the following: **The arm controller has a high degree of freedom. Before enabling the controller or powering the arm, make sure the workspace is clear of people and obstacles. Review every motion command carefully to avoid accidents. Dangerous operation is strictly prohibited; you are responsible for any consequences.**
:::

### Start the Full System

The full bringup launches:

- `reBotArmController` control node
- `robot_state_publisher`
- Optional RViz

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0  #Do not open the RViz visualization interface when starting communication
```

:::tip
Every time you open a new terminal, you need to run the following two commands first

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
```
:::

If your serial port is not `/dev/ttyACM0`, replace it with the actual device name:

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1
```

### Start RViz Visualization

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0 use_rviz:=true   #Open the RViz visualization interface when starting communication
```

If the model appears too small in RViz, adjust the view from the `Views` panel on the left:

- Set `Target Frame` to `base_link`
- Adjust `Distance`, for example to `1.0` or `1.5`
- Use the mouse wheel to zoom
- Confirm that `Fixed Frame` is set to `base_link`

### Start Only the Control Node

If URDF and RViz are not needed:

```bash
ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0
```

You can also run the node directly:

```bash
ros2 run rebotarmcontroller reBotArmController
```

:::tip
Unlike `driver.launch.py`, which passes configuration files from `rebotarm_bringup/config`, running the controller directly falls back to the default SDK arm configuration. For normal use, launching through ROS is recommended.
:::

## ROS2 Namespace

The default namespace is:

```text
/rebotarm
```

Therefore, all topics, services, and actions are prefixed with `/rebotarm`, for example:

```text
/rebotarm/joint_states
/rebotarm/enable
/rebotarm/move_to_pose
```

If you need multiple robot arms or want to run alongside other ROS2 systems, you can change the namespace at launch time:

```bash
ros2 launch rebotarm_bringup bringup.launch.py arm_namespace:=left_arm
```

In this case, `/rebotarm/joint_states` becomes `/left_arm/joint_states`.

## Common APIs

### Status Topics

| API | Type | Description |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | 6-axis joint positions, velocities, and efforts |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | Control mode, enabled state, state machine, and error codes |
| `/rebotarm/joints/<joint>/state` | `rebotarm_msgs/msg/JointMotorState` | Single-joint motor state |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | Gripper motor state |

Examples:

```bash
ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once
```

### Services

| API | Type | Description |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | Enable the robot arm |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | Disable the robot arm |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | Move back to the safe home position |
| `/rebotarm/set_mode` | `rebotarm_msgs/srv/SetMode` | Switch between `mit`, `pos_vel`, and `vel` |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | Set zero position for all joints or a single joint |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | IK pre-check and target joint solution |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | Set gripper motor position in rad |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | Start gravity compensation |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | Stop gravity compensation |

### Actions

| API | Type | Description |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | End-effector pose motion |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Standard joint trajectory compatible entry point |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | Standard gripper action |

## Basic Control Examples

### 1. Enable the Robot Arm

```bash
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
```

### 2. Move to an End-effector Pose

```bash
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"
```

### 3. Send a Joint Target

```bash
ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"
```

### 4. Safe Home and Disable

```bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

## Demo Examples

All examples assume that `reBotArmController` is already running:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0
```

### Joint Motion Example

Control all 6 joints at once. The unit is rad:

```bash
ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0
```

Control only one joint:

```bash
ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0
```

### End-effector Pose Example

```bash
ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0
```

### Gravity Compensation Example

```bash
ros2 run rebotarmcontroller GravityCompensation
```

The script first calls `/rebotarm/enable`, then starts gravity compensation. When you press `Ctrl+C`, the script calls the following services in order:

1. `/rebotarm/gravity_compensation/stop`
2. `/rebotarm/safe_home`
3. `/rebotarm/disable`

This stops gravity compensation first, then moves the arm back to the safe home position and disables it.

You can also call the services manually:

```bash
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/start std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/stop std_srvs/srv/Trigger
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

### Interactive Gripper Example

```bash
ros2 run rebotarmcontroller GripperControl
```

After launch, enter:

```text
o / open    Open the gripper
c / close   Close the gripper
q / quit    Quit
```

## Configuration

Default configuration files are located at:

```text
src/rebotarm_bringup/config/
```

| File | Description |
|---|---|
| `arm.yaml` | Motor, feedback ID, and control parameters for the 6 arm joints |
| `gripper.yaml` | Gripper motor ID, feedback ID, vendor, and control parameters |
| `driver_params.yaml` | ROS parameter examples |

Common launch parameters:

| Parameter | Default | Description |
|---|---|---|
| `arm_config` | Built-in `arm.yaml` from bringup | Arm configuration path |
| `gripper_config` | Built-in `gripper.yaml` from bringup | Gripper configuration path |
| `channel` | Empty string | Use YAML by default. Override the serial port when non-empty |
| `joint_state_rate` | `100.0` | Publish rate of `/rebotarm/joint_states` |
| `cmd_arbitration` | `reject` | Low-level command arbitration during arm trajectory execution. `reject` or `preempt`; gripper low-level commands do not preempt arm trajectories |
| `arm_namespace` | `rebotarm` | ROS namespace prefix |
| `frame_id` | `base_link` | Robot arm base frame |
| `ee_frame_id` | `end_link` | End-effector frame |
| `use_rviz` | `false` | Whether to start RViz |

## Low-level Command Topics

The ROS2 workspace also provides low-level motor debugging topics:

| API | Type | Description |
|---|---|---|
| `/rebotarm/joints/<joint>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Single-joint MIT raw command |
| `/rebotarm/joints/<joint>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Single-joint position-velocity raw command |
| `/rebotarm/joints/<joint>/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | Single-joint velocity raw command |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Gripper MIT raw command |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Gripper position-velocity raw command |
| `/rebotarm/gripper/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | Gripper velocity raw command |

:::caution
Low-level command topics are intended for debugging and experiments. They do not perform IK, trajectory planning, or URDF limit checks. For application-level motion, prefer services and actions such as `/move_to_pose`, `/follow_joint_trajectory`, and `/gripper/set`.
:::

## MoveIt 2

MoveIt 2 is the motion planning framework used here for inverse kinematics, collision checking, trajectory planning and execution. The demos are separated into their own package so application flows stay isolated from the base driver.
For more details, see the official [MoveIt 2 Documentation](https://moveit.picknik.ai/main/index.html).

MoveIt-related content is split into two packages:

| Package | Purpose |
|---|---|
| `rebotarm_moveit_config` | Robot model, SRDF, kinematics, joint limits, controller and RViz config |
| `rebotarm_moveit_demos` | Application demos based on MoveIt 2 |

The MoveIt environment uses simulated hardware through `ros2_control` and `move_group` for planning and execution. It is intended for validating the model, IK, trajectory planning and demo flow in RViz.

This repository also supports real hardware. Before connecting real hardware, make sure the arm zero configuration, joint directions, joint limits, velocity limits and gripper range are all correct, or keep the default repository configuration.

### MoveIt Environment Setup

Make sure the ROS2 environment is available first. You can install packages for the currently sourced ROS distribution through `ROS_DISTRO`:

```bash
sudo apt update
sudo apt install -y \
  ros-${ROS_DISTRO}-moveit \
  ros-${ROS_DISTRO}-moveit-configs-utils \
  ros-${ROS_DISTRO}-moveit-kinematics \
  ros-${ROS_DISTRO}-moveit-planners-ompl \
  ros-${ROS_DISTRO}-moveit-simple-controller-manager \
  ros-${ROS_DISTRO}-ros2-control \
  ros-${ROS_DISTRO}-ros2-controllers \
  ros-${ROS_DISTRO}-xacro
```

The MoveIt config and demos are included in this workspace. After installing dependencies, rebuild the workspace:

```bash
cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash
```

Verify the MoveIt packages and demo entry points:

```bash
ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos
```

Expected entries include:

```text
rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place
```

### Use MoveIt

MoveIt planning can be used through the RViz GUI or through ROS nodes, in both simulation and real scenes.

#### Use MoveIt in simulation

MoveIt uses the ros2_control virtual hardware interface for RViz simulation:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py
```

By default this starts:

- `move_group`
- `robot_state_publisher`
- `ros2_control_node`
- `joint_state_broadcaster`
- `rebotarm_controller`
- `gripper_controller`
- RViz with the MoveIt MotionPlanning plugin

RViz opens automatically and loads the robot URDF model. You can control motion through the panel on the left side of the GUI.

To run the MoveIt environment without RViz:

```bash
ros2 launch rebotarm_moveit_config demo.launch.py use_rviz:=false
```

#### Use MoveIt with reBotArm hardware

For the real robot, first start the controller with the hardware interface instead of the virtual controller, then start the hardware MoveIt environment:

```bash
ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0
```

In another terminal:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py
```

To repeat: before running any demo on real hardware, make sure the workspace is clear of people and obstacles, verify the planned path in RViz, and be ready to stop the controller at any time.

### Run the draw-square demo

Start the MoveIt environment first, then run in another terminal:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py
```

`draw_square` moves `gripper_tcp` through the four corners of a coplanar rectangle.
Default parameters:

```text
src/rebotarm_moveit_demos/config/draw_square.yaml
```

Common parameters:

| Parameter | Description |
|---|---|
| `start_point` | Joint reset position before the demo starts |
| `rectangle_center` | Rectangle center in `base_link` |
| `rectangle_width` / `rectangle_height` | Rectangle dimensions in meters |
| `tcp_rpy` | TCP orientation, defaulting to a downward-facing gripper |
| `tcp_yaw_offsets` | Alternative IK yaw values used to avoid large joint6 wraps |

### Run the pick-place demo

Start the MoveIt environment first, then run in another terminal:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py
```

Default parameters:

```text
src/rebotarm_moveit_demos/config/pick_place.yaml
```

Common parameters:

| Parameter | Description |
|---|---|
| `ready_point` | Ready joint position used before and after pick/place |
| `pick_position` | Object bottom-center position in `base_link` |
| `pick_tcp_rpy` / `place_tcp_rpy` | TCP orientation for pick and place |
| `object_dimensions` | Planning-scene object dimensions in meters |
| `max_gripper_width` | Maximum total gripper opening, default `0.09m` |
| `open_gripper_position` / `closed_gripper_position` | Simulated single-side gripper joint open/close positions |
| `hardware_open_gripper_position` / `hardware_closed_gripper_position` | Hardware gripper motor open/close positions |
| `grasp_gripper_to_object_width` | Compute the grasp position from object width |

### MoveIt configuration files

| File | Description |
|---|---|
| `rebotarm_moveit_config/config/rebotarm.urdf.xacro` | Robot model used by MoveIt |
| `rebotarm_moveit_config/config/rebotarm.srdf` | MoveIt groups, end effector and default states |
| `rebotarm_moveit_config/config/kinematics.yaml` | IK solver configuration |
| `rebotarm_moveit_config/config/joint_limits.yaml` | Joint limits used by MoveIt planning |
| `rebotarm_moveit_config/config/moveit_controllers.yaml` | MoveIt trajectory execution controller config |
| `rebotarm_moveit_config/config/ros2_controllers.yaml` | ros2_control controller config |
| `rebotarm_moveit_config/config/initial_positions.yaml` | Initial joint positions for simulated hardware |
| `rebotarm_moveit_demos/config/draw_square.yaml` | Draw-square demo parameters |
| `rebotarm_moveit_demos/config/pick_place.yaml` | Pick-place demo parameters |

## FAQ

### 1. `open serial port /dev/ttyACM0 failed` appears at startup

This means the default serial port does not exist or the device name has changed. First check the actual serial device:

```bash
ls /dev/ttyACM*
```

Then specify it with `channel`:

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1
```

### 2. `Device or resource busy` appears at startup

This means the serial port is already occupied by another process. Common causes include a previously launched ROS2 node, an SDK example, or a debugging script that has not exited. Check the processes first:

```bash
ps aux | grep -E "reBotArmController|ros2|python"
```

Stop the process occupying the serial port and restart. The arm and gripper should share the same low-level Controller. Do not open the same serial port separately for the arm and gripper.

### 3. Permission denied

If the serial device exists but permission is denied:

```bash
sudo usermod -a -G dialout $USER
```

Log out and log back in for the change to take effect. For temporary debugging, you can also run:

```bash
sudo chmod 666 /dev/ttyACM0
```

### 4. Robot model is not displayed in RViz

Check the following:

- Whether the workspace has been sourced: `source install/setup.bash`
- Whether `Fixed Frame` is set to `base_link`
- Whether `robot_state_publisher` started correctly
- Whether the URDF mesh path is `package://rebotarm_bringup/description/meshes/...`

### 5. FastDDS SHM port warning appears

If the terminal shows something like:

```text
[RTPS_TRANSPORT_SHM Error] Failed init_port fastrtps_port7002: open_and_lock_file failed
```

This is usually caused by leftover FastDDS shared-memory lock files after a previous ROS2 process exited abnormally. If services and actions still respond normally, this warning usually does not affect control.

To clean it up, stop the related ROS2 processes first, then run:

```bash
pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*
```

If you want to temporarily bypass shared memory transport, set the following before launching ROS2:

```bash
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4
```

### 6. What if I use Humble?

Humble users can follow the same workflow, replace `jazzy` with `humble` in the commands, and install the corresponding dependencies according to the Humble official documentation. After switching ROS2 distributions, run `colcon build` again.

### 7. `pinocchio` cannot be found

If a node or verification command reports:

```text
ModuleNotFoundError: No module named 'pinocchio'
```

First make sure the Pinocchio package for your ROS2 distribution is installed:

```bash
sudo apt install -y ros-jazzy-pinocchio
```

Then make sure the current terminal has sourced the ROS2 environment:

```bash
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
```

If it still cannot be found, check whether the current Python search path contains the ROS2 Python package path:

```bash
python3 -c "import sys; print('\n'.join(sys.path))"
```

After sourcing Jazzy, you should see a path similar to
`/opt/ros/jazzy/lib/python3.12/site-packages`. If you use Humble, replace `jazzy` with
`humble` in the commands.

## Contact

- Technical Support: [Submit an Issue](https://github.com/Seeed-Projects/reBotArmController_ROS2/issues)
- Project Repository: [Github](https://github.com/Seeed-Projects/reBotArmController_ROS2)
- Forum: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## References

- [reBot Arm B601-DM Getting Started](https://wiki.seeedstudio.com/rebot_b601_dm_getting_started/)
- [reBot Arm B601-DM Visual Grasping Demo](https://wiki.seeedstudio.com/rebot_arm_b601_dm_grasping_demo/)
- [reBot Arm B601-DM Pinocchio and MeshCat](https://wiki.seeedstudio.com/rebot_arm_b601_dm_pinocchio_meshcat/)
- [reBot Arm B601-DM LeRobot Tutorial](https://wiki.seeedstudio.com/rebot_arm_b601_dm_lerobot/)
- [ROS2 Humble Documentation](https://docs.ros.org/en/humble/)
- [ROS2 Jazzy Documentation](https://docs.ros.org/en/jazzy/)
- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)
