---
description: "Chapter 38 of the Seeed Physical AI Beginner's Course — running the reBot Arm in Isaac Sim: installing and starting Isaac Sim, the scene structure, USD basics, importing the arm with the URDF Importer, checking links, joints, visuals and collisions, configuring the articulation root and joint drives, stiffness and damping, the gripper linkage, the ground and workbench, Python control, and four practice demos."
title: Chapter 38 - Running the reBot Arm in Isaac Sim
keywords:
  - reBot
  - Robotic Arm
  - Isaac Sim
  - USD
  - Articulation
  - Joint Drive
  - Gripper
  - Simulation
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_38
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/rebot_physical_ai_course_chapter_38/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 8 · Chapter 38 · Practice</span>
    <h2>38. Running the reBot Arm in Isaac Sim</h2>
    <p>
      Chapter 38 of the Seeed Physical AI Beginner's Course — running the reBot Arm in Isaac Sim: installing and starting Isaac Sim, the scene structure, USD basics, importing the arm with the URDF Importer, checking links, joints, visuals and collisions, configuring the articulation root and joint drives, stiffness and damping, the gripper linkage, the ground and workbench, Python control, and four practice demos.
    </p>
    <div className="hero-actions">
      <a href="#overview">Chapter overview</a>
      <a href="#usd">USD basics</a>
      <a href="#import">Import the arm</a>
      <a href="#demos">Practice demos</a>
    </div>
  </div>
</section>

This chapter explains the model import and basic control of the reBotArm-RS arm in NVIDIA Isaac Sim. Isaac Sim uses USD (Universal Scene Description) as its scene format, which differs fundamentally from MuJoCo's MJCF. Joint name mapping, gripper unit conversion, communication frequency, and safety design are covered in detail in Chapter 39 and will not be repeated here; this chapter focuses only on Isaac Sim-specific concepts and operations.

> Let users master the reBot Arm's model import, Articulation configuration, and basic joint control in Isaac Sim.
>
>

<a id="overview"></a>

## 38.1 Installing and Starting Isaac Sim

Isaac Sim is based on the NVIDIA Omniverse platform and requires an RTX GPU. There are two ways to run it:

1. **Desktop application**: download the Isaac Sim installer from the NVIDIA website and launch the GUI directly.
2. **Python scripts**: run headless in a terminal through the `isaaclab` or `isaacsim` Python packages.

After launch you enter the Isaac Sim interface: on the left is the Stage Tree, on the right is the Property panel,

and in the middle is the 3D viewport.

```bash
# Launch via a Python script (Isaac Sim 4.x+)
./python.sh my_script.py
```

Key point: Isaac Sim is essentially an Omn Kit application; all functionality is exposed through the Python API (`omni.isaac.*` / `isaacsim.*`), and GUI operations and script operations are equivalent.

## 38.2 Understanding the Isaac Sim Scene Structure

Isaac Sim's scene is rooted at the **Stage** (USD stage), and every object is a **Prim** (scene primitive).

Understanding three levels is enough:

```text
Stage (root)
  └── Prim (an object, e.g., arm, ground, workbench)
        └── child Prims (e.g., each link)
              └── Properties (e.g., joint, mesh, material)
```

Differences from MuJoCo:

|Concept|MuJoCo (MJCF)|Isaac Sim (USD)|
|---|---|---|
|Scene root|`<mujoco>`|Stage|
|Object|`<body>`|Prim|
|Joint|`<joint>`|Joint Prim (attached under a link)|
|Actuator|`<actuator>`|Joint Drive (USD property)|
|Collision|`<geom confluence>`|Collision API (attached to a mesh)|

MuJoCo defines actuators as independent elements; Isaac Sim attaches "drive" as a Drive property directly on the joint. This is the most fundamental architectural difference between the two engines.

<a id="usd"></a>

## 38.3 USD Model Basics

