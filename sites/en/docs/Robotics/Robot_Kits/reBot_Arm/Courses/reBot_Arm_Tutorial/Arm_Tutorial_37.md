---
description: "Chapter 37 of the Seeed Physical AI Beginner's Course — kinematics and trajectory control in MuJoCo: joint space versus Cartesian space, reading the end-effector pose, forward and inverse kinematics with the DLS algorithm, target position and orientation, joint interpolation, linear and minimum-jerk trajectories, control frequency, joint limits, and four runnable demos."
title: Chapter 37 - Kinematics and Trajectory Control in MuJoCo
keywords:
  - reBot
  - Robotic Arm
  - MuJoCo
  - Forward Kinematics
  - Inverse Kinematics
  - DLS
  - Trajectory
  - Minimum Jerk
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_37
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/rebot_physical_ai_course_chapter_37/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 8 · Chapter 37 · Theory &amp; Practice</span>
    <h2>37. Kinematics and Trajectory Control in MuJoCo</h2>
    <p>
      Chapter 37 of the Seeed Physical AI Beginner's Course — kinematics and trajectory control in MuJoCo: joint space versus Cartesian space, reading the end-effector pose, forward and inverse kinematics with the DLS algorithm, target position and orientation, joint interpolation, linear and minimum-jerk trajectories, control frequency, joint limits, and four runnable demos.
    </p>
    <div className="hero-actions">
      <a href="#overview">Chapter overview</a>
      <a href="#kinematics">Forward and inverse kinematics</a>
      <a href="#trajectory">Trajectories</a>
      <a href="#demos">The four demos</a>
    </div>
  </div>
</section>

{/* TODO: this section of the original document ends with a screen recording (`2026-08-19%2017-21-02.mkv`, `2026-08-19%2017-03-15.mkv`). The file(s) are in 图片和附件/ but recordings are not published through the course CDN path - upload them and link them here once they are available. */}
> Chapter 36 got the arm moving in MuJoCo—but that was only "slider-dragging" level control. This chapter goes up a level: from "joint angles" to "spatial poses", from "instant jumps" to "smooth trajectories". Teaching goal: let users practice forward kinematics, inverse kinematics, and trajectory control in a safe simulation environment, and observe the effects of different control methods.
>
>

<a id="overview"></a>

## 37.1 Joint Space and Cartesian Space

Robot control has two major coordinate systems; understanding their difference is the starting point of all motion planning.

### Joint Space

You directly tell each joint "rotate to how many degrees." The joint space of a 6-DOF arm is 6-dimensional, with each dimension corresponding to one motor's angle.

```text
Joint space goal = [j1, j2, j3, j4, j5, j6]  # unit: radians
```

Advantages: direct, unambiguous, no unreachable problem (as long as within limits).

Disadvantages: you do not know where the end-effector went—you need forward kinematics to compute it.

### Cartesian Space

You tell the end-effector "go to which point in space." Use x, y, z to describe position,

and a rotation matrix or quaternion to describe orientation.

```text
Cartesian goal = [x, y, z, qx, qy, qz, qw]  # position + orientation
```

Advantages: intuitive—"move the end-effector 30 cm above the table."

Disadvantages: you need inverse kinematics to translate the pose into joint angles; it may have no solution or multiple solutions.

|Comparison dimension|Joint space|Cartesian space|
|---|---|---|
|Described quantity|6 joint angles|3 position + 3 orientation|
|Needs solving?|No, send directly|Needs IK solving|
|Typical interface|`/rebotarm/follow_joint_trajectory`|`/rebotarm/move_to_pose`|
|Singularity risk|None|Yes (Jacobian matrix degenerates at certain poses)|
|Applicable scenarios|Joint homing, preset poses|Grasping, obstacle avoidance, spatial paths|

> In one sentence: joint space is the "native language of the arm", Cartesian space is "the language of humans", and kinematics is the interpreter between them.
>
>

## 37.2 Reading the End-Effector Pose

