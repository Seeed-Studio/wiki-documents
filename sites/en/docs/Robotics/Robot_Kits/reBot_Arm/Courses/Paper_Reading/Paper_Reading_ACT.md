---
description: "A deep dive into ACT's imitation learning foundations, the ALOHA bimanual teleoperation system, action chunking, temporal ensembling, and CVAE network."
title: "ACT — Low-Cost Bimanual Manipulation"
hide_title: true
keywords:
  - Paper Deep-Dive
  - act
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
slug: /robotics/paper_reading_act
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/robotics/paper_reading_act/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-act-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-act-title">ACT — Low-Cost Bimanual Manipulation</h1>
  <p className="paper-reading-lead">Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Imitation learning</li>
    <li>ALOHA</li>
    <li>Action chunking</li>
    <li>Temporal ensembling</li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2304.13705" target="_blank" rel="noopener noreferrer" aria-label="Read the ACT paper on arXiv">
    <span className="paper-reading-source-tag">arXiv</span>
    <span>Read the paper</span>
    <span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

## Prerequisites

### What Is Imitation Learning?

- **Imitation learning** starts with a simple idea: demonstrate the task, then let the robot learn to imitate it.

    - A human teleoperates the arm while the system records camera observations and executed actions. These demonstrations train a model that can later act from images without a human operator.

![ACT: What Is Imitation Learning? (Figure 07)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-07-en.png)

#### Observation: The World the Robot Sees

- An observation is information about the environment obtained through sensors: the robot's eyes. For reBot Arm, this includes:

    - The **front / overhead camera's** global view of objects and their positions on the table.

    - The **wrist camera's** close-up view of the relationship between the gripper and its target.

#### State: The Robot's Own Configuration

- State describes the robot itself rather than its surroundings. It is analogous to proprioception: knowing where your hand is or how far your elbow is bent with your eyes closed. For reBot Arm, state includes:

    - Current angles of the six joints.

    - The gripper's current opening.

#### Action: What the Robot Is Commanded to Do

- An action is the model's output command to the arm. On reBot Arm, state and action have the same dimensionality: six joints plus one gripper. State describes the current configuration; action specifies the target configuration:

    - Target angles for the six joints.

    - Target gripper opening.

