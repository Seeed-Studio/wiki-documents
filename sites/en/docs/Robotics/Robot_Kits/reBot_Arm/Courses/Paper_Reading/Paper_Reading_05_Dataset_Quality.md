---
description: "Understand LeRobot's video, Parquet, and meta structure, and check time synchronization, image quality, and demonstration completeness."
title: "How to Validate Dataset Quality for Robot Learning"
hide_title: true
keywords:
  - Hands-on Deployment
  - reBot
  - LeRobot
  - ACT
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Physical AI
  - Course
  - Tutorial
  - SO101
  - SO-ARM101
  - Hugging Face
  - Arm
  - Robotics
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/hands_on_dataset_quality
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/robotics/hands_on_dataset_quality/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-dataset_quality-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · HANDS-ON DEPLOYMENT</span>
  <h1 id="hands-on-dataset_quality-title">How to Validate Dataset Quality for Robot Learning</h1>
  <p className="paper-reading-lead">Understand LeRobot video, Parquet, and metadata files, then check time synchronization, image quality, and complete demonstrations.</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Dataset structure</li>
    <li>Time synchronization</li>
    <li>Quality checks</li>
    <li>Troubleshooting</li>
  </ul>
</section>

## Dataset Structure

**A recorded dataset such as `seed_rebot_b601_rs/test` has the following layout:**

```text
~/.cache/huggingface/lerobot/seed_rebot_b601_rs/test/
├── data/
│   └── chunk-000/
│       └── file-000.parquet          ← Numerical frames: state / action / timestamps
├── videos/
│   ├── observation.images.front/
│   │   └── chunk-000/
│   │       └── file-000.mp4          ← Front camera: concatenated video for 50 episodes
│   └── observation.images.wrist/
│       └── chunk-000/
│           └── file-000.mp4          ← Wrist camera: the same arrangement
└── meta/
    ├── info.json                     ← Version, fps, frame count, and feature definitions
    ├── stats.json                    ← Mean, variance, and extrema for each feature
    ├── tasks.parquet                 ← Task descriptions
    └── episodes/
        └── chunk-000/
            └── file-000.parquet      ← Per-episode records
```

**Three formats hold three kinds of information:**

| Format | Contents | Why use it? |
|---|---|---|
| MP4 video | All image frames from both cameras | Images account for over 90% of dataset size; video compression can save one to two orders of magnitude compared with individual image files. |
| Parquet tables | Per-frame state, action, timestamps, and indices | Columnar storage lets you read, for example, all joint-3 values without loading the entire table. |
| Metadata | Structure, statistics, tasks, and episode indices | Loaders and training programs read these first to interpret the other files. |

---

## Timestamps and Synchronization

- Images travel over USB, while joint data travels over CAN, so they naturally reach the computer at different times. LeRobot assigns **timestamps** to align images, states, and actions representing the same logical instant in one row.

![Dataset Structure and Quality Checks: Timestamps and Synchronization (Figure 1)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/dataset-quality-01-timestamp-sync-en.png)

---

## Assess Overall Dataset Quality

Check four dimensions before using a dataset for training:

![Dataset Structure and Quality Checks: Assess Overall Dataset Quality (Figure 2)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/dataset-quality-02-quality-checklist-en.png)

---

## Replay and Inspect Images

Use `lerobot-dataset-viz` for visualization and `lerobot-replay` for replay on the robot, as described earlier. Inspect at least **episode 0, one middle episode, and the final episode**. The first checks the workflow, the middle checks drift, and the last often reveals quality loss from operator fatigue.

During replay, check that:

- Both camera views are present, without black frames, corrupted images, or a frozen stream.

- Images are sharp and correctly exposed, with the block and gripper visible throughout.

- Actions and images align: when the gripper closes, the image shows it contacting the block.

- The episode begins at the standard initial pose and ends with the stopping condition satisfied.

---

## What to Do When Problems Appear

Handle problems according to their scope:

- **A few bad episodes**, such as blurred images in episodes 3 and 17: remove those two and record two replacements.

- **Widespread problems**, such as lighting changes in half the episodes or a whole batch with misaligned video and actions: record the dataset again. A patchwork of inconsistent repairs can be worse than having less data.

After deletion, the tool rebuilds the dataset automatically: episode indices become consecutive and `stats.json` is recomputed. Whether removing or adding episodes, the tools regenerate metadata; you do not need to edit it manually.

---

</div>
