---
description: "Chapter 13 of the SO-ARM101 Sim-to-Real VLA Course (optional) — datasets augment: generate new scenes from recorded episodes with NVIDIA Cosmos Transfer, and fold them back into co-training."
title: Chapter 13 - Datasets Augment (Optional)
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Cosmos Transfer
  - Data Augmentation
  - Co-training
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_13
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_13/
---

import '/src/css/rebot-wiki-style.css';

<div class="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 13 · Optional · Augmentation</span>
    <h2>13. Datasets Augment</h2>
    <p>
      Real data is expensive and narrow. Use NVIDIA Cosmos Transfer to
      re-render recorded episodes in new scenes while keeping the robot's
      motion — then co-train on the widened dataset.
    </p>
    <div className="hero-actions">
      <a href="#why">Why augment</a>
      <a href="#cosmos">Cosmos Transfer</a>
      <a href="#setup">Setup</a>
      <a href="#data">Prepare data</a>
      <a href="#inference">Inference</a>
      <a href="#integration">Integration</a>
    </div>
  </div>
</section>

:::note This chapter is optional advanced material
It is recommended to complete the real-world loop first (collect → train →
evaluate, Chapters 9–11). The workflow applies to both the real dataset
from Chapter 9 and the simulated dataset from Chapter 12.
:::

## 13.1 Why Augment

<section id="why" className="section-card">
  <div className="section-title">
    <span>Limits of real data</span>
    <h2>13.1 Why Augment</h2>
  </div>

Collecting data in real-world scenarios entails high costs and significant
limitations:

- **Limited environments**: data is typically collected across only a few
  fixed scenes;
- **Background overfitting**: policy networks may learn background features
  irrelevant to the task (wall color, lighting, object placement), causing
  the policy to fail to generalize;
- **High collection costs**: each additional scene requires redeployment,
  recalibration, and re-collection.

We leverage the state-of-the-art Cosmos Transfer model to modify video
scenes, expanding dataset diversity to enhance model robustness.

</section>

## 13.2 How Cosmos Transfer Works

<section id="cosmos" className="section-card">
  <div className="section-title">
    <span>Video-to-video</span>
    <h2>13.2 How Cosmos Transfer Works</h2>
  </div>

**NVIDIA Cosmos** is a foundational AI platform designed to accelerate the
development of Physical AI (robotics and autonomous vehicles). Cosmos
Transfer is a **video-to-video** generative model. It takes three inputs:

| Input | Purpose | Example |
|---|---|---|
| Source video (vision) | Provides temporal dynamic information | SO-101 external-camera manipulation video |
| Control signals (controls) | Constrains spatial structure, preserves robot morphology | Canny edge map + SAM2 segmentation map |
| Text prompt | Describes the target scene's appearance | "A modern laboratory with white lab benches..." |

The control signals (edges + segmentation) lock the robot's shape and
motion in place; the text prompt drives what the new background looks like.

| Control Type | Purpose | Pre-computation Required? |
|---|---|---|
| Edge | Preserves object outlines, prevents subject deformation | Optional (framework can auto-compute Canny) |
| Segmentation | Preserves semantic regions (robot/object/background) | Required (depends on SAM2) |
| Blur | Preserves global layout, allows texture variation | Optional |
| Depth | Preserves spatial depth relationships | Required (depends on DepthAnything) |

:::tip Action labels carry over
Transfer keeps the robot's motion trajectory, so the original actions
(joint angles, gripper state) work as-is for the augmented videos. High
edge weight (0.9) is what makes this reuse safe.
:::

</section>

## 13.3 Environment Setup

<section id="setup" className="section-card">
  <div className="section-title">
    <span>GPU and install</span>
    <h2>13.3 Environment Setup</h2>
  </div>

Hardware requirements:

| Model | Min GPU VRAM | Recommended GPU |
|---|---|---|
| Cosmos-Nano | ~24 GB | Single RTX 4090 / A5000 / Jetson AGX Thor |
| Cosmos-Super | ~80 GB × 4 | 4× A100 / H100 |

Installation:

```bash
# Clone the Cosmos repository
git clone https://github.com/NVIDIA/Cosmos.git
cd Cosmos

# Navigate to the framework directory
cd packages/cosmos3

# Create a virtual environment
uv venv --python 3.13
source .venv/bin/activate

# Install dependencies
uv pip install -e ".[inference]"

# Log in to Hugging Face and download the model weights
huggingface-cli login
hf download nvidia/Cosmos-Nano --local-dir /path/to/models/Cosmos-Nano
```

</section>

## 13.4 Prepare Your Data

<section id="data" className="section-card">
  <div className="section-title">
    <span>Controls and prompts</span>
    <h2>13.4 Prepare Your Data</h2>
  </div>

Directory structure:

```text
your_project/
├── controls/
│   └── episode_000/
│       ├── vision.mp4                # Source video (robot recording)
│       ├── control_edge.mp4           # Canny edge map
│       └── control_seg.mp4            # SAM2 segmentation map
├── prompts/
│   ├── lab_prompt.json               # Target-scene prompt
│   └── workshop_prompt.json
├── specs/
│   └── my_lab.json                   # Inference config
├── negative_prompt.json
└── outputs/
```

Extract a clip from your SO-101 dataset (the overhead `external` stream
gives the best structure for augmentation):