USD (Universal Scene Description) is a scene description format developed by Pixar; Isaac Sim uses it in place of URDF/MJCF.

### USD vs URDF

This repository already has the RS arm's URDF file:

Isaac Sim does not use URDF directly; instead it converts it to USD through the URDF Importer.

|Feature|URDF|USD|
|---|---|---|
|Format|XML|Binary/text|
|Layered overrides|Not supported|Supports Layer references and overrides|
|Collision/visual separation|`<visual>` / `<collision>` tags|Collision API / Mesh API|
|Joint drive|None (requires external controller)|Joint Drive property built in|
|Physics engine coupling|Not coupled|Can bind PhysX properties|

### Key USD concepts

- **Reference**: one USD file references another, similar to MuJoCo's `<include>`.
- **Override**: modify properties on top of a reference without changing the original file.
- **Payload**: a lazily loaded reference, used for large-scene optimization.
- **Variant**: different variants of the same model (e.g., "with gripper" and "without gripper").

Summary of the reBot Arm's structure (from URDF parsing):

```text
base_link
  └── joint1 (revolute, -2.8~2.8 rad) → link1
        └── joint2 (revolute, 0~3.14) → link2
              └── joint3 (revolute, 0~3.14) → link3
                    └── joint4 (revolute, -1.57~1.57) → link4
                          └── joint5 (revolute, -1.57~1.57) → link5
                                └── joint6 (revolute, -3.14~3.14) → link6
                                      └── j_gripper_end (fixed) → gripper_end
                                            ├── gripper_joint1 (prismatic, 0~0.05) → gripper_left
                                            └── gripper_joint2 (prismatic, 0~0.0715) → gripper_right
```

Six revolute joints plus one fixed joint connect the end-effector, and two prismatic joints drive the left and right gripper fingers.

<a id="import"></a>

## 38.4 Importing the reBot Arm USD

### URDF Importer

Isaac Sim has a built-in URDF Importer tool; the menu path is:

```text
Isaac Utils → Workflows → URDF Importer
```

Or use the Python API:

```python
from isaacsim.import_config.urdf import ImportConfig
from omni.importer.urdf import _urdf

import_config = ImportConfig()
import_config.merge_fixed_joints = False      # keep the fixed joint structure
import_config.make_default_prim = True
import_config.create_physics_scene = False     # do not recreate if a scene already exists
import_config.fix_base = True                 # fix the arm base
import_config.default_drive_type = _urdf.UrdfJointTargetType.JOINT_DRIVE_POSITION

_urdf.import_urdf(urdf_path, output_usd_path, import_config)
```

### Key choices when importing

1. **merge_fixed_joints**: set to False to keep the `j_gripper_end` fixed joint; otherwise

`gripper_end` is merged into `link6`. Keeping it is more intuitive; merging is more efficient.

2. **fix_base**: set to True to fix `base_link` to the world so the arm does not fall due to gravity.
3. **default_drive_type**: choose position drive (POSITION), so target angles can be sent directly after import.

### Mesh file paths

The STL meshes referenced by the URDF are in the [meshes_rs/](/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarm_bringup/description/meshes_rs/) directory. The importer automatically resolves the `package://rebotarm_bringup/description/meshes_rs/` prefix. If the import fails, check the `ROS_PACKAGE_PATH` environment variable or manually change the mesh paths to absolute paths.

## 38.5 Checking Links and Joints

After import, check the structure in the Stage Tree:

```text
/rebotarm_rs          ← root Prim
  /base_link
    /link1
      /link2
        ...
          /gripper_end
            /gripper_left
            /gripper_right
```

Principle: Isaac Sim converts the URDF's `<joint>` into USD Joint Prims. A revolute joint becomes a `PhysicsRevoluteJoint`, a prismatic joint becomes a `PhysicsPrismaticJoint`, and a fixed joint becomes a `PhysicsFixedJoint`. The joint's axis, limits, and other attributes are mapped directly onto USD properties.

