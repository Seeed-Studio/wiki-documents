---
description: "SO-ARM 具身智能入门课程第 17 章（选修）—— 从单臂扩展到双臂：接线四条臂、标定左右主从对、用 bi_so_follower / bi_so_leader 遥操作与录制、训练 ACT 并部署双臂策略。"
title: 第 17 章 - SO-ARM 双臂训练
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - 双臂
  - Bimanual
  - 训练
  - LeRobot
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_17
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_17/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 3 阶段 · 第 17 章 · 选修</span>
    <h2>17. SO-ARM 双臂训练</h2>
    <p>
      从单臂扩展到双臂：接线四条机械臂、标定左右主从对、用 bi_so_follower / bi_so_leader 遥操作与录制数据、训练 ACT 并部署双臂策略。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>你需要准备</strong>
    <span>两套 SO-ARM 套件（4 条臂：2 主 + 2 从）。</span>
    <span>与第 5–16 章相同的软件环境。</span>
    <span>一个需要"双手"的任务 —— 例如左臂把物体递给右臂。</span>
  </div>
</section>

<a id="overview"></a>

## 为什么要双臂

---

许多真实操作任务天然需要两只手：抓取与递接、折盒子、装配两个零件。双臂模仿学习也正是 ACT 诞生的场景（ALOHA），而 SO-ARM 生态原生支持 —— LeRobot 内置 `bi_so_follower` 与 `bi_so_leader` 类型，把两条臂当作一台 12 维动作（每臂 6 维）的机器人。

第 8–16 章学过的一切都直接迁移；只是硬件翻倍，且每条命令多带 `left_arm_config` / `right_arm_config`。

---

## 接线与端口

---

接好四块控制板，记下每条臂的端口：

| 角色 | 端口 |
| :--- | :--- |
| 左从臂 | `/dev/ttyACM0` |
| 右从臂 | `/dev/ttyACM1` |
| 左主臂 | `/dev/ttyACM2` |
| 右主臂 | `/dev/ttyACM3` |

标定时从臂类型为 `so101_follower`、主臂类型为 `so101_leader`（LeRobot 中 `so100_leader` 与 `so101_leader` 是同一实现）。

给四个端口授权：

```bash
sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3
```

---

## 标定（关键步骤）

---

用第 10 章的流程逐条臂标定，id 必须带 **`_left` / `_right` 后缀** —— 双臂类型只找带这些后缀的标定文件。

**左从臂：**

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_bimanual_follower_left
```

**右从臂：**

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_right
```

**左主臂：**

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM2 \
  --teleop.id=my_awesome_bimanual_leader_left
```

**右主臂：**

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_right
```

标定完成后，文件保存在：

```text
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_right.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_right.json
```

:::tip
**已经用其他 id 标定过？** 直接复制标定文件，不必重做物理流程：

```bash
CAL_DIR=~/.cache/huggingface/lerobot/calibration/robots

cp $CAL_DIR/so101_follower/my_awesome_follower_arm1.json \
   $CAL_DIR/so101_follower/my_awesome_bimanual_follower_left.json

cp $CAL_DIR/so101_follower/my_awesome_follower_arm2.json \
   $CAL_DIR/so101_follower/my_awesome_bimanual_follower_right.json

cp $CAL_DIR/so101_leader/my_awesome_leader_arm3.json \
   $CAL_DIR/so101_leader/my_awesome_bimanual_leader_left.json

cp $CAL_DIR/so101_leader/my_awesome_leader_arm4.json \
   $CAL_DIR/so101_leader/my_awesome_bimanual_leader_right.json
```
:::

---

## 双臂遥操作

---

**不带相机：**

```bash
lerobot-teleoperate \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --display_data=true
```

**带腕部相机**（用 `lerobot-find-cameras opencv` 查索引，按需增删相机）：

```bash
lerobot-teleoperate \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --display_data=true
```

:::warning
两条从臂现在共用一个工作空间。注意周围环境，避免从臂之间 —— 以及递接任务中夹爪之间 —— 相撞。
:::

