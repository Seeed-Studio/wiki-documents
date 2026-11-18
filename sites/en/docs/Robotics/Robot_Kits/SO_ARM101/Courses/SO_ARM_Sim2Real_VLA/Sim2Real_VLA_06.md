---
description: "Chapter 6 of the SO-ARM101 Sim-to-Real VLA Course — Build Your Robot Lab intro: from theory to physical execution with strict kinematic and visual consistency between twin and world."
title: Chapter 6 - Build Your Robot Lab (Intro)
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Robot Lab
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_6
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_6/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 2 · Chapter 6 · Build Your Robot Lab</span>
    <h2>6. Build Your Robot Lab</h2>
    <p>
      Assemble your hardware, standardize the task environment, and establish
      your control loops — with strict consistency between the digital twin
      and the physical world.
    </p>
    <div className="hero-actions">
      <a href="#scope">Scope</a>
      <a href="#env">Environment</a>
      <a href="#chapters">Chapters</a>
    </div>
  </div>
</section>

## Scope of This Module

<section id="scope" className="section-card">
  <div className="section-title">
    <span>Theory to practice</span>
    <h2>Scope of This Module</h2>
  </div>

In this module, you will learn how to transition from theory to physical
execution by assembling your hardware, standardizing your task environment,
and establishing your control loops. Building an embodied-AI pipeline
requires strict kinematic and visual consistency between the digital twin
(simulation) and the physical world.

Specifically, you will unbox or assemble the **SO-ARM101 pair**, write servo
IDs (kit version only — pre-built arms skip this), and perform the critical
**joint calibration** to ensure precise real-world tracking. You will then
construct a standardized light-controlled workspace — the studio — with
camera brackets and fixed prop positions that match the visual assets used
in Isaac Sim. Finally, you will master direct hardware teleoperation, the
operational mode that real-world data collection relies on.

</section>

## The Software Environment

<section id="env" className="section-card">
  <div className="section-title">
    <span>Install once</span>
    <h2>The Software Environment</h2>
  </div>

The module assumes the LeRobot environment is ready. Chapter 7 walks
through it step by step (uv, Python 3.12, the Seeed LeRobot fork with
SO-101 support, and the Feetech SDK), and every later chapter reuses it.

If you would rather have an AI assistant install everything, the project
repository ships a machine-readable setup skill:

**`skills/install-soarm-env.md`** in
[github.com/yuyoujiang/rebot-arm-dli-isaacsim](https://github.com/yuyoujiang/rebot-arm-dli-isaacsim)

Copy the whole file to your AI assistant (Claude, ChatGPT, etc.) and ask it
to run the steps. It contains every command in executable order, the
expected output of each verification step, and a troubleshooting table
(missing `scservo_sdk`, serial permissions, GPU freezes, UDP port
collisions).

</section>

## Chapters in This Module

<section id="chapters" className="section-card">
  <div className="section-title">
    <span>Two chapters</span>
    <h2>Chapters in This Module</h2>
  </div>

1. [Chapter 7 — Prepare the Robot Arm](Sim2Real_VLA_07.md): servo IDs,
   calibration, and the first teleoperation;
2. [Chapter 8 — Building the Workspace](Sim2Real_VLA_08.md): lightbox,
   camera brackets, prop positions, and cameras.

</section>

</div>