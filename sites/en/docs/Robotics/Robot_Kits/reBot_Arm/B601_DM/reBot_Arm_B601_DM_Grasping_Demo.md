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
  date: 2026-05-20
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-22'
updatedAt: '2026-05-22'
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

2. **GraspNet-Baseline 6D grasp pose estimation (optional)**  
   The project also supports GraspNet-Baseline (`graspnet/graspnet-baseline`) for 6D grasp pose estimation from RGB-D point clouds, with YOLO bounding boxes used to select target candidates for more complex grasping experiments.

3. **Lightweight robotic arm and gripper integration**  
   The main grasping script reuses the `RebotArm` interface and integrates IK, trajectory control, and the gripper state machine.

4. **Open Source and Extensible**  
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

Prefer the official Seeed-Projects repository:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

You can also use the current development repository:

```bash
git clone https://github.com/EclipseaHime017/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### Step 2. Create and configure the conda environment

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

If you want to use a different environment name, replace `rebotarm` in the command with your own name.

### Step 3. Install the robotic arm SDK

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

### Step 4. Install the depth camera SDK

**This project uses the Orbbec Gemini2 depth camera. If you use a different depth camera, install the matching SDK for your camera and skip this step.**

The Orbbec Gemini2 depth camera depends on `pyorbbecsdk`, the Python wrapper for Orbbec SDK v2. Prefer installing the prebuilt Python package first:

**Option 1: Install from pip (recommended)**

```bash
pip install pyorbbecsdk2
```

**Option 2: Get it from GitHub**

```bash
sudo apt-get update
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

Mainland China users can use:

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

When installing from source, make sure the native extension has been built with CMake first so `install/lib` contains `pyorbbecsdk*.so` and the Orbbec shared libraries before running `pip install -e .`.

If all installation methods above fail, please refer to the official Orbbec documentation below.

For first-time use, it is recommended to install the udev rules:

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

### Step 5. Configure GraspNet (optional)

You do not need GraspNet for `scripts/main.py` or `scripts/ordinary_grasp_pipeline.py`. Configure it only when you want to run `scripts/graspnet_camera_demo.py` or `scripts/grasp.py`, which require GraspNet, CUDA-enabled PyTorch, the PointNet2/knn CUDA operators, and a pretrained checkpoint.

The GraspNet `pointnet2` / `knn` extensions require a CUDA compiler. Before starting, make sure the active environment can find `nvcc`, and check that the CUDA version reported by `nvcc` matches the CUDA version used to build PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

If `nvcc` is missing, or if the CUDA version reported by `nvcc` does not match `torch.version.cuda`, install a CUDA compiler that matches your current PyTorch CUDA version. For example, if PyTorch reports `13.0`:

```bash
conda install -c nvidia cuda-nvcc=13.0
```

You can also install a PyTorch build that matches your current `nvcc` version instead. The two versions must match, otherwise building `pointnet2` / `knn` will fail with `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)`.

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# Install PyTorch for your CUDA version first, then install GraspNet runtime dependencies
pip install open3d tensorboard Pillow tqdm

# Build CUDA operators
cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

# Install GraspNet API
git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
sed -i "s/'numpy==1.23.4'/'numpy>=1.24.0'/" setup.py
pip install .
cd ../../..
```

***Note: If you follow the official graspnet-baseline repository documentation and use `python setup.py install`, CUDA / PyTorch related errors may occur. We recommend using `pip install . --no-build-isolation` so the extension is built against the PyTorch and CUDA configuration already installed in the active conda environment.***

***In addition, older GraspNet API dependencies may still use the deprecated `sklearn` package name. The `sed` commands replace it with the currently recommended `scikit-learn` package name to avoid `The 'sklearn' PyPI package is deprecated` during installation. They also adjust `numpy==1.23.4` to `numpy>=1.24.0`, preventing GraspNet API installation from downgrading NumPy and conflicting with the robotic arm control dependencies.***

Refer to the official graspnet-baseline repository to download the official GraspNet pretrained weight, then place `checkpoint-rs.tar` at:

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

Then verify `config/default.yaml`:

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

The `checkpoint` field supports three forms: a file name is resolved under `sdk/graspnet-baseline/checkpoints/`; a relative path is resolved from the project root; an absolute path is used directly.

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

Recommended sample count is at least 5 samples, with 15 or more recommended.

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

### 4. GraspNet camera estimation demo (optional)

```bash
python scripts/graspnet_camera_demo.py
```

This script runs GraspNet 6D grasp pose estimation with only the RGB-D camera, without connecting to the robotic arm. It keeps a live camera preview, uses YOLO bounding boxes to select the target area, and filters feasible GraspNet full-scene candidates by the target bbox.

Key controls:

- `G` / `Space`: run GraspNet inference on the current frame
- `R`: resume live preview
- `Q` / `Esc`: exit

After inference, Open3D can visualize the point cloud and grasp candidates.

### 5. GraspNet robotic grasping program (optional)

```bash
python scripts/grasp.py
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

This script connects the GraspNet estimate to the robotic arm execution flow. YOLO selects the target, GraspNet outputs a 6D grasp pose, hand-eye calibration transforms it into the robot base frame, and the script checks IK reachability before running the pre-grasp, grasp, and retreat motion sequence.

Running `python scripts/grasp.py` starts the full GraspNet robotic grasping flow and actually controls the robotic arm. `--dry-run` only prints the target pose and candidate filtering result without executing the grasp motion. `--target-class "light blue coffee cup"` specifies the YOLO target class and only filters and grasps GraspNet candidates for that class.

## FAQ

### 1. `ModuleNotFoundError: No module named 'motorbridge'`

This usually means the robotic arm SDK dependencies are not installed in the current Python environment. Please check:

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
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

### 4. GraspNet reports that `pointnet2_utils` cannot be imported from `pointnet2`

This usually means the local CUDA extension under `sdk/graspnet-baseline/pointnet2` was not built in the active conda environment, or Python is resolving a different `pointnet2` package. Make sure the project environment is active, then rebuild both `pointnet2` and `knn` in that same environment:

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

Verify:

```bash
python -c "from pointnet2 import pointnet2_utils; print('Submodule import works')"
```

### 5. CUDA architecture compatibility issues on newer GPUs when running GraspNet

If you see `no kernel image is available for execution on the device`, or PyTorch reports that the current GPU CUDA capability is unsupported, the installed PyTorch wheel likely does not include CUDA kernels for that GPU architecture. Install a PyTorch build that supports your current CUDA/GPU architecture, then rebuild the GraspNet local CUDA extensions.

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

If you need to specify the build architecture manually, set `TORCH_CUDA_ARCH_LIST` before rebuilding. Choose the value according to your GPU architecture and PyTorch/CUDA version.

### 6. GraspNet inference reports `RuntimeError: CPU not supported`

The sampling operators in `pointnet2` only support CUDA tensors. Confirm that CUDA is available, the GraspNet network and input point cloud are on GPU, and `pointnet2` / `knn` were built against the PyTorch version in the active environment.

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

If the output is `False`, fix the CUDA / PyTorch installation first. If it is `True` but the error remains, rebuild `pointnet2` and `knn`.

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
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Graspnet(Anygrasp) Docs](https://graspnet.net/)
