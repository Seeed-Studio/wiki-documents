---
description: "SO-ARM101 Sim-to-Real VLA 课程第 10 章 —— 训练 GR00T N1.7 策略：安装 Isaac-GR00T、转换数据集到 v2、注册 SO-101 模态配置并微调。"
title: 第 10 章 - 训练 GR00T N1.7 策略
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Isaac GR00T
  - GR00T N1.7
  - VLA
  - 微调
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_10
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_10/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 3 · 第 10 章 · Get Your Own VLA Model</span>
    <h2>10. 训练 GR00T N1.7 策略</h2>
    <p>
      理解 Isaac GR00T N1.7，为它准备 SO-101 数据集，并用第 9 章采集的数据
      微调一个任务专属的 VLA 模型。
    </p>
    <div className="hero-actions">
      <a href="#groot">GR00T N1.7</a>
      <a href="#env">环境</a>
      <a href="#dataset">数据集</a>
      <a href="#config">配置</a>
      <a href="#finetune">微调</a>
      <a href="#outputs">产出</a>
    </div>
  </div>
</section>

## 10.1 NVIDIA Isaac GR00T N1.7

<section id="groot" className="section-card">
  <div className="section-title">
    <span>VLA 模型</span>
    <h2>10.1 NVIDIA Isaac GR00T N1.7</h2>
  </div>

NVIDIA Isaac GR00T N1.7 是面向通用机器人技能的开源
Vision-Language-Action（VLA）模型。这一跨本体模型接收多模态输入——语言与
图像——在多样环境中执行操作任务。

该模型训练一次，之后通过*模态配置*适配各个本体：一个小文件告诉 GR00T
数据集的哪些列是手臂、夹爪、相机和语言指令。本章正是为 SO-ARM101 构建这份
配置。

参考：

