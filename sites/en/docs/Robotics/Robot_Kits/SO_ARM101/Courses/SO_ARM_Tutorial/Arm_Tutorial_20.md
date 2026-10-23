---
description: 'Chapter 20 of the SO-ARM Physical AI Beginner''s Course — turn a Stage-3 LeRobot dataset into a GR00T-ready VLA dataset: language annotations, meta/modality.json, the new_embodiment tag and so100_dualcam config, dimension checks, and multi-task organization.'
title: Chapter 20 - Preparing the SO-ARM VLA Dataset
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - GR00T
  - VLA
  - Dataset
  - Modality
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_20
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_20/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 4 · Chapter 20 · Practice</span>
    <h2>20. Preparing the SO-ARM VLA Dataset</h2>
    <p>
      Chapter 20 of the SO-ARM Physical AI Beginner's Course — turn a Stage-3 LeRobot dataset
      into a GR00T-ready VLA dataset: language annotations, meta/modality.json, the
      new_embodiment tag and so100_dualcam config, dimension checks, and multi-task organization.
    </p>
    <div className="hero-actions">
      <a href="#check">Check the dataset</a>
      <a href="#language">Language</a>
      <a href="#modality">modality.json</a>
    </div>
  </div>
</section>

## 20.1 Prerequisites

<section id="prerequisites" className="section-card">
  <div className="section-title">
    <span>Prerequisites</span>
    <h2>20.1 Prerequisites</h2>
  </div>

You need:

- A clean Stage-3 dataset recorded on the SO-ARM (Chapters 11-13): two camera views (`front` + `side`), 50+ episodes, one task per episode, quality-checked;
- The [Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T) repository cloned on your training machine (Chapter 21 installs the full environment — this chapter only edits dataset files);
- The official recipe for reference: [Fine-tune GR00T N1.5 on SO101](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning).

:::tip
Your existing ACT dataset is the raw material — GR00T reuses the same LeRobot episodes. This chapter only adds the language and modality metadata.
:::

</section>

## 20.2 Checking the LeRobot Dataset

<section id="check" className="section-card">
  <div className="section-title">
    <span>Check</span>
    <h2>20.2 Checking the LeRobot Dataset</h2>
  </div>

### Dataset Directory Structure

```text
~/.cache/huggingface/lerobot/seeedstudio123/test/
├── meta/
│   ├── info.json        ← fps, features, camera keys, robot info
│   ├── tasks.jsonl      ← task descriptions (edit here!)
│   ├── episodes/...     ← per-episode metadata
│   └── stats/...        ← normalization statistics
├── data/                ← parquet frames
└── videos/              ← camera streams
```

### Quick Check with Python

```python
from lerobot.common.datasets.lerobot_dataset import LeRobotDataset

ds = LeRobotDataset("seeedstudio123/test", root="~/.cache/huggingface/lerobot")
print(ds.meta.info)          # fps, features
print(ds[0]["observation.state"].shape)   # expect torch.Size([6])
print(ds[0]["action"].shape)              # expect torch.Size([6])
```

### Required Checklist

- [ ] `observation.state` and `action` are both 6-dim (5 joints + gripper);
- [ ] Exactly two camera features, e.g. `observation.images.front` / `observation.images.side`;
- [ ] Every episode belongs to one task with a meaningful description;
- [ ] No known broken episodes left in the set (Chapter 13 cleanup).

</section>

## 20.3 Adding Language Task Descriptions

<section id="language" className="section-card">
  <div className="section-title">
    <span>Language</span>
    <h2>20.3 Adding Language Task Descriptions</h2>
  </div>

### Method A: Write directly during recording (recommended)

If you record a **new** dataset for Stage 4, bind the instruction at record time with the same `--dataset.single_task` you already use:

```bash
--dataset.single_task="Pick up the block at point A and place it at point B"
```

One short, verb-first sentence per task — it flows into the dataset's task metadata automatically.

### Method B: Backfill `meta/tasks.jsonl`

For an existing dataset, edit `meta/tasks.jsonl` so every task index maps to a proper instruction sentence. Keep the mapping consistent: the model will learn these exact strings.

### Language Annotation Guidelines

1. One task = one fixed sentence; the same task never appears with two phrasings;
2. Verb-first and concrete: "Put the block into the box" beats "block handling";
3. English or Chinese both work — GR00T's VLM handles both — but don't mix languages within one task.

</section>

## 20.4 Creating meta/modality.json

<section id="modality" className="section-card">
  <div className="section-title">
    <span>Modality</span>
    <h2>20.4 Creating meta/modality.json</h2>
  </div>

