---
description: 使用 Orbbec Gemini 336 和 YOLOE 搭建 reBot Arm B601-RS 桌面视觉抓取，完成 OBB 预览、手眼标定和真机抓取，并可选用 AnyGrasp 或 GraspNet-Baseline。
title: reBot-RS 多后端视觉抓取
sidebar_label: reBot-RS 多后端视觉抓取
keywords:
  - reBot Arm B601-RS
  - RGB-D
  - YOLOE
  - OBB
  - AnyGrasp
  - GraspNet
  - 手眼标定
slug: /rebot_arm_b601_rs_python_visual_grasping
sku: 100019336
last_update:
  date: 2026-11-24
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-11-23'
updatedAt: '2026-11-24'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_python_visual_grasping/
---

import '/src/css/rebot-wiki-style.css';
import GraspingTabs from '@site/src/components/robotics/RebotGraspingTabs';
import styles from '@site/src/components/robotics/rebot-grasping-demo.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS" width={800} height={586} style={{ height: 'auto' }} />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true" />
  <a className="rebot-buy-button" href="https://detail.tmall.com/item.htm?id=1057521963559" target="_blank" rel="noopener noreferrer">
    <span>点击立即获取</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7" />
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4" />
    </svg>
  </a>
</div>

<p className="text--center">
  <img src="https://img.shields.io/badge/Camera-Gemini%20336-teal.svg" alt="Orbbec Gemini 336 RGB-D 相机" />{' '}
  <img src="https://img.shields.io/badge/Python-3.10-blue.svg" alt="Python 3.10" />{' '}
  <img src="https://img.shields.io/badge/Version-v0.1.0-brightgreen.svg" alt="版本 v0.1.0" />{' '}
  <img src="https://img.shields.io/badge/Platform-Ubuntu%20x86--64-orange.svg" alt="Ubuntu x86-64" />
</p>

<p className="text--center"><strong>AnyGrasp · GraspNet · OBB · 手眼标定 · YOLOE</strong></p>

本教程使用装在 reBot Arm B601-RS 末端的 Orbbec Gemini 336 相机识别并抓取桌面物体。YOLOE 根据文本类别分割目标，抓取后端利用目标轮廓和深度估计夹持位姿。完成手眼标定后，程序将候选转换到机械臂基座坐标系，再检查工作范围和逆运动学（IK）。

先用相机检查过滤版 OBB（有向边界框）的抓取候选，再完成手眼标定并尝试真机抓取。需要使用点云估计六自由度抓取位姿时，可选 AnyGrasp 或 GraspNet-Baseline。需要 ROS 2 抓放流程时，请参考 [B601-RS 视觉夹取](https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_grasping_demo/) 中的 ROS 2 方法。

## 准备硬件和主机

