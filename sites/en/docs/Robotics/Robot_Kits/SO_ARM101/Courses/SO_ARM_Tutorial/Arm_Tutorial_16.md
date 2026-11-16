---
description: Chapter 16 of the SO-ARM Physical AI Beginner's Course — how inference works on the real SO-ARM, run your trained ACT policy with lerobot-record and lerobot-rollout, evaluate by success rate, analyze failures, and iterate on data.
title: Chapter 16 - Real-Robot Inference, Evaluation, and Data Iteration
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Inference
  - Evaluation
  - ACT
  - LeRobot
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_16
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_16/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 16 · Theory &amp; Practice</span>
    <h2>16. Real-Robot Inference, Evaluation, and Data Iteration</h2>
    <p>
      Chapter 16 of the SO-ARM Physical AI Beginner's Course — how inference works on the real
      SO-ARM, run your trained ACT policy with lerobot-record and lerobot-rollout, evaluate by
      success rate, analyze failures, and iterate on data.
    </p>
    <div className="hero-actions">
      <a href="#dataflow">Inference data flow</a>
      <a href="#inference">Run inference</a>
      <a href="#evaluation">Evaluate</a>
    </div>
  </div>
</section>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety check before running</strong>
    <p>
      Inference moves the real arm at full torque with no human in the loop. Clear the workspace within 1 meter,
      keep hands away, and be ready to cut power before starting.
    </p>
  </div>
</div>

## 16.1 Inference Data Flow

<section id="dataflow" className="section-card">
  <div className="section-title">
    <span>Data flow</span>
    <h2>16.1 Inference Data Flow</h2>
  </div>

Recall Chapter 9: inference is the mirror image of data collection. The loop per frame:

1. Read the two cameras → **Observation**;
2. Read the follower's 6 joints → **State**;
3. Normalize with the dataset's stored statistics;
4. The policy predicts an **Action Chunk** (k × 6);
5. Execute the first few actions of the chunk on the servos;
6. When the executed portion is consumed, re-observe and re-predict.

The leader arm is now unused — the model has replaced the human as the decision-maker. Everything else (cameras, serial bus, safety limits) is identical to recording, which is why the camera keys and `--robot.id` must match the recording session exactly.

</section>

## 16.2 Preprocessing and De-normalization

<section id="preprocessing" className="section-card">
  <div className="section-title">
    <span>Preprocessing</span>
    <h2>16.2 Preprocessing and De-normalization</h2>
  </div>

Your dataset stored per-feature statistics (mean/std) in `meta/stats` (Chapter 13). At inference:

- **Input side:** images and joint states are normalized with the training statistics before entering the network.
- **Output side:** the network's normalized actions are de-normalized back into real joint values before being sent to the servos.

This is why the evaluation command must use **the same camera keys** (`front`, `side`) as recording — a mismatched key means missing statistics, and you'll see:

```text
mean is infinity. You should either initialize with stats as an argument or use a pretrained model
```

</section>

## 16.3 Starting Real-Robot Inference

<section id="inference" className="section-card">
  <div className="section-title">
    <span>Inference</span>
    <h2>16.3 Starting Real-Robot Inference</h2>
  </div>

### Method A: `lerobot-record` with a policy (recommended for beginners)

The record tool accepts a policy checkpoint. This records an **evaluation dataset** while the policy drives the arm — 10 evaluation episodes:

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeedstudio123/eval_test123 \
  --dataset.single_task="Put the object from Point A into Point B" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

Notes:

1. `--policy.path` is the Chapter 15 checkpoint path. If you uploaded the model to the Hub, a repo id works too (e.g. `${HF_USER}/act_so101_test`).
2. The evaluation `dataset.repo_id` conventionally starts with `eval_` — evaluation videos and data are saved separately, e.g. `seeedstudio123/eval_test123`.
3. If you hit `File exists: '.../eval_xxxx'`, delete the old evaluation folder first and rerun.
4. Camera keys (`front`, `side`) must exactly match those used during dataset recording (see 16.2).

### Method B: `lerobot-rollout` real-time deployment

For a live run without recording (supported by policies like SmolVLA / ACT):

```bash
lerobot-rollout \
  --strategy.type=base \
  --policy.path=${HF_USER}/act_policy \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --display_data=true \
  --task="Your task description" \
  --duration=60
```

</section>

## 16.4 Action Chunk Execution

