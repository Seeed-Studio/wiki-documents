---
description: "如何在 reBot Arm 与 SO-ARM101 上运行 Physical AI 论文：Seeed 论文精读系列逐篇拆解 Pi0、Pi0.5、GR00T、ACT、SmolVLA 等模型，并配合 LeRobot 带你动手复现。"
title: 如何在 reBot Arm 与 SO-ARM101 上运行 Physical AI 论文
hide_title: true
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - SO101
  - 机械臂
  - 具身智能
  - 课程
  - 教程
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Arm
  - Robotics
  - 论文精读
  - 手把手复现
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
url: https://wiki.seeedstudio.com/cn/robotics/paper_reading_getting_started/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

  <aside className="paper-reading-support" aria-label="支持开源项目">
    <div>
      <strong>免费课程，开源同行</strong>
      <p>本课程完全免费，如果想对我们的付出给予鼓励，请帮我们的开源机械臂点上你的小星星！</p>
    </div>
    <a href="https://github.com/Seeed-Projects/reBot-DevArm/" target="_blank" rel="noopener noreferrer">⭐ 在 GitHub 点亮 Star</a>
  </aside>

  <section className="paper-reading-intro" aria-labelledby="paper-reading-title">
    <span className="paper-reading-eyebrow">SEEED STUDIO · AI ROBOTICS</span>
    <h1 id="paper-reading-title">如何在 reBot Arm 与 SO-ARM101 上运行 Physical AI 论文</h1>
    <p className="paper-reading-lead">跨专业学习机器人，刚读研想做技术储备，准备找工作增加知识面，想要做自己的项目加速落地，不用到处收集资料啦！</p>
    <p>SeeedStudio AI Robotics团队精心打磨的<strong>永远免费课程</strong>，配合<strong>100%完全开源可商用、可复现的reBot机械臂</strong>。学完这个，你就是下一个大佬！</p>
    <ul className="paper-reading-badges" aria-label="课程特点">
      <li>永远免费</li>
      <li>100% 开源 · 可商用</li>
      <li>动手实践 · 可复现</li>
    </ul>
  </section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ 免代码 · 免配环境</span>
    <p className="sensecraft-banner__title">不想装环境、不想写代码？一个软件就能跑 reBot Arm 与 LeRobot</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics 是 Seeed 面向 SO-ARM101、reBot Arm 102 + B601-RS / B601-DM 的免代码平台。在引导式界面里完成设备连接、标定、数据采集、模型训练与推理验证 —— 不需要配 Python 环境，也不需要敲命令行。</p>
    <ul className="sensecraft-banner__points">
      <li>✅ 6 步引导式流程</li>
      <li>✅ 云端训练 · 本地无需 GPU</li>
      <li>✅ Windows / macOS 客户端</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/zh?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">前往 SenseCraft Robotics ↗</a>
    <a className="sensecraft-banner__link" href="/cn/sensecraft_robotics/">软件使用教程</a>
  </div>
</div>

  <div className="paper-reading-directory">
    <section className="paper-reading-directory-panel" aria-labelledby="paper-reading-hands-on-title">
      <h2 id="paper-reading-hands-on-title">手把手复现</h2>
      <p>从平台准备、数据采集入手，手把手完成 ACT 的训练与部署，再学习如何从 ACT 切换到其他策略，逐步掌握不同算法的复现流程。</p>
      <ol className="paper-reading-directory-list">
        <li><a href="/cn/robotics/paper_reading_hardware_and_teleoperation/">软件设置和硬件</a></li>
        <li><a href="/cn/robotics/hands_on_task_design/">设计第一个模仿学习任务</a></li>
        <li><a href="/cn/robotics/hands_on_camera_recording/">相机配置与数据录制</a></li>
        <li><a href="/cn/robotics/hands_on_dataset_quality/">数据集结构与质量检查</a></li>
        <li><a href="/cn/robotics/hands_on_act_training/">训练 ACT 模型</a></li>
        <li><a href="/cn/robotics/hands_on_act_deployment/">部署 ACT 模型</a></li>
        <li><a href="/cn/robotics/hands_on_algorithm_switching/">从 ACT 切换到其他策略（reBot / SO101）</a></li>
      </ol>
    </section>

    <section className="paper-reading-directory-panel" aria-labelledby="paper-reading-papers-title">
      <h2 id="paper-reading-papers-title">论文精读</h2>
      <p>从模仿学习基础策略到视觉语言动作模型，按主题阅读论文。</p>
      <h3>第一部分：模仿学习基础策略</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/cn/robotics/paper_reading_act/">ACT 论文精读</a></li>
      </ul>
      <h3>第二部分：轻量级 VLA</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/cn/robotics/paper_reading_smolvla/">SmolVLA 论文精读</a></li>
        <li><a href="/cn/robotics/paper_reading_evo1/">Evo-1 论文精读</a></li>
      </ul>
      <h3>第三部分：π 系列机器人基础模型</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/cn/robotics/paper_reading_pi0/">π0 论文精读</a></li>
        <li><a href="/cn/robotics/paper_reading_pi0_fast/">FAST / π0-FAST 论文精读</a></li>
        <li><a href="/cn/robotics/paper_reading_pi05/">π0.5 论文精读</a></li>
      </ul>
      <h3>第四部分：主流通用 VLA</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/cn/robotics/paper_reading_gr00t_n1/">GR00T N1 论文精读</a></li>
        <li><a href="/cn/robotics/paper_reading_eo1/">EO-1 论文精读</a></li>
        <li><a href="/cn/robotics/paper_reading_wall_oss/">WALL-OSS 论文精读</a></li>
      </ul>
      <h3>第五部分：世界模型与 Video-Action</h3>
      <span className="paper-reading-update-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M3 12a9 9 0 0 1 15.36-6.36L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.36 6.36L3 16M8 16H3v5" />
        </svg>
        持续更新
      </span>
      <h3>第六部分：统一评测与研究总结</h3>
      <span className="paper-reading-update-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M3 12a9 9 0 0 1 15.36-6.36L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.36 6.36L3 16M8 16H3v5" />
        </svg>
        持续更新
      </span>
    </section>
  </div>

</div>
