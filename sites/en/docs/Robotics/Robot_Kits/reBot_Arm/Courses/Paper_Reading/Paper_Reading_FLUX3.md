---
description: 'A deep dive into FLUX 3 Action: mechanisms, training, experiments, and LeRobot v0.7.0 integration scope.'
title: 'FLUX 3 Action: Balancing Joint Video-Action Prediction and Runtime Cost'
hide_title: true
keywords:
  - Paper Deep-Dive
  - FLUX 3 Action
  - World-Action Models
  - Joint Video-Action Prediction
  - Distillation
  - Real-Time Control
  - LeRobot
slug: /robotics/paper_reading_flux3
displayed_sidebar: PaperReadingSidebar
last_update:
  date: 2026-11-20
  author: liujunjie
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/robotics/paper_reading_flux3/
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Prerequisites: Latency and Real-Time Factor",
    "id": "prerequisites-latency-and-real-time-factor",
    "level": 2
  },
  {
    "value": "Report Claims and Reading Guide",
    "id": "report-claims-and-reading-guide",
    "level": 2
  },
  {
    "value": "Architecture: Connecting Motion and Visual Consequences",
    "id": "architecture-connecting-motion-and-visual-consequences",
    "level": 2
  },
  {
    "value": "Data and Embodiment Interfaces",
    "id": "data-and-embodiment-interfaces",
    "level": 2
  },
  {
    "value": "Training: Beyond a Joint Objective",
    "id": "training-beyond-a-joint-objective",
    "level": 2
  },
  {
    "value": "Split Guidance",
    "id": "split-guidance",
    "level": 3
  },
  {
    "value": "Weight Averaging and Distillation",
    "id": "weight-averaging-and-distillation",
    "level": 3
  },
  {
    "value": "Experiments: Keep Checkpoints and Protocols Attached",
    "id": "experiments-keep-checkpoints-and-protocols-attached",
    "level": 2
  },
  {
    "value": "Simulation and Efficiency",
    "id": "simulation-and-efficiency",
    "level": 3
  },
  {
    "value": "Physical Evaluation",
    "id": "physical-evaluation",
    "level": 3
  },
  {
    "value": "LeRobot Integration: Preserve Saved Conditions",
    "id": "lerobot-integration-preserve-saved-conditions",
    "level": 2
  },
  {
    "value": "Conclusion",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-flux3-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-flux3-title">FLUX 3 Action: Balancing Joint Video-Action Prediction and Runtime Cost</h1>
  <p className="paper-reading-lead">FLUX 3 Action</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-connecting-motion-and-visual-consequences">Joint video and actions</a></li>
    <li><a href="#training-beyond-a-joint-objective">Training and distillation</a></li>
    <li><a href="#experiments-keep-checkpoints-and-protocols-attached">Experiments</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://bfl.ai/models/flux-3-action" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">Report</span><span>Read the report</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/flux3" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot FLUX 3 Action Documentation ↗</a>

**LeRobot parameters**

- `--policy.path=black-forest-labs/flux-3-action-so101` loads an SO-101-adapted checkpoint.
- `--config_path=examples/flux3/lora.json` selects the versioned task-adaptation recipe.
- The SO-101 release predicts 42 actions and executes 32 at 30 Hz using `scene`/`wrist` cameras.
- The adapter supports inference and PEFT task adaptation; use the standalone author repository for new embodiments and full fine-tuning.

</aside>

A robot places a blue box into a container. A joint world-action model predicts both arm movement and its visual result, but video generation adds computation. **Can training recipes and distillation preserve useful joint prediction while reducing execution cost?**

## Prerequisites: Latency and Real-Time Factor

Latency measures one query. Real-time factor compares its processing cost with the motion it predicts:

$$
\mathrm{RTF}=\frac{\text{processing time}}{\text{predicted motion duration}}.
$$

In a teaching example, 0.4 seconds of computation for two seconds of motion gives RTF 0.2, while 0.25 seconds for one second gives 0.25. The first has better per-motion cost but slower immediate response. Dynamic replanning depends on that difference.

## Report Claims and Reading Guide

**Report overview.** The approximately 7B model starts from video-heavy multimodal pretraining, continues with action mid-training, and adapts to target bodies. It jointly predicts future video latents and continuous actions. The report studies action formats, noise schedules, split guidance, weight averaging, and distillation.

**Reading note.** Base, guidance-distilled, and single-step checkpoints have different accuracy and speed. Their best numbers cannot be combined into one configuration.

## Architecture: Connecting Motion and Visual Consequences

A frozen video VAE encodes observations and a frozen text encoder supplies instructions. The Transformer denoises video and action representations together. Paired future observations/actions supervise training; current observations and language condition deployment.

| Control stage | Box-placement example |
| --- | --- |
| Observe | Locate the box, container, and gripper |
| Joint denoising | Predict motion and expected visual changes |
| Postprocess | Restore the body's control convention |
| Execute | Consume part of the action chunk |
| Observe again | Respond to actual grasp and placement outcomes |

Skipping RGB decoding still leaves future-latent prediction in the model. It differs from Fast-WAM's removal of future-video tokens at inference.

<figure className="paper-reading-figure" data-reading-figure="flux3/joint-architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/flux3/joint-architecture.svg" alt="Joint video-action prediction in a shared backbone" loading="lazy" />
  <figcaption><strong>Joint video-action prediction in a shared backbone.</strong> Source: the official Black Forest Labs report. Task, visual history, and state condition shared layers carrying future and action features, which are decoded separately. Distillation changes sampling cost while retaining this joint-prediction structure.</figcaption>
</figure>

## Data and Embodiment Interfaces

Video accounts for over 95% of pretraining tokens. Action mid-training adds gameplay, egocentric hands, handheld grippers, and teleoperation while retaining multimodal data. Sample ratios and token ratios represent different budgets.

Most pose data uses EE50: 25 channels per primary/secondary effector, including position, 6D rotation, and hand/gripper values, with unused dimensions padded. Some data instead uses joint-space heads. The SO-101 adapter uses six absolute joint/gripper commands with matching measured-state order and units; it does not execute the first six EE50 values.

## Training: Beyond a Joint Objective

Video and actions have different signal/noise structure. The report measures reconstruction behavior and adjusts training-time distributions rather than assuming identical difficulty at the same nominal noise level.

DROID studies also vary action representation and batch size. Larger-batch joint fine-tuning eventually exceeds end-effector fine-tuning, while existing end-effector heads can help at smaller budgets. Falling training loss does not guarantee improving closed-loop success.

### Split Guidance

Classifier-free guidance strengthens the difference between conditioned and unconditioned predictions. Video and action guidance can be set independently. In the report's sweep, video guidance 4 and action guidance 1 outperform increasing both indiscriminately. This is an empirical setting for this model, not a universal WAM constant.

<figure className="paper-reading-figure" data-reading-figure="flux3/split-guidance">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/flux3/split-guidance.svg" alt="Joint sweep of video and action guidance scales" loading="lazy" />
  <figcaption><strong>Joint sweep of video and action guidance scales.</strong> Source: the official Black Forest Labs report. Action CFG is horizontal and video CFG vertical. This full RoboLab-120 sweep peaks at 42.00% with video 4 and action 1. Maximizing both is not best, and this sweep is separate from multi-seed results for distilled checkpoints.</figcaption>
</figure>

### Weight Averaging and Distillation

EMA smooths weights across training updates. In the DROID comparison, raw weights score 36.50% and the selected online Power EMA reaches 42.00%. The SO-101 integration reports mixed EMA benefits, requiring matched evaluation.

Guidance distillation teaches a student the guided teacher prediction, avoiding repeated conditional/unconditional computation. Step distillation then approximates multi-step sampling in one update, increasing speed with an accuracy cost.

## Experiments: Keep Checkpoints and Protocols Attached

### Simulation and Efficiency

The report gives approximately 38.3% RoboLab-120 success for the single-step checkpoint and 42.2% for guidance distillation. The faster variant is not the highest-scoring variant. RTF advantages over π0.5 depend on precision and GPU class; consumer GPUs do not automatically share the workstation/datacenter result.

The authors' release article separately lists 42.92%. That publication record is not substituted for every report configuration.

### Physical Evaluation

Positronic evaluates ten DROID tasks on Franka with three trials each, a 240-second limit, matched conditions, and a blinded operator. FLUX completes 28/30. This small protocol does not establish approximately 93% success in every environment.

SO-101 demonstrations show changed objects, containers, and camera placements. Successful clips illustrate behavior but cannot establish a generalization success rate without trial counts and a matching protocol.

## LeRobot Integration: Preserve Saved Conditions

The v0.7.0 SO-101 checkpoint carries historical state/action conditions, eight observation ticks, and two separately encoded visual snapshots. It predicts 42 actions and executes 32 before replanning, separate from the report's approximately 2.13-second evaluation variants.

```bash
lerobot-train \
  --config_path=examples/flux3/lora.json \
  --policy.path=black-forest-labs/flux-3-action-so101 \
  --dataset.repo_id=YOUR_ORG/YOUR_SO101_DATASET \
  --output_dir=outputs/so101_lora
```

Replace the dataset placeholder. LoRA adapts the trunk while action/conditioning heads train in full and are saved. Use matching `observation.images.scene` and `observation.images.wrist` keys, or the same rename map in training and rollout. Call the policy every control tick to keep history current.

Installation requires compatible PyTorch, CUDA, and NATTEN builds. Changing history, guidance, sampling, or distillation changes the experimental configuration even when the policy type remains the same.

## Conclusion

FLUX 3 Action retains joint video/action prediction while adjusting data, action formats, guidance, averaging, and distillation. Meaningful evaluation considers prediction duration, query time, execution length, and checkpoint identity together.

</div>
