---
description: 本维基展示如何在 NVIDIA Jetson Thor 上结合 reBot Arm B601 部署本地语音控制机械臂抓取系统。内容涵盖 Jetson 环境配置、Whisper 语音识别、Ollama 本地大模型部署、OpenWebUI 集成、基于 GraspNet 的抓取规划，以及通过语音指令控制机械臂完成抓取任务。
title: 使用 Nvidia Jetson Thor 语音控制 reBot Arm B601
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg
slug: /voice_control_rebot_arm
sku: 100060965 | 100046482
last_update:
  date: 05/18/2026
  author: youjiang
createdAt: '2026-06-15'
url: https://wiki.seeedstudio.com/cn/voice_control_rebot_arm/
updatedAt: '2026-06-16'
---

# 使用 Nvidia Jetson Thor 语音控制 reBot Arm B601


## 介绍

大型语言模型（LLMs）通过支持自然语言交互，让机器人系统变得更加直观。结合机器人视觉和抓取规划，用户可以使用简单的语音指令来控制机器人。
<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_controlled_rebot_arm/cover_page.png" />
</div>
在本教程中，我们将在 NVIDIA Jetson Thor 平台上部署一个完整的语音控制机械臂抓取系统。 

## 特性

* 在 Jetson Thor 上完全本地推理
* 使用 Whisper 进行语音交互
* 由 Ollama 驱动的本地大语言模型
* 基于浏览器的 OpenWebUI 界面
* 使用 GraspNet 的 6 自由度抓取检测
* 实时机械臂控制

## 工作流程
<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_controlled_rebot_arm/workflow.png" />
</div>

## 硬件准备

### 所需硬件

- Nvidia Jetson Thor（已安装 JetPack 7.x）
- [reBot Arm B601 DM](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html)
- [USB-to-CAN adapter](https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html)
- Orbbec Gemini 2 RGBD 相机
- reSpeaker
- 机械臂电源和 USB 线缆
- USB 按钮（可选）

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reBot Arm B601 </th>
        <th> NVIDIA® Jetson AGX Thor™ Developer Kit </th>
        <th> Orbbec Gemini 2 RGBD Camera </th>
        <th> reSpeaker Flex XVF3800 Linear-4 </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210h_1e029c0a-706b-4f38-a34b-0255801987bg.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-p-6738.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>


### 硬件连接

1. 将相机连接到 Jetson Thor 的 USB 接口。
2. 通过 CAN2USB 模块将 reBot Arm RS 连接到 Jetson Thor。
3. 将 USB 麦克风连接到 Jetson Thor。
4. 打开所有设备电源。


## 安装 Ollama

### 步骤 1. 安装 Ollama

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### 步骤 2. 下载语言模型

```bash
ollama pull nemotron3:33b
```

### 步骤 3. 验证 Ollama

```bash
ollama run nemotron3:33b
```

## 部署 OpenWebUI

### 步骤 1. 启动 OpenWebUI

```bash
docker run -d -p 4000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -e OLLAMA_BASE_URL=http://host.docker.internal:11434 \
  -v open-webui_tt:/app/backend/data   --name open-webui_tt \
  ghcr.io/open-webui/open-webui:main
```

:::info
注意：官方的 Open WebUI Docker 镜像不包含按键说话（按钮触发语音录制）功能。如果你希望启用按键说话功能，请改用下面的 Docker 镜像。
:::

### 步骤 2. 访问界面

打开浏览器并访问：

```text
http://<Jetson-IP>:3000
```

### 步骤 3. 连接 Ollama

在 OpenWebUI 中配置 Ollama 的端点。

```text
http://host.docker.internal:11434
```

:::info
如果 Open WebUI 无法正常连接 Ollama，请修改 Ollama 的 systemd 服务配置，然后重启 Ollama 服务：

<details>

<summary> /etc/systemd/system/ollama.service </summary>

``` bash
[Unit]
Description=Ollama Service
After=network-online.target

[Service]
ExecStart=/usr/local/bin/ollama serve
User=ollama
Group=ollama
Restart=always
RestartSec=3
Environment="PATH=/home/seeed/.local/bin:/home/seeed/.local/bin:/home/seeed/.nvm/versions/node/v22.22.2/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin"
Environment="OLLAMA_HOST=0.0.0.0:11434"

[Install]
WantedBy=default.target
```

</details>
:::

### 步骤 4. 配置工具

`Workspace` --> `Tools` --> `New Tool`

