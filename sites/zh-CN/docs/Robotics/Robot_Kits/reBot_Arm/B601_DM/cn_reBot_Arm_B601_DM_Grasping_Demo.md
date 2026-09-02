---
description: 本教程介绍如何基于 reBot Arm B601-DM、RGB-D 深度相机与 YOLO/OBB 抓取管线搭建一个完整的视觉夹取 Demo。
title: reBot Arm B601-DM 视觉夹取 Demo
keywords:
  - reBot Arm
  - B601-DM
  - 抓取
  - RGB-D
  - YOLO
  - 手眼标定
  - 机器人
slug: /rebot_arm_b601_dm_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-06-17
  author: YinHaizhou
translation:
  skip: [[zh-CN]]
createdAt: '2026-04-22'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_grasping_demo/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

#  reBot Arm B601 视觉夹取 Demo

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://detail.tmall.com/item.htm?id=1042412233386&skuId=6065255360559" target="_blank">
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

YOLO 是一类广泛使用的实时目标检测模型，能够在单次前向推理中同时完成目标定位与类别识别。本教程基于 YOLO、RGB-D 深度相机和 reBot Arm B601-DM 搭建一个可运行的桌面视觉夹取 Demo，并完成从环境安装、相机接入、手眼标定到抓取调试的完整流程。

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/demo.gif" alt="reBot Arm B601-DM 视觉夹取 Demo" />
</p>

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?bvid=BV1VjVA6KEff&autoplay=0&muted=1" title="Bilibili video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

##  项目介绍

