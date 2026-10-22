---
description: 理解 LeRobot 的视频、Parquet 与 meta 结构，检查时间同步、图像质量和示范完整性。
title: 数据集结构与质量检查
hide_title: true
keywords:
  - 手把手复现
  - reBot
  - LeRobot
  - ACT
  - B601-DM
  - B601-RS
  - 机械臂
  - 具身智能
  - 课程
  - 教程
  - SO101
  - SO-ARM101
  - Hugging Face
  - Arm
  - Robotics
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/hands_on_dataset_quality
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-21
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-21'
url: https://wiki.seeedstudio.com/cn/robotics/hands_on_dataset_quality/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-dataset_quality-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 手把手复现</span>
  <h1 id="hands-on-dataset_quality-title">数据集结构与质量检查</h1>
  <p className="paper-reading-lead">理解 LeRobot 的视频、Parquet 与 meta 结构，检查时间同步、图像质量和示范完整性。</p>
  <ul className="paper-reading-badges" aria-label="本篇内容">
    <li>数据集结构</li>
    <li>时间同步</li>
    <li>质量检查</li>
    <li>问题处理</li>
  </ul>
</section>

## 数据集的结构

**录完的数据集存放在 `seed_rebot_b601_rs/test`，在硬盘上长这样：**

```text
~/.cache/huggingface/lerobot/seed_rebot_b601_rs/test/
├── data/
│   └── chunk-000/
│       └── file-000.parquet          ← 所有数值帧（state / action / 时间戳）
├── videos/
│   ├── observation.images.front/
│   │   └── chunk-000/
│   │       └── file-000.mp4          ← 前置相机：50 条视频拼接在一起
│   └── observation.images.wrist/
│       └── chunk-000/
│           └── file-000.mp4          ← 腕部相机：同上
└── meta/
    ├── info.json                     ← 户口本：版本、fps、总帧数、特征定义
    ├── stats.json                    ← 体检表：每个特征的均值/方差/极值
    ├── tasks.parquet                 ← 任务描述表
    └── episodes/
        └── chunk-000/
            └── file-000.parquet      ← 每条 Episode 的"档案卡"
```

**三种载体，各存一类数据：**

|载体|存什么|为什么用它|
|---|---|---|
|MP4 视频|两路相机的全部图像帧|图像占数据集体积的九成以上，视频压缩比逐帧存图省一到两个数量级|
|Parquet 表|每帧的数值：state、action、时间戳、索引|列式存储，读"第 3 关节的全部取值"不必加载整个文件|
|meta 元信息|结构定义、统计量、任务、episode 索引|加载器和训练程序先读它，才知道怎么解释前两者|

---

## 时间戳与数据同步

- 图像走 USB、关节数据走 CAN，两路数据到达电脑的时间天然有先后。LeRobot 给每帧数据打上**时间戳**，以此把"同一时刻"的图像、状态、动作对齐成一行。

![数据集结构与质量检查：时间戳与数据同步（配图 1）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/dataset-quality-01-timestamp-sync.png)

---

## 数据集总体质量判断

判断一份数据集能不能进训练，看四个维度：

![数据集结构与质量检查：数据集总体质量判断（配图 2）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/dataset-quality-02-quality-checklist.png)

---

## 回放与图像检查

回放命令可视化用 `lerobot-dataset-viz`，真机回放用 `lerobot-replay`，参考此前内容。建议至少回放**第 0 条、中间一条、最后一条**：第一条看流程对不对，中间看状态有没有漂移，最后一条最容易暴露疲劳期的质量下滑。

回放时可根据如下标准:

- 两路画面都在，没有黑屏、花屏、一路静止不动

- 画面清晰、曝光正常，方块和夹爪始终可见

- 动作与画面同步：夹爪闭合的瞬间，画面里正是夹爪碰到方块

- 开头在标准起始姿态，结尾达成结束条件

---

## 发现问题处理汇总

检查出问题，三条处理路径：

- **个位数坏条**（第 3、17 条画面糊了）→  删掉对应2条，再补录2条 ；

- **成片问题**（一半条数光照变了、整批音画错位）→ 别修，整集重录。修出来的数据集七拼八凑，比数据少更伤模型；

关于删除，两个事实记住就行：删除后工具会自动重建数据集——episode 重新连续编号、`stats.json` 重新计算，你不必手动修任何东西，无论删还是补，工具都会重新生成一遍 meta

---

</div>
