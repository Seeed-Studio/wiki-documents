---
description: "精读 WALL-OSS-0.5 的核心机制、训练与实验，了解 LeRobot v0.7.0 接入范围。"
title: "WALL-OSS-0.5：用离散动作梯度连接视觉语言与连续执行"
hide_title: true
keywords: ["论文精读","WALL-OSS-0.5","VLA","梯度桥梁","RVQ","Flow Matching","LeRobot"]
slug: /robotics/paper_reading_wall_oss_05
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
    "value": "预备知识：前向路由与反向梯度分别控制什么",
    "id": "预备知识前向路由与反向梯度分别控制什么",
    "level": 2
  },
  {
    "value": "摘要与阅读线索",
    "id": "摘要与阅读线索",
    "level": 2
  },
  {
    "value": "核心网络：两个专家怎样共享上下文",
    "id": "核心网络两个专家怎样共享上下文",
    "level": 2
  },
  {
    "value": "RVQ 分词器：压缩轨迹之外还学什么",
    "id": "rvq-分词器压缩轨迹之外还学什么",
    "level": 2
  },
  {
    "value": "联合训练：为什么保留三类信号",
    "id": "联合训练为什么保留三类信号",
    "level": 2
  },
  {
    "value": "动作空间监督：为什么在干净动作上计算误差",
    "id": "动作空间监督为什么在干净动作上计算误差",
    "level": 2
  },
  {
    "value": "动作接口：26 维怎样组成",
    "id": "动作接口26-维怎样组成",
    "level": 2
  },
  {
    "value": "实验：进度分、零样本与微调结果",
    "id": "实验进度分零样本与微调结果",
    "level": 2
  },
  {
    "value": "预训练检查点能直接做多少",
    "id": "预训练检查点能直接做多少",
    "level": 3
  },
  {
    "value": "相同微调数据下比较适配能力",
    "id": "相同微调数据下比较适配能力",
    "level": 3
  },
  {
    "value": "消融怎样检验梯度桥梁",
    "id": "消融怎样检验梯度桥梁",
    "level": 3
  },
  {
    "value": "LeRobot 接入与原始训练的边界",
    "id": "lerobot-接入与原始训练的边界",
    "level": 2
  },
  {
    "value": "结论",
    "id": "结论",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-wall_oss_05-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 论文精读</span>
  <h1 id="paper-reading-wall_oss_05-title">WALL-OSS-0.5：用离散动作梯度连接视觉语言与连续执行</h1>
  <p className="paper-reading-lead">Wall-OSS-0.5 Technical Report</p>
  <ul className="paper-reading-badges" aria-label="本篇内容">
    <li><a href="#联合训练为什么保留三类信号">梯度桥梁</a></li>
    <li><a href="#动作空间监督为什么在干净动作上计算误差">动作空间监督</a></li>
    <li><a href="#实验进度分零样本与微调结果">实验结果</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2605.30877v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>阅读论文原文</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="接入版本与关键参数">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/wall_oss_05" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot WALL-OSS-0.5 文档 ↗</a>

**LeRobot 关键参数**

- `--policy.type=wall_oss_05` 对应本篇版本；已有 `wall_x` 对应另一 WALL 发布版。
- `--policy.path=lerobot/wall-oss-0.5` 加载需要目标任务适配的基础检查点。
- 发布配置使用 26 维内部表示、32 步动作块、q01/q99 归一化和 10 步欧拉采样。
- 适配支持连续动作与语言训练/生成，未暴露完整的自回归离散动作分支，不能据此声称重现 RVQ 联合预训练。

</aside>

机器人要按颜色把积木分到不同位置。视觉语言模型可能已经知道“红色”“左边”和“按顺序”的含义，新增动作专家却未必能把这些概念变成正确的轨迹。**给动作专家更多连续监督，是否足以让视觉语言主干真正围绕控制重新组织信息？**

## 预备知识：前向路由与反向梯度分别控制什么

前向路由决定哪些词元进入哪个专家、可以读取什么；反向梯度决定某种损失会改变哪些参数。两个专家采用不同参数，并不等于它们之间自动停止梯度。

离散动作预测使用语言模型熟悉的交叉熵，连续动作使用流匹配。WALL-OSS-0.5 关注的桥梁，是让动作词元监督向视觉语言主干提供强而相关的训练信号，同时保留连续路径作为执行接口。

## 摘要与阅读线索

**摘要意译。** 报告提出约 4B 的 VLA，以 Qwen2.5-VL-3B 为基础，采用视觉语言与动作专家、视觉对齐 RVQ 动作分词器和动作空间监督。三类目标共同训练：多模态预测保留理解，离散动作预测使主干感知控制，连续流匹配输出执行动作。评估分别检查预训练后零样本行为、微调适配与多模态能力。

**批注。** 本文是独立的 0.5 版技术报告，不沿用旧 WALL-OSS 的训练阶段解释。实验中的主要真机指标是任务进度，而不是完整任务成功率。

## 核心网络：两个专家怎样共享上下文

视觉、语言、本体状态和离散动作词元进入 VL Expert，带噪连续动作进入 Action Expert。共享注意力使动作读取视觉语言上下文。离散动作与连续动作互相不可见，防止训练时连续专家偷读真实动作答案。

| 训练目标 | 改变什么 | 部署时的角色 |
| --- | --- | --- |
| 多模态文本交叉熵 | 保留定位、问答与语义知识 | 支持理解与文本生成 |
| RVQ 动作词元交叉熵 | 用动作相关预测训练主干 | 主要作为训练桥梁 |
| 连续动作流匹配 | 学习可执行轨迹，并保留到主干的梯度 | 默认动作输出 |

回到分积木，文本数据教会颜色与位置，离散动作标签让主干学习这些信息与运动的关系，连续专家学习抓取、搬运和释放的数值轨迹。三者并不是机器人运行时依次调用的三个独立规划器。

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/gradient-bridge">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/gradient-bridge.png" alt="多模态、离散动作与连续动作的共同训练" loading="lazy" />
  <figcaption><strong>多模态、离散动作与连续动作的共同训练。</strong>来源：WALL-OSS-0.5 论文。离散动作交叉熵为视觉语言主干提供控制相关监督，连续流匹配负责部署动作；底部两类词元通过联合注意力交流。路由分工与反向梯度是否连通需要分别判断。</figcaption>
</figure>

## RVQ 分词器：压缩轨迹之外还学什么

RVQ 逐层量化动作潜变量：前级编码较粗的运动结构，后级编码剩余误差。其编码器读取观测条件与差分动作，解码器利用状态重建轨迹。

分词器除了重建动作，还训练视觉动作对齐、下一帧预测和 DCT 频域重建。这样，代码需要表达与场景变化有关的行为结构，同时抑制高频抖动。它与仅对轨迹做固定频域压缩的 FAST 在训练方式上不同。

虽然最终部署输出连续动作，离散表示仍可通过共同训练改善主干。离散分支的价值不能只用“有没有直接解码它来控制机器人”判断。

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/vision-aligned-rvq">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/vision-aligned-rvq.png" alt="带视觉对齐目标的残差量化动作分词器" loading="lazy" />
  <figcaption><strong>带视觉对齐目标的残差量化动作分词器。</strong>来源：WALL-OSS-0.5 论文。动作重建之外，分词器还利用视觉动作对齐和未来上下文特征预测，解释离散代码为什么是语义训练接口。右侧特征预测不是直接生成未来相机图像。</figcaption>
</figure>

## 联合训练：为什么保留三类信号

论文将动作与多模态样本按 9:1 混合，并组合目标：

$$
\mathcal L=\mathcal L_{\mathrm{flow}}+0.01\mathcal L_{\mathrm{act\text{-}CE}}+0.01\mathcal L_{\mathrm{mm\text{-}CE}}.
$$

系数用于平衡不同尺度的损失，不能直接解释成“交叉熵只贡献 1% 能力”。报告保留连续动作损失到视觉语言主干的梯度；这与停止梯度的知识隔离设计不同。

机器人预训练覆盖二十多种本体，每 epoch 超过百万条轨迹，并混合具身与通用多模态数据。目标与步骤级指令随机选择，状态可被扰动或丢弃，以减少对理想状态输入与固定措辞的依赖。

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/teaching-gradient-bridge">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/wall-gradient-bridge-zh-v1.png" alt="分积木任务中的前向信息与反向梯度" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>分积木任务中的前向信息与反向梯度。</strong>AI 生成的教学示意。实线表示前向信息，虚线表示损失的梯度回传路径；RVQ 动作监督为主干提供控制相关信号，连续动作损失也经共享注意力回传。图中省略内部注意力掩码，部署默认输出连续动作。</figcaption>
</figure>

## 动作空间监督：为什么在干净动作上计算误差

采用从噪声到动作的线性路径：

$$
\begin{aligned}
A^\tau &= \tau A+(1-\tau)\epsilon,\\
\hat A &= A^\tau+(1-\tau)f_\theta(A^\tau,\tau).
\end{aligned}
$$

网络仍预测速度，但损失比较重建动作 $\hat A$ 与真实动作 $A$。代入可得到速度误差的权重为 $(1-\tau)^2$。例如 $\tau=0.2$ 时权重为 0.64，$\tau=0.8$ 时为 0.04，前者为后者 16 倍。这一教学计算说明高噪声阶段受到更强约束。

论文将其与机器人轨迹的平滑结构联系起来：先学好整体运动形状，再修正残差。这是训练目标的解释，不意味着任意平滑动作就会完成任务。

## 动作接口：26 维怎样组成

每臂包含相对位置 3 维、相对旋转 6 维和夹爪 1 维，两臂共 20 维；再加底盘速度 3 维、升降 1 维和头部 2 维，共 26 维。旋转使用 6D 表示，机械自由度仍按实际机构确定。

执行时将当前图像、状态和指令作为条件，通过连续路径多步去噪，不需要解码 RVQ 动作代码。不同数据源的一秒动作时域与发布适配检查点的 32 步配置需分别看待。

## 实验：进度分、零样本与微调结果

### 预训练检查点能直接做多少

零样本套件含 12 项已见任务与 5 项留出任务，每项按 10 条轨迹的预定义规则评任务进度，满分 100。400k 检查点的已见平均为 50.0，未见为 53.6，总体为 51.1。

教学例子中，抓起并搬到目标附近却没有成功放入，可以获得部分阶段分但完整成功仍为 0。故 51.1 的平均进度不能改写成“51.1% 任务成功”。已见与未见组难度也未匹配，不能据其排序判断未见任务更容易泛化。

### 相同微调数据下比较适配能力

15 项真机任务使用相同微调数据预算，约每任务 500 条示范，报告如下平均进度：

| 模型 | 操作类 10 项 | 推理类 5 项 | 总体 |
| --- | ---: | ---: | ---: |
| WALL-OSS-0.5 | 61.1 | 59.3 | 60.5 |
| π0.5 | 35.0 | 58.9 | 43.0 |
| DreamZero | 33.7 | 32.7 | 33.4 |

相对 π0.5 的总体差为 17.5 个进度百分点；推理子集只差 0.4。物体匹配和水果篮放置等单项仍落后，不能只用总体均值声称所有推理任务都改善。

### 消融怎样检验梯度桥梁

五项真机任务的从头训练消融中，共同训练平均进度 57.00，高于仅流与多模态训练的 36.68、停止梯度的 31.93，以及先停止梯度、再切换为共同训练这一两阶段预热方案的 49.58。另一个四任务分词器对照中，RVQ 将连续执行的平均进度从 29.3 提至 48.1。这些子集实验与 15 任务主结果不能混在同一排行榜。

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/bridge-ablation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/bridge-ablation.png" alt="从头训练阶段的梯度与共同训练消融" loading="lazy" />
  <figcaption><strong>从头训练阶段的梯度与共同训练消融。</strong>来源：WALL-OSS-0.5 论文。五项真机任务的平均进度从 Flow only 的 36.68、Stop Grad. 的 31.93，提高到先停止梯度、再切换为共同训练的两阶段预热方案的 49.58 和完整共同训练的 57.00。指标为阶段进度，不能写成完整任务成功率。</figcaption>
</figure>

## LeRobot 接入与原始训练的边界

v0.7.0 的 `wall_oss_05` 支持连续动作、语言目标训练与文本生成，发布检查点内部为 26 维；较窄数据在归一化后补齐，输出先裁剪再反归一化。补齐只对齐形状，不转换关节空间与末端空间。

```bash
--policy.path=lerobot/wall-oss-0.5
--policy.device=cuda
--policy.dtype=bfloat16
```

这组是目标数据微调的加载片段。相机需通过 `camera_key_mapping` 对齐，状态/动作单位与归一化统计需匹配。此适配未暴露完整 RVQ 自回归动作训练路径，因此连续微调结果不能称为重做了报告中的三目标预训练。基础检查点的跨本体能力也不意味着任意新机械臂可以跳过接口校准与适配。

## 结论

WALL-OSS-0.5 用离散动作监督把主干调整到控制问题，同时保留多模态知识与连续执行梯度。其动作空间损失强调高噪声阶段的轨迹恢复。阅读证据时应始终区分任务进度与成功率，以及原始共同预训练与 LeRobot 连续接入的功能范围。

</div>
