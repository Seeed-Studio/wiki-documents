---
description: "A deep dive into Long-WAM: mechanisms, training, experiments, and LeRobot v0.7.0 integration scope."
title: "Long-WAM: Making Visual History Useful for Prediction and Control"
hide_title: true
keywords: ["Paper Deep-Dive","Long-WAM","World-Action Models","Long Context","Inverse Dynamics","Real-Time Control","LeRobot"]
slug: /robotics/paper_reading_long_wam
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
    "value": "Prerequisites: History, Prediction, and Execution",
    "id": "prerequisites-history-prediction-and-execution",
    "level": 2
  },
  {
    "value": "Abstract and Reading Guide",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Why Video Initialization Matters",
    "id": "why-video-initialization-matters",
    "level": 2
  },
  {
    "value": "Video Pretraining: Predicting Change from the Past",
    "id": "video-pretraining-predicting-change-from-the-past",
    "level": 2
  },
  {
    "value": "Architecture: How Past and Future Reach the Controller",
    "id": "architecture-how-past-and-future-reach-the-controller",
    "level": 2
  },
  {
    "value": "Training Futures and Deployment Futures",
    "id": "training-futures-and-deployment-futures",
    "level": 3
  },
  {
    "value": "Runtime: Reducing the Cost of History",
    "id": "runtime-reducing-the-cost-of-history",
    "level": 2
  },
  {
    "value": "Experiments: Separating History, Future, and Systems Effects",
    "id": "experiments-separating-history-future-and-systems-effects",
    "level": 2
  },
  {
    "value": "Initialization and Context",
    "id": "initialization-and-context",
    "level": 3
  },
  {
    "value": "Future Conditioning and Dynamic Tasks",
    "id": "future-conditioning-and-dynamic-tasks",
    "level": 3
  },
  {
    "value": "LeRobot Integration and Result Boundaries",
    "id": "lerobot-integration-and-result-boundaries",
    "level": 2
  },
  {
    "value": "Conclusion",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-long_wam-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-long_wam-title">Long-WAM: Making Visual History Useful for Prediction and Control</h1>
  <p className="paper-reading-lead">Long-WAM: Scaling the Context of World-Action Models</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#video-pretraining-predicting-change-from-the-past">Visual history</a></li>
    <li><a href="#architecture-how-past-and-future-reach-the-controller">Prediction and actions</a></li>
    <li><a href="#runtime-reducing-the-cost-of-history">Real-time execution</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2610.10528v1" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Read the paper</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/longwam" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot Long-WAM Documentation ↗</a>

**LeRobot parameters**

- `--policy.path=Efficient-Large-Model/Long-WAM-LIBERO-IDM-LeRobot` loads predict-then-act weights.
- `past_obs_steps=48` counts past control ticks, not future actions.
- `inference_action_horizon=80` and `n_action_steps=10` distinguish prediction from execution length.
- Call `select_action` every control tick, including while consuming queued actions. The versioned integration validates synchronous inference.

</aside>

A cup moves left on a conveyor. One image locates it; several images reveal its motion. In another task, a robot has already removed a cup from a cabinet, but the current view resembles the starting scene. History identifies the next phase. **Does accepting more history automatically make a policy use it?**

## Prerequisites: History, Prediction, and Execution

History contains observations before a decision; prediction covers the future; execution determines when the robot replans. At 20 Hz, 48 past control ticks span 2.4 seconds and 10 executed actions span 0.5 seconds. Neither determines the prediction horizon, and video frames can be sampled with a separate stride.

<figure className="paper-reading-figure" data-reading-figure="long_wam/teaching-history-future-feedback-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/long-wam-history-future-feedback-en-v2.png" alt="Observed history, predicted future, and real execution feedback" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>Observed history, predicted future, and real execution feedback.</strong> AI-generated teaching illustration of the inverse dynamics modeling (IDM) variant. Observed video history and partially denoised future video latents jointly condition actions. Future video denoising stops at a nonzero noise level, without pixel decoding. Language and robot-state conditioning are omitted for clarity. Only new observations from real execution enter observed history; predicted futures are not past observations.</figcaption>
</figure>

## Abstract and Reading Guide

**Abstract in brief.** Long-WAM learns history-to-future dependencies through autoregressive video pretraining, then preserves that causal structure during action adaptation. Actions use both observed history and predicted future latents. Streaming encoding, asynchronous execution, and hardware optimizations reduce runtime cost.

**Reading note.** A longer input window and an ability to exploit history are different. Likewise, the original deployment system and a synchronous LeRobot adapter have different validated capabilities.

## Why Video Initialization Matters

Bidirectional video generation can read both earlier and later frames. Robot control must infer what comes next from observations already available. Adding history only during action fine-tuning does not necessarily teach effective temporal dependence.

Unlike standard Fast-WAM, Long-WAM retains predicted future conditions. Unlike simply extending a context buffer, it learns temporal causality during video pretraining.

## Video Pretraining: Predicting Change from the Past

LongLive2.0-Robot continues from an autoregressive LongLive-2.0 checkpoint using robot and egocentric video without requiring a common action space. Block-causal attention allows each target chunk to read its genuine earlier context.

Teacher forcing supervises multiple chunks in parallel. Buffered-error perturbations teach recovery from history errors resembling rollout conditions. History supplies the condition; future video supplies supervision. The clean condition image is excluded from the denoising target.

## Architecture: How Past and Future Reach the Controller

Video queries read their own and earlier visual blocks, never actions. Action queries read history, partially denoised future latents, and the whole action chunk.

| IDM stage | Input | Result |
| --- | --- | --- |
| Predict future latents | History, instruction, and state condition | Anticipated dynamics |
| Visual prefill | Observed and predicted latents | Layer-wise visual keys and values |
| Action denoising | Visual cache, state, and action noise | Continuous action chunk |
| Feedback | Newly observed execution | Updated genuine history |

IDM infers actions after predicting visual change. No future RGB decoding is needed. The paper's V4 setting stops video denoising at $\sigma_\star=0.9$ and reuses the resulting visual cache during action generation.

<figure className="paper-reading-figure" data-reading-figure="long_wam/overview">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/overview.png" alt="From causal video pretraining to history-conditioned actions" loading="lazy" />
  <figcaption><strong>From causal video pretraining to history-conditioned actions.</strong> Source: the Long-WAM paper. The lower pipeline distinguishes observed history, imagined futures, and the action expert; KV caching preserves historical context. Deployment still needs new real observations rather than treating predictions as events that already happened.</figcaption>
</figure>

### Training Futures and Deployment Futures

Training first optimizes video flow matching, then conditions action training on forward-noised ground-truth future latents. Deployment substitutes predicted futures. The action pass detaches the visual cache, updating the action expert and proprioceptive adapter while the video objective trains the predictor.

This gradient choice differs from the forward mask that prevents video from reading actions. Predicted future information must also remain distinct from real observations in the next control cycle.

## Runtime: Reducing the Cost of History

A streaming VAE encodes incoming observations incrementally rather than recomputing the full history. Asynchronous execution prepares another chunk while the robot consumes the current one.

With an overlap of $O$ ticks and tick duration $\Delta t$, timely handoff requires

$$
T_{\mathrm{ready}}\leq O\Delta t.
$$

An occasional missed deadline can cause waiting even when average inference is fast. The reported 107.4 ms on RTX 5090 includes future-latent prediction under the paper's optimized configuration; it is not a universal device or adapter latency.

<figure className="paper-reading-figure" data-reading-figure="long_wam/streaming-execution">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/streaming-execution.png" alt="Asynchronous handoff with streaming and full-window encoding" loading="lazy" />
  <figcaption><strong>Asynchronous handoff with streaming and full-window encoding.</strong> Source: the Long-WAM paper. Streaming encodes arriving observations, whereas full-window encoding delays handoffs. Both schedules use the same nominal trigger stride and overlap. The diagram illustrates reduced scheduling waits, not a separately measured success-rate gain.</figcaption>
</figure>

## Experiments: Separating History, Future, and Systems Effects

### Initialization and Context

The paper compares bidirectional, general autoregressive, and robot-domain autoregressive video initialization. Long-context RoboCasa GR-1 performance reaches 78.7%; autoregressive initialization benefits more from history, while the bidirectional initialization lacks the same net improvement. Useful history length depends on the task.

<figure className="paper-reading-figure" data-reading-figure="long_wam/context-scaling">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/context-scaling.png" alt="Context scaling under different video initializations" loading="lazy" />
  <figcaption><strong>Context scaling under different video initializations.</strong> Source: the Long-WAM paper. Discrete context settings are plotted at equal spacing. Robot causal initialization peaks at 2.4 seconds on LIBERO-Long and 19.2 seconds on RoboCasa. Longer windows do not keep improving success, and bidirectional initialization does not obtain the same gains.</figcaption>
</figure>

### Future Conditioning and Dynamic Tasks

| Paper configuration | LIBERO mean | LIBERO-Long | RoboTwin mean |
| --- | ---: | ---: | ---: |
| Without future prediction | 97.3% | 94.5% | 92.0% |
| Joint co-denoising | 97.8% | 95.8% | 93.6% |
| IDM | 99.5% | 99.5% | 94.4% |

These are success rates on distinct benchmarks. After dynamic-data fine-tuning, DOMINO success is 34.9%, substantially below static manipulation scores. Near-saturated LIBERO results do not imply that dynamic control is solved.

On physical Unitree G1 and YAM platforms, the paper studies both dynamic and long-horizon tasks. Dynamic cup stacking succeeds in 19 of 20 Long-WAM trials, versus zero for π0.5 and Fast-WAM in that setup. Composite-task experiments additionally use a separate high-level planner; their results belong to the combined system.

## LeRobot Integration and Result Boundaries

Version 0.7.0 supports native IDM/CoD checkpoints, fine-tuning, and synchronous inference. The LIBERO release uses two 224×224 cameras, 7D actions, 8D state, and P48 history. Supply fresh observations every control tick, even while actions remain queued.

The documented IDM checkpoint scores 99.4%, 99.8%, 97.8%, and 99.0%, with 500 episodes per suite: 99.00% overall. CoD averages 98.45%. These are adapter results, separate from the paper's 99.5%. Original `model.pt` bundles are not native LeRobot checkpoint directories.

`reset()` clears both history and queued actions. Changing `past_obs_steps` alone does not constitute context-scaling training. Generic async/RTC is not validated in this adapter; the original project's optimized execution remains a separate capability.

## Conclusion

Long-WAM learns to predict from history before connecting that prediction to actions. Streaming and asynchronous execution make this path more practical. Its gains depend on initialization, task memory requirements, future conditioning, and the deployment system used.

</div>