In MuJoCo, the end-effector pose is obtained through site objects. The reBot Arm defines

a site named `tcp` in the MJCF, fixed at the end of the gripper:

```xml
<site name="tcp" pos="-0.105 0 0" size="0.008" rgba="1 0.34 0.16 1"/>
```

`tcp` stands for Tool Center Point—the point where the gripper grasps objects. `pos="-0.105 0 0"` means it is 10.5 cm forward along the X axis; `size="0.008"` is the display radius. After each `mj_forward` or `mj_step`, MuJoCo writes the world coordinates of all sites into `data.site_xpos` and `data.site_xmat`:

```python
import mujoco
import numpy as np

model = mujoco.MjModel.from_xml_path("rebotarm_b601_stl.xml")
data = mujoco.MjData(model)

# write joint angles
data.qpos[:] = [0, -0.5, -1.0, 0, 0, 0, 0]
mujoco.mj_forward(model, data)

# read the TCP pose
tcp_id = mujoco.mj_name2id(model, mujoco.mjtObj.mjOBJ_SITE, "tcp")
position = data.site_xpos[tcp_id]          # [x, y, z]
rotation = data.site_xmat[tcp_id].reshape(3, 3)  # 3x3 rotation matrix

print(f"TCP position: {position}")
print(f"TCP rotation:\n{rotation}")
```

`site_xpos` is an array of length 3 (xyz in the world frame), and `site_xmat` is an array of length 9 (a flattened 3x3 rotation matrix) that needs reshaping.

<a id="kinematics"></a>

## 37.3 Forward Kinematics Computation

Forward Kinematics (FK) means "given the joint angles, find the end-effector pose." In the reBot Arm's simulation code, the FK implementation is very direct—it calls no external IK library and relies entirely on MuJoCo's own kinematics engine. The core method is

`_fk_pose` in `sim_task_server.py`. See also https://docs.mujoco.cn/en/stable/APIreference/APIfunctions.html

Key points:

|Step|Code|Role|
|---|---|---|
|Reset state|`qpos[:] = base_qpos`|Clear the previous joint state to avoid residue|
|Write joint angles|`qpos[qpos_addr] = ...`|Write each joint according to MuJoCo's internal addresses|
|Forward computation|`mj_forward`|Update kinematics without integrating physics|
|Read pose|`site_xpos / site_xmat`|Get the end-effector pose from the TCP site|

Note that `mj_forward` is used here, not `mj_step`. `mj_forward` only does forward kinematics computation (updating site coordinates, Jacobians, etc.), without physics integration—faster and cleaner for pure kinematics computation.

The `ros_to_mujoco_position` method handles the mapping from ROS joint angles to MuJoCo joint angles (including scale and offset), ensuring both coordinate systems are consistent.

## 37.4 Inverse Kinematics Solving

### Inverse Kinematics (IK)

IK means "given the end-effector pose, find the joint angles"—the core of Cartesian-space control. The reBot Arm does not use analytic IK (closed-form solutions), but a numerical method—the Jacobian-based Damped Least Squares (DLS).

**Why not use the analytic solution?**

Analytic IK for a 6-DOF arm requires specific geometric conditions (e.g., a spherical wrist), and the derivation is complex and error-prone. Numerical methods do not guarantee global optimality, but they are general, concise, and applicable to any configuration.

### DLS algorithm principle

The core equation of standard IK is `J * dq = dx`, where J is the Jacobian matrix, dx is the end-effector pose error, and dq is the joint angle correction. Directly inverting `dq = J^(-1) * dx` explodes near singularities (J is not invertible).

DLS adds a damping term:

```text
dq = J^T * (J * J^T + lambda^2 * I)^(-1) * dx
```

where lambda is the damping coefficient. Larger lambda is more stable but converges slowly; smaller lambda is more precise but prone to oscillation. The reBot Arm's IK parameters (defined in `declare_parameter` of `sim_task_server.py`):

