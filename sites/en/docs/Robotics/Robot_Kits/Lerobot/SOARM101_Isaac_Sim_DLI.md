---
title: SO-ARM101 Isaac Sim DLI Simulation and Data Collection
description: Use Isaac Sim 6.1 to run the SO-ARM101 vial-sorting scene, teleoperate the robot, link a physical follower, and collect LeRobot data.
keywords:
  - SO-ARM101
  - Isaac Sim
  - NVIDIA DLI
  - LeRobot
slug: /soarm101_isaac_sim_dli
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/isaac%20sim/isaac_sim_dli.gif
last_update:
  date: 11/16/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/soarm101_isaac_sim_dli/
createdAt: '2026-11-16'
updatedAt: '2026-11-16'
---

import '/src/css/rebot-wiki-style.css';
import '/src/css/soarm101-pinocchio-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SO-ARM101 Data Collection with Isaac Sim 6.1

<div className="rebot-page soarm-guide">

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/isaac%20sim/isaac_sim_dli.gif" width={800} height={500} style={{height: 'auto'}} alt="SO-ARM101 data collection demo in Isaac Sim" />
</div>

Use Isaac Sim 6.1 to sort vials with the SO-ARM101, record data in LeRobot format, and validate ACT training. You can use the keyboard, connect a physical leader, or link a physical follower with the simulation.

## Recommended Learning Path

<div className="rebot-step-flow soarm-learning-path">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4><a href="#2-install-isaac-sim-61">Set up the environment</a></h4>
    <p>Install Isaac Sim, download the scene assets, and set up LeRobot.</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4><a href="#5-connect-and-calibrate-the-so-arm101">Calibrate the arms</a></h4>
    <p>Check serial ports and calibrate any physical arms you use.</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4><a href="#6-start-teleoperation-and-collect-data">Teleoperate and record</a></h4>
    <p>Choose a control mode and record the vial-sorting task.</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4><a href="#7-inspect-visualize-and-replay-the-dataset">Inspect and replay</a></h4>
    <p>Check both camera streams against the actions, then replay an episode.</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">
    <h4><a href="#9-train-an-act-policy">Train ACT</a></h4>
    <p>Verify the training workflow with your recordings.</p>
  </div>
</section>

</div>

## 1. Requirements

:::warning
**GPU requirement.** Use an NVIDIA RTX GPU with at least 12 GB of VRAM, such as the RTX 3080 12 GB or RTX 4070 Ti SUPER 16 GB, and a recent driver.

The robot, three camera views, and physics simulation run together. With 8 GB of VRAM, the default renderer can overwhelm the desktop compositor within minutes. The display can freeze and stop responding to the mouse and keyboard, requiring a forced restart. Isaac Sim itself may still be running and writing logs. During development, an 8 GB laptop froze twice even with the built-in mitigations and `--single-viewport` enabled. Use a GPU with at least 12 GB of VRAM for reliable operation.

If your GPU has 8 GB of VRAM, see section 10 for ways to reduce rendering load. The system may still freeze.
:::

