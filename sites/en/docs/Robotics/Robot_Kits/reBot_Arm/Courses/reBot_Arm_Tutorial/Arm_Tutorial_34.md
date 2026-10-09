---
description: "Chapter 34 of the Seeed Physical AI Beginner's Course — MoveIt 2 motion planning on the reBot Arm: the move_group architecture, SRDF planning groups, joint limits, the collision model and self-collision matrix, the planning scene, Cartesian paths, obstacle planning, trajectory execution and the draw_square / pick_place demos."
title: Chapter 34 - MoveIt2 Motion Planning
keywords:
  - reBot
  - Robotic Arm
  - ROS2
  - MoveIt2
  - SRDF
  - OMPL
  - Motion Planning
  - RViz
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_34
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/rebot_physical_ai_course_chapter_34/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 7 · Chapter 34 · Theory &amp; Practice</span>
    <h2>34. MoveIt2 Motion Planning</h2>
    <p>
      Chapter 34 of the Seeed Physical AI Beginner's Course — MoveIt 2 motion planning on the reBot Arm: the move_group architecture, SRDF planning groups, joint limits, the collision model and self-collision matrix, the planning scene, Cartesian paths, obstacle planning, trajectory execution and the draw_square / pick_place demos.
    </p>
    <div className="hero-actions">
      <a href="#overview">Chapter overview</a>
      <a href="#srdf">SRDF and planning groups</a>
      <a href="#planning">Planning scene and paths</a>
      <a href="#demos">Running the demos</a>
    </div>
  </div>
</section>

{/* TODO: this section of the original document ends with a screen recording (`409527786.mp4`, `18446744072629597584.mp4`). The file(s) are not in 图片和附件/ yet — upload them to the course CDN and link them here once they are available. */}
MoveIt 2 is the most mainstream motion planning framework for robot arms in the ROS2 ecosystem, responsible for inverse kinematics solving, collision detection, trajectory planning, and trajectory execution. For the reBot Arm B601-DM, MoveIt 2 separates high-level planning from low-level driving: planning happens in the `move_group` node, and execution is dispatched to `reBotArmController` through the `follow_joint_trajectory` action. This chapter breaks down MoveIt 2's theory and practice layer by layer, from system architecture to real-robot execution. Teaching goal: let the arm automatically plan safe motions in complex environments.

<a id="overview"></a>

## 34.1 MoveIt2 System Architecture

The core of MoveIt 2 is the `move_group` node, which acts as the master scheduler of motion planning. Around `move_group`, the reBot Arm's MoveIt 2 integration involves the following components:

|Component|Role|Corresponding file/package|
|---|---|---|
|`move_group`|Planning master scheduler: receives goals, calls IK and planners, generates trajectories, dispatches execution|`rebotarm_moveit_config`|
|URDF/Xacro|Robot model description (links, joints, meshes, gripper, gripper_tcp)|`rebotarm.urdf.xacro`|
|SRDF|Semantic model: planning groups, end-effector, default states, self-collision matrix|`rebotarm.srdf`|
|Kinematics Plugin|IK solver|`kinematics.yaml` (KDL)|
|OMPL Planner|Sampling-based motion planner|`ompl_planning.yaml` (RRTConnect)|
|Trajectory Execution|Trajectory execution controller|`moveit_controllers.yaml`|
|Planning Scene|Environment model: objects, collisions, ACM|Scene operations in `pick_place.py`|
|RViz MotionPlanning|Visualization and interaction interface|`moveit.rviz`|

### Launch chain in the simulation environment

```bash
ros2 launch rebotarm_moveit_config demo.launch.py
```

This command starts `move_group`, `robot_state_publisher`, `ros2_control_node` (mock hardware), `joint_state_broadcaster`, `rebotarm_controller`, `gripper_controller`, and RViz.

The simulation environment uses `mock_components/GenericSystem` as virtual hardware; no real arm is needed.

### Launch chain in the real-robot environment

