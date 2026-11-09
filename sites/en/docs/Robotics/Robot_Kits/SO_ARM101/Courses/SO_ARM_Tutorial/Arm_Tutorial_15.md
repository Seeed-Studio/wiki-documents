---
description: Chapter 15 of the SO-ARM Physical AI Beginner's Course — understand batch size, learning rate, and training steps, then train your first ACT policy on the SO-ARM dataset with lerobot-train, monitor loss and GPU, and manage checkpoints.
title: Chapter 15 - Training Your First ACT Policy
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - ACT
  - Training
  - LeRobot
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_15
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_15/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 15 · Practice</span>
    <h2>15. Training Your First ACT Policy</h2>
    <p>
      Chapter 15 of the SO-ARM Physical AI Beginner's Course — understand batch size, learning
      rate, and training steps, then train your first ACT policy on the SO-ARM dataset with
      lerobot-train, monitor loss and GPU, and manage checkpoints.
    </p>
    <div className="hero-actions">
      <a href="#configs">Three configs</a>
      <a href="#checkpoints">Checkpoints</a>
      <a href="#start-training">Start training</a>
    </div>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ No-code · No environment setup</span>
    <p className="sensecraft-banner__title">Skip the setup — run the reBot Arm and LeRobot from one app</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics is Seeed's no-code platform for the SO-ARM101, reBot Arm 102 + B601-RS and B601-DM. Connect the arms, calibrate, collect demonstrations, train and run inference from a guided interface — no Python environment, no terminal.</p>
    <ul className="sensecraft-banner__points">
      <li>✅ 6-step guided workflow</li>
      <li>✅ Cloud training — no local GPU</li>
      <li>✅ Windows / macOS client</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">Go to SenseCraft Robotics ↗</a>
    <a className="sensecraft-banner__link" href="/sensecraft_robotics/">Software guide</a>
  </div>
</div>

## 15.1 Three Key Configs: Batch Size, Learning Rate, Steps

<section id="configs" className="section-card">
  <div className="section-title">
    <span>Configs</span>
    <h2>15.1 Three Key Configs: Batch Size, Learning Rate, Steps</h2>
  </div>

### Batch Size

How many frames the model sees per update. Bigger batches train more stably but need more VRAM. If you hit CUDA out-of-memory, lower the batch size first. Start with the ACT default and only touch it when you must.

### Learning Rate

How far each update moves the parameters. Too high — loss oscillates or explodes; too low — training crawls. ACT's default (1e-5 range) is well tested for tabletop tasks; don't change it for your first run.

### Training Steps

How many updates in total. ACT's default is 100k-300k steps for SO-ARM-scale tasks; more steps help harder tasks but risk overfitting. Judge by the loss curve: when validation loss stops improving, stop.

:::tip
First-run strategy: keep all defaults, train 100k steps, evaluate on the real robot (Chapter 16), then decide what to tune. Beginners lose more time tuning blind than training twice.
:::

</section>

## 15.2 Saving and Managing Checkpoints

<section id="checkpoints" className="section-card">
  <div className="section-title">
    <span>Checkpoints</span>
    <h2>15.2 Saving and Managing Checkpoints</h2>
  </div>

No manual saving needed: checkpoints are saved automatically every `save_freq` steps plus a final `last` one. It's fine to set a large step count — you can pick the model from lower steps and discard under-trained or over-fitted ones.

```text
outputs/train/act_so101_test/
├── train_config.json              ← Full config for this run (needed to resume)
└── checkpoints/
    ├── 0020000/pretrained_model/  ← Model archive at each step count
    ├── 0040000/pretrained_model/
    ├── ...
    └── last/pretrained_model/     ← Last checkpoint, used in Chapter 16
```

- **Disk usage:** each checkpoint is a complete model weight file; dozens of them add up. Once training stabilizes, early/mid checkpoints can be deleted, keeping only `last`.
- During inference, `--policy.path` points to `checkpoints/last/pretrained_model`.

</section>

## 15.3 Starting Training

<section id="start-training" className="section-card">
  <div className="section-title">
    <span>Training</span>
    <h2>15.3 Starting Training</h2>
  </div>

All checks passed — start training (in the conda `lerobot` environment). For a **local dataset** (recorded in Chapter 12), make sure the `repo_id` matches the one used during data collection and add `--policy.push_to_hub=false`:

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```

For a **dataset on the Hugging Face Hub**, use your username:

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000
```

What each argument does:

- **Dataset specification:** `--dataset.repo_id` points at your Chapter 12 dataset.
- **Training steps:** `--steps=300000`. The algorithm defaults higher; adjust based on task difficulty and the loss curve.
- **Policy type:** `--policy.type=act` loads the ACT configuration. The policy automatically adapts to your robot's motor states, motor actions, and the number of cameras — this information is already stored in your dataset. Other options include `diffusion`, `pi0`, `pi0fast`, `smolvla`, `groot`.
- **Device selection:** `--policy.device=cuda` for NVIDIA GPUs; `mps` works on Apple Silicon.
- **Visualization tool:** re-enable `--wandb.enable=true` to chart training with [Weights and Biases](https://docs.wandb.ai/quickstart) (run `wandb login` first).

:::tip
RTX 50-series GPUs must append `--dataset.video_backend=pyav` — it bypasses missing APIs in the preview torchvision. Full command:

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```
:::

</section>

## 15.4 Monitoring Loss and GPU Status

<section id="monitoring" className="section-card">
  <div className="section-title">
    <span>Monitor</span>
    <h2>15.4 Monitoring Loss and GPU Status</h2>
  </div>

- **Loss:** printed to the terminal every `log_freq` steps. Expect a fast drop early, then a long shallow decline — that's healthy. Loss rising or oscillating wildly usually means the learning rate is wrong for your setup.
- **GPU:** watch VRAM and utilization with `nvidia-smi` (or `watch -n 1 nvidia-smi`). Utilization near 0% for long stretches means the data pipeline (disk/CPU) is the bottleneck, not the GPU.
- **Time expectations:** as a rough reference, training ACT on 50 episodes takes about 6 hours on a laptop RTX 3060 8GB, and about 2-3 hours on an RTX 4090 or A100. Actual time depends on dataset size, image resolution, batch size, and hardware.

</section>

## 15.5 Resuming Interrupted Training

<section id="resume" className="section-card">
  <div className="section-title">
    <span>Resume</span>
    <h2>15.5 Resuming Interrupted Training</h2>
  </div>

To resume from the `last` checkpoint, feed back the saved config:

```bash
lerobot-train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

### Uploading Policy Checkpoints (Optional)

Once training is done, upload the latest checkpoint:

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

</section>

## 15.6 Common Training Errors

<section id="faq" className="section-card">
  <div className="section-title">
    <span>Troubleshooting</span>
    <h2>15.6 Common Training Errors</h2>
  </div>

| Error | Fix |
| :--- | :--- |
| `TypeError: stack(): argument 'tensors' must be tuple of Tensors, not Column` | `pip install datasets==2.19` |
| CUDA out of memory | Lower batch size; close other GPU processes; use `--dataset.video_backend=pyav` |
| `No valid stream found in input file` during data loading | `conda install ffmpeg=7.1.1 -c conda-forge` (Chapter 5's fix) |
| Dataset not found | For local datasets, re-check the exact `repo_id` from recording; the folder lives under `~/.cache/huggingface/lerobot/` |

With a trained `checkpoints/last/pretrained_model` in hand, the next chapter puts the policy on the real arm.

</section>

</div>