| Item | Requirement |
| --- | --- |
| Operating system | Ubuntu 22.04. Isaac Sim 6.1 also supports Ubuntu 24.04. |
| GPU and driver | NVIDIA RTX with at least 12 GB of VRAM and a recent NVIDIA driver. |
| Simulation software | Isaac Sim 6.1 standalone package. |
| Python environment | Install [uv](https://docs.astral.sh/uv/getting-started/installation/) to create the Python 3.12 virtual environment. |
| Physical arms | Connect an SO-ARM101 leader arm over USB for physical teleoperation. Connect a follower arm as well for physical follower mode. |

Use the following directory layout.

```text
~
├── isaacsim/                 # Isaac Sim 6.1 installation directory
└── rebot_lerobot/
    └── .venv/bin/python      # LeRobot virtual environment
```

## 2. Install Isaac Sim 6.1

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Extract and install</h4>

Download `isaac-sim-standalone-6.1.0-linux-x86_64.zip` (about 12.4 GB) from the [NVIDIA download page](https://docs.isaacsim.omniverse.nvidia.com/latest/installation/download.html). Extract it to `~/isaacsim` and run the post-install script.

```bash
unzip isaac-sim-standalone-6.1.0-linux-x86_64.zip -d ~/isaacsim
cd ~/isaacsim
./post_install.sh
```

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Check compatibility</h4>

Run the compatibility checker to confirm that your system meets the requirements.

```bash
./isaac-sim.compatibility_check.sh     # Expected output: System checking result: PASSED
```

  </div>
</section>

</div>

- On the first launch with `./isaac-sim.sh`, shader compilation may take several minutes.
- If you installed Isaac Sim elsewhere, set `ISAACSIM_ROOT` to the installation directory before launching the simulation. See section 6.
- IOMMU, DLSS-RR, and PCIe link width warnings in the startup log do not prevent the tutorial from running.

## 3. Get the Code (Git LFS Required)

:::warning
The robot, camera mount, workbench, vials, and vial rack use USD assets stored in Git LFS. Install `git-lfs` before cloning so Isaac Sim can load the full assets.
:::

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Clone the repository and download the assets</h4>

```bash
sudo apt update
sudo apt install -y git-lfs

cd ~
git clone https://github.com/Seeed-Projects/rebot-arm-dli-isaacsim.git
cd rebot-arm-dli-isaacsim
git lfs install
git lfs pull
```

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Verify the USD files</h4>

Check that the assets downloaded correctly.

```bash
du -sh assets/
# Expected size: about 157 MB

head -c 8 assets/so101/SO-ARM101-USD-NO-CAMERA.usd
# Expected output: PXR-USDC. If you see version, run git lfs pull again.
```

  </div>
</section>

</div>

## 4. Set Up the LeRobot Environment

```bash
mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
sudo apt update
sudo apt install -y ffmpeg

# Clone the repository
git clone https://github.com/Seeed-Projects/lerobot.git

# Create a virtual environment with Python 3.12
uv venv --python 3.12 .venv
source .venv/bin/activate

# Install LeRobot with the dataset and visualization extras
uv pip install -e "./lerobot[dataset,viz]"

# Install the SO-ARM101 servo dependency
uv pip install feetech-servo-sdk
```

> The `[dataset,viz]` extras install dependencies including `datasets`, `Pillow`, `av`, and `rerun`. If these dependencies are missing, episode conversion fails and the terminal displays `[dataset-error]`.

## 5. Connect and Calibrate the SO-ARM101

Connect the physical leader arm to power and plug in its USB data cable. Run `lerobot-find-port` to identify the ports for the leader and follower. The examples use `/dev/ttyACM1` for the leader and `/dev/ttyACM0` for the follower. Substitute your actual port paths. Save the calibration under `so101_leader` and `so101_follower` to match the project's default device IDs.

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### Calibrate the Leader Arm

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=so101_leader
```

When prompted, move each joint to the midpoint of its range and press Enter. Then move each joint through its full range of motion and press Enter again to save. See the [LeRobot SO-101 calibration demonstration](https://huggingface.co/docs/lerobot/so101#calibrate).

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### Calibrate the Follower Arm

Calibrate the follower before linking it with the simulation. Use the same midpoint and full-range procedure and wait for the command to save the calibration and exit.

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=so101_follower
```

  </div>
</section>

</div>

## 6. Start Teleoperation and Collect Data

Open the project directory. If Isaac Sim is installed elsewhere, run `export ISAACSIM_ROOT=/path/to/isaacsim` in the current terminal.

```bash
cd ~/rebot-arm-dli-isaacsim
```

### Choose a Teleoperation Mode

<Tabs>
<TabItem value="leader" label="Physical leader">

Use the physical leader to control the simulated arm. The `src=LEADER` status indicates that the simulation is following the leader.

```bash
./run_so101.sh --leader-port /dev/ttyACM1 --no-follower
```

</TabItem>
<TabItem value="follower" label="Physical follower">

To link the physical follower, first place both physical arms in similar poses, then run the following command. The `src=FOLLOWER` status indicates that the simulation is following the follower's measured joint positions.

```bash
./run_so101.sh --leader-port /dev/ttyACM1 --follower-port /dev/ttyACM0
```

</TabItem>
<TabItem value="keyboard" label="Keyboard">

To control the simulated arm without a physical leader, start the simulation, click the 3D viewport, and press `Y` to enter keyboard mode.

```bash
./run_so101.sh --no-start-bridge
```

| Key | Action in keyboard mode |
| --- | --- |
| `W` / `S` / `A` / `D` | Move the end effector forward, back, left, or right |
| `↑` / `↓` | Raise or lower the end effector |
| `Q` / `E` | Rotate the wrist |
| `Z` / `C` | Adjust the end effector pitch |
| `G` | Toggle the gripper |
| `B` | Switch between 5 mm and 15 mm steps |

</TabItem>
</Tabs>

### Record the Vial-Sorting Task

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Reset the scene</h4>

Click the simulation viewport and press `R` to reset the three vials and randomize the scene again.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Start recording</h4>

Press `S` in leader mode or `T` in keyboard mode to start recording.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>Sort the vials</h4>

Place the three vials upright in the rack, one at a time. As the gripper approaches a vial, the guide line helps you judge the grasping distance. The terminal reports `[GRASP]` and `[RELEASE]`.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4>Save the episode</h4>

Press the record key again to save the episode. In leader mode, you can also press `C` to discard it.

  </div>
</section>

</div>

The dataset is written to `~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side` with the ID `local/so101_vials_front_side` and the task text `Put the three vials into the vial rack`. Each recording contains SO-ARM101 joint and gripper data along with 30 FPS footage from the wrist and overhead cameras.

### Camera Views

| ![front](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_front.png) | ![side](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_side.png) | ![external](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_external.png) |
| --- | --- | --- |
| Wrist camera `front` (recorded) | Side camera `side` (for viewing) | Overhead camera `external` (recorded) |

## 7. Inspect, Visualize, and Replay the Dataset

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### Check Video and Action Synchronization

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-dataset-viz \
  --repo-id local/so101_vials_front_side \
  --root ~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side \
  --mode local \
  --episode-index 0
```

Check that both videos stay synchronized with the actions and states. Look for black frames, frozen frames, and objects that obscure the view.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### Replay Actions in Isaac Sim

In the first terminal, start the simulation receiver.

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --no-start-bridge --no-recording --no-dr
```

In a second terminal, replay episode 0. Add `--loop` for continuous playback.

```bash
source ~/rebot_lerobot/.venv/bin/activate
cd ~/rebot-arm-dli-isaacsim
PYTHONPATH=scripts python scripts/replay_episode_so101.py --episode 0
```

  </div>
</section>

</div>

## 8. Validate Without Hardware

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Check joint tracking and recording</h4>

The following commands use a simulated leader to check joint tracking. The second command also checks both cameras, H.264 encoding, and LeRobot dataset output.

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --test
./run_so101.sh --headless --test --test-recording
```

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Generate a separate test dataset</h4>

To generate two simulated recordings, run the following command. The example writes validation data to a separate directory from your regular recordings.

```bash
./run_so101.sh --headless --auto-record 2 \
  --dataset-root datasets/so101_vials_smoke_test \
  --repo-id local/so101_vials_smoke_test
```

  </div>
</section>

</div>

## 9. Train an ACT Policy

Run 60 steps of ACT training on data from the regular recording directory to verify the training workflow. The trained model and related files are saved in `checkpoints/last/pretrained_model/` inside the output directory.

```bash
source ~/rebot_lerobot/.venv/bin/activate
lerobot-train \
  --policy.type=act \
  --policy.push_to_hub=false \
  --dataset.repo_id=local/so101_vials_front_side \
  --dataset.root=~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side \
  --output_dir=~/rebot_lerobot/outputs/train/act_so101 \
  --steps=60 --batch_size=4 --num_workers=2
```

## 10. Known Issues

The SO-ARM101 scene uses Path Tracing by default. If rendering load is too high, use `--single-viewport` to show only the main viewport while still recording both cameras. Use `--realtime-renderer` to switch to real-time rendering. Real-time footage may be noisier.

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --no-start-bridge --no-recording --single-viewport --realtime-renderer
```

## 11. Troubleshooting

<details className="rebot-demo-details">
<summary>Cannot access the serial port</summary>

Check the device port and data cable. If your account lacks serial port permissions, run `sudo usermod -aG dialout "$USER"`, sign out and back in, and try again.

</details>

<details className="rebot-demo-details">
<summary>The simulated and physical arms have different poses</summary>

Verify the serial ports and calibration IDs for both arms. Recheck the calibration midpoint and the range of motion for each joint.

</details>

<details className="rebot-demo-details">
<summary>Isaac Sim Python cannot be found</summary>

Check that the installation directory contains `python.sh` and set `ISAACSIM_ROOT` to that directory.

</details>

<details className="rebot-demo-details">
<summary>Scene assets are missing</summary>

Run `git lfs pull` from the project directory and check the assets as described in section 3.

</details>

<details className="rebot-demo-details">
<summary>Recording reports <code>[dataset-error]</code></summary>

Check the LeRobot virtual environment and the `[dataset,viz]` extras from section 4.

</details>

<details className="rebot-demo-details">
<summary>The terminal reports <code>[watchdog] Leader data timed out</code></summary>

Check the leader's USB connection and serial bridge process. The simulation holds its last target while communication is interrupted.

</details>

<details className="rebot-demo-details">
<summary>Upstream MIT License</summary>

MIT License

Copyright (c) 2026 reBot Arm DLI Isaac Sim contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

</details>

</div>
