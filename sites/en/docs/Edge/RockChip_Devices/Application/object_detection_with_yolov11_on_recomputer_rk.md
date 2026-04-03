---
description: This wiki demonstrates how to uses YOLOv11 on reComputer-RK
title: Object Detection with YOLOv11 on reComputer-RK
keywords:
  - RockChip
  - reComputer RK
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /object_detection_with_yolov11_on_recomputer_rk
last_update:
  date: 3/9/2026
  author: Nolan Chen
no_comments: false
createdAt: 2026-3-9
updatedAt: '2026-03-10'
url: https://wiki.seeedstudio.com/object_detection_with_yolov11_on_recomputer_rk/
---

# Object Detection with YOLOv11 on reComputer-RK
This project provides industrial-grade, high-performance Computer Vision (CV) application solutions for Rockchip series development boards (RK3588 and RK3576). It features deep integration of the YOLOv11 object detection model, leveraging NPU acceleration for low-latency, high-frame-rate real-time inference.
## Project Structure
The project is organized by platform to manage specific drivers and runtime requirements for the RKNN-Toolkit2:
```pl
reComputer-RK-CV/
├── docker/                 # Environment setup files
│   ├── rk3576/             # Dockerfile for RK3576 (rknn-rt 2.1.0+)
│   └── rk3588/             # Dockerfile for RK3588 (rknn-rt 2.1.0+)
├── src/                    # Implementation logic
│   ├── rk3576/             # RK3576 source, models, and dependencies
│   └── rk3588/             # RK3588 source, models, and dependencies
└── .github/workflows/      # CI/CD for automated image building
```

## Hardware Compatibility
While both chips offer 6 TOPS of NPU performance, they require different hardware path mappings within Docker.

| Platform | SoC | NPU Node | Recommended Camera | Image Tag |
| :--- | :--- | :--- | :--- | :--- |
| **RK3588** | RK3588/RK3588S | `/dev/dri/renderD129` | `/dev/video1` | `rk3588-yolo` |
| **RK3576** | RK3576 | `/dev/dri/renderD128` | `/dev/video0` | `rk3576-yolo` |

## Getting Started
### Install Docker
Install the standard Docker engine on your board:
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo systemctl enable --now docker
```

### X11 Forwarding (Optional)
To see the detection window on a monitor connected directly to the board:
```bash
xhost +local:docker
```

### Run the Detection Project
The application features Auto-Detection: if no display is found, it automatically starts an MJPEG stream accessible via your browser.
#### For reComputer RK3588:
```bash
sudo docker run --rm --privileged --net=host \
    -e DISPLAY=$DISPLAY \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -e PYTHONUNBUFFERED=1 \
    --device /dev/video1:/dev/video1 \
    --device /dev/dri/renderD129:/dev/dri/renderD129 \
    -v /proc/device-tree/compatible:/proc/device-tree/compatible \
    ghcr.io/seeed-projects/recomputer-rk-cv/rk3588-yolo:latest \
    python web_detection.py --model_path model/yolo11n.rknn --camera_id 1
```

#### For reComputer RK3576:
```bash
sudo docker run --rm --privileged --net=host \
    -e DISPLAY=$DISPLAY \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -e PYTHONUNBUFFERED=1 \
    --device /dev/video0:/dev/video0 \
    --device /dev/dri/renderD128:/dev/dri/renderD128 \
    -v /proc/device-tree/compatible:/proc/device-tree/compatible \
    ghcr.io/seeed-projects/recomputer-rk-cv/rk3576-yolo:latest \
    python web_detection.py --model_path model/yolo11n.rknn --camera_id 0
```


## Web Interaction & Real-time Streaming
The project includes a RESTful API compatible with Ultralytics standards, accessible via `http://<Board_IP>:8000.`
- **Real-time Video Feed:** Access /api/video_feed. Can be embedded directly in HTML: 
```bash
<img src="http://<IP>:8000/api/video_feed">.
```

- **Static Image Inference:**

```bash
curl -X POST "http://localhost:8000/api/models/yolo11/predict" -F "file=@/home/user/test.jpg"
```

- Dynamic Configuration:

```bash
# Modify confidence threshold without restarting
curl -X POST "http://localhost:8000/api/config" -d '{"obj_thresh": 0.5}'
```

## Developer Guide
### Custom Model Deployment
1. Place your converted .rknn model in a host directory.
2. Create a class configuration file class_config.txt (e.g., "person", "car").
3. Mount via -v and specify the paths in the startup command:
```bash
sudo docker run ... \
    -v $(pwd)/my_model.rknn:/app/model/my_model.rknn \
    -v $(pwd)/class_config.txt:/app/class_config.txt \
    ... \
    python web_detection.py --model_path model/my_model.rknn --class_path class_config.txt
```

### CLI Arguments Reference
web_detection.py supports the following parameters:

| Argument | Description | Default |
| :--- | :--- | :--- |
| `--model_path` | Path to the RKNN model file | (Required) |
| `--camera_id` | Camera ID (e.g., 0 for `/dev/video0`) | 1 |
| `--class_path` | Path to custom class configuration file | None (Default COCO 80) |
| `--port` | Web server port | 8000 |

## Demo Video
Watch YOLOv11 running on the latest EVT samples of Seeed's upcoming Rockchip RK3576 Dev Kit:


<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/5WdCvyrCF5Q" title="Object Detection with YOLOv11 on reComputer-RK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



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