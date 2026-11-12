---
description: "A close reading of DM0.5: historical context fusion, embodied reasoning, dynamic action matching, Flow Matching, and the limits of the open-world evaluations."
title: "DM0.5: Historical Context and Trajectory Alignment for the Open World"
hide_title: true
keywords: [Technical Blog Deep-Dive, DM0.5, OpenDM, Historical Context, Trajectory Alignment, Flow Matching, LeRobot]
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/fig01-architecture.png
slug: /robotics/paper_reading_dm05
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-10
createdAt: '2026-11-10'
updatedAt: '2026-11-10'
url: https://wiki.seeedstudio.com/robotics/paper_reading_dm05/
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Model Architecture: From Scene Understanding to Action Generation",
    "id": "model-architecture-from-scene-understanding-to-action-generation",
    "level": 2
  },
  {
    "value": "Context Abstraction Layer: Historical Context Fusion",
    "id": "context-abstraction-layer-historical-context-fusion",
    "level": 2
  },
  {
    "value": "Embodiment CoT Tasks: Broad Embodied Reasoning",
    "id": "embodiment-cot-tasks-broad-embodied-reasoning",
    "level": 2
  },
  {
    "value": "Trajectory Alignment Layer: Dynamic Action Matching",
    "id": "trajectory-alignment-layer-dynamic-action-matching",
    "level": 2
  },
  {
    "value": "Continuous Action Generation with Flow Matching",
    "id": "continuous-action-generation-with-flow-matching",
    "level": 2
  },
  {
    "value": "Data and Training: What the Model Learns From",
    "id": "data-and-training-what-the-model-learns-from",
    "level": 2
  },
  {
    "value": "Experiments: What the Results Support",
    "id": "experiments-what-the-results-support",
    "level": 2
  },
  {
    "value": "Zero-Shot Generalization",
    "id": "zero-shot-generalization",
    "level": 3
  },
  {
    "value": "Fine-Tuning Capability and Real-Robot Manipulation",
    "id": "fine-tuning-capability-and-real-robot-manipulation",
    "level": 3
  },
  {
    "value": "Conclusion",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-dm05-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · TECHNICAL BLOG DEEP-DIVE</span>
  <h1 id="paper-reading-dm05-title">DM0.5: Historical Context and Trajectory Alignment for the Open World</h1>
  <p className="paper-reading-lead">DM0.5: An Open-World Foundation Model for General-Purpose Embodied Intelligence</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Historical context</li><li>Embodied reasoning</li><li>Trajectory alignment</li><li>Continuous actions</li>
  </ul>
  <a className="paper-reading-source-link" href="https://www.dexmal.com/blog/dm0.5?lang=en-US" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">Dexmal</span><span>Read the official technical blog</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Key LeRobot options">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/main/en/dm05" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="Hugging Face" width="24" height="24" /> Hugging Face · LeRobot DM0.5 Documentation ↗</a>

**Key LeRobot Options**

Use these options alongside the dataset and output settings. See the official documentation above for installation, camera mapping, and full evaluation commands.

- `--policy.path=lerobot/dm05_base`: start supervised fine-tuning from the base checkpoint. The checkpoint adapted to LIBERO is `lerobot/dm05_libero`.
- `--policy.add_state=false --policy.chunk_size=10 --policy.n_action_steps=10`: the official LIBERO recipe omits robot state from the prompt and predicts and executes 10 actions at a time. Use the recipe appropriate to your robot.
- `--policy.push_to_hub=false`: save the training results locally. Save and load the checkpoint together with its configuration, tokenizer, and processors.

</aside>

A robot receives the instruction, “Pick up the cup, wipe the table underneath it, and put the cup back.” Once the cup has moved, the current image may no longer show where it started. Holding the cup looks similar before and after wiping, but the next action is different. Pauses and changes in the demonstrator's pace also complicate action learning.

**DM0.5 addresses these problems by using historical context, learning task progress, and aligning demonstration trajectories.** This article uses Dexmal's official technical blog and public implementation to explain the three mechanisms.

## Model Architecture: From Scene Understanding to Action Generation

A vision-language-action (VLA) model turns images, instructions, and robot state into control actions. DM0.5 uses a **4B Vision-Language Model (VLM) and a 680M Action Expert**. The VLM represents the scene and task, and the Action Expert generates continuous robot actions.

![Official DM0.5 architecture: the Action Expert generates continuous actions conditioned on historical and current observations](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/fig01-architecture.png)

*Source: the Model section of the official blog. History compression, embodied reasoning, and trajectory alignment improve the inputs and training supervision.*

When it is time to return the cup, historical frames show where it started, the current image shows the cup and table as they are now, and the instruction specifies where the cup should go. The VLM encodes these inputs as action conditions. The Action Expert reads those conditions and generates a sequence of movements to carry and place the cup.

The model predicts a sequence of future actions called an **action chunk**. The KV cache in the architecture figure reuses computation for image and text inputs. Task history serves a different purpose: it supplies actual past observations to the model.

## Context Abstraction Layer: Historical Context Fusion

To put the cup back, the model needs both a view from before the cup was picked up and the current view. Feeding in a long video directly would increase the computational cost.

DM0.5's **Context Abstraction Layer** samples frames from the past and compresses each historical slot to a fixed number of visual tokens. The model processes these tokens alongside current observations. In the public memory implementation, two-dimensional average pooling reduces the spatial size of the visual feature grid.

![Teaching diagram: compressed historical frames join the current image and instruction to condition actions](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/guide01-history-en.svg)

*Illustration: history comes only from before the current timestep. The gray slot represents missing history.*

The blog reports support for up to about **60 seconds** of task history. Whether the model can recover the cup's original location depends on which frames were sampled and how much spatial detail survives compression. Sampling one frame per second, for example, can miss a detail that was only briefly visible.

The checkpoint and input pipeline also need to support history. The standard LeRobot integration reviewed here does not expose OpenDM's separate historical image input. The LIBERO options above cannot directly test the model's memory capability.

## Embodiment CoT Tasks: Broad Embodied Reasoning

Action labels tell the model how to move at a given moment. They do not necessarily identify what has already been done or what should happen next. DM0.5 adds **11 autoregressive tasks** to training on robot data. Predicting text answers token by token provides extra supervision for task stages, events, and action intent.

The official blog groups these **Embodiment CoT Tasks** into three categories:

| Category | What the model learns | Teaching example: wiping the table |
|---|---|---|
| Task Planning | Current task stage and next steps | The cup has been moved; wipe the table next. |
| Event and Environment Prediction | Scene changes and key events | The area should be clean after wiping. |
| Action Generation | Future actions or a summary of action intent | Return the cup to its previous location. |

These examples illustrate the supervision; they are not published training samples. History provides evidence of what happened, and semantic supervision helps the model connect those changes to task progress and action selection. This is a training objective. It does not require the model to produce a readable reasoning trace before every action.

## Trajectory Alignment Layer: Dynamic Action Matching

Two operators demonstrate the same sequence: approach, make contact, secure the grasp, then lift. One pauses for half a second before contact. If targets are paired at fixed time offsets, the same prediction slot can end up supervising different stages of the motion.

DM0.5's **Trajectory Alignment Layer** matches a fixed-length action prediction to anchor points on a denser ground-truth trajectory. The matches must preserve temporal order. Dynamic programming finds a sequence of matches with a lower overall cost.

![Teaching diagram: three predicted actions match monotonically increasing anchor points on a denser ground-truth trajectory](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/guide02-alignment-en.svg)

*Illustration: the numbers represent one normalized action component. The simplified cost includes only pointwise error.*

Consider a ground-truth trajectory of `[0, 0, 0, 0.5, 1]` and a prediction of `[0, 0.5, 1]`. If equally spaced anchors are fixed at positions 1, 3, and 5, the targets are `[0, 0, 1]`, giving a squared error of `0² + (0.5 − 0)² + 0² = 0.25`. Monotonic matching at positions 1, 4, and 5 gives an error of `0`. Both choices retain the start and end of the trajectory. The difference is whether the middle prediction is paired with the motion after the pause. The fixed anchors are a teaching comparison, not the official training recipe.

Matching only by the smallest pointwise error could skip a key contact stage. The blog therefore describes a trajectory continuity constraint between anchors, but does not give its full formula. The example illustrates monotonic matching. Alignment changes which actions supervise the model during training; the controller still determines the timing of actions during deployment.

## Continuous Action Generation with Flow Matching

Historical observations and instructions condition the model, and trajectory alignment pairs predictions with supervision. The Action Expert generates numerical actions with **Flow Matching**.

The public standard supervised fine-tuning (SFT) implementation mixes the ground-truth action chunk A with Gaussian noise ε of the same shape:

$$
X_s=(1-s)A+s\epsilon,\qquad U_s=\epsilon-A.
$$

The variable s ranges from 0 to 1, interpolating from action to noise. The Action Expert receives the noisy actions, s, and the image and language conditions, then learns to predict the update direction U. For one action value of `0.6`, noise `−0.2`, and `s=0.5`, the mixed value is `0.2` and the target direction is `−0.8`.

![Teaching diagram: Flow Matching learns a velocity field, then integrates from noise to actions at inference](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/guide03-flow-en.svg)

*Illustration: internal generation steps are distinct from control positions in an action chunk.*

At inference, the model starts from noise and decreases s from 1 to 0. Continuing the example, at `0.2` with predicted direction `−0.8`, a step of `−0.1` gives `0.28`, closer to the action value `0.6`. The generated actions are denormalized and passed to the controller. The next round uses a fresh observation.

The blog's default is **10 internal updates to generate a 50-step action chunk**. The number of actions executed before the next observation depends on the deployment recipe. Standard LeRobot SFT uses the Flow Matching loss; it does not automatically reproduce the blog's full set of reasoning tasks or trajectory alignment training.

## Data and Training: What the Model Learns From

DM0.5 combines robot manipulation, embodied navigation, egocentric human manipulation, and general image and video data. Robot trajectories provide action supervision, while other sources broaden semantic, spatial, and temporal coverage. Human video does not directly provide robot joint targets.

Data cleaning removes anomalous and long idle segments, checks synchronization between images and actions, and corrects task labels. **Reliable recordings come first.** Trajectory alignment can then address variation in demonstration pace.

During base training, the VLM uses a lower learning rate to preserve image and language capabilities, while the Action Expert uses a higher learning rate to learn control. The base weights can then be adapted to particular tasks or robots. Camera inputs, state and action semantics, and normalization need to stay consistent.

## Experiments: What the Results Support

### Zero-Shot Generalization

![Official zero-shot results: success rates across action categories and semantic conditions on two robot platforms](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/fig02-zero-shot-en.png)

*Source: Zero-Shot Generalization in the official blog. The upper row compares DM0.5-Droid and π0.5-Droid on Franka. The lower row compares DM0.5 and DM0 on Dexmal-Mirror. The vertical axis shows success rate.*

DM0.5 performs better in most action and semantic constraint categories. On Franka, it ties in “Move” and performs worse on “Status” constraints. The gains therefore apply to most tested conditions rather than every instruction. Comparisons should stay within each platform. Here, zero shot refers to unseen task configurations and still relies on prior training experience.

### Fine-Tuning Capability and Real-Robot Manipulation

LIBERO is a simulation benchmark for single-arm manipulation. Spatial, Object, Goal, and Long emphasize spatial relationships, object variation, task goals, and long-horizon sequences, respectively. RoboTwin2.0 evaluates dual-arm manipulation. Clean uses simpler scenes; Randomized varies backgrounds, lighting, clutter, and other environmental conditions to test execution under domain randomization.

![Official fine-tuning results: success rates on LIBERO and RoboTwin2.0](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/fig03-finetuning.png)

*Source: Fine-Tuning Capability in the official blog. Success rates in the table are percentages.*

Across the four LIBERO suites, DM0.5 averages **99.0%** success versus 96.9% for π0.5 in the same table. On RoboTwin2.0, DM0.5 achieves **93.6% on Clean and 93.3% on Randomized**, compared with 82.7% and 76.8% for π0.5. The results support DM0.5 as a strong starting point for task adaptation.

On the real-robot RoboChallenge Table30 v2 benchmark, the authors train one multitask policy for each evaluated embodiment. The full-task success rate is **43.0%**, and the overall Score is **54.42**. These are separate metrics. High simulation scores do not eliminate failures on hardware.

For memory, the blog shows the robot returning a cup to its original position and following a battery-placement rule after watching a person demonstrate it. In camera perturbation tests, the wrist camera stays fixed while two external cameras vary across nine configurations. There are 10 trials per configuration, with success rates from 80% to 100%. Human perturbations are shown mainly through behavioral demonstrations.

These results describe the complete system. They do not isolate the contributions of historical context, reasoning tasks, and trajectory alignment. The memory and human perturbation demonstrations also lack comprehensive quantitative controls, so they do not establish reliability on arbitrary long-horizon tasks or perturbations.

## Conclusion

**During training, embodied reasoning provides semantic supervision for task progress and action intent, while trajectory alignment pairs action targets to reduce timing noise from demonstrations. During execution, historical and current observations combine with the instruction to condition the Action Expert's continuous actions.**

When applying DM0.5 to your robot, first determine whether the task actually depends on past observations. Then verify that the checkpoint accepts those observations and that the action interface matches your hardware. Use controlled comparisons on the target task to judge whether the method helps.

</div>
