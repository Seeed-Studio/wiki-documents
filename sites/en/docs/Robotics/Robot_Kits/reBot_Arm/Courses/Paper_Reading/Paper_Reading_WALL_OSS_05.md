---
description: "A deep dive into WALL-OSS-0.5: mechanisms, training, experiments, and LeRobot v0.7.0 integration scope."
title: "WALL-OSS-0.5: Bridging Vision-Language Learning and Continuous Actions"
hide_title: true
keywords: ["Paper Deep-Dive","WALL-OSS-0.5","VLA","Gradient-Bridged Co-Training","RVQ","Flow Matching","LeRobot"]
slug: /robotics/paper_reading_wall_oss_05
displayed_sidebar: PaperReadingSidebar
last_update:
  date: 2026-11-20
  author: liujunjie
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Prerequisites: Routing and Gradients",
    "id": "prerequisites-routing-and-gradients",
    "level": 2
  },
  {
    "value": "Abstract and Reading Guide",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Architecture: Shared Context, Separate Paths",
    "id": "architecture-shared-context-separate-paths",
    "level": 2
  },
  {
    "value": "RVQ: More Than Trajectory Compression",
    "id": "rvq-more-than-trajectory-compression",
    "level": 2
  },
  {
    "value": "Joint Training: Three Complementary Signals",
    "id": "joint-training-three-complementary-signals",
    "level": 2
  },
  {
    "value": "Action-Space Supervision",
    "id": "action-space-supervision",
    "level": 2
  },
  {
    "value": "The 26D Control Interface",
    "id": "the-26d-control-interface",
    "level": 2
  },
  {
    "value": "Experiments: Progress, Zero-Shot Behavior, and Adaptation",
    "id": "experiments-progress-zero-shot-behavior-and-adaptation",
    "level": 2
  },
  {
    "value": "Pretrained Behavior",
    "id": "pretrained-behavior",
    "level": 3
  },
  {
    "value": "Matched Fine-Tuning Data",
    "id": "matched-fine-tuning-data",
    "level": 3
  },
  {
    "value": "Controlled Ablations",
    "id": "controlled-ablations",
    "level": 3
  },
  {
    "value": "LeRobot Integration and Training Boundaries",
    "id": "lerobot-integration-and-training-boundaries",
    "level": 2
  },
  {
    "value": "Conclusion",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-wall_oss_05-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-wall_oss_05-title">WALL-OSS-0.5: Bridging Vision-Language Learning and Continuous Actions</h1>
  <p className="paper-reading-lead">Wall-OSS-0.5 Technical Report</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#joint-training-three-complementary-signals">Gradient bridge</a></li>
    <li><a href="#action-space-supervision">Action-space supervision</a></li>
    <li><a href="#experiments-progress-zero-shot-behavior-and-adaptation">Experiments</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2605.30877v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Read the paper</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/wall_oss_05" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot WALL-OSS-0.5 Documentation ↗</a>

**LeRobot parameters**

- `--policy.type=wall_oss_05` selects this release; `wall_x` targets a different WALL release.
- `--policy.path=lerobot/wall-oss-0.5` loads the base for target adaptation.
- The release uses a canonical 26D layout, 32-step chunks, q01/q99 normalization, and ten Euler steps.
- The adapter supports continuous actions and text objectives, but does not expose the complete autoregressive RVQ action path for reproducing joint pretraining.

</aside>

A robot sorts blocks by color and location. The VLM understands those concepts, yet a new action expert may not use them correctly. **Is continuous action supervision alone enough to organize the backbone around control?**

## Prerequisites: Routing and Gradients

Forward routing selects expert parameters and visible tokens. Gradients determine which losses update those parameters. Separate experts do not automatically imply stopped gradients.

Discrete action cross-entropy offers a VLM-native action-learning signal, while continuous flow matching supplies deployment actions. The report studies how these objectives connect understanding to control.

## Abstract and Reading Guide

**Abstract in brief.** The approximately 4B model extends Qwen2.5-VL-3B with an action expert, a vision-aligned RVQ tokenizer, and action-space supervision. Multimodal prediction preserves grounding, discrete action prediction shapes the backbone, and flow matching generates executable trajectories.

**Reading note.** This is a separate 0.5 report, not the older WALL-OSS training recipe. Its main real-robot metric is task progress rather than complete-task success.

## Architecture: Shared Context, Separate Paths

Vision, language, state, and discrete actions pass through the VL Expert; noisy continuous actions pass through the Action Expert. Shared attention supplies context. Discrete and continuous action targets are mutually invisible, preventing answer leakage.

| Objective | Training role | Deployment role |
| --- | --- | --- |
| Multimodal text CE | Preserve grounding and semantic knowledge | Understanding and text generation |
| Action-token CE (RVQ targets) | Make the backbone action-aware | Primarily a training bridge |
| Continuous flow matching | Learn trajectories with gradients into the backbone | Default executable output |

For sorting, text supervision teaches color/location concepts, action tokens link them to motion, and the continuous expert learns numerical trajectories. These are not three sequential deployment planners.

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/gradient-bridge">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/gradient-bridge.png" alt="Multimodal, discrete-action, and continuous-action co-training" loading="lazy" />
  <figcaption><strong>Multimodal, discrete-action, and continuous-action co-training.</strong> Source: the WALL-OSS-0.5 paper. Discrete-action cross-entropy supplies control-related supervision to the vision-language backbone; flow matching trains deployed continuous actions. Joint attention connects the token groups. Routing specialization and gradient connectivity are separate questions.</figcaption>
</figure>

## RVQ: More Than Trajectory Compression

Residual vector quantization assigns coarse motion structure to early codebooks and residual corrections to later ones. An observation-conditioned encoder compresses delta actions, and a state-conditioned decoder reconstructs them.

Visual-action alignment, next-frame prediction, and DCT-domain reconstruction additionally encourage semantic, consequence-aware, smooth codes. Continuous deployment can benefit from these discrete training representations even without directly decoding them into controls.

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/vision-aligned-rvq">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/vision-aligned-rvq.png" alt="Residual action quantization with visual-alignment objectives" loading="lazy" />
  <figcaption><strong>Residual action quantization with visual-alignment objectives.</strong> Source: the WALL-OSS-0.5 paper. Alongside action reconstruction, visual-action alignment and future-context feature prediction shape semantic codes. The feature predictor on the right does not directly synthesize future camera images.</figcaption>
</figure>

## Joint Training: Three Complementary Signals

Action and multimodal samples are mixed 9:1 with

$$
\mathcal L=\mathcal L_{\mathrm{flow}}+0.01\mathcal L_{\mathrm{act\text{-}CE}}+0.01\mathcal L_{\mathrm{mm\text{-}CE}}.
$$

Loss coefficients balance numerical scales, not percentages of capability. Unlike stop-gradient insulation, the report retains flow gradients into the VL backbone.

Pretraining spans more than twenty embodiments and over a million trajectories per epoch, alongside multimodal grounding. Goal- and step-level instructions, paraphrases, and state perturbations reduce dependence on a single wording or ideal proprioception.

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/teaching-gradient-bridge-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/wall-gradient-bridge-en-v2.png" alt="Forward information and backward gradients in block sorting" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>Forward information and backward gradients in block sorting.</strong> AI-generated teaching illustration. Solid arrows show forward information and dashed arrows show backpropagation paths. Action-token cross-entropy (CE) autoregressively predicts RVQ tokens and supplies the gradient bridge to the VL Expert; multimodal CE anchors grounding. Flow matching trains continuous actions with action-space supervision, and its gradients also reach the VL Expert through shared attention. Internal attention masks are omitted; deployment defaults to continuous actions.</figcaption>
</figure>

## Action-Space Supervision

The path and reconstructed action are

$$
\begin{aligned}
A^\tau &= \tau A+(1-\tau)\epsilon,\\
\hat A &= A^\tau+(1-\tau)f_\theta(A^\tau,\tau).
\end{aligned}
$$

The network predicts velocity, but loss compares reconstructed and clean actions. This equals a velocity error weighted by $(1-\tau)^2$. At $\tau=0.2$ the weight is 0.64; at 0.8 it is 0.04, a factor of 16. This teaching calculation explains the stronger emphasis on high-noise trajectory formation, not a guarantee that any smooth trajectory succeeds.

## The 26D Control Interface

Each arm contributes 3D relative position, 6D relative rotation, and one gripper channel: 20 dimensions for two arms. Base velocity adds three, lift one, and head actuation two. Rotation encoding width is distinct from physical degrees of freedom.

Deployment denoises continuous actions from observations, state, and language without decoding RVQ actions. The paper's one-second source-dependent horizon and the adapter's 32-step release configuration are separate settings.

## Experiments: Progress, Zero-Shot Behavior, and Adaptation

### Pretrained Behavior

The zero-shot suite contains twelve seen and five held-out tasks, scored by a predefined progress rubric over ten trajectories per task. At 400k, seen progress averages 50.0, held-out 53.6, and overall 51.1 out of 100.

Reaching and carrying without a successful final placement can earn partial progress but zero complete-task success. Thus 51.1 progress cannot be called 51.1% success. The seen/held-out groups also have unmatched difficulty.

### Matched Fine-Tuning Data

Fifteen real tasks use approximately 500 demonstrations each and matched evaluation:

| Model | Manipulation, 10 | Reasoning, 5 | Overall |
| --- | ---: | ---: | ---: |
| WALL-OSS-0.5 | 61.1 | 59.3 | 60.5 |
| π0.5 | 35.0 | 58.9 | 43.0 |
| DreamZero | 33.7 | 32.7 | 33.4 |

These are progress scores. The overall π0.5 gap is 17.5 points, but the reasoning gap is only 0.4. Object matching and fruit-basket placement still favor π0.5.

### Controlled Ablations

In the from-scratch ablation on five real tasks, co-training scores 57.00 progress versus 36.68 for flow-plus-multimodal training without action CE, 31.93 for stop-gradient, and 49.58 for a two-stage warm-up that first stops gradients and then switches to co-training. A separate four-task tokenizer study improves continuous-execution progress from 29.3 to 48.1 with RVQ. These subsets must remain separate from the fifteen-task main comparison.

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/bridge-ablation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/bridge-ablation.png" alt="Gradient and co-training ablations from scratch" loading="lazy" />
  <figcaption><strong>Gradient and co-training ablations from scratch.</strong> Source: the WALL-OSS-0.5 paper. Average progress across five physical tasks is 36.68 for flow only, 31.93 with stopped gradients, 49.58 for a two-stage warm-up that first stops gradients and then switches to co-training, and 57.00 for full co-training. These are progress scores, not full-task success rates.</figcaption>
</figure>

## LeRobot Integration and Training Boundaries

Version 0.7.0 supports continuous control and language generation/training. Narrower state/actions are normalized and padded to 26D; outputs are cropped before unnormalization. Padding does not convert joints into end-effector coordinates.

```bash
--policy.path=lerobot/wall-oss-0.5
--policy.device=cuda
--policy.dtype=bfloat16
```

These are loading fragments for target fine-tuning. Align `camera_key_mapping`, physical units, and statistics. The complete RVQ autoregressive action-training path is not exposed, so adapter fine-tuning is not reproduction of three-objective pretraining. New robot interfaces still require preparation and adaptation.

## Conclusion

WALL-OSS-0.5 uses discrete action supervision to shape a control-aware backbone while preserving multimodal knowledge and continuous action gradients. Action-space supervision emphasizes high-noise reconstruction. Task progress, complete success, original pretraining, and adapter functionality must remain distinct.

</div>
