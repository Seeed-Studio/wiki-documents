---
description: 本教程介绍 reBot Arm B601-RS 的两种不同逻辑视觉夹取实现，包含 YOLO/OBB 抓取管线与另一种视觉抓取方案。
title: B601-RS 视觉夹取
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
  date: 2026-11-03
  author: YinHaizhou
translation:
  skip: [[zh-CN]]
createdAt: '2026-06-15'
updatedAt: '2026-11-03'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_grasping_demo/
---
import '/src/css/rebot-wiki-style.css';
import GraspingTabs from '@site/src/components/robotics/RebotGraspingTabs';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/components/robotics/rebot-grasping-demo.module.css';

# reBot Arm B601-RS 视觉夹取 Demo

<div className={styles.page}>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://detail.tmall.com/item.htm?id=1057521963559" target="_blank" rel="noopener noreferrer">
    <span>点击立即获取</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

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

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="reBot Arm B601-RS 视觉夹取 Demo" />
</p>

## 两种抓取方式有什么区别？

本页包含两种不同逻辑的视觉夹取 Demo。先了解开发框架、标定方式与启动流程的区别，再选择下方标签查看对应教程。

<div className={styles.comparison}>
  <section className={styles.methodCard} aria-label="方式 1：Python SDK">
    <span className={styles.methodNumber}>方式 01</span>
    <h3>Python SDK + YOLO / OBB</h3>
    <p>基于 YOLO、RGB-D 深度相机和 Python SDK，完成从环境安装、相机接入、手眼标定到抓取调试的完整流程。</p>
    <dl>
      <div><dt>抓取逻辑</dt><dd>利用检测框或 OBB 最小外接矩形估计抓取姿态；可选 GraspNet 6D 姿态估计。</dd></div>
      <div><dt>手眼标定</dt><dd>首次完整抓取前，使用 ArUco 标记完成 Eye-in-Hand 手眼标定。</dd></div>
      <div><dt>启动方式</dt><dd>运行 Python 脚本，逐步验证检测、姿态估计与机械臂抓取。</dd></div>
    </dl>
  </section>
  <section className={styles.methodCard} aria-label="方式 2：ROS 2">
    <span className={styles.methodNumber}>方式 02</span>
    <h3>ROS 2 + YOLOE</h3>
    <p>基于 ROS 2 与 YOLOE，通过多终端启动机械臂、Gemini 2 / D405 / D435i 相机和抓取节点，完成抓取与放置。</p>
    <dl>
      <div><dt>抓取逻辑</dt><dd>由视觉抓取节点完成目标检测、抓取与放置，通过文本类名指定抓取和放置目标。</dd></div>
      <div><dt>手眼标定</dt><dd>不需要标定板；安装和打印件公差造成的微小误差可通过偏移参数调整。</dd></div>
      <div><dt>启动方式</dt><dd>在多个终端分别启动机械臂、相机、抓取节点，再触发抓取放置。</dd></div>
    </dl>
  </section>
</div>

## 选择抓取方式

<p className={styles.selectionHint}>点击标签切换教程，按照所选方式完成安装与运行。</p>

<GraspingTabs>
<TabItem value="python-sdk" label="方式 1 · Python SDK / OBB">

## 一、视觉抓取方式1

这条路线使用 **Python SDK + RGB-D 相机 + YOLO / OBB** 完成抓取，不需要 ROS 2 工作空间。默认路线适合普通桌面物体；如需更复杂的 6D 抓取，可按需启用后面的 GraspNet 进阶模块。

### 1. 项目特点

1. **YOLO + OBB 直接估计抓取姿态**
   直接利用检测框或 OBB 最小外接矩形，使用短轴作为夹爪开合方向，避免复杂 3D 点云处理。
2. **GraspNet-Baseline 6D 夹取姿态估计（可选）**
   支持基于 GraspNet-Baseline（`graspnet/graspnet-baseline`）对 RGB-D 点云进行 6D 夹取姿态估计，并结合 YOLO 检测框筛选目标候选，用于更复杂物体的夹取调试。
3. **机械臂与夹爪驱动封装**
   主抓取脚本基于 `reBotArm_control_py` 的机械臂与末端控制器，并通过轻量抓取辅助完成夹爪开合、力控夹取与 TCP 位姿读取。
4. **开源 & 可扩展**
   所有代码开源，支持用户根据需求自定义控制算法和效果。

### 2. 规格参数

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
      <td>Orbbec Gemini 2 / D435i / D405</td>
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

### 3. 材料清单（BOM）


| 部件                     | 数量 | 是否包含 |
| ------------------------ | ---- | -------- |
| reBot Arm B601-RS 机械臂 | 1    | ✅       |
| 夹爪                     | 1    | ✅       |
| USB2CAN 串口桥           | 1    | ✅       |
| 电源适配器（48V）        | 1    | ✅       |
| USB-C / 通信线缆         | 1    | ✅       |
| RGB-D 深度相机           | 1    | ✅       |
| 摄像头连接件 / 安装支架  | 1    | ✅       |

#### 接线说明

1. 将深度相机通过 USB 3.0 连接到主机。
2. 将 USB2CAN 适配器连接到机械臂 CAN 总线。
3. 确认 48V 电源、相机和机械臂全部连接可靠。
4. 如遇权限问题，可执行：

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0
```

### 4. 环境要求


| 项目     | 要求          |
| -------- | ------------- |
| 操作系统 | Ubuntu 22.04+ |
| Python   | 3.10          |

### 5. 安装基础环境

按以下顺序完成基础安装。步骤 0–3 是默认路线必做内容；步骤 4 按实际相机选择。GraspNet 的安装与运行单独放在后面的进阶模块中。

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">0</span>
<div className="rebot-step-content">

#### 步骤 0. 先完成机械臂基础准备

开始本教程前，请先完成 [reBot Arm B601-RS 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/) 中的内容，包括机械臂组装、零点初始化、电机 ID 配置与基础连通性确认。

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### 步骤 1. 克隆仓库

优先使用 Seeed-Projects 官方仓库：

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### 步骤 2. 创建环境并按硬件选择 PyTorch

本步骤分为三个阶段：创建基础环境、按硬件安装 PyTorch、安装项目依赖。请按顺序完成。

<div className="rebot-step-flow rebot-step-flow--substeps">
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2.1</span>
<div className="rebot-step-content">

##### 创建基础环境

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

:::note 预期结果
终端提示符前出现 `rebotarm`，表示当前已激活该环境。此时还没有安装 PyTorch，请继续完成下面两个阶段。
:::

如果使用其他环境名，请同时修改上面两条命令中的 `rebotarm`。已有环境可在激活后执行 `conda env update -n rebotarm -f environment.yml` 更新基础依赖；该命令不会移除已有的 pip 包。

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2.2</span>
<div className="rebot-step-content">

##### 按硬件安装 PyTorch

下面两个标签使用相同的配套版本，仅下载源不同。当前版本文件使用 PyTorch 2.9.1、torchvision 0.24.1 和 torchaudio 2.9.1，适用于本教程的 Python 3.10、Ubuntu x86_64 环境。

<Tabs groupId="rebot-pytorch-backend" defaultValue="cpu">
<TabItem value="cpu" label="CPU（无 NVIDIA 显卡）">

适用于 Intel / AMD 核显电脑，或希望先使用 CPU 验证的用户。

```bash
python -m pip install -r requirements-pytorch.txt --index-url https://download.pytorch.org/whl/cpu
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA available:', torch.cuda.is_available())"
```

:::note 预期结果
PyTorch 路径位于当前 Conda 环境中，`CUDA available: False` 属于正常结果。
:::

在 `config/default.yaml` 中保持以下设置：

```yaml
yolo:
  device: "cpu"
