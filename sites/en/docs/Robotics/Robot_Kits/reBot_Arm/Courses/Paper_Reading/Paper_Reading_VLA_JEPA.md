---
description: "A close reading of VLA-JEPA: latent actions, video supervision, robot control, training and inference, and robustness evidence."
title: "VLA-JEPA: Learning Latent Actions from Video"
hide_title: true
keywords:
  - Paper Deep-Dive
  - VLA-JEPA
  - JEPA
  - World Model
  - Human Video
  - Vision-Language-Action Model
  - LeRobot
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/fig02-training-framework.png
slug: /robotics/paper_reading_vla_jepa
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-04
createdAt: '2026-11-03'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/robotics/paper_reading_vla_jepa/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page vla-jepa-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-vla-jepa-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-vla-jepa-title">VLA-JEPA: Learning Latent Actions from Video</h1>
  <p className="paper-reading-lead">VLA-JEPA: Enhancing Vision-Language-Action Model with Latent World Model</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Human-video pretraining</li>
    <li>Latent world model</li>
    <li>Flow-matching action head</li>
    <li>Perturbation robustness</li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2602.10098v2" target="_blank" rel="noopener noreferrer" aria-label="Read the VLA-JEPA paper on arXiv">
    <span className="paper-reading-source-tag">arXiv</span>
    <span>Read the paper</span>
    <span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Key LeRobot Commands">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/main/en/vla_jepa" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="Hugging Face" width="24" height="24" /> Hugging Face · LeRobot VLA-JEPA Documentation ↗</a>

**Key LeRobot Commands**

These are LeRobot main argument fragments for `lerobot-train`, used alongside dataset, output-directory and other settings. See the documentation above for installation requirements.

- `--policy.freeze_qwen=true`: Freeze Qwen and train only the action head; this implementation also disables world-model training.
- `--policy.enable_world_model=false`: Disable the world model and JEPA loss; Qwen and the action head remain trainable when Qwen is not frozen.
- `--policy.reinit_modules`: For cross-embodiment fine-tuning, supply a list of action/state projection prefixes allowed to be reinitialized when dimensions change.

</aside>

Human videos show how to place an apple in a bowl, but contain no control commands for a particular robot. **VLA-JEPA first learns how objects change from video, then learns how to act from robot demonstrations.** A world model connects the two learning signals.

## Prerequisites

Three quantities matter. Consider placing an apple in a bowl:

- **World-state features** $s_i$ describe the scene and object state, as extracted by a video encoder.
- **Latent actions** $z_i$ are hidden features that help predict state changes, such as the apple moving from the table to above the bowl. They have no predefined physical units.
- **Robot actions** $a_t$ contain values sent to the controller, such as end-effector translation, rotation, and gripper commands.

![Teaching illustration: state features, latent actions, and physical control values](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/guide03-state-latent-control-en.png)

JEPA (Joint-Embedding Predictive Architecture) predicts future features. It compares predicted features with features encoded from actual future images, without reconstructing every pixel. VLA-JEPA uses this objective to teach a vision-language model (VLM) manipulation-related changes.

## Abstract

**Paraphrase:** Internet video can help address the shortage of robot data for vision-language-action models (VLAs). Existing latent-action methods, however, can learn appearance changes, irrelevant motion, or shortcuts from future images. VLA-JEPA generates latent actions from current observations and language, then predicts future state features. Future images provide supervision without directly entering the VLM that generates latent actions. Joint pretraining on video and robot data, followed by downstream adaptation, yields competitive simulation and hardware results.

**Reading note:** The absence of action labels applies to human videos. Videos teach changes; robot demonstrations still teach control values. The ablations show clearer benefits for perturbation robustness than consistent improvement across all tasks.

## Introduction and Related Work

**Start with the data problem.** Robot demonstrations are expensive, while human videos are abundant. The authors therefore seek to transfer video experience to robot learning (Section 1 of the paper). More video alone is insufficient: pixel prediction can focus on texture, lighting, and camera motion rather than changes useful for control.

**Then examine supervision.** If a latent-action extractor sees current and future images, it may encode the future answer. Extracting latent actions before separately aligning a policy also adds training stages. The authors change both the prediction target and the information source: predict future features, and generate latent actions only from initial observations.

Section 2 discusses two main groups: VLAs such as the RT series that rely on action-labeled demonstrations, and methods such as LAPA, UniVLA, and MotoGPT that extract latent actions from video before connecting them to robot control. **VLA-JEPA instead lets state-prediction error directly train the VLM that generates latent actions, while robot-action supervision trains the same backbone.** This forms a unified pretraining process, still followed by downstream fine-tuning.

## How VLA-JEPA Learns Actions from Video

### The Overall Network

![Figure 2: human-video and robot-data training paths](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/fig02-training-framework.png)

