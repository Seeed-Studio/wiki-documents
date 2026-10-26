---
description: "A deep dive into SmolVLA's lightweight architecture, community-data pre-training, asynchronous inference, experimental results, and ablation analysis."
title: "SmolVLA — Affordable Vision-Language-Action Models"
hide_title: true
keywords:
  - Paper Deep-Dive
  - smolvla
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
slug: /robotics/paper_reading_smolvla
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/robotics/paper_reading_smolvla/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-smolvla-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-smolvla-title">SmolVLA — Affordable Vision-Language-Action Models</h1>
  <p className="paper-reading-lead">SmolVLA: A vision-language-action model for affordable and efficient robotics</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Lightweight VLA</li>
    <li>Community data</li>
    <li>Flow matching</li>
    <li>Asynchronous inference</li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2506.01844" target="_blank" rel="noopener noreferrer" aria-label="Read the SmolVLA paper on arXiv">
    <span className="paper-reading-source-tag">arXiv</span>
    <span>Read the paper</span>
    <span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

## Prerequisites
### VLMs and VLAs
![SmolVLA: VLMs and VLAs (Figure 09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-09-en.png)

### Single-Step Actions and Action Chunks
![SmolVLA: Single-Step Actions and Action Chunks (Figure 02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-02-en.png)

### What Is Flow Matching?
![SmolVLA: What Is Flow Matching? (Figure 11)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-11-en.png)

### Synchronous and Asynchronous Inference
![SmolVLA: Synchronous and Asynchronous Inference (Figure 03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-03-en.png)

---

## Abstract
Pre-trained vision-language models acquire substantial visual and linguistic knowledge from large multimodal datasets, making them useful foundations for robot policies. Recent work adapts VLMs into VLAs that perceive and control robots from natural-language instructions instead of training policies from scratch.

However, many VLAs contain billions of parameters, are expensive to train, and are difficult to deploy on real robots. They also rely mainly on academic and industrial datasets, leaving the growing public data from low-cost robot communities underused.

SmolVLA is a small, efficient, community-data-driven VLA. It reduces training and inference costs while retaining competitive performance. It can be trained on one GPU and deployed on consumer GPUs or even a CPU.

The paper also introduces an asynchronous inference stack that separates perception and action prediction from execution. The robot predicts its next chunk while executing the current one. Despite its size, SmolVLA competes with VLAs roughly ten times larger. The authors evaluate simulation and real-robot tasks and release code, pre-trained models, and training data.

![SmolVLA: 2. Abstract (Figure 21)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-21.png)

---

## SmolVLA's Lightweight Architecture and Complete Network
**Overall data flow**

- SmolVLA consists of a VLM and an action expert.

```text
Multi-view RGB images
Language instruction
Robot state
      ↓
    VLM
      ↓
Scene-conditioning features
      ↓
Action Expert + Noisy Actions
      ↓
Flow Matching
      ↓
Action Chunk
```

- The VLM interprets the environment; the action expert converts that representation into continuous actions. The language model supplies conditioning features rather than directly specifying joint angles.

**How images, language, and state enter the VLM**

![SmolVLA: 3. SmolVLA's Lightweight Architecture and Complete Network (Figure 13)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-13-en.png)

**Why keep only 64 visual tokens per frame?**

- High-resolution images produce many visual tokens. More tokens increase attention computation and slow inference.

- SmolVLM-2 supports image tiling, which encodes multiple local image regions. SmolVLA disables tiling for speed, keeps the global image, and uses pixel shuffle to limit each frame to 64 visual tokens.

- This may sacrifice small-object detail and fine texture, but substantially reduces computation.

**Why use only the first half of the VLM?**

- For a VLM with L layers, SmolVLA extracts features at layer N and discards the remaining L−N layers.

- The authors find `N = L/2` balances speed and performance. The main model uses the first 16 language-model layers.

```text
Full VLM: Layer 1 → 2 → ... → L

SmolVLA：Layer 1 → 2 → ... → N → Action Expert
                               × Remaining layers are not computed
```

- This retains the first half rather than skipping alternating layers. Ablations suggest it is usually better than replacing the backbone with a smaller VLM, because the retained layers preserve the larger model's width and representation capacity.

**How the action expert generates actions**

- The action expert receives:

    - Conditioning features from the VLM.

    - A noisy action chunk.

- It alternates cross-attention and causal self-attention.

**Cross-attention reads the current task**

- Action tokens act as queries, reading keys and values from VLM features to answer:

```text
What is visible now?
What does the instruction request?
What is the robot's current configuration?
```

**Self-attention relates the actions**

- Self-attention between action tokens makes the future sequence coherent, for example “approach → close gripper → lift → transport → place.”

**Why use a causal mask?**

- The mask lets action i attend to earlier action tokens but not later ones.

- Bidirectional attention performs worse in the paper's ablation. The authors suggest preventing future-action leakage helps learn a more suitable temporal structure.

- The final structure is:

```text
VLM Features ───────┐
                    ↓
Noisy Actions → Cross-Attention
                    ↓
              Self-Attention
                    ↓
              Cross-Attention
                    ↓
              Self-Attention
                    ↓
               Action Chunk
```

**Flow matching in SmolVLA**

![SmolVLA: 3. SmolVLA's Lightweight Architecture and Complete Network (Figure 15)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-15-en.png)

**Complete training and inference workflow**

![SmolVLA: 3. SmolVLA's Lightweight Architecture and Complete Network (Figure 12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-12-en.png)

- The main model has about 450 million parameters, including roughly 100 million in the action expert. During training, the VLM is frozen and the action expert is trained.

---

## Community-Data Pre-Training
### Why Robot Data Forms Islands
- Unlike internet text and images, robot demonstrations require physical hardware and teleoperation. Datasets may differ in:

    - Robot structure.

    - Control frequency.

    - Joint definitions.

    - Camera count and placement.

    - Task descriptions.

    - File format.

- These disconnected collections are “data islands.” Concatenating files alone does not make them usable for pre-training.

### How Much Community Data Is Used?
![SmolVLA: How Much Community Data Is Used? (Figure 08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-08.png)

- Selection considers robot type, episode count, overall quality, and frame coverage.

- This is about an order of magnitude less data than many large VLAs use. The aim is to show that carefully cleaned community data can provide meaningful pre-training benefits at a smaller scale.

### Clean Task Language with a VLM
Community task labels are often vague, for example:

```text
task desc
Hold
Up
```

A person might infer the task from the video, but such labels do not give a VLA a stable description of the goal.

The authors use Qwen2.5-VL-3B-Instruct to generate improved descriptions:

1. Sample representative dataset images.

2. Provide the original task label.

3. Ask for a short, complete sentence beginning with an action verb.

```text
Vague original label + representative images
             ↓
     Qwen2.5-VL-3B
             ↓
Clear action-oriented instruction
```

### Standardize Camera Viewpoints
- Camera names vary across community datasets. `images.laptop` may describe an overhead camera in one dataset and a wrist camera in another.

- Treating names as fixed semantics would repeatedly assign different views to the same input slot, confusing training.

- The authors manually map cameras to a standard ordering, prioritizing:

```text
Top → Wrist → Side
```

- They then rename them consistently:

```text
OBS_IMAGE_1
OBS_IMAGE_2
OBS_IMAGE_3
```

- Extra views beyond those required are discarded.

---

## Asynchronous Inference
### The Problem with Synchronous Chunks
- Let the model predict an action chunk from observation `o_t`:

```text
A_t = [a_t, a_t+1, ... , a_t+n]
```

- A compute-efficient synchronous system executes all of `A_t` before observing and predicting again. This causes two problems:

    1. Execution uses no fresh images during the chunk, creating an open-loop interval.

    2. Once the chunk is exhausted, the robot waits for inference.

### RobotClient and PolicyServer
- SmolVLA separates two roles:

| Component | Responsibility |
|---|---|
| RobotClient | Capture images, read state, maintain the action queue, and execute actions. |
| PolicyServer | Receive observations, run SmolVLA, and return a new action chunk. |

- RobotClient requests new actions before the current queue is empty, triggering inference asynchronously.

![SmolVLA: RobotClient and PolicyServer (Figure 20)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-20.png)

- The sequence is:

```text
Robot executes the old chunk
        ↓
Queue falls below the threshold
        ↓
Capture a new observation and request PolicyServer asynchronously
        ↓
Robot continues executing the old queue
        ↓
New chunk arrives
        ↓
Merge or update the action queue
```

![SmolVLA: RobotClient and PolicyServer (Figure 17)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-17.png)

### Threshold g Controls When to Predict
- The paper uses `g ∈ [0,1]`. RobotClient requests another chunk when the remaining action proportion falls below `g`:

```text
|A_t| / n < g
```

**g = 0**

- Wait until the queue is empty, approximating synchronous inference and creating a greater risk of pauses.

**g = 1**

- Request new actions almost every control cycle, maximizing responsiveness but also compute cost.

**0 < g < 1**

- The paper illustrates the tradeoff with `g = 0.7`: consume part of the old queue, then request the next chunk early. This reduces gaps without running the model at every step.

![SmolVLA: Threshold g Controls When to Predict (Figure 05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-05.png)

- In effect, `g` reserves inference time. Slower models or larger network delays require earlier requests.

### Why Filter Repeated Observations?
- If the arm barely moves, consecutive observations may be nearly identical. Sending all of them wastes compute and can repeatedly merge almost identical chunks.

- The authors compare observations using joint-space distance and skip near-duplicates when the distance is below `ε`.

- If the queue is empty, however, the latest observation must be processed even if it is similar; otherwise the robot could remain stopped indefinitely.

---

## Experimental Setup
![SmolVLA: 6. Experimental Setup (Figure 22)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-22-en.png)

![SmolVLA: 6. Experimental Setup (Figure 19)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-19.png)

Training configuration

| Item | Setting |
|---|---|
| Image resolution | 512 × 512 |
| Pre-training steps | 200K |
|Global Batch Size|256|
|Optimizer|AdamW|
| Learning rate | Decays from 1e-4 to 2.5e-6 |
|Action Chunk Size|50|
|Flow Matching Steps|10|
| Main-model parameters | 450M |
| Action-expert parameters | About 100M |
| Total project compute | About 30K GPU hours |

- Pre-training uses four GPUs to obtain a larger batch size, while the authors note that the model itself can be trained on one GPU.

---

## Results
**Simulation**

![SmolVLA: 7. Results (Figure 10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-10.png)

On LIBERO:

- The 0.45B SmolVLA has a higher average success rate than 3.3B π0 and 7B OpenVLA. Scaling to 2.25B improves performance further, but the gain over 0.45B is smaller.

- On Meta-World, average success is 57.3 for the 0.45B model and 68.24 for 2.25B. Model size alone does not determine performance: architecture, data, and training objectives also matter.

**SO100 real-robot results**

- π0 reaches 100 on the easiest pick-and-place task, but SmolVLA performs substantially better on stacking and sorting and achieves the best overall average.

- SmolVLA has roughly one-seventh as many parameters as π0.

**SO101 transfer results**

![SmolVLA: 7. Results (Figure 00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-00.png)

- Community pre-training uses mainly SO100 data, without SO101 data. After fine-tuning on SO101 tasks, SmolVLA still outperforms ACT, demonstrating adaptation to another platform.

**What community pre-training contributes**

![SmolVLA: 7. Results (Figure 04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-04.png)

- Moving from single-task to multi-task training raises average success from 40.0 to 51.7.

- Adding community pre-training raises it to 78.3.

- An important conclusion is that pre-training data can matter more than simply increasing parameter count.

**Synchronous and asynchronous inference**

| Inference | Pick-Place | Stacking | Sorting | Average |
|---|---|---|---|---|
|Sync|75|90|70|78\.3|
|Async|80|90|50|73\.3|

- Asynchrony does not improve every task: sorting drops from 70 to 50. It should not be described as universally more accurate.

- Its main benefit is speed and throughput:

```text
Average completion time: 13.75 seconds → 9.70 seconds
Tasks completed in a fixed time: 9 → 19
```

![SmolVLA: 7. Results (Figure 18)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-18.png)

- With similar average success rates, asynchronous inference completes pick-and-place about 30% faster and more than doubles completed tasks within a fixed interval.

---

## Ablations
### Cross-Attention and Self-Attention
| Attention | LIBERO average success |
|---|---|
|Cross\-Attention|79\.0|
|Self\-Attention|74\.5|
| **Alternating CA + SA** | **85.5** |

- Reading VLM features alone or modeling action relationships alone is insufficient. Alternating them works best, supporting the complementary roles of task conditioning and temporal coherence.

### Causal and Bidirectional Attention
| Mask | LIBERO average success |
|---|---|
|Bidirectional|67\.5|
|**Causal**|**74\.5**|

- Preventing action tokens from seeing future actions improves performance in this experiment, suggesting that explicit temporal direction is useful.

### Flow Matching and Direct Regression
![SmolVLA: Flow Matching and Direct Regression (Figure 06)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-06.png)

- Flow matching's main advantage appears on long-horizon tasks, where success increases from 38 to 53.

- This supports the authors' view that generative objectives better model complex, multimodal action distributions.

### Where Should State Enter?
The authors compare:

- Suffix: feed state directly to the action expert.

- Prefix: feed state to the VLM first.

With cross-attention, prefix reaches 80.3 average success versus 73.3 for suffix. The final model therefore supplies state to the VLM alongside images and language.

![SmolVLA: Where Should State Enter? (Figure 16)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-16.png)

The pure self-attention variant does not show the same trend. The supported conclusion is that prefix state works better in the chosen VLM-conditioned design, rather than being universally superior for every attention architecture.

### How Long Should an Action Chunk Be?
![SmolVLA: How Long Should an Action Chunk Be? (Figure 14)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-14.png)

- Very short chunks underuse sequence structure. Very long chunks are harder to predict and can encourage excessively long open-loop execution.

- The paper identifies 10–50 as a useful balance, rather than treating longer as always better.

### Predicting 50 Steps Does Not Mean Executing 50
![SmolVLA: Predicting 50 Steps Does Not Mean Executing 50 (Figure 01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-01.png)

- The model can predict 50 steps but execute only 10 before observing again, combining sequence coherence with environmental feedback.

- Executing all 50 before observing produces only 51.8 average success.

- This motivates asynchronous inference: observe often without making the robot wait for the model.

---

## Limitations
- **Limited embodiment diversity.** Community pre-training is mainly SO100. Transfer to SO101 is demonstrated through fine-tuning, but this is not broad cross-embodiment pre-training.

- **Limited data scale.** SmolVLA uses about 23,000 trajectories, while models such as OpenVLA can use close to one million. Efficiency at larger community-data scales remains to be tested.

- **Backbone suitability remains open.** Much of SmolVLM-2's pre-training concerns documents and OCR. Whether it is ideal for spatial relationships, affordances, and physical interaction is unresolved.

- **Real tasks remain relatively short.** Pick, place, stack, and sort do not cover truly long-horizon behavior, which may require hierarchical policies or multi-level planning.

- **Primarily imitation learning.** Performance remains constrained by demonstration coverage. The authors suggest combining reinforcement learning to improve long-horizon tasks and dexterous manipulation.

---

## Summary
![SmolVLA: 10. Summary (Figure 07)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-07-en.png)

</div>