```bash
#RS:
# Terminal 1: start the hardware driver
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0

#DM:
ros2 launch rebotarm_bringup bringup.launch.py model:=dm channel:=/dev/ttyACM0

# Terminal 2: start MoveIt (connecting to the running driver)
ros2 launch rebotarm_moveit_config hardware.launch.py
```

`hardware.launch.py` does not start `ros2_control_node`; instead, it remaps `/joint_states` to `/<arm_namespace>/joint_states`, directly reading the joint states published by the real driver, and dispatches the planned trajectory to `reBotArmController` through the `follow_joint_trajectory` action.

<a id="srdf"></a>

## 34.2 SRDF and Planning Group

SRDF (Semantic Robot Description Format) is the semantic supplement layer to URDF. URDF describes the robot's physical structure (links, joints, meshes) but does not know which joints "move together," which link is the "end-effector," or which links "will never collide." SRDF answers these questions.

The reBot Arm's SRDF defines two planning groups:

|Planning group|Composition|Use|
|---|---|---|
|`arm`|Kinematic chain `base_link` → `gripper_tcp`|6-axis arm motion planning|
|`gripper`|`gripper_joint1`, `gripper_joint2`|Gripper open/close control|

The `arm` group is defined with `<chain>`, from `base_link` to `gripper_tcp`, covering 6 joints plus the gripper links. The `gripper` group lists joints one by one with `<joint>`, containing only the two gripper joints.

SRDF also defines named states (`group_state`) for quick reset:

|State name|Group|Meaning|
|---|---|---|
|`home`|`arm`|All 6 joints at zero|
|`open`|`gripper`|Gripper joints at `0.0715` rad (fully open)|
|`closed`|`gripper`|Gripper joints at `0.0` rad (fully closed)|

End-effector declaration:

```bash
<end_effector name="gripper" parent_link="gripper_link"
              group="gripper" parent_group="arm"/>
```

`name="gripper"`: the end-effector name

