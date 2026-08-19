---
description: Build a four-camera fisheye surround-view demo on Jetson. Stitch a real-time BEV for chassis positioning, use YOLO to assist robot-arm grasping, and use a VLM to help understand the scene.
title: Build a Four-Camera Fisheye Surround View Demo on Jetson
keywords:
  - Jetson
  - Computer Vision
  - surround view
  - fisheye
  - BEV
  - bird's-eye view
  - YOLO
  - VLM
  - robot arm
  - reComputer
image: https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif
slug: /jetson_fisheye_surround_view_demo
last_update:
  date: 08/19/2026
  author: haochen
createdAt: '2026-08-18'
updatedAt: '2026-08-19'
url: https://wiki.seeedstudio.com/jetson_fisheye_surround_view_demo/
---

## Introduction

This project shows a **four-camera fisheye surround-view system** on NVIDIA Jetson. Four fisheye cameras around the chassis are calibrated, undistorted, and stitched into a real-time **bird's-eye view (BEV)**.

The BEV is then used as a shared perception layer:

- **Occupancy analysis** gives nearby free-space and obstacle hints for **chassis movement**
- **YOLO-World** detects and localizes targets to **assist robot-arm grasping**
- **A VLM** generates a short English caption to **help you understand the scene**

This demo is intended to assist **robot-arm grasping** and provide **positioning support for chassis movement**.

<div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif" />
</div>

In the demo, the four cameras face **front, back, left, and right**. After calibration and GPU stitching, the top-down BEV follows this layout:

- **Top of the image** = vehicle front
- **Center of the image** = vehicle body
- Nearby obstacles and free directions are visible around the chassis
- Targets such as bottles, cartons, or chairs can be localized in the vehicle frame for grasp assistance
- The VLM can summarize the current view in short English for scene understanding

## What Each Module Does

| Module | What it does | What it is for |
| --- | --- | --- |
| Surround stitching | Builds a real-time top-down BEV from four fisheye cameras | Shared surround view around the chassis |
| Occupancy analysis | Estimates nearby free space and obstacles on the ground plane | Assist chassis movement and positioning |
| YOLO-World | Detects open-vocabulary targets and reports 2D position in the vehicle frame | Assist robot-arm grasping |
| VLM caption | Generates a short English description of the current BEV | Help an operator or agent understand the scene |

:::note
YOLO is for **where the target is**. The VLM is for **what the scene looks like**. Occupancy is a 2D ground hint, not a LiDAR map, and the VLM caption is not a coordinate source.
:::

## Key Features

- Real-time **four-camera fisheye surround stitching**
- **GPU remap, warp, and blending** with CUDA OpenCV
- **Web-based calibration** for intrinsics, extrinsics, and seams
- **Occupancy grid** for chassis movement assistance
- **YOLO-World open-vocabulary detection** for grasp assistance
- **VLM scene captioning** for scene understanding
- Support for **Jetson Thor** and **AGX Orin / generic Jetson** workflows

## What Is This Demo

This demo turns four fisheye streams into one BEV image, then runs perception on that shared view.

Compared with a single-camera pipeline, the surround-view workflow gives you:

- **360-degree ground awareness** around the chassis
- **Top-down visualization** that is easier to use for navigation and grasp assistance
- **One shared BEV** for occupancy, target localization, and scene captioning
- **A calibration flow** that can be repeated on real hardware

The pipeline is:

1. Capture images from four fisheye cameras
2. Run fisheye intrinsic calibration
3. Estimate extrinsic alignment and homographies
4. Undistort and warp each camera image onto a ground-plane BEV
5. Blend the four views into one surround image
6. Run occupancy, YOLO grasp assistance, and VLM scene understanding on the stitched BEV

## Prerequisites

### Hardware

- A Jetson device such as **Seeed reComputer Thor J601** or **Jetson AGX Orin**
- **Four USB fisheye cameras**
- A display or a remote desktop session
- Network access if you open the calibration page from another computer

Optional:

- A mobile chassis, if you want to use occupancy for movement assistance
- A robot arm, if you want to use YOLO target positions for grasp assistance

### Software

- JetPack supported by your target Jetson board
- CUDA-enabled OpenCV for real-time stitching
- Python environment for the web calibration UI
- YOLO-World and optional VLM model dependencies

## Installation and Setup

### Step 1. Clone the Repository

```bash
git clone https://github.com/xbs0325/j601-surround-demo.git
cd j601-surround-demo
```

### Step 2. Build CUDA OpenCV

Before running the live surround-view demo, make sure CUDA-enabled OpenCV is available.

