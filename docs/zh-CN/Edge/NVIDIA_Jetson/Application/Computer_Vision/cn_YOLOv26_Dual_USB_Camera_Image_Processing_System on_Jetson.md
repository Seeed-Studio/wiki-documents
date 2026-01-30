---
description: 本指南展示如何在 Jetson 平台上基于 YOLOv26 模型和 TensorRT 加速构建双 USB 摄像头图像处理系统。它详细介绍了设置 Docker 或本地环境、下载和准备 YOLOv26 模型（目标检测、姿态估计、分割）、配置系统以及部署双摄像头处理。该系统具有同时处理两个 USB 摄像头的实时视频流、TensorRT 加速、Web 界面预览和 MJPEG 压缩等功能，以提高稳定性。
title: Jetson 上的 YOLOv26 双 USB 摄像头图像处理系统
keywords:
  - reComputer
  - YOLOv26
  - 双摄像头
  - TensorRT
  - 计算机视觉
  - Jetson
  - 目标检测
  - 姿态估计
  - 图像分割
image: https://files.seeedstudio.com/wiki/Yolo11/connection.webp
slug: /cn/ai_robotics_yolov26_dual_camera_system
sku: 100090853,100076722,100060802,100032662
last_update:
  date: 01/28/2026
  author: Lorraine
---

<div style={{ textAlign: "justify" }}>
本 wiki 演示如何从零开始构建基于 YOLOv26 模型和 TensorRT 加速的双 USB 摄像头图像处理系统。该系统包含以下功能：
</div>

- **双摄像头并行处理**：同时对两个 USB 摄像头进行实时视频流处理
- **多任务视觉分析**：目标检测、姿态估计、图像分割（SAM 模型）
- **TensorRT 加速**：使用 NVIDIA TensorRT 引擎显著提高推理速度
- **Web 界面预览**：通过浏览器实时查看处理结果
- **MJPEG 压缩**：减少 USB 带宽使用并提高系统稳定性

## 前提条件

- [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html) 或 reCompuer 系列的其他产品
- 2 个 USB 摄像头
- USB Type-C 数据传输线（连接摄像头）

---

## 从 GitHub 下载

### 方法 1：克隆整个仓库（推荐）

这是一次性获取所有文件的最简单方法：

```bash
# 1. Navigate to your home directory
# ！！Replace this with your own username
cd /home/seeed

# 2. Clone the repository
git clone https://github.com/bleaaach/yolov26_jetson.git

# 3. Navigate to the project directory
cd yolov26_jetson

# 4. View downloaded files
ls -la
```
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/file.png"/></div>

您应该看到以下文件：
- `run_dual_camera_docker.sh` - Docker 部署脚本
- `run_dual_camera_local.sh` - 本地部署脚本
- `README.md` - 此文档文件

### 方法 2：下载单个文件

如果您只需要特定的脚本文件，可以使用 wget 单独下载：

```bash
# 1. Navigate to your home directory
cd /home/seeed

# 2. Create project directory
mkdir -p yolov26_jetson
cd yolov26_jetson

# 3. Download Docker script
wget https://raw.githubusercontent.com/bleaaach/yolov26_jetson/main/run_dual_camera_docker.sh

# 4. Download Local script
wget https://raw.githubusercontent.com/bleaaach/yolov26_jetson/main/run_dual_camera_local.sh

# 5. Download README documentation
wget https://raw.githubusercontent.com/bleaaach/yolov26_jetson/main/README.md

# 6. View downloaded files
ls -la
```

### 验证下载的文件

下载后，验证文件是否存在：

```bash
# View file list
ls -la

# Check file permissions
```

如果脚本没有执行权限，请添加权限：

```bash
# Add execute permissions
chmod +x run_dual_camera_docker.sh
chmod +x run_dual_camera_local.sh

# Check again
ls -la
```

### 两种部署方法的比较

| 功能 | Docker 方法 | 本地方法 |
|---------|---------------|--------------|
| **环境隔离** | ✅ 完全隔离，不污染主机环境 | ❌ 直接安装在主机上 |
| **部署速度** | ✅ 快速，一键启动 | ❌ 需要手动安装许多依赖项 |
| **硬件访问** | ⚠️ 需要设备映射配置 | ✅ 直接访问所有硬件 |
| **性能** | ⚠️ 有容器开销 | ✅ 更好的性能 |
| **存储空间** | ⚠️ 需要约 2GB Docker 镜像 | ✅ 更少的存储使用 |
| **推荐使用场景** | 快速测试，多设备部署 | 生产环境，最佳性能 |

