---
description: "SO-ARM101 Sim-to-Real VLA 课程 —— 将 Seeed × NVIDIA 的 DLI 实战课程完整迁移到 SO-ARM101：搭建真实机器人实验室、遥操作采集数据、微调 Isaac GR00T N1.7、部署到真机与 Jetson，并可选地用 Isaac Sim 与 Cosmos 扩充数据。"
title: SO-ARM101 Sim-to-Real VLA 课程
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Sim-to-Real
  - Isaac Sim
  - LeRobot
  - Isaac GR00T
  - VLA
  - 遥操作
  - 具身智能
  - Jetson
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_course
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_course/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × LeRobot × GR00T × Jetson · 进阶课程</span>
    <h2>SO-ARM101 Sim-to-Real VLA</h2>
    <p>
      搭建真实机器人实验室，遥操作采集自己的数据，微调 Isaac GR00T N1.7
      VLA 策略，部署到真实机械臂与 Jetson——并可选地用 Isaac Sim
      仿真数据与数据增强扩充数据集。每条命令都沿用 reBot DLI 课程验证过的流程。
    </p>
    <div className="hero-actions">
      <a href="#pipeline">学习路线</a>
      <a href="#modules">课程结构</a>
      <a href="#prerequisites">前置条件</a>
      <a href="#build">你将完成</a>
    </div>
  </div>
</section>

## 课程概览

<section id="pipeline" className="section-card">
  <div className="section-title">
    <span>概览</span>
    <h2>从空桌面到 Jetson 上的策略</h2>
  </div>

本课程与 reBot DLI 课程、NVIDIA SO-101 Workshop 的模块结构完全一致，并围绕
**白色 SO-ARM101** 重新构建：

1. **Overview 与环境** —— 为什么需要 Sim-to-Real，LeRobot 与 GR00T
   提供了什么，安装并验证整套软件栈；
2. **Build Your Robot Lab** —— 组装 SO-101 双臂（整机可跳过写舵机
   ID），校准双臂，搭建摄影棚：灯箱、支架、机架与物料位置；
3. **Get Your Own VLA Model** —— 遥操作真实双臂，录制双相机 LeRobot
   v3 数据集，微调 Isaac GR00T N1.7，并在真实从动臂上闭环运行；
4. **扩充数据（可选）** —— 从 Isaac Sim 中的白色 SO-ARM101 数字孪生采集
   额外数据，随机化场景，与真实数据合并协同训练；
5. **部署到 Jetson** —— 在 Jetson AGX Orin 或 Thor 上导出面向特定
   目标的 TensorRT 引擎，在边缘端提供策略服务。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM101 套件" />
</div>

</section>

## 课程结构

<section id="modules" className="section-card">
  <div class="section-title">
    <span>DLI 模块</span>
    <h2>Overview → Build Your Robot Lab → Get Your Own VLA Model → Jetson</h2>
  </div>

| 模块 | 章节 | 主题 |
| --- | --- | --- |
| 1 · Overview | 1–5 | 课程概览、LeRobot、Sim-to-Real、SO-ARM101、小结 |
| 2 · Build Your Robot Lab | 6–8 | 模块导言、准备机械臂（写 ID + 校准）、工作空间 |
| 3 · Get Your Own VLA Model | 9–11 | 采集真实数据、训练 GR00T N1.7、真机评估 |
| 3+ · 可选 | 12–13 | 从 Isaac Sim 采集数据、Cosmos 数据增强 |
| 4 · Deploy on Jetson | 14–18 | Jetson 准备、硬件连接、GR00T 环境、资产、TensorRT 推理 |
| 5 · Reference | 19 | 仓库、产品与文档索引 |

