---
description: "深入解析 MolmoAct2：机制、训练、实验，以及 LeRobot v0.7.0 集成范围。"
title: "MolmoAct2：从离散动作学习到逐层连续控制"
hide_title: true
keywords: ["Paper Deep-Dive","MolmoAct2","VLA","Layer-Wise KV","Action Tokenization","Continuous Control","LeRobot"]
slug: /robotics/paper_reading_molmoact2
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
    "value": "先决条件：一次示教的两种表示",
    "id": "prerequisites-two-representations-of-one-demonstration",
    "level": 2
  },
  {
    "value": "摘要与阅读指引",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "为何分阶段引入动作",
    "id": "why-introduce-actions-in-stages",
    "level": 2
  },
  {
    "value": "数据：共享时长，不同控制语义",
    "id": "data-shared-duration-distinct-control-semantics",
    "level": 2
  },
  {
    "value": "离散预训练：教骨干网络机器人动作",
    "id": "discrete-pretraining-teaching-the-backbone-robot-actions",
    "level": 2
  },
  {
    "value": "连续后训练：在每一层读取 KV",
    "id": "continuous-post-training-reading-kv-at-every-layer",
    "level": 2
  },
  {
    "value": "防止目标泄漏与控制梯度",
    "id": "preventing-target-leakage-and-controlling-gradients",
    "level": 3
  },
  {
    "value": "Think：只更新发生变化的深度区域",
    "id": "think-updating-only-changed-depth-regions",
    "level": 2
  },
  {
    "value": "实验：比较具有不同训练历史的检查点",
    "id": "experiments-comparing-checkpoints-with-different-training-histories",
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

<section className="paper-reading-intro" aria-labelledby="paper-reading-molmoact2-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-molmoact2-title">MolmoAct2：从离散动作学习到逐层连续控制</h1>
  <p className="paper-reading-lead">MolmoAct2：面向真实部署的动作推理模型</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#discrete-pretraining-teaching-the-backbone-robot-actions">离散到连续</a></li>
    <li><a href="#continuous-post-training-reading-kv-at-every-layer">逐层 KV</a></li>
    <li><a href="#think-updating-only-changed-depth-regions">自适应深度</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2605.02881v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>阅读论文</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/molmoact2" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot MolmoAct2 文档 ↗</a>

**LeRobot 参数**

- `--policy.type=molmoact2 --policy.checkpoint_path=allenai/MolmoAct2` 从作者的格式初始化。
- `--policy.path=allenai/MolmoAct2-LIBERO-LeRobot` 加载已保存的 LeRobot 检查点和处理器。
- LIBERO 使用 `--policy.chunk_size=10 --policy.n_action_steps=10`，并采用相对末端执行器控制。
- 该适配器支持标准 MolmoAct2，不支持自适应深度的 MolmoAct2-Think 变体。

</aside>

机器人必须把离碗最近的杯子放进碗里。理解空间关系和产生精确运动是不同的需求。**连续控制器如何才能可靠地利用视觉语言骨干网络中已经存在的知识？**

## 先决条件：一次示教的两种表示

离散动作 token 让语言模型通过下一个 token 预测来学习轨迹。连续动作保留用于流匹配的数值控制值。它们可以在不变成顺序部署控制器的前提下，对同一次示教进行监督。

注意力键和值（KV）在每一层编码上下文。贯穿整个网络读取它们，使动作专家能够访问多于一个的最终池化特征。

## 摘要与阅读指引

**简要摘要。** MolmoAct2 加强具身理解，先学习一个离散机器人接口，然后再加入连续流专家。它发布了多具身数据、动作 tokenizer、代码和模型，并研究了一种复用未变化空间区域的深度推理变体。

**阅读提示。** 标准 MolmoAct2 和 Think 是不同的推理路径。后者的中间深度生成并不是每个检查点或带版本的 LeRobot 适配器都具备的能力。

## 为何分阶段引入动作

同时拟合新的状态接口、动作编码和随机初始化的连续专家，是一个困难的优化问题。离散预训练首先用骨干网络熟悉的目标，让 VLM 具备动作感知能力。之后的专家就可以从一个具备机器人感知的骨干网络中学习连续控制。

逐层 KV 不同于最终层条件化。知识隔离也依赖于阶段：后训练和具身特定微调使用不同的梯度设置。

## 数据：共享时长，不同控制语义

主要的机器人数据来源是双臂 YAM、SO-100/101 和 DROID，并辅以更小的机器人数据集和多模态样本。空间问答、指向、多视角对应和视频理解提供具身对齐。

动作块覆盖 1 秒：30 Hz 的 YAM/SO-100/101 为 30 步，DROID 为 15 步，论文中的 10 Hz LIBERO 设置为 10 步。动作被填充到宽度 32，掩码会排除人工维度和时间步。设置/控制字符串区分绝对关节与相对末端执行器位姿；填充不会让它们的物理含义可以互换。

## 离散预训练：教骨干网络机器人动作

FAST 风格的 tokenizer 将轨迹变换到频域，对系数进行量化，并用 2,048 token 的动作词表执行 BPE。连续通道使用百分位统计，夹爪单独处理，离散化状态被写入提示中。

VLM 读取观测、指令、设置/控制描述和状态，然后预测动作 token。该阶段没有连续专家。多模态联合训练有助于保持更广泛的视觉语言能力。

## 连续后训练：在每一层读取 KV

36 层的 DiT 专家与骨干深度一致。其模块先进行动作自注意力，再对来自对应 VLM 层的投影 KV 做交叉注意力，最后施加前馈变换。

| 路径 | 在杯子任务中的角色 |
| --- | --- |
| 图像、语言、状态 → VLM | 表征目标杯子、碗和机器人 |
| 各层 KV → 投影 → 交叉注意力 | 在动作生成过程中持续提供上下文 |
| 含噪动作 → 流专家 | 在时间维度上协调轨迹 |
| 动作 → 后处理器 | 恢复控制单位 |

对于示教块 $A$ 和噪声 $\epsilon$，

$$
X_t=(1-t)\epsilon+tA,\qquad u^\star=A-\epsilon.
$$

带掩码的流损失训练速度预测器。在一个教学示例中，目标为 0.6、噪声为 −0.2，中点是 0.2，目标速度是 0.8。这是沿归一化生成路径的速度，而不是电机转速指令。

<figure className="paper-reading-figure" data-reading-figure="molmoact2/layerwise-kv">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/molmoact2/layerwise-kv.png" alt="动作专家的逐层骨干 KV 条件化" loading="lazy" />
  <figcaption><strong>动作专家的逐层骨干 KV 条件化。</strong> 来源：MolmoAct2 论文。每一层专家都会读取投影后的骨干键和值。离散监督和连续流匹配承担不同角色；目标动作 token 会从连续条件路径中被掩蔽，以防止泄漏。</figcaption>
</figure>

### 防止目标泄漏与控制梯度

后训练同时监督离散和连续输出，但会从专家的上下文中掩蔽真实动作 token。否则控制器可能会从部署时不可用的答案中学习。

后训练会对 KV 做梯度截断：流损失训练专家和适配器，而下一个 token 损失训练 VLM。具身特定微调则移除这种隔离，允许流梯度进入骨干。因此 VLM 在整个流水线中并不是冻结的。

## Think：只更新发生变化的深度区域

Think 在动作之前生成一个 10×10 的深度 token 网格。第一次查询填满全部 100 个位置。之后的查询会比较当前和之前的 RGB 区域，重新生成发生变化的单元格，并重放未变化单元格的缓存编码。

填充好的深度前缀通过 KV 对专家进行条件化。移动的杯子和夹爪可以触发更新，而静态背景会被复用。这些是预测的深度编码，而不是有保证的传感器测量，变化检测仍然可能失败。

<figure className="paper-reading-figure" data-reading-figure="molmoact2/adaptive-depth">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/molmoact2/adaptive-depth.png" alt="复用静态区域的自适应深度推理" loading="lazy" />
  <figcaption><strong>复用静态区域的自适应深度推理。</strong> 来源：MolmoAct2 论文。在通过 KV 连接对动作进行条件化之前，会在观测发生变化的地方更新深度编码。图中展示的是 Think 变体；普通策略和 LeRobot 集成不会自动执行这种推理。</figcaption>
</figure>

## 实验：比较具有不同训练历史的检查点

带版本的 LeRobot 结果从作者的 LIBERO 检查点出发，在 8 张 H100 GPU 上以每张卡 batch 为 32 又进行了 10k 步微调。

| LIBERO 套件 | 原始结果 | 额外训练的 LeRobot checkpoint |
| --- | ---: | ---: |
| Spatial | 97.8% | 98.4% |
| Object | 100.0% | 100.0% |
| Goal | 97.8% | 98.0% |
| Long / 10 | 93.2% | 96.6% |
| Mean | 97.20% | 98.25% |

这些是完整任务的成功率。1.05 个百分点的差异不能仅仅归因于格式转换，因为训练发生了变化。最大的差异出现在 long 套件上。

具身问答、深度推理和闭环动作测试的是不同的能力。正确识别目标并不能保证抓取成功，而 Think 的几何生成开销必须与普通动作推理分开衡量。

## LeRobot 集成与结果边界

版本 0.7.0 支持标准训练和评估。对原始 HF 权重使用 `checkpoint_path`，对已保存的 LeRobot 策略目录使用 `policy.path`。

对于 LIBERO，需要匹配发布的 `norm_stats.json`、相机顺序、增强方式、夹爪处理方式和控制模式。近似的数据集分位数与作者的统计量并不完全相同。SO-100/101 关节符号和零偏移也需要进行物理坐标系转换；padding 无法完成这一点。

```bash
--policy.type=molmoact2
--policy.checkpoint_path=allenai/MolmoAct2
--policy.action_mode=continuous
--policy.norm_tag=libero
--policy.chunk_size=10
--policy.n_action_steps=10
```

这些是训练片段，需要匹配的数据、统计量和图像设置。请通过作者的实现来研究 Think；普通策略名称在此版本中并不会启用它。

## 结论

MolmoAct2 首先建立一个离散的机器人接口，然后通过逐层 KV 将视觉-语言上下文迁移到连续动作。目标掩码和分阶段梯度解释了它是如何学习的。部署时必须区分标准模型与 Think 模型，以及原始与额外训练的 adapter checkpoint。

</div>
