---
description: 在已跑通 ACT 的 reBot 或 SO101 平台上训练并部署新策略，通过标签切换各平台的命令，了解 Diffusion、SmolVLA 与 π 系列的配置及评估流程。
title: 从 ACT 切换到其他策略（reBot / SO101）
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
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/cn/robotics/hands_on_algorithm_switching/
---

import '/src/css/paper-reading-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-algorithm-switching-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 手把手复现</span>
  <h1 id="hands-on-algorithm-switching-title">从 ACT 切换到其他策略（reBot / SO101）</h1>
  <p className="paper-reading-lead">复用已跑通 ACT 的平台和数据集，训练并部署新策略，再通过真机评估比较效果。命令按 reBot-RS、reBot-DM 和 SO101 分别展示。</p>
  <ul className="paper-reading-badges" aria-label="本篇内容">
    <li>Diffusion</li>
    <li>SmolVLA</li>
    <li>π 系列</li>
    <li>真机评估</li>
  </ul>
</section>

**选择策略 → 配置并训练 → 加载新模型 → 真机评估。**

本文以 **ACT → Diffusion，抓取黑色方块** 为例。前提是已完成机械臂组装、校准、遥操作和 ACT 训练部署。保留原有硬件配置，使用同一平台的数据集训练新策略。

![从 ACT 切换到其他策略的流程](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/algorithm-switching-01-switch-map.png)

## 环境与平台选择

选择你的机械臂标签，下方训练和部署命令会同步切换。

<Tabs groupId="policy-switching-robot" defaultValue="rebot-rs">

<TabItem value="rebot-rs" label="reBot-RS">

沿用已跑通 ACT 的 Seeed LeRobot 环境及 B601-RS 插件配置，命令基于 Seeed LeRobot 0.4.4 系列。硬件配置见 [reBot-RS 与 LeRobot](/cn/rebot_arm_b601_rs_lerobot/)。

</TabItem>

<TabItem value="rebot-dm" label="reBot-DM">

沿用已跑通 ACT 的 Seeed LeRobot 环境及 B601-DM 插件配置，命令基于 Seeed LeRobot 0.4.4 系列。硬件配置见 [reBot-DM 与 LeRobot](/cn/rebot_arm_b601_dm_lerobot/)。

</TabItem>

<TabItem value="so101" label="SO101">

沿用已跑通 ACT 的 LeRobot v0.4.4 环境。若尚未安装 Feetech 电机支持，在 LeRobot 源码目录执行：

```bash
pip install -e ".[feetech]"
```