## 38.6 Checking Visual and Collision

The URDF's `<visual>` and `<collision>` are annotated with different APIs in USD:

```python
from pxr import UsdPhysics

# check collision bodies
for prim in stage.Traverse():
    if prim.HasAPI(UsdPhysics.CollisionAPI):
        print("Collision:", prim.GetPath())

# check visual meshes
for prim in stage.Traverse():
    if prim.IsA(UsdGeom.Mesh):
        print("Mesh:", prim.GetPath())
```

Principle: Isaac Sim does not mark pure-visual bodies with `<geom contype="0" conaffinity="0">` like MuJoCo. In USD, every mesh is renderable by default; only meshes with a `CollisionAPI` participate in physics collision. This means the same mesh can be both visual and collision, or purely visual.

## 38.7 Configuring the Articulation Root

This is the most important concept in Isaac Sim, with no direct counterpart in MuJoCo.

### What is an Articulation Root

The Articulation Root tells PhysX: "these joints and links form an articulated system; solve it uniformly with the Featherstone

algorithm, rather than treating them as independent rigid bodies connected by constraints."

```text
Without an Articulation Root:
  base_link ←constraint→ link1 ←constraint→ link2 ...
  each parent-child link pair is a separate constraint solver; with many joints this becomes unstable.

With an Articulation Root:
  [Articulation Root] → base_link → link1 → link2 → ...
  the whole kinematic chain is solved in one pass with the Featherstone algorithm, numerically stable.
```

### How to configure it

Add the `PhysicsArticulationRootAPI` on `base_link`:

```python
from pxr import UsdPhysics

base_link = stage.GetPrimAtPath("/rebotarm_rs/base_link")
UsdPhysics.ArticulationRootAPI.Apply(base_link)
```

Principle: the Articulation Root must be placed on the root link of the kinematic chain. For the reBot Arm that is *`base_link`*. If placed on the wrong link, PhysX truncates the chain and downstream joints lose their drive. The URDF Importer usually adds the Articulation Root automatically, but if you edit the USD manually, check that it is still there.

## 38.8 Configuring Joint Drives

### Drive principle

MuJoCo uses *`<motor>`* or *`<position>`* actuators, with drive torques computed externally in Python. Isaac Sim's Drive is a **PD controller built into the joint**; the torque is computed inside PhysX:

```bash
tau = kp * (target_pos - current_pos) + kv * (target_vel - current_vel) + feedforward
#This is almost the same PD control formula as MuJoCo's physics mode; the difference is that Isaac Sim puts the PD loop inside the engine, while MuJoCo computes it in Python and writes it into `data.ctrl`.
```

### How to configure it

```python
from pxr import UsdPhysics

joint_path = "/rebotarm_rs/base_link/link1/joint1"
joint = UsdPhysics.Joint.Get(stage, joint_path)

drive = UsdPhysics.DriveAPI.Get(joint, "angular")  # revolute joints use angular, prismatic use linear
drive.GetTargetPositionsAttr().Set([0.0])    # target angle
drive.GetTargetVelocitiesAttr().Set([0.0])  # target velocity
drive.GetStiffnessAttr().Set(80.0)          # kp
drive.GetDampingAttr().Set(5.0)             # kv
drive.GetMaxForceAttr().Set(36.0)           # torque limit
```

### Correspondence with the real-robot gains

Isaac Sim Drive's `Stiffness` and `Damping` correspond to the real arm's MIT-mode `kp` and `kd`.

You can directly use the real-robot configuration values (see [rebotarm_hardware.yaml]/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarm_bringup/config/rebotarm_hardware.yaml)):

```yaml
# Real-robot RS MIT gains
mit_kp: [80.0, 150.0, 150.0, 50.0, 50.0, 50.0]
mit_kd: [5.0, 10.0, 10.0, 5.0, 4.0, 4.0]
```

Fill these values into each joint's Drive properties, and the simulation behavior will be close to the real robot.

