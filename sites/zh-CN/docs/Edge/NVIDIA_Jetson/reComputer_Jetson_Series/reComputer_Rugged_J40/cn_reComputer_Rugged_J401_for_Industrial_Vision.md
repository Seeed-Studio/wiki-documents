---
description: 探索在工业叉车上使用 reComputer Rugged J401 的四种计算机视觉应用，包括目标跟踪、后方区域预警、驾驶员监测和视频录制。
title: 面向工业视觉的 reComputer Rugged J401
keywords:
  - reComputer Rugged J401
  - Jetson Orin NX
  - Industrial Vision
  - EfficientTAM
  - Depth Anything V2
  - TensorRT
  - RTSP
  - MediaPipe
image: https://files.seeedstudio.com/wiki/rugged/rugged_banner.png
slug: /ai_robotics_recomputer_rugged_j401_cv_demo
sku: 100046979,100002634
last_update:
  date: 09/20/2026
  author: Zibo
createdAt: '2026-09-20'
updatedAt: '2026-09-20'
url: https://wiki.seeedstudio.com/cn/ai_robotics_recomputer_rugged_j401_cv_demo/
---

## 介绍

工业叉车工作在装卸区、仓库、室外堆场、冷库和冲洗区域。粉尘、水、振动、温度变化以及不可靠的网络覆盖，使这些环境对传统计算机来说非常严苛。车载视觉系统需要密封的硬件、安全的连接器、稳定的摄像头供电，以及足够的本地算力在车辆上处理视频。

本 wiki 介绍了在工业叉车上使用计算机视觉的几种方式。示例使用 reComputer Rugged J401 作为边缘控制器。其 IP66 外壳、M12 接头、抗振设计、四个 PoE 端口以及 Jetson Orin NX，使其可以靠近摄像头部署并在本地运行视觉工作负载。

该示例涵盖四项实用任务：跟踪叉车前方选定目标、监控后方盲区、检查驾驶员疲劳和安全帽佩戴情况，以及录制视频以供事后回放。这四项任务都通过一个 Web 控制台进行管理。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/rugged_banner.png" alt="application banner" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Rugged-J4012-p-6920.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}>立即获取 🖱️</font></span></strong>
</a>
</div>


:::warning
本项目是辅助原型，而非功能安全系统。它没有任何安全认证，绝不能替代操作员自身的安全检查。当摄像头或推理流水线发生故障时，后方预警视图会报告 `SYSTEM ERROR`。
:::

## 前提条件

- reComputer Rugged J4012 / J3011
- 已安装 JetPack 5.1.3
- POE 摄像头 / USB 摄像头
- 可用于下载软件包和模型的互联网连接
- 建议至少预留 30 GB 可用存储空间


## 工业叉车的视觉应用
本案例使用两路 48V POE 摄像头和一路 USB 摄像头。根据不同场景，这些摄像头可以自由替换。
### 硬件连接
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/poe_connection.png" alt="application banner" />
</div>

### 前视目标跟踪

在托盘搬运过程中，操作员可能需要在叉车移动时始终关注特定货物或作业区域。前视应用使用 EfficientTAM 实现点击分割跟踪。操作员在视频中选择一个目标，系统会在后续帧中跟随其轮廓。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/seg_demo.jpg" alt="" />
</div>


这是交互式跟踪，而不是自动目标识别。当目标会在不同任务之间变化，并且操作员可以直接选择时，这种方式非常有用。

### 后方区域预警

配重和门架会在叉车周围形成较大的盲区。后向 PoE 摄像头使用 Depth Anything V2 估计场景深度，并结合行人检测模型监控车辆后方的作业区域。界面会根据配置的距离阈值报告 `SAFE`、`WARNING` 或 `DANGER`。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/depth_demo.jpg" alt="" />
</div>

:::note
单目深度估计存在局限性，实际距离并不可靠。必须根据现场条件和需求调整报警阈值！
:::

### 驾驶员与 PPE 监测

驾驶室摄像头可以检查从外部不可见的状态。MediaPipe 面部关键点提供与疲劳相关的信号，另一个模型用于检查安全帽佩戴状态。当模型算法检测到驾驶员在操作过程中出现疲劳时，会触发警示灯提醒驾驶员，防止疲劳驾驶引发重大安全事故。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/detect_demo.jpg" alt="" />
</div>


### 多摄像头录制

我们可以在单一仪表盘上显示来自不同视角的监控画面，方便实时监控现场情况。

