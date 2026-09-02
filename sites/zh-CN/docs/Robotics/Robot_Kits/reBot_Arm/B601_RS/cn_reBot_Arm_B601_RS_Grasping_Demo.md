---
description: 本教程介绍如何基于 reBot Arm B601-RS、RGB-D 深度相机与 YOLO/OBB 抓取管线搭建一个完整的视觉夹取 Demo。
title: reBot Arm B601-RS 视觉夹取 Demo
keywords:
  - reBot Arm
  - B601-RS
  - 抓取
  - RGB-D
  - YOLO
  - 手眼标定
  - 机器人
slug: /rebot_arm_b601_rs_grasping_demo
last_update:
  date: 2026-06-17
  author: YinHaizhou
translation:
  skip: [[zh-CN]]
createdAt: '2026-06-15'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_grasping_demo/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# reBot Arm B601-RS 视觉夹取 Demo

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://detail.tmall.com/item.htm?id=1057521963559" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Camera-RGB--D-green.svg" alt="Camera" />
    <img src="https://img.shields.io/badge/Detection-YOLO-yellow.svg" alt="YOLO" />
</p>

<p align="center">
  <strong>深度感知 · 目标检测 · 手眼标定 · 自主抓取 · 全开源</strong>
</p>

YOLO 是一类广泛使用的实时目标检测模型，能够在单次前向推理中同时完成目标定位与类别识别。本教程基于 YOLO、RGB-D 深度相机和 reBot Arm B601-RS 搭建一个可运行的桌面视觉夹取 Demo，并完成从环境安装、相机接入、手眼标定到抓取调试的完整流程。

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="reBot Arm B601-RS 视觉夹取 Demo" />
</p>

## 项目特点

1. **YOLO + OBB 直接估计抓取姿态**  
   直接利用检测框或 OBB 最小外接矩形，使用短轴作为夹爪开合方向，避免复杂 3D 点云处理。

2. **GraspNet-Baseline 6D 夹取姿态估计（可选）**  
   支持基于 GraspNet-Baseline（`graspnet/graspnet-baseline`）对 RGB-D 点云进行 6D 夹取姿态估计，并结合 YOLO 检测框筛选目标候选，用于更复杂物体的夹取调试。

3. **机械臂与夹爪驱动封装**  
   主抓取脚本基于 `reBotArm_control_py` 的机械臂与末端控制器，并通过轻量抓取辅助完成夹爪开合、力控夹取与 TCP 位姿读取。

4. **开源 & 可扩展**  
   所有代码开源，支持用户根据需求自定义控制算法和效果。

## 规格参数

