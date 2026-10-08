---
description: "Chapter 23 of the Seeed Physical AI Beginner's Course — coordinate frames and homogeneous transforms: world, base, joint, end-effector and camera frames, vectors and matrices, translation and rotation matrices, chaining transforms, and Euler angles versus quaternions."
title: Chapter 23 - Robot Arm Mathematical Foundations and Coordinate Systems
keywords:
  - reBot
  - Robotic Arm
  - Coordinate Frame
  - Homogeneous Transform
  - Euler Angles
  - Quaternion
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_23
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-25
  author: Seeed Studio Robotics Team
createdAt: '2026-09-25'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/rebot_physical_ai_course_chapter_23/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 5 · Chapter 23 · Theory</span>
    <h2>23. Robot Arm Mathematical Foundations and Coordinate Systems</h2>
    <p>
      Chapter 23 of the Seeed Physical AI Beginner's Course — coordinate frames and homogeneous transforms: world, base, joint, end-effector and camera frames, vectors and matrices, translation and rotation matrices, chaining transforms, and Euler angles versus quaternions.
    </p>
    <div className="hero-actions">
      <a href="#objectives">Learning objectives</a>
      <a href="#frames">Coordinate frames</a>
      <a href="#transforms">Homogeneous transforms</a>
    </div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>Where this stage sits in the course</h2>
  </div>

  The content introduced in these chapters belongs to **traditional control**, i.e. controlling the robot arm through hard-coded programming. Traditional control is used in the vast majority of deployed projects. Its advantage is stability and reliability, which is especially valuable in industrial production scenarios. Its drawback is that in a new environment it requires re-tuning before it can run stably.

  | Chapter | Title | Type | Focus |
  | :--- | :--- | :--- | :--- |
  | **23** | Robot Arm Mathematical Foundations and Coordinate Systems | Theory | Frames, vectors, homogeneous transforms, rotation representations |
  | **24** | Forward Kinematics, Inverse Kinematics, and the Jacobian | Theory | How joint angles and end-effector pose are connected |
  | **25** | Trajectory Planning and Robot Arm Control | Theory | Path vs trajectory, interpolation, feedforward + feedback |
  | **26** | Pinocchio and MeshCat | Practice | Run FK / IK / trajectory planning on the real reBot Arm model |

  :::tip
  Chapters 23–25 are reference material: in real projects the URDF and the kinematics library do the
  matrix work for you. Read them once to understand *what the numbers mean*, then keep them as a
  look-up reference while you work through Chapter 26.
  :::

  **Why stage 5 comes after stage 4.** Stage 3 and stage 4 taught the arm to imitate and to follow
  language. Those systems are learned: they see the world and act on it, but they do not *guarantee*
  anything. The moment you need a straight weld seam, a repeatable grasp or a safe emergency stop,
  you need the deterministic layer underneath — the mathematics and motion control in this stage.
  The picture above is the contrast in one image: a VLM describes the world, a VLA acts on it, and
  everything you learn here decides *how* the action is actually executed.

  | Aspect | VLM (Vision-Language Model) | VLA (Vision-Language-Action Model) |
  | :--- | :--- | :--- |
  | Input | Image + question | Image + task instruction (+ robot state) |
  | Output | A text description | A sequence of robot actions |
  | Purpose | Understand and describe | Understand and act |
  | Typical models | LLaVA, Qwen-VL | GR00T, pi0 |
  | Used in | Perception, annotation, debugging | Real-robot control (Stage 4) |
</section>

<a id="objectives"></a>

## 23.1 Learning Objectives

After this chapter you should be able to:

1. Explain what a coordinate frame is and why a robot arm needs several of them.
2. Name the world frame, base frame, joint-space frame, end-effector/tool frame and camera frame, and say what each one is attached to.
3. Write a translation and a rotation as a 4x4 homogeneous transform matrix, and multiply two of them by hand.
4. Explain why homogeneous coordinates exist, and what "non-homogeneous" notation loses.
5. Say when to use Euler angles and when to use quaternions.

## 23.2 Vector and Matrix Basics