```

:::tip 适用范围
CPU 可以运行基础 YOLO / OBB 流程，推理速度取决于模型和电脑性能。本项目 GraspNet 的 CUDA 算子需要 NVIDIA 显卡，请跳过后面的 GraspNet 进阶模块。
:::

</TabItem>
<TabItem value="nvidia" label="NVIDIA 显卡（CUDA）">

先确认驱动能够识别显卡，再安装 CUDA 版 PyTorch。以下以 CUDA 12.8 构建为例，需要显卡架构和驱动同时支持：

```bash
nvidia-smi
python -m pip install -r requirements-pytorch.txt --index-url https://download.pytorch.org/whl/cu128
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA build:', torch.version.cuda); print('CUDA available:', torch.cuda.is_available())"
```

:::note 预期结果
`nvidia-smi` 能列出显卡，PyTorch 路径位于当前 Conda 环境中，`CUDA available: True`。确认后，在 `config/default.yaml` 中使用第 0 块 GPU：

```yaml
yolo:
  device: "0"
```
:::

:::tip 选择 CUDA 构建
请对照 [PyTorch 官方版本列表](https://pytorch.org/get-started/previous-versions/)，选择支持当前 GPU、驱动和 Python 版本的构建，不要仅根据显卡系列或 `nvidia-smi` 显示的 CUDA 数字选择。

如果需要更换 PyTorch 版本，请同步修改 `requirements-pytorch.txt` 中三个配套版本及下载源。普通 YOLO 推理使用预编译 wheel，无需单独安装 CUDA Toolkit；只有编译 GraspNet 扩展时才需要匹配的 CUDA 编译器。
:::

如果 CUDA 不可用，请先检查驱动、显卡架构和所选 wheel，或使用 CPU 标签中的安装方式完成基础验证。

</TabItem>
</Tabs>


</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2.3</span>
<div className="rebot-step-content">

##### 安装项目依赖并验证

完成任一硬件路线后，在项目根目录执行：

```bash
python -m pip install -r requirements.txt -c requirements-pytorch.txt
python -m pip check
python -c "import torch, torchvision, torchaudio, cv2; from ultralytics import YOLO; from calibration.aruco_pose import ArUcoDetector; ArUcoDetector(); print('Vision dependencies OK:', cv2.__version__)"
```

:::note 预期结果
`pip check` 输出 `No broken requirements found.`，验证命令输出 `Vision dependencies OK`，且没有导入错误。全部通过后，再继续安装机械臂和相机 SDK。
:::

:::tip 安装失败时
`-c requirements-pytorch.txt` 用于约束 PyTorch 配套版本。请保留该参数，不要添加 `--upgrade`。如果 pip 失败，请检查末尾错误并重试对应阶段；能够激活 Conda 环境并不代表所有依赖都安装完成。

OpenCV 只安装 `requirements.txt` 中指定的标准包，项目使用的 ArUco 接口在 4.7 中可用，请勿同时安装其他 OpenCV wheel。CLIP 从 Ultralytics 的 Git 仓库安装，需要系统中有 Git；首次加载 YOLOE 时还可能下载模型权重。
:::

</div>
</section>
</div>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### 步骤 3. 安装机械臂 SDK

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

如果 pip install -e . 报 Multiple top-level packages discovered in a flat-layout，请在 reBotArm_control_py 的 pyproject.toml 中加入显式包发现配置，然后重新执行 pip install -e .：

```bash
[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

B601 的 DM 与 RS 两种机械臂配置通过 SDK 仓库中的配置文件切换。B601-RS 请在 `sdk/reBotArm_control_py/config/rebotarm.yaml` 中确认：

```yaml
hardware_yaml: rebotarm_rs.yaml
```

视觉抓取程序会读取该 SDK 配置，并自动选择对应的机械臂控制模式与夹爪参数。

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### 步骤 4. 安装深度相机 SDK

本项目支持 Orbbec Gemini 2 与 RealSense D435i / D405 等 RGB-D 深度相机。请根据实际使用的相机安装对应 SDK；如果当前环境已经能正常导入相机驱动，可跳过本步骤。

<Tabs groupId="rebot-depth-camera" defaultValue="orbbec">
<TabItem value="orbbec" label="Orbbec Gemini 2">

Orbbec Gemini 2 深度相机依赖 `pyorbbecsdk`（Orbbec SDK v2 的 Python 版本）。优先推荐直接安装预编译 Python 包：

在 Linux / Ubuntu 上，无论选择哪种安装方式，首次使用相机时都建议配置 udev 规则，让普通用户能够访问 USB 设备。规则安装在系统目录，每台机器只需配置一次；如果已经配置过，可跳过对应命令。

<Tabs defaultValue="pip">
<TabItem value="pip" label="方式一：通过 pip 安装（推荐）">

```bash
pip install pyorbbecsdk2
```

**配置 udev 规则（Linux / Ubuntu）**

`pyorbbecsdk2` 2.1.0 及以上版本提供环境配置脚本。保持当前 conda 环境激活，运行包内脚本；脚本会请求 sudo 权限，并自动安装、重新加载 udev 规则：

```bash
orbbec_sdk_dir="$(python -c 'import os, pyorbbecsdk; print(os.path.dirname(pyorbbecsdk.__file__))')"
python "$orbbec_sdk_dir/shared/setup_env.py"
```

如果提示找不到 `shared/setup_env.py`，请先运行 `pip install --upgrade "pyorbbecsdk2>=2.1.0"`，再重新执行上述命令。详情见 [Orbbec 官方安装文档](https://orbbec.github.io/pyorbbecsdk/source/2_installation/install_the_package.html)。

</TabItem>
<TabItem value="github" label="方式二：从 GitHub 获取">

保持 `rebotarm` 环境激活，先安装编译依赖，再编译 Python 扩展：

```bash
sudo apt-get update
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev python3-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
git checkout v2-main
python -m pip install pybind11
mkdir -p build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release \
  -DPython3_EXECUTABLE="$(python -c 'import sys; print(sys.executable)')" \
  -Dpybind11_DIR="$(python -m pybind11 --cmakedir)"
cmake --build . --parallel "$(nproc)"
cmake --install .
cd ..
```

对于中国大陆用户，可以将上面的 GitHub 克隆命令替换为：

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

编译完成后，确认 `install/lib` 中已有 `pyorbbecsdk*.so` 和 Orbbec 动态库（新版位于 `install/lib/pyorbbecsdk/`），再安装 Python 包。CMake 与 conda 环境配置可参考 [Orbbec 官方源码编译文档](https://orbbec.github.io/pyorbbecsdk/source/2_installation/build_the_package.html)。

```bash
pip install -e .
```

**配置 udev 规则（Linux / Ubuntu）**

在克隆的 `pyorbbecsdk` 仓库根目录下运行以下命令。新版仓库使用环境配置脚本，旧版仓库使用 `install_udev_rules.sh`：

```bash
if [ -f scripts/env_setup/setup_env.py ]; then
  python scripts/env_setup/setup_env.py
else
  sudo bash scripts/install_udev_rules.sh
  sudo udevadm control --reload-rules
  sudo udevadm trigger
fi
```

完成后返回项目根目录，继续后面的验证与运行步骤：

```bash
cd ../..
```

</TabItem>
</Tabs>

注意，如果上述安装过程中均发生错误导致安装失败，请参考下方 Orbbec 官方文档进行安装操作。

**验证安装**

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

</TabItem>
<TabItem value="realsense" label="RealSense D435i / D405">

RealSense 相机依赖 `pyrealsense2`。通常可以直接通过 pip 安装：

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

如果系统需要完整的 RealSense 工具链或 udev 规则，请参考 [librealsense 官方文档](https://github.com/realsenseai/librealsense)。

:::warning 必须使用 USB 3.x 接口
D405 / D435i 必须插在 USB 3.0/3.2 口（通常为蓝色）。如果插在 USB 2.0 口，典型症状是：**设备能被系统识别、`pipeline.start()` 也能成功，但永远收不到帧**（报 `Frame didn't arrive within ...`）。用下面命令确认相机 negotiated 的速率：

```bash
lsusb -t   # 相机一行应显示 5000M；若显示 480M 说明落在了 USB 2.0 口，请换口
```
:::

</TabItem>
</Tabs>

:::note 预期结果
对应验证命令输出 `pyorbbecsdk OK` 或 `pyrealsense2 OK`，且没有 `ModuleNotFoundError`。
:::

**SDK 资料汇总**


| 资料             | 链接                                                                 |
| ---------------- | -------------------------------------------------------------------- |
| Gemini 2 产品页  | https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51      |
| 开发资料总链接   | https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1 |
| Orbbec SDK v2    | https://github.com/orbbec/OrbbecSDK_v2                               |
| SDK v2 API 文档  | https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/            |
| pyorbbecsdk      | https://github.com/orbbec/pyorbbecsdk                                |
| pyorbbecsdk 文档 | https://orbbec.github.io/pyorbbecsdk/index.html                      |
| ROS2 Wrapper     | https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main                |
| RealSense SDK    | https://github.com/realsenseai/librealsense                          |

</div>
</section>
</div>

### 6. 目录结构

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
│   ├── pyorbbecsdk/              # Orbbec SDK Python 封装（源码安装时）
│   └── reBotArm_control_py/      # reBot Arm SDK
├── requirements-pytorch.txt      # 按 CPU / CUDA 下载源安装的配套版本
├── requirements.txt              # PyTorch 安装后的项目依赖
└── environment.yml               # 基础 Conda 环境
```

### 7. 手眼标定

第一次运行完整抓取前，先完成 Eye-in-Hand 手眼标定。

运行标定程序前，请先启动并确认 CAN 接口：

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

开始前，请先在 `config/default.yaml` 中确认以下 ArUco 尺寸参数与你实际打印的标记一致：

```yaml
calibration:
  aruco:
    marker_length_m: 0.1
```

确认配置后运行自动标定：

```bash
python scripts/collect_handeye_eih.py
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

### 8. 运行与调试

建议按以下顺序验证：前两个场景不连接机械臂，先检查相机、目标检测与抓取估计；后两个场景会连接并控制机械臂。

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### 1. 仅验证目标检测

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

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### 2. 仅验证抓取估计

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

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### 3. 执行主抓取程序

```bash
python scripts/main.py
```

如果想先验证目标位姿并跳过抓取动作：

```bash
python scripts/main.py --dry-run
```

建议先通过 `--dry-run` 验证位姿和工作空间，再执行真实抓取。当前脚本在此模式下仍会初始化机械臂、移动到预备位，并在退出时执行清理与回零；仅验证视觉时，请使用前两个不连接机械臂的脚本。

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

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### 4. `scripts/set.py` — 抓取与放置程序

功能效果：将香蕉抓取并放置到盒子里面

```bash
python scripts/set.py
```

完成流程：

1. 相机与机械臂初始化，移动到预备点位
2. 实时相机预览 + YOLO 目标检测与实例分割
3. 按 `G` 冻结帧，经手眼变换计算机械臂目标位姿
4. 机械臂移动抓取香蕉并抬高
5. 机械臂将香蕉放置在盒子内，并回归初始姿态
6. 按 `Q` 退出系统，机械臂回归零点

</div>
</section>
</div>

### 9. GraspNet 进阶模块（可选）

默认的 Python SDK / OBB 路线不需要 GraspNet。只有需要基于 RGB-D 点云估计 6D 夹取姿态时，才按下面步骤安装依赖并运行对应 Demo。

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### 步骤 1. 安装 GraspNet 与 CUDA 算子

如果只运行 `scripts/main.py` 或 `scripts/ordinary_grasp_pipeline.py`，不需要配置 GraspNet。只有在运行 `scripts/graspnet_camera_demo.py` 或 `scripts/grasp.py` 时，才需要准备 GraspNet、CUDA 版 PyTorch、PointNet2/knn CUDA 算子和预训练权重。

GraspNet 的 `pointnet2` / `knn` 扩展需要 CUDA 编译器。开始前先确认当前环境可以找到 `nvcc`，并检查 `nvcc` 的 CUDA 版本是否和 PyTorch 编译时使用的 CUDA 版本一致：

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

基础安装的步骤 2 已将 PyTorch 独立安装。GraspNet 需要 NVIDIA 显卡和可用的 CUDA；采用 CPU 路线时请跳过本节。先完成以下检查，再配置编译器。

**第 1 步：确认显卡**

```bash
nvidia-smi
```

需要驱动能够识别 NVIDIA 显卡；仅安装 CUDA Toolkit 不能让 Intel / AMD 核显运行本项目的 CUDA 算子。

**第 2 步：确认 PyTorch CUDA 可用**

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())"
```

如果 `torch.cuda.is_available()` 输出 `True`，继续下一步。如果 PyTorch 未安装、`torch.version.cuda` 为 `None`，或 CUDA 不可用，请回到基础安装步骤 2，按 NVIDIA 路线完成安装和验证。切换 CPU / CUDA 构建时，也请按该步骤先移除旧构建，再重新安装。

**第 3 步：安装与 PyTorch 匹配的 CUDA 编译器**

`pointnet2` / `knn` 是本地 CUDA 扩展，编译时 `nvcc --version` 显示的 CUDA 版本必须与 `torch.version.cuda` 一致，否则会报 `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)`。先查看两个版本：

```bash
nvcc --version
python -c "import torch; print(torch.version.cuda)"
```

以 `torch.version.cuda` 显示 `12.8` 为例，在 conda 环境中安装匹配的编译器：

```bash
conda install -c nvidia cuda-nvcc=12.8 cuda-cudart-dev=12.8

which nvcc       # 应指向 $CONDA_PREFIX/bin/nvcc，而不是 /usr/bin/nvcc
nvcc --version   # 应与 torch.version.cuda 一致
```

`cuda-nvcc` 提供编译器，`cuda-cudart-dev` 提供 `targets/x86_64-linux/include` 下的 CUDA 头文件，两者都需要。conda 环境激活后 `$CONDA_PREFIX/bin` 位于 `PATH` 最前，会自动遮蔽系统自带的旧版 `nvcc`（例如 Ubuntu 仓库安装的 CUDA 11.5），无需卸载系统 CUDA。

:::warning
不建议用降级 PyTorch 的方式去迁就系统旧 `nvcc`：旧 CUDA 不一定支持你的显卡算力（CUDA 11.5 最高只支持 sm_86；RTX 40 系需要 CUDA 11.8+，RTX 50 系需要 CUDA 12.8+），且旧版 PyTorch 与本项目其他依赖（如新版 ultralytics）可能不兼容。
:::

**第 4 步：验证**

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())"
nvcc --version
```

两者 CUDA 版本一致、且 `torch.cuda.is_available()` 输出 `True`，即完成 PyTorch 配置，可以继续编译 CUDA 算子。

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# 按你的 CUDA 版本安装 PyTorch 后，再安装 GraspNet 运行依赖
pip install open3d tensorboard Pillow tqdm

# 编译本地算子前配置 CUDA 编译路径。
# 注意：头文件/库路径请用 conda cuda-toolkit 的 targets 目录，
# 不要混用 pip 版 nvidia/cu13 目录（版本与 conda nvcc 不一致会导致编译报错）。
export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="$(python -c 'import torch; major, minor = torch.cuda.get_device_capability(); print(f"{major}.{minor}")')"
export CPATH=$CONDA_PREFIX/targets/x86_64-linux/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/targets/x86_64-linux/include:$CPLUS_INCLUDE_PATH
export LIBRARY_PATH=$CONDA_PREFIX/targets/x86_64-linux/lib:$CONDA_PREFIX/lib:$LIBRARY_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/targets/x86_64-linux/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

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
如果编译时报 `fatal error: cusparse.h: No such file or directory`，先运行 `find $CONDA_PREFIX -name cusparse.h`，并把包含 `cusparse.h` 的目录加入 `CPATH` / `CPLUS_INCLUDE_PATH`（conda `cuda-toolkit` 下通常是 `$CONDA_PREFIX/targets/x86_64-linux/include`）。如果报 `'__NV_IS_DEVICE' was not declared in this scope` 等头文件相关的编译错误，通常是 pip 版 `nvidia/cu13` 头文件与 conda `nvcc` 版本不一致导致的，请改用上面的 conda `targets` 路径后重新编译。
:::

:::tip
此外，GraspNet API 的依赖中可能仍使用 `sklearn` 包名。上面的 `sed` 命令会将 `sklearn` 替换为 `scikit-learn`，避免安装时出现包名提示。除非同步调整 GraspNet API 的依赖栈，否则建议保留其 `numpy==1.23.4` 约束，因为 `transforms3d==0.3.1` 仍使用 `np.float` 等 NumPy 别名。
:::

**配置预训练模型**

在graspnet-baseline 官方仓库下载 GraspNet 官方预训练权重[Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view)、[Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A)，将 下载好的`checkpoint-rs.tar` 放到：

```bash
mkdir -p ~/rebot_grasp/sdk/graspnet-baseline/checkpoints

sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

然后在 `config/default.yaml` 中确认：

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

`checkpoint` 支持三种写法：仅文件名会自动从 `sdk/graspnet-baseline/checkpoints/` 查找；相对路径会按项目根目录解析；绝对路径会直接使用。

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### 步骤 2. 运行 GraspNet 相机估计 Demo

```bash
python scripts/graspnet_camera_demo.py
```

该脚本不连接机械臂，仅使用 RGB-D 相机运行 GraspNet 6D 夹取姿态估计。脚本会保留实时相机预览，并使用 YOLO 检测框选择目标区域，再从 GraspNet 全场景候选中筛选目标 bbox 内的可行夹取。

按键说明：

- `G` / `Space`：对当前帧运行 GraspNet 推理
- `R`：恢复实时预览
- `Q` / `Esc`：退出

推理后可通过 Open3D 查看点云与夹取候选。

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### 步骤 3. 运行 GraspNet 机械臂抓取程序

```bash
python scripts/grasp.py
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

该脚本基于 GraspNet 估计结果接入机械臂执行流程：YOLO 选择目标，GraspNet 输出 6D 夹取姿态，经手眼标定转换到机械臂基坐标系，再检查 IK 可达性并执行预夹取、夹取、退回动作。

运行 `python scripts/grasp.py` 将运行完整 GraspNet 机械臂抓取流程，会实际控制机械臂运动。`--dry-run` 打印目标位姿和候选筛选结果，并跳过抓取动作；当前脚本仍会初始化机械臂、移动到预备位，并在退出时执行清理与回零。`--target-class "light blue coffee cup"` 可以指定 YOLO 目标类别，只对该类别对应目标进行 GraspNet 候选筛选与抓取。

</div>
</section>
</div>

### 10. 常见问题

<h4>1. <code>ModuleNotFoundError: No module named 'motorbridge'</code></h4>

表示当前 Python 环境还没有安装机械臂 SDK 依赖。`conda env update` 只更新基础环境，项目依赖需要单独安装。请在项目根目录执行：

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
# 先按基础安装步骤 2 完成 PyTorch 安装，再补齐项目依赖。
python -m pip install -r requirements.txt -c requirements-pytorch.txt
cd sdk/reBotArm_control_py && python -m pip install -e .
```

<h4>2. 按 <code>G</code> 后不执行抓取</h4>

常见原因：

- `hand_eye.npz` 不存在
- 手眼标定模式不是 `eye_in_hand`
- 当前目标位姿 IK 不可达

建议先运行：

```bash
python scripts/main.py --dry-run
```

<h4>3. 抓取点深度不稳定</h4>

可以适当调整：

- `grasp_pipeline.grasp.depth_quantile`
- 相机与目标的安装高度
- 目标表面的反光情况

<h4>4. GraspNet 报 <code>pointnet2_utils</code> 无法从 <code>pointnet2</code> 导入</h4>

这通常是 `sdk/graspnet-baseline/pointnet2` 本地 CUDA 扩展没有在当前 conda 环境中正确编译安装，或 Python 路径解析到了错误的 `pointnet2` 包。建议确认已激活项目环境，并在同一个环境中重新编译安装 `pointnet2` 与 `knn`：

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

验证（`pointnet2_utils` / `knn_modules` 是以顶层模块方式从源码目录导入的，这也是 `models/` 里的导入方式；运行抓取脚本时会自动把源码目录加入 `sys.path`）：

```bash
cd sdk/graspnet-baseline
python -c "import sys; sys.path[:0]=['pointnet2','knn']; import pointnet2_utils, knn_modules; print('import works')"
```

<h4>5. 针对新显卡运行 GraspNet 时出现 CUDA 架构不兼容</h4>

如果出现 `no kernel image is available for execution on the device` 或 PyTorch 提示当前 GPU 的 CUDA capability 不受支持，通常说明当前 PyTorch wheel 不包含该显卡架构对应的 CUDA kernel。建议安装支持当前 CUDA/显卡架构的 PyTorch 版本，然后重新编译 GraspNet 的本地 CUDA 扩展。

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

如需手动指定编译架构，可在重新编译前设置 `TORCH_CUDA_ARCH_LIST`，具体取值请按当前显卡架构和 PyTorch/CUDA 版本确认。

<h4>6. GraspNet 推理时报 <code>RuntimeError: CPU not supported</code></h4>

`pointnet2` 中的采样算子只支持 CUDA tensor。请确认 CUDA 可用、GraspNet 网络和输入点云都在 GPU 上，并且 `pointnet2` / `knn` 是在当前环境和当前 PyTorch 版本下编译的。

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

如果输出为 `False`，需要先修复 CUDA / PyTorch 安装；如果输出为 `True` 但仍报错，建议重新编译 `pointnet2` 和 `knn`。

</TabItem>
<TabItem value="ros2-yoloe" label="方式 2 · ROS 2 / YOLOE">

## 二、视觉抓取方式2

### 1. 项目介绍

本方案基于 **ROS 2** 与 **YOLOE**，在 reBot Arm B601-RS 上完成目标检测、抓取与放置。系统通过多终端分别启动机械臂、深度相机和抓取节点。

当前深度相机支持 **Orbbec Gemini 2** 与 **RealSense D405 / D435i**。本方案使用模型中预设的相机安装外参，不要求通过标定板采集手眼标定数据。请使用对应相机的指定支架和安装位置；安装和打印件公差会带来误差，需要先检查 TF 和目标位姿，再微调偏移参数。

### 2. 环境安装

本方案使用 Ubuntu 22.04、ROS 2 Humble、系统 Python 3.10 和独立的 Conda `yolo` 环境。先用系统环境准备机械臂、相机驱动和视觉抓取包，统一编译后，再创建用于 YOLOE 推理的 Conda 环境。

步骤 1–4 请在未激活 Conda、未加载旧工作空间的新终端中执行；只加载系统 ROS。终端 A、B、D、E 也使用系统环境，只有终端 C 使用 `yolo` 环境。不要将 Python SDK / OBB 路线的环境文件和安装命令混入本路线。

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### 步骤 1. 安装机械臂 ROS 2 工程

请先按 [reBot Arm B601-RS ROS2 集成](https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_ros2_integration/) 完成机械臂基础准备、ROS 2 Humble、构建工具、机械臂工作空间和底层 SDK 的安装，并确认机械臂工程能编译。本文继续使用同一个 `~/rebotarm_ros2` 工作空间。

```bash
source /opt/ros/humble/setup.bash
echo "$ROS_DISTRO"
sudo apt update
sudo apt install -y python3-rosdep python3-colcon-common-extensions git wget cmake build-essential
```

预期 `ROS_DISTRO` 输出 `humble`。如果工作空间已包含下面要克隆的仓库，请检查其分支和内容，不要在同一路径重复执行 `git clone`。

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### 步骤 2. 安装相机

按实际使用的相机选择下面其中一套，点击展开对应安装步骤即可。

<details className="content-details">
<summary>点击展开 Gemini 2 安装步骤</summary>

将 Orbbec ROS 2 SDK 克隆到工作空间，并切换到 `v2-main` 分支：

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

按驱动仓库说明安装原生依赖，ROS 依赖在步骤 3 中统一安装：

```bash
sudo apt install -y libgflags-dev nlohmann-json3-dev libgoogle-glog-dev libdw-dev libssl-dev mesa-utils libgl1 \
  ros-humble-image-transport-plugins ros-humble-compressed-image-transport
```

安装 udev 规则：

```bash
cd ~/rebotarm_ros2/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

</details>

<details className="content-details">
<summary>点击展开 D405、D435i 安装步骤</summary>

1. 安装源码编译依赖，再克隆 RealSense SDK，并切换到 `v2.58.1`：

```bash
sudo apt update
sudo apt install -y cmake build-essential git pkg-config libusb-1.0-0-dev libudev-dev libssl-dev v4l-utils
```

```bash
cd ~
git clone https://github.com/realsenseai/librealsense.git
cd librealsense
git checkout v2.58.1
```

2. 安装 udev 规则：

```bash
cd ~/librealsense
./scripts/setup_udev_rules.sh
```

3. 编译并安装 SDK：

下面使用 RSUSB 后端，避免额外修补内核 UVC 模块。关闭示例和 GLSL 扩展，通过 `BUILD_TOOLS=ON` 保留 `rs-enumerate-devices` 等命令行工具。`realsense-viewer` 属于图形示例。

```bash
cd ~/librealsense &&
mkdir -p build && cd build &&
cmake .. -DCMAKE_BUILD_TYPE=Release \
  -DFORCE_RSUSB_BACKEND=ON \
  -DBUILD_EXAMPLES=OFF \
  -DBUILD_TOOLS=ON \
  -DBUILD_GRAPHICAL_EXAMPLES=OFF \
  -DBUILD_GLSL_EXTENSIONS=OFF &&
cmake --build . --parallel 2 &&
sudo cmake --install . &&
sudo ldconfig
```

:::tip CMake 提示找不到 `OpenGL::GL`
在 librealsense `v2.58.1` 中，仅关闭 `BUILD_GRAPHICAL_EXAMPLES` 时，普通示例仍会链接 `OpenGL::GL`，导致 CMake 生成构建文件失败。如果曾使用 `BUILD_EXAMPLES=ON` 遇到此错误，直接重跑上面的命令。CMake 会更新现有 `build` 目录中的选项。
:::

4. 克隆 RealSense ROS 2 驱动：

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/realsense-ros.git
```

相机驱动的 ROS 依赖和工作空间编译分别在步骤 3、步骤 4 中完成，此处无需提前编译。重新插拔相机后，用 `lsusb -t` 确认它连接到 USB 3.x，通常应显示 `5000M` 或更高速度。

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### 步骤 3. 导入视觉抓取包并安装 ROS 依赖

```bash
cd ~/rebotarm_ros2/src/
git clone https://github.com/xiehuangbao888/rebot_visual_grasp.git
```

首次使用 `rosdep` 时先初始化；如果提示 `default sources list file already exists`，跳过初始化，继续更新索引：

```bash
sudo rosdep init
```

```bash
rosdep update
cd ~/rebotarm_ros2
rosdep install --from-paths src --ignore-src -r -y --rosdistro humble --skip-keys="librealsense2 orbbec_description realsense2_description"
```

本命令按已克隆的全部 ROS 包声明安装系统依赖，包括 `diagnostic_updater`、`cv_bridge`、`xacro` 等。`librealsense2` 在 RealSense 分支中已从源码安装；另外两个键是相机描述包，所选相机的描述包由步骤 2 的源码提供，另一种相机的描述包无需安装。因此跳过这些键，避免重复安装 SDK 或被未选相机的依赖阻塞。

预期输出 `All required rosdeps installed successfully`。如果仍有依赖错误，请先解决再编译；不要把忽略错误后部分安装完成当作成功。

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### 步骤 4. 编译工作空间

本教程统一使用 `--symlink-install`，安装相机驱动和视觉抓取包时也请保持相同的构建方式。

:::tip 旧构建目录冲突
如果此前使用未带 `--symlink-install` 的命令编译过，切换后可能出现 `failed to create symbolic link`，并提示 `existing path cannot be removed: Is a directory`。这是旧构建生成的普通目录与符号链接冲突，需要清理后重新编译。

打开未激活 conda 环境、未加载当前工作空间 `install/setup.bash` 的新终端，执行：

```bash
cd ~/rebotarm_ros2
rm -rf build install log
```

这只会删除当前工作空间的构建、安装和日志目录，保留 `src` 和其他源码。清理后按所选相机的命令完整重新编译。
:::

```bash
cd ~/rebotarm_ros2
source /opt/ros/humble/setup.bash
```

<Tabs groupId="rebot-ros2-camera-build" defaultValue="realsense">
<TabItem value="realsense" label="RealSense D405 / D435i">

```bash
colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release -DUSE_LIFECYCLE_NODE=OFF
```

</TabItem>
<TabItem value="orbbec" label="Orbbec Gemini 2">

```bash
colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release
```

</TabItem>
</Tabs>

仅在编译成功后加载工作空间，并检查视觉抓取包：

```bash
source ~/rebotarm_ros2/install/setup.bash
ros2 pkg prefix rebot_visual_grasp
```

RealSense 用户再执行 `ros2 pkg prefix realsense2_camera`；Gemini 2 用户执行 `ros2 pkg prefix orbbec_camera`。预期输出当前工作空间中对应包的安装路径。

**确认编译结果**

编译完成后，查看末尾的 `Summary`。如果所有包均显示 `Finished`，且没有 `Failed` 或 `Aborted`，表示本次编译成功。例如，包含 RealSense 驱动和视觉抓取包的工作空间可能输出：

```text
Summary: 11 packages finished [33.8s]
  4 packages had stderr output: realsense2_camera_msgs realsense2_description rebotarm_moveit_config rebotarm_msgs
```

包的数量和耗时会因工作空间内容及电脑性能而不同。`packages had stderr output` 只表示这些包向标准错误流输出了内容，需要结合具体日志判断；上例中如果内容仅为下面说明的 CMake 警告，则不影响编译成功。

:::tip 清理后的路径警告与 CMake 警告
如果先前已加载当前工作空间的 `install/setup.bash`，删除 `install` 后继续在同一终端编译，可能出现 `AMENT_PREFIX_PATH` 或 `CMAKE_PREFIX_PATH` 中的路径不存在的警告。这表示终端环境仍保留旧安装路径。如果最终所有包均编译成功，无需再次删除构建目录；编译完成后重新加载上面的 `install/setup.bash`，再继续运行。

后续重新编译时，建议使用未加载当前工作空间的新终端，仅先加载 `/opt/ros/humble/setup.bash`。如果 `~/.bashrc` 中配置了自动加载当前工作空间，请在清理后重新编译前暂时停用该配置。

使用 `--cmake-args -DUSE_LIFECYCLE_NODE=OFF` 时，部分包可能提示 `Manually-specified variables were not used by the project: USE_LIFECYCLE_NODE`。这是因为该参数仅用于相关驱动，其他包未使用它，属于 CMake 警告，不代表编译失败。
:::

到此，ROS 工作空间编译完成。接下来按步骤 5 创建 Conda 推理环境。之后每个新终端在运行 ROS 命令前，都需要先加载：

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
```

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">5</span>
<div className="rebot-step-content">

#### 步骤 5. 安装 YOLO / YOLOE 环境

`grasp_yolo` 在 Python 中调用 Ultralytics YOLOE。请使用独立 conda 环境，不要使用系统 `/usr/bin/python3`。

本步骤适用于 Ubuntu 22.04、ROS 2 Humble、Python 3.10 和 x86_64 主机。按顺序创建环境、选择 PyTorch 后端，再安装视觉和 ROS Python 运行依赖。系统通过 apt 安装的 Python 依赖不一定在 Conda 环境中可用，需要分别检查。

<div className="rebot-step-flow rebot-step-flow--substeps">
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5.1</span>
<div className="rebot-step-content">

##### 创建基础环境

```bash
conda create -n yolo python=3.10
conda activate yolo
python -c "import sys; print(sys.executable)"
```

:::note 预期结果
Python 路径位于当前 Conda 的 `envs/yolo/bin/python` 中。已有 `yolo` 环境时，直接激活即可；此时还需完成下面的 PyTorch 和项目依赖安装。
:::

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5.2</span>
<div className="rebot-step-content">

##### 按硬件安装 PyTorch

下面两个标签使用 PyTorch `2.9.1`、torchvision `0.24.1` 和 torchaudio `2.9.1`，仅下载源不同。请在当前 `yolo` 环境中选择一种后端安装。

<Tabs groupId="rebot-ros2-pytorch-backend" defaultValue="cpu">
<TabItem value="cpu" label="CPU（无 NVIDIA 显卡）">

适用于 Intel / AMD 核显电脑，或希望先使用 CPU 验证的用户。

```bash
python -m pip install torch==2.9.1 torchvision==0.24.1 torchaudio==2.9.1 --index-url https://download.pytorch.org/whl/cpu
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA available:', torch.cuda.is_available()); print(torch.rand(2, 3))"
```

:::note 预期结果
PyTorch 路径位于当前 Conda 环境中，随机张量正常输出。`CUDA available: False` 属于正常结果，无需为此安装 CUDA。后续启动 `grasp_yolo` 时设置 `-p yolo_device:=cpu`；CPU 推理帧率取决于模型和电脑性能。
:::

</TabItem>
<TabItem value="nvidia" label="NVIDIA 显卡（CUDA）">

先确认驱动能够识别 NVIDIA 显卡，再安装 CUDA 版 PyTorch。下面以 CUDA 12.8 构建为例，需要显卡架构和驱动同时支持：

```bash
nvidia-smi
python -m pip install torch==2.9.1 torchvision==0.24.1 torchaudio==2.9.1 --index-url https://download.pytorch.org/whl/cu128
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA build:', torch.version.cuda); print('CUDA available:', torch.cuda.is_available()); print(torch.rand(2, 3, device='cuda'))"
```

:::note 预期结果
`nvidia-smi` 能列出显卡，PyTorch 路径位于当前 Conda 环境中，`CUDA available: True`，且 CUDA 张量正常输出。后续启动 `grasp_yolo` 时可使用 `-p yolo_device:=0` 指定第 0 块 GPU。
:::

:::tip 选择 CUDA 构建
请对照 [PyTorch 官方版本列表](https://pytorch.org/get-started/previous-versions/)，选择支持当前 GPU、驱动和 Python 版本的构建，不要仅根据 `nvidia-smi` 显示的 CUDA 数字选择。普通 YOLOE 推理使用预编译 wheel，无需另外安装 CUDA Toolkit。

如果 CUDA 不可用，请先检查驱动、显卡架构和所选 wheel，或切换到 CPU 标签完成基础验证。更换 PyTorch 版本时，需要同步调整 torchvision、torchaudio 和下一阶段安装命令中的配套版本。
:::

</TabItem>
</Tabs>


</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5.3</span>
<div className="rebot-step-content">

##### 安装项目依赖并验证

完成任一后端安装后，保持 `yolo` 环境激活，安装视觉依赖和 Conda 环境中的 Python 运行依赖。命令保留 PyTorch 配套版本，并一起解析 NumPy 与 OpenCV 的版本约束：

```bash
python -m pip install "ultralytics==8.4.202" "torch==2.9.1" "torchvision==0.24.1" "torchaudio==2.9.1" "numpy==1.26.4" "opencv-python==4.11.0.86" transforms3d pyyaml lark typeguard

# YOLOE 开集类别需要 Ultralytics 版 CLIP，不要安装 PyPI 的 clip
python -m pip install git+https://github.com/ultralytics/CLIP.git
```

:::tip PyTorch 安装时的 ROS 依赖提示
如果终端已加载 ROS 2，pip 在安装 PyTorch 时可能提示 `generate-parameter-library-py` 缺少 `pyyaml` 和 `typeguard`。如果日志末尾的 `Successfully installed` 列出了 `torch`、`torchvision` 和 `torchaudio`，这条提示不影响本次 PyTorch 安装。执行本步骤的安装命令补齐这两个依赖，再运行下方的 `pip check` 和导入验证。
:::

如果按机械臂工程默认配置编译了 `rebotarm_agent`，还需补齐该包声明的依赖，使加载整个工作空间后执行 `pip check` 不再提示缺少 `fastmcp`：

```bash
python -m pip install fastmcp
```

`fastmcp` 属于 Agent 功能，视觉识别本身不直接使用它。如果工作空间没有该包，可跳过这条命令。

本流程固定使用 NumPy `1.26.4` 与 OpenCV `4.11.0.86`；后续安装或升级 Ultralytics 时，也请保留这些版本约束和 PyTorch 配套版本。

:::tip OpenCV 与 NumPy 依赖冲突
如果此前先执行 `pip install -U ultralytics`，再单独安装 NumPy `1.26.4`，可能出现 `opencv-python ... requires numpy>=2`。例如，OpenCV `5.0.0.93` 要求 NumPy 2，而当前流程使用 NumPy `1.26.4`。即使最后显示 `Successfully installed`，环境也可能仍存在依赖冲突。

保持 `yolo` 环境激活，安装配套版本后，再执行下面的依赖检查与导入验证：

```bash
conda activate yolo
python -m pip install "numpy==1.26.4" "opencv-python==4.11.0.86" transforms3d
```

不要在同一个环境中同时安装多个提供 `cv2` 的 OpenCV 包。如果已同时安装 `opencv-python`、`opencv-contrib-python` 或对应的 headless 包，请先卸载这些包，再重新执行上面的安装命令：

```bash
python -m pip uninstall -y opencv-python opencv-contrib-python opencv-python-headless opencv-contrib-python-headless
python -m pip install "numpy==1.26.4" "opencv-python==4.11.0.86" transforms3d
```
:::

**检查依赖并验证 YOLOE**

先加载系统 ROS 和已编译的工作空间，再用当前 Conda Python 检查依赖：

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
python -m pip check
python -c "import sys, torch, torchvision, torchaudio, cv2, numpy, yaml, lark, transforms3d, clip; from ultralytics import YOLOE; print('Python:', sys.executable); print('PyTorch:', torch.__version__); print('OpenCV:', cv2.__version__); print('NumPy:', numpy.__version__); print('CUDA available:', torch.cuda.is_available()); print('YOLOE OK')"
python -c "import rclpy, cv_bridge, launch_ros; import rebot_visual_grasp.grasp_yolo; print('ROS grasp imports OK')"
```

:::note 预期结果
`pip check` 输出 `No broken requirements found.`；Python 路径位于当前 Conda 环境，视觉验证输出 `OpenCV: 4.11.0`、`NumPy: 1.26.4` 和 `YOLOE OK`，ROS 导入验证输出 `ROS grasp imports OK`。CPU 后端的 `CUDA available: False` 正常；GPU 后端应为 `True`。这些导入检查不会启动抓取节点或控制机械臂。
:::

如果 `pip check` 提示 `launch-ros ... requires pyyaml`，请确认已在 `yolo` 环境中执行上面的依赖安装；如果提示 `rebotarm-agent ... requires fastmcp`，执行对应的 Agent 依赖安装命令。如果缺少 `rclpy`、`cv_bridge` 或工作空间模块，请先检查 ROS 系统依赖、工作空间编译结果及两条 `source` 命令，不要通过 pip 安装同名 ROS 包替代。

依赖检查和导入验证全部通过后，再继续下载权重和启动抓取节点。

</div>
</section>
</div>

**下载权重到 `~/rebot_visual_model`**

```bash
mkdir -p ~/rebot_visual_model && cd ~/rebot_visual_model

# MobileCLIP（YOLOE set_classes 必需，约 242MB）
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/mobileclip2_b.ts

# YOLOE 分割权重也可在首次运行时自动下载；建议手动放到同目录
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt
```

在模型目录中验证权重加载和文本类别设置，避免启动机械臂后才发现模型文件或 CLIP 依赖缺失：

```bash
cd ~/rebot_visual_model
python -c "from ultralytics import YOLOE; model = YOLOE('yoloe-26s-seg.pt'); model.set_classes(['cube', 'box']); print('YOLOE weights and text encoder OK')"
```

预期输出 `YOLOE weights and text encoder OK`。首次加载可能耗时较长；本命令只加载视觉模型，不连接或控制机械臂。如果缺少权重或依赖，请先解决该错误再运行项目。

</div>
</section>

</div>

### 3. 运行项目

启动前请确认：机械臂已上电，CAN 接口为 `can0`，Gemini 2、D405 或 D435i 已通过 USB 连接。然后先拉起 CAN：

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

:::warning 真实机械臂运动
终端 C 的 `move_to_observation_on_start:=true` 会使机械臂移动到观察位；终端 D 会执行抓取和放置。启动前确认零点、安装支架、工作空间和偏移参数，确保运动路径内无人和障碍物，并准备随时停止。
:::

下面按 A → B → C → D 的顺序分别启动，保持前面的终端运行。Gemini 2、D405 与 D435i 的启动命令不同，请按实际相机选择。如果希望一键启动，可以自行编写启动脚本。

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">A</span>
<div className="rebot-step-content">

#### 终端 A — 启动机械臂 + RViz

<details className="content-details">
<summary>点击展开 Gemini 2</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_camera.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

<details className="content-details">
<summary>点击展开 D405</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_d405.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

<details className="content-details">
<summary>点击展开 D435i</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_d435i.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">B</span>
<div className="rebot-step-content">

#### 终端 B — 启动相机

<details className="content-details">
<summary>点击展开 Gemini 2</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch orbbec_camera gemini2.launch.py
```

</details>

<details className="content-details">
<summary>点击展开 D405</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch realsense2_camera rs_launch.py \
  align_depth.enable:=true \
  depth_module.depth_profile:=640x360x30 \
  depth_module.color_profile:=640x360x30
```

</details>

<details className="content-details">
<summary>点击展开 D435i</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch realsense2_camera rs_launch.py \
  align_depth.enable:=true \
  depth_module.depth_profile:=640x480x30 \
  rgb_camera.color_profile:=640x480x30
```

</details>


</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">C</span>
<div className="rebot-step-content">

#### 终端 C — 机械臂到达观察位 + YOLO 识别

运行前请先 `conda activate yolo`。下面的 `python` 使用当前激活的环境，无需手动填写 Miniconda 或 Miniforge 路径。如果环境名不是 `yolo`，请激活实际使用的环境。下面的启动示例默认使用 `yolo_device:=cpu`；GPU 后端请先通过步骤 5 的 CUDA 验证，再将该参数改为 `yolo_device:=0`。

<details className="content-details">
<summary>点击展开 Gemini 2</summary>

```bash
conda activate yolo
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:="$HOME/rebot_visual_model/yoloe-26s-seg.pt" \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=cpu \
  -p grasp_z_offset_m:=0.01 \
  -p place_z_offset_m:=0.1 \
  -p grasp_x_offset_m:=-0.02 \
  -p grasp_y_offset_m:=0.002 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

<details className="content-details">
<summary>点击展开 D405</summary>

```bash
conda activate yolo
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:="$HOME/rebot_visual_model/yoloe-26s-seg.pt" \
  -p color_topic:=/camera/camera/color/image_raw \
  -p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw \
  -p color_info_topic:=/camera/camera/color/camera_info \
  -p optical_frame:=camera_color_optical_frame \
  -p target_class:=cube \
  -p place_class:=box \
  -p yolo_device:=cpu \
  -p grasp_z_offset_m:=0.01 \
  -p grasp_y_offset_m:=-0.005 \
  -p place_z_offset_m:=0.1 \
  -p grasp_x_offset_m:=-0.01 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

<details className="content-details">
<summary>点击展开 D435i</summary>

```bash
conda activate yolo
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:="$HOME/rebot_visual_model/yoloe-26s-seg.pt" \
  -p color_topic:=/camera/camera/color/image_raw \
  -p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw \
  -p color_info_topic:=/camera/camera/color/camera_info \
  -p optical_frame:=camera_color_optical_frame \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=cpu \
  -p grasp_z_offset_m:=0.01 \
  -p place_z_offset_m:=0.1 \
  -p grasp_y_offset_m:=0.01 \
  -p grasp_x_offset_m:=-0.04 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>


| 参数               | 说明                                                                         |
| ------------------ | ---------------------------------------------------------------------------- |
| `yolo_device:=cpu` | 默认使用 CPU；通过 CUDA 验证后改为 `yolo_device:=0` 使用第 0 块 GPU       |
| `target_class`     | 目标抓取物体的 YOLOE 文本类名，可按实际物体修改,支持所有yolo默认能识别的物体 |
| `place_class`      | 目标放置物体的 YOLOE 文本类名，可按实际物体修改,支持所有yolo默认能识别的物体 |
| `grasp_x_offset_m` | `base_link` 前后方向，负数表示往后拉，可按需要调整                           |
| `grasp_y_offset_m` | 抓取的左右方向。`0.01` 为左偏 1cm，负数为右方                                |
| `grasp_z_offset_m` | 抓取高度微调。默认参数按柔性夹爪设置（比普通夹爪更长），可按实际夹爪高度调整 |
| `place_z_offset_m` | 放置时的抬高高度，用于控制到达放置点后多高再放下物体                         |

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">D</span>
<div className="rebot-step-content">

#### 终端 D — 一键抓取放置

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp grasp_go.launch.py
```

如需修改延时，可在启动命令后追加参数，例如 5 秒后触发：

```bash
ros2 launch rebot_visual_grasp grasp_go.launch.py trigger_delay_s:=5.0
```

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">E</span>
<div className="rebot-step-content">

#### 终端 E — 回零（可选）

正常退出机械臂控制节点时会尝试回零并失能；异常中断或通信故障时不能依赖自动回零。需要手动回零时，请保持终端 A 的控制节点运行，并确认路径内无障碍物：

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger {}
```

</div>
</section>
</div>

</TabItem>
</GraspingTabs>

## 联系方式

- 技术支持：[提交 Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)
- 项目地址：[Github](https://github.com/Seeed-Projects/reBot-DevArm-Grasp)
- 论坛：[Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考文档

- [reBot Arm B601-RS 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/)
- [reBot Arm B601-RS ROS2 集成](https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_ros2_integration/)
- [rebot_visual_grasp](https://github.com/xiehuangbao888/rebot_visual_grasp)
- [OrbbecSDK_ROS2](https://github.com/xiehuangbao888/OrbbecSDK_ROS2)
- [Orbbec Gemini 2 产品页](https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51)
- [Orbbec 开发资料总链接](https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [Orbbec SDK v2 API 文档](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/)
- [pyorbbecsdk 仓库](https://github.com/orbbec/pyorbbecsdk)
- [pyorbbecsdk 文档](https://orbbec.github.io/pyorbbecsdk/index.html)
- [Orbbec ROS2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main)
- [realsense-ros](https://github.com/xiehuangbao888/realsense-ros)
- [RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Graspnet(Anygrasp) 文档](https://graspnet.net/)

</div>
