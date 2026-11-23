---
description: "精读 X-VLA 的核心机制、训练与实验，了解 LeRobot v0.7.0 接入范围。"
title: "X-VLA：用可学习软提示吸收跨本体差异"
hide_title: true
keywords: ["论文精读","X-VLA","VLA","软提示","跨本体","Flow Matching","LeRobot"]
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
    "value": "预备知识：软提示不是一句身体描述",
    "id": "预备知识软提示不是一句身体描述",
    "level": 2
  },
  {
    "value": "摘要与阅读线索",
    "id": "摘要与阅读线索",
    "level": 2
  },
  {
    "value": "引言与相关工作：差异不只出现在输出层",
    "id": "引言与相关工作差异不只出现在输出层",
    "level": 2
  },
  {
    "value": "核心网络：三个信息流怎样汇合",
    "id": "核心网络三个信息流怎样汇合",
    "level": 2
  },
  {
    "value": "动作表示：统一结构与统一物理含义",
    "id": "动作表示统一结构与统一物理含义",
    "level": 2
  },
  {
    "value": "训练与适配：先热身新提示，再联合调整",
    "id": "训练与适配先热身新提示再联合调整",
    "level": 2
  },
  {
    "value": "实验：共享能力与适配成本分别怎么看",
    "id": "实验共享能力与适配成本分别怎么看",
    "level": 2
  },
  {
    "value": "完整适配与参数高效结果分开比较",
    "id": "完整适配与参数高效结果分开比较",
    "level": 3
  },
  {
    "value": "更大规模是否有更好的下游表现",
    "id": "更大规模是否有更好的下游表现",
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

<section className="paper-reading-intro" aria-labelledby="paper-reading-x_vla-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 论文精读</span>
  <h1 id="paper-reading-x_vla-title">X-VLA：用可学习软提示吸收跨本体差异</h1>
  <p className="paper-reading-lead">X-VLA: Soft-Prompted Transformer as Scalable Cross-Embodiment Vision-Language-Action Model</p>
  <ul className="paper-reading-badges" aria-label="本篇内容">
    <li><a href="#核心网络三个信息流怎样汇合">跨本体软提示</a></li>
    <li><a href="#动作表示统一结构与统一物理含义">动作表示</a></li>
    <li><a href="#实验共享能力与适配成本分别怎么看">适配与实验</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2510.10274v1" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>阅读论文原文</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="接入版本与关键参数">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/xvla" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot X-VLA 文档 ↗</a>

**LeRobot 关键参数**

- `--policy.path=lerobot/xvla-base` 从跨本体基础模型开始适配。
- `--policy.action_mode=auto` 根据数据配置动作处理，不能自动修正物理单位与坐标系。
- `--policy.domain_id` 选择软提示对应的域；相机、数据集和本体配置应与该域匹配。
- 版本文档的完整微调示例允许训练视觉、语言、策略网络和软提示；它不等于只训练软提示的参数高效实验。

</aside>

同样是“把杯子放到碗里”，Franka 单臂、双臂机器人和低成本机械臂的关节数、相机位置与控制单位都可能不同。只把动作补到相同维度，视觉与动作之间的关系仍不一样。**能否给共享网络一小组可学习的条件，让它知道当前面对哪一类身体和数据分布？**

## 预备知识：软提示不是一句身体描述

自然语言提示用文字描述机器人，软提示则是一组连续可学习向量，不需要翻译成可读的词。域编号选择对应的向量，训练再调整其数值。

域也不必与机器人型号一一对应。同一身体配不同相机、控制协议与任务数据，可以形成不同域。软提示携带的是训练中学到的差异，不能仅凭给新机器人分配一个编号就获得正确控制。

## 摘要与阅读线索

**摘要意译。** X-VLA 为异构机器人数据引入域专属软提示，使共享 Transformer 在生成动作的早期就感知不同数据源的特点。模型结合主视角视觉语言编码、辅助视角编码、本体状态和流匹配动作生成，研究规模扩展、目标域适配与少参数训练。

**批注。** 核心不是把每个身体拆成独立模型，而是在共享网络中保留域条件。全量适配和约 1% 参数更新的实验是不同训练预算，不能把其中的成功率相互替代。

## 引言与相关工作：差异不只出现在输出层

只为不同机器人设置动作头，可以解决输出维度，却不能让前面的视觉推理知道相机和身体差异。域专属输入投影又可能改变预训练表示的分布；人工文字身体描述则依赖设计者写对细节。

X-VLA 将软提示在动作生成早期注入，使网络从融合观测时就带有域条件。论文在对齐的数据与训练配方下比较这些处理异构性的方案，重点看训练稳定性与下游适配。

<figure className="paper-reading-figure" data-reading-figure="x_vla/heterogeneity-comparison">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/x_vla/heterogeneity-comparison.png" alt="跨本体差异处理方式的验证误差对照" loading="lazy" />
  <figcaption><strong>跨本体差异处理方式的验证误差对照。</strong>来源：X-VLA 论文。相近训练配方下，软提示曲线在后段取得更低的留出集动作误差，为融合阶段接入域条件提供证据。纵轴是离线预测误差，不是机器人任务成功率。</figcaption>
</figure>

## 核心网络：三个信息流怎样汇合

模型的主视角图像与指令进入 Florence-Large 视觉语言编码器；腕部等辅助视角由共享视觉网络编码。本体状态与带噪动作、时间嵌入组合并投影，随后与域提示和视觉语言特征一起进入标准 Transformer。

| 信息 | 杯子任务中的作用 |
| --- | --- |
| 主视角与指令 | 判断哪个杯子、哪个碗是目标 |
| 辅助视角 | 补足接触与抓取位置细节 |
| 当前状态与噪声动作 | 给出身体所在位置与待生成的轨迹 |
| 域软提示 | 调节共享网络如何解释当前配置 |

可以用下式概括条件接口，式中的记号用于教学说明：

$$
\hat A=\operatorname{Flow}_{\theta}(\epsilon\mid E(I,L),q,p_d).
$$

其中 $p_d$ 是域 $d$ 的软提示，$q$ 是状态，$E(I,L)$ 是多模态编码，$\epsilon$ 是动作噪声。域条件影响生成过程，但实际坐标和单位仍由数据准备与处理器保证。

<figure className="paper-reading-figure" data-reading-figure="x_vla/architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/x_vla/xvla-architecture2.png" alt="域专属软提示与共享多模态计算" loading="lazy" />
  <figcaption><strong>域专属软提示与共享多模态计算。</strong>来源：LeRobot 官方文档。域编号查询软提示和动作投影，再与多模态、控制词元共同进入共享 Transformer。图中 0.04% 指域专属模块的结构占比，与正文中约 1% 可训练参数的适配实验不是同一个比例。</figcaption>
</figure>

## 动作表示：统一结构与统一物理含义

论文将动作统一为末端位置、6D 旋转与夹爪状态。6D 旋转是一种连续表示，并不代表旋转有六个自由度。单臂与双臂可使用对应的结构，未使用通道通过掩码或补齐处理。

预训练还用 30 个锚点概括未来 4 秒的轨迹意图，减少过细动作与人为抖动对高层学习的影响。这个稀疏时间表示不是所有机器人执行时的固定控制频率。

教学例子中，两个数据集的位置分别以米与毫米记录，补齐相同维度后数值仍相差 1,000 倍。软提示不能替代明确的单位转换。旋转约定、左右臂顺序和夹爪开闭方向也需要先对齐。

## 训练与适配：先热身新提示，再联合调整

预训练联合优化共享网络与各域软提示。新域适配时，论文主流程先固定预训练权重、热身新提示，再解冻进行联合适配。这样先找到可利用旧知识的条件，再逐步调整共享表示。

论文另外研究只更新少量参数的参数高效适配，约更新 9M、即 1% 参数。它是独立预算下的结果，不应将“约 1% 参数”描述成所有 X-VLA 训练方式的固定要求。

执行时，处理器选择域、整理图像与状态，网络从噪声生成动作块，动作处理器恢复本体格式。每轮重新接收观测形成闭环；软提示是模型参数，不是会自动积累的在线任务记忆。

## 实验：共享能力与适配成本分别怎么看

### 完整适配与参数高效结果分开比较

论文的完整适配 X-VLA-0.9B 在 LIBERO 四组报告 98.2%、98.6%、97.8%、97.6%，平均约 98.1%。另一个只更新约 9M 参数的实验报告 LIBERO 约 93%、Simpler-WidowX 约 54%。前者测试适配后的能力，后者测试更少可训练参数下的取舍。

LIBERO 的 Spatial、Object、Goal 与 Long 各有不同泛化要求。单个均值不能替代长任务成绩；Simpler 与 LIBERO 也不是相同机器人、相同试验协议。

### 更大规模是否有更好的下游表现

规模实验改变模型容量、数据多样性与数据量，并用留出集动作误差观察趋势。较小动作误差与下游提升相关，但离线轨迹误差并不是闭环成功率：一个很小的抓取偏差仍可能使夹爪错过杯沿。

真实机器人展示包括布料操作等精细任务。它们说明适配后的可用技能范围，不代表域提示单独解决了接触、形变与所有未知身体的问题。

## LeRobot 接入与论文结果的边界

v0.7.0 提供动作模式注册与处理器、域编号和软提示训练设置。适配新机器人时，可从以下参数片段进入：

```bash
--policy.path=lerobot/xvla-base
--policy.action_mode=auto
--policy.dtype=bfloat16
--policy.train_soft_prompts=true
--policy.train_policy_transformer=true
```

还需按训练策略设置视觉与语言模块是否冻结，并提供真实数据集、目标域、图像键与输出位置。若要重做少参数实验，应明确限制训练模块，而不能直接使用全量微调命令后仍声称只训练了 1%。

文档中的 `lerobot/xvla-libero` 说明为约 93% 的发布检查点，与论文完整适配的 98.1% 不是同一个口径。LIBERO 的腕部相机旋转和状态/动作表示也由专用处理器处理，直接调用裸网络会跳过这些约定。

## 结论

X-VLA 让共享策略在动作生成早期接收域专属可学习条件，从而更好地吸收不同身体、相机和数据分布。软提示提供参数化的适配入口，物理表示与处理器负责控制一致性。完整适配与参数高效适配各有证据和预算，需要分别阅读。

</div>
