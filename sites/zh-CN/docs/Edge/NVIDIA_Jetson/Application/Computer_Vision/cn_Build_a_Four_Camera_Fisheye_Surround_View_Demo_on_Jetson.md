---
description: 在 Jetson 上构建一个四摄像头鱼眼环视演示。实时拼接俯视 BEV 用于底盘定位，使用 YOLO 辅助机械臂抓取，并使用 VLM 帮助理解场景。
title: 在 Jetson 上构建四摄像头鱼眼环视演示
keywords:
  - Jetson
  - 计算机视觉
  - 环视
  - 鱼眼
  - BEV
  - 俯视图
  - YOLO
  - VLM
  - 机械臂
  - reComputer
image: https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif
slug: /jetson_fisheye_surround_view_demo
sku: 100066562
last_update:
  date: 08/19/2026
  author: haochen
createdAt: '2026-08-18'
updatedAt: '2026-08-19'
url: https://wiki.seeedstudio.com/cn/jetson_fisheye_surround_view_demo/
---

## 介绍

本项目在 NVIDIA Jetson 上展示了一个**四摄像头鱼眼环视系统**。底盘周围的四个鱼眼相机经过标定、去畸变，并被拼接成实时的**俯视鸟瞰图（BEV）**。

然后将 BEV 用作共享感知层：

- **占用分析**提供附近可行空间和障碍物提示，用于**底盘运动**
- **YOLO-World**检测并定位目标，以**辅助机械臂抓取**
- **VLM**生成简短英文描述，以**帮助你理解场景**

该演示旨在辅助**机械臂抓取**，并为**底盘运动提供定位支持**。

<div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif" />
</div>

在演示中，四个相机分别朝向**前、后、左、右**。经过标定和 GPU 拼接后，自上而下的 BEV 遵循如下布局：

- **图像顶部** = 车辆前方
- **图像中心** = 车辆车身
- 底盘周围的附近障碍物和可通行方向清晰可见
- 瓶子、纸箱或椅子等目标可以在车辆坐标系中被定位，用于抓取辅助
- VLM 可以用简短英文总结当前视图，以便进行场景理解

## 各模块的作用

| 模块 | 做什么 | 用来干什么 |
| --- | --- | --- |
| 环视拼接 | 从四个鱼眼相机构建实时俯视 BEV | 提供底盘周围的共享环视图像 |
| 占用分析 | 估计地面附近的可行空间和障碍物 | 辅助底盘运动和定位 |
| YOLO-World | 检测开放词汇目标并在车辆坐标系中给出 2D 位置 | 辅助机械臂抓取 |
| VLM 描述 | 生成当前 BEV 的简短英文描述 | 帮助操作员或智能体理解场景 |

:::note
YOLO 用于回答**目标在哪里**。VLM 用于回答**场景长什么样**。占用是 2D 地面提示，而不是 LiDAR 地图；VLM 描述不是坐标来源。
:::

## 关键特性

- 实时**四摄像头鱼眼环视拼接**
- 使用 CUDA OpenCV 进行**GPU remap、变换和融合**
- **基于 Web 的标定**，支持内参、外参和拼接缝调整
- **占用栅格**用于底盘运动辅助
- **YOLO-World 开放词汇检测**用于抓取辅助
- **VLM 场景描述**用于场景理解
- 支持 **Jetson Thor** 和 **AGX Orin / 通用 Jetson** 工作流

## 这个演示是什么

该演示将四路鱼眼视频流转换为一张 BEV 图像，然后在这一共享视图上运行感知算法。

与单摄像头流程相比，环视工作流可以为你带来：

- 底盘周围的**360 度地面感知**
- 更易于用于导航和抓取辅助的**俯视可视化**
- **一个共享 BEV**，同时用于占用、目标定位和场景描述
- **可在真实硬件上重复执行的标定流程**

整体流程为：

1. 采集来自四个鱼眼相机的图像
2. 运行鱼眼内参标定
3. 估计外参对齐和单应性矩阵
4. 将每路相机图像去畸变并映射到地面平面的 BEV 上
5. 将四个视角融合为一张环视图像
6. 在拼接后的 BEV 上运行占用、YOLO 抓取辅助和 VLM 场景理解

## 前置条件

### 硬件

- 一台 Jetson 设备，例如 **Seeed reComputer Thor J601** 或 **Jetson AGX Orin**
- **四个 USB 鱼眼相机**
- 一个显示器或远程桌面会话
- 如果你从另一台电脑打开标定页面，则需要网络连接

可选：

- 一个移动底盘，如果你希望使用占用信息进行运动辅助
- 一台机械臂，如果你希望使用 YOLO 目标位置进行抓取辅助

### 软件

- 你的目标 Jetson 板卡所支持的 JetPack
- 支持 CUDA 的 OpenCV，用于实时拼接
- 用于 Web 标定界面的 Python 环境
- YOLO-World 和可选 VLM 模型依赖

## 安装与配置

### 步骤 1. 克隆仓库

```bash
git clone https://github.com/xbs0325/j601-surround-demo.git
cd j601-surround-demo
```

### 步骤 2. 构建 CUDA OpenCV

