---
description: Chapter 19 of the SO-ARM Physical AI Beginner's Course — what a robot embodiment is, how SO-ARM joints, state, action, and cameras are defined for GR00T, how the foundation-model-plus-fine-tuning paradigm works, and how the GR00T inference server and robot control client fit together.
title: Chapter 19 - Robot Embodiment and GR00T System Architecture
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - GR00T
  - Embodiment
  - VLA
  - LeRobot
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_19
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_19/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 4 · Chapter 19 · Theory</span>
    <h2>19. Robot Embodiment and GR00T System Architecture</h2>
    <p>
      Chapter 19 of the SO-ARM Physical AI Beginner's Course — what a robot embodiment is, how
      SO-ARM joints, state, action, and cameras are defined for GR00T, how the foundation-model-
      plus-fine-tuning paradigm works, and how the GR00T inference server and robot control
      client fit together.
    </p>
    <div className="hero-actions">
      <a href="#embodiment">Embodiment</a>
      <a href="#joints">Joints and state</a>
      <a href="#architecture">Architecture</a>
    </div>
  </div>
</section>

## 19.1 What Is a Robot Embodiment?

<section id="embodiment" className="section-card">
  <div className="section-title">
    <span>Embodiment</span>
    <h2>19.1 What Is a Robot Embodiment?</h2>
  </div>

"Embodiment" is how a robot physically exists: how many joints, which cameras, what gripper, what action space. A VLA foundation model is trained across **many** embodiments — different arms, humanoids, mobile manipulators — so it needs a way to tell "which body am I acting for right now?"

That way is the **embodiment tag**. When you fine-tune GR00T on SO-ARM data, the dataset carries the tag `new_embodiment`, which selects the correct input/output projection for a new single-arm embodiment. Together with a **data config** — for the SO-ARM's standard two-camera layout, `so100_dualcam` — this tells the model exactly what its body looks like.

:::note
The SO-ARM is one of the best-supported low-cost embodiments in the GR00T ecosystem: NVIDIA's official fine-tuning guide uses SO101 data, and the LeRobot `groot` policy path also works with SO-ARM datasets.
:::

</section>

## 19.2 SO-ARM Joints, State, and Action Definitions

<section id="joints" className="section-card">
  <div className="section-title">
    <span>Definitions</span>
    <h2>19.2 SO-ARM Joints, State, and Action Definitions</h2>
  </div>

### Joints and State

The SO-ARM's `observation.state` has 6 dimensions, in the fixed joint order stored in your dataset's metadata:

| Dim | Joint |
| :---: | :--- |
| 0 | shoulder pan |
| 1 | shoulder lift |
| 2 | elbow |
| 3 | wrist pitch |
| 4 | wrist roll |
| 5 | gripper |

### Action

`action` mirrors the same 6 dimensions: target positions for the next step(s). In `modality.json` (Chapter 20), the state/action group splits into `single_arm` (dims 0-4) and `gripper` (dim 5), because GR00T may process them through different heads.

</section>

## 19.3 Camera Modality

<section id="camera-modality" className="section-card">
  <div className="section-title">
    <span>Cameras</span>
    <h2>19.3 Camera Modality</h2>
  </div>

### Common camera layouts (SO-ARM)

The `so100_dualcam` data config expects two camera views — the standard SO-ARM layout used across the ecosystem:

| Key | View | Purpose |
| :--- | :--- | :--- |
| `front` (or `top`) | Overhead / front view covering the whole work area | Where is the object, where is Point B |
| `side` (or `wrist`) | Side view or gripper view | Height over the table, contact with the object |

### Notes

- Camera keys recorded in the dataset must reappear identically at inference.
- Two views are the sweet spot for GR00T on this arm; more cameras need a custom data config.

</section>

## 19.4 Language Modality

<section id="language-modality" className="section-card">
  <div className="section-title">
    <span>Language</span>
    <h2>19.4 Language Modality</h2>
  </div>

### Data side

Each episode carries a task description bound at record time (Chapter 12's `--dataset.single_task`) or backfilled into `meta/tasks.jsonl`. For GR00T, `modality.json` points at the annotation key `human.task_description` (Chapter 18's recommendation for SO-ARM data).

### Inference side

At deployment, the instruction is passed live — e.g. `--lang_instruction="Grab pens and place into pen holder."` in Chapter 21's client. Change the sentence, change the task; same weights.

</section>

## 19.5 Observation Window and Action Window

<section id="windows" className="section-card">
  <div className="section-title">
    <span>Windows</span>
    <h2>19.5 Observation Window and Action Window</h2>
  </div>

