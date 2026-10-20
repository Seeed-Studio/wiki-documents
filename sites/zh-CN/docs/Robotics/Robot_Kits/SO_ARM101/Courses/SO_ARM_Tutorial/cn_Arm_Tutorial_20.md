---
description: "SO-ARM 具身智能入门课程第 20 章 —— 把第三阶段的 LeRobot 数据集改造成 GR00T 可用的 VLA 数据集：语言标注、meta/modality.json、new_embodiment 标签与 so100_dualcam 配置、维度校验与多任务组织。"
title: 第 20 章 - 准备 SO-ARM VLA 数据集
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - GR00T
  - VLA
  - 数据集
  - modality
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_20
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_20/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 4 阶段 · 第 20 章 · 实践</span>
    <h2>20. 准备 SO-ARM VLA 数据集</h2>
    <p>
      把第三阶段的 LeRobot 数据集改造成 GR00T 可用的 VLA 数据集：语言标注、meta/modality.json、new_embodiment 标签与 so100_dualcam 配置、维度校验，以及多任务组织方式。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 前置条件

---

你需要：

- 一份干净的第三阶段 SO-ARM 数据集（第 11–13 章）：双相机视角（`front` + `side`）、50 条以上、每条一个任务、已通过质量检查；
- 在训练机上克隆好 [Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T) 仓库（第 21 章装完整环境 —— 本章只改数据集文件）；
- 参考官方配方：[在 SO101 上微调 GR00T N1.5](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning)。

:::tip
你现有的 ACT 数据集就是原材料 —— GR00T 复用同一批 LeRobot Episode。本章只补语言与模态元数据。
:::

---

## 检查 LeRobot 数据集

---

### 数据集目录结构

```text
~/.cache/huggingface/lerobot/seeedstudio123/test/
├── meta/
│   ├── info.json        ← fps、特征、相机键、机器人信息
│   ├── tasks.jsonl      ← 任务描述（在这里改！）
│   ├── episodes/...     ← 每条 Episode 的元数据
│   └── stats/...        ← 归一化统计量
├── data/                ← parquet 帧
└── videos/              ← 相机视频流
```

### 用 Python 快速检查

```python
from lerobot.common.datasets.lerobot_dataset import LeRobotDataset

ds = LeRobotDataset("seeedstudio123/test", root="~/.cache/huggingface/lerobot")
print(ds.meta.info)          # fps、特征
print(ds[0]["observation.state"].shape)   # 期望 torch.Size([6])
print(ds[0]["action"].shape)              # 期望 torch.Size([6])
```

### 必查清单

- [ ] `observation.state` 与 `action` 都是 6 维（5 关节 + 夹爪）；
- [ ] 恰好两个相机特征，例如 `observation.images.front` / `observation.images.side`；
- [ ] 每条 Episode 归属一个有意义的任务描述；
- [ ] 已知坏条已清理（第 13 章）。

---

## 添加语言任务描述

---

### 方式 A：录制时直接写（推荐）

如果为第四阶段**新录**一份数据集，录制时用你已经在用的 `--dataset.single_task` 绑定指令：

```bash
--dataset.single_task="Pick up the block at point A and place it at point B"
```

一个任务 = 一句以动词开头的短句 —— 它会自动进入数据集的任务元数据。

### 方式 B：回填 `meta/tasks.jsonl`

对已有数据集，编辑 `meta/tasks.jsonl`，让每个任务索引映射到规范的指令句。映射要稳定：模型学的就是这些字符串本身。

### 语言标注指南

1. 一个任务 = 一句固定描述；同一任务绝不出现两种说法；
2. 动词开头、具体明确："把方块放进盒子"好于"方块处理"；
3. 中英文都可以 —— GR00T 的 VLM 都认识 —— 但同一个任务内不要混语言。

---

## 创建 meta/modality.json

---

