---
description: "SO-ARM 具身智能入门课程第 3 章 —— 各阶段动手所需的硬件清单，包括主控设备、SO-ARM 套件、USB 相机以及可选的深度相机。"
title: 第 3 章 - 后续课程的硬件选择
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM100
  - SO-ARM101
  - 机械臂
  - 硬件
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_3
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_3/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 1 阶段 · 第 3 章 · 理论与实践</span>
    <h2>3. 后续课程的硬件选择</h2>
    <p>
      各阶段动手所需的硬件清单：主控设备、一套 SO-ARM 主从臂套件、两个 USB 相机，以及训练阶段所需的 GPU（或云端 / 无代码平台）。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>你需要准备</strong>
    <span>一台主控设备（Ubuntu x86 或 Jetson），贯穿全部章节。</span>
    <span>一套 SO-ARM 套件 —— 已包含主臂与从臂。</span>
    <span>两个 USB 相机，用于模仿学习与 VLA 阶段。</span>
    <span>训练阶段需要 NVIDIA GPU（或云端 / 无代码平台）。</span>
  </div>
</section>

<a id="overview"></a>

## 主控设备

---

本节介绍后续各章节所需的动手硬件清单，同学们可以按自身情况采购。

整个课程都需要使用你自己的电脑作为算法部署设备，可以是 Ubuntu x86 机器、Mac 或 Jetson。但请记住**不要使用 Windows 上的 WSL 或虚拟机 Ubuntu**，否则你会花大量精力解决各种奇怪的问题，学习效率大打折扣。

所有章节都需要一台主控设备作为代码部署端。以下是推荐的设备与系统：

| 硬件 | 购买 | 数量 | 说明 | 覆盖章节 |
| :--- | :--- | :---: | :--- | :--- |
| 台式机或笔记本 | - | 1 | 原生 Ubuntu 22.04、CUDA 12+、Python 3.12、Torch 2.6+；训练建议 12GB 显存以上的 NVIDIA GPU（如 RTX 4080）与 16GB 以上内存 | 全部章节 |
| 或者 reComputer Robotics J4012（Jetson Orin） | [淘宝](https://detail.tmall.com/item.htm?id=1007628222742&mi_id=0000L8eD-KMxtF0PXaT0MiYt5P7LUTbfX1vS7err0e_zxeU&skuId=6197625203847&spm=a1z10.1-b-s.w4004-25931066406.20.543d262eey8njQ) | 1 | JetPack 6.0 / 6.1（暂不支持 JetPack 6.2） | 第二、三阶段 |
| NVIDIA Jetson AGX Thor 128G | [天猫](https://detail.tmall.com/item.htm?id=957845742837) | 1 | 用于第四阶段的 GR00T N1.5 推理 | 第二、三、四阶段 |

:::tip
如果你没有训练用 GPU，也依然可以学完本课程：在免费云笔记本（如 Google Colab）上训练小策略、在 NVIDIA Brev 上微调 GR00T，或使用第 22 章 SenseCraft Robotics 的无代码云训练。
:::

---

## 第二阶段：SO-ARM 组装与基础控制

---

| 硬件 | 购买 | 数量 | 说明 |
| :--- | :--- | :---: | :--- |
| SO-ARM101 套件（主臂 + 从臂 + 2个摄像头及支架） | [淘宝](https://detail.tmall.com/item.htm?id=877820346195&mi_id=0000OU1g76NMAq5LGIUiPORgyMk3E8XbnysI4JwJCeVC1ow&skuId=6312174298846&spm=a1z10.1-b-s.w4004-26191638149.2.4789262ePdEW84) | 1 |  |

---

## 第三阶段：模仿学习与 LeRobot

---

| 硬件 | 购买 | 数量 | 说明 |
| :--- | :--- | :---: | :--- |
| 台式机或笔记本 | - | 1 | 原生 Ubuntu 22.04、CUDA 12+、Python 3.12、Torch 2.6+；训练建议 12GB 显存以上的 NVIDIA GPU（如 RTX 4080）与 16GB 以上内存 | 全部章节 |
| SO-ARM101 套件（主臂 + 从臂 + 2个摄像头及支架） | [淘宝](https://detail.tmall.com/item.htm?id=877820346195&mi_id=0000OU1g76NMAq5LGIUiPORgyMk3E8XbnysI4JwJCeVC1ow&skuId=6312174298846&spm=a1z10.1-b-s.w4004-26191638149.2.4789262ePdEW84) | 1 |  |
| 鼠标垫 / 桌垫 | - | 1 | 保护并稳定工作面，让物体摆放可复现 |

---

## 第四阶段：VLA —— Isaac GR00T 与无代码 SenseCraft

---

| 硬件 | 购买 | 数量 | 说明 |
| :--- | :--- | :---: | :--- |
| 台式机或笔记本 | - | 1 | 原生 Ubuntu 22.04、CUDA 12+、Python 3.12、Torch 2.6+；训练建议 12GB 显存以上的 NVIDIA GPU（如 RTX 4080）与 16GB 以上内存 | 全部章节 |
| SO-ARM101 套件（主臂 + 从臂 + 2个摄像头及支架） | [淘宝](https://detail.tmall.com/item.htm?id=877820346195&mi_id=0000OU1g76NMAq5LGIUiPORgyMk3E8XbnysI4JwJCeVC1ow&skuId=6312174298846&spm=a1z10.1-b-s.w4004-26191638149.2.4789262ePdEW84) | 1 |  |
| 训练 GPU（或云端） | - | 1 | GR00T 微调约需 25GB 显存（Ampere 及以上架构，如 RTX 4090 / A6000）；不支持 V100。替代方案：NVIDIA Brev 云端，或第 22 章的无代码路径 |
|  或者 NVIDIA Jetson AGX Thor（可选，边缘推理） | [天猫](https://detail.tmall.com/item.htm?id=957845742837) | 1 | 在边缘端运行微调后的 GR00T N1.5 推理服务 |

---

## 可选升级

---

| 硬件 | 购买 | 数量 | 说明 |
| :--- | :--- | :---: | :--- |
| 奥比中光 Gemini 2 深度相机 | [Bazaar](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html) | 1 | 相机章节的可选 RGB-D 感知 |
| 软夹爪打印文件 | [soarm_soft_gripper](https://github.com/xiehuangbao888/soarm_soft_gripper.git) | - | TPU 指夹，适合柔软、易碎或不规则物体 |

</div>
