---
description: "SO-ARM 具身智能入门课程第 19 章 —— 什么是机器人本体、SO-ARM 的关节 / 状态 / 动作 / 相机在 GR00T 中如何定义、基础模型加微调范式，以及 GR00T 推理服务与机器人控制客户端的协作方式。"
title: 第 19 章 - 机器人本体与 GR00T 系统架构
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - GR00T
  - 本体
  - VLA
  - LeRobot
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_19
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_19/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 4 阶段 · 第 19 章 · 理论</span>
    <h2>19. 机器人本体与 GR00T 系统架构</h2>
    <p>
      什么是机器人本体、SO-ARM 的关节 / 状态 / 动作 / 相机在 GR00T 中如何定义、基础模型加微调的范式，以及 GR00T 推理服务与机器人控制客户端如何协作。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 什么是机器人本体？

---

"本体"（Embodiment）指机器人以什么身体存在：几个关节、哪些相机、什么夹爪、什么动作空间。一个 VLA 基础模型跨**许多**本体训练 —— 不同的臂、人形机器人、移动操作平台 —— 所以它需要一种方式回答"我此刻在为哪副身体行动？"

答案就是**本体标签（embodiment tag）**。在 SO-ARM 数据上微调 GR00T 时，数据集携带 `new_embodiment` 标签，它为"新的单臂本体"选择正确的输入 / 输出投影。配合**数据配置** —— SO-ARM 标准双相机布局对应 `so100_dualcam` —— 模型就知道这副身体长什么样。

:::note
SO-ARM 是 GR00T 生态中支持最好的低成本本体之一：NVIDIA 官方微调指南使用 SO101 数据，LeRobot 的 `groot` 策略路径同样兼容 SO-ARM 数据集。
:::

---

## SO-ARM 的关节、状态与动作定义

---

### 关节与状态

SO-ARM 的 `observation.state` 是 6 维，按数据集元数据中的固定关节顺序：

| 维度 | 关节 |
| :---: | :--- |
| 0 | 肩部旋转（底座） |
| 1 | 肩部抬升 |
| 2 | 肘部 |
| 3 | 腕部俯仰 |
| 4 | 腕部回转 |
| 5 | 夹爪 |

### 动作

`action` 镜像同样的 6 维：下一步的目标位置。在 `modality.json`（第 20 章）里，状态 / 动作组拆成 `single_arm`（0–4 维）与 `gripper`（第 5 维），因为 GR00T 可能经不同头处理它们。

---

## 相机模态

---

### SO-ARM 常用相机布局

`so100_dualcam` 数据配置期望两个相机视角 —— 生态内通用的 SO-ARM 标准布局：

| 键 | 视角 | 作用 |
| :--- | :--- | :--- |
| `front`（或 `top`） | 覆盖整个工作区的俯视 / 前视 | 物体在哪、B 点在哪 |
| `side`（或 `wrist`） | 侧视或夹爪视角 | 桌面高度信息、与物体的接触 |

### 注意

- 数据集里录的相机键，推理时必须原样出现；
- 双视角是该臂上 GR00T 的甜点配置；更多相机需要自定义数据配置。

---

## 语言模态

---

### 数据侧

每条 Episode 携带录制时绑定的任务描述（第 12 章的 `--dataset.single_task`），或回填进 `meta/tasks.jsonl`。GR00T 通过 `modality.json` 指向标注键 `human.task_description`（第 18 章对 SO-ARM 数据的推荐）。

### 推理侧

部署时指令是现场传入的 —— 例如第 21 章客户端的 `--lang_instruction="Grab pens and place into pen holder."`。换句子即换任务，权重不变。

---

## 观测窗口与动作窗口

---

GR00T 处理**当前**观测（图像 + 状态 + 语言）并输出覆盖短未来窗口的**动作分块**（N1.5 为 16 步）。与第 14 章的 ACT 一样，只开环执行前一小段就重新观测 —— 同样的分块 / 视界权衡，只是换到了一个大得多的模型里。

---

## 基础模型与微调

---

### 基础模型

VLM 骨干先在互联网级视觉 - 语言数据与大规模多机器人数据上预训练 —— 它天生就"认识物体"、大致"知道操作长什么样"。预训练的 GR00T N1.5-3B 权重在 Hugging Face：`nvidia/GR00T-N1.5-3B`。

### 微调

你的 SO-ARM 数据集把基础模型适配到你的桌面、你的物体、你的指令措辞：

- 全参微调重训更多网络（约 25GB 显存，第 21 章）；
- 部分微调（如 `--no-tune_diffusion_model` 冻结 DiT 头）省显存省时间，精度略降；
- LoRA / PEFT 变体只训练小适配层。

### 零样本 vs. 微调

零样本（不微调）有时"动得像模像样"，但很少能可靠完成你的特定任务 —— 你的桌面从不在预训练数据里。在 50–100 条本地数据上微调才是预期路径。

---

## GR00T 系统架构

---

### 模型内部数据流（简化）

```text
图像（前、侧）─────┐
状态（6 维）───────┼─→ VLM 骨干 ─→ DiT 动作头 ─→ 动作分块（k × 6）
语言 ─────────────┘      （理解）      （去噪）        （发给舵机）
```

- **VLM 骨干**把三路模态融合成对场景与指令的语义理解；
- **DiT（扩散 Transformer）头**反复把一个隐变量去噪成连贯的连续动作分块（Flow Matching）；
- 动作分块流向机器人控制端，执行前几步后重新观测。

### GR00T 推理服务与机器人控制客户端

部署时，NVIDIA Isaac-GR00T 技术栈拆成两个进程：

**机器人控制客户端** —— 连接 SO-ARM 与相机，把观测（图像 + 状态 + 语言）发给服务端，接收动作分块并下发舵机执行。官方示例 `examples/SO-100/eval_lerobot.py` 正是为这条臂写的。

**GR00T 推理服务** —— 持有模型，跑在任意可用 GPU 上（工作站、云实例，或 Jetson AGX Thor 的 Docker 镜像），通过网络响应客户端。

```text
[ SO-ARM + 相机 ] ⇄ USB ⇄ [ 机器人控制客户端 ] ⇄ 网络 ⇄ [ GR00T 推理服务 + GPU ]
```

### 集成检查清单

进入第 21 章动手之前，确认你能回答：

1. 本体标签是什么？→ `new_embodiment`
2. 数据配置是什么？→ `so100_dualcam`
3. 相机键是什么？→ 与数据集完全一致
4. 指令措辞是什么？→ 与数据集标注完全一致

---

## SO-ARM 在 GR00T 中的位置

---

- 一个**低成本、可复现的桌面本体** —— 让它成为 LeRobot 参考臂的特质，同样使它成为 GR00T 的微调目标；
- 通过**官方 SO101 微调配方**获得支持（NVIDIA 博客 + Isaac-GR00T 仓库的 SO-100 示例）；
- 可在 **Jetson AGX Thor** 边缘端部署推理；
- 并且 —— 第 22 章 —— 完全绕开 GR00T 工具链的用户还有 **SenseCraft Robotics 无代码平台**这条路。

---

## 本章小结

---

- 本体 = 机器人的身体定义；SO-ARM 在 GR00T 中：标签 `new_embodiment`、数据配置 `so100_dualcam`；
- 状态 / 动作是固定关节顺序的 6 维；两台相机 + 语言凑齐模态组合；
- 基础模型 + 微调优于针对你桌面的零样本；
- 部署拆成机器人控制客户端（臂 + 相机）与 GPU 推理服务。

下一章把你的 SO-ARM 数据集改造成 GR00T 微调可用的形态。

</div>
