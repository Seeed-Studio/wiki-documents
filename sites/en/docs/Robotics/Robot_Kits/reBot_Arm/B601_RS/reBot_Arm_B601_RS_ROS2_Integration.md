---
description: This tutorial shows how to set up the ROS2 control workspace for the reBot Arm B601-RS, including SocketCAN connection, arm control, RViz visualization, and MoveIt 2 integration.
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp
title: B601-RS with ROS2
keywords:
  - reBot Arm
  - B601-RS
  - ROS2
  - Humble
  - Jazzy
  - SocketCAN
  - RViz
  - MoveIt 2
  - Robot Arm
  - Robotics
slug: /rebot_arm_b601_rs_ros2_integration
last_update:
  date: 2026-06-10
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-10'
updatedAt: '2026-09-24'
url: https://wiki.seeedstudio.com/rebot_arm_b601_rs_ros2_integration/
---
import '/src/css/rebot-wiki-style.css';


# reBot Arm B601-RS ROS2 Integration

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
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
    <img src="https://img.shields.io/badge/ROS2-Humble | Jazzy-blue.svg" alt="ROS2 Humble | Jazzy" />
    <img src="https://img.shields.io/badge/Python-3.10%2B-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Version-v0.3.0-brightgreen.svg" alt="Version v0.3.0" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
</p>

<p align="center">
  <strong>ROS2 Control · SocketCAN · RViz Visualization · MoveIt 2 Support · Gravity Compensation</strong>
</p>

This tutorial shows how to control the reBot Arm B601-RS through the ROS2 workspace `rebotarm_ros2`. The workspace wraps the `reBotArm_control_py` Python SDK, including Pinocchio-based inverse kinematics, trajectory planning, and gravity compensation, into ROS2 topics, services, and actions. This makes it easier to use upper-level planning, RViz visualization, gravity compensation, gripper control, and custom application development.

:::note
This tutorial uses `Ubuntu 24.04 + ROS2 Jazzy` as the main reference environment. ROS2 Humble / Ubuntu 22.04 can follow the same workflow.
:::

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/ros2/MoveIt2_RS.gif" alt="reBot Arm B601-RS MoveIt 2 demo" />
</p>

## Project Features

1. **Standard ROS2 Interfaces**  
   Provides common interfaces such as `/rebotarm/joint_states`, `/rebotarm/arm_status`, `FollowJointTrajectory`, `GripperCommand`, and `MoveToPose`.

2. **Ready-to-use Kinematics, Trajectory Planning, and Gravity Compensation Nodes**  
   Provides out-of-the-box forward/inverse kinematics, trajectory planning, gravity compensation, and RViz visualization support.

3. **MoveIt 2 Integration**  
   Includes MoveIt 2 configuration and application demos, supporting simulated planning through the RViz MotionPlanning plugin and real hardware execution through the hardware control node.

## Specifications