Each of the four modules has a role: **Qwen3-VL-2B** reads current images and instructions to produce latent actions and action conditioning; frozen **V-JEPA2** encodes video into state features; the **world model** predicts subsequent states; and the **action head** generates robot-control sequences.

The upper path trains state prediction on human video. The lower path trains state prediction and action generation on robot data. Both share the VLM, allowing video experience to influence later control.

### Training Latent Actions through State Prediction

A fixed encoder $F$ extracts features from each view and concatenates them along the feature dimension (Equation (1) in the paper):

$$
s_i=\mathop{\|}_{v=1}^{V}F(I_{v,t_i}).
$$

$I_{v,t_i}$ is the image from view $v$ at temporal position $t_i$. In the interface of Table 5, two $256\times1024$ feature arrays become $256\times2048$: the visual-token count remains unchanged, and each token combines two views.

Learnable latent-action queries follow the initial images and language. Their VLM features become $z_i$. The world model $P_\theta$ predicts the next state from historical states and latent actions. Equations (2)–(3) can be shortened to:

$$
z_i=\mathrm{VLM}_\theta(\langle\mathrm{latent}_i\rangle\mid I_{1:V,t_0},\ell),
\qquad
\hat s_{i+1}=P_\theta(s_{0:i},z_{0:i}).
$$

$\ell$ is the instruction, and $\langle\mathrm{latent}_i\rangle$ is a learnable query token. All latent actions use the same initial observations rather than their corresponding future images. Training uses teacher forcing: predicting $s_2$ may use true history $s_0,s_1$, but predicting $s_1$ cannot use $s_1$ as an input.

![Teaching illustration: supervising current latent actions with future states](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/guide01-video-supervision-en.png)

**The crucial connection is the gradient path.** Future images pass through the fixed encoder to form targets. Prediction error propagates through the world model into the VLM, encouraging latent actions to carry information useful for predicting changes. To predict an apple leaving the table, for example, the latent action must help explain that transition without a manual semantic label for every hidden feature.

The author implementation uses mean L1 error. The following expands that implemented loss; Equation (5) itself does not specify the error norm:

$$
\mathcal L_{\mathrm{WM}}=\frac1M\sum_{m=1}^{M}|\hat S_m-\operatorname{sg}(S_m)|.
$$

$S$ collects target features, $M$ counts elements, and $\operatorname{sg}$ denotes stop-gradient; the encoder stays fixed. In a teaching example, target $[0.2,-0.4]$ and prediction $[0.5,-0.2]$ give mean error $(0.3+0.2)/2=0.25$.

This restricts future-image input to the VLM. The predictor’s temporal mask alone does not guarantee strict causality of the video encoder’s historical features.

### From Latent Actions to Robot Actions

State features still need a connection to control. A second set of action queries follows the latent-action queries, reading preceding images, language, and latent actions to form conditioning $z_a$ (Equation (6)). A DiT (Diffusion Transformer) action head then generates a continuous action sequence.

![Teaching illustration: conditioning the generation of a complete action chunk](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/guide02-action-generation-en.png)

The head uses **conditional flow matching**. It mixes a demonstrated action chunk $A$ with same-shaped Gaussian noise $\epsilon$, then learns the direction from noise toward actions. Equations (7)–(8) can be written as:

$$
X_\tau=(1-\tau)\epsilon+\tau A,
\qquad
\mathcal L_{\mathrm{FM}}=\mathbb E\left[\|v_\theta(X_\tau,\tau\mid z_a)-(A-\epsilon)\|_2^2\right].
$$

$\tau$ is generation progress, distinct from robot time. $v_\theta$ returns updates with the action chunk's shape. For one element, $A=0.6$, $\epsilon=-0.2$, and $\tau=0.5$ give an intermediate value of 0.2 and target direction of 0.8. Predicting 0.5 gives squared error 0.09.

Inference starts from fresh noise and follows predicted directions. The pinned implementation uses Euler updates:

$$
X_{\tau+\Delta\tau}=X_\tau+\Delta\tau\,v_\theta(X_\tau,\tau\mid z_a).
$$

Four updates generate a $7\times7$ action chunk: seven control steps with seven values each. The four updates occur inside the action head, rather than representing four robot steps. The implementation also supplies proprioceptive state and generation progress to the head, which reads $z_a$ through cross-attention. The paper uses uniform time sampling, while the pinned implementation uses Beta sampling, a training-configuration difference.

## Training and Inference

Joint pretraining uses approximately **220,000 Something-Something-v2 human videos** and **76,000 DROID robot trajectories**. Human videos provide images and language for state prediction. Robot data additionally supplies action labels for joint optimization (Equation (9)):

$$
\mathcal L_{\mathrm{robot}}=\mathcal L_{\mathrm{FM}}+\beta\mathcal L_{\mathrm{WM}}.
$$

$\beta$ weights the two losses. The author implementation and pinned LeRobot version both use 0.1. After 50,000 pretraining steps, separate branches continue from that checkpoint for simulation training (30,000 steps) and hardware fine-tuning (20,000 steps).

