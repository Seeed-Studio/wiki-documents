---
description: 本教程介绍如何基于 reBot Arm B601、RGB-D 深度相机与 YOLO / GraspNet 抓取管线搭建完整视觉夹取 Demo。
title: reBot Arm B601 视觉夹取 Demo
keywords:
  - reBot Arm
  - B601-DM
  - B601-RS
  - 抓取
  - RGB-D
  - YOLO
  - GraspNet
  - 手眼标定
  - 机器人
slug: /rebot_arm_b601_dm_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip:
    - zh-CN
createdAt: '2026-04-22'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_grasping_demo/
---

# reBot Arm B601 视觉夹取 Demo

<div className="rebot-page">
  <section className="doc-hero">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>用 RGB-D 相机、YOLO 与 reBot Arm 搭建桌面级视觉夹取系统</h2>
      <p>
        本教程将带你完成一个完整的视觉夹取 Demo：从环境安装、相机接入、机械臂 SDK 配置、
        手眼标定，到 YOLO / OBB / GraspNet 抓取推理与真实机械臂执行。
      </p>
      <div className="hero-actions">
        <a href="#quick-path">查看流程</a>
        <a href="#run">直接运行 Demo</a>
      </div>
    </div>
    <div className="hero-card">
      <strong>推荐硬件组合</strong>
      <span>reBot Arm B601-DM / B601-RS</span>
      <span>Orbbec Gemini 2 或 RealSense D435i / D405</span>
      <span>Ubuntu 22.04 + Python 3.10</span>
    </div>
  </section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全警告：运行前请清空机械臂工作空间</strong>
    <p>
      在运行任何会驱动机械臂运动的程序前，请务必清空机械臂工作空间
      <strong> 1 米范围内 </strong>
      的贵重物品、易碎物品、工具、线缆和其他无关物体。
      调试和运行过程中，人员禁止靠近机械臂运动范围。
    </p>
    <ul>
      <li>机械臂上电后，请勿用手触碰关节、电机、连杆、夹爪或末端工具。</li>
      <li>运行校准、遥操作、IK 控制、轨迹控制、重力补偿、MoveIt、LeRobot 数据采集或视觉抓取 Demo 前，请确保机械臂已固定牢靠。</li>
      <li>请保持至少 <strong>1 米安全距离</strong>，并确保周围人员了解机械臂可能突然运动。</li>
      <li>如出现异常运动、异响、抖动、线缆松动、电源接触不良或通信中断，请立即停止程序并断电检查。</li>
      <li>插拔电机线、CAN 线、USB2CAN / PCAN-USB、XT30 或电源接口前，必须先断开电源。</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="visual grasping navigation">
    <a href="#quick-path">流程总览</a>
    <a href="#hardware">硬件</a>
    <a href="#install">环境安装</a>
    <a href="#camera-sdk">相机 SDK</a>
    <a href="#graspnet">GraspNet</a>
    <a href="#run">运行调试</a>
    <a href="#config">配置说明</a>
    <a href="#faq">FAQ</a>
  </nav>


<section id="course-steps" className="section-card">
  <div className="section-title">
    <span>Step Overview</span>
    <h2>本篇教程的推荐操作顺序</h2>
    <p>下面按照实际调试顺序整理为 Step 卡片。建议从前往后完成，尤其是涉及真实机械臂运动的步骤。</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>完成快速入门</strong><p>先确认机械臂版本、电源、零点和 SDK 配置正确。</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>准备 RGB-D 硬件</strong><p>连接相机、USB2CAN / CAN 接口，并确认权限和画面稳定。</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>安装环境与 SDK</strong><p>创建 conda 环境，安装机械臂 SDK、相机 SDK、YOLO 和可选 GraspNet。</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>完成手眼标定</strong><p>采集 ArUco 样本并生成相机到机械臂基坐标系的变换。</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>先运行 dry-run</strong><p>验证识别结果、抓取点、IK 可达性和安全高度。</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>执行真实抓取</strong><p>清空工作空间后再运行主抓取程序或 GraspNet 抓取脚本。</p></div>
  </div>
</section>
</div>

<div className="rebot-page">
  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/demo.gif" alt="reBot Arm B601 视觉夹取 Demo" />
  </div>
</div>