`modality.json` 告诉 GR00T 哪些数据集字段喂给哪些模型输入。SO-ARM 的标准双相机布局对应官方 **`so100_dualcam`** 数据配置；本地数据集的最小等价写法如下：

```json
{
    "state": {
        "single_arm": [0, 5],
        "gripper": [5, 6]
    },
    "action": {
        "single_arm": [0, 5],
        "gripper": [5, 6]
    },
    "video": {
        "front": "observation.images.front",
        "side": "observation.images.side"
    },
    "annotation": {
        "human.task_description": "task_description"
    }
}
```

### 字段说明

| 字段 | 含义 |
| :--- | :--- |
| `state.single_arm` | `observation.state` 中 5 个臂关节的切片 `[起点, 终点)` |
| `state.gripper` | 夹爪维度的切片 |
| `action.*` | `action` 向量上的同样切片 |
| `video` | 相机键 → 数据集特征名（必须与录制键逐字符一致） |
| `annotation.human.task_description` | 语言指令来源（第 18 章推荐的键） |

:::note
Isaac-GR00T 仓库里的 `so100_dualcam` 配置就是这份文件的权威版本 —— 如果你的布局符合标准（双相机、6 维状态 / 动作），训练时直接传 `--data-config so100_dualcam`，好过自己维护一份拷贝。
:::

---

## 设置本体标签

---

SO-ARM 以新本体身份微调：标签 **`new_embodiment`**。它很少写进数据集本身 —— 而是训练 / 推理的参数（第 21 章：推理服务上的 `--embodiment-tag new_embodiment`，SO101 微调配方在训练时设置）。

数据集阶段真正要紧的是**数据配置与事实相符**：双相机、6 维状态 / 动作，按 20.2 验证。

---

## 校验关节顺序与数据维度

---

### 第 1 步：打印数据集元信息

确认特征列表与维度（见 20.2 的 Python 片段）：状态 / 动作 6/6、两个图像特征。

### 第 2 步：核对模态切片

如果你写了自定义 `modality.json`，切片必须恰好覆盖 `[0,6)`，无空洞、无重叠。

### 第 3 步：可视化数据

```bash
lerobot-dataset-viz \
    --repo-id seeedstudio123/test \
    --mode local \
    --episode-index 0
```

检查：图像是否来自正确的相机、抓取时夹爪维度的值确实在开合、关节按合理顺序运动。

### 第 4 步：统计检查

`meta/stats` 里的状态 min/max 应落在标定关节范围内；图像平均亮度不应接近 0 或 255（黑屏或过曝的录制）。

---

## 多任务数据集组织

---

### 方式 A：同一 repo_id、多个 task_index（推荐）

把多个任务录进一个数据集；每条 Episode 存 `task_index`，`tasks.jsonl` 把每个索引映射到指令句。这是语言条件微调的自然形态。

### 方式 B：合并多个数据集

用第 13 章工具箱合并（`--operation.type merge`）。有效合并的前提：相机配置一致、机器人 / 特征布局一致，且各源数据集的**任务句子互不相同且各自稳定**。

### 数据量建议

| 方案 | Episode 数 | 说明 |
| :--- | :--- | :--- |
| 单任务、固定 A 到 B | 约 50 | 验证微调流程 |
| 单任务、位置多样 | 50–100 | 第三阶段的默认量 |
| 多任务（3–5 个任务） | 每任务 50–100 | 语言条件需要每个任务都有覆盖 |

---

## 数据质量检查清单

---

- [ ] 每条 Episode 有一句正确且唯一的指令；
- [ ] `modality.json` 的相机键与数据集特征逐字符一致；
- [ ] `state` / `action` 为 6 维且切片正确（`single_arm` / `gripper`）；
- [ ] 失败与离群的 Episode 已删除（第 13 章）；
- [ ] 统计量存在（`meta/stats`）—— 永远不要用录制中途被杀掉的会话训练；
- [ ] 第 21 章开始动手前，最终数据集已备份。

数据集就绪 —— 下一章在它上面微调 GR00T。

</div>
