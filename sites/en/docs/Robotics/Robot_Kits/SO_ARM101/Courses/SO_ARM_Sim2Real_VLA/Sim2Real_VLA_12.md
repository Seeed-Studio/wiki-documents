---
description: "Chapter 12 of the SO-ARM101 Sim-to-Real VLA Course (optional) — collect data from Isaac Sim: teleoperate the white SO-ARM101 digital twin, record LeRobot v3 episodes, replay, and verify."
title: Chapter 12 - Collect Data from Isaac Sim (Optional)
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Isaac Sim
  - Digital Twin
  - Data Collection
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_12
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_12/
---

import '/src/css/rebot-wiki-style.css';

<div class="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 12 · Optional · Sim data</span>
    <h2>12. Collect Data from Isaac Sim</h2>
    <p>
      Teleoperate the white SO-ARM101 digital twin with the same leader arm,
      record episodes in the exact same dataset schema, and validate the
      whole loop without occupying the real robot.
    </p>
    <div className="hero-actions">
      <a href="#process">Data flow</a>
      <a href="#cameras">Camera views</a>
      <a href="#requirements">Requirements</a>
      <a href="#launch">Launch</a>
      <a href="#capture">Capture</a>
      <a href="#replay">Replay</a>
    </div>
  </div>
</section>

:::note This chapter is optional
It is recommended to run the complete real-world loop first (collect data →
train → evaluate in the real environment, Chapters 9–11). Simulation data
does not occupy the real robot and can scale scene and lighting diversity
at low cost, so it works well as a supplement once the real pipeline is
verified.
:::

## 12.1 Learning Objectives and Data Flow

<section id="process" className="section-card">
  <div className="section-title">
    <span>Data link</span>
    <h2>12.1 Learning Objectives and Data Flow</h2>
  </div>

- Learn about the NVIDIA Isaac Sim simulation tool;
- Learn the twin's camera layout: the wrist-mounted `front` camera and the
  overhead `external` camera — the same two streams the real dataset uses;
- Generate a complete VLA training dataset in the twin.

The data link of the SO-ARM101 project is as follows:

```text
SO-101 Leader (or keyboard IK)
       | USB serial
       ▼
LeRobot Python bridge -- UDP 127.0.0.1:5015 --> Isaac Sim white SO-ARM101
                                                        |
                                   +--------------------+--------------------+
                                   |                                         |
                                   ▼                                         ▼
                              action/state                        front + external cameras
                                   |                                         |
                                   +--------------------+--------------------+
                                                        |
                                                        ▼
                                                 LeRobot Dataset v3
```

The leader only provides manual control commands; the simulated arm does
not autonomously execute grasps. The system simultaneously records:

- `action`: the six leader joint commands;
- `observation.state`: the six simulated joint values in leader space;
- `observation.images.front`: the camera that moves with the wrist;
- `observation.images.external`: the overhead view above the workspace;
- the task text (`Put the three vials into the vial rack`), randomization
  parameters, and task success status.

The default acquisition frequency is 30 FPS and both recorded cameras are
640 × 480 — identical to the real dataset of Chapter 9.

</section>

## 12.2 Camera Views

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>front + external</span>
    <h2>12.2 Camera Views</h2>
  </div>

After pressing `R` to reset the scene, the two camera views look like the
real robot's: `front` is the wrist-mounted stream that moves with the arm,
and `external` is the fixed overhead view — both are the streams recorded
into the dataset.

:::note Wrist hardware in view is expected
The gripper and camera mount visible in the lower part of the `front` view
are intentional — the wrist camera sits at the front of the lens and looks
along the arm, exactly like the real wrist bracket from Chapter 8. Use
`./run_so101.sh --single-viewport` to keep only the main viewport and hide
the floating camera windows; recording is unaffected.
:::

</section>

## 12.3 Environmental Requirements

<section id="requirements" className="section-card">
  <div className="section-title">
    <span>GPU and install</span>
    <h2>12.3 Environmental Requirements</h2>
  </div>

- Ubuntu 22.04;
- NVIDIA RTX GPU — NVIDIA recommends 12 GB+ VRAM for Isaac Sim work;
- Isaac Sim 6.1 standalone installed and launchable;

Install Isaac Sim once:

```bash
# Download the Isaac Sim 6.1 standalone zip for Linux from NVIDIA,
# then extract and launch it once:
mkdir -p ~/isaacsim && cd ~/isaacsim
unzip ~/Downloads/isaac-sim-standalone-6.1.0-linux-x86_64.zip
./python.sh -c "print('isaac ok')"
```

- The LeRobot environment from Chapter 7 (`~/rebot_lerobot/.venv`), with
  the dataset extras so recorded episodes convert:
  `uv pip install -e "./lerobot[dataset,viz]"`. Without them, recorded
  episodes fail to convert and the terminal prints `[dataset-error]`;
- `git-lfs` installed — the project's USD assets are stored with Git LFS.

:::caution 8 GB laptop GPUs
On 8 GB GPUs (most laptop GPUs) the render load can starve the desktop
compositor and freeze the machine, even with the project's built-in
mitigations (Real-Time rendering, 640×360, 30 Hz cap). Use the mitigation
flags the project ships, or run headless collection instead.
:::

</section>

## 12.4 Download the Source Code

<section id="source" className="section-card">
  <div className="section-title">
    <span>Project clone</span>
    <h2>12.4 Download the Source Code</h2>
  </div>

```bash
sudo apt update
sudo apt install -y git-lfs

cd ~
git clone https://github.com/yuyoujiang/rebot-arm-dli-isaacsim.git
cd rebot-arm-dli-isaacsim
git lfs install
git lfs pull
```

