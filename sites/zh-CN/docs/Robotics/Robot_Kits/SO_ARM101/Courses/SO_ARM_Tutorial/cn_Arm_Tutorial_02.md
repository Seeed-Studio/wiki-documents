---
description: "SO-ARM 具身智能入门课程第 2 章 —— 认识 SO-ARM 开源项目、SO-ARM100 与 SO-ARM101 的区别、标准版与专业版的差异，以及它的开源硬件与开源软件。"
title: 第 2 章 - 硬件与开源项目
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM100
  - SO-ARM101
  - 机械臂
  - 开源
  - LeRobot
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_2
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_2/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 1 阶段 · 第 2 章 · 理论与实践</span>
    <h2>2. 认识 SO-ARM 硬件与开源项目</h2>
    <p>
      认识 SO-ARM 开源项目、SO-ARM100 与 SO-ARM101 两代机械臂的区别、标准版与专业版的供电差异，以及配套的开源硬件与开源软件。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 什么是 SO-ARM

---

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM100 / SO-ARM101 套件" />
</div>

SO-ARM 是一款面向 AI 与机器人学习的低成本、完全开源机械臂。初代 SO-ARM100 由 [TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100) 设计，是 Hugging Face [LeRobot](https://github.com/huggingface/lerobot) 项目的参考主从臂；Seeed Studio 在此基础上提供完整套件 —— SO-ARM100 与更新一代的 SO-ARM101 —— 包含经过验证的 3D 打印件、飞特 STS3215 总线舵机、舵机控制板以及完整的 Wiki 支持。

一套 SO-ARM 套件永远包含**两条机械臂**：

- **主臂 / Leader 臂（黑色）**：你握在手里进行示教的轻量臂。它的舵机只读位置 —— 是示教的"输入设备"。
- **从臂 / Follower 臂（白色）**：真正干活的执行臂。它的舵机以全电压上电，负责实际的抓取与移动。

每条臂由 6 个 STS3215 串行总线舵机（5 个臂关节 + 1 个夹爪）驱动，通过 3 芯总线级联，并经 USB 舵机控制板连接到电脑。从这套开源项目中，你可以从零开始学习：

- 3D 打印、组装与总线舵机配置；
- 舵机 ID 分配、标定与调试；
- 主从臂遥操作；
- LeRobot 数据采集、可视化与数据集管理；
- ACT、SmolVLA、扩散策略训练与真机评估；
- 双臂（双手）协同训练；
- NVIDIA Isaac GR00T 的 VLA 微调与 Jetson 部署；
- SenseCraft Robotics 平台的无代码 VLA。

它的核心目标，是让用户用真正低成本、开放、可复现的硬件来学习并验证具身智能算法。

---

## SO-ARM100 与 SO-ARM101 的区别

---

SO-ARM 有两代产品：

- **SO-ARM100** —— 让这套设计声名鹊起的初代版本；
- **SO-ARM101** —— 当前推荐版本，增加了理线夹，并重新设计了主臂。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" alt="SO-ARM101 舵机与接线" />
</div>

两代产品高度兼容：

:::tip
当前推荐购买 SO-ARM101 套件。SO100 与 SO101 的代码互相兼容 —— SO100 用户可以直接使用 SO101 的参数和命令（LeRobot 中的 `so101_follower` / `so101_leader`），SO101 的打印件也与 SO100 电机套件的安装完全兼容。
:::

需要特别留意的差异是**主臂舵机的齿轮比**：SO-ARM101 主臂的前三个关节（L1–L3）齿轮比与 SO-ARM100 不同，因此舵机配置必须严格按照你手上版本的对应表执行（见第 6 章）。

---

## 标准版与专业版

---

SO-ARM101 套件分为两个版本，结构相同，区别在于舵机扭矩与供电：

| 版本 | 从臂舵机 | 主臂舵机 | 供电 |
| :--- | :--- | :--- | :--- |
| **SO101 标准版** | ST-3215-C001 7.4V（齿轮比 1:345）×6 | ST-3215 7.4V 系列 | 两臂均 5V |
| **SO101 专业版** | ST-3215 12V 系列（更大扭矩，如 C018 / C047） | ST-3215 7.4V 系列 | 主臂 5V，从臂 12V |

:::danger
供电规则至关重要。标准版两条臂都用 5V。专业版的主臂必须始终使用 5V 电源、从臂必须始终使用 12V 电源 —— 插错电压可能烧毁舵机。每次上电前请再次核对电源适配器标签。
:::

---

## 主要参数

---

| 产品 | SO-ARM100 套件 | SO-ARM101 套件 |
| :--- | :--- | :--- |
| **购买链接** | [Bazaar](https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html) | [Bazaar](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) |
| **自由度** | 5 + 夹爪 | 5 + 夹爪 |
| **执行器** | 每臂飞特 STS3215 总线舵机 ×6 | 每臂飞特 STS3215 总线舵机 ×6 |
| **通信方式** | TTL 串行总线，经 USB 舵机控制板 | TTL 串行总线，经 USB 舵机控制板 |
| **供电** | 5V（标准版）/ 5V+12V（专业版） | 5V（标准版）/ 5V+12V（专业版） |
| **结构** | 3D 打印 PLA+ 件，STL 开源 | 带 线缆夹的 3D 打印件，STL 开源 |
| **生态** | LeRobot、GR00T、SenseCraft Robotics | LeRobot、GR00T、SenseCraft Robotics |

---

## 开源硬件与开源软件

---

SO-ARM 从可打印的结构到软件栈全部开放：

- **机械臂设计与 STL 文件**：<a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer">TheRobotStudio/SO-ARM100</a>
- **本课程使用的经验证 LeRobot 分支**：<a href="https://github.com/Seeed-Projects/lerobot" target="_blank" rel="noopener noreferrer">Seeed-Projects/lerobot</a>
- **上游框架**：<a href="https://github.com/huggingface/lerobot" target="_blank" rel="noopener noreferrer">huggingface/lerobot</a>
- **舵机调试工具**：<a href="https://github.com/Seeed-Projects/Seeed_RoboController" target="_blank" rel="noopener noreferrer">Seeed-Projects/Seeed_RoboController</a>
- **VLA 基础模型**：<a href="https://huggingface.co/nvidia/GR00T-N1.5-3B" target="_blank" rel="noopener noreferrer">Hugging Face 上的 NVIDIA Isaac GR00T</a>

:::tip
本课程从 Seeed-Projects 分支安装 LeRobot —— 该版本针对 SO-ARM 套件做过验证。上游仓库更新很快，命令参数、数据集格式与依赖都可能与本课程的章节不同。
:::

</div>