<details>

<summary> robot arm tools </summary>

``` python
"""
title: Grasp Web Robot Arm
author: seeedstudio
version: 0.3.0
description: Open WebUI tools for controlling grasp_web.py robot arm HTTP API.
requirements: requests
"""

import os
import requests
from typing import Dict, Any, List, Optional


class Tools:
    def __init__(self):
        self.base_url = os.getenv(
            "GRASP_BASE", "http://host.docker.internal:8090"
        ).rstrip("/")
        self.timeout = float(os.getenv("GRASP_TIMEOUT", "20"))

    def _json_or_text(self, r: requests.Response):
        try:
            return r.json()
        except Exception:
            return r.text

    def _get(self, path: str) -> Dict[str, Any]:
        try:
            r = requests.get(f"{self.base_url}{path}", timeout=self.timeout)
            return {
                "ok": r.ok,
                "status_code": r.status_code,
                "data": self._json_or_text(r),
            }
        except Exception as e:
            return {"ok": False, "error": str(e)}

    def _post(self, path: str, payload: Optional[dict] = None) -> Dict[str, Any]:
        try:
            r = requests.post(
                f"{self.base_url}{path}",
                json=payload or {},
                timeout=self.timeout,
            )
            return {
                "ok": r.ok,
                "status_code": r.status_code,
                "data": self._json_or_text(r),
            }
        except Exception as e:
            return {"ok": False, "error": str(e)}

    # -------------------------
    # 状态查询
    # -------------------------

    def robot_state(self) -> Dict[str, Any]:
        """
        读取机器人状态：关节角度、末端位姿、夹爪状态，包括位置、速度、力矩、是否夹住。
        这是只读操作，不会驱动机械臂。
        """
        return self._get("/robot/state")

    # -------------------------
    # 基础操作
    # -------------------------

    def reset_robot(self) -> Dict[str, Any]:
        """
        复位机器人：停止当前执行、松开夹爪、机械臂回原点。
        注意：这会驱动真实机械臂运动。
        """
        return self._post("/reset", {})

    def move_ready(self) -> Dict[str, Any]:
        """
        移动机械臂到预定义就绪位：张开夹爪并移动到就绪姿态。
        注意：这会驱动真实机械臂运动。
        """
        return self._post("/ready", {})

    # -------------------------
    # 目标类别设置
    # -------------------------

    def set_target_class(self, class_name: str) -> Dict[str, Any]:
        """
        设置目标类别，例如 bottle、cup、apple。
        设置后后端会自动触发推理更新。

        传入空字符串 "" 可以取消类别过滤，扫描全场所有检测到的物体。
        """
        if class_name is None:
            return {"ok": False, "error": "class_name must be a string"}

        return self._post("/target", {"class_name": class_name})

    def clear_target_filter(self) -> Dict[str, Any]:
        """
        取消目标类别过滤，扫描全场所有检测到的物体。
        """
        return self._post("/target", {"class_name": ""})

    # -------------------------
    # 夹爪控制
    # -------------------------

    def gripper_state(self) -> Dict[str, Any]:
        """
        读取夹爪状态：位置、速度、力矩、是否夹住。
        这是只读操作，不会驱动机械臂。
        """
        return self._post("/gripper", {"action": "state"})

    def gripper_open(self, distance_m: float = 0.09) -> Dict[str, Any]:
        """
        张开夹爪到指定距离。

        参数：
        - distance_m: 张开距离，单位米，默认 0.09

        注意：这会驱动真实夹爪。
        """
        if distance_m < 0:
            return {"ok": False, "error": "distance_m must be >= 0"}

        return self._post(
            "/gripper",
            {
                "action": "open",
                "distance_m": distance_m,
            },
        )

    def gripper_close(self) -> Dict[str, Any]:
        """
        闭合夹爪，使用非阻塞力矩模式。
        注意：这会驱动真实夹爪。
        """
        return self._post("/gripper", {"action": "close"})

    def gripper_release(self) -> Dict[str, Any]:
        """
        释放夹爪，松开并解除 HOLDING 状态。
        注意：这会驱动真实夹爪。
        """
        return self._post("/gripper", {"action": "release"})

    # -------------------------
    # 关节控制
    # -------------------------

    def joint_jog(
        self,
        joint: str,
        delta_deg: float,
        duration_s: float = 2.0,
        safety_margin_deg: float = 5.0,
    ) -> Dict[str, Any]:
        """
        单关节点动控制。

        参数：
        - joint: joint1 ~ joint6
        - delta_deg: 相对旋转角度，单位度。正数为正方向，负数为负方向
        - duration_s: 运动时间，单位秒
        - safety_margin_deg: 限位安全边距，单位度

        注意：这会驱动真实机械臂。
        """
        valid_joints = {"joint1", "joint2", "joint3", "joint4", "joint5", "joint6"}

        if joint not in valid_joints:
            return {"ok": False, "error": "joint must be one of joint1 ~ joint6"}

        if duration_s <= 0:
            return {"ok": False, "error": "duration_s must be greater than 0"}

        if safety_margin_deg < 0:
            return {"ok": False, "error": "safety_margin_deg must be >= 0"}

        return self._post(
            "/joint/jog",
            {
                "joint": joint,
                "delta_deg": delta_deg,
                "duration_s": duration_s,
                "safety_margin_deg": safety_margin_deg,
            },
        )

    def move_joints(
        self,
        joints_rad: List[float],
        duration_s: float = 3.0,
    ) -> Dict[str, Any]:
        """
        一次性设置所有 6 个关节的绝对位置。

        参数：
        - joints_rad: 6 个关节角，单位弧度
        - duration_s: 运动时间，单位秒

        关节顺序：
        [joint1, joint2, joint3, joint4, joint5, joint6]

        注意：这会驱动真实机械臂。
        """
        if not isinstance(joints_rad, list) or len(joints_rad) != 6:
            return {"ok": False, "error": "joints_rad must be a list of 6 numbers"}

        if duration_s <= 0:
            return {"ok": False, "error": "duration_s must be greater than 0"}

        return self._post(
            "/joint/move",
            {
                "joints_rad": joints_rad,
                "duration_s": duration_s,
            },
        )

    def move_zero_joints(self) -> Dict[str, Any]:
        """
        将所有关节移动到 0 位。
        注意：这会驱动真实机械臂。
        """
        return self.move_joints(
            joints_rad=[0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            duration_s=3.0,
        )

    def move_ready_joints(self) -> Dict[str, Any]:
        """
        移动到示例就绪关节位：
        [0.0, -1.0, -1.5, 0.5, 0.0, 0.0]

        注意：这会驱动真实机械臂。
        """
        return self.move_joints(
            joints_rad=[0.0, -1.0, -1.5, 0.5, 0.0, 0.0],
            duration_s=3.0,
        )

    # -------------------------
    # 末端位姿控制
    # -------------------------

    def move_pose(
        self,
        x: float,
        y: float,
        z: float,
        roll: float,
        pitch: float,
        yaw: float,
        duration: float = 3.0,
    ) -> Dict[str, Any]:
        """
        末端位姿控制。服务端会先做 IK 规划，不可达则返回错误。

        参数：
        - x, y, z: 末端位置，单位米
        - roll, pitch, yaw: 末端姿态，单位弧度
        - duration: 运动时间，单位秒

        建议先调用 ready 或 joint/move 到可达位置后，再使用 move_pose。

        注意：这会驱动真实机械臂。
        """
        if duration <= 0:
            return {"ok": False, "error": "duration must be greater than 0"}

        return self._post(
            "/move/pose",
            {
                "x": x,
                "y": y,
                "z": z,
                "roll": roll,
                "pitch": pitch,
                "yaw": yaw,
                "duration": duration,
            },
        )

    def move_ready_pose(self) -> Dict[str, Any]:
        """
        移动到默认末端就绪位：
        x=0.25, y=0.0, z=0.35, roll=0.0, pitch=1.2, yaw=0.0

        注意：这会驱动真实机械臂。
        """
        return self.move_pose(
            x=0.25,
            y=0.0,
            z=0.35,
            roll=0.0,
            pitch=1.2,
            yaw=0.0,
            duration=3.0,
        )

    def move_near_current_pose(self) -> Dict[str, Any]:
        """
        移动到从零位出发通常可达的保守末端位：
        x=0.260, y=0.0, z=0.20, roll=0.0, pitch=0.0, yaw=0.0

        注意：这会驱动真实机械臂。
        """
        return self.move_pose(
            x=0.260,
            y=0.0,
            z=0.20,
            roll=0.0,
            pitch=0.0,
            yaw=0.0,
            duration=2.0,
        )

    # -------------------------
    # 底座点动
    # -------------------------

    def base_jog(
        self,
        delta_deg: float,
        duration_s: float = 2.0,
    ) -> Dict[str, Any]:
        """
        底座点动。

        参数：
        - delta_deg: 底座旋转角度，单位度。正数为正方向，负数为负方向
        - duration_s: 运动时间，单位秒

        注意：这会驱动真实机械臂底座。
        """
        if duration_s <= 0:
            return {"ok": False, "error": "duration_s must be greater than 0"}

        return self._post(
            "/base_jog",
            {
                "delta_deg": delta_deg,
                "duration_s": duration_s,
            },
        )

    # -------------------------
    # 一键自动抓取
    # -------------------------

    def auto_grasp(
        self,
        class_name: str = "bottle",
        max_retries: int = 10,
        retry_interval_s: float = 1.5,
    ) -> Dict[str, Any]:
        """
        一键自动抓取。

        流程：
        1. 设置目标类别
        2. 自动循环推理
        3. 检测到目标后执行夹取

        后端会在后台运行抓取流程。
        可通过 robot_state 查看进度。

        参数：
        - class_name: 目标类别，例如 bottle。空字符串表示扫描全场
        - max_retries: 最大重试次数
        - retry_interval_s: 每次重试间隔，单位秒

        注意：这会驱动真实机械臂。
        """
        if max_retries <= 0:
            return {"ok": False, "error": "max_retries must be greater than 0"}

        if retry_interval_s <= 0:
            return {"ok": False, "error": "retry_interval_s must be greater than 0"}

        return self._post(
            "/auto_grasp",
            {
                "class_name": class_name,
                "max_retries": max_retries,
                "retry_interval_s": retry_interval_s,
            },
        )

    # -------------------------
    # 视频流
    # -------------------------

    def stream_url(self) -> Dict[str, Any]:
        """
        返回 MJPEG 视频流地址。
        不会驱动机械臂。
        """
        return {
            "ok": True,
            "stream_url": f"{self.base_url}/stream.mjpg",
        }
```

