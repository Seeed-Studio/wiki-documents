---
description: "Seeed 具身智能入门课程第五阶段：机械臂数学与运动控制第 25 章 — 轨迹规划与机械臂控制：让用户理解机械臂如何从目标姿态生成平稳、安全的连续运动。"
title: 第 25 章 - 轨迹规划与机械臂控制
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_25
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_25/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 5 阶段 · 第 25 章 · 理论</span>
    <h2>25. 轨迹规划与机械臂控制</h2>
    <p>
      让用户理解机械臂如何从目标姿态生成平稳、安全的连续运动。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 教学目的

让用户理解机械臂如何从目标姿态生成平稳、安全的连续运动。

## **路径 vs 轨迹**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-25cn/ch25-01cn.jpg" alt="" />
</div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-25cn/ch25-02cn.jpg" alt="" />
</div>

想象你要从家走到公司。

**路径** = 你走的**路线**（形状）

> 出门左转、走大路、过桥、右转、到公司

不管走快走慢，**这条路线不变**。

**轨迹** = 你走的**节奏**（时间 + 速度）

> 出门走 10 秒、桥上停 1 分钟、公司楼下等红灯 30 秒

同样的路，**快走慢走不同**。

**核心差别**

| 维度 | 路径 | 轨迹 |
|-|-|-|
| 描述 | 在哪 | 在哪 + 何时 |
| 维度 | 空间 | 空间 + 时间 |
| 关心 | 形状 | 时间、速度、加速度 |
| 例子 | "从 A 到 B 走直线" | "5 秒内匀速从 A 到 B" |

**机械臂里的对应**

| 任务 | 路径 | 轨迹 |
|-|-|-|
| 焊接 | 焊缝形状 | 沿焊缝的移动速度 |
| 抓取 | 从 A 到杯口 | 何时到、停多久 |
| 喷涂 | 喷涂区域 | 喷头移动速度 |

**规划顺序**：

> 1. 先定**路径**（形状）
> 2. 再定**轨迹**（什么时候到哪）

**一个具体例子**

机械臂从 A 点把杯子拿到 B 点。

**路径**（只要形状）：

> 抬起来 → 往前伸 → 放下
> 
> （一条空间曲线）

**轨迹**（带时间）：

> 抬起来 1 秒 → 停顿 0.5 秒 → 往前伸 2 秒 → 放下 1 秒
> 
> （每个时刻的关节角）

**路径对，轨迹可以错**（比如太猛，杯子甩飞）；**轨迹对，路径必须对**（路径错了轨迹再准也没用）。

**为什么分开讨论**

| 阶段 | 关心 |
|-|-|
| **路径规划** | 避开障碍、找到能走的形状 |
| **轨迹规划** | 让运动平稳、不抖、不超速 |

**路径**是几何问题，**轨迹**是时间问题。

**机械臂的轨迹要"平滑"**

不只是"从 A 到 B"，还要：

- 速度连续（不突然 0）
- 加速度连续（不突然猛）
- 不超电机转速
- 不超力矩

**这些都属轨迹规划**。

## 关节空间和笛卡尔空间轨迹

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-25cn/ch25-03cn.jpg" alt="" />
</div>

| 维度 | 关节空间轨迹 | 笛卡尔空间轨迹 |
|-|-|-|
| 插值对象 | 关节角 | 末端位姿 |
| 插值函数 | 多项式 | 直线 / 圆弧 / 测地线 |
| 速度特性 | 关节匀速 | 末端匀速 |

**所以"关节 vs 笛卡尔"在两个层面都讨论**，但**最常被问的是路径层面**——因为这是机械臂"做不同事"的关键。

**为什么路径更受关注**

| 任务 | 选哪种路径 | 原因 |
|-|-|-|
| 焊接 | **笛卡尔**（直线） | 焊缝是直线 |
| 喷涂 | **笛卡尔**（特定曲线） | 喷涂面要覆盖 |
| 码垛 | 关节空间都行 | 末端路径不重要 |
| 自由搬运 | 关节空间 | 不用关心末端走啥 |
| 抓取后放下 | 关节空间 | 不需要走直线 |

