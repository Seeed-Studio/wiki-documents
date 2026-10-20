---
description: Chapter 10 of the SO-ARM Physical AI Beginner's Course — calibrate the SO-ARM leader and follower arms with lerobot-calibrate, understand joint mapping and calibration files, then run your first master-slave teleoperation.
title: Chapter 10 - Leader and Follower Calibration and Teleoperation
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - Calibration
  - Teleoperation
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_10
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_10/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 10 · Practice</span>
    <h2>10. Leader and Follower Calibration and Teleoperation</h2>
    <p>
      Chapter 10 of the SO-ARM Physical AI Beginner's Course — calibrate the SO-ARM leader and
      follower arms with lerobot-calibrate, understand joint mapping and calibration files,
      then run your first master-slave teleoperation.
    </p>
    <div className="hero-actions">
      <a href="#why-calibrate">Why calibrate</a>
      <a href="#calibrate">Calibrate</a>
      <a href="#teleop">Teleoperate</a>
    </div>
  </div>
</section>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety check before running</strong>
    <p>
      Clear valuable items and unrelated people within 1 meter of the robotic arm workspace.
      Make sure the arm is firmly mounted and that power and cables are connected properly before running this chapter.
    </p>
  </div>
</div>

## 10.1 Why Full-Arm Calibration Matters

<section id="why-calibrate" className="section-card">
  <div className="section-title">
    <span>Motivation</span>
    <h2>10.1 Why Full-Arm Calibration Matters</h2>
  </div>

Chapter 6 flashed IDs and baud rates; Chapter 7 verified neutrals. **Full-arm calibration** is the last step: it learns, for every joint, the mapping between the servo's raw position reading and a physical angle, so that the leader and follower report identical values when they physically match.

This calibration is essential for a deeper reason: **it allows a neural network trained on one SO-ARM to work on another.** Because every calibrated SO-ARM agrees on what "0 degrees" and "the middle of the range" mean, a dataset recorded on your follower is valid on mine.

:::danger
Power rules recap: on the **SO101 Standard edition** all power supplies are 5V. On the **SO101 Pro edition**, calibrate and operate the Leader with the 5V supply and the Follower with the 12V supply at every step.
:::

</section>

## 10.2 Calibrating the Follower Arm

<section id="calibrate" className="section-card">
  <div className="section-title">
    <span>Calibrate</span>
    <h2>10.2 Calibrating the Follower Arm</h2>
  </div>

Connect all 6 robot servos via their 3-pin cables and the control board, grant serial permissions, then run:

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm  # <- give the robot a unique name
```

The procedure (shown in the video below):

1. **Middle position:** move the arm so every joint sits in the middle of its range (roughly the "straight-up" posture), then press Enter.
2. **Full range:** move each joint through its **full** range of motion, one at a time, as the tool samples the min/max.

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

:::tip
Due to updates of the LeRobot repository, it is normal for the terminal to receive no signal from servo 5 while calibrating the leader arm. You can continue with the operation.
:::

</section>

## 10.3 Calibrating the Leader Arm

<section id="calibrate-leader" className="section-card">
  <div className="section-title">
    <span>Calibrate</span>
    <h2>10.3 Calibrating the Leader Arm</h2>
  </div>

The same two steps (middle position, then full range per joint), with the teleoperator keys:

```bash
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm  # <- give the leader a unique name
```

:::tip
If you see `Could not connect on port '/dev/ttyACM0'. Make sure you are using the correct port. Try running lerobot-find-port`, grant permissions again with `sudo chmod 666 /dev/ttyACM*`.
:::

### Where Calibration Lives (and How to Redo It)

Calibration files are saved as JSON under `~/.cache/huggingface/lerobot/calibration/robots/` and `~/.cache/huggingface/lerobot/calibration/teleoperators/`. To recalibrate, either:

- **Option 1 — delete the files** for a clean start:

```bash
rm -rf ~/.cache/huggingface/lerobot/calibration/robots
rm -rf ~/.cache/huggingface/lerobot/calibration/teleoperators
```

- **Option 2 — answer the prompt.** Re-running the calibration command on a calibrated arm asks:

```text
Press ENTER to use provided calibration file associated with the id my_awesome_leader_arm, or type 'c' and press ENTER to run calibration:
```

Type `c` + Enter to recalibrate; press Enter to keep the existing data.

### When Calibration Fails: `Magnitude ... exceeds 2047`

If calibration or teleoperation throws `Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`, a servo's zero offset is abnormal. Power off and restart the arm and try again; if it persists, do a **middle-position calibration** first — either with the Chapter 7 tool, or with the scripts in Seeed_RoboController:

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt

python -m src.tools.servo_disable              # (optional) disable torque to move joints by hand
python -m src.tools.servo_middle_calibration   # write current position as 2048
python -m src.tools.servo_center_test          # move to 2048 to verify
```

