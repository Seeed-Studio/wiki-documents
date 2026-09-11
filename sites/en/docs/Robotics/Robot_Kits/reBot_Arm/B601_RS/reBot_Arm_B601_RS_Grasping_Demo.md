---
description: This tutorial covers two visual grasping implementations for the reBot Arm B601-RS, including a YOLO/OBB pipeline and a ROS2-based grasping workflow.
title: reBot Arm B601-RS Visual Grasping Demo
keywords:
  - reBot Arm
  - B601-RS
  - Grasping
  - RGB-D
  - YOLO
  - Hand-Eye Calibration
  - Robot
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif
slug: /rebot_arm_b601_rs_grasping_demo
last_update:
  date: 2026-09-10
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-15'
updatedAt: '2026-09-10'
url: https://wiki.seeedstudio.com/rebot_arm_b601_rs_grasping_demo/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# reBot Arm B601-RS Visual Grasping Demo

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Camera-RGB--D-green.svg" alt="Camera" />
    <img src="https://img.shields.io/badge/Detection-YOLO-yellow.svg" alt="YOLO" />
</p>

<p align="center">
  <strong>Depth Perception · Object Detection · Hand-Eye Calibration · Autonomous Grasping · Fully Open Source</strong>
</p>

This page covers two visual grasping demos with different implementations:

- **Visual Grasping Method 1**: A YOLO + RGB-D + Python SDK pipeline covering environment setup, camera integration, hand-eye calibration, and grasp debugging.
- **Visual Grasping Method 2**: A ROS2 + YOLOE workflow that starts the arm, Gemini 2 / D405 camera, and grasp nodes in multiple terminals to pick and place objects.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="reBot Arm B601-RS visual grasping demo" />
</p>

## Visual Grasping Method 1

### 1. Project Features

1. **Direct grasp pose estimation from YOLO + OBB**
   The pipeline uses detection boxes or OBB minimum-area rectangles directly and takes the short axis as the gripper opening direction, avoiding complex 3D point-cloud processing.
2. **GraspNet-Baseline 6D grasp pose estimation (optional)**
   The project also supports GraspNet-Baseline (`graspnet/graspnet-baseline`) for 6D grasp pose estimation from RGB-D point clouds, with YOLO bounding boxes used to select target candidates for more complex grasping experiments.
3. **Robotic arm and gripper driver integration**
   The main grasping script is based on the robotic arm and end-pose controller from `reBotArm_control_py`, with a lightweight grasp helper for gripper opening, force-controlled grasping, and TCP pose reading.
4. **Open Source and Extensible**
   All source code is open, and users can customize control algorithms and effects based on their own needs.

### 2. Specifications

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
      <td>reBot Arm B601-RS</td>
    </tr>
    <tr>
      <td>Degrees of Freedom</td>
      <td>6-DOF + Gripper</td>
    </tr>
    <tr>
      <td>Camera Model</td>
      <td>Orbbec Gemini 2 / Intel RealSense D435i / D405</td>
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
      <td>48V DC</td>
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

### 3. Bill of Materials (BOM)

| Component | Quantity | Included |
|-----------|----------|----------|
| reBot Arm B601-RS Robotic Arm | 1 | ✅ |
| Gripper | 1 | ✅ |
| USB2CAN Serial Bridge | 1 | ✅ |
| Power Adapter (48V) | 1 | ✅ |
| USB-C / Communication Cable | 1 | ✅ |
| RGB-D Depth Camera | 1 | ✅ |
| Camera Connector / Mounting Bracket | 1 | ✅ |

#### Wiring