<p align="center">
  <strong>深度感知 · 目标检测 · 手眼标定 · 自主抓取 · 全开源</strong>
</p>

<div className="video-container">
  <iframe
    width="900"
    height="600"
    src="//player.bilibili.com/player.html?bvid=BV1VjVA6KEff&autoplay=0"
    title="Bilibili video player"
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen>
  </iframe>
</div>

<div className="rebot-page">

<section id="quick-path" className="section-card">

## 推荐学习流程

<div className="path-grid">
  <div className="path-card"><span>Step 1</span><strong>准备硬件</strong><p>确认机械臂版本、电源、USB2CAN / CAN 接口和 RGB-D 相机连接。</p></div>
  <div className="path-card"><span>Step 2</span><strong>安装环境</strong><p>创建 conda 环境，安装机械臂 SDK、相机 SDK、YOLO 与可选 GraspNet。</p></div>
  <div className="path-card"><span>Step 3</span><strong>完成手眼标定</strong><p>采集 ArUco 位姿，求解 Eye-in-Hand 标定矩阵。</p></div>
  <div className="path-card"><span>Step 4</span><strong>运行抓取 Demo</strong><p>先用 dry-run 验证感知和目标位姿，再接入机械臂真实执行。</p></div>
</div>

:::tip
建议先完成对应机械臂的基础快速入门，再运行本文的视觉夹取 Demo：
[B601-DM 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/) 或 [B601-RS 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/)。
:::

</section>

<section className="section-card">

## 项目介绍

**reBot Arm B601 视觉夹取 Demo** 是一个基于 RGB-D 深度相机和 reBot 机械臂控制库的开源视觉抓取演示项目。系统支持 B601-DM 与 B601-RS 两种配置，可以通过 YOLO 模型实时识别桌面物体，并使用 OBB 最小外接矩形估计夹取方向。完成手眼标定后，系统会把相机坐标系中的抓取点转换到机械臂基坐标系，最终驱动机械臂完成自主抓取。

### 核心能力

<div className="feature-grid">
  <div><strong>RGB-D 深度感知</strong><span>支持 Orbbec Gemini 2、RealSense D435i / D405 等深度相机。</span></div>
  <div><strong>YOLO 目标检测</strong><span>支持开放词汇类别配置，也可使用常规 YOLO 分割模型。</span></div>
  <div><strong>OBB 抓取估计</strong><span>通过最小外接矩形短轴估计夹爪方向，并结合深度分位数估计抓取高度。</span></div>
  <div><strong>GraspNet 6D 抓取</strong><span>可选接入 GraspNet，对复杂物体生成更丰富的 6D 抓取候选。</span></div>
  <div><strong>Eye-in-Hand 手眼标定</strong><span>使用 TSAI 标定方法，将相机系目标点转换为机械臂基坐标系。</span></div>
  <div><strong>真实机械臂执行</strong><span>基于 reBotArm_control_py 完成 IK、轨迹控制和夹爪力控。</span></div>
</div>

</section>

<section id="hardware" className="section-card">

## 硬件配置

| 组件 | 型号 / 要求 |
|------|------------|
| 机械臂 | reBot Arm B601-DM 或 reBot Arm B601-RS |
| 深度相机 | Orbbec Gemini 2、Intel RealSense D435i / D405 |
| 通信接口 | B601-DM 使用 USB2CAN 串口桥；B601-RS 使用 PCAN-USB / SocketCAN |
| 主机 | Ubuntu 22.04+，Python 3.10，x86_64 |

### 接线与权限

```bash
sudo chmod a+rw /dev/bus/usb/*/*   # 深度相机 USB 权限
sudo chmod 666 /dev/ttyUSB0        # B601-DM USB2CAN，端口按实际调整
```

B601-RS 用户在运行标定或抓取脚本前，需要先启动 CAN 接口：

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0
```

:::danger
B601-DM 使用 24V DC 电源，B601-RS 使用 48V DC 电源。请确认电源、电机版本和 SDK 配置一致，不要混用。
:::

</section>

<section id="install" className="section-card">

## 环境安装

| 项目 | 要求 |
|------|------|
| 操作系统 | Ubuntu 22.04+ |
| Python | 3.10 |
| 推荐环境 | conda |
| 推荐工作区 | `rebot_grasp` |
| 推荐环境名 | `rebotarm` |

### Step 1. 克隆仓库

优先使用 Seeed-Projects 官方仓库：

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

也可以使用当前开发仓库：

```bash
git clone https://github.com/EclipseaHime017/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### Step 2. 创建并激活 conda 环境