|Parameter|Default value|Meaning|
|---|---|---|
|`ik_iterations`|360|Maximum number of iterations|
|`ik_tolerance`|0.004|Position convergence threshold (4 mm)|
|`ik_damping`|0.035|DLS damping coefficient lambda|
|`ik_orientation_weight`|0.75|Orientation error weight|
|`ik_orientation_tolerance`|0.07|Orientation convergence threshold|

## 37.5 Target Position and Target Orientation

Cartesian-space goals come in two granularities:

|Goal type|Included information|IK behavior|
|---|---|---|
|Position only|[x, y, z]|Only optimizes the end-effector coordinates; orientation is free|
|Position + orientation|[x, y, z, qx, qy, qz, qw]|Optimizes position and orientation simultaneously|

In the ROS2 interface, goals are passed through the `Pose` message. The `_pose_to_matrix_if_requested` method decides: if the quaternion is close to `[1, 0, 0, 0]` (identity quaternion, i.e., no rotation), it returns `None` and IK only solves position; otherwise it converts to a rotation matrix and passes it to the IK solver.

In practice, position-only mode is more common—grasping tasks usually do not care about the end-effector orientation, as long as the target point is reached. Scenarios requiring precise orientation (such as assembly, plugging/unplugging) enable the orientation constraint.

## 37.6 Joint Interpolation

With the start and end joint angles, how do you make the arm "smoothly" go from A to B?

The simplest method is linear interpolation:

```text
q(t) = q0 + (q1 - q0) * ratio       # ratio is in [0, 1]
```

But linear interpolation has a velocity jump at the start and end (from 0 instantly to maximum speed), which makes the arm shake.

The reBot Arm uses smoothstep interpolation (cubic Hermite) in the `_execute_joint_path` method:

```python
ratio = self._clamp((now - t0) / (t1 - t0), 0.0, 1.0)
eased = ratio * ratio * (3.0 - 2.0 * ratio)
q = q0 + (q1 - q0) * eased
```

This function has zero derivative at `ratio=0` and `ratio=1`, meaning the start and end

velocities are zero—the arm starts smoothly and stops smoothly.

|Interpolation method|Formula|Start/stop velocity|Continuous acceleration|Applicable scenarios|
|---|---|---|---|---|
|Linear|`ratio`|Jump|No|Simple tests|
|Smoothstep|`ratio^2 * (3 - 2*ratio)`|Zero|No|General smooth motion|
|Minimum Jerk|`10*r^3 - 15*r^4 + 6*r^5`|Zero|Yes|High-precision trajectories|

## 37.7 Linear Trajectories

A linear trajectory means the end-effector moves in a straight line in Cartesian space. There are two implementation approaches:

### Method 1: joint-space interpolation (not a Cartesian straight line)

Interpolate directly in joint space—the end-effector actually travels an arc, not a straight line. The reBot Arm's `_execute_joint_path` is this approach. Simple, fast, never hits singularities, but the end-effector path is unpredictable.

### Method 2: Cartesian-space straight line

Linearly interpolate the end-effector pose in Cartesian space, converting back to joint angles with IK at each step:

```python
for t in np.linspace(0, 1, n_steps):
    target_pos = start_pos + (end_pos - start_pos) * t
    q = solve_ik(target_pos, current_q)
    publish(q)
```

This approach makes the end-effector travel a true straight line, but every step needs an IK solve (computationally heavy), and it may hit singularities that make IK fail to converge.

|Comparison dimension|Joint-space interpolation|Cartesian-space straight line|
|---|---|---|
|End-effector path|Arc|Straight line|
|Computation load|Low (direct interpolation)|High (IK every step)|
|Singularity risk|None|Yes|
|reBot Arm default|Yes|No|

<a id="trajectory"></a>

## 37.8 Minimum Jerk Trajectories

Minimum Jerk is an optimal trajectory planning method that minimizes the integral of "jerk" (the derivative of acceleration). Its formula is:

```text
s(t) = 10*t^3 - 15*t^4 + 6*t^5       # t is in [0, 1]
```

