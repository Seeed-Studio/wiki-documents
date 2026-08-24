---
description: Build a four-camera fisheye surround-view demo on Jetson AGX Thor. Stitch a real-time BEV for chassis positioning, use YOLO to assist robot-arm grasping, and use a VLM to help understand the scene.
title: Build a Four-Camera Fisheye Surround View Demo on Jetson AGX Thor
keywords:
  - Jetson AGX Thor
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
  - Sensing
image: https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif
slug: /jetson_fisheye_surround_view_demo
sku: 100066562, 101090101
last_update:
  date: 08/24/2026
  author: haochen
createdAt: '2026-08-18'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/jetson_fisheye_surround_view_demo/
---

## Introduction

This demo runs a **four-camera fisheye surround-view** pipeline on **NVIDIA Jetson AGX Thor**. Four cameras around the chassis are calibrated and stitched into a real-time **bird's-eye view (BEV)**. Occupancy hints chassis motion, YOLO-World localizes grasp targets, and a VLM captions the scene.

{/* <div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif" />
</div> */}

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/o0NTeeLV4Vk" title="Four-Camera Fisheye Surround View Demo on Jetson AGX Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

BEV layout after stitching:

- **Top of the image** = vehicle front
- **Center of the image** = vehicle body
- Cameras face **front, back, left, and right**

:::note
YOLO answers **where the target is**. The VLM answers **what the scene looks like**. Occupancy is a 2D ground hint, not a LiDAR map.
:::

This demo is verified on **reComputer Robotics J601**.

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reComputer Robotics J601 </th>
        <th> Sensing SG3S-ISX031C-GMSL2F </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090101-3mp-gmsl2-camera-module-190-degree.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thor-p-6937.html" target="_blank" rel="noopener noreferrer">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html" target="_blank" rel="noopener noreferrer">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

## Key Features

- GPU stitching with CUDA OpenCV
- Web calibration for intrinsics, extrinsics, and seams
- Occupancy, YOLO-World, and VLM on one shared BEV
- Verified on **Jetson AGX Thor** / **reComputer Robotics J601**

## Prerequisites

### Hardware

- **reComputer Robotics J601** (Jetson AGX Thor)
- **Four [Sensing SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html) GMSL2 fisheye cameras**
- **One [Mini-Fakra 4-in-1 cable](https://www.seeedstudio.com/Mini-fakra-Coaxial-Cable-4-in-1-0-5m-Female-to-Female-p-6484.html)** so all four cameras share a single GMSL port
- A display or a remote desktop session
- Network access if you open the calibration page from another computer

Optional:

- A mobile chassis, if you want to use occupancy for movement assistance
- A robot arm, if you want to use YOLO target positions for grasp assistance

### Software

- JetPack with GMSL driver support for J601
- CUDA-enabled OpenCV for real-time stitching
- Python environment for the web calibration UI
- YOLO-World and optional VLM model dependencies

## Hardware Connection

Connect four Sensing GMSL2 fisheye cameras to **one Mini-Fakra GMSL port** on **reComputer Robotics J601** before calibration. J601 has two Mini-Fakra connectors (up to eight GMSL2 cameras). This demo uses **one GMSL port** and a 4-in-1 Mini-Fakra cable.

1. Power the J601 board through the XT30 DC input.
2. If you are using the GMSL expansion board, seat it on the camera expansion header first.
3. Plug the Mini-Fakra 4-in-1 cable into **one Mini-Fakra GMSL port**.
4. Connect the four Sensing fisheye cameras to the four Fakra ends of that cable.
5. Mount the cameras around the chassis so they face **front, back, left, and right**.
6. Optionally connect an HDMI display if you want to watch the live BEV window on the board.

For GMSL bring-up on J601, see [Robotics J601 Hardware Interfaces Usage](https://wiki.seeedstudio.com/recomputer_jetson_robotics_j601_interfaces_usage/).

<div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_03.png" />
</div>

:::tip
After the cameras are connected, confirm the `/dev/video*` nodes and the mapping in `config/camera_profile.json`. See [Step 1. Check Camera Mapping](#step-1-check-camera-mapping).
:::

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
- Real-time stitching is intended for **CUDA-enabled Jetson AGX Thor**
- CPU-only mode is useful for debugging, but not recommended for live deployment

## Resources

- [Demo video](https://www.youtube.com/watch?v=o0NTeeLV4Vk)
- [Getting Started with reComputer Robotics J601](https://wiki.seeedstudio.com/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/)
- [Robotics J601 Hardware Interfaces Usage](https://wiki.seeedstudio.com/recomputer_jetson_robotics_j601_interfaces_usage/)
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
