---
description: "Chapter 11 of the Seeed Embodied Intelligence Beginner's Course — environment setup, follower and leader arm calibration, joint mapping, teleoperation safety, starting master-slave teleoperation, control frequency and latency, and hands-on practice."
title: Chapter 11 - Leader and Follower Calibration and Teleoperation
keywords:
  - reBot
  - LeRobot
  - Teleoperation
  - Calibration
  - Leader Arm
  - Follower Arm
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_11
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: LiuJunjie
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/rebot_embodied_ai_course_chapter_11/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 11 · Practice</span>
    <h2>11. Leader and Follower Calibration and Teleoperation</h2>
    <p>
      Chapter 11 of the Seeed Embodied Intelligence Beginner's Course — environment setup, follower
      and leader arm calibration, joint mapping, teleoperation safety, starting master-slave
      teleoperation, control frequency and latency, and hands-on practice.
    </p>
    <div className="hero-actions">
      <a href="#environment">Environment</a>
      <a href="#calibrate-follower">Calibration</a>
      <a href="#teleoperate">Teleoperation</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>In this chapter</strong>
    <span>11.1 Unboxing, Wiring, and Mounting the Arm</span>
    <span>11.2 Environment Setup</span>
    <span>11.3 Calibrating the Follower Arm</span>
    <span>11.4 Calibrating the Leader Arm</span>
    <span>11.5 Joint Mapping: Direction, Range, and Gripper</span>
    <span>11.6 Teleoperation Safety Guidelines</span>
    <span>11.7 Starting Master-Slave Teleoperation</span>
    <span>11.8 Control Frequency and Latency</span>
    <span>11.9 Hands-On Practice</span>
  </div>
</section>

<RebotCourseNav />

## 11.1 Unboxing, Wiring, and Mounting the Arm

<section id="unboxing" className="section-card">
  <div className="section-title">
    <span>Setup</span>
    <h2>11.1 Unboxing, Wiring, and Mounting the Arm</h2>
  </div>

- **reBot DM**
- **reBot RS**

</section>

## 11.2 Environment Setup

<section id="environment" className="section-card">
  <div className="section-title">
    <span>Environment</span>
    <h2>11.2 Environment Setup</h2>
  </div>

Assuming you've already created a virtual environment in Stage 2, next we just need to clone the repository and install the environment in the conda environment you created. Do NOT use a virtual machine or WSL; it's best to install Ubuntu 22.04 directly.

:::tip
Remember: all subsequent steps must be performed within the virtual environment and the `lerobot` environment.
:::

**Step 1:** Clone the Seeed LeRobot repository

```bash
mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git
```

**Step 2:** Enter the virtual environment and install LeRobot and reBot plugins

```bash
conda create -y -n rebot_arm python=3.12
pip install -e ./lerobot
```

```bash
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge
```

**Step 3:** Install ffmpeg (video codec dependency)

```bash
conda install ffmpeg -c conda-forge
```

**Version notes:**

- By default, ffmpeg 7.X will be installed (supports the libsvtav1 encoder).
- If you encounter version compatibility issues, you can specify ffmpeg 7.1.1:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- You can check via `ffmpeg -encoders | grep svtav1` whether the libsvtav1 encoder is supported.

**Step 4:** Special configuration for NVIDIA Jetson devices (skip this step on a regular PC)

For Jetson JetPack 6.0+ devices (make sure you have installed Jetson-compatible PyTorch-gpu and Torchvision before this step):

```bash
# Install OpenCV and other dependencies via conda (Jetson JetPack 6.0+ only)
conda install -y -c conda-forge "opencv>=4.10.0.84"
# Uninstall OpenCV
conda remove opencv
# Install specific OpenCV version via pip3
pip3 install opencv-python==4.10.0.84
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
# This version must be compatible with Torchvision
pip3 install numpy==1.26.0
```

**Step 5:** Check whether PyTorch GPU is available

```bash
python3

import torch
print(torch.cuda.is_available())   # Should output True
```

Type `exit()` to quit.

:::warning
If it outputs `False`, you installed the CPU version — you need to reinstall PyTorch.
:::

</section>

## 11.3 Calibrating the Follower Arm

<section id="calibrate-follower" className="section-card">
  <div className="section-title">
    <span>Calibration</span>
    <h2>11.3 Calibrating the Follower Arm</h2>
  </div>

- Next, make sure the reBot B601-RS robot is connected to power and data cable before calibrating.
- Leader and Follower calibration files are stored at `~/.cache/huggingface/lerobot/calibration/robots` and `~/.cache/huggingface/lerobot/calibration/teleoperators` respectively. To recalibrate, delete the corresponding files, or just run the calibration command — the terminal will prompt: press <kbd>C</kbd> to recalibrate, press <kbd>Enter</kbd> to use the existing calibration file.
- If you cannot connect to the follower, refer to Stage 2 and use the motorbridge interface to test whether the arm is working properly.
- Follow the prompts to move the Follower arm to the zero position shown above. The arm only needs to be calibrated once on the same computer after assembly. Below are the calibration commands; refer to the zero position in the image (gripper should be fully closed).

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-01.png" alt="Follower zero position" />
</div>

**For DM Follower calibration:**

```bash
sudo chmod 666 /dev/ttyACM*
cd lerobot
lerobot-calibrate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao
```

**For RS Follower calibration:**

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
cd lerobot

