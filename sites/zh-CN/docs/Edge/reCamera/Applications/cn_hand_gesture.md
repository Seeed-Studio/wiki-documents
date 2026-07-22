---
title: 将 MediaPipe 手势识别模型移植到 reCamera
description: 本文档介绍如何将 Google 官方 MediaPipe 手势识别套件完整移植到 reCamera（Sophon/Bitmain SG200X）上，构建“手掌检测 → 关键点检测 → 特征嵌入 → 分类”的推理流水线，并通过 UDP 将结果流式传输到 PC 进行可视化。
keywords:
  - reCamera
  - 手势识别
  - MediaPipe
  - TPU 推理
  - INT8 量化
  - UDP 流式传输
slug: /recamera_hand_gesture
sku: 102991897, 100029708, 108990120
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 18
last_update:
  date: 06/26/2026
  author: Xuanjun Zhu
createdAt: '2026-06-26'
updatedAt: '2026-06-26'
url: https://wiki.seeedstudio.com/cn/recamera_hand_gesture/
---

# 将 MediaPipe 手势识别模型移植到 reCamera

## 介绍

本项目演示如何将 Google 官方的 **MediaPipe 手势识别套件** 完整移植到 **reCamera** 上，实现实时手势识别，并通过 UDP 将视频和识别结果流式传输到 PC 进行可视化。

系统可以识别 **8 种手势类别**（None / Closed_Fist / Open_Palm / Pointing_Up / Thumb_Down / Thumb_Up / Victory / ILoveYou），同时输出 **21 个手部关键点** 以及 **左右手（handedness）** 信息，适用于以下应用场景：

- **智能家居手势控制**：通过预设手势控制灯光、窗帘和家电开关，无需语音或手机 App。
- **工业无接触交互**：戴手套或双手被占用的工人可以通过简单手势向设备发送指令。
- **教育与展陈交互**：在科技馆或展览馆中，参观者可通过手势触发多媒体内容，获得沉浸式体验。
- **无障碍辅助**：为听力障碍或行动不便用户提供基于手势的设备控制入口。

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/hand_gesture/test.gif" />
</div>
## 硬件准备

要运行本演示，需要以下硬件：

- **一台 reCamera 设备**（支持所有 reCamera 型号）
- **一台 PC**（用于运行 Python 接收端进行可视化；必须与 reCamera 处于同一局域网）

你可以根据部署需求选择 **任意版本的 reCamera**：

- reCamera 2002 系列（Wi-Fi）
- reCamera Gimbal
- reCamera HQ PoE（以太网 + PoE）

> **注意：**  
> PoE 版本不支持 Wi-Fi，必须通过支持 PoE 的交换机接入同一局域网。

<table align="center">
 <tr>
  <th>reCamera 2002 系列</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ PoE</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## 工作原理


### 模型转换流程（TFLite → ONNX → cvimodel）

从官方 MediaPipe 仓库下载 TFLite 格式的模型，需要将其转换为 reCamera TPU 支持的 `.cvimodel` 格式：

```
MediaPipe TFLite (FLOAT16)
    │  tf2onnx (--channel_format none, keep NHWC)
    ▼
ONNX (FLOAT32, NHWC)  ← numerical reference (cos=1.0 vs TFLite)
    │  tpu-mlir model_transform + model_deploy
    ├─ BF16
    └─ INT8 (per-channel + real-data calibration)
        ▼
CVIMODEL (cv181x)
```

#### 精度验证

转换完成后，通过三方对比（TFLite vs ONNX vs cvimodel）对模型进行验证：

| 模型 | 输出 | BF16 cos | INT8 cos |
|------|------|----------|----------|
| detector | scores | 1.0000 | 0.9896 |
| detector | boxes | 0.9999 | 0.9748 |
| landmark | lm63 | 1.0000 | 0.9999 |
| landmark | **world63** | 0.9997 | **0.8098**  |
| embedder | embedding | 1.0000 | 0.9992 |
| classifier | probs | 1.0000 | 0.9978 |

> **注意**：INT8 量化后，`world63`（世界坐标关键点）的精度有一定损失（cos=0.81），但端到端的手势分类结果与 TFLite 保持一致（类别判断可靠）。如果你的应用对世界坐标精度高度敏感，建议使用该模型的 BF16 版本。


## 构建示例

要构建本示例，你需要：

1. 在 PC 上交叉编译 C++ 程序
2. 在 reCamera 上运行编译好的可执行文件
3. 在 PC 上运行 Python 接收脚本

