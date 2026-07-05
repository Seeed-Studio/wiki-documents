---
description: This tutorial shows how to build a complete visual grasping demo for the reBot Arm B601-RS using an RGB-D camera, YOLO / OBB, and optional GraspNet grasping pipelines.
title: reBot Arm B601-RS Visual Grasping Demo
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif
keywords:
  - reBot Arm
  - B601-RS
  - Grasping
  - RGB-D
  - YOLO
  - GraspNet
  - Hand-Eye Calibration
  - Robot
slug: /rebot_arm_b601_rs_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-15'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/rebot_arm_b601_rs_grasping_demo/
---

# reBot Arm B601-RS Visual Grasping Demo

<div className="rebot-page">
  <section className="doc-hero">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>Build a desktop visual grasping system with RGB-D vision, YOLO, and B601-RS</h2>
      <p>
        This guide walks through a complete visual grasping demo: environment setup, camera integration,
        robotic arm SDK configuration, hand-eye calibration, YOLO / OBB / GraspNet grasp estimation,
        and real robotic arm execution.
      </p>
      <div className="hero-actions">
        <a href="#quick-path">View Workflow</a>
        <a href="#run">Run the Demo</a>
      </div>
    </div>
    <div className="hero-card">
      <strong>Recommended Setup</strong>
      <span>reBot Arm B601-RS</span>
      <span>Orbbec Gemini 2 or RealSense D435i / D405</span>
      <span>Ubuntu 22.04 + Python 3.10</span>
    </div>
  </section>

  
<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Warning: Clear the Robot Workspace Before Running</strong>
    <p>Before running any program that moves the robotic arm, clear all valuable items, fragile objects, tools, cables, and unrelated objects within a <strong>1-meter radius</strong> of the robot workspace. During debugging and operation, personnel must stay away from the robot motion range.</p>
    <ul>
      <li>Do not touch joints, motors, links, the gripper, or the end effector after the robotic arm is powered on.</li>
      <li>Before running calibration, MotorBridge, teleoperation, dataset collection, IK control, trajectory control, gravity compensation, visual grasping, ROS2 actions, or MoveIt execution, make sure the robotic arm is firmly fixed.</li>
      <li>If abnormal motion, noise, vibration, loose cables, poor power contact, or communication loss occurs, stop the program immediately and power off the system before inspection.</li>
      <li>Always power off the system before plugging or unplugging motor cables, CAN cables, PCAN-USB adapters, XT30 connectors, or power connectors.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="visual grasping navigation">
    <a href="#quick-path">Workflow</a>
    <a href="#hardware">Hardware</a>
    <a href="#install">Installation</a>
    <a href="#camera-sdk">Camera SDK</a>
    <a href="#graspnet">GraspNet</a>
    <a href="#run">Run & Debug</a>
    <a href="#config">Configuration</a>
    <a href="#faq">FAQ</a>
  </nav>

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="reBot Arm B601-RS visual grasping demo" />
</p>

<p align="center">
  <strong>Depth Perception · Object Detection · Hand-Eye Calibration · Autonomous Grasping · Fully Open Source</strong>
</p>

<div className="video-placeholder">Video link to be added: B601-RS visual grasping demo</div>

<section id="quick-path" className="section-card">

<div className="step-title-row"><span className="step-pill">Workflow</span><div><h2>Recommended Workflow</h2><p>Follow the stages below to validate perception, calibration, and real-arm execution safely.</p></div></div>

<div className="path-grid">
  <div className="path-card"><span>Step 1</span><strong>Prepare Hardware</strong><p>Confirm the arm version, power supply, PCAN-USB / SocketCAN interface, and RGB-D camera connection.</p></div>
  <div className="path-card"><span>Step 2</span><strong>Install Environment</strong><p>Create the conda environment and install the arm SDK, camera SDK, YOLO, and optional GraspNet.</p></div>
  <div className="path-card"><span>Step 3</span><strong>Complete Hand-Eye Calibration</strong><p>Collect ArUco poses and solve the Eye-in-Hand calibration transform.</p></div>
  <div className="path-card"><span>Step 4</span><strong>Run the Grasping Demo</strong><p>Validate perception and target poses with dry-run first, then execute with the real arm.</p></div>