</details>


## 部署 reBot Arm 后端服务

### 步骤 1. 安装系统软件包和 Miniconda

```bash
sudo apt update
sudo apt install -y git wget curl build-essential cmake libusb-1.0-0-dev python3-pip

wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

### 步骤 2. 克隆项目

```bash
git clone https://github.com/jjjadand/reBot-DevArm-Grasp.git rebot_grasp-jetson
cd rebot_grasp-jetson
```

如果你使用的是内部软件包而不是公共仓库，请将该项目目录复制到 Jetson 上，并在项目根目录下运行剩余命令。

### 步骤 3. 创建 Python 环境

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

### 步骤 4. 安装适用于 Jetson 的 PyTorch

不要在 Jetson 上安装通用的 PyPI CPU/GPU PyTorch 软件包。请安装与你的 JetPack、Python 和 CUDA 版本匹配的 wheel。对于 reComputer 用户，你也可以参考专门的指南：[Install Pytorch for reComputer Jetson](https://wiki.seeedstudio.com/cn/install_torch_on_recomputer/)。

常见的起点包括：

```bash
# JetPack 6.x, CUDA 12.x, Python 3.10
pip install --extra-index-url https://pypi.jetson-ai-lab.io/jp6/cu126 torch torchvision

# JetPack 7.x / Thor, CUDA 13.x, Python 3.12
# pip install --extra-index-url https://pypi.jetson-ai-lab.io/sbsa/cu130 torch torchvision
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

