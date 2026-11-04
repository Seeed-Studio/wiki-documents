---
description: 'Chapter 22 of the SO-ARM Physical AI Beginner''s Course — the no-code VLA path: connect and calibrate the arms in SenseCraft Robotics, verify teleoperation, bind cameras, collect and clean datasets, train in the cloud or locally, and run inference — all without a terminal or a training GPU.'
title: Chapter 22 - No-Code VLA with SenseCraft Robotics
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SenseCraft Robotics
  - No-Code
  - VLA
  - Training
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_22
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_22/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 4 · Chapter 22 · Practice</span>
    <h2>22. No-Code VLA with SenseCraft Robotics</h2>
    <p>
      Chapter 22 of the SO-ARM Physical AI Beginner's Course — the no-code VLA path: connect and
      calibrate the arms in SenseCraft Robotics, verify teleoperation, bind cameras, collect and
      clean datasets, train in the cloud or locally, and run inference — all without a terminal
      or a training GPU.
    </p>
    <div className="hero-actions">
      <a href="#prepare">Prepare</a>
      <a href="#connect">Connect</a>
      <a href="#dataset">Collect</a>
      <a href="#operation">Operate</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Who this chapter is for</strong>
    <span>Everyone — but especially readers without a training GPU.</span>
    <span>Same task as Chapter 11 (pick at A, place at B), same theory — no Python required.</span>
    <span>A guided 6-step app workflow replaces the terminal.</span>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ No-code · No environment setup</span>
    <p className="sensecraft-banner__title">Skip the setup — run the reBot Arm and LeRobot from one app</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics is Seeed's no-code platform for the SO-ARM101, reBot Arm 102 + B601-RS and B601-DM. Connect the arms, calibrate, collect demonstrations, train and run inference from a guided interface — no Python environment, no terminal.</p>
    <ul className="sensecraft-banner__points">
      <li>✅ 6-step guided workflow</li>
      <li>✅ Cloud training — no local GPU</li>
      <li>✅ Windows / macOS client</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">Go to SenseCraft Robotics ↗</a>
    <a className="sensecraft-banner__link" href="/sensecraft_robotics/">Software guide</a>
  </div>
</div>

:::tip
SenseCraft Robotics is Seeed's no-code platform for the SO-ARM101 (and the reBot arms). Connect the arms, calibrate, collect demonstrations, train and run inference from a guided interface — no Python environment, no terminal. This chapter is the GUI counterpart of everything you did in Stages 3-4.
:::

## 22.1 Preparation

<section id="prepare" className="section-card">
  <div className="section-title">
    <span>Prepare</span>
    <h2>22.1 Preparation</h2>
  </div>

### Hardware

![SO-ARM101 Pro hardware list](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-1-hardware-list-soarm-en.webp)

| Item | Leader | Follower |
| :--- | :--- | :--- |
| Arm | Black assembled Leader arm ×1 | White assembled Follower arm ×1 |
| LeRobot servo control board | ×1 | ×1 |
| Power cable | 5V power cable ×1 | Pro: 12V ×1; Standard: 5V |
| Data cable | USB-C ×1 | USB-C ×1 |
| Mounting clamp | ×2 | ×2 |

Shared: flexible gripper parts, **two 32 × 32 mm USB cameras** (the kit includes one; prepare a second separately — training data must contain two views), screwdriver, mouse mat.

> The arms must be assembled, mounted, powered, and connected by USB. If assembly is not complete, return to [Chapter 6](/robotics/soarm_physical_ai_course_chapter_6/).

### Computer and software

