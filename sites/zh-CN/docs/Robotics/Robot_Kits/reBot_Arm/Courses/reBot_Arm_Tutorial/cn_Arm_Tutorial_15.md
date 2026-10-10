---
description: "Seeed 具身智能入门课程第三阶段：模仿学习与 LeRobot第 15 章 — ACT 模型与 Action Chunking：第 9 章讲过行为克隆：把遥操作示范录成数据集，让模型学着'看到什么就做什么'。那里留了一个问题——什么模型配得上这份数据？ 一个能上真机的策略模型，至少要跨三道坎："
title: 第 15 章 - ACT 模型与 Action Chunking
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_15
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_15/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 3 阶段 · 第 15 章 · 理论</span>
    <h2>15. ACT 模型与 Action Chunking</h2>
    <p>
      第 9 章讲过行为克隆：把遥操作示范录成数据集，让模型学着"看到什么就做什么"。那里留了一个问题——什么模型配得上这份数据？ 一个能上真机的策略模型，至少要跨三道坎：
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## ACT 模型与 Action Chunking

## 从行为克隆到 ACT：只差一个"好模型"

第 9 章讲过行为克隆：把遥操作示范录成数据集，让模型学着"看到什么就做什么"。那里留了一个问题——什么模型配得上这份数据？ 一个能上真机的策略模型，至少要跨三道坎：

1. 看得懂图像。 
2. 想得连贯。
3. 扛得住误差。

- 而ACT（Action Chunking with Transformers，基于 Transformer 的动作分块模型）就是为跨这三道坎而生的策略模型。它由斯坦福大学团队于 2023 年提出，最早在 ALOHA 低成本双臂平台上完成了开杯盖、拉合密封袋等精细操作而名声大噪，随后 Mobile ALOHA 移动双臂平台又用它演示了烹饪虾仁等复杂任务。如今它被 LeRobot 内置为标准策略之一——也是本阶段你要亲手训练和部署的模型。

ACT 的名字本身就是它的全部设计思想：**Action Chunking（动作分块）\\+ Transformer（序列建模器）**。本章的其余部分，就是把这两个词拆开讲透。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15cn/ch15-01cn.jpg" alt="" />
</div>

---

## ACT 的输入与输出：先看清两头

理解任何模型，最稳妥的办法是先看它的"接口"——吃什么、吐什么。

## 输入：当前这一时刻的观测

ACT 在推理时每接收一帧观测，包含两类信息：

| 输入 | reBot Arm 上的具体内容 | 维度 |
|-|-|-|
| 图像（Observation） | 前置相机 + 腕部相机两路 RGB 画面 | 2 × 图像 |
| 关节状态（State） | 6 个关节角度 + 夹爪开合 | 7 维向量 |

<callout emoji="❗">
注意 ACT 是**只看当前帧**的：它不记忆过去的画面，每次都根据"现在看到什么 + 现在关节在哪"做决策。
</callout>

## 输出：未来一小段的动作块

ACT 的输出**不是**下一步动作，而是一整块动作序列（Action Chunk）：

```Plain Text
输入：2 路图像 + 7 维关节状态（当前帧）
输出：未来 k 步的动作序列，每步都是 7 维（6 关节 + 夹爪）
      即一个 k × 7 的动作矩阵
```

在 LeRobot 的 ACT 默认配置里，k（chunk size）通常是 100——也就是说，一次推理给出未来约 100 个时间步的完整动作计划。这正好回答了第 9 章埋下的伏笔：**Action Chunk 不是一个抽象的优化技巧，它就是 ACT 输出的天然形态。**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15cn/ch15-02cn.jpg" alt="" />
</div>

---

## ACT 的内部结构：三个车间一条流水线

## 第一车间：视觉骨干网络（ResNet）——把像素变成特征

- 俯视相机和腕部相机两路相机图像先各自进入一个 ResNet18（在 ImageNet 上预训练过的卷积神经网络），被压缩成一组**视觉特征**。你可以把 ResNet 理解为模型的"视觉皮层"：原始像素对它没有意义，它提取的是"桌面左侧有个红色物体""夹爪正下方有个开口"这类结构化信息。

## 第二车间：Transformer 编码器（Encoder）——理解"现在"

- 视觉特征 + 关节状态向量汇合后，进入 Transformer 编码器。编码器的任务是把多路信息融合成对当前局势的统一理解："目标在哪、我在哪、任务进行到哪一步了"。

## 第三车间：Transformer 解码器（Decoder）——规划"未来"

- 解码器拿着编码器的理解，**一次性生成未来 k 步的动作序列**。它不是一步一步往外蹦动作，而是像写乐谱一样，把整段"未来乐章"一口气写出来——这正是动作块内部高度连贯的根本原因。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15cn/ch15-03cn.jpg" alt="" />
</div>

---

## Transformer 是什么：注意力机制的直觉

 ACT 其中的两车间都是 Transformer，那 Transformer 本身是什么？

它 2017 年由 Google 为机器翻译提出，论文标题就叫《Attention Is All You Need》，后来成为大语言模型的基石架构。不需要看公式，建立三个直觉就够：