<div align="center">
  <img width="1000" src="https://raw.githubusercontent.com/zibochen6/rugged_cv_demo/main/docs/images/dashboard.png" alt="Industrial forklift vision dashboard" />
</div>


## 系统概览

| 应用 | 摄像头 | 视觉方法 |
| --- | --- | --- |
| 前视 | PoE RTSP | EfficientTAM 点击分割跟踪 |
| 后视 | PoE RTSP | Depth Anything V2 度量深度预警，状态包括 `SAFE`、`WARNING`、`DANGER` 和 `SYSTEM ERROR` |
| 驾驶室 | USB UVC | MediaPipe 疲劳检测和安全帽状态 |
| 录制 | 任意已配置摄像头 | 1080p H.264 MP4 录制，无 AI 推理 |

FastAPI 服务器负责启动和停止各个应用，防止两个应用同时打开同一摄像头，并将视频流发送到浏览器。模型和摄像头在被请求前保持空闲，因此未使用的应用不会占用 GPU 内存。

## 部署示例应用

### 步骤 1. 安装系统软件包

```bash
sudo apt-get update
sudo apt-get install -y python3.8-venv python3-opencv libopenblas-base logrotate nodejs npm

python3 -c "import cv2; print([line.strip() for line in cv2.getBuildInformation().splitlines() if 'GStreamer' in line])"
```

输出中必须显示 `GStreamer: YES`。不要用 PyPI 的 `opencv-python` wheel 替换系统 OpenCV；该 wheel 不提供本示例用于 RTSP 采集所需的 GStreamer 支持。

### 步骤 2. 克隆项目并创建环境

```bash
git clone https://github.com/zibochen6/rugged_cv_demo.git /home/seeed/workspace/seg_demo
cd /home/seeed/workspace/seg_demo

python3 -m venv .venv
.venv/bin/python -m pip install --upgrade pip setuptools wheel
.venv/bin/pip install "numpy==1.24.4"

curl -fL --retry 3 -o /tmp/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl \
  https://developer.download.nvidia.com/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
.venv/bin/pip install /tmp/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl

git clone --branch v0.16.2 --depth 1 https://github.com/pytorch/vision.git /tmp/vision
cd /tmp/vision
MAX_JOBS=4 /home/seeed/workspace/seg_demo/.venv/bin/python setup.py install
cd /home/seeed/workspace/seg_demo
```

将虚拟环境指向 JetPack 的 OpenCV 和 TensorRT 软件包，然后安装项目依赖：

```bash
SP="$(.venv/bin/python -c 'import site; print(site.getsitepackages()[0])')"
printf "import sys; sys.path.insert(0, '/usr/lib/python3.8/dist-packages')\n" \
  > "$SP/_system_opencv_prepend.pth"

.venv/bin/pip install -r requirements-jetson.txt
.venv/bin/pip install -r backend/requirements.txt

cd frontend
npm ci
npm run build
cd ..
```

### 步骤 3. 安装 EfficientTAM 并下载模型

```bash
mkdir -p third_party checkpoints models/onnx models/tensorrt models/mediapipe
git clone --depth 1 https://github.com/yformer/EfficientTAM.git third_party/EfficientTAM

Efficient_Track_Anything_BUILD_CUDA=0 .venv/bin/pip install \
  -e third_party/EfficientTAM --no-build-isolation --no-deps --ignore-requires-python

.venv/bin/pip install --no-deps "ultralytics==8.3.40" "ultralytics-thop==2.0.14"
.venv/bin/pip install "onnx==1.14.1" "matplotlib==3.7.5" "pandas==2.0.3" \
  "seaborn==0.13.2" "psutil==6.1.1" "py-cpuinfo==9.0.0" "scipy==1.10.1"

curl -fL --retry 3 -o checkpoints/efficienttam_ti_512x512.pt \
  https://huggingface.co/yunyangx/efficient-track-anything/resolve/main/efficienttam_ti_512x512.pt

.venv/bin/huggingface-cli download depth-anything/Depth-Anything-V2-Metric-Indoor-Small-hf \
  --local-dir checkpoints/depth_anything_v2_metric_indoor_small

curl -fL --retry 3 -o models/mediapipe/face_landmarker.task \
  https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task

curl -fL --retry 3 -o checkpoints/yolov8n.pt \
  https://github.com/ultralytics/assets/releases/download/v8.3.0/yolov8n.pt
```

<details>
<summary>导出 ONNX 模型并构建 TensorRT 引擎</summary>

在项目根目录创建 `export_depth_onnx.py`：

