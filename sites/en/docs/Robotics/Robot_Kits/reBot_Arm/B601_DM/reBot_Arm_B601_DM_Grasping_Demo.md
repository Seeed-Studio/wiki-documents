---
description: This tutorial shows how to build a complete visual grasping demo for the reBot Arm B601-DM using Orbbec Gemini 2 and a YOLO/OBB grasping pipeline.
title: reBot Arm B601-DM Visual Grasping Demo
keywords:
  - reBot Arm
  - B601-DM
  - Grasping
  - Gemini 2
  - YOLO
  - Hand-Eye Calibration
  - Robot
slug: /rebot_arm_b601_dm_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-04-22
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-22'
updatedAt: '2026-04-22'
url: https://wiki.seeedstudio.com/rebot_arm_b601_dm_grasping_demo/
---

# reBot Arm B601-DM Visual Grasping Demo

<p align="center">
  <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</p>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Camera-Orbbec%20Gemini%202-green.svg" alt="Camera" />
    <img src="https://img.shields.io/badge/Detection-YOLO-yellow.svg" alt="YOLO" />
</p>

<p align="center">
  <strong>Depth Perception · Object Detection · Hand-Eye Calibration · Autonomous Grasping · Fully Open Source</strong>
</p>

YOLO is a widely used family of real-time object detection models that can localize and classify targets in a single forward pass. This tutorial uses YOLO together with the Orbbec Gemini 2 depth camera to build a working desktop visual grasping demo for the reBot Arm B601-DM, covering environment setup, camera integration, hand-eye calibration, and grasping validation.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## Project Features

1. **Direct grasp pose estimation from YOLO + OBB**  
   The pipeline uses detection boxes or OBB minimum-area rectangles directly and takes the short axis as the gripper opening direction, avoiding complex 3D point-cloud processing.

2. **Lightweight robotic arm and gripper integration**  
   The main grasping script reuses the `RebotArm` interface and integrates IK, trajectory control, and the gripper state machine.

3. **Open Source and Extensible**  
   All source code is open, and users can customize control algorithms and effects based on their own needs.

## Specifications

