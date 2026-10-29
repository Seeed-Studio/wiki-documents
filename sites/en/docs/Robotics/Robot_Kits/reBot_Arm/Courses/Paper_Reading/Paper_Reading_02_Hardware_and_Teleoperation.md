---
description: "Prepare for hands-on reproduction: computer and reBot Arm hardware checklists, LeRobot environment installation, camera and CAN configuration, and leader–follower teleoperation practice."
title: "How to Set Up reBot Arm Hardware and Teleoperation"
hide_title: true
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - SO101
  - LeRobot
  - Teleoperation
  - Paper Deep-Dive
  - Robotic Arm
  - Physical AI
  - Course
  - Tutorial
  - SO-ARM101
  - Hugging Face
  - Arm
  - Robotics
  - Hands-on Deployment
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_hardware_and_teleoperation
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-16'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/robotics/paper_reading_hardware_and_teleoperation/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-hardware-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · HANDS-ON DEPLOYMENT</span>
  <h1 id="paper-reading-hardware-title">How to Set Up reBot Arm Hardware and Teleoperation</h1>
  <p className="paper-reading-lead">Prepare the hardware and software, establish leader–follower teleoperation, and get ready for data collection, model training, and paper reproduction.</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Hardware checklist</li>
    <li>Environment setup</li>
    <li>Leader–follower setup</li>
    <li>Teleoperation practice</li>
  </ul>
</section>

## Hardware Configuration

### Computer: Choose One Platform

Choose one of the following computing platforms based on the equipment available to you.

| Required hardware | Link | Quantity | Notes |
| --- | --- | :---: | --- |
| Desktop or laptop | Provide your own | 1 | Native Ubuntu 22.04; RTX 4080 or better GPU with at least 12 GB VRAM; at least 16 GB system memory. |
| NVIDIA Jetson AGX Thor 128G | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/NVIDIAr-Jetson-AGX-Thortm-Developer-Kit-Bundle.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/i/m/image__5.png" alt="NVIDIA Jetson AGX Thor Developer Kit Bundle" loading="lazy" width="128" height="104" /><span>NVIDIA Jetson AGX Thor Developer Kit Bundle</span></a> | 1 | An alternative to the desktop/laptop option. |

### reBot Arm Hardware

| Required hardware | Link | Quantity | Notes |
| --- | --- | :---: | --- |
| reBot Arm B601 DM / RS | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/i/m/img_v3_0210p_aea42523-221d-4fb4-8730-9cb074a081ag_2.jpg" alt="reBot Arm B601-DM Assembled Bundle" loading="lazy" width="128" height="104" /><span>B601-DM assembled bundle</span></a><br /><a className="paper-reading-product-link" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/e/2/e26062401-gallery-2.jpg" alt="reBot Arm B601-RS Assembled Bundle" loading="lazy" width="128" height="104" /><span>B601-RS assembled bundle</span></a> | 1 | Choose DM or RS as the follower arm. Select the matching power adapter and table clamps in the bundle options. |
| reBot Arm 102 leader arm | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Star-Arm-102-p-6765.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/7/-/7-100004723-star-arm-102.jpg" alt="Star Arm 102 for reBot B601-DM&amp;RS Leader Arm" loading="lazy" width="128" height="104" /><span>Star Arm 102 leader arm</span></a><br /><a className="paper-reading-product-link" href="https://www.seeedstudio.com/AC-DC-Power-Adapter-DC5521-Male-12V-2A-1500mm-p-6839.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-313000002-ac-dc-power-adapter.jpg" alt="AC/DC Power Adapter 12V 2A 5-in-1" loading="lazy" width="128" height="104" /><span>12 V / 2 A power adapter</span></a> | 1 | Used for leader–follower teleoperation. The arm and power adapter are separate listings. |
| RGB USB Camera-100°-720P (wrist view) | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Camera-Module-OV9732-1MP-100-USB2-0-USB2-0-L38-W38-H16-05mm-p-6982.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100079619-gallery_img_1_1.png" alt="RGB USB Camera-100°-720P" loading="lazy" width="128" height="104" /><span>RGB USB Camera-100°-720P</span></a> | 1 | Mount on the robot wrist. |
| RGB USB Camera-100°-720P (fixed view) | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Camera-Module-OV9732-1MP-100-USB2-0-USB2-0-L38-W38-H16-05mm-p-6982.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100079619-gallery_img_1_1.png" alt="RGB USB Camera-100°-720P" loading="lazy" width="128" height="104" /><span>RGB USB Camera-100°-720P</span></a> | 1 | Provides a fixed external view. Uses the same camera model as the wrist view. |
| Wrist camera mount | [Mount model and instructions](https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/camera-mounts/README.md) | 1 | Print it yourself; if you do not have a printer, ask customer support about availability of a complimentary mount. |
| Third-person camera mount | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Robot-Arm-Camera-Mount-for-LeRobot-SO-10%26reBot-B601-p-7003.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/0/100006505-gallery_img_1.jpg" alt="Robot Arm Camera Mount for LeRobot SO-101 &amp; reBot B601" loading="lazy" width="128" height="104" /><span>Robot Arm Camera Mount for LeRobot SO-101 &amp; reBot B601</span></a> | 1 | Fixes the external camera position and angle. |

