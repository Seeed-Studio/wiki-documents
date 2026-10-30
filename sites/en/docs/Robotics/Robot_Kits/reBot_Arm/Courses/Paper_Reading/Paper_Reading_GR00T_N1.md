---
description: "How to run NVIDIA GR00T N1 on reBot Arm & SO-ARM101: a paper deep-dive into GR00T N1 dual-system architecture, data pyramid, flow-matching action chunks and robot adaptation."
title: "How to Run NVIDIA GR00T N1 on reBot Arm & SO-ARM101"
hide_title: true
keywords:
  - Paper Deep-Dive
  - gr00t_n1
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
slug: /robotics/paper_reading_gr00t_n1
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/robotics/paper_reading_gr00t_n1/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-gr00t_n1-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-gr00t_n1-title">How to Run NVIDIA GR00T N1 on reBot Arm & SO-ARM101</h1>
  <p className="paper-reading-lead">GR00T N1: An Open Foundation Model for Generalist Humanoid Robots</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Humanoid robots</li>
    <li>Dual-system architecture</li>
    <li>Data pyramid</li>
    <li>Flow matching</li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2503.14734" target="_blank" rel="noopener noreferrer" aria-label="Read the GR00T N1 paper on arXiv">
    <span className="paper-reading-source-tag">arXiv</span>
    <span>Read the paper</span>
    <span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

## GR00T N1.7: Adaptation and Fine-Tuning

This reading covers the original GR00T N1 paper. For hands-on work with **GR00T N1.7** (`nvidia/GR00T-N1.7-3B`), follow the existing reBot course:

- [Robot Embodiment and GR00T Architecture](/robotics/rebot_physical_ai_course_chapter_19/)
- [Prepare a reBot VLA Dataset](/robotics/rebot_physical_ai_course_chapter_20/)
- [Fine-Tune GR00T N1.7 for reBot Arm](/robotics/rebot_physical_ai_course_chapter_21/)
- [Deploy the Fine-Tuned Model on the Robot](/robotics/rebot_physical_ai_course_chapter_22/)

The N1 experimental settings discussed below belong to the original paper. Use the N1.7 tutorials for version-specific training and deployment configuration.


## Prerequisites

### From ACT to GR00T N1: The Learning Loop Is the Same

If you have used LeRobot + ACT, this workflow is familiar:

```text
Human teleoperation
    ↓
Collect camera / state / action data
    ↓
Organize an episode dataset
    ↓
Train a policy
    ↓
Observation → Action chunk → On-robot execution
```

GR00T N1 still answers the same question:

> Given what the robot sees, its current state, and the user's request, how should it move next?
> 
> 

ACT typically learns one robot and a task family from demonstrations. GR00T N1 seeks general priors from multiple robots, human videos, and synthetic data before adapting to a particular real robot.

![GR00T N1 Paper Deep-Dive: 1.1 From ACT to GR00T N1: The Learning Loop Is the Same (image-11)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-11-en.png)


ACT starts with one concrete skill; GR00T N1 first learns a foundation across bodies and tasks, then learns to use the current robot.

### Observation, State, Action, and Embodiment

The three terms introduced with ACT retain their meaning:

- **Observation:** external sensor information, such as head, wrist, and multi-view RGB images.

- **State:** the robot's configuration, including joint angles, gripper opening, end-effector pose, waist, or neck state.

- **Action:** requested controls, potentially joint targets, increments, end-effector poses, or gripper commands.

    

**Embodiment** includes more than appearance. It combines body and control definitions:

```text
Robot structure
+ Sensors
+ State definition
+ Action definition
+ Control frequency and mode
= One embodiment
```

A single Franka, a bimanual system, and a GR-1 humanoid have different state/action dimensions. Sharing a model across these bodies is a central challenge.

### VLA, Action Chunking, and Flow Matching