1. Connect the depth camera to the host via USB 3.0.
2. Connect the USB2CAN adapter to the arm CAN bus.
3. Make sure the 48V power supply, camera, and robotic arm are all connected securely.
4. Set permissions:

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0
```

### 4. Environment Requirements

| Item | Requirement |
|------|-------------|
| Operating System | Ubuntu 22.04+ |
| Python | 3.10 |

### 5. Installation Steps

#### Step 0. Complete the basic robotic arm preparation first

Before starting this tutorial, please finish the content in [reBot Arm B601-RS Quick Start](https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/), including robotic arm assembly, zero-point initialization, motor ID configuration, and basic connectivity checks.

#### Step 1. Clone the repository

Prefer the official Seeed-Projects repository:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

#### Step 2. Create and configure the conda environment

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

If you want to use a different environment name, replace `rebotarm` in the command with your own name.

#### Step 3. Install the robotic arm SDK

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

If `pip install -e .` reports `Multiple top-level packages discovered in a flat-layout`, add explicit package discovery to `pyproject.toml` in `reBotArm_control_py`, then run `pip install -e .` again:

```toml
[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

B601 DM and RS configurations are selected through the SDK configuration files. For B601-RS, confirm the following in `sdk/reBotArm_control_py/config/rebotarm.yaml`:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

The visual grasping programs read this SDK configuration and automatically select the matching arm control mode and gripper parameters.

#### Step 4. Install the depth camera SDK

This project supports RGB-D depth cameras such as Orbbec Gemini 2 and RealSense D435i / D405. Install the SDK that matches your camera; if your environment can already import the camera driver, you can skip this step.

**Orbbec Gemini 2**

The Orbbec Gemini 2 depth camera depends on `pyorbbecsdk`, the Python wrapper for Orbbec SDK v2. Prefer installing the prebuilt Python package first:

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

**Verify installation**

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

For first-time use, it is recommended to install the udev rules:

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

**RealSense D435i / D405**

RealSense cameras depend on `pyrealsense2`. Usually you can install it directly with pip:

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

If your system needs the full RealSense toolchain or udev rules, install `librealsense2` by following the official RealSense SDK documentation.

**SDK Resource Summary**

| Resource | Link |
|----------|------|
| Gemini 2 Product Page | https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51 |
| Development Resources | https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1 |
| Orbbec SDK v2 | https://github.com/orbbec/OrbbecSDK_v2 |
| SDK v2 API Documentation | https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/ |
| pyorbbecsdk | https://github.com/orbbec/pyorbbecsdk |
| pyorbbecsdk Documentation | https://orbbec.github.io/pyorbbecsdk/index.html |
| ROS2 Wrapper | https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main |
| Intel RealSense SDK | https://github.com/realsenseai/librealsense |

#### Step 5. Configure GraspNet (optional)

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

# Configure CUDA build paths before building the local operators.
export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="12.0"
export CPATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

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
pip install .
cd ../../..
```

:::tip
Note: If you follow the official graspnet-baseline repository documentation and use `python setup.py install`, CUDA / PyTorch related errors may occur. We recommend using `pip install . --no-build-isolation` so the extension is built against the PyTorch and CUDA configuration already installed in the active conda environment.
:::

:::tip
If building fails with `fatal error: cusparse.h: No such file or directory`, run `find $CONDA_PREFIX -name cusparse.h` and make sure the directory that contains `cusparse.h` is included in `CPATH` / `CPLUS_INCLUDE_PATH`. If you installed CUDA headers from conda `cuda-toolkit`, the include path is usually `$CONDA_PREFIX/targets/x86_64-linux/include` instead of the pip `nvidia/cu13/include` path shown above.
:::

:::tip
In addition, older GraspNet API dependencies may still use the deprecated `sklearn` package name. The `sed` command replaces it with the currently recommended `scikit-learn` package name to avoid `The 'sklearn' PyPI package is deprecated` during installation. Unless you also upgrade the older GraspNet API dependencies, keep its `numpy==1.23.4` constraint because `transforms3d==0.3.1` still uses old NumPy aliases such as `np.float`.
:::

**Configure Pretrained Model**

Download the official GraspNet pretrained weights from the graspnet-baseline official repository [Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view), [Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A), then place `checkpoint-rs.tar` at:

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

Then verify in `config/default.yaml`:

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

The `checkpoint` field supports three forms: a file name is resolved under `sdk/graspnet-baseline/checkpoints/`; a relative path is resolved from the project root; an absolute path is used directly.

### 6. Directory Structure

```
rebot_grasp/
├── config/
│   ├── default.yaml              # Main configuration file
│   └── calibration/
│       └── <camera_type>/
│           ├── intrinsics.npz    # Camera intrinsics
│           └── hand_eye.npz      # Hand-eye calibration results
├── drivers/
│   ├── camera/
│   │   ├── base.py               # Camera abstract base class
│   │   ├── orbbec_gemini2.py     # Gemini 2 driver
│   │   └── realsense.py          # RealSense driver (alternative)
│   └── robot/
│       └── grasp_driver.py       # Lightweight grasp helper based on arm SDK
├── calibration/
│   ├── aruco_pose.py             # ArUco pose estimation
│   └── hand_eye.py               # Hand-eye calibration solver
├── utils/
│   ├── ordinary_grasp.py         # OBB grasp pose estimation and visualization
│   └── transforms.py             # Coordinate transformation utilities
├── scripts/
│   ├── main.py                   # Main grasping program
│   ├── set.py                    # Grasp and place program
│   ├── ordinary_grasp_pipeline.py
│   ├── object_detection.py
│   └── collect_handeye_eih.py
├── sdk/
│   ├── pyorbbecsdk/              # Orbbec SDK Python wrapper
│   └── reBotArm_control_py/      # reBot Arm SDK
└── environment.yml               # Recommended conda environment file
```

### 7. Hand-Eye Calibration

Before running the full grasping pipeline, complete the Eye-in-Hand hand-eye calibration first.

Before running the calibration script, bring up and verify the CAN interface:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

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

:::tip
If you find that the robotic arm's grasping accuracy cannot meet your requirements after calibration, you can set the `X` (front-back), `Y` (left-right), `Z` (up-down) parameters in `config/default.yaml` under `calibration.hand_eye_compensation_m` to provide positional compensation.
:::

The calibration result is saved to:

```text
config/calibration/<camera_type>/hand_eye.npz
```

Recommended sample count is at least 5 samples, with 15 or more recommended.

### 8. Running and Debugging

#### 1. Verify object detection only

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

#### 2. Verify grasp estimation only

```bash
python scripts/ordinary_grasp_pipeline.py
```

If you need to adjust the grasp inference frequency or the pre-grasp retreat distance, modify:

```yaml
grasp_pipeline:
  infer_every_live: 3
  grasp:
    depth_quantile: 0.5
    pregrasp_offset_m: 0.080
    insertion_depth_m: 0.015
    min_base_z_m: 0.00
```

This script does not connect to the robotic arm. It is only used to verify:

- Whether the OBB or minimum-area rectangle is reasonable
- Whether the grasp point lies near the target center area
- Whether the short-axis direction matches the expected gripper opening direction

Key controls:

- Left mouse button: inspect depth at the selected pixel
- `G`: print the current best grasp pose
- `Q` / `Esc`: exit

#### 3. Run the main grasping program

```bash
python scripts/main.py
```

If you only want to validate the target pose without moving the robotic arm:

```bash
python scripts/main.py --dry-run
```

It is recommended to verify the pose and reachable workspace with `--dry-run` first before executing a real grasp.

Main program flow:

1. Initialize the RGB-D camera and confirm the image stream is available.
2. Enable the robotic arm and gripper.
3. Move to the ready pose. If you want to change the startup ready pose, modify `config/default.yaml`:

```yaml
robot:
  ready_pose:
    x: 0.3
    y: 0.0
    z: 0.3
    roll: 0.0
    pitch: 0.7
    duration: 3.0
```

4. Detect tabletop targets in real time.
5. Estimate the grasp pose from the short axis.
6. Press `G` to capture the current frame and execute grasping.

Runtime keys:

- `G`: grasp the current best target
- `R`: resume live preview
- `Q` / `Esc`: exit

#### 4. `scripts/set.py` — Grasp and Place Program

Function: Grasp the banana and place it in the box.

Completed flow:

1. Camera and arm initialization, move to ready position
2. Real-time camera preview + YOLO object detection and instance segmentation
3. Press `G` to freeze frame, compute arm target pose via hand-eye transformation
4. Arm moves to grasp banana and lift
5. Arm places banana in the box and returns to initial pose
6. Press `Q` to exit system, arm returns to zero position

#### 5. GraspNet camera estimation demo (optional)

```bash
python scripts/graspnet_camera_demo.py
```

This script runs GraspNet 6D grasp pose estimation with only the RGB-D camera, without connecting to the robotic arm. It keeps a live camera preview, uses YOLO bounding boxes to select the target area, and filters feasible GraspNet full-scene candidates by the target bbox.

Key controls:

- `G` / `Space`: run GraspNet inference on the current frame
- `R`: resume live preview
- `Q` / `Esc`: exit

After inference, Open3D can visualize the point cloud and grasp candidates.

#### 6. GraspNet robotic grasping program (optional)

```bash
python scripts/grasp.py
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

This script connects the GraspNet estimate to the robotic arm execution flow. YOLO selects the target, GraspNet outputs a 6D grasp pose, hand-eye calibration transforms it into the robot base frame, and the script checks IK reachability before running the pre-grasp, grasp, and retreat motion sequence.

Running `python scripts/grasp.py` starts the full GraspNet robotic grasping flow and actually controls the robotic arm. `--dry-run` only prints the target pose and candidate filtering result without executing the grasp motion. `--target-class "light blue coffee cup"` specifies the YOLO target class and only filters and grasps GraspNet candidates for that class.

### 9. FAQ

<h4>1. <code>ModuleNotFoundError: No module named 'motorbridge'</code></h4>

This usually means the robotic arm SDK dependencies are not installed in the current Python environment. Please check:

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

<h4>2. Pressing <code>G</code> does not execute grasping</h4>

Common causes:

- `hand_eye.npz` does not exist
- The hand-eye calibration mode is not `eye_in_hand`
- The target pose is not reachable by IK

It is recommended to run:

```bash
python scripts/main.py --dry-run
```

<h4>3. The grasp depth is unstable</h4>

You can try adjusting:

- `grasp_pipeline.grasp.depth_quantile`
- The installation height of the camera relative to the workspace
- Reflective properties of the target surface

<h4>4. GraspNet reports that <code>pointnet2_utils</code> cannot be imported from <code>pointnet2</code></h4>

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

<h4>5. CUDA architecture compatibility issues on newer GPUs when running GraspNet</h4>

If you see `no kernel image is available for execution on the device`, or PyTorch reports that the current GPU CUDA capability is unsupported, the installed PyTorch wheel likely does not include CUDA kernels for that GPU architecture. Install a PyTorch build that supports your current CUDA/GPU architecture, then rebuild the GraspNet local CUDA extensions.

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

If you need to specify the build architecture manually, set `TORCH_CUDA_ARCH_LIST` before rebuilding. Choose the value according to your GPU architecture and PyTorch/CUDA version.

<h4>6. GraspNet inference reports <code>RuntimeError: CPU not supported</code></h4>

The sampling operators in `pointnet2` only support CUDA tensors. Confirm that CUDA is available, the GraspNet network and input point cloud are on GPU, and `pointnet2` / `knn` were built against the PyTorch version in the active environment.

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

If the output is `False`, fix the CUDA / PyTorch installation first. If it is `True` but the error remains, rebuild `pointnet2` and `knn`.

## Visual Grasping Method 2

### 1. Project Overview

This solution uses **ROS2** and **YOLO** on the reBot Arm B601-RS for object detection, grasping, and placing. The system starts the arm, depth camera, and grasp nodes in separate terminals.

The depth camera currently supports **Orbbec Gemini 2** and **Intel RealSense D405**. This workflow does not require a calibration board for hand-eye calibration. Because of mounting and printed-part tolerances, each arm may show a small grasping offset.

### 2. Environment Setup

#### Step 1. Install the robotic arm ROS2 workspace

First complete the installation and build of the `rebotarm_ros2` workspace by following [reBot Arm B601-RS ROS2 Integration](https://wiki.seeedstudio.com/rebot_arm_b601_rs_ros2_integration/).

#### Step 2. Install the camera

Choose one of the camera setups below and expand the matching section.

<details className="content-details">
<summary>Click to expand Gemini 2 setup</summary>

Clone the Orbbec ROS2 SDK into the workspace and switch to the `v2-main` branch:

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

Build the workspace:

```bash
cd ~/rebotarm_ros2
colcon build --event-handlers console_direct+ --cmake-args -DCMAKE_BUILD_TYPE=Release
```

Install udev rules:

```bash
cd ~/rebotarm_ros2/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

</details>

<details className="content-details">
<summary>Click to expand D405 setup</summary>

1. Clone the RealSense SDK and switch to `v2.58.1`:

```bash
cd ~
git clone https://github.com/realsenseai/librealsense.git
cd librealsense
git checkout v2.58.1
```

2. Install udev rules:

```bash
sudo apt install -y v4l-utils
cd ~/librealsense
./scripts/setup_udev_rules.sh
```

3. Build and install the SDK:

:::tip
If a proxy is enabled, disable it before configuring again:

```bash
unset http_proxy https_proxy HTTP_PROXY HTTPS_PROXY all_proxy ALL_PROXY
```
:::

```bash
cd ~/librealsense
mkdir -p build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make -j$(nproc)
sudo make install
sudo ldconfig
```

4. Build the RealSense ROS2 package:

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/realsense-ros.git
cd ~/rebotarm_ros2
colcon build --cmake-args -DUSE_LIFECYCLE_NODE=OFF
```

</details>

#### Step 3. Import the visual grasping package

```bash
cd ~/rebotarm_ros2/src/
git clone https://github.com/xiehuangbao888/rebot_visual_grasp.git
cd ~/rebotarm_ros2
colcon build --symlink-install
```

#### Step 4. Install the YOLO / YOLOE environment

`grasp_yolo` calls Ultralytics YOLOE from Python. Use a dedicated conda environment and do not use system `/usr/bin/python3`.

**Create the environment**

```bash
conda create -n yolo python=3.10
conda activate yolo

pip install -U ultralytics
pip install "numpy==1.26.4" transforms3d

# YOLOE open-vocabulary classes require the Ultralytics CLIP package, not the PyPI clip package
pip install git+https://github.com/ultralytics/CLIP.git
```

If you have an NVIDIA GPU, first confirm that CUDA is available. If the output is `False`, install a matching CUDA / PyTorch build. You can also continue on CPU, but the detection frame rate will be lower:

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

Verify YOLOE:

```bash
python -c "from ultralytics import YOLOE; print('YOLOE OK')"
```

**Download weights to `~/rebot_visual_model`**

```bash
mkdir -p ~/rebot_visual_model && cd ~/rebot_visual_model

# MobileCLIP (required by YOLOE set_classes, about 242MB)
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/mobileclip2_b.ts

# YOLOE segmentation weights can also download on first run; placing them here is recommended
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt
```

#### Step 5. Build the workspace

```bash
cd ~/rebotarm_ros2
source /opt/ros/humble/setup.bash
colcon build --symlink-install
source ~/rebotarm_ros2/install/setup.bash
```

The visual grasping environment is now ready. In every new terminal, source the following before running visual grasping commands:

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
```

### 3. Run the Project

Before starting, confirm that the arm is powered on, the CAN interface is `can0`, and Gemini 2 or D405 is connected over USB. Then bring up CAN:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

Start the stack in separate terminals so the grasping logic is easier to follow. Gemini 2 and D405 use different launch commands; pick the ones for your camera. If you want a one-click launch, you can write your own startup script.

#### Terminal A — Start the arm + RViz

<details className="content-details">
<summary>Click to expand Gemini 2</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_camera.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

<details className="content-details">
<summary>Click to expand D405</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_d405.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

#### Terminal B — Start the camera

<details className="content-details">
<summary>Click to expand Gemini 2</summary>

```bash
source /opt/ros/humble/setup.bash

ros2 launch orbbec_camera gemini2.launch.py
```

</details>

<details className="content-details">
<summary>Click to expand D405</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch realsense2_camera rs_launch.py \
  align_depth.enable:=true \
  depth_module.depth_profile:=640x360x30 \
  depth_module.color_profile:=640x360x30
```

</details>

#### Terminal C — Move to the observation pose + YOLO detection

Activate your conda environment first with `conda activate yolo`. If the environment name is not `yolo`, replace it with your actual conda environment name.

<details className="content-details">
<summary>Click to expand Gemini 2</summary>

Change the Python path to the YOLO environment you created.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

~/miniconda3/envs/yolov8/bin/python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:=~/rebot_visual_model/yoloe-26s-seg.pt \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=0 \
  -p grasp_z_offset_m:=0.02 \
  -p place_z_offset_m:=0.1 \
  -p grasp_x_offset_m:=-0.04 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

<details className="content-details">
<summary>Click to expand D405</summary>

Change the Python path to the YOLO environment you created.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

~/miniconda3/envs/yolov8/bin/python -m rebot_visual_grasp.grasp_yolo --ros-args 
-p yolo_model:=~/rebot_visual_model/yoloe-26s-seg.pt 
-p color_topic:=/camera/camera/color/image_raw 
-p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw 
-p color_info_topic:=/camera/camera/color/camera_info 
-p optical_frame:=camera_color_optical_frame 
-p target_class:="cube" 
-p place_class:="box" 
-p yolo_device:=gpu 
-p grasp_z_offset_m:=0.01 
-p place_z_offset_m:=0.1 
-p grasp_x_offset_m:=-0.04 
-p move_to_observation_on_start:=true 
-p auto_publish_on_detect:=true
```

</details>

| Parameter | Description |
|-----------|-------------|
| `yolo_device:=gpu` | Use the GPU; set `cpu` if you do not have a discrete GPU. You can also use `yolo_device:=0` for GPU 0 |
| `target_class` | YOLOE text class name of the object to grasp; change it to match the real object. Supports the default YOLO classes |
| `place_class` | YOLOE text class name of the place target; change it to match the real object. Supports the default YOLO classes |
| `grasp_x_offset_m` | Forward/back offset in `base_link`; a negative value pulls the pose backward |
| `grasp_z_offset_m` | Grasp height fine-tune. The default is for the flexible gripper, which is longer than the standard gripper |
| `place_z_offset_m` | Extra lift used when placing, to control how high the object is released above the place point |

#### Terminal D — One-click grasp and place

The default trigger delay is 3 seconds.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp grasp_go.launch.py
```

To change the delay, append a parameter. For example, trigger after 5 seconds:

```bash
ros2 launch rebot_visual_grasp grasp_go.launch.py trigger_delay_s:=5.0
```

#### Terminal E — Return to home (optional)

On the newer `rebotarm` build, pressing `Ctrl + C` in the terminal returns the arm to home automatically. To home it manually:

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger {}
```

## Contact

- Technical support: [Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)
- Project page: [GitHub](https://github.com/Seeed-Projects/reBot-DevArm-Grasp)
- Forum: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## References

- [reBot Arm B601-RS Quick Start](https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/)
- [reBot Arm B601-RS ROS2 Integration](https://wiki.seeedstudio.com/rebot_arm_b601_rs_ros2_integration/)
- [rebot_visual_grasp](https://github.com/xiehuangbao888/rebot_visual_grasp)
- [OrbbecSDK_ROS2](https://github.com/xiehuangbao888/OrbbecSDK_ROS2)
- [Orbbec Gemini 2 Product Page](https://www.orbbec.com/products/stereo-vision-camera/gemini-2/)
- [Orbbec Development Resources](https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [Orbbec SDK v2 API Guide](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/)
- [pyorbbecsdk Repository](https://github.com/orbbec/pyorbbecsdk)
- [pyorbbecsdk Documentation](https://orbbec.github.io/pyorbbecsdk/index.html)
- [Orbbec ROS2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main)
- [realsense-ros](https://github.com/xiehuangbao888/realsense-ros)
- [Intel RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Graspnet(Anygrasp) Docs](https://graspnet.net/)