![ACT: Action: What the Robot Is Commanded to Do (Figure 09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-09-en.png)

### Single-Step Actions and Action Chunks

#### Single-Step Actions: One Decision per Frame

- For each image, predict the next joint targets, execute them, and obtain another image for the next prediction.

    - Small prediction errors change the arm's position and can push subsequent observations away from the training distribution. Later errors then grow. On the robot, this appears as jitter, hesitation, and repeated stops, like reconsidering your next footstep halfway through every stride.

#### Action Chunks: Predict a Sequence at Once

- Predict a short future sequence, such as 50 joint targets over the next second, rather than only the next action.

    - **Lower inference-rate requirements.** One prediction covers a short interval, allowing smoother motion even when inference is relatively slow, which matters for deployment on modest hardware.

    - **More temporal structure.** Predicting several future actions encourages the model to represent the intended sequence, making momentary distractions less likely to derail it.

    - **Smoother, more coherent motion.**

![ACT: Action Chunks: Predict a Sequence at Once (Figure 05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-05-en.png)

Longer chunks are not always better. If an object moves during execution, distant predictions may become outdated. Practical systems balance this by executing part of a chunk open-loop, then observing and predicting again.

### Training, Inference, and Evaluation

![ACT: Training, Inference, and Evaluation (Figure 04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-04-en.png)

#### Training: Offline Learning

Training is an **offline** process after collection. The arm can be powered off while the GPU does the work.

- Input: recorded image, state, and action sequences.

- Process: repeatedly adjust model parameters to bring predicted actions closer to human demonstrations.

- Output: trained model weights.

**Loss** tracks training fit: decreasing loss means predictions are becoming more similar to the demonstrations.

#### Inference: Online Decisions

- Inference is **deploying the model on the real robot to work in real time**: read camera images and joint states → predict an action chunk → send it to the motors. Predictions must arrive within tens of milliseconds, or the arm will stutter.

#### Evaluation: Measure Task Success

A trained model with low loss may still fail the task. **Low loss measures imitation accuracy, not task completion.** Evaluate on the real robot:

- Define clear success criteria, such as the block ending inside the box.

- Vary initial conditions, including object position and lighting, over N trials.

- Measure success rate: 14 successes in 20 trials gives 70%.

Failures become input for the next collection round. Add demonstrations for the situations that fail, then retrain. This closes the data–training–evaluation loop used in practical robot learning.

---

## Paper Background

Authors: Tony Z. Zhao¹, Vikash Kumar³, Sergey Levine², Chelsea Finn¹. Affiliations: ¹ Stanford University; ² UC Berkeley; ³ Meta.

Paper background: Published in 2023 by a joint Stanford and Berkeley team, this lightweight imitation learning algorithm combines convolutional networks and Transformers. The experimental platform is the six-DoF ALOHA bimanual teleoperation system, with monocular cameras at the two grippers and a global overhead monocular camera.

![ACT: Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware (Figure 12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-12.png)

---

## Abstract

![ACT: Abstract (Figure 03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-03.png)

- Explanation:

Fine manipulation, such as threading a cable tie or inserting a battery, is difficult for robots. It requires precision, coordinated contact forces, and closed-loop visual feedback. Conventional solutions often depend on expensive robots, precise sensors, or careful calibration. Can learning enable inexpensive, less precise hardware to perform these tasks?

The paper introduces a low-cost system that collects real demonstrations through a custom teleoperation interface for direct end-to-end imitation learning. Challenges include compounding policy errors and non-stationary human demonstrations, especially in high-precision tasks. The proposed Action Chunking with Transformers (ACT) algorithm learns a generative model of action sequences. With just 10 minutes of demonstrations, the robot can perform six challenging real-world tasks, such as opening translucent condiment cups and inserting batteries, with success rates reaching 80–90%.

- Commentary:

Conventional imitation learning often repeats “observe → predict one action → execute → observe again.” In precision tasks, even a small error can move the robot into a state missing from the demonstrations, causing later predictions to drift further. This is **compounding error**.

ACT's central idea is **action chunking**: generate a continuous future sequence rather than one action at a time. This supports temporal continuity and reduces the effective decision horizon over which errors accumulate.

Transformers are well suited to sequence relationships: they can learn how actions relate over time, rather than considering only what the robot should do at the current instant.

**ACT lets the robot predict a short sequence of actions at once.**

---

## Introduction

- **Paragraph 1: the problem.** Delicate tasks involving pinching, prying, or tearing, such as opening a cup or inserting a battery, require precise visual feedback and hand–eye coordination so actions can be adjusted as the environment changes.

- **Paragraph 2: earlier limitations and the proposed approach.** Work such as [Grasping with Chopsticks](https://arxiv.org/abs/2011.06719) and [Goal-conditioned dual-action imitation learning](https://arxiv.org/abs/2203.09749) relies on expensive hardware or careful calibration. The authors instead seek an **affordable, accessible, reproducible** system: ordinary RGB images → neural network → robot actions.

- **Paragraph 3: the platform.** The experimental hardware costs less than US\$20,000.

- **Paragraph 4: ACT addresses compounding errors in imitation learning.**

Even with good demonstrations, action predictions can contain small errors. In precision tasks, an error can move the robot into a state unlike those in training, making subsequent predictions progressively less reliable.

The authors draw inspiration from **action chunking** in psychology: people organize continuous motions into coherent units rather than treating every instant as an independent action.

Conventional imitation learning: **current observation → next action**.

ACT: **current observation → actions for the next k timesteps**.

Predicting a short sequence effectively shortens the decision horizon by **a factor of k**, reducing the effect of errors accumulating across individual decisions.

Chunking also helps explain irregularities in human demonstrations, such as pauses. A sequence model can interpret a pause in the context of the movements before and after it instead of treating one instantaneous observation as sufficient to explain it.

For smoother execution, **temporal ensembling** combines overlapping chunks predicted at different times. Rather than choosing just one prediction for the current instant, ACT blends them with weights, reducing jitter.

The architecture uses a **Transformer** for action sequences and a **conditional VAE (CVAE)** for demonstration variability. A task can have several valid trajectories, speeds, or action orders; the CVAE models this distribution rather than assuming one uniquely correct sequence.

**Action Chunking with Transformers: ACT.**

![ACT: Introduction (Figure 02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-02-en.png)

- **Paragraph 5: the two contributions are a low-cost teleoperation platform and the ACT algorithm.**

The paper addresses two connected robot-learning problems:

**1. Where do demonstrations come from?**

A low-cost teleoperation system lets people perform fine manipulation directly and collect high-quality demonstrations efficiently.

**2. How does the robot learn from them?**

ACT combines action chunks, Transformers, a CVAE, and temporal ensembling to learn fine manipulation with visual feedback. The contribution is the **combination of hardware and learning**: **human teleoperation → demonstrations → ACT training → autonomous robot execution**.

With roughly **ten minutes, or about 50 human trajectories**, the system learns six real-world fine-manipulation tasks, including opening condiment cups and inserting batteries. Some tasks achieve **80–90%** success.

---

## Related Work

This section reviews earlier behavioral-cloning approaches and their limitations. Read it for context; it is optional for the practical learning goals of this guide.

---

## ALOHA: A Low-Cost Bimanual Teleoperation System

### Design Goals and Hardware

![ACT: Design Goals and Hardware (Figure 14)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-14.png)

The authors define five design principles to support fine manipulation while lowering the barrier to reproduction in ordinary laboratories.

ALOHA uses two **ViperX 6-DoF** arms as the **follower robots**, instead of expensive industrial arms. Each ViperX costs about US$5,600 and has positioning accuracy of roughly **5–8 mm**.

### Leader–Follower Teleoperation

A central design choice is **leader–follower** teleoperation. The operator moves the leader by hand, while the ViperX follower tracks its joint motion.

**Move the leader → Read its joint angles → Move the follower synchronously → Perform the task.**

This is **joint-space mapping**, with several advantages:

- No frequent inverse-kinematics computation.

- More stable behavior near kinematic singularities.

- Lower control latency.

- A direct mapping from operator motion to the robot.

### Cameras, Data Collection, and Capabilities

ALOHA records the demonstrations using **four ordinary RGB cameras**:

![ACT: Cameras, Data Collection, and Capabilities (Figure 01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-01.png)

The authors broadly group the tasks into three categories:

---

## Action Chunking and Temporal Ensembling

![ACT: Transformer-Based Action Chunking and Temporal Ensembling (Figure 15)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-15.png)

### Action Chunking: Predict a Short Sequence

Conventional imitation learning predicts one next action from the current state: move forward a little, then down a little. A small error can change the next observation and compound until the task fails. **Action chunking** is ACT's core response to this problem.

**Predict a continuous future sequence instead of one action.** With `chunk_size = 4`, a single-step policy makes decisions at `t=0→a0, t=1→a1, t=2→a2, t=3→a3`; ACT predicts `[a0,a1,a2,a3]` at `t=0`. This sequence is an **action chunk**. The policy changes from `πθ(at|st)` to `πθ(at:t+k|st)`, where `k` is the chunk length.

![ACT: Action Chunking: Think Through a Short Sequence Rather Than One Step at a Time (Figure 00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-00-en.png)

The intuition is to consider a short sequence rather than improvise every instant. When inserting a battery, people naturally organize “approach → align → insert” as a coherent motion rather than a long list of one-millimeter corrections. Chunking teaches the robot that structure.

It also reduces the **effective horizon by a factor of k**. A 100-timestep task requires 100 single-step decisions; with `chunk_size=10`, it can be considered as fewer continuous segments. Looking several steps ahead makes an isolated small error less likely to immediately derail the rest of the sequence.

Human demonstrations also include pauses, hesitation, and speed changes. Learning “approach → pause → adjust → insert” as a sequence makes these relationships easier to represent than learning isolated instants.

https://github\.com/huggingface/lerobot/blob/main/src/lerobot/policies/act/modeling\_act\.py

### Temporal Ensembling

ACT predicts a short future sequence, but **what happens if the environment changes while it is being executed?**

With temporal ensembling, ACT observes and predicts a new chunk **at every timestep**, rather than blindly executing an entire chunk. For `chunk_size = 4`, predictions might look like this:

`t=0 → [a0, a1, a2, a3]`
`t=1 → [a1', a2', a3', a4']`
`t=2 → [a2'', a3'', a4'', a5'']`

The same future instant therefore receives multiple predictions. At `t=2`, for example:

`a2`, predicted at `t=0`.
`a2'`, predicted at `t=1`.
`a2''`, predicted at `t=2`.

Instead of selecting only one, ACT takes a **weighted combination of predictions for the same timestep** to obtain the executed action. This is **temporal ensembling**.

> The model revisits the same future action at different times using different observations, then combines those estimates.
> 
> 

![ACT: Temporal Ensembling (Figure 08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-08-en.png)

Following only the newest prediction can cause abrupt jumps. Weighted averaging smooths execution. It primarily addresses two problems:

The paper uses exponential weights:

$w_i = \exp(-m i)$

**Action chunking looks several steps ahead. Temporal ensembling repeatedly observes and predicts, then smoothly combines overlapping estimates.**

### Modeling Human Demonstrations with a CVAE

Action chunking predicts a sequence and temporal ensembling smooths execution, but another issue remains: **human demonstrations are not identical**.

When inserting a battery, different operators may:

- Approach from different angles.

- Move at different speeds.

- Adjust left before insertion.

- Align directly and insert.

Even **the same person** produces different trajectories on repeated attempts. A given observation therefore does not have only one correct action sequence. Assuming that

> “This image must produce exactly one action trajectory”
> 
> 

can encourage averaging across distinct strategies. Consider two demonstrations:

```text
Demonstration A: go around the left → insert
Demonstration B: go around the right → insert
```

A simple average could become:

```text
Go straight through the middle
```

But there may be an obstacle in the middle.

The goal is to learn:

> **Which reasonable action sequences a person might use in the current state.**
> 
> 

This motivates the **conditional variational autoencoder (CVAE)**.

### How the CVAE Works in ACT

![ACT: How the CVAE Works in ACT (Figure 11)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-11-en.png)

The CVAE has two main components:

The encoder uses:

- The current robot state.

- The demonstrated action sequence.

It infers a latent “motion style.” Rather than outputting a single fixed $z$, it predicts Gaussian distribution parameters $\mu,\sigma$:

- A mean.

- Variance.

Sampling $z$ from that distribution lets the model represent uncertainty about the demonstration's style instead of assigning one rigid value. This is a central VAE idea.

In principle, the training-time CVAE encoder could receive:

```text
Image + Robot State + Action Sequence
```

For faster training, the authors omit images from the CVAE encoder.

Its actual inputs are:

```text
Robot State + Action Sequence
        ↓
   CVAE Encoder
```

Images still enter the ACT policy that predicts actions. Thus:

> **The CVAE encoder extracts demonstration style; the action-prediction policy still uses camera images to decide what the robot should do.**
> 
> 

---

### The Complete ACT Network

![ACT: The Complete ACT Network (Figure 13)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-13.png)

![ACT: The Complete ACT Network (Figure 06)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-06-en.png)

Joint positions and the demonstrated action chunk first enter the CVAE encoder to represent differences in demonstration style, producing Gaussian parameters $\mu,\sigma$ and a latent style variable $z$. This encoder processes joint states and action sequences rather than camera images.

Feeding raw $480x640$ RGB images into a Transformer would be expensive. **ResNet18** first converts each camera image to a $15x20x512$ feature map, flattened into a $300x512$ feature sequence. ALOHA's four cameras therefore yield $1200x512$ visual tokens.

The model separately projects the **14-dimensional joint position** and latent style $z$ into 512 dimensions and concatenates them with the visual features. The Transformer encoder receives:

1200\+1\+1=1202

This gives a $1202x512$ sequence. The encoder fuses three kinds of information: **what the robot sees, its current configuration, and the demonstration's motion style**.

A **Transformer decoder** then uses $k$ positional queries, one for each future timestep. Cross-attention retrieves environment information from the encoder output and predicts all $k$ actions together. ALOHA's two arms have 14 controlled joint/gripper dimensions in total, giving:

$k\times14$

For `chunk_size = 100`, one inference predicts **100 timesteps × 14 joint positions**: the complete action chunk.

Training compares predicted chunks with human demonstrations using an **L1 reconstruction loss**, plus a CVAE KL loss that regularizes the latent distribution.

At deployment there is no future demonstrated action chunk, so **the CVAE encoder is removed and $z=0$**. Images and current joint positions generate new chunks; temporal ensembling combines overlapping predictions, and the current action is sent to the robot.

The complete flow is:

**Training: demonstration → CVAE learns $z$ → images + joints + $z$ → Transformer → action chunk**

**Inference: images + joints + $z=0$ → Transformer → action chunk → temporal ensembling → robot**

Remember the roles separately:

> **Action chunking determines how many future actions are predicted together; temporal ensembling smooths execution; the CVAE models the fact that several demonstrations can be valid for the same task.**
> 
> 

The ACT pipeline now fits together:

![ACT: The Complete ACT Network (Figure 10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/act/image-10-en.png)

</div>