GR00T processes the **current** observation (images + state + language) and emits an **action chunk** covering a short future window (16 steps for N1.5). As with ACT in Chapter 14, only the first portion executes before re-observing — the same chunk/horizon trade-off, now inside a much bigger model.

</section>

## 19.6 Foundation Model and Fine-Tuning

<section id="foundation" className="section-card">
  <div className="section-title">
    <span>Paradigm</span>
    <h2>19.6 Foundation Model and Fine-Tuning</h2>
  </div>

### Foundation Model

A VLM backbone pretrained on internet-scale vision-language data plus large multi-robot datasets — it arrives already knowing "what objects are" and roughly "how manipulation looks." The pretrained GR00T N1.5-3B weights are on Hugging Face: `nvidia/GR00T-N1.5-3B`.

### Fine-Tuning

Your SO-ARM dataset adapts the foundation model to your table, your objects, your instruction phrasing:

- Full fine-tuning retrains more of the network (~25GB VRAM, Chapter 21);
- Partial fine-tuning (e.g. `--no-tune_diffusion_model`, freezes the DiT head) cuts VRAM and time, at some accuracy cost;
- LoRA / PEFT variants train small adapter layers only.

### Zero-Shot vs. Fine-Tuning

Zero-shot (no fine-tuning) sometimes "moves plausibly" but rarely completes your specific task reliably — your tabletop was never in the pretraining data. Fine-tuning on 50-100 local episodes is the expected path.

</section>

## 19.7 GR00T System Architecture

<section id="architecture" className="section-card">
  <div className="section-title">
    <span>Architecture</span>
    <h2>19.7 GR00T System Architecture</h2>
  </div>

### Internal model data flow (simplified)

```text
images (front, side) ─┐
state (6-dim) ────────┼─→ VLM backbone ─→ DiT action head ─→ action chunk (k × 6)
language ─────────────┘        (understanding)   (denoising)        (to the servos)
```

- The **VLM backbone** fuses the three modalities into a semantic understanding of the scene and instruction;
- The **DiT (Diffusion Transformer) head** repeatedly denoises a latent into a coherent continuous action chunk (Flow Matching);
- The chunk streams to the robot control side, which executes the first few steps and re-observes.

### GR00T Inference Server and Robot Control Client

For deployment, the NVIDIA Isaac-GR00T stack splits into two processes:

**Robot control client** — connects the SO-ARM and cameras, sends observations (images + state + language) to the server, receives action chunks, executes them on the servos. The official example is `examples/SO-100/eval_lerobot.py` — written for exactly this arm.

**GR00T inference server** — holds the model, runs on whatever GPU is available (a workstation, a cloud instance, or Jetson AGX Thor in its Docker image), and answers the client over the network.

```text
[ SO-ARM + cameras ] ⇄ USB ⇄ [ robot control client ] ⇄ network ⇄ [ GR00T inference server + GPU ]
```

### Integration Checklist

Before Chapter 21's hands-on, make sure you can answer:

1. Which embodiment tag? → `new_embodiment`
2. Which data config? → `so100_dualcam`
3. Which camera keys? → exactly the ones in your dataset
4. Which instruction phrasing? → exactly the ones annotated in your dataset

</section>

## 19.8 The SO-ARM's Position in GR00T

<section id="soarm-in-groot" className="section-card">
  <div className="section-title">
    <span>Position</span>
    <h2>19.8 The SO-ARM's Position in GR00T</h2>
  </div>

- A **low-cost, reproducible tabletop embodiment** — the same qualities that made it LeRobot's reference arm make it a fine-tuning target for GR00T;
- Supported through the **official SO101 fine-tuning recipe** (NVIDIA blog + Isaac-GR00T repo examples for SO-100);
- Deployable at the **edge** on Jetson AGX Thor for inference;
- And — Chapter 22 — reachable through the **no-code SenseCraft Robotics platform** for users who skip the GR00T toolchain entirely.

</section>

## 19.9 Chapter Summary

<section id="summary" className="section-card">
  <div className="section-title">
    <span>Summary</span>
    <h2>19.9 Chapter Summary</h2>
  </div>

- Embodiment = the robot's body definition; for SO-ARM in GR00T: tag `new_embodiment`, data config `so100_dualcam`.
- State/action are 6-dim in fixed joint order; two cameras + language complete the modality set.
- Foundation model + fine-tuning beats zero-shot for your specific table.
- Deployment splits into a robot control client (arms + cameras) and a GPU inference server.

Next chapter prepares your SO-ARM dataset for GR00T fine-tuning.

</section>

</div>
