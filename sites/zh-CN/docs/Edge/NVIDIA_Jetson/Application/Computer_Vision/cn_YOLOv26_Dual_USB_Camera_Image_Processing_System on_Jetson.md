---
description: 本指南展示如何在 Jetson 平台上，基于 YOLOv26 模型和 TensorRT 加速，构建一个双 GMSL 摄像头图像处理系统。该方案面向 reComputer J4012/AGX Orin 上的 Sensing SG3S-ISX031C-GMSL2F 摄像头，实现在 1920x1536@30fps 下运行。
title: 基于 Jetson 的 YOLOv26 双 GMSL 摄像头图像处理系统
keywords:
  - re
  - YOLOv26
  - Dual GMSL Camera
  - TensorRT
  - SG3S-ISX031C-GMSL2F
  - Computer Vision
  - Jetson
  - Object Detection
  - Pose Estimation
  - Image Segmentation
image: https://files.seeedstudio.com/wiki/yolov26_on_jetson/local.png
slug: /ai_roboticsyolov26_dual_camera_system
sku: 100090853,100076722,100060802,100032662
last_update:
  date: 02/10/2026
  author: Lorraine
---
## 介绍

随着人工智能和边缘计算技术的快速发展，工业视觉系统正朝着更智能和更高实时性的方向演进。基于深度学习模型的双摄像头图像处理系统可以实现多视角同时分析、目标检测、姿态估计以及实例分割，从而提升工业检测、机器人和自动化监控应用的效率与精度。本指南将介绍如何在 NVIDIA Jetson 平台上，使用 YOLOv26 和 TensorRT 加速，构建一个高性能的双 GMSL 摄像头图像处理系统。

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/detect.png" />
</div>

在本 wiki 中，我们将在 **reComputer Robotics J5011** 上部署使用 **TensorRT** 优化的 **YOLOv26** 模型，实现实时多任务视觉分析。系统采用 GMSL（Gigabit Multimedia Serial Link）摄像头进行高带宽、低延迟的视频传输，非常适合在复杂环境下的工业应用。我们将同时运行三个 YOLOv26 模型变体：目标检测、姿态估计和实例分割，全部通过 TensorRT 加速，以充分发挥 Jetson Orin 强大 GPU 的吞吐能力。

**什么是双 GMSL 摄像头图像处理系统？**

双 GMSL 摄像头图像处理系统是一种边缘 AI 解决方案，将双高分辨率摄像头与深度学习推理能力集成在一起。与传统的单摄像头视觉系统不同，双摄像头方案可以提供：
- **立体视觉**：实现深度感知和 3D 场景重建
- **更宽视场**：通过视角重叠覆盖更大区域
- **冗余性**：即使一台摄像头故障也能保证系统持续运行
- **多角度分析**：从不同视角捕获目标，提高识别精度

该系统利用 GMSL 接口，通过屏蔽线缆在较长距离（最长可达 15 米）上实现可靠的视频传输，非常适合存在电磁干扰的工业环境。

**为什么在 Jetson 上使用 YOLOv26？**