`parent_link="gripper_link"`: which link the gripper is mounted on (the arm's last link)

`group="gripper"`: the planning group corresponding to the gripper

`parent_group="arm"`: the parent planning group it belongs to (the arm group)

The virtual joint fixes the arm to the world frame:

```bash
<virtual_joint name="FixedBase" type="fixed"
               parent_frame="world" child_link="base_link"/>
```

## 34.3 Joint Limits

Joint limits are split into two layers: the physical limits in URDF and the planning limits in MoveIt.

The URDF layer defines each joint's angle range (min/max position), which are hard limits at the hardware level.

The MoveIt layer defines velocity and acceleration limits in `joint_limits.yaml`, used for trajectory time parameterization:

```yaml
joint_limits:
  joint1:
    has_velocity_limits: true
    max_velocity: 1.0          # rad/s
    has_acceleration_limits: true
    max_acceleration: 1.0      # rad/s^2
  # joint2 ~ joint6 same as above
  gripper_joint1:
    has_velocity_limits: true
    max_velocity: 0.2          # rad/s
    has_acceleration_limits: true
    max_acceleration: 0.5      # rad/s^2
```

Global scaling factors:

```yaml
default_velocity_scaling_factor: 0.2
default_acceleration_scaling_factor: 0.2
```

This means planning by default uses only 20% of the max velocity and acceleration—a safe, conservative setting. In demos it can be overridden individually; for example, `velocity_scaling: 1.0` in `pick_place.yaml` means full-speed planning.

## 34.4 Collision Model and Self-Collision

MoveIt 2's collision detection is based on FCL (Flexible Collision Library), using the meshes or primitive geometries in URDF for collision detection. To speed things up, the SRDF predefines the self-collision matrix (ACM, AllowedCollision Matrix), declaring which link pairs "never need collision checks."

The reBot Arm's self-collision matrix falls into two categories:

**Adjacent (neighboring links)**: link pairs directly connected by a joint, physically always in contact, no need to check:

|Link pair|Reason|
|---|---|
|`base_link` - `link1`|Adjacent|
|`link1` - `link2`|Adjacent|
|`link2` - `link3`|Adjacent|
|`link3` - `link4`|Adjacent|
|`link4` - `link5`|Adjacent|
|`link5` - `link6`|Adjacent|
|`link6` - `gripper_link`|Adjacent|
|`gripper_link` - `gripper_left`|Adjacent|
|`gripper_link` - `gripper_right`|Adjacent|
|`gripper_link` - `gripper_tcp`|Adjacent|

**Never (never collide)**: link pairs that geometrically cannot touch:

|Link pair|Reason|
|---|---|
|`gripper_left` - `gripper_tcp`|Never|
|`gripper_right` - `gripper_tcp`|Never|
|`gripper_left` - `gripper_right`|Never|

Link pairs not in the ACM (such as `base_link` and `link6`) are normally collision-checked. During planning, OMPL avoids joint configurations that cause collisions in the sampling space.

<a id="planning"></a>

## 34.5 Planning Scene

The Planning Scene is MoveIt's model of the "world," containing the robot body, environment objects, and collision relationships. It is the prerequisite for planning: before each plan, MoveIt checks whether the start state collides with objects in the Planning Scene.

The core operations of the Planning Scene are done through three services:

|Service|Type|Role|
|---|---|---|
|`/apply_planning_scene`|`ApplyPlanningScene`|Add/remove objects, modify ACM, attach objects|
|`/get_planning_scene`|`GetPlanningScene`|Query the current scene|
|`/plan_kinematic_path`|`GetMotionPlan`|Request planning (without executing)|

## 34.6 Cartesian Paths

A Cartesian path means the end-effector moves along a straight line or curve in Cartesian space, rather than interpolating point by point in joint space. MoveIt 2 implements this via `compute_cartesian_path`. In the reBot Arm demo, `draw_square` uses the Cartesian path idea: it controls `gripper_tcp` to visit the four corners of a rectangle in the same plane. The concrete implementation is:

1. For each corner, solve the corresponding joint angles with IK:

```python
target = self.compute_ik_joint_target(
    pose_stamped, seed_values, ik_link_name,
    timeout_sec, avoid_collisions=True, label=label
)
```

2. Use OMPL to plan a trajectory from the current joint angles to the target joint angles:

```python
request = GetMotionPlan.Request()
request.motion_plan_request.group_name = self.group_name
request.motion_plan_request.pipeline_id = "ompl"
request.motion_plan_request.planner_id = "RRTConnect"
request.motion_plan_request.allowed_planning_time = 5.0
```

3. Execute the trajectory through the `/execute_trajectory` action.

`draw_square`'s key parameters:

|Parameter|Default value|Description|
|---|---|---|
|`rectangle_center`|`[0.28, 0.0, 0.12]`|Rectangle center, in the `base_link` frame|
|`rectangle_width`|`0.04`|Rectangle width (m)|
|`rectangle_height`|`0.08`|Rectangle height (m)|
|`tcp_rpy`|`[0.0, 1.57, 0.0]`|End pose; by default the gripper faces straight down|
|`tcp_yaw_offsets`|`[0.0, 3.1416, -3.1416]`|Alternative yaws for IK, avoiding large joint6 spins|
|`avoid_collisions`|`true`|Whether to avoid collisions during IK solving|

`tcp_yaw_offsets` is a practical trick: IK can return multiple solutions, and some of them make `joint6` rotate significantly. By providing multiple alternative yaws, the demo picks the solution with the smallest joint change, reducing unnecessary spins.

## 34.7 Obstacle Planning

When obstacles exist in the Planning Scene, OMPL automatically avoids them during planning. The reBot Arm's OMPL configuration is:

```yaml
planning_plugins:
  - ompl_interface/OMPLPlanner

request_adapters:
  - default_planning_request_adapters/ResolveConstraintFrames
  - default_planning_request_adapters/ValidateWorkspaceBounds
  - default_planning_request_adapters/CheckStartStateBounds
  - default_planning_request_adapters/CheckStartStateCollision

response_adapters:
  - default_planning_response_adapters/AddTimeOptimalParameterization
  - default_planning_response_adapters/ValidateSolution
  - default_planning_response_adapters/DisplayMotionPath

arm:
  default_planner_config: RRTConnect
  projection_evaluator: joints(joint1,joint2)
  longest_valid_segment_fraction: 0.005
```

Key configuration notes:

|Configuration|Value|Description|
|---|---|---|
|Default planner|`RRTConnect`|Bidirectional rapidly-exploring random tree, suitable for most scenarios|
|Projection evaluator|`joints(joint1,joint2)`|Sampling-space projection dimension, affects planning efficiency|
|Longest valid segment fraction|`0.005`|Collision-check interpolation granularity; smaller is safer but slower|

The request adapter chain (request_adapters) does four things before planning:

1. `ResolveConstraintFrames` — align the constraint frames to the planning frame
2. `ValidateWorkspaceBounds` — verify the goal is within the workspace bounds
3. `CheckStartStateBounds` — check that the start state is within joint limits
4. `CheckStartStateCollision` — check that the start state does not collide

The response adapter chain (response_adapters) does three things after planning:

1. `AddTimeOptimalParameterization` — add time parameterization (velocity, acceleration) to the trajectory
2. `ValidateSolution` — verify the trajectory satisfies constraints
3. `DisplayMotionPath` — preview the trajectory in RViz

The `pick_place` demo fully demonstrates the obstacle-planning flow: add an object → plan to the grasp pose (avoiding collisions) → attach the object → plan to the place pose (the object moves with the arm, still avoiding collisions) → detach the object → clear the scene.

## 34.8 Trajectory Execution

The trajectory planned by MoveIt 2 must be dispatched to the hardware for execution through a controller. Simulation and the real robot use different controller configurations.

**Simulation environment** (`moveit_controllers.yaml`)

```yaml
moveit_simple_controller_manager:
  controller_names:
    - rebotarm_controller
    - gripper_controller

  rebotarm_controller:
    action_ns: follow_joint_trajectory
    type: FollowJointTrajectory
    default: true
    joints: [joint1, joint2, joint3, joint4, joint5, joint6]

  gripper_controller:
    action_ns: follow_joint_trajectory
    type: FollowJointTrajectory
    default: false
    joints: [gripper_joint1, gripper_joint2]
```

In simulation, `rebotarm_controller` and `gripper_controller` are both `ros2_control` mock-hardware controllers; trajectories execute directly on virtual hardware.

**Real-robot environment** (`moveit_hardware_controllers.yaml`)

```yaml
moveit_simple_controller_manager:
  controller_names:
    - rebotarm

  rebotarm:
    action_ns: follow_joint_trajectory
    type: FollowJointTrajectory
    default: true
    joints: [joint1, joint2, joint3, joint4, joint5, joint6]
```

The real-robot config has only one `rebotarm` controller, pointing to `reBotArmController`'s `/rebotarm/follow_joint_trajectory` action. On the real robot, the gripper is controlled through the separate `/rebotarm/gripper/command` action (`GripperCommand` type), not through `follow_joint_trajectory`.

Trajectory execution tolerances:

```yaml
trajectory_execution:
  allowed_execution_duration_scaling: 1.2   # allow 20% longer execution time
  allowed_goal_duration_margin: 0.5          # extra 0.5s wait after arrival
  allowed_start_tolerance: 0.05              # start-state deviation tolerance 0.05 rad
  execution_duration_monitoring: true        # enable execution time monitoring
```

Real-robot execution flow:

1. `move_group` plans a `RobotTrajectory`
2. Sends the trajectory to `MoveItSimpleControllerManager` via the `/execute_trajectory` action
3. The controller manager converts the trajectory into a `follow_joint_trajectory` goal and sends it to `reBotArmController`'s

`/rebotarm/follow_joint_trajectory`

4. `reBotArmController` executes the trajectory internally (validation → pos_vel mode → timed dispatch → arrival check)
5. The execution result is sent back to `move_group`

If execution fails (timeout, excessive arrival deviation), `move_group` returns an error code, and the demo script decides whether to abort based on it.

<a id="demos"></a>

## 34.9 Running the Demos

### Draw-a-rectangle demo

First start the MoveIt simulation environment, then open another terminal and run:

```bash

#RS real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
#Terminal 3:
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs
#Before the real robot, make sure the area around the arm is clear and the emergency stop works. demo.launch.py is simulation—do not run it together with the real bringup.
```

```bash
#DM real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config hardware.launch.py model:=dm
#Terminal 3:
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=dm
#Before the real robot, make sure the area around the arm is clear and the emergency stop works. demo.launch.py is simulation—do not run it together with the real bringup.
```

`draw_square` controls `gripper_tcp` to visit the four corners of a rectangle, verifying whether the IK, trajectory planning, and execution chain work. Default parameters are in `src/rebotarm_moveit_demos/config/draw_square.yaml`.

### Pick-and-place demo

<iframe width="560" height="560" src="https://www.youtube.com/embed/IbQEc9Ku1gA?si=yM-lXehjCWkV7K6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

`pick_place` adds a to-be-grasped object to the planning scene, then controls the gripper to open → move to the grasp pose → close the gripper → attach the object → move to the place pose → release the object. Default parameters are in `src/rebotarm_moveit_demos/config/pick_place.yaml`.

Before running on the real robot, first confirm the gripper's open/close direction and limits. The simulated gripper joint positions and the real hardware gripper motor positions are two different sets of parameters:

|Parameter|Simulation value|Hardware value|
|---|---|---|
|Gripper fully open|`0.045` (per side, rad)|`-5.0` (motor position)|
|Gripper fully closed|`0.0` (per side, rad)|`0.0` (motor position)|

```bash
#RS real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
#Terminal 3:
ros2 launch rebotarm_moveit_demos pick_place.launch.py
```

```bash
#DM real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config hardware.launch.py model:=dm
#Terminal 3:
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=dm
```

**Before running on the real robot, make sure the area around the arm is clear and the emergency stop works. `demo.launch.py` is simulation — do not run it together with the real bringup.**

## 34.10 FAQ

### What if MoveIt planning fails?

Check the following:

- Whether the start joint state is within limits (the `CheckStartStateBounds` adapter reports errors)
- Whether the start state collides with scene objects (the `CheckStartStateCollision` adapter reports errors)
- Whether the target pose is within the workspace (the `ValidateWorkspaceBounds` adapter reports errors)
- Whether IK can solve for the target (`ik_timeout` defaults to 5s; can be increased)
- Whether the planning time is sufficient (`planning_time` defaults to 5s; can be increased)

### The MotionPlanning plugin does not show in RViz?

Confirm `demo.launch.py` has started and the RViz config file loaded `moveit.rviz`. If you open RViz manually, you need to add the MotionPlanning display manually.

### Simulation works but the real robot fails?

Check whether `hardware.launch.py` correctly remaps `/joint_states` to `/<arm_namespace>/joint_states`. Confirm `reBotArmController` is running and enabled.

The first trajectory point deviation must be less than `0.10 rad`, and the final arrival deviation less than `0.03 rad`.

### joint6 rotates too much?

IK can return multiple solutions, making `joint6` spin significantly. `draw_square` mitigates this with the `tcp_yaw_offsets` parameter providing alternative yaws. Custom applications can pick the solution with the smallest joint change after IK solving.

### The gripper direction is reversed on the real robot?

Check `hardware_open_gripper_position` and `hardware_closed_gripper_position` in `pick_place.yaml`. B601-DM defaults to open `-5.0` and close `0.0`; if the motor direction is reversed, swap these two values.

{/* Note: parts of this chapter were drafted with the help of Doubao AI. */}

</div>
