---
description: "SO-ARM101 Sim-to-Real VLA 课程第 4 章 —— SO-ARM101 介绍：一对开源、低成本、基于 Feetech STS3215 总线舵机的 6 自由度机械臂。"
title: 第 4 章 - SO-ARM101 介绍
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - STS3215
  - 硬件
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_4
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_4/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 1 · 第 4 章 · Overview</span>
    <h2>4. SO-ARM101 介绍</h2>
    <p>
      一对低成本开源机械臂——主臂与从臂——基于 Feetech STS3215 总线舵机构建，
      目标是降低具身智能 Sim-to-Real 学习的门槛。
    </p>
    <div className="hero-actions">
      <a href="#intro">介绍</a>
      <a href="#specs">规格</a>
      <a href="#overview">套件或整机</a>
      <a href="#apps">应用</a>
      <a href="#resources">资源</a>
    </div>
  </div>
</section>

## 介绍

<section id="intro" className="section-card">
  <div className="section-title">
    <span>真开源</span>
    <h2>介绍</h2>
  </div>

SO-ARM101 是一款围绕「真正开源」理念打造的低成本开源机械臂。它的外观与全部
开源文件——包括可 3D 打印的结构件、详细 BOM 清单，以及兼容 LeRobot 与
NVIDIA Isaac 的软件——对个人开发者、学生与教育机构完全免费开放。

本课程使用**一对**机械臂：

- **主臂（leader）**是用手移动的那只，它只读取关节角度并发给软件；
- **从臂（follower）**是执行的那只，遥操作时镜像主臂，之后执行训练好的
  VLA 策略。

由于从臂正是 NVIDIA SO-101 Workshop 所使用的本体，本课程录制的每个数据集
都与 NVIDIA 的参考数据集、参考 checkpoint 和评估工具直接兼容。

</section>

## 硬件规格

<section id="specs" className="section-card">
  <div className="section-title">
    <span>12 个舵机</span>
    <h2>硬件规格</h2>
  </div>

| 参数 | SO-ARM101 |
|---|---|
| 自由度 | 每臂 **6**（5 个臂关节 + 夹爪） |
| 舵机 | Feetech STS3215 总线舵机，每臂 6 个（共 12 个） |
| 主臂供电 | 7.4 V 级舵机，5 V 电源 |
| 从臂供电（Pro 套件） | 12 V 电源 |
| 控制 | 串行总线，每臂一块 USB 控制板 |
| 校准 | LeRobot `lerobot-calibrate`，中位约定 |
| 生态 | LeRobot、NVIDIA Isaac Sim / Isaac GR00T、Feetech 调试工具 |

每个关节由一个 STS3215 串行总线舵机驱动；一臂的六个舵机通过关节间的菊花链
共享一条三线总线（GND、VCC、DATA）。不同关节的减速比不同——从臂和主臂肩部
使用高减速比 1:345 舵机以获得扭矩。完整的减速比表见
[入门课程第 4 章](https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_4/)。

:::caution 供电规则
电压必须与舵机类型匹配：7.4 V 版 STS3215 用 5 V，12 V 版用 12 V。主臂始终
是 7.4 V 舵机配 5 V 电源；Pro 套件的从臂用 12 V。混用电源会烧舵机。USB
线只传数据——电源和 USB 必须都接上。
:::

</section>

## 套件或整机

<section id="overview" className="section-card">
  <div className="section-title">
    <span>两种购买方式</span>
    <h2>套件或整机</h2>
  </div>

- **套件版**：包含舵机组、控制板与线材；结构件自行打印（或购买已打印件）
  并组装。舵机 ID 需要用 `lerobot-setup-motors` 写入——第 7 章会讲。
- **整机版**：出厂即组装并写好舵机 ID。组装与写 ID 完全可以跳过，直接从
  校准开始。

产品链接：

- [SO-ARM101 Pro 套件](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html)
- [SO-ARM100 套件](https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html)

</section>

## 应用场景

<section id="apps" className="section-card">
  <div className="section-title">
    <span>适用领域</span>
    <h2>应用场景</h2>
  </div>

### 教学与具身智能开发

SO-ARM101 专为教学与具身智能实验设计：主从臂录制人类演示，LeRobot 把它们
变成数据集，Isaac GR00T 在其上微调 VLA 策略。低成本让整个教室或实验室都能
配备。

### 遥操作与数据采集

借助 LeRobot 生态，这对臂可以完成远程控制、演示录制与数据集管理——这是
本课程所有模仿学习与 VLA 流水线的基础。

### 科研与原型验证

开放的软硬件接口让研究者可以自定义任务、更换末端执行器，在迁移到更大平台
之前快速验证 Sim-to-Real 想法。

</section>

## 资源

<section id="resources" className="section-card">
  <div className="section-title">
    <span>链接</span>
    <h2>资源</h2>
  </div>

- [SO-ARM101 入门课程](https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_introduction/)
- [SO-ARM101 LeRobot 入门](https://wiki.seeedstudio.com/cn/lerobot_so100m/)
- [NVIDIA Sim-to-Real SO-101 Workshop](https://docs.nvidia.com/learning/physical-ai/sim-to-real-so-101/latest/index.html)

下一章：[第 5 章 —— 小结](cn_Sim2Real_VLA_05.md)。

</section>

</div>