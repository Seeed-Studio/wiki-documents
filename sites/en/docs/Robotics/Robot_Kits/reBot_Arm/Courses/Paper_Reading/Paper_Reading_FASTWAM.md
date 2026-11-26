---
description: 'A deep dive into Fast-WAM: mechanisms, training, experiments, and LeRobot v0.7.0 integration scope.'
title: 'Fast-WAM: Learning from Future Video Without Generating It at Execution'
hide_title: true
keywords:
  - Paper Deep-Dive
  - Fast-WAM
  - World-Action Models
  - Video Co-Training
  - Direct Action Inference
  - LeRobot
slug: /robotics/paper_reading_fastwam
displayed_sidebar: PaperReadingSidebar
last_update:
  date: 2026-11-20
  author: liujunjie
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/robotics/paper_reading_fastwam/
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Prerequisites: Learning from the Future Versus Generating It",
    "id": "prerequisites-learning-from-the-future-versus-generating-it",
    "level": 2
  },
  {
    "value": "Abstract and Reading Guide",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Why the Controlled Variants Matter",
    "id": "why-the-controlled-variants-matter",
    "level": 2
  },
  {
    "value": "Architecture: Actions Read Only the Current Observation",
    "id": "architecture-actions-read-only-the-current-observation",
    "level": 2
  },
  {
    "value": "Training and Inference",
    "id": "training-and-inference",
    "level": 3
  },
  {
    "value": "Data: What “Without Embodied Pretraining” Means",
    "id": "data-what-without-embodied-pretraining-means",
    "level": 2
  },
  {
    "value": "Experiments: Evidence for Removing Future Generation",
    "id": "experiments-evidence-for-removing-future-generation",
    "level": 2
  },
  {
    "value": "LeRobot Integration and Result Boundaries",
    "id": "lerobot-integration-and-result-boundaries",
    "level": 2
  },
  {
    "value": "Conclusion",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-fastwam-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-fastwam-title">Fast-WAM: Learning from Future Video Without Generating It at Execution</h1>
  <p className="paper-reading-lead">Fast-WAM: Do World Action Models Need Test-time Future Imagination?</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#data-what-without-embodied-pretraining-means">Video co-training</a></li>
    <li><a href="#architecture-actions-read-only-the-current-observation">Direct action inference</a></li>
    <li><a href="#experiments-evidence-for-removing-future-generation">Experiments</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2603.16666v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Read the paper</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/fastwam" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot Fast-WAM Documentation ↗</a>

**LeRobot parameters**

- `--policy.type=fastwam` selects the training policy; use `--policy.path` for trained weights.
- `--policy.path=lerobot/fastwam_libero_uncond_2cam224` loads the documented LIBERO checkpoint.
- `action_horizon` controls prediction length; `n_action_steps` controls how many actions are consumed before replanning and cannot exceed it.
- From the source checkout, install `pip install -e ".[fastwam,libero]"`. See the versioned guide for complete evaluation commands.

</aside>

A towel-folding robot could generate a video of the next fold before choosing arm movements. That adds video denoising to every control query. **Does future prediction help because the model learned physical change during training, or because it explicitly imagines the future while acting?** Fast-WAM separates these factors.

## Prerequisites: Learning from the Future Versus Generating It

Future-video supervision shapes the model's parameters during training. Future generation performs additional computation during deployment. Skipping RGB decoding still permits prediction of future latents; standard Fast-WAM goes further and instantiates no future-video tokens at inference.

## Abstract and Reading Guide

**Abstract in brief.** Fast-WAM co-trains video and actions but generates actions directly from current visual representations at deployment. Controlled joint-denoising, video-then-action, and no-video-training variants separate supervision from inference-time imagination. In the tested settings, removing video training causes the larger loss in performance.

**Reading note.** This is a conditional result about the evaluated models and tasks. It does not establish that future conditioning is unnecessary for every dynamic or out-of-distribution problem, and the video backbone remains part of the policy.

## Why the Controlled Variants Matter

Conventional world-action models either predict video before actions or denoise both jointly. Both combine training-time video supervision with deployment-time future generation. A shared framework that changes attention and video supervision makes their individual effects easier to assess than a comparison between unrelated models.

## Architecture: Actions Read Only the Current Observation

The model reuses Wan2.2-5B's video DiT, VAE, and text encoder, adding an approximately 1B action expert for roughly 6B parameters overall. A structured MoT attention pattern connects the branches.

| Token group | Training access | Kept at deployment? |
| --- | --- | --- |
| Clean current observation | Current visual anchor and language | Yes; visual context computed once |
| Noisy future video | Current anchor and future-video group | No |
| Noisy action chunk | Current anchor, language, and actions | Yes; iterative action denoising |

Actions cannot attend to future-video tokens, and the clean anchor does not read the other groups. This prevents an action-training dependency on future information that disappears at deployment.

In the towel example, video supervision teaches how moving a corner changes the cloth. The action branch always learns its motion from the current cloth and instruction. Shared parameters transfer useful structure without providing the future as an action input.

<figure className="paper-reading-figure" data-reading-figure="fastwam/architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fastwam/architecture.png" alt="Video and action branches during co-training" loading="lazy" />
  <figcaption><strong>Video and action branches during co-training.</strong> Source: the Fast-WAM paper. Training predicts future video latents and action chunks from language and current observations. The attention mask determines whether actions can read the future; drawing both branches does not itself imply that dependency.</figcaption>
</figure>

### Training and Inference

The objective combines video and action flow losses:

$$
\mathcal L=\lambda_v\mathcal L_{\mathrm{video}}+\lambda_a\mathcal L_{\mathrm{action}}.
$$

Video denoising shapes dynamic representations; action denoising reconstructs demonstrations. Deployment runs current observation → one visual encoding → action denoising → partial execution → fresh observation. A 32-step prediction horizon does not require executing all 32 steps before replanning.

<figure className="paper-reading-figure" data-reading-figure="fastwam/attention-masks">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fastwam/attention-masks.png" alt="Attention dependencies in training and inference" loading="lazy" style={{maxWidth: "380px", marginInline: "auto"}} />
  <figcaption><strong>Attention dependencies in training and inference.</strong> Source: the Fast-WAM paper. Rows are queries and columns are readable keys. Actions read the current frame and actions, but not future frames. Removing future tokens at inference preserves this conditioning path, separating video supervision from runtime video generation.</figcaption>
</figure>

## Data: What “Without Embodied Pretraining” Means

The backbone starts from pretrained video weights. The paper's absence of embodied pretraining means no additional large robot-action pretraining stage, not random initialization.

Evaluations cover LIBERO, clean and randomized RoboTwin 2.0, and a real Galaxea R1 Lite towel-folding task. The real task uses 60 hours of teleoperation and 30k training steps per model, reporting both success and completion time.

## Experiments: Evidence for Removing Future Generation

| Shared-framework method | LIBERO mean | RoboTwin mean |
| --- | ---: | ---: |
| Fast-WAM | 97.6% | 91.8% |
| Joint video/action denoising | 98.5% | 90.6% |
| Video-then-action IDM | 98.0% | 91.3% |
| Without video co-training | 93.5% | 83.8% |

These are paper success rates on separate benchmarks. Direct action inference is below the future-generating variants on LIBERO and slightly above them on RoboTwin. Removing video training produces the more consistent loss: 4.1 and 8.0 percentage points respectively. The evidence supports video supervision rather than universal accuracy superiority for direct inference.

RoboTwin uses 100 trials per task for each clean/randomized setting. A trial counts as successful only after completing the task, and averages can hide difficult individual tasks.

For folding, eventual success alone can conceal repeated failed grasps. Completion time measures whether execution is efficient. The reported approximately 190 ms inference latency belongs to the authors' measurement configuration; it is not the motor control frequency.

## LeRobot Integration and Result Boundaries

Version 0.7.0 consumes images, state, actions, and instructions. Camera views concatenate horizontally and must match `image_size`. The checkpoint uses external visual `IDENTITY` preprocessing because the model rescales images internally; applying both transformations would normalize twice.

The documented checkpoint scores 97.6%, 99.0%, 95.0%, and 94.0% across the four LIBERO suites: 96.4% over 2,000 episodes. The paper's 97.6% mean is a different experimental result.

Evaluation parameter fragments are:

```bash
--policy.path=lerobot/fastwam_libero_uncond_2cam224
--policy.dtype=float32
--policy.n_action_steps=10
--env.type=libero
--env.task=libero_10
--eval.n_episodes=50
```

A full evaluation traverses all four suites and their tasks with matched rendering, gripper processing, seeds, and episode limits.

## Conclusion

Fast-WAM separates a useful training signal from recurring deployment computation. Its mask prevents future leakage, and its controlled variants show greater benefit from retaining video training than from retaining video generation in the tested settings. The task distribution and latency conditions define the scope of that conclusion.

</div>