### 步骤 1：编译 C++ 程序

:::note
在构建本方案之前，请确保已按照[主项目文档](https://wiki.seeedstudio.com/cn/recamera_develop_with_c_cpp/)配置好 **ReCamera-OS** 环境（版本 0.2.1 或更高），包括 SDK 路径和交叉编译工具链。
:::

设置交叉编译工具链环境变量：

```bash
export PATH='current compile chain path'/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

克隆[仓库](https://github.com/RobotXTeam/sscma-example-sg200x/tree/main)，并进入对应的 solution 目录进行构建：

```bash
git clone https://github.com/RobotXTeam/sscma-example-sg200x.git
cd sscma-example-sg200x/solutions/sesg-project/hand_gesture
export SG200X_SDK_PATH='current clone path'/sg2002_recamera_emmc
rm -rf build && mkdir build && cd build
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-std=c++17" ..
make -j$(nproc)
```

编译生成的可执行文件位于：`build/hand_gesture`

### 步骤 2：准备模型文件

本示例需要 4 个 `.cvimodel` 模型文件（INT8 量化版本），已在[仓库](https://github.com/RobotXTeam/sscma-example-sg200x/tree/main/solutions/sesg-project/hand_gesture/model)中提供。如果你需要自行转换模型，请参考[模型转换指南](https://wiki.seeedstudio.com/cn/recamera_model_conversion/)：

| 模型 | 文件名 | 说明 |
|------|--------|------|
| 手掌检测 | `hand_detector_cv181x_int8.cvimodel` | 模型 1：SSD 手掌检测 |
| 关键点检测 | `hand_landmarks_detector_cv181x_int8.cvimodel` | 模型 2：21 个关键点 |
| 手势特征嵌入 | `gesture_embedder_cv181x_int8.cvimodel` | 模型 3：128 维特征嵌入 |
| 手势分类 | `canned_gesture_classifier_cv181x_int8.cvimodel` | 模型 4：8 类手势分类 |

将编译好的可执行文件和模型文件上传到 reCamera 的 `/home/recamera/` 目录：

```bash
scp hand_gesture hand_detector_cv181x_int8.cvimodel hand_landmarks_detector_cv181x_int8.cvimodel \
    gesture_embedder_cv181x_int8.cvimodel canned_gesture_classifier_cv181x_int8.cvimodel \
    recamera@<reCamera_IP>:/home/recamera/ # Make sure the PC and reCamera are on the same network segment, then replace <reCamera_IP> with the corresponding IP address
```

### 步骤 3：配置 reCamera

:::warning
在运行 C++ 程序之前，必须先停止默认的 Node-RED 服务，因为它们会占用相机资源。请通过 SSH 运行以下命令：
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 步骤 4：在 reCamera 上运行可执行文件

通过 SSH 登录 reCamera，授予执行权限并运行：

```bash
cd /home/recamera/
chmod +x hand_gesture
```

#### 参数说明

| 参数 | 说明 | 默认值 |
|------|------|--------|
| `palm_model` | 手掌检测模型（必选） | - |
| `landmark_model` | 关键点检测模型（必选） | - |
| `embedder_model` | 手势特征嵌入模型（必选） | - |
| `classifier_model` | 手势分类模型（必选） | - |
| `min_score` | 手掌检测阈值 | `0.5` |
| `udp_ip` | PC 的 IP 地址（启用 UDP 流式传输） | - |
| `udp_port` | UDP 端口号 | - |
| `jpeg_w` | JPEG 流视频帧宽度 | `320` |
| `jpeg_h` | JPEG 流视频帧高度 | `240` |
| `jpeg_fps` | JPEG 流视频帧率 | `10` |
| `skip_multi` | 多手（≥2）时，每 N 帧运行一次推理 | `3` |
| `skip_single` | 单手时，每帧运行一次推理 | `1` |

#### 示例命令

**基础用法（无 UDP 流，仅本地推理）**：

```bash
sudo ./hand_gesture \
    hand_detector_cv181x_int8.cvimodel \
    hand_landmarks_detector_cv181x_int8.cvimodel \
    gesture_embedder_cv181x_int8.cvimodel \
    canned_gesture_classifier_cv181x_int8.cvimodel
```

**完整用法（UDP 流式传输 + 自定义参数）**：

```bash
sudo ./hand_gesture \
    hand_detector_cv181x_int8.cvimodel \
    hand_landmarks_detector_cv181x_int8.cvimodel \
    gesture_embedder_cv181x_int8.cvimodel \
    canned_gesture_classifier_cv181x_int8.cvimodel \
    0.5 \
    192.168.XX.XX 5001 \
    320 240 10 \
    3 1
```

:::note
1. 请将 `192.168.XX.XX` 替换为与你的 reCamera 处于同一网络的 PC 实际 IP 地址。只有同时提供 `udp_ip` 和 `udp_port` 时才会启用 UDP 流式传输。
2. 如果程序显示 “[Heartbeat] Before the first retrieveFrame(RGB888) call...” 后卡住，请重启 reCamera。
:::

### 步骤 5：在 PC 上运行 Python 接收端

在 PC 上，确保已安装所需的 Python 库：

```bash
pip install opencv-python numpy
```

进入解决方案目录并运行接收端脚本：

```bash
cd sscma-example-sg200x/solutions/sesg-project/hand_gesture
python3 tools/udp_receiver.py 5001
```

PC 端会显示一个实时视频窗口，包括：

- **JPEG 视频流**
- **手掌检测框**（蓝色矩形）
- **21 个手部关键点**（红点 + 连接骨架）
- **手势分类标签**（左上角显示手势名称和置信度）
- **左右手信息**

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/hand_gesture/test.png" />
</div>
<p align="center">PC 端实时手势识别结果</p>

## 预期输出

### 在 reCamera 终端上

程序运行后，会显示推理性能日志：

```log

[Perf] FPS=5.88 (inference=2.94) | palm=120.7ms | landmark=169.1ms | gesture=0.6ms | total=290.4ms | avg_hands=1.00
[Gesture] Open_Palm (70%) [R] palm=(0.43,0.34,0.69,0.69) score=0.85
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=80.7
[DET-DIAG] setInput ret=0, run ret=0
[Gesture] Open_Palm (70%) [R] palm=(0.45,0.36,0.72,0.73) score=0.85
[Gesture] Open_Palm (70%) [R] palm=(0.45,0.36,0.72,0.73) score=0.85
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=82.0
[DET-DIAG] setInput ret=0, run ret=0
[Gesture] Open_Palm (60%) [R] palm=(0.45,0.41,0.72,0.77) score=0.88
[Gesture] Open_Palm (60%) [R] palm=(0.45,0.41,0.72,0.77) score=0.88
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=81.9
[DET-DIAG] setInput ret=0, run ret=0
[Gesture] Open_Palm (60%) [R] palm=(0.47,0.42,0.73,0.76) score=0.81
[Perf] FPS=5.93 (inference=2.97) | palm=120.6ms | landmark=177.2ms | gesture=0.6ms | total=298.4ms | avg_hands=1.00
[Gesture] Open_Palm (60%) [R] palm=(0.47,0.42,0.73,0.76) score=0.81
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=81.8
```

> **注意**：手掌模型需要 192×192 的输入，这低于 VPSS 的最小缩放分辨率。因此，CH0 使用 640×480（VPSS 支持），模型在内部通过软件 letterbox 将其缩放到 192×192。

### 摄像头访问错误

如果你看到 "No camera" 或 "Camera device not found" 错误：

- 确保 Node-RED 服务已停止（参见步骤 3）
- 检查摄像头连接

### UDP 连接失败

如果 PC 未接收到数据：

- 确认 PC 和 reCamera 在同一网络中
- 检查 PC 上的防火墙设置
- 确保 UDP 端口未被阻塞
- 使用 `ping` 测试设备之间的连通性

### 手势识别置信度异常

如果识别出的手势置信度明显不对：

- 确认分类器模型之后的 **C++ softmax 补丁** 已正确实现
- 检查是否错误地使用了包含 Softmax 的 ONNX 输出，而不是使用 cvimodel 输出（logits）

## C++ 代码结构

```
hand_gesture/
├── main/
│   ├── main.cpp                  # Entry: get frame → mmap → inference → UDP push
│   ├── hand_detector.{h,cpp}     # Model 1: palm detection (SSD post-processing + NMS)
│   ├── hand_landmarker.{h,cpp}   # Model 2: 21 landmarks (ROI warpAffine)
│   ├── gesture_recognizer.{h,cpp}# Model 3+4: embedder + classifier (with softmax patch)
│   ├── gesture_math.{h,cpp}      # letterbox / math utilities
│   ├── engine_utils.h            # tensor packing helpers
│   └── hand_types.h              # data structures + UDP POD protocol
├── tools/udp_receiver.py         # Python host receiver
└── CMakeLists.txt
```

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