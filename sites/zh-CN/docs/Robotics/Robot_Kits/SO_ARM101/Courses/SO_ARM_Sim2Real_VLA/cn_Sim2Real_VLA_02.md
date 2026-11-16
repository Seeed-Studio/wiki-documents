---
description: "SO-ARM101 Sim-to-Real VLA 课程第 2 章 —— LeRobot 背景与社区：为什么选择 LeRobot、Hub 生态、以及采集-训练-部署-评估的闭环。"
title: 第 2 章 - LeRobot 背景与社区
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - 课程
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
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_2/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 1 · 第 2 章 · Overview</span>
    <h2>2. LeRobot 背景与社区</h2>
    <p>
      LeRobot 是本课程的软件基座：数据采集、策略训练、部署与评估都在一个
      框架里完成——背后还有一个庞大的社区。
    </p>
    <div className="hero-actions">
      <a href="#what">什么是 LeRobot</a>
      <a href="#why">为什么选它</a>
      <a href="#community">社区资源</a>
      <a href="#ready">课程准备</a>
    </div>
  </div>
</section>

## 什么是 LeRobot？

<section id="what" className="section-card">
  <div className="section-title">
    <span>Hugging Face</span>
    <h2>什么是 LeRobot？</h2>
  </div>

LeRobot 是 Hugging Face 开发的开源机器人框架，为机器人数据采集、策略训练、
部署与评估提供了一整套统一工具。

</section>

## 为什么选择 LeRobot？

<section id="why" className="section-card">
  <div className="section-title">
    <span>一条流水线</span>
    <h2>为什么选择 LeRobot？</h2>
  </div>

本课程把 LeRobot 作为主软件框架，因为它提供了完整的机器人学习流水线。

LeRobot 与 Hugging Face Hub 深度集成，数据的存储、共享与复用都很方便：
社区数据集可以直接下载用于训练，新录制的演示数据也能上传分享给协作者。

框架还支持现代机器人学习方法，包括 NVIDIA Isaac GR00T 与其他
Vision-Language-Action 模型。用于数据采集的同一套工具，后续可以直接用于
策略训练、部署与评估。

因此整个工作流就是一个简单的循环：

**采集 → 训练 → 部署 → 评估 → 迭代**

开发者可以把精力放在机器人问题本身，而不是基础设施上。

</section>

## 社区资源

<section id="community" className="section-card">
  <div className="section-title">
    <span>生态</span>
    <h2>社区资源</h2>
  </div>

LeRobot 的一大优势是不断增长的社区生态。

Hugging Face Hub 上托管了大量机器人数据集，覆盖不同平台与操作任务。这些
数据集遵循标准化格式，便于跨项目共享与复用。

LeRobot 还提供了数据集可视化工具（Dataset Visualizer），可以在训练前检查
演示数据、回放轨迹、分析机器人观测。

这些资源共同降低了机器人学习的门槛，加快了实验迭代。

</section>

## 课程准备

<section id="ready" className="section-card">
  <div className="section-title">
    <span>基座</span>
    <h2>课程准备</h2>
  </div>

在本课程中，LeRobot 将作为 SO-ARM101 数据采集、策略训练与真实部署的软件
基座。第 7 章会逐步安装后续所有章节使用的环境，包括带 SO-101 主/从臂支持
的 Seeed LeRobot 分支。

建议先浏览 LeRobot 官方文档。环境就绪后，我们就可以在后续章节里搭建完整
的具身智能工作流了。

</section>

## 更多资源

<section className="section-card">
  <div className="section-title">
    <span>链接</span>
    <h2>更多资源</h2>
  </div>

- [LeRobot 文档](https://huggingface.co/docs/lerobot)
- [SO-ARM101 LeRobot 入门 | Seeed Studio Wiki](https://wiki.seeedstudio.com/cn/lerobot_so100m/)
- [SO-ARM101 入门课程](https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_introduction/)

</section>

</div>