- **机械臂**：reBot Arm B601-RS、夹爪、适用电源和已配置的 USB 转 CAN 适配器。先完成装配、设零和基本通信检查。[B601-RS 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/)
- **相机**：Orbbec Gemini 336、USB 3.0 数据线和固定在末端的相机支架。项目也提供 Orbbec Gemini 2、RealSense D405 和 D435i 驱动。换相机或支架后应重新检查视野并做手眼标定。[相机 SDK 说明](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup_zh.md#相机)
- **主机**：Ubuntu x86-64，带图形桌面，已安装 Git 和 curl。脚本创建 Python 3.10 的 Conda 环境 `rebot`。使用 AnyGrasp 或 GraspNet-Baseline 时需要兼容的 NVIDIA GPU 和驱动。
- **测试物体和标定板**：准备一根香蕉或词表中的其他物体。做手眼标定时，将 ArUco 标定板固定在桌面上。[下载 100 mm ArUco 标定板（PDF）](https://raw.githubusercontent.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/main/examples/hand_eye/boards/aruco_100mm.pdf)

## 1. 配置环境和 SDK

在 Ubuntu 终端克隆工程。本文命令都从仓库根目录运行。

```bash
git clone https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping.git
cd Rebot-Arm-B601-Visual-Grasping
```

打开 `config/default.yaml`，确认 `camera.type` 与实际设备一致。Gemini 336 的默认配置为 `orbbec_gemini336`、640 × 480、30 FPS。连接多台同型号相机时，可设置 `camera.serial`。在运行安装脚本前选好型号，脚本会按配置安装驱动。

**自动安装与手动配置二选一。** 自动安装可以按用途配置依赖，从仅用 CPU 做 OBB 相机预览到安装全部后端。需要逐项配置依赖时，选择手动配置。

<div className={styles.page}>
<GraspingTabs defaultValue="automatic" queryString="grasping-setup">

<TabItem value="automatic" label="自动安装">

<h3 id="方式-a脚本自动安装">方式 A：脚本自动安装</h3>

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>检查并安装依赖</h4>

根据用途选择下面一组命令，依次执行检查、安装和复检。首次检查报告缺项时，可继续运行安装命令。安装期间可以断开相机和机械臂。

**只做 OBB 相机预览**时，可以用 CPU。安装完成并激活环境后，继续第 2 节。

```bash
bash scripts/check_env.sh --backend obb
bash scripts/setup_env.sh --backend obb
bash scripts/check_env.sh --backend obb
```

**用 OBB 做真机抓取**时，加上 `--robot` 安装和检查 B601 控制 SDK。OBB 可以在 CPU 上运行。

```bash
bash scripts/check_env.sh --backend obb --robot
bash scripts/setup_env.sh --backend obb --robot
bash scripts/check_env.sh --backend obb --robot
```

**安装全部后端和 B601 控制 SDK**需要兼容的 NVIDIA GPU 和驱动。先用 `nvidia-smi -L` 确认主机能识别显卡，再执行下列命令。安装脚本会编译所需的 CUDA 算子。

```bash
bash scripts/check_env.sh
bash scripts/setup_env.sh
bash scripts/check_env.sh
```

- **单独安装点云后端。** 在安装和检查命令中使用 `--backend anygrasp` 或 `--backend graspnet`，做真机抓取时再加 `--robot`。GraspNet 权重下载受限时，在对应的安装命令中加 `--checkpoint-file /path/to/checkpoint-rs.tar`，并替换为本地文件路径。
- **变更确认。** 脚本自动补齐缺项并复用已有 Git SDK。更改依赖版本、Conda 构建或 SDK 分支前，脚本会列出变更并询问。输入 `y` 确认，回车、输入 `n` 或非交互运行时跳过。实际变更见 `----` 下方。
- **复检结果。** 查看 `----` 下方的汇总。退出码 `3` 表示只剩 `[MANUAL]` 项。使用 AnyGrasp 时按下文配置授权和权重。做真机抓取时，在第 3 节生成手眼矩阵。补齐所选用途对应的文件后，用相同参数复检。

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>激活运行环境</h4>

如果脚本刚安装了 Miniforge，先在当前终端执行 `source ~/miniforge3/etc/profile.d/conda.sh`。然后激活环境。

```bash
conda activate rebot
```

</div>
</div>

</div>

</TabItem>

<TabItem value="manual" label="手动配置">

<h3 id="方式-b手动配置">方式 B：手动配置</h3>

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

#### 创建环境并安装 PyTorch

从可使用 Conda 的终端运行以下命令。`environment.yml` 包含 Python 3.10、低于 2 的 NumPy 和 B601 所需的 Pinocchio 3.9.0。已有 `rebot` 环境时，先激活并按环境文件核对依赖。

```bash
conda env create -f environment.yml
conda activate rebot
```

<Tabs defaultValue="cuda">

<TabItem value="cuda" label="NVIDIA GPU">

运行全部后端或使用 AnyGrasp、GraspNet 时，安装 GPU 版 PyTorch。下面是工程验证过的 PyTorch 2.5.1 与 CUDA 12.1 组合，检查应显示 `12.1` 和 `True`。

```bash
python -m pip install 'torch==2.5.1+cu121' 'torchvision==0.20.1+cu121' 'torchaudio==2.5.1+cu121' \
  --index-url https://download.pytorch.org/whl/cu121
python -c 'import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())'
```

</TabItem>

<TabItem value="cpu" label="CPU">

只用 CPU 运行 OBB 时，选用以下 PyTorch 安装命令。

```bash
python -m pip install -r requirements-pytorch.txt --index-url https://download.pytorch.org/whl/cpu
```

</TabItem>

</Tabs>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

#### 安装相机驱动、YOLOE 和 B601 SDK

Orbbec Gemini 336 使用 `python -m pip install 'pyorbbecsdk2==2.0.18'`。RealSense D405 或 D435i 使用 `python -m pip install 'pyrealsense2>=2.54'`。按相机厂商说明配置 USB 访问权限。[相机 SDK 说明](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup_zh.md#相机)

```bash
python -m pip install -e '.[obb,yolo,visualization]' scipy
python -m pip install 'git+https://github.com/ultralytics/CLIP.git@7ffa84b3bfa40c42ecc1c77147a855e69cb2dd40'
mkdir -p models
curl -fL --retry 3 -o models/yoloe-26s-seg.pt \
  https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt
curl -fL --retry 3 -o mobileclip2_b.ts \
  https://github.com/ultralytics/assets/releases/download/v8.4.0/mobileclip2_b.ts
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
python -m pip install 'motorbridge==0.6.0' 'meshcat>=0.3.2' 'matplotlib>=3.10'
```

只使用 OBB 和机械臂时，执行 `bash scripts/check_env.sh --backend obb --robot` 检查依赖，再进入第 2 节。手眼矩阵在第 3 节生成。

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

#### 配置 AnyGrasp 和 GraspNet 的 CUDA 工具链

在已激活的 `rebot` 中安装 CUDA 12.1 兼容的编译器和工具链。继续前确认 `nvcc --version` 显示 `release 12.1`。

```bash
conda install --override-channels -c conda-forge 'gcc_linux-64=12' 'gxx_linux-64=12'
conda install --override-channels -c nvidia/label/cuda-12.1.1 -c conda-forge 'cuda-toolkit=12.1'
conda activate rebot
export CUDA_HOME="$CONDA_PREFIX"
export PATH="$CUDA_HOME/bin:$PATH"
export MAX_JOBS=2
nvcc --version
python -m pip install wheel ninja
python -m pip install 'transforms3d>=0.4.2' \
  'graspnetAPI @ git+https://github.com/graspnet/graspnetAPI.git@eb57dd2092d8dbe05312a29c3d0c22f3226efbfc'
```

**AnyGrasp**：安装 SDK 和 PointNet2，并使用 OpenBLAS 编译 MinkowskiEngine。完成后按下方的 [AnyGrasp 授权与权重](#anygrasp-授权与权重) 放置文件。

```bash
git clone https://github.com/graspnet/anygrasp_sdk.git sdk/anygrasp_sdk
git clone --branch cuda-12-1 https://github.com/chenxi-wang/MinkowskiEngine.git sdk/MinkowskiEngine-cuda-12-1
conda install --override-channels -c conda-forge 'openblas>=0.3.30,<0.4' 'numpy<2'
python -c 'import ctypes, sys; ctypes.CDLL(sys.prefix + "/lib/libopenblas.so")'
python -m pip install --no-build-isolation --no-deps ./sdk/anygrasp_sdk/pointnet2
(
  cd sdk/MinkowskiEngine-cuda-12-1 &&
  python setup.py bdist_wheel --force_cuda --blas=openblas \
    --blas_include_dirs="$CONDA_PREFIX/include" --blas_library_dirs="$CONDA_PREFIX/lib" &&
  python -m pip install --no-deps dist/*.whl
)
```

**GraspNet-Baseline**：将 PointNet2 和 kNN 扩展安装到各自的 SDK 子目录，使两个后端可以在同一个 `rebot` 环境中使用各自的 PointNet2。下载 RealSense 预训练权重并保存为 `sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar`。[GraspNet-Baseline 官方预训练权重](https://github.com/graspnet/graspnet-baseline#training-and-testing)

```bash
git clone https://github.com/graspnet/graspnet-baseline.git sdk/graspnet-baseline
baseline="$PWD/sdk/graspnet-baseline"
python -m pip install --no-build-isolation --no-deps --upgrade --target "$baseline/pointnet2" "$baseline/pointnet2"
touch "$baseline/pointnet2/pointnet2/__init__.py"
python -m pip install --no-build-isolation --no-deps --upgrade --target "$baseline/knn" "$baseline/knn"
mkdir -p "$baseline/checkpoints"
```

手动配置完整环境后运行 `bash scripts/check_env.sh`。只配置部分后端时，使用 `--backend obb`、`--backend anygrasp` 或 `--backend graspnet` 检查对应依赖，追加 `--robot` 一起检查机械臂。更多版本和配置说明见 [项目手动安装指南](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/README_zh.md#2-手动配置环境和-sdk)。

</div>
</div>

</div>

</TabItem>

</GraspingTabs>
</div>

### AnyGrasp 授权与权重

使用 AnyGrasp 时，先申请官方授权和配套检测权重，再用 `bash scripts/anygrasp_license.sh` 配置。自动安装和手动配置都使用下面的步骤。直接运行脚本也可以进入交互菜单。

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>读取本机机器码</h4>

在运行推理的机器上使用部署时的网卡，选择 `1` 读取 `feature_id`，并用它申请授权和配套权重。[AnyGrasp 官方授权申请](https://github.com/graspnet/anygrasp_sdk/tree/main/license_registration)

```bash
bash scripts/anygrasp_license.sh 1
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>安装授权和检测权重</h4>

将官方授权 ZIP 或解压后的授权目录与 `checkpoint_detection.tar` 放在同一交付目录。选择 `2` 并提供交付目录，把命令里的 `/path/to/delivery` 换成实际路径。

```bash
bash scripts/anygrasp_license.sh 2 "/path/to/delivery"
```

脚本会用官方 SDK 验证授权，确认权重可以读取，再按 `config/backends/anygrasp.yaml` 安装文件。

**默认安装位置。** 在 `license/` 中查看授权文件，在 `log/` 中查看检测权重 `checkpoint_detection.tar`。

```text
sdk/anygrasp_sdk/grasp_detection/
├── gsnet.so
├── license/
│   ├── licenseCfg.json
│   ├── *.lic
│   ├── *.public_key
│   └── *.signature
└── log/
    └── checkpoint_detection.tar
```

环境安装脚本和选项 `2` 会在需要时将与当前 Python 环境兼容的 `gsnet.so` 放在 `license/` 同级。

**过滤版使用独立的 SDK 或权重路径时**，改用下面的命令。脚本会按 `config/backends/anygrasp_filtered.yaml` 安装文件。

```bash
bash scripts/anygrasp_license.sh --backend anygrasp_filtered 2 "/path/to/delivery"
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>复核安装结果</h4>

查看 `----` 下方的授权和权重状态。`[PARTIAL]` 和退出码 `3` 表示授权已就绪，检测权重仍缺失。取得权重后，可将 `checkpoint_detection.tar` 的路径直接传给选项 `2`。如出现 `[ERROR]`，查看终端报告的原因，例如机器码不匹配或权重无法读取。最后复检 AnyGrasp 环境。

```bash
bash scripts/check_env.sh --backend anygrasp
```

检查通过后，使用第 5 节的 AnyGrasp 相机预览验证模型加载和推理。

</div>
</div>

</div>

## 2. 查看实拍画面和抓取候选

运行示例前执行 `conda activate rebot`。示例通过 `scripts/run_python.sh` 使用该环境的 Python。启动器默认将 `rebot` 与继承的 `PYTHONPATH`、`LD_LIBRARY_PATH` 和用户级 Python 包隔离，避免加载来自 ROS Humble 或其他环境的依赖。[Python 启动器](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup_zh.md#python-启动器)

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>录制一帧 RGB-D</h4>

连接相机并录制一帧。命令完成后应生成 `.npz` 文件。

```bash
bash examples/rgbd_capture/run.sh --output "outputs/rgbd/frame-$(date +%s%N).npz"
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>打开过滤版 OBB 预览</h4>

把目标放在画面中央，打开过滤版 OBB 预览。示例默认目标是 `yellow banana`，可用 `--target-class` 指定配置词表里的其他类别。该命令只连接相机。

```bash
bash examples/obb_filtered/run.sh
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>对照抓取候选</h4>

在图像窗口按 **G** 保存一次快照，对照同一帧的原始候选和过滤后候选。确认目标掩膜覆盖的是目标物体，过滤后的抓取中心和夹爪开合方向适合该物体。按 **Q** 或 **Esc** 退出。想进一步查看分割或点云质量时，可运行 `bash examples/camera_check/run.sh --target-class "yellow banana"`。[过滤版 OBB 说明](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/obb_filtered_zh.md)

</div>
</div>

</div>

## 3. 完成手眼标定

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>准备标定板</h4>

下载 `aruco_100mm.pdf` 并按 100% 比例打印。实测黑色方形标记的边长，将米制值写入 `config/default.yaml` 的 `calibration.aruco.marker_length_m`。默认边长是 `0.100` m，标记 ID 为 `0`。把板固定在桌面上，确保相机在多个姿态都能看见它。[下载 100 mm ArUco 标定板（PDF）](https://raw.githubusercontent.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/main/examples/hand_eye/boards/aruco_100mm.pdf)

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>检查标记检测</h4>

用相机检查标记。终端会报告 10 帧中检测到配置标记的帧数。检测不稳定时，先调整光照、距离或标定板角度。

```bash
bash examples/hand_eye/run.sh --check-marker
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>检查机械臂连接</h4>

在 `sdk/reBotArm_control_py/config/rebotarm.yaml` 中确认 `hardware_yaml: rebotarm_rs.yaml`，并核对该硬件配置的 CAN 接口以及运动学模型。`can0` 是示例，请用实际配置的接口名。[B601-RS 控制 SDK 与 CAN 配置](https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_pinocchio_meshcat/)

```bash
ip -details link show can0
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4>启动自动标定</h4>

:::warning
自动标定会沿预设轨迹移动机械臂。运行前固定底座，清空整段运动范围，确保相机线缆留有余量，并准备好在必要时切断驱动电源。重新标定前，可备份已有的 `hand_eye.npz`。
:::

启动自动标定。程序配对机械臂末端位姿与相机中的标记位姿，采样结束后求解相机到末端的固定变换。

```bash
bash examples/hand_eye/run.sh
```

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/Cal.gif" alt="reBot Arm B601-RS 自动手眼标定演示" width={1138} height={640} loading="lazy" style={{ height: 'auto' }} />
</div>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">
    <h4>复核标定结果</h4>

在终端确认本次标定出现 `[OK] Saved to .../hand_eye.npz`。如果脚本提示有效样本少于 15 组，建议先调整标定板位置或光照，确保标记在更多姿态下可见，然后重新标定。

Gemini 336 的标定文件是 `config/calibration/orbbec_gemini336/hand_eye.npz`。其他相机的结果写入 `config/calibration/` 下对应型号的子目录。在 `config/default.yaml` 中核对 `calibration.hand_eye_path`，其相对路径以 `config/` 为起点。再检查机械臂依赖和标定文件。

```bash
bash scripts/check_env.sh --backend obb --robot
```

</div>
</div>

</div>

## 4. 执行一次过滤版 OBB 抓取

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>检查目标和机械臂配置</h4>

确认预览能稳定找到目标，并核对 `robot.ready_pose`、夹爪方向和工作范围。改装过夹爪时，还应核对 `planning.T_grasp_tcp`。

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>执行抓取</h4>

:::warning
`--execute` 会在启动时使能机械臂并移动到准备位，按 **G** 后才开始本轮抓取。运行前再次确认运动区域内没有人员、线缆或障碍物。
:::

```bash
bash examples/obb_filtered/run.sh --execute --target-class "yellow banana"
```

等待机械臂停在准备位。在图像窗口按 **G**，程序重新采集当前场景，并从通过检查的过滤后候选中选取抓取。目标缺失或没有可执行候选时，本轮会跳过。按 **Q** 或 **Esc** 结束会话。

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/obb.gif" alt="reBot Arm B601-RS 过滤版 OBB 抓取演示" loading="lazy" style={{ height: 'auto' }} />
</div>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>查看运行结果</h4>

查看终端打印的运行目录。`result/snapshot-NNN/` 包含 `frame.npz`、抓取候选与计划 `result.json`，以及原始和过滤结果的 `comparison.png`、`comparison.json`。发起真机抓取后还会写入 `execution.json`，其中 `object_held` 是控制器报告的夹持状态。

</div>
</div>

</div>

## 5. 试用点云抓取后端

<div className={styles.page}>
<GraspingTabs defaultValue="anygrasp" queryString="grasping-backend">

<TabItem value="anygrasp" label="AnyGrasp">

<h3 id="anygrasp">AnyGrasp</h3>

完成第 1 节的环境配置和 [AnyGrasp 授权与权重](#anygrasp-授权与权重) 后，启动相机预览。

```bash
bash examples/anygrasp_filtered/run.sh --target-class "yellow banana"
```

在图像窗口按 **G** 保存快照。左侧是原始点云参考结果，右侧是过滤后的结果。默认词表顺序是 `pen`、`orange`、`yellow banana`，可在图像窗口用 **1**、**2**、**3** 切换。确认候选后，按 **Q** 或 **Esc** 退出预览。

确认预览结果和手眼标定后，先检查真机依赖。

```bash
bash scripts/check_env.sh --backend anygrasp --robot
```

:::warning
真机抓取命令会在启动时使能机械臂并移动到准备位。运行前确认运动区域内没有人员、线缆或障碍物。
:::

检查通过后，运行下面的命令启动真机抓取。

```bash
bash examples/anygrasp_filtered/run.sh --target-class "yellow banana" --execute
```

等待机械臂停在准备位。在图像窗口按 **G** 重新采集一帧，并从右侧通过工作范围和 IK 检查的候选中选取抓取。按 **Q** 或 **Esc** 结束会话。[过滤版 AnyGrasp 说明](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/anygrasp_filtered/README_zh.md)

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/any.gif" alt="AnyGrasp 演示 1" width={1138} height={640} loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/anygrasp.gif" alt="AnyGrasp 演示 2" width={1024} height={640} loading="lazy" />
  </figure>
</div>

</TabItem>

<TabItem value="graspnet" label="GraspNet-Baseline">

<h3 id="graspnet-baseline">GraspNet-Baseline</h3>

完成第 1 节的 GraspNet-Baseline 环境和权重配置后，检查依赖并打开相机预览。

```bash
bash scripts/check_env.sh --backend graspnet
bash examples/graspnet_camera/run.sh
```

在相机窗口按 **G** 或 **空格** 生成候选，在点云窗口查看结果。按 **R** 恢复实时画面。确认候选后，按 **Q** 或 **Esc** 退出预览。

完成手眼标定和第 3 节的机械臂连接检查后，复检 GraspNet 真机依赖。

```bash
bash scripts/check_env.sh --backend graspnet --robot
```

:::warning
真机抓取命令会在启动时使能机械臂并移动到准备位，即使传入 `--dry-run` 也会移动。运行前确认运动区域内没有人员、线缆或障碍物。
:::

检查通过后，运行下面的命令启动真机抓取。

```bash
bash examples/graspnet_grasp/run.sh --target-class "yellow banana"
```

等待机械臂停在准备位。在图像窗口按 **G** 或 **空格** 推理并执行可达的抓取候选。按 **Q** 或 **Esc** 结束会话，机械臂会回零。[GraspNet 真机示例](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/graspnet_grasp/README_zh.md)

</TabItem>

</GraspingTabs>
</div>

## 排查常见问题

- **相机无法录制**：核对 `camera.type`、序列号和 USB 权限。确认换用的分辨率和帧率受相机支持，再重跑第 2 节的采集命令。
- **按 G 后机械臂没有动作。**
  - **过滤版 OBB 或 AnyGrasp。** 确认启动命令带有 `--execute`。查看本次 `result.json` 和终端日志，判断是未检出目标、点云未通过质量检查、候选超出工作范围，还是 IK 无解。
  - **GraspNet-Baseline。** 确认运行的是 `examples/graspnet_grasp/run.sh`。若使用了 `--dry-run`，程序会跳过抓取动作。查看终端是否提示缺少有效的手眼标定或没有可达候选。
- **画面中的候选正确，但实际抓取偏移**：先检查相机支架是否移动、手眼矩阵是否来自当前相机，以及 `planning.T_grasp_tcp` 是否匹配当前夹爪。沿接近方向的偏差确认后，过滤版可用 `--insertion-depth-mm` 覆盖本轮额外下探量，单位为毫米。过滤版 OBB 默认 0 mm，过滤版 AnyGrasp 默认 5 mm。每次调整后先复核候选和夹爪与桌面的间距。
- **环境检查报告 `[MANUAL]`**：退出码 `3` 表示剩余项目需要手动提供，例如 AnyGrasp 授权、检测权重或手眼矩阵。补齐后用相同参数重复检查。[环境和 SDK 排查](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup_zh.md)
- **找不到旧版脚本**：示例现在从各自目录的 `run.sh` 启动。旧入口位于 `scripts/legacy/`，例如 `bash scripts/legacy/anygrasp.sh`。用 `bash scripts/run_python.sh -m rebot_grasp --help` 可查看工程 CLI 的参数。

完整入口和坐标约定见 [示例索引](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/README_zh.md) 和 [工程架构](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/architecture_zh.md)。
