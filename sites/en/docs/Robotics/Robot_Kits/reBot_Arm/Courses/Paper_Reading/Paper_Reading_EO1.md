---
description: "A deep dive into EO-1's shared backbone, interleaved vision-text-action learning, embodied reasoning data, and robot-control experiments."
title: "EO-1 — Interleaved Multimodal Pre-Training"
hide_title: true
keywords:
  - Paper Deep-Dive
  - eo1
  - Robot Learning
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Physical AI
  - Course
  - Tutorial
  - SO101
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Arm
  - Robotics
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_eo1
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/robotics/paper_reading_eo1/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-eo1-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-eo1-title">EO-1 — Interleaved Multimodal Pre-Training</h1>
  <p className="paper-reading-lead">EO-1: An Open Unified Embodied Foundation Model for General Robot Control</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Unified Physical AI model</li>
    <li>Interleaved learning</li>
    <li>Embodied reasoning</li>
    <li>Robot control</li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2508.21112" target="_blank" rel="noopener noreferrer" aria-label="Read the EO-1 paper on arXiv">
    <span className="paper-reading-source-tag">arXiv</span>
    <span>Read the paper</span>
    <span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

## Prerequisites: Inputs and Outputs
**Explanation:** Imitation learning learns how to move from recorded human operation. A VLA adds language understanding and typically takes images, task text, and robot state as inputs.

For “put the tomato in the shopping bag,” images locate the objects, state describes the arm, text defines the goal, and actions control grasping and placement. EO-1 can also answer “what next?” and “is it finished?”, connecting judgments before and after actions.

| Concept | Meaning here |
|---|---|
| Observation | Multi-view images and robot state; fresh images come from cameras. |
| State | Low-dimensional robot values, such as joints; dimensions vary by platform. |
| Action | Continuous controls with platform- and dataset-dependent physical meanings. |
| Action chunk | Multiple future actions predicted together; EO-1 uses 16 steps. |
| Embodied reasoning | Judgments about objects, space, progress, and physical interaction. |

Single-step prediction is `current observation → aₜ`; chunking is `current observation → [aₜ, aₜ₊₁, …, aₜ₊₁₅]`. **Illustration:** one action dimension could have `[0.1, 0.12, 0.15]`; actual EO-1 outputs multidimensional 16-step arrays.

Action chunks let the model jointly arrange a segment of motion, but chunk length is not the model-call interval. The paper does not give a shared execution fraction, replanning rate, or control rate for every platform, so model calls per second cannot be inferred from chunk length.

---

## Abstract: Translation and Commentary
### Translation
People naturally alternate multimodal reasoning and physical interaction in the open world. VLAs have advanced generalist control through robot and image-text co-training, but remain less flexible in connecting reasoning with interaction.

EO-Robotics comprises EO-1 and EO-Data1.5M. EO-1 learns embodied reasoning and control through interleaved vision-text-action pre-training. It combines an architecture accepting images, text, video, and actions with over 1.5 million high-quality embodied-reasoning samples emphasizing interleaved understanding.

EO-1 is trained on EO-Data1.5M using autoregressive decoding and flow-matching denoising to connect robot action generation with multimodal embodied reasoning. Extensive experiments across robot embodiments and long-horizon, dexterous manipulation tasks validate interleaved learning for open-world understanding and generalization. The paper describes the architecture, data construction, and training methods as a reference for embodied foundation models.

### Commentary
- **The connection between reasoning and actions changes.** Beyond generating actions from an image and instruction, the model learns to reassess after actions using new images.

- **Architecture and data are both necessary.** The network must support text and continuous actions, and examples must connect them over time.

- **Over 1.5 million refers to the overall dataset.** Not all samples contain full interleaved actions; the text separately reports about 122,000 interleaved vision-text-action examples.

- **Effectiveness is bounded by the experiments.** Multi-platform results do not establish human-level or arbitrary-scene generality.

---