Forward and inverse kinematics (covered in the next chapter) involve a large number of vectors and matrices, so building a solid matrix foundation is important. In actual control we do not need to participate in low-level computations ourselves, so this chapter is provided for reference only.

- A **vector** describes a quantity with direction and magnitude: a position, a velocity, a force.
- A **matrix** describes a linear mapping: how a vector in one frame becomes a vector in another frame.
- The three objects used everywhere in robotics are the **3x1 position vector** $\mathbf{p}$, the **3x3 rotation matrix** $R$, and the **4x4 homogeneous transform** $T$.

A useful sanity check for any rotation matrix $R$:

$$
\begin{aligned}
R^\top R &= I && \text{(orthonormal)} \\
\det(R) &= +1 && \text{(a proper rotation, no mirroring)}
\end{aligned}
$$

<details>
<summary><strong>Worked micro-example: reading a 4x4 transform</strong></summary>

$$
T =
\begin{pmatrix}
0 & 0 & 1 & 0.30 \\
0 & 1 & 0 & 0.05 \\
-1 & 0 & 0 & 0.42 \\
0 & 0 & 0 & 1
\end{pmatrix},
\qquad
R =
\begin{pmatrix}
0 & 0 & 1 \\
0 & 1 & 0 \\
-1 & 0 & 0
\end{pmatrix},
\qquad
\mathbf{t} =
\begin{pmatrix}
0.30 \\ 0.05 \\ 0.42
\end{pmatrix}
$$

Read the columns of $R$ as the axes of the child frame expressed in the parent frame:

- child x = $[0,\ 0,\ -1]^\top$ -> points down in the parent frame
- child y = $[0,\ 1,\ 0]^\top$ -> same as the parent y
- child z = $[1,\ 0,\ 0]^\top$ -> points along the parent x

and read $\mathbf{t}$ as where the child frame's origin sits. That is all a transform is.

</details>

<a id="frames"></a>

## 23.3 World Frame and Base Frame

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-01.png" alt="World frame versus base frame" />
</div>

The world frame can be understood as the coordinate frame of the environment in which the robot arm sits; the base frame is established at the robot's base. In the reBot arm design, because the robot base is fixed, the world frame and base frame coincide.

For example: the arm is placed on a table, with the center of the arm base as the origin, the tabletop as the xy plane, and the vertical direction of the table legs as the z axis; the world frame follows the right-hand rule. The base frame also coincides with the world frame. (Commonly used Cartesian frame.)

<div className="image-frame">
  <img width={500} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-02.png" alt="Right-hand rule, RGB = XYZ" />
</div>

**XYZ three-axis color convention in robotics/vision (RGB = XYZ)**

| Axis | Color | Common name |
| :--- | :--- | :--- |
| **X** | 🔴 Red | Red |
| **Y** | 🟢 Green | Green |
| **Z** | 🔵 Blue | Blue |

:::note
Right-hand rule: point `+X` along the index finger and `+Y` along the middle finger; the thumb gives
`+Z`. Rotations about `+X`, `+Y`, `+Z` are positive counter-clockwise when looking back along the
axis towards the origin. Every robotics tool (RViz, MeshCat, SolidWorks, URDF) uses this same
convention, which is why the RGB = XYZ color mapping is worth memorizing.
:::

## 23.4 Joint Space Frame and End-Effector Frame

The joint space frame is the most commonly used frame in robot control. It is established on the robot's joints; the number of dimensions equals the number of joints the robot has.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-03.png" alt="Joint space frame" />
</div>

The reBot B601 has six rotary joints plus a gripper, so its joint-space frame is 6-dimensional (7-dimensional if the gripper is carried as an extra axis).

**End-effector frame**

- Origin: tool center point (TCP)

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-04.png" alt="End-effector / TCP frame" />
</div>

The end-effector frame is established at the robot's end; there is also a tool frame. When we need the end to reach a certain position, we care about the end-effector coordinate; if a gripper is mounted at the end, we care about the gripper coordinate.

