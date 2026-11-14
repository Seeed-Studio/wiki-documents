---
description: "Chapter 10 of the SO-ARM101 Sim-to-Real VLA Course — train the GR00T N1.7 policy: install Isaac-GR00T, convert the dataset to v2, register the SO-101 modality config, and fine-tune."
title: Chapter 10 - Train the GR00T N1.7 Policy
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Isaac GR00T
  - GR00T N1.7
  - VLA
  - Fine-tuning
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_10
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_10/
---

import '/src/css/rebot-wiki-style.css';

<div class="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 10 · Get Your Own VLA Model</span>
    <h2>10. Train the GR00T N1.7 Policy</h2>
    <p>
      Understand Isaac GR00T N1.7, prepare the SO-101 dataset for it, and
      fine-tune a task-specific VLA model on the data collected in
      Chapter 9.
    </p>
    <div className="hero-actions">
      <a href="#groot">GR00T N1.7</a>
      <a href="#env">Environment</a>
      <a href="#dataset">Dataset</a>
      <a href="#config">Config</a>
      <a href="#finetune">Fine-tune</a>
      <a href="#outputs">Outputs</a>
    </div>
  </div>
</section>

## 10.1 NVIDIA Isaac GR00T N1.7

<section id="groot" className="section-card">
  <div className="section-title">
    <span>The VLA model</span>
    <h2>10.1 NVIDIA Isaac GR00T N1.7</h2>
  </div>

NVIDIA Isaac GR00T N1.7 is an open Vision-Language-Action (VLA) model for
generalized robot skills. This cross-embodiment model takes multimodal
input — language and images — to perform manipulation tasks in diverse
environments.

The model is trained once and adapted per embodiment through *modality
configurations*: a small file that tells GR00T which dataset columns are
the arm, the gripper, the cameras, and the language instruction. This
chapter builds exactly that configuration for the SO-ARM101.

References:

