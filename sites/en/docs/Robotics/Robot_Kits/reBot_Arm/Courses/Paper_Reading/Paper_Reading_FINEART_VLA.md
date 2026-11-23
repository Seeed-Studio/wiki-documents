---
description: "A deep dive into FineART-VLA: mechanisms, training, experiments, and LeRobot v0.7.0 integration scope."
title: "FineART-VLA: Connecting Long-Horizon Goals to Bimanual Actions Through Subtasks"
hide_title: true
keywords: ["Paper Deep-Dive","FineART-VLA","VLA","Subtask Prediction","Bimanual Manipulation","Knowledge Insulation","LeRobot"]
slug: /robotics/paper_reading_fineart_vla
displayed_sidebar: PaperReadingSidebar
last_update:
  date: 2026-11-20
  author: liujunjie
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Prerequisites: Three Timescales of Control",
    "id": "prerequisites-three-timescales-of-control",
    "level": 2
  },
  {
    "value": "Abstract and Reading Guide",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Why Long Demonstrations Need Phase Labels",
    "id": "why-long-demonstrations-need-phase-labels",
    "level": 2
  },
  {
    "value": "Data: Covering Reusable Skills and Contact-Rich Tasks",
    "id": "data-covering-reusable-skills-and-contact-rich-tasks",
    "level": 2
  },
  {
    "value": "Architecture: Predict a Subtask, Then Generate Its Actions",
    "id": "architecture-predict-a-subtask-then-generate-its-actions",
    "level": 2
  },
  {
    "value": "Three Objectives and Knowledge Insulation",
    "id": "three-objectives-and-knowledge-insulation",
    "level": 3
  },
  {
    "value": "Training and Execution: Aligning Two Learned Decisions",
    "id": "training-and-execution-aligning-two-learned-decisions",
    "level": 2
  },
  {
    "value": "Experiments: What Improves and Under Which Conditions",
    "id": "experiments-what-improves-and-under-which-conditions",
    "level": 2
  },
  {
    "value": "Matched Initial Conditions",
    "id": "matched-initial-conditions",
    "level": 3
  },
  {
    "value": "Spatial Words and Long-Horizon Guidance",
    "id": "spatial-words-and-long-horizon-guidance",
    "level": 3
  },
  {
    "value": "Long-Tail Data and Embodiment Transfer",
    "id": "long-tail-data-and-embodiment-transfer",
    "level": 3
  },
  {
    "value": "LeRobot Integration: Preserving the Language Planner",
    "id": "lerobot-integration-preserving-the-language-planner",
    "level": 2
  },
  {
    "value": "Conclusion",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-fineart_vla-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-fineart_vla-title">FineART-VLA: Connecting Long-Horizon Goals to Bimanual Actions Through Subtasks</h1>
  <p className="paper-reading-lead">FineART: Fine-Grained Annotated Robotic Trajectory Dataset and Vision-Language-Action Model for Bimanual Manipulation</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-predict-a-subtask-then-generate-its-actions">Subtask prediction</a></li>
    <li><a href="#three-objectives-and-knowledge-insulation">Knowledge insulation</a></li>
    <li><a href="#experiments-what-improves-and-under-which-conditions">Experiments</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2609.36416v3" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Read the paper</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/fineart_vla" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot FineART-VLA Documentation ↗</a>

**LeRobot parameters**

- `--policy.path=lerobot/fineart_vla_base` starts adaptation from the FineART mid-trained checkpoint.
- `--policy.type=fineart_vla --policy.pretrained_path=lerobot/pi05_base` starts a different training route from π0.5 weights.
- Language planning needs temporally aligned `subtask` annotations. An episode-level task string alone does not supply that supervision.
- `lerobot-rollout` manages interactive execution; `--autosteer_interval_s=3` sets the planning-query interval. See the versioned guide for the complete hardware configuration.

</aside>

A robot preparing breakfast must place a cup, arrange utensils, and move food. The overall instruction remains the same for minutes, while the required movement changes after each completed stage. **If every frame carries only the overall goal, where does the policy learn which step it should perform now?**

## Prerequisites: Three Timescales of Control

A goal specifies the final result, a subtask specifies the current operation, and an action chunk specifies numerical commands over several control ticks. FineART aligns subtask instructions with the demonstration timeline.

| Breakfast example | Meaning | Learning role |
| --- | --- | --- |
| Prepare breakfast | Overall goal | Conditions subtask prediction |
| Put the cup on the shelf | Current operation | Language target and action condition |
| Joint and gripper targets | Physical movement | Continuous and discrete action supervision |

A subtask still contains multiple movements. Placing a cup includes reaching, grasping, carrying, and releasing. The annotation narrows the control problem without describing every motor tick in words.

## Abstract and Reading Guide

**Abstract in brief.** FineART contains 40,543 episodes, 1,718 hours, 151 tasks, and 533,913 subtasks. FineART-VLA extends π0.5 with next-subtask prediction and subtask-conditioned continuous control. Its experiments separately investigate annotation granularity, subtask training, knowledge insulation, and adaptation to a different embodiment.

**Reading note.** More demonstrations, phase labels, and gradient routing serve different purposes. A controlled comparison must hold the other factors fixed before attributing an improvement to one of them.

## Why Long Demonstrations Need Phase Labels

Similar images can belong to different task phases, and the same movement can serve different goals. Episode-only instructions leave those differences implicit. Temporally aligned subtasks provide direct supervision for the current operation.

Compared with the direct action interface of π0.5, FineART-VLA adds a language-generation path. Compared with a separate planner and controller, it trains language and action within one policy and also accepts human-specified subtasks. A longer caption for the entire video cannot replace labels aligned with individual operations.

## Data: Covering Reusable Skills and Contact-Rich Tasks

FineART combines repeated pick-and-place and semantic organization with a long tail of cloth manipulation, tool assembly, cable routing, and precise insertion. These tasks expose the policy to different contact and precision requirements.

For towel folding, labels must follow the actual sequence of grasping, moving, and placing. Incorrect boundaries pair one instruction with another operation's actions, directly weakening the controller's training condition.

Mid-training samples a task with weight proportional to $n_i^{0.5}$, where $n_i$ is its frame count. In a teaching example, tasks with 100 and 400 frames receive weights 10 and 20: a 1:2 sampling ratio rather than the raw 1:4 ratio.

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/subtask-annotations">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fineart_vla/subtask-annotations.png" alt="Temporal alignment of task and subtasks" loading="lazy" />
  <figcaption><strong>Temporal alignment of task and subtasks.</strong> Source: the FineART paper. One packing task is segmented into phases of unequal duration, illustrating why subtask labels need temporal boundaries. The displayed names are illustrative categories, not verbatim dataset annotations.</figcaption>
</figure>

## Architecture: Predict a Subtask, Then Generate Its Actions

The paper's ALOHA configuration uses the overhead and two wrist views, a 14-dimensional joint/gripper state, and 50-step chunks of 14-dimensional actions. Its vision-language backbone combines SigLIP and Gemma with a separate Gemma-style action expert.

| Path | Input | Computation | Output |
| --- | --- | --- | --- |
| Subtask planning | Observation and overall goal | Autoregressive language generation | Low-level instruction |
| Discrete action learning | Observation and subtask | FAST-token prediction | Action supervision for the backbone |
| Continuous control | Observation, state, subtask, and noisy actions | Flow-matching action expert | Executable action chunk |

The planner may generate “put the cup on the shelf,” while several action calls follow that instruction. Periodic planning queries use fresh observations and the original high-level goal to infer the active subtask. The runtime does not detect subtask completion; the query interval is configurable. Planning and action generation can run at different rates.

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/teaching-three-timescales-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/fineart-three-timescales-en-v2.png" alt="Three timescales: high-level goal, subtask, and continuous actions" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>Three timescales: high-level goal, subtask, and continuous actions.</strong> AI-generated teaching illustration. A single policy supports autonomous subtask inference (System 2) and continuous-action execution (System 1). The runtime queries subtasks periodically from the high-level goal and current observations; it does not detect subtask completion. One subtask can guide multiple action chunks. Observations also include robot state, omitted here for clarity. Named motion phases illustrate a trajectory; executable outputs are continuous values.</figcaption>
</figure>

### Three Objectives and Knowledge Insulation

The training objective is

$$
\mathcal L=10\mathcal L_{\mathrm{flow}}+\mathcal L_{\mathrm{FAST}}+\lambda_{\mathrm{text}}\mathcal L_{\mathrm{text}}.
$$

With subtask training enabled, 30% of samples train goal-to-subtask prediction and 70% train subtask-conditioned actions. These are sampling proportions, not execution-time allocations.

Knowledge insulation detaches the backbone keys and values read by the action expert. The expert still uses visual-language context, but continuous action loss does not update the backbone through that path. Text and discrete action losses continue to train it; the backbone is not permanently frozen.

## Training and Execution: Aligning Two Learned Decisions

Demonstrations provide the correct subtask during training, whereas deployment normally uses a generated one. The controller must follow subtasks, and the planner must recognize the current phase. Learning only one of those capabilities leaves the other problem unresolved.

A control cycle reads images and state, queries or retains a subtask, predicts actions, executes part of the plan, and observes again. Human subtask input helps distinguish planning failures from movement failures. The 50-step prediction horizon and the runtime planning interval are separate settings.

## Experiments: What Improves and Under Which Conditions

### Matched Initial Conditions

ALOHA evaluations use 25 rollouts per task with prescribed initial arrangements. Success rate counts full completions; progress rate measures completed stages. For a four-stage cup-placement example, reaching, grasping, and carrying without successful placement can score 75% progress and zero success.

A 2×2 ablation varies subtask training and knowledge insulation independently. Their combination supports the strongest out-of-distribution generalization, but individual tasks behave differently. On simple shelf placement, insulation without subtask training outperforms enabling both; more ambiguous tasks can benefit from phase supervision.

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/subtask-insulation-ablation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fineart_vla/subtask-insulation-ablation.png" alt="Subtask training and knowledge-insulation ablation" loading="lazy" />
  <figcaption><strong>Subtask training and knowledge-insulation ablation.</strong> Source: the FineART paper. Solid bars show success and pale bars show progress. Combining both mechanisms helps most in the out-of-distribution group. There are 25 trials per task, 50 per regime, and 150 overall; regime averages do not describe every task.</figcaption>
</figure>

### Spatial Words and Long-Horizon Guidance

On placing a donut in the left, middle, or right bin, with insulation disabled in both conditions, subtask training raises success from 32% to 100%, over 25 trials each. All 17 failures without subtask training select the wrong bin. This specifically tests whether spatial language changes target selection.

The breakfast task recombines familiar subtasks into an unseen full sequence. Step-by-step human guidance raises success from 16% to 76%. That result includes human guidance and does not measure fully autonomous planning.

### Long-Tail Data and Embodiment Transfer

Removing the contact-rich tail while keeping training steps fixed lowers overall success from 24.7% to 14.0% in that ablation's configuration. Those numbers belong to that controlled comparison, not the best configuration from another experiment.

The ALOHA-to-YAM study measures data efficiency and task composition after adapting to YAM. Cross-embodiment transfer still requires a compatible target control interface and adaptation data.

## LeRobot Integration: Preserving the Language Planner

Version 0.7.0 supports FineART-VLA training, text queries, and action execution. Alongside images, state, actions, and tasks, the selected recipe needs its targets in `language_persistent` and `language_events`. The default recipe uses a continuous subtask timeline; memory and VQA require their own annotations and runtime support.

Preserve the checkpoint's recipe, action tokenizer, and processors, then align camera names, action statistics, and state dimensions with the target robot. Changing only a π0.5 policy name does not reproduce the paper's planner.

The following are training parameter fragments; provide the actual dataset and output configuration separately:

```bash
--policy.path=lerobot/fineart_vla_base
--policy.dtype=bfloat16
--policy.gradient_checkpointing=true
--policy.tokenizer_max_length=256
```

These integration settings do not by themselves reproduce the paper's evaluation protocol.

## Conclusion

FineART-VLA connects overall goals, phase language, and continuous actions in one learning pipeline. Dense labels explain what each action segment accomplishes, generated subtasks provide an intervention point, and knowledge insulation helps preserve backbone capability. Its strongest evidence comes from matched ablations; autonomous behavior still depends on phase recognition, precise execution, and target-embodiment data.

</div>