### 步骤 5. 安装 Python 依赖

```bash
pip install -r requirements-graspnet-jetson.txt
```

### 步骤 6. 安装机器人、GraspNet 和 GraspNet API SDK

```bash
mkdir -p sdk

git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
pip install -e sdk/reBotArm_control_py

git clone https://github.com/graspnet/graspnet-baseline.git sdk/graspnet-baseline
git clone https://github.com/graspnet/graspnetAPI.git sdk/graspnetAPI
pip install -e sdk/graspnetAPI
```

从 GraspNet 下载页面下载 GraspNet 预训练 checkpoint，并将其放在这里：

```text
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

### 步骤 7. 设置 CUDA 路径并构建 GraspNet CUDA 算子

为你的 JetPack 版本设置 CUDA 路径：

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

如果之后更改了 JetPack、Python、CUDA 或 PyTorch，请使用以下命令重新构建：

```bash
bash scripts/install_graspnet_cuda_ops.sh --force
```

### 步骤 8. 安装 Orbbec 相机 SDK

该项目包含一个辅助工具，用于将 `pyorbbecsdk2` 安装到当前激活的 Python 环境中：

```bash
bash scripts/install_pyorbbecsdk.sh
```

如果你需要在本地构建 SDK，请先克隆源码树并运行源码模式：

```bash
git clone https://github.com/orbbec/pyorbbecsdk.git sdk/pyorbbecsdk
bash scripts/install_pyorbbecsdk.sh --from-source
```

当 SDK 源码树可用时，安装 Orbbec udev 规则：

```bash
sudo bash sdk/pyorbbecsdk/scripts/env_setup/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