```python
import os
import torch
from transformers import DepthAnythingForDepthEstimation

cam_w, cam_h = 2304, 1296
longest, multiple = 518, 14
scale = longest / float(max(cam_h, cam_w))
in_h = max(multiple, (int(round(cam_h * scale)) // multiple) * multiple)
in_w = max(multiple, (int(round(cam_w * scale)) // multiple) * multiple)
output = "models/onnx/depth_metric_small_518.onnx"

model = DepthAnythingForDepthEstimation.from_pretrained(
    "checkpoints/depth_anything_v2_metric_indoor_small"
).eval()


class Wrapped(torch.nn.Module):
    def __init__(self, depth_model):
        super().__init__()
        self.depth_model = depth_model

    def forward(self, pixel_values):
        return self.depth_model(pixel_values=pixel_values).predicted_depth


os.makedirs(os.path.dirname(output), exist_ok=True)
torch.onnx.export(
    Wrapped(model),
    (torch.zeros((1, 3, in_h, in_w), dtype=torch.float32),),
    output,
    input_names=["pixel_values"],
    output_names=["predicted_depth"],
    opset_version=16,
    do_constant_folding=True,
)
print("ONNX written:", output)
```

导出深度和行人模型，然后下载实验性的安全帽模型：

```bash
.venv/bin/python export_depth_onnx.py

.venv/bin/python - <<'PY'
from pathlib import Path
from ultralytics import YOLO

result = Path(YOLO("checkpoints/yolov8n.pt").export(
    format="onnx", imgsz=640, opset=12, simplify=False, dynamic=False
))
Path("models/onnx/yolov8n_person.onnx").write_bytes(result.read_bytes())
PY

curl -fL --retry 3 -o models/onnx/ppe_hard_hat.experimental.onnx \
  https://raw.githubusercontent.com/Sanaurrehmanarain/object-detection-yolov8/main/best.onnx
```

在 J401 上构建全部三个引擎。TensorRT 引擎与 GPU 架构和 TensorRT 版本绑定，因此不要复制在其他计算机上构建的引擎。

```bash
TRTEXEC=/usr/src/tensorrt/bin/trtexec
[ -x "$TRTEXEC" ] || TRTEXEC="$(command -v trtexec)"

"$TRTEXEC" --onnx=models/onnx/depth_metric_small_518.onnx \
  --saveEngine=models/tensorrt/depth_metric_small_518_fp16.engine \
  --fp16 --workspace=1024

"$TRTEXEC" --onnx=models/onnx/yolov8n_person.onnx \
  --saveEngine=models/tensorrt/yolov8n_person_fp16.engine \
  --fp16 --workspace=2048

"$TRTEXEC" --onnx=models/onnx/ppe_hard_hat.experimental.onnx \
  --saveEngine=models/tensorrt/ppe_hard_hat_fp16.engine \
  --fp16 --workspace=1024
```

</details>

### 步骤 4. 安装服务并配置相机

在安装服务之前预览系统更改：

```bash
sudo ./deploy/install.sh --dry-run
sudo ./deploy/install.sh
```

将 RTSP 凭据存储在受保护的环境文件中：

```bash
sudo tee /etc/seg-demo/visual-hub.env >/dev/null <<'EOF'
FRONT_CAMERA_URL=rtsp://<user>:<password>@192.168.10.20:554/
REAR_CAMERA_URL=rtsp://<user>:<password>@192.168.10.21:554/
DMS_CAMERA=usb:0
EOF
sudo chmod 600 /etc/seg-demo/visual-hub.env

sudo systemctl start visual-hub
curl -s http://127.0.0.1:8000/api/health
```

## 试用应用

在同一局域网中的浏览器中打开以下地址：

```text
http://<Jetson-LAN-IP>:8000/
```

使用每个卡片上的相机选择器确认前视、后视和驾驶室视频源。已被某个应用使用的相机在其停止前对其他应用不可用。分别测试每个应用，再使用 **Start All**。

### 跟踪叉车前方的物体

1. 选择前向 PoE 相机并启动前视应用。
2. 点击需要被跟踪的物体或货物。
3. 如果掩膜包含了部分背景，则添加负样本点。
4. 在选择另一个目标前清除当前选择。

第一次加载模型需要几秒钟。一旦选择了目标，掩膜会在后续帧中跟随它，并在其短暂离开视野后尝试再次锁定。

### 检查后方工作区域

选择后向 PoE 相机并启动后视应用。当估计距离跨越配置的阈值时，状态面板会在 `SAFE`、`WARNING` 和 `DANGER` 之间变化。