---

## （选项 1）本地环境设置

**步骤 1.** 更新软件包列表并安装 pip

```bash
# Update package list
sudo apt update

# Install pip
sudo apt install python3-pip -y

# Upgrade pip
pip install -U pip
```

如果系统未预装 pip，使用以下命令安装：

```bash
# Download get-pip.py
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py

# Install pip
python3 get-pip.py --user
```

**步骤 2.** 安装 Ultralytics 包

安装 Ultralytics 及其可选依赖项（用于模型导出）：

```bash
# Install Ultralytics
~/.local/bin/pip install ultralytics[export]
```

**步骤 3.** 安装 PyTorch 和 Torchvision

**重要**：通过 pip 安装的 PyTorch 和 Torchvision 与 Jetson 的 ARM64 架构不兼容。您需要手动安装专为 Jetson 构建的版本。

首先卸载不兼容的版本：

```bash
# Uninstall incompatible versions
~/.local/bin/pip uninstall torch torchvision -y
```

然后安装 JetPack 6.1 兼容版本：

```bash
# Install PyTorch 2.5.0
~/.local/bin/pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/torch-2.5.0a0+872d972e41.nv24.08-cp310-cp310-linux_aarch64.whl

# Install Torchvision 0.20
~/.local/bin/pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/torchvision-0.20.0a0+afc54f7-cp310-cp310-linux_aarch64.whl
```

如果 GitHub 下载速度慢，可以使用加速代理：

```bash
# Use gh proxy to download PyTorch
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/torch-2.5.0a0+872d972e41.nv24.08-cp310-cp310-linux_aarch64.whl

# Use gh proxy to download Torchvision
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/torchvision-0.20.0a0+afc54f7-cp310-cp310-linux_aarch64.whl
```

**步骤 4.** 安装 cuSPARSELt

cuSPARSELt 是 PyTorch 2.5.0 的依赖项，需要单独安装：

```bash
# Install cuSPARSELt
sudo apt-get install -y libcusparselt0
```

**步骤 5.** 安装 onnxruntime-gpu

onnxruntime-gpu 用于某些模型导出功能。由于 PyPI 上的包不包含 Jetson 的 aarch64 二进制文件，需要手动安装：

```bash
# Install onnxruntime-gpu 1.23.0
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.23.0-cp310-cp310-linux_aarch64.whl
```

或使用版本 1.20.0：

```bash
# Install onnxruntime-gpu 1.20.0
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.20.0-cp310-cp310-linux_aarch64.whl
```

**步骤 6.** 配置 PATH 环境变量

由于使用了用户安装模式，pip 安装的可执行文件位于 `~/.local/bin/` 目录中。建议将此目录添加到 PATH 环境变量：

```bash
# Add to .bashrc
echo 'export PATH=$PATH:~/.local/bin' >> ~/.bashrc

# Reload .bashrc
source ~/.bashrc
```

**步骤 7.** 验证安装

检查已安装的包版本：

```bash
# Check versions
python3 -c "import ultralytics; import torch; import torchvision; import onnxruntime; print('ultralytics version:', ultralytics.__version__); print('torch version:', torch.__version__); print('torchvision version:', torchvision.__version__); print('onnxruntime version:', onnxruntime.__version__)"
```

预期输出：

```
ultralytics version: 8.4.7
torch version: 2.5.0a0+872d972e41.nv24.08
torchvision version: 0.20.0a0+afc54f7
onnxruntime version: 1.23.0
```

**步骤 8.** 测试 YOLOv26 推理功能

```python
from ultralytics import YOLO
import torch

# Check if CUDA is available
print(f"CUDA available: {torch.cuda.is_available()}")
if torch.cuda.is_available():
    print(f"CUDA device count: {torch.cuda.device_count()}")
    print(f"CUDA device name: {torch.cuda.get_device_name(0)}")

# Load YOLOv26n model
model = YOLO('yolo26v26n.pt')
print(f"Model loaded successfully!")

# Perform inference test
results = model('https://ultralytics.com/images/bus.jpg')
print(f"Inference successful! Detected {len(results[0].boxes)} objects")

# Display detection results
for i, box in enumerate(results[0].boxes):
    cls_id = int(box.cls[0])
    conf = float(box.conf[0])
    cls_name = model.names[cls_id]
    print(f"  Object {i+1}: {cls_name} (confidence: {conf:.2f})")
```