```bash
cd ~/j601-surround-demo
./scripts/build_opencv_cuda.sh --jobs $(nproc)
source scripts/env_opencv_cuda.sh
python3 -c "import cv2; print(cv2.__version__, cv2.cuda.getCudaEnabledDeviceCount())"
```

If the setup is correct, the CUDA device count should be `1`.

### Step 3. Install Web Calibration Dependencies

The calibration web UI depends on `aiortc` and related Python packages.

```bash
./scripts/install_web_deps.sh
```

:::tip
On Ubuntu 24.04, do not run a plain `pip3 install -r requirements.txt` into the system Python. This project keeps the stitching environment separate from the perception model environment.
:::

### Step 4. Install Perception Dependencies

To enable YOLO-World grasp assistance and VLM scene understanding, run:

```bash
./scripts/setup_perception_thor.sh
./scripts/download_perception_models.sh
```

This prepares the perception environment and downloads the required model files.

## How to Use

Calibrate the four cameras first, then start the live surround-view demo. Do **not** run both at the same time; they need exclusive camera access.

### Step 1. Check Camera Mapping

Camera device mapping is defined in:

```bash
config/camera_profile.json
```

Typical mapping in the repository:

- `front`: `/dev/video0`
- `back`: `/dev/video2`
- `left`: `/dev/video3`
- `right`: `/dev/video1`

Confirm these device nodes before calibration. After the demo is running, you can double-check by covering the **front** camera: the **top** of the BEV image should go dark. If front and back are swapped, change the device mapping in the config file. Do not edit the calibration result files for this.

### Step 2. Open the Calibration Web UI

Start the calibration service:

```bash
./calib.sh
```

Then open the calibration page in your browser:

```text
http://<board-ip>:8787/
```

<div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_02.png" />
</div>

The calibration UI is used for:

- intrinsic calibration
- extrinsic alignment
- seam refinement

For seam refinement, follow the repository pairing:

- `front + left`
- `front + right`
- `back + left`
- `back + right`

Place the chessboard in the overlap between the two camera views. When both views detect the board and show ready status, the system can refine that seam.

### Step 3. Run the Demo

After calibration is complete, start the surround-view demo:

```bash
./run.sh
```

This launches the live BEV pipeline: stitching, occupancy, YOLO grasp assistance, and optional VLM scene captioning.

You can also start the perception launcher directly:

```bash
./scripts/run_perception.sh --vlm off --mode nav --range 2.5
./scripts/run_perception.sh --mode grasp --target bottle
```

### Common Modes

| Goal | Command |
| --- | --- |
| Chassis movement assistance | `./scripts/run_perception.sh --vlm off --mode nav --range 2.5` |
| Robot-arm grasp assistance | `./scripts/run_perception.sh --mode grasp --target bottle` |
| Headless run | `./scripts/run_perception.sh --no-window` |
| Offline smoke test | `/usr/bin/python3 -m perception.smoke_offline` |

- `--mode nav` focuses on occupancy around the chassis
- `--mode grasp --target bottle` asks YOLO to look for a grasp target
- `--vlm off` skips scene captioning when you only need positioning or detection

## Demo Result and Controls

When the demo window is running, these keyboard shortcuts are available:

| Key | Action |
| --- | --- |
| `ESC` or `q` | Quit |
| `o` | Run YOLO-World once for grasp assistance |
| `a` | Trigger one VLM caption for scene understanding |
| `s` | Save a frame |
| `m` | Toggle occupancy map |

During runtime, the demo can also write:

- `output/perception/preview.jpg`
- `events.jsonl`

These files are useful for debugging, validation, and later integration.

## Coordinate Convention

The project uses this BEV convention:

| Item | Meaning |
| --- | --- |
| Image up | Vehicle front |
| `base_link` origin | Approximately the BEV center |
| `+X` | Forward |
| `+Y` | Left |

YOLO can therefore report approximate 2D target positions, such as direction, forward distance, and lateral offset, to assist grasping.

The result is still a **ground-plane approximation**. It is not a 6-DoF grasp pose and should not be treated as precise manipulation ground truth.

## Notes and Limitations

- This demo provides **perception assistance**. It does **not** send control commands to the chassis or arm
- **YOLO** localizes targets to assist grasping; it does not close the grasp loop by itself
- **VLM** output is for **scene understanding**, not for coordinates
- Occupancy is a **2D ground hint**, not a LiDAR SLAM map
- Real-time stitching is intended for **CUDA-enabled Jetson systems**
- CPU-only mode is useful for debugging, but not recommended for live deployment

## Resources

- [Getting Started with reComputer Robotics J601](https://wiki.seeedstudio.com/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/)
- [GitHub](https://github.com/xbs0325/j601-surround-demo)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