Features:

- Position, velocity, and acceleration are all zero at the start and end
- Acceleration is continuous, with no jumps
- Extremely smooth motion, suitable for high-precision tasks

The reBot Arm currently uses smoothstep (cubic Hermite), which strikes a good balance between smoothness and computation cost. If higher precision is needed, it can be replaced with Minimum Jerk:

```python
def minimum_jerk(ratio):
    return 10 * ratio**3 - 15 * ratio**4 + 6 * ratio**5

# replace eased in _execute_joint_path
eased = minimum_jerk(ratio)
```

## 37.9 Trajectory Control Frequency

The core parameter of trajectory execution is the control frequency (`command_hz`), i.e., how many joint commands are sent to the simulation per second.

The reBot Arm's default configuration:

|Parameter|Default value|Meaning|
|---|---|---|
|`command_hz`|60 Hz|Trajectory command send frequency|
|`max_joint_speed`|1.4 rad/s|Maximum joint velocity limit|
|`record_hz`|30 Hz|Recording sample frequency|

The core loop of `_execute_joint_path`:

```python
period = 1.0 / self.command_hz  # 1/60 = 0.0167s

while True:
    now = time.monotonic() - started
    ratio = clamp((now - t0) / (t1 - t0), 0.0, 1.0)
    eased = ratio * ratio * (3.0 - 2.0 * ratio)
    q = q0 + (q1 - q0) * eased
    self._publish_joint_targets(q)
    if ratio >= 1.0:
        break
    time.sleep(period)
```

60 Hz means a command is sent every 16.7 ms. For a 6-DOF arm, this frequency is smooth enough—the human eye cannot perceive jumps above 30 Hz. But note: `command_hz` is the trajectory-layer frequency, not the physics-layer one. The physics simulation

(`mujoco_physics_grasp.py`) runs at `control_hz=500`, i.e., PD torque control every 2 ms. These are control loops at different layers:

|Control layer|Frequency|Responsible module|Command type|
|---|---|---|---|
|Physics control loop|500 Hz|`mujoco_physics_grasp`|PD torque|
|Trajectory control loop|60 Hz|`sim_task_server`|Joint position goals|
|State publishing loop|30 Hz|`real2sim_sync`|JointState|
|Recording sampling loop|30 Hz|`sim_task_server`|CSV records|

## 37.10 Joint Range and Velocity Limits

### Joint range

The limits of the reBot Arm's 6 joints and gripper are defined in the MJCF. During IK solving, every step updates and constrains the joint angles within the range through the `clamp_ros` method:

```python
def ros_to_mujoco_position(self, value: float) -> float:
    mapped = float(value) * self.scale + self.offset
    if self.lower is not None:
        mapped = max(mapped, self.lower)
    if self.upper is not None:
        mapped = min(mapped, self.upper)
    return mapped
```

### Velocity limits

During trajectory execution, every joint command carries a velocity limit `vlim`:

```python
msg = JointMotorCmd()
msg.use_pos = True
msg.use_vlim = True
msg.vlim = float(self.max_joint_speed)  # 1.4 rad/s
```

`max_joint_speed=1.4` rad/s is about 80 deg/s. This value limits the upper bound of the joint angular velocity, preventing the arm from moving at dangerous speeds.

The trajectory duration is determined by the joint differences between the start and end and the velocity limit:

```text
Minimum time = max(|q1[i] - q0[i]| / max_joint_speed)   for each joint i
```

For example, joint2 going from 0 to -1.57 rad: minimum time = 1.57 / 1.4 = 1.12 seconds.

If the specified `duration` is less than the minimum time, the arm moves at full speed (`max_joint_speed`) and may finish before reaching the target—so leave enough margin in `duration`.

<a id="demos"></a>

## 37.11 Demo 1: Forward Kinematics

Goal: input a set of joint angles, compute and display the end-effector (TCP) pose. This Demo does not need to start ROS2—

