---
description: 本维基展示如何在 NVIDIA Jetson 上部署 reBot Arm B601-DM 的 GraspNet 视觉抓取演示。内容涵盖 Jetson 环境配置、GraspNet CUDA 算子、Orbbec Gemini 2 RGB-D 相机配置、YOLO TensorRT 导出、手眼标定、Web UI 使用、CLI 使用以及 HTTP API 控制。
title: 在 Jetson 上使用 reBot-DM 实现 GraspNet 视觉抓取
keywords:
  - reBot Arm
  - B601-DM
  - GraspNet
  - Jetson
  - Physical AI
  - Orbbec Gemini 2
  - YOLO
  - TensorRT
  - Visual Grasping
image: https://files.seeedstudio.com/wiki/graspnet/front-graspnet.png
slug: /rebot_arm_b601_dm_graspnet_visual_grasping
sku: E26051901
last_update:
  date: 06/15/2026
  author: Dayu
createdAt: '2026-06-15'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_graspnet_visual_grasping/
---

# 在 Jetson 上运行 reBot Arm B601-DM 的 GraspNet 视觉抓取

本维基说明如何在 NVIDIA Jetson 上部署 **reBot Arm B601-DM 视觉抓取演示**。该演示结合 RGB-D 相机、YOLO 实例分割、GraspNet 六自由度抓取姿态估计、手眼标定以及真实机器人控制，使机械臂能够在桌面上选择并抓取常见物体。

本指南 1.0 版本聚焦于可靠的单 Jetson 部署和日常操作流程。默认配置使用 **Orbbec Gemini 2** 作为 RGB-D 相机，使用 **YOLO11n-seg TensorRT** 进行目标筛选，并使用 **GraspNet** 生成通用的六自由度抓取姿态。

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/graspnet/front-graspnet.png" />
</div>

<div class="table-center">
<table style={{ textAlign: 'center' }}>
  <tr>
    <th>reBot Arm B601-DM Bundle with Jetson Orin</th>
  </tr>
  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e26052001-rebot-arm-b601-dm-bundle-with-jetson-thor.jpg" style={{ width: 600, height: 'auto' }} />
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div class="get_one_now_container" style={{ textAlign: 'center' }}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle-with-Jetson-Orin.html">
          <strong><span><font color={'FFFFFF'} size={"4"}>立即获取</font></span></strong>
        </a>
      </div>
    </td>
  </tr>
</table>
</div>

## 你将构建什么

运行时流水线为：

```text
Orbbec Gemini 2 RGB-D camera
        |
YOLO instance segmentation for target filtering
        |
GraspNet 6-DoF grasp pose estimation
        |
Eye-in-hand calibration transform
        |
reBot Arm IK trajectory and gripper force control
        |
Optional base rotation and object placement
```

本项目提供三种实用的系统使用方式：

| 模式 | 入口脚本 | 典型用途 |
| --- | --- | --- |
| Web UI | `scripts/grasp_web.py` | 实时视频、目标选择、抓取预览、真实抓取、偏移调试 |
| CLI | `scripts/grasp.py` | 无界面抓取或脚本化测试 |
| HTTP API | `scripts/grasp_curl.sh` and `scripts/grasp_api_client.py` | 远程控制、自动化、与其他应用集成 |

## 硬件与系统准备

在开始之前准备以下硬件：

- reBot Arm B601-DM
- 运行 JetPack 6.x 或 JetPack 7.x 的 NVIDIA Jetson 设备
- Orbbec Gemini 2 RGB-D 相机
- 用于机器人 CAN 总线的 USB2CAN 适配器
- 相机用 USB 3.0 线缆
- 用于手眼标定的 ArUco 标记，`DICT_4X4_50`，ID `0`，边长 0.1 m
- 一张稳定的桌子、机械臂周围足够的空隙，以及紧急断电方式

:::warning
本演示会驱动真实机械臂。在所有运动测试和抓取测试期间，请将手、线缆和松散物体远离机械臂工作空间。先从 `--dry-run`、只读检查和小幅度点动开始，再启用完整的机器人执行。
:::

连接硬件：

1. 通过 USB 3.0 将 Gemini 2 连接到 Jetson。
2. 将 USB2CAN 适配器连接到 reBot Arm 的 CAN 总线，然后连接到 Jetson。
3. 给 reBot Arm 上电。
4. 确认设备可见：