**步骤 9.** 准备模型文件

确保模型文件下载到正确位置：

```bash
# Check model directory
ls -la /home/seeed/ultralytics_data/

# Create directory if it doesn't exist
mkdir -p /home/seeed/ultralytics_data
```

如果模型文件不存在，请先下载：

```bash
# Navigate to model directory
cd /home/seeed/ultralytics_data

# Download object detection model
yolo export model=yolov26n.pt format=engine device=0

# Download pose estimation model
yolo export model=yolov26n-pose.pt format=engine device=0

# Download segmentation model
yolo export model=yolov26n-seg.pt format=engine device=0

# Verify model files
ls -la
```

您应该看到以下文件：
- `yolo26n.engine`
- `yolo26n-pose.engine`
- `yolo26n-seg.engine`

**步骤 10.** 运行本地脚本

现在您可以运行本地脚本：

```bash
# 1. Navigate to project directory
cd /home/seeed/yolov26_jetson

# 2. Ensure script has execute permissions
chmod +x run_dual_camera_local.sh

# 3. Run Local script
./run_dual_camera_local.sh
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/local.png"/></div>

---

## （选项 2）Docker 环境设置

**步骤 1.** 确保 Docker 已安装

首先检查 Docker 是否已安装：

```bash
# Check Docker version
docker --version
```

如果 Docker 未安装，请先安装：

```bash
# Update package list
sudo apt update

# Install Docker
sudo apt install docker.io -y

# Start Docker service
sudo systemctl start docker

# Add current user to docker group
sudo usermod -aG docker $USER

# Re-login to apply changes
newgrp docker
```

有关配置 Docker 环境的更多详细信息，请参考此 GitHub 仓库：https://github.com/zibochen6/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.7-Docker/

**步骤 2.** 确保 Docker 服务正在运行

```bash
# Check Docker service status
sudo systemctl status docker
```

如果 Docker 未运行，请启动它：

```bash
# Start Docker service
sudo systemctl start docker
```

**步骤 3.** 准备模型文件

确保模型文件下载到正确位置：

```bash
# Check model directory
ls -la /home/seeed/ultralytics_data/

# Create directory if it doesn't exist
mkdir -p /home/seeed/ultralytics_data
```

如果模型文件不存在，请先下载它们：

```bash
# Navigate to model directory
cd /home/seeed/ultralytics_data

# Download object detection model
yolo export model=yolov26n.pt format=engine device=0

# Download pose estimation model
yolo export model=yolov26n-pose.pt format=engine device=0

# Download segmentation model
yolo export model=yolov26n-seg.pt format=engine device=0

# Verify model files
ls -la
```

您应该看到以下文件：
- `yolo26n.engine`
- `yolo26n-pose.engine`
- `yolo26n-seg.engine`

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/export.png"/></div>

**步骤 4.** 运行 Docker 脚本

现在您可以运行 Docker 脚本：

```bash
# 1. Navigate to project directory
cd /home/seeed/yolov26_jetson

# 2. Ensure script has execute permissions
chmod +x run_dual_camera_docker.sh

# 3. Run Docker script
./run_dual_camera_docker.sh
```

**步骤 5.** 访问 Web 界面

在浏览器中打开以下地址：

```
http://localhost:5000
```

此时浏览器将并排显示两个摄像头的实时画面，类似于"左摄像头画面 | 右摄像头画面"。实际帧率和分辨率取决于您的硬件性能。

:::note
如果您需要重启系统：

```bash
# 1. Stop and remove existing container
docker rm -f dual-camera-system

# 2. Re-run script
cd /home/seeed/yolov26_jetson
./run_dual_camera_docker.sh
```

:::
---

## 资源

- [快速入门指南：NVIDIA Jetson 与 Ultralytics YOLO26](https://docs.ultralytics.com/guides/nvidia-jetson/)
- [安装 Docker](https://github.com/zibochen6/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.7-Docker/)

## 技术支持与产品讨论

感谢您选择 Seeed Studio 产品！如需技术支持和产品讨论，请使用以下渠道：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
