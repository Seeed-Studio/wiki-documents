---
description: Set up tabletop visual grasping on the reBot Arm B601-RS with an Orbbec Gemini 336 and YOLOE. Preview OBB grasps, perform hand-eye calibration, and run the arm with optional AnyGrasp or GraspNet-Baseline backends.
title: reBot-RS Multi-Backend Visual Grasping
sidebar_label: reBot-RS Multi-Backend Visual Grasping
keywords:
  - reBot Arm B601-RS
  - RGB-D
  - YOLOE
  - OBB
  - AnyGrasp
  - GraspNet
  - Hand-eye calibration
slug: /rebot_arm_b601_rs_python_visual_grasping
sku: 100019336
last_update:
  date: 2026-11-24
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-11-23'
updatedAt: '2026-11-24'
url: https://wiki.seeedstudio.com/rebot_arm_b601_rs_python_visual_grasping/
---

import '/src/css/rebot-wiki-style.css';
import styles from '@site/src/components/robotics/rebot-grasping-demo.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS" width={800} height={586} style={{ height: 'auto' }} />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true" />
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Get One Now</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7" />
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4" />
    </svg>
  </a>
</div>

<p className="text--center">
  <img src="https://img.shields.io/badge/Camera-Gemini%20336-teal.svg" alt="Orbbec Gemini 336 RGB-D camera" />{' '}
  <img src="https://img.shields.io/badge/Python-3.10-blue.svg" alt="Python 3.10" />{' '}
  <img src="https://img.shields.io/badge/Version-v0.1.0-brightgreen.svg" alt="Version v0.1.0" />{' '}
  <img src="https://img.shields.io/badge/Platform-Ubuntu%20x86--64-orange.svg" alt="Ubuntu x86-64" />
</p>

<p className="text--center"><strong>AnyGrasp · GraspNet · OBB · Hand-Eye Calibration · YOLOE</strong></p>

This tutorial uses an Orbbec Gemini 336 mounted on the end effector of the reBot Arm B601-RS to identify and grasp tabletop objects. YOLOE segments objects using text labels. The grasp backend estimates grasp poses from the target contour and depth data. After hand-eye calibration, the software transforms the candidates into the robot base frame and checks workspace limits and inverse kinematics (IK).

