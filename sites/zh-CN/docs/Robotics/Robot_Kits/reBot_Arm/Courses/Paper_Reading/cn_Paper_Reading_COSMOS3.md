---
description: "深入解析 Cosmos 3：机制、训练、实验，以及 LeRobot v0.7.0 集成范围。"
title: "Cosmos 3：从全模态世界建模到联合视频-动作策略"
hide_title: true
keywords: ["Paper Deep-Dive","Cosmos 3","Omnimodal World Models","MoT","Joint Video-Action Prediction","LeRobot"]
slug: /robotics/paper_reading_cosmos3
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
    "value": "前置知识：三种动作模式",
    "id": "prerequisites-three-action-modes",
    "level": 2
  },
  {
    "value": "摘要与阅读指南",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "架构：理解路径与生成路径",
    "id": "architecture-understanding-and-generation-paths",
    "level": 2
  },
  {
    "value": "动作：共享几何与领域特定接口",
    "id": "actions-shared-geometry-with-domain-specific-interfaces",
    "level": 2
  },
  {
    "value": "训练：一条轨迹的三种用法",
    "id": "training-three-uses-of-one-trajectory",
    "level": 2
  },
  {
    "value": "闭环控制",
    "id": "closing-the-loop",
    "level": 3
  },
  {
    "value": "实验：指令具体性与初始化",
    "id": "experiments-instruction-specificity-and-initialization",
    "level": 2
  },
  {
    "value": "RoboLab 指令",
    "id": "robolab-instructions",
    "level": 3
  },
  {
    "value": "适配 LIBERO-10",
    "id": "adaptation-to-libero-10",
    "level": 3
  },
  {
    "value": "物理偏好评分",
    "id": "physical-preference-ratings",
    "level": 3
  },
  {
    "value": "LeRobot 集成：匹配尺寸、控制与配方",
    "id": "lerobot-integration-match-size-controls-and-recipe",
    "level": 2
  },
  {
    "value": "结论",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-cosmos3-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-cosmos3-title">Cosmos 3：从全模态世界建模到联合视频-动作策略</h1>
  <p className="paper-reading-lead">Cosmos 3：面向物理智能的全模态世界模型</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-understanding-and-generation-paths">多模态架构</a></li>
    <li><a href="#actions-shared-geometry-with-domain-specific-interfaces">动作与训练</a></li>
    <li><a href="#experiments-instruction-specificity-and-initialization">实验</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2606.02800v4" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>阅读论文</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/cosmos3" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot Cosmos 3 文档 ↗</a>

**LeRobot 参数**

- `--policy.type=cosmos3_nano` 和 `--policy.type=cosmos3_edge` 用于选择支持的模型尺寸。
- `--policy.path=lerobot/Cosmos3-Nano-Policy-LIBERO` 加载在全部四个 LIBERO 套件上训练的策略。
- `--policy.save_predicted_video=true` 还会额外解码/保存预测结果，增加可视化开销。
- 域、相机画布、真实帧率和动作表示都是模型的条件输入。

</aside>

一个机器人把一个黑色碗放进抽屉并关上。我们可以询问给定动作会产生什么结果、哪一个动作可以解释某个视觉变化，或者为了达成目标应该采取什么动作。**是否可以只通过改变轨迹中哪些部分是已知的，让一个模型学会这三种能力？**

## 前置知识：三种动作模式

| 模式 | 已知 | 预测 | 抽屉示例 |
| --- | --- | --- | --- |
| 正向动力学 | 当前视图和动作 | 未来视图 | 拉动会让抽屉移动到哪里 |
| 逆向动力学 | 视觉变化 | 动作 | 如何把关闭状态变成打开状态 |
| 策略 | 当前观测和目标 | 动作和未来视图 | 运动与预期结果同时给出 |

一个抽屉打开的视频并不是可执行的机器人指令。策略学习需要动作监督和与具体机体绑定的接口，并通过真实反馈来修正预测。

<figure className="paper-reading-figure" data-reading-figure="cosmos3/teaching-three-conditioning-modes-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/cosmos-three-conditioning-modes-en-v2.png" alt="抽屉打开的三种条件预测任务" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>抽屉打开的三种条件预测任务。</strong> AI 生成的教学插图。三列分别展示正向动力学、逆向动力学和联合视频-动作预测（策略），它们具有不同的已知输入和预测目标。它们是可选的生成模式，而不是顺序执行的阶段。视觉场景代表视频序列；语言和特殊 token 条件被做了简化。</figcaption>
</figure>

## 摘要与阅读指南

**简要摘要。** Cosmos 3 在 MoT 架构中统一了语言、图像、视频、音频和动作，将自回归理解与连续生成结合。通过干净/带噪 token 的选择来实现正向动力学、逆向动力学和策略学习。动作中期训练在目标后训练之前，为跨领域提供先验。

**阅读说明。** 本文聚焦与机器人相关的机制。图像/视频质量排序并不能衡量控制是否成功，而 LeRobot 的 Nano/Edge 适配器也没有暴露整个全模态平台。

## 架构：理解路径与生成路径

因果理解路径处理文本和可选的 ViT 视觉 token。生成路径对连续的视频、音频和动作 token 进行去噪。每一层都有独立的归一化、投影和前馈参数，通过共享注意力连接上下文。

ViT 特征用于理解，而冻结的视频 VAE 提供生成用的潜变量。这种基于路径的 MoT 不同于稀疏 MoE 路由，后者为每个 token 选择若干前馈专家。

在策略模式下，当前图像是干净的，而未来视频/动作被加噪并联合恢复。提示中还会描述帧率、分辨率、视角布局和空闲帧，以对齐视觉与动作时间。

<figure className="paper-reading-figure" data-reading-figure="cosmos3/mot-architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/cosmos3/mot-architecture.png" alt="自回归理解与扩散生成之间的注意力路由" loading="lazy" />
  <figcaption><strong>自回归理解与扩散生成之间的注意力路由。</strong> 来源：官方 LeRobot 文档。理解路径使用因果自注意力；生成路径使用全注意力并读取理解上下文。掩码阻止理解查询访问生成 token。共享注意力将两侧计算连接起来，但不会让它们的解码规则变得相同。</figcaption>
</figure>

## 动作：共享几何与领域特定接口

报告围绕自体运动、末端执行器和抓取状态来组织动作。连续位姿可以定义

$$
\Delta T_t=T_{t-1}^{-1}T_t.
$$

平移和 6D 旋转编码运动；抓取通道编码当前的操作状态。领域特定投影将每个机体的向量映射到共享的隐藏维度。

预训练表示与目标控制格式可以不同。DROID 在适配器配方中使用八个关节/夹爪通道；LIBERO 使用带 6D 旋转的十个通道，再转换回模拟器的七维动作。仅靠填充无法替代这些转换。

<figure className="paper-reading-figure" data-reading-figure="cosmos3/action-representation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/cosmos3/action-representation.png" alt="跨不同机体动作向量的共享几何组件" loading="lazy" />
  <figcaption><strong>跨不同机体动作向量的共享几何组件。</strong> 来源：Cosmos 3 论文。位置、6D 旋转和抓取组件构成不同长度的向量，通过领域特定投影连接。六个旋转数值并不意味着六个旋转自由度，共享组件也不会让指令可以互换。</figcaption>
</figure>

## 训练：一条轨迹的三种用法

对于一个抽屉演示，正向动力学保持动作为干净输入并预测视频。逆向动力学保持视觉变化为干净输入并预测动作。策略模式则对两者加噪并进行预测。

通用理解/生成训练先于多领域动作中期训练和目标后训练进行。动作先验支持适配，而目标演示对齐真实控制与场景。仅靠通用视频生成并不能得到可部署的策略。

### 闭环控制

多视角被组合到一个固定画布中。干净的当前潜变量作为条件，用于联合采样未来视频和动作。机器人执行一段动作后再进行观测。视频解码是可选的，用于检查。

如果模型想象碗已经在抽屉里，但夹爪实际上把它掉在外面，那么下一次调用必须使用碗的真实位置。联合预测把运动与预期后果关联起来，但并不保证这些后果在物理上是正确的。

## 实验：指令具体性与初始化

### RoboLab 指令

报告对 120 个任务进行了评估，每个任务十次试验：

| 模型 | 模糊 | 默认 | 具体 |
| --- | ---: | ---: | ---: |
| Cosmos3-Nano，动作中期训练初始化 | 20.6% | 36.8% | 39.7% |
| Cosmos3-Nano，通用预训练初始化 | 16.7% | 28.1% | 30.2% |
| π0.5 | 15.2% | 28.0% | 28.1% |

这些是在不同指令条件下的成功率。36.8% 和 39.7% 这两个数字并不能互换，而模糊请求依然明显更难。

### 适配 LIBERO-10

每个任务进行 50 次试验，共十个任务，因此每个检查点有 500 次 rollout：

| 更新步数 | MT-init | PT-init |
| --- | ---: | ---: |
| 500 | 24.6% | 0.0% |
| 1,000 | 91.4% | 73.8% |
| 2,000 | 97.4% | 95.2% |

更大的早期差距表明，从动作中期训练开始可以实现更快的适配。差距缩小并不意味着通用预训练初始化永远无法学会。

### 物理偏好评分

RoboArena 汇总了盲测的成对比较。报告记录了 2026 年 5 月 30 日的领先评分。偏好评分既不是固定任务集的成功率，也不是对当今排名的声明。

## LeRobot 集成：匹配规模、控制方式和配方

版本 0.7.0 支持约 165 亿参数的 Nano 和 46 亿参数的 Edge 实现，默认主要训练生成路径和动作模块。Base、DROID、四套 LIBERO 以及仅 LIBERO-10 的检查点用于不同目的。

文档中的四套 Nano/Edge 结果分别平均为 97.90%/97.95%，每套 500 个 episode。仅 LIBERO-10 的 Nano 检查点得分为 97.6%；报告中在 2,000 次更新时的 MT-init 得分为 97.4%。不同的训练集、实现和权重必须保留不同的标签。

```bash
--policy.path=lerobot/Cosmos3-Nano-Policy-LIBERO
--policy.dtype=bfloat16
--env.type=libero
--env.task=libero_spatial,libero_object,libero_goal,libero_10
--env.observation_height=256
--env.observation_width=256
```

这些评估片段需要补全其余带版本的评估设置。新数据集需要正确的帧率、视角描述、统计信息和领域标识符。在状态条件下，状态/动作通道必须具有匹配的宽度和语义。数据/环境处理器执行物理量转换。

在适配一个基础模型时，`load_action_modules=false` 可以用来初始化目标模块；评估时必须加载已训练的模块。基于 EMA 的配方需要对应的 EMA 检查点。这些是集成说明，而不是当前机器上基准测试运行的证据。

## 结论

Cosmos 3 在统一架构中学习了视觉变化与动作之间的若干条件关系。动作中期训练提供了可复用的适配先验。解释该策略需要区分其三种模式、特定机体的表征、指令条件以及训练后的协议。

</div>