真实机器人路线是本课程的主线。Isaac Sim 只作为可选的加速器出现，与
[Seeed × NVIDIA Sim-to-Real 文章](https://www.seeedstudio.com/sim-to-real-with-seeed-rebot-and-nvidia-isaac)
中的用法一致。

</section>

## 前置条件

<section id="prerequisites" className="section-card">
  <div class="section-title">
    <span>开始之前</span>
    <h2>你需要什么</h2>
  </div>

| 条件 | 说明 |
| --- | --- |
| 工作站 GPU | 第 9–12 章需 NVIDIA RTX ≥ 8 GB 显存；GR00T 微调需 24 GB+（RTX 5090 / RTX 6000 级别） |
| 操作系统 | Ubuntu 22.04 或更新 |
| 软件 | Isaac Sim 6.1（仅第 12 章）、LeRobot 环境（第 7 章） |
| 机器人 | SO-ARM101 主臂 + 从臂——套件或整机均可；严格来说只有从臂是必需的 |
| 相机 | 两个 USB 相机（腕部 + 外部） |
| 边缘设备（第 4 模块） | Jetson AGX Orin 或 AGX Thor，JetPack 7.2 |
| 磁盘 | 各机器合计约 100 GB 可用空间 |

如果打算让 AI 助手帮你装环境，可以直接复制项目仓库里的安装 skill
文件——第 6 章给出了链接和内容说明。

</section>

## 你将完成

<section id="build" className="section-card">
  <div class="section-title">
    <span>产出</span>
    <h2>十九章之后的交付物</h2>
  </div>

- 一对校准好的 SO-ARM101 主/从臂——组装或出厂整机，需要时写入舵机 ID；
- 一个录制摄影棚：灯箱、刚性相机支架、固定的机架位置与画好标记的物料区；
- 一份带双相机视频流的真实场景 LeRobot Dataset v3 数据集；
- 一个基于你自己的数据微调的 Isaac GR00T N1.7 策略，可选仿真增强与
  Cosmos 数据增强的协同训练集；
- 通过 NVIDIA 真机评估工具链在真实从动臂上闭环运行的策略；
- 一套面向特定目标的 TensorRT 引擎与 Jetson AGX Orin / Thor 上的策略
  服务。

</section>

## 课程章节

<section id="chapters" className="section-card">
  <div class="section-title">
    <span>目录</span>
    <h2>五个模块、十九章</h2>
  </div>

| 章 | 标题 | 模块 |
| --- | --- | --- |
| 1 | 课程概览 | 1 · Overview |
| 2 | LeRobot 背景与社区 | 1 · Overview |
| 3 | 什么是 Sim-to-Real？ | 1 · Overview |
| 4 | SO-ARM101 介绍 | 1 · Overview |
| 5 | 小结 | 1 · Overview |
| 6 | Build Your Robot Lab（导言） | 2 · Build Your Robot Lab |
| 7 | 准备机械臂 | 2 · Build Your Robot Lab |
| 8 | 搭建工作空间 | 2 · Build Your Robot Lab |
| 9 | 真实环境数据采集 | 3 · Get Your Own VLA Model |
| 10 | 训练 GR00T N1.7 策略 | 3 · Get Your Own VLA Model |
| 11 | 真实环境评估 | 3 · Get Your Own VLA Model |
| 12 | 从 Isaac Sim 采集数据（可选） | 3 · 可选 |
| 13 | 数据增强（可选） | 3 · 可选 |
| 14 | 准备 Jetson 边缘设备 | 4 · Deploy on Jetson |
| 15 | 连接机器人硬件 | 4 · Deploy on Jetson |
| 16 | 配置 GR00T 软件环境 | 4 · Deploy on Jetson |
| 17 | 准备数据集与模型资产 | 4 · Deploy on Jetson |
| 18 | 运行 GR00T N1.7 TensorRT 推理 | 4 · Deploy on Jetson |
| 19 | 参考 | 5 · Reference |

从第 1 章开始；如果软件环境已经装好，可以直接跳到第 7 章。如果只需要
可选的仿真部分，直接去[第 12 章](cn_Sim2Real_VLA_12.md)。

</section>

</div>