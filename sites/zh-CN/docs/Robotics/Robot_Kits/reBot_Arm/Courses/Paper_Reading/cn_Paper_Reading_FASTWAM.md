---
description: "精读 Fast-WAM 的核心机制、训练与实验，了解 LeRobot v0.7.0 接入范围。"
title: "Fast-WAM：训练时预测未来，执行时直接生成动作"
hide_title: true
keywords: ["论文精读","Fast-WAM","世界动作模型","视频共同训练","直接动作推理","LeRobot"]
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
    "value": "预备知识：学过未来与生成未来有什么区别",
    "id": "预备知识学过未来与生成未来有什么区别",
    "level": 2
  },
  {
    "value": "摘要与阅读线索",
    "id": "摘要与阅读线索",
    "level": 2
  },
  {
    "value": "引言与相关工作：怎样把两个因素拆开比较",
    "id": "引言与相关工作怎样把两个因素拆开比较",
    "level": 2
  },
  {
    "value": "核心网络：动作只能读取当前观测",
    "id": "核心网络动作只能读取当前观测",
    "level": 2
  },
  {
    "value": "共同训练怎样保留，推理怎样删减",
    "id": "共同训练怎样保留推理怎样删减",
    "level": 3
  },
  {
    "value": "数据与训练：没有具身预训练不等于没有预训练",
    "id": "数据与训练没有具身预训练不等于没有预训练",
    "level": 2
  },
  {
    "value": "实验：哪些结果支持省去执行时想象",
    "id": "实验哪些结果支持省去执行时想象",
    "level": 2
  },
  {
    "value": "同框架变体比跨模型名次更能解释原因",
    "id": "同框架变体比跨模型名次更能解释原因",
    "level": 3
  },
  {
    "value": "毛巾任务为什么还要看完成时间",
    "id": "毛巾任务为什么还要看完成时间",
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

<section className="paper-reading-intro" aria-labelledby="paper-reading-fastwam-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 论文精读</span>
  <h1 id="paper-reading-fastwam-title">Fast-WAM：训练时预测未来，执行时直接生成动作</h1>
  <p className="paper-reading-lead">Fast-WAM: Do World Action Models Need Test-time Future Imagination?</p>
  <ul className="paper-reading-badges" aria-label="本篇内容">
    <li><a href="#数据与训练没有具身预训练不等于没有预训练">视频共同训练</a></li>
    <li><a href="#核心网络动作只能读取当前观测">直接动作推理</a></li>
    <li><a href="#实验哪些结果支持省去执行时想象">实验结果</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2603.16666v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>阅读论文原文</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="接入版本与关键参数">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/fastwam" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot Fast-WAM 文档 ↗</a>

**LeRobot 关键参数**

- `--policy.type=fastwam` 选择训练策略；从已训练权重执行则使用 `--policy.path`。
- `--policy.path=lerobot/fastwam_libero_uncond_2cam224` 加载文档中的 LIBERO 检查点。
- `action_horizon` 是预测长度，`n_action_steps` 是执行后重新查询的步数；后者不能超过前者。
- 安装使用源码目录中的 `pip install -e ".[fastwam,libero]"`；完整评估命令见版本文档。

</aside>

机器人要把毛巾折起来。如果它每轮都先生成毛巾接下来怎样变形的视频，再据此决定双臂怎么动，就会多出一段视频去噪计算。**未来预测的好处，究竟来自训练时学过物体变化，还是来自执行时真的生成了未来？** Fast-WAM 将这两个因素分开检验。

## 预备知识：学过未来与生成未来有什么区别

视频预测训练给模型一个学习任务：当前画面之后应该出现什么。未来生成推理则要求模型在当前控制查询中，从噪声生成未来视频。前者塑造参数，后者消耗每次查询的计算。

“不解码视频像素”与“不预测未来潜变量”也不同。前者仍可在压缩空间里生成未来；Fast-WAM 的标准推理更进一步，不实例化未来噪声视频词元，只编码干净的当前观测。

## 摘要与阅读线索

**摘要意译。** 作者保留训练时的视频与动作共同学习，但执行时只从当前视觉表示生成动作。通过同一框架中的联合视频动作去噪、先视频后动作，以及移除视频训练的变体，研究区分视频监督和推理想象的作用。所测任务上，移除视频共同训练造成的下降比移除执行时未来生成更明显。

**批注。** 论文回答的是这些模型与实验条件下的取舍。它没有证明所有动态、遮挡或分布外任务都不需要未来条件；也没有把视频模型本身从策略中移除。

## 引言与相关工作：怎样把两个因素拆开比较

传统世界动作模型可以先预测未来，再用逆动力学生成动作，也可以同时对视频与动作去噪。两种做法都把视频训练和推理生成绑定在一起，难以判断到底哪部分贡献了成功率。

Fast-WAM 的控制变量设计更关键：保持共同的视频基础模型与动作专家，再改变注意力关系和视频损失。相比将完全不同的模型放在同一张榜单里，这样更接近回答“未来生成是否值得其计算成本”。

## 核心网络：动作只能读取当前观测

模型使用 Wan2.2-5B 的视频 DiT、视频 VAE 与文本编码器，并增加约 1B 的动作专家，整体约 6B 参数。指令经过文本编码器，图像由 VAE 变成潜变量；视频和动作分支构成 MoT，通过受约束的注意力交换信息。

| 词元组 | 训练时读取什么 | 执行时是否保留 |
| --- | --- | --- |
| 干净的当前观测 | 当前视觉锚点与语言条件 | 保留，视觉主干只计算一次 |
| 带噪未来视频 | 当前锚点与未来视频组 | 移除 |
| 带噪动作块 | 当前锚点、语言与动作组 | 保留，迭代生成动作 |

关键限制是：动作词元看不到未来视频词元，当前锚点也不从未来或动作组读取信息。否则，训练时动作可能利用真实未来携带的线索，部署移除未来后就会失去依赖条件。

回到折毛巾，训练中的视频分支学习“拉起边角会怎样改变布面”，动作分支则始终只能从当前布面和指令学习怎么拉。视频监督通过共享参数改善表示，不必把未来画面直接喂给动作分支。

<figure className="paper-reading-figure" data-reading-figure="fastwam/architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fastwam/architecture.png" alt="视频与动作共同训练的双分支结构" loading="lazy" />
  <figcaption><strong>视频与动作共同训练的双分支结构。</strong>来源：Fast-WAM 论文。训练同时预测未来视频潜变量和动作块，语言与当前画面提供条件。是否允许动作读取未来，取决于下文的注意力掩码；并列画出两条分支本身不表示未来是动作输入。</figcaption>
</figure>

### 共同训练怎样保留，推理怎样删减

训练目标可概括为视频与动作流匹配损失的加权和：

$$
\mathcal L=\lambda_v\mathcal L_{\mathrm{video}}+\lambda_a\mathcal L_{\mathrm{action}}.
$$

这里的两个系数表示不同任务损失的权重。视频去噪教主干捕捉动态，动作去噪教专家恢复示范轨迹。执行时只对动作去噪，视觉上下文可以缓存并反复复用。

教学流程为：当前毛巾图像与指令 → 一次视觉编码 → 多步动作去噪 → 执行部分动作 → 新图像。32 步动作预测长度不意味着控制器必须一次执行全部 32 步；执行段长度另行设置。

<figure className="paper-reading-figure" data-reading-figure="fastwam/attention-masks">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fastwam/attention-masks.png" alt="训练与推理阶段的注意力依赖" loading="lazy" style={{maxWidth: "380px", marginInline: "auto"}} />
  <figcaption><strong>训练与推理阶段的注意力依赖。</strong>来源：Fast-WAM 论文。按行看查询、按列看可读取的键：动作行可以读取当前帧和动作，不能读取未来帧；推理删去未来帧后，这条动作条件路径仍完整，因此可以保留视频训练而省去执行时生成。</figcaption>
</figure>

## 数据与训练：没有具身预训练不等于没有预训练

论文从预训练的视频模型初始化，动作专家再用目标机器人数据学习。其“没有具身预训练”指没有先用大规模机器人动作数据做额外具身预训练，并不意味着模型从随机参数开始。

LIBERO 使用四组操作任务；RoboTwin 2.0 使用双臂任务的干净和随机化环境。真机折毛巾在 Galaxea R1 Lite 上收集了 60 小时遥操作数据，各模型训练 30k 步，比较最终成功和完成时间。

## 实验：哪些结果支持省去执行时想象

### 同框架变体比跨模型名次更能解释原因

下表均为论文报告的成功率。LIBERO 和 RoboTwin 是不同测试集，各自比较，不跨列计算统一总分。

| 同框架方法 | LIBERO 平均 | RoboTwin 平均 |
| --- | ---: | ---: |
| Fast-WAM | 97.6% | 91.8% |
| 联合视频动作去噪 | 98.5% | 90.6% |
| 先视频后动作的 IDM | 98.0% | 91.3% |
| 移除视频共同训练 | 93.5% | 83.8% |

在 LIBERO，直接动作推理低于两种未来生成变体；在 RoboTwin，其均值略高。更一致的变化发生在移除视频训练后，分别下降 4.1 和 8.0 个百分点。这个对照支持视频监督的表示学习价值，而不支持“直接动作在所有任务上都更准”。

RoboTwin 每任务在干净与随机化设置下各评估 100 次。一次试验只有达到任务完成条件才计成功；平均成功率不能说明每项任务都同样可靠。

### 毛巾任务为什么还要看完成时间

允许不断重试时，两个模型最终成功率相近，也可能一个动作连贯、另一个反复抓错。论文同时比较完成时间与成功率，并报告约 190 ms 的推理延迟。该延迟属于作者测量设置；动作频率、动作块覆盖时间和每次查询耗时是不同量，不能将其直接写成电机控制频率。

## LeRobot 接入与论文结果的边界

v0.7.0 的适配读取图像、状态、动作和任务指令，多相机图像水平拼接，宽度之和必须匹配 `image_size`。文档检查点使用外部视觉 `IDENTITY` 处理，模型内部再把图像映射到所需范围，不能重复归一化。

该版本文档报告的检查点四组 LIBERO 成绩依次为 97.6%、99.0%、95.0%、94.0%，共 2,000 次、平均 96.4%。论文的 97.6% 平均属于原始实验，不应替换成适配检查点的标签。

可用于指定组评估的参数片段是：

```bash
--policy.path=lerobot/fastwam_libero_uncond_2cam224
--policy.dtype=float32
--policy.n_action_steps=10
--env.type=libero
--env.task=libero_10
--eval.n_episodes=50
```

完整复测需要遍历四组及相应任务，并保持分辨率、夹爪后处理、随机种子与时长限制一致。

## 结论

Fast-WAM 将训练监督与执行计算拆开：未来可以作为塑造表示的教材，而不必每次都成为动作生成的显式中间结果。注意力掩码保证训练时动作不偷看未来，变体实验则说明在所测环境里，保留视频训练比保留视频推理更重要。这一结论需要连同任务分布与延迟测量条件一起理解。

</div>
