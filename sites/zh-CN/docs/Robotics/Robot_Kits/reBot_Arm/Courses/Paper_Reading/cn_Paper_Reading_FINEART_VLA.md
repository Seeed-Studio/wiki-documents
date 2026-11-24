---
description: "精读 FineART-VLA 的核心机制、训练与实验，了解 LeRobot v0.7.0 接入范围。"
title: "FineART-VLA：用细粒度子任务连接长程目标与双臂动作"
hide_title: true
keywords: ["论文精读","FineART-VLA","VLA","子任务预测","双臂操作","知识隔离","LeRobot"]
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
    "value": "预备知识：目标、子任务与动作是三个时间尺度",
    "id": "预备知识目标子任务与动作是三个时间尺度",
    "level": 2
  },
  {
    "value": "摘要与阅读线索",
    "id": "摘要与阅读线索",
    "level": 2
  },
  {
    "value": "引言与相关工作：长轨迹为什么需要阶段标签",
    "id": "引言与相关工作长轨迹为什么需要阶段标签",
    "level": 2
  },
  {
    "value": "数据：密集标注怎样覆盖双臂操作",
    "id": "数据密集标注怎样覆盖双臂操作",
    "level": 2
  },
  {
    "value": "核心网络：先选择当前子任务，再生成连续动作",
    "id": "核心网络先选择当前子任务再生成连续动作",
    "level": 2
  },
  {
    "value": "三种损失怎样各司其职",
    "id": "三种损失怎样各司其职",
    "level": 3
  },
  {
    "value": "训练与执行：为什么要同时对齐语言和动作",
    "id": "训练与执行为什么要同时对齐语言和动作",
    "level": 2
  },
  {
    "value": "实验：语言对齐改善了什么",
    "id": "实验语言对齐改善了什么",
    "level": 2
  },
  {
    "value": "同样初始条件下比较子任务与知识隔离",
    "id": "同样初始条件下比较子任务与知识隔离",
    "level": 3
  },
  {
    "value": "空间词和长程任务提供不同证据",
    "id": "空间词和长程任务提供不同证据",
    "level": 3
  },
  {
    "value": "长尾与跨本体数据怎样影响迁移",
    "id": "长尾与跨本体数据怎样影响迁移",
    "level": 3
  },
  {
    "value": "LeRobot 接入：保留子任务能力需要什么",
    "id": "lerobot-接入保留子任务能力需要什么",
    "level": 2
  },
  {
    "value": "结论",
    "id": "结论",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-fineart_vla-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 论文精读</span>
  <h1 id="paper-reading-fineart_vla-title">FineART-VLA：用细粒度子任务连接长程目标与双臂动作</h1>
  <p className="paper-reading-lead">FineART: Fine-Grained Annotated Robotic Trajectory Dataset and Vision-Language-Action Model for Bimanual Manipulation</p>
  <ul className="paper-reading-badges" aria-label="本篇内容">
    <li><a href="#核心网络先选择当前子任务再生成连续动作">子任务预测</a></li>
    <li><a href="#三种损失怎样各司其职">知识隔离</a></li>
    <li><a href="#实验语言对齐改善了什么">实验结果</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2609.36416v3" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>阅读论文原文</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="接入版本与关键参数">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/fineart_vla" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot FineART-VLA 文档 ↗</a>

**LeRobot 关键参数**

- `--policy.path=lerobot/fineart_vla_base`：从 FineART 中训练后的检查点开始适配。
- `--policy.type=fineart_vla --policy.pretrained_path=lerobot/pi05_base`：从 π0.5 基础权重开始另一条训练路线，不能与上一项当作等价初始化。
- 训练语言规划需要带时间边界的 `subtask` 标注；只有普通任务字符串的数据不会自动教会模型生成子任务。
- 交互执行由 `lerobot-rollout` 管理，`--autosteer_interval_s=3` 设置规划查询间隔；完整机器人与相机配置见版本文档。

</aside>

机器人要准备早餐：取杯子、摆餐具，再把食品放到合适的位置。同一句“准备早餐”会贯穿数分钟，但每一时刻的手部运动并不相同。杯子还在桌上时应该抓杯子，杯子已经放好时应该转向下一步。**如果示范只给整段轨迹一个总目标，模型从哪里学会当前该做哪一步？**

## 预备知识：目标、子任务与动作是三个时间尺度

总目标描述最终状态，子任务描述当前一段操作，动作块给出接下来若干控制时刻的数值目标。FineART 将子任务标注对齐到示范时间线上，使每一帧除了拥有动作标签，还能找到当时正在执行的低层语言指令。

| 在早餐场景中 | 表示什么 | 怎样进入学习 |
| --- | --- | --- |
| 准备早餐 | 整段任务目标 | 作为子任务预测的条件 |
| 将杯子放到架子上 | 当前操作阶段 | 既是语言预测标签，也是动作控制条件 |
| 双臂关节与夹爪目标序列 | 具体运动 | 监督连续动作与离散动作分支 |

子任务并不等于单个电机命令。“放杯子”仍包含接近、抓稳、移动和释放；细粒度标注的作用是缩小当前控制问题，而不是把每个控制周期写成一句话。

## 摘要与阅读线索

**摘要意译。** FineART 提供密集子任务标注的双臂示范：40,543 个 episode、1,718 小时、151 项任务和 533,913 个子任务。FineART-VLA 在 π0.5 基础上学习预测下一子任务，并用子任务条件生成连续动作。研究把数据粒度、子任务训练、知识隔离和跨本体适配分别做对照，检验模型是否更会理解空间词、组合长程步骤和利用新机器人的少量数据。

**批注。** 数据规模与策略机制要分开读。更多示范提供经验，子任务标签提供阶段监督，知识隔离控制不同损失怎样改变视觉语言主干。一个有效的比较需要保持其余条件相同，才能把结果归因于其中一项。

## 引言与相关工作：长轨迹为什么需要阶段标签

长程任务的困难不只在长度。相近画面可能对应不同阶段，同一动作也可能服务于不同目标。只标整段任务，训练样本会把这些差异压进隐含表示；标出当前子任务后，模型可以显式学习“现在该做什么”。

与直接预测动作的 π0.5 接口相比，FineART-VLA 增加了可生成语言的规划路径。与独立大模型规划器加低层控制器的流水线相比，它在同一个策略中训练语言与动作，并允许人工直接指定子任务。它需要的是与动作时间对齐的监督，而不只是给整段视频写一段更长的描述。

## 数据：密集标注怎样覆盖双臂操作

FineART 的主体是可复用的抓取、放置和语义整理，同时保留布料、工具装配、柔性线缆和精细插入等长尾操作。长尾数据让同样的“移动到目标”出现在接触关系、物体形变与精度要求不同的条件下。

以折毛巾为例，标注需要跟随真实操作阶段：抓起一侧、移向另一侧、放下，再进入下一折。边界过早会让“放下”的语言配上“仍在移动”的动作；边界过晚则会把后续动作教给前一个子任务。因此，语言标注质量直接影响低层控制的条件分布。

中训练使用任务平衡采样，任务拥有 $n_i$ 帧时，其采样权重与 $n_i^{0.5}$ 成正比。这介于逐帧等权与逐任务等权之间。若两项任务分别有 100 和 400 帧，教学例子中的权重是 10 和 20，采样比例为 1:2，而非按原始帧数形成 1:4。

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/subtask-annotations">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fineart_vla/subtask-annotations.png" alt="总目标与子任务的时间对齐" loading="lazy" />
  <figcaption><strong>总目标与子任务的时间对齐。</strong>来源：FineART 论文。整段装袋任务被切成长度不同的操作阶段，说明阶段标签需要对齐时间边界。图中的子任务名称是示意分类，不是数据集中的逐字标注。</figcaption>
</figure>

## 核心网络：先选择当前子任务，再生成连续动作

论文中的 ALOHA 设置读取鸟瞰与两路腕部图像、14 维双臂关节和夹爪状态。动作块包含 50 步，每步 14 维。视觉语言主干结合 SigLIP 和 Gemma，另有 Gemma 风格的连续动作专家。

| 路径 | 输入 | 处理 | 输出 |
| --- | --- | --- | --- |
| 子任务预测 | 当前观测与总目标 | 语言头逐词生成 | 当前低层指令 |
| 离散动作学习 | 观测与子任务 | 预测 FAST 动作词元 | 训练主干理解动作的监督 |
| 连续动作生成 | 观测、状态、子任务与噪声动作 | 动作专家进行流匹配去噪 | 可交给控制器的动作块 |

部署时，规划查询生成“把杯子放到架子上”，控制查询在这条指令有效期间持续生成动作。运行时按可配置的间隔，结合新观测与原始总目标重新推断当前子任务；它不自动检测子任务是否完成。语言规划与动作控制可以使用不同频率；不需要每生成一个动作块就重新解释完整任务。

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/teaching-three-timescales">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/fineart-three-timescales-zh-v1.png" alt="总目标、子任务与连续动作的三个时间尺度" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>总目标、子任务与连续动作的三个时间尺度。</strong>AI 生成的教学示意。阶段查询结合当前观测与总目标选择子任务，同一子任务可指导多个动作块；执行后用真实观测继续控制。图中动作名称用于说明轨迹阶段，实际控制输出是连续数值。</figcaption>
</figure>

### 三种损失怎样各司其职

论文将连续流匹配、FAST 动作词元预测和子任务文本预测组合起来：

$$
\mathcal L=10\mathcal L_{\mathrm{flow}}+\mathcal L_{\mathrm{FAST}}+\lambda_{\mathrm{text}}\mathcal L_{\mathrm{text}}.
$$

开启子任务训练时，30% 样本训练总目标到子任务的预测，70% 样本用子任务条件训练动作。上述比例是训练采样方式，不是机器人把 30% 的执行时间花在规划上。

知识隔离使连续动作损失不沿主干的键和值反向传播。动作专家仍然读取视觉语言上下文，但主干主要通过文本与离散动作损失学习。它阻断的是一条梯度路径，并不阻断前向的信息传递，也不意味着整个主干永久冻结。

## 训练与执行：为什么要同时对齐语言和动作

训练时，示范提供真实子任务与真实动作；运行时，子任务通常来自模型自己的预测。低层动作训练需要学会遵循子任务，规划训练则需要学会从当前画面判断阶段。只有前者，模型可能会执行人工指令却不会自主推进；只有后者，模型可能说对下一步却做不出来。

一次闭环依次是：读取画面与状态、查询或保留当前子任务、生成动作块、执行一段动作、接收新观测。人工也可直接给子任务，帮助区分规划错误与运动执行错误。论文中的 50 步预测长度与具体运行时的重规划间隔是不同参数。

## 实验：语言对齐改善了什么

### 同样初始条件下比较子任务与知识隔离

ALOHA 对照每项任务运行 25 次，并固定 25 组初始摆放。论文同时报告成功率 SR 和进度率 PR。以四阶段放杯任务为教学例子：完成接近、抓取和移动，最后放置失败，这次成功记 0，而进度可以记 75%。二者不能互换。

论文用 2×2 对照分别开关子任务训练和知识隔离。两者组合对分布外泛化最有利，但单项任务的变化并不一致：简单架上放杯任务中，保留知识隔离而不训练子任务的结果高于同时开启两者；更有阶段歧义的任务则可能受益于子任务监督。因此，不能把“显式规划”写成每项任务都会提高的保证。

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/subtask-insulation-ablation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fineart_vla/subtask-insulation-ablation.png" alt="子任务训练与知识隔离的对照" loading="lazy" />
  <figcaption><strong>子任务训练与知识隔离的对照。</strong>来源：FineART 论文。实色柱为成功率，浅色背景柱为进度率；两项机制组合在分布外组最有利。每项任务 25 次、每类 50 次，整体 150 次；类别均值不能代替单项任务结论。</figcaption>
</figure>

### 空间词和长程任务提供不同证据

“将甜甜圈放入左、中、右箱”只改变空间词。在知识隔离都关闭的对照中，子任务训练使成功率从 32% 提高到 100%，每组 25 次。无子任务训练组的 17 次失败都放错箱子，说明这个对照主要检验空间语言是否真正影响目标选择。

准备早餐实验使用训练中出现过的子步骤，但完整顺序未出现过。论文报告逐步人工子任务指导可将该未见长程任务的成功率从 16% 提至 76%。这一结果包含人工指导条件，不能当作全自主规划的成绩。

### 长尾与跨本体数据怎样影响迁移

在保持训练步数相同的长尾消融中，移除复杂接触类别使总体成功率由 24.7% 降至 14.0%。这组实验的模型设置与前面的最佳组合不同，比较的是同一消融内的数据组成。

跨本体部分从 ALOHA 中训练模型出发，再适配 YAM，检验新身体上的数据效率与未见任务组合。这里的迁移依然经过目标本体适配；不能将论文的跨本体能力解释为更换关节顺序后立即零样本控制。

## LeRobot 接入：保留子任务能力需要什么

v0.7.0 支持 FineART-VLA 的训练、文本查询和动作执行。数据需要图像、状态、动作、任务，以及所选配方消费的 `language_persistent`、`language_events` 语言列。默认配方使用连续的子任务时间线，额外的记忆或问答能力需要对应标注与运行控制。

从中训练检查点加载时，要保留其配方、动作分词器和处理器。新数据的动作归一化、相机命名和状态维度还需与目标机器人匹配。不能只把普通 π0.5 的策略类型改名，就认为已经获得论文中的语言规划能力。

可在训练命令中使用以下参数片段，数据集名与输出路径需替换为实际值：

```bash
--policy.path=lerobot/fineart_vla_base
--policy.dtype=bfloat16
--policy.gradient_checkpointing=true
--policy.tokenizer_max_length=256
```

这些是接入参数，论文的空间与长程任务成绩来自其原始实验协议。

## 结论

FineART-VLA 将总目标、阶段语言和连续动作放进同一条学习链。密集标注让模型知道每一段动作在完成什么，子任务生成提供可干预的阶段接口，知识隔离则帮助保留主干能力。实验最有说服力的部分来自相同条件下的子任务、梯度和数据组成对照；自主执行能力仍受阶段判断、接触精度与目标本体数据的共同限制。

</div>
