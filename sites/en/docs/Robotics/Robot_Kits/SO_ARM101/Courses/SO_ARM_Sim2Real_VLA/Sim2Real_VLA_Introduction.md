---
description: "SO-ARM101 Sim-to-Real VLA Course — the Seeed × NVIDIA hands-on DLI-style curriculum migrated to the SO-ARM101: build the real lab, collect data, train Isaac GR00T N1.7, deploy to the arm and Jetson, with optional Isaac Sim and Cosmos augmentation."
title: SO-ARM101 Sim-to-Real VLA Course
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Sim-to-Real
  - Isaac Sim
  - LeRobot
  - Isaac GR00T
  - VLA
  - Teleoperation
  - Physical AI
  - Jetson
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_course
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_course/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × LeRobot × GR00T × Jetson · Advanced Course</span>
    <h2>SO-ARM101 Sim-to-Real VLA</h2>
    <p>
      The complete Seeed × NVIDIA Sim-to-Real curriculum, migrated to the
      SO-ARM101: build the real robot lab, teleoperate it to collect your
      own data, fine-tune Isaac GR00T N1.7, deploy on the physical follower
      and on Jetson — with optional Isaac Sim episodes and Cosmos
      augmentation.
    </p>
    <div className="hero-actions">
      <a href="#pipeline">Learning pipeline</a>
      <a href="#modules">Course structure</a>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#build">What you will build</a>
    </div>
  </div>
</section>

## Course Overview

<section id="pipeline" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>From an empty bench to a Jetson-deployed policy</h2>
  </div>

This course mirrors the reBot DLI curriculum article for article and adapts
it to the SO-ARM101 — the same embodiment NVIDIA's SO-101 workshop uses:

1. **Overview** — the workflow, LeRobot, Sim-to-Real, and the SO-ARM101
   hardware (Chapters 1–5);
2. **Build Your Robot Lab** — install the environment, write servo IDs
   (kit only — pre-built arms skip this), calibrate both arms, and build
   the studio: lightbox, brackets, prop positions, cameras (Chapters
   6–8);
3. **Get Your Own VLA Model** — collect real data, fine-tune Isaac GR00T
   N1.7, evaluate in the real environment, and optionally scale up with
   Isaac Sim episodes and Cosmos augmentation (Chapters 9–13);
4. **Deploy on Jetson** — flash the edge device, export target-specific
   TensorRT engines, and serve the policy to the follower (Chapters
   14–18);
5. **Reference** — every repository and document the course uses
   (Chapter 19).

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM101 kit" />
</div>

</section>

## Course Structure

<section id="modules" className="section-card">
  <div class="section-title">
    <span>DLI modules</span>
    <h2>Overview → Build Your Robot Lab → Get Your Own VLA Model → Jetson</h2>
  </div>

| Module | Chapters | Focus |
| --- | --- | --- |
| 1 · Overview | 1–5 | Course overview, LeRobot, Sim-to-Real, SO-ARM101, summary |
| 2 · Build Your Robot Lab | 6–8 | Module intro, prepare the arms (IDs + calibration), workspace |
| 3 · Get Your Own VLA Model | 9–11 | Collect real data, train GR00T N1.7, evaluate in the real environment |
| 3+ · Optional | 12–13 | Collect data from Isaac Sim, dataset augmentation with Cosmos |
| 4 · Deploy on Jetson | 14–18 | Jetson setup, hardware, GR00T env, assets, TensorRT inference |
| 5 · Reference | 19 | Repositories, products, documentation |

The real-robot path is the main line of the course. Isaac Sim appears only
as an optional accelerator, the way it is used in the
[Seeed × NVIDIA Sim-to-Real article](https://www.seeedstudio.com/sim-to-real-with-seeed-rebot-and-nvidia-isaac).

</section>

## Prerequisites

<section id="prerequisites" className="section-card">
  <div className="section-title">
    <span>Before you start</span>
    <h2>What you need</h2>
  </div>

| Requirement | Details |
| --- | --- |
| Workstation GPU | NVIDIA RTX with ≥ 8 GB VRAM for Chapters 9–12; a 24 GB+ GPU (RTX 5090 / RTX 6000 class) for GR00T fine-tuning |
| OS | Ubuntu 22.04 or later |
| Software | Isaac Sim 6.1 (Chapter 12 only), LeRobot environment (Chapter 7) |
| Robot | SO-ARM101 leader and follower — kit or pre-built; only the follower is strictly required |
| Cameras | Two USB cameras (wrist + external) |
| Edge device (Stage 4) | Jetson AGX Orin or AGX Thor with JetPack 7.2 |
| Disk | ~100 GB free across machines |

If you plan to let an AI assistant install the environment for you, copy
the setup skill file from the project repository — Chapter 6 links to it.

</section>

## What You Will Build

<section id="build" className="section-card">
  <div class="section-title">
    <span>Outcome</span>
    <h2>Deliverables after the nineteen chapters</h2>
  </div>

- A calibrated SO-ARM101 leader/follower pair — assembled or
  factory-pre-built, servo IDs written where needed;
- A recording studio: lightbox, rigid camera brackets, and a taped-down
  vial rack with marked prop positions;
- A real-world LeRobot Dataset v3 with dual-camera video streams;
- A fine-tuned Isaac GR00T N1.7 policy trained on your data, with optional
  sim-enhanced and Cosmos-augmented co-training sets;
- A closed-loop policy running on the physical follower via NVIDIA's
  real-robot evaluation stack;
- A target-specific TensorRT engine bundle and policy server on Jetson AGX
  Orin or Thor.

</section>

## Course Chapters

<section id="chapters" className="section-card">
  <div class="section-title">
    <span>Structure</span>
    <h2>Nineteen chapters across five modules</h2>
  </div>

| # | Chapter | Module |
| --- | --- | --- |
| 1 | Course Overview | 1 · Overview |
| 2 | LeRobot Background and the Community | 1 · Overview |
| 3 | What is Sim-to-Real? | 1 · Overview |
| 4 | Introduction of the SO-ARM101 | 1 · Overview |
| 5 | Summary | 1 · Overview |
| 6 | Build Your Robot Lab (Intro) | 2 · Build Your Robot Lab |
| 7 | Prepare the Robot Arm | 2 · Build Your Robot Lab |
| 8 | Building the Workspace | 2 · Build Your Robot Lab |
| 9 | Collect Data from the Real Environment | 3 · Get Your Own VLA Model |
| 10 | Train the GR00T N1.7 Policy | 3 · Get Your Own VLA Model |
| 11 | Evaluate in the Real Environment | 3 · Get Your Own VLA Model |
| 12 | Collect Data from Isaac Sim (Optional) | 3 · Optional |
| 13 | Datasets Augment (Optional) | 3 · Optional |
| 14 | Setup Your Jetson Edge Device | 4 · Deploy on Jetson |
| 15 | Connect the Robot Hardware | 4 · Deploy on Jetson |
| 16 | Configure the GR00T Software Environment | 4 · Deploy on Jetson |
| 17 | Prepare the Dataset and Model Assets | 4 · Deploy on Jetson |
| 18 | Run GR00T N1.7 TensorRT Inference | 4 · Deploy on Jetson |
| 19 | Reference | 5 · Reference |

Start with Chapter 1, or jump straight to Chapter 7 if the software
environment is already installed. If you only need the optional simulation
part, go directly to [Chapter 12](Sim2Real_VLA_12.md).

</section>

</div>