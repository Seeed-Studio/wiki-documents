---
description: "A close reading of GR00T 2: joint video-action prediction, cross-embodiment skill transfer, fast adaptation, agentic control, and onboard whole-body loco-manipulation."
title: "GR00T 2: How World-Action Modeling Supports Generalization and Adaptation"
hide_title: true
keywords: [Paper Deep-Dive, GR00T 2, World-Action Model, WAM, Cross-Embodiment Transfer, Agentic Control, Whole-Body Loco-Manipulation]
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/dexter-history.jpg
slug: /robotics/paper_reading_gr00t_2
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-10
createdAt: '2026-11-10'
updatedAt: '2026-11-10'
url: https://wiki.seeedstudio.com/robotics/paper_reading_gr00t_2/
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Joint Prediction: Connecting Future Video and Robot Actions",
    "id": "joint-prediction-connecting-future-video-and-robot-actions",
    "level": 2
  },
  {
    "value": "Why Predict the Future as Well as the Action?",
    "id": "why-predict-the-future-as-well-as-the-action",
    "level": 3
  },
  {
    "value": "From Input Representations to Joint Generation",
    "id": "from-input-representations-to-joint-generation",
    "level": 3
  },
  {
    "value": "Training with Video and Action Supervision",
    "id": "training-with-video-and-action-supervision",
    "level": 3
  },
  {
    "value": "Multi-Source Training: Building a Foundation for Adaptable Skills",
    "id": "multi-source-training-building-a-foundation-for-adaptable-skills",
    "level": 2
  },
  {
    "value": "What Each Data Source Contributes",
    "id": "what-each-data-source-contributes",
    "level": 3
  },
  {
    "value": "From a Video Prior to Robot Actions",
    "id": "from-a-video-prior-to-robot-actions",
    "level": 3
  },
  {
    "value": "Does Scaling Human Video Help on Real Robots?",
    "id": "does-scaling-human-video-help-on-real-robots",
    "level": 3
  },
  {
    "value": "X-Adaptability: Cross-Embodiment Skill Transfer",
    "id": "x-adaptability-cross-embodiment-skill-transfer",
    "level": 2
  },
  {
    "value": "Human Demonstrations Teach the Task; Robot Data Grounds It in the Target Body",
    "id": "human-demonstrations-teach-the-task-robot-data-grounds-it-in-the-target-body",
    "level": 3
  },
  {
    "value": "Transferring from Handheld Grippers and Wearable Hands",
    "id": "transferring-from-handheld-grippers-and-wearable-hands",
    "level": 3
  },
  {
    "value": "Fast Adaptation and Reliable Execution",
    "id": "fast-adaptation-and-reliable-execution",
    "level": 2
  },
  {
    "value": "Improving Execution Precision with a Few Demonstrations",
    "id": "improving-execution-precision-with-a-few-demonstrations",
    "level": 3
  },
  {
    "value": "Reinforcement Learning for Contact-Rich Skills",
    "id": "reinforcement-learning-for-contact-rich-skills",
    "level": 3
  },
  {
    "value": "Agentic GR00T 2: Control and Steering",
    "id": "agentic-gr00t-2-control-and-steering",
    "level": 3
  },
  {
    "value": "GR00T 2 Turbo: Onboard Whole-Body Loco-Manipulation",
    "id": "gr00t-2-turbo-onboard-whole-body-loco-manipulation",
    "level": 2
  },
  {
    "value": "What Compression Saves and What It Costs",
    "id": "what-compression-saves-and-what-it-costs",
    "level": 3
  },
  {
    "value": "Connecting Task Predictions to High-Frequency Whole-Body Control",
    "id": "connecting-task-predictions-to-high-frequency-whole-body-control",
    "level": 3
  },
  {
    "value": "Simulation for Training and Evaluation",
    "id": "simulation-for-training-and-evaluation",
    "level": 2
  },
  {
    "value": "Adding Experience for the Target Embodiment",
    "id": "adding-experience-for-the-target-embodiment",
    "level": 3
  },
  {
    "value": "Using Digital Twins to Screen Models",
    "id": "using-digital-twins-to-screen-models",
    "level": 3
  },
  {
    "value": "Conclusion: Turning a Shared Model into Usable Skills",
    "id": "conclusion-turning-a-shared-model-into-usable-skills",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-gr00t-2-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-gr00t-2-title">GR00T 2: How World-Action Modeling Supports Generalization and Adaptation</h1>
  <p className="paper-reading-lead">GR00T 2: Scaling Robot Foundation Models for Generalization, Dexterity, and Adaptation</p>
  <p>NVIDIA · November 2026</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>World-action model</li><li>Cross-embodiment transfer</li><li>Fast adaptation</li><li>Whole-body control</li>
  </ul>
  <a className="paper-reading-source-link" href="https://research.nvidia.com/labs/gear/gr00t-2/" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">Project</span><span>Visit the NVIDIA project page</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
  <div>
    <a className="paper-reading-source-link" href="https://research.nvidia.com/labs/gear/gr00t-2/assets/gr00t2_whitepaper.pdf" target="_blank" rel="noopener noreferrer">
      <span className="paper-reading-source-tag">PDF</span><span>Read the whitepaper</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
    </a>
  </div>
</section>

Can a robot learn to place filter paper in a funnel by watching a person do it? If a robot already knows the order of the steps in an assembly task, can a few demonstrations teach it to make more precise contact? How can a humanoid use the same skill while maintaining its balance? These questions share a goal: learning skills from a broad range of experiences and adapting them to a particular robot, task, and operating condition.

**The central question in GR00T 2 is whether jointly learning how the world changes and how a robot acts can make skills easier to transfer, adapt, and execute.**

**Project overview, paraphrased:** GR00T 2 is a world-action model that jointly predicts future video and robot actions. It learns from human videos, demonstrations captured with handheld devices, and robot data. NVIDIA demonstrates skill transfer across embodiments, few-shot adaptation, and agentic control. GR00T 2 Turbo extends the approach to humanoid whole-body loco-manipulation.

**Reading note:** Joint prediction is the common modeling approach. Cross-embodiment alignment, task post-training, a reasoning agent, and a whole-body controller each address a different part of the problem. This article follows the path from model training to skill transfer and execution, keeping the foundation model's contribution distinct from the results of the complete system.

## Joint Prediction: Connecting Future Video and Robot Actions

### Why Predict the Future as Well as the Action?

A conventional vision-language-action (VLA) model generates control actions from camera observations, language instructions, and robot state. Robot demonstrations provide action targets for training. Most human videos, however, do not come with robot commands that could serve as the same kind of supervision.

Human and robot motions differ, but video can describe the changes they produce: filter paper moves into a funnel, or a plug approaches a socket and makes contact. Video generation provides a way to learn those changes. Cross-embodiment data collection and motion retargeting help map motions from different bodies into representations suitable for training.

GR00T 2 connects these ideas in a **world-action model (WAM)**. A shared network generates future visual observations and actions together. The video prediction describes how an interaction unfolds, while the action prediction describes what the current robot should do.

This builds on ideas discussed elsewhere in the series. VLA-JEPA uses future-state prediction to improve its representations; LingBot-VA uses future predictions for control. GR00T 2 extends joint video-action modeling to large-scale training with multiple data sources and robot embodiments. These are comparisons of design choices, not performance rankings across papers.

### From Input Representations to Joint Generation

The model receives recent video from multiple cameras, a language instruction, and robot state. The history in NVIDIA's demonstration covers 0.8 seconds. From these inputs, the model predicts future video and a sequence of actions called an **action chunk**.

A video variational autoencoder (VAE) compresses the raw video into latents, which are then tokenized for the shared network. Language is encoded as instruction features. Small, embodiment-specific modules connect robot state and actions to the shared network. Here, **embodiment** includes the robot's physical structure, camera configuration, and action interface. The same instruction to grasp filter paper calls for different joint targets on different robot hands.

The key connection is inside the shared Transformer. Video representations exchange information across time and camera views. Action tokens can attend to video tokens, **including the future video being generated**. This gives the action prediction access to the model's estimate of how the scene will change.

[NVIDIA's Dexter assembly example](https://research.nvidia.com/labs/gear/gr00t-2/#model) shows the head camera and both wrist cameras. **The upper image is the real observation history; the lower image is the future generated from it.** The changes in the hands and truck in the lower image are predictions.

![Real observation history from Dexter's three cameras](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/dexter-history.jpg)

![Future frames that GR00T 2 generated for all three cameras from the same observation history](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/dexter-future.jpg)

Consider the filter-paper task. The paper is still in the robot's hand in the observed frame. The video branch predicts how it will come into contact with the funnel, while the action branch generates corresponding wrist and finger movements. Both outputs are refined in the same network. The policy does not have to render a complete RGB video and hand it off to a separate controller.

Finally, embodiment-specific modules decode the shared representation into controls for the current robot. The model can share what it learns about interactions while preserving the meaning of actions for each body.

### Training with Video and Action Supervision

GR00T 2 uses **flow matching** to learn how to recover future video and actions from noise. To illustrate the idea, use the standard straight-line path below, with $Y$ denoting a target tensor of video latents or actions:

$$
X_s=(1-s)Y+s\epsilon,
\qquad u=\epsilon-Y.
$$

Here, $\epsilon$ is Gaussian noise with the same shape, and $s\in[0,1]$ is the model's internal generation time. At $s=1$, the input is noise; at $s=0$, it is the clean target. Conditioned on the observations, the network takes the noisy input $X_s$ and learns the target direction $u$. Video and action targets provide separate supervision and update the shared network.

Take a single action element. If its normalized target is 0.6 and its noise value is −0.2, the midpoint is `0.5×0.6 + 0.5×(−0.2) = 0.2`, and the target direction is `−0.2−0.6 = −0.8`. At inference, the integration runs from noise toward data, in the direction of decreasing generation time, so the value moves toward 0.6. The actual model learns over the full video and action tensors; the example isolates one element.

Video-only samples can still supervise future visual prediction. Action supervision applies where valid action labels are available. Human videos can therefore help train the shared network that generates robot actions without requiring a full set of robot control labels for every clip.

During training, the observed future provides the target. During inference, the model starts from fresh noise and generates future video latents and an action chunk. The robot executes part of the chunk, reads fresh camera observations and state, and starts the next round. **Internal denoising steps and physical execution steps run on different timescales.** The robot still needs real observations to verify a prediction that the filter paper is in place.

## Multi-Source Training: Building a Foundation for Adaptable Skills

### What Each Data Source Contributes

| Data source | Amount used for training | What it contributes |
|---|---:|---|
| Egocentric human video | 402,730 hours | A wide range of tasks, objects, and hand–object interactions |
| Handheld UMI gripper demonstrations | 10,184 hours across 2,897 tasks | Motion and grasp demonstrations in a form closer to robot manipulation |
| Robot teleoperation | About 23,500 hours | Embodiment-specific appearance, state, and executable control |

The human video comes from Human-1M. The table gives the filtered amount used by GR00T 2. UMI captures demonstrations with a handheld gripper. The robot data covers parallel grippers, dexterous hands, and humanoids.

The sources complement one another. Human experience broadens task coverage, handheld devices make demonstrations less dependent on robot access, and robot data connects that experience to physical control. Human samples with tracked hand motion can also provide motion supervision. Samples without valid actions can still train future video prediction.

Joint training also depends on alignment: observations, future frames, language, and actions need to refer to the same interaction. “Place the filter paper in the funnel with the right hand” gives more specific supervision for a step than “finish the experiment” over an entire recording. Data filtering, segmentation, and annotation help establish this correspondence.

### From a Video Prior to Robot Actions

Training proceeds in three stages:

1. **Single-view video pre-training.** Initialize from a pretrained video diffusion model and learn the future of embodied interactions from human and robot observations.
2. **Multi-view video-action training.** Add embodiment-specific state and action modules and train with multi-camera observations and valid action labels.
3. **Robot-upweighted video-action training.** Increase the contribution of robot demonstrations while retaining the other sources, bringing the shared model closer to the conditions it will face on a robot.

These stages produce a foundation model that can run directly or be adapted further. They connect video pretraining to robot control and explain why the inexpensive adaptation described later depends on large-scale pretraining.

### Does Scaling Human Video Help on Real Robots?

The authors train models with 0%, 1%, 10%, and 100% of the human-video data, then evaluate both generated rollouts and real-robot execution on 72 Dexter tasks. As the amount of human video increases, mean task progress rises from **64% to 77%** in generated rollouts and from **50% to 70%** on the robot.

![NVIDIA's human-video scaling curves: video rollout progress on the left, real-robot progress on the right, with 1 SD error bars](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/human-video-scaling.png)

The left panel in [NVIDIA's figure](https://research.nvidia.com/labs/gear/gr00t-2/#scaling) shows video rollout progress; the right shows real-robot progress. The error bars represent one standard deviation.

The metric is task progress: how much of a task was completed. It is distinct from full-task success rate. Generated rollouts and robot executions are scored separately. The increase in both measures supports the use of human video for robot learning as well as video prediction.

The amount of training also changes across these settings. The results support the overall scaling approach, without isolating the effects of more data and more training. The next question is whether the resulting experience transfers to tasks the target robot has never demonstrated.

## X-Adaptability: Cross-Embodiment Skill Transfer

### Human Demonstrations Teach the Task; Robot Data Grounds It in the Target Body

NVIDIA calls this capability **cross-adaptation (X-Adapt)**. A person or another data collection device demonstrates the target task. The target robot can contribute data from other tasks or general activities, but it provides no demonstration of the target task.

![Whitepaper Figure 12: Retarget human motion to the robot interface and co-train with task-agnostic robot play data](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/fig12-human-transfer.png)

Figure 12 traces the filter-paper task through the transfer process:

1. A person performs the task wearing head and wrist cameras and motion-tracking equipment, with camera views positioned to approximate the robot's.
2. Transform the human wrist trajectories into the robot's coordinate frame and retarget hand poses to feasible robot targets, preserving important contact relationships and respecting joint limits.
3. Co-train on the target-task demonstrations and task-agnostic robot play data that excludes that task. The demonstrations show what to do; play data teaches the model what the target robot looks like and how it moves.
4. At deployment, use the robot's own observations to predict future video and actions for that body, then continue execution with real feedback.

Zero teleoperated demonstrations of the target task still leave room for robot experience from other tasks. Joint prediction provides a shared learning objective, while view alignment and action retargeting help bridge differences between bodies.

With 20 real-robot trials per task, filter-paper setup succeeds in **65%** of trials. Results across the four lab tasks range from **10% to 65%**. Skill transfer is possible, but the spread shows that some fine manipulation tasks remain difficult to complete reliably.

In [NVIDIA's filter-paper comparison](https://research.nvidia.com/labs/gear/gr00t-2/#h2r), the upper image is a human training demonstration and the lower image shows Dexter running autonomously. Both place filter paper into a funnel, using different fingers and action interfaces.

![Human demonstration: a gloved hand places filter paper into a funnel](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/filter-paper-human.jpg)

![Real robot: Dexter's hand places filter paper into the same funnel](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/filter-paper-dexter.jpg)

### Transferring from Handheld Grippers and Wearable Hands

UMI demonstrations are closer to a robot-compatible format than ordinary human video. The gripper, camera, and action reference frame can still differ. Transferring to YAM requires aligning the wrist camera view and expressing end-effector motion and gripper width in YAM's action space.

With only UMI data, the model can still predict a human arm and handheld gripper after a YAM observation. Adding task-agnostic data from the target robot helps the predictions reflect YAM's appearance. Real-robot trials determine whether the task is actually completed.

In toy dump-truck assembly, a task demonstrated only with the handheld gripper, YAM completes **6/10** trials end to end. The target robot has no demonstration of that task, but it still benefits from pretraining and task-agnostic data. The result shows transfer across devices alongside substantial failure on a long-horizon task.

DexUMI extends this collection approach to a wearable five-finger exoskeleton. When its joints and contact geometry match the target hand, human demonstrations map more readily to robot actions for bimanual tasks such as preparing breakfast or striking a match. A different robot hand can still require motion retargeting and view alignment.

**A shared model can transfer task experience; the transfer setup must still align observations and action semantics.** The experiments evaluate joint modeling, training data, and alignment together. They do not isolate how much of the gain comes from future prediction alone.

## Fast Adaptation and Reliable Execution

### Improving Execution Precision with a Few Demonstrations

After cross-embodiment transfer, a robot may follow the correct sequence but miss the grasp position, gripper opening, or contact alignment. Demonstrations from the target robot supply these details, which adaptation incorporates into the existing skill.

GR00T 2 uses **low-rank adaptation (LoRA)**. It keeps the base weights and trains a smaller set of parameter updates while continuing to learn future video and actions. This adapts the model to a task with less data and computation than retraining the foundation model.

![Whitepaper Figure 2: Mean Dexter-50 success with zero, one, or five demonstrations from the target robot](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/fig02-few-shot.png)

Dexter-50 tasks appear in human video or other robots' data, but they are absent from Dexter's own training data. The evaluation compares direct use of the pretrained model with adaptation on one or five demonstrations per task:

| Demonstrations per task | 0 | 1 | 5 |
|---|---:|---:|---:|
| Mean trial success rate | 40% | 71% | 95% |

Five demonstrations amount to less than three minutes of robot data per task. The corresponding LoRA fine-tuning takes about 30 minutes on a single RTX 5090. That is the cost of adapting an existing foundation model.

The 50 tasks were selected from a set that reached at least 80% success after five demonstrations. **The 95% average applies to this selected set and does not guarantee five-shot success on arbitrary new tasks.** Also, “succeeded at least once on 40/50 tasks” is different from the 40% zero-shot trial success rate in the table.

Dexterous manipulation shows what task adaptation can achieve. With two 22-DoF Sharpa hands, Dexter can carry out assembly and laboratory tasks. NVIDIA reports 85% success on installing memory modules. In another example, the authors reconstruct a tool-use task in simulation from one human demonstration, collect demonstrations using reinforcement learning, adapt GR00T 2 on the simulation data, and transfer it to real robot hands. These examples use task post-training.

### Reinforcement Learning for Contact-Rich Skills

When inserting an Ethernet cable or threading a pipe fitting, an action can resemble the demonstration and still fail. Real-world reinforcement learning (RL) lets the robot try actions and use task success as feedback to find better ways to make contact.

The authors collect successful rollouts found by RL and fine-tune from the same supervised fine-tuning (SFT) initialization as GRPO. They call this **GRPO-induced self-imitation**. Interaction finds effective behavior, and supervised training consolidates it.

NVIDIA highlights three contact-rich tasks. On fixed-pipe fittings, cable insertion, and charger insertion, supervised fine-tuning achieves **66%, 76%, and 40%** success, respectively. GRPO-induced self-imitation raises these to **88%, 94%, and 96%**, with 50 trials per task and policy. The comparison shows that experience from interaction can improve contact precision under these task and evaluation conditions.

### Agentic GR00T 2: Control and Steering

Even when a robot can assemble a part, dropping it leaves a decision to make: continue, retry, or retrieve the part first. **Agentic GR00T 2 is a layered control system that uses GR00T 2 as its manipulation policy.** A higher-level reasoning agent breaks down the task, chooses the next step, and checks results. GR00T 2 generates actions from instructions and observations, and the robot executes them.

Through a shared tool server, the agent reads camera images and robot state, calls GR00T 2 through the WAM API, and uses code-as-policy (CaP) tools when needed. The agent observes the outcome before choosing what to do next. **Agentic control organizes the feedback loop; visual steering supplies spatial targets for the current step.**

![NVIDIA's Agentic GR00T 2 runtime diagram, showing the agent, tool server, execution, and environment feedback](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/agentic-runtime.png)

Read [NVIDIA's runtime diagram](https://research.nvidia.com/labs/gear/gr00t-2/#agentic-control) from left to right to see how a task becomes an execution command. The blue arrows show how observations return to the policy or the tool server.

#### Agentic Control: Sequencing Tasks and Recovering from Failure

In real-robot assembly, GR00T 2 performs most of the manipulation while the agent monitors progress. If a part drops or progress stalls, the agent can use a recovery tool to regrasp the part or rearrange the scene, then hand control back to GR00T 2. This puts individual skills inside an observe–reason–act–verify loop for long-horizon tasks.

![Whitepaper Figure 7: Long-horizon assembly success with corrective demonstrations and agentic recovery](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/fig07-agent-recovery.png)

The left panel of Figure 7 reports 100 trials per task and method. At the start of each trial, the parts are dumped onto a table, so the robot must complete the assembly from a cluttered layout:

| Method | Toy plane | Toy tractor | Hot Wheels car |
|---|---:|---:|---:|
| Supervised fine-tuning (SFT) | 69/100 | 51/100 | 23/100 |
| Add corrective demonstrations on states encountered by the policy (DAgger) | 84/100 | 71/100 | 78/100 |
| Add agentic recovery | 98/100 | 97/100 | 97/100 |

**Success rates of 97% or higher are results of the combined system, which includes corrective demonstrations and recovery.** Some failures were still marked as complete even though screws were not fully tightened. Checking the physical state remains a challenge.

#### Visual Steering: Making the Target Unambiguous

Language alone can leave it unclear what to pick up, where to put it, or which arm should act. In the same system, the reasoning agent marks grasp and release points in the current camera view, uses color to indicate the arm, and passes those marks to GR00T 2 with a step instruction. GR00T 2 generates the approach, grasp, transport, and release motions. The agent then checks whether to continue or retry.

![Dexter waste sorting: the agent marks the target object and its destination bin in the camera view](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/dexter-steering-poster.jpg)

[NVIDIA's Dexter sorting example](https://research.nvidia.com/labs/gear/gr00t-2/#steering) shows the selected object and bin. The marks specify which object to move and where it should go for that step.

Training marks can be extracted from hand and gripper state in existing demonstrations. The model learns to interpret these marks during training without requiring a new collection of annotated demonstrations.

In YAM's short-horizon **what-and-where** tests, each setting has 90 trials. The task instruction alone yields **40%** success. Step instructions from the planner reach **66%**, and adding visual marks to those step instructions reaches **92%**. All three results are for the same subset of tasks and should be kept separate from aggregates that include other types of instructions.

With visual steering, YAM completes **17/20** long-horizon waste-sorting trials and **3/10** board-disassembly trials. Completing the entire sorting task remains difficult for Dexter. Grasp and release points also leave final orientation and intermediate motions, such as pouring or wiping, unspecified. Language and learned manipulation skills still supply that information.

Fast adaptation and reinforcement learning improve individual skills. Agentic GR00T 2 combines execution, verification, and recovery over longer tasks. Deploying joint prediction on a moving humanoid also requires addressing inference cost and whole-body control.

## GR00T 2 Turbo: Onboard Whole-Body Loco-Manipulation

### What Compression Saves and What It Costs

A humanoid needs to manipulate objects while moving and maintaining balance. The cost of joint video-action prediction affects whether a policy can do this on the robot's onboard hardware.

**GR00T 2 Turbo** uses a smaller joint video-action Transformer with 2B parameters and a higher-compression video encoder. A more compact video representation reduces computation while retaining joint prediction and the same action horizon.

![Whitepaper Figure 19: Turbo prediction latency before and after inference optimization on a workstation and onboard hardware](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/fig19-turbo-latency.png)

Figure 19 compares prediction time for the same checkpoint before and after inference optimization. In the optimized G1 configuration, one prediction takes about **38 ms** on an RTX 5090 and **124 ms** on the onboard Jetson Thor. This measures model prediction, not the complete response, which also includes observation preparation, transmission, and control. The improvement reflects the full inference setup rather than model compression alone.

There is a trade-off between speed and capability. In NVIDIA's task-by-task comparison, Turbo outperforms GR00T 2 on YAM's fixed-pipe fittings and circuit-breaker wire insertion, but trails on the other four YAM tasks. On Dexter, Turbo trails on five of six tasks and ties on the sixth. Its compute requirements are better suited to onboard use, while performance on fine manipulation still needs to be checked task by task.

### Connecting Task Predictions to High-Frequency Whole-Body Control

![Whitepaper Figure 9: Turbo generates a motion plan and SONIC handles high-frequency whole-body control and balance](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/fig09-whole-body-stack.png)

Figure 9 separates task-level prediction from body control. A reasoning model selects the task. Turbo jointly predicts future video and whole-body motion tokens. The **SONIC whole-body controller** converts those tokens into joint targets using the robot's current state to track the motion and maintain balance.

Turbo plans roughly once per second and generates **1.6 seconds** of motion per chunk. SONIC executes at **50 Hz**. The lower-level controller keeps the robot moving without requiring the model to generate a new video prediction every 20 milliseconds. The execution components run onboard; the higher-level reasoning model runs separately.

The G1 system completes **48/48** popcorn-serving trials and **28/30** table-clearing trials, but only **14/30** trials on a more difficult whole-body cleaning task. Joint prediction can support real-world loco-manipulation, with clear room to improve reliability on harder tasks.

![NVIDIA's G1 popcorn demonstration: a humanoid handles a tray beside the popcorn machine](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/g1-popcorn.jpg)

In the [official popcorn demonstration](https://research.nvidia.com/labs/gear/gr00t-2/#whole-body), handling the tray and delivering popcorn require hand movements and whole-body motion to work together.

## Simulation for Training and Evaluation

### Adding Experience for the Target Embodiment

Collecting whole-body demonstrations and learning by trial and error on a real robot are costly. Simulation can supplement real robot data with more variation in tasks and robot motions. Real-world trials then test whether the skills transfer.

With the real training data held fixed, adding simulated demonstrations raises Turbo's real-robot success rate on the out-of-distribution G1 tasks from **6.7% to 63.3%**. GR00T 1.7 reaches **40.0%** with simulation data. The comparison supports simulation data as a way to improve real-world generalization in this setting; it does not imply that every simulated skill will transfer directly.

In [NVIDIA's G1 crown-pickup example](https://research.nvidia.com/labs/gear/gr00t-2/#whole-body), the upper image is simulation and the lower image is the real robot. Compare the positions of the objects on the table and the robot's starting posture.

![Simulation: G1 faces the crown and distractor objects on the table](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/g1-crown-sim.jpg)

![Real world: G1 faces the same crown-pickup task](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/g1-crown-real.jpg)

These components address different parts of whole-body loco-manipulation: Turbo reduces prediction cost, SONIC connects the predictions to physical control, and simulation adds experience for learning new skills.

### Using Digital Twins to Screen Models

Simulation also helps developers screen models before real-robot trials. The authors use robot videos, scans, and photographs to reconstruct the task environment, including geometry, appearance, and collision models. Automated tests and human feedback help refine the resulting digital twins.

Across **25 YAM tasks and 14 policies**, simulated and real-robot success rates have a Pearson correlation of **0.92**. This correspondence lets developers screen data processing or inference settings in simulation before testing them on hardware.

The result supports simulation as a development tool for these tasks. New contact conditions, embodiments, or training methods still require fresh checks of how closely simulation tracks reality. A high correlation alone does not validate real-world execution.

## Conclusion: Turning a Shared Model into Usable Skills

GR00T 2 learns future visual changes and robot actions together, allowing human videos, handheld demonstrations, and robot data to contribute to a common skill foundation. Cross-embodiment experiments show how task experience can transfer. Few-shot adaptation and reinforcement learning improve specific operations. A reasoning agent sequences tasks, identifies targets, and handles recovery. Turbo and a whole-body controller bring joint prediction to onboard loco-manipulation.

**Joint modeling provides the shared foundation; alignment and post-training turn that foundation into task skills; control and feedback put those skills to work.** The three capability groups share a modeling approach and depend on their own data, training, and system components.

The results support the potential to scale this approach, with clear limits. Zero target-task demonstrations still depend on prior experience with the target embodiment. High five-shot success depends on task selection. Verifying physical states during long tasks and carrying out difficult whole-body operations remain challenging. A plausible predicted future is not confirmation that the physical world has changed as predicted. Reliability ultimately depends on real feedback and evaluation on the intended task.

</div>