`modality.json` tells GR00T which dataset fields feed which model inputs. The SO-ARM's standard two-camera layout matches the official **`so100_dualcam`** data config; a minimal equivalent for a local dataset looks like this:

```json
{
    "state": {
        "single_arm": [0, 5],
        "gripper": [5, 6]
    },
    "action": {
        "single_arm": [0, 5],
        "gripper": [5, 6]
    },
    "video": {
        "front": "observation.images.front",
        "side": "observation.images.side"
    },
    "annotation": {
        "human.task_description": "task_description"
    }
}
```

### Field Description

| Field | Meaning |
| :--- | :--- |
| `state.single_arm` | Slice `[start, end)` of `observation.state` for the 5 arm joints |
| `state.gripper` | Slice for the gripper dim |
| `action.*` | Same slicing on the `action` vector |
| `video` | Camera key → dataset feature name (must match recording keys exactly) |
| `annotation.human.task_description` | Where the language instruction comes from (Chapter 18's recommended key) |

:::note
The `so100_dualcam` config in the Isaac-GR00T repo is the canonical version of this file — if your layout matches the standard (two cameras, 6-dim state/action), prefer passing `--data-config so100_dualcam` at training time over hand-maintaining a copy.
:::

</section>

## 20.5 Setting the Embodiment Tag

<section id="embodiment-tag" className="section-card">
  <div className="section-title">
    <span>Embodiment</span>
    <h2>20.5 Setting the Embodiment Tag</h2>
  </div>

The SO-ARM fine-tunes as a new embodiment: tag **`new_embodiment`**. You rarely write it into the dataset itself — it is a training/inference argument (Chapter 21: `--embodiment-tag new_embodiment` on the inference service, and the SO101 fine-tuning recipe sets it during training).

What matters at dataset time is that the **data config matches reality**: two cameras and 6-dim state/action, as verified in 20.2.

</section>

## 20.6 Checking Joint Order and Data Dimensions

<section id="dimensions" className="section-card">
  <div className="section-title">
    <span>Verify</span>
    <h2>20.6 Checking Joint Order and Data Dimensions</h2>
  </div>

### Step 1: Print dataset meta

Confirm the feature list and dims (see 20.2's Python snippet): 6/6 for state/action, two image features.

### Step 2: Verify modality slicing

If you wrote a custom `modality.json`, the slices must cover `[0,6)` exactly, with no gaps or overlaps.

### Step 3: Visualize the data

```bash
lerobot-dataset-viz \
    --repo-id seeedstudio123/test \
    --mode local \
    --episode-index 0
```

Check that: images are the right cameras, gripper dim actually opens/closes during grasp, joints move in a plausible order.

### Step 4: Statistical checks

Sanity-check `meta/stats`: state min/max should sit inside the calibrated joint ranges; images' mean brightness shouldn't be near 0 or 255 (black or blown-out recordings).

</section>

## 20.7 Multi-Task Dataset Organization

<section id="multi-task" className="section-card">
  <div className="section-title">
    <span>Multi-task</span>
    <h2>20.7 Multi-Task Dataset Organization</h2>
  </div>

### Method A: Same repo_id, multiple task_index (recommended)

Record several tasks into one dataset; each episode stores its `task_index`, and `tasks.jsonl` maps each index to its instruction sentence. This is the natural shape for language-conditioned fine-tuning.

### Method B: Merging multiple datasets

Merge per-task datasets with the Chapter 13 toolbox (`--operation.type merge`). Requirements for a valid merge: identical camera configuration, identical robot/feature layout, and **distinct, consistent task sentences** per source dataset.

### Data Volume Recommendations

| Setup | Episodes | Notes |
| :--- | :--- | :--- |
| Single task, fixed A-to-B | ~50 | Sanity fine-tune |
| Single task, varied positions | 50-100 | The Stage-3 default |
| Multi-task (3-5 tasks) | 50-100 **per task** | Language conditioning needs per-task coverage |

</section>

## 20.8 Data Quality Checklist

<section id="quality-checklist" className="section-card">
  <div className="section-title">
    <span>Checklist</span>
    <h2>20.8 Data Quality Checklist</h2>
  </div>

- [ ] Every episode has a correct, single instruction sentence;
- [ ] Camera keys in `modality.json` match the dataset features character-for-character;
- [ ] `state` / `action` are 6-dim and correctly sliced (`single_arm` / `gripper`);
- [ ] Failed and outlier episodes deleted (Chapter 13);
- [ ] Statistics present (`meta/stats`) — never train on a dataset whose recording session was killed midway;
- [ ] A copy of the final dataset backed up before Chapter 21 starts editing anything.

Dataset ready — next chapter fine-tunes GR00T on it.

</section>

</div>