pure MuJoCo Python calls, verifying whether the joint-angle-to-end-position mapping is correct.

```python
DM:
cd ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main
source scripts/source_rebotarm_env.sh
python3 demo1_fk.py
RS:
cd ~/ReBot_Arm_DigitalTwin_RS
source scripts/rs_env.sh
python3 demo1_fk.py
```

The expected output is similar to:

```text
Model: DM (rebotarm_b601_stl.xml)

--- Pose 1 ---
Joint angles: [0, 0, 0, 0, 0, 0]
TCP position: x=0.1553, y=0.0000, z=0.1917
TCP rotation matrix:
  [1.0000 0.0000 -0.0000]
  [0.0000 1.0000 0.0001]
  [0.0000 -0.0001 1.0000]

--- Pose 2 ---
Joint angles: [0, -0.5, -1.0, 0, 0, 0]
TCP position: x=0.1141, y=0.0000, z=0.5034
TCP rotation matrix:
  [0.8776 0.0000 -0.4794]
  [0.0000 1.0000 0.0001]
  [0.4794 -0.0001 0.8776]

--- Pose 3 ---
Joint angles: [0, -0.8, -1.5, 0.5, 0, 0]
TCP position: x=0.1409, y=0.0000, z=0.5559
TCP rotation matrix:
  [0.9801 0.0000 -0.1987]
  [0.0000 1.0000 0.0001]
  [0.1987 -0.0001 0.9801]

```

Demo 1 is pure computation: load the MJCF model -> set joint angles -> compute forward kinematics with `mj_forward` -> print the TCP pose. The whole process happens in memory: no viewer, no ROS2 topics, no fake driver, so the arm does not move. Pure MuJoCo Python calls. It verifies whether the joint-angle-to-end-pose mapping is correct—if you manually measure the arm's end position at the zero pose, it should match the FK result.

## 37.12 Demo 2: Inverse Kinematics

**Goal**: given a target position, solve the joint angles and move the arm there. Use the ROS2 Service interface `/rebotarm/move_to_pose_ik`:

Before running, you need to start the simulation stack:

```bash
RS:
cd ~/ReBot_Arm_DigitalTwin_RS
./scripts/start_rs_sim.sh
DM:
cd ~/ReBot_Arm_DigitalTwin_DM
./rebotarm start sim

# Terminal 2: run the IK client
python3 demo2_ik.py
```

Expected output:

```text
Namespace: /rebotarm
Success: True
Message: IK success, error=9.6 mm, orient=0.000
Joint solution: [-0.3425787656649655, -1.5209255751808715, -0.707446304651899, -0.39301552902275094, 0.08498990704705993, -4.1821209004842323e-07]
```

Note: move_to_pose_ik only returns the joint solution; it does not execute motion. To watch the arm actually move there, use the Action interface in Demo 3.

error indicates the distance (in mm) between the IK-solved end position and the target. The launch script sets ik_tolerance to 0.020 (20 mm); an error within 20 mm is judged as success.

## 37.13 Demo 3: Trajectory Control

**Goal**: move the end-effector to the object target point and observe the smooth transition effect.

Use the Action interface `/rebotarm/move_to_pose` to execute multi-segment trajectories:

1. Make sure the simulation stack is running
2. Run the script

```bash
./rebotarm start web
```

3. Observe the arm's motion in the MuJoCo viewer

**Comparison experiment**: to compare the difference between linear interpolation and smoothstep, you can modify

the interpolation function of `_execute_joint_path` in `sim_task_server.py`:

```python
# Linear interpolation (will shake)
eased = ratio

# Smoothstep (current default)
eased = ratio * ratio * (3.0 - 2.0 * ratio)

# Minimum Jerk (smoothest)
eased = 10 * ratio**3 - 15 * ratio**4 + 6 * ratio**5
```

Run each and observe the end-effector motion: linear interpolation has obvious jerkiness at waypoint switches, smoothstep starts and stops smoothly, and Minimum Jerk is silky smooth throughout.

