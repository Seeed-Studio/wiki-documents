---
description: "A deep dive into π0.5's joint training on multiple data sources, hierarchical action generation, generalization to unfamiliar homes, and differences from π0."
title: "π₀.₅ — Open-World Generalization"
hide_title: true
keywords:
  - Paper Deep-Dive
  - pi05
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
slug: /robotics/paper_reading_pi05
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/robotics/paper_reading_pi05/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-pi05-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-pi05-title">π₀.₅ — Open-World Generalization</h1>
  <p className="paper-reading-lead">π0.5: a Vision-Language-Action Model with Open-World Generalization</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Open-world generalization</li>
    <li>Heterogeneous data</li>
    <li>Hierarchical control</li>
    <li>Co-training</li>
  </ul>
</section>

## Prerequisites

### How Robots Learn from Demonstrations

**Explanation:** Imitation learning uses recorded human operation to learn how to move in a particular scene under an instruction.

A VLA receives images, task text, and robot state and outputs control actions. For “put the plate in the sink,” images locate the plate, state describes the arm, the instruction defines the goal, and actions control grasping and placement.

π0.5 also predicts a short subtask, such as “pick up the plate,” which then conditions action generation.

### From Direct Actions to Subtask Selection

![π0.5 Paper Deep-Dive: 1.2 From Direct Actions to Subtask Selection (image-08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-08-en.png)

Mapping “clean the kitchen” directly to joint motions combines deciding what to do with deciding how to move. Longer tasks make transitions harder.

π0.5 separates these decisions within the same model: select the current subtask, then generate continuous actions. For example:

```text
Clean the kitchen → Pick up the plate → Grasping action chunk
Observe again → Put the plate in the sink → Transport action chunk
```

**Paper:** Each prediction covers 50 future control points, an action chunk. High-level subtasks update more slowly; the low level generates chunks conditioned on them, and the controller executes the points sequentially.

**Example:** One joint might have a single-step target `[0.1]` or a three-step chunk `[0.1, 0.12, 0.15]`. Real outputs are multidimensional and 50 steps long. The robot still needs new observations and predictions; an entire household task is not generated once and executed blindly.

### Training, Inference, and Evaluation

| Stage | What happens |
|---|---|
| Training | Learn text and action outputs from demonstrations, subtask annotations, and image-text data, then adapt for household mobile manipulation. |
| Inference | Select a subtask from current images and the overall instruction, then generate continuous actions from the subtask and state. |
| Evaluation | Execute in held-out rooms and score completed steps; separately test whether the requested object and destination are selected. |

Low training error does not guarantee successful household work; that requires real-robot trials.

---

## Abstract

### Translation

Useful robots must perform real tasks beyond the laboratory. VLAs show strong direct-control capabilities, but adaptation to unfamiliar real environments remains an open question.

Building on π0, π0.5 improves adaptability through co-training on heterogeneous tasks and sources: multiple robots, high-level semantic prediction, and web data. Samples combine images, instructions, object detection, subtask prediction, and low-level actions.

The experiments suggest that transfer between these knowledge sources is important for generalization. The authors describe an end-to-end learned system performing long-horizon, dexterous kitchen and bedroom cleaning in entirely unseen homes, and claim it as the first system with this combination of capabilities.

### Commentary

- **The central question is whether the robot works in another home.** Picking up a plate in a training room differs from finding one, choosing the next step, and placing it in an unfamiliar kitchen's sink.

- **Sources serve different purposes.** Other robots provide manipulation experience, image-text data provides object and scene knowledge, and subtask annotations teach task organization.

- **“First” is the authors' claim.** Judge the evaluation scope and comparisons rather than treating the wording as a solution to every household task.

    ---

---

## Introduction

![π0.5 Paper Deep-Dive: 3. Introduction (image-00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-00-en.png)

### Paragraph 1: Unfamiliar Environments Are Difficult

- **Content:** Outside the lab, robots face different objects, skill orderings, and scene purposes.

- **Problem:** Success in a fixed scene is insufficient for the real world.

- **Setup:** The training recipe must cover several levels of capability.

![π0.5 Paper Deep-Dive: Paragraph 1: Unfamiliar Environments Are Difficult (image-10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-10-en.png)

### Paragraph 2: Why Use Different Experiences?

- **Content:** People combine direct experience, knowledge from others, and lessons from other tasks. Robots should also use multiple sources.

- **Problem:** Target-robot demonstrations cannot cover every real-world situation.

- **Setup:** VLAs provide a shared interface for images, text, and actions.

![π0.5 Paper Deep-Dive: Paragraph 2: Why Use Different Experiences? (image-03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-03-en.png)

### Paragraph 3: A Co-Training Framework

- **Content:** The authors propose jointly training a VLA on different kinds and sources of knowledge.

- **Problem:** Turn the preceding motivation into a concrete research approach.

- **Setup:** Introduce π0.5 and its data composition.

![π0.5 Paper Deep-Dive: Paragraph 3: A Co-Training Framework (image-12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-12-en.png)

### Paragraph 4: The Data Recipe

- **Content:** Extend π0 with about 400 hours of household mobile-robot data plus other robots and image-text tasks. In stage 1, 97.6% of training samples come from outside the target household mobile-manipulation data.

- **Problem:** How can these sources jointly help the target robot?

- **Setup:** Demonstrate 10–15-minute behavior in unfamiliar homes, then ablate the sources. The 97.6% figure is a sample proportion, not a duration proportion.

![π0.5 Paper Deep-Dive: Paragraph 4: The Data Recipe (image-07)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-07-en.png)

### Paragraph 5: Hierarchical Execution

- **Content:** After heterogeneous pre-training, post-train for mobile manipulation. The same model selects subtasks and produces actions, with less frequent high-level updates.

- **Problem:** Long tasks require both correct next-step choices and precise execution.

- **Setup:** Explain how different sources support scene judgment and control.

![π0.5 Paper Deep-Dive: Paragraph 5: Hierarchical Execution (image-11)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-11-en.png)

### Paragraph 6: Contributions and Validation

- **Content:** The contribution is the π0.5 system and training recipe, with a proof of concept in unseen homes.

- **Problem:** Experiments must establish whether co-training actually improves adaptability.

- **Setup:** Test new scenes, remove data sources, and compare high-level policies. The “first” wording remains an author claim.

    ---

    

---

## Related Work

![π0.5 Paper Deep-Dive: 4. Related Work (image-01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-01-en.png)

- **Generalist robot policies:** Earlier work broadens task and scene coverage, but many tests remain close to training conditions. This paper emphasizes multi-stage household tasks in unfamiliar homes.

- **Co-training with non-robot data:** Prior work initializes from or continues training with image-text data. Here, other-robot actions, subtask prediction, and human language guidance are combined and evaluated.

- **Language-based task organization:** A common design separates planning and execution models. π0.5 uses one model for both levels, although they run at different frequencies.

- **Open-world systems:** Earlier robots perform basic tasks such as grasping in new settings. This work extends to multi-step tidying; new homes mainly mean new layouts, backgrounds, and objects, not entirely unseen task categories.

    

---

## Robot and Data Platforms

### Goals and Components

**Paper:** Two mobile bimanual platforms are used, aiming for one model that can tidy and clean different homes.

![π0.5 Paper Deep-Dive: 5.1 Goals and Components (image-05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-05.png)

| Component | Configuration and role |
|---|---|
| Arms and grippers | Six motion DoF plus one gripper control per arm, 14 dimensions total. |
| Mobile base | Two translational and one rotational velocity, three dimensions total. |
| Lift mechanism | One or two dimensions for height or fore-aft adjustment. |
| State and action | 18 or 19 dimensions, depending on platform. |
| Cameras | Four RGB views: front, rear, and two wrists. |

Outputs are target positions for arms, grippers, and lift, plus base velocities. A simple PD controller tracks them; the reported system has no additional trajectory-planning or collision-detection module.

**Explanation:** Arms manipulate, while mobility and lifting extend reach. Hardware alone does not establish task capability; the experiments do.

### Connecting Operation and Recording

Demonstrations record images, states, and actions. Multi-step tasks also receive human subtask and object-location annotations. Post-training adds language demonstrations: an expert selects the next instruction and an already trained low-level policy executes it.

```text
Expert selects “pick up the pillow” → Low-level policy executes → Record the images and chosen instruction
```

**Explanation:** These records directly supervise what to do next, rather than only how joints move. They assume that the low-level policy can already execute the subtask. At deployment, the model selects the steps itself.

### Sensors, Collection, and Capabilities

High-level decisions use all four views; low-level actions use the front and two wrist views. Control targets execute at 50 Hz, which does not mean rerunning the full model 50 times per second.

About 400 hours of mobile demonstrations come from roughly 100 homes. Other sources include stationary household arms, laboratory robots, and OXE. Image resolutions, per-source sampling rates, and demonstration durations are not uniformly specified; the 50 Hz control rate cannot fill those gaps.

Demonstrated behaviors include laundry collection, dish placement, drawer organization, bed making, and towel hanging. Quantitative real-home tests cover three unseen homes, focusing on drawer loading, laundry-to-basket, and dishes-to-sink tasks; controlled comparisons also include bed making.

---

## Heterogeneous Co-Training and Hierarchical Actions

### Select the Current Subtask First

“Clean the bedroom” does not specify what to grasp now. The model must inspect the scene, choose the next step, and condition action generation on it.

Two conditional relationships summarize this:

```text
Current images + state + overall task → Subtask s
Current images + state + subtask s → Action chunk A
```

Here, s is text such as “pick up the pillow,” and A is a control sequence. In the paper's factorization, low-level actions depend on the subtask rather than directly on the overall instruction.

![π0.5 Paper Deep-Dive: 6.1 Select the Current Subtask First (image-06)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-06.png)

A pillow on the floor may prompt “pick it up,” followed by “put it at the head of the bed.” If the high-level choice is wrong, accurate motions can still perform the wrong task. Repeatedly opening and closing drawers is one observed failure.

### Encoded Actions for Training, Continuous Actions for Execution

The model needs efficient learning and timely, precise control, so the stages use different representations.

- **Pre-training:** FAST compresses continuous actions into discrete symbols, learned alongside text through next-token prediction.

- **Post-training:** Add an action expert trained with flow matching while retaining text and discrete-action prediction.

- **Execution:** Generate subtask text autoregressively, then use ten updates from random initialization to obtain a continuous chunk.

    

For 50 future steps and 18 controls per step, the controller ultimately needs a 50 × 18 numerical array, not text. Encoded training followed by continuous control is an important distinction between stages.

**Explanation:** Chunk length controls the prediction horizon; update count controls internal refinement. Single-step prediction lacks within-chunk planning, while long horizons encounter more scene changes. The paper uses 50 control points and ten updates without systematically establishing them as optimal for every robot.

Joint chunk generation does not eliminate the need for feedback. The paper gives no universal execution fraction for every platform, and ACT-style temporal ensembling is not its core mechanism.

### What Each Data Source Adds

![π0.5 Paper Deep-Dive: 6.3 What Each Data Source Adds (image-13)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-13.png)

| Data | Learning opportunity |
|---|---|
| Household mobile-robot data | Combine movement, lifting, and bimanual manipulation in real homes. |
| Stationary arms across environments | More homes, objects, and manipulation scenes. |
| Cross-robot laboratory data | More skills and tasks. |
| Subtask annotations | Choose the next step and locate relevant objects. |
| Web image-text data | Retain recognition, scene understanding, and language capabilities. |
| Expert language demonstrations | Direct an existing low-level policy through multi-step tasks. |

These sources train one model; execution does not cycle through datasets. Different samples request different outputs: an image-question-answer pair does not need fabricated robot actions.

**Evidence boundary:** Removing other-robot data reduces performance on controlled household tasks. Removing web data causes no statistically significant drop in that test group, but worsens unfamiliar-object instruction following and high-level judgment. Different sources are not equally important in every test.

![π0.5 Paper Deep-Dive: 6.3 What Each Data Source Adds (image-14)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-14.png)

![π0.5 Paper Deep-Dive: 6.3 What Each Data Source Adds (image-09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-09.png)

### Connecting the Two Training Stages

**Pre-training:** Start from PaliGemma and mix robot actions, subtasks, object locations, and image-text tasks for 280,000 steps. No continuous-expert training loss is used in this stage.

Normalize actions to [−1, 1] using each dataset dimension's 1st and 99th percentiles, and pad lower-dimensional robots with zeros. Control-mode tags in instructions distinguish joint targets from end-effector targets.

**Post-training:** Add a randomly initialized, approximately 300M-parameter action expert and train for 80,000 steps. Retain successful, non-timeout household mobile and stationary-arm demonstrations and remove cross-robot laboratory action data. Keep relevant subtasks and web data and add expert language demonstrations.

The objective can be summarized as:

**Total loss = token-prediction loss + 10 × continuous-action loss.**

The first term is cross-entropy for text and FAST tokens; the second is squared error in action-update directions. Its weight is ten during post-training and zero during pre-training. Attention separates the action representations so the continuous expert cannot read the FAST action answers.

Flow-matching training mixes real actions A with standard Gaussian noise ε: `noisy action = τA + (1−τ)ε`, with τ between zero and one. Equation (1) writes the target as `ε−A`. For A=0.6, ε=−0.2, and τ=0.5, the input is 0.2 and target −0.8. This is a vector-field sign convention, not a command to move the robot backward.

τ is internal generation progress; ε and A are normalized 50 × d arrays, where d is action dimensionality. They are not seconds. The scalar example explains the equation; training uses full arrays. Inference starts from noise and requires no ground-truth A.

### Complete Network, Experiments, and Boundaries

**Paper:** Images become visual features, and instructions and state enter the VLM. Unlike π0, π0.5 discretizes state as text tokens. The backbone predicts subtasks and supplies observation features to the smaller expert, which generates continuous actions from noisy inputs.

| Input or module | Shape or processing |
|---|---|
| Images | Four high-level views, three low-level views; encoded as visual feature sequences. |
| Overall instruction, subtask, and state | Token sequences forming the observation prefix with visual features. |
| VLM backbone | Width 2048, 18 layers; predicts text and, during pre-training, FAST tokens. |
| Action expert | Width 1024, 18 layers, about 300M parameters; linearly embeds noisy 50 × d actions. |
| Generation progress τ | Encoded separately and injected into expert layers; attention reads the observation prefix. |
| Continuous output | Project back to 50 × d updates; ten updates generate a chunk. |

The expert reads observations and its own action features, but not FAST tokens. The backbone does not read expert features. Attention shares observation information without directly adding widths 2048 and 1024. The paper does not uniformly specify visual-sequence length or a maximum action dimension across all datasets.

**Caution:** Figure 3 labels Gemma as 2.6B, while Appendix E calls it a “2B VLM.” The verifiable layer counts and widths are retained without inventing an exact total parameter count.

The appendix gives **50 control points**. The inclusive-endpoint convention writes H=49; “50 steps” avoids confusion. The two platforms output 50 × 18 or 50 × 19 arrays, with padding for cross-robot training.

```text
Training: heterogeneous data → backbone predicts text / action tokens
          post-training adds noisy actions → expert learns continuous updates

Inference: observations + overall task → subtask text
           observations + subtask + random actions → ten updates → continuous chunk → execute and observe again
```

**Three points to watch in the experiments:**

1. **More training locations generally help.** Comparisons use 3, 12, 22, 53, 82, and 104 locations. The 104-location model approaches a model that has seen the evaluation setting on these tasks; this is not a guarantee for every new home.

2. **The full recipe beats changing only action training.** With the same robot dataset and similar steps, π0.5 outperforms π0 and π0-FAST+Flow. FAST alone cannot explain the gain; subtask and image-text co-training also differ.

3. **High-level reasoning helps, and high-level training data also matters.** A variant retaining full training data but omitting explicit inference-time subtask selection is second best. Removing language demonstrations or web data lowers performance. Saying a subtask before acting is not the whole explanation.

    

Most main figures report **task completion scores**, not full-task success rates. Typically there are about ten trials per policy per task, or roughly 40 across the four controlled tasks; some cancelled trials are excluded. Dishes-to-sink has eight possible points, awarded separately for picking and placing. Half the score does not mean half the trials fully succeeded.

![π0.5 Paper Deep-Dive: 6.5 Complete Network, Experiments, and Boundaries (image-02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-02.png)

The paper demonstrates 10–15-minute behaviors, while many quantitatively evaluated real-home tasks last about 2–5 minutes. Do not conflate them. Unfamiliar handles, difficult doors, occlusion, repeated high-level decisions, complex preferences, and cross-room memory remain challenges. The work validates useful behavior in new homes rather than reliable completion of all household chores.

*Reference locations: abstract and introduction; Sections II, IV-A–IV-E, V-A–V-E, and VI; Figures 3, 5, and 7–13; Appendices B and E. This guide adds no project-specific hardware-transfer assumptions.*

---

## Comparing π0 and π0.5
### Main Changes
**Explanation:** π0 studies generalist, dexterous control across robots and tasks. π0.5 extends this toward understanding unfamiliar homes and organizing multi-stage household work.

| Aspect | π0 | π0.5 |
|---|---|---|
| Focus | General manipulation across robots and tasks. | Multi-stage manipulation in new homes, with new objects and layouts. |
| Data | VLM initialization, mainly cross-robot demonstrations and language labels for policy training. | Continued co-training on actions, subtasks, localization, and web data; expert language demonstrations in post-training. |
| Action training | Continuous expert in both pre- and post-training. | FAST tokens during pre-training; add the expert during post-training while retaining both representations. |
| Executed actions | Continuous flow-matching chunks. | Continuous flow-matching chunks too; FAST mainly improves training. |
| Long-task organization | Follow instructions from a person or external high-level VLM when explicit semantic planning is needed. | The same model selects subtasks from the overall task and generates actions for them. |
| State input | Continuous state projected into the action expert. | State discretized as tokens in the VLM. |
| Post-training goal | Improve task proficiency with cleaner, more consistent demonstrations. | Adapt both action execution and subtask selection for household mobile manipulation. |

Both use PaliGemma and an approximately 300M-parameter action expert, with 50 control points and ten flow updates. π0.5 mainly changes the training recipe and task organization; its gains are not simply from a larger model or longer chunks.

### Example: Put a Plate in the Sink
```text
π0：
Images + state + “put the plate in the sink” → continuous chunk → execute
A person or external high-level model can supply intermediate instructions for an explicitly decomposed kitchen-cleaning task.

π0.5：
Images + state + “clean the kitchen” → model selects “pick up the plate”
Images + state + “pick up the plate” → continuous chunk → execute and observe again
Then select another subtask, such as “put the plate in the sink,” from the updated scene.
```

**Caution:** This compares execution pathways. The original π0 also demonstrates long tasks; it is not limited to single-step operations. π0.5 adds explicit subtask selection within the same model.

### What Do the Experiments Support?
![π0.5 Paper Deep-Dive: 7.3 What Do the Experiments Support? (image-04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-04.png)

**Paper:** Under the same robot dataset and similar steps, π0.5's complete recipe beats π0 and π0-FAST+Flow in the tested unfamiliar controlled homes. The latter already combines FAST and flow matching, but uses only robot-action data and lacks high-level reasoning. Changing action training alone is insufficient to match full π0.5.

**Caution:** These are retrained baselines within the π0.5 paper, not scores spliced from separate publications. They support improvements in these tasks and conditions, not a fixed gain everywhere.

Compare data scopes carefully: π0's “over 10,000 hours” refers to total robot demonstrations, while π0.5's “about 400 hours” refers only to household mobile manipulation and excludes substantial other-robot and image-text data. The numbers do not show that π0.5 universally wins with less total data.

*Comparison sources: π0, 2410.24164v4, Sections III–V and high-level instruction experiments; π0.5, 2504.16054v1, Sections IV, V-D, V-E, Figure 12, and Appendix E.*

</div>