lerobot-calibrate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan
```

(Optional) If you're using Jetson (Jetpack 6.x), run the following command to find the CAN port number for your Jetson:

```bash
for i in /sys/class/net/can*; do
    [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"
done
```

Example output:

```text
can2  # Could also be can0, can1, or other CAN number
```

The port number used in all subsequent follower commands must match the output here.

:::warning
If your Jetson doesn't have the PCAN driver installed, communication will be persistently abnormal.
:::

</section>

## 11.4 Calibrating the Leader Arm

<section id="calibrate-leader" className="section-card">
  <div className="section-title">
    <span>Calibration</span>
    <h2>11.4 Calibrating the Leader Arm</h2>
  </div>

**reBot 102 Leader calibration notes:**

- When calibration starts, each servo's current position on the reBot Arm 102 will be **reset to zero**.
- `joint_ranges` (joint limits) come from the config file `config_rebot_arm_102_leader.py`, not from calibration data.
- If a joint always seems stuck near a limit, check the `joint_ranges` configuration first.
- Joint directions are defined in the config file; if directions don't match, modify the config rather than recalibrating.
- The reBot 102 Leader uses a USB-to-UART module, usually mapped to `/dev/ttyUSB*`.
- Use `ls /dev/ttyUSB*` to see the actual port number.

On first connection, you may get an error that serial port `/dev/ttyACM0` cannot be found — this is because `brltty` is occupying the port. Follow these steps:

```bash
sudo dmesg | grep ttyUSB   # See 'disconnected' on the last line
sudo apt remove brltty     # Remove brltty
```

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-02.png" alt="Leader arm serial port" />
</div>

Follow the prompts to move the Leader arm to the zero position shown above:

```bash
sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

Keep it still, then press <kbd>Enter</kbd> until calibration is complete.

</section>

## 11.5 Joint Mapping: Direction, Range, and Gripper

<section id="joint-mapping" className="section-card">
  <div className="section-title">
    <span>Mapping</span>
    <h2>11.5 Joint Mapping: Direction, Range, and Gripper</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-03.png" alt="Joint mapping" />
</div>

</section>

## 11.6 Teleoperation Safety Guidelines

<section id="safety" className="section-card">
  <div className="section-title">
    <span>Safety</span>
    <h2>11.6 Teleoperation Safety Guidelines</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-04.png" alt="Teleoperation safety guidelines" />
</div>

</section>

## 11.7 Starting Master-Slave Teleoperation

<section id="teleoperate" className="section-card">
  <div className="section-title">
    <span>Teleoperation</span>
    <h2>11.7 Starting Master-Slave Teleoperation</h2>
  </div>

:::danger The same safety rules apply to all arm motion scenarios!
During teleoperation, if power cables come loose, power connection is poor, or signal cables detach, you must first stop the code, return the arm to its initial zero position, then reconnect power and restart the program — to avoid data corruption causing the arm to go out of control and create danger.
:::

**DM teleoperation** — first grant permissions to the serial ports:

```bash
# leader
sudo chmod 666 /dev/ttyUSB*
# follower
sudo chmod 666 /dev/ttyACM*
```

Run teleoperation:

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

**RS teleoperation** — first grant permissions to the serial ports:

```bash
# leader
sudo chmod 666 /dev/ttyUSB*
# follower
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

Run teleoperation:

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

</section>

## 11.8 Control Frequency and Latency

<section id="frequency-latency" className="section-card">
  <div className="section-title">
    <span>Performance</span>
    <h2>11.8 Control Frequency and Latency</h2>
  </div>

Whether teleoperation feels "responsive" depends on two things: how many loops the forwarding circuit runs per second (frequency), and how much delay there is between your hand and the arm (latency).

### Where Does Latency Come From? Why Is It Inevitable?

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-05.png" alt="Latency sources" />
</div>

### What Is the Control Frequency? Can It Be Configured?

The teleoperation loop defaults to **60 Hz** — completing 60 loops per second of "read Leader → map → send CAN → read back"; each loop has a 16.7 ms time budget. This frequency can be adjusted via the teleoperate config's `fps` parameter, but keep two things in mind:

- **The upper limit is determined by hardware circuit time, not software.** The chain above itself takes over ten milliseconds per loop, so the practical upper limit for this hardware is around 60–100 Hz. Setting it higher is pointless: the actual frequency won't increase, and you'll only see period-timeout warnings.
- **60 Hz already far exceeds what's needed.** The fastest conscious human movements are only 5–10 Hz; 60 Hz is like taking ten snapshots of every tiny movement, so the sampling density fully covers the hand's bandwidth.

</section>

## 11.9 Hands-On Practice

<section id="practice" className="section-card">
  <div className="section-title">
    <span>Practice</span>
    <h2>11.9 Hands-On Practice: Grasping, Transporting, and Placing</h2>
  </div>

Teleoperation is stable, but "can move" and "can work" still require deliberate practice. The data quality in Chapter 13 depends on your current proficiency. Practice at three levels:

- **Exercise 1: Empty-load object transfer (get familiar with the feel).** Place a few lightweight blocks in the workspace. Practice: move above target → descend → close gripper → lift. Goal: 10 repetitions without collisions or mid-execution drops, with each run flowing smoothly without hesitation.
- **Exercise 2: Transport and placement (full task chain).** Complete the full "grasp → transport → place into designated container" workflow. Goal: 10 consecutive repetitions with nearly identical start and end poses each time.
- **Passing standard:** you can complete 20 full tasks in a row at a steady rhythm without feeling strained — then you're ready for the next chapter.

</section>

</div>
