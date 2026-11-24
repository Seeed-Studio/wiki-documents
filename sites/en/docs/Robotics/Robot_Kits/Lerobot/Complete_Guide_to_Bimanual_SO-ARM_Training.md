---
description: "How to train a bimanual (dual-arm) SO-ARM policy with LeRobot: calibrate four arms, teleoperate, record datasets, train ACT and deploy on the real robots."
title: SO-Arm Bimanual-Teleoperation
keywords:
  - LeRobot
  - SO-ARM
  - Double Arm
  - Robotics
  - Training
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp
slug: /lerobot_double_arm_so_arm_training
sku: 114993666,114993667
last_update:
  date: 6/29/2026
  author: ZhuYuan
translation:
  skip: [zh-CN]
url: https://wiki.seeedstudio.com/lerobot_double_arm_so_arm_training/
createdAt: '2026-07-01'
updatedAt: '2026-09-16'
---

import '/src/css/rebot-wiki-style.css';
import '/src/css/soarm101-pinocchio-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Complete Guide to Bimanual SO-ARM Training

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp" width={800} height={456} style={{height: 'auto'}} alt="Bimanual SO-ARM robotic arm kit" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-ARM101-Bimanual-Robot-Arm-Kit.html" target="_blank" rel="noopener noreferrer">
    <span>Get the SO-ARM101 Kit</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

## Introduction

This guide walks through the complete pipeline for training a bimanual SO-ARM robotic system with LeRobot. It covers hardware setup, arm calibration, bimanual teleoperation, dataset recording and management, ACT policy training, and real-robot deployment. By following these steps, you can collect demonstration data with two leader arms and two follower arms, train an imitation-learning policy, and deploy it on the real robot.

### Recommended learning path

<div className="rebot-page rebot-step-flow soarm-learning-path">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4><a href="#0-prerequisites">Prepare the environment</a></h4>
<p>Install LeRobot and identify the four serial ports.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4><a href="#1-calibration-key-step">Calibrate the arms</a></h4>
<p>Calibrate the left and right leader and follower arms.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4><a href="#2-bimanual-teleoperation">Teleoperate both arms</a></h4>
<p>Verify control, then add cameras as needed.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4><a href="#3-record-dataset">Record a dataset</a></h4>
<p>Record demonstrations, then resume or replay them as needed.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4><a href="#4-act-training">Train an ACT policy</a></h4>
<p>Choose a local or Hub dataset as input.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4><a href="#5-real-robot-deployment">Evaluate on the robot</a></h4>
<p>Load a checkpoint and save evaluation data.</p>
</div>
</section>

</div>

### SO-ARM bimanual collaboration demo

<div className="video-container">
  <iframe src="https://www.youtube.com/embed/Y_P0BmlM7VI" title="SO-ARM bimanual collaboration demo" width="900" height="500" loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