## 38.9 Setting Joint Stiffness and Damping

Tuning principles for stiffness and damping:

1. **Stiffness too low**: the joint is soft, reaches the target angle slowly, and sags visibly under load.
2. **Stiffness too high**: the joint is too hard, may oscillate, and PhysX becomes numerically unstable.
3. **Damping too low**: oscillates after reaching the target, with obvious overshoot.
4. **Damping too high**: motion is sluggish, like moving in syrup.

Recommended starting values (corresponding to the real robot):

|Joint|Stiffness (kp)|Damping (kd)|Max Force|
|---|---|---|---|
|joint1|80|5|36|
|joint2|150|10|36|
|joint3|150|10|36|
|joint4|50|5|14|
|joint5|50|4|14|
|joint6|50|4|14|

Tuning strategy: start with low values to make sure there is no oscillation, then gradually increase stiffness until the response is fast enough, then increase damping to eliminate residual oscillation. Do not start with high values.

## 38.10 Configuring the Gripper Linkage

### The Isaac Sim way

Isaac Sim has no equality constraint; it uses **Mimic Joint** for linkage. The URDF's `<mimic>` tag is converted during import:

```python
# The mimic in URDF (if the URDF does not have it, you need to add it manually in USD)
# <mimic joint="gripper_joint1" multiplier="1.43" offset="0"/>
```

The current RS URDF has no `<mimic>` tag, so the linkage needs to be configured manually after import. Two methods:

**Method 1: PhysX Mimic Joint API**

```python
from pxr import UsdPhysics

left_joint = UsdPhysics.Joint.Get(stage, ".../gripper_joint1")
UsdPhysics.MimicAPI.Apply(left_joint)
mimic = UsdPhysics.MimicAPI(left_joint)
mimic.GetReferenceJointRel().SetTargetPath(".../gripper_joint2")
mimic.GetMultiplierAttr().Set(1.43)  # 0.0715 / 0.05 = 1.43
```

**Method 2: send commands synchronously in Python control**

If you do not use the Mimic API, simply send the same target to both gripper joints in the control code:

```python
# The left and right gripper strokes differ: left 0-0.05m, right 0-0.0715m
# When sending commands, scale by each stroke ratio
left_target = target_ratio * 0.05
right_target = target_ratio * 0.0715
```

Principle: MuJoCo's equality is a hard constraint at the physics-engine level, Isaac Sim's Mimic API is also an engine-level linkage, while Method 2 is a software linkage at the control level. Method 1 is more stable; Method 2 is more flexible.

## 38.11 Adding the Ground and Workbench

### Ground

Isaac Sim has a built-in ground generation tool:

```python
from isaacsim.core.api import World

world = World(stage_units_in_meters=1.0)
world.scene.add_default_ground_plane()  # add a Z=0 ground collision plane
```

`add_default_ground_plane()` creates a plane Prim with a CollisionAPI; the default friction coefficient is

0.5. In MuJoCo the ground is `<geom type="plane"/>`; in Isaac Sim it is a plane mesh with collision.

### Workbench

Add a Box as the workbench:

```python
from isaacsim.core.api.objects import DynamicCuboid

table = DynamicCuboid(
    prim_path="/World/table",
    name="table",
    position=np.array([0.5, 0.0, 0.4]),  # table top height 0.4m
    scale=np.array([0.6, 0.6, 0.02]),     # 60cm x 60cm x 2cm
    color=np.array([0.5, 0.4, 0.3]),
)
```

### A simple task object

```python
red_cube = DynamicCuboid(
    prim_path="/World/red_cube",
    name="red_cube",
    position=np.array([0.5, 0.0, 0.42]),
    scale=np.array([0.03, 0.03, 0.03]),   # 3cm cube
    color=np.array([1.0, 0.0, 0.0]),
)
```