The hardware for this tutorial is provided by [Seeed Studio](https://www.seeedstudio.com/).

| Parameter | Specification |
|---|---|
| Robot Arm Model | reBot Arm B601-RS |
| Degrees of Freedom | 6-DOF + Gripper |
| Communication | CAN |
| Default CAN Channel | `can0` |
| Default Arm Control Mode | `mit` |
| Recommended System | Ubuntu 24.04 + ROS2 Jazzy + Python 3.12 |
| Reference System | Ubuntu 22.04 + ROS2 Humble + Python 3.10 |

## Bill of Materials (BOM)

| Component | Quantity | Included |
|---|---|---|
| reBot Arm B601-RS Robotic Arm | 1 | ✅ |
| Gripper | 1 | ✅ |
| CAN Adapter | 1 | ✅ |
| Power Adapter | 1 | ✅ |
| Communication Cable | 1 | ✅ |
| Ubuntu Host PC | 1 | Self-prepared |

## Wiring

1. Connect the CAN adapter to the robot arm CAN bus.
2. Connect the gripper motor to the same CAN bus.
3. Power on the robot arm and connect the CAN adapter to the host.
4. Confirm that the host recognizes the CAN interface:

```bash
ip -br link
```

Bring up the CAN interface:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

## Environment Requirements

| Item | Recommended Requirement |
|---|---|
| Operating System | Ubuntu 24.04, Ubuntu 22.04 can be used as reference |
| ROS2 | Jazzy, Humble can be used as reference |
| Python | System Python. Jazzy usually uses 3.12, while Humble usually uses 3.10 |

## Installation Steps

### Step 0. Complete Basic Robot Arm Preparation

Before starting the ROS2 integration, please complete the [reBot Arm B601-RS Quick Start](https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/), including assembly, motor ID configuration, zero-position initialization, and other basic preparation.

### Step 1. Install the ROS2 Version for Your Ubuntu System

Please refer to the Seeed Studio Wiki ROS2 installation guide or the official ROS2 documentation:

- [ROS2 Jazzy Ubuntu Installation](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html)
- [ROS2 Humble Ubuntu Installation](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)
- [Seeed Studio Wiki ROS2 Humble Installation](https://wiki.seeedstudio.com/install_ros2_humble/)

### Step 2. Install Build Tools and ROS Dependencies

Install colcon, pip, Git, and the ROS packages required by this workspace. The following commands use the `ROS_DISTRO` value in the current terminal:

```bash
sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-${ROS_DISTRO}-control-msgs \
  ros-${ROS_DISTRO}-trajectory-msgs \
  ros-${ROS_DISTRO}-tf-transformations \
  ros-${ROS_DISTRO}-robot-state-publisher \
  ros-${ROS_DISTRO}-rviz2 \
  ros-${ROS_DISTRO}-pinocchio
```

Verify after installation:

```bash
source /opt/ros/${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"
```

### Step 3. Clone the Code Repository

This tutorial uses `~/rebotarm_ros2` as the workspace directory and the official Seeed-Projects repository:

```bash
cd ~
git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd ~/rebotarm_ros2
```

If you cloned into another directory, replace every `~/rebotarm_ros2` below with its absolute path. Relative paths such as `third_party`, `src`, and `install` are relative to the workspace root.



### Step 4. Install motorbridge

Install `motorbridge` from the official PyPI source:

```bash
python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge
```

If you use Ubuntu 22.04 / ROS2 Humble, you can usually remove `--break-system-packages`:

```bash
python3 -m pip install --user --index-url https://pypi.org/simple motorbridge
```

### Step 5. Get the Low-level SDK

```bash
cd ~/rebotarm_ros2
mkdir -p third_party
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py
```

### Step 6. Build the Workspace

:::note Code version
The status heartbeat, gravity-compensation exit detection, and rectangle trace described here correspond to [ROS2 controller PR #7](https://github.com/Seeed-Projects/reBotArmController_ROS2/pull/7). Before using these behaviors, make sure your checkout includes those changes, then rebuild and restart the control node.
:::

```bash
cd ~/rebotarm_ros2
source /opt/ros/${ROS_DISTRO}/setup.bash
colcon build --symlink-install
source install/setup.bash
```

Verify the executable entries:

```bash
ros2 pkg executables rebotarmcontroller
```

Expected entries include at least:

```text
rebotarmcontroller reBotArmController
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose
```

## Quick Start

:::caution
Before using the robot arm, note the following: **The robot arm controller has a high degree of freedom. Before enabling the controller or powering the arm, make sure the workspace is clear of people and obstacles. Review every motion command carefully to avoid accidents. Dangerous operation is strictly prohibited; you are responsible for any consequences.**
:::

### Start the Full System

In each new terminal, enter the workspace and source both ROS2 and the workspace environment. Commands below use `/opt/ros/jazzy/setup.bash`; for ROS2 Humble, use `/opt/ros/humble/setup.bash` instead.

First confirm that the CAN interface is up:

```bash
ip -details link show can0
```

The full bringup starts:

- `reBotArmController` control node
- `robot_state_publisher`
- Optional RViz

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0
```

If you only use B601-RS for a long time, you can manually change `default_model` in `src/rebotarm_bringup/config/rebotarm_hardware.yaml` to `rs`. After that, you can omit `model:=rs` and only keep the actual CAN channel parameter:

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=can0
```

### Start RViz Visualization

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=true
```

If the model appears too small in RViz, adjust the view from the `Views` panel on the left:

- Set `Target Frame` to `base_link`
- Change the view type to `Move Camera`
- Adjust `Distance`, for example to `1.0` or `1.5`
- Confirm that `Fixed Frame` is set to `base_link`

### Start Only the Control Node

If URDF and RViz are not needed:

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0
```

Use ros launch to start the node, because the launch file passes the hardware configuration from `rebotarm_bringup/config`.

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

If you need multiple robot arms, you can change the namespace at launch time:

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 arm_namespace:=right_arm
```

In this case, `/rebotarm/joint_states` becomes `/right_arm/joint_states`.

## Common APIs

### Status Topics

| API | Type | Description |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | 6-axis joint positions, velocities, and efforts, including visual gripper joints for RViz |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | Control mode, enabled state, state machine, and error codes |
| `/rebotarm/joints/<joint>/state` | `rebotarm_msgs/msg/JointMotorState` | Single-joint motor state |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | Gripper motor state |

Examples:

```bash
ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once
```

`--once` exits after receiving one message. The control node publishes `arm_status` every second and on startup or state changes, so no extra QoS options are needed. After rebuilding changed source, restart the control node. If no output arrives, press `Ctrl+C` to stop the check and confirm that the control node in terminal A is running.

### Services

| API | Type | Description |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | Enable the robot arm |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | Disable the robot arm |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | Move back to the safe home position |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | Set zero position for all joints or a single joint |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | IK pre-check and target joint solution |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | Set gripper motor position in rad |
| `/rebotarm/gripper/open` | `rebotarm_msgs/srv/GripperCommand` | Open the gripper according to the configured value |
| `/rebotarm/gripper/close` | `rebotarm_msgs/srv/GripperCommand` | Close the gripper according to the configured value |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | Start gravity compensation |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | Stop gravity compensation |

### Actions

| API | Type | Description |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | End-effector pose motion |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Standard joint trajectory compatible entry point |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | Standard gripper action |

## Basic Control Examples

### 1. Start the Control Node and Check Its State

**Terminal A: start the control node and keep it running.** It handles topic, service, and action requests continuously. If `bringup.launch.py` or `driver.launch.py` is already running from Quick Start, keep that terminal open; do not start a second driver for the same arm.

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0
```

After `reBotArmController started` appears, keep terminal A running and use another terminal for subsequent commands.

**Terminal B: load the environment and check that state messages arrive.**

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once
```

Each `--once` command exits after one message. Continue with steps 2–5 in terminal B. To monitor continuously, load the same environment in an additional terminal and run `ros2 topic echo /rebotarm/joint_states`. A continuous topic listener is not required to send commands; the driver in terminal A must remain running.

The control node automatically enables the arm and starts its control loop after connecting. Normally, `enabled` and `control_loop_active` in `arm_status` are both `true`, so no manual `/rebotarm/enable` call is needed. If you previously disabled the arm, first confirm that no trajectory, homing, or gravity-compensation task is active, then re-enable it:

```bash
# Only needed to resume control after the arm was disabled
ros2 service call /rebotarm/enable std_srvs/srv/Trigger "{}"
```

### 2. Move to an End-effector Pose

```bash
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"
```

The `move_to_pose` action is executed by the SDK end-pose controller. The B601-RS arm control mode defaults to `mit` in `rebotarm_hardware.yaml`.

### 3. Send a Joint Target

```bash
ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"
```

### 4. Control the Gripper

```bash
ros2 service call /rebotarm/gripper/open rebotarm_msgs/srv/GripperCommand "{}"
ros2 service call /rebotarm/gripper/close rebotarm_msgs/srv/GripperCommand "{}"
```

You can also send an explicit gripper motor position:

```bash
ros2 service call /rebotarm/gripper/set rebotarm_msgs/srv/SetGripper "{position: 5.0}"
```

### 5. Safe Home and Disable

```bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

## Demo Examples

Keep the control node in terminal A running and use terminal B for the examples below. Do not repeat the launch command when a driver is already running. In each new terminal, load the environment first:

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
```

`MoveTo` and `MoveToPose` can run directly after the control node starts. `GravityCompensation` and `GripperControl` call `/rebotarm/enable` internally; do not manually enable the arm before starting them. Run examples one at a time, waiting for each to finish before starting another.

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

The script first calls `/rebotarm/enable`, then starts gravity compensation. On `Ctrl+C`, it calls `/rebotarm/safe_home` followed by `/rebotarm/disable`. `safe_home` handles leaving gravity compensation before moving to the safe home position.

If the control node in terminal A closes, the gravity-compensation program in terminal B also exits automatically. It also exits if the status heartbeat is missing for about 3 seconds, without sending duplicate homing or disable requests. When RS is already in its default MIT mode, entering gravity compensation preserves the enabled state. DM retains its existing mode-switch procedure when changing from position/velocity mode to MIT.

Alternatively, call the services manually; do not run this sequence alongside the script. A normally started control node does not need another enable request. If it was disabled, follow Basic Control Examples to re-enable it first.

```bash
ros2 service call /rebotarm/gravity_compensation/start std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/stop std_srvs/srv/Trigger
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

### Interactive Gripper Example

```bash
ros2 run rebotarmcontroller GripperControl
```

On exit, the script closes the gripper and calls `/rebotarm/disable`. Re-enable the arm before sending further manual gripper commands. Running this script again enables the arm internally.

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
| `rebotarm_hardware.yaml` | ROS2 upper-layer hardware selection and SDK parameter overrides for B601-RS |
| `driver_params.yaml` | ROS parameter examples |

The `default_model` at the top of `rebotarm_hardware.yaml` may default to `dm`. If you want B601-RS to be the default model, change it to:

```yaml
default_model: rs
```

After this change, B601-RS will be used automatically when `model:=...` is not explicitly passed.

Common launch parameters:

| Parameter | Default | Description |
|---|---|---|
| `hardware_config` | Built-in `rebotarm_hardware.yaml` from bringup | ROS2 upper-layer hardware configuration path |
| `model` | `rs` | This tutorial explicitly passes `rs` to select the B601-RS configuration |
| `channel` | `can0` | SocketCAN channel |
| `joint_state_rate` | `100.0` | Publish rate of `/rebotarm/joint_states` |
| `cmd_arbitration` | `reject` | Low-level arm joint command arbitration during trajectory execution, `reject` or `preempt` |
| `arm_namespace` | `rebotarm` | ROS namespace prefix |
| `frame_id` | `base_link` | Robot arm base frame |
| `ee_frame_id` | `gripper_end` | End-effector frame |
| `use_rviz` | `false` | Whether to start bringup RViz |
| `disable_after_safe_home` | `true` | Controls whether motors are disabled after safe home completes |

Default key configuration for B601-RS in `rebotarm_hardware.yaml`:

| Item | Default |
|---|---|
| Communication channel | `can0` |
| Arm control mode | `mit` |
| Gripper open position | `5.0` |
| Gripper close position | `0.0` |
| Gravity compensation output gain for joints 2/3 | `1.5` |

## Low-level Command Topics

The ROS2 workspace also provides low-level motor debugging topics:

| API | Type | Description |
|---|---|---|
| `/rebotarm/joints/<joint>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Single-joint MIT raw command |
| `/rebotarm/joints/<joint>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Single-joint position-velocity raw command |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Gripper MIT raw command |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Gripper position-velocity raw command |

:::caution
Low-level command topics are intended for debugging and experiments. They do not perform IK, trajectory planning, or URDF validity checks. For application-level motion, prefer services and actions such as `/move_to_pose`, `/follow_joint_trajectory`, and `/gripper/set`.
:::

## MoveIt 2

MoveIt 2 is a motion planning framework for robot arms. Here it is mainly responsible for inverse kinematics, collision checking, trajectory planning, and trajectory execution. The demo package keeps application flows separated from the low-level driver. For more details, see the official [MoveIt 2 Documentation](https://moveit.picknik.ai/main/index.html).

MoveIt-related content is split into two packages:

| Package | Purpose |
|---|---|
| `rebotarm_moveit_config` | Robot model, SRDF, kinematics, joint limits, controller and RViz config |
| `rebotarm_moveit_demos` | Application demos based on MoveIt 2 |

The MoveIt environment uses simulated hardware through `ros2_control` and `move_group` for planning and execution. It is suitable for validating the model, IK, trajectory planning, and demo flow in RViz.

This repository also supports real hardware. Before connecting real hardware, make sure the arm zero configuration, joint directions, joint limits, velocity limits, and gripper open/close range are correct, or keep the default repository configuration.

### MoveIt Environment Setup

Make sure the ROS2 environment is available first. The following command installs dependencies for the currently sourced `ROS_DISTRO`:

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
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash
```

Verify the MoveIt packages and demo entry points:

```bash
ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos
```

Expected entries include at least:

```text
rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place
```

### Use MoveIt

MoveIt planning can be used through the RViz GUI or by calling nodes, in both simulation and real scenes.

#### Use MoveIt in Simulation

MoveIt uses the ros2_control virtual hardware interface for RViz simulation:

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
```

By default this starts:

- `move_group`
- `robot_state_publisher`
- `ros2_control_node`
- `joint_state_broadcaster`
- `rebotarm_controller`
- `gripper_controller`
- RViz with the MoveIt MotionPlanning plugin

RViz opens automatically and loads the B601-RS model. You can control motion through the GUI panel on the left.

To run the MoveIt environment without RViz:

```bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs use_rviz:=false
```

#### Use MoveIt with reBotArm Hardware

For real scenes, start the hardware control node first, then start the MoveIt environment for real hardware:

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0
```

In another terminal:

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py model:=rs
```

:::caution
Before running any demo on real hardware, make sure the robot arm workspace is clear of people and obstacles, verify the planned path in RViz first, and be ready to stop the controller at any time.
:::

#### Set a Goal and Execute in RViz

1. In `MotionPlanning` → `Planning`, set `Start State` to `<current>` to plan from current joint feedback. If it already shows `<current>`, select `home`, then switch back to `<current>` and wait for the state to update.
2. Set `Goal State` to `home`, then open `Joints` to adjust the target. If `home` is already selected, choose another option and select `home` again. **Confirm that the table heading says `Group joints of goal state` before editing.** If it says `Group joints of start state`, you are editing the start; return to `Planning` and select `Goal State` again.
3. For an initial simulation check, set only goal `joint1` to about `10°` and leave the other joints at zero. Rotational joint values in the `Joints` editor use degrees; ROS joint states and trajectories use radians.
4. Click `Plan`, inspect the preview, then click `Execute`. If the arm state changes after planning, plan again from the current state.

In the ROS2 Humble RViz plugin, `Joints` edits whichever start or goal state was most recently updated. After setting `Start State` or finishing execution, confirm `Group joints of goal state` before editing again.

The cyan sphere and red, green, and blue rings are end-effector interaction controls for manual planning. In the lower-left `Displays` panel, expand `MotionPlanning` → `Planning Request`:

- **Drag the end effector manually:** disable `Query Start State` and enable `Query Goal State` to edit the goal.
- **Run rectangle or pick-place scripts:** disable both `Query Start State` and `Query Goal State` to hide the sphere and rings. Enable `Query Goal State` again to resume manual dragging.
- **Keep the robot and trace visible:** keep `PlanningScene` and `RectangleTrace` enabled. Set the `RectangleTrace` topic to `/draw_square/markers`. If an older RViz window has no trace display, choose `Add` → `By display type` → `MarkerArray` and set its `Topic` to `/draw_square/markers`, or restart MoveIt to load the updated RViz configuration.

If execution reports `Invalid Trajectory: start point deviates from current robot state more than 0.05`, followed by `failed or timeout reached`, the trajectory start does not match current joint feedback. In this error, `expected` is the trajectory start and `current` is the feedback, rather than the final goal. Reset the start, confirm you are editing the goal, and replan. Increasing execution timeouts or relaxing the start tolerance does not fix this mismatch.

Use `demo.launch.py` for simulation, or the hardware driver plus `hardware.launch.py` for the real arm. Do not run both MoveIt environments together. To inspect joint-state publishers, run:

```bash
ros2 topic info /joint_states --verbose
ros2 topic info /rebotarm/joint_states --verbose
```

### Run the Draw-square Demo

This example uses **mock simulation**: a simulated `ros2_control` hardware interface displays the robot and its motion in RViz without simulating physical contact. The demo connects to the running MoveIt environment. `model:=rs` selects the robot model; it does not select simulation or real hardware.

**1. Terminal A: start simulation and keep it running.** If this simulation is already running, do not launch it again:

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
```

For ROS2 Humble, replace `jazzy` with `humble` in these and subsequent commands. The demo drives the real arm only when you started the hardware driver and `hardware.launch.py` as described above. Do not run both environments together.

**2. Terminal B: run the rectangle demo.** After changing demo code, run `colcon build --symlink-install --packages-select rebotarm_moveit_demos rebotarm_moveit_config` from the workspace and source the environment again. You do not need to click `Plan` or `Execute` in RViz:

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs
```

`draw_square` first closes the gripper. After confirming success, it resets the arm, moves through the four corners of a coplanar rectangle, and returns to the first corner. If the gripper interface is unavailable or closing fails, the demo stops.

In RViz, **the thin cyan line is the reference rectangle; the yellow line is the actual `gripper_tcp` motion sampled from TF**. Recording starts after the first corner is reached, excluding the reset and approach motions. Running the demo again clears the previous trace. The demo uses joint-space planning between corners, so the actual motion is not guaranteed to follow the four straight reference edges.

Default parameters are in:

```text
src/rebotarm_moveit_demos/config/draw_square_rs.yaml
```

Common parameters:

| Parameter | Description |
|---|---|
| `start_point` | Joint reset position before the demo starts |
| `closed_gripper_position` | Simulated single-side gripper joint position when closed, default `0.0` |
| `hardware_closed_gripper_position` | Hardware gripper motor position when closed, default `0.0`; verify hardware limits before use |
| `rectangle_center` | Rectangle center in `base_link` |
| `rectangle_width` / `rectangle_height` | Rectangle dimensions in meters |
| `tcp_rpy` | TCP orientation, defaulting to a downward-facing gripper |
| `tcp_yaw_offsets` | Alternative IK yaw values used to avoid large joint6 wraps |

`draw_square` is useful for verifying whether MoveIt IK, trajectory planning, and execution are working correctly. If planning fails, first check whether the start joint state, rectangle center, TCP orientation, and joint limits are reasonable.

### Run the Pick-place Demo

Keep the mock simulation in terminal A running. After the rectangle demo finishes, run the following in terminal B. Keep both `Query Goal State` and `Query Start State` disabled in RViz; do not click `Plan` or `Execute`.

If you started the hardware driver and `hardware.launch.py` instead, the same command drives the real arm. The pick-place demo does not start or switch between simulation and hardware environments:

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py model:=rs
```

Default parameters are in:

```text
src/rebotarm_moveit_demos/config/pick_place_rs.yaml
```

Common parameters:

| Parameter | Description |
|---|---|
| `ready_point` | Ready joint position used before and after pick/place |
| `pick_position` | Object bottom-center position in `base_link` |
| `pick_tcp_rpy` / `place_tcp_rpy` | TCP orientation for pick and place |
| `object_dimensions` | Planning-scene object dimensions in meters |
| `max_gripper_width` | Maximum total gripper opening, default `0.09m` |
| `open_gripper_position` / `grasp_gripper_position` / `closed_gripper_position` | Simulated single-side gripper joint positions |
| `hardware_open_gripper_position` / `hardware_closed_gripper_position` | Hardware gripper motor open/close positions |

In mock simulation, `pick_place` adds a virtual object to the planning scene. Scene attachment and detachment make the object follow the gripper; this does not simulate physical contact or grasping force.

`pick_place` opens the gripper, moves to the pick pose, closes the gripper, moves to the place pose, and releases the object. Simulated gripper joint positions and real hardware gripper motor positions are different parameters. Before running on real hardware, confirm the gripper open/close direction and limits.

### MoveIt Configuration Files

| File | Description |
|---|---|
| `rebotarm_moveit_config/config/rebotarm_rs.urdf.xacro` | B601-RS robot model used by MoveIt, including the gripper and `gripper_tcp` |
| `rebotarm_moveit_config/config/rebotarm_rs.ros2_control.xacro` | ros2_control mock hardware description for simulation |
| `rebotarm_moveit_config/config/rebotarm_rs.srdf` | MoveIt groups, end effector, default states, and semantic configuration |
| `rebotarm_moveit_config/config/kinematics.yaml` | IK solver configuration |
| `rebotarm_moveit_config/config/joint_limits.yaml` | Joint limits used by MoveIt planning |
| `rebotarm_moveit_config/config/ompl_planning.yaml` | OMPL planner parameters |
| `rebotarm_moveit_config/config/moveit_controllers.yaml` | MoveIt trajectory execution controller configuration for simulation |
| `rebotarm_moveit_config/config/moveit_hardware_controllers.yaml` | MoveIt trajectory execution controller configuration for real hardware |
| `rebotarm_moveit_config/config/ros2_controllers.yaml` | ros2_control controller configuration for simulation |
| `rebotarm_moveit_config/config/initial_positions.yaml` | Initial joint positions for simulated hardware |
| `rebotarm_moveit_demos/config/draw_square_rs.yaml` | Draw-square demo parameters |
| `rebotarm_moveit_demos/config/pick_place_rs.yaml` | Pick-place demo parameters |

## FAQ

### 1. `socketcan write failed: Network is down` appears at startup

This means the CAN interface has not been brought up yet. First check the interface:

```bash
ip -details link show can0
```

Restart CAN:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### 2. `can0` cannot be found

First confirm that the CAN adapter is plugged in and check the interface name:

```bash
ip -br link
```

If you use PCAN-USB:

```bash
sudo modprobe peak_usb
ip -br link
```

If the interface name is not `can0`, replace `channel` when launching:

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can1
```

### 3. Robot model is not displayed in RViz

Check the following:

- Whether the workspace has been sourced: `source install/setup.bash`
- Whether `Fixed Frame` is set to `base_link`
- Whether `robot_state_publisher` started correctly
- Whether the URDF mesh path is `package://rebotarm_bringup/description/...`

If the model is displayed but the view is inconvenient, switch the view type to `Move Camera` in the RViz `Views` panel, set `Target Frame` to `base_link`, and adjust `Distance`.

### 4. MoveIt planning fails

If the demo prints `MoveIt planning failed`, check the following:

- Confirm that `demo.launch.py` or `hardware.launch.py` has been started and that `move_group` is running correctly.
- Confirm that the current joint state is not stale and that `/joint_states` or `/rebotarm/joint_states` is being published normally.
- Confirm that the target point is inside the reachable workspace and that the target orientation does not cause the wrist or gripper to collide with the arm body.
- Confirm that the joint limits and velocity limits in `joint_limits.yaml` match the current robot arm.
- Plan manually in the RViz MotionPlanning plugin first. Run the demo only after confirming the path is collision-free.

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
sudo apt install -y ros-${ROS_DISTRO}-pinocchio
```

Then make sure the current terminal has sourced the ROS2 environment:

```bash
source /opt/ros/${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
```

If it still cannot be found, check whether the current Python search path contains the ROS2 Python package path:

```bash
python3 -c "import sys; print('\n'.join(sys.path))"
```

After sourcing Jazzy, you should see a path similar to `/opt/ros/jazzy/lib/python3.12/site-packages`. If you use Humble, replace `jazzy` with `humble` in the commands.

## Contact

- Technical Support: [Submit an Issue](https://github.com/Seeed-Projects/reBotArmController_ROS2/issues)
- Project Repository: [Github](https://github.com/Seeed-Projects/reBotArmController_ROS2)
- Forum: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## References

- [reBot Arm B601-RS Quick Start](https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/)
- [ROS2 Humble Documentation](https://docs.ros.org/en/humble/)
- [ROS2 Jazzy Documentation](https://docs.ros.org/en/jazzy/)
- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)
- [MoveIt 2 Documentation](https://moveit.picknik.ai/main/index.html)
