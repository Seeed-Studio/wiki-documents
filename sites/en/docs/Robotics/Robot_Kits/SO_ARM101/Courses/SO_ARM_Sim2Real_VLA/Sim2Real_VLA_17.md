---
description: "Chapter 17 of the SO-ARM101 Sim-to-Real VLA Course — prepare the dataset and model assets on the Jetson: the converted v2 dataset with modality.json, the fine-tuned checkpoint, and the VLM backbone."
title: Chapter 17 - Prepare the Dataset and Model Assets
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Jetson
  - GR00T N1.7
  - Dataset
  - Checkpoint
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_17
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_17/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 4 · Chapter 17 · Deploy on Jetson</span>
    <h2>17. Prepare the Dataset and Model Assets</h2>
    <p>
      Copy the converted dataset, the fine-tuned checkpoint, and the VLM
      backbone to the Jetson, and validate that everything the TensorRT
      exporter needs is present.
    </p>
    <div className="hero-actions">
      <a href="#compat">Compatibility</a>
      <a href="#dataset">Dataset</a>
      <a href="#checkpoint">Checkpoint</a>
      <a href="#backbone">Backbone</a>
      <a href="#checklist">Checklist</a>
    </div>
  </div>
</section>

## 17.1 Dataset Compatibility

<section id="compat" className="section-card">
  <div className="section-title">
    <span>Match training exactly</span>
    <h2>17.1 Dataset Compatibility</h2>
  </div>

The converted dataset must preserve the camera keys, state/action
dimensions, task labels, and episode boundaries used during fine-tuning.

For the SO-ARM101 that means:

- camera keys `wrist` and `front` mapped in `meta/modality.json`, exactly as
  created in [Chapter 10](Sim2Real_VLA_10.md);
- six state/action dimensions: `single_arm` 0–5, `gripper` 5–6;
- the embodiment tag `NEW_EMBODIMENT` registered by `so101_config.py`.

Do not rename camera modalities after training.

</section>

## 17.2 Convert and Copy the Dataset

<section id="dataset" className="section-card">
  <div className="section-title">
    <span>v2.1 layout</span>
    <h2>17.2 Convert and Copy the Dataset</h2>
  </div>

If you have not converted yet, run the converter on the workstation
(the same command as Chapter 10):

```bash
cd ~/Isaac-GR00T
uv run --project scripts/lerobot_conversion \
  python scripts/lerobot_conversion/convert_v3_to_v2.py \
  --repo-id so101_vials_real \
  --root $HOME/rebot-arm-dli-isaacsim/datasets
```

Copy the converted dataset (and its `meta/modality.json`) into the Jetson
workspace path:

```bash
rsync -av \
  ~/rebot-arm-dli-isaacsim/datasets/so101_vials_real/ \
  jetson:"${GR00T_DATASET_PATH}/"
```

Validate the layout GR00T expects:

```text
${GR00T_DATASET_PATH}/
├── data/chunk-000/episode_000000.parquet
├── videos/chunk-000/observation.images.front/episode_000000.mp4
└── meta/
    ├── episodes.jsonl
    ├── info.json
    ├── modality.json
    ├── stats.json
    └── tasks.jsonl
```

```bash
source "${HOME}/.config/gr00t-inference/paths.sh"
test -f "${GR00T_DATASET_PATH}/meta/info.json"
test -f "${GR00T_DATASET_PATH}/meta/modality.json"
test -f "${GR00T_DATASET_PATH}/meta/stats.json"
test -f "${GR00T_DATASET_PATH}/meta/tasks.jsonl"
find "${GR00T_DATASET_PATH}/data" -name 'episode_*.parquet' | head
```

</section>

## 17.3 Prepare the Fine-Tuned Checkpoint

<section id="checkpoint" className="section-card">
  <div className="section-title">
    <span>Weights only</span>
    <h2>17.3 Prepare the Fine-Tuned Checkpoint</h2>
  </div>

Copy the checkpoint directory from Chapter 10 into
`${GR00T_MODEL_PATH}`, then verify:

```bash
test -f "${GR00T_MODEL_PATH}/config.json"
test -f "${GR00T_MODEL_PATH}/processor_config.json"
test -f "${GR00T_MODEL_PATH}/statistics.json"
test -f "${GR00T_MODEL_PATH}/model.safetensors.index.json"
ls "${GR00T_MODEL_PATH}"/model-*-of-*.safetensors
```

Training-state files such as `optimizer.pt`, `scheduler.pt`, and
`trainer_state.json` are not required for inference or TensorRT export.

</section>

## 17.4 Prepare the VLM Backbone

<section id="backbone" className="section-card">
  <div className="section-title">
    <span>Cosmos-Reason2-2B</span>
    <h2>17.4 Prepare the VLM Backbone</h2>
  </div>

GR00T 1.7 defaults to `nvidia/Cosmos-Reason2-2B`:

```bash
hf download nvidia/Cosmos-Reason2-2B \
  --local-dir "${GR00T_BACKBONE_PATH}"

test -f "${GR00T_BACKBONE_PATH}/config.json"
test -f "${GR00T_BACKBONE_PATH}/model.safetensors" || \
  test -f "${GR00T_BACKBONE_PATH}/model.safetensors.index.json"
```

The validated repository can also use `Qwen/Qwen3-VL-2B-Instruct` through
`GR00T_BACKBONE_PATH`. Qwen3-VL is a validated alternative for this
checkpoint and repository revision, not the official GR00T 1.7 default.

</section>

## 17.5 Asset Readiness Checklist

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>Before Chapter 18</span>
    <h2>17.5 Asset Readiness Checklist</h2>
  </div>

- [ ] Dataset episodes and videos use the expected per-episode layout;
- [ ] Camera keys, embodiment tag, state dimensions, and action dimensions
      match training;
- [ ] The checkpoint contains all model shards and GR00T metadata;
- [ ] The selected VLM backbone is pinned and available locally.

Next: [Chapter 18 — Run GR00T N1.7 TensorRT Inference](Sim2Real_VLA_18.md).

</section>

</div>