---
description: 本维基演示如何在 reComputer-RK 上使用 YOLOv11
title: 在 reComputer-RK 上使用 YOLOv11 进行目标检测
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
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/cn/object_detection_with_yolov11_on_recomputer_rk/
---

# 在 reComputer-RK 上使用 YOLOv11 进行目标检测
本项目为 Rockchip 系列开发板（RK3588 和 RK3576）提供工业级、高性能的计算机视觉（CV）应用解决方案。项目深度集成 YOLOv11 目标检测模型，利用 NPU 加速，实现低延迟、高帧率的实时推理。
## 项目结构
项目按平台进行组织，以管理 RKNN-Toolkit2 的特定驱动和运行时需求：
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

## 硬件兼容性
虽然两款芯片都提供 6 TOPS 的 NPU 性能，但它们在 Docker 中需要不同的硬件路径映射。

| 平台 | SoC | NPU 节点 | 推荐摄像头 | 镜像标签 |
| :--- | :--- | :--- | :--- | :--- |
| **RK3588** | RK3588/RK3588S | `/dev/dri/renderD129` | `/dev/video1` | `rk3588-yolo` |
| **RK3576** | RK3576 | `/dev/dri/renderD128` | `/dev/video0` | `rk3576-yolo` |

## 入门指南
### 安装 Docker
在你的开发板上安装标准 Docker 引擎：
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo systemctl enable --now docker
```

### X11 转发（可选）
如果希望在直接连接到开发板的显示器上看到检测窗口：
```bash
xhost +local:docker
```

### 运行检测项目
应用程序具备自动检测功能：如果未发现显示设备，将自动启动 MJPEG 流，可通过浏览器访问。
#### 适用于 reComputer RK3588：
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

#### 适用于 reComputer RK3576：
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


## Web 交互与实时流
本项目包含兼容 Ultralytics 标准的 RESTful API，可通过 `http://<Board_IP>:8000.` 访问。
- **实时视频流：** 访问 /api/video_feed。可直接嵌入到 HTML 中：
```bash
<img src="http://<IP>:8000/api/video_feed">.
```

- **静态图像推理：**

```bash
curl -X POST "http://localhost:8000/api/models/yolo11/predict" -F "file=@/home/user/test.jpg"
```

- 动态配置：

```bash
# Modify confidence threshold without restarting
curl -X POST "http://localhost:8000/api/config" -d '{"obj_thresh": 0.5}'
```

## 开发者指南
### 自定义模型部署
1. 将转换好的 .rknn 模型放置在主机目录中。
2. 创建一个类别配置文件 class_config.txt（例如："person"、"car"）。
3. 通过 -v 挂载，并在启动命令中指定路径：
```bash
sudo docker run ... \
    -v $(pwd)/my_model.rknn:/app/model/my_model.rknn \
    -v $(pwd)/class_config.txt:/app/class_config.txt \
    ... \
    python web_detection.py --model_path model/my_model.rknn --class_path class_config.txt
```

### CLI 参数参考
web_detection.py 支持以下参数：

| 参数 | 描述 | 默认值 |
| :--- | :--- | :--- |
| `--model_path` | RKNN 模型文件路径 | （必填） |
| `--camera_id` | 摄像头 ID（例如 0 对应 `/dev/video0`） | 1 |
| `--class_path` | 自定义类别配置文件路径 | None（默认 COCO 80） |
| `--port` | Web 服务器端口 | 8000 |

## 演示视频
观看 YOLOv11 运行在 Seeed 即将推出的 Rockchip RK3576 开发套件最新 EVT 样品上的效果：


<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/5WdCvyrCF5Q" title="Object Detection with YOLOv11 on reComputer-RK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>