## 线性插值

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-25cn/ch25-04cn.jpg" alt="" />
</div>

<grid>
<column width-ratio="0.500000">
关节空间轨迹：
`θ(t) = θ_start + (θ_end - θ_start) × t`
关节从 0° 平滑变到 90°，中间每 10% 取一个值。
</column>
<column width-ratio="0.500000">
位置空间轨迹：
`p(t) = p_start + (p_end - p_start) × t`
末端从 (0, 0, 0) 直线走到 (1, 0, 0)，中间位置 = 起点 + 比例 × 方向。
</column>
</grid>

优点 & 缺点

<grid>
<column width-ratio="0.500000">
优点：
- 简单、好算
- 一行代码搞定
- 实时性高
</column>
<column width-ratio="0.500000">
缺点：
- 速度突变（起点/终点速度 ≠ 中间）
- 启停时机械臂会"顿一下"
- 不适合高精度任务
</column>
</grid>

启停的"顿"是核心问题——所以更精细的轨迹用三次/五次多项式。

## **多项式插值**

**为什么需要多项式**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-25cn/ch25-05cn.jpg" alt="" />
</div>

**核心差别**

| 维度 | 线性 | 三次 | 五次 |
|-|-|-|-|
| 启停速度 | 突变 | 0 | 0 |
| 启停加速度 | 突变 | 突变 | 0 |
| 平滑度 | 差 | 中 | 好 |
| 算量 | 最少 | 中 | 中 |
| 适用 | 粗运动 | 通用 | 高精度 |

**机械臂里的应用**

| 场景 | 用哪个 |
|-|-|
| 粗搬运、码垛 | 三次 |
| 焊接、装配 | **五次** |
| 协作机器人 | **五次**（人机共处必须稳） |
| 高速运动 | 三次（够用） |
| 科研 / 演示 | 五次（最丝滑） |

## 前馈、反馈和重力补偿

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-25cn/ch25-06cn.jpg" alt="" />
</div>

发到电机的力矩 = **两件事加起来**：

```Plain Text
τ_cmd = τ_前馈（按模型算） + τ_反馈（看误差补）
         │                       │
         │                       └─ 看到不对就修
         └─ 提前算好，包括重力补偿
```

**前馈：按模型提前发**

已知轨迹、已知机械臂参数，**每个时刻需要多少力矩**是算得出来的：

| 模型里含 | 用途 |
|-|-|
| 惯性项 | 加速时扛惯性 |
| 科氏项 | 转弯时抗耦合 |
| **重力项** | **机械臂不动也在，直接抵消** |

**重力项特别重要**——机械臂**即使站着不动也要发**，否则就被地球拽下垂。

**比喻**：知道今天有 5 公里上坡，提前把劲儿攒好。

**反馈：看到不对就修**

模型再准也有误差，外部还有扰动 → 实际位置会偏。

反馈就是**实时对比、实时修正**：

- 差多少 → 补多少（位置反馈）
- 差多快 → 阻尼多少（速度反馈）

**比喻**：知道今天有上坡，但路上有坑——看见坑就绕。

**两者怎么配合**

| 来源 | 作用 | 占比（典型） |
|-|-|-|
| **前馈** | 大部分力矩 | 80\－95% |
| **反馈** | 补小误差 | 5\－20% |

**前馈扛大头，反馈扛小头**——配合起来又快又准。

**对比**

| 维度 | 前馈 | 反馈 |
|-|-|-|
| 时机 | 提前算 | 实时修 |
| 依赖 | 模型精度 | 传感器读数 |
| 响应 | 立即 | 滞后一帧 |
| 抗扰 | 差 | 强 |
| 包含 | 含重力补偿 | 不含 |

**实际控制器长这样**

```Plain Text
τ_cmd = τ_前馈 + τ_反馈
       = [M(q)q̈ + C(q,q̇)q̇ + G(q)] + [K_p·e + K_d·ė]
         \____________前馈（含重力）______/  \__反馈__/
```

**重力就在前馈里**——不用单独算。

**一句话**

> **前馈**按模型（含重力）提前发，**反馈**看误差实时补；**重力不需要单独提**——它就是前馈里那个"机械臂不动也要算"的子项。

</div>