```bash
conda env create -f environment.yml
conda activate rebotarm
```

### Step 3. 安装机械臂控制库

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

如果 `pip install -e .` 报 `Multiple top-level packages discovered in a flat-layout`，请在 `reBotArm_control_py` 的 `pyproject.toml` 中加入：

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

</section>

<section id="camera-sdk" className="section-card">

## 安装深度相机 SDK

<details open className="content-details">
<summary>Orbbec Gemini 2</summary>

Orbbec Gemini 2 依赖 `pyorbbecsdk`。优先推荐直接安装预编译 Python 包：

```bash
pip install pyorbbecsdk2
```

也可以从 GitHub 获取源码：

```bash
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev
cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

中国大陆用户也可以使用：

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

首次使用建议安装 udev 规则：

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

</details>

<details className="content-details">
<summary>Intel RealSense D435i / D405</summary>

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

如果系统需要完整 RealSense 工具链或 udev 规则，请参考 Intel RealSense SDK 官方文档安装 `librealsense2`。

</details>

</section>

<section id="graspnet" className="section-card">

## 配置 GraspNet（可选）

如果只想先跑通 YOLO + OBB 抓取流程，可以跳过本节。若希望使用更完整的 6D 抓取姿态估计，可配置 GraspNet。

开始前先确认 `nvcc` 与 PyTorch CUDA 版本一致：

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

如果没有 `nvcc`，或版本与 `torch.version.cuda` 不一致，请安装与当前 PyTorch CUDA 版本匹配的 CUDA 编译器。例如 PyTorch 显示 `13.0` 时：

```bash
conda install -c nvidia cuda-nvcc=13.0
```

编译 GraspNet 本地算子：

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline
pip install open3d tensorboard Pillow tqdm

export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="12.0"
export CPATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
pip install .
cd ../../..
```

### 配置预训练模型

下载 GraspNet 官方预训练权重 `checkpoint-rs.tar`，放到：

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

然后在 `config/default.yaml` 中确认：

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

</section>

<section className="section-card">

## 目录结构

```text
rebot_grasp/
├── config/
│   ├── default.yaml
│   └── calibration/
│       └── <camera_type>/
│           ├── intrinsics.npz
│           └── hand_eye.npz
├── drivers/
│   ├── camera/
│   └── robot/
├── calibration/
│   ├── aruco_pose.py
│   └── hand_eye.py
├── utils/
├── scripts/
│   ├── main.py
│   ├── set.py
│   ├── ordinary_grasp_pipeline.py
│   ├── graspnet_camera_demo.py
│   ├── grasp.py
│   └── collect_handeye_eih.py
├── sdk/
└── environment.yml
```

</section>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>抓取 Demo 运行前安全确认</strong>
    <p>
      请先使用 dry-run 验证感知结果和目标位姿，再连接真实机械臂执行抓取。
      运行期间请清空机械臂工作空间 <strong>1 米范围内</strong> 的人员、贵重物品和易碎物品。
    </p>
  </div>
</div>

<section id="run" className="section-card">

## 运行与调试

### 0. 确认机械臂版本与 SDK 配置

在 `sdk/reBotArm_control_py/config/rebotarm.yaml` 中选择对应硬件：

```yaml
hardware_yaml: rebotarm_dm.yaml
```

或：

```yaml
hardware_yaml: rebotarm_rs.yaml
```

### 1. 手眼标定（抓取前必做）

```bash
python scripts/collect_handeye_eih.py
```

自动模式下，机械臂会遍历预设位姿，检测到 ArUco 稳定后自动采样。至少需要 5 个样本，建议采集 15 个以上样本以获得更稳定的标定结果。

如需手动推动机械臂采集：

```bash
python scripts/collect_handeye_eih.py --manual
```

:::tip
如果抓取精度不满足要求，可在 `config/default.yaml` 的 `calibration.hand_eye_compensation_m` 中配置 `X`、`Y`、`Z` 位置补偿。
:::