:::caution USD assets use Git LFS
Without `git lfs pull` the clone only contains small pointer files, and
Isaac Sim cannot open the scene.
:::

</section>

## 12.5 Launch Isaac Sim Teleoperation

<section id="launch" className="section-card">
  <div className="section-title">
    <span>First build</span>
    <h2>12.5 Launch Isaac Sim Teleoperation</h2>
  </div>

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --leader-port /dev/ttyACM0
```

If there is only one serial device, the program detects it automatically:

```bash
./run_so101.sh
```

If Isaac Sim is installed in a different directory:

```bash
ISAACSIM_ROOT=/path/to/isaacsim ./run_so101.sh --leader-port /dev/ttyACM0
```

The very first launch builds `scenes/so101_vials_sorting.usda` and compiles
shaders, which takes a few minutes; this is normal.

No leader hardware? The keyboard IK mode drives the end effector directly:

1. Click the 3D viewport once (keyboard focus);
2. Press `Y` — the terminal prints
   `[teleop] Control source: KEYBOARD (IK: WASD ...)`;
3. `W`/`S`/`A`/`D` move in the table plane, arrow keys move up and down,
   `Z`/`C` pitch the tool, `G` toggles the gripper.

</section>

## 12.6 Capture an Episode

<section id="capture" className="section-card">
  <div className="section-title">
    <span>R · S · C</span>
    <h2>12.6 Capture an Episode</h2>
  </div>

Ensure the Isaac Sim viewport has keyboard focus, then:

1. Press `R` to reset the scene. The three vials are repositioned, and
   randomization of objects and lighting is applied;
2. Check the two camera views and the initial vial positions;
3. Press `S` (leader mode) or `T` (keyboard mode) to start recording:

```text
[record] Episode started at 30 FPS -> .../datasets/so101_vials_front_side
```

4. Operate the leader and put the three vials into the vial rack; the
   grasp assist attaches a vial when the gripper closes near it
   (`[GRASP]` in the terminal) and releases it when you open the gripper
   over the rack (`[RELEASE]`);
5. Press `S`/`T` again to finish and save;
6. Wait for the background encoding:

```text
[dataset] Episode saved; total completed: 1
```

The system converts temporary JPEGs, actions and states into LeRobot
Dataset v3 in the background; you can start the next episode during
encoding.

Keyboard shortcuts:

| Key | Function |
|---|---|
| `R` | Reset the three vials and re-randomize them |
| `S` / `T` | Start recording; press again while recording to end and save |
| `C` | Cancel the current episode without writing it to the dataset |
| `Y` | Toggle between leader mode and keyboard IK mode |
| `B` | Toggle slow/fast keyboard step size |

If a vial falls, a grasp fails, or the motion quality is poor, press `C`
to discard the episode, then `R` and record again.

</section>

## 12.7 Inspect and Visualize the Dataset

<section id="viz" className="section-card">
  <div className="section-title">
    <span>Dataset visualizer</span>
    <h2>12.7 Inspect and Visualize the Dataset</h2>
  </div>

```bash
cd ~/rebot_lerobot
source .venv/bin/activate

lerobot-dataset-viz \
  --repo-id local/so101_vials_front_side \
  --root ~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side \
  --episode-index 0 \
  --display-compressed-images true
```

Check episodes in sequence: actions, states, and both video streams must be
synchronized, with no black frames, frozen frames, or severe occlusion.

</section>

## 12.8 Replaying Actions in Isaac Sim

<section id="replay" className="section-card">
  <div className="section-title">
    <span>Closed sim loop</span>
    <h2>12.8 Replaying Actions in Isaac Sim</h2>
  </div>

First start an Isaac Sim receiver that does not connect to the leader, does
not record, and has randomization disabled:

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --no-start-bridge --no-recording --no-dr &
```

Then play back episode 0 from a second terminal:

```bash
cd ~/rebot-arm-dli-isaacsim
PYTHONPATH=scripts ~/rebot_lerobot/.venv/bin/python \
  scripts/replay_episode_so101.py --episode 0
```

Loop playback: add `--loop`. The replay script sends the dataset's
`action` column to check the arm's trajectory; it is not a video player —
inspect camera content with the dataset visualizer above. The terminal
prints `[teleop:LIVE]` while actions stream and `[SUCCESS]` when all three
vials settle inside the rack for 0.35 s.

</section>

## 12.9 Verify Without the Leader (Optional)

<section id="no-leader" className="section-card">
  <div className="section-title">
    <span>Headless check</span>
    <h2>12.9 Verify Without the Leader (Optional)</h2>
  </div>

If the leader arm is not available yet, the built-in scripted recorder
validates physics, cameras, and dataset writing headlessly:

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --auto-record 2
```

This records two short episodes into `datasets/so101_vials_front_side` and
exits. The final `[dataset] Episode saved` message means the whole chain —
scene build, physics, cameras, dataset conversion — works with no hardware.

</section>

## 12.10 Configuration and Reference Materials

<section id="config" className="section-card">
  <div className="section-title">
    <span>Config files</span>
    <h2>12.10 Configuration and Reference Materials</h2>
  </div>

Main configuration files of the SO-ARM101 project:

- `config/teleop_config_so101.json`: serial port, UDP, joint mapping and
  grasping assistance;
- `config/domain_randomization_so101.json`: object, lighting, camera and
  dataset parameters;
- `config/grasp_config_so101.json`: scene objects, physical parameters and
  task success conditions.

Continue with [Chapter 13 — Datasets Augment (Optional)](Sim2Real_VLA_13.md)
or return to the real-robot path at
[Chapter 14 — Setup Your Jetson Edge Device](Sim2Real_VLA_14.md).

</section>

</div>