- [Hugging Face GR00T-1.7-3B 模型仓库](https://huggingface.co/nvidia/GR00T-1.7-3B/tree/main)
- [NVIDIA Isaac-GR00T GitHub 仓库](https://github.com/NVIDIA/Isaac-GR00T/tree/main)

</section>

## 10.2 准备 Python 环境

<section id="env" className="section-card">
  <div className="section-title">
    <span>Isaac-GR00T</span>
    <h2>10.2 准备 Python 环境</h2>
  </div>

```bash
sudo apt install git-lfs && git lfs install
cd ~
git clone --recurse-submodules https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
sudo apt-get update && sudo apt-get install -y ffmpeg
uv sync --python 3.12
```

:::caution 硬件
微调 3B 模型需要 RTX 5090 / RTX 6000 级 GPU（NVIDIA workshop 基线）。8 GB
笔记本显卡跑不了本章；章末的 ACT 自检仍可在小卡上运行。
:::

</section>

## 10.3 处理数据集

<section id="dataset" className="section-card">
  <div className="section-title">
    <span>v3 → v2</span>
    <h2>10.3 处理数据集</h2>
  </div>

LeRobot 写的是 v3 数据集；GR00T N1.7 微调读取旧的 v2 布局。转换第 9 章
录的数据集：

```bash
cd ~/Isaac-GR00T
uv run --project scripts/lerobot_conversion \
  python scripts/lerobot_conversion/convert_v3_to_v2.py \
  --repo-id so101_vials_real \
  --root $HOME/rebot-arm-dli-isaacsim/datasets
```

转换器把 v3 副本移到 `so101_vials_real_V30`，v2 数据集留在原路径。如果之后
要合并仿真数据（第 13 章），先合并**再**转换。

然后在转换后的数据集里添加 `meta/modality.json`：

```json
{
  "state": {
    "single_arm": { "start": 0, "end": 5 },
    "gripper": { "start": 5, "end": 6 }
  },
  "action": {
    "single_arm": { "start": 0, "end": 5 },
    "gripper": { "start": 5, "end": 6 }
  },
  "video": {
    "wrist": { "original_key": "observation.images.front" },
    "front": { "original_key": "observation.images.external" }
  },
  "annotation": {
    "human.task_description": { "original_key": "task_index" }
  }
}
```

为什么分界在 5：

| 维度 | 含义 |
| --- | --- |
| 0–4 | `shoulder_pan`、`shoulder_lift`、`elbow_flex`、`wrist_flex`、`wrist_roll` |
| 5 | `gripper` |

SO-ARM101 是 5 个臂关节加夹爪——共 6 维。reBot 课程是 7 维，别照抄它的
`end: 6`。

相机映射同样有讲究：

| 数据集特征 | 物理相机 | GR00T 输入 |
| --- | --- | --- |
| `observation.images.front` | 夹爪/腕部相机 | `wrist` |
| `observation.images.external` | 俯视相机 | `front` |

</section>

## 10.4 注册 SO-101 模态配置

<section id="config" className="section-card">
  <div className="section-title">
    <span>本体配置</span>
    <h2>10.4 注册 SO-101 模态配置</h2>
  </div>

```bash
cd ~/Isaac-GR00T
mkdir -p examples/so101
```

创建 `examples/so101/so101_config.py`：

```python
# SPDX-License-Identifier: Apache-2.0

from gr00t.configs.data.embodiment_configs import register_modality_config
from gr00t.data.embodiment_tags import EmbodimentTag
from gr00t.data.types import (
    ActionConfig,
    ActionFormat,
    ActionRepresentation,
    ActionType,
    ModalityConfig,
)

so101_config = {
    # 双相机的当前帧；键名与 meta/modality.json 一致
    "video": ModalityConfig(
        delta_indices=[0],
        modality_keys=["wrist", "front"],
    ),
    # 当前关节读数
    "state": ModalityConfig(
        delta_indices=[0],
        modality_keys=["single_arm", "gripper"],
    ),
    # 预测未来 16 步
    "action": ModalityConfig(
        delta_indices=list(range(0, 16)),
        modality_keys=["single_arm", "gripper"],
        action_configs=[
            # 手臂：相对增量在不同位姿间泛化更好
            ActionConfig(
                rep=ActionRepresentation.RELATIVE,
                type=ActionType.NON_EEF,
                format=ActionFormat.DEFAULT,
            ),
            # 夹爪：开合用绝对目标更稳
            ActionConfig(
                rep=ActionRepresentation.ABSOLUTE,
                type=ActionType.NON_EEF,
                format=ActionFormat.DEFAULT,
            ),
        ],
    ),
    "language": ModalityConfig(
        delta_indices=[0],
        modality_keys=["annotation.human.task_description"],
    ),
}

register_modality_config(so101_config, embodiment_tag=EmbodimentTag.NEW_EMBODIMENT)
```

</section>

## 10.5 微调 GR00T N1.7 策略

<section id="finetune" className="section-card">
  <div className="section-title">
    <span>GPU 时间</span>
    <h2>10.5 微调 GR00T N1.7 策略</h2>
  </div>

**路线 A —— 你的真实数据集**（本课程默认路径）：

```bash
cd ~/Isaac-GR00T
export SAVE_STEPS=5000
bash examples/finetune.sh \
  --base-model-path nvidia/GR00T-1.7-3B \
  --dataset-path $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --modality-config-path examples/so101/so101_config.py \
  --embodiment-tag NEW_EMBODIMENT \
  --output-dir $HOME/groot_so101_real
```

**路线 B —— 与仿真数据协同训练。** 先合并数据集（第 13 章），然后把
`--dataset-path` 指向合并后的集合。NVIDIA workshop 的配方：少量真实数据加
70–100 条仿真演示。

**路线 C —— 顺序微调。** 先在仿真上微调，再从那个 checkpoint 继续在真实
数据上微调：

```bash
bash examples/finetune.sh \
  --base-model-path $HOME/groot_so101_sim/checkpoint-5000 \
  --dataset-path $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --modality-config-path examples/so101/so101_config.py \
  --embodiment-tag NEW_EMBODIMENT \
  --output-dir $HOME/groot_so101_sim_then_real
```

`examples/finetune.sh` 的常用环境变量：

| 变量 | 默认 | 作用 |
| --- | --- | --- |
| `SAVE_STEPS` | 1000 | checkpoint 间隔 |
| `MAX_STEPS` | 10000 | 总优化步数 |
| `GLOBAL_BATCH_SIZE` | 32 | 小显存调低 |
| `EPISODE_SAMPLING_RATE` | 0.1 | 采样 episode 的步数比例 |
| `DS_WEIGHTS_ALPHA` | 未设 | 合并多源时按规模加权 |
| `USE_WANDB` | 1 | 设 0 关闭实验日志 |

:::tip 用 ACT 快速自检
投入 GPU 时间之前，先花几分钟用小型 ACT 策略在同一数据集上训练，确认数据
集、归一化器和优化器都接对了：

```bash
cd ~/rebot_lerobot && source .venv/bin/activate
lerobot-train \
  --policy.type=act --policy.push_to_hub=false \
  --dataset.repo_id=so101_vials_real \
  --dataset.root=$HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --output_dir=/tmp/act_check --steps=60 --batch_size=4
```
:::

</section>

## 10.6 训练产出

<section id="outputs" className="section-card">
  <div className="section-title">
    <span>checkpoint</span>
    <h2>10.6 训练产出</h2>
  </div>

```text
$HOME/groot_so101_real/
├── checkpoint-1000/
├── checkpoint-2000/
├── checkpoint-5000/
└── ...
```

每个 checkpoint 包含推理服务需要的模型权重和实验配置。步数不是越多越好：
在真机上（第 11 章）评估几个 checkpoint，保留完成任务最稳的那个。

下一章：[第 11 章 —— 真实环境评估](cn_Sim2Real_VLA_11.md)。

</section>

</div>