```bash
ffmpeg -i ~/rebot-arm-dli-isaacsim/datasets/so101_vials_real/videos/chunk-000/observation.images.external/episode_000000.mp4 \
  -c copy your_project/controls/episode_000/vision.mp4
```

Generate the edge control signal:

```python
python -c "
import cv2
cap = cv2.VideoCapture('your_project/controls/episode_000/vision.mp4')
fps = cap.get(cv2.CAP_PROP_FPS)
w, h = int(cap.get(3)), int(cap.get(4))
out = cv2.VideoWriter('your_project/controls/episode_000/control_edge.mp4',
                      cv2.VideoWriter_fourcc(*'avc1'), fps, (w, h), True)
while True:
    ret, frame = cap.read()
    if not ret: break
    edges = cv2.Canny(cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY), 50, 150)
    out.write(cv2.cvtColor(edges, cv2.COLOR_GRAY2BGR))
cap.release(); out.release()
print('edge control done')
"
```

Generate the segmentation signal with SAM2 (a separate install):

```bash
pip install sam2
python your_sam2_script.py \
  --input your_project/controls/episode_000/vision.mp4 \
  --output your_project/controls/episode_000/control_seg.mp4
```

Write the scene prompt, for example `prompts/lab_prompt.json`:

```json
{
  "subjects": [{
    "description": "A white SO-ARM101 robotic arm performing a tabletop pick-and-place task",
    "appearance_details": "White 3D-printed links, small two-finger gripper, wrist-mounted camera",
    "action": "pick up a vial and place it into a yellow rack",
    "pose": "Arm reaches toward the vial, gripper closes, the vial lifts and moves to the rack",
    "state_changes": "Gripper transitions from open to closed; the held vial is lifted and placed"
  }],
  "background_setting": "A modern laboratory with white lab benches, soft diffuse lighting, and a plain grey mat",
  "lighting": {
    "description": "Even, diffuse overhead lighting with no hard shadows"
  }
}
```

</section>

## 13.5 Run Inference

<section id="inference" className="section-card">
  <div className="section-title">
    <span>Generate</span>
    <h2>13.5 Run Inference</h2>
  </div>

```bash
cd /path/to/cosmos/packages/cosmos3

export TRANSFER_ROOT="/path/to/your_project"

CUDA_VISIBLE_DEVICES=0 \
  .venv/bin/python -m cosmos_framework.scripts.inference \
    --parallelism-preset=latency \
    -i "$TRANSFER_ROOT/specs/my_lab.json" \
    -o "$TRANSFER_ROOT/outputs/" \
    --checkpoint-path Cosmos-Nano \
    --seed 2026
```

Guidance parameters (the weight ratio is what matters; the sum should be
≈ 1.0):

| Parameter | Recommended | Effect |
|---|---|---|
| `guidance` | 3.0 | Text CFG strength — how strongly the new scene follows the prompt |
| `control_guidance` | 1.5 | Control CFG strength — how strictly motion is preserved |
| `edge.weight` | 0.75–0.9 | Preserves subject structure |
| `seg.weight` | 0.1–0.25 | Auxiliary semantic consistency |

:::caution If the robot deforms
Increase `edge.weight` (0.9 → 0.95), decrease `seg.weight`, and raise
`control_guidance`. If the background barely changes, raise `guidance` and
describe the target scene in more detail. On OOM: reduce resolution to
`"480"`, reduce `num_video_frames_per_chunk` to 33.
:::

Batch generation: wrap the command in a shell loop over your episode
directories to multiply the dataset across several target scenes.

</section>

## 13.6 Integration into the Training Pipeline

<section id="integration" className="section-card">
  <div className="section-title">
    <span>Back to GR00T</span>
    <h2>13.6 Integration into the Training Pipeline</h2>
  </div>

The augmented videos reuse the original episode's action and state labels —
no re-labeling is needed. To fold them into training:

1. Build augmented episodes as LeRobot datasets (same six joint columns,
   same `front`/`external` camera keys, same task sentence);
2. Merge them with the real dataset like the sim data in
   [Chapter 12](Sim2Real_VLA_12.md) — `lerobot-edit-dataset
   --operation.type=merge` accepts every source with matching features;
3. Convert the merged dataset to GR00T v2 and fine-tune exactly as in
   [Chapter 10](Sim2Real_VLA_10.md), adjusting
   `EPISODE_SAMPLING_RATE` / `DS_WEIGHTS_ALPHA` when sources are unequal.

Quality check before training on augmented data: scrub through frames and
confirm the robot looks right and backgrounds are believable, then run a
short policy-transfer test — train briefly on augmented data and measure
the real-world success rate against a policy trained on real data only.

</section>

## 13.7 References

<section id="references" className="section-card">
  <div className="section-title">
    <span>Links</span>
    <h2>13.7 References</h2>
  </div>

- [Cosmos Documentation](https://docs.nvidia.com/cosmos)
- [Cosmos Transfer Cookbook](https://github.com/NVIDIA/Cosmos/tree/main/cookbooks/cosmos3/generator/transfer)
- [NVIDIA SO-101 Workshop — Strategy 3: Augmenting Datasets With Cosmos](https://docs.nvidia.com/learning/physical-ai/sim-to-real-so-101/latest/14-strategy3-cosmos.html)

Continue to Stage 4: [Chapter 14 — Setup Your Jetson Edge Device](Sim2Real_VLA_14.md).

</section>

</div>