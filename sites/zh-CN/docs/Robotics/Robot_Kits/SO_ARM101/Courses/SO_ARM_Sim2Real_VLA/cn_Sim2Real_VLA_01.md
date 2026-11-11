---
description: "SO-ARM101 Sim-to-Real VLA 课程第 1 章 —— 课程概览：Seeed 携手 NVIDIA 推出的实战课程，从机器人遥操作与仿真到 VLA 后训练与真实部署。"
title: 第 1 章 - 课程概览
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - 具身智能
  - Sim-to-Real
  - 课程
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
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_1/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 1 · 第 1 章 · Overview</span>
    <h2>1. 课程概览</h2>
    <p>
      Seeed Studio 携手 NVIDIA，为开发者推出全新实战课程：从机器人遥操作与
      仿真，到 VLA 策略后训练与真实世界部署——本课程围绕 SO-ARM101 构建。
    </p>
    <div className="hero-actions">
      <a href="#workflow">工作流</a>
      <a href="#task">演示任务</a>
      <a href="#platform">平台</a>
    </div>
  </div>
</section>

## 课程工作流

<section id="workflow" className="section-card">
  <div className="section-title">
    <span>端到端</span>
    <h2>课程工作流</h2>
  </div>

本课程聚焦 SO-ARM101 机械臂的完整开发工作流，带你走过硬件搭建、数据采集、
模型训练、仿真验证，最终在真实机械臂与 Jetson 边缘设备上完成部署与推理。
通过组合 LeRobot、NVIDIA Isaac Sim、Isaac GR00T N1.7 与 Jetson，课程为你
搭建一套完整的机器人学习与具身智能实验环境。

学完本课程，你将理解如何：

- 通过主从臂遥操作采集机械臂数据；
- 用 Isaac GR00T N1.7 在这些数据上训练 Vision-Language-Action 策略；
- 用仿真数据与数据扩充规模化你的数据集；
- 在真实环境中评估训练好的模型；
- 把模型部署到 Jetson 设备并在边缘端执行任务。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM101 套件" />
</div>

</section>

## 演示任务

<section id="task" className="section-card">
  <div className="section-title">
    <span>试管入架</span>
    <h2>演示任务</h2>
  </div>

作为演示，本课程使用一个简单的抓放任务：**把三支试管放进试管架**。NVIDIA
的 SO-101 Workshop 使用的也是同一个任务，因此你录制的数据集可以直接与
NVIDIA 的参考数据集、参考 checkpoint 兼容。

你也可以根据自己的环境和需求调整目标任务——「采集 → 训练 → 部署 →
评估」这条流水线本身不会变。

</section>

## 本课程强调什么

<section id="platform" className="section-card">
  <div className="section-title">
    <span>可复现的平台</span>
    <h2>本课程强调什么</h2>
  </div>

本课程不只关注训练和跑通一个模型，更强调如何搭建一套**可复现、可扩展**的
机器人实验平台：

- 一套固定的数据集模式（六维关节、两个相机、一句任务文本），在真机、
  Isaac Sim 与 Jetson 之间保持不变；
- 所有命令都在 SO-ARM101 上端到端验证过；
- 与 reBot DLI 课程使用同一套工具，你可以在两条机械臂之间切换而无需重学
  流程。

下一章：[第 2 章 —— LeRobot 背景与社区](cn_Sim2Real_VLA_02.md)。

</section>

</div>