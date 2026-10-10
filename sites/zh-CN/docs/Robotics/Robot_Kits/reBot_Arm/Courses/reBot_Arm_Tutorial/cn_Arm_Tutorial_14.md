---
description: "Seeed 具身智能入门课程第三阶段：模仿学习与 LeRobot第 14 章 — 数据集结构与质量检查：判断一份数据集能不能进训练，看四个维度："
title: 第 14 章 - 数据集结构与质量检查
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_14
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_14/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 3 阶段 · 第 14 章 · 理论与实践</span>
    <h2>14. 数据集结构与质量检查</h2>
    <p>
      判断一份数据集能不能进训练，看四个维度：
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 数据集结构与质量检查

## 数据集的结构：硬盘上到底存了什么

**第 13 章录完的数据集 `seed_rebot_b601_rs/test`，在硬盘上长这样：**

```Plain Text
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

| 载体 | 存什么 | 为什么用它 |
|-|-|-|
| MP4 视频 | 两路相机的全部图像帧 | 图像占数据集体积的九成以上，视频压缩比逐帧存图省一到两个数量级 |
| Parquet 表 | 每帧的数值：state、action、时间戳、索引 | 列式存储，读"第 3 关节的全部取值"不必加载整个文件 |
| meta 元信息 | 结构定义、统计量、任务、episode 索引 | 加载器和训练程序先读它，才知道怎么解释前两者 |

---

## 什么样的数据算"好"：四条质量标准

判断一份数据集能不能进训练，看四个维度：

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-14cn/ch14-01cn.jpg" alt="" />
</div>

---

## 回放与图像检查

回放命令可视化用 `lerobot-dataset-viz`，真机回放用 `lerobot-replay`，这里不再重复。建议至少回放**第 0 条、中间一条、最后一条**：第一条看流程对不对，中间看状态有没有漂移，最后一条最容易暴露疲劳期的质量下滑。

回放时可根据如下标准:

- 两路画面都在，没有黑屏、花屏、一路静止不动
- 画面清晰、曝光正常，方块和夹爪始终可见
- 动作与画面同步：夹爪闭合的瞬间，画面里正是夹爪碰到方块
- 开头在标准起始姿态，结尾达成结束条件

---

## 发现问题怎么办：删除、补录还是整集重录

检查出问题，三条处理路径：

- **个位数坏条**（第 3、17 条画面糊了）→  删掉对应2条，再补录2条 ；
- **成片问题**（一半条数光照变了、整批音画错位）→ 别修，整集重录。修出来的数据集七拼八凑，比数据少更伤模型；

关于删除，两个事实记住就行：删除后工具会自动**重建**数据集——episode 重新连续编号、`stats.json` 重新计算，你不必手动修任何东西，无论删还是补，工具都会重新生成一遍 meta

---

</div>