</div>

:::tip
Complete the quick-start guide for your arm before running this demo: [B601-RS Quick Start](https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/).
:::

</section>

<section className="section-card">
  <div className="section-title">
    <span>Detailed Steps</span>
    <h2>Detailed implementation stages</h2>
    <p>Use this checklist to move from perception-only validation to safe real-arm execution.</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>Finish quick start first</strong><p>Verify power, PCAN-USB / SocketCAN, zero position, and basic motion before connecting perception to robot motion.</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>Prepare RGB-D vision</strong><p>Install the camera SDK and verify stable color / depth streams before calibration.</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>Calibrate eye-in-hand</strong><p>Collect enough ArUco samples and validate hand-eye transformation accuracy.</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>Validate perception only</strong><p>Run OBB or GraspNet demos without robot motion to check pose estimates.</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>Run dry-run</strong><p>Check target pose, IK reachability, pre-grasp pose, and collision risk.</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>Enable real grasping</strong><p>Only after all previous checks pass, enable the arm and run real grasp execution.</p></div>
  </div>
</section>


<section className="section-card">

## Project Introduction

**reBot Arm B601-RS Visual Grasping Demo** is an open-source visual grasping project built around an RGB-D depth camera and the reBot robotic arm control library. The system is designed for the B601-RS configuration. It uses YOLO for real-time desktop object detection, estimates grasp orientation with an OBB minimum-area rectangle, transforms camera-frame grasp points into the robot base frame through hand-eye calibration, and finally drives the robotic arm to complete autonomous grasping.

### Core Capabilities

<div className="feature-grid">
  <div className="path-card"><span>Step 1</span><strong>RGB-D Depth Perception</strong><p>Supports Orbbec Gemini 2, RealSense D435i / D405, and similar RGB-D cameras.</p></div>
  <div className="path-card"><span>Step 2</span><strong>YOLO Object Detection</strong><p>Supports open-vocabulary classes and standard YOLO segmentation models.</p></div>
  <div className="path-card"><span>Step 3</span><strong>OBB Grasp Estimation</strong><p>Uses the short axis of the minimum-area rectangle for gripper orientation and depth quantiles for grasp height.</p></div>
  <div className="path-card"><span>Step 4</span><strong>GraspNet 6D Grasping</strong><p>Optionally adds richer 6D grasp candidates for more complex objects.</p></div>
  <div className="path-card"><span>Step 5</span><strong>Eye-in-Hand Calibration</strong><p>Uses TSAI hand-eye calibration to transform camera-frame grasp points to the robot base frame.</p></div>
  <div className="path-card"><span>Step 6</span><strong>Real Arm Execution</strong><p>Uses reBotArm_control_py for IK, trajectory control, and gripper force control.</p></div>
</div>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<section id="hardware" className="section-card">

<div className="step-title-row"><span className="step-pill">Step 1</span><div><h2>Hardware Configuration</h2><p>Confirm the arm, RGB-D camera, power, and SocketCAN interface before installing software.</p></div></div>

| Component | Model / Requirement |
|------|------------|
| Robotic Arm | reBot Arm B601-RS |
| Depth Camera | Orbbec Gemini 2, Intel RealSense D435i / D405 |
| Communication Interface | PCAN-USB / SocketCAN, CAN bitrate 1 Mbps |
| Host | Ubuntu 22.04+, Python 3.10, x86_64 |

### Wiring and Permissions

```bash
sudo chmod a+rw /dev/bus/usb/*/*   # Depth camera USB permissions
```

