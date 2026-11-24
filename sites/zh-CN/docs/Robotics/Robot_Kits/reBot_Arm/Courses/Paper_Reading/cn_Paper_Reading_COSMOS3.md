---
description: "精读 Cosmos 3 的核心机制、训练与实验，了解 LeRobot v0.7.0 接入范围。"
title: "Cosmos 3：从全模态世界模型到视频动作联合策略"
hide_title: true
keywords: ["论文精读","Cosmos 3","全模态世界模型","MoT","联合视频动作预测","LeRobot"]
slug: /robotics/paper_reading_cosmos3
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
    "value": "预备知识：世界预测、逆动力学与策略分别预测什么",
    "id": "预备知识世界预测逆动力学与策略分别预测什么",
    "level": 2
  },
  {
    "value": "摘要与阅读线索",
    "id": "摘要与阅读线索",
    "level": 2
  },
  {
    "value": "核心网络：理解路径与生成路径怎样交流",
    "id": "核心网络理解路径与生成路径怎样交流",
    "level": 2
  },
  {
    "value": "动作接口：共享潜空间怎样保留本体差异",
    "id": "动作接口共享潜空间怎样保留本体差异",
    "level": 2
  },
  {
    "value": "训练：同一轨迹怎样产生三类监督",
    "id": "训练同一轨迹怎样产生三类监督",
    "level": 2
  },
  {
    "value": "部署时联合预测怎样进入闭环",
    "id": "部署时联合预测怎样进入闭环",
    "level": 3
  },
  {
    "value": "实验：先区分指令粒度与训练初始化",
    "id": "实验先区分指令粒度与训练初始化",
    "level": 2
  },
  {
    "value": "RoboLab 同一模型对不同指令的反应",
    "id": "robolab-同一模型对不同指令的反应",
    "level": 3
  },
  {
    "value": "新本体适配比较中训练的价值",
    "id": "新本体适配比较中训练的价值",
    "level": 3
  },
  {
    "value": "真机偏好与仿真成功率不能互换",
    "id": "真机偏好与仿真成功率不能互换",
    "level": 3
  },
  {
    "value": "LeRobot 接入：尺寸、动作与训练配方一起对齐",
    "id": "lerobot-接入尺寸动作与训练配方一起对齐",
    "level": 2
  },
  {
    "value": "结论",
    "id": "结论",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-cosmos3-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 论文精读</span>
  <h1 id="paper-reading-cosmos3-title">Cosmos 3：从全模态世界模型到视频动作联合策略</h1>
  <p className="paper-reading-lead">Cosmos 3: Omnimodal World Models for Physical AI</p>
  <ul className="paper-reading-badges" aria-label="本篇内容">
    <li><a href="#核心网络理解路径与生成路径怎样交流">多模态架构</a></li>
    <li><a href="#动作接口共享潜空间怎样保留本体差异">动作与训练</a></li>
    <li><a href="#实验先区分指令粒度与训练初始化">实验结果</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2606.02800v4" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>阅读论文原文</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="接入版本与关键参数">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/cosmos3" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot Cosmos 3 文档 ↗</a>

**LeRobot 关键参数**

- `--policy.type=cosmos3_nano` 与 `--policy.type=cosmos3_edge` 选择两个接入尺寸。
- `--policy.path=lerobot/Cosmos3-Nano-Policy-LIBERO` 加载已适配四组 LIBERO 的策略；基础模型另行微调。
- `--policy.save_predicted_video=true` 可额外解码并保存每块预测视频，会增加可视化开销。
- `domain_id`、相机画布、真实帧率与动作表示都属于模型条件，不能只匹配张量宽度。

</aside>

机器人要把黑碗放进抽屉，再关上抽屉。我们可以问三个不同问题：给定动作，画面会怎样变；给定前后画面，什么动作能解释变化；给定当前画面和目标，应该做什么。**能否让同一个模型通过改变已知与待预测的部分，学习这三种关系？**

## 预备知识：世界预测、逆动力学与策略分别预测什么

| 模式 | 已知信息 | 待预测信息 | 抽屉任务的例子 |
| --- | --- | --- | --- |
| 正向动力学 FD | 当前视觉与动作 | 未来视觉 | 向外拉把手后，抽屉会在哪里 |
| 逆动力学 ID | 视觉变化 | 动作 | 怎样把关闭状态变成拉开状态 |
| 策略 Policy | 当前观测与目标 | 动作和未来视觉 | 为放入碗共同生成运动与预期结果 |

“生成抽屉打开的视频”并不等于输出能被机器人执行的动作。策略需要动作标签和本体接口；预测画面也必须在执行后由真实观测校正。

<figure className="paper-reading-figure" data-reading-figure="cosmos3/teaching-three-conditioning-modes">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/cosmos-three-conditioning-modes-zh-v1.png" alt="拉抽屉任务中的三种条件预测关系" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>拉抽屉任务中的三种条件预测关系。</strong>AI 生成的教学示意。三列分别改变已知条件与待预测部分，说明正向动力学、逆动力学和联合策略的区别；它们是并列的学习任务，不是机器人依次执行的三个步骤。</figcaption>
</figure>

## 摘要与阅读线索

**摘要意译。** Cosmos 3 将语言、图像、视频、音频与动作统一到 MoT 架构，结合自回归理解与连续生成。动作相关模式通过选择哪些词元保持干净、哪些加入噪声，学习正向动力学、逆动力学和视频动作联合策略。动作中训练提供跨领域先验，目标数据后训练再形成具体机器人策略。

**批注。** 本篇聚焦报告中与机器人策略相关的架构、训练和实验。图像质量、视频生成榜单与机器人闭环成功不是同一种证据；LeRobot 的 Nano/Edge 接入也不等于暴露整个全模态平台。

## 核心网络：理解路径与生成路径怎样交流

理解路径处理语言及可选的 ViT 视觉词元，采用因果注意力；生成路径处理 VAE 视频潜变量、音频与动作等连续词元，采用去噪生成。每层有各自的归一化、投影与前馈参数，通过共享注意力交流上下文。

视觉因此有两种编码用途：ViT 提供理解特征，冻结的视频 VAE 提供可生成的视觉潜空间。MoT 是按路径处理不同词元，不应与为每个词元挑选多个前馈专家的稀疏 MoE 混为一谈。

在机器人策略中，当前图像作为干净条件，未来视频与动作加入噪声并共同恢复。任务提示还包含帧率、画布尺寸、视角布局和静止帧信息，使模型知道视频时间与动作时间怎样对应。

<figure className="paper-reading-figure" data-reading-figure="cosmos3/mot-architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/cosmos3/mot-architecture.png" alt="自回归理解与扩散生成之间的注意力路由" loading="lazy" />
  <figcaption><strong>自回归理解与扩散生成之间的注意力路由。</strong>来源：LeRobot 官方文档。左侧理解路径采用因果自注意力，生成路径采用全注意力并可读取理解上下文；右侧掩码显示理解查询不会读取生成词元。共享注意力连接两类计算，而不是把它们变成同一种解码方式。</figcaption>
</figure>

## 动作接口：共享潜空间怎样保留本体差异

报告用几何结构统一不同领域动作，包括自我运动、末端运动与抓取状态。相邻位姿 $T_{t-1}$ 与 $T_t$ 可构成相对变换：

$$
\Delta T_t=T_{t-1}^{-1}T_t.
$$

平移与 6D 旋转描述运动，抓取状态则记录当前手部或夹爪形态。不同域通过各自输入和输出投影进入共享隐藏空间。

这套预训练表示与目标机器人后训练的动作不一定相同。DROID 接入配方使用八维关节/夹爪；LIBERO 使用含 6D 旋转的十维动作，再由环境处理器转换回仿真器七维动作。不能将相对位姿、关节目标与补齐通道看成等价数值。

<figure className="paper-reading-figure" data-reading-figure="cosmos3/action-representation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/cosmos3/action-representation.png" alt="共享几何分量与不同本体的动作向量" loading="lazy" />
  <figcaption><strong>共享几何分量与不同本体的动作向量。</strong>来源：Cosmos 3 论文。不同身体复用位置、6D 旋转与抓握状态等分量，形成长度不同的动作向量，再由域专属投影接入。旋转表示的 6 个数不代表 6 个旋转自由度，共享分量也不等于同一条控制命令。</figcaption>
</figure>

## 训练：同一轨迹怎样产生三类监督

以一段拉抽屉示范为例，正向动力学将动作保持干净、要求恢复未来视频；逆动力学保留前后视觉、要求恢复动作；策略则同时对未来视频和动作加噪。它们复用轨迹，但学习不同条件关系。

训练流程先形成视觉语言理解与生成能力，再在中训练中接入多领域动作，最后用目标机器人数据后训练。跨域动作提供先验，目标本体数据校正实际控制与场景分布。只有通用视频模型而没有适当动作训练，不能直接视为可部署策略。

### 部署时联合预测怎样进入闭环

相机按固定顺序拼成一张画布，当前帧编码成干净视觉条件，未来潜变量与动作从噪声开始联合采样。策略返回动作块，执行一段后重新获取观测。可选视频解码用于检查预期结果，但不是动作输出的必要显示步骤。

教学例子中，模型想象碗已经进入抽屉，而实际夹爪失手，下一轮必须使用真实碗的位置，不能继续把预测画面当作已完成的历史。联合预测使运动与视觉结果相关，并不保证二者永远与真实环境一致。

## 实验：先区分指令粒度与训练初始化

### RoboLab 同一模型对不同指令的反应

报告使用 120 项任务、每项 10 次。Nano DROID 策略在三种指令粒度下的总体成功率如下：

| 模型 | 模糊指令 | 默认指令 | 具体指令 |
| --- | ---: | ---: | ---: |
| Cosmos3-Nano，动作中训练后初始化 | 20.6% | 36.8% | 39.7% |
| Cosmos3-Nano，通用预训练后初始化 | 16.7% | 28.1% | 30.2% |
| π0.5 | 15.2% | 28.0% | 28.1% |

36.8% 与 39.7% 是不同指令条件，不是同一次评估的两个版本平均。模糊指令下明显下降，也说明目标指定方式仍影响策略。

### 新本体适配比较中训练的价值

LIBERO-10 每任务 50 次、共 500 次。相同后训练步数下，动作中训练初始化 MT-init 与通用预训练初始化 PT-init 的成功率分别是：

| 更新次数 | MT-init | PT-init |
| --- | ---: | ---: |
| 500 | 24.6% | 0.0% |
| 1,000 | 91.4% | 73.8% |
| 2,000 | 97.4% | 95.2% |

早期差距更大，支持动作中训练提高适配效率；后期差距收窄，不能解释成 PT-init 永远学不会。

### 真机偏好与仿真成功率不能互换

RoboArena 采用双盲成对比较聚合评级。报告记载其 2026 年 5 月 30 日的榜单状态；评级与相对偏好不等于固定任务集的成功百分比，也不是今天仍居第一的声明。

## LeRobot 接入：尺寸、动作与训练配方一起对齐

v0.7.0 提供 Nano 和 Edge，文档实现参数量分别约 16.5B 和 4.6B；默认仅训练其中的生成路径与动作相关模块。基础模型、DROID 策略、四组 LIBERO 策略和单组 LIBERO-10 策略需要分别选择。

该版本文档中，四组训练的 Nano 与 Edge 平均成功率为 97.90% 和 97.95%，各组各 500 次。仅用 LIBERO-10 训练的 Nano 为 97.6%，而报告 MT-init 的 2,000 更新结果为 97.4%。训练集、实现与权重不同，不应合成一个分数。

评估四组发布策略的参数片段为：

```bash
--policy.path=lerobot/Cosmos3-Nano-Policy-LIBERO
--policy.dtype=bfloat16
--env.type=libero
--env.task=libero_spatial,libero_object,libero_goal,libero_10
--env.observation_height=256
--env.observation_width=256
```

新数据需提供正确帧率、相机布局说明、动作统计和域编号。启用状态条件时，状态需与动作具有相同通道语义与宽度。目标动作转换由数据或环境处理器完成，策略本身不猜测控制约定。

从基础模型训练时，`load_action_modules=false` 可初始化目标动作模块；已训练检查点评估时不能继续跳过其动作权重。训练使用 EMA 的配方，应选择对应 EMA 权重评估。上述配置用于接入，不代表已在当前机器完成训练或基准复测。

## 结论

Cosmos 3 用统一多模态架构学习视觉变化与动作之间的多种条件关系，动作中训练再为具体策略提供适配先验。理解它需要同时区分三种动作模式、不同身体的控制表示，以及指令粒度、预训练阶段和后训练数据对实验结果的影响。

</div>
