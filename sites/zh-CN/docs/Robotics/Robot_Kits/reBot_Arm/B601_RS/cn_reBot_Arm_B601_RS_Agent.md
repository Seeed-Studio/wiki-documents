---
description: wrc_demo 操作指南：reBot Arm B601-RS 视觉夹取 demo 的完整步骤——环境配置、模型下载、LLM 切换、手眼标定、demo 运行、故障排查。
title: reBot B601 RS 机械臂的具身 Agent 架构设计
keywords:
  - wrc_demo
  - reBot Arm B601-RS
  - 视觉夹取
  - 视觉语言模型
  - Qwen3-VL
  - YOLOE
  - 手眼标定
  - conda
  - 教程
slug: /wrc_demo_tutorial
last_update:
  date: 2026-08-28
  author: Seeed Studio
translation:
  skip:
    - [zh-CN]
createdAt: '2026-06-15'
updatedAt: '2026-08-28'
url: https://wiki.seeedstudio.com/cn/wrc_demo_tutorial/
---

# reBot B601 RS 机械臂的具身 Agent 架构设计

<p align="center">
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
  </a>
  <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
  <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
  <img src="https://img.shields.io/badge/Camera-RGB--D-green.svg" alt="Camera" />
  <img src="https://img.shields.io/badge/Brain-VLM-purple.svg" alt="VLM Brain" />
</p>

<p align="center">
  <strong>环境配置 → 模型下载 → LLM 切换 → 手眼标定 → demo 运行 → 故障排查</strong>
</p>

