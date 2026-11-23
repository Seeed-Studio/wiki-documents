---
description: "深入解析 Long-WAM：机制、训练、实验，以及与 LeRobot v0.7.0 的集成范围。"
title: "Long-WAM：让视觉历史真正服务于预测与控制"
hide_title: true
keywords: ["Paper Deep-Dive","Long-WAM","World-Action Models","Long Context","Inverse Dynamics","Real-Time Control","LeRobot"]
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
    "value": "先修知识：历史、预测与执行",
    "id": "prerequisites-history-prediction-and-execution",
    "level": 2
  },
  {
    "value": "摘要与阅读指引",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "为什么视频初始化很重要",
    "id": "why-video-initialization-matters",
    "level": 2
  },
  {
    "value": "视频预训练：从过去预测变化",
    "id": "video-pretraining-predicting-change-from-the-past",
    "level": 2
  },
  {
    "value": "架构：过去与未来如何抵达控制器",
    "id": "architecture-how-past-and-future-reach-the-controller",
    "level": 2
  },
  {
    "value": "训练中的未来与部署时的未来",
    "id": "training-futures-and-deployment-futures",
    "level": 3
  },
  {
    "value": "运行时：降低历史的代价",
    "id": "runtime-reducing-the-cost-of-history",
    "level": 2
  },
  {
    "value": "实验：区分历史、未来与系统效应",
    "id": "experiments-separating-history-future-and-systems-effects",
    "level": 2
  },
  {
    "value": "初始化与上下文",
    "id": "initialization-and-context",
    "level": 3
  },
  {
    "value": "未来条件与动态任务",
    "id": "future-conditioning-and-dynamic-tasks",
    "level": 3
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

<section className="paper-reading-intro" aria-labelledby="paper-reading-long_wam-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-long_wam-title">Long-WAM：让视觉历史真正服务于预测与控制</h1>
  <p className="paper-reading-lead">Long-WAM：扩展 World-Action Models 的上下文长度</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#video-pretraining-predicting-change-from-the-past">视觉历史</a></li>
    <li><a href="#architecture-how-past-and-future-reach-the-controller">预测与动作</a></li>
    <li><a href="#runtime-reducing-the-cost-of-history">实时执行</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2610.10528v1" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>阅读论文</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/longwam" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot Long-WAM 文档 ↗</a>

**LeRobot 参数**

- `--policy.path=Efficient-Large-Model/Long-WAM-LIBERO-IDM-LeRobot` 加载“先预测再执行”的权重。
- `past_obs_steps=48` 统计的是过去的控制 tick 数，而不是未来动作数。
- `inference_action_horizon=80` 和 `n_action_steps=10` 区分预测长度与执行长度。
- 在每个控制 tick 都调用 `select_action`，包括在消费已排队动作期间。带版本的集成验证了同步推理。

</aside>

一只杯子在传送带上向左移动。单帧图像可以定位它；多帧图像才能揭示它的运动。在另一个任务中，机器人已经从柜子里取出了一只杯子，但当前视角与起始场景相似。历史信息才能识别接下来的阶段。**仅仅接收更多历史，策略就会自动利用它吗？**

## 先修知识：历史、预测与执行

历史包含决策前的观测；预测覆盖未来；执行决定机器人何时重新规划。在 20 Hz 下，48 个过去控制 tick 跨越 2.4 秒，而 10 个已执行动作跨越 0.5 秒。二者都不决定预测视野长度，视频帧可以用单独的步长进行采样。

<figure className="paper-reading-figure" data-reading-figure="long_wam/teaching-history-future-feedback-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/long-wam-history-future-feedback-en-v2.png" alt="Observed history, predicted future, and real execution feedback" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>已观测历史、预测未来与真实执行反馈。</strong> 逆动力学建模（IDM）变体的 AI 生成教学插图。已观测的视频历史与部分去噪的未来视频潜变量共同为动作提供条件。未来视频去噪在非零噪声水平停止，无需像素解码。为清晰起见，省略了语言与机器人状态条件。只有来自真实执行的新观测会进入已观测历史；预测的未来不属于过去观测。</figcaption>
</figure>

## 摘要与阅读指引

**简要摘要。** Long-WAM 通过自回归视频预训练学习从历史到未来的依赖关系，然后在动作适配阶段保留这种因果结构。动作同时利用已观测历史和预测的未来潜变量。流式编码、异步执行与硬件优化共同降低运行时成本。

**阅读提示。** 更长的输入窗口与真正能利用历史是两回事。同样，原始部署系统与同步的 LeRobot 适配器，其经过验证的能力也并不相同。

## 为什么视频初始化很重要

双向视频生成可以读取更早和更晚的帧。机器人控制必须仅从当前可用的观测中推断接下来会发生什么。只在动作微调阶段增加历史，并不一定能教会有效的时间依赖。

与标准 Fast-WAM 不同，Long-WAM 保留了预测的未来条件。与简单扩展上下文缓冲区不同，它在视频预训练期间学习时间因果性。

## 视频预训练：从过去预测变化

LongLive2.0-Robot 从一个自回归的 LongLive-2.0 检查点继续训练，使用机器人和自我视角视频，而不需要统一的动作空间。块因果注意力允许每个目标块读取其真实的早期上下文。

教师强制并行监督多个块。带缓冲误差的扰动教会模型从类似 rollout 条件的历史误差中恢复。历史提供条件；未来视频提供监督。干净的条件图像被排除在去噪目标之外。

## 架构：过去与未来如何抵达控制器

视频查询只读取自身及更早的视觉块，从不读取动作。动作查询读取历史、部分去噪的未来潜变量以及整个动作块。

| IDM 阶段 | 输入 | 结果 |
| --- | --- | --- |
| 预测未来潜变量 | 历史、指令与状态条件 | 预期动力学 |
| 视觉预填充 | 已观测与预测的潜变量 | 分层视觉键与值 |
| 动作去噪 | 视觉缓存、状态与动作噪声 | 连续动作块 |
| 反馈 | 新观测到的执行 | 更新后的真实历史 |

IDM 在预测视觉变化之后推断动作。无需对未来 RGB 进行解码。论文的 V4 设置在 $\sigma_\star=0.9$ 停止视频去噪，并在动作生成期间复用得到的视觉缓存。

<figure className="paper-reading-figure" data-reading-figure="long_wam/overview">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/overview.png" alt="From causal video pretraining to history-conditioned actions" loading="lazy" />
  <figcaption><strong>从因果视频预训练到由历史调节的动作。</strong> 来源：Long-WAM 论文。下方流程区分了已观测历史、想象的未来与动作专家；KV 缓存保留了历史上下文。部署时仍然需要新的真实观测，而不能把预测当作已经发生的事件。</figcaption>
</figure>

### 训练中的未来与部署时的未来

训练首先优化视频流匹配，然后在前向加噪的真实未来潜变量上条件化动作训练。部署时则用预测的未来替代。动作前向过程会分离视觉缓存，在视频目标训练预测器的同时，仅更新动作专家和本体感受适配器。

这种梯度选择不同于阻止视频读取动作的前向掩码。预测的未来信息在下一控制周期中也必须与真实观测保持区分。

## 运行时：降低历史的代价

流式 VAE 以增量方式编码新到的观测，而不是反复重算完整历史。异步执行在机器人消费当前块的同时准备下一个块。

在重叠为 $O$ 个 tick、tick 时长为 $\Delta t$ 的情况下，及时交接需要满足

$$
T_{\mathrm{ready}}\leq O\Delta t.
$$

偶尔错过截止时间会导致等待，即便平均推理速度很快。报告的 RTX 5090 上 107.4 ms 包含了在论文优化配置下的未来潜变量预测；它并不是通用的设备或适配器延迟。

<figure className="paper-reading-figure" data-reading-figure="long_wam/streaming-execution">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/streaming-execution.png" alt="Asynchronous handoff with streaming and full-window encoding" loading="lazy" />
  <figcaption><strong>具有流式和全窗口编码的异步切换。</strong> 来源：Long-WAM 论文。流式方式对到达的观测进行编码，而全窗口编码会延迟切换。两种调度都使用相同的名义触发步长和重叠。该图示意的是调度等待时间的减少，而不是单独测量的成功率提升。</figcaption>
</figure>

## 实验：区分历史、未来和系统效应

### 初始化与上下文

论文比较了双向、通用自回归以及机器人领域自回归的视频初始化。长上下文 RoboCasa GR-1 性能达到 78.7%；自回归初始化从历史中获益更多，而双向初始化没有获得同样的净提升。有效历史长度取决于具体任务。

<figure className="paper-reading-figure" data-reading-figure="long_wam/context-scaling">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/context-scaling.png" alt="Context scaling under different video initializations" loading="lazy" />
  <figcaption><strong>不同视频初始化下的上下文缩放。</strong> 来源：Long-WAM 论文。离散的上下文设置以相等间距绘制。机器人因果初始化在 LIBERO-Long 上在 2.4 秒处达到峰值，在 RoboCasa 上在 19.2 秒处达到峰值。更长的窗口不会持续提升成功率，而双向初始化也没有获得同样的增益。</figcaption>
</figure>

### 未来条件与动态任务

| 论文配置 | LIBERO 均值 | LIBERO-Long | RoboTwin 均值 |
| --- | ---: | ---: | ---: |
| 无未来预测 | 97.3% | 94.5% | 92.0% |
| 联合协同去噪 | 97.8% | 95.8% | 93.6% |
| IDM | 99.5% | 99.5% | 94.4% |

这些是不同基准上的成功率。在动态数据微调之后，DOMINO 的成功率为 34.9%，显著低于静态操作得分。接近饱和的 LIBERO 结果并不意味着动态控制问题已经被解决。

在实际的 Unitree G1 和 YAM 平台上，论文同时研究了动态任务和长时间跨度任务。动态叠杯在 Long-WAM 的 20 次试验中成功了 19 次，而在同一设置下，π0.5 和 Fast-WAM 的成功次数为零。复合任务实验还使用了一个单独的高层规划器；它们的结果属于这一组合系统。

## LeRobot 集成与结果边界

版本 0.7.0 支持原生 IDM/CoD 检查点、微调以及同步推理。LIBERO 版本使用两个 224×224 相机、7 维动作、8 维状态和 P48 历史。在每个控制周期都提供新的观测，即使动作仍在队列中。

文档中的 IDM 检查点在每个套件 500 个 episode 的设置下，得分分别为 99.4%、99.8%、97.8% 和 99.0%，总体为 99.00%。CoD 的平均值为 98.45%。这些是适配器结果，与论文中的 99.5% 是分开的。原始的 `model.pt` 包并不是原生的 LeRobot 检查点目录。

`reset()` 会清除历史和已排队的动作。仅仅改变 `past_obs_steps` 并不构成上下文缩放训练。通用的异步/RTC 在此适配器中尚未验证；原项目中的优化执行仍然是一个单独的能力。

## 总结

Long-WAM 学会先从历史中进行预测，再将该预测与动作相连接。流式和异步执行使这一路径更加实用。其收益取决于初始化方式、任务的记忆需求、未来条件以及所使用的部署系统。

</div>
