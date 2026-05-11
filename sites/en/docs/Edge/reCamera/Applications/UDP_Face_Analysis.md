---
description: This demo shows how to perform real-time face detection, attribute analysis (age/gender/race), and emotion recognition on reCamera, then stream results via UDP to a PC for display.
title: UDP Face Analysis with reCamera
keywords:
  - reCamera
  - Face Detection
  - Age Gender Race
  - Emotion Recognition
  - UDP Streaming
  - Edge AI
  - YOLO
image: https://files.seeedstudio.com/wiki/reCamera/recamera-udp-face-show.gif
slug: /recamera_udp_face_analysis
sku: 102991897,102991896,102991894,102991895,101991223,102991898,101991224,102991899,108990119,108990120,E20245041001,100018917, 100041077, 100029708, 100074316
sidebar_position: 12
last_update:
  date: 04/30/2026
  author: Samuel
createdAt: '2026-04-30'
updatedAt: '2026-05-06'
url: https://wiki.seeedstudio.com/recamera_udp_face_analysis/
---

# UDP Face Analysis with reCamera

## Introduction

This demo demonstrates how to build a real-time face analysis system using reCamera. The system performs:

- **Face Detection**: Using YOLO face detection model
- **Attribute Analysis**: Age, Gender, and Race estimation using FairFace model
- **Emotion Recognition**: 7-class emotion detection
- **UDP Streaming**: Send JPEG frames with detection metadata to PC via UDP

The C++ application runs on reCamera and pushes video frames along with detection results (bounding boxes, attributes) through UDP. A Python receiver script running on your PC displays the annotated video stream in real-time.

**Key Features**:
- Real-time face detection with confidence threshold control
- Multi-attribute analysis per face (gender, age, race, emotion)
- Efficient UDP streaming with JPEG compression
- Skip-frame inference to reduce CPU/TPU load
- Detailed performance statistics

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/recamera-udp-face-show.gif" /></div>

## Demo Setup

To set up this demo, you need to:

1. Compile the C++ program on ReCamera
2. Run the compiled executable on ReCamera
3. Run the Python receiver script on your PC

### 1. Compile the C++ Program

:::note
Before building this solution, make sure you have set up the **ReCamera-OS** environment according to the main project documentation.
:::

Set the following environment variables for the **ReCamera-OS** build environment before running `cmake`:

```bash
export PATH='current compile chain path'/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

First, ensure you have the required models:
- `yolo_face.cvimodel` - YOLO face detection model
- `age_gender_race.cvimodel` - FairFace model for age/gender/race
- `emotion.cvimodel` - Emotion recognition model

You can download these three model files from the [sscma-example-sg200x v1.0.1 release](https://github.com/RobotXTeam/sscma-example-sg200x/releases/tag/v1.0.1), or train your own models and then quantize/convert them to `.cvimodel` format.

Navigate to the solution directory and compile:

```bash
git clone https://github.com/RobotXTeam/sscma-example-sg200x.git
cd sscma-example-sg200x/solutions/sesg-project/face_udp
export SG200X_SDK_PATH='current clone path'/sg2002_recamera_emmc
rm -rf build && mkdir build && cd build
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-std=c++17" ..
make -j$(nproc)
```

The compiled executable will be at: `build/face_udp`

:::note
The repository includes pre-compiled models in the solution folder:
- `yolo-face_mixfp16.cvimodel`
- `age_gender_race_bf16.cvimodel`
- `emotion_bf16.cvimodel`
:::

### 2. Configure ReCamera

:::warning
Before running the C++ program, you must stop the default Node-RED services as they occupy the camera resources. Run the following commands via SSH:
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 3. Run the Executable on ReCamera

Upload the compiled executable and models to `/home/recamera/` on ReCamera, then run:

```bash
chmod +x face_udp
./face_udp <yolo_face.cvimodel> <age_gender_race.cvimodel> <emotion.cvimodel> [single|multi] [threshold] [skip] [udp_ip] [udp_port] [log_every_n_infer]
```

#### Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `yolo_face.cvimodel` | YOLO face detection model (required) | - |
| `age_gender_race.cvimodel` | FairFace model (required) | - |
| `emotion.cvimodel` | Emotion model (required) | - |
| `single\|multi` | YOLO head type | multi |
| `threshold` | Detection threshold | 0.5 (multi) / 0.7 (single) |
| `skip` | Inference every N frames | 3 (multi) / 1 (single) |
| `udp_ip` | PC IP address for UDP | - |
| `udp_port` | UDP port number | - |
| `log_every_n_infer` | Print log every N inferences | 20 |

#### Example Commands

**Basic usage (no UDP streaming)**:
```bash
./face_udp yolo-face_mixfp16.cvimodel age_gender_race_bf16.cvimodel emotion_bf16.cvimodel
```

**With UDP streaming**:
```bash
./face_udp yolo-face_mixfp16.cvimodel age_gender_race_bf16.cvimodel emotion_bfpf16.cvimodel multi 0.5 3 192.168.31.100 5001
```

:::note
Remember to replace `192.168.31.100` with your PC's actual IP address on the same network as ReCamera.
:::

### 4. Run the Python Receiver on PC

On your PC, ensure Python with required libraries is installed:

```bash
pip install opencv-python numpy
```

Navigate to the solution directory and run:

```bash
cd sscma-example-sg200x/solutions/sesg-project/face_udp
python3 udp_receiver.py
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/udp_receiver_show.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/udp_receiver_demo.gif" /></div>

## Expected Output

### On ReCamera Terminal

The program will display real-time performance statistics every 2 seconds:

```
========== Performance Stats (Last 2 Seconds) ==========
Video FPS: 30.2 | UDP FPS: 9.8
Frames: 300 | Inferences: 100

Average YOLO Timing:
  Preprocess: 0.9 ms
  Inference:  35.5 ms
  Postprocess: 32.3 ms
  Total: 68.7 ms

Average Attribute/Emotion Overhead:
  mmap: 1.2 ms
  AGR: 45.3 ms/frame | 45.3 ms/face
  EMO: 12.1 ms/frame | 12.1 ms/face

UDP Send:
  avg_send: 2.1 ms | throughput: 850.5 kbps
======================================
```

### On Python Receiver Window

The PC will display a window showing:
- Live video stream with JPEG frames
- Face bounding boxes (green rectangles)
- Attribute labels in the top-left corner:
  - Gender (Male/Female)
  - Age range
  - Race classification
  - Emotion (angry/disgust/fear/happy/sad/surprise/neutral)



## Troubleshooting

### Camera Access Error

If you see "No camera" error:
- Ensure Node-RED services are stopped (see Step 2 above)
- Check camera connection

### UDP Connection Failed

If PC doesn't receive data:
- Verify PC and ReCamera are on the same network
- Check firewall settings on PC
- Confirm UDP port 5001 is not blocked
- Test with `ping` between devices

### Model Load Error

If model fails to load:
- Verify model files are uploaded to `/home/recamera/`
- Check file permissions with `ls -la`
- Ensure sufficient storage space

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