[Ultralytics Jetson Guide](https://docs.ultralytics.com/guides/nvidia-jetson/) 列出了 YOLOv26 在嵌入式部署方面的多项优势：

1. **在 ARM64 上的高效性**：模型架构针对 Jetson 设备中的 ARM64 处理器进行了优化，在保持高吞吐的同时降低功耗。
2. **Tensor Core 加速**：当导出为 **TensorRT** 时，YOLOv26 会使用 Jetson Orin 上 Ampere GPU 架构中的专用 Tensor Cores，这带来：
    -   **低延迟**：对实时工业检测至关重要。
    -   **高吞吐**：能够同时处理多路高分辨率视频流。
3. **统一框架**：单一架构即可支持多种任务（Detection、Segmentation、Pose），简化了在资源受限的边缘设备上的部署。

<div align="center">
    <img width={600}
    src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={'4'}> 立即购买 🖱️</font></span></strong>
</a></div>

## 关键特性

- **高分辨率 GMSL 采集**：支持双路 [Sensing SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html) 摄像头，分辨率为 **1920x1536**。
- **仅使用 TensorRT 推理**：通过纯 TensorRT 引擎消除 PyTorch 运行时开销，以获得最大吞吐。
- **多任务视觉分析**：同时进行目标检测、姿态估计和实例分割。
- **工业级优化**：
    - **输入**：1920x1536 @ 30fps（原始 YUY2）
    - **延迟**：通过 DMA 缓冲和多线程流水线将延迟降到最低

## YOLOv26 模型概览

本系统采用 **YOLOv26** 架构实现实时计算机视觉。我们部署的是 **Nano (n)** 系列模型，非常适合 NVIDIA Jetson Orin 等边缘 AI 设备。

**部署的模型**

我们将同时运行三个模型变体：

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/file2.png"/></div>

1.  **目标检测（`yolov26n`）**：
    -   **任务**：边界框检测与分类。
    -   **类别**：80 个标准 COCO 类别（Person、Vehicle 等）。
    -   **优势**：用于主要目标定位时推理速度极快。

2.  **姿态估计（`yolov26n-pose`）**：
    -   **任务**：人体骨骼关键点检测（17 个关键点）。
    -   **优势**：无需依赖重量级外部姿态库即可实现实时行为分析。

3.  **实例分割（`yolov26n-seg`）**：
    -   **任务**：像素级目标掩膜分割。
    -   **优势**：提供精确的目标轮廓，适用于仅靠边界框不足以完成的缺陷检测场景。

**优化策略**：所有模型均导出为 **TensorRT Engine 格式（.engine）**，并使用 **FP16 精度**。这不仅消除了 PyTorch 运行时开销，还最大化利用了 Orin 超过 100 TOPS（每秒万亿次运算）的 AI 性能。

## 前置条件

**硬件**

- **[reComputer Robotics J5011](https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html)**
- **2x [Sensing SG3S-ISX031C-GMSL2F Camera](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)**
- **GMSL 解串板**：需与 Jetson Orin 兼容（确保已安装驱动）
- **线缆**：高质量 Fakra 线缆

**软件**
- **JetPack 6.x**（L4T 36.x）
- 带 NVIDIA 加速插件的 **GStreamer**（`nvv4l2camerasrc` 或使用 `io-mode=dmabuf` 的标准 `v4l2src`）
- **Python 3.10+**
- **Ultralytics YOLOv26**

---

## 安装与配置

**步骤 0：检查摄像头参数**

首先，使用 v4l2-ctl 检查摄像头支持的格式和帧率：

```bash
v4l2-ctl -d /dev/video0 --list-formats-ext
v4l2-ctl -d /dev/video1 --list-formats-ext
```

该命令会显示摄像头在不同分辨率下的最大帧率。以 SG3S-ISX031C-GMSL2F 摄像头为例，输出如下所示：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/dp.png"/></div>

:::note
<mark>在 1920x1536 分辨率下的 30fps 限制是摄像头硬件本身的限制，而不是 AGX Orin 的性能上限。</mark> AGX Orin 在更低分辨率或更轻量模型下可以处理更高的帧率。如果你使用的是其他型号摄像头，请参考其数据手册中在目标分辨率下的最大帧率。
:::

**步骤 1：克隆仓库**

```bash
cd /home/seeed
git clone https://github.com/bleaaach/yolov26_jetson.git
cd yolov26_jetson
```
<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/file.png"/></div>

**详细安装步骤**

按照以下步骤从零开始搭建环境。

**步骤 1：更新软件包列表并安装 pip**

```bash
sudo apt update
sudo apt install python3-pip -y
pip install -U pip
```

如果系统中未预装 pip，请使用以下命令安装：

```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py --user
```

**步骤 2：安装 Ultralytics 包**

```bash
~/.local/bin/pip install ultralytics[export]
```

**步骤 3：安装 PyTorch 和 Torchvision**

通过 pip 安装的 PyTorch 和 Torchvision 与 Jetson 的 ARM64 架构不兼容，你需要手动安装专为 Jetson 构建的版本。

首先卸载不兼容的版本：

```bash
~/.local/bin/pip uninstall torch torchvision -y
```

然后安装与 JetPack 6.1 兼容的版本：

```bash
~/.local/bin/pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/torch-2.5.0a0+872d972e41.nv24.08-cp310-cp310-linux_aarch64.whl
~/.local/bin/pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/torchvision-0.20.0a0+afc54f7-cp310-cp310-linux_aarch64.whl
```

如果从 GitHub 下载较慢，可以使用加速代理：

```bash
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/torch-2.5.0a0+872d972e41.nv24.08-cp310-cp310-linux_aarch64.whl
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/torchvision-0.20.0a0+afc54f7-cp310-cp310-linux_aarch64.whl
```

**步骤 4：安装 cuSPARSELt**

```bash
sudo apt-get install -y libcusparselt0
```

**步骤 5：安装 onnxruntime-gpu**

onnxruntime-gpu 用于部分模型导出功能。由于 PyPI 上的包不包含适用于 Jetson 的 aarch64 二进制文件，因此需要手动安装：

```bash
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.23.0-cp310-cp310-linux_aarch64.whl
```

或者使用 1.20.0 版本：

```bash
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.20.0-cp310-cp310-linux_aarch64.whl
```

**步骤 6：配置 PATH 环境变量**

```bash
echo 'export PATH=$PATH:~/.local/bin' >> ~/.bashrc
source ~/.bashrc
```

**步骤 7：验证安装**

```bash
python3 -c "import ultralytics; import torch; import torchvision; import onnxruntime; print('ultralytics version:', ultralytics.__version__); print('torch version:', torch.__version__); print('torchvision version:', torchvision.__version__); print('onnxruntime version:', onnxruntime.__version__)"
```

预期输出：

```
ultralytics version: 8.4.7
torch version: 2.5.0a0+872d972e41.nv24.08
torchvision version: 0.20.0a0+afc54f7
onnxruntime version: 1.23.0
```

**步骤 8：测试 YOLOv26 推理功能**

```python
from ultralytics import YOLO
import torch

print(f"CUDA available: {torch.cuda.is_available()}")
if torch.cuda.is_available():
    print(f"CUDA device count: {torch.cuda.device_count()}")
    print(f"CUDA device name: {torch.cuda.get_device_name(0)}")

model = YOLO('yolov26n.pt')
print(f"Model loaded successfully!")

results = model('https://ultralytics.com/images/bus.jpg')
print(f"Inference successful! Detected {len(results[0].boxes)} objects")

for i, box in enumerate(results[0].boxes):
    cls_id = int(box.cls[0])
    conf = float(box.conf[0])
    cls_name = model.names[cls_id]
    print(f"  Object {i+1}: {cls_name} (confidence: {conf:.2f})")
```

**步骤 9：准备模型文件**

```bash
ls -la /home/seeed/ultralytics_data/
mkdir -p /home/seeed/ultralytics_data
```

如果模型文件不存在，请先下载它们：

```bash
cd /home/seeed/ultralytics_data
yolo export model=yolov26n.pt format=engine device=0 half=True
yolo export model=yolov26n-pose.pt format=engine device=0 half=True
yolo export model=yolov26n-seg.pt format=engine device=0 half=True
ls -la
```

你应该能看到以下文件：
- `yolov26n.engine`
- `yolov26n-pose.engine`
- `yolov26n-seg.engine`

**步骤 10：运行本地脚本**

```bash
cd /home/seeed/yolov26_jetson
chmod +x run_dual_gmsl_local.sh
./run_dual_gmsl_local.sh
```

---

## 配置与运行

系统使用 `run_dual_gmsl_local.sh`，该脚本已为 SG3S-ISX031C 相机预先配置。

**相机配置详情**

| 参数 | 数值 | 说明 |
|-----------|-------|------|
| **相机型号** | SG3S-ISX031C-GMSL2F | Sensing GMSL2 相机 |
| **采集分辨率** | **1920 x 1536** | 全传感器分辨率 |
| **采集帧率** | **30 FPS** | 原生帧率 |
| **处理分辨率** | 640 x 480 | 通过硬件（VIC）下采样用于推理 |
| **像素格式** | YUY2 | 通过硬件转换为 BGR |

**运行系统**

```bash
cd /home/seeed/yolov26_jetson
chmod +x run_dual_gmsl_local.sh
./run_dual_gmsl_local.sh
```

<video src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/test.mp4" controls width="800"></video>

:::note
SG3S-ISX031C-G-GMSL2F 相机在全分辨率（1920x1536）下的最大显示帧率为 30fps。这是相机硬件限制，而不是 AGX Orin 的性能上限。AGX Orin 在更低分辨率或更轻量模型下能够处理更高的帧率。关于 AGX Orin 典型推理性能的参考，请查看 [Ultralytics Jetson Guide](https://docs.ultralytics.com/guides/nvidia-jetson/#nvidia-jetson-agx-orin-developer-kit-64gb)。
:::

## 故障排查

- **帧率低？**：请确保你使用的是 `.engine` 模型，而不是 `.pt`。脚本会强制使用 `.engine`。
- **没有视频？**：检查 GMSL 连接，并确保存在 `/dev/video*` 设备。使用 `v4l2-ctl --list-devices` 验证驱动。

## 资源

- [Sensing SG3S-ISX031C-GMSL2F 产品页面](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- [NVIDIA Jetson 下载中心](https://developer.nvidia.com/embedded/downloads)
- [Ultralytics YOLOv26 在 NVIDIA Jetson 上的指南](https://docs.ultralytics.com/guides/nvidia-jetson/)


## 技术支持与产品讨论

感谢你选择 Seeed Studio 的产品！如需技术支持和产品讨论，请通过以下渠道：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
