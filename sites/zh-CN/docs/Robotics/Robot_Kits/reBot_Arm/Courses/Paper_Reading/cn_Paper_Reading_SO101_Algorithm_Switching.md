---
title: SO101：从 ACT 切换到其他策略
description: 复用 SO101 的 ACT 数据集，训练 Diffusion 模型，加载新策略并完成真机评估。
hide_title: true
keywords:
  - 手把手复现
  - SO101
  - LeRobot
  - ACT
  - Diffusion
slug: /robotics/hands_on_so101_algorithm_switching
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-21
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-21'
url: https://wiki.seeedstudio.com/cn/robotics/hands_on_so101_algorithm_switching/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-so101-switching-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 手把手复现</span>
  <h1 id="hands-on-so101-switching-title">SO101：从 ACT 切换到其他策略</h1>
  <p className="paper-reading-lead">复用 ACT 数据集，训练新策略，再更换部署时的模型路径。</p>
</section>

本文是 [reBot 切换策略教程](/robotics/hands_on_algorithm_switching)的 SO101 最简版，以 **ACT → Diffusion** 为例，命令采用 **LeRobot v0.4.4**。

前提：已完成 SO101 组装、校准、遥操作和 ACT 训练部署。硬件准备见 [SO101 官方文档](https://huggingface.co/docs/lerobot/main/en/so101)；在 LeRobot 源码目录安装电机支持：

```bash
pip install -e ".[feetech]"
```

## 1. 用原数据集训练 Diffusion

在原 ACT 环境中执行，将 `your_username/so101_cube` 换成自己的 **SO101 数据集**；若数据位于自定义目录，同时沿用原训练命令的 `--dataset.root`。

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

`policy.type=diffusion` 创建新策略，需重新训练；`crop_shape=null` 关闭裁剪。输出目录使用新名称，显存不足时减小 `batch_size`。[Diffusion 配置](https://github.com/huggingface/lerobot/blob/v0.4.4/src/lerobot/policies/diffusion/configuration_diffusion.py)

## 2. 加载新模型运行

下面示例使用一台 `front` 相机、640×480 图像和 30 FPS。将串口、`robot.id`、完整相机配置和任务描述替换成自己 ACT 已跑通的配置；`robot.id` 沿用校准时的名称。通过 `policy.path` 加载训练结果。[官方评估流程](https://huggingface.co/docs/lerobot/v0.4.4/il_robots#run-inference-and-evaluate-your-policy)

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

相机名称、位置、图像尺寸、动作单位和帧率与训练数据保持一致；原来使用 `--robot.use_degrees` 时也沿用原值。每次评估使用新的 `eval_…` 数据集名称。

## 3. 与 ACT 比较

固定机械臂并清空运动范围，先运行一回合，检查动作方向、幅度和实际控制频率。确认正常后，用相同物体位置和试验次数分别评估 ACT 与 Diffusion，记录成功次数和完成时间。

继续切换 [SmolVLA](https://huggingface.co/docs/lerobot/v0.4.4/smolvla) 或 [π₀](https://huggingface.co/docs/lerobot/v0.4.4/pi0) 时，按对应教程安装依赖、加载基础模型微调，并对齐任务文本、相机输入及状态／动作维度，再更新 `policy.path`。

</div>