For B601-RS, bring up the CAN interface before running calibration or grasping scripts:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0
```

:::danger
B601-RS uses a 48V DC power supply. Make sure the power supply, PCAN-USB / SocketCAN interface, and SDK configuration match before running the demo.
:::

</section>

<section id="install" className="section-card">

<div className="step-title-row"><span className="step-pill">Step 2</span><div><h2>Environment Installation</h2><p>Create the project environment and install the robot control library.</p></div></div>

| Item | Requirement |
|------|------|
| OS | Ubuntu 22.04+ |
| Python | 3.10 |
| Recommended Environment | conda |
| Recommended Workspace | `rebot_grasp` |
| Recommended Environment Name | `rebotarm` |

### Step 1. Clone the Repository

Prefer the official Seeed-Projects repository:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

You can also use the current development repository:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### Step 2. Create and Activate the conda Environment

```bash
conda env create -f environment.yml
conda activate rebotarm
```

### Step 3. Install the Robotic Arm Control Library

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

If `pip install -e .` reports `Multiple top-level packages discovered in a flat-layout`, add the following package discovery configuration to `pyproject.toml` in `reBotArm_control_py`:

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

For B601-RS, confirm the following in `sdk/reBotArm_control_py/config/rebotarm.yaml`:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

</section>

<section id="camera-sdk" className="section-card">

<div className="step-title-row"><span className="step-pill">Step 3</span><div><h2>Install the Depth Camera SDK</h2><p>Bring up the RGB-D camera and verify the SDK before calibration.</p></div></div>

<details open className="content-details">
<summary>Orbbec Gemini 2</summary>

Orbbec Gemini 2 depends on `pyorbbecsdk`. The recommended approach is to install the prebuilt Python package:

```bash
pip install pyorbbecsdk2
```

You can also build from source:

```bash
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev
cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

For mainland China users:

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

For first-time use, install udev rules:

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

</details>

<details className="content-details">
<summary>Intel RealSense D435i / D405</summary>

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

If you need the full RealSense toolkit or udev rules, refer to the official Intel RealSense SDK documentation and install `librealsense2`.

</details>

</section>

<section id="graspnet" className="section-card">

<div className="step-title-row"><span className="step-pill">Optional</span><div><h2>Configure GraspNet</h2><p>Use this path when you need 6D grasp candidates beyond the YOLO / OBB pipeline.</p></div></div>

Skip this section if you only want to run the YOLO + OBB grasping pipeline first. Configure GraspNet when you need richer 6D grasp pose candidates.

Before building the local operators, make sure `nvcc` is available and matches the CUDA version used by PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

If `nvcc` is missing or does not match `torch.version.cuda`, install a CUDA compiler that matches your current PyTorch CUDA version. For example, when PyTorch reports `13.0`:

```bash
conda install -c nvidia cuda-nvcc=13.0
```

Build GraspNet local operators:

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline
pip install open3d tensorboard Pillow tqdm