硬件准备见 [SO101 官方文档](https://huggingface.co/docs/lerobot/main/en/so101)。

</TabItem>

</Tabs>

---

## 各策略需要做什么

|目标策略|必要工作|
|---|---|
|**Diffusion**|设置 `policy.type=diffusion` 和图像裁剪参数；训练新模型；更新部署路径。|
|**SmolVLA**|安装 `.[smolvla]`；加载 `lerobot/smolvla_base` 微调；对齐任务文本、相机名称及状态／动作维度。|
|**π₀ / π₀\.₅** |安装 `.[pi]`；加载对应基础模型微调；对齐任务文本、图像、动作与归一化统计；按显存调整批大小。|

VLA 数据需包含准确的任务描述；相机名称和数量与基础模型有差异时，配置输入名称映射和缺失视角。[SmolVLA](https://huggingface.co/docs/lerobot/v0.4.4/smolvla) · [π₀](https://huggingface.co/docs/lerobot/pi0) · [输入映射](https://huggingface.co/docs/lerobot/rename_map)

---

## 用原数据集训练 Diffusion

在原 ACT 环境和 LeRobot 源码目录中执行。将 `dataset.repo_id` 换成自己的数据集名称；若数据位于自定义目录，沿用原训练命令的 `--dataset.root` 和解码参数。示例使用一台 `front` 相机、640×480 图像和 30 FPS 数据。

<Tabs groupId="policy-switching-robot" defaultValue="rebot-rs">

<TabItem value="rebot-rs" label="reBot-RS">

```bash
lerobot-train \
  --dataset.repo_id=your_username/rebot_rs_cube \
  --policy.type=diffusion \
  --policy.crop_shape=null \
  --policy.device=cuda \
  --policy.push_to_hub=false \
  --output_dir=outputs/train/diffusion_rebot_rs_cube \
  --job_name=diffusion_rebot_rs_cube \
  --batch_size=8 \
  --steps=100000 \
  --wandb.enable=false
```

</TabItem>

<TabItem value="rebot-dm" label="reBot-DM">

```bash
lerobot-train \
  --dataset.repo_id=your_username/rebot_dm_cube \
  --policy.type=diffusion \
  --policy.crop_shape=null \
  --policy.device=cuda \
  --policy.push_to_hub=false \
  --output_dir=outputs/train/diffusion_rebot_dm_cube \
  --job_name=diffusion_rebot_dm_cube \
  --batch_size=8 \
  --steps=100000 \
  --wandb.enable=false
```

</TabItem>

<TabItem value="so101" label="SO101">

```bash
lerobot-train \
  --dataset.repo_id=your_username/so101_cube \
  --policy.type=diffusion \
  --policy.crop_shape=null \
  --policy.device=cuda \
  --policy.push_to_hub=false \
  --output_dir=outputs/train/diffusion_so101_cube \
  --job_name=diffusion_so101_cube \
  --batch_size=8 \
  --steps=100000 \
  --wandb.enable=false
```

</TabItem>

</Tabs>

|参数|设置要求|
|---|---|
|`policy.type`|设置为 `diffusion`，创建并重新训练新策略。|
|`policy.crop_shape`|本例设为 `null`，保留完整画面；完整图像会增加显存与推理开销。|
|`output_dir` / `job_name`|使用新的名称，部署时的 `policy.path` 应指向对应输出目录。|
|`batch_size` / `steps`|以 8 / 100000 为起点，按显存和真机效果调整。|

![Diffusion 图像裁剪设置说明](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/algorithm-switching-02-crop-explained.png)

裁剪或缩放优化时，保持训练与部署的图像处理一致。配置参考：[Seeed Diffusion](https://github.com/Seeed-Projects/lerobot/blob/0f392484458cb5ebca0310c0c4c47390a31c80ed/src/lerobot/policies/diffusion/configuration_diffusion.py) · [LeRobot v0.4.4 Diffusion](https://github.com/huggingface/lerobot/blob/v0.4.4/src/lerobot/policies/diffusion/configuration_diffusion.py)。

---

## 加载新模型运行

将 `policy.path` 指向刚训练得到的 Diffusion 模型，并设置新的评估数据集名称。下面的端口、`robot.id`、相机配置和任务描述均为示例，执行前替换成自己 ACT 已跑通的配置；`robot.id` 沿用校准时的名称。

<Tabs groupId="policy-switching-robot" defaultValue="rebot-rs">

<TabItem value="rebot-rs" label="reBot-RS">

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.id=follower1 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{"front":{"type":"opencv","index_or_path":0,"width":640,"height":480,"fps":30,"fourcc":"MJPG"}}' \
  --policy.path=outputs/train/diffusion_rebot_rs_cube/checkpoints/last/pretrained_model \
  --policy.device=cuda \
  --dataset.repo_id=local/eval_diffusion_rebot_rs_cube_01 \
  --dataset.single_task="Grab the black cube" \
  --dataset.fps=30 \
  --dataset.num_episodes=1 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.push_to_hub=false \
  --display_data=true
```

</TabItem>

<TabItem value="rebot-dm" label="reBot-DM">

```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=follower1 \
  --robot.can_adapter=damiao \
  --robot.cameras='{"front":{"type":"opencv","index_or_path":0,"width":640,"height":480,"fps":30,"fourcc":"MJPG"}}' \
  --policy.path=outputs/train/diffusion_rebot_dm_cube/checkpoints/last/pretrained_model \
  --policy.device=cuda \
  --dataset.repo_id=local/eval_diffusion_rebot_dm_cube_01 \
  --dataset.single_task="Grab the black cube" \
  --dataset.fps=30 \
  --dataset.num_episodes=1 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.push_to_hub=false \
  --display_data=true
```

</TabItem>

<TabItem value="so101" label="SO101">

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{"front":{"type":"opencv","index_or_path":0,"width":640,"height":480,"fps":30}}' \
  --policy.path=outputs/train/diffusion_so101_cube/checkpoints/last/pretrained_model \
  --policy.device=cuda \
  --dataset.repo_id=local/eval_diffusion_so101_cube_01 \
  --dataset.single_task="Grab the black cube" \
  --dataset.fps=30 \
  --dataset.num_episodes=1 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.push_to_hub=false \
  --display_data=true
```

</TabItem>

</Tabs>

- **reBot-RS**：沿用已验证的 CAN 接口与 `socketcan` 配置。
- **reBot-DM**：沿用已验证的串口与 `damiao` 适配器配置。
- **SO101**：沿用已验证的串口配置；原来使用 `--robot.use_degrees` 时也沿用原值。

相机名称、位置、图像尺寸、动作单位和帧率与训练数据保持一致。每次评估使用新的 `eval_…` 数据集名称。

配置参考：[Seeed 插件配置](https://github.com/Seeed-Projects/lerobot-robot-seeed-b601#configuration) · [LeRobot v0.4.4 评估流程](https://huggingface.co/docs/lerobot/v0.4.4/il_robots#run-inference-and-evaluate-your-policy)。

---

## 真机评估与策略对比

固定机械臂并清空运动范围，先运行一回合，检查动作方向、幅度和实际控制频率。确认正常后，用与 ACT 相同的任务、物体位置和试验次数评估 Diffusion，记录成功次数和完成时间。

继续切换 SmolVLA 或 π 系列时，按对应教程安装依赖、加载基础模型微调，并对齐任务文本、相机输入、状态／动作维度及归一化统计，再更新 `policy.path`。

</div>