The hardware for this tutorial is provided by [Seeed Studio](https://www.seeedstudio.com/)

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Specification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Robot Arm Model</td>
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>Degrees of Freedom</td>
      <td>6-DOF + Gripper</td>
    </tr>
    <tr>
      <td>Camera Model</td>
      <td>Orbbec Gemini 2</td>
    </tr>
    <tr>
      <td>Detection Method</td>
      <td>YOLO + OBB Minimum-Area Rectangle</td>
    </tr>
    <tr>
      <td>Communication Method</td>
      <td>CAN Bus via USB2CAN adapter; USB 3.0 camera connection</td>
    </tr>
    <tr>
      <td>Operating Voltage</td>
      <td>24V DC</td>
    </tr>
    <tr>
      <td>Host Platform</td>
      <td>Ubuntu 22.04+ PC</td>
    </tr>
    <tr>
      <td>Recommended Python Version</td>
      <td>Python 3.10</td>
    </tr>
  </tbody>
</table>

## Bill of Materials (BOM)

| Component | Quantity | Included |
|--|--|--|
| reBot Arm B601-DM Robotic Arm | 1 | ✅ |
| Gripper | 1 | ✅ |
| USB2CAN Serial Bridge | 1 | ✅ |
| Power Adapter (24V) | 1 | ✅ |
| USB-C / Communication Cable | 1 | ✅ |
| Orbbec Gemini 2 Depth Camera | 1 | ✅ |
| Gemini 2 Camera Connector / Mounting Bracket | 1 | ✅ |

### Wiring

1. Connect the Gemini 2 to the host via USB 3.0.
2. Connect the USB2CAN adapter to the arm CAN bus.
3. Make sure the 24V power supply, camera, and robotic arm are all connected securely.
4. Set permissions:

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0
```

## Environment Requirements

| Item | Requirement |
|------|-------------|
| Operating System | Ubuntu 22.04+ |
| Python | 3.10 |
| Recommended Environment | conda |
| Recommended Workspace Folder | `rebot_grasp` |
| Recommended conda Environment | `rebotarm` |

## Installation Steps

### Step 0. Complete the basic robotic arm preparation first

Before starting this tutorial, please finish the content in [reBot Arm B601-DM Quick Start](https://wiki.seeedstudio.com/rebot_b601_dm_getting_started/), including robotic arm assembly, zero-point initialization, motor ID configuration, and basic connectivity checks.

### Step 1. Clone the repository

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### Step 2. Create the Python environment

```bash
conda create -n rebotarm python=3.10 -y
conda activate rebotarm
```

### Step 3. Install project dependencies

```bash
pip install -r requirements.txt
```

### Step 4. Install the robotic arm SDK

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

### Step 5. Install the Orbbec Gemini 2 SDK

This project depends on `pyorbbecsdk`. The repository does not bundle `sdk/pyorbbecsdk` by default, so you need to clone the official repository under `sdk/` yourself or install it in another way.

```bash
sudo apt-get update
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

You can also use the Gitee mirror:

```bash
cd sdk
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

For first-time use, it is recommended to install the udev rules:

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

### Step 6. Verify the dependencies

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
python -c "import motorbridge; print('motorbridge OK')"
```

For first-time Orbbec camera use, it is recommended to run `scripts/install_udev_rules.sh` inside your installed `pyorbbecsdk` directory, otherwise the camera may fail to open correctly.

## Hand-Eye Calibration

Before running the full grasping pipeline, complete the Eye-in-Hand hand-eye calibration first.

```bash
python scripts/collect_handeye_eih.py
```

Before running it, make sure the following ArUco size parameter in `config/default.yaml` matches the actual printed marker:

```yaml
calibration:
  aruco:
    marker_length_m: 0.1
```

In automatic mode, the arm traverses 50 preset poses and records a sample whenever the ArUco marker is detected stably. Even if you interrupt the process with `c` or `q`, the script still tries to compute the calibration result from the collected samples.

If you want to move the robotic arm manually during collection, use manual mode:

```bash
python scripts/collect_handeye_eih.py --manual
```

In manual mode, the arm enters gravity-compensation mode. Move the end effector to a proper viewing angle, press `Enter` to capture, and press `c` or `q` to finish and compute the result.

The calibration result is saved to:

```text
config/calibration/orbbec_gemini2/hand_eye.npz
```

Recommended sample count:

- Minimum: 5 samples
- Recommended: at least 15 samples

## Running and Debugging

### 1. Verify object detection only

```bash
python scripts/object_detection.py
```

If you need to change the detection model or classes, modify `config/default.yaml`:

```yaml
yolo:
  model_name: "yoloe-26l-seg.pt"
  device: "cpu"
  use_world: true
  custom_classes:
    - "yellow banana"
    - "water bottle"
    - "cup"
```

This step is useful to confirm:

- The camera opens correctly
- The YOLO model loads correctly
- YOLO object detection works as expected

### 2. Verify grasp estimation only

```bash
python scripts/ordinary_grasp_pipeline.py
```

If you need to adjust the grasp inference frequency or the pre-grasp retreat distance, modify:

```yaml
grasp_pipeline:
  infer_every_live: 3
  grasp:
    depth_quantile: 0.6
    pregrasp_offset_m: 0.080
```

This script does not connect to the robotic arm. It is only used to verify:

- Whether the OBB or minimum-area rectangle is reasonable
- Whether the grasp point lies near the target center area
- Whether the short-axis direction matches the expected gripper opening direction

Key controls:

- Left mouse button: inspect depth at the selected pixel
- `G`: print the current best grasp pose
- `Q` / `Esc`: exit

### 3. Run the main grasping program

```bash
python scripts/main.py
```

If you only want to validate the target pose without moving the robotic arm:

```bash
python scripts/main.py --dry-run
```

It is recommended to verify the pose and reachable workspace with `--dry-run` first before executing a real grasp.

If `reBotArm_control_py` is not in the default location, specify it in `config/default.yaml`:

```yaml
robot:
  repo_root: null
```

Keeping it as `null` is usually enough because the program will try to auto-detect `sdk/reBotArm_control_py` first.

Main program flow:

1. Initialize the robotic arm and gripper
2. Move to the ready pose. If you want to change the startup ready pose, modify `config/default.yaml`:

```yaml
robot:
  ready_pose:
    x: 0.3
    y: 0.0
    z: 0.3
    roll: 0.0
    pitch: 1.0
    duration: 3.0
```

3. Detect tabletop targets in real time
4. Estimate the grasp pose from the short axis
5. Press `G` to capture the current frame and execute grasping

Runtime keys:

- `G`: grasp the current best target
- `R`: resume live preview
- `Q` / `Esc`: exit

## FAQ

### 1. `ModuleNotFoundError: No module named 'motorbridge'`

This usually means the robotic arm SDK dependencies are not installed in the current Python environment. Please check:

```bash
conda activate rebotarm
pip install -r requirements.txt
cd sdk/reBotArm_control_py && pip install -e .
```

### 2. Pressing `G` does not execute grasping

Common causes:

- `hand_eye.npz` does not exist
- The hand-eye calibration mode is not `eye_in_hand`
- The target pose is not reachable by IK

It is recommended to run:

```bash
python scripts/main.py --dry-run
```

### 3. The grasp depth is unstable

You can try adjusting:

- `grasp_pipeline.grasp.depth_quantile`
- The installation height of the camera relative to the workspace
- Reflective properties of the target surface

## Contact

- Technical support: [Submit an Issue](https://github.com/EclipseaHime017/reBot-DevArm-Grasp/issues)
- Project page: [GitHub](https://github.com/EclipseaHime017/reBot-DevArm-Grasp)
- Forum: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## References

- [reBot Arm B601-DM Quick Start](https://wiki.seeedstudio.com/rebot_b601_dm_getting_started/)
- [Getting Started with Pinocchio and MeshCat for reBot Arm B601-DM](https://wiki.seeedstudio.com/rebot_arm_b601_dm_pinocchio_meshcat/)
- [Getting Started with LeRobot-based reBot Arm B601-DM and reBot 102 Leader](https://wiki.seeedstudio.com/rebot_arm_b601_dm_lerobot/)
- [Orbbec Gemini 2 Product Page](https://www.orbbec.com/products/stereo-vision-camera/gemini-2/)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [Orbbec SDK v2 API Guide](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/)
- [pyorbbecsdk Repository](https://github.com/orbbec/pyorbbecsdk)
- [pyorbbecsdk Documentation](https://orbbec.github.io/pyorbbecsdk/index.html)
- [Orbbec ROS2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main)
