---
description: This tutorial covers two visual grasping implementations for the reBot Arm B601-RS, including a YOLO/OBB pipeline and a ROS2-based grasping workflow.
title: B601-RS with Visual Grasping
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
  date: 2026-11-04
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-15'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/rebot_arm_b601_rs_grasping_demo/
---
import '/src/css/rebot-wiki-style.css';

import GraspingTabs from '@site/src/components/robotics/RebotGraspingTabs';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/components/robotics/rebot-grasping-demo.module.css';

# reBot Arm B601-RS Visual Grasping Demo

<div className={styles.page}>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Get One Now</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

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

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="reBot Arm B601-RS visual grasping demo" />
</p>

## How do the two grasping methods differ?

This page covers two visual grasping demos with different implementations. Compare their frameworks, calibration requirements, and startup flows, then choose a tutorial below.

<div className={styles.comparison}>
  <section className={styles.methodCard} aria-label="Method 1: Python SDK">
    <span className={styles.methodNumber}>Method 01</span>
    <h3>Python SDK + YOLO / OBB</h3>
    <p>Use YOLO, an RGB-D depth camera, and the Python SDK for the complete workflow from environment setup and camera integration to hand-eye calibration and grasp debugging.</p>
    <dl>
      <div><dt>Grasping logic</dt><dd>Estimate grasp poses from detection boxes or OBB minimum-area rectangles; optionally use GraspNet for 6D pose estimation.</dd></div>
      <div><dt>Hand-eye calibration</dt><dd>Complete Eye-in-Hand calibration with an ArUco marker before the first full grasping run.</dd></div>
      <div><dt>Startup</dt><dd>Run Python scripts to verify detection, pose estimation, and robotic grasping step by step.</dd></div>
    </dl>
  </section>
  <section className={styles.methodCard} aria-label="Method 2: ROS 2">
    <span className={styles.methodNumber}>Method 02</span>
    <h3>ROS 2 + YOLOE</h3>
    <p>Use ROS 2 and YOLOE to start the arm, Gemini 2 / D405 / D435i camera, and grasping nodes in separate terminals for picking and placing.</p>
    <dl>
      <div><dt>Grasping logic</dt><dd>The visual grasping node detects, grasps, and places objects. Text class names specify the grasp and place targets.</dd></div>
      <div><dt>Hand-eye calibration</dt><dd>No calibration board is required; adjust offset parameters to compensate for small mounting and printed-part tolerances.</dd></div>
      <div><dt>Startup</dt><dd>Start the arm, camera, and grasping node in separate terminals, then trigger picking and placing.</dd></div>
    </dl>
  </section>
</div>

## Choose a grasping method

<p className={styles.selectionHint}>Switch tabs to view the tutorial for your chosen method and follow its installation and running steps.</p>

<GraspingTabs>
<TabItem value="python-sdk" label="Method 1 · Python SDK / OBB">

## Visual Grasping Method 1

This route uses **Python SDK + RGB-D camera + YOLO / OBB** without a ROS 2 workspace. The default route suits ordinary tabletop objects; enable the optional GraspNet module below when you need more complex 6D grasping.

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
      <td>Orbbec Gemini 2 / RealSense D435i / D405</td>
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
4. If you encounter permission issues, run:

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0
```

### 4. Environment Requirements

| Item | Requirement |
|------|-------------|
| Operating System | Ubuntu 22.04+ |
| Python | 3.10 |

### 5. Install the Basic Environment

Follow these steps in order. Steps 0–3 are required for the default route; choose the camera SDK in step 4 to match your hardware. GraspNet installation and running instructions are in the separate advanced module below.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">0</span>
<div className="rebot-step-content">

#### Step 0. Complete the basic robotic arm preparation first

Before starting this tutorial, please finish the content in [reBot Arm B601-RS Quick Start](https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/), including robotic arm assembly, zero-point initialization, motor ID configuration, and basic connectivity checks.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Step 1. Clone the repository

Prefer the official Seeed-Projects repository:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### Step 2. Create the environment and choose PyTorch for your hardware

Complete these three phases in order: create the base environment, install PyTorch for your hardware, and install the project dependencies.

<div className="rebot-step-flow rebot-step-flow--substeps">
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2.1</span>
<div className="rebot-step-content">

##### Create the base environment

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

:::note Expected result
The terminal prompt shows `rebotarm`, indicating that the environment is active. PyTorch is not installed yet; continue with the next two phases.
:::

To use a different environment name, replace `rebotarm` in both commands above. For an existing environment, activate it and run `conda env update -n rebotarm -f environment.yml` to update the base dependencies. This command does not remove existing pip packages.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2.2</span>
<div className="rebot-step-content">

##### Install PyTorch for your hardware

Both tabs use the same compatible package versions; only the download index differs. The current version file specifies PyTorch 2.9.1, torchvision 0.24.1, and torchaudio 2.9.1 for the Python 3.10, Ubuntu x86_64 environment used in this tutorial.

<Tabs groupId="rebot-pytorch-backend" defaultValue="cpu">
<TabItem value="cpu" label="CPU (no NVIDIA GPU)">

Use this option for computers with Intel / AMD integrated graphics, or to verify the basic workflow on CPU first.

```bash
python -m pip install -r requirements-pytorch.txt --index-url https://download.pytorch.org/whl/cpu
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA available:', torch.cuda.is_available())"
```

:::note Expected result
The PyTorch path points inside the active Conda environment. `CUDA available: False` is expected.
:::

Keep the following setting in `config/default.yaml`:

```yaml
yolo:
  device: "cpu"
