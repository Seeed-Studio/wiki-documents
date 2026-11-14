---
description: "Chapter 2 of the SO-ARM101 Sim-to-Real VLA Course — LeRobot background and the community: why LeRobot, the Hub ecosystem, and the collect-train-deploy-evaluate cycle."
title: Chapter 2 - LeRobot Background and the Community
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_2
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_2/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 1 · Chapter 2 · Overview</span>
    <h2>2. LeRobot Background and the Community</h2>
    <p>
      LeRobot is the software foundation of this course: one framework for
      data collection, policy training, deployment, and evaluation — with a
      large community behind it.
    </p>
    <div className="hero-actions">
      <a href="#what">What is LeRobot</a>
      <a href="#why">Why LeRobot</a>
      <a href="#community">Community</a>
      <a href="#ready">Getting ready</a>
    </div>
  </div>
</section>

## What is LeRobot?

<section id="what" className="section-card">
  <div className="section-title">
    <span>Hugging Face</span>
    <h2>What is LeRobot?</h2>
  </div>

LeRobot is an open-source robotics framework developed by Hugging Face. It
provides a unified set of tools for robot data collection, policy training,
deployment, and evaluation.

</section>

## Why LeRobot?

<section id="why" className="section-card">
  <div className="section-title">
    <span>One pipeline</span>
    <h2>Why LeRobot?</h2>
  </div>

This course uses LeRobot as its primary software framework because it
provides a complete robot learning pipeline.

LeRobot integrates closely with the Hugging Face Hub, making it easy to
store, share, and reuse datasets. Community datasets can be downloaded
directly for training, while newly collected demonstrations can be uploaded
and shared with collaborators.

The framework also supports modern robot learning methods, including NVIDIA
Isaac GR00T and other Vision-Language-Action models. The same tools used for
data collection can later be used for policy training, deployment, and
evaluation.

As a result, the entire workflow follows a simple cycle:

**Collect → Train → Deploy → Evaluate → Iterate**

This allows developers to focus on robotics problems rather than
infrastructure.

</section>

## Community Resources

<section id="community" className="section-card">
  <div className="section-title">
    <span>Ecosystem</span>
    <h2>Community Resources</h2>
  </div>

One of the strengths of LeRobot is its growing ecosystem of community
resources.

The Hugging Face Hub hosts a large collection of robot datasets covering
different robot platforms and manipulation tasks. These datasets follow a
standardized format, making them easier to share and reuse across projects.

LeRobot also provides tools such as the Dataset Visualizer, which allows
users to inspect demonstrations, replay trajectories, and analyze robot
observations before training.

Together, these resources lower the barrier to entry for robot learning and
accelerate experimentation.

</section>

## Getting Ready for the Course

<section id="ready" className="section-card">
  <div className="section-title">
    <span>Foundation</span>
    <h2>Getting Ready for the Course</h2>
  </div>

Throughout this learning path, LeRobot will serve as the software foundation
for data collection, policy training, and real-world deployment on the
SO-ARM101. Chapter 7 installs the exact environment used by every later
chapter, including the Seeed LeRobot fork with SO-101 leader and follower
support.

Before moving on, we recommend reviewing the official LeRobot documentation.
Once the software environment is ready, we can begin building the complete
embodied-AI workflow in the following chapters.

</section>

## More Resources

<section className="section-card">
  <div className="section-title">
    <span>Links</span>
    <h2>More Resources</h2>
  </div>

- [LeRobot Documentation](https://huggingface.co/docs/lerobot)
- [Getting Started with SO-ARM101 in LeRobot | Seeed Studio Wiki](https://wiki.seeedstudio.com/lerobot_so100m/)
- [Beginner SO-ARM101 Course](https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_introduction/)

</section>

</div>