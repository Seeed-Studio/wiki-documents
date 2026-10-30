---
description: "How to run WALL-OSS on reBot Arm & SO-ARM101: a paper deep-dive into action-semantic pre-training, continuous-action flow matching, Uni-CoT and embodied question answering and control."
title: "How to Run WALL-OSS on reBot Arm & SO-ARM101"
hide_title: true
keywords:
  - Paper Deep-Dive
  - wall_oss
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
slug: /robotics/paper_reading_wall_oss
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/robotics/paper_reading_wall_oss/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-wall_oss-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-wall_oss-title">How to Run WALL-OSS on reBot Arm & SO-ARM101</h1>
  <p className="paper-reading-lead">Igniting VLMs toward the Embodied Space</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Action semantics</li>
    <li>Continuous control</li>
    <li>Uni-CoT</li>
    <li>Embodied QA</li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2509.11766" target="_blank" rel="noopener noreferrer" aria-label="Read the WALL-OSS paper on arXiv">
    <span className="paper-reading-source-tag">arXiv</span>
    <span>Read the paper</span>
    <span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

## Prerequisites: Connecting Goals to Execution
### From VLM to VLA
**Explanation:** A VLM interprets images and text; a VLA additionally generates numerical controls. This paper learns the mapping from demonstrations, visual QA, and process annotations rather than sending a verbal answer directly to motors.

The letter-block task requires recognizing the goal, choosing letter order, and locating and placing blocks. Answering “spell FIVE” completes only the understanding part.

| Concept | Intuition | Example in this paper |
|---|---|---|
| Observation | External information about the scene | Ego-view and arm-mounted camera images. |
| Robot state | Numerical configuration of the robot | State entering the continuous branch in Figure 3; fields and dimensions are not reported. |
| Action | Numerical targets for the control interface | A T-step, d-dimensional trajectory; positions standardized to meters and angles to radians across sources. |
| Visual question answering (VQA) | Answer text questions from images | Locate a block, describe the scene, or predict a subtask. |
| Chain of thought (CoT) | Explicit intermediate reasoning | Goal is FIVE; F and I are placed; V is next. |

**Caution:** Figure 3's state input must not be omitted because the prose abbreviates conditioning as vision and instruction. Platforms include single-arm, bimanual, mobile, and wheeled humanoids, so they cannot all share one assumed DoF count, camera count, or action specification.

### Direct Actions and Cross-Level Decisions
A direct policy maps images and instructions to actions; a hierarchical pipeline uses a separate planner before a controller. WALL-OSS learns “instruction → reasoning → subtask → continuous actions” in one model while allowing unnecessary intermediate levels to be skipped.

```text
Direct: image + “spell FIVE” → action sequence
Full: image + instruction → goal/progress reasoning → “place V third” → actions

Illustrative timeline:
First decision: empty board → place F
Later decision: F is present → place I
Next decision: F and I are present → place V
```

**Explanation:** Subtasks clarify the current goal and can reduce repeated actions or stage confusion. Correct reasoning still requires accurate low-level execution. This timeline explains progress, not a reported fixed replanning schedule.

Discrete action modeling (DAM) encodes numerical trajectories as tokens; continuous action modeling (CAM) generates numerical trajectories directly. This is a representation/objective distinction, not another name for single-step versus multi-step control.

### Training, Inference, and Evaluation
| Stage | Operation | Outcome |
|---|---|---|
| Training | Use visual QA, demonstrated actions, and limited reasoning/subtask annotations to optimize text and action objectives. | Parameters; losses measure supervision fit. |
| Inference | Read images, instructions, and state for the continuous path; generate optional reasoning, subtasks, and actions. | Trajectories submitted to control. |
| Evaluation | Execute specified tasks and manually assess embodied VQA. | QA quality, progress, success, or instruction accuracy, interpreted separately. |

Complete control rates, inference latency, and execution scheduling are not reported. “High-frequency actions” or “asynchronous control” do not establish real-time performance, and loss is not task success.

---

