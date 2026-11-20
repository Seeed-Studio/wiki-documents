---
description: "A deep dive into Cosmos 3: mechanisms, training, experiments, and LeRobot v0.7.0 integration scope."
title: "Cosmos 3: From Omnimodal World Modeling to Joint Video-Action Policies"
hide_title: true
keywords: ["Paper Deep-Dive","Cosmos 3","Omnimodal World Models","MoT","Joint Video-Action Prediction","LeRobot"]
slug: /robotics/paper_reading_cosmos3
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
    "value": "Prerequisites: Three Action Modes",
    "id": "prerequisites-three-action-modes",
    "level": 2
  },
  {
    "value": "Abstract and Reading Guide",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Architecture: Understanding and Generation Paths",
    "id": "architecture-understanding-and-generation-paths",
    "level": 2
  },
  {
    "value": "Actions: Shared Geometry with Domain-Specific Interfaces",
    "id": "actions-shared-geometry-with-domain-specific-interfaces",
    "level": 2
  },
  {
    "value": "Training: Three Uses of One Trajectory",
    "id": "training-three-uses-of-one-trajectory",
    "level": 2
  },
  {
    "value": "Closing the Loop",
    "id": "closing-the-loop",
    "level": 3
  },
  {
    "value": "Experiments: Instruction Specificity and Initialization",
    "id": "experiments-instruction-specificity-and-initialization",
    "level": 2
  },
  {
    "value": "RoboLab Instructions",
    "id": "robolab-instructions",
    "level": 3
  },
  {
    "value": "Adaptation to LIBERO-10",
    "id": "adaptation-to-libero-10",
    "level": 3
  },
  {
    "value": "Physical Preference Ratings",
    "id": "physical-preference-ratings",
    "level": 3
  },
  {
    "value": "LeRobot Integration: Match Size, Controls, and Recipe",
    "id": "lerobot-integration-match-size-controls-and-recipe",
    "level": 2
  },
  {
    "value": "Conclusion",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-cosmos3-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-cosmos3-title">Cosmos 3: From Omnimodal World Modeling to Joint Video-Action Policies</h1>
  <p className="paper-reading-lead">Cosmos 3: Omnimodal World Models for Physical AI</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-understanding-and-generation-paths">Multimodal architecture</a></li>
    <li><a href="#actions-shared-geometry-with-domain-specific-interfaces">Actions and training</a></li>
    <li><a href="#experiments-instruction-specificity-and-initialization">Experiments</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2606.02800v4" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Read the paper</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/cosmos3" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot Cosmos 3 Documentation ↗</a>

**LeRobot parameters**

- `--policy.type=cosmos3_nano` and `--policy.type=cosmos3_edge` select supported sizes.
- `--policy.path=lerobot/Cosmos3-Nano-Policy-LIBERO` loads a policy trained on all four LIBERO suites.
- `--policy.save_predicted_video=true` additionally decodes/saves predictions, adding visualization cost.
- Domain, camera canvas, real frame rate, and action representation are all model conditions.

</aside>

A robot puts a black bowl into a drawer and closes it. We can ask what a given action will do, which action explains a visual transition, or what action should achieve a goal. **Can one model learn all three by changing which parts of a trajectory are known?**

## Prerequisites: Three Action Modes

| Mode | Known | Predicted | Drawer example |
| --- | --- | --- | --- |
| Forward dynamics | Current view and actions | Future views | Where pulling moves the drawer |
| Inverse dynamics | Visual transition | Actions | How to turn closed into open |
| Policy | Current observation and goal | Actions and future views | Motion and expected outcome together |

A video of an opening drawer is not an executable robot command. Policy learning needs action supervision and a body-specific interface, with predictions corrected by real feedback.

<figure className="paper-reading-figure" data-reading-figure="cosmos3/teaching-three-conditioning-modes-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/cosmos-three-conditioning-modes-en-v2.png" alt="Three conditional prediction tasks for drawer opening" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>Three conditional prediction tasks for drawer opening.</strong> AI-generated teaching illustration. The columns show forward dynamics, inverse dynamics, and joint video-action prediction (policy), with different known inputs and prediction targets. They are alternative generation modes, not sequential execution stages. Visual scenes stand for video sequences; language and special-token conditioning are simplified.</figcaption>
</figure>

## Abstract and Reading Guide

**Abstract in brief.** Cosmos 3 unifies language, image, video, audio, and action in an MoT architecture combining autoregressive understanding with continuous generation. Clean/noisy token choices implement forward dynamics, inverse dynamics, and policy learning. Action mid-training supplies cross-domain priors before target post-training.

**Reading note.** This article focuses on robot-relevant mechanisms. Image/video quality rankings do not measure control success, and LeRobot's Nano/Edge adapter does not expose the entire omnimodal platform.

## Architecture: Understanding and Generation Paths

The causal understanding path processes text and optional ViT vision tokens. The generation path denoises continuous video, audio, and action tokens. Each layer has separate normalization, projections, and feed-forward parameters, with shared attention connecting context.

ViT features support understanding, while a frozen video VAE provides generative latents. This pathway-based MoT differs from sparse MoE routing that selects several feed-forward experts per token.

In policy mode, the current image is clean and future video/actions are noised and restored jointly. Prompts additionally describe frame rate, resolution, view layout, and idle frames to align visual and action time.

<figure className="paper-reading-figure" data-reading-figure="cosmos3/mot-architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/cosmos3/mot-architecture.png" alt="Attention routing between autoregressive understanding and diffusion generation" loading="lazy" />
  <figcaption><strong>Attention routing between autoregressive understanding and diffusion generation.</strong> Source: the official LeRobot documentation. Understanding uses causal self-attention; generation uses full attention and reads understanding context. The mask blocks understanding queries from generated tokens. Shared attention connects the computations without making their decoding rules identical.</figcaption>
</figure>

## Actions: Shared Geometry with Domain-Specific Interfaces

The report organizes actions around ego motion, effectors, and grasp states. Consecutive poses can define

$$
\Delta T_t=T_{t-1}^{-1}T_t.
$$

Translation and 6D rotation encode motion; grasp channels encode the current manipulation state. Domain-specific projections map each body's vectors into shared hidden dimensions.

Pretraining representations and target control formats can differ. DROID uses eight joint/gripper channels in the adapter recipe; LIBERO uses ten channels with 6D rotation, converted back to the simulator's seven-dimensional actions. Padding cannot substitute for these conversions.

<figure className="paper-reading-figure" data-reading-figure="cosmos3/action-representation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/cosmos3/action-representation.png" alt="Shared geometric components across embodiment-specific action vectors" loading="lazy" />
  <figcaption><strong>Shared geometric components across embodiment-specific action vectors.</strong> Source: the Cosmos 3 paper. Position, 6D rotation, and grasp components form vectors of different lengths, connected through domain-specific projections. Six rotation numbers do not imply six rotational degrees of freedom, and shared components do not make commands interchangeable.</figcaption>
</figure>

## Training: Three Uses of One Trajectory

For a drawer demonstration, forward dynamics keeps actions clean and predicts video. Inverse dynamics keeps visual transitions clean and predicts actions. Policy mode noises and predicts both.

General understanding/generation training precedes multi-domain action mid-training and target post-training. Action priors support adaptation, while target demonstrations align actual controls and scenes. General video generation alone does not create a deployable policy.

### Closing the Loop

Views compose into a fixed canvas. Clean current latents condition joint sampling of future video and actions. The robot executes a segment and then observes again. Video decoding is optional for inspection.

If the model imagines the bowl inside the drawer but the gripper drops it, the next call must use the real bowl position. Joint prediction links motion to expected consequences without guaranteeing their physical correctness.

## Experiments: Instruction Specificity and Initialization

### RoboLab Instructions

The report evaluates 120 tasks with ten trials each:

| Model | Vague | Default | Specific |
| --- | ---: | ---: | ---: |
| Cosmos3-Nano, action-mid-trained initialization | 20.6% | 36.8% | 39.7% |
| Cosmos3-Nano, general-pretrained initialization | 16.7% | 28.1% | 30.2% |
| π0.5 | 15.2% | 28.0% | 28.1% |

These are success rates under different instruction conditions. The 36.8% and 39.7% figures are not interchangeable, and vague requests remain substantially harder.

### Adaptation to LIBERO-10

Fifty trials for each of ten tasks give 500 rollouts per checkpoint:

| Updates | MT-init | PT-init |
| --- | ---: | ---: |
| 500 | 24.6% | 0.0% |
| 1,000 | 91.4% | 73.8% |
| 2,000 | 97.4% | 95.2% |

The larger early gap supports faster adaptation from action mid-training. The narrowing gap does not imply that general-pretrained initialization can never learn.

### Physical Preference Ratings

RoboArena aggregates blinded pairwise comparisons. The report records a leading rating on May 30, 2026. A preference rating is neither a fixed-suite success percentage nor a claim about today's ranking.

## LeRobot Integration: Match Size, Controls, and Recipe

Version 0.7.0 supports approximately 16.5B Nano and 4.6B Edge implementations, training mainly the generation path and action modules by default. Base, DROID, four-suite LIBERO, and LIBERO-10-only checkpoints serve different purposes.

The documented four-suite Nano/Edge results average 97.90%/97.95%, with 500 episodes per suite. The LIBERO-10-only Nano checkpoint scores 97.6%; the report's MT-init at 2,000 updates scores 97.4%. Different training sets, implementations, and weights must retain separate labels.

```bash
--policy.path=lerobot/Cosmos3-Nano-Policy-LIBERO
--policy.dtype=bfloat16
--env.type=libero
--env.task=libero_spatial,libero_object,libero_goal,libero_10
--env.observation_height=256
--env.observation_width=256
```

These evaluation fragments require the remaining versioned evaluation settings. New datasets need correct frame rates, view descriptions, statistics, and domain identifiers. With state conditioning, state/action channels must have matching widths and semantics. Data/environment processors perform physical conversions.

When adapting a base, `load_action_modules=false` can initialize target modules; evaluation must load the trained modules. EMA-based recipes require the corresponding EMA checkpoint. These are integration instructions, not evidence of a benchmark run on the current machine.

## Conclusion

Cosmos 3 learns several conditional relationships between visual change and actions in a unified architecture. Action mid-training supplies reusable adaptation priors. Interpreting the policy requires separating its three modes, body-specific representations, instruction conditions, and post-training protocols.

</div>