### 步骤 9. 在目标 Jetson 上下载 YOLO 权重并导出 TensorRT

TensorRT 引擎文件是与设备相关的。务必在将要运行演示的 Jetson 上导出 `.engine`。

```bash
mkdir -p models
wget https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n-seg.pt -O models/yolo11n-seg.pt

yolo export model=models/yolo11n-seg.pt format=engine imgsz=640 half=True device=0 workspace=4
```

预期输出为：

```text
models/yolo11n-seg.engine
```

如果在你的平台上 FP16 导出失败，请在导出时去掉 `half=True`：

```bash
yolo export model=models/yolo11n-seg.pt format=engine imgsz=640 device=0 workspace=4
```

## 验证与标定

在尝试实际抓取之前，请按顺序运行以下检查。

**1. 检查 RGB-D 相机**

```bash
conda activate graspnet
cd ~/rebot_grasp-jetson

python scripts/verify_pyorbbec_stream.py
python scripts/verify_pyorbbec_stream.py --preview --seconds 10
```

纯文本检查应报告 RGB 和深度帧信息。预览检查在有桌面显示器可用时应显示 RGB 和深度窗口。

**2. 检查机器人连接**

首先以只读模式启动：

```bash
python scripts/verify_rebot_arm_motion.py --read-only
```

然后在确认机械臂运动路径安全后，运行一个小幅度的关节 6 点动：

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

**4. 执行手眼标定（眼在手上）**

本项目使用手眼标定：相机安装在末端执行器上，ArUco 标记固定在桌面上。默认配置期望使用 `DICT_4X4_50`、ID `0`、0.1 m 的标记。仓库中包含可打印的标记文件，例如 `aruco100x100.pdf`。

自动采集：

```bash
python scripts/collect_handeye_eih.py
```

带重力补偿的手动采集：

```bash
python scripts/collect_handeye_eih.py --manual
```

标定结果保存在当前激活相机目录下：

```text
config/calibration/orbbec_gemini2/hand_eye.npz
config/calibration/orbbec_gemini2/intrinsics.npz
```

验证已保存的标定结果：

```bash
python scripts/verify_handeye_calibration.py
```

每当相机支架、夹爪、ArUco 板尺寸或桌面几何形状发生变化时，都需要重新标定。

## 启动应用程序 

Web UI 是推荐的首选用户界面。它提供实时 MJPEG 视频、目标选择、抓取预览、真实抓取执行、补偿调节、基座点动、夹爪控制、就绪姿态和复位操作。

先以预览模式启动。此模式不会执行真实的机器人运动：

```bash
conda activate graspnet
cd ~/rebot_grasp-jetson

python scripts/grasp_web.py \
  --host 0.0.0.0 \
  --port 8000 \
  --num-point 12000 \
  --cloud-crop-nsample 32
```

在浏览器中打开 Web UI：

```text
http://<jetson_ip>:8000
```

使用预览模式确认相机视频流、YOLO 检测、目标过滤和抓取点生成。在 Web UI 中点击推理或刷新控件以更新 GraspNet 预览。

打开 `Open WebUI` 页面（`http://<jetson_ip>:4000`）。如果你在聊天中启用了 Robot Arm Tools，你可以直接使用自然语言命令控制机械臂。

## 功能演示

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/V1_ksIhJgkQ" title="Voice Control reBot Arm B601 by Nvidia Jetson Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考资料

- https://docs.nvidia.com/jetson/agx-thor-devkit/user-guide/latest/index.html
- https://github.com/Seeed-Projects/reBot-DevArm
- https://github.com/graspnet/graspnet-baseline.git
- https://github.com/vectorBH6/reBotArm_control_py
- https://github.com/orbbec/pyorbbecsdk.git
- https://wiki.seeedstudio.com/cn/install_torch_on_recomputer/

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