| Frame | Attached to | Origin | Typical use |
| :--- | :--- | :--- | :--- |
| World $\{world\}$ | The environment | A fixed point on the table / cell | Task-level coordinates, camera work |
| Base $\{base\}$ | The robot base | Base center | Root of the kinematic chain |
| Joint $\{j_i\}$ | Joint $i$ | Joint $i$ axis | FK / IK internal computation |
| Flange | Last joint output | Flange center | Where a tool is mounted |
| Tool / TCP | The tool itself | Tool center point | Path planning, grasping points |

In one sentence: the world frame is the frame humans most intuitively understand, while the robot relies on the joint space frame to change the position of the end gripper. So we set targets using world coordinates, and use the joint space frame to make the robot move as we intend. The connection between them is coordinate transformation.

## 23.5 Camera Frame

The camera frame and the end-effector frame are usually obtained through a translation transform.

- Origin: camera optical center
- Convention: z axis forward along the optical axis, x to the right, y down (OpenCV convention; some OpenGL/ROS tools use y up)

| Convention | x | y | z | Right-handed |
| :--- | :--- | :--- | :--- | :--- |
| **OpenCV / vision** | right | **down** | forward (into the scene) | yes |
| OpenGL / some ROS tools | right | up | backward | yes |
| ROS `camera_optical_frame` | right | down | forward | yes |

:::warning
Never mix the two conventions silently. A "y down" camera and a "y up" camera differ by a 180 deg
rotation about x, and a hand-eye calibration computed with one convention will send the gripper to
the wrong side of the object when used with the other.
:::

Where the camera frame appears in a visual grasping pipeline:

$$
\begin{aligned}
\text{pixel } (u, v) &\ \xrightarrow{\ \text{intrinsics } K\ } \text{camera frame} \\
&\ \xrightarrow{\ \text{hand-eye } T_{\text{cam}\to\text{tcp}}\ } \text{end-effector frame} \\
&\ \xrightarrow{\ \text{FK}\ } \text{base frame} \\
&\ \xrightarrow{\ \text{IK}\ } \text{joint angles}
\end{aligned}
$$

<a id="transforms"></a>

## 23.6 Matrix Representation of Coordinate Transformations

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23.jpg" alt="Elementary frame rotations i, j, k" />
</div>

**Homogeneous** representation unifies "linear transform + translation" into a single matrix multiplication.

Under **non-homogeneous** representation, translation is an addition outside the matrix and cannot be combined with rotation into a single matrix.

**General homogeneous transform**

$$
T =
\begin{pmatrix}
R & \mathbf{t} \\
\mathbf{0}^\top & 1
\end{pmatrix},
\qquad
R:\ 3\times3 \text{ rotation (orientation)},
\qquad
\mathbf{t}:\ 3\times1 \text{ translation (position)}
$$

**Translation transform**

$$
\mathbf{p}' = \mathbf{p} + \mathbf{t}
\qquad
\mathbf{T} =
\begin{pmatrix}
1 & 0 & 0 & t_x \\
0 & 1 & 0 & t_y \\
0 & 0 & 1 & t_z \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

Written out in full, non-homogeneous on the left and homogeneous on the right:

$$
\begin{pmatrix}
x' \\ y' \\ z'
\end{pmatrix}
=
\begin{pmatrix}
x \\ y \\ z
\end{pmatrix}
+
\begin{pmatrix}
t_x \\ t_y \\ t_z
\end{pmatrix}
=
\begin{pmatrix}
x + t_x \\ y + t_y \\ z + t_z
\end{pmatrix}
\qquad\Longleftrightarrow\qquad
\begin{pmatrix}
x' \\ y' \\ z' \\ 1
\end{pmatrix}
=
\begin{pmatrix}
1 & 0 & 0 & t_x \\
0 & 1 & 0 & t_y \\
0 & 0 & 1 & t_z \\
0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
x \\ y \\ z \\ 1
\end{pmatrix}
=
\begin{pmatrix}
x + t_x \\ y + t_y \\ z + t_z \\ 1
\end{pmatrix}
$$

**Rotation transform**

The three elementary rotation matrices. Writing $c = \cos\theta$ and $s = \sin\theta$ keeps the
matrices readable; expand them by substituting back when you work them out by hand.

