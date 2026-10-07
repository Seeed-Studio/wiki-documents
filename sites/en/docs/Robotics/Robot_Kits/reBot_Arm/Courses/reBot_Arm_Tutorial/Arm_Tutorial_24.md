---
description: "Chapter 24 of the Seeed Physical AI Beginner's Course — joint space versus Cartesian space, forward kinematics from DH parameters and URDF, inverse kinematics and its multiple or missing solutions, the Jacobian and velocity kinematics, singularities and damped least squares, and analytic versus numerical IK."
title: Chapter 24 - Forward Kinematics, Inverse Kinematics, and the Jacobian
keywords:
  - reBot
  - Robotic Arm
  - Forward Kinematics
  - Inverse Kinematics
  - Jacobian
  - Singularity
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_24
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-25
  author: Seeed Studio Robotics Team
createdAt: '2026-09-25'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/rebot_physical_ai_course_chapter_24/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 5 · Chapter 24 · Theory</span>
    <h2>24. Forward Kinematics, Inverse Kinematics, and the Jacobian</h2>
    <p>
      Chapter 24 of the Seeed Physical AI Beginner's Course — joint space versus Cartesian space, forward kinematics from DH parameters and URDF, inverse kinematics and its multiple or missing solutions, the Jacobian and velocity kinematics, singularities and damped least squares, and analytic versus numerical IK.
    </p>
    <div className="hero-actions">
      <a href="#joint-cartesian">Joint vs Cartesian</a>
      <a href="#fk">Forward kinematics</a>
      <a href="#ik">Inverse kinematics</a>
      <a href="#jacobian">Jacobian</a>
    </div>
  </div>
</section>

## 24.1 Main Topics

- Joint space vs. Cartesian space
- Forward kinematics (FK)
- Inverse kinematics (IK)
- Multiple solutions, no solution, and workspace
- Joint limits
- Jacobian matrix
- Velocity kinematics
- Singularities
- Numerical IK and closed-loop IK

## 24.2 Learning Objectives

Explain how the arm computes the end-effector pose from joint angles, and how to solve for joint angles given a target pose.

<a id="joint-cartesian"></a>

## 24.3 Joint Space vs. Cartesian Space

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-01.png" alt="Joint space versus Cartesian space" />
</div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-02.png" alt="Joint space versus Cartesian space, full overview" />
</div>

||Joint Space|Cartesian Space|
|:---|:---|:---|
|Description|Joint angles $(q_1, q_2, ..., q_n)$|End-effector pose $(x, y, z, rx, ry, rz)$|
|Dimension|n (number of joints)|6 (3 position + 3 orientation)|
|Physical meaning|How the motors turn|Where the end is and which way it faces|
|Motion path|Constant joint velocity -> irregular end-effector curve|Straight/arc end path -> nonlinear joint motion|
|Control difficulty|Direct (send to motors)|Indirect (must solve IK for joint angles first, then send to motors)|
|Typical uses|Free motion, obstacle avoidance, homing|Grasping, welding, painting, path following|

**Example 1: writing robot**

|Task|Which space|
|:---|:---|
|Turn motor 1 by 30 deg, motor 2 by 45 deg|Joint space (send angles directly)|
|Make the pen tip trace the strokes of a character in straight lines|Cartesian space (compute joint angles for each point)|

**Example 2: picking up a cup (ignoring the path)**

|Stage|Which space|
|:---|:---|
|Move from home to near the cup|Joint space (simple, constant speed, safe)|
|Final few centimeters to precisely align with the cup rim|Cartesian space (must approach in XYZ)|
|Lift and place on the shelf|Joint space (no straight-line requirement)|

**Example 3: welding a car**

|Task|Which space|
|:---|:---|
|Welding torch follows the seam in a straight line|Cartesian space (straight line = weld seam)|
|Lift the torch and move to the next spot|Joint space (fast is what matters)|

## 24.4 Forward vs. Inverse Kinematics

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-03.png" alt="FK versus IK" />
</div>

||Forward Kinematics (FK)|Inverse Kinematics (IK)|
|:---|:---|:---|
|Known|Joint angles|End-effector pose|
|Solve for|End-effector pose|Joint angles|
|Direction|Joints -> end-effector|End-effector -> joints|
|Solution|Unique|Multiple / none|
|Computation|Simple (apply formulas directly)|Complex (solve equations / iterate)|

**What FK is used for**

- Visualization: render joint angles live as a 3D model (ROS RViz, game characters)
- Verification: check whether the computed end-effector pose is correct
- Calibration: compare theoretical pose with actual pose
- Simple control: move along a preset angle sequence

**What IK is used for**

- Grasping: camera sees object -> solve joint angles -> control the arm
- Welding/painting: end must follow a specified trajectory
- Humanoid: feet must land on specified ground points
- Any "go to a place" scenario

<a id="fk"></a>

## 24.5 Forward Kinematics

**The process of computing the end-effector pose from joint angles**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-04.png" alt="Forward kinematics" />
</div>

