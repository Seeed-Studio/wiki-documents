---
description: 在 Jetson AGX Thor 上构建一个四摄像头鱼眼环视演示。拼接实时 BEV 用于底盘定位，使用 YOLO 辅助机械臂抓取，并使用 VLM 帮助理解场景。
title: 在 Jetson AGX Thor 上构建四摄像头鱼眼环视演示
keywords:
  - Jetson AGX Thor
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
  - Sensing
image: https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif
slug: /jetson_fisheye_surround_view_demo
sku: 100066562, 101090101
last_update:
  date: 08/24/2026
  author: haochen
createdAt: '2026-08-18'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/cn/jetson_fisheye_surround_view_demo/
---

## 介绍

本演示在 **NVIDIA Jetson AGX Thor** 上运行一个**四摄像头鱼眼环视**流水线。底盘周围的四个摄像头经过标定并拼接为实时的**俯视图（BEV）**。占用图提示底盘运动，YOLO-World 用于定位抓取目标，VLM 用于生成场景描述。

{/* <div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif" />
</div> */}

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/o0NTeeLV4Vk" title="Four-Camera Fisheye Surround View Demo on Jetson AGX Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

拼接后的 BEV 布局：

- **图像顶部** = 车辆前方
- **图像中心** = 车辆车身
- 摄像头朝向**前、后、左、右**

:::note
YOLO 回答**目标在哪里**。VLM 回答**场景是什么样**。占用图是二维地面提示，而不是 LiDAR 地图。
:::

本演示已在 **reComputer Robotics J601** 上验证。

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reComputer Robotics J601 </th>
        <th> Sensing SG3S-ISX031C-GMSL2F </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090101-3mp-gmsl2-camera-module-190-degree.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thor-p-6937.html" target="_blank" rel="noopener noreferrer">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html" target="_blank" rel="noopener noreferrer">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

## 关键特性

- 使用 CUDA OpenCV 进行 GPU 拼接
- 通过网页进行内参、外参和拼接缝标定
- 在一个共享 BEV 上运行占用图、YOLO-World 和 VLM
- 已在 **Jetson AGX Thor** / **reComputer Robotics J601** 上验证

## 前置条件

### 硬件