<div className="video-container">
  <iframe
    width="900"
    height="600"
    src="//player.bilibili.com/player.html?bvid=BV13CTk6bErp&autoplay=0"
    title="手眼标定教程"
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen>
  </iframe>
</div>

### 2. 主抓取程序：`scripts/main.py`

完整视觉抓取流程：

1. 初始化 RGB-D 相机并确认图像流可用。
2. 机械臂与夹爪使能，移动到预备位。
3. 实时相机预览，运行 YOLO 目标检测与实例分割。
4. OBB 短轴估计夹爪朝向，深度分位数估计抓取高度。
5. 按 `G` 冻结帧，经手眼变换计算机械臂目标位姿。
6. 机械臂移动到预抓取点，下降，闭合夹爪，提升并返回预备位。

```bash
python scripts/main.py
```

调试时建议先运行：

```bash
python scripts/main.py --dry-run
```

### 3. 抓取与放置程序：`scripts/set.py`

该脚本演示将香蕉抓取并放置到盒子中的完整流程。

```bash
python scripts/set.py
```

<div className="video-container">
  <iframe
    width="900"
    height="600"
    src="//player.bilibili.com/player.html?bvid=BV1SoTv6iEwQ&autoplay=0"
    title="reBot Arm B601 视觉抓取开源方案"
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen>
  </iframe>
</div>

### 4. 简化抓取测试：`scripts/ordinary_grasp_pipeline.py`

不连接机械臂，仅验证 OBB 抓取姿态估计和可视化效果。

```bash
python scripts/ordinary_grasp_pipeline.py
```

### 5. GraspNet 相机估计：`scripts/graspnet_camera_demo.py`

不连接机械臂，仅使用 RGB-D 相机运行 GraspNet 6D 抓取姿态估计。

```bash
python scripts/graspnet_camera_demo.py
```

### 6. GraspNet 机械臂抓取：`scripts/grasp.py`

