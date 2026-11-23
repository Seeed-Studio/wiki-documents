---
description: "A deep dive into MolmoAct2: mechanisms, training, experiments, and LeRobot v0.7.0 integration scope."
title: "MolmoAct2: From Discrete Action Learning to Layer-Wise Continuous Control"
hide_title: true
keywords: ["Paper Deep-Dive","MolmoAct2","VLA","Layer-Wise KV","Action Tokenization","Continuous Control","LeRobot"]
slug: /robotics/paper_reading_molmoact2
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
    "value": "Prerequisites: Two Representations of One Demonstration",
    "id": "prerequisites-two-representations-of-one-demonstration",
    "level": 2
  },
  {
    "value": "Abstract and Reading Guide",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Why Introduce Actions in Stages",
    "id": "why-introduce-actions-in-stages",
    "level": 2
  },
  {
    "value": "Data: Shared Duration, Distinct Control Semantics",
    "id": "data-shared-duration-distinct-control-semantics",
    "level": 2
  },
  {
    "value": "Discrete Pretraining: Teaching the Backbone Robot Actions",
    "id": "discrete-pretraining-teaching-the-backbone-robot-actions",
    "level": 2
  },
  {
    "value": "Continuous Post-Training: Reading KV at Every Layer",
    "id": "continuous-post-training-reading-kv-at-every-layer",
    "level": 2
  },
  {
    "value": "Preventing Target Leakage and Controlling Gradients",
    "id": "preventing-target-leakage-and-controlling-gradients",
    "level": 3
  },
  {
    "value": "Think: Updating Only Changed Depth Regions",
    "id": "think-updating-only-changed-depth-regions",
    "level": 2
  },
  {
    "value": "Experiments: Comparing Checkpoints with Different Training Histories",
    "id": "experiments-comparing-checkpoints-with-different-training-histories",
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

<section className="paper-reading-intro" aria-labelledby="paper-reading-molmoact2-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-molmoact2-title">MolmoAct2: From Discrete Action Learning to Layer-Wise Continuous Control</h1>
  <p className="paper-reading-lead">MolmoAct2: Action Reasoning Models for Real-world Deployment</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#discrete-pretraining-teaching-the-backbone-robot-actions">Discrete to continuous</a></li>
    <li><a href="#continuous-post-training-reading-kv-at-every-layer">Layer-wise KV</a></li>
    <li><a href="#think-updating-only-changed-depth-regions">Adaptive depth</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2605.02881v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Read the paper</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/molmoact2" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot MolmoAct2 Documentation ↗</a>

**LeRobot parameters**

- `--policy.type=molmoact2 --policy.checkpoint_path=allenai/MolmoAct2` initializes from the authors' format.
- `--policy.path=allenai/MolmoAct2-LIBERO-LeRobot` loads a saved LeRobot checkpoint and processors.
- LIBERO uses `--policy.chunk_size=10 --policy.n_action_steps=10` with relative end-effector control.
- The adapter supports standard MolmoAct2, not the adaptive-depth MolmoAct2-Think variant.

</aside>

A robot must put the cup nearest a bowl into it. Understanding the spatial relation and producing precise movement are different requirements. **How can a continuous controller reliably use the knowledge already present in a vision-language backbone?**

## Prerequisites: Two Representations of One Demonstration

Discrete action tokens let a language model learn trajectories through next-token prediction. Continuous actions retain numerical control values for flow matching. They can supervise the same demonstration without becoming sequential deployment controllers.

Attention keys and values, or KV, encode context at each layer. Reading them throughout the network gives an action expert access to more than one final pooled feature.

## Abstract and Reading Guide

**Abstract in brief.** MolmoAct2 strengthens embodied understanding, learns a discrete robot interface, and then adds a continuous flow expert. It releases multi-embodiment data, an action tokenizer, code, and models, and studies a depth-reasoning variant that reuses unchanged spatial regions.

**Reading note.** Standard MolmoAct2 and Think are different inference paths. The latter's intermediate depth generation is not a capability of every checkpoint or of the versioned LeRobot adapter.

## Why Introduce Actions in Stages

Jointly fitting a new state interface, action encoding, and random continuous expert is a difficult optimization problem. Discrete pretraining first makes the VLM action-aware using its familiar objective. The later expert can then learn continuous control from a robot-aware backbone.

Per-layer KV differs from final-layer conditioning. Knowledge insulation also depends on the stage: post-training and embodiment-specific fine-tuning use different gradient settings.

## Data: Shared Duration, Distinct Control Semantics

The main robot sources are bimanual YAM, SO-100/101, and DROID, supplemented by smaller robot datasets and multimodal examples. Spatial QA, pointing, multi-view correspondence, and video understanding provide embodied grounding.

Action chunks cover one second: 30 steps for 30 Hz YAM/SO-100/101, 15 for DROID, and 10 for the paper's 10 Hz LIBERO setup. Actions are padded to width 32, with masks excluding artificial dimensions and time steps. Setup/control strings distinguish absolute joints from relative end-effector poses; padding does not make their physical meanings interchangeable.

## Discrete Pretraining: Teaching the Backbone Robot Actions

The FAST-style tokenizer transforms trajectories into the frequency domain, quantizes coefficients, and applies BPE with a 2,048-token action vocabulary. Continuous channels use percentile statistics, grippers receive separate handling, and discretized state enters the prompt.

The VLM reads observations, instructions, setup/control descriptions, and state, then predicts action tokens. This stage has no continuous expert. Multimodal co-training helps preserve broader visual-language competence.

## Continuous Post-Training: Reading KV at Every Layer

The 36-layer DiT expert matches the backbone depth. Its blocks apply action self-attention, cross-attention to projected KV from the corresponding VLM layer, and a feed-forward transformation.

| Path | Role in the cup task |
| --- | --- |
| Images, language, state → VLM | Represent the target cup, bowl, and robot |
| Layer KV → projection → cross-attention | Supply context throughout action generation |
| Noisy actions → flow expert | Coordinate the trajectory over time |
| Actions → postprocessor | Restore control units |

For demonstration chunk $A$ and noise $\epsilon$,

$$
X_t=(1-t)\epsilon+tA,\qquad u^\star=A-\epsilon.
$$

Masked flow loss trains the velocity predictor. In a teaching example with target 0.6 and noise −0.2, the midpoint is 0.2 and target velocity is 0.8. This is velocity along the normalized generative path, not a motor-speed command.

<figure className="paper-reading-figure" data-reading-figure="molmoact2/layerwise-kv">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/molmoact2/layerwise-kv.png" alt="Layer-wise backbone KV conditioning of the action expert" loading="lazy" />
  <figcaption><strong>Layer-wise backbone KV conditioning of the action expert.</strong> Source: the MolmoAct2 paper. Each expert layer reads projected backbone keys and values. Discrete supervision and continuous flow matching serve different roles; target action tokens are masked from the continuous conditioning path to prevent leakage.</figcaption>
</figure>

### Preventing Target Leakage and Controlling Gradients

Post-training supervises both discrete and continuous outputs, but masks ground-truth action tokens from the expert's context. Otherwise the controller could learn from answers unavailable at deployment.

Post-training detaches KV: flow loss trains the expert and adapters, while next-token loss trains the VLM. Embodiment-specific fine-tuning removes that insulation and allows flow gradients into the backbone. The VLM is therefore not frozen throughout the pipeline.

## Think: Updating Only Changed Depth Regions

Think generates a 10×10 depth-token grid before actions. The first query fills all 100 positions. Later queries compare current and previous RGB regions, regenerate changed cells, and replay cached codes for unchanged cells.

The filled depth prefix conditions the expert through KV. Moving cups and grippers can trigger updates while static background is reused. These are predicted depth codes, not guaranteed sensor measurements, and change detection can still fail.

<figure className="paper-reading-figure" data-reading-figure="molmoact2/adaptive-depth">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/molmoact2/adaptive-depth.png" alt="Adaptive depth reasoning with reuse of static regions" loading="lazy" />
  <figcaption><strong>Adaptive depth reasoning with reuse of static regions.</strong> Source: the MolmoAct2 paper. Depth codes are updated where observations change before conditioning actions through KV connections. This depicts the Think variant; the ordinary policy and LeRobot integration do not automatically perform this reasoning.</figcaption>
</figure>

## Experiments: Comparing Checkpoints with Different Training Histories

The versioned LeRobot result starts from the authors' LIBERO checkpoint and performs another 10k fine-tuning steps on eight H100 GPUs with batch 32 per GPU.

| LIBERO suite | Original result | Additionally trained LeRobot checkpoint |
| --- | ---: | ---: |
| Spatial | 97.8% | 98.4% |
| Object | 100.0% | 100.0% |
| Goal | 97.8% | 98.0% |
| Long / 10 | 93.2% | 96.6% |
| Mean | 97.20% | 98.25% |

These are complete-task success rates. The 1.05-point difference cannot be attributed to format conversion alone because training changed. The largest difference occurs on the long suite.

Embodied QA, depth reasoning, and closed-loop actions test different capabilities. Correct target identification does not guarantee a successful grasp, and Think's geometry-generation cost must be measured separately from ordinary action inference.

## LeRobot Integration and Result Boundaries

Version 0.7.0 supports standard training and evaluation. Use `checkpoint_path` for original HF weights and `policy.path` for saved LeRobot policy directories.

For LIBERO, match the released `norm_stats.json`, camera order, augmentation, gripper handling, and control mode. Approximate dataset quantiles are not identical to the authors' statistics. SO-100/101 joint signs and zero offsets also require a physical frame conversion; padding cannot perform it.

```bash
--policy.type=molmoact2
--policy.checkpoint_path=allenai/MolmoAct2
--policy.action_mode=continuous
--policy.norm_tag=libero
--policy.chunk_size=10
--policy.n_action_steps=10
```

These are training fragments requiring the matching data, statistics, and image settings. Study Think through the authors' implementation; the ordinary policy name does not enable it in this version.

## Conclusion

MolmoAct2 first establishes a discrete robot interface, then transfers visual-language context to continuous actions through layer-wise KV. Target masking and stage-specific gradients explain how it learns. Deployment must distinguish standard versus Think models and original versus additionally trained adapter checkpoints.

</div>
