---
description: "SO-ARM101 Sim-to-Real VLA 课程第 3 章 —— 什么是 Sim-to-Real：定义、为什么重要、以及本课程要缩小的 Sim-to-Real 差距。"
title: 第 3 章 - 什么是 Sim-to-Real？
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Sim-to-Real
  - Isaac
  - 课程
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
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_3/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 1 · 第 3 章 · Overview</span>
    <h2>3. 什么是 Sim-to-Real？</h2>
    <p>
      在仿真中训练，在真实硬件上部署——并理解两者之间的差距，本课程的每一项
      实践技术都在缩小这个差距。
    </p>
    <div className="hero-actions">
      <a href="#defined">定义</a>
      <a href="#why">为什么重要</a>
      <a href="#gap">差距</a>
      <a href="#summary">小结</a>
    </div>
  </div>
</section>

## Sim-to-Real 的定义

<section id="defined" className="section-card">
  <div className="section-title">
    <span>定义</span>
    <h2>Sim-to-Real 的定义</h2>
  </div>

Sim-to-Real（仿真到现实）指在仿真中训练机器人策略，再部署到真实硬件上的
过程。

在现代机器人 AI 中，很大一部分训练在仿真中完成。与真实机器人相比，仿真可以
以低得多的成本生成海量数据，同时避免硬件磨损、降低实验风险。训练完成后，
目标就是把学到的策略迁移到物理机器人上，并让它在真实世界完成任务。

在本课程中，我们会使用 NVIDIA Isaac 仿真环境，结合遥操作与合成数据，训练
Isaac GR00T N1.7 这样的 Vision-Language-Action（VLA）模型，并最终把训练好
的策略部署到 SO-ARM101 上。

</section>

## 为什么 Sim-to-Real 重要

<section id="why" className="section-card">
  <div className="section-title">
    <span>数据经济学</span>
    <h2>为什么 Sim-to-Real 重要</h2>
  </div>

数据是机器人学习的基础，但大规模采集真实机器人数据往往昂贵而缓慢。

设想一个需要上万次演示或抓取的操作任务。在物理机器人上采集这些数据可能需要
数周，会带来硬件磨损，还会增加损坏机器人或环境的失败风险。而在仿真中，
大量虚拟机器人可以并行运行，持续、安全地产生数据。

因此，仿真已成为现代机器人开发的关键组成部分。许多最先进的机器人策略都是
先在仿真中训练，再迁移到真实硬件上。

机器人本身对迁移成败也起着重要作用。机器人的行为越精确、越可预测，仿真与
现实的差异就越小。SO-ARM101 非常适合本课程，因为它正是 NVIDIA SO-101
Workshop 所针对的本体：相同的关节配置、相同的校准约定，还有在同一本体上
训练的参考 checkpoint——这在你开始之前就消除了一整类迁移失配。

</section>

## Sim-to-Real 差距

<section id="gap" className="section-card">
  <div className="section-title">
    <span>差距</span>
    <h2>Sim-to-Real 差距</h2>
  </div>

尽管仿真技术已经非常先进，但它永远无法完美复刻真实世界。

仿真与现实之间的性能差异被称为 **Sim-to-Real 差距**。

例如，仿真相机往往无法完整呈现光照变化、运动模糊、镜头畸变或传感器噪声。
同样，仿真执行器通常比真实电机更理想化——真实电机存在摩擦、延迟等物理
限制。接触交互、可变形物体与环境变化也很难精确建模。

因此，一个在仿真中表现完美的策略，部署到真实机器人上仍可能表现挣扎。

缩小 Sim-to-Real 差距是机器人 AI 的核心挑战之一。本课程将实践遥操作数据
采集、仿真数据生成、数据增强以及基于 GR00T 的策略训练等技术，来提升真实
世界的表现。

</section>

## 小结

<section id="summary" className="section-card">
  <div className="section-title">
    <span>要点</span>
    <h2>小结</h2>
  </div>

Sim-to-Real 是现代机器人 AI 的核心工作流：机器人在仿真中高效学习，再把技能
应用到物理世界。

仿真极大地降低了训练与实验成本，但仿真与现实的差异永远存在。理解这些差异、
并学会缩小它们，是构建可靠、强大机器人系统的必经之路。

下一章：[第 4 章 —— SO-ARM101 介绍](cn_Sim2Real_VLA_04.md)。

</section>

</div>