在运行实时环视演示之前，请确保已安装支持 CUDA 的 OpenCV。

```bash
cd ~/j601-surround-demo
./scripts/build_opencv_cuda.sh --jobs $(nproc)
source scripts/env_opencv_cuda.sh
python3 -c "import cv2; print(cv2.__version__, cv2.cuda.getCudaEnabledDeviceCount())"
```

如果配置正确，CUDA 设备数量应为 `1`。

### 步骤 3. 安装 Web 标定依赖

标定 Web 界面依赖于 `aiortc` 和相关 Python 包。

```bash
./scripts/install_web_deps.sh
```

:::tip
在 Ubuntu 24.04 上，不要将 `pip3 install -r requirements.txt` 直接安装到系统 Python 中。该项目将拼接环境与感知模型环境分开。
:::

### 步骤 4. 安装感知依赖

要启用 YOLO-World 抓取辅助和 VLM 场景理解，请运行：

```bash
./scripts/setup_perception_thor.sh
./scripts/download_perception_models.sh
```

这将准备感知环境并下载所需的模型文件。

## 使用方法

先对四个相机进行标定，然后启动实时环视演示。请**不要**同时运行两者；它们需要独占相机访问。

### 步骤 1. 检查相机映射

相机设备映射定义在：

```bash
config/camera_profile.json
```

仓库中的典型映射为：

- `front`: `/dev/video0`
- `back`: `/dev/video2`
- `left`: `/dev/video3`
- `right`: `/dev/video1`

在标定前确认这些设备节点。演示运行后，你可以通过遮挡**前**相机进行再次确认：BEV 图像的**顶部**应变暗。如果前后相机对调，请在配置文件中修改设备映射。不要通过编辑标定结果文件来实现这一点。

### 步骤 2. 打开标定 Web 界面

启动标定服务：

```bash
./calib.sh
```

然后在浏览器中打开标定页面：

```text
http://<board-ip>:8787/
```

<div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_02.png" />
</div>

标定界面用于：

- 内参标定
- 外参对齐
- 拼接缝优化

对于拼接缝优化，请按照仓库中的配对方式：

- `front + left`
- `front + right`
- `back + left`
- `back + right`

将棋盘格放在两个相机视野的重叠区域。当两个视图都检测到棋盘格并显示就绪状态时，系统即可优化该拼接缝。

### 步骤 3. 运行演示

标定完成后，启动环视演示：

```bash
./run.sh
```

这将启动实时 BEV 流水线：拼接、占用、YOLO 抓取辅助以及可选的 VLM 场景描述。

你也可以直接启动感知启动器：

```bash
./scripts/run_perception.sh --vlm off --mode nav --range 2.5
./scripts/run_perception.sh --mode grasp --target bottle
```

### 常用模式

| 目标 | 命令 |
| --- | --- |
| 底盘运动辅助 | `./scripts/run_perception.sh --vlm off --mode nav --range 2.5` |
| 机械臂抓取辅助 | `./scripts/run_perception.sh --mode grasp --target bottle` |
| 无界面运行 | `./scripts/run_perception.sh --no-window` |
| 离线冒烟测试 | `/usr/bin/python3 -m perception.smoke_offline` |

- `--mode nav` 侧重于底盘周围的占用信息
- `--mode grasp --target bottle` 让 YOLO 寻找抓取目标
- `--vlm off` 在你只需要定位或检测时跳过场景描述

## 演示结果与控制

当演示窗口运行时，可以使用以下键盘快捷键：

| 按键 | 动作 |
| --- | --- |
| `ESC` 或 `q` | 退出 |
| `o` | 运行一次 YOLO-World 进行抓取辅助 |
| `a` | 触发一次 VLM 场景描述 |
| `s` | 保存一帧图像 |
| `m` | 切换占用图显示 |

在运行过程中，演示还会写出：

- `output/perception/preview.jpg`
- `events.jsonl`

这些文件有助于调试、验证以及后续集成。

## 坐标约定

本项目使用如下 BEV 约定：

| 项目 | 含义 |
| --- | --- |
| 图像向上 | 车辆前方 |
| `base_link` 原点 | 约为 BEV 中心 |
| `+X` | 前方 |
| `+Y` | 左侧 |

因此，YOLO 可以报告近似的 2D 目标位置，例如方向、前向距离和横向偏移，以辅助抓取。

结果仍然是**地面平面近似**。它不是 6 自由度抓取位姿，不应被视为精确操作的真实标注。

## 注意事项与限制

- 本演示提供的是**感知辅助**。它**不会**向底盘或机械臂发送控制指令
- **YOLO** 进行目标定位以辅助抓取；它本身不会闭合抓取控制环
- **VLM** 输出用于**场景理解**，而不是用于坐标
- 占用是**2D 地面提示**，而不是 LiDAR SLAM 地图
- 实时拼接面向**支持 CUDA 的 Jetson 系统**
- 仅 CPU 模式适合用于调试，但不推荐用于实时部署

## 资源

- [reComputer Robotics J601 入门](https://wiki.seeedstudio.com/cn/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/)
- [GitHub](https://github.com/xbs0325/j601-surround-demo)

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
