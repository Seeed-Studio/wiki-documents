---
description: Complete guide to double-arm SO-ARM training with LeRobot.
title: Complete Guide to Double-Arm SO-ARM Training
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
translation:
  skip:
    - zh-CN
url: https://wiki.seeedstudio.com/lerobot_double_arm_so_arm_training/
createdAt: '2026-07-01'
updatedAt: '2026-07-01'
---

import Link from '@docusaurus/Link';

# Complete Guide to Double-Arm SO-ARM Training

## Introduction

This guide walks through the complete pipeline for training a dual-arm SO-ARM robotic system with LeRobot. It covers hardware setup, arm calibration, dual-arm teleoperation, dataset recording and management, ACT policy training, and real-robot deployment. By following these steps, you can collect demonstration data with two leader arms and two follower arms, train an imitation-learning policy, and deploy it on the real robot.

First, connect the wires as follows.


| Role               | Port           |
| ------------------ | -------------- |
| Left follower arm  | `/dev/ttyACM0` |
| Right follower arm | `/dev/ttyACM1` |
| Left leader arm    | `/dev/ttyACM2` |
| Right leader arm   | `/dev/ttyACM3` |

The follower arm type is `so101_follower`, and the leader arm type is `so101_leader` (in LeRobot, `so100_leader` and `so101_leader` share the same implementation).

---

## 0. Prerequisites

### 0.1 Install Dependencies

For environment setup, please refer to the SO-ARM tutorial:

<div style={{textAlign: 'center'}}>
    <Link to="/lerobot_so100m_new/#install-lerobot" style={{display: 'inline-block', width: 'auto', height: '40px', lineHeight: '40px', padding: '0 24px', whiteSpace: 'nowrap', backgroundColor: '#1eff00', color: '#ffffff', textDecoration: 'none', borderRadius: '28px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center'}}>
        ▶ Jump to Environment Setup
    </Link>
</div>

### 0.2 USB Permissions

```bash
sudo chmod 666 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3 /dev/ttyACM4
```

## 1. Calibration (Key Step)

### 1.1 Calibrate the Left Follower Arm

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_left
```

### 1.2 Calibrate the Right Follower Arm

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM2 \
  --robot.id=my_awesome_bimanual_follower_right
```

### 1.3 Calibrate the Left Leader Arm

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_left
```

### 1.4 Calibrate the Right Leader Arm

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM4 \
  --teleop.id=my_awesome_bimanual_leader_right
```

After calibration, the files will be saved at:

```text
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_right.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_right.json
```

### (Optional) If You Have Previously Calibrated with Other IDs

For example, if you previously used `my_awesome_follower_arm1`, `my_awesome_follower_arm2`, etc., you can copy the calibration files:

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

## 2. Dual-Arm Teleoperation

### 2.1 Without Camera

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

### 2.2 With Camera

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

You can use `lerobot-find-cameras opencv` to view camera indexes.

### Safety Tips

- Be aware of the surroundings to avoid collisions of the follower arms.

## 3. Record Dataset

### 3.1 Save Locally (Do Not Upload to Hub)

Add `--dataset.root` and `--dataset.push_to_hub=false`.

> Note: `repo_id` must contain `/`. For local datasets, you can use `local/` as a placeholder prefix; it will not actually upload.

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

Data will be saved to `~///bimanual_so101_task/`, structured as follows:

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

### 3.2 Upload to Hugging Face Hub

If you want to upload automatically, keep `HF_USER` and remove `root` and `push_to_hub=false`:

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

### 3.3 Continue Recording (Resume)

If the recording exits unexpectedly (for example, pressing the right button to exit during the reset phase), or if you want to complete the collection in multiple sessions, you can use `--resume` to continue appending episodes to the same dataset.

**Notes**:

- You must add `--resume=true`; otherwise `LeRobotDataset.create()` will report an error because the directory already exists.
- `--dataset.num_episodes` refers to **how many episodes to record this time**, not the total target. For example, if 15 episodes have already been recorded and you want to reach 50, set it to `35`.
- Try to exit during an episode recording or after a natural end; avoid exiting during the "Reset the environment" phase (which may cause empty episode save failures).

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

### 3.4 Replay and Delete Episodes

#### Replay a Specific Episode

```bash
lerobot-replay \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.episode=24
```

> `episode` is a 0-based index, so `24` means the 25th episode.

#### Delete a Specific Episode

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

After deletion, the dataset will be rewritten in place, and the original data will be backed up to `./datasets/bimanual_so101_task_old/`. After confirming the new dataset is correct, you can manually delete the backup:

```bash
rm -rf ./datasets/bimanual_so101_task_old
```

> Note: If you are using an older version of LeRobot before the fix, pointing `--root` to the local dataset root directory may fail due to path parsing errors. The `lerobot_edit_dataset.py` in the current project has been fixed for this scenario.

#### Delete the Entire Dataset

```bash
rm -rf ./datasets/bimanual_so101_task
```

---

## 4. ACT Training

### 4.1 Train from Local Dataset

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

### 4.2 Train from Hugging Face Hub

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

> The above uses ACT's default parameters (`chunk_size=100`, `dim_model=512`, etc.). If the dataset is small (for example, fewer than 50 episodes), you can explicitly reduce the model size to lower the risk of overfitting, e.g. `--policy.chunk_size=50 --policy.dim_model=256 --batch_size=16 --steps=30000`.

---

## 5. Real-Robot Deployment

### 5.1 Save Evaluation Data Locally

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

### 5.2 Upload to Hugging Face Hub

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

## 6. FAQ


| Problem                                                                   | Cause                                                                         | Solution                                                                                                                                                                 |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Teleoperation prompts to recalibrate                                      | `bi_so_follower` cannot find calibration files with `_left` / `_right` suffix | Recalibrate with IDs containing`_left` / `_right`, or copy existing calibration files                                                                                    |
| Leader arm cannot be moved by hand                                        | Leader torque is not disabled                                                 | Recalibrate or check the motors                                                                                                                                          |
| "Directory already exists" when continuing recording                      | `--resume=true` was not added                                                 | Add`--resume=true` to the `lerobot-record` command                                                                                                                       |
| Left and right arms are swapped                                           | Port configuration error                                                      | Swap`left_arm_config.port` and `right_arm_config.port`                                                                                                                   |
| Dataset not found during training                                         | `root` was not specified for the local dataset                                | Add`--dataset.root=./datasets/xxx` during training                                                                                                                       |
| Dataset is uploaded automatically                                         | `push_to_hub=false` was not set                                               | Add`--dataset.push_to_hub=false` during recording                                                                                                                        |
| Exits with`You must add one or several frames before calling add_episode` | Exited during the reset phase, the current episode has no frames              | Does not affect already recorded data; continue recording with`--resume=true`; the current code has fixed this scenario and empty episodes will be automatically skipped |
|                                                                           |                                                                               |                                                                                                                                                                          |
