---
description: 在已经跑通 ACT 的 reBot 平台上切换策略，了解 Diffusion、SmolVLA 与 π 系列的配置及评估流程。
title: reBot：从 ACT 切换到其他策略
hide_title: true
keywords:
  - 手把手复现
  - reBot
  - LeRobot
  - ACT
  - B601-DM
  - B601-RS
  - 机械臂
  - 具身智能
  - 课程
  - 教程
  - SO101
  - SO-ARM101
  - Hugging Face
  - Arm
  - Robotics
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/hands_on_algorithm_switching
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-21
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-21'
url: https://wiki.seeedstudio.com/cn/robotics/hands_on_algorithm_switching/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-algorithm_switching-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 手把手复现</span>
  <h1 id="hands-on-algorithm_switching-title">reBot：从 ACT 切换到其他策略</h1>
  <p className="paper-reading-lead">在已经跑通 ACT 的 reBot 平台上切换策略，了解 Diffusion、SmolVLA 与 π 系列的配置及评估流程。</p>
  <ul className="paper-reading-badges" aria-label="本篇内容">
    <li>Diffusion</li>
    <li>SmolVLA</li>
    <li>π 系列</li>
    <li>真机评估</li>
  </ul>
</section>

> 适用：已通过 Seeed 官方插件跑通 ACT 的 B601\-DM / B601\-RS 用户；命令基于 Seeed LeRobot 0\.4\.4 系列。

**选择策略 → 配置并训练 → 加载新模型 → 真机评估。**

![reBot：从 ACT 切换到其他策略：reBot：从 ACT 切换到其他策略（配图 1）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/algorithm-switching-01-switch-map.png)

## 各策略需要做什么

|目标策略|必要工作|
|---|---|
|**Diffusion**|设置 `policy.type=diffusion` 和图像裁剪参数；训练新模型；更新部署路径。|
|**SmolVLA**|安装 `.[smolvla]`；加载 `lerobot/smolvla_base` 微调；对齐任务文本、相机名称及状态／动作维度。|
|**π₀ / π₀\.₅** |安装 `.[pi]`；加载对应基础模型微调；对齐任务文本、图像、动作与归一化统计；按显存调整批大小。|

VLA 数据需包含准确的任务描述；相机名称和数量与基础模型有差异时，配置输入名称映射和缺失视角。[SmolVLA](https://huggingface.co/docs/lerobot/v0.4.4/smolvla) · [π₀](https://huggingface.co/docs/lerobot/pi0) · [输入映射](https://huggingface.co/docs/lerobot/rename_map)

## 示例：ACT → Diffusion，抓取黑色方块

示例使用 RS、`front` 相机、640×480 图像和 30 FPS 数据。在原 ACT 环境和 LeRobot 目录中执行以下步骤。

### 训练 Diffusion

把 `dataset.repo_id` 换成你的 ACT 数据集名称；自定义数据路径或解码参数也填入训练命令。

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --policy.type=diffusion \
  --policy.crop_shape=null \
  --policy.device=cuda \
  --policy.push_to_hub=false \
  --output_dir=outputs/train/diffusion_rebot_cube \
  --job_name=diffusion_rebot_cube \
  --batch_size=8 \
  --steps=100000 \
  --wandb.enable=false
```

|参数|设置要求|
|---|---|
|`policy.type`|设置为 `diffusion`，使用 Diffusion 训练预设。|
|`policy.crop_shape`|本例设为 `null`，保留完整画面；完整图像会增加显存与推理开销。|
|`output_dir`|设置新的训练输出目录。|
|`batch_size` / `steps`|以 8 / 100000 为起点，按显存和真机效果调整。|

![reBot：从 ACT 切换到其他策略：1. 训练 Diffusion（配图 2）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/algorithm-switching-02-crop-explained.png)

裁剪或缩放优化时，保持训练与部署的图像处理一致。[Diffusion 配置](https://github.com/Seeed-Projects/lerobot/blob/0f392484458cb5ebca0310c0c4c47390a31c80ed/src/lerobot/policies/diffusion/configuration_diffusion.py)

### 加载新模型运行

将 `policy.path` 指向训练得到的 Diffusion 模型，并设置新的评估数据集名称。

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.id=follower1 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{"front":{"type":"opencv","index_or_path":0,"width":640,"height":480,"fps":30,"fourcc":"MJPG"}}' \
  --policy.path=outputs/train/diffusion_rebot_cube/checkpoints/last/pretrained_model \
  --policy.device=cuda \
  --dataset.repo_id=local/eval_diffusion_cube_01 \
  --dataset.single_task="Grab the black cube" \
  --dataset.fps=30 \
  --dataset.num_episodes=1 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.push_to_hub=false \
  --display_data=true
```

硬件参数填写自己 ACT 已跑通的配置；相机名称、位置、动作单位和帧率与训练数据保持一致。**DM 用户**填写原有 DM 参数，例如 `seeed_b601_dm_follower`、`/dev/ttyACM0`、`damiao`。每次评估使用新的 `eval_…` 名称。[Seeed 插件配置](https://github.com/Seeed-Projects/lerobot-robot-seeed-b601#configuration)

### 真机评估

先运行一回合，检查动作方向、幅度和实际控制频率。随后使用与 ACT 相同的任务、物体位置和试验次数，记录成功率。

---

资料核对：2026\-10\-15。[Seeed 训练与评估](https://wiki.seeedstudio.com/rebot_arm_b601_rs_lerobot/#training-and-evaluation) · [LeRobot 文档](https://huggingface.co/docs/lerobot/index)

</div>