Principle: Isaac Sim attaches collision and dynamics properties directly to object Prims. `DynamicCuboid` automatically creates a collision body and a rigid-body API; `FixedCuboid` only creates a collision body without a rigid body. This is more concise than MuJoCo, where you have to write `<geom contype>` and `<body>` separately in XML.

## 38.12 Controlling the Arm with Python

### Articulation API

Isaac Sim wraps the whole arm's control interface with the `Articulation` class, so you do not need to operate joint by joint:

```python
from isaacsim.core.api import World
from isaacsim.core.primitives import Articulation

world = World()
world.scene.add_default_ground_plane()

robot = Articulation(prim_path="/rebotarm_rs")
world.reset()

# get joint information
num_joints = robot.num_joints
joint_names = robot.get_dof_names()
```

Principle: `Articulation` internally calls PhysX's Articulation API to get/set all joint states in one go. It corresponds to MuJoCo's way of operating joints through the `data.qpos` and `data.ctrl` arrays, but wraps it in a Python object interface.

<a id="demos"></a>

## 38.13 Practice Demos

### Demo 1: Loading the reBot Arm USD

**Principle**: when Isaac Sim loads a USD file, it builds the Stage tree, and PhysX creates an articulated body for the Prim subtree with an Articulation Root. Visual meshes are linked to the rendering layer; meshes with a CollisionAPI are linked to the physics layer.

```python
from isaacsim.core.api import World
from isaacsim.core.primitives import Articulation
import numpy as np

world = World(stage_units_in_meters=1.0)
world.scene.add_default_ground_plane()       # ground

# add the workbench
from isaacsim.core.api.objects import FixedCuboid
table = FixedCuboid(
    prim_path="/World/table", name="table",
    position=np.array([0.5, 0.0, 0.4]),
    scale=np.array([0.6, 0.6, 0.02]),
)

# add the task object
from isaacsim.core.api.objects import DynamicCuboid
cube = DynamicCuboid(
    prim_path="/World/red_cube", name="red_cube",
    position=np.array([0.5, 0.0, 0.42]),
    scale=np.array([0.03, 0.03, 0.03]),
    color=np.array([1.0, 0.0, 0.0]),
)

# load the arm (assuming the USD has been imported)
robot = Articulation(prim_path="/rebotarm_rs")
world.reset()

# verify the loading result
print("Number of joints:", robot.num_joints)
print("Joint names:", robot.get_dof_names())
```

**Expected result**: the 3D viewport shows the arm model standing on the ground workbench, with the red cube on the table. The Stage Tree shows the complete hierarchy from base_link to gripper_right.

### Demo 2: Reading Joint States

**Principle**: `Articulation` reads the articulated body's joint state arrays from PhysX every frame. Position and velocity are outputs of PhysX's internal solver, not read from external sensors—just like MuJoCo's `data.qpos` / `data.qvel`, they are simulation states.

```python
world.step(render=True)  # first advance one physics frame

# joint positions (radians)
positions = robot.get_joint_positions()
print("Joint positions:", positions)

# joint velocities
velocities = robot.get_joint_velocities()
print("Joint velocities:", velocities)

# joint names and count
joint_names = robot.get_dof_names()
print("Joint names:", joint_names)
print("Number of joints:", robot.num_joints)

# end-effector pose (world frame)
ee_position, ee_orientation = robot.get_local_pose()  # end link pose
```

**Principle note**: `get_joint_positions()` returns a NumPy array whose order matches `get_dof_names()`. The Articulation Root determines which joints belong to this articulated body; joints outside the articulated body cannot be read.

### Demo 3: Joint Position Control

**Principle**: after setting the Drive's target position, the PD controller inside PhysX computes the torque every frame and drives the joint. You only need to send the target once; the engine completes the arrival process itself. This differs from MuJoCo's physics mode, where Python computes PD torques every frame and writes them into `data.ctrl`—Isaac Sim puts the PD loop inside the engine.

