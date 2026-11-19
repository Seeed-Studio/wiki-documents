---
title: reBot Arm T701 HT with Pinocchio
sidebar_label: Pinocchio
description: Verify forward and inverse kinematics and run gravity compensation, Cartesian trajectory, and keyboard control examples on the reBot Arm T701 HT.
keywords:
  - reBot
  - T701 HT
  - Pinocchio
  - Kinematics
  - Gravity Compensation
slug: /rebot_t701_ht_pinocchio
translation:
  skip: [zh-CN]
last_update:
  date: 11/18/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm T701 HT with Pinocchio

<div className="rebot-page">

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="reBot Arm T701 HT bimanual robot" />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701-SDK"
  fallbackCount={0}
  ariaLabel="Star T701-HT SDK on GitHub"
/>

The T701-HT SDK uses Pinocchio to load the URDF model and compute end-effector poses and joint torques due to gravity. Use the forward kinematics (FK) and inverse kinematics (IK) examples to check joint feedback from the robot before running the gravity compensation, Cartesian trajectory, and keyboard control examples.

<section className="section-card">

## Prepare the Robot

Install the SDK and its dependencies using the [T701 HT Quick Start installation instructions](https://wiki.seeedstudio.com/rebot_t701_ht_getting_started/#install-the-sdk). Then follow the remaining Quick Start steps to check the serial port mapping, read joint and gripper feedback, and verify the zero positions.

:::warning[Before running the examples on the robot]

- Make sure the arms are securely mounted and remove any payload. Use one arm for the first run.
- The arms may start moving as soon as you select them in a motion example. Clear the entire range of motion, including the space overhead and the path back to zero. Stay with the robot throughout the run and keep clear of pinch points at the joints and grippers.
- Support the arms before starting or stopping a gravity compensation example so they do not drop when the compensation torque is removed.
- In examples that automatically return to zero, the first `Ctrl+C` starts the return. Press `Ctrl+C` again during the return to interrupt the motion and send a stop command.

:::

Whenever you open a new terminal or SSH session, go to the SDK root directory, activate the `t701-ht` Conda environment you created in the Quick Start, and enter the `scripts` directory.

```bash
conda activate t701-ht
cd scripts
```

When prompted after launching an example, enter `1` for the left arm, `2` for the right arm, or `3` for both arms.

</section>

<section className="section-card">

## Verify Forward and Inverse Kinematics

Forward kinematics computes the end-effector pose from the current joint angles. The inverse kinematics check solves for the joint angles that produce that pose and compares them with the current readings. Both examples use joint feedback only for their calculations and send a motor stop command when you exit with `Ctrl+C`.

| Example | Command | Expected output |
| --- | --- | --- |
| Live forward kinematics (FK) | `python t701_ht_forward_kinematics_test.py` | Prints the end-effector position in meters and roll, pitch, and yaw (RPY) in degrees about once per second. |
| FK to IK check at the current pose | `python t701_ht_inverse_kinematics_test.py` | Prints the current joint angles and end-effector position. If IK succeeds, it also prints the maximum joint angle error in radians. |

</section>

<section className="section-card">

## Gravity Compensation and Joint Impedance

`G(q)` is the gravity torque the model computes from the joint angles `q`. Gravity compensation makes it easier to move the arms by hand. The joint impedance examples actively move the arms to a preset posture and hold it.

| Example | Command | Expected behavior |
| --- | --- | --- |
| Gravity compensation | `python t701_ht_gravity_compensation.py` | Applies `0.8 × G(q)` subject to the torque limits and prints the compensation torque. |
| Gravity compensation with FK output | `python t701_ht_gravity_compensation_with_fk.py` | Applies `G(q)` subject to the torque limits and prints the joint angles, compensation torque, and end-effector pose. |
| Joint impedance with gravity feedforward | `python t701_ht_joint_impedance_with_gravity.py` | Moves to and holds a preset joint posture, adds gravity compensation, and prints the total torque. |
| Joint impedance with gravity and friction feedforward | `python t701_ht_joint_impedance_with_gravity_friction.py` | Moves to and holds a preset joint posture, adds gravity and friction compensation, and prints the total torque. |

When you press `Ctrl+C`, both gravity compensation examples stop the motors directly. Both joint impedance examples return to zero before stopping.

</section>

<section className="section-card">

## Cartesian Control

| Example | Command | Motion sequence |
| --- | --- | --- |
| Move to a target using IK | `python t701_ht_inv_posvel_control.py` | First returns the joints to zero. If the IK solution for the target pose passes the error check, the arm moves to the target using `moveJ`. |
| Quadratic programming (QP) inverse kinematics | `python t701_ht_qp_ik.py` | Moves to the initial VR pose, then raises the arm and traces a circle overhead. |
| MoveL translation | `python t701_ht_moveL_pos_control.py` | Holds the target end-effector orientation while following straight-line, diagonal, and square paths in sequence. |
| MoveL rotation | `python t701_ht_moveL_rotate_control.py` | Holds the target end-effector position while rotating about the end effector's local axes and performing a conical motion. |

Both MoveL examples start by moving to the initial VR pose. Each trajectory runs for 5 seconds, excluding initial positioning and the return to zero. All four examples in this section return to zero and stop at the end.

</section>

<section className="section-card">

## Keyboard Control

Run these examples in an interactive local terminal or SSH session. After you select the arms, they automatically move to the initial VR pose before accepting keyboard input.

| Example | Command | Expected behavior |
| --- | --- | --- |
| End-effector pose | `python t701_ht_keyboard_cartesian_pos_control.py` | Each key press changes the target end-effector pose by one step. If IK fails, the example retains the previous joint target. |
| End-effector velocity | `python t701_ht_keyboard_cartesian_vel_control.py` | Hold a key to translate or rotate the end effector continuously. Release it to ramp the commanded velocity down to zero. |
| End-effector velocity with collision prediction | `python t701_ht_keyboard_cartesian_vel_collision_control.py` | Use the keys to control end-effector velocity. If the example predicts a collision or joint limit violation, it commands zero velocity and displays a message. |
| Null-space posture lock | `python t701_ht_keyboard_cartesian_pd_nullspace_lock_control.py` | Tracks the target end-effector pose while keeping the joint posture as close as possible to the reference posture. |

- **Translate.** Use `W` / `S`, `A` / `D`, and `Q` / `E` to move along the X, Y, and Z axes, respectively.
- **Rotate.** Use `1` / `2`, `3` / `4`, and `5` / `6` to rotate about the X, Y, and Z axes, respectively.
- **Reset the reference posture.** In the null-space posture lock example, press `R` to set the current joint posture as the reference.
- **Exit.** Press `Esc` or `Ctrl+C` to return to zero and stop.

:::warning[Scope of collision prediction]

Once the arms reach the initial VR pose, the end-effector velocity example with collision prediction checks for collisions and joint limit violations over the next 0.20 seconds. Collision checks use the STL meshes in `T701-HT_URDF/meshes/` and include collisions between the arms in dual-arm mode. Leave clearance during startup and the return to zero, and allow extra space for the grippers and the actual stopping distance.

:::

</section>

</div>
