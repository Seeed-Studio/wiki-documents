---
description: "精读 MolmoAct2 的核心机制、训练与实验，了解 LeRobot v0.7.0 接入范围。"
title: "MolmoAct2：先学离散动作，再用逐层视觉语言信息生成连续控制"
hide_title: true
keywords: ["论文精读","MolmoAct2","VLA","逐层 KV","动作分词","连续控制","LeRobot"]
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
    "value": "预备知识：离散动作与连续动作可以共同学习",
    "id": "预备知识离散动作与连续动作可以共同学习",
    "level": 2
  },
  {
    "value": "摘要与阅读线索",
    "id": "摘要与阅读线索",
    "level": 2
  },
  {
    "value": "引言与相关工作：为什么分阶段接入动作",
    "id": "引言与相关工作为什么分阶段接入动作",
    "level": 2
  },
  {
    "value": "数据：统一时间长度，同时保留控制语义",
    "id": "数据统一时间长度同时保留控制语义",
    "level": 2
  },
  {
    "value": "第一阶段：用离散动作教主干认识机器人",
    "id": "第一阶段用离散动作教主干认识机器人",
    "level": 2
  },
  {
    "value": "第二阶段：动作专家逐层读取主干的 KV",
    "id": "第二阶段动作专家逐层读取主干的-kv",
    "level": 2
  },
  {
    "value": "为什么不能把目标动作词元交给连续专家",
    "id": "为什么不能把目标动作词元交给连续专家",
    "level": 3
  },
  {
    "value": "Think 变体：只重算发生变化的深度区域",
    "id": "think-变体只重算发生变化的深度区域",
    "level": 2
  },
  {
    "value": "实验：原始结果与接入结果怎样对照",
    "id": "实验原始结果与接入结果怎样对照",
    "level": 2
  },
  {
    "value": "同一基准下先说明检查点的训练经历",
    "id": "同一基准下先说明检查点的训练经历",
    "level": 3
  },
  {
    "value": "语言理解、深度推理和实际动作分别评估",
    "id": "语言理解深度推理和实际动作分别评估",
    "level": 3
  },
  {
    "value": "LeRobot 接入与论文结果的边界",
    "id": "lerobot-接入与论文结果的边界",
    "level": 2
  },
  {
    "value": "结论",
    "id": "结论",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-molmoact2-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 论文精读</span>
  <h1 id="paper-reading-molmoact2-title">MolmoAct2：先学离散动作，再用逐层视觉语言信息生成连续控制</h1>
  <p className="paper-reading-lead">MolmoAct2: Action Reasoning Models for Real-world Deployment</p>
  <ul className="paper-reading-badges" aria-label="本篇内容">
    <li><a href="#第一阶段用离散动作教主干认识机器人">离散到连续</a></li>
    <li><a href="#第二阶段动作专家逐层读取主干的-kv">逐层 KV</a></li>
    <li><a href="#think-变体只重算发生变化的深度区域">自适应深度</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2605.02881v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>阅读论文原文</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="接入版本与关键参数">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/molmoact2" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot MolmoAct2 文档 ↗</a>

**LeRobot 关键参数**

- `--policy.type=molmoact2 --policy.checkpoint_path=allenai/MolmoAct2` 从作者发布格式初始化。
- `--policy.path=allenai/MolmoAct2-LIBERO-LeRobot` 加载已经转换并保存处理器的 LeRobot 检查点；两种加载入口不能混用。
- LIBERO 配置使用 `--policy.chunk_size=10 --policy.n_action_steps=10`，动作是相对末端控制。
- v0.7.0 支持普通 MolmoAct2；论文中的自适应深度变体 MolmoAct2-Think 不在该适配范围内。

</aside>

桌上有几个杯子，机器人被要求“把最靠近碗的杯子放进去”。模型既要理解空间关系，又要输出精确运动。只让语言模型说出“选左边那个”还不够；让新动作网络从头承担全部视觉理解也浪费了主干的知识。**怎样把视觉语言模型已经学会的信息稳定地交给连续控制？**

## 预备知识：离散动作与连续动作可以共同学习

离散动作把一段轨迹压缩成可预测的词元，适合语言模型的下一词元目标；连续动作直接保留控制数值，适合流匹配生成。它们可以描述同一份示范，而不必构成两段顺序执行的控制器。

键和值 KV 是注意力层对上下文的内部表示。动作专家读取这些张量，可以在各层获取视觉、指令与状态信息；这与只读取主干最后一层的单个向量不同。

## 摘要与阅读线索

**摘要意译。** MolmoAct2 先强化视觉语言主干的具身理解，再通过离散动作预训练建立机器人接口，随后接入连续流匹配专家。研究公开多本体数据、动作分词器、训练代码和模型，并研究自适应深度推理变体，以减少重复预测几何信息的成本。

**批注。** “动作推理模型”包含不同路径。普通模型通过主干上下文生成连续动作；Think 变体还生成深度词元。不能把后者的中间深度推理能力自动归给普通检查点或 LeRobot 接口。

## 引言与相关工作：为什么分阶段接入动作

从预训练 VLM 直接联合训练随机动作头，模型必须同时学习新状态表示、动作编码和连续生成。MolmoAct2 先用主干熟悉的下一词元训练，使其认识机器人状态与动作，再增加连续专家，减轻同时对齐多个新接口的困难。

与只输出离散动作的 VLA 相比，连续专家减少了部署时对动作词元解码的依赖；与只在主干末层取特征的控制器相比，逐层 KV 提供多个深度的上下文。其知识隔离也具有阶段性，后训练与目标本体微调的梯度设置并不相同。

## 数据：统一时间长度，同时保留控制语义

机器人数据主体来自双臂 YAM、SO-100/101 与 DROID，另有规模较小的机器人数据和通用多模态样本。具身理解训练包含空间问答、定位、多视角对应与视频理解，帮助主干理解选择目标所需的信息。

一段动作覆盖一秒，但不同数据频率不同：30 Hz 的 YAM/SO-100/101 有 30 步，15 Hz 的 DROID 有 15 步，论文 LIBERO 设置为 10 Hz、10 步。训练将动作宽度补到 32，并用掩码排除补齐维度与时间步。

本体和控制类型还写入提示，区分绝对关节位置与相对末端位姿。统一张量形状只是批处理接口，不能把这两种数值当成同一种物理动作。

## 第一阶段：用离散动作教主干认识机器人

动作分词器沿用 FAST 的频域压缩思路，将一秒轨迹变换、量化，再用 BPE 编码进 2,048 个动作词元的词表。连续数值按分位数统计归一化，夹爪单独处理。状态经过离散化后进入提示。

主干读取图像、指令、身体描述、控制方式和状态，预测动作词元。预训练只使用自回归目标，尚未训练连续动作专家。多模态数据与机器人数据共同训练，避免把主干完全变成只识别单一机器人数据格式的网络。

## 第二阶段：动作专家逐层读取主干的 KV

后训练增加与主干同为 36 层的 DiT 动作专家。每层依次处理动作自注意力、对主干的交叉注意力和前馈变换。主干同层的键和值经过投影后提供给动作专家。

| 信息流 | 在杯子任务中承担什么作用 |
| --- | --- |
| 图像、语言与状态 → 主干 | 形成目标杯、碗的位置与当前机器人状态的上下文 |
| 各层 KV → 投影 → 动作交叉注意力 | 在动作生成的不同深度持续提供条件 |
| 噪声动作 → 动作自注意力与流匹配 | 协调同一段轨迹中的多个动作时刻 |
| 连续动作 → 反归一化与控制器 | 恢复实际单位并执行 |

设示范动作块为 $A$，高斯噪声为 $\epsilon$，从噪声到数据的插值为：

$$
X_t=(1-t)\epsilon+tA,\qquad u^\star=A-\epsilon.
$$

动作专家预测速度场，训练时只在有效维度和时间步上计算误差。教学例子中，某归一化坐标的示范值为 0.6、噪声值为 −0.2，则中点输入为 0.2，目标速度为 0.8。它是去噪路径上的数值，不是要求电机以 0.8 的速度运行。

<figure className="paper-reading-figure" data-reading-figure="molmoact2/layerwise-kv">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/molmoact2/layerwise-kv.png" alt="主干逐层 KV 与连续动作专家" loading="lazy" />
  <figcaption><strong>主干逐层 KV 与连续动作专家。</strong>来源：MolmoAct2 论文。动作专家在每层读取主干投影后的键和值；上方离散动作监督与右侧连续流匹配各有职责。目标动作词元在连续条件路径中被遮蔽，避免训练时泄漏答案。</figcaption>
</figure>

### 为什么不能把目标动作词元交给连续专家

后训练同时监督离散动作与连续动作，但连续专家的上下文屏蔽了真实离散动作标签。否则，专家可以从训练答案推断连续轨迹，运行时却没有答案可读。

后训练将 KV 路径分离梯度，流损失更新动作专家与投影层，主干由下一词元损失更新。目标本体微调时，论文取消这条隔离，使流损失也能更新主干。不能用“知识隔离”概括所有阶段并推断主干始终冻结。

## Think 变体：只重算发生变化的深度区域

Think 在动作生成前加入 10×10 的深度词元网格。第一次查询生成完整的 100 个深度位置；后续比较当前与上一幅图像的对应区域，对变化区域重新预测，未变化区域复用缓存代码。

以杯子入碗为例，杯子和夹爪移动时，相关区域需要更新，静止背景可重用。填好的深度前缀再通过 KV 影响动作专家。这不是直接读取深度传感器，也不是因为复用了缓存就获得了真实几何保证；图像变化判定与深度预测仍可能出错。

<figure className="paper-reading-figure" data-reading-figure="molmoact2/adaptive-depth">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/molmoact2/adaptive-depth.png" alt="复用静态区域的自适应深度推理" loading="lazy" />
  <figcaption><strong>复用静态区域的自适应深度推理。</strong>来源：MolmoAct2 论文。上方深度序列体现随画面变化进行局部更新，再通过 KV 条件影响动作。该图解释 Think 变体，不代表普通 MolmoAct2 或 LeRobot 接入默认执行同样的深度推理。</figcaption>
</figure>

## 实验：原始结果与接入结果怎样对照

### 同一基准下先说明检查点的训练经历

论文普通 MolmoAct2 的 LIBERO 四组平均为 97.20%。LeRobot 文档中的转换模型从作者 LIBERO 检查点额外微调 10k 步，使用 8 张 H100、每卡 batch 32，再进行评估。

| LIBERO 组别 | 作者原始结果 | 额外微调的 LeRobot 检查点 |
| --- | ---: | ---: |
| Spatial | 97.8% | 98.4% |
| Object | 100.0% | 100.0% |
| Goal | 97.8% | 98.0% |
| Long / 10 | 93.2% | 96.6% |
| 平均 | 97.20% | 98.25% |

这些是完整任务成功率。后一列训练预算发生变化，不能据此断言“仅转换格式便提高了 1.05 个百分点”。Long 子集差异也大于其他组，均值会掩盖这种分布。

### 语言理解、深度推理和实际动作分别评估

具身问答检验的是判断与定位，机器人评估检验的是闭环完成。答对“哪个杯子更近”不等于抓取成功；Think 的深度成本与普通动作头延迟也需要分开测量。论文覆盖多个仿真与真机场景，其结论仍对应相应数据与控制接口。

## LeRobot 接入与论文结果的边界

v0.7.0 支持普通 MolmoAct2 的训练与评估。原始 Hugging Face 权重使用 `checkpoint_path`；LeRobot 保存目录使用 `policy.path`，后者带有匹配的处理器。

LIBERO 训练需核对作者发布的 `norm_stats.json`，不能把近似数据集分位数当作完全相同的统计；相机顺序、图像增强、夹爪归一化和末端动作模式也需对齐。SO-100/101 的关节符号与零位转换属于控制接口准备，不由 32 维补齐自动完成。

```bash
--policy.type=molmoact2
--policy.checkpoint_path=allenai/MolmoAct2
--policy.action_mode=continuous
--policy.norm_tag=libero
--policy.chunk_size=10
--policy.n_action_steps=10
```

以上只是 LIBERO 训练配置片段，完整命令还需要数据、作者统计文件和对应图像配置。Think 的自适应深度路径应使用作者实现研究，不能在此版本中用普通策略名启用。

## 结论

MolmoAct2 用离散动作先建立主干的机器人接口，再通过逐层 KV 把理解能力交给连续控制。目标泄漏屏蔽与分阶段梯度设置是理解训练的关键。部署时还需区分普通与 Think 模型，以及原始论文检查点和经过额外训练的 LeRobot 检查点。

</div>