## Abstract: Translation and Commentary
### Translation
Despite language and vision progress, VLM spatial and embodied understanding remains limited. Moving toward physical interaction exposes mismatches in modalities, pre-training distributions, and objectives, making action understanding and generation a major challenge toward general intelligence.

We introduce WALL-OSS, an end-to-end embodied foundation model that uses large-scale multimodal pre-training for (1) vision-language understanding sensitive to embodied features, (2) strong language–action association, and (3) robust manipulation. A tightly coupled architecture and multi-strategy training curriculum support Unified Cross-Level CoT, unifying instruction reasoning, subgoal decomposition, and fine-grained action synthesis in a single differentiable framework.

The authors report strong instruction following, reasoning, and long-horizon manipulation relative to baselines, presenting a scalable route from VLMs to embodied foundation models.

### Commentary
![WALL-OSS Paper Deep-Dive: Commentary (image-00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss/image-00-en.png)

---

## Introduction and Related Work: Three Mismatches
### The Introduction's Eight Main Paragraphs
These correspond to pages 1–3. Three paragraphs have Gap subheadings; paragraph 7 spans pages 2–3. Figure 1's caption is not counted as introduction prose.

**Paragraph 1: the destination.** Language/vision models understand multimodal inputs but lack physical feedback and executable actions, motivating action understanding and generation.

**Paragraph 2: why transfer from VLMs?** Image-text data is abundant, paired robot data scarce and heterogeneous. Pre-trained priors motivate transfer rather than training from scratch, but do not themselves prove effectiveness.

**Paragraph 3: the transfer dilemma.** Direct action-head fine-tuning may drift pre-trained parameters; strong isolation may weaken semantic–control coupling. This motivates three gaps.

**Paragraph 4: modality and data-scale gap.** Text and compressed vision are extensively aligned, while actions are continuous spatiotemporal signals and high-level instructions omit subtasks. The discussion of planner/controller errors and 3D approaches motivates the work rather than experimentally rejecting every alternative.

**Paragraph 5: distribution gap.** Ego views, fisheye images, and self-occlusion differ from internet imagery. Spatial grounding and progress assessment need embodied supervision. Figure 1 illustrates this, not a large-scale benchmark.

**Paragraph 6: objective gap.** Text uses discrete next-token prediction; continuous actions suit diffusion or flow matching. Simply joining objectives may not tightly link semantics and control, motivating discrete-to-continuous training.

**Paragraph 7: the proposed response.** Coupled experts and staged training address objectives; embodied QA and discrete priors address distributions; unified CoT links semantics to fine actions across levels.

**Paragraph 8: contributions and open resources.** The paper does not give a fixed, numbered three-item contribution list. It summarizes architecture coupling and curriculum design; experiments on instruction following, compositional reasoning, and long-horizon control; and a broader route across the semantic–sensorimotor gap, while announcing open training code and checkpoints. Phrases such as “state of the art” and “theoretical insights” are the authors' claims; the evidence is assessed through specific experiments and published formal descriptions.

### Three Related-Work Areas and How This Work Differs
- **Language, vision, and manipulation foundations:** Existing VLAs use action tokens or continuous heads. WALL-OSS first learns discrete action priors in the language-output space, then optimizes flow matching with static routing. Its broad grouping of ACT with discrete methods must not be read as making ACT a FAST/BPE tokenizer.

- **Multimodal/robot co-training:** Earlier methods use images, video, and robot data to retain understanding and improve transfer. Here, embodied supervision unifies instructions, reasoning, subtasks, and actions, with quotas and a staged curriculum to limit drift.

- **Reasoning and decomposition:** Separate planners simplify training but can have interface and cumulative errors. Uni-CoT learns cross-level mappings in one model with optional intermediate reasoning. Universal superiority to pipelines still requires evidence.

---

## Core Method: Action Semantics before Continuous Control
### Shared Attention, Separate Feature Processing
**Problem:** Preserving visual-language knowledge while tightly conditioning actions involves tradeoffs between fully shared and independent parameters. **Intuition:** Exchange information through shared attention, then process feature categories with separate feed-forward networks.

![WALL-OSS Paper Deep-Dive: 4.1 Shared Attention, Separate Feature Processing (fig02-architecture-paradigms)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss/fig02-architecture-paradigms.png)

**Paper:** Qwen2.5-VL-3B is the backbone. A mixture-of-experts design statically routes visual-language features to a vision-language FFN and action features to an action FFN. Self-attention exchanges cross-modal information; FFNs specialize processing.

![WALL-OSS Paper Deep-Dive: 4.1 Shared Attention, Separate Feature Processing (fig03-wall-oss-architecture)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss/fig03-wall-oss-architecture.png)

| Path | Input and processing | Output and shape |
|---|---|---|
| Images/language | Ego/arm views and instruction → encoding → shared attention and VL FFN | Features h; token count and hidden width are not specified. |
| Text | Visual-language conditions → LM head | Reasoning/subtask tokens with vocabulary probabilities. |
| Discrete actions | Demonstrations → FAST; predict subsequent tokens from prefixes | K action tokens; K differs from trajectory steps T. |
| Continuous actions | Image-text features, robot state, same-shaped noise, progress → attention → action FFN and flow head | T × d velocity field; integration gives a same-shaped trajectory. |

**Illustrative static-routing formalization, not an additional paper algorithm:**

![WALL-OSS Paper Deep-Dive: 4.1 Shared Attention, Separate Feature Processing (image-03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss/image-03-en.png)

qᵢ is the post-attention feature at position i, of width D. Both branches need compatible downstream representations, but widths/projections are not reported. i is a sequence index and D a unitless feature count. Unlike learned softmax/top-k gating, the branch is chosen by feature category, not a newly estimated expert probability.

**Minimal example:** In `[image, image, instruction, action, action]`, route the first three positions to the VL FFN and the last two to the action FFN, while shared attention still connects them. This does not fill in the unspecified state encoding or routing.

**Dimension boundary:** An illustrative T=3, d=2 chunk contains six values, or shape 4 × 3 × 2 for B=4. These counts are not frequencies. Figure 3's `(a₁,…,a₂₀)` is schematic, not confirmation of a universal 20-step horizon. Full action interfaces, padding width, and total parameters are unspecified; “3B” names the backbone, not the whole model.

### Inspiration: Discrete Actions and Embodied QA
**Problem:** The VLM lacks robot-scene knowledge and text–trajectory correspondences. **Intuition:** Use familiar sequence prediction for both embodied QA and discrete demonstration codes, creating a common learning interface.

**Page-5 equations, with symbols renamed to avoid collisions:**

![WALL-OSS Paper Deep-Dive: 4.2 Inspiration: Discrete Actions and Embodied QA (image-02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss/image-02.png)

A∈ℝᵀˣᵈ is the demonstrated trajectory; C=(V,L) contains vision and instruction. yⱼ is text token j, zₖ action token k, and `<j`/`<k` the existing prefixes. θ parameterizes the VL path; pθ is next-token probability. λᵥ and λᴅ are unitless weights. K is encoded length, not a fixed reported value.

FAST is an efficient action tokenization method. The diagram shows discrete cosine transform (DCT) → quantization → byte-pair encoding (BPE). **Explanation:** Transform trajectories from the time domain to frequency coefficients, then quantize and compress them into tokens; this does not simply assign a word to each joint angle. The paper does not report the FAST configuration, quantization precision, or vocabulary size, so defaults from other papers must not be inserted.

**Minimal example:** If correct text/action tokens receive probabilities 0.8 and 0.5, with unit weights, their loss is `−ln(0.8)−ln(0.5)≈0.916`. This rewards correct sequences rather than directly measuring placement error.

Ground-truth QA and FAST sequences supervise the reused VLM path, which can output reasoning, subtasks, and discrete actions at this stage. Discrete supervision builds priors; final deployment moves to continuous generation and does not necessarily predict FAST tokens first.

**Caution:** The text mentions masked modeling, image/video contrastive learning, instruction following, and temporal/causal modeling, but its equation explicitly shows only text and discrete-action terms. Other losses, weights, and schedules are not fully specified.

### Integration: Generate Continuous Actions from Noise
**Problem:** Discrete priors align semantics but execution needs continuous values. **Intuition:** Learn a direction along an action-noising path, then integrate backward from noise. This is flow matching.

**Page-5 equations, renaming progress τ while preserving direction:**

![WALL-OSS Paper Deep-Dive: 4.3 Integration: Generate Continuous Actions from Noise (image-01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss/image-01.png)

A is clean action, ε same-shaped Gaussian noise, and A^τ the noisy T × d array. h is VL encoding, φ continuous-path parameters, and vφ the field. τ is unitless generation progress, ρ the schedule, w a weighting function, and λᴄ the loss weight. Expectations cover data, noise, and time. Field “velocity” is generation-space direction, not automatically motor velocity.

**Minimal example:** In normalized units, A=0.6, ε=−0.2, and illustrative linear ρ(τ)=τ at τ=0.5 give A^τ=0.2 and target `ε−A=−0.8`. Predicting −0.7 gives squared error 0.01 with unit weights. Physical units require the dataset's decoding rules.

**Direction matters:** In this linear example, τ=0 is clean and τ=1 is noise. Generate by integrating from one toward zero, not by executing the noising direction on the robot.

**Illustrative reverse Euler update, not a specified paper solver:**

![WALL-OSS Paper Deep-Dive: 4.3 Integration: Generate Continuous Actions from Noise (image-04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss/image-04.png)

Δτ is unitless. Starting at 0.2 with direction −0.8 and Δτ=−0.1 gives 0.28, closer to 0.6. The complete array updates together; one internal update is not one robot step.

**Caution:** A general nonlinear ρ would introduce ρ′(τ) in the path derivative, while the paper directly writes ε−A. The example is restricted to a linear path; no unpublished schedule, time distribution, solver, or iteration count is inferred. The equation also abbreviates away Figure 3's robot state, which does not mean state is absent.

### Two Main Stages, with Two Integration Phases
![WALL-OSS Paper Deep-Dive: 4.4 Two Main Stages, with Two Integration Phases (fig04-training-inference)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss/fig04-training-inference.png)

**Paper:** After existing VLM pre-training, WALL-OSS uses Inspiration and Integration. Integration has freeze and unfreeze phases; the original backbone pre-training is not a third newly designed stage.

| Stage | Supervision/output | Updates | Purpose |
|---|---|---|---|
| Inspiration | Embodied VQA, text/subtasks/CoT, FAST tokens | Reuse/train the VLM path; full freezing details unspecified. | Robot-scene understanding and action semantics. |
| Integration phase 1 | Continuous flow matching | Freeze VLM and train continuous action path/flow head; exact boundaries unspecified. | Let the new branch use established priors. |
| Integration phase 2 | Continuous flow matching and joint optimization | Unfreeze VLM; update θ and φ. | Further align vision, language, and actions. |

**Example:** Phase-1 action error updates only the continuous branch; in phase 2 it can also update the backbone. Freezing is not permanent isolation, and unfreezing does not discard prior learning.

The stages change representation, objective, and trainable parameters rather than splice independent robot models. Section 4 describes source mixing and quotas; Section 5 reports downstream action/VQA mixtures. v1 does not give complete recipes, steps, or objective weights, so Figure 4 alone cannot reproduce training.

### Uni-CoT: Full Reasoning or Direct Execution
**Problem:** Similar images can represent different progress, while separate planners can disconnect from control. **Intuition:** Learn cross-level relationships in one model and include samples without intermediate reasoning, supporting both complex and direct behavior.

![WALL-OSS Paper Deep-Dive: 4.5 Uni-CoT: Full Reasoning or Direct Execution (fig06c-block-spell)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss/fig06c-block-spell.png)

**Page-6 objective, with symbols renamed to avoid noise collisions:**

![WALL-OSS Paper Deep-Dive: 4.5 Uni-CoT: Full Reasoning or Direct Execution (image-05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss/image-05.png)

Θ contains unified model parameters; G predicts actions and Q embodied answers. V is vision, L instruction, R optional reasoning, A∈ℝᵀˣᵈ target actions, Y QA labels, and λ a unitless balance. Action loss follows the stage's objective; VQA loss evaluates answers. G's internal noise/time conditioning is abstracted away here.

The authors call this path-drop: train both full paths with reasoning and direct paths without R. **Example:** one “spell FIVE” sample includes “F and I are present, V next”; another supplies only images and the task. Action loss 0.2 plus QA loss 0.4 weighted by λ=0.5 gives 0.4. Drop rate, sampling algorithm, and inference selection rules are not reported.

Long-horizon fine-tuning generates subtasks before actions; color-word and spelling tasks also use CoT. The paper describes interleaving but not full inference-call timing, asynchronous scheduling, or costs. Optional reasoning does not establish a published difficulty classifier.

**Caution:** End-to-end shared training is an architectural claim. The combined loss does not show how action gradients pass through sampled discrete text, so it does not prove differentiation through every generated word. It establishes shared multi-objective learning, not all gradient details.

### Complete Training and Inference
```text
Training:
  Images + instructions + QA/process labels → VL path → text, reasoning, subtask supervision
  Inspiration: demonstrations → FAST → discrete next-token loss
  Integration: actions + noise + progress → noisy actions
               VL context + state + noisy actions → continuous path → field loss
               freeze VLM first, then unfreeze for joint updates
  Uni-CoT: learn cross-level mappings with and without intermediate reasoning

Inference:
  Current images + task → VL representation
  Generate or skip CoT/subtasks according to the task path; use generated text as context
  VL context + state + fresh noise → continuous field → integration → trajectory
  Decode to the platform interface and execute; later observations condition the next decision
```

**Explanation:** Architecture connects information; the discrete stage establishes priors; the continuous stage generates values; Uni-CoT links goals and progress. Execution lengths and overlap blending are unspecified. ACT temporal ensembling and CVAEs must not be added to WALL-OSS's mechanism.

---

## Data and Platforms: Understanding and Execution
### Three Sources
![WALL-OSS Paper Deep-Dive: 5.1 Three Sources (fig05-data-composition)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss/fig05-data-composition.png)

| Source | Figure 5 share | Content and role |
|---|---|---|
| Internal robot actions | 57.5% | Everyday manipulation, complex trajectories, and process labels, including kitchen, clothing/storage, mobile pick-and-place, and assembly. |
| Open robot actions | 33.1% | DROID, BC-Z, BridgeData V2, and others; varied platforms, scenes, and styles. Full list in Table 1. |
| Multimodal VQA | 9.4% | General QA retains image-text skills; embodied QA adds space, time, progress, and affordances. |

**Caution:** Shares sum to 100%, but their denominator—hours, samples, or mixing weights—is unclear, so hours are not inferred. Section 4 first says over 10,000 hours, while 4.4 says over tens of thousands. v1 gives no unified breakdown to resolve this.

Internal data includes short explicit-instruction tasks emphasizing precision/generalization and long tasks with implicit steps requiring decomposition and progress tracking. Annotation combines models and human checks. Quality controls include synchronized timestamps, outlier/idle/low-quality filtering, rule/manual review, and lighting/background augmentation.

Embodied VQA covers planning, spatial/temporal reasoning, attributes, cognition, and affordances. Labels include boxes, points, optional masks, and natural-language QA. `<point>[x,y]</point>` is a 2D image location, not a 3D grasp target; coordinate normalization is not uniformly specified.

### Cross-Platform Alignment and Missing Details
**Paper:** Sources include tabletop arms, mobile mounts, wheeled bimanual and humanoid robots with ego/external/arm views. Positions use meters and angles radians. A maximum-DoF template with masks/placeholders handles missing joints, while camera calibration, timestamps, channels, and action grids are aligned.

**Explanation:** A common interface does not make DoF identical or policies interchangeable without adaptation. Padding must not be executed as physical controls.

v1 does not report complete platform models, camera counts/resolutions, control/collection rates, unified dimensions, task durations, GPU configurations, batch size, learning rates, or stage steps. Hardware photos cannot supply those specifications.

The authors describe stratified validation/test splits by scene, object, task, and embodiment, with oversampling of long/rare skills and quota mixtures. Full counts, sampling temperatures, and deduplication are unpublished, limiting exact reproduction.

---

## Experiments: Understanding, Reasoning, and Actions
### Tasks, Fine-Tuning, and Evaluation Conditions
![WALL-OSS Paper Deep-Dive: 6.1 Tasks, Fine-Tuning, and Evaluation Conditions (fig06a-single-instruction-tasks)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss/fig06a-single-instruction-tasks.png)

| Task | Main test | Demonstrations in 5.1.1 | Pre-training / fine-tuning boundary |
|---|---|---|---|
| Instruction-Pick-Place | Select object and destination from language. | No task fine-tuning | Zero-shot task evaluation after robot pre-training. |
| Place-by-Color | Direct color or color-word matching. | 500 episodes | Stated absent from pre-training. |
| Block-Spell | Recognize/compute a word and place letters. | 1,600 episodes | Task fine-tuning, not zero-shot spelling. |
| Set-Table | Arrange plates, knives, and forks for two. | 1,500 episodes | Stated absent from pre-training, then fine-tuned. |
| Tidy-Bedroom | Collect clothing and arrange pillows. | 1,000 episodes | Stated absent from pre-training, then fine-tuned. |
| Collect-Waste | Move to a bin, pick up, and discard waste. | 900 episodes | Results section instead says 1,000 demonstrations. |
| Pick-Place-Cup | Adjust cup/plate configurations and place them. | 500 episodes | Inverted cups, handle directions, and plate-position variation. |

**Caution:** Section 5.1 says six manipulation tasks, while 5.1.1 and Figure 6 list seven. Figure 7 summarizes six fine-tuned tasks; zero-shot instruction following is separate in the text. Unseen in pre-training is not unseen in fine-tuning, and conflicting waste counts remain unresolved.

Baselines are π0 and Diffusion Policy (DP). Flat training maps high-level instructions directly to actions; GPT4-Subtask trains with annotated subtasks and calls GPT-4 at inference. Flat Block-Spell progress is near zero, so Figure 7 uses its GPT-subtask baselines. Bars do not all share identical instruction settings.

The authors describe equal task supervision, but WALL-OSS additionally co-trains VQA: non-subtask QA sampling is written 1:15 and subtasks 1:100. Units and ratio order are insufficiently explained to infer frame proportions. Equal task supervision does not imply identical overall data or compute.

An independent third party evaluates blindly using environment, starting-state, and scoring documents; VQA is manually judged. Trial counts, full scoring rules, error bars, and confidence intervals are not fully published. Blind testing reduces bias but does not replace statistics.

### Embodied VQA: Largest Gains in Grounding
**Table 2, page 11:**

| Category | Qwen2.5-VL-3B | WALL-OSS | Gain in percentage points |
|---|---|---|---|
| Object grounding | 46.1% | 91.6% | +45.5 |
| Scene captioning | 57.7% | 87.6% | +29.9 |
| Action planning | 59.8% | 69.0% | +9.2 |

**Interpretation:** The largest improvements are in locating objects and describing robot scenes. Planning improves less; both models can misjudge progress. The table supports embodied understanding, not complete retention of general QA or 91.6% grasping success.

### Zero-Shot Instructions: Progress Is Not Success Rate
**Pages 11–12:** Without task fine-tuning, Instruction-Pick-Place averages **85%** progress for seen object/container instructions and **61%** for new objects. The authors attribute many failures to small pose errors rather than selecting the wrong semantic target.

**Caution:** Zero-shot excludes task-specific fine-tuning, not robot/multimodal pre-training. These are mean progress scores, not full-success fractions. Figure 7 does not show these two groups separately, despite the text's citation, so the numbers are attributed to prose.

### Precision and Long Horizons: Task-Dependent Gains
![WALL-OSS Paper Deep-Dive: 6.4 Precision and Long Horizons: Task-Dependent Gains (fig07-id-ood-results)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss/fig07-id-ood-results.png)

**Figure interpretation:** WALL-OSS leads the shown baselines on spelling, table setting, and bedroom tidying. Its ID waste bar and π0 both reach the top, while π0 is higher on cup placement. Exact bar values are not printed and are not inferred visually.

**Page-12 success-rate reports:** ID waste collection is 100% for WALL-OSS and π0, 80% for DP; cup placement exceeds 90% for both pre-trained models and is below 20% for DP. In a new waste scene, DP reportedly falls from 80% to zero, while both pre-trained models remain above 80%.

**Caution:** Prose success rates and Figure 7 task progress are differently labeled and not directly interchangeable. DP ID waste progress and WALL-OSS OOD waste progress look roughly three-quarters in the figure. v1 does not explain the relationship, so no combined average success is inferred.

![WALL-OSS Paper Deep-Dive: 6.4 Precision and Long Horizons: Task-Dependent Gains (fig06b-long-horizon-tasks)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss/fig06b-long-horizon-tasks.png)

**Paper:** Table setting and bedroom tidying exceed five stages, with average durations over three and five minutes. Fine-tuning combines actions/subtasks, with only 1% of long-task training data subtask-labeled; inference generates subtasks before acting. Baselines repeat utensils, miss the other table setting, or loop when clothes leave view.

**Interpretation:** These observations support explicit progress and subtasks. Three/five minutes are task durations, not inference latency. Pre-trained models beating DP supports pre-training in this setup, but initialization, size, and architecture also differ.

### Reasoning and Co-Training: Fine-Grained Instructions
CoT adds little for direct visual color matching, but helps when placing a ball on paper bearing a color word. Block-Spell first recognizes or computes an answer, then places letters. Page 13 says 1% of training frames supervise CoT/sub-instructions; this differs in unit from the long-task “1% of training data,” and is not rewritten as 1% of episodes.

**Table 3, page 14: accuracy selecting the instructed letter/number block.**

| Block type | WALL-OSS multimodal co-training | WALL-OSS action-only | π0 action-only |
|---|---|---|---|
| Letters | 87% | 26% | 9% |
| Numbers | 95% | 80% | 35% |

Multimodal fine-tuning combines actions, CoT/subtasks, and 2D grounding. Action-only WALL-OSS trains controls from subtasks. This changes downstream fine-tuning; it does not remove all multimodal pre-training.

**Interpretation:** Within WALL-OSS, letter accuracy gains `87−26=61` points and number accuracy `95−80=15`, supporting continued multimodal supervision for precise targets. Multiple objectives change together, so grounding, CoT, and subtasks are not individually isolated. The measure is target-selection accuracy, not whole-word spelling success.

---

## Conclusions and Boundaries
**Main lesson:** Instead of attaching an action head as an afterthought, add embodied understanding, build semantic priors through discrete-to-continuous training, and connect goals, reasoning, progress, and execution in one model. Grounding and fine-target selection have clear quantitative support; reasoning and long tasks also improve over the compared baselines.

**Keep these boundaries:**

- **Not uniformly best at precision.** Section 6.1 acknowledges that π0 remains better at fine manipulation; overall claims must not become first place on every metric.

- **Not every component is isolated.** Table 3 supports the combined multimodal fine-tuning effect, but v1 lacks complete independent ablations for Inspiration, static routing, and path-drop.

- **Limited statistics and reproduction details.** Task counts, durations, demonstration counts, and metrics vary; trial counts and confidence intervals are incomplete. Those discrepancies are identified rather than guessed away.

- **Real-time and broad transfer need validation.** Asynchrony and cross-platform training are described without complete latency, rate, interfaces, or transfer tests, so specific hardware timing and adaptation-free transfer are not guaranteed.

- **3D and video remain future directions.** Predicted frames, 3D perception, and world modeling are proposed, not demonstrated as current WALL-OSS components or a solution to general Physical AI.

No product-specific transfer configuration is added. Another robot needs its own camera/state interface, units, dimensions, control cycle, and safe execution setup, separate from the paper's results.

</div>
