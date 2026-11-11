---
description: "A close reading of LingBot-VLA 2.0: data filtering, a 55-dimensional cross-embodiment action space, MoE action experts, current/future query distillation, and the conditions and limits of hardware results."
title: "LingBot-VLA 2.0: Cross-Embodiment Actions and Future Perception"
hide_title: true
keywords: [Paper Deep-Dive, LingBot-VLA 2.0, MoE, Cross-Embodiment, Dual-Query Distillation, LeRobot]
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/fig01-framework.png
slug: /robotics/paper_reading_lingbot_vla2
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-06
createdAt: '2026-11-05'
updatedAt: '2026-11-06'
url: https://wiki.seeedstudio.com/robotics/paper_reading_lingbot_vla2/
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Prerequisites: Shared Experience and Shared Control Interfaces",
    "id": "prerequisites-shared-experience-and-shared-control-interfaces",
    "level": 2
  },
  {
    "value": "Abstract and Reading Guide",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Introduction and Related Work: Why Change Three Things Together?",
    "id": "introduction-and-related-work-why-change-three-things-together",
    "level": 2
  },
  {
    "value": "Comparison with LingBot-VA: How Future Information Enters Action Generation",
    "id": "comparison-with-lingbot-va-how-future-information-enters-action-generation",
    "level": 2
  },
  {
    "value": "Data: Making Trajectories Worth Learning and Compatible across Sources",
    "id": "data-making-trajectories-worth-learning-and-compatible-across-sources",
    "level": 2
  },
  {
    "value": "A Unified 55-Dimensional Action Space",
    "id": "a-unified-55-dimensional-action-space",
    "level": 2
  },
  {
    "value": "Core Network: Understand Scenes, Route Experts, Generate Actions",
    "id": "core-network-understand-scenes-route-experts-generate-actions",
    "level": 2
  },
  {
    "value": "MoE: Each Token Selects a Few Experts",
    "id": "moe-each-token-selects-a-few-experts",
    "level": 3
  },
  {
    "value": "Dual-Query Distillation: Future Representations as Action Conditions",
    "id": "dual-query-distillation-future-representations-as-action-conditions",
    "level": 3
  },
  {
    "value": "Flow Matching: Turn a Noisy Action Chunk into an Executable Trajectory",
    "id": "flow-matching-turn-a-noisy-action-chunk-into-an-executable-trajectory",
    "level": 3
  },
  {
    "value": "Connecting Training to Practical Use",
    "id": "connecting-training-to-practical-use",
    "level": 2
  },
  {
    "value": "Experiments: Where Improvement Appears and What Remains Difficult",
    "id": "experiments-where-improvement-appears-and-what-remains-difficult",
    "level": 2
  },
  {
    "value": "Dual-Arm Manipulation: Better Means, Uneven Task Results",
    "id": "dual-arm-manipulation-better-means-uneven-task-results",
    "level": 3
  },
  {
    "value": "Long-Horizon Mobile Manipulation: Relative Gains with Substantial OOD Degradation",
    "id": "long-horizon-mobile-manipulation-relative-gains-with-substantial-ood-degradation",
    "level": 3
  },
  {
    "value": "Ablations: Targets, Action Spaces, and Normalization Matter",
    "id": "ablations-targets-action-spaces-and-normalization-matter",
    "level": 3
  },
  {
    "value": "What the Future-Prediction Evidence Supports",
    "id": "what-the-future-prediction-evidence-supports",
    "level": 3
  },
  {
    "value": "LeRobot Integration and the Limits of Paper Results",
    "id": "lerobot-integration-and-the-limits-of-paper-results",
    "level": 2
  },
  {
    "value": "Conclusion",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-lingbot-vla2-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-lingbot-vla2-title">LingBot-VLA 2.0: Cross-Embodiment Actions and Future Perception</h1>
  <p className="paper-reading-lead">From Foundation to Application: Improving VLA Models in Practice</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Cross-embodiment data</li><li>55-dimensional action space</li><li>Sparse MoE</li><li>Future prediction</li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2607.06403v1" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Read the paper</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Key LeRobot Commands">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/main/en/lingbot_vla_v2" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="Hugging Face" width="24" height="24" /> Hugging Face · LeRobot LingBot-VLA 2.0 Documentation ↗</a>

**Key LeRobot Commands**

Pass these fragments to `lerobot-train` alongside dataset, output-directory, and other arguments. See the official documentation above for full installation and robot mapping instructions.

- `--policy.path=lerobot/lingbot_vla_v2_base`: Start adaptation from the converted pretrained checkpoint. A custom robot requires mappings for state slots, action slots, and camera names.
- `--policy.dtype=float32 --accelerator.mixed_precision=bf16`: Keep FP32 weights while computing with BF16 mixed precision, following the current official training recommendation.
- `--policy.train_expert_only=true --policy.gradient_checkpointing=true`: Freeze the vision-language backbone, train only the action expert, and use recomputation to save activation memory. This changes which parameters are trainable.

</aside>

To put fruit in a refrigerator, a robot must identify objects, reach and grasp, move its base, open the refrigerator, and place the fruit. Changing robots changes joint counts, camera positions, and available actions. **LingBot-VLA 2.0 asks how one foundation model can learn shared manipulation experience while accommodating different bodies' control requirements and anticipating subsequent scene changes.**

## Prerequisites: Shared Experience and Shared Control Interfaces

A **Vision-Language-Action model (VLA)** receives images, task text, and the robot's current state, then outputs numerical control values. It must learn how to move in a scene, rather than merely describe it.

**Embodiment** means a robot's physical body and control conditions. Dual-arm grippers, humanoid dexterous hands, and arms on mobile bases cannot reuse identical joint values even for the same instruction. A unified data format provides a common interface, while the model must still learn each embodiment's motion patterns.

An **action chunk** is a multistep action sequence predicted at once. The released implementation defaults to 50 steps, each using a 55-dimensional canonical vector, for shape `50 × 55`. This includes padding and does not mean the robot has 55 joints. Generating a chunk also does not mean the controller can run only once per second.

## Abstract and Reading Guide

**Paraphrase:** Despite progress in VLA foundation models, a gap remains between laboratory results and practical applications. LingBot-VLA 2.0 improves its predecessor in three functional directions: a redesigned data pipeline and pretraining on about 60,000 hours, comprising 50,000 hours of trajectories across 20 robot configurations and 10,000 hours of egocentric human video; an expanded control space for heads, waists, mobile bases, and dexterous hands; and future prediction as a proxy task for predictive dynamics modeling, using a video representation model for semantic priors and a depth model for geometric cues. The authors evaluate these improvements in GM-100 generalist-policy settings and long-horizon mobile manipulation on two platforms.

**Reading note:** These three directions jointly constitute the system contribution. MoE expands action-modeling capacity through architecture; dual-query distillation trains spatial and temporal representations. The main result tables evaluate the complete system and cannot attribute all mean improvement to one module.

## Introduction and Related Work: Why Change Three Things Together?

The introduction's first paragraph recognizes two foundations: vision-language models provide image-text semantics, and larger robot datasets provide manipulation experience. The second identifies stronger practical demands: data comes from different bodies, actions involve more body parts, and changing environments require understanding subsequent outcomes.

The third paragraph reviews data scaling, architectures for embodiment differences, and latent actions or predictive modeling. The fourth organizes these into three improvements: **broader and cleaner data, more controllable body parts, and perception learning directed toward the future**. Dual-arm and mobile-manipulation experiments then test this approach (PDF pages 1–2).

Related work has two groups (Section 2):

- **Generalist manipulation policies:** Data scaling, egocentric human experience, unified action representations, geometric supervision, and predictive objectives supply different capabilities. This work brings them into one pretraining and control framework.
- **Mixture-of-Experts VLAs:** Some approaches organize experts by force sensing, body part, or atomic skill. Here, each action token selects experts from its own features, without preassigning experts to particular robots or skills.

## Comparison with LingBot-VA: How Future Information Enters Action Generation

[LingBot-VA](</robotics/paper_reading_lingbot_va/>) and LingBot-VLA 2.0 both seek to use environmental changes for action. The distinction is that **LingBot-VA generates future video latents at inference and infers actions from visual changes; LingBot-VLA 2.0 trains queries with future-feature supervision, then lets action experts read those queries at inference.**

![Teaching illustration 1: VA predicts the future during inference; VLA 2.0 learns future supervision in query representations](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/guide01-future-information-en.png)

[View full size](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/guide01-future-information-en.png)

*Teaching illustration: solid arrows trace action generation; orange dashed arrows trace training supervision. VLA 2.0's teacher targets align the query representations actually read by the action experts, and the inference row retains the learned query path. Shared conditions such as robot state are omitted.*

| Aspect | LingBot-VA | LingBot-VLA 2.0 |
|---|---|---|
| Main foundation | Wan2.2 video-generation prior and text conditioning | Qwen3-VL vision-language understanding backbone |
| Future representation | Predicted video VAE latents condition actions; images can be decoded when needed | Queries predict depth and DINO-Video features; not an RGB video generator |
| Action learning | Two-stream flow matching for video dynamics and inverse dynamics | Action flow matching plus current/future teacher-feature alignment |
| Capacity organization | Asymmetric two-branch MoT in the paper; shared backbone in the current release | Sparse MoE action experts; released configuration has 32 routed experts, top-4 |
| Data and body coverage | About 16,000 hours of robot trajectories; 30-dimensional dual-arm canonical space | About 50,000 hours of robot and 10,000 hours of egocentric human trajectories; 55 dimensions cover head, waist, base, and dexterous hands |
| History and feedback | Blockwise generation with real observations and action history in a KV cache | Current observations, language, state, and queries condition actions; current LeRobot defaults to one observation step |
| Additional inference compute | Video-latent generation remains in the control path; partial denoising and asynchrony reduce cost in the paper | Future teachers are training-only; inference retains queries without running depth/video teachers |

Consider a failed grasp on a box lid. LingBot-VA needs real feedback to replace or correct its earlier visual prediction of a successful grasp; otherwise, the next block may continue from a false imagined state. The paper's asynchronous scheme uses FDM grounding to realign its prediction of the visual outcome of ongoing actions with real feedback. Current LeRobot only updates feedback after the queue empties and does not fully implement that asynchronous algorithm. VLA 2.0 generates another chunk from actual observations and state on the next round; its future queries provide learned predictive features rather than an explicit imagined-video rollout.

Default generation counts also do not directly compare speed. In pinned LeRobot code, an ordinary VA chunk has `4×4=16` action positions, with `20/50` video/action updates; VLA 2.0 uses 50-step chunks and 10 action-generation updates. Architecture, precision, resolution, and scheduling differ, so update counts alone do not determine speed. VA's first chunk returns only 12 steps because of its initial conditioning frame; see its integration section.

Experimental conclusions require the same care. VA's main RoboTwin table reports Easy/Hard means of `92.93%/91.55%`; the `93.52%/92.80%` in this guide's integration documentation comes from a later VLA 2.0 checkpoint release. Neither paper provides a direct comparison with fully matched models, training, and execution conditions. These four numbers cannot establish that VLA 2.0 is better in every respect. The approaches emphasize explicit environmental prediction during inference and future-perception supervision for cross-embodiment action modeling, respectively.

## Data: Making Trajectories Worth Learning and Compatible across Sources

![Paper Figure 3: robot and egocentric data filtering pipelines](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/fig03-data-pipeline.png)

Figure 3's two paths retain about 50,000 and 10,000 hours. **The 60,000 hours describe filtered training data, not the original collection.** The raw robot pool contains about 90,000 hours, and the egocentric pool about 20,000 (Section 3.1).

Robot trajectories are first checked for velocity, acceleration, and jerk—the rate of change of acceleration—to remove abrupt motion. Trajectories that are nearly stationary for over 95% of their duration are also discarded. Thresholds are embodiment-specific. URDF robot descriptions and recorded states are then projected into images for human alignment checks, removing blur, heavy occlusion, dropped frames, and misaligned cameras.

A VLM first excludes egocentric clips containing only walking, no hand-object interaction, third-person observation, or hands dominated by someone other than the operator. Existing hand trajectories are aligned in time and coordinates. For videos without trajectories, SLAM estimates camera motion and MANO hand-pose estimation recovers hand trajectories in world coordinates. Clips are filtered if valid hand frames fall below 20%, camera estimates are unstable, or hand motion violates anatomical constraints. **These videos must yield trajectory supervision before training; arbitrary human video is not directly treated as robot joint actions.**

To avoid confusing head rotation with hand motion, trajectories are stored in world coordinates. After sampling the current frame, subsequent hand trajectories are transformed into that same instant's camera frame. Equation (1) is:

$$
\mathbf p^{C_t}_{\tau}=\mathbf T_{C_t\leftarrow W}\mathbf p^W_{\tau}.
$$

Here, $\tau$ is trajectory time, $t$ the current observation time, and $W$ the world frame. $\mathbf T$ includes rotation and translation and acts on positions in homogeneous coordinates. **Teaching example:** If the camera is at world x=1 m with axes aligned to the world, and the hand is at world x=1.3 m, its current-camera coordinate is x=0.3 m. Subsequent points use the same $C_t$, rather than their individually changing camera frames.

![Teaching illustration 2: future hand trajectories are transformed into the fixed current-camera frame](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/guide02-current-camera-en.png)

[View full size](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/guide02-current-camera-en.png)

*Teaching illustration: subtract the current camera position from world coordinates, then express subsequent points in the same reference frame. The 0.1, 0.2, and 0.3 m values illustrate one-dimensional translation with aligned axes; the full transformation also includes rotation.*

Qwen3.6-27B automatically annotates language supervision, including full-task instructions and temporally continuous subtask instructions. Action labels contain 15 manipulation classes plus `transit`, `idle`, and `other`; object names are open-vocabulary. Grasping, transporting, and releasing within one interaction form one subtask to avoid excessive fragmentation. Figure 5 shows `move` and `transit` together account for about 88.7% of subtasks, while `idle` is excluded from training. A large dataset does not imply balanced skills.

## A Unified 55-Dimensional Action Space

![Paper Figure 4: shared body-part slots across embodiments](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/fig04-action-space.png)

Figure 4 uses colors to place different robots' control values into common body-part slots. Section 3.1.3 defines the following canonical vector for both states and actions:

| Part | Dimensions | Meaning |
|---|---:|---|
| Dual-arm joints | 14 | Up to 7 joint positions per arm |
| Dual-arm end-effector poses | 14 | XYZ position and quaternion, 7 dimensions per arm |
| Grippers | 2 | Gripper positions on both sides |
| Dexterous hands | 12 | Joint positions for both hands |
| Waist / head | 4 + 2 | Corresponding body joints |
| Mobility signals | 3 | Base motion; the LeRobot slot is named `base.velocity` |
| Reserved | 4 | Space for extension |

The total is `14 + 14 + 2 + 12 + 4 + 2 + 3 + 4 = 55`. Missing body parts or dimensions are padded. Joint positions and end-effector poses are different representations; reserving both does not create 28 independent physical degrees of freedom.

**Teaching example:** A single-arm dataset with 5 joints and 1 gripper might use `[q₁,…,q₅,g]`. LeRobot places the first 5 values at the start of `arm.position`, places `g` in `effector.position`, zero-pads the rest, and excludes invalid dimensions from the action loss with a mask. Outputs are mapped back to the original 6 dimensions. Corresponding mappings apply separately to states and actions and must agree with camera mappings and normalization statistics.

![Teaching illustration 3: six native action dimensions enter canonical slots, train with a mask, and map back for execution](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/guide03-action-slots-en.png)

[View full size](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/guide03-action-slots-en.png)

*Teaching illustration: five joints and one gripper occupy their respective slots, which may be separated by unused dimensions. Gray slots are masked from the action loss. Outputs must still be reduced to valid dimensions and restored to the robot's control interface.*

Unified slots allow data to be batched together, but coordinates, units, and joint meanings still require correct configuration. They provide an interface for cross-embodiment learning; vector length alone cannot guarantee adaptation-free use of a new robot.

## Core Network: Understand Scenes, Route Experts, Generate Actions

![Paper Figure 1: overall framework, MoE action experts, and dual-query distillation](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/fig01-framework.png)

Start on the left of Figure 1. Images and instructions enter the understanding branch, with current and future queries placed after image-text tokens. The action branch receives current robot state and noisy actions, reads multimodal context including the queries, and outputs continuous actions. The right side explains teacher supervision for queries.

**Implementation supplement:** The release uses a Qwen3-VL-4B vision-language backbone and a Qwen2-architecture action expert. States and actions have separate projections, and action generation also receives noise-time encoding. Attention exchanges conditioning information between the branches. The flow-matching formulation and 50-step default below come from pinned code, rather than a complete training recipe in Section 4.

### MoE: Each Token Selects a Few Experts

A **Mixture-of-Experts (MoE)** layer replaces a feed-forward network (FFN) within the action-expert Transformer with one shared expert and a set of routed experts. The shared expert handles reusable patterns; a **router** selects a few experts from each token's current features, increasing capacity without computing every expert each time. The released configuration has **32 routed experts, activates 4 per token, and retains a shared expert**.

Omitting layer and token subscripts, Equations (2), (6), and (7) can be combined as:

$$
m(u)=E^{(s)}(u)+\lambda\sum_{j\in\mathcal R(u)}g_jE_j^{(r)}(u),\qquad
g_j=\frac{s_j}{\sum_{k\in\mathcal R(u)}s_k}.
$$

$$
s_j=\operatorname{sigmoid}(u^\top e_j),\qquad
\mathcal R(u)=\operatorname{TopK}_j(s_j+b_j,K).
$$

$u$ is an action token's internal feature, $e_j$ a routing vector, $s_j$ a token-to-expert affinity score, and $b_j$ a routing correction bias for load balancing; $\lambda$ scales the routed branch. The shared expert $E^{(s)}$ and selected experts $E_j^{(r)}$ are MLPs. **Selection uses bias-adjusted scores, while mixing weights use the original scores.**

**Teaching example:** Simplify to selecting 2 of 3 experts. Original scores `[0.8, 0.6, 0.2]` and biases `[−0.4, 0, 0.3]` give selection scores `[0.4, 0.6, 0.5]`, choosing experts 2 and 3. Their mixing weights are `0.6/0.8=0.75` and `0.2/0.8=0.25`. This raises the selection chances of less-used experts while retaining their original match strengths.

![Teaching illustration 4: select experts with biased scores, then compute mixing weights from original scores](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/guide04-expert-routing-en.png)

[View full size](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/guide04-expert-routing-en.png)

*Teaching illustration: follow selection, weighting, and merging from top to bottom. Selecting 2 of 3 experts and setting the routed-branch scale to 1 are teaching simplifications. The shared expert has a separate path; the released configuration still selects 4 of 32.*

The paper's pretraining uses **auxiliary-loss-free load balancing**: decrease an expert's bias when its load exceeds the mean and increase it when below (Equation 8). Loss-free refers only to load balancing, not the absence of an action loss. **The released post-training configuration additionally enables sequence-balancing loss and router z-loss, and must be distinguished from the paper's pretraining mechanism.**

![Paper Figure 7: Dense and MoE comparison with matched active parameter counts](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/fig07-moe-scaling.png)

Figure 7 compares a dense `0.6B` model with an MoE having `1.6B` total and `0.6B` active parameters. As training proceeds, the MoE has lower training loss and GM-100 validation action error. This supports sparse capacity allocation. The horizontal axis is training steps, not measured inference latency, and 0.6B does not describe the complete model.

### Dual-Query Distillation: Future Representations as Action Conditions

A **query token** is a learnable internal token. After processing by the vision-language model, its **contextualized query state** carries information the model extracts or predicts. Queries form current and future groups, $Q_t$ and $Q_{t+T}$; this does not mean there are only two tokens in the implementation. The groups learn the current state and the possible state after the action horizon, respectively.

The teachers complement each other: **LingBot-Depth**, the depth teacher, provides geometric supervision, while **DINO-Video**, the causal video teacher, provides motion-aware visual representations. The student sees current observations and instructions; during training, teachers can also see future images to supply targets. Future images are not student inputs at inference.

![Teaching illustration 5: both query groups receive depth and video supervision; inference retains only the student action path](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/guide05-query-training-inference-en.png)

[View full size](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/guide05-query-training-inference-en.png)

*Teaching illustration: the large green box contains current and future query groups. During training, depth and video teachers jointly supply targets for both times. Orange dashed lines denote feature alignment; projections and losses are detailed below. Inference follows only the solid path in the bottom row.*

Equations (9) and (10) align both current and future representations. With $h\in\{t,t+T\}$, they can equivalently be written as:

$$
\mathcal L_{\mathrm{depth}}
=\mathbb E\sum_h\left\|\operatorname{Proj}_{\mathrm{depth}}(Q_h)-D_h\right\|_1,
\qquad
\mathcal L_{\mathrm{video}}
=\mathbb E\sum_h\left\|\operatorname{Proj}_{\mathrm{video}}(Q_h)-Z_h\right\|_F^2.
$$

$D_h$ and $Z_h$ are teacher depth and video features. Projection modules reshape student queries to match teacher features; the depth projection includes cross-attention. The first term sums absolute errors, the second squared errors. **Teaching calculation:** For simplified prediction `[0.2,0.7]` and target `[0.3,0.5]`, L1 is `0.1+0.2=0.3` and summed squared error is `0.01+0.04=0.05`, before aggregation across current/future targets and samples. Actual features are much higher-dimensional; reductions, weights, and additional alignment terms follow the code configuration.

DINO-Video starts from DINOv3, adds temporally causal attention and 3D rotary positional embeddings, and trains on 5 million video clips with 16 sampled frames per example (Section 4.2). Current-frame features depend only on current and past frames; future features use frames up to that future time. **The 16 frames are a teacher-pretraining sampling setting, not a requirement for 16 input frames at robot inference.**

After supervision, queries remain context for the action experts. Learning geometry and future changes can therefore affect action generation. This does not require producing a complete future image before planning, and the paper does not define a planner that explicitly searches multiple futures.

### Flow Matching: Turn a Noisy Action Chunk into an Executable Trajectory

**Flow matching** trains a network to predict update directions for continuous action generation. Following the time direction in the pinned author code, let $A$ be a demonstrated action chunk, $\epsilon$ Gaussian noise of the same shape, and $s$ noise time:

$$
X_s=(1-s)A+s\epsilon,\qquad V^*=\epsilon-A.
$$

Conditioned on current images, language, state, queries, and $X_s,s$, the model predicts $V_\theta$ and aligns it with $V^*$ using L1 or L2. Velocity here means a generation direction in action space, not physical base velocity; $s$ also differs from robot execution time $t$. Inference starts from noise at $s=1$ and decreases $s$ using Euler updates:

$$
X_{s+\Delta s}=X_s+\Delta s\,V_\theta,\qquad \Delta s=-1/N.
$$

**Teaching example:** For a normalized action target 0.2 and noise 1.0, the ideal direction is `1.0−0.2=0.8`. With `N=10`, the first step gives `1.0−0.1×0.8=0.92`; ten steps reach 0.2 on this ideal one-dimensional straight path. The actual model reestimates the direction each step and generates the entire `50 × 55` block together. **10 generation updates and 50 action time points are different quantities.**

## Connecting Training to Practical Use

| Stage | Available information and learning | Output or use |
|---|---|---|
| Teacher preparation | Depth model supplies geometry; DINO-Video learns temporal features through video self-distillation | Frozen teachers during VLA training |
| VLA pretraining | Filtered robot/human trajectories, language, current images, and future teacher targets | Shared image-text conditioning, action modeling, and current/future representations |
| Downstream post-training | Target-platform states/actions, camera mappings, and task demonstrations | Target-task policy and normalization statistics |
| Inference and execution | Current images, instruction, current state, and newly sampled noise | Generate chunks, unnormalize, reverse-map, and send to the robot control interface |

Future images and teachers provide additional supervision only during training. Inference retains learned queries without running teachers. LeRobot takes future supervision from the last frame of the action chunk, using index offset `chunk_size−1`; the paper expresses the horizon as $t+T$. These are a conceptual horizon and a code index, respectively, and should not mechanically introduce an extra frame.

The paper does not provide full pretraining hyperparameters or execution schedules for all platforms. Training examples in released code are post-training recipes. Pretraining GPU count, duration, and the complete freezing scope remain undisclosed. Chunk length, executed steps, and observation cadence depend on the checkpoint and control strategy.

## Experiments: Where Improvement Appears and What Remains Difficult

### Dual-Arm Manipulation: Better Means, Uneven Task Results

The paper selects **9 tasks** from GM-100 and jointly trains one policy per embodiment. It does not evaluate all of GM-100 or use the same post-trained policy on both robots. Table 5 reports both progress score and success rate. Progress gives partial credit for completed steps; success requires completing the whole task.

| Platform | GR00T N1.7 | π0.5 | LingBot-VLA 1.0 | LingBot-VLA 2.0 |
|---|---:|---:|---:|---:|
| AgileX Cobot Magic | 36.3 / 17.8 | 59.1 / 32.2 | 58.2 / 30.0 | **66.2 / 34.4** |
| Galaxea R1 Pro | 16.4 / 5.6 | 27.4 / 8.9 | 32.7 / 15.6 | **34.6 / 15.6** |

Values are progress score / success rate (%) averaged over nine tasks. On Cobot Magic, 2.0 gains `8.0 / 4.4` percentage points over 1.0. On Galaxea, progress improves while success stays at 15.6%. This section does not explicitly give per-task trial counts or confidence intervals, so small margins cannot directly be called statistically significant.

Task-level results show the limits more clearly. Cobot Magic reaches `100 / 100` for picking a keychain but only `56.8 / 0` for sorting blocks, versus π0.5's `90.4 / 60`. Galaxea's microwave bowl retrieval falls from 1.0's `97.5 / 100` to `65 / 30`. Visual grounding, grasping, and precise completion retain different bottlenecks; a better mean does not mean every task improves.

### Long-Horizon Mobile Manipulation: Relative Gains with Substantial OOD Degradation

![Paper Figure 9: Astribot S1 and Cobot Magic-ARX X5 platforms](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/fig09-mobile-platforms.png)

Figure 9 shows different combinations of bases, torsos, arms, and cameras. Mobile tasks therefore test body coordination and multistep completion: refrigerator organization has 11 subtasks and stove cleaning 7. Each model receives **15 independent trials** per task-setting pair (Section 5.3, Tables 6–7).

| Platform and task | Setting | LingBot-VLA 2.0 | π0.5 |
|---|---|---:|---:|
| Astribot S1: Sort objects into refrigerator | In-domain (ID) | 77.1 / 60.0 | 65.3 / 46.7 |
| Astribot S1: Sort objects into refrigerator | Out-of-distribution (OOD) | 37.0 / 13.3 | 30.3 / 6.7 |
| Cobot Magic-ARX X5: stove cleaning | ID | 84.3 / 66.7 | 79.9 / 60.0 |
| Cobot Magic-ARX X5: stove cleaning | OOD | 67.5 / 40.0 | 62.5 / 33.3 |

Values remain progress score / success rate (%). OOD perturbs the robot's initial position approximately ±10 cm forward, backward, left, and right from nominal positions. Refrigerator tasks additionally substitute unseen fruit and water-bottle categories; stove tasks do not use the same object substitution. The two OOD difficulties are therefore not directly equivalent.

Although 2.0 exceeds π0.5 in all four conditions, refrigerator success drops from 60.0% ID to 13.3% OOD, approximately `9/15 → 2/15`. One trial corresponds to about 6.7 percentage points. This supports relative improvement under the tested conditions while showing that long-horizon completion and generalization remain limited.

### Ablations: Targets, Action Spaces, and Normalization Matter

![Paper Figure 10: action-modeling ablations on four hardware tasks](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/fig10-action-ablations.png)

Figure 10 covers barcode scanning, scooping rice, squeezing ketchup, and microwave bowl retrieval. Each group's rightmost `Avg.` is mean success over these four tasks, distinct from Table 5's nine-task mean (Section 6.1).

- **Relative / absolute joint targets:** Relative targets average 55.0%, versus 33.7% for absolute targets. The authors suggest local motion changes are more concentrated and have lower variance, making them easier to learn. In the current implementation, relative actions reference the current state, rather than taking stepwise differences between adjacent future actions.
- **End-effector (EEF) / joint space:** Means are 56.0% and 55.0%, but task preferences differ substantially. Ketchup squeezing reaches 81.7% in end-effector space versus 41.7% in joint space; barcode scanning gives 24.0% versus 58.7%. Neither action space wins on every task.
- **Normalization:** MeanStd reaches 55.0%, MinMax 47.5%, and Q01–Q99 47.4%. The authors link differences to the effective dynamic range of target distributions. This Q01–Q99 setting does not clip values, so failures cannot be explained as clipping removing large actions.
- **Loss:** L2 reaches 55.0% and L1 46.4%, although L1 is better for ketchup squeezing. Current LeRobot defaults and the official RoboTwin post-training example use `L1_fm`, under different configurations from this four-task hardware ablation.

These ablations show that action representation, normalization, and loss affect tasks differently. Beyond model architecture, the definition of control values is an important condition for performance.

### What the Future-Prediction Evidence Supports

![Paper Figure 13: current and future depth and DINO-Video feature predictions](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-vla2/fig13-perception.png)

The left half of Figure 13 compares teacher features and predictions for current images; the right half shows future-image results. Colored DINO outputs visualize feature PCA. Similar shapes and spatial distributions suggest learned geometric and temporal cues. The colors are neither physical depth values nor generated RGB video.

Table 3 separately evaluates the teacher. DINO-Video leads on three of four LARYBench metrics, but scores 80.21 on the **Composite Human** classification benchmark, slightly below V-JEPA 2's 80.35. Teacher capability and Figure 13's qualitative results support representation learning. **The paper does not independently remove current/future queries or depth/video supervision to quantify their control benefits, so these figures alone cannot establish how much success-rate improvement distillation causes.**

## LeRobot Integration and the Limits of Paper Results

LeRobot's `lerobot/lingbot_vla_v2_base` supports fine-tuning from canonical space; `lerobot/lingbot_vla_v2_robotwin` is a RoboTwin checkpoint with a 14-dimensional dual-arm interface. Adapting a new robot requires defining state/action slots, camera names, valid dimensions, and data statistics before reverse-mapping outputs.

The documentation's RoboTwin Clean **93.52%** and Randomized **92.80%** come from upstream evaluation of a later author-released checkpoint: 50 tasks, 100 episodes per task, joint post-training on clean and randomized data, and FP32 inference. These tasks and protocols differ from the GM-100 and mobile-manipulation experiments above.

Practical use requires distinguishing two settings. The paper describes auxiliary-loss-free routing during pretraining, while released post-training examples add balancing terms. The paper's four-task study favors relative targets and L2, while LeRobot defaults disable relative actions and use `L1_fm`. Interpret these differences for the target checkpoint and task; no default is a universally optimal recipe from the paper.

## Conclusion

LingBot-VLA 2.0's most useful connection is that **filtering and reconstruction produce trustworthy trajectories, canonical slots connect heterogeneous bodies, sparse experts accommodate shared patterns and differences, and current/future queries bring perception supervision into action generation**. It moves foundation-model capabilities toward a more complete robot-control interface.

Hardware results support average improvement of the overall system under tested conditions, while retaining low full-task success, regressions on some tasks, and substantial OOD degradation. Unified representations do not make arbitrary embodiments plug-and-play, and similar future features do not establish reliable general planning. Effectiveness still depends on data alignment, action definitions, and target-task evaluation.

</div>