## 37.14 Demo 4: A Simple Grasping Action

**Goal**: place a block in the scene and complete the pick-and-place flow.

The scene already has three objects (defined in the MJCF `rebotarm_b601_stl.xml`):

|Object|Position [x, y, z]|Color|
|---|---|---|
|red_cube|[0.34, -0.13, 0.061]|Red cube|
|blue_block|[0.50, 0.11, 0.055]|Blue block|
|yellow_cylinder|[0.44, -0.02, 0.065]|Yellow cylinder|

Grasping flow:

```text
Move above the object -> descend -> close the gripper -> lift -> move to the target position -> open the gripper
```

Run:

```bash
# Terminal 1: start the physics simulation (physics grasp mode is needed to grasp objects)
./scripts/start_rebot_mujoco_all.sh

# Terminal 2: run the grasping demo on the web page
./rebotarm start web
```

## 37.15 FAQ

**Q1: IK solving fails (error > 20 mm). What should I do?**

Common causes:

1. The target position is outside the workspace—the reBot Arm's reach is about 50 cm; targets too far have no solution
2. The target is near a singularity—e.g., when the end-effector is fully extended, the Jacobian matrix degenerates
3. Joint limits prevent convergence—some poses require joints to exceed limits to be reached

Solutions: adjust the target position, or increase `ik_tolerance` and `ik_damping`:

```bash
ros2 launch rebotarm_mujoco mujoco_sim_task_server.launch.py \
  ik_tolerance:=0.010 ik_damping:=0.05
```

**Q2: The arm shakes during trajectory execution. What should I do?**

Check whether `command_hz` is too low (below 30 Hz causes visible shaking). The default 60 Hz is usually sufficient.

If using physics mode, check whether the PD parameters are appropriate—too large an `arm_kp` causes oscillation.

**Q3: The object is knocked away during grasping. What should I do?**

In physics mode, the PD torque is too large. Lower `arm_torque_limit`:

```bash
ros2 launch rebotarm_mujoco mujoco_physics_grasp.launch.py \
  arm_torque_limit:=10.0
```

You can also lower the descent speed (increase the `duration` parameter) so the gripper approaches the object slowly.

**Q4: What is the difference between `move_to_pose` and `move_to_pose_ik`?**

|Interface|Type|Behavior|
|---|---|---|
|`/rebotarm/move_to_pose_ik`|Service|Only solves IK and returns joint angles; does not execute motion|
|`/rebotarm/move_to_pose`|Action|Solves IK + executes a smooth trajectory; supports feedback and cancellation|

**Q5: How to switch between kinematics mode and physics mode?**

```bash
# Kinematics mode (directly writes qpos, no physical interaction)
MUJOCO_GRASP_MODE=kinematic ./scripts/start_rebot_mujoco_all.sh

# Physics mode (PD torque control, can grasp objects)
MUJOCO_GRASP_MODE=physics ./scripts/start_rebot_mujoco_all.sh
```

Kinematics mode suits debugging kinematics and trajectory planning; physics mode suits testing grasping and interaction.

**Q6: What is the difference between `mj_forward` and `mj_step`?**

`mj_forward` only does forward computation (kinematics, Jacobian, site coordinates), without physics integration.

`mj_step` also does physics integration (forces, contacts, collisions) on top of `mj_forward`.

Use `mj_forward` for pure IK/FK computation, and `mj_step` for physics simulation.

- Joint space is the arm's native language, Cartesian space is the human language, and kinematics is the interpreter.
- `mj_forward` computes kinematics, `mj_step` computes dynamics—the former only looks at geometry, the latter actually computes physics.
- Adding damping in DLS is not a compromise but engineering wisdom—better to converge a bit slower than to explode at a singularity.
- Smoothstep makes the arm "start lightly and arrive steadily"; Minimum Jerk makes it "silky smooth throughout".
- 60 Hz sends commands, 500 Hz computes torques, 30 Hz publishes states—three control loops each with their own duty.

---

</div>
