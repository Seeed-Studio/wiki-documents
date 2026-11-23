---
description: "深入解析 FineART-VLA：机制、训练、实验，以及与 LeRobot v0.7.0 的集成范围。"
title: "FineART-VLA：通过子任务将长时程目标连接到双臂动作"
hide_title: true
keywords: ["Paper Deep-Dive","FineART-VLA","VLA","Subtask Prediction","Bimanual Manipulation","Knowledge Insulation","LeRobot"]
slug: /robotics/paper_reading_fineart_vla
displayed_sidebar: PaperReadingSidebar
last_update:
  date: 2026-11-20
  author: liujunjie
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "前置知识：三种控制时间尺度",
    "id": "prerequisites-three-timescales-of-control",
    "level": 2
  },
  {
    "value": "摘要与阅读指南",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "为什么长演示需要阶段标签",
    "id": "why-long-demonstrations-need-phase-labels",
    "level": 2
  },
  {
    "value": "数据：覆盖可复用技能与接触密集任务",
    "id": "data-covering-reusable-skills-and-contact-rich-tasks",
    "level": 2
  },
  {
    "value": "架构：先预测子任务，再生成其动作",
    "id": "architecture-predict-a-subtask-then-generate-its-actions",
    "level": 2
  },
  {
    "value": "三个目标与知识隔离",
    "id": "three-objectives-and-knowledge-insulation",
    "level": 3
  },
  {
    "value": "训练与执行：对齐两个学习到的决策",
    "id": "training-and-execution-aligning-two-learned-decisions",
    "level": 2
  },
  {
    "value": "实验：在什么条件下带来哪些提升",
    "id": "experiments-what-improves-and-under-which-conditions",
    "level": 2
  },
  {
    "value": "匹配的初始条件",
    "id": "matched-initial-conditions",
    "level": 3
  },
  {
    "value": "空间词与长时程引导",
    "id": "spatial-words-and-long-horizon-guidance",
    "level": 3
  },
  {
    "value": "长尾数据与形体迁移",
    "id": "long-tail-data-and-embodiment-transfer",
    "level": 3
  },
  {
    "value": "LeRobot 集成：保留语言规划器",
    "id": "lerobot-integration-preserving-the-language-planner",
    "level": 2
  },
  {
    "value": "总结",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-fineart_vla-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-fineart_vla-title">FineART-VLA：通过子任务将长时程目标连接到双臂动作</h1>
  <p className="paper-reading-lead">FineART：用于双臂操作的细粒度标注机器人轨迹数据集与视觉-语言-动作模型</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-predict-a-subtask-then-generate-its-actions">子任务预测</a></li>
    <li><a href="#three-objectives-and-knowledge-insulation">知识隔离</a></li>
    <li><a href="#experiments-what-improves-and-under-which-conditions">实验</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2609.36416v3" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>阅读论文</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/fineart_vla" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot FineART-VLA 文档 ↗</a>

**LeRobot 参数**

- `--policy.path=lerobot/fineart_vla_base` 从 FineART 中期训练的 checkpoint 开始适配。
- `--policy.type=fineart_vla --policy.pretrained_path=lerobot/pi05_base` 从 π0.5 权重开始另一条训练路线。
- 语言规划需要在时间上对齐的 `subtask` 标注。仅有一条 episode 级别的任务字符串无法提供这种监督。
- `lerobot-rollout` 管理交互式执行；`--autosteer_interval_s=3` 设置规划查询间隔。完整的硬件配置请参见对应版本的指南。

</aside>

一个准备早餐的机器人必须放置杯子、摆放餐具并移动食物。整体指令在几分钟内保持不变，而所需的运动会在每个阶段完成后发生变化。**如果每一帧只携带整体目标，策略从哪里学到它现在应该执行哪一步？**

## 前置知识：三种控制时间尺度

一个目标指定最终结果，一个子任务指定当前操作，而一个动作块在若干控制 tick 上指定数值指令。FineART 将子任务指令与演示时间线对齐。

| 早餐示例 | 含义 | 学习角色 |
| --- | --- | --- |
| 准备早餐 | 整体目标 | 约束子任务预测 |
| 把杯子放到架子上 | 当前操作 | 语言目标与动作条件 |
| 关节与夹爪目标 | 物理运动 | 连续与离散动作监督 |

一个子任务仍然包含多个动作。放置杯子包括接近、抓取、搬运和释放。标注缩小了控制问题的范围，而无需用语言描述每一个电机 tick。

## 摘要与阅读指南

**简要摘要。** FineART 包含 40,543 个 episode、1,718 小时、151 个任务和 533,913 个子任务。FineART-VLA 在 π0.5 的基础上扩展了下一子任务预测和以子任务为条件的连续控制。其实验分别研究了标注粒度、子任务训练、知识隔离以及向不同形体的适配。

**阅读提示。** 更多演示、阶段标签和梯度路由服务于不同目的。受控对比必须固定其他因素，才能把性能提升归因到其中某一个。

## 为什么长演示需要阶段标签

相似的图像可以属于不同的任务阶段，相同的动作也可以服务于不同的目标。仅有 episode 级别的指令会把这些差异隐含起来。在时间上对齐的子任务为当前操作提供了直接监督。

与 π0.5 的直接动作接口相比，FineART-VLA 增加了一条语言生成路径。与将规划器和控制器分离的做法相比，它在一个策略中联合训练语言与动作，并且也接受人类指定的子任务。为整段视频写更长的描述，无法替代与单个操作对齐的标签。

## 数据：覆盖可复用技能与接触密集任务

FineART 将重复的抓取-放置和语义整理，与长尾的布料操作、工具装配、电缆布线和精确插入结合在一起。这些任务让策略暴露于不同的接触与精度需求。

对于毛巾折叠，标签必须跟随实际的抓取、移动和放置顺序。错误的边界会把一条指令与另一操作的动作配对，直接削弱控制器的训练条件。

在中期训练中，采样任务的权重与 $n_i^{0.5}$ 成正比，其中 $n_i$ 是其帧数。在一个教学示例中，帧数为 100 和 400 的任务分别获得权重 10 和 20：采样比例为 1:2，而不是原始的 1:4。

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/subtask-annotations">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fineart_vla/subtask-annotations.png" alt="任务与子任务的时间对齐" loading="lazy" />
  <figcaption><strong>任务与子任务的时间对齐。</strong> 来源：FineART 论文。一个打包任务被划分为时长不等的阶段，说明了为什么子任务标签需要时间边界。显示的名称是示意类别，而非数据集中的逐字标注。</figcaption>
</figure>

## 架构：先预测子任务，再生成其动作

论文中的 ALOHA 配置使用俯视和两个腕部视角、14 维关节/夹爪状态，以及 50 步、每步 14 维的动作块。其视觉-语言骨干将 SigLIP 和 Gemma 结合，并配有一个独立的 Gemma 风格动作专家。

| 路径 | 输入 | 计算 | 输出 |
| --- | --- | --- | --- |
| 子任务规划 | 观测与整体目标 | 自回归语言生成 | 低层指令 |
| 离散动作学习 | 观测与子任务 | FAST-token 预测 | 为骨干提供动作监督 |
| 连续控制 | 观测、状态、子任务和带噪动作 | Flow-matching 动作专家 | 可执行的动作块 |

规划器可能生成“put the cup on the shelf”，而多个动作调用会跟随该指令。周期性的规划查询使用新的观测和原始高层目标来推断当前激活的子任务。运行时不会检测子任务完成；查询间隔是可配置的。规划与动作生成可以以不同频率运行。

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/teaching-three-timescales-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/fineart-three-timescales-en-v2.png" alt="三种时间尺度：高层目标、子任务与连续动作" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>三种时间尺度：高层目标、子任务与连续动作。</strong> AI 生成的教学插图。单一策略同时支持自主子任务推断（System 2）和连续动作执行（System 1）。运行时会周期性地从高层目标和当前观测中查询子任务；它不会检测子任务完成。一个子任务可以引导多个动作块。观测还包括机器人状态，此处为清晰起见省略。命名的运动阶段展示了一条轨迹；可执行输出是连续数值。</figcaption>
</figure>

### 三个目标与知识隔离

训练目标为

$$
\mathcal L=10\mathcal L_{\mathrm{flow}}+\mathcal L_{\mathrm{FAST}}+\lambda_{\mathrm{text}}\mathcal L_{\mathrm{text}}.
$$

在启用子任务训练时，30% 的样本用于训练从目标到子任务的预测，70% 的样本用于训练以子任务为条件的动作。这些是采样比例，而不是推理时的时间分配。

知识隔离会分离由动作专家读取的骨干网络键和值。专家仍然使用视觉-语言上下文，但连续动作损失不会通过那条路径更新骨干网络。文本和离散动作损失会继续训练它；骨干网络并不是永久冻结的。

## 训练与执行：对齐两个学习到的决策

在训练期间，示范提供正确的子任务，而在部署时通常使用生成的子任务。控制器必须遵循子任务，规划器必须识别当前阶段。只学习其中一种能力会让另一部分问题仍未解决。

一个控制循环会读取图像和状态，查询或保留一个子任务，预测动作，执行部分计划，然后再次观测。人工子任务输入有助于区分规划失败和运动失败。50 步预测视野和运行时规划间隔是两个独立的设置。

## 实验：哪些因素带来提升，以及在什么条件下

### 匹配的初始条件

ALOHA 评估对每个任务使用 25 次 rollout，并规定初始摆放方式。成功率统计完整完成的次数；进度率衡量完成的阶段数。以一个四阶段的放杯子示例为例，只完成伸手、抓取和搬运而未成功放置，可以得到 75% 的进度和 0 的成功率。

一个 2×2 消融实验分别改变子任务训练和知识隔离。它们的组合支持最强的分布外泛化，但各个任务的表现不同。在简单的货架放置任务上，仅使用隔离而不进行子任务训练的表现优于同时启用两者；更含糊的任务则可能从阶段监督中获益。

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/subtask-insulation-ablation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fineart_vla/subtask-insulation-ablation.png" alt="Subtask training and knowledge-insulation ablation" loading="lazy" />
  <figcaption><strong>子任务训练与知识隔离消融。</strong> 来源：FineART 论文。实色柱表示成功率，浅色柱表示进度率。两种机制的结合在分布外任务组中帮助最大。每个任务有 25 次试验，每种设置有 50 次，总计 150 次；设置的平均值并不能描述每个具体任务。</figcaption>
</figure>

### 空间词汇与长视野引导

在将甜甜圈放入左、中或右侧箱子的任务中，在两个条件下都关闭隔离，子任务训练将成功率从 32% 提升到 100%，每种条件各有 25 次试验。所有 17 次未进行子任务训练的失败都选择了错误的箱子。这专门测试空间语言是否会改变目标选择。

早餐任务将熟悉的子任务重新组合成一个未见过的完整序列。逐步的人类引导将成功率从 16% 提升到 76%。该结果包含了人工引导，并未衡量完全自主的规划能力。

### 长尾数据与形体迁移

在保持训练步数不变的情况下移除接触密集的长尾数据，会在该消融配置中将整体成功率从 24.7% 降低到 14.0%。这些数值属于那次受控对比实验，而不是来自其他实验中的最佳配置。

ALOHA-to-YAM 研究在适配到 YAM 之后，衡量数据效率和任务组合能力。跨形体迁移仍然需要兼容的目标控制接口和适配数据。

## LeRobot 集成：保留语言规划器

0.7.0 版本支持 FineART-VLA 训练、文本查询和动作执行。除了图像、状态、动作和任务之外，所选 recipe 还需要在 `language_persistent` 和 `language_events` 中包含其目标。默认 recipe 使用连续的子任务时间线；记忆和 VQA 需要各自的标注和运行时支持。

保留 checkpoint 的 recipe、动作 tokenizer 和处理器，然后将相机名称、动作统计量和状态维度与目标机器人对齐。仅更改一个 π0.5 策略名称并不能复现论文中的规划器。

下面是训练参数片段；请单独提供实际的数据集和输出配置：

```bash
--policy.path=lerobot/fineart_vla_base
--policy.dtype=bfloat16
--policy.gradient_checkpointing=true
--policy.tokenizer_max_length=256
```

这些集成设置本身并不能复现论文的评估协议。

## 结论

FineART-VLA 在一个学习流水线中连接了整体目标、阶段语言和连续动作。稠密标签解释每个动作片段完成了什么，生成的子任务提供了干预点，知识隔离有助于保持骨干网络能力。其最有力的证据来自匹配的消融实验；自主行为仍然依赖于阶段识别、精确执行以及目标形体的数据。

</div>
