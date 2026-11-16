---
description: "Chapter 9 of the SO-ARM101 Sim-to-Real VLA Course — collect data from the real environment: test cameras, run lerobot-record on the SO-101 pair, and verify the LeRobot v3 dataset."
title: Chapter 9 - Collect Data from the Real Environment
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Data Collection
  - lerobot-record
  - LeRobot Dataset
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_9
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_9/
---

import '/src/css/rebot-wiki-style.css';

<div class="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 9 · Get Your Own VLA Model</span>
    <h2>9. Collect Data from the Real Environment</h2>
    <p>
      Test the cameras, record synchronized two-camera episodes of the task
      with `lerobot-record`, and verify the LeRobot v3 dataset before any
      training happens.
    </p>
    <div className="hero-actions">
      <a href="#cameras">Cameras</a>
      <a href="#record">Record</a>
      <a href="#controls">Controls</a>
      <a href="#storage">Storage</a>
      <a href="#verify">Verify</a>
    </div>
  </div>
</section>

## 9.1 Test the Cameras

<section id="cameras" class="section-card">
  <div className="section-title">
    <span>Before recording</span>
    <h2>9.1 Test the Cameras</h2>
  </div>

Chapter 8 mounted and previewed both cameras; repeat the check now —
`/dev/video*` indices change after reconnecting a camera or rebooting:

```bash
lerobot-find-cameras opencv
```

Map the previews to indices (the file name contains the device index),
then re-export:

```bash
export CAMERA_GRIPPER=4
export CAMERA_EXTERNAL=6
```

Also confirm the arm exports from Chapter 7 are set in this terminal:

```bash
echo "$TELEOP_PORT $TELEOP_ID $ROBOT_PORT $ROBOT_ID"
```

</section>

## 9.2 Record Episodes

<section id="record" class="section-card">
  <div className="section-title">
    <span>lerobot-record</span>
    <h2>9.2 Record Episodes</h2>
  </div>

With both arms calibrated and the studio ready, run:

```bash
export HF_USER=local   # or your Hugging Face username

lerobot-record \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --robot.cameras="{
    front: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    external: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }" \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID \
  --dataset.repo_id=so101_vials_real \
  --dataset.root=$HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --dataset.single_task="Put the three vials into the vial rack" \
  --dataset.num_episodes=10 \
  --dataset.push_to_hub=false \
  --display_data=false \
  --play_sounds=false
```

Follow the terminal prompts to complete each episode: pick up a vial with
the leader, place it in the rack, release, and let the scene settle.

Key flags:

| Flag | Why this value |
| --- | --- |
| `--robot.cameras` keys `front` and `external` | Matches the simulated dataset's feature names exactly (Chapter 12 co-training) |
| `--dataset.single_task` | Must be this exact sentence everywhere — training prompts and episode labels depend on it |
| `--dataset.num_episodes` | Start with 10; 5 is NVIDIA's workshop minimum, 50 is a solid policy |
| `--dataset.push_to_hub=false` | Keep everything local; upload only if you want a backup |
| `--display_data=false` | Avoids rendering every frame on the recording machine |

:::caution Start with slow, complete demonstrations
A real episode that aborts halfway teaches the policy to stop halfway.
Finish the placement, then press the right arrow. Five clean trajectories
beat twenty interrupted ones.
:::

</section>

## 9.3 Recording Controls and Safety

<section id="controls" class="section-card">
  <div className="section-title">
    <span>Keyboard</span>
    <h2>9.3 Recording Controls and Safety</h2>
  </div>

| Key | Action |
| --- | --- |
| Right arrow | Finish the current episode early and move on |
| Left arrow | Discard the current episode and re-record it |
| `Esc` | Stop the session, encode videos, and finish the dataset |

If the follower moves unexpectedly:

1. Press `Ctrl+C` first;
2. Cut the follower's 12 V power if it keeps moving;
3. Return the arm to its middle pose by hand;
4. Re-check the calibration and the leader ID before restarting.

:::note Keyboard does not respond
On some Ubuntu installations `pynput` needs to be pinned. Inside the
LeRobot environment:

```bash
pip install pynput==1.6.8
```
:::

</section>

## 9.4 Data Storage, Checkpointing and Resuming

<section id="storage" class="section-card">
  <div className="section-title">
    <span>Where data lives</span>
    <h2>9.4 Data Storage, Checkpointing and Resuming</h2>
  </div>

- Data is stored using the `LeRobotDataset` format and is written to disk
  during recording, at the path given by `--dataset.root`;
- With `--dataset.push_to_hub=false`, nothing is uploaded;
- Checkpoints are created automatically during recording. To resume after
  an interruption, re-run the same command with `--resume=true`;
- To start recording from scratch, delete the dataset directory.

:::caution Resuming
When resuming, set `--dataset.num_episodes` to the number of **additional**
episodes to record, not the targeted total.

If the arm freezes mid-session, increase the episode time with
`--dataset.episode_time_s=90` (default 60) and record again.
:::

</section>

## 9.5 Verify the Dataset

<section id="verify" class="section-card">
  <div className="section-title">
    <span>Inspect before training</span>
    <h2>9.5 Verify the Dataset</h2>
  </div>

Check the metadata:

```bash
python3 -c "
import json
info = json.load(open('$HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real/meta/info.json'))
print('fps:', info['fps'], 'episodes:', info['total_episodes'], 'frames:', info['total_frames'])
print({k: v['shape'] for k, v in info['features'].items()})
"
```

Expected:

```text
fps: 30 episodes: 10 frames: ...
{'observation.state': [6], 'observation.images.front': [480, 640, 3],
 'observation.images.external': [480, 640, 3], 'action': [6], ...}
```

Two camera streams and six joint dimensions are the contract with the rest
of the pipeline. If a shape differs, delete the dataset directory and
re-record with the same flags.

Count the videos:

```bash
find $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real/videos -name "*.mp4" | wc -l
```

Ten episodes × two cameras = 20 files. A quick visual check:

```bash
lerobot-dataset-viz \
  --repo-id so101_vials_real \
  --root $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --episode-index 0 \
  --display-compressed-images true
```

</section>

## 9.6 Data Quality Checklist

<section id="quality" class="section-card">
  <div className="section-title">
    <span>Watch for these</span>
    <h2>9.6 Data Quality Checklist</h2>
  </div>

Before moving to training, review a few episodes end to end:

- Every episode **completes the task** — vial released into the rack;
- Movements are smooth; no long pauses, no violent corrections;
- The vials start at varied positions across episodes, not the same spot
  every time;
- The wrist view shows the jaws and the grasped vial; the external view
  shows the rack;
- No dropped frames (glitchy video) and no autofocus hunting;
- The task string is identical in every episode.

A dataset that fails any of these points produces a policy that fails in an
annoyingly specific way during deployment. Fix the data now; training will
not fix it for you.

Next: [Chapter 10 — Train the GR00T N1.7 Policy](Sim2Real_VLA_10.md).

</section>

</div>