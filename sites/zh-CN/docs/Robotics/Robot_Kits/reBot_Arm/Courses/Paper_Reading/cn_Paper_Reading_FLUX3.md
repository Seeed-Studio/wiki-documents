---
description: "精读 FLUX 3 Action 的核心机制、训练与实验，了解 LeRobot v0.7.0 接入范围。"
title: "FLUX 3 Action：联合预测视频与动作，怎样兼顾控制效果和速度"
hide_title: true
keywords: ["论文精读","FLUX 3 Action","世界动作模型","联合视频动作预测","蒸馏","实时控制","LeRobot"]
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
    "value": "预备知识：延迟与实时因子为什么不是同一个量",
    "id": "预备知识延迟与实时因子为什么不是同一个量",
    "level": 2
  },
  {
    "value": "报告主张与阅读线索",
    "id": "报告主张与阅读线索",
    "level": 2
  },
  {
    "value": "核心网络：同一次去噪怎样联系动作与视觉结果",
    "id": "核心网络同一次去噪怎样联系动作与视觉结果",
    "level": 2
  },
  {
    "value": "数据与动作：视频先验怎样接到不同身体",
    "id": "数据与动作视频先验怎样接到不同身体",
    "level": 2
  },
  {
    "value": "训练配方：联合目标之外还要选择什么",
    "id": "训练配方联合目标之外还要选择什么",
    "level": 2
  },
  {
    "value": "为什么视频引导与动作引导分别设置",
    "id": "为什么视频引导与动作引导分别设置",
    "level": 3
  },
  {
    "value": "权重平均与蒸馏怎样影响速度和可靠性",
    "id": "权重平均与蒸馏怎样影响速度和可靠性",
    "level": 3
  },
  {
    "value": "实验：按检查点与协议解释数字",
    "id": "实验按检查点与协议解释数字",
    "level": 2
  },
  {
    "value": "仿真成绩与速度不能跨变体拼接",
    "id": "仿真成绩与速度不能跨变体拼接",
    "level": 3
  },
  {
    "value": "真机小样本测试说明什么",
    "id": "真机小样本测试说明什么",
    "level": 3
  },
  {
    "value": "LeRobot 接入：保留检查点条件与处理器",
    "id": "lerobot-接入保留检查点条件与处理器",
    "level": 2
  },
  {
    "value": "结论",
    "id": "结论",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-flux3-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 论文精读</span>
  <h1 id="paper-reading-flux3-title">FLUX 3 Action：联合预测视频与动作，怎样兼顾控制效果和速度</h1>
  <p className="paper-reading-lead">FLUX 3 Action</p>
  <ul className="paper-reading-badges" aria-label="本篇内容">
    <li><a href="#核心网络同一次去噪怎样联系动作与视觉结果">联合视频动作</a></li>
    <li><a href="#训练配方联合目标之外还要选择什么">训练与蒸馏</a></li>
    <li><a href="#实验按检查点与协议解释数字">实验结果</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://bfl.ai/models/flux-3-action" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">Report</span><span>阅读技术报告</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="接入版本与关键参数">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/flux3" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot FLUX 3 Action 文档 ↗</a>

**LeRobot 关键参数**

- `--policy.path=black-forest-labs/flux-3-action-so101` 加载已适配 SO-101 的模型。
- `--config_path=examples/flux3/lora.json` 使用版本内的任务适配配方；数据集与输出目录另行指定。
- 发布 SO-101 检查点预测 42 步、执行 32 步、30 Hz，使用 `scene` 和 `wrist` 相机。
- 该接入支持推理与 PEFT 任务适配；新身体和全量微调使用作者独立仓库。

</aside>

机器人把蓝色盒子放进容器。联合视频动作模型既预测手臂怎么动，也预测盒子将怎样出现在容器中，但多了一条视频生成路径，计算往往更重。**能否保留联合预测的好处，同时通过训练配方和蒸馏降低执行成本？**

## 预备知识：延迟与实时因子为什么不是同一个量

每次策略查询花费的时间是延迟；这次查询返回多少秒运动，则决定它是否能跟上执行。实时因子定义为：

$$
\mathrm{RTF}=\frac{\text{处理时间}}{\text{预测运动时长}}.
$$

教学例子中，模型甲用 0.4 秒生成 2 秒动作，RTF 为 0.2；模型乙用 0.25 秒生成 1 秒动作，RTF 为 0.25。甲按每秒运动的计算成本更快，但单次响应更慢。这种差异直接影响动态扰动下的重规划。

## 报告主张与阅读线索

**报告概述。** FLUX 3 Action 是约 7B 的世界动作模型，从视频占主要比例的多模态预训练出发，经动作中训练和目标本体微调，联合生成未来视频潜变量与连续动作。报告分析动作表示、噪声调度、分离引导、权重平均与蒸馏，说明模型效果与运行效率怎样受配方影响。

**批注。** 不同采样、引导和蒸馏检查点有不同成绩与速度。报告中的基础模型、引导蒸馏与单步蒸馏不可合并成一个“既最高分又最快”的模型。

## 核心网络：同一次去噪怎样联系动作与视觉结果

冻结的视频 VAE 将相机画面编码到潜空间，冻结的文本编码器提供任务条件。Transformer 同时处理视觉潜变量与动作表示，学习从噪声恢复未来视频和动作块。训练时未来真实视频与动作提供配对监督，执行时从当前观测和指令开始生成。

| 控制环的一步 | 在盒子入容器任务中发生什么 |
| --- | --- |
| 读取观测与状态 | 确定盒子、容器与夹爪的当前位置 |
| 联合去噪 | 生成运动及其预期视觉变化 |
| 动作后处理 | 恢复相应身体的动作单位与顺序 |
| 执行部分动作 | 在真实环境中移动盒子 |
| 重新观测 | 根据是否抓稳、是否进入容器继续查询 |

不显示预测视频只意味着省去像素解码；未来视觉潜变量仍参与联合计算。它与 Fast-WAM 完全移除执行时未来视频词元的方式不同。

<figure className="paper-reading-figure" data-reading-figure="flux3/joint-architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/flux3/joint-architecture.svg" alt="共享主干中的视频与动作联合预测" loading="lazy" />
  <figcaption><strong>共享主干中的视频与动作联合预测。</strong>来源：Black Forest Labs 官方技术报告。任务、视觉历史和状态作为条件，未来与动作特征在共享层中处理，最后分别解码。蒸馏改变采样成本，报告仍保留这一联合预测结构。</figcaption>
</figure>

## 数据与动作：视频先验怎样接到不同身体

通用预训练中超过 95% 词元来自视频。动作中训练再混合游戏、人类第一视角手部、手持夹爪与遥操作数据，并保留一部分原始多模态数据。样本比例与词元比例不同，不能把“多少条样本”直接当成相同计算量。

多数位姿数据采用 EE50：左右或主次末端各 25 维，包含位置、6D 旋转和手部/夹爪通道，未使用的维度补零；另一些数据直接使用关节表示。不同动作空间对应不同输入输出头，目标本体微调可以重新训练其动作接口。

SO-101 发布接入使用六维绝对关节/夹爪命令，与测量状态保持相同关节顺序与单位。它不是将 EE50 的前六个数字直接发给低成本机械臂。

## 训练配方：联合目标之外还要选择什么

视频与动作的信号噪声结构不同，相同数值噪声时刻对两种模态的难度未必相同。报告检查各模态的重建误差，调整训练时间分布，让有效监督覆盖视频与动作各自的重要区域。

目标本体微调还比较相对末端和绝对关节动作，以及训练 batch 和步数。DROID 实验中更大 batch 的关节微调后期超过末端微调，但较小数据预算时，原有末端头仍可能更合适。训练损失继续下降也不一定带来更高闭环成功率。

### 为什么视频引导与动作引导分别设置

无分类器引导 CFG 用条件与无条件预测的差异加强条件影响。联合模型可以分别控制视频和动作的引导强度。报告的网格比较中，视频 4、动作 1 的组合优于简单地把两边都增大。

这与控制问题有关：视觉条件需要围绕目标形成合理变化，而过强的动作引导可能损害连续轨迹。它仍是该模型与实验的结果，不能推广成所有 WAM 的固定参数。

<figure className="paper-reading-figure" data-reading-figure="flux3/split-guidance">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/flux3/split-guidance.svg" alt="视频与动作引导系数的二维对照" loading="lazy" />
  <figcaption><strong>视频与动作引导系数的二维对照。</strong>来源：Black Forest Labs 官方技术报告。横轴为动作 CFG，纵轴为视频 CFG；该组完整 RoboLab-120 扫描在视频 4、动作 1 时达到 42.00%。最优组合并非两者都最大，且不能替代其他蒸馏检查点的多种子均值。</figcaption>
</figure>

### 权重平均与蒸馏怎样影响速度和可靠性

EMA 对多个训练时刻的参数做平滑，减少只取最后一步权重的波动。报告 DROID 对照中原始权重为 36.50%，在线 Power EMA 设置达到 42.00%；SO-101 的接入说明则指出 EMA 收益尚不一致，需在相同试验条件下比较。

引导蒸馏让学生拟合教师经过 CFG 后的预测，减少每步条件/无条件双路计算；步数蒸馏再让学生用一次更新近似多步采样。第二步进一步提速，但伴随成功率下降。

## 实验：按检查点与协议解释数字

### 仿真成绩与速度不能跨变体拼接

报告在 RoboLab-120 给出的单步检查点约 38.3%，引导蒸馏检查点约 42.2%。单步版本更快，但不是最高成功率版本。报告还区分 BF16、FP8 与具体 GPU：按 RTF 优于 π0.5 的情况出现在部分工作站和数据中心配置，消费级 GPU 并不自动具有同样优势。

作者发布文章另列 RoboLab 总分 42.92%。这是另一处发布记录；本篇保留技术报告对应变体的数字，不用 42.92% 替换所有基础与蒸馏行。

### 真机小样本测试说明什么

Positronic 在 Franka 上测试十项 DROID 任务，每项三次，每次最多 240 秒，并使用相同设置与盲测操作。FLUX 3 Action 完成 28/30。30 次试验支持该协议下的可用性，不构成所有环境中接近 93% 成功的保证。

SO-101 还展示不同物体、容器和相机位置的执行。演示视频说明行为例子；若没有相同协议的试验总数，不能把几段成功视频写成泛化成功率。

## LeRobot 接入：保留检查点条件与处理器

v0.7.0 的 SO-101 检查点有自己的历史条件、动作和状态归一化，使用八个观测时刻及两份独立编码的视觉快照。它预测 42 步、执行前 32 步后重规划。这个具体配置与报告中覆盖约 2.13 秒动作的评测变体不同。

```bash
lerobot-train \
  --config_path=examples/flux3/lora.json \
  --policy.path=black-forest-labs/flux-3-action-so101 \
  --dataset.repo_id=YOUR_ORG/YOUR_SO101_DATASET \
  --output_dir=outputs/so101_lora
```

数据集名是待替换值。LoRA 适配主干，机器人动作与条件头完整训练并随检查点保存。相机键为 `observation.images.scene` 与 `observation.images.wrist`，重命名映射在训练和执行中要一致。每个控制时刻更新策略调用，保持历史与已执行动作条件新鲜。

安装需匹配 PyTorch、CUDA 与 NATTEN，按版本文档选择对应构建。改变历史快照数、引导、采样步数或换用蒸馏检查点会改变实验条件，不能仅凭同一策略类型声称结果一致。

## 结论

FLUX 3 Action 保留联合视频动作预测，并通过数据、动作表示、引导、EMA 与蒸馏共同调整效果和成本。它的主要启示是把“预测多久、计算多久、执行多久”和“使用哪个检查点”一起评价，避免用一个最高分与另一个最快速度描述同一模型。

</div>
