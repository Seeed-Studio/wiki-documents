---
description: "SO-ARM101 Sim-to-Real VLA 课程第 6 章 —— Build Your Robot Lab 导言：从理论到实操，要求数字孪生与物理世界在运动学与视觉上严格一致。"
title: 第 6 章 - Build Your Robot Lab（导言）
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - 机器人实验室
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_6
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_6/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 2 · 第 6 章 · Build Your Robot Lab</span>
    <h2>6. Build Your Robot Lab</h2>
    <p>
      组装硬件、标准化任务环境、建立控制回路——并保持数字孪生与物理世界之间
      严格一致。
    </p>
    <div className="hero-actions">
      <a href="#scope">范围</a>
      <a href="#env">软件环境</a>
      <a href="#chapters">章节</a>
    </div>
  </div>
</section>

## 本模块的范围

<section id="scope" className="section-card">
  <div className="section-title">
    <span>从理论到实践</span>
    <h2>本模块的范围</h2>
  </div>

本模块教你从理论走向实操：组装硬件、标准化任务环境、建立控制回路。搭建具身
智能流水线，要求数字孪生（仿真）与物理世界在运动学与视觉上严格一致。

具体来说，你将开箱或组装 **SO-ARM101 双臂**、写入舵机 ID（仅套件版——整机
可跳过）、执行关键的**关节校准**以保证真实世界的精确跟随；然后搭建一个
标准化的受控光照工作空间——摄影棚——相机支架与固定的物料位置都与 Isaac
Sim 中的视觉资产对应；最后掌握真实数据采集所依赖的硬件遥操作。

</section>

## 软件环境

<section id="env" className="section-card">
  <div className="section-title">
    <span>一次安装</span>
    <h2>软件环境</h2>
  </div>

本模块假定 LeRobot 环境已就绪。第 7 章会逐步走一遍（uv、Python 3.12、带
SO-101 主/从臂支持的 Seeed LeRobot 分支、Feetech SDK），后续章节全部复用。

如果你更愿意让 AI 助手代劳，项目仓库附带了一份机器可读的安装 skill：

**`skills/install-soarm-env.md`**，位于
[github.com/yuyoujiang/rebot-arm-dli-isaacsim](https://github.com/yuyoujiang/rebot-arm-dli-isaacsim)

把整个文件复制给你的 AI 助手（Claude、ChatGPT 等），让它执行步骤即可。里面
包含按可执行顺序排列的全部命令、每一步验证的预期输出，以及一张排错表
（缺 `scservo_sdk`、串口权限、GPU 冻屏、UDP 端口冲突等）。

</section>

## 本模块章节

<section id="chapters" className="section-card">
  <div className="section-title">
    <span>两章</span>
    <h2>本模块章节</h2>
  </div>

1. [第 7 章 —— 准备机械臂](cn_Sim2Real_VLA_07.md)：舵机 ID、校准、首次
   遥操作；
2. [第 8 章 —— 搭建工作空间](cn_Sim2Real_VLA_08.md)：摄影棚、相机支架、
   物料位置与相机。

</section>

</div>