$$
R_x(\theta) =
\begin{pmatrix}
1 & 0 & 0 \\
0 & c & -s \\
0 & s &  c
\end{pmatrix}
\qquad
R_y(\theta) =
\begin{pmatrix}
 c & 0 & s \\
 0 & 1 & 0 \\
-s & 0 & c
\end{pmatrix}
\qquad
R_z(\theta) =
\begin{pmatrix}
c & -s & 0 \\
s &  c & 0 \\
0 &  0 & 1
\end{pmatrix}
$$

The homogeneous version of each rotation keeps the same 3x3 block with a zero translation column,
so a rotation matrix $R$ becomes

$$
\begin{pmatrix}
R & \mathbf{0} \\
\mathbf{0}^\top & 1
\end{pmatrix}
\qquad\text{e.g.}\qquad
R_z(\theta) =
\begin{pmatrix}
c & -s & 0 & 0 \\
s &  c & 0 & 0 \\
0 &  0 & 1 & 0 \\
0 &  0 & 0 & 1
\end{pmatrix}
$$

| Axis | Non-homogeneous | Homogeneous |
| :--- | :--- | :--- |
| X axis | $R_x(\theta)$ | $\begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & c & -s & 0 \\ 0 & s & c & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$ |
| Y axis | $R_y(\theta)$ | $\begin{pmatrix} c & 0 & s & 0 \\ 0 & 1 & 0 & 0 \\ -s & 0 & c & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$ |
| Z axis | $R_z(\theta)$ | $\begin{pmatrix} c & -s & 0 & 0 \\ s & c & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$ |

:::note
**Why the bottom row is $[0\ 0\ 0\ 1]$.** It carries no physical meaning; it exists so that the matrix
product of two transforms is again a transform, and so that a *point* $(x, y, z, 1)$ and a
*direction* $(x, y, z, 0)$ can be transformed by the same matrix — the direction ignores the
translation, the point does not.
:::

**Composing transforms** — chaining is just matrix multiplication, and the inverse is cheap:

$$
\begin{aligned}
T_a^c &= T_a^b \, T_b^c && \text{composition (chain rule)} \\
\left( T_a^b \right)^{-1} = T_b^a &=
\begin{pmatrix}
R^\top & -R^\top \mathbf{t} \\
\mathbf{0}^\top & 1
\end{pmatrix}
&& (R^\top \text{ instead of a } 3\times3 \text{ inversion})
\end{aligned}
$$

## 23.7 Euler Angles and Quaternions

<div className="image-frame">
  <img width={400} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-06.png" alt="Roll, pitch, yaw" />
</div>

**Euler angles vs. quaternions**

- Euler angles: 3 numbers, intuitive, have gimbal lock
- Quaternions: 4 numbers (1 constraint), not intuitive, no gimbal lock

| Aspect | Euler angles (roll/pitch/yaw) | Quaternion |
| :--- | :--- | :--- |
| Numbers | 3 | 4, with the constraint $w^2+x^2+y^2+z^2 = 1$ |
| Intuitive | Yes, easy to read and log | No |
| Singularity | Gimbal lock when the middle angle reaches +/-90 deg | None |
| Interpolation | Poor (jumps, multi-valued) | Good (slerp) |
| Convention risk | 24 different conventions (order, intrinsic/extrinsic) | Single convention (sign ambiguity only) |
| Typical use | Human input, config files, logs | Internal computation, ROS messages, state estimation |

In engineering: **use Euler angles for humans, quaternions for the machine**.

:::tip
On the reBot Arm this shows up concretely: MeshCat and Pinocchio think in rotation matrices and
SE(3) objects, while you type roll/pitch/yaw in degrees at the terminal. The demos in Chapter 26
convert between the two for you (`rpyToMatrix`, `matrixToRpy`).
:::

- A **frame** is three axes plus an origin; the arm needs at least world, base, joint, tool and camera frames.
- $\{world\} = \{base\}$ on the reBot Arm because the base is bolted down.
- A **homogeneous transform** packs rotation and translation into one 4x4 matrix; chaining is multiplication.
- **Euler angles** for humans, **quaternions** for the machine.
- Next chapter: use these transforms to compute the end-effector pose from joint angles — and back again.

</div>
