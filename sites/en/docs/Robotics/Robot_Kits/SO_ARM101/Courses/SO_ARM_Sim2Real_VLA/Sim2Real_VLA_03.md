---
description: "Chapter 3 of the SO-ARM101 Sim-to-Real VLA Course — what is Sim-to-Real: the definition, why it matters, and the sim-to-real gap you will learn to close."
title: Chapter 3 - What is Sim-to-Real?
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Sim-to-Real
  - Isaac
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_3
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_3/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 1 · Chapter 3 · Overview</span>
    <h2>3. What is Sim-to-Real?</h2>
    <p>
      Train in simulation, deploy on real hardware — and understand the gap
      between the two that every practical technique in this course works to
      close.
    </p>
    <div className="hero-actions">
      <a href="#defined">Definition</a>
      <a href="#why">Why it matters</a>
      <a href="#gap">The gap</a>
      <a href="#summary">Summary</a>
    </div>
  </div>
</section>

## Sim-to-Real Defined

<section id="defined" className="section-card">
  <div className="section-title">
    <span>Definition</span>
    <h2>Sim-to-Real Defined</h2>
  </div>

Sim-to-Real (Simulation-to-Reality) refers to the process of training a
robot policy in simulation and deploying it onto real-world hardware.

In modern robotics AI, a large portion of training is often performed in
simulation. Compared with real robots, simulation can generate large amounts
of data at a much lower cost, while avoiding hardware wear and reducing
experimental risks. Once training is complete, the goal is to transfer the
learned policy to a physical robot and have it perform the same task
successfully in the real world.

Throughout this learning path, we will use NVIDIA Isaac simulation
environments, combine teleoperation and synthetic data, train
Vision-Language-Action (VLA) models such as Isaac GR00T N1.7, and ultimately
deploy the trained policies onto the SO-ARM101.

</section>

## Why Sim-to-Real Matters

<section id="why" className="section-card">
  <div className="section-title">
    <span>Data economics</span>
    <h2>Why Sim-to-Real Matters</h2>
  </div>

Data is the foundation of robot learning, but collecting large-scale
real-world robot data is often expensive and time-consuming.

Consider a manipulation task that requires tens of thousands of
demonstrations or grasping attempts. Collecting this data on a physical
robot could take weeks, introduce hardware wear, and increase the risk of
failures that may damage the robot or its environment. In simulation,
however, many virtual robots can run in parallel, generating data
continuously and safely.

For this reason, simulation has become a key component of modern robotics
development. Many state-of-the-art robot policies are first trained in
simulation before being transferred to real hardware.

The robot itself also plays an important role in successful transfer. The
more precise and predictable a robot's behavior is, the smaller the
difference between simulation and reality becomes. The SO-ARM101 is a good
fit for this course because it is the exact embodiment NVIDIA's SO-101
workshop targets: the same joint configuration, the same calibration
convention, and reference checkpoints trained on the same embodiment —
which removes one whole class of transfer mismatch before you start.

</section>

## The Sim-to-Real Gap

<section id="gap" className="section-card">
  <div className="section-title">
    <span>The gap</span>
    <h2>The Sim-to-Real Gap</h2>
  </div>

Although simulation technology has advanced significantly, it can never
perfectly reproduce the real world.

The performance difference between simulation and reality is known as the
**Sim-to-Real Gap**.

For example, simulated cameras often do not capture the full effects of
lighting variation, motion blur, lens distortion, or sensor noise.
Similarly, simulated actuators are usually more idealized than real motors,
which experience friction, latency, and other physical limitations. Contact
interactions, deformable objects, and environmental variations are also
difficult to model accurately.

As a result, a policy that performs perfectly in simulation may still
struggle when deployed on a real robot.

Reducing the sim-to-real gap is one of the central challenges in robotics
AI. Throughout this course, we will explore practical techniques such as
teleoperation data collection, simulation-based data generation, dataset
augmentation, and GR00T-based policy training to improve real-world
performance.

</section>

## Summary

<section id="summary" className="section-card">
  <div className="section-title">
    <span>Takeaway</span>
    <h2>Summary</h2>
  </div>

Sim-to-Real is a core workflow in modern robotics AI. It enables robots to
learn efficiently in simulation and apply those skills in the physical
world.

While simulation dramatically reduces the cost of training and
experimentation, differences between simulation and reality always exist.
Understanding these differences — and learning how to minimize them — is an
essential step toward building reliable and capable robotic systems.

Next: [Chapter 4 — Introduction of the SO-ARM101](Sim2Real_VLA_04.md).

</section>

</div>