## 0. Prerequisites

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Install dependencies {#01-install-dependencies}

<p className="rebot-step-label">Step 1</p>

Set up LeRobot using the [SO-ARM Quick Start](/lerobot_so100m_new/#install-lerobot).

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Connect the arms and check USB permissions {#02-usb-permissions}

<p className="rebot-step-label">Step 2</p>

Confirm the ports assigned to your four arms. Later commands use the example ports below. Substitute your actual ports and keep the left and right assignments consistent.

| Role | Example serial port | LeRobot type |
| --- | --- | --- |
| Left follower arm | `/dev/ttyACM0` | `so101_follower` |
| Right follower arm | `/dev/ttyACM1` | `so101_follower` |
| Left leader arm | `/dev/ttyACM2` | `so101_leader` |
| Right leader arm | `/dev/ttyACM3` | `so101_leader` |

`so100_leader` and `so101_leader` share the same implementation.

```bash
sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3
```

</div>
</section>

</div>

## 1. Calibration (Key Step)

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Calibrate the Left Follower Arm {#11-calibrate-the-left-follower-arm}

<p className="rebot-step-label">Step 1</p>

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_bimanual_follower_left
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Calibrate the Right Follower Arm {#12-calibrate-the-right-follower-arm}

<p className="rebot-step-label">Step 2</p>

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_right
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### Calibrate the Left Leader Arm {#13-calibrate-the-left-leader-arm}

<p className="rebot-step-label">Step 3</p>

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM2 \
  --teleop.id=my_awesome_bimanual_leader_left
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">

### Calibrate the Right Leader Arm {#14-calibrate-the-right-leader-arm}

<p className="rebot-step-label">Step 4</p>

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_right
```

</div>
</section>

</div>

Check the saved path printed by LeRobot. These are the current Seeed LeRobot default folders. Each filename is the corresponding `<id>.json`.

| Arm | Calibration folder |
| --- | --- |
| Follower | `~/.cache/huggingface/lerobot/calibration/robots/so_follower/` |
| Leader | `~/.cache/huggingface/lerobot/calibration/teleoperators/so_leader/` |

<div className="rebot-page soarm-guide">

<details className="rebot-demo-details" id="optional-if-you-have-previously-calibrated-with-other-ids">
<summary>Optional: reuse calibration files for the same arms</summary>

Reuse files only for the same physical arm. The example uses older IDs. Check the folder and filenames in the LeRobot logs.

```bash
CAL_DIR=~/.cache/huggingface/lerobot/calibration

cp $CAL_DIR/robots/so_follower/my_awesome_follower_arm1.json \
   $CAL_DIR/robots/so_follower/my_awesome_bimanual_follower_left.json

cp $CAL_DIR/robots/so_follower/my_awesome_follower_arm2.json \
   $CAL_DIR/robots/so_follower/my_awesome_bimanual_follower_right.json

cp $CAL_DIR/teleoperators/so_leader/my_awesome_leader_arm3.json \
   $CAL_DIR/teleoperators/so_leader/my_awesome_bimanual_leader_left.json

cp $CAL_DIR/teleoperators/so_leader/my_awesome_leader_arm4.json \
   $CAL_DIR/teleoperators/so_leader/my_awesome_bimanual_leader_right.json
```

</details>

</div>

## 2. Bimanual Teleoperation

<span id="safety-tips" aria-hidden="true" />

:::caution Safety tips
Before teleoperation, secure the arms, clear their workspace, and check that each leader controls its matching follower.
:::

<span id="21-without-camera" aria-hidden="true" />
<span id="22-with-camera" aria-hidden="true" />

<Tabs defaultValue="no-camera">
<TabItem value="no-camera" label="Without cameras">

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

</TabItem>
<TabItem value="with-camera" label="With cameras">

Run `lerobot-find-cameras opencv` to find the camera indices, and substitute the values for your setup.

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

</TabItem>
</Tabs>

## 3. Record Dataset

Here, an episode is one complete recording of a robot action.

Run `lerobot-find-cameras opencv` to find the camera indices, and substitute the values for your setup.

<span id="31-save-locally-do-not-upload-to-hub" aria-hidden="true" />
<span id="32-upload-to-hugging-face-hub" aria-hidden="true" />

<Tabs defaultValue="local">
<TabItem value="local" label="Save locally">

This example disables upload and uses the default cache directory. To use a custom path, add `--dataset.root`. The `repo_id` format is `namespace/dataset`.

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
  --dataset.rgb_encoder.vcodec=libsvtav1 \
  --display_data=true
```

The default path is `~/.cache/huggingface/lerobot/seeed/bimanual_so101_task/`.

```text
├── meta/
│   ├── info.json
│   ├── episodes/
│   ├── stats/
│   └── tasks/
├── data/
└── videos/
```

</TabItem>
<TabItem value="hub" label="Upload to Hugging Face Hub">

Set `HF_USER` to your Hugging Face username and verify that you have write access to the target repository. This example enables upload explicitly.

```bash
export HF_USER=your_hf_username

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
  --dataset.repo_id=${HF_USER}/bimanual_so101_task \
  --dataset.push_to_hub=true \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=50 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.rgb_encoder.vcodec=libsvtav1 \
  --display_data=true
```

</TabItem>
</Tabs>

| Option | Meaning |
| --- | --- |
| `--dataset.num_episodes` | Number of episodes to record in this run. |
| `--dataset.episode_time_s` | Duration of each recording, in seconds. |
| `--dataset.reset_time_s` | Time to reset between recordings, in seconds. |
| `--dataset.fps` | Recording frame rate. |
| `--dataset.single_task` | Text description of the task being demonstrated. |

### 3.3 Continue Recording (Resume)

Use `--resume=true` to append to the same dataset. Keep the dataset ID, storage path, and device configuration consistent. If you already recorded 15 episodes and need 50 in total, set `--dataset.num_episodes` to 35. Stop after an episode completes when possible to avoid a recording with no frames during reset.

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
  --dataset.rgb_encoder.vcodec=libsvtav1 \
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

Episode indices start at 0, so `24` refers to the 25th recording.

#### Delete a Specific Episode

:::caution
The example below rewrites the dataset in place and backs up the previous data in a directory ending in `_old`. To keep the original dataset, use [Save as a new dataset](/lerobot_dataset_tool/#delete-episodes).
:::

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

#### Clean up the old backup {#delete-the-entire-dataset}

Once the new dataset is verified and the backup is no longer needed, confirm the path ends in `_old` before removing it.

```bash
rm -rf ~/.cache/huggingface/lerobot/seeed/bimanual_so101_task_old
```

## 4. ACT Training

<span id="41-train-from-local-dataset" aria-hidden="true" />
<span id="42-train-from-hugging-face-hub" aria-hidden="true" />

<Tabs defaultValue="local">
<TabItem value="local" label="Train from local data">

If you recorded to a custom directory, set `--dataset.root` for training too.

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

</TabItem>
<TabItem value="hub" label="Train from Hub data">

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

</TabItem>
</Tabs>

| Option | Meaning |
| --- | --- |
| `--dataset.repo_id` | ID of the training dataset. |
| `--policy.type=act` | Selects the ACT policy. |
| `--policy.device=cuda` | Trains on a CUDA GPU. |
| `--steps` | Number of training steps. The commands show example values. |
| `--output_dir` | Directory for training output. |

The examples use ACT defaults, including `chunk_size=100` and `dim_model=512`.

## 5. Real-Robot Deployment

:::caution
Verify the policy checkpoint, serial ports, and cameras, then clear the arms’ workspace before starting evaluation.
:::

<span id="51-save-evaluation-data-locally" aria-hidden="true" />
<span id="52-upload-to-hugging-face-hub" aria-hidden="true" />

<Tabs defaultValue="local">
<TabItem value="local" label="Save evaluation data locally">

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
  --dataset.repo_id=seeed_eval/eval_bimanual_so101_task8 \
  --dataset.root=seeed_eval/eval_bimanual_so101_task8 \
  --dataset.push_to_hub=false \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

</TabItem>
<TabItem value="hub" label="Upload evaluation data to Hub">

Set `HF_USER` to your Hugging Face username and verify that you have write access to the target repository. This example enables upload explicitly.

```bash
export HF_USER=your_hf_username

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
  --dataset.repo_id=${HF_USER}/eval_bimanual_so101_task \
  --dataset.push_to_hub=true \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

</TabItem>
</Tabs>

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