本教程硬件由 [矽递科技 Seeed Studio](https://www.seeedstudio.com/) 提供

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>规格</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>机械臂型号</td>
      <td>reBot Arm B601-RS</td>
    </tr>
    <tr>
      <td>自由度</td>
      <td>6-DOF + 夹爪</td>
    </tr>
    <tr>
      <td>相机型号</td>
      <td>Orbbec Gemini 2 / Intel RealSense D435i / D405</td>
    </tr>
    <tr>
      <td>检测方式</td>
      <td>YOLO + OBB 最小外接矩形</td>
    </tr>
    <tr>
      <td>通信方式</td>
      <td>CAN Bus via USB2CAN 适配器；USB 3.0 相机连接</td>
    </tr>
    <tr>
      <td>工作电压</td>
      <td>48V DC</td>
    </tr>
    <tr>
      <td>控制主机</td>
      <td>Ubuntu 22.04+ PC</td>
    </tr>
    <tr>
      <td>推荐 Python 版本</td>
      <td>Python 3.10</td>
    </tr>
  </tbody>
</table>

## 材料清单（BOM）

| 部件 | 数量 | 是否包含 |
|--|--|--|
| reBot Arm B601-RS 机械臂 | 1 | ✅ |
| 夹爪 | 1 | ✅ |
| USB2CAN 串口桥 | 1 | ✅ |
| 电源适配器（48V） | 1 | ✅ |
| USB-C / 通信线缆 | 1 | ✅ |
| RGB-D 深度相机 | 1 | ✅ |
| 摄像头连接件 / 安装支架 | 1 | ✅ |

### 接线说明

1. 将深度相机通过 USB 3.0 连接到主机。
2. 将 USB2CAN 适配器连接到机械臂 CAN 总线。
3. 确认 48V 电源、相机和机械臂全部连接可靠。
4. 配置权限：

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0
```

## 环境要求

| 项目 | 要求 |
|------|------|
| 操作系统 | Ubuntu 22.04+ |
| Python | 3.10 |

## 安装步骤

### 步骤 0. 先完成机械臂基础准备

开始本教程前，请先完成 [reBot Arm B601-RS 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/) 中的内容，包括机械臂组装、零点初始化、电机 ID 配置与基础连通性确认。

### 步骤 1. 克隆仓库

优先使用 Seeed-Projects 官方仓库：

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### 步骤 2. 创建并配置 conda 环境

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

如果你想使用其他环境名，可以将命令中的 `rebotarm` 替换为自定义名称。

### 步骤 3. 安装机械臂 SDK

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

如果 `pip install -e .` 报 `Multiple top-level packages discovered in a flat-layout`，请在 `reBotArm_control_py` 的 `pyproject.toml` 中加入显式包发现配置，然后重新执行 `pip install -e .`：

```toml
[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

B601 的 DM 与 RS 两种机械臂配置通过 SDK 仓库中的配置文件切换。B601-RS 请在 `sdk/reBotArm_control_py/config/rebotarm.yaml` 中确认：

```yaml
hardware_yaml: rebotarm_rs.yaml
```

视觉抓取程序会读取该 SDK 配置，并自动选择对应的机械臂控制模式与夹爪参数。

### 步骤 4. 安装深度相机 SDK

本项目支持 Orbbec Gemini 2 与 RealSense D435i / D405 等 RGB-D 深度相机。请根据实际使用的相机安装对应 SDK；如果当前环境已经能正常导入相机驱动，可跳过本步骤。

**Orbbec Gemini 2**

Orbbec Gemini 2 深度相机依赖 `pyorbbecsdk`（Orbbec SDK v2 的 Python 版本）。优先推荐直接安装预编译 Python 包：

**方式一：通过 pip 安装（推荐）**

```bash
pip install pyorbbecsdk2
```

**方式二：从 GitHub 获取**

```bash
sudo apt-get update
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

对于中国大陆用户可以使用：

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

源码安装时，请先通过 CMake 编译生成原生扩展，确保 `install/lib` 中已有 `pyorbbecsdk*.so` 和 Orbbec 动态库，再执行 `pip install -e .`。

注意，如果上述安装过程中均发生错误导致安装失败，请参考下方 Orbbec 官方文档进行安装操作。

**验证安装**

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

首次使用 Orbbec 相机时建议安装 udev 规则：

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

**RealSense D435i / D405**

RealSense 相机依赖 `pyrealsense2`。通常可以直接通过 pip 安装：

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

如果系统需要完整的 RealSense 工具链或 udev 规则，请参考 RealSense SDK 官方文档安装 `librealsense2`。

**SDK 资料汇总**

| 资料 | 链接 |
|------|------|
| Gemini 2 产品页 | https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51 |
| 开发资料总链接 | https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1 |
| Orbbec SDK v2 | https://github.com/orbbec/OrbbecSDK_v2 |
| SDK v2 API 文档 | https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/ |
| pyorbbecsdk | https://github.com/orbbec/pyorbbecsdk |
| pyorbbecsdk 文档 | https://orbbec.github.io/pyorbbecsdk/index.html |
| ROS2 Wrapper | https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main |
| Intel RealSense SDK | https://github.com/realsenseai/librealsense 

### 步骤 5. 配置 GraspNet（可选）

如果只运行 `scripts/main.py` 或 `scripts/ordinary_grasp_pipeline.py`，不需要配置 GraspNet。只有在运行 `scripts/graspnet_camera_demo.py` 或 `scripts/grasp.py` 时，才需要准备 GraspNet、CUDA 版 PyTorch、PointNet2/knn CUDA 算子和预训练权重。

GraspNet 的 `pointnet2` / `knn` 扩展需要 CUDA 编译器。开始前先确认当前环境可以找到 `nvcc`，并检查 `nvcc` 的 CUDA 版本是否和 PyTorch 编译时使用的 CUDA 版本一致：

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

如果没有 `nvcc`，或 `nvcc` 显示的 CUDA 版本与 `torch.version.cuda` 不一致，请安装与当前 PyTorch CUDA 版本匹配的 CUDA 编译器。例如 PyTorch 显示 `13.0` 时：

```bash
conda install -c nvidia cuda-nvcc=13.0
```

也可以反过来安装与当前 `nvcc` 版本匹配的 PyTorch。两者必须一致，否则编译 `pointnet2` / `knn` 时会出现 `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)`。

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# 按你的 CUDA 版本安装 PyTorch 后，再安装 GraspNet 运行依赖
pip install open3d tensorboard Pillow tqdm

# 编译本地算子前配置 CUDA 编译路径。
export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="12.0"
export CPATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

# 编译 CUDA 算子
cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

# 安装 GraspNet API
git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
pip install .
cd ../../..
```

:::tip
注：如果直接参考graspnet-baseline官方仓库文档使用 `python setup.py install` 可能报 CUDA / PyTorch 相关错误，建议使用 `pip install . --no-build-isolation`，让扩展在当前 conda 环境中复用已安装的 PyTorch 与 CUDA 配置进行编译。
:::

:::tip
如果编译时报 `fatal error: cusparse.h: No such file or directory`，先运行 `find $CONDA_PREFIX -name cusparse.h`，并把包含 `cusparse.h` 的目录加入 `CPATH` / `CPLUS_INCLUDE_PATH`。如果 CUDA 头文件来自 conda `cuda-toolkit`，路径通常是 `$CONDA_PREFIX/targets/x86_64-linux/include`，而不是上面示例里的 pip `nvidia/cu13/include` 路径。
:::

:::tip
此外，GraspNet API 的依赖中可能仍使用 `sklearn` 包名。上面的 `sed` 命令会将 `sklearn` 替换为 `scikit-learn`，避免安装时出现包名提示。除非同步调整 GraspNet API 的依赖栈，否则建议保留其 `numpy==1.23.4` 约束，因为 `transforms3d==0.3.1` 仍使用 `np.float` 等 NumPy 别名。
:::

**配置预训练模型**

在graspnet-baseline 官方仓库下载 GraspNet 官方预训练权重[Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view)、[Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A)，将 下载好的`checkpoint-rs.tar` 放到：

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

然后在 `config/default.yaml` 中确认：

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

`checkpoint` 支持三种写法：仅文件名会自动从 `sdk/graspnet-baseline/checkpoints/` 查找；相对路径会按项目根目录解析；绝对路径会直接使用。

## 目录结构

```
rebot_grasp/
├── config/
│   ├── default.yaml              # 主配置文件
│   └── calibration/
│       └── <camera_type>/
│           ├── intrinsics.npz    # 相机内参
│           └── hand_eye.npz      # 手眼标定结果
├── drivers/
│   ├── camera/
│   │   ├── base.py               # 相机抽象基类
│   │   ├── orbbec_gemini2.py     # Gemini 2 驱动
│   │   └── realsense.py          # RealSense 驱动（备用）
│   └── robot/
│       └── grasp_driver.py       # 基于机械臂 SDK 的轻量抓取辅助
├── calibration/
│   ├── aruco_pose.py             # ArUco 位姿估计
│   └── hand_eye.py               # 手眼标定求解
├── utils/
│   ├── ordinary_grasp.py         # OBB 抓取姿态估计与可视化
│   └── transforms.py             # 坐标变换工具
├── scripts/
│   ├── main.py                   # 主抓取程序
│   ├── set.py                    # 抓取与放置程序
│   ├── ordinary_grasp_pipeline.py
│   ├── object_detection.py
│   └── collect_handeye_eih.py
├── sdk/
│   ├── pyorbbecsdk/              # Orbbec SDK Python 封装
│   └── reBotArm_control_py/      # reBot Arm SDK
└── environment.yml               # 推荐的 conda 环境文件
```

## 手眼标定

第一次运行完整抓取前，先完成 Eye-in-Hand 手眼标定。

运行标定程序前，请先启动并确认 CAN 接口：

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

```bash
python scripts/collect_handeye_eih.py
```

开始前，请先在 `config/default.yaml` 中确认以下ArUco尺寸参数与你实际打印的标记一致：

```yaml
calibration:
  aruco:
    marker_length_m: 0.1
```

自动模式下，机械臂会自动遍历 50 个预设姿态，检测到ArUco稳定后自动采样。即使中途按 `c` 或 `q` 中断，脚本也会尝试基于当前已有样本计算标定结果。

如果你希望手动推动机械臂采集，可以使用手动模式：

```bash
python scripts/collect_handeye_eih.py --manual
```

手动模式下，机械臂会进入重力补偿状态。你可以将末端推到合适视角后按 `Enter` 采集，按 `c` 或 `q` 结束并计算结果。

:::tip
如果您在校准之后发现机械臂的抓取精度无法满足需求，可以设置`config/default.yaml`参数 `calibration.hand_eye_compensation_m`中的 `X（前后）、Y（左右）、Z（高低）` 参数给予位置补偿。
:::

标定结果保存到：

```text
config/calibration/<camera_type>/hand_eye.npz
```

样本数建议最少 5 个样本且建议不少于 15 个样本。

## 运行与调试

### 1. 仅验证目标检测

```bash
python scripts/object_detection.py
```

若需调整检测模型或类别，可在 `config/default.yaml` 中修改：

```yaml
yolo:
  model_name: "yoloe-26l-seg.pt"
  device: "cpu"
  use_world: true
  custom_classes:
    - "yellow banana"
    - "water bottle"
    - "cup"
```

用于确认：

- 相机可以正常打开
- YOLO 模型加载正常
- YOLO 目标检测功能正常

### 2. 仅验证抓取估计

```bash
python scripts/ordinary_grasp_pipeline.py
```

若需要调整抓取估计频率或预抓取回退距离，可修改：

```yaml
grasp_pipeline:
  infer_every_live: 3
  grasp:
    depth_quantile: 0.5
    pregrasp_offset_m: 0.080
    insertion_depth_m: 0.015
    min_base_z_m: 0.00
```

这个脚本不会连接机械臂，只用于验证：  
- OBB 或最小外接矩形是否合理
- 抓取点是否位于目标中央区域
- 短轴方向是否符合夹爪开合方向预期

按键说明：  
- 鼠标左键：点测深度
- `G`：打印当前最佳抓取姿态
- `Q` / `Esc`：退出

### 3. 执行主抓取程序

```bash
python scripts/main.py
```

如果只想先验证目标位姿，不让机械臂真实动作：

```bash
python scripts/main.py --dry-run
```
建议先通过 `--dry-run` 验证位姿和工作空间，再执行真实抓取。

主程序执行流程：  
1. 初始化 RGB-D 相机，确认图像流可用
2. 机械臂与夹爪使能
3. 移动到预备位，如果需要调整机械臂启动后的预备位置，请在 `config/default.yaml` 中修改：

```yaml
robot:
  ready_pose:
    x: 0.3
    y: 0.0
    z: 0.3
    roll: 0.0
    pitch: 0.7
    duration: 3.0
```

4. 实时检测桌面目标
5. 基于短轴估计抓取姿态
6. 按 `G` 采当前帧并执行抓取

运行时按键：  
- `G`：抓取当前最佳目标
- `R`：恢复实时预览
- `Q` / `Esc`：退出程序

### 4. `scripts/set.py` — 抓取与放置程序

功能效果：将香蕉抓取并放置到盒子里面

完成流程：
1. 相机与机械臂初始化，移动到预备点位
2. 实时相机预览 + YOLO 目标检测与实例分割
3. 按 `G` 冻结帧，经手眼变换计算机械臂目标位姿
4. 机械臂移动抓取香蕉并抬高
5. 机械臂将香蕉放置在盒子内，并回归初始姿态
6. 按 `Q` 退出系统，机械臂回归零点

### 5. GraspNet 相机估计 Demo（可选）

```bash
python scripts/graspnet_camera_demo.py
```

该脚本不连接机械臂，仅使用 RGB-D 相机运行 GraspNet 6D 夹取姿态估计。脚本会保留实时相机预览，并使用 YOLO 检测框选择目标区域，再从 GraspNet 全场景候选中筛选目标 bbox 内的可行夹取。

按键说明：

- `G` / `Space`：对当前帧运行 GraspNet 推理
- `R`：恢复实时预览
- `Q` / `Esc`：退出

推理后可通过 Open3D 查看点云与夹取候选。

### 6. GraspNet 机械臂抓取程序（可选）

```bash
python scripts/grasp.py
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

该脚本基于 GraspNet 估计结果接入机械臂执行流程：YOLO 选择目标，GraspNet 输出 6D 夹取姿态，经手眼标定转换到机械臂基坐标系，再检查 IK 可达性并执行预夹取、夹取、退回动作。

运行`python scripts/grasp.py`将运行完整 GraspNet 机械臂抓取流程，会实际控制机械臂运动。`--dry-run`：只打印目标位姿和候选筛选结果，不执行抓取动作。`--target-class "light blue coffee cup"`可以指定 YOLO 目标类别，只对该类别对应目标进行 GraspNet 候选筛选与抓取。

## FAQ

### 1. `ModuleNotFoundError: No module named 'motorbridge'`

表示当前 Python 环境还没有安装机械臂 SDK 依赖。请确认：

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

### 2. 按 `G` 后不执行抓取

常见原因：

- `hand_eye.npz` 不存在
- 手眼标定模式不是 `eye_in_hand`
- 当前目标位姿 IK 不可达

建议先运行：

```bash
python scripts/main.py --dry-run
```

### 3. 抓取点深度不稳定

可以适当调整：

- `grasp_pipeline.grasp.depth_quantile`
- 相机与目标的安装高度
- 目标表面的反光情况

### 4. GraspNet 报 `pointnet2_utils` 无法从 `pointnet2` 导入

这通常是 `sdk/graspnet-baseline/pointnet2` 本地 CUDA 扩展没有在当前 conda 环境中正确编译安装，或 Python 路径解析到了错误的 `pointnet2` 包。建议确认已激活项目环境，并在同一个环境中重新编译安装 `pointnet2` 与 `knn`：

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

验证：

```bash
python -c "from pointnet2 import pointnet2_utils; print('Submodule import works')"
```

### 5. 针对新显卡运行 GraspNet 时出现 CUDA 架构不兼容

如果出现 `no kernel image is available for execution on the device` 或 PyTorch 提示当前 GPU 的 CUDA capability 不受支持，通常说明当前 PyTorch wheel 不包含该显卡架构对应的 CUDA kernel。建议安装支持当前 CUDA/显卡架构的 PyTorch 版本，然后重新编译 GraspNet 的本地 CUDA 扩展。

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

如需手动指定编译架构，可在重新编译前设置 `TORCH_CUDA_ARCH_LIST`，具体取值请按当前显卡架构和 PyTorch/CUDA 版本确认。

### 6. GraspNet 推理时报 `RuntimeError: CPU not supported`

`pointnet2` 中的采样算子只支持 CUDA tensor。请确认 CUDA 可用、GraspNet 网络和输入点云都在 GPU 上，并且 `pointnet2` / `knn` 是在当前环境和当前 PyTorch 版本下编译的。

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

如果输出为 `False`，需要先修复 CUDA / PyTorch 安装；如果输出为 `True` 但仍报错，建议重新编译 `pointnet2` 和 `knn`。

## 联系方式

- 技术支持：[提交 Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)
- 项目地址：[Github](https://github.com/Seeed-Projects/reBot-DevArm-Grasp)
- 论坛：[Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考文档

- [reBot Arm B601-RS 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/)
- [reBot Arm B601-RS ROS2 集成](https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_ros2_integration/)
- [Orbbec Gemini 2 产品页](https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51)
- [Orbbec 开发资料总链接](https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [Orbbec SDK v2 API 文档](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/)
- [pyorbbecsdk 仓库](https://github.com/orbbec/pyorbbecsdk)
- [pyorbbecsdk 文档](https://orbbec.github.io/pyorbbecsdk/index.html)
- [Orbbec ROS2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main)
- [Intel RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Graspnet(Anygrasp) 文档](https://graspnet.net/)
