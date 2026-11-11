---
description: "Chapter 7 of the SO-ARM101 Sim-to-Real VLA Course — prepare the robot arm: install the LeRobot environment, write servo IDs (kit only; pre-built arms skip this), calibrate both arms, and verify teleoperation."
title: Chapter 7 - Prepare the Robot Arm
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - lerobot-setup-motors
  - Calibration
  - LeRobot
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_7
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_7/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 2 · Chapter 7 · Build Your Robot Lab</span>
    <h2>7. Prepare the Robot Arm</h2>
    <p>
      Two arms: a leader you move by hand and a follower that repeats the
      motion. Install the environment, write servo IDs (skip on pre-built
      arms), calibrate both, and verify with a first teleoperation.
    </p>
    <div className="hero-actions">
      <a href="#arms">The arms</a>
      <a href="#env">Environment</a>
      <a href="#ids">Servo IDs</a>
      <a href="#calibrate">Calibration</a>
      <a href="#teleop">Verify</a>
    </div>
  </div>
</section>

## 7.1 The Two Arms

<section id="arms" className="section-card">
  <div className="section-title">
    <span>Leader and follower</span>
    <h2>7.1 The Two Arms</h2>
  </div>

**Leader arm** — a low-cost open-source arm designed for education and
research, available as a complete unit or a DIY kit. Six joints driven by
7.4 V-class STS3215 servos on a 5 V supply; it only reads joint angles.

**Follower arm** — the arm that executes. On the Pro kit it runs 12 V
servos; it mirrors the leader during teleoperation and later executes the
trained VLA policy.

:::caution Do not mix the power supplies
The leader runs on 5 V and the follower on 12 V. Swapping them can damage
the servos. Power both arms down before changing any cable.
:::

The full assembly walkthrough lives in the beginner course:
[Beginner Chapter 6 — Configure Motors and Assemble the Arms](https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_6/)
covers 3D printing, motor planning, ID writing, and step-by-step assembly;
[Beginner Chapter 7 — Servo Debugging](https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_7/)
covers the Feetech debugging tool for a misbehaving servo.

</section>

## 7.2 Install the LeRobot Environment

<section id="env" className="section-card">
  <div className="section-title">
    <span>Install once</span>
    <h2>7.2 Install the LeRobot Environment</h2>
  </div>

Before calibration, install the exact environment every later chapter uses.
Install `uv` first, then create the workspace:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
uv --version

mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
sudo apt update
sudo apt install -y ffmpeg

# Download the Seeed LeRobot fork (includes SO101 leader/follower support)
git clone https://github.com/Seeed-Projects/lerobot.git

# Create virtual environment (Python 3.12)
uv venv --python 3.12 .venv
source .venv/bin/activate

uv pip install --upgrade pip
uv pip install -e ./lerobot

