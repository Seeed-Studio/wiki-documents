---
description: "深入解析 WALL-OSS-0.5：机制、训练、实验以及 LeRobot v0.7.0 集成范围。"
title: "WALL-OSS-0.5：连接视觉-语言学习与连续动作"
hide_title: true
keywords: ["Paper Deep-Dive","WALL-OSS-0.5","VLA","Gradient-Bridged Co-Training","RVQ","Flow Matching","LeRobot"]
slug: /robotics/paper_reading_wall_oss_05
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
    "value": "先修知识：路由与梯度",
    "id": "prerequisites-routing-and-gradients",
    "level": 2
  },
  {
    "value": "摘要与阅读指南",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "架构：共享上下文，分离路径",
    "id": "architecture-shared-context-separate-paths",
    "level": 2
  },
  {
    "value": "RVQ：不仅仅是轨迹压缩",
    "id": "rvq-more-than-trajectory-compression",
    "level": 2
  },
  {
    "value": "联合训练：三种互补信号",
    "id": "joint-training-three-complementary-signals",
    "level": 2
  },
  {
    "value": "动作空间监督",
    "id": "action-space-supervision",
    "level": 2
  },
  {
    "value": "26 维控制接口",
    "id": "the-26d-control-interface",
    "level": 2
  },
  {
    "value": "实验：进展、零样本行为与适应性",
    "id": "experiments-progress-zero-shot-behavior-and-adaptation",
    "level": 2
  },
  {
    "value": "预训练行为",
    "id": "pretrained-behavior",
    "level": 3
  },
  {
    "value": "匹配的微调数据",
    "id": "matched-fine-tuning-data",
    "level": 3
  },
  {
    "value": "受控消融实验",
    "id": "controlled-ablations",
    "level": 3
  },
  {
    "value": "LeRobot 集成与训练边界",
    "id": "lerobot-integration-and-training-boundaries",
    "level": 2
  },
  {
    "value": "结论",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-wall_oss_05-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-wall_oss_05-title">WALL-OSS-0.5：连接视觉-语言学习与连续动作</h1>
  <p className="paper-reading-lead">Wall-OSS-0.5 技术报告</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#joint-training-three-complementary-signals">梯度桥接</a></li>
    <li><a href="#action-space-supervision">动作空间监督</a></li>
    <li><a href="#experiments-progress-zero-shot-behavior-and-adaptation">实验</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2605.30877v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>阅读论文</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/wall_oss_05" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot WALL-OSS-0.5 文档 ↗</a>

**LeRobot 参数**

- `--policy.type=wall_oss_05` 选择该版本；`wall_x` 指向不同的 WALL 版本。
- `--policy.path=lerobot/wall-oss-0.5` 加载用于目标适配的基础模型。
- 该版本使用规范的 26 维布局、32 步片段、q01/q99 归一化以及 10 步 Euler 积分。
- 该适配器支持连续动作和文本目标，但不会暴露完整的自回归 RVQ 动作路径来复现联合预训练。

</aside>

一个机器人按颜色和位置对积木进行分类。VLM 理解这些概念，但一个新的动作专家可能无法正确使用它们。**仅靠连续动作监督，是否足以围绕控制来组织骨干网络？**

## 先修知识：路由与梯度

前向路由选择专家参数和可见 token。梯度决定哪些损失会更新这些参数。分离的专家并不自动意味着梯度被阻断。

离散动作交叉熵提供了 VLM 原生的动作学习信号，而连续 flow matching 提供部署时的动作。该报告研究这些目标如何将理解连接到控制。

## 摘要与阅读指南

**简要摘要。** 这个约 40 亿参数的模型在 Qwen2.5-VL-3B 的基础上扩展了一个动作专家、一个与视觉对齐的 RVQ tokenizer，以及动作空间监督。多模态预测保持语义落地，离散动作预测塑造骨干网络，而 flow matching 生成可执行轨迹。

**阅读说明。** 这是一个独立的 0.5 版本报告，而不是旧的 WALL-OSS 训练配方。其主要的真实机器人指标是任务进展，而非完整任务成功率。

## 架构：共享上下文，分离路径

视觉、语言、状态和离散动作通过 VL Expert；带噪的连续动作通过 Action Expert。共享注意力提供上下文。离散与连续动作目标彼此不可见，从而防止答案泄漏。

| 目标 | 训练角色 | 部署角色 |
| --- | --- | --- |
| 多模态文本 CE | 保持语义落地和知识 | 理解与文本生成 |
| 动作 token CE（RVQ 目标） | 让骨干网络具备动作感知 | 主要是训练桥梁 |
| 连续 flow matching | 通过向骨干网络回传梯度来学习轨迹 | 默认可执行输出 |

在分类任务中，文本监督教授颜色/位置概念，动作 token 将它们与运动关联，而连续专家学习数值轨迹。这三者并不是三个串联的部署规划器。

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/gradient-bridge">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/gradient-bridge.png" alt="Multimodal, discrete-action, and continuous-action co-training" loading="lazy" />
  <figcaption><strong>多模态、离散动作与连续动作的联合训练。</strong> 来源：WALL-OSS-0.5 论文。离散动作交叉熵为视觉-语言骨干网络提供与控制相关的监督；flow matching 训练部署时的连续动作。联合注意力连接这些 token 组。路由专门化与梯度连通性是两个不同的问题。</figcaption>
</figure>

## RVQ：不仅仅是轨迹压缩

残差向量量化将粗略的运动结构分配给前面的 codebook，将残差修正分配给后面的 codebook。一个由观测条件化的编码器压缩增量动作，一个由状态条件化的解码器对其进行重建。

视觉-动作对齐、下一帧预测以及 DCT 域重建进一步鼓励语义化、具备结果意识且平滑的编码。即使不直接将这些离散表示解码为控制信号，连续部署也能从中获益。

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/vision-aligned-rvq">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/vision-aligned-rvq.png" alt="Residual action quantization with visual-alignment objectives" loading="lazy" />
  <figcaption><strong>带视觉对齐目标的残差动作量化。</strong> 来源：WALL-OSS-0.5 论文。除了动作重建之外，视觉-动作对齐和未来上下文特征预测共同塑造语义编码。右侧的特征预测器不会直接合成未来的相机图像。</figcaption>
</figure>

## 联合训练：三种互补信号

动作样本与多模态样本按 9:1 混合，损失为

$$
\mathcal L=\mathcal L_{\mathrm{flow}}+0.01\mathcal L_{\mathrm{act\text{-}CE}}+0.01\mathcal L_{\mathrm{mm\text{-}CE}}.
$$

损失系数平衡的是数值尺度，而不是能力占比。与 stop-gradient 隔离不同，该报告保留了 flow 的梯度进入 VL 骨干网络。

预训练覆盖二十多种形态，每个 epoch 超过一百万条轨迹，并配合多模态语义落地。目标级与步骤级指令、释义以及状态扰动，降低了对单一措辞或理想本体感受的依赖。

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/teaching-gradient-bridge-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/wall-gradient-bridge-en-v2.png" alt="Forward information and backward gradients in block sorting" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>积木分类中的前向信息与反向梯度。</strong> AI 生成的教学插图。实线箭头表示前向信息，虚线箭头表示反向传播路径。动作 token 交叉熵（CE）自回归地预测 RVQ token，并为 VL Expert 提供梯度桥接；多模态 CE 锚定语义落地。Flow matching 通过动作空间监督训练连续动作，其梯度也通过共享注意力到达 VL Expert。内部注意力 mask 被省略；部署默认使用连续动作。</figcaption>
</figure>

## 动作空间监督

路径与重建动作为

$$
\begin{aligned}
A^\tau &= \tau A+(1-\tau)\epsilon,\\
\hat A &= A^\tau+(1-\tau)f_\theta(A^\tau,\tau).
\end{aligned}
$$

网络预测的是速度，但损失比较的是重建动作与干净动作。这等价于一个由 $(1-\tau)^2$ 加权的速度误差。当 $\tau=0.2$ 时权重为 0.64；当为 0.8 时为 0.04，相差 16 倍。这个教学性计算解释了为何更强调高噪声下的轨迹成形，而不是保证任何平滑轨迹都能成功。

## 26 维控制接口

每个机械臂贡献 3 维相对位置、6 维相对旋转以及一个夹爪通道：两只机械臂共 20 维。底座速度增加 3 维，升降增加 1 维，头部驱动增加 2 维。旋转编码宽度不同于物理自由度数量。

部署时从观测、状态和语言中去噪连续动作，而不解码 RVQ 动作。论文中的一秒、依赖源的预测视野与适配器 32 步的发布配置是两个独立的设置。

## 实验：进展、零样本行为与适应

### 预训练行为

零样本套件包含 12 个已见任务和 5 个保留任务，通过预定义的进展评分标准，对每个任务的 10 条轨迹进行评分。在 400k 步时，已见任务的平均进展为 50.0，保留任务为 53.6，整体为 51.1（满分 100）。

在没有成功完成最终放置的情况下，接近目标和搬运可以获得部分进展分数，但完整任务成功率仍为零。因此，51.1 的进展分数不能被称为 51.1% 的成功率。已见/保留两组任务的难度也并不匹配。

### 匹配的微调数据

十五个真实任务各使用约 500 条示范，并采用匹配的评估方式：

| 模型 | 操作任务，10 | 推理任务，5 | 总体 |
| --- | ---: | ---: | ---: |
| WALL-OSS-0.5 | 61.1 | 59.3 | 60.5 |
| π0.5 | 35.0 | 58.9 | 43.0 |
| DreamZero | 33.7 | 32.7 | 33.4 |

这些是进展分数。π0.5 的总体差距为 17.5 分，但在推理上的差距只有 0.4 分。在物体匹配和水果篮放置任务上，π0.5 仍然占优。

### 受控消融实验

在针对五个真实任务的从零开始消融实验中，共同训练的进展得分为 57.00，而不带动作 CE 的流模型加多模态训练为 36.68，stop-gradient 为 31.93，先 stop-gradient 再切换到共同训练的两阶段预热为 49.58。一个单独的四任务 tokenizer 研究表明，使用 RVQ 可以将连续执行的进展从 29.3 提升到 48.1。这些子集必须与十五任务的主比较保持独立。

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/bridge-ablation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/bridge-ablation.png" alt="从零开始的梯度与共同训练消融实验" loading="lazy" />
  <figcaption><strong>从零开始的梯度与共同训练消融实验。</strong> 来源：WALL-OSS-0.5 论文。五个物理任务的平均进展为：仅流模型 36.68，stop-gradient 31.93，两阶段预热（先 stop-gradient 再切换到共同训练）49.58，完整共同训练 57.00。这些是进展分数，而非完整任务成功率。</figcaption>
</figure>

## LeRobot 集成与训练边界

0.7.0 版本支持连续控制以及语言生成/训练。更窄的状态/动作会被归一化并填充到 26 维；输出在反归一化前会被裁剪。填充不会将关节转换为末端执行器坐标。

```bash
--policy.path=lerobot/wall-oss-0.5
--policy.device=cuda
--policy.dtype=bfloat16
```

这些是用于目标微调的加载片段。需要对齐 `camera_key_mapping`、物理单位和统计量。完整的 RVQ 自回归动作训练路径尚未开放，因此适配器微调并不是对三目标预训练的复现。新的机器人接口仍然需要准备和适配。

## 总结

WALL-OSS-0.5 使用离散动作监督来塑造一个感知控制的骨干网络，同时保留多模态知识和连续动作梯度。动作空间监督强调高噪声重建。任务进展、完整成功率、原始预训练和适配器功能必须保持区分。

</div>
