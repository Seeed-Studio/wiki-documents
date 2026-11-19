---
title: reBot Arm T701 HT MIT Control SDK
sidebar_label: MIT Control SDK
description: Run single-motor five-parameter MIT control with the T701-HT SDK and understand CAN selection, target trajectories, feedback, and return-to-zero shutdown.
keywords:
  - reBot
  - T701 HT
  - Python SDK
  - MIT Control
  - Motor Control
slug: /rebot_t701_ht_control_mit
translation:
  skip: [zh-CN]
last_update:
  date: 11/18/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm T701 HT MIT Control SDK

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

The T701-HT SDK's MIT interface sets target position, target velocity, feedforward torque, position gain `Kp`, and velocity gain `Kd` together. This page introduces the single-motor sinusoidal tracking example, its parameters, feedback, and shutdown sequence. For whole-arm gravity compensation, joint impedance, and Cartesian control, see [T701 HT with Pinocchio](https://wiki.seeedstudio.com/rebot_t701_ht_pinocchio/).

<section className="section-card">

## Prepare the Robot

Get the SDK and install its dependencies using the [T701 HT Quick Start installation instructions](https://wiki.seeedstudio.com/rebot_t701_ht_getting_started/#install-the-sdk). Complete the serial mapping and joint and gripper feedback checks, then verify the selected motor's zero position.

- **Connections.** The left arm uses CAN1; the right arm uses CAN2. Set `board_serial` in `T701-HT_robot_param/serial_binding.yaml` to the communication board's USB serial number.
- **Motor IDs.** On each arm, ID1–ID7 are the seven joints, and ID8 is the gripper.
- **Working directory.** Run all commands on this page from the SDK root. In each new terminal or SSH session, return to that directory and activate the environment.

```bash
conda activate t701-ht
```

:::warning[Check the motion range before running]

The selected motor starts moving immediately when you run a motion command, without another arm selection or confirmation. Secure the hardware, remove payloads, and clear the motion range and return path. Stay with the hardware and keep clear of joint and gripper pinch points.

The original target is **±π rad (±180°)**. The motion loop calls the low-level motor interface directly, without applying the high-level joint limits or gravity compensation. This trajectory may exceed the permitted range of an assembled joint or gripper. In particular, the high-level range for the ID8 gripper is **−0.2 to 2.2 rad**, so it cannot execute the original trajectory. Before running, adjust the target position and corresponding velocity to suit the selected mechanism, and verify the entire trajectory and return path.

:::

</section>

<section className="section-card">

## Select and Run One Motor

The example is `scripts/motor_example/t701_ht_pos_vel_torque_kp_kd_control.py`. After checking and adjusting the trajectory above, choose one command to match your wiring.

**Left arm CAN1, motor ID8:**

```bash
python scripts/motor_example/t701_ht_pos_vel_torque_kp_kd_control.py --can-port 1 --motor-id 8 --arm left
```

**Right arm CAN2, motor ID8:**

```bash
python scripts/motor_example/t701_ht_pos_vel_torque_kp_kd_control.py --can-port 2 --motor-id 8 --arm right
```

| Argument | Values | Purpose |
| --- | --- | --- |
| `--can-port` | 1–7 | Logical CAN channel on the communication board. Standard wiring uses 1 for the left arm and 2 for the right. |
| `--motor-id` | 1–8 | Selects just one motor with this ID on the specified channel. |
| `--arm` | `left` / `right` | Selects that side's motor types and homing configuration. |

All three arguments are required; there is no default arm or motor selection. `--arm` neither selects the CAN channel nor mirrors the right-arm trajectory. The example generates a temporary single-motor configuration from the corresponding YAML, so you do not need to edit the whole-arm motor list.

</section>

<section className="section-card">

## MIT Parameters and Target Trajectory

This excerpt comes from the motion loop; the example creates `motor` and `robot`. Set the selected motor's command, then send it.

```python
motor.pos_vel_tqe_kp_kd(pos, vel, 0.0, 2, 0.5)
robot.motor_send_cmd()
```

| Parameter (in call order) | Meaning | Original setting |
| --- | --- | --- |
| `pos` | Target position, rad | `π × sin(2π × 0.1 × t)`, with amplitude π rad. |
| `vel` | Target velocity, rad/s | `0.2 × π² × cos(2π × 0.1 × t)`, the time derivative of target position. |
| `tqe` | Feedforward torque, Nm | `0.0`. Zero feedforward does not mean zero motor output torque. |
| `kp` | Position gain | `2`. |
| `kd` | Velocity gain | `0.5`. |

The original frequency is **0.1 Hz**, the period is **10 seconds**, and peak target velocity is about **1.974 rad/s**. If you change the position to `offset + A × sin(2π × f × t)`, use the corresponding velocity `A × 2π × f × cos(2π × f × t)`, and verify that the full range from `offset − A` to `offset + A` is permitted.

`t` uses `time.time()`, so the initial phase depends on the launch time; the target does not necessarily start at zero. The source comment says “1.0 rad amplitude,” but the formula uses **π rad**.

The loop sleeps for `0.001` seconds after each send. Communication, computation, and printing add to the cycle time, so this is not a fixed 1 kHz real-time loop.

</section>

<section className="section-card">

## Read State Feedback

At startup, the terminal displays the number of controlled motors. It then prints the selected motor's state every 100 loop iterations.

| Field | Meaning |
| --- | --- |
| `position` | Current motor position, printed in rad and converted to degrees. |
| `velocity` | Current motor velocity, rad/s. |
| `torque` | Reported motor torque, Nm. |
| `mode` | Mode value returned by the low-level SDK. |
| `fault` | Fault code returned by the low-level SDK, printed in hexadecimal. |

The example reads these fields through `motor.get_current_motor_state()`. The printing interval depends on actual loop timing. The example displays mode and fault values without decoding fault codes.

</section>

<section className="section-card">

## Return to Zero and Exit

1. The first `Ctrl+C` exits sinusoidal tracking and starts a smooth return of the selected motor to its saved zero position.
2. Homing uses the position, velocity, and maximum torque interface `pos_vel_MAXtqe()`, with the homing configuration for the side selected by `--arm`.
3. After homing, the shutdown logic sends damping brake commands. Press `Ctrl+C` again during homing to interrupt the return and attempt braking. Invalid feedback or a homing failure also causes the shutdown logic to attempt braking.

The first `Ctrl+C` triggers return motion. Damping braking is not a position hold; support the mechanism during startup and shutdown.

</section>

<section className="section-card">

## Use MIT Control for the Whole Arm

The single-motor example uses a low-level `motor` object. Whole-arm control uses `Lib.t701_ht.T701HT`, with separate interfaces for joints and the gripper.

| Interface | Parameters and sending behavior |
| --- | --- |
| `motor.pos_vel_tqe_kp_kd(pos, vel, tqe, kp, kd)` | Five scalar parameters for one motor. Call `robot.motor_send_cmd()` afterward to send. |
| `arm.pos_vel_tqe_kp_kd(pos, vel, tqe, kp, kd)` | Five joint vectors of length 7, excluding the gripper. Checks the configured target joint position range before sending; returns `False` for an out-of-range target. |
| `arm.gripper_control_MIT(pos, vel, tqe, kp, kd, send=True)` | Five scalar gripper parameters. Checks the target gripper position range and sends by default. With `send=False`, only queues the command for sending with the joint command in the same cycle. Returns `False` for an out-of-range target. |

The whole-arm MIT interface's target position checks do not replace trajectory design or torque limiting. For gravity feedforward, joint impedance, or automatic shutdown handling, use the complete examples linked from the [Pinocchio page](https://wiki.seeedstudio.com/rebot_t701_ht_pinocchio/).

</section>

</div>
