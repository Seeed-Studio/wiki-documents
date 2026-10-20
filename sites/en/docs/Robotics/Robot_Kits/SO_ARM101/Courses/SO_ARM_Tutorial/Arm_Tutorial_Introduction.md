---
description: "SO-ARM Physical AI Beginner's Course — a free, hands-on guide to building and learning with the open-source SO-ARM100 / SO-ARM101 robotic arm. All four stages and 22 chapters are published, covering setup and assembly, imitation learning with LeRobot, double-arm training, VLA with Isaac GR00T, and no-code VLA with SenseCraft Robotics."
title: SO-ARM Physical AI Beginner's Course
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM100
  - SO-ARM101
  - LeRobot
  - Robotic Arm
  - Physical AI
  - Course
  - Tutorial
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_introduction
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_introduction/
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × Physical AI · All 4 stages published</span>
    <h2>4 Stages, 22 Chapters — free and hands-on</h2>
    <p>
      A free, hands-on guide to building and learning with the open-source SO-ARM100 / SO-ARM101
      robotic arm. The published chapters take you from basic concepts, assembly and servo control,
      through imitation learning with LeRobot and double-arm training, to VLA fine-tuning with
      Isaac GR00T — and finish with a no-code VLA path on the SenseCraft Robotics platform.
    </p>
    <div className="hero-actions">
      <a href="#structure">Course structure</a>
      <a href="#principles">Course design</a>
      <a href="#community">Community</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Course at a glance</strong>
    <span>Written and shared for free by the Seeed robotics team.</span>
    <span>Pairs with the open-source SO-ARM100 / SO-ARM101 leader-follower arm kits.</span>
    <span><strong>All 4 stages published</strong> (Chapters 1–22): basics and hardware, assembly and servo control, imitation learning and double-arm training, GR00T VLA and no-code SenseCraft VLA.</span>
    <span>The course is complete — all 22 chapters are on the wiki.</span>
  </div>
</section>

<GitHubStarButton owner="TheRobotStudio" repo="SO-ARM100" />

:::tip
This course was created and shared for free by the Seeed Studio AI Robotics team, to give robotics learners, students, job seekers, and makers a clear and systematic learning path. You are welcome to learn from it and share it with others, but unauthorized copying, commercial redistribution, or misuse of the content is prohibited — the copyright belongs to Seeed Studio (Shenzhen) Co., Ltd.

It is built around <strong>SO-ARM100 / SO-ARM101</strong>, the open-source leader-follower robotic arm originally designed by <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer">TheRobotStudio</a> and made into complete kits by Seeed Studio, and it combines theory with hands-on practice to cover robot arm control, the LeRobot imitation-learning ecosystem, and modern VLA-based embodied AI. The course is completely free — if you find it useful, please support the project by starring <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer">SO-ARM100 on GitHub</a> ⭐, where the STL files and other open-source resources are also available. Experienced users can go straight to our <a href="https://wiki.seeedstudio.com/robotics_page/" target="_blank" rel="noopener noreferrer">Robotics Wiki</a> for tutorials and examples. The focus is practical understanding rather than deep mathematical derivation, so you can build a solid foundation quickly and prepare for more advanced study. Stage 2 assembles and configures the arms step by step; Stage 3 walks the full LeRobot loop — calibration, teleoperation, datasets, ACT training, real-robot inference — and closes with an elective double-arm chapter; Stage 4 first explains VLA theory and GR00T architecture, then fine-tunes GR00T on an SO-ARM dataset, and finishes with the no-code SenseCraft Robotics path for readers without a training GPU.
:::

<section id="community" className="section-card">
  <div className="section-title">
    <span>Community</span>
    <h2>Community Groups</h2>
  </div>

