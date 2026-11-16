---
description: Chapter 3 of the SO-ARM Physical AI Beginner's Course — the hands-on hardware list required for each stage, including main control units, the SO-ARM kit, cameras, and optional depth cameras.
title: Chapter 3 - Hardware Selection for Courses
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM100
  - SO-ARM101
  - Robotic Arm
  - Hardware
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_3
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_3/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 1 · Chapter 3 · Theory &amp; Practice</span>
    <h2>3. Hardware Selection for Subsequent Courses</h2>
    <p>
      Chapter 3 of the SO-ARM Physical AI Beginner's Course — the hands-on hardware list
      required for each stage, including main control units, the SO-ARM kit, cameras,
      and optional depth cameras.
    </p>
    <div className="hero-actions">
      <a href="#hardware-selection">Hardware list</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>What you will need</strong>
    <span>A main control device (Ubuntu x86 or Jetson) for all chapters.</span>
    <span>One SO-ARM kit — it already contains the leader and follower arms.</span>
    <span>Two USB cameras for the imitation-learning and VLA stages.</span>
    <span>An NVIDIA GPU (or cloud / no-code platform) for training stages.</span>
  </div>
</section>

## 3.1 Hardware Selection for Subsequent Courses

<section id="hardware-selection" className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>3.1 Hardware Selection for Subsequent Courses</h2>
  </div>

This section introduces the hands-on hardware list required for each stage. Students can purchase according to their own situation.

Throughout the course, you will use your own computer as the algorithm deployment device. It can be an Ubuntu x86 machine, a Mac, or a Jetson. However, remember **not to use WSL or a virtual-machine Ubuntu on Windows**, otherwise you will spend a great deal of effort solving bugs and reduce your learning efficiency.

### Main Control Unit

All chapters require a main control device as your code deployment endpoint. Below are our recommended devices and systems:

| Required Hardware | Link | Quantity | Notes | Chapters Covered |
| :--- | :--- | :---: | :--- | :--- |
| Desktop or Laptop | - | 1 | Ubuntu 22.04 native system, CUDA 12+, Python 3.12, Torch 2.6+; for training, an NVIDIA GPU with 12GB+ VRAM (e.g. RTX 4080) and 16GB+ RAM is recommended | All chapters |
| reComputer Robotics J4012 (Jetson Orin) | [Bazaar](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 1 | JetPack 6.0 / 6.1 (JetPack 6.2 is not supported yet) | Stage 2, Stage 3 |
| NVIDIA Jetson AGX Thor 128G | [Bazaar](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 1 | For GR00T N1.5 inference in Stage 4 | Stage 2, Stage 3, Stage 4 |

:::tip
If you do not have a training GPU, you can still finish the course: train small policies on a free cloud notebook (e.g. Google Colab), fine-tune GR00T on NVIDIA Brev, or use the no-code cloud training in Chapter 22 (SenseCraft Robotics).
:::

### Stage 2: SO-ARM Assembly and Basic Control

| Required Hardware | Link | Quantity | Notes |
| :--- | :--- | :---: | :--- |
| SO-ARM101 kit (Leader + Follower) | [SO-ARM101 Pro kit](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html)<br/>[SO-ARM100 kit](https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html) | 1 | - Kit version: contains servo sets, control boards and cables; print the structural parts yourself or buy them pre-printed<br/>- Pre-assembled version: skip the assembly steps in Chapter 6<br/>- Note the Standard (5V) vs. Pro (Leader 5V / Follower 12V) power rules |

### Stage 3: Imitation Learning and LeRobot

| Required Hardware | Link | Quantity | Notes |
| :--- | :--- | :---: | :--- |
| SO-ARM101 kit (Leader + Follower) | [Bazaar](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) | 1 | Same kit as Stage 2 |
| 32 × 32 mm USB camera | - | 2 | Two views (front + side, or top + gripper) are required for data collection; the kit includes one, prepare a second separately |
| Mouse mat / desk mat | - | 1 | Protects and stabilizes the work surface; makes object placement repeatable |

### Stage 4: VLA — Isaac GR00T and No-Code SenseCraft

| Required Hardware | Link | Quantity | Notes |
| :--- | :--- | :---: | :--- |
| SO-ARM101 kit (Leader + Follower) | [Bazaar](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) | 1 | Same kit as Stage 2 |
| 32 × 32 mm USB camera | - | 2 | Camera keys must stay consistent between dataset and inference |
| Training GPU (or cloud) | - | 1 | GR00T fine-tuning needs ~25GB VRAM (Ampere or newer, e.g. RTX 4090 / A6000); V100 is not supported. Alternatives: NVIDIA Brev cloud, or the no-code path in Chapter 22 |
| NVIDIA Jetson AGX Thor (optional, for edge inference) | [Bazaar](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 1 | Runs the fine-tuned GR00T N1.5 inference service on the edge |

### Optional Upgrades

| Required Hardware | Link | Quantity | Notes |
| :--- | :--- | :---: | :--- |
| Orbbec Gemini 2 depth camera | [Bazaar](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html) | 1 | Optional RGB-D perception for camera chapters |
| Soft gripper print files | [soarm_soft_gripper](https://github.com/xiehuangbao888/soarm_soft_gripper.git) | - | TPU fingers for soft, fragile, or irregular objects |

</section>

</div>
