---
description: "A deep dive into π0's vision-language backbone, action expert, conditional flow matching, cross-embodiment pre-training, and task post-training."
title: "π₀ — General-Purpose Robot Control"
hide_title: true
keywords:
  - Paper Deep-Dive
  - pi0
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
slug: /robotics/paper_reading_pi0
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/robotics/paper_reading_pi0/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-pi0-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-pi0-title">π₀ — General-Purpose Robot Control</h1>
  <p className="paper-reading-lead">π0: A Vision-Language-Action Flow Model for General Robot Control</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Robot foundation models</li>
    <li>Action expert</li>
    <li>Flow matching</li>
    <li>Cross-embodiment training</li>
  </ul>
</section>

π0 uses the pre-trained PaliGemma vision-language model as a semantic backbone and adds an approximately 300M-parameter action expert. Conditional flow matching generates continuous action chunks, while large-scale cross-robot pre-training and high-quality task post-training adapt the same model to single-arm, bimanual, and mobile systems.

![π0 Paper Deep-Dive: π0 Paper Deep-Dive (image-00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-00.png)

## Prerequisites
### What Is a Vision-Language-Action Model?
![π0 Paper Deep-Dive: 1.1 What Is a Vision-Language-Action Model? (image-12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-12-en.png)

### Autoregressive Discrete Actions and Continuous Chunks
![π0 Paper Deep-Dive: 1.2 Autoregressive Discrete Actions and Continuous Chunks (image-18)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-18-en.png)

### Training, Inference, and Evaluation
![π0 Paper Deep-Dive: 1.3 Training, Inference, and Evaluation (image-16)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-16-en.png)

---

## Abstract
### Translation
Robot learning promises flexible, general-purpose, dexterous systems and insights into fundamental AI questions. Achieving the generality needed for real systems still faces substantial obstacles in data, generalization, and robustness.

The paper asks how generalist robot policies, or robot foundation models, can address these challenges for complex, dexterous tasks. It introduces a flow-matching architecture built on a pre-trained VLM, inheriting semantic knowledge from internet-scale data, then trains it on diverse single-arm, bimanual, and mobile-manipulation platforms.

Evaluation covers three settings: direct prompting, following language instructions from a human or high-level VLM policy, and fine-tuning for new skills. Tasks include laundry folding, table clearing, and cardboard-box assembly.

### Commentary
- **Architecture is only one part of the problem.** The paper identifies three bottlenecks: sufficient data scale, an architecture for continuous high-frequency actions, and suitable pre-/post-training recipes.

- **The VLM supplies understanding; the action expert supplies control.** PaliGemma handles image-language semantics, while the expert processes robot state, noisy actions, and continuous outputs.

- **Flow matching replaces autoregressive action-token generation.** The model generates the complete continuous chunk from noise in parallel.

- **Cross-embodiment data is central.** Arms and mobile bases have different state and action spaces. Padding and masked image slots provide a shared training interface.

- **Pre-training and post-training have different roles.** Broad pre-training includes unusual states and recovery behavior; post-training emphasizes consistent, fluent success. Together they support adaptability and execution quality.

---

## Introduction
![π0 Paper Deep-Dive: 3. Introduction (image-07)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-07-en.png)

### Paragraph 1: Generality Requires Physical Experience
- **Main point:** AI excels at specialized tasks such as protein-structure prediction and image generation, but people remain far more general across environments, constraints, language, and unexpected events. LLMs and VLMs benefit from diverse pre-training but do not themselves acquire physical interaction experience.

- **Problem carried forward:** Image-text descriptions cannot replace contact with objects and experience of dynamics.

- **Setup for the method:** Generalist robot models need both internet semantics and physical robot data.

![π0 Paper Deep-Dive: Paragraph 1: Generality Requires Physical Experience (image-08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-08-en.png)

### Paragraph 2: Why Foundation Models Fit Robotics
- **Main point:** Generalist models pool data from other tasks, robots, and even non-robot sources, reducing single-task scarcity. Diversity can also cover more scenes, errors, and recoveries, improving robustness.

- **Problem carried forward:** One robot and one task rarely supply enough data to cover failure states.

- **Setup for the method:** Pre-train broadly, then prompt or fine-tune rather than training every task from scratch.

![π0 Paper Deep-Dive: Paragraph 2: Why Foundation Models Fit Robotics (image-11)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-11-en.png)

### Paragraph 3: Three Bottlenecks
- **Main point:** Generalist policies need sufficient scale, an architecture that fuses heterogeneous data and expresses precise actions, and appropriate data selection and training recipes.

- **Problem carried forward:** Language-model methods cannot simply be copied to continuous, high-frequency, platform-dependent control.

- **Setup for the method:** π0 addresses data, architecture, and training separately.

![π0 Paper Deep-Dive: Paragraph 3: Three Bottlenecks (image-02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-02-en.png)

### Paragraph 4: The Architectural Answer
- **Main point:** Initialize from a VLM, jointly train across embodiments, use action chunks and flow matching for continuous control, and add an action expert to extend the backbone into an action generator.

- **Problem carried forward:** Different robots have different action spaces, while discrete autoregression struggles to combine speed and precision.

- **Setup for the method:** Sections 5 and 6 develop the cross-embodiment dataset and action expert.

![π0 Paper Deep-Dive: Paragraph 4: The Architectural Answer (image-14)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-14-en.png)

### Paragraph 5: The Training Recipe
- **Main point:** Pre-/post-training divide the work. Training only on polished successes gives little experience of mistakes or recovery; using broad but lower-quality data alone may not produce efficient execution. Pre-training broadens experience and post-training shapes preferred behavior.

- **Problem carried forward:** “Cleaner data is always better” is not a universal rule across robot-learning stages.

- **Setup for the experiments:** Compare direct use of the pre-trained model, training from scratch, and fine-tuning after pre-training.

![π0 Paper Deep-Dive: Paragraph 5: The Training Recipe (image-13)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-13-en.png)

### Paragraph 6: Contributions and Evaluation Scope
- **Main point:** Contributions include a VLM-based flow-matching generalist architecture and empirical study of pre-/post-training recipes. The policy supports language prompting, downstream fine-tuning, and intermediate instructions from a high-level VLM.

- **Problem carried forward:** Both architecture and training need evidence on real robots.

- **Setup for the experiments:** More than 10,000 hours of robot data support evaluations including folding laundry, clearing tables, microwave loading, egg-carton packing, box assembly, and grocery bagging.

---

## Related Work
- **VLAs:** RT-2, OpenVLA, and Octo transfer visual-language representations to robot control. Many use discrete autoregressive action tokens. π0 retains a pre-trained VLM while generating continuous high-frequency chunks through conditional flow matching.

- **Diffusion/flow models and multimodal Transformers:** Diffusion Policy models multimodal continuous actions, while Transfusion combines discrete tokens and continuous generative objectives. π0 applies related ideas to VLAs, with image-language and state-action weights interacting through attention.

- **Large-scale robot learning:** Earlier datasets often focused on simpler grasping and pushing. OXE, Bridge, and DROID broaden task and robot coverage. π0 adds over 10,000 hours of internal data, largely dexterous bimanual behavior, and a two-stage pre-/post-training recipe.

- **Dexterous manipulation:** ACT and Diffusion Policy learn precise tasks from smaller datasets but are usually task- and robot-specific. π0 instead pre-trains across embodiments and then uses prompting or high-quality post-training at different data scales.

---

## Cross-Embodiment Systems and Data
### Design Goals and Components
π0 is a cross-embodiment model-and-data system rather than a controller tied to one arm. Its goals are:

1. Share data across single-arm, bimanual, and mobile-manipulation robots.

2. Process language, visual observations, robot state, and continuous actions together.

3. Directly execute covered tasks or learn difficult/new tasks through post-training.

4. Support dexterous control at up to 50 Hz.

![π0 Paper Deep-Dive: 5.1 Design Goals and Components (image-15)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-15.png)

| Platform category | Image inputs | State / action space |
|---|---|---|
| Single UR5e | Wrist + shoulder, two views | 7D state, 7D action |
| Bimanual UR5e | Three views | 14D state, 14D action |
| Single Franka | Two views | 8D state, 8D action |
| Bimanual Trossen | Two wrists + base, three views | 14D state, 14D action |
| Bimanual ARX / AgileX | Two wrists + base, three views | 14D state, 14D action |
| Mobile Trossen / mobile ARX | Two wrists + base, three views | 14D state, 16D action; two extra nonholonomic-base controls |
| Mobile Fibocom | Two arms + omnidirectional base | 14D state, 17D action; two translation and one rotation control for the base |

**Caution:** Kinematically similar platforms are grouped into configuration categories. Seven configurations do not mean seven physical robots, nor only seven robot types in OXE. The internal dexterous data covers seven configurations; added OXE data covers 22 robot types.

### Cross-Embodiment Training and Control
The overall workflow is:

```text
Multi-platform teleoperation + open robot data + internet image-text pre-training
                         ↓
          Weighted cross-embodiment data mixture
                         ↓
      Joint training of PaliGemma + π0 action expert
                         ↓
             Generalist π0 base policy
                  ↙                 ↘
        Direct language prompting        High-quality task post-training
                  ↘                 ↙
           Continuous action chunks across platforms
```

Two alignments fit different robots into one model:

- **State/action alignment:** pad to a maximum of 18 dimensions. Smaller robots use trailing zeros; 18 dimensions accommodate two six-DoF arms, two grippers, a mobile base, and a liftable torso.

- **Image alignment:** reserve three image slots and mask absent views for robots with only one or two cameras.

Language labels include full tasks and short segments, typically about two seconds. Segment instructions such as “pick up the napkin” and “throw it in the trash” allow a high-level VLM to decompose long tasks like table clearing while π0 handles physical execution.

**Paper:** A task–robot group with $n$ samples receives weight $n^{0.43}$. The sublinear exponent reduces dominance by very large groups such as extensively sampled laundry tasks.

### Sensors, Collection, and Capabilities
#### Data Composition
![π0 Paper Deep-Dive: Data Composition (image-06)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-06.png)

- Internal data contains 903M timesteps: 106M from single-arm and 797M from bimanual robots.

- It covers 68 broad tasks and seven robot configurations.

- Open data is 9.1% of the mixture, including OXE, Bridge v2, and DROID.

- Open datasets typically have one or two cameras and 2–10 Hz control, but broad object and environment diversity.

- The paper summarizes total robot demonstrations as more than 10,000 hours.

- Task post-training ranges from about five hours for simple tasks to 100 hours or more for the hardest tasks.

#### Direct Prompting
![π0 Paper Deep-Dive: Direct Prompting (image-03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-03.png)

The paper compares π0, OpenVLA, Octo, and π0-small without VLM initialization on shirt folding, easy and hard table clearing, grocery bagging, and taking toast from a toaster:

- Full π0 trained for 700k steps achieves the highest mean progress on all five tasks.

- A 160k-step π0 parity model, with updates comparable to the baselines, still outperforms them.

- π0-small usually exceeds OpenVLA and Octo, supporting the value of the continuous-chunk architecture itself.

- Full π0 substantially exceeds π0-small, supporting benefits from VLM pre-training for semantics and cross-task control.

**Caution:** OpenVLA and Octo are not trained for the same number of epochs as full π0. The parity comparison partly addresses compute fairness, but the full-model comparison is not strictly compute-matched.

#### Post-Training on New Tasks
![π0 Paper Deep-Dive: Post-Training on New Tasks (image-17)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-17.png)

New tasks include bowl stacking, towel folding, putting a food container in a microwave, replacing a paper-towel roll, and Franka drawer loading. Each method is averaged over ten trials per task:

- π0 exceeds training from scratch and other methods overall and on most individual tasks.

- Towel folding and bowl stacking, which resemble pre-training tasks, reach substantial progress with less data.

- On some tasks, pre-training nearly doubles performance relative to training from scratch.

- Gains are not monotonic at every data scale. For microwave loading, the five-hour setting is close to baseline, while the one-hour setting shows a larger advantage.

#### Complex Long-Horizon Tasks
![π0 Paper Deep-Dive: Complex Long-Horizon Tasks (image-04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-04.png)

![π0 Paper Deep-Dive: Complex Long-Horizon Tasks (image-09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-09.png)

These tasks last about 5–20 minutes and combine dozens of grasps, stacks, spreading, and folding behaviors. Pre-training plus post-training exceeds half the maximum score on all illustrated tasks and generally beats training from scratch or using the pre-trained policy directly. Benefits are especially apparent on difficult tasks.

**Evidence boundary:** Not every task is solved reliably. The authors do not yet know the ideal pre-training mixture or how much and what kind of data a new task needs. Transfer to more distant domains such as driving, navigation, or legged motion is unverified. “Generalist” refers to the studied tasks and manipulation platforms, not arbitrary robots and environments.

---

## π0: A VLA with an Action Expert and Conditional Flow Matching
### Action Chunking: Generate 50 Future Steps
π0 models an action chunk rather than only $p(a_t\mid o_t)$:

$p(A_t\mid o_t),\qquad A_t=[a_t,a_{t+1},\ldots,a_{t+H-1}],\quad H=50$

Chunking addresses two needs:

- **High-frequency output efficiency:** one inference produces 50 control points without autoregressively decoding a token for every action dimension.

- **Trajectory coherence:** joint chunk modeling represents dependencies across continuous actions.

At $H=1$, this reduces to single-step prediction. A large $H$ executed fully open-loop reacts slowly to new observations. π0 predicts $H=50$ but executes 16 or 25 steps before observing again, balancing inference overhead and feedback frequency.

Padding to 18 dimensions is a training interface. Only a specific robot's valid dimensions are sent to its controller.

### Conditional Flow Matching: From Noise to Continuous Actions
![π0 Paper Deep-Dive: 6.2 Conditional Flow Matching: From Noise to Continuous Actions (image-01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-01-en.png)

### A Shared Interface without Erasing Platform Differences
Robots differ in camera count, state dimensions, and action dimensions and meanings. π0 uses fixed-size slots:

- Up to three images, with missing views masked.

- State and action padded to 18 dimensions.

- A Transformer conditioned on images, language, state, and demonstrated actions learns relationships across robot–task combinations.

This does not force action dimension $i$ to mean the same physical quantity on every robot. It supplies a fixed interface while the model learns platform-specific behavior from observations, state distributions, and data.

Two experts process different modalities:

- **VLM backbone:** image and language tokens, inheriting PaliGemma's internet-scale pre-training.

- **Action expert:** robot state $q_t$ and noisy chunks $A_t^\tau$, specializing in continuous control.

The weights are separate but exchange information through Transformer self-attention. Actions can therefore depend on language and images without converting the entire VLM into an action-only network.

### Combining Pre-Training and Post-Training
![π0 Paper Deep-Dive: 6.4 Combining Pre-Training and Post-Training (image-05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-05-en.png)

### The Complete π0 Network
![π0 Paper Deep-Dive: 6.5 The Complete π0 Network (image-10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi0/image-10.png)

#### Image and Language Inputs
PaliGemma's SigLIP encoder converts each RGB image to visual tokens, and tokenized instructions enter the larger VLM expert with them. The architecture figure summarizes roughly 400M SigLIP parameters and 2.6B Gemma parameters.

**Caution:** The PDF does not state a unified input image resolution or the exact per-image visual token count. These dimensions are not inferred from common PaliGemma configurations here.

#### Robot State
State $q_t$ is linearly projected to the Transformer embedding width and supplied to the action expert as a separate state block.

#### Noisy Actions and Flow Time
The chunk has $H=50$ action tokens. Each noisy action $a_{t'}^\tau$ is combined with sinusoidal flow-time encoding $\phi(\tau)$ through an MLP:

$e(a_{t'}^\tau,\tau)=W_3\,\mathrm{swish}\left(
W_2\,\mathrm{concat}(W_1a_{t'}^\tau,\phi(\tau))
\right)$

These embeddings enter the action expert. The network reads the 50 action-position outputs and linearly projects them to the vector field $v_\theta(A_t^\tau,o_t)$.

The maximum action tensor is $50\times18$. Only each robot's valid dimensions are used; padding is not sent to actuators.

#### Dual-Expert Transformer
- PaliGemma backbone: about 3B parameters.

- Additional action expert: about 300M.

- Total: about 3.3B.

- VLM expert: width 2048, 18 layers, MLP width 16,384.

- Action expert: width 1024 and MLP width 4096, reducing the cost of ten flow-matching forward passes.

The experts use separate weights, while their tokens interact in each layer's self-attention. This resembles a two-branch mixture of experts: image/language tokens route to VLM weights and state/action tokens to action-expert weights.

#### Block Attention Mask
The input sequence has three blocks:

```text
[Images, language] → [Robot state] → [Noisy action chunk]
```

Attention is bidirectional within each block. Earlier blocks cannot read later ones; later blocks can read earlier context. This limits changes from PaliGemma's pre-training distribution and allows fixed image, language, and state keys/values to be cached across ten integration steps, recomputing only the action suffix.

#### Training Loss
Conditional flow matching minimizes mean-squared error between predicted and target vector fields constructed from demonstrated actions and noise. It learns a conditional transport from noise to a distribution of plausible continuous actions rather than regressing a single unique action.

#### Complete Data Flow
```text
Training:
Multi-view images + language + robot state + demonstrated 50-step actions
→ Sample ε and τ; construct a noisy chunk
→ Images/language enter the VLM; state/actions enter the action expert
→ Predict the action vector field
→ Compute flow-matching loss against the target field

Inference:
Multi-view images + language + robot state + random action noise
→ Cache the observation prefix
→ Run ten Euler integration steps with the action expert
→ Obtain a 50-step continuous chunk
→ Execute 16 or 25 steps, depending on platform
→ Observe again and generate the next chunk

In one sentence:
PaliGemma interprets what is visible and what the user wants; the expert turns that understanding into continuous high-frequency control.
Chunking provides efficient, coherent trajectories; flow matching models continuous multimodal actions.
Cross-embodiment pre-training supplies broad experience, and high-quality post-training shapes skilled, stable task execution.
```

</div>