在使用显示的距离之前，请在 `configs/warning.yaml` 中设置相机内参、安装高度、俯仰角和距离修正。更换相机或安装位置需要重新标定。

### 启用驾驶室监控

选择驾驶室 USB 相机并启动驾驶室应用。疲劳检测和安全帽检测有各自的开关。关闭不需要的路径，其模型将不会被加载。

将相机放置在既能看到驾驶员面部又不遮挡操作员视线的位置。在正常班次使用的相同光照条件下进行测试。


有用的服务命令：

```bash
sudo systemctl restart visual-hub
./scripts/run_visual_hub.sh status
./scripts/run_visual_hub.sh stop
journalctl -u visual-hub -f
```

## 实测性能

这些数据是在 reComputer Rugged J401（搭载 Jetson Orin NX 16GB）上运行四个应用时测得的。在对比结果前运行 `sudo nvpmodel -m 0 && sudo jetson_clocks`。

| 应用 | 配置 | 实测结果 |
| --- | --- | --- |
| 前视分割 | EfficientTAM-Ti, 512, PyTorch bf16 | 约 13.2 FPS；首次加载耗时 7 到 8 秒 |
| 后方预警 | Depth Anything V2 Metric Small, TensorRT FP16 | 深度处理约 21 FPS |
| 驾驶室监控 | 1280x720 USB 相机 | 启用疲劳和安全帽检测时约 5.4 FPS |
| 录制 | 三路流，`nvv4l2h264enc` | 3 路 1920x1080、15 FPS、H.264 |

实际吞吐量取决于相机分辨率、电源模式、温度以及活动应用的数量。

## 故障排查

| 现象 | 检查 | 解决方法 |
| --- | --- | --- |
| 端口 8000 不可用 | `systemctl status visual-hub` | 重启服务并检查 `journalctl -u visual-hub` |
| 某个应用报告 `CAMERA_BUSY` | `curl -s http://127.0.0.1:8000/api/hub/status` | 停止占用该相机的应用或录制任务 |
| 某个 USB 相机无法打开 | `sudo dmesg \| grep -i "not enough bandwidth"` | 将其移到 USB 3 或停止其他 USB 流 |
| 某路 RTSP 流冻结 | 在应用状态中检查 `frame_age_s` | 确认相机供电、PoE 预算、网络路径和 RTSP 凭据 |
| 前视画面需要数秒才出现 | `journalctl -u visual-hub` | 第一次加载 EfficientTAM 模型通常需要 7 到 8 秒 |

对于在选择器中缺失的相机，请先检查清单：

```bash
curl -s http://127.0.0.1:8000/api/hub/cameras
```

将额外的 RTSP 源添加到 `/etc/seg-demo/visual-hub.env` 中的 `HUB_EXTRA_CAMERAS`，或通过选择器中的手动行输入 URL。

## 安全与应用限制

- 后方区域预警使用的是单目深度，而不是物理距离传感器。弱光、反射、透明物体、镜头污渍或剧烈振动都可能导致错误估计。
- 驾驶室监控使用 RGB 图像和固定的时间规则。它没有针对每位驾驶员的标定，也不支持夜视。
- 前视跟踪仅跟随一个由用户选择的目标。它不会识别该物体，也不会判断移动它是否安全。
- 安全帽模型仍处于实验阶段。在投入实际使用前，请审查其准确性、训练数据和许可证。
## 演示视频

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/X2OEmbMKadA" title="reComputer Rugged J401 industrial forklift vision demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 资源
- [reComputer Rugged J40 规格书](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_rugged_J401_datasheet.pdf) 
- [载板原理图](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20Carrier%20Board%20V1.1_SCH.pdf)
- [PSE 板原理图](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20PSE%20Board%20V1.1_SCH.pdf)
- [3D 文件](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Rugged_asm.stp)
- [Linux_for_Tegra 源码](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson 设备对比](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [rugged_cv_demo 项目仓库](https://github.com/zibochen6/rugged_cv_demo)
- [EfficientTAM](https://github.com/yformer/EfficientTAM)
- [Depth Anything V2 Metric Indoor Small](https://huggingface.co/depth-anything/Depth-Anything-V2-Metric-Indoor-Small-hf)
- [MediaPipe Face Landmarker](https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker)
- [Getting Started with reComputer Rugged J40](https://wiki.seeedstudio.com/cn/ai_robotics_recomputer_rugged_j40_getting_started/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