```bash
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

</section>

<section id="config" className="section-card">

## `default.yaml` 参数说明

<details open className="content-details">
<summary>相机与标定配置</summary>

| 参数项 | 类型 / 可选值 | 含义 |
| :--- | :--- | :--- |
| `camera.type` | `realsense_d435i` / `realsense_d405` / `orbbec_gemini2` | 当前连接的相机类型。 |
| `camera.serial` | `string` / `null` | 设备序列号；为 `null` 时使用第一台可用设备。 |
| `calibration.aruco.marker_length_m` | `float` | ArUco 标定码边长，单位为米。 |
| `calibration.hand_eye_compensation_m` | `array` | 机械臂基坐标系下的 XYZ 平移补偿，单位为米。 |

</details>

<details className="content-details">
<summary>检测与抓取管线配置</summary>

| 参数项 | 类型 | 含义 |
| :--- | :--- | :--- |
| `detection.conf_threshold` | `float` | YOLO 检测置信度阈值。 |
| `detection.iou_threshold` | `float` | YOLO NMS IoU 阈值。 |
| `grasp_pipeline.infer_every_live` | `int` | 实时预览时每 N 帧运行一次检测。 |
| `grasp_pipeline.grasp.depth_quantile` | `float` | OBB 抓取管线使用的深度分位数。 |
| `grasp_pipeline.grasp.pregrasp_offset_m` | `float` | 预抓取位相对于最终抓取位的后退距离。 |
| `grasp_pipeline.grasp.insertion_depth_m` | `float` | GraspNet 执行抓取时的额外插入深度。 |
| `grasp_pipeline.grasp.min_base_z_m` | `float` | 机械臂基坐标系下最低抓取高度限制。 |

</details>

<details className="content-details">
<summary>机器人与夹爪配置</summary>

| 参数项 | 类型 / 可选值 | 含义 |
| :--- | :--- | :--- |
| `robot.repo_root` | `string` / `null` | `reBotArm_control_py` 仓库路径。为 `null` 时使用 `sdk/reBotArm_control_py`。 |
| `robot.ready_pose` | `array` | 启动后和抓取完成后返回的预备位。 |
| `robot.gripper.dm` / `robot.gripper.rs` | object | DM / RS 夹爪硬件参数，系统会按 SDK 配置自动选择。 |

`angle_open`、`close_torque`、`default_force` 需要填写正数；`counterclockwise` 用于指定闭合方向；`tau_max` 为力矩上限。

</details>

### 模型选择

YOLO 模型会从 `rebot_grasp/models/` 目录加载；如果模型文件不存在，Ultralytics 通常会尝试自动下载。

| 模型 | 说明 |
| --- | --- |
| `yoloe-26l-seg.pt` | 开放词汇 + 分割，当前默认。 |
| `yoloe-26s-seg.pt` | 更轻量，速度更快。 |
| `yolov8n-seg.pt` | 封闭类别分割，小模型。 |
| `yolov8s-seg.pt` | 封闭类别分割，精度更高。 |

</section>

<section id="faq" className="section-card">

## FAQ

<details className="content-details">
<summary>1. `ModuleNotFoundError: No module named 'motorbridge'`</summary>

确认已激活项目环境，并重新同步环境与安装机械臂 SDK：

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

</details>

<details className="content-details">
<summary>2. 按 `G` 后不执行抓取</summary>

常见原因包括：`hand_eye.npz` 不存在、手眼标定模式不是 `eye_in_hand`、当前目标位姿 IK 不可达。建议先使用 dry-run 模式验证：

```bash
python scripts/main.py --dry-run
```

</details>

<details className="content-details">
<summary>3. 抓取点深度不稳定</summary>

优先检查 `grasp_pipeline.grasp.depth_quantile`、相机安装高度、目标反光情况以及工作区深度质量。

</details>

<details className="content-details">
<summary>4. GraspNet 报 `pointnet2_utils` 无法导入</summary>

通常是 `pointnet2` / `knn` 本地 CUDA 扩展没有在当前 conda 环境中正确编译安装。请重新编译：

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

</details>

<details className="content-details">
<summary>5. GraspNet 推理报 `RuntimeError: CPU not supported`</summary>

`pointnet2` 采样算子只支持 CUDA tensor。请确认 CUDA 可用，并重新编译本地扩展：

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

</details>

</section>

## 参考资料

- [reBotArm_control_py](https://github.com/vectorBH6/reBotArm_control_py)
- [reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Ultralytics YOLO](https://github.com/ultralytics/ultralytics)

## 技术支持

- [提交 Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)



<section className="section-card course-path-section">
  <div className="section-title">
    <span>课程导链</span>
    <h2>reBot B601-DM 系列课程跳转</h2>
    <p>建议按照 Robotics Page 的学习顺序阅读：快速入门 → LeRobot → Pinocchio → 视觉夹取 → ROS2。也可以通过下面的卡片直接跳转到任意课程。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/cn/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>快速入门</strong><span>完成开箱、供电检查、组装、电机 ID、零点校准和基础运动测试。</span></span>
      <span className="course-tag">Start</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot 遥操作与数据采集</strong><span>完成主从遥操作、相机接入、数据集采集、训练和策略评估。</span></span>
      <span className="course-tag">Data</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio 运动学可视化</strong><span>理解模型、坐标系、FK / IK、轨迹规划、MeshCat 仿真和重力补偿。</span></span>
      <span className="course-tag">Control</span>
    </a>
    <a className="course-path-item active" href="/cn/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>视觉夹取 Demo</strong><span>结合 RGB-D 感知、YOLO / GraspNet、手眼标定和真实机械臂抓取。</span></span>
      <span className="course-tag">当前文章</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 集成</strong><span>接入 ROS2、RViz、MoveIt 2、标准 topic / service / action 和规划流程。</span></span>
      <span className="course-tag">Integration</span>
    </a>
  </div>
</section>

</div>

<style>{`
.rebot-page {
  --rb-bg: #ffffff;
  --rb-surface: #ffffff;
  --rb-surface-soft: #f8fafc;
  --rb-text: #111827;
  --rb-muted: #64748b;
  --rb-border: rgba(148, 163, 184, 0.28);
  --rb-primary: #2563eb;
  --rb-primary-soft: #eff6ff;
  --rb-accent: #14b8a6;
  --rb-accent-soft: #ccfbf1;
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.rebot-page .doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.rebot-page .doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.rebot-page .eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.rebot-page .doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.rebot-page .doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.rebot-page .hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.rebot-page .hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.rebot-page .hero-actions a:nth-child(2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.rebot-page .hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.rebot-page .hero-card strong { color: var(--rb-text); }
.rebot-page .hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.rebot-page .doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.rebot-page .doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.rebot-page .doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.rebot-page .section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.rebot-page .section-card > h2 { margin-top: 0; color: var(--rb-text); }
.rebot-page .section-card > h3, .rebot-page .section-card h3 { color: var(--rb-text); }
.rebot-page .section-card p, .rebot-page .section-card li { color: var(--rb-muted); line-height: 1.65; }
.rebot-page .path-grid, .rebot-page .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.rebot-page .path-card, .rebot-page .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; }
.rebot-page .path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.rebot-page .path-card > span:first-child { width: fit-content; padding: 0.32rem 0.6rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); font-weight: 900; font-size: 0.75rem; }
.rebot-page .path-card strong, .rebot-page .feature-grid strong { color: var(--rb-text); }
.rebot-page .path-card p, .rebot-page .feature-grid span { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; margin: 0; }
.rebot-page .image-frame { margin: 1rem 0; text-align: center; }
.rebot-page .image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.rebot-page .content-details, .rebot-page .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.rebot-page .content-details summary, .rebot-page .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.rebot-page .content-details summary::-webkit-details-marker, .rebot-page .video-details summary::-webkit-details-marker { display: none; }
.rebot-page .content-details summary::after, .rebot-page .video-details summary::after { content: "展开"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.rebot-page .content-details[open] summary::after, .rebot-page .video-details[open] summary::after { content: "收起"; }
.rebot-page .content-details > :not(summary), .rebot-page .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.rebot-page .content-details > :last-child, .rebot-page .video-details > :last-child { margin-bottom: 1rem; }
.rebot-page .video-container, .video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border, rgba(148,163,184,0.28)); background: #000; }
.rebot-page .video-container iframe, .video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.rebot-page table { width: 100%; display: table; }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page code { word-break: break-word; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .rebot-page .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .rebot-page .hero-card, html[data-theme='dark'] .rebot-page .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .rebot-page .doc-nav a:hover { background: #1f2023; }
@media (max-width: 900px) { .rebot-page .doc-hero { grid-template-columns: 1fr; } .rebot-page .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 560px) { .rebot-page .doc-hero, .rebot-page .section-card { padding: 1.1rem; border-radius: 18px; } .rebot-page .doc-nav { grid-template-columns: 1fr; } }

.safety-alert {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: flex-start;
  margin: 1.2rem 0 1.6rem;
  padding: 1.05rem 1.15rem;
  border-radius: 18px;
  border: 1px solid rgba(239, 68, 68, 0.38);
  background:
    linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92));
  color: #7f1d1d;
  box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12);
}