- Windows or macOS computer; local training requires a compatible GPU;
- Stable network for downloads, login, cloud training, and inference;
- [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics) installed, and a registered [SenseCraft account](https://account.seeed.cc/login) signed in.

### Scene and safety

- Mark two fixed positions on the table: Point A for the object's start, Point B for its destination;
- Prepare an easy-to-grasp object (a red block or soft object);
- Make sure Point A, Point B, both arms, and the object are visible in the camera views and unobstructed;
- Clear the workspace of people, clutter, cables, and fragile objects. Keep the Leader away from the Follower and out of the Follower's camera view.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-3-scene-and-safety-soarm-en.webp" alt="Task scene and safety example" />
</div>

:::note
Interface names, button locations, and training backends may change with SenseCraft Robotics versions. Serial ports and dataset names shown here are examples — always use the devices your computer detects.
:::

</section>

## 22.2 Connect the Arms

<section id="connect" className="section-card">
  <div className="section-title">
    <span>Connect</span>
    <h2>22.2 Connect the Arms</h2>
  </div>

:::warning
Safety notice: disconnect power before installing, connecting, or removing the arms. Confirm the arms are secure, the cables are correct, and the workspace is clear before restoring power. Never connect or disconnect power while powered.
:::

**Install the arm bodies.** Place the Leader and Follower on a stable table; secure each with two clamps; keep a safe distance between arms; with power off, move each joint by hand to confirm smooth motion without collisions.

![Install the arm bodies](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-1-install-arm-body-soarm-en.webp)

**Install the control boards.** One LeRobot servo control board per arm: align with the base slot, check connector orientation, seat it securely; verify every servo cable is fully home and not sharply bent or pinched.

**Connect the data cables.** Leader → USB-C → computer; Follower → USB-C → computer. For easier serial identification, connect the arm ends first and plug the computer ends one at a time during binding (22.3).

![Install the control boards](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-2-install-controller-board-soarm-en.webp)

**Install the power interfaces and power on.** With adapters unplugged from AC: insert each DC cable, tighten the locking collar; Pro = Leader 5V / Follower 12V, Standard = both 5V — do not mix; route cables clear of joint motion. Then connect power, watch the board indicators, and confirm both USB-C (data) and DC (power) are attached.

![Install the power interfaces](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-3-install-power-interface-soarm-en.webp)

</section>

## 22.3 Device Setup in the App

<section id="device-setup" className="section-card">
  <div className="section-title">
    <span>Device setup</span>
    <h2>22.3 Device Setup in the App</h2>
  </div>

After signing in, open **Projects** → **New Project**, enter a name and description, and create it. The project overview gives access to device setup, action replay, datasets, training, models, and operation; if it shows "To be configured" or "Not connected", click **Go to Device Setup**.

![Create a project](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-create-project-soarm-en.webp)

### Select the device model

In **Device Pairing**, select **SO-ARM101 + SO-ARM101**, then click **Next**.

![Select SO-ARM101 + SO-ARM101](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-1-device-pairing-soarm-en.webp)

### Bind the USB serial ports

1. **Initial scan:** disconnect both USB cables, click **Rescan**, note the ports shown;
2. **Bind the Leader:** connect the Leader, **Rescan**, bind the newly appearing port to the Leader;
3. **Bind the Follower:** connect the Follower, **Rescan**, bind the new port to the Follower;
4. Both arms show **Connected** → **Next**.

![Bind the Leader and Follower serial ports](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-2-serial-binding-soarm-en.webp)

:::tip
Serial-port troubleshooting: after each scan, bind only the **newly appearing** port — never identify devices by COM number alone. If a port is missing, reconnect the USB cable and scan again; if only one port appears, check the other cable and the arm's power.
:::

### Arm calibration verification

Move the Leader and Follower to the middle posture shown on screen and clear the workspace. Two modes:

- **Automatic Calibration** — the system identifies each joint's travel range by driving the arm. Requires all joints to have reliable physical stops. Remove loads, align both arms roughly vertical, tick the confirmation checkbox, click **Start Calibration**, and wait.
- **Manual Calibration** — for joints without reliable stops, or to verify step by step: keep the Leader powered, move its joints to mid-range, click **Start Calibration**, and follow the on-screen guidance for each joint of both arms.

> Do not teleoperate or collect data during calibration. If the posture looks abnormal, a joint is obstructed, or calibration fails — stop, check the arm and workspace, and retry.

### Teleoperation verification

1. Click **Start Teleoperation**;
2. Move the Leader slightly — the Follower must follow synchronously, in the same direction, smoothly;
3. Click **End Teleoperation**, then **Confirm Teleoperation Normal** (or **Abnormal, Return to Recalibrate**).

![Teleoperation verification](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-4-teleoperation-soarm-en.webp)

:::tip
**Gravity compensation (optional):** the arms have some weight, so hand-adjusting the Follower takes effort. Gravity compensation offsets part of the weight to make adjustment easier — turn it **off** after adjustment and before teleoperation verification. It assists manual movement only; it does not make the Follower follow the Leader.
:::

### Bind the cameras

Two cameras and two views are required. Common layouts (Chapter 12 discussed the same choice): **gripper view** (top camera + gripper camera, for fine contact-sensitive operations) or **side-view assistance** (top camera + side camera, for grasping/handling/placing — what this course uses).

1. Connect both cameras, click **Rescan**;
2. Assign the streams to **Front Camera** and **Side Camera**;
3. Check both previews: arms, object, and target position clearly visible → **Next**.

![Bind the front and side cameras](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-camera-binding-soarm-en.webp)

</section>

## 22.4 Action Replay (Optional Warm-Up)

<section id="action-replay" className="section-card">
  <div className="section-title">
    <span>Replay</span>
    <h2>22.4 Action Replay (Optional Warm-Up)</h2>
  </div>

**Action Replay** records arm motions through Leader teaching and saves them to an action list for replay — a handy way to verify the chain before committing to a dataset:

| Function | Operation | Purpose |
| :--- | :--- | :--- |
| Record an action | Click **+** → teach with the Leader → **Stop Recording** | Record grasp / move / place actions |
| Replay an action | Click **Replay** | Check continuity, direction, gripper open/close |

![Action list and replay](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-3-action-replay-soarm-en.webp)

</section>

## 22.5 Dataset: Configure, Record, Clean

<section id="dataset" className="section-card">
  <div className="section-title">
    <span>Dataset</span>
    <h2>22.5 Dataset: Configure, Record, Clean</h2>
  </div>

A small-batch, multi-session approach is recommended, exactly as Chapter 11 planned: ~10 episodes per batch; after 2-3 batches keep ~20-30 valid episodes for the first training; add data for complex variants later.

### Configure a data-collection task

Open **Dataset** → **Collect Data** and enter the task information:

| Field | Example | Guidance |
| :--- | :--- | :--- |
| Dataset name | `SO-ARM101 pick-and-place A-to-B-01` | "device + task + batch" naming |
| Task description | `Move the object from the left to the right` | State the goal clearly; **descriptions must match exactly when merging** |
| Number of episodes | `10` | Each episode completes one full task |
| Duration per episode | `20`-`30` seconds | Cover the complete action |
| Rest duration | `5` seconds | Reset arms and scene |

![Configure a data-collection task](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-1-dataset-config-soarm-en.webp)

### Record task episodes

Each episode records the complete grasp at A → move → release at B flow. Keep the procedure consistent; add small position/angle variations only when more generalization is needed.

1. Place the object at Point A, confirm the initial posture, click **Start Recording**;
2. Teach the task with the Leader, then return the arm to the initial posture;
3. Wait out the remaining time or click ➡ (or press Space) to end the episode early;
4. During the rest period, return the object to Point A and prepare the next episode.

![Record task episodes](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-2-recording-episode-soarm-en.webp)

:::note
Important:
- Secure the cameras; arms, gripper, object, and Points A and B must stay visible in both views;
- Don't let key actions be blocked or leave the camera views;
- On failure, dropped object, video stutter, or a blocked camera — click **Record Again** or press `Esc`;
- You can finish the batch first, then inspect and delete abnormal episodes;
- Stop immediately on any loss-of-control or collision risk.
:::

### Inspect, delete, and merge

| Operation | Method |
| :--- | :--- |
| Inspect episodes | Select an episode, play the video / action replay; check task completion and gripper motion |
| Delete abnormal episodes | **Batch Delete Episodes** → select → confirm → **Generate Deleted Copy** (originals are not overwritten) |
| Merge datasets | **Merge** → select datasets → new name (task descriptions, device combos, and camera configs must match) |

![Inspect dataset](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-3-dataset-check-soarm-en.webp)

</section>

## 22.6 Training

<section id="training" className="section-card">
  <div className="section-title">
    <span>Training</span>
    <h2>22.6 Training</h2>
  </div>

Training turns the teaching data into an action model — the GUI equivalent of Chapter 15.

| Parameter | Option / value | Details |
| :--- | :--- | :--- |
| **Training hardware** | Cloud · automatically select GPU | Cloud server, consumes credits |
| | Local · free | Current computer, requires a compatible local GPU |
| **Training dataset** | Select the target dataset | Your cleaned dataset from 22.5 |
| **Policy** | ACT | Current default action-control policy |
| **Training steps** | `10000` | Initial value; adjust by results |

Recommended steps and episode counts (matches Chapter 11's guidance):

| Task difficulty | Task description | Episodes | Steps |
| :--- | :--- | :---: | :---: |
| Beginner | Fixed Point A to Point B | ~20 | 10,000-15,000 |
| Intermediate | Grasp and place at random positions | ~50 | 30,000-40,000 |
| Advanced | Multiple steps or long duration | ~100 | 80,000-100,000 |

Training duration depends on the GPU and steps — 20,000 cloud steps may take minutes to tens of minutes; 100,000 about five times as long. Click **Start Training** and watch progress under **Current Training Tasks**.

![Training configuration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-5-training-soarm-en.webp)

</section>

## 22.7 Model and Operation (Inference)

<section id="operation" className="section-card">
  <div className="section-title">
    <span>Operate</span>
    <h2>22.7 Model and Operation (Inference)</h2>
  </div>

Open **Model** to see training results; confirm the task and device combination match your project. Then **Operation** loads the model onto the arms:

1. **Select a model** marked as supporting the current arms;
2. **Select an inference method**: Cloud Inference or Local Inference;
3. **Start inference** and watch the task run.

![Model list](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-6-model-soarm-en.webp)

**Cloud vs. local inference:**

| Comparison | Cloud inference | Local inference |
| :--- | :--- | :--- |
| **Compute** | High-performance cloud GPU | Local CPU (GPU not supported currently) |
| **Performance depends on** | Network quality | Local CPU performance |
| **Parameters** | Action count (default 120); chunk threshold (default 0.9 — higher is more cautious, lower smoother) | Run count; time limit per run |
| **Data output** | Inference verification only | Auto-generates a dataset from the runs |
| **Cost** | Subject to platform credits | Usually free, CPU-limited |

![Model operation interface](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-7-inference-soarm-en.webp)

:::note
Before operation, confirm the arms are connected and the workspace is safe. During operation, do not disconnect or disassemble the arms. If results disappoint, return to **Dataset** — delete abnormal episodes, add valid data, and train again. That is Chapter 16's iteration loop, one more time.
:::

</section>

## 22.8 Course Conclusion

<section id="conclusion" className="section-card">
  <div className="section-title">
    <span>Conclusion</span>
    <h2>22.8 Course Conclusion</h2>
  </div>

You have now walked the SO-ARM from cardboard box to a trained, deployed policy — twice:

- **The code path (Stages 2-3):** assemble, calibrate, teleoperate, record, train ACT, evaluate, iterate;
- **The VLA paths (Stage 4):** fine-tune GR00T on your own GPU pipeline, or run the whole loop no-code on SenseCraft Robotics.

Where to go next:

- **Chapter 17's double-arm setup** if you skipped it;
- The [Robotics Wiki](https://wiki.seeedstudio.com/robotics_page/) for the wider SO-ARM ecosystem: GR00T on Jetson Thor, AmazingHand, Isaac Lab RL, LeIsaac simulation;
- Your own tasks — the entire course was scaffolding for them.

If the course helped you, star [SO-ARM100](https://github.com/TheRobotStudio/SO-ARM100) and [Seeed-Projects/lerobot](https://github.com/Seeed-Projects/lerobot) on GitHub, and share what you build in the community groups from the [course introduction](/robotics/soarm_physical_ai_course_introduction/).

</section>

</div>
