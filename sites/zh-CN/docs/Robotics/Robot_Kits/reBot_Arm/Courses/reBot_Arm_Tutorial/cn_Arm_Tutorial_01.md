---
description: "Seeed 具身智能入门课程第一阶段：基本概念与教具准备第 1 章 — 认识机器人与具身智能：机器人并不只是外形像人类的机器。从功能角度来看，机器人是一种能够："
title: 第 1 章 - 认识机器人与具身智能
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_1
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_1/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 1 阶段 · 第 1 章 · 理论</span>
    <h2>1. 认识机器人与具身智能</h2>
    <p>
      机器人并不只是外形像人类的机器。从功能角度来看，机器人是一种能够：
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 1.1 学习目标

完成本章后，你应该能够：

1. 解释机器人和机械臂的基本概念。
2. 认识机械臂中的关节、连杆、自由度和末端执行器。
3. 理解机器人系统中的感知、决策和控制。
4. 区分工业机械臂与具身智能机械臂。
5. 区分传统程序控制、模仿学习和 VLA。
6. 描述一套完整具身智能机械臂系统的组成。
7. 理解 reBot Arm 在整个具身智能系统中的作用。

---

## 1.2 什么是机器人？

机器人并不只是外形像人类的机器。从功能角度来看，机器人是一种能够：

- 获取自身或环境信息；
- 根据目标进行计算或决策；
- 通过执行机构改变自身状态或周围环境；

一套机器人系统通常可以抽象为：

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1cn/ch01-01cn.jpg" alt="" />
</div>

例如，一台桌面抓取机器人需要完成以下过程：

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1cn/ch01-02cn.jpg" alt="" />
</div>

因此，机器人不仅需要“会动”，还需要能够形成一个持续运行的闭环。

-  机器人与普通机器的区别

普通机器往往按照固定方式工作。例如：

- 电风扇通电后持续旋转；
- 传送带按照固定速度运行；
- 普通电机接收电压后旋转。

而机器人通常具有更强的状态感知、程序控制和任务执行能力。例如，机械臂可以根据不同目标位置，控制多个关节运动到不同姿态。

---

## 1.3 什么是机械臂？

机械臂是一种由多个关节和连杆组成的机器人机构。它通过多个关节的协同运动，让末端执行器到达指定的位置和姿态，并完成抓取、搬运、装配、打磨、焊接等任务。

可以把机械臂简单理解为：

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1cn/ch01-03cn.jpg" alt="" />
</div>

机械臂和人类手臂具有一定相似性。但是，机械臂不一定模仿人体结构。它的关节数量、排列方式和工作空间会根据任务需求进行设计。

---

- 什么是自由度

自由度通常使用 DOF，即 Degree of Freedom 表示。自由度描述一个机械系统能够独立运动的方向数量。

在三维空间中，一个刚体的完整位姿包含：

- 沿 X、Y、Z 三个方向平移；
- 绕 X、Y、Z 三个方向旋转。

因此，一个物体在三维空间中最多具有 6 个自由度。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1cn/ch01-04cn.jpg" alt="" />
</div>

六自由度机械臂通常能够控制末端执行器在三维空间中的位置和姿态。

需要注意的是：

> 六自由度并不等于机械臂只有六个电机，也不代表所有位置和姿态都一定能够到达。

机械臂还会受到连杆长度、关节限制、奇异点和碰撞等因素影响。

---

## 1.4 传统控制、模仿学习与 VLA

机械臂可以通过不同方式获得动作。

### 传统程序控制

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1cn/ch01-05cn.jpg" alt="" />
</div>

适合固定位置、固定流程和重复任务。

### 模仿学习

人类先遥操作机械臂完成任务，模型再从示范数据中学习。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1cn/ch01-06cn.jpg" alt="" />
</div>

适合抓取、整理和连续操作任务。

### VLA

VLA 使用视觉、语言和动作信息，让机械臂根据自然语言完成任务。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1cn/ch01-07cn.jpg" alt="" />
</div>

例如：

> 把左边的红色方块放进盒子。

## 1.5 reBot Arm 在课程中的作用

reBot Arm 是整套课程的统一实践平台。

后续我们将使用它完成：

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1cn/ch01-08cn.jpg" alt="" />
</div>

---

</div>
