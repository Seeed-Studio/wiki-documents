---
description: "Chapter 26 of the Seeed Physical AI Beginner's Course — hands-on Pinocchio and MeshCat on the reBot Arm: installing uv, loading the URDF, and running the forward kinematics, inverse kinematics (damped least squares with line search) and trajectory planning (SE(3) geodesic plus CLIK) demos."
title: Chapter 26 - Pinocchio and MeshCat
keywords:
  - reBot
  - Robotic Arm
  - Pinocchio
  - MeshCat
  - Inverse Kinematics
  - Trajectory Planning
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_26
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-25
  author: Seeed Studio Robotics Team
createdAt: '2026-09-25'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/rebot_physical_ai_course_chapter_26/
---

import '/src/css/rebot-wiki-style.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 5 · Chapter 26 · Practice</span>
    <h2>26. Pinocchio and MeshCat</h2>
    <p>
      Chapter 26 of the Seeed Physical AI Beginner's Course — hands-on Pinocchio and MeshCat on the reBot Arm: installing uv, loading the URDF, and running the forward kinematics, inverse kinematics (damped least squares with line search) and trajectory planning (SE(3) geodesic plus CLIK) demos.
    </p>
    <div className="hero-actions">
      <a href="#setup">Environment</a>
      <a href="#fk-demo">FK demo</a>
      <a href="#ik-demo">IK demo</a>
      <a href="#traj-demo">Trajectory demo</a>
    </div>
  </div>
</section>

## 26.1 Learning Objectives

Apply coordinate transforms, kinematics, and trajectory planning theory to a real robot development framework.

Learn to use Pinocchio and MeshCat

