---
description: "SO-ARM 具身智能入门课程第 18 章 —— 多模态学习与 VLA 基础：视觉 / 语言 / 动作、VLM 与 VLA 的区别、ACT 与 VLA 的区别、语言条件任务、单任务 / 多任务 / 泛化、连续动作与动作 token，以及 VLA 的能力与局限。"
title: 第 18 章 - 多模态学习与 VLA 基础
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - VLA
  - VLM
  - GR00T
  - 多模态
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_18
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_18/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 4 阶段 · 第 18 章 · 理论</span>
    <h2>18. 多模态学习与 VLA 基础</h2>
    <p>
      视觉 / 语言 / 动作三模态、VLM 与 VLA 的区别、ACT 与 VLA 的区别、语言条件任务、泛化的层次、连续动作与动作 token，以及 VLA 的能力与局限。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

### 本阶段需要的硬件

本阶段需要准备的硬件如下。全部阶段的完整清单见 [第 3 章](/cn/robotics/soarm_physical_ai_course_chapter_3/)。

**主控单元**

| 硬件 | 购买 | 数量 |
| :--- | :---: | :---: |
| [NVIDIA Jetson AGX Thor 128G](https://detail.tmall.com/item.htm?id=957845742837) | 🛒 | 1 |

另外还需要一台台式机或笔记本:Ubuntu 22.04、12GB 显存以上 GPU（GR00T 微调约需 25GB 显存，见 18.8）、16GB 以上内存。

**本阶段**

| 硬件 | 购买 | 数量 |
| :--- | :---: | :---: |
| [SO-ARM101 套件（主臂 + 从臂 + 2个摄像头及支架）](https://detail.tmall.com/item.htm?id=877820346195&mi_id=0000OU1g76NMAq5LGIUiPORgyMk3E8XbnysI4JwJCeVC1ow&skuId=6312174298846&spm=a1z10.1-b-s.w4004-26191638149.2.4789262ePdEW84) | 🛒 | 1 |

在之前的章节里，你已经在 SO-ARM 上用 **ACT（Action Chunking with Transformers）** 等策略完成了"看图输出关节动作"的模仿学习。这类方法通常为**单一任务**而训练：模型只学会"把红方块放进盒子"这一种行为，换任务就要重新采数据、重新训练。

本章引入 **VLA（视觉 - 语言 - 动作）** 的核心思想：让机器人不仅会"看"，还能"理解"自然语言指令，并让同一个策略网络覆盖多个任务。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-18cn/ch18-01cn.jpg" alt="VLA 总览" />
</div>

<a id="overview"></a>

## 什么是多模态模型

---

多模态模型把不止一种信息 —— 图像、文本、机器人状态 —— 融合进一个统一的决策。在 VLA 的语境下，融合的是下面三种模态，并解码为机器人动作。

---

## 视觉、语言与动作

---

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-18cn/ch18-02cn.jpg" alt="视觉、语言与动作" />
</div>

在 VLA 框架中，三种模态各有明确分工：

| 模态 | 含义 | 在 SO-ARM 上的典型来源 |
| :--- | :--- | :--- |
| **视觉** | 相机采集的 RGB 图像 | 前视与侧视 USB 相机 |
| **语言** | 任务的自然语言描述 | "把螺丝刀放进工具箱" |
| **动作** | 机器人要执行的控制命令 | 5 个关节目标角 + 夹爪开合宽度 |

**状态**通常与动作成对出现：状态描述"机器人现在在哪"，动作描述"接下来去哪"。在 LeRobot 数据集里，它们存于 `observation.state` 与 `action` 字段；在 GR00T 中进一步通过 `meta/modality.json` 拆成 `state.single_arm`、`state.gripper` 等子键。

VLA 与纯视觉策略的关键区别：**语言成为条件变量。** 训练时每条示教轨迹都绑定一句任务描述；推理时用户只需换指令文本，无需换模型权重（在数据覆盖范围内）。

---

## VLM 与 VLA 的区别

---

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-18cn/ch18-03cn.jpg" alt="VLM 与 VLA" />
</div>

| 维度 | VLM（视觉 - 语言模型） | VLA（视觉 - 语言 - 动作） |
| :--- | :--- | :--- |
| 输出 | 文本、描述、推理结果 | **机器人动作序列** |
| 典型用途 | 图像问答、场景理解、看图说话 | 抓取、放置、开关门等操作 |
| 代表模型 | LLaVA、Qwen-VL、Cosmos-Reason | GR00T、pi0、OpenVLA |
| 与机器人的关系 | 可辅助规划，不直接驱动电机 | 端到端输出控制命令 |

可以简单理解为：**VLM 负责"看懂世界并聊它"，VLA 负责"看懂世界并动手"。**

Isaac GR00T 在架构上复用了 VLM 能力：一个 VLM 骨干网络编码图像与语言，其后接一个**扩散 Transformer（DiT）动作头**，把语义表示解码成连续动作分块。因此 GR00T 既是 VLA，也内嵌了强大的 VLM 表征能力。

---

## ACT 与 VLA 的区别

---

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-18cn/ch18-04cn.jpg" alt="ACT 与 VLA" />
</div>

你之前遇到的 ACT 与本章的 VLA 同属模仿学习（行为克隆）家族，但设计目标不同：

| 维度 | ACT | VLA（以 GR00T 为例） |
| :--- | :--- | :--- |
| 任务条件 | 通常**无语言**，隐式单任务 | **语言 + 视觉**，显式多任务 |
| 模型规模 | 小（千万级参数） | 大（十亿级基础模型） |
| 训练方式 | 从零训练或轻量微调 | 基础模型预训练 + 下游微调 |
| 动作表示 | 动作分块 | 动作分块 + Flow Matching 去噪 |
| 泛化 | 分布内表现好；换任务需重训 | 语言条件支持零 / 少样本迁移 |
| LeRobot 策略类型 | `act` | `groot` |

ACT 的核心技术是**动作分块**：一次预测多步动作，减少逐步推理的累积误差。GR00T 同样预测动作分块（窗口长度随版本变化 —— N1.5 为 `action_horizon = 16`）。

**迁移路径：** 如果你已有 SO-ARM 的 ACT 数据集（LeRobot 格式），第 20 章只需补充语言标注与 Modality 配置，即可用于 GR00T 微调，无需重采全部示教。

:::tip
GR00T N1.5 通过官方支持的 `so100_dualcam` 数据配置与 `new_embodiment` 本体标签运行在 SO-ARM 上 —— SO-ARM 是 GR00T 生态中支持最好的低成本本体之一，NVIDIA 有官方的 [SO101 微调指南](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning)。
:::

---

## 语言条件机器人任务

---

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-18cn/ch18-05cn.jpg" alt="语言条件机器人任务" />
</div>

语言条件任务的标准形式：

```text
输入：图像 I_t + 语言指令 L + 当前状态 S_t
输出：动作 A_{t:t+H}（未来 H 步的动作分块）
```

**指令粒度**可以有多个层次：

- **任务级**："把红方块放进蓝盒子"（整条轨迹共用一句）
- **子目标级**："先接近物体" -> "再闭合夹爪"（分段标注，进阶场景）
- **约束级**："轻放""避开障碍"（修饰动作的执行方式）

在 LeRobot 数据集中，语言通常写在 `meta/tasks.jsonl` 或 `annotation` 字段。GR00T 通过 `modality.json` 的 `annotation` 键读取，常见两种形式：

| 键名 | 典型数据集 | SO-ARM 推荐 |
| :--- | :--- | :--- |
| `human.task_description` | SO-100 / SO101、cube_to_bowl 等简单桌面任务 | **推荐**：与第 20 章示例一致 |
| `human.action.task_description` | LIBERO、SimplerEnv 等仿真基准 | 仅当数据来自这些基准时使用 |

两个键都合法，但必须与数据集里的实际字段匹配；训练与推理之间不要混用。

**实用建议（SO-ARM）：**

1. 每条示教录制时，用**一句以动词开头的短句**（中文或英文）描述任务；
2. 相似任务保持措辞一致，例如统一用"把 X 放到 Y 上"；
3. 避免同一份数据对应多种说法；微调初期越一致越好。

---

## 单任务、多任务与泛化

---

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-18cn/ch18-06cn.jpg" alt="单任务、多任务与泛化" />
</div>

| 训练范式 | 描述 | 适用场景 |
| :--- | :--- | :--- |
| **单任务** | 只学一个技能 | ACT 默认；数据少、目标清晰 |
| **多任务** | 同一模型学多个技能，靠语言区分 | VLA 微调；桌面整理、分拣等 |
| **跨本体泛化** | 不同机器人共享一个基础模型 | GR00T 预训练；经 `embodiment_tag` 适配 |

VLA 语境中的"泛化"有几个层次 —— 不要混淆：

1. **同任务、新初始姿态**：物体位置变了仍能抓 —— ACT 通常也能做到；
2. **新物体、新容器**：依赖视觉泛化 —— 需要训练数据里有足够多样性；
3. **新语言指令组合**：没见过的"把 A 放到 B 上"、但句式熟悉 —— VLA 的语言条件优势；
4. **新机器人本体**：换臂仍可用 —— 依赖 GR00T 的本体投影层加少量微调数据。

对 SO-ARM 用户，现实的预期是：**微调后可在已采集的多个语言任务之间切换**；全新物体或全新句式，仍需补充示教数据。

---

## 连续动作与动作 token

---

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-18cn/ch18-07cn.jpg" alt="连续动作与动作 token" />
</div>

机器人控制命令有两种主流表示：

### 连续动作

直接输出浮点向量，例如 5 个关节角 + 1 个夹爪开合值：

```python
action = [q1, q2, q3, q4, q5, gripper]   # shape: (6,)
```

- **优点**：精度高，与真实电机接口一致；
- **缺点**：高维空间回归难；
- **GR00T 的做法**：DiT + Flow Matching 在连续空间去噪，输出动作分块。

### 动作 token（离散化动作）

把连续值量化成离散符号，像语言模型预测下一个 token 一样：

```text
action_tokens = [tok_42, tok_17, tok_89, ...]
```

- **优点**：可复用自回归 LLM 架构；pi0-FAST 等 VLA 采用；
- **缺点**：量化损失、词表设计复杂。

**相对动作 vs. 绝对动作**：GR00T 预训练的动作空间对部分本体组用**相对动作**（相对当前状态的增量），对另一些用绝对关节位置；夹爪保持绝对。相对轨迹更平滑，但长期执行可能漂移。SO-ARM 微调时主要依赖 `so100_dualcam` 数据配置的默认值 —— 要点只有一句：不要手改你不理解的动作空间变换。

---

## VLA 的能力与局限

---

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-18cn/ch18-08cn.jpg" alt="VLA 的能力与局限" />
</div>

### 能力

- **语言驱动**：一个模型多种任务；换指令即换行为；
- **视觉鲁棒**：大规模预训练带来比小 ACT 更强的场景理解；
- **跨任务迁移**：相似句式与相似物体之间可共享表征；
- **动作分块预测**：一次推理多步输出，适合实时控制。

### 局限

- **算力需求高**：GR00T N1.5-3B 微调约需 **25GB 显存**（Ampere 及以上架构 —— 如 RTX 4090 / A6000；**不支持 V100**），可用 `--no-tune_diffusion_model` 降低。推理更轻，可在 Jetson AGX Thor 上跑（第 21 章）—— 第 22 章甚至完全不需要 GPU；
- **数据格式更复杂**：除标准 LeRobot 字段外，还需要 `modality.json` 与本体标签；
- **不是万能药**：训练集没覆盖的物体、指令、工位布局仍可能失败；
- **延迟**：大模型推理比 ACT 慢；需恰当设置动作窗口与推理参数；
- **仿真到现实的差距**：预训练数据以特定平台为主；桌面机械臂需要充分微调。

### 什么时候选 ACT，什么时候选 VLA？

| 场景 | 推荐 |
| :--- | :--- |
| 单一重复任务、边缘设备、低延迟 | ACT |
| 多任务、语言交互、愿意投入 GPU 与标注 | VLA / GR00T |
| 已有 ACT 数据、想扩展多任务 | 给现有 LeRobot 数据加语言 -> GR00T 微调（第 20 章） |
| 完全没有训练 GPU | SenseCraft Robotics 无代码 VLA（第 22 章） |

---

## 本章小结

---

- 多模态模型把视觉、语言与状态融合成统一决策；
- VLA 在 VLM 之上增加动作输出，支持语言条件的操作；
- ACT 是轻量单任务方案；GR00T 是大规模预训练 + 微调的 VLA 方案；
- SO-ARM 在 GR00T 生态中通过 `so100_dualcam` + `new_embodiment` 获得官方支持；
- 下一章讲如何把通用 VLA **落到 SO-ARM 这个具体本体上**。

</div>