**One-sentence version**

**Multiply** the local transform of each joint **in sequence**, from the base all the way to the end-effector.

$T_{base}^{end} = T_{base}^{link_1} \cdot T_{link_1}^{link_2} \cdot \ldots \cdot T_{link_{n-1}}^{link_n} \cdot T_{link_n}^{tcp}$

**Computation steps (6 steps)**

1. **Establish link frames**: build a local frame at each joint (DH parameters / URDF)
2. **Write each link's transform matrix** $T_i^{i+1}$ (translation + rotation relative to the previous joint)
3. **Substitute joint angles** $q_i$ (rotation uses $\theta_i$, translation comes from the DH table)
4. **Multiply in sequence** $T_1^2 \cdot T_2^3 \cdot \ldots \cdot T_n^{n+1}$
5. **Multiply by the tool offset** $T_{flange}^{tcp}$
6. **Obtain** $T_{base}^{end}$ — containing position $(x,y,z)$ and orientation ($R$ or $q$ or Euler angles)

**Related concepts in one diagram**

```Plain Text
Joint angles (q)
   |
DH params / URDF  ← describe link geometry (a, alpha, d, theta)
   |
Homogeneous transform (4x4)  ← translation + rotation combined
   |
   +-- rotation matrix R (3x3, SO(3))
   |      +-- rotation representation: Euler / quaternion / axis-angle
   +-- translation vector t (3x1)
   |
Matrix chain multiplication (chain rule)
   |
End-effector pose T_base^end (SE(3))
   |
   +-- position (x, y, z)  ← FK output
   +-- orientation (R / q / rpy)  ← orientation representation
   |
Cartesian-space trajectory / Jacobian (velocity mapping)
   |
Visualization (RViz / simulation)
```

**Core concept checklist**

|Concept|Role|
|:---|:---|
|**DH parameters**|Encode each link's $a, \alpha, d, \theta$ as 4 numbers|
|**Homogeneous transform**|Pack translation + rotation into a 4x4 matrix for easy chaining|
|**Chain rule**|The essence of multiplying many matrices|
|**Rotation representation**|Output orientation as: Euler angles / quaternion / rotation matrix|
|**Trigonometry**|Matrix expansion is all $\sin/\cos$|
|**Jacobian**|FK gives pose; J gives velocity (used in reverse by IK)|
|**URDF**|The actual robot description file; source of FK numbers|

**A small example (2 joints)**

```Plain Text
theta1, theta2 = joint angles
l1, l2 = link lengths

T_1^2 = [cos theta1, -sin theta1, 0, l1 cos theta1]
        [sin theta1,  cos theta1, 0, l1 sin theta1]
        [0,          0,          1, 0          ]
        [0,          0,          0, 1          ]

T_2^3 = [cos theta2, -sin theta2, 0, l2 cos theta2]
        [sin theta2,  cos theta2, 0, l2 sin theta2]
        ...
        [0,          0,          0, 1          ]

T_1^3 = T_1^2 * T_2^3  ->  end-effector pose
```

FK = **DH description + homogeneous matrices + chain multiplication**, translating "joint angles" into "where the end is."

Must-know along the way: DH, 4x4 transforms, matrix multiplication, rotation representations (Euler/quaternion), URDF.

<a id="ik"></a>

## 24.6 Inverse Kinematics

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-05.png" alt="Analytic IK versus numerical IK" />
</div>

**The process of computing joint angles from the end-effector pose**

**Numerical IK:**

Imagine your hand wants to reach a book on a shelf.

**What you do**:

> 1. Look at where your hand is now and how far it is from the book
> 
> 2. Estimate "how much farther it needs to go"
> 
> 3. Move the joints **a little in that direction**
> 
> 4. Repeat 1-3 until the hand touches the book
> 
> 

**This is numerical IK.**

**Core idea**

Not one step to the answer, but **gradually approaching**.

Each step does three things:

1. **Look at the error**: how far the hand still is from the target
2. **Infer the direction**: how the joints should move to reduce the error
3. **Take a step**: actually move the joints once

Then start over, until the error is small enough.

**Why this method works well**

- **Universal**: works for 6-axis, 7-axis, hands, and snake arms alike
- **No need to derive formulas**: just write a program
- **Adjustable precision**: as accurate as you want, just run it longer

**How it is used in industry**

Real factory arms almost all run the "upgraded version" of this algorithm — the **closed-loop version**:

- Continuously observe the error
- Continuously correct
- Even if the model is slightly off, it still converges gradually

This "look while moving" approach is called **CLIK (Closed-Loop IK)**, the de facto industrial standard.

**In one sentence**

> Numerical IK = "**watch the error and slowly approach the target**" — universal, effective, and stable; 90% of industrial arms run it.
> 
> 

<a id="jacobian"></a>

## 24.7 Jacobian Matrix

**The Jacobian turns "solving for pose" into "solving for velocity"**

**Pose IK is hard to solve**

