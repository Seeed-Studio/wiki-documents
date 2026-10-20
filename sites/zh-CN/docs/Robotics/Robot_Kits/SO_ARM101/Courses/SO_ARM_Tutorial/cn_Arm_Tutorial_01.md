---
description: "SO-ARM 具身智能入门课程第 1 章 —— 理解什么是机器人和机械臂、自由度，以及传统程序控制、模仿学习与 VLA 三种范式的区别。"
title: 第 1 章 - 机器人与具身智能
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - 机械臂
  - 机器人
  - 具身智能
  - 自由度
  - 模仿学习
  - VLA
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_1
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_1/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 1 阶段 · 第 1 章 · 理论</span>
    <h2>1. 认识机器人与具身智能</h2>
    <p>
      理解什么是机器人和机械臂、自由度的含义，以及机械臂获取动作的三种方式：传统程序控制、模仿学习与 VLA。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 学习目标

---

完成本章后，你应该能够：

1. 解释机器人和机械臂的基本概念。
2. 认识机械臂中的关节、连杆、自由度和末端执行器。
3. 理解机器人系统中的感知、决策和控制。
4. 区分工业机械臂与具身智能机械臂。
5. 区分传统程序控制、模仿学习和 VLA。
6. 描述一套完整具身智能机械臂系统的组成。
7. 理解 SO-ARM 在整个具身智能系统中的作用。

---

## 什么是机器人？

---

机器人并不只是外形像人类的机器。从功能角度来看，机器人是一种能够：

- 获取自身或环境信息；
- 根据目标进行计算或决策；
- 通过执行机构改变自身状态或周围环境；

的系统。一套机器人系统通常可以抽象为：

<div className="image-frame">
  <img width={500} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-01cn/ch01-01cn.jpg" alt="机器人系统抽象" />
</div>

例如，一台桌面抓取机器人需要完成以下过程：

<div className="image-frame">
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-01cn/ch01-02cn.jpg" alt="桌面抓取机器人流程" />
</div>

因此，机器人不仅要"能动"，还要能形成持续运转的闭环。

### 机器人与普通机器的区别

普通机器往往以固定方式工作。例如：

- 电风扇通电后持续旋转；
- 传送带以固定速度运转；
- 普通电机收到电压就转动。

机器人则通常具备更强的状态感知、程序控制与任务执行能力。例如，机械臂可以根据不同的目标位置，控制多个关节运动到不同姿态。

---

## 什么是机械臂？

---

机械臂是由多个关节和连杆构成的机器人机构。通过多个关节的协调运动，将末端执行器送到指定位置和姿态，完成抓取、搬运、装配、打磨、焊接等任务。

机械臂可以简单理解为：

<div className="image-frame">
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-01cn/ch01-03cn.jpg" alt="机械臂" />
</div>

机械臂与人臂有相似之处，但并不需要模仿人体解剖结构 —— 它的关节数量、布置方式和工作空间是根据任务需求设计的。

### 什么是自由度

自由度通常缩写为 DOF（Degree of Freedom）。自由度描述一个机械系统可以独立运动的方向数量。

在三维空间中，一个刚体的完整位姿包括：

- 沿 X、Y、Z 轴的平移；
- 绕 X、Y、Z 轴的旋转。

因此，三维空间中的物体最多有 6 个自由度。

<div className="image-frame">
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-01cn/ch01-04cn.jpg" alt="6 个自由度" />
</div>

六自由度机械臂通常可以在三维空间中同时控制末端执行器的位置与姿态。本课程使用的 SO-ARM100 / SO-ARM101 用 6 个总线舵机驱动 5 个臂关节加 1 个夹爪 —— 5 个旋转自由度足以覆盖桌面抓取任务的各个点位，夹爪则提供"抓取 / 松开"这一自由度。

:::note
五个自由度并不意味着机械臂能以任意姿态到达任意位置。机械臂还受连杆长度、关节限位、奇异位形与碰撞等因素影响。
:::

---

## 传统程序控制、模仿学习与 VLA

---

机械臂可以通过不同方式获取动作：

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.5rem', margin: '1.25rem 0 1.5rem'}}>
  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>传统程序控制</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-01cn/ch01-05cn.jpg" alt="传统程序控制" />
    </div>
    <p>适合固定位置、固定流程、重复性任务。</p>
  </div>

  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>模仿学习</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-01cn/ch01-06cn.jpg" alt="模仿学习" />
    </div>
    <p>由人先遥操作机械臂完成任务，再让模型从演示数据中学习。适合抓取、整理、持续作业类任务。</p>
  </div>

  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>VLA</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-01cn/ch01-07cn.jpg" alt="VLA" />
    </div>
    <p>VLA 利用视觉、语言和动作信息，让机械臂根据自然语言完成任务。</p>
  </div>
</div>

例如：

:::note
把左边的红色方块放进盒子里。
:::

---

## SO-ARM 在课程中的角色

---

SO-ARM 是整个课程的统一实践平台。后续我们将用它完成：

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM100 / SO-ARM101 套件" />
</div>

- 组装、接线与总线舵机配置（第二阶段）；
- 主从臂标定与遥操作（第三阶段）；
- 带相机的演示数据采集（第三阶段）；
- ACT 模仿学习训练与真机部署（第三阶段）；
- 双臂协同训练（第三阶段，选修）；
- Isaac GR00T 的 VLA 微调与推理（第四阶段）；
- SenseCraft Robotics 平台的无代码 VLA（第四阶段）。

</div>