## 26.2 What Pinocchio and MeshCat Give You

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) is an open-source library for robot dynamics analysis and optimization. It provides efficient forward/inverse kinematics, dynamics computation, and trajectory planning. [MeshCat](https://github.com/rdeits/meshcat) is a web-based 3D visualization tool that can display robot state and motion trajectories in real time.

```Plain Text
URDF  ---->  Pinocchio  ---->  Result
(describe)   (algorithm)      (FK/IK/dynamics)
```

By reading the robot's URDF model, Pinocchio can do the following.

| Capability | Pinocchio call | Used in this chapter |
| :--- | :--- | :--- |
| Build the kinematic model from URDF | `pin.buildModelFromUrdf()` | Load `reBot-DevArm_fixend.urdf` |
| Forward kinematics (all link poses) | `pin.forwardKinematics()` | FK demo, IK iteration |
| Update frame placements | `pin.updateFramePlacements()` | Read the `end_link` pose |
| Frame Jacobian | `pin.getFrameJacobian()` | Damped least squares IK |
| SE(3) exponential / logarithm | `pin.exp6()` / `pin.log6()` | 6D pose error, geodesic interpolation |
| Rotation helpers | `pin.rpy.rpyToMatrix()`, `matrixToRpy()` | Reading and printing poses |

Next, use the reBot control repository to try it out.

<a id="setup"></a>

## 26.3 Download the Demo and Set Up the Environment

Following the tutorial, first complete the arm initialization.

## 26.4 Install uv (if not installed)

```Bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## 26.5 Sync the Environment (install all dependencies)

```Bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

`uv sync` creates the virtual environment and installs Pinocchio, MeshCat and the reBot dependencies. Check it before going further:

```Bash
uv run python -c "import pinocchio, meshcat; print(pinocchio.__version__)"
```

**How to switch between Damiao and Robostride motor configurations**

Modify the `config/rebotarm_dm.yaml` (Damiao) or `config/rebotarm_rs.yaml` (Robostride) config file, and load the corresponding config in the code.

| Version | Config file | Motor bus | End-effector frame |
| :--- | :--- | :--- | :--- |
| **B601-DM** (Damiao) | `config/rebotarm_dm.yaml` | Damiao serial | `end_link` (from config) |
| **B601-RS** (Robostride) | `config/rebotarm_rs.yaml` | SocketCAN | `end_link` (from config) |

:::tip
`config/rebotarm.yaml` is the entry point: it points to the hardware config (`rebotarm_dm.yaml` /
`rebotarm_rs.yaml`), which in turn points to the URDF (`reBot-DevArm_fixend.urdf`). If a demo cannot
find the model, check this chain first.
:::

<a id="fk-demo"></a>

## 26.6 Forward Kinematics MeshCat Visualization Demo

[sim_fk.mov](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/videos/sim_fk.mov)

```Plain Text
uv run ./example/sim/fk_sim.py

#Open the arm model visualization web address as prompted in the terminal

#Enter angles as prompted
45 -30 15 -60 90 -180

#The arm model moves accordingly
```

## 26.7 Walkthrough of the Forward Kinematics Demo

fk_sim.py is a **straight-through forward kinematics pipeline**: joint angles -> Pinocchio FK -> end-effector pose + MeshCat rendering.

```Plain Text
+---------------------------------------------------------------------+
|                        fk_sim.py main loop                          |
|                                                                     |
|  User inputs 6 angles (deg)                                         |
|      |                                                              |
|      v                                                              |
|  q = np.radians(angles)                                             |
|      |                                                              |
|      +--> viz.update(q)                                             |
|      |      |                                                       |
|      |      v                                                       |
|      |    MeshcatVisualizer.display(q)                             |
|      |      +-- pin.FK(q) -> poses of each link                     |
|      |      +-- push transform -> MeshCat -> browser render         |
|      |                                                              |
|      +--> compute_fk(model, q)                                     |
|              |                                                      |
|              +-- pin.forwardKinematics(model, data, q)             |
|              |    base -> link1 -> link2 -> link3 -> link4          |
|              |      -> link5 -> link6 -> end_link                  |
|              |                                                      |
|              +-- pin.updateFramePlacements(model, data)            |
|              |    oMf["end_link"] = oM_link6 * T_fixed             |
|              |                                                      |
|              +--> (position, rotation, homogeneous)               |
|                    |                                                |
|                    v                                                |
|              matrixToRpy -> euler angles -> print pose              |
+---------------------------------------------------------------------+
```

The reason this demo is a good starting point: it is the shortest possible path from "six numbers" to "a 3D model that moves", with no IK, no dynamics and no hardware in between.

<a id="ik-demo"></a>

## 26.8 Inverse Kinematics MeshCat Visualization Demo

[sim_ik.mov](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/videos/sim_ik.mov)

```Plain Text
uv run ./example/sim/ik_sim.py

#Open the arm model visualization web address as prompted in the terminal

#Enter position and orientation as prompted

0.25 0.0 0.25              # position only

0.25 0.0 0.25 0 0 0        # position + orientation

```

## 26.9 Walkthrough of the Inverse Kinematics Demo

1. **Input target** — the user gives the desired end-effector position (xyz) and orientation (roll/pitch/yaw); the program builds them into an SE3 pose object.

2. **Load model** — read the URDF from the config file, build the robot's kinematic model, and determine which frame the end-effector is on.

3. **Forward kinematics** — based on current joint angles, compute the end's actual SE3 pose in the world frame.

4. **Compute the gap** — use `log6` to logarithm-map the current SE3 and target SE3, getting a 6-dimensional error (how much rotation differs, how much translation differs).

5. **Infer the correction** — through the Jacobian, "translate" the end error into how much each joint should rotate; solve with damped least squares to prevent joint jumps.

6. **Loop to converge** — repeat steps 3->5, with line search each time to ensure the error decreases, until the error is below a threshold (~0.1 mm), at which point it is considered reached.

7. **Output result** — return the solved joint angles (radians), whether it converged, and the final error, for subsequent control.

```Python
User input: "0.25 0.0 0.15 0 0 0"
          +-- first 3 are target position (x,y,z) in meters, last 3 are target orientation (roll,pitch,yaw) in degrees
    |
    v
parse_pose_input()                                    ← parse user input
    +-- target_pos = np.array([0.25, 0.0, 0.15])       ← extract target position vector (m)
    +-- target_rot = pin.rpy.rpyToMatrix(              ← convert euler angles to 3x3 rotation matrix
                      np.radians([0, 0, 0]))          ← first convert degrees to radians
    |
    v
compute_ik(q_init=np.zeros(6), target_pos, target_rot, IKParams(max_iter=2000, damping=0.01))
              ^initial joint angles all zero  ^target pos  ^target rot  ^max iter 2000  ^damping 0.01 (conservative)
    |
    +-- model = load_robot_model()                     ← load robot kinematic model
    |    +-- read config/rebotarm.yaml                 ← global config file
    |       -> points to rebotarm_dm.yaml               ← hardware config file
    |       -> loads reBot-DevArm_fixend.urdf           ← URDF robot description
    |       -> pin.buildModelFromUrdf()                ← build Pinocchio model (6 revolute joints)
    |
    +-- frame_id = model.getFrameId("end_link")        ← get end-effector frame ID (from config)
    |
    +-- target = pin.SE3(target_rot, target_pos)       ← build target SE3 (rotation + translation)
    |
    +-- solve_ik(model, data, frame_id, target, q=[0,0,0,0,0,0])  ← core IK solver
         |
         |  iteration loop (max 2000):
         |    |
         |    +-- pin.forwardKinematics(model, data, q)            ← FK: compute all link poses from current q
         |    +-- pin.updateFramePlacements(model, data)           ← update end frame pose in world frame
         |    +-- T_cur = data.oMf["end_link"]                     ← get current end SE3
         |    +-- err = pin.log6(T_cur^-1 * target).vector        ← pose error: log map -> 6D twist [wx,wy,wz,vx,vy,vz]
         |    |                                                     (first 3 rotation error, last 3 translation error)
         |    +-- J = pin.getFrameJacobian(model, data, id, pin.LOCAL)  ← 6x6 Jacobian (body frame)
         |    |                                                     (linear relation between joint and end velocity)
         |    +-- lam = 0.01 * max(1.0, norm(err) * 10.0)         ← adaptive damping: large error -> more damping (stable), small error -> less (fast)
         |    +-- JJT = J*J^T + lam*I6                            ← build damped least-squares coefficient (Tikhonov)
         |    +-- dq = 0.5 * J^T * np.linalg.solve(JJT, err)       ← solve joint increment (damped least squares)
         |    |                                                     (0.5 is step scaling factor)
         |    |
         |    +-- backtracking line search (max 4):                 ← shrink step until error decreases
         |    |   +-- alpha = 1.0 -> 0.5 -> 0.25 -> 0.125           ← halve step factor each time
         |    |   +-- q_new = q + alpha*dq                           ← try updating joint angles
         |    |   +-- q_new = clamp(q_new, joint limits)             ← enforce physical joint limits
         |    |   +-- if norm(err_new) < norm(err): accept, exit line search  ← found a step that reduces error
         |    |
         |    +-- if norm(err) < 1e-4: converged, exit loop         ← error below 0.1 mm is success
         |
         +-- return IKResult:
              +-- q: [q1,q2,q3,q4,q5,q6]                            ← solved joint angles (radians)
              +-- success: True/False                                ← whether it converged
              +-- error: final error value (SE3 norm)               ← end pose error norm
              +-- iterations: iteration count                        ← actual number of iterations
    |
    v
print_result()                                                   ← print result
    +-- target pose (position xyz + euler rpy)                    ← show user-input target
    +-- convergence status (yes/no)                               ← whether solved successfully
    +-- iterations + position error                                ← convergence performance
    +-- each joint angle (degrees + radians)                      ← solved result per joint
```

<a id="traj-demo"></a>

## 26.10 Trajectory Planning MeshCat Visualization Demo

[sim_traj.mov](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/videos/sim_traj.mov)

```Plain Text
uv run python example/sim/traj_sim.py

#Open the arm model visualization web address as prompted in the terminal

#Enter position and orientation as prompted

0.25 0.0 0.25              # position only

0.25 0.0 0.25 0 0 0        # position + orientation

```

## 26.11 Walkthrough of the Trajectory Planning Demo

#### SE(3) Pose

**What it is**

SE(3) = **position + orientation**, the complete description of a 3D rigid body's "current state."

- `S` determinant = 1
- `E` preserves Euclidean distance
- `3` 3D space

**Analogy**

A car in a parking lot:

- **Position** = in parking spot P3
- **Orientation** = nose facing outward
- These two together are the car's current SE(3) pose

**Degrees of freedom**

- Position: 3 numbers (up/down, left/right, front/back)
- Orientation: 3 numbers (how it is rotated)
- Total **6 DOF**

**Matrix form (4x4 homogeneous matrix)**

```Plain Text
T = [ R  t ]
    [ 0  1 ]
```

- Top-left 3x3 = **R**, rotation matrix (orientation)
- Top-right 3x1 = **t**, translation vector (position)
- The bottom row [0 0 0 1] is a fixed placeholder

**Example: position changes -> `t` changes; orientation changes -> `R` changes.**

#### **Trajectory Generation**

**The sampler generates a dense SE(3) pose timeline**.

Work is in three layers:

1. **Geometry layer** — use `log6/exp6` on the SE(3) curved manifold to compute a geodesic (shortest path): rotation follows slerp (great circle), translation follows a straight line in the end local frame. Formula `T(s) = T_start * exp6(log6(T_start^-1 * T_end) * s)`, where `s in [0,1]` is the path fraction.

2. **Time layer** — choose a profile to determine `s(tau)` (`tau = t/duration`): LINEAR constant speed, MIN_JERK quintic polynomial (default, zero start/stop velocity and acceleration), TRAPEZOID trapezoidal acceleration/deceleration.

3. **Sampling layer** — at `dt=0.02s` (50 Hz) cut `n` frames at equal steps; each frame = `T(s(t))`, output `CartesianTrajectory`: `[(t=0, T_start), (t=0.02, T1), ..., (t=duration, T_end)]`.

**Core idea**: geometry (path) and time (pace) are decoupled; output is all SE(3), containing no joint information, left for CLIK to solve in reverse.

**Car at P3 (position 5,0,0), nose facing east (no rotation)**

```Plain Text
[ 1  0  0 | 5 ]
[ 0  1  0 | 0 ]
[ 0  0  1 | 0 ]
[---------+---]
[ 0  0  0 | 1 ]
```

**Car moved: P3 unchanged, nose now facing north (rotated 90 deg about z)**

```Plain Text
[ 0 -1  0 | 5 ]
[ 1  0  0 | 0 ]
[ 0  0  1 | 0 ]
[---------+---]
[ 0  0  0 | 1 ]
```

#### CLIK

Step 4: log6 error -> feedback signal

- Compute the distance between "where the end is" and "where the end should go" as a 6-dimensional twist
- These 6 dimensions are the error signal e in CLIK, equivalent to the deviation in a control system
- Euler angles are not subtracted directly to avoid the 360 deg wrap-around blowing up the error computation

Step 5: DLS Jacobian solve -> controller

- This is the "controller" role in CLIK
- Translates the end 6D error into how much each joint should move
- DLS = J^T(JJ^T + lam^2 I)^-1, equivalent to "minimize norm(J*dq - e)^2 + lam^2 norm(dq)^2"
- The lam^2 I damping term prevents dq from exploding when J approaches a singularity (the pseudoinverse tends to infinity at singularities)

Step 6: iteration + line search -> closed-loop structure

- This step gives "closed-loop" its name
- Each round recomputes FK -> recomputes error -> recomputes dq, forming a feedback loop
- Line search alpha ensures each update actually reduces the error, avoiding oscillation
- Same pattern as PID control: measure error -> compute control -> apply -> measure again

## 26.12 Inverse Kinematics Control for Smooth Real-Robot Trajectories (`8_arm_traj_control.py`)

Using inverse kinematics (IK) in MIT mode, within a target time it automatically plans a motion trajectory at constant speed or with smooth acceleration/deceleration, avoiding violent joint shaking.

**Input format**:

- Position only: `<x> <y> <z>` (meters)
- Position + orientation: `<x> <y> <z> <roll> <pitch> <yaw>` (degrees)
- Position + orientation + time (default 2.0): `<x> <y> <z> <roll> <pitch> <yaw> <time>` (degrees)
- Enter `state`: view the actual current radians of each joint.
- Enter `end_state`: view the end's actual coordinates (m) and euler angles (rad) in space.

**How to run**:

```Bash
uv run python example/8_arm_traj_control.py

*#Usage A*
> 0.3 0.0 0.4 *#position only, orientation defaults to 0, move time defaults to 2.0 s*

*#Usage B*
> 0.3 0.0 0.4 0.0 0.0 0.5 *#control position and orientation together: move to the target position while rotating the wrist yaw by 0.5 rad; move time defaults to 2.0 s*

*#Usage C*
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 *#move the arm to a specific position, taking 5.0 s to ease over there. (Note: if you input a time, the preceding orientation parameters 0 0 0 cannot be omitted)*

> ctrl + c *# exit the system*
```

## 26.13 Troubleshooting the Demos

| Symptom | Likely cause | What to do |
| :--- | :--- | :--- |
| `ModuleNotFoundError: pinocchio` | Environment not synced | Re-run `uv sync` inside `reBotArm_control_py` |
| MeshCat page opens but stays empty | Browser blocked the local websocket | Use the URL printed in the terminal, try another browser |
| `FileNotFoundError: ...urdf` | Wrong working directory | Run from the repository root, as shown in the commands |
| IK returns `success: False` | Target outside the workspace, or a singular pose | Move the target closer to the base, or increase damping |
| Joints clamp at a limit during IK | Target needs an unreachable orientation | Reduce the orientation demand, or change the initial guess `q_init` |

- **Pinocchio** turns the URDF into a kinematic model; FK, Jacobians and SE(3) helpers come from one library.
- **MeshCat** gives you a browser view of the same numbers the controller uses — invaluable for debugging.
- The three demos are the theory of Chapters 23–25 made executable: **FK (pose from angles)**, **IK (angles from pose, DLS + line search)**, **trajectory planning (geodesic + time profile + CLIK)**.
- On the real arm, `8_arm_traj_control.py` shows the same pipeline driving actual motors through IK in MIT mode.

## 26.14 Stage 5 in One Page

| Concept | One-line takeaway | Where it is used |
| :--- | :--- | :--- |
| Frame | Three axes + an origin; name it before you use a number | Everywhere |
| Homogeneous transform | 4x4 matrix = rotation + translation in one object | FK chain, hand-eye calibration |
| Euler vs quaternion | Intuitive vs singularity-free | Human input vs internal math |
| FK | Angles -> pose; unique and cheap | Visualization, verification, calibration |
| IK | Pose -> angles; multiple or no solutions | Grasping, welding, any "go there" task |
| Jacobian | Joint velocity &lt;-&gt; end velocity | IK solver, singularity monitoring |
| Singularity | Jacobian loses rank, joint velocity explodes | Detect (smallest singular value), damp (DLS) |
| Path vs trajectory | Shape vs timing | Plan the shape, then the pace |
| Interpolation | Linear jolts, cubic smooths velocity, quintic smooths acceleration | Transport vs welding/assembly |
| Feedforward + feedback | Model torque (incl. gravity) + error correction | Every servo loop on the arm |
| Pinocchio + MeshCat | Real kinematic model + live 3D view | Chapter 26 demos |

</div>
