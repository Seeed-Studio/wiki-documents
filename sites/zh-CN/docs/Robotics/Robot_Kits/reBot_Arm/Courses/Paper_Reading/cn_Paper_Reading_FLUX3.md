---
description: "深入解析 FLUX 3 Action：机制、训练、实验，以及 LeRobot v0.7.0 集成范围。"
title: "FLUX 3 Action：平衡联合视频-动作预测与运行时成本"
hide_title: true
keywords: ["Paper Deep-Dive","FLUX 3 Action","World-Action Models","Joint Video-Action Prediction","Distillation","Real-Time Control","LeRobot"]
slug: /robotics/paper_reading_flux3
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
    "value": "前置知识：延迟与实时因子",
    "id": "prerequisites-latency-and-real-time-factor",
    "level": 2
  },
  {
    "value": "报告主张与阅读指引",
    "id": "report-claims-and-reading-guide",
    "level": 2
  },
  {
    "value": "架构：连接运动与视觉结果",
    "id": "architecture-connecting-motion-and-visual-consequences",
    "level": 2
  },
  {
    "value": "数据与具身接口",
    "id": "data-and-embodiment-interfaces",
    "level": 2
  },
  {
    "value": "训练：超越单一联合目标",
    "id": "training-beyond-a-joint-objective",
    "level": 2
  },
  {
    "value": "分裂式 Guidance",
    "id": "split-guidance",
    "level": 3
  },
  {
    "value": "权重平均与蒸馏",
    "id": "weight-averaging-and-distillation",
    "level": 3
  },
  {
    "value": "实验：保持检查点与协议绑定",
    "id": "experiments-keep-checkpoints-and-protocols-attached",
    "level": 2
  },
  {
    "value": "仿真与效率",
    "id": "simulation-and-efficiency",
    "level": 3
  },
  {
    "value": "物理评估",
    "id": "physical-evaluation",
    "level": 3
  },
  {
    "value": "LeRobot 集成：保留已保存条件",
    "id": "lerobot-integration-preserve-saved-conditions",
    "level": 2
  },
  {
    "value": "结论",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-flux3-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-flux3-title">FLUX 3 Action：平衡联合视频-动作预测与运行时成本</h1>
  <p className="paper-reading-lead">FLUX 3 Action</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-connecting-motion-and-visual-consequences">联合视频与动作</a></li>
    <li><a href="#training-beyond-a-joint-objective">训练与蒸馏</a></li>
    <li><a href="#experiments-keep-checkpoints-and-protocols-attached">实验</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://bfl.ai/models/flux-3-action" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">报告</span><span>阅读报告</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/flux3" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot FLUX 3 Action 文档 ↗</a>

**LeRobot 参数**

- `--policy.path=black-forest-labs/flux-3-action-so101` 加载一个适配 SO-101 的检查点。
- `--config_path=examples/flux3/lora.json` 选择带版本的任务适配配方。
- SO-101 版本预测 42 个动作，并使用 `scene`/`wrist` 相机以 30 Hz 执行其中 32 个。
- 适配器支持推理和 PEFT 任务适配；对于新的具身形式和完整微调，请使用作者的独立仓库。

</aside>

一个机器人将一个蓝色盒子放入容器中。一个联合 world-action 模型同时预测机械臂运动及其视觉结果，但视频生成会增加计算量。**训练配方和蒸馏能否在降低执行成本的同时保留有用的联合预测能力？**

## 前置知识：延迟与实时因子

延迟衡量一次查询的耗时。实时因子则将其处理成本与所预测运动进行比较：

$$
\mathrm{RTF}=\frac{\text{processing time}}{\text{predicted motion duration}}.
$$

在一个教学示例中，0.4 秒的计算对应 2 秒的运动，得到 RTF 为 0.2，而 0.25 秒对应 1 秒则为 0.25。前者每单位运动的成本更好，但即时响应更慢。动态重规划依赖于这种差异。

## 报告主张与阅读指引

**报告概览。** 这个约 70 亿参数的模型从视频占比很高的多模态预训练开始，继续进行动作中期训练，并适配到目标机体。它联合预测未来视频潜变量和连续动作。报告研究了动作格式、噪声调度、分裂式 guidance、权重平均和蒸馏。

**阅读提示。** 基础、guidance 蒸馏和单步检查点在精度与速度上各不相同。它们的最佳数值不能组合成一个单一配置。

## 架构：连接运动与视觉结果

一个冻结的视频 VAE 编码观测，一个冻结的文本编码器提供指令。Transformer 共同对视频和动作表征进行去噪。成对的未来观测/动作用于监督训练；当前观测和语言在部署时作为条件输入。

| 控制阶段 | 放置盒子的示例 |
| --- | --- |
| 观测 | 定位盒子、容器和夹爪 |
| 联合去噪 | 预测运动和预期的视觉变化 |
| 后处理 | 恢复机体的控制约定 |
| 执行 | 消耗部分动作块 |
| 再次观测 | 对实际抓取和放置结果做出响应 |

跳过 RGB 解码仍然会在模型中保留未来潜变量预测。这不同于 Fast-WAM 在推理时移除未来视频 token 的做法。

<figure className="paper-reading-figure" data-reading-figure="flux3/joint-architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/flux3/joint-architecture.svg" alt="Joint video-action prediction in a shared backbone" loading="lazy" />
  <figcaption><strong>共享骨干中的联合视频-动作预测。</strong> 来源：Black Forest Labs 官方报告。任务、视觉历史和状态在共享层中携带未来与动作特征，并分别解码。蒸馏在保留这种联合预测结构的同时改变采样成本。</figcaption>
</figure>

## 数据与具身接口

视频在预训练 token 中占比超过 95%。动作中期训练在保留多模态数据的同时，加入了游戏、第一视角双手、手持夹爪和遥操作。样本比例和 token 比例代表不同的预算。

大多数位姿数据使用 EE50：每个主/副执行器 25 个通道，包括位置、6D 旋转和手/夹爪数值，未使用的维度用填充补齐。部分数据则使用关节空间头。SO-101 适配器使用 6 个绝对关节/夹爪指令，其顺序和单位与测量状态匹配；它不会执行前 6 个 EE50 数值。

## 训练：超越单一联合目标

视频和动作具有不同的信号/噪声结构。报告测量了重建行为，并调整训练时的分布，而不是假设在相同名义噪声水平下难度相同。

DROID 研究也改变了动作表示和 batch 大小。更大 batch 的联合微调最终超过末端执行器微调，而现有的末端执行器头在较小预算下仍然有帮助。训练损失下降并不保证闭环成功率提升。

### 分裂式 Guidance

无分类器 guidance 会放大有条件预测与无条件预测之间的差异。视频和动作的 guidance 可以独立设置。在报告的搜索中，视频 guidance 为 4、动作 guidance 为 1 的组合优于不加区分地同时增大二者。这是该模型的经验性设置，而不是通用的 WAM 常数。

<figure className="paper-reading-figure" data-reading-figure="flux3/split-guidance">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/flux3/split-guidance.svg" alt="Joint sweep of video and action guidance scales" loading="lazy" />
  <figcaption><strong>视频与动作 guidance 比例的联合搜索。</strong> 来源：Black Forest Labs 官方报告。动作 CFG 为横轴，视频 CFG 为纵轴。这个完整的 RoboLab-120 搜索在视频为 4、动作为 1 时达到 42.00% 的峰值。最大化二者并非最优，而且该搜索独立于针对蒸馏检查点的多种随机种子结果。</figcaption>
</figure>

### 权重平均与蒸馏

EMA 在训练更新过程中平滑权重。在 DROID 对比中，原始权重得分为 36.50%，而选定的在线 Power EMA 达到 42.00%。SO-101 集成报告了 EMA 效果的混合结果，需要匹配评估设置。

Guidance 蒸馏让学生模型学习带 guidance 的教师预测，从而避免重复进行有条件/无条件计算。Step 蒸馏则在一次更新中近似多步采样，以一定精度损失换取速度提升。

## 实验：保持检查点与协议绑定

### 仿真与效率

报告给出的单步检查点在 RoboLab-120 上的成功率约为 38.3%，guidance 蒸馏版本为 42.2%。更快的变体并不是得分最高的变体。相较于 π0.5 的 RTF 优势取决于精度和 GPU 等级；消费级 GPU 不会自动复现工作站/数据中心的结果。

作者的发布文章单独列出了 42.92%。这一发表记录不会被替换为每个报告配置的结果。

### 物理评估

Positronic 在 Franka 上评估了 10 个 DROID 任务，每个任务 3 次试验，240 秒上限、匹配条件以及盲测操作员。FLUX 完成了 28/30。这个小规模协议并不能在每个环境中确立约 93% 的成功率。

SO-101 演示展示了变化的物体、容器和相机位置。成功片段说明了行为，但在没有试验次数和匹配协议的情况下，无法确立泛化成功率。

## LeRobot 集成：保留已保存条件

v0.7.0 的 SO-101 检查点携带历史状态/动作条件、8 个观测 tick，以及两个分别编码的视觉快照。它在重规划前预测 42 个动作并执行 32 个，这与报告中约 2.13 秒评估变体是分开的。

```bash
lerobot-train \
  --config_path=examples/flux3/lora.json \
  --policy.path=black-forest-labs/flux-3-action-so101 \
  --dataset.repo_id=YOUR_ORG/YOUR_SO101_DATASET \
  --output_dir=outputs/so101_lora
```

替换数据集占位符。LoRA 会调整 trunk，而动作/条件头则以完整方式训练并被保存。使用匹配的 `observation.images.scene` 和 `observation.images.wrist` 键，或者在训练和 rollout 中使用相同的重命名映射。每个控制周期都调用一次策略，以保持历史记录为最新。

安装需要兼容的 PyTorch、CUDA 和 NATTEN 构建版本。即使策略类型保持不变，更改历史长度、引导方式、采样或蒸馏方式也会改变实验配置。

## 结论

FLUX 3 Action 在保留联合视频/动作预测能力的同时，调整了数据、动作格式、引导方式、平均方式和蒸馏方式。具有意义的评估需要同时考虑预测时长、查询时间、执行长度和检查点标识。

</div>
