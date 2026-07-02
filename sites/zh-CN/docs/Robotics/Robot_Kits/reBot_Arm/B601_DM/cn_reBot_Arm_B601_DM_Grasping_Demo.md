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
  skip:
    - [zh-CN]
createdAt: '2026-04-22'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_grasping_demo/
---

#  reBot Arm B601 视觉夹取 Demo

<p align="center">
  <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601" />
</p>

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
<iframe width="900" height="600" src="//player.bilibili.com/player.html?bvid=BV1VjVA6KEff&autoplay=0" title="Bilibili video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 项目特点

1. **YOLO + OBB 直接估计抓取姿态**  
   直接利用检测框或 OBB 最小外接矩形，使用短轴作为夹爪开合方向，避免复杂 3D 点云处理。

2. **GraspNet-Baseline 6D 夹取姿态估计（可选）**  
   支持基于 GraspNet-Baseline（`graspnet/graspnet-baseline`）对 RGB-D 点云进行 6D 夹取姿态估计，并结合 YOLO 检测框筛选目标候选，用于更复杂物体的夹取调试。

3. **机械臂与夹爪驱动轻量封装**  
   主抓取脚本统一复用 `RebotArm` 接口，集成 IK、轨迹控制和夹爪状态机。

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
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>自由度</td>
      <td>6-DOF + 夹爪</td>
    </tr>
    <tr>
      <td>相机型号</td>
      <td>Orbbec Gemini 2</td>
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
      <td>24V DC</td>
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
| reBot Arm B601-DM 机械臂 | 1 | ✅ |
| 夹爪 | 1 | ✅ |
| USB2CAN 串口桥 | 1 | ✅ |
| 电源适配器（24V） | 1 | ✅ |
| USB-C / 通信线缆 | 1 | ✅ |
| Orbbec Gemini 2 深度相机 | 1 | ✅ |
| Gemini 2 摄像头连接件 / 安装支架 | 1 | ✅ |

### 接线说明

1. 将 Gemini 2 通过 USB 3.0 连接到主机。
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
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

如果 `pip install -e .` 报 `Multiple top-level packages discovered in a flat-layout`，请在 `reBotArm_control_py` 的 `pyproject.toml` 中加入显式包发现配置，然后重新执行 `pip install -e .`：

```toml
[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

B601 的 DM 与 RS 两种机械臂配置通过 SDK 仓库中的配置文件切换。B601-DM 请在 `sdk/reBotArm_control_py/config/rebotarm.yaml` 中确认：

```yaml
hardware_yaml: rebotarm_dm.yaml
```

视觉抓取程序会读取该 SDK 配置，并自动选择对应的机械臂控制模式与夹爪参数。

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

Orbbec Gemini2 深度相机依赖 `pyorbbecsdk`（Orbbec SDK v2 的 Python 版本）。优先推荐直接安装预编译 Python 包：

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

首次使用建议安装 udev 规则：

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

### 步骤 6. 验证依赖

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
python -c "import motorbridge; print('motorbridge OK')"
```

首次使用 Orbbec 相机时，建议在你安装的 `pyorbbecsdk` 目录内执行 `scripts/install_udev_rules.sh` 安装 udev 规则，否则可能无法正常打开设备。


## 手眼标定

第一次运行完整抓取前，先完成 Eye-in-Hand 手眼标定。

```bash
python scripts/collect_handeye_eih.py
```

自动模式下，机械臂会自动遍历 50 个预设位姿，检测到 ArUco 稳定后自动采样。正常结束或中途打断时，脚本都会尝试计算并保存标定结果；至少需要 5 个样本，建议 ≥15 个样本以获得更稳的结果。

如需手动推动机械臂采集，可使用：

```bash
python scripts/collect_handeye_eih.py --manual
```

手动模式下，机械臂会进入重力补偿状态。你可以将末端推到合适视角后按 `Enter` 采集，按 `c` 或 `q` 结束并计算结果。

标定结果保存到：

```text
config/calibration/orbbec_gemini2/hand_eye.npz
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
    depth_quantile: 0.6
    pregrasp_offset_m: 0.080
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

如果 `reBotArm_control_py` 不在默认位置，请在 `config/default.yaml` 中指定：

```yaml
robot:
  repo_root: null
```

默认保持 `null` 即可，程序会优先自动查找 `sdk/reBotArm_control_py`。

主程序执行流程：  
1. 初始化机械臂与夹爪
2. 移动到预备位，如果需要调整机械臂启动后的预备位置，请在 `config/default.yaml` 中修改：

```yaml
robot:
  ready_pose:
    x: 0.3
    y: 0.0
    z: 0.3
    roll: 0.0
    pitch: 1.0
    duration: 3.0
```

3. 实时检测桌面目标
4. 基于短轴估计抓取姿态
5. 按 `G` 采当前帧并执行抓取

运行时按键：  
- `G`：抓取当前最佳目标
- `R`：恢复实时预览
- `Q` / `Esc`：退出程序

### 4. GraspNet 相机估计 Demo（可选）

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

- [reBotArm_control_py](https://github.com/vectorBH6/reBotArm_control_py) — 机械臂控制库
- [reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm) — reBot 机械臂开源项目
- [Orbbec Gemini 2 产品页](https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [Orbbec SDK v2 API 文档](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/)
- [pyorbbecsdk 仓库](https://github.com/orbbec/pyorbbecsdk)
- [pyorbbecsdk 文档](https://orbbec.github.io/pyorbbecsdk/index.html)
- [Orbbec ROS2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Ultralytics YOLOv11](https://github.com/ultralytics/ultralytics)

---

## ☎ 联系我们

- **技术支持**：[提交 Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)

---

<p align="center">
  <strong>🌟 如果本项目对你有帮助，欢迎点个 Star！</strong>
</p>