```bash
lsusb
ls /dev/ttyUSB* /dev/ttyACM* 2>/dev/null || true
```

首次上电时临时设置设备权限：

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0 2>/dev/null || true
sudo chmod 666 /dev/ttyACM0 2>/dev/null || true
```

对于串口设备，也建议将当前用户加入 `dialout` 组，然后注销并重新登录：

```bash
sudo usermod -aG dialout $USER
```

## 在 Jetson 上部署项目

**步骤 1. 安装系统软件包和 Miniconda**

```bash
sudo apt update
sudo apt install -y git wget curl build-essential cmake libusb-1.0-0-dev python3-pip

wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

**步骤 2. 克隆项目**

```bash
git clone https://github.com/jjjadand/reBot-DevArm-Grasp.git rebot_grasp-jetson
cd rebot_grasp-jetson
```

如果你使用的是内部软件包而不是公共仓库，请将该项目目录拷贝到 Jetson 上，并在项目根目录下运行后续命令。

**步骤 3. 创建 Python 环境**

在 JetPack 6.x 上使用 Python 3.10。在 JetPack 7.x / Thor 上使用 Python 3.12。

```bash
# JetPack 6.x
conda create -y -n graspnet python=3.10

# JetPack 7.x / Thor
# conda create -y -n graspnet python=3.12

conda activate graspnet
python -m pip install -U pip wheel setuptools
```

检查你的 JetPack 和 CUDA 版本：

```bash
cat /etc/nv_tegra_release
nvcc --version
```

**步骤 4. 安装适用于 Jetson 的 PyTorch**

