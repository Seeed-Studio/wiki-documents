---
description: "深入解析 Fast-WAM：机制、训练、实验，以及 LeRobot v0.7.0 集成范围。"
title: "Fast-WAM：在执行时不生成未来视频却从中学习"
hide_title: true
keywords: ["Paper Deep-Dive","Fast-WAM","World-Action Models","Video Co-Training","Direct Action Inference","LeRobot"]
slug: /robotics/paper_reading_fastwam
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
    "value": "前置知识：从未来中学习 vs 生成未来",
    "id": "prerequisites-learning-from-the-future-versus-generating-it",
    "level": 2
  },
  {
    "value": "摘要与阅读指南",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "为什么受控变体很重要",
    "id": "why-the-controlled-variants-matter",
    "level": 2
  },
  {
    "value": "架构：动作只读取当前观测",
    "id": "architecture-actions-read-only-the-current-observation",
    "level": 2
  },
  {
    "value": "训练与推理",
    "id": "training-and-inference",
    "level": 3
  },
  {
    "value": "数据：“无具身预训练”的含义",
    "id": "data-what-without-embodied-pretraining-means",
    "level": 2
  },
  {
    "value": "实验：去除未来生成的证据",
    "id": "experiments-evidence-for-removing-future-generation",
    "level": 2
  },
  {
    "value": "LeRobot 集成与结果边界",
    "id": "lerobot-integration-and-result-boundaries",
    "level": 2
  },
  {
    "value": "结论",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-fastwam-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-fastwam-title">Fast-WAM: 在执行时不生成未来视频却从中学习</h1>
  <p className="paper-reading-lead">Fast-WAM：世界动作模型在测试时需要未来想象吗？</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#data-what-without-embodied-pretraining-means">视频协同训练</a></li>
    <li><a href="#architecture-actions-read-only-the-current-observation">直接动作推断</a></li>
    <li><a href="#experiments-evidence-for-removing-future-generation">实验</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2603.16666v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>阅读论文</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/fastwam" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot Fast-WAM 文档 ↗</a>

**LeRobot 参数**

- `--policy.type=fastwam` 选择训练策略；使用 `--policy.path` 指定已训练权重。
- `--policy.path=lerobot/fastwam_libero_uncond_2cam224` 加载文档中记录的 LIBERO 检查点。
- `action_horizon` 控制预测长度；`n_action_steps` 控制在重新规划前消耗多少步动作，且不能超过前者。
- 在源码检出目录中安装：`pip install -e ".[fastwam,libero]"`。完整评估命令请参见对应版本的指南。

</aside>

一个叠毛巾的机器人可以在选择手臂动作前先生成下一次折叠的视频。这会在每次控制查询中加入视频去噪的开销。**未来预测之所以有用，是因为模型在训练中学到了物理变化，还是因为它在执行时显式地想象了未来？** Fast-WAM 将这两个因素区分开来。

## 前置知识：从未来中学习 vs 生成未来

未来视频监督在训练期间塑造模型参数。未来生成则在部署期间增加额外计算。即便跳过 RGB 解码，仍然可以预测未来潜变量；标准 Fast-WAM 更进一步，在推理时完全不实例化任何未来视频 token。

## 摘要与阅读指南

**简要摘要。** Fast-WAM 在训练时联合训练视频和动作，但在部署时直接从当前视觉表征生成动作。受控的联合去噪、先视频后动作以及无视频训练变体，将监督与推理时的想象区分开来。在测试设置下，去掉视频训练带来的性能损失更大。

**阅读提示。** 这是关于被评估模型和任务的条件性结论。它并未证明对所有动态或分布外问题都不需要未来条件信息，而且视频骨干仍然是策略的一部分。

## 为什么受控变体很重要

传统的世界动作模型要么在动作之前预测视频，要么联合去噪视频和动作。两者都把训练时的视频监督与部署时的未来生成结合在一起。一个在注意力和视频监督上可控变化的统一框架，比起在不相关模型之间比较，更容易评估各自的影响。

## 架构：动作只读取当前观测

该模型复用了 Wan2.2-5B 的视频 DiT、VAE 和文本编码器，并额外加入约 10 亿参数的动作专家，总参数量约为 60 亿。一个结构化的 MoT 注意力模式连接这些分支。

| Token 组 | 训练时可访问内容 | 部署时保留？ |
| --- | --- | --- |
| 干净的当前观测 | 当前视觉锚点和语言 | 是；视觉上下文只计算一次 |
| 带噪的未来视频 | 当前锚点和未来视频组 | 否 |
| 带噪的动作片段 | 当前锚点、语言和动作 | 是；迭代动作去噪 |

动作不能关注未来视频 token，干净的锚点也不会读取其他组。这防止了动作训练依赖于在部署时会消失的未来信息。

在毛巾示例中，视频监督教会模型移动一个角会如何改变布料。动作分支始终从当前布料和指令中学习其运动。共享参数在不把未来作为动作输入的前提下，迁移有用的结构。

<figure className="paper-reading-figure" data-reading-figure="fastwam/architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fastwam/architecture.png" alt="协同训练期间的视频与动作分支" loading="lazy" />
  <figcaption><strong>协同训练期间的视频与动作分支。</strong> 来源：Fast-WAM 论文。训练从语言和当前观测预测未来视频潜变量和动作片段。注意力掩码决定动作是否可以读取未来；同时画出两个分支本身并不意味着存在这种依赖。</figcaption>
</figure>

### 训练与推理

目标函数同时包含视频和动作流损失：

$$
\mathcal L=\lambda_v\mathcal L_{\mathrm{video}}+\lambda_a\mathcal L_{\mathrm{action}}.
$$

视频去噪塑造动态表征；动作去噪重建示教。部署流程为：当前观测 → 一次视觉编码 → 动作去噪 → 部分执行 → 新观测。32 步预测视野并不要求在重新规划前执行完全部 32 步。

<figure className="paper-reading-figure" data-reading-figure="fastwam/attention-masks">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fastwam/attention-masks.png" alt="训练与推理中的注意力依赖关系" loading="lazy" style={{maxWidth: "380px", marginInline: "auto"}} />
  <figcaption><strong>训练与推理中的注意力依赖关系。</strong> 来源：Fast-WAM 论文。行是查询，列是可读的键。动作可以读取当前帧和动作，但不能读取未来帧。在推理时移除未来 token 仍然保留了这一路径，将视频监督与运行时视频生成区分开来。</figcaption>
</figure>

## 数据：“无具身预训练”的含义

骨干从预训练视频权重开始。论文中“无具身预训练”指的是没有额外的大规模机器人动作预训练阶段，而不是随机初始化。

评估覆盖 LIBERO、干净和随机化的 RoboTwin 2.0，以及真实的 Galaxea R1 Lite 叠毛巾任务。真实任务使用 60 小时遥操作和每个模型 3 万步训练，同时报告成功率和完成时间。

## 实验：去除未来生成的证据

| 统一框架方法 | LIBERO 均值 | RoboTwin 均值 |
| --- | ---: | ---: |
| Fast-WAM | 97.6% | 91.8% |
| 联合视频/动作去噪 | 98.5% | 90.6% |
| 先视频后动作 IDM | 98.0% | 91.3% |
| 无视频协同训练 | 93.5% | 83.8% |

这些是论文在不同基准上的成功率。直接动作推断在 LIBERO 上略低于生成未来的变体，在 RoboTwin 上则略高。去掉视频训练带来的损失更稳定：分别为 4.1 和 8.0 个百分点。这些证据支持视频监督的重要性，而不是证明直接推断在准确率上具有普适优势。

RoboTwin 在每个干净/随机化设置下，每个任务使用 100 次试验。只有在完成任务后，试验才计为成功，而平均值可能掩盖个别困难任务。

对于折叠任务，仅看最终成功会掩盖多次抓取失败。完成时间衡量执行是否高效。文中约 190 ms 的推理延迟来自作者的测量配置；它不是电机控制频率。

## LeRobot 集成与结果边界

0.7.0 版本会接收图像、状态、动作和指令。相机视角在水平方向拼接，并且必须与 `image_size` 匹配。该检查点使用外部视觉 `IDENTITY` 预处理，因为模型会在内部重新缩放图像；如果同时应用两种变换，就会进行两次归一化。

文档中的检查点在四个 LIBERO 套件上的得分分别为 97.6%、99.0%、95.0% 和 94.0%，在 2,000 个 episode 上的平均为 96.4%。论文中的 97.6% 均值是另一组实验结果。

评估参数片段包括：

```bash
--policy.path=lerobot/fastwam_libero_uncond_2cam224
--policy.dtype=float32
--policy.n_action_steps=10
--env.type=libero
--env.task=libero_10
--eval.n_episodes=50
```

一次完整的评估会遍历所有四个套件及其任务，并在渲染、夹爪处理、随机种子和回合限制上保持一致。

## 结论

Fast-WAM 将有用的训练信号与重复出现的部署计算分离开来。其掩码可以防止未来的信息泄露，而在受控变体中，在测试设置下，保留视频训练比保留视频生成带来更大的收益。任务分布和时延条件限定了这一结论的适用范围。

</div>
