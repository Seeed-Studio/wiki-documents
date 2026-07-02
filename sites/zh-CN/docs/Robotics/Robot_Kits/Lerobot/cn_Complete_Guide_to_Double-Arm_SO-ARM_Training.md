---
description: 双臂 SO-ARM 训练完整指南。
title: 双臂 SO-ARM 训练完整指南
keywords:
  - Lerobot
  - SO-ARM
  - Double Arm
  - Robotics
  - Training
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp
slug: /lerobot_double_arm_so_arm_training
sku: 114993666,114993667
last_update:
  date: 7/1/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/cn/lerobot_double_arm_so_arm_training/
---

import Link from '@docusaurus/Link';

# 双臂 SO-ARM训练完整指南

## 简介

本指南介绍如何使用 LeRobot 训练双臂 SO-ARM 机器人系统的完整流程，包括硬件连接、双臂标定、双臂遥操作、数据集录制与管理、ACT 策略训练以及真实机器人部署。按照本指南操作，你可以使用两个主臂和两个从臂采集示教数据，训练模仿学习策略，并在真实机械臂上运行。

首先，按如下进行插线


| 角色   | 端口           |
| ------ | -------------- |
| 左从臂 | `/dev/ttyACM0` |
| 右从臂 | `/dev/ttyACM1` |
| 左主臂 | `/dev/ttyACM2` |
| 右主臂 | `/dev/ttyACM3` |

从臂类型为 `so101_follower`，主臂类型为 `so101_leader`（LeRobot 中 `so100_leader` 和 `so101_leader` 共用同一实现）。

---

## 0. 前置准备

### 0.1 安装依赖

环境安装请参考 SO-ARM 教程：

<div style={{textAlign: 'center'}}>
    <Link to="/cn/lerobot_so100m_new/#安装-lerobot" style={{display: 'inline-block', width: 'auto', height: '40px', lineHeight: '40px', padding: '0 24px', whiteSpace: 'nowrap', backgroundColor: '#1eff00', color: '#ffffff', textDecoration: 'none', borderRadius: '28px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center'}}>
        ▶ 跳转至环境安装
    </Link>
</div>

### 0.2 USB 权限

```bash
sudo chmod 666 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3 /dev/ttyACM4
```

## 1. 标定（关键步骤）

### 1.1 标定左从臂

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_left
```

### 1.2 标定右从臂

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM2 \
  --robot.id=my_awesome_bimanual_follower_right
```

### 1.3 标定左主臂

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_left
```

### 1.4 标定右主臂

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM4 \
  --teleop.id=my_awesome_bimanual_leader_right
```

标定完成后，文件会保存在：

```text
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_right.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_right.json
```

### （可选）如果之前已用其他 ID 标定过

比如你之前用的是 `my_awesome_follower_arm1`、`my_awesome_follower_arm2` 等，可以复制校准文件：

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

---

## 2. 双臂遥操作

### 2.1 不带摄像头

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

### 2.2 带摄像头

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

可用 `lerobot-find-cameras opencv` 查看摄像头索引。

### 安全提示

- 注意周围环境，避免从臂碰撞。

## 3. 录制数据集

### 3.1 保存到本地（不上传 Hub）

添加 `--dataset.root` 和 `--dataset.push_to_hub=false`。

> 注意：`repo_id` 必须包含 `/`，本地数据集可以用 `local/` 作为前缀占位，不会真的上传。

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

数据会保存在 `~///bimanual_so101_task/`，结构为：

```text
./datasets/bimanual_so101_task/
├── meta/
│   ├── info.json
│   ├── episodes/
│   ├── stats/
│   └── tasks/
├── data/
└── videos/
```

### 3.2 上传到 Hugging Face Hub

如果你希望自动上传，保留 `HF_USER` 并去掉 `root` 和 `push_to_hub=false`：

