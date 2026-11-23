---
description: Chapter 13 of the SO-ARM Physical AI Beginner's Course — what a LeRobot dataset looks like on disk, four quality standards, visualization and replay, and the lerobot-edit-dataset toolbox for deleting, splitting, merging, and converting datasets.
title: Chapter 13 - Dataset Structure and Quality Inspection
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - Dataset
  - Visualization
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_13
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_13/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 13 · Theory &amp; Practice</span>
    <h2>13. Dataset Structure and Quality Inspection</h2>
    <p>
      Chapter 13 of the SO-ARM Physical AI Beginner's Course — what a LeRobot dataset looks like
      on disk, four quality standards, visualization and replay, and the lerobot-edit-dataset
      toolbox for deleting, splitting, merging, and converting datasets.
    </p>
    <div className="hero-actions">
      <a href="#structure">Structure</a>
      <a href="#quality">Quality</a>
      <a href="#edit">Edit datasets</a>
    </div>
  </div>
</section>

## 13.1 Dataset Structure: What's Actually Stored on Disk

<section id="structure" className="section-card">
  <div className="section-title">
    <span>Structure</span>
    <h2>13.1 Dataset Structure: What's Actually Stored on Disk</h2>
  </div>

A local dataset recorded in Chapter 12 lives under `~/.cache/huggingface/lerobot/<repo_id>/`:

```text
├── meta/
│   ├── info.json          ← robot, fps, features, camera keys
│   ├── episodes/          ← per-episode metadata
│   ├── stats/             ← per-feature statistics (needed by training!)
│   └── tasks/             ← task descriptions
├── data/                  ← parquet frames: observation / state / action
└── videos/                ← encoded camera streams (if video=true)
```

Three facts worth internalizing:

- **Camera keys are part of the data contract.** `front` and `side` become `observation.images.front` / `observation.images.side`. Training and evaluation must use the same keys.
- **Stats are computed after recording finishes.** This is why you shouldn't kill a recording session midway.
- **The `single_task` string is stored in `meta/tasks`** — for Stage 4, language annotations build on exactly this field.

</section>

## 13.2 What Counts as "Good" Data: Four Quality Standards

<section id="quality" className="section-card">
  <div className="section-title">
    <span>Quality</span>
    <h2>13.2 What Counts as "Good" Data: Four Quality Standards</h2>
  </div>

1. **Completeness:** every episode runs the full "approach → grasp → transport → place → retract" flow; no truncated endings.
2. **Consistency:** same strategy, speed, and rhythm across episodes; cameras and scene untouched.
3. **Coverage:** target positions spread over the marked grid, not clustered in one corner.
4. **Cleanliness:** no failed grasps left in, no frames where the object leaves the camera view, no leader arm blocking the cameras.

</section>

## 13.3 Visualizing and Playing Back

<section id="playback" className="section-card">
  <div className="section-title">
    <span>Inspect</span>
    <h2>13.3 Visualizing and Playing Back</h2>
  </div>

### Visualize a Dataset

**Online** — if you recorded with `--dataset.push_to_hub=true`, paste your repo id into the [official dataset visualizer](https://huggingface.co/spaces/lerobot/visualize_dataset).

**Locally** — the same viewer works offline for local datasets:

```bash
lerobot-dataset-viz \
    --repo-id seeedstudio123/test \
    --mode local \
    --episode-index 0
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" alt="Dataset visualization" />
</div>

### Replay an Episode on the Real Arm

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety check before running</strong>
    <p>
      Replay moves the real follower arm through recorded actions. Clear the workspace and keep hands away before starting.
    </p>
  </div>
</div>

The `replay` function replays any recorded episode on the real arm — the best possible check of action consistency and robot-to-robot transferability:

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=seeedstudio123 \
    --dataset.root=~/.cache/huggingface/lerobot/seeedstudio123 \
    --dataset.episode=0
```

`dataset.root` is the physical path to the dataset; `repo_id` is the custom name defined during collection; `episode` is a 0-based index. Your arm should replicate the movements you recorded — if it deviates wildly, suspect calibration drift before suspecting the data.

### What to Do When Problems Are Found

- **Bad episode (drop, miss, blockage):** delete it — next section.
- **Systematic problem (every episode grasps from a different side):** a data-design problem — fix the protocol and re-record; deleting episodes won't help.
- **Stats look off (infinity/NaN in visualization):** usually a broken episode; delete and regenerate.

</section>

## 13.4 The Dataset Toolbox: lerobot-edit-dataset

<section id="edit" className="section-card">
  <div className="section-title">
    <span>Edit</span>
    <h2>13.4 The Dataset Toolbox: lerobot-edit-dataset</h2>
  </div>

All dataset surgery is done with `lerobot-edit-dataset` and the right `--operation.type`.

### Delete Episodes

Delete specific bad episodes (here 0, 2, and 5):

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

Or delete and save as a **new** dataset, preserving the original:

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --new_repo_id seeedstudio123/test_clean \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

:::tip
After in-place deletion the original data is backed up to a `_old` folder next to the dataset (e.g. `.../test_old/`). Once you've verified the new dataset, delete the backup yourself.
:::

### Split a Dataset

By fractions (e.g. 80% train / 10% test / 10% val) — creates `test_train`, `test_test`, `test_val`:

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type split \
    --operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'
```

Or by explicit episode indices:

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type split \
    --operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'
```

### Merge Datasets

Combine batches recorded across sessions (task descriptions must match exactly):

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test_merged \
    --operation.type merge \
    --operation.repo_ids "['seeedstudio123/test_batch1', 'seeedstudio123/test_batch2']"
```

### Remove Features

Drop a camera you no longer want to train on (e.g. keep only the wrist camera):

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type remove_feature \
    --operation.feature_names "['observation.images.side']"
```

### Convert Images to Video

Convert an image-based dataset into video format — smaller storage, faster training data loading:

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test_image \
    --new_repo_id seeedstudio123/test_video \
    --operation.type convert_image_to_video \
    --operation.vcodec libsvtav1 \
    --operation.pix_fmt yuv420p \
    --operation.g 2 \
    --operation.crf 30
```

Useful options: `--operation.output_dir` (custom output path), `--operation.num_workers 8` (parallel encoding), `--operation.max_episodes_per_batch` / `--operation.max_frames_per_batch` (memory-constrained machines). The result is a complete, standard LeRobotDataset — videos under `videos/`, metadata preserved.

</section>

## 13.5 FAQ for This Chapter

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>13.5 FAQ for This Chapter</h2>
  </div>

- **Which LeRobot repository?** The verified one from Chapter 5: `https://github.com/Seeed-Projects/lerobot.git`. The official repository updates continuously and may change dataset versions or command syntax.
- **The operation looks stuck.** Press Enter to refresh the terminal output. The new dataset format is stored compressed, so operations take time — watch the progress bar and be patient.
- **Reference:** [Using dataset tools](https://huggingface.co/docs/lerobot/using_dataset_tools) in the official docs.

</section>

</div>
