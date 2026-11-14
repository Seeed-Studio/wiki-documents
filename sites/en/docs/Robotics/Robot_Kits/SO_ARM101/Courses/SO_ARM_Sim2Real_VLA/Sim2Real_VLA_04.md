---
description: "Chapter 4 of the SO-ARM101 Sim-to-Real VLA Course — introduction of the SO-ARM101: an open-source, low-cost 6-degree-of-freedom arm pair built around Feetech STS3215 bus servos."
title: Chapter 4 - Introduction of the SO-ARM101
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - STS3215
  - Hardware
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_4
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_4/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 1 · Chapter 4 · Overview</span>
    <h2>4. Introduction of the SO-ARM101</h2>
    <p>
      A low-cost, open-source robotic arm pair — leader and follower — built
      around Feetech STS3215 bus servos, aimed at lowering the barrier to
      embodied-AI sim-to-real learning.
    </p>
    <div className="hero-actions">
      <a href="#intro">Introduction</a>
      <a href="#specs">Specifications</a>
      <a href="#overview">Hardware overview</a>
      <a href="#apps">Applications</a>
      <a href="#resources">Resources</a>
    </div>
  </div>
</section>

## Introduction

<section id="intro" className="section-card">
  <div className="section-title">
    <span>Truly open</span>
    <h2>Introduction</h2>
  </div>

SO-ARM101 is a low-cost open-source robotic arm built around the concept of
"truly open-source". Its appearance and all open-source files — including
3D-printable structural parts, a detailed BOM list, and software compatible
with LeRobot and NVIDIA Isaac — are freely available to individual
developers, students, and educational institutions.

The course uses a **pair** of arms:

- the **leader** is the arm you move by hand; it only reads joint angles and
  sends them to software;
- the **follower** is the arm that executes; it mirrors the leader during
  teleoperation and later executes the trained VLA policy.

Because the follower is the embodiment NVIDIA's SO-101 workshop uses, every
dataset you record in this course is directly compatible with NVIDIA's
reference datasets, checkpoints, and evaluation tooling.

</section>

## Hardware Specifications

<section id="specs" className="section-card">
  <div className="section-title">
    <span>12 servos</span>
    <h2>Hardware Specifications</h2>
  </div>

| Parameter | SO-ARM101 |
|---|---|
| Degrees of Freedom | **6** per arm (5 arm joints + gripper) |
| Servos | Feetech STS3215 bus servos, 6 per arm (12 total) |
| Leader power | 7.4 V-class servos on a 5 V supply |
| Follower power (Pro kit) | 12 V supply |
| Control | Serial bus, one USB controller board per arm |
| Calibration | LeRobot `lerobot-calibrate`, mid-range convention |
| Ecosystems | LeRobot, NVIDIA Isaac Sim / Isaac GR00T, Feetech debugging tools |

Every joint is driven by one STS3215 serial bus servo; all six servos of an
arm share one 3-wire bus (GND, VCC, DATA) daisy-chained through the joints.
The gear ratio differs per joint — the follower and the leader's shoulder
use the high-ratio 1:345 servos where torque matters. The full ratio table
lives in [Beginner Chapter 4](https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_4/).

:::caution Power rules
Voltage must match the servo type: 5 V for the 7.4 V STS3215 versions, 12 V
for the 12 V versions. The leader always uses 7.4 V motors on a 5 V supply;
on the Pro kit the follower uses 12 V. Mixing the supplies burns servos.
The USB cable carries data only — both power and USB must be connected.
:::

</section>

## Kit or Pre-Built

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Two ways to buy</span>
    <h2>Kit or Pre-Built</h2>
  </div>

- **Kit version**: contains servo sets, control boards, and cables; you
  print the structural parts yourself (or buy them pre-printed) and assemble.
  Servo IDs must be written with `lerobot-setup-motors` — Chapter 7 covers
  this.
- **Pre-assembled version (整机)**: assembled and servo-ID-configured at the
  factory. You skip assembly and ID writing entirely and start at
  calibration.

Product links:

- [SO-ARM101 Pro kit](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html)
- [SO-ARM100 kit](https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html)

</section>

## Applications

<section id="apps" className="section-card">
  <div className="section-title">
    <span>Where it fits</span>
    <h2>Applications</h2>
  </div>

### Education and Embodied-AI Development

The SO-ARM101 is designed for teaching and embodied-AI experiments: the
leader-follower pair records human demonstrations, LeRobot turns them into
datasets, and Isaac GR00T fine-tunes a VLA policy on top. The low cost makes
it practical to equip a whole classroom or lab.

### Teleoperation and Data Collection

With the LeRobot ecosystem, the pair enables remote control, demonstration
recording, and dataset management — the foundation of every imitation
learning and VLA pipeline in this course.

### Research and Prototyping

Open software and hardware interfaces let researchers customize tasks,
swap end-effectors, and validate sim-to-real ideas quickly before moving to
larger platforms.

</section>

## Resources

<section id="resources" className="section-card">
  <div className="section-title">
    <span>Links</span>
    <h2>Resources</h2>
  </div>

- [Beginner SO-ARM101 Course](https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_introduction/)
- [Getting Started with SO-ARM101 in LeRobot](https://wiki.seeedstudio.com/lerobot_so100m/)
- [NVIDIA Sim-to-Real SO-101 Workshop](https://docs.nvidia.com/learning/physical-ai/sim-to-real-so-101/latest/index.html)

Next: [Chapter 5 — Summary](Sim2Real_VLA_05.md).

</section>

</div>