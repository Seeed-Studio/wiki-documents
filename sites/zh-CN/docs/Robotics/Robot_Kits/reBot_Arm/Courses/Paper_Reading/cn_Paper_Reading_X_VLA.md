---
description: "深入解析 X-VLA：机制、训练、实验以及 LeRobot v0.7.0 集成范围。"
title: "X-VLA：通过可学习软提示吸收具身差异"
hide_title: true
keywords: ["Paper Deep-Dive","X-VLA","VLA","Soft Prompts","Cross-Embodiment","Flow Matching","LeRobot"]
slug: /robotics/paper_reading_x_vla
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
    "value": "前置知识：软提示不是机器人描述",
    "id": "prerequisites-a-soft-prompt-is-not-a-robot-description",
    "level": 2
  },
  {
    "value": "摘要与阅读指引",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "为什么仅靠输出头是不够的",
    "id": "why-output-heads-alone-are-insufficient",
    "level": 2
  },
  {
    "value": "架构：结合三路信息流",
    "id": "architecture-combining-three-information-streams",
    "level": 2
  },
  {
    "value": "动作表示：形状不保证语义",
    "id": "action-representation-shape-does-not-guarantee-meaning",
    "level": 2
  },
  {
    "value": "训练与适配",
    "id": "training-and-adaptation",
    "level": 2
  },
  {
    "value": "实验：能力与适配成本",
    "id": "experiments-capability-and-adaptation-cost",
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

<section className="paper-reading-intro" aria-labelledby="paper-reading-x_vla-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-x_vla-title">X-VLA：通过可学习软提示吸收具身差异</h1>
  <p className="paper-reading-lead">X-VLA：作为可扩展跨具身视觉-语言-动作模型的软提示 Transformer</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-combining-three-information-streams">具身软提示</a></li>
    <li><a href="#action-representation-shape-does-not-guarantee-meaning">动作表示</a></li>
    <li><a href="#experiments-capability-and-adaptation-cost">适配与实验</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2510.10274v1" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>阅读论文</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/xvla" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot X-VLA 文档 ↗</a>

**LeRobot 参数**

- `--policy.path=lerobot/xvla-base` 从跨具身基础模型开始。
- `--policy.action_mode=auto` 选择动作处理方式；它无法自动修复物理单位或坐标约定。
- `--policy.domain_id` 选择域提示，且必须与数据/控制配置匹配。
- 文档中的完整微调训练的不仅仅是提示，这与论文中的参数高效实验不同。

</aside>

“把杯子放进碗里”在 Franka、双臂机器人和低成本机械臂上，可能需要不同的关节、相机解释和单位。张量宽度相同并不能对齐这些关系。**一个小的可学习条件能否告诉共享策略它正在使用哪种机体和数据分布？**

## 前置知识：软提示不是机器人描述

软提示是由域标识符选择的连续可训练向量。一个域可以编码相机、控制器和数据集配置，而不仅仅是机器人模型。仅仅分配一个新的标识符并不会提供一个已训练的控制器。

## 摘要与阅读指引

**简要摘要。** X-VLA 在动作生成的早期注入域特定软提示。主视角视觉-语言特征、辅助图像、机器人状态和基于流的动作生成共享一个 Transformer 框架。实验研究了规模、目标域适配以及低参数更新。

**阅读提示。** 完整适配与大约 1% 可训练参数的实验在预算和得分上是不同的。

## 为什么仅靠输出头是不够的

域特定输出投影可以处理维度问题，但不会告知更早期的视觉解释。域特定输入投影可能扰动预训练表示，而手写机器人描述需要人工设计。软提示在多模态融合过程中提供可学习条件。论文在对齐的训练配方下比较了不同的异质性处理方法。

<figure className="paper-reading-figure" data-reading-figure="x_vla/heterogeneity-comparison">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/x_vla/heterogeneity-comparison.png" alt="处理异质性方法的验证误差" loading="lazy" />
  <figcaption><strong>处理异质性方法的验证误差。</strong> 来源：X-VLA 论文。在对齐的训练配方下，软提示在训练后期达到更低的留出动作误差，支持在融合阶段进行域条件化。纵轴衡量的是离线预测误差，而不是闭环任务成功率。</figcaption>
</figure>

## 架构：结合三路信息流

Florence-Large 处理主视角和指令。一个共享视觉骨干网络编码辅助视角。机器人状态、带噪动作和时间嵌入被投影后，与域提示和视觉-语言特征一起通过标准 Transformer 层进行融合。

| 信息 | 在放置杯子中的作用 |
| --- | --- |
| 主视角和语言 | 识别被请求的杯子和碗 |
| 辅助视角 | 解析局部抓取/接触几何关系 |
| 状态和带噪动作 | 锚定机体和轨迹 |
| 域提示 | 将共享计算条件化到当前设置上 |

一个用于教学的接口记号是

$$
\hat A=\operatorname{Flow}_{\theta}(\epsilon\mid E(I,L),q,p_d).
$$

这里 $p_d$ 选择已学习的域条件，$q$ 是状态，$\epsilon$ 是动作噪声。物理约定仍由数据准备和处理器负责。

<figure className="paper-reading-figure" data-reading-figure="x_vla/architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/x_vla/xvla-architecture2.png" alt="域特定提示与共享多模态计算" loading="lazy" />
  <figcaption><strong>域特定提示与共享多模态计算。</strong> 来源：官方 LeRobot 文档。一个域 ID 在共享 Transformer 计算之前选择提示和动作投影。图中的 0.04% 是架构中域特定模块所占的比例，与大约 1% 可训练参数的适配实验不同。</figcaption>
</figure>

## 动作表示：形状不保证语义

论文将末端执行器位置、6D 旋转和夹爪状态进行了标准化。6D 旋转编码并不意味着有六个旋转自由度。它还在预训练期间使用 4 秒内的 30 个轨迹锚点，以抽象掉过于细粒度的运动；这并不是一个通用的部署控制频率。

例如，米和毫米坐标在填充到相同宽度后仍然相差 1000 倍。提示无法替代单位转换、旋转约定、机械臂顺序或夹爪方向对齐。

## 训练与适配

预训练联合优化共享参数和域提示。主要的适配流程首先在冻结预训练权重的情况下预热新提示，然后解冻进行联合专门化。一个单独的参数高效研究更新了大约 900 万个参数，即模型的 1% 左右。

在执行时，处理器选择域并组织观测；flow matching 生成动作，后处理恢复机器人接口。提示是已学习参数，而不是不断累积的在线任务记忆。

## 实验：能力与适配成本

完整适配的 X-VLA-0.9B 报告的 LIBERO 得分为 98.2%、98.6%、97.8% 和 97.6%，平均约为 98.1%。大约 900 万参数更新的实验在 LIBERO 上约为 93%，在 Simpler-WidowX 上约为 54%。这些衡量的是不同的权衡。

尺度研究改变模型容量、数据多样性和数据量，测量留出动作误差和下游行为。更低的离线误差可能与更好的适配相关，但并不等同于闭环成功：一个很小的抓取误差仍然可能错过杯子。

真实机器人演示包括适配后的精细布料操作。它们并不能证明仅靠提示就能解决任意未见机体或接触问题。

## LeRobot 集成与结果边界

0.7.0 版本包含动作模式、处理器、域标识符和提示训练选项。训练片段包括：

```bash
--policy.path=lerobot/xvla-base
--policy.action_mode=auto
--policy.dtype=bfloat16
--policy.train_soft_prompts=true
--policy.train_policy_transformer=true
```

需要指定实际数据、域、相机、输出位置以及视觉/语言冻结策略。复现小参数实验需要显式限制可训练模块。

文档中的 `lerobot/xvla-libero` 检查点被描述为大约 93%，与论文中完整适配的 98.1% 分开。专用的 LIBERO 处理器还会处理腕部相机旋转以及状态/动作约定；直接裸调用网络会绕过它们。

## 结论

X-VLA 在足够早的阶段引入已学习的域条件，从而影响动作形成。软提示提供了一个适配接口，而物理表示和处理器维持控制一致性。完整适配与参数高效适配需要分别解读。

</div>
