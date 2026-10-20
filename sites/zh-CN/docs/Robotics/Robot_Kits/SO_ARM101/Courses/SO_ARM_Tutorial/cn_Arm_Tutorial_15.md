---
description: "SO-ARM 具身智能入门课程第 15 章 —— 理解批大小、学习率与训练步数，然后用 lerobot-train 在 SO-ARM 数据集上训练你的第一个 ACT 策略，监控 Loss 与 GPU，并管理检查点。"
title: 第 15 章 - 训练你的第一个 ACT 策略
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - ACT
  - 训练
  - LeRobot
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_15
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_15/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 3 阶段 · 第 15 章 · 实践</span>
    <h2>15. 训练你的第一个 ACT 策略</h2>
    <p>
      理解批大小、学习率与训练步数三个关键配置，然后用 lerobot-train 在 SO-ARM 数据集上训练第一个 ACT 策略，监控 Loss 与 GPU 状态，并管理检查点。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 三个关键配置：批大小、学习率、步数

---

### 批大小（Batch Size）

每次参数更新看多少帧。批越大训练越稳，显存也吃得越多。爆显存时，第一个降的就是批大小。先保持 ACT 默认值，必要时再动。

### 学习率（Learning Rate）

每次更新参数走多远。太高 —— Loss 震荡甚至发散；太低 —— 训练龟速。ACT 默认值（1e-5 量级）在桌面任务上验证充分；第一轮训练不要改。

### 训练步数（Steps）

总共更新多少次。SO-ARM 量级的任务用 ACT 默认的 10 万–30 万步即可；更难的任务加步数有帮助，但有过拟合风险。以 Loss 曲线为准：验证损失不再下降就停。

:::tip
第一轮策略：全部保持默认，训 10 万步，上真机评估（第 16 章），再决定调什么。新手盲调浪费的时间，往往够再训一次。
:::

---

## 检查点的保存与管理

---

无需手动保存：每 `save_freq` 步自动存一个检查点，结束时再存一个 `last`。所以步数设大一点也没关系 —— 可以从较小的步数挑模型，丢弃欠训练或过拟合的那些。

```text
outputs/train/act_so101_test/
├── train_config.json              ← 本次训练的完整配置（恢复训练必需）
└── checkpoints/
    ├── 0020000/pretrained_model/  ← 各步数的模型存档
    ├── 0040000/pretrained_model/
    ├── ...
    └── last/pretrained_model/     ← 最后一个检查点，第 16 章使用
```

- **磁盘占用**：每个检查点都是完整模型权重，几十个加起来不小。训练稳定后可删除早中期检查点，只留 `last`；
- 推理时 `--policy.path` 指向 `checkpoints/last/pretrained_model`。

---

## 开始训练

---

一切检查通过 —— 在 conda `lerobot` 环境中启动。**本地数据集**（第 12 章录制）要保证 `repo_id` 与采集时一致，并加 `--policy.push_to_hub=false`：

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```

**Hugging Face Hub 上的数据集**则用你的用户名：

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000
```

各参数含义：

- **数据集**：`--dataset.repo_id` 指向第 12 章的数据集；
- **训练步数**：`--steps=300000`。算法默认更高，可按任务难度与 Loss 曲线调整；
- **策略类型**：`--policy.type=act` 加载 ACT 配置。策略会自动适配你机器人的电机状态、电机动作与相机数量 —— 这些信息已存在数据集里。可选项还有 `diffusion`、`pi0`、`pi0fast`、`smolvla`、`groot`；
- **设备**：`--policy.device=cuda` 用于 NVIDIA GPU；Apple Silicon 可用 `mps`；
- **可视化**：加回 `--wandb.enable=true` 可用 [Weights and Biases](https://docs.wandb.ai/quickstart) 绘制训练曲线（先 `wandb login`）。

:::tip
RTX 50 系显卡必须追加 `--dataset.video_backend=pyav` —— 绕开预览版 torchvision 缺失的 API。完整命令：

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```
:::

---

## 监控 Loss 与 GPU

---

- **Loss**：每 `log_freq` 步打印一次。前期快速下降、后期缓慢下行是健康形态。Loss 上升或剧烈震荡，通常说明学习率不适合你的环境；
- **GPU**：用 `nvidia-smi`（或 `watch -n 1 nvidia-smi`）看显存与利用率。利用率长期接近 0%，说明瓶颈在数据管线（磁盘 / CPU）而不是 GPU；
- **耗时参考**：50 条数据训练 ACT，笔记本 RTX 3060 8GB 约需 6 小时，RTX 4090 或 A100 约 2–3 小时。实际取决于数据规模、分辨率、批大小与硬件。

---

## 恢复中断的训练

---

从 `last` 检查点恢复，喂回保存的配置：

```bash
lerobot-train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

### 上传策略检查点（可选）

训练完成后上传最新检查点：

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

---

## 常见训练报错

---

| 报错 | 解决 |
| :--- | :--- |
| `TypeError: stack(): argument 'tensors' must be tuple of Tensors, not Column` | `pip install datasets==2.19` |
| CUDA 显存不足 | 降低批大小；关闭其他 GPU 进程；使用 `--dataset.video_backend=pyav` |
| 数据加载时报 `No valid stream found in input file` | `conda install ffmpeg=7.1.1 -c conda-forge`（第 5 章的修复） |
| 找不到数据集 | 本地数据集请核对录制时的 `repo_id`；目录在 `~/.cache/huggingface/lerobot/` 下 |

手里有了训练好的 `checkpoints/last/pretrained_model`，下一章把它部署到真机。

</div>