本教程是 [wrc_demo](https://github.com/TheMoonAstronaut/wrc) 项目的**操作指南**。按本指南步骤操作，**1-2 小时**即可从零克隆到能跑 demo。

wrc_demo 是 [reBot Arm B601-RS](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/)（RobStride 总线）的视觉夹取 demo，运行在 Ubuntu 22.04 + Python 3.10 + conda `wrc-demo` 环境。Demo 接收自然语言指令（如"pick up the red block"），自动规划抓取并执行。

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_agent/agent3.PNG" alt="wrc_demo 在 reBot Arm 上的视觉抓取演示" />
</p>

## 0. 速查表

### 系统要求

| 项目 | 要求 |
|------|------|
| 操作系统 | Ubuntu 22.04+ / Debian 12+ / WSL2 |
| Python | 3.10（conda env 内）|
| 内存 | ≥ 16 GB（mock 8 GB 起） |
| 磁盘 | ≥ 10 GB |
| GPU（可选）| NVIDIA RTX 5070 / 4090 / H100 等 |
| 显存 | ≥ 8 GB  |

---

## 1. 项目目标与读者

- **项目目标**：把视觉语言模型（VLM）接到 reBot Arm B601-RS 上，让自然语言指令自动变抓取动作——VLM 选物体、Pinocchio 反解 IK、`SafetyHarness` 每个 50 Hz waypoint fail-closed 校验。
- **适用读者**：有 NVIDIA GPU + Ubuntu 22.04 + Python 3.10 基础，想跑 demo / 改 detector / 加 skill 的开发者。

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_agent/agent2.PNG" alt="wrc_demo 在 reBot Arm 上的视觉抓取演示" />
</p>

---

## 2. 项目概览

### 2.1 项目特点

1. **视觉语言模型驱动，三级决策**  
   默认采用 Qwen3-VL-2B-Instruct-AWQ-4bit 作为任务规划脑，可在 8 GB 显存的设备上原生运行。命令解析走 **Reflex → Habit → LLM** 三级快慢路径——常见指令（"pick up the red block"）直接走 Reflex 模板语法，不调用 LLM；只有全新任务才让 VLM 介入。

2. **手眼标定 + 6-DoF 抓取规划（fail-closed）**  
   自带手眼标定脚本（ArUco 棋盘格 + Pinocchio FK + 联合 SE(3) LM 优化），支持顶部（ETH）相机布局。每个流式轨迹点都经过 `SafetyHarness` 校验——任一校验失败，机械臂立即中途停止。

3. **6 个 TOOL_SPECS + 5 个 MCP 网关**  
   顶层暴露 `pick_and_place` / `grasp_object` / `place_at/on` / `move_t` / `teach_record/replay` + `task_done` 共 6 个 safety-gated 工具；MCP 网关额外暴露 `camera_snapshot` / `world_state` / `live_view_url` / `emergency_stop` / `reset_stop` 共 5 个工具。加新技能零协议适配工作。

4. **完整的 trace + episodic 记忆**  
   每个技能调用都写入 ASPIRE 风格的多模态 trace（`trace.jsonl` + 前后关键帧 JPEG），15 秒事件窗口 + 物体持久性信念，让"10 秒前看到的杯子"在遮挡后仍可被操作。

5. **Mock 优先的开发体验**  
   全栈 mock（`--camera mock --arm mock --llm mock`）无需任何硬件即可跑通完整决策流水线。mock 测试和真机走的是**同一份安全代码**。

### 2.2 规格参数

| 类别 | 参数 | 规格 |
|------|------|------|
| **硬件** | 机械臂 | reBot Arm B601-RS（RobStride 总线，6-DOF + 夹爪） |
| | 相机 | Orbbec Gemini 2 / Intel RealSense D435i / D405 |
| | 通信 | CAN Bus via USB2CAN；USB 3.0 相机 |
| | 控制主机 | Ubuntu 22.04+ PC / DGX Spark |
| **本地 LLM** | 默认 profile | `local_qwen3_vl`（Qwen3-VL-2B-Instruct-AWQ-4bit）|
| | 推理框架 | vLLM 0.6+（多模态推理）|
| | 显存需求 | ≥ 8 GB（约 30 tokens/s）|
| | 权重大小 | ~2.4 GB |
| **云端 LLM** | Anthropic | Claude（vision + tools；`ANTHROPIC_API_KEY` env）|
| | OpenAI 兼容 | 任意 OpenAI-compat endpoint（`OPENAI_API_KEY` env）|
| | MiniMax | `api.minimax.com`（`MINIMAX_API_KEY` env；text-only）|
| **检测器** | 默认 | YOLOE-11s-seg（开放词汇检测 + 实例分割）|
| | 可选 | YOLOE-26l-seg（更准但 2× 慢）|
| | 文本编码 | MobileCLIP2-B torchscript（Apple `apple/MobileCLIP2-B` → 自行 trace）|
| **软件栈** | 运动学 | Pinocchio 3.x（FK/IK，DLS + 随机重启）|
| | RobStride 驱动 | motorbridge（SocketCAN）+ vendored SDK |
| | 抓取后端 | camera-camera / GraspGen-X（ZMQ）/ analytic OBB（三层）|
| | Python | 3.10 |
| **技能系统** | TOOL_SPECS 总数 | 6（含 1 个 `task_done` 终止符 + 5 个真技能）|
| | 动臂技能 | 18 个 string literal 在 `_MOTION_SKILLS` |
| | MCP 工具集 | `TOOL_SPECS - _EXCLUDED_TOOLS + _EXTRA_TOOLS` = 6 - 1 + 5 = 10 |
| **安全** | 轨迹检查 | 每个 50 Hz 流式 waypoint 都过 `SafetyHarness.approve()` |
| | 失败模式 | fail-closed（任一违越 → 中途 abort）|
| | 关节预留 | IK `limit_margin=0.025` > harness `joint_margin=0.02`（不变量）|

### 2.3 材料清单（BOM）

| 部件 | 数量 | 是否包含 |
|------|------|----------|
| reBot Arm B601-RS 机械臂 | 1 | ✅ |
| 夹爪（已装） | 1 | ✅ |
| USB2CAN 串口桥 | 1 | ✅ |
| 48V 电源适配器 | 1 | ✅ |
| USB-C / 通信线缆 | 1 | ✅ |
| RGB-D 深度相机（Orbbec Gemini 2 推荐）| 1 | ✅ |
| 摄像头连接件 / 安装支架 | 1 | ✅ |
| Ubuntu 22.04+ 控制主机（NVIDIA GPU ≥ 8 GB）| 1 | ❌ 自备 |

#### 接线说明

1. **机械臂**：48V 电源 → 机械臂；USB2CAN → 主机 USB 口（首次使用需 `sudo ip link set can0 up type can bitrate 1000000`）
2. **相机**：Orbbec USB 3.0 → 主机 USB 3.0 口
3. **权限配置**：

```bash
# 一次性赋予 USB 设备读写权限
sudo chmod a+rw /dev/bus/usb/*/*

# Orbbec udev 规则（首次安装推荐）
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

```bash# 套件里是 PCAN-USB，通常应该直接出现 can0 或 can1
sudo modprobe peak_usb
ip -br link

# 如果出现 can0，再设置 bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### 2.4 环境要求

#### 硬件

| 项目 | 要求 |
|------|------|
| CPU | x86_64（aarch64 测试未覆盖） |
| 内存 | ≥ 16 GB（mock 8 GB 起，本地 LLM 16 GB 推荐） |
| 磁盘 | ≥ 10 GB（模型权重 + conda env + trace 累积）|
| GPU（本地 LLM 推理）| NVIDIA RTX 5070 / 4090 / H100 |

#### 软件

| 项目 | 要求 |
|------|------|
| Python | 3.10（conda env 内）|
| Conda | miniforge3 / miniconda / anaconda |
| 系统包 | `libusb-1.0-0-dev`, `ffmpeg`, `git`, `can-utils` |

#### 网络

| 资源 | 说明 |
|------|------|
| GitHub | 克隆 `github.com/TheMoonAstronaut/wrc` |
| HuggingFace | 下载 YOLOE / MobileCLIP2 / Qwen3-VL 权重 |
| PyPI | 装 ultralytics / openai / anthropic / pin / motorbridge |

---

## 3. 环境配置

### 3.0 最小路径：5 分钟跑通 mock

如果你只想跑通 mock 验证安装（不读其它内容），三条命令搞定：

```bash
git clone https://github.com/TheMoonAstronaut/wrc.git
cd wrc
conda env create -f environment.yml && conda activate wrc-demo

# 跑通 mock 测试（17 passed, 1 skipped ≈ 30 秒）
pytest tests/test_extrinsics_loader.py \
        tests/test_hand_eye_compensation_per_camera.py \
        tests/test_demo_yaml_llm_profile.py -q
```

:::tip
环境名固定为 `wrc-demo`。如需自定义名字（如团队命名约定），请同时改 `environment.yml` 的 `name:` 字段并相应替换后续命令。
:::

:::tip
`pyorbbecsdk2` 不在 environment.yml 里** —— 它的依赖链 `pyorbbecsdk2 → open3d==0.18.0 → dash → plotly → ipywidgets → ...` 让 pip 经常触发 `resolution-too-deep`。Orbbec SDK 单独装。
:::
:::tip
 `torch` 也不在 environment.yml 里** —— ultralytics 把 torch 标为 optional，但 `import ultralytics` 会触发 `import torch`。
:::

### 3.1 前置条件

- 已完成 [reBot Arm B601-RS 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/)（机械臂组装、零点初始化、电机 ID 配置）—— **只真机需要**
- 已具备 NVIDIA GPU + CUDA 驱动（**仅本地 LLM 推理需要**）
- 已安装 [miniforge3](https://conda-forge.org/miniforge/) 或同类 conda 工具
- Ubuntu 22.04+ / Debian 12+ / WSL2

### 3.2 系统依赖（真机需要）

```bash
sudo apt update
sudo apt install -y libusb-1.0-0-dev ffmpeg git can-utils
```

- `libusb-1.0-0-dev`：Orbbec 深度相机
- `ffmpeg`：UVC4K / RealSense RGB 流
- `can-utils`：SocketCAN bring-up（机械臂）

### 3.3 post-install：单独装 PyTorch（CUDA 版本）

 **工作目录**：从本节起，所有命令都假设你在 `wrc` 仓库根目录里。如果开了新 shell，先 `cd wrc`。

```bash
# 你现在应该已经 cd wrc 了；如果不是：
cd /path/to/wrc
```

```bash
conda activate wrc-demo
```

#### 3.3.1 安装 Pytorch 和 Torchvision

根据自身机型的CUDA版本，按照[官网教程](https://pytorch.org/index.html) 安装 Pytorch 和 Torchvision

:::tip
如果需要安装`stable CUDA 12.8`，请执行以下命令

```bash
PYTHONNOUSERSITE=1 pip install --force-reinstall \
  torch torchvision torchaudio \
  --index-url https://download.pytorch.org/whl/cu128
```
:::

#### 3.3.2 在conda环境下加载 PyTorch

PyTorch 把 nvidia 包装到 site-packages/nvidia/lib/，但 conda 不会自动把这些路径加到 LD_LIBRARY_PATH。不装这个 hook，任何新 shell 里 `import torch` 都会报 `OSError: libcudart.so.13: cannot open shared object file`

运行下面的命令安装`nvidia LD_LIBRARY_PATH conda hook`
```bash
bash scripts/install_nvidia_libs_hook.sh
```

验证 hook 生效（新 shell 也能用）
```bash
source /home/seeed/miniforge3/envs/wrc-demo/etc/conda/activate.d/nvidia_libs.sh
python -c "import torch; print('torch:', torch.__version__, 'cuda:', torch.cuda.is_available())"
# 预期：torch: 2.13.0+cu130 cuda: True
```

### 3.4 安装深度相机 SDK

本项目支持 Orbbec Gemini 2 与 RealSense D435i / D405 等 RGB-D 深度相机。

#### Orbbec Gemini 2

Orbbec Gemini 2 依赖 pyorbbecsdk（Orbbec SDK v2 的 Python 版本）。推荐**方式一**：

**方式一：通过 pip 安装（推荐）**

```bash
conda activate wrc-demo
PYTHONNOUSERSITE=1 pip install pyorbbecsdk2
```

:::tip
必须加 `PYTHONNOUSERSITE=1`，否则 pip 把包装到 `~/.local/lib/python3.10/site-packages/`（用户级 site-packages），conda env 内还是空的。
:::

**方式二：从 GitHub 源码安装**（网络问题或想要最新版时）

```bash
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

# 切到 ~/sdk 目录（不是 wrc 目录）
mkdir -p ~/sdk && cd ~/sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
PYTHONNOUSERSITE=1 pip install -e .

# 装完回到 wrc 目录
cd -
```

:::tip
**中国大陆用户**可以用 gitee 镜像加速：`git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git`
:::

#### RealSense D435i / D405

RealSense SDK（`pyrealsense2`）通常需要从源码编译，建议参考 Intel 官方文档。

---

## 4. 模型权重获取

### 4.1 安装MobileCLIP2 文本编码器

Apple 在 HuggingFace `apple/MobileCLIP2-B` 发布 PyTorch 权重，YOLOE 文本 prompt 检测需要 `.ts` 版本。

```bash
conda activate wrc-demo

# 下载 MobileCLIP2 .pt
PYTHONNOUSERSITE=1 python scripts/setup_models.py --fetch
```
转换格式 trace `.pt → .ts`（手动）**

```bash
PYTHONNOUSERSITE=1 pip install "open_clip_torch>=2.30"

PYTHONNOUSERSITE=1 python <<'PY'
import torch, open_clip
full = open_clip.create_model_from_pretrained("MobileCLIP2-B", pretrained="models/mobileclip2_b.pt", return_transform=False)
class Wrap(torch.nn.Module):
    def __init__(self, m): super().__init__(); self.m = m
    def forward(self, t):
        f = self.m(t); return f / f.norm(dim=-1, keepdim=True)
torch.jit.trace(Wrap(full.text).eval(), torch.zeros(2, 77, dtype=torch.long), strict=False).save("models/mobileclip2_b.ts")
PY
```
手动验证

```bash
PYTHONNOUSERSITE=1 python -c "import torch; m=torch.jit.load('models/mobileclip2_b.ts'); o=m(torch.zeros(2,77,dtype=torch.long)); print(o.shape, o.norm(dim=-1).tolist())"
# 预期：torch.Size([2, 512]) [1.0, 1.0]
```

#### 4.1.1 关于 YOLOE 文本编码器的查找路径

ultralytics 加载 `mobileclip*.ts` **只看当前工作目录（CWD），不会去 `models/` 找**。

如果直接 `python -m wrc_demo.apps.demo ...`，CWD 不在 `models/` 下就会报 "Download failure for ... mobileclip_*.ts"。

可以执行一下命令解决上述报错问题

```bash
# 直接跑 python 时的两种处理方式（任选）
ln -sf models/mobileclip2_b.ts mobileclip2_b.ts     # 项目根 symlink
```


### 4.2 下载Qwen3-VL 本地 LLM 权重

如果您打算接入云端API，可以跳过此步骤：

本教程默认 llm.profile=local_qwen3_vl 对应 AWQ-4bit 量化版（8GB 显存跑得动）。
```bash
hf download cyankiwi/Qwen3-VL-2B-Instruct-AWQ-4bit \
  --local-dir models/qwen3-vl-2b-awq-4bit
# → https://huggingface.co/cyankiwi/Qwen3-VL-2B-Instruct-AWQ-4bit
```
:::tip
如果使用hf下载存在网络问题可以使用github仓库下载
```bash
git clone https://huggingface.co/cyankiwi/Qwen3-VL-2B-Instruct-AWQ-4bit models/qwen3-vl-2b-awq-4bit
#如果卡顿太久直接按ctrl + c中止即可
cd models/qwen3-vl-2b-awq-4bit && git lfs pull
```
:::

### 4.3 速查表

| 资产 | 大小 | 必要性 | 获取方式 |
|------|------|--------|----------|
| `qwen3-vl-2b-awq-4bit/` | ~2.4 GB | 本地 LLM 必装（8GB 显存）| `hf download cyankiwi/Qwen3-VL-2B-Instruct-AWQ-4bit` 或 `scripts/start_cosmos3_server.sh --bg` 自动拉 |
| `yoloe-26s-seg.pt` | ~31 MB | **开放词汇检测（推荐 2026-09+）** | git clone Seeed-Projects/reBot-DevArm-Grasp 后 `cp` 出来；用 `mobileclip2_b.ts`（已有），不需 `blt.ts` |
| `yoloe-26l-seg.pt` | ~75 MB | 可选（更准，慢 ~2x）| 同上；也用 `mobileclip2_b.ts` |
| `yoloe-11s-seg.pt` | ~28 MB | **不推荐**——需 `mobileclip_blt.ts`（572 MB，首次启动要下 1.5h） | 仅在需要 legacy 模型权重时用；切回需要把 `configs/demo.yaml` 的 `model:` 改回 |
| `mobileclip2_b.pt` | ~571 MB | YOLOE 26s/l 文本编码源（PyTorch 原版）| `python scripts/setup_models.py --fetch` 自动从 `apple/MobileCLIP2-B` 拉 |
| `mobileclip2_b.ts` | ~253 MB | YOLOE 26s/l 文本编码（运行时实际加载）| 手动 trace（见 §4.1）；已下载后**必须放在 `models/` 或 CWD**——见 §4.1.1 |
| `mobileclip_blt.ts` | ~572 MB | YOLOE 11s 文本编码（**不推荐**，来源难下）| 手动 trace，源 `apple/MobileCLIP-B-LT`；只在用 11s 时才需要 |
| `pyrealsense2` | 编译产物 | 仅 RealSense 用户 | Intel 官方文档编译 |
---

## 5. 手眼标定

标定的目的是让 demo 知道**像素坐标** ↔ **机器人基坐标系** 的变换。`data/clip/hand_eye_top.json` 是脱敏参考矩阵，**你的相机必须重新标定**。

### 5.1 准备

#### 1. 打印 ArUco 棋盘

打印一张 Aruco 4x4 字典、ID = 0、边长 = 0.10 m（10 cm）的棋盘格。推荐来源：[`~/wrc/aruco100x100.pdf`](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_agent/aruco100x100.pdf)

打印后**精确测量**边长（打印机会缩放），把测量值用作 `--marker-size` 参数。

#### 2. 相机连接 + CAN bus

```bash
# Orbbec 插 USB 3.0，赋予相机权限
sudo chmod a+rw /dev/bus/usb/*/*

# CAN bus（机械臂）
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

#### 3. 列出设备

```bash
wrc-calib-top --list
# 预期：列出 Orbbec 设备索引 + 序列号

#写入相机序列号
wrc-calib-top --bind top --serial `xxxx`
# 将 serial `xxxx`中的内容更改为列出的相机序列号
```

### 5.2 顶部相机 ETH 标定

**ETH = Eye-To-Hand**：相机装在机械臂外的固定位置。标定板子放置如图所示

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_agent/agent4.PNG" alt="wrc_demo 在 reBot Arm 上的视觉抓取演示" />
</p>

```bash
# 自动模式（按预设姿态自动跑 25+ 个采样点）
wrc-calib-top --marker-size 0.10 --n 30 \
  --out data/calibration/hand_eye_top.local.json

# 手动模式（每次按 ENTER 采样）
wrc-calib-top --marker-size 0.10 --manual --n 30 \
  --out data/calibration/hand_eye_top.local.json
```

`hand_eye_top.local.json` 文件**自动被 .gitignore 忽略**（不会污染仓库），是真机标定结果。

:::tip
因为本demo设定有机械臂的安全工作区域，如果在大面积区域在抓取放置问题时出现IK求解失败，那么则需要调整相机的固定位置并重新进行标定（稳定的相机固定位置在距离机械臂底座36cm*36cm的位置左右）
:::

#### 标定原理

工具内部跑 `joint_solve`（SE(3) LM + Huber + 3*MAD outlier rejection）：
- FK 来自 `wrc_demo.control.kinematics.Kinematics`（Pinocchio on RS URDF，`joint_signs=[-1]*6`, `ee_frame='gripper_end'`）
- PnP 来自 cv2.aruco + SDK intrinsics

输出：

- `data/calibration/hand_eye_top.json` — 脱敏参考矩阵（**不要用**，serial=REDACTED）
- `data/calibration/hand_eye_top.local.json` — **你的真机标定结果**

### 5.3 验证标定 RMSE

不重标定，直接用已知基坐标系点验证：

```bash
wrc-calib-top --verify \
  --json data/calibration/hand_eye_top.local.json \
  --known-points "0.30,0.00,0.02;0.25,-0.05,0.02;0.35,0.05,0.02"
# 预期：RMSE < 10 mm（参考 set.py:320）
```

---


## 6. LLM 配置

### 6.1 决策树

```
你的显存？
├─ ≥ 8 GB  → 选项 A：本地模型（local_qwen3_vl）
├─ 有 API key → 选项 B：云端 API（anthropic / openai / minimax）
└─ 都没有 → 选项 C：mock（仅测试）
```

### 6.2 选项 A：本地模型（推荐，8 GB+ 显存）

启动 vLLM 服务（**另一个终端**）：

```bash
conda activate wrc-demo
bash scripts/start_cosmos3_server.sh --bg    # 后台启动
sleep 60                                    # 等 vLLM 加载模型（首次需要 ~60s）

# 健康检查
bash scripts/start_cosmos3_server.sh --status
# 预期：[status] vllm running, PID <xxx>
```
vLLM 0.6+ 已支持 Qwen3-VL 的多模态推理。AWQ-4bit 量化版本在 8 GB 显存上可跑到 ~30 tokens/s。

### 6.3 选项 B：云端 API（无需 GPU）

**两层配置**——YAML profile 文件 + 环境变量 key：

#### a. YAML profile 文件（`configs/llm/*.yaml`）

| 文件 | 用途 | 关键字段 |
|------|------|---------|
| `anthropic.yaml` | Claude | `type: anthropic`、`model: claude-sonnet-5` |
| `openai.yaml` | OpenAI / OpenAI 兼容 | `type: openai_compat`、`base_url`、`model` |
| `minimax.yaml` | MiniMax | `type: openai_compat` + 固定 `base_url: https://api.minimax.chat/v1` + `env_key: MINIMAX_API_KEY` |
| `local_qwen3_vl.yaml` | 本地 vLLM（默认）| 不需要 key |
| `mock.yaml` | scripted mock | 测试用 |

#### b. 选哪个 profile（`configs/demo.yaml`）

```yaml
llm:
  profile: local_qwen3_vl    # ← 改这一行（mock / anthropic / openai / minimax / local_qwen3_vl）
```

CLI 临时切：`wrc-demo --llm anthropic --task "..."`

#### c. API key（环境变量）

| profile | 读哪个 env var |
|---------|---------------|
| `anthropic` | `ANTHROPIC_API_KEY` |
| `openai` | `OPENAI_API_KEY`（`OPENAI_BASE_URL` 改 endpoint）|
| `minimax` | `MINIMAX_API_KEY`（从 YAML 的 `env_key:` 字段读）|
| `local_qwen3_vl` | 不需要 |

#### 跑起来

```bash
conda activate wrc-demo

# ⚠ 重要：下面的 `PUT_KEY_HERE` 是**占位符**，必须替换成你的真 key

# Claude（Anthropic key 格式: sk-ant-api03-...）
export ANTHROPIC_API_KEY=PUT_KEY_HERE

# OpenAI（或任何 OpenAI 兼容 endpoint；key 格式: sk-...）
export OPENAI_API_KEY=PUT_KEY_HERE

# MiniMax（key 格式: sk-cp-...）
export MINIMAX_API_KEY=PUT_KEY_HERE

# 验证env var 设置无误
echo "ANTHROPIC_API_KEY 前缀: ${ANTHROPIC_API_KEY:0:10}..."
echo "MINIMAX_API_KEY 前缀: ${MINIMAX_API_KEY:0:10}..."
```
使用`export`配置的云端`API_KEY`只有在当前终端有效，如果想要`key`持久化到 `~/.bashrc`（只 export 当前 shell 有效，新 shell 要重设）：
```bash
# 把 PUT_KEY_HERE 替换成你的真 key（一整行）
echo 'export ANTHROPIC_API_KEY=PUT_KEY_HERE' >> ~/.bashrc

# 立刻重载验证 bashrc 语法没坏（不会暴露 key 内容）
bash -n ~/.bashrc && echo "✓ bashrc 语法 OK"

source ~/.bashrc
# 验证 env var 真设上了
echo "ANTHROPIC_API_KEY 前缀: ${ANTHROPIC_API_KEY:0:10}..."
```

**或者能够在 YAML 里能不能直接写 key（但不推荐）**：

```yaml
# configs/llm/minimax.yaml 有两种写法：

# 写法 A（推荐，key 在 env var 里）
type: openai_compat
base_url: https://api.minimax.chat/v1
model: MiniMax-M3
env_key: MINIMAX_API_KEY          # ← 这里是 "env var 的名字"，不是值

# 写法 B（key 直接写 YAML，但会进 git）
type: openai_compat
base_url: https://api.minimax.chat/v1
model: MiniMax-M3
api_key: PUT_KEY_HERE             # ← 真 key 写这里（**不推荐**，会被 git 跟踪）
```


### 6.4 切换 LLM 的 2 种方法

#### 方法 1：CLI 临时覆盖

```bash
# 单次跑用云端，tip：minimax可以替换为自己实际使用的云端模型
wrc-demo --llm minimax --task "go to home" --no-view --no-serve


# 单次跑用本地模型（覆盖 demo.yaml 的 default）
wrc-demo --llm local_qwen3_vl --task "go to home" --no-view --no-serve
```

:::tip
上面两个测试脚本只是用来测试模型的链路是否连通，并不会实际控制机械臂
:::

---

## 7. demo 运行

### 7.1 启动 demo

demo运行效果视频

<div class="video-container">
  <iframe 
    width="900" 
    height="600" 
    src="https://player.bilibili.com/player.html?bvid=BV1aWtz6MEKf&page=1&autoplay=0"
    title="从 VLM 推理到实时控制：reBot B601 RS 机械臂的具身 Agent 架构设计" 
    frameborder="0" 
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
  </iframe>
</div>

```bash
# 启动项目
bash /home/seeed/wrc/scripts/start_all.sh --repl --real
```

运行完成后终端输出示例如下：

```
# 输出示例：
(wrc-demo) seeed@seeed-KUANGSHI-Series:~/wrc$ bash /home/seeed/wrc/scripts/start_all.sh --repl --real
============================================================
  wrc_demo + Qwen3-VL-AWQ-4bit one-shot launcher
============================================================
  mode:    real hardware
  camera:  orbbec_overhead
  arm:     rebot_rs
  task:    <interactive>

[1/3] check vLLM...
  vLLM already running (skipped)

[2/3] start wrc_demo...
[wrc-demo] cameras=['orbbec_overhead'] arm=rebot_rs llm=local_qwen3_vl view=False
[wrc-demo] traces -> /home/seeed/wrc/runs/20260903_153216
load extensions from /home/seeed/miniforge3/envs/wrc-demo/lib/python3.10/site-packages/pyorbbecsdk/extensions
[stream] live view on http://192.168.3.175:8090/
[wrc-demo] LIVESTREAM dashboard: http://192.168.3.175:8090/
Type a task (empty line to quit).
task> 
```

启动网页，点击终端输出的`[wrc-demo] LIVESTREAM dashboard: http:xxxx`，即可通过对话完成机械臂控制

对话命令发送后终端输出内容效果如下：

```
=== task report ===
task:    go to home
success: True
path:    reflex (3.08s)
steps:   1
summary: done via reflex path in 3.08s: move_home()

[✓ done] task complete — arm parked at home. Enter a new task or press Enter to quit.

=== task report ===
task:    挥手打个招呼吧
success: True
path:    llm (14.66s)
steps:   3
summary: Robot waved hello three times as requested.
```

:::tip
因为本demo设定有机械臂的安全工作区域，如果在大面积区域在抓取放置问题时出现IK求解失败，那么则需要调整相机的固定位置并重新进行标定（稳定的相机固定位置在距离机械臂底座36cm*36cm的位置左右）
:::


### 7.2 可执行的工作

通过文本对话控制的共有两个路径，`path:llm & path:reflex`

`reflex`指预加载的文本(mock模式)，可以保证在没有LLM运行的情况下执行对应的操作，用提前写好的固定文本控制rebot完成不同工作。

稳定的reflex指令如下
```
pick up X and put in Y  # 完整 pick+place

open the gripper        # 打开夹爪

look around             # 列出相机识别到的物体

go home                 # 回归原点
```

`llm`指经过真正接入的云端模型或本地部署的模型分析，能够更加弹性的理解语言文本，并调用对应的skills。

skills和对应功能如下
```
skill_get_observation	 # 拍照+识别
skill_localize_object	 # 单物体定位
skill_grasp_object	     # 仅抓取
skill_place_at	         # 放置到坐标
skill_place_on_object	 # 放置到物体上
skill_open_gripper	     # 打开夹爪
skill_close_gripper	     # 关闭夹爪
```

---

## 8. 自定义配置

### 8.1 加新 LLM profile

wrc-demo 的 LLM 后端是**可插拔的**，如果您需要增加新的 LLM profile，`configs/llm/<name>.yaml` 一个文件,就是一个 profile。

`demo.yaml` 里改一行 `profile: <name>` 就切换

**当前内置的 5 个 profile**:

| profile | 用途 | 需要的 env var |
|---|---|---|
| `local_qwen3_vl` | **默认**,本地 Qwen3-VL-2B-AWQ-4bit(vLLM 8080) | 不需要 |
| `mock` | 离线脚本,纯测试(§7.4 排查用过) | 不需要 |
| `anthropic` | Anthropic Claude | `ANTHROPIC_API_KEY` |
| `openai` | OpenAI / OpenAI 兼容协议 | `OPENAI_API_KEY` |
| `minimax` | MiniMax cloud(已迁到 env var) | `MINIMAX_API_KEY` 

如果需要加新 profile 可以执行下面几个步骤

#### 第 1 步:复制 yaml 当模板

（1）大多数国产 LLM(DeepSeek / Moonshot Kimi / DashScope Qwen / 智谱 / SiliconFlow)，都走 OpenAI Chat Completions 协议

可以从 openai.yaml 复制
```bash
cp configs/llm/openai.yaml configs/llm/kimi.yaml
```

（2）Anthropic 协议的从 anthropic.yaml 复制

#### 第 2 步:改 yaml 的 4 个字段
打开 configs/llm/kimi.yaml,只需要改 4 个字段:

```
type: openai                # 协议类型(见下方"type 怎么选")
model: moonshot-v1-8k       # 模型名(查厂商文档)
base_url: https://api.moonshot.cn/v1   # API endpoint,**末尾 /v1 不要漏**
env_key: MOONSHOT_API_KEY   # 读哪个 env var
supports_vision: false      # 是否支持图像(关键,见下方)
temperature: 0.0            # 一般不用动
max_tokens: 1024            # 一般不用动
timeout_s: 30               # 慢网络可调到 60
```

#### 第 3 步:在 demo.yaml 切换 profile
打开 `configs/demo.yaml`,找到 llm: block,只改一行:
```
llm:
  profile: kimi    # ← 改成新 profile 名(去掉 .yaml 后缀)
```

#### 第 4 步:设 env var + 验证
（1）临时 export(本次 shell 有效)
```
export MOONSHOT_API_KEY=sk-...
```
（2）验证 env var 生效
```
echo "${MOONSHOT_API_KEY:0:8}"
```
（3）用 --llm flag 试跑,**不动 demo.yaml**
```
conda activate wrc-demo
python -m wrc_demo.apps.demo --llm kimi --task "list the objects" --no-view --no-serve
```

（4）看 stdout 是否打印 "[wrc-demo] llm=kimi"，LLM 响应一条消息就算成功(空场景也 OK)


### 8.2 改 grasp 精度

编辑 `configs/demo.yaml` 的 `grasp.*` block：

```yaml
grasp:
  backend: obb                          # obb (默认 fallback) / graspgenx (学习型)
  pregrasp_offset_m: 0.08              # hover 高度（沿 -approach 方向）
  insertion_depth_m: 0.0              # TCP 沿 +tool-x 偏移
  depth_fraction: 0.35                 # 从物体 TOP 往下抓多深
  exempt_radius_m: 0.15                # 抓取安全圆柱半径
  move_duration_s: 2.5
  descend_duration_s: 2.0
  release_height_m: 0.05
  air_grasp_frac: 0.04                # 夹爪开度低于此 = 空抓
  approach_pitch_rad: 1.2             # approach 方向与 +z 的夹角（~69°）
```

更保守（更精确、更慢）→ 调高 `n_samples`（vLLM 思考多）；更激进（更快）→ 调低。

手眼补偿(`hand_eye_compensation_m`)，编辑 `configs/cameras/orbbec_overhead.yaml`的 `extrinsics。

grasp pose 要经过 `T_cam2base` 把相机坐标转到基坐标系——这一步的
偏差会直接传导到 grasp 落点。微调这条链路上的偏差，可以调整
`hand_eye_compensation_m`的数值。

```yaml
# configs/cameras/orbbec_overhead.yaml
extrinsics:
  source: "${repo}/data/calibration/hand_eye_top.json"
  mode: eye_to_hand
  hand_eye_compensation_m:    # 米;默认 [0, 0, 0] = identity(不起作用)
    x: 0.00
    y: 0.00
    z: 0.00
```
X、Y、Z三个数值的作用就是在已标定的 T_hand_eye 之上,叠加一个手动平移补偿，确保能够完成物体的稳定抓取。 

### 8.3 改 detector 词汇

```yaml
# configs/demo.yaml
detector:
  type: yoloe                          # yoloe / yolo-world
  model: ${repo}/models/yoloe-11s-seg.pt
  conf: 0.20                           # 置信度阈值（越低 = 越多 detection，但越多误检）

detect_classes: ["banana", "cracker box", "soup can", "cube", "box", "pen", "toy"]
# ↑ 这列表告诉 YOLOE 在开放词汇模式下去找哪些标签
```

### 8.4 改安全阈值

不变量**：`Kinematics.ik`（src/wrc_demo/control/kinematics.py） 的 `limit_margin=0.025` 必须**严格大于** harness 的 `joint_margin=0.02`——任一边单独调都会破坏 IK 和安全校验的边界。**两个一起调**！

```yaml
# configs/demo.yaml
safety:
  workspace:                          # TCP 工作空间 AABB（米）
    min: [0.10, -0.30, -0.01]
    max: [0.50, 0.30, 0.55]
  table_z: 0.0                        # 桌面高度（基坐标系）
  table_clearance: 0.02              # TCP 桌面净空
  max_joint_vel: 1.2                  # rad/s（每 waypoint 强制）
  joint_margin: 0.02                  # rad（URDF 限位内预留）
  watchdog_s: 5.0                     # 感知过期停止时间
  keep_out: []                        # e-stop AABB 列表
```

---

## 9. 加新技能

**前提**：熟悉 Python + Pinocchio + ultralytics。本节是 30 分钟 quick start；要理解底层设计看 `src/wrc_demo/skills/runtime.py`。

### 9.1 加新 skill 的 5 步

所有 skill 加到 `src/wrc_demo/skills/runtime.py` 的 `SkillRuntime` 类（不需要新建 .py）。

#### 步骤 1：写 `skill_<name>()` 方法

```python
# src/wrc_demo/skills/runtime.py
from ..types import SkillError, SafetyViolation

class SkillRuntime:
    # ... 已有方法 ...

    def skill_my_skill(self, foo: str, bar: int = 0) -> dict:
        """一句话描述。Returns: {...}"""
        if not foo:
            raise SkillError("foo must be non-empty")
        # ... 你的逻辑（必须用 self.arm（SafeArm），不直接拿 self.arm.raw）...
        return {"ok": True, "result": "..."}
```

#### 步骤 2：加 `TOOL_SPECS` 条目

```python
# src/wrc_demo/skills/runtime.py
TOOL_SPECS.append({
    "name": "my_skill",
    "description": "...",
    "parameters": {
        "type": "object",
        "properties": {
            "foo": {"type": "string"},
            "bar": {"type": "integer", "default": 0},
        },
        "required": ["foo"],
    },
})
```

#### 步骤 3：动臂技能加到 `_MOTION_SKILLS`

```python
_MOTION_SKILLS = {
    # ... 已有 18 个 ...
    "my_skill",
}
```

**这是唯一会暂停 WorldWatcher 信念融合的地方**——动臂时不暂停，被持物会被错误地重融合到空中位置。

#### 步骤 4：tracing + MCP 暴露自动

`SkillRuntime.execute()` 是单一调度入口；`mcp_server.py` 服务 `TOOL_SPECS` 减去 `_EXCLUDED_TOOLS` 加 `_EXTRA_TOOLS`——加完即可被 LLM / MCP 调用。

#### 步骤 5：可选加 regex 到 `_RULES`

让常见指令走 reflex 快路径（不调 LLM）：

```python
# src/wrc_demo/agent/reflex.py
_RULES.append((
    re.compile(r"^my command pattern\s+(\w+)", re.IGNORECASE),
    "my_skill",
))
```

### 9.2 加新 detector

`src/wrc_demo/perception/detector.py` 实现新 detector 类：

```python
from .detector import Detector

class MyDetector:
    def __init__(self, model_path: str, **kwargs):
        # 加载模型
        ...

    def detect(self, frame) -> list[Detection]:
        # 返回 Detection 列表
        ...
```

在 `apps/demo.py::_make_detector()` 加分支：

```python
if dcfg.type == "my_detector":
    from wrc_demo.perception.my_detector import MyDetector
    return MyDetector(dcfg.model)
```

### 9.3 加新 grasp planner

`src/wrc_demo/grasping/my_planner.py`：

```python
from .selector import Grasp

def plan_my_grasps(fix, cloud, cfg) -> list[Grasp]:
    # 返回 Grasp 列表
    ...
```

在 `SkillRuntime._plan_grasps()` 加层（默认叠加到 camera-frame / graspgenx / obb 三层）。

---

## 10. 架构概览

> **本章是参考材料**——理解 wrc_demo 怎么组织代码的指南。要写代码前先读一遍 §9.1 的流程；要理解为什么这样设计，看 §10.3 关键设计决策。

### 10.1 三级决策（Reflex → Habit → LLM）

wrc_demo 把决策拆成**三级快慢路径**，类似人类的快/慢思考：

```
N cameras ──CameraStream (thread each, latest-frame slot, drop-stale)
   │
   ├── WorldWatcher (thread, ~3 Hz): detector + HSV color tag
   │     └─> BeliefStore (thread-safe): label+color+3D+freshness
   └── StreamServer (MJPEG dashboard): camera grid + narration + object table

chat command ("pick and place pink object")
   ├─ tier 1 REFLEX    模板语法 → skill calls                          (~µs)
   ├─ tier 2 HABIT     经验记忆（hashed-BoW cosine ≥ 0.9）              (~ms)
   └─ tier 3 LLM       原始编排器循环（2-15 s/turn）
        全部 tier 走同一份 safety-gated SkillRuntime
```

**关键机制**：

- **Latest-slot 流式**：消费者永远拿到最新帧；传感器不会落后（`perception/stream.py`）
- **始终热的世界模型**：WorldWatcher 把每个相机的深度 + 外参连续融合到 BeliefStore，让命令解析变成字典查找，不是 observe→detect 往返。动时暂停（避免空中重融合），并向 safety 看门狗心跳
- **颜色不用 CLIP**：检测从 mask HSV 中位数映射成颜色名，存到信念，匹配查询里的颜色词——"pink object" 在闭集 COCO detector 上也工作。VLM 仍可被咨询（tier 3 / advisor），但**永不**走热路径
- **One-call pick-and-place**：`skill_pick_and_place` = resolve → grasp → place → home，整段执行时间 = 机械臂运动时间
- **LazyArm**：MCP gateway 在启动时预热摄像头/detector/世界模型，但电机在第一个 motion 命令之前**不**接通——启动 chat 服务器不能让机器人上电

### 10.2 模块图（精简版）

```
src/wrc_demo/
├── types.py            Frame / Detection / ObjectFix / Grasp / RobotState
├── config.py           YAML profiles (cameras/, arms/, llm/) 合并成 Cfg
│
├── perception/         # 4 个相机后端 + YOLOE detector + 深度对齐
├── calibration/        # 手眼标定（ArUco + Pinocchio FK + LM）
├── memory/             # episodic + belief + grasp outcome
├── control/            # Pinocchio FK/IK + mock + lazy + 真 RS + SafeArm
├── safety/             # fail-closed waypoint 校验
├── grasping/           # 3 层抓取规划
├── agent/              # orchestrator + reflex + advisor + LLM clients + trace
├── skills/              # SkillRuntime + TOOL_SPECS + 业务逻辑（teach、master_arm 等）
└── apps/                # demo / record / viewer / stream_server / mcp_server
```

### 10.3 关键设计决策

| 决策 | 为什么 |
|------|--------|
| **Frame.rgb 是 BGR，depth_m 是米制 float32** | L515（0.25 mm/unit）和 D4xx（1 mm/unit）的单位差异在 baseline 上制造过 bug 类；在相机边界转换让所有下游消费者单位安全 |
| **抓取在基坐标系，不在相机坐标系** | baseline 用相机光线方向推 approach，相机姿态影响抓取质量；这里把 mask 点提升到 3D、变换到基坐标系、那里的 OBB 给 yaw + width + height——相机姿态只影响可见性，不影响抓取几何 |
| **学习抓取默认，分析抓取总在** | `grasp.backend: graspgenx` 把物体基坐标系点云送到 GraspGen-X ZMQ 服务（`scripts/serve_graspgenx.sh`，:5556），把排名后的 6-DoF 抓取**前置**到分析 OBB 候选前面。服务端任何错误都静默回退到 OBB——展位永远不会因为模型服务器死了而卡死 |
| **自有运动学包装** | ReBotArm SDK 的运动学默默读自己的全局 config 文件（忽略你传的 hw_yaml），导致 DM 装 URDF 被加载给 RS 臂（错误的工具坐标系）。我们显式加载 `assets/` 里的 RS URDF |
| **反馈，不 sleep** | baseline 用 `sleep(duration + 0.6)`；RS 电机上 motorbridge 的 `get_state()` 永远不解码 type-0x18 报告帧，所以实位来自 `mechPos`（0x7019）param reads——在此 rig 上验证过 |
| **fail-closed 安全** | SDK 在 IK 之外不执行任何东西。我们的 harness 在每个流式 waypoint 上关闸；抓取下降发生在目标周围的显式豁免圆柱内，让"别碰桌面"和"抓住桌面上的物体"共存 |

### 10.4 模块依赖图

```
            ┌──────────────────────────────────────────────────────────────┐
            │                apps/  (entry points)                         │
            │   demo.py (build_runtime)   mcp_server.py   dashboard_runner │
            └────────────┬──────────────────────┬────────────────┬─────────┘
                         │                      │                │
        ┌────────────────▼─────────┐   ┌────────▼────────┐  ┌────▼─────────┐
        │   agent/  (orchestrator) │   │  skills/        │  │  perception/ │
        │   orchestrator.py        │◄──│  runtime.py     │  │  camera_base │
        │   reflex.py (tier1)      │   │   6 skills      │  │  + cameras/  │
        │   advisor.py  (tier3)    │   │  TOOL_SPECS     │  │  detector    │
        │   llm.py                 │   │  trace auto     │  │  depth_prov  │
        └────────┬─────────────────┘   └────────┬─────────┘  └────┬─────────┘
                 │                            │                │
                 ▼                            ▼                ▼
        ┌─────────────────────────────────────────────────────────────────┐
        │              memory/  +  grasping/  +  control/                 │
        │   BeliefStore   GraspMemory   camera_grasp + obb_grasp + graspgenx│
        │   EpisodicMem   (3-layer)        Kinematics + MockArm + SafeArm  │
        └────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────────────┐
        │                       safety/  (fail-closed)                    │
        │   SafetyHarness.approve(waypoint)  vet_pose()  estop latch   │
        └─────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
              vendored SDK + pyorbbecsdk + ultralytics + pin + motorbridge
```

### 10.5 Trace 时序图（一次 `pick_and_place` 调用）

```
t=0.0s  user  ──→  build_runtime()
                   ├─ Kinematics(urdf, joint_signs)
                   ├─ make_arm(cfg) ── RebotArm.connect()
                   ├─ CameraRig(N) ── Open + warm_up
                   ├─ LockedDetector(YOLOE weights)
                   ├─ EpisodicMemory / BeliefStore / TraceLogger
                   └─ SkillRuntime(...)

t=0.5s  WorldWatcher thread starts (3 Hz detector pass → beliefs)

t=1.0s  user --task "pick up red block"
        AgentOrchestrator.run_task()
        ├─ tier1 REFLEX: regex match ──→ 命中 pick_and_place?  ──→ 执行
        └─ (fallback) tier2 HABIT ──→ tier3 LLM ──→ tool_calls

t=1.1s  SkillRuntime.execute("pick_and_place")
        ├─ tracer.start()
        ├─ belief.find("red block")  ── wait deadline 5s
        ├─ _plan_grasps() ── camera + graspgenx + obb ── re-rank
        ├─ select_grras() ── IK ── harness pre-vet
        ├─ safe_arm.move_joints() ── each 50Hz waypoint ── SafetyHarness.approve
        ├─ gripper close two-stage ── stall detection
        ├─ lift + place + home
        └─ tracer.finish()  ── trace.jsonl + keyframes + narration

t=N.5s  report.success ── print "✓ done — arm parked at home"
```

### 10.6 Grasp 规划三层对比

| Layer | 触发条件 | 数据源 | 输出 | 失败行为 |
|-------|----------|--------|------|----------|
| **1. camera-frame planner** (`camera_grasp.py::plan_grasp_from_mask`) | 总是——只要 detection 有 mask + depth | segmentation mask + depth → `cv2.minAreaRect` → depth-quantile back-project → camera-frame Grasp | `Grasp(approach, position, width, height)` | layer 2 |
| **2. GraspGen-X ZMQ** (`graspgenx_backend.py`) | `grasp.backend == "graspgenx"` 且 server :5556 可达 | base-frame point cloud → learned 6-DoF grasp | `Grasp` 列表（top-k=32）| server timeout / disconnect → silent fallthrough |
| **3. analytic OBB** (`obb_grasp.py::plan_grasps_from`) | always | base-frame OBB (yaw, width, height) | `Grasp` 列表 | (no failure — always returns) |

所有 layer 输出同一 `Grasp` dataclass；`GraspOutcomeMemory` 跨 layer re-rank；`select_grasp()` 做 jaw-width filter + IK walk + harness pre-vet（含 7 样本沿下降段）。

### 10.7 验证状态（截至 2026-08-28）

- **17 单元 + 集成测试**通过，1 个 skipped（mock stack，约 30s）
- **完整 suite**：约 290 单元 + 集成测试通过（hardware 标记默认 deselected）
- **2 次对抗性多视角 review**：2026-07-16（4 reviewer × skeptic verification，29 confirmed defects）+ 2026-07-18 livestreaming redesign（45-agent workflow，33 confirmed findings）
- **真机验证**：L515 streaming、RobStride mechPos param reads（can0 read-only）、YOLO inference（CUDA, GB10）、GraspGen-X 后端（first-light 验证）
- **未验证**：真机 motion（需要现场夹爪重新验证 + 手眼标定）

---