Start by previewing grasp candidates from the filtered oriented bounding box (OBB) backend. Then calibrate the camera and try a grasp on the arm. Use AnyGrasp or GraspNet-Baseline to estimate six-degree-of-freedom grasp poses from point clouds. For a ROS 2 pick-and-place workflow, see the ROS 2 method in the [B601-RS Visual Grasping Demo](https://wiki.seeedstudio.com/rebot_arm_b601_rs_grasping_demo/).

## Prepare the hardware and host

- **Robot arm.** Gather a reBot Arm B601-RS, gripper, suitable power supply, and configured USB-to-CAN adapter. Complete assembly, zero-position setup, and basic communication checks first. [B601-RS Quick Start](https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/)
- **Camera.** Use an Orbbec Gemini 336, a USB 3.0 data cable, and an end-effector camera mount. The project also provides drivers for the Orbbec Gemini 2, RealSense D405, and RealSense D435i. Recheck the camera view and repeat hand-eye calibration after replacing the camera or mount. [Camera SDK setup](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md#cameras)
- **Host.** Use an Ubuntu x86-64 machine with a graphical desktop, Git, and curl. The scripts create a Conda environment named `rebot` with Python 3.10. AnyGrasp and GraspNet-Baseline require a compatible NVIDIA GPU and driver.
- **Test object and calibration board.** Prepare a banana or another object from the configured class list. Secure an ArUco calibration board to the work surface. [Calibration boards on GitHub](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/tree/main/examples/hand_eye/boards)

## 1. Set up the environment and SDKs

Clone the project from an Ubuntu terminal. Run the remaining commands from the repository root.

```bash
git clone https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping.git
cd Rebot-Arm-B601-Visual-Grasping
```

Open `config/default.yaml` and set `camera.type` to match your device. The Gemini 336 defaults are `orbbec_gemini336`, 640 × 480, and 30 FPS. Set `camera.serial` if you have multiple cameras of the same model. Select the model before running the setup script so it installs the matching driver.

**Choose either automatic or manual setup.** Option A is the usual choice for installing all grasp backends and B601 arm support. Use Option B to install the dependencies component by component.

<div className={styles.tutorials}>
<Tabs defaultValue="automatic" queryString="grasping-setup">

<TabItem value="automatic" label="Automatic setup">

<h3 id="option-a--automatic-setup">Option A — Automatic setup</h3>

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Check and install dependencies</h4>

The full setup requires a compatible NVIDIA GPU and driver. Run `nvidia-smi -L` to confirm the host detects the GPU. Then run the initial check, the setup script, and the post-install check. The initial check may report missing dependencies. Continue with the setup command to install them. You can disconnect the camera and arm during setup.

```bash
bash scripts/check_env.sh
bash scripts/setup_env.sh
bash scripts/check_env.sh
```

- **Install scope.** The default setup configures the B601 control SDK, camera driver, YOLOE, and all grasp backends. It also builds the required CUDA operators. For a single backend, pass `--backend obb`, `--backend anygrasp`, or `--backend graspnet` to both scripts. Add `--robot` for B601 control, for example `--backend obb --robot`. If the GraspNet weights fail to download, point `bash scripts/setup_env.sh --checkpoint-file /path/to/checkpoint-rs.tar` to your local copy.
- **Review changes.** The script installs missing components and reuses existing Git SDKs. It shows the changes and asks before switching dependency versions, Conda builds, or SDK branches. Enter `y` to confirm. Pressing Enter, entering `n`, or running noninteractively skips these changes. See the changes applied below `----`.
- **Check the result.** Review the summary below `----`. Exit code `3` means only `[MANUAL]` items remain. Configure the AnyGrasp license and weights, generate the hand-eye matrix in Section 3, and rerun the check with the same options.

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Activate the environment</h4>

If the script installed Miniforge, run `source ~/miniforge3/etc/profile.d/conda.sh` in the current terminal first. Then activate the environment.

```bash
conda activate rebot
```

</div>
</div>

</div>

</TabItem>

<TabItem value="manual" label="Manual setup">

<h3 id="option-b--manual-setup">Option B — Manual setup</h3>

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

#### Create the environment and install PyTorch

Run the following commands in a terminal with Conda available. The `environment.yml` file specifies Python 3.10, NumPy below version 2, and Pinocchio 3.9.0 for the B601. If you already have a `rebot` environment, activate it and check its dependencies against the environment file.

```bash
conda env create -f environment.yml
conda activate rebot
```

<Tabs defaultValue="cuda">

<TabItem value="cuda" label="NVIDIA GPU">

Install the GPU build of PyTorch to use all backends or to run AnyGrasp or GraspNet. The project has verified PyTorch 2.5.1 with CUDA 12.1. The check should show `12.1` and `True`.

```bash
python -m pip install 'torch==2.5.1+cu121' 'torchvision==0.20.1+cu121' 'torchaudio==2.5.1+cu121' \
  --index-url https://download.pytorch.org/whl/cu121
python -c 'import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())'
```

</TabItem>

<TabItem value="cpu" label="CPU">

For OBB on a CPU-only system, install the CPU build of PyTorch.

```bash
python -m pip install -r requirements-pytorch.txt --index-url https://download.pytorch.org/whl/cpu
```

</TabItem>

</Tabs>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

#### Install the camera driver, YOLOE, and B601 SDK

For the Orbbec Gemini 336, run `python -m pip install 'pyorbbecsdk2==2.0.18'`. For the RealSense D405 or D435i, run `python -m pip install 'pyrealsense2>=2.54'`. Follow the camera manufacturer's instructions to configure USB access. [Camera SDK setup](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md#cameras)

```bash
python -m pip install -e '.[obb,yolo,visualization]' scipy
python -m pip install 'git+https://github.com/ultralytics/CLIP.git@7ffa84b3bfa40c42ecc1c77147a855e69cb2dd40'
mkdir -p models
curl -fL --retry 3 -o models/yoloe-26s-seg.pt \
  https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt
curl -fL --retry 3 -o mobileclip2_b.ts \
  https://github.com/ultralytics/assets/releases/download/v8.4.0/mobileclip2_b.ts
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
python -m pip install 'motorbridge==0.6.0' 'meshcat>=0.3.2' 'matplotlib>=3.10'
```

If OBB is the only backend you plan to use with the arm, run `bash scripts/check_env.sh --backend obb --robot` to check dependencies and continue to Section 2. You will generate the hand-eye matrix in Section 3.

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

#### Set up the CUDA toolchain for AnyGrasp and GraspNet

In the active `rebot` environment, install a compiler and toolchain compatible with CUDA 12.1. Confirm that `nvcc --version` shows `release 12.1` before proceeding.

```bash
conda install --override-channels -c conda-forge 'gcc_linux-64=12' 'gxx_linux-64=12'
conda install --override-channels -c nvidia/label/cuda-12.1.1 -c conda-forge 'cuda-toolkit=12.1'
conda activate rebot
export CUDA_HOME="$CONDA_PREFIX"
export PATH="$CUDA_HOME/bin:$PATH"
export MAX_JOBS=2
nvcc --version
python -m pip install wheel ninja
python -m pip install 'transforms3d>=0.4.2' \
  'graspnetAPI @ git+https://github.com/graspnet/graspnetAPI.git@eb57dd2092d8dbe05312a29c3d0c22f3226efbfc'
```

**AnyGrasp.** Install the SDK and its PointNet2 extension, then build MinkowskiEngine with OpenBLAS. Follow [AnyGrasp license and weights](#anygrasp-license-and-weights) to place the required files.

```bash
git clone https://github.com/graspnet/anygrasp_sdk.git sdk/anygrasp_sdk
git clone --branch cuda-12-1 https://github.com/chenxi-wang/MinkowskiEngine.git sdk/MinkowskiEngine-cuda-12-1
conda install --override-channels -c conda-forge 'openblas>=0.3.30,<0.4' 'numpy<2'
python -c 'import ctypes, sys; ctypes.CDLL(sys.prefix + "/lib/libopenblas.so")'
python -m pip install --no-build-isolation --no-deps ./sdk/anygrasp_sdk/pointnet2
(
  cd sdk/MinkowskiEngine-cuda-12-1 &&
  python setup.py bdist_wheel --force_cuda --blas=openblas \
    --blas_include_dirs="$CONDA_PREFIX/include" --blas_library_dirs="$CONDA_PREFIX/lib" &&
  python -m pip install --no-deps dist/*.whl
)
```

**GraspNet-Baseline.** Install the PointNet2 and kNN extensions in separate subdirectories of the GraspNet-Baseline SDK. This lets AnyGrasp and GraspNet use their own PointNet2 builds in the same `rebot` environment. Download the RealSense pretrained weights and save them to `sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar`. [Official GraspNet-Baseline pretrained weights](https://github.com/graspnet/graspnet-baseline#training-and-testing)

```bash
git clone https://github.com/graspnet/graspnet-baseline.git sdk/graspnet-baseline
baseline="$PWD/sdk/graspnet-baseline"
python -m pip install --no-build-isolation --no-deps --upgrade --target "$baseline/pointnet2" "$baseline/pointnet2"
touch "$baseline/pointnet2/pointnet2/__init__.py"
python -m pip install --no-build-isolation --no-deps --upgrade --target "$baseline/knn" "$baseline/knn"
mkdir -p "$baseline/checkpoints"
```

After completing the full manual setup, run `bash scripts/check_env.sh`. If you set up only some of the backends, use `--backend obb`, `--backend anygrasp`, or `--backend graspnet` to check the relevant dependencies. Add `--robot` to check the arm as well. [Project manual setup guide](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/README.md#2-manual-environment-and-sdk-setup)

</div>
</div>

</div>

</TabItem>

</Tabs>
</div>

### AnyGrasp license and weights

To use AnyGrasp, obtain the official license and detection weights, then configure them with `bash scripts/anygrasp_license.sh`. The steps apply to both automatic and manual setup. Running the script without arguments opens an interactive menu.

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Get the machine feature ID</h4>

On the machine that will run inference, use the network interface you will use in deployment. Select `1` to retrieve the `feature_id`, then use it to request the license and matching weights. [Official AnyGrasp license registration](https://github.com/graspnet/anygrasp_sdk/tree/main/license_registration)

```bash
bash scripts/anygrasp_license.sh 1
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Install the license and weights</h4>

Put the official license ZIP or extracted license directory alongside `checkpoint_detection.tar` in the same delivery directory. Select `2` to install both. Replace `/path/to/delivery` with the path to your delivery directory.

```bash
bash scripts/anygrasp_license.sh 2 "/path/to/delivery"
```

The script validates the license with the official SDK, checks that the weights are readable, and installs them according to `config/backends/anygrasp.yaml`. If the filtered backend uses a separate SDK or weights path, run `bash scripts/anygrasp_license.sh --backend anygrasp_filtered 2 "/path/to/delivery"` to use `config/backends/anygrasp_filtered.yaml`. When needed, environment setup and option `2` place the `gsnet.so` extension for the active Python ABI in `grasp_detection/`, next to `license/`.

By default, the license goes into `sdk/anygrasp_sdk/grasp_detection/license/` and the detection weights go to `sdk/anygrasp_sdk/grasp_detection/log/checkpoint_detection.tar`.

```text
sdk/anygrasp_sdk/grasp_detection/
├── license/
│   ├── licenseCfg.json
│   ├── *.lic
│   ├── *.public_key
│   └── *.signature
└── log/
    └── checkpoint_detection.tar
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>Verify the installation</h4>

Review the license and weights status below `----`. `[PARTIAL]` and exit code `3` mean the license is ready and the detection weights are still missing. Once you have the weights, pass the path to `checkpoint_detection.tar` directly to option `2`. If the script reports `[ERROR]`, check the reported cause, such as a machine ID mismatch or unreadable weights. Rerun the AnyGrasp environment check.

```bash
bash scripts/check_env.sh --backend anygrasp
```

Once the check passes, use the AnyGrasp camera preview in Section 5 to verify model loading and inference.

</div>
</div>

</div>

## 2. Preview camera frames and grasp candidates

Run `conda activate rebot` before launching the examples. They use `scripts/run_python.sh` to run Python from that environment. By default, the launcher isolates `rebot` from inherited `PYTHONPATH`, `LD_LIBRARY_PATH`, and user-site Python packages so dependencies from ROS Humble or other environments do not get loaded. [Python launcher](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md#python-launcher)

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Record an RGB-D frame</h4>

Connect the camera and record a frame. The command should write an `.npz` file.

```bash
bash examples/rgbd_capture/run.sh --output "outputs/rgbd/frame-$(date +%s%N).npz"
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Open the filtered OBB preview</h4>

Place the target in the center of the image and open the filtered OBB preview. The example defaults to `yellow banana`. Use `--target-class` to select another class from the configured list. This command connects only to the camera.

```bash
bash examples/obb_filtered/run.sh
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>Compare grasp candidates</h4>

Press **G** in the image window to save a snapshot and compare the raw and filtered candidates for the same frame. Confirm that the mask covers the target and that the filtered grasp center and gripper opening axis suit the object. Press **Q** or **Esc** to exit. To inspect segmentation or point cloud quality, run `bash examples/camera_check/run.sh --target-class "yellow banana"`. [Filtered OBB details](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/obb_filtered.md)

</div>
</div>

</div>

## 3. Perform hand-eye calibration

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Prepare the calibration board</h4>

Open the calibration board directory on GitHub, download `aruco_100mm.pdf`, and print it at 100% scale. Measure the side length of the black square. In `config/default.yaml`, set `calibration.aruco.marker_length_m` to that length in meters. The default length is `0.100` m and the marker ID is `0`. Secure the board to the work surface where the camera can see it from several poses. [ArUco calibration board downloads](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/tree/main/examples/hand_eye/boards)

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Check marker detection</h4>

Check the marker with the camera. The terminal reports how many of 10 frames contain a detection of the configured marker. If detection is inconsistent, adjust the lighting, distance, or board angle.

```bash
bash examples/hand_eye/run.sh --check-marker
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>Check the arm connection</h4>

In `sdk/reBotArm_control_py/config/rebotarm.yaml`, confirm that `hardware_yaml: rebotarm_rs.yaml` is set. Check the CAN interface and kinematic model for that hardware profile. Replace the example `can0` with the interface name you configured. [B601-RS control SDK and CAN setup](https://wiki.seeedstudio.com/rebot_arm_b601_rs_pinocchio_meshcat/)

```bash
ip -details link show can0
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4>Run automatic calibration</h4>

:::warning
Automatic calibration moves the arm along preset trajectories. Secure the base, clear the entire motion envelope, and leave enough slack in the camera cable. Be ready to cut actuator power if necessary. You can back up an existing `hand_eye.npz` before recalibrating.
:::

Start automatic calibration. The program pairs end-effector poses with marker poses observed by the camera. After collecting the samples, it solves for the fixed transform from the camera to the end effector.

```bash
bash examples/hand_eye/run.sh
```

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/Cal.gif" alt="reBot Arm B601-RS automatic hand-eye calibration demo" width={1138} height={640} loading="lazy" style={{ height: 'auto' }} />
</div>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">
    <h4>Verify the calibration file</h4>

Confirm that the terminal reports `[OK] Saved to .../hand_eye.npz`. The Gemini 336 output is `config/calibration/orbbec_gemini336/hand_eye.npz`. For other cameras, the output goes into the matching model directory under `config/calibration/`. In `config/default.yaml`, check `calibration.hand_eye_path`. Relative paths are resolved from `config/`. Then check the arm dependencies and the calibration file.

```bash
bash scripts/check_env.sh --backend obb --robot
```

</div>
</div>

</div>

## 4. Execute a filtered OBB grasp

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Check the target and arm settings</h4>

Confirm that the preview consistently finds the target. Check `robot.ready_pose`, the gripper orientation, and the workspace limits. If you have modified the gripper, also check `planning.T_grasp_tcp`.

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Run the grasp</h4>

:::warning
`--execute` enables the arm and moves it to the ready pose at startup. Pressing **G** starts the grasp. Before running the command, confirm that the motion area is clear of people, cables, and obstacles.
:::

```bash
bash examples/obb_filtered/run.sh --execute --target-class "yellow banana"
```

Wait for the arm to stop at the ready pose. Press **G** in the image window to capture the current scene and select a filtered grasp candidate that passes the checks. The program skips the attempt if it finds no target or executable candidate. Press **Q** or **Esc** to end the session.

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/obb.gif" alt="reBot Arm B601-RS filtered OBB grasp demo" loading="lazy" style={{ height: 'auto' }} />
</div>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>Inspect the results</h4>

Open the run directory printed in the terminal. The `result/snapshot-NNN/` directory contains the captured `frame.npz`, grasp candidates and plans in `result.json`, and the raw-versus-filtered results in `comparison.png` and `comparison.json`. After a grasp attempt starts, the program also writes `execution.json`. The `object_held` field records the gripping status reported by the controller.

</div>
</div>

</div>

## 5. Try point cloud grasping backends

<div className={styles.tutorials}>
<Tabs defaultValue="anygrasp" queryString="grasping-backend">

<TabItem value="anygrasp" label="AnyGrasp">

<h3 id="anygrasp">AnyGrasp</h3>

After completing the environment setup in Section 1 and placing the files from [AnyGrasp license and weights](#anygrasp-license-and-weights), start the camera preview.

```bash
bash examples/anygrasp_filtered/run.sh --target-class "yellow banana"
```

Press **G** in the image window to save a snapshot. The left panel shows the raw point cloud reference and the right panel shows the filtered result. The default class order is `pen`, `orange`, and `yellow banana`. Press **1**, **2**, or **3** in the image window to switch classes. After verifying the preview and hand-eye calibration, you can add `--execute` to the preview command. Check the arm dependencies with `bash scripts/check_env.sh --backend anygrasp --robot`. In execution mode, the arm moves to the ready pose at startup. Press **G** to execute a candidate from the right panel that passes the workspace and IK checks. [Filtered AnyGrasp details](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/anygrasp_filtered/README.md)

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/any.gif" alt="AnyGrasp demo 1" width={1138} height={640} loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/anygrasp.gif" alt="AnyGrasp demo 2" width={1024} height={640} loading="lazy" />
  </figure>
</div>

</TabItem>

<TabItem value="graspnet" label="GraspNet-Baseline">

<h3 id="graspnet-baseline">GraspNet-Baseline</h3>

After setting up the GraspNet-Baseline environment and weights in Section 1, check the dependencies and open the camera preview.

```bash
bash scripts/check_env.sh --backend graspnet
bash examples/graspnet_camera/run.sh
```

In the camera window, press **G** or **Space** to generate candidates. Press **R** to resume the live feed or **Q** or **Esc** to exit. For the arm, the entry point is `bash examples/graspnet_grasp/run.sh --target-class "yellow banana"`. Complete the camera preview, hand-eye calibration, and arm checks first. This command moves the arm to the ready pose at startup, including when you pass `--dry-run`. [GraspNet arm example](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/graspnet_grasp/README.md)

</TabItem>

</Tabs>
</div>

## Troubleshooting

- **The camera cannot record.** Check `camera.type`, the serial number, and USB permissions. Confirm the camera supports the selected resolution and frame rate, then rerun the capture command in Section 2.
- **The arm stays still after pressing G.** Confirm that you passed `--execute`. Check `result.json` and the terminal logs to see whether the detector missed the target, the point cloud failed quality checks, the candidate was outside the workspace, or IK reported the pose as unreachable.
- **The candidate looks correct in the image, but the grasp is offset.** Check whether the camera mount moved, whether the hand-eye matrix belongs to the current camera, and whether `planning.T_grasp_tcp` matches the current gripper. After confirming an offset along the approach direction, use `--insertion-depth-mm` with the filtered backends to override the additional insertion distance for the run, in millimeters. Filtered OBB defaults to 0 mm and filtered AnyGrasp defaults to 5 mm. Check the candidate and the clearance between the gripper and the table after each adjustment.
- **The environment check reports `[MANUAL]`.** Exit code `3` means you need to supply the remaining items manually, such as the AnyGrasp license, detection weights, or hand-eye matrix. Add the files and rerun the check with the same arguments. [Environment and SDK troubleshooting](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md)
- **An older script is missing.** Start each example with the `run.sh` file in its directory. Compatibility launchers are under `scripts/legacy/`, for example `bash scripts/legacy/anygrasp.sh`. Run `bash scripts/run_python.sh -m rebot_grasp --help` to see the project CLI options.

For the complete list of entry points and coordinate conventions, see the [example index](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/README.md) and [project architecture](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/architecture.md).