Then return to `lerobot-calibrate` and redo the full-arm calibration.

</section>

## 10.4 Joint Mapping: Direction, Range, and Gripper

<section id="joint-mapping" className="section-card">
  <div className="section-title">
    <span>Mappings</span>
    <h2>10.4 Joint Mapping: Direction, Range, and Gripper</h2>
  </div>

After calibration, verify by hand:

- **Direction:** rotating leader joint 1 clockwise must rotate follower joint 1 clockwise. If any joint moves the wrong way, calibration was done with the arm in a mirrored posture — redo that joint.
- **Range:** move each leader joint to both stops; the follower should reach its corresponding stops without straining against the printed parts.
- **Gripper:** fully close the leader gripper handle — the follower gripper should fully close; fully open maps to fully open.

:::tip
Remember from Chapter 9: the `--robot.id` / `--teleop.id` you chose here is stored with the calibration file. Use exactly the same ids when teleoperating, recording, and evaluating later.
:::

</section>

## 10.5 Starting Master-Slave Teleoperation

<section id="teleop" className="section-card">
  <div className="section-title">
    <span>Teleop</span>
    <h2>10.5 Starting Master-Slave Teleoperation</h2>
  </div>

Now the moment the two arms become one system. Grant port permissions and start teleoperation:

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm
```

The teleoperate command automatically:

1. Detects any missing calibration and starts the calibration procedure;
2. Connects the robot and teleoperator and begins teleoperation.

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

### Teleoperation Safety Guidelines

- Support the follower by hand the first time torque enables — it snaps to its calibrated pose.
- Move the leader **slowly**; the follower follows at full torque.
- Keep fingers out of the follower's gripper and pinch points.
- If the follower lags, jitters, or a joint stops responding: stop, power off, and check that servo's bus cable (a servo LED going dark means the cable before it is loose).

</section>

## 10.6 Control Frequency and Latency

<section id="latency" className="section-card">
  <div className="section-title">
    <span>Performance</span>
    <h2>10.6 Control Frequency and Latency</h2>
  </div>

### Where Does Latency Come From? Why Is It Inevitable?

Every control cycle reads the leader, sends targets to the follower, and (later) reads cameras. USB cameras in particular deliver frames on their own schedule. The loop is fast — tens of milliseconds — but not zero, so fast leader motions always look slightly smoothed on the follower. That's normal.

### What Is the Control Frequency? Can It Be Configured?

LeRobot runs the loop at a configured fps (default 30 for SO-ARM workflows; the dataset `--dataset.fps` used later must match). If teleoperation stutters:

- Avoid USB hubs — connect arms and cameras directly to the computer.
- Check that no other process holds the serial ports.
- Verify with `lerobot-find-port` that no other device shares the bus.

</section>

## 10.7 Hands-On Practice

<section id="practice" className="section-card">
  <div className="section-title">
    <span>Practice</span>
    <h2>10.7 Hands-On Practice</h2>
  </div>

1. Calibrate follower and leader; find both JSON files under `~/.cache/huggingface/lerobot/calibration/`.
2. Teleoperate for 5 minutes: touch each corner of the mouse mat with the gripper, then pick up a small object.
3. Deliberately test the failure path: run teleoperate with a wrong `--robot.id` and read the error — you will recognize it forever after.
4. Practice recalibration via the `c` prompt.

With the control chain verified, the next chapter designs the data your first policy will learn from.

</section>

</div>