<div className="paper-reading-callout">

**Purchasing and assembly**

- To reduce the purchase cost, you can choose a kit and follow Seeed's detailed assembly instructions: [DM assembly](/rebot_b601_dm_getting_started/#step-1-assembly-guide) or [RS assembly](/rebot_b601_rs_getting_started/#assembly-guide).
- Power supplies shipped by Seeed use flame-retardant materials, which increases their cost. Alternatively, purchase a genuine Mean Well power supply and configure it to meet the requirements of your chosen arm.

</div>

### Seeed Experiment Sandbox (Optional)

The experiment sandbox is optional. You can also learn and reproduce experiments using shared datasets and models trained by other users.

<figure className="paper-reading-figure">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/platform_preparation/seeed-sandbox.jpg" alt="Seeed experiment sandbox with a reBot Arm" loading="lazy" />
  <figcaption>Seeed experiment sandbox (optional)</figcaption>
</figure>

---

## Software Environment

### Install LeRobot

Use **native Ubuntu 22.04**, rather than a virtual machine or WSL. Follow the installation guide for your arm model.

| Arm model | Installation guide |
| --- | --- |
| SO-ARM 101 | [Install LeRobot for SO-ARM 101](/lerobot_so100m_new/#install-lerobot) |
| reBot Arm DM | [Install LeRobot for reBot-DM](/rebot_arm_b601_dm_lerobot/#install-lerobot) |
| reBot Arm RS | [Install LeRobot for reBot-RS](/rebot_arm_b601_rs_lerobot/#install-lerobot) |

### Configure Cameras and CAN

Configure communication and cameras for your arm. SO-ARM 101 uses a serial connection; reBot DM / RS use CAN as described in their respective guides.

| Arm model | Communication setup | Camera setup |
| --- | --- | --- |
| SO-ARM 101 | [Serial connection, calibration, and teleoperation](/lerobot_so100m_new/#teleoperation) | [Add cameras](/lerobot_so100m_new/#add-cameras) |
| reBot Arm DM | [Software setup and calibration](/rebot_b601_dm_getting_started/#software-setup-and-calibration-workflow) | [Add cameras](/rebot_arm_b601_dm_lerobot/#add-cameras) |
| reBot Arm RS | [Software setup and calibration](/rebot_b601_rs_getting_started/#software-setup-and-calibration-workflow) | [Add cameras](/rebot_arm_b601_rs_lerobot/#add-cameras) |

---

## Leader–Follower Setup

### Follower and Leader

- **Leader**: operated by a person; its joint positions provide the teleoperation input.
- **Follower**: receives mapped control commands and follows the leader's motion.

Calibrate both arms before starting teleoperation. Check joint directions, motion ranges, and gripper opening and closing.

Related resources: [Follower and Leader (original Feishu document)](https://seeedstudio.feishu.cn/sync/CLA2dJJTcss5xPbBjwicny8nn8g) · [Wiki guide to leader–follower calibration and teleoperation](/robotics/rebot_physical_ai_course_chapter_11/).

### Control Frequency and Latency

How closely the follower tracks your hand depends on two things: how many times the forwarding loop runs per second (**frequency**) and the delay between your movement and the arm's response (**latency**).

#### Where Does Latency Come From, and Why Is It Unavoidable?

Reading leader joint positions, mapping them, sending CAN commands, executing follower movements, and reading back its state all take time. The figure below shows the sources of delay along this chain.

<figure className="paper-reading-figure">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/platform_preparation/teleoperation-latency.png" alt="reBot leader–follower teleoperation pipeline and its sources of latency" loading="lazy" />
  <figcaption>Sources of latency in leader–follower teleoperation</figcaption>
</figure>

#### What Is the Control Frequency? Can It Be Changed?

This section uses the **60 Hz** teleoperation configuration from the reBot guide: 60 cycles per second of “read leader → map → send CAN → read back,” with a time budget of about **16.7 ms** per cycle. Adjust it using the `fps` parameter in the teleoperate configuration.

- **The hardware loop determines the upper limit.** One cycle on this hardware already takes more than ten milliseconds; the practical limit is roughly 60–100 Hz. Setting a higher value may not increase the actual rate and can cause cycle-overrun warnings. Measure the results on your own hardware and configuration.
- **60 Hz is sufficient for the manual exercises here.** For grasping, transport, and placement, consistent sampling and execution matter more than simply increasing the rate.

---

## Hands-on Practice: Grasp, Transport, and Place

Stable teleoperation lets the arm move, but performing a task reliably takes deliberate practice. The quality of later demonstrations depends on your operating skill. Work through the following two levels.

### Exercise 1: Move Light Objects and Get a Feel for the Controls

Place a few lightweight blocks in the workspace and practice:

**Move above the target → Lower → Close the gripper → Lift**

**Goal**: complete 10 consecutive attempts without collisions or dropped objects. Perform each sequence smoothly, without hesitation.

### Exercise 2: Complete the Transport-and-Place Task

Perform the entire sequence:

**Grasp → Transport → Place in the designated container**

**Goal**: complete 10 consecutive attempts while keeping the starting and ending poses broadly consistent.

</div>
