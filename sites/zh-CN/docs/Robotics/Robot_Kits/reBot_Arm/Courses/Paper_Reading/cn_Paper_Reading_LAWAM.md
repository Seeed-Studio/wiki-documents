---
description: "精读 LaWAM 如何预测潜在视觉子目标，再据此生成机器人动作，并了解实验结果与 LeRobot 接入。"
title: "LaWAM：先预测场景怎样变化，再生成机器人动作"
hide_title: true
keywords: [论文精读, LaWAM, 世界动作模型, 潜动作, LeRobot]
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/lawam_overview.png
slug: /robotics/paper_reading_lawam
displayed_sidebar: PaperReadingSidebar
last_update:
  date: 2026-11-16
  author: liujunjie
createdAt: '2026-11-16'
updatedAt: '2026-11-16'
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "预备知识：同一个抽屉任务里的三个量",
    "id": "预备知识同一个抽屉任务里的三个量",
    "level": 2
  },
  {
    "value": "摘要与阅读线索",
    "id": "摘要与阅读线索",
    "level": 2
  },
  {
    "value": "第一阶段：从两次观测学会预测变化",
    "id": "第一阶段从两次观测学会预测变化",
    "level": 2
  },
  {
    "value": "第二阶段：未来还没发生，潜动作从哪里来",
    "id": "第二阶段未来还没发生潜动作从哪里来",
    "level": 2
  },
  {
    "value": "同一个子目标时刻，为什么可以对应不同步数",
    "id": "同一个子目标时刻为什么可以对应不同步数",
    "level": 3
  },
  {
    "value": "实验：动作更快生成，成功率怎样变化",
    "id": "实验动作更快生成成功率怎样变化",
    "level": 2
  },
  {
    "value": "LIBERO：同时看成功率和每块推理时间",
    "id": "libero同时看成功率和每块推理时间",
    "level": 3
  },
  {
    "value": "RoboTwin 与真机：平均成绩背后还有哪些困难",
    "id": "robotwin-与真机平均成绩背后还有哪些困难",
    "level": 3
  },
  {
    "value": "潜动作能否跨场景复用",
    "id": "潜动作能否跨场景复用",
    "level": 3
  },
  {
    "value": "消融：动作专家直接读取预测子目标有什么用",
    "id": "消融动作专家直接读取预测子目标有什么用",
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

<section className="paper-reading-intro" aria-labelledby="paper-reading-lawam-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 论文精读</span>
  <h1 id="paper-reading-lawam-title">LaWAM：先预测场景怎样变化，再生成机器人动作</h1>
  <p className="paper-reading-lead">LaWAM: Latent World Action Models for Efficient Dynamics-Aware Robot Policies</p>
  <ul className="paper-reading-badges" aria-label="本篇内容">
    <li><a href="#第一阶段从两次观测学会预测变化">潜动作与世界模型</a></li>
    <li><a href="#第二阶段未来还没发生潜动作从哪里来">动作生成</a></li>
    <li><a href="#实验动作更快生成成功率怎样变化">实验结果</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2606.15768v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>阅读论文原文</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="LeRobot 关键命令">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/main/en/lawam" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot LaWAM 文档 ↗</a>

**LeRobot 关键命令**

- `--policy.path=jialei02/lawam-libero-sft-lerobot` 加载发布的 LIBERO 微调检查点。
- `--env.type=libero` 选择评估环境。快速试跑用 `--env.task=libero_object`，完整复测覆盖 Spatial、Object、Goal 和 Long 四组。
- `--eval.n_episodes=50` 让每项任务运行 50 次。完整复测用 `--env.task_ids` 在每组选择编号 0–9 的任务，共 2,000 次试验。
- `flow_num_inference_steps=10` 随检查点加载，控制生成每个动作块时的去噪步数。

安装依赖、完整的 `lerobot-eval` 命令和微调配方见上方 LeRobot 文档。

</aside>

Jialei Chen 等 · arXiv:2606.15768v2 · 2026 年 10 月 25 日 · CoRL 2026 · [项目主页](https://rlinf.github.io/LaWAM/) · [作者代码](https://github.com/RLinf/LaWAM)

机器人接到指令，要拉开抽屉。它先得把夹爪移到把手前，然后合拢并向外拉。如果当前动作块只够完成接近，这一轮要预测的画面变化可能只是夹爪来到把手附近。下一轮看见夹爪已经合拢，预测的变化才可能包含抽屉向外移动。**如果策略先预测这一小段动作结束时的场景，再据此生成控制量，它需要预测到什么程度？**

## 预备知识：同一个抽屉任务里的三个量

- **潜动作**是从前后两次观测学到的连续向量，概括这段时间里发生的变化。它可以编码接近把手或向外拉的变化，其各维由训练决定。
- **潜在视觉子目标**是对动作块末端场景的预测，由保留空间位置的视觉特征组成。夹爪在画面中的位置可以改变，桌面等区域的特征则可能基本保持。它的时间范围是当前动作块。
- **动作块**是一段按时间排列的控制向量，例如末端执行器位姿和夹爪控制量。动作专家给出具体的接近、合爪和拉动序列，机器人执行后再根据新观测生成后续动作。

## 摘要与阅读线索

**摘要意译。** LaWAM 把世界动作模型的未来预测移到预训练视觉编码器的特征空间。在视频上训练时，模型从前后观测提取潜动作，并学习用它从当前特征预测未来特征。在机器人策略中，视觉语言主干根据当前观测和指令预测潜动作，世界模型将它展开为一个空间子目标，再交给动作专家。作者报告 LIBERO 平均成功率 98.6%、RoboTwin 平均 91.22%，以及每动作块 187 ms 的模型推理时间。

**批注。** 读方法时留意两次交接。第一次发生在潜动作上，视频里的真实未来只在训练时提供监督，部署时由策略补上这段变化的编码。第二次发生在视觉特征上，动作专家实际读到预测的未来，这条路径可以用移除子目标输入的消融单独检验。

## 第一阶段：从两次观测学会预测变化

训练时，从一段视频取当前帧与间隔 $\tau$ 的未来帧。冻结的 DINOv3 将两帧分别编码为空间特征 $u$ 和 $u_T$，其中 $T$ 表示这一动作段的终点。逆动力学编码器联合读取两个时刻的视觉块，推断连续潜动作 $z$。正向解码器只接收当前特征与 $z$，通过自适应层归一化注入潜动作，预测终点特征：

$$
\tilde{u}_T = \mathrm{LaWM}_{\omega}(u,z).
$$

以拉抽屉为例，编码器看见抽屉由关闭变为拉开，必须把足以说明变化的信息压进 $z$。解码器只看到抽屉关闭时的特征和这段编码，要在原场景的坐标关系中预测抽屉拉开后的特征。当前画面保留了抽屉与夹爪原先的位置，潜动作提供关于变化的信息。

训练用平方误差比较 $\tilde{u}_T$ 与 $u_T$，并用 KL 散度把潜动作后验约束到接近标准正态的空间。在具有末端状态的数据上，还有一个辅助头，用当前末端状态和 $z$ 回归未来末端状态，鼓励编码携带具身运动信息。训练后，正向解码器成为潜在世界模型 **LaWM**，逆动力学编码器冻结后作为下一阶段的教师，辅助头移除。

这一阶段使用约 3,000 小时机器人视频和 1,500 小时第一视角人类视频。机器人遥操作视频的预训练间隔为 1.2 秒，人类视频为 0.4 秒。图像特征提供共同的学习目标，有动作或状态标注的机器人数据还可以提供额外监督。

## 第二阶段：未来还没发生，潜动作从哪里来

策略训练时，冻结的教师仍可看前后两帧。与此同时，Qwen3-VL 主干只用当前观测和任务指令产生预测潜动作 $\hat z$。主视角和指令供潜动作查询读取，动作查询还可以利用可选的辅助视角。预测的 $\hat z$ 交给 LaWM，在一次前向计算中得到空间子目标 $\hat u_T$。

![LaWAM 的两阶段训练与动作生成流程](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/lawam_overview.png)

图中第一阶段从视频的前后观测学习变化，第二阶段从当前观测与指令预测潜动作。动作专家同时读取视觉语言语义和当前、未来两组空间特征。配图来自作者项目主页。

Alternate-DiT 动作专家交替关注两路条件：一路是 VLM 的语义上下文，另一路是当前空间特征 $u$ 和预测子目标 $\hat u_T$。对于拉抽屉，前者提供任务和目标物体的信息，后者描述这轮动作预期造成的场景变化。动作头用条件流匹配学习从噪声动作序列逐步得到连续动作块。论文的标准推理设定使用 10 个动作去噪步，每块的视觉子目标只计算一次。

| 训练信号 | 约束什么 |
| --- | --- |
| 潜动作蒸馏 | 让策略的 $\hat z$ 接近冻结教师从前后帧得到的 $z$ |
| 未来特征回归 | 用策略自己的 $\hat z$ 驱动 LaWM，并让输出接近真实未来特征 $u_T$ |
| 动作流匹配 | 用预测子目标和语义条件生成与机器人示范一致的动作块 |

训练和部署时，动作专家读取的都是预测子目标。知识隔离（Knowledge Insulation，KI）在这条子目标支路上停止动作损失的反向梯度，LaWM 仍由未来特征回归更新，动作专家及其语义通路继续接受动作损失。部署时移除教师，从当前画面和指令开始，依次预测潜动作、预测子目标、生成动作。论文策略使用 RGB 观测，动作标签统一到末端执行器表示。人类视频参与第一阶段，第二阶段使用带语言指令的机器人轨迹。

![LIBERO 中夹爪的实际运动与预测子目标热图](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/libero_chunk.png)

右列是这一动作块的预测子目标。沿左侧观测序列看，夹爪在执行过程中逐渐接近子目标所示的位置。

### 同一个子目标时刻，为什么可以对应不同步数

跨数据集训练时，各数据集保留自己的控制频率。设频率为 $h$，经过 $\tau$ 秒的动作块包含约 $\tau h$ 步，第 $i$ 步按物理时刻 $i/h$ 编码。用 1.2 秒作例子，5 Hz 数据提供 6 步，20 Hz 数据提供 24 步。两段动作覆盖相同时间，但 5 Hz 的第 3 步与 20 Hz 的第 12 步都在 0.6 秒处，获得相同的时间位置编码。

作者将同一份 LIBERO 示范下采样为 5、10、20 Hz 做混频对照，保持任务、机器人和示范来源相同。直接混合不同频率后成功率下降，加入物理时间编码后大幅回升。这个对照检验的是时间对齐。

## 实验：动作更快生成，成功率怎样变化

### LIBERO：同时看成功率和每块推理时间

论文使用 Spatial、Object、Goal 和 Long 四组任务，共 40 项，每项 50 次试验。一次试验达到任务成功条件记一次成功。下表给出论文中部分对照的平均成功率和单动作块延迟。

| 方法 | 四组平均成功率 | 每动作块延迟 |
| --- | ---: | ---: |
| π₀.₅ | 96.9% | 220 ms |
| Fast-WAM | 97.6% | 486 ms |
| Cosmos-Policy | 98.5% | 1,413 ms |
| LingBot-VA | 98.5% | 4,482 ms |
| LaWAM | 98.6% | 187 ms |

LaWAM 的四组成绩依次为 99.4%、99.6%、98.4%、97.0%。论文所说的约 24 倍延迟差来自 LingBot-VA 与 LaWAM 的比较。作者在同一 A100 上使用 BF16 和 10 个去噪步测量模型耗时，各方法保留官方配置的输入分辨率与预测时域。187 ms 不含模拟器或机器人执行。LaWM 约有 2.3 亿参数，完整策略约有 23 亿参数。

![LIBERO 平均成功率与单动作块推理延迟对比](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/libero_latency.png)

横轴是单个动作块的推理延迟，纵轴是 LIBERO 平均成功率。圆的大小表示模型参数量，粉色扇区表示世界模型参数所占比例。

### RoboTwin 与真机：平均成绩背后还有哪些困难

RoboTwin 2.0 用 50 项双臂任务评估标准与随机化场景，每种条件每项任务 100 次。LaWAM 在两类场景中分别达到 92.64% 和 89.80%，合计平均为 91.22%。同一对照里的 Fast-WAM 为 91.98% 和 90.52%，LaWAM 在标准场景领先，随机化场景的平均成功率略低。具体到打开微波炉，LaWAM 两类场景分别为 41% 和 43%，Motus 为 95% 和 91%。

真机试验用 Franka 做拾取放置和开抽屉，用 Quanta X1 做叠毛巾与清理桌面。前三项各跑 30 次，LaWAM 分别成功 28、26、27 次。清桌需要完成八个子任务，单次试验只有全部完成才计为成功。LaWAM 在正常光照下完成 21/50 次，在额外彩色照明下完成 12/50 次。两种照明使用同一检查点，结果显示长程操作和光照变化仍会显著影响成功率。

![真机执行拾取放置、开抽屉、叠毛巾和清桌的过程](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/real_world_rollouts.png)

各组画面从左到右展示任务进展。清桌示例跨两行，依次处理纸巾、纸杯、餐盘、碗和勺子。

### 潜动作能否跨场景复用

作者从源视频提取一串潜动作，将它依次施加到不同场景和机器人本体的初始观测上，展示 LaWM 怎样把同一变化编码落到各自的空间特征中。这是开环特征预测的定性观察。真实控制的成功率由前述闭环试验统计。

![同一串潜动作在不同场景和机器人本体中的特征预测](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/lawm_dynamics.png)

第一排是提取潜动作的源视频。其余各排左侧是初始观测，右侧的彩色网格依次展示模型预测的视觉特征。

### 消融：动作专家直接读取预测子目标有什么用

作者在 LIBERO-10 上用 **跳过第二阶段策略预训练**的版本作为消融参照，得分 96.4%。包含该预训练的完整模型为 97.0%。以下比较沿用 96.4% 的参照，并保留动作训练损失。

| 改动 | 成功率 |
| --- | ---: |
| 无第二阶段策略预训练的参照 | 96.4% |
| 保留蒸馏与未来监督，移除动作专家的子目标输入 | 94.6% |
| 移除知识隔离 | 94.2% |
| 移除潜动作蒸馏 | 93.4% |
| 绕过潜动作接口，直接预测未来特征 | 94.4% |
| 使用参数量匹配的适配器 | 91.4% |
| 基础 VLA | 91.0% |

只切断子目标输入后，成绩下降 1.8 个百分点。这项比较直接检验了动作专家在推理时读取预测特征的作用。直接预测和参数量匹配对照则分别检验了潜动作接口以及单纯扩大容量能否解释结果。

## LeRobot 接入与论文结果的边界

LeRobot 发布的 LIBERO 检查点带有归一化和夹爪处理配置。它用 `action_horizon=8` 每块预测 8 步，用 `n_action_steps=8` 执行 8 步后再取新观测。`chunk_size=50` 是动作头内部的填充长度。`policy.path` 加载的是 LeRobot 格式的 `model.safetensors`，作者发布的原始 `.pt` 权重需要先转换。

改接其他多相机数据时，用 `primary_image_features` 和 `wrist_image_features` 指定主视角和腕部视角，再用 `lam_image_feature` 指定潜动作模型从哪个主视角读取连续帧。

LeRobot 用 MuJoCo 3.3.2 评估发布的检查点，在四组 LIBERO 任务中共成功 **1,970/2,000 次（98.5%）**。论文实验表报告的平均成功率是 **98.6%**。

## 结论

回到拉抽屉的例子，LaWAM 预测的是这一轮动作结束时的场景特征，动作专家据此生成接近、合爪或拉动的控制序列。LIBERO 的延迟比较显示了单次特征预测的速度优势。移除动作专家的子目标输入后，LIBERO-10 的成功率下降，说明预测出的空间特征确实帮助了这组任务的动作生成。

大幅相机运动会干扰潜动作学习，训练数据里的细微布料变形也相对少见。真机清桌在额外彩色照明下的成功率下降，说明观测条件仍会影响长程任务的表现。

</div>