不要在 Jetson 上安装通用的 PyPI CPU/GPU PyTorch 软件包。请安装与你的 JetPack、Python 和 CUDA 版本匹配的 wheel。对于 reComputer 用户，也可以参考专门的指南：[Install Pytorch for reComputer Jetson](https://wiki.seeedstudio.com/cn/install_torch_on_recomputer/)。

常见的起点包括：

```bash
# JetPack 6.x, CUDA 12.x, Python 3.10
pip install --extra-index-url https://pypi.jetson-ai-lab.io/jp6/cu126 torch torchvision

# JetPack 7.x / Thor, CUDA 13.x, Python 3.12
pip install --extra-index-url https://pypi.jetson-ai-lab.io/sbsa/cu130 torch torchvision
```

在 Python 中验证 CUDA：

```bash
python - <<'PY'
import torch
print("torch:", torch.__version__)
print("cuda available:", torch.cuda.is_available())
print("device:", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "none")
PY
```

在继续之前，`cuda available` 必须为 `True`。

**步骤 5. 安装 Python 依赖**

```bash
pip install -r requirements-graspnet-jetson.txt
```

**步骤 6. 安装机器人、GraspNet 和 GraspNet API SDK**

```bash
mkdir -p sdk

git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
pip install -e sdk/reBotArm_control_py

git clone https://github.com/graspnet/graspnet-baseline.git sdk/graspnet-baseline
git clone https://github.com/graspnet/graspnetAPI.git sdk/graspnetAPI
pip install -e sdk/graspnetAPI
```

从 GraspNet 下载页面下载 GraspNet 预训练 checkpoint，并将其放在这里：

```text
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

**步骤 7. 设置 CUDA 路径并构建 GraspNet CUDA 算子**

根据你的 JetPack 版本设置 CUDA 路径：

```bash
# JetPack 6.x example
export CUDA_HOME=/usr/local/cuda-12.6

# JetPack 7.x / Thor example
# export CUDA_HOME=/usr/local/cuda-13.0

export PATH="$CUDA_HOME/bin:$PATH"
export LD_LIBRARY_PATH="$CUDA_HOME/lib64:$LD_LIBRARY_PATH"
```

构建 GraspNet 使用的 CUDA 扩展：

```bash
bash scripts/install_graspnet_cuda_ops.sh
bash scripts/install_graspnet_cuda_ops.sh --check
```

如果之后更换了 JetPack、Python、CUDA 或 PyTorch，请使用以下命令重新构建：

```bash
bash scripts/install_graspnet_cuda_ops.sh --force
```

**步骤 8. 安装 Orbbec 相机 SDK**

本项目包含一个辅助脚本，可将 `pyorbbecsdk2` 安装到当前激活的 Python 环境中：

```bash
bash scripts/install_pyorbbecsdk.sh
```

如果你需要在本地构建 SDK，请先克隆源码树并运行源码模式：

```bash
git clone https://github.com/orbbec/pyorbbecsdk.git sdk/pyorbbecsdk
bash scripts/install_pyorbbecsdk.sh --from-source
```

在 SDK 源码树可用时安装 Orbbec udev 规则：

```bash
sudo bash sdk/pyorbbecsdk/scripts/env_setup/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

**步骤 9. 在目标 Jetson 上下载 YOLO 权重并导出 TensorRT**

TensorRT 引擎文件与设备相关。务必在将要运行演示的那台 Jetson 上导出 `.engine`。

```bash
mkdir -p models
wget https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n-seg.pt -O models/yolo11n-seg.pt

yolo export model=models/yolo11n-seg.pt format=engine imgsz=640 half=True device=0 workspace=4
```

预期输出为：

```text
models/yolo11n-seg.engine
```

如果在你的平台上 FP16 导出失败，请在不使用 `half=True` 的情况下导出：

```bash
yolo export model=models/yolo11n-seg.pt format=engine imgsz=640 device=0 workspace=4
```

## 验证与标定

在尝试真实抓取之前，按顺序运行以下检查。

**1. 检查 RGB-D 相机**

```bash
conda activate graspnet
cd ~/rebot_grasp-jetson

python scripts/verify_pyorbbec_stream.py
python scripts/verify_pyorbbec_stream.py --preview --seconds 10
```

纯文本检查应报告 RGB 和深度帧信息。预览检查在有桌面显示时应弹出 RGB 和深度窗口。

**2. 检查机器人连接**

先以只读模式启动：

```bash
python scripts/verify_rebot_arm_motion.py --read-only
```

在确认机械臂运动路径安全后，再运行一个小幅度的关节 6 点动：

```bash
python scripts/verify_rebot_arm_motion.py --deg 5
```

**3. 检查 GraspNet 栈**

```bash
python scripts/verify_graspnet_stack.py
```

如果相机尚未连接，但你只想检查 Python、CUDA、GraspNet 和 YOLO 文件：

```bash
python scripts/verify_graspnet_stack.py --skip-camera
```

**4. 执行手眼标定**

本项目使用手眼标定：相机安装在末端执行器上，ArUco 标记固定在桌面上。默认配置期望使用 `DICT_4X4_50`、ID `0`、边长 0.1 m 的标记。仓库中包含可打印的标记文件，例如 `aruco100x100.pdf`。

自动采集：

```bash
python scripts/collect_handeye_eih.py
```

带重力补偿的手动采集：

```bash
python scripts/collect_handeye_eih.py --manual
```

标定结果会保存在当前相机目录下：

```text
config/calibration/orbbec_gemini2/hand_eye.npz
config/calibration/orbbec_gemini2/intrinsics.npz
```

验证已保存的标定结果：

```bash
python scripts/verify_handeye_calibration.py
```

每当相机支架、夹爪、ArUco 板尺寸或桌面几何结构发生变化时，请重新标定。

## 运行 Web 演示

Web UI 是推荐的首选用户界面。它提供实时 MJPEG 视频、目标选择、抓取预览、真实抓取执行、补偿调节、基座点动、夹爪控制、就绪姿态和复位操作。

先以预览模式启动。此模式不会执行真实的机器人运动：

```bash
conda activate graspnet
cd ~/rebot_grasp-jetson

python scripts/grasp_web.py \
  --host 0.0.0.0 \
  --port 8090 \
  --num-point 12000 \
  --cloud-crop-nsample 32
```

在浏览器中打开 Web UI：

```text
http://<jetson_ip>:8090
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/graspnet/web.png" />
</div>

使用预览模式确认相机视频流、YOLO 检测、目标过滤和抓取点生成。在 Web UI 中点击推理或刷新控件以更新 GraspNet 预览。

当场景稳定且验证步骤通过后，开始真实机器人执行：

```bash
python scripts/grasp_web.py \
  --host 0.0.0.0 \
  --port 8090 \
  --enable-robot \
  --num-point 12000 \
  --cloud-crop-nsample 32
```

在首次真实测试时，禁用抓取后的放置，这样机械臂只执行抓取和回收动作：

```bash
python scripts/grasp_web.py \
  --host 0.0.0.0 \
  --port 8090 \
  --enable-robot \
  --no-place-after-grasp \
  --num-point 12000 \
  --cloud-crop-nsample 32
```

有用的启动选项：

| 选项 | 作用 |
| --- | --- |
| `--enable-robot` | 允许真实机械臂和夹爪运动 |
| `--target-class cup` | 预先选择一个目标类别 |
| `--no-yolo` | 禁用 YOLO 过滤并运行全场景 GraspNet |
| `--camera-type orbbec_gemini2` | 强制指定相机驱动 |
| `--no-place-after-grasp` | 抓取后跳过基座旋转和放置 |
| `--num-point 12000` | 降低 GraspNet 点数以适配 Jetson 内存 |
| `--cloud-crop-nsample 32` | 降低 CloudCrop 采样数以适配 Jetson 内存 |
| `--graspnet-interval 2.0` | 设置启用时 GraspNet 自动更新间隔 |

常规 Web UI 工作流程为：

1. 点击 **Ready** 将机械臂移动到就绪姿态。
2. 选择一个目标类别，或留空以使用检测到的物体。
3. 点击 **Infer** 或 **Refresh** 以计算抓取位姿。
4. 检查视频中的抓取标记是否合理。
5. 如有需要，调整夹爪、相机或基座补偿。
6. 仅在机械臂路径无障碍时点击 **Real Grasp**。
7. 当场景发生变化或机器人需要回到安全状态时使用 **Reset**。

补偿值用于修正小的机械和标定误差。在 Web UI 中调节完成后，将这些值持久化到 `config/compensation.json`，或将稳定的数值复制到你的部署记录中。请使用小步长，例如位置偏移为 0.005 m，旋转偏移为 1 到 2 度。

## CLI 和 API 用法

对于无界面的空跑测试，请使用：

```bash
python scripts/grasp.py --dry-run --camera-type orbbec_gemini2 --target-class cup
```

对于不使用 YOLO 过滤的全场景 GraspNet：

```bash
python scripts/grasp.py --dry-run --camera-type orbbec_gemini2 --no-yolo
```

对于真实的 CLI 执行：

```bash
python scripts/grasp.py --camera-type orbbec_gemini2 --target-class cup
```

在 CLI 调试期间禁用放置：

```bash
python scripts/grasp.py \
  --camera-type orbbec_gemini2 \
  --target-class cup \
  --no-place-after-grasp
```

若要在不执行机器人动作的情况下查看 GraspNet 实时输出：

```bash
python scripts/graspnet_camera_demo.py --auto --target-class cup
python scripts/graspnet_camera_demo.py --auto --no-yolo --no-visualizer
```

对于 HTTP 自动化，使用辅助脚本启动 Web 服务：

```bash
bash scripts/grasp_curl.sh serve --enable-robot --no-auto-graspnet
```

在另一个终端中：

```bash
bash scripts/grasp_curl.sh state
bash scripts/grasp_curl.sh ready
bash scripts/grasp_curl.sh target bottle
bash scripts/grasp_curl.sh infer
bash scripts/grasp_curl.sh grasp
bash scripts/grasp_curl.sh reset
```

同样的操作也可以直接通过 `curl` 调用：

```bash
BASE=http://127.0.0.1:8090

curl -s "$BASE/state"
curl -s -X POST "$BASE/ready" -H "Content-Type: application/json" -d "{}"
curl -s -X POST "$BASE/target" -H "Content-Type: application/json" -d '{"class_name":"bottle"}'
curl -s -X POST "$BASE/infer" -H "Content-Type: application/json" -d "{}"
curl -s -X POST "$BASE/grasp" -H "Content-Type: application/json" -d "{}"
```

其他有用的端点：

| 端点 | 方法 | 作用 |
| --- | --- | --- |
| `/state` | GET | 当前检测、抓取和 Web 运行时状态 |
| `/robot/state` | GET | 机器人关节、TCP 位姿、夹爪状态 |
| `/stream.mjpg` | GET | MJPEG 相机视频流 |
| `/compensation` | POST | 设置夹爪、相机和基座补偿 |
| `/joint/limits` | GET | 读取关节位置和限制 |
| `/joint/jog` | POST | 点动单个关节，通常为基座测试的 `joint1` |
| `/move/joints` | POST | 将所有关节移动到绝对位置 |
| `/move/pose` | POST | 通过 IK 或轨迹模式将 TCP 移动到目标位姿 |
| `/gripper` | POST | 打开、关闭、释放或读取夹爪状态 |
| `/auto_grasp` | POST | 运行后台目标搜索和抓取循环 |

## 配置与调优

主要配置文件为：

```text
config/default.yaml
```

默认相机设置：

```yaml
camera:
  type: orbbec_gemini2
  color_width: 1280
  color_height: 720
  depth_width: 1280
  depth_height: 720
  fps: 30
```

默认检测和 GraspNet 设置：

```yaml
yolo:
  model_name: "yolo11n-seg.engine"
  device: "auto"

graspnet:
  checkpoint: "checkpoint-rs.tar"
```

默认放置行为：

```yaml
grasp_pipeline:
  place:
    enabled: true
    base_joint: joint1
    base_delta_deg: 90.0
    base_direction: auto
    base_rotate_duration: 2.5
    base_safety_margin_deg: 5.0
    return_home: false
```

如果夹爪持续抓偏目标，请按以下顺序调节：

| 现象 | 首要调节对象 |
| --- | --- |
| 夹爪在前后方向偏差过大 | `grasp_forward_offset` / Web 夹爪前向补偿 |
| 夹爪在左右方向抓偏 | `grasp_lateral_offset` 或相机 X/Y 补偿 |
| 夹爪过高或过低 | `grasp_vertical_offset` 或相机 Z 补偿 |
| 腕部角度错误 | 夹爪滚转、俯仰、偏航补偿 |
| 所有抓取都向同一方向偏移 | 相机或基座补偿 |

## 演示视频

<div align="center">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/_44o0oZ9nqI" title="reBot Arm B601-DM GraspNet Visual Grasping Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 故障排查

`torch.cuda.is_available()` 返回 `False`：请重新安装与 JetPack 匹配的 PyTorch wheel。通用 PyPI `torch` 不适用于 Jetson 部署。

出现 `No module named pointnet2._ext` 或 `No module named knn_pytorch.knn_pytorch`：请重新构建 GraspNet CUDA 算子：

```bash
bash scripts/install_graspnet_cuda_ops.sh --force
```

出现 `pyorbbecsdk import failed` 或相机无法打开：请重新安装 SDK 并检查 USB 权限：

```bash
bash scripts/install_pyorbbecsdk.sh
sudo chmod a+rw /dev/bus/usb/*/*
python scripts/verify_pyorbbec_stream.py
```

YOLO `.engine` 加载失败：请在同一台 Jetson 上重新导出。不同 Jetson 型号、JetPack 版本或 TensorRT 版本之间不应拷贝 engine 文件。

ArUco 标记未被检测到：请确认标记字典为 `DICT_4X4_50`，ID 为 `0`，标记边长为 0.1 m，光照稳定，且标记平整且完全可见。

机器人已连接但运动失败：运行 `verify_rebot_arm_motion.py --read-only`，确认 USB2CAN 设备，检查电机电源，并在重试抓取执行前测试一个小的 `--deg 5` 点动。

GraspNet 内存不足：请减小 `--num-point`，减小 `--cloud-crop-nsample`，关闭桌面应用程序，并避免同时运行多个高负载推理进程。

## 资源

- reBot Arm GraspNet 演示参考：https://github.com/Seeed-Projects/reBot-DevArm-Grasp
- reBot Arm SDK：https://github.com/Seeed-Projects/reBotArm_control_py
- GraspNet baseline：https://github.com/graspnet/graspnet-baseline
- GraspNet API：https://github.com/graspnet/graspnetAPI
- Orbbec pyorbbecsdk：https://github.com/orbbec/pyorbbecsdk
- 为 reComputer Jetson 安装 Pytorch：https://wiki.seeedstudio.com/cn/install_torch_on_recomputer/


## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道用于提问、讨论和问题反馈。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