```bash
export HF_USER=your_hf_username

lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM1 \
  --robot.right_arm_config.port=/dev/ttyACM2 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 1, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM3 \
  --teleop.right_arm_config.port=/dev/ttyACM4 \
  --teleop.id=my_awesome_bimanual_leader \
  --dataset.repo_id=${HF_USER}/bimanual_so101_task \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=50 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.vcodec=libsvtav1 \
  --display_data=true
```

### 3.3 继续采集（断点续录）

如果录制过程中意外退出（例如按右键退出时处于 reset 阶段），或者想分多次完成采集，可以使用 `--resume` 继续往同一个数据集追加 episode。

**注意**：

- 必须加 `--resume=true`，否则 `LeRobotDataset.create()` 会因为目录已存在而报错。
- `--dataset.num_episodes` 是指**本次要录多少条**，不是总目标。例如已录 15 条，想凑够 50 条，就写 `35`。
- 退出时尽量在 episode 录制过程中或自然结束后再退出，避免在 "Reset the environment" 阶段退出（会导致空 episode 保存失败）。

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

### 3.4 回放与删除 episode

#### 回放指定 episode

```bash
lerobot-replay \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.episode=24
```

> `episode` 是 0-based 索引，`24` 表示第 25 条 episode。

#### 删除指定 episode

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

删除后会原地重写数据集，原数据会备份到 `./datasets/bimanual_so101_task_old/`。确认新数据集无误后，可以手动删除备份：

```bash
rm -rf ./datasets/bimanual_so101_task_old
```

> 注：若你使用的是修复前的 LeRobot 版本，`--root` 指向本地数据集根目录时可能会因路径解析错误而失败。当前项目中的 `lerobot_edit_dataset.py` 已针对该场景修复。

#### 删除整条数据集

```bash
rm -rf ./datasets/bimanual_so101_task
```

---

## 4. ACT 训练

### 4.1 从本地数据集训练

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

### 4.2 从 Hugging Face Hub 训练

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

> 上面使用了 ACT 的默认参数（`chunk_size=100`、`dim_model=512` 等）。如果数据集较小（例如少于 50 条 episode），可以显式改小模型来降低过拟合风险，例如 `--policy.chunk_size=50 --policy.dim_model=256 --batch_size=16 --steps=30000`。

---

## 5. 真实机器人部署

### 5.1 本地保存评估数据

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
  --dataset.repo_id=local/eval_bimanual_so101_task8 \
  --dataset.root=./datasets/eval_bimanual_so101_task8 \
  --dataset.push_to_hub=false \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

### 5.2 上传到 Hugging Face Hub

```bash
export HF_USER=your_hf_username

lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM1 \
  --robot.right_arm_config.port=/dev/ttyACM2 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 1, "width": 640, "height": 480, "fps": 30}
  }' \
  --dataset.repo_id=${HF_USER}/eval_bimanual_so101_task \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

---

## 6. 常见问题


| 问题                                                                    | 原因                                                      | 解决方案                                                                                    |
| ----------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 遥操时提示重新标定                                                      | `bi_so_follower` 找不到 `_left` / `_right` 后缀的校准文件 | 用带`_left` / `_right` 的 ID 重新标定，或复制已有校准文件                                   |
| 主臂无法拖动                                                            | leader 扭矩未关闭                                         | 重新标定或检查电机                                                                          |
| 继续采集时报目录已存在                                                  | 未加`--resume=true`                                       | 在`lerobot-record` 命令中添加 `--resume=true`                                               |
| 左右臂反了                                                              | 端口配置错误                                              | 交换`left_arm_config.port` 和 `right_arm_config.port`                                       |
| 训练时找不到数据集                                                      | 本地数据集未指定`root`                                    | 训练时添加`--dataset.root=./datasets/xxx`                                                   |
| 数据集被自动上传                                                        | 未设置`push_to_hub=false`                                 | 录制时添加`--dataset.push_to_hub=false`                                                     |
| 退出时报`You must add one or several frames before calling add_episode` | 在 reset 阶段退出，当前 episode 没有帧                    | 不影响已录数据，用`--resume=true` 继续采集；当前代码已修复该场景，空 episode 会自动跳过保存 |
|                                                                         |                                                           |                                                                                             |