<div style={{display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap'}}>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-01.png" alt="Facebook group QR code" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Facebook</p>
  </div>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-02.png" alt="Discord group logo" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Discord</p>
  </div>
</div>

</section>

<section id="principles" className="section-card">
  <div className="section-title">
    <span>Design</span>
    <h2>Course Design Principles</h2>
  </div>

This course uses the SO-ARM100 / SO-ARM101 leader-follower kits as practical platforms, combining robotic arm theory, robotics learning theory, and real hardware practice. The course outline is as follows:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM100 / SO-ARM101 kit" />
</div>

</section>

<section id="structure" className="section-card">
  <div className="section-title">
    <span>Structure</span>
    <h2>Course Structure</h2>
  </div>

### Stage 1: Basic Concepts and Equipment Preparation

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_1">
    <span className="course-index">1</span>
    <div className="course-path-copy">
      <strong>Getting to Know Robots and Physical AI</strong>
      <span>Chapter 1</span>
    </div>
    <span className="course-tag">Theory</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_2">
    <span className="course-index">2</span>
    <div className="course-path-copy">
      <strong>Getting to Know SO-ARM Hardware and the Open-Source Project</strong>
      <span>Chapter 2</span>
    </div>
    <span className="course-tag">Theory &amp; Practice</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_3">
    <span className="course-index">3</span>
    <div className="course-path-copy">
      <strong>Hardware Selection for Subsequent Courses</strong>
      <span>Chapter 3</span>
    </div>
    <span className="course-tag">Theory &amp; Practice</span>
  </a>
</div>

### Stage 2: SO-ARM Assembly and Basic Control

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_4">
    <span className="course-index">4</span>
    <div className="course-path-copy">
      <strong>Fundamentals of Robotic Arms and Bus Servos</strong>
      <span>Chapter 4</span>
    </div>
    <span className="course-tag">Theory</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_5">
    <span className="course-index">5</span>
    <div className="course-path-copy">
      <strong>Software Environment Setup</strong>
      <span>Chapter 5</span>
    </div>
    <span className="course-tag">Practice</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_6">
    <span className="course-index">6</span>
    <div className="course-path-copy">
      <strong>Configure Motors and Assemble the Arms</strong>
      <span>Chapter 6</span>
    </div>
    <span className="course-tag">Practice</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_7">
    <span className="course-index">7</span>
    <div className="course-path-copy">
      <strong>Servo Debugging with the Steering Gear Tool</strong>
      <span>Chapter 7</span>
    </div>
    <span className="course-tag">Practice</span>
  </a>
</div>

### Stage 3: Imitation Learning and LeRobot

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_8">
    <span className="course-index">8</span>
    <div className="course-path-copy">
      <strong>Foundations of Robot Learning and Imitation Learning</strong>
      <span>Chapter 8</span>
    </div>
    <span className="course-tag">Theory &amp; Practice</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_9">
    <span className="course-index">9</span>
    <div className="course-path-copy">
      <strong>LeRobot and SO-ARM System Architecture</strong>
      <span>Chapter 9</span>
    </div>
    <span className="course-tag">Theory</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_10">
    <span className="course-index">10</span>
    <div className="course-path-copy">
      <strong>Leader and Follower Calibration and Teleoperation</strong>
      <span>Chapter 10</span>
    </div>
    <span className="course-tag">Practice</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_11">
    <span className="course-index">11</span>
    <div className="course-path-copy">
      <strong>Robot Datasets and Task Design</strong>
      <span>Chapter 11</span>
    </div>
    <span className="course-tag">Theory</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_12">
    <span className="course-index">12</span>
    <div className="course-path-copy">
      <strong>Camera Configuration and LeRobot Data Collection</strong>
      <span>Chapter 12</span>
    </div>
    <span className="course-tag">Practice</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_13">
    <span className="course-index">13</span>
    <div className="course-path-copy">
      <strong>Dataset Structure and Quality Inspection</strong>
      <span>Chapter 13</span>
    </div>
    <span className="course-tag">Theory &amp; Practice</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_14">
    <span className="course-index">14</span>
    <div className="course-path-copy">
      <strong>ACT Model and Action Chunking</strong>
      <span>Chapter 14</span>
    </div>
    <span className="course-tag">Theory</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_15">
    <span className="course-index">15</span>
    <div className="course-path-copy">
      <strong>Training Your First ACT Policy</strong>
      <span>Chapter 15</span>
    </div>
    <span className="course-tag">Practice</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_16">
    <span className="course-index">16</span>
    <div className="course-path-copy">
      <strong>Real-Robot Inference, Evaluation, and Data Iteration</strong>
      <span>Chapter 16</span>
    </div>
    <span className="course-tag">Theory &amp; Practice</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_17">
    <span className="course-index">17</span>
    <div className="course-path-copy">
      <strong>Double-Arm SO-ARM Training</strong>
      <span>Chapter 17</span>
    </div>
    <span className="course-tag">Elective</span>
  </a>
</div>

### Stage 4: VLA — Isaac GR00T and No-Code SenseCraft

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_18">
    <span className="course-index">18</span>
    <div className="course-path-copy">
      <strong>Multimodal Learning and VLA Basics</strong>
      <span>Chapter 18</span>
    </div>
    <span className="course-tag">Theory</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_19">
    <span className="course-index">19</span>
    <div className="course-path-copy">
      <strong>Robot Embodiment and GR00T System Architecture</strong>
      <span>Chapter 19</span>
    </div>
    <span className="course-tag">Theory</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_20">
    <span className="course-index">20</span>
    <div className="course-path-copy">
      <strong>Preparing the SO-ARM VLA Dataset</strong>
      <span>Chapter 20</span>
    </div>
    <span className="course-tag">Practice</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_21">
    <span className="course-index">21</span>
    <div className="course-path-copy">
      <strong>Fine-tuning the SO-ARM with Isaac GR00T</strong>
      <span>Chapter 21</span>
    </div>
    <span className="course-tag">Practice</span>
  </a>
  <a className="course-path-item" href="/robotics/soarm_physical_ai_course_chapter_22">
    <span className="course-index">22</span>
    <div className="course-path-copy">
      <strong>No-Code VLA with SenseCraft Robotics</strong>
      <span>Chapter 22</span>
    </div>
    <span className="course-tag">Practice</span>
  </a>
</div>

</section>

</div>
