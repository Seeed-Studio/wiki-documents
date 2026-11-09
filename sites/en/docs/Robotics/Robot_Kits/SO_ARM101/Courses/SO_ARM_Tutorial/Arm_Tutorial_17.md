---
description: 'Chapter 17 of the SO-ARM Physical AI Beginner''s Course (elective) — scale from one arm to two: wire four arms, calibrate left and right leader/follower pairs, teleoperate and record with bi_so_follower / bi_so_leader, train ACT, and deploy bimanual policies.'
title: Chapter 17 - Double-Arm SO-ARM Training
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Double Arm
  - Bimanual
  - Training
  - LeRobot
  - Course
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
url: https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_17/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 17 · Elective</span>
    <h2>17. Double-Arm SO-ARM Training</h2>
    <p>
      Chapter 17 of the SO-ARM Physical AI Beginner's Course (elective) — scale from one arm to
      two: wire four arms, calibrate left and right leader/follower pairs, teleoperate and record
      with bi_so_follower / bi_so_leader, train ACT, and deploy bimanual policies.
    </p>
    <div className="hero-actions">
      <a href="#wiring">Wiring</a>
      <a href="#calibration">Calibration</a>
      <a href="#training">Train</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>What you will need</strong>
    <span>Two SO-ARM kits (4 arms: 2 leaders + 2 followers).</span>
    <span>The same software environment as Chapters 5-16.</span>
    <span>A task that needs two hands — e.g. hand an object from left arm to right arm.</span>
  </div>
</section>

## 17.1 Why Double Arms

<section id="why" className="section-card">
  <div className="section-title">
    <span>Motivation</span>
    <h2>17.1 Why Double Arms</h2>
  </div>

Many real manipulation tasks are genuinely two-handed: pick-and-handover, box folding, assembling two parts. Bimanual imitation learning is also exactly the setup ACT was born on (ALOHA), and the SO-ARM ecosystem supports it natively — LeRobot ships `bi_so_follower` and `bi_so_leader` types that treat two arms as one robot with 12 action dimensions (6 per arm).

Everything you learned in Chapters 8-16 transfers; only the hardware doubles and every command carries `left_arm_config` / `right_arm_config`.

</section>

## 17.2 Wiring and Ports

<section id="wiring" className="section-card">
  <div className="section-title">
    <span>Wiring</span>
    <h2>17.2 Wiring and Ports</h2>
  </div>

Connect the four control boards and note the port of each:

| Role | Port |
| :--- | :--- |
| Left follower arm | `/dev/ttyACM0` |
| Right follower arm | `/dev/ttyACM1` |
| Left leader arm | `/dev/ttyACM2` |
| Right leader arm | `/dev/ttyACM3` |

The follower arm type is `so101_follower` and the leader arm type is `so101_leader` for calibration (in LeRobot, `so100_leader` and `so101_leader` share the same implementation).

Grant permissions to all four ports:

```bash
sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3
```

</section>

## 17.3 Calibration (Key Step)

<section id="calibration" className="section-card">
  <div className="section-title">
    <span>Calibration</span>
    <h2>17.3 Calibration (Key Step)</h2>
  </div>

Calibrate each arm individually with the Chapter 10 procedure, using **ids that carry `_left` / `_right` suffixes** — the bimanual types look for calibration files with exactly these suffixes.

**Left follower:**

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_bimanual_follower_left
```

**Right follower:**

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_right
```

**Left leader:**

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM2 \
  --teleop.id=my_awesome_bimanual_leader_left
```

**Right leader:**

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_right
```

After calibration, the files are saved at:

```text
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_right.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_right.json
```

:::tip
**Already calibrated with other ids?** Copy the calibration files instead of redoing the physical procedure:

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

</section>

## 17.4 Dual-Arm Teleoperation

<section id="teleop" className="section-card">
  <div className="section-title">
    <span>Teleop</span>
    <h2>17.4 Dual-Arm Teleoperation</h2>
  </div>

**Without cameras:**

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

**With wrist cameras** (find indexes with `lerobot-find-cameras opencv`, add or remove cameras as needed):

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
Two follower arms share one workspace now. Be aware of the surroundings to avoid collisions between them — and between grippers during handover tasks.
:::

</section>

## 17.5 Record a Bimanual Dataset

<section id="record" className="section-card">
  <div className="section-title">
    <span>Record</span>
    <h2>17.5 Record a Bimanual Dataset</h2>
  </div>

Save locally (add `--dataset.push_to_hub=false`; `repo_id` must contain `/`, so `seeed/` works as a placeholder prefix):

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

Data lands in `~/.cache/huggingface/lerobot/seeed/bimanual_so101_task/` with the same structure as Chapter 13. To upload to the Hub instead, keep `HF_USER`, drop `push_to_hub=false`, and set `--dataset.repo_id=${HF_USER}/bimanual_so101_task`.

### Continuing a Recording (Resume)

If recording exits unexpectedly, or you collect across sessions, use `--resume`:

- Always add `--resume=true`; otherwise `LeRobotDataset.create()` fails because the directory exists.
- `--dataset.num_episodes` counts **this session's** episodes (15 recorded of 50 → set 35).
- Try to exit during an episode or after a natural end; avoid exiting during the "Reset the environment" phase (it can save an empty episode — recent code skips those automatically).

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

### Replay and Delete Episodes

Replay a specific episode on the real arms (`episode` is 0-based — 24 means the 25th):

```bash
lerobot-replay \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.episode=24
```

Delete a bad episode (the Chapter 13 toolbox):

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

The original is backed up to `.../bimanual_so101_task_old/`; delete the backup manually after verifying.

</section>

## 17.6 ACT Training

<section id="training" className="section-card">
  <div className="section-title">
    <span>Train</span>
    <h2>17.6 ACT Training</h2>
  </div>

**From the local dataset:**

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

**From the Hugging Face Hub:**

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

The above uses ACT's default parameters (`chunk_size=100`, `dim_model=512`, etc.). The policy reads 12-dim states/actions (6 per arm) automatically from the dataset — no configuration needed.

</section>

## 17.7 Real-Robot Deployment

<section id="deploy" className="section-card">
  <div className="section-title">
    <span>Deploy</span>
    <h2>17.7 Real-Robot Deployment</h2>
  </div>

Evaluate with the Chapter 16 recipe, now with both arms — save evaluation data locally:

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

Or upload the evaluation to the Hub with `--dataset.repo_id=${HF_USER}/eval_bimanual_so101_task` and no `dataset.root`.

</section>

## 17.8 FAQ

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>17.8 FAQ</h2>
  </div>

| Problem | Cause | Solution |
| :--- | :--- | :--- |
| Teleoperation prompts recalibration | `bi_so_follower` can't find calibration files with `_left` / `_right` suffixes | Recalibrate with ids containing `_left` / `_right`, or copy existing calibration files (Section 17.3) |
| Leader arm cannot be moved by hand | Leader torque not disabled | Recalibrate or check the motors |
| "Directory already exists" when resuming recording | `--resume=true` missing | Add `--resume=true` to the `lerobot-record` command |
| Left and right arms swapped | Port configuration error | Swap `left_arm_config.port` and `right_arm_config.port` |
| Dataset not found during training | `root` not specified for local dataset | Add `--dataset.root=./datasets/xxx` during training |
| Dataset uploaded automatically | `push_to_hub=false` not set | Add `--dataset.push_to_hub=false` during recording |
| Exits with `You must add one or several frames before calling add_episode` | Exited during reset phase; the current episode has no frames | Already-recorded data is safe; continue with `--resume=true`; current code auto-skips empty episodes |

</section>

</div>