1. **Token：把信息切成"零件"。** Transformer 不直接处理原始句子或原始像素，而是先把输入切成一个个标准零件（token）——一句话切成词，一张图切成若干个小块，一个关节状态向量也可以是一个零件。所有信息统一成"一串零件"之后，就可以用同一套机制处理；
2. **自注意力（Self-Attention）：每个零件都能"看见"其他零件。** 这是 Transformer 的核心。处理每个零件时，它会计算自己和其他所有零件的相关程度，然后重点吸收最相关那些的信息——"该看哪"不是人规定的，是模型自己学出来的；
3. **编码器与解码器：一个理解，一个生成。** 编码器（Encoder）负责把输入的一串零件融合成"对现状的理解"；解码器（Decoder）拿着这份理解，生成一串新的输出零件——翻译里是目标语言的句子，ACT 里就是未来的动作序列。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15cn/ch15-04cn.jpg" alt="" />
</div>

## Transformer 在 ACT 里是怎么用的

- **在编码器里：融合多路观测。** 两路图像被 ResNet 切出的视觉特征块、加上关节状态向量，统统变成 token 送进编码器。自注意力让它们互相对齐——"夹爪现在的位置"和"画面里那个红色方块"被关联成对当前局势的统一理解：目标在哪、我在哪、任务进行到哪一步了；
- **在解码器里：一口气规划整段动作。** 解码器用 k 个查询向量对应未来 k 个动作步，这些查询一方面从编码器的理解里取信息，另一方面通过自注意力相互协调——第 37 步的动作在生成时"知道"第 36 步打算做什么。整块动作因此是连贯的一个整体，而不是 100 个孤立的决定；
- **在注意力聚焦上：知道该"看"哪。** 生成每个动作时，模型会自动聚焦图像中与当前动作最相关的区域——接近目标时关注夹爪与方块的相对位置，移动时关注目标方向，而不是对所有区域一视同仁。

一句话总结：**ResNet 负责"看清"，Transformer 编码器负责"看懂"，Transformer 解码器负责"连贯地规划"**，动力全来自注意力机制。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15cn/ch15-05cn.jpg" alt="" />
</div>

---

## CVAE是什么

 CVAE（Conditional Variational Autoencoder，条件变分自编码器）。LeRobot 里的 ACT 实际也是按这个在训的，只是 `lerobot-train --policy.type=act` 这行命令里你看不见这两个字。

---

## 它要挡住什么坑：平均值会抓空

CVAE 的工作不是「把人变成唯一标准答案」，而是承认：在当前观测这个条件下，动作可以有好几种风格；训练时先认出这回是哪一种，再去复述那一串动作。

论文做过对比（模拟任务上）：

- 示范如果是脚本写死的（只有一种做法），去掉 CVAE 几乎不影响成功率；
- 换成 人类数据，去掉后成功率从约 35% 掉到 2%。

所以 CVAE 不是为了让公式看起来更高级，是为了让模型吃得下「人会换做法、会手抖」的数据。

「条件」两个字的意思：生成动作必须 以当前看到的为准——桌上是小龙虾还是方块，不能乱编。CVAE 是「在看见这些的前提下，编接下来怎么动」。

## Action Chunk 与 Action Horizon：预测多远，执行多远

这是本章最需要精确区分的两个概念，它们是两个独立可调的参数：

- **Action Chunk（动作块）**：模型**一次预测**的动作序列长度，即输出矩阵的行数 k。LeRobot 中 ACT 默认 chunk size 为 100。
- **Action Horizon（动作时域）**：预测出这 100 步后，实际**开环执行**多少步，然后重新观测、重新预测。

两者的关系是：**预测的块可以很长，但每次只信任它的前一小段。**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15cn/ch15-06cn.jpg" alt="" />
</div>

为什么不把 100 步全部执行完？因为预测越远越不准——环境在变，物体可能被碰动，执行到后半段时模型"以为的局势"早已偏离现实。**开环执行太久 = 闭着眼睛开车。** Horizon 越小，模型越频繁地"睁眼重新看"，抗干扰越强；但太小又会丢失分块带来的平滑性。

**举个栗子：** 这就像用手机导航开车。导航（模型）一次算好了全程路线（chunk），但你不会锁死方向盘照着开——每过一段路你都会看一眼实时路况（重新观测），导航也会据此重新规划（重新预测）。你"信任旧路线继续开"的那段距离，就是 Horizon。

---

## 动作连续性与误差累积：ACT 的两道防线

第 9 章我们留下过两个威胁真机稳定性的问题：动作抖动和误差累积。现在看 ACT 如何用结构化的手段应对它们。

## 防线一：块内连贯，治抖动

## 防线二：时间集成，治跳变

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15cn/ch15-07cn.jpg" alt="" />
</div>

---

## ACT 适合什么样的任务？

综合 ACT 的设计特点，它的"舒适区"相当清晰：

| 适合 | 原因 |
|-|-|
| 桌面级操作任务（抓取、放置、整理、插拔） | ACT 的发源地就是这类任务，数据需求和模型规模都匹配 |
| 单任务或少数几个任务 | 行为克隆按任务学映射，任务越多数据需求越大 |
| 秒级到一分钟内的短周期任务 | 误差随时间累积，任务越短越稳定 |
| 视觉信息足够的任务 | 俯视+ 腕部双相机能覆盖关键信息的场景 |
| 算力有限的设备 | ACT 参数量相对小，消费级显卡可训练可推理，CPU也能推理 |

---

## ACT 的能力边界

同样重要的是知道它不能做什么：

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-15cn/ch15-08cn.jpg" alt="" />
</div>

---

</div>