```python
# target pose (radians): zero all joints
target_positions = np.array([0.0, 0.0, 0.0, 0.0, 0.0, 0.0])

# Method 1: set the target through the Drive API
robot.set_joint_position_targets(target_positions)

# advance the simulation and let the PD controller drive to the target
for _ in range(100):
    world.step(render=True)

# check whether it has arrived
current = robot.get_joint_positions()
error = np.abs(current[:6] - target_positions)
print("Arrival error:", error)
```

You can also send a non-zero target to move the arm to a specified pose:

```python
wave_pose = np.array([0.0, 0.5, 1.0, 0.0, 0.5, 0.0])  # raise the arm and wave
robot.set_joint_position_targets(wave_pose)
for _ in range(200):
    world.step(render=True)
```

**Principle note**: `set_joint_position_targets` only updates the Drive's target position property; it does not

apply force directly. The actual torque is determined by `Stiffness` and `Damping`, and the arrival speed depends on these two parameters and

`Max Force`.

### Demo 4: Gripper Control

**Principle**: the gripper's two prismatic joints (gripper_joint1 and gripper_joint2) have different strokes (0.05 m and 0.0715 m) but must move in sync. The principle is to map the same open/close ratio to the target positions of both joints simultaneously.

```python
GRIPPER_LEFT_RANGE = 0.05      # gripper_joint1 stroke
GRIPPER_RIGHT_RANGE = 0.0715   # gripper_joint2 stroke

def set_gripper(robot, open_ratio: float):
    """open_ratio: 0=fully closed, 1=fully open"""
    open_ratio = max(0.0, min(1.0, open_ratio))
    left_target = open_ratio * GRIPPER_LEFT_RANGE
    right_target = open_ratio * GRIPPER_RIGHT_RANGE

    # assume the gripper joints come after the arm joints
    joint_names = robot.get_dof_names()
    arm_joints = 6  # the first 6 are arm joints

    positions = robot.get_joint_positions()
    positions[arm_joints]     = left_target    # gripper_joint1
    positions[arm_joints + 1] = right_target   # gripper_joint2
    robot.set_joint_position_targets(positions)

    for _ in range(50):
        world.step(render=True)

# open the gripper
set_gripper(robot, 1.0)

# close the gripper
set_gripper(robot, 0.0)

# half open
set_gripper(robot, 0.5)
```

**Principle note**: here software linkage at the control level replaces the physics constraint. If the Mimic API is configured (Method 1 in 38.10), you only need to control one joint and the other follows automatically. The current example uses software synchronization, which is more intuitive and suitable for teaching.

**Key points of two-finger synchronization**

The left and right gripper strokes differ but the motion directions are the same (both open outward), so use the same `open_ratio` to scale

each stroke limit. If the two joints' axis directions were opposite (one positive and one negative), you would also need to negate,

but in the reBot Arm's URDF, both gripper joints have axis `0 0 1`, so the directions are consistent.

## 38.14 Summary

The core conceptual differences between Isaac Sim and MuJoCo:

1. **Model format**: USD replaces MJCF, supporting layered references and overrides.
2. **Articulated body**: the Articulation Root is an Isaac Sim-specific concept, handing the whole kinematic chain to the Featherstone algorithm for uniform solving. MuJoCo has no such concept; all bodies naturally live in one tree.
3. **Drive method**: Drive is a PD controller built into the joint, computing torque inside PhysX. MuJoCo's `<motor>` actuator computes torque externally in Python and writes it into `data.ctrl`.
4. **Gripper linkage**: Isaac Sim uses the Mimic API or software synchronization; MuJoCo uses the equality constraint.
5. **Collision annotation**: USD uses the CollisionAPI to distinguish collision bodies from pure-visual bodies; MuJoCo uses the `contype` / `conaffinity` attributes.

Once you master these differences, the content on joint mapping, unit conversion, communication, and safety design in Chapter 39 can be directly applied to the Isaac Sim scene.

---

</div>