export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="12.0"
export CPATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
pip install .
cd ../../..
```

### Configure the Pretrained Model

Download the official GraspNet pretrained weight `checkpoint-rs.tar`, and place it at:

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

Then verify `config/default.yaml`:

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

</section>

<section className="section-card">

## Directory Structure

```text
rebot_grasp/
├── config/
│   ├── default.yaml
│   └── calibration/
│       └── <camera_type>/
│           ├── intrinsics.npz
│           └── hand_eye.npz
├── drivers/
│   ├── camera/
│   └── robot/
├── calibration/
│   ├── aruco_pose.py
│   └── hand_eye.py
├── utils/
├── scripts/
│   ├── main.py
│   ├── set.py
│   ├── ordinary_grasp_pipeline.py
│   ├── graspnet_camera_demo.py
│   ├── grasp.py
│   └── collect_handeye_eih.py
├── sdk/
└── environment.yml
```

</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<section id="run" className="section-card">

<div className="step-title-row"><span className="step-pill">Step 4</span><div><h2>Run and Debug</h2><p>Start with dry-run and perception-only scripts, then enable real-arm execution.</p></div></div>

### 0. Confirm Arm Version and SDK Configuration

In `sdk/reBotArm_control_py/config/rebotarm.yaml`, select the corresponding hardware configuration:

```yaml
hardware_yaml: rebotarm_dm.yaml
```

Or:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

### 1. Hand-Eye Calibration (Required Before Grasping)

```bash
python scripts/collect_handeye_eih.py
```

In automatic mode, the arm traverses preset poses and samples automatically when ArUco detection is stable. At least 5 samples are required, and 15 or more samples are recommended for better stability.

To manually move the arm for sample collection:

```bash
python scripts/collect_handeye_eih.py --manual
```

:::tip
If the grasping accuracy is not good enough after calibration, adjust `X`, `Y`, and `Z` in `calibration.hand_eye_compensation_m` in `config/default.yaml`.
:::

### 2. Main Grasping Program: `scripts/main.py`

Complete visual grasping flow:

1. Initialize the RGB-D camera and confirm the image stream is available.
2. Enable the arm and gripper, then move to the ready pose.
3. Run real-time camera preview with YOLO object detection and instance segmentation.
4. Estimate gripper orientation using the OBB short axis and estimate grasp height using a depth quantile.
5. Press `G` to freeze the frame and compute the target arm pose through hand-eye transformation.
6. Move to the pre-grasp point, descend, close the gripper, lift, and return to the ready pose.

```bash
python scripts/main.py
```

For debugging, start with:

```bash
python scripts/main.py --dry-run
```

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Run dry-run before real execution</strong>
    <p>Use dry-run to verify camera detection, hand-eye calibration, target pose, and IK reachability before allowing the robot to move.</p>
  </div>
</div>

### 3. Grasp-and-Place Program: `scripts/set.py`

This script demonstrates grasping a banana and placing it into a box.

```bash
python scripts/set.py
```

### 4. Simplified Grasp Test: `scripts/ordinary_grasp_pipeline.py`

This script does not connect to the arm. It only verifies OBB grasp pose estimation and visualization.

```bash
python scripts/ordinary_grasp_pipeline.py
```

### 5. GraspNet Camera Estimation: `scripts/graspnet_camera_demo.py`

This script does not connect to the arm. It runs GraspNet 6D grasp pose estimation with the RGB-D camera only.

```bash
python scripts/graspnet_camera_demo.py
```

### 6. GraspNet Robotic Arm Grasping: `scripts/grasp.py`

```bash
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

</section>

<section id="config" className="section-card">

<div className="step-title-row"><span className="step-pill">Config</span><div><h2><code>default.yaml</code> Parameter Reference</h2><p>Review camera, calibration, detection, grasp, robot, and gripper parameters before running the demo.</p></div></div>

<details open className="content-details">
<summary>Camera and Calibration</summary>

| Parameter | Type / Options | Meaning |
| :--- | :--- | :--- |
| `camera.type` | `realsense_d435i` / `realsense_d405` / `orbbec_gemini2` | Camera type connected to the system. |
| `camera.serial` | `string` / `null` | Device serial number; set to `null` to use the first available device. |
| `calibration.aruco.marker_length_m` | `float` | ArUco marker side length in meters. |
| `calibration.hand_eye_compensation_m` | `array` | XYZ translation compensation in the robot base frame, in meters. |

</details>

<details className="content-details">
<summary>Detection and Grasp Pipeline</summary>

| Parameter | Type | Meaning |
| :--- | :--- | :--- |
| `detection.conf_threshold` | `float` | YOLO detection confidence threshold. |
| `detection.iou_threshold` | `float` | YOLO NMS IoU threshold. |
| `grasp_pipeline.infer_every_live` | `int` | Run detection every N frames during live preview. |
| `grasp_pipeline.grasp.depth_quantile` | `float` | Depth quantile used by the OBB grasping pipeline. |
| `grasp_pipeline.grasp.pregrasp_offset_m` | `float` | Retreat distance from the final grasp pose to the pre-grasp pose. |
| `grasp_pipeline.grasp.insertion_depth_m` | `float` | Additional insertion depth used by GraspNet grasp execution. |
| `grasp_pipeline.grasp.min_base_z_m` | `float` | Minimum allowed grasp height in the robot base frame. |

