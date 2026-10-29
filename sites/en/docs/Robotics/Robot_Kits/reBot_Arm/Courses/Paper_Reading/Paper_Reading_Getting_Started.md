---
description: "Explore cutting-edge Physical AI research, break down key models and algorithms with Seeed robotic arms"
title: "Physical AI Paper Deep-Dive & Hands-on Deployment"
hide_title: true
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - SO101
  - Robotic Arm
  - Physical AI
  - Course
  - Tutorial
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Arm
  - Robotics
  - Paper Deep-Dive
  - Hands-on Deployment
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_getting_started
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-16'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/robotics/paper_reading_getting_started/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

  <aside className="paper-reading-support" aria-label="Support the open-source project">
    <div>
      <strong>Free courses, together in open source</strong>
      <p>This course is completely free. To encourage our work, please give our open-source robotic arm a star!</p>
    </div>
    <a href="https://github.com/Seeed-Projects/reBot-DevArm/" target="_blank" rel="noopener noreferrer">⭐ Star on GitHub</a>
  </aside>

  <section className="paper-reading-intro" aria-labelledby="paper-reading-title">
    <span className="paper-reading-eyebrow">SEEED STUDIO · AI ROBOTICS</span>
    <h1 id="paper-reading-title">Physical AI Paper Deep-Dive &amp; Hands-on Deployment</h1>
    <p className="paper-reading-lead">Explore cutting-edge Physical AI research, break down key models and algorithms with Seeed robotic arms</p>
    <p>A <strong>course that will always be free</strong>, carefully developed by the SeeedStudio AI Robotics team, paired with the <strong>100% open-source reBot robotic arm, available for commercial use and reproduction</strong>. Complete it and become the next robotics expert!</p>
    <ul className="paper-reading-badges" aria-label="Course features">
      <li>Always free</li>
      <li>100% open source · Commercial use</li>
      <li>Hands-on · Reproducible</li>
    </ul>
  </section>

  <div className="paper-reading-directory">
    <section className="paper-reading-directory-panel" aria-labelledby="paper-reading-hands-on-title">
      <h2 id="paper-reading-hands-on-title">Hands-on Deployment</h2>
      <p>Start with platform preparation and data collection, follow the steps to train and deploy ACT, then learn to switch from ACT to other policies and gradually master the reproduction workflow for different algorithms.</p>
      <ol className="paper-reading-directory-list">
        <li><a href="/robotics/paper_reading_hardware_and_teleoperation/">Hardware &amp; Software Setup</a></li>
        <li><a href="/robotics/hands_on_task_design/">Task Design &amp; Demonstration Planning</a></li>
        <li><a href="/robotics/hands_on_camera_recording/">Multi-View Data Collection</a></li>
        <li><a href="/robotics/hands_on_dataset_quality/">Data Quality: Structure, Synchronization &amp; Validation</a></li>
        <li><a href="/robotics/hands_on_act_training/">ACT Model Training</a></li>
        <li><a href="/robotics/hands_on_act_deployment/">On-Robot Deployment &amp; Performance Evaluation</a></li>
        <li><a href="/robotics/hands_on_algorithm_switching/">Policy Switching &amp; Task Execution</a></li>
      </ol>
    </section>

    <section className="paper-reading-directory-panel" aria-labelledby="paper-reading-papers-title">
      <h2 id="paper-reading-papers-title">Paper Deep-Dives</h2>
      <p>Read papers by topic, from basic imitation learning policies to vision-language-action models.</p>
      <h3>Part 1 · Action Chunking &amp; Multi-Task Policies</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/robotics/paper_reading_act/">ACT — Low-Cost Bimanual Manipulation</a></li>
      </ul>
      <h3>Part 2 · Lightweight VLA Models &amp; Efficient Deployment</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/robotics/paper_reading_smolvla/">SmolVLA — Affordable Vision-Language-Action Models</a></li>
        <li><a href="/robotics/paper_reading_evo1/">Evo-1 — Lightweight VLA</a></li>
      </ul>
      <h3>Part 3 · π Robot Foundation Models</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/robotics/paper_reading_pi0/">π₀ — General-Purpose Robot Control</a></li>
        <li><a href="/robotics/paper_reading_pi0_fast/">π₀-FAST — Efficient Action Tokenization</a></li>
        <li><a href="/robotics/paper_reading_pi05/">π₀.₅ — Open-World Generalization</a></li>
      </ul>
      <h3>Part 4 · Generalist VLA &amp; Cross-Embodiment Adaptation</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/robotics/paper_reading_gr00t_n1/">NVIDIA GR00T — Adaptation &amp; Fine-Tuning</a></li>
        <li><a href="/robotics/paper_reading_eo1/">EO-1 — Interleaved Multimodal Pre-Training</a></li>
        <li><a href="/robotics/paper_reading_wall_oss/">WALL-OSS — Embodied Reasoning &amp; Robot Control</a></li>
      </ul>
      <h3>Part 5 · World Models &amp; Video-Action Learning</h3>
      <span className="paper-reading-update-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M3 12a9 9 0 0 1 15.36-6.36L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.36 6.36L3 16M8 16H3v5" />
        </svg>
        Ongoing Updates
      </span>
      <h3>Part 6 · Unified Evaluation &amp; Research Summary</h3>
      <span className="paper-reading-update-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M3 12a9 9 0 0 1 15.36-6.36L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.36 6.36L3 16M8 16H3v5" />
        </svg>
        Ongoing Updates
      </span>
    </section>
  </div>

</div>