![GR00T N1 Paper Deep-Dive: 1.3 VLA, Action Chunking, and Flow Matching (image-09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-09-en.png)


A **VLA** adds task language to visual policy inputs. Language identifies which object to manipulate, where it should go, and whether behavior matches the request; it is not decorative context.

An **action chunk**, as in ACT, predicts a short future sequence rather than one action. GR00T N1 sets `H = 16`.

**Flow matching** can be understood as refining random actions into an executable chunk under image, language, and state conditioning. The paper uses only `K = 4` inference updates.

---

## Abstract

General-purpose robots need capable bodies and intelligent models. Humanoids are promising for human environments, but understanding new situations, handling real-world variation, and quickly learning new tasks require foundation models trained on large, diverse data.

GR00T N1 is an open foundation model for humanoids with a dual-system VLA architecture. A vision-language module, System 2, interprets images and instructions; a diffusion Transformer, System 1, generates smooth actions in real time. The modules are closely connected and jointly trained end to end.

Training mixes real trajectories, human videos, and synthetic data. GR00T N1 exceeds the compared imitation-learning baselines on simulation benchmarks across embodiments and learns language-conditioned bimanual tasks efficiently on the Fourier GR-1 humanoid.

Three ideas organize the paper:

1. **Dual-system VLA:** one component interprets, another acts.

2. **Heterogeneous data:** use human videos, simulation, and generated videos alongside robot demonstrations.

3. **Cross-embodiment sharing:** different bodies share core capabilities instead of receiving entirely independent models.

    

---

## Introduction and Related Work

### Hardware, Models, Data, and Data Islands

The introduction identifies three necessary elements:

- **Hardware** determines physical capability. Humanoids are appealing because human environments are designed for human bodies.

- **Models** must handle open-ended tasks, not one fixed behavior.

- **Data** determines exposure to environments, objects, tasks, and bodies.

    

Language and vision models can learn from the internet, but robotics lacks an equivalent internet of actions. Real data is costly and slow to collect, and robots differ in joints, sensors, and controls.

Putting datasets together can still leave **data islands**: files share a database but not semantics or action spaces.

The paper therefore asks not only how to design a policy but also how to unify its training corpus.

### The Data Pyramid

![GR00T N1 Paper Deep-Dive: 3.2 The Data Pyramid (image-12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-12.png)

| Level | Data | Relative quantity | Relationship to the robot |
|---|---|---|---|
| Bottom | Web data + human videos | Largest | Rich action concepts without direct robot commands. |
| Middle | Simulation + neural trajectories | Large | Scalable and controllable, but with simulation or generation bias. |
| Top | Real-world robot data | Smallest | Closest to execution, most expensive to collect. |

Moving upward reduces quantity but increases specificity to the target embodiment.

Human videos: which actions and tasks exist
Simulation / generation: how those tasks can vary
Real robot data: how this body should execute them

---

## GR00T N1 Architecture

### System 2 Understands; System 1 Acts

![GR00T N1 Paper Deep-Dive: 4.1 System 2 Understands; System 1 Acts (image-17)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-17.png)

The architecture borrows a dual-system analogy from cognition:

- **System 2: Eagle-2 VLM**, interpreting images, language, and tasks.

- **System 1: diffusion Transformer (DiT)**, generating continuous actions quickly.

    

These are not independent programs: cross-attention connects them tightly and training optimizes them jointly.

Eagle-2 contains a language model and image encoder. Images enter at `224 × 224`, producing 64 tokens per frame. The authors use intermediate layer-12 VLM features rather than final features, improving speed and downstream success in their experiments.

System 2 operates at about 10 Hz on an NVIDIA L40, while the action system can output closed-loop controls at a higher rate. High-level interpretation need not be recomputed every millisecond, while motion must remain continuous.

### Connecting Different Robots to One DiT

![GR00T N1 Paper Deep-Dive: 4.2 Connecting Different Robots to One DiT (image-13)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-13.png)

There are two kinds of modules:

- **Shared core:** VLM and DiT share visual, language, and behavioral knowledge across robots.

- **Embodiment-specific interfaces:** state encoder, action encoder, and action decoder translate platform dimensions and control semantics to and from shared features.

    

| Module | Function | Why embodiment-specific? |
|---|---|---|
| State encoder | Encode current state as tokens. | State fields and dimensions differ. |
| Action encoder | Encode noisy actions and generation time. | Action dimensions differ. |
| Action decoder | Convert DiT features into controls. | Joint, end-effector, and gripper control modes differ. |

**Commentary:** Cross-robot learning is not just zero-padding vectors to equal length. Equal dimensions are meaningless without knowing which joint, pose, or command each value represents.

### Flow-Matching Action Chunks

At time `t`, predict a sequence rather than one action:

```text
A_t = [a_t, a_(t+1), ..., a_(t+H-1)]
H = 16
```

Training starts with real chunk `A_t`, Gaussian noise `ε`, and flow time `τ`, constructing:

```text
A_t^τ = τ A_t + (1 - τ) ε
```

- Near `τ=0`, the chunk resembles noise.

- Near `τ=1`, it resembles real actions.

    

The DiT reads visual-language features, state features, and noisy actions to learn an update direction. The paper writes the loss as:

```text
L_fm(θ)
= E_τ [ || V_θ(φ_t, A_t^τ, q_t) - (ε - A_t) ||² ]
```

Here `φ_t` denotes VLM features and `q_t` robot-state features.

Inference has no real future action, so it begins from noise and performs four forward-Euler updates:

```text
A_t^0 ~ N(0, I)

A_t^(τ+1/K)
= A_t^τ + (1/K) V_θ(φ_t, A_t^τ, q_t)

K = 4
```

GR00T-N1-2B has 2.2B total parameters, including about 1.34B in the VLM. On L40, generating a 16-step chunk takes about 63.9 ms.

---

## Data and Training

### Using Videos without Robot Actions

Robot trajectories directly supervise images, states, and actions. Human and generated videos contain images but no robot joint commands.

GR00T N1 adds action-like supervision in two ways.

**Latent actions** learn discrete behavioral codes from visual changes, rather than exact joint angles: concepts like moving left, grasping, or pushing.

![GR00T N1 Paper Deep-Dive: 5.1 Using Videos without Robot Actions (image-01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-01.png)

These can span embodiments: human hands and robot grippers have different joints but can both move an object left in the image.

An **inverse dynamics model (IDM)** infers actions between observations:

```text
Observation_t + Observation_(t+1)
                  ↓
                 IDM
                  ↓
          Pseudo Action Label
```

Latent actions resemble unitless behavioral vocabulary; IDM outputs resemble pseudo-action labels. Neither makes videos perfect physical demonstrations. They make image-only data usable for pre-training.

### Neural Trajectories and Simulation: More Variation from Fewer Demonstrations

Video generation starts from real robot images and varies language prompts to synthesize tasks, object positions, and trajectories. These are **neural trajectories**.

![GR00T N1 Paper Deep-Dive: 5.2 Neural Trajectories and Simulation: More Variation from Fewer Demonstrations (image-00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-00.png)

The authors expand 88.4 hours of internal teleoperation into 827.3 hours of generated video, nearly tenfold. Generation can move objects impossibly, distort contacts, or deform the robot, so language-model and rule-based filters remove low-quality samples before latent actions or IDM provide supervision.

![GR00T N1 Paper Deep-Dive: 5.2 Neural Trajectories and Simulation: More Variation from Fewer Demonstrations (image-08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-08.png)

Simulation instead executes in a physics engine. Methods such as DexMimicGen retarget object-centric demonstrations to new scenes, producing about 780,000 simulated trajectories, roughly 6,500 hours.

**Difference:**

- Neural trajectories provide visual and semantic variation but limited physical reliability.

- Simulation provides exact actions and physics interactions but retains a sim-to-real gap.

    

### Pre-Training and Post-Training

Teleoperation data comes from Manus, VIVE, Apple Vision Pro, Leap Motion, and other devices, retargeted to the robots.

![GR00T N1 Paper Deep-Dive: 5.3 Pre-Training and Post-Training (image-05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-05.png)

![GR00T N1 Paper Deep-Dive: 5.3 Pre-Training and Post-Training (image-15)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-15-en.png)


Post-training is neither training from scratch nor immediate zero-shot control of arbitrary robots. It adapts the foundation to a target camera setup, state, action interface, and task.

| Setting | Pre-training | Post-training |
|---|---|---|
| Batch size | 16,384 | 128 or 1,024 |
|Gradient Steps|200,000|20,000\-60,000|
| Main data | Multiple embodiments | One embodiment / task |
| Purpose | General priors | Adaptation to a specific body and task |

GR00T-N1-2B pre-training uses about 50,000 H100 GPU hours. The dataset totals 8,375.7 hours and 592.9M frames.

**One-sentence view:** Pre-training supplies broad experience of worlds and bodies; post-training teaches the model to use this particular robot.

---

## Experiments and Results

### How Is Effectiveness Tested?

Simulation and physical tests examine pre-training priors and adaptation with limited data, rather than only fitting training tasks.

![GR00T N1 Paper Deep-Dive: 6.1 How Is Effectiveness Tested? (image-10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-10.png)

Simulation benchmarks include:

- **RoboCasa Kitchen:** 24 kitchen tasks.

- **DexMimicGen Cross-Embodiment Suite:** nine cross-robot manipulation tasks.

- **GR-1 Tabletop:** 24 humanoid tabletop tasks.

    

Real GR-1 tests include pick-and-place, articulated objects, industrial manipulation, and multi-robot cooperation.

![GR00T N1 Paper Deep-Dive: 6.1 How Is Effectiveness Tested? (image-03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-03.png)

Main comparisons are BC-Transformer and Diffusion Policy. GR00T N1 differs not just in size and architecture but in heterogeneous cross-embodiment pre-training, so results reflect data and training as well.

### Do Priors Help with Little Data?

Simulation post-training uses 30, 100, or 300 demonstrations per task. Main trends are:

- Priors help most when task data is scarce.

- With more data, a dedicated Diffusion Policy narrows the gap, but GR00T N1 retains strong data efficiency.

- In some settings, about 10% of task data approaches Diffusion Policy trained with all data.

    

![GR00T N1 Paper Deep-Dive: 6.2 Do Priors Help with Little Data? (image-16)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-16.png)

The practical implication is:

> A foundation model's value is not needing no data; it is learning effectively from a pre-trained starting point when your data is limited.
> 
> 

### Do Neural Trajectories Improve Real Behavior?

Ablations compare real data alone, generated videos labeled with latent actions, and generated videos with IDM pseudo-actions.

![GR00T N1 Paper Deep-Dive: 6.3 Do Neural Trajectories Improve Real Behavior? (image-02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-02.png)

Synthetic trajectories improve some tasks, with IDM often connecting more directly to real action spaces than latent codes. More generation is not automatically better: physical errors and pseudo-label bias enter training too.

The authors also observe spontaneous left-to-right handovers in a pre-trained model that can disappear after narrow task post-training.

![GR00T N1 Paper Deep-Dive: 6.3 Do Neural Trajectories Improve Real Behavior? (image-04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-04.png)

This illustrates **catastrophic forgetting**: focused fine-tuning can raise a target score while overwriting broader pre-trained capabilities.

---

## Limitations, Practical Implications, and Summary

### What Remains Unsolved?

- **Mostly short tabletop tasks.** Long-duration navigation, whole-body motion, and joint planning remain future work.

- **Limited spatial reasoning.** Recognizing an object does not imply precise 3D, contact, or force understanding.

- **Synthetic physical inconsistencies.** Plausible-looking video does not ensure executable motion.

- **Forgetting during post-training.** Adaptation should be evaluated for generalization retention as well as target success.

    

### Connecting to LeRobot Practice

The engineering appendix extends the LeRobot dataset format. Storing numbers is insufficient; their meanings must be defined.

| Content | Information to specify |
|---|---|
| Video | Camera names, views, resolution, frame rate, and time alignment. |
| State | The joint or pose represented by each dimension. |
| Action | Absolute or incremental targets; joint or end-effector controls. |
| Language | Instructions associated with each episode. |
| Rotation | Rotation matrix, Euler angles, quaternion, or 6D representation. |

`modality.json` adds these semantics, addressing whether the model understands the seventh number, not just whether it can open the file.

For readers with ACT datasets, the additional considerations are:

| Stage | ACT practice | Additional foundation-VLA considerations |
|---|---|---|
| Collection | Align cameras, state, and actions. | Stable language annotations. |
| Data | Consistency within one robot. | Semantic consistency across embodiments. |
| Training | Learn a policy from demonstrations. | Post-train a foundation checkpoint. |
| Inference | Image + state → action chunk | Image + language + state → action chunk |
| Evaluation | On-robot success | Success, generalization, and retention of pre-trained capabilities |

</div>