<section id="chunk-execution" className="section-card">
  <div className="section-title">
    <span>Execution</span>
    <h2>16.4 Action Chunk Execution</h2>
  </div>

Chapter 14's chunk/horizon distinction becomes visible here:

- The model predicts k=100 actions per forward pass;
- Only the first portion executes open-loop before the loop re-observes;
- The overlap between the tail of the old chunk and the head of the new one is smoothed (temporal ensembling), so motion looks continuous instead of stepping.

If the arm moves in visible "bursts" — a strong pause every half second — the effective horizon or inference speed is the problem: check GPU utilization, camera fps, and consider asynchronous inference (running the policy as a separate server process, see Stage 4's deployment chapter for the idea).

</section>

## 16.5 Safety: Limits, Speed Limits, E-Stop

<section id="safety" className="section-card">
  <div className="section-title">
    <span>Safety</span>
    <h2>16.5 Safety: Limits, Speed Limits, E-Stop</h2>
  </div>

- Joint limits from calibration constrain every commanded action.
- Keep a hand on the power switch during the first runs of any new checkpoint; cutting power is the fastest stop (the servos go limp).
- ESC in a `lerobot-record` evaluation session stops the episode cleanly.
- Never let the arm run unattended near people, cables, or the edge of the table.

</section>

## 16.6 Evaluation: Success Rate and Completion Time

<section id="evaluation" className="section-card">
  <div className="section-title">
    <span>Evaluation</span>
    <h2>16.6 Evaluation: Success Rate and Completion Time</h2>
  </div>

Use the Chapter 11 success criteria — objectively determinable, not "looks about right":

1. **Define success:** "the object ends up inside the marked Point B area."
2. **Vary starts:** place the object at the 5 marked points, and repeat each point N times.
3. **Count:** successes / total = success rate. Also record average completion time — a policy that succeeds slowly or with retries is telling you something.

Example result table to keep per checkpoint:

| Start point | Runs | Successes | Rate |
| :--- | :---: | :---: | :---: |
| Center | 4 | 4 | 100% |
| Top | 4 | 3 | 75% |
| Left | 4 | 2 | 50% |
| ... | | | |

</section>

## 16.7 Generalization Testing

<section id="generalization" className="section-card">
  <div className="section-title">
    <span>Generalization</span>
    <h2>16.7 Generalization Testing</h2>
  </div>

After the in-distribution test passes, probe the boundaries deliberately (one change at a time):

- Move the object slightly outside the marked area;
- Change the object (different size, same category);
- Change ambient lighting (daylight vs. evening lamp).

Expect graceful degradation inside the data distribution and hard failure outside it — that's Chapter 8's distribution principle showing up on hardware. Every generalization failure you want to fix must be answered with data covering that situation, not with more training steps.

</section>

## 16.8 Failure Type Analysis

<section id="failures" className="section-card">
  <div className="section-title">
    <span>Failures</span>
    <h2>16.8 Failure Type Analysis</h2>
  </div>

Sort every failed episode into one of four buckets — the bucket dictates the fix:

| Failure type | Looks like | Fix |
| :--- | :--- | :--- |
| **Perception failure** | Grips 3 cm left of the object | Data lacks coverage for that position/lighting → collect more there |
| **Strategy failure** | Approaches from the wrong side consistently | Inconsistent demonstrations → re-record with one strategy |
| **Execution failure** | Right approach, object slips | Gripper force/speed inconsistent in data; check gripper calibration |
| **System failure** | Arm stutters, pauses, camera lag | Not a model problem: fps, USB bandwidth, calibration, servo temperature |

</section>

## 16.9 Data Iteration: Failure-Driven Data Collection

<section id="iteration" className="section-card">
  <div className="section-title">
    <span>Iterate</span>
    <h2>16.9 Data Iteration: Failure-Driven Data Collection</h2>
  </div>

The loop that ends Stage 3's core path:

1. Evaluate (16.6) and bucket the failures (16.8);
2. For every perception/strategy failure bucket, collect 10-20 new episodes covering exactly that situation (Chapter 12 workflow);
3. Clean and merge into the dataset with the Chapter 13 tools;
4. Retrain (Chapter 15) — resume or fresh run;
5. Re-evaluate. Repeat until the success rate satisfies your definition of done.

This failure-driven loop — not any single training run — is the daily practice of real robot learning projects.

</section>

</div>