</details>

<details className="content-details">
<summary>Robot and Gripper</summary>

| Parameter | Type / Options | Meaning |
| :--- | :--- | :--- |
| `robot.repo_root` | `string` / `null` | Path to `reBotArm_control_py`; when `null`, `sdk/reBotArm_control_py` is used. |
| `robot.ready_pose` | `array` | Ready pose used on startup and after each grasping task. |
| `robot.gripper.dm` / `robot.gripper.rs` | object | DM / RS gripper parameters selected automatically based on SDK configuration. |

`angle_open`, `close_torque`, and `default_force` should be positive numbers. `counterclockwise` defines the closing direction, and `tau_max` is the torque limit.

</details>

### Model Selection

YOLO models are loaded from `rebot_grasp/models/`. If the file does not exist, Ultralytics usually attempts to download it automatically.

| Model | Description |
| --- | --- |
| `yoloe-26l-seg.pt` | Open vocabulary + segmentation, current default. |
| `yoloe-26s-seg.pt` | Lighter and faster. |
| `yolov8n-seg.pt` | Closed-category segmentation, small model. |
| `yolov8s-seg.pt` | Closed-category segmentation with higher accuracy. |

</section>

<section id="faq" className="section-card">

<div className="step-title-row"><span className="step-pill">FAQ</span><div><h2>FAQ</h2><p>Common issues during installation, calibration, detection, GraspNet compilation, and execution.</p></div></div>

<details className="content-details">
<summary>1. `ModuleNotFoundError: No module named 'motorbridge'`</summary>

Confirm that the project environment is activated, then sync the environment and reinstall the arm SDK:

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

</details>

<details className="content-details">
<summary>2. Pressing `G` does not execute grasping</summary>

Common causes include: `hand_eye.npz` is missing, the hand-eye calibration mode is not `eye_in_hand`, or the target pose is not IK-reachable. Start with dry-run validation:

```bash
python scripts/main.py --dry-run
```

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Run dry-run before real execution</strong>
    <p>Use dry-run to verify camera detection, hand-eye calibration, target pose, and IK reachability before allowing the robot to move.</p>
  </div>
</div>

</details>

<details className="content-details">
<summary>3. Grasp depth is unstable</summary>

Check `grasp_pipeline.grasp.depth_quantile`, camera mounting height, target surface reflectivity, and depth quality in the workspace.

</details>

<details className="content-details">
<summary>4. GraspNet cannot import `pointnet2_utils` from `pointnet2`</summary>

This usually means the local CUDA extensions `pointnet2` / `knn` were not compiled correctly in the current conda environment. Rebuild them:

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

</details>

<details className="content-details">
<summary>5. GraspNet reports `RuntimeError: CPU not supported`</summary>

The sampling operators in `pointnet2` only support CUDA tensors. Confirm CUDA is available and rebuild the local extensions if needed:

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

</details>

</section>

## References