.safety-alert-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 999px;
  background: #fee2e2;
  color: #dc2626;
  font-size: 1.25rem;
  line-height: 1;
  flex-shrink: 0;
}

.safety-alert-content strong {
  display: block;
  margin-bottom: 0.45rem;
  color: #991b1b;
  font-size: 1.05rem;
  font-weight: 900;
}

.safety-alert-content p {
  margin: 0;
  color: #7f1d1d;
  line-height: 1.72;
}

.safety-alert-content ul {
  margin: 0.65rem 0 0;
  padding-left: 1.2rem;
  color: #7f1d1d;
  line-height: 1.68;
}

.safety-alert-content li + li {
  margin-top: 0.35rem;
}

.safety-alert-content strong,
.safety-alert-content p strong,
.safety-alert-content li strong {
  font-weight: 900;
}

.safety-alert.compact {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  border-radius: 16px;
}

.safety-alert.compact .safety-alert-content strong {
  margin-bottom: 0.25rem;
}

html[data-theme='dark'] .safety-alert {
  border-color: rgba(248, 113, 113, 0.42);
  background:
    linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18));
  color: #fecaca;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
}

html[data-theme='dark'] .safety-alert-icon {
  background: rgba(248, 113, 113, 0.18);
  color: #fca5a5;
}

html[data-theme='dark'] .safety-alert-content strong,
html[data-theme='dark'] .safety-alert-content p,
html[data-theme='dark'] .safety-alert-content ul {
  color: #fecaca;
}

@media (max-width: 560px) {
  .safety-alert {
    grid-template-columns: 1fr;
  }

  .safety-alert-icon {
    width: 2.1rem;
    height: 2.1rem;
  }
}