# Feetech servo SDK — required by the SO-101 buses
uv pip install feetech-servo-sdk
```

:::note Re-entering the environment
The runtime environment only needs to be configured once. Later chapters
assume you can re-enter it with:
`cd ~/rebot_lerobot && source .venv/bin/activate`
:::

</section>

## 7.3 Kit or Pre-Built?

<section id="ids" className="section-card">
  <div className="section-title">
    <span>Skip IDs if pre-built</span>
    <h2>7.3 Kit or Pre-Built?</h2>
  </div>

| Your situation | Assemble | Write servo IDs | Calibrate |
| --- | --- | --- | --- |
| 3D-printed or kit version | Yes | **Yes** | Yes |
| Pre-built arm (整机) | Already done | **Skip** — IDs are written at the factory | Yes |

**If you bought pre-built arms, jump straight to
[7.5 Calibrate the Arms](#calibrate).**

Label every servo before it goes into a joint — **F1–F6** on follower
servos, **L1–L6** on leader servos. Joint 1 = shoulder pan, 2 = shoulder
lift, 3 = elbow, 4 = wrist pitch, 5 = wrist roll, 6 = gripper. SO-ARM101
leader joints 1–3 use different gear ratios than SO-ARM100 — check the
ratio table in [Beginner Chapter 6.2](https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_6/)
before mounting anything.

:::caution One servo at a time
All six servos share one serial bus. Configure IDs with exactly one servo
wired to the controller board, or a duplicate ID gets written to every servo
that has it.
:::

</section>

## 7.4 Write Servo IDs (Kit Version Only)

<section id="setup-motors" className="section-card">
  <div className="section-title">
    <span>lerobot-setup-motors</span>
    <h2>7.4 Write Servo IDs (Kit Version Only)</h2>
  </div>

Find the controller-board port first:

```bash
lerobot-find-port
```

Unplug the board when prompted and replug it; the printed port is yours
(usually `/dev/ttyACM0`).

Flash IDs joint by joint:

```bash
lerobot-setup-motors \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0
```

The tool names the joint to connect — wire up that single servo, press
Enter, and it writes the ID and baud rate:

```text
Connect the controller board to the 'gripper' motor only and press enter.
```

Repeat for all six follower joints, then run the same tool for the leader:

```bash
lerobot-setup-motors \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1
```

Configure serial port permissions (and remember them after reboots):

```bash
sudo usermod -aG dialout $USER   # log out and back in once
sudo chmod 666 /dev/ttyACM*
```

On Ubuntu, the `brltty` service can claim the USB serial adapter. If the
port disappears after a few seconds, remove it: `sudo apt remove brltty`.

</section>

## 7.5 Calibrate the Arms

<section id="calibrate" className="section-card">
  <div className="section-title">
    <span>Reference pose</span>
    <h2>7.5 Calibrate the Arms</h2>
  </div>

Calibration is required for **both** kit and pre-built arms. It teaches
LeRobot each joint's middle position and its two mechanical end stops.
Calibration files live under `~/.cache/huggingface/lerobot/calibration/`,
keyed by arm ID — reuse an ID only for the same physical arm.

Find both ports, then export the values used by every later chapter:

```bash
export TELEOP_PORT=/dev/ttyACM0
export TELEOP_ID=so101_leader
export ROBOT_PORT=/dev/ttyACM1
export ROBOT_ID=so101_follower
```

Calibrate the leader:

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID
```

1. Move every joint to the **middle of its travel**. Center the wrist roll
   carefully — if it starts at an end stop, the encoder can overflow during
   the sweep.
2. Press Enter, then sweep each joint slowly to both end stops, one joint
   at a time. Repeats are fine; the extremes are overwritten.
3. Press Enter to save.

Calibrate the follower the same way:

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID
```

For the follower, stop at the arm's true mechanical end stop — not at a
cable, not at the table. A pinched cable records a false limit and
compresses the usable range.

:::caution Signature of a bad calibration
If the follower mirrors only half of the leader's motion, or a joint snaps
to an end stop, the range sweep was too short. Recalibrate that arm and
move every joint through its complete travel.
:::

If you run the NVIDIA workshop tooling, verify the follower's quality:

```bash
export ROBOT_PORT ROBOT_ID
python ~/Sim-to-Real-SO-101-Workshop/docker/real/scripts/so101_check_calibration.py
```

A good calibration ends with:

```text
Overall: ✓ PASS — calibration looks good.
```

</section>

## 7.6 Verify the Robotic Arm

<section id="teleop" className="section-card">
  <div className="section-title">
    <span>First teleoperation</span>
    <h2>7.6 Verify the Robotic Arm</h2>
  </div>

Bring both arms to a similar pose, then run:

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID
```

Move the leader slowly. The follower must track each joint in the same
direction and reach the same end stops. Stop with `Ctrl+C`.

This also confirms the joint ordering used everywhere else in the course:
`shoulder_pan`, `shoulder_lift`, `elbow_flex`, `wrist_flex`, `wrist_roll`,
`gripper`. If one joint moves backwards, recalibrate — do not compensate in
software.

Keep one hand near the follower's power switch during the first runs.

Next: [Chapter 8 — Building the Workspace](Sim2Real_VLA_08.md).

</section>

</div>