```

:::tip Supported workflow
The basic YOLO / OBB workflow can run on CPU. Inference speed depends on the model and your computer. This project's GraspNet CUDA operators require an NVIDIA GPU, so skip the GraspNet advanced module below.
:::

</TabItem>
<TabItem value="nvidia" label="NVIDIA GPU (CUDA)">

Confirm that the driver recognizes your GPU before installing CUDA-enabled PyTorch. The example below uses the CUDA 12.8 build, which requires support from both your GPU architecture and driver:

```bash
nvidia-smi
python -m pip install -r requirements-pytorch.txt --index-url https://download.pytorch.org/whl/cu128
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA build:', torch.version.cuda); print('CUDA available:', torch.cuda.is_available())"
```

:::note Expected result
`nvidia-smi` lists your GPU, the PyTorch path points inside the active Conda environment, and `CUDA available: True` is printed. After verifying this, select GPU 0 in `config/default.yaml`:

```yaml
yolo:
  device: "0"
```
:::

:::tip Choose a CUDA build
Use the [official PyTorch version list](https://pytorch.org/get-started/previous-versions/) to choose a build that supports your GPU, driver, and Python version. Do not choose solely by GPU series or the CUDA number displayed by `nvidia-smi`.

If you need a different PyTorch version, update all three compatible versions in `requirements-pytorch.txt` and the download index together. Standard YOLO inference uses prebuilt wheels and does not require a separate CUDA Toolkit installation. A matching CUDA compiler is needed when building the GraspNet extensions.
:::

If CUDA is unavailable, check your driver, GPU architecture, and selected wheel, or follow the CPU tab to verify the basic workflow.

</TabItem>
</Tabs>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2.3</span>
<div className="rebot-step-content">

##### Install and verify the project dependencies

After completing either hardware option, run the following from the project root:

```bash
python -m pip install -r requirements.txt -c requirements-pytorch.txt
python -m pip check
python -c "import torch, torchvision, torchaudio, cv2; from ultralytics import YOLO; from calibration.aruco_pose import ArUcoDetector; ArUcoDetector(); print('Vision dependencies OK:', cv2.__version__)"
```

:::note Expected result
`pip check` prints `No broken requirements found.`, and the verification command prints `Vision dependencies OK` without import errors. Complete these checks before installing the robotic arm and camera SDKs.
:::

:::tip Installation failures
`-c requirements-pytorch.txt` constrains the compatible PyTorch package versions. Keep this argument and do not add `--upgrade`. If pip fails, review the final error and retry the corresponding phase. Activating a Conda environment does not mean that all dependencies were installed successfully.

Install only the standard OpenCV package specified in `requirements.txt`. The project's ArUco APIs are available in version 4.7; do not install additional OpenCV wheels alongside it. CLIP is installed from the Ultralytics Git repository, so Git must be available on your system. Loading YOLOE for the first time may also download model weights.
:::

</div>
</section>
</div>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Step 3. Install the robotic arm SDK

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

If running pip install -e . gives 'Multiple top-level packages discovered in a flat-layout', please add an explicit package discovery configuration in reBotArm_control_py's pyproject.toml, and then run pip install -e . again:

```bash
[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

B601 DM and RS configurations are selected through the SDK configuration files. For B601-RS, confirm the following in `sdk/reBotArm_control_py/config/rebotarm.yaml`:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

The visual grasping programs read this SDK configuration and automatically select the matching arm control mode and gripper parameters.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### Step 4. Install the depth camera SDK

This project supports RGB-D depth cameras such as Orbbec Gemini 2 and RealSense D435i / D405. Install the SDK that matches your camera; if your environment can already import the camera driver, you can skip this step.

<Tabs groupId="rebot-depth-camera" defaultValue="orbbec">
<TabItem value="orbbec" label="Orbbec Gemini 2">

The Orbbec Gemini 2 depth camera depends on `pyorbbecsdk`, the Python wrapper for Orbbec SDK v2. Prefer installing the prebuilt Python package first.

On Linux / Ubuntu, configure udev rules before using the camera for the first time, whichever installation method you choose. The rules allow ordinary users to access the USB device and are installed system-wide, so each machine only needs this setup once. Skip the corresponding commands if the rules are already configured.

<Tabs defaultValue="pip">
<TabItem value="pip" label="Option 1: Install from pip (recommended)">

```bash
pip install pyorbbecsdk2
```

**Configure udev rules (Linux / Ubuntu)**

`pyorbbecsdk2` 2.1.0 and later include an environment setup script. Keep your conda environment active and run the script from the installed package. It requests sudo permission and installs and reloads the udev rules automatically.

```bash
orbbec_sdk_dir="$(python -c 'import os, pyorbbecsdk; print(os.path.dirname(pyorbbecsdk.__file__))')"
python "$orbbec_sdk_dir/shared/setup_env.py"
```

If `shared/setup_env.py` cannot be found, run `pip install --upgrade "pyorbbecsdk2>=2.1.0"`, then repeat the commands above. See the [official Orbbec installation guide](https://orbbec.github.io/pyorbbecsdk/source/2_installation/install_the_package.html) for details.

</TabItem>
<TabItem value="github" label="Option 2: Get it from GitHub">

Keep the `rebotarm` environment active. Install the build dependencies, then compile the Python extension:

```bash
sudo apt-get update
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev python3-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
git checkout v2-main
python -m pip install pybind11
mkdir -p build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release \
  -DPython3_EXECUTABLE="$(python -c 'import sys; print(sys.executable)')" \
  -Dpybind11_DIR="$(python -m pybind11 --cmakedir)"
cmake --build . --parallel "$(nproc)"
cmake --install .
cd ..
```

Mainland China users can replace the GitHub clone command above with:

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

After building, confirm that `install/lib` contains `pyorbbecsdk*.so` and the Orbbec shared libraries (under `install/lib/pyorbbecsdk/` in newer versions), then install the Python package. See the [official Orbbec source build guide](https://orbbec.github.io/pyorbbecsdk/source/2_installation/build_the_package.html) for CMake and conda configuration.

```bash
pip install -e .
```

**Configure udev rules (Linux / Ubuntu)**

Run the following from the root of the cloned `pyorbbecsdk` repository. Newer versions use the environment setup script; older versions use `install_udev_rules.sh`:

```bash
if [ -f scripts/env_setup/setup_env.py ]; then
  python scripts/env_setup/setup_env.py
else
  sudo bash scripts/install_udev_rules.sh
  sudo udevadm control --reload-rules
  sudo udevadm trigger
fi
```

Return to the project root before continuing with verification and running steps:

```bash
cd ../..
```

</TabItem>
</Tabs>

If both installation methods fail, refer to the official Orbbec documentation below.

**Verify installation**

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

</TabItem>
<TabItem value="realsense" label="RealSense D435i / D405">

RealSense cameras depend on `pyrealsense2`. Usually you can install it directly with pip:

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

If your system needs the full RealSense toolchain or udev rules, follow the [official librealsense documentation](https://github.com/realsenseai/librealsense).

:::warning Use a USB 3.x port
The D405 / D435i must be plugged into a USB 3.0/3.2 port (usually blue). If plugged into a USB 2.0 port, the typical symptom is: **the system recognizes the device and `pipeline.start()` succeeds, but frames never arrive** (`Frame didn't arrive within ...`). Check the negotiated speed with:

```bash
lsusb -t   # the camera line should show 5000M; 480M means it fell back to a USB 2.0 port — switch ports
```
:::

</TabItem>
</Tabs>

:::note Expected result
The matching verification command prints `pyorbbecsdk OK` or `pyrealsense2 OK` without a `ModuleNotFoundError`.
:::

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
| RealSense SDK | https://github.com/realsenseai/librealsense |

</div>
</section>
</div>

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
│   ├── pyorbbecsdk/              # Orbbec SDK Python wrapper (source installation)
│   └── reBotArm_control_py/      # reBot Arm SDK
├── requirements-pytorch.txt      # Compatible versions installed from the CPU / CUDA index
├── requirements.txt              # Project dependencies installed after PyTorch
└── environment.yml               # Base Conda environment
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

Before running it, make sure the following ArUco size parameter in `config/default.yaml` matches the actual printed marker:

```yaml
calibration:
  aruco:
    marker_length_m: 0.1
```

After confirming the configuration, run automatic calibration:

```bash
python scripts/collect_handeye_eih.py
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

Verify the scenarios in this order: the first two do not connect to the robotic arm and help check the camera, detection, and grasp estimation. The next two connect to and control the robotic arm.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

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

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

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

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### 3. Run the main grasping program

```bash
python scripts/main.py
```

To validate the target pose while skipping the grasp motion:

```bash
python scripts/main.py --dry-run
```

Verify the pose and workspace with `--dry-run` before executing a real grasp. In this mode, the current script still initializes the arm, moves to the ready pose, and performs cleanup and homing on exit. For vision-only verification, use the first two scripts, which do not connect to the arm.

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

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### 4. `scripts/set.py` — Grasp and Place Program

Function: Grasp the banana and place it in the box.

```bash
python scripts/set.py
```

Completed flow:

1. Camera and arm initialization, move to ready position
2. Real-time camera preview + YOLO object detection and instance segmentation
3. Press `G` to freeze frame, compute arm target pose via hand-eye transformation
4. Arm moves to grasp banana and lift
5. Arm places banana in the box and returns to initial pose
6. Press `Q` to exit system, arm returns to zero position

</div>
</section>
</div>

### 9. GraspNet Advanced Module (Optional)

The default Python SDK / OBB route does not require GraspNet. Follow these steps only when you need 6D grasp pose estimation from RGB-D point clouds.

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Step 1. Install GraspNet and CUDA operators

You do not need GraspNet for `scripts/main.py` or `scripts/ordinary_grasp_pipeline.py`. Configure it only when you want to run `scripts/graspnet_camera_demo.py` or `scripts/grasp.py`, which require GraspNet, CUDA-enabled PyTorch, the PointNet2/knn CUDA operators, and a pretrained checkpoint.

The GraspNet `pointnet2` / `knn` extensions require a CUDA compiler. Before starting, confirm that `nvcc` is available in the current environment and compare its CUDA version with the version used to build PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

PyTorch is installed separately in Step 2 of the basic installation. GraspNet requires an NVIDIA GPU and working CUDA support; skip this section if you followed the CPU option. Complete the checks below before configuring the compiler.

**Step 1: Confirm your GPU**

```bash
nvidia-smi
```

The driver must recognize your NVIDIA GPU. Installing the CUDA Toolkit alone does not enable Intel / AMD integrated graphics to run this project's CUDA operators.

**Step 2: Confirm PyTorch CUDA support**

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())"
```

If `torch.cuda.is_available()` prints `True`, continue to the next step. If PyTorch is missing, `torch.version.cuda` is `None`, or CUDA is unavailable, return to Step 2 of the basic installation and complete the NVIDIA installation and verification. When switching between CPU and CUDA builds, remove the old build before reinstalling.

**Step 3: Install the CUDA compiler matching your PyTorch**

`pointnet2` / `knn` are local CUDA extensions: the CUDA version reported by `nvcc --version` must match `torch.version.cuda` when building, otherwise the build fails with `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)`. Check both versions first:

```bash
nvcc --version
python -c "import torch; print(torch.version.cuda)"
```

Take `torch.version.cuda` showing `12.8` as an example, and install the matching compiler inside the conda environment:

```bash
conda install -c nvidia cuda-nvcc=12.8 cuda-cudart-dev=12.8

which nvcc       # should point to $CONDA_PREFIX/bin/nvcc, not /usr/bin/nvcc
nvcc --version   # should match torch.version.cuda
```

`cuda-nvcc` provides the compiler and `cuda-cudart-dev` provides the CUDA headers under `targets/x86_64-linux/include`; both are required. Once the conda environment is activated, `$CONDA_PREFIX/bin` precedes the system paths, so the conda `nvcc` automatically shadows the old system one (for example CUDA 11.5 from the Ubuntu repositories) — there is no need to uninstall the system CUDA.

:::warning
Do not downgrade PyTorch to match an old system `nvcc`: old CUDA releases may not support your GPU architecture (CUDA 11.5 supports at most sm_86; RTX 40 series requires CUDA 11.8+ and RTX 50 series requires CUDA 12.8+), and old PyTorch builds may be incompatible with other project dependencies such as recent ultralytics releases.
:::

**Step 4: Verify**

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())"
nvcc --version
```

When both CUDA versions match and `torch.cuda.is_available()` prints `True`, the PyTorch setup is complete and you can continue building the CUDA operators.

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# Install PyTorch for your CUDA version first, then install GraspNet runtime dependencies
pip install open3d tensorboard Pillow tqdm

# Configure CUDA build paths before building the local operators.
# Note: use the conda cuda-toolkit targets directory for headers/libraries;
# do not mix in the pip nvidia/cu13 directory (a version mismatch with conda nvcc causes build errors).
export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="$(python -c 'import torch; major, minor = torch.cuda.get_device_capability(); print(f"{major}.{minor}")')"
export CPATH=$CONDA_PREFIX/targets/x86_64-linux/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/targets/x86_64-linux/include:$CPLUS_INCLUDE_PATH
export LIBRARY_PATH=$CONDA_PREFIX/targets/x86_64-linux/lib:$CONDA_PREFIX/lib:$LIBRARY_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/targets/x86_64-linux/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

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
If building fails with `fatal error: cusparse.h: No such file or directory`, run `find $CONDA_PREFIX -name cusparse.h` and add the directory containing `cusparse.h` to `CPATH` / `CPLUS_INCLUDE_PATH` (with conda `cuda-toolkit` this is usually `$CONDA_PREFIX/targets/x86_64-linux/include`). If you get header-related errors such as `'__NV_IS_DEVICE' was not declared in this scope`, they are usually caused by mixing the pip `nvidia/cu13` headers with the conda `nvcc` version — switch to the conda `targets` paths above and rebuild.
:::

:::tip
In addition, older GraspNet API dependencies may still use the deprecated `sklearn` package name. The `sed` command replaces it with the currently recommended `scikit-learn` package name to avoid `The 'sklearn' PyPI package is deprecated` during installation. Unless you also upgrade the older GraspNet API dependencies, keep its `numpy==1.23.4` constraint because `transforms3d==0.3.1` still uses old NumPy aliases such as `np.float`.
:::

**Configure Pretrained Model**

Download the official GraspNet pretrained weights from the graspnet-baseline official repository [Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view), [Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A), then place `checkpoint-rs.tar` at:

```bash
mkdir -p ~/rebot_grasp/sdk/graspnet-baseline/checkpoints

sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

Then verify in `config/default.yaml`:

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

The `checkpoint` field supports three forms: a file name is resolved under `sdk/graspnet-baseline/checkpoints/`; a relative path is resolved from the project root; an absolute path is used directly.

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### Step 2. Run the GraspNet camera estimation demo

```bash
python scripts/graspnet_camera_demo.py
```

This script runs GraspNet 6D grasp pose estimation with only the RGB-D camera, without connecting to the robotic arm. It keeps a live camera preview, uses YOLO bounding boxes to select the target area, and filters feasible GraspNet full-scene candidates by the target bbox.

Key controls:

- `G` / `Space`: run GraspNet inference on the current frame
- `R`: resume live preview
- `Q` / `Esc`: exit

After inference, Open3D can visualize the point cloud and grasp candidates.

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Step 3. Run the GraspNet robotic grasping program

```bash
python scripts/grasp.py
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

This script connects the GraspNet estimate to the robotic arm execution flow. YOLO selects the target, GraspNet outputs a 6D grasp pose, hand-eye calibration transforms it into the robot base frame, and the script checks IK reachability before running the pre-grasp, grasp, and retreat motion sequence.

Running `python scripts/grasp.py` starts the full GraspNet robotic grasping flow and controls the robotic arm. `--dry-run` prints the target pose and candidate filtering result and skips the grasp motion; the current script still initializes the arm, moves to the ready pose, and performs cleanup and homing on exit. `--target-class "light blue coffee cup"` specifies the YOLO target class and only filters and grasps GraspNet candidates for that class.

</div>
</section>
</div>

### 10. FAQ

<h4>1. <code>ModuleNotFoundError: No module named 'motorbridge'</code></h4>

This means the robotic arm SDK dependencies are not installed in the current Python environment. `conda env update` updates only the base environment; install the project dependencies separately. Run the following from the project root:

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
# Complete the PyTorch installation in basic installation Step 2 first.
python -m pip install -r requirements.txt -c requirements-pytorch.txt
cd sdk/reBotArm_control_py && python -m pip install -e .
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

Verify (`pointnet2_utils` / `knn_modules` are imported as top-level modules from the source directories, which is also how `models/` imports them; the grasping scripts add the source directories to `sys.path` automatically):

```bash
cd sdk/graspnet-baseline
python -c "import sys; sys.path[:0]=['pointnet2','knn']; import pointnet2_utils, knn_modules; print('import works')"
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

</TabItem>
<TabItem value="ros2-yoloe" label="Method 2 · ROS 2 / YOLOE">

## Visual Grasping Method 2

### 1. Project Overview

This workflow uses **ROS 2** and **YOLOE** for object detection, grasping, and placement on the reBot Arm B601-RS. Start the arm, depth camera, and grasping nodes in separate terminals.

Supported depth cameras are the **Orbbec Gemini 2** and **RealSense D405 / D435i**. The robot model supplies preset camera mounting extrinsics, so you can skip collecting hand-eye calibration data with a calibration board. Use the specified bracket and mounting position for your camera. Mounting and printed-part tolerances can introduce errors. Check TF and the target pose before fine-tuning the offsets.

### 2. Environment Setup

This workflow uses Ubuntu 22.04, ROS 2 Humble, system Python 3.10, and a dedicated Conda environment named `yolo`. Set up and build the arm, camera driver, and visual grasping packages together in the system environment before creating the Conda environment for YOLOE inference.

Run steps 1–4 in a fresh terminal with Conda inactive. Source only the system ROS setup and leave any older workspace unsourced. Terminals A, B, D, and E also use the system environment. Use the `yolo` environment only in terminal C. The environment files and installation commands from the Python SDK / OBB workflow apply to that workflow only.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Step 1. Install the robotic arm ROS 2 workspace

Follow the [reBot Arm B601-RS ROS 2 Integration](https://wiki.seeedstudio.com/rebot_arm_b601_rs_ros2_integration/) guide to prepare the arm and install ROS 2 Humble, the build tools, the arm workspace, and the low-level SDK. Confirm that the arm workspace builds successfully. Continue using the same `~/rebotarm_ros2` workspace for this guide.

```bash
source /opt/ros/humble/setup.bash
echo "$ROS_DISTRO"
sudo apt update
sudo apt install -y python3-rosdep python3-colcon-common-extensions git wget cmake build-essential
```

Expect `ROS_DISTRO` to report `humble`. If the workspace already contains any of the repositories below, check its branch and contents before proceeding. Clone each repository only once per path.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### Step 2. Install the camera

Expand the setup instructions for your camera.

<details className="content-details">
<summary>Click to expand Gemini 2 setup</summary>

Clone the Orbbec ROS 2 SDK into the workspace and switch to the `v2-main` branch.

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

Install the native dependencies listed in the driver repository. Step 3 installs the ROS dependencies together.

```bash
sudo apt install -y libgflags-dev nlohmann-json3-dev libgoogle-glog-dev libdw-dev libssl-dev mesa-utils libgl1 \
  ros-humble-image-transport-plugins ros-humble-compressed-image-transport
```

Install the udev rules.

```bash
cd ~/rebotarm_ros2/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

</details>

<details className="content-details">
<summary>Click to expand D405 / D435i setup</summary>

1. Install the build dependencies, then clone the RealSense SDK and switch to `v2.58.1`.

```bash
sudo apt update
sudo apt install -y cmake build-essential git pkg-config libusb-1.0-0-dev libudev-dev libssl-dev v4l-utils
```

```bash
cd ~
git clone https://github.com/realsenseai/librealsense.git
cd librealsense
git checkout v2.58.1
```

2. Install the udev rules.

```bash
cd ~/librealsense
./scripts/setup_udev_rules.sh
```

3. Build and install the SDK.

This build uses the RSUSB backend to avoid patching the kernel UVC module. It disables examples and GLSL extensions. `BUILD_TOOLS=ON` keeps command-line tools such as `rs-enumerate-devices` available. `realsense-viewer` is a graphical example.

```bash
cd ~/librealsense &&
mkdir -p build && cd build &&
cmake .. -DCMAKE_BUILD_TYPE=Release \
  -DFORCE_RSUSB_BACKEND=ON \
  -DBUILD_EXAMPLES=OFF \
  -DBUILD_TOOLS=ON \
  -DBUILD_GRAPHICAL_EXAMPLES=OFF \
  -DBUILD_GLSL_EXTENSIONS=OFF &&
cmake --build . --parallel 2 &&
sudo cmake --install . &&
sudo ldconfig
```

:::tip CMake cannot find `OpenGL::GL`
In librealsense `v2.58.1`, disabling only `BUILD_GRAPHICAL_EXAMPLES` still leaves the standard examples linked against `OpenGL::GL`, which can prevent CMake from generating the build files. If you encountered this error with `BUILD_EXAMPLES=ON`, rerun the commands above to update the options in the existing `build` directory.
:::

4. Clone the RealSense ROS 2 driver.

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/realsense-ros.git
```

Install the camera driver's ROS dependencies in step 3 and build the workspace in step 4. Reconnect the camera and run `lsusb -t` to verify that it is connected over USB 3.x. The speed should typically be `5000M` or higher.

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Step 3. Add the visual grasping package and install ROS dependencies

```bash
cd ~/rebotarm_ros2/src/
git clone https://github.com/xiehuangbao888/rebot_visual_grasp.git
```

Initialize `rosdep` on first use. If it reports `default sources list file already exists`, proceed directly to updating the index.

```bash
sudo rosdep init
```

```bash
rosdep update
cd ~/rebotarm_ros2
rosdep install --from-paths src --ignore-src -r -y --rosdistro humble --skip-keys="librealsense2 orbbec_description realsense2_description"
```

This command installs the system dependencies declared by the cloned ROS packages, including `diagnostic_updater`, `cv_bridge`, and `xacro`. The RealSense setup already installs `librealsense2` from source. The other two keys are camera description packages. The source cloned in step 2 provides the description package for your camera, and the other camera's package is optional for this setup. Skipping these keys avoids reinstalling the SDK or getting blocked by dependencies for the other camera.

Expect `All required rosdeps installed successfully`. Resolve any remaining dependency errors before building. Check the full output to confirm that installation completed successfully.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### Step 4. Build the workspace

Use `--symlink-install` consistently when building this workspace, including after adding the camera driver and visual grasping package.

:::tip Conflicts with previous build directories
If you previously built without `--symlink-install`, switching to it can produce `failed to create symbolic link` and `existing path cannot be removed: Is a directory`. Directories from the previous build conflict with the new symbolic links. Clear the build outputs and rebuild.

Open a fresh terminal with Conda inactive and the workspace's `install/setup.bash` unsourced. Run the following commands.

```bash
cd ~/rebotarm_ros2
rm -rf build install log
```

This removes the workspace's build, install, and log directories and preserves `src` and other source files. Then rebuild the entire workspace using the commands for your camera.
:::

```bash
cd ~/rebotarm_ros2
source /opt/ros/humble/setup.bash
```

<Tabs groupId="rebot-ros2-camera-build" defaultValue="realsense">
<TabItem value="realsense" label="RealSense D405 / D435i">

```bash
colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release -DUSE_LIFECYCLE_NODE=OFF
```

</TabItem>
<TabItem value="orbbec" label="Orbbec Gemini 2">

```bash
colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release
```

</TabItem>
</Tabs>

After the build succeeds, source the workspace and check the visual grasping package.

```bash
source ~/rebotarm_ros2/install/setup.bash
ros2 pkg prefix rebot_visual_grasp
```

For RealSense, also run `ros2 pkg prefix realsense2_camera`. For Gemini 2, run `ros2 pkg prefix orbbec_camera`. Expect the installation path for the selected package in the current workspace.

**Check the build result**

Check the final `Summary`. The build succeeded if all packages show `Finished` and none show `Failed` or `Aborted`. For example, a workspace with the RealSense driver and visual grasping package may report the following output.

```text
Summary: 11 packages finished [33.8s]
  4 packages had stderr output: realsense2_camera_msgs realsense2_description rebotarm_moveit_config rebotarm_msgs
```

Package counts and build times vary with the workspace and computer. `packages had stderr output` means those packages wrote to standard error. Check their logs to see what happened. If the output consists only of the CMake warnings described below, the build can still succeed.

:::tip Stale paths after cleanup and CMake warnings
If you sourced the workspace's `install/setup.bash`, removed `install`, and rebuilt in the same terminal, you may see warnings about nonexistent paths in `AMENT_PREFIX_PATH` or `CMAKE_PREFIX_PATH`. The terminal still holds the previous install paths. If all packages build successfully, source the new `install/setup.bash` as shown above and continue.

For subsequent builds, use a fresh terminal and source only `/opt/ros/humble/setup.bash` before building. If `~/.bashrc` automatically sources the workspace, temporarily disable that line before rebuilding after a cleanup.

With `--cmake-args -DUSE_LIFECYCLE_NODE=OFF`, some packages may report `Manually-specified variables were not used by the project: USE_LIFECYCLE_NODE`. This CMake warning is expected for packages outside the driver that uses the option.
:::

After building the ROS workspace, create the Conda inference environment in step 5. In every new terminal, source both setup files before running ROS commands.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
```

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">5</span>
<div className="rebot-step-content">

#### Step 5. Set up the YOLOE environment

`grasp_yolo` calls Ultralytics YOLOE from Python. Use the Python interpreter in a dedicated Conda environment for this node.

This step applies to x86_64 hosts running Ubuntu 22.04, ROS 2 Humble, and Python 3.10. Create the environment, choose a PyTorch backend, then install the vision and ROS Python runtime dependencies. Check the dependencies inside Conda separately because Python packages installed through apt may be unavailable there.

<div className="rebot-step-flow rebot-step-flow--substeps">
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5.1</span>
<div className="rebot-step-content">

##### 5.1 Create the base environment

```bash
conda create -n yolo python=3.10
conda activate yolo
python -c "import sys; print(sys.executable)"
```

:::note Expected result
The Python path ends in `envs/yolo/bin/python` inside your Conda installation. If you already have a `yolo` environment, activate it and continue with PyTorch and the project dependencies below.
:::

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5.2</span>
<div className="rebot-step-content">

##### 5.2 Install PyTorch for your hardware

Both tabs install PyTorch `2.9.1`, torchvision `0.24.1`, and torchaudio `2.9.1` from their respective package indexes. Select one backend in the active `yolo` environment.

<Tabs groupId="rebot-ros2-pytorch-backend" defaultValue="cpu">
<TabItem value="cpu" label="CPU (no NVIDIA GPU)">

Use this option on computers with Intel or AMD integrated graphics, or to verify the setup on the CPU first.

```bash
python -m pip install torch==2.9.1 torchvision==0.24.1 torchaudio==2.9.1 --index-url https://download.pytorch.org/whl/cpu
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA available:', torch.cuda.is_available()); print(torch.rand(2, 3))"
```

:::note Expected result
The PyTorch path is inside the active Conda environment and the command prints a random tensor. `CUDA available: False` is expected for this backend. Set `-p yolo_device:=cpu` when starting `grasp_yolo`. The CPU inference frame rate depends on the model and computer.
:::

</TabItem>
<TabItem value="nvidia" label="NVIDIA GPU (CUDA)">

Verify that the driver detects the NVIDIA GPU before installing a CUDA build of PyTorch. The example uses CUDA 12.8, which requires support from both the GPU architecture and the driver.

```bash
nvidia-smi
python -m pip install torch==2.9.1 torchvision==0.24.1 torchaudio==2.9.1 --index-url https://download.pytorch.org/whl/cu128
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA build:', torch.version.cuda); print('CUDA available:', torch.cuda.is_available()); print(torch.rand(2, 3, device='cuda'))"
```

:::note Expected result
`nvidia-smi` lists the GPU, the PyTorch path is inside the active Conda environment, and the command prints `CUDA available: True` and a CUDA tensor. Use `-p yolo_device:=0` when starting `grasp_yolo` to select GPU 0.
:::

:::tip Choose a CUDA build
Use the [official PyTorch version list](https://pytorch.org/get-started/previous-versions/) to choose a build that supports your GPU, driver, and Python version. Consider all three when selecting a build, since the CUDA version shown by `nvidia-smi` alone is insufficient. The prebuilt wheel provides the CUDA runtime for standard YOLOE inference.

If CUDA is unavailable, check the driver, GPU architecture, and selected wheel, or switch to the CPU tab to verify the basic setup. If you change the PyTorch version, update the matching torchvision and torchaudio versions and the pins in the next phase.
:::

</TabItem>
</Tabs>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5.3</span>
<div className="rebot-step-content">

##### 5.3 Install and verify project dependencies

After installing one backend, keep `yolo` active and install the vision and Python runtime dependencies. The command preserves the matching PyTorch versions and resolves the NumPy and OpenCV constraints together.

```bash
python -m pip install "ultralytics==8.4.202" "torch==2.9.1" "torchvision==0.24.1" "torchaudio==2.9.1" "numpy==1.26.4" "opencv-python==4.11.0.86" transforms3d pyyaml lark typeguard

# YOLOE open-vocabulary classes require the Ultralytics CLIP package.
python -m pip install git+https://github.com/ultralytics/CLIP.git
```

:::tip ROS dependency messages during PyTorch installation
If you have already sourced ROS 2, pip may report that `generate-parameter-library-py` requires `pyyaml` and `typeguard`. Check that the final `Successfully installed` line lists `torch`, `torchvision`, and `torchaudio`. Install both missing dependencies with the command in this phase, then run `pip check` and the import tests below.
:::

If you built `rebotarm_agent` with the default arm workspace configuration, install its declared dependency so that `pip check` can pass after you source the full workspace.

```bash
python -m pip install fastmcp
```

`fastmcp` supports the Agent feature. Install it only if your workspace contains `rebotarm_agent`.

This workflow pins NumPy to `1.26.4` and OpenCV to `4.11.0.86`. Keep these pins and the matching PyTorch versions when installing or upgrading Ultralytics.

:::tip OpenCV and NumPy dependency conflicts
If you ran `pip install -U ultralytics` before separately installing NumPy `1.26.4`, pip may report `opencv-python ... requires numpy>=2`. For example, OpenCV `5.0.0.93` requires NumPy 2, while this workflow uses NumPy `1.26.4`. A final `Successfully installed` message can still leave conflicting dependencies.

Keep the `yolo` environment active, install the compatible versions, then run the dependency and import checks below.

```bash
conda activate yolo
python -m pip install "numpy==1.26.4" "opencv-python==4.11.0.86" transforms3d
```

Keep only one OpenCV package that provides `cv2` in the environment. If you installed multiple variants such as `opencv-python`, `opencv-contrib-python`, or the corresponding headless packages, uninstall them and reinstall the pinned package.

```bash
python -m pip uninstall -y opencv-python opencv-contrib-python opencv-python-headless opencv-contrib-python-headless
python -m pip install "numpy==1.26.4" "opencv-python==4.11.0.86" transforms3d
```
:::

**Check dependencies and verify YOLOE**

Source the system ROS setup and the built workspace, then use the active Conda Python to check dependencies.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
python -m pip check
python -c "import sys, torch, torchvision, torchaudio, cv2, numpy, yaml, lark, transforms3d, clip; from ultralytics import YOLOE; print('Python:', sys.executable); print('PyTorch:', torch.__version__); print('OpenCV:', cv2.__version__); print('NumPy:', numpy.__version__); print('CUDA available:', torch.cuda.is_available()); print('YOLOE OK')"
python -c "import rclpy, cv_bridge, launch_ros; import rebot_visual_grasp.grasp_yolo; print('ROS grasp imports OK')"
```

:::note Expected result
`pip check` reports `No broken requirements found.` The Python path is inside the active Conda environment. The vision check prints `OpenCV: 4.11.0`, `NumPy: 1.26.4`, and `YOLOE OK`. The ROS import check prints `ROS grasp imports OK`. Expect `CUDA available: False` for the CPU backend and `True` for the GPU backend. These checks only import modules and leave the arm idle.
:::

If `pip check` reports `launch-ros ... requires pyyaml`, verify that you installed the dependencies above in `yolo`. If it reports `rebotarm-agent ... requires fastmcp`, install the Agent dependency as described above. If imports of `rclpy`, `cv_bridge`, or workspace modules fail, check the system ROS dependencies, workspace build results, and both `source` commands. Use those ROS packages from the system and workspace.

Wait until the dependency and import checks pass before downloading the weights and starting the grasping nodes.

</div>
</section>
</div>

**Download the weights to `~/rebot_visual_model`**

```bash
mkdir -p ~/rebot_visual_model && cd ~/rebot_visual_model

# MobileCLIP is required by YOLOE set_classes and is about 242 MB.
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/mobileclip2_b.ts

# The segmentation weights can download on first use. Download them here to verify the setup before launch.
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt
```

Verify that YOLOE can load the weights and set text classes from the model directory. This catches missing model files or CLIP dependencies before you start the arm.

```bash
cd ~/rebot_visual_model
python -c "from ultralytics import YOLOE; model = YOLOE('yoloe-26s-seg.pt'); model.set_classes(['cube', 'box']); print('YOLOE weights and text encoder OK')"
```

Expect `YOLOE weights and text encoder OK`. The first load may take longer. This command loads only the vision model and leaves the arm disconnected. Resolve any missing weights or dependencies before running the project.

</div>
</section>

</div>

### 3. Run the Project

Before starting, confirm that the arm is powered on, the CAN interface is `can0`, and the Gemini 2, D405, or D435i is connected over USB. Then bring up CAN.

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

:::warning The robotic arm will move
In terminal C, `move_to_observation_on_start:=true` moves the arm to the observation pose. Terminal D triggers grasping and placement. Before starting, check the zero position, mounting bracket, workspace, and offsets. Keep people and obstacles clear of the motion path and be ready to stop the arm.
:::

Start terminals A, B, C, and D in that order, leaving the earlier terminals running. Select the launch commands for your camera. You can also write a startup script to launch the stack together.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">A</span>
<div className="rebot-step-content">

#### Terminal A — Start the arm and RViz

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

<details className="content-details">
<summary>Click to expand D435i</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_d435i.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">B</span>
<div className="rebot-step-content">

#### Terminal B — Start the camera

<details className="content-details">
<summary>Click to expand Gemini 2</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

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

<details className="content-details">
<summary>Click to expand D435i</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch realsense2_camera rs_launch.py \
  align_depth.enable:=true \
  depth_module.depth_profile:=640x480x30 \
  rgb_camera.color_profile:=640x480x30
```

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">C</span>
<div className="rebot-step-content">

#### Terminal C — Move to the observation pose and start YOLOE detection

Run `conda activate yolo` first, or activate the environment by its actual name. The `python` command uses the active environment and works with either Miniconda or Miniforge. The examples use `yolo_device:=cpu` by default. For GPU inference, pass the CUDA check in step 5, then set `yolo_device:=0`.

<details className="content-details">
<summary>Click to expand Gemini 2</summary>

```bash
conda activate yolo
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:="$HOME/rebot_visual_model/yoloe-26s-seg.pt" \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=cpu \
  -p grasp_z_offset_m:=0.01 \
  -p place_z_offset_m:=0.1 \
  -p grasp_x_offset_m:=-0.02 \
  -p grasp_y_offset_m:=0.002 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

<details className="content-details">
<summary>Click to expand D405</summary>

```bash
conda activate yolo
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:="$HOME/rebot_visual_model/yoloe-26s-seg.pt" \
  -p color_topic:=/camera/camera/color/image_raw \
  -p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw \
  -p color_info_topic:=/camera/camera/color/camera_info \
  -p optical_frame:=camera_color_optical_frame \
  -p target_class:=cube \
  -p place_class:=box \
  -p yolo_device:=cpu \
  -p grasp_z_offset_m:=0.01 \
  -p grasp_y_offset_m:=-0.005 \
  -p place_z_offset_m:=0.1 \
  -p grasp_x_offset_m:=-0.01 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

<details className="content-details">
<summary>Click to expand D435i</summary>

```bash
conda activate yolo
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:="$HOME/rebot_visual_model/yoloe-26s-seg.pt" \
  -p color_topic:=/camera/camera/color/image_raw \
  -p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw \
  -p color_info_topic:=/camera/camera/color/camera_info \
  -p optical_frame:=camera_color_optical_frame \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=cpu \
  -p grasp_z_offset_m:=0.01 \
  -p place_z_offset_m:=0.1 \
  -p grasp_y_offset_m:=0.01 \
  -p grasp_x_offset_m:=-0.04 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

| Parameter | Description |
| ------------------ | ---------------------------------------------------------------------------- |
| `yolo_device:=cpu` | Use the CPU by default. After verifying CUDA, set `yolo_device:=0` to use GPU 0. |
| `target_class` | YOLOE text class for the object to grasp. Set it to match the object. The default YOLO classes are supported. |
| `place_class` | YOLOE text class for the placement target. Set it to match the target. The default YOLO classes are supported. |
| `grasp_x_offset_m` | Forward or backward offset in `base_link`. A negative value moves the grasp backward. |
| `grasp_y_offset_m` | Lateral grasp offset. `0.01` moves the grasp 1 cm left. A negative value moves it right. |
| `grasp_z_offset_m` | Grasp height adjustment. The default is for the flexible gripper, which is longer than the standard gripper. Adjust this value for your gripper's height. |
| `place_z_offset_m` | Extra height above the placement point at which the arm releases the object. |

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">D</span>
<div className="rebot-step-content">

#### Terminal D — Trigger grasp and placement

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp grasp_go.launch.py
```

To change the delay, append the launch parameter. This example triggers after 5 seconds.

```bash
ros2 launch rebot_visual_grasp grasp_go.launch.py trigger_delay_s:=5.0
```

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">E</span>
<div className="rebot-step-content">

#### Terminal E — Return to home (optional)

On normal shutdown, the arm controller attempts to return the arm to its home position and disable the motors. After an abnormal interruption or communication failure, automatic homing is unreliable. To return home manually, keep the controller in terminal A running and make sure the motion path is clear.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger {}
```

</div>
</section>
</div>

</TabItem>
</GraspingTabs>

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
- [RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Graspnet(Anygrasp) Docs](https://graspnet.net/)

</div>
