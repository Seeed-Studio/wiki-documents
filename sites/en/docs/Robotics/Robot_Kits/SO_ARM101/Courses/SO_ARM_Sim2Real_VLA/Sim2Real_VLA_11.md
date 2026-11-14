---
description: "Chapter 11 of the SO-ARM101 Sim-to-Real VLA Course — evaluate in the real environment: run the fine-tuned GR00T N1.7 model against the physical SO-101 follower with a decoupled policy server and robot client."
title: Chapter 11 - Evaluate in the Real Environment
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - GR00T N1.7
  - Inference
  - Evaluation
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_11
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_11/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 11 · Get Your Own VLA Model</span>
    <h2>11. Evaluate in the Real Environment</h2>
    <p>
      Deploy the fine-tuned GR00T N1.7 model in the real world: a policy
      server runs the model, a robot client drives the SO-101 follower in a
      closed loop.
    </p>
    <div className="hero-actions">
      <a href="#architecture">Architecture</a>
      <a href="#server">Server</a>
      <a href="#client">Client</a>
      <a href="#safety">Safety</a>
      <a href="#iterate">Iterate</a>
    </div>
  </div>
</section>

## 11.1 Deployment Architecture

<section id="architecture" className="section-card">
  <div className="section-title">
    <span>Decoupled design</span>
    <h2>11.1 Deployment Architecture</h2>
  </div>

The Isaac GR00T deployment architecture adopts a decoupled design that
separates the inference side from the control side:

- **Inference side (server)**: dedicated exclusively to executing model
  inference tasks;
- **Control side (client)**: responsible for acquiring the arm's state and
  coordinating its motion control.

You can run the server and client on two separate devices (for example, a
GPU workstation serving policies for a Jetson-mounted robot — Chapter 18),
or, as demonstrated in this chapter, run both on a single computer.

:::caution VRAM
Single-machine evaluation needs an NVIDIA GPU with enough VRAM for the 3B
GR00T model — the same class of GPU that fine-tuned it (Chapter 10).
:::

The evaluation uses NVIDIA's SO-101 real-robot client from the workshop,
which handles the full closed loop: observations go in, a 16-step action
chunk comes back, and the client time-aligns and blends overlapping
predictions before streaming motor commands to the follower at 30 Hz.

</section>

## 11.2 Terminal 1: Start the Inference Server

<section id="server" className="section-card">
  <div className="section-title">
    <span>Policy server</span>
    <h2>11.2 Terminal 1: Start the Inference Server</h2>
  </div>

NVIDIA's real-robot container mounts the GR00T evaluation scripts and your
checkpoint directory. Start it with your output directory mounted:

```bash
cd ~/Sim-to-Real-SO-101-Workshop
docker run -it --rm --name real-robot --network host --privileged --gpus all \
  -e DISPLAY \
  -v /dev:/dev \
  -v /run/udev:/run/udev:ro \
  -v $HOME/.Xauthority:/root/.Xauthority \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v $HOME/.cache/huggingface/lerobot/calibration:/root/.cache/huggingface/lerobot/calibration \
  -v $HOME/groot_so101_real:/workspace/models/so101 \
  -v $(pwd)/docker/real/scripts:/Isaac-GR00T/gr00t/eval/real_robot/SO100 \
  real-robot \
  /bin/bash
```

Inside the container, start the server on your checkpoint:

```bash
python Isaac-GR00T/gr00t/eval/run_gr00t_server.py \
  --model-path /workspace/models/so101/checkpoint-5000
```

The server listens on port 5555 and keeps running across rollouts — stop
only the client between attempts.

</section>

## 11.3 Terminal 2: Start the Robot Client

<section id="client" className="section-card">
  <div className="section-title">
    <span>Closed loop</span>
    <h2>11.3 Terminal 2: Start the Robot Client</h2>
  </div>

Attach a second terminal to the container:

```bash
docker exec -it real-robot /bin/bash
```

Run the evaluation script. Note the camera keys: at inference the runtime
names are `wrist` and `front` — the same names the modality file produced
in Chapter 10. The physical cameras are unchanged: `wrist` is the gripper
camera and `front` is the overhead camera.

```bash
python Isaac-GR00T/gr00t/eval/real_robot/SO100/so101_eval.py \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --robot.cameras="{
    wrist: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    front: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }" \
  --policy_host=localhost \
  --policy_port=5555 \
  --lang_instruction="Put the three vials into the vial rack" \
  --rerun True
```

Expected behavior:

1. The follower slowly rises to its start pose;
2. It enters inference mode and starts the task;
3. `Ctrl+C` in Terminal 2 stops it and returns it home;
4. The server in Terminal 1 stays alive for repeated rollouts.

:::tip Evaluate several checkpoints
Re-run the client with different checkpoint numbers (stop both terminals,
change `--model-path`, restart) and keep the checkpoint with the highest
task success rate — not simply the last one.
:::

</section>

## 11.4 Safety

<section id="safety" className="section-card">
  <div className="section-title">
    <span>Before you press Enter</span>
    <h2>11.4 Safety</h2>
  </div>

The policy can move faster than a human expects:

- Keep hands, hair, and sleeves out of the vial area during rollouts;
- Route camera and power cables away from the follower's workspace;
- Keep the follower's power switch within reach — cutting motor power is
  the emergency stop;
- Put the vials back in their start area between rollouts and confirm the
  rack has not moved.

</section>

## 11.5 Iterate on What You See

<section id="iterate" className="section-card">
  <div className="section-title">
    <span>Failure → fix</span>
    <h2>11.5 Iterate on What You See</h2>
  </div>

The first real rollout rarely succeeds every time. Typical observations and
their fixes:

| Observation | Likely cause | Fix |
| --- | --- | --- |
| Misses the grasp by a few centimeters | Camera framing differs from training | Re-check Chapter 8's camera poses |
| Grasps, then drops the vial | Contact/friction gap | Record more real episodes with successful grasps |
| Arm drifts in the right direction | Calibration off | Re-run `lerobot-calibrate` and the checker |
| Ignores the language prompt | Task text mismatch | Use the exact recording sentence in `--lang_instruction` |
| Server rejects the observation | Camera key mismatch | Keep `wrist` and `front` in the eval command |
| Stalls mid-task | Episode ended in a hold | Record longer, complete demonstrations |

Iterate in this order: fix the studio and cameras first, then add 5–10
real episodes (Chapter 9), then fine-tune again (Chapter 10). Changing the
model before fixing the data usually hides the real problem.

| Symptom | Cause | Fix |
| --- | --- | --- |
| `address already in use` on port 5555 | Old server still running | Stop the previous container or process |
| Server starts but rollout does nothing | Stale checkpoint path | Confirm the mount and `--model-path` point at the same checkpoint |
| Robot returns home immediately | Policy or observation error | Read the server log; check camera streams and joint names |
| `Cannot find calibration` in the container | Calibration volume not mounted | Mount `~/.cache/huggingface/lerobot/calibration` (already in the `docker run` above) |

For edge deployment — running the policy on a Jetson instead of a
workstation GPU — continue to
[Chapter 14 — Setup Your Jetson Edge Device](Sim2Real_VLA_14.md), or scale
up your dataset first with the optional [Chapter 12](Sim2Real_VLA_12.md)
and [Chapter 13](Sim2Real_VLA_13.md).

Back to the course overview: [SO-ARM101 Sim-to-Real VLA Course](Sim2Real_VLA_Introduction.md).

</section>

</div>