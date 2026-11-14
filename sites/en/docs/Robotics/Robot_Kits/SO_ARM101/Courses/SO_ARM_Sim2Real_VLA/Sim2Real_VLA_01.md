---
description: "Chapter 1 of the SO-ARM101 Sim-to-Real VLA Course — course overview: the Seeed × NVIDIA hands-on curriculum from robot demonstrations and simulation to VLA post-training and real-world deployment."
title: Chapter 1 - Course Overview
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Physical AI
  - Sim-to-Real
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_1
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_1/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 1 · Chapter 1 · Overview</span>
    <h2>1. Course Overview</h2>
    <p>
      Seeed Studio collaborates with NVIDIA on a hands-on curriculum for
      developers: from robot demonstrations and simulation to VLA
      post-training and real-world deployment — built here around the
      SO-ARM101.
    </p>
    <div className="hero-actions">
      <a href="#workflow">Workflow</a>
      <a href="#task">The task</a>
      <a href="#platform">Platform</a>
    </div>
  </div>
</section>

## The Course Workflow

<section id="workflow" className="section-card">
  <div className="section-title">
    <span>End to end</span>
    <h2>The Course Workflow</h2>
  </div>

This course focuses on the complete development workflow of the SO-ARM101
robotic arm. It guides learners through hardware setup, data collection,
model training, simulation validation, and finally deployment and inference
— on the real arm and on Jetson edge devices. By combining LeRobot, NVIDIA
Isaac Sim, Isaac GR00T N1.7, and Jetson, the course builds a complete
experimental environment for robot learning and embodied AI.

Through this course, learners will understand how to:

- collect robotic-arm data via leader-follower teleoperation;
- train a Vision-Language-Action policy with Isaac GR00T N1.7 on that data;
- scale up with simulated episodes and data augmentation;
- evaluate the trained model in the real world;
- deploy the model on a Jetson device and run the task at the edge.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM101 kit" />
</div>

</section>

## The Demonstration Task

<section id="task" className="section-card">
  <div className="section-title">
    <span>Vial to rack</span>
    <h2>The Demonstration Task</h2>
  </div>

For demonstration purposes, this course uses a simple pick-and-place task:
**put the three vials into the vial rack**. The same task is used by
NVIDIA's SO-101 workshop, so your dataset stays compatible with NVIDIA's
reference datasets and checkpoints.

You can adjust the target task according to your own environment and
requirements — the pipeline (collect → train → deploy → evaluate) does not
change.

</section>

## What This Course Emphasizes

<section id="platform" className="section-card">
  <div className="section-title">
    <span>Reproducible platform</span>
    <h2>What This Course Emphasizes</h2>
  </div>

This course does not only focus on training and running a single model.
More importantly, it emphasizes how to build a **reproducible and
extensible** robotic experimental platform:

- a fixed dataset schema (six joint dimensions, two cameras, one task
  sentence) that works unchanged across the real robot, Isaac Sim, and
  Jetson;
- commands that were verified end to end on the SO-ARM101;
- the same tools as the reBot DLI course, so you can move between the two
  arms without relearning the pipeline.

Next: [Chapter 2 — LeRobot Background and the Community](Sim2Real_VLA_02.md).

</section>

</div>