---
description: "Seeed 具身智能入门课程第一阶段：基本概念与教具准备第 2 章 — 认识机械臂硬件与开源项目 reBot Arm：reBot Arm B601 是由Seeedstudio发布的一款从结构硬件到软件的完全开源的机械臂，是一款面向机器人教学、算法开发和具身智能研究的开源桌面机械臂。它采用模块化机械结构，提供约 750 mm 臂展和 6+1 自由度，通过 USB-CAN 与计算机连接，可用于机械臂控制、机器人视觉、模…"
title: 第 2 章 - 认识机械臂硬件与开源项目 reBot Arm
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_2
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_2/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 1 阶段 · 第 2 章 · 理论与实践</span>
    <h2>2. 认识机械臂硬件与开源项目 reBot Arm</h2>
    <p>
      reBot Arm B601 是由Seeedstudio发布的一款从结构硬件到软件的完全开源的机械臂，是一款面向机器人教学、算法开发和具身智能研究的开源桌面机械臂。它采用模块化机械结构，提供约 750 mm 臂展和 6+1 自由度，通过 USB-CAN 与计算机连接，可用于机械臂控制、机器人视觉、模仿学习和 VLA 等实验。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 2 **认识机械臂硬件与开源项目reBot Arm**

## 2.1 reBot Arm 是什么

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2cn/ch02-01cn.jpg" alt="" />
</div>

reBot Arm B601 是由Seeedstudio发布的一款从结构硬件到软件的完全开源的机械臂，是一款面向机器人教学、算法开发和具身智能研究的开源桌面机械臂。它采用模块化机械结构，提供约 750 mm 臂展和 6+1 自由度，通过 USB-CAN 与计算机连接，可用于机械臂控制、机器人视觉、模仿学习和 VLA 等实验。

reBot Arm 不只是机械臂硬件，还提供了从底层控制到上层 AI 应用的完整开发资料，该开源项目你可以从0学到：

- 机械臂设计与组装(DM商详视频)
- 机械臂校准与关节控制；
- 正运动学、逆运动学和轨迹规划；
- Pinocchio 动力学分析与 MeshCat 可视化；
- Leader–Follower 主从遥操作；
- LeRobot 数据采集、训练和评估；huggingface网页录屏
- RGB-D 视觉识别与自主抓取；
- Issac sim
- ROS2 集成与二次开发；
- ACT、GR00T 等机器人策略模型适配。

其主要目标是让用户使用相对低成本、开放且可修改的硬件，学习和验证机械臂与具身智能算法。

---

## 2.2 为什么设计 DM 和 RS 两个版本

reBot Arm B601 提供：

- **B601-DM**
- **B601-RS**

两个版本采用相似的机械结构和上层软件体系，但使用了不同类型的关节电机。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2cn/ch02-02cn.jpg" alt="" />
</div>

### **2.3 reBot Arm Dm与reBot Arm RS参数对比**

<sheet sheet-id="y9YEq0" token="F1lKs6inJhzRqFtSw3kcWxWbnBg"></sheet>

## 2.4 开源硬件与开源软件

reBot Arm 的硬件和软件资料均对外开放。

GitHub 仓库：[https://github.com/Seeed-Projects/reBot-DevArm/](https://github.com/Seeed-Projects/reBot-DevArm/)

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2cn/ch02-03cn.jpg" alt="" />
</div>

---

</div>
