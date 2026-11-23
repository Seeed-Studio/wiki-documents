---
description: "精读 Long-WAM 的核心机制、训练与实验，了解 LeRobot v0.7.0 接入范围。"
title: "Long-WAM：让视觉历史真正参与未来预测与动作控制"
hide_title: true
keywords: ["论文精读","Long-WAM","世界动作模型","长上下文","逆动力学","实时控制","LeRobot"]
slug: /robotics/paper_reading_long_wam
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
    "value": "预备知识：历史长度与动作时域分别是什么",
    "id": "预备知识历史长度与动作时域分别是什么",
    "level": 2
  },
  {
    "value": "摘要与阅读线索",
    "id": "摘要与阅读线索",
    "level": 2
  },
  {
    "value": "引言与相关工作：为什么双向视频模型不一定会用历史",
    "id": "引言与相关工作为什么双向视频模型不一定会用历史",
    "level": 2
  },
  {
    "value": "视频预训练：先学会由历史预测下一段变化",
    "id": "视频预训练先学会由历史预测下一段变化",
    "level": 2
  },
  {
    "value": "核心网络：历史与未来怎样共同进入动作专家",
    "id": "核心网络历史与未来怎样共同进入动作专家",
    "level": 2
  },
  {
    "value": "训练时的未来与部署时的未来有什么不同",
    "id": "训练时的未来与部署时的未来有什么不同",
    "level": 3
  },
  {
    "value": "实时执行：长历史的成本怎样降低",
    "id": "实时执行长历史的成本怎样降低",
    "level": 2
  },
  {
    "value": "实验：历史、未来和系统各自提供什么",
    "id": "实验历史未来和系统各自提供什么",
    "level": 2
  },
  {
    "value": "历史必须配合合适的初始化",
    "id": "历史必须配合合适的初始化",
    "level": 3
  },
  {
    "value": "保留未来条件对长任务与动态任务的影响",
    "id": "保留未来条件对长任务与动态任务的影响",
    "level": 3
  },
  {
    "value": "真机展示与高层规划需要分别解释",
    "id": "真机展示与高层规划需要分别解释",
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

<section className="paper-reading-intro" aria-labelledby="paper-reading-long_wam-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 论文精读</span>
  <h1 id="paper-reading-long_wam-title">Long-WAM：让视觉历史真正参与未来预测与动作控制</h1>
  <p className="paper-reading-lead">Long-WAM: Scaling the Context of World-Action Models</p>
  <ul className="paper-reading-badges" aria-label="本篇内容">
    <li><a href="#视频预训练先学会由历史预测下一段变化">视觉历史</a></li>
    <li><a href="#核心网络历史与未来怎样共同进入动作专家">预测与动作</a></li>
    <li><a href="#实时执行长历史的成本怎样降低">实时执行</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2610.10528v1" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>阅读论文原文</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="接入版本与关键参数">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/longwam" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot Long-WAM 文档 ↗</a>

**LeRobot 关键参数**

- `--policy.path=Efficient-Large-Model/Long-WAM-LIBERO-IDM-LeRobot` 加载先预测后行动的检查点。
- `past_obs_steps=48` 表示保留的历史控制时刻数，不是未来动作长度。
- `inference_action_horizon=80` 与 `n_action_steps=10` 分别指定预测与执行的长度。
- 每个控制时刻都调用 `select_action`，包括动作队列尚未耗尽时，才能持续更新历史；v0.7.0 接入验证范围是同步推理。

</aside>

传送带上的杯子正在向左移动。单张画面只能说明它现在在哪里，几张历史画面才能说明它往哪边走、速度多快。另一个任务中，机器人刚从柜子取走杯子，当前画面又与开始时相似，但下一步应该关柜门。**给策略更长的历史，是否就能自动获得运动判断和任务记忆？**

## 预备知识：历史长度与动作时域分别是什么

历史是决策前已经观测到的信息，预测时域是决策后模型要生成的未来，执行长度则是重新观测前实际消费的动作数。三者可以不同。

教学例子中，20 Hz 控制下的 48 个过去控制时刻对应 2.4 秒，执行 10 步对应 0.5 秒。它们不意味着策略每次只看 10 张图，也不意味着预测长度必须是 48。视觉采样还可以按 `video_stride` 降采样。

<figure className="paper-reading-figure" data-reading-figure="long_wam/teaching-history-future-feedback">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/long-wam-history-future-feedback-zh-v2.png" alt="真实历史、预测未来与执行反馈的闭环" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>真实历史、预测未来与执行反馈的闭环。</strong>AI 生成的教学示意。蓝框表示真实观测，紫色虚框表示预测；历史与预测未来共同作为动作条件。只有执行后的新相机观测进入真实历史，预测结果不作为已经发生的事实。</figcaption>
</figure>

## 摘要与阅读线索

**摘要意译。** Long-WAM 先通过自回归视频训练学习历史到未来的依赖，再保持因果结构适配机器人动作。模型结合真实历史与预测未来潜变量生成动作，系统侧通过流式编码、异步执行和硬件优化降低延迟。论文比较不同视频初始化、历史长度与生成方式，说明能接收历史和学会利用历史是两个问题。

**批注。** 网络机制与执行系统共同构成贡献。长历史需要已学到的时间依赖；速度提升需要具体硬件和实现。论文的异步部署结果不能直接套用到只验证同步模式的 LeRobot 接入。

## 引言与相关工作：为什么双向视频模型不一定会用历史

视频生成可以在一段片段内双向读取帧，机器人控制却必须从已发生的观测推断未来。仅在动作微调时添加历史输入，未必能让原来的模型形成稳定的“过去影响未来”的使用方式。

与执行时不预测未来的 Fast-WAM 相比，Long-WAM 保留未来潜变量条件；与仅延长输入窗口的做法相比，它首先在视频预训练阶段学习时间因果关系。问题由“窗口能装多少帧”变成“模型是否学过用这些帧预测物理变化”。

## 视频预训练：先学会由历史预测下一段变化

LongLive2.0-Robot 从 LongLive-2.0 的自回归视频检查点继续训练，使用机器人和第一视角视频，不要求这些视频共享动作标签。训练采用块因果注意力：当前块可以读取更早的真实上下文，而不能读取之后的块。

教师强制让多个目标块在同一训练中并行监督，每块都有自己的真实历史前缀。论文还对历史加入缓冲误差扰动，让预测器学习应对接近实际滚动生成时的偏差。历史提供条件，未来提供监督；干净条件图像不作为待去噪目标。

## 核心网络：历史与未来怎样共同进入动作专家

视频查询只能读取当前及更早的视觉块，不读取动作；动作查询可以读取已观测历史、带噪的未来和整个动作块。这种非对称接口保留视频模型的时间结构，并让控制使用预测到的变化。

| IDM 的一步 | 输入 | 输出如何用于下一步 |
| --- | --- | --- |
| 预测未来潜变量 | 真实视觉历史、指令和状态条件 | 得到带有未来动态的信息 |
| 预填充视觉网络 | 历史与预测未来 | 缓存各层视觉键和值 |
| 动作去噪 | 缓存、状态与噪声动作 | 生成连续动作块 |
| 闭环更新 | 执行得到的新观测 | 替换历史中的真实观测部分 |

IDM 指先预测视觉变化，再推断产生变化的动作。未来潜变量不需要解码成 RGB，且不必去噪到完全干净。论文默认 V4 在噪声水平 $\sigma_\star=0.9$ 停止，随后将视觉缓存复用于动作去噪。

<figure className="paper-reading-figure" data-reading-figure="long_wam/overview">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/overview.png" alt="从因果视频预训练到历史条件动作生成" loading="lazy" />
  <figcaption><strong>从因果视频预训练到历史条件动作生成。</strong>来源：Long-WAM 论文。下方流程区分真实观测历史、想象未来与动作专家；KV 缓存保留的是历史上下文。部署后仍需读取实际执行的新画面，不能把想象结果直接写成已经发生的历史。</figcaption>
</figure>

### 训练时的未来与部署时的未来有什么不同

训练先优化视频流匹配，再用真实未来的加噪版本作为动作条件。部署用模型预测的未来代替。动作训练阶段将视觉缓存分离梯度，因此动作损失更新动作专家与本体状态适配器，视频分支由自己的预测损失学习。

这与“视觉分支不看动作”是两件事：前者控制反向更新，后者控制前向信息。把预测未来说成真实未来，或把两种隔离混为一谈，都会误解模型的闭环。

## 实时执行：长历史的成本怎样降低

流式 VAE 在新观测到达时逐段编码，复用因果缓存，避免每次查询都重新处理整段历史。异步执行在机器人消费当前动作时预备下一段动作，让预测计算与运动重叠。

设重叠部分覆盖 $O\Delta t$ 秒，下一段动作的准备时间是 $T_{\mathrm{ready}}$，理想衔接需要：

$$
T_{\mathrm{ready}}\leq O\Delta t.
$$

这是理解交接期限的关系式。即使平均推理足够快，某一轮编码超时也可能使机器人停等。论文 RTX 5090 上的 107.4 ms 来自完整优化配置，并包含未来潜变量预测，不代表所有设备、窗口和接口都有这一延迟。

<figure className="paper-reading-figure" data-reading-figure="long_wam/streaming-execution">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/streaming-execution.png" alt="流式编码与整窗编码的异步交接" loading="lazy" />
  <figcaption><strong>流式编码与整窗编码的异步交接。</strong>来源：Long-WAM 论文。上方在观测到达时编码，下方等到整窗就绪再编码；后者的等待会推迟动作交接。两组使用相同名义触发间隔与重叠，图中节省的是调度等待，不是单独测得的成功率提升。</figcaption>
</figure>

## 实验：历史、未来和系统各自提供什么

### 历史必须配合合适的初始化

作者比较双向视频初始化、通用自回归初始化和机器人领域自回归初始化。RoboCasa GR-1 的长上下文结果达到 78.7%；自回归初始化更能利用长历史，双向初始化没有同样的净收益。增加输入窗口本身不是充分条件，不同任务的最佳历史长度也不同。

<figure className="paper-reading-figure" data-reading-figure="long_wam/context-scaling">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/context-scaling.png" alt="不同视频初始化下的历史窗口扩展" loading="lazy" />
  <figcaption><strong>不同视频初始化下的历史窗口扩展。</strong>来源：Long-WAM 论文。横轴为等间距绘制的离散窗口配置。机器人因果初始化在 LIBERO-Long 的 2.4 秒、RoboCasa 的 19.2 秒达到图示峰值；继续加长并不持续提高成功率，双向初始化也没有获得同等收益。</figcaption>
</figure>

### 保留未来条件对长任务与动态任务的影响

论文报告以下仿真成功率。LIBERO 四组平均与 Long 子集分别列出；RoboTwin 的干净/随机化平均是另一套任务。

| 方法 | LIBERO 平均 | LIBERO-Long | RoboTwin 平均 |
| --- | ---: | ---: | ---: |
| Long-WAM，不预测未来 | 97.3% | 94.5% | 92.0% |
| Long-WAM，联合去噪 CoD | 97.8% | 95.8% | 93.6% |
| Long-WAM，IDM | 99.5% | 99.5% | 94.4% |

动态 DOMINO 在动态数据微调后达到 34.9% 成功率，仍明显低于静态操作基准。不能因为 LIBERO 接近满分，就认为动态操作也已解决。

### 真机展示与高层规划需要分别解释

论文在 Unitree G1 与 YAM 上测试。动态叠杯中，Long-WAM 在 20 次中成功 19 次，而 π0.5 和 Fast-WAM 在该设置下均为 0 次。这个对照限定于作者的动态叠杯任务。

组合任务还使用独立高层规划器。Long-WAM 提供带历史的执行能力，规划器负责分解复杂目标；组合系统结果不等于低层策略独自拥有同样的长程规划能力。

## LeRobot 接入与论文结果的边界

v0.7.0 支持 IDM 与 CoD 原生检查点、微调和同步动作块推理。发布的 LIBERO 设置为两路 224×224 图像、7 维动作、8 维状态和 P48 历史。每一控制时刻都需传入新观测；在队列有动作时跳过策略调用，会使历史缺帧。

LeRobot 文档中 IDM 四组为 99.4%、99.8%、97.8%、99.0%，各 500 次，平均 99.00%；CoD 平均 98.45%。它们是发布适配检查点的测试，不能用论文 IDM 的 99.5% 替换。原项目的 `model.pt` 也不能直接当作 LeRobot 原生目录加载。

`reset()` 同时清理历史和动作队列；新 episode 必须重置。修改 `past_obs_steps` 不等于完成了长上下文训练。通用异步与 RTC 在该适配中尚未验证，论文原项目的加速能力与这里的可用范围需要区分。

## 结论

Long-WAM 的核心是先学会从历史预测未来，再让动作专家读取这种预测；流式与异步系统使这条路径更适合实时运行。实验支持历史与未来条件在长程、动态任务中的作用，也表明收益依赖视频初始化、任务类型和具体部署系统。

</div>