## Introduction and Related Work: Why Interleave?
### The Introduction's Seven Main Paragraphs
![EO-1 Paper Deep-Dive: 3.1 The Introduction's Seven Main Paragraphs (image-12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-12-en.png)

![EO-1 Paper Deep-Dive: 3.1 The Introduction's Seven Main Paragraphs (image-08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-08-en.png)

![EO-1 Paper Deep-Dive: 3.1 The Introduction's Seven Main Paragraphs (image-18)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-18-en.png)

![EO-1 Paper Deep-Dive: 3.1 The Introduction's Seven Main Paragraphs (image-01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-01-en.png)

![EO-1 Paper Deep-Dive: 3.1 The Introduction's Seven Main Paragraphs (image-11)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-11-en.png)

![EO-1 Paper Deep-Dive: 3.1 The Introduction's Seven Main Paragraphs (image-04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-04-en.png)

![EO-1 Paper Deep-Dive: 3.1 The Introduction's Seven Main Paragraphs (image-15)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-15-en.png)

### Relationship to Earlier Work
![EO-1 Paper Deep-Dive: 3.2 Relationship to Earlier Work (image-17)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-17-en.png)

---

## Core Method: One Backbone, Two Outputs
### Shared Processing with Modality-Specific Interfaces
Text addresses what and why, while actions specify motion. Both depend on the same objects, goals, and progress. EO-1 shares a pre-trained backbone to reduce separation between planning and control.

![EO-1 Paper Deep-Dive: 4.1 Shared Processing with Modality-Specific Interfaces (image-05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-05.png)

**Paper:** A decoder-only Transformer initialized from Qwen2.5-VL retains the visual encoder for images/video and tokenizer for text. State and noisy actions are projected into the shared feature space.

Tokens are sequence elements, not necessarily discrete words. Visual, state, and action tokens can be continuous feature vectors.

| Raw input | Encoding | Backbone representation |
|---|---|---|
| Multi-view images and video frames | Pre-trained visual encoder | Visual sequence of width `D`. |
| Instructions and reasoning QA | Tokenizer and embedding layer | Text sequence of width `D`. |
| State `qₜ` | State projection | Map `d_q` state dimensions to width `D`. |
| Noisy chunk `Xτ` and progress `τ` | Action-input projection | Action sequence of width `D`. |

`D` is backbone width and `d_q` platform state dimension. State/action dimensions and complete token counts are not uniformly specified across platforms, so symbols are retained.

Outputs branch into an **LM head**, predicting text tokens, and a **flow head**, mapping hidden features to continuous action updates. The final chunk is `16 × d_a`, with platform-specific action dimension `d_a`.

**Shape example:** For a hypothetical 7D interface, output is `16 × 7`, or 112 values. This is not a universal configuration. A projection maps width `D` back to `d_a`; the widths are not directly added.

**Caution:** “No additional action-specific parameters” should be read as no separate action-expert backbone. State/action projections and output heads still contain parameters.

### Generate Text Sequentially, Denoise Actions as a Chunk
Autoregression predicts the next text token from the existing context:

![EO-1 Paper Deep-Dive: 4.2 Generate Text Sequentially, Denoise Actions as a Chunk (image-00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-00.png)

`w_j` is token `j`, and `c_j` its preceding multimodal context. **Example:** after “next, pick up,” the model predicts “the tomato,” using previous images and action history as well.

Actions use flow matching: repeatedly predict how to update a random array toward a complete trajectory, rather than spelling out controls as text.

Training mixes true actions and Gaussian noise:

![EO-1 Paper Deep-Dive: 4.2 Generate Text Sequentially, Denoise Actions as a Chunk (image-06)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-06.png)

`A` and standard Gaussian `Z` both have shape `16 × d_a`. `τ∈[0,1]` is internal denoising progress, not seconds. Zero gives noise, one gives data; the paper samples from a Beta distribution emphasizing noisier stages.

**Minimal example:** For one element, `A=0.6`, `Z=−0.2`, and `τ=0.5` give `Xτ=0.2`: an intermediate value rather than the full answer.

**Training objective, preserving Equation (2):**

![EO-1 Paper Deep-Dive: 4.2 Generate Text Sequentially, Denoise Actions as a Chunk (image-16)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-16.png)

`Vθ` is the update field predicted by the shared model and flow head, `θ` trainable parameters, and `C` preceding multimodal context. The norm compares full arrays, and expectation averages sampled progress. `L_AR` is text cross-entropy; both terms have weight one. The example's written action target is `Z−A=−0.8`.

**Inference, preserving Equation (1):**

![EO-1 Paper Deep-Dive: 4.2 Generate Text Sequentially, Denoise Actions as a Chunk (image-13)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-13.png)

`Âτ` is the estimate initialized from fresh noise; `δ` is an integration step. The text integrates from zero to one and uses ten updates. **Illustration:** ten equal updates would give `δ=0.1`, an internal step rather than an execution period.

**Caution: the written directions are inconsistent.** The linear path's derivative is `A−Z`, but Equation (2) uses `Z−A` and Equation (1) a positive update. Taken literally together, they do not align: the example's forward direction is `0.8` but the written target is `−0.8`. The equations are retained; reproduction must check the implementation's time/sign convention rather than conclude that actual training is wrong.

### Interleaved Sequences: Reason Again after Acting
A standard action example can be written as:

```text
Image → Task text → State → Action chunk
```

EO-1 also learns this temporal structure:

```text
Current image → Planning QA → State → Action chunk
→ New image → Completion QA → Next-step planning → Next chunk
```

**Paper:** Each modality has boundary markers, including `[BOI]/[EOI]` for images, `[BOR]/[EOR]` for state, and `[BOA]/[EOA]` for actions. Causal attention conditions on preceding context rather than future answers.

**Example:** After attempting to bag a tomato, a new image may show it still in the gripper. The model can judge placement incomplete and generate more actions. This illustrates feedback structure, not a guarantee of reliable recovery.

EO-1 generates text and actions, not future camera images or state. The environment supplies new observations. Interleaving also does not require a verbal answer before every control point.

### Interleaved Rectifying Sampling: Clean History, Noisy Current Actions
Training the current action requires noise, but later text should condition on completed actions. Keeping past actions noisy creates a mismatch with executed history.

![EO-1 Paper Deep-Dive: 4.4 Interleaved Rectifying Sampling: Clean History, Noisy Current Actions (image-03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-03.png)

**Paper:** Interleaved rectifying sampling splits a sequence with `N` action segments into `N+1` training prefixes at action boundaries. Historical actions are clean; the action currently being generated is noisy.

**Minimal example:** A sequence with two actions:

```text
Image₁ / Text₁ → Action₁ → Image₂ / Text₂ → Action₂ → Image₃ / Text₃
```

For `N=2`, construct three prefixes:

| Sample | Context and target |
|---|---|
| Sample1 | Image₁ / Text₁ → Noisy action₁; train action₁ denoising. |
| Sample2 | Image₁ / Text₁ → Clean action₁ → Image₂ / Text₂ → Noisy action₂; train subsequent text and action₂. |
| Sample3 | Both actions are clean history; learn final text₃. |

Actions receive denoising supervision when generated and contribute gradients as clean context for later predictions. The model learns both action generation and reasoning from action history.

**Limits and cost:** Reprocessing prefixes adds computation that is not separately measured; there is no isolated removal ablation. Clean training history comes from recordings, while deployment history may include model errors. Rectifying sampling does not remove that mismatch and is not ACT temporal ensembling or action smoothing.

### Full Training and Inference
**Training:** image-text sources, robot records, and interleaved examples → encode modalities → noise current actions, keep history clean → shared backbone → text cross-entropy and flow loss → joint updates. QA-only samples provide text supervision without invented actions.

**Inference:** images, instruction, state, and history → generate needed text → refine new noise through ten updates into a 16-step chunk → execute → add new observations to context. KV caching reuses context computation; it does not replace re-observation.

The implementation reports five pre-training epochs, average packed length 16,384, and batch size one. Language/multimodal projection learning rate is `5×10⁻⁵`, visual encoder `1×10⁻⁵`. These are experimental settings, not universal optima.

---

## EO-Data1.5M: Shared Material for Reasoning and Control
### Three Data Groups
| Category | Main-text Table 1 scale | Supervision |
|---|---|---|
| Web multimodal | 5.7M samples, 7.1B tokens | Image QA, video understanding, grounding, and related tasks. |
| Robot control | 1.2M trajectories, 127.3B tokens | Continuous operation across robots. |
| EO-Data1.5M embodied data | 1.5M samples, 1B tokens | Spatial, temporal, physical, and task reasoning plus interleaved operation. |

**Caution:** Trajectories, QA samples, and tokens are different units and cannot be added as operation counts. EO-Data1.5M is not the entire training corpus, and full interleaved sequences are only a subset.

### Pipeline: Preserve Diverse Scenes, Then Add Reasoning
![EO-1 Paper Deep-Dive: 5.2 Pipeline: Preserve Diverse Scenes, Then Add Reasoning (image-02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-02.png)

**Paper:** Cluster visual video features, sample by cluster, and manually inspect to reduce repeated scenes. Segment videos into subtasks, create action descriptions with models and humans, build template-based questions, generate candidate answers, select or rewrite them manually, then clean rules and wording.

Temporal tasks include physical commonsense, planning, video descriptions, affordance QA, verification, subtask QA, and failure detection. Spatial tasks include relationships, trajectory prediction, bounding boxes, pointing, and multi-view pointing.

**Explanation:** One grasping record can answer what to grasp, where to approach, and whether placement succeeded. These annotations come from demonstrations, not exploration of every possible action.

### How Three Interleaved Formats Connect Question Answering and Actions
![EO-1 Paper Deep-Dive: 5.3 How Three Interleaved Formats Connect Question Answering and Actions (image-09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-09.png)

| Format | Connection | Learning focus |
|---|---|---|
| Temporal reasoning | Image → next-subtask QA → insert answer into instruction → action → new image and verification. | What to do and whether it is complete. |
| Spatial reasoning | Image → trajectory QA → insert trajectory into instruction → action → new image and verification. | Translate spatial goals into motion. |
| Free-form QA | Image → other reasoning QA → original task instruction → action → verification. | Preserve varied reasoning within control context. |

Spatial trajectories are image-plane `[x,y]` coordinates, not joint commands. `(480,125) → (485,144)` describes an image path; continuous action generation still learns the actual motion.

The text reports about 122,000 interleaved examples. **Caution:** Counts differ: Table 1 gives 5.7M web samples, Appendix Table 6 gives 6.2M; Figure 3(a) labels spatial understanding 376k, while Section 3.2.1 states 1.5M. Each figure is attributed to its location rather than merged into an unverified total.

---

## Experiments: Evidence for the Claims
### Evaluate Reasoning and Control Separately
Training loss, QA scores, simulation success, and real-task completion measure different capabilities and cannot replace one another.

| Evaluation | EO-1 result | Comparison and interpretation |
|---|---|---|
| RoboVQA, BLEU-4 | 58.5 | Qwen2.5-VL 3B: 55.9; reference-answer text matching. |
| ERQA, accuracy | 45.5% | Qwen2.5-VL 3B: 35.3%; Gemini 1.5 Flash: 46.3%. EO-1 does not beat every baseline. |
| EO-Bench, spatial / temporal | 36.4 / 38.9 | Qwen2.5-VL 3B: 20.0 / 22.6; improved task reasoning with many errors remaining. |
| LIBERO, mean success | 98.2±0.3% | π0: 94.2±0.9%; OpenVLA-OFT: 97.1±0.6%. |
| SimplerEnv, WidowX / Google VM / Google VA | 72.7% / 76.5% / 63.0% | π0: 69.2% / 71.4% / 54.7%; gains of 3.5 / 5.1 / 8.3 percentage points. |

*Source: Tables 2–4, pages 13–14. Model names and versions follow the paper. These metrics do not form one interchangeable robot-capability score.*

**Caution:** EO-Bench counts also conflict: Section 3.3 says 648 questions, its four categories sum to 642, and 4.2 says 700 evenly distributed. These are not used to infer significance or per-category counts.

### What Was Tested on Real Robots?
The 28 task settings comprise seven Franka Panda pick-and-place tasks, 13 WidowX 250 S out-of-the-box tests, four AgiBot G-1 long-horizon dexterous tasks, and four reasoning-control tasks. SO100 is also involved.

Models receive views, state, and instructions and output controls. Appendix Table 6's **training-data** configurations include AgiBot ego/left/right views at 30 FPS; DROID left/right/wrist at 15 FPS; SO100 third-person/wrist at 30 FPS; and IPEC-Franka third-person/wrist at 10 FPS. These source settings are not universal evaluation camera counts or control rates.

Long-horizon fine-tuning uses 150 demonstrations per task for 25 epochs, mixing subtask and full-task data at 9:1, then ten evaluations per task. About 500k frames and eight steps are reported per suite, not a uniform task duration.

**Caution:** Long-horizon scores average completion under subtask instructions; they are not full-task autonomous success from one overall instruction. “Out of the box” also does not imply the embodiment was absent from pre-training.

### Does Reasoning Improve Actions?
![EO-1 Paper Deep-Dive: 6.3 Does Reasoning Improve Actions? (image-07)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-07.png)

EO-1 scores `0.76, 0.79, 0.84, 0.55` on tic-tac-toe, image-reference rearrangement, sandwich making, and steak cooking. Tic-tac-toe baselines are π0 at `0.24` and GR00T-N1.5 at `0.36`, supporting better integration of board judgment and placement in this setting.

These tasks use specialized data and fine-tuning: 800 rearrangement demonstrations and 450 tic-tac-toe samples. Baselines pair an external GPT-4o planner with controllers, while EO-1 uses a unified decoder. Results support the complete system/training approach, not one isolated component or zero-shot new-task learning.

### Generalization and the Role of Data
![EO-1 Paper Deep-Dive: 6.4 Generalization and the Role of Data (image-10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-10.png)

Completion scores under visual, language, and action variations are `0.72, 0.79, 0.67`, with overall `0.73`. Action variations mainly change object positions, robot viewpoints, and object instances, not arbitrary unseen skills. Text and figures disagree about task totals, so Figure 9's “18 Tasks” is not treated as a paper-wide trial count.

![EO-1 Paper Deep-Dive: 6.4 Generalization and the Role of Data (image-14)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/eo1/image-14.png)

Four configurations are compared: `fast`, fully autoregressive FAST actions; `base`, a shared backbone with continuous flow matching trained only on control data; `llava`, adding generic image-text instructions; and `interleaved`, adding relevant interleaved data.

Table 5 provides two key observations:

- **Continuous generation helps:** LIBERO `base` reaches 98.2% versus `fast` at 88.0%. This supports hybrid decoding in this setting, not universal inferiority of discrete actions.

- **Relevance matters more than simply adding modalities:** WidowX overall completion rises from `base` `0.71` to `interleaved` `0.80`, while generic-data `llava` scores `0.34`. Task alignment matters; web data is not universally harmful.

Gains have limits: AgiBot sandwich action-generalization scores remain `0.75` for both `base` and `interleaved`. Interleaved labels do not automatically supply motion diversity absent from demonstrations.

---

## Interpreting the Conclusion
**Supported conclusion:** In these settings, a shared backbone with interleaved embodied data improves task-relevant reasoning and continuous control. It provides a trainable interface for reasoning before actions and reassessment afterward.

Retain three boundaries:

- **Unified does not mean fully reliable.** Complex tasks such as steak cooking remain weak, EO-Bench is far from perfect, and navigation, avoidance, failure analysis, and collaboration remain future directions.

- **Reasoning and motion are not arbitrarily concurrent.** Efficient architectures and asynchronous inference remain future work. Interleaving expresses temporal dependencies, not human-like simultaneous thought and action.

- **Reproduction needs implementation details.** Counts and flow signs conflict, and state/action dimensions and execution schedules cannot be inferred from diagrams. About 6 GB inference memory on one RTX 4090 is reported, without universal latency or control-rate measurements, so real-time execution on any platform is not guaranteed.

**Explanation:** EO-1 offers a route to learning semantic judgment and control together. The shared network handles joint information, interleaved data supplies temporal relationships, and rectifying sampling distinguishes historical actions from current denoising. Practical results still depend on demonstration coverage, tasks, and execution systems.

</div>