---

## 录制双臂数据集

---

保存到本地（加 `--dataset.push_to_hub=false`；`repo_id` 必须含 `/`，本地数据可用 `seeed/` 作占位前缀）：

```bash
lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.push_to_hub=false \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=50 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.vcodec=libsvtav1 \
  --display_data=true
```

数据保存在 `~/.cache/huggingface/lerobot/seeed/bimanual_so101_task/`，结构与第 13 章一致。想改为上传 Hub：保留 `HF_USER`、去掉 `push_to_hub=false`，并把 `--dataset.repo_id` 设为 `${HF_USER}/bimanual_so101_task`。

### 断点续录

录制意外退出或分多 session 采集时，用 `--resume`：

- 务必加 `--resume=true`；否则 `LeRobotDataset.create()` 会因目录已存在报错；
- `--dataset.num_episodes` 指**本次**要录的条数（已录 15 条、目标 50 → 填 35）；
- 尽量在一条 Episode 中或自然结束后退出；避免在"重置环境"阶段退出（可能保存空 Episode —— 新代码会自动跳过）：

```bash
lerobot-record \
  --resume=true \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.push_to_hub=false \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=35 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.vcodec=libsvtav1 \
  --display_data=true
```

### 回放与删除 Episode

在真机上回放指定条（`episode` 从 0 计数 —— 24 即第 25 条）：

```bash
lerobot-replay \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.episode=24
```

删除坏条（第 13 章工具箱）：

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

原始数据会备份到 `.../bimanual_so101_task_old/`；确认无误后手动删除备份。

---

## ACT 训练

---

**从本地数据集训练：**

```bash
lerobot-train \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --policy.type=act \
  --policy.device=cuda \
  --steps=60000 \
  --output_dir=outputs/train/act_bimanual_so101 \
  --wandb.enable=false \
  --policy.push_to_hub=false
```

**从 Hugging Face Hub 训练：**

```bash
export HF_USER=your_hf_username

lerobot-train \
  --dataset.repo_id=${HF_USER}/bimanual_so101_task \
  --policy.type=act \
  --policy.device=cuda \
  --steps=100000 \
  --output_dir=outputs/train/act_bimanual_so101 \
  --wandb.enable=false \
  --policy.push_to_hub=false
```

以上使用 ACT 默认参数（`chunk_size=100`、`dim_model=512` 等）。策略会从数据集自动读取 12 维状态 / 动作（每臂 6 维）—— 无需额外配置。

---

## 真机部署

---

用第 16 章的配方评估，现在是双臂 —— 评估数据保存到本地：

```bash
lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --dataset.root=seeed_eval/eval_bimanual_so101_task8 \
  --dataset.push_to_hub=false \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

或改为 `--dataset.repo_id=${HF_USER}/eval_bimanual_so101_task`（去掉 `dataset.root`）上传评估到 Hub。

---

## FAQ

---

| 问题 | 原因 | 解决 |
| :--- | :--- | :--- |
| 遥操作提示重新标定 | `bi_so_follower` 找不到带 `_left` / `_right` 后缀的标定文件 | 用带后缀的 id 重新标定，或复制现有标定文件（17.3 节） |
| 主臂用手扳不动 | 主臂力矩未失能 | 重新标定或检查电机 |
| 续录时报"目录已存在" | 没加 `--resume=true` | 在 `lerobot-record` 命令中加上 `--resume=true` |
| 左右臂互换 | 端口配置错误 | 对调 `left_arm_config.port` 与 `right_arm_config.port` |
| 训练时找不到数据集 | 本地数据集没指定 `root` | 训练时加 `--dataset.root=./datasets/xxx` |
| 数据集被自动上传 | 没设 `push_to_hub=false` | 录制时加 `--dataset.push_to_hub=false` |
| 退出时报 `You must add one or several frames before calling add_episode` | 在重置阶段退出，当前条无帧 | 已录数据不受影响；用 `--resume=true` 继续；新代码自动跳过空条 |

</div>