- [reBotArm_control_py](https://github.com/vectorBH6/reBotArm_control_py)
- [reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Ultralytics YOLO](https://github.com/ultralytics/ultralytics)

## Technical Support

- [Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)



<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue Learning</span>
    <h2>reBot B601-DM learning path</h2>
    <p>These tutorials follow the same order as the Robotics Page learning path: <strong>Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2</strong>.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>Complete unboxing, wiring, power checks, driver setup, calibration, and first motion tests.</span></span>
      <span className="course-tag">Start here</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot Teleoperation and Data Collection</strong><span>Teleoperate the arm, connect cameras, record datasets, train policies, and evaluate real-arm behavior.</span></span>
      <span className="course-tag">Data collection</span>
    </a>
    <a className="course-path-item active" href="/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio Kinematics Visualization</strong><span>Understand robot models, joints, coordinate frames, forward/inverse kinematics, trajectories, and gravity compensation.</span></span>
      <span className="course-tag">Current article</span>
    </a>
    <a className="course-path-item active" href="/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Visual Grasping Demo</strong><span>Combine RGB-D perception, hand-eye calibration, YOLO / GraspNet, and grasp pose generation for real object grasping.</span></span>
      <span className="course-tag">Current article</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_rs_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 Integration</strong><span>Connect the arm to ROS2, RViz, MoveIt 2, planning, and higher-level robotics workflows.</span></span>
      <span className="course-tag">Integration</span>
    </a>
  </div>
</section>

</div>

<style>{`
.rebot-page {
  --rb-bg: #ffffff;
  --rb-surface: #ffffff;
  --rb-surface-soft: #f8fafc;
  --rb-text: #111827;
  --rb-muted: #64748b;
  --rb-border: rgba(148, 163, 184, 0.28);
  --rb-primary: #2563eb;
  --rb-primary-soft: #eff6ff;
  --rb-accent: #14b8a6;
  --rb-accent-soft: #ccfbf1;
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; color: #7c2d12; background: #fff7ed; border: 1px solid #fed7aa; line-height: 1.65; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.agent-inline-card { margin: 1rem 0 1.25rem; padding: 1.15rem; border-radius: 18px; background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.08)); border: 1px solid rgba(37,99,235,0.22); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.image-frame { margin: 1rem 0; text-align: center; }
.image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.badge-row { display: flex; flex-wrap: wrap; gap: 0.55rem; margin: 1rem 0; }
.badge-row span { padding: 0.35rem 0.65rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 800; font-size: 0.78rem; }
.buy-box { margin: 1rem 0; }
.buy-box a { display: inline-flex; padding: 0.74rem 1.05rem; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); border-radius: 999px; text-decoration: none !important; font-weight: 850; }
.path-grid, .checklist-grid, .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.path-card, .checklist-grid div, .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .checklist-grid strong, .feature-grid strong { color: var(--rb-text); }
.path-card span, .checklist-grid span, .feature-grid span { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; }
.path-card em { width: fit-content; padding: 0.32rem 0.6rem; border-radius: 999px; color: #047857; background: #d1fae5; font-style: normal; font-weight: 850; font-size: 0.75rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.35); background: linear-gradient(135deg, rgba(37,99,235,0.10), rgba(20,184,166,0.09)); }
.power-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.power-grid div { padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-align: center; }
.power-grid h4 { margin: 0 0 0.35rem; color: var(--rb-text); }
.power-grid p { margin: 0.25rem 0 0.75rem; color: var(--rb-muted); }
.power-grid img { max-width: 100%; border-radius: 14px; }
.step-title-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; min-width: 74px; padding: 0.55rem 0.7rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-title-row h2 { margin: 0 0 0.25rem; color: var(--rb-text); }
.step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker, .video-details summary::-webkit-details-marker { display: none; }
.content-details summary::after, .video-details summary::after { content: "展开"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after, .video-details[open] summary::after { content: "收起"; }
.content-details > :not(summary), .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child, .video-details > :last-child { margin-bottom: 1rem; }
.video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.danger-list { padding: 1rem; margin: 1rem 0; border-radius: 16px; border: 1px solid #fecaca; background: #fef2f2; color: #7f1d1d; }
.danger-list strong { display: block; margin-bottom: 0.5rem; }
.danger-list ul { margin-bottom: 0; }
.faq-images { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.faq-images img { max-width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page table { display: table; width: 100%; }
.rebot-page table { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .quick-note { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .danger-list { background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); color: #fecaca; }
html[data-theme='dark'] .agent-inline-card { background: linear-gradient(135deg, rgba(96,165,250,0.12), rgba(45,212,191,0.10)); border-color: rgba(96,165,250,0.28); }
html[data-theme='dark'] .path-card em { color: #bbf7d0; background: rgba(34,197,94,0.18); }

.video-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 132px;
  margin: 1rem 0;
  padding: 1.1rem;
  border-radius: 16px;
  border: 1px dashed rgba(37,99,235,0.35);
  background: var(--rb-primary-soft);
  color: var(--rb-primary);
  font-weight: 850;
  text-align: center;
}
.rebot-page .section-card > h2, .rebot-page .section-card > h3 {
  color: var(--rb-text);
}
.rebot-page .section-card p, .rebot-page .section-card li {
  line-height: 1.7;
}
.rebot-page .feature-grid div p, .rebot-page .path-grid div p {
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.6;
}
.rebot-page pre {
  border-radius: 14px;
}
html[data-theme='dark'] .video-placeholder {
  border-color: rgba(96,165,250,0.35);
}

@media (max-width: 900px) { .doc-hero, .power-grid, .two-col, .faq-images { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } .step-title-row { align-items: flex-start; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { margin-bottom: 0.75rem; } }


.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239,68,68,0.38); background: linear-gradient(135deg, rgba(254,242,242,0.98), rgba(255,247,237,0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239,68,68,0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.safety-alert.compact .safety-alert-content strong { margin-bottom: 0.25rem; }
html[data-theme='dark'] .safety-alert { border-color: rgba(248,113,113,0.42); background: linear-gradient(135deg, rgba(127,29,29,0.26), rgba(124,45,18,0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0,0,0,0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248,113,113,0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }

.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface, var(--rb-card, #fff)); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
html[data-theme='dark'] .course-path-item { background: #111827; border-color: rgba(148,163,184,0.24); }
html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
@media (max-width: 700px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }



/* Polished step cards and course path refinements */
.step-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}
.step-card {
  position: relative;
  padding: 1rem 1.05rem 1rem 1.1rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: linear-gradient(180deg, var(--rb-surface, #fff), var(--rb-surface-soft, #f8fafc));
  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.06);
}
.step-card .step-mini {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 0.65rem;
  margin-bottom: 0.65rem;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent));
  font-weight: 900;
  font-size: 0.86rem;
}
.step-card strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.35rem;
}
.step-card p,
.step-card span {
  display: block;
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}
.module-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}
.module-summary-card {
  padding: 1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface, #fff);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.module-summary-card b {
  display: block;
  margin-bottom: 0.35rem;
  color: var(--rb-text);
}
.module-summary-card span {
  display: block;
  color: var(--rb-muted);
  line-height: 1.65;
}
.path-grid > div:not([class]) {
  padding: 1rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: var(--rb-surface, #fff);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.path-card p { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.6; }
.course-path-section { margin-top: 2rem; }
.course-path-grid {
  display: grid;
  gap: 0.85rem;
  margin-top: 1rem;
}
.course-path-item,
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.95rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface, #fff);
  text-decoration: none !important;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.course-path-item.active,
.course-step.active {
  border-color: rgba(37, 99, 235, 0.45);
  background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.06));
}
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.45rem;
  height: 2.45rem;
  border-radius: 999px;
  color: #fff;
  background: var(--rb-primary);
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37,99,235,0.24);
}
.course-path-copy strong,
.course-step strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}
.course-path-copy span,
.course-step small {
  display: block;
  color: var(--rb-muted);
  line-height: 1.6;
}
.course-tag,
.course-step em {
  justify-self: end;
  white-space: nowrap;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  border: 1px solid rgba(37,99,235,0.18);
  font-style: normal;
  font-weight: 800;
  font-size: 0.78rem;
}
@media (max-width: 720px) {
  .course-path-item,
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-tag,
  .course-step em { grid-column: 2; justify-self: start; }
}
html[data-theme='dark'] .step-card,
html[data-theme='dark'] .module-summary-card,
html[data-theme='dark'] .course-path-item,
html[data-theme='dark'] .course-step,
html[data-theme='dark'] .path-grid > div:not([class]) {
  background: rgba(15, 23, 42, 0.72);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .course-path-item.active,
html[data-theme='dark'] .course-step.active {
  background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12));
}

`}</style>