![Teaching illustration: human-video training, robot training, and deployment](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/guide11-training-inference-en.png)

**During training**, the video encoder supplies history and targets; world-model error trains the VLM, and robot demonstrations add control supervision. **During deployment**, current images, instructions, and the action head's required state inputs suffice. Latent-action computation and the action head remain; the video encoder and world-model predictor are omitted. The controller executes actions, then new observations support another prediction.

The world model thus acts mainly as a training-time teacher. It encourages representations that explain changes, without searching future videos to choose actions during deployment.

## Experimental Results

### Standard Tasks and Perturbations

LIBERO fine-tuning uses expert demonstrations. Four suites each contain ten tasks, evaluated 50 times per task: 2,000 trials in total. Table 1 compares complete methods and includes the human-video ablation in its final two rows:

<div className="vla-jepa-paper-table">

![Table 1: LIBERO success-rate comparison](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/table01-libero.png)

</div>

Mean success is **97.2%**, versus **96.1%** without human video. The complete model leads the listed methods, but is close to OpenVLA-OFT's 97.1%. The main table lacks error bars across independent training runs, so small differences should not be overstated.

LIBERO-Plus adds seven types of perturbation while retaining the original LIBERO training data:

<div className="vla-jepa-paper-table">

![Table 3: LIBERO-Plus success under seven perturbation types](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/table03-libero-plus.png)

</div>

Human video raises mean success from **62.9% to 79.5%**, improving all seven categories. This 16.6-percentage-point gain is larger than the 1.1-point gain on standard tasks, providing clearer evidence of benefits under perturbations.

### Transfer and Hardware Performance

SimplerEnv evaluates transfer from real-robot training data to simulation:

<div className="vla-jepa-paper-table">

![Table 2: SimplerEnv tasks and ablation results](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/table02-simpler.png)

</div>

Benefits are not universal. Adding human video reduces Google Robot mean success from **78.4% to 65.2%**; WidowX remains at **57.3%**. Video experience does not replace robot demonstrations for specific control tasks. Some baseline means and textual rankings are inconsistent, so the conclusion here uses the model ablation.

Hardware tests use a Franka Research 3, Robotiq gripper, and three D435 cameras, with ten trials per task. Figure 4 reports the results:

![Figure 4: real-world success under three conditions](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/fig04-real-world-results.png)

VLA-JEPA reaches **0.70** under in-distribution conditions and **0.47** after layout changes, leading the two baselines. Its unseen-task score is **0.17**, below π0.5's **0.20**. None of the three models completes placing grapes on the top level of an unseen shelf, and VLA-JEPA can still select the wrong object.

These experiments support the overall method's competitiveness and the contribution of human video to perturbation robustness. They do not separately isolate the effects of the JEPA objective, information access, and training stages.

## Conclusion

**VLA-JEPA turns state changes in video into supervision for robot representations.** Latent actions explain changes, the action head produces control values, and robot demonstrations connect the two. This supervision design improves performance under the tested perturbations, while reliable execution and generalization to unseen tasks remain unresolved.

## References

1. [VLA-JEPA paper v2](https://arxiv.org/abs/2602.10098v2) and [paper PDF](https://arxiv.org/pdf/2602.10098v2). Introduction and related work: Sections 1–2; method: Section 3; experiments: Section 4; configuration and hardware protocol: Appendices A–B.
2. [Author project page](https://ginwind.github.io/VLA-JEPA/) and [model repository](https://huggingface.co/ginwind/VLA-JEPA).
3. Author code at commit [ec90777](https://github.com/ginwind/VLA-JEPA/tree/ec907778b4af46a45742baf5ebfb2e055560346e): [model and losses](https://github.com/ginwind/VLA-JEPA/blob/ec907778b4af46a45742baf5ebfb2e055560346e/starVLA/model/framework/VLA_JEPA.py), [pretraining configuration](https://github.com/ginwind/VLA-JEPA/blob/ec907778b4af46a45742baf5ebfb2e055560346e/scripts/configs/vlajepa_pretrain.yaml).
4. LeRobot at commit [f5c9bc0](https://github.com/huggingface/lerobot/tree/f5c9bc02137c331b009eccd44ece6f11b62187a8): [model](https://github.com/huggingface/lerobot/blob/f5c9bc02137c331b009eccd44ece6f11b62187a8/src/lerobot/policies/vla_jepa/modeling_vla_jepa.py), [action head](https://github.com/huggingface/lerobot/blob/f5c9bc02137c331b009eccd44ece6f11b62187a8/src/lerobot/policies/vla_jepa/action_head.py), and [configuration](https://github.com/huggingface/lerobot/blob/f5c9bc02137c331b009eccd44ece6f11b62187a8/src/lerobot/policies/vla_jepa/configuration_vla_jepa.py). Implementation differences supplement data-flow and training details; they are not sources for paper results.

</div>