- **reComputer Robotics J601**（Jetson AGX Thor）
- **四个 [Sensing SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html) GMSL2 鱼眼摄像头**
- **一根 [Mini-Fakra 四合一线缆](https://www.seeedstudio.com/Mini-fakra-Coaxial-Cable-4-in-1-0-5m-Female-to-Female-p-6484.html)**，让四个摄像头共享一个 GMSL 端口
- 一个显示器或远程桌面会话
- 如果从另一台电脑打开标定页面，需要网络访问

可选：

- 一个移动底盘，如果你想使用占用图进行运动辅助
- 一台机械臂，如果你想使用 YOLO 目标位置进行抓取辅助

### 软件

- 适用于 J601 的、带 GMSL 驱动支持的 JetPack
- 支持 CUDA 的 OpenCV，用于实时拼接
- 用于网页标定 UI 的 Python 环境
- YOLO-World 和可选 VLM 模型依赖

## 硬件连接

在标定前，将四个 Sensing GMSL2 鱼眼摄像头连接到 **reComputer Robotics J601** 上的**一个 Mini-Fakra GMSL 端口**。J601 有两个 Mini-Fakra 接口（最多支持八个 GMSL2 摄像头）。本演示使用**一个 GMSL 端口**和一根四合一 Mini-Fakra 线缆。

1. 通过 XT30 直流输入为 J601 板供电。
2. 如果你在使用 GMSL 扩展板，先将其插在摄像头扩展排针上。
3. 将 Mini-Fakra 四合一线缆插入**一个 Mini-Fakra GMSL 端口**。
4. 将四个 Sensing 鱼眼摄像头连接到该线缆的四个 Fakra 端。
5. 将摄像头安装在底盘周围，使其朝向**前、后、左、右**。
6. 如需在板子上观看实时 BEV 窗口，可选连接一个 HDMI 显示器。

关于在 J601 上启用 GMSL，请参阅 [Robotics J601 Hardware Interfaces Usage](https://wiki.seeedstudio.com/cn/recomputer_jetson_robotics_j601_interfaces_usage/)。

<div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_03.png" />
</div>

:::tip
摄像头连接完成后，确认 `/dev/video*` 节点以及在 `config/camera_profile.json` 中的映射。参见 [Step 1. Check Camera Mapping](#step-1-check-camera-mapping)。
:::

## 安装与设置

### 步骤 1. 克隆仓库

```bash
git clone https://github.com/xbs0325/j601-surround-demo.git
cd j601-surround-demo
```

### 步骤 2. 构建 CUDA OpenCV

在运行实时环视演示之前，确保已安装支持 CUDA 的 OpenCV。

```bash
cd ~/j601-surround-demo
./scripts/build_opencv_cuda.sh --jobs $(nproc)
source scripts/env_opencv_cuda.sh
python3 -c "import cv2; print(cv2.__version__, cv2.cuda.getCudaEnabledDeviceCount())"
```

如果设置正确，CUDA 设备数量应为 `1`。

### 步骤 3. 安装网页标定依赖

标定网页 UI 依赖于 `aiortc` 和相关 Python 包。

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

先对四个摄像头进行标定，然后再启动实时环视演示。**不要**同时运行两者；它们需要独占摄像头访问。

### 步骤 1. 检查摄像头映射

摄像头设备映射定义在：

```bash
config/camera_profile.json
```

仓库中的典型映射：

- `front`: `/dev/video0`
- `back`: `/dev/video2`
- `left`: `/dev/video3`
- `right`: `/dev/video1`

在标定前确认这些设备节点。演示运行后，你可以通过遮挡**前**摄像头进行再次确认：BEV 图像的**顶部**应变暗。如果前后颠倒，请在配置文件中更改设备映射。不要为此编辑标定结果文件。

### 步骤 2. 打开网页标定 UI

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

标定 UI 用于：

- 内参标定
- 外参对齐
- 拼接缝优化

对于拼接缝优化，请按照仓库中的配对方式：

- `front + left`
- `front + right`
- `back + left`
- `back + right`

将棋盘格放在两个摄像头视野的重叠区域。当两个视野都检测到棋盘格并显示就绪状态时，系统即可优化该拼接缝。

### 步骤 3. 运行演示

标定完成后，启动环视演示：

```bash
./run.sh
```

这将启动实时 BEV 流水线：拼接、占用图、YOLO 抓取辅助以及可选的 VLM 场景描述。

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

- `--mode nav` 侧重于底盘周围的占用图
- `--mode grasp --target bottle` 让 YOLO 寻找抓取目标
- `--vlm off` 在你只需要定位或检测时跳过场景描述

## 演示结果与控制

当演示窗口运行时，可以使用以下键盘快捷键：

| 按键 | 动作 |
| --- | --- |
| `ESC` 或 `q` | 退出 |
| `o` | 运行一次 YOLO-World 进行抓取辅助 |
| `a` | 触发一次 VLM 场景理解描述 |
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

因此，YOLO 可以报告近似的二维目标位置，例如方向、前向距离和横向偏移，以辅助抓取。

结果仍然是**地平面近似**。它不是 6 自由度抓取位姿，不应被视为精确操作的真实标注。

## 注意事项与限制

- 本演示提供的是**感知辅助**。它**不会**向底盘或机械臂发送控制指令
- **YOLO** 仅用于定位目标以辅助抓取；它本身不会闭合抓取控制环
- **VLM** 输出用于**场景理解**，而不是用于坐标
- 占用图是**二维地面提示**，不是 LiDAR SLAM 地图
- 实时拼接面向**支持 CUDA 的 Jetson AGX Thor**
- 仅 CPU 模式适合用于调试，但不推荐用于实时部署

## 资源

- [演示视频](https://www.youtube.com/watch?v=o0NTeeLV4Vk)
- [reComputer Robotics J601 入门指南](https://wiki.seeedstudio.com/cn/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/)
- [Robotics J601 硬件接口使用](https://wiki.seeedstudio.com/cn/recomputer_jetson_robotics_j601_interfaces_usage/)
- [GitHub](https://github.com/xbs0325/j601-surround-demo)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
