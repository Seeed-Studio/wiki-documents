---
description: "A close reading of LaWAM, from latent visual subgoals and action generation to benchmark results and LeRobot integration."
title: "LaWAM: Predicting Scene Changes Before Generating Robot Actions"
hide_title: true
keywords: [Paper Deep-Dive, LaWAM, World-Action Models, Latent Actions, LeRobot]
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/lawam_overview.png
slug: /robotics/paper_reading_lawam
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-16
  author: liujunjie
createdAt: '2026-11-16'
updatedAt: '2026-11-16'
url: https://wiki.seeedstudio.com/robotics/paper_reading_lawam/
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Prerequisites: Three Quantities in the Drawer Task",
    "id": "prerequisites-three-quantities-in-the-drawer-task",
    "level": 2
  },
  {
    "value": "Abstract and Reading Guide",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Stage 1: Learning to Predict Change from Two Observations",
    "id": "stage-1-learning-to-predict-change-from-two-observations",
    "level": 2
  },
  {
    "value": "Stage 2: Predicting the Latent Action Before the Future Is Observed",
    "id": "stage-2-predicting-the-latent-action-before-the-future-is-observed",
    "level": 2
  },
  {
    "value": "Why the Same Subgoal Horizon Can Contain Different Numbers of Steps",
    "id": "why-the-same-subgoal-horizon-can-contain-different-numbers-of-steps",
    "level": 3
  },
  {
    "value": "Experiments: Action-Chunk Latency and Task Success",
    "id": "experiments-action-chunk-latency-and-task-success",
    "level": 2
  },
  {
    "value": "LIBERO: Success Rate and Latency per Action Chunk",
    "id": "libero-success-rate-and-latency-per-action-chunk",
    "level": 3
  },
  {
    "value": "RoboTwin and Physical Robots: What the Averages Leave Out",
    "id": "robotwin-and-physical-robots-what-the-averages-leave-out",
    "level": 3
  },
  {
    "value": "Can the Same Latent Actions Be Reused Across Scenes?",
    "id": "can-the-same-latent-actions-be-reused-across-scenes",
    "level": 3
  },
  {
    "value": "Ablation: What Does the Predicted Subgoal Contribute to Action Generation?",
    "id": "ablation-what-does-the-predicted-subgoal-contribute-to-action-generation",
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

<section className="paper-reading-intro" aria-labelledby="paper-reading-lawam-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-lawam-title">LaWAM: Predicting Scene Changes Before Generating Robot Actions</h1>
  <p className="paper-reading-lead">LaWAM: Latent World Action Models for Efficient Dynamics-Aware Robot Policies</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li><a href="#stage-1-learning-to-predict-change-from-two-observations">Latent Actions and the World Model</a></li>
    <li><a href="#stage-2-predicting-the-latent-action-before-the-future-is-observed">Action Generation</a></li>
    <li><a href="#experiments-action-chunk-latency-and-task-success">Evaluation</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2606.15768v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Read the paper</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Key LeRobot Commands">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/main/en/lawam" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot LaWAM Documentation ↗</a>

**Key LeRobot Commands**

- `--policy.path=jialei02/lawam-libero-sft-lerobot` loads the released checkpoint fine-tuned on LIBERO.
- `--env.type=libero` selects the evaluation environment. Use `--env.task=libero_object` for a quick run. The full benchmark covers the Spatial, Object, Goal, and Long suites.
- `--eval.n_episodes=50` runs 50 trials per task. The full evaluation uses `--env.task_ids` to select tasks 0–9 in each suite, for 2,000 trials in total.
- The released checkpoint sets `flow_num_inference_steps=10`, which determines the number of denoising steps used to generate each action chunk.

See the LeRobot documentation above for installation, the complete `lerobot-eval` command, and the fine-tuning recipe.

</aside>

Jialei Chen et al. · arXiv:2606.15768v2 · October 25, 2026 · CoRL 2026 · [Project page](https://rlinf.github.io/LaWAM/) · [Authors' code](https://github.com/RLinf/LaWAM)

A robot is asked to open a drawer. It first moves its gripper toward the handle, then closes the gripper and pulls. If the first action chunk only gets the gripper close to the handle, that approach may be the only visible change the policy needs to predict for that chunk. Once the next observation shows the gripper closed around the handle, the following prediction may include the drawer sliding open. **If a policy predicts the scene at the end of the next action chunk and uses that prediction to generate controls, how much of the future does it need to predict?**

## Prerequisites: Three Quantities in the Drawer Task

- A **latent action** is a continuous vector learned from a pair of observations. It summarizes the transition between them, such as the gripper moving toward the handle or pulling outward. Training determines what its coordinates encode.
- A **latent visual subgoal** is a prediction of the scene at the end of the current action chunk, represented by visual features that preserve spatial layout. The features near the gripper can change as it moves, while those for the tabletop may stay roughly the same.
- An **action chunk** is a time-ordered sequence of control vectors, such as end-effector poses and gripper commands. The action expert generates commands for reaching, closing, and pulling. After execution, the policy uses a fresh observation to generate subsequent actions.

## Abstract and Reading Guide

**Abstract in brief.** LaWAM moves future prediction into the feature space of a pretrained visual encoder. During video pretraining, it infers a latent action from two observations and learns to use it to predict future features from the current features. In the robot policy, the vision-language backbone predicts a latent action from the current observation and instruction. The world model maps it to a spatial subgoal, which conditions the action expert. The authors report average success rates of 98.6% on LIBERO and 91.22% on RoboTwin, with model inference taking 187 ms per action chunk.

**Reading note.** Follow two handoffs. First, the observed future provides a teacher signal for the latent action during training. At deployment, the policy supplies its own estimate of that latent action. Second, the action expert receives the predicted visual subgoal. An ablation tests that connection by removing the subgoal from the expert's inputs.

## Stage 1: Learning to Predict Change from Two Observations

For each video example, the authors sample a current frame and a future frame separated by a physical interval $\tau$. A frozen DINOv3 encoder maps them to spatial features $u$ and $u_T$, with $T$ denoting the endpoint of the interval. The inverse-dynamics encoder processes the visual patches from both frames together and infers a continuous latent action $z$. The forward decoder takes the current features and $z$. It injects $z$ through adaptive layer normalization to predict the endpoint features:

$$
\tilde{u}_T = \mathrm{LaWM}_{\omega}(u,z).
$$

In the drawer example, the inverse-dynamics encoder sees the drawer before and after it opens and must encode enough information about that change in $z$. The forward decoder starts from the features of the closed drawer. The current features preserve the starting positions of the drawer and gripper, and the latent action tells the decoder what changed so it can predict the open drawer in the context of that scene.

Training minimizes the squared error between $\tilde{u}_T$ and $u_T$ and uses KL divergence to regularize the latent-action posterior toward a standard normal distribution. When end-effector state is available, an auxiliary head predicts the end-effector state at the endpoint from the current state and $z$. This encourages $z$ to encode the robot's motion. After pretraining, the forward decoder becomes the **Latent World Model (LaWM)**, the frozen inverse-dynamics encoder serves as the teacher for the next stage, and the auxiliary head is discarded.

This stage uses roughly 3,000 hours of robot video and 1,500 hours of egocentric human video. The prediction horizon is 1.2 seconds for robot teleoperation video and 0.4 seconds for human video. Visual features provide a common training target, and robot data with control or state labels can supply additional supervision.

## Stage 2: Predicting the Latent Action Before the Future Is Observed

During policy training, the frozen teacher can still use both frames. The Qwen3-VL backbone estimates a latent action $\hat{z}$ from the current observation and task instruction. The latent-action queries attend to the primary view and instruction, while the action queries can also attend to optional auxiliary views. A single LaWM forward pass maps $\hat{z}$ and the current features to the spatial subgoal $\hat{u}_T$.

![LaWAM's two-stage training and action-generation pipeline](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/lawam_overview.png)

The first stage learns changes from paired video observations. The second stage predicts a latent action from the current observation and instruction. The action expert uses both vision-language context and the spatial features for the current and predicted scenes. Image from the authors' project page.

The Alternate-DiT action expert alternates attention between two inputs. One provides the VLM's semantic context. The other provides the current spatial features $u$ and the predicted subgoal $\hat{u}_T$. For the drawer task, the first input carries information about the instruction and target object, and the second describes the expected change during this chunk. The action head learns conditional flow matching to turn a noisy action sequence into a continuous action chunk. In the paper's standard inference setup, the action expert uses 10 denoising steps, and LaWM computes one visual subgoal per chunk.

| Training signal | What it constrains |
| --- | --- |
| Latent-action distillation | Brings the policy prediction $\hat{z}$ close to the teacher's latent action $z$, inferred from the observation pair. |
| Future-feature regression | Drives LaWM with the policy's own $\hat{z}$ and trains its output to match the observed future features $u_T$. |
| Action flow matching | Uses the predicted subgoal and semantic context to learn action chunks from robot demonstrations. |

The action expert uses the predicted subgoal in both training and deployment. **Knowledge Insulation (KI)** blocks gradients from the action loss through the subgoal branch. Future-feature regression still updates LaWM, and the action loss still trains the action expert and its semantic conditioning pathway. At deployment, the policy proceeds from the current image and instruction to a latent-action estimate, a predicted subgoal, and then an action chunk. The policy uses RGB observations, and the robot action labels use an end-effector representation. Human video contributes to Stage 1. Stage 2 uses robot trajectories with language instructions.

![Observed gripper motion and predicted subgoal heatmaps in LIBERO](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/libero_chunk.png)

The right column shows the predicted subgoal for this action chunk. In the observations on the left, the gripper moves toward the position indicated by the subgoal as the chunk plays out.

### Why the Same Subgoal Horizon Can Contain Different Numbers of Steps

Each dataset retains its native control frequency. At $h$ Hz, an action chunk spanning $\tau$ seconds contains $\mathrm{round}(\tau h)$ steps. Step $i$ is encoded at its elapsed time $i/h$. For a 1.2-second horizon, 5 Hz data provides six steps and 20 Hz data provides 24 steps. Step 3 at 5 Hz and step 12 at 20 Hz both occur at 0.6 seconds, so they receive the same temporal position encoding.

For a controlled LIBERO experiment, the authors downsample the same 20 Hz demonstrations to create 5 Hz and 10 Hz versions. The tasks, robot embodiment, and source demonstrations are shared across rates. Mixing frequencies without physical-time encoding reduces success relative to the 20 Hz reference. Adding the encoding recovers much of the lost performance. The comparison isolates how aligning actions by elapsed time affects mixed-frequency training.

## Experiments: Action-Chunk Latency and Task Success

### LIBERO: Success Rate and Latency per Action Chunk

The paper evaluates the Spatial, Object, Goal, and Long suites, with 40 tasks in total and 50 trials per task. A trial counts as successful when it meets the task's success condition. The table shows average success rates and action-chunk latencies for selected methods.

| Method | Average success rate across four suites | Latency per action chunk |
| --- | ---: | ---: |
| π₀.₅ | 96.9% | 220 ms |
| Fast-WAM | 97.6% | 486 ms |
| Cosmos-Policy | 98.5% | 1,413 ms |
| LingBot-VA | 98.5% | 4,482 ms |
| LaWAM | 98.6% | 187 ms |

LaWAM scores 99.4% on Spatial, 99.6% on Object, 98.4% on Goal, and 97.0% on Long. The roughly 24-fold latency difference is relative to LingBot-VA. The authors time the models on the same A100 GPU with BF16 precision and 10 denoising steps, while each method retains its native input resolution and prediction horizon. The 187 ms covers model inference only. LaWM has about 230 million parameters, and the full policy has about 2.3 billion.

![Mean LIBERO success rate versus model inference latency per action chunk](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/libero_latency.png)

The horizontal axis is inference latency per chunk, and the vertical axis is mean LIBERO success rate. Circle size represents parameter count. The pink sector represents the fraction of parameters in the world model.

### RoboTwin and Physical Robots: What the Averages Leave Out

RoboTwin 2.0 evaluates 50 bimanual tasks, with 100 trials per task in each of two conditions: clean and randomized scenes. LaWAM reaches 92.64% and 89.80%, respectively, for a combined average of 91.22%. Fast-WAM reaches 91.98% and 90.52% in the same conditions. LaWAM leads in clean scenes and trails Fast-WAM slightly under randomization. On the microwave-opening task, LaWAM scores 41% and 43%, compared with 95% and 91% for Motus.

The authors use a Franka arm for pick-and-place and drawer opening, and a Quanta X1 for towel folding and table clearing. LaWAM succeeds in 28, 26, and 27 of 30 trials, respectively, on the first three tasks. A table-clearing trial succeeds only if the robot completes all eight subtasks. With the same checkpoint, LaWAM clears the table in 21 of 50 trials under normal lighting and 12 of 50 with additional colored lighting. The lower success rate under colored lighting shows how much the result can vary with the observation conditions on this long-horizon task.

![Physical robots performing pick-and-place, drawer opening, towel folding, and table clearing](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/real_world_rollouts.png)

Read each sequence from left to right. The table-clearing example continues across two rows and includes clearing tissues, a paper cup, plates, a bowl, and a spoon.

### Can the Same Latent Actions Be Reused Across Scenes?

The authors extract a sequence of latent actions from a source video and apply it to initial observations from different scenes and robot embodiments. This illustrates how LaWM maps the same transition code to context-specific changes in spatial features. These are qualitative, open-loop feature predictions. The preceding closed-loop trials measure success in actual control.

![Feature rollouts from shared latent actions across scenes and robot embodiments](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/lawm_dynamics.png)

The top row is the source video used to infer the latent actions. Each remaining row begins with an initial image and its visual features. The subsequent colored grids show LaWM's predictions at successive times.

### Ablation: What Does the Predicted Subgoal Contribute to Action Generation?

The LIBERO-10 ablations use a variant that **skips Stage 2 policy pretraining** as the reference. It scores 96.4%, while the full model with that pretraining scores 97.0%. The variants below use the 96.4% reference and retain the action loss.

| Setting | Success rate |
| --- | ---: |
| Reference without Stage 2 policy pretraining | 96.4% |
| Remove subgoal conditioning from the action expert while retaining distillation and future-feature supervision | 94.6% |
| Remove Knowledge Insulation | 94.2% |
| Remove latent-action distillation | 93.4% |
| Predict future features directly, bypassing the latent-action interface | 94.4% |
| Use a parameter-matched adapter | 91.4% |
| Base VLA | 91.0% |

Removing the action expert's subgoal input lowers success by 1.8 percentage points. This comparison directly tests the value of letting the expert read the predicted features at inference. The direct-prediction and parameter-matched controls test the role of the latent-action interface and whether extra capacity alone explains the improvement.

## LeRobot Integration and Evaluation Differences

The released LeRobot LIBERO checkpoint includes normalization and gripper processing. With `action_horizon=8`, it predicts eight control steps per chunk. With `n_action_steps=8`, it executes all eight before predicting a new chunk from the latest observation. The action head pads its internal sequence to `chunk_size=50`. `policy.path` loads the LeRobot-format `model.safetensors` checkpoint. The authors' original `.pt` weights require conversion before loading through this interface.

For a different multicamera dataset, `primary_image_features` and `wrist_image_features` specify the roles of the primary and wrist views. `lam_image_feature` selects which primary view supplies the temporal frames for the latent action model.

LeRobot reports **1,970 successes in 2,000 trials (98.5%)** for the released checkpoint across the four LIBERO suites with MuJoCo 3.3.2. The paper reports an average success rate of **98.6%** in its experiment table.

## Conclusion

In the drawer example, LaWAM predicts scene features at the end of the current action chunk. The action expert uses them to generate the controls for reaching, closing the gripper, or pulling. The LIBERO latency comparison shows that the policy can use a predicted future while keeping action-chunk generation fast. Removing the subgoal from the action expert lowers success on LIBERO-10, showing that the predicted spatial features help action generation in that evaluation.

Large camera movements can interfere with learning latent actions, and subtle cloth deformations are rare in the training data. The drop in table-clearing success under additional colored lighting shows that observation conditions still matter for long-horizon tasks.

</div>