The end-effector pose is a nonlinear equation:

$f(q) = T_{target}$

Solving this equation directly usually has no closed-form solution.

**The Jacobian linearizes it**

Differentiate at the current $q$:

$\frac{\partial f}{\partial q} = J(q)$

**Linear relation**:

$\Delta T \approx J(q) \cdot \Delta q$

**Solve velocity in reverse**

$\dot{q} = J^{-1} \cdot v_{end}$

**Iterative approach**

1. Current q -> compute end-effector pose T
2. Error ΔT = T_target - T
3. End-effector velocity v = ΔT / dt
4. Joint velocity q_dot = J^-1 v
5. q_new = q + q_dot * dt
6. Return to 1 until ΔT is small enough

**In one sentence**

The Jacobian "locally flattens" the nonlinear IK equation into a linear one; solving the velocity in reverse and integrating converges to the target pose.

## 24.8 Singularities

In a certain pose, **no matter how the joints move, the end doesn't move** — or **no end motion is achievable**.

For example:

- **Arm fully extended**: can't push any further; all directions are lost
- **Two wrist joints collinear**: rotating a full circle makes two directions coincide, losing one degree of freedom

**What happens at a singularity**

|Situation|Symptom|
|:---|:---|
|Jacobian "fails"|The translation "manual" can't look anything up|
|IK solution explodes|Computed joint velocity goes to infinity|
|Joint twitching|Motors shake violently|
|Control oscillation|The end jumps back and forth|

Essence: **some entries in the translation manual become 0/0** — untranslatable.

**How to detect it**

When the Jacobian degenerates, one number goes to 0:

- determinant = 0
- smallest singular value = 0
- rank of the Jacobian drops

Monitor this number; **raise an alarm when it approaches 0**.

**How to handle it**

**Damped Least Squares (DLS)**

Add some "friction" to the manual so it doesn't explode

**Change the path**

Plan ahead to bypass singular regions

**Slow down**

Decelerate near singularities to give yourself reaction time

**Change the pose**

For the same target pose, pick a non-singular solution

**Two kinds of singularities**

- Workspace **boundary**: extended to the farthest point; directions are lost
- Workspace **interior**: wrist collinear / elbow straight, degrees of freedom reduced

## 24.9 Analytic IK vs. Numerical IK

Imagine you need to compute 25 × 4.

**Method A (analytic)**:

> Remember "any number × 4 = ×2 then ×2" — compute 50 then ×2 = 100
> 
> One step, exact
> 
> 

**Method B (numerical)**:

> Guess an answer (e.g. 90)
> 
> Compute 25 × 4 = 100, which is 10 more than 90
> 
> Bump it up (guess 102), compute 25 × 4 = 100, 2 more
> 
> Adjust again (guess 100), exactly right
> 
> Iterate a few times to match
> 
> 

**Both can compute it, but the approaches are completely different**.

**Core differences**

|Dimension|Analytic IK|Numerical IK|
|:---|:---|:---|
|Approach|Directly solve the equation|Iterative approximation|
|Speed|Fastest (microseconds)|Slower (ms~s)|
|Accuracy|Exact|Approximate (adjustable)|
|Generality|Poor|Strong|
|Output|Closed-form formula|Numerical result|

**What analytic IK is**

Solve the equation directly to get formulas:

$\theta_1 = \text{atan2}(...)$

$\theta_2 = \text{acos}(...)$

**Pros**:

- Computed in one line of code
- No iteration error
- Can list all solutions

**Cons**:

- Not every robot has a solution
- When joints are many and structure is complex, the equation can't be solved
- Once the robot changes, all formulas must be rewritten

**What numerical IK is**

No formula; repeatedly guess:

> 1. Bend the joints a little
> 
> 2. Did the end get closer to the target?
> 
> 3. If not, bend a bit more
> 
> 4. Repeat until close enough
> 
> 

**Pros**:

- Works for any robot
- No need to derive equations
- Easy to add constraints

**Cons**:

- Slow (needs iteration)
- May get stuck at a wrong solution
- Explodes at singularities

**Applicable scenarios**

|Scenario|Choose|
|:---|:---|
|2-joint, 3-joint, special geometry|Analytic (fast, exact)|
|6-axis standard industrial arm|Either, depends on scenario|
|7-axis redundant arm|Numerical (no analytic solution)|
|Closed-loop / parallel|Numerical (analytic is hard to derive)|
|Real-time control (kHz)|Analytic or offline-generated analytic solution|
|Visual servoing (30 Hz)|Numerical|

- **Joint space** is what the motors understand; **Cartesian space** is what the task understands.
- **FK** is unique, cheap and always solvable; **IK** may have several solutions, one solution, or none.
- The **Jacobian** converts joint velocity into end-effector velocity, and is how IK is actually solved.
- **Singularities** are poses where the Jacobian loses rank; detect them (smallest singular value) and damp them (DLS).
- Next chapter: once you can produce a pose, you still have to move there **smoothly and safely**.

</div>
