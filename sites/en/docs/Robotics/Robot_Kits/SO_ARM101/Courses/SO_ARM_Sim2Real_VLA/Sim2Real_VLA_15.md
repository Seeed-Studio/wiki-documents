---
description: "Chapter 15 of the SO-ARM101 Sim-to-Real VLA Course — connect the robot hardware to the Jetson: the SO-101 follower over USB serial, both cameras, calibration files, and the readiness checklist."
title: Chapter 15 - Connect the Robot Hardware
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Jetson
  - Hardware
  - USB Serial
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_15
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_15/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 4 · Chapter 15 · Deploy on Jetson</span>
    <h2>15. Connect the Robot Hardware</h2>
    <p>
      Attach the SO-101 follower to the Jetson over USB serial, connect the
      two cameras, and carry over the calibration — the edge device then
      needs nothing else from the workstation at runtime.
    </p>
    <div className="hero-actions">
      <a href="#requirements">Requirements</a>
      <a href="#connect">Connect</a>
      <a href="#serial">Serial port</a>
      <a href="#cameras">Cameras</a>
      <a href="#checklist">Checklist</a>
    </div>
  </div>
</section>

## 15.1 Hardware Requirements

<section id="requirements" className="section-card">
  <div className="section-title">
    <span>What you need</span>
    <h2>15.1 Hardware Requirements</h2>
  </div>

- Jetson AGX Orin or AGX Thor with JetPack 7.2 (Chapter 14);
- SO-ARM101 follower arm — USB serial, **no CAN adapter needed**;
- two USB cameras (wrist + external, as in Chapter 8);
- a powered USB 3.0 hub — Thor provides only two Type-A ports, which is
  not enough for the follower and two cameras at once;
- the follower's 12 V power supply and USB data cable.

:::note Leader arm not required at the edge
The leader arm is only used for data collection. A Jetson deployment needs
the follower, the cameras, and the policy — nothing else.
:::

</section>

## 15.2 Connect the Devices

<section id="connect" className="section-card">
  <div className="section-title">
    <span>Order matters</span>
    <h2>15.2 Connect the Devices</h2>
  </div>

1. Keep the follower's 12 V power off.
2. Connect the follower's USB serial port to the Jetson (directly, or
   through the powered hub).
3. Connect the wrist and external cameras through the powered hub.
4. Copy the calibration directory from the workstation (see below).
5. Apply follower power last.

:::tip Copy the calibration, not just the code
The follower plays back the calibration written for its exact ID. Copy the
workstation's calibration to the same path on the Jetson:

```bash
# on the workstation
rsync -av ~/.cache/huggingface/lerobot/calibration/ \
  jetson:/home/<jetson-user>/.cache/huggingface/lerobot/calibration/
```
:::

</section>

## 15.3 Identify the Serial Port

<section id="serial" className="section-card">
  <div className="section-title">
    <span>USB serial</span>
    <h2>15.3 Identify the Serial Port</h2>
  </div>

Apply follower power, then check the device node:

```bash
ls /dev/ttyACM*
```

Confirm the port works with LeRobot's finder (unplug and replug when
prompted):

```bash
lerobot-find-port
```

Export the values used by every later command — the same names as the
workstation:

```bash
export ROBOT_PORT=/dev/ttyACM0
export ROBOT_ID=so101_follower
```

If the port cannot be opened, fix the permissions on the Jetson:

```bash
sudo usermod -aG dialout $USER   # log out and back in once
sudo chmod 666 /dev/ttyACM*
```

</section>

## 15.4 Identify the Cameras

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>Two video nodes</span>
    <h2>15.4 Identify the Cameras</h2>
  </div>

```bash
ls /dev/video*
lerobot-find-cameras opencv
```

Map the preview images (file names contain the device index) and export —
the same variables as Chapter 8:

```bash
export CAMERA_GRIPPER=4
export CAMERA_EXTERNAL=6
```

Camera indices can change after a reboot or replug; re-run this check
before every deployment session.

</section>

## 15.5 Hardware Readiness Checklist

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>Before Chapter 16</span>
    <h2>15.5 Hardware Readiness Checklist</h2>
  </div>

- [ ] Jetson at the validated JetPack/L4T release, boots reliably;
- [ ] Follower enumerated at the expected `/dev/ttyACM*` node;
- [ ] Calibration files present under `~/.cache/huggingface/lerobot/calibration/`;
- [ ] Both cameras enumerate and preview at 640×480 and 30 FPS;
- [ ] `ROBOT_PORT`, `ROBOT_ID`, `CAMERA_GRIPPER`, `CAMERA_EXTERNAL` exported;
- [ ] Powered hub in use; no device drops under load.

Next: [Chapter 16 — Configure the GR00T Software Environment](Sim2Real_VLA_16.md).

</section>

</div>