/* Course navigation and polished step cards */
.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item,
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.95rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border, var(--border, rgba(148,163,184,0.28)));
  background: var(--rb-surface, var(--panel-bg, #fff));
  text-decoration: none !important;
  color: var(--rb-text, var(--text-main, #111827));
  box-shadow: 0 10px 24px rgba(15,23,42,0.05);
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}
.course-path-item:hover,
.course-step:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.course-path-item.active,
.course-step.active { border-color: rgba(37,99,235,0.50); background: linear-gradient(135deg, rgba(239,246,255,0.94), rgba(240,253,250,0.80)); }
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.45rem;
  height: 2.45rem;
  border-radius: 999px;
  color: #fff;
  background: var(--rb-primary, var(--primary, #2563eb));
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37,99,235,0.24);
}
.course-path-copy strong,
.course-step strong { display: block; color: var(--rb-text, var(--text-main, #111827)); font-size: 1rem; margin-bottom: 0.25rem; }
.course-path-copy span,
.course-step small { display: block; color: var(--rb-muted, var(--text-muted, #64748b)); line-height: 1.6; }
.course-tag,
.course-step em { justify-self: end; white-space: nowrap; padding: 0.35rem 0.7rem; border-radius: 999px; color: var(--rb-primary, var(--primary, #2563eb)); background: var(--rb-primary-soft, var(--primary-soft, #eff6ff)); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.step-card-grid,
.module-summary-grid,
.quick-step-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1rem; margin: 1rem 0 1.35rem; }
.step-card,
.module-summary-card,
.path-card,
.info-card,
.command-card,
.check-card,
.tip-card,
.warning-card,
.danger-card,
.spec-card {
  position: relative;
  padding: 1rem 1.05rem;
  border: 1px solid var(--rb-border, var(--border, rgba(148,163,184,0.28)));
  border-radius: 18px;
  background: linear-gradient(180deg, var(--rb-surface, var(--panel-bg, #fff)), var(--rb-surface-soft, var(--panel-bg-soft, #f8fafc)));
  box-shadow: 0 10px 24px rgba(15,23,42,0.05);
}
.step-mini,
.step-card > span:first-child,
.path-card > span:first-child,
.step-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 0.65rem;
  margin-bottom: 0.65rem;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary, var(--primary, #2563eb)), var(--rb-accent, var(--accent, #14b8a6)));
  font-weight: 900;
  font-size: 0.86rem;
}
.path-card b,
.path-card strong,
.step-card strong,
.module-summary-card b,
.module-summary-card strong { display: block; color: var(--rb-text, var(--text-main, #111827)); margin-bottom: 0.35rem; }
.path-card p,
.path-card small,
.path-card span:not(:first-child),
.step-card p,
.step-card span:not(:first-child),
.module-summary-card span { display: block; margin: 0; color: var(--rb-muted, var(--text-muted, #64748b)); line-height: 1.65; }
.path-card em { display: inline-flex; width: fit-content; margin-top: 0.75rem; padding: 0.32rem 0.65rem; border-radius: 999px; color: var(--rb-primary, var(--primary, #2563eb)); background: var(--rb-primary-soft, var(--primary-soft, #eff6ff)); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.step-title-row { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.95rem; align-items: start; margin-bottom: 1rem; }
html[data-theme='dark'] .course-path-item,
html[data-theme='dark'] .course-step,
html[data-theme='dark'] .step-card,
html[data-theme='dark'] .module-summary-card,
html[data-theme='dark'] .path-card,
html[data-theme='dark'] .info-card,
html[data-theme='dark'] .command-card,
html[data-theme='dark'] .check-card,
html[data-theme='dark'] .tip-card,
html[data-theme='dark'] .warning-card,
html[data-theme='dark'] .danger-card,
html[data-theme='dark'] .spec-card { background: rgba(15,23,42,0.72); border-color: rgba(148,163,184,0.22); }
html[data-theme='dark'] .course-path-item.active,
html[data-theme='dark'] .course-step.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
@media (max-width: 720px) {
  .course-path-item,
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-tag,
  .course-step em { grid-column: 2; justify-self: start; }
  .step-title-row { grid-template-columns: 1fr; }
}

`}</style>