- [Hugging Face GR00T-1.7-3B Model Repository](https://huggingface.co/nvidia/GR00T-1.7-3B/tree/main)
- [NVIDIA Isaac-GR00T GitHub Repository](https://github.com/NVIDIA/Isaac-GR00T/tree/main)

</section>

## 10.2 Prepare the Python Environment

<section id="env" className="section-card">
  <div className="section-title">
    <span>Isaac-GR00T</span>
    <h2>10.2 Prepare the Python Environment</h2>
  </div>

```bash
sudo apt install git-lfs && git lfs install
cd ~
git clone --recurse-submodules https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
sudo apt-get update && sudo apt-get install -y ffmpeg
uv sync --python 3.12
```

:::caution Hardware
Fine-tuning the 3B model needs an RTX 5090 / RTX 6000 class GPU (NVIDIA's
workshop baseline). An 8 GB laptop GPU is not enough for this chapter; the
ACT sanity check at the end of this chapter still runs on small GPUs.
:::

</section>

## 10.3 Handling the Dataset

<section id="dataset" className="section-card">
  <div className="section-title">
    <span>v3 → v2</span>
    <h2>10.3 Handling the Dataset</h2>
  </div>

LeRobot writes dataset v3; GR00T N1.7 fine-tuning reads the older v2
layout. Convert the dataset recorded in Chapter 9:

```bash
cd ~/Isaac-GR00T
uv run --project scripts/lerobot_conversion \
  python scripts/lerobot_conversion/convert_v3_to_v2.py \
  --repo-id so101_vials_real \
  --root $HOME/rebot-arm-dli-isaacsim/datasets
```

The converter moves the v3 copy aside as `so101_vials_real_V30` and leaves
the v2 dataset at the original path. If you plan to merge simulated
episodes later (Chapter 13), do the merge **before** converting.

Then add `meta/modality.json` inside the converted dataset:

```json
{
  "state": {
    "single_arm": { "start": 0, "end": 5 },
    "gripper": { "start": 5, "end": 6 }
  },
  "action": {
    "single_arm": { "start": 0, "end": 5 },
    "gripper": { "start": 5, "end": 6 }
  },
  "video": {
    "wrist": { "original_key": "observation.images.front" },
    "front": { "original_key": "observation.images.external" }
  },
  "annotation": {
    "human.task_description": { "original_key": "task_index" }
  }
}
```

Why the split is at 5:

| Dimensions | Meaning |
| --- | --- |
| 0–4 | `shoulder_pan`, `shoulder_lift`, `elbow_flex`, `wrist_flex`, `wrist_roll` |
| 5 | `gripper` |

SO-ARM101 has five arm joints plus a gripper — six values in total. The
reBot course uses seven, so do not copy its `end: 6` split.

The camera mapping is deliberate:

| Dataset feature | Physical camera | GR00T input |
| --- | --- | --- |
| `observation.images.front` | Gripper / wrist camera | `wrist` |
| `observation.images.external` | Overhead camera | `front` |

</section>

## 10.4 Register the SO-101 Modality Config

<section id="config" className="section-card">
  <div className="section-title">
    <span>Embodiment config</span>
    <h2>10.4 Register the SO-101 Modality Config</h2>
  </div>

```bash
cd ~/Isaac-GR00T
mkdir -p examples/so101
```

Create `examples/so101/so101_config.py`:

```python
# SPDX-License-Identifier: Apache-2.0

from gr00t.configs.data.embodiment_configs import register_modality_config
from gr00t.data.embodiment_tags import EmbodimentTag
from gr00t.data.types import (
    ActionConfig,
    ActionFormat,
    ActionRepresentation,
    ActionType,
    ModalityConfig,
)

so101_config = {
    # Current frame from both cameras; keys match meta/modality.json
    "video": ModalityConfig(
        delta_indices=[0],
        modality_keys=["wrist", "front"],
    ),
    # Current joint reading
    "state": ModalityConfig(
        delta_indices=[0],
        modality_keys=["single_arm", "gripper"],
    ),
    # Predict 16 future steps
    "action": ModalityConfig(
        delta_indices=list(range(0, 16)),
        modality_keys=["single_arm", "gripper"],
        action_configs=[
            # Arm: relative deltas generalize better across poses
            ActionConfig(
                rep=ActionRepresentation.RELATIVE,
                type=ActionType.NON_EEF,
                format=ActionFormat.DEFAULT,
            ),
            # Gripper: absolute target works better for open/close
            ActionConfig(
                rep=ActionRepresentation.ABSOLUTE,
                type=ActionType.NON_EEF,
                format=ActionFormat.DEFAULT,
            ),
        ],
    ),
    "language": ModalityConfig(
        delta_indices=[0],
        modality_keys=["annotation.human.task_description"],
    ),
}

register_modality_config(so101_config, embodiment_tag=EmbodimentTag.NEW_EMBODIMENT)
```

</section>

## 10.5 Fine-Tune the GR00T N1.7 Policy

<section id="finetune" className="section-card">
  <div className="section-title">
    <span>GPU hours</span>
    <h2>10.5 Fine-Tune the GR00T N1.7 Policy</h2>
  </div>

**Route A — your real dataset** (the default path of this course):

```bash
cd ~/Isaac-GR00T
export SAVE_STEPS=5000
bash examples/finetune.sh \
  --base-model-path nvidia/GR00T-1.7-3B \
  --dataset-path $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --modality-config-path examples/so101/so101_config.py \
  --embodiment-tag NEW_EMBODIMENT \
  --output-dir $HOME/groot_so101_real
```

**Route B — co-training with simulated episodes.** Merge the datasets
first (Chapter 13), then point `--dataset-path` at the merged set. NVIDIA's
workshop recipe: a few real episodes plus 70–100 simulated ones.

**Route C — sequential fine-tuning.** Fine-tune on simulation first, then
continue from that checkpoint on real data:

```bash
bash examples/finetune.sh \
  --base-model-path $HOME/groot_so101_sim/checkpoint-5000 \
  --dataset-path $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --modality-config-path examples/so101/so101_config.py \
  --embodiment-tag NEW_EMBODIMENT \
  --output-dir $HOME/groot_so101_sim_then_real
```

Useful environment variables from `examples/finetune.sh`:

| Variable | Default | Effect |
| --- | --- | --- |
| `SAVE_STEPS` | 1000 | Checkpoint interval |
| `MAX_STEPS` | 10000 | Total optimizer steps |
| `GLOBAL_BATCH_SIZE` | 32 | Lower it on a smaller GPU |
| `EPISODE_SAMPLING_RATE` | 0.1 | Fraction of steps that sample episodes |
| `DS_WEIGHTS_ALPHA` | unset | Balances merged sources by size |
| `USE_WANDB` | 1 | Set to 0 to disable experiment logging |

:::tip Quick sanity check with ACT
Before spending GPU hours, a small ACT policy trains on the same dataset
in minutes and confirms the dataset, normalizers, and optimizer are wired
correctly:

```bash
cd ~/rebot_lerobot && source .venv/bin/activate
lerobot-train \
  --policy.type=act --policy.push_to_hub=false \
  --dataset.repo_id=so101_vials_real \
  --dataset.root=$HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --output_dir=/tmp/act_check --steps=60 --batch_size=4
```
:::

</section>

## 10.6 Training Outputs

<section id="outputs" className="section-card">
  <div className="section-title">
    <span>Checkpoints</span>
    <h2>10.6 Training Outputs</h2>
  </div>

```text
$HOME/groot_so101_real/
├── checkpoint-1000/
├── checkpoint-2000/
├── checkpoint-5000/
└── ...
```

Each checkpoint contains the model weights and the experiment configuration
needed by the inference server. More steps are not always better: evaluate
several checkpoints on the real robot (Chapter 11) and keep the one that
completes the task most reliably.

Next: [Chapter 11 — Evaluate in the Real Environment](Sim2Real_VLA_11.md).

</section>

</div>