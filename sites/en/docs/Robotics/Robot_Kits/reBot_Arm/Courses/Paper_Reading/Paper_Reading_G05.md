---
description: "A close reading of Galaxea G0.5, covering cross-embodiment action tokenization, embodied reasoning, visual memory, evaluation results, and LeRobot integration."
title: "G0.5: Reasoning and Action in One Sequence"
hide_title: true
keywords: [Paper Deep-Dive, Galaxea G0.5, VLA, ActionCodec, CoT, LeRobot]
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/teaser.png
slug: /robotics/paper_reading_g05
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/paper_reading_g05/
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Prerequisites: Predicting an Action Chunk",
    "id": "prerequisites-predicting-an-action-chunk",
    "level": 2
  },
  {
    "value": "Abstract and Reading Guide",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Motivation and Related Work",
    "id": "motivation-and-related-work",
    "level": 2
  },
  {
    "value": "How G0.5 and π₀.₅ Use Subtasks",
    "id": "how-g05-and-π-use-subtasks",
    "level": 2
  },
  {
    "value": "Where Actions and Reasoning Labels Come From",
    "id": "where-actions-and-reasoning-labels-come-from",
    "level": 2
  },
  {
    "value": "A Shared 27-Dimensional Action Space",
    "id": "a-shared-27-dimensional-action-space",
    "level": 2
  },
  {
    "value": "From Scene Reasoning to Action Codes",
    "id": "from-scene-reasoning-to-action-codes",
    "level": 2
  },
  {
    "value": "What Happens in One Policy Call?",
    "id": "what-happens-in-one-policy-call",
    "level": 3
  },
  {
    "value": "How ActionCodec Uses Fewer Tokens",
    "id": "how-actioncodec-uses-fewer-tokens",
    "level": 3
  },
  {
    "value": "How Reasoning Affects Actions",
    "id": "how-reasoning-affects-actions",
    "level": 3
  },
  {
    "value": "How the Model Uses Recent Visual History",
    "id": "how-the-model-uses-recent-visual-history",
    "level": 3
  },
  {
    "value": "From Training to Execution",
    "id": "from-training-to-execution",
    "level": 2
  },
  {
    "value": "What the Experiments Show",
    "id": "what-the-experiments-show",
    "level": 2
  },
  {
    "value": "Switching Reasoning On and Off for Each Action Head",
    "id": "switching-reasoning-on-and-off-for-each-action-head",
    "level": 3
  },
  {
    "value": "Pick-and-Place: Target Selection and Task Completion",
    "id": "pick-and-place-target-selection-and-task-completion",
    "level": 3
  },
  {
    "value": "DROID: Transfer to New Environments and Low-Contrast Failures",
    "id": "droid-transfer-to-new-environments-and-low-contrast-failures",
    "level": 3
  },
  {
    "value": "Real-Robot Fine-Tuning and Long-Horizon Tasks",
    "id": "real-robot-fine-tuning-and-long-horizon-tasks",
    "level": 3
  },
  {
    "value": "LeRobot Integration and Evaluation Differences",
    "id": "lerobot-integration-and-evaluation-differences",
    "level": 2
  },
  {
    "value": "Conclusion",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-g05-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-g05-title">G0.5: Reasoning and Action in One Sequence</h1>
  <p className="paper-reading-lead">Galaxea G0.5: One Autoregressive Stream for Robot Reasoning and Action</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li><a href="#a-shared-27-dimensional-action-space">Cross-embodiment actions</a></li>
    <li><a href="#how-reasoning-affects-actions">Embodied reasoning</a></li>
    <li><a href="#how-the-model-uses-recent-visual-history">Visual memory</a></li>
    <li><a href="#what-the-experiments-show">Evaluation</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2608.11739v1" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Read the paper</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Key LeRobot Commands">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/main/en/g05" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot G0.5 Documentation ↗</a>

**Key LeRobot Commands**

- `--policy.path=lerobot/g05_so101` loads the checkpoint adapted for SO-100 and SO-101.
- `--policy.action_head=actioncodec` selects the paper’s discrete action path. Use `flow` to select the continuous action head.
- `--policy.runtime_system=system2` enables reasoning on a checkpoint that supports CoT. Use `--policy.runtime_cot_fields='["bbox","subtask"]'` to request both a bounding box and a subtask.

Use these arguments alongside the robot and camera configuration. See the documentation above for the full setup.

</aside>

Galaxea Team · arXiv:2608.11739v1 · August 12, 2026 · [Galaxea project page](https://opengalaxea.github.io/G05/)

A robot is asked to open a drawer, pour in some walnuts, and close it. The first time the robot sees the handle, it needs to reach out and pull. After pouring in the walnuts, it sees the same handle and needs to push the drawer shut. **Can one vision-language model generate both what to do now and how the arm should move next?** That is the question G0.5 addresses.

## Prerequisites: Predicting an Action Chunk

A **vision-language-action model (VLA)** learns from demonstrations to turn camera images, task instructions, and the robot’s own state into control commands. The state includes measurements such as joint positions. When the robot opens the drawer, the image shows where the handle is, the state describes the arm’s current pose, and the actions bring the gripper closer, close it, and pull.

An **action chunk** is a sequence of actions ordered by control timestep. A single-step policy predicts $a_t$ at time $t$. A chunking policy predicts $[a_t,a_{t+1},a_{t+2},\ldots]$ from the same observation, where $a_t$ is the control vector for step $t$. The robot can execute the first few steps and then replan using a fresh observation. The time it takes to generate a chunk, the number of steps executed from it, and the low-level control frequency are separate quantities.

**Autoregressive (AR)** describes how G0.5 generates a chunk. Its **vision-language model (VLM)** predicts one token at a time and uses the tokens it has already generated to predict the next. It can write “grasp the handle” and then continue with compressed action codes. The action codec turns those codes into continuous control commands before execution.

## Abstract and Reading Guide

**Abstract in brief.** Many VLAs use a pretrained VLM to encode the scene and instruction, then delegate control to a separately trained flow-matching (FM) action expert. Galaxea’s G0.5 uses one Transformer decoder and one training objective for reasoning and action tokens. The authors train a cross-embodiment action tokenizer, insert embodied reasoning such as subtasks and target locations into the generation sequence, and use the vision encoder to process several seconds of visual history. They report that prompts can change how the model breaks down or executes a task, with some behavior changes observed without further training.

The authors pretrain on a mixture of robot data and visual question answering (VQA) examples and report seven evaluations. After fine-tuning on R1-Lite and R1-Pro, average real-robot success is 76.7% for G0.5, 53.3% for π₀.₅, and 24.4% for GR00T-N1.7. On the 50 long-horizon household tasks in the 2025 BEHAVIOR Challenge, the single-policy progress score is 31.4% for G0.5, 26.3% for π₀.₅, and 26.1% for the winning entry. The remaining evaluations cover transfer to held-out environments and objects after DROID post-training (82.5%), instruction following in pick-and-place, LIBERO (98.9%), RoboTwin 2.0 (93.3%), and SimplerEnv-Bridge (87.3%).

**Reading notes**

- **Action compression makes token-by-token generation practical.** An arm movement spans multiple steps and control channels. Compressing the sequence in time and omitting tokens for idle parts address two sources of length.
- **The decoder can use the reasoning it just generated.** When a bounding box or a subtask comes before the action, the decoder can condition its next predictions on that output. The paper toggles reasoning to test whether it helps.
- **The evaluations measure different kinds of generalization.** DROID tests transfer to new environments and objects after dataset-specific post-training. BEHAVIOR measures how many goal conditions a single post-trained policy satisfies across 50 tasks.

## Motivation and Related Work

The paper starts with action discretization in RT-2 and OpenVLA. Higher control frequencies, more action dimensions, or longer prediction horizons make tokenizing each value individually more expensive. A continuous action expert can emit an entire chunk while the VLM supplies its conditioning. The authors ask how to give the pretrained VLM’s language and reasoning abilities a more direct role in control.

G0.5 learns a cross-embodiment action codec, places a chain of thought in the action sequence, and probes whether changing the wording of an instruction affects behavior. Visual memory supplies recent observations. The authors examine these ideas through control benchmarks, instruction-following tests, and long-horizon tasks divided into stages. The prompt-wording results are qualitative observations from a small sample.

- **Compressing action tokens.** FAST uses a discrete cosine transform to exploit temporal redundancy. G0.5 learns a shared vocabulary organized by body part and can omit idle groups.
- **Passing reasoning into control.** ECoT already lets autoregressive action prediction read earlier reasoning tokens. G0.5 uses a cross-embodiment action interface and prompts that select among subtasks, bounding boxes, traces, and action hints.

## How G0.5 and π₀.₅ Use Subtasks

Both approaches can generate the current subtask first. After pouring the walnuts, π₀.₅ can generate “push the drawer shut,” then let a continuous action expert produce the motion from its conditioning inputs. In the main G0.5 path, the decoder continues from the subtask into discrete action codes, which ActionCodec converts to continuous motion.

| Aspect | π₀.₅ | G0.5 |
| --- | --- | --- |
| High-level output | Autoregressively generated subtask text | Optional subtasks, bounding boxes, 2D traces, and action hints |
| Action output | A flow-matching expert generates continuous controls | The same decoder continues with discrete codes, which ActionCodec decodes into continuous controls |
| Role of discrete action tokens | FAST tokens are used in pretraining. A continuous expert handles execution. | ActionCodec tokens are used in pretraining and AR execution. |

**Illustration.** Both paths also take inputs such as images and robot state.

<aside className="paper-reading-callout" aria-label="Action generation paths">

**π₀.₅**　Subtask → flow-matching action expert → continuous action chunk

**G0.5**　Subtask or bounding box → same decoder generates action codes → ActionCodec → continuous action chunk

</aside>

G0.5 also has an optional flow-matching head. The table describes its main AR path. The experiments below switch between the two heads. [π₀.₅ paper deep-dive](https://wiki.seeedstudio.com/robotics/paper_reading_pi05/)

## Where Actions and Reasoning Labels Come From

G0.5 pretrains on robot demonstrations from 14 embodiments, along with general and embodied VQA. Demonstrations show how different robots move. Question answering and additional annotations teach the model about instructions, targets, and task stages. DROID enters the pipeline later, during dataset-specific post-training.

![Distribution of action verbs and object nouns in pretraining](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/data_analyze_v2.svg)

The vertical axes show frequency on a logarithmic scale. Action verbs appear on the left and object nouns on the right. Common actions such as picking, placing, and moving occur more often, while less common skills and objects occupy the long tail. A dataset can cover many embodiments and skills while still containing few examples of particular skills.

| Training target | How it is obtained |
| --- | --- |
| Tasks and subtasks | Split demonstrations into temporal segments, then use a multimodal model to annotate task descriptions and local action hints |
| Bounding boxes | Locate the target with a vision model, then track it in subsequent frames |
| 2D end-effector traces | Apply forward kinematics to joint positions and project the 3D end-effector positions into the head camera image |
| Action codes | Pass aligned demonstration chunks through the pretrained ActionCodec |
| Visual question answering | Use text answers from general and embodied image-question pairs |

Each robot example uses one of eight reasoning formats, drawn with sampling weights. One format generates actions directly. This lets the model learn to make intermediate judgments and also operate without reasoning text.

## A Shared 27-Dimensional Action Space

Control channels from different embodiments are aligned by body part. The base layout has 27 dimensions, with the same slot order at every timestep. An action chunk with $H$ predicted control steps is an $H\times27$ array.

| Body part | Dimensions | Use |
| --- | ---: | --- |
| Left-side controls and gripper | 9+1 | Left arm controls and left gripper action |
| Right-side controls and gripper | 9+1 | Right arm controls and right gripper action |
| Lower body | 7 | Slots for supported movements such as torso and base control |

**Illustration.** Suppose a right-arm robot has five joint control channels and one gripper channel. Place each demonstrated action in the appropriate right-side slots so it shares a layout with dual-arm demonstrations. Fill unused slots with placeholders. The model can emit only the active part’s codes, and the controller can recover the six channels it needs from the decoded output.

<aside className="paper-reading-callout" aria-label="Action slot mapping example">

Six controls from a single-arm demonstration → right-side slots in the 27-dimensional layout → right-side action codes → decode and extract the six controls

</aside>

This is a simplified mapping. Each robot uses its own joint or end-effector definitions, slot mapping, and normalization statistics. The converted LeRobot SO-101 checkpoint uses a 20-dimensional internal layout.

## From Scene Reasoning to Action Codes

### What Happens in One Policy Call?

G0.5 is initialized from Qwen3.5-2B. The vision encoder converts the images into visual representations. The decoder receives those representations along with the task instruction, current robot state, and embodiment identifier. When the chain of thought (CoT) is enabled, the decoder generates the requested reasoning fields, such as the subtask and a bounding box around the handle. It then predicts action tokens conditioned on the same inputs and the reasoning it just generated. ActionCodec converts those tokens into a continuous chunk for the robot to execute.

![G0.5 architecture and closed-loop drawer example](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/teaser.png)

The upper left shows how the four inputs lead to reasoning, action codes, and continuous control. The three panels along the bottom show opening the drawer, pouring, and closing, with fresh observations at each stage. In the opening example, rewording the prompt shifts the target from an upper knob to the lower handle. The upper right summarizes results from several protocols. The experiment below compares the reasoning settings directly.

### How ActionCodec Uses Fewer Tokens

When the right arm opens the drawer, the action chunk spans several steps from reaching to pulling. The left arm may stay still throughout. ActionCodec compresses the right arm’s movement into a small set of codes. The model can also omit codes for stationary parts, reducing how many tokens it needs to predict.

![Residual vector quantization of aligned actions by body part](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/tokenizer_v2.png)

Read the diagram from left to right. Actions from different embodiments are assigned to their corresponding body parts and encoded by group. The quantizer outputs discrete indices, and the sequence preserves which part each group of indices belongs to. The temporal contrastive objective in the middle encourages similar motions at nearby timesteps to have consistent codes.

**Residual vector quantization (RVQ)** approximates an action segment’s latent vector through successive codebook lookups. The first round finds a close vector. The second round looks up a vector for the residual. To decode, the codec retrieves the selected vectors, adds them, and reconstructs the action.

**Worked example.** Consider a unitless latent value of $0.78$. The first lookup returns $0.60$, leaving a residual of $0.18$. The second returns $0.20$. The sum is $0.80$, and the absolute error falls from $0.18$ to $0.02$. The actual codec stores indices for vectors in the codebook.

Each round uses **one group marker plus eight action codes** for each active group. With two rounds and only the right side active, the action sequence needs $2\times(1+8)=18$ tokens. With both sides active, it needs $36$. This count excludes sequence boundaries and reasoning text. The shared layout can contain slots for idle parts while the generated sequence omits those parts. The VLM learns to predict the indices, and ActionCodec learns to encode and reconstruct actions.

The sequence template shows both arm markers as always emitted. The paper’s description of action tokenization allows idle groups to be omitted. The token count above uses that setting.

### How Reasoning Affects Actions

**A bounding box identifies where to act. A subtask describes what to do next.** The sequence can carry four types of reasoning output.

| Generated field | What it supplies in the drawer example |
| --- | --- |
| `Subtask` | The current operation, such as “grasp the lower handle” |
| `BBox` | A bounding box around the target in the image |
| `Trace` | The end-effector path in the image plane |
| `ActionHint` | A local motion cue, such as closing the gripper after approaching |

![Sequence of conditioning inputs, reasoning fields, and action codes](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/token_template.svg)

The conditioning segment contains images, the embodiment, robot state, and the prompt. The generated segment begins with the selected reasoning fields and continues with action codes grouped by body part. The optional FM head produces continuous actions from the backbone’s hidden states and can also use the context after reasoning.

**Illustration.** Before opening the drawer, the model uses the image and current pose to generate “grasp the lower handle” and a bounding box around it. The decoder reads the generated subtask and coordinates as it predicts codes for the right arm to approach. After executing a short segment, the robot refreshes the inputs with a new image and state.

Both types of output share a next-token cross-entropy objective. The paper gives it as

$$
\mathcal{L}(\theta) = -\sum_{i\in\mathcal{G}}\log p_\theta(x_i\mid x_{<i}).
$$

Here $\theta$ denotes the decoder parameters, $\mathcal{G}$ is the set of positions in the generated segment, $x_i$ is the target token at position $i$, and $x_{<i}$ includes the conditioning inputs and earlier tokens. The conditioning segment provides context, and the loss is summed over the generated segment. If the model assigns probabilities $0.8$ and $0.5$ to a target subtask token and a target action code, their combined loss is $-\log 0.8-\log 0.5\approx0.916$. Training can use annotated prefixes. At inference, an error in the model’s own reasoning can propagate to the action.

### How the Model Uses Recent Visual History

The wrist can block the handle as the arm reaches for it. Earlier frames still show the handle, while the current frame shows the wrist. G0.5 inserts factorized spatial and temporal attention every four layers in the vision Transformer to combine information across image patches and timesteps. At the final layer, only the current-frame representation, which has absorbed information from earlier frames, is passed to the decoder. The history-enabled path uses continuous state embeddings to align robot state with the corresponding images.

Training randomly drops the full set of history frames so the encoder can also work from the current frame alone. The paper uses single-frame inputs for BEHAVIOR post-training. The authors attribute part of the long-horizon gains to pretraining with history. The experiments leave its individual contribution unmeasured.

## From Training to Execution

| Stage | Inputs | Learned behavior or output |
| --- | --- | --- |
| Codec training | Aligned continuous actions grouped by body part | Compresses chunks into discrete indices and reconstructs the actions from those indices |
| VLA pretraining | Images, instructions, robot state, action codes from the frozen codec, and reasoning labels | Learns to predict reasoning and action codes with next-token cross-entropy, and to answer visual questions |
| Downstream post-training | Target-task demonstrations and the embodiment’s observation and control interfaces | Produces a checkpoint for a particular robot or benchmark |
| Execution | Latest observations, task instruction, embodiment identifier, and robot state | Optional reasoning → action codes → continuous action chunk |

In the paper’s main path, the robot executes part of the chunk, gathers new images and state, and predicts again. If the handle shifts as the robot pushes the drawer, the next chunk can respond to its observed position. This closes the feedback loop through observation and replanning. Prediction and execution lengths depend on the platform or checkpoint configuration.

## What the Experiments Show

### Switching Reasoning On and Off for Each Action Head

The authors use one G0.5 checkpoint and test four settings by switching between AR and FM and toggling CoT. With CoT enabled, both heads can use the resulting context. The single-stage pick-and-place evaluation uses 64 trials. The long-horizon evaluations use two five-stage tasks, Air Fryer and Cook Bacon, with five trials per setting and the current subgoal provided at runtime.

![Results for two action heads with and without chain-of-thought reasoning](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/cot_head_long_horizon.svg)

The left panel shows stages completed (0–5), and the right shows language following. With CoT enabled, average stages completed on Air Fryer rise from 2.4 to 3.8 for AR and from 2.1 to 2.7 for FM. Single-stage pick-and-place changes much less, with AR language following rising from 65.6% to 67.2%. These results support the use of CoT for grounding and execution when stage goals are provided. The effects of rewording verbs or spatial cues remain qualitative observations from a small sample.

### Pick-and-Place: Target Selection and Task Completion

An R1-Lite must place a specified object into a specified container on a cluttered table. Both models run 64 real-robot trials under the same instructions, object layouts, and initial poses. The test includes object categories seen during post-training and categories held out from it.

![Language following and task success at different amounts of post-training data](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/PPBench.svg)

Language following on the left measures whether the robot approaches and attempts to grasp the correct object. Task success on the right also requires grasping it successfully and placing it in the specified container. For example, a robot that attempts the correct grasp but drops the object can pass the language-following check and fail the task. After post-training on 50 hours of task data, G0.5 scores 84.4% and 75.0% on the two metrics. π₀.₅ scores 68.8% and 65.6%.

### DROID: Transfer to New Environments and Low-Contrast Failures

![DROID performance with environments and objects held out](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/g05/droid_results.svg)

The horizontal axis lists ten manipulation tasks and their mean. The vertical axis shows success under the paper’s evaluation protocol. Each model trains on DROID and then runs ten trials per task in held-out real environments with held-out objects. The final task allows 0.5 points for partial completion. G0.5 averages 82.5%, π₀.₅-DROID 57.5%, and MolmoAct2-DROID 52.0%.

G0.5 succeeds in 60% of trials when placing a towel in a low-contrast drawer. After the authors add high-contrast markers, success rises to 100%. The average gain leaves some tasks sensitive to target visibility.

### Real-Robot Fine-Tuning and Long-Horizon Tasks

| Evaluation | Setup | Reported result |
| --- | --- | --- |
| R1-Lite and R1-Pro hardware | Two mobile dual-arm platforms. Four tasks give six task–embodiment settings with 15 episodes each. The models use matched data and training budgets. | Average success is 76.7% for G0.5, 53.3% for π₀.₅, and 24.4% for GR00T-N1.7 |
| 2025 BEHAVIOR Challenge | 50 household tasks with ten instances each. The score measures the proportion of goal conditions achieved and allows partial credit. | Single-checkpoint G0.5 scores 0.2904 after one epoch and 0.3136 after four epochs of post-training. π₀.₅ scores 0.2626 after four epochs. |

R1-Lite and R1-Pro have six and seven degrees of freedom per arm, respectively. Both use an external camera and two wrist cameras in the real-robot evaluation. On box transport and stacking, π₀.₅ scores 93.3% and G0.5 scores 80.0%. BEHAVIOR averages two evaluation runs for each single-checkpoint policy. The winning competition entry uses four checkpoints and scores 0.2605. These comparisons assess complete policies. Isolating one component would require a separate controlled comparison.

The three standard simulation benchmarks also use their own adaptation protocols. A fine-tuned policy averages 98.9% across four LIBERO task suites. RoboTwin 2.0 averages 93.3% across clean and randomized settings. For Bridge, the authors post-train on real-robot demonstrations and transfer the policy to SimplerEnv without robot-state input, reaching 87.3%. These results assess overall control performance. The reasoning toggle experiment addresses the effect of CoT.

Tokenized actions also have a use in training. An AR policy provides the log probability of its sampled tokens directly, which supports reinforcement learning with probability ratios. The authors compare GRPO fine-tuning on four LIBERO tasks with similar initial success rates. AR reaches a higher final mean success rate. The comparison uses the paper’s FM variant with a stochastic denoising approximation and applies to this low-demonstration setting.

## LeRobot Integration and Evaluation Differences

**Implementation note.** `policy.action_head` selects ActionCodec decoding or continuous action generation with FM. `policy.runtime_system` controls whether the model generates reasoning first. System 1 outputs actions directly. System 2 generates either a subtask or a bounding box and subtask in the same policy call, then uses that context to generate actions. It requires a checkpoint with `predict_cot=true`. The action head and CoT setting are independent.

| Checkpoint | Released action path | Predict / Execute | Interface |
| --- | --- | ---: | --- |
| `lerobot/g05_base` | Explicitly select ActionCodec or FM. CoT is supported. | 32 / 16 | 27-dimensional whole-body layout. The bundled R1 Lite processor uses a head camera, both wrist cameras, and six frames including the current frame. |
| `lerobot/g05_libero` | FM, System 1 | 32 / 10 | Single-arm end effector and gripper map to 20 dimensions. External and right wrist cameras. |
| `lerobot/g05_robotwin20` | FM, System 1 | 32 / 8 | Two arms and grippers map to 20 dimensions. Overhead and both wrist cameras. |
| `lerobot/g05_so101` | ActionCodec or FM. CoT is supported. | 32 / 16 | Six single-arm controls map to 20 dimensions. External and right wrist cameras, with an optional left wrist slot. |

For synchronous SO-101 execution, the model predicts 32 steps and queues the first 16. The policy runs again when the queue is empty. The output processor denormalizes the internal 20-dimensional representation using the checkpoint statistics and maps it back to six controls. Ordinary demonstrations can provide action targets. Training subtasks and bounding boxes requires corresponding labels. The simulation scores in the paper come from Galaxea’s evaluation setup. The converted LeRobot LIBERO and RoboTwin checkpoints use the continuous head and should be evaluated under their own configurations. The port and checkpoints use the G0.5 Community License, which includes noncommercial restrictions.

## Conclusion

G0.5 uses grouped quantization to compress multi-step control into tokens. The decoder can then predict those tokens using subtasks and target locations it generated in the same call. The most direct evidence comes from toggling CoT on the same checkpoint. It improves progress on the five-stage tasks when subgoals are supplied, with little change on single-stage pick-and-place. Visual memory covers a few seconds, and the low-contrast drawer results show how strongly action success can still depend on what the robot can see.

Figures are reproduced from the Galaxea Team’s arXiv v1 paper with their original legends and content. [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

</div>