**reBot Arm B601 视觉夹取 Demo** 是基于 [reBot Arm B601](https://github.com/Seeed-Projects/reBotArm_control_py) 机械臂控制库与 RGB-D 深度相机的视觉抓取算法演示项目。系统支持 B601 的 DM 与 RS 两种机械臂配置，通过 YOLO 模型实时识别桌面物体，利用 OBB 最小外接矩形估计夹取姿态，经手眼标定将相机坐标系下的抓取点变换到机械臂基坐标系，最终驱动机械臂完成自主抓取。

###  核心功能

- 📷 **深度感知** — 支持 Orbbec Gemini 2 与 RealSense D435i / D405 等 RGB-D 深度相机
- 🔍 **目标检测** — 基于 YOLO 模型识别，支持开放词汇自定义类别
- 📐 **姿态估计** — OBB 最小外接矩形短轴方向估计夹爪朝向，深度分位数估计抓取高度
- 🔄 **坐标变换** — TSAI 手眼标定（Eye-in-Hand），将相机系抓取点变换到机械臂基坐标系
- 🦾 **运动执行** — reBotArm_control_py IK + 轨迹控制器，内置夹爪力控状态机

---

## 硬件配置

| 组件 | 型号 / 要求 |
|------|------------|
| 机械臂 | reBot Arm B601（DM / RS 两种配置） |
| 深度相机 | Orbbec Gemini 2、Intel RealSense D435i / D405 |
| 通信接口 | USB2CAN 串口桥接器（机械臂）；USB 3.0（相机） |
| 主机 | Ubuntu 22.04+，Python 3.10，x86_64 |

**接线说明**

1. 将深度相机通过 USB 3.0 连接到主机。
2. 将 USB2CAN 适配器连接到机械臂 CAN 总线。
3. 确认 24V 电源、相机和机械臂全部连接可靠。
4. 配置权限：

```bash
sudo chmod a+rw /dev/bus/usb/*/*   # 深度相机 USB 权限
sudo chmod 666 /dev/ttyUSB0        # USB2CAN（端口号按实际调整）
```

---

## 环境安装

| 项目 | 要求 |
|------|------|
| 操作系统 | Ubuntu 22.04+ |
| Python | 3.10 |
| 推荐环境 | conda |
| 推荐工作区目录名 | `rebot_grasp` |
| 推荐 conda 环境名 | `rebotarm` |

### Step 1. 克隆仓库

优先使用 Seeed-Projects 官方仓库：

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### Step 2. 创建并配置 conda 环境

```bash
conda env create -f environment.yml
conda activate rebotarm
```
:::tip
如果你想使用其他环境名，可以将命令中的 `rebotarm` 替换为自定义名称。

:::


### Step 3. 安装机械臂控制库

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

如果 `pip install -e .` 报 `Multiple top-level packages discovered in a flat-layout`，请在 `reBotArm_control_py` 的 `pyproject.toml` 中加入显式包发现配置，然后重新执行 `pip install -e .`：

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

视觉抓取程序会读取该 SDK 配置，并自动选择对应的机械臂控制模式与夹爪参数。

### Step 4. 安装深度相机 SDK

本项目支持 Orbbec Gemini 2 与 RealSense D435i / D405 等 RGB-D 深度相机。请根据实际使用的相机安装对应 SDK；如果当前环境已经能正常导入相机驱动，可跳过本步骤。

**Orbbec Gemini 2**

Orbbec Gemini 2 依赖 **pyorbbecsdk**（Orbbec SDK v2 的 Python 版本）。优先推荐直接安装预编译 Python 包：

**方式一：通过 pip 安装（推荐）**

```bash
pip install pyorbbecsdk2
```

**方式二：从 GitHub 获取**

```bash
# 安装编译依赖
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

对于中国大陆用户可以使用
```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

源码安装时，请先通过 CMake 编译生成原生扩展，确保 `install/lib` 中已有 `pyorbbecsdk*.so` 和 Orbbec 动态库，再执行 `pip install -e .`。

注意，如果上述安装过程中均发生错误导致安装失败，请参考下方Orbbec官方文档进行安装操作。

:::tip
首次使用建议安装 udev 规则：

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

**验证安装**

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```
:::

**OrbbecViewer（可选，用于验证相机）**

下载预编译包后运行 `OrbbecViewer`，可在运行 Demo 前确认相机连接和深度流正常。

- GitHub：https://github.com/orbbec/OrbbecSDK_v2/releases
- Gitee：https://gitee.com/orbbecdeveloper/OrbbecSDK_v2/releases

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
| Intel RealSense SDK | https://github.com/realsenseai/librealsense |

### Step 5. 配置 GraspNet（可选）

为了实现对物体夹取姿态更准确的估计，本项目对[graspnet-baseline](https://github.com/graspnet/graspnet-baseline)进行了适配，从而提升机械臂夹取的性能。

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

---

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


## 运行与调试

### 0. 确认机械臂版本与 SDK 配置

运行会连接机械臂的脚本前，请先确认机械臂版本、电源和 SDK 配置一致：

- 请先完成对应机械臂的基础准备：[B601-DM 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/) 或 [B601-RS 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/)。
- 在 `sdk/reBotArm_control_py/config/rebotarm.yaml` 中选择对应的硬件配置：

```yaml
hardware_yaml: rebotarm_dm.yaml
```

或：

```yaml
hardware_yaml: rebotarm_rs.yaml
```

- B601-DM 使用 24V DC 电源，B601-RS 使用 48V DC 电源，请确认电源适配器和接线与机械臂版本一致。
- 使用 B601-DM 时，请确认 SDK 配置中的串口桥接器设备路径与实际设备一致。
- 使用 B601-RS 时，运行标定或抓取脚本前请先启动 CAN 接口：

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

### 1. 手眼标定（抓取前必做）

```bash
python scripts/collect_handeye_eih.py
```

自动模式下，机械臂会自动遍历 50 个预设位姿，检测到 ArUco 稳定后自动采样。正常结束或中途打断时，脚本都会尝试计算并保存标定结果；至少需要 5 个样本，建议 ≥15 个样本以获得更稳的结果。

如需手动推动机械臂采集，可使用：

```bash
python scripts/collect_handeye_eih.py --manual
```

手动模式下，机械臂会进入重力补偿状态。将末端推到合适视角后按 `Enter` 采集，按 `c` 或 `q` 结束并计算。

:::tip
如果您在校准之后发现机械臂的抓取精度无法满足需求，可以设置`config/default.yaml`参数 `calibration.hand_eye_compensation_m`中的 `X（前后）、Y（左右）、Z（高低）` 参数给予位置补偿。
:::

<div class="video-container">
  <iframe 
    width="900" 
    height="600" 
    src="//player.bilibili.com/player.html?bvid=BV13CTk6bErp&autoplay=0&muted=1" 
    title="告别抓取误差：彻底解决机械臂视觉抓取失败的困惑" 
    frameborder="0" 
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
  </iframe>
</div>

### 2. `scripts/main.py` — 主抓取程序

完整的视觉抓取流水线：

1. 初始化 RGB-D 相机，确认图像流可用
2. 机械臂与夹爪使能，移动到预备高位
3. 实时相机预览 + YOLO 目标检测与实例分割
4. OBB 短轴估计夹爪朝向，深度分位数估计抓取高度
5. 按 `G` 冻结帧，经手眼变换计算机械臂目标位姿
6. 机械臂移动到预抓取点 → 下降 → 夹爪闭合 → 提升 → 回预备位

### 3. `scripts/set.py` — 抓取与放置程序

功能效果：将香蕉抓取并放置到盒子里面

完成流程：
1. 相机与机械臂初始化，移动到预备点位
2. 实时相机预览 + YOLO 目标检测与实例分割
3. 按 `G` 冻结帧，经手眼变换计算机械臂目标位姿
4. 机械臂移动抓取香蕉并抬高
5. 机械臂将香蕉放置在盒子内，并回归初始姿态
6. 按 `Q` 退出系统，机械臂回归零点

<div class="video-container">
  <iframe 
    width="900" 
    height="600" 
    src="//player.bilibili.com/player.html?bvid=BV1SoTv6iEwQ&autoplay=0&muted=1" 
    title="reBot Arm B601-DM 协同双目视觉实现智能抓取开源方案" 
    frameborder="0" 
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
  </iframe>
</div>

### 4. `scripts/ordinary_grasp_pipeline.py` — 简化抓取测试

不依赖机械臂，仅验证 OBB 抓取姿态估计和可视化效果，适合调试感知模块。

### 5. `scripts/graspnet_camera_demo.py` — GraspNet 相机估计 Demo

不连接机械臂，仅使用 RGB-D 相机运行 GraspNet 6D 夹取姿态估计。脚本会保留实时相机预览，并使用 YOLO 检测框选择目标区域，再从 GraspNet 全场景候选中筛选目标 bbox 内的可行夹取。按 `G` 或 `Space` 对当前帧推理，按 `R` 恢复实时预览，按 `Q` 或 `Esc` 退出；推理后可通过 Open3D 查看点云与夹取候选。

```bash
python scripts/graspnet_camera_demo.py
```

### 6. `scripts/grasp.py` — GraspNet 机械臂抓取程序

基于 `graspnet_camera_demo.py` 的估计结果接入机械臂执行流程：YOLO 选择目标，GraspNet 输出 6D 夹取姿态，经手眼标定转换到机械臂基坐标系，再检查 IK 可达性并执行预夹取、夹取、退回动作。调试时建议先使用 `--dry-run` 只打印目标位姿和候选筛选结果。

```bash
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

### 7. `scripts/object_detection.py` — 基础检测 Demo

纯 YOLO 检测演示，实时显示检测框和置信度，无抓取逻辑。

---

## default.yaml 参数说明

#### 1. 相机与标定配置 (`camera` & `calibration`)

| 参数项 | 类型 / 可选值 | 含义与详细说明 |
| :--- | :--- | :--- |
| `camera.type` | `realsense_d435i`<br/>`realsense_d405`<br/>`orbbec_gemini2` | **相机类型**：指定当前系统连接的相机硬件。 |
| `camera.serial` | `string` / `null` | **设备序列号**：指定具体的设备 SN 号。填写 `null` 表示默认使用系统检测到的第一台可用设备。 |
| `calibration.aruco.marker_length_m` | `float` | **ArUco 边长**：手眼标定所使用的 ArUco 标定码实际物理边长，单位为**米 (m)**。 |
| `calibration.hand_eye_compensation_m` | `array` | **手眼标定平移补偿**：手眼标定完成后，在**机器人基坐标系**下执行的 XYZ 手动平移补偿（格式为 `[X, Y, Z]`），单位为**米 (m)**。若三项全为 `0.0`，则补偿矩阵为单位矩阵。 |

---

#### 2. 目标检测配置 (`detection`)

| 参数项 | 类型 | 含义与详细说明 |
| :--- | :--- | :--- |
| `detection.conf_threshold` | `float` | **YOLO 检测置信度阈值**：得分低于该值的检测框将被过滤。 |
| `detection.iou_threshold` | `float` | **YOLO NMS IoU 阈值**：非极大值抑制（NMS）中用于过滤重叠框的交并比（IoU）阈值。 |

---

#### 3. 机器人与夹爪配置 (`robot`)

| 参数项 | 类型 / 可选值 | 含义与详细说明 |
| :--- | :--- | :--- |
| `robot.repo_root` | `string` / `null` | **仓库根目录**：`reBotArm_control_py` 仓库的路径。为 `null` 时默认使用内部相对路径 `sdk/reBotArm_control_py`。 |
| `robot.ready_pose` | `array` | **预备位**：系统机械臂启动后优先到达的预备位置。每次抓取任务结束后，机械臂也会自动返回至该位置。 |
| `robot.gripper.dm`<br/>`robot.gripper.rs` | 结构体对象 | **夹爪硬件参数**：系统会根据 SDK 当前的实际硬件配置，自动选择并应用对应的这两组参数之一。 |

#### 夹爪内部核心参数说明

对于 `robot.gripper.dm` 或 `robot.gripper.rs` 内部的子参数，定义规则如下：

* **`angle_open`**、**`close_torque`**、**`default_force`**：分别对应张开角度、闭合力矩和默认控制力，均需填写**正数数值**。
* **`counterclockwise`**：布尔值。指示闭合时采用的电机转动方向（是否为逆时针）。代码会据此逻辑自动推导出张开角度和闭合力矩的符号。
* **`tau_max`**：力矩上限。

:::tip
注：其余更高级的夹爪控制行为参数，可在 `drivers/robot/grasp_driver.py` 文件中进行查阅与定义。
:::

---

#### 4. 抓取管线与 GraspNet 配置 (`grasp_pipeline` & `graspnet`)

| 参数项 | 类型 | 含义与详细说明 |
| :--- | :--- | :--- |
| `grasp_pipeline.infer_every_live` | `int` | **推理帧间隔**：在实时视频预览时，每 N 帧运行一次目标检测，用以有效减轻 CPU/GPU 的实时计算压力。 |
| `grasp_pipeline.grasp.depth_quantile` | `float` | **深度分位数**：短轴抓取管线所使用的深度计算分位数。该数值越大，计算出的抓取点通常会越深。 |
| `grasp_pipeline.grasp.pregrasp_offset_m` | `float` | **预抓取位偏移量**：相对于最终的目标抓取位置，沿末端进给方向往回退的距离，单位为**米 (m)**。 |
| `grasp_pipeline.grasp.insertion_depth_m` | `float` | **插入深度**：GraspNet 执行抓取时，沿进给方向额外向前推入或插入的深度，单位为**米 (m)**。 |
| `grasp_pipeline.grasp.min_base_z_m` | `float` | **最低抓取高度限制**：在**机械臂基坐标系**下允许的最低抓取 Z 轴高度，单位为**米 (m)**（作为底层防碰撞的安全边界）。 |
| `graspnet` | 结构体配置 | **GraspNet 运行参数**：该配置项下的所有子参数供 `scripts/graspnet_camera_demo.py` 和 `scripts/grasp.py` 脚本运行时加载使用。 |

### 模型选择库

YOLO 模型会从 `rebot_grasp/models/` 目录加载；如果模型文件不存在，Ultralytics 通常会尝试自动下载。

常用模型：

| 模型 | 说明 |
| --- | --- |
| `yoloe-26l-seg.pt` | 开放词汇 + 分割，当前默认 |
| `yoloe-26s-seg.pt` | 更轻量，速度更快 |
| `yolov8n-seg.pt` | 封闭类别分割，小模型 |
| `yolov8s-seg.pt` | 封闭类别分割，精度更高 |

当模型名包含 `world` / `yoloe`，并且 `yolo.use_world=true` 时，程序会调用 `model.set_classes(custom_classes)`，将 `yolo.custom_classes` 注入为开放词汇类别。普通 `yolov8*-seg.pt` 模型会忽略这组开放词汇类别。

---

## ❓ FAQ

### 1. `ModuleNotFoundError: No module named 'motorbridge'`

这通常表示当前 Python 环境还没有安装机械臂 SDK 依赖。请确认已激活项目环境，并重新同步环境与安装机械臂 SDK：

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

### 2. 按 `G` 后不执行抓取

常见原因包括：

- `hand_eye.npz` 不存在
- 手眼标定模式不是 `eye_in_hand`
- 当前目标位姿 IK 不可达

建议先使用 dry-run 模式验证感知结果和目标位姿：

```bash
python scripts/main.py --dry-run
```

### 3. 抓取点深度不稳定

可以优先检查和调整：

- `grasp_pipeline.grasp.depth_quantile`
- 相机与目标工作区域的安装高度
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

### 5. 当前显卡运行 GraspNet 时出现 CUDA 架构不兼容

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

---

## 📄 参考资料

- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) — 机械臂控制库
- [reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm) — reBot 机械臂开源项目
- [Orbbec Gemini 2 产品页](https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Ultralytics YOLOv11](https://github.com/ultralytics/ultralytics)

---

## ☎ 联系我们

- **技术支持**：[提交 Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)

---

<p align="center">
  <strong>🌟 如果本项目对你有帮助，欢迎点个 Star